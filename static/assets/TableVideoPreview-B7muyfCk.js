import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-DdCO3Ljm.js";import{d as t,l as i,r as a,o as l,i as r,w as o,e as s,a as p}from"./index-2xLKjzYq.js";import{_ as m}from"./Table.vue_vue_type_script_lang-DTytrb6y.js";import{a as d}from"./index-DmMjyIHJ.js";import"./el-card-CD2hhTZR.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-RyvCdhZB.js";import"./el-table-column-C2GGPmhj.js";import"./index-DWeC_i3B.js";import"./debounce-DO3_BrtI.js";import"./el-checkbox-Cnoc19Lk.js";import"./isArrayLikeObject-B57iC3F0.js";import"./raf-D1s7uqqa.js";import"./el-tag-smTibUIk.js";import"./el-pagination-CdOdEOWD.js";import"./el-select-CCB0_Urf.js";import"./strings-B8BwOHpW.js";import"./useInput-EPahjfzz.js";import"./el-image-viewer-Bc-SILzz.js";import"./el-empty-4RGyeNSH.js";import"./tsxHelper-BfGIXz-w.js";import"./el-dropdown-item-DrYJ2abQ.js";import"./castArray-CRPpvBR1.js";import"./refs-B1gDE0ct.js";import"./index-rslcWDjs.js";import"./index-BDn-hgQS.js";const n=t({__name:"TableVideoPreview",setup(t){const{t:n}=i(),j=[{field:"title",label:n("tableDemo.title")},{field:"video_uri",label:n("tableDemo.videoPreview")},{field:"author",label:n("tableDemo.author")},{field:"display_time",label:n("tableDemo.displayTime")},{field:"pageviews",label:n("tableDemo.pageviews")}],u=a(!0);let c=a([]);return(async e=>{const t=await d(e||{pageIndex:1,pageSize:10}).catch((()=>{})).finally((()=>{u.value=!1}));t&&(c.value=t.data.list)})(),(t,i)=>(l(),r(p(e),{title:p(n)("router.PicturePreview")},{default:o((()=>[s(p(m),{columns:j,data:p(c),loading:u.value,preview:["image_uri","video_uri"]},null,8,["data","loading"])])),_:1},8,["title"]))}});export{n as default};