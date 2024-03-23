import{j as c}from"./jsx-runtime-CKrituN3.js";import{u as v,b as g}from"./useAutoFocus-CWeD7iwE.js";import{M as x}from"./index-Dre5sEYq.js";import{c as C}from"./emotion-css.esm-CZPWP5PG.js";import{r as y}from"./index-CBqU2yxZ.js";import"./useStep-Dz7gFNgH.js";import"./index-ClfbM8wZ.js";import"./_commonjsHelpers-BosuxZz1.js";const r=({name:e,className:o="",inputWidth:u="15%",gap:p=10,values:d=[],onChange:s})=>{const{inputRefs:m,focusNextInput:i}=v({inputCount:g.INPUT_COUNT}),l=a=>{const[,t]=a.target.name.split(".");s==null||s(a),i(Number(t),a)};return c.jsx("div",{className:`${C`
        display: flex;
        gap: ${p}px;
      `} ${o}`,children:d.map((a,t)=>c.jsx(x,{name:`${e}.${t}`,className:"input-basic",type:"password",width:u,ref:m[t],value:a,onChange:l,maxLength:g.MAX_LENGTH,required:!0},`${e}-${t}`))})};r.displayName="CardPasswordInput";r.__docgenInfo={description:"",methods:[],displayName:"CardPasswordInput",props:{name:{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},inputWidth:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'15%'",computed:!1}},gap:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"10",computed:!1}},values:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"e"}],return:{name:"void"}}},description:""}}};const M={title:"common/CardPasswordInput",component:r,argTypes:{inputWidth:{control:"text"}}},n={render:()=>{const[e,o]=y.useState(["","","",""]),u=p=>{const{name:d,value:s}=p.target,[,m]=d.split(".");o(e.map((i,l)=>l===Number(m)?s:i))};return c.jsx(r,{name:"card-password",values:e,onChange:u})}};var f,w,h;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [passwords, setPasswords] = useState(['', '', '', '']);
    const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
      const {
        name,
        value: newValue
      } = e.target;
      const [, index] = name.split('.');
      setPasswords(passwords.map((value, idx) => idx === Number(index) ? newValue : value));
    };
    return <CardPasswordInput name="card-password" values={passwords} onChange={handleChange} />;
  }
}`,...(h=(w=n.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};const V=["Basic"];export{n as Basic,V as __namedExportsOrder,M as default};
