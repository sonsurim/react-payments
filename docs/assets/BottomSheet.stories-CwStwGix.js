import{j as e}from"./jsx-runtime-CKrituN3.js";import{c as d}from"./emotion-css.esm-CZPWP5PG.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";const n=({isOpen:s=!1,close:l,children:c})=>{const r=d`
    display: ${s?"flex":"none"};
  `,p=t=>{t.target===t.currentTarget&&l()};return e.jsx("div",{className:`modal-dimmed ${r}`,onClick:p,children:e.jsx("div",{className:"modal",children:c})})};n.__docgenInfo={description:"",methods:[],displayName:"BottomSheet",props:{isOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},close:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const h={title:"common/BottomSheet",component:n},a={render:()=>{const s=d`
      position: relative;
      width: 375px;
      height: 500px;
    `;return e.jsx("div",{className:s,children:e.jsx(n,{isOpen:!0,close:()=>{},children:e.jsxs("div",{className:"flex-center",children:[e.jsxs("div",{className:"modal-item-container",children:[e.jsx("div",{className:"modal-item-dot"}),e.jsx("span",{className:"modal-item-name",children:"클린 카드"})]}),e.jsxs("div",{className:"modal-item-container",children:[e.jsx("div",{className:"modal-item-dot"}),e.jsx("span",{className:"modal-item-name",children:"클린 카드"})]}),e.jsxs("div",{className:"modal-item-container",children:[e.jsx("div",{className:"modal-item-dot"}),e.jsx("span",{className:"modal-item-name",children:"클린 카드"})]}),e.jsxs("div",{className:"modal-item-container",children:[e.jsx("div",{className:"modal-item-dot"}),e.jsx("span",{className:"modal-item-name",children:"클린 카드"})]})]})})})}};var i,m,o;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const containerStyle = css\`
      position: relative;
      width: 375px;
      height: 500px;
    \`;
    return <div className={containerStyle}>
        <BottomSheet isOpen close={() => {}}>
          <div className="flex-center">
            <div className="modal-item-container">
              <div className="modal-item-dot"></div>
              <span className="modal-item-name">클린 카드</span>
            </div>
            <div className="modal-item-container">
              <div className="modal-item-dot"></div>
              <span className="modal-item-name">클린 카드</span>
            </div>
            <div className="modal-item-container">
              <div className="modal-item-dot"></div>
              <span className="modal-item-name">클린 카드</span>
            </div>
            <div className="modal-item-container">
              <div className="modal-item-dot"></div>
              <span className="modal-item-name">클린 카드</span>
            </div>
          </div>
        </BottomSheet>
      </div>;
  }
}`,...(o=(m=a.parameters)==null?void 0:m.docs)==null?void 0:o.source}}};const j=["Basic"];export{a as Basic,j as __namedExportsOrder,h as default};
