import{b8 as B,b9 as I,aV as N,a as d,ba as O,aU as e}from"./index-Ct6RrEec.js";import{d as m,P as Z}from"./index-BymyOuEY.js";import{Q as _,ac as T,L as $,a9 as Q,ag as z}from"./IdurarOs-CsZik77s.js";import{e as b}from"./actions-Bd3ByTEX.js";import{c as F}from"./calculate-Bl1nHP9U.js";import{s as L}from"./index-KrFx5yLV.js";import{d as G}from"./selectors-4q4i6c4u.js";import{t as Y}from"./statusTagColor-DxbKI3gy.js";import{s as J}from"./ErpApp-CitG2MPT.js";import{T as E}from"./index-s95ArsnL.js";import{C as K}from"./CloseCircleOutlined-UOE0GKFw.js";import{P as W}from"./PlusOutlined-CiBpLWhd.js";function X({form:l,translate:x}){const s=()=>{l.submit()};return e.jsx($,{onClick:s,type:"primary",icon:e.jsx(W,{}),children:x("update")})}function dt({config:l,UpdateForm:x}){var C,D;const s=_();let{entity:p}=l;const f=B(),y=I(),{current:r,isLoading:v,isSuccess:S}=N(G),[c]=T.useForm(),[H,g]=d.useState(0),P={status:"",client:{name:"",email:"",phone:"",address:""},subTotal:0,taxTotal:0,taxRate:0,total:0,credit:0,number:0,year:0},[o,U]=d.useState(r??P),{id:j}=O(),k=(t,a)=>{const u=a.items;let n=0;u&&(u.map(i=>{if(i&&i.quantity&&i.price){let h=F.multiply(i.quantity,i.price);n=F.add(n,h)}}),g(n))},q=t=>{let a={...t};if(t&&((t.date||t.expiredDate)&&(a.date=m(t.date).format("YYYY-MM-DDTHH:mm:ss.SSSZ"),a.expiredDate=m(t.expiredDate).format("YYYY-MM-DDTHH:mm:ss.SSSZ")),t.items)){let u=[];t.items.map(n=>{const{quantity:i,price:h,itemName:M,description:R}=n,A=n.quantity*n.price;u.push({total:A,quantity:i,price:h,itemName:M,description:R})}),a.items=u}f(b.update({entity:p,id:j,jsonData:a}))};d.useEffect(()=>{S&&(c.resetFields(),g(0),f(b.resetAction({actionType:"update"})),y(`/${p.toLowerCase()}/read/${j}`))},[S]);const w=t=>{f(J.updateCurrency({data:{default_currency_code:t}}))};return d.useEffect(()=>{if(r){U(r);let t={...r};t.date&&(t.date=m(t.date)),t.expiredDate&&(t.expiredDate=m(t.expiredDate)),t.taxRate||(t.taxRate=0),w(r.currency);const{subTotal:a}=t;c.resetFields(),c.setFieldsValue(t),g(a)}},[r]),e.jsxs(e.Fragment,{children:[e.jsx(Z,{onBack:()=>{y(`/${p.toLowerCase()}`)},title:s("update"),ghost:!1,tags:[e.jsx(E,{color:(C=Y(o.status))==null?void 0:C.color,children:o.status&&s(o.status)},"status"),o.paymentStatus&&e.jsx(E,{color:(D=Y(o.paymentStatus))==null?void 0:D.color,children:o.paymentStatus&&s(o.paymentStatus)},"paymentStatus")],extra:[e.jsx($,{onClick:()=>{y(`/${p.toLowerCase()}`)},icon:e.jsx(K,{}),children:s("Cancel")},`${L.generate()}`),e.jsx(X,{translate:s,form:c},`${L.generate()}`)],style:{padding:"20px 0px"}}),e.jsx(Q,{dashed:!0}),e.jsx(z,{isLoading:v,children:e.jsx(T,{form:c,layout:"vertical",onFinish:q,onValuesChange:k,children:e.jsx(x,{subTotal:H,current:r})})})]})}export{dt as U};