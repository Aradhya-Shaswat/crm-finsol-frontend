import{b8 as n,ba as c,b9 as d,a,aV as f,aU as e,bi as E}from"./index-Ct6RrEec.js";import{ae as l,Q as L}from"./IdurarOs-CsZik77s.js";import"./index-BfojRcMJ.js";import{s as T,E as i}from"./selectors-4q4i6c4u.js";import{U as x}from"./UpdateItem-DOlJ2KgP.js";import{Q as y}from"./QuoteForm-CS9Dx8t7.js";import{e as p}from"./actions-Bd3ByTEX.js";import"./index-BymyOuEY.js";import"./ErpApp-CitG2MPT.js";import"./calculate-Bl1nHP9U.js";import"./currency.es-9OAR_aOO.js";import"./index-KrFx5yLV.js";import"./statusTagColor-DxbKI3gy.js";import"./index-s95ArsnL.js";import"./CloseCircleOutlined-UOE0GKFw.js";import"./PlusOutlined-CiBpLWhd.js";import"./index-D7OGwN2k.js";import"./useDebounce-Br3jPxQj.js";import"./index-5Qzw0tKX.js";import"./useDate-BfG-5Jyu.js";import"./index-Avir_K77.js";import"./DeleteOutlined-GCZ1x-e2.js";import"./index-JB42BrPT.js";import"./color-DHucoY0N.js";import"./index-CoOcis8n.js";import"./index-B3MwQa-_.js";function _({config:t}){const r=n(),{id:s}=c();d(),a.useLayoutEffect(()=>{r(p.read({entity:t.entity,id:s}))},[s]);const{result:o,isSuccess:m,isLoading:u=!0}=f(T);return a.useLayoutEffect(()=>{o&&r(p.currentAction({actionType:"update",data:o}))},[o]),u?e.jsx(i,{children:e.jsx(E,{})}):e.jsx(i,{children:m?e.jsx(x,{config:t,UpdateForm:y}):e.jsx(l,{entity:t.entity})})}function H(){const t=L(),r="quote",s={PANEL_TITLE:t("quote"),DATATABLE_TITLE:t("quote_list"),ADD_NEW_ENTITY:t("add_new_quote"),ENTITY_NAME:t("quote")},o={entity:r,...s};return e.jsx(_,{config:o})}export{H as default};
