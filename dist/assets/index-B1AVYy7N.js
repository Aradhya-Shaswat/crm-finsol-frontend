import{aU as r}from"./index-BpW8e4D6.js";import{C as n}from"./CrudModule-CwLl49iY.js";import{D as e}from"./index-CF3aUN8l.js";import{Q as s}from"./IdurarOs-CzPiZsy4.js";import"./index-h2QC9e8N.js";import"./actions-CBtGme8m.js";import"./index-BhZ7SbBA.js";import"./helpers-Tfv8m5Eu.js";import"./index-B0OYYI-Q.js";import"./ErpApp-Ox7LMLtJ.js";import"./fade-DVCn1y8x.js";import"./index-GN6cFBMB.js";import"./useDate-x98vB-mK.js";import"./currency.es-9OAR_aOO.js";import"./useDebounce-BtnVQpIT.js";import"./countryList-C6NXERry.js";import"./index-KrFx5yLV.js";import"./color-DHucoY0N.js";import"./index-DeHx2gjr.js";import"./DeleteOutlined-BpppmGon.js";import"./ArrowRightOutlined-muWJYQQT.js";import"./Table-DMAZt2fC.js";import"./PlusOutlined-BspBsbtv.js";import"./index-BMllFzis.js";import"./index-C-LgOX_f.js";import"./index-BcWxf4Ro.js";import"./index-DUJs3bMc.js";import"./index-BSBlY_m1.js";const o={name:{type:"string",required:!0},productCategory:{type:"async",label:"product Category",displayLabels:["productCategory","name"],dataIndex:["productCategory","name"],entity:"productcategory",required:!0},currency:{type:"selectCurrency"},price:{type:"currency",required:!0},description:{type:"textarea"},ref:{type:"string"}};function W(){const t=s(),i="product",p={displayLabels:["name"],searchFields:"name"},a=["name"],m={PANEL_TITLE:t("Product"),DATATABLE_TITLE:t("Product_list"),ADD_NEW_ENTITY:t("add_new_Product"),ENTITY_NAME:t("Product")},c={...{entity:i,...m},fields:o,searchConfig:p,deleteModalLabels:a};return r.jsx(n,{createForm:r.jsx(e,{fields:o}),updateForm:r.jsx(e,{fields:o}),config:c})}export{W as default};