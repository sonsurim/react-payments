import{j as e}from"./jsx-runtime-CKrituN3.js";import{u as o}from"./useStep-Dz7gFNgH.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";const l={title:"hooks/useStep"},p={render:()=>{const[t,s]=o(["step1","step2","step3"]);return e.jsxs("div",{children:[e.jsx("button",{onClick:()=>s("step1"),children:"step1"}),e.jsx("button",{onClick:()=>s("step2"),children:"step2"}),e.jsx("button",{onClick:()=>s("step3"),children:"step3"}),e.jsxs(t,{children:[e.jsx(t.Step,{name:"step1",children:e.jsx("div",{children:"Step1"})}),e.jsx(t.Step,{name:"step2",children:e.jsx("div",{children:"Step2"})}),e.jsx(t.Step,{name:"step3",children:e.jsx("div",{children:"Step3"})})]})]})}};var n,r,i;p.parameters={...p.parameters,docs:{...(n=p.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => {
    const [Stepper, setStep] = useStep((['step1', 'step2', 'step3'] as const));
    return <div>
        <button onClick={() => setStep('step1')}>step1</button>
        <button onClick={() => setStep('step2')}>step2</button>
        <button onClick={() => setStep('step3')}>step3</button>
        <Stepper>
          <Stepper.Step name="step1">
            <div>Step1</div>
          </Stepper.Step>
          <Stepper.Step name="step2">
            <div>Step2</div>
          </Stepper.Step>
          <Stepper.Step name="step3">
            <div>Step3</div>
          </Stepper.Step>
        </Stepper>
      </div>;
  }
}`,...(i=(r=p.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const u=["Basic"];export{p as Basic,u as __namedExportsOrder,l as default};
