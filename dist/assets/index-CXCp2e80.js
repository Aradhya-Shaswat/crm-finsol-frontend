import{aU as t}from"./index-Ct6RrEec.js";import{C as s}from"./CrudModule-DaO7-I8o.js";import{D as o}from"./index-aGxGC4Ak.js";import{Q as c}from"./IdurarOs-CsZik77s.js";import"./index-OlWCiwny.js";import"./actions-BAWgvR9t.js";import"./index-BfojRcMJ.js";import"./helpers-CLllYck4.js";import"./index-CnCceo8l.js";import"./ErpApp-CitG2MPT.js";import"./fade-YLrKoCHg.js";import"./index-BymyOuEY.js";import"./useDate-BfG-5Jyu.js";import"./currency.es-9OAR_aOO.js";import"./useDebounce-Br3jPxQj.js";import"./countryList-DF4A4uPO.js";import"./index-KrFx5yLV.js";import"./color-DHucoY0N.js";import"./index-s95ArsnL.js";import"./DeleteOutlined-GCZ1x-e2.js";import"./ArrowRightOutlined-BiFitDYM.js";import"./Table-CNN7PCof.js";import"./PlusOutlined-CiBpLWhd.js";import"./index-D7OGwN2k.js";import"./index-JB42BrPT.js";import"./index-CoOcis8n.js";import"./index-Avir_K77.js";import"./index-B3MwQa-_.js";const r={firstname:{type:"string",required:!0},lastname:{type:"string",required:!0},company:{type:"search",entity:"company",renderAsTag:!0,redirectLabel:"Add New Company",withRedirect:!0,urlToRedirect:"/company",displayLabels:["name"],searchFields:"name",dataIndex:["company","name"]},country:{type:"country"},phone:{type:"phone"},email:{type:"email"}};function W(){const e=c(),i="people",m={displayLabels:["firstname","lastname"],searchFields:"firstname,lastname,email"},a=["firstname","lastname"],p={PANEL_TITLE:e("person"),DATATABLE_TITLE:e("people_list"),ADD_NEW_ENTITY:e("add_new_person"),ENTITY_NAME:e("person")},n={...{entity:i,...p},fields:r,searchConfig:m,deleteModalLabels:a};return t.jsx(s,{createForm:t.jsx(o,{fields:r}),updateForm:t.jsx(o,{fields:r}),config:n})}export{W as default};