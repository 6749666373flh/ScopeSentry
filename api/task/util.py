# -------------------------------------
# @file      : util.py
# @author    : Autumn
# @contact   : rainy-autumn@outlook.com
# @time      : 2024/10/26 22:48
# -------------------------------------------
import ipaddress
import json

from bson import ObjectId
from motor.motor_asyncio import AsyncIOMotorCursor

from api.node import get_node_all
from core.apscheduler_handler import scheduler
from core.db import get_mongo_db
from core.redis_handler import get_redis_pool
from core.util import generate_random_string, get_now_time
from loguru import logger


async def generate_ip_range(start_ip, end_ip):
    start = ipaddress.ip_address(start_ip)
    end = ipaddress.ip_address(end_ip)

    ip_list = []
    current_ip = start
    while current_ip <= end:
        ip_list.append(str(current_ip))
        current_ip += 1

    return ip_list


# 解析ip段
async def generate_target(target):
    try:
        if '-' in target:
            start_ip, end_ip = target.split('-')
            l = await generate_ip_range(start_ip, end_ip)
            return l
        elif '/' in target:
            network = ipaddress.ip_network(target, strict=False)
            return [str(ip) for ip in network.hosts()]
        else:
            return [target]
    except Exception as e:
        logger.error(e)
        return []


# 根据原始target生成目标列表
async def get_target_list(raw_target):
    target_list= []
    for t in raw_target.split("\n"):
        t.replace("http://", "").replace("https://", "")
        t = t.strip("\n").strip("\r").strip()
        result = await generate_target(t)
        target_list.extend(result)
    return target_list


async def task_progress():
    async for db in get_mongo_db():
        async for redis in get_redis_pool():
            query = {"progress": {"$ne": 100}}
            cursor: AsyncIOMotorCursor = db.task.find(query)
            result = await cursor.to_list(length=None)
            if len(result) == 0:
                return True
            for r in result:
                id = str(r["_id"])
                key = f"TaskInfo:tmp:{id}"
                exists = await redis.exists(key)
                if exists:
                    count = await redis.llen(key)
                    progress_tmp = round(count / r['taskNum'], 2)
                    progress_tmp = round(progress_tmp * 100, 1)
                    if progress_tmp > 100:
                        progress_tmp = 100
                    if progress_tmp == 100:
                        time_key = f"TaskInfo:time:{id}"
                        time_value = await redis.get(time_key)
                        await db.task.update_one({"_id": r["_id"]}, {"$set": {"endTime": time_value}})
                    await db.task.update_one({"_id": r["_id"]}, {"$set": {"progress": progress_tmp}})
                else:
                    await db.task.update_one({"_id": r["_id"]}, {"$set": {"progress": 0}})
            return


# async def scheduler_scan_task(id):
#     logger.info(f"Scheduler scan {id}")
#     async for db in get_mongo_db():
#         async for redis in get_redis_pool():
#             next_time = scheduler.get_job(id).next_run_time
#             formatted_time = next_time.strftime("%Y-%m-%d %H:%M:%S")
#             doc = await db.ScheduledTasks.find_one({"id": id})
#             run_id_last = doc.get("runner_id", "")
#             if run_id_last != "" and id != run_id_last:
#                 progresskeys = await redis.keys(f"TaskInfo:progress:{run_id_last}:*")
#                 for pgk in progresskeys:
#                     await redis.delete(pgk)
#             task_id = generate_random_string(15)
#             update_document = {
#                 "$set": {
#                     "lastTime": get_now_time(),
#                     "nextTime": formatted_time,
#                     "runner_id": task_id
#                 }
#             }
#             await db.ScheduledTasks.update_one({"id": id}, update_document)
#             query = {"_id": ObjectId(id)}
#             doc = await db.task.find_one(query)
#             targetList = []
#             for t in doc['target'].split("\n"):
#                 t.replace("http://", "").replace("https://", "")
#                 t = t.strip("\n").strip("\r").strip()
#                 if t != "" and t not in targetList:
#                     targetList.append(t)
#             await create_scan_task(doc, task_id, targetList, redis)


async def delete_asset(task_ids, is_project=False):
    async for db in get_mongo_db():
        key = ["asset", "subdomain", "SubdoaminTakerResult", "UrlScan", "crawler", "SensitiveResult", "DirScanResult",
               "vulnerability", "PageMonitoring"]
        del_query = {"taskName": {"$in": task_ids}}
        if is_project:
            del_query = {
                "$or": [
                    {"taskName": {"$in": task_ids}},
                    {"project": {"$in": task_ids}}
                ]
            }
        for k in key:
            result = await db[k].delete_many(del_query)
            if result.deleted_count > 0:
                logger.info("Deleted {} {} documents".format(k, result.deleted_count))
            else:
                logger.info("Deleted {} None documents".format(k))