import{A as m,y as d,e as r,T as y,j as v,v as f}from"./vue-libs-12a1683e.js";import{n as h,c as w,e as z,t as O,i as S,l as x}from"./use-translate-f5915e0e.js";import{u as D}from"./use-lazy-render-8625b066.js";import{n as s,u as I,t as c,w as N}from"./with-install-e688503b.js";const[P,R]=w("overlay"),k={show:Boolean,zIndex:s,duration:s,className:I,lockScroll:c,lazyRender:c,customStyle:Object},T=m({name:P,props:k,setup(e,{slots:t}){const n=d(),l=D(()=>e.show||!e.lazyRender),i=a=>{e.lockScroll&&x(a,!0)},u=l(()=>{var o;const a=z(O(e.zIndex),e.customStyle);return S(e.duration)&&(a.animationDuration=`${e.duration}s`),v(r("div",{ref:n,style:a,class:[R(),e.className]},[(o=t.default)==null?void 0:o.call(t)]),[[f,e.show]])});return h("touchmove",i,{target:n}),()=>r(y,{name:"van-fade",appear:!0},{default:u})}}),V=N(T),p=V;export{V as O,p as V};
