import{j as u}from"./jsx-runtime-D_zvdyIk.js";import{c as y}from"./index-FGJkmGnF.js";import{W as g}from"./WithLabel-ANTkIYLL.js";import{f as x}from"./index-cNkFZXRj.js";import"./_commonjsHelpers-CqkleIqs.js";function l({name:t,label:c,min:r=0,max:s=999999,onChange:a,...n}){const p=y("text-black border rounded-md border-slate-600","text-center w-32",n.className),d=f=>{const b=Math.min(Math.max(+f.currentTarget.value,r),s);a==null||a(b)};return u.jsx(g,{label:c,name:t,children:u.jsx("input",{className:p,name:t,type:"number",min:r,max:s,onChange:d,...n})})}l.__docgenInfo={description:"",methods:[],displayName:"NumberInput",props:{value:{required:!1,tsType:{name:"number"},description:""},defaultValue:{required:!1,tsType:{name:"number"},description:""},name:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"999_999",computed:!1}},min:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""}},composes:["Omit"]};const I={title:"Input/NumberInput",component:l,tags:["autodocs"],args:{defaultValue:12345,onChange:x(),label:"Give me a number",name:"number"}},e={};var m,o,i;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const _=["Default"];export{e as Default,_ as __namedExportsOrder,I as default};
