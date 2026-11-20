(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();const i_={BASE_URL:"/buildhybridai-label-lens/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_AI_BACKEND:"google-ai",VITE_APPCHECK_DEBUG:"1",VITE_APPCHECK_SITE_KEY:"",VITE_CLOUD_ESCALATION_THRESHOLD:"0.7",VITE_CLOUD_MODEL:"gemini-3.5-flash-lite",VITE_FIREBASE_API_KEY:"AIzaSyCWvrbs5dASFGoCY6cTAYkBuy_MTeggYzA",VITE_FIREBASE_APP_ID:"1:381781498864:web:435a9ba522e33fcb079b35",VITE_FIREBASE_AUTH_DOMAIN:"label-lens-cc970.firebaseapp.com",VITE_FIREBASE_MESSAGING_SENDER_ID:"381781498864",VITE_FIREBASE_PROJECT_ID:"label-lens-cc970",VITE_FIREBASE_STORAGE_BUCKET:"label-lens-cc970.firebasestorage.app"},Vt=n=>typeof n=="string"?n.trim():"",o_=(n,e)=>{const t=Number(Vt(n));return Number.isFinite(t)?t:e};function mC(n=i_){return{apiKey:Vt(n.VITE_FIREBASE_API_KEY),authDomain:Vt(n.VITE_FIREBASE_AUTH_DOMAIN),projectId:Vt(n.VITE_FIREBASE_PROJECT_ID),storageBucket:Vt(n.VITE_FIREBASE_STORAGE_BUCKET),messagingSenderId:Vt(n.VITE_FIREBASE_MESSAGING_SENDER_ID),appId:Vt(n.VITE_FIREBASE_APP_ID),backend:Vt(n.VITE_AI_BACKEND)==="agent-platform"?"agent-platform":"google-ai",appcheckSiteKey:Vt(n.VITE_APPCHECK_SITE_KEY),appcheckDebug:Vt(n.VITE_APPCHECK_DEBUG)==="1",cloudModel:Vt(n.VITE_CLOUD_MODEL)||"gemini-3.5-flash-lite",threshold:Math.min(1,Math.max(0,o_(n.VITE_CLOUD_ESCALATION_THRESHOLD,.7)))}}const xc=n=>!n||/replace-me|your-project|^\d{12}$/.test(n);function a_(n){return!!(n.apiKey&&n.projectId&&n.appId)&&!xc(n.apiKey)&&!xc(n.projectId)&&!xc(n.appId)}const c_=["cereals containing gluten","crustaceans","eggs","fish","peanuts","soybeans","milk","nuts","celery","mustard","sesame","sulphur dioxide/sulphites","lupin","molluscs"],l_=[["cereals containing gluten",["gluten","wheat","rye","barley","oat","oats","spelt","malt","farro"]],["crustaceans",["crustacean","crustaceans","prawn","prawns","shrimp","shrimps","crab","lobster","crayfish"]],["eggs",["egg","eggs","albumen","albumin","mayonnaise","meringue"]],["fish",["fish","anchovy","tuna","salmon","cod","haddock","sardine","surimi"]],["peanuts",["peanut","peanuts","peanut oil","groundnut","arachis"]],["soybeans",["soy","soya","soybean","soybeans","soja","tofu","lecithin"]],["milk",["milk","cheese","butter","whey","casein","caseinate","lactose","cream","yoghurt","yogurt"]],["nuts",["hazelnut","hazelnuts","almond","almonds","walnut","walnuts","cashew","pistachio","pecan","macadamia","brazil nut","tree nut","tree nuts"]],["celery",["celery"]],["mustard",["mustard"]],["sesame",["sesame","sesame seed","sesame seeds","tahini","benne"]],["sulphur dioxide/sulphites",["sulphur dioxide","sulfur dioxide","sulphite","sulphites","sulfites","e220","e221","e222","e223","e224","e226","e227","e228"]],["lupin",["lupin","lupin flour"]],["molluscs",["mollusc","molluscs","mussel","mussels","clam","clams","oyster","oysters","squid","octopus","snail","escargot"]]],Gs=[{key:"ingredients",label:"Ingredients",category:"ingredients",kind:"text",unit:"",zone:1},{key:"allergens",label:"Allergens · EU 14",category:"allergens",kind:"text",unit:"",zone:2},{key:"mayContain",label:"May contain",category:"mayContain",kind:"text",unit:"",zone:3},{key:"energy",label:"Energy",category:"nutrition",kind:"number",unit:"kcal",zone:4},{key:"fat",label:"Fat",category:"nutrition",kind:"number",unit:"g",zone:4},{key:"saturates",label:"of which saturates",category:"nutrition",kind:"number",unit:"g",zone:4},{key:"carbohydrate",label:"Carbohydrate",category:"nutrition",kind:"number",unit:"g",zone:4},{key:"sugars",label:"of which sugars",category:"nutrition",kind:"number",unit:"g",zone:4},{key:"fibre",label:"Fibre",category:"nutrition",kind:"number",unit:"g",zone:4},{key:"protein",label:"Protein",category:"nutrition",kind:"number",unit:"g",zone:4},{key:"salt",label:"Salt",category:"nutrition",kind:"number",unit:"g",zone:5},{key:"warnings",label:"Warnings",category:"warnings",kind:"text",unit:"",zone:6},{key:"storage",label:"Storage",category:"storage",kind:"text",unit:""},{key:"bestBefore",label:"Best before end",category:"bestBefore",kind:"text",unit:""}],tu=n=>Gs.find(e=>e.key===n),EC=["allergens","mayContain"],_C="allergens";function Fh(n){const e=` ${n.toLowerCase().replace(/[^a-z0-9/+\-]+/g," ")} `,t=new Set;for(const[s,r]of l_)r.some(i=>e.includes(` ${i} `))&&t.add(s);return c_.filter(s=>t.has(s))}function u_(n){const e=/-?\d+(?:[.,]\d+)?/.exec(n);if(!e)return null;const t=Number(e[0].replace(",","."));return Number.isFinite(t)?t:null}const B_=(n,e,t)=>{const s=Gs.find(l=>l.key===n);if(!s)return null;const r=t?.value?.trim()??"",i=e?.value?.trim()??"";if(!i&&!r)return null;const o=!!r&&(!i||!!t),a=o?t:e;return{key:n,label:s.label,category:s.category,kind:s.kind,value:a.value.trim(),numeric:s.kind==="number"?u_(a.value):null,unit:s.unit,confidence:a.confidence,provenance:o?"cloud":"local",reason:o?t?.why??"cross-checked in the cloud":void 0,zone:s.zone}},h_=n=>n.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"label",f_=n=>typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID():`label-${n}-${Math.round(Math.random()*1e6)}`;function Uo(n){const e=n.now??Date.now(),t=[];for(const u of Gs){const h=B_(u.key,n.local.fields[u.key],n.crossCheck?.fields[u.key]);h&&t.push(h)}const s=u=>t.find(h=>h.key===u)?.value??"",r=Fh(`${s("allergens")} ${s("ingredients")}`),i=Fh(s("mayContain")),o=t.filter(u=>u.provenance==="local").length,a=t.filter(u=>u.provenance==="cloud").length,l=n.local.product||"Untitled product";return{id:n.id??f_(e),productKey:n.productKey??h_(l),productName:l,netWeight:n.local.netWeight,readAt:e,fields:t,allergens:r,traces:i,localCount:o,cloudCount:a,deviceMs:Math.round(n.deviceMs),cloudMs:Math.round(n.cloudMs),totalMs:Math.round(n.deviceMs+n.cloudMs),deviceSource:n.deviceSource}}function Lt(n,e){return n.fields.find(t=>t.key===e)}const Lh=n=>n.toLowerCase().replace(/\s+/g," ").trim();function d_(n,e,t){const s=new Set([...n.fields.map(a=>a.key),...e.fields.map(a=>a.key)]),r=[];for(const a of s){const l=Lt(n,a),u=Lt(e,a);if(!l&&!u)continue;const h=l?.numeric!==null&&l?.numeric!==void 0&&u?.numeric!==null&&u?.numeric!==void 0?Math.round((u.numeric-l.numeric)*100)/100:null;r.push({key:a,label:l?.label??u?.label??a,category:l?.category??u?.category??"other",valueA:l?.value??"—",valueB:u?.value??"—",delta:h,provenanceA:l?.provenance??null,provenanceB:u?.provenance??null,changed:Lh(l?.value??"")!==Lh(u?.value??"")})}const i=a=>a.key===t?0:a.category==="nutrition"?2:1;r.sort((a,l)=>i(a)-i(l)||a.label.localeCompare(l.label));const o=r.find(a=>a.key===t)??null;return{criticalKey:t,critical:o,rows:r,changedCount:r.filter(a=>a.changed).length,sharedCount:r.length}}function DC(n,e){if(n===null)return"";const t=Math.round(n*100)/100;return t===0?`= ${e}`.trim():`${t>0?"+":"−"}${Math.abs(t)}${` ${e}`}`}const kh=.6,C_=.55,p_=n=>n.replace(/^\s*```[a-z]*\s*/i,"").replace(/```\s*$/i,"").trim(),Bn=n=>typeof n=="string"?n.trim():typeof n=="number"?String(n):"";function g_(n,e=0){if(typeof n=="number"&&Number.isFinite(n)){const i=n>1?n/100:n;return Math.min(1,Math.max(0,i))}if(typeof n!="string")return e;const t=/-?\d+(?:[.,]\d+)?/.exec(n);if(!t)return e;const s=Number(t[0].replace(",","."));if(!Number.isFinite(s))return e;const r=/%/.test(n)||s>1?s/100:s;return Math.min(1,Math.max(0,r))}const m_=n=>{if(n==null)return null;if(typeof n=="string"||typeof n=="number"){const s=Bn(n);return s?{value:s,confidence:kh}:null}if(typeof n!="object")return null;const e=n,t=Bn(e.value)||Bn(e.text);return t?{value:t,confidence:g_(e.confidence,kh),why:Bn(e.why)||Bn(e.reason)||void 0}:null},E_=n=>{const e=n.fields??n,t={};for(const s of Gs){const r=m_(e[s.key]);r&&(t[s.key]=r)}return{product:Bn(n.product)||Bn(n.productName)||"Untitled product",netWeight:Bn(n.netWeight)||Bn(n.weight),fields:t}},ei=n=>n.toLowerCase().replace(/[^a-z0-9]/g,""),__=n=>Gs.find(e=>ei(e.key)===ei(n)||ei(e.label)===ei(n)),D_=n=>{const e={};let t="",s="";for(const r of n.split(/\r?\n/)){const i=/^\s*([A-Za-z][A-Za-z /&-]*):\s*(.*)$/.exec(r);if(!i)continue;const o=i[2].trim();if(!o)continue;const a=ei(i[1]);if(a==="product"||a==="productname")t=o;else if(a==="netweight"||a==="weight")s=o;else{const l=__(i[1]);l&&(e[l.key]={value:o,confidence:C_})}}return{product:t||"Untitled product",netWeight:s,fields:e}};function gl(n){const e=p_(n),t=e.indexOf("{"),s=e.lastIndexOf("}");if(t>=0&&s>t)try{const r=JSON.parse(e.slice(t,s+1));return E_(r)}catch{}return D_(e)}function y_(n){return Gs.filter(e=>!n.fields[e.key]?.value).map(e=>e.key)}const La=n=>gl(JSON.stringify(n)),w_=La({product:"Oat & hazelnut bar",netWeight:"40 g",fields:{ingredients:{value:"Oat flakes 42%, roasted hazelnuts 12%, honey 10%, rice syrup, sunflower oil, whole milk powder, soya lecithin (emulsifier), sea salt, natural vanilla flavouring.",confidence:.94},allergens:{value:"Oats (gluten), hazelnut, milk, soya",confidence:.91},energy:{value:"452 kcal",confidence:.96},fat:{value:"21 g",confidence:.95},saturates:{value:"3.1 g",confidence:.93},carbohydrate:{value:"54 g",confidence:.94},sugars:{value:"22 g",confidence:.92},fibre:{value:"6.8 g",confidence:.9},protein:{value:"9.4 g",confidence:.91},salt:{value:"0.31 g",confidence:.42,why:"value blurred on the photo"},warnings:{value:"Not suitable for children under 3 years (whole nuts).",confidence:.88},storage:{value:"Store in a cool, dry place.",confidence:.9},bestBefore:{value:"03/2027",confidence:.86}}}),I_=La({product:"Oat & hazelnut bar",fields:{mayContain:{value:"Peanut, sesame",confidence:.82,why:"line blurred on the photo · cross-checked in 0.4 s"},salt:{value:"0.31 g",confidence:.79,why:"value blurred · cross-checked in 0.5 s"}}}),T_=La({product:"Oat & hazelnut bar",netWeight:"40 g",fields:{ingredients:{value:"Oat flakes 42%, roasted hazelnuts 12%, honey 8%, rice syrup, sunflower oil, whole milk powder, soya lecithin (emulsifier), sea salt, natural vanilla flavouring.",confidence:.95},allergens:{value:"Oats (gluten), hazelnut, milk, soya",confidence:.93},mayContain:{value:"Sesame",confidence:.89},energy:{value:"455 kcal",confidence:.96},fat:{value:"21 g",confidence:.95},saturates:{value:"3.2 g",confidence:.94},carbohydrate:{value:"54 g",confidence:.94},sugars:{value:"24 g",confidence:.93},fibre:{value:"6.5 g",confidence:.91},protein:{value:"9.3 g",confidence:.92},salt:{value:"0.42 g",confidence:.94},warnings:{value:"Not suitable for children under 3 years (whole nuts).",confidence:.9},storage:{value:"Store in a cool, dry place.",confidence:.91},bestBefore:{value:"07/2027",confidence:.9}}}),A_=La({product:"Rye crispbread",netWeight:"200 g",fields:{ingredients:{value:"Rye flour 68%, water, sea salt, yeast.",confidence:.95},allergens:{value:"Rye (gluten)",confidence:.94},mayContain:{value:"Sesame",confidence:.9},energy:{value:"340 kcal",confidence:.95},fat:{value:"2.1 g",confidence:.94},saturates:{value:"0.4 g",confidence:.93},carbohydrate:{value:"68 g",confidence:.95},sugars:{value:"1.2 g",confidence:.93},fibre:{value:"14 g",confidence:.92},protein:{value:"8.5 g",confidence:.92},salt:{value:"1.1 g",confidence:.93},warnings:{value:"None.",confidence:.88},storage:{value:"Store dry, away from light.",confidence:.9},bestBefore:{value:"11/2027",confidence:.89}}}),ir=[Uo({local:w_,crossCheck:I_,deviceMs:1800,cloudMs:900,deviceSource:"on_device",id:"demo-bar-v1",productKey:"oat-hazelnut-bar",now:Date.parse("2026-11-18T14:02:00Z")}),Uo({local:T_,deviceMs:1650,cloudMs:0,deviceSource:"on_device",id:"demo-bar-v2",productKey:"oat-hazelnut-bar",now:Date.parse("2026-11-16T09:41:00Z")}),Uo({local:A_,deviceMs:1500,cloudMs:0,deviceSource:"on_device",id:"demo-cracker",productKey:"rye-crispbread",now:Date.parse("2026-11-15T18:20:00Z")})];function v_(n,e){const t=new Set([...n.fields.map(i=>i.key),...e.fields.map(i=>i.key)]),s=[];for(const i of t){const o=Lt(n,i),a=Lt(e,i),l=o?.value??"—",u=a?.value??"—";s.push({key:i,label:o?.label??a?.label??i,before:l,after:u,changed:l.trim()!==u.trim()})}const r=s.filter(i=>i.changed).length;return{changes:s,changedCount:r,unchangedCount:s.length-r}}function b_(n){return[...n].sort((e,t)=>t.readAt-e.readAt)}function R_(n){return{...n,fields:n.fields.map(e=>({...e})),photoStored:!1}}const S_=()=>{};var xh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_={SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml=function(n,e){if(!n)throw P_(e)},P_=function(n){return new Error("Firebase Database ("+O_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},N_=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=n[t++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=n[t++],o=n[t++],a=n[t++],l=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],o=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},nu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const i=n[r],o=r+1<n.length,a=o?n[r+1]:0,l=r+2<n.length,u=l?n[r+2]:0,h=i>>2,d=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,D=u&63;l||(D=64,o||(p=64)),s.push(t[h],t[d],t[p],t[D])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(yC(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):N_(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const i=t[n.charAt(r++)],a=r<n.length?t[n.charAt(r)]:0;++r;const u=r<n.length?t[n.charAt(r)]:64;++r;const d=r<n.length?t[n.charAt(r)]:64;if(++r,i==null||a==null||u==null||d==null)throw new F_;const p=i<<2|a>>4;if(s.push(p),u!==64){const D=a<<4&240|u>>2;if(s.push(D),d!==64){const y=u<<6&192|d;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class F_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const L_=function(n){const e=yC(n);return nu.encodeByteArray(e,!0)},sa=function(n){return L_(n).replace(/\./g,"")},ra=function(n){try{return nu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(n){return wC(void 0,n)}function wC(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!k_(t)||(n[t]=wC(n[t],e[t]));return n}function k_(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_=()=>su().__FIREBASE_DEFAULTS__,M_=()=>{if(typeof process>"u"||typeof xh>"u")return;const n=xh.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},V_=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ra(n[1]);return e&&JSON.parse(e)},ka=()=>{try{return S_()||x_()||M_()||V_()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},IC=n=>ka()?.emulatorHosts?.[n],G_=n=>{const e=IC(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},TC=()=>ka()?.config,AC=n=>ka()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U_(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[sa(JSON.stringify(t)),sa(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function H_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(it())}function $_(){const n=ka()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function j_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function q_(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function J_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function K_(){const n=it();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function z_(){return!$_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function xa(){try{return typeof indexedDB=="object"}catch{return!1}}function W_(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{e(r.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_="FirebaseError";class St extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Y_,Object.setPrototypeOf(this,St.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ls.prototype.create)}}class ls{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Q_(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new St(r,a,s)}}function Q_(n,e){try{let t=0,s="";for(;t<n.length;){const r=n.indexOf("{$",t);if(r===-1){s+=n.substring(t);break}const i=n.indexOf("}",r+2);if(i===-1){s+=n.substring(t);break}const o=n.substring(r+2,i),a=e[o];s+=n.substring(t,r)+(a!=null?String(a):`<${o}?>`),t=i+1}return s}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mh(n){return JSON.parse(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_=function(n){let e={},t={},s={},r="";try{const i=n.split(".");e=Mh(ra(i[0])||""),t=Mh(ra(i[1])||""),r=i[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:r}},Z_=function(n){const e=X_(n).claims;return typeof e=="object"&&e.hasOwnProperty("iat")?e.iat:null};function eD(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Qn(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const i=n[r],o=e[r];if(Vh(i)&&Vh(o)){if(!Qn(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function Vh(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function tD(n,e){const t=new nD(n,e);return t.subscribe.bind(t)}class nD{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let r;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");sD(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:s},r.next===void 0&&(r.next=Mc),r.error===void 0&&(r.error=Mc),r.complete===void 0&&(r.complete=Mc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sD(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Mc(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rD=1e3,iD=2,oD=14400*1e3,aD=.5;function ru(n,e=rD,t=iD){const s=e*Math.pow(t,n),r=Math.round(aD*s*(Math.random()-.5)*2);return Math.min(oD,s+r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function vC(n){return(await fetch(n,{credentials:"include"})).ok}class Rt{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cD{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new gi;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(uD(e))try{this.getOrInitializeService({instanceIdentifier:Es})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Es){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Es){return this.instances.has(e)}getOptions(e=Es){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&e(i,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:lD(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Es){return this.component?this.component.multipleInstances?e:Es:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lD(n){return n===Es?void 0:n}function uD(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BD{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new cD(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(he||(he={}));const hD={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},fD=he.INFO,dD={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},CD=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=dD[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ir{constructor(e){this.name=e,this._logLevel=fD,this._logHandler=CD,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hD[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const pD=(n,e)=>e.some(t=>n instanceof t);let Gh,Uh;function gD(){return Gh||(Gh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mD(){return Uh||(Uh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bC=new WeakMap,El=new WeakMap,RC=new WeakMap,Vc=new WeakMap,iu=new WeakMap;function ED(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t($n(n.result)),r()},o=()=>{s(n.error),r()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&bC.set(t,n)}).catch(()=>{}),iu.set(e,n),e}function _D(n){if(El.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});El.set(n,e)}let _l={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return El.get(n);if(e==="objectStoreNames")return n.objectStoreNames||RC.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return $n(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function DD(n){_l=n(_l)}function yD(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Gc(this),e,...t);return RC.set(s,e.sort?e.sort():[e]),$n(s)}:mD().includes(n)?function(...e){return n.apply(Gc(this),e),$n(bC.get(this))}:function(...e){return $n(n.apply(Gc(this),e))}}function wD(n){return typeof n=="function"?yD(n):(n instanceof IDBTransaction&&_D(n),pD(n,gD())?new Proxy(n,_l):n)}function $n(n){if(n instanceof IDBRequest)return ED(n);if(Vc.has(n))return Vc.get(n);const e=wD(n);return e!==n&&(Vc.set(n,e),iu.set(e,n)),e}const Gc=n=>iu.get(n);function SC(n,e,{blocked:t,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(n,e),a=$n(o);return s&&o.addEventListener("upgradeneeded",l=>{s($n(o.result),l.oldVersion,l.newVersion,$n(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const ID=["get","getKey","getAll","getAllKeys","count"],TD=["put","add","delete","clear"],Uc=new Map;function Hh(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Uc.get(e))return Uc.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=TD.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||ID.includes(t)))return;const i=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let u=l.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),r&&l.done]))[0]};return Uc.set(e,i),i}DD(n=>({...n,get:(e,t,s)=>Hh(e,t)||n.get(e,t,s),has:(e,t)=>!!Hh(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AD{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(vD(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function vD(n){return n.getComponent()?.type==="VERSION"}const Dl="@firebase/app",$h="0.16.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn=new Ir("@firebase/app"),bD="@firebase/app-compat",RD="@firebase/analytics-compat",SD="@firebase/analytics",OD="@firebase/app-check-compat",PD="@firebase/app-check",ND="@firebase/auth",FD="@firebase/auth-compat",LD="@firebase/crashlytics",kD="@firebase/database",xD="@firebase/data-connect",MD="@firebase/database-compat",VD="@firebase/functions",GD="@firebase/functions-compat",UD="@firebase/installations",HD="@firebase/installations-compat",$D="@firebase/messaging",jD="@firebase/messaging-compat",qD="@firebase/performance",JD="@firebase/performance-compat",KD="@firebase/remote-config",zD="@firebase/remote-config-compat",WD="@firebase/storage",YD="@firebase/storage-compat",QD="@firebase/firestore",XD="@firebase/ai",ZD="@firebase/firestore-compat",ey="firebase",ty="13.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl="[DEFAULT]",ny={[Dl]:"fire-core",[bD]:"fire-core-compat",[SD]:"fire-analytics",[RD]:"fire-analytics-compat",[PD]:"fire-app-check",[OD]:"fire-app-check-compat",[ND]:"fire-auth",[FD]:"fire-auth-compat",[LD]:"fire-cls",[kD]:"fire-rtdb",[xD]:"fire-data-connect",[MD]:"fire-rtdb-compat",[VD]:"fire-fn",[GD]:"fire-fn-compat",[UD]:"fire-iid",[HD]:"fire-iid-compat",[$D]:"fire-fcm",[jD]:"fire-fcm-compat",[qD]:"fire-perf",[JD]:"fire-perf-compat",[KD]:"fire-rc",[zD]:"fire-rc-compat",[WD]:"fire-gcs",[YD]:"fire-gcs-compat",[QD]:"fire-fst",[ZD]:"fire-fst-compat",[XD]:"fire-vertex","fire-js":"fire-js",[ey]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia=new Map,sy=new Map,wl=new Map;function jh(n,e){try{n.container.addComponent(e)}catch(t){rn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function kt(n){const e=n.name;if(wl.has(e))return rn.debug(`There were multiple attempts to register component ${e}.`),!1;wl.set(e,n);for(const t of ia.values())jh(t,n);for(const t of sy.values())jh(t,n);return!0}function An(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ft(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},hn=new ls("app","Firebase",ry);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Rt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn=ty;function OC(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:yl,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw hn.create("bad-app-name",{appName:String(r)});if(t||(t=TC()),!t)throw hn.create("no-options");const i=ia.get(r);if(i)if(Qn(t,i.options)){if(Qn(s,i.config))return i;throw hn.create("duplicate-app",{appName:r,mismatchedParam:"config",oldValue:JSON.stringify(i.config),newValue:JSON.stringify(s)})}else throw hn.create("duplicate-app",{appName:r,mismatchedParam:"options",oldValue:JSON.stringify(i.options),newValue:JSON.stringify(t)});const o=new BD(r);for(const l of wl.values())o.addComponent(l);const a=new iy(t,s,o);return ia.set(r,a),a}function $i(n=yl){const e=ia.get(n);if(!e&&n===yl&&TC())return OC();if(!e)throw hn.create("no-app",{appName:n});return e}function Bt(n,e,t){let s=ny[n]??n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const o=[`Unable to register library "${s}" with version "${e}":`];r&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),rn.warn(o.join(" "));return}kt(new Rt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy="firebase-heartbeat-database",ay=1,mi="firebase-heartbeat-store";let Hc=null;function PC(){return Hc||(Hc=SC(oy,ay,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(mi)}catch(t){console.warn(t)}}}}).catch(n=>{throw hn.create("idb-open",{originalErrorMessage:n.message})})),Hc}async function cy(n){try{const t=(await PC()).transaction(mi),s=await t.objectStore(mi).get(NC(n));return await t.done,s}catch(e){if(e instanceof St)rn.warn(e.message);else{const t=hn.create("idb-get",{originalErrorMessage:e?.message});rn.warn(t.message)}}}async function qh(n,e){try{const s=(await PC()).transaction(mi,"readwrite");await s.objectStore(mi).put(e,NC(n)),await s.done}catch(t){if(t instanceof St)rn.warn(t.message);else{const s=hn.create("idb-set",{originalErrorMessage:t?.message});rn.warn(s.message)}}}function NC(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly=1024,uy=30;class By{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new fy(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Jh();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats.length>uy){const r=dy(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(r,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){rn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Jh(),{heartbeatsToSend:t,unsentEntries:s}=hy(this._heartbeatsCache.heartbeats),r=sa(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return rn.warn(e),""}}}function Jh(){return new Date().toISOString().substring(0,10)}function hy(n,e=ly){const t=[];let s=n.slice();for(const r of n){const i=t.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Kh(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),Kh(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class fy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xa()?W_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await cy(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return qh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return qh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Kh(n){return sa(JSON.stringify({version:2,heartbeats:n})).length}function dy(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cy(n){kt(new Rt("platform-logger",e=>new AD(e),"PRIVATE")),kt(new Rt("heartbeat",e=>new By(e),"PRIVATE")),Bt(Dl,$h,n),Bt(Dl,$h,"esm2020"),Bt("fire-js","")}/**
 * @license
 * Copyright 2026 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il="firebase-js-sdk-policy",py=["https://www.googletagmanager.com/gtag/js","https://apis.google.com/js/api.js","https://www.google.com/recaptcha/api.js","https://www.google.com/recaptcha/enterprise.js"];let Do,FC=!1;function LC(n){if(!py.some(t=>n.startsWith(t)&&(n.length===t.length||n.charAt(t.length)==="?")))throw new TypeError(`Firebase: Refusing to load untrusted script URL: ${n}`);return n}function gy(){if(Do===void 0){Do=null;const n=typeof window<"u"?window.trustedTypes:void 0;if(n?.createPolicy)try{Do=n.createPolicy(Il,{createScriptURL:LC})}catch{FC=!0}}return Do}function kC(n,e){LC(e);const t=gy();if(t){n.src=t.createScriptURL(e);return}try{n.src=e}catch(s){throw FC&&rn.error(`Unable to load ${e} because this page requires Trusted Types for scripts but does not allow the "${Il}" Trusted Types policy. To fix this, add "${Il}" to the trusted-types directive of the page's Content-Security-Policy.`),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Cy("");var my="firebase",Ey="13.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Bt(my,Ey,"app");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl=new Map,xC={activated:!1,tokenObservers:[]},_y={initialized:!1,enabled:!1};function Ue(n){return Tl.get(n)||{...xC}}function Dy(n,e){return Tl.set(n,e),Tl.get(n)}function Ma(){return _y}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MC="https://content-firebaseappcheck.googleapis.com/v1",yy="exchangeRecaptchaV3Token",wy="exchangeDebugToken",zh={RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:960*1e3},Iy=1440*60*1e3;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e,t,s,r,i){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=s,this.lowerBound=r,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=r,r>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new gi,this.pending.promise.catch(t=>{}),await Ay(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new gi,this.pending.promise.catch(t=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(t){this.retryPolicy(t)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const t=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),t}}}function Ay(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.","initial-throttle":"{$httpStatus} error. Attempts allowed again after {$time}",throttled:"Requests throttled due to previous {$httpStatus} error. Attempts allowed again after {$time}"},pt=new ls("appCheck","AppCheck",vy);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wh(n=!1){return n?self.grecaptcha?.enterprise:self.grecaptcha}function ou(n){if(!Ue(n).activated)throw pt.create("use-before-activation",{appName:n.name})}function VC(n){const e=Math.round(n/1e3),t=Math.floor(e/(3600*24)),s=Math.floor((e-t*3600*24)/3600),r=Math.floor((e-t*3600*24-s*3600)/60),i=e-t*3600*24-s*3600-r*60;let o="";return t&&(o+=yo(t)+"d:"),s&&(o+=yo(s)+"h:"),o+=yo(r)+"m:"+yo(i)+"s",o}function yo(n){return n===0?"00":n>=10?n.toString():"0"+n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function au({url:n,body:e},t){const s={"Content-Type":"application/json"},r=t.getImmediate({optional:!0});if(r){const d=await r.getHeartbeatsHeader();d&&(s["X-Firebase-Client"]=d)}const i={method:"POST",body:JSON.stringify(e),headers:s};let o;try{o=await fetch(n,i)}catch(d){throw pt.create("fetch-network-error",{originalErrorMessage:d?.message})}if(o.status!==200)throw pt.create("fetch-status-error",{httpStatus:o.status});let a;try{a=await o.json()}catch(d){throw pt.create("fetch-parse-error",{originalErrorMessage:d?.message})}const l=a.ttl.match(/^([\d.]+)(s)$/);if(!l||!l[2]||isNaN(Number(l[1])))throw pt.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${a.ttl}`});const u=Number(l[1])*1e3,h=Date.now();return{token:a.token,expireTimeMillis:h+u,issuedAtTimeMillis:h}}function by(n,e){const{projectId:t,appId:s,apiKey:r}=n.options;return{url:`${MC}/projects/${t}/apps/${s}:${yy}?key=${r}`,body:{recaptcha_v3_token:e}}}function GC(n,e){const{projectId:t,appId:s,apiKey:r}=n.options;return{url:`${MC}/projects/${t}/apps/${s}:${wy}?key=${r}`,body:{debug_token:e}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry="firebase-app-check-database",Sy=1,Ei="firebase-app-check-store",UC="debug-token";let wo=null;function HC(){return wo||(wo=new Promise((n,e)=>{try{const t=indexedDB.open(Ry,Sy);t.onsuccess=s=>{n(s.target.result)},t.onerror=s=>{e(pt.create("storage-open",{originalErrorMessage:s.target.error?.message}))},t.onupgradeneeded=s=>{const r=s.target.result;switch(s.oldVersion){case 0:r.createObjectStore(Ei,{keyPath:"compositeKey"})}}}catch(t){e(pt.create("storage-open",{originalErrorMessage:t?.message}))}}),wo)}function Oy(n){return jC(qC(n))}function Py(n,e){return $C(qC(n),e)}function Ny(n){return $C(UC,n)}function Fy(){return jC(UC)}async function $C(n,e){const s=(await HC()).transaction(Ei,"readwrite"),i=s.objectStore(Ei).put({compositeKey:n,value:e});return new Promise((o,a)=>{i.onsuccess=l=>{o()},s.onerror=l=>{a(pt.create("storage-set",{originalErrorMessage:l.target.error?.message}))}})}async function jC(n){const t=(await HC()).transaction(Ei,"readonly"),r=t.objectStore(Ei).get(n);return new Promise((i,o)=>{r.onsuccess=a=>{const l=a.target.result;i(l?l.value:void 0)},t.onerror=a=>{o(pt.create("storage-get",{originalErrorMessage:a.target.error?.message}))}})}function qC(n){return`${n.options.appId}-${n.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un=new Ir("@firebase/app-check");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ly(n){if(xa()){let e;try{e=await Oy(n)}catch(t){Un.warn(`Failed to read token from IndexedDB. Error: ${t}`)}return e}}function $c(n,e){return xa()?Py(n,e).catch(t=>{Un.warn(`Failed to write token to IndexedDB. Error: ${t}`)}):Promise.resolve()}async function ky(n){let e;try{e=await Fy()}catch{}if(e)return e;{const t=crypto.randomUUID();let s=`To use this token for app debugging, register it with your project.

Firebase App Check debug token: ${t}

`;const r=n?.options.appId,i=n?.options.projectId;return i&&r?s+=`You can do so in the Firebase Console:
https://console.firebase.google.com/project/${i}/appcheck/apps?selectedAppId=${r}

Or using the Firebase CLI:
firebase appcheck:debugtokens:create ${t} --project ${i} --app ${r}

`:s+=`You will need to add it to your app's App Check settings in the Firebase Console for it to work.

`,s+=`Note: To keep your project secure, please revoke and delete this token using the
Firebase Console or the CLI (\`firebase appcheck:debugtokens:delete\`) when you finish debugging.

Warning: This debug token is a secret and should not be shared or uploaded to source code.

Debug Token Guide: https://firebase.google.com/docs/app-check/web/debug-provider
Firebase CLI install instructions: https://firebase.google.com/docs/cli
`,console.log(s),Ny(t).catch(o=>Un.warn(`Failed to persist debug token to IndexedDB. Error: ${o}`)),t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cu(){return Ma().enabled}async function lu(){const n=Ma();if(n.enabled&&n.token)return n.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}function xy(n){const e=su(),t=Ma();if(t.initialized=!0,typeof e.FIREBASE_APPCHECK_DEBUG_TOKEN!="string"&&e.FIREBASE_APPCHECK_DEBUG_TOKEN!==!0)return;t.enabled=!0;const s=new gi;t.token=s,typeof e.FIREBASE_APPCHECK_DEBUG_TOKEN=="string"?s.resolve(e.FIREBASE_APPCHECK_DEBUG_TOKEN):s.resolve(ky(n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const My={error:"UNKNOWN_ERROR"};function Vy(n){return nu.encodeString(JSON.stringify(n),!1)}async function Al(n,e=!1,t=!1){const s=n.app;ou(s);const r=Ue(s);let i=r.token,o;if(i&&!or(i)&&(r.token=void 0,i=void 0),!i){const u=await r.cachedTokenPromise;u&&(or(u)?i=u:await $c(s,void 0))}if(!e&&i&&or(i))return{token:i.token};let a=!1;if(cu())try{const u=await lu();r.exchangeTokenPromise||(r.exchangeTokenPromise=au(GC(s,u),n.heartbeatServiceProvider).finally(()=>{r.exchangeTokenPromise=void 0}),a=!0);const h=await r.exchangeTokenPromise;return await $c(s,h),r.token=h,{token:h.token}}catch(u){return u.code==="appCheck/throttled"||u.code==="appCheck/initial-throttle"?Un.warn(u.message):t&&Un.error(u),jc(u)}try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),a=!0),i=await Ue(s).exchangeTokenPromise}catch(u){u.code==="appCheck/throttled"||u.code==="appCheck/initial-throttle"?Un.warn(u.message):t&&Un.error(u),o=u}let l;return i?o?or(i)?l={token:i.token,internalError:o}:l=jc(o):(l={token:i.token},r.token=i,await $c(s,i)):l=jc(o),a&&zC(s,l),l}async function Gy(n){const e=n.app;ou(e);const{provider:t}=Ue(e);if(cu()){const s=await lu(),r=GC(e,s);r.body.limited_use=!0;const{token:i}=await au(r,n.heartbeatServiceProvider);return{token:i}}else{const{token:s}=await t.getToken(!0);return{token:s}}}function JC(n,e,t,s){const{app:r}=n,i=Ue(r),o={next:t,error:s,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&or(i.token)){const a=i.token;Promise.resolve().then(()=>{t({token:a.token}),Yh(n)}).catch(()=>{})}i.cachedTokenPromise.then(()=>Yh(n))}function KC(n,e){const t=Ue(n),s=t.tokenObservers.filter(r=>r.next!==e);s.length===0&&t.tokenRefresher&&t.tokenRefresher.isRunning()&&t.tokenRefresher.stop(),t.tokenObservers=s}function Yh(n){const{app:e}=n,t=Ue(e);let s=t.tokenRefresher;s||(s=Uy(n),t.tokenRefresher=s),!s.isRunning()&&t.isTokenAutoRefreshEnabled&&s.start()}function Uy(n){const{app:e}=n;return new Ty(async()=>{const t=Ue(e);let s;if(t.token?s=await Al(n,!0):s=await Al(n),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const t=Ue(e);if(t.token){let s=t.token.issuedAtTimeMillis+(t.token.expireTimeMillis-t.token.issuedAtTimeMillis)*.5+3e5;const r=t.token.expireTimeMillis-300*1e3;return s=Math.min(s,r),Math.max(0,s-Date.now())}else return 0},zh.RETRIAL_MIN_WAIT,zh.RETRIAL_MAX_WAIT)}function zC(n,e){const t=Ue(n).tokenObservers;for(const s of t)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function or(n){return n.expireTimeMillis-Date.now()>0}function jc(n){return{token:Vy(My),error:n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){const{tokenObservers:e}=Ue(this.app);for(const t of e)KC(this.app,t.next);return Promise.resolve()}}function $y(n,e){return new Hy(n,e)}function jy(n){return{getToken:e=>Al(n,e),getLimitedUseToken:()=>Gy(n),addTokenListener:e=>JC(n,"INTERNAL",e),removeTokenListener:e=>KC(n.app,e)}}const qy="@firebase/app-check",Jy="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky="https://www.google.com/recaptcha/api.js";function zy(n,e){const t=new gi,s=Ue(n);s.reCAPTCHAState={initialized:t};const r=Wy(n),i=Wh(!1);return i?Qh(n,e,i,r,t):Xy(()=>{const o=Wh(!1);if(!o)throw new Error("no recaptcha");Qh(n,e,o,r,t)}),t.promise}function Qh(n,e,t,s,r){t.ready(()=>{Qy(n,e,t,s),r.resolve(t)})}function Wy(n){const e=`fire_app_check_${n.name}`,t=document.createElement("div");return t.id=e,t.style.display="none",document.body.appendChild(t),e}async function Yy(n){ou(n);const t=await Ue(n).reCAPTCHAState.initialized.promise;return new Promise((s,r)=>{const i=Ue(n).reCAPTCHAState;t.ready(()=>{s(t.execute(i.widgetId,{action:"fire_app_check"}))})})}function Qy(n,e,t,s){const r=t.render(s,{sitekey:e,size:"invisible",callback:()=>{Ue(n).reCAPTCHAState.succeeded=!0},"error-callback":()=>{Ue(n).reCAPTCHAState.succeeded=!1}}),i=Ue(n);i.reCAPTCHAState={...i.reCAPTCHAState,widgetId:r}}function Xy(n){const e=document.createElement("script");kC(e,Ky),e.onload=n,document.head.appendChild(e)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(e=!1){ew(this._throttleData);const t=await Yy(this._app).catch(r=>{throw pt.create("recaptcha-error")});if(!Ue(this._app).reCAPTCHAState?.succeeded)throw pt.create("recaptcha-error");let s;try{const r=by(this._app,t);e&&(r.body.limited_use=!0),s=await au(r,this._heartbeatServiceProvider)}catch(r){throw r.code?.includes("fetch-status-error")?(this._throttleData=Zy(Number(r.customData?.httpStatus),this._throttleData),pt.create("initial-throttle",{time:VC(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):r}return this._throttleData=null,s}initialize(e){this._app=e,this._heartbeatServiceProvider=An(e,"heartbeat"),zy(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof uu?this._siteKey===e._siteKey:!1}}class Bu{constructor(e){this._customProviderOptions=e}async getToken(){const e=await this._customProviderOptions.getToken(),t=Z_(e.token),s=t!==null&&t<Date.now()&&t>0?t*1e3:Date.now();return{...e,issuedAtTimeMillis:s}}initialize(e){this._app=e}isEqual(e){return e instanceof Bu?this._customProviderOptions.getToken.toString()===e._customProviderOptions.getToken.toString():!1}}function Zy(n,e){if(n===404||n===403)return{backoffCount:1,allowRequestsAfter:Date.now()+Iy,httpStatus:n};{const t=e?e.backoffCount:0,s=ru(t,1e3,2);return{backoffCount:t+1,allowRequestsAfter:Date.now()+s,httpStatus:n}}}function ew(n){if(n&&Date.now()-n.allowRequestsAfter<=0)throw pt.create("throttled",{time:VC(n.allowRequestsAfter-Date.now()),httpStatus:n.httpStatus})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(n=$i(),e){n=Fe(n);const t=An(n,"app-check");if(Ma().initialized||xy(n),cu()&&lu().then(r=>{console.log(`Firebase App Check debug token: ${r}`)}),t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(i&&!!i.isTokenAutoRefreshEnabled==!!e.isTokenAutoRefreshEnabled&&i.provider?.isEqual(e.provider))return r;throw pt.create("already-initialized",{appName:n.name})}const s=t.initialize({options:e});return tw(n,e.provider,e.isTokenAutoRefreshEnabled),Ue(n).isTokenAutoRefreshEnabled&&JC(s,"INTERNAL",()=>{}),s}function tw(n,e,t=!1){const s=Dy(n,{...xC});s.activated=!0,s.provider=e,s.cachedTokenPromise=Ly(n).then(r=>(r&&or(r)&&(s.token=r,zC(n,{token:r.token})),r)),s.isTokenAutoRefreshEnabled=t&&n.automaticDataCollectionEnabled,!n.automaticDataCollectionEnabled&&t&&Un.warn("`isTokenAutoRefreshEnabled` is true but `automaticDataCollectionEnabled` was set to false during `initializeApp()`. This blocks automatic token refresh."),s.provider.initialize(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nw="app-check",Zh="app-check-internal";function sw(){kt(new Rt(nw,n=>{const e=n.getProvider("app").getImmediate(),t=n.getProvider("heartbeat");return $y(e,t)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((n,e,t)=>{n.getProvider(Zh).initialize()})),kt(new Rt(Zh,n=>{const e=n.getProvider("app-check").getImmediate();return jy(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Bt(qy,Jy)}sw();function WC(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rw=WC,YC=new ls("auth","Firebase",WC());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa=new Ir("@firebase/auth");function Ho(n,...e){oa.logLevel<=he.WARN&&oa.warn(`Auth (${Xn}): ${n}`,...e)}function $o(n,...e){oa.logLevel<=he.ERROR&&oa.error(`Auth (${Xn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(n,...e){throw fu(n,...e)}function Zt(n,...e){return fu(n,...e)}function hu(n,e,t){const s={...rw(),[e]:t};return new ls("auth","Firebase",s).create(e,{appName:n.name})}function jn(n){return hu(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function fu(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return YC.create(n,...e)}function ie(n,e,...t){if(!n)throw fu(e,...t)}function fn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw $o(e),new Error(e)}function yn(n,e){n||fn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(){return typeof self<"u"&&self.location?.href||""}function iw(){return ef()==="http:"||ef()==="https:"}function ef(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ow(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(iw()||q_()||"connection"in navigator)?navigator.onLine:!0}function aw(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,t){this.shortDelay=e,this.longDelay=t,yn(t>e,"Short delay should be less than long delay!"),this.isMobile=H_()||J_()}get(){return ow()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(n,e){yn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],uw=new ji(3e4,6e4);function Va(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Tr(n,e,t,s,r={}){return XC(n,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Ui({...o,key:n.config.apiKey}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const u={method:e,headers:l,...i};return j_()||(u.referrerPolicy="strict-origin-when-cross-origin"),n.emulatorConfig&&Hi(n.emulatorConfig.host)&&(u.credentials="include"),QC.fetch()(await ep(n,n.config.apiHost,t,a),u)})}async function XC(n,e,t){n._canInitEmulator=!1;const s={...cw,...e};try{const r=new Bw(n),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Io(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Io(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Io(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Io(n,"user-disabled",o);const h=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw hu(n,h,u);Dn(n,h)}}catch(r){if(r instanceof St)throw r;Dn(n,"network-request-failed",{message:String(r)})}}async function ZC(n,e,t,s,r={}){const i=await Tr(n,e,t,s,r);return"mfaPendingCredential"in i&&Dn(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function ep(n,e,t,s){const r=`${e}${t}?${s}`,i=n,o=i.config.emulator?du(n.config,r):`${n.config.apiScheme}://${r}`;return lw.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class Bw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Zt(this.auth,"network-request-failed")),uw.get())})}}function Io(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const r=Zt(n,e,s);return r.customData._tokenResponse=t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hw(n,e){return Tr(n,"POST","/v1/accounts:delete",e)}async function aa(n,e){return Tr(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function fw(n,e=!1){const t=Fe(n),s=await t.getIdToken(e),r=Cu(s);ie(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i?.sign_in_provider;return{claims:r,token:s,authTime:oi(qc(r.auth_time)),issuedAtTime:oi(qc(r.iat)),expirationTime:oi(qc(r.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function qc(n){return Number(n)*1e3}function Cu(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return $o("JWT malformed, contained fewer than 3 sections"),null;try{const r=ra(t);return r?JSON.parse(r):($o("Failed to decode base64 JWT payload"),null)}catch(r){return $o("Caught error parsing JWT payload as JSON",r?.toString()),null}}function tf(n){const e=Cu(n);return ie(e,"internal-error"),ie(typeof e.exp<"u","internal-error"),ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _i(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw tp(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function tp(n){return n instanceof St?n.code==="auth/user-disabled"||n.code==="auth/user-token-expired":!1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=oi(this.lastLoginAt),this.creationTime=oi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ca(n){const e=n.auth,t=await n.getIdToken(),s=await _i(n,aa(e,{idToken:t}));ie(s?.users.length,e,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const i=r.providerUserInfo?.length?np(r.providerUserInfo):[],o=pw(n.providerData,i),a=n.isAnonymous,l=!(n.email&&r.passwordHash)&&!o?.length,u=a?l:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new bl(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function Cw(n){const e=Fe(n);await ca(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function pw(n,e){return[...n.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function np(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gw(n,e){const t=await XC(n,{},async()=>{const s=Ui({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=n.config,o=await ep(n,r,"/v1/token",`key=${i}`),a=await n._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:s};return n.emulatorConfig&&Hi(n.emulatorConfig.host)&&(l.credentials="include"),QC.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function mw(n,e){return Tr(n,"POST","/v2/accounts:revokeToken",Va(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e5}updateFromServerResponse(e){ie(e.idToken,"internal-error"),ie(typeof e.idToken<"u","internal-error"),ie(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):tf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ie(e.length!==0,"internal-error");const t=tf(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:r,expiresIn:i}=await gw(e,t);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:r,expirationTime:i}=t,o=new lr;return s&&(ie(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(ie(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(ie(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new lr,this.toJSON())}_performRefresh(){return fn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(n,e){ie(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ht{constructor({uid:e,auth:t,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new dw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new bl(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await _i(this,this.stsTokenManager.getToken(this.auth,e));return ie(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return fw(this,e)}reload(){return Cw(this)}_assign(e){this!==e&&(ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ht({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await ca(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ft(this.auth.app))return Promise.reject(jn(this.auth));const e=await this.getIdToken();return await _i(this,hw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,r=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,a=t.tenantId??void 0,l=t._redirectEventId??void 0,u=t.createdAt??void 0,h=t.lastLoginAt??void 0,{uid:d,emailVerified:p,isAnonymous:D,providerData:y,stsTokenManager:R}=t;ie(d&&R,e,"internal-error");const F=lr.fromJSON(this.name,R);ie(typeof d=="string",e,"internal-error"),Fn(s,e.name),Fn(r,e.name),ie(typeof p=="boolean",e,"internal-error"),ie(typeof D=="boolean",e,"internal-error"),Fn(i,e.name),Fn(o,e.name),Fn(a,e.name),Fn(l,e.name),Fn(u,e.name),Fn(h,e.name);const G=new Ht({uid:d,auth:e,email:r,emailVerified:p,displayName:s,isAnonymous:D,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:F,createdAt:u,lastLoginAt:h});return y&&Array.isArray(y)&&(G.providerData=y.map(K=>({...K}))),l&&(G._redirectEventId=l),G}static async _fromIdTokenResponse(e,t,s=!1){const r=new lr;r.updateFromServerResponse(t);const i=new Ht({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await ca(i),i}static async _fromGetAccountInfoResponse(e,t,s){const r=t.users[0];ie(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?np(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!i?.length,a=new lr;a.updateFromIdToken(s);const l=new Ht({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new bl(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!i?.length};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nf=new Map;function dn(n){yn(n instanceof Function,"Expected a class definition");let e=nf.get(n);return e?(yn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,nf.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}sp.type="NONE";const sf=sp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(n,e,t){return`firebase:${n}:${e}:${t}`}class bs{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=jo(this.userKey,r.apiKey,i),this.fullPersistenceKey=jo("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t);try{this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}catch{}}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await aa(this.auth,{idToken:e}).catch(()=>{});return t?Ht._fromGetAccountInfoResponse(this.auth,t,e):null}return Ht._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){try{this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}catch{}}static async create(e,t,s="authUser"){if(!t.length)return new bs(dn(sf),e,s);const r=jo(s,e.config.apiKey,e.name);let i=null,o=null;const a=new Set;for(const p of t){let D=null;try{D=await p._get(r)}catch{a.add(p);continue}try{if(D){let y;if(typeof D=="string"){const R=await aa(e,{idToken:D}).catch(()=>{});if(!R)break;y=await Ht._fromGetAccountInfoResponse(e,R,D)}else y=Ht._fromJSON(e,D);i=y,o=p;break}}catch{}}const l=(await Promise.all(t.map(async p=>{try{if(await p._isAvailable())return p;p._lastProbeTimedOut&&a.add(p)}catch{return}}))).filter(p=>p);let u=l[0]||dn(sf),h=null;o&&i&&(o!==u&&(h=i),u=o);const d=l.filter(p=>p._shouldAllowMigration);return!u._shouldAllowMigration||!d.length?new bs(u,e,s):(u=d[0],h&&await u._set(r,h.toJSON()),await Promise.all(t.map(async p=>{if(p!==u&&!a.has(p))try{await p._remove(r)}catch{}})),new bs(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rf(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ap(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(rp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lp(e))return"Blackberry";if(up(e))return"Webos";if(ip(e))return"Safari";if((e.includes("chrome/")||op(e))&&!e.includes("edge/"))return"Chrome";if(cp(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if(s?.length===2)return s[1]}return"Other"}function rp(n=it()){return/firefox\//i.test(n)}function ip(n=it()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function op(n=it()){return/crios\//i.test(n)}function ap(n=it()){return/iemobile/i.test(n)}function cp(n=it()){return/android/i.test(n)}function lp(n=it()){return/blackberry/i.test(n)}function up(n=it()){return/webos/i.test(n)}function pu(n=it()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Ew(n=it()){return pu(n)&&!!window.navigator?.standalone}function _w(){return K_()&&document.documentMode===10}function Bp(n=it()){return pu(n)||cp(n)||up(n)||lp(n)||/windows phone/i.test(n)||ap(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(n,e=[]){let t;switch(n){case"Browser":t=rf(it());break;case"Worker":t=`${rf(it())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Xn}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});s.onAbort=t,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yw(n,e={}){return Tr(n,"GET","/v2/passwordPolicy",Va(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ww=6;class Iw{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??ww,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(e,t,s,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new of(this),this.idTokenSubscription=new of(this),this.beforeStateQueue=new Dw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=YC,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=dn(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted){try{this.persistenceManager=await bs.create(this,e)}catch(s){Ho(`Failed to initialize persistence: ${s}`),this.persistenceManager=await bs.create(this,[])}finally{this._resolvePersistenceManagerAvailable?.()}if(!this._deleted){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}try{await this.initializeCurrentUser(t)}catch(s){Ho(`Failed to initialize current user: ${s}`)}this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await aa(this,{idToken:e}),s=await Ht._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Ft(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=s?._redirectEventId,a=await this.tryRedirectSignIn(e);(!i||i===o)&&a?.user&&(s=a.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(i){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ca(e)}catch(t){if(tp(t))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=aw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ft(this.app))return Promise.reject(jn(this));const t=e?Fe(e):null;return t&&ie(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ft(this.app)?Promise.reject(jn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ft(this.app)?Promise.reject(jn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(dn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await yw(this),t=new Iw(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ls("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await mw(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&dn(e)||this._popupRedirectResolver;ie(t,this,"argument-error"),this.redirectPersistenceManager=await bs.create(this,[dn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ie(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}).catch(l=>{if(!o)if(typeof t!="function"&&t.error)t.error(l);else if(s)s(l);else throw l}),typeof t=="function"){const l=e.addObserver(t,s,r);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){if(this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,this.persistenceManager)try{e?await this.persistenceManager.setCurrentUser(e):await this.persistenceManager.removeCurrentUser()}catch(t){const s=t?.message||String(t),r=hu(this,"internal-error",`An internal AuthError has occurred: ${s}`);throw r.customData={originalError:t},r}}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(Ft(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Ho(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Ga(n){return Fe(n)}class of{constructor(e){this.auth=e,this.observer=null,this.addObserver=tD(t=>this.observer=t)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Aw(n){gu=n}function vw(n){return gu.loadJS(n)}function bw(){return gu.gapiScript}function Rw(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sw(n,e){const t=An(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(Qn(i,e??{}))return r;Dn(r,"already-initialized")}return t.initialize({options:e})}function Ow(n,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(dn);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e?.popupRedirectResolver)}function Pw(n,e,t){const s=Ga(n);ie(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=fp(e),{host:o,port:a}=Nw(e),l=a===null?"":`:${a}`,u={url:`${i}//${o}${l}/`},h=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){ie(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ie(Qn(u,s.config.emulator)&&Qn(h,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=u,s.emulatorConfig=h,s.settings.appVerificationDisabledForTesting=!0,Hi(o)?vC(`${i}//${o}${l}`):Fw()}function fp(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Nw(n){const e=fp(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:af(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:af(o)}}}function af(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Fw(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return fn("not implemented")}_getIdTokenResponse(e){return fn("not implemented")}_linkToIdToken(e,t){return fn("not implemented")}_getReauthenticationResolver(e){return fn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ur(n,e){return ZC(n,"POST","/v1/accounts:signInWithIdp",Va(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw="http://localhost";class Os extends dp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Os(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Dn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...i}=t;if(!s||!r)return null;const o=new Os(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return ur(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,ur(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ur(e,t)}buildRequest(){const e={requestUri:Lw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ui(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi extends Cp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends qi{constructor(){super("facebook.com")}static credential(e){return Os._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kn.credential(e.oauthAccessToken)}catch{return null}}}kn.FACEBOOK_SIGN_IN_METHOD="facebook.com";kn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends qi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Os._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return xn.credential(t,s)}catch{return null}}}xn.GOOGLE_SIGN_IN_METHOD="google.com";xn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends qi{constructor(){super("github.com")}static credential(e){return Os._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mn.credential(e.oauthAccessToken)}catch{return null}}}Mn.GITHUB_SIGN_IN_METHOD="github.com";Mn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends qi{constructor(){super("twitter.com")}static credential(e,t){return Os._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Vn.credential(t,s)}catch{return null}}}Vn.TWITTER_SIGN_IN_METHOD="twitter.com";Vn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kw(n,e){return ZC(n,"POST","/v1/accounts:signUp",Va(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,r=!1){const i=await Ht._fromIdTokenResponse(e,s,r),o=cf(s);return new Zn({user:i,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const r=cf(s);return new Zn({user:e,providerId:r,_tokenResponse:s,operationType:t})}}function cf(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xw(n){if(Ft(n.app))return Promise.reject(jn(n));const e=Ga(n);if(await e._initializationPromise,e.currentUser?.isAnonymous)return new Zn({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await kw(e,{returnSecureToken:!0}),s=await Zn._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la extends St{constructor(e,t,s,r){super(t.code,t.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,la.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,r){return new la(e,t,s,r)}}function pp(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?la._fromErrorAndOperation(n,i,e,s):i})}async function Mw(n,e,t=!1){const s=await _i(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Zn._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vw(n,e,t=!1){const{auth:s}=n;if(Ft(s.app))return Promise.reject(jn(s));const r="reauthenticate";try{const i=await _i(n,pp(s,r,e,n),t);ie(i.idToken,s,"internal-error");const o=Cu(i.idToken);ie(o,s,"internal-error");const{sub:a}=o;return ie(n.uid===a,s,"user-mismatch"),Zn._forOperation(n,r,i)}catch(i){throw i?.code==="auth/user-not-found"&&Dn(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gw(n,e,t=!1){if(Ft(n.app))return Promise.reject(jn(n));const s="signIn",r=await pp(n,s,e),i=await Zn._fromIdTokenResponse(n,s,r);return t||await n._updateCurrentUser(i.user),i}function Uw(n,e,t,s){return Fe(n).onIdTokenChanged(e,t,s)}function Hw(n,e,t){return Fe(n).beforeAuthStateChanged(e,t)}const ua="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ua,"1"),this.storage.removeItem(ua),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w=1e3,jw=10;class mp extends gp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Bp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),r=this.localCache[t];s!==r&&e(t,r,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);_w()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,jw):r()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},$w)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}mp.type="LOCAL";const qw=mp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep extends gp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ep.type="SESSION";const _p=Ep;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jw(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const s=new Ua(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async u=>u(t.origin,i)),l=await Jw(a);t.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ua.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const u=mu("",20);r.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(d){const p=d;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(){return window}function zw(n){en().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dp(){return typeof en().WorkerGlobalScope<"u"&&typeof en().importScripts=="function"}async function Ww(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Yw(){return navigator?.serviceWorker?.controller||null}function Qw(){return Dp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp="firebaseLocalStorageDb",Xw=1,Ba="firebaseLocalStorage",wp="fbase_key",Zw=800,eI=3,lf=800,Ha=2500,ai="DB_TIMEOUT";class Ji{constructor(e){this.request=e}toPromise(e=Ha){return new Promise((t,s)=>{let r=!1;const i=setTimeout(()=>{if(!r){r=!0;try{this.request.transaction?.abort()}catch{}s(new Error(ai))}},e);this.request.addEventListener("success",()=>{r||(r=!0,clearTimeout(i),t(this.request.result))}),this.request.addEventListener("error",()=>{r||(r=!0,clearTimeout(i),s(this.request.error))})})}}function $a(n,e){return n.transaction([Ba],e?"readwrite":"readonly").objectStore(Ba)}function tI(){const n=indexedDB.deleteDatabase(yp);return new Ji(n).toPromise()}function Ip(){const n=indexedDB.open(yp,Xw);return new Promise((e,t)=>{let s=!1;const r=setTimeout(()=>{s||(s=!0,t(new Error(ai)))},Ha);n.addEventListener("error",()=>{s||(s=!0,clearTimeout(r),t(n.error))}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Ba,{keyPath:wp})}catch(o){s||(s=!0,clearTimeout(r),t(o))}}),n.addEventListener("success",async()=>{const i=n.result;if(s){i.close();return}if(clearTimeout(r),i.objectStoreNames.contains(Ba))s=!0,e(i);else{i.close();try{await tI();const o=await Ip();s=!0,e(o)}catch(o){s||(s=!0,t(o))}}})})}async function uf(n,e,t,s=Ha){const r=$a(n,!0).put({[wp]:e,value:t});return new Ji(r).toPromise(s)}async function nI(n,e){const t=$a(n,!1).get(e),s=await new Ji(t).toPromise();return s===void 0?null:s.value}function Bf(n,e,t=Ha){const s=$a(n,!0).delete(e);return new Ji(s).toPromise(t)}class Tp{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this._lastProbeTimedOut=!1,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){if(this.dbPromise)return this.dbPromise;const e=Ip();return this.dbPromise=e,e.catch(()=>{this.dbPromise===e&&(this.dbPromise=null)}),e}async _withRetries(e){let t=0;for(;;){let s,r=null;try{const i=this._openDb();return r=this.dbPromise,s=await i,await e(s)}catch(i){if(s)s.close(),r&&this.dbPromise===r&&(this.dbPromise=null);else if(this.dbPromise&&this.dbPromise===r){const a=this.dbPromise;this.dbPromise=null;try{(await a).close()}catch{}}if(i instanceof Error&&i.message===ai||t++>eI)throw i}}}async initializeServiceWorkerMessaging(){return Dp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ua._getInstance(Qw()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Ww(),!this.activeServiceWorker)return;this.sender=new Kw(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Yw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){this._lastProbeTimedOut=!1;try{return indexedDB?(await this._withRetries(async e=>{await uf(e,ua,"1",lf),await Bf(e,ua,lf)}),!0):!1}catch(e){this._lastProbeTimedOut=e instanceof Error&&e.message===ai}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>uf(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){try{const t=await this._withRetries(s=>nI(s,e));return this.localCache[e]=t,t}catch(t){if(t instanceof Error&&t.message===ai&&this.localCache[e]!=null)return this.localCache[e];throw t}}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Bf(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isClosing)return[];try{const e=await this._withRetries(r=>{const i=$a(r,!1).getAll();return new Ji(i).toPromise()});if(this.isClosing)return[];if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}catch(e){return this.isClosing||Ho(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Zw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,e in this.localCache||this._get(e).catch(()=>{})),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}Tp.type="LOCAL";const sI=Tp;new ji(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rI(n,e){return e?dn(e):(ie(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu extends dp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ur(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ur(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ur(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function iI(n){return Gw(n.auth,new Eu(n),n.bypassAuthState)}function oI(n){const{auth:e,user:t}=n;return ie(t,e,"internal-error"),Vw(t,new Eu(n),n.bypassAuthState)}async function aI(n){const{auth:e,user:t}=n;return ie(t,e,"internal-error"),Mw(t,new Eu(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(e,t,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{if(this.eventManager=await this.resolver._initialize(this.auth),!this.pendingPromise||(await this.onExecution(),!this.pendingPromise))return;this.eventManager.registerConsumer(this)}catch(s){this.pendingPromise&&this.reject(s)}})}async onAuthEvent(e){if(!this.pendingPromise)return;const{urlResponse:t,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return iI;case"linkViaPopup":case"linkViaRedirect":return aI;case"reauthViaPopup":case"reauthViaRedirect":return oI;default:Dn(this.auth,"internal-error")}}resolve(e){yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cI=new ji(2e3,1e4);class ar extends Ap{constructor(e,t,s,r,i){super(e,t,r,i),this.provider=s,this.authWindow=null,this.pollId=null,ar.currentPopupAction&&ar.currentPopupAction.cancel(),ar.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ie(e,this.auth,"internal-error"),e}async onExecution(){yn(this.filter.length===1,"Popup operations only handle one event");const e=mu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ar.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Zt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,cI.get())};e()}}ar.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI="pendingRedirect",qo=new Map;class uI extends Ap{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=qo.get(this.auth._key());if(!e){try{const s=await BI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}qo.set(this.auth._key(),e)}return this.bypassAuthState||qo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function BI(n,e){const t=dI(e),s=fI(n);if(!await s._isAvailable())return!1;const r=await s._get(t)==="true";return await s._remove(t),r}function hI(n,e){qo.set(n._key(),e)}function fI(n){return dn(n._redirectPersistence)}function dI(n){return jo(lI,n.config.apiKey,n.name)}async function CI(n,e,t=!1){if(Ft(n.app))return Promise.reject(jn(n));const s=Ga(n),r=rI(s,e),o=await new uI(s,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI=600*1e3;class gI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!mI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!vp(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";t.onError(Zt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=pI&&this.cachedEventUids.clear(),this.cachedEventUids.has(hf(e))}saveEventToCache(e){this.cachedEventUids.add(hf(e)),this.lastProcessedEventTime=Date.now()}}function hf(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function vp({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function mI(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vp(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EI(n,e={}){return Tr(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,DI=/^https?/;async function yI(n){if(n.config.emulator)return;const{authorizedDomains:e}=await EI(n);for(const t of e)try{if(wI(t))return}catch{}Dn(n,"unauthorized-domain")}function wI(n){const e=vl(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!DI.test(t))return!1;if(_I.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II=new ji(3e4,6e4);function ff(){const n=en().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function TI(n){return new Promise((e,t)=>{function s(){ff(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ff(),t(Zt(n,"network-request-failed"))},timeout:II.get()})}if(en().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(en().gapi?.load)s();else{const r=Rw("iframefcb");return en()[r]=()=>{gapi.load?s():t(Zt(n,"network-request-failed"))},vw(`${bw()}?onload=${r}`).catch(i=>t(i))}}).catch(e=>{throw Jo=null,e})}let Jo=null;function AI(n){return Jo=Jo||TI(n),Jo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI=new ji(5e3,15e3),bI="__/auth/iframe",RI="emulator/auth/iframe",SI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},OI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function PI(n){const e=n.config;ie(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?du(e,RI):`https://${n.config.authDomain}/${bI}`,s={apiKey:e.apiKey,appName:n.name,v:Xn},r=OI.get(n.config.apiHost);r&&(s.eid=r);const i=n._getFrameworks();return i.length&&(s.fw=i.join(",")),`${t}?${Ui(s).slice(1)}`}async function NI(n){const e=await AI(n),t=en().gapi;return ie(t,n,"internal-error"),e.open({where:document.body,url:PI(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:SI,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Zt(n,"network-request-failed"),a=en().setTimeout(()=>{i(o)},vI.get());function l(){en().clearTimeout(a),r(s)}s.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},LI=500,kI=600,xI="_blank",MI="http://localhost";class df{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function VI(n,e,t,s=LI,r=kI){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l={...FI,width:s.toString(),height:r.toString(),top:i,left:o},u=it().toLowerCase();t&&(a=op(u)?xI:t),rp(u)&&(e=e||MI,l.scrollbars="yes");const h=Object.entries(l).reduce((p,[D,y])=>`${p}${D}=${y},`,"");if(Ew(u)&&a!=="_self")return GI(e||"",a),new df(null);const d=window.open(e||"",a,h);ie(d,n,"popup-blocked");try{d.focus()}catch{}return new df(d)}function GI(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI="__/auth/handler",HI="emulator/auth/handler",$I=encodeURIComponent("fac");async function Cf(n,e,t,s,r,i){ie(n.config.authDomain,n,"auth-domain-config-required"),ie(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Xn,eventId:r};if(e instanceof Cp){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",eD(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof qi){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await n._getAppCheckToken(),u=l?`#${$I}=${encodeURIComponent(l)}`:"";return`${jI(n)}?${Ui(a).slice(1)}${u}`}function jI({config:n}){return n.emulator?du(n,HI):`https://${n.authDomain}/${UI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc="webStorageSupport";class qI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_p,this._completeRedirectFn=CI,this._overrideRedirectResult=hI}async _openPopup(e,t,s,r){yn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await Cf(e,t,s,vl(),r);return VI(e,i,mu())}async _openRedirect(e,t,s,r){await this._originValidation(e);const i=await Cf(e,t,s,vl(),r);return zw(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(yn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await NI(e),s=new gI(e);return t.register("authEvent",r=>(ie(r?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Jc,{type:Jc},r=>{const i=r?.[0]?.[Jc];i!==void 0&&t(!!i),Dn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=yI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Bp()||ip()||pu()}}const JI=qI;var pf="@firebase/auth",gf="1.13.11";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zI(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function WI(n){kt(new Rt("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;ie(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hp(n)},u=new Tw(s,r,i,l);return Ow(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),kt(new Rt("auth-internal",e=>{const t=Ga(e.getProvider("auth").getImmediate());return(s=>new KI(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bt(pf,gf,zI(n)),Bt(pf,gf,"esm2020")}/**
 * @license
 * Copyright 2026 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YI(){return document.getElementsByTagName("head")?.[0]??document}function QI(n){return new Promise((e,t)=>{const s=document.createElement("script");try{kC(s,n)}catch(r){t(r);return}s.onload=e,s.onerror=r=>{const i=Zt("internal-error");i.customData=r,t(i)},s.type="text/javascript",s.charset="UTF-8",YI().appendChild(s)})}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XI=300,ZI=AC("authIdTokenMaxAge")||XI;let mf=null;const eT=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>ZI)return;const r=t?.token;mf!==r&&(mf=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function tT(n=$i()){const e=An(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Sw(n,{popupRedirectResolver:JI,persistence:[sI,qw,_p]}),s=AC("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=eT(i.toString());Hw(t,o,()=>o(t.currentUser)),Uw(t,a=>o(a))}}const r=IC("auth");return r&&Pw(t,`http://${r}`),t}Aw({loadJS:QI,gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});WI("Browser");var Ef="@firebase/ai",Rl="3.1.0";/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr="AI",nT="global",sT="firebasevertexai.googleapis.com",ha="v1beta",_f=Rl,rT="gl-js",iT="hybrid",oT=180*1e3,aT="gemini-3.5-flash-lite";/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re extends St{constructor(e,t,s){const r=Cr,i=`${r}/${e}`,o=`${r}: ${t} (${i})`;super(e,o),this.code=e,this.customErrorData=s,Error.captureStackTrace&&Error.captureStackTrace(this,re),Object.setPrototypeOf(this,re.prototype),this.toString=()=>o}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df=["user","model","function","system"],bp={HARM_SEVERITY_UNSUPPORTED:"HARM_SEVERITY_UNSUPPORTED"},et={SAFETY:"SAFETY",RECITATION:"RECITATION",BLOCKLIST:"BLOCKLIST",PROHIBITED_CONTENT:"PROHIBITED_CONTENT",SPII:"SPII",MALFORMED_FUNCTION_CALL:"MALFORMED_FUNCTION_CALL",IMAGE_SAFETY:"IMAGE_SAFETY",IMAGE_PROHIBITED_CONTENT:"IMAGE_PROHIBITED_CONTENT",IMAGE_OTHER:"IMAGE_OTHER",NO_IMAGE:"NO_IMAGE",IMAGE_RECITATION:"IMAGE_RECITATION",LANGUAGE:"LANGUAGE",UNEXPECTED_TOOL_CALL:"UNEXPECTED_TOOL_CALL",TOO_MANY_TOOL_CALLS:"TOO_MANY_TOOL_CALLS",MISSING_THOUGHT_SIGNATURE:"MISSING_THOUGHT_SIGNATURE",MALFORMED_RESPONSE:"MALFORMED_RESPONSE"},At={PREFER_ON_DEVICE:"prefer_on_device",ONLY_ON_DEVICE:"only_on_device",ONLY_IN_CLOUD:"only_in_cloud",PREFER_IN_CLOUD:"prefer_in_cloud"},ln={ON_DEVICE:"on_device",IN_CLOUD:"in_cloud"};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne={ERROR:"error",REQUEST_ERROR:"request-error",RESPONSE_ERROR:"response-error",FETCH_ERROR:"fetch-error",SESSION_CLOSED:"session-closed",INVALID_CONTENT:"invalid-content",API_NOT_ENABLED:"api-not-enabled",ALREADY_INITIALIZED:"already-initialized",INVALID_SCHEMA:"invalid-schema",NO_API_KEY:"no-api-key",NO_APP_ID:"no-app-id",NO_MODEL:"no-model",NO_PROJECT_ID:"no-project-id",PARSE_FAILED:"parse-failed",UNSUPPORTED:"unsupported"};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn={AGENT_PLATFORM:"AGENT_PLATFORM",GOOGLE_AI:"GOOGLE_AI"};/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(e){this.backendType=e}}class ja extends Rp{constructor(){super(vn.GOOGLE_AI)}_getModelPath(e,t){return`/${ha}/projects/${e}/${t}`}_getTemplatePath(e,t){return`/${ha}/projects/${e}/templates/${t}`}}class _u extends Rp{constructor(e){super(vn.AGENT_PLATFORM),this.location=nT,e&&(this.location=e)}_getModelPath(e,t){return`/${ha}/projects/${e}/locations/${this.location}/${t}`}_getTemplatePath(e,t){return`/${ha}/projects/${e}/locations/${this.location}/templates/${t}`}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cT(n){if(n instanceof ja)return`${Cr}/googleai`;if(n instanceof _u)return`${Cr}/agentplatform/${n.location}`;throw new re(ne.ERROR,`Invalid backend: ${JSON.stringify(n.backendType)}`)}function lT(n){const e=n.split("/");if(e[0]!==Cr)throw new re(ne.ERROR,`Invalid instance identifier, unknown prefix '${e[0]}'`);switch(e[1]){case"agentplatform":const s=e[2];if(!s)throw new re(ne.ERROR,`Invalid instance identifier, unknown location '${n}'`);return new _u(s);case"googleai":return new ja;default:throw new re(ne.ERROR,`Invalid instance identifier string: '${n}'`)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Me=new Ir("@firebase/ai");var un;(function(n){n.UNAVAILABLE="unavailable",n.DOWNLOADABLE="downloadable",n.DOWNLOADING="downloading",n.AVAILABLE="available"})(un||(un={}));/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp={type:"text",languages:["en"]},Kc=[Sp,{type:"image"}],zc=[Sp];class Ut{constructor(e,t,s){this.languageModelProvider=e,this.mode=t,this.downloadPromise=null,this.onDeviceParams={createOptions:{expectedInputs:Kc,expectedOutputs:zc}},s&&(this.onDeviceParams=s,this.onDeviceParams.createOptions?(this.onDeviceParams.createOptions.expectedInputs||(this.onDeviceParams.createOptions.expectedInputs=Kc),this.onDeviceParams.createOptions.expectedOutputs||(this.onDeviceParams.createOptions.expectedOutputs=zc)):this.onDeviceParams.createOptions={expectedInputs:Kc,expectedOutputs:zc})}async isAvailable(e){if(!this.mode)return Me.debug("On-device inference unavailable because mode is undefined."),!1;if(this.mode===At.ONLY_IN_CLOUD)return Me.debug('On-device inference unavailable because mode is "only_in_cloud".'),!1;const t=await this.languageModelProvider?.availability(this.onDeviceParams.createOptions);if(this.mode===At.ONLY_ON_DEVICE){if(t===un.UNAVAILABLE)throw new re(ne.API_NOT_ENABLED,"Local LanguageModel API not available in this environment.");if(t===un.DOWNLOADABLE||t===un.DOWNLOADING){Me.debug("Waiting for download of LanguageModel to complete.");try{await this.downloadPromise}catch(s){throw new re(ne.ERROR,s.message)}return!0}return!0}return t!==un.AVAILABLE?(Me.debug(`On-device inference unavailable because availability is "${t}".`),!1):Ut.isOnDeviceRequest(e)?!0:(Me.debug("On-device inference unavailable because request is incompatible."),!1)}async generateContent(e){const t=await this.createSession(),s=await Promise.all(e.contents.map(Ut.toLanguageModelMessage)),r=await t.prompt(s,this.onDeviceParams.promptOptions);return Ut.toResponse(r)}async generateContentStream(e){const t=await this.createSession(),s=await Promise.all(e.contents.map(Ut.toLanguageModelMessage)),r=t.promptStreaming(s,this.onDeviceParams.promptOptions);return Ut.toStreamResponse(r)}async countTokens(e){throw new re(ne.REQUEST_ERROR,"Count Tokens is not yet available for on-device model.")}static isOnDeviceRequest(e){if(e.contents.length===0)return Me.debug("Empty prompt rejected for on-device inference."),!1;for(const t of e.contents){if(t.parts.some(s=>"functionResponse"in s))return Me.debug("Content with a function response part rejected for on-device inference."),!1;for(const s of t.parts)if("inlineData"in s&&s.inlineData&&Ut.SUPPORTED_MIME_TYPES.indexOf(s.inlineData.mimeType)===-1)return Me.debug(`Unsupported mime type "${s.inlineData.mimeType}" rejected for on-device inference.`),!1}return!0}async downloadIfAvailable(e){const t=await this.languageModelProvider?.availability(this.onDeviceParams.createOptions);return(t===un.DOWNLOADABLE||t===un.DOWNLOADING)&&this.download(e),t}download(e){if(this.downloadPromise)return;const t={...this.onDeviceParams.createOptions};t&&!t.monitor&&e&&(t.monitor=s=>{s.addEventListener("downloadprogress",r=>{e(r.loaded)})}),this.downloadPromise=this.languageModelProvider?.create(t).finally(()=>{this.downloadPromise=null})}static async toLanguageModelMessage(e){const t=await Promise.all(e.parts.map(Ut.toLanguageModelMessageContent));return{role:Ut.toLanguageModelMessageRole(e.role),content:t}}static async toLanguageModelMessageContent(e){if("text"in e&&typeof e.text=="string")return{type:"text",value:e.text};if("inlineData"in e&&e.inlineData){const s=await(await fetch(`data:${e.inlineData.mimeType};base64,${e.inlineData.data}`)).blob();return{type:"image",value:await createImageBitmap(s)}}throw new re(ne.REQUEST_ERROR,"Processing of this Part type is not currently supported.")}static toLanguageModelMessageRole(e){return e==="model"?"assistant":"user"}async createSession(){if(!this.languageModelProvider)throw new re(ne.UNSUPPORTED,"Chrome AI requested for unsupported browser version.");const e=await this.languageModelProvider.create(this.onDeviceParams.createOptions);return this.oldSession&&this.oldSession.destroy(),this.oldSession=e,e}static toResponse(e){return{json:async()=>({candidates:[{content:{parts:[{text:e}]}}]})}}static toStreamResponse(e){const t=new TextEncoder;return{body:e.pipeThrough(new TransformStream({transform(s,r){const i=JSON.stringify({candidates:[{content:{role:"model",parts:[{text:s}]}}]});r.enqueue(t.encode(`data: ${i}

`))}}))}}}Ut.SUPPORTED_MIME_TYPES=["image/jpeg","image/png"];function uT(n,e,t){const r=(e||su()).LanguageModel;if(r&&n)return new Ut(r,n,t)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(e,t,s,r,i){this.app=e,this.backend=t,this.chromeAdapterFactory=i;const o=r?.getImmediate({optional:!0}),a=s?.getImmediate({optional:!0});this.auth=a||null,this.appCheck=o||null}_delete(){return Promise.resolve()}set options(e){this._options=e}get options(){return this._options}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hT(n,{instanceIdentifier:e}){if(!e)throw new re(ne.ERROR,"AIService instance identifier is undefined.");const t=lT(e),s=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new BT(s,t,r,i,uT)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fT(n){if(n.app?.options?.apiKey)if(n.app?.options?.projectId){if(!n.app?.options?.appId)throw new re(ne.NO_APP_ID,'The "appId" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid app ID.')}else throw new re(ne.NO_PROJECT_ID,'The "projectId" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid project ID.');else throw new re(ne.NO_API_KEY,'The "apiKey" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid API key.');const e={apiKey:n.app.options.apiKey,project:n.app.options.projectId,appId:n.app.options.appId,automaticDataCollectionEnabled:n.app.automaticDataCollectionEnabled,backend:n.backend};if(Ft(n.app)&&n.app.settings.appCheckToken){const t=n.app.settings.appCheckToken;e.getAppCheckToken=()=>Promise.resolve({token:t})}else n.appCheck&&(n.options?.useLimitedUseAppCheckTokens?e.getAppCheckToken=()=>n.appCheck.getLimitedUseToken():e.getAppCheckToken=()=>n.appCheck.getToken());return n.auth&&(e.getAuthToken=()=>n.auth.getToken()),e}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,t){this._apiSettings=fT(e),this.model=ci.normalizeModelName(t,this._apiSettings.backend.backendType)}static normalizeModelName(e,t){return t===vn.GOOGLE_AI?ci.normalizeGoogleAIModelName(e):ci.normalizeVertexAIModelName(e)}static normalizeGoogleAIModelName(e){return`models/${e}`}static normalizeVertexAIModelName(e){let t;return e.includes("/")?e.startsWith("models/")?t=`publishers/google/${e}`:t=e:t=`publishers/google/models/${e}`,t}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dT="Timeout has expired.",Wc="AbortError";class CT{constructor(e){this.params=e}toString(){const e=new URL(this.baseUrl);return e.pathname=this.pathname,e.search=this.queryParams.toString(),e.toString()}get pathname(){return this.params.templateId?`${this.params.apiSettings.backend._getTemplatePath(this.params.apiSettings.project,this.params.templateId)}:${this.params.task}`:`${this.params.apiSettings.backend._getModelPath(this.params.apiSettings.project,this.params.model)}:${this.params.task}`}get baseUrl(){return this.params.singleRequestOptions?.baseUrl??`https://${sT}`}get queryParams(){const e=new URLSearchParams;return this.params.stream&&e.set("alt","sse"),e}}function pT(n){const e=[];return e.push(`${rT}/${_f}`),e.push(`fire/${_f}`),(n.params.apiSettings.inferenceMode===At.PREFER_ON_DEVICE||n.params.apiSettings.inferenceMode===At.PREFER_IN_CLOUD)&&e.push(iT),e.join(" ")}async function gT(n){const e=new Headers;if(e.append("Content-Type","application/json"),e.append("x-goog-api-client",pT(n)),e.append("x-goog-api-key",n.params.apiSettings.apiKey),n.params.apiSettings.automaticDataCollectionEnabled&&e.append("X-Firebase-Appid",n.params.apiSettings.appId),n.params.apiSettings.getAppCheckToken){const t=await n.params.apiSettings.getAppCheckToken();t&&(e.append("X-Firebase-AppCheck",t.token),t.error&&Me.warn(`Unable to obtain a valid App Check token: ${t.error.message}`))}if(n.params.apiSettings.getAuthToken){const t=await n.params.apiSettings.getAuthToken();t&&e.append("Authorization",`Firebase ${t.accessToken}`)}return e}async function Du(n,e){const t=new CT(n);let s;const r=n.singleRequestOptions?.signal,i=n.singleRequestOptions?.timeout!=null&&n.singleRequestOptions.timeout>=0?n.singleRequestOptions.timeout:oT,o=new AbortController,a=setTimeout(()=>{o.abort(new DOMException(dT,Wc)),Me.debug(`Aborting request to ${t} due to timeout (${i}ms)`)},i),l=AbortSignal.any(r?[r,o.signal]:[o.signal]);if(r&&r.aborted)throw clearTimeout(a),new DOMException(r.reason??"Aborted externally before fetch",Wc);try{const u={method:"POST",headers:await gT(t),signal:l,body:e};if(s=await fetch(t.toString(),u),!s.ok){let h="",d;try{const p=await s.json();h=p.error.message,p.error.details&&(h+=` ${JSON.stringify(p.error.details)}`,d=p.error.details)}catch{}throw s.status===403&&d&&d.some(p=>p.reason==="SERVICE_DISABLED")&&d.some(p=>p.links?.[0]?.description.includes("Google developers console API activation"))?new re(ne.API_NOT_ENABLED,`The Firebase AI SDK requires the Firebase AI API ('firebasevertexai.googleapis.com') to be enabled in your Firebase project. Enable this API by visiting the Firebase Console at https://console.firebase.google.com/project/${t.params.apiSettings.project}/ailogic/ and clicking "Get started". If you enabled this API recently, wait a few minutes for the action to propagate to our systems and then retry.`,{status:s.status,statusText:s.statusText,errorDetails:d}):new re(ne.FETCH_ERROR,`Error fetching from ${t}: [${s.status} ${s.statusText}] ${h}`,{status:s.status,statusText:s.statusText,errorDetails:d})}}catch(u){let h=u;throw u.code!==ne.FETCH_ERROR&&u.code!==ne.API_NOT_ENABLED&&u instanceof Error&&u.name!==Wc&&(h=new re(ne.ERROR,`Error fetching from ${t.toString()}: ${u.message}`),h.stack=u.stack),h}finally{clearTimeout(a)}return s}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(n){if(n.candidates&&n.candidates.length>0){if(n.candidates.length>1&&Me.warn(`This response had ${n.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),Pp(n.candidates[0]))throw new re(ne.RESPONSE_ERROR,`Response error: ${ws(n)}. Response body stored in error.response`,{response:n});return!0}else return!1}function on(n){return"type"in n&&n.type?n:n.text!==void 0?{...n,type:"text"}:n.inlineData!==void 0?{...n,type:"inlineData"}:n.functionCall!==void 0?{...n,type:"functionCall"}:n.functionResponse!==void 0?{...n,type:"functionResponse"}:n.fileData!==void 0?{...n,type:"fileData"}:n.executableCode!==void 0?{...n,type:"executableCode"}:n.codeExecutionResult!==void 0?{...n,type:"codeExecutionResult"}:n}function fa(n,e=ln.IN_CLOUD){if(n.candidates?.[0]&&!n.candidates[0].hasOwnProperty("index")&&(n.candidates[0].index=0),n.candidates)for(const s of n.candidates)s.content?.parts&&(s.content.parts=s.content.parts.map(on));const t=mT(n);return t.inferenceSource=e,t}function mT(n){return n.text=()=>{if(To(n))return yf(n,e=>!("thought"in e&&e.thought));if(n.promptFeedback)throw new re(ne.RESPONSE_ERROR,`Text not available. ${ws(n)}`,{response:n});return""},n.thoughtSummary=()=>{if(To(n)){const e=yf(n,t=>!!("thought"in t&&t.thought));return e===""?void 0:e}else if(n.promptFeedback)throw new re(ne.RESPONSE_ERROR,`Thought summary not available. ${ws(n)}`,{response:n})},n.inlineDataParts=()=>{if(To(n))return ET(n);if(n.promptFeedback)throw new re(ne.RESPONSE_ERROR,`Data not available. ${ws(n)}`,{response:n})},n.functionCalls=()=>{if(To(n))return Op(n);if(n.promptFeedback)throw new re(ne.RESPONSE_ERROR,`Function call not available. ${ws(n)}`,{response:n})},n}function yf(n,e){const t=[];if(n.candidates?.[0].content?.parts)for(const s of n.candidates?.[0].content?.parts){const r=on(s);r.type==="text"&&e(r)&&t.push(r.text)}return t.length>0?t.join(""):""}function Op(n){if(!n)return;const e=[];if(n.candidates?.[0].content?.parts)for(const t of n.candidates?.[0].content?.parts){const s=on(t);s.type==="functionCall"&&e.push(s.functionCall)}if(e.length>0)return e}function ET(n){const e=[];if(n.candidates?.[0].content?.parts)for(const t of n.candidates?.[0].content?.parts){const s=on(t);s.type==="inlineData"&&e.push(s)}if(e.length>0)return e}const _T=[et.RECITATION,et.SAFETY,et.BLOCKLIST,et.PROHIBITED_CONTENT,et.SPII,et.MALFORMED_FUNCTION_CALL,et.IMAGE_SAFETY,et.IMAGE_PROHIBITED_CONTENT,et.IMAGE_OTHER,et.NO_IMAGE,et.IMAGE_RECITATION,et.LANGUAGE,et.UNEXPECTED_TOOL_CALL,et.TOO_MANY_TOOL_CALLS,et.MISSING_THOUGHT_SIGNATURE,et.MALFORMED_RESPONSE];function Pp(n){return!!n.finishReason&&_T.some(e=>e===n.finishReason)}function ws(n){let e="";if((!n.candidates||n.candidates.length===0)&&n.promptFeedback)e+="Response was blocked",n.promptFeedback?.blockReason&&(e+=` due to ${n.promptFeedback.blockReason}`),n.promptFeedback?.blockReasonMessage&&(e+=`: ${n.promptFeedback.blockReasonMessage}`);else if(n.candidates?.[0]){const t=n.candidates[0];Pp(t)&&(e+=`Candidate was blocked due to ${t.finishReason}`,t.finishMessage&&(e+=`: ${t.finishMessage}`))}return e}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(n){if(n!=null){if(typeof n=="string")return{role:"system",parts:[{type:"text",text:n}]};if(n.type==="text"||"text"in n&&typeof n.text=="string")return{role:"system",parts:[vs(on(n))]};if(n.parts){const e=n.parts.map(t=>vs(on(t)));return n.role?{...n,parts:e}:{role:"system",parts:e}}}}function ti(n){let e=[];if(typeof n=="string")e=[{type:"text",text:n}];else for(const t of n)typeof t=="string"?e.push({type:"text",text:t}):e.push(vs(on(t)));return DT(e)}function DT(n){const e={role:"user",parts:[]};let t=!1,s=!1;for(const r of n)r.type==="functionResponse"||"functionResponse"in r?s=!0:t=!0,e.parts.push(r);if(t&&s)throw new re(ne.INVALID_CONTENT,"Within a single message, FunctionResponse cannot be mixed with other type of Part in the request for sending chat message.");if(!t&&!s)throw new re(ne.INVALID_CONTENT,"No Content is provided for sending chat message.");return e}function Yc(n){let e;if(n.contents){const t=n;e={...t,contents:t.contents.map(s=>({...s,parts:s.parts?s.parts.map(on):[]}))}}else e={contents:[ti(n)]};return n.systemInstruction&&(e.systemInstruction=yu(n.systemInstruction)),e}function yT(n){return n.parts&&Array.isArray(n.parts)?{...n,parts:n.parts.map(wu)}:n}function wu(n){let e;if("type"in n){const{type:t,...s}=n;e=s}else e=n;return e.functionResponse&&(e={...e,functionResponse:yT(e.functionResponse)}),e}function Iu(n){return n.parts?{...n,parts:n.parts.map(wu)}:n}function Np(n){return n==null||typeof n=="string"?n:"parts"in n&&Array.isArray(n.parts)?Iu(n):wu(n)}function Fp(n){const e={...n};return e.contents&&(e.contents=e.contents.map(Iu)),e.systemInstruction&&(e.systemInstruction=Np(e.systemInstruction)),e}function wT(n){const e={...n};return e.contents&&(e.contents=e.contents.map(Iu)),e.systemInstruction&&(e.systemInstruction=Np(e.systemInstruction)),e}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lp(n){if(n.safetySettings?.forEach(e=>{if(e.method)throw new re(ne.UNSUPPORTED,"SafetySetting.method is not supported in the the Gemini Developer API. Please remove this property.")}),n.generationConfig?.topK){const e=Math.round(n.generationConfig.topK);e!==n.generationConfig.topK&&(Me.warn("topK in GenerationConfig has been rounded to the nearest integer to match the format for requests to the Gemini Developer API."),n.generationConfig.topK=e)}return n}function Tu(n){return{candidates:n.candidates?TT(n.candidates):void 0,promptFeedback:n.promptFeedback?AT(n.promptFeedback):void 0,usageMetadata:n.usageMetadata}}function IT(n,e){return{generateContentRequest:{model:e,...n}}}function TT(n){const e=[];let t;return e&&n.forEach(s=>{let r;if(s.citationMetadata&&(r={citations:s.citationMetadata.citationSources}),s.safetyRatings&&(t=s.safetyRatings.map(o=>({...o,severity:o.severity??bp.HARM_SEVERITY_UNSUPPORTED,probabilityScore:o.probabilityScore??0,severityScore:o.severityScore??0}))),s.content?.parts?.some(o=>"videoMetadata"in o&&o.videoMetadata))throw new re(ne.UNSUPPORTED,"Part.videoMetadata is not supported in the Gemini Developer API. Please remove this property.");const i={index:s.index,content:s.content,finishReason:s.finishReason,finishMessage:s.finishMessage,safetyRatings:t,citationMetadata:r,groundingMetadata:s.groundingMetadata,urlContextMetadata:s.urlContextMetadata};e.push(i)}),e}function AT(n){const e=[];return(n.safetyRatings??[]).forEach(s=>{e.push({category:s.category,probability:s.probability,severity:s.severity??bp.HARM_SEVERITY_UNSUPPORTED,probabilityScore:s.probabilityScore??0,severityScore:s.severityScore??0,blocked:s.blocked})}),{blockReason:n.blockReason,safetyRatings:e,blockReasonMessage:n.blockReasonMessage}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;async function vT(n,e,t){const s=n.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),r=OT(s),[i,o]=r.tee(),{response:a,firstValue:l}=await bT(o,e,t);return{stream:ST(i,e,t),response:a,firstValue:l}}async function bT(n,e,t){const[s,r]=n.tee(),i=s.getReader(),{value:o}=await i.read();return{firstValue:o,response:RT(r,e,t)}}async function RT(n,e,t){const s=[],r=n.getReader();for(;;){const{done:i,value:o}=await r.read();if(i){let a=PT(s);return e.backend.backendType===vn.GOOGLE_AI&&(a=Tu(a)),fa(a,t)}s.push(o)}}async function*ST(n,e,t){const s=n.getReader();for(;;){const{value:r,done:i}=await s.read();if(i)break;let o;e.backend.backendType===vn.GOOGLE_AI?o=fa(Tu(r),t):o=fa(r,t);const a=o.candidates?.[0];!a?.content?.parts&&!a?.finishReason&&!a?.citationMetadata&&!a?.urlContextMetadata||(yield o)}}function OT(n){const e=n.getReader();return new ReadableStream({start(s){let r="";return i();function i(){return e.read().then(({value:o,done:a})=>{if(a){if(r.trim()){s.error(new re(ne.PARSE_FAILED,"Failed to parse stream"));return}s.close();return}r+=o;let l=r.match(wf),u;for(;l;){try{u=JSON.parse(l[1])}catch{s.error(new re(ne.PARSE_FAILED,`Error parsing JSON response: "${l[1]}`));return}s.enqueue(u),r=r.substring(l[0].length),l=r.match(wf)}return i()})}}})}function PT(n){const t={promptFeedback:n[n.length-1]?.promptFeedback};for(const s of n)if(s.candidates)for(const r of s.candidates){const i=r.index||0;t.candidates||(t.candidates=[]),t.candidates[i]||(t.candidates[i]={index:r.index}),t.candidates[i].citationMetadata=r.citationMetadata,t.candidates[i].finishReason=r.finishReason,t.candidates[i].finishMessage=r.finishMessage,t.candidates[i].safetyRatings=r.safetyRatings,t.candidates[i].groundingMetadata=r.groundingMetadata;const o=r.urlContextMetadata;if(typeof o=="object"&&o!==null&&Object.keys(o).length>0&&(t.candidates[i].urlContextMetadata=o),r.content){if(!r.content.parts)continue;t.candidates[i].content||(t.candidates[i].content={role:r.content.role||"user",parts:[]});for(const a of r.content.parts){if("text"in a&&a.text==="")continue;if(Object.keys(a).length===0)throw new re(ne.INVALID_CONTENT,"Part should have at least one property, but there are none. This is likely caused by a malformed response from the backend.");const l=on({...a});Object.keys(l).length>0&&t.candidates[i].content.parts.push(l)}}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT=[ne.FETCH_ERROR,ne.ERROR,ne.API_NOT_ENABLED];async function kp(n,e,t,s){if(!e)return{response:await s(),inferenceSource:ln.IN_CLOUD};switch(e.mode){case At.ONLY_ON_DEVICE:if(await e.isAvailable(n))return{response:await t(),inferenceSource:ln.ON_DEVICE};throw new re(ne.UNSUPPORTED,"Inference mode is ONLY_ON_DEVICE, but an on-device model is not available.");case At.ONLY_IN_CLOUD:return{response:await s(),inferenceSource:ln.IN_CLOUD};case At.PREFER_IN_CLOUD:try{return{response:await s(),inferenceSource:ln.IN_CLOUD}}catch(r){if(r instanceof re&&NT.includes(r.code)&&await e.isAvailable(n))return{response:await t(),inferenceSource:ln.ON_DEVICE};throw r}case At.PREFER_ON_DEVICE:return await e.isAvailable(n)?{response:await t(),inferenceSource:ln.ON_DEVICE}:{response:await s(),inferenceSource:ln.IN_CLOUD};default:throw new re(ne.ERROR,`Unexpected infererence mode: ${e.mode}`)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FT(n,e,t,s){return t=Fp(t),n.backend.backendType===vn.GOOGLE_AI&&(t=Lp(t)),Du({task:"streamGenerateContent",model:e,apiSettings:n,stream:!0,singleRequestOptions:s},JSON.stringify(t))}async function xp(n,e,t,s,r){const i=await kp(t,s,()=>s.generateContentStream(t),()=>FT(n,e,t,r));return vT(i.response,n,i.inferenceSource)}async function LT(n,e,t,s){return t=Fp(t),n.backend.backendType===vn.GOOGLE_AI&&(t=Lp(t)),Du({model:e,task:"generateContent",apiSettings:n,stream:!1,singleRequestOptions:s},JSON.stringify(t))}async function Mp(n,e,t,s,r){const i=await kp(t,s,()=>s.generateContent(t),()=>LT(n,e,t,r)),o=await kT(i.response,n);return{response:fa(o,i.inferenceSource)}}async function kT(n,e){const t=await n.json();return e.backend.backendType===vn.GOOGLE_AI?Tu(t):t}/**
 * @license
 * Copyright 2026 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const If="SILENT_ERROR",Tf=10;class xT{constructor(e,t,s){this.params=t,this.requestOptions=s,this._history=[],this._sendPromise=Promise.resolve(),this._apiSettings=e}async getHistory(){return await this._sendPromise,vs(this._history).map(e=>({...e,parts:e.parts?e.parts.map(on):[]}))}async _sendMessage(e,t){let s={};await this._sendPromise;const r=[];return this._sendPromise=this._sendPromise.then(async()=>{let i,o=0;const a=this.requestOptions?.maxSequentialFunctionCalls??Tf;do{let l;if(i){o++;const d=await this._callFunctionsAsNeeded(i);l=ti(d)}else l=ti(e);const u=this._formatRequest(l,[...r]);r.push(l);const h=await this._callGenerateContent(u,t);if(h)if(s=h,i=this._getCallableFunctionCalls(h.response),h.response.candidates&&h.response.candidates.length>0){const d={parts:h.response.candidates?.[0].content.parts||[],role:h.response.candidates?.[0].content.role||"model"};r.push(vs(d))}else{const d=ws(h.response);d&&Me.warn(`sendMessage() was unsuccessful. ${d}. Inspect response object for details.`)}else i=void 0}while(i&&o<a);i&&o>=a&&Me.warn(`Automatic function calling exceeded the limit of ${a} function calls. Returning last model response.`)}),await this._sendPromise,this._history=this._history.concat(r),s}async _sendMessageStream(e,t){await this._sendPromise;const s=[],i=(async()=>{let o,a=0;const l=this.requestOptions?.maxSequentialFunctionCalls??Tf;let u;do{let h;if(o){a++;const p=await this._callFunctionsAsNeeded(o);h=ti(p)}else h=ti(e);const d=this._formatRequest(h,[...s]);if(s.push(h),u=await this._callGenerateContentStream(d,t),o=this._getCallableFunctionCalls(u.firstValue),o&&u.firstValue&&u.firstValue.candidates&&u.firstValue.candidates.length>0){const p={...u.firstValue.candidates[0].content};p.role||(p.role="model"),s.push(p)}}while(o&&a<l);return o&&a>=l&&Me.warn(`Automatic function calling exceeded the limit of ${l} function calls. Returning last model response.`),{stream:u.stream,response:u.response}})();return this._sendPromise=this._sendPromise.then(async()=>i).catch(o=>{throw new Error(If)}).then(o=>o.response).then(o=>{if(o.candidates&&o.candidates.length>0){this._history=this._history.concat(s);const a={...o.candidates[0].content};a.role||(a.role="model"),this._history.push(vs(a))}else{const a=ws(o);a&&Me.warn(`sendMessageStream() was unsuccessful. ${a}. Inspect response object for details.`)}}).catch(o=>{o.message!==If&&o.name!=="AbortError"&&Me.error(o)}),i}_getCallableFunctionCalls(e){const t=this.params?.tools?.find(r=>r.functionDeclarations);if(!t?.functionDeclarations)return;const s=Op(e);if(s){for(const r of s)if(!t.functionDeclarations?.some(o=>o.name===r.name&&typeof o.functionReference=="function"))return;return s}}async _callFunctionsAsNeeded(e){const t=[],s=[],r=this.params?.tools?.find(i=>i.functionDeclarations);if(r&&r.functionDeclarations){for(const o of e){const a=r.functionDeclarations.find(l=>l.name===o.name);if(a?.functionReference){const l=Promise.resolve(a.functionReference(o.args)).catch(u=>{const h=new re(ne.ERROR,`Error in user-defined function "${a.name}": ${u.message}`);throw h.stack=u.stack,h});t.push({name:o.name,id:o.id,results:l}),s.push(l)}}await Promise.all(s);const i=[];for(const{name:o,id:a,results:l}of t){const u={name:o,response:await l};a&&(u.id=a),i.push({type:"functionResponse",functionResponse:u})}return i}else throw new re(ne.REQUEST_ERROR,'No function declarations were provided in "tools".')}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MT=["text","inlineData","functionCall","functionResponse","thought","thoughtSignature"],VT={user:["text","inlineData","functionResponse"],function:["functionResponse"],model:["text","functionCall","thought","thoughtSignature"],system:["text"]},Af={user:["model"],function:["model"],model:["user","function"],system:[]};function GT(n){let e=null;for(const t of n){const{role:s,parts:r}=t;if(!e&&s!=="user")throw new re(ne.INVALID_CONTENT,`First Content should be with role 'user', got ${s}`);if(!Df.includes(s))throw new re(ne.INVALID_CONTENT,`Each item should include role field. Got ${s} but valid roles are: ${JSON.stringify(Df)}`);if(!Array.isArray(r))throw new re(ne.INVALID_CONTENT,"Content should have 'parts' property with an array of Parts");if(r.length===0)throw new re(ne.INVALID_CONTENT,"Each Content should have at least one part");const i={text:0,inlineData:0,functionCall:0,functionResponse:0,thought:0,thoughtSignature:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const a of r){if(a.type)i[a.type]+=1;else for(const l of["text","inlineData","functionCall","functionResponse","fileData","executableCode","codeExecutionResult"])l in a&&(i[l]+=1);"thought"in a&&a.thought&&(i.thought+=1),"thoughtSignature"in a&&a.thoughtSignature&&(i.thoughtSignature+=1)}const o=VT[s];for(const a of MT)if(!o.includes(a)&&i[a]>0)throw new re(ne.INVALID_CONTENT,`Content with role '${s}' can't contain '${a}' part`);if(e&&!Af[s].includes(e.role))throw new re(ne.INVALID_CONTENT,`Content with role '${s}' can't follow '${e.role}'. Valid previous roles: ${JSON.stringify(Af)}`);e=t}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT extends xT{constructor(e,t,s,r,i){super(e,r,i),this.model=t,this.chromeAdapter=s,this.params=r,this.requestOptions=i,r?.history&&(GT(r.history),this._history=vs(r.history)),this.params?.systemInstruction!=null&&(this.params={...this.params,systemInstruction:yu(this.params.systemInstruction)})}_formatRequest(e,t){return{safetySettings:this.params?.safetySettings,generationConfig:this.params?.generationConfig,tools:this.params?.tools,toolConfig:this.params?.toolConfig,systemInstruction:this.params?.systemInstruction,contents:[...this._history,...t,e]}}_callGenerateContent(e,t){return Mp(this._apiSettings,this.model,e,this.chromeAdapter,{...this.requestOptions,...t})}_callGenerateContentStream(e,t){return xp(this._apiSettings,this.model,e,this.chromeAdapter,{...this.requestOptions,...t})}async sendMessage(e,t){return this._sendMessage(e,t)}async sendMessageStream(e,t){return this._sendMessageStream(e,t)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HT(n,e,t,s){t=wT(t);let r="";if(n.backend.backendType===vn.GOOGLE_AI){const o=IT(t,e);r=JSON.stringify(o)}else r=JSON.stringify(t);return(await Du({model:e,task:"countTokens",apiSettings:n,stream:!1,singleRequestOptions:s},r)).json()}async function $T(n,e,t,s,r){if(s?.mode===At.ONLY_ON_DEVICE)throw new re(ne.UNSUPPORTED,"countTokens() is not supported for on-device models.");return HT(n,e,t,r)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT extends ci{constructor(e,t,s,r){super(e,t.model),this.chromeAdapter=r,this.generationConfig=t.generationConfig||{},qT(this.generationConfig),this.safetySettings=t.safetySettings||[],this.tools=t.tools,this.toolConfig=t.toolConfig,this.systemInstruction=yu(t.systemInstruction),this.requestOptions=s||{}}async initializeDeviceModel(e){if(!this.chromeAdapter||this.chromeAdapter.mode===At.ONLY_IN_CLOUD)return;if(await this.chromeAdapter.downloadIfAvailable(e)===un.UNAVAILABLE){const s=new re(ne.API_NOT_ENABLED,"Local LanguageModel API not available in this environment.");if(this.chromeAdapter.mode===At.ONLY_ON_DEVICE)throw s;Me.debug(s.message)}await this.chromeAdapter.downloadPromise}async generateContent(e,t){const s=Yc(e);return Mp(this._apiSettings,this.model,{generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,...s},this.chromeAdapter,{...this.requestOptions,...t})}async generateContentStream(e,t){const s=Yc(e),{stream:r,response:i}=await xp(this._apiSettings,this.model,{generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,...s},this.chromeAdapter,{...this.requestOptions,...t});return{stream:r,response:i}}startChat(e){return new UT(this._apiSettings,this.model,this.chromeAdapter,{tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,generationConfig:this.generationConfig,safetySettings:this.safetySettings,...e},this.requestOptions)}async countTokens(e,t){const s=Yc(e);return $T(this._apiSettings,this.model,s,this.chromeAdapter,{...this.requestOptions,...t})}}function qT(n){if(n.thinkingConfig?.thinkingBudget!=null&&n.thinkingConfig?.thinkingLevel)throw new re(ne.UNSUPPORTED,"Cannot set both thinkingBudget and thinkingLevel in a config.");if(n.responseSchema!=null&&n.responseJsonSchema!=null)throw new re(ne.UNSUPPORTED,"Cannot set both responseSchema and responseJsonSchema in a config.");if((n.responseSchema!=null||n.responseJsonSchema!=null)&&n.responseMimeType!=="application/json"&&n.responseMimeType!=="text/x.enum")throw new re(ne.UNSUPPORTED,'responseMimeType must be set to "application/json" or "text/x.enum" if responseSchema or responseJsonSchema are set.')}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JT(n=$i(),e){n=Fe(n);const t=An(n,Cr),s=e?.backend??new ja,r=cT(s),i=t.getImmediate({identifier:r}),o=i.options;if(o){const a=e?.useLimitedUseAppCheckTokens,l=!!o.useLimitedUseAppCheckTokens;if(a!=null&&!!a!==l)throw new re(ne.ALREADY_INITIALIZED,`getAI() has already been called for app "${n.name}" and this backend with useLimitedUseAppCheckTokens: ${l}. This option cannot be changed after the AI instance has been initialized. Pass the desired options to the first getAI() call for this app and backend, or omit useLimitedUseAppCheckTokens to reuse the existing instance.`);return i}return i.options={useLimitedUseAppCheckTokens:e?.useLimitedUseAppCheckTokens??!1},i}const KT=["mode","onDeviceParams","inCloudParams"];function Vp(n,e,t){const s=e;let r;if(s.mode){for(const a of Object.keys(e))KT.includes(a)||Me.warn(`When a hybrid inference mode is specified (mode is currently set to ${s.mode}), "${a}" cannot be configured at the top level. Configuration for in-cloud and on-device must be done separately in inCloudParams and onDeviceParams. Configuration values set outside of inCloudParams and onDeviceParams will be ignored.`);r=s.inCloudParams||{model:aT}}else r=e;if(!r.model)throw new re(ne.NO_MODEL,"Must provide a model name. Example: getGenerativeModel({ model: 'my-model-name' })");const i=n.chromeAdapterFactory?.(s.mode,typeof window>"u"?void 0:window,s.onDeviceParams),o=new jT(n,r,t,i);return o._apiSettings.inferenceMode=s.mode,o}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zT(){kt(new Rt(Cr,hT,"PUBLIC").setMultipleInstances(!0)),Bt(Ef,Rl),Bt(Ef,Rl,"esm2020")}zT();function WT(n=mC()){if(!a_(n))return null;const e=OC({apiKey:n.apiKey,authDomain:n.authDomain,projectId:n.projectId,storageBucket:n.storageBucket,messagingSenderId:n.messagingSenderId,appId:n.appId}),t=YT(e,n),s=n.backend==="google-ai"?new ja:new _u("global");return{app:e,auth:tT(e),ai:JT(e,{backend:s}),appCheck:t,config:n}}function YT(n,e){if(e.appcheckDebug){window.FIREBASE_APPCHECK_DEBUG_TOKEN=!0;const t=new Bu({getToken:()=>Promise.reject(new Error("App Check debug provider is active."))});return Xh(n,{provider:t})}if(!(!e.appcheckSiteKey||!/^[A-Za-z0-9_-]{20,}$/.test(e.appcheckSiteKey)))return Xh(n,{provider:new uu(e.appcheckSiteKey),isTokenAutoRefreshEnabled:!0})}async function QT(n){return(await xw(n.auth)).user?.uid??null}function XT(n,e){return Vp(n,{mode:At.PREFER_ON_DEVICE,onDeviceParams:{createOptions:{expectedInputs:[{type:"text"},{type:"image"}]}},inCloudParams:{model:e}})}function ZT(n,e){return Vp(n,{mode:At.ONLY_IN_CLOUD,inCloudParams:{model:e}})}async function vf(n,e,t){const s=performance.now(),r=await n.generateContent([{type:"text",text:e},{type:"inlineData",inlineData:t}]),i=r.response.inferenceSource===ln.IN_CLOUD?"in_cloud":"on_device";return{text:r.response.text(),source:i,latencyMs:Math.round(performance.now()-s)}}function e0(n){const e=/^data:(image\/[a-z+]+);base64,(.+)$/i.exec(n);if(!e)throw new Error("Not an image: expected a JPEG or PNG file.");return{mimeType:e[1],data:e[2]}}function t0(n){return new Promise((e,t)=>{const s=new FileReader;s.onload=()=>e(String(s.result)),s.onerror=()=>t(new Error("The image could not be read.")),s.readAsDataURL(n)})}const n0=.15,Ao=n=>`${Math.round(n*100)}%`,s0=(n,e,t,s)=>{const r=tu(e),i=n.fields[e];if(r){if(!i?.value)return"not read on device";if(s.includes(r.category)){const o=Math.min(.95,t+n0);if(i.confidence<o)return`watched field read at ${Ao(i.confidence)} (needs ${Ao(o)})`}if(i.confidence<t)return`read at ${Ao(i.confidence)} on device (needs ${Ao(t)})`;if(i.why)return i.why}};function r0(n,e,t){const s=[];for(const r of y_(n))tu(r)&&s.push({key:r,reason:"not read on device"});for(const[r,i]of Object.entries(n.fields)){if(!i.value)continue;const o=s0(n,r,e,t);o&&s.push({key:r,reason:o})}return s}function i0(n,e,t){const s=n.map(r=>{const i=tu(r),o=e.find(a=>a.key===r)?.reason??"uncertain";return`- ${r} (${i?.label??r}, ${i?.unit||"text"}): ${o}`});return["You are cross-checking a packaging label photo read on the device.","Read ONLY the fields listed below from the image. Do not repeat fields that are already read.","Answer with JSON only, no markdown:",'{"fields":{"<key>":{"value":"...","confidence":0.0-1.0,"why":"one short reason"}}}',`Watched categories: ${t.join(", ")}.`,"Fields to read:",...s].join(`
`)}function o0(){return["Read the packaging label in this photo and extract the fields below.","Answer with JSON only, no markdown, no explanation:","{",'  "product": "<product name>",','  "netWeight": "<weight as printed>",','  "fields": {',Gs.map(e=>{const t=e.unit?` in ${e.unit}`:"";return`  "${e.key}": {"value": "<${e.label}${t}>", "confidence": 0.0-1.0, "why": "<only when unsure>"}`}).join(`,
`),"  }","}","Rules:","- Copy the printed text, do not translate the ingredients.","- Nutrition values are per 100 g when the label says so; keep the number only.","- confidence is your own certainty for that field: lower it when the print is small, blurred or cut off.","- Leave a field out when it is not visible; never invent a value."].join(`
`)}async function a0(n,e,t){const s=XT(n,t.cloudModel),r=await vf(s,o0(),e),i=gl(r.text),o=r0(i,t.threshold,t.watched);let a,l=0;if(o.length>0){const h=ZT(n,t.cloudModel),d=i0(o.map(D=>D.key),o,t.watched),p=await vf(h,d,e);a=gl(p.text),l=p.latencyMs}return{reading:Uo({local:i,crossCheck:a,deviceMs:r.latencyMs,cloudMs:l,deviceSource:r.source}),escalations:o,deviceFallback:r.source==="in_cloud"}}var bf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qn,Gp;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,E){function w(){}w.prototype=E.prototype,v.F=E.prototype,v.prototype=new w,v.prototype.constructor=v,v.D=function(b,A,O){for(var _=Array(arguments.length-2),ht=2;ht<arguments.length;ht++)_[ht-2]=arguments[ht];return E.prototype[A].apply(b,_)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(v,E,w){w||(w=0);const b=Array(16);if(typeof E=="string")for(var A=0;A<16;++A)b[A]=E.charCodeAt(w++)|E.charCodeAt(w++)<<8|E.charCodeAt(w++)<<16|E.charCodeAt(w++)<<24;else for(A=0;A<16;++A)b[A]=E[w++]|E[w++]<<8|E[w++]<<16|E[w++]<<24;E=v.g[0],w=v.g[1],A=v.g[2];let O=v.g[3],_;_=E+(O^w&(A^O))+b[0]+3614090360&4294967295,E=w+(_<<7&4294967295|_>>>25),_=O+(A^E&(w^A))+b[1]+3905402710&4294967295,O=E+(_<<12&4294967295|_>>>20),_=A+(w^O&(E^w))+b[2]+606105819&4294967295,A=O+(_<<17&4294967295|_>>>15),_=w+(E^A&(O^E))+b[3]+3250441966&4294967295,w=A+(_<<22&4294967295|_>>>10),_=E+(O^w&(A^O))+b[4]+4118548399&4294967295,E=w+(_<<7&4294967295|_>>>25),_=O+(A^E&(w^A))+b[5]+1200080426&4294967295,O=E+(_<<12&4294967295|_>>>20),_=A+(w^O&(E^w))+b[6]+2821735955&4294967295,A=O+(_<<17&4294967295|_>>>15),_=w+(E^A&(O^E))+b[7]+4249261313&4294967295,w=A+(_<<22&4294967295|_>>>10),_=E+(O^w&(A^O))+b[8]+1770035416&4294967295,E=w+(_<<7&4294967295|_>>>25),_=O+(A^E&(w^A))+b[9]+2336552879&4294967295,O=E+(_<<12&4294967295|_>>>20),_=A+(w^O&(E^w))+b[10]+4294925233&4294967295,A=O+(_<<17&4294967295|_>>>15),_=w+(E^A&(O^E))+b[11]+2304563134&4294967295,w=A+(_<<22&4294967295|_>>>10),_=E+(O^w&(A^O))+b[12]+1804603682&4294967295,E=w+(_<<7&4294967295|_>>>25),_=O+(A^E&(w^A))+b[13]+4254626195&4294967295,O=E+(_<<12&4294967295|_>>>20),_=A+(w^O&(E^w))+b[14]+2792965006&4294967295,A=O+(_<<17&4294967295|_>>>15),_=w+(E^A&(O^E))+b[15]+1236535329&4294967295,w=A+(_<<22&4294967295|_>>>10),_=E+(A^O&(w^A))+b[1]+4129170786&4294967295,E=w+(_<<5&4294967295|_>>>27),_=O+(w^A&(E^w))+b[6]+3225465664&4294967295,O=E+(_<<9&4294967295|_>>>23),_=A+(E^w&(O^E))+b[11]+643717713&4294967295,A=O+(_<<14&4294967295|_>>>18),_=w+(O^E&(A^O))+b[0]+3921069994&4294967295,w=A+(_<<20&4294967295|_>>>12),_=E+(A^O&(w^A))+b[5]+3593408605&4294967295,E=w+(_<<5&4294967295|_>>>27),_=O+(w^A&(E^w))+b[10]+38016083&4294967295,O=E+(_<<9&4294967295|_>>>23),_=A+(E^w&(O^E))+b[15]+3634488961&4294967295,A=O+(_<<14&4294967295|_>>>18),_=w+(O^E&(A^O))+b[4]+3889429448&4294967295,w=A+(_<<20&4294967295|_>>>12),_=E+(A^O&(w^A))+b[9]+568446438&4294967295,E=w+(_<<5&4294967295|_>>>27),_=O+(w^A&(E^w))+b[14]+3275163606&4294967295,O=E+(_<<9&4294967295|_>>>23),_=A+(E^w&(O^E))+b[3]+4107603335&4294967295,A=O+(_<<14&4294967295|_>>>18),_=w+(O^E&(A^O))+b[8]+1163531501&4294967295,w=A+(_<<20&4294967295|_>>>12),_=E+(A^O&(w^A))+b[13]+2850285829&4294967295,E=w+(_<<5&4294967295|_>>>27),_=O+(w^A&(E^w))+b[2]+4243563512&4294967295,O=E+(_<<9&4294967295|_>>>23),_=A+(E^w&(O^E))+b[7]+1735328473&4294967295,A=O+(_<<14&4294967295|_>>>18),_=w+(O^E&(A^O))+b[12]+2368359562&4294967295,w=A+(_<<20&4294967295|_>>>12),_=E+(w^A^O)+b[5]+4294588738&4294967295,E=w+(_<<4&4294967295|_>>>28),_=O+(E^w^A)+b[8]+2272392833&4294967295,O=E+(_<<11&4294967295|_>>>21),_=A+(O^E^w)+b[11]+1839030562&4294967295,A=O+(_<<16&4294967295|_>>>16),_=w+(A^O^E)+b[14]+4259657740&4294967295,w=A+(_<<23&4294967295|_>>>9),_=E+(w^A^O)+b[1]+2763975236&4294967295,E=w+(_<<4&4294967295|_>>>28),_=O+(E^w^A)+b[4]+1272893353&4294967295,O=E+(_<<11&4294967295|_>>>21),_=A+(O^E^w)+b[7]+4139469664&4294967295,A=O+(_<<16&4294967295|_>>>16),_=w+(A^O^E)+b[10]+3200236656&4294967295,w=A+(_<<23&4294967295|_>>>9),_=E+(w^A^O)+b[13]+681279174&4294967295,E=w+(_<<4&4294967295|_>>>28),_=O+(E^w^A)+b[0]+3936430074&4294967295,O=E+(_<<11&4294967295|_>>>21),_=A+(O^E^w)+b[3]+3572445317&4294967295,A=O+(_<<16&4294967295|_>>>16),_=w+(A^O^E)+b[6]+76029189&4294967295,w=A+(_<<23&4294967295|_>>>9),_=E+(w^A^O)+b[9]+3654602809&4294967295,E=w+(_<<4&4294967295|_>>>28),_=O+(E^w^A)+b[12]+3873151461&4294967295,O=E+(_<<11&4294967295|_>>>21),_=A+(O^E^w)+b[15]+530742520&4294967295,A=O+(_<<16&4294967295|_>>>16),_=w+(A^O^E)+b[2]+3299628645&4294967295,w=A+(_<<23&4294967295|_>>>9),_=E+(A^(w|~O))+b[0]+4096336452&4294967295,E=w+(_<<6&4294967295|_>>>26),_=O+(w^(E|~A))+b[7]+1126891415&4294967295,O=E+(_<<10&4294967295|_>>>22),_=A+(E^(O|~w))+b[14]+2878612391&4294967295,A=O+(_<<15&4294967295|_>>>17),_=w+(O^(A|~E))+b[5]+4237533241&4294967295,w=A+(_<<21&4294967295|_>>>11),_=E+(A^(w|~O))+b[12]+1700485571&4294967295,E=w+(_<<6&4294967295|_>>>26),_=O+(w^(E|~A))+b[3]+2399980690&4294967295,O=E+(_<<10&4294967295|_>>>22),_=A+(E^(O|~w))+b[10]+4293915773&4294967295,A=O+(_<<15&4294967295|_>>>17),_=w+(O^(A|~E))+b[1]+2240044497&4294967295,w=A+(_<<21&4294967295|_>>>11),_=E+(A^(w|~O))+b[8]+1873313359&4294967295,E=w+(_<<6&4294967295|_>>>26),_=O+(w^(E|~A))+b[15]+4264355552&4294967295,O=E+(_<<10&4294967295|_>>>22),_=A+(E^(O|~w))+b[6]+2734768916&4294967295,A=O+(_<<15&4294967295|_>>>17),_=w+(O^(A|~E))+b[13]+1309151649&4294967295,w=A+(_<<21&4294967295|_>>>11),_=E+(A^(w|~O))+b[4]+4149444226&4294967295,E=w+(_<<6&4294967295|_>>>26),_=O+(w^(E|~A))+b[11]+3174756917&4294967295,O=E+(_<<10&4294967295|_>>>22),_=A+(E^(O|~w))+b[2]+718787259&4294967295,A=O+(_<<15&4294967295|_>>>17),_=w+(O^(A|~E))+b[9]+3951481745&4294967295,v.g[0]=v.g[0]+E&4294967295,v.g[1]=v.g[1]+(A+(_<<21&4294967295|_>>>11))&4294967295,v.g[2]=v.g[2]+A&4294967295,v.g[3]=v.g[3]+O&4294967295}s.prototype.v=function(v,E){E===void 0&&(E=v.length);const w=E-this.blockSize,b=this.C;let A=this.h,O=0;for(;O<E;){if(A==0)for(;O<=w;)r(this,v,O),O+=this.blockSize;if(typeof v=="string"){for(;O<E;)if(b[A++]=v.charCodeAt(O++),A==this.blockSize){r(this,b),A=0;break}}else for(;O<E;)if(b[A++]=v[O++],A==this.blockSize){r(this,b),A=0;break}}this.h=A,this.o+=E},s.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var E=1;E<v.length-8;++E)v[E]=0;E=this.o*8;for(var w=v.length-8;w<v.length;++w)v[w]=E&255,E/=256;for(this.v(v),v=Array(16),E=0,w=0;w<4;++w)for(let b=0;b<32;b+=8)v[E++]=this.g[w]>>>b&255;return v};function i(v,E){var w=a;return Object.prototype.hasOwnProperty.call(w,v)?w[v]:w[v]=E(v)}function o(v,E){this.h=E;const w=[];let b=!0;for(let A=v.length-1;A>=0;A--){const O=v[A]|0;b&&O==E||(w[A]=O,b=!1)}this.g=w}var a={};function l(v){return-128<=v&&v<128?i(v,function(E){return new o([E|0],E<0?-1:0)}):new o([v|0],v<0?-1:0)}function u(v){if(isNaN(v)||!isFinite(v))return d;if(v<0)return F(u(-v));const E=[];let w=1;for(let b=0;v>=w;b++)E[b]=v/w|0,w*=4294967296;return new o(E,0)}function h(v,E){if(v.length==0)throw Error("number format error: empty string");if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(v.charAt(0)=="-")return F(h(v.substring(1),E));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const w=u(Math.pow(E,8));let b=d;for(let O=0;O<v.length;O+=8){var A=Math.min(8,v.length-O);const _=parseInt(v.substring(O,O+A),E);A<8?(A=u(Math.pow(E,A)),b=b.j(A).add(u(_))):(b=b.j(w),b=b.add(u(_)))}return b}var d=l(0),p=l(1),D=l(16777216);n=o.prototype,n.m=function(){if(R(this))return-F(this).m();let v=0,E=1;for(let w=0;w<this.g.length;w++){const b=this.i(w);v+=(b>=0?b:4294967296+b)*E,E*=4294967296}return v},n.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(y(this))return"0";if(R(this))return"-"+F(this).toString(v);const E=u(Math.pow(v,6));var w=this;let b="";for(;;){const A=pe(w,E).g;w=G(w,A.j(E));let O=((w.g.length>0?w.g[0]:w.h)>>>0).toString(v);if(w=A,y(w))return O+b;for(;O.length<6;)O="0"+O;b=O+b}},n.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function y(v){if(v.h!=0)return!1;for(let E=0;E<v.g.length;E++)if(v.g[E]!=0)return!1;return!0}function R(v){return v.h==-1}n.l=function(v){return v=G(this,v),R(v)?-1:y(v)?0:1};function F(v){const E=v.g.length,w=[];for(let b=0;b<E;b++)w[b]=~v.g[b];return new o(w,~v.h).add(p)}n.abs=function(){return R(this)?F(this):this},n.add=function(v){const E=Math.max(this.g.length,v.g.length),w=[];let b=0;for(let A=0;A<=E;A++){let O=b+(this.i(A)&65535)+(v.i(A)&65535),_=(O>>>16)+(this.i(A)>>>16)+(v.i(A)>>>16);b=_>>>16,O&=65535,_&=65535,w[A]=_<<16|O}return new o(w,w[w.length-1]&-2147483648?-1:0)};function G(v,E){return v.add(F(E))}n.j=function(v){if(y(this)||y(v))return d;if(R(this))return R(v)?F(this).j(F(v)):F(F(this).j(v));if(R(v))return F(this.j(F(v)));if(this.l(D)<0&&v.l(D)<0)return u(this.m()*v.m());const E=this.g.length+v.g.length,w=[];for(var b=0;b<2*E;b++)w[b]=0;for(b=0;b<this.g.length;b++)for(let A=0;A<v.g.length;A++){const O=this.i(b)>>>16,_=this.i(b)&65535,ht=v.i(A)>>>16,hs=v.i(A)&65535;w[2*b+2*A]+=_*hs,K(w,2*b+2*A),w[2*b+2*A+1]+=O*hs,K(w,2*b+2*A+1),w[2*b+2*A+1]+=_*ht,K(w,2*b+2*A+1),w[2*b+2*A+2]+=O*ht,K(w,2*b+2*A+2)}for(v=0;v<E;v++)w[v]=w[2*v+1]<<16|w[2*v];for(v=E;v<2*E;v++)w[v]=0;return new o(w,0)};function K(v,E){for(;(v[E]&65535)!=v[E];)v[E+1]+=v[E]>>>16,v[E]&=65535,E++}function se(v,E){this.g=v,this.h=E}function pe(v,E){if(y(E))throw Error("division by zero");if(y(v))return new se(d,d);if(R(v))return E=pe(F(v),E),new se(F(E.g),F(E.h));if(R(E))return E=pe(v,F(E)),new se(F(E.g),E.h);if(v.g.length>30){if(R(v)||R(E))throw Error("slowDivide_ only works with positive integers.");for(var w=p,b=E;b.l(v)<=0;)w=ke(w),b=ke(b);var A=Te(w,1),O=Te(b,1);for(b=Te(b,2),w=Te(w,2);!y(b);){var _=O.add(b);_.l(v)<=0&&(A=A.add(w),O=_),b=Te(b,1),w=Te(w,1)}return E=G(v,A.j(E)),new se(A,E)}for(A=d;v.l(E)>=0;){for(w=Math.max(1,Math.floor(v.m()/E.m())),b=Math.ceil(Math.log(w)/Math.LN2),b=b<=48?1:Math.pow(2,b-48),O=u(w),_=O.j(E);R(_)||_.l(v)>0;)w-=b,O=u(w),_=O.j(E);y(O)&&(O=p),A=A.add(O),v=G(v,_)}return new se(A,v)}n.B=function(v){return pe(this,v).h},n.and=function(v){const E=Math.max(this.g.length,v.g.length),w=[];for(let b=0;b<E;b++)w[b]=this.i(b)&v.i(b);return new o(w,this.h&v.h)},n.or=function(v){const E=Math.max(this.g.length,v.g.length),w=[];for(let b=0;b<E;b++)w[b]=this.i(b)|v.i(b);return new o(w,this.h|v.h)},n.xor=function(v){const E=Math.max(this.g.length,v.g.length),w=[];for(let b=0;b<E;b++)w[b]=this.i(b)^v.i(b);return new o(w,this.h^v.h)};function ke(v){const E=v.g.length+1,w=[];for(let b=0;b<E;b++)w[b]=v.i(b)<<1|v.i(b-1)>>>31;return new o(w,v.h)}function Te(v,E){const w=E>>5;E%=32;const b=v.g.length-w,A=[];for(let O=0;O<b;O++)A[O]=E>0?v.i(O+w)>>>E|v.i(O+w+1)<<32-E:v.i(O+w);return new o(A,v.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,Gp=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,qn=o}).apply(typeof bf<"u"?bf:typeof self<"u"?self:typeof window<"u"?window:{});function Ye(n,e,t,s){if(t==="a"&&!s)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?n!==e||!s:!e.has(n))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?s:t==="a"?s.call(n):s?s.value:e.get(n)}var vo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Up,ni,Hp,Ko,Sl,$p,jp,qp;(function(){var n,e=Object.defineProperty;function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof vo=="object"&&vo];for(var B=0;B<c.length;++B){var f=c[B];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var s=t(this);function r(c,B){if(B)e:{var f=s;c=c.split(".");for(var C=0;C<c.length-1;C++){var S=c[C];if(!(S in f))break e;f=f[S]}c=c[c.length-1],C=f[c],B=B(C),B!=C&&B!=null&&e(f,c,{configurable:!0,writable:!0,value:B})}}r("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(c){return c||function(B){var f=[],C;for(C in B)Object.prototype.hasOwnProperty.call(B,C)&&f.push([C,B[C]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function a(c){var B=typeof c;return B=="object"&&c!=null||B=="function"}function l(c,B,f){return c.call.apply(c.bind,arguments)}function u(c,B,f){return u=l,u.apply(null,arguments)}function h(c,B){var f=Array.prototype.slice.call(arguments,1);return function(){var C=f.slice();return C.push.apply(C,arguments),c.apply(this,C)}}function d(c,B){function f(){}f.prototype=B.prototype,c.Z=B.prototype,c.prototype=new f,c.prototype.constructor=c,c.Ob=function(C,S,P){for(var j=Array(arguments.length-2),ce=2;ce<arguments.length;ce++)j[ce-2]=arguments[ce];return B.prototype[S].apply(C,j)}}var p=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function D(c){const B=c.length;if(B>0){const f=Array(B);for(let C=0;C<B;C++)f[C]=c[C];return f}return[]}function y(c,B){for(let C=1;C<arguments.length;C++){const S=arguments[C];var f=typeof S;if(f=f!="object"?f:S?Array.isArray(S)?"array":f:"null",f=="array"||f=="object"&&typeof S.length=="number"){f=c.length||0;const P=S.length||0;c.length=f+P;for(let j=0;j<P;j++)c[f+j]=S[j]}else c.push(S)}}class R{constructor(B,f){this.i=B,this.j=f,this.h=0,this.g=null}get(){let B;return this.h>0?(this.h--,B=this.g,this.g=B.next,B.next=null):B=this.i(),B}}function F(c){o.setTimeout(()=>{throw c},0)}function G(){var c=v;let B=null;return c.g&&(B=c.g,c.g=c.g.next,c.g||(c.h=null),B.next=null),B}class K{constructor(){this.h=this.g=null}add(B,f){const C=se.get();C.set(B,f),this.h?this.h.next=C:this.g=C,this.h=C}}var se=new R(()=>new pe,c=>c.reset());class pe{constructor(){this.next=this.g=this.h=null}set(B,f){this.h=B,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let ke,Te=!1,v=new K,E=()=>{const c=Promise.resolve(void 0);ke=()=>{c.then(w)}};function w(){for(var c;c=G();){try{c.h.call(c.g)}catch(f){F(f)}var B=se;B.j(c),B.h<100&&(B.h++,c.next=B.g,B.g=c)}Te=!1}function b(){this.u=this.u,this.C=this.C}b.prototype.u=!1,b.prototype.dispose=function(){this.u||(this.u=!0,this.N())},b.prototype[Symbol.dispose]=function(){this.dispose()},b.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function A(c,B){this.type=c,this.g=this.target=B,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var O=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var c=!1,B=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const f=()=>{};o.addEventListener("test",f,B),o.removeEventListener("test",f,B)}catch{}return c})();function _(c){return/^[\s\xa0]*$/.test(c)}function ht(c,B){A.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,B)}d(ht,A),ht.prototype.init=function(c,B){const f=this.type=c.type,C=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=B,B=c.relatedTarget,B||(f=="mouseover"?B=c.fromElement:f=="mouseout"&&(B=c.toElement)),this.relatedTarget=B,C?(this.clientX=C.clientX!==void 0?C.clientX:C.pageX,this.clientY=C.clientY!==void 0?C.clientY:C.pageY,this.screenX=C.screenX||0,this.screenY=C.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&ht.Z.h.call(this)},ht.prototype.h=function(){ht.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var hs="closure_listenable_"+(Math.random()*1e6|0),vE=0;function bE(c,B,f,C,S){this.listener=c,this.proxy=null,this.src=B,this.type=f,this.capture=!!C,this.ha=S,this.key=++vE,this.da=this.fa=!1}function io(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function oo(c,B,f){for(const C in c)B.call(f,c[C],C,c)}function RE(c,B){for(const f in c)B.call(void 0,c[f],f,c)}function NB(c){const B={};for(const f in c)B[f]=c[f];return B}const FB="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function LB(c,B){let f,C;for(let S=1;S<arguments.length;S++){C=arguments[S];for(f in C)c[f]=C[f];for(let P=0;P<FB.length;P++)f=FB[P],Object.prototype.hasOwnProperty.call(C,f)&&(c[f]=C[f])}}function ao(c){this.src=c,this.g={},this.h=0}ao.prototype.add=function(c,B,f,C,S){const P=c.toString();c=this.g[P],c||(c=this.g[P]=[],this.h++);const j=dc(c,B,C,S);return j>-1?(B=c[j],f||(B.fa=!1)):(B=new bE(B,this.src,P,!!C,S),B.fa=f,c.push(B)),B};function fc(c,B){const f=B.type;if(f in c.g){var C=c.g[f],S=Array.prototype.indexOf.call(C,B,void 0),P;(P=S>=0)&&Array.prototype.splice.call(C,S,1),P&&(io(B),c.g[f].length==0&&(delete c.g[f],c.h--))}}function dc(c,B,f,C){for(let S=0;S<c.length;++S){const P=c[S];if(!P.da&&P.listener==B&&P.capture==!!f&&P.ha==C)return S}return-1}var Cc="closure_lm_"+(Math.random()*1e6|0),pc={};function kB(c,B,f,C,S){if(Array.isArray(B)){for(let P=0;P<B.length;P++)kB(c,B[P],f,C,S);return null}return f=VB(f),c&&c[hs]?c.J(B,f,a(C)?!!C.capture:!1,S):SE(c,B,f,!1,C,S)}function SE(c,B,f,C,S,P){if(!B)throw Error("Invalid event type");const j=a(S)?!!S.capture:!!S;let ce=mc(c);if(ce||(c[Cc]=ce=new ao(c)),f=ce.add(B,f,C,j,P),f.proxy)return f;if(C=OE(),f.proxy=C,C.src=c,C.listener=f,c.addEventListener)O||(S=j),S===void 0&&(S=!1),c.addEventListener(B.toString(),C,S);else if(c.attachEvent)c.attachEvent(MB(B.toString()),C);else if(c.addListener&&c.removeListener)c.addListener(C);else throw Error("addEventListener and attachEvent are unavailable.");return f}function OE(){function c(f){return B.call(c.src,c.listener,f)}const B=PE;return c}function xB(c,B,f,C,S){if(Array.isArray(B))for(var P=0;P<B.length;P++)xB(c,B[P],f,C,S);else C=a(C)?!!C.capture:!!C,f=VB(f),c&&c[hs]?(c=c.i,P=String(B).toString(),P in c.g&&(B=c.g[P],f=dc(B,f,C,S),f>-1&&(io(B[f]),Array.prototype.splice.call(B,f,1),B.length==0&&(delete c.g[P],c.h--)))):c&&(c=mc(c))&&(B=c.g[B.toString()],c=-1,B&&(c=dc(B,f,C,S)),(f=c>-1?B[c]:null)&&gc(f))}function gc(c){if(typeof c!="number"&&c&&!c.da){var B=c.src;if(B&&B[hs])fc(B.i,c);else{var f=c.type,C=c.proxy;B.removeEventListener?B.removeEventListener(f,C,c.capture):B.detachEvent?B.detachEvent(MB(f),C):B.addListener&&B.removeListener&&B.removeListener(C),(f=mc(B))?(fc(f,c),f.h==0&&(f.src=null,B[Cc]=null)):io(c)}}}function MB(c){return c in pc?pc[c]:pc[c]="on"+c}function PE(c,B){if(c.da)c=!0;else{B=new ht(B,this);const f=c.listener,C=c.ha||c.src;c.fa&&gc(c),c=f.call(C,B)}return c}function mc(c){return c=c[Cc],c instanceof ao?c:null}var Ec="__closure_events_fn_"+(Math.random()*1e9>>>0);function VB(c){return typeof c=="function"?c:(c[Ec]||(c[Ec]=function(B){return c.handleEvent(B)}),c[Ec])}function Ze(){b.call(this),this.i=new ao(this),this.M=this,this.G=null}d(Ze,b),Ze.prototype[hs]=!0,Ze.prototype.removeEventListener=function(c,B,f,C){xB(this,c,B,f,C)};function at(c,B){var f,C=c.G;if(C)for(f=[];C;C=C.G)f.push(C);if(c=c.M,C=B.type||B,typeof B=="string")B=new A(B,c);else if(B instanceof A)B.target=B.target||c;else{var S=B;B=new A(C,c),LB(B,S)}S=!0;let P,j;if(f)for(j=f.length-1;j>=0;j--)P=B.g=f[j],S=co(P,C,!0,B)&&S;if(P=B.g=c,S=co(P,C,!0,B)&&S,S=co(P,C,!1,B)&&S,f)for(j=0;j<f.length;j++)P=B.g=f[j],S=co(P,C,!1,B)&&S}Ze.prototype.N=function(){if(Ze.Z.N.call(this),this.i){var c=this.i;for(const B in c.g){const f=c.g[B];for(let C=0;C<f.length;C++)io(f[C]);delete c.g[B],c.h--}}this.G=null},Ze.prototype.J=function(c,B,f,C){return this.i.add(String(c),B,!1,f,C)},Ze.prototype.K=function(c,B,f,C){return this.i.add(String(c),B,!0,f,C)};function co(c,B,f,C){if(B=c.i.g[String(B)],!B)return!0;B=B.concat();let S=!0;for(let P=0;P<B.length;++P){const j=B[P];if(j&&!j.da&&j.capture==f){const ce=j.listener,xe=j.ha||j.src;j.fa&&fc(c.i,j),S=ce.call(xe,C)!==!1&&S}}return S&&!C.defaultPrevented}function NE(c,B){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=u(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(B)>2147483647?-1:o.setTimeout(c,B||0)}function GB(c){c.g=NE(()=>{c.g=null,c.i&&(c.i=!1,GB(c))},c.l);const B=c.h;c.h=null,c.m.apply(null,B)}class FE extends b{constructor(B,f){super(),this.m=B,this.l=f,this.h=null,this.i=!1,this.g=null}j(B){this.h=arguments,this.g?this.i=!0:GB(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Lr(c){b.call(this),this.h=c,this.g={}}d(Lr,b);var UB=[];function HB(c){oo(c.g,function(B,f){this.g.hasOwnProperty(f)&&gc(B)},c),c.g={}}Lr.prototype.N=function(){Lr.Z.N.call(this),HB(this)},Lr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var _c=o.JSON.stringify,LE=o.JSON.parse,kE=class{stringify(c){return o.JSON.stringify(c,void 0)}parse(c){return o.JSON.parse(c,void 0)}};function $B(){}function jB(){}var kr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Dc(){A.call(this,"d")}d(Dc,A);function yc(){A.call(this,"c")}d(yc,A);var fs={},qB=null;function lo(){return qB=qB||new Ze}fs.Ia="serverreachability";function JB(c){A.call(this,fs.Ia,c)}d(JB,A);function xr(c){const B=lo();at(B,new JB(B))}fs.STAT_EVENT="statevent";function KB(c,B){A.call(this,fs.STAT_EVENT,c),this.stat=B}d(KB,A);function ct(c){const B=lo();at(B,new KB(B,c))}fs.Ja="timingevent";function zB(c,B){A.call(this,fs.Ja,c),this.size=B}d(zB,A);function Mr(c,B){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){c()},B)}function Vr(){this.g=!0}Vr.prototype.ua=function(){this.g=!1};function xE(c,B,f,C,S,P){c.info(function(){if(c.g)if(P){var j="",ce=P.split("&");for(let Ee=0;Ee<ce.length;Ee++){var xe=ce[Ee].split("=");if(xe.length>1){const He=xe[0];xe=xe[1];const Kt=He.split("_");j=Kt.length>=2&&Kt[1]=="type"?j+(He+"="+xe+"&"):j+(He+"=redacted&")}}}else j=null;else j=P;return"XMLHTTP REQ ("+C+") [attempt "+S+"]: "+B+`
`+f+`
`+j})}function ME(c,B,f,C,S,P,j){c.info(function(){return"XMLHTTP RESP ("+C+") [ attempt "+S+"]: "+B+`
`+f+`
`+P+" "+j})}function Js(c,B,f,C){c.info(function(){return"XMLHTTP TEXT ("+B+"): "+GE(c,f)+(C?" "+C:"")})}function VE(c,B){c.info(function(){return"TIMEOUT: "+B})}Vr.prototype.info=function(){};function GE(c,B){if(!c.g)return B;if(!B)return null;try{const P=JSON.parse(B);if(P){for(c=0;c<P.length;c++)if(Array.isArray(P[c])){var f=P[c];if(!(f.length<2)){var C=f[1];if(Array.isArray(C)&&!(C.length<1)){var S=C[0];if(S!="noop"&&S!="stop"&&S!="close")for(let j=1;j<C.length;j++)C[j]=""}}}}return _c(P)}catch{return B}}var uo={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},WB={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},YB;function wc(){}d(wc,$B),wc.prototype.g=function(){return new XMLHttpRequest},YB=new wc;function Gr(c){return encodeURIComponent(String(c))}function UE(c){var B=1;c=c.split(":");const f=[];for(;B>0&&c.length;)f.push(c.shift()),B--;return c.length&&f.push(c.join(":")),f}function bn(c,B,f,C){this.j=c,this.i=B,this.l=f,this.S=C||1,this.V=new Lr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new QB}function QB(){this.i=null,this.g="",this.h=!1}var XB={},Ic={};function Tc(c,B,f){c.M=1,c.A=ho(Jt(B)),c.u=f,c.R=!0,ZB(c,null)}function ZB(c,B){c.F=Date.now(),Bo(c),c.B=Jt(c.A);var f=c.B,C=c.S;Array.isArray(C)||(C=[String(C)]),hh(f.i,"t",C),c.C=0,f=c.j.L,c.h=new QB,c.g=Sh(c.j,f?B:null,!c.u),c.P>0&&(c.O=new FE(u(c.Y,c,c.g),c.P)),B=c.V,f=c.g,C=c.ba;var S="readystatechange";Array.isArray(S)||(S&&(UB[0]=S.toString()),S=UB);for(let P=0;P<S.length;P++){const j=kB(f,S[P],C||B.handleEvent,!1,B.h||B);if(!j)break;B.g[j.key]=j}B=c.J?NB(c.J):{},c.u?(c.v||(c.v="POST"),B["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,B)):(c.v="GET",c.g.ea(c.B,c.v,null,B)),xr(),xE(c.i,c.v,c.B,c.l,c.S,c.u)}bn.prototype.ba=function(c){c=c.target;const B=this.O;B&&On(c)==3?B.j():this.Y(c)},bn.prototype.Y=function(c){try{if(c==this.g)e:{const ce=On(this.g),xe=this.g.ya(),Ee=this.g.ca();if(!(ce<3)&&(ce!=3||this.g&&(this.h.h||this.g.la()||Eh(this.g)))){this.K||ce!=4||xe==7||(xe==8||Ee<=0?xr(3):xr(2)),Ac(this);var B=this.g.ca();this.X=B;var f=HE(this);if(this.o=B==200,ME(this.i,this.v,this.B,this.l,this.S,ce,B),this.o){if(this.U&&!this.L){t:{if(this.g){var C,S=this.g;if((C=S.g?S.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(C)){var P=C;break t}}P=null}if(c=P)Js(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,vc(this,c);else{this.o=!1,this.m=3,ct(12),ds(this),Ur(this);break e}}if(this.R){c=!0;let He;for(;!this.K&&this.C<f.length;)if(He=$E(this,f),He==Ic){ce==4&&(this.m=4,ct(14),c=!1),Js(this.i,this.l,null,"[Incomplete Response]");break}else if(He==XB){this.m=4,ct(15),Js(this.i,this.l,f,"[Invalid Chunk]"),c=!1;break}else Js(this.i,this.l,He,null),vc(this,He);if(eh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ce!=4||f.length!=0||this.h.h||(this.m=1,ct(16),c=!1),this.o=this.o&&c,!c)Js(this.i,this.l,f,"[Invalid Chunked Response]"),ds(this),Ur(this);else if(f.length>0&&!this.W){this.W=!0;var j=this.j;j.g==this&&j.aa&&!j.P&&(j.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),Lc(j),j.P=!0,ct(11))}}else Js(this.i,this.l,f,null),vc(this,f);ce==4&&ds(this),this.o&&!this.K&&(ce==4?Ah(this.j,this):(this.o=!1,Bo(this)))}else s_(this.g),B==400&&f.indexOf("Unknown SID")>0?(this.m=3,ct(12)):(this.m=0,ct(13)),ds(this),Ur(this)}}}catch{}finally{}};function HE(c){if(!eh(c))return c.g.la();const B=Eh(c.g);if(B==="")return"";let f="";const C=B.length,S=On(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return ds(c),Ur(c),"";c.h.i=new o.TextDecoder}for(let P=0;P<C;P++)c.h.h=!0,f+=c.h.i.decode(B[P],{stream:!(S&&P==C-1)});return B.length=0,c.h.g+=f,c.C=0,c.h.g}function eh(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function $E(c,B){var f=c.C,C=B.indexOf(`
`,f);return C==-1?Ic:(f=Number(B.substring(f,C)),isNaN(f)?XB:(C+=1,C+f>B.length?Ic:(B=B.slice(C,C+f),c.C=C+f,B)))}bn.prototype.cancel=function(){this.K=!0,ds(this)};function Bo(c){c.T=Date.now()+c.H,th(c,c.H)}function th(c,B){if(c.D!=null)throw Error("WatchDog timer not null");c.D=Mr(u(c.aa,c),B)}function Ac(c){c.D&&(o.clearTimeout(c.D),c.D=null)}bn.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(VE(this.i,this.B),this.M!=2&&(xr(),ct(17)),ds(this),this.m=2,Ur(this)):th(this,this.T-c)};function Ur(c){c.j.I==0||c.K||Ah(c.j,c)}function ds(c){Ac(c);var B=c.O;B&&typeof B.dispose=="function"&&B.dispose(),c.O=null,HB(c.V),c.g&&(B=c.g,c.g=null,B.abort(),B.dispose())}function vc(c,B){try{var f=c.j;if(f.I!=0&&(f.g==c||bc(f.h,c))){if(!c.L&&bc(f.h,c)&&f.I==3){try{var C=f.Ba.g.parse(B)}catch{C=null}if(Array.isArray(C)&&C.length==3){var S=C;if(S[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<c.F)mo(f),po(f);else break e;Fc(f),ct(18)}}else f.xa=S[1],0<f.xa-f.K&&S[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=Mr(u(f.Va,f),6e3));rh(f.h)<=1&&f.ta&&(f.ta=void 0)}else ps(f,11)}else if((c.L||f.g==c)&&mo(f),!_(B))for(S=f.Ba.g.parse(B),B=0;B<S.length;B++){let Ee=S[B];const He=Ee[0];if(!(He<=f.K))if(f.K=He,Ee=Ee[1],f.I==2)if(Ee[0]=="c"){f.M=Ee[1],f.ba=Ee[2];const Kt=Ee[3];Kt!=null&&(f.ka=Kt,f.j.info("VER="+f.ka));const gs=Ee[4];gs!=null&&(f.za=gs,f.j.info("SVER="+f.za));const Pn=Ee[5];Pn!=null&&typeof Pn=="number"&&Pn>0&&(C=1.5*Pn,f.O=C,f.j.info("backChannelRequestTimeoutMs_="+C)),C=f;const Nn=c.g;if(Nn){const _o=Nn.g?Nn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_o){var P=C.h;P.g||_o.indexOf("spdy")==-1&&_o.indexOf("quic")==-1&&_o.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(Rc(P,P.h),P.h=null))}if(C.G){const kc=Nn.g?Nn.g.getResponseHeader("X-HTTP-Session-Id"):null;kc&&(C.wa=kc,ye(C.J,C.G,kc))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-c.F,f.j.info("Handshake RTT: "+f.T+"ms")),C=f;var j=c;if(C.na=Rh(C,C.L?C.ba:null,C.W),j.L){ih(C.h,j);var ce=j,xe=C.O;xe&&(ce.H=xe),ce.D&&(Ac(ce),Bo(ce)),C.g=j}else Ih(C);f.i.length>0&&go(f)}else Ee[0]!="stop"&&Ee[0]!="close"||ps(f,7);else f.I==3&&(Ee[0]=="stop"||Ee[0]=="close"?Ee[0]=="stop"?ps(f,7):Nc(f):Ee[0]!="noop"&&f.l&&f.l.qa(Ee),f.A=0)}}xr(4)}catch{}}var jE=class{constructor(c,B){this.g=c,this.map=B}};function nh(c){this.l=c||10,o.PerformanceNavigationTiming?(c=o.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function sh(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function rh(c){return c.h?1:c.g?c.g.size:0}function bc(c,B){return c.h?c.h==B:c.g?c.g.has(B):!1}function Rc(c,B){c.g?c.g.add(B):c.h=B}function ih(c,B){c.h&&c.h==B?c.h=null:c.g&&c.g.has(B)&&c.g.delete(B)}nh.prototype.cancel=function(){if(this.i=oh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function oh(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let B=c.i;for(const f of c.g.values())B=B.concat(f.G);return B}return D(c.i)}var ah=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function qE(c,B){if(c){c=c.split("&");for(let f=0;f<c.length;f++){const C=c[f].indexOf("=");let S,P=null;C>=0?(S=c[f].substring(0,C),P=c[f].substring(C+1)):S=c[f],B(S,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function Rn(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let B;c instanceof Rn?(this.l=c.l,Hr(this,c.j),this.o=c.o,this.g=c.g,$r(this,c.u),this.h=c.h,Sc(this,fh(c.i)),this.m=c.m):c&&(B=String(c).match(ah))?(this.l=!1,Hr(this,B[1]||"",!0),this.o=jr(B[2]||""),this.g=jr(B[3]||"",!0),$r(this,B[4]),this.h=jr(B[5]||"",!0),Sc(this,B[6]||"",!0),this.m=jr(B[7]||"")):(this.l=!1,this.i=new Jr(null,this.l))}Rn.prototype.toString=function(){const c=[];var B=this.j;B&&c.push(qr(B,ch,!0),":");var f=this.g;return(f||B=="file")&&(c.push("//"),(B=this.o)&&c.push(qr(B,ch,!0),"@"),c.push(Gr(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&c.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&c.push("/"),c.push(qr(f,f.charAt(0)=="/"?zE:KE,!0))),(f=this.i.toString())&&c.push("?",f),(f=this.m)&&c.push("#",qr(f,YE)),c.join("")},Rn.prototype.resolve=function(c){const B=Jt(this);let f=!!c.j;f?Hr(B,c.j):f=!!c.o,f?B.o=c.o:f=!!c.g,f?B.g=c.g:f=c.u!=null;var C=c.h;if(f)$r(B,c.u);else if(f=!!c.h){if(C.charAt(0)!="/")if(this.g&&!this.h)C="/"+C;else{var S=B.h.lastIndexOf("/");S!=-1&&(C=B.h.slice(0,S+1)+C)}if(S=C,S==".."||S==".")C="";else if(S.indexOf("./")!=-1||S.indexOf("/.")!=-1){C=S.lastIndexOf("/",0)==0,S=S.split("/");const P=[];for(let j=0;j<S.length;){const ce=S[j++];ce=="."?C&&j==S.length&&P.push(""):ce==".."?((P.length>1||P.length==1&&P[0]!="")&&P.pop(),C&&j==S.length&&P.push("")):(P.push(ce),C=!0)}C=P.join("/")}else C=S}return f?B.h=C:f=c.i.toString()!=="",f?Sc(B,fh(c.i)):f=!!c.m,f&&(B.m=c.m),B};function Jt(c){return new Rn(c)}function Hr(c,B,f){c.j=f?jr(B,!0):B,c.j&&(c.j=c.j.replace(/:$/,""))}function $r(c,B){if(B){if(B=Number(B),isNaN(B)||B<0)throw Error("Bad port number "+B);c.u=B}else c.u=null}function Sc(c,B,f){B instanceof Jr?(c.i=B,QE(c.i,c.l)):(f||(B=qr(B,WE)),c.i=new Jr(B,c.l))}function ye(c,B,f){c.i.set(B,f)}function ho(c){return ye(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function jr(c,B){return c?B?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function qr(c,B,f){return typeof c=="string"?(c=encodeURI(c).replace(B,JE),f&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function JE(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var ch=/[#\/\?@]/g,KE=/[#\?:]/g,zE=/[#\?]/g,WE=/[#\?@]/g,YE=/#/g;function Jr(c,B){this.h=this.g=null,this.i=c||null,this.j=!!B}function Cs(c){c.g||(c.g=new Map,c.h=0,c.i&&qE(c.i,function(B,f){c.add(decodeURIComponent(B.replace(/\+/g," ")),f)}))}n=Jr.prototype,n.add=function(c,B){Cs(this),this.i=null,c=Ks(this,c);let f=this.g.get(c);return f||this.g.set(c,f=[]),f.push(B),this.h+=1,this};function lh(c,B){Cs(c),B=Ks(c,B),c.g.has(B)&&(c.i=null,c.h-=c.g.get(B).length,c.g.delete(B))}function uh(c,B){return Cs(c),B=Ks(c,B),c.g.has(B)}n.forEach=function(c,B){Cs(this),this.g.forEach(function(f,C){f.forEach(function(S){c.call(B,S,C,this)},this)},this)};function Bh(c,B){Cs(c);let f=[];if(typeof B=="string")uh(c,B)&&(f=f.concat(c.g.get(Ks(c,B))));else for(c=Array.from(c.g.values()),B=0;B<c.length;B++)f=f.concat(c[B]);return f}n.set=function(c,B){return Cs(this),this.i=null,c=Ks(this,c),uh(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[B]),this.h+=1,this},n.get=function(c,B){return c?(c=Bh(this,c),c.length>0?String(c[0]):B):B};function hh(c,B,f){lh(c,B),f.length>0&&(c.i=null,c.g.set(Ks(c,B),D(f)),c.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],B=Array.from(this.g.keys());for(let C=0;C<B.length;C++){var f=B[C];const S=Gr(f);f=Bh(this,f);for(let P=0;P<f.length;P++){let j=S;f[P]!==""&&(j+="="+Gr(f[P])),c.push(j)}}return this.i=c.join("&")};function fh(c){const B=new Jr;return B.i=c.i,c.g&&(B.g=new Map(c.g),B.h=c.h),B}function Ks(c,B){return B=String(B),c.j&&(B=B.toLowerCase()),B}function QE(c,B){B&&!c.j&&(Cs(c),c.i=null,c.g.forEach(function(f,C){const S=C.toLowerCase();C!=S&&(lh(this,C),hh(this,S,f))},c)),c.j=B}function XE(c,B){const f=new Vr;if(o.Image){const C=new Image;C.onload=h(Sn,f,"TestLoadImage: loaded",!0,B,C),C.onerror=h(Sn,f,"TestLoadImage: error",!1,B,C),C.onabort=h(Sn,f,"TestLoadImage: abort",!1,B,C),C.ontimeout=h(Sn,f,"TestLoadImage: timeout",!1,B,C),o.setTimeout(function(){C.ontimeout&&C.ontimeout()},1e4),C.src=c}else B(!1)}function ZE(c,B){const f=new Vr,C=new AbortController,S=setTimeout(()=>{C.abort(),Sn(f,"TestPingServer: timeout",!1,B)},1e4);fetch(c,{signal:C.signal}).then(P=>{clearTimeout(S),P.ok?Sn(f,"TestPingServer: ok",!0,B):Sn(f,"TestPingServer: server error",!1,B)}).catch(()=>{clearTimeout(S),Sn(f,"TestPingServer: error",!1,B)})}function Sn(c,B,f,C,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),C(f)}catch{}}function e_(){this.g=new kE}function Oc(c){this.i=c.Sb||null,this.h=c.ab||!1}d(Oc,$B),Oc.prototype.g=function(){return new fo(this.i,this.h)};function fo(c,B){Ze.call(this),this.H=c,this.o=B,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}d(fo,Ze),n=fo.prototype,n.open=function(c,B){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=B,this.readyState=1,zr(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const B={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(B.body=c),(this.H||o).fetch(new Request(this.D,B)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Kr(this)),this.readyState=0},n.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,zr(this)),this.g&&(this.readyState=3,zr(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;dh(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function dh(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}n.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var B=c.value?c.value:new Uint8Array(0);(B=this.B.decode(B,{stream:!c.done}))&&(this.response=this.responseText+=B)}c.done?Kr(this):zr(this),this.readyState==3&&dh(this)}},n.Oa=function(c){this.g&&(this.response=this.responseText=c,Kr(this))},n.Na=function(c){this.g&&(this.response=c,Kr(this))},n.ga=function(){this.g&&Kr(this)};function Kr(c){c.readyState=4,c.l=null,c.j=null,c.B=null,zr(c)}n.setRequestHeader=function(c,B){this.A.append(c,B)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],B=this.h.entries();for(var f=B.next();!f.done;)f=f.value,c.push(f[0]+": "+f[1]),f=B.next();return c.join(`\r
`)};function zr(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(fo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Ch(c){let B="";return oo(c,function(f,C){B+=C,B+=":",B+=f,B+=`\r
`}),B}function Pc(c,B,f){e:{for(C in f){var C=!1;break e}C=!0}C||(f=Ch(f),typeof c=="string"?f!=null&&Gr(f):ye(c,B,f))}function ve(c){Ze.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}d(ve,Ze);var t_=/^https?$/i,n_=["POST","PUT"];n=ve.prototype,n.Fa=function(c){this.H=c},n.ea=function(c,B,f,C){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);B=B?B.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():YB.g(),this.g.onreadystatechange=p(u(this.Ca,this));try{this.B=!0,this.g.open(B,String(c),!0),this.B=!1}catch(P){ph(this,P);return}if(c=f||"",f=new Map(this.headers),C)if(Object.getPrototypeOf(C)===Object.prototype)for(var S in C)f.set(S,C[S]);else if(typeof C.keys=="function"&&typeof C.get=="function")for(const P of C.keys())f.set(P,C.get(P));else throw Error("Unknown input type for opt_headers: "+String(C));C=Array.from(f.keys()).find(P=>P.toLowerCase()=="content-type"),S=o.FormData&&c instanceof o.FormData,!(Array.prototype.indexOf.call(n_,B,void 0)>=0)||C||S||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,j]of f)this.g.setRequestHeader(P,j);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(P){ph(this,P)}};function ph(c,B){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=B,c.o=5,gh(c),Co(c)}function gh(c){c.A||(c.A=!0,at(c,"complete"),at(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,at(this,"complete"),at(this,"abort"),Co(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Co(this,!0)),ve.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?mh(this):this.Xa())},n.Xa=function(){mh(this)};function mh(c){if(c.h&&typeof i<"u"){if(c.v&&On(c)==4)setTimeout(c.Ca.bind(c),0);else if(at(c,"readystatechange"),On(c)==4){c.h=!1;try{const P=c.ca();e:switch(P){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var B=!0;break e;default:B=!1}var f;if(!(f=B)){var C;if(C=P===0){let j=String(c.D).match(ah)[1]||null;!j&&o.self&&o.self.location&&(j=o.self.location.protocol.slice(0,-1)),C=!t_.test(j?j.toLowerCase():"")}f=C}if(f)at(c,"complete"),at(c,"success");else{c.o=6;try{var S=On(c)>2?c.g.statusText:""}catch{S=""}c.l=S+" ["+c.ca()+"]",gh(c)}}finally{Co(c)}}}}function Co(c,B){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const f=c.g;c.g=null,B||at(c,"ready");try{f.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function On(c){return c.g?c.g.readyState:0}n.ca=function(){try{return On(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(c){if(this.g){var B=this.g.responseText;return c&&B.indexOf(c)==0&&(B=B.substring(c.length)),LE(B)}};function Eh(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function s_(c){const B={};c=(c.g&&On(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let C=0;C<c.length;C++){if(_(c[C]))continue;var f=UE(c[C]);const S=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const P=B[S]||[];B[S]=P,P.push(f)}RE(B,function(C){return C.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Wr(c,B,f){return f&&f.internalChannelParams&&f.internalChannelParams[c]||B}function _h(c){this.za=0,this.i=[],this.j=new Vr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Wr("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Wr("baseRetryDelayMs",5e3,c),this.Za=Wr("retryDelaySeedMs",1e4,c),this.Ta=Wr("forwardChannelMaxRetries",2,c),this.va=Wr("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new nh(c&&c.concurrentRequestLimit),this.Ba=new e_,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=_h.prototype,n.ka=8,n.I=1,n.connect=function(c,B,f,C){ct(0),this.W=c,this.H=B||{},f&&C!==void 0&&(this.H.OSID=f,this.H.OAID=C),this.F=this.X,this.J=Rh(this,null,this.W),go(this)};function Nc(c){if(Dh(c),c.I==3){var B=c.V++,f=Jt(c.J);if(ye(f,"SID",c.M),ye(f,"RID",B),ye(f,"TYPE","terminate"),Yr(c,f),B=new bn(c,c.j,B),B.M=2,B.A=ho(Jt(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(B.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=B.A,f=!0),f||(B.g=Sh(B.j,null),B.g.ea(B.A)),B.F=Date.now(),Bo(B)}bh(c)}function po(c){c.g&&(Lc(c),c.g.cancel(),c.g=null)}function Dh(c){po(c),c.v&&(o.clearTimeout(c.v),c.v=null),mo(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&o.clearTimeout(c.m),c.m=null)}function go(c){if(!sh(c.h)&&!c.m){c.m=!0;var B=c.Ea;ke||E(),Te||(ke(),Te=!0),v.add(B,c),c.D=0}}function r_(c,B){return rh(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=B.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=Mr(u(c.Ea,c,B),vh(c,c.D)),c.D++,!0)}n.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const S=new bn(this,this.j,c);let P=this.o;if(this.U&&(P?(P=NB(P),LB(P,this.U)):P=this.U),this.u!==null||this.R||(S.J=P,P=null),this.S)e:{for(var B=0,f=0;f<this.i.length;f++){t:{var C=this.i[f];if("__data__"in C.map&&(C=C.map.__data__,typeof C=="string")){C=C.length;break t}C=void 0}if(C===void 0)break;if(B+=C,B>4096){B=f;break e}if(B===4096||f===this.i.length-1){B=f+1;break e}}B=1e3}else B=1e3;B=wh(this,S,B),f=Jt(this.J),ye(f,"RID",c),ye(f,"CVER",22),this.G&&ye(f,"X-HTTP-Session-Id",this.G),Yr(this,f),P&&(this.R?B="headers="+Gr(Ch(P))+"&"+B:this.u&&Pc(f,this.u,P)),Rc(this.h,S),this.Ra&&ye(f,"TYPE","init"),this.S?(ye(f,"$req",B),ye(f,"SID","null"),S.U=!0,Tc(S,f,null)):Tc(S,f,B),this.I=2}}else this.I==3&&(c?yh(this,c):this.i.length==0||sh(this.h)||yh(this))};function yh(c,B){var f;B?f=B.l:f=c.V++;const C=Jt(c.J);ye(C,"SID",c.M),ye(C,"RID",f),ye(C,"AID",c.K),Yr(c,C),c.u&&c.o&&Pc(C,c.u,c.o),f=new bn(c,c.j,f,c.D+1),c.u===null&&(f.J=c.o),B&&(c.i=B.G.concat(c.i)),B=wh(c,f,1e3),f.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),Rc(c.h,f),Tc(f,C,B)}function Yr(c,B){c.H&&oo(c.H,function(f,C){ye(B,C,f)}),c.l&&oo({},function(f,C){ye(B,C,f)})}function wh(c,B,f){f=Math.min(c.i.length,f);const C=c.l?u(c.l.Ka,c.l,c):null;e:{var S=c.i;let ce=-1;for(;;){const xe=["count="+f];ce==-1?f>0?(ce=S[0].g,xe.push("ofs="+ce)):ce=0:xe.push("ofs="+ce);let Ee=!0;for(let He=0;He<f;He++){var P=S[He].g;const Kt=S[He].map;if(P-=ce,P<0)ce=Math.max(0,S[He].g-100),Ee=!1;else try{P="req"+P+"_"||"";try{var j=Kt instanceof Map?Kt:Object.entries(Kt);for(const[gs,Pn]of j){let Nn=Pn;a(Pn)&&(Nn=_c(Pn)),xe.push(P+gs+"="+encodeURIComponent(Nn))}}catch(gs){throw xe.push(P+"type="+encodeURIComponent("_badmap")),gs}}catch{C&&C(Kt)}}if(Ee){j=xe.join("&");break e}}j=void 0}return c=c.i.splice(0,f),B.G=c,j}function Ih(c){if(!c.g&&!c.v){c.Y=1;var B=c.Da;ke||E(),Te||(ke(),Te=!0),v.add(B,c),c.A=0}}function Fc(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=Mr(u(c.Da,c),vh(c,c.A)),c.A++,!0)}n.Da=function(){if(this.v=null,Th(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=Mr(u(this.Wa,this),c)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ct(10),po(this),Th(this))};function Lc(c){c.B!=null&&(o.clearTimeout(c.B),c.B=null)}function Th(c){c.g=new bn(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var B=Jt(c.na);ye(B,"RID","rpc"),ye(B,"SID",c.M),ye(B,"AID",c.K),ye(B,"CI",c.F?"0":"1"),!c.F&&c.ia&&ye(B,"TO",c.ia),ye(B,"TYPE","xmlhttp"),Yr(c,B),c.u&&c.o&&Pc(B,c.u,c.o),c.O&&(c.g.H=c.O);var f=c.g;c=c.ba,f.M=1,f.A=ho(Jt(B)),f.u=null,f.R=!0,ZB(f,c)}n.Va=function(){this.C!=null&&(this.C=null,po(this),Fc(this),ct(19))};function mo(c){c.C!=null&&(o.clearTimeout(c.C),c.C=null)}function Ah(c,B){var f=null;if(c.g==B){mo(c),Lc(c),c.g=null;var C=2}else if(bc(c.h,B))f=B.G,ih(c.h,B),C=1;else return;if(c.I!=0){if(B.o)if(C==1){f=B.u?B.u.length:0,B=Date.now()-B.F;var S=c.D;C=lo(),at(C,new zB(C,f)),go(c)}else Ih(c);else if(S=B.m,S==3||S==0&&B.X>0||!(C==1&&r_(c,B)||C==2&&Fc(c)))switch(f&&f.length>0&&(B=c.h,B.i=B.i.concat(f)),S){case 1:ps(c,5);break;case 4:ps(c,10);break;case 3:ps(c,6);break;default:ps(c,2)}}}function vh(c,B){let f=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(f*=2),f*B}function ps(c,B){if(c.j.info("Error code "+B),B==2){var f=u(c.bb,c),C=c.Ua;const S=!C;C=new Rn(C||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Hr(C,"https"),ho(C),S?XE(C.toString(),f):ZE(C.toString(),f)}else ct(2);c.I=0,c.l&&c.l.pa(B),bh(c),Dh(c)}n.bb=function(c){c?(this.j.info("Successfully pinged google.com"),ct(2)):(this.j.info("Failed to ping google.com"),ct(1))};function bh(c){if(c.I=0,c.ja=[],c.l){const B=oh(c.h);(B.length!=0||c.i.length!=0)&&(y(c.ja,B),y(c.ja,c.i),c.h.i.length=0,D(c.i),c.i.length=0),c.l.oa()}}function Rh(c,B,f){var C=f instanceof Rn?Jt(f):new Rn(f);if(C.g!="")B&&(C.g=B+"."+C.g),$r(C,C.u);else{var S=o.location;C=S.protocol,B=B?B+"."+S.hostname:S.hostname,S=+S.port;const P=new Rn(null);C&&Hr(P,C),B&&(P.g=B),S&&$r(P,S),f&&(P.h=f),C=P}return f=c.G,B=c.wa,f&&B&&ye(C,f,B),ye(C,"VER",c.ka),Yr(c,C),C}function Sh(c,B,f){if(B&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return B=c.Aa&&!c.ma?new ve(new Oc({ab:f})):new ve(c.ma),B.Fa(c.L),B}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Oh(){}n=Oh.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Eo(){}Eo.prototype.g=function(c,B){return new Dt(c,B)};function Dt(c,B){Ze.call(this),this.g=new _h(B),this.l=c,this.h=B&&B.messageUrlParams||null,c=B&&B.messageHeaders||null,B&&B.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=B&&B.initMessageHeaders||null,B&&B.messageContentType&&(c?c["X-WebChannel-Content-Type"]=B.messageContentType:c={"X-WebChannel-Content-Type":B.messageContentType}),B&&B.sa&&(c?c["X-WebChannel-Client-Profile"]=B.sa:c={"X-WebChannel-Client-Profile":B.sa}),this.g.U=c,(c=B&&B.Qb)&&!_(c)&&(this.g.u=c),this.A=B&&B.supportsCrossDomainXhr||!1,this.v=B&&B.sendRawJson||!1,(B=B&&B.httpSessionIdParam)&&!_(B)&&(this.g.G=B,c=this.h,c!==null&&B in c&&(c=this.h,B in c&&delete c[B])),this.j=new zs(this)}d(Dt,Ze),Dt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Dt.prototype.close=function(){Nc(this.g)},Dt.prototype.o=function(c){var B=this.g;if(typeof c=="string"){var f={};f.__data__=c,c=f}else this.v&&(f={},f.__data__=_c(c),c=f);B.i.push(new jE(B.Ya++,c)),B.I==3&&go(B)},Dt.prototype.N=function(){this.g.l=null,delete this.j,Nc(this.g),delete this.g,Dt.Z.N.call(this)};function Ph(c){Dc.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var B=c.__sm__;if(B){e:{for(const f in B){c=f;break e}c=void 0}(this.i=c)&&(c=this.i,B=B!==null&&c in B?B[c]:void 0),this.data=B}else this.data=c}d(Ph,Dc);function Nh(){yc.call(this),this.status=1}d(Nh,yc);function zs(c){this.g=c}d(zs,Oh),zs.prototype.ra=function(){at(this.g,"a")},zs.prototype.qa=function(c){at(this.g,new Ph(c))},zs.prototype.pa=function(c){at(this.g,new Nh)},zs.prototype.oa=function(){at(this.g,"b")},Eo.prototype.createWebChannel=Eo.prototype.g,Dt.prototype.send=Dt.prototype.o,Dt.prototype.open=Dt.prototype.m,Dt.prototype.close=Dt.prototype.close,qp=function(){return new Eo},jp=function(){return lo()},$p=fs,Sl={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},uo.NO_ERROR=0,uo.TIMEOUT=8,uo.HTTP_ERROR=6,Ko=uo,WB.COMPLETE="complete",Hp=WB,jB.EventType=kr,kr.OPEN="a",kr.CLOSE="b",kr.ERROR="c",kr.MESSAGE="d",Ze.prototype.listen=Ze.prototype.J,ni=jB,ve.prototype.listenOnce=ve.prototype.K,ve.prototype.getLastError=ve.prototype.Ha,ve.prototype.getLastErrorCode=ve.prototype.ya,ve.prototype.getStatus=ve.prototype.ca,ve.prototype.getResponseJson=ve.prototype.La,ve.prototype.getResponseText=ve.prototype.la,ve.prototype.send=ve.prototype.ea,ve.prototype.setWithCredentials=ve.prototype.Fa,Up=ve}).apply(typeof vo<"u"?vo:typeof self<"u"?self:typeof window<"u"?window:{});/*!
* re2js
* RE2JS is the JavaScript port of RE2, a regular expression engine that provides linear time matching
*
* @version v2.10.0
* @author Oleksii Vasyliev
* @homepage https://github.com/le0pard/re2js#readme
* @repository [object Object]
* @license MIT
*/var V=class _s{static FOLD_CASE=1;static LITERAL=2;static CLASS_NL=4;static DOT_NL=8;static ONE_LINE=16;static NON_GREEDY=32;static PERL_X=64;static UNICODE_GROUPS=128;static WAS_DOLLAR=256;static LOOKBEHIND=512;static MATCH_NL=_s.CLASS_NL|_s.DOT_NL;static PERL=_s.CLASS_NL|_s.ONE_LINE|_s.PERL_X|_s.UNICODE_GROUPS;static POSIX=0;static UNANCHORED=0;static ANCHOR_START=1;static ANCHOR_BOTH=2};const Ws={CASE_INSENSITIVE:1,DOTALL:2,MULTILINE:4,DISABLE_UNICODE_GROUPS:8,LONGEST_MATCH:16,LOOKBEHINDS:512},Di=128,Ol=new Int32Array(Di),Pl=new Int32Array(Di),bo=65535;for(let n=0;n<Di;n++)n>=97&&n<=122?Ol[n]=n-32:Ol[n]=n,n>=65&&n<=90?Pl[n]=n+32:Pl[n]=n;var k=class{static CODES=Object.freeze({"\x07":7,"\b":8,"	":9,"\n":10,"\v":11,"\f":12,"\r":13," ":32,'"':34,$:36,"&":38,"'":39,"(":40,")":41,"*":42,"+":43,"-":45,".":46,0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,":":58,"<":60,">":62,"?":63,A:65,B:66,C:67,F:70,P:80,Q:81,U:85,Z:90,"[":91,"\\":92,"]":93,"^":94,_:95,"`":96,a:97,b:98,f:102,i:105,m:109,n:110,r:114,s:115,t:116,v:118,x:120,z:122,"{":123,"|":124,"}":125});static toUpperCase(n){if(n<Di)return Ol[n];const e=String.fromCodePoint(n).toUpperCase(),t=e.codePointAt(0)>bo?2:1;if(e.length>t)return n;const s=String.fromCodePoint(e.codePointAt(0)).toLowerCase(),r=s.codePointAt(0)>bo?2:1;return s.length>r||s.codePointAt(0)!==n?n:e.codePointAt(0)}static toLowerCase(n){if(n<Di)return Pl[n];const e=String.fromCodePoint(n).toLowerCase(),t=e.codePointAt(0)>bo?2:1;if(e.length>t)return n;const s=String.fromCodePoint(e.codePointAt(0)).toUpperCase(),r=s.codePointAt(0)>bo?2:1;return s.length>r||s.codePointAt(0)!==n?n:e.codePointAt(0)}},g=class{constructor(n,e=!1){this.data=n,this.isStride1=e,this.SIZE=e?2:3}getLo(n){return this.data[n*this.SIZE]}getHi(n){return this.data[n*this.SIZE+1]}getStride(n){return this.isStride1?1:this.data[n*this.SIZE+2]}get length(){return this.data.length/this.SIZE}};const c0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-",Jp=new Uint8Array(256);for(let n=0;n<64;n++)Jp[c0.charCodeAt(n)]=n;const Kp=n=>{const e=[];let t=0,s=0;for(let r=0;r<n.length;r++){const i=Jp[n.charCodeAt(r)];t|=(i&31)<<s,(i&32)===0?(e.push(t),t=0,s=0):s+=5}return e},m=(n,e)=>{const t=Kp(n),s=e?t.length/2:t.length/3,r=new Uint32Array(s*3);let i=0,o=0;for(let a=0;a<s;a++)i+=t[o++],r[a*3]=i,i+=t[o++],r[a*3+1]=i,r[a*3+2]=e?1:t[o++];return r},l0=n=>{const e=Kp(n),t=new Map;let s=0;for(let r=0;r<e.length;r+=2){s+=e[r];const i=e[r+1],o=i>>>1^-(i&1);t.set(s,s+o)}return t};var Ro=class{constructor(n){this.initializer=n,this.cache=new Map}has(n){return Object.hasOwn(this.initializer,n)}get(n){if(this.cache.has(n))return this.cache.get(n);const e=this.has(n)?this.initializer[n]():null;return this.cache.set(n,e),e}},yt=class{static _CASE_ORBIT=null;static get CASE_ORBIT(){return this._CASE_ORBIT||(this._CASE_ORBIT=l0("rCgCIgCY+rQI4QiCuuBLgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCCgCBgCBgCBgCBgCBgCBgCB+7OB-BB-BB-BB-BB-BBskQB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BC-BB-BB-BB-BB-BB-BB-BByHBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBDCBBBCBBBCBBCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBxHBCBBBCBBBCBBB3SBmMBkNBCBBBCBBB8MBCBBB6MB6MBCBBC+EB0MB2MBCBBB6MB+MBiGBmNBiNBCBBBmKBikzCBmNBqNBkIBsNBCBBBCBBBCBBB0NBCBBB0NDCBBB0NBCBBByNByNBCBBBCBBB2NBCBBDCBBCwDFCBCBDBCBCBDBCBCBDBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBB9EBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCCBCBDBCBBBhGBvDBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBjICCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBH2iVBCBBBlKBwiVB+jVB+jVBCBBBlMBqEBuEBCBBBCBBBCBBBCBBBCBBB+hVB4hVB8hVBjNB7MC5MB5MCzMC1MB+0yCE5MB20yCC9MBu2yCBwyyCBo0yCChNBlNBo0yCBu-UBi0yCDlNC6-UBpNDrNIu+UDzNCm0yCBzNE0yyCBzNBpEBxNBxNBtEG1NLqxyCBkxyCnFoFrBCBBBCBBDCBBEkIBkIBkICoHHsCCqCBqCBqCCgEC+DB+DBmkOBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCC+BBgCBgCBgCBgCBgCBgCBgCBgCBrCBpCBpCBpCBmjOB-BB8BB-BB-BBgEB-BB-BByBBqgOBsDB-BBtwBB-BB-BB-BBsBBgDBCB-BB-BB-BBeB-BB-BB61OB-BB-BB-DB9DB9DBQB7DBmCE9CBrDBPBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBrFB-EBOBnHB3FB-FCCBBBNBCBBCjIBjIBjIBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB8kMB-BB6kMB-BB-BB-BB-BB-BB-BB-BB-BB-BBokMB-BB-BBkkMBkkMB-BB-BB-BB-BB-BB-BB-BB4jMB-BB-BB-BB-BB-BB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EBCBBBCBoiMBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBJCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBeBCBBBCBBBCBBBCBBBCBBBCBBBCBBBdBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDL-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-C64CgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOCgmOGgmODg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FDg8FBg8FBg8FhVg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBQBQBQBQBQBQDPBPBPBPBPBPjkC7mMB5mMBnmMBjmMBCBlmMB3lMBpiMBk8kCBCBBG-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FD-7FB-7FB-7F6FoglCEsuHRwjlCyDCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCB0DBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBG1DD97OCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQDPBPBPBPBPBPDQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQDPBPBPBPBPBPEQCQCQCQCPCPCPCPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPB0EB0EBsFBsFBsFBsFBoGBoGBgIBgIBgHBgHB8HB8HDQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQCSFPBPBzEBzEBRCxnOFSFrFBrFBrFBrFBREQBQClkOFPBPBnGBnGFQBQCljOCODPBPB-GB-GBNHSF-HB-HB7HB7HBRqJ53OE9tQBrmQH4Bc3BSgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBfBfBfBfBfBfBfBfBfBfBfBfBfBfBfBfECBByZ0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzB34BgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CBCBBBt-UBruHBt+UB1iVBviVBCBBBCBBBCBBB3hVB5-UB9hVB7hVCCBBCCBBI9jVB9jVBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBICBBBCBBECBBN-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOC-lOG-lOzoeCBBBCBBBCBBBCBBBCBBBCBl8kCBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBTCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBnECBBBCBBBCBBBCBBBCBBBCBBBCBBDCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBKCBBBCBBBnglCBCBBBCBBBCBBBCBBBCBBECBBBvyyCDCBBBCBBBgDCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBn0yCB90yCB10yCBh0yCBn0yCCjxyCBzyyCBpxyCBg6BBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBB-CBl0yCBvjlCBCBBBCBBBt2yCBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBhkzCZCBB9a-5Bd-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCm6TCBB7gBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCH-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BmlBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvChDwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCFvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvC1DuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCCuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCCuCBuCBuCBuCBuCBuCBuCCuCBuCCtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCCtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCCtCBtCBtCBtCBtCBtCBtCCtCBtCk2BgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEO-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-D+CgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCL-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-B74CgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BhrVgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BhB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BD1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BtxekCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjC")),this._CASE_ORBIT}static _Print=null;static get Print(){return this._Print||(this._Print=new g(m("hB9CBjBLBCpWBDFBFGBCCCBSBCsMBClBBDxBBDCBC2BBJaBFFBSVBC-FBCvBBD6BBDkDBP6BBDwBBDOBCbBDCCBJBGfBIqCBCgFBCHBDBBDVBCGBCEEBCBDIBDBBDDBJFFBCCBDBDYBDCBCFBFBBDVBCGBCBBCBBCBBDCCBDBFBBDCBEIIBCBCIIBPBLCBCIBCCBCVBCGBCBBCEBDJBCCBCCBDQQBCBDLBIGBCCBCHBDBBDVBCGBCBBCEBDIBDBBDCBICBFBBCEBDRBLBBCFBECBCDBEBBCCCBEEBEEBBBELBFEBECBCDBDHHPUBGMBCCBCWBCPBDIBCCBCDBIBBCCBCBBDDBDJBIVBCCBCWBCJBCEBDIBCCBCDBIBBGCBCDBDJBCCBNMBCCBCyBBCCBCFBFPBDZBCCBCRBEXBCIBCDDBFBEFFBEBCCCBGBHJBDCBN5BBFcBmBBBCCCBDBCXBCCCBVBDEBCCCBFBCJBDDBhBnCBCjBBFmBBCjBBCOBCMBmBlGBCGGD4LBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBDfBEZBH1CBDFBD-TBCbBE4CBIVBKXBKTBNMBCCBCBBN9CBDJBHJBHNBCKBH4CBIqBBGlCBLeBCLBFLBFEEBoBBDEBMrBBFZBHKBE9BBDgCBCcBDKBHJBHNBDtBBDLBVsCBClFBJ7BBEOBE9BBGqBBDKBJqBBG1QBDFBDlBBDFBDHBCGCBdBD0BBCOBCNBDFBCSBDCBCIBSXBJuBBSBBDaBCMBEhBBPgBBQrEBF5UBXKBWz4BBD9LBGsBBCGGD3BBIBBPXBKGBCGBCGBCGBCGBCGBCGBCGBC9DBjBZBC4CBN1GBbPBC+BBC1CBDmDBGqBBC9CBC1CBKvBBCszcBE2BBK7KBV3FBJ8GBV7BBEJBH3BBJlCBJLBHzDBMdBEtCBCKBFgBBC2BBKNBDJBDmDBZbBLFBDFBDFBKGBCGBC7BBF9DBDJBHj9KBNWBFwBBloItLBDpDBnBGBNEBGZBCEBCCCBCCBCCBoUBhBpBBHyBBCSBCDBFEBCmEBF9FBEFBDFBDFBDCBEGBCGBOBBDLBCZBCSBCBBCOBDNBjB6DBGCBFsBBE3CBCMBEwBwBBsBBjEcBEwBBQbBFjBBKdBGqBBGdBCkBBFNBrB9EBDJBHjBBFjBBFnBBJzBBMLBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBCnCBJIBxBSBCBBGgBBEaBGaBnB3BBFTBDxBBCBBGHBCCBCcBDCBFJBIIBI-BBhBmBBFLBK1BBEcBDaBGZBIDBNGBxCoCB4ByBBOyBBItBBJJBHlBBEcBJBBxGeBCpBBCCBDBBRFBJIBiBtBBJpBBXZBnBbBVWBKtCBFjBBK9BBCEBOYBIJBH0BBCRBJmBBK-CBCTBMRBCuBB-BGBCCCBCBCOBCKBH6BBGJBHDBCHBDBBDVBCGBCBBCEBCJBDBBDCBDHHGGBDGBEEBMJBCDDClBBCJBCDDCDBCJBCBBJBBe7CBCEBfnCBJJBnF1BBDlBBjBkCBMJBHMBU5BBHJBHTBdaBDOBFWB6F7BBlDyCBNHBDDDBGBCBBCdBCBBDLBKJBnCHBDtBBDKBcnCBJyCBOoCBIJB3CHB5ChBBPJBHIBCsBBCNBLcBEfBDVBCNBqCGBCBBCrBBECCBCCBHBJJBHFBCBBCkBBCBBCFBIJBHrBBFJB3HYBIQBCoBBEcB2CQQBwBBO6cBnDuDBCEBMjGBtyCiDBOvhBBRVBL68DBGmSB61G5BBn2B4RBIeBCJBFwCBCJBHdBDFBLlCBLJBCGBCUBGSBxN5BBnG6CBGYBDYBtBqCBF4BBIQBhCEBMGBK1mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBDDBh7D8HBEzNBHWBQQBQtBBDWBKzDB9B1HBLmBBDpCBJvDBWlCB7DTBNTBN2CBKYBoE0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBD9VBQEBCOBxiBeBHFB2GGBCQBDGBCBBCEBG9BBiBxDxDBrBBENBDJBFBBhKeBS5BBGxOxOBoBB3GqBBFhGhGBdBCVBJBBhHGBCDBCBBCOBCkGBDPBqBrCBFJBFBByYjCBtC8BBjGDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBBvIrBBFjDBNOBDOBCOBCkBBLtFB5BcBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBCmDBmgB-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIBnkzVvHB",!1))),this._Print}static CATEGORIES=new Ro({C:()=>new g(m("AfBgDgBBOrWrWBHHBCBICCVuMuMnBBBzBBBE4B4BBGBcDBHQBXhGhGxBBB8BBBmDNB8BBByBBBQddBCCMEBhBGBsCiFiFJBBDBBXIICCBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBPMMBEB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKMMBDBbEByBPBDBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBjoIBvLBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCB-FCBHBBHBBHBBECBIIIBLBDBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIB-BGGBLBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMBxhBPBXJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBF-6DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBrCHBxDUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIlkzVBxHvw-FB",!1)),Cc:()=>new g(m("AfgDgB",!0)),Cf:()=>new g(m("tFzqBzqBBEBXhGhGyBhMhMBxCxCs5D9-B9-BBDBbEByBEBCJBw03B6H6HBBBimEQQj7IPBhjiBDBwmFHBn0rYffB+CB",!1)),Cn:()=>new g(m("4bBBHDBICCVuMuMnBBBzBBBE4B4BBGBcDBHKBvI9B9BBmDmDBMB8BBByBBBQddBCCMEBjBEBuHJJBDDBXXICCBBBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBbFB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKmDmDNBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBDBvzIBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCC-FCBHBBHBBHBBECBIIIBIBGBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIBlCJBCBBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMB3iBJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBJ76DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBjGUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIm8yVBCdBhD-DBxHvw-BB---BBB---BBB",!1)),Co:()=>new g(m("gg4B-nGh4hc9--BD9--B",!0)),Cs:()=>new g(m("gg2B--B",!0)),L:()=>new g(m("hCZBHZBwBLLFGGBVBCeBCpOBFLBPEBICCiEEBCBBDDBCHHCCBCCCBSBCyCBCqEBJlFBClBBDHHBnBBoCaBFDBuBqBBkBBBCiDBCQQBIIBLLBBBDRRCdBe4CBMZZBfBKBBFGGBUBFKKEYYBXBIKBGXBCGBRpBB7B1BBETTIJBQPBFHBDBBDVBCGBCEEBCBERROBBCCBPBBLJJBEBFBBDVBCGBCBBCBBCBBgBDBCUUBBBRIBCCBCVBCGBCBBCEBETTQBBYMMBGBDBBDVBCGBCBBCEBEffBCCBBBQSSCFBECBCDBEBBCCCBEEBEEBBBELBX1B1BBGBCCBCWBCPBEbbBBBCBBDBBfFFBGBCCBCWBCJBCEBEffBBBCBBQBBSIBCCBCoBBDRRGCBJCBZFBGRBEXBCIBCDDBFB7BvBBCBBNGB7BBBCCCBDBCXBCCCBIBCBBKDDBDBCWWBCBhBgCgCBGBCjBBcEB0DqBBVRRBEBFDBEEEBIIBBBFMBNSSBkBBCGGDqBBCsKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPBR1CBDFBErTBDQBCZBGqCBHHBIRBOSBPRBPMBCCBQzBBkBFFkC4CBIEBDhBBCGGBkCBLeByBdBDEBMrBBFZB3BWBK0BBzC+C+CBtBBSHB3BdBOBBLrBBbjBBqBCBLjBBDKBGqBBDCBqBDBCFBCBBEGGB+FBhC1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGB1DOORMBmDFFDJBCEEBDBHGCBCBCKBDDBGEBF1B1BB8zC8zCBjHBHDBEBBNlBBCGGD3BBIRRBVBKGBCGBCGBCGBCGBCGBCGBCGBxC2O2OBrBrBBDBGBBF1CBHCBC5CBCDBGqBBC9CBSfBxBPBhQ-tGBhCs0VBkCtBBDsIBEPBLBBVuBBReBDlCByBIBDmDBDxCBVQBCCBCDBCWBezBBPxBB-BFBECCBMMBaBLWBacBIuBBdRRBDBCJBLEBCoBBYCBCHBVWBEEEBwBBCEEBDDBDBDCCZCBDKBICBNFBDFBDFBKGBCGBCqBBCNBHyDBej9KBNWBFwBBloItLBDpDBnBGBNEBGCCBIBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBlBZBHZBM4CBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmMcBEwBBwBfBOTBCHBHlBBLdBDjBBFHBxB9EBTjBBFjBBFnBBJzBBNKBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCQQBCBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4ByBBOyBBOjBBnBbBKWB7HpBBHBBRFB5BcBLJJBUBrBRBvBUBcWBN0BB6BBBDOOBrBBhBYBbjBBeDDJiBBENNBuBBPDBWCCkBRBCYBUBBgCGBCCCBCBCOBCJBIuBBnBHBDBBDVBCGBCBBCEBETTNEBfJBCDDClBBCaaCtBtBBzBBTDBVCBfvBBVBBC5F5FBtBBqBDBlBvBBV8B8BBpBBOoCoCBZBmBGB6FrBB1D-BBgBHBDDDBGBCBBCXBQCC-CHBDmBBRCCdLLBmBBIWWMtBBUTTBnCBoGgBBgBIBCkBBSyByBBcBxDGBCBBClBBWaaBEBCBBCfBPYYBqBBlISBQCCBLBChBB9DwCwCB4cBnHjGBtyCgDBQvhBBSFBa68DBGmSB61GdBj3B4RBIeBSuCBSdBTvBBRDBgBUBGSBxNsBB0G-BBhBYBDYBtBqCBGjCjCBLBhCBBCPPBNNB0mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBn7F0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BeBHFBmI9BBzEsBBLGBRiKiKBcBTrBBlPbBlHdBDwGwGBdBCCBCBBCGBDEBKBBhHGBCDBCBBCOBCkGB8BjCBI1lB1lBBCBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQBlqE-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),LC:()=>new g(m("hCZBHZB7BLLBVBCeBCiGBCDBFvGBDZBhGDBDBBECBCHHCCBCCCBSBCyCBCqEBJlFBClBBKoBB44ClBBCGGDqBBDCBhV1CBDFBjkCKBGqBBDCBhCrBBgCMBChBBmD1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGBmIFFDJBCEEBDBHGCBCBCFBFDDBCBGEBF1B1BB8zC8zCB6DBDmDBHDBEBBNlBBCGGzoetBBTbBnEtCBCWBEDBCsCBZBBE2Z2ZBpBBGIBIvCBh6TGBNEBqgBZBHZBmlBvCBhDjBBFjBB1DKBCOBCGBCBBCKBCOBCGBCBBk2ByBBOyBB+CVBLVB74C-BBhrV-BBhBYBDYBtpZ0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BJBCTBHFB2uCjCB",!1)),Ll:()=>new g(m("hDZB7BqBqBBWBCHBC2BCBQCBuBCDECBBBDCCDEEBFFDEEBBBDDDCCCDCCBCCDEECDDBDDBBBHGDCOCBSCBDDCEEC4BCBFBDDDBCCFICBjCBDZBiGCCEEEBBBTccBhBBCBBECBCWCBDBCGDB0B0BBuBBCgBCK0BCDMCBgDCxBoBBo6CqBBDCB5XFBjkCIBC2D2DBqBBgCMBChBBnD0ECBHBCgDCBHBJFBLHBJHBJFBLHBJHBJNBDHBJHBJHBJEBCBBHEEBBBCBBJDBDBBJHBLCBCBBzIEEBEEcKFDBBJDBF2B2Bs1CvBBCEEBGCFCCBCCBEBGiDCBIICFFNlBBCGG0oesBCUaCoEMCBBBC+BCBGBCCCDICFCCDCCBBBCSCGGGCMCFCCDOCbEE2ZqBBGIBIvCBh6TGBNEBqhBZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBnqZZBbGBCRBbZBbDBCCCBFBCKBbZBbZBbZBbZBbZBbZBbZBbZBbbBdYBCFBbYBCFBbYBCFBbYBCFBbYBCFBC15B15BBIBCTBHFB4vChBB",!1)),Lm:()=>new g(m("wVRBFLBPEBICCmEGG-OnHnHlFBBuIBBFgBgBKEEhFoFoF1mBgEgE2R72B72BsDkTkTxOFBvF+BBOjBjBBjBByVOORMBg-CBByHgGgG2OsBsBBDBGiDiDB+C+CBBB34bjnBjnBBEBvIzDzDdBB6DIBxCYYpDDBEBB2OXXqEtDtDWBBoDDBKngVngVuBBBh-BFBCpBBCIB0sBhBhB2K04D04DnrTDB9PCBpBBBnRMBhCBBCPPB9-P9-PBCBCGBCBByhM9BBqGGBud0Q0QsSAB",!1)),Lo:()=>new g(m("qFQQhIFFBCBxGBB7ZaBFDBuBfBCJBkBBBCiDBCZZBLLBBBDRRCdBe4CBMZZBfBWVBrBYBIKBGXBCGBRoBB8B1BBETTIJBROBFHBDBBDVBCGBCEEBCBERROBBCCBPBBLJJBEBFBBDVBCGBCBBCBBCBBgBDBCUUBBBRIBCCBCVBCGBCBBCEBETTQBBYMMBGBDBBDVBCGBCBBCEBEffBCCBBBQSSCFBECBCDBEBBCCCBEEBEEBBBELBX1B1BBGBCCBCWBCPBEbbBBBCBBDBBfFFBGBCCBCWBCJBCEBEffBBBCBBQBBSIBCCBCoBBDRRGCBJCBZFBGRBEXBCIBCDDBFB7BvBBCBBNFB8BBBCCCBDBCXBCCCBIBCBBKDDBDBYDBhBgCgCBGBCjBBcEB0DqBBVRRBEBFDBEEEBIIBBBFMBNyDyDBnKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPByDrTBDQBCZBGqCBHHBIRBOSBPRBPMBCCBQzBBpBkCkCBhBBC0BBIEBDhBBCGGBkCBLeByBdBDEBMrBBFZB3BWBK0BBxFuBBSHB3BdBOBBLrBBbjBBqBCBLdByDDBCFBCBBE7hB7hBBCB4-C3BBZWBKGBCGBCGBCGBCGBCGBCGBCGBoR2B2BF1CBJCCB4CBFGGBpBBC9CBSfBxBPBhQ-tGBhC0wUBC2jBBkCnBBJrIBFPBLBBjCyByBBkCBqFoDoDEGBCCBCDBCWBezBBPxBB-BFBECCBMMBaBLWBacBIuBBuBEBDIBLEBCoBBYCBCHBVPBCFBEEEBwBBCEEBDDBDBDCCZBBEKBIPPBEBDFBDFBKGBCGByEiBBej9KBNWBFwBBloItLBDpDBkCCCBIBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBqDJBCsBBDeBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmMcBEwBBwBfBOTBCHBHlBBLdBDjBBFHBhEtCBjDnBBJzBB9CzBBN2JBKVBLHB5EFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCQQBCBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4FjBBnBDBCxJxJBoBBHBBRCBCBB5BcBLJJBUBrBRBvBUBcWBN0BB6BBBDOOBrBBhBYBbjBBeDDJiBBENNBuBBPDBWCCkBRBCYBUBBgCGBCCCBCBCOBCJBIuBBnBHBDBBDVBCGBCBBCEBETTNEBfJBCDDClBBCaaCtBtBBzBBTDBVCBfvBBVBBC5F5FBtBBqBDBlBvBBV8B8BBpBBOoCoCBZBmBGB6FrBB0GHBDDDBGBCBBCXBQCC-CHBDmBBRCCdLLBmBBIWWMtBBUTTBnCBoGgBBgBIBCkBBSyByBBcBxDGBCBBClBBWaaBEBCBBCfBPYYBnBBCBBlISBQCCBLBChBB9DwCwCB4cBnHjGBtyCgDBQvhBBSFBa68DBGmSB61GdBj3B4RBIeBSuCBSdBTvBB0BUBGSB0NnBB2MqCBGwFwFB0mHBqBfBiDyDBuwIiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBxzI2P2PBrBBiBiKiKBcBTrBBlPaBmHdBDwGwGBdBCCBCBBCGBDEBKiHiHBFBCDBCBBCOBCkGB8pBDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQBlqE-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Lt:()=>new g(m("lOGDnB2sH2sHBGBJHBJHBNQQwBAB",!1)),Lu:()=>new g(m("hCZBmDWBCGBiB2BCDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIJDCMCDQCDDDCCBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBDDBBBEWCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBpCDBNDBNDBNEBMDBnIFFECBDCBDEEBDBHGCBCBDDBLBBG+B+B9zCvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoqZZBbZBbZBbCCBGDBDDBCBCHBbZBbBBCDBDHBCGBcBBCDBCEBCEEBFBcZBbZBbZBbZBbZBbZBfYBiBYBiBYBiBYBiBYBiB2pE2pEBgBB",!1)),M:()=>new g(m("gYvDB0IGBoIsBBCCCBCCBCCpCKBxBUBRmDmDBFBDFBDBBCDBkBffBZB8CKB7BIBKZZBCBCIBCCBCEBsBCB8BIBrBXBCgBB3BCBCRBCGBLBBeCB5BCCBFBDBBDCBKLLBbbDCB5BCCBDBFBBDCBEffBEEMCB5BCCBGBCCBCCBVBBXFBCCB5BCCBFBDBBDCBICBLBBf8B8BBDBECBCDBKpBpBBDB4BCCBFBCCBCDBIBBMBBeCB5BCCBFBCCBCDBIBBMBBQNNBCB4BBBCGBCCBCDBKLLBeeBBBnCFFBEBCCCBGBTBB+BDDBFBNHBjDDDBHBMGBqCBBcECFBByBTBCBBGKBCjBBKlDlDBSBYDBFCBCCBDGBEDBOLBCLLBCBgWCBzdDBdCBeBBfBBhCfBKuBuBBBBC2D2DBjBjB3DLBFLB8GEB6BJBCcBDxBxBBsBBDLBVEBwBQBnBIBNCBfMB5BNBxBTB5ECBCUBFHHDCBnG-BBxWgBB--CCBuEhDhDBeBrRFBqDBB1udDBCJBhBBBxCBBxIEEFYYBDBF0C0CBzBzBBQBbRBOnBnBBGBaMBtBDBwBNBlBkCkCBMBNJJBuBuBBBBzBCCBBBDBBGBBCqBqBBDBGBBtHHBCBBx5TiXiXBOBRPBuejHjH2EEBn0BCBCBBGDBpBCBFmFmFB+R+RBCBiCEB+JBBuCFBnCKByBDB7DCB2BOBqBDDBLLBCBuBKBI+B+BBBBlBNBRBBtBNNBBBxBNBJDBCBB9CLBHDD+ELBWDB4BBBCGBDBBDCBKLLBDDBFBEEBkCIBCDDCDBCEBCPPBzCzCBQBYyCyCBSBsHGBDIBcBBzCQBrDMBmDOBhIOB2HFBCBBDDBCCCBuEuEBFBDGBEddBIBpBGBCDBJKKBJBvBPBnGHBoGHBCHBzCVBCNB7DFBECCBCCBFBCjCjCBDBCBBCEB8KDBKBBCxBxBBFBEEBYmnFmnFHOBpmLRBhuCEB8BGB5gBCCB1BBIDByCMMBslTslTBizEizEBsBBDWB-QEBEFBJHBDGBfDB1ECB89B2BBFxBBJPPXEBCOBxqBGBCQBDGBCBBCEBlDhFhFBFB4L+B+BBCB9PDB-HBB0HDDIBBG7O7OBFBuDGB29lYvHB",!1)),Mc:()=>new g(m("joC4B4BDCBJDBCBBzBBB7BCBHBBDBBLsBsB7BCBjC7B7BBBBJCCB2B2BB7B7BCHHBDDBLLnDBBCBBECBCCBLqBqBBBB+BDB+BBB7BCCBDBDBBCBBKBBdPPB7B7BBBBGCBCCBLrBrBBsCsCBBBHHBTBBrKBBgCsFsFBFFHDDBaaBLLBBBDGBWBBDFBDLLBBB5zBffiEIIBGBCBB7KDBDCBFBBCFBhHBB7BCCKCCBJJBEByExBxBGCCBDBCBB+BffFBBD9B9BDCBCEEBxBxBBGBJBBsFWW35EBB0-dBBD5C5CBzBzBBOBvEBBwBxBxBBFFBDDBBBvDBBDBBZuBuBCuDuDDBBGuHuHBCCBCCBCC0gZCCgEuBuBBBBFBB0DZZB8B8BxBCBKBBO+C+CBBBEBBCrFrFBBBgBBB7BBBCDBDBBDCBKLLB1C1CBBBIDDCDBCBBCmDmDBBBJBBErDrDBBBHCCBCBDuHuHBBBHDBDyDyDBBBJBBCuDuDCBBHoDoDCBBFmImIBBBK4H4HBEBCBBFDDCvEvEBBBJDBF1C1CeBB-BqGqGECCoGPPrDIID2G2GBDBFBBC-K-KBNNxBBBJBBCpvQpvQBBBlxD2BBpDBB0rYBBHFB",!1)),Me:()=>new g(m("okBBB1xF-wB-wBBCBCCBsshBCB",!1)),Mn:()=>new g(m("gYvDB0IEBqIsBBCCCBCCBCCpCKBxBUBRmDmDBFBDFBDBBCDBkBffBZB8CKB7BIBKZZBCBCIBCCBCEBsBCB8BIBrBXBCfB4BCCFHBFEEBFBLBBe7B7BFDBJVVBbbDBB6BFFBFFBDDBBBEffBEEMBB6BFFBDBCBBFVVBXXBEBC7B7BDCCBCBJIIBMMBff+BNNzBEE4BCCBBBGCBCDBIBBMBBe7B7BDHHGBBVBBdBB6BBBFDBJVVBeepCIIBBBC7C7CDGBNHBjDDDBHBMGBqCBBcEC4BNBCEBCBBGKBCjBBKnDnDBCBCFBCBBDBBaBBFCBRDBODDBHHQgWgWBBBzdCBeBBfBBfBBhCBBCGBJDDBJBKuBuBBBBC2D2DBjBjB3DCBFBBKHHBBB8GBBD7B7BCGBCCCDHBHJBDxBxBBMBCeBDLBVDBxBCCBDBCGGpBIBNBBhBDBDBBCCB5BCCBEECCB7BHBDBB5ECBCMBCGBFHHEBBnG-BBxWMBFEEBKB--CCBuEhDhDBeBrRDBsDBB1udFFBIBhBBBxCBBxIEEFaaBGG4EBBbRBOnBnBBGBaKBvBCBxBDDBCBDBBoBkCkCBEBDBBDBBNJJwB0B0BCCBDBBGBBCrBrBBJJvHDDFx5Tx5TiXPBRPBuejHjH2EEBn0BCBCBBGDBpBCBFmFmFB+R+RBCBiCEB+JBBuCFBnCKByBDB8D3B3BBNBqBDDBLLBBByBDBDBBI+B+BBBBlBEBCHB-BNNB1B1BBHBLDBDgDgDBBBDCCBHHD+E+EEHBWBB6BBBEmBmBBFBEEBnCFBOECPBB2CHBDCBCYY1CFBCFFBCCBvHvHBCBHBBCBBcBB2CHBDCCBrDrDCDDBEBCmDmDCDDBCBCEBkIIBCBBhIBBCFFxEDBDBBFhBhBBIBpBFBDDBJKKBEBDCBvBMBCBBnGCCBBBCqGqGBFBCFBCzCzCBUBDGBCBBCBB7DFBECCBCCBFBCpCpCBEEC8K8KBMMB1B1BBDBGCCYmnFmnFHOBpmLLBECBhuCEB8BGB5gBgCgCBCByC5lT5lTBizEizEBsBBDWBhRCBSHBDGBfDB1ECB89B2BBFxBBJPPXEBCOBxqBGBCQBDGBCBBCEBlDhFhFBFB4L+B+BBCB9PDB-HBB0HDDIBBG7O7OBFBuDGB29lYvHB",!1)),N:()=>new g(m("wBJB5DBBGDDBBBitBJBnEJBnGJB9MJB3DJBFFBtDJB3DJB3DJBDFBvDMB0DJBJGBoDJBpDGBISBuDJBhDJB3DJBnCTBtIJBnCJBwWTBybCBwHJBHJBXJBtJJBhEKBmFJBHJB3FJB3CJBnEJBHJB3gBEEBEBHJBnGyBBDEB3W7BBvCVB3TdBqrBqYqYaIBPCB4KDBrEJBfHBCOBhBJBoBOBh7cJB9FJBhKFB7EJBnBJBnGJBXJB3CJB3MJB34UJBuPsBBN4BBSBB2KaBlBDBeJJnEEBrGJBvdHBaGBoBIBsCEBXFBhFBBDPBDtBBhCIB1BBBfCBsCEBpDHBZHBqBGBrKFBxBJBHJB3IeB-EJBrBDBxDGBnEdBhEJB9BJBxEJBITB8HJB3KJB3DJB3LJBnDJBHTBtCLBlNSB+CJB3UJB3CcBkHJBnCJB3BJBnLJBnDUBshBuDBimPJBnpCJB3CJBnEJBCGBvQJBnIWB+KCB6nXJBnuBTBNTBtDYB2iBxBBhqCJBnNJB3PJB4HJBtWIBhEJB4Y6BBCCBCDBtCsBBCOBjeMBk3CJB",!1)),Nd:()=>new g(m("wBJnxBJnEJnGJ9MJ3DJ3DJ3DJ3DJ3DJ3DJ3DJ3DJ3DJhDJ3DJnCJ3IJnCJn6BJnBJtJJhEJnFJHJ3FJ3CJnEJHJnuiBJnVJnBJnGJXJ3CJ3MJ34UJnsBJnkCJHJ9YJhEJ9BJxEJ3IJ3KJ3DJ3LJnDJHTtCJnNJnDJ3UJ3CJ3HJnCJ3BJnLJ3uQJnpCJ3CJnEJ3QJ37XJ12CxBhqCJnNJ3PJ4HJ2aJ30EJ",!0)),Nl:()=>new g(m("u3FCBwzCiBBDDB-zDaaBHBPCBs1dJBxyW0BBtOJJnEEBrhIuDBm8SCB",!1)),No:()=>new g(m("yFBBGDDBBB2pCFB5LFB5DCBmEGB6GGBSIByNJB2hBTB0jBJBhP20B20BEFBHJBnGPBqB3W3WB6BBvCVB3TdBqrB1kB1kBBCBrEJBfHBCOBhBJBoBOBxrdFBymWsBBiCDBSBB2KaBlBDB1pBHBaGBoBIBsCEBXFBhFBBDPBDtBBhCIB1BBBfCBsCEBpDHBZHBqBGBrKFBhLeB-EJBrBDBxDGBnETB8LTBmqBBBvNIBobSB0aUBn8SGB-YWBqhZTBNTBtDYBvqFIBid6BBCCBCDBtCsBBCOBjeMB",!1)),P:()=>new g(m("hBCBCFBCDBLBBEBBbCBCccCkBkBGEELBBEEE-VJJzOFBqBBB0BCCDDDtBBBVBBCBBOCCBBBrCDBnDsBsBBMBqHCB3BOBgBmImIBLLtE5D5D6DnMnMNwLwL7CLLBpFpFBNBCmBmBBCBoCrCrCBDBFBBwDFBsFlTlTBHB4EuTuTtBBBvCCBoCBB+ECBCCBmBKB6JBB5GBBhEGBCFBhFBBLGBdCB9DDB8BEB-BBBhCHBM9Z9ZBWBJTBCMBCLBfBBPBB6TDBeBB+hBNBwCBBgBJB0MVBgCDBhBBB8XDBCBBxDwEwEBtBBCfBDLBkNCBFJBDLBRNNjD7C7CjgdBBuICBkDLL0DFB9LDB3CBBpBCBCyByBBwBwBiDMBRBB9DDB-DBBRBB6HzqUzqUBxGxGBIBXiBBCNBCFFCBB2ECBCFBCDBLBBEBBbCBCccCCCBFB7MCB9UxBxB-MoXoXoGgBgBxIIBnBxDxDBFBjCGB6CDByO-J-JjBlElEBDBtBDB+FGBuDBBCDB-DDBxBBBwCDBFOOCCB5CFBsDrJrJBCCBzDzDBDBLBBCpDpD7HWBqDCBdMBtCjEjEBBB9HpIpIBBB8E9C9CBGB0CCBCEB+CJB4GgDgDBDBrBBBmUBBrCMBwFxjBxjBBDB97CBB8zOBBmEiCiCBDBJpRpRBBBoJDBoK9lT9lTovHEB07C-a-aBAB",!1)),Pc:()=>new g(m("-Cg-Hg-HBUU-u3BBBZCBwHAB",!1)),Pd:()=>new g(m("tB9qB9qB0BiyDiyDmgBqgCqgCBEBiwDDDgBBBFdd-NUUwDxszBxszBBmBmBLqFqFhzD-J-J",!1)),Pe:()=>new g(m("pB0B0BgB+1D+1DC-6B-6BqtC4B4BQ7T7TCff-hBMCxChBhBCGC1MUChCCCiBmhBmhBCECtBGCtNICEGCDBB-ozB6G6GeOCESSCCCrF0B0BgBGD",!1)),Pf:()=>new g(m("7F+6H+6HEddpuDCCFDDQEE",!1)),Pi:()=>new g(m("rFt7Ht7HDBBDaapuDCCFDDQEE",!1)),Po:()=>new g(m("hBCBCCBDECBLLBEEBcclCGGPBBI-V-VJzOzOBEBqB3B3BDDDtBBBVBBCBBOCCBBBrCDBnDsBsBBMBqHCB3BOBgBmImIBLLtE5D5D6DnMnMNwLwL7CLLBpFpFBNBCxDxDrCEBFBBwDFBsFlTlTBHBmY9D9DBBBoCBB+ECBCCBmBFBCDB6JBB5GBBhEGBCFBhFBBLGBdCB9DDB8BEB-BBBhCHBMjajaBJJBGBJIBDDBDCBEKBCCCBIB7kDDBCBBxDwEwEBFFBBBDDDBHBCBBCDDBLLBDBCJBDDBCCCBLBDCBtNCB6B+F+FjgdBBuICBkDLL0DFB9LDB3CBBpBCBCyByBBwBwBiDMBRBB9DDB-DBBRBB6HlxUlxUBFBDXXVBBDDBECBCDBICBHCCB2E2EBBBCCBDECBLLBEEBcclBDDB7M7MBBB9UxBxB-MoXoXoGgBgBxIIBnBxDxDBFBjCGB6CDB0ZlElEBDBtBDB+FGBuDBBCDB-DDBxBBBwCDBFOOCCB5CFBsDrJrJBCCBzDzDBDBLBBCpDpD7HWBqDCBdMBtCjEjEBBB9HpIpIBBB8E9C9CBGB0CCBCEB+CJB4GgDgDBDBrBBBmUBBrCMBwFxjBxjBBDB97CBB8zOBBmEiCiCBDBJpRpRBBBoJDBoK9lT9lTovHEB07C-a-aBAB",!1)),Ps:()=>new g(m("oBzBzBgB-1D-1DC-6B-6B-rCEEnB4B4BQ7T7TCff-hBMCxChBhBCGC1MUChCCCiBmhBmhBCECaTTCECtNICEGCDipzBipzB4GeeCMCESSCCCrFzBzBgBEEDAB",!1)),S:()=>new g(m("kBHHRCBgBCCcCCkBEBCBBDCCBCBDEEfgBgBrODBNNBGGBCCCBPB2DPPBxDxDsErIrIBBB3DCBDDDBvGvGLUUB4H4HIBBpEqLqLBHHB2H2H-DjEjEBGBlEwGwGqBmGmGiGCBQCCBBBDFBVECmEHBCFBCBBGDBmGBBxXJB0WuLuLlL+E+EBgBBiLJBKIBhiBCCBBBMCBOCBOCBOBBmCOOoBCBOCBUhBB-BBBCDBCBBLCCBBBGFBCECFMMBFFBDBGDBC7B7BBFFB2LBFcBD+HBXKByCtCBXnTBtBwBBDeBLyMBX+BBFfBD1LBDpEBmHFBmLBBvBZBC4CBN1GBbPBFOOBNNWBBHBB8CBB0HBBFJBhBlBBKRRBdBMdBJQQBeBLmBBQ-JBhuG-BBx0V2BB6RWBKBBoDBB+EDBLDB+RCBiHPPB+9T+9TpEgBBuLPBhCBB3BHBtBDBjDCCBBBD7E7EHRRBBBgBCCcCCiEGBCGBOBB6JIB6BQBDCBCMBEwBwBBrBB7zBBBwSmWmWBiKiKBGBnjC2kC2kCBbBr6SDBG3qU3qUk7DvHBLCBEzNBHWBQQBgDzDB9B1HBLmBBD7BBGCBXBBIdBF8BBWhCBE7F7FB1CBrbaagBaagBaagBaagBaa9B-PB4BDBzBHBCNBCBBp2BwNwNttCEE+DiOiOBvIvIBqBBFjDBNOBDOBCOBCkBBYgFB5BcBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBC7CBLAB",!1)),Sc:()=>new g(m("kB+D+DBCBqnB8D8DzPBBzPBBI2H2HoImSmS8sClmClmCBgBB37hBkuVkuVtD7E7E8GBBEBB3-HDB-4wBxtCxtC",!1)),Sk:()=>new g(m("+CCCoCHHFEEqQDBNNBGGBCCCBPB2DPPBjoBjoB15FCCBBBMCBOCBOCBOBB9kEBBkzdWBKBBoDBBxePPBniUniUBPB8bCCjF4g9B4g9BBDB",!1)),Sm:()=>new g(m("rBRRBBB+BCCuBFFmBgBgB-XwQwQBBB8xGOOoBCBOCBsEoBoBBDBHlClCBDBGBBFGDIgBgBBDDCgBgBBqIBhBBB7CffBXBpBFB2OKK3BHBwDxKxKBDBDeBLPBhIiEBX+BBFfBDhIBxBUBDFB9+zB5Z5ZCCBlFRRBBB+BCCkEHHBCBitDBBhrwBx+Bx+BagBgBagBgBagBgBagBgBat5Ft5FB-uC-uCBHB",!1)),So:()=>new g(m("mFDDFCCyerIrIBgEgEBvGvGLUUB4H4HkQ2L2LjEFBClElEwGqBqBoMCBQCCBBBDFBVECmEHBCFBCBBGDBmGBBxXJB0WzWzW+EhBBiLJBKIBksBBBCDBCBBLCCBHHBEBCECFMMBPPCBBC7B7BBKKBDBDDBCBBCBBCGBCeBDBBCCCBdBtIHBFTBDGBDwCBCdBanBBHnCBXKByCtCBX2FBCIBC1BBJuDBC3HBtBrBBhC-HBhQvBBWBBHmBBDpEBmHFBmLBBvBZBC4CBN1GBbPBFOOBNNWBBHBBxKBBFJBhBlBBKRRBdBMdBJQQBeBLmBBQ-JBhuG-BBx0V2BBibDBLBBC+R+RBBBqqUPBuLPBhCBB3BHBuBCBlPEEFBBOBB6JIB6BQBDCBCMBEwBwBBrBB7zBBBwSpgBpgBBGBnjC2kC2kCBGBFQBr6SDBG3qU3qUk7DvHBLCBEzNBHWBQPBhDzDB9B1HBLmBBD7BBGCBXBBIdBF8BBWhCBE7F7FB1CBqlB-PB4BDBzBHBCNBCBBp2B96C96CiEyWyWBqBBFjDBNOBDOBCOBCkBBYgFB5BcBOrBBFIBIBBPFB7E6HBG4WBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBB-B3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBC7CBLAB",!1)),Z:()=>new g(m("gBgEgEgvFgsCgsCBJBeBBGwBwBh9DAB",!1)),Zl:()=>new g(m("ohIA",!0)),Zp:()=>new g(m("phIA",!0)),Zs:()=>new g(m("gBgEgEgvFgsCgsCBJBlBwBwBh9DAB",!1)),ASCII_Hex_Digit:()=>new g(m("wBJIFbF",!0)),Alphabetic:()=>new g(m("hCZBHZBwBLLFGGBVBCeBCpOBFLBPEBICC3CeeBQBCBBDDBCHHCCBCCCBSBCyCBCqEBJlFBClBBDHHBnBBoBNBCCCBCCBCCJaBFDBeKBG3BBCGBPlDBCHBFHBFCBLCBDRRBuBBOkDBZgBBKBBFGGBWBDSBUYBIKBGXBCGBIJJBoBBLLBEGBHrCBCPBCCBFOBOSBCHBDBBDVBCGBCEEBCBEHBDBBDBBCJJFBBCEBNBBLFFBBBCFBFBBDVBCGBCBBCBBCBBFEBFBBDBBFIIBCBCSSBEBMCBCIBCCBCVBCGBCBBCEBEIBCCBCBBEQQBCBWDBFCBCHBDBBDVBCGBCBBCEBEHBDBBDBBKBBFBBCEBORRBCCBEBECBCDBEBBCCCBEEBEEBBBELBFEBECBCCBEHHpBMBCCBCWBCPBEHBCCBCCBJBBCCBCBBDDBdDBCHBCCBCWBCJBCEBEHBCCBCCBJBBGCBCDBOCBNMBCCBCoBBDHBCCBCCBCGGBCBIEBXFBCCBCRBEXBCIBCDDBFBJFBCCCBGBTBBO5BBGGBH0B0BBECBDBCXBCCCBRBCCBDEBCHHPDBhBgCgCBGBCjBBFSBFPBCjBBkC2BBCDDBDBR-BBLDBDlBBCGGDqBBCsKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPBR1CBDFBErTBDQBCZBGqCBEKBITBMUBNTBNMBCCBCBBNzBBDSBPFFkC4CBIqBBGlCBLeBCLBFIBYdBDEBMrBBFZB3BbBF+BBDTBzBYYBMMBBByBzBBCOBCHB0BpBBDDBLrBBCKBP2BBXCBLjBBDKBGqBBDCBqBDBCFBCBBEGGB+FBUhBBM1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGB1DOORMBmDFFDJBCEEBDBHGCBCBCKBDDBGEBFSSBnBBuZzBB34BkHBHDBEBBNlBBCGGD3BBIRRBVBKGBCGBCGBCGBCGBCGBCGBCGBCfBwB2O2OBBBaIBIEBDEBF1CBHCBC5CBCDBGqBBC9CBSfBxBPBhQ-tGBhCs0VBkCtBBDsIBEPBLBBVuBBGHBEwDBoBIBDmDBDxCBVUBCgBBZzBBNjCBCtBtBBEBECCBBBLgBBGiBBOcBEyBBCLBQRRBOBLEBC2BBKNBTWBEkCBCCCZCBDPBDDBMFBDFBDFBKGBCGBCqBBCNBH6DBWj9KBNWBFwBBloItLBDpDBnBGBNEBGLBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBlBZBHZBM4CBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmC0BBsIcBEwBBwBfBOdBGqBBGdBDjBBFHBCEBrB9EBTjBBFjBBFnBBJzBBNKBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCDBCBBGHBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4ByBBOyBBOnBBjBbBEGGBVB7HpBBCBBEBBRFBzBCBEcBLJJBUBrBRBvBUBcWBKlCBsBEBL4BBKOOBXBYyBBSDBJiBBEKKB+BBCDBKBBLCCkBRBChBBDHHBCB-BGBCCCBCBCOBCJBI4BBYDBCHBDBBDVBCGBCBBCEBEHBDBBDBBEHHGGBdJBCDDClBBCJBCDDCDBCBBECCtBhCBCCBCDBVCBfhCBDBBC5F5FB0BBDGBaFBjB+BBCEE8B1BBDoCoCBZBDNBWGB6F4BBoD-BBgBHBDDDBGBCBBCdBCBBDBBDDB+CHBDtBBDFBCCCBccBxBBDJBSnCBGTTBnCBoDHB5CgBBgBIBCsBBCGBCyByBBcBDVBCNBqCGBCBBCrBBECCBCCBBBCDDBZZBEBCBBCkBBCBBCDBCYYBqBBlIWBKQBCoBBECBwDwCwCB4cBnDuDBSjGBtyCgDBQvhBBSFBa68DBGmSB61GuBBy2B4RBIeBSuCBSdBTvBBRDBgBUBGSBxNsBB0G-BBhBYBDYBtBqCBF4BBIQBhCBBCNNBFBK1mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBFi7Fi7FBzCBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BeBHFB2GGBCQBDGBCBBCEBG9BBiBxDxDBrBBLGBRiKiKBcBTrBBlPbBlHdBDwGwGBdBCVBJBBhHGBCDBCBBCOBCkGB8BjCBEEE1lBDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1TZBHZBHZB3zD-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Dash:()=>new g(m("tB9qB9qB0BiyDiyDmgBqgCqgCBEB+BoBoBQnMnMlgDDDgBBBFdd-NUUwDxszBxszBBmBmBLqFqFhzD-J-J",!1)),Emoji:()=>new g(m("jBHHGJBwDFFu8HNN5GXX7CFBQBBwLBBNnFnFaKBFCBoGoHoHBLLK7B7BBCBCEBKGDBDDFDDCBBDIEBJJBBBGCCGLBMBBDCCBCCTDDBTTBEBCCCBEEBGGDBBFBBMBBGBBDGGBECBVVBGGBEBCDBDFFDDDBEBCDDCCCHEEHLLBQQDFFCFFBBBCMMBxBxBBBBKeP1LBBwOCBUBB0BFF7mBNN6SCCrrvDrGrGhFBBNBBPDDBIBsCZBCBBYVVDIBWBBvFhBBDvDBDBBCCBDyCBDCBCmIBC+BBMFBCXBIBBDHBNDDBCBDFFBOOBDDJBBKGGBBBNCBJCBDCCFHHEHHB0CBxBlCBGHBDDBEJBECCBEEDJBkHLBF8I8IBtBBCJBC4FBxDMBEKBE4BBCFFBOBDLBFJB",!1)),Emoji_Component:()=>new g(m("jBHHGJB0+H2G2Gsp3B3+8B3+8BBYB8PEBxtBDBtzhY-CB",!1)),Emoji_Modifier:()=>new g(m("7-8DE",!0)),Emoji_Modifier_Base:()=>new g(m("9wJ8G8GRDB4jzD9B9BBBBDDDBBB2DBBDKBWSBEFFBBBCCBICCZqGqGBFFWFFBvFvFBBBEEB0CRRBBBKMMgSDDJHBHKKBIBDCB5B+B+BBCCBCCSCBCMBmHCBrBIB",!1)),Emoji_Presentation:()=>new g(m("64IBBuGDBEDDqQBBWBBzBLBsBUUOJJBSSBGGBJJGWWIBBCFFDIIFBBdkBkBCFFBBBC+B+BBBBZPP8aBB0BFFvlxDrGrG-FDDBIBsCZBCZZVDDBDBCCBWBBvFgBBNIBClCBCVBNqBBFEBNQBEEEBlCBCCCB5FBD+BBODBCXBTbbBOO3C0CBxBlCBHEEBBBDDBEDBMBBIIBkHLBF8I8IBtBBCJBC4FBxDMBEKBE4BBCFFBOBDLBFJB",!1)),Extended_Pictographic:()=>new g(m("pFFFu8HNN5GXX7CFBQBBwLBBNnFnFaKBFCBoGoHoHBLLK7B7BBCBCEBKGDBDDFDDCBBDIEBJJBBBGCCGLBMBBDCCBCCTDDBTTBEBCCCBEEBGGDBBFBBMBBGBBDGGBECBVVBGGBEBCDBDFFDDDBEBCDDCCCHEEHLLBQQDFFCFFBBBCMMBxBxBBBBKeP1LBBwOCBUBB0BFF7mBNN6SCCrrvDoBoBBCBlDLBQBBQPPBmBmBBIBxDBBNBBPDDBIBU3BBcOBLVVDIBCDBKWBH7FBDvDBDBBCCBDyCBDCBCDBG9HBC+BBMFBCXBIBBDHBNDDBCBDFFBOOBDDJBBKGGBBBNCBJCBDCCFHHEHHB0CBxBlCBGHBDQBECCBEBDMB7GlBBNDB5BHBLFBpBHBfBBNDBDNBKmBBNuBBCJBC4FB5CHBPxEBhI9fB",!1)),Hex_Digit:()=>new g(m("wBJIFbFq1-BJIFbF",!0)),Lowercase:()=>new g(m("hDZBwBLLFlBlBBWBCHBC2BCBQCBuBCDECBBBDCCDEEBFFDEEBBBDDDCCCDCCBCCDEECDDBDDBBBHGDCOCBSCBDDCEEC4BCBFBDDDBCCFICBjCBDiBBIBBfEBhDsBsBCEEDDBTccBhBBCBBECBCWCBDBCGDB0B0BBuBBCgBCK0BCDMCBgDCxBoBBo6CqBBCDB5XFBjkCIBC2D2DB+FBiC0ECBHBCgDCBHBJFBLHBJHBJFBLHBJHBJNBDHBJHBJHBJEBCBBHEEBBBCBBJDBDBBJHBLCBCBB6DOORMBuDEEBEEcKFDBBJDBFiBiBBOBFsasaBYBn6BvBBCEEBGCFCCBCCBGBEiDCBIICFFNlBBCGG0oesBCUaCBBBmEMCBBBC8BCBIBCCCDICFCCDCCBBBCSCGGGCMCFCCDOCWDBCCCBBB2ZqBBCNBHvCBh6TGBNEBqhBZBumBnBBpEjBB8EKBCOBCGBCBBkODDBBBCpBBCIBmoByBB+DVB75CfBhsVfB8BYBnqZZBbGBCRBbZBbDBCCCBFBCKBbZBbZBbZBbZBbZBbZBbZBbZBbbBdYBCFBbYBCFBbYBCFBbYBCFBbYBCFBC15B15BBIBCTBHFBmI9BB1lChBB",!1)),Math:()=>new g(m("rBRRBBBgBeeCuBuBFmBmBgB5W5WBBBDbbBDDBBBwQCBuwGccBBBMEEOPPBCBWEBMEBiCMBFEEBFFBDBTFFDJBCDDBEBHEEBDDBCCBBBCFBENBClClCBWBCFBCBBFBBFfBCHHBPPBqIBJDBVBB7CffBZBCZZMGB+NBBNJBFFBFBBDBBEEBPCCDFBMHBGBB6BCCeDBKCBxK-BBhI-PBxBUBDFB9+zB4Z4ZBEBCjFjFRCBeCCeCCkEHHBCBitDBBhrwBwoBwoBBzCBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBDxBBhwFDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBB-uCIB",!1)),Quotation_Mark:()=>new g(m("iBFFkEQQ96HHBaBBowDqOqOBCBOCBixzBDB+FFF7CBB",!1)),Terminal_Punctuation:()=>new g(m("hBLLCMMBEE-ZJJiQ6B6BpCPPCCB1FsBsBBJBCsHsHB3B3BBEBCHBgBmImIB1nB1nBBtFtFFFB4JBB2YHBmY9D9DBBBoCBB+ECBEoBoBBCBDBB7JBBjLDBjFBBLBBCCBeCB8FEB-BBBldYYBKKBBBwlDCBzJOOFLLCBBEBBtNBB8ndBBuICBkHEB-LBB3CBBgD4E4EBBB0ECBgERRB6H6HnxUDDB6B6BBBBCDBqFLLCMMBEEiCDD7hBxBxBnkBoGoG3JBB5EFBlCFB6CDB5dEBtBDB+FGBxDDBgECBiEBBHRRB5C5CBDBtDrJrJB2D2DBBBNBBnLDBEOBqDBB6HCBmQCC8HBB4CBBFBB-MCBuBmUmUBrCrCBspBspBBDB6vRBBmEiCiCBBBLqRqRBoJoJBnwTnwTovHDB",!1)),Uppercase:()=>new g(m("hCZBmDWBCGBiB2BCDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIJDCMCDQCDDDCCBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBDDBBBEWCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBpCDBNDBNDBNEBMDBnIFFECBDCBDEEBDBHGCBCBDDBLBBGbbBOBUzZzZBYBx5BvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoqZZBbZBbZBbCCBGDBDDBCBCHBbZBbBBCDBDHBCGBcBBCDBCEBCEEBFBcZBbZBbZBbZBbZBbZBfYBiBYBiBYBiBYBiBYBiB2pE2pEBgBBvgCZBHZBHZB",!1)),White_Space:()=>new g(m("JEBTlDlDbgvFgvFgsCKBeBBGwBwBh9DAB",!1))});static SCRIPTS=new Ro({Adlam:()=>new g(m("go6DrCFJFB",!0)),Ahom:()=>new g(m("g4lCaDOFW",!0)),Anatolian_Hieroglyphs:()=>new g(m("ggxCmS",!0)),Arabic:()=>new g(m("gwBEBCFBCNBCCBCfBCJBMZBCrDBChBBxCvBBxHhBBGqCBCcBxy8BtPBDvEBhBPBxDEBCmEBk7DeBkCFBJIBiBFBh43BDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBB",!1)),Armenian:()=>new g(m("xpBlBDxBDCks9BE",!0)),Avestan:()=>new g(m("g4iC1BEG",!0)),Balinese:()=>new g(m("g4GsCCxB",!0)),Bamum:()=>new g(m("g1pB3CpowB4R",!0)),Bassa_Vah:()=>new g(m("w26CdDF",!0)),Batak:()=>new g(m("g+GzBJD",!0)),Bengali:()=>new g(m("gsCDBCHBDBBDVBCGBCEEBCBDIBDBBDDBJFFBCCBDBDYB",!1)),Beria_Erfe:()=>new g(m("g17CYDY",!0)),Bhaiksuki:()=>new g(m("ggnCICsBCNLc",!0)),Bopomofo:()=>new g(m("qXB6wLqBxDf",!0)),Brahmi:()=>new g(m("ggkCtCFjBKA",!0)),Braille:()=>new g(m("ggK-H",!0)),Buginese:()=>new g(m("gwGbDB",!0)),Buhid:()=>new g(m("g6FT",!0)),Canadian_Aboriginal:()=>new g(m("ggF-TxRlC7tgCP",!0)),Carian:()=>new g(m("g1gCwB",!0)),Caucasian_Albanian:()=>new g(m("wphCzBMA",!0)),Chakma:()=>new g(m("gokC0BCR",!0)),Cham:()=>new g(m("gwqB2BKNDJDD",!0)),Cherokee:()=>new g(m("g9E1CDFz7lBvC",!0)),Chorasmian:()=>new g(m("w9jCb",!0)),Common:()=>new g(m("AgCBbFBbuBBCOBCEBYgBgBiOmBBGEBDTB1DKKHCC+THHPEEhB9E9ElQiEiEB6mB6mB2MDBjJwvBwvBBBBoCBBsGBBCumBumBOIIBCBCFBCCBDmYmYBKBD2CBCKBEKBCOBShBB-BlBBCCBDFBCaBCQBqBCBF5UBXKBW-cBhIzTBDpEBhQ9CBzMUBCCCBXBQHBFDB8CBBE7C7CB0E0EBOBhBlBBKxBxBB+BBgBwCBwB5C5CBmFBhuG-BBhoWhBBnDCBmFJB1HhFhFsMPPBzuUzuUBxGxGBIBXiBBCSBCDB0ECCBeBbFBbKBLuBuBBhChCBFBCGBLEBjICBFsBBEIBxCMB0BsBBlHaBltuBDB96D8HBEzNBHWBQQBgDzDB9B1HBLmBBD9BBEQBJBBIdBF8BB2GTBNTBN2CBKYBoE0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBDxBByjFjCBtC8BBjWrBBFjDBNOBDOBCOBCkBBLtFB5BZBCBBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBCmDBnghYffB+CB",!1)),Coptic:()=>new g(m("ifNxkKzDGG",!0)),Cuneiform:()=>new g(m("ggoC5cnDuDCEMjG",!0)),Cypriot:()=>new g(m("ggiCFBDCCBqBBCBBEDD",!1)),Cypro_Minoan:()=>new g(m("w8rCiD",!0)),Cyrillic:()=>new g(m("ggBkEBDoFBx6FKBhFtCtCojEfBhie-CBv8VBBhw4B9BBiBAB",!1)),Deseret:()=>new g(m("gghCvC",!0)),Devanagari:()=>new g(m("goCwCFODZh7nBfhwcJ",!0)),Dives_Akuru:()=>new g(m("gomCGBDDDBGBCBBCdBCBBDLBKJB",!1)),Dogra:()=>new g(m("ggmC7B",!0)),Duployan:()=>new g(m("ggvDqDGMEIIJDD",!0)),Egyptian_Hieroglyphs:()=>new g(m("ggsC1iBL68D",!0)),Elbasan:()=>new g(m("gohCnB",!0)),Elymaic:()=>new g(m("g-jCW",!0)),Ethiopic:()=>new g(m("gwEoCBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBDfBEZBnvGWBKGBCGBCGBCGBCGBCGBCGBCGBjpfFBDFBDFBKGBCGBylvCGBCDBCBBCOB",!1)),Garay:()=>new g(m("gqjClBEcJB",!0)),Georgian:()=>new g(m("glElBBCGGDqBBCDBx8CqBBDCBhiElBBCGG",!1)),Glagolitic:()=>new g(m("ggL-Ch9sDGCQDGCBCE",!0)),Gothic:()=>new g(m("w5gCa",!0)),Grantha:()=>new g(m("g4kCDBCHBDBBDVBCGBCBBCEBDIBDBBDCBDHHGGBDGBEEB",!1)),Greek:()=>new g(m("wbDBCCBDDBCFFCCCBBBCCCBSBC+BBPPBnpGEBzBEBFEB1ChKhKBUBDFBDlBBDFBDHBCGCBdBD0BBCOBCNBDFBCSBDCBCIBoJ-xiB-xiB7uVuCBSgj0Bgj0BBkCB",!1)),Gujarati:()=>new g(m("h0CCBCIBCCBCVBCGBCBBCEBDJBCCBCCBDQQBCBDLBIGB",!1)),Gunjala_Gondi:()=>new g(m("grnCFCBCkBCBCFIJ",!0)),Gurmukhi:()=>new g(m("hwCCBCFBFBBDVBCGBCBBCBBCBBDCCBDBFBBDCBEIIBCBCIIBPB",!1)),Gurung_Khema:()=>new g(m("go4C5B",!0)),Han:()=>new g(m("g0LZBC4CBN1GBwBCCaIBPDBle-tGBhC-vUBhoWtLBDpDBpodBBNGBqgkB-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Hangul:()=>new g(m("goE-HvxHBiI9CyDeiCei3dckUj9KNWFwBl9JeEFDFDFDC",!0)),Hanifi_Rohingya:()=>new g(m("gojCnBJJ",!0)),Hanunoo:()=>new g(m("g5FU",!0)),Hatran:()=>new g(m("gniCSCBGE",!0)),Hebrew:()=>new g(m("xsB2BBJaBFFBpp9BZBCEBCCCBCCBCCBIB",!1)),Hiragana:()=>new g(m("hiM1CBHCBi7-C+IBTeeBBBulQAB",!1)),Imperial_Aramaic:()=>new g(m("giiCVCI",!0)),Inherited:()=>new g(m("gYvDB2IBBlOKBbhXhXBCB8qEtBBDLBlPCBCMBCGBFHHEBBnG-BBtQBBjGgBB65DDBsDBBmrzBPBRNBwejHjH7iEl+uBl+uBBsBBDWBhRCBSHBDGBfDBz6rYvHB",!1)),Inscriptional_Pahlavi:()=>new g(m("g7iCSGH",!0)),Inscriptional_Parthian:()=>new g(m("g6iCVDH",!0)),Javanese:()=>new g(m("gsqBtCDJFB",!0)),Kaithi:()=>new g(m("gkkCiCLA",!0)),Kannada:()=>new g(m("gkDMCCCWCJCEDICCCDIBGCCDDJCC",!0)),Katakana:()=>new g(m("hlM5CBDCBxHPBxGuBBC3CBvgzBJBCsBBzisBDBCGBCBBCgJgJBBBzBPPBCB",!1)),Kawi:()=>new g(m("g4nCQCoBEc",!0)),Kayah_Li:()=>new g(m("goqBtBCA",!0)),Kharoshthi:()=>new g(m("gwiCDCBGHCCCcDCFJII",!0)),Khitan_Small_Script:()=>new g(m("k-7C84G84GB0OBqBAB",!1)),Khmer:()=>new g(m("g8F9CDJHJnPf",!0)),Khojki:()=>new g(m("gwkCRCuB",!0)),Khudawadi:()=>new g(m("w1kC6BGJ",!0)),Kirat_Rai:()=>new g(m("gq7C5B",!0)),Lao:()=>new g(m("h0DBBCCCBDBCXBCCCBVBDEBCCCBFBCJBDDB",!1)),Latin:()=>new g(m("hCZBHZBwBQQGWBCeBCgOBoBEB8wGlBBHwBBGDBGMBClCBiC-HByLOORMBuEBBHccSoBB42CfBj1elDBExCBVOBxZqBBCIBCDB38TGB7gBZBHZBmhCFBCpBBCIBm61BeBHFB",!1)),Lepcha:()=>new g(m("ggH3BEOEC",!0)),Limbu:()=>new g(m("goGeBCLBFLBFEEBKB",!1)),Linear_A:()=>new g(m("gwhC2JKVLH",!0)),Linear_B:()=>new g(m("gggCLCZCSCBCODNjB6D",!0)),Lisu:()=>new g(m("wmpBvBx1eA",!0)),Lycian:()=>new g(m("g0gCc",!0)),Lydian:()=>new g(m("gpiCZGA",!0)),Mahajani:()=>new g(m("wqkCmB",!0)),Makasar:()=>new g(m("g3nCY",!0)),Malayalam:()=>new g(m("goDMCCCyBCCCFFPDZ",!0)),Mandaic:()=>new g(m("giCbDA",!0)),Manichaean:()=>new g(m("g2iCmBFL",!0)),Marchen:()=>new g(m("wjnCfDVCN",!0)),Masaram_Gondi:()=>new g(m("gonCGBCBBCrBBECCBCCBHBJJB",!1)),Medefaidrin:()=>new g(m("gy7C6C",!0)),Meetei_Mayek:()=>new g(m("g3qBWqGtBDJ",!0)),Mende_Kikakui:()=>new g(m("gg6DkGDP",!0)),Meroitic_Cursive:()=>new g(m("gtiCXFTDtB",!0)),Meroitic_Hieroglyphs:()=>new g(m("gsiCf",!0)),Miao:()=>new g(m("g47CqCF4BIQ",!0)),Modi:()=>new g(m("gwlCkCMJ",!0)),Mongolian:()=>new g(m("ggGBBDCCBSBH4CBIqBB2t-BMB",!1)),Mro:()=>new g(m("gy6CeCJFB",!0)),Multani:()=>new g(m("g0kCGBCCCBCBCOBCKB",!1)),Myanmar:()=>new g(m("ggE-EhqmBeiDfxibT",!0)),Nabataean:()=>new g(m("gkiCeJI",!0)),Nag_Mundari:()=>new g(m("wm5DpB",!0)),Nandinagari:()=>new g(m("gtmCHDtBDK",!0)),New_Tai_Lue:()=>new g(m("gsGrBFZHKEB",!0)),Newa:()=>new g(m("gglC7CCE",!0)),Nko:()=>new g(m("g+B6BDC",!0)),Nushu:()=>new g(m("h-7CvsQvsQBqMB",!1)),Nyiakeng_Puachue_Hmong:()=>new g(m("go4DsBENDJFB",!0)),Ogham:()=>new g(m("g0Fc",!0)),Ol_Chiki:()=>new g(m("wiHvB",!0)),Ol_Onal:()=>new g(m("wu5DqBFA",!0)),Old_Hungarian:()=>new g(m("gkjCyBOyBIF",!0)),Old_Italic:()=>new g(m("g4gCjBKC",!0)),Old_North_Arabian:()=>new g(m("g0iCf",!0)),Old_Permic:()=>new g(m("w6gCqB",!0)),Old_Persian:()=>new g(m("g9gCjBFN",!0)),Old_Sogdian:()=>new g(m("g4jCnB",!0)),Old_South_Arabian:()=>new g(m("gziCf",!0)),Old_Turkic:()=>new g(m("ggjCoC",!0)),Old_Uyghur:()=>new g(m("w7jCZ",!0)),Oriya:()=>new g(m("h4CCCHDBDVCGCBCEDIDBDCICFBCEDR",!0)),Osage:()=>new g(m("wlhCjBFjB",!0)),Osmanya:()=>new g(m("gkhCdDJ",!0)),Pahawh_Hmong:()=>new g(m("g46ClCLJCGCUGS",!0)),Palmyrene:()=>new g(m("gjiCf",!0)),Pau_Cin_Hau:()=>new g(m("g2mC4B",!0)),Phags_Pa:()=>new g(m("giqB3B",!0)),Phoenician:()=>new g(m("goiCbEA",!0)),Psalter_Pahlavi:()=>new g(m("g8iCRIDNG",!0)),Rejang:()=>new g(m("wpqBjBMA",!0)),Runic:()=>new g(m("g1FqCEK",!0)),Samaritan:()=>new g(m("ggCtBDO",!0)),Saurashtra:()=>new g(m("gkqBlCJL",!0)),Sharada:()=>new g(m("gskC-ChsCH",!0)),Shavian:()=>new g(m("wihCvB",!0)),Siddham:()=>new g(m("gslC1BDlB",!0)),Sidetic:()=>new g(m("gqiCZ",!0)),SignWriting:()=>new g(m("gg2DrUQECO",!0)),Sinhala:()=>new g(m("hsDCBCRBEXBCIBCDDBFBEFFBEBCCCBGBHJBDCBt-gCTB",!1)),Sogdian:()=>new g(m("w5jCpB",!0)),Sora_Sompeng:()=>new g(m("wmkCYIJ",!0)),Soyombo:()=>new g(m("wymCyC",!0)),Sundanese:()=>new g(m("g8G-BhIH",!0)),Sunuwar:()=>new g(m("g+mChBPJ",!0)),Syloti_Nagri:()=>new g(m("ggqBsB",!0)),Syriac:()=>new g(m("g4BNC7BDCxIK",!0)),Tagalog:()=>new g(m("g4FVKA",!0)),Tagbanwa:()=>new g(m("g7FMCCCB",!0)),Tai_Le:()=>new g(m("wqGdDE",!0)),Tai_Tham:()=>new g(m("gxG+BCcDKHJHN",!0)),Tai_Viet:()=>new g(m("g0qBiCZE",!0)),Tai_Yo:()=>new g(m("g25DeCVJB",!0)),Takri:()=>new g(m("g0lC5BHJ",!0)),Tamil:()=>new g(m("i8CBBCFBECBCDBEBBCCCBEEBEEBBBELBFEBECBCDBDHHPUBm+kCxBBOAB",!1)),Tangsa:()=>new g(m("wz6CuCCJ",!0)),Tangut:()=>new g(m("g-7CgBgBB+3GBhQeBiDyDB",!1)),Telugu:()=>new g(m("ggDMCCCWCPDICCCDIBCCCBDDDJII",!0)),Thaana:()=>new g(m("g8BxB",!0)),Thai:()=>new g(m("hwD5BGb",!0)),Tibetan:()=>new g(m("g4DnCCjBFmBCjBCOCGFB",!0)),Tifinagh:()=>new g(m("wpL3BIBPA",!0)),Tirhuta:()=>new g(m("gklCnCJJ",!0)),Todhri:()=>new g(m("guhCzB",!0)),Tolong_Siki:()=>new g(m("wtnCrBFJ",!0)),Toto:()=>new g(m("w04De",!0)),Tulu_Tigalari:()=>new g(m("g8kCJBCDDClBBCJBCDDCDBCJBCBBJBB",!1)),Ugaritic:()=>new g(m("g8gCdCA",!0)),Unknown:()=>new g(m("4bBBHDBICCVuMuMnBBBzBBBE4B4BBGBcDBHKBvI9B9BBmDmDBMB8BBByBBBQddBCCMEBjBEBuHJJBDDBXXICCBBBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBbFB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKmDmDNBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBjoIBvLBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCC-FCBHBBHBBHBBECBIIIBIBGBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIBlCJBCBBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMB3iBJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBJ76DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBjGUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIm8yVBCdBhD-DBxHvw-FB",!1)),Vai:()=>new g(m("gopBrJ",!0)),Vithkuqi:()=>new g(m("wrhCKCOCGCBCKCOCGCB",!0)),Wancho:()=>new g(m("g24D5BGA",!0)),Warang_Citi:()=>new g(m("glmCyCNA",!0)),Yezidi:()=>new g(m("g0jCpBCCDB",!0)),Yi:()=>new g(m("ggoBskBE2B",!0)),Zanabazar_Square:()=>new g(m("gwmCnC",!0))});static FOLD_CATEGORIES=new Ro({L:()=>new g(m("laA",!0)),LC:()=>new g(m("laA",!0)),Ll:()=>new g(m("hCZBmDWBCGBiBuBCEECDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIBBCBBCBBCOCDQCDBBCCCBBBC4BCIBBCBBDCCBCBCGC3HrBrBCEEJHHCCBCCCBCCBPBCIBkBJJCUCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBZHBJHBJHBJEBMEBMDBNEBMEBqJEEBHHxC9zC9zCBuBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoyehBB",!1)),Lt:()=>new g(m("kOCCBCCBCClBCCtsHHBJHBJHBMQQwBAB",!1)),Lu:()=>new g(m("hDZB7BqBqBBWBCHBCuBCEECDOCDsBCDECBBBDCCDEEGDDECBDDDCCCDFFDEECDDECCGBBCBBCBBCOCBSCDBBCEECkBCEQCJDDBCCFICBEBCBBCCCBEEBCCBCBCEBDCCBDDIDDCBBEFBGLLBnFnFsBCCEEEBBBvBDBCdBCBBECBCWCBDBCGD1BvBBCgBCK0BCDMCBgDCyBlBBq6CqBBDCB5XFBjkCIBCvHvHERRzD0ECGGGC8CCBHBJFBLHBJHBJFBMGCJHBJNBzBBBNSSBPPBEEpL2B2Bs1CvBBCEEBGCHDDLiDCJCCFNNBkBBCGG0oesBCUaCoEMCE8BCLCCDICFFFCBBDSCMOCFCCDOCb9a9advCBi8UZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBvyehBB",!1)),M:()=>new g(m("5cgBgBlgHAB",!1)),Mn:()=>new g(m("5cgBgBlgHAB",!1)),Emoji:()=>new g(m("8mJA",!0)),Extended_Pictographic:()=>new g(m("8mJA",!0)),Lowercase:()=>new g(m("hCZBmDWBCGBiBuBCEECDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIBBCBBCBBCOCDQCDBBCCCBBBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBJJCUCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBZHBJHBJHBJEBMEBMDBNEBMEBqJEEBHHuBPBUzZzZBYBx5BvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoyehBB",!1)),Math:()=>new g(m("ycGDCHHFMMDDDCHHFAB",!1)),Uppercase:()=>new g(m("hDZB7BqBqBBWBCHBCuBCEECDOCDsBCDECBBBDCCDEEGDDECBDDDCCCDFFDEECDDECCGBBCBBCBBCOCBSCDBBCEECkBCEQCJDDBCCFICBEBCBBCCCBEEBCCBCBCEBDCCBDDIDDCBBEFBGLLBnFnFsBCCEEEBBBvBDBCdBCBBECBCWCBDBCGD1BvBBCgBCK0BCDMCBgDCyBlBBq6CqBBDCB5XFBjkCIBCvHvHERRzD0ECGGGC8CCBHBJFBLHBJHBJFBMGCJHBJNBzBBBNSSBPPBEEpLiBiBBOBFsasaBYBn6BvBBCEEBGCHDDLiDCJCCFNNBkBBCGG0oesBCUaCoEMCE8BCLCCDICFFFCBBDSCMOCFCCDOCb9a9advCBi8UZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBvyehBB",!1))});static FOLD_SCRIPT=new Ro({Common:()=>new g(m("8cgBgB",!1)),Greek:()=>new g(m("1FwUwU",!1)),Inherited:()=>new g(m("5cgBgBlgHAB",!1))})},q=class dt{static MAX_RUNE=1114111;static RUNE_ERROR=65533;static isUnsearchable(e){return e===dt.RUNE_ERROR||e>=dt.MIN_HIGH_SURROGATE&&e<=dt.MAX_LOW_SURROGATE}static MAX_ASCII=127;static MAX_LATIN1=255;static MAX_BMP=65535;static MIN_FOLD=65;static MAX_FOLD=125251;static MIN_HIGH_SURROGATE=55296;static MAX_HIGH_SURROGATE=56319;static MIN_LOW_SURROGATE=56320;static MAX_LOW_SURROGATE=57343;static MIN_SUPPLEMENTARY_CODE_POINT=65536;static is32(e,t){let s=0,r=e.length;for(;s<r;){const i=s+Math.floor((r-s)/2),o=e.getLo(i),a=e.getHi(i);if(o<=t&&t<=a){const l=e.getStride(i);return(t-o)%l===0}t<o?r=i:s=i+1}return!1}static is(e,t){if(t<=dt.MAX_LATIN1){for(let s=0;s<e.length;s++){if(t>e.getHi(s))continue;const r=e.getLo(s);if(t<r)return!1;const i=e.getStride(s);return(t-r)%i===0}return!1}return e.length>0&&t>=e.getLo(0)&&dt.is32(e,t)}static isPrint(e){return e<=dt.MAX_LATIN1?e>=32&&e<dt.MAX_ASCII||e>=161&&e!==173:dt.is(yt.Print,e)}static simpleFold(e){if(yt.CASE_ORBIT.has(e))return yt.CASE_ORBIT.get(e);if(e<=dt.MAX_ASCII){const t=k.toLowerCase(e);return t!==e?t:k.toUpperCase(e)}return e}static equalsIgnoreCase(e,t){if(e===t)return!0;if(e<0||t<0)return!1;if(e<=dt.MAX_ASCII&&t<=dt.MAX_ASCII)return 65<=e&&e<=90&&(e|=32),65<=t&&t<=90&&(t|=32),e===t;for(let s=dt.simpleFold(e);s!==e;s=dt.simpleFold(s))if(s===t)return!0;return!1}},Ki=class extends Error{constructor(n){super(n),this.name="RE2JSException"}},De=class extends Ki{constructor(n,e=null){let t=`error parsing regexp: ${n}`;e&&(t+=`: \`${e}\``),super(t),this.name="RE2JSSyntaxException",this.message=t,this.error=n,this.input=e}getDescription(){return this.error}getPattern(){return this.input}},Qc=class extends Ki{constructor(n){super(n),this.name="RE2JSCompileException"}},ft=class extends Ki{constructor(n){super(n),this.name="RE2JSGroupException"}},u0=class extends Ki{constructor(n){super(n),this.name="RE2JSFlagsException"}},da=class extends Ki{constructor(n){super(n),this.name="RE2JSInternalException"}};const Au=256,zp=new Uint8Array(Au);for(let n=0;n<Au;n++)zp[n]=97<=n&&n<=122||65<=n&&n<=90||48<=n&&n<=57||n===95?1:0;let Xc=null,Zc=null;var H=class $e{static METACHARACTERS="\\.+*?()|[]{}^$";static EMPTY_BEGIN_LINE=1;static EMPTY_END_LINE=2;static EMPTY_BEGIN_TEXT=4;static EMPTY_END_TEXT=8;static EMPTY_WORD_BOUNDARY=16;static EMPTY_NO_WORD_BOUNDARY=32;static EMPTY_ALL=-1;static emptyInts(){return[]}static isString(e){return typeof e=="string"||Object.prototype.toString.call(e)==="[object String]"}static typeName(e){return e===null||typeof e!="object"&&typeof e!="function"?e===null?"null":typeof e:Object.prototype.toString.call(e).slice(8,-1)}static checkPattern(e){if(!$e.isString(e))throw new TypeError(`The pattern must be a string, not ${$e.typeName(e)} (RE2JS.translateRegExp() converts a RegExp)`)}static checkInput(e){if(!$e.isString(e)&&!$e.isByteArray(e))throw new TypeError(`The input must be a string or a byte array (Uint8Array or number[]), not ${$e.typeName(e)}`)}static checkFlags(e){if(!Number.isInteger(e)||(e&-544)!==0)throw new u0("Flags should only be a combination of MULTILINE, DOTALL, CASE_INSENSITIVE, DISABLE_UNICODE_GROUPS, LONGEST_MATCH, LOOKBEHINDS")}static isByteArray(e){return Array.isArray(e)||Object.prototype.toString.call(e)==="[object Uint8Array]"}static isalnum(e){return k.CODES[0]<=e&&e<=k.CODES[9]||k.CODES.a<=e&&e<=k.CODES.z||k.CODES.A<=e&&e<=k.CODES.Z}static unhex(e){return k.CODES[0]<=e&&e<=k.CODES[9]?e-k.CODES[0]:k.CODES.a<=e&&e<=k.CODES.f?e-k.CODES.a+10:k.CODES.A<=e&&e<=k.CODES.F?e-k.CODES.A+10:-1}static escapeRune(e){let t="";if(q.isPrint(e))$e.METACHARACTERS.indexOf(String.fromCodePoint(e))>=0&&(t+="\\"),t+=String.fromCodePoint(e);else switch(e){case k.CODES['"']:t+='\\"';break;case k.CODES["\\"]:t+="\\\\";break;case k.CODES["	"]:t+="\\t";break;case k.CODES[`
`]:t+="\\n";break;case k.CODES["\r"]:t+="\\r";break;case k.CODES["\b"]:t+="\\b";break;case k.CODES["\f"]:t+="\\f";break;default:{let s=e.toString(16);e<256?(t+="\\x",s.length===1&&(t+="0"),t+=s):t+=`\\x{${s}}`;break}}return t}static stringToRunes(e){const t=String(e),s=[];let r=0;for(;r<t.length;){const i=t.codePointAt(r);s.push(i),r+=i>q.MAX_BMP?2:1}return new Int32Array(s)}static runeToString(e){return String.fromCodePoint(e)}static isWordRune(e){return e<Au?zp[e]===1:!1}static emptyOpContext(e,t){let s=0;return e<0&&(s|=$e.EMPTY_BEGIN_TEXT|$e.EMPTY_BEGIN_LINE),e===10&&(s|=$e.EMPTY_BEGIN_LINE),t<0&&(s|=$e.EMPTY_END_TEXT|$e.EMPTY_END_LINE),t===10&&(s|=$e.EMPTY_END_LINE),$e.isWordRune(e)!==$e.isWordRune(t)?s|=$e.EMPTY_WORD_BOUNDARY:s|=$e.EMPTY_NO_WORD_BOUNDARY,s}static quoteMeta(e){return e.split("").map(t=>$e.METACHARACTERS.indexOf(t)>=0?`\\${t}`:t).join("")}static charCount(e){return e>q.MAX_BMP?2:1}static toArray(e){const t=e.length,s=new Array(t);for(let r=0;r<t;r++)s[r]=e[r];return s}static stringToUtf8ByteArray(e){if(globalThis.TextEncoder)return Xc||(Xc=new TextEncoder),Xc.encode(e);{let t=[],s=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[s++]=i:i<2048?(t[s++]=i>>6|192,t[s++]=i&63|128):(i&64512)===q.MIN_HIGH_SURROGATE&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===q.MIN_LOW_SURROGATE?(i=q.MIN_SUPPLEMENTARY_CODE_POINT+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[s++]=i>>18|240,t[s++]=i>>12&63|128,t[s++]=i>>6&63|128,t[s++]=i&63|128):(t[s++]=i>>12|224,t[s++]=i>>6&63|128,t[s++]=i&63|128)}return t}}static utf8ByteArrayToString(e){if(globalThis.TextDecoder){Zc||(Zc=new TextDecoder("utf-8"));const t=e instanceof Uint8Array?e:new Uint8Array(e);return Zc.decode(t)}else{let t=[],s=0,r=0;for(;s<e.length;){let i=e[s++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){let o=e[s++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){let o=e[s++],a=e[s++],l=e[s++],u=((i&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-q.MIN_SUPPLEMENTARY_CODE_POINT;t[r++]=String.fromCharCode(q.MIN_HIGH_SURROGATE+(u>>10)),t[r++]=String.fromCharCode(q.MIN_LOW_SURROGATE+(u&1023))}else{let o=e[s++],a=e[s++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return t.join("")}}};const Wp=(n=[],e=0)=>{const t=Object.create(null);for(let s=0;s<n.length;s++){const r=n[s],i=e+s;t[r]=i,t[i]=r}return Object.freeze(t)};var Ps=class Nl{static Encoding=Wp(["UTF_16","UTF_8"]);getEncoding(){throw Error("not implemented")}asCharSequence(){throw Error("not implemented")}asBytes(){throw Error("not implemented")}length(){throw Error("not implemented")}isUTF8Encoding(){return this.getEncoding()===Nl.Encoding.UTF_8}isUTF16Encoding(){return this.getEncoding()===Nl.Encoding.UTF_16}},Rf=class extends Ps{constructor(n=null){super(),this.bytes=n}getEncoding(){return Ps.Encoding.UTF_8}asCharSequence(){return H.utf8ByteArrayToString(this.bytes)}asBytes(){return this.bytes}length(){return this.bytes.length}},B0=class extends Ps{constructor(n=null){super(),this.charSequence=n}getEncoding(){return Ps.Encoding.UTF_16}asCharSequence(){return this.charSequence}asBytes(){return H.stringToUtf8ByteArray(this.charSequence.toString())}length(){return this.charSequence.length}},Is=class{static utf16(n){return H.checkInput(n),new B0(n)}static utf8(n){return H.isByteArray(n)?new Rf(n):new Rf(H.stringToUtf8ByteArray(n))}},ut=class{static EOF(){return-8}constructor(){this.start=0,this.end=0}canCheckPrefix(){return!0}endPos(){return this.end-this.start}hasString(){return!1}hasAnyString(){return!1}prefixLength(){return 0}},h0=class Ys extends ut{static RUNE_ERROR_STEP=q.RUNE_ERROR<<3|1;constructor(e,t=0,s=e.length){super(),this.bytes=e,this.start=t,this.end=s}hasString(e,t){const s=e.bytes;if(s.length===0)return!0;const r=this.indexOf(this.bytes,s,this.start+t);return r!==-1&&r<=this.end-s.length}hasAnyString(e,t){return e.automaton8().searchUTF8(this.bytes,this.start+t,this.end)}step(e){if(e+=this.start,e>=this.end)return ut.EOF();const t=this.bytes[e]&255;if(t<128)return t<<3|1;let s,r,i=128,o=191;if(t>=194&&t<=223)s=2,r=t&31;else if(t>=224&&t<=239)s=3,r=t&15,t===224?i=160:t===237&&(o=159);else if(t>=240&&t<=244)s=4,r=t&7,t===240?i=144:t===244&&(o=143);else return Ys.RUNE_ERROR_STEP;if(e+s>this.end)return Ys.RUNE_ERROR_STEP;const a=this.bytes[e+1]&255;if(a<i||a>o)return Ys.RUNE_ERROR_STEP;if(r=r<<6|a&63,s>2){const l=this.bytes[e+2]&255;if((l&192)!==128)return Ys.RUNE_ERROR_STEP;if(r=r<<6|l&63,s>3){const u=this.bytes[e+3]&255;if((u&192)!==128)return Ys.RUNE_ERROR_STEP;r=r<<6|u&63}}return r<<3|s}index(e,t){t+=this.start;const s=this.indexOf(this.bytes,e.prefixUTF8,t);return s<0?s:s-t}context(e){e+=this.start;let t=-1;if(e>this.start&&e<=this.end){let r=e-1;if(t=this.bytes[r--],t>=128){let i=e-4;for(i<this.start&&(i=this.start);r>=i&&(this.bytes[r]&192)===128;)r--;r<this.start&&(r=this.start);const o=this.step(r-this.start);t=r+(o&7)===e?o>>3:q.RUNE_ERROR}}const s=e<this.end?this.step(e-this.start)>>3:-1;return H.emptyOpContext(t,s)}indexOf(e,t,s=0){let r=t.length;if(r===0)return s<=this.end?s:-1;const i=t[0];let o=this.end-r;const a=typeof e.indexOf=="function";let l=s;for(;l<=o;){if(a){if(l=e.indexOf(i,l),l===-1||l>o)return-1}else{for(;l<=o&&e[l]!==i;)l++;if(l>o)return-1}let u=!0;for(let h=1;h<r;h++)if(e[l+h]!==t[h]){u=!1;break}if(u)return l;l++}return-1}prefixLength(e){return e.prefixUTF8.length}},f0=class extends ut{constructor(n,e=0,t=n.length){super(),this.charSequence=n,this.start=e,this.end=t}hasString(n,e){const t=this.charSequence.indexOf(n.str,this.start+e);return t!==-1&&t<=this.end-n.str.length}hasAnyString(n,e){return n.automaton16().searchUTF16(this.charSequence,this.start+e,this.end)}step(n){if(n+=this.start,n>=this.end)return ut.EOF();const e=this.charSequence.charCodeAt(n);if(e<q.MIN_HIGH_SURROGATE||e>q.MAX_HIGH_SURROGATE||n+1>=this.end)return e<<3|1;const t=this.charSequence.charCodeAt(n+1);return t>=q.MIN_LOW_SURROGATE&&t<=q.MAX_LOW_SURROGATE?(e-q.MIN_HIGH_SURROGATE)*1024+(t-q.MIN_LOW_SURROGATE)+q.MIN_SUPPLEMENTARY_CODE_POINT<<3|2:e<<3|1}index(n,e){e+=this.start;const t=this.charSequence.indexOf(n.prefix,e);return t<0||t>this.end-n.prefix.length?-1:t-e}context(n){n+=this.start;const e=n>this.start&&n<=this.end?this.charSequence.charCodeAt(n-1):-1,t=n<this.end?this.charSequence.charCodeAt(n):-1;return H.emptyOpContext(e,t)}prefixLength(n){return n.prefix.length}},we=class{static fromUTF8(n,e=0,t=n.length){return new h0(n,e,t)}static fromUTF16(n,e=0,t=void 0){return H.checkInput(n),new f0(n,e,t??n.length)}},Sf=class Yp{static MAX_REPLACER_ARGS=65535;static quoteReplacement(e,t=!1){return t?e.indexOf("\\")<0&&e.indexOf("$")<0?e:e.split("").map(s=>{const r=s.codePointAt(0);return r===k.CODES["\\"]||r===k.CODES.$?`\\${s}`:s}).join(""):e.indexOf("$")<0?e:e.split("").map(s=>s.codePointAt(0)===k.CODES.$?"$$":s).join("")}constructor(e,t){if(e===null)throw new Error("pattern is null");this.patternInput=e;const s=this.patternInput.re2();this.patternGroupCount=s.numberOfCapturingGroups(),this.groups=[],this.namedGroups=s.namedGroups,this.hasNamedGroups=Object.keys(this.namedGroups).length>0,this.numberOfInstructions=s.numberOfInstructions(),this.lookbehindState=null,t instanceof Ps?this.resetMatcherInput(t):H.isByteArray(t)?this.resetMatcherInput(Is.utf8(t)):this.resetMatcherInput(Is.utf16(t))}pattern(){return this.patternInput}reset(){return this.matcherInputLength=this.matcherInput.length(),this.appendPos=0,this.hasMatch=!1,this.hasGroups=!1,this.anchorFlag=0,this}resetMatcherInput(e){if(e===null)throw new Error("input is null");return e instanceof Ps||(H.isByteArray(e)?e=Is.utf8(e):e=Is.utf16(e)),this.matcherInput=e,this.lookbehindState!==null?this.lookbehindState.reset():this.lookbehindState=this.patternInput.re2().createLookbehindState(),this.reset(),this}start(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new ft(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e]}end(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new ft(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e+1]}programSize(){return this.numberOfInstructions}group(e=0){if(typeof e=="string"){const r=this.namedGroups[e];if(!Number.isFinite(r))throw new ft(`group '${e}' not found`);e=r}const t=this.start(e),s=this.end(e);return t<0&&s<0?null:this.substring(t,s)}getNamedGroups(){if(!this.hasMatch)throw new ft("perhaps no match attempted");const e=Object.create(null);for(const t of Object.keys(this.namedGroups))e[t]=this.group(t);return e}groupCount(){return this.patternGroupCount}loadGroup(e){if(!Number.isInteger(e)||e<0||e>this.patternGroupCount)throw new ft(`Group index out of bounds: ${e}`);if(!this.hasMatch)throw new ft("perhaps no match attempted");if(e===0||this.hasGroups)return;const t=this.matcherInputLength,s=this.patternInput.re2().matchMachineInput(this.matcherInput,this.groups[0],t,this.anchorFlag,1+this.patternGroupCount,this.lookbehindState);if(!s[0])throw new ft("inconsistency in matching group data");this.groups=s[1],this.hasGroups=!0}matches(){return this.genMatch(0,V.ANCHOR_BOTH)}lookingAt(){return this.genMatch(0,V.ANCHOR_START)}find(e=null){if(e!==null){if(!Number.isInteger(e)||e<0||e>this.matcherInputLength)throw new ft(`start index out of bounds: ${e}`);return this.reset(),this.genMatch(e,0)}if(e=0,this.hasMatch&&(e=this.groups[1],this.groups[0]===this.groups[1])){const t=(this.matcherInput.isUTF16Encoding()?we.fromUTF16(this.matcherInput.asCharSequence(),0,this.matcherInputLength):we.fromUTF8(this.matcherInput.asBytes(),0,this.matcherInputLength)).step(e);t<0?e++:e+=t&7}return this.genMatch(e,V.UNANCHORED)}genMatch(e,t){const s=this.patternInput.re2().matchMachineInput(this.matcherInput,e,this.matcherInputLength,t,1,this.lookbehindState);return s[0]?(this.groups=s[1],this.hasMatch=!0,this.hasGroups=this.patternGroupCount===0,this.anchorFlag=t,!0):(this.hasMatch=!1,!1)}substring(e,t){return this.matcherInput.isUTF8Encoding()?H.utf8ByteArrayToString(this.matcherInput.asBytes().slice(e,t)):this.matcherInput.asCharSequence().substring(e,t).toString()}inputLength(){return this.matcherInputLength}appendReplacement(e,t=!1){let s="";const r=this.start(),i=this.end();return this.appendPos<r&&(s+=this.substring(this.appendPos,r)),this.appendPos=i,s+=t?this.appendReplacementInternalJava(e):this.appendReplacementInternalJs(e),s}appendReplacementInternalJava(e){let t="",s=0;const r=e.length;let i=0;for(;i<r;){const o=e.codePointAt(i);if(o===k.CODES["\\"]){if(s<i&&(t+=e.substring(s,i)),i++,i>=r)throw new ft("character to be escaped is missing");s=i,i++;continue}if(o===k.CODES.$){if(s<i&&(t+=e.substring(s,i)),i+1>=r)throw new ft("Illegal group reference: group index is missing");const a=e.codePointAt(i+1);if(k.CODES[0]<=a&&a<=k.CODES[9]){let l=a-k.CODES[0],u=i+2;for(;u<r;u++){const d=e.codePointAt(u);if(d<k.CODES[0]||d>k.CODES[9]||l*10+d-k.CODES[0]>this.patternGroupCount)break;l=l*10+d-k.CODES[0]}if(l>this.patternGroupCount)throw new ft(`n > number of groups: ${l}`);const h=this.group(l);h!==null&&(t+=h),i=u,s=i}else if(a===k.CODES["{"]){let l=i+2;for(;l<r&&e.codePointAt(l)!==k.CODES["}"];)l++;if(l>=r)throw new ft("named capture group is missing trailing '}'");const u=e.substring(i+2,l),h=this.group(u);h!==null&&(t+=h),i=l+1,s=i}else throw new ft("Illegal group reference");continue}i++}return s<r&&(t+=e.substring(s,r)),t}appendReplacementInternalJs(e){const t=o=>o>=48&&o<=57,s=this.patternGroupCount;let r="",i=0;for(;i<e.length;){const o=e.indexOf("$",i);if(o<0)break;r+=e.substring(i,o),i=o;const a=e.charCodeAt(i+1);if(a===k.CODES.$)r+="$",i+=2;else if(a===k.CODES["&"])r+=this.group(0),i+=2;else if(a===k.CODES["`"])r+=this.substring(0,this.start(0)),i+=2;else if(a===k.CODES["'"])r+=this.substring(this.end(0),this.matcherInputLength),i+=2;else if(t(a)){let l=1,u=a-48;const h=e.charCodeAt(i+2);if(t(h)&&u*10+h-48<=s&&(l=2,u=u*10+h-48),u>=1&&u<=s){const d=this.group(u);d!==null&&(r+=d)}else r+=e.substring(i,i+1+l);i+=1+l}else if(a===k.CODES["<"]&&this.hasNamedGroups){const l=e.indexOf(">",i+2);if(l<0)r+="$<",i+=2;else{const u=e.substring(i+2,l);if(Object.hasOwn(this.namedGroups,u)){const h=this.group(u);h!==null&&(r+=h)}i=l+1}}else r+="$",i+=1}return r+e.substring(i)}appendTail(){return this.substring(this.appendPos,this.matcherInputLength)}replaceAll(e,t=!1){return this.replace(e,!0,t)}replaceFirst(e,t=!1){return this.replace(e,!1,t)}replace(e,t=!0,s=!1){let r="";this.reset();const i=typeof e=="function";let o=null;if(i){if(this.groupCount()>=Yp.MAX_REPLACER_ARGS)throw new ft("Too many capture groups to safely invoke replacer function");o=this.matcherInput.isUTF8Encoding()?this.matcherInput.asBytes():this.matcherInput.asCharSequence()}for(;this.find()&&(r+=i?this.appendReplacementFunc(e,o):this.appendReplacement(e,s),!!t););return r+=this.appendTail(),r}appendReplacementFunc(e,t){let s="";const r=this.start(),i=this.end();this.appendPos<r&&(s+=this.substring(this.appendPos,r)),this.appendPos=i;const o=this.matchArray();return o.push(r,t),this.hasNamedGroups&&o.push(this.namedGroupsObject()),s+=String(e(...o)),s}matchArray(){const e=[this.group(0)];for(let t=1;t<=this.patternGroupCount;t++){const s=this.group(t);e.push(s===null?void 0:s)}return e}namedGroupsObject(){if(!this.hasNamedGroups)return;const e=this.getNamedGroups();for(const t in e)e[t]===null&&(e[t]=void 0);return e}},N=class je{static ALT=1;static ALT_MATCH=2;static CAPTURE=3;static EMPTY_WIDTH=4;static FAIL=5;static MATCH=6;static NOP=7;static RUNE=8;static RUNE1=9;static RUNE_ANY=10;static RUNE_ANY_NOT_NL=11;static LB_WRITE=12;static LB_CHECK=13;static isRuneOp(e){return je.RUNE<=e&&e<=je.RUNE_ANY_NOT_NL}static escapeRunes(e){let t='"';for(let s of e)t+=H.escapeRune(s);return t+='"',t}constructor(e){this.op=e,this.out=0,this.arg=0,this.runes=new Int32Array(0),this.next=null}matchRune(e){if(this.runes.length===1){const o=this.runes[0];return(this.arg&V.FOLD_CASE)!==0?q.equalsIgnoreCase(o,e):e===o}const t=this.runes.length;if(t===0)return!1;if(t===2||t===4||t===6||t===8){for(let o=0;o<t;o+=2){if(e<this.runes[o])return!1;if(e<=this.runes[o+1])return!0}return!1}let s=0,r=t>>1;for(;r>1;){const o=r>>1;s+=this.runes[s+o<<1]<=e?o:0,r-=o}s+=this.runes[s<<1]<=e?1:0;const i=s-1;return i>=0&&e<=this.runes[i<<1|1]}matchRunePos(e){if(this.runes.length===1){const o=this.runes[0];return(this.arg&V.FOLD_CASE)!==0?q.equalsIgnoreCase(o,e)?0:-1:e===o?0:-1}const t=this.runes.length;if(t===0)return-1;if(t===2||t===4||t===6||t===8){for(let o=0;o<t;o+=2){if(e<this.runes[o])return-1;if(e<=this.runes[o+1])return Math.floor(o/2)}return-1}let s=0,r=t>>1;for(;r>1;){const o=r>>1;s+=this.runes[s+o<<1]<=e?o:0,r-=o}s+=this.runes[s<<1]<=e?1:0;const i=s-1;return i>=0&&e<=this.runes[i<<1|1]?i:-1}toString(){switch(this.op){case je.ALT:return`alt -> ${this.out}, ${this.arg}`;case je.ALT_MATCH:return`altmatch -> ${this.out}, ${this.arg}`;case je.CAPTURE:return`cap ${this.arg} -> ${this.out}`;case je.EMPTY_WIDTH:return`empty ${this.arg} -> ${this.out}`;case je.MATCH:return`match${this.arg!==0?` ${this.arg}`:""}`;case je.FAIL:return"fail";case je.NOP:return`nop -> ${this.out}`;case je.LB_WRITE:return`lbwrite ${this.arg} -> ${this.out}`;case je.LB_CHECK:return`lbcheck ${this.arg} -> ${this.out}`;case je.RUNE:return this.runes===null?"rune <null>":["rune ",je.escapeRunes(this.runes),(this.arg&V.FOLD_CASE)!==0?"/i":""," -> ",this.out].join("");case je.RUNE1:return`rune1 ${je.escapeRunes(this.runes)} -> ${this.out}`;case je.RUNE_ANY:return`any -> ${this.out}`;case je.RUNE_ANY_NOT_NL:return`anynotnl -> ${this.out}`;default:throw new Error("unhandled case in Inst.toString")}}},Of=class Qp{constructor(e){this.sparse=new Int32Array(e),this.densePcs=new Int32Array(e),this.denseCaps=null,this.size=0,this.ncap=0,this.mainThreads=0}static INITIAL_THREADS=32;init(e){this.ncap=e;const t=Math.min(this.densePcs.length,Qp.INITIAL_THREADS)*e;(!this.denseCaps||this.denseCaps.length<t)&&(this.denseCaps=new Int32Array(t))}growCaps(e){const t=this.densePcs.length*this.ncap,s=new Int32Array(Math.min(t,Math.max(e,2*this.denseCaps.length)));s.set(this.denseCaps),this.denseCaps=s}contains(e){const t=this.sparse[e];return t<this.size&&this.densePcs[t]===e}isEmpty(){return this.size===0}add(e){const t=this.size++;return this.sparse[e]=t,this.densePcs[t]=e,t}clear(){this.size=0,this.mainThreads=0}toString(){let e="{";for(let t=0;t<this.size;t++)t!==0&&(e+=", "),e+=this.densePcs[t];return e+="}",e}},d0=class{constructor(n){this.pos=-1,this.pcs=new Int32Array(n.numInst()),this.size=0,this.lbTable=new Int32Array(n.numLb+1)}reset(){this.pos=-1,this.size=0}},C0=class Xp{static fromRE2(e){const t=new Xp;return t.prog=e.prog,t.re2=e,t.q0=new Of(t.prog.numInst()),t.q1=new Of(t.prog.numInst()),t.addStack=new Int32Array(2*(t.prog.numInst()+1)),t.matched=!1,t.matchcap=new Int32Array(t.prog.numCap<2?2:t.prog.numCap),t.ncap=0,t}constructor(){this.prog=null,this.re2=null,this.q0=null,this.q1=null,this.addStack=null,this.matched=!1,this.matchcap=null,this.ncap=0,this.lbTable=null}init(e){this.ncap=e,e>this.matchcap.length?this.matchcap=new Int32Array(e).fill(-1):this.matchcap.fill(-1),this.q0.init(e),this.q1.init(e),this.prog.numLb>0&&((!this.lbTable||this.lbTable.length<this.prog.numLb+1)&&(this.lbTable=new Int32Array(this.prog.numLb+1)),this.lbTable.fill(-1))}submatches(){return this.ncap===0?H.emptyInts():H.toArray(this.matchcap.subarray(0,this.ncap))}match(e,t,s,r=null){const i=this.re2.cond;if(i===H.EMPTY_ALL||(s===V.ANCHOR_START||s===V.ANCHOR_BOTH)&&t!==0)return!1;this.matched=!1,this.matchcap.fill(-1);const o=this.prog.numLb>0,a=t;let l=t,u=!1;o&&(r!==null&&r.pos>=0&&r.pos<=t?(l=r.pos,u=!0):l=0);let h=o&&r!==null,d=this.q0,p=this.q1,D=e.step(l),y=D>>3,R=D&7,F=-1,G=0;D!==ut.EOF()&&(D=e.step(l+R),F=D>>3,G=D&7);let K;for(l===0?K=H.emptyOpContext(-1,y):K=e.context(l),o&&(u?this.restoreLookbehinds(r,d,K):this.spawnLookbehinds(d,l,K));;){if(d.mainThreads===0){if((i&H.EMPTY_BEGIN_TEXT)!==0&&l!==0||(s===V.ANCHOR_START||s===V.ANCHOR_BOTH)&&l!==0||this.matched)break;if(this.prog.numLb===0&&d.isEmpty()&&this.re2.prefix.length!==0&&F!==this.re2.prefixRune&&e.canCheckPrefix()){const ke=e.index(this.re2,l);if(ke<0)break;l+=ke,D=e.step(l),y=D>>3,R=D&7,D=e.step(l+R),F=D>>3,G=D&7,K=e.context(l)}}l>=a&&(h&&(this.saveLookbehinds(r,d,l),h=!1),!this.matched&&(l===0||s===V.UNANCHORED)&&(this.ncap>0&&(this.matchcap[0]=l),this.add(d,this.prog.start,l,this.matchcap,0,K)));const se=l+R;if(K=e.context(se),this.step(d,p,l,se,y,K,s,l===e.endPos()),R===0||this.ncap===0&&this.matched)break;l+=R,y=F,R=G,y!==-1&&(D=e.step(l+R),F=D>>3,G=D&7);const pe=d;d=p,p=pe}return d.clear(),p.clear(),this.matched}matchSet(e,t,s){const r=this.re2.cond;if(r===H.EMPTY_ALL)return[];if((s===V.ANCHOR_START||s===V.ANCHOR_BOTH)&&t!==0)return[];let i=this.prog.numLb>0?0:t,o=t,a=this.q0,l=this.q1,u=e.step(i),h=u>>3,d=u&7,p=-1,D=0;u!==ut.EOF()&&(u=e.step(i+d),p=u>>3,D=u&7);let y=i===0?H.emptyOpContext(-1,h):e.context(i);const R=new Set;for(this.prog.numLb>0&&this.spawnLookbehinds(a,i,y);!(a.mainThreads===0&&((r&H.EMPTY_BEGIN_TEXT)!==0&&i!==0||(s===V.ANCHOR_START||s===V.ANCHOR_BOTH)&&i!==0));){(i===0||s===V.UNANCHORED)&&i>=o&&this.add(a,this.prog.start,i,this.matchcap,0,y);const F=i+d;y=e.context(F);for(let K=0;K<a.size;K++){const se=a.densePcs[K],pe=this.prog.inst[se],ke=K*this.ncap;let Te=!1;switch(pe.op){case N.MATCH:if(s===V.ANCHOR_BOTH&&i!==e.endPos())break;R.add(pe.arg);break;case N.RUNE:Te=pe.matchRune(h);break;case N.RUNE1:Te=h===pe.runes[0];break;case N.RUNE_ANY:Te=!0;break;case N.RUNE_ANY_NOT_NL:Te=h!==10;break;default:continue}Te&&this.add(l,pe.out,F,a.denseCaps,ke,y)}if(a.clear(),d===0)break;i+=d,h=p,d=D,h!==-1&&(u=e.step(i+d),p=u>>3,D=u&7);const G=a;a=l,l=G}return l.clear(),Array.from(R).sort((F,G)=>F-G)}step(e,t,s,r,i,o,a,l){const u=this.re2.longest;for(let h=0;h<e.size;h++){const d=e.densePcs[h],p=h*this.ncap;if(u&&this.matched&&this.ncap>0&&this.matchcap[0]<e.denseCaps[p])continue;const D=this.prog.inst[d];let y=!1;switch(D.op){case N.MATCH:if(a===V.ANCHOR_BOTH&&!l)break;if(this.ncap>0&&(!u||!this.matched||this.matchcap[1]<s)){e.denseCaps[p+1]=s;for(let R=0;R<this.ncap;R++)this.matchcap[R]=e.denseCaps[p+R]}u||(e.size=0),this.matched=!0;break;case N.RUNE:y=D.matchRune(i);break;case N.RUNE1:y=i===D.runes[0];break;case N.RUNE_ANY:y=!0;break;case N.RUNE_ANY_NOT_NL:y=i!==10;break;default:continue}y&&this.add(t,D.out,r,e.denseCaps,p,o)}e.clear()}spawnLookbehinds(e,t,s){for(let r=0;r<this.prog.lbStarts.length;r++)this.add(e,this.prog.lbStarts[r],t,this.matchcap,0,s)}restoreLookbehinds(e,t,s){this.lbTable.set(e.lbTable);for(let r=0;r<e.size;r++)this.add(t,e.pcs[r],e.pos,this.matchcap,0,s)}saveLookbehinds(e,t,s){let r=0;for(let i=0;i<t.size;i++){const o=t.densePcs[i];this.prog.lbInst[o]===1&&N.isRuneOp(this.prog.inst[o].op)&&(e.pcs[r++]=o)}e.size=r,e.pos=s,e.lbTable.set(this.lbTable)}add(e,t,s,r,i,o){const a=this.addStack;let l=0;for(;;){for(;t!==0&&!e.contains(t);){const h=e.add(t),d=this.prog.inst[t];switch(d.op){case N.FAIL:t=0;break;case N.ALT:case N.ALT_MATCH:a[l++]=d.arg,a[l++]=0,t=d.out;break;case N.EMPTY_WIDTH:t=(d.arg&~o)===0?d.out:0;break;case N.NOP:t=d.out;break;case N.CAPTURE:d.arg<this.ncap&&(a[l++]=-d.arg-1,a[l++]=r[i+d.arg],r[i+d.arg]=s),t=d.out;break;case N.LB_WRITE:this.lbTable[Math.abs(d.arg)]=s,t=d.out;break;case N.LB_CHECK:d.arg>0?t=this.lbTable[d.arg]===s?d.out:0:t=this.lbTable[-d.arg]!==s?d.out:0;break;case N.MATCH:case N.RUNE:case N.RUNE1:case N.RUNE_ANY:case N.RUNE_ANY_NOT_NL:if(this.prog.lbInst[t]===0&&e.mainThreads++,this.ncap>0){const p=h*this.ncap;p+this.ncap>e.denseCaps.length&&e.growCaps(p+this.ncap);for(let D=0;D<this.ncap;D++)e.denseCaps[p+D]=r[i+D]}t=0;break;default:throw new da("unhandled")}}if(l===0)return;l-=2;const u=a[l];u<0?(r[i-u-1]=a[l+1],t=0):t=u}}};const p0=(n,e,t)=>{let s=-2128831035;for(let r=0;r<n.length;r++)s^=n[r],s=Math.imul(s,16777619);s^=e,s=Math.imul(s,16777619);for(let r=0;r<t.length;r++)s^=t[r],s=Math.imul(s,16777619);return s},Pf=(n,e)=>{if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0},Nf=(n,e,t,s)=>n.flag===t&&Pf(n.nfaStates,e)&&Pf(n.matchIDs,s),el=[],Qr=-1;var So=class{constructor(n,e,t){this.nfaStates=n,this.flag=e,this.isMatch=(e&Zp.FLAG_MATCH)!==0,this.matchIDs=t,this.next=null,this.nextAnchored=null}},Zp=class qe{static FLAG_EMPTY_MASK=255;static FLAG_MATCH=256;static FLAG_LAST_WORD=512;static FLAG_NEED_SHIFT=16;static STATE_OVERHEAD=150;static ARRAY_OVERHEAD=40;static ELEMENT_SIZE=8;static TABLE_OVERHEAD=48;static PROGRESS_PER_STATE=10;constructor(e,t=8388608){this.prog=e,this.maxMem=t,this.stateCache=new Map,this.stateCount=0,this.startStates=new Map,this.failed=!1;for(let s=0;s<e.numInst();s++){const r=e.getInst(s).op;if(r===N.LB_WRITE||r===N.LB_CHECK){this.failed=!0;break}}this.computeRuneClasses(),this.stateBudget=t,this.memBudget=t}computeRuneClasses(){const e=new Set,t=(r,i)=>{e.add(r),e.add(i+1)};for(let r=0;r<this.prog.numInst();r++){const i=this.prog.getInst(r);switch(i.op){case N.RUNE:case N.RUNE1:if(i.runes.length===1){if(t(i.runes[0],i.runes[0]),(i.arg&V.FOLD_CASE)!==0)for(let o=q.simpleFold(i.runes[0]);o!==i.runes[0];o=q.simpleFold(o))t(o,o)}else for(let o=0;o<i.runes.length;o+=2)t(i.runes[o],i.runes[o+1]);break;case N.RUNE_ANY_NOT_NL:t(10,10);break;case N.EMPTY_WIDTH:(i.arg&(H.EMPTY_BEGIN_LINE|H.EMPTY_END_LINE))!==0&&t(10,10),(i.arg&(H.EMPTY_WORD_BOUNDARY|H.EMPTY_NO_WORD_BOUNDARY))!==0&&(t(48,57),t(65,90),t(95,95),t(97,122))}}e.delete(0),this.classBounds=Int32Array.from(e).sort(),this.numClasses=this.classBounds.length+1;const s=new Int32Array(q.MAX_LATIN1+1);for(let r=0;r<=q.MAX_LATIN1;r++)s[r]=this.searchClass(r);this.latin1Class=s}runeClass(e){return e<=q.MAX_LATIN1?this.latin1Class[e]:this.searchClass(e)}searchClass(e){const t=this.classBounds;let s=0,r=t.length;for(;s<r;){const i=s+r>>1;t[i]<=e?s=i+1:r=i}return s}closure(e,t){const s=new Set,r=Array.from(e);let i=0;for(;r.length>0;){const o=r.pop();if(o===0||s.has(o))continue;s.add(o);const a=this.prog.getInst(o);switch(a.op){case N.ALT:case N.ALT_MATCH:r.push(a.out),r.push(a.arg);break;case N.NOP:case N.CAPTURE:r.push(a.out);break;case N.EMPTY_WIDTH:i|=a.arg,(a.arg&~t)===0&&r.push(a.out)}}return{pcs:Array.from(s).sort((o,a)=>o-a),needflags:i}}getState(e,t,s){const r=p0(e,t,s),i=this.stateCache.get(r);if(i instanceof So){if(Nf(i,e,t,s))return i}else if(i!==void 0){for(let l=0;l<i.length;l++)if(Nf(i[l],e,t,s))return i[l]}const o=qe.stateCost(e,s);if(this.memBudget<o)return null;this.memBudget-=o;const a=new So(e,t,s);return i===void 0?this.stateCache.set(r,a):i instanceof So?this.stateCache.set(r,[i,a]):i.push(a),this.stateCount++,a}static stateCost(e,t){const s=t.length===0?0:qe.ARRAY_OVERHEAD+qe.ELEMENT_SIZE*t.length;return qe.STATE_OVERHEAD+qe.ELEMENT_SIZE*e.length+s}*cachedStates(){for(const e of this.stateCache.values())e instanceof So?yield e:yield*e}makeState(e,t,s){const r=this.closure(e,t&qe.FLAG_EMPTY_MASK);let i=t;return r.needflags===0&&(i&=qe.FLAG_MATCH),i|=r.needflags<<qe.FLAG_NEED_SHIFT,this.getState(r.pcs,i,s)}allocTable(e,t){const s=this.numClasses+1,r=qe.TABLE_OVERHEAD+qe.ELEMENT_SIZE*s;if(this.memBudget<r)return null;this.memBudget-=r;const i=new Array(s).fill(null);return t===V.UNANCHORED?e.next=i:e.nextAnchored=i,i}clearCache(){this.stateCache.clear(),this.stateCount=0,this.startStates.clear(),this.memBudget=this.stateBudget}resetCache(e){return this.clearCache(),this.getState(e.nfaStates,e.flag,e.matchIDs)}step(e,t,s,r){let i=r===V.UNANCHORED?e.next:e.nextAnchored;if(i!==null){const K=i[t];if(K!==null)return K}else if(i=this.allocTable(e,r),i===null)return null;const o=e.flag>>>qe.FLAG_NEED_SHIFT,a=e.flag&qe.FLAG_EMPTY_MASK;let l=a,u=0;s===10&&(l|=H.EMPTY_END_LINE,u|=H.EMPTY_BEGIN_LINE),s===Qr&&(l|=H.EMPTY_END_LINE|H.EMPTY_END_TEXT);const h=(e.flag&qe.FLAG_LAST_WORD)!==0,d=s!==Qr&&H.isWordRune(s);l|=d===h?H.EMPTY_NO_WORD_BOUNDARY:H.EMPTY_WORD_BOUNDARY;let p=e.nfaStates;(l&~a&o)!==0&&(p=this.closure(p,l).pcs);const D=[];let y=!1,R=el;for(let K=0;K<p.length;K++){const se=this.prog.getInst(p[K]);se.op===N.MATCH?(y||(y=!0,R=[]),R.push(se.arg)):s!==Qr&&N.isRuneOp(se.op)&&se.matchRune(s)&&D.push(se.out)}R.length>1&&R.sort((K,se)=>K-se),r===V.UNANCHORED&&s!==Qr&&D.push(this.prog.start);let F=u;y&&(F|=qe.FLAG_MATCH),d&&(F|=qe.FLAG_LAST_WORD);const G=this.makeState(D,F,R);return G===null?null:(i[t]=G,G)}start(e,t){const s=e.context(t);let r;if((s&H.EMPTY_BEGIN_TEXT)!==0)r=H.EMPTY_BEGIN_TEXT|H.EMPTY_BEGIN_LINE;else if((s&H.EMPTY_BEGIN_LINE)!==0)r=H.EMPTY_BEGIN_LINE;else{const o=e.step(t),a=o>=0&&H.isWordRune(o>>3);r=(s&H.EMPTY_WORD_BOUNDARY)!==0!==a?qe.FLAG_LAST_WORD:0}let i=this.startStates.get(r);if(i===void 0){if(i=this.makeState([this.prog.start],r,el),i===null&&(this.clearCache(),i=this.makeState([this.prog.start],r,el),i===null))return null;this.startStates.set(r,i)}return i}stepOrReset(e,t,s,r,i,o){let a=this.step(e,t,s,r);if(a!==null)return a;if(o.resetPos>=0&&i-o.resetPos<qe.PROGRESS_PER_STATE*this.stateCount)return null;o.resetPos=i;const l=this.resetCache(e);return l===null?null:(a=this.step(l,t,s,r),a)}run(e,t,s,r,i){const o=e.endPos(),a=this.latin1Class,l=s===V.UNANCHORED,u={resetPos:-1};let h=t;for(;h<o;){const d=e.step(h),p=d>>3,D=d&7;if(D===0)break;const y=p<=q.MAX_LATIN1?a[p]:this.runeClass(p);let R=l&&r.next!==null?r.next[y]:null;if(R===null&&(R=this.stepOrReset(r,y,p,s,h,u),R===null))return null;if(r=R,r.isMatch&&i(r,!1))return!0;if(!l&&r.nfaStates.length===0)return!1;h+=D}return r=this.stepOrReset(r,this.numClasses,Qr,s,h,u),r===null?null:r.isMatch&&i(r,!0)}match(e,t,s){if(this.failed)return null;if((s===V.ANCHOR_START||s===V.ANCHOR_BOTH)&&t!==0)return!1;const r=this.start(e,t);return r===null?null:this.run(e,t,s,r,(i,o)=>s!==V.ANCHOR_BOTH||o)}matchSet(e,t,s){if(this.failed)return null;if((s===V.ANCHOR_START||s===V.ANCHOR_BOTH)&&t!==0)return[];const r=this.start(e,t);if(r===null)return null;const i=new Set,o=(a,l)=>{if(s!==V.ANCHOR_BOTH||l)for(let u=0;u<a.matchIDs.length;u++)i.add(a.matchIDs[u]);return!1};return this.run(e,t,s,r,o)===null?null:Array.from(i).sort((a,l)=>a-l)}};const g0=32,m0=500,tl=256,E0=262144;var _0=class{constructor(){this.end=0,this.cap=new Int32Array(0),this.matchcap=new Int32Array(0),this.ncap=0,this.jobPc=new Int32Array(tl),this.jobArg=new Uint8Array(tl),this.jobPos=new Int32Array(tl),this.jobLen=0,this.visited=new Uint32Array(0)}reset(n,e,t){this.end=e,this.jobLen=0,this.ncap=t;const s=n.numInst()*(e+1)+g0-1>>>5;this.visited.length<s?this.visited=new Uint32Array(s):this.visited.fill(0,0,s),this.cap.length<t?this.cap=new Int32Array(t).fill(-1):this.cap.fill(-1,0,t),this.matchcap.length<t?this.matchcap=new Int32Array(t).fill(-1):this.matchcap.fill(-1,0,t)}shouldVisit(n,e){const t=n*(this.end+1)+e,s=t>>>5,r=1<<(t&31);return(this.visited[s]&r)!==0?!1:(this.visited[s]|=r,!0)}push(n,e,t,s){if(n.prog.getInst(e).op!==N.FAIL&&(s||this.shouldVisit(e,t))){if(this.jobLen>=this.jobPc.length){const r=this.jobPc.length*2,i=new Int32Array(r);i.set(this.jobPc),this.jobPc=i;const o=new Uint8Array(r);o.set(this.jobArg),this.jobArg=o;const a=new Int32Array(r);a.set(this.jobPos),this.jobPos=a}this.jobPc[this.jobLen]=e,this.jobArg[this.jobLen]=s?1:0,this.jobPos[this.jobLen]=t,this.jobLen++}}tryBacktrack(n,e,t,s,r){const i=n.longest;for(this.push(n,t,s,!1);this.jobLen>0;){this.jobLen--;let o=this.jobPc[this.jobLen],a=this.jobArg[this.jobLen]===1,l=this.jobPos[this.jobLen],u=!0;for(;!(!u&&!this.shouldVisit(o,l));){u=!1;const h=n.prog.getInst(o);switch(h.op){case N.FAIL:break;case N.ALT:if(a){a=!1,o=h.arg;continue}else{this.push(n,o,l,!0),o=h.out;continue}case N.ALT_MATCH:{const d=n.prog.getInst(h.out);if(N.isRuneOp(d.op)){this.push(n,h.arg,l,!1),o=h.arg,l=this.end;continue}this.push(n,h.out,this.end,!1),o=h.out;continue}case N.RUNE:{const d=e.step(l);if(d===ut.EOF()||!h.matchRune(d>>3))break;l+=d&7,o=h.out;continue}case N.RUNE1:{const d=e.step(l);if(d===ut.EOF()||d>>3!==h.runes[0])break;l+=d&7,o=h.out;continue}case N.RUNE_ANY_NOT_NL:{const d=e.step(l);if(d===ut.EOF()||d>>3===10)break;l+=d&7,o=h.out;continue}case N.RUNE_ANY:{const d=e.step(l);if(d===ut.EOF())break;l+=d&7,o=h.out;continue}case N.CAPTURE:if(a){this.cap[h.arg]=l;break}else{h.arg<this.ncap&&(this.push(n,o,this.cap[h.arg],!0),this.cap[h.arg]=l),o=h.out;continue}case N.EMPTY_WIDTH:{const d=e.context(l);if((h.arg&~d)!==0)break;o=h.out;continue}case N.NOP:o=h.out;continue;case N.MATCH:{if(r===V.ANCHOR_BOTH&&l!==this.end)break;if(this.ncap===0)return!0;this.ncap>1&&(this.cap[1]=l);const d=this.matchcap[1];if((d===-1||i&&l>0&&l>d)&&this.matchcap.set(this.cap),!i||l===this.end)return!0;break}case N.LB_WRITE:case N.LB_CHECK:throw new da("Backtracker cannot evaluate Lookbehind instructions");default:throw new da("bad inst")}break}}return i&&this.matchcap.length>1&&this.matchcap[1]>=0}};const Oo=[];var Po=class eg{static shouldBacktrack(e){return e.numInst()<=m0}static maxBitStateLen(e){return eg.shouldBacktrack(e)?Math.floor(E0/e.numInst()):0}static execute(e,t,s,r,i){const o=e.cond;if(o===H.EMPTY_ALL||(r===V.ANCHOR_START||r===V.ANCHOR_BOTH)&&s!==0||(o&H.EMPTY_BEGIN_TEXT)!==0&&s!==0)return null;const a=Oo.length>0?Oo.pop():new _0,l=t.endPos();a.reset(e.prog,l,i);let u=!1;if((o&H.EMPTY_BEGIN_TEXT)!==0||r===V.ANCHOR_START||r===V.ANCHOR_BOTH)a.ncap>0&&(a.cap[0]=s),a.tryBacktrack(e,t,e.prog.start,s,r)&&(u=!0);else{let d=-1;for(;s<=l&&d!==0;s+=d){if(e.prefix.length>0){const D=t.index(e,s);if(D<0)break;s+=D}if(a.ncap>0&&(a.cap[0]=s),a.tryBacktrack(e,t,e.prog.start,s,r)){u=!0;break}const p=t.step(s);d=p===ut.EOF()?0:p&7}}if(!u)return Oo.push(a),null;const h=i===0?[]:H.toArray(a.matchcap.subarray(0,i));return Oo.push(a),h}},Ff=class{constructor(n){this.sparse=new Uint32Array(n),this.dense=new Uint32Array(n),this.size=0,this.nextIndex=0}empty(){return this.nextIndex>=this.size}next(){return this.dense[this.nextIndex++]}clear(){this.size=0,this.nextIndex=0}contains(n){return n<this.sparse.length&&this.sparse[n]<this.size&&this.dense[this.sparse[n]]===n}insert(n){this.contains(n)||this.insertNew(n)}insertNew(n){n>=this.sparse.length||(this.sparse[n]=this.size,this.dense[this.size]=n,this.size++)}};const D0=(n,e,t,s)=>{const r=n.length,i=e.length;let o=0,a=0;const l=[],u=[];let h=!0,d=-1;const p=D=>{const y=D?n:e,R=D?o:a,F=D?t:s;return d>0&&y[R]<=l[d]?!1:(l.push(y[R],y[R+1]),D?o+=2:a+=2,d+=2,u.push(F),!0)};for(;o<r||a<i;)if(a>=i?h=p(!0):o>=r||e[a]<n[o]?h=p(!1):h=p(!0),!h)return null;return{merged:l,next:u}};var y0=class{constructor(n){this.start=n.start,this.numCap=n.numCap,this.inst=new Array(n.inst.length);for(let e=0;e<n.inst.length;e++){const t=n.inst[e],s=new N(t.op);s.out=t.out,s.arg=t.arg,s.runes=t.runes?new Int32Array(t.runes):new Int32Array(0),s.next=null,this.inst[e]=s}}};const w0=n=>{const e=new y0(n);for(let t=0;t<e.inst.length;t++){const s=e.inst[t];if(s.op!==N.ALT&&s.op!==N.ALT_MATCH)continue;let r="out",i="arg",o=e.inst[s[i]];if(o.op!==N.ALT&&o.op!==N.ALT_MATCH&&(r="arg",i="out",o=e.inst[s[i]],o.op!==N.ALT&&o.op!==N.ALT_MATCH))continue;const a=e.inst[s[r]];if(a.op===N.ALT||a.op===N.ALT_MATCH)continue;let l="out",u="arg",h=!1;o.out===t?h=!0:o.arg===t&&(h=!0,l="arg",u="out"),h&&(o[l]=s[r]),s[r]===o[l]&&(s[i]=o[u])}return e},I0=n=>{if(n.inst.length>=1e3)return null;const e=new Ff(n.inst.length),t=new Ff(n.inst.length),s=new Array(n.inst.length),r=new Array(n.inst.length).fill(!1),i=o=>{let a=!0;const l=n.inst[o];if(t.contains(o))return!0;switch(t.insert(o),l.op){case N.ALT:case N.ALT_MATCH:{a=i(l.out)&&i(l.arg);let u=r[l.out],h=r[l.arg];if(u&&h)return!1;if(h){const y=l.out;l.out=l.arg,l.arg=y;const R=u;u=h,h=R}u&&(r[o]=!0,l.op=N.ALT_MATCH);const d=s[l.out]||[],p=s[l.arg]||[],D=D0(d,p,l.out,l.arg);if(!D)return!1;s[o]=new Int32Array(D.merged),l.next=new Uint32Array(D.next);break}case N.CAPTURE:case N.EMPTY_WIDTH:case N.NOP:a=i(l.out),r[o]=r[l.out],s[o]=s[l.out]?new Int32Array(s[l.out]):new Int32Array(0),l.next=new Uint32Array(Math.floor(s[o].length/2)+1).fill(l.out);break;case N.MATCH:case N.FAIL:r[o]=l.op===N.MATCH;break;case N.RUNE:{if(r[o]=!1,l.next&&l.next.length>0)break;if(e.insert(l.out),!l.runes||l.runes.length===0){s[o]=new Int32Array(0),l.next=new Uint32Array([l.out]);break}let u=[];if(l.runes.length===1&&(l.arg&V.FOLD_CASE)!==0){const h=l.runes[0];u.push(h,h);for(let d=q.simpleFold(h);d!==h;d=q.simpleFold(d))u.push(d,d);u.sort((d,p)=>d-p)}else for(let h=0;h<l.runes.length;h++)u.push(l.runes[h]);s[o]=new Int32Array(u),l.next=new Uint32Array(Math.floor(u.length/2)+1).fill(l.out),l.op=N.RUNE;break}case N.RUNE1:{if(r[o]=!1,l.next&&l.next.length>0)break;e.insert(l.out);let u=[];if((l.arg&V.FOLD_CASE)!==0){const h=l.runes[0];u.push(h,h);for(let d=q.simpleFold(h);d!==h;d=q.simpleFold(d))u.push(d,d);u.sort((d,p)=>d-p)}else u.push(l.runes[0],l.runes[0]);s[o]=new Int32Array(u),l.next=new Uint32Array(Math.floor(u.length/2)+1).fill(l.out),l.op=N.RUNE;break}case N.RUNE_ANY:if(r[o]=!1,l.next&&l.next.length>0)break;e.insert(l.out),s[o]=new Int32Array([0,q.MAX_RUNE]),l.next=new Uint32Array([l.out]);break;case N.RUNE_ANY_NOT_NL:if(r[o]=!1,l.next&&l.next.length>0)break;e.insert(l.out),s[o]=new Int32Array([0,9,11,q.MAX_RUNE]),l.next=new Uint32Array(Math.floor(s[o].length/2)+1).fill(l.out)}return a};for(e.clear(),e.insert(n.start);!e.empty();)if(t.clear(),!i(e.next()))return null;for(let o=0;o<n.inst.length;o++)s[o]&&(n.inst[o].runes=s[o]);return n},T0=(n,e)=>{for(let t=0;t<e.inst.length;t++){const s=e.inst[t];switch(s.op){case N.ALT:case N.ALT_MATCH:case N.RUNE:break;case N.CAPTURE:case N.EMPTY_WIDTH:case N.NOP:case N.MATCH:case N.FAIL:n.inst[t].next=null;break;case N.RUNE1:case N.RUNE_ANY:case N.RUNE_ANY_NOT_NL:n.inst[t].next=null,n.inst[t].op=s.op,n.inst[t].runes=s.runes?new Int32Array(s.runes):new Int32Array(0)}}};var Lf=class tg{static compile(e){if(e.start===0||e.numLb>0)return null;const t=e.inst[e.start];if(t.op!==N.EMPTY_WIDTH||(t.arg&H.EMPTY_BEGIN_TEXT)===0)return null;let s=!1;for(let i=0;i<e.inst.length;i++)if(e.inst[i].op===N.ALT||e.inst[i].op===N.ALT_MATCH){s=!0;break}for(let i=0;i<e.inst.length;i++){const o=e.inst[i],a=e.inst[o.out].op;switch(o.op){case N.ALT:case N.ALT_MATCH:if(a===N.MATCH||e.inst[o.arg].op===N.MATCH)return null;break;case N.EMPTY_WIDTH:if(a===N.MATCH){if((o.arg&H.EMPTY_END_TEXT)===H.EMPTY_END_TEXT)continue;return null}break;default:if(a===N.MATCH&&s)return null}}let r=w0(e);return r=I0(r),r!==null&&T0(r,e),r}static next(e,t){const s=e.matchRunePos(t);return s>=0?e.next[s]:e.op===N.ALT_MATCH?e.out:0}static execute(e,t,s,r,i){const o=e.onepass;if(!o)return null;const a=new Int32Array(i).fill(-1);let l=!1,u=t.step(s),h=u>>3,d=u&7,p=ut.EOF(),D=-1,y=0;u!==ut.EOF()&&(p=t.step(s+d),p!==ut.EOF()&&(D=p>>3,y=p&7));let R=s===0?H.emptyOpContext(-1,h):t.context(s),F=o.start,G;for(;;){switch(G=o.inst[F],F=G.out,G.op){case N.MATCH:return r===V.ANCHOR_BOTH&&s!==t.endPos()?null:(l=!0,a.length>0&&(a[0]=0,a[1]=s),i===0?[]:H.toArray(a));case N.RUNE:if(!G.matchRune(h))return null;break;case N.RUNE1:if(h!==G.runes[0])return null;break;case N.RUNE_ANY:break;case N.RUNE_ANY_NOT_NL:if(h===10)return null;break;case N.ALT:case N.ALT_MATCH:F=tg.next(G,h);continue;case N.FAIL:return null;case N.NOP:continue;case N.EMPTY_WIDTH:if((G.arg&~R)!==0)return null;continue;case N.CAPTURE:G.arg<a.length&&(a[G.arg]=s);continue;default:throw new da("bad inst")}if(d===0)break;R=H.emptyOpContext(h,D),s+=d,h=D,d=y,h!==-1&&(p=t.step(s+d),p!==ut.EOF()?(D=p>>3,y=p&7):(D=-1,y=0))}return l?i===0?[]:H.toArray(a):null}},I=class ee{static Op=Wp(["NO_MATCH","EMPTY_MATCH","LITERAL","CHAR_CLASS","ANY_CHAR_NOT_NL","ANY_CHAR","BEGIN_LINE","END_LINE","BEGIN_TEXT","END_TEXT","WORD_BOUNDARY","NO_WORD_BOUNDARY","CAPTURE","STAR","PLUS","QUEST","REPEAT","CONCAT","ALTERNATE","PLB","NLB","LEFT_PAREN","VERTICAL_BAR"]);static isPseudoOp(e){return e>=ee.Op.LEFT_PAREN}static emptySubs(){return[]}static quoteIfHyphen(e){return e===k.CODES["-"]?"\\":""}static fromRegexp(e){const t=new ee(e.op);return t.flags=e.flags,t.subs=e.subs,t.runes=e.runes,t.cap=e.cap,t.min=e.min,t.max=e.max,t.name=e.name,t.namedGroups=e.namedGroups,t.lb=e.lb,t}constructor(e){this.op=e,this.flags=0,this.subs=ee.emptySubs(),this.runes=new Int32Array(0),this.min=0,this.max=0,this.cap=0,this.name=null,this.namedGroups=Object.create(null),this.lb=0}reinit(){this.flags=0,this.subs=ee.emptySubs(),this.runes=new Int32Array(0),this.cap=0,this.min=0,this.max=0,this.name=null,this.namedGroups=Object.create(null),this.lb=0}toString(){return this.appendTo()}appendTo(){let e="";switch(this.op){case ee.Op.NO_MATCH:e+="[^\\x00-\\x{10FFFF}]";break;case ee.Op.EMPTY_MATCH:e+="(?:)";break;case ee.Op.STAR:case ee.Op.PLUS:case ee.Op.QUEST:case ee.Op.REPEAT:{const t=this.subs[0];switch(t.op>ee.Op.CAPTURE||t.op===ee.Op.LITERAL&&t.runes.length>1?e+=`(?:${t.appendTo()})`:e+=t.appendTo(),this.op){case ee.Op.STAR:e+="*";break;case ee.Op.PLUS:e+="+";break;case ee.Op.QUEST:e+="?";break;case ee.Op.REPEAT:e+=`{${this.min}`,this.min!==this.max&&(e+=",",this.max>=0&&(e+=this.max)),e+="}"}(this.flags&V.NON_GREEDY)!==0&&(e+="?");break}case ee.Op.CONCAT:for(let t of this.subs)t.op===ee.Op.ALTERNATE?e+=`(?:${t.appendTo()})`:e+=t.appendTo();break;case ee.Op.ALTERNATE:{let t="";for(let s of this.subs)e+=t,t="|",e+=s.appendTo();break}case ee.Op.LITERAL:(this.flags&V.FOLD_CASE)!==0&&(e+="(?i:");for(let t of this.runes)e+=H.escapeRune(t);(this.flags&V.FOLD_CASE)!==0&&(e+=")");break;case ee.Op.ANY_CHAR_NOT_NL:e+="(?-s:.)";break;case ee.Op.ANY_CHAR:e+="(?s:.)";break;case ee.Op.PLB:e+=`(?<=${this.subs[0].appendTo()})`;break;case ee.Op.NLB:e+=`(?<!${this.subs[0].appendTo()})`;break;case ee.Op.CAPTURE:this.name===null||this.name.length===0?e+="(":e+=`(?P<${this.name}>`,this.subs[0].op!==ee.Op.EMPTY_MATCH&&(e+=this.subs[0].appendTo()),e+=")";break;case ee.Op.BEGIN_TEXT:e+="\\A";break;case ee.Op.END_TEXT:(this.flags&V.WAS_DOLLAR)!==0?e+="(?-m:$)":e+="\\z";break;case ee.Op.BEGIN_LINE:e+="^";break;case ee.Op.END_LINE:e+="$";break;case ee.Op.WORD_BOUNDARY:e+="\\b";break;case ee.Op.NO_WORD_BOUNDARY:e+="\\B";break;case ee.Op.CHAR_CLASS:if(this.runes.length%2!==0){e+="[invalid char class]";break}if(e+="[",this.runes.length===0)e+="^\\x00-\\x{10FFFF}";else if(this.runes[0]===0&&this.runes[this.runes.length-1]===q.MAX_RUNE){e+="^";for(let t=1;t<this.runes.length-1;t+=2){const s=this.runes[t]+1,r=this.runes[t+1]-1;e+=ee.quoteIfHyphen(s),e+=H.escapeRune(s),s!==r&&(e+="-",e+=ee.quoteIfHyphen(r),e+=H.escapeRune(r))}}else for(let t=0;t<this.runes.length;t+=2){const s=this.runes[t],r=this.runes[t+1];e+=ee.quoteIfHyphen(s),e+=H.escapeRune(s),s!==r&&(e+="-",e+=ee.quoteIfHyphen(r),e+=H.escapeRune(r))}e+="]";break;default:e+=this.op}return e}maxCap(){let e=0;if(this.op===ee.Op.CAPTURE&&(e=this.cap),this.subs!==null)for(let t of this.subs){const s=t.maxCap();e<s&&(e=s)}return e}equals(e){if(!(e!==null&&e instanceof ee)||this.op!==e.op)return!1;switch(this.op){case ee.Op.END_TEXT:if((this.flags&V.WAS_DOLLAR)!==(e.flags&V.WAS_DOLLAR))return!1;break;case ee.Op.LITERAL:case ee.Op.CHAR_CLASS:if((this.flags&V.FOLD_CASE)!==(e.flags&V.FOLD_CASE))return!1;if(this.runes===null&&e.runes===null)break;if(this.runes===null||e.runes===null||this.runes.length!==e.runes.length)return!1;for(let t=0;t<this.runes.length;t++)if(this.runes[t]!==e.runes[t])return!1;break;case ee.Op.ALTERNATE:case ee.Op.CONCAT:if(this.subs.length!==e.subs.length)return!1;for(let t=0;t<this.subs.length;++t)if(!this.subs[t].equals(e.subs[t]))return!1;break;case ee.Op.STAR:case ee.Op.PLUS:case ee.Op.QUEST:if((this.flags&V.NON_GREEDY)!==(e.flags&V.NON_GREEDY)||!this.subs[0].equals(e.subs[0]))return!1;break;case ee.Op.REPEAT:if((this.flags&V.NON_GREEDY)!==(e.flags&V.NON_GREEDY)||this.min!==e.min||this.max!==e.max||!this.subs[0].equals(e.subs[0]))return!1;break;case ee.Op.CAPTURE:if(this.cap!==e.cap||(this.name===null?e.name!==null:this.name!==e.name)||!this.subs[0].equals(e.subs[0]))return!1;break;case ee.Op.PLB:case ee.Op.NLB:if(this.lb!==e.lb||!this.subs[0].equals(e.subs[0]))return!1}return!0}},vu=class{static walk(n,e){const t=[];let s=n,r;for(;;){if(s.subs.length===0)r=e.leaf(s);else{const i=e.enter(s);if(i.result===void 0){t.push({re:s,state:i,i:0}),s=s.subs[0];continue}r=i.result}for(;;){if(t.length===0)return r;const i=t[t.length-1];if(e.child(i.re,i.state,r,i.i),i.i++,i.state.result===void 0&&i.i<i.re.subs.length){s=i.re.subs[i.i];break}t.pop(),r=i.state.result!==void 0?i.state.result:e.leave(i.re,i.state)}}}},kf=class{constructor(n,e){const t=new Map,s=[0],r=[0],i=[0],o=[0];for(const y of n){let R=0;for(let F=0;F<y.length;F++){const G=R*e+y[F];let K=t.get(G);K===void 0&&(K=s.length,t.set(G,K),s.push(R),r.push(y[F]),i.push(i[R]+1),o.push(0)),R=K}o[R]=1}const a=s.length,l=new Int32Array(a-1);for(let y=1;y<a;y++)l[y-1]=y;l.sort((y,R)=>s[y]-s[R]||r[y]-r[R]);const u=new Int32Array(a+1);for(let y=1;y<a;y++)u[s[y]+1]++;for(let y=0;y<a;y++)u[y+1]+=u[y];const h=new Int32Array(a-1);for(let y=0;y<l.length;y++)h[y]=r[l[y]];this.childStart=u,this.childUnit=h,this.childNode=l;const d=new Int32Array(a);for(let y=0;y<a;y++)d[y]=y;d.sort((y,R)=>i[y]-i[R]);const p=new Int32Array(a),D=Uint8Array.from(o);for(let y=1;y<a;y++){const R=d[y],F=s[R];if(F!==0){let G=p[F],K=this.next(G,r[R]);for(;K<0&&G!==0;)G=p[G],K=this.next(G,r[R]);p[R]=K>=0?K:0}D[R]|=D[p[R]]}this.fail=p,this.match=D}next(n,e){let t=this.childStart[n],s=this.childStart[n+1];const r=this.childUnit;for(;t<s;){const i=t+s>>1,o=r[i];if(o===e)return this.childNode[i];o<e?t=i+1:s=i}return-1}advance(n,e){for(;;){const t=this.next(n,e);if(t>=0)return t;if(n===0)return 0;n=this.fail[n]}}searchUTF16(n,e,t){let s=0;for(let r=e;r<t;r++)if(s=this.advance(s,n.charCodeAt(r)),this.match[s]===1)return!0;return!1}searchUTF8(n,e,t){let s=0;for(let r=e;r<t;r++)if(s=this.advance(s,n[r]),this.match[s]===1)return!0;return!1}},le=class Qs{static Type={NONE:0,EXACT:1,AND:2,OR:3};static MAX_SCANS=32;static MAX_AC_UNITS=1<<18;constructor(e){this.type=e,this.subs=[],this.str="",this.bytes=null,this.cost=e===Qs.Type.EXACT?1:0,this.allExact=!1,this.ac16=null,this.ac8=null}automaton16(){if(this.ac16===null){const e=this.subs.map(t=>{const s=new Array(t.str.length);for(let r=0;r<t.str.length;r++)s[r]=t.str.charCodeAt(r);return s});this.ac16=new kf(e,65536)}return this.ac16}automaton8(){return this.ac8===null&&(this.ac8=new kf(this.subs.map(e=>e.bytes),256)),this.ac8}eval(e,t){switch(this.type){case Qs.Type.NONE:return!0;case Qs.Type.EXACT:return e.hasString(this,t);case Qs.Type.AND:for(let s=0;s<this.subs.length;s++)if(!this.subs[s].eval(e,t))return!1;return!0;case Qs.Type.OR:if(this.allExact)return e.hasAnyString(this,t);for(let s=0;s<this.subs.length;s++)if(this.subs[s].eval(e,t))return!0;return!1;default:return!0}}},A0=class Xs{static build(e){return e?vu.walk(e,Xs.WALKER):new le(le.Type.NONE)}static WALKER={leaf:e=>Xs.leaf(e),enter:e=>Xs.enter(e),child:(e,t,s)=>Xs.child(e,t,s),leave:(e,t)=>Xs.leave(e,t)};static leaf(e){if(e.op!==I.Op.LITERAL)return new le(le.Type.NONE);if(e.runes.length===0||(e.flags&V.FOLD_CASE)!==0)return new le(le.Type.NONE);let t="";for(let r=0;r<e.runes.length;r++){if(q.isUnsearchable(e.runes[r]))return new le(le.Type.NONE);t+=String.fromCodePoint(e.runes[r])}const s=new le(le.Type.EXACT);return s.str=t,s.bytes=H.stringToUtf8ByteArray(s.str),s}static enter(e){switch(e.op){case I.Op.CAPTURE:case I.Op.PLUS:return{sub:null};case I.Op.REPEAT:return e.min>=1?{sub:null}:{result:new le(le.Type.NONE)};case I.Op.CONCAT:return{pf:new le(le.Type.AND),subs:[]};case I.Op.ALTERNATE:return{pf:new le(le.Type.OR),subs:[]};default:return{result:new le(le.Type.NONE)}}}static child(e,t,s){if(t.subs===void 0){t.sub=s;return}if(t.pf.type===le.Type.AND){if(s.type===le.Type.NONE)return;if(s.type===le.Type.AND){for(let r=0;r<s.subs.length;r++)t.subs.push(s.subs[r]);return}t.subs.push(s);return}if(s.type===le.Type.NONE){t.result=new le(le.Type.NONE);return}if(s.type===le.Type.OR){for(let r=0;r<s.subs.length;r++)t.subs.push(s.subs[r]);return}t.subs.push(s)}static leave(e,t){if(t.subs===void 0)return t.sub;const s=t.pf,r=new Set,i=[];for(const u of t.subs){if(u.type===le.Type.EXACT){if(r.has(u.str))continue;r.add(u.str)}i.push(u)}if(s.type===le.Type.AND){const u=[];let h=0;for(const d of i)h+d.cost>le.MAX_SCANS||(u.push(d),h+=d.cost);return u.length===0?new le(le.Type.NONE):u.length===1?u[0]:(s.subs=u,s.cost=h,s)}if(i.length===0)return new le(le.Type.NONE);if(i.length===1)return i[0];s.subs=i;let o=!0,a=0,l=0;for(const u of i)u.type!==le.Type.EXACT?o=!1:l+=u.bytes.length,a+=u.cost;return o?l>le.MAX_AC_UNITS?new le(le.Type.NONE):(s.allExact=!0,s.cost=1,s):a>le.MAX_SCANS?new le(le.Type.NONE):(s.cost=a,s)}},Nt=class{constructor(n=0,e=0){this.head=n,this.tail=e}},v0=class{constructor(){this.inst=[],this.start=0,this.numCap=2,this.lbStarts=[],this.numLb=0,this.lbInst=null}getInst(n){return this.inst[n]}numInst(){return this.inst.length}addInst(n){this.inst.push(new N(n))}markLookbehindInsts(){const n=new Uint8Array(this.inst.length),e=this.lbStarts.slice();for(;e.length>0;){const t=e.pop();if(t===0||n[t]===1)continue;n[t]=1;const s=this.inst[t];switch(s.op){case N.ALT:case N.ALT_MATCH:e.push(s.out,s.arg);break;case N.MATCH:case N.FAIL:break;default:e.push(s.out)}}this.lbInst=n}skipNop(n){let e=this.inst[n];for(;e.op===N.NOP||e.op===N.CAPTURE;)e=this.inst[n],n=e.out;return e}prefix(){let n="",e=this.skipNop(this.start);if(!N.isRuneOp(e.op)||e.runes.length!==1)return[e.op===N.MATCH,n];for(;N.isRuneOp(e.op)&&e.runes.length===1&&(e.arg&V.FOLD_CASE)===0&&!q.isUnsearchable(e.runes[0]);)n+=String.fromCodePoint(e.runes[0]),e=this.skipNop(e.out);return[e.op===N.MATCH,n]}startCond(){let n=0,e=this.start;e:for(;;){const t=this.inst[e];switch(t.op){case N.EMPTY_WIDTH:n|=t.arg;break;case N.FAIL:return-1;case N.CAPTURE:case N.NOP:break;default:break e}e=t.out}return n}patch(n,e){let t=n.head;for(;t!==0;){const s=this.inst[t>>1];(t&1)===0?(t=s.out,s.out=e):(t=s.arg,s.arg=e)}}append(n,e){if(n.head===0)return e;if(e.head===0)return n;const t=this.inst[n.tail>>1];return(n.tail&1)===0?t.out=e.head:t.arg=e.head,new Nt(n.head,e.tail)}toString(){let n="";for(let e=0;e<this.inst.length;e++){const t=n.length;n+=e,e===this.start&&(n+="*"),n+="        ".substring(n.length-t),n+=this.inst[e],n+=`
`}return n}};const b0=new Int32Array([0,k.CODES[`
`]-1,k.CODES[`
`]+1,q.MAX_RUNE]),xf=new Int32Array([0,q.MAX_RUNE]);var No=class{constructor(n=0,e=new Nt,t=!1){this.i=n,this.out=e,this.nullable=t}},R0=class Fl{static compileRegexp(e){const t=new Fl,s=t.compile(e);return t.prog.patch(s.out,t.newInst(N.MATCH).i),t.prog.start=s.i,t.prog.markLookbehindInsts(),t.prog}static compileSet(e){const t=new Fl;if(e.length===0)return t.prog.start=t.newInst(N.FAIL).i,t.prog.markLookbehindInsts(),t.prog;let s=[];for(let i=0;i<e.length;i++){t.lbOffset=t.prog.numLb;const o=t.compile(e[i]),a=t.newInst(N.MATCH);t.prog.getInst(a.i).arg=i,t.prog.patch(o.out,a.i),s.push(o.i)}let r=s[0];for(let i=1;i<s.length;i++){const o=t.newInst(N.ALT),a=t.prog.getInst(o.i);a.out=r,a.arg=s[i],r=o.i}return t.prog.start=r,t.prog.markLookbehindInsts(),t.prog}constructor(){this.prog=new v0,this.newInst(N.FAIL),this.lbOffset=0,this.runeCache=new Map,this.walker={leaf:e=>this.leaf(e),enter:e=>this.enter(e),child:(e,t,s)=>this.child(e,t,s),leave:(e,t)=>this.leave(e,t)}}newInst(e){return this.prog.addInst(e),new No(this.prog.numInst()-1,new Nt,!0)}nop(){const e=this.newInst(N.NOP);return e.out=new Nt(e.i<<1,e.i<<1),e}fail(){return new No}cap(e){const t=this.newInst(N.CAPTURE);return t.out=new Nt(t.i<<1,t.i<<1),this.prog.getInst(t.i).arg=e,this.prog.numCap<e+1&&(this.prog.numCap=e+1),t}cat(e,t){return e.i===0||t.i===0?(this.prog.patch(e.out,0),this.prog.patch(t.out,0),this.fail()):(this.prog.patch(e.out,t.i),new No(e.i,t.out,e.nullable&&t.nullable))}alt(e,t){if(e.i===0)return t;if(t.i===0)return e;const s=this.newInst(N.ALT),r=this.prog.getInst(s.i);return r.out=e.i,r.arg=t.i,s.out=this.prog.append(e.out,t.out),s.nullable=e.nullable||t.nullable,s}loop(e,t){const s=this.newInst(N.ALT),r=this.prog.getInst(s.i);return t?(r.arg=e.i,s.out=new Nt(s.i<<1,s.i<<1)):(r.out=e.i,s.out=new Nt(s.i<<1|1,s.i<<1|1)),this.prog.patch(e.out,s.i),s}quest(e,t){if(e.i===0)return this.nop();const s=this.newInst(N.ALT),r=this.prog.getInst(s.i);return t?(r.arg=e.i,s.out=new Nt(s.i<<1,s.i<<1)):(r.out=e.i,s.out=new Nt(s.i<<1|1,s.i<<1|1)),s.out=this.prog.append(s.out,e.out),s}star(e,t){return e.i===0?this.nop():e.nullable?this.quest(this.plus(e,t),t):this.loop(e,t)}plus(e,t){return e.i===0?this.fail():new No(e.i,this.loop(e,t).out,e.nullable)}empty(e){const t=this.newInst(N.EMPTY_WIDTH);return this.prog.getInst(t.i).arg=e,t.out=new Nt(t.i<<1,t.i<<1),t}rune(e,t){const s=this.newInst(N.RUNE);s.nullable=!1;const r=this.prog.getInst(s.i);return r.runes=e,t&=V.FOLD_CASE,(e.length!==1||q.simpleFold(e[0])===e[0])&&(t&=-2),r.arg=t,s.out=new Nt(s.i<<1,s.i<<1),(t&V.FOLD_CASE)===0&&e.length===1||e.length===2&&e[0]===e[1]?r.op=N.RUNE1:e.length===2&&e[0]===0&&e[1]===q.MAX_RUNE?r.op=N.RUNE_ANY:e.length===4&&e[0]===0&&e[1]===k.CODES[`
`]-1&&e[2]===k.CODES[`
`]+1&&e[3]===q.MAX_RUNE&&(r.op=N.RUNE_ANY_NOT_NL),s}lookBehind(e,t){const s=Math.sign(t)*(Math.abs(t)+this.lbOffset),r=this.newInst(N.LB_WRITE);this.prog.getInst(r.i).arg=s;const i=this.rune(xf,0),o=this.star(i,!0),a=this.cat(o,e);this.prog.patch(a.out,r.i);const l=this.newInst(N.LB_CHECK);return this.prog.getInst(l.i).arg=s,this.prog.lbStarts.push(a.i),Math.abs(s)>this.prog.numLb&&(this.prog.numLb=Math.abs(s)),l.out=new Nt(l.i<<1,l.i<<1),l}compile(e){return vu.walk(e,this.walker)}leaf(e){switch(e.op){case I.Op.NO_MATCH:return this.fail();case I.Op.EMPTY_MATCH:return this.nop();case I.Op.LITERAL:{if(e.runes.length===0)return this.nop();let t=null;for(let s of e.runes){let r=this.runeCache.get(s);r===void 0&&(r=new Int32Array([s]),this.runeCache.set(s,r));const i=this.rune(r,e.flags);t=t===null?i:this.cat(t,i)}return t}case I.Op.CHAR_CLASS:return this.rune(e.runes,e.flags);case I.Op.ANY_CHAR_NOT_NL:return this.rune(b0,0);case I.Op.ANY_CHAR:return this.rune(xf,0);case I.Op.BEGIN_LINE:return this.empty(H.EMPTY_BEGIN_LINE);case I.Op.END_LINE:return this.empty(H.EMPTY_END_LINE);case I.Op.BEGIN_TEXT:return this.empty(H.EMPTY_BEGIN_TEXT);case I.Op.END_TEXT:return this.empty(H.EMPTY_END_TEXT);case I.Op.WORD_BOUNDARY:return this.empty(H.EMPTY_WORD_BOUNDARY);case I.Op.NO_WORD_BOUNDARY:return this.empty(H.EMPTY_NO_WORD_BOUNDARY);case I.Op.CONCAT:case I.Op.ALTERNATE:return this.nop();default:throw new Qc("regexp: unhandled case in compile")}}enter(e){switch(e.op){case I.Op.PLB:case I.Op.NLB:case I.Op.STAR:case I.Op.PLUS:case I.Op.QUEST:return{sub:null};case I.Op.CAPTURE:return{bra:this.cap(e.cap<<1),sub:null};case I.Op.CONCAT:case I.Op.ALTERNATE:return{f:null};default:throw new Qc("regexp: unhandled case in compile")}}child(e,t,s){e.op===I.Op.CONCAT?t.f=t.f===null?s:this.cat(t.f,s):e.op===I.Op.ALTERNATE?t.f=t.f===null?s:this.alt(t.f,s):t.sub=s}leave(e,t){switch(e.op){case I.Op.PLB:case I.Op.NLB:return this.lookBehind(t.sub,e.lb);case I.Op.CAPTURE:{const s=this.cap(e.cap<<1|1);return this.cat(this.cat(t.bra,t.sub),s)}case I.Op.STAR:return this.star(t.sub,(e.flags&V.NON_GREEDY)!==0);case I.Op.PLUS:return this.plus(t.sub,(e.flags&V.NON_GREEDY)!==0);case I.Op.QUEST:return this.quest(t.sub,(e.flags&V.NON_GREEDY)!==0);case I.Op.CONCAT:case I.Op.ALTERNATE:return t.f;default:throw new Qc("regexp: unhandled case in compile")}}},S0=class nt{static simplify(e){return e===null?null:vu.walk(e,nt.WALKER)}static WALKER={leaf:e=>nt.leaf(e),enter:e=>nt.enter(e),child:(e,t,s,r)=>nt.child(e,t,s,r),leave:(e,t)=>nt.leave(e,t)};static leaf(e){if(e.op===I.Op.CHAR_CLASS){if(e.runes===null)return e;if(e.runes.length===0)return new I(I.Op.NO_MATCH);if(e.runes.length===2&&e.runes[0]===0&&e.runes[1]===q.MAX_RUNE)return new I(I.Op.ANY_CHAR);if(e.runes.length===4&&e.runes[0]===0&&e.runes[1]===k.CODES[`
`]-1&&e.runes[2]===k.CODES[`
`]+1&&e.runes[3]===q.MAX_RUNE)return new I(I.Op.ANY_CHAR_NOT_NL)}return e}static enter(e){switch(e.op){case I.Op.PLB:case I.Op.NLB:case I.Op.CAPTURE:case I.Op.STAR:case I.Op.PLUS:case I.Op.QUEST:return{sub:null};case I.Op.CONCAT:case I.Op.ALTERNATE:return{subs:[],changed:!1};case I.Op.REPEAT:return e.min===0&&e.max===0?{result:new I(I.Op.EMPTY_MATCH)}:{sub:null};default:return{result:e}}}static child(e,t,s,r){if(t.subs===void 0){t.sub=s;return}if(s!==e.subs[r]&&(t.changed=!0),e.op===I.Op.CONCAT){if(s.op===I.Op.NO_MATCH){t.result=new I(I.Op.NO_MATCH);return}if(s.op===I.Op.EMPTY_MATCH){t.changed=!0;return}if(s.op===I.Op.CONCAT){t.changed=!0;for(let i=0;i<s.subs.length;i++)t.subs.push(s.subs[i]);return}}else{if(s.op===I.Op.NO_MATCH){t.changed=!0;return}if(s.op===I.Op.ALTERNATE){t.changed=!0;for(let i=0;i<s.subs.length;i++)t.subs.push(s.subs[i]);return}}t.subs.push(s)}static leave(e,t){switch(e.op){case I.Op.PLB:case I.Op.NLB:case I.Op.CAPTURE:{const s=t.sub;if(s!==e.subs[0]){const r=I.fromRegexp(e);return r.runes=new Int32Array(0),r.subs=[s],r}return e}case I.Op.CONCAT:case I.Op.ALTERNATE:if(t.changed){const s=t.subs;if(s.length===0)return new I(e.op===I.Op.CONCAT?I.Op.EMPTY_MATCH:I.Op.NO_MATCH);if(s.length===1)return s[0];const r=I.fromRegexp(e);return r.runes=new Int32Array(0),r.subs=s,r}return e;case I.Op.STAR:case I.Op.PLUS:case I.Op.QUEST:return nt.simplify1(e.op,e.flags,t.sub,e);case I.Op.REPEAT:return nt.simplifyRepeat(e,t.sub);default:return e}}static simplifyRepeat(e,t){if(e.max===-1){if(e.min===0)return nt.simplify1(I.Op.STAR,e.flags,t,null);if(e.min===1)return nt.simplify1(I.Op.PLUS,e.flags,t,null);const r=[];for(let i=0;i<e.min-1;i++)r.push(t);return r.push(nt.simplify1(I.Op.PLUS,e.flags,t,null)),nt.concat(r)}if(e.min===1&&e.max===1)return t;let s=null;if(e.min>0){s=[];for(let r=0;r<e.min;r++)s.push(t)}if(e.max>e.min){let r=nt.simplify1(I.Op.QUEST,e.flags,t,null);for(let i=e.min+1;i<e.max;i++)r=nt.simplify1(I.Op.QUEST,e.flags,nt.concat([t,r]),null);if(s===null)return r;s.push(r)}return s!==null?nt.concat(s):new I(I.Op.NO_MATCH)}static concat(e){const t=[];for(let r=0;r<e.length;r++){const i=e[r];if(i.op===I.Op.NO_MATCH)return new I(I.Op.NO_MATCH);if(i.op!==I.Op.EMPTY_MATCH){if(i.op===I.Op.CONCAT){for(let o=0;o<i.subs.length;o++)t.push(i.subs[o]);continue}t.push(i)}}if(t.length===0)return new I(I.Op.EMPTY_MATCH);if(t.length===1)return t[0];const s=new I(I.Op.CONCAT);return s.subs=t,s}static simplify1(e,t,s,r){if(s.op===I.Op.EMPTY_MATCH)return s;if(s.op===I.Op.NO_MATCH)return e===I.Op.PLUS?s:new I(I.Op.EMPTY_MATCH);if(e===s.op&&(t&V.NON_GREEDY)===(s.flags&V.NON_GREEDY))return s;if(r!==null&&r.op===e&&(r.flags&V.NON_GREEDY)===(t&V.NON_GREEDY)&&s===r.subs[0])return r;const i=new I(e);return i.flags=t,i.subs=[s],i}},Ce=class{constructor(n,e){this.sign=n,this.cls=e}};const Mf=[48,57],Vf=[9,10,12,13,32,32],Gf=[48,57,65,90,95,95,97,122],Uf=new Map([["\\d",new Ce(1,Mf)],["\\D",new Ce(-1,Mf)],["\\s",new Ce(1,Vf)],["\\S",new Ce(-1,Vf)],["\\w",new Ce(1,Gf)],["\\W",new Ce(-1,Gf)]]),Hf=[48,57,65,90,97,122],$f=[65,90,97,122],jf=[0,127],qf=[9,9,32,32],Jf=[0,31,127,127],Kf=[48,57],zf=[33,126],Wf=[97,122],Yf=[32,126],Qf=[33,47,58,64,91,96,123,126],Xf=[9,13,32,32],Zf=[65,90],ed=[48,57,65,90,95,95,97,122],td=[48,57,65,70,97,102],nd=new Map([["[:alnum:]",new Ce(1,Hf)],["[:^alnum:]",new Ce(-1,Hf)],["[:alpha:]",new Ce(1,$f)],["[:^alpha:]",new Ce(-1,$f)],["[:ascii:]",new Ce(1,jf)],["[:^ascii:]",new Ce(-1,jf)],["[:blank:]",new Ce(1,qf)],["[:^blank:]",new Ce(-1,qf)],["[:cntrl:]",new Ce(1,Jf)],["[:^cntrl:]",new Ce(-1,Jf)],["[:digit:]",new Ce(1,Kf)],["[:^digit:]",new Ce(-1,Kf)],["[:graph:]",new Ce(1,zf)],["[:^graph:]",new Ce(-1,zf)],["[:lower:]",new Ce(1,Wf)],["[:^lower:]",new Ce(-1,Wf)],["[:print:]",new Ce(1,Yf)],["[:^print:]",new Ce(-1,Yf)],["[:punct:]",new Ce(1,Qf)],["[:^punct:]",new Ce(-1,Qf)],["[:space:]",new Ce(1,Xf)],["[:^space:]",new Ce(-1,Xf)],["[:upper:]",new Ce(1,Zf)],["[:^upper:]",new Ce(-1,Zf)],["[:word:]",new Ce(1,ed)],["[:^word:]",new Ce(-1,ed)],["[:xdigit:]",new Ce(1,td)],["[:^xdigit:]",new Ce(-1,td)]]);var ms=class zo{static charClassToString(e,t){let s="[";for(let r=0;r<t;r+=2){r>0&&(s+=" ");const i=e[r],o=e[r+1];i===o?s+=`0x${i.toString(16)}`:s+=`0x${i.toString(16)}-0x${o.toString(16)}`}return s+="]",s}static sortRanges(e,t){const s=t>>1,r=new Array(s);for(let o=0;o<s;o++)r[o]=o;r.sort((o,a)=>e[2*o]-e[2*a]||e[2*a+1]-e[2*o+1]);const i=e.slice(0,t);for(let o=0;o<s;o++)e[2*o]=i[2*r[o]],e[2*o+1]=i[2*r[o]+1]}constructor(e=H.emptyInts()){this.r=e,this.len=e.length}toArray(){return this.r instanceof Int32Array?this.len===this.r.length?this.r:this.r.subarray(0,this.len):new Int32Array(this.len===this.r.length?this.r:this.r.slice(0,this.len))}toGrowableArray(){return Array.isArray(this.r)?(this.r.length=this.len,this.r):Array.from(this.r.subarray(0,this.len))}cleanClass(){if(this.len<4)return this;zo.sortRanges(this.r,this.len);let e=2;for(let t=2;t<this.len;t+=2){const s=this.r[t],r=this.r[t+1];if(s<=this.r[e-1]+1){r>this.r[e-1]&&(this.r[e-1]=r);continue}this.r[e]=s,this.r[e+1]=r,e+=2}return this.len=e,this}appendLiteral(e,t){return(t&V.FOLD_CASE)!==0?this.appendFoldedRange(e,e):this.appendRange(e,e)}appendRange(e,t){if(this.len>0){for(let s=2;s<=4;s+=2)if(this.len>=s){const r=this.r[this.len-s],i=this.r[this.len-s+1];if(e<=i+1&&r<=t+1)return e<r&&(this.r[this.len-s]=e),t>i&&(this.r[this.len-s+1]=t),this}}return this.r[this.len++]=e,this.r[this.len++]=t,this}appendFoldedRange(e,t){if(e<=q.MIN_FOLD&&t>=q.MAX_FOLD)return this.appendRange(e,t);if(t<q.MIN_FOLD||e>q.MAX_FOLD)return this.appendRange(e,t);e<q.MIN_FOLD&&(this.appendRange(e,q.MIN_FOLD-1),e=q.MIN_FOLD),t>q.MAX_FOLD&&(this.appendRange(q.MAX_FOLD+1,t),t=q.MAX_FOLD);for(let s=e;s<=t;s++){this.appendRange(s,s);for(let r=q.simpleFold(s);r!==s;r=q.simpleFold(r))this.appendRange(r,r)}return this}appendClass(e){for(let t=0;t<e.length;t+=2)this.appendRange(e[t],e[t+1]);return this}appendFoldedClass(e){for(let t=0;t<e.length;t+=2)this.appendFoldedRange(e[t],e[t+1]);return this}appendNegatedClass(e){let t=0;for(let s=0;s<e.length;s+=2){const r=e[s],i=e[s+1];t<=r-1&&this.appendRange(t,r-1),t=i+1}return t<=q.MAX_RUNE&&this.appendRange(t,q.MAX_RUNE),this}appendTable(e){for(let t=0;t<e.length;++t){const s=e.getLo(t),r=e.getHi(t),i=e.getStride(t);if(i===1){this.appendRange(s,r);continue}for(let o=s;o<=r;o+=i)this.appendRange(o,o)}return this}appendNegatedTable(e){let t=0;for(let s=0;s<e.length;++s){const r=e.getLo(s),i=e.getHi(s),o=e.getStride(s);if(o===1){t<=r-1&&this.appendRange(t,r-1),t=i+1;continue}for(let a=r;a<=i;a+=o)t<=a-1&&this.appendRange(t,a-1),t=a+1}return t<=q.MAX_RUNE&&this.appendRange(t,q.MAX_RUNE),this}appendTableWithSign(e,t){return t<0?this.appendNegatedTable(e):this.appendTable(e)}negateClass(){let e=0,t=0;for(let s=0;s<this.len;s+=2){const r=this.r[s],i=this.r[s+1];e<=r-1&&(this.r[t]=e,this.r[t+1]=r-1,t+=2),e=i+1}return this.len=t,e<=q.MAX_RUNE&&(this.r[this.len++]=e,this.r[this.len++]=q.MAX_RUNE),this}appendClassWithSign(e,t){return t<0?this.appendNegatedClass(e):this.appendClass(e)}appendGroup(e,t){let s=e.cls;return t&&(s=new zo().appendFoldedClass(s).cleanClass().toArray()),this.appendClassWithSign(s,e.sign)}toString(){return zo.charClassToString(this.r,this.len)}},O0=class{constructor(n){this.str=n,this.position=0}pos(){return this.position}rewindTo(n){this.position=n}more(){return this.position<this.str.length}peek(){return this.str.codePointAt(this.position)}skip(n){this.position+=n}skipString(n){this.position+=n.length}pop(){const n=this.str.codePointAt(this.position);return this.position+=H.charCount(n),n}lookingAt(n){return this.str.startsWith(n,this.position)}rest(){return this.str.substring(this.position)}from(n){return this.str.substring(n,this.position)}toString(){return this.rest()}},P0=class z{static ERR_INTERNAL_ERROR="regexp/syntax: internal error";static ERR_INVALID_CHAR_RANGE="invalid character class range";static ERR_INVALID_ESCAPE="invalid escape sequence";static ERR_INVALID_NAMED_CAPTURE="invalid named capture";static ERR_INVALID_PERL_OP="invalid or unsupported Perl syntax";static ERR_INVALID_REPEAT_OP="invalid nested repetition operator";static ERR_INVALID_REPEAT_SIZE="invalid repeat count";static ERR_MISSING_BRACKET="missing closing ]";static ERR_MISSING_PAREN="missing closing )";static ERR_MISSING_REPEAT_ARGUMENT="missing argument to repetition operator";static ERR_TRAILING_BACKSLASH="trailing backslash at end of expression";static ERR_DUPLICATE_NAMED_CAPTURE="duplicate capture group name";static ERR_UNEXPECTED_PAREN="unexpected )";static ERR_NESTING_DEPTH="expression nests too deeply";static ERR_LARGE="expression too large";static ERR_INVALID_CAPTURE_IN_LOOKBEHIND="invalid capture in lookbehind";static MAX_HEIGHT=1e3;static MAX_SIZE=1398101;static MAX_RUNES=33554432;static ANY_TABLE=new g(new Uint32Array([0,q.MAX_RUNE,1]));static ASCII_TABLE=new g(new Uint32Array([0,127,1]));static ASCII_FOLD_TABLE=new g(new Uint32Array([0,127,1,383,383,1,8490,8490,1]));static unicodeTable(e){return e==="Any"?{tab:z.ANY_TABLE,fold:z.ANY_TABLE,sign:1}:e==="Ascii"?{tab:z.ASCII_TABLE,fold:z.ASCII_FOLD_TABLE,sign:1}:e==="Assigned"?{tab:yt.CATEGORIES.get("Cn"),fold:yt.CATEGORIES.get("Cn"),sign:-1}:e==="Lc"?{tab:yt.CATEGORIES.get("LC"),fold:yt.FOLD_CATEGORIES.get("LC"),sign:1}:yt.CATEGORIES.has(e)?{tab:yt.CATEGORIES.get(e),fold:yt.FOLD_CATEGORIES.get(e),sign:1}:yt.SCRIPTS.has(e)?{tab:yt.SCRIPTS.get(e),fold:yt.FOLD_SCRIPT.get(e),sign:1}:null}static minFoldRune(e){if(e<q.MIN_FOLD||e>q.MAX_FOLD)return e;let t=e;const s=e;for(e=q.simpleFold(e);e!==s;e=q.simpleFold(e))t>e&&(t=e);return t}static leadingRegexp(e){if(e.op===I.Op.EMPTY_MATCH)return null;if(e.op===I.Op.CONCAT&&e.subs.length>0){const t=e.subs[0];return t.op===I.Op.EMPTY_MATCH?null:t}return e}static literalRegexp(e,t){const s=new I(I.Op.LITERAL);return s.flags=t,s.runes=H.stringToRunes(e),s}static parse(e,t){return new z(e,t).parseInternal()}static parseRepeat(e){const t=e.pos();if(!e.more()||!e.lookingAt("{"))return-1;e.skip(1);const s=z.parseInt(e);if(s===-1||!e.more())return-1;let r;if(!e.lookingAt(","))r=s;else{if(e.skip(1),!e.more())return-1;if(e.lookingAt("}"))r=-1;else if((r=z.parseInt(e))===-1)return-1}if(!e.more()||!e.lookingAt("}"))return-1;if(e.skip(1),s<0||s>1e3||r===-2||r>1e3||r>=0&&s>r)throw new De(z.ERR_INVALID_REPEAT_SIZE,e.from(t));return s<<16|r&q.MAX_BMP}static isValidCaptureName(e){if(e.length===0)return!1;for(let t=0;t<e.length;t++){const s=e.codePointAt(t);if(s!==k.CODES._&&!H.isalnum(s))return!1}return!0}static parseInt(e){const t=e.pos();for(;e.more()&&e.peek()>=k.CODES[0]&&e.peek()<=k.CODES[9];)e.skip(1);const s=e.from(t);return s.length===0||s.length>1&&s.codePointAt(0)===k.CODES[0]?-1:s.length>8?-2:parseInt(s,10)}static isCharClass(e){return e.op===I.Op.LITERAL&&e.runes.length===1||e.op===I.Op.CHAR_CLASS||e.op===I.Op.ANY_CHAR_NOT_NL||e.op===I.Op.ANY_CHAR}static matchRune(e,t){switch(e.op){case I.Op.LITERAL:return e.runes.length===1&&e.runes[0]===t;case I.Op.CHAR_CLASS:for(let s=0;s<e.runes.length;s+=2)if(e.runes[s]<=t&&t<=e.runes[s+1])return!0;return!1;case I.Op.ANY_CHAR_NOT_NL:return t!==k.CODES[`
`];case I.Op.ANY_CHAR:return!0}return!1}static mergeCharClass(e,t){switch(e.op){case I.Op.ANY_CHAR:break;case I.Op.ANY_CHAR_NOT_NL:z.matchRune(t,k.CODES[`
`])&&(e.op=I.Op.ANY_CHAR);break;case I.Op.CHAR_CLASS:{const s=new ms(Array.isArray(e.runes)?e.runes:Array.from(e.runes));t.op===I.Op.LITERAL?s.appendLiteral(t.runes[0],t.flags):s.appendClass(t.runes),e.runes=s.toGrowableArray();break}case I.Op.LITERAL:if(t.runes[0]===e.runes[0]&&t.flags===e.flags)break;e.op=I.Op.CHAR_CLASS,e.runes=new ms().appendLiteral(e.runes[0],e.flags).appendLiteral(t.runes[0],t.flags).toGrowableArray()}}static parseEscape(e){const t=e.pos();if(e.skip(1),!e.more())throw new De(z.ERR_TRAILING_BACKSLASH);let s=e.pop();e:switch(s){case k.CODES[1]:case k.CODES[2]:case k.CODES[3]:case k.CODES[4]:case k.CODES[5]:case k.CODES[6]:case k.CODES[7]:if(!e.more()||e.peek()<k.CODES[0]||e.peek()>k.CODES[7])break;case k.CODES[0]:{let r=s-k.CODES[0];for(let i=1;i<3&&!(!e.more()||e.peek()<k.CODES[0]||e.peek()>k.CODES[7]);i++)r=r*8+e.peek()-k.CODES[0],e.skip(1);return r}case k.CODES.x:{if(!e.more())break;if(s=e.pop(),s===k.CODES["{"]){let o=0,a=0;for(;;){if(!e.more())break e;if(s=e.pop(),s===k.CODES["}"])break;const l=H.unhex(s);if(l<0||(a=a*16+l,a>q.MAX_RUNE))break e;o++}if(o===0)break e;return a}const r=H.unhex(s);if(!e.more())break;s=e.pop();const i=H.unhex(s);if(r<0||i<0)break;return r*16+i}case k.CODES.a:return k.CODES["\x07"];case k.CODES.f:return k.CODES["\f"];case k.CODES.n:return k.CODES[`
`];case k.CODES.r:return k.CODES["\r"];case k.CODES.t:return k.CODES["	"];case k.CODES.v:return k.CODES["\v"];default:if(s<=q.MAX_ASCII&&!H.isalnum(s))return s}throw new De(z.ERR_INVALID_ESCAPE,e.from(t))}static parseClassChar(e,t){if(!e.more())throw new De(z.ERR_MISSING_BRACKET,e.from(t));return e.lookingAt("\\")?z.parseEscape(e):e.pop()}static hasCapture(e){if(e===null)return!1;if(e.op===I.Op.CAPTURE)return!0;if(e.subs){for(let t of e.subs)if(z.hasCapture(t))return!0}return!1}constructor(e,t=0){this.wholeRegexp=e,this.flags=t,this.numCap=0,this.namedGroups=Object.create(null),this.stack=[],this.free=null,this.numRegexp=0,this.numRunes=0,this.repeats=0,this.height=null,this.size=null,this.nlb=0}newRegexp(e){let t=this.free;return t!==null&&t.subs!==null&&t.subs.length>0?(this.free=t.subs[0],t.reinit(),t.op=e):(t=new I(e),this.numRegexp+=1),t}reuse(e){this.height!==null&&this.height.has(e)&&this.height.delete(e),e.subs!==null&&e.subs.length>0&&(e.subs[0]=this.free),this.free=e}checkLimits(e){if(this.numRunes>z.MAX_RUNES)throw new De(z.ERR_LARGE);this.checkSize(e),this.checkHeight(e)}checkSize(e){if(this.size===null){if(this.repeats===0&&(this.repeats=1),e.op===I.Op.REPEAT){let t=e.max;t===-1&&(t=e.min),t<=0&&(t=1),t>Math.floor(z.MAX_SIZE/this.repeats)?this.repeats=z.MAX_SIZE:this.repeats*=t}if(this.numRegexp<Math.floor(z.MAX_SIZE/this.repeats))return;this.size=new Map;for(let t of this.stack)this.checkSize(t)}if(this.calcSize(e,!0)>z.MAX_SIZE)throw new De(z.ERR_LARGE)}calcSize(e,t=!1){if(!t&&this.size!==null&&this.size.has(e))return this.size.get(e);let s=0;switch(e.op){case I.Op.LITERAL:s=e.runes.length;break;case I.Op.PLB:case I.Op.NLB:case I.Op.CAPTURE:case I.Op.STAR:s=2+this.calcSize(e.subs[0]);break;case I.Op.PLUS:case I.Op.QUEST:s=1+this.calcSize(e.subs[0]);break;case I.Op.CONCAT:for(let r of e.subs)s=s+this.calcSize(r);break;case I.Op.ALTERNATE:for(let r of e.subs)s=s+this.calcSize(r);e.subs.length>1&&(s=s+e.subs.length-1);break;case I.Op.REPEAT:{let r=this.calcSize(e.subs[0]);if(e.max===-1){e.min===0?s=2+r:s=1+e.min*r;break}s=e.max*r+(e.max-e.min);break}}return s=Math.max(1,s),this.size===null&&(this.size=new Map),this.size.set(e,s),s}checkHeight(e){if(!(this.numRegexp<z.MAX_HEIGHT)){if(this.height===null){this.height=new Map;for(let t of this.stack)this.checkHeight(t)}if(this.calcHeight(e,!0)>z.MAX_HEIGHT)throw new De(z.ERR_NESTING_DEPTH)}}calcHeight(e,t=!1){if(!t&&this.height!==null&&this.height.has(e))return this.height.get(e);let s=1;for(let r of e.subs){const i=this.calcHeight(r);s<1+i&&(s=1+i)}return this.height===null&&(this.height=new Map),this.height.set(e,s),s}pop(){return this.stack.pop()}popToPseudo(){const e=this.stack.length;let t=e;for(;t>0&&!I.isPseudoOp(this.stack[t-1].op);)t--;return this.stack.splice(t,e-t)}push(e){if(this.numRunes+=e.runes.length,e.op===I.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]===e.runes[1]){if(this.maybeConcat(e.runes[0],this.flags&-2))return null;e.op=I.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags&-2}else if(e.op===I.Op.CHAR_CLASS&&e.runes.length===4&&e.runes[0]===e.runes[1]&&e.runes[2]===e.runes[3]&&q.simpleFold(e.runes[0])===e.runes[2]&&q.simpleFold(e.runes[2])===e.runes[0]||e.op===I.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]+1===e.runes[1]&&q.simpleFold(e.runes[0])===e.runes[1]&&q.simpleFold(e.runes[1])===e.runes[0]){if(this.maybeConcat(e.runes[0],this.flags|V.FOLD_CASE))return null;e.op=I.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags|V.FOLD_CASE}else this.maybeConcat(-1,0);return this.stack.push(e),this.checkLimits(e),e}maybeConcat(e,t){const s=this.stack.length;if(s<2)return!1;const r=this.stack[s-1],i=this.stack[s-2];if(r.op!==I.Op.LITERAL||i.op!==I.Op.LITERAL||(r.flags&V.FOLD_CASE)!==(i.flags&V.FOLD_CASE))return!1;Array.isArray(i.runes)||(i.runes=Array.from(i.runes));for(let o=0;o<r.runes.length;o++)i.runes.push(r.runes[o]);return e>=0?(r.runes=[e],r.flags=t,!0):(this.pop(),this.reuse(r),!1)}newLiteral(e,t){const s=this.newRegexp(I.Op.LITERAL);return s.flags=t,(t&V.FOLD_CASE)!==0&&(e=z.minFoldRune(e)),s.runes=[e],s}literal(e){this.push(this.newLiteral(e,this.flags))}op(e){const t=this.newRegexp(e);return t.flags=this.flags,this.push(t)}repeat(e,t,s,r,i,o){let a=this.flags;if((a&V.PERL_X)!==0&&(i.more()&&i.lookingAt("?")&&(i.skip(1),a^=V.NON_GREEDY),o!==-1))throw new De(z.ERR_INVALID_REPEAT_OP,i.from(o));const l=this.stack.length;if(l===0)throw new De(z.ERR_MISSING_REPEAT_ARGUMENT,i.from(r));const u=this.stack[l-1];if(I.isPseudoOp(u.op))throw new De(z.ERR_MISSING_REPEAT_ARGUMENT,i.from(r));const h=this.newRegexp(e);if(h.min=t,h.max=s,h.flags=a,h.subs=[u],this.stack[l-1]=h,this.checkLimits(h),e===I.Op.REPEAT&&(t>=2||s>=2)&&!this.repeatIsValid(h,1e3))throw new De(z.ERR_INVALID_REPEAT_SIZE,i.from(r))}repeatIsValid(e,t){if(e.op===I.Op.REPEAT){let s=e.max;if(s===0)return!0;if(s<0&&(s=e.min),s>t)return!1;s>0&&(t=Math.trunc(t/s))}for(let s of e.subs)if(!this.repeatIsValid(s,t))return!1;return!0}concat(){this.maybeConcat(-1,0);const e=this.popToPseudo();return e.length===0?this.push(this.newRegexp(I.Op.EMPTY_MATCH)):this.push(this.collapse(e,I.Op.CONCAT))}alternate(){const e=this.popToPseudo();return e.length>0&&this.cleanAlt(e[e.length-1]),e.length===0?this.push(this.newRegexp(I.Op.NO_MATCH)):this.push(this.collapse(e,I.Op.ALTERNATE))}cleanAlt(e){e.op===I.Op.CHAR_CLASS&&(e.runes=new ms(Array.from(e.runes)).cleanClass().toArray(),e.runes.length===2&&e.runes[0]===0&&e.runes[1]===q.MAX_RUNE?(e.runes=new Int32Array(0),e.op=I.Op.ANY_CHAR):e.runes.length===4&&e.runes[0]===0&&e.runes[1]===k.CODES[`
`]-1&&e.runes[2]===k.CODES[`
`]+1&&e.runes[3]===q.MAX_RUNE&&(e.runes=new Int32Array(0),e.op=I.Op.ANY_CHAR_NOT_NL))}collapse(e,t){if(e.length===1)return e[0];let s=0;for(let a of e)s+=a.op===t?a.subs.length:1;let r=new Array(s).fill(null),i=0;for(let a of e)if(a.op===t){for(let l=0;l<a.subs.length;l++)r[i++]=a.subs[l];this.reuse(a)}else r[i++]=a;let o=this.newRegexp(t);if(o.subs=r,t===I.Op.ALTERNATE&&(o.subs=this.factor(o.subs),o.subs.length===1)){const a=o;o=o.subs[0],this.reuse(a)}return o}factor(e){if(e.length<2)return e;let t=0,s=e.length,r=0,i=null,o=0,a=0,l=0;for(let h=0;h<=s;h++){let d=null,p=0,D=0;if(h<s){let y=e[t+h];if(y.op===I.Op.CONCAT&&y.subs.length>0&&(y=y.subs[0]),y.op===I.Op.LITERAL&&(d=y.runes,p=y.runes.length,D=y.flags&V.FOLD_CASE),D===a){let R=0;for(;R<o&&R<p&&i[R]===d[R];)R++;if(R>0){o=R;continue}}}if(h!==l)if(h===l+1)e[r++]=e[t+l];else{const y=this.newRegexp(I.Op.LITERAL);y.flags=a,y.runes=i.slice(0,o);for(let G=l;G<h;G++)e[t+G]=this.removeLeadingString(e[t+G],o),this.checkLimits(e[t+G]);const R=this.collapse(e.slice(t+l,t+h),I.Op.ALTERNATE),F=this.newRegexp(I.Op.CONCAT);F.subs=[y,R],e[r++]=F}l=h,i=d,o=p,a=D}s=r,t=0,l=0,r=0;let u=null;for(let h=0;h<=s;h++){let d=null;if(!(h<s&&(d=z.leadingRegexp(e[t+h]),u!==null&&u.equals(d)&&(z.isCharClass(u)||u.op===I.Op.REPEAT&&u.min===u.max&&z.isCharClass(u.subs[0]))))){if(h!==l)if(h===l+1)e[r++]=e[t+l];else{const p=u;for(let R=l;R<h;R++){const F=R!==l;e[t+R]=this.removeLeadingRegexp(e[t+R],F),this.checkLimits(e[t+R])}const D=this.collapse(e.slice(t+l,t+h),I.Op.ALTERNATE),y=this.newRegexp(I.Op.CONCAT);y.subs=[p,D],e[r++]=y}l=h,u=d}}s=r,t=0,l=0,r=0;for(let h=0;h<=s;h++)if(!(h<s&&z.isCharClass(e[t+h]))){if(h!==l)if(h===l+1)e[r++]=e[t+l];else{let d=l;for(let D=l+1;D<h;D++){const y=e[t+d],R=e[t+D];(y.op<R.op||y.op===R.op&&(y.runes!==null?y.runes.length:0)<(R.runes!==null?R.runes.length:0))&&(d=D)}const p=e[t+l];e[t+l]=e[t+d],e[t+d]=p;for(let D=l+1;D<h;D++)z.mergeCharClass(e[t+l],e[t+D]),this.reuse(e[t+D]);this.cleanAlt(e[t+l]),e[r++]=e[t+l]}h<s&&(e[r++]=e[t+h]),l=h+1}s=r,t=0,l=0,r=0;for(let h=0;h<s;++h)h+1<s&&e[t+h].op===I.Op.EMPTY_MATCH&&e[t+h+1].op===I.Op.EMPTY_MATCH||(e[r++]=e[t+h]);return s=r,t=0,e.slice(t,s)}removeLeadingString(e,t){if(e.op===I.Op.CONCAT&&e.subs.length>0){const s=this.removeLeadingString(e.subs[0],t);if(e.subs[0]=s,s.op===I.Op.EMPTY_MATCH)switch(this.reuse(s),e.subs.length){case 0:case 1:e.op=I.Op.EMPTY_MATCH,e.subs=I.emptySubs();break;case 2:{const r=e;e=e.subs[1],this.reuse(r);break}default:e.subs=e.subs.slice(1,e.subs.length)}return e}return e.op===I.Op.LITERAL&&(e.runes=e.runes.slice(t,e.runes.length),e.runes.length===0&&(e.op=I.Op.EMPTY_MATCH)),e}removeLeadingRegexp(e,t){if(e.op===I.Op.CONCAT&&e.subs.length>0){switch(t&&this.reuse(e.subs[0]),e.subs=e.subs.slice(1,e.subs.length),e.subs.length){case 0:e.op=I.Op.EMPTY_MATCH,e.subs=I.emptySubs();break;case 1:{const s=e;e=e.subs[0],this.reuse(s);break}}return e}return t&&this.reuse(e),this.newRegexp(I.Op.EMPTY_MATCH)}parseInternal(){if((this.flags&V.LITERAL)!==0)return z.literalRegexp(this.wholeRegexp,this.flags);let e=-1,t=-1,s=-1;const r=new O0(this.wholeRegexp);for(;r.more();){let i=-1;e:switch(r.peek()){case k.CODES["("]:if((this.flags&V.LOOKBEHIND)!==0){if(r.lookingAt("(?<=")){this.parsePosLookBehind(),r.skip(4);break}if(r.lookingAt("(?<!")){this.parseNegLookBehind(),r.skip(4);break}}if((this.flags&V.PERL_X)!==0&&r.lookingAt("(?")){this.parsePerlFlags(r);break}this.op(I.Op.LEFT_PAREN).cap=++this.numCap,r.skip(1);break;case k.CODES["|"]:this.parseVerticalBar(),r.skip(1);break;case k.CODES[")"]:this.parseRightParen(),r.skip(1);break;case k.CODES["^"]:(this.flags&V.ONE_LINE)!==0?this.op(I.Op.BEGIN_TEXT):this.op(I.Op.BEGIN_LINE),r.skip(1);break;case k.CODES.$:(this.flags&V.ONE_LINE)!==0?this.op(I.Op.END_TEXT).flags|=V.WAS_DOLLAR:this.op(I.Op.END_LINE),r.skip(1);break;case k.CODES["."]:(this.flags&V.DOT_NL)!==0?this.op(I.Op.ANY_CHAR):this.op(I.Op.ANY_CHAR_NOT_NL),r.skip(1);break;case k.CODES["["]:this.parseClass(r);break;case k.CODES["*"]:case k.CODES["+"]:case k.CODES["?"]:{i=r.pos();let o=null;switch(r.pop()){case k.CODES["*"]:o=I.Op.STAR;break;case k.CODES["+"]:o=I.Op.PLUS;break;case k.CODES["?"]:o=I.Op.QUEST}this.repeat(o,t,s,i,r,e);break}case k.CODES["{"]:{const o=r.pos(),a=z.parseRepeat(r);if(a<0){r.rewindTo(o),this.literal(r.pop());break}i=o,t=a>>16,s=(a&q.MAX_BMP)<<16>>16,this.repeat(I.Op.REPEAT,t,s,i,r,e);break}case k.CODES["\\"]:{const o=r.pos();if(r.skip(1),(this.flags&V.PERL_X)!==0&&r.more())switch(r.pop()){case k.CODES.A:this.op(I.Op.BEGIN_TEXT);break e;case k.CODES.b:this.op(I.Op.WORD_BOUNDARY);break e;case k.CODES.B:this.op(I.Op.NO_WORD_BOUNDARY);break e;case k.CODES.C:throw new De(z.ERR_INVALID_ESCAPE,"\\C");case k.CODES.Q:{let u=r.rest();const h=u.indexOf("\\E");h>=0?(u=u.substring(0,h),r.skipString(u),r.skipString("\\E")):r.skipString(u);let d=0;for(;d<u.length;){const p=u.codePointAt(d);this.literal(p),d+=H.charCount(p)}break e}case k.CODES.z:this.op(I.Op.END_TEXT);break e;default:r.rewindTo(o)}else r.rewindTo(o);const a=this.newRegexp(I.Op.CHAR_CLASS);if(a.flags=this.flags,r.lookingAt("\\p")||r.lookingAt("\\P")){const u=new ms;if(this.parseUnicodeClass(r,u)){a.runes=u.toArray(),this.push(a);break e}}const l=new ms;if(this.parsePerlClassEscape(r,l)){a.runes=l.toArray(),this.push(a);break e}r.rewindTo(o),this.reuse(a),this.literal(z.parseEscape(r));break}default:this.literal(r.pop())}e=i}if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length!==1)throw new De(z.ERR_MISSING_PAREN,this.wholeRegexp);return this.stack[0].namedGroups=this.namedGroups,this.stack[0]}parsePerlFlags(e){const t=e.pos(),s=e.rest();if(s.startsWith("(?P<")||s.startsWith("(?<")){const a=s.charAt(2)==="P"?4:3,l=s.indexOf(">");if(l<0)throw new De(z.ERR_INVALID_NAMED_CAPTURE,s);const u=s.substring(a,l);if(e.skipString(u),e.skip(a+1),!z.isValidCaptureName(u))throw new De(z.ERR_INVALID_NAMED_CAPTURE,s.substring(0,l+1));const h=this.op(I.Op.LEFT_PAREN);if(h.cap=++this.numCap,this.namedGroups[u])throw new De(z.ERR_DUPLICATE_NAMED_CAPTURE,u);this.namedGroups[u]=this.numCap,h.name=u;return}e.skip(2);let r=this.flags,i=1,o=!1;e:for(;e.more();){const a=e.pop();switch(a){case k.CODES.i:r|=V.FOLD_CASE,o=!0;break;case k.CODES.m:r&=-17,o=!0;break;case k.CODES.s:r|=V.DOT_NL,o=!0;break;case k.CODES.U:r|=V.NON_GREEDY,o=!0;break;case k.CODES["-"]:if(i<0)break e;i=-1,r=~r,o=!1;break;case k.CODES[":"]:case k.CODES[")"]:if(i<0){if(!o)break e;r=~r}a===k.CODES[":"]&&this.op(I.Op.LEFT_PAREN),this.flags=r;return;default:break e}}throw new De(z.ERR_INVALID_PERL_OP,e.from(t))}parsePosLookBehind(){const e=this.newRegexp(I.Op.LEFT_PAREN);return e.flags=this.flags,e.lb=++this.nlb,this.push(e)}parseNegLookBehind(){const e=this.newRegexp(I.Op.LEFT_PAREN);return e.flags=this.flags,e.lb=-++this.nlb,this.push(e)}parseVerticalBar(){this.concat(),this.swapVerticalBar()||this.op(I.Op.VERTICAL_BAR)}swapVerticalBar(){const e=this.stack.length;if(e>=3&&this.stack[e-2].op===I.Op.VERTICAL_BAR&&z.isCharClass(this.stack[e-1])&&z.isCharClass(this.stack[e-3])){let t=this.stack[e-1],s=this.stack[e-3];if(t.op>s.op){const r=s;s=t,t=r,this.stack[e-3]=s}return z.mergeCharClass(s,t),this.reuse(t),this.pop(),!0}if(e>=2){const t=this.stack[e-1],s=this.stack[e-2];if(s.op===I.Op.VERTICAL_BAR)return e>=3&&this.cleanAlt(this.stack[e-3]),this.stack[e-2]=t,this.stack[e-1]=s,!0}return!1}parseRightParen(){if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length<2)throw new De(z.ERR_UNEXPECTED_PAREN,this.wholeRegexp);const e=this.pop(),t=this.pop();if(t.op!==I.Op.LEFT_PAREN)throw new De(z.ERR_UNEXPECTED_PAREN,this.wholeRegexp);if(this.flags=t.flags,t.lb!==0){if(z.hasCapture(e))throw new De(z.ERR_INVALID_CAPTURE_IN_LOOKBEHIND,this.wholeRegexp);t.lb>0?t.op=I.Op.PLB:t.op=I.Op.NLB,t.subs=[e],this.push(t);return}t.cap===0?this.push(e):(t.op=I.Op.CAPTURE,t.subs=[e],this.push(t))}parsePerlClassEscape(e,t){const s=e.pos();if((this.flags&V.PERL_X)===0||!e.more()||e.pop()!==k.CODES["\\"]||!e.more())return!1;e.pop();const r=e.from(s),i=Uf.has(r)?Uf.get(r):null;return i===null?!1:(t.appendGroup(i,(this.flags&V.FOLD_CASE)!==0),!0)}parseNamedClass(e,t){const s=e.rest(),r=s.indexOf(":]");if(r<0)return!1;const i=s.substring(0,r+2);e.skipString(i);const o=nd.has(i)?nd.get(i):null;if(o===null)throw new De(z.ERR_INVALID_CHAR_RANGE,i);return t.appendGroup(o,(this.flags&V.FOLD_CASE)!==0),!0}parseUnicodeClass(e,t){const s=e.pos();if((this.flags&V.UNICODE_GROUPS)===0||!e.lookingAt("\\p")&&!e.lookingAt("\\P"))return!1;e.skip(1);let r=1,i=e.pop();if(i===k.CODES.P&&(r=-1),!e.more())throw e.rewindTo(s),new De(z.ERR_INVALID_CHAR_RANGE,e.rest());i=e.pop();let o;if(i!==k.CODES["{"])o=H.runeToString(i);else{const h=e.rest(),d=h.indexOf("}");if(d<0)throw e.rewindTo(s),new De(z.ERR_INVALID_CHAR_RANGE,e.rest());o=h.substring(0,d),e.skipString(o),e.skip(1)}o.length!==0&&o.codePointAt(0)===k.CODES["^"]&&(r=0-r,o=o.substring(1));const a=z.unicodeTable(o);if(a===null)throw new De(z.ERR_INVALID_CHAR_RANGE,e.from(s));a.sign<0&&(r=0-r);const l=a.tab,u=a.fold;if((this.flags&V.FOLD_CASE)===0||u===null)t.appendTableWithSign(l,r);else{const h=new ms().appendTable(l).appendTable(u).cleanClass().toArray();t.appendClassWithSign(Array.from(h),r)}return!0}parseClass(e){const t=e.pos();e.skip(1);const s=this.newRegexp(I.Op.CHAR_CLASS);s.flags=this.flags;const r=new ms;let i=1;e.more()&&e.lookingAt("^")&&(i=-1,e.skip(1),(this.flags&V.CLASS_NL)===0&&r.appendRange(k.CODES[`
`],k.CODES[`
`]));let o=!0;for(;!e.more()||e.peek()!==k.CODES["]"]||o;){if(e.more()&&e.lookingAt("-")&&(this.flags&V.PERL_X)===0&&!o){const h=e.rest();if(h==="-"||!h.startsWith("-]"))throw e.rewindTo(t),new De(z.ERR_INVALID_CHAR_RANGE,e.rest())}o=!1;const a=e.pos();if(e.lookingAt("[:")){if(this.parseNamedClass(e,r))continue;e.rewindTo(a)}if(this.parseUnicodeClass(e,r)||this.parsePerlClassEscape(e,r))continue;e.rewindTo(a);const l=z.parseClassChar(e,t);let u=l;if(e.more()&&e.lookingAt("-")){if(e.skip(1),e.more()&&e.lookingAt("]"))e.skip(-1);else if(u=z.parseClassChar(e,t),u<l)throw new De(z.ERR_INVALID_CHAR_RANGE,e.from(a))}(this.flags&V.FOLD_CASE)===0?r.appendRange(l,u):r.appendFoldedRange(l,u)}e.skip(1),r.cleanClass(),i<0&&r.negateClass(),s.runes=r.toArray(),this.push(s)}},N0=class Ds{static initTest(e){const t=Ds.compile(e),s=new Ds(t.expr,t.prog,t.numSubexp,t.longest);return s.cond=t.cond,s.prefix=t.prefix,s.prefixUTF8=t.prefixUTF8,s.prefixComplete=t.prefixComplete,s.prefixRune=t.prefixRune,s.prefilter=t.prefilter,s.namedGroups=t.namedGroups,s}static compile(e){return Ds.compileImpl(e,V.PERL,!1)}static compilePOSIX(e){return Ds.compileImpl(e,V.POSIX,!0)}static compileImpl(e,t,s){let r=P0.parse(e,t);const i=r.maxCap(),o=r.namedGroups;r=S0.simplify(r);const a=A0.build(r),l=R0.compileRegexp(r),u=new Ds(e,l,i,s);u.prefilter=a.type===le.Type.NONE?null:a;const[h,d]=l.prefix();return u.prefixComplete=h,u.prefix=d,u.prefixUTF8=H.stringToUtf8ByteArray(u.prefix),u.prefix.length>0&&(u.prefixRune=u.prefix.codePointAt(0)),u.namedGroups=o,u}static match(e,t){return Ds.compile(e).match(t)}constructor(e,t,s=0,r=0){this.expr=e,this.prog=t,this.numSubexp=s,this.longest=r,this.cond=t.startCond(),this.prefix=null,this.prefixUTF8=null,this.prefixComplete=!1,this.prefixRune=0,this.namedGroups=Object.create(null),this.machinePool=[],this.lazyDFA=null,this.onepass=Lf.compile(this.prog),this.prefilter=null}get dfa(){return this.lazyDFA===null&&(this.lazyDFA=new Zp(this.prog)),this.lazyDFA}matchPrefixComplete(e,t,s,r){if((s===V.ANCHOR_START||s===V.ANCHOR_BOTH)&&t!==0)return null;let i=-1,o=-1;const a=e.prefixLength(this);if(s===V.UNANCHORED){const l=e.index(this,t);if(l<0)return null;i=t+l,o=i+a}else if(s===V.ANCHOR_BOTH){if(e.endPos()!==a||e.index(this,0)!==0)return null;i=0,o=a}else if(s===V.ANCHOR_START){if(e.index(this,0)!==0)return null;i=0,o=a}if(i<0)return null;if(r>0){const l=new Int32Array(r).fill(-1);return l[0]=i,l[1]=o,Array.from(l)}return[]}createLookbehindState(){return this.prog.numLb>0?new d0(this.prog):null}executeEngine(e,t,s,r,i=null){if(this.prefixComplete&&(r===0||this.numSubexp===0))return this.matchPrefixComplete(e,t,s,r);if(this.prefilter!==null&&s===V.UNANCHORED&&!this.prefilter.eval(e,t))return null;if(this.onepass!==null)return Lf.execute(this,e,t,s,r);if(r>0)return this.prog.numLb===0&&e.endPos()<=Po.maxBitStateLen(this.prog)?Po.execute(this,e,t,s,r):this.doExecuteNFA(e,t,s,r,i);if(this.prog.numLb===0){const o=this.dfa.match(e,t,s);if(o!==null)return o?[]:null;if(e.endPos()<=Po.maxBitStateLen(this.prog))return Po.execute(this,e,t,s,r)}return this.doExecuteNFA(e,t,s,r,i)}numberOfCapturingGroups(){return this.numSubexp}numberOfInstructions(){return this.prog.numInst()}get(){return this.machinePool.length>0?this.machinePool.pop():null}reset(){this.machinePool.length=0}put(e){this.machinePool.push(e)}toString(){return this.expr}doExecuteNFA(e,t,s,r,i=null){let o=this.get();o||(o=C0.fromRE2(this)),o.init(r);const a=o.match(e,t,s,i)?o.submatches():null;return this.put(o),a}match(e){return this.executeEngine(we.fromUTF16(e),0,V.UNANCHORED,0)!==null}matchWithGroup(e,t,s,r,i,o=null){return e instanceof Ps||(H.isByteArray(e)?e=Is.utf8(e):e=Is.utf16(e)),this.matchMachineInput(e,t,s,r,i,o)}matchMachineInput(e,t,s,r,i,o=null){if(t>s)return[!1,null];const a=e.isUTF16Encoding()?we.fromUTF16(e.asCharSequence(),0,s):we.fromUTF8(e.asBytes(),0,s),l=this.executeEngine(a,t,r,2*i,o);return l===null?[!1,null]:[!0,l]}matchUTF8(e){return this.executeEngine(we.fromUTF8(e),0,V.UNANCHORED,0)!==null}replaceAll(e,t){return this.replaceAllFunc(e,()=>t,2*e.length+1)}replaceFirst(e,t){return this.replaceAllFunc(e,()=>t,1)}replaceAllFunc(e,t,s){let r=0,i=0,o="";const a=we.fromUTF16(e),l=this.createLookbehindState();let u=0;for(;i<=e.length;){const h=this.executeEngine(a,i,V.UNANCHORED,2,l);if(h===null||h.length===0)break;o+=e.substring(r,h[0]),(h[1]>r||h[0]===0)&&(o+=t(e.substring(h[0],h[1])),u++),r=h[1];const d=a.step(i)&7;if(i+d>h[1]?i+=d:i+1>h[1]?i++:i=h[1],u>=s)break}return o+=e.substring(r),o}pad(e){if(e===null)return null;let t=(1+this.numSubexp)*2;if(e.length<t){let s=new Array(t).fill(-1);for(let r=0;r<e.length;r++)s[r]=e[r];e=s}return e}allMatches(e,t,s=r=>r){let r=[];const i=e.endPos();t<0&&(t=i+1);let o=0,a=0,l=-1;const u=this.createLookbehindState();for(;a<t&&o<=i;){const h=this.executeEngine(e,o,V.UNANCHORED,this.prog.numCap,u);if(h===null||h.length===0)break;let d=!0;if(h[1]===o){h[0]===l&&(d=!1);const p=e.step(o);p<0?o=i+1:o+=p&7}else o=h[1];l=h[1],d&&(r.push(s(this.pad(h))),a++)}return r}findUTF8(e){const t=this.executeEngine(we.fromUTF8(e),0,V.UNANCHORED,2);return t===null?null:e.slice(t[0],t[1])}findUTF8Index(e){const t=this.executeEngine(we.fromUTF8(e),0,V.UNANCHORED,2);return t===null?null:t.slice(0,2)}find(e){const t=this.executeEngine(we.fromUTF16(e),0,V.UNANCHORED,2);return t===null?"":e.substring(t[0],t[1])}findIndex(e){return this.executeEngine(we.fromUTF16(e),0,V.UNANCHORED,2)}findUTF8Submatch(e){const t=this.executeEngine(we.fromUTF8(e),0,V.UNANCHORED,this.prog.numCap);if(t===null)return null;const s=new Array(1+this.numSubexp).fill(null);for(let r=0;r<s.length;r++)2*r<t.length&&t[2*r]>=0&&(s[r]=e.slice(t[2*r],t[2*r+1]));return s}findUTF8SubmatchIndex(e){return this.pad(this.executeEngine(we.fromUTF8(e),0,V.UNANCHORED,this.prog.numCap))}findSubmatch(e){const t=this.executeEngine(we.fromUTF16(e),0,V.UNANCHORED,this.prog.numCap);if(t===null)return null;const s=new Array(1+this.numSubexp).fill(null);for(let r=0;r<s.length;r++)2*r<t.length&&t[2*r]>=0&&(s[r]=e.substring(t[2*r],t[2*r+1]));return s}findSubmatchIndex(e){return this.pad(this.executeEngine(we.fromUTF16(e),0,V.UNANCHORED,this.prog.numCap))}findAllUTF8(e,t){const s=this.allMatches(we.fromUTF8(e),t,r=>e.slice(r[0],r[1]));return s.length===0?null:s}findAllUTF8Index(e,t){const s=this.allMatches(we.fromUTF8(e),t,r=>r.slice(0,2));return s.length===0?null:s}findAll(e,t){const s=this.allMatches(we.fromUTF16(e),t,r=>e.substring(r[0],r[1]));return s.length===0?null:s}findAllIndex(e,t){const s=this.allMatches(we.fromUTF16(e),t,r=>r.slice(0,2));return s.length===0?null:s}findAllUTF8Submatch(e,t){const s=this.allMatches(we.fromUTF8(e),t,r=>{let i=new Array(r.length/2|0).fill(null);for(let o=0;o<i.length;o++)r[2*o]>=0&&(i[o]=e.slice(r[2*o],r[2*o+1]));return i});return s.length===0?null:s}findAllUTF8SubmatchIndex(e,t){const s=this.allMatches(we.fromUTF8(e),t);return s.length===0?null:s}findAllSubmatch(e,t){const s=this.allMatches(we.fromUTF16(e),t,r=>{let i=new Array(r.length/2|0).fill(null);for(let o=0;o<i.length;o++)r[2*o]>=0&&(i[o]=e.substring(r[2*o],r[2*o+1]));return i});return s.length===0?null:s}findAllSubmatchIndex(e,t){const s=this.allMatches(we.fromUTF16(e),t);return s.length===0?null:s}},F0=class Zs{static isHexadecimal(e){return"0"<=e&&e<="9"||"A"<=e&&e<="F"||"a"<=e&&e<="f"}static translate(e){let t="";if(Object.prototype.toString.call(e)==="[object RegExp]"&&(e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e=e.source),typeof e!="string")return e;let s="",r=!1,i=e.length;i===0&&(s="(?:)",r=!0);let o=!1,a=0;for(;a<i;){let u=e[a];if(u==="\\"){if(a+1<i)switch(u=e[a+1],u){case"\\":s+="\\\\",a+=2;continue;case"c":if(a+2<i){let p=e[a+2].charCodeAt(0);if(p>=65&&p<=90||p>=97&&p<=122){let D=p%32;s+="\\x",s+=(D>>4).toString(16).toUpperCase(),s+=(D&15).toString(16).toUpperCase(),a+=3,r=!0;continue}}s+="c",a+=2,r=!0;continue;case"u":if(a+2<i){if(e[a+2]==="{"){let p=a+3,D=!1,y=!1;for(;p<i;){const R=e[p];if(R==="}"){y=!0;break}if(!Zs.isHexadecimal(R))break;D=!0,p++}if(y&&D){s+="\\x",a+=2,r=!0;continue}}else if(a+5<i){let p=!0;for(let D=0;D<4;D++)if(!Zs.isHexadecimal(e[a+2+D])){p=!1;break}if(p){s+="\\x{"+e.substring(a+2,a+6)+"}",a+=6,r=!0;continue}}}s+="u",a+=2,r=!0;continue;case"x":{let p=!1;if(a+2<i&&e[a+2]==="{"){let D=a+3,y=!1,R=!1;for(;D<i;){const F=e[D];if(F==="}"){R=!0;break}if(!Zs.isHexadecimal(F))break;y=!0,D++}R&&y&&(p=!0)}else a+3<i&&Zs.isHexadecimal(e[a+2])&&Zs.isHexadecimal(e[a+3])&&(p=!0);p?(s+="\\x",a+=2):(s+="x",a+=2,r=!0);continue}case"n":case"r":case"t":case"a":case"f":case"v":case"d":case"D":case"s":case"S":case"w":case"W":case"b":case"B":case"p":case"P":case"A":case"z":case"Q":case"E":case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":s+="\\"+u,a+=2;continue;default:{let p=e.codePointAt(a+1);if(p>=48&&p<=57||p>=65&&p<=90||p>=97&&p<=122){let D=H.charCount(p);s+=e.substring(a+1,a+1+D),a+=D+1,r=!0}else{s+="\\";let D=H.charCount(p);s+=e.substring(a+1,a+1+D),a+=D+1}continue}}}else if(u==="/"){s+="\\/",a+=1,r=!0;continue}else if(u==="["){if(!o&&e[a+1]==="]"){s+="[^\\x00-\\x{10FFFF}]",a+=2,r=!0;continue}if(!o&&e[a+1]==="^"&&e[a+2]==="]"){s+="[\\x00-\\x{10FFFF}]",a+=3,r=!0;continue}o=!0}else if(u==="]")o=!1;else if(!o&&u==="("&&a+2<i&&e[a+1]==="?"&&e[a+2]==="<"&&a+3<i&&!"=!>)".includes(e[a+3])){s+="(?P<",a+=3,r=!0;continue}let h=e.codePointAt(a),d=H.charCount(h);s+=e.substring(a,a+d),a+=d}const l=r?s:e;return t.length>0?`(?${t})${l}`:l}};const sd=(n,e)=>{const t=n.matchArray();return t.index=n.start(0),t.input=e,t.groups=n.namedGroupsObject(),t};var bu=class zt{static CASE_INSENSITIVE=Ws.CASE_INSENSITIVE;static DOTALL=Ws.DOTALL;static MULTILINE=Ws.MULTILINE;static DISABLE_UNICODE_GROUPS=Ws.DISABLE_UNICODE_GROUPS;static LONGEST_MATCH=Ws.LONGEST_MATCH;static LOOKBEHINDS=Ws.LOOKBEHINDS;static quote(e){return H.quoteMeta(e)}static quoteReplacement(e,t=!1){return Sf.quoteReplacement(e,t)}static translateRegExp(e){return F0.translate(e)}static compile(e,t=0){H.checkPattern(e),H.checkFlags(t);let s=e;(t&zt.CASE_INSENSITIVE)!==0&&(s=`(?i)${s}`),(t&zt.DOTALL)!==0&&(s=`(?s)${s}`),(t&zt.MULTILINE)!==0&&(s=`(?m)${s}`);let r=V.PERL;(t&zt.DISABLE_UNICODE_GROUPS)!==0&&(r&=-129),(t&zt.LOOKBEHINDS)!==0&&(r|=V.LOOKBEHIND);const i=new zt(e,t);return i.re2Input=N0.compileImpl(s,r,(t&zt.LONGEST_MATCH)!==0),i}static matches(e,t){return zt.compile(e).testExact(t)}static initTest(e,t,s){if(e==null)throw new Error("pattern is null");if(s==null)throw new Error("re2 is null");const r=new zt(e,t);return r.re2Input=s,r}constructor(e,t){this.patternInput=e,this.flagsInput=t,this.re2Input=null}reset(){this.re2Input.reset()}flags(){return this.flagsInput}pattern(){return this.patternInput}re2(){return this.re2Input}matches(e){return this.testExact(e)}matcher(e){return H.isByteArray(e)&&(e=Is.utf8(e)),new Sf(this,e)}test(e){return H.isByteArray(e)?this.re2Input.matchUTF8(e):this.re2Input.match(e)}testExact(e){const t=H.isByteArray(e)?we.fromUTF8(e):we.fromUTF16(e);return this.re2Input.executeEngine(t,0,V.ANCHOR_BOTH,0)!==null}exec(e){const t=this.matcher(e);return t.find()?sd(t,e):null}split(e,t=0){const s=this.matcher(e),r=[];let i=0,o=0;for(;s.find();){if(o===0&&s.end()===0){o=s.end();continue}if(t>0&&r.length===t-1)break;if(o===s.start()){if(t===0){i+=1,o=s.end();continue}}else for(;i>0;)r.push(""),i-=1;r.push(s.substring(o,s.start())),o=s.end()}if(t===0&&o!==s.inputLength()){for(;i>0;)r.push(""),i-=1;r.push(s.substring(o,s.inputLength()))}return(t!==0||r.length===0&&!(o===s.inputLength()&&o>0))&&r.push(s.substring(o,s.inputLength())),r}*matchAll(e){const t=this.matcher(e);for(;t.find();)yield sd(t,e)}toString(){return this.patternInput}programSize(){return this.re2Input.numberOfInstructions()}groupCount(){return this.re2Input.numberOfCapturingGroups()}namedGroups(){return this.re2Input.namedGroups}equals(e){return this===e?!0:e===null||this.constructor!==e.constructor?!1:this.flagsInput===e.flagsInput&&this.patternInput===e.patternInput}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ar="13.3.0";function L0(n){Ar=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns=new Ir("@firebase/firestore");function er(){return Ns.logLevel}function J(n,...e){if(Ns.logLevel<=he.DEBUG){const t=e.map(Ru);Ns.debug(`Firestore (${Ar}): ${n}`,...t)}}function wn(n,...e){if(Ns.logLevel<=he.ERROR){const t=e.map(Ru);Ns.error(`Firestore (${Ar}): ${n}`,...t)}}function jt(n,...e){if(Ns.logLevel<=he.WARN){const t=e.map(Ru);Ns.warn(`Firestore (${Ar}): ${n}`,...t)}}function Ru(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,ng(n,s,t)}function ng(n,e,t){let s=`FIRESTORE (${Ar}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw wn(s),new Error(s)}function W(n,e,t,s){let r="Unexpected state";typeof t=="string"?r=t:s=t,n||ng(e,r,s)}function ae(n,e){return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k0(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=k0(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<t&&(s+=e.charAt(r[i]%62))}return s}}function ue(n,e){return n<e?-1:n>e?1:0}function yi(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const r=n.charAt(s),i=e.charAt(s);if(r!==i)return nl(r)===nl(i)?ue(r,i):nl(r)?1:-1}return ue(n.length,e.length)}const x0=55296,M0=57343;function nl(n){const e=n.charCodeAt(0);return e>=x0&&e<=M0}function pr(n,e,t){return n.length===e.length&&n.every(((s,r)=>t(s,e[r])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,t){this.comparator=e,this.root=t||Qe.EMPTY}insert(e,t){return new Ie(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Qe.BLACK,null,null))}remove(e){return new Ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Fo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Fo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Fo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Fo(this.root,e,this.comparator,!0)}}class Fo{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?s(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qe{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s??Qe.RED,this.left=r??Qe.EMPTY,this.right=i??Qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,i){return new Qe(e??this.key,t??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return Qe.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw X(43730,{key:this.key,value:this.value});if(this.right.isRed())throw X(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw X(27949);return e+(this.isRed()?0:1)}}Qe.EMPTY=null,Qe.RED=!0,Qe.BLACK=!1;Qe.EMPTY=new class{constructor(){this.size=0}get key(){throw X(57766)}get value(){throw X(16141)}get color(){throw X(16727)}get left(){throw X(29726)}get right(){throw X(36894)}copy(e,t,s,r,i){return this}insert(e,t,s){return new Qe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.comparator=e,this.data=new Ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new rd(this.data.getIterator())}getIteratorFrom(e){return new rd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof Ne)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ne(this.comparator);return t.data=e,t}}class rd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends St{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt="__name__";class Wt{constructor(e,t,s){t===void 0?t=0:t>e.length&&X(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&X(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Wt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Wt?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const i=Wt.compareSegments(e.get(r),t.get(r));if(i!==0)return i}return ue(e.length,t.length)}static compareSegments(e,t){const s=Wt.isNumericId(e),r=Wt.isNumericId(t);return s&&!r?-1:!s&&r?1:s&&r?Wt.extractNumericId(e).compare(Wt.extractNumericId(t)):yi(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return qn.fromString(e.substring(4,e.length-2))}}class ge extends Wt{construct(e,t,s){return new ge(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new $(x.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((r=>r.length>0)))}return new ge(t)}static emptyPath(){return new ge([])}}const V0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let bt=class tr extends Wt{construct(e,t,s){return new tr(e,t,s)}static isValidIdentifier(e){return V0.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tr.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Yt}static keyField(){return new tr([Yt])}static fromServerFormat(e){const t=[];let s="",r=0;const i=()=>{if(s.length===0)throw new $(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new $(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new $(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new $(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new tr(t)}static emptyPath(){return new tr([])}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.fields=e,e.sort(bt.comparator)}static empty(){return new $t([])}unionWith(e){let t=new Ne(bt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new $t(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return pr(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Us(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function G0(n,e){const t=[];for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&t.push(e(n[s],s,n));return t}function sg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(ge.fromString(e))}static fromName(e){return new Y(ge.fromString(e).popFirst(5))}static empty(){return new Y(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ge.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new ge(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(n,e,t){if(!t)throw new $(x.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function U0(n,e,t,s){if(e===!0&&s===!0)throw new $(x.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function id(n){if(!Y.isDocumentKey(n))throw new $(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function od(n){if(Y.isDocumentKey(n))throw new $(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function zi(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function qa(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":X(12329,{type:typeof n})}function Ca(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new $(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=qa(n);throw new $(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function H0(n,e){if(e<=0)throw new $(x.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(n,e){const t={typeString:n};return e&&(t.value=e),t}function Wi(n,e){if(!zi(n))throw new $(x.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const r=e[s].typeString,i="value"in e[s]?{value:e[s].value}:void 0,o=e[s].optional;if(!(s in n)){if(o)continue;t=`JSON missing required field: '${s}'`;break}const a=n[s];if(r&&typeof a!==r){t=`JSON field '${s}' must be a ${r}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${s}' field to equal '${i.value}'`;break}}if(t)throw new $(x.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad=-62135596800,cd=1e6;class me{static now(){return me.fromMillis(Date.now())}static fromDate(e){return me.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*cd);return new me(t,s)}static fromInstant(e){if(!e||typeof e.t!="bigint")throw new $(x.INVALID_ARGUMENT,"Invalid Temporal.Instant object provided.");return me._fromEpochNanoseconds(e.t)}static _fromEpochNanoseconds(e){let t,s;if(e>=0n)t=Number(e/1000000000n),s=Number(e%1000000000n);else{const r=e%1000000000n;r===0n?(t=Number(e/1000000000n),s=0):(t=Number(e/1000000000n-1n),s=Number(r+1000000000n))}return new me(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new $(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new $(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ad)throw new $(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/cd}toInstant(){if(typeof Temporal>"u"||!Temporal.Instant)throw new $(x.FAILED_PRECONDITION,"The Temporal object is not available in the current environment.");const e=1000000000n*BigInt(this.seconds)+BigInt(this.nanoseconds);return Temporal.Instant.__PRIVATE_fromEpochNanoseconds(e)}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:me._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Wi(e,me._jsonSchema))return new me(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ad;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}me._jsonSchemaVersion="firestore/timestamp/1.0",me._jsonSchema={type:Se("string",me._jsonSchemaVersion),seconds:Se("number"),nanoseconds:Se("number")};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new ig("Invalid base64 string: "+i):i}})(e);return new Ae(t)}static fromUint8Array(e){const t=(function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i})(e);return new Ae(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ae.EMPTY_BYTE_STRING=new Ae("");const $0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function es(n){if(W(!!n,39018),typeof n=="string"){let e=0;const t=$0.exec(n);if(W(!!t,46558,{timestamp:n}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:be(n.seconds),nanos:be(n.nanos)}}function be(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ls(n){return typeof n=="string"?Ae.fromBase64String(n):Ae.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og="server_timestamp",ag="__type__",cg="__previous_value__",lg="__local_write_time__";function Ou(n){return(n?.mapValue?.fields||{})[ag]?.stringValue===og}function Yi(n){const e=n.mapValue.fields[cg];return Ou(e)?Yi(e):e}function gr(n){const e=es(n.mapValue.fields[lg].timestampValue);return new me(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(e,t,s,r,i,o,a,l,u,h,d,p,D){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=h,this.apiKey=d,this._customHeaders=p,this.grpcFlowControlWindow=D}}const pa="(default)";class wi{constructor(e,t){this.projectId=e,this.database=t||pa}static empty(){return new wi("","")}get isDefaultDatabase(){return this.database===pa}isEqual(e){return e instanceof wi&&e.projectId===this.projectId&&e.database===this.database}}function q0(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new $(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wi(n.options.projectId,e)}/**
 * Copyright 2021 M.Vokhmentsev
 *
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(){this.exponent=0,this.i=0n,this.o=0n,this.u=new Array(4).fill(0n),this.l=new Array(6).fill(0n),this.h=new Array(6).fill(0n),this.T=new Array(6).fill(0n),this.P=new Array(12).fill(0n)}static I(e,t){let s=new Z;return s.parse(e,t),s}parse(e,t){t+=e.length-1,this.exponent=0,this.i=0n,this.o=0n;let s=this.T,r=this.R(e,s);if(r==0&&this.isEmpty(s)||(t+=r)<Z.A)return;if(t>Z.V)return void(this.exponent=Number(Z.m));let i=this.p(t,s);this.S(t,i,s)}R(e,t){for(let i=0;i<6;i++)t[i]=0n;let s=0;for(;s<e.length&&e[s]==0;)s+=1;if(s==e.length)return 0;let r=-s;if(e.length-s>Z.v){let i=e[Z.v]>=5,o=new Array(Z.v).fill(0);for(let a=0;a<Z.v;a++)o[a]=e[a+s];i&&(r+=this.D(o)),e=o,s=0}for(let i=e.length-1;i>=s;i--)t[0]|=BigInt(e[i])<<32n,this.C(t);return r}C(e){let t=e.length;for(let s=0;s<t;s++){let r=e[s]%10n;e[s]=e[s]/10n,s+1<t&&(e[s+1]+=r<<32n)}}isEmpty(e){for(let t=0;t<e.length;t++)if(e[t]!=0n)return!1;return!0}D(e){for(let t=e.length-1;t>=0;t--){if(e[t]!=9)return e[t]=e[t]+1,0;e[t]=0}return e[0]=1,1}p(e,t){let s=t[0]<<31n|t[1]>>1n,r=Number(s)/Z.F;return Math.floor(Number(e)*Z.O+this.log2(r))}log2(e){return Z.M*Math.log(e)}S(e,t,s){let r=this.u;this.N(-t,r);let i=this.P;this.B(s,r,i),this.L(i),BigInt(r[0])!=BigInt(-e)&&this.L(i),t+=this.$(i),(t+=Z.U)<=0||(t+=this.k(i),BigInt(t)>=Z.m?this.exponent=Number(Z.m):(this.exponent=Number(t),this.i=(i[0]<<32n)+i[1]&0xffffffffffffffffn,this.o=(i[2]<<32n)+i[3]&0xffffffffffffffffn))}N(e,t){if(e==0)return void this.q(Z.K[0],t);let s=Z.K;e<0&&(e=-e,s=Z.W);let r=Z.G,i=32,o=!0;for(;e>0;)e>=r&&(o?(this.q(s[i],t),o=!1):this.j(t,s[i],t),e-=r),i-=1,r*=.5}q(e,t){for(let s=0;s<t.length;s++)t[s]=e[s]}j(e,t,s){this.H(e,t,this.P);let r=this.J(this.P);this.Y(this.P,s),s[0]=e[0]+t[0]+BigInt(r)}H(e,t,s){for(let r=0;r<s.length;r++)s[r]=0n;this.Z(e,this.l),this.Z(t,this.h);for(let r=5;r>=0;r--)for(let i=5;i>=0;i--){let o=this.l[r]*this.h[i];s[i+r+1]=s[i+r+1]+(o&Z.X)&0xffffffffffffffffn,s[i+r]=s[i+r]+(o>>32n)&0xffffffffffffffffn}for(let r=11;r>=1;r--)s[r-1]=s[r-1]+(s[r]>>32n)&0xffffffffffffffffn,s[r]&=Z.X}J(e){let t=0;for(;this.ee(e);)this.L(e),t-=1;return t}ee(e){if(e[0]<0x19999999n)return!0;if(e[0]>0x19999999n)return!1;for(let t=1;t<e.length;t++){if(e[t]<0x99999999n)return!0;if(e[t]>0x99999999n)return!1}return!1}B(e,t,s){for(let o=0;o<s.length;o++)s[o]=0n;let r=this.h;this.Z(t,r);let i=e.length;for(let o=i-1;o>=0;o--)for(let a=i-1;a>=0;a--){let l=e[o]*r[a];s[a+o+1]=s[a+o+1]+(l&Z.X)&0xffffffffffffffffn,s[a+o]=s[a+o]+(l>>32n)&0xffffffffffffffffn}for(let o=11;o>=1;o--)s[o-1]=s[o-1]+(s[o]>>32n)&0xffffffffffffffffn,s[o]&=Z.X}L(e){let t=e.length-1;e[0]&=Z.X,e[t]*=10n;for(let s=t-1;s>=0;s--)e[s]=10n*e[s]+(e[s+1]>>32n)&0xffffffffffffffffn,e[s+1]&=Z.X}$(e){let t=31-Z.te(e[0]);return t!=0&&this.ne(e,t),t}k(e){return this.re(e,5,100n),this.re(e,4,0x80000000n),(e[0]&Z.ie<<1n)!=0n?(this.ne(e,1),1):0}Y(e,t){t[1]=(e[0]<<32n)+e[1],t[2]=(e[2]<<32n)+e[3],t[3]=(e[4]<<32n)+e[5]}Z(e,t){t[0]=e[1]>>32n,t[1]=e[1]&Z.X,t[2]=e[2]>>32n,t[3]=e[2]&Z.X,t[4]=e[3]>>32n,t[5]=e[3]&Z.X}ne(e,t){let s=e.length-1,r=BigInt(32-Math.abs(t));if(t>0){let i=BigInt(t);for(let o=s+1-1;o>=1;o--)e[o]=e[o]>>i|e[o-1]<<r&Z.X;e[0]=e[0]>>i}else if(t<0){let i=BigInt(-t);e[0]=0xffffffffffffffffn&(e[0]<<i|e[1]>>r);for(let o=1;o<s;o++)e[o]=0xffffffffffffffffn&(e[o]<<i&Z.X|e[o+1]>>r);e[s]=e[s]<<i&Z.X}}re(e,t,s){let r=t;e[r]=e[r]+s&0xffffffffffffffffn;for(let i=r+1-1;i>=1&&(e[i]&Z.ie)!=0n;i--)e[i]&=Z.X,e[i-1]+=1n}static te(e){let t=Number(e>>32n);return t==0?32+Math.clz32(Number(BigInt.asUintN(32,e))):Math.clz32(t)}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Je,cr,Ll,Wo,Yo,si;Z.v=59,Z.V=646456993,Z.A=-646457032,Z.F=0xccccccccccccd00,Z.se=0x8000000000000000n,Z.G=2147483648,Z.X=0x00000000ffffffffn,Z.ie=0xffffffff00000000n,Z.O=Math.log(10)/Math.log(2),Z.M=1/Math.log(2),Z.U=2147483647,Z.m=0xffffffffn,Z.K=[[1n,0x1999999999999999n,0x9999999999999999n,0x999999999999999an],[1n,0x3333333333333333n,0x3333333333333333n,0x3333333333333334n],[1n,0x6666666666666666n,0x6666666666666666n,0x6666666666666667n],[2n,0x28f5c28f5c28f5c2n,0x8f5c28f5c28f5c28n,0xf5c28f5c28f5c290n],[3n,0x4189374bc6a7ef9dn,0xb22d0e5604189374n,0xbc6a7ef9db22d0e6n],[5n,0xa7c5ac471b478423n,0x0fcf80dc33721d53n,0xcddd6e04c0592104n],[10n,0x6df37f675ef6eadfn,0x5ab9a2072d44268dn,0x97df837e6748956en],[20n,0x2f394219248446ban,0xa23d2ec729af3d61n,0x0607aa0167dd94cbn],[39n,0x571cbec554b60dbbn,0xd5f64baf0506840dn,0x451db70d5904029bn],[78n,0x1da48ce468e7c702n,0x6520247d3556476dn,0x1469caf6db224cfan],[155n,0x2252f0e5b39769dcn,0x9ae2eea30ca3ade0n,0xeeaa3c08dfe84e30n],[309n,0x2e055c9a3f6ba793n,0x16583a816eb60a59n,0x22c4b0826cf1ebf7n],[617n,0x52bb45e9cf23f17fn,0x7688c07606e50364n,0xb34479aa9d449a57n],[1234n,0x1abc81c8ff5f846cn,0x8f5e3c9853e38c97n,0x45060097f3bf9296n],[2467n,0x1bec53b510daa7b4n,0x48369ed77dbb0eb1n,0x3b05587b2187b41en],[4933n,0x1e75063a5ba91326n,0x8abfb8e460016ae3n,0x28008702d29e8a3cn],[9865n,0x243c5d8bb5c5fa55n,0x40c6d248c5881915n,0x4c0fd99fd5befc22n],[19729n,0x334a5570c3f4ef3cn,0xa13c36c43f979c90n,0xda7ac473555fb7a8n],[39457n,0x66c304445dd98f3bn,0xa8c293a20e47a41bn,0x4c5b03dc12604964n],[78914n,0x293ffbf5fb028cc4n,0x89d3e5ff44238406n,0x369a339e1bfe8c9bn],[157827n,0x427792fbb68e5d20n,0x7b297cd9fc154b62n,0xf09142114aa9a20cn],[315653n,0xac92bc65ad5c08fcn,0x00beeb115a566c19n,0x4ba882d8a4622437n],[631306n,0x745581440f92e80en,0x4da822cf7f896f41n,0x509d598678164ecdn],[1262612n,0x34dd99b4c69523a5n,0x64bc2e8f0d8b1044n,0xb03b1c96da5dd349n],[2525223n,0x6d2bbea9d6d25a08n,0xa0a4606a88e96b70n,0x182063bbc2fe8520n],[5050446n,0x2e8e47d63bfdd6e3n,0x2b55fa8976eaa3e9n,0x1a6b9d3086412a73n],[10100891n,0x54aa68efa1d719dfn,0xd8505806612c5c8fn,0xad068837fee8b43an],[20201782n,0x1c00464ccb7bae77n,0x9e3877784c77982cn,0xd94af3b61717404fn],[40403563n,0x1ea099c8be2b6cd0n,0x8bfb6d539fa50466n,0x6d3bc37e69a84218n],[80807125n,0x24a457f466ce8d18n,0xf2c8f3b81bc6bb59n,0xa78c757692e02d49n],[161614249n,0x347256677aba6b53n,0x3fbf90d30611a67cn,0x1e039d87e0bdb32bn],[323228497n,0x6b727daf0fd3432an,0x71f71121f9e4200fn,0x8fcd9942d486c10cn],[646456994n,0x2d18e84484d91f78n,0x4079bfe7829dec6fn,0x21551643e365abc6n]],Z.W=[[1n,0x1999999999999999n,0x9999999999999999n,0x999999999999999an],[0n,0x8000000000000000n,0x0000000000000000n,0x0000000000000000n],[0n,0x4000000000000000n,0x0000000000000000n,0x0000000000000001n],[-1n,0xa000000000000000n,0x0000000000000000n,0x0000000000000000n],[-2n,0x6400000000000000n,0x0000000000000000n,0x0000000000000000n],[-4n,0x2710000000000000n,0x0000000000000000n,0x0000000000000001n],[-9n,0x3b9aca0000000000n,0x0000000000000000n,0x0000000000000001n],[-19n,0x8ac7230489e80000n,0x0000000000000000n,0x0000000000000000n],[-38n,0x4b3b4ca85a86c47an,0x098a224000000000n,0x0000000000000001n],[-77n,0xdd15fe86affad912n,0x49ef0eb713f39eben,0xaa987b6e6fd2a002n],[-154n,0xbeeefb584aff8603n,0xaafb550ffacfd8fan,0x5ca47e4f88d45371n],[-308n,0x8e679c2f5e44ff8fn,0x570f09eaa7ea7648n,0x5961db50c6d2b888n],[-616n,0x4f371b3399fc2ab0n,0x8170041c9feb05aan,0xc7c343447c75bcf6n],[-1233n,0xf51e928179013fd3n,0xde4bd12cde4d985cn,0x4a573ca6f94bff14n],[-2466n,0xeab388127bccaff7n,0x1667639142b9fbaen,0x775ec9995e1039fbn],[-4932n,0xd72cb2a95c7ef6ccn,0xe81bf1e825ba7515n,0xc2feb521d6cb5dcdn],[-9864n,0xb4dc1be6604502dcn,0xd491079b8eef6535n,0x578d3965d24de84dn],[-19728n,0x7fc6447bee60ea43n,0x2548da5c8b125b27n,0x5f42d1142f41d349n],[-39456n,0x3fc65180f88af8fbn,0x6a6915f383349413n,0x063c3708b6ceb291n],[-78913n,0x9ee0197c8dcd55bfn,0x2b2b9b942c38f4a2n,0x0f8ba634e9c706aen],[-157826n,0x629963a25b8b2d79n,0xd00b9d2286f70876n,0xe97004700c3644fcn],[-315652n,0x25f9cc308ceef4f3n,0x40f19543911a4546n,0xa2cd389452cfc366n],[-631305n,0x385597b0d47e76b8n,0x1b9f67e103bf2329n,0xc3119848595985f7n],[-1262611n,0x7bf795d276c12f66n,0x66a61d62a446659an,0xa1a4d73bebf093d5n],[-2525222n,0x3c07d96ab1ed7799n,0xcb7355c22cc05ac0n,0x4ffc0ab73b1f6a49n],[-5050445n,0x8cc4cd8c3edefb9an,0x6c8ff86a90a97e0cn,0x166cfddbf98b71bfn],[-10100890n,0x4d67d81cc88e1228n,0x1d7cfb06666b79b3n,0x7b916728aaa4e70dn],[-20201781n,0xea0c55494e7a552dn,0xb88cb9484bb86c61n,0x8d44893c610bb7dfn],[-40403562n,0xd5fa8c821ec0c24an,0xa80e46e764e0f8b0n,0xa7276bfa432fac7en],[-80807124n,0xb2dae307426f6791n,0xc970b82f58b12918n,0x0472592f7f39190en],[-161614248n,0x7cf51edd8a15f1c9n,0x656dab3498f8e697n,0x12daa2a80e53c807n],[-323228496n,0x3cfe609ab5883c50n,0xbec8b5d22b198871n,0xe18477703b4622b4n],[-646456993n,0x9152447b9d7cda9an,0x3b4d3f6110d77aadn,0xfa81bad1c394adb4n]];class Q{constructor(e,t,s,r){this.negative=e,this._e=t,this.i=s,this.o=r}exponent(){return this._e-Z.U}oe(){return this._e===0&&this.i===0n&&this.o===0n}ae(){return this._e===Ye(Q,Je,"f",cr)&&this.i===0n&&this.o===0n}isNaN(){return this._e===Ye(Q,Je,"f",cr)&&!(this.i===0n&&this.o===0n)}compareTo(e){if(this.isNaN())return e.isNaN()?0:1;if(e.isNaN())return-1;let t,s;if(this.negative){if(!e.negative)return-1;t=1,s=-1}else{if(e.negative)return 1;t=-1,s=1}return this._e<e._e?t:this._e>e._e?s:this.i<e.i?t:this.i>e.i?s:this.o<e.o?t:this.o>e.o?s:0}debug(){return(this.negative?"+":"-")+Ye(Q,Je,"m",Ll).call(Q,this.i)+Ye(Q,Je,"m",Ll).call(Q,this.o)+"*2^"+this.exponent()}static fromNumber(e){if(isNaN(e))return Q.NaN;if(!isFinite(e))return e<0?Q.ue:Q.ce;if(e===0)return Math.sign(1/e)>0?Q.le:Q.Ee;const t=new DataView(new ArrayBuffer(8));t.setFloat64(0,e);const s=t.getBigUint64(0);let r=BigInt.asUintN(64,s<<12n),i=2047&Number(s>>52n);if(i===0){const o=Z.te(r);r=o<63?r<<BigInt(o+1):0n,i=-o}return new Q(e<0,Ye(Q,Je,"m",si).call(Q,i-1023),r,0n)}static fromString(e){if(e==="NaN")return Q.NaN;if(e==="-Infinity")return Q.ue;if(e==="Infinity"||e==="+Infinity")return Q.ce;const t=new Array(e.length).fill(0);let s=0,r=0,i=0,o=!1;for(e[s]==="-"?(o=!0,s++):e[s]==="+"&&s++;Ye(Q,Je,"m",Wo).call(Q,e,s);)t[r++]=Ye(Q,Je,"m",Yo).call(Q,e,s++);if(e[s]==="."){const l=++s;for(;Ye(Q,Je,"m",Wo).call(Q,e,s);)t[r++]=Ye(Q,Je,"m",Yo).call(Q,e,s++);i=l-s}if(e[s]==="e"||e[s]==="E"){let l=0;s++;let u=1;e[s]==="-"?(u=-1,s++):e[s]==="+"&&s++;const h=s;for(;Ye(Q,Je,"m",Wo).call(Q,e,s);)if(l=10*l+Ye(Q,Je,"m",Yo).call(Q,e,s++),s-h>9)throw new Error("Exponent too large "+e);if(s===h)throw new Error("Invalid number "+e);i+=l*u}if(r===0||s!==e.length)throw new Error("Invalid number "+e);const a=Z.I(t.slice(0,r),i);return new Q(o,a.exponent,a.i,a.o)}}Je=Q,Ll=function(e){return e.toString(16).padStart(16,"0")},Wo=function(e,t){const s=e.codePointAt(t);return s!==void 0&&s>=48&&s<=57},Yo=function(e,t){return e.codePointAt(t)-48},si=function(e){return e+Z.U},cr={value:Number(Z.m)},Q.le=new Q(!1,0,0n,0n),Q.Ee=new Q(!0,0,0n,0n),Q.NaN=new Q(!1,Ye(Q,Je,"f",cr),1n<<63n,0n),Q.ue=new Q(!0,Ye(Q,Je,"f",cr),0n,0n),Q.ce=new Q(!1,Ye(Q,Je,"f",cr),0n,0n),new Q(!0,Ye(Q,Je,"m",si).call(Q,63),0n,0n),new Q(!1,Ye(Q,Je,"m",si).call(Q,0),0n,0n),new Q(!0,Ye(Q,Je,"m",si).call(Q,0),0n,0n);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu=-1;function Ja(n){return n==null}function Ii(n){return n===0&&1/n==-1/0}function J0(n){return typeof n=="number"&&Number.isInteger(n)&&!Ii(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}function kl(n){return typeof n=="string"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu="__type__",Fu="__vector__",Ti="value",K0="server_timestamp",ug="__min__",Lu="__max__",Hn="__regex__",ga="pattern",ma="options",Ai="__oid__",Hs="__int__",ts="__decimal128__",Ts="__request_timestamp__",Ea="seconds",_a="increment",Ka="__binary__",mr={nullValue:"NULL_VALUE"},Lo={mapValue:{}};var _e,Pt;(Pt=_e||(_e={})).he="regexValue",Pt.Te="bsonObjectIdValue",Pt.Pe="int32Value",Pt.Ie="decimal128Value",Pt.Re="bsonTimestampValue",Pt.Ae="bsonBinaryValue",Pt.Ve="minKeyValue",Pt.de="maxKeyValue",Pt.fe="maxValue",Pt.me="vectorValue",Pt.pe="serverTimestampValue",Pt.ge="regularMapValue";const ld={[Fu]:_e.me,[Lu]:_e.fe,[K0]:_e.pe},Bg={[Hn]:_e.he,[Ai]:_e.Te,[Hs]:_e.Pe,[ts]:_e.Ie,[Ts]:_e.Re,[Ka]:_e.Ae,[ug]:_e.Ve,[Lu]:_e.de},z0=new Set(Object.values(Bg)),Et={booleanValue:!0},ze={booleanValue:!1};function Le(n){if("nullValue"in n)return 0;if("booleanValue"in n)return 2;if("integerValue"in n||"doubleValue"in n)return 3;if("timestampValue"in n)return 4;if("stringValue"in n)return 7;if("bytesValue"in n)return 8;if("referenceValue"in n)return 9;if("geoPointValue"in n)return 11;if("arrayValue"in n)return 13;if(!("mapValue"in n))return X(28295,{value:n});switch(mg(n)){case _e.pe:return 6;case _e.fe:return 9007199254740991;case _e.me:return 14;case _e.he:return 12;case _e.Te:return 10;case _e.Pe:case _e.Ie:return 3;case _e.Re:return 5;case _e.Ae:return 8;case _e.Ve:return 1;case _e.de:return 16;default:return 15}}function xt(n,e,t){if(n===e)return!0;const s=Le(n);if(s!==Le(e))return!1;switch(s){case 0:case 9007199254740991:case 16:case 1:return!0;case 2:return n.booleanValue===e.booleanValue;case 6:return gr(n).isEqual(gr(e));case 4:return(function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=es(i.timestampValue),l=es(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(n,e);case 7:return n.stringValue===e.stringValue;case 8:return(function(i,o){return Cg(i,o)===0})(n,e);case 9:return n.referenceValue===e.referenceValue;case 11:return(function(i,o){return be(i.geoPointValue.latitude)===be(o.geoPointValue.latitude)&&be(i.geoPointValue.longitude)===be(o.geoPointValue.longitude)})(n,e);case 3:return(function(i,o,a){if(Mt(i)&&Mt(o))return fg(i,o)===0;if("integerValue"in i&&"integerValue"in o||ns(i)&&ns(o))return bi(i)===bi(o);let l,u;if("doubleValue"in i&&"doubleValue"in o)l=be(i.doubleValue),u=be(o.doubleValue);else{if(!a?.ye)return!1;l=be(i.integerValue??i.doubleValue),u=be(o.integerValue??o.doubleValue)}return l===u?!!a?.we||Ii(l)===Ii(u):!!(a===void 0||a.be)&&isNaN(l)&&isNaN(u)})(n,e,t);case 13:return pr(n.arrayValue.values||[],e.arrayValue.values||[],((r,i)=>xt(r,i,t)));case 14:case 15:return(function(i,o,a){const l=i.mapValue.fields||{},u=o.mapValue.fields||{};if(Fs(l)!==Fs(u))return!1;for(const h in l)if(l.hasOwnProperty(h)&&(u[h]===void 0||!xt(l[h],u[h],a)))return!1;return!0})(n,e,t);case 5:return dg(n,e)===0;case 12:return pg(n,e)===0;case 10:return gg(n,e)===0;default:return X(52216,{left:n})}}function vi(n,e){return(n.values||[]).find((t=>xt(t,e)))!==void 0}function _t(n,e){if(n===e)return 0;const t=Le(n),s=Le(e);if(t!==s)return ue(t,s);switch(t){case 0:case 1:case 16:case 9007199254740991:return 0;case 2:return ue(n.booleanValue,e.booleanValue);case 3:return Ri(n,e);case 4:return Bd(n.timestampValue,e.timestampValue);case 6:return Bd(gr(n),gr(e));case 7:return yi(n.stringValue,e.stringValue);case 8:return Cg(n,e);case 9:return(function(i,o){const a=i.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const h=ue(a[u],l[u]);if(h!==0)return h}return ue(a.length,l.length)})(n.referenceValue,e.referenceValue);case 11:return(function(i,o){const a=ue(be(i.latitude),be(o.latitude));return a!==0?a:ue(be(i.longitude),be(o.longitude))})(n.geoPointValue,e.geoPointValue);case 13:return hd(n.arrayValue,e.arrayValue);case 14:return(function(i,o){const a=i.fields||{},l=o.fields||{},u=a[Ti]?.arrayValue,h=l[Ti]?.arrayValue,d=ue(u?.values?.length||0,h?.values?.length||0);return d!==0?d:hd(u,h)})(n.mapValue,e.mapValue);case 15:return(function(i,o){if(i===Lo.mapValue&&o===Lo.mapValue)return 0;if(i===Lo.mapValue)return 1;if(o===Lo.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let d=0;d<l.length&&d<h.length;++d){const p=yi(l[d],h[d]);if(p!==0)return p;const D=_t(a[l[d]],u[h[d]]);if(D!==0)return D}return ue(l.length,h.length)})(n.mapValue,e.mapValue);case 5:return dg(n,e);case 12:return pg(n,e);case 10:return gg(n,e);default:throw X(23264,{Se:t})}}function bi(n){let e;return e=ns(n)?n.mapValue.fields[Hs].integerValue:n.integerValue||n.doubleValue,be(e)}function hg(n){return n.mapValue.fields[ts].stringValue}function Ri(n,e){if(Mt(n)||Mt(e))return fg(n,e);const t=bi(n),s=bi(e);return isNaN(t)?isNaN(s)?0:-1:isNaN(s)?1:ue(t,s)}function fg(n,e){const t=ud(n),s=ud(e);return t.oe()&&s.oe()?0:t.isNaN()?s.isNaN()?0:-1:s.isNaN()?1:t.compareTo(s)}function ud(n){return Mt(n)?Q.fromString(hg(n)):Q.fromNumber(bi(n))}function Bd(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ue(n,e);const t=es(n),s=es(e),r=ue(t.seconds,s.seconds);return r!==0?r:ue(t.nanos,s.nanos)}function hd(n,e){const t=n.values||[],s=e.values||[];for(let r=0;r<t.length&&r<s.length;++r){const i=_t(t[r],s[r]);if(i!==void 0&&i!==0)return i}return ue(t.length,s.length)}function dg(n,e){const t=n.mapValue.fields?.[Ts].mapValue?.fields?.[Ea],s=e.mapValue.fields?.[Ts].mapValue?.fields?.[Ea],r=n.mapValue.fields?.[Ts].mapValue?.fields?.[_a],i=e.mapValue.fields?.[Ts].mapValue?.fields?.[_a],o=Ri(t,s);return o!==0?o:Ri(r,i)}function fd(n){if("bytesValue"in n)return{subtype:0,bytes:Ls(n.bytesValue)};const e=n.mapValue?.fields,t=e?.[Ka],s=t?.bytesValue;if(!s)throw new Error("Received incorrect value for BsonBinaryData");const r=Ls(s).toUint8Array();if(r.length===0)throw new Error("Received empty bytesValue for BsonBinaryData");const i=r[0],o=r.slice(1);return{subtype:i,bytes:Ae.fromUint8Array(o)}}function Cg(n,e){const t=fd(n),s=fd(e);return t.subtype!==s.subtype?t.subtype<s.subtype?-1:1:t.bytes.compareTo(s.bytes)}function pg(n,e){const t=n.mapValue.fields,s=t?.[Hn]?.mapValue?.fields?.[ga]?.stringValue??"",r=t?.[Hn]?.mapValue?.fields?.[ma]?.stringValue??"",i=e.mapValue.fields,o=i?.[Hn]?.mapValue?.fields?.[ga]?.stringValue??"",a=i?.[Hn]?.mapValue?.fields?.[ma]?.stringValue??"",l=yi(s,o);return l!==0?l:ue(r,a)}function gg(n,e){return yi(n.mapValue.fields?.[Ai]?.stringValue??"",e.mapValue.fields?.[Ai]?.stringValue??"")}function Er(n){return xl(n)}function xl(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=es(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Ls(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return Y.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",r=!0;for(const i of t.values||[])r?r=!1:s+=",",s+=xl(i);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let r="{",i=!0;for(const o of s)i?i=!1:r+=",",r+=`${o}:${xl(t.fields[o])}`;return r+"}"})(n.mapValue):X(61005,{value:n})}function Da(n){switch(Le(n)){case 0:case 2:return 4;case 3:return Mt(n)?16:8;case 4:case 11:return 16;case 6:const e=Yi(n);return e?16+Da(e):16;case 7:return 2*n.stringValue.length;case 8:return"bytesValue"in n?Ls(n.bytesValue).approximateByteSize():dd(n.mapValue);case 9:return n.referenceValue.length;case 13:return(function(s){return(s.values||[]).reduce(((r,i)=>r+Da(i)),0)})(n.arrayValue);case 14:case 15:case 12:case 10:case 5:case 1:case 16:return dd(n.mapValue);default:throw X(13486,{value:n})}}function dd(n){let e=0;return Us(n.fields,((t,s)=>{e+=t.length+Da(s)})),e}function Cd(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Qt(n){return!!n&&"integerValue"in n}function Xt(n){return!!n&&"doubleValue"in n}function Mt(n){if(!n.mapValue?.fields)return!1;const e=n.mapValue.fields;return Fs(e)===1&&e[ts]&&!!e[ts].stringValue}function ns(n){if(!n.mapValue?.fields)return!1;const e=n.mapValue.fields;return Fs(e)===1&&e[Hs]?.integerValue!==void 0}function In(n){return Qt(n)||Xt(n)||!!n&&ns(n)||!!n&&Mt(n)}function _r(n){return!!n&&"arrayValue"in n}function vt(n){return!!n&&"nullValue"in n}function We(n){return!(!Xt(n)||!isNaN(Number(n.doubleValue)))||!(!Mt(n)||hg(n)!=="NaN")}function Rs(n){return!!n&&"mapValue"in n}function mg(n){if(!n.mapValue?.fields)return _e.ge;const e=n.mapValue.fields,t=e[Nu]?.stringValue;if(t&&ld[t])return ld[t];if(Fs(e)===1){const s=Object.keys(e);return Bg[s[0]]??_e.ge}return _e.ge}function Ml(n){return(n?.mapValue?.fields||{})[Nu]?.stringValue===Fu}function Vl(n){return(n?.mapValue?.fields||{})[Ti]?.arrayValue}function li(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Us(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=li(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=li(n.arrayValue.values[t]);return e}return{...n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.value=e}static empty(){return new It({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Rs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=li(t)}setAll(e){let t=bt.emptyPath(),s={},r=[];e.forEach(((o,a)=>{if(!t.isImmediateParentOf(a)){const l=this.getFieldsMap(t);this.applyChanges(l,s,r),s={},r=[],t=a.popLast()}o?s[a.lastSegment()]=li(o):r.push(a.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,s,r)}delete(e){const t=this.field(e.popLast());Rs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return xt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];Rs(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){Us(t,((r,i)=>e[r]=i));for(const r of s)delete e[r]}clone(){return new It(li(this.value))}}function Eg(n){const e=[];return Us(n.fields,((t,s)=>{const r=new bt([t]);if(Rs(s)&&!(function(o){return z0.has(mg(o))})(s)){const i=Eg(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)})),new $t(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ii(e)?"-0":e}}function Br(n){return{integerValue:""+n}}function za(n,e,t){return J0(e)?Br(e):ku(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(){this._=void 0}}function W0(n,e,t){return n instanceof ya?(function(r,i){const o={fields:{[ag]:{stringValue:og},[lg]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Ou(i)&&(i=Yi(i)),i&&(o.fields[cg]=i),{mapValue:o}})(t,e):n instanceof Si?Dg(n,e):n instanceof Oi?yg(n,e):n instanceof Pi?(function(r,i){const o=_g(r,i),a=pd(o)+pd(r.xe);return Mt(o)||Mt(r.xe)?{mapValue:{fields:{[ts]:{stringValue:a.toString()}}}}:ns(o)?Xt(r.xe)?{doubleValue:a}:Qt(r.xe)?{integerValue:a.toString()}:{mapValue:{fields:{[Hs]:Br(a)}}}:Qt(o)&&(Qt(r.xe)||ns(r.xe))?Br(a):ku(r.serializer,a)})(n,e):n instanceof wa?(function(r,i){return!In(i)||We(r.xe)?r.xe:We(i)?i:Ri(r.xe,i)<0?r.xe:i})(n,e):n instanceof Ia?(function(r,i){return!In(i)||We(r.xe)?r.xe:We(i)?i:Ri(r.xe,i)>0?r.xe:i})(n,e):void 0}function Y0(n,e,t){return n instanceof Si?Dg(n,e):n instanceof Oi?yg(n,e):t}function _g(n,e){return n instanceof Pi?In(e)?e:{integerValue:0}:null}class ya extends Wa{}class Si extends Wa{constructor(e){super(),this.elements=e}}function Dg(n,e){const t=wg(e);for(const s of n.elements)t.some((r=>xt(r,s)))||t.push(s);return{arrayValue:{values:t}}}class Oi extends Wa{constructor(e){super(),this.elements=e}}function yg(n,e){let t=wg(e);for(const s of n.elements)t=t.filter((r=>!xt(r,s)));return{arrayValue:{values:t}}}class xu extends Wa{constructor(e,t){super(),this.serializer=e,this.xe=t}}class Pi extends xu{}class wa extends xu{}class Ia extends xu{}function pd(n){return Qt(n)?be(n.integerValue):Xt(n)?be(n.doubleValue):ns(n)?be(n.mapValue.fields[Hs].integerValue):Mt(n)?parseFloat(n.mapValue.fields[ts].stringValue):0}function wg(n){return _r(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Q0(n,e){return n.field.isEqual(e.field)&&(function(s,r){return s instanceof Si&&r instanceof Si||s instanceof Oi&&r instanceof Oi?pr(s.elements,r.elements,xt):s instanceof Pi&&r instanceof Pi||s instanceof wa&&r instanceof wa||s instanceof Ia&&r instanceof Ia?xt(s.xe,r.xe):s instanceof ya&&r instanceof ya})(n.transform,e.transform)}class X0{constructor(e,t){this.version=e,this.transformResults=t}}class En{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new En}static exists(e){return new En(void 0,e)}static updateTime(e){return new En(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Qo(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ya{}function Ig(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ag(n.key,En.none()):new Qi(n.key,n.data,En.none());{const t=n.data,s=It.empty();let r=new Ne(bt.comparator);for(let i of e.fields)if(!r.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new $s(n.key,s,new $t(r.toArray()),En.none())}}function Z0(n,e,t){n instanceof Qi?(function(r,i,o){const a=r.value.clone(),l=md(r.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()})(n,e,t):n instanceof $s?(function(r,i,o){if(!Qo(r.precondition,i))return void i.convertToUnknownDocument(o.version);const a=md(r.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Tg(r)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(n,e,t):(function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function ui(n,e,t,s){return n instanceof Qi?(function(i,o,a,l){if(!Qo(i.precondition,o))return a;const u=i.value.clone(),h=Ed(i.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(n,e,t,s):n instanceof $s?(function(i,o,a,l){if(!Qo(i.precondition,o))return a;const u=Ed(i.fieldTransforms,l,o),h=o.data;return h.setAll(Tg(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((d=>d.field)))})(n,e,t,s):(function(i,o,a){return Qo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a})(n,e,t)}function eA(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),i=_g(s.transform,r||null);i!=null&&(t===null&&(t=It.empty()),t.set(s.field,i))}return t||null}function gd(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&pr(s,r,((i,o)=>Q0(i,o)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Qi extends Ya{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class $s extends Ya{constructor(e,t,s,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Tg(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function md(n,e,t){const s=new Map;W(n.length===t.length,32656,{ve:t.length,De:n.length});for(let r=0;r<t.length;r++){const i=n[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,Y0(o,a,t[r]))}return s}function Ed(n,e,t){const s=new Map;for(const r of n){const i=r.transform,o=t.data.field(r.field);s.set(r.field,W0(i,o,e))}return s}class Ag extends Ya{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tA extends Ya{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e,t){this.position=e,this.inclusive=t}}function _d(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const i=e[r],o=n.position[r];if(i.field.isKeyField()?s=Y.comparator(Y.fromName(o.referenceValue),t.key):s=_t(o,t.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Dd(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!xt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{}class Pe extends vg{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new sA(e,t,s):t==="array-contains"?new oA(e,s):t==="in"?new aA(e,s):t==="not-in"?new cA(e,s):t==="array-contains-any"?new lA(e,s):new Pe(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new rA(e,s):new iA(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(_t(t,this.value)):t!==null&&Le(this.value)===Le(t)&&this.matchesComparison(_t(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class qt extends vg{constructor(e,t){super(),this.filters=e,this.op=t,this.Ce=null}static create(e,t){return new qt(e,t)}matches(e){return bg(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Ce!==null||(this.Ce=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Ce}getFilters(){return Object.assign([],this.filters)}}function bg(n){return n.op==="and"}function Rg(n){return nA(n)&&bg(n)}function nA(n){for(const e of n.filters)if(e instanceof qt)return!1;return!0}function Gl(n){if(n instanceof Pe)return n.field.canonicalString()+n.op.toString()+Er(n.value);if(Rg(n))return n.filters.map((e=>Gl(e))).join(",");{const e=n.filters.map((t=>Gl(t))).join(",");return`${n.op}(${e})`}}function Sg(n,e){return n instanceof Pe?(function(s,r){return r instanceof Pe&&s.op===r.op&&s.field.isEqual(r.field)&&xt(s.value,r.value)})(n,e):n instanceof qt?(function(s,r){return r instanceof qt&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce(((i,o,a)=>i&&Sg(o,r.filters[a])),!0):!1})(n,e):void X(19439)}function Og(n){return n instanceof Pe?(function(t){return`${t.field.canonicalString()} ${t.op} ${Er(t.value)}`})(n):n instanceof qt?(function(t){return t.op.toString()+" {"+t.getFilters().map(Og).join(" ,")+"}"})(n):"Filter"}class sA extends Pe{constructor(e,t,s){super(e,t,s),this.key=Y.fromName(s.referenceValue)}matches(e){const t=Y.comparator(e.key,this.key);return this.matchesComparison(t)}}class rA extends Pe{constructor(e,t){super(e,"in",t),this.keys=Pg("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class iA extends Pe{constructor(e,t){super(e,"not-in",t),this.keys=Pg("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Pg(n,e){return(e.arrayValue?.values||[]).map((t=>Y.fromName(t.referenceValue)))}class oA extends Pe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return _r(t)&&vi(t.arrayValue,this.value)}}class aA extends Pe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&vi(this.value.arrayValue,t)}}class cA extends Pe{constructor(e,t){super(e,"not-in",t)}matches(e){if(vi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!vi(this.value.arrayValue,t)}}class lA extends Pe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!_r(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>vi(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,t="asc"){this.field=e,this.dir=t}}function uA(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{static fromTimestamp(e){return new oe(e)}static min(){return new oe(new me(0,0))}static max(){return new oe(new me(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,t,s,r,i,o,a){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new rt(e,0,oe.min(),oe.min(),oe.min(),It.empty(),0)}static newFoundDocument(e,t,s,r){return new rt(e,1,t,oe.min(),s,r,0)}static newNoDocument(e,t){return new rt(e,2,t,oe.min(),oe.min(),It.empty(),0)}static newUnknownDocument(e,t){return new rt(e,3,t,oe.min(),oe.min(),It.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(oe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=oe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof rt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi=-1;function BA(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=oe.fromTimestamp(s===1e9?new me(t+1,0):new me(t,s));return new ss(r,Y.empty(),e)}function hA(n){return new ss(n.readTime,n.key,Fi)}class ss{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new ss(oe.min(),Y.empty(),Fi)}static max(){return new ss(oe.max(),Y.empty(),Fi)}}function fA(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Y.comparator(n.documentKey,e.documentKey),t!==0?t:ue(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e,t=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.Fe=null}}function yd(n,e=null,t=[],s=[],r=null,i=null,o=null){return new dA(n,e,t,s,r,i,o)}function Ng(n){const e=ae(n);if(e.Fe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Gl(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(i){return i.field.canonicalString()+i.dir})(s))).join(","),Ja(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>Er(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>Er(s))).join(",")),e.Fe=t}return e.Fe}function Fg(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!uA(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Sg(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Dd(n.startAt,e.startAt)&&Dd(n.endAt,e.endAt)}function ys(n){return!!n.isCorePipeline}function Lg(n){return!!n.path&&Y.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e,t=null,s=[],r=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.Oe=null,this.Me=null,this.Ne=null,this.startAt,this.endAt}}function CA(n,e,t,s,r,i,o,a){return new vr(n,e,t,s,r,i,o,a)}function kg(n){return new vr(n)}function wd(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function pA(n){return Y.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function xg(n){return n.collectionGroup!==null}function Bi(n){const e=ae(n);if(e.Oe===null){e.Oe=[];const t=new Set;for(const i of e.explicitOrderBy)e.Oe.push(i),t.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ne(bt.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((u=>{u.isInequality()&&(a=a.add(u.field))}))})),a})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Oe.push(new Ni(i,s))})),t.has(bt.keyField().canonicalString())||e.Oe.push(new Ni(bt.keyField(),s))}return e.Oe}function tn(n){const e=ae(n);return e.Me||(e.Me=gA(e,Bi(n))),e.Me}function gA(n,e){if(n.limitType==="F")return yd(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((r=>{const i=r.dir==="desc"?"asc":"desc";return new Ni(r.field,i)}));const t=n.endAt?new Ta(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Ta(n.startAt.position,n.startAt.inclusive):null;return yd(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function Ul(n,e){const t=n.filters.concat([e]);return new vr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function mA(n,e){const t=n.explicitOrderBy.concat([e]);return new vr(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function Aa(n,e,t){return new vr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function EA(n,e){return Fg(tn(n),tn(e))&&n.limitType===e.limitType}function hi(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((r=>Og(r))).join(", ")}]`),Ja(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((r=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(r))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((r=>Er(r))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((r=>Er(r))).join(",")),`Target(${s})`})(tn(n))}; limitType=${n.limitType})`}function Qa(n,e){return e.isFoundDocument()&&(function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):Y.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)})(n,e)&&(function(s,r){for(const i of Bi(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0})(n,e)&&(function(s,r){return!(s.startAt&&!(function(o,a,l){const u=_d(o,a,l);return o.inclusive?u<=0:u<0})(s.startAt,Bi(s),r)||s.endAt&&!(function(o,a,l){const u=_d(o,a,l);return o.inclusive?u>=0:u>0})(s.endAt,Bi(s),r))})(n,e)}function Mu(n){return(e,t)=>{let s=!1;for(const r of Bi(n)){const i=_A(r,e,t);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function _A(n,e,t){const s=n.field.isKeyField()?Y.comparator(e.key,t.key):(function(i,o,a){const l=o.data.field(i),u=a.data.field(i);return l!==null&&u!==null?_t(l,u):X(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return X(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe,de;function yA(n){switch(n){case x.OK:return X(64938);case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0;default:return X(15467,{code:n})}}function Mg(n){if(n===void 0)return wn("GRPC error has no .code"),x.UNKNOWN;switch(n){case Oe.OK:return x.OK;case Oe.CANCELLED:return x.CANCELLED;case Oe.UNKNOWN:return x.UNKNOWN;case Oe.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case Oe.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case Oe.INTERNAL:return x.INTERNAL;case Oe.UNAVAILABLE:return x.UNAVAILABLE;case Oe.UNAUTHENTICATED:return x.UNAUTHENTICATED;case Oe.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case Oe.NOT_FOUND:return x.NOT_FOUND;case Oe.ALREADY_EXISTS:return x.ALREADY_EXISTS;case Oe.PERMISSION_DENIED:return x.PERMISSION_DENIED;case Oe.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case Oe.ABORTED:return x.ABORTED;case Oe.OUT_OF_RANGE:return x.OUT_OF_RANGE;case Oe.UNIMPLEMENTED:return x.UNIMPLEMENTED;case Oe.DATA_LOSS:return x.DATA_LOSS;default:return X(39323,{code:n})}}(de=Oe||(Oe={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Us(this.inner,((t,s)=>{for(const[r,i]of s)e(r,i)}))}isEmpty(){return sg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wA=new Ie(Y.comparator);function gt(){return wA}const Vg=new Ie(Y.comparator);function nr(...n){let e=Vg;for(const t of n)e=e.insert(t.key,t);return e}function Gg(n){let e=Vg;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function Gn(){return fi()}function Ug(){return fi()}function fi(){return new js((n=>n.toString()),((n,e)=>n.isEqual(e)))}const IA=new Ie(Y.comparator),TA=new Ne(Y.comparator);function Be(...n){let e=TA;for(const t of n)e=e.add(t);return e}const AA=new Ne(ue);function vA(){return AA}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bA(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA=new qn([4294967295,4294967295],0);function Id(n){const e=bA().encode(n),t=new Gp;return t.update(e),new Uint8Array(t.digest())}function Td(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new qn([t,s],0),new qn([r,i],0)]}class Vu{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new ri(`Invalid padding: ${t}`);if(s<0)throw new ri(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new ri(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new ri(`Invalid padding when bitmap length is 0: ${t}`);this.Be=8*e.length-t,this.Le=qn.fromNumber(this.Be)}$e(e,t,s){let r=e.add(t.multiply(qn.fromNumber(s)));return r.compare(RA)===1&&(r=new qn([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Le).toNumber()}Ue(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Be===0)return!1;const t=Id(e),[s,r]=Td(t);for(let i=0;i<this.hashCount;i++){const o=this.$e(s,r,i);if(!this.Ue(o))return!1}return!0}static create(e,t,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Vu(i,r,t);return s.forEach((a=>o.insert(a))),o}insert(e){if(this.Be===0)return;const t=Id(e),[s,r]=Td(t);for(let i=0;i<this.hashCount;i++){const o=this.$e(s,r,i);this.ke(o)}}ke(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class ri extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,t,s,r,i,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.augmentedDocumentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const r=new Map;return r.set(e,Zi.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Xi(oe.min(),r,new Ie(ue),gt(),gt(),Be())}}class Zi{constructor(e,t,s,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Zi(s,t,Be(),Be(),Be())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,t,s,r){this.Qe=e,this.removedTargetIds=t,this.key=s,this.qe=r}}class Hg{constructor(e,t){this.targetId=e,this.Ke=t}}class $g{constructor(e,t,s=Ae.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class Ad{constructor(e){this.targetId=e,this.We=0,this.Ge=vd(),this.je=Ae.EMPTY_BYTE_STRING,this.ze=!1,this.He=!0}get current(){return this.ze}get resumeToken(){return this.je}get Je(){return this.We!==0}get Ye(){return this.He}Ze(e){e.approximateByteSize()>0&&(this.He=!0,this.je=e)}Xe(){let e=Be(),t=Be(),s=Be();return this.Ge.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:X(38017,{changeType:i})}})),new Zi(this.je,this.ze,e,t,s)}et(){this.He=!1,this.Ge=vd()}tt(e,t){this.He=!0,this.Ge=this.Ge.insert(e,t)}nt(e){this.He=!0,this.Ge=this.Ge.remove(e)}rt(){this.We+=1}it(){this.We-=1,W(this.We>=0,3241,{We:this.We,targetId:this.targetId})}st(){this.He=!0,this.ze=!0}}const Xr="WatchChangeAggregator";class SA{constructor(e){this._t=e,this.ot=new Map,this.ut=gt(),this.ct=ko(),this.lt=gt(),this.Et=ko(),this.ht=new Ie(ue)}Tt(e){for(const t of e.Qe)e.qe&&e.qe.isFoundDocument()?this.Pt(t,e.qe):this.It(t,e.key,e.qe);for(const t of e.removedTargetIds)this.It(t,e.key,e.qe)}Rt(e){this.forEachTarget(e,(t=>{const s=this.ot.get(t);if(s)switch(e.state){case 0:this.At(t)&&s.Ze(e.resumeToken);break;case 1:s.it(),s.Je||s.et(),s.Ze(e.resumeToken);break;case 2:s.it(),s.Je||this.removeTarget(t);break;case 3:this.At(t)&&(s.st(),s.Ze(e.resumeToken));break;case 4:this.At(t)&&(this.Vt(t),s.Ze(e.resumeToken));break;default:X(56790,{state:e.state})}else J(Xr,`handleTargetChange received targetChange for untracked target ID (${t}) with state (${e.state})`)}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ot.forEach(((s,r)=>{this.At(r)&&t(r)}))}dt(e){return ys(e)?e.getPipelineSourceType()==="documents"&&e.getPipelineDocuments()?.length===1:Lg(e)}ft(e){const t=e.targetId,s=e.Ke.count,r=this.gt(t);if(r){const i=r.target;if(this.dt(i))if(s===0){const o=new Y(ys(i)?ge.fromString(i.getPipelineDocuments()[0]):i.path);this.It(t,o,rt.newNoDocument(o,oe.min()))}else W(s===1,20013,"Single document existence filter with count: "+s);else{const o=this.yt(t);if(o!==s){const a=this.wt(e),l=a?this.bt(a,e,o):1;if(l!==0){this.Vt(t);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.ht=this.ht.insert(t,u)}}}}}wt(e){const t=e.Ke.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=t;let o,a;try{o=Ls(s).toUint8Array()}catch(l){if(l instanceof ig)return jt("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Vu(o,r,i)}catch(l){return jt(l instanceof ri?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Be===0?null:a}bt(e,t,s){return t.Ke.count===s-this.vt(e,t.targetId)?0:2}vt(e,t){const s=this._t.getRemoteKeysForTarget(t);let r=0;return s.forEach((i=>{const o=this._t.xt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.It(t,i,null),r++)})),r}Dt(e){const t=new Map;this.ot.forEach(((i,o)=>{const a=this.gt(o);if(a){if(i.current&&this.dt(a.target)){const l=ys(a.target)?ge.fromString(a.target.getPipelineDocuments()[0]):a.target.path,u=new Y(l);this.Ct(u).has(o)||this.Ft(o,u)||this.It(o,u,rt.newNoDocument(u,e))}i.Ye&&(t.set(o,i.Xe()),i.et())}}));let s=Be();this.Et.forEach(((i,o)=>{let a=!0;o.forEachWhile((l=>{const u=this.gt(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)})),a&&(s=s.add(i))})),this.ut.forEach(((i,o)=>o.setReadTime(e))),this.lt.forEach(((i,o)=>o.setReadTime(e)));const r=new Xi(e,t,this.ht,this.ut,this.lt,s);return this.ut=gt(),this.ct=ko(),this.lt=gt(),this.Et=ko(),this.ht=new Ie(ue),r}Pt(e,t){const s=this.ot.get(e);if(!s||!this.At(e))return void J(Xr,`addDocumentToTarget received document for unknown inactive target (${e})`);const r=this.Ft(e,t.key)?2:0;s.tt(t.key,r),ys(this.gt(e).target)&&this.gt(e).target.getPipelineFlavor()!=="exact"?this.lt=this.lt.insert(t.key,t):this.ut=this.ut.insert(t.key,t),this.ct=this.ct.insert(t.key,this.Ct(t.key).add(e)),this.Et=this.Et.insert(t.key,this.Ot(t.key).add(e))}It(e,t,s){const r=this.ot.get(e);r&&this.At(e)?(this.Ft(e,t)?r.tt(t,1):r.nt(t),this.Et=this.Et.insert(t,this.Ot(t).delete(e)),this.Et=this.Et.insert(t,this.Ot(t).add(e)),s&&(ys(this.gt(e).target)&&this.gt(e).target.getPipelineFlavor()!=="exact"?this.lt=this.lt.insert(t,s):this.ut=this.ut.insert(t,s))):J(Xr,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.ot.delete(e)}yt(e){const t=this.ot.get(e);if(!t)return 0;const s=t.Xe();return this._t.getRemoteKeysForTarget(e).size+s.addedDocuments.size-s.removedDocuments.size}rt(e){let t=this.ot.get(e);t||(J(Xr,`recordPendingTargetRequest set up tracking for target ID ${e}`),t=new Ad(e),this.ot.set(e,t)),t.rt()}Ot(e){let t=this.Et.get(e);return t||(t=new Ne(ue),this.Et=this.Et.insert(e,t)),t}Ct(e){let t=this.ct.get(e);return t||(t=new Ne(ue),this.ct=this.ct.insert(e,t)),t}At(e){const t=this.gt(e)!==null;return t||J(Xr,"Detected inactive target",e),t}gt(e){const t=this.ot.get(e);return t===void 0||t.Je?null:this._t.Mt(e)}Vt(e){this.ot.set(e,new Ad(e)),this._t.getRemoteKeysForTarget(e).forEach((t=>{this.It(e,t,null)}))}Ft(e,t){return this._t.getRemoteKeysForTarget(e).has(t)}}function ko(){return new Ie(Y.comparator)}function vd(){return new Ie(Y.comparator)}const OA={asc:"ASCENDING",desc:"DESCENDING"},PA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},NA={and:"AND",or:"OR"};class FA{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Hl(n,e){return n.useProto3Json||Ja(e)?e:{value:e}}function di(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Gu(n){const e=es(n);return new me(e.seconds,e.nanos)}function $l(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Zo(n,e){return di(n,e.toTimestamp())}function nn(n){return W(!!n,49232),oe.fromTimestamp(Gu(n))}function Uu(n,e){return jl(n,e).canonicalString()}function jl(n,e){const t=(function(r){return new ge(["projects",r.projectId,"databases",r.database])})(n).child("documents");return e===void 0?t:t.child(e)}function jg(n){const e=ge.fromString(n);return W(Wg(e),10190,{key:e.toString()}),e}function va(n,e){return Uu(n.databaseId,e.path)}function sl(n,e){const t=jg(e);if(t.get(1)!==n.databaseId.projectId)throw new $(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new $(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Y(Jg(t))}function qg(n,e){return Uu(n.databaseId,e)}function LA(n){const e=jg(n);return e.length===4?ge.emptyPath():Jg(e)}function ql(n){return new ge(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Jg(n){return W(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function bd(n,e,t){return{name:va(n,e),fields:t.value.mapValue.fields}}function kA(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:X(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=(function(u,h){return u.useProto3Json?(W(h===void 0||typeof h=="string",58123),Ae.fromBase64String(h||"")):(W(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),Ae.fromUint8Array(h||new Uint8Array))})(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&(function(u){const h=u.code===void 0?x.UNKNOWN:Mg(u.code);return new $(h,u.message||"")})(o);t=new $g(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=sl(n,s.document.name),i=nn(s.document.updateTime),o=s.document.createTime?nn(s.document.createTime):oe.min(),a=new It({mapValue:{fields:s.document.fields}}),l=rt.newFoundDocument(r,i,o,a),u=s.targetIds||[],h=s.removedTargetIds||[];t=new Xo(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=sl(n,s.document),i=s.readTime?nn(s.readTime):oe.min(),o=rt.newNoDocument(r,i),a=s.removedTargetIds||[];t=new Xo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=sl(n,s.document),i=s.removedTargetIds||[];t=new Xo([],i,r,null)}else{if(!("filter"in e))return X(11601,{Nt:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new DA(r,i),a=s.targetId;t=new Hg(a,o)}}return t}function xA(n,e){let t;if(e instanceof Qi)t={update:bd(n,e.key,e.value)};else if(e instanceof Ag)t={delete:va(n,e.key)};else if(e instanceof $s)t={update:bd(n,e.key,e.data),updateMask:KA(e.fieldMask)};else{if(!(e instanceof tA))return X(16599,{Bt:e.type});t={verify:va(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(i,o){const a=o.transform;if(a instanceof ya)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Si)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Oi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Pi)return{fieldPath:o.field.canonicalString(),increment:a.xe};if(a instanceof wa)return{fieldPath:o.field.canonicalString(),minimum:a.xe};if(a instanceof Ia)return{fieldPath:o.field.canonicalString(),maximum:a.xe};throw X(20930,{transform:o.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(r,i){return i.updateTime!==void 0?{updateTime:Zo(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:X(27497)})(n,e.precondition)),t}function MA(n,e){return n&&n.length>0?(W(e!==void 0,14353),n.map((t=>(function(r,i){let o=r.updateTime?nn(r.updateTime):nn(i);return o.isEqual(oe.min())&&(o=nn(i)),new X0(o,r.transformResults||[])})(t,e)))):[]}function VA(n,e){return{documents:[qg(n,e.path)]}}function GA(n,e){const t={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=qg(n,r);const i=(function(u){if(u.length!==0)return zg(qt.create(u,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((h=>(function(p){return{field:sr(p.field),direction:jA(p.dir)}})(h)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=Hl(n,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{Lt:t,parent:r}}function UA(n){let e=LA(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){W(s===1,65062);const h=t.from[0];h.allDescendants?r=h.collectionId:e=e.child(h.collectionId)}let i=[];t.where&&(i=(function(d){const p=Kg(d);return p instanceof qt&&Rg(p)?p.getFilters():[p]})(t.where));let o=[];t.orderBy&&(o=(function(d){return d.map((p=>(function(y){return new Ni(rr(y.field),(function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(y.direction))})(p)))})(t.orderBy));let a=null;t.limit&&(a=(function(d){let p;return p=typeof d=="object"?d.value:d,Ja(p)?null:p})(t.limit));let l=null;t.startAt&&(l=(function(d){const p=!!d.before,D=d.values||[];return new Ta(D,p)})(t.startAt));let u=null;return t.endAt&&(u=(function(d){const p=!d.before,D=d.values||[];return new Ta(D,p)})(t.endAt)),CA(e,r,o,i,a,"F",l,u)}function HA(n,e){const t=(function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X(28987,{purpose:r})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function $A(n,e){return{structuredPipeline:{pipeline:{stages:e.stages.map((t=>t._toProto(n)))}}}}function Kg(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=rr(t.unaryFilter.field);return Pe.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=rr(t.unaryFilter.field);return Pe.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=rr(t.unaryFilter.field);return Pe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=rr(t.unaryFilter.field);return Pe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return X(61313);default:return X(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Pe.create(rr(t.fieldFilter.field),(function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return X(58110);default:return X(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return qt.create(t.compositeFilter.filters.map((s=>Kg(s))),(function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return X(1026)}})(t.compositeFilter.op))})(n):X(30097,{filter:n})}function jA(n){return OA[n]}function qA(n){return PA[n]}function JA(n){return NA[n]}function sr(n){return{fieldPath:n.canonicalString()}}function rr(n){return bt.fromServerFormat(n.fieldPath)}function zg(n){return n instanceof Pe?(function(t){if(t.op==="=="){if(We(t.value))return{unaryFilter:{field:sr(t.field),op:"IS_NAN"}};if(vt(t.value))return{unaryFilter:{field:sr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(We(t.value))return{unaryFilter:{field:sr(t.field),op:"IS_NOT_NAN"}};if(vt(t.value))return{unaryFilter:{field:sr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:sr(t.field),op:qA(t.op),value:t.value}}})(n):n instanceof qt?(function(t){const s=t.getFilters().map((r=>zg(r)));return s.length===1?s[0]:{compositeFilter:{op:JA(t.op),filters:s}}})(n):X(54877,{filter:n})}function KA(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Wg(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Yg(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}function Li(n,e){const t={fields:{}};return e.forEach(((s,r)=>{if(typeof r!="string")throw new Error(`Cannot encode map with non-string key: ${r}`);t.fields[r]=s._toProto(n)})),{mapValue:t}}function ba(n){return{stringValue:n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xa(n){return new FA(n,!0)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e){this.value=e}isEqual(e){return this.value===e.value}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e,t){if(this.seconds=e,this.increment=t,!Number.isInteger(e)||e<0||e>4294967295)throw new Error("BsonTimestamp 'seconds' must be in the range of a 32-bit unsigned integer (0-4294967295).");if(!Number.isInteger(t)||t<0||t>4294967295)throw new Error("BsonTimestamp 'increment' must be in the range of a 32-bit unsigned integer (0-4294967295).")}isEqual(e){return this.seconds===e.seconds&&this.increment===e.increment}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,t=0){if(this.subtype=t,!Number.isInteger(t)||t<0||t>255)throw new $(x.INVALID_ARGUMENT,"The subtype for Bytes must be a value in the inclusive [0, 255] range.");this._byteString=e}static fromBase64String(e,t=0){try{return new Tt(Ae.fromBase64String(e),t)}catch(s){throw new $(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+s)}}static fromUint8Array(e,t=0){return new Tt(Ae.fromUint8Array(e),t)}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}get data(){return this.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+", subtype: "+this.subtype+")"}isEqual(e){return this.subtype===e.subtype&&this._byteString.isEqual(e._byteString)}toJSON(){const e={type:Tt._jsonSchemaVersion,bytes:this.toBase64()};return this.subtype!==0&&(e.subtype=this.subtype),e}static fromJSON(e){if(Wi(e,Tt._jsonSchema)){const t=e.subtype??0;return Tt.fromBase64String(e.bytes,t)}}}Tt._jsonSchemaVersion="firestore/bytes/1.0",Tt._jsonSchema={type:Se("string",Tt._jsonSchemaVersion),bytes:Se("string"),subtype:{...Se("number"),optional:!0}};/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e){this.stringValue=e,this.value=Q.fromString(e)}isEqual(e){return!(!this.value.oe()||!e.value.oe())||this.value.compareTo(e.value)===0}toJSON(){return{Ut:{stringValue:this.stringValue}}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new $(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new bt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function zA(){return new qu(Yt)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new $(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new $(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:sn._jsonSchemaVersion}}static fromJSON(e){if(Wi(e,sn._jsonSchema))return new sn(e.latitude,e.longitude)}}sn._jsonSchemaVersion="firestore/geoPoint/1.0",sn._jsonSchema={type:Se("string",sn._jsonSchemaVersion),latitude:Se("number"),longitude:Se("number")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e){this.value=e}isEqual(e){return this.value===e.value}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(){this.type="MaxKey"}static instance(){return Cn.MAX_KEY_VALUE_INSTANCE||(Cn.MAX_KEY_VALUE_INSTANCE=new Cn),Cn.MAX_KEY_VALUE_INSTANCE}}Cn.MAX_KEY_VALUE_INSTANCE=null;/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(){this.type="MinKey"}static instance(){return pn.MIN_KEY_VALUE_INSTANCE||(pn.MIN_KEY_VALUE_INSTANCE=new pn),pn.MIN_KEY_VALUE_INSTANCE}}pn.MIN_KEY_VALUE_INSTANCE=null;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}st.UNAUTHENTICATED=new st(null),st.GOOGLE_CREDENTIALS=new st("google-credentials-uid"),st.FIRST_PARTY=new st("first-party-uid"),st.MOCK_USER=new st("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class WA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(st.UNAUTHENTICATED)))}shutdown(){}}class YA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class QA{constructor(e){this.kt=e,this.currentUser=st.UNAUTHENTICATED,this.Qt=0,this.forceRefresh=!1,this.auth=null}start(e,t){W(this.qt===void 0,42304);let s=this.Qt;const r=l=>this.Qt!==s?(s=this.Qt,t(l)):Promise.resolve();let i=new Jn;this.qt=()=>{this.Qt++,this.currentUser=this.Kt(),i.resolve(),i=new Jn,e.enqueueRetryable((()=>r(this.currentUser)))};const o=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await r(this.currentUser)}))},a=l=>{J("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.qt&&(this.auth.addAuthTokenListener(this.qt),o())};this.kt.onInit((l=>a(l))),setTimeout((()=>{if(!this.auth){const l=this.kt.getImmediate({optional:!0});l?a(l):(J("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Jn)}}),0),o()}getToken(){const e=this.Qt,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.Qt!==e?(J("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(W(typeof s.accessToken=="string",31837,{Wt:s}),new Xg(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.qt&&this.auth.removeAuthTokenListener(this.qt),this.qt=void 0}Kt(){const e=this.auth&&this.auth.getUid();return W(e===null||typeof e=="string",2055,{Gt:e}),new st(e)}}class XA{constructor(e,t,s){this.jt=e,this.zt=t,this.Ht=s,this.type="FirstParty",this.user=st.FIRST_PARTY,this.Jt=new Map}Yt(){return this.Ht?this.Ht():null}get headers(){this.Jt.set("X-Goog-AuthUser",this.jt);const e=this.Yt();return e&&this.Jt.set("Authorization",e),this.zt&&this.Jt.set("X-Goog-Iam-Authorization-Token",this.zt),this.Jt}}class ZA{constructor(e,t,s){this.jt=e,this.zt=t,this.Ht=s}getToken(){return Promise.resolve(new XA(this.jt,this.zt,this.Ht))}start(e,t){e.enqueueRetryable((()=>t(st.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Rd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ev{constructor(e,t){this.Zt=t,this.forceRefresh=!1,this.appCheck=null,this.Xt=null,this.en=null,Ft(e)&&e.settings.appCheckToken&&(this.en=e.settings.appCheckToken)}start(e,t){W(this.qt===void 0,3512);const s=i=>{i.error!=null&&J("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.Xt;return this.Xt=i.token,J("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.qt=i=>{e.enqueueRetryable((()=>s(i)))};const r=i=>{J("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.qt&&this.appCheck.addTokenListener(this.qt)};this.Zt.onInit((i=>r(i))),setTimeout((()=>{if(!this.appCheck){const i=this.Zt.getImmediate({optional:!0});i?r(i):J("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.en)return Promise.resolve(new Rd(this.en));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(W(typeof t.token=="string",44558,{tokenResult:t}),this.Xt=t.token,new Rd(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.qt&&this.appCheck.removeTokenListener(this.qt),this.qt=void 0}}function Zg(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{tn(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd="ConnectivityMonitor";class Od{constructor(){this.nn=()=>this.rn(),this.sn=()=>this._n(),this.an=[],this.un()}tn(e){this.an.push(e)}shutdown(){window.removeEventListener("online",this.nn),window.removeEventListener("offline",this.sn)}un(){window.addEventListener("online",this.nn),window.addEventListener("offline",this.sn)}rn(){J(Sd,"Network connectivity changed: AVAILABLE");for(const e of this.an)e(0)}_n(){J(Sd,"Network connectivity changed: UNAVAILABLE");for(const e of this.an)e(1)}static cn(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xo=null;function Jl(){return xo===null?xo=(function(){return 268435456+Math.round(2147483648*Math.random())})():xo++,"0x"+xo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rl="RestConnection",nv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class sv{get En(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.hn=t+"://"+e.host,this.Tn=`projects/${s}/databases/${r}`,this.Pn=this.databaseId.database===pa?`project_id=${s}`:`project_id=${s}&database_id=${r}`}In(e,t,s,r,i){const o=Jl(),a=this.Rn(e,t.toUriEncodedString());J(rl,`Sending RPC '${e}' ${o}:`,a,s);const l={"google-cloud-resource-prefix":this.Tn,"x-goog-request-params":this.Pn};this.An(l,r,i);const{host:u}=new URL(a),h=Hi(u);return this.Vn(e,a,l,s,h).then((d=>(J(rl,`Received RPC '${e}' ${o}: `,d),d)),(d=>{throw jt(rl,`RPC '${e}' ${o} failed with error: `,d,"url: ",a,"request:",s),d}))}dn(e,t,s,r,i,o){return this.In(e,t,s,r,i)}An(e,t,s){if(e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ar})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((r,i)=>e[i]=r)),s&&s.headers.forEach(((r,i)=>e[i]=r)),this.databaseInfo._customHeaders)for(const r of Object.keys(this.databaseInfo._customHeaders))e[r]=this.databaseInfo._customHeaders[r]}Rn(e,t){const s=nv[e];let r=`${this.hn}/v1/${t}:${s}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(e){this.fn=e.fn,this.mn=e.mn}pn(e){this.gn=e}yn(e){this.wn=e}bn(e){this.Sn=e}onMessage(e){this.xn=e}close(){this.mn()}send(e){this.fn(e)}vn(){this.gn()}Dn(){this.wn()}Cn(e){this.Sn(e)}Fn(e){this.xn(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt="WebChannelConnection",Zr=(n,e,t)=>{n.listen(e,(s=>{try{t(s)}catch(r){setTimeout((()=>{throw r}),0)}}))};class hr extends sv{constructor(e){super(e),this.On=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static Mn(){if(!hr.Nn){const e=jp();Zr(e,$p.STAT_EVENT,(t=>{t.stat===Sl.PROXY?J(tt,"STAT_EVENT: detected buffering proxy"):t.stat===Sl.NOPROXY&&J(tt,"STAT_EVENT: detected no buffering proxy")})),hr.Nn=!0}}Vn(e,t,s,r,i){const o=Jl();return new Promise(((a,l)=>{const u=new Up;u.setWithCredentials(!0),u.listenOnce(Hp.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case Ko.NO_ERROR:const d=u.getResponseJson();J(tt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(d)),a(d);break;case Ko.TIMEOUT:J(tt,`RPC '${e}' ${o} timed out`),l(new $(x.DEADLINE_EXCEEDED,"Request time out"));break;case Ko.HTTP_ERROR:const p=u.getStatus();if(J(tt,`RPC '${e}' ${o} failed with status:`,p,"response text:",u.getResponseText()),p>0){let D=u.getResponseJson();Array.isArray(D)&&(D=D[0]);const y=D?.error;if(y&&y.status&&y.message){const R=(function(G){const K=G.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(K)>=0?K:x.UNKNOWN})(y.status);l(new $(R,y.message))}else l(new $(x.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new $(x.UNAVAILABLE,"Connection failed."));break;default:X(9055,{Bn:e,streamId:o,Ln:u.getLastErrorCode(),$n:u.getLastError()})}}finally{J(tt,`RPC '${e}' ${o} completed.`)}}));const h=JSON.stringify(r);J(tt,`RPC '${e}' ${o} sending request:`,r),u.send(t,"POST",h,s,15)}))}Un(e,t,s){const r=Jl(),i=[this.hn,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.useFetchStreams=!0),this.An(a.initMessageHeaders,t,s),a.encodeInitMessageHeaders=!0;const u=i.join("");J(tt,`Creating RPC '${e}' stream ${r}: ${u}`,a);const h=o.createWebChannel(u,a);this.kn(h);let d=!1,p=!1;const D=new rv({fn:y=>{p?J(tt,`Not sending because RPC '${e}' stream ${r} is closed:`,y):(d||(J(tt,`Opening RPC '${e}' stream ${r} transport.`),h.open(),d=!0),J(tt,`RPC '${e}' stream ${r} sending:`,y),h.send(y))},mn:()=>h.close()});return Zr(h,ni.EventType.OPEN,(()=>{p||(J(tt,`RPC '${e}' stream ${r} transport opened.`),D.vn())})),Zr(h,ni.EventType.CLOSE,(()=>{p||(p=!0,J(tt,`RPC '${e}' stream ${r} transport closed`),D.Cn(),this.Qn(h))})),Zr(h,ni.EventType.ERROR,(y=>{p||(p=!0,jt(tt,`RPC '${e}' stream ${r} transport errored. Name:`,y.name,"Message:",y.message),D.Cn(new $(x.UNAVAILABLE,"The operation could not be completed")))})),Zr(h,ni.EventType.MESSAGE,(y=>{if(!p){const R=y.data[0];W(!!R,16349);const F=R,G=F?.error||F[0]?.error;if(G){J(tt,`RPC '${e}' stream ${r} received error:`,G);const K=G.status;let se=(function(Te){const v=Oe[Te];if(v!==void 0)return Mg(v)})(K),pe=G.message;K==="NOT_FOUND"&&pe.includes("database")&&pe.includes("does not exist")&&pe.includes(this.databaseId.database)&&jt(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),se===void 0&&(se=x.INTERNAL,pe="Unknown error status: "+K+" with message "+G.message),p=!0,D.Cn(new $(se,pe)),h.close()}else J(tt,`RPC '${e}' stream ${r} received:`,R),D.Fn(R)}})),hr.Mn(),setTimeout((()=>{D.Dn()}),0),D}terminate(){this.On.forEach((e=>e.close())),this.On=[]}kn(e){this.On.push(e)}Qn(e){this.On=this.On.filter((t=>t===e))}An(e,t,s){super.An(e,t,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return qp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iv(n){return new hr(n)}hr.Nn=!1;class em{constructor(e,t,s=1e3,r=1.5,i=6e4){this.qn=e,this.timerId=t,this.Kn=s,this.Wn=r,this.Gn=i,this.jn=0,this.zn=null,this.Hn=Date.now(),this.reset()}reset(){this.jn=0}Jn(){this.jn=this.Gn}Yn(e){this.cancel();const t=Math.floor(this.jn+this.Zn()),s=Math.max(0,Date.now()-this.Hn),r=Math.max(0,t-s);r>0&&J("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.jn} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.zn=this.qn.enqueueAfterDelay(this.timerId,r,(()=>(this.Hn=Date.now(),e()))),this.jn*=this.Wn,this.jn<this.Kn&&(this.jn=this.Kn),this.jn>this.Gn&&(this.jn=this.Gn)}Xn(){this.zn!==null&&(this.zn.skipDelay(),this.zn=null)}cancel(){this.zn!==null&&(this.zn.cancel(),this.zn=null)}Zn(){return(Math.random()-.5)*this.jn}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd="PersistentStream";class tm{constructor(e,t,s,r,i,o,a,l){this.qn=e,this.er=s,this.tr=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.nr=0,this.rr=null,this.ir=null,this.stream=null,this.sr=0,this._r=new em(e,t)}ar(){return this.state===1||this.state===5||this.ur()}ur(){return this.state===2||this.state===3}start(){this.sr=0,this.state!==4?this.auth():this.cr()}async stop(){this.ar()&&await this.close(0)}lr(){this.state=0,this._r.reset()}Er(){this.ur()&&this.rr===null&&(this.rr=this.qn.enqueueAfterDelay(this.er,6e4,(()=>this.hr())))}Tr(e){this.Pr(),this.stream.send(e)}async hr(){if(this.ur())return this.close(0)}Pr(){this.rr&&(this.rr.cancel(),this.rr=null)}Ir(){this.ir&&(this.ir.cancel(),this.ir=null)}async close(e,t){this.Pr(),this.Ir(),this._r.cancel(),this.nr++,e!==4?this._r.reset():t&&t.code===x.RESOURCE_EXHAUSTED?(wn(t.toString()),wn("Using maximum backoff delay to prevent overloading the backend."),this._r.Jn()):t&&t.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Rr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.bn(t)}Rr(){}auth(){this.state=1;const e=this.Ar(this.nr),t=this.nr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,r])=>{this.nr===t&&this.Vr(s,r)}),(s=>{e((()=>{const r=new $(x.UNKNOWN,"Fetching auth token failed: "+s.message);return this.dr(r)}))}))}Vr(e,t){const s=this.Ar(this.nr);this.stream=this.mr(e,t),this.stream.pn((()=>{s((()=>this.listener.pn()))})),this.stream.yn((()=>{s((()=>(this.state=2,this.ir=this.qn.enqueueAfterDelay(this.tr,1e4,(()=>(this.ur()&&(this.state=3),Promise.resolve()))),this.listener.yn())))})),this.stream.bn((r=>{s((()=>this.dr(r)))})),this.stream.onMessage((r=>{s((()=>++this.sr==1?this.pr(r):this.onNext(r)))}))}cr(){this.state=5,this._r.Yn((async()=>{this.state=0,this.start()}))}dr(e){return J(Pd,`close with error: ${e}`),this.stream=null,this.close(4,e)}Ar(e){return t=>{this.qn.enqueueAndForget((()=>this.nr===e?t():(J(Pd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class ov extends tm{constructor(e,t,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,o),this.serializer=i}mr(e,t){return this.connection.Un("Listen",e,t)}pr(e){return this.onNext(e)}onNext(e){this._r.reset();const t=kA(this.serializer,e),s=(function(i){if(!("targetChange"in i))return oe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?oe.min():o.readTime?nn(o.readTime):oe.min()})(e);return this.listener.gr(t,s)}yr(e){const t={};t.database=ql(this.serializer),t.addTarget=(function(i,o){let a;const l=o.target;if(a=ys(l)?{pipelineQuery:$A(i,l)}:Lg(l)?{documents:VA(i,l)}:{query:GA(i,l).Lt},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=$l(i,o.resumeToken);const u=Hl(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(oe.min())>0){a.readTime=di(i,o.snapshotVersion.toTimestamp());const u=Hl(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a})(this.serializer,e);const s=HA(this.serializer,e);s&&(t.labels=s),this.Tr(t)}wr(e){const t={};t.database=ql(this.serializer),t.removeTarget=e,this.Tr(t)}}class av extends tm{constructor(e,t,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,o),this.serializer=i}get br(){return this.sr>0}start(){this.lastStreamToken=void 0,super.start()}Rr(){this.br&&this.Sr([])}mr(e,t){return this.connection.Un("Write",e,t)}pr(e){return W(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,W(!e.writeResults||e.writeResults.length===0,55816),this.listener.vr()}onNext(e){W(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this._r.reset();const t=MA(e.writeResults,e.commitTime),s=nn(e.commitTime);return this.listener.Dr(s,t)}Cr(){const e={};e.database=ql(this.serializer),this.Tr(e)}Sr(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>xA(this.serializer,s)))};this.Tr(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{}class lv extends cv{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=r,this.Fr=!1}Or(){if(this.Fr)throw new $(x.FAILED_PRECONDITION,"The client has already been terminated.")}In(e,t,s,r){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.In(e,jl(t,s),r,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new $(x.UNKNOWN,i.toString())}))}dn(e,t,s,r,i){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.dn(e,jl(t,s),r,o,a,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(x.UNKNOWN,o.toString())}))}terminate(){this.Fr=!0,this.connection.terminate()}}function uv(n,e,t,s){return new lv(n,e,t,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv="ComponentProvider",Nd=new Map;function hv(n,e,t,s,r){return new j0(n,e,t,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,Zg(r.experimentalLongPollingOptions),r.useFetchStreams,r.isUsingEmulator,s,r._customHeaders,r.grpcFlowControlWindow)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},nm=41943040;class Ct{static withCacheSize(e){return new Ct(e,Ct.DEFAULT_COLLECTION_PERCENTILE,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}Ct.DEFAULT_COLLECTION_PERCENTILE=10,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ct.DEFAULT=new Ct(nm,Ct.DEFAULT_COLLECTION_PERCENTILE,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ct.DISABLED=new Ct(-1,0,0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.Mr(s),this.Nr=s=>t.writeSequenceNumber(s))}Mr(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.Nr&&this.Nr(e),e}}Za.Br=-1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class dv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function br(n){if(n.code!==x.FAILED_PRECONDITION||n.message!==fv)throw n;J("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&X(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new M(((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(s,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof M?t:M.resolve(t)}catch(t){return M.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):M.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):M.reject(t)}static resolve(e){return new M(((t,s)=>{t(e)}))}static reject(e){return new M(((t,s)=>{s(e)}))}static waitFor(e){return new M(((t,s)=>{let r=0,i=0,o=!1;e.forEach((a=>{++r,a.next((()=>{++i,o&&i===r&&t()}),(l=>s(l)))})),o=!0,i===r&&t()}))}static or(e){let t=M.resolve(!1);for(const s of e)t=t.next((r=>r?M.resolve(r):s()));return t}static forEach(e,t){const s=[];return e.forEach(((r,i)=>{s.push(t.call(this,r,i))})),this.waitFor(s)}static mapArray(e,t){return new M(((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const u=l;t(e[u]).next((h=>{o[u]=h,++a,a===i&&s(o)}),(h=>r(h)))}}))}static doWhile(e,t){return new M(((s,r)=>{const i=()=>{e()===!0?t().next((()=>{i()}),r):s()};i()}))}}function Cv(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Rr(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld="LruGarbageCollector",pv=1048576;function kd([n,e],[t,s]){const r=ue(n,t);return r===0?ue(e,s):r}class gv{constructor(e){this.ai=e,this.buffer=new Ne(kd),this.ui=0}ci(){return++this.ui}li(e){const t=[e,this.ci()];if(this.buffer.size<this.ai)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();kd(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class mv{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Ei=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.hi(6e4)}stop(){this.Ei&&(this.Ei.cancel(),this.Ei=null)}get started(){return this.Ei!==null}hi(e){J(Ld,`Garbage collection scheduled in ${e}ms`),this.Ei=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ei=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Rr(t)?J(Ld,"Ignoring IndexedDB error during garbage collection: ",t):await br(t)}await this.hi(3e5)}))}}class Ev{constructor(e,t){this.Ti=e,this.params=t}calculateTargetCount(e,t){return this.Ti.Pi(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return M.resolve(Za.Br);const s=new gv(t);return this.Ti.forEachTarget(e,(r=>s.li(r.sequenceNumber))).next((()=>this.Ti.Ii(e,(r=>s.li(r))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Ti.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Ti.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(J("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(Fd)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(J("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Fd):this.Ri(e,t)))}getCacheSize(e){return this.Ti.getCacheSize(e)}Ri(e,t){let s,r,i,o,a,l,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((d=>(d>this.params.maximumSequenceNumbersToCollect?(J("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),r=this.params.maximumSequenceNumbersToCollect):r=d,o=Date.now(),this.nthSequenceNumber(e,r)))).next((d=>(s=d,a=Date.now(),this.removeTargets(e,s,t)))).next((d=>(i=d,l=Date.now(),this.removeOrphanedDocuments(e,s)))).next((d=>(u=Date.now(),er()<=he.DEBUG&&J("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${r} in `+(a-o)+`ms
	Removed ${i} targets in `+(l-a)+`ms
	Removed ${d} documents in `+(u-l)+`ms
Total Duration: ${u-h}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:d}))))}}function _v(n,e){return new Ev(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm="firestore.googleapis.com",xd=!0;class Md{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new $(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=sm,this.ssl=xd}else this.host=e.host,this.ssl=e.ssl??xd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e._customHeaders&&(this._customHeaders={...e._customHeaders}),e.cacheSizeBytes===void 0)this.cacheSizeBytes=nm;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<pv)throw new $(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}if(U0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Zg(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new $(x.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new $(x.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new $(x.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams,e.grpcFlowControlWindow!==void 0){if(typeof e.grpcFlowControlWindow!="number"||e.grpcFlowControlWindow<=0||e.grpcFlowControlWindow>2147483647||!Number.isInteger(e.grpcFlowControlWindow))throw new $(x.INVALID_ARGUMENT,"grpcFlowControlWindow must be a positive integer and cannot exceed 2147483647");this.grpcFlowControlWindow=e.grpcFlowControlWindow}}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,r){return s.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams&&this.grpcFlowControlWindow===e.grpcFlowControlWindow&&(function(s,r){if(s===r)return!0;if(!s||!r)return!1;const i=Object.keys(s),o=Object.keys(r);if(i.length!==o.length)return!1;for(const a of i)if(s[a]!==r[a])return!1;return!0})(this._customHeaders,e._customHeaders)}}let ec=class{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Md({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Md(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new WA;switch(s.type){case"firstParty":return new ZA(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new $(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=Nd.get(t);s&&(J(Bv,"Removing Datastore"),Nd.delete(t),s.terminate())})(this),Promise.resolve()}};function Dv(n,e,t,s={}){n=Ca(n,ec);const r=Hi(e),i=n._getSettings(),o={...i,emulatorOptions:n._getEmulatorOptions()},a=`${e}:${t}`;r&&vC(`https://${a}`),i.host!==sm&&i.host!==a&&jt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:a,ssl:r,emulatorOptions:s};if(!Qn(l,o)&&(n._setSettings(l),s.mockUserToken)){let u,h;if(typeof s.mockUserToken=="string")u=s.mockUserToken,h=st.MOCK_USER;else{u=U_(s.mockUserToken,n._app?.options.projectId);const d=s.mockUserToken.sub||s.mockUserToken.user_id;if(!d)throw new $(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new st(d)}n._authCredentials=new YA(new Xg(u,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new us(this.firestore,e,this._query)}}class Ge{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Kn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ge(this.firestore,e,this._key)}toJSON(){return{type:Ge._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Wi(t,Ge._jsonSchema))return new Ge(e,s||null,new Y(ge.fromString(t.referencePath)))}}Ge._jsonSchemaVersion="firestore/documentReference/1.0",Ge._jsonSchema={type:Se("string",Ge._jsonSchemaVersion),referencePath:Se("string")};class Kn extends us{constructor(e,t,s){super(e,t,kg(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ge(this.firestore,null,new Y(e))}withConverter(e){return new Kn(this.firestore,e,this._path)}}function rm(n,e,...t){if(n=Fe(n),rg("collection","path",e),n instanceof ec){const s=ge.fromString(e,...t);return od(s),new Kn(n,null,s)}{if(!(n instanceof Ge||n instanceof Kn))throw new $(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(ge.fromString(e,...t));return od(s),new Kn(n.firestore,null,s)}}function yv(n,e,...t){if(n=Fe(n),arguments.length===1&&(e=Su.newId()),rg("doc","path",e),n instanceof ec){const s=ge.fromString(e,...t);return id(s),new Ge(n,null,new Y(s))}{if(!(n instanceof Ge||n instanceof Kn))throw new $(x.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(ge.fromString(e,...t));return id(s),new Ge(n.firestore,n instanceof Kn?n.converter:null,new Y(s))}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e,t){this.pattern=e,this.options=t}isEqual(e){return this.pattern===e.pattern&&this.options===e.options}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:mt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Wi(e,mt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new mt(e.vectorValues);throw new $(x.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}mt._jsonSchemaVersion="firestore/vectorValue/1.0",mt._jsonSchema={type:Se("string",mt._jsonSchemaVersion),vectorValues:Se("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wv=/^__.*__$/;class Iv{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new $s(e,this.data,this.fieldMask,t,this.fieldTransforms):new Qi(e,this.data,t,this.fieldTransforms)}}function im(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X(40011,{dataSource:n})}}class zu{constructor(e,t,s,r,i,o){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new zu({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){const t=this.path?.child(e),s=this.contextWith({path:t,arrayElement:!1});return s.validatePathSegment(e),s}childContextForFieldPath(e){const t=this.path?.child(e),s=this.contextWith({path:t,arrayElement:!1});return s.validatePath(),s}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Ra(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(im(this.dataSource)&&wv.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class Tv{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Xa(e)}createContext(e,t,s,r=!1){return new zu({dataSource:e,methodName:t,targetDoc:s,path:bt.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function om(n){const e=n._freezeSettings(),t=Xa(n._databaseId);return new Tv(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Av(n,e,t,s,r,i={}){const o=n.createContext(i.merge||i.mergeFields?2:0,e,t,r);um("Data must be an object, but it was:",o,s);const a=am(s,o);let l,u;if(i.merge)l=new $t(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const d of i.mergeFields){const p=eo(e,d,t);if(!o.contains(p))throw new $(x.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);Sv(h,p)||h.push(p)}l=new $t(h),u=o.fieldTransforms.filter((d=>l.covers(d.field)))}else l=null,u=o.fieldTransforms;return new Iv(new It(a),l,u)}function vv(n,e,t,s=!1){return Dr(t,n.createContext(s?4:3,e))}function Dr(n,e,t){if(lm(n=Fe(n)))return um("Unsupported field value:",e,n),am(n,e);if(n instanceof Qg)return(function(r,i){if(!im(i.dataSource))throw i.createError(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(r,i){const o=[];let a=0;for(const l of r){let u=Dr(l,i.childContextForArray(a));u==null&&(u={nullValue:"NULL_VALUE"}),o.push(u),a++}return{arrayValue:{values:o}}})(n,e)}return(function(r,i,o){if((r=Fe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return za(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=me.fromDate(r);return{timestampValue:di(i.serializer,a)}}if(r instanceof me){const a=new me(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:di(i.serializer,a)}}if(cm(r)){const a=me.fromInstant(r),l=new me(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:di(i.serializer,l)}}if(r instanceof sn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Tt)return r.subtype===0?{bytesValue:$l(i.serializer,r._byteString)}:(function(l,u){const h=u.toUint8Array(),d=new Uint8Array(h.length+1);return d[0]=u.subtype,d.set(h,1),{mapValue:{fields:{[Ka]:{bytesValue:$l(l,Ae.fromUint8Array(d))}}}}})(i.serializer,r);if(r instanceof Ge){const a=i.databaseId,l=r.firestore._databaseId;if(!l.isEqual(a))throw i.createError(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Uu(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof mt)return(function(l,u){const h=l instanceof mt?l.toArray():l;return{mapValue:{fields:{[Nu]:{stringValue:Fu},[Ti]:{arrayValue:{values:h.map((p=>{if(typeof p!="number")throw u.createError("VectorValues must only contain numeric values.");return ku(u.serializer,p)}))}}}}}})(r,i);if(r instanceof Ku)return(function(l){return{mapValue:{fields:{[Hn]:{mapValue:{fields:{[ga]:{stringValue:l.pattern},[ma]:{stringValue:l.options}}}}}}}})(r);if(r instanceof Hu)return(function(l){return{mapValue:{fields:{[Ai]:{stringValue:l.value}}}}})(r);if(r instanceof Ju)return(function(l){return{mapValue:{fields:{[Hs]:Br(l.value)}}}})(r);if(r instanceof ju)return(function(l){return{mapValue:{fields:{[ts]:{stringValue:l.stringValue}}}}})(r);if(r instanceof $u)return(function(l){return{mapValue:{fields:{[Ts]:{mapValue:{fields:{[Ea]:Br(l.seconds),[_a]:Br(l.increment)}}}}}}})(r);if(r instanceof pn)return(function(){return{mapValue:{fields:{[ug]:{nullValue:"NULL_VALUE"}}}}})();if(r instanceof Cn)return(function(){return{mapValue:{fields:{[Lu]:{nullValue:"NULL_VALUE"}}}}})();if(Yg(r))return r._toProto(i.serializer);throw i.createError(`Unsupported field value: ${qa(r)}`)})(n,e)}function am(n,e){const t={};return sg(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Us(n,((s,r)=>{const i=Dr(r,e.childContextForField(s));i!=null&&(t[s]=i)})),{mapValue:{fields:t}}}function cm(n){if(typeof n!="object"||n===null)return!1;if(typeof Temporal<"u"&&typeof Temporal.Instant=="function"&&n instanceof Temporal.Instant)return!0;const e=n;return e[Symbol.toStringTag]==="Temporal.Instant"&&typeof e.t=="bigint"}function lm(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof me||n instanceof sn||n instanceof Tt||n instanceof Ge||n instanceof Qg||n instanceof mt||n instanceof pn||n instanceof Cn||n instanceof Ju||n instanceof ju||n instanceof Ku||n instanceof Hu||n instanceof $u||cm(n)||Yg(n))}function um(n,e,t){if(!lm(t)||!zi(t)){const s=qa(t);throw s==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+s)}}function eo(n,e,t){if((e=Fe(e))instanceof qu)return e._internalPath;if(typeof e=="string")return Rv(n,e);throw Ra("Field path arguments must be of type string or ",n,!1,void 0,t)}const bv=new RegExp("[~\\*/\\[\\]]");function Rv(n,e,t){if(e.search(bv)>=0)throw Ra(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new qu(...e.split("."))._internalPath}catch{throw Ra(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ra(n,e,t,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${s}`),o&&(l+=` in document ${r}`),l+=")"),new $(x.INVALID_ARGUMENT,a+n+l)}function Sv(n,e){return n.some((t=>t.isEqual(e)))}function Bm(n){return typeof n._readUserData=="function"}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.optionDefinitions=e}_getKnownOptions(e,t){const s=It.empty();for(const r in this.optionDefinitions)if(this.optionDefinitions.hasOwnProperty(r)){const i=this.optionDefinitions[r];if(r in e){const o=e[r];let a;i.nestedOptions&&zi(o)?a={mapValue:{fields:new ot(i.nestedOptions).getOptionsProto(t,o)}}:o&&(a=Dr(o,t)??void 0),a&&s.set(bt.fromServerFormat(i.serverName),a)}}return s}getOptionsProto(e,t,s){const r=this._getKnownOptions(t,e);if(s){const i=new Map(G0(s,((o,a)=>[bt.fromServerFormat(a),o!==void 0?Dr(o,e):null])));r.setAll(i)}return r.value.mapValue.fields??{}}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ov(n){return typeof n=="object"&&n!==null&&!!("nullValue"in n&&(n.nullValue===null||n.nullValue==="NULL_VALUE")||"booleanValue"in n&&(n.booleanValue===null||typeof n.booleanValue=="boolean")||"integerValue"in n&&(n.integerValue===null||typeof n.integerValue=="number"||typeof n.integerValue=="string")||"doubleValue"in n&&(n.doubleValue===null||typeof n.doubleValue=="number")||"timestampValue"in n&&(n.timestampValue===null||(function(t){return typeof t=="object"&&t!==null&&"seconds"in t&&(t.seconds===null||typeof t.seconds=="number"||typeof t.seconds=="string")&&"nanos"in t&&(t.nanos===null||typeof t.nanos=="number")})(n.timestampValue))||"stringValue"in n&&(n.stringValue===null||typeof n.stringValue=="string")||"bytesValue"in n&&(n.bytesValue===null||n.bytesValue instanceof Uint8Array)||"referenceValue"in n&&(n.referenceValue===null||typeof n.referenceValue=="string")||"geoPointValue"in n&&(n.geoPointValue===null||(function(t){return typeof t=="object"&&t!==null&&"latitude"in t&&(t.latitude===null||typeof t.latitude=="number")&&"longitude"in t&&(t.longitude===null||typeof t.longitude=="number")})(n.geoPointValue))||"arrayValue"in n&&(n.arrayValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("values"in t)||t.values!==null&&!Array.isArray(t.values))})(n.arrayValue))||"mapValue"in n&&(n.mapValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("fields"in t)||t.fields!==null&&!zi(t.fields))})(n.mapValue))||"fieldReferenceValue"in n&&(n.fieldReferenceValue===null||typeof n.fieldReferenceValue=="string")||"functionValue"in n&&(n.functionValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("name"in t)||t.name!==null&&typeof t.name!="string"||!("args"in t)||t.args!==null&&!Array.isArray(t.args))})(n.functionValue))||"pipelineValue"in n&&(n.pipelineValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("stages"in t)||t.stages!==null&&!Array.isArray(t.stages))})(n.pipelineValue)))}function Pv(n){return new mt(n)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(n){let e;return n instanceof Bs?n:(e=zi(n)?xv(n):n instanceof Array?Mv(n):hm(n,void 0),e)}function il(n){if(n instanceof Bs)return n;if(n instanceof mt)return ki(n);if(Array.isArray(n))return ki(Pv(n));throw new Error("Unsupported value: "+typeof n)}function tc(n){return kl(n)?ea(n):U(n)}class Bs{constructor(){this._protoValueType="ProtoValue"}add(e){return new L("add",[this,U(e)],"add")}asBoolean(){if(this instanceof rs)return this;if(this instanceof Or)return new dm(this);if(this instanceof Sr)return new kv(this);if(this instanceof L)return new fm(this);throw new $("invalid-argument",`Conversion of type ${typeof this} to BooleanExpression not supported.`)}subtract(e){return new L("subtract",[this,U(e)],"subtract")}multiply(e){return new L("multiply",[this,U(e)],"multiply")}divide(e){return new L("divide",[this,U(e)],"divide")}mod(e){return new L("mod",[this,U(e)],"mod")}equal(e){return new L("equal",[this,U(e)],"equal").asBoolean()}notEqual(e){return new L("not_equal",[this,U(e)],"notEqual").asBoolean()}lessThan(e){return new L("less_than",[this,U(e)],"lessThan").asBoolean()}lessThanOrEqual(e){return new L("less_than_or_equal",[this,U(e)],"lessThanOrEqual").asBoolean()}greaterThan(e){return new L("greater_than",[this,U(e)],"greaterThan").asBoolean()}greaterThanOrEqual(e){return new L("greater_than_or_equal",[this,U(e)],"greaterThanOrEqual").asBoolean()}arrayConcat(e,...t){const s=[e,...t].map((r=>U(r)));return new L("array_concat",[this,...s],"arrayConcat")}arrayContains(e){return new L("array_contains",[this,U(e)],"arrayContains").asBoolean()}arrayContainsAll(e){const t=Array.isArray(e)?new ii(e.map(U),"arrayContainsAll"):e;return new L("array_contains_all",[this,t],"arrayContainsAll").asBoolean()}arrayContainsAny(e){const t=Array.isArray(e)?new ii(e.map(U),"arrayContainsAny"):e;return new L("array_contains_any",[this,t],"arrayContainsAny").asBoolean()}arrayReverse(){return new L("array_reverse",[this])}arrayLength(){return new L("array_length",[this],"arrayLength")}equalAny(e){const t=Array.isArray(e)?new ii(e.map(U),"equalAny"):e;return new L("equal_any",[this,t],"equalAny").asBoolean()}notEqualAny(e){const t=Array.isArray(e)?new ii(e.map(U),"notEqualAny"):e;return new L("not_equal_any",[this,t],"notEqualAny").asBoolean()}exists(){return new L("exists",[this],"exists").asBoolean()}charLength(){return new L("char_length",[this],"charLength")}like(e){return new L("like",[this,U(e)],"like").asBoolean()}regexContains(e){return new L("regex_contains",[this,U(e)],"regexContains").asBoolean()}regexFind(e){return new L("regex_find",[this,U(e)],"regexFind")}regexFindAll(e){return new L("regex_find_all",[this,U(e)],"regexFindAll")}regexMatch(e){return new L("regex_match",[this,U(e)],"regexMatch").asBoolean()}stringContains(e){return new L("string_contains",[this,U(e)],"stringContains").asBoolean()}startsWith(e){return new L("starts_with",[this,U(e)],"startsWith").asBoolean()}endsWith(e){return new L("ends_with",[this,U(e)],"endsWith").asBoolean()}toLower(){return new L("to_lower",[this],"toLower")}toUpper(){return new L("to_upper",[this],"toUpper")}trim(e){const t=[this];return e&&t.push(U(e)),new L("trim",t,"trim")}ltrim(e){const t=[this];return e&&t.push(U(e)),new L("ltrim",t,"ltrim")}rtrim(e){const t=[this];return e&&t.push(U(e)),new L("rtrim",t,"rtrim")}type(){return new L("type",[this])}isType(e){return new L("is_type",[this,ki(e)],"isType").asBoolean()}stringConcat(e,...t){const s=[e,...t].map(U);return new L("string_concat",[this,...s],"stringConcat")}stringIndexOf(e){return new L("string_index_of",[this,U(e)],"stringIndexOf")}stringRepeat(e){return new L("string_repeat",[this,U(e)],"stringRepeat")}stringReplaceAll(e,t){return new L("string_replace_all",[this,U(e),U(t)],"stringReplaceAll")}stringReplaceOne(e,t){return new L("string_replace_one",[this,U(e),U(t)],"stringReplaceOne")}concat(e,...t){const s=[e,...t].map(U);return new L("concat",[this,...s],"concat")}reverse(){return new L("reverse",[this],"reverse")}arrayFilter(e,t){return new L("array_filter",[this,U(e),t],"arrayFilter")}arrayTransform(e,t){return new L("array_transform",[this,U(e),t],"arrayTransform")}arrayTransformWithIndex(e,t,s){return new L("array_transform",[this,U(e),U(t),s],"arrayTransformWithIndex")}arraySlice(e,t){const s=[this,U(e)];return t!==void 0&&s.push(U(t)),new L("array_slice",s,"arraySlice")}arrayFirst(){return new L("array_first",[this],"arrayFirst")}arrayFirstN(e){return new L("array_first_n",[this,U(e)],"arrayFirstN")}arrayLast(){return new L("array_last",[this],"arrayLast")}arrayLastN(e){return new L("array_last_n",[this,U(e)],"arrayLastN")}arrayMaximum(){return new L("maximum",[this],"arrayMaximum")}arrayMaximumN(e){return new L("maximum_n",[this,U(e)],"arrayMaximumN")}arrayMinimum(){return new L("minimum",[this],"arrayMinimum")}arrayMinimumN(e){return new L("minimum_n",[this,U(e)],"arrayMinimumN")}arrayIndexOf(e){return new L("array_index_of",[this,U(e),U("first")],"arrayIndexOf")}arrayLastIndexOf(e){return new L("array_index_of",[this,U(e),U("last")],"arrayLastIndexOf")}arrayIndexOfAll(e){return new L("array_index_of_all",[this,U(e)],"arrayIndexOfAll")}byteLength(){return new L("byte_length",[this],"byteLength")}ceil(){return new L("ceil",[this])}floor(){return new L("floor",[this])}abs(){return new L("abs",[this])}exp(){return new L("exp",[this])}mapGet(e){return new L("map_get",[this,ki(e)],"mapGet")}mapSet(e,t,...s){const r=[this,U(e),U(t),...s.map(U)];return new L("map_set",r,"mapSet")}mapKeys(){return new L("map_keys",[this],"mapKeys")}mapValues(){return new L("map_values",[this],"mapValues")}mapEntries(){return new L("map_entries",[this],"mapEntries")}getField(e){return new L("get_field",[this,U(e)],"get_field")}count(){return wt._create("count",[this],"count")}sum(){return wt._create("sum",[this],"sum")}average(){return wt._create("average",[this],"average")}minimum(){return wt._create("minimum",[this],"minimum")}maximum(){return wt._create("maximum",[this],"maximum")}first(){return wt._create("first",[this],"first")}last(){return wt._create("last",[this],"last")}arrayAgg(){return wt._create("array_agg",[this],"arrayAgg")}arrayAggDistinct(){return wt._create("array_agg_distinct",[this],"arrayAggDistinct")}countDistinct(){return wt._create("count_distinct",[this],"countDistinct")}logicalMaximum(e,...t){const s=[e,...t];return new L("maximum",[this,...s.map(U)],"logicalMaximum")}logicalMinimum(e,...t){const s=[e,...t];return new L("minimum",[this,...s.map(U)],"minimum")}vectorLength(){return new L("vector_length",[this],"vectorLength")}cosineDistance(e){return new L("cosine_distance",[this,il(e)],"cosineDistance")}dotProduct(e){return new L("dot_product",[this,il(e)],"dotProduct")}euclideanDistance(e){return new L("euclidean_distance",[this,il(e)],"euclideanDistance")}unixMicrosToTimestamp(){return new L("unix_micros_to_timestamp",[this],"unixMicrosToTimestamp")}timestampToUnixMicros(){return new L("timestamp_to_unix_micros",[this],"timestampToUnixMicros")}unixMillisToTimestamp(){return new L("unix_millis_to_timestamp",[this],"unixMillisToTimestamp")}timestampToUnixMillis(){return new L("timestamp_to_unix_millis",[this],"timestampToUnixMillis")}unixSecondsToTimestamp(){return new L("unix_seconds_to_timestamp",[this],"unixSecondsToTimestamp")}timestampToUnixSeconds(){return new L("timestamp_to_unix_seconds",[this],"timestampToUnixSeconds")}timestampAdd(e,t){return new L("timestamp_add",[this,U(e),U(t)],"timestampAdd")}timestampSubtract(e,t){return new L("timestamp_subtract",[this,U(e),U(t)],"timestampSubtract")}timestampDiff(e,t){return new L("timestamp_diff",[this,tc(e),U(t)],"timestampDiff")}timestampExtract(e,t){const s=[this,U(e)];return t&&s.push(U(t)),new L("timestamp_extract",s,"timestampExtract")}documentId(){return new L("document_id",[this],"documentId")}parent(){return new L("parent",[this],"parent")}substring(e,t){const s=U(e);return new L("substring",t===void 0?[this,s]:[this,s,U(t)],"substring")}arrayGet(e){return new L("array_get",[this,U(e)],"arrayGet")}isError(){return new L("is_error",[this],"isError").asBoolean()}ifError(e){const t=new L("if_error",[this,U(e)],"ifError");return e instanceof rs?t.asBoolean():t}isAbsent(){return new L("is_absent",[this],"isAbsent").asBoolean()}mapRemove(e){return new L("map_remove",[this,U(e)],"mapRemove")}mapMerge(e,...t){const s=U(e),r=t.map(U);return new L("map_merge",[this,s,...r],"mapMerge")}pow(e){return new L("pow",[this,U(e)])}trunc(e){return e===void 0?new L("trunc",[this]):new L("trunc",[this,U(e)],"trunc")}round(e){return e===void 0?new L("round",[this]):new L("round",[this,U(e)],"round")}collectionId(){return new L("collection_id",[this])}length(){return new L("length",[this])}ln(){return new L("ln",[this])}sqrt(){return new L("sqrt",[this])}stringReverse(){return new L("string_reverse",[this])}ifAbsent(e){return new L("if_absent",[this,U(e)],"ifAbsent")}ifNull(e){return new L("if_null",[this,U(e)],"ifNull")}coalesce(e,...t){return new L("coalesce",[this,U(e),...t.map(U)],"coalesce")}join(e){return new L("join",[this,U(e)],"join")}log10(){return new L("log10",[this])}arraySum(){return new L("sum",[this])}split(e){return new L("split",[this,U(e)])}timestampTruncate(e,t){const s=[this,U(e)];return t&&s.push(U(t)),new L("timestamp_trunc",s)}ascending(){return Vv(this)}descending(){return Gv(this)}as(e){return new Fv(this,e,"as")}}class wt{constructor(e,t){this.name=e,this.params=t,this.exprType="AggregateFunction",this._protoValueType="ProtoValue"}static _create(e,t,s){const r=new wt(e,t);return r._methodName=s,r}as(e){return new Nv(this,e,"as")}over(e){return new Wu(this.name,this.params,new pm(e),"over")}_toProto(e){return{functionValue:{name:this.name,args:this.params.map((t=>t._toProto(e)))}}}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach((t=>t._readUserData(e)))}}class Nv{constructor(e,t,s){this.aggregate=e,this.alias=t,this._methodName=s}_readUserData(e){this.aggregate._readUserData(e)}}class Fv{constructor(e,t,s){this.expr=e,this.alias=t,this._methodName=s,this.exprType="AliasedExpression",this.selectable=!0}_readUserData(e){this.expr._readUserData(e)}}class ii extends Bs{constructor(e,t){super(),this.di=e,this._methodName=t,this.expressionType="ListOfExpressions"}_toProto(e){return{arrayValue:{values:this.di.map((t=>t._toProto(e)))}}}_readUserData(e){this.di.forEach((t=>t._readUserData(e)))}}class Sr extends Bs{constructor(e,t){super(),this.fieldPath=e,this._methodName=t,this.expressionType="Field",this.selectable=!0}get _fieldPath(){return this.fieldPath}get fieldName(){return this.fieldPath.canonicalString()}get alias(){return this.fieldName}get expr(){return this}geoDistance(e){return new L("geo_distance",[this,U(e)],"geoDistance")}_toProto(e){return{fieldReferenceValue:this.fieldPath.canonicalString()}}_readUserData(e){}}function ea(n){return Lv(n,"field")}function Lv(n,e){return new Sr(typeof n=="string"?Yt===n?zA()._internalPath:eo("field",n):n._internalPath,e)}class Or extends Bs{constructor(e,t){super(),this.value=e,this._methodName=t,this.expressionType="Constant"}static _fromProto(e){const t=new Or(e,void 0);return t._protoValue=e,t}_toProto(e){return W(this._protoValue!==void 0,237),this._protoValue}_getValue(){return this._protoValue}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,Ov(this._protoValue)||(this._protoValue=Dr(this.value,e))}}function ki(n,e){return hm(n,"constant")}function hm(n,e){const t=new Or(n,e);return typeof n=="boolean"?new dm(t):t}class L extends Bs{constructor(e,t,s,r){super(),this.name=e,this.params=t,this.expressionType="Function",this._optionsProto=void 0,s!==void 0&&(this._methodName=s),r!==void 0&&(this._options=r)}get _optionsUtil(){return new ot({})}_toProto(e){const t={functionValue:{name:this.name,args:this.params.map((s=>s._toProto(e)))}};return this._optionsProto&&(t.functionValue.options=this._optionsProto),t}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach((t=>t._readUserData(e))),this._options&&(this._optionsProto=this._optionsUtil.getOptionsProto(e,this._options))}}class rs extends Bs{get _methodName(){return this._expr._methodName}countIf(){return wt._create("count_if",[this],"countIf")}not(){return new L("not",[this],"not").asBoolean()}conditional(e,t){return new L("conditional",[this,e,t],"conditional")}ifError(e){const t=U(e),s=new L("if_error",[this,t],"ifError");return t instanceof rs?s.asBoolean():s}_toProto(e){return this._expr._toProto(e)}_readUserData(e){this._expr._readUserData(e)}}class fm extends rs{constructor(e){super(),this._expr=e,this.expressionType="Function"}}class dm extends rs{constructor(e){super(),this._expr=e,this.expressionType="Constant"}_getValue(){return this._expr._getValue()}}class kv extends rs{constructor(e){super(),this._expr=e,this.expressionType="Field"}}function xv(n,e){const t=[];for(const s in n)if(Object.prototype.hasOwnProperty.call(n,s)){const r=n[s];t.push(ki(s)),t.push(U(r))}return new L("map",t,"map")}function Mv(n){return(function(t,s){return new L("array",t.map((r=>U(r))),s)})(n,"array")}function Vv(n){return new Cm(tc(n),"ascending","ascending")}function Gv(n){return new Cm(tc(n),"descending","descending")}class Cm{constructor(e,t,s){this.expr=e,this.direction=t,this._methodName=s,this._protoValueType="ProtoValue"}_toProto(e){return{mapValue:{fields:{direction:ba(this.direction),expression:this.expr._toProto(e)}}}}_readUserData(e){this.expr._readUserData(e)}}function Mo(n){return n instanceof Bs}class pm{constructor(e){this._protoValueType="ProtoValue";const t=e.sort;this.partition=(e.partition??[]).map(tc),this.sort=t===void 0?[]:Array.isArray(t)?t:[t],this.documents=e.documents,this.range=e.range}_toProto(e){const t={};return this.partition.length>0&&(t.partition={arrayValue:{values:this.partition.map((s=>s._toProto(e)))}}),this.sort.length>0&&(t.sort={arrayValue:{values:this.sort.map((s=>s._toProto(e)))}}),this.documents!==void 0&&(t.documents=this.frameToProto(e,this.documents)),this.range!==void 0&&(t.range=this.frameToProto(e,this.range)),{mapValue:{fields:t}}}_readUserData(e){this.partition.forEach((t=>t._readUserData(e))),this.sort.forEach((t=>t._readUserData(e)));for(const t of[this.documents,this.range]){if(t===void 0)continue;Mo(t.preceding)&&t.preceding._readUserData(e),Mo(t.following)&&t.following._readUserData(e);const s=t.unit;s!==void 0&&Mo(s)&&s._readUserData(e)}}frameToProto(e,t){const s={};t.preceding!==void 0&&(s.preceding=this.frameBoundToProto(e,t.preceding,"preceding")),t.following!==void 0&&(s.following=this.frameBoundToProto(e,t.following,"following"));const r=t.unit;return r!==void 0&&(s.unit=kl(r)?ba(r):r._toProto(e)),{mapValue:{fields:s}}}frameBoundToProto(e,t,s){if(typeof t=="number")return za(e,t);if(kl(t))return ba(t);if(Mo(t))return t._toProto(e);throw new $("invalid-argument",`Invalid window frame bound: '${s}'. Expected a number, 'current', 'unbounded', or an Expression.`)}}class Wu{constructor(e,t=[],s,r){this.name=e,this.params=t,this.window=s,this._methodName=r,this.exprType="WindowFunction",this._protoValueType="ProtoValue"}over(e){return new Wu(this.name,this.params,new pm(e),this._methodName??"over")}as(e){return new Uv(this,e,"as")}_toProto(e){const t={functionValue:{name:this.name,args:this.params.map((s=>s._toProto(e)))}};return this.window===void 0?t:{functionValue:{name:"over",args:[t,this.window._toProto(e)]}}}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach((t=>t._readUserData(e))),this.window?._readUserData(e)}}class Uv{constructor(e,t,s){this.windowFunction=e,this.alias=t,this._methodName=s}_readUserData(e){this.windowFunction._readUserData(e)}}class Ot{constructor(e){this.optionsProto=void 0,{rawOptions:this.rawOptions,...this.knownOptions}=e}_readUserData(e){this.optionsProto=this._optionsUtil.getOptionsProto(e,this.knownOptions,this.rawOptions)}_toProto(e){return{name:this._name,options:this.optionsProto}}}class gm extends Ot{get _name(){return"add_fields"}get _optionsUtil(){return new ot({})}constructor(e,t){super(t),this.fields=e}_toProto(e){return{...super._toProto(e),args:[Li(e,this.fields)]}}_readUserData(e){super._readUserData(e),is(this.fields,e)}}class mm extends Ot{get _name(){return"aggregate"}get _optionsUtil(){return new ot({})}constructor(e,t,s){super(s),this.groups=e,this.accumulators=t}_toProto(e){return{...super._toProto(e),args:[Li(e,this.accumulators),Li(e,this.groups)]}}_readUserData(e){super._readUserData(e),is(this.groups,e),is(this.accumulators,e)}}class Em extends Ot{get _name(){return"distinct"}get _optionsUtil(){return new ot({})}constructor(e,t){super(t),this.groups=e}_toProto(e){return{...super._toProto(e),args:[Li(e,this.groups)]}}_readUserData(e){super._readUserData(e),is(this.groups,e)}}class nc extends Ot{get _name(){return"collection"}get _optionsUtil(){return new ot({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.pi=$v(e)}_toProto(e){return{...super._toProto(e),args:[{referenceValue:this.pi}]}}_readUserData(e){super._readUserData(e)}}class sc extends Ot{get _name(){return"collection_group"}get _optionsUtil(){return new ot({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.collectionId=e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:""},{stringValue:this.collectionId}]}}_readUserData(e){super._readUserData(e)}}class Yu extends Ot{get _name(){return"database"}get _optionsUtil(){return new ot({})}_toProto(e){return{...super._toProto(e)}}_readUserData(e){super._readUserData(e)}}class Qu extends Ot{get _name(){return"documents"}get _optionsUtil(){return new ot({})}constructor(e,t){if(super(t),!e||e.length===0)throw new $(x.INVALID_ARGUMENT,"Empty document paths are not allowed in DocumentsSource");const s=e.map((i=>i.startsWith("/")?i:"/"+i)),r=new Set(s);if(r.size!==s.length)throw new $(x.INVALID_ARGUMENT,"Duplicate document paths are not allowed in DocumentsSource");this.gi=s,this.yi=r}_toProto(e){return{...super._toProto(e),args:this.gi.map((t=>({referenceValue:t})))}}_readUserData(e){super._readUserData(e)}}class rc extends Ot{get _name(){return"where"}get _optionsUtil(){return new ot({})}constructor(e,t){super(t),this.condition=e}_toProto(e){return{...super._toProto(e),args:[this.condition._toProto(e)]}}_readUserData(e){super._readUserData(e),is(this.condition,e)}}class ks extends Ot{get _name(){return"limit"}get _optionsUtil(){return new ot({})}constructor(e,t){W(!isNaN(e)&&e!==1/0&&e!==-1/0,34860),super(t),this.limit=e}_toProto(e){return{...super._toProto(e),args:[za(e,this.limit)]}}}class Vd extends Ot{get _name(){return"offset"}get _optionsUtil(){return new ot({})}constructor(e,t){super(t),this.offset=e}_toProto(e){return{...super._toProto(e),args:[za(e,this.offset)]}}}class Hv extends Ot{get _name(){return"select"}get _optionsUtil(){return new ot({})}constructor(e,t){super(t),this.selections=e}_toProto(e){return{...super._toProto(e),args:[Li(e,this.selections)]}}_readUserData(e){super._readUserData(e),is(this.selections,e)}}class gn extends Ot{get _name(){return"sort"}get _optionsUtil(){return new ot({})}constructor(e,t){super(t),this.orderings=e}_toProto(e){return{...super._toProto(e),args:this.orderings.map((t=>t._toProto(e)))}}_readUserData(e){super._readUserData(e),is(this.orderings,e)}}class Xu extends Ot{get _name(){return"replace_with"}get _optionsUtil(){return new ot({})}constructor(e,t){super(t),this.map=e}_toProto(e){return{...super._toProto(e),args:[this.map._toProto(e),ba(Xu.bi)]}}_readUserData(e){super._readUserData(e),is(this.map,e)}}Xu.bi="full_replace";function $v(n){const e=typeof n=="string"?n:n.path;return e.startsWith("/")?e:"/"+e}function is(n,e){return Bm(n)?n._readUserData(e):Array.isArray(n)?n.forEach((t=>t._readUserData(e))):n instanceof Map?n.forEach((t=>t._readUserData(e))):Object.values(n).forEach((t=>t._readUserData(e))),n}/**
 * @license
 * Copyright 2026 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,t,s,r){this._db=e,this.userDataReader=t,this._userDataWriter=s,this.stages=r}Ci(e,t){const s=this.userDataReader.createContext(3,e);return Bm(t)?t._readUserData(s):Array.isArray(t)?t.forEach((r=>r._readUserData(s))):t.forEach((r=>r._readUserData(s))),t}where(e){const t=this.stages.map((s=>s));return this.Ci("where",e),t.push(new rc(e,{})),new Ci(this._db,this.userDataReader,this._userDataWriter,t)}limit(e){const t=this.stages.map((s=>s));return t.push(new ks(e,{})),new Ci(this._db,this.userDataReader,this._userDataWriter,t)}sort(e,...t){const s=this.stages.map((r=>r));return"orderings"in e?s.push(new gn(this.Ci("sort",e.orderings),{})):s.push(new gn(this.Ci("sort",[e,...t]),{})),new Ci(this._db,this.userDataReader,this._userDataWriter,s)}Fi(e){return{pipeline:{stages:this.stages.map((t=>t._toProto(e)))}}}}// Copyright 2024 Google LLC* @license
class lt{constructor(e,t,s){this.serializer=e,this.stages=t,this.listenOptions=s,this.isCorePipeline=!0}getPipelineCollection(){return ic(this)}getPipelineCollectionGroup(){return Zu(this)}getPipelineCollectionId(){return jv(this)}getPipelineDocuments(){return Kl(this)}getPipelineFlavor(){return(function(t){let s="exact";return t.stages.forEach(((r,i)=>{r._name!==Em.name&&r._name!==mm.name||(s="keyless"),r._name===Hv.name&&s==="exact"&&(s="augmented"),r._name===gm.name&&i<t.stages.length-1&&s==="exact"&&(s="augmented")})),s})(this)}getPipelineSourceType(){return zn(this)}}function zn(n){const e=n.stages[0];return e instanceof nc||e instanceof sc||e instanceof Yu||e instanceof Qu?e._name:"unknown"}function ic(n){if(zn(n)==="collection")return n.stages[0].pi}function Zu(n){if(zn(n)==="collection_group")return n.stages[0].collectionId}function jv(n){switch(zn(n)){case"collection":return ge.fromString(ic(n)).lastSegment();case"collection_group":return Zu(n);default:return}}function Kl(n){if(zn(n)==="documents")return n.stages[0].gi}class T{constructor(e,t){this.type=e,this.value=t}static Oi(){return new T("ERROR",void 0)}static Mi(){return new T("UNSET",void 0)}static Ni(){return new T("NULL",mr)}static newValue(e){return vt(e)?new T("NULL",mr):(function(s){return!!s&&"booleanValue"in s})(e)?new T("BOOLEAN",e):Qt(e)?new T("INT",e):Xt(e)?new T("DOUBLE",e):(function(s){return!!s&&"timestampValue"in s&&!!s.timestampValue})(e)?new T("TIMESTAMP",e):(function(s){return!!s&&"stringValue"in s})(e)?new T("STRING",e):(function(s){return!!s&&"bytesValue"in s})(e)?new T("BYTES",e):e.referenceValue?new T("REFERENCE",e):e.geoPointValue?new T("GEO_POINT",e):_r(e)?new T("ARRAY",e):Ml(e)?new T("VECTOR",e):Rs(e)?new T("MAP",e):new T("ERROR",void 0)}Bi(){return this.type==="ERROR"||this.type==="UNSET"}Li(){return this.type==="NULL"}}function pi(n){if(!n.Bi())return n.value}function _m(n){return n instanceof rs?n._expr:n}function te(n){if((n=_m(n))instanceof Sr)return new qv(n);if(n instanceof Or)return new Jv(n);if(n instanceof ii)return new Kv(n);if(n instanceof L){if(n.name==="add")return new Yv(n);if(n.name==="subtract")return new Qv(n);if(n.name==="multiply")return new Xv(n);if(n.name==="divide")return new Zv(n);if(n.name==="mod")return new eb(n);if(n.name==="and")return new tb(n);if(n.name==="equal")return new fb(n);if(n.name==="not_equal")return new db(n);if(n.name==="less_than")return new Cb(n);if(n.name==="less_than_or_equal")return new pb(n);if(n.name==="greater_than")return new gb(n);if(n.name==="greater_than_or_equal")return new mb(n);if(n.name==="array_concat")return new Eb(n);if(n.name==="array_reverse")return new _b(n);if(n.name==="array_contains")return new Db(n);if(n.name==="array_contains_all")return new yb(n);if(n.name==="array_contains_any")return new wb(n);if(n.name==="array_length")return new Ib(n);if(n.name==="array_element")return new Tb(n);if(n.name==="equal_any")return new Dm(n);if(n.name==="not_equal_any")return new sb(n);if(n.name==="is_nan")return new rb(n);if(n.name==="is_not_nan")return new ib(n);if(n.name==="is_null")return new ob(n);if(n.name==="is_not_null")return new ab(n);if(n.name==="is_error")return new cb(n);if(n.name==="exists")return new lb(n);if(n.name==="not")return new oc(n);if(n.name==="or")return new nb(n);if(n.name==="xor")return new eB(n);if(n.name==="conditional")return new ub(n);if(n.name==="maximum")return new Bb(n);if(n.name==="minimum")return new hb(n);if(n.name==="reverse")return new Ab(n);if(n.name==="replace_first")return new vb(n);if(n.name==="replace_all")return new bb(n);if(n.name==="char_length")return new Rb(n);if(n.name==="byte_length")return new Sb(n);if(n.name==="like")return new Ob(n);if(n.name==="regex_contains")return new Pb(n);if(n.name==="regex_match")return new Nb(n);if(n.name==="string_contains")return new Fb(n);if(n.name==="starts_with")return new Lb(n);if(n.name==="ends_with")return new kb(n);if(n.name==="to_lower")return new xb(n);if(n.name==="to_upper")return new Mb(n);if(n.name==="trim")return new Vb(n);if(n.name==="string_concat")return new Gb(n);if(n.name==="map_get")return new Ub(n);if(n.name==="cosine_distance")return new Hb(n);if(n.name==="dot_product")return new $b(n);if(n.name==="euclidean_distance")return new jb(n);if(n.name==="vector_length")return new qb(n);if(n.name==="unix_micros_to_timestamp")return new Yb(n);if(n.name==="timestamp_to_unix_micros")return new Zb(n);if(n.name==="unix_millis_to_timestamp")return new Qb(n);if(n.name==="timestamp_to_unix_millis")return new eR(n);if(n.name==="unix_seconds_to_timestamp")return new Xb(n);if(n.name==="timestamp_to_unix_seconds")return new tR(n);if(n.name==="timestamp_add")return new nR(n);if(n.name==="timestamp_subtract")return new sR(n)}throw new Error(`Unknown Expr : ${n}`)}class qv{constructor(e){this.expr=e}evaluate(e,t){if(this.expr.fieldName===Yt)return T.newValue({referenceValue:va(e.serializer,t.key)});if(this.expr.fieldName==="__update_time__")return T.newValue({timestampValue:Zo(e.serializer,t.version)});if(this.expr.fieldName==="__create_time__")return T.newValue({timestampValue:Zo(e.serializer,t.createTime)});const s=t.data.field(this.expr._fieldPath);return s?Ou(s)?T.newValue((function(i,o){if(i.serverTimestampBehavior==="estimate")return{timestampValue:Zo(i.serializer,oe.fromTimestamp(gr(o)))};if(i.serverTimestampBehavior==="previous"){const a=Yi(o);if(a)return a}return{nullValue:"NULL_VALUE"}})(e,s)):T.newValue(s):T.Mi()}}class Jv{constructor(e){this.expr=e}evaluate(e,t){return T.newValue(this.expr._getValue())}}class Kv{constructor(e){this.expr=e}evaluate(e,t){const s=this.expr.di.map((r=>te(r).evaluate(e,t)));return s.some((r=>r.Bi()))?T.Oi():T.newValue({arrayValue:{values:s.map((r=>r.value))}})}}function Xe(n){return Xt(n)?Number(n.doubleValue):Number(n.integerValue)}function an(n){return BigInt(n.integerValue)}const zv=BigInt("0x7fffffffffffffff"),Wv=-BigInt("0x8000000000000000");class to{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length>=2,24778);const s=te(this.expr.params[0]).evaluate(e,t),r=te(this.expr.params[1]).evaluate(e,t);let i=this.$i(s,r);for(const o of this.expr.params.slice(2)){const a=te(o).evaluate(e,t);i=this.$i(i,a)}return i}$i(e,t){if(e.Bi()||t.Bi())return T.Oi();if(e.Li()||t.Li())return T.Ni();const s=e.value,r=t.value;if(!Xt(s)&&!Qt(s)||!Xt(r)&&!Qt(r))return T.Oi();if(Xt(s)||Xt(r)){const i=this.Ui(s,r);return i?T.newValue(i):T.Oi()}if(Qt(s)&&Qt(r)){const i=this.ki(s,r);return i===void 0?T.Oi():typeof i=="number"?T.newValue({doubleValue:i}):i<Wv||i>zv?T.Oi():T.newValue({integerValue:`${i}`})}return T.Oi()}}function Tn(n,e){return Le(n)!==Le(e)?"TYPE_MISMATCH":We(n)||We(e)?"NOT_EQ":vt(n)&&vt(e)?"EQ":vt(n)||vt(e)?"NULL":_r(n)&&_r(e)?(function(s,r){if(s.values?.length!==r.values?.length)return"NOT_EQ";let i=!1;for(let o=0;o<(s.values?.length??0);o++){const a=s.values[o],l=r.values[o];switch(Tn(a,l)){case"EQ":break;case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":i=!0;break;default:X(44609,{Qi:a,qi:l})}}return i?"NULL":"EQ"})(n.arrayValue,e.arrayValue):Ml(n)&&Ml(e)||Rs(n)&&Rs(e)?(function(s,r){const i=s.fields||{},o=r.fields||{};if(Fs(i)!==Fs(o))return"NOT_EQ";let a=!1;for(const l in i)if(i.hasOwnProperty(l)){if(o[l]===void 0)return"NOT_EQ";switch(Tn(i[l],o[l])){case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":a=!0}}return a?"NULL":"EQ"})(n.mapValue,e.mapValue):(function(s,r){return xt(s,r,{be:!1,ye:!0,we:!0})})(n,e)?"EQ":"NOT_EQ"}class Yv extends to{ki(e,t){return an(e)+an(t)}Ui(e,t){return{doubleValue:Xe(e)+Xe(t)}}}class Qv extends to{constructor(e){super(e),this.expr=e}ki(e,t){return an(e)-an(t)}Ui(e,t){return{doubleValue:Xe(e)-Xe(t)}}}class Xv extends to{constructor(e){super(e),this.expr=e}ki(e,t){return an(e)*an(t)}Ui(e,t){return{doubleValue:Xe(e)*Xe(t)}}}class Zv extends to{constructor(e){super(e),this.expr=e}ki(e,t){const s=an(t);if(s!==BigInt(0))return an(e)/s}Ui(e,t){const s=Xe(t);return s===0?{doubleValue:Ii(s)?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY}:{doubleValue:Xe(e)/s}}}class eb extends to{constructor(e){super(e),this.expr=e}ki(e,t){const s=an(t);if(s!==BigInt(0))return an(e)%s}Ui(e,t){const s=Xe(t);if(s!==0)return{doubleValue:Xe(e)%s}}}class tb{constructor(e){this.expr=e}evaluate(e,t){let s=!1,r=!1;for(const i of this.expr.params){const o=te(i).evaluate(e,t);switch(o.type){case"BOOLEAN":if(!o.value?.booleanValue)return T.newValue(ze);break;case"NULL":r=!0;break;default:s=!0}}return s?T.Oi():r?T.Ni():T.newValue(Et)}}class oc{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,9634);const s=te(this.expr.params[0]).evaluate(e,t);switch(s.type){case"BOOLEAN":return T.newValue({booleanValue:!s.value?.booleanValue});case"NULL":return T.Ni();default:return T.Oi()}}}class nb{constructor(e){this.expr=e}evaluate(e,t){let s=!1,r=!1;for(const i of this.expr.params){const o=te(i).evaluate(e,t);switch(o.type){case"BOOLEAN":if(o.value?.booleanValue)return T.newValue(Et);break;case"NULL":r=!0;break;default:s=!0}}return s?T.Oi():r?T.Ni():T.newValue(ze)}}class eB{constructor(e){this.expr=e}evaluate(e,t){let s=!1,r=!1;for(const i of this.expr.params){const o=te(i).evaluate(e,t);switch(o.type){case"BOOLEAN":s=eB.xor(s,!!o.value?.booleanValue);break;case"NULL":r=!0;break;default:return T.Oi()}}return r?T.Ni():T.newValue({booleanValue:s})}static xor(e,t){return(e||t)&&!(e&&t)}}class Dm{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===2,55094);let s=!1;const r=te(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":s=!0;break;case"ERROR":case"UNSET":return T.Oi()}const i=te(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":s=!0;break;default:return T.Oi()}if(s)return T.Ni();for(const o of i.value?.arrayValue?.values??[])switch(vt(r.value)&&vt(o)?"EQ":Tn(r.value,o)){case"EQ":return T.newValue(Et);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":s=!0;break;default:X(44608,{value:r.value,candidate:o})}return s?T.Ni():T.newValue(ze)}}class sb{constructor(e){this.expr=e}evaluate(e,t){return new oc(new L("not",[new L("equal_any",this.expr.params)])).evaluate(e,t)}}class rb{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,23322);const s=te(this.expr.params[0]).evaluate(e,t);switch(s.type){case"INT":return T.newValue(ze);case"DOUBLE":return T.newValue({booleanValue:isNaN(Xe(s.value))});case"NULL":return T.Ni();default:return T.Oi()}}}class ib{constructor(e){this.expr=e}evaluate(e,t){return W(this.expr.params.length===1,50406),new oc(new L("not",[new L("is_nan",this.expr.params)])).evaluate(e,t)}}class ob{constructor(e){this.expr=e}evaluate(e,t){switch(W(this.expr.params.length===1,23123),te(this.expr.params[0]).evaluate(e,t).type){case"NULL":return T.newValue(Et);case"UNSET":case"ERROR":return T.Oi();default:return T.newValue(ze)}}}class ab{constructor(e){this.expr=e}evaluate(e,t){return W(this.expr.params.length===1,23167),new oc(new L("not",[new L("is_null",this.expr.params)])).evaluate(e,t)}}class cb{constructor(e){this.expr=e}evaluate(e,t){return W(this.expr.params.length===1,5228),te(this.expr.params[0]).evaluate(e,t).type==="ERROR"?T.newValue(Et):T.newValue(ze)}}class lb{constructor(e){this.expr=e}evaluate(e,t){switch(W(this.expr.params.length===1,6877),te(this.expr.params[0]).evaluate(e,t).type){case"ERROR":return T.Oi();case"UNSET":return T.newValue(ze);default:return T.newValue(Et)}}}class ub{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===3,11706);const s=te(this.expr.params[0]).evaluate(e,t);switch(s.type){case"BOOLEAN":return s.value?.booleanValue?te(this.expr.params[1]).evaluate(e,t):te(this.expr.params[2]).evaluate(e,t);case"NULL":return te(this.expr.params[2]).evaluate(e,t);default:return T.Oi()}}}class Bb{constructor(e){this.expr=e}evaluate(e,t){const s=this.expr.params.map((i=>te(i).evaluate(e,t)));let r;for(const i of s)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:r=r===void 0||_t(i.value,r.value)>0?i:r}return r===void 0?T.Ni():r}}class hb{constructor(e){this.expr=e}evaluate(e,t){const s=this.expr.params.map((i=>te(i).evaluate(e,t)));let r;for(const i of s)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:r=r===void 0||_t(i.value,r.value)<0?i:r}return r===void 0?T.Ni():r}}class Pr{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===2,31033,`${this.expr.name}() function should have exactly 2 params`);const s=te(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ERROR":case"UNSET":return T.Oi()}const r=te(this.expr.params[1]).evaluate(e,t);switch(r.type){case"ERROR":case"UNSET":return T.Oi()}return this.Ki(s,r)}}class fb extends Pr{constructor(e){super(e),this.expr=e}Ki(e,t){if(e.Li()&&t.Li())return T.newValue(Et);if(e.Li()||t.Li()||We(e.value)||We(t.value)||Le(e.value)!==Le(t.value))return T.newValue(ze);switch(Tn(e.value,t.value)){case"EQ":return T.newValue(Et);case"NOT_EQ":return T.newValue(ze);case"NULL":return T.Ni();default:X(44615,{left:e,right:t})}}}class db extends Pr{constructor(e){super(e),this.expr=e}Ki(e,t){switch(Tn(e.value,t.value)){case"EQ":return T.newValue(ze);case"NOT_EQ":case"TYPE_MISMATCH":return T.newValue(Et);case"NULL":return T.Ni();default:X(44614,{left:e,right:t})}}}class Cb extends Pr{constructor(e){super(e),this.expr=e}Ki(e,t){return Le(e.value)!==Le(t.value)||We(e.value)||We(t.value)?T.newValue(ze):T.newValue({booleanValue:_t(e.value,t.value)<0})}}class pb extends Pr{constructor(e){super(e),this.expr=e}Ki(e,t){return Le(e.value)!==Le(t.value)||We(e.value)||We(t.value)?T.newValue(ze):Tn(e.value,t.value)==="EQ"?T.newValue(Et):T.newValue({booleanValue:_t(e.value,t.value)<0})}}class gb extends Pr{constructor(e){super(e),this.expr=e}Ki(e,t){return Le(e.value)!==Le(t.value)||We(e.value)||We(t.value)?T.newValue(ze):T.newValue({booleanValue:_t(e.value,t.value)>0})}}class mb extends Pr{constructor(e){super(e),this.expr=e}Ki(e,t){return Le(e.value)!==Le(t.value)||We(e.value)||We(t.value)?T.newValue(ze):Tn(e.value,t.value)==="EQ"?T.newValue(Et):T.newValue({booleanValue:_t(e.value,t.value)>0})}}class Eb{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class _b{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,216);const s=te(this.expr.params[0]).evaluate(e,t);switch(s.type){case"NULL":return T.Ni();case"ARRAY":{const r=s.value.arrayValue?.values??[];return T.newValue({arrayValue:{values:[...r].reverse()}})}default:return T.Oi()}}}class Db{constructor(e){this.expr=e}evaluate(e,t){return W(this.expr.params.length===2,52884),new Dm(new L("eq_any",[this.expr.params[1],this.expr.params[0]])).evaluate(e,t)}}class yb{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===2,1392);let s=!1;const r=te(this.expr.params[0]).evaluate(e,t);switch(r.type){case"ARRAY":break;case"NULL":s=!0;break;default:return T.Oi()}const i=te(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":s=!0;break;default:return T.Oi()}if(s)return T.Ni();const o=i.value?.arrayValue?.values??[],a=r.value?.arrayValue?.values??[];for(const l of o){let u=!1;s=!1;for(const h of a){switch(vt(l)&&vt(h)?"EQ":Tn(l,h)){case"EQ":u=!0;break;case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":s=!0;break;default:X(44613,{value:h,search:l})}if(u)break}if(!u)return T.newValue(ze)}return T.newValue(Et)}}class wb{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===2,2680);let s=!1;const r=te(this.expr.params[0]).evaluate(e,t);switch(r.type){case"ARRAY":break;case"NULL":s=!0;break;default:return T.Oi()}const i=te(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":s=!0;break;default:return T.Oi()}if(s)return T.Ni();const o=i.value?.arrayValue?.values??[],a=r.value?.arrayValue?.values??[];for(const l of a)for(const u of o)switch(vt(l)&&vt(u)?"EQ":Tn(l,u)){case"EQ":return T.newValue(Et);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":s=!0;break;default:X(60403,{value:l,search:u})}return s?T.Ni():T.newValue(ze)}}class Ib{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,38605);const s=te(this.expr.params[0]).evaluate(e,t);switch(s.type){case"NULL":return T.Ni();case"ARRAY":return T.newValue({integerValue:`${s.value?.arrayValue?.values?.length??0}`});default:return T.Oi()}}}class Tb{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class Ab{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,1508);const s=te(this.expr.params[0]).evaluate(e,t);switch(s.type){case"NULL":return T.Ni();case"BYTES":{const r=s.value?.bytesValue;if(typeof r=="string"){const i=Ae.fromBase64String(r).toUint8Array();return i.reverse(),T.newValue({bytesValue:Ae.fromUint8Array(i).toBase64()})}return T.newValue({bytesValue:new Uint8Array(r).reverse()})}case"STRING":{const r=s.value?.stringValue,i=new Intl.__PRIVATE_Segmenter(void 0,{granularity:"grapheme"}).segment(r),o=Array.from(i,(a=>a.segment)).reverse();return T.newValue({stringValue:o.join("")})}default:return T.Oi()}}}class vb{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class bb{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class Rb{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,19400);const s=te(this.expr.params[0]).evaluate(e,t);switch(s.type){case"NULL":return T.Ni();case"STRING":{const r=(function(o){let a=0;for(let l=0;l<o.length;l++){const u=o.codePointAt(l);if(u===void 0)return;if(u<=65535)if(u>=55296&&u<=57343)if(u<=56319){const h=o.codePointAt(l+1);h!==void 0&&h>=56320&&h<=57343?(a+=1,l++):a+=1}else a+=1;else a+=1;else{if(!(u<=1114111))return;a+=1,l++}}return a})(s.value.stringValue);return r===void 0?T.Oi():T.newValue({integerValue:r})}default:return T.Oi()}}}class Sb{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,8486);const s=te(this.expr.params[0]).evaluate(e,t);switch(s.type){case"BYTES":{const r=s.value?.bytesValue;return typeof r=="string"?T.newValue({integerValue:Ae.fromBase64String(r).toUint8Array().length}):T.newValue({integerValue:new Uint8Array(r).length})}case"STRING":{const r=(function(o){let a=0;for(let l=0;l<o.length;l++){const u=o.codePointAt(l);if(u===void 0)return;if(u>=55296&&u<=57343){if(!(u<=56319))return;{const h=o.codePointAt(l+1);if(h===void 0||!(h>=56320&&h<=57343))return;a+=4,l++}}else if(u<=127)a+=1;else if(u<=2047)a+=2;else if(u<=65535)a+=3;else{if(!(u<=1114111))return;a+=4,l++}}return a})(s.value?.stringValue);return r===void 0?T.Oi():T.newValue({integerValue:r})}case"NULL":return T.Ni();default:return T.Oi()}}}class Nr{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===2,39773,`${this.expr.name}() function should have exactly two parameters`);let s=!1;const r=te(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":break;case"NULL":s=!0;break;default:return T.Oi()}const i=te(this.expr.params[1]).evaluate(e,t);switch(i.type){case"STRING":break;case"NULL":s=!0;break;default:return T.Oi()}return s?T.Ni():this.Wi(r.value?.stringValue,i.value?.stringValue)}}class Ob extends Nr{Wi(e,t){try{const s=(function(o){let a="";for(let l=0;l<o.length;l++){const u=o.charAt(l);switch(u){case"_":a+=".";break;case"%":a+=".*";break;case"\\":case".":case"*":case"?":case"+":case"^":case"$":case"|":case"(":case")":case"[":case"]":case"{":case"}":a+="\\"+u;break;default:a+=u}}return"^"+a+"$"})(t),r=bu.compile(s);return T.newValue({booleanValue:r.matches(e)})}catch(s){return jt(`Invalid LIKE pattern converted to regex: ${t}, returning error. Error: ${s}`),T.Oi()}}}class Pb extends Nr{Wi(e,t){try{const s=bu.compile(t);return T.newValue({booleanValue:s.test(e)})}catch{return jt(`Invalid regex pattern found in regex_contains: ${t}, returning error`),T.Oi()}}}class Nb extends Nr{Wi(e,t){try{return T.newValue({booleanValue:bu.compile(t).matches(e)})}catch{return jt(`Invalid regex pattern found in regex_match: ${t}, returning error`),T.Oi()}}}class Fb extends Nr{Wi(e,t){return T.newValue({booleanValue:e.includes(t)})}}class Lb extends Nr{Wi(e,t){return T.newValue({booleanValue:e.startsWith(t)})}}class kb extends Nr{Wi(e,t){return T.newValue({booleanValue:e.endsWith(t)})}}class xb{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,29079);const s=te(this.expr.params[0]).evaluate(e,t);switch(s.type){case"STRING":return T.newValue({stringValue:s.value?.stringValue?.toLowerCase()});case"NULL":return T.Ni();default:return T.Oi()}}}class Mb{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,60487);const s=te(this.expr.params[0]).evaluate(e,t);switch(s.type){case"STRING":return T.newValue({stringValue:s.value?.stringValue?.toUpperCase()});case"NULL":return T.Ni();default:return T.Oi()}}}class Vb{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,28544);const s=te(this.expr.params[0]).evaluate(e,t);switch(s.type){case"STRING":return T.newValue({stringValue:s.value?.stringValue?.trim()});case"NULL":return T.Ni();default:return T.Oi()}}}class Gb{constructor(e){this.expr=e}evaluate(e,t){const s=this.expr.params.map((o=>te(o).evaluate(e,t)));let r="",i=!1;for(const o of s)switch(o.type){case"STRING":r+=o.value.stringValue;break;case"NULL":i=!0;break;default:return T.Oi()}return i?T.Ni():T.newValue({stringValue:r})}}class Ub{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===2,4483);const s=te(this.expr.params[0]).evaluate(e,t);switch(s.type){case"UNSET":return T.Mi();case"MAP":break;default:return T.Oi()}const r=te(this.expr.params[1]).evaluate(e,t);if(r.type!=="STRING")return T.Oi();const i=s.value?.mapValue?.fields?.[r.value?.stringValue];return i===void 0?T.Mi():T.newValue(i)}}class tB{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===2,25231,`${this.expr.name}() function should have exactly 2 params`);let s=!1;const r=te(this.expr.params[0]).evaluate(e,t);switch(r.type){case"VECTOR":break;case"NULL":s=!0;break;default:return T.Oi()}const i=te(this.expr.params[1]).evaluate(e,t);switch(i.type){case"VECTOR":break;case"NULL":s=!0;break;default:return T.Oi()}if(s)return T.Ni();const o=Vl(r.value),a=Vl(i.value);if(o===void 0||a===void 0||o.values?.length!==a.values?.length)return T.Oi();const l=this.Gi(o,a);return l===void 0||isNaN(l)?T.Oi():T.newValue({doubleValue:l})}}class Hb extends tB{Gi(e,t){const s=e?.values??[],r=t?.values??[];if(s.length===0)return;let i=0,o=0,a=0;for(let u=0;u<s.length;u++){if(!In(s[u])||!In(r[u]))return;const h=Xe(s[u]),d=Xe(r[u]);i+=h*d,o+=h*h,a+=d*d}const l=Math.sqrt(o)*Math.sqrt(a);if(l!==0)return 1-Math.max(-1,Math.min(1,i/l))}}class $b extends tB{Gi(e,t){const s=e?.values??[],r=t?.values??[];if(s.length===0)return 0;let i=0;for(let o=0;o<s.length;o++){if(!In(s[o])||!In(r[o]))return;i+=Xe(s[o])*Xe(r[o])}return i}}class jb extends tB{Gi(e,t){const s=e?.values??[],r=t?.values??[];if(s.length===0)return 0;let i=0;for(let o=0;o<s.length;o++){if(!In(s[o])||!In(r[o]))return;const a=Xe(s[o]),l=Xe(r[o]);i+=Math.pow(a-l,2)}return Math.sqrt(i)}}class qb{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,39044);const s=te(this.expr.params[0]).evaluate(e,t);switch(s.type){case"VECTOR":{const r=Vl(s.value);return T.newValue({integerValue:r?.values?.length??0})}case"NULL":return T.Ni();default:return T.Oi()}}}const xi=BigInt(-62135596800),Mi=BigInt(253402300799),Sa=BigInt(1e3),Wn=BigInt(1e6),Jb=xi*Sa,Kb=Mi*Sa+BigInt(999),zb=xi*Wn,Wb=Mi*Wn+BigInt(999999);function nB(n){return n>=zb&&n<=Wb}function ym(n){return n>=xi&&n<=Mi}function Vi(n,e){const t=BigInt(n);return!(t<xi||t>Mi)&&!(e<0||e>=1e9)&&(t!==xi||e===0)&&!(t===Mi&&e>999999999)}function wm(n,e){return e<0?{seconds:n-1,nanos:e+1e9}:{seconds:n,nanos:e}}function sB(n){return BigInt(n.seconds)*Wn+BigInt(Math.trunc(n.nanoseconds/1e3))}class rB{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,49262,`${this.expr.name}() function should have exactly one parameter`);const s=te(this.expr.params[0]).evaluate(e,t);switch(s.type){case"INT":return this.toTimestamp(BigInt(s.value.integerValue));case"NULL":return T.Ni();default:return T.Oi()}}}class Yb extends rB{toTimestamp(e){if(!nB(e))return T.Oi();let t=Number(e/Wn),s=Number(e%Wn*BigInt(1e3));const r=wm(t,s);return t=r.seconds,s=r.nanos,Vi(t,s)?T.newValue({timestampValue:{seconds:t,nanos:s}}):T.Oi()}}class Qb extends rB{toTimestamp(e){if(!(function(o){return o>=Jb&&o<=Kb})(e))return T.Oi();let t=Number(e/Sa),s=Number(e%Sa*BigInt(1e6));const r=wm(t,s);return t=r.seconds,s=r.nanos,Vi(t,s)?T.newValue({timestampValue:{seconds:t,nanos:s}}):T.Oi()}}class Xb extends rB{toTimestamp(e){if(!ym(e))return T.Oi();const t=Number(e);return T.newValue({timestampValue:{seconds:t,nanos:0}})}}class iB{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,1265,`${this.expr.name}() function should have exactly one parameter`);const s=te(this.expr.params[0]).evaluate(e,t);switch(s.type){case"TIMESTAMP":break;case"NULL":return T.Ni();default:return T.Oi()}const r=Gu(s.value.timestampValue);return Vi(r.seconds,r.nanoseconds)?this.ji(r):T.Oi()}}class Zb extends iB{ji(e){const t=sB(e);return nB(t)?T.newValue({integerValue:`${t.toString()}`}):T.Oi()}}class eR extends iB{ji(e){const t=sB(e),s=t/BigInt(1e3),r=t%BigInt(1e3);return s>BigInt(0)||r===BigInt(0)?T.newValue({integerValue:s.toString()}):T.newValue({integerValue:(s-BigInt(1)).toString()})}}class tR extends iB{ji(e){const t=BigInt(e.seconds);return ym(t)?T.newValue({integerValue:t.toString()}):T.Oi()}}class Im{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===3,2775,`${this.expr.name}() function should have exactly 3 parameters`);let s=!1;const r=te(this.expr.params[0]).evaluate(e,t);switch(r.type){case"TIMESTAMP":break;case"NULL":s=!0;break;default:return T.Oi()}const i=te(this.expr.params[1]).evaluate(e,t);let o;switch(i.type){case"STRING":if(o=(function(K){switch(K){case"microsecond":return"microsecond";case"millisecond":return"millisecond";case"second":return"second";case"minute":return"minute";case"hour":return"hour";case"day":return"day";default:return}})(i.value.stringValue),o===void 0)return T.Oi();break;case"NULL":s=!0;break;default:return T.Oi()}const a=te(this.expr.params[2]).evaluate(e,t);switch(a.type){case"INT":break;case"NULL":s=!0;break;default:return T.Oi()}if(s)return T.Ni();const l=BigInt(a.value.integerValue);let u;try{switch(o){case"microsecond":u=l;break;case"millisecond":u=l*BigInt(1e3);break;case"second":u=l*BigInt(1e6);break;case"minute":u=l*BigInt(6e7);break;case"hour":u=l*BigInt(36e8);break;case"day":u=l*BigInt(864e8);break;default:return T.Oi()}if(o!=="microsecond"&&l!==BigInt(0)&&u/l!==BigInt(this.zi(o)))return T.Oi()}catch(G){return jt(`Error during timestamp arithmetic: ${G}`),T.Oi()}const h=Gu(r.value.timestampValue);if(!Vi(h.seconds,h.nanoseconds))return T.Oi();const d=sB(h),p=this.Hi(d,u);if(!nB(p))return T.Oi();const D=Number(p/Wn),y=p%Wn,R=Number((y<0?y+Wn:y)*BigInt(1e3)),F=y<0?D-1:D;return Vi(F,R)?T.newValue({timestampValue:{seconds:F,nanos:R}}):T.Oi()}zi(e){switch(e){case"millisecond":return 1e3;case"second":return 1e6;case"minute":return 6e7;case"hour":return 36e8;case"day":return 864e8;default:return 1}}}class nR extends Im{Hi(e,t){return e+t}}class sR extends Im{Hi(e,t){return e-t}}function Gi(n){if((n=_m(n))instanceof Sr)return`fld(${n.fieldName})`;if(n instanceof Or)return`cst(${(function(t){return t===null?"null":typeof t=="number"?t.toString():typeof t=="string"?`"${t}"`:t instanceof Ge?`ref(${t.path})`:t instanceof mt?`vec(${JSON.stringify(t)})`:JSON.stringify(t)})(n.value)})`;if(n instanceof L)return`fn(${n.name},[${n.params.map(Gi).join(",")}])`;if(n.expressionType==="ListOfExpressions")return`list([${n.di.map(Gi).join(",")}])`;throw new Error(`Unrecognized expr ${JSON.stringify(n,null,2)}`)}function rR(n){if(n instanceof gm)return`${n._name}(${Vo(n.fields)})`;if(n instanceof mm){let e=`${n._name}(${Vo(n.accumulators)})`;return n.groups.size>0&&(e+=`grouping(${Vo(n.groups)})`),e}if(n instanceof Em)return`${n._name}(${Vo(n.groups)})`;if(n instanceof nc)return`${n._name}(${n.pi})`;if(n instanceof sc)return`${n._name}(${n.collectionId})`;if(n instanceof Yu)return`${n._name}()`;if(n instanceof Qu)return`${n._name}(${n.gi.sort()})`;if(n instanceof rc)return`${n._name}(${Gi(n.condition)})`;if(n instanceof ks)return`${n._name}(${n.limit})`;if(n instanceof gn)return`${n._name}(${(function(t){return t.map((s=>`${Gi(s.expr)}${s.direction}`)).join(",")})(n.orderings)})`;throw new Error(`Unrecognized stage ${n._name}`)}function Vo(n){return`${Array.from(n.entries()).sort().map((([e,t])=>`${e}=${Gi(t)}`)).join(",")}`}function _n(n){return n.stages.map((e=>rR(e))).join("|")}function Tm(n,e){return _n(n)===_n(e)}function Ve(n){return n instanceof lt}function Gd(n){return Ve(n)?_n(n):hi(n)}function Am(n){return Ve(n)?_n(n):(function(t){return`${Ng(tn(t))}|lt:${t.limitType}`})(n)}function ac(n,e){return n instanceof lt&&e instanceof lt?Tm(n,e):!(n instanceof lt&&!(e instanceof lt)||!(n instanceof lt)&&e instanceof lt)&&EA(n,e)}function vm(n){return ys(n)?_n(n):Ng(n)}function bm(n,e){return n instanceof lt&&e instanceof lt?Tm(n,e):!(n instanceof lt&&!(e instanceof lt)||!(n instanceof lt)&&e instanceof lt)&&Fg(n,e)}function iR(n,e){const t=(function(r){let i=!1;const o=[];for(const a of r)if(a instanceof gn)if(i=!0,a.orderings.some((l=>l.expr instanceof Sr&&l.expr.fieldName===Yt)))o.push(a);else{const l=a.orderings.map((u=>u));l.push(ea(Yt).ascending()),o.push(new gn(l,{}))}else a instanceof ks&&(i||(o.push(new gn([ea(Yt).ascending()],{})),i=!0)),o.push(a);return i||o.push(new gn([ea(Yt).ascending()],{})),o})(n.stages);if(n.userDataReader){const s=n.userDataReader.createContext(3,"toCorePipeline");t.forEach((r=>r._readUserData(s)))}return new lt(n.userDataReader.serializer,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&Z0(i,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=ui(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=ui(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Ug();return this.mutations.forEach((r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=t.has(r.key)?null:a;const l=Ig(o,a);l!==null&&s.set(r.key,l),o.isValidDocument()||o.convertToNoDocument(oe.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Be())}isEqual(e){return this.batchId===e.batchId&&pr(this.mutations,e.mutations,((t,s)=>gd(t,s)))&&pr(this.baseMutations,e.baseMutations,((t,s)=>gd(t,s)))}}class oB{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){W(e.mutations.length===s.length,58842,{Ji:e.mutations.length,Yi:s.length});let r=(function(){return IA})();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new oB(e,t,s,r)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm="";function aR(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Ud(e)),e=cR(n.get(t),e);return Ud(e)}function cR(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const i=n.charAt(r);switch(i){case"\0":t+="";break;case Rm:t+="";break;default:t+=i}}return t}function Ud(n){return n+Rm+""}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,t,s,r,i=oe.min(),o=oe.min(),a=Ae.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new mn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new mn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new mn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new mn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(e){this.Xi=e}}function BR(n){const e=UA({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Aa(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(){this.d_=new fR}addToCollectionParentIndex(e,t){return this.d_.add(t),M.resolve()}getCollectionParents(e,t){return M.resolve(this.d_.getEntries(t))}addFieldIndex(e,t){return M.resolve()}deleteFieldIndex(e,t){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,t){return M.resolve()}getDocumentsMatchingTarget(e,t){return M.resolve(null)}getIndexType(e,t){return M.resolve(0)}getFieldIndexes(e,t){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,t){return M.resolve(ss.min())}getMinOffsetFromCollectionGroup(e,t){return M.resolve(ss.min())}updateCollectionGroup(e,t,s){return M.resolve()}updateIndexEntries(e,t){return M.resolve()}}class fR{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new Ne(ge.comparator),i=!r.has(s);return this.index[t]=r.add(s),i}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Ne(ge.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this.K_=e}next(){return this.K_+=2,this.K_}static W_(){return new os(0)}static G_(){return new os(-1)}}// Copyright 2024 Google LLC* @license
function Sm(n,e){let t=e;for(const s of n.stages)t=CR({serializer:n.serializer,serverTimestampBehavior:n.listenOptions?.serverTimestampBehavior},s,t);return t}function cc(n,e){return Sm(n,[e]).length>0}function dR(n,e){return Ve(n)?cc(n,e):Qa(n,e)}function CR(n,e,t){if(e instanceof nc)return(function(r,i,o){return o.filter((a=>a.isFoundDocument()&&`/${a.key.getCollectionPath().canonicalString()}`===i.pi))})(0,e,t);if(e instanceof rc)return(function(r,i,o){return o.filter((a=>{const l=pi(te(i.condition).evaluate(r,a));return l!==void 0&&xt(l,Et)}))})(n,e,t);if(e instanceof sc)return(function(r,i,o){return o.filter((a=>a.isFoundDocument()&&a.key.getCollectionPath().lastSegment()===i.collectionId))})(0,e,t);if(e instanceof Yu)return(function(r,i,o){return o.filter((a=>a.isFoundDocument()))})(0,0,t);if(e instanceof Qu)return(function(r,i,o){return o.filter((a=>a.isFoundDocument()&&i.yi.has(a.key.path.toStringWithLeadingSlash())))})(0,e,t);if(e instanceof ks)return(function(r,i,o){return o.slice(0,i.limit)})(0,e,t);if(e instanceof gn)return(function(r,i,o){const a=i.orderings.map((l=>({eo:te(l.expr),direction:l.direction})));return[...o].sort(((l,u)=>{for(const{eo:h,direction:d}of a){const p=pi(h.evaluate(r,l)),D=pi(h.evaluate(r,u)),y=_t(p??mr,D??mr);if(y!==0)return d==="ascending"?y:-y}return 0}))})(n,e,t);throw new Error(`Unknown stage: ${e._name}`)}function zl(n){const e=(function(s){for(let r=s.stages.length-1;r>=0;r--){const i=s.stages[r];if(i instanceof gn)return i.orderings}throw new Error("Pipeline must contain at least one Sort stage")})(n);return(t,s)=>{for(const r of e){const i=pi(te(r.expr).evaluate({serializer:n.serializer},t)),o=pi(te(r.expr).evaluate({serializer:n.serializer},s)),a=_t(i||mr,o||mr);if(a!==0)return r.direction==="ascending"?a:-a}return 0}}function ol(n){for(let e=n.stages.length-1;e>=0;e--){const t=n.stages[e];if(t instanceof ks)return{limit:t.limit}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(){this.changes=new js((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,rt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?M.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(s=r,this.remoteDocumentCache.getEntry(e,t)))).next((r=>(s!==null&&ui(s.mutation,r,$t.empty(),me.now()),r)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Be()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Be()){const r=Gn();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,s).next((i=>{let o=nr();return i.forEach(((a,l)=>{o=o.insert(a,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const s=Gn();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Be())))}populateOverlays(e,t,s){const r=[];return s.forEach((i=>{t.has(i)||r.push(i)})),this.documentOverlayCache.getOverlays(e,r).next((i=>{i.forEach(((o,a)=>{t.set(o,a)}))}))}computeViews(e,t,s,r){let i=gt();const o=fi(),a=(function(){return fi()})();return t.forEach(((l,u)=>{const h=s.get(u.key);r.has(u.key)&&(h===void 0||h.mutation instanceof $s)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),ui(h.mutation,u,h.mutation.getFieldMask(),me.now())):o.set(u.key,$t.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((u,h)=>o.set(u,h))),t.forEach(((u,h)=>a.set(u,new gR(h,o.get(u)??null)))),a)))}recalculateAndSaveOverlays(e,t){const s=fi();let r=new Ie(((o,a)=>o-a)),i=Be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const a of o)a.keys().forEach((l=>{const u=t.get(l);if(u===null)return;let h=s.get(l)||$t.empty();h=a.applyToLocalView(u,h),s.set(l,h);const d=(r.get(a.batchId)||Be()).add(l);r=r.insert(a.batchId,d)}))})).next((()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,h=l.value,d=Ug();h.forEach((p=>{if(!i.has(p)){const D=Ig(t.get(p),s.get(p));D!==null&&d.set(p,D),i=i.add(p)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return M.waitFor(o)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,r){return Ve(t)?this.getDocumentsMatchingPipeline(e,t,s,r):pA(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):xg(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,r):this.getDocumentsMatchingCollectionQuery(e,t,s,r)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next((i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-i.size):M.resolve(Gn());let a=Fi,l=i;return o.next((u=>M.forEach(u,((h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),i.get(h)?M.resolve():this.remoteDocumentCache.getEntry(e,h).next((p=>{l=l.insert(h,p)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,l,u,Be()))).next((h=>({batchId:a,changes:Gg(h)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Y(t)).next((s=>{let r=nr();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,r){const i=t.collectionGroup;let o=nr();return this.indexManager.getCollectionParents(e,i).next((a=>M.forEach(a,(l=>{const u=(function(d,p){return new vr(p,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)})(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,s,r).next((h=>{h.forEach(((d,p)=>{o=o.insert(d,p)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,i,r)))).next((o=>this.retrieveMatchingLocalDocuments(i,o,(a=>Qa(t,a)))))}getDocumentsMatchingPipeline(e,t,s,r){if(zn(t)==="collection_group"){const i=Zu(t);let o=nr();return this.indexManager.getCollectionParents(e,i).next((a=>M.forEach(a,(l=>{const u=(function(d,p){const D=d.stages.map((y=>y instanceof sc?new nc(p.canonicalString(),{}):y));return new lt(d.serializer,D)})(t,l.child(i));return this.getDocumentsMatchingPipeline(e,u,s,r).next((h=>{h.forEach(((d,p)=>{o=o.insert(d,p)}))}))})).next((()=>o))))}{let i;return this.getOverlaysForPipeline(e,t,s.largestBatchId).next((o=>{switch(i=o,zn(t)){case"collection":return this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,i,r);case"documents":let a=Be();for(const l of Kl(t))a=a.add(Y.fromPath(l));return this.remoteDocumentCache.getEntries(e,a);case"database":return this.remoteDocumentCache.getAllEntries(e);default:throw new $("invalid-argument",`Invalid pipeline source to execute offline: ${_n(t)}`)}})).next((o=>this.retrieveMatchingLocalDocuments(i,o,(a=>cc(t,a)))))}}retrieveMatchingLocalDocuments(e,t,s){e.forEach(((i,o)=>{const a=o.getKey();t.get(a)===null&&(t=t.insert(a,rt.newInvalidDocument(a)))}));let r=nr();return t.forEach(((i,o)=>{const a=e.get(i);a!==void 0&&ui(a.mutation,o,$t.empty(),me.now()),s(o)&&(r=r.insert(i,o))})),r}getOverlaysForPipeline(e,t,s){switch(zn(t)){case"collection":return this.documentOverlayCache.getOverlaysForCollection(e,ge.fromString(ic(t)),s);case"collection_group":throw new $("invalid-argument",`Unexpected collection group pipeline: ${_n(t)}`);case"documents":return this.documentOverlayCache.getOverlays(e,Kl(t).map((r=>Y.fromPath(r))));case"database":return this.documentOverlayCache.getAllOverlays(e,s);default:throw new $("invalid-argument",`Failed to get overlays for pipeline: ${_n(t)}`)}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(e){this.serializer=e,this.co=new Map,this.lo=new Map}getBundleMetadata(e,t){return M.resolve(this.co.get(t))}saveBundleMetadata(e,t){return this.co.set(t.id,(function(r){return{id:r.id,version:r.version,createTime:nn(r.createTime)}})(t)),M.resolve()}getNamedQuery(e,t){return M.resolve(this.lo.get(t))}saveNamedQuery(e,t){return this.lo.set(t.name,(function(r){return{name:r.name,query:BR(r.bundledQuery),readTime:nn(r.readTime)}})(t)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(){this.overlays=new Ie(Y.comparator),this.Eo=new Map}getOverlay(e,t){return M.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Gn();return M.forEach(t,(r=>this.getOverlay(e,r).next((i=>{i!==null&&s.set(r,i)})))).next((()=>s))}getAllOverlays(e,t){const s=Gn();return this.overlays.forEach(((r,i)=>{i.largestBatchId>t&&s.set(r,i)})),M.resolve(s)}saveOverlays(e,t,s){return s.forEach(((r,i)=>{this.Es(e,t,i)})),M.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.Eo.get(s);return r!==void 0&&(r.forEach((i=>this.overlays=this.overlays.remove(i))),this.Eo.delete(s)),M.resolve()}getOverlaysForCollection(e,t,s){const r=Gn(),i=t.length+1,o=new Y(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>s&&r.set(l.getKey(),l)}return M.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let i=new Ie(((u,h)=>u-h));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>s){let h=i.get(u.largestBatchId);h===null&&(h=Gn(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=Gn(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((u,h)=>a.set(u,h))),!(a.size()>=r)););return M.resolve(a)}Es(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.Eo.get(r.largestBatchId).delete(s.key);this.Eo.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new lR(t,s));let i=this.Eo.get(t);i===void 0&&(i=Be(),this.Eo.set(t,i)),this.Eo.set(t,i.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(){this.sessionToken=Ae.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aB{constructor(){this.ho=new Ne(Ke.To),this.Po=new Ne(Ke.Io)}isEmpty(){return this.ho.isEmpty()}addReference(e,t){const s=new Ke(e,t);this.ho=this.ho.add(s),this.Po=this.Po.add(s)}Ro(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Ao(new Ke(e,t))}Vo(e,t){e.forEach((s=>this.removeReference(s,t)))}fo(e){const t=new Y(new ge([])),s=new Ke(t,e),r=new Ke(t,e+1),i=[];return this.Po.forEachInRange([s,r],(o=>{this.Ao(o),i.push(o.key)})),i}mo(){this.ho.forEach((e=>this.Ao(e)))}Ao(e){this.ho=this.ho.delete(e),this.Po=this.Po.delete(e)}po(e){const t=new Y(new ge([])),s=new Ke(t,e),r=new Ke(t,e+1);let i=Be();return this.Po.forEachInRange([s,r],(o=>{i=i.add(o.key)})),i}containsKey(e){const t=new Ke(e,0),s=this.ho.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Ke{constructor(e,t){this.key=e,this.yo=t}static To(e,t){return Y.comparator(e.key,t.key)||ue(e.yo,t.yo)}static Io(e,t){return ue(e.yo,t.yo)||Y.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.rs=1,this.wo=new Ne(Ke.To)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const i=this.rs;this.rs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new oR(i,t,s,r);this.mutationQueue.push(o);for(const a of r)this.wo=this.wo.add(new Ke(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,t){return M.resolve(this.bo(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.So(s),i=r<0?0:r;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?Pu:this.rs-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Ke(t,0),r=new Ke(t,Number.POSITIVE_INFINITY),i=[];return this.wo.forEachInRange([s,r],(o=>{const a=this.bo(o.yo);i.push(a)})),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Ne(ue);return t.forEach((r=>{const i=new Ke(r,0),o=new Ke(r,Number.POSITIVE_INFINITY);this.wo.forEachInRange([i,o],(a=>{s=s.add(a.yo)}))})),M.resolve(this.xo(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let i=s;Y.isDocumentKey(i)||(i=i.child(""));const o=new Ke(new Y(i),0);let a=new Ne(ue);return this.wo.forEachWhile((l=>{const u=l.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(l.yo)),!0)}),o),M.resolve(this.xo(a))}xo(e){const t=[];return e.forEach((s=>{const r=this.bo(s);r!==null&&t.push(r)})),t}removeMutationBatch(e,t){W(this.vo(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.wo;return M.forEach(t.mutations,(r=>{const i=new Ke(r.key,t.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.wo=s}))}us(e){}containsKey(e,t){const s=new Ke(t,0),r=this.wo.firstAfterOrEqual(s);return M.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}vo(e,t){return this.So(e)}So(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}bo(e){const t=this.So(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(e){this.Do=e,this.docs=(function(){return new Ie(Y.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),i=r?r.size:0,o=this.Do(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return M.resolve(s?s.document.mutableCopy():rt.newInvalidDocument(t))}getEntries(e,t){let s=gt();return t.forEach((r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():rt.newInvalidDocument(r))})),M.resolve(s)}getAllEntries(e){let t=gt();return this.docs.forEach(((s,r)=>{t=t.insert(s,r.document)})),M.resolve(t)}getDocumentsMatchingQuery(e,t,s,r){let i,o;Ve(t)?(i=ge.fromString(ic(t)),o=h=>cc(t,h)):(i=t.path,o=h=>Qa(t,h));let a=gt();const l=new Y(i.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:d}}=u.getNext();if(!i.isPrefixOf(h.path))break;h.path.length>i.length+1||fA(hA(d),s)<=0||(r.has(d.key)||o(d))&&(a=a.insert(d.key,d.mutableCopy()))}return M.resolve(a)}getAllFromCollectionGroup(e,t,s,r){X(9500)}Co(e,t){return M.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new IR(this)}getSize(e){return M.resolve(this.size)}}class IR extends pR{constructor(e){super(),this.ao=e}applyChanges(e){const t=[];return this.changes.forEach(((s,r)=>{r.isValidDocument()?t.push(this.ao.addEntry(e,r)):this.ao.removeEntry(s)})),M.waitFor(t)}getFromCache(e,t){return this.ao.getEntry(e,t)}getAllFromCache(e,t){return this.ao.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(e){this.persistence=e,this.Fo=new js((t=>vm(t)),bm),this.lastRemoteSnapshotVersion=oe.min(),this.highestTargetId=0,this.Oo=0,this.Mo=new aB,this.targetCount=0,this.No=os.W_()}forEachTarget(e,t){return this.Fo.forEach(((s,r)=>t(r))),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.Oo)}allocateTargetId(e){return this.highestTargetId=this.No.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.Oo&&(this.Oo=t),M.resolve()}H_(e){this.Fo.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.No=new os(t),this.highestTargetId=t),e.sequenceNumber>this.Oo&&(this.Oo=e.sequenceNumber)}addTargetData(e,t){return this.H_(t),this.targetCount+=1,M.resolve()}updateTargetData(e,t){return this.H_(t),M.resolve()}removeTargetData(e,t){return this.Fo.delete(t.target),this.Mo.fo(t.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,t,s){let r=0;const i=[];return this.Fo.forEach(((o,a)=>{a.sequenceNumber<=t&&s.get(a.targetId)===null&&(this.Fo.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)})),M.waitFor(i).next((()=>r))}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,t){const s=this.Fo.get(t)||null;return M.resolve(s)}addMatchingKeys(e,t,s){return this.Mo.Ro(t,s),M.resolve()}removeMatchingKeys(e,t,s){this.Mo.Vo(t,s);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((o=>{i.push(r.markPotentiallyOrphaned(e,o))})),M.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Mo.fo(t),M.resolve()}getMatchingKeysForTargetId(e,t){const s=this.Mo.po(t);return M.resolve(s)}containsKey(e,t){return M.resolve(this.Mo.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e,t){this.Bo={},this.overlays={},this.Lo=new Za(0),this.$o=!1,this.$o=!0,this.Uo=new DR,this.referenceDelegate=e(this),this.ko=new TR(this),this.indexManager=new hR,this.remoteDocumentCache=(function(r){return new wR(r)})((s=>this.referenceDelegate.Qo(s))),this.serializer=new uR(t),this.qo=new ER(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$o=!1,Promise.resolve()}get started(){return this.$o}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new _R,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Bo[e.toKey()];return s||(s=new yR(t,this.referenceDelegate),this.Bo[e.toKey()]=s),s}getGlobalsCache(){return this.Uo}getTargetCache(){return this.ko}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qo}runTransaction(e,t,s){J("MemoryPersistence","Starting transaction:",e);const r=new AR(this.Lo.next());return this.referenceDelegate.Ko(),s(r).next((i=>this.referenceDelegate.Wo(r).next((()=>i)))).toPromise().then((i=>(r.raiseOnCommittedEvent(),i)))}Go(e,t){return M.or(Object.values(this.Bo).map((s=>()=>s.containsKey(e,t))))}}class AR extends dv{constructor(e){super(),this.currentSequenceNumber=e}}class cB{constructor(e){this.persistence=e,this.jo=new aB,this.zo=null}static Ho(e){return new cB(e)}get Jo(){if(this.zo)return this.zo;throw X(60996)}addReference(e,t,s){return this.jo.addReference(s,t),this.Jo.delete(s.toString()),M.resolve()}removeReference(e,t,s){return this.jo.removeReference(s,t),this.Jo.add(s.toString()),M.resolve()}markPotentiallyOrphaned(e,t){return this.Jo.add(t.toString()),M.resolve()}removeTarget(e,t){this.jo.fo(t.targetId).forEach((r=>this.Jo.add(r.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((r=>{r.forEach((i=>this.Jo.add(i.toString())))})).next((()=>s.removeTargetData(e,t)))}Ko(){this.zo=new Set}Wo(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.Jo,(s=>{const r=Y.fromPath(s);return this.Yo(e,r).next((i=>{i||t.removeEntry(r,oe.min())}))})).next((()=>(this.zo=null,t.apply(e))))}updateLimboDocument(e,t){return this.Yo(e,t).next((s=>{s?this.Jo.delete(t.toString()):this.Jo.add(t.toString())}))}Qo(e){return 0}Yo(e,t){return M.or([()=>M.resolve(this.jo.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Go(e,t)])}}class Oa{constructor(e,t){this.persistence=e,this.Zo=new js((s=>aR(s.path)),((s,r)=>s.isEqual(r))),this.garbageCollector=_v(this,t)}static Ho(e,t){return new Oa(e,t)}Ko(){}Wo(e){return M.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Pi(e){const t=this.Y_(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((r=>s+r))))}Y_(e){let t=0;return this.Ii(e,(s=>{t++})).next((()=>t))}Ii(e,t){return M.forEach(this.Zo,((s,r)=>this.X_(e,s,r).next((i=>i?M.resolve():t(r)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.Co(e,(o=>this.X_(e,o,t).next((a=>{a||(s++,i.removeEntry(o,oe.min()))})))).next((()=>i.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.Zo.set(t,e.currentSequenceNumber),M.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.Zo.set(s,e.currentSequenceNumber),M.resolve()}removeReference(e,t,s){return this.Zo.set(s,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,t){return this.Zo.set(t,e.currentSequenceNumber),M.resolve()}Qo(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Da(e.data.value)),t}X_(e,t,s){return M.or([()=>this.persistence.Go(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.Zo.get(t);return M.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lB{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.$a=s,this.Ua=r}static ka(e,t){let s=Be(),r=Be();for(const i of t.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new lB(e,t.fromCache,s,r)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vR(n,e){return Y.comparator(n.key,e.key)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(){this.Qa=!1,this.qa=!1,this.Ka=100,this.Wa=(function(){return z_()?8:Cv(it())>0?6:4})()}initialize(e,t){this.Ga=e,this.indexManager=t,this.Qa=!0}getDocumentsMatchingQuery(e,t,s,r){const i={result:null};return this.ja(e,t).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.za(e,t,r,s).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new bR;return this.Ha(e,t,o).next((a=>{if(i.result=a,this.qa)return this.Ja(e,t,o,a.size)}))})).next((()=>i.result))}Ja(e,t,s,r){return Ve(t)?M.resolve():s.documentReadCount<this.Ka?(er()<=he.DEBUG&&J("QueryEngine","SDK will not create cache indexes for query:",hi(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ka,"documents"),M.resolve()):(er()<=he.DEBUG&&J("QueryEngine","Query:",hi(t),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.Wa*r?(er()<=he.DEBUG&&J("QueryEngine","The SDK decides to create cache indexes for query:",hi(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,tn(t))):M.resolve())}ja(e,t){if(Ve(t))return M.resolve(null);let s=t;if(wd(s))return M.resolve(null);let r=tn(s);return this.indexManager.getIndexType(e,r).next((i=>i===0?null:(s.limit!==null&&i===1&&(s=Aa(s,null,"F"),r=tn(s)),this.indexManager.getDocumentsMatchingTarget(e,r).next((o=>{const a=Be(...o);return this.Ga.getDocuments(e,a).next((l=>this.indexManager.getMinOffset(e,r).next((u=>{const h=this.Ya(s,l);return this.Za(s,h,a,u.readTime)?this.ja(e,Aa(s,null,"F")):this.Xa(e,h,s,u)}))))})))))}za(e,t,s,r){return(Ve(t)?(function(o){for(const a of o.stages){if(a instanceof ks||a instanceof Vd)return!1;if(a instanceof rc){if(a.condition instanceof fm&&a.condition._expr.name==="exists"&&a.condition._expr.params[0]instanceof Sr&&a.condition._expr.params[0].fieldName===Yt)continue;return!1}}return!0})(t):wd(t))||r.isEqual(oe.min())?M.resolve(null):this.Ga.getDocuments(e,s).next((i=>{const o=this.Ya(t,i);return this.Za(t,o,s,r)?M.resolve(null):(er()<=he.DEBUG&&J("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Gd(t)),this.Xa(e,o,t,BA(r,Fi)).next((a=>a)))}))}Ya(e,t){let s,r;return Ve(e)?(s=new Ne(vR),r=i=>cc(e,i)):(s=new Ne(Mu(e)),r=i=>Qa(e,i)),t.forEach(((i,o)=>{r(o)&&(s=s.add(o))})),s}Za(e,t,s,r){if(Ve(e))return(function(a){return a.stages.some((l=>l instanceof ks||l instanceof Vd))})(e);if(e.limit===null)return!1;if(s.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ha(e,t,s){return er()<=he.DEBUG&&J("QueryEngine","Using full collection scan to execute query:",Gd(t)),this.Ga.getDocumentsMatchingQuery(e,t,ss.min(),s)}Xa(e,t,s,r){return this.Ga.getDocumentsMatchingQuery(e,s,r).next((i=>(t.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uB="LocalStore",SR=3e8;class OR{constructor(e,t,s,r){this.persistence=e,this.eu=t,this.serializer=r,this.tu=new Ie(ue),this.nu=new js((i=>vm(i)),bm),this.ru=new Map,this.iu=e.getRemoteDocumentCache(),this.ko=e.getTargetCache(),this.qo=e.getBundleCache(),this.su(s)}su(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new mR(this.iu,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.iu.setIndexManager(this.indexManager),this.eu.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.tu)))}}function PR(n,e,t,s){return new OR(n,e,t,s)}async function Pm(n,e){const t=ae(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next((i=>(r=i,t.su(e),t.mutationQueue.getAllMutationBatches(s)))).next((i=>{const o=[],a=[];let l=Be();for(const u of r){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return t.localDocuments.getDocuments(s,l).next((u=>({_u:u,removedBatchIds:o,addedBatchIds:a})))}))}))}function NR(n,e){const t=ae(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const r=e.batch.keys(),i=t.iu.newChangeBuffer({trackRemovals:!0});return(function(a,l,u,h){const d=u.batch,p=d.keys();let D=M.resolve();return p.forEach((y=>{D=D.next((()=>h.getEntry(l,y))).next((R=>{const F=u.docVersions.get(y);W(F!==null,48541),R.version.compareTo(F)<0&&(d.applyToRemoteDocument(R,u),R.isValidDocument()&&(R.setReadTime(u.commitVersion),h.addEntry(R)))}))})),D.next((()=>a.mutationQueue.removeMutationBatch(l,d)))})(t,s,e,i).next((()=>i.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(a){let l=Be();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l})(e)))).next((()=>t.localDocuments.getDocuments(s,r)))}))}function Nm(n){const e=ae(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.ko.getLastRemoteSnapshotVersion(t)))}function FR(n,e){const t=ae(n),s=e.snapshotVersion;let r=t.tu;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=t.iu.newChangeBuffer({trackRemovals:!0});r=t.tu;const a=[];e.targetChanges.forEach(((h,d)=>{const p=r.get(d);if(!p)return;a.push(t.ko.removeMatchingKeys(i,h.removedDocuments,d).next((()=>t.ko.addMatchingKeys(i,h.addedDocuments,d))));let D=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?D=D.withResumeToken(Ae.EMPTY_BYTE_STRING,oe.min()).withLastLimboFreeSnapshotVersion(oe.min()):h.resumeToken.approximateByteSize()>0&&(D=D.withResumeToken(h.resumeToken,s)),r=r.insert(d,D),(function(R,F,G){return R.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=SR?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0})(p,D,h)&&a.push(t.ko.updateTargetData(i,D))}));let l=gt(),u=Be();if(e.documentUpdates.forEach((h=>{e.resolvedLimboDocuments.has(h)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,h))})),a.push(LR(i,o,e.documentUpdates).next((h=>{l=h.ou,u=h.au}))),!s.isEqual(oe.min())){const h=t.ko.getLastRemoteSnapshotVersion(i).next((d=>t.ko.setTargetsMetadata(i,i.currentSequenceNumber,s)));a.push(h)}return M.waitFor(a).next((()=>o.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,l,u))).next((()=>l))})).then((i=>(t.tu=r,i)))}function LR(n,e,t){let s=Be(),r=Be();return t.forEach((i=>s=s.add(i))),e.getEntries(n,s).next((i=>{let o=gt();return t.forEach(((a,l)=>{const u=i.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),l.isNoDocument()&&l.version.isEqual(oe.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):J(uB,"Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)})),{ou:o,au:r}}))}function kR(n,e){const t=ae(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Pu),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function xR(n,e){const t=ae(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let r;return t.ko.getTargetData(s,e).next((i=>i?(r=i,M.resolve(r)):t.ko.allocateTargetId(s).next((o=>(r=new mn(e,o,"TargetPurposeListen",s.currentSequenceNumber),t.ko.addTargetData(s,r).next((()=>r)))))))})).then((s=>{const r=t.tu.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.tu=t.tu.insert(s.targetId,s),t.nu.set(e,s.targetId)),s}))}async function Wl(n,e,t){const s=ae(n),r=s.tu.get(e),i=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",i,(o=>s.persistence.referenceDelegate.removeTarget(o,r)))}catch(o){if(!Rr(o))throw o;J(uB,`Failed to update sequence numbers for target ${e}: ${o}`)}s.tu=s.tu.remove(e),s.nu.delete(r.target)}function Hd(n,e,t){const s=ae(n);let r=oe.min(),i=Be();return s.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,u,h){const d=ae(l),p=d.nu.get(h);return p!==void 0?M.resolve(d.tu.get(p)):d.ko.getTargetData(u,h)})(s,o,Ve(e)?e:tn(e)).next((a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.ko.getMatchingKeysForTargetId(o,a.targetId).next((l=>{i=l}))})).next((()=>s.eu.getDocumentsMatchingQuery(o,e,t?r:oe.min(),t?i:Be()))).next((a=>(MR(s,a),{documents:a,uu:i})))))}function MR(n,e){e.forEach(((t,s)=>{const r=s.key.getCollectionGroup(),i=n.ru.get(r)||oe.min();s.readTime.compareTo(i)>0&&n.ru.set(r,s.readTime)}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Pu=0,this.Iu=null,this.Ru=!0}Au(){this.Pu===0&&(this.Vu("Unknown"),this.Iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.Iu=null,this.du("Backend didn't respond within 10 seconds."),this.Vu("Offline"),Promise.resolve()))))}fu(e){this.state==="Online"?this.Vu("Unknown"):(this.Pu++,this.Pu>=1&&(this.mu(),this.du(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Vu("Offline")))}set(e){this.mu(),this.Pu=0,e==="Online"&&(this.Ru=!1),this.Vu(e)}Vu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}du(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Ru?(wn(t),this.Ru=!1):J("OnlineStateTracker",t)}mu(){this.Iu!==null&&(this.Iu.cancel(),this.Iu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn="RemoteStore";class GR{constructor(e,t,s,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.pu=[],this.gu=new Map,this.yu=new Map,this.wu=new Map,this.bu=new os(1e3),this.Su=new os(1001),this.xu=new Set,this.vu=[],this.Du=i,this.Du.tn((o=>{s.enqueueAndForget((async()=>{qs(this)&&(J(cn,"Restarting streams for network reachability change."),await(async function(l){const u=ae(l);u.xu.add(4),await no(u),u.Cu.set("Unknown"),u.xu.delete(4),await lc(u)})(this))}))})),this.Cu=new VR(s,r)}}async function lc(n){if(qs(n))for(const e of n.vu)await e(!0)}async function no(n){for(const e of n.vu)await e(!1)}function Yl(n,e){return n.yu.get(e)||void 0}function Fm(n,e){const t=ae(n),s=Yl(t,e.targetId);if(s!==void 0&&t.gu.has(s))return;const r=(function(a,l){const u=Yl(a,l);u!==void 0&&a.wu.delete(u);const h=(function(p,D){return D%2!=0?p.Su.next():p.bu.next()})(a,l);return a.yu.set(l,h),a.wu.set(h,l),h})(t,e.targetId);J(cn,"remoteStoreListen mapping SDK target ID to remote",e.targetId,r);const i=new mn(e.target,r,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.gu.set(r,i),dB(t)?fB(t):Fr(t).ur()&&hB(t,i)}function BB(n,e){const t=ae(n),s=Fr(t),r=Yl(t,e);J(cn,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,r),t.gu.delete(r),t.yu.delete(e),t.wu.delete(r),s.ur()&&Lm(t,r),t.gu.size===0&&(s.ur()?s.Er():qs(t)&&t.Cu.set("Unknown"))}function hB(n,e){if(n.Fu.rt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(oe.min())>0){const t=n.wu.get(e.targetId);if(t===void 0)return void J(cn,"SDK target ID not found for remote ID: "+e.targetId);const s=n.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(s)}Fr(n).yr(e)}function Lm(n,e){n.Fu.rt(e),Fr(n).wr(e)}function fB(n){n.Fu=new SA({getRemoteKeysForTarget:e=>{const t=n.wu.get(e);return t!==void 0?n.remoteSyncer.getRemoteKeysForTarget(t):Be()},Mt:e=>n.gu.get(e)||null,xt:()=>n.datastore.serializer.databaseId}),Fr(n).start(),n.Cu.Au()}function dB(n){return qs(n)&&!Fr(n).ar()&&n.gu.size>0}function qs(n){return ae(n).xu.size===0}function km(n){n.Fu=void 0}async function UR(n){n.Cu.set("Online")}async function HR(n){n.gu.forEach(((e,t)=>{hB(n,e)}))}async function $R(n,e){km(n),dB(n)?(n.Cu.fu(e),fB(n)):n.Cu.set("Unknown")}async function jR(n,e,t){if(n.Cu.set("Online"),e instanceof $g&&e.state===2&&e.cause)try{await(async function(r,i){const o=i.cause;for(const a of i.targetIds){if(r.gu.has(a)){const l=r.wu.get(a);l!==void 0&&(await r.remoteSyncer.rejectListen(l,o),r.yu.delete(l),r.wu.delete(a)),r.gu.delete(a)}r.Fu.removeTarget(a)}})(n,e)}catch(s){J(cn,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Pa(n,s)}else if(e instanceof Xo?n.Fu.Tt(e):e instanceof Hg?n.Fu.ft(e):n.Fu.Rt(e),!t.isEqual(oe.min()))try{const s=await Nm(n.localStore);t.compareTo(s)>=0&&await(function(i,o){const a=i.Fu.Dt(o);a.targetChanges.forEach(((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const d=i.gu.get(h);d&&i.gu.set(h,d.withResumeToken(u.resumeToken,o))}})),a.targetMismatches.forEach(((u,h)=>{const d=i.gu.get(u);if(!d)return;i.gu.set(u,d.withResumeToken(Ae.EMPTY_BYTE_STRING,d.snapshotVersion)),Lm(i,u);const p=new mn(d.target,u,h,d.sequenceNumber);hB(i,p)}));const l=(function(h,d){const p=new Map;d.targetChanges.forEach(((y,R)=>{const F=h.wu.get(R);F!==void 0&&p.set(F,y)}));let D=new Ie(ue);return d.targetMismatches.forEach(((y,R)=>{const F=h.wu.get(y);F!==void 0&&(D=D.insert(F,R))})),new Xi(d.snapshotVersion,p,D,d.documentUpdates,d.augmentedDocumentUpdates,d.resolvedLimboDocuments)})(i,a);return i.remoteSyncer.applyRemoteEvent(l)})(n,t)}catch(s){J(cn,"Failed to raise snapshot:",s),await Pa(n,s)}}async function Pa(n,e,t){if(!Rr(e))throw e;n.xu.add(1),await no(n),n.Cu.set("Offline"),t||(t=()=>Nm(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{J(cn,"Retrying IndexedDB access"),await t(),n.xu.delete(1),await lc(n)}))}function xm(n,e){return e().catch((t=>Pa(n,t,e)))}async function uc(n){const e=ae(n),t=as(e);let s=e.pu.length>0?e.pu[e.pu.length-1].batchId:Pu;for(;qR(e);)try{const r=await kR(e.localStore,s);if(r===null){e.pu.length===0&&t.Er();break}s=r.batchId,JR(e,r)}catch(r){await Pa(e,r)}Mm(e)&&Vm(e)}function qR(n){return qs(n)&&n.pu.length<10}function JR(n,e){n.pu.push(e);const t=as(n);t.ur()&&t.br&&t.Sr(e.mutations)}function Mm(n){return qs(n)&&!as(n).ar()&&n.pu.length>0}function Vm(n){as(n).start()}async function KR(n){as(n).Cr()}async function zR(n){const e=as(n);for(const t of n.pu)e.Sr(t.mutations)}async function WR(n,e,t){const s=n.pu.shift(),r=oB.from(s,e,t);await xm(n,(()=>n.remoteSyncer.applySuccessfulWrite(r))),await uc(n)}async function YR(n,e){e&&as(n).br&&await(async function(s,r){if((function(o){return yA(o)&&o!==x.ABORTED})(r.code)){const i=s.pu.shift();as(s).lr(),await xm(s,(()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r))),await uc(s)}})(n,e),Mm(n)&&Vm(n)}async function $d(n,e){const t=ae(n);t.asyncQueue.verifyOperationInProgress(),J(cn,"RemoteStore received new credentials");const s=qs(t);t.xu.add(3),await no(t),s&&t.Cu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.xu.delete(3),await lc(t)}async function QR(n,e){const t=ae(n);e?(t.xu.delete(2),await lc(t)):e||(t.xu.add(2),await no(t),t.Cu.set("Unknown"))}function Fr(n){return n.Ou||(n.Ou=(function(t,s,r){const i=ae(t);return i.Or(),new ov(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(n.datastore,n.asyncQueue,{pn:UR.bind(null,n),yn:HR.bind(null,n),bn:$R.bind(null,n),gr:jR.bind(null,n)}),n.vu.push((async e=>{e?(n.Ou.lr(),dB(n)?fB(n):n.Cu.set("Unknown")):(await n.Ou.stop(),km(n))}))),n.Ou}function as(n){return n.Mu||(n.Mu=(function(t,s,r){const i=ae(t);return i.Or(),new av(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(n.datastore,n.asyncQueue,{pn:()=>Promise.resolve(),yn:KR.bind(null,n),bn:YR.bind(null,n),vr:zR.bind(null,n),Dr:WR.bind(null,n)}),n.vu.push((async e=>{e?(n.Mu.lr(),await uc(n)):(await n.Mu.stop(),n.pu.length>0&&(J(cn,`Stopping write stream with ${n.pu.length} pending writes`),n.pu=[]))}))),n.Mu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Nu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Nu(this.observer.error,e):wn("Uncaught Error in snapshot listener:",e.toString()))}Bu(){this.muted=!0}Nu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CB{constructor(e,t,s,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Jn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,r,i){const o=Date.now()+s,a=new CB(e,t,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function pB(n,e){if(wn("AsyncQueue",`${e}: ${n}`),Rr(n))return new $(x.UNAVAILABLE,`${e}: ${n}`);throw n}class jd{constructor(){this.activeTargetIds=vA()}nc(e){this.activeTargetIds=this.activeTargetIds.add(e)}rc(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tc(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ZR{constructor(){this.kc=new jd,this.Qc={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.kc.nc(e),this.Qc[e]||"not-current"}updateQueryState(e,t,s){this.Qc[e]=t}removeLocalQueryTarget(e){this.kc.rc(e)}isLocalQueryTarget(e){return this.kc.activeTargetIds.has(e)}clearQueryState(e){delete this.Qc[e]}getAllActiveQueryTargets(){return this.kc.activeTargetIds}isActiveQueryTarget(e){return this.kc.activeTargetIds.has(e)}start(){return this.kc=new jd,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}function al(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{static emptySet(e){return new Ss(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||Y.comparator(t.key,s.key):(t,s)=>Y.comparator(t.key,s.key),this.keyedMap=nr(),this.sortedSet=new Ie(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ss)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Ss;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(){this.qc=new Ie(Y.comparator)}track(e){const t=e.doc.key,s=this.qc.get(t);s?e.type!==0&&s.type===3?this.qc=this.qc.insert(t,e):e.type===3&&s.type!==1?this.qc=this.qc.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.qc=this.qc.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.qc=this.qc.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.qc=this.qc.remove(t):e.type===1&&s.type===2?this.qc=this.qc.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.qc=this.qc.insert(t,{type:2,doc:e.doc}):X(63341,{Nt:e,Kc:s}):this.qc=this.qc.insert(t,e)}Wc(){const e=[];return this.qc.inorderTraversal(((t,s)=>{e.push(s)})),e}}class yr{constructor(e,t,s,r,i,o,a,l,u){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,t,s,r,i){const o=[];return t.forEach((a=>{o.push({type:0,doc:a})})),new yr(e,t,Ss.emptySet(t),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ac(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(){this.Gc=void 0,this.jc=[]}zc(){return this.jc.some((e=>e.Hc()))}}class tS{constructor(){this.queries=Jd(),this.onlineState="Unknown",this.Jc=new Set}terminate(){(function(t,s){const r=ae(t),i=r.queries;r.queries=Jd(),i.forEach(((o,a)=>{for(const l of a.jc)l.onError(s)}))})(this,new $(x.ABORTED,"Firestore shutting down"))}}function Jd(){return new js((n=>Am(n)),ac)}async function nS(n,e){const t=ae(n);let s=3;const r=e.query;let i=t.queries.get(r);i?!i.zc()&&e.Hc()&&(s=2):(i=new eS,s=e.Hc()?0:1);try{switch(s){case 0:i.Gc=await t.onListen(r,!0);break;case 1:i.Gc=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(o){const a=pB(o,`Initialization of query '${Ve(e.query)?_n(e.query):hi(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,i),i.jc.push(e),e.Yc(t.onlineState),i.Gc&&e.Zc(i.Gc)&&gB(t)}async function sS(n,e){const t=ae(n),s=e.query;let r=3;const i=t.queries.get(s);if(i){const o=i.jc.indexOf(e);o>=0&&(i.jc.splice(o,1),i.jc.length===0?r=e.Hc()?0:1:!i.zc()&&e.Hc()&&(r=2))}switch(r){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function rS(n,e){const t=ae(n);let s=!1;for(const r of e){const i=r.query,o=t.queries.get(i);if(o){for(const a of o.jc)a.Zc(r)&&(s=!0);o.Gc=r}}s&&gB(t)}function iS(n,e,t){const s=ae(n),r=s.queries.get(e);if(r)for(const i of r.jc)i.onError(t);s.queries.delete(e)}function gB(n){n.Jc.forEach((e=>{e.next()}))}var Ql;(function(n){n.Default="default",n.Cache="cache"})(Ql||(Ql={}));class oS{constructor(e,t,s){this.query=e,this.Xc=t,this.el=!1,this.tl=null,this.onlineState="Unknown",this.options=s||{}}Zc(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new yr(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.el?this.nl(e)&&(this.Xc.next(e),t=!0):this.rl(e,this.onlineState)&&(this.il(e),t=!0),this.tl=e,t}onError(e){this.Xc.error(e)}Yc(e){this.onlineState=e;let t=!1;return this.tl&&!this.el&&this.rl(this.tl,e)&&(this.il(this.tl),t=!0),t}rl(e,t){if(!e.fromCache||!this.Hc())return!0;const s=t!=="Offline";return(!this.options.waitForSyncWhenOnline||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}nl(e){if(e.docChanges.length>0)return!0;const t=this.tl&&this.tl.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}il(e){e=yr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.el=!0,this.Xc.next(e)}Hc(){return this.options.source!==Ql.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(e){this.key=e}}class Um{constructor(e){this.key=e}}class aS{constructor(e,t){this.query=e,this.hl=t,this.Tl=null,this.hasCachedResults=!1,this.current=!1,this.Pl=Be(),this.mutatedKeys=Be(),this.Il=Ve(e)?zl(e):Mu(e),this.Rl=new Ss(this.Il)}get Al(){return this.hl}Vl(e,t){const s=t?t.dl:new qd,r=t?t.Rl:this.Rl;let i=t?t.mutatedKeys:this.mutatedKeys,o=r,a=!1;const[l,u]=this.fl(this.query,r);e.inorderTraversal(((d,p)=>{const D=r.get(d),y=dR(this.query,p)?p:null,R=!!D&&this.mutatedKeys.has(D.key),F=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let G=!1;D&&y?D.data.isEqual(y.data)?R!==F&&(s.track({type:3,doc:y}),G=!0):this.ml(D,y)||(s.track({type:2,doc:y}),G=!0,(l&&this.Il(y,l)>0||u&&this.Il(y,u)<0)&&(a=!0)):!D&&y?(s.track({type:0,doc:y}),G=!0):D&&!y&&(s.track({type:1,doc:D}),G=!0,(l||u)&&(a=!0)),G&&(y?(o=o.add(y),i=F?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}));const h=this.pl(this.query);if(h)if(Ve(this.query)){const d=[];o.forEach((y=>d.push(y)));const p=Sm(this.query,d);let D=new Ss(zl(this.query));for(const y of p)D=D.add(y);o.forEach((y=>{D.has(y.key)||(i=i.delete(y.key),s.track({type:1,doc:y}))})),o=D}else{const d=this.gl(this.query);for(;o.size>h;){const p=d==="F"?o.last():o.first();o=o.delete(p.key),i=i.delete(p.key),s.track({type:1,doc:p})}}return{Rl:o,dl:s,Za:a,mutatedKeys:i}}pl(e){return Ve(e)?ol(e)?.limit:e.limit||void 0}gl(e){if(Ve(e)){const t=ol(e);return t&&t.limit<0?"L":"F"}return e.limitType}fl(e,t){if(Ve(e)){const s=ol(e)?.limit;return[t.size===s?t.last():null,null]}return[e.limitType==="F"&&t.size===this.pl(this.query)?t.last():null,e.limitType==="L"&&t.size===this.pl(this.query)?t.first():null]}ml(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,r){const i=this.Rl;this.Rl=e.Rl,this.mutatedKeys=e.mutatedKeys;const o=e.dl.Wc();o.sort(((h,d)=>(function(D,y){const R=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X(20277,{Nt:F})}};return R(D)-R(y)})(h.type,d.type)||this.Il(h.doc,d.doc))),this.yl(s),r=r??!1;const a=t&&!r?this.wl():[],l=this.Pl.size===0&&this.current&&!r?1:0,u=l!==this.Tl;return this.Tl=l,o.length!==0||u?{snapshot:new yr(this.query,e.Rl,i,o,e.mutatedKeys,l===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),bl:a}:{bl:a}}Yc(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Rl:this.Rl,dl:new qd,mutatedKeys:this.mutatedKeys,Za:!1},!1)):{bl:[]}}Sl(e){return!this.hl.has(e)&&!!this.Rl.has(e)&&!this.Rl.get(e).hasLocalMutations}yl(e){e&&(e.addedDocuments.forEach((t=>this.hl=this.hl.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.hl=this.hl.delete(t))),this.current=e.current)}wl(){if(!this.current)return[];const e=this.Pl;this.Pl=Be(),this.Rl.forEach((s=>{this.Sl(s.key)&&(this.Pl=this.Pl.add(s.key))}));const t=[];return e.forEach((s=>{this.Pl.has(s)||t.push(new Um(s))})),this.Pl.forEach((s=>{e.has(s)||t.push(new Gm(s))})),t}xl(e){this.hl=e.uu,this.Pl=Be();const t=this.Vl(e.documents);return this.applyChanges(t,!0)}vl(){return yr.fromInitialDocuments(this.query,this.Rl,this.mutatedKeys,this.Tl===0,this.hasCachedResults)}}const mB="SyncEngine";class cS{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class lS{constructor(e){this.key=e,this.Dl=!1}}class uS{constructor(e,t,s,r,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Cl={},this.Fl=new js((a=>Am(a)),ac),this.Ol=new Map,this.Ml=new Set,this.Nl=new Ie(Y.comparator),this.Bl=new Map,this.Ll=new aB,this.$l={},this.Ul=new Map,this.kl=os.G_(),this.onlineState="Unknown",this.Ql=void 0}get isPrimaryClient(){return this.Ql===!0}}async function BS(n,e,t=!0){const s=Km(n);let r;const i=s.Fl.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.vl()):r=await Hm(s,e,t,!0),r}async function hS(n,e){const t=Km(n);await Hm(t,e,!0,!1)}async function Hm(n,e,t,s){const r=await xR(n.localStore,Ve(e)?e:tn(e)),i=r.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let a;return s&&(a=await fS(n,e,i,o==="current",r.resumeToken)),n.isPrimaryClient&&t&&Fm(n.remoteStore,r),a}async function fS(n,e,t,s,r){n.ql=(d,p,D)=>(async function(R,F,G,K){let se=F.view.Vl(G);se.Za&&(se=await Hd(R.localStore,F.query,!1).then((({documents:v})=>F.view.Vl(v,se))));const pe=K&&K.targetChanges.get(F.targetId),ke=K&&K.targetMismatches.get(F.targetId)!=null,Te=F.view.applyChanges(se,R.isPrimaryClient,pe,ke);return zd(R,F.targetId,Te.bl),Te.snapshot})(n,d,p,D);const i=await Hd(n.localStore,e,!0),o=new aS(e,i.uu),a=o.Vl(i.documents),l=Zi.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",r),u=o.applyChanges(a,n.isPrimaryClient,l);zd(n,t,u.bl);const h=new cS(e,t,o);return n.Fl.set(e,h),n.Ol.has(t)?n.Ol.get(t).push(e):n.Ol.set(t,[e]),u.snapshot}async function dS(n,e,t){const s=ae(n),r=s.Fl.get(e),i=s.Ol.get(r.targetId);if(i.length>1)return s.Ol.set(r.targetId,i.filter((o=>!ac(o,e)))),void s.Fl.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await Wl(s.localStore,r.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(r.targetId),t&&BB(s.remoteStore,r.targetId),Xl(s,r.targetId)})).catch(br)):(Xl(s,r.targetId),await Wl(s.localStore,r.targetId,!0))}async function CS(n,e){const t=ae(n),s=t.Fl.get(e),r=t.Ol.get(s.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),BB(t.remoteStore,s.targetId))}async function pS(n,e,t){const s=wS(n);try{const r=await(function(o,a){const l=ae(o),u=me.now(),h=a.reduce(((D,y)=>D.add(y.key)),Be());let d,p;return l.persistence.runTransaction("Locally write mutations","readwrite",(D=>{let y=gt(),R=Be();return l.iu.getEntries(D,h).next((F=>{y=F,y.forEach(((G,K)=>{K.isValidDocument()||(R=R.add(G))}))})).next((()=>l.localDocuments.getOverlayedDocuments(D,y))).next((F=>{d=F;const G=[];for(const K of a){const se=eA(K,d.get(K.key).overlayedDocument);se!=null&&G.push(new $s(K.key,se,Eg(se.value.mapValue),En.exists(!0)))}return l.mutationQueue.addMutationBatch(D,u,G,a)})).next((F=>{p=F;const G=F.applyToLocalDocumentSet(d,R);return l.documentOverlayCache.saveOverlays(D,F.batchId,G)}))})).then((()=>({batchId:p.batchId,changes:Gg(d)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),(function(o,a,l){let u=o.$l[o.currentUser.toKey()];u||(u=new Ie(ue)),u=u.insert(a,l),o.$l[o.currentUser.toKey()]=u})(s,r.batchId,t),await so(s,r.changes),await uc(s.remoteStore)}catch(r){const i=pB(r,"Failed to persist write");t.reject(i)}}async function $m(n,e){const t=ae(n);try{const s=await FR(t.localStore,e);e.targetChanges.forEach(((r,i)=>{const o=t.Bl.get(i);o&&(W(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?o.Dl=!0:r.modifiedDocuments.size>0?W(o.Dl,14607):r.removedDocuments.size>0&&(W(o.Dl,42227),o.Dl=!1))})),await so(t,s,e)}catch(s){await br(s)}}function Kd(n,e,t){const s=ae(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.Fl.forEach(((i,o)=>{const a=o.view.Yc(e);a.snapshot&&r.push(a.snapshot)})),(function(o,a){const l=ae(o);l.onlineState=a;let u=!1;l.queries.forEach(((h,d)=>{for(const p of d.jc)p.Yc(a)&&(u=!0)})),u&&gB(l)})(s.eventManager,e),r.length&&s.Cl.gr(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function gS(n,e,t){const s=ae(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.Bl.get(e),i=r&&r.key;if(i){let o=new Ie(Y.comparator);o=o.insert(i,rt.newNoDocument(i,oe.min()));const a=Be().add(i),l=new Xi(oe.min(),new Map,new Ie(ue),o,gt(),a);await $m(s,l),s.Nl=s.Nl.remove(i),s.Bl.delete(e),EB(s)}else await Wl(s.localStore,e,!1).then((()=>Xl(s,e,t))).catch(br)}async function mS(n,e){const t=ae(n),s=e.batch.batchId;try{const r=await NR(t.localStore,e);qm(t,s,null),jm(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await so(t,r)}catch(r){await br(r)}}async function ES(n,e,t){const s=ae(n);try{const r=await(function(o,a){const l=ae(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let h;return l.mutationQueue.lookupMutationBatch(u,a).next((d=>(W(d!==null,37113),h=d.keys(),l.mutationQueue.removeMutationBatch(u,d)))).next((()=>l.mutationQueue.performConsistencyCheck(u))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,a))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h))).next((()=>l.localDocuments.getDocuments(u,h)))}))})(s.localStore,e);qm(s,e,t),jm(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await so(s,r)}catch(r){await br(r)}}function jm(n,e){(n.Ul.get(e)||[]).forEach((t=>{t.resolve()})),n.Ul.delete(e)}function qm(n,e,t){const s=ae(n);let r=s.$l[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),s.$l[s.currentUser.toKey()]=r}}function Xl(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Ol.get(e))n.Fl.delete(s),t&&n.Cl.Kl(s,t);n.Ol.delete(e),n.isPrimaryClient&&n.Ll.fo(e).forEach((s=>{n.Ll.containsKey(s)||Jm(n,s)}))}function Jm(n,e){n.Ml.delete(e.path.canonicalString());const t=n.Nl.get(e);t!==null&&(BB(n.remoteStore,t),n.Nl=n.Nl.remove(e),n.Bl.delete(t),EB(n))}function zd(n,e,t){for(const s of t)s instanceof Gm?(n.Ll.addReference(s.key,e),_S(n,s)):s instanceof Um?(J(mB,"Document no longer in limbo: "+s.key),n.Ll.removeReference(s.key,e),n.Ll.containsKey(s.key)||Jm(n,s.key)):X(19791,{Wl:s})}function _S(n,e){const t=e.key,s=t.path.canonicalString();n.Nl.get(t)||n.Ml.has(s)||(J(mB,"New document in limbo: "+t),n.Ml.add(s),EB(n))}function EB(n){for(;n.Ml.size>0&&n.Nl.size<n.maxConcurrentLimboResolutions;){const e=n.Ml.values().next().value;n.Ml.delete(e);const t=new Y(ge.fromString(e)),s=n.kl.next();n.Bl.set(s,new lS(t)),n.Nl=n.Nl.insert(t,s),Fm(n.remoteStore,new mn(tn(kg(t.path)),s,"TargetPurposeLimboResolution",Za.Br))}}async function so(n,e,t){const s=ae(n),r=[],i=[],o=[];s.Fl.isEmpty()||(s.Fl.forEach(((a,l)=>{o.push(s.ql(l,e,t).then((u=>{if((u||t)&&s.isPrimaryClient){const h=u?!u.fromCache:t?.targetChanges.get(l.targetId)?.current;s.sharedClientState.updateQueryState(l.targetId,h?"current":"not-current")}if(u){r.push(u);const h=lB.ka(l.targetId,u);i.push(h)}})))})),await Promise.all(o),s.Cl.gr(r),await(async function(l,u){const h=ae(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",(d=>M.forEach(u,(p=>M.forEach(p.$a,(D=>h.persistence.referenceDelegate.addReference(d,p.targetId,D))).next((()=>M.forEach(p.Ua,(D=>h.persistence.referenceDelegate.removeReference(d,p.targetId,D)))))))))}catch(d){if(!Rr(d))throw d;J(uB,"Failed to update sequence numbers: "+d)}for(const d of u){const p=d.targetId;if(!d.fromCache){const D=h.tu.get(p),y=D.snapshotVersion,R=D.withLastLimboFreeSnapshotVersion(y);h.tu=h.tu.insert(p,R)}}})(s.localStore,i))}async function DS(n,e){const t=ae(n);if(!t.currentUser.isEqual(e)){J(mB,"User change. New user:",e.toKey());const s=await Pm(t.localStore,e);t.currentUser=e,(function(i,o){i.Ul.forEach((a=>{a.forEach((l=>{l.reject(new $(x.CANCELLED,o))}))})),i.Ul.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await so(t,s._u)}}function yS(n,e){const t=ae(n),s=t.Bl.get(e);if(s&&s.Dl)return Be().add(s.key);{let r=Be();const i=t.Ol.get(e);if(!i)return r;for(const o of i??[]){const a=t.Fl.get(o);r=r.unionWith(a.view.Al)}return r}}function Km(n){const e=ae(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=$m.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=yS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=gS.bind(null,e),e.Cl.gr=rS.bind(null,e.eventManager),e.Cl.Kl=iS.bind(null,e.eventManager),e}function wS(n){const e=ae(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=mS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ES.bind(null,e),e}class Na{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Xa(e.databaseInfo.databaseId),this.sharedClientState=this.jl(e),this.persistence=this.zl(e),await this.persistence.start(),this.localStore=this.Hl(e),this.gcScheduler=this.Jl(e,this.localStore),this.indexBackfillerScheduler=this.Yl(e,this.localStore)}Jl(e,t){return null}Yl(e,t){return null}Hl(e){return PR(this.persistence,new RR,e.initialUser,this.serializer)}zl(e){return new Om(cB.Ho,this.serializer)}jl(e){return new ZR}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Na.provider={build:()=>new Na};class IS extends Na{constructor(e){super(),this.cacheSizeBytes=e}Jl(e,t){W(this.persistence.referenceDelegate instanceof Oa,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new mv(s,e.asyncQueue,t)}zl(e){const t=this.cacheSizeBytes!==void 0?Ct.withCacheSize(this.cacheSizeBytes):Ct.DEFAULT;return new Om((s=>Oa.Ho(s,t)),this.serializer)}}class Zl{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Kd(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=DS.bind(null,this.syncEngine),await QR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new tS})()}createDatastore(e){const t=Xa(e.databaseInfo.databaseId),s=iv(e.databaseInfo);return uv(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,r,i,o,a){return new GR(s,r,i,o,a)})(this.localStore,this.datastore,e.asyncQueue,(t=>Kd(this.syncEngine,t,0)),(function(){return Od.cn()?new Od:new tv})())}createSyncEngine(e,t){return(function(r,i,o,a,l,u,h){const d=new uS(r,i,o,a,l,u);return h&&(d.Ql=!0),d})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const s=ae(t);J(cn,"RemoteStore shutting down."),s.xu.add(5),await no(s),s.Du.shutdown(),s.Cu.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Zl.provider={build:()=>new Zl};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs="FirestoreClient";class TS{constructor(e,t,s,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this._databaseInfo=r,this.user=st.UNAUTHENTICATED,this.clientId=Su.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,(async o=>{J(cs,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(s,(o=>(J(cs,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Jn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=pB(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function cl(n,e){n.asyncQueue.verifyOperationInProgress(),J(cs,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async r=>{s.isEqual(r)||(await Pm(e.localStore,r),s=r)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Wd(n,e){n.asyncQueue.verifyOperationInProgress();const t=await AS(n);J(cs,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>$d(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,r)=>$d(e.remoteStore,r))),n._onlineComponents=e}async function AS(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){J(cs,"Using user provided OfflineComponentProvider");try{await cl(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(r){return r.name==="FirebaseError"?r.code===x.FAILED_PRECONDITION||r.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11})(t))throw t;jt("Error using user provided cache. Falling back to memory cache: "+t),await cl(n,new Na)}}else J(cs,"Using default OfflineComponentProvider"),await cl(n,new IS(void 0));return n._offlineComponents}async function zm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(J(cs,"Using user provided OnlineComponentProvider"),await Wd(n,n._uninitializedComponentsProvider._online)):(J(cs,"Using default OnlineComponentProvider"),await Wd(n,new Zl))),n._onlineComponents}function vS(n){return zm(n).then((e=>e.syncEngine))}async function bS(n){const e=await zm(n),t=e.eventManager;return t.onListen=BS.bind(null,e.syncEngine),t.onUnlisten=dS.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=hS.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=CS.bind(null,e.syncEngine),t}function RS(n,e,t={}){const s=new Jn;return n.asyncQueue.enqueueAndForget((async()=>(function(i,o,a,l,u){const h=new XR({next:p=>{h.Bu(),o.enqueueAndForget((()=>sS(i,d))),p.fromCache&&l.source==="server"?u.reject(new $(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new oS(a instanceof Ci?iR(a):a,h,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return nS(i,d)})(await bS(n),n.asyncQueue,e,t,s))),s.promise}function SS(n,e){const t=new Jn;return n.asyncQueue.enqueueAndForget((async()=>pS(await vS(n),e,t))),t.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wm=class{constructor(e,t,s,r,i){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ge(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new OS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(e){if(this._document){const t=this._document.data.field(eo("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},OS=class extends Wm{data(){return super.data()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{convertValue(e,t="none"){switch(Le(e)){case 0:return null;case 2:return e.booleanValue;case 3:if("mapValue"in e){if(ns(e))return this.convertToInt32Value(e.mapValue);if(Mt(e))return this.convertToDecimal128Value(e.mapValue)}return be(e.integerValue||e.doubleValue);case 4:return this.convertTimestamp(e.timestampValue);case 6:return this.convertServerTimestamp(e,t);case 7:return e.stringValue;case 8:return"bytesValue"in e?this.convertBytes(Ls(e.bytesValue)):this.convertToBytesWithSubtype(e.mapValue);case 9:return this.convertReference(e.referenceValue);case 11:return this.convertGeoPoint(e.geoPointValue);case 13:return this.convertArray(e.arrayValue,t);case 15:return this.convertObject(e.mapValue,t);case 14:return this.convertVectorValue(e.mapValue);case 12:return this.convertToRegexValue(e.mapValue);case 10:return this.convertToBsonObjectId(e.mapValue);case 5:return this.convertToBsonTimestamp(e.mapValue);case 16:return Cn.instance();case 1:return pn.instance();default:throw X(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Us(e,((r,i)=>{s[r]=this.convertValue(i,t)})),s}convertVectorValue(e){const t=e.fields?.[Ti].arrayValue?.values?.map((s=>be(s.doubleValue)));return new mt(t)}convertToBsonObjectId(e){const t=e.fields?.[Ai]?.stringValue??"";return new Hu(t)}convertToBytesWithSubtype(e){const t=e.fields?.[Ka],s=t?.bytesValue;if(!s)throw new Error("Received incorrect bytesValue for Bytes with subtype");const r=Ls(s).toUint8Array();if(r.length===0)throw new Error("Received empty bytesValue for Bytes with subtype");const i=r[0],o=r.slice(1);return new Tt(Ae.fromUint8Array(o),i)}convertToBsonTimestamp(e){const t=e.fields?.[Ts],s=Number(t?.mapValue?.fields?.[Ea]?.integerValue),r=Number(t?.mapValue?.fields?.[_a]?.integerValue);return new $u(s,r)}convertToRegexValue(e){const t=e.fields?.[Hn]?.mapValue?.fields?.[ga]?.stringValue??"",s=e.fields?.[Hn]?.mapValue?.fields?.[ma]?.stringValue??"";return new Ku(t,s)}convertToInt32Value(e){const t=Number(e.fields?.[Hs]?.integerValue);return new Ju(t)}convertToDecimal128Value(e){const t=e.fields?.[ts]?.stringValue??"";return new ju(t)}convertGeoPoint(e){return new sn(be(e.latitude),be(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Yi(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(gr(e));default:return null}}convertTimestamp(e){const t=es(e);return new me(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=ge.fromString(e);W(Wg(s),9688,{name:e});const r=new wi(s.get(1),s.get(3)),i=new Y(s.popFirst(5));return r.isEqual(t)||wn(`A document reference to ${i} refers to a different database (${r.projectId}/${r.database}), which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NS(n,e,t){let s;return s=n?n.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd="AsyncQueue";class Qd{constructor(e=Promise.resolve()){this._E=[],this.oE=!1,this.aE=[],this.uE=null,this.cE=!1,this.lE=!1,this.EE=[],this._r=new em(this,"async_queue_retry"),this.hE=()=>{const s=al();s&&J(Yd,"Visibility state changed to "+s.visibilityState),this._r.Xn()},this.TE=e;const t=al();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hE)}get isShuttingDown(){return this.oE}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.PE(),this.IE(e)}enterRestrictedMode(e){if(!this.oE){this.oE=!0,this.lE=e||!1;const t=al();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.hE)}}enqueue(e){if(this.PE(),this.oE)return new Promise((()=>{}));const t=new Jn;return this.IE((()=>this.oE&&this.lE?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this._E.push(e),this.RE())))}async RE(){if(this._E.length!==0){try{await this._E[0](),this._E.shift(),this._r.reset()}catch(e){if(!Rr(e))throw e;J(Yd,"Operation failed with retryable error: "+e)}this._E.length>0&&this._r.Yn((()=>this.RE()))}}IE(e){const t=this.TE.then((()=>(this.cE=!0,e().catch((s=>{throw this.uE=s,this.cE=!1,wn("INTERNAL UNHANDLED ERROR: ",Xd(s)),s})).then((s=>(this.cE=!1,s))))));return this.TE=t,t}enqueueAfterDelay(e,t,s){this.PE(),this.EE.indexOf(e)>-1&&(t=0);const r=CB.createAndSchedule(this,e,t,s,(i=>this.AE(i)));return this.aE.push(r),r}PE(){this.uE&&X(47125,{VE:Xd(this.uE)})}verifyOperationInProgress(){}async dE(){let e;do e=this.TE,await e;while(e!==this.TE)}fE(e){for(const t of this.aE)if(t.timerId===e)return!0;return!1}mE(e){return this.dE().then((()=>{this.aE.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.aE)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.dE()}))}pE(e){this.EE.push(e)}AE(e){const t=this.aE.indexOf(e);this.aE.splice(t,1)}}function Xd(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class _B extends ec{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new Qd,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Qd(e),this._firestoreClient=void 0,await e}}}function FS(n,e){const t=typeof n=="object"?n:$i(),s=typeof n=="string"?n:pa,r=An(t,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=G_("firestore");i&&Dv(r,...i)}return r}function Ym(n){if(n._terminated)throw new $(x.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||LS(n),n._firestoreClient}function LS(n){const e=n._freezeSettings(),t=hv(n._databaseId,n._app?.options.appId||"",n._persistenceKey,n._app?.options.apiKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new TS(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(r){const i=r?._online.build();return{_offline:r?._offline.build(i),_online:i}})(n._componentsProvider))}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS extends PS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Tt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ge(this.firestore,null,t)}}class Go{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class fr extends Wm{constructor(e,t,s,r,i,o){super(e,t,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ta(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(eo("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new $(x.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=fr._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}fr._jsonSchemaVersion="firestore/documentSnapshot/1.0",fr._jsonSchema={type:Se("string",fr._jsonSchemaVersion),bundleSource:Se("string","DocumentSnapshot"),bundleName:Se("string"),bundle:Se("string")};class ta extends fr{data(e={}){return super.data(e)}}class dr{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Go(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new ta(this._firestore,this._userDataWriter,s.key,s,new Go(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new $(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map((a=>{Ve(r._snapshot.query)?zl(r._snapshot.query):Mu(r.query._query);const l=new ta(r._firestore,r._userDataWriter,a.doc.key,a.doc,new Go(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((a=>i||a.type!==3)).map((a=>{const l=new ta(r._firestore,r._userDataWriter,a.doc.key,a.doc,new Go(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:xS(a.type),doc:l,oldIndex:u,newIndex:h}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new $(x.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=dr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Su.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],r=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),s.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function xS(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X(61501,{type:n})}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dr._jsonSchemaVersion="firestore/querySnapshot/1.0",dr._jsonSchema={type:Se("string",dr._jsonSchemaVersion),bundleSource:Se("string","QuerySnapshot"),bundleName:Se("string"),bundle:Se("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MS(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new $(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class DB{}class yB extends DB{}function VS(n,e,...t){let s=[];e instanceof DB&&s.push(e),s=s.concat(t),(function(i){const o=i.filter((l=>l instanceof IB)).length,a=i.filter((l=>l instanceof wB)).length;if(o>1||o>0&&a>0)throw new $(x.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const r of s)n=r._apply(n);return n}class wB extends yB{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new wB(e,t,s)}_apply(e){const t=this._parse(e);return Qm(e._query,t),new us(e.firestore,e.converter,Ul(e._query,t))}_parse(e){const t=om(e.firestore);return(function(i,o,a,l,u,h,d){let p;if((function(R,F){if(typeof R=="number"&&isNaN(R)&&F!=="=="&&F!=="!="&&F!=="array-contains")throw new Error("Invalid query. You can only perform '==' and '!=' comparisons on NaN.");if(R===null&&F!=="=="&&F!=="!="&&F!=="array-contains")throw new Error("Invalid query. You can only perform '==' and '!=' comparisons on Null.")})(d,h),u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new $(x.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){eC(d,h);const y=[];for(const R of d)y.push(Zd(l,i,R));p={arrayValue:{values:y}}}else p=Zd(l,i,d)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||eC(d,h),p=vv(a,o,d,h==="in"||h==="not-in");return Pe.create(u,h,p)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class IB extends DB{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new IB(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:qt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(r,i){let o=r;const a=i.getFlattenedFilters();for(const l of a)Qm(o,l),o=Ul(o,l)})(e._query,t),new us(e.firestore,e.converter,Ul(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class TB extends yB{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new TB(e,t)}_apply(e){const t=(function(r,i,o){if(r.startAt!==null)throw new $(x.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new $(x.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ni(i,o)})(e._query,this._field,this._direction);return new us(e.firestore,e.converter,mA(e._query,t))}}function GS(n,e="asc"){const t=e,s=eo("orderBy",n);return TB._create(s,t)}class AB extends yB{constructor(e,t,s){super(),this.type=e,this._limit=t,this._limitType=s}static _create(e,t,s){return new AB(e,t,s)}_apply(e){return new us(e.firestore,e.converter,Aa(e._query,this._limit,this._limitType))}}function US(n){return H0("limit",n),AB._create("limit",n,"F")}function Zd(n,e,t){if(typeof(t=Fe(t))=="string"){if(t==="")throw new $(x.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!xg(e)&&t.indexOf("/")!==-1)throw new $(x.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(ge.fromString(t));if(!Y.isDocumentKey(s))throw new $(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Cd(n,new Y(s))}if(t instanceof Ge)return Cd(n,t._key);throw new $(x.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${qa(t)}.`)}function eC(n,e){if(!Array.isArray(n)||n.length===0)throw new $(x.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Qm(n,e){const t=(function(r,i){for(const o of r)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null})(n.filters,(function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new $(x.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(x.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function HS(n){n=Ca(n,us);const e=Ca(n.firestore,_B),t=Ym(e),s=new kS(e);return MS(n._query),RS(t,n._query).then((r=>new dr(e,s,n,r)))}function $S(n,e){const t=Ca(n.firestore,_B),s=yv(n),r=NS(n.converter,e),i=om(n.firestore);return jS(t,[Av(i,"addDoc",s._key,r,n.converter!==null,{}).toMutation(s._key,En.exists(!1))]).then((()=>s))}function jS(n,e){const t=Ym(n);return SS(t,e)}const tC="@firebase/firestore",nC="4.20.0";(function(e,t=!0){L0(Xn),kt(new Rt("firestore",((s,{instanceIdentifier:r,options:i})=>{const o=s.getProvider("app").getImmediate(),a=new _B(new QA(s.getProvider("auth-internal")),new ev(o,s.getProvider("app-check-internal")),q0(o,r),o);return i={useFetchStreams:t,...i},a._setSettings(i),a}),"PUBLIC").setMultipleInstances(!0)),Bt(tC,nC,e),Bt(tC,nC,"esm2020")})();const Xm="labels",Zm=n=>FS(n.app);async function qS(n,e){const t=R_(e);await $S(rm(Zm(n),Xm),{...t,readAt:t.readAt,savedAt:Date.now()})}async function eE(n,e=40){return(await HS(VS(rm(Zm(n),Xm),GS("readAt","desc"),US(e)))).docs.map(s=>({...s.data(),id:s.id}))}const tE="@firebase/installations",vB="0.6.24";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE=1e4,sE=`w:${vB}`,rE="FIS_v2",JS="https://firebaseinstallations.googleapis.com/v1",KS=3600*1e3,zS="installations",WS="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YS={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},xs=new ls(zS,WS,YS);function iE(n){return n instanceof St&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oE({projectId:n}){return`${JS}/projects/${n}/installations`}function aE(n){return{token:n.token,requestStatus:2,expiresIn:XS(n.expiresIn),creationTime:Date.now()}}async function cE(n,e){const s=(await e.json()).error;return xs.create("request-failed",{requestName:n,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function lE({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function QS(n,{refreshToken:e}){const t=lE(n);return t.append("Authorization",ZS(e)),t}async function uE(n){const e=await n();return e.status>=500&&e.status<600?n():e}function XS(n){return Number(n.replace("s","000"))}function ZS(n){return`${rE} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eO({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const s=oE(n),r=lE(n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&r.append("x-firebase-client",u)}const o={fid:t,authVersion:rE,appId:n.appId,sdkVersion:sE},a={method:"POST",headers:r,body:JSON.stringify(o)},l=await uE(()=>fetch(s,a));if(l.ok){const u=await l.json();return{fid:u.fid||t,registrationStatus:2,refreshToken:u.refreshToken,authToken:aE(u.authToken)}}else throw await cE("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BE(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tO(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nO=/^[cdef][\w-]{21}$/,eu="";function sO(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=rO(n);return nO.test(t)?t:eu}catch{return eu}}function rO(n){return tO(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hE=new Map;function fE(n,e){const t=Bc(n);dE(t,e),iO(t,e)}function dE(n,e){const t=hE.get(n);if(t)for(const s of t)s(e)}function iO(n,e){const t=oO();t&&t.postMessage({key:n,fid:e}),aO()}let As=null;function oO(){return!As&&"BroadcastChannel"in self&&(As=new BroadcastChannel("[Firebase] FID Change"),As.onmessage=n=>{dE(n.data.key,n.data.fid)}),As}function aO(){hE.size===0&&As&&(As.close(),As=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cO="firebase-installations-database",lO=1,Ms="firebase-installations-store";let ll=null;function bB(){return ll||(ll=SC(cO,lO,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Ms)}}})),ll}async function Fa(n,e){const t=Bc(n),r=(await bB()).transaction(Ms,"readwrite"),i=r.objectStore(Ms),o=await i.get(t);return await i.put(e,t),await r.done,(!o||o.fid!==e.fid)&&fE(n,e.fid),e}async function CE(n){const e=Bc(n),s=(await bB()).transaction(Ms,"readwrite");await s.objectStore(Ms).delete(e),await s.done}async function hc(n,e){const t=Bc(n),r=(await bB()).transaction(Ms,"readwrite"),i=r.objectStore(Ms),o=await i.get(t),a=e(o);return a===void 0?await i.delete(t):await i.put(a,t),await r.done,a&&(!o||o.fid!==a.fid)&&fE(n,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RB(n){let e;const t=await hc(n.appConfig,s=>{const r=uO(s),i=BO(n,r);return e=i.registrationPromise,i.installationEntry});return t.fid===eu?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function uO(n){const e=n||{fid:sO(),registrationStatus:0};return pE(e)}function BO(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(xs.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=hO(n,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:fO(n)}:{installationEntry:e}}async function hO(n,e){try{const t=await eO(n,e);return Fa(n.appConfig,t)}catch(t){throw iE(t)&&t.customData.serverCode===409?await CE(n.appConfig):await Fa(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function fO(n){let e=await sC(n.appConfig);for(;e.registrationStatus===1;)await BE(100),e=await sC(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await RB(n);return s||t}return e}function sC(n){return hc(n,e=>{if(!e)throw xs.create("installation-not-found");return pE(e)})}function pE(n){return dO(n)?{fid:n.fid,registrationStatus:0}:n}function dO(n){return n.registrationStatus===1&&n.registrationTime+nE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CO({appConfig:n,heartbeatServiceProvider:e},t){const s=pO(n,t),r=QS(n,t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&r.append("x-firebase-client",u)}const o={installation:{sdkVersion:sE,appId:n.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},l=await uE(()=>fetch(s,a));if(l.ok){const u=await l.json();return aE(u)}else throw await cE("Generate Auth Token",l)}function pO(n,{fid:e}){return`${oE(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SB(n,e=!1){let t;const s=await hc(n.appConfig,i=>{if(!gE(i))throw xs.create("not-registered");const o=i.authToken;if(!e&&EO(o))return i;if(o.requestStatus===1)return t=gO(n,e),i;{if(!navigator.onLine)throw xs.create("app-offline");const a=DO(i);return t=mO(n,a),a}});return t?await t:s.authToken}async function gO(n,e){let t=await rC(n.appConfig);for(;t.authToken.requestStatus===1;)await BE(100),t=await rC(n.appConfig);const s=t.authToken;return s.requestStatus===0?SB(n,e):s}function rC(n){return hc(n,e=>{if(!gE(e))throw xs.create("not-registered");const t=e.authToken;return yO(t)?{...e,authToken:{requestStatus:0}}:e})}async function mO(n,e){try{const t=await CO(n,e),s={...e,authToken:t};return await Fa(n.appConfig,s),t}catch(t){if(iE(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await CE(n.appConfig);else{const s={...e,authToken:{requestStatus:0}};await Fa(n.appConfig,s)}throw t}}function gE(n){return n!==void 0&&n.registrationStatus===2}function EO(n){return n.requestStatus===2&&!_O(n)}function _O(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+KS}function DO(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function yO(n){return n.requestStatus===1&&n.requestTime+nE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wO(n){const e=n,{installationEntry:t,registrationPromise:s}=await RB(e);return s?s.catch(console.error):SB(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IO(n,e=!1){const t=n;return await TO(t),(await SB(t,e)).token}async function TO(n){const{registrationPromise:e}=await RB(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AO(n){if(!n||!n.options)throw ul("App Configuration");if(!n.name)throw ul("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw ul(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function ul(n){return xs.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE="installations",vO="installations-internal",bO=n=>{const e=n.getProvider("app").getImmediate(),t=AO(e),s=An(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},RO=n=>{const e=n.getProvider("app").getImmediate(),t=An(e,mE).getImmediate();return{getId:()=>wO(t),getToken:r=>IO(t,r)}};function SO(){kt(new Rt(mE,bO,"PUBLIC")),kt(new Rt(vO,RO,"PRIVATE"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */SO();Bt(tE,vB);Bt(tE,vB,"esm2020");const Bl="@firebase/remote-config",iC="0.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E="remote-config",oC=100;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OO={"already-initialized":"Remote Config already initialized","registration-window":"Undefined window object. This SDK only supports usage in a browser environment.","registration-project-id":"Undefined project identifier. Check Firebase app initialization.","registration-api-key":"Undefined API key. Check Firebase app initialization.","registration-app-id":"Undefined app identifier. Check Firebase app initialization.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}.","fetch-client-network":"Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-timeout":'The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.',"fetch-throttle":'The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',"fetch-client-parse":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","indexed-db-unavailable":"Indexed DB is not supported by current browser","custom-signal-max-allowed-signals":"Setting more than {$maxSignals} custom signals is not supported.","stream-error":"The stream was not able to connect to the backend: {$originalErrorMessage}.","realtime-unavailable":"The Realtime service is unavailable: {$originalErrorMessage}","update-message-invalid":"The stream invalidation message was unparsable: {$originalErrorMessage}","update-not-fetched":"Unable to fetch the latest config: {$originalErrorMessage}","analytics-unavailable":"Connection to Firebase Analytics failed: {$originalErrorMessage}"},Re=new ls("remoteconfig","Remote Config",OO);function PO(n,e){return n instanceof St&&n.code.indexOf(e)!==-1}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NO=!1,FO="",aC=0,LO=["1","true","t","yes","y","on"];class hl{constructor(e,t=FO){this._source=e,this._value=t}asString(){return this._value}asBoolean(){return this._source==="static"?NO:LO.indexOf(this._value.toLowerCase())>=0}asNumber(){if(this._source==="static")return aC;let e=Number(this._value);return isNaN(e)&&(e=aC),e}getSource(){return this._source}}class kO{constructor(e){this.storage=e._storage,this.logger=e._logger,this.analyticsProvider=e._analyticsProvider}async updateActiveExperiments(e){const t=await this.storage.getActiveExperiments()||new Set,s=this.createExperimentInfoMap(e);return this.addActiveExperiments(s),this.removeInactiveExperiments(t,s),this.storage.setActiveExperiments(new Set(s.keys()))}createExperimentInfoMap(e){const t=new Map;for(const s of e)t.set(s.experimentId,s);return t}addActiveExperiments(e){const t={};for(const[s,r]of e.entries())t[`firebase${s}`]=r.variantId;this.addExperimentToAnalytics(t)}removeInactiveExperiments(e,t){const s={};for(const r of e)t.has(r)||(s[`firebase${r}`]=null);this.addExperimentToAnalytics(s)}addExperimentToAnalytics(e){if(Object.keys(e).length!==0)try{const t=this.analyticsProvider.getImmediate({optional:!0});t?(t.setUserProperties(e),t.logEvent("set_firebase_experiment_state")):this.logger.warn("Analytics import failed. Verify if you have imported Firebase Analytics in your app code.")}catch(t){throw Re.create("analytics-unavailable",{originalErrorMessage:t?.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xO(n=$i(),e={}){n=Fe(n);const t=An(n,_E);if(t.isInitialized()){const r=t.getOptions();if(Qn(r,e))return t.getImmediate();throw Re.create("already-initialized")}t.initialize({options:e});const s=t.getImmediate();return e.initialFetchResponse&&(s._initializePromise=Promise.all([s._storage.setLastSuccessfulFetchResponse(e.initialFetchResponse),s._storage.setActiveConfigEtag(e.initialFetchResponse?.eTag||""),s._storage.setActiveConfigTemplateVersion(e.initialFetchResponse.templateVersion||0),s._storageCache.setLastSuccessfulFetchTimestampMillis(Date.now()),s._storageCache.setLastFetchStatus("success"),s._storageCache.setActiveConfig(e.initialFetchResponse?.config||{})]).then(),s._isInitializationComplete=!0),s}async function MO(n){const e=Fe(n),[t,s]=await Promise.all([e._storage.getLastSuccessfulFetchResponse(),e._storage.getActiveConfigEtag()]);if(!t||!t.config||!t.eTag||!t.templateVersion||t.eTag===s)return!1;const i=new kO(e).updateActiveExperiments(t.experiments||[]);return await Promise.all([e._storageCache.setActiveConfig(t.config),e._storage.setActiveConfigEtag(t.eTag),e._storage.setActiveConfigTemplateVersion(t.templateVersion),i]),!0}function VO(n){const e=Fe(n);return e._initializePromise||(e._initializePromise=e._storageCache.loadFromStorage().then(()=>{e._isInitializationComplete=!0})),e._initializePromise}async function GO(n){const e=Fe(n),t=new EE;setTimeout(async()=>{t.abort()},e.settings.fetchTimeoutMillis);const s=e._storageCache.getCustomSignals();s&&e._logger.debug(`Fetching config with custom signals: ${JSON.stringify(s)}`);try{await e._client.fetch({cacheMaxAgeMillis:e.settings.minimumFetchIntervalMillis,signal:t,customSignals:s}),await e._storageCache.setLastFetchStatus("success")}catch(r){const i=PO(r,"fetch-throttle")?"throttle":"failure";throw await e._storageCache.setLastFetchStatus(i),r}}function fl(n,e){const t=Fe(n);t._isInitializationComplete||t._logger.debug(`A value was requested for key "${e}" before SDK initialization completed. Await on ensureInitialized if the intent was to get a previously activated value.`);const s=t._storageCache.getActiveConfig();return s&&s[e]!==void 0?new hl("remote",s[e]):t.defaultConfig&&t.defaultConfig[e]!==void 0?new hl("default",String(t.defaultConfig[e])):(t._logger.debug(`Returning static value for key "${e}". Define a default or remote value if this is unintentional.`),new hl("static"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UO{constructor(e,t,s,r){this.client=e,this.storage=t,this.storageCache=s,this.logger=r}isCachedDataFresh(e,t){if(!t)return this.logger.debug("Config fetch cache check. Cache unpopulated."),!1;const s=Date.now()-t,r=s<=e;return this.logger.debug(`Config fetch cache check. Cache age millis: ${s}. Cache max age millis (minimumFetchIntervalMillis setting): ${e}. Is cache hit: ${r}.`),r}async fetch(e){const[t,s]=await Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(),this.storage.getLastSuccessfulFetchResponse()]);if(s&&this.isCachedDataFresh(e.cacheMaxAgeMillis,t))return s;e.eTag=s&&s.eTag;const r=await this.client.fetch(e),i=[this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())];return r.status===200&&i.push(this.storage.setLastSuccessfulFetchResponse(r)),await Promise.all(i),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HO(n=navigator){return n.languages&&n.languages[0]||n.language}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $O{constructor(e,t,s,r,i,o){this.firebaseInstallations=e,this.sdkVersion=t,this.namespace=s,this.projectId=r,this.apiKey=i,this.appId=o}async fetch(e){const[t,s]=await Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken()]),i=`${window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfig.googleapis.com"}/v1/projects/${this.projectId}/namespaces/${this.namespace}:fetch?key=${this.apiKey}`,o={"Content-Type":"application/json","Content-Encoding":"gzip","If-None-Match":e.eTag||"*"},a={sdk_version:this.sdkVersion,app_instance_id:t,app_instance_id_token:s,app_id:this.appId,language_code:HO(),custom_signals:e.customSignals},l={method:"POST",headers:o,body:JSON.stringify(a)},u=fetch(i,l),h=new Promise((se,pe)=>{e.signal.addEventListener(()=>{const ke=new Error("The operation was aborted.");ke.name="AbortError",pe(ke)})});let d;try{await Promise.race([u,h]),d=await u}catch(se){let pe="fetch-client-network";throw se?.name==="AbortError"&&(pe="fetch-timeout"),Re.create(pe,{originalErrorMessage:se?.message})}let p=d.status;const D=d.headers.get("ETag")||void 0;let y,R,F,G,K;if(d.status===200){let se;try{se=await d.json()}catch(pe){throw Re.create("fetch-client-parse",{originalErrorMessage:pe?.message})}y=se.entries,R=se.state,F=se.templateVersion,G=se.experimentDescriptions,K=se.rolloutMetadata}if(R==="INSTANCE_STATE_UNSPECIFIED"?p=500:R==="NO_CHANGE"?p=304:(R==="NO_TEMPLATE"||R==="EMPTY_CONFIG")&&(y={},G=[],K=[]),p!==304&&p!==200)throw Re.create("fetch-status",{httpStatus:p});return{status:p,eTag:D,config:y,templateVersion:F,experiments:G,rollouts:K}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jO(n,e){return new Promise((t,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(t,r);n.addEventListener(()=>{clearTimeout(i),s(Re.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function qO(n){if(!(n instanceof St)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class JO{constructor(e,t){this.client=e,this.storage=t}async fetch(e){const t=await this.storage.getThrottleMetadata()||{backoffCount:0,throttleEndTimeMillis:Date.now()};return this.attemptFetch(e,t)}async attemptFetch(e,{throttleEndTimeMillis:t,backoffCount:s}){await jO(e.signal,t);try{const r=await this.client.fetch(e);return await this.storage.deleteThrottleMetadata(),r}catch(r){if(!qO(r))throw r;const i={throttleEndTimeMillis:Date.now()+ru(s),backoffCount:s+1};return await this.storage.setThrottleMetadata(i),this.attemptFetch(e,i)}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KO=60*1e3,zO=720*60*1e3;class WO{get fetchTimeMillis(){return this._storageCache.getLastSuccessfulFetchTimestampMillis()||-1}get lastFetchStatus(){return this._storageCache.getLastFetchStatus()||"no-fetch-yet"}constructor(e,t,s,r,i,o,a){this.app=e,this._client=t,this._storageCache=s,this._storage=r,this._logger=i,this._realtimeHandler=o,this._analyticsProvider=a,this._isInitializationComplete=!1,this.settings={fetchTimeoutMillis:KO,minimumFetchIntervalMillis:zO},this.defaultConfig={}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(n,e){const t=n.target.error||void 0;return Re.create(e,{originalErrorMessage:t&&t?.message})}const Ln="app_namespace_store",YO="firebase_remote_config",QO=1;function XO(){return new Promise((n,e)=>{try{const t=indexedDB.open(YO,QO);t.onerror=s=>{e(na(s,"storage-open"))},t.onsuccess=s=>{n(s.target.result)},t.onupgradeneeded=s=>{const r=s.target.result;switch(s.oldVersion){case 0:r.createObjectStore(Ln,{keyPath:"compositeKey"})}}}catch(t){e(Re.create("storage-open",{originalErrorMessage:t?.message}))}})}class DE{getLastFetchStatus(){return this.get("last_fetch_status")}setLastFetchStatus(e){return this.set("last_fetch_status",e)}getLastSuccessfulFetchTimestampMillis(){return this.get("last_successful_fetch_timestamp_millis")}setLastSuccessfulFetchTimestampMillis(e){return this.set("last_successful_fetch_timestamp_millis",e)}getLastSuccessfulFetchResponse(){return this.get("last_successful_fetch_response")}setLastSuccessfulFetchResponse(e){return this.set("last_successful_fetch_response",e)}getActiveConfig(){return this.get("active_config")}setActiveConfig(e){return this.set("active_config",e)}getActiveConfigEtag(){return this.get("active_config_etag")}setActiveConfigEtag(e){return this.set("active_config_etag",e)}getActiveExperiments(){return this.get("active_experiments")}setActiveExperiments(e){return this.set("active_experiments",e)}getThrottleMetadata(){return this.get("throttle_metadata")}setThrottleMetadata(e){return this.set("throttle_metadata",e)}deleteThrottleMetadata(){return this.delete("throttle_metadata")}getCustomSignals(){return this.get("custom_signals")}getRealtimeBackoffMetadata(){return this.get("realtime_backoff_metadata")}setRealtimeBackoffMetadata(e){return this.set("realtime_backoff_metadata",e)}getActiveConfigTemplateVersion(){return this.get("last_known_template_version")}setActiveConfigTemplateVersion(e){return this.set("last_known_template_version",e)}}class ZO extends DE{constructor(e,t,s,r=XO()){super(),this.appId=e,this.appName=t,this.namespace=s,this.openDbPromise=r}async setCustomSignals(e){const s=(await this.openDbPromise).transaction([Ln],"readwrite"),r=await this.getWithTransaction("custom_signals",s),i=yE(e,r||{});return await this.setWithTransaction("custom_signals",i,s),i}async getWithTransaction(e,t){return new Promise((s,r)=>{const i=t.objectStore(Ln),o=this.createCompositeKey(e);try{const a=i.get(o);a.onerror=l=>{r(na(l,"storage-get"))},a.onsuccess=l=>{const u=l.target.result;s(u?u.value:void 0)}}catch(a){r(Re.create("storage-get",{originalErrorMessage:a?.message}))}})}async setWithTransaction(e,t,s){return new Promise((r,i)=>{const o=s.objectStore(Ln),a=this.createCompositeKey(e);try{const l=o.put({compositeKey:a,value:t});l.onerror=u=>{i(na(u,"storage-set"))},l.onsuccess=()=>{r()}}catch(l){i(Re.create("storage-set",{originalErrorMessage:l?.message}))}})}async get(e){const s=(await this.openDbPromise).transaction([Ln],"readonly");return this.getWithTransaction(e,s)}async set(e,t){const r=(await this.openDbPromise).transaction([Ln],"readwrite");return this.setWithTransaction(e,t,r)}async delete(e){const t=await this.openDbPromise;return new Promise((s,r)=>{const o=t.transaction([Ln],"readwrite").objectStore(Ln),a=this.createCompositeKey(e);try{const l=o.delete(a);l.onerror=u=>{r(na(u,"storage-delete"))},l.onsuccess=()=>{s()}}catch(l){r(Re.create("storage-delete",{originalErrorMessage:l?.message}))}})}createCompositeKey(e){return[this.appId,this.appName,this.namespace,e].join()}}class eP extends DE{constructor(){super(...arguments),this.storage={}}async get(e){return Promise.resolve(this.storage[e])}async set(e,t){return this.storage[e]=t,Promise.resolve(void 0)}async delete(e){return this.storage[e]=void 0,Promise.resolve()}async setCustomSignals(e){const t=this.storage.custom_signals||{};return this.storage.custom_signals=yE(e,t),Promise.resolve(this.storage.custom_signals)}}function yE(n,e){const t={...e,...n},s=Object.fromEntries(Object.entries(t).filter(([r,i])=>i!==null).map(([r,i])=>typeof i=="number"?[r,i.toString()]:[r,i]));if(Object.keys(s).length>oC)throw Re.create("custom-signal-max-allowed-signals",{maxSignals:oC});return s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{constructor(e){this.storage=e}getLastFetchStatus(){return this.lastFetchStatus}getLastSuccessfulFetchTimestampMillis(){return this.lastSuccessfulFetchTimestampMillis}getActiveConfig(){return this.activeConfig}getCustomSignals(){return this.customSignals}async loadFromStorage(){const e=this.storage.getLastFetchStatus(),t=this.storage.getLastSuccessfulFetchTimestampMillis(),s=this.storage.getActiveConfig(),r=this.storage.getCustomSignals(),i=await e;i&&(this.lastFetchStatus=i);const o=await t;o&&(this.lastSuccessfulFetchTimestampMillis=o);const a=await s;a&&(this.activeConfig=a);const l=await r;l&&(this.customSignals=l)}setLastFetchStatus(e){return this.lastFetchStatus=e,this.storage.setLastFetchStatus(e)}setLastSuccessfulFetchTimestampMillis(e){return this.lastSuccessfulFetchTimestampMillis=e,this.storage.setLastSuccessfulFetchTimestampMillis(e)}setActiveConfig(e){return this.activeConfig=e,this.storage.setActiveConfig(e)}async setCustomSignals(e){this.customSignals=await this.storage.setCustomSignals(e)}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(e){this.allowedEvents_=e,this.listeners_={},ml(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let r=0;r<s.length;r++)s[r].callback.apply(s[r].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const r=this.getInitialEvent(e);r&&t.apply(s,r)}off(e,t,s){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===t&&(!s||s===r[i].context)){r.splice(i,1);return}}validateEventType_(e){ml(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OB extends nP{static getInstance(){return new OB}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return ml(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sP="X-Goog-Api-Key",rP="X-Goog-Firebase-Installations-Auth",dl=8,cC=3,lC=-1,uC=0,BC="featureDisabled",hC="retryIntervalSeconds",fC="latestTemplateVersionNumber",iP="_exp_rollout";class oP{constructor(e,t,s,r,i,o,a,l,u,h){this.firebaseInstallations=e,this.storage=t,this.sdkVersion=s,this.namespace=r,this.projectId=i,this.apiKey=o,this.appId=a,this.logger=l,this.storageCache=u,this.cachingClient=h,this.observers=new Set,this.isConnectionActive=!1,this.isRealtimeDisabled=!1,this.httpRetriesRemaining=dl,this.isInBackground=!1,this.decoder=new TextDecoder("utf-8"),this.isClosingConnection=!1,this.propagateError=d=>this.observers.forEach(p=>p.error?.(d)),this.isStatusCodeRetryable=d=>!d||[408,429,502,503,504].includes(d),this.setRetriesRemaining(),OB.getInstance().on("visible",this.onVisibilityChange,this)}async setRetriesRemaining(){const t=(await this.storage.getRealtimeBackoffMetadata())?.numFailedStreams||0;this.httpRetriesRemaining=Math.max(dl-t,1)}async updateBackoffMetadataWithLastFailedStreamConnectionTime(e){const t=((await this.storage.getRealtimeBackoffMetadata())?.numFailedStreams||0)+1,s=ru(t,6e4,2);await this.storage.setRealtimeBackoffMetadata({backoffEndTimeMillis:new Date(e.getTime()+s),numFailedStreams:t})}async updateBackoffMetadataWithRetryInterval(e){const t=Date.now(),s=e*1e3,r=new Date(t+s);await this.storage.setRealtimeBackoffMetadata({backoffEndTimeMillis:r,numFailedStreams:0}),await this.retryHttpConnectionWhenBackoffEnds()}async closeRealtimeHttpConnection(){if(!this.isClosingConnection){this.isClosingConnection=!0;try{this.reader&&await this.reader.cancel()}catch{this.logger.debug("Failed to cancel the reader, connection was lost.")}finally{this.reader=void 0}this.controller&&(await this.controller.abort(),this.controller=void 0),this.isClosingConnection=!1}}async resetRealtimeBackoff(){await this.storage.setRealtimeBackoffMetadata({backoffEndTimeMillis:new Date(-1),numFailedStreams:0})}resetRetryCount(){this.httpRetriesRemaining=dl}async establishRealtimeConnection(e,t,s,r){const i=await this.storage.getActiveConfigEtag(),o=await this.storage.getActiveConfigTemplateVersion(),a={[sP]:this.apiKey,[rP]:s,"Content-Type":"application/json",Accept:"application/json","If-None-Match":i||"*","Content-Encoding":"gzip"},l={project:this.projectId,namespace:this.namespace,lastKnownVersionNumber:o,appId:this.appId,sdkVersion:this.sdkVersion,appInstanceId:t};return await fetch(e,{method:"POST",headers:a,body:JSON.stringify(l),signal:r})}getRealtimeUrl(){const t=`${window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfigrealtime.googleapis.com"}/v1/projects/${this.projectId}/namespaces/${this.namespace}:streamFetchInvalidations?key=${this.apiKey}`;return new URL(t)}async createRealtimeConnection(){const[e,t]=await Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken(!1)]);this.controller=new AbortController;const s=this.getRealtimeUrl();return await this.establishRealtimeConnection(s,e,t,this.controller.signal)}async retryHttpConnectionWhenBackoffEnds(){let e=await this.storage.getRealtimeBackoffMetadata();e||(e={backoffEndTimeMillis:new Date(lC),numFailedStreams:uC});const t=new Date(e.backoffEndTimeMillis).getTime(),s=Date.now(),r=Math.max(0,t-s);await this.makeRealtimeHttpConnection(r)}setIsHttpConnectionRunning(e){this.isConnectionActive=e}checkAndSetHttpConnectionFlagIfNotRunning(){const e=this.canEstablishStreamConnection();return e&&this.setIsHttpConnectionRunning(!0),e}fetchResponseIsUpToDate(e,t){return e.config!=null&&e.templateVersion?e.templateVersion>=t:this.storageCache.getLastFetchStatus()==="success"}parseAndValidateConfigUpdateMessage(e){const t=e.indexOf("{"),s=e.indexOf("}",t);return t<0||s<0||t>=s?"":e.substring(t,s+1)}isEventListenersEmpty(){return this.observers.size===0}getRandomInt(e){return Math.floor(Math.random()*e)}executeAllListenerCallbacks(e){this.observers.forEach(t=>t.next(e))}getChangedParams(e,t,s,r){const i=new Set,o=new Set(Object.keys(e||{})),a=new Set(Object.keys(t||{})),l=s.experiments||[],u=r?.experiments||[],h=this.createExperimentsMap(l),d=this.createExperimentsMap(u),p=s.rollouts||[],D=r?.rollouts||[],y=this.createRolloutsMap(p),R=this.createRolloutsMap(D);for(const F of o){if(!a.has(F)||e[F]!==t[F]){i.add(F);continue}if(h.has(F)!==d.has(F)){i.add(F);continue}const G=h.get(F),K=d.get(F);if(G&&K&&!this.areExperimentsEqual(G,K)){i.add(F);continue}if(y.has(F)!==R.has(F)){i.add(F);continue}const se=y.get(F),pe=R.get(F);se&&pe&&!this.areRolloutsEqual(se,pe)&&i.add(F)}for(const F of a)o.has(F)||i.add(F);return i}areExperimentsEqual(e,t){return e.experimentId===t.experimentId&&e.variantId===t.variantId&&e.timeToLiveMillis===t.timeToLiveMillis&&e.triggerTimeoutMillis===t.triggerTimeoutMillis}areRolloutsEqual(e,t){if(e.size!==t.size)return!1;for(const[s,r]of e)if(t.get(s)!==r)return!1;return!0}createExperimentsMap(e){const t=new Map;for(const s of e)if(!(!s.affectedParameterKeys||s.experimentId.startsWith(iP)))for(const r of s.affectedParameterKeys)t.set(r,s);return t}createRolloutsMap(e){const t=new Map;for(const s of e){const r=s.rolloutId,i=s.variantId,o=s.affectedParameterKeys||[];for(const a of o){let l=t.get(a);l||(l=new Map,t.set(a,l)),l.set(r,i)}}return t}async fetchLatestConfig(e,t){const s=e-1,r=cC-s,i=this.storageCache.getCustomSignals();i&&this.logger.debug(`Fetching config with custom signals: ${JSON.stringify(i)}`);const o=new EE;try{const a={cacheMaxAgeMillis:0,signal:o,customSignals:i,fetchType:"REALTIME",fetchAttempt:r},l=await this.storage.getLastSuccessfulFetchResponse(),u=await this.cachingClient.fetch(a);let h=await this.storage.getActiveConfig();if(!this.fetchResponseIsUpToDate(u,t)){this.logger.debug("Fetched template version is the same as SDK's current version. Retrying fetch."),await this.autoFetch(s,t);return}if(u.config==null){this.logger.debug("The fetch succeeded, but the backend had no updates.");return}h==null&&(h={});const d=this.getChangedParams(u.config,h,u,l);if(d.size===0){this.logger.debug("Config was fetched, but no params changed.");return}const p={getUpdatedKeys(){return new Set(d)}};this.executeAllListenerCallbacks(p)}catch(a){const l=a instanceof Error?a.message:String(a),u=Re.create("update-not-fetched",{originalErrorMessage:`Failed to auto-fetch config update: ${l}`});this.propagateError(u)}}async autoFetch(e,t){if(e===0){const i=Re.create("update-not-fetched",{originalErrorMessage:"Unable to fetch the latest version of the template."});this.propagateError(i);return}const r=this.getRandomInt(4)*1e3;await new Promise(i=>setTimeout(i,r)),await this.fetchLatestConfig(e,t)}async handleNotifications(e){let t,s="";for(;;){const{done:r,value:i}=await e.read();if(r)break;if(t=this.decoder.decode(i,{stream:!0}),s+=t,t.includes("}")){if(s=this.parseAndValidateConfigUpdateMessage(s),s.length===0)continue;try{const o=JSON.parse(s);if(this.isEventListenersEmpty())break;if(BC in o&&o[BC]===!0){const a=Re.create("realtime-unavailable",{originalErrorMessage:"The server is temporarily unavailable. Try again in a few minutes."});this.propagateError(a);break}if(fC in o){const a=await this.storage.getActiveConfigTemplateVersion(),l=Number(o[fC]);a&&l>a&&await this.autoFetch(cC,l)}if(hC in o){const a=Number(o[hC]);await this.updateBackoffMetadataWithRetryInterval(a)}}catch(o){this.logger.debug("Unable to parse latest config update message.",o);const a=o instanceof Error?o.message:String(o);this.propagateError(Re.create("update-message-invalid",{originalErrorMessage:a}))}s=""}}}async listenForNotifications(e){try{await this.handleNotifications(e)}catch{this.isInBackground||this.logger.debug("Real-time connection was closed due to an exception.")}}async prepareAndBeginRealtimeHttpStream(){if(!this.checkAndSetHttpConnectionFlagIfNotRunning())return;let e=await this.storage.getRealtimeBackoffMetadata();e||(e={backoffEndTimeMillis:new Date(lC),numFailedStreams:uC});const t=e.backoffEndTimeMillis.getTime();if(Date.now()<t){await this.retryHttpConnectionWhenBackoffEnds();return}let s,r;try{if(s=await this.createRealtimeConnection(),r=s.status,s.ok&&s.body){this.resetRetryCount(),await this.resetRealtimeBackoff();const i=s.body.getReader();this.reader=i,await this.listenForNotifications(i)}}catch(i){this.isInBackground?this.resetRetryCount():this.logger.debug("Exception connecting to real-time RC backend. Retrying the connection...:",i)}finally{const i=this.isInBackground;if(await this.closeRealtimeHttpConnection(),this.setIsHttpConnectionRunning(!1),!this.isInBackground)if(i)this.resetRetryCount(),await this.retryHttpConnectionWhenBackoffEnds();else{const o=r===void 0||this.isStatusCodeRetryable(r);if(o&&await this.updateBackoffMetadataWithLastFailedStreamConnectionTime(new Date),o||s?.ok)await this.retryHttpConnectionWhenBackoffEnds();else{const a=`Unable to connect to the server. HTTP status code: ${r}`,l=Re.create("stream-error",{originalErrorMessage:a});this.propagateError(l)}}}}canEstablishStreamConnection(){const e=this.observers.size>0,t=!this.isRealtimeDisabled,s=!this.isConnectionActive,r=!this.isInBackground;return e&&t&&s&&r}async makeRealtimeHttpConnection(e){if(this.canEstablishStreamConnection()){if(this.httpRetriesRemaining>0)this.httpRetriesRemaining--,await new Promise(t=>setTimeout(t,e)),this.prepareAndBeginRealtimeHttpStream();else if(!this.isInBackground){const t=Re.create("stream-error",{originalErrorMessage:"Unable to connect to the server. Check your connection and try again."});this.propagateError(t)}}}async beginRealtime(){this.observers.size>0&&await this.makeRealtimeHttpConnection(0)}addObserver(e){this.observers.add(e),this.beginRealtime()}removeObserver(e){this.observers.has(e)&&this.observers.delete(e)}async onVisibilityChange(e){this.isInBackground=!e,e?e&&await this.beginRealtime():await this.closeRealtimeHttpConnection()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aP(){kt(new Rt(_E,n,"PUBLIC").setMultipleInstances(!0)),Bt(Bl,iC),Bt(Bl,iC,"esm2020");function n(e,{options:t}){const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate(),i=e.getProvider("analytics-internal"),{projectId:o,apiKey:a,appId:l}=s.options;if(!o)throw Re.create("registration-project-id");if(!a)throw Re.create("registration-api-key");if(!l)throw Re.create("registration-app-id");const u=t?.templateId||"firebase",h=xa()?new ZO(l,s.name,u):new eP,d=new tP(h),p=new Ir(Bl);p.logLevel=he.ERROR;const D=new $O(r,Xn,u,o,a,l),y=new JO(D,h),R=new UO(y,h,d,p),F=new oP(r,h,Xn,u,o,a,l,p,d,R),G=new WO(s,R,d,h,p,F,i);return VO(G),G}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cP(n){return n=Fe(n),await GO(n),MO(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */aP();const wE=n=>({threshold:n,watched:[...EC],criticalField:_C,origin:"default"}),lP=n=>n.split(",").map(e=>e.trim()).filter(Boolean),uP=(n,e)=>{const t=Number(n);return Number.isFinite(t)&&t>=0&&t<=1?t:e};async function BP(n,e){const t=xO(n.app);t.settings.minimumFetchIntervalMillis=36e5;try{await cP(t);const s=lP(fl(t,"watchedCategories").asString());return{threshold:uP(fl(t,"cloudEscalationThreshold").asString(),e),watched:s.length>0?s:[...EC],criticalField:fl(t,"criticalField").asString()||_C,origin:"remote"}}catch{return wE(e)}}function fe(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function wr(n){const e=document.createElement("template");e.innerHTML=n.trim();const t=e.content.firstElementChild;if(!t)throw new Error("empty template");return t}function Yn(n){return n<=0?"—":n>=1e3?`${(n/1e3).toFixed(1)} s`:`${Math.round(n)} ms`}function Vs(n,e=!0){const t=e?{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}:{day:"2-digit",month:"short",year:"numeric"};return new Intl.DateTimeFormat("en-GB",t).format(new Date(n))}function ro(n){return n==="local"?'<span class="tag l">LOCAL</span>':'<span class="tag c">CLOUD</span>'}function PB(n,e,t="n"){const s=n===void 0?"":String(n).padStart(2,"0");return`<span class="tag ${t}">${s}${s?" ":""}${fe(e)}</span>`}const hP=n=>`<button class="ver" data-sample="${fe(n.id)}">
  <span class="tag n">${String(n.localCount).padStart(2,"0")} LOCAL</span>
  <b>${fe(n.productName)}</b>
  <small>${fe(n.netWeight)} · ${Vs(n.readAt,!1)} · ${n.cloudCount} cloud</small>
</button>`;function fP(n,e){const t=n.notice?`<div class="notice${n.mode==="demo"?" warn":""}">${fe(n.notice)}</div>`:"",s=n.lastError?`<div class="notice err">${fe(n.lastError)}</div>`:"",r=wr(`<main class="capture">
    <section class="studio short">
      <div class="beam"></div>
      <div class="hud hud-tl"><b>SCENE 02 · CAPTURE</b><i></i>photo read in memory<br>never uploaded to storage</div>
      <div class="hud hud-tr"><b>${n.mode==="live"?"GEMINI NANO":"DEMO MODE"}</b><i></i>
        ${n.mode==="live"?"hybrid ready":"no Firebase project"}<br>
        ${n.mode==="live"?"on device first":"sample labels only"}</div>
      <div class="dropwrap">
        <label class="drop" data-drop>
          <input type="file" accept="image/png,image/jpeg" data-file hidden>
          <span class="tag n">01 DROP A LABEL</span>
          <b>${n.busy?"Reading the label…":"Drop a JPEG or PNG, or click to choose"}</b>
          <small>the on-device model reads it first · only uncertain fields go to the cloud</small>
          ${n.busy?'<span class="skel c"></span>':""}
        </label>
      </div>
      <div class="hud hud-bl">photo not stored · text only · anonymous account, no e-mail</div>
      <div class="hud hud-br">scenes 02 · capture</div>
    </section>
    <section class="right">
      <div class="head">
        <div><h1 class="relief">Capture</h1>
        <div class="sub">${n.mode==="live"?"The photo stays in memory. Firestore keeps the extracted text only.":"Demo mode: the sample labels below were written by hand, no real photo."}</div></div>
      </div>
      ${t}${s}
      <div class="lbl">Demo labels · fictional packaging</div>
      <div class="stack samples">${n.samples.map(hP).join("")}</div>
      <div class="panel">
        <span class="lbl">What happens to the photo</span>
        <ol class="steps">
          <li><span class="tag l">LOCAL</span> Gemini Nano reads every field on this machine, no network.</li>
          <li><span class="tag c">CLOUD</span> only the fields below the escalation threshold are cross-checked.</li>
          <li><span class="tag n">STORE</span> the extracted text is saved, the photo is dropped.</li>
        </ol>
      </div>
    </section>
  </main>`),i=r.querySelector("[data-file]"),o=r.querySelector("[data-drop]");return i?.addEventListener("change",()=>{const a=i.files?.[0];a&&e.onFile(a)}),o?.addEventListener("dragover",a=>{a.preventDefault(),o.classList.add("over")}),o?.addEventListener("dragleave",()=>o.classList.remove("over")),o?.addEventListener("drop",a=>{a.preventDefault(),o.classList.remove("over");const l=a.dataTransfer?.files?.[0];l&&e.onFile(l)}),r}const dC=(n,e,t)=>{const s=t.map(r=>`<option value="${fe(r.id)}"${r.id===e.id?" selected":""}>
      ${fe(r.productName)} · ${Vs(r.readAt,!1)}</option>`).join("");return`<select class="pick" data-side="${n}">${s}</select>`},CC=(n,e)=>{const t=e==="a"?n.valueA:n.valueB,s=e==="a"?n.provenanceA:n.provenanceB;return`<div class="cv${n.changed?" chg":""}">
    <span class="cvv">${fe(t)}</span>
    ${s?ro(s):'<span class="tag w">—</span>'}
  </div>`},dP=(n,e)=>n?`<div class="crit">
    <div class="crithead"><span class="tag n">${fe(n.label)}</span>
      <span class="lbl">most critical field · from Remote Config</span>
      ${n.changed?'<span class="tag c">DIFFERENT</span>':'<span class="tag l">SAME</span>'}</div>
    <div class="critbody">
      <div><small>A</small><p>${fe(n.valueA)}</p></div>
      <div class="arrow">→</div>
      <div><small>B</small><p>${fe(n.valueB)}</p></div>
      <div class="delta">${DC(n.delta,e)}</div>
    </div>
  </div>`:"";function CP(n,e,t,s){const i=t.rows.filter(a=>a.key!==t.criticalKey).map(a=>`<div class="crow${a.category==="nutrition"?" nutrow":""}">
      <div class="cl"><span class="lbl">${fe(a.label)}</span>
        ${a.delta!==null?`<em>${DC(a.delta,"g")}</em>`:""}</div>
      ${CC(a,"a")}${CC(a,"b")}
    </div>`).join(""),o=wr(`<main class="compare">
    <section class="chead">
      <div class="cprod"><span class="lbl">A</span><h2>${fe(n.productName)}</h2>
        <div class="sub">${Vs(n.readAt)} · ${n.localCount} local / ${n.cloudCount} cloud · ${Yn(n.totalMs)}</div>
        ${dC("left",n,s.options)}</div>
      <div class="cprod"><span class="lbl">B</span><h2>${fe(e.productName)}</h2>
        <div class="sub">${Vs(e.readAt)} · ${e.localCount} local / ${e.cloudCount} cloud · ${Yn(e.totalMs)}</div>
        ${dC("right",e,s.options)}</div>
    </section>
    ${dP(t.critical,"g")}
    <div class="ctable">
      <div class="crow head"><div class="cl"><span class="lbl">Field</span></div>
        <div class="cv"><span class="lbl">A · ${fe(n.netWeight)}</span></div>
        <div class="cv"><span class="lbl">B · ${fe(e.netWeight)}</span></div></div>
      ${i}
    </div>
    <div class="cfoot">${t.changedCount} of ${t.sharedCount} fields differ ·
      ${Lt(n,t.criticalKey)?.provenance==="cloud"?"critical field cross-checked in the cloud":"critical field read on device"}</div>
  </main>`);return o.querySelectorAll("select[data-side]").forEach(a=>{a.addEventListener("change",()=>{const l=a.dataset.side==="left"?"left":"right";s.onPick(l,a.value)})}),o}const pP=(n,e)=>`<button
  class="ver${e?" on":""}" data-version="${fe(n.id)}">
  <span class="tag ${e?"n":"l"}">${e?"CURRENT":`${n.localCount} LOCAL`}</span>
  <b>${fe(n.productName)}</b>
  <small>${Vs(n.readAt)} · ${n.localCount} local / ${n.cloudCount} cloud</small>
  <span class="hbar mini"><i class="l" style="flex:${Math.max(1,n.localCount)}"></i><i class="c" style="flex:${Math.max(1,n.cloudCount)}"></i></span>
</button>`;function gP(n,e,t,s){const r=t.changes.map(o=>`<tr class="${o.changed?"chg":""}">
      <td class="k">${fe(o.label)}</td>
      <td class="b">${fe(o.before)}</td>
      <td class="a">→</td>
      <td class="b">${fe(o.after)}</td>
      <td class="p">${o.changed?'<span class="tag c">CHANGED</span>':'<span class="tag w">same</span>'}</td>
    </tr>`).join(""),i=wr(`<main class="history">
    <section class="hlist">
      <div class="blk"><span class="lbl">Versions of this label</span>
        <p class="sub">Text only: the photo is never stored, so a version is the extracted fields.</p></div>
      <div class="stack">${n.map(o=>pP(o,o.id===e.id)).join("")}</div>
    </section>
    <section class="hmain">
      <div class="head">
        <div><h1 class="relief">${fe(e.productName)}</h1>
          <div class="sub">Read ${Vs(e.readAt)} · ${ro(e.cloudCount>0?"cloud":"local")}
            ${e.localCount} local / ${e.cloudCount} cloud</div></div>
        <div class="count"><div><b>${t.changedCount}</b><span>changed</span></div>
          <div><b>${t.unchangedCount}</b><span>unchanged</span></div></div>
      </div>
      <div class="panel">
        <span class="lbl">What changed since the previous version</span>
        <table class="diff"><tbody>${r}</tbody></table>
      </div>
      <div class="cfoot">${n.length} version(s) · newest first · anonymous account, no e-mail</div>
    </section>
  </main>`);return i.querySelectorAll("[data-version]").forEach(o=>{o.addEventListener("click",()=>s.onPick(o.dataset.version??""))}),i}function mP(n){const e=Math.max(1,n.localCount+n.cloudCount),t=Math.max(1,n.localCount),s=Math.max(1,n.cloudCount),r=e-n.localCount-n.cloudCount,i=r>0?`<div class="w" style="flex:${r}"><b>${r}</b><span>waiting<br>not read yet</span></div>`:"";return['<div class="hbar">',`<div class="l" style="flex:${t}"><b class="relief-l">${n.localCount}</b>`,`<span>fields read on device<br>${n.deviceSource==="on_device"?"Gemini Nano":"cloud fallback"} · ${Yn(n.deviceMs)}</span></div>`,`<div class="c" style="flex:${s}"><b class="relief-c">${n.cloudCount}</b>`,`<span>cross-checked<br>cloud · ${Yn(n.cloudMs)}</span></div>`,i,"</div>",`<div class="hbarnote">${e} fields · total ${Yn(n.totalMs)} · photo not stored</div>`].join("")}const EP=n=>n.provenance==="cloud"&&n.reason?`<div class="why">${fe(n.reason)}</div>`:"";function pC(n,e){const t=Lt(e,n);return t?`<div class="fb${t.provenance==="cloud"?" cl":""}">
    <div class="fh">${PB(t.zone,"")}<span class="lbl">${fe(t.label)}</span>${ro(t.provenance)}</div>
    <p class="${n==="ingredients"?"ingr":"fv"}">${fe(t.value)}</p>
    ${EP(t)}</div>`:`<div class="fb wt">
      <div class="fh"><span class="tag w">${fe(n)}</span>
      <span class="lbl">not read</span><span class="tag w">READING</span></div>
      <span class="skel"></span></div>`}function _P(n){const e=Lt(n,"allergens"),t=n.traces.length>0?n.traces.join(", "):"none detected",s=e?.value??"not read on device";return`<div class="alg">
    <div class="fh">${PB(2,"")}<span class="lbl">Allergens · EU 14</span>
    ${e?`<span class="tag inv">${e.provenance.toUpperCase()}</span>`:'<span class="tag inv">READING</span>'}</div>
    <p>${fe(s)}</p>
    <div class="algtr">May contain: ${fe(t)}</div>
  </div>`}const gC=[["energy","kcal"],["fat","g"],["saturates","g"],["carbohydrate","g"],["sugars","g"],["fibre","g"],["protein","g"],["salt","g"]];function DP(n){const e=gC.map(([r])=>{const i=Lt(n,r),o=i?.label??r,a=r==="saturates"||r==="sugars"?" s":"",l=r==="energy"?' class="thick"':i?.provenance==="cloud"?' class="cl"':"",u=i?.numeric??"—";return`<tr${l}><td class="k${a}">${fe(o)}</td>
      <td class="v">${u}<small>${i?.unit??""}</small></td>
      <td class="p">${i?ro(i.provenance):'<span class="tag w">—</span>'}</td></tr>`}),s=gC.map(([r])=>Lt(n,r)).filter(r=>!!(r&&r.provenance==="cloud"&&r.reason)).map(r=>`<div class="why">${fe(r.label)} · ${fe(r.reason??"")}</div>`).join("");return`<div class="nut">
    <div class="nh">${PB(3,"","n")}<span class="lbl">Nutrition · per 100 g</span></div>
    <table>${e.join("")}</table></div>${s}`}const Cl=(n,e)=>{const t=n.split(/\s+/).filter(Boolean),s=[];let r="";for(const i of t){const o=`${r} ${i}`.trim();o.length>e&&r?(s.push(r),r=i):r=o}return r&&s.push(r),s.length>0?s:[""]},Gt=(n,e,t,s)=>`<text x="${n}" y="${e}" ${s}>${t}</text>`,yP=n=>{const e=n.cloud?"#e8833a":"#0f9d58",t=n.cloud?"url(#hatchSoft)":"rgba(15,157,88,.10)",s=n.cloud?' stroke-dasharray="5 4"':"",r=n.label.length*4.4+12;return[`<rect x="${n.x}" y="${n.y}" width="${n.w}" height="${n.h}" fill="${t}" stroke="${e}" stroke-width="1.6"${s}/>`,`<g transform="translate(${n.x},${n.y-14})">`,`<rect width="${r}" height="13" fill="${n.cloud?"#e8833a":"#0f9d58"}"/>`,Gt(5,9.6,n.label,`font-size="7.2" font-weight="700" letter-spacing=".5" fill="${n.cloud?"#1a1006":"#fff"}"`),"</g>"].join("")},pl=[["energy","Energy","kcal"],["fat","Fat","g"],["saturates","of which saturates","g"],["carbohydrate","Carbohydrate","g"],["sugars","of which sugars","g"],["fibre","Fibre","g"],["protein","Protein","g"],["salt","Salt","g"]];function wP(n){const e=[],t=[],s=u=>Lt(n,u)?.value??"",r=u=>Lt(n,u)?.provenance==="cloud";t.push('<rect width="400" height="560" rx="4" fill="#f2ede2"/>'),t.push(Gt(20,38,n.productName.toUpperCase().slice(0,26),'font-size="19" font-weight="700" fill="#2a2620"')),t.push(Gt(20,54,`${n.netWeight||"net weight not read"} · demo label`,'font-size="8.4" fill="#5a544a"')),t.push('<line x1="20" y1="64" x2="380" y2="64" stroke="#2a2620" stroke-width="1"/>');let i=76;const o=(u,h,d,p)=>{t.push(Gt(20,i+6,h,'font-size="6.6" font-weight="700" letter-spacing=".6" fill="#6a6459"'));const D=Cl(s(u),p).slice(0,6);D.forEach((R,F)=>{t.push(Gt(20,i+18+F*(d+2.4),R,`font-size="${d}" fill="#2a2620"`))});const y=22+D.length*(d+2.4);return e.push({key:u,label:h,x:14,y:i,w:372,h:y,cloud:r(u)}),i+y+18};i=o("ingredients","01 INGREDIENTS",8.2,70),i=o("allergens","02 CONTAINS",8.6,68),i=o("mayContain","03 MAY CONTAIN",8.6,68);const a=i;return t.push(`<rect x="16" y="${a}" width="368" height="${34+pl.length*17}" fill="none" stroke="#2a2620" stroke-width="1.3"/>`),t.push(Gt(24,a+14,"NUTRITION",'font-size="7" font-weight="700" fill="#2a2620"')),t.push(Gt(372,a+14,"per 100 g",'font-size="7" font-weight="700" text-anchor="end" fill="#2a2620"')),t.push(`<line x1="16" y1="${a+20}" x2="384" y2="${a+20}" stroke="#2a2620" stroke-width="1.8"/>`),pl.forEach(([u,h,d],p)=>{const D=a+34+p*17,y=h.startsWith("of which")?32:24;t.push(Gt(y,D,h,'font-size="8" fill="#2a2620"')),t.push(Gt(372,D,`${s(u)||"—"}`,'font-size="8" text-anchor="end" fill="#2a2620"')),u==="salt"&&e.push({key:u,label:"04 SALT",x:16,y:D-11,w:368,h:17,cloud:r(u)})}),e.push({key:"nutrition",label:"03 NUTRITION",x:16,y:a-2,w:368,h:22,cloud:!1}),i=a+34+pl.length*17+18,t.push(Gt(20,i+4,"WARNINGS · STORAGE · DATE",'font-size="6.6" font-weight="700" letter-spacing=".6" fill="#6a6459"')),[Cl(s("warnings"),72)[0]??"",Cl(s("storage"),72)[0]??"",`Best before end: ${s("bestBefore")||"—"}`].forEach((u,h)=>t.push(Gt(20,i+16+h*11,u,'font-size="8.2" fill="#2a2620"'))),e.push({key:"notes",label:"05 WARNINGS · 06 DATE",x:14,y:i,w:372,h:46,cloud:r("warnings")}),['<svg class="packface" viewBox="0 0 400 560" role="img" aria-label="Demo packaging label">','<defs><pattern id="hatchSoft" width="8" height="8" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">','<rect width="8" height="8" fill="rgba(232,131,58,.10)"/><rect width="4" height="8" fill="rgba(232,131,58,.34)"/>',"</pattern></defs>",t.join(""),e.map(yP).join(""),"</svg>"].join("")}const IP=n=>`<div class="fb"><div class="fh">
    <span class="tag n">05</span><span class="lbl">Warnings · storage · date</span></div>
    ${["warnings","storage","bestBefore"].map(t=>{const s=Lt(n,t);return s?`<div class="rowf"><span class="k">${fe(s.label)}</span>
        <span class="fv">${fe(s.value)}</span>
        <span class="p">${ro(s.provenance)}</span></div>`:""}).join("")}</div>`;function TP(n){const e=n.deviceSource==="on_device";return wr(`<main class="read">
    <section class="studio">
      <div class="beam"></div>
      <div class="hud hud-tl"><b>SCENE 01 · READ</b><i></i>photo not stored<br>text only · ${n.fields.length} fields</div>
      <div class="hud hud-tr"><b>${e?"GEMINI NANO":"CLOUD FALLBACK"}</b><i></i>
        ${e?"on this device":"no on-device model"} · ${Yn(n.deviceMs)}<br>
        ${n.localCount} / ${n.fields.length} fields</div>
      <div class="packwrap">${wP(n)}</div>
      <div class="plinth" data-cloud="${n.cloudCount>0}">
        <div class="body"></div><div class="top"><div class="ring"></div></div>
      </div>
      <div class="hud hud-bl">zones 01–06 · numbered read thread</div>
      <div class="hud hud-br">cloud cross-check · ${n.cloudCount} fields · ${Yn(n.cloudMs)}</div>
    </section>
    <section class="right">
      <div class="head">
        <div>
          <h1 class="relief">${fe(n.productName)}${n.netWeight?`<br>${fe(n.netWeight)}`:""}</h1>
          <div class="sub">Read ${Vs(n.readAt)} · ${n.fields.length} fields · total ${Yn(n.totalMs)}
            ${e?"":" · on-device model unavailable, cloud fallback"}</div>
        </div>
        <div class="actions">
          <button class="btn g" data-action="save">Save to history</button>
          <button class="btn" data-action="compare">Compare</button>
        </div>
      </div>
      ${mP(n)}
      <div class="cols">
        <div class="stack">
          ${_P(n)}
          ${pC("mayContain",n)}
          ${pC("ingredients",n)}
          ${IP(n)}
        </div>
        <div class="stack">
          ${DP(n)}
        </div>
      </div>
    </section>
  </main>`)}function AP(n){if(!n)return"no reading yet";const e=n.deviceSource==="on_device"?"device":"cloud fallback";return`${n.localCount} local · ${n.cloudCount} cloud · ${e}`}const IE=["read","capture","compare","history"],TE=()=>{const n=window.location.hash.replace(/^#\/?/,"");return IE.includes(n)?n:"read"},vP=()=>({services:null,settings:wE(mC().threshold),readings:[...ir],current:ir[0],route:TE(),leftId:ir[0].id,rightId:ir[1].id,busy:!1,notice:"",error:""}),bP={changes:[],changedCount:0,unchangedCount:0};function RP(n){const e=vP(),t=wr('<div class="view"></div>'),s=wr(`<header class="top">
    <div class="mark"><span class="logo"><i></i><i></i></span>Label Lens<small>v4</small></div>
    <nav>${IE.map(o=>`<a href="#/${o}" data-nav="${o}">${SP(o)}</a>`).join("")}</nav>
    <div class="engines" data-engines></div>
  </header>`);n.append(s,t);const r=()=>{e.route=TE(),OP(s,e),t.replaceChildren(FP(e,r))},i=o=>{Object.assign(e,o),r()};window.addEventListener("hashchange",r),PP(e,i),r(),NP(e,i)}const SP=n=>n==="read"?"Read":n==="capture"?"Capture":n==="compare"?"Compare":"History",OP=(n,e)=>{n.querySelectorAll("[data-nav]").forEach(r=>{r.classList.toggle("on",r.dataset.nav===e.route)});const t=n.querySelector("[data-engines]"),s=!!e.services;t&&(t.innerHTML=`<span><i class="dot l"></i>${s?"Gemini Nano · hybrid":"demo data · no project"}</span>
      <span><i class="dot c"></i>${s?e.settings.origin==="remote"?"cloud · remote config":"cloud · defaults":"cloud · not configured"}</span>
      <span class="mode">${AP(e.current)}</span>`)};async function PP(n,e){n.services=WT(),n.services&&e({settings:await BP(n.services,n.settings.threshold)})}async function NP(n,e){if(n.services)try{await QT(n.services);const s=[...await eE(n.services),...ir];e({readings:s,current:s[0]??n.current,leftId:s[0]?.id??n.leftId,rightId:s[1]?.id??n.rightId})}catch(t){e({notice:`Firebase signed out: ${String(t.message)} — demo labels only.`})}}const FP=(n,e)=>{const t=r=>{Object.assign(n,r),e()};if(n.route==="capture")return fP({mode:n.services?"live":"demo",busy:n.busy,notice:n.notice,lastError:n.error,samples:n.readings.slice(0,3)},{onSample:r=>{const i=n.readings.find(o=>o.id===r);i&&t({current:i,notice:""})},onFile:r=>void MP(n,r,t)});if(n.route==="compare")return LP(n,t);if(n.route==="history")return kP(n,t);const s=TP(n.current);return s.querySelector('[data-action="save"]')?.addEventListener("click",()=>void xP(n,t)),s.querySelector('[data-action="compare"]')?.addEventListener("click",()=>{const r=n.readings.find(i=>i.id!==n.current.id);t({leftId:n.current.id,rightId:r?.id??n.current.id}),window.location.hash="#/compare"}),s},LP=(n,e)=>{const t=n.readings.find(r=>r.id===n.leftId)??n.readings[0]??n.current,s=n.readings.find(r=>r.id===n.rightId)??n.readings[1]??t;return CP(t,s,d_(t,s,n.settings.criticalField),{options:n.readings,onPick:(r,i)=>e(r==="left"?{leftId:i}:{rightId:i})})},kP=(n,e)=>{const t=b_(n.readings.filter(a=>a.productKey===n.current.productKey)),s=t.find(a=>a.id===n.current.id)??t[0]??n.current,r=t.findIndex(a=>a.id===s.id),i=r>=0?t[r+1]:void 0,o=i?v_(i,s):bP;return gP(t.length>0?t:[s],s,o,{onPick:a=>{const l=n.readings.find(u=>u.id===a);l&&e({current:l})}})};async function xP(n,e){if(!n.services){const t={...n.current,id:`${n.current.id}-copy-${Date.now()}`,readAt:Date.now()};e({readings:[t,...n.readings],current:t,notice:"Saved in this session only: no Firebase project configured."});return}try{await qS(n.services,n.current);const t=await eE(n.services);e({readings:[...t,...ir],notice:"Saved: extracted text only, the photo was not kept."})}catch(t){e({error:`Save failed: ${String(t.message)}`})}}async function MP(n,e,t){if(!n.services){t({notice:"Demo mode: no Firebase project, so the photo is not read. Open a demo label below."});return}t({busy:!0,error:"",notice:"Reading on device first…"});try{const s=e0(await t0(e)),r=await a0(n.services.ai,s,{threshold:n.settings.threshold,watched:n.settings.watched,cloudModel:n.services.config.cloudModel}),i=r.deviceFallback?"On-device model unavailable: the cloud read every field (badges say CLOUD).":`${r.escalations.length} field(s) cross-checked in the cloud.`;t({busy:!1,readings:[r.reading,...n.readings],current:r.reading,notice:i}),window.location.hash="#/read"}catch(s){t({busy:!1,error:`Reading failed: ${String(s.message)}`})}}const AE=document.getElementById("app");if(!AE)throw new Error("#app is missing from index.html");RP(AE);
//# sourceMappingURL=index-CLHh9zno.js.map
