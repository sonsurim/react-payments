import{j as p}from"./jsx-runtime-CKrituN3.js";import{c as f}from"./emotion-css.esm-CZPWP5PG.js";import{u as N,C as e}from"./useAutoFocus-CWeD7iwE.js";import{M as c}from"./index-Dre5sEYq.js";import{r as T}from"./index-CBqU2yxZ.js";import"./useStep-Dz7gFNgH.js";import"./index-ClfbM8wZ.js";import"./_commonjsHelpers-BosuxZz1.js";const o=({name:t,className:m="",width:d="50%",values:r=[],onChange:n})=>{const{inputRefs:s,focusNextInput:l}=N({inputCount:e.INPUT_COUNT}),i=a=>{const[,E]=a.target.name.split(".");n==null||n(a),l(Number(E),a)};return p.jsxs("div",{className:`input-box ${f`
        width: ${d};
      `} ${m}`,children:[p.jsx(c,{name:`${t}.0`,className:"input-basic",placeholder:"MM",ref:s[0],value:r[0],onChange:i,minLength:e.MAX_LENGTH,maxLength:e.MAX_LENGTH,pattern:`.{${e.MAX_LENGTH},${e.MAX_LENGTH}}`,required:!0}),p.jsx(c,{name:`${t}.1`,className:"input-basic",placeholder:"YY",ref:s[1],value:r[1],onChange:i,minLength:e.MAX_LENGTH,maxLength:e.MAX_LENGTH,pattern:`.{${e.MAX_LENGTH},${e.MAX_LENGTH}}`,required:!0})]})};o.displayName="CardDateInput";o.__docgenInfo={description:"",methods:[],displayName:"CardDateInput",props:{name:{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},width:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'50%'",computed:!1}},values:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"e"}],return:{name:"void"}}},description:""}}};const A={title:"common/CardDateInput",component:o,args:{width:"50%"},argTypes:{width:{control:"text"}}},u={render:()=>{const[t,m]=T.useState(["12","22"]),d=r=>{const{name:n,value:s}=r.target,[,l]=n.split(".");m(t.map((i,a)=>a===Number(l)?s:i))};return p.jsx(o,{name:"card-expiry",values:t,onChange:d})}};var x,g,h;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [expiry, setExpiry] = useState(['12', '22']);
    const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
      const {
        name,
        value: newValue
      } = e.target;
      const [, index] = name.split('.');
      setExpiry(expiry.map((value, idx) => idx === Number(index) ? newValue : value));
    };
    return <CardDateInput name="card-expiry" values={expiry} onChange={handleChange} />;
  }
}`,...(h=(g=u.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const w=["Basic"];export{u as Basic,w as __namedExportsOrder,A as default};
