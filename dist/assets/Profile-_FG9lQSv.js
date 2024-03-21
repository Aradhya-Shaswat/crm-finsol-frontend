import{a as d,h as A,aU as e,b9 as $,aV as E,b8 as U}from"./index-Ct6RrEec.js";import{s as h}from"./index-KrFx5yLV.js";import{P as L}from"./index-BymyOuEY.js";import{A as T,Q as j,_ as v,L as p,a6 as D,ak as R,aa as S,a8 as P,$ as z,a9 as B,ac as r,ad as f,bm as V,ab as q,X as H,W,bn as Y}from"./IdurarOs-CsZik77s.js";import{A as J,L as G}from"./ErpApp-CitG2MPT.js";import{D as x}from"./index-CMa2bfw5.js";import{U as Q,a as X,s as C}from"./UploadOutlined-cAcdGIND.js";import{C as K}from"./CloseCircleOutlined-UOE0GKFw.js";import{M as Z}from"./index-CnCceo8l.js";import"./fade-YLrKoCHg.js";import"./DeleteOutlined-GCZ1x-e2.js";import"./progress-PDJFPAcI.js";var ee={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840zM512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z"}}]},name:"save",theme:"outlined"};const se=ee;var te=function(t,a){return d.createElement(T,A({},t,{ref:a,icon:se}))};const oe=d.forwardRef(te),M="OPEN_PASSWORD_MODAL",N="CLOSE_PASSWORD_MODAL",F="OPEN_PROFILE_PANEL",_="CLOSE_PROFILE_PANEL",y={read:{isOpen:!0},update:{isOpen:!1},passwordModal:{isOpen:!1}};function ae(s,t){const{keyState:a=null}=t;switch(t.type){case M:return{...s,passwordModal:{isOpen:!0}};case N:return{...s,passwordModal:{isOpen:!1}};case F:return{...y,read:{isOpen:!1},[a]:{isOpen:!0}};case _:return{...y};default:throw new Error(`Unhandled action type: ${t.type}`)}}const ne=s=>({modal:{open:()=>{s({type:M})},close:()=>{s({type:N})}},updatePanel:{open:()=>{s({type:F,keyState:"update"})},close:()=>{s({type:_})}}}),re=ne,ie=s=>({isModalOpen:()=>s.isModalOpen,isPanelOpen:()=>s.isPanelOpen}),le=ie,I=d.createContext();function ce({children:s}){const[t,a]=d.useReducer(ae,y),n=d.useMemo(()=>[t,a],[t]);return e.jsx(I.Provider,{value:n,children:s})}function O(){const s=d.useContext(I);if(s===void 0)throw new Error("useProfileContext must be used within a ProfileContextProvider");const[t,a]=s,n=re(a),l=le(t);return{state:t,profileContextAction:n,profileContextSelector:l}}const de=({config:s})=>{const t=j(),a=$(),{profileContextAction:n}=O(),{modal:l,updatePanel:u}=n,{ENTITY_NAME:i}=s,o=E(v);return e.jsxs(e.Fragment,{children:[e.jsx(L,{onBack:()=>window.history.back(),title:i,ghost:!1,extra:[e.jsx(p,{onClick:()=>{u.open()},type:"primary",icon:e.jsx(D,{}),children:t("Edit")},`${h.generate()}`),e.jsx(p,{icon:e.jsx(R,{}),onClick:()=>{l.open()},children:t("Update Password")},`${h.generate()}`)],style:{padding:"20px 0px"}}),e.jsxs(S,{align:"middle",children:[e.jsx(P,{xs:{span:24},sm:{span:7},md:{span:5},children:e.jsx(J,{className:"last left",src:o!=null&&o.photo?z+(o==null?void 0:o.photo):void 0,size:96,style:{color:"#f56a00",backgroundColor:o!=null&&o.photo?"none":"#fde3cf",boxShadow:"rgba(150, 190, 238, 0.35) 0px 0px 15px 3px",fontSize:"48px"},alt:`${o==null?void 0:o.name}`,children:o==null?void 0:o.name.charAt(0).toUpperCase()})}),e.jsx(P,{xs:{span:24},sm:{span:18},children:e.jsxs(x,{column:1,size:"middle",children:[e.jsx(x.Item,{label:t("first name"),children:o==null?void 0:o.name}),e.jsx(x.Item,{label:t("last name"),children:o==null?void 0:o.surname}),e.jsx(x.Item,{label:t("email"),children:o==null?void 0:o.email}),e.jsx(x.Item,{label:t("role"),children:o==null?void 0:o.role})]})})]}),e.jsx(B,{}),e.jsx(p,{icon:e.jsx(G,{}),className:"right",onClick:()=>a("/logout"),children:t("Logout")},`${h.generate()}`)]})},pe=de,ue=s=>(s.type==="image/jpeg"||s.type==="image/png"||C.error("You can only upload JPG/PNG file!"),s.size/1024/1024<5||C.error("Image must smaller than 5MB!"),!1);function me({isUpdateForm:s=!1}){const t=j();return e.jsxs(e.Fragment,{children:[e.jsx(r.Item,{label:t("first Name"),name:"name",rules:[{required:!0}],children:e.jsx(f,{autoComplete:"off"})}),e.jsx(r.Item,{label:t("last Name"),name:"surname",rules:[{required:!0}],children:e.jsx(f,{autoComplete:"off"})}),e.jsx(r.Item,{label:t("email"),name:"email",rules:[{required:!0},{type:"email"}],children:e.jsx(f,{autoComplete:"off"})}),e.jsx(r.Item,{name:"file",label:t("Photo"),valuePropName:"fileList",getValueFromEvent:a=>a.fileList,children:e.jsx(Q,{beforeUpload:ue,listType:"picture",accept:"image/png, image/jpeg",maxCount:1,children:e.jsx(p,{icon:e.jsx(X,{}),children:t("click_to_upload")})})})]})}const xe=({config:s})=>{const t=j(),{profileContextAction:a}=O(),{updatePanel:n}=a,l=U(),{ENTITY_NAME:u}=s,i=E(v),[o]=r.useForm();d.useEffect(()=>{o.setFieldsValue(i)},[i]);const g=()=>{o.submit()},m=c=>{c.file&&(c.file=c.file[0].originFileObj),l(V({entity:"admin/profile",jsonData:c}))};return e.jsxs("div",{children:[e.jsx(L,{onBack:()=>n.close(),title:u,ghost:!1,extra:[e.jsx(p,{onClick:()=>n.close(),icon:e.jsx(K,{}),children:t("Close")},`${h.generate()}`),e.jsx(p,{onClick:()=>{g(),n.close()},type:"primary",icon:e.jsx(oe,{}),htmlType:"submit",children:t("Save")},`${h.generate()}`)],style:{padding:"20px 0px"}}),e.jsxs(S,{align:"start",children:[e.jsx(P,{xs:{span:24},sm:{span:6},md:{span:4}}),e.jsx(P,{xs:{span:16},children:e.jsx(r,{form:o,onFinish:m,labelAlign:"left",labelCol:{span:6},wrapperCol:{span:10},children:e.jsx(me,{isUpdateForm:!0})})})]})]})},he=xe,fe=()=>{const s=j(),{state:t,profileContextAction:a}=O(),{modal:n}=a,{passwordModal:l}=t,u=s("Update Password"),[i]=r.useForm(),{onFetch:o}=q(),g=m=>{const c="admin/profile/password/",k=(async()=>await H.patch({entity:c,jsonData:m}))();o(k),i.resetFields(),n.close()};return e.jsx(Z,{title:u,open:l.isOpen,onCancel:n.close,okText:"Update",onOk:()=>{i.submit()},children:e.jsxs(r,{form:i,layout:"vertical",onFinish:g,children:[e.jsx(r.Item,{label:s("New Password"),name:"password",rules:[{required:!0,min:8}],hasFeedback:!0,children:e.jsx(f.Password,{})}),e.jsx(r.Item,{label:s("Confirm Password"),name:"passwordCheck",hasFeedback:!0,rules:[{required:!0},({getFieldValue:m})=>({validator(c,w){return!w||m("password")===w?Promise.resolve():Promise.reject(new Error("The two passwords that you entered do not match!"))}})],children:e.jsx(f.Password,{autoComplete:"new-password"})})]})})},je=fe,b=({isOpen:s,children:t})=>{const a=s?{display:"block",opacity:1}:{display:"none",opacity:0};return e.jsx("div",{style:a,children:t})};function Pe({config:s}){const{state:t}=O(),{update:a,read:n}=t;return e.jsxs("div",{children:[e.jsx(b,{isOpen:n.isOpen,children:e.jsx(pe,{config:s})}),e.jsx(b,{isOpen:a.isOpen,children:e.jsx(he,{config:s})}),e.jsx(je,{})]})}const Oe=({children:s})=>e.jsx(ce,{children:s}),ge=Oe;function we({config:s}){return e.jsx(ge,{children:e.jsx(W,{className:"site-layout",children:e.jsx(Y,{className:"whiteBox shadow",style:{padding:"50px 40px",margin:"100px auto",width:"100%",maxWidth:"1100px"},children:e.jsx(Pe,{config:s})})})})}function ke(){const s="profile",t=j(),a={PANEL_TITLE:t("profile"),ENTITY_NAME:t("profile")},n={entity:s,...a};return e.jsx(we,{config:n})}export{ke as default};
