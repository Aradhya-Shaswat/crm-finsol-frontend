import{aU as r}from"./index-Ct6RrEec.js";import{C as s}from"./CrudModule-DaO7-I8o.js";import{D as o}from"./index-aGxGC4Ak.js";import{c as l}from"./color-DHucoY0N.js";import{Q as p}from"./IdurarOs-CsZik77s.js";import"./index-OlWCiwny.js";import"./actions-BAWgvR9t.js";import"./index-BfojRcMJ.js";import"./helpers-CLllYck4.js";import"./index-CnCceo8l.js";import"./ErpApp-CitG2MPT.js";import"./fade-YLrKoCHg.js";import"./index-BymyOuEY.js";import"./useDate-BfG-5Jyu.js";import"./currency.es-9OAR_aOO.js";import"./useDebounce-Br3jPxQj.js";import"./countryList-DF4A4uPO.js";import"./index-KrFx5yLV.js";import"./index-s95ArsnL.js";import"./DeleteOutlined-GCZ1x-e2.js";import"./ArrowRightOutlined-BiFitDYM.js";import"./Table-CNN7PCof.js";import"./PlusOutlined-CiBpLWhd.js";import"./index-D7OGwN2k.js";import"./index-JB42BrPT.js";import"./index-CoOcis8n.js";import"./index-Avir_K77.js";import"./index-B3MwQa-_.js";const m=["USD","CAD","EUR","AED","AFN","ALL","AMD","ARS","AUD","AZN","BAM","BDT","BGN","BHD","BIF","BND","BOB","BRL","BWP","BYR","BZD","CDF","CHF","CLP","CNY","COP","CRC","CVE","CZK","DJF","DKK","DOP","DZD","EEK","EGP","ERN","ETB","GBP","GEL","GHS","GNF","GTQ","HKD","HNL","HRK","HUF","IDR","ILS","INR","IQD","IRR","ISK","JMD","JOD","JPY","KES","KHR","KMF","KRW","KWD","KZT","LBP","LKR","LTL","LVL","LYD","MAD","MDL","MGA","MKD","MMK","MOP","MUR","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SDG","SEK","SGD","SOS","SYP","THB","TND","TOP","TRY","TTD","TWD","TZS","UAH","UGX","UYU","UZS","VEF","VND","XAF","XOF","YER","ZAR","ZMK"],D=m.map(e=>({value:e,label:e})),t={currency_name:{type:"string",required:!0},color:{type:"color",options:[...l],required:!0,disableForTable:!0},currency_code:{type:"select",showSearch:!0,required:!0,options:D},currency_symbol:{type:"stringWithColor",required:!0,color:"gold"},currency_position:{type:"selectWithTranslation",required:!0,renderAsTag:!0,defaultValue:"before",options:[{value:"before",label:"before",color:"magenta"},{value:"after",label:"after",color:"purple"}]},decimal_sep:{label:"decimal_separator",type:"string",required:!0,defaultValue:"."},thousand_sep:{label:"thousand_separator",type:"string",required:!0,defaultValue:" "},cent_precision:{type:"number",required:!0,defaultValue:2},zero_format:{type:"boolean",required:!0,defaultValue:!1},enabled:{type:"boolean"}};function W(){const e=p(),c="currency",a={displayLabels:["currency_name","currency_code","currency_symbol"],searchFields:"currency_name,currency_code,currency_symbol"},i=["currency_name"],n={PANEL_TITLE:e("currency"),DATATABLE_TITLE:e("currency_list"),ADD_NEW_ENTITY:e("add_new_currency"),ENTITY_NAME:e("currency")},u={...{entity:c,...n},fields:t,searchConfig:a,deleteModalLabels:i};return r.jsx(s,{createForm:r.jsx(o,{fields:t}),updateForm:r.jsx(o,{fields:t}),config:u})}export{W as default};
