import{j as h}from"./jsx-runtime-CKrituN3.js";import{M as u}from"./index-Dre5sEYq.js";import{r as i}from"./index-CBqU2yxZ.js";import"./index-ClfbM8wZ.js";import"./emotion-css.esm-CZPWP5PG.js";import"./_commonjsHelpers-BosuxZz1.js";const f={title:"common/MaxLengthNumberInput",component:u,args:{width:"100%"},argTypes:{width:{control:"text"}}},e={args:{width:"40%",maxLength:3},render:l=>{const[g,c]=i.useState(""),p=d=>{c(d.target.value)};return h.jsx(u,{value:g,onChange:p,...l})}},t={args:{maxLength:3}};var r,n,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    width: '40%',
    maxLength: 3
  },
  render: args => {
    const [value, setValue] = useState('');
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };
    return <MaxLengthNumberInput value={value} onChange={handleChange} {...args} />;
  }
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var o,s,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    maxLength: 3
  }
}`,...(m=(s=t.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const w=["Controlled","UnControlled"];export{e as Controlled,t as UnControlled,w as __namedExportsOrder,f as default};
