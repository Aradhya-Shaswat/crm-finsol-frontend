import{aU as e}from"./index-Ct6RrEec.js";import{C as c}from"./CrudModule-DaO7-I8o.js";import{ac as r,ad as l,Q as x}from"./IdurarOs-CsZik77s.js";import{I as i}from"./index-Avir_K77.js";import"./index-OlWCiwny.js";import"./actions-BAWgvR9t.js";import"./index-BfojRcMJ.js";import"./helpers-CLllYck4.js";import"./index-CnCceo8l.js";import"./ErpApp-CitG2MPT.js";import"./fade-YLrKoCHg.js";import"./index-BymyOuEY.js";import"./useDate-BfG-5Jyu.js";import"./currency.es-9OAR_aOO.js";import"./useDebounce-Br3jPxQj.js";import"./countryList-DF4A4uPO.js";import"./index-KrFx5yLV.js";import"./color-DHucoY0N.js";import"./index-s95ArsnL.js";import"./DeleteOutlined-GCZ1x-e2.js";import"./ArrowRightOutlined-BiFitDYM.js";import"./Table-CNN7PCof.js";import"./PlusOutlined-CiBpLWhd.js";function n(){return e.jsxs(e.Fragment,{children:[e.jsx(r.Item,{label:"Product",name:"product",rules:[{required:!0,message:"Please input Product name!"}],children:e.jsx(l,{})}),e.jsx(r.Item,{label:"Quantity",name:"quantity",rules:[{required:!0,message:"Please input Quantity!",type:"number",min:0}],children:e.jsx(i,{})}),e.jsx(r.Item,{label:"Unit Price",name:"unitPrice",rules:[{required:!0,message:"Please input Unit Price!",type:"number",min:0}],children:e.jsx(i,{formatter:t=>`$ ${t}`,parser:t=>t.replace(/\$\s?|(,*)/g,"")})})]})}function w(){const t=x(),o="inventory",a={displayLabels:["product"],searchFields:"product",outputValue:"_id"},u=["product","quantity","unitPrice"],s=[{title:t("Product"),dataIndex:"product"},{title:t("Quantity"),dataIndex:"quantity"},{title:t("Unit Price"),dataIndex:"unitPrice"}],m=[{title:t("Product"),dataIndex:["product"]},{title:t("Quantity"),dataIndex:["quantity"]},{title:t("Unit Price"),dataIndex:["unitPrice"]}],d={PANEL_TITLE:t("product"),DATATABLE_TITLE:t("product_list"),ADD_NEW_ENTITY:t("add_new_product"),ENTITY_NAME:t("product")},p={...{entity:o,...d},readColumns:s,dataTableColumns:m,searchConfig:a,deleteModalLabels:u};return e.jsx(c,{createForm:e.jsx(n,{}),updateForm:e.jsx(n,{isUpdateForm:!0}),config:p})}export{w as default};