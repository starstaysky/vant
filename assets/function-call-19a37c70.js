import{m as ee,u as oe}from"./mount-component-d2062020.js";import{n as te,c as B,l as z,H as T,w as ae,r as se,p as ne,s as ie,d as ce,e as re}from"./use-translate-f5915e0e.js";import{u as le}from"./use-expose-74d6f7e3.js";import{I as me}from"./index-f40ec2de.js";import{a as ue,S as de}from"./index-43af9ffb.js";import{P as ge}from"./index-b8400930.js";import{u as fe}from"./use-touch-e98b6450.js";import{I as ve}from"./index-5e3b8936.js";import{L as he}from"./index-57217a11.js";import{A as L,H as j,y as F,D as Z,u as X,e as l,M as we,q as Pe,B as q,Q as pe}from"./vue-libs-12a1683e.js";import{d as D,n as _,t as R,b as Se,c as M,u as k,m as O}from"./with-install-e688503b.js";import{L as Ie,H as xe}from"./constant-a81ffd37.js";import{c as ye}from"./interceptor-37ecf4c0.js";const $=e=>Math.sqrt((e[0].clientX-e[1].clientX)**2+(e[0].clientY-e[1].clientY)**2),E=B("image-preview")[1],be=L({props:{src:String,show:Boolean,active:Number,minZoom:D(_),maxZoom:D(_),rootWidth:D(Number),rootHeight:D(Number),disableZoom:Boolean},emits:["scale","close","longPress"],setup(e,{emit:c,slots:m}){const o=j({scale:1,moveX:0,moveY:0,moving:!1,zooming:!1,imageRatio:0,displayWidth:0,displayHeight:0}),s=fe(),w=F(),I=Z(()=>{const{rootWidth:t,rootHeight:n}=e,i=n/t;return o.imageRatio>i}),Y=Z(()=>{const{scale:t,moveX:n,moveY:i,moving:f,zooming:v}=o,H={transitionDuration:v||f?"0s":".3s"};if(t!==1){const Q=n/t,J=i/t;H.transform=`scale(${t}, ${t}) translate(${Q}px, ${J}px)`}return H}),u=Z(()=>{if(o.imageRatio){const{rootWidth:t,rootHeight:n}=e,i=I.value?n/o.imageRatio:t;return Math.max(0,(o.scale*i-t)/2)}return 0}),d=Z(()=>{if(o.imageRatio){const{rootWidth:t,rootHeight:n}=e,i=I.value?n:t*o.imageRatio;return Math.max(0,(o.scale*i-n)/2)}return 0}),x=t=>{t=T(t,+e.minZoom,+e.maxZoom+1),t!==o.scale&&(o.scale=t,c("scale",{scale:t,index:e.active}))},y=()=>{x(1),o.moveX=0,o.moveY=0},W=()=>{const t=o.scale>1?1:2;x(t),o.moveX=0,o.moveY=0};let h,P,p,b,C,a,g,r=!1;const U=t=>{const{touches:n}=t;if(h=n.length,h===2&&e.disableZoom)return;const{offsetX:i}=s;s.start(t),P=o.moveX,p=o.moveY,g=Date.now(),r=!1,o.moving=h===1&&o.scale!==1,o.zooming=h===2&&!i.value,o.zooming&&(b=o.scale,C=$(t.touches))},V=t=>{const{touches:n}=t;if(s.move(t),o.moving){const{deltaX:i,deltaY:f}=s,v=i.value+P,H=f.value+p;if((v>u.value||v<-u.value)&&!r){o.moving=!1;return}r=!0,z(t,!0),o.moveX=T(v,-u.value,u.value),o.moveY=T(H,-d.value,d.value)}if(o.zooming&&(z(t,!0),n.length===2)){const i=$(n),f=b*i/C;x(f)}},G=()=>{if(h>1)return;const{offsetX:t,offsetY:n}=s,i=Date.now()-g,f=250,v=5;t.value<v&&n.value<v&&(i<f?a?(clearTimeout(a),a=null,W()):a=setTimeout(()=>{c("close"),a=null},f):i>Ie&&c("longPress"))},A=t=>{let n=!1;if((o.moving||o.zooming)&&(n=!0,o.moving&&P===o.moveX&&p===o.moveY&&(n=!1),!t.touches.length)){o.zooming&&(o.moveX=T(o.moveX,-u.value,u.value),o.moveY=T(o.moveY,-d.value,d.value),o.zooming=!1),o.moving=!1,P=0,p=0,b=1,o.scale<1&&y();const i=+e.maxZoom;o.scale>i&&(o.scale=i)}z(t,n),G(),s.reset()},K=t=>{const{naturalWidth:n,naturalHeight:i}=t.target;o.imageRatio=i/n};return X(()=>e.active,y),X(()=>e.show,t=>{t||y()}),te("touchmove",V,{target:Z(()=>{var t;return(t=w.value)==null?void 0:t.$el})}),()=>{const t={loading:()=>l(he,{type:"spinner"},null)};return l(ue,{ref:w,class:E("swipe-item"),onTouchstartPassive:U,onTouchend:A,onTouchcancel:A},{default:()=>[m.image?l("div",{class:E("image-wrap")},[m.image({src:e.src})]):l(ve,{src:e.src,fit:"contain",class:E("image",{vertical:I.value}),style:Y.value,onLoad:K},t)]})}}});function Ce(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!pe(e)}const[Te,S]=B("image-preview"),Ze=["show","teleport","transition","overlayStyle","closeOnPopstate"],Xe={show:Boolean,loop:R,images:Se(),minZoom:M(1/3),maxZoom:M(3),overlay:R,closeable:Boolean,showIndex:R,className:k,closeIcon:O("clear"),transition:String,beforeClose:Function,overlayClass:k,overlayStyle:Object,swipeDuration:M(300),startPosition:M(0),showIndicators:Boolean,closeOnPopstate:R,closeIconPosition:O("top-right"),teleport:[String,Object]},Ye=L({name:Te,props:Xe,emits:["scale","close","closed","change","longPress","update:show"],setup(e,{emit:c,slots:m}){const o=F(),s=j({active:0,rootWidth:0,rootHeight:0,disableZoom:!1}),w=()=>{if(o.value){const a=ie(o.value.$el);s.rootWidth=a.width,s.rootHeight=a.height,o.value.resize()}},I=a=>c("scale",a),Y=a=>c("update:show",a),u=()=>{ye(e.beforeClose,{args:[s.active],done:()=>Y(!1)})},d=a=>{a!==s.active&&(s.active=a,c("change",a))},x=()=>{if(e.showIndex)return l("div",{class:S("index")},[m.index?m.index({index:s.active}):`${s.active+1} / ${e.images.length}`])},y=()=>{if(m.cover)return l("div",{class:S("cover")},[m.cover()])},W=()=>{s.disableZoom=!0},h=()=>{s.disableZoom=!1},P=()=>{let a;return l(de,{ref:o,lazyRender:!0,loop:e.loop,class:S("swipe"),duration:e.swipeDuration,initialSwipe:e.startPosition,showIndicators:e.showIndicators,indicatorColor:"white",onChange:d,onDragEnd:h,onDragStart:W},Ce(a=e.images.map((g,r)=>l(be,{src:g,show:e.show,active:s.active,maxZoom:e.maxZoom,minZoom:e.minZoom,rootWidth:s.rootWidth,rootHeight:s.rootHeight,disableZoom:s.disableZoom,onScale:I,onClose:u,onLongPress:()=>c("longPress",{index:r})},{image:m.image})))?a:{default:()=>[a]})},p=()=>{if(e.closeable)return l(me,{role:"button",name:e.closeIcon,class:[S("close-icon",e.closeIconPosition),xe],onClick:u},null)},b=()=>c("closed"),C=(a,g)=>{var r;return(r=o.value)==null?void 0:r.swipeTo(a,g)};return le({swipeTo:C}),we(w),X([ae,se],w),X(()=>e.startPosition,a=>d(+a)),X(()=>e.show,a=>{const{images:g,startPosition:r}=e;a?(d(+r),Pe(()=>{w(),C(+r,{immediate:!0})})):c("close",{index:s.active,url:g[s.active]})}),()=>l(ge,q({class:[S(),e.className],overlayClass:[S("overlay"),e.overlayClass],onClosed:b,"onUpdate:show":Y},ne(e,Ze)),{default:()=>[p(),P(),x(),y()]})}});let N;const He={loop:!0,images:[],maxZoom:3,minZoom:1/3,onScale:void 0,onClose:void 0,onChange:void 0,teleport:"body",className:"",showIndex:!0,closeable:!1,closeIcon:"clear",transition:void 0,beforeClose:void 0,overlayStyle:void 0,overlayClass:void 0,startPosition:0,swipeDuration:300,showIndicators:!1,closeOnPopstate:!0,closeIconPosition:"top-right"};function De(){({instance:N}=ee({setup(){const{state:e,toggle:c}=oe(),m=()=>{e.images=[]};return()=>l(Ye,q(e,{onClosed:m,"onUpdate:show":c}),null)}}))}const je=(e,c=0)=>{if(ce)return N||De(),e=Array.isArray(e)?{images:e,startPosition:c}:e,N.open(re({},He,e)),N};export{Ye as _,je as s};
