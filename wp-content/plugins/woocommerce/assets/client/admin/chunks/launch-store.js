"use strict";(globalThis.webpackChunk_wcAdmin_webpackJsonp=globalThis.webpackChunk_wcAdmin_webpackJsonp||[]).push([[8219],{2658:(e,t,n)=>{n.r(t),n.d(t,{default:()=>_});var a=n(69307),c=n(4528),o=n(99196),r=n(87608),i=n.n(r),s=n(14841),l=n(90556);function u(e){const t=(0,c.v9)(e,(e=>{var t;return(0,l.r)(null!==(t=e.getMeta())&&void 0!==t?t:void 0)})),[n,a]=(0,o.useState)(null);return(0,o.useEffect)((()=>{t?.component&&a((()=>t.component))}),[t?.component]),[n||null]}var S=n(5466),d=n(68703);const m=(0,S.cY)({types:{},actions:{openExternalUrl:({event:e})=>{"OPEN_EXTERNAL_URL"===e.type&&window.open(e.url,"_self")},showLaunchStoreSuccessPage:(0,d.c)((({context:e})=>e.mainContentMachineRef),{type:"SHOW_LAUNCH_STORE_SUCCESS"}),showLoadingPage:(0,d.c)((({context:e})=>e.mainContentMachineRef),{type:"SHOW_LOADING"})}}).createMachine({id:"sidebar",initial:"init",context:({input:e})=>({externalUrl:null,mainContentMachineRef:e.mainContentMachineRef}),states:{init:{always:{target:"launchYourStoreHub"}},launchYourStoreHub:{initial:"preLaunchYourStoreHub",states:{preLaunchYourStoreHub:{always:"launchYourStoreHub"},launchYourStoreHub:{tags:"sidebar-visible",meta:{component:e=>(0,a.createElement)("div",{className:i()("launch-store-sidebar__container",e.className)},(0,a.createElement)("p",null,"Sidebar"),(0,a.createElement)("button",{onClick:()=>{e.sendEventToSidebar({type:"LAUNCH_STORE"})}},"Launch Store"),(0,a.createElement)("button",{onClick:()=>{e.sendEventToSidebar({type:"OPEN_EXTERNAL_URL",url:"https://example.com"})}},"Open external URL"))},on:{LAUNCH_STORE:{target:"#storeLaunching"}}}}},storeLaunching:{id:"storeLaunching",initial:"launching",states:{launching:{tags:"fullscreen",entry:{type:"showLoadingPage"},on:{LAUNCH_STORE_SUCCESS:{target:"#storeLaunchSuccessful",actions:{type:"showLaunchStoreSuccessPage"}}}}}},storeLaunchSuccessful:{id:"storeLaunchSuccessful",tags:"fullscreen"},openExternalUrl:{id:"openExternalUrl",tags:"sidebar-visible",entry:["openExternalUrl"]}},on:{OPEN_EXTERNAL_URL:{target:"#openExternalUrl"},OPEN_WC_ADMIN_URL:{},OPEN_WC_ADMIN_URL_IN_CONTENT_AREA:{}}}),E=({children:e,className:t})=>(0,a.createElement)("div",{className:i()("launch-your-store-layout__sidebar",t)},e),h=(0,S.cY)({types:{}}).createMachine({id:"mainContent",initial:"init",context:{},states:{init:{always:[{target:"#sitePreview"}]},sitePreview:{id:"sitePreview",meta:{component:e=>(0,a.createElement)("div",{className:i()("launch-store-site-preview-page__container",e.className)},(0,a.createElement)("p",null,"Main Content - Site Preview"))}},launchStoreSuccess:{id:"launchStoreSuccess",meta:{component:e=>(0,a.createElement)("div",{className:i()("launch-store-success-page__container",e.className)},(0,a.createElement)("p",null,"Main Content - Site Launch Store Success Page"))}},loading:{id:"loading",meta:{component:e=>(0,a.createElement)("div",{className:i()("launch-store-loading-page__container",e.className)},(0,a.createElement)("p",null,"Main Content - Loading page"),(0,a.createElement)("button",{onClick:()=>{e.sendEventToSidebar({type:"LAUNCH_STORE_SUCCESS"})}},"Launch Store Success"))}}},on:{SHOW_LAUNCH_STORE_SUCCESS:{target:"#launchStoreSuccess"},SHOW_LOADING:{target:"#loading"}}}),p=({children:e})=>(0,a.createElement)("div",{className:"launch-your-store-layout__content"},e),_=()=>{(0,s.p0)(["woocommerce-launch-your-store"]);const[e,t,n]=(0,c.eO)(h),[o,r,l]=(0,c.eO)(m,{input:{mainContentMachineRef:n}}),S=!o.hasTag("fullscreen"),[d]=u(l),[_]=u(n);return(0,a.createElement)("div",{className:"launch-your-store-layout__container"},(0,a.createElement)(E,{className:i()({"is-sidebar-hidden":!S})},d&&(0,a.createElement)(d,{sendEventToSidebar:r,sendEventToMainContent:t,context:o.context}),JSON.stringify(o.toJSON()),JSON.stringify(o.getMeta())),(0,a.createElement)(p,null,_&&(0,a.createElement)(_,{sendEventToSidebar:r,sendEventToMainContent:t,context:e.context}),JSON.stringify(e.getMeta()),JSON.stringify(e.toJSON())))}},90556:(e,t,n)=>{function a(e,t=new Set){if(!t.has(e)){t.add(e);for(const n in e)if(e.hasOwnProperty(n)){if("component"===n)return e;if("object"==typeof e[n]&&null!==e[n]){const c=a(e[n],t);if(void 0!==c)return c}}}}n.d(t,{r:()=>a})}}]);