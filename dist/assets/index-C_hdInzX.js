import{aU as e}from"./index-Ct6RrEec.js";import{C as I}from"./CrudModule-DaO7-I8o.js";import{Q as m,ac as i,ad as s,Z as d}from"./IdurarOs-CsZik77s.js";import{I as l}from"./index-Avir_K77.js";import"./index-OlWCiwny.js";import"./actions-BAWgvR9t.js";import"./index-BfojRcMJ.js";import"./helpers-CLllYck4.js";import"./index-CnCceo8l.js";import"./ErpApp-CitG2MPT.js";import"./fade-YLrKoCHg.js";import"./index-BymyOuEY.js";import"./useDate-BfG-5Jyu.js";import"./currency.es-9OAR_aOO.js";import"./useDebounce-Br3jPxQj.js";import"./countryList-DF4A4uPO.js";import"./index-KrFx5yLV.js";import"./color-DHucoY0N.js";import"./index-s95ArsnL.js";import"./DeleteOutlined-GCZ1x-e2.js";import"./ArrowRightOutlined-BiFitDYM.js";import"./Table-CNN7PCof.js";import"./PlusOutlined-CiBpLWhd.js";function u({isUpdateForm:t=!1}){const r=m(),a=(n,o)=>o&&o.trim()===""?Promise.reject(new Error("Field cannot be empty")):Promise.resolve();return e.jsxs(e.Fragment,{children:[e.jsx(i.Item,{label:r("Order ID"),name:"orderId",rules:[{required:!0},{validator:a}],children:e.jsx(s,{})}),e.jsx(i.Item,{label:r("Products"),name:"products",rules:[{required:!0},{validator:a}],children:e.jsx(s,{})}),e.jsx(i.Item,{label:r("Quantity"),name:"quantity",rules:[{required:!0}],children:e.jsx(l,{style:{width:"100%"},min:1})}),e.jsx(i.Item,{label:r("Price"),name:"price",rules:[{required:!0}],children:e.jsx(l,{min:0,precision:2,prefix:"$",style:{width:"100%"}})}),e.jsx(i.Item,{label:r("status"),name:"status",rules:[{required:!0}],children:e.jsxs(d,{children:[e.jsx(d.Option,{value:"pending",children:r("Pending")}),e.jsx(d.Option,{value:"shipped",children:r("Shipped")}),e.jsx(d.Option,{value:"delivered",children:r("Delivered")}),e.jsx(d.Option,{value:"cancelled",children:r("Cancelled")})]})}),e.jsx(i.Item,{label:r("Note"),name:"notes",rules:[{validator:a}],children:e.jsx(s.TextArea,{rows:4})})]})}function Y(){const t=m(),r="order",a={displayLabels:["orderId","status"],searchFields:"orderId,status",outputValue:"_id"},n=["orderId"],o=[{title:t("Order ID"),dataIndex:"orderId"},{title:t("Product"),dataIndex:"products"},{title:t("Quantity"),dataIndex:"quantity"},{title:t("Price"),dataIndex:"price"},{title:t("Status"),dataIndex:"status"},{title:t("Note"),dataIndex:"notes"}],c=[{title:t("Order ID"),dataIndex:"orderId"},{title:t("Product"),dataIndex:"products"},{title:t("Quantity"),dataIndex:"quantity"},{title:t("Price"),dataIndex:"price"},{title:t("Status"),dataIndex:"status"},{title:t("Note"),dataIndex:"notes"}],p={PANEL_TITLE:t("order"),DATATABLE_TITLE:t("order_list"),ADD_NEW_ENTITY:t("add_new_order"),ENTITY_NAME:t("order")},x={...{entity:r,...p},dataTableColumns:c,readColumns:o,searchConfig:a,deleteModalLabels:n};return e.jsx(I,{createForm:e.jsx(u,{}),updateForm:e.jsx(u,{isUpdateForm:!0}),config:x})}export{Y as default};