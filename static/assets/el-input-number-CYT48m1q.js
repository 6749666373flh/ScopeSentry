import{aQ as e,W as a,au as l,a0 as t,$ as n,bq as r,b5 as u,Z as s,d as i,aw as o,a4 as d,r as c,s as m,ax as b,a5 as v,aL as p,aC as f,b8 as N,R as y,K as V,c9 as I,o as h,c as g,G as x,a as S,n as w,ab as E,A,e as F,w as K,i as k,aK as _,ci as B,aa as T,j as $,aJ as M,cj as O,ac as z,L as C,a6 as L,bs as j,a1 as P,az as D,ae as G}from"./index-vMt5tOuI.js";const W=100,Y=600,q={beforeMount(a,l){const t=l.value,{interval:n=W,delay:r=Y}=e(t)?{}:t;let u,s;const i=()=>e(t)?t():t.handler(),o=()=>{s&&(clearTimeout(s),s=void 0),u&&(clearInterval(u),u=void 0)};a.addEventListener("mousedown",(e=>{0===e.button&&(o(),i(),document.addEventListener("mouseup",(()=>o()),{once:!0}),s=setTimeout((()=>{u=setInterval((()=>{i()}),n)}),r))}))}},J=a({id:{type:String,default:void 0},step:{type:Number,default:1},stepStrictly:Boolean,max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},modelValue:Number,readonly:Boolean,disabled:Boolean,size:l,controls:{type:Boolean,default:!0},controlsPosition:{type:String,default:"",values:["","right"]},valueOnClear:{type:[String,Number,null],validator:e=>null===e||t(e)||["min","max"].includes(e),default:null},name:String,label:String,placeholder:String,precision:{type:Number,validator:e=>e>=0&&e===Number.parseInt(`${e}`,10)},validateEvent:{type:Boolean,default:!0}}),Q={[n]:(e,a)=>a!==e,blur:e=>e instanceof FocusEvent,focus:e=>e instanceof FocusEvent,[r]:e=>t(e)||u(e),[s]:e=>t(e)||u(e)},R=["aria-label","onKeydown"],Z=["aria-label","onKeydown"],H=i({name:"ElInputNumber"});const U=G(L(i({...H,props:J,emits:Q,setup(e,{expose:a,emit:l}){const i=e,{t:L}=o(),G=d("input-number"),W=c(),Y=m({currentValue:i.modelValue,userInput:null}),{formItem:J}=b(),Q=v((()=>t(i.modelValue)&&i.modelValue<=i.min)),H=v((()=>t(i.modelValue)&&i.modelValue>=i.max)),U=v((()=>{const e=ne(i.step);return p(i.precision)?Math.max(ne(i.modelValue),e):(i.precision,i.precision)})),X=v((()=>i.controls&&"right"===i.controlsPosition)),ee=f(),ae=N(),le=v((()=>{if(null!==Y.userInput)return Y.userInput;let e=Y.currentValue;if(u(e))return"";if(t(e)){if(Number.isNaN(e))return"";p(i.precision)||(e=e.toFixed(i.precision))}return e})),te=(e,a)=>{if(p(a)&&(a=U.value),0===a)return Math.round(e);let l=String(e);const t=l.indexOf(".");if(-1===t)return e;if(!l.replace(".","").split("")[t+a])return e;const n=l.length;return"5"===l.charAt(n-1)&&(l=`${l.slice(0,Math.max(0,n-1))}6`),Number.parseFloat(Number(l).toFixed(a))},ne=e=>{if(u(e))return 0;const a=e.toString(),l=a.indexOf(".");let t=0;return-1!==l&&(t=a.length-l-1),t},re=(e,a=1)=>t(e)?te(e+i.step*a):Y.currentValue,ue=()=>{if(i.readonly||ae.value||H.value)return;const e=Number(le.value)||0,a=re(e);oe(a),l(r,Y.currentValue),ve()},se=()=>{if(i.readonly||ae.value||Q.value)return;const e=Number(le.value)||0,a=re(e,-1);oe(a),l(r,Y.currentValue),ve()},ie=(e,a)=>{const{max:t,min:n,step:r,precision:o,stepStrictly:d,valueOnClear:c}=i;t<n&&j("InputNumber","min should not be greater than max.");let m=Number(e);if(u(e)||Number.isNaN(m))return null;if(""===e){if(null===c)return null;m=P(c)?{min:n,max:t}[c]:c}return d&&(m=te(Math.round(m/r)*r,o)),p(o)||(m=te(m,o)),(m>t||m<n)&&(m=m>t?t:n,a&&l(s,m)),m},oe=(e,a=!0)=>{var t;const r=Y.currentValue,u=ie(e);a?r===u&&e||(Y.userInput=null,l(s,u),r!==u&&l(n,u,r),i.validateEvent&&(null==(t=null==J?void 0:J.validate)||t.call(J,"change").catch((e=>D()))),Y.currentValue=u):l(s,u)},de=e=>{Y.userInput=e;const a=""===e?null:Number(e);l(r,a),oe(a,!1)},ce=e=>{const a=""!==e?Number(e):"";(t(a)&&!Number.isNaN(a)||""===e)&&oe(a),ve(),Y.userInput=null},me=e=>{l("focus",e)},be=e=>{var a;Y.userInput=null,l("blur",e),i.validateEvent&&(null==(a=null==J?void 0:J.validate)||a.call(J,"blur").catch((e=>D())))},ve=()=>{Y.currentValue!==i.modelValue&&(Y.currentValue=i.modelValue)},pe=e=>{document.activeElement===e.target&&e.preventDefault()};return y((()=>i.modelValue),((e,a)=>{const l=ie(e,!0);null===Y.userInput&&l!==a&&(Y.currentValue=l)}),{immediate:!0}),V((()=>{var e;const{min:a,max:n,modelValue:r}=i,u=null==(e=W.value)?void 0:e.input;if(u.setAttribute("role","spinbutton"),Number.isFinite(n)?u.setAttribute("aria-valuemax",String(n)):u.removeAttribute("aria-valuemax"),Number.isFinite(a)?u.setAttribute("aria-valuemin",String(a)):u.removeAttribute("aria-valuemin"),u.setAttribute("aria-valuenow",Y.currentValue||0===Y.currentValue?String(Y.currentValue):""),u.setAttribute("aria-disabled",String(ae.value)),!t(r)&&null!=r){let e=Number(r);Number.isNaN(e)&&(e=null),l(s,e)}})),I((()=>{var e,a;const l=null==(e=W.value)?void 0:e.input;null==l||l.setAttribute("aria-valuenow",`${null!=(a=Y.currentValue)?a:""}`)})),a({focus:()=>{var e,a;null==(a=null==(e=W.value)?void 0:e.focus)||a.call(e)},blur:()=>{var e,a;null==(a=null==(e=W.value)?void 0:e.blur)||a.call(e)}}),(e,a)=>(h(),g("div",{class:w([S(G).b(),S(G).m(S(ee)),S(G).is("disabled",S(ae)),S(G).is("without-controls",!e.controls),S(G).is("controls-right",S(X))]),onDragstart:a[0]||(a[0]=z((()=>{}),["prevent"]))},[e.controls?x((h(),g("span",{key:0,role:"button","aria-label":S(L)("el.inputNumber.decrease"),class:w([S(G).e("decrease"),S(G).is("disabled",S(Q))]),onKeydown:E(se,["enter"])},[A(e.$slots,"decrease-icon",{},(()=>[F(S(T),null,{default:K((()=>[S(X)?(h(),k(S(_),{key:0})):(h(),k(S(B),{key:1}))])),_:1})]))],42,R)),[[S(q),se]]):$("v-if",!0),e.controls?x((h(),g("span",{key:1,role:"button","aria-label":S(L)("el.inputNumber.increase"),class:w([S(G).e("increase"),S(G).is("disabled",S(H))]),onKeydown:E(ue,["enter"])},[A(e.$slots,"increase-icon",{},(()=>[F(S(T),null,{default:K((()=>[S(X)?(h(),k(S(M),{key:0})):(h(),k(S(O),{key:1}))])),_:1})]))],42,Z)),[[S(q),ue]]):$("v-if",!0),F(S(C),{id:e.id,ref_key:"input",ref:W,type:"number",step:e.step,"model-value":S(le),placeholder:e.placeholder,readonly:e.readonly,disabled:S(ae),size:S(ee),max:e.max,min:e.min,name:e.name,label:e.label,"validate-event":!1,onWheel:pe,onKeydown:[E(z(ue,["prevent"]),["up"]),E(z(se,["prevent"]),["down"])],onBlur:be,onFocus:me,onInput:de,onChange:ce},null,8,["id","step","model-value","placeholder","readonly","disabled","size","max","min","name","label","onKeydown"])],34))}}),[["__file","input-number.vue"]]));export{U as E,q as v};