import{u as ne}from"./settings-7ba1335b.js";import{p as R,I as P,a7 as ue,m as W,a8 as se,B as re,q as p,W as F,H as T,c as i,a9 as ie,aa as de,K as v,v as B,h as t,o as ce,ab as fe,ac as H,r as ve,X,R as k,x as me,Y as Ve,Q as U,ad as ye,ae as be,af as Ce,ag as A,L as ge,J as Se,ah as _e,n as Ie,ai as he,$ as ke,s as Re,d as G,e as xe,f as y,V as Pe,u as w,aj as M,i as d,a1 as J,a2 as pe,t as Be,a4 as Ae,a5 as Ge}from"./index-54e89ec7.js";import{V as x,a as we}from"./VRow-b2e616f8.js";import{V as Y,b as $e,c as K,d as Fe}from"./VInput-f4d5c410.js";const z=Symbol.for("vuetify:selection-control-group"),D=R({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:P,trueIcon:P,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:ue},...W(),...se(),...re()},"SelectionControlGroup"),Te=R({...D({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup"),Ue=p()({name:"VSelectionControlGroup",props:Te(),emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:r}=s;const l=F(e,"modelValue"),o=T(),m=i(()=>e.id||`v-selection-control-group-${o}`),n=i(()=>e.name||m.value),a=new Set;return ie(z,{modelValue:l,forceUpdate:()=>{a.forEach(u=>u())},onForceUpdate:u=>{a.add(u),ce(()=>{a.delete(u)})}}),de({[e.defaultsTarget]:{color:v(e,"color"),disabled:v(e,"disabled"),density:v(e,"density"),error:v(e,"error"),inline:v(e,"inline"),modelValue:l,multiple:i(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),name:n,falseIcon:v(e,"falseIcon"),trueIcon:v(e,"trueIcon"),readonly:v(e,"readonly"),ripple:v(e,"ripple"),type:v(e,"type"),valueComparator:v(e,"valueComparator")}}),B(()=>{var u;return t("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(u=r.default)==null?void 0:u.call(r)])}),{}}}),Z=R({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,...W(),...D()},"VSelectionControl");function De(e){const s=be(z,void 0),{densityClasses:r}=Ce(e),l=F(e,"modelValue"),o=i(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),m=i(()=>e.falseValue!==void 0?e.falseValue:!1),n=i(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),a=i({get(){const c=s?s.modelValue.value:l.value;return n.value?A(c).some(f=>e.valueComparator(f,o.value)):e.valueComparator(c,o.value)},set(c){if(e.readonly)return;const f=c?o.value:m.value;let V=f;n.value&&(V=c?[...A(l.value),f]:A(l.value).filter(g=>!e.valueComparator(g,o.value))),s?s.modelValue.value=V:l.value=V}}),{textColorClasses:u,textColorStyles:S}=ge(i(()=>{if(!(e.error||e.disabled))return a.value?e.color:e.baseColor})),{backgroundColorClasses:_,backgroundColorStyles:b}=Se(i(()=>a.value&&!e.error&&!e.disabled?e.color:void 0)),C=i(()=>a.value?e.trueIcon:e.falseIcon);return{group:s,densityClasses:r,trueValue:o,falseValue:m,model:a,textColorClasses:u,textColorStyles:S,backgroundColorClasses:_,backgroundColorStyles:b,icon:C}}const ee=p()({name:"VSelectionControl",directives:{Ripple:fe},inheritAttrs:!1,props:Z(),emits:{"update:modelValue":e=>!0},setup(e,s){let{attrs:r,slots:l}=s;const{group:o,densityClasses:m,icon:n,model:a,textColorClasses:u,textColorStyles:S,backgroundColorClasses:_,backgroundColorStyles:b,trueValue:C}=De(e),c=T(),f=i(()=>e.id||`input-${c}`),V=H(!1),g=H(!1),I=ve();o==null||o.onForceUpdate(()=>{I.value&&(I.value.checked=a.value)});function O(h){V.value=!0,_e(h.target,":focus-visible")!==!1&&(g.value=!0)}function E(){V.value=!1,g.value=!1}function le(h){e.readonly&&o&&Ie(()=>o.forceUpdate()),a.value=h.target.checked}return B(()=>{var j,q;const h=l.label?l.label({label:e.label,props:{for:f.value}}):e.label,[ae,te]=X(r),L=t("input",k({ref:I,checked:a.value,disabled:!!(e.readonly||e.disabled),id:f.value,onBlur:E,onFocus:O,onInput:le,"aria-disabled":!!(e.readonly||e.disabled),type:e.type,value:C.value,name:e.name,"aria-checked":e.type==="checkbox"?a.value:void 0},te),null);return t("div",k({class:["v-selection-control",{"v-selection-control--dirty":a.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":V.value,"v-selection-control--focus-visible":g.value,"v-selection-control--inline":e.inline},m.value,e.class]},ae,{style:e.style}),[t("div",{class:["v-selection-control__wrapper",u.value],style:S.value},[(j=l.default)==null?void 0:j.call(l,{backgroundColorClasses:_,backgroundColorStyles:b}),me(t("div",{class:["v-selection-control__input"]},[((q=l.input)==null?void 0:q.call(l,{model:a,textColorClasses:u,textColorStyles:S,backgroundColorClasses:_,backgroundColorStyles:b,inputNode:L,icon:n.value,props:{onFocus:O,onBlur:E,id:f.value}}))??t(U,null,[n.value&&t(ye,{key:"icon",icon:n.value},null),L])]),[[Ve("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),h&&t(Y,{for:f.value,clickable:!0,onClick:oe=>oe.stopPropagation()},{default:()=>[h]})])}),{isFocused:V,input:I}}}),Ne=R({...Z({falseIcon:"$radioOff",trueIcon:"$radioOn"})},"VRadio"),$=p()({name:"VRadio",props:Ne(),setup(e,s){let{slots:r}=s;return B(()=>t(ee,k(e,{class:["v-radio",e.class],style:e.style,type:"radio"}),r)),{}}});const Oe=R({height:{type:[Number,String],default:"auto"},...$e(),...he(D(),["multiple"]),trueIcon:{type:P,default:"$radioOn"},falseIcon:{type:P,default:"$radioOff"},type:{type:String,default:"radio"}},"VRadioGroup"),Q=p()({name:"VRadioGroup",inheritAttrs:!1,props:Oe(),emits:{"update:modelValue":e=>!0},setup(e,s){let{attrs:r,slots:l}=s;const o=T(),m=i(()=>e.id||`radio-group-${o}`),n=F(e,"modelValue");return B(()=>{const[a,u]=X(r),S=K.filterProps(e),_=ee.filterProps(e),b=l.label?l.label({label:e.label,props:{for:m.value}}):e.label;return t(K,k({class:["v-radio-group",e.class],style:e.style},a,S,{modelValue:n.value,"onUpdate:modelValue":C=>n.value=C,id:m.value}),{...l,default:C=>{let{id:c,messagesId:f,isDisabled:V,isReadonly:g}=C;return t(U,null,[b&&t(Y,{id:c.value},{default:()=>[b]}),t(Ue,k(_,{id:c.value,"aria-describedby":f.value,defaultsTarget:"VRadio",trueIcon:e.trueIcon,falseIcon:e.falseIcon,type:e.type,disabled:V.value,readonly:g.value,"aria-labelledby":b?c.value:void 0,multiple:!1},u,{modelValue:n.value,"onUpdate:modelValue":I=>n.value=I}),l)])}})}),{}}}),N=e=>(Ae("data-v-4dd7ce1c"),e=e(),Ge(),e),Ee=N(()=>d("h1",{class:"text-center"},"通知設定",-1)),Le=N(()=>d("h1",{class:"text-center"},"鈴聲設定",-1)),je=N(()=>d("thead",null,[d("tr",{rounded:""},[d("th",null,"名稱"),d("th",null,"試聽"),d("th",null,"選擇")])],-1)),qe=["src"],He={__name:"SettingsView",setup(e){const s=ne(),{alarms:r,selectedAlarm:l,notify:o}=Re(s);return(m,n)=>(G(),xe(Pe,null,{default:y(()=>[t(we,null,{default:y(()=>[t(x,{cols:"12"},{default:y(()=>[Ee]),_:1}),t(x,{cols:"12"},{default:y(()=>[t(Q,{inline:"",modelValue:w(o),"onUpdate:modelValue":n[0]||(n[0]=a=>M(o)?o.value=a:null)},{default:y(()=>[t($,{label:"開啟",value:!0}),t($,{label:"關閉",value:!1})]),_:1},8,["modelValue"])]),_:1}),t(x,{cols:"12"},{default:y(()=>[Le]),_:1}),t(x,{cols:"12"},{default:y(()=>[t(Fe,{class:"change"},{default:y(()=>[je,d("tbody",null,[(G(!0),J(U,null,pe(w(r),a=>(G(),J("tr",{key:a.id},[d("td",null,Be(a.name),1),d("td",null,[d("audio",{src:a.file,controls:""},null,8,qe)]),d("td",null,[t(Q,{modelValue:w(l),"onUpdate:modelValue":n[1]||(n[1]=u=>M(l)?l.value=u:null)},{default:y(()=>[t($,{value:a.id},null,8,["value"])]),_:2},1032,["modelValue"])])]))),128))])]),_:1})]),_:1})]),_:1})]),_:1}))}},We=ke(He,[["__scopeId","data-v-4dd7ce1c"]]);export{We as default};