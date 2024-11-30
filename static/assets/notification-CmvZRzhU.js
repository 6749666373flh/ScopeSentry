import{d as e,s as t,v as a,S as o,C as i,r as l,o as n,c as m,e as d,w as s,a as c,f as u,t as r,y as p,z as f,G as v,i as b,j as _,F as y,l as h,_ as x}from"./index-CLgjJy2L.js";import{E as N,a as g}from"./el-col-CeS9FF_9.js";import{E as w,a as V}from"./el-form-CyQCNofw.js";import{a as j,E as T}from"./el-radio-group-BjW4huAo.js";import{E as S}from"./el-text-CilU8fZt.js";import{E as k}from"./el-switch-CUkbzPfV.js";import{E as U}from"./el-divider-B2v5rJA4.js";import{E as I}from"./el-card-CdvbZBex.js";import{_ as E}from"./Dialog.vue_vue_type_style_index_0_lang-DjrQx5cp.js";import{_ as A}from"./Table.vue_vue_type_script_lang-DJc-YjoG.js";import{u as C}from"./useTable-BBFhiX-d.js";import{e as M,f as D,h as R,u as O,i as P,j as W}from"./index-CH392Xrq.js";import"./castArray-CcAiHetO.js";import"./refs-Dw-H7609.js";import"./el-popper-CaFR7Cjt.js";import"./el-table-column-DrBbA1UV.js";import"./index-Cu272xPu.js";import"./debounce-CIcVECfT.js";import"./el-checkbox-DbDCqMQu.js";import"./isArrayLikeObject-CRQFYJ_t.js";import"./raf-BLHXPmBe.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-tag-D6hIb9V5.js";import"./el-pagination-uR_gQTrf.js";import"./el-select-CFiSjX0y.js";import"./strings-BAPUa2fl.js";import"./useInput-DX4to9HK.js";import"./el-image-viewer-BF14MS9t.js";import"./el-empty-D1z8uu7s.js";import"./tsxHelper-Cn3mpvqc.js";import"./el-dropdown-item-Dcg5gyE9.js";import"./index-D38LGGz3.js";import"./index-1Oi9uy0T.js";const F={class:"mb-10px"},H={style:{position:"relative",top:"12px"}},L=x(e({__name:"notification",setup(e){const{t:x}=h(),L=t([{field:"selection",type:"selection",width:"55"},{field:"name",label:"Name",minWidth:20},{field:"method",label:"Method",minWidth:20},{field:"url",label:"URL"},{field:"contentType",label:"Content Type",minWidth:25},{field:"data",label:"POST DATA"},{field:"state",label:x("common.state"),minWidth:25,formatter:(e,t,i)=>{let l="",n="";return 1==i?(l="#2eb98a",n=x("common.on")):(l="red",n=x("common.off")),a(g,{gutter:20},[a(N,{span:1},[a(o,{icon:"clarity:circle-solid",color:l,size:10})]),a(N,{span:5},[a(S,{type:"info"},n)])])}},{field:"action",label:x("tableDemo.action"),formatter:(e,t,o)=>a("div",[a(i,{type:"primary",onClick:()=>te(e)},x("common.edit")),a(i,{type:"danger",onClick:()=>oe(e)},x("common.delete"))])}]),{tableState:z,tableMethods:G}=C({fetchDataApi:async()=>({list:(await D()).data.list})}),{dataList:J}=z,{getList:B,getElTableExpose:K}=G,X=t({name:"",url:"",method:"GET",contentType:"raw",data:"",state:!0}),Z=t({dirScanNotification:!0,portScanNotification:!0,sensitiveNotification:!0,subdomainNotification:!0,subdomainTakeoverNotification:!0,pageMonNotification:!0,vulNotification:!0});(async()=>{const e=await R();Z.dirScanNotification=e.data.dirScanNotification,Z.portScanNotification=e.data.portScanNotification,Z.sensitiveNotification=e.data.sensitiveNotification,Z.subdomainNotification=e.data.subdomainNotification,Z.subdomainTakeoverNotification=e.data.subdomainTakeoverNotification,Z.pageMonNotification=e.data.pageMonNotification,Z.vulNotification=e.data.vulNotification})();const q=l(!1),Q=l(!1),Y=async()=>{$.value="",X.name="",X.url="",X.method="GET",X.contentType="raw",X.data="",X.state=!0,Q.value=!0},$=l(""),ee=l(!1),te=e=>{$.value=e.id,X.name=e.name,X.url=e.url,X.method=e.method,X.contentType=e.contentType,X.data=e.data,X.state=e.state,Q.value=!0},ae=l(!1),oe=async e=>{ae.value=!0;try{await M([e.id]);ae.value=!1,B()}catch(t){ae.value=!1,B()}},ie=l([]),le=async()=>{window.confirm("Are you sure you want to delete the selected data?")&&await ne()},ne=async()=>{const e=await K(),t=(null==e?void 0:e.getSelectionRows())||[];ie.value=t.map((e=>e.id)),ae.value=!0;try{await M(ie.value);ae.value=!1,B()}catch(a){ae.value=!1,B()}};return(e,t)=>(n(),m(y,null,[d(c(I),{shadow:"never",class:"mb-20px"},{header:s((()=>[d(c(g),null,{default:s((()=>[d(c(N),{span:3,style:{height:"100%"}},{default:s((()=>[u("span",null,r(c(x)("configuration.noticeConfig")),1)])),_:1})])),_:1})])),default:s((()=>[d(c(g),null,{default:s((()=>[d(c(N),{style:{position:"relative",top:"16px"}},{default:s((()=>[u("div",F,[d(c(i),{type:"primary",onClick:Y},{default:s((()=>[p(r(c(x)("configuration.newWebhookConfig")),1)])),_:1}),d(c(i),{type:"danger",loading:ae.value,onClick:le},{default:s((()=>[p(r(c(x)("common.delete")),1)])),_:1},8,["loading"])])])),_:1})])),_:1}),u("div",H,[d(c(A),{data:c(J),columns:L,stripe:"",border:!0,resizable:!0,maxHeight:"200",style:{fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}},null,8,["data","columns"])]),d(c(U)),d(c(w),{model:Z,"label-width":"auto","status-icon":"",ref:"ruleFormRef",style:{position:"relative",top:"1rem"}},{default:s((()=>[d(c(g),null,{default:s((()=>[d(c(N),{span:5},{default:s((()=>[d(c(V),{label:c(x)("subdomain.subdomainName")},{default:s((()=>[d(c(k),{modelValue:Z.subdomainNotification,"onUpdate:modelValue":t[0]||(t[0]=e=>Z.subdomainNotification=e),"inline-prompt":"","active-text":c(x)("common.switchAction"),"inactive-text":c(x)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["label"])])),_:1}),d(c(N),{span:5},{default:s((()=>[d(c(V),{label:c(x)("task.subdomainTakeover")},{default:s((()=>[d(c(k),{modelValue:Z.subdomainTakeoverNotification,"onUpdate:modelValue":t[1]||(t[1]=e=>Z.subdomainTakeoverNotification=e),"inline-prompt":"","active-text":c(x)("common.switchAction"),"inactive-text":c(x)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["label"])])),_:1}),d(c(N),{span:5},{default:s((()=>[d(c(V),{label:c(x)("dirScan.dirScanName")},{default:s((()=>[d(c(k),{modelValue:Z.dirScanNotification,"onUpdate:modelValue":t[2]||(t[2]=e=>Z.dirScanNotification=e),"inline-prompt":"","active-text":c(x)("common.switchAction"),"inactive-text":c(x)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["label"])])),_:1})])),_:1}),d(c(g),null,{default:s((()=>[d(c(N),{span:5},{default:s((()=>[d(c(V),{label:c(x)("task.portScan")},{default:s((()=>[d(c(k),{modelValue:Z.portScanNotification,"onUpdate:modelValue":t[3]||(t[3]=e=>Z.portScanNotification=e),"inline-prompt":"","active-text":c(x)("common.switchAction"),"inactive-text":c(x)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["label"])])),_:1}),d(c(N),{span:5},{default:s((()=>[d(c(V),{label:c(x)("sensitiveInformation.sensitiveInformationName")},{default:s((()=>[d(c(k),{modelValue:Z.sensitiveNotification,"onUpdate:modelValue":t[4]||(t[4]=e=>Z.sensitiveNotification=e),"inline-prompt":"","active-text":c(x)("common.switchAction"),"inactive-text":c(x)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["label"])])),_:1}),d(c(N),{span:5},{default:s((()=>[d(c(V),{label:c(x)("PageMonitoring.pageMonitoringName")},{default:s((()=>[d(c(k),{modelValue:Z.pageMonNotification,"onUpdate:modelValue":t[5]||(t[5]=e=>Z.pageMonNotification=e),"inline-prompt":"","active-text":c(x)("common.switchAction"),"inactive-text":c(x)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["label"])])),_:1})])),_:1}),d(c(g),null,{default:s((()=>[d(c(N),{span:5},{default:s((()=>[d(c(V),{label:c(x)("vulnerability.vulnerabilityName")},{default:s((()=>[d(c(k),{modelValue:Z.vulNotification,"onUpdate:modelValue":t[6]||(t[6]=e=>Z.vulNotification=e),"inline-prompt":"","active-text":c(x)("common.switchAction"),"inactive-text":c(x)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["label"])])),_:1})])),_:1}),d(c(g),null,{default:s((()=>[d(c(N),{span:2,offset:8},{default:s((()=>[d(c(V),null,{default:s((()=>[d(c(f),{type:"primary",onClick:t[7]||(t[7]=e=>(async()=>{q.value=!0,await O(Z.dirScanNotification,Z.portScanNotification,Z.sensitiveNotification,Z.subdomainNotification,Z.subdomainTakeoverNotification,Z.pageMonNotification,Z.vulNotification),q.value=!1})()),loading:q.value},{default:s((()=>[p(r(c(x)("common.submit")),1)])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1})])),_:1},8,["model"])])),_:1}),d(c(E),{modelValue:Q.value,"onUpdate:modelValue":t[15]||(t[15]=e=>Q.value=e),title:c(x)("configuration.newWebhookConfig"),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"},maxHeight:"100"},{default:s((()=>[d(c(S),{class:"mx-2",type:"danger",size:"small",style:{position:"relative",left:"2rem"}},{default:s((()=>[p(r(c(x)("configuration.noticeHelp")),1)])),_:1}),d(c(w),{model:X,"label-width":"auto","status-icon":"",ref:"ruleFormRef",style:{position:"relative",top:"1rem"}},{default:s((()=>[d(c(V),{label:"Name",prop:"name"},{default:s((()=>[d(c(v),{modelValue:X.name,"onUpdate:modelValue":t[8]||(t[8]=e=>X.name=e),placeholder:"Input name."},null,8,["modelValue"])])),_:1}),d(c(V),{label:"Method",prop:"method"},{default:s((()=>[d(c(j),{modelValue:X.method,"onUpdate:modelValue":t[9]||(t[9]=e=>X.method=e)},{default:s((()=>[d(c(T),{value:"GET"},{default:s((()=>[p("GET")])),_:1}),d(c(T),{value:"POST"},{default:s((()=>[p("POST")])),_:1})])),_:1},8,["modelValue"])])),_:1}),d(c(V),{label:"URL",prop:"url"},{default:s((()=>[d(c(v),{modelValue:X.url,"onUpdate:modelValue":t[10]||(t[10]=e=>X.url=e),placeholder:"Input URL."},null,8,["modelValue"])])),_:1}),"POST"==X.method?(n(),b(c(V),{key:0,label:"Data Type",prop:"contentType"},{default:s((()=>[d(c(j),{modelValue:X.contentType,"onUpdate:modelValue":t[11]||(t[11]=e=>X.contentType=e)},{default:s((()=>[d(c(T),{value:"raw"},{default:s((()=>[p("Raw")])),_:1}),d(c(T),{value:"json"},{default:s((()=>[p("Json")])),_:1})])),_:1},8,["modelValue"])])),_:1})):_("",!0),"POST"==X.method?(n(),b(c(V),{key:1,label:"Data",prop:"Data"},{default:s((()=>[d(c(v),{modelValue:X.data,"onUpdate:modelValue":t[12]||(t[12]=e=>X.data=e),placeholder:"Input POST Data."},null,8,["modelValue"])])),_:1})):_("",!0),d(c(V),{label:c(x)("common.state")},{default:s((()=>[d(c(k),{modelValue:X.state,"onUpdate:modelValue":t[13]||(t[13]=e=>X.state=e),"inline-prompt":"","active-text":c(x)("common.switchAction"),"inactive-text":c(x)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["label"]),d(c(g),null,{default:s((()=>[d(c(N),{span:2,offset:8},{default:s((()=>[d(c(V),null,{default:s((()=>[d(c(f),{type:"primary",onClick:t[14]||(t[14]=e=>(async()=>{ee.value=!0,""==$.value?await P(X.name,X.url,X.method,X.contentType,X.data,X.state):await W($.value,X.name,X.url,X.method,X.contentType,X.data,X.state),B(),ee.value=!1,Q.value=!1})()),loading:ee.value},{default:s((()=>[p(r(c(x)("common.submit")),1)])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1})])),_:1},8,["model"])])),_:1},8,["modelValue","title"])],64))}}),[["__scopeId","data-v-00fd9ad3"]]);export{L as default};