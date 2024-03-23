import{j as c}from"./jsx-runtime-CKrituN3.js";import{u as b,a as t}from"./useAutoFocus-CWeD7iwE.js";import{M as h}from"./index-Dre5sEYq.js";import{r as C}from"./index-CBqU2yxZ.js";import"./useStep-Dz7gFNgH.js";import"./index-ClfbM8wZ.js";import"./emotion-css.esm-CZPWP5PG.js";import"./_commonjsHelpers-BosuxZz1.js";const u=({name:a,className:m="",values:o=[],onChange:r})=>{const{inputRefs:p,focusNextInput:i}=b({inputCount:t.INPUT_COUNT}),d=n=>{const[,e]=n.target.name.split(".");r==null||r(n),i(Number(e),n)};return c.jsx("div",{className:`input-box ${m}`,children:o.map((n,e)=>c.jsx(h,{name:`${a}.${e}`,className:"input-basic",type:e<t.VISIBLE_COUNT?"text":"password",ref:p[e],value:n,onChange:d,maxLength:t.MAX_LENGTH,minLength:t.MAX_LENGTH,pattern:`.{${t.MAX_LENGTH},${t.MAX_LENGTH}}`,required:!0},`${a}-${e}`))})};u.displayName="CardNumberInput";u.__docgenInfo={description:"",methods:[],displayName:"CardNumberInput",props:{name:{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},values:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"e"}],return:{name:"void"}}},description:""}}};const _={title:"common/CardNumberInput",component:u},s={render:()=>{const[a,m]=C.useState(["","","",""]),o=r=>{const{name:p,value:i}=r.target,[,d]=p.split(".");m(a.map((n,e)=>e===Number(d)?i:n))};return c.jsx(u,{name:"card-number",values:a,onChange:o})}};var l,N,g;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    const [numbers, setNumbers] = useState(['', '', '', '']);
    const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
      const {
        name,
        value: newValue
      } = e.target;
      const [, index] = name.split('.');
      setNumbers(numbers.map((value, idx) => idx === Number(index) ? newValue : value));
    };
    return <CardNumberInput name="card-number" values={numbers} onChange={handleChange} />;
  }
}`,...(g=(N=s.parameters)==null?void 0:N.docs)==null?void 0:g.source}}};const y=["Basic"];export{s as Basic,y as __namedExportsOrder,_ as default};
