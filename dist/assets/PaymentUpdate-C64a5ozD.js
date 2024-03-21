import{b9 as w,b8 as D,aV as U,a as i,aU as e,ba as I,bi as M}from"./index-BpW8e4D6.js";import{Q as L,ac as _,ag as B,L as C,aa as F,a8 as E,a9 as P,ae as R}from"./IdurarOs-CzPiZsy4.js";import"./index-BhZ7SbBA.js";import{d as k,s as v,E as S}from"./selectors-C4bJO8cF.js";import{e as h}from"./actions-Bpk_XOR4.js";import{d as Y,P as O}from"./index-GN6cFBMB.js";import{s as A}from"./index-KrFx5yLV.js";import{u as H}from"./useDate-x98vB-mK.js";import{c as g}from"./calculate-Bl1nHP9U.js";import{P as Q,F as V}from"./PaymentForm--mcUVo8j.js";import{t as N}from"./statusTagColor-DxbKI3gy.js";import{T as $}from"./index-DeHx2gjr.js";import{D as l}from"./index-BqtLl35Y.js";import{C as W}from"./CloseCircleOutlined-CNYDMl4f.js";import{s as q}from"./ErpApp-Ox7LMLtJ.js";import"./currency.es-9OAR_aOO.js";import"./index-C-LgOX_f.js";import"./color-DHucoY0N.js";import"./index-DUJs3bMc.js";import"./index-BSBlY_m1.js";function z({config:n,currentInvoice:s}){const a=L(),r=w();let{entity:m}=n;const o=D(),{isLoading:d,isSuccess:t}=U(k),[p]=_.useForm(),[j,b]=i.useState(0);i.useEffect(()=>{if(s){const{credit:c,total:y,discount:x,amount:T}=s;b(g.sub(g.sub(y,x),g.sub(g.sub(c,T))));const u={...s};u.date&&(u.date=Y(u.date)),p.setFieldsValue(u)}},[s]),i.useEffect(()=>{t&&(p.resetFields(),o(h.resetAction({actionType:"recordPayment"})),o(h.list({entity:m})),r(`/${m.toLowerCase()}/read/${s._id}`))},[t]);const f=c=>{if(s){const{_id:y}=s,x=s.client&&s.client._id;c={...c,invoice:y,client:x}}o(h.update({entity:m,id:s._id,jsonData:c}))};return e.jsx(e.Fragment,{children:e.jsx(B,{isLoading:d,children:e.jsxs(_,{form:p,layout:"vertical",onFinish:f,children:[e.jsx(Q,{maxAmount:j}),e.jsx(_.Item,{children:e.jsx(C,{type:"primary",htmlType:"submit",children:a("Update")})})]})})})}function G({config:n,currentItem:s}){var f,c;const a=L(),{entity:r,ENTITY_NAME:m}=n,o=H(),d=w(),[t,p]=i.useState(s);i.useEffect(()=>{const y=new AbortController;if(s){const{invoice:x,_id:T,...u}=s;p({...u,...x,_id:T})}return()=>y.abort()},[s]);const[j,b]=i.useState({});return i.useEffect(()=>{t!=null&&t.client&&b(t.client[t.client.type])},[t]),e.jsxs(e.Fragment,{children:[e.jsx(F,{gutter:[12,12],children:e.jsxs(E,{className:"gutter-row",xs:{span:24},sm:{span:24},md:{span:24},lg:{span:20,push:2},children:[e.jsx(O,{onBack:()=>d(`/${r.toLowerCase()}`),title:`Update  ${m} # ${t.number}/${t.year||""}`,ghost:!1,tags:e.jsx($,{color:(f=N(t.paymentStatus))==null?void 0:f.color,children:t.paymentStatus}),extra:[e.jsx(C,{onClick:()=>{d(`/${r.toLowerCase()}`)},icon:e.jsx(W,{}),children:a("Cancel")},`${A.generate()}`),e.jsx(C,{onClick:()=>d(`/invoice/read/${t._id}`),icon:e.jsx(V,{}),children:a("Show invoice")},`${A.generate()}`)],style:{padding:"20px 0px"}}),e.jsx(P,{dashed:!0})]})}),e.jsxs(F,{gutter:[12,12],children:[e.jsxs(E,{className:"gutter-row",xs:{span:24,order:2},sm:{span:24,order:2},md:{span:10,order:2,push:2},lg:{span:10,order:2,push:4},children:[e.jsx("div",{className:"space50"}),e.jsxs(l,{title:`${a("Client")} : ${t.client.name}`,column:1,children:[e.jsx(l.Item,{label:a("email"),children:j.email}),e.jsx(l.Item,{label:a("Phone"),children:j.phone}),e.jsx(P,{dashed:!0}),e.jsx(l.Item,{label:a("Payment Status"),children:e.jsx($,{color:(c=N(t.paymentStatus))==null?void 0:c.color,children:t.paymentStatus})}),e.jsx(l.Item,{label:a("SubTotal"),children:o.moneyFormatter({amount:t.subTotal,currency_code:t.currency})}),e.jsx(l.Item,{label:a("Total"),children:o.moneyFormatter({amount:t.total,currency_code:t.currency})}),e.jsx(l.Item,{label:"Discount",children:o.moneyFormatter({amount:t.discount,currency_code:t.currency})}),e.jsx(l.Item,{label:"Balance",children:o.moneyFormatter({amount:t.credit,currency_code:t.currency})})]})]}),e.jsx(E,{className:"gutter-row",xs:{span:24,order:1},sm:{span:24,order:1},md:{span:12,order:1},lg:{span:10,order:1,push:2},children:e.jsx(z,{config:n,currentInvoice:t})})]})]})}function J({config:n}){const s=D(),{id:a}=I();i.useLayoutEffect(()=>{s(h.read({entity:n.entity,id:a}))},[a]);const{result:r,isSuccess:m,isLoading:o=!0}=U(v),d=t=>{s(q.updateCurrency({data:{default_currency_code:t}}))};return i.useLayoutEffect(()=>{r&&(s(h.currentAction({actionType:"update",id:a,data:r})),d(r.currency))},[r]),o?e.jsx(S,{children:e.jsx(M,{})}):e.jsx(S,{children:m?e.jsx(G,{config:n,currentItem:r}):e.jsx(R,{entity:n.entity})})}function je(){const n=L(),s="payment",a={PANEL_TITLE:n("payment"),DATATABLE_TITLE:n("payment_list"),ADD_NEW_ENTITY:n("add_new_payment"),ENTITY_NAME:n("payment")},r={entity:s,...a};return e.jsx(J,{config:r})}export{je as default};