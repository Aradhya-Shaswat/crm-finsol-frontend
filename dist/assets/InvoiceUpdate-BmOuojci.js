import{b8 as d,ba as f,a as n,aV as E,aU as e,bi as l}from"./index-BpW8e4D6.js";import{ae as y,Q as T}from"./IdurarOs-CzPiZsy4.js";import"./index-BhZ7SbBA.js";import{s as _,E as c}from"./selectors-C4bJO8cF.js";import{U as I}from"./UpdateItem-DdXfOMMv.js";import{I as L}from"./InvoiceForm-C0torq6n.js";import{e as p}from"./actions-Bpk_XOR4.js";import{s as x}from"./ErpApp-Ox7LMLtJ.js";import"./index-GN6cFBMB.js";import"./calculate-Bl1nHP9U.js";import"./currency.es-9OAR_aOO.js";import"./index-KrFx5yLV.js";import"./statusTagColor-DxbKI3gy.js";import"./index-DeHx2gjr.js";import"./CloseCircleOutlined-CNYDMl4f.js";import"./PlusOutlined-BspBsbtv.js";import"./index-BMllFzis.js";import"./useDebounce-BtnVQpIT.js";import"./index-BCHz93U8.js";import"./useDate-x98vB-mK.js";import"./index-DUJs3bMc.js";import"./DeleteOutlined-BpppmGon.js";import"./index-C-LgOX_f.js";import"./color-DHucoY0N.js";import"./index-BcWxf4Ro.js";import"./index-BSBlY_m1.js";function v({config:o}){const t=d(),{id:r}=f();n.useLayoutEffect(()=>{t(p.read({entity:o.entity,id:r}))},[r]);const a=s=>{console.log("🚀 ~ updateCurrency ~ value:",s),t(x.updateCurrency({data:{default_currency_code:s}}))},{result:i,isSuccess:m,isLoading:u=!0}=E(_);return n.useLayoutEffect(()=>{if(i){const s={...i};t(p.currentAction({actionType:"update",data:s})),a(i.currency)}},[i]),u?e.jsx(c,{children:e.jsx(l,{})}):e.jsx(c,{children:m?e.jsx(I,{config:o,UpdateForm:L}):e.jsx(y,{entity:o.entity})})}function J(){const o="invoice",t=T(),r={PANEL_TITLE:t("invoice"),DATATABLE_TITLE:t("invoice_list"),ADD_NEW_ENTITY:t("add_new_invoice"),ENTITY_NAME:t("invoice"),RECORD_ENTITY:t("record_payment")},a={entity:o,...r};return e.jsx(v,{config:a})}export{J as default};