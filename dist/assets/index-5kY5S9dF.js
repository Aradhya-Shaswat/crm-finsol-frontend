import{aU as o}from"./index-BpW8e4D6.js";import{d as i}from"./index-GN6cFBMB.js";import{t as u}from"./statusTagColor-DxbKI3gy.js";import"./index-BhZ7SbBA.js";import{Q as f}from"./IdurarOs-CzPiZsy4.js";import{E as x}from"./selectors-C4bJO8cF.js";import{E as T}from"./index-DppOwbuo.js";import{a as g,u as y}from"./useDate-x98vB-mK.js";import{T as E}from"./index-DeHx2gjr.js";import"./ErpApp-Ox7LMLtJ.js";import"./index-BMllFzis.js";import"./useDebounce-BtnVQpIT.js";import"./actions-Bpk_XOR4.js";import"./index-KrFx5yLV.js";import"./Table-DMAZt2fC.js";import"./FilePdfOutlined-Gnr08UdM.js";import"./DeleteOutlined-BpppmGon.js";import"./ArrowRightOutlined-muWJYQQT.js";import"./helpers-Tfv8m5Eu.js";import"./PlusOutlined-BspBsbtv.js";import"./index-B0OYYI-Q.js";import"./fade-DVCn1y8x.js";import"./currency.es-9OAR_aOO.js";function b({config:t}){return o.jsx(x,{children:o.jsx(T,{config:t})})}function G(){const t=f(),{dateFormat:a}=g(),m="quote",{moneyFormatter:n}=y(),l={entity:"client",displayLabels:["name"],searchFields:"name"},s=["number","client.name"],c=[{title:t("Number"),dataIndex:"number"},{title:t("Client"),dataIndex:["client","name"]},{title:t("Date"),dataIndex:"date",render:e=>i(e).format(a)},{title:t("expired Date"),dataIndex:"expiredDate",render:e=>i(e).format(a)},{title:t("Sub Total"),dataIndex:"subTotal",onCell:()=>({style:{textAlign:"right",whiteSpace:"nowrap",direction:"ltr"}}),render:(e,r)=>n({amount:e,currency_code:r.currency})},{title:t("Total"),dataIndex:"total",onCell:()=>({style:{textAlign:"right",whiteSpace:"nowrap",direction:"ltr"}}),render:(e,r)=>n({amount:e,currency_code:r.currency})},{title:t("Status"),dataIndex:"status",render:e=>{let r=u(e);return o.jsx(E,{color:r.color,children:e&&t(r.label)})}}],d={PANEL_TITLE:t("proforma invoice"),DATATABLE_TITLE:t("proforma invoice_list"),ADD_NEW_ENTITY:t("add_new_proforma invoice"),ENTITY_NAME:t("proforma invoice")},p={...{entity:m,...d},dataTableColumns:c,searchConfig:l,deleteModalLabels:s};return o.jsx(b,{config:p})}export{G as default};