import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-BgCcO80c.js";import{d as t,l as i,r as a,o as l,i as r,w as o,e as s,a as p}from"./index-B4Nyjh3H.js";import{_ as m}from"./Table.vue_vue_type_script_lang-DkXax4KK.js";import{a as d}from"./index-B2RH5IwT.js";import"./el-card-wk8kGoMw.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-DBt0ZFPB.js";import"./el-table-column-D5fUDOpn.js";import"./index-ThnV7dxG.js";import"./isEqual-DFD3TClT.js";import"./debounce-4WtFbZlf.js";import"./el-checkbox-DAPJr8Xi.js";import"./isArrayLikeObject-CWayLN3s.js";import"./raf-jjs8tbGM.js";import"./el-tag-DS_6W9-f.js";import"./el-select-ErNzBCXo.js";import"./useInput-Drsa8fv-.js";import"./el-image-viewer-CLYRUyY9.js";import"./tsxHelper-TQdELaO0.js";import"./el-dropdown-item-BheZ-il5.js";import"./castArray-BrlE0VBR.js";import"./refs-CGmkSrb7.js";import"./index-xQ3iUQKd.js";import"./index-CdbOSPly.js";const u=t({__name:"TableVideoPreview",setup(t){const{t:u}=i(),n=[{field:"title",label:u("tableDemo.title")},{field:"video_uri",label:u("tableDemo.videoPreview")},{field:"author",label:u("tableDemo.author")},{field:"display_time",label:u("tableDemo.displayTime")},{field:"pageviews",label:u("tableDemo.pageviews")}],j=a(!0);let _=a([]);return(async e=>{const t=await d(e||{pageIndex:1,pageSize:10}).catch((()=>{})).finally((()=>{j.value=!1}));t&&(_.value=t.data.list)})(),(t,i)=>(l(),r(p(e),{title:p(u)("router.PicturePreview")},{default:o((()=>[s(p(m),{columns:n,data:p(_),loading:j.value,preview:["image_uri","video_uri"]},null,8,["data","loading"])])),_:1},8,["title"]))}});export{u as default};