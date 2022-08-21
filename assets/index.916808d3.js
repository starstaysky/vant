import{c as V,f as Y,e as _,w as Z,a as ee}from"./use-translate.4af05b41.js";import{n as k,t as $,c as I,b as ae,w as te}from"./with-install.bc951e22.js";import{z as T,C as b,e as o,F as le,H as se,D as y,x as N,j as A,v as F,q as oe,r as re,o as ne,c as ue,w as de,B}from"./vue-libs.7ad34eae.js";import{u as ce}from"./use-expose.313b91e7.js";import{A as ie,a as me}from"./index.esm.59dc09ed.js";import{C as z}from"./index.d6a4ac5e.js";import{F as he}from"./index.239da60c.js";import{F as w}from"./index.9aced926.js";import{P as fe}from"./index.24b817f9.js";import{T as P}from"./function-call.cfe02c45.js";import{B as j}from"./index.5b5f6f2f.js";import{S as ve}from"./index.64d2590e.js";import"./deep-clone.ff1f8286.js";import"./Picker.87f264f3.js";import"./constant.80c6de18.js";import"./index.3b9bd9d1.js";import"./use-touch.79e2b006.js";import"./index.ea6be0bf.js";import"./use-route.13c8c682.js";import"./index.334a3abb.js";import"./use-id.fe691ba6.js";import"./interceptor.a316706b.js";import"./use-lazy-render.96f053d1.js";import"./on-popup-reopen.c53e1654.js";import"./index.01b1c0bb.js";import"./mount-component.b3b1a921.js";const[Ce,x]=V("address-edit-detail"),M=V("address-edit")[2],De=T({name:Ce,props:{show:Boolean,rows:k,value:String,rules:Array,focused:Boolean,maxlength:k,searchResult:Array,showSearchResult:Boolean},emits:["blur","focus","input","select-search"],setup(e,{emit:l}){const h=b(),c=()=>e.focused&&e.searchResult&&e.showSearchResult,t=r=>{l("select-search",r),l("input",`${r.address||""} ${r.name||""}`.trim())},i=r=>{if(r.name){const d=r.name.replace(e.value,`<span class=${x("keyword")}>${e.value}</span>`);return o("div",{innerHTML:d},null)}},m=()=>{if(!c())return;const{searchResult:r}=e;return r.map(d=>o(z,{clickable:!0,key:d.name+d.address,icon:"location-o",label:d.address,class:x("search-item"),border:!1,onClick:()=>t(d)},{title:()=>i(d)}))},p=r=>l("blur",r),C=r=>l("focus",r),D=r=>l("input",r);return()=>{if(e.show)return o(le,null,[o(w,{autosize:!0,clearable:!0,ref:h,class:x(),rows:e.rows,type:"textarea",rules:e.rules,label:M("addressDetail"),border:!c(),maxlength:e.maxlength,modelValue:e.value,placeholder:M("addressDetail"),onBlur:p,onFocus:C,"onUpdate:modelValue":D},null),m()])}}}),[ge,v,s]=V("address-edit"),O={name:"",tel:"",city:"",county:"",country:"",province:"",areaCode:"",isDefault:!1,postalCode:"",addressDetail:""},we=e=>/^\d{6}$/.test(e),be={areaList:Object,isSaving:Boolean,isDeleting:Boolean,validator:Function,showArea:$,showDetail:$,showDelete:Boolean,showPostal:Boolean,disableArea:Boolean,searchResult:Array,telMaxlength:k,showSetDefault:Boolean,saveButtonText:String,areaPlaceholder:String,deleteButtonText:String,showSearchResult:Boolean,detailRows:I(1),detailMaxlength:I(200),areaColumnsPlaceholder:ae(),addressInfo:{type:Object,default:()=>_({},O)},telValidator:{type:Function,default:Z},postalValidator:{type:Function,default:we}},pe=T({name:ge,props:be,emits:["save","focus","delete","click-area","change-area","change-detail","select-search","change-default"],setup(e,{emit:l,slots:h}){const c=b(),t=se({}),i=b(!1),m=b(!1),p=y(()=>Y(e.areaList)&&Object.keys(e.areaList).length),C=y(()=>{const{country:a,province:n,city:u,county:f,areaCode:R}=t;if(R){const E=[a,n,u,f];return n&&n===u&&E.splice(1,1),E.filter(Boolean).join("/")}return""}),D=y(()=>{var a;return((a=e.searchResult)==null?void 0:a.length)&&m.value}),r=()=>{if(c.value){const a=c.value.getArea();a.areaCode=a.code,delete a.code,_(t,a)}},d=a=>{m.value=a==="addressDetail",l("focus",a)},g=y(()=>{const{validator:a,telValidator:n,postalValidator:u}=e,f=(R,E)=>({validator:L=>{if(a){const U=a(R,L);if(U)return U}return L?!0:E}});return{name:[f("name",s("nameEmpty"))],tel:[f("tel",s("telInvalid")),{validator:n,message:s("telInvalid")}],areaCode:[f("areaCode",s("areaEmpty"))],addressDetail:[f("addressDetail",s("addressEmpty"))],postalCode:[f("addressDetail",s("postalEmpty")),{validator:u,message:s("postalEmpty")}]}}),H=()=>l("save",t),q=a=>{t.addressDetail=a,l("change-detail",a)},G=a=>{a=a.filter(Boolean),a.some(n=>!n.code)?P(s("areaEmpty")):(i.value=!1,r(),l("change-area",a))},J=()=>l("delete",t),K=()=>{var a;return((a=c.value)==null?void 0:a.getValues())||[]},S=a=>{t.areaCode=a||"",a&&oe(r)},Q=()=>{setTimeout(()=>{m.value=!1})},W=a=>{t.addressDetail=a},X=()=>{if(e.showSetDefault){const a={"right-icon":()=>o(ve,{modelValue:t.isDefault,"onUpdate:modelValue":n=>t.isDefault=n,size:"24",onChange:n=>l("change-default",n)},null)};return A(o(z,{center:!0,title:s("defaultAddress"),class:v("default")},a),[[F,!D.value]])}};return ce({getArea:K,setAreaCode:S,setAddressDetail:W}),N(()=>e.areaList,()=>S(t.areaCode)),N(()=>e.addressInfo,a=>{_(t,O,a),S(a.areaCode)},{deep:!0,immediate:!0}),()=>{const{disableArea:a}=e;return o(he,{class:v(),onSubmit:H},{default:()=>{var n;return[o("div",{class:v("fields")},[o(w,{modelValue:t.name,"onUpdate:modelValue":u=>t.name=u,clearable:!0,label:s("name"),rules:g.value.name,placeholder:s("name"),onFocus:()=>d("name")},null),o(w,{modelValue:t.tel,"onUpdate:modelValue":u=>t.tel=u,clearable:!0,type:"tel",label:s("tel"),rules:g.value.tel,maxlength:e.telMaxlength,placeholder:s("tel"),onFocus:()=>d("tel")},null),A(o(w,{readonly:!0,label:s("area"),"is-link":!a,modelValue:C.value,rules:g.value.areaCode,placeholder:e.areaPlaceholder||s("area"),onFocus:()=>d("areaCode"),onClick:()=>{l("click-area"),i.value=!a}},null),[[F,e.showArea]]),o(De,{show:e.showDetail,rows:e.detailRows,rules:g.value.addressDetail,value:t.addressDetail,focused:m.value,maxlength:e.detailMaxlength,searchResult:e.searchResult,showSearchResult:e.showSearchResult,onBlur:Q,onFocus:()=>d("addressDetail"),onInput:q,"onSelect-search":u=>l("select-search",u)},null),e.showPostal&&A(o(w,{modelValue:t.postalCode,"onUpdate:modelValue":u=>t.postalCode=u,type:"tel",rules:g.value.postalCode,label:s("postal"),maxlength:"6",placeholder:s("postal"),onFocus:()=>d("postalCode")},null),[[F,!D.value]]),(n=h.default)==null?void 0:n.call(h)]),X(),A(o("div",{class:v("buttons")},[o(j,{block:!0,round:!0,type:"danger",text:e.saveButtonText||s("save"),class:v("button"),loading:e.isSaving,nativeType:"submit"},null),e.showDelete&&o(j,{block:!0,round:!0,class:v("button"),loading:e.isDeleting,text:e.deleteButtonText||s("delete"),onClick:J},null)]),[[F,!D.value]]),o(fe,{show:i.value,"onUpdate:show":u=>i.value=u,round:!0,teleport:"body",position:"bottom",lazyRender:!1},{default:()=>[o(ie,{ref:c,value:t.areaCode,loading:!p.value,areaList:e.areaList,columnsPlaceholder:e.areaColumnsPlaceholder,onConfirm:G,onCancel:()=>{i.value=!1}},null)]})]}})}}}),Ee=te(pe),ye=Ee,We=T({__name:"index",setup(e){const l=ee({"zh-CN":{areaColumnsPlaceholder:["\u8BF7\u9009\u62E9","\u8BF7\u9009\u62E9","\u8BF7\u9009\u62E9"],searchResult:[{name:"\u9EC4\u9F99\u4E07\u79D1\u4E2D\u5FC3",address:"\u676D\u5DDE\u5E02\u897F\u6E56\u533A"},{name:"\u9EC4\u9F99\u4E07\u79D1\u4E2D\u5FC3G\u5EA7"},{name:"\u9EC4\u9F99\u4E07\u79D1\u4E2D\u5FC3H\u5EA7",address:"\u676D\u5DDE\u5E02\u897F\u6E56\u533A"}]},"en-US":{areaColumnsPlaceholder:["Choose","Choose","Choose"],searchResult:[{name:"Name1",address:"Address"},{name:"Name2"},{name:"Name3",address:"Address"}]}}),h=b([]),c=()=>P(l("save")),t=()=>P(l("delete")),i=m=>{h.value=m?l("searchResult"):[]};return(m,p)=>{const C=re("demo-block");return ne(),ue(C,{title:B(l)("basicUsage")},{default:de(()=>[o(B(ye),{"area-list":B(me),"show-postal":"","show-delete":"","show-set-default":"","show-search-result":"","search-result":h.value,"area-columns-placeholder":B(l)("areaColumnsPlaceholder"),onSave:c,onDelete:t,onChangeDetail:i},null,8,["area-list","search-result","area-columns-placeholder"])]),_:1},8,["title"])}}});export{We as default};
