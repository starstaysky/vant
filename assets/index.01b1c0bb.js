import{c as u,e as m,v as d,i as v,t as y,l as f}from"./use-translate.4af05b41.js";import{n as o,u as h,t as r,w}from"./with-install.bc951e22.js";import{z,e as s,T as O,j as S,v as x}from"./vue-libs.7ad34eae.js";import{u as D}from"./use-lazy-render.96f053d1.js";const[I,N]=u("overlay"),P={show:Boolean,zIndex:o,duration:o,className:h,lockScroll:r,lazyRender:r,customStyle:Object},R=z({name:I,props:P,setup(e,{slots:t}){const c=D(()=>e.show||!e.lazyRender),l=a=>{f(a,!0)},i=c(()=>{var n;const a=m(d(e.zIndex),e.customStyle);return v(e.duration)&&(a.animationDuration=`${e.duration}s`),S(s("div",{style:a,class:[N(),e.className],onTouchmove:e.lockScroll?l:y},[(n=t.default)==null?void 0:n.call(t)]),[[x,e.show]])});return()=>s(O,{name:"van-fade",appear:!0},{default:i})}}),T=w(R),j=T;export{T as O,j as V};
