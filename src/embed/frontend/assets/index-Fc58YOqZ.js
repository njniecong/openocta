(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();const Yn=globalThis,Ba=Yn.ShadowRoot&&(Yn.ShadyCSS===void 0||Yn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ha=Symbol(),Yo=new WeakMap;let zl=class{constructor(t,n,s){if(this._$cssResult$=!0,s!==Ha)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(Ba&&t===void 0){const s=n!==void 0&&n.length===1;s&&(t=Yo.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Yo.set(n,t))}return t}toString(){return this.cssText}};const Wc=e=>new zl(typeof e=="string"?e:e+"",void 0,Ha),Vc=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((s,a,o)=>s+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+e[o+1],e[0]);return new zl(n,e,Ha)},Gc=(e,t)=>{if(Ba)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const s=document.createElement("style"),a=Yn.litNonce;a!==void 0&&s.setAttribute("nonce",a),s.textContent=n.cssText,e.appendChild(s)}},Zo=Ba?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const s of t.cssRules)n+=s.cssText;return Wc(n)})(e):e;const{is:Qc,defineProperty:Jc,getOwnPropertyDescriptor:Yc,getOwnPropertyNames:Zc,getOwnPropertySymbols:Xc,getPrototypeOf:ed}=Object,ps=globalThis,Xo=ps.trustedTypes,td=Xo?Xo.emptyScript:"",nd=ps.reactiveElementPolyfillSupport,fn=(e,t)=>e,ts={toAttribute(e,t){switch(t){case Boolean:e=e?td:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},za=(e,t)=>!Qc(e,t),ei={attribute:!0,type:String,converter:ts,reflect:!1,useDefault:!1,hasChanged:za};Symbol.metadata??=Symbol("metadata"),ps.litPropertyMetadata??=new WeakMap;let Ht=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=ei){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(t,n),!n.noAccessor){const s=Symbol(),a=this.getPropertyDescriptor(t,s,n);a!==void 0&&Jc(this.prototype,t,a)}}static getPropertyDescriptor(t,n,s){const{get:a,set:o}=Yc(this.prototype,t)??{get(){return this[n]},set(l){this[n]=l}};return{get:a,set(l){const d=a?.call(this);o?.call(this,l),this.requestUpdate(t,d,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ei}static _$Ei(){if(this.hasOwnProperty(fn("elementProperties")))return;const t=ed(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(fn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(fn("properties"))){const n=this.properties,s=[...Zc(n),...Xc(n)];for(const a of s)this.createProperty(a,n[a])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[s,a]of n)this.elementProperties.set(s,a)}this._$Eh=new Map;for(const[n,s]of this.elementProperties){const a=this._$Eu(n,s);a!==void 0&&this._$Eh.set(a,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const a of s)n.unshift(Zo(a))}else t!==void 0&&n.push(Zo(t));return n}static _$Eu(t,n){const s=n.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const s of n.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Gc(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,n,s){this._$AK(t,s)}_$ET(t,n){const s=this.constructor.elementProperties.get(t),a=this.constructor._$Eu(t,s);if(a!==void 0&&s.reflect===!0){const o=(s.converter?.toAttribute!==void 0?s.converter:ts).toAttribute(n,s.type);this._$Em=t,o==null?this.removeAttribute(a):this.setAttribute(a,o),this._$Em=null}}_$AK(t,n){const s=this.constructor,a=s._$Eh.get(t);if(a!==void 0&&this._$Em!==a){const o=s.getPropertyOptions(a),l=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:ts;this._$Em=a;const d=l.fromAttribute(n,o.type);this[a]=d??this._$Ej?.get(a)??d,this._$Em=null}}requestUpdate(t,n,s,a=!1,o){if(t!==void 0){const l=this.constructor;if(a===!1&&(o=this[t]),s??=l.getPropertyOptions(t),!((s.hasChanged??za)(o,n)||s.useDefault&&s.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(l._$Eu(t,s))))return;this.C(t,n,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,n,{useDefault:s,reflect:a,wrapped:o},l){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,l??n??this[t]),o!==!0||l!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(n=void 0),this._$AL.set(t,n)),a===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[a,o]of this._$Ep)this[a]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[a,o]of s){const{wrapped:l}=o,d=this[a];l!==!0||this._$AL.has(a)||d===void 0||this.C(a,void 0,o,d)}}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(n)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(n)}willUpdate(t){}_$AE(t){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(n=>this._$ET(n,this[n])),this._$EM()}updated(t){}firstUpdated(t){}};Ht.elementStyles=[],Ht.shadowRootOptions={mode:"open"},Ht[fn("elementProperties")]=new Map,Ht[fn("finalized")]=new Map,nd?.({ReactiveElement:Ht}),(ps.reactiveElementVersions??=[]).push("2.1.2");const Ka=globalThis,ti=e=>e,ns=Ka.trustedTypes,ni=ns?ns.createPolicy("lit-html",{createHTML:e=>e}):void 0,Kl="$lit$",tt=`lit$${Math.random().toFixed(9).slice(2)}$`,ql="?"+tt,sd=`<${ql}>`,At=document,wn=()=>At.createComment(""),$n=e=>e===null||typeof e!="object"&&typeof e!="function",qa=Array.isArray,ad=e=>qa(e)||typeof e?.[Symbol.iterator]=="function",Us=`[ 	
\f\r]`,en=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,si=/-->/g,ai=/>/g,dt=RegExp(`>|${Us}(?:([^\\s"'>=/]+)(${Us}*=${Us}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),oi=/'/g,ii=/"/g,jl=/^(?:script|style|textarea|title)$/i,Wl=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),r=Wl(1),Hn=Wl(2),st=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),li=new WeakMap,kt=At.createTreeWalker(At,129);function Vl(e,t){if(!qa(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return ni!==void 0?ni.createHTML(t):t}const od=(e,t)=>{const n=e.length-1,s=[];let a,o=t===2?"<svg>":t===3?"<math>":"",l=en;for(let d=0;d<n;d++){const u=e[d];let f,g,m=-1,v=0;for(;v<u.length&&(l.lastIndex=v,g=l.exec(u),g!==null);)v=l.lastIndex,l===en?g[1]==="!--"?l=si:g[1]!==void 0?l=ai:g[2]!==void 0?(jl.test(g[2])&&(a=RegExp("</"+g[2],"g")),l=dt):g[3]!==void 0&&(l=dt):l===dt?g[0]===">"?(l=a??en,m=-1):g[1]===void 0?m=-2:(m=l.lastIndex-g[2].length,f=g[1],l=g[3]===void 0?dt:g[3]==='"'?ii:oi):l===ii||l===oi?l=dt:l===si||l===ai?l=en:(l=dt,a=void 0);const k=l===dt&&e[d+1].startsWith("/>")?" ":"";o+=l===en?u+sd:m>=0?(s.push(f),u.slice(0,m)+Kl+u.slice(m)+tt+k):u+tt+(m===-2?d:k)}return[Vl(e,o+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};let ma=class Gl{constructor({strings:t,_$litType$:n},s){let a;this.parts=[];let o=0,l=0;const d=t.length-1,u=this.parts,[f,g]=od(t,n);if(this.el=Gl.createElement(f,s),kt.currentNode=this.el.content,n===2||n===3){const m=this.el.content.firstChild;m.replaceWith(...m.childNodes)}for(;(a=kt.nextNode())!==null&&u.length<d;){if(a.nodeType===1){if(a.hasAttributes())for(const m of a.getAttributeNames())if(m.endsWith(Kl)){const v=g[l++],k=a.getAttribute(m).split(tt),c=/([.?@])?(.*)/.exec(v);u.push({type:1,index:o,name:c[2],strings:k,ctor:c[1]==="."?ld:c[1]==="?"?rd:c[1]==="@"?cd:ms}),a.removeAttribute(m)}else m.startsWith(tt)&&(u.push({type:6,index:o}),a.removeAttribute(m));if(jl.test(a.tagName)){const m=a.textContent.split(tt),v=m.length-1;if(v>0){a.textContent=ns?ns.emptyScript:"";for(let k=0;k<v;k++)a.append(m[k],wn()),kt.nextNode(),u.push({type:2,index:++o});a.append(m[v],wn())}}}else if(a.nodeType===8)if(a.data===ql)u.push({type:2,index:o});else{let m=-1;for(;(m=a.data.indexOf(tt,m+1))!==-1;)u.push({type:7,index:o}),m+=tt.length-1}o++}}static createElement(t,n){const s=At.createElement("template");return s.innerHTML=t,s}};function jt(e,t,n=e,s){if(t===st)return t;let a=s!==void 0?n._$Co?.[s]:n._$Cl;const o=$n(t)?void 0:t._$litDirective$;return a?.constructor!==o&&(a?._$AO?.(!1),o===void 0?a=void 0:(a=new o(e),a._$AT(e,n,s)),s!==void 0?(n._$Co??=[])[s]=a:n._$Cl=a),a!==void 0&&(t=jt(e,a._$AS(e,t.values),a,s)),t}class id{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:s}=this._$AD,a=(t?.creationScope??At).importNode(n,!0);kt.currentNode=a;let o=kt.nextNode(),l=0,d=0,u=s[0];for(;u!==void 0;){if(l===u.index){let f;u.type===2?f=new gs(o,o.nextSibling,this,t):u.type===1?f=new u.ctor(o,u.name,u.strings,this,t):u.type===6&&(f=new dd(o,this,t)),this._$AV.push(f),u=s[++d]}l!==u?.index&&(o=kt.nextNode(),l++)}return kt.currentNode=At,a}p(t){let n=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,n),n+=s.strings.length-2):s._$AI(t[n])),n++}}let gs=class Ql{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,n,s,a){this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=s,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t?.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=jt(this,t,n),$n(t)?t===y||t==null||t===""?(this._$AH!==y&&this._$AR(),this._$AH=y):t!==this._$AH&&t!==st&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ad(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==y&&$n(this._$AH)?this._$AA.nextSibling.data=t:this.T(At.createTextNode(t)),this._$AH=t}$(t){const{values:n,_$litType$:s}=t,a=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=ma.createElement(Vl(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===a)this._$AH.p(n);else{const o=new id(a,this),l=o.u(this.options);o.p(n),this.T(l),this._$AH=o}}_$AC(t){let n=li.get(t.strings);return n===void 0&&li.set(t.strings,n=new ma(t)),n}k(t){qa(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let s,a=0;for(const o of t)a===n.length?n.push(s=new Ql(this.O(wn()),this.O(wn()),this,this.options)):s=n[a],s._$AI(o),a++;a<n.length&&(this._$AR(s&&s._$AB.nextSibling,a),n.length=a)}_$AR(t=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);t!==this._$AB;){const s=ti(t).nextSibling;ti(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}};class ms{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,s,a,o){this.type=1,this._$AH=y,this._$AN=void 0,this.element=t,this.name=n,this._$AM=a,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=y}_$AI(t,n=this,s,a){const o=this.strings;let l=!1;if(o===void 0)t=jt(this,t,n,0),l=!$n(t)||t!==this._$AH&&t!==st,l&&(this._$AH=t);else{const d=t;let u,f;for(t=o[0],u=0;u<o.length-1;u++)f=jt(this,d[s+u],n,u),f===st&&(f=this._$AH[u]),l||=!$n(f)||f!==this._$AH[u],f===y?t=y:t!==y&&(t+=(f??"")+o[u+1]),this._$AH[u]=f}l&&!a&&this.j(t)}j(t){t===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}let ld=class extends ms{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===y?void 0:t}},rd=class extends ms{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==y)}},cd=class extends ms{constructor(t,n,s,a,o){super(t,n,s,a,o),this.type=5}_$AI(t,n=this){if((t=jt(this,t,n,0)??y)===st)return;const s=this._$AH,a=t===y&&s!==y||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==y&&(s===y||a);a&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},dd=class{constructor(t,n,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){jt(this,t)}};const ud={I:gs},pd=Ka.litHtmlPolyfillSupport;pd?.(ma,gs),(Ka.litHtmlVersions??=[]).push("3.3.2");const gd=(e,t,n)=>{const s=n?.renderBefore??t;let a=s._$litPart$;if(a===void 0){const o=n?.renderBefore??null;s._$litPart$=a=new gs(t.insertBefore(wn(),o),o,void 0,n??{})}return a._$AI(e),a};const ja=globalThis;let qt=class extends Ht{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=gd(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return st}};qt._$litElement$=!0,qt.finalized=!0,ja.litElementHydrateSupport?.({LitElement:qt});const md=ja.litElementPolyfillSupport;md?.({LitElement:qt});(ja.litElementVersions??=[]).push("4.2.2");const Jl=e=>(t,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};const fd={attribute:!0,type:String,converter:ts,reflect:!1,hasChanged:za},hd=(e=fd,t,n)=>{const{kind:s,metadata:a}=n;let o=globalThis.litPropertyMetadata.get(a);if(o===void 0&&globalThis.litPropertyMetadata.set(a,o=new Map),s==="setter"&&((e=Object.create(e)).wrapped=!0),o.set(n.name,e),s==="accessor"){const{name:l}=n;return{set(d){const u=t.get.call(this);t.set.call(this,d),this.requestUpdate(l,u,e,!0,d)},init(d){return d!==void 0&&this.C(l,void 0,e,d),d}}}if(s==="setter"){const{name:l}=n;return function(d){const u=this[l];t.call(this,d),this.requestUpdate(l,u,e,!0,d)}}throw Error("Unsupported decorator location: "+s)};function fs(e){return(t,n)=>typeof n=="object"?hd(e,t,n):((s,a,o)=>{const l=a.hasOwnProperty(o);return a.constructor.createProperty(o,s),l?Object.getOwnPropertyDescriptor(a,o):void 0})(e,t,n)}function $(e){return fs({...e,state:!0,attribute:!1})}async function _e(e,t){if(!(!e.client||!e.connected)&&!e.channelsLoading){e.channelsLoading=!0,e.channelsError=null;try{const n=await e.client.request("channels.status",{probe:t,timeoutMs:8e3});e.channelsSnapshot=n,e.channelsLastSuccess=Date.now()}catch(n){e.channelsError=String(n)}finally{e.channelsLoading=!1}}}async function vd(e,t){if(!(!e.client||!e.connected||e.whatsappBusy)){e.whatsappBusy=!0;try{const n=await e.client.request("web.login.start",{force:t,timeoutMs:3e4});e.whatsappLoginMessage=n.message??null,e.whatsappLoginQrDataUrl=n.qrDataUrl??null,e.whatsappLoginConnected=null}catch(n){e.whatsappLoginMessage=String(n),e.whatsappLoginQrDataUrl=null,e.whatsappLoginConnected=null}finally{e.whatsappBusy=!1}}}async function yd(e){if(!(!e.client||!e.connected||e.whatsappBusy)){e.whatsappBusy=!0;try{const t=await e.client.request("web.login.wait",{timeoutMs:12e4});e.whatsappLoginMessage=t.message??null,e.whatsappLoginConnected=t.connected??null,t.connected&&(e.whatsappLoginQrDataUrl=null)}catch(t){e.whatsappLoginMessage=String(t),e.whatsappLoginConnected=null}finally{e.whatsappBusy=!1}}}async function bd(e){if(!(!e.client||!e.connected||e.whatsappBusy)){e.whatsappBusy=!0;try{await e.client.request("channels.logout",{channel:"whatsapp"}),e.whatsappLoginMessage="Logged out.",e.whatsappLoginQrDataUrl=null,e.whatsappLoginConnected=null}catch(t){e.whatsappLoginMessage=String(t)}finally{e.whatsappBusy=!1}}}function X(e){return typeof structuredClone=="function"?structuredClone(e):JSON.parse(JSON.stringify(e))}function Wt(e){return`${JSON.stringify(e,null,2).trimEnd()}
`}function hs(e,t,n){if(t.length===0)return;let s=e;for(let o=0;o<t.length-1;o+=1){const l=t[o],d=t[o+1];if(typeof l=="number"){if(!Array.isArray(s))return;s[l]==null&&(s[l]=typeof d=="number"?[]:{}),s=s[l]}else{if(typeof s!="object"||s==null)return;const u=s;u[l]==null&&(u[l]=typeof d=="number"?[]:{}),s=u[l]}}const a=t[t.length-1];if(typeof a=="number"){Array.isArray(s)&&(s[a]=n);return}typeof s=="object"&&s!=null&&(s[a]=n)}function Yl(e,t){if(t.length===0)return;let n=e;for(let a=0;a<t.length-1;a+=1){const o=t[a];if(typeof o=="number"){if(!Array.isArray(n))return;n=n[o]}else{if(typeof n!="object"||n==null)return;n=n[o]}if(n==null)return}const s=t[t.length-1];if(typeof s=="number"){Array.isArray(n)&&n.splice(s,1);return}typeof n=="object"&&n!=null&&delete n[s]}async function Z(e){if(!(!e.client||!e.connected)){e.configLoading=!0,e.lastError=null;try{const t=await e.client.request("config.get",{});wd(e,t)}catch(t){e.lastError=String(t)}finally{e.configLoading=!1}}}async function Wa(e){if(!(!e.client||!e.connected)&&!e.configSchemaLoading){e.configSchemaLoading=!0;try{const t=await e.client.request("config.schema",{});xd(e,t)}catch(t){e.lastError=String(t)}finally{e.configSchemaLoading=!1}}}function xd(e,t){e.configSchema=t.schema??null,e.configUiHints=t.uiHints??{},e.configSchemaVersion=t.version??null}function wd(e,t){e.configSnapshot=t;const n=typeof t.raw=="string"?t.raw:t.config&&typeof t.config=="object"?Wt(t.config):e.configRaw;!e.configFormDirty||e.configFormMode==="raw"?e.configRaw=n:e.configForm?e.configRaw=Wt(e.configForm):e.configRaw=n,e.configValid=typeof t.valid=="boolean"?t.valid:null,e.configIssues=Array.isArray(t.issues)?t.issues:[],e.configFormDirty||(e.configForm=X(t.config??{}),e.configFormOriginal=X(t.config??{}),e.configRawOriginal=n)}async function Pe(e,t){if(!(!e.client||!e.connected)){e.configSaving=!0,e.lastError=null;try{const n=JSON.stringify(t);let s=e.configSnapshot?.hash;if(s||(await Z(e),s=e.configSnapshot?.hash),!s){e.lastError="Config hash missing; reload and retry.";return}await e.client.request("config.patch",{raw:n,baseHash:s}),e.configFormDirty=!1,await Z(e)}catch(n){e.lastError=String(n)}finally{e.configSaving=!1}}}async function fa(e){if(!(!e.client||!e.connected)){e.configSaving=!0,e.lastError=null;try{const t=e.configFormMode==="form"&&e.configForm?Wt(e.configForm):e.configRaw;let n=e.configSnapshot?.hash;if(n||(await Z(e),n=e.configSnapshot?.hash),!n){e.lastError="Config hash missing; reload and retry.";return}await e.client.request("config.set",{raw:t,baseHash:n}),e.configFormDirty=!1,await Z(e)}catch(t){e.lastError=String(t)}finally{e.configSaving=!1}}}async function $d(e){if(!(!e.client||!e.connected)){e.configApplying=!0,e.lastError=null;try{const t=e.configFormMode==="form"&&e.configForm?Wt(e.configForm):e.configRaw;let n=e.configSnapshot?.hash;if(n||(await Z(e),n=e.configSnapshot?.hash),!n){e.lastError="Config hash missing; reload and retry.";return}await e.client.request("config.apply",{raw:t,baseHash:n,sessionKey:e.applySessionKey}),e.configFormDirty=!1,await Z(e)}catch(t){e.lastError=String(t)}finally{e.configApplying=!1}}}async function kd(e){if(!(!e.client||!e.connected)){e.updateRunning=!0,e.lastError=null;try{await e.client.request("update.run",{sessionKey:e.applySessionKey})}catch(t){e.lastError=String(t)}finally{e.updateRunning=!1}}}function Ot(e,t,n){const s=X(e.configForm??e.configSnapshot?.config??{});hs(s,t,n),e.configForm=s,e.configFormDirty=!0,e.configFormMode==="form"&&(e.configRaw=Wt(s))}function ri(e,t){const n=X(e.configForm??e.configSnapshot?.config??{});Yl(n,t),e.configForm=n,e.configFormDirty=!0,e.configFormMode==="form"&&(e.configRaw=Wt(n))}function Va(){return typeof document>"u"?"en":(document.documentElement?.lang?.toLowerCase()??"").startsWith("zh")?"zh":"en"}const Sd={tabGroupChat:"Chat",tabGroupControl:"Control",tabGroupAgent:"Agent",tabGroupSettings:"Settings",subtitleAgents:"Manage agent workspaces, tools, and identities.",subtitleOverview:"Gateway status, entry points, and a fast health read.",subtitleChannels:"Manage channels and settings.",subtitleInstances:"Presence beacons from connected clients and nodes.",subtitleSessions:"Inspect active sessions and adjust per-session defaults.",subtitleUsage:"",subtitleCron:"Schedule wakeups and recurring agent runs.",subtitleSkills:"Manage skill availability and API key injection.",subtitleMcp:"Configure MCP servers and tools.",subtitleNodes:"Paired devices, capabilities, and command exposure.",subtitleChat:"Direct gateway chat session for quick interventions.",subtitleDigitalEmployee:"Start templated conversations with domain-specific digital employees.",subtitleAgentSwarm:"Multi-agent swarm collaboration for ops and SRE.",subtitleConfig:"Edit ~/.openclaw/openclaw.json safely.",subtitleEnvVars:"Key-value env vars saved to config.env.vars in ~/.openocta/openocta.json.",subtitleModels:"Configure model providers and API keys.",subtitleDebug:"Gateway snapshots, events, and manual RPC calls.",subtitleLogs:"Live tail of the gateway file logs.",subtitleLlmTrace:"View LLM trace details for sessions.",subtitleSandbox:"Sandbox, command validation, and approval queue.",subtitleApprovals:"Command approval queue; approve or deny by session.",navTitleAgents:"Agents",navTitleOverview:"Overview",navTitleChannels:"Channels",navTitleInstances:"Instances",navTitleSessions:"Sessions",navTitleUsage:"Usage",navTitleCron:"Cron Jobs",navTitleSkills:"Skills",navTitleMcp:"MCP",navTitleNodes:"Nodes",navTitleChat:"Chat",navTitleDigitalEmployee:"Digital Employee",navTitleAgentSwarm:"Agent Swarm",agentSwarmDevBadge:"In Development",navTitleConfig:"Config",navTitleEnvVars:"Env Vars",navTitleModels:"Models",navTitleDebug:"Debug",navTitleLogs:"Logs",navTitleLlmTrace:"LLM Trace",navTitleSandbox:"Security Policy",navTitleApprovals:"Approvals",navTitleControl:"Control",overviewGatewayAccess:"Gateway Access",overviewGatewayAccessSub:"Where the dashboard connects and how it authenticates.",overviewWebSocketUrl:"WebSocket URL",overviewGatewayHost:"Backend Address (IP:Port)",overviewGatewayToken:"Gateway Token",overviewPassword:"Password (not stored)",overviewDefaultSessionKey:"Default Session Key",overviewConnect:"Connect",overviewRefresh:"Refresh",overviewConnectHint:"Click Connect to apply connection changes.",overviewSnapshot:"Snapshot",overviewSnapshotSub:"Latest gateway handshake information.",overviewStatus:"Status",overviewConnected:"Connected",overviewDisconnected:"Disconnected",overviewUptime:"Uptime",overviewTickInterval:"Tick Interval",overviewLastChannelsRefresh:"Last Channels Refresh",overviewChannelsHint:"Use Channels to link WhatsApp, Telegram, Discord, Signal, or iMessage.",overviewInstances:"Instances",overviewInstancesSub:"Presence beacons in the last 5 minutes.",overviewSessions:"Sessions",overviewSessionsSub:"Recent session keys tracked by the gateway.",overviewCron:"Cron",overviewCronNext:"Next wake",overviewCronEnabled:"Enabled",overviewCronDisabled:"Disabled",overviewNotes:"Notes",overviewNotesSub:"Quick reminders for remote control setups.",overviewNoteTailscale:"Tailscale serve",overviewNoteTailscaleSub:"Prefer serve mode to keep the gateway on loopback with tailnet auth.",overviewNoteSessionHygiene:"Session hygiene",overviewNoteSessionHygieneSub:"Use /new or sessions.patch to reset context.",overviewNoteCron:"Cron reminders",overviewNoteCronSub:"Use isolated sessions for recurring runs.",commonLoading:"Loading…",commonRefresh:"Refresh",commonRefreshing:"Refreshing…",commonSaving:"Saving…",commonDelete:"Delete",commonFilter:"Filter",commonOptional:"(optional)",commonInherit:"inherit",commonOffExplicit:"off (explicit)",commonNA:"n/a",commonYes:"Yes",commonNo:"No",channelsConfigure:"Configure",mcpAddServer:"Add MCP Server",mcpServerName:"Server name",mcpNoServers:"No MCP servers configured.",mcpEnabled:"Enabled",mcpDisabled:"Disabled",mcpFormMode:"Form",mcpRawMode:"Raw JSON",mcpCommand:"Command",mcpArgs:"Args",mcpUrl:"URL",mcpService:"Service",mcpServiceUrl:"Service URL",mcpToolPrefix:"Tool Prefix",mcpRawJson:"Raw JSON",mcpDeleteConfirm:"Delete this MCP server?",mcpConnectionTypeStdio:"Command (stdio)",mcpConnectionTypeUrl:"URL",mcpConnectionTypeService:"Service",mcpEnv:"Environment variables",mcpEnvPlaceholder:"KEY=value or $ENV_VAR, one per line",mcpViewList:"List view",mcpViewCard:"Card view",mcpTableName:"Name",mcpTableType:"Type",mcpTableStatus:"Status",mcpTableActions:"Actions",llmTraceSearch:"Search",llmTraceSearchPlaceholder:"Filter by session key…",llmTraceEnabled:"Enabled",llmTraceDisabled:"Disabled",llmTraceActionEnable:"Enable",llmTraceActionDisable:"Disable",llmTraceToggleTooltip:"When enabled, new sessions will record model call Trace details (may impact performance). When disabled, new Trace details will not be recorded.",llmTraceModeActive:"Active",llmTraceModeAll:"All",llmTraceSessionKey:"Session Key",llmTraceSessionId:"Session ID",llmTraceUpdatedAt:"Updated",llmTraceFile:"File",llmTraceFileSize:"Size",llmTraceView:"View",llmTraceBack:"Back",llmTraceDownload:"Download",llmTraceNoEntries:"No trace entries.",sandboxEnabled:"Enabled",sandboxDisabled:"Disabled",sandboxActionEnable:"Enable",sandboxActionDisable:"Disable",sandboxAllowedPaths:"Allowed paths",sandboxNetworkAllow:"Network allowlist",sandboxHooks:"Security hooks",sandboxHookBeforeAgent:"BeforeAgent",sandboxHookBeforeModel:"BeforeModel",sandboxHookAfterModel:"AfterModel",sandboxHookBeforeTool:"BeforeTool",sandboxHookAfterTool:"AfterTool",sandboxHookAfterAgent:"AfterAgent",sandboxHookDescBeforeAgent:"Request validation: session abuse (DoS), long prompts, malicious IPs",sandboxHookDescBeforeModel:"Prompt safety: prompt injection, sensitive data leakage, control chars",sandboxHookDescAfterModel:"Output review: dangerous commands, secret leakage, malicious URLs",sandboxHookDescBeforeTool:"Permission check: tool permission, param validation, path validation",sandboxHookDescAfterTool:"Result review: secret leakage, error sanitization, output truncation",sandboxHookDescAfterAgent:"Audit logging, compliance checks",sandboxValidator:"Command validator",sandboxResourceLimit:"Resource limits",sandboxMaxCPUPercent:"Max CPU %",sandboxMaxMemoryBytes:"Max memory",sandboxMaxDiskBytes:"Max disk",sandboxSecretPatterns:"Secret leakage patterns (regex)",sandboxSecretPatternsHint:"One regex per line. Built-in patterns (API keys, tokens, etc.) are also applied.",sandboxBanCommands:"Ban commands",sandboxBanArguments:"Ban arguments",sandboxBanFragments:"Keyword fuse",sandboxSectionConfig:"Sandbox config",sandboxSectionApprovals:"Approval queue",securitySectionSandbox:"Environment boundary",securitySectionValidator:"命令校验",securitySectionApprovalQueue:"Approval Queue",securitySectionSandboxDesc:"Filesystem + network allowlist and optional resource limits.",securitySectionValidatorDesc:"Command validation rules (ban commands/args/fragments, length limits).",securitySectionApprovalQueueDesc:"Human-in-the-loop approvals for sensitive tool calls; supports session whitelist TTL.",securityApprovalQueueEnabled:"Enable approval queue",securityApprovalTimeoutSeconds:"Approval timeout (seconds)",securityApprovalTimeoutSecondsHint:"Pending approvals become expired after this time (best-effort; used by UI and gateway).",securityApprovalAllow:"Auto-allow commands",securityApprovalAllowHint:"Commands that bypass approval (one per line). Supports glob patterns like 'ls', 'pwd', 'echo *'.",securityApprovalAsk:"Require approval for",securityApprovalAskHint:"Commands that require approval (one per line). Supports glob patterns like 'rm', 'mv *', 'cp *'.",securityApprovalDeny:"Denied commands",securityApprovalDenyHint:"Commands that are always denied (one per line). Supports glob patterns like 'sudo', 'dd', 'mkfs *'.",securityApprovalBlockOnApproval:"Block on approval",securityApprovalBlockOnApprovalHint:"When enabled, the conversation will be blocked until the command is approved. When disabled, an error is returned immediately and the conversation ends.",approvalsList:"Approval queue",approvalsId:"ID",approvalsSessionKey:"Session Key",approvalsSessionId:"Session ID",approvalsCommand:"Command",approvalsTimeout:"Timeout",approvalsTTL:"TTL",approvalsStatus:"Status",approvalsApprove:"Approve",approvalsApproveOnce:"Approve once",approvalsWhitelist:"Whitelist",approvalsWhitelistSession:"Whitelist session",approvalsDeny:"Deny",approvalsExpired:"Expired",approvalsPending:"Pending",approvalsNoEntries:"No approval requests.",approvalsProcessed:"Processed",securityOverviewTitle:"Current status",securityOverviewPreset:"Preset",securityOverviewSandbox:"Environment",securityOverviewCommandPolicy:"Command policy",securityOverviewPendingApprovals:"Pending approvals",securityPresetsTitle:"Quick presets",securityPresetsHint:"One-click apply, overrides current config. See table for scenarios.",securityPresetOff:"All off",securityPresetLoose:"Loose",securityPresetStandard:"Standard",securityPresetStrict:"Strict",securityPresetOffDesc:"Disable all security: sandbox, command policy, and approval queue. Use for quick local testing only.",securityPresetLooseDesc:"Sandbox on, wide paths/network. Only blocks extreme danger (sudo, rm -rf, dd, mkfs). Default: allow. No approval. Best for: local dev, debugging.",securityPresetStandardDesc:"Sandbox on, moderate paths/network. Deny + some require approval (rm, mv, cp). Default: ask. Approval on. Best for: daily use, staging.",securityPresetStrictDesc:"Sandbox on, tight paths/network. Deny + many require approval. Default: deny. Approval on, blocking. Best for: production, compliance.",securitySectionCommandPolicy:"Command policy",securitySectionCommandPolicyDesc:"Unified rules: deny → ask → allow. Unmatched commands use default policy.",securityDefaultPolicy:"Default policy (when no rule matches)",securityDefaultDeny:"Deny",securityDefaultAsk:"Ask",securityDefaultAllow:"Allow",securityRulesList:"Rules",securityRuleAction:"Action",securityRulePattern:"Pattern",securityRuleType:"Type",securityActionDeny:"Deny",securityActionAsk:"Ask",securityActionAllow:"Allow",securityAddRule:"Add rule",securityAdvancedOptions:"Advanced: ban arguments, max length, secret patterns",securityMaxLength:"Max command length",securityResourceCustom:"Custom",securityRulesHint:"One pattern per line. For deny: single word = command (e.g. sudo), with space = fragment (e.g. rm -rf).",securityRulesDenyHint:"Commands/fragments to always deny. Single word = command, multi-word = fragment.",securityRulesAskHint:"Commands that require approval before execution.",securityRulesAllowHint:"Commands that bypass approval (auto-approved).",approvalsViewSession:"View session",approvalsSectionApproved:"Approved",approvalsSectionDenied:"Denied",approvalsSectionWhitelisted:"Session whitelisted",approvalsExpiresIn:"Expires in",approvalsExpiresAt:"Expires at",approvalsTtlPermanent:"Permanent",approvalsReason:"Reason",modelsViewList:"List view",modelsViewCard:"Card view",modelsTableName:"Name",modelsTableModel:"Default Model",modelsTableBaseUrl:"Base URL",modelsTableActions:"Actions",modelsAddProvider:"Add Provider",modelsAddCustomProvider:"Add Custom Provider",modelsProviderId:"Provider ID",modelsProviderIdPlaceholder:"e.g. openai, google, anthropic",modelsProviderIdHint:"Lowercase letters, digits, hyphens, underscores. Cannot be changed later.",modelsDisplayName:"Display Name",modelsDisplayNamePlaceholder:"e.g. OpenAI, Google Gemini",modelsDefaultBaseUrl:"Default Base URL",modelsDefaultBaseUrlPlaceholder:"e.g. https://api.openai.com/v1",modelsApiKeyPrefix:"API Key Prefix (optional)",modelsApiKeyPrefixPlaceholder:"e.g. sk-",modelsApiType:"API Type",modelsApiTypeTooltip:"OpenAI: Compatible with OpenAI Chat Completions API. Anthropic: Compatible with Anthropic Messages API.",modelsApiTypeOpenAI:"OpenAI (openai-completions)",modelsApiTypeAnthropic:"Anthropic (anthropic-messages)",modelsEnvVars:"Environment Variables",modelsAddModel:"Add Model",modelsModelId:"Model ID",modelsModelName:"Model Name",modelsModelManagement:"Model Management",modelsNoModels:"No models yet. Click Add Model to add one.",modelsEnvVarConflict:"Environment variable conflict",modelsNoProviders:"No model providers configured.",modelsModels:"models",modelsBaseUrl:"Base URL",modelsApiKey:"API Key",modelsUseAsDefault:"Use",modelsCancelUse:"Cancel use",modelsSelectModelToUse:"Select model to use",modelsCurrentDefault:"Current default",channelsHealth:"Channel health",channelsHealthSub:"Channel status snapshots from the gateway.",channelsNoSnapshot:"No snapshot yet.",channelsSchemaUnavailable:"Schema unavailable. Use Raw.",channelsConfigSchemaUnavailable:"Channel config schema unavailable.",channelsConfigSaveConfirm:"Saving channel config will interrupt and recreate long-lived connections. Continue?",channelsLoadingConfigSchema:"Loading config schema…",commonSave:"Save",commonCreate:"Create",commonReload:"Reload",commonCancel:"Cancel",channelConfigured:"Configured",channelRunning:"Running",channelLastStart:"Last start",channelLastProbe:"Last probe",channelProbe:"Probe",channelProbeOk:"ok",channelProbeFailed:"failed",channelLinked:"Linked",channelConnected:"Connected",channelLastConnect:"Last connect",channelLastMessage:"Last message",channelAuthAge:"Auth age",channelBaseUrl:"Base URL",channelCredential:"Credential",channelAudience:"Audience",channelMode:"Mode",channelPublicKey:"Public Key",channelLastInbound:"Last inbound",channelActive:"Active",channelGenericSub:"Channel status and configuration.",channelAccounts:"Accounts",channelWhatsApp:"WhatsApp",channelWhatsAppSub:"Link WhatsApp Web and monitor connection health.",channelTelegram:"Telegram",channelTelegramSub:"Bot status and channel configuration.",channelDiscord:"Discord",channelDiscordSub:"Bot status and channel configuration.",channelGoogleChat:"Google Chat",channelGoogleChatSub:"Chat API webhook status and channel configuration.",channelIMessage:"iMessage",channelIMessageSub:"macOS bridge status and channel configuration.",channelSignal:"Signal",channelSignalSub:"signal-cli status and channel configuration.",channelSlack:"Slack",channelSlackSub:"Socket mode status and channel configuration.",channelNostr:"Nostr",channelNostrSub:"Decentralized DMs via Nostr relays (NIP-04).",channelWhatsAppWorking:"Working…",channelShowQr:"Show QR",channelRelink:"Relink",channelWaitForScan:"Wait for scan",channelLogout:"Logout",nostrEditProfile:"Edit Profile",nostrAccount:"Account",nostrUsername:"Username",nostrDisplayName:"Display Name",nostrBio:"Bio",nostrAvatarUrl:"Avatar URL",nostrBannerUrl:"Banner URL",nostrWebsite:"Website",nostrNip05:"NIP-05 Identifier",nostrLud16:"Lightning Address",nostrSavePublish:"Save & Publish",nostrImportRelays:"Import from Relays",nostrHideAdvanced:"Hide Advanced",nostrShowAdvanced:"Show Advanced",nostrUnsavedChanges:"You have unsaved changes",nostrProfilePreview:"Profile picture preview",nostrAdvanced:"Advanced",nostrImporting:"Importing…",nostrNoProfileSet:'No profile set. Click "Edit Profile" to add your name, bio, and avatar.',nostrProfile:"Profile",nostrAbout:"About",nostrName:"Name",instancesTitle:"Connected Instances",instancesSub:"Presence beacons from the gateway and clients.",instancesNoReported:"No instances reported yet.",instancesUnknownHost:"unknown host",instancesLastInput:"Last input",instancesReason:"Reason",instancesScopes:"scopes",sessionsTitle:"Sessions",sessionsSub:"Active session keys and per-session overrides.",sessionsActiveWithin:"Active within (minutes)",sessionsLimit:"Limit",sessionsIncludeGlobal:"Include global",sessionsIncludeUnknown:"Include unknown",sessionsStore:"Store",sessionsKey:"Key",sessionsLabel:"Label",sessionsKind:"Kind",sessionsUpdated:"Updated",sessionsTokens:"Tokens",sessionsThinking:"Thinking",sessionsVerbose:"Verbose",sessionsReasoning:"Reasoning",sessionsActions:"Actions",sessionsNoFound:"No sessions found.",usageNoTimeline:"No timeline data yet.",usageNoData:"No data",usageHours:"Hours",usageMidnight:"Midnight",usage4am:"4am",usage8am:"8am",usageNoon:"Noon",usage4pm:"4pm",usage8pm:"8pm",usageDailyToken:"Daily Token Usage",usageDailyCost:"Daily Cost Usage",usageOutput:"Output",usageInput:"Input",usageCacheWrite:"Cache Write",usageCacheRead:"Cache Read",usageClearFilters:"Clear filters",usageRemoveFilter:"Remove filter",usageDays:"Days",usageHoursLabel:"Hours",usageSession:"Session",usageFiltered:"filtered",usageVisible:"visible",usageExport:"Export",usageActivityByTime:"Activity by Time",usageMosaicSubNoData:"Estimates require session timestamps.",usageTokensUnit:"tokens",usageTimeZoneLocal:"Local",usageTimeZoneUtc:"UTC",usageDayOfWeek:"Day of Week",usageDailyUsage:"Daily Usage",usageTotal:"Total",usageByType:"By Type",usageTokensByType:"Tokens by Type",usageCostByType:"Cost by Type",usageTotalLabel:"Total",usageOverview:"Usage Overview",usageMessages:"Messages",usageToolCalls:"Tool Calls",usageErrors:"Errors",usageAvgTokensMsg:"Avg Tokens / Msg",usageAvgCostMsg:"Avg Cost / Msg",usageSessionsCard:"Sessions",usageThroughput:"Throughput",usageErrorRate:"Error Rate",usageCacheHitRate:"Cache Hit Rate",usageMessagesHint:"Total user + assistant messages in range.",usageToolCallsHint:"Total tool call count across sessions.",usageErrorsHint:"Total message/tool errors in range.",usageAvgTokensMsgHint:"Average tokens per message in this range.",usageSessionsHint:"Distinct sessions in the range.",usageThroughputHint:"Throughput shows tokens per minute over active time. Higher is better.",usageErrorRateHint:"Error rate = errors / total messages. Lower is better.",usageCacheHitRateHint:"Cache hit rate = cache read / (input + cache read). Higher is better.",usageTopModels:"Top Models",usageTopProviders:"Top Providers",usageTopTools:"Top Tools",usageTopAgents:"Top Agents",usageTopChannels:"Top Channels",usagePeakErrorDays:"Peak Error Days",usagePeakErrorHours:"Peak Error Hours",usageNoModelData:"No model data",usageNoProviderData:"No provider data",usageNoToolCalls:"No tool calls",usageNoAgentData:"No agent data",usageNoChannelData:"No channel data",usageNoErrorData:"No error data",usageShown:"shown",usageTotalSessions:"total",usageAvg:"avg",usageAll:"All",usageRecentlyViewed:"Recently viewed",usageSort:"Sort",usageCost:"Cost",usageErrorsCol:"Errors",usageMessagesCol:"Messages",usageRecent:"Recent",usageTokensCol:"Tokens",usageDescending:"Descending",usageAscending:"Ascending",usageClearSelection:"Clear Selection",usageNoRecentSessions:"No recent sessions",usageNoSessionsInRange:"No sessions in range",usageCopy:"Copy",usageCopySessionName:"Copy session name",usageSelectedCount:"Selected",usageMoreSessions:"more",usageUserAssistant:"user · assistant",usageToolsUsed:"tools used",usageToolResults:"tool results",usageAcrossMessages:"Across messages",usageInRange:"in range",usageCached:"cached",usagePrompt:"prompt",usageCacheHint:"Cache hit rate = cache read / (input + cache read). Higher is better.",usageErrorHint:"Error rate = errors / total messages. Lower is better.",usageTokensHint:"Average tokens per message in this range.",usageCostHint:"Average cost per message when providers report costs.",usageCostHintMissing:"Average cost per message when providers report costs. Cost data is missing for some or all sessions in this range.",usageModelMix:"Model Mix",usageDuration:"Duration",usageCloseSessionDetails:"Close session details",usageLoading:"Loading…",usageNoTimelineData:"No timeline data",usageNoDataInRange:"No data in range",usageUsageOverTime:"Usage Over Time",usagePerTurn:"Per Turn",usageCumulative:"Cumulative",usageNoContextData:"No context data",usageSystemPromptBreakdown:"System Prompt Breakdown",usageExpandAll:"Expand all",usageCollapseAll:"Collapse All",usageBaseContextPerMessage:"Base context per message",usageSys:"Sys",usageSkills:"Skills",usageToolsLabel:"Tools",usageFiles:"Files",usageConversation:"Conversation",usageNoMessages:"No messages",usageSearchConversation:"Search conversation",usageClear:"Clear",usageHasTools:"Has tools",usageUser:"User",usageAssistant:"Assistant",usageTool:"Tool",usageToolResult:"Tool result",usageMessagesCount:"messages",usageNoMessagesMatchFilters:"No messages match the filters.",usageTokenUsage:"Token Usage",usageToday:"Today",usage7d:"7d",usage30d:"30d",usageExportSessionsCsv:"Sessions (CSV)",usageExportDailyCsv:"Daily (CSV)",usageSessionsCount:"sessions",usageQueryHintMatch:"{count} of {total} sessions match",usageQueryHintInRange:"{total} sessions in range",usagePageSubtitle:"See where tokens go, when sessions spike, and what drives cost.",usageCalls:"calls",cronScheduler:"Scheduler",cronSchedulerSub:"Gateway-owned cron scheduler status.",cronEnabled:"Enabled",cronJobs:"Jobs",cronNewJob:"New Job",cronNewJobSub:"Create a scheduled wakeup or agent run.",cronName:"Name",cronDescription:"Description",cronAgentId:"Agent ID",cronSchedule:"Schedule",cronEvery:"Every",cronAt:"At",cronCron:"Cron",cronSession:"Session",cronMain:"Main",cronIsolated:"Isolated",cronWakeMode:"Wake mode",cronNextHeartbeat:"Next heartbeat",cronNow:"Now",cronPayload:"Payload",cronSystemEvent:"System event",cronAgentTurn:"Agent turn",cronSystemText:"System text",cronAgentMessage:"Agent message",cronDelivery:"Delivery",cronAnnounceSummary:"Announce summary (default)",cronNoneInternal:"None (internal)",cronChannel:"Channel",cronTo:"To",cronAddJob:"Add job",cronJobsTitle:"Jobs",cronJobsSub:"All scheduled jobs stored in the gateway.",cronNoJobsYet:"No jobs yet.",cronRunHistory:"Run history",cronRunHistorySub:"Latest runs for",cronSelectJob:"(select a job)",cronNoRunsYet:"No runs yet.",cronSelectJobToInspect:"Select a job to inspect run history.",cronRunAt:"Run at",cronUnit:"Unit",cronMinutes:"Minutes",cronHours:"Hours",cronDays:"Days",cronExpression:"Expression",cronTimeoutSeconds:"Timeout (seconds)",cronLast:"last",agentsFiles:"Files",agentsRuntime:"Runtime",agentsWeb:"Web",agentsMemory:"Memory",agentsSessions:"Sessions",agentsUi:"UI",agentsMessaging:"Messaging",agentsAutomation:"Automation",agentsReadFile:"Read file contents",agentsWriteFile:"Create or overwrite files",agentsEdit:"Make precise edits",agentsApplyPatch:"Patch files (OpenAI)",agentsExec:"Run shell commands",agentsProcess:"Manage background processes",agentsWebSearch:"Search the web",agentsWebFetch:"Fetch web content",agentsMemorySearch:"Semantic search",agentsMemoryGet:"Read memory files",agentsSessionsList:"List sessions",agentsSessionsHistory:"Session history",agentsSessionsSend:"Send to session",agentsSessionsSpawn:"Spawn sub-agent",agentsSessionStatus:"Session status",agentsBrowser:"Control web browser",agentsCanvas:"Control canvases",agentsMessage:"Send messages",agentsScheduleTasks:"Schedule tasks",agentsGatewayControl:"Gateway control",agentsNodesDevices:"Nodes + devices",agentsListAgents:"List agents",agentsImageUnderstanding:"Image understanding",agentsNodes:"Nodes",agentsAgents:"Agents",agentsMedia:"Media",agentsTitle:"Agents",agentsConfigured:"configured.",agentsNoFound:"No agents found.",agentsSelectAgent:"Select an agent",agentsSelectAgentSub:"Pick an agent to inspect its workspace and tools.",agentsWorkspaceRouting:"Agent workspace and routing.",agentsProfileMinimal:"Minimal",agentsProfileCoding:"Coding",agentsProfileMessaging:"Messaging",agentsProfileFull:"Full",agentsDefault:"default",agentsSelected:"selected",agentsAllSkills:"all skills",agentsCurrentModel:"Current",agentsInheritDefault:"Inherit default",agentsOverview:"Overview",agentsOverviewSub:"Workspace paths and identity metadata.",agentsWorkspace:"Workspace",agentsPrimaryModel:"Primary Model",agentsIdentityName:"Identity Name",agentsDefaultLabel:"Default",agentsIdentityEmoji:"Identity Emoji",agentsSkillsFilter:"Skills Filter",agentsModelSelection:"Model Selection",agentsPrimaryModelLabel:"Primary model",agentsPrimaryModelDefault:"(default)",agentsFallbacksLabel:"Fallbacks (comma-separated)",agentsReloadConfig:"Reload Config",agentsAgentContext:"Agent Context",agentsContextWorkspaceIdentity:"Workspace, identity, and model configuration.",agentsContextWorkspaceScheduling:"Workspace and scheduling targets.",agentsChannels:"Channels",agentsChannelsSub:"Gateway-wide channel status snapshot.",agentsLoadChannels:"Load channels to see live status.",agentsNoChannels:"No channels found.",agentsConnected:"connected",agentsConfiguredLabel:"configured",agentsEnabled:"enabled",agentsDisabled:"disabled",agentsNoAccounts:"no accounts",agentsNotConfigured:"not configured",agentsScheduler:"Scheduler",agentsSchedulerSub:"Gateway cron status.",agentsNextWake:"Next wake",agentsCronJobs:"Agent Cron Jobs",agentsCronJobsSub:"Scheduled jobs targeting this agent.",agentsNoJobsAssigned:"No jobs assigned.",agentsCoreFiles:"Core Files",agentsCoreFilesSub:"Bootstrap persona, identity, and tool guidance.",agentsLoadWorkspaceFiles:"Load the agent workspace files to edit core instructions.",agentsNoFilesFound:"No files found.",agentsSelectFileToEdit:"Select a file to edit.",agentsReset:"Reset",agentsFileMissingCreate:"This file is missing. Saving will create it in the agent workspace.",agentsUnavailable:"Unavailable",agentsTabOverview:"Overview",agentsTabFiles:"Files",agentsTabTools:"Tools",agentsTabSkills:"Skills",agentsTabChannels:"Channels",agentsTabCron:"Cron Jobs",agentsFallback:"fallback",agentsNever:"never",agentsLastRefresh:"Last refresh",agentsSkillsPanelSub:"Per-agent skill allowlist and workspace skills.",agentsUseAll:"Use All",agentsDisableAll:"Disable All",agentsLoadConfigForSkills:"Load the gateway config to set per-agent skills.",agentsCustomAllowlist:"This agent uses a custom skill allowlist.",agentsAllSkillsEnabled:"All skills are enabled. Disabling any skill will create a per-agent allowlist.",agentsLoadSkillsForAgent:"Load skills for this agent to view workspace-specific entries.",agentsFilter:"Filter",agentsNoSkillsFound:"No skills found.",agentsToolsGlobalAllow:"Global tools.allow is set. Agent overrides cannot enable tools that are globally blocked.",agentsProfile:"Profile",agentsSource:"Source",agentsStatus:"Status",agentsUnsaved:"unsaved",agentsQuickPresets:"Quick Presets",agentsInherit:"Inherit",agentsToolsTitle:"Tools",agentsToolsSub:"Per-agent tool profile and overrides.",agentsToolAccess:"Tool Access",agentsToolsSubText:"Profile + per-tool overrides for this agent.",agentsLoadConfigForTools:"Load the gateway config to adjust tool profiles.",agentsExplicitAllowlist:"This agent is using an explicit allowlist in config. Tool overrides are managed in the Config tab.",agentsEnableAll:"Enable All",agentsEnabledCount:"enabled.",skillsTitle:"Skills",skillsSub:"Bundled, managed, and workspace skills.",skillsSearchPlaceholder:"Search skills",skillsShown:"shown",skillsWorkspace:"Workspace Skills",skillsBuiltIn:"Built-in Skills",skillsInstalled:"Installed Skills",skillsExtra:"Extra Skills",skillsOther:"Other Skills",skillsAdd:"Add",skillsAddSkill:"Add Skill",skillsUploadName:"Skill name (English)",skillsUploadNamePlaceholder:"e.g. my-skill",skillsUploadFile:"File",skillsUploadFileHint:"SKILL.md or .zip containing SKILL.md",skillsUploadSingleHint:"Single file must be SKILL.md",skillsUploadZipHint:"Zip must contain SKILL.md",skillsUploadSubmit:"Upload",skillsUploadSuccess:"Skill uploaded successfully",skillsDelete:"Delete",skillsDeleteConfirm:"Delete this skill?",skillsSource:"Source",skillsPath:"Path",skillsNoDoc:"No documentation available.",skillsEligible:"Eligible",skillsDisabled:"Disabled",skillsRequiresBins:"Requires bins",skillsRequiresEnv:"Requires env",skillsRequiresConfig:"Requires config",skillsMissing:"Missing",nodesTitle:"Nodes",nodesSub:"Paired devices and live links.",nodesNoFound:"No nodes found.",nodesDevices:"Devices",nodesDevicesSub:"Pairing requests + role tokens.",nodesPending:"Pending",nodesPaired:"Paired",nodesNoPairedDevices:"No paired devices.",nodesRoleLabel:"role: ",nodesRoleNone:"role: -",nodesRepairSuffix:" · repair",nodesRequested:"requested ",nodesApprove:"Approve",nodesReject:"Reject",nodesRolesLabel:"roles: ",nodesScopesLabel:"scopes: ",nodesTokensNone:"Tokens: none",nodesTokens:"Tokens",nodesTokenRevoked:"revoked",nodesTokenActive:"active",nodesRotate:"Rotate",nodesRevoke:"Revoke",nodesBindingTitle:"Exec node binding",nodesBindingSub:"Pin agents to a specific node when using ",nodesBindingFormModeHint:"Switch the Config tab to Form mode to edit bindings here.",nodesLoadConfigHint:"Load config to edit bindings.",nodesLoadConfig:"Load config",nodesDefaultBinding:"Default binding",nodesDefaultBindingSub:"Used when agents do not override a node binding.",nodesNodeLabel:"Node",nodesAnyNode:"Any node",nodesNoNodesSystemRun:"No nodes with system.run available.",nodesNoAgentsFound:"No agents found.",nodesExecApprovalsTitle:"Exec approvals",nodesExecApprovalsSub:"Allowlist and approval policy for exec host=gateway/node.",nodesLoadExecApprovalsHint:"Load exec approvals to edit allowlists.",nodesLoadApprovals:"Load approvals",nodesTarget:"Target",nodesTargetSub:"Gateway edits local approvals; node edits the selected node.",nodesHost:"Host",nodesHostGateway:"Gateway",nodesHostNode:"Node",nodesSelectNode:"Select node",nodesNoNodesExecApprovals:"No nodes advertise exec approvals yet.",nodesScope:"Scope",nodesDefaults:"Defaults",nodesSecurity:"Security",nodesSecurityDefaultSub:"Default security mode.",nodesSecurityAgentSubPrefix:"Default: ",nodesMode:"Mode",nodesUseDefaultPrefix:"Use default (",nodesUseDefaultButton:"Use default",nodesSecurityDeny:"Deny",nodesSecurityAllowlist:"Allowlist",nodesSecurityFull:"Full",nodesAsk:"Ask",nodesAskDefaultSub:"Default prompt policy.",nodesAskAgentSubPrefix:"Default: ",nodesAskOff:"Off",nodesAskOnMiss:"On miss",nodesAskAlways:"Always",nodesAskFallback:"Ask fallback",nodesAskFallbackDefaultSub:"Applied when the UI prompt is unavailable.",nodesAskFallbackAgentSubPrefix:"Default: ",nodesFallback:"Fallback",nodesAutoAllowSkills:"Auto-allow skill CLIs",nodesAutoAllowSkillsDefaultSub:"Allow skill executables listed by the Gateway.",nodesAutoAllowSkillsUsingDefault:"Using default (",nodesAutoAllowSkillsOverride:"Override (",nodesEnabled:"Enabled",nodesAllowlist:"Allowlist",nodesAllowlistSub:"Case-insensitive glob patterns.",nodesAddPattern:"Add pattern",nodesNoAllowlistEntries:"No allowlist entries yet.",nodesNewPattern:"New pattern",nodesLastUsedPrefix:"Last used: ",nodesPattern:"Pattern",nodesRemove:"Remove",nodesDefaultAgent:"default agent",nodesAgent:"agent",nodesUsesDefault:"uses default (",nodesOverride:"override: ",nodesBinding:"Binding",nodesChipPaired:"paired",nodesChipUnpaired:"unpaired",nodesConnected:"connected",nodesOffline:"offline",nodesNever:"never",configEnv:"Environment",configUpdate:"Updates",configAgents:"Agents",configAuth:"Authentication",configChannels:"Channels",configMessages:"Messages",configCommands:"Commands",configHooks:"Hooks",configSkills:"Skills",configTools:"Tools",configGateway:"Gateway",configWizard:"Setup Wizard",configMeta:"Metadata",configLogging:"Logging",configBrowser:"Browser",configUi:"UI",configModels:"Models",configBindings:"Bindings",configBroadcast:"Broadcast",configAudio:"Audio",configSession:"Session",configCron:"Cron",configWeb:"Web",configDiscovery:"Discovery",configCanvasHost:"Canvas Host",configTalk:"Talk",configPlugins:"Plugins",configEnvVars:"Environment Variables",configEnvVarsDesc:"Environment variables passed to the gateway process",configUpdatesDesc:"Auto-update settings and release channel",configAgentsDesc:"Agent configurations, models, and identities",configAuthDesc:"API keys and authentication profiles",configChannelsDesc:"Messaging channels (Telegram, Discord, Slack, etc.)",configMessagesDesc:"Message handling and routing settings",configCommandsDesc:"Custom slash commands",configHooksDesc:"Webhooks and event hooks",configSkillsDesc:"Skill packs and capabilities",configToolsDesc:"Tool configurations (browser, search, etc.)",configGatewayDesc:"Gateway server settings (port, auth, binding)",configWizardDesc:"Setup wizard state and history",configMetaDesc:"Gateway metadata and version information",configLoggingDesc:"Log levels and output configuration",configBrowserDesc:"Browser automation settings",configUiDesc:"User interface preferences",configModelsDesc:"AI model configurations and providers",configBindingsDesc:"Key bindings and shortcuts",configBroadcastDesc:"Broadcast and notification settings",configAudioDesc:"Audio input/output settings",configSessionDesc:"Session management and persistence",configCronDesc:"Scheduled tasks and automation",configWebDesc:"Web server and API settings",configDiscoveryDesc:"Service discovery and networking",configCanvasHostDesc:"Canvas rendering and display",configTalkDesc:"Voice and speech settings",configPluginsDesc:"Plugin management and extensions",configSettingsTitle:"Settings",configSearchPlaceholder:"Search settings…",configAllSettings:"All Settings",configForm:"Form",configRaw:"Raw",configUnsavedChanges:"Unsaved changes",configUnsavedChangesLabel:"unsaved changes",configOneUnsavedChange:"1 unsaved change",configNoChanges:"No changes",configApplying:"Applying…",configApply:"Apply",configUpdating:"Updating…",configUpdateButton:"Update",configViewPrefix:"View ",configPendingChange:"pending change",configPendingChanges:"pending changes",configLoadingSchema:"Loading schema…",configFormUnsafeWarning:"Form view can't safely edit some fields. Use Raw to avoid losing config entries.",configRawJson5:"Raw JSON5",configValidityValid:"valid",configValidityInvalid:"invalid",configValidityUnknown:"unknown",configSchemaUnavailable:"Schema unavailable.",configUnsupportedSchema:"Unsupported schema. Use Raw.",configNoSettingsMatchPrefix:'No settings match "',configNoSettingsMatchSuffix:'"',configNoSettingsInSection:"No settings in this section",configUnsupportedSchemaNode:"Unsupported schema node. Use Raw mode.",configSubnavAll:"All",envVarsSection:"Vars (env.vars)",envModelEnvSection:"Model Env (env.modelEnv)",envShellEnvSection:"Shell Env (env.shellEnv)",envVarsKey:"Key",envVarsValue:"Value",envVarsAdd:"Add",envVarsDelete:"Delete",envVarsSave:"Save",envVarsEmpty:"No environment variables. Click Add to create one.",envVarsKeyPlaceholder:"e.g. API_KEY",envVarsValuePlaceholder:"e.g. your-secret-value",debugSnapshots:"Snapshots",debugSnapshotsSub:"Status, health, and heartbeat data.",debugStatus:"Status",debugHealth:"Health",debugLastHeartbeat:"Last heartbeat",debugSecurityAudit:"Security audit",debugManualRpc:"Manual RPC",debugManualRpcSub:"Send a raw gateway method with JSON params.",debugMethod:"Method",debugParams:"Params",debugCall:"Call",debugCritical:"critical",debugWarnings:"warnings",debugNoCritical:"No critical issues",debugInfo:"info",debugSecurityAuditDetails:"Run openclaw security audit --deep for details.",debugModels:"Models",debugModelsSub:"Catalog from models.list.",debugEventLog:"Event Log",debugEventLogSub:"Latest gateway events.",debugNoEvents:"No events yet.",logsTitle:"Logs",logsSub:"Gateway file logs (JSONL).",logsExportFiltered:"Export filtered",logsExportVisible:"Export visible"},Ad={tabGroupChat:"聊天",tabGroupControl:"控制",tabGroupAgent:"Agent",tabGroupSettings:"设置",subtitleAgents:"管理代理工作区、工具与身份。",subtitleOverview:"网关状态、入口与健康概览。",subtitleChannels:"管理通道与设置。",subtitleInstances:"已连接客户端与节点的在线状态。",subtitleSessions:"查看活跃会话并调整每会话默认值。",subtitleUsage:"",subtitleCron:"安排唤醒与定时代理任务。",subtitleSkills:"管理技能可用性与 API 密钥注入。",subtitleMcp:"配置 MCP 服务器与工具。",subtitleNodes:"已配对设备、能力与命令。",subtitleChat:"直接与网关聊天进行快速操作。",subtitleDigitalEmployee:"按业务场景切换数字员工模版，一键开启新会话。",subtitleAgentSwarm:"多Agent集群协作，面向运维与 SRE。",subtitleConfig:"安全编辑 ~/.openocta/openocta.json。",subtitleEnvVars:"Key-Value 环境变量，保存至 ~/.openocta/openocta.json 的 env.vars。",subtitleModels:"配置模型厂商与 API 密钥。",subtitleDebug:"网关快照、事件与手动 RPC 调用。",subtitleLogs:"网关日志实时查看。",subtitleLlmTrace:"查看会话的 LLM trace 详情。",subtitleSandbox:"Sandbox、命令校验与审批队列。",subtitleApprovals:"命令审批队列；按会话批准或拒绝。",navTitleAgents:"代理",navTitleOverview:"概览",navTitleChannels:"通道",navTitleInstances:"实例",navTitleSessions:"会话",navTitleUsage:"用量",navTitleCron:"定时任务",navTitleSkills:"技能",navTitleMcp:"MCP",navTitleNodes:"节点",navTitleChat:"聊天",navTitleDigitalEmployee:"数字员工",navTitleAgentSwarm:"Agent Swarm",agentSwarmDevBadge:"开发中",navTitleConfig:"配置",navTitleEnvVars:"环境变量",navTitleModels:"模型",navTitleDebug:"测试",navTitleLogs:"日志",navTitleLlmTrace:"LLM Trace",navTitleSandbox:"安全策略",navTitleApprovals:"审批队列",navTitleControl:"控制",overviewGatewayAccess:"网关访问",overviewGatewayAccessSub:"控制台连接地址与认证方式。",overviewWebSocketUrl:"WebSocket 地址",overviewGatewayHost:"后端地址 (IP:端口)",overviewGatewayToken:"网关令牌",overviewPassword:"密码（不保存）",overviewDefaultSessionKey:"默认会话 Key",overviewConnect:"连接",overviewRefresh:"刷新",overviewConnectHint:"点击连接以应用连接变更。",overviewSnapshot:"快照",overviewSnapshotSub:"最近一次网关握手信息。",overviewStatus:"状态",overviewConnected:"已连接",overviewDisconnected:"未连接",overviewUptime:"运行时长",overviewTickInterval:"心跳间隔",overviewLastChannelsRefresh:"最近通道刷新",overviewChannelsHint:"在通道中关联 WhatsApp、Telegram、Discord、Signal 或 iMessage。",overviewInstances:"实例",overviewInstancesSub:"过去 5 分钟内的在线实例数。",overviewSessions:"会话",overviewSessionsSub:"网关跟踪的最近会话 Key。",overviewCron:"定时任务",overviewCronNext:"下次执行",overviewCronEnabled:"已启用",overviewCronDisabled:"已禁用",overviewNotes:"说明",overviewNotesSub:"远程控制相关简要提示。",overviewNoteTailscale:"Tailscale serve",overviewNoteTailscaleSub:"建议使用 serve 模式，使网关仅监听本机并由 tailnet 认证。",overviewNoteSessionHygiene:"会话清理",overviewNoteSessionHygieneSub:"使用 /new 或 sessions.patch 重置上下文。",overviewNoteCron:"定时提醒",overviewNoteCronSub:"定时任务请使用独立会话。",commonLoading:"加载中…",commonRefresh:"刷新",commonRefreshing:"刷新中…",commonSaving:"保存中…",commonDelete:"删除",commonFilter:"筛选",commonOptional:"（可选）",commonInherit:"继承",commonOffExplicit:"关闭（显式）",commonNA:"无",commonYes:"是",commonNo:"否",channelsConfigure:"配置",mcpAddServer:"新增",mcpServerName:"服务器名称",mcpNoServers:"暂无 MCP 服务器配置。",mcpEnabled:"已启用",mcpDisabled:"已禁用",mcpFormMode:"表单",mcpRawMode:"原始 JSON",mcpCommand:"命令",mcpArgs:"参数",mcpUrl:"URL",mcpService:"服务",mcpServiceUrl:"服务 URL",mcpToolPrefix:"工具前缀",mcpRawJson:"原始 JSON",mcpDeleteConfirm:"确定删除此 MCP 服务器？",mcpConnectionTypeStdio:"命令行 (stdio)",mcpConnectionTypeUrl:"URL",mcpConnectionTypeService:"服务",mcpEnv:"环境变量",mcpEnvPlaceholder:"KEY=value 或 $ENV_VAR，每行一个",mcpViewList:"列表",mcpViewCard:"卡片",mcpTableName:"名称",mcpTableType:"连接类型",mcpTableStatus:"状态",mcpTableActions:"操作",llmTraceSearch:"搜索",llmTraceSearchPlaceholder:"按 session key 筛选…",llmTraceEnabled:"已开启",llmTraceDisabled:"已关闭",llmTraceActionEnable:"开启",llmTraceActionDisable:"关闭",llmTraceToggleTooltip:"开启后，再进行会话会记录模型调用Trace详情，可能会有性能影响。关闭后，不再记录新的模型会话Trace详情。",llmTraceModeActive:"活跃",llmTraceModeAll:"全部",llmTraceSessionKey:"Session Key",llmTraceSessionId:"Session ID",llmTraceUpdatedAt:"更新时间",llmTraceFile:"文件",llmTraceFileSize:"大小",llmTraceView:"查看",llmTraceBack:"返回",llmTraceDownload:"下载",llmTraceNoEntries:"暂无 trace 记录。",sandboxEnabled:"已开启",sandboxDisabled:"已关闭",sandboxActionEnable:"开启",sandboxActionDisable:"关闭",sandboxAllowedPaths:"允许路径",sandboxNetworkAllow:"网络白名单",sandboxHooks:"安全钩子",sandboxHookBeforeAgent:"BeforeAgent",sandboxHookBeforeModel:"BeforeModel",sandboxHookAfterModel:"AfterModel",sandboxHookBeforeTool:"BeforeTool",sandboxHookAfterTool:"AfterTool",sandboxHookAfterAgent:"AfterAgent",sandboxHookDescBeforeAgent:"请求验证：拦截会话滥用（DoS）、过长提示、恶意 IP",sandboxHookDescBeforeModel:"Prompt安全：提示注入、敏感数据泄露、控制字符",sandboxHookDescAfterModel:"输出评测：危险命令、秘密泄露、恶意网址",sandboxHookDescBeforeTool:"权限校验：工具权限、参数校验、路径校验",sandboxHookDescAfterTool:"结果审查：秘密泄露、错误脱敏、输出截断",sandboxHookDescAfterAgent:"审计日志、合规检查",sandboxValidator:"命令校验",sandboxResourceLimit:"资源限制",sandboxMaxCPUPercent:"最大 CPU 利用率 (%)",sandboxMaxMemoryBytes:"最大内存 (Bytes)",sandboxMaxDiskBytes:"最大磁盘 (Bytes)",sandboxSecretPatterns:"脱敏正则检测",sandboxSecretPatternsHint:"每行一个正则。系统内置模式（API Key、令牌等）会一并生效。",sandboxBanCommands:"禁止命令",sandboxBanArguments:"禁止参数",sandboxBanFragments:"关键词熔断",sandboxSectionConfig:"沙箱配置",sandboxSectionApprovals:"审批队列",securitySectionSandbox:"环境边界",securitySectionValidator:"命令校验",securitySectionApprovalQueue:"审批队列",securitySectionSandboxDesc:"自定义约束文件系统/网络访问边界，并可配置资源限制。为安全，即使关闭也会提供一个默认的 sandbox，指定默认目录和危险命令校验。",securitySectionValidatorDesc:"对命令进行校验：禁止命令/参数/片段与长度限制。",securitySectionApprovalQueueDesc:"对敏感工具调用进行人工审批，支持按会话 TTL 免审白名单。",securityApprovalQueueEnabled:"启用审批队列",securityApprovalTimeoutSeconds:"许可过期时间（秒）",securityApprovalTimeoutSecondsHint:"待审批请求超过该时长视为过期。",securityApprovalAllow:"自动允许命令",securityApprovalAllowHint:"无需审批直接执行的命令（每行一个）。支持 glob 模式，如 'ls'、'pwd'、'echo *'。",securityApprovalAsk:"需要审批的命令",securityApprovalAskHint:"需要人工审批的命令（每行一个）。支持 glob 模式，如 'rm'、'mv *'、'cp *'。",securityApprovalDeny:"禁止执行的命令",securityApprovalDenyHint:"始终禁止执行的命令（每行一个）。支持 glob 模式，如 'sudo'、'dd'、'mkfs *'。",securityApprovalBlockOnApproval:"阻塞等待审批",securityApprovalBlockOnApprovalHint:"开启后，页面对话会被阻塞，只有审批通过后才能继续对话。关闭后，直接报错结束对话，Agent 可提示用户有命令需要审批。",approvalsList:"审批队列",approvalsId:"ID",approvalsSessionKey:"Session Key",approvalsSessionId:"Session ID",approvalsCommand:"命令",approvalsTimeout:"超时",approvalsTTL:"TTL",approvalsStatus:"状态",approvalsApprove:"批准",approvalsApproveOnce:"本次放行",approvalsWhitelist:"全部放行",approvalsWhitelistSession:"会话免审",approvalsDeny:"拒绝",approvalsExpired:"已过期",approvalsPending:"待审批",approvalsNoEntries:"暂无审批请求。",approvalsProcessed:"已处理",securityOverviewTitle:"当前状态",securityOverviewPreset:"预设",securityOverviewSandbox:"环境边界",securityOverviewCommandPolicy:"命令策略",securityOverviewPendingApprovals:"待审批",securityPresetsTitle:"快速预设",securityPresetsHint:"一键应用，覆盖当前配置。适用场景见下表。",securityPresetOff:"全部关闭",securityPresetLoose:"宽松",securityPresetStandard:"标准",securityPresetStrict:"严格",securityPresetOffDesc:"关闭所有安全策略：沙箱、命令策略、审批队列。仅适用于快速本地测试。",securityPresetLooseDesc:"沙箱开，路径/网络较宽。仅禁止极端危险命令（sudo、rm -rf、dd、mkfs）。默认放行，无审批。适用：本地开发、调试。",securityPresetStandardDesc:"沙箱开，路径/网络适中。禁止 + 部分需审批（rm、mv、cp）。默认需审批，审批开。适用：日常使用、预发。",securityPresetStrictDesc:"沙箱开，路径/网络收紧。禁止 + 大量需审批。默认拒绝，审批开且阻塞。适用：生产、合规。",securitySectionCommandPolicy:"命令策略",securitySectionCommandPolicyDesc:"统一规则：禁止 → 需审批 → 放行。未命中规则时按默认策略处理。",securityDefaultPolicy:"默认策略（未命中任何规则时）",securityDefaultDeny:"拒绝",securityDefaultAsk:"需审批",securityDefaultAllow:"放行",securityRulesList:"规则列表",securityRuleAction:"动作",securityRulePattern:"模式",securityRuleType:"类型",securityActionDeny:"禁止",securityActionAsk:"需审批",securityActionAllow:"放行",securityAddRule:"添加规则",securityAdvancedOptions:"高级：禁止参数、最大长度、敏感词",securityMaxLength:"最大命令长度",securityResourceCustom:"自定义",securityRulesHint:"每行一个模式。禁止规则：单词为命令（如 sudo），含空格为片段（如 rm -rf）。",securityRulesDenyHint:"始终禁止的命令/片段。单词=命令，多词=片段。",securityRulesAskHint:"需审批后才能执行的命令。",securityRulesAllowHint:"免审批直接放行的命令。",approvalsViewSession:"查看会话",approvalsSectionApproved:"已审批",approvalsSectionDenied:"已拒绝",approvalsSectionWhitelisted:"会话免审",approvalsExpiresIn:"剩余",approvalsExpiresAt:"过期时间",approvalsTtlPermanent:"永久",approvalsReason:"拒绝原因",modelsViewList:"列表",modelsViewCard:"卡片",modelsTableName:"名称",modelsTableModel:"默认模型",modelsTableBaseUrl:"Base URL",modelsTableActions:"操作",modelsAddProvider:"添加厂商",modelsAddCustomProvider:"添加自定义厂商",modelsProviderId:"厂商 ID",modelsProviderIdPlaceholder:"如 openai, google, anthropic",modelsProviderIdHint:"小写字母、数字、连字符、下划线。创建后不可修改。",modelsDisplayName:"展示名称",modelsDisplayNamePlaceholder:"如 OpenAI, Google Gemini",modelsDefaultBaseUrl:"默认 Base URL",modelsDefaultBaseUrlPlaceholder:"如 https://api.openai.com/v1",modelsApiKeyPrefix:"API Key 前缀（可选）",modelsApiKeyPrefixPlaceholder:"如 sk-",modelsApiType:"API 类型",modelsApiTypeTooltip:`OpenAI：兼容 OpenAI Chat Completions 的端点。默认会请求/v1/chat/completions。
Anthropic：兼容 Anthropic Messages API 的端点，会进行直接请求。`,modelsApiTypeOpenAI:"OpenAI (openai-completions)",modelsApiTypeAnthropic:"Anthropic (anthropic-messages)",modelsEnvVars:"环境变量",modelsAddModel:"添加模型",modelsModelId:"模型 ID",modelsModelName:"模型名称",modelsModelManagement:"模型管理",modelsNoModels:"暂无模型，点击添加模型。",modelsEnvVarConflict:"环境变量冲突",modelsNoProviders:"暂无模型厂商配置。",modelsModels:"模型",modelsBaseUrl:"Base URL",modelsApiKey:"API Key",modelsUseAsDefault:"使用",modelsCancelUse:"取消使用",modelsSelectModelToUse:"选择要使用的模型",modelsCurrentDefault:"当前默认",channelsHealth:"通道健康",channelsHealthSub:"网关返回的通道状态快照。",channelsNoSnapshot:"暂无快照。",channelsSchemaUnavailable:"Schema 不可用，请使用 Raw。",channelsConfigSchemaUnavailable:"通道配置 Schema 不可用。",channelsConfigSaveConfirm:"修改/新增渠道配置会导致长连接中断并重新创建，是否继续？",channelsLoadingConfigSchema:"正在加载配置 Schema…",commonSave:"保存",commonCreate:"创建",commonReload:"重新加载",commonCancel:"取消",channelConfigured:"已配置",channelRunning:"运行中",channelLastStart:"最近启动",channelLastProbe:"最近探测",channelProbe:"探测",channelProbeOk:"正常",channelProbeFailed:"失败",channelLinked:"已链接",channelConnected:"已连接",channelLastConnect:"最近连接",channelLastMessage:"最近消息",channelAuthAge:"认证时长",channelBaseUrl:"Base URL",channelCredential:"凭证",channelAudience:"受众",channelMode:"模式",channelPublicKey:"公钥",channelLastInbound:"最近入站",channelActive:"活跃",channelGenericSub:"通道状态与配置。",channelAccounts:"账号",channelWhatsApp:"WhatsApp",channelWhatsAppSub:"链接 WhatsApp Web 并监控连接状态。",channelTelegram:"Telegram",channelTelegramSub:"机器人状态与通道配置。",channelDiscord:"Discord",channelDiscordSub:"机器人状态与通道配置。",channelGoogleChat:"Google Chat",channelGoogleChatSub:"Chat API Webhook 状态与通道配置。",channelIMessage:"iMessage",channelIMessageSub:"macOS 桥接状态与通道配置。",channelSignal:"Signal",channelSignalSub:"signal-cli 状态与通道配置。",channelSlack:"Slack",channelSlackSub:"Socket 模式状态与通道配置。",channelNostr:"Nostr",channelNostrSub:"通过 Nostr 中继的分布式私信（NIP-04）。",channelWhatsAppWorking:"处理中…",channelShowQr:"显示二维码",channelRelink:"重新链接",channelWaitForScan:"等待扫码",channelLogout:"登出",nostrEditProfile:"编辑资料",nostrAccount:"账号",nostrUsername:"用户名",nostrDisplayName:"显示名称",nostrBio:"简介",nostrAvatarUrl:"头像 URL",nostrBannerUrl:"横幅 URL",nostrWebsite:"网站",nostrNip05:"NIP-05 标识",nostrLud16:"Lightning 地址",nostrSavePublish:"保存并发布",nostrImportRelays:"从中继导入",nostrHideAdvanced:"隐藏高级",nostrShowAdvanced:"显示高级",nostrUnsavedChanges:"您有未保存的更改",nostrProfilePreview:"头像预览",nostrAdvanced:"高级",nostrImporting:"导入中…",nostrNoProfileSet:"未设置资料。点击「编辑资料」添加姓名、简介与头像。",nostrProfile:"资料",nostrAbout:"关于",nostrName:"名称",instancesTitle:"已连接实例",instancesSub:"网关与客户端的在线状态。",instancesNoReported:"暂无实例上报。",instancesUnknownHost:"未知主机",instancesLastInput:"最近输入",instancesReason:"原因",instancesScopes:"范围",sessionsTitle:"会话",sessionsSub:"活跃会话 Key 及每会话覆盖项。",sessionsActiveWithin:"活跃时间（分钟）",sessionsLimit:"数量上限",sessionsIncludeGlobal:"包含全局",sessionsIncludeUnknown:"包含未知",sessionsStore:"存储",sessionsKey:"Key",sessionsLabel:"标签",sessionsKind:"类型",sessionsUpdated:"更新时间",sessionsTokens:"Token",sessionsThinking:"思考",sessionsVerbose:"详细",sessionsReasoning:"推理",sessionsActions:"操作",sessionsNoFound:"未找到会话。",usageNoTimeline:"暂无时间线数据。",usageNoData:"暂无数据",usageHours:"小时",usageMidnight:"0 点",usage4am:"4 点",usage8am:"8 点",usageNoon:"12 点",usage4pm:"16 点",usage8pm:"20 点",usageDailyToken:"每日 Token 用量",usageDailyCost:"每日费用",usageOutput:"输出",usageInput:"输入",usageCacheWrite:"缓存写入",usageCacheRead:"缓存读取",usageClearFilters:"清除筛选",usageRemoveFilter:"移除筛选",usageDays:"天",usageHoursLabel:"小时",usageSession:"会话",usageFiltered:"已筛选",usageVisible:"当前可见",usageExport:"导出",usageActivityByTime:"按时间活动",usageMosaicSubNoData:"估算需要会话时间戳。",usageTokensUnit:"tokens",usageTimeZoneLocal:"本地",usageTimeZoneUtc:"UTC",usageDayOfWeek:"星期",usageDailyUsage:"每日用量",usageTotal:"合计",usageByType:"按类型",usageTokensByType:"按类型 Token",usageCostByType:"按类型费用",usageTotalLabel:"合计",usageOverview:"用量概览",usageMessages:"消息数",usageToolCalls:"工具调用",usageErrors:"错误数",usageAvgTokensMsg:"平均 Token/条",usageAvgCostMsg:"平均费用/条",usageSessionsCard:"会话",usageThroughput:"吞吐",usageErrorRate:"错误率",usageCacheHitRate:"缓存命中率",usageMessagesHint:"范围内用户+助手消息总数。",usageToolCallsHint:"会话中工具调用总次数。",usageErrorsHint:"范围内消息/工具错误总数。",usageAvgTokensMsgHint:"该范围内每条消息平均 token 数。",usageSessionsHint:"范围内的不同会话数。",usageThroughputHint:"吞吐为活跃时间内每分钟 token 数，越高越好。",usageErrorRateHint:"错误率 = 错误数/总消息数，越低越好。",usageCacheHitRateHint:"缓存命中率 = 缓存读取/(输入+缓存读取)，越高越好。",usageTopModels:"Top 模型",usageTopProviders:"Top 提供商",usageTopTools:"Top 工具",usageTopAgents:"Top 代理",usageTopChannels:"Top 渠道",usagePeakErrorDays:"错误高峰日",usagePeakErrorHours:"错误高峰时",usageNoModelData:"无模型数据",usageNoProviderData:"无提供商数据",usageNoToolCalls:"无工具调用",usageNoAgentData:"无代理数据",usageNoChannelData:"无渠道数据",usageNoErrorData:"无错误数据",usageShown:"显示",usageTotalSessions:"总计",usageAvg:"平均",usageAll:"全部",usageRecentlyViewed:"最近查看",usageSort:"排序",usageCost:"费用",usageErrorsCol:"错误",usageMessagesCol:"消息",usageRecent:"最近",usageTokensCol:"Token",usageDescending:"降序",usageAscending:"升序",usageClearSelection:"清除选择",usageNoRecentSessions:"无最近会话",usageNoSessionsInRange:"范围内无会话",usageCopy:"复制",usageCopySessionName:"复制会话名",usageSelectedCount:"已选",usageMoreSessions:"更多",usageUserAssistant:"用户 · 助手",usageToolsUsed:"使用工具数",usageToolResults:"工具结果",usageAcrossMessages:"跨消息",usageInRange:"范围内",usageCached:"缓存",usagePrompt:"提示",usageCacheHint:"缓存命中率 = 缓存读取/(输入+缓存读取)，越高越好。",usageErrorHint:"错误率 = 错误数/总消息数，越低越好。",usageTokensHint:"该范围内每条消息平均 token 数。",usageCostHint:"提供商上报费用时每条消息平均费用。",usageCostHintMissing:"提供商上报费用时每条消息平均费用。部分或全部会话缺少费用数据。",usageModelMix:"模型组合",usageDuration:"时长",usageCloseSessionDetails:"关闭会话详情",usageLoading:"加载中…",usageNoTimelineData:"无时间线数据",usageNoDataInRange:"范围内无数据",usageUsageOverTime:"用量随时间",usagePerTurn:"每轮",usageCumulative:"累计",usageNoContextData:"无上下文数据",usageSystemPromptBreakdown:"系统提示分解",usageExpandAll:"全部展开",usageCollapseAll:"全部折叠",usageBaseContextPerMessage:"每条消息的基础上下文",usageSys:"系统",usageSkills:"技能",usageToolsLabel:"工具",usageFiles:"文件",usageConversation:"对话",usageNoMessages:"无消息",usageSearchConversation:"搜索对话",usageClear:"清除",usageHasTools:"含工具",usageUser:"用户",usageAssistant:"助手",usageTool:"工具",usageToolResult:"工具结果",usageMessagesCount:"条消息",usageNoMessagesMatchFilters:"没有消息符合筛选条件。",usageTokenUsage:"Token 用量",usageToday:"今天",usage7d:"7 天",usage30d:"30 天",usageExportSessionsCsv:"会话 (CSV)",usageExportDailyCsv:"每日 (CSV)",usageSessionsCount:"会话",usageQueryHintMatch:"{count} / {total} 个会话匹配",usageQueryHintInRange:"{total} 个会话在范围内",usagePageSubtitle:"查看 token 消耗、会话高峰与费用驱动因素。",usageCalls:"次",cronScheduler:"调度器",cronSchedulerSub:"网关内置定时调度状态。",cronEnabled:"已启用",cronJobs:"任务数",cronNewJob:"新建任务",cronNewJobSub:"创建定时唤醒或代理运行任务。",cronName:"名称",cronDescription:"描述",cronAgentId:"Agent ID",cronSchedule:"调度",cronEvery:"每",cronAt:"在",cronCron:"Cron",cronSession:"会话",cronMain:"主会话",cronIsolated:"独立会话",cronWakeMode:"唤醒方式",cronNextHeartbeat:"下次心跳",cronNow:"立即",cronPayload:"负载",cronSystemEvent:"系统事件",cronAgentTurn:"代理轮次",cronSystemText:"系统文本",cronAgentMessage:"Agent 消息",cronDelivery:"投递",cronAnnounceSummary:"公布摘要（默认）",cronNoneInternal:"无（内部）",cronChannel:"通道",cronTo:"发送至",cronAddJob:"添加任务",cronJobsTitle:"任务列表",cronJobsSub:"网关中所有已调度任务。",cronNoJobsYet:"暂无任务。",cronRunHistory:"运行历史",cronRunHistorySub:"最近运行：",cronSelectJob:"（选择任务）",cronNoRunsYet:"暂无运行记录。",cronSelectJobToInspect:"选择任务以查看运行历史。",cronRunAt:"运行时间",cronUnit:"单位",cronMinutes:"分钟",cronHours:"小时",cronDays:"天",cronExpression:"表达式",cronTimeoutSeconds:"超时（秒）",cronLast:"上次",agentsFiles:"文件",agentsRuntime:"运行时",agentsWeb:"网页",agentsMemory:"记忆",agentsSessions:"会话",agentsUi:"界面",agentsMessaging:"消息",agentsAutomation:"自动化",agentsReadFile:"读取文件内容",agentsWriteFile:"创建或覆盖文件",agentsEdit:"精确编辑",agentsApplyPatch:"应用补丁（OpenAI）",agentsExec:"执行 shell 命令",agentsProcess:"管理后台进程",agentsWebSearch:"网页搜索",agentsWebFetch:"抓取网页内容",agentsMemorySearch:"语义搜索",agentsMemoryGet:"读取记忆文件",agentsSessionsList:"列出会话",agentsSessionsHistory:"会话历史",agentsSessionsSend:"发送到会话",agentsSessionsSpawn:"派生子代理",agentsSessionStatus:"会话状态",agentsBrowser:"控制浏览器",agentsCanvas:"控制画布",agentsMessage:"发送消息",agentsScheduleTasks:"安排任务",agentsGatewayControl:"网关控制",agentsNodesDevices:"节点与设备",agentsListAgents:"列出代理",agentsImageUnderstanding:"图像理解",agentsNodes:"节点",agentsAgents:"代理",agentsMedia:"媒体",agentsTitle:"代理",agentsConfigured:"已配置。",agentsNoFound:"未找到代理。",agentsSelectAgent:"选择代理",agentsSelectAgentSub:"选择一个代理以查看其工作区与工具。",agentsWorkspaceRouting:"代理工作区与路由。",agentsProfileMinimal:"最小",agentsProfileCoding:"编程",agentsProfileMessaging:"消息",agentsProfileFull:"完整",agentsDefault:"默认",agentsSelected:"已选",agentsAllSkills:"全部技能",agentsCurrentModel:"当前",agentsInheritDefault:"继承默认",agentsOverview:"概览",agentsOverviewSub:"工作区路径与身份元数据。",agentsWorkspace:"工作区",agentsPrimaryModel:"主模型",agentsIdentityName:"身份名称",agentsDefaultLabel:"默认",agentsIdentityEmoji:"身份表情",agentsSkillsFilter:"技能筛选",agentsModelSelection:"模型选择",agentsPrimaryModelLabel:"主模型",agentsPrimaryModelDefault:"（默认）",agentsFallbacksLabel:"备选（逗号分隔）",agentsReloadConfig:"重新加载配置",agentsAgentContext:"代理上下文",agentsContextWorkspaceIdentity:"工作区、身份与模型配置。",agentsContextWorkspaceScheduling:"工作区与调度目标。",agentsChannels:"渠道",agentsChannelsSub:"网关渠道状态快照。",agentsLoadChannels:"加载渠道以查看实时状态。",agentsNoChannels:"未找到渠道。",agentsConnected:"已连接",agentsConfiguredLabel:"已配置",agentsEnabled:"已启用",agentsDisabled:"已禁用",agentsNoAccounts:"无账号",agentsNotConfigured:"未配置",agentsScheduler:"调度器",agentsSchedulerSub:"网关定时状态。",agentsNextWake:"下次唤醒",agentsCronJobs:"代理定时任务",agentsCronJobsSub:"针对此代理的定时任务。",agentsNoJobsAssigned:"未分配任务。",agentsCoreFiles:"核心文件",agentsCoreFilesSub:"引导人设、身份与工具指引。",agentsLoadWorkspaceFiles:"加载代理工作区文件以编辑核心说明。",agentsNoFilesFound:"未找到文件。",agentsSelectFileToEdit:"选择要编辑的文件。",agentsReset:"重置",agentsFileMissingCreate:"该文件不存在。保存将在代理工作区中创建。",agentsUnavailable:"不可用",agentsTabOverview:"概览",agentsTabFiles:"文件",agentsTabTools:"工具",agentsTabSkills:"技能",agentsTabChannels:"渠道",agentsTabCron:"定时任务",agentsFallback:"备选",agentsNever:"从未",agentsLastRefresh:"上次刷新",agentsSkillsPanelSub:"每代理技能允许列表与工作区技能。",agentsUseAll:"全部启用",agentsDisableAll:"全部禁用",agentsLoadConfigForSkills:"加载网关配置以设置每代理技能。",agentsCustomAllowlist:"此代理使用自定义技能允许列表。",agentsAllSkillsEnabled:"所有技能已启用。禁用任意技能将创建每代理允许列表。",agentsLoadSkillsForAgent:"加载此代理的技能以查看工作区相关条目。",agentsFilter:"筛选",agentsNoSkillsFound:"未找到技能。",agentsToolsGlobalAllow:"已设置全局 tools.allow。代理覆盖无法启用被全局禁止的工具。",agentsProfile:"配置集",agentsSource:"来源",agentsStatus:"状态",agentsUnsaved:"未保存",agentsQuickPresets:"快捷预设",agentsInherit:"继承",agentsToolsTitle:"工具",agentsToolsSub:"每代理工具配置集与覆盖。",agentsToolAccess:"工具访问",agentsToolsSubText:"此代理的配置集与每工具覆盖。",agentsLoadConfigForTools:"加载网关配置以调整工具配置集。",agentsExplicitAllowlist:"此代理在配置中使用显式允许列表。工具覆盖在配置页管理。",agentsEnableAll:"全部启用",agentsEnabledCount:"已启用。",skillsTitle:"技能",skillsSub:"内置、托管与工作区技能。",skillsSearchPlaceholder:"搜索技能",skillsShown:"条显示",skillsWorkspace:"工作区技能",skillsBuiltIn:"内置技能",skillsInstalled:"已安装技能",skillsExtra:"额外技能",skillsOther:"其他技能",skillsAdd:"新增",skillsAddSkill:"添加技能",skillsUploadName:"技能名称（英文）",skillsUploadNamePlaceholder:"如 my-skill",skillsUploadFile:"文件",skillsUploadFileHint:"SKILL.md 或包含 SKILL.md 的 .zip",skillsUploadSingleHint:"单文件必须为 SKILL.md",skillsUploadZipHint:"压缩包必须包含 SKILL.md",skillsUploadSubmit:"上传",skillsUploadSuccess:"技能上传成功",skillsDelete:"删除",skillsDeleteConfirm:"确定删除此技能？",skillsSource:"来源",skillsPath:"路径",skillsNoDoc:"暂无文档。",skillsEligible:"可用",skillsDisabled:"已禁用",skillsRequiresBins:"需要命令",skillsRequiresEnv:"需要环境变量",skillsRequiresConfig:"需要配置",skillsMissing:"缺失",nodesTitle:"节点",nodesSub:"已配对设备与在线连接。",nodesNoFound:"未找到节点。",nodesDevices:"设备",nodesDevicesSub:"配对请求与角色令牌。",nodesPending:"待处理",nodesPaired:"已配对",nodesNoPairedDevices:"暂无已配对设备。",nodesRoleLabel:"角色：",nodesRoleNone:"角色：-",nodesRepairSuffix:" · 修复",nodesRequested:"请求于 ",nodesApprove:"批准",nodesReject:"拒绝",nodesRolesLabel:"角色：",nodesScopesLabel:"范围：",nodesTokensNone:"令牌：无",nodesTokens:"令牌",nodesTokenRevoked:"已撤销",nodesTokenActive:"有效",nodesRotate:"轮换",nodesRevoke:"撤销",nodesBindingTitle:"Exec 节点绑定",nodesBindingSub:"在使用 ",nodesBindingFormModeHint:"请在 Config 选项卡中切换到表单模式以在此编辑绑定。",nodesLoadConfigHint:"加载配置以编辑绑定。",nodesLoadConfig:"加载配置",nodesDefaultBinding:"默认绑定",nodesDefaultBindingSub:"当代理未覆盖节点绑定时使用。",nodesNodeLabel:"节点",nodesAnyNode:"任意节点",nodesNoNodesSystemRun:"没有支持 system.run 的节点。",nodesNoAgentsFound:"未找到代理。",nodesExecApprovalsTitle:"Exec 审批",nodesExecApprovalsSub:"exec host=gateway/node 的允许列表与审批策略。",nodesLoadExecApprovalsHint:"加载 exec 审批以编辑允许列表。",nodesLoadApprovals:"加载审批",nodesTarget:"目标",nodesTargetSub:"网关编辑本地审批；节点编辑所选节点。",nodesHost:"主机",nodesHostGateway:"网关",nodesHostNode:"节点",nodesSelectNode:"选择节点",nodesNoNodesExecApprovals:"尚无节点提供 exec 审批。",nodesScope:"范围",nodesDefaults:"默认",nodesSecurity:"安全",nodesSecurityDefaultSub:"默认安全模式。",nodesSecurityAgentSubPrefix:"默认：",nodesMode:"模式",nodesUseDefaultPrefix:"使用默认（",nodesUseDefaultButton:"使用默认",nodesSecurityDeny:"拒绝",nodesSecurityAllowlist:"允许列表",nodesSecurityFull:"完全",nodesAsk:"询问",nodesAskDefaultSub:"默认提示策略。",nodesAskAgentSubPrefix:"默认：",nodesAskOff:"关",nodesAskOnMiss:"缺失时",nodesAskAlways:"始终",nodesAskFallback:"询问回退",nodesAskFallbackDefaultSub:"当 UI 提示不可用时应用。",nodesAskFallbackAgentSubPrefix:"默认：",nodesFallback:"回退",nodesAutoAllowSkills:"自动允许技能 CLI",nodesAutoAllowSkillsDefaultSub:"允许网关列出的技能可执行文件。",nodesAutoAllowSkillsUsingDefault:"使用默认（",nodesAutoAllowSkillsOverride:"覆盖（",nodesEnabled:"启用",nodesAllowlist:"允许列表",nodesAllowlistSub:"不区分大小写的 glob 模式。",nodesAddPattern:"添加模式",nodesNoAllowlistEntries:"尚无允许列表条目。",nodesNewPattern:"新模式",nodesLastUsedPrefix:"上次使用：",nodesPattern:"模式",nodesRemove:"移除",nodesDefaultAgent:"默认代理",nodesAgent:"代理",nodesUsesDefault:"使用默认（",nodesOverride:"覆盖：",nodesBinding:"绑定",nodesChipPaired:"已配对",nodesChipUnpaired:"未配对",nodesConnected:"已连接",nodesOffline:"离线",nodesNever:"从未",configEnv:"环境",configUpdate:"更新",configAgents:"代理",configAuth:"认证",configChannels:"通道",configMessages:"消息",configCommands:"命令",configHooks:"钩子",configSkills:"技能",configTools:"工具",configGateway:"网关",configWizard:"设置向导",configMeta:"元数据",configLogging:"日志",configBrowser:"浏览器",configUi:"界面",configModels:"模型",configBindings:"绑定",configBroadcast:"广播",configAudio:"音频",configSession:"会话",configCron:"定时",configWeb:"Web",configDiscovery:"发现",configCanvasHost:"画布主机",configTalk:"语音",configPlugins:"插件",configEnvVars:"环境变量",configEnvVarsDesc:"传入网关进程的环境变量",configUpdatesDesc:"自动更新与发布渠道",configAgentsDesc:"代理配置、模型与身份",configAuthDesc:"API 密钥与认证配置",configChannelsDesc:"消息通道（Telegram、Discord、Slack 等）",configMessagesDesc:"消息处理与路由",configCommandsDesc:"自定义斜杠命令",configHooksDesc:"Webhook 与事件钩子",configSkillsDesc:"技能包与能力",configToolsDesc:"工具配置（浏览器、搜索等）",configGatewayDesc:"网关服务（端口、认证、绑定）",configWizardDesc:"设置向导状态与历史",configMetaDesc:"网关元数据与版本",configLoggingDesc:"日志级别与输出",configBrowserDesc:"浏览器自动化",configUiDesc:"界面偏好",configModelsDesc:"AI 模型与提供商",configBindingsDesc:"快捷键绑定",configBroadcastDesc:"广播与通知",configAudioDesc:"音频输入/输出",configSessionDesc:"会话管理与持久化",configCronDesc:"定时任务与自动化",configWebDesc:"Web 服务与 API",configDiscoveryDesc:"服务发现与网络",configCanvasHostDesc:"画布渲染与显示",configTalkDesc:"语音与朗读",configPluginsDesc:"插件管理",configSettingsTitle:"设置",configSearchPlaceholder:"搜索设置…",configAllSettings:"全部设置",configForm:"表单",configRaw:"原始",configUnsavedChanges:"未保存的更改",configUnsavedChangesLabel:"未保存的更改",configOneUnsavedChange:"1 项未保存的更改",configNoChanges:"无更改",configApplying:"应用中…",configApply:"应用",configUpdating:"更新中…",configUpdateButton:"更新",configViewPrefix:"查看 ",configPendingChange:"项待处理更改",configPendingChanges:"项待处理更改",configLoadingSchema:"正在加载架构…",configFormUnsafeWarning:"表单视图无法安全编辑部分字段，请使用原始模式以免丢失配置项。",configRawJson5:"原始 JSON5",configValidityValid:"有效",configValidityInvalid:"无效",configValidityUnknown:"未知",configSchemaUnavailable:"架构不可用。",configUnsupportedSchema:"不支持的架构，请使用原始模式。",configNoSettingsMatchPrefix:"没有匹配「",configNoSettingsMatchSuffix:"」的设置",configNoSettingsInSection:"本部分暂无设置",configUnsupportedSchemaNode:"不支持的架构节点，请使用原始模式。",configSubnavAll:"全部",envVarsSection:"Vars (env.vars)",envModelEnvSection:"模型环境变量 (env.modelEnv)",envShellEnvSection:"Shell 环境 (env.shellEnv)",envVarsKey:"Key",envVarsValue:"Value",envVarsAdd:"新增",envVarsDelete:"删除",envVarsSave:"保存",envVarsEmpty:"暂无环境变量，点击添加创建。",envVarsKeyPlaceholder:"如 API_KEY",envVarsValuePlaceholder:"如 your-secret-value",debugSnapshots:"快照",debugSnapshotsSub:"状态、健康与心跳数据。",debugStatus:"状态",debugHealth:"健康",debugLastHeartbeat:"最近心跳",debugSecurityAudit:"安全审计",debugManualRpc:"手动 RPC",debugManualRpcSub:"使用 JSON 参数发送原始网关方法。",debugMethod:"方法",debugParams:"参数",debugCall:"调用",debugCritical:"严重",debugWarnings:"警告",debugNoCritical:"无严重问题",debugInfo:"信息",debugSecurityAuditDetails:"运行 openclaw security audit --deep 查看详细信息。",debugModels:"模型",debugModelsSub:"来自 models.list 的目录。",debugEventLog:"事件日志",debugEventLogSub:"最新的网关事件。",debugNoEvents:"暂无事件。",logsTitle:"日志",logsSub:"网关文件日志（JSONL）。",logsExportFiltered:"导出已筛选",logsExportVisible:"导出可见"},Cd={en:Sd,zh:Ad};function i(e){return Cd[Va()][e]}const Md={env:{label:"configEnvVars",desc:"configEnvVarsDesc"},update:{label:"configUpdate",desc:"configUpdatesDesc"},agents:{label:"configAgents",desc:"configAgentsDesc"},auth:{label:"configAuth",desc:"configAuthDesc"},channels:{label:"configChannels",desc:"configChannelsDesc"},messages:{label:"configMessages",desc:"configMessagesDesc"},commands:{label:"configCommands",desc:"configCommandsDesc"},hooks:{label:"configHooks",desc:"configHooksDesc"},skills:{label:"configSkills",desc:"configSkillsDesc"},tools:{label:"configTools",desc:"configToolsDesc"},gateway:{label:"configGateway",desc:"configGatewayDesc"},wizard:{label:"configWizard",desc:"configWizardDesc"},meta:{label:"configMeta",desc:"configMetaDesc"},logging:{label:"configLogging",desc:"configLoggingDesc"},browser:{label:"configBrowser",desc:"configBrowserDesc"},ui:{label:"configUi",desc:"configUiDesc"},models:{label:"configModels",desc:"configModelsDesc"},bindings:{label:"configBindings",desc:"configBindingsDesc"},broadcast:{label:"configBroadcast",desc:"configBroadcastDesc"},audio:{label:"configAudio",desc:"configAudioDesc"},session:{label:"configSession",desc:"configSessionDesc"},cron:{label:"configCron",desc:"configCronDesc"},web:{label:"configWeb",desc:"configWebDesc"},discovery:{label:"configDiscovery",desc:"configDiscoveryDesc"},canvasHost:{label:"configCanvasHost",desc:"configCanvasHostDesc"},talk:{label:"configTalk",desc:"configTalkDesc"},plugins:{label:"configPlugins",desc:"configPluginsDesc"}};function Ga(e){const t=Md[e];return t?{label:i(t.label),description:i(t.desc)}:{label:e,description:""}}function Ed(e){const{values:t,original:n}=e;return t.name!==n.name||t.displayName!==n.displayName||t.about!==n.about||t.picture!==n.picture||t.banner!==n.banner||t.website!==n.website||t.nip05!==n.nip05||t.lud16!==n.lud16}function Td(e){const{state:t,callbacks:n,accountId:s}=e,a=Ed(t),o=(d,u,f={})=>{const{type:g="text",placeholder:m,maxLength:v,help:k}=f,c=t.values[d]??"",p=t.fieldErrors[d],h=`nostr-profile-${d}`;return g==="textarea"?r`
        <div class="form-field" style="margin-bottom: 12px;">
          <label for="${h}" style="display: block; margin-bottom: 4px; font-weight: 500;">
            ${u}
          </label>
          <textarea
            id="${h}"
            .value=${c}
            placeholder=${m??""}
            maxlength=${v??2e3}
            rows="3"
            style="width: 100%; padding: 8px; border: 1px solid var(--border-color); border-radius: 4px; resize: vertical; font-family: inherit;"
            @input=${b=>{const S=b.target;n.onFieldChange(d,S.value)}}
            ?disabled=${t.saving}
          ></textarea>
          ${k?r`<div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">${k}</div>`:y}
          ${p?r`<div style="font-size: 12px; color: var(--danger-color); margin-top: 2px;">${p}</div>`:y}
        </div>
      `:r`
      <div class="form-field" style="margin-bottom: 12px;">
        <label for="${h}" style="display: block; margin-bottom: 4px; font-weight: 500;">
          ${u}
        </label>
        <input
          id="${h}"
          type=${g}
          .value=${c}
          placeholder=${m??""}
          maxlength=${v??256}
          style="width: 100%; padding: 8px; border: 1px solid var(--border-color); border-radius: 4px;"
          @input=${b=>{const S=b.target;n.onFieldChange(d,S.value)}}
          ?disabled=${t.saving}
        />
        ${k?r`<div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">${k}</div>`:y}
        ${p?r`<div style="font-size: 12px; color: var(--danger-color); margin-top: 2px;">${p}</div>`:y}
      </div>
    `},l=()=>{const d=t.values.picture;return d?r`
      <div style="margin-bottom: 12px;">
        <img
          src=${d}
          alt=${i("nostrProfilePreview")}
          style="max-width: 80px; max-height: 80px; border-radius: 50%; object-fit: cover; border: 2px solid var(--border-color);"
          @error=${u=>{const f=u.target;f.style.display="none"}}
          @load=${u=>{const f=u.target;f.style.display="block"}}
        />
      </div>
    `:y};return r`
    <div class="nostr-profile-form" style="padding: 16px; background: var(--bg-secondary); border-radius: 8px; margin-top: 12px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
        <div style="font-weight: 600; font-size: 16px;">${i("nostrEditProfile")}</div>
        <div style="font-size: 12px; color: var(--text-muted);">${i("nostrAccount")}: ${s}</div>
      </div>

      ${t.error?r`<div class="callout danger" style="margin-bottom: 12px;">${t.error}</div>`:y}

      ${t.success?r`<div class="callout success" style="margin-bottom: 12px;">${t.success}</div>`:y}

      ${l()}

      ${o("name",i("nostrUsername"),{placeholder:"satoshi",maxLength:256,help:"Short username (e.g., satoshi)"})}

      ${o("displayName",i("nostrDisplayName"),{placeholder:"Satoshi Nakamoto",maxLength:256,help:"Your full display name"})}

      ${o("about",i("nostrBio"),{type:"textarea",placeholder:"Tell people about yourself...",maxLength:2e3,help:"A brief bio or description"})}

      ${o("picture",i("nostrAvatarUrl"),{type:"url",placeholder:"https://example.com/avatar.jpg",help:"HTTPS URL to your profile picture"})}

      ${t.showAdvanced?r`
            <div style="border-top: 1px solid var(--border-color); padding-top: 12px; margin-top: 12px;">
              <div style="font-weight: 500; margin-bottom: 12px; color: var(--text-muted);">${i("nostrAdvanced")}</div>

              ${o("banner",i("nostrBannerUrl"),{type:"url",placeholder:"https://example.com/banner.jpg",help:"HTTPS URL to a banner image"})}

              ${o("website",i("nostrWebsite"),{type:"url",placeholder:"https://example.com",help:"Your personal website"})}

              ${o("nip05",i("nostrNip05"),{placeholder:"you@example.com",help:"Verifiable identifier (e.g., you@domain.com)"})}

              ${o("lud16",i("nostrLud16"),{placeholder:"you@getalby.com",help:"Lightning address for tips (LUD-16)"})}
            </div>
          `:y}

      <div style="display: flex; gap: 8px; margin-top: 16px; flex-wrap: wrap;">
        <button
          class="btn primary"
          @click=${n.onSave}
          ?disabled=${t.saving||!a}
        >
          ${t.saving?i("commonSaving"):i("nostrSavePublish")}
        </button>

        <button
          class="btn"
          @click=${n.onImport}
          ?disabled=${t.importing||t.saving}
        >
          ${t.importing?i("nostrImporting"):i("nostrImportRelays")}
        </button>

        <button
          class="btn"
          @click=${n.onToggleAdvanced}
        >
          ${t.showAdvanced?i("nostrHideAdvanced"):i("nostrShowAdvanced")}
        </button>

        <button
          class="btn"
          @click=${n.onCancel}
          ?disabled=${t.saving}
        >
          ${i("commonCancel")}
        </button>
      </div>

      ${a?r`
              <div style="font-size: 12px; color: var(--warning-color); margin-top: 8px">
                ${i("nostrUnsavedChanges")}
              </div>
            `:y}
    </div>
  `}function _d(e){const t={name:e?.name??"",displayName:e?.displayName??"",about:e?.about??"",picture:e?.picture??"",banner:e?.banner??"",website:e?.website??"",nip05:e?.nip05??"",lud16:e?.lud16??""};return{values:t,original:{...t},saving:!1,importing:!1,error:null,success:null,fieldErrors:{},showAdvanced:!!(e?.banner||e?.website||e?.nip05||e?.lud16)}}async function Pd(e,t){await vd(e,t),await _e(e,!0)}async function Ld(e){await yd(e),await _e(e,!0)}async function Id(e){await bd(e),await _e(e,!0)}async function Dd(e){const t=e.configForm?.channels,n=t!=null&&typeof t=="object";n&&!window.confirm(i("channelsConfigSaveConfirm"))||(n?await Pe(e,{channels:t}):await fa(e),await Z(e),await _e(e,!0))}async function Rd(e){await Z(e),await _e(e,!0)}function Nd(e){if(!Array.isArray(e))return{};const t={};for(const n of e){if(typeof n!="string")continue;const[s,...a]=n.split(":");if(!s||a.length===0)continue;const o=s.trim(),l=a.join(":").trim();o&&l&&(t[o]=l)}return t}function Zl(e){return(e.channelsSnapshot?.channelAccounts?.nostr??[])[0]?.accountId??e.nostrProfileAccountId??"default"}function Xl(e,t=""){return`/api/channels/nostr/${encodeURIComponent(e)}/profile${t}`}function Ud(e,t,n){e.nostrProfileAccountId=t,e.nostrProfileFormState=_d(n??void 0)}function Od(e){e.nostrProfileFormState=null,e.nostrProfileAccountId=null}function Fd(e,t,n){const s=e.nostrProfileFormState;s&&(e.nostrProfileFormState={...s,values:{...s.values,[t]:n},fieldErrors:{...s.fieldErrors,[t]:""}})}function Bd(e){const t=e.nostrProfileFormState;t&&(e.nostrProfileFormState={...t,showAdvanced:!t.showAdvanced})}async function Hd(e){const t=e.nostrProfileFormState;if(!t||t.saving)return;const n=Zl(e);e.nostrProfileFormState={...t,saving:!0,error:null,success:null,fieldErrors:{}};try{const s=await fetch(Xl(n),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t.values)}),a=await s.json().catch(()=>null);if(!s.ok||a?.ok===!1||!a){const o=a?.error??`Profile update failed (${s.status})`;e.nostrProfileFormState={...t,saving:!1,error:o,success:null,fieldErrors:Nd(a?.details)};return}if(!a.persisted){e.nostrProfileFormState={...t,saving:!1,error:"Profile publish failed on all relays.",success:null};return}e.nostrProfileFormState={...t,saving:!1,error:null,success:"Profile published to relays.",fieldErrors:{},original:{...t.values}},await _e(e,!0)}catch(s){e.nostrProfileFormState={...t,saving:!1,error:`Profile update failed: ${String(s)}`,success:null}}}async function zd(e){const t=e.nostrProfileFormState;if(!t||t.importing)return;const n=Zl(e);e.nostrProfileFormState={...t,importing:!0,error:null,success:null};try{const s=await fetch(Xl(n,"/import"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({autoMerge:!0})}),a=await s.json().catch(()=>null);if(!s.ok||a?.ok===!1||!a){const u=a?.error??`Profile import failed (${s.status})`;e.nostrProfileFormState={...t,importing:!1,error:u,success:null};return}const o=a.merged??a.imported??null,l=o?{...t.values,...o}:t.values,d=!!(l.banner||l.website||l.nip05||l.lud16);e.nostrProfileFormState={...t,importing:!1,values:l,error:null,success:a.saved?"Profile imported from relays. Review and publish.":"Profile imported. Review and publish.",showAdvanced:d},a.saved&&await _e(e,!0)}catch(s){e.nostrProfileFormState={...t,importing:!1,error:`Profile import failed: ${String(s)}`,success:null}}}function er(e){const t=(e??"").trim();if(!t)return null;const n=t.split(":").filter(Boolean);if(n.length<3||n[0]!=="agent")return null;const s=n[1]?.trim(),a=n.slice(2).join(":");return!s||!a?null:{agentId:s,rest:a}}const ha=450;function En(e,t=!1){e.chatScrollFrame&&cancelAnimationFrame(e.chatScrollFrame),e.chatScrollTimeout!=null&&(clearTimeout(e.chatScrollTimeout),e.chatScrollTimeout=null);const n=()=>{const s=e.querySelector(".chat-thread");if(s){const a=getComputedStyle(s).overflowY;if(a==="auto"||a==="scroll"||s.scrollHeight-s.clientHeight>1)return s}return document.scrollingElement??document.documentElement};e.updateComplete.then(()=>{e.chatScrollFrame=requestAnimationFrame(()=>{e.chatScrollFrame=null;const s=n();if(!s)return;const a=s.scrollHeight-s.scrollTop-s.clientHeight,o=t&&!e.chatHasAutoScrolled;if(!(o||e.chatUserNearBottom||a<ha)){e.chatNewMessagesBelow=!0;return}o&&(e.chatHasAutoScrolled=!0),s.scrollTop=s.scrollHeight,e.chatUserNearBottom=!0,e.chatNewMessagesBelow=!1;const d=o?150:120;e.chatScrollTimeout=window.setTimeout(()=>{e.chatScrollTimeout=null;const u=n();if(!u)return;const f=u.scrollHeight-u.scrollTop-u.clientHeight;(o||e.chatUserNearBottom||f<ha)&&(u.scrollTop=u.scrollHeight,e.chatUserNearBottom=!0)},d)})})}function tr(e,t=!1){e.logsScrollFrame&&cancelAnimationFrame(e.logsScrollFrame),e.updateComplete.then(()=>{e.logsScrollFrame=requestAnimationFrame(()=>{e.logsScrollFrame=null;const n=e.querySelector(".log-stream");if(!n)return;const s=n.scrollHeight-n.scrollTop-n.clientHeight;(t||s<80)&&(n.scrollTop=n.scrollHeight)})})}function Kd(e,t){const n=t.currentTarget;if(!n)return;const s=n.scrollHeight-n.scrollTop-n.clientHeight;e.chatUserNearBottom=s<ha,e.chatUserNearBottom&&(e.chatNewMessagesBelow=!1)}function qd(e,t){const n=t.currentTarget;if(!n)return;const s=n.scrollHeight-n.scrollTop-n.clientHeight;e.logsAtBottom=s<80}function ci(e){e.chatHasAutoScrolled=!1,e.chatUserNearBottom=!0,e.chatNewMessagesBelow=!1}function jd(e,t){if(e.length===0)return;const n=new Blob([`${e.join(`
`)}
`],{type:"text/plain"}),s=URL.createObjectURL(n),a=document.createElement("a"),o=new Date().toISOString().slice(0,19).replace(/[:T]/g,"-");a.href=s,a.download=`openclaw-logs-${t}-${o}.log`,a.click(),URL.revokeObjectURL(s)}function Wd(e){if(typeof ResizeObserver>"u")return;const t=e.querySelector(".topbar");if(!t)return;const n=()=>{const{height:s}=t.getBoundingClientRect();e.style.setProperty("--topbar-height",`${s}px`)};n(),e.topbarObserver=new ResizeObserver(()=>n()),e.topbarObserver.observe(t)}function vs(e){const t=(e??"").trim();if(!t)return"";const n=t.match(/^(?:wss?:\/\/)?([^/]+?)(?:\/|$)/);return n?n[1]:t}function Vd(e){const t=vs(e);return t?`${typeof location<"u"&&location.protocol==="https:"?"wss":"ws"}://${t}`:""}function Jt(e){const t=vs(e);return t?`${typeof location<"u"&&location.protocol==="https:"?"https":"http"}://${t}`:""}async function ys(e){if(!(!e.client||!e.connected)&&!e.debugLoading){e.debugLoading=!0;try{const[t,n,s,a]=await Promise.all([e.client.request("status",{}),e.client.request("health",{}),e.client.request("models.list",{}),e.client.request("last-heartbeat",{})]);e.debugStatus=t,e.debugHealth=n;const o=s;e.debugModels=Array.isArray(o?.models)?o?.models:[],e.debugHeartbeat=a}catch(t){e.debugCallError=String(t)}finally{e.debugLoading=!1}}}async function Gd(e){if(!(!e.client||!e.connected)){e.debugCallError=null,e.debugCallResult=null;try{const t=e.debugCallParams.trim()?JSON.parse(e.debugCallParams):{},n=await e.client.request(e.debugCallMethod.trim(),t);e.debugCallResult=JSON.stringify(n,null,2)}catch(t){e.debugCallError=String(t)}}}const Qd=2e3,Jd=new Set(["trace","debug","info","warn","error","fatal"]);function Yd(e){if(typeof e!="string")return null;const t=e.trim();if(!t.startsWith("{")||!t.endsWith("}"))return null;try{const n=JSON.parse(t);return!n||typeof n!="object"?null:n}catch{return null}}function Zd(e){if(typeof e!="string")return null;const t=e.toLowerCase();return Jd.has(t)?t:null}function Xd(e){if(!e.trim())return{raw:e,message:e};try{const t=JSON.parse(e),n=t&&typeof t._meta=="object"&&t._meta!==null?t._meta:null,s=typeof t.time=="string"?t.time:typeof n?.date=="string"?n?.date:null,a=Zd(n?.logLevelName??n?.level),o=typeof t[0]=="string"?t[0]:typeof n?.name=="string"?n?.name:null,l=Yd(o);let d=null;l&&(typeof l.subsystem=="string"?d=l.subsystem:typeof l.module=="string"&&(d=l.module)),!d&&o&&o.length<120&&(d=o);let u=null;return typeof t[1]=="string"?u=t[1]:!l&&typeof t[0]=="string"?u=t[0]:typeof t.message=="string"&&(u=t.message),{raw:e,time:s,level:a,subsystem:d,message:u??e,meta:n??void 0}}catch{return{raw:e,message:e}}}async function Qa(e,t){if(!(!e.client||!e.connected)&&!(e.logsLoading&&!t?.quiet)){t?.quiet||(e.logsLoading=!0),e.logsError=null;try{const s=await e.client.request("logs.tail",{cursor:t?.reset?void 0:e.logsCursor??void 0,limit:e.logsLimit,maxBytes:e.logsMaxBytes}),o=(Array.isArray(s.lines)?s.lines.filter(d=>typeof d=="string"):[]).map(Xd),l=!!(t?.reset||s.reset||e.logsCursor==null);e.logsEntries=l?o:[...e.logsEntries,...o].slice(-Qd),typeof s.cursor=="number"&&(e.logsCursor=s.cursor),typeof s.file=="string"&&(e.logsFile=s.file),e.logsTruncated=!!s.truncated,e.logsLastFetchAt=Date.now()}catch(n){e.logsError=String(n)}finally{t?.quiet||(e.logsLoading=!1)}}}async function bs(e,t){if(!(!e.client||!e.connected)&&!e.nodesLoading){e.nodesLoading=!0,t?.quiet||(e.lastError=null);try{const n=await e.client.request("node.list",{});e.nodes=Array.isArray(n.nodes)?n.nodes:[]}catch(n){t?.quiet||(e.lastError=String(n))}finally{e.nodesLoading=!1}}}function eu(e){e.nodesPollInterval==null&&(e.nodesPollInterval=window.setInterval(()=>{bs(e,{quiet:!0})},5e3))}function tu(e){e.nodesPollInterval!=null&&(clearInterval(e.nodesPollInterval),e.nodesPollInterval=null)}function Ja(e){e.logsPollInterval==null&&(e.logsPollInterval=window.setInterval(()=>{e.tab==="logs"&&Qa(e,{quiet:!0})},2e3))}function Ya(e){e.logsPollInterval!=null&&(clearInterval(e.logsPollInterval),e.logsPollInterval=null)}function Za(e){e.debugPollInterval==null&&(e.debugPollInterval=window.setInterval(()=>{e.tab==="debug"&&ys(e)},3e3))}function Xa(e){e.debugPollInterval!=null&&(clearInterval(e.debugPollInterval),e.debugPollInterval=null)}async function nu(e,t){if(!(!e.client||!e.connected||e.agentIdentityLoading)&&!e.agentIdentityById[t]){e.agentIdentityLoading=!0,e.agentIdentityError=null;try{const n=await e.client.request("agent.identity.get",{agentId:t});n&&(e.agentIdentityById={...e.agentIdentityById,[t]:n})}catch(n){e.agentIdentityError=String(n)}finally{e.agentIdentityLoading=!1}}}async function su(e,t){if(!e.client||!e.connected||e.agentIdentityLoading)return;const n=t.filter(s=>!e.agentIdentityById[s]);if(n.length!==0){e.agentIdentityLoading=!0,e.agentIdentityError=null;try{for(const s of n){const a=await e.client.request("agent.identity.get",{agentId:s});a&&(e.agentIdentityById={...e.agentIdentityById,[s]:a})}}catch(s){e.agentIdentityError=String(s)}finally{e.agentIdentityLoading=!1}}}async function au(e,t){if(!(!e.client||!e.connected)&&!e.agentSkillsLoading){e.agentSkillsLoading=!0,e.agentSkillsError=null;try{const n=await e.client.request("skills.status",{agentId:t});n&&(e.agentSkillsReport=n,e.agentSkillsAgentId=t)}catch(n){e.agentSkillsError=String(n)}finally{e.agentSkillsLoading=!1}}}async function nr(e){if(!(!e.client||!e.connected)&&!e.agentsLoading){e.agentsLoading=!0,e.agentsError=null;try{const t=await e.client.request("agents.list",{});if(t){e.agentsList=t;const n=e.agentsSelectedId,s=t.agents.some(a=>a.id===n);(!n||!s)&&(e.agentsSelectedId=t.defaultId??t.agents[0]?.id??null)}}catch(t){e.agentsError=String(t)}finally{e.agentsLoading=!1}}}const ou=/<\s*\/?\s*(?:think(?:ing)?|thought|antthinking|final)\b/i,zn=/<\s*\/?\s*final\b[^<>]*>/gi,di=/<\s*(\/?)\s*(?:think(?:ing)?|thought|antthinking)\b[^<>]*>/gi;function ui(e){const t=[],n=/(^|\n)(```|~~~)[^\n]*\n[\s\S]*?(?:\n\2(?:\n|$)|$)/g;for(const a of e.matchAll(n)){const o=(a.index??0)+a[1].length;t.push({start:o,end:o+a[0].length-a[1].length})}const s=/`+[^`]+`+/g;for(const a of e.matchAll(s)){const o=a.index??0,l=o+a[0].length;t.some(u=>o>=u.start&&l<=u.end)||t.push({start:o,end:l})}return t.sort((a,o)=>a.start-o.start),t}function pi(e,t){return t.some(n=>e>=n.start&&e<n.end)}function iu(e,t){return e.trimStart()}function lu(e,t){if(!e||!ou.test(e))return e;let n=e;if(zn.test(n)){zn.lastIndex=0;const d=[],u=ui(n);for(const f of n.matchAll(zn)){const g=f.index??0;d.push({start:g,length:f[0].length,inCode:pi(g,u)})}for(let f=d.length-1;f>=0;f--){const g=d[f];g.inCode||(n=n.slice(0,g.start)+n.slice(g.start+g.length))}}else zn.lastIndex=0;const s=ui(n);di.lastIndex=0;let a="",o=0,l=!1;for(const d of n.matchAll(di)){const u=d.index??0,f=d[1]==="/";pi(u,s)||(l?f&&(l=!1):(a+=n.slice(o,u),f||(l=!0)),o=u+d[0].length)}return a+=n.slice(o),iu(a)}function kn(e){return!e&&e!==0?"n/a":new Date(e).toLocaleString()}function te(e){if(!e&&e!==0)return"n/a";const t=Date.now()-e,n=Math.abs(t),s=t<0?"from now":"ago",a=Math.round(n/1e3);if(a<60)return t<0?"in <1m":`${a}s ago`;const o=Math.round(a/60);if(o<60)return`${o}m ${s}`;const l=Math.round(o/60);return l<48?`${l}h ${s}`:`${Math.round(l/24)}d ${s}`}function sr(e){if(!e&&e!==0)return"n/a";if(e<1e3)return`${e}ms`;const t=Math.round(e/1e3);if(t<60)return`${t}s`;const n=Math.round(t/60);if(n<60)return`${n}m`;const s=Math.round(n/60);return s<48?`${s}h`:`${Math.round(s/24)}d`}function va(e){return!e||e.length===0?"none":e.filter(t=>!!(t&&t.trim())).join(", ")}function gi(e,t=120){return e.length<=t?e:`${e.slice(0,Math.max(0,t-1))}…`}function ar(e,t){return e.length<=t?{text:e,truncated:!1,total:e.length}:{text:e.slice(0,Math.max(0,t)),truncated:!0,total:e.length}}function ss(e,t){const n=Number(e);return Number.isFinite(n)?n:t}function Os(e){return lu(e)}async function Tn(e){if(!(!e.client||!e.connected))try{const t=await e.client.request("cron.status",{});e.cronStatus=t}catch(t){e.cronError=String(t)}}async function xs(e){if(!(!e.client||!e.connected)&&!e.cronLoading){e.cronLoading=!0,e.cronError=null;try{const t=await e.client.request("cron.list",{includeDisabled:!0});e.cronJobs=Array.isArray(t.jobs)?t.jobs:[]}catch(t){e.cronError=String(t)}finally{e.cronLoading=!1}}}function ru(e){if(e.scheduleKind==="at"){const n=Date.parse(e.scheduleAt);if(!Number.isFinite(n))throw new Error("Invalid run time.");return{kind:"at",at:new Date(n).toISOString()}}if(e.scheduleKind==="every"){const n=ss(e.everyAmount,0);if(n<=0)throw new Error("Invalid interval amount.");const s=e.everyUnit;return{kind:"every",everyMs:n*(s==="minutes"?6e4:s==="hours"?36e5:864e5)}}const t=e.cronExpr.trim();if(!t)throw new Error("Cron expression required.");return{kind:"cron",expr:t,tz:e.cronTz.trim()||void 0}}function cu(e){if(e.payloadKind==="systemEvent"){const a=e.payloadText.trim();if(!a)throw new Error("System event text required.");return{kind:"systemEvent",text:a}}const t=e.payloadText.trim();if(!t)throw new Error("Agent message required.");const n={kind:"agentTurn",message:t},s=ss(e.timeoutSeconds,0);return s>0&&(n.timeoutSeconds=s),n}async function mi(e){if(!(!e.client||!e.connected||e.cronBusy)){e.cronBusy=!0,e.cronError=null;try{const t=ru(e.cronForm),n=cu(e.cronForm),s=e.cronForm.sessionTarget==="isolated"&&e.cronForm.payloadKind==="agentTurn"&&e.cronForm.deliveryMode?{mode:e.cronForm.deliveryMode==="announce"?"announce":"none",channel:e.cronForm.deliveryChannel.trim()||"last",to:e.cronForm.deliveryTo.trim()||void 0}:void 0,a=e.cronForm.agentId.trim(),o={name:e.cronForm.name.trim(),description:e.cronForm.description.trim()||void 0,agentId:a||void 0,enabled:e.cronForm.enabled,schedule:t,sessionTarget:e.cronForm.sessionTarget,wakeMode:e.cronForm.wakeMode,payload:n,delivery:s};if(!o.name)throw new Error("Name required.");await e.client.request("cron.add",o),e.cronForm={...e.cronForm,name:"",description:"",payloadText:""},await xs(e),await Tn(e)}catch(t){e.cronError=String(t)}finally{e.cronBusy=!1}}}async function fi(e,t,n){if(!(!e.client||!e.connected||e.cronBusy)){e.cronBusy=!0,e.cronError=null;try{await e.client.request("cron.update",{id:t.id,patch:{enabled:n}}),await xs(e),await Tn(e)}catch(s){e.cronError=String(s)}finally{e.cronBusy=!1}}}async function hi(e,t){if(!(!e.client||!e.connected||e.cronBusy)){e.cronBusy=!0,e.cronError=null;try{await e.client.request("cron.run",{id:t.id,mode:"force"}),await pn(e,t.id)}catch(n){e.cronError=String(n)}finally{e.cronBusy=!1}}}async function vi(e,t){if(!(!e.client||!e.connected||e.cronBusy)){e.cronBusy=!0,e.cronError=null;try{await e.client.request("cron.remove",{id:t.id}),e.cronRunsJobId===t.id&&(e.cronRunsJobId=null,e.cronRuns=[]),await xs(e),await Tn(e)}catch(n){e.cronError=String(n)}finally{e.cronBusy=!1}}}async function pn(e,t){if(!(!e.client||!e.connected))try{const n=await e.client.request("cron.runs",{id:t,limit:50});e.cronRunsJobId=t,e.cronRuns=Array.isArray(n.entries)?n.entries:[]}catch(n){e.cronError=String(n)}}const or="openclaw.device.auth.v1";function eo(e){return e.trim()}function du(e){if(!Array.isArray(e))return[];const t=new Set;for(const n of e){const s=n.trim();s&&t.add(s)}return[...t].toSorted()}function to(){try{const e=window.localStorage.getItem(or);if(!e)return null;const t=JSON.parse(e);return!t||t.version!==1||!t.deviceId||typeof t.deviceId!="string"||!t.tokens||typeof t.tokens!="object"?null:t}catch{return null}}function ir(e){try{window.localStorage.setItem(or,JSON.stringify(e))}catch{}}function uu(e){const t=to();if(!t||t.deviceId!==e.deviceId)return null;const n=eo(e.role),s=t.tokens[n];return!s||typeof s.token!="string"?null:s}function lr(e){const t=eo(e.role),n={version:1,deviceId:e.deviceId,tokens:{}},s=to();s&&s.deviceId===e.deviceId&&(n.tokens={...s.tokens});const a={token:e.token,role:t,scopes:du(e.scopes),updatedAtMs:Date.now()};return n.tokens[t]=a,ir(n),a}function rr(e){const t=to();if(!t||t.deviceId!==e.deviceId)return;const n=eo(e.role);if(!t.tokens[n])return;const s={...t,tokens:{...t.tokens}};delete s.tokens[n],ir(s)}const cr={p:0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffedn,n:0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3edn,h:8n,a:0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffecn,d:0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3n,Gx:0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51an,Gy:0x6666666666666666666666666666666666666666666666666666666666666658n},{p:me,n:Zn,Gx:yi,Gy:bi,a:Fs,d:Bs,h:pu}=cr,Ct=32,no=64,gu=(...e)=>{"captureStackTrace"in Error&&typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(...e)},ue=(e="")=>{const t=new Error(e);throw gu(t,ue),t},mu=e=>typeof e=="bigint",fu=e=>typeof e=="string",hu=e=>e instanceof Uint8Array||ArrayBuffer.isView(e)&&e.constructor.name==="Uint8Array",ot=(e,t,n="")=>{const s=hu(e),a=e?.length,o=t!==void 0;if(!s||o&&a!==t){const l=n&&`"${n}" `,d=o?` of length ${t}`:"",u=s?`length=${a}`:`type=${typeof e}`;ue(l+"expected Uint8Array"+d+", got "+u)}return e},ws=e=>new Uint8Array(e),dr=e=>Uint8Array.from(e),ur=(e,t)=>e.toString(16).padStart(t,"0"),pr=e=>Array.from(ot(e)).map(t=>ur(t,2)).join(""),Ve={_0:48,_9:57,A:65,F:70,a:97,f:102},xi=e=>{if(e>=Ve._0&&e<=Ve._9)return e-Ve._0;if(e>=Ve.A&&e<=Ve.F)return e-(Ve.A-10);if(e>=Ve.a&&e<=Ve.f)return e-(Ve.a-10)},gr=e=>{const t="hex invalid";if(!fu(e))return ue(t);const n=e.length,s=n/2;if(n%2)return ue(t);const a=ws(s);for(let o=0,l=0;o<s;o++,l+=2){const d=xi(e.charCodeAt(l)),u=xi(e.charCodeAt(l+1));if(d===void 0||u===void 0)return ue(t);a[o]=d*16+u}return a},mr=()=>globalThis?.crypto,vu=()=>mr()?.subtle??ue("crypto.subtle must be defined, consider polyfill"),Sn=(...e)=>{const t=ws(e.reduce((s,a)=>s+ot(a).length,0));let n=0;return e.forEach(s=>{t.set(s,n),n+=s.length}),t},yu=(e=Ct)=>mr().getRandomValues(ws(e)),as=BigInt,ht=(e,t,n,s="bad number: out of range")=>mu(e)&&t<=e&&e<n?e:ue(s),B=(e,t=me)=>{const n=e%t;return n>=0n?n:t+n},fr=e=>B(e,Zn),bu=(e,t)=>{(e===0n||t<=0n)&&ue("no inverse n="+e+" mod="+t);let n=B(e,t),s=t,a=0n,o=1n;for(;n!==0n;){const l=s/n,d=s%n,u=a-o*l;s=n,n=d,a=o,o=u}return s===1n?B(a,t):ue("no inverse")},xu=e=>{const t=br[e];return typeof t!="function"&&ue("hashes."+e+" not set"),t},Hs=e=>e instanceof Ee?e:ue("Point expected"),ya=2n**256n;class Ee{static BASE;static ZERO;X;Y;Z;T;constructor(t,n,s,a){const o=ya;this.X=ht(t,0n,o),this.Y=ht(n,0n,o),this.Z=ht(s,1n,o),this.T=ht(a,0n,o),Object.freeze(this)}static CURVE(){return cr}static fromAffine(t){return new Ee(t.x,t.y,1n,B(t.x*t.y))}static fromBytes(t,n=!1){const s=Bs,a=dr(ot(t,Ct)),o=t[31];a[31]=o&-129;const l=vr(a);ht(l,0n,n?ya:me);const u=B(l*l),f=B(u-1n),g=B(s*u+1n);let{isValid:m,value:v}=$u(f,g);m||ue("bad point: y not sqrt");const k=(v&1n)===1n,c=(o&128)!==0;return!n&&v===0n&&c&&ue("bad point: x==0, isLastByteOdd"),c!==k&&(v=B(-v)),new Ee(v,l,1n,B(v*l))}static fromHex(t,n){return Ee.fromBytes(gr(t),n)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}assertValidity(){const t=Fs,n=Bs,s=this;if(s.is0())return ue("bad point: ZERO");const{X:a,Y:o,Z:l,T:d}=s,u=B(a*a),f=B(o*o),g=B(l*l),m=B(g*g),v=B(u*t),k=B(g*B(v+f)),c=B(m+B(n*B(u*f)));if(k!==c)return ue("bad point: equation left != right (1)");const p=B(a*o),h=B(l*d);return p!==h?ue("bad point: equation left != right (2)"):this}equals(t){const{X:n,Y:s,Z:a}=this,{X:o,Y:l,Z:d}=Hs(t),u=B(n*d),f=B(o*a),g=B(s*d),m=B(l*a);return u===f&&g===m}is0(){return this.equals(zt)}negate(){return new Ee(B(-this.X),this.Y,this.Z,B(-this.T))}double(){const{X:t,Y:n,Z:s}=this,a=Fs,o=B(t*t),l=B(n*n),d=B(2n*B(s*s)),u=B(a*o),f=t+n,g=B(B(f*f)-o-l),m=u+l,v=m-d,k=u-l,c=B(g*v),p=B(m*k),h=B(g*k),b=B(v*m);return new Ee(c,p,b,h)}add(t){const{X:n,Y:s,Z:a,T:o}=this,{X:l,Y:d,Z:u,T:f}=Hs(t),g=Fs,m=Bs,v=B(n*l),k=B(s*d),c=B(o*m*f),p=B(a*u),h=B((n+s)*(l+d)-v-k),b=B(p-c),S=B(p+c),C=B(k-g*v),A=B(h*b),E=B(S*C),T=B(h*C),_=B(b*S);return new Ee(A,E,_,T)}subtract(t){return this.add(Hs(t).negate())}multiply(t,n=!0){if(!n&&(t===0n||this.is0()))return zt;if(ht(t,1n,Zn),t===1n)return this;if(this.equals(Mt))return Iu(t).p;let s=zt,a=Mt;for(let o=this;t>0n;o=o.double(),t>>=1n)t&1n?s=s.add(o):n&&(a=a.add(o));return s}multiplyUnsafe(t){return this.multiply(t,!1)}toAffine(){const{X:t,Y:n,Z:s}=this;if(this.equals(zt))return{x:0n,y:1n};const a=bu(s,me);B(s*a)!==1n&&ue("invalid inverse");const o=B(t*a),l=B(n*a);return{x:o,y:l}}toBytes(){const{x:t,y:n}=this.assertValidity().toAffine(),s=hr(n);return s[31]|=t&1n?128:0,s}toHex(){return pr(this.toBytes())}clearCofactor(){return this.multiply(as(pu),!1)}isSmallOrder(){return this.clearCofactor().is0()}isTorsionFree(){let t=this.multiply(Zn/2n,!1).double();return Zn%2n&&(t=t.add(this)),t.is0()}}const Mt=new Ee(yi,bi,1n,B(yi*bi)),zt=new Ee(0n,1n,1n,0n);Ee.BASE=Mt;Ee.ZERO=zt;const hr=e=>gr(ur(ht(e,0n,ya),no)).reverse(),vr=e=>as("0x"+pr(dr(ot(e)).reverse())),Fe=(e,t)=>{let n=e;for(;t-- >0n;)n*=n,n%=me;return n},wu=e=>{const n=e*e%me*e%me,s=Fe(n,2n)*n%me,a=Fe(s,1n)*e%me,o=Fe(a,5n)*a%me,l=Fe(o,10n)*o%me,d=Fe(l,20n)*l%me,u=Fe(d,40n)*d%me,f=Fe(u,80n)*u%me,g=Fe(f,80n)*u%me,m=Fe(g,10n)*o%me;return{pow_p_5_8:Fe(m,2n)*e%me,b2:n}},wi=0x2b8324804fc1df0b2b4d00993dfbd7a72f431806ad2fe478c4ee1b274a0ea0b0n,$u=(e,t)=>{const n=B(t*t*t),s=B(n*n*t),a=wu(e*s).pow_p_5_8;let o=B(e*n*a);const l=B(t*o*o),d=o,u=B(o*wi),f=l===e,g=l===B(-e),m=l===B(-e*wi);return f&&(o=d),(g||m)&&(o=u),(B(o)&1n)===1n&&(o=B(-o)),{isValid:f||g,value:o}},ba=e=>fr(vr(e)),so=(...e)=>br.sha512Async(Sn(...e)),ku=(...e)=>xu("sha512")(Sn(...e)),yr=e=>{const t=e.slice(0,Ct);t[0]&=248,t[31]&=127,t[31]|=64;const n=e.slice(Ct,no),s=ba(t),a=Mt.multiply(s),o=a.toBytes();return{head:t,prefix:n,scalar:s,point:a,pointBytes:o}},ao=e=>so(ot(e,Ct)).then(yr),Su=e=>yr(ku(ot(e,Ct))),Au=e=>ao(e).then(t=>t.pointBytes),Cu=e=>so(e.hashable).then(e.finish),Mu=(e,t,n)=>{const{pointBytes:s,scalar:a}=e,o=ba(t),l=Mt.multiply(o).toBytes();return{hashable:Sn(l,s,n),finish:f=>{const g=fr(o+ba(f)*a);return ot(Sn(l,hr(g)),no)}}},Eu=async(e,t)=>{const n=ot(e),s=await ao(t),a=await so(s.prefix,n);return Cu(Mu(s,a,n))},br={sha512Async:async e=>{const t=vu(),n=Sn(e);return ws(await t.digest("SHA-512",n.buffer))},sha512:void 0},Tu=(e=yu(Ct))=>e,_u={getExtendedPublicKeyAsync:ao,getExtendedPublicKey:Su,randomSecretKey:Tu},os=8,Pu=256,xr=Math.ceil(Pu/os)+1,xa=2**(os-1),Lu=()=>{const e=[];let t=Mt,n=t;for(let s=0;s<xr;s++){n=t,e.push(n);for(let a=1;a<xa;a++)n=n.add(t),e.push(n);t=n.double()}return e};let $i;const ki=(e,t)=>{const n=t.negate();return e?n:t},Iu=e=>{const t=$i||($i=Lu());let n=zt,s=Mt;const a=2**os,o=a,l=as(a-1),d=as(os);for(let u=0;u<xr;u++){let f=Number(e&l);e>>=d,f>xa&&(f-=o,e+=1n);const g=u*xa,m=g,v=g+Math.abs(f)-1,k=u%2!==0,c=f<0;f===0?s=s.add(ki(k,t[m])):n=n.add(ki(c,t[v]))}return e!==0n&&ue("invalid wnaf"),{p:n,f:s}},zs="openclaw-device-identity-v1";function wa(e){let t="";for(const n of e)t+=String.fromCharCode(n);return btoa(t).replaceAll("+","-").replaceAll("/","_").replace(/=+$/g,"")}function wr(e){const t=e.replaceAll("-","+").replaceAll("_","/"),n=t+"=".repeat((4-t.length%4)%4),s=atob(n),a=new Uint8Array(s.length);for(let o=0;o<s.length;o+=1)a[o]=s.charCodeAt(o);return a}function Du(e){return Array.from(e).map(t=>t.toString(16).padStart(2,"0")).join("")}async function $r(e){const t=await crypto.subtle.digest("SHA-256",e.slice().buffer);return Du(new Uint8Array(t))}async function Ru(){const e=_u.randomSecretKey(),t=await Au(e);return{deviceId:await $r(t),publicKey:wa(t),privateKey:wa(e)}}async function oo(){try{const n=localStorage.getItem(zs);if(n){const s=JSON.parse(n);if(s?.version===1&&typeof s.deviceId=="string"&&typeof s.publicKey=="string"&&typeof s.privateKey=="string"){const a=await $r(wr(s.publicKey));if(a!==s.deviceId){const o={...s,deviceId:a};return localStorage.setItem(zs,JSON.stringify(o)),{deviceId:a,publicKey:s.publicKey,privateKey:s.privateKey}}return{deviceId:s.deviceId,publicKey:s.publicKey,privateKey:s.privateKey}}}}catch{}const e=await Ru(),t={version:1,deviceId:e.deviceId,publicKey:e.publicKey,privateKey:e.privateKey,createdAtMs:Date.now()};return localStorage.setItem(zs,JSON.stringify(t)),e}async function Nu(e,t){const n=wr(e),s=new TextEncoder().encode(t),a=await Eu(s,n);return wa(a)}async function it(e,t){if(!(!e.client||!e.connected)&&!e.devicesLoading){e.devicesLoading=!0,t?.quiet||(e.devicesError=null);try{const n=await e.client.request("device.pair.list",{});e.devicesList={pending:Array.isArray(n?.pending)?n.pending:[],paired:Array.isArray(n?.paired)?n.paired:[]}}catch(n){t?.quiet||(e.devicesError=String(n))}finally{e.devicesLoading=!1}}}async function Uu(e,t){if(!(!e.client||!e.connected))try{await e.client.request("device.pair.approve",{requestId:t}),await it(e)}catch(n){e.devicesError=String(n)}}async function Ou(e,t){if(!(!e.client||!e.connected||!window.confirm("Reject this device pairing request?")))try{await e.client.request("device.pair.reject",{requestId:t}),await it(e)}catch(s){e.devicesError=String(s)}}async function Fu(e,t){if(!(!e.client||!e.connected))try{const n=await e.client.request("device.token.rotate",t);if(n?.token){const s=await oo(),a=n.role??t.role;(n.deviceId===s.deviceId||t.deviceId===s.deviceId)&&lr({deviceId:s.deviceId,role:a,token:n.token,scopes:n.scopes??t.scopes??[]}),window.prompt("New device token (copy and store securely):",n.token)}await it(e)}catch(n){e.devicesError=String(n)}}async function Bu(e,t){if(!(!e.client||!e.connected||!window.confirm(`Revoke token for ${t.deviceId} (${t.role})?`)))try{await e.client.request("device.token.revoke",t);const s=await oo();t.deviceId===s.deviceId&&rr({deviceId:s.deviceId,role:t.role}),await it(e)}catch(s){e.devicesError=String(s)}}function Hu(e){if(!e||e.kind==="gateway")return{method:"exec.approvals.get",params:{}};const t=e.nodeId.trim();return t?{method:"exec.approvals.node.get",params:{nodeId:t}}:null}function zu(e,t){if(!e||e.kind==="gateway")return{method:"exec.approvals.set",params:t};const n=e.nodeId.trim();return n?{method:"exec.approvals.node.set",params:{...t,nodeId:n}}:null}async function io(e,t){if(!(!e.client||!e.connected)&&!e.execApprovalsLoading){e.execApprovalsLoading=!0,e.lastError=null;try{const n=Hu(t);if(!n){e.lastError="Select a node before loading exec approvals.";return}const s=await e.client.request(n.method,n.params);Ku(e,s)}catch(n){e.lastError=String(n)}finally{e.execApprovalsLoading=!1}}}function Ku(e,t){e.execApprovalsSnapshot=t,e.execApprovalsDirty||(e.execApprovalsForm=X(t.file??{}))}async function qu(e,t){if(!(!e.client||!e.connected)){e.execApprovalsSaving=!0,e.lastError=null;try{const n=e.execApprovalsSnapshot?.hash;if(!n){e.lastError="Exec approvals hash missing; reload and retry.";return}const s=e.execApprovalsForm??e.execApprovalsSnapshot?.file??{},a=zu(t,{file:s,baseHash:n});if(!a){e.lastError="Select a node before saving exec approvals.";return}await e.client.request(a.method,a.params),e.execApprovalsDirty=!1,await io(e,t)}catch(n){e.lastError=String(n)}finally{e.execApprovalsSaving=!1}}}function ju(e,t,n){const s=X(e.execApprovalsForm??e.execApprovalsSnapshot?.file??{});hs(s,t,n),e.execApprovalsForm=s,e.execApprovalsDirty=!0}function Wu(e,t){const n=X(e.execApprovalsForm??e.execApprovalsSnapshot?.file??{});Yl(n,t),e.execApprovalsForm=n,e.execApprovalsDirty=!0}async function kr(e){if(!(!e.client||!e.connected)&&!e.presenceLoading){e.presenceLoading=!0,e.presenceError=null,e.presenceStatus=null;try{const t=await e.client.request("system-presence",{});Array.isArray(t)?(e.presenceEntries=t,e.presenceStatus=t.length===0?"No instances yet.":null):(e.presenceEntries=[],e.presenceStatus="No presence payload.")}catch(t){e.presenceError=String(t)}finally{e.presenceLoading=!1}}}async function Vu(e,t){if(!e.client||!e.connected)return null;try{const n={};t?.label?.trim();const s=await e.client.request("sessions.create",n);return s?.ok&&s.key?(await Ne(e),s):null}catch{return null}}async function Ne(e,t){if(!(!e.client||!e.connected)&&!e.sessionsLoading){e.sessionsLoading=!0,e.sessionsError=null;try{const n=t?.includeGlobal??e.sessionsIncludeGlobal,s=t?.includeUnknown??e.sessionsIncludeUnknown,a=t?.activeMinutes??ss(e.sessionsFilterActive,0),o=t?.limit??ss(e.sessionsFilterLimit,0),l={includeGlobal:n,includeUnknown:s};a>0&&(l.activeMinutes=a),o>0&&(l.limit=o),t?.includeLastMessage&&(l.includeLastMessage=!0);const d=await e.client.request("sessions.list",l);d&&(e.sessionsResult=d)}catch(n){e.sessionsError=String(n)}finally{e.sessionsLoading=!1}}}async function Si(e,t,n){if(!e.client||!e.connected)return;const s={key:t};"label"in n&&(s.label=n.label),"thinkingLevel"in n&&(s.thinkingLevel=n.thinkingLevel),"verboseLevel"in n&&(s.verboseLevel=n.verboseLevel),"reasoningLevel"in n&&(s.reasoningLevel=n.reasoningLevel);try{await e.client.request("sessions.patch",s),await Ne(e,{includeLastMessage:!0})}catch(a){e.sessionsError=String(a)}}async function Gu(e,t){if(!(!e.client||!e.connected||e.sessionsLoading||!window.confirm(`Delete session "${t}"?

Deletes the session entry and archives its transcript.`))){e.sessionsLoading=!0,e.sessionsError=null;try{await e.client.request("sessions.delete",{key:t,deleteTranscript:!0}),e.sessionsLoading=!1,await Ne(e)}catch(s){e.sessionsError=String(s)}finally{e.sessionsLoading=!1}}}async function Qu(e,t){if(!e.client||!e.connected||e.sessionsLoading)return;const n=Array.from(new Set(t.filter(o=>o&&o!=="agent.main.main")));if(n.length===0)return;const s=n.length===1?`Delete session "${n[0]}"?`:`Delete ${n.length} sessions?

First: "${n[0]}"`;if(window.confirm(`${s}

Deletes the session entries and archives their transcripts.`)){e.sessionsLoading=!0,e.sessionsError=null;try{for(const o of n)await e.client.request("sessions.delete",{key:o,deleteTranscript:!0});e.sessionsLoading=!1,await Ne(e)}catch(o){e.sessionsError=String(o)}finally{e.sessionsLoading=!1}}}async function Qe(e){if(!(!e.client||!e.connected)){e.digitalEmployeesLoading=!0,e.digitalEmployeesError=null;try{const t=await e.client.request("employees.list",{});e.digitalEmployees=t?.employees??[]}catch(t){e.digitalEmployeesError=String(t)}finally{e.digitalEmployeesLoading=!1}}}function Sr(e){let t=e.trim();if(!t)return"";const n=[/\.zip$/i,/\.tar\.gz$/i,/\.tgz$/i,/\.md$/i];for(const s of n)t=t.replace(s,"");return t.trim()||""}async function Ai(e){if(!e.client||!e.connected)return;const t=e.digitalEmployeeCreateName?.trim();if(!t){e.digitalEmployeeCreateError="名称不能为空";return}e.digitalEmployeeCreateBusy=!0,e.digitalEmployeeCreateError=null,e.digitalEmployeeSkillUploadError=null;let n;const s=e.digitalEmployeeCreateMcpJson?.trim();if(s)try{const a=JSON.parse(s);a&&typeof a=="object"&&Object.keys(a).length>0&&(n=a)}catch{e.digitalEmployeeCreateError="MCP 配置 JSON 格式无效",e.digitalEmployeeCreateBusy=!1;return}try{const a={name:t,description:e.digitalEmployeeCreateDescription??"",prompt:e.digitalEmployeeCreatePrompt??"",enabled:!0};n&&(a.mcpServers=n);const l=(await e.client.request("employees.create",a))?.id??Ju(t),d=e.digitalEmployeeSkillUploadFiles??[],u=e.digitalEmployeeSkillUploadName?.trim();for(let f=0;f<d.length;f++){const g=d[f],m=u&&d.length===1?u:Sr(g.name),v=await Ar(e,l,m,g);if(!v.ok){e.digitalEmployeeCreateError=v.error??"技能文件上传失败";return}}e.digitalEmployeeCreateName="",e.digitalEmployeeCreateDescription="",e.digitalEmployeeCreatePrompt="",e.digitalEmployeeCreateMcpJson="",e.digitalEmployeeSkillUploadName="",e.digitalEmployeeSkillUploadFiles=[],e.digitalEmployeeSkillUploadError=null,await Qe(e)}catch(a){e.digitalEmployeeCreateError=String(a)}finally{e.digitalEmployeeCreateBusy=!1}}function Ju(e){const t=e.trim().toLowerCase();if(!t)return"employee";let n="";for(const s of t)s>="a"&&s<="z"||s>="0"&&s<="9"?n+=s:(s==="-"||s==="_"||s===" ")&&(n+="-");return n=n.replace(/-+/g,"-").replace(/^-+/,"").replace(/-+$/,""),n||"employee"}async function Yu(e,t,n){if(!(!e.client||!e.connected))try{await e.client.request("employees.create",{id:t,enabled:n}),await Qe(e)}catch(s){e.digitalEmployeesError=String(s)}}async function Ci(e,t){if(!(!e.client||!e.connected))try{await e.client.request("employees.delete",{id:t}),await Qe(e)}catch(n){e.digitalEmployeesError=String(n)}}async function $a(e,t){if(!e.client||!e.connected)return null;try{return await e.client.request("employees.get",{id:t})??null}catch{return null}}function Ks(e){return e.trim().toLowerCase()}function Zu(e,t){const n=e.trim()||"employee",s=new Set(t.map(Ks)),a=`${n} copy`;if(!s.has(Ks(a)))return a;for(let o=2;o<=99;o++){const l=`${n} copy ${o}`;if(!s.has(Ks(l)))return l}return`${n} copy ${Date.now()}`}async function Xu(e,t){if(!(!e.client||!e.connected)){e.digitalEmployeesError=null,e.digitalEmployeesLoading=!0;try{const n=await $a(e,t);if(!n){e.digitalEmployeesError="无法加载员工详情";return}const s=(n.name||n.id||t).trim(),o={name:Zu(s||"employee",(e.digitalEmployees??[]).map(l=>l.name||"")),description:n.description??"",prompt:n.prompt??"",enabled:n.enabled!==!1};n.mcpServers&&(o.mcpServers=n.mcpServers),Array.isArray(n.skillIds)&&n.skillIds.length>0&&(o.skillIds=n.skillIds),await e.client.request("employees.create",o),await Qe(e)}catch(n){e.digitalEmployeesError=String(n)}finally{e.digitalEmployeesLoading=!1}}}async function Mi(e){if(!e.client||!e.connected)return;const t=e.digitalEmployeeEditId?.trim();if(!t){e.digitalEmployeeEditError="员工 ID 不能为空";return}e.digitalEmployeeEditBusy=!0,e.digitalEmployeeEditError=null;let n;const s=e.digitalEmployeeEditMcpJson?.trim();try{if(s){const a=JSON.parse(s);a&&typeof a=="object"&&(n=a)}else n={}}catch{e.digitalEmployeeEditError="MCP 配置 JSON 格式无效",e.digitalEmployeeEditBusy=!1;return}try{const a={id:t,description:e.digitalEmployeeEditDescription??"",prompt:e.digitalEmployeeEditPrompt??"",enabled:e.digitalEmployeeEditEnabled!==!1,mcpServers:n??{}};await e.client.request("employees.create",a);for(const l of e.digitalEmployeeEditSkillsToDelete??[])if(!await ep(e,t,l)){e.digitalEmployeeEditError=`删除技能 ${l} 失败`;return}const o=e.digitalEmployeeEditSkillFilesToUpload??[];for(let l=0;l<o.length;l++){const d=o[l],u=Sr(d.name),f=await Ar(e,t,u,d);if(!f.ok){e.digitalEmployeeEditError=f.error??"技能文件上传失败";return}}e.digitalEmployeeEditModalOpen=!1,e.digitalEmployeeEditId="",e.digitalEmployeeEditName="",e.digitalEmployeeEditDescription="",e.digitalEmployeeEditPrompt="",e.digitalEmployeeEditMcpJson="",e.digitalEmployeeEditSkillNames=[],e.digitalEmployeeEditSkillFilesToUpload=[],e.digitalEmployeeEditSkillsToDelete=[],await Qe(e)}catch(a){e.digitalEmployeeEditError=String(a)}finally{e.digitalEmployeeEditBusy=!1}}async function ep(e,t,n){const s=e.settings.gatewayUrl?.trim();if(!s)return!1;const a=Jt(s);if(!a)return!1;const o={},l=e.settings?.token?.trim();l&&(o.Authorization=`Bearer ${l}`);try{const d=new URL(`${a.replace(/\/$/,"")}/api/employee-skills/delete`);d.searchParams.set("employeeId",t.trim()),d.searchParams.set("name",n.trim());const u=await fetch(d.toString(),{method:"DELETE",headers:o});if(u.status===401)throw new Error("认证失败：网关令牌无效或未提供，请在 Overview 中配置正确的 Gateway Token");const f=await u.json();return u.ok&&f.ok===!0}catch(d){throw(d instanceof Error?d.message:String(d))==="Failed to fetch"?new Error("网络请求失败，请检查网络连接"):d}}async function Ar(e,t,n,s){const a=e.settings.gatewayUrl?.trim();if(!a)return{ok:!1,error:"Gateway URL 未配置"};const o=Jt(a);if(!o)return{ok:!1,error:"Gateway URL 无效"};const l=new FormData;l.append("employeeId",t.trim()),n.trim()&&l.append("name",n.trim()),l.append("file",s);const d={},u=e.settings?.token?.trim();u&&(d.Authorization=`Bearer ${u}`);try{const f=await fetch(`${o.replace(/\/$/,"")}/api/employee-skills/upload`,{method:"POST",headers:d,body:l}),g=await f.json();return!f.ok||g.ok===!1?{ok:!1,error:f.status===401?"认证失败：网关令牌无效或未提供，请在 Overview 中配置正确的 Gateway Token":g.error??`上传失败 (${f.status})`,template:g.template}:{ok:!0}}catch(f){const g=f instanceof Error?f.message:String(f);return{ok:!1,error:g==="Failed to fetch"?"网络请求失败，请检查网络连接":g}}}async function lo(e,t){if(!(!e.client||!e.connected)&&!e.llmTraceLoading){e.llmTraceLoading=!0,e.llmTraceError=null;try{const n=t?.mode??e.llmTraceMode,s=await e.client.request("trace.list",{mode:n});s&&(e.llmTraceResult=s)}catch(n){e.llmTraceError=String(n)}finally{e.llmTraceLoading=!1}}}async function Cr(e,t){if(!e.client||!e.connected)return null;try{return(await e.client.request("trace.content",{sessionId:t}))?.content??null}catch{return null}}function vt(e){const t=e.configForm??e.configSnapshot?.config;if(t&&typeof t=="object"){const n=t.gateway;if(n&&typeof n=="object"){const s=n.llmTrace;e.llmTraceEnabled=!!(s&&typeof s=="object"&&s.enabled===!0);return}}e.llmTraceEnabled=!1}function tp(e){lo(e)}function np(e,t){e.llmTraceMode=t,lo(e,{mode:t})}function sp(e,t){e.llmTraceSearch=t}function ap(e){if(!e.client||!e.connected)return;const t=X(e.configForm??e.configSnapshot?.config??{});t.gateway||(t.gateway={});const n=t.gateway;n.llmTrace||(n.llmTrace={});const s=n.llmTrace,a=s.enabled!==!0;s.enabled=a,e.llmTraceSaving=!0,e.lastError=null,Pe(e,{gateway:t.gateway}).then(()=>Z(e)).then(()=>{vt(e)}).catch(o=>{e.lastError=String(o)}).finally(()=>{e.llmTraceSaving=!1})}async function op(e,t){e.llmTraceViewingSessionId=t,e.llmTraceViewContent=null,e.llmTraceViewLoading=!0,e.llmTraceError=null;try{const n=await Cr(e,t);n?e.llmTraceViewContent=n:(e.llmTraceError="Failed to load trace content.",e.llmTraceViewingSessionId=null)}catch(n){e.llmTraceError=String(n),e.llmTraceViewingSessionId=null}finally{e.llmTraceViewLoading=!1}}function ip(e){e.llmTraceViewContent=null,e.llmTraceViewingSessionId=null}async function lp(e,t){try{const n=await Cr(e,t);if(n){const s=new Blob([n],{type:"text/html"}),a=URL.createObjectURL(s),o=document.createElement("a");o.href=a,o.download=`${t}.html`,o.click(),URL.revokeObjectURL(a)}else e.llmTraceError="Failed to load trace content."}catch(n){e.llmTraceError=String(n)}}const rp={off:{preset:"off",sandbox:{enabled:!1},commandPolicy:{enabled:!1},approvalQueue:{enabled:!1}},loose:{preset:"loose",sandbox:{enabled:!0,allowedPaths:["/tmp","./workspace","/var/lib/agent/data"],networkAllow:["localhost","127.0.0.1","*"],resourceLimit:{maxCpuPercent:60,maxMemoryBytes:1024**3,maxDiskBytes:1024**3}},commandPolicy:{enabled:!0,defaultPolicy:"allow",deny:["sudo","rm -rf","dd","mkfs"],ask:[],allow:[],banArguments:["--no-preserve-root","/dev/"],maxLength:4096},approvalQueue:{enabled:!1,timeoutSeconds:300,blockOnApproval:!1}},standard:{preset:"standard",sandbox:{enabled:!0,allowedPaths:["/tmp","./workspace","/var/lib/agent/data"],networkAllow:["localhost","127.0.0.1","*.anthropic.com","*.openai.com"],resourceLimit:{maxCpuPercent:60,maxMemoryBytes:1024**3,maxDiskBytes:1024**3}},commandPolicy:{enabled:!0,defaultPolicy:"ask",deny:["sudo","dd","mkfs","rm -rf"],ask:["rm","mv","cp"],allow:["ls","pwd","echo"],banArguments:["--no-preserve-root","/dev/"],maxLength:4096},approvalQueue:{enabled:!0,timeoutSeconds:300,blockOnApproval:!0}},strict:{preset:"strict",sandbox:{enabled:!0,allowedPaths:["./workspace","/tmp"],networkAllow:["localhost","127.0.0.1"],resourceLimit:{maxCpuPercent:60,maxMemoryBytes:512*1024*1024,maxDiskBytes:1024**3}},commandPolicy:{enabled:!0,defaultPolicy:"deny",deny:["sudo","dd","mkfs","rm -rf","rm -r"],ask:["rm","mv","cp","curl","wget"],allow:["ls","pwd","echo","cat"],banArguments:["--no-preserve-root","/dev/","../"],maxLength:4096},approvalQueue:{enabled:!0,timeoutSeconds:300,blockOnApproval:!0}}};function ka(e){const t=e.configForm??e.configSnapshot?.config;if(!t||typeof t!="object")return null;const n=t.security??{};if(!n||typeof n!="object")return null;const s=n.sandbox??{},a=n.commandPolicy??{},o=n.approvalQueue??{},l=n.validator??{},d=n.preset;let u=a;return!((a?.deny?.length??0)>0||(a?.ask?.length??0)>0||(a?.allow?.length??0)>0)&&(l||o)&&(u=dp(l,o)),{preset:d,sandbox:s??{},commandPolicy:u??{},approvalQueue:o??{},validator:l??{}}}function qs(e){return Array.isArray(e)?e:[]}function cp(e){return{enabled:e?.enabled,defaultPolicy:e?.defaultPolicy??"ask",deny:qs(e?.deny).filter(Boolean),ask:qs(e?.ask).filter(Boolean),allow:qs(e?.allow).filter(Boolean),rules:null,banArguments:e?.banArguments??[],maxLength:e?.maxLength??4096,secretPatterns:e?.secretPatterns??[]}}function dp(e,t){const n=[],s=[],a=[];if(e?.banCommands)for(const o of e.banCommands)o&&n.push(o);if(e?.banFragments)for(const o of e.banFragments)o&&n.push(o);if(t?.deny)for(const o of t.deny)o&&n.push(o);if(t?.allow)for(const o of t.allow)o&&a.push(o);if(t?.ask)for(const o of t.ask)o&&s.push(o);return{enabled:e?.enabled!==!1,defaultPolicy:"ask",deny:n,ask:s,allow:a,banArguments:e?.banArguments,maxLength:e?.maxLength??4096,secretPatterns:e?.secretPatterns}}async function up(e,t){if(!(!e.client||!e.connected)){e.configSaving=!0,e.lastError=null;try{const n=t.sandbox??{},s=t.commandPolicy??{},a=t.approvalQueue??{},o={preset:t.preset,sandbox:{enabled:n.enabled,allowedPaths:n.allowedPaths,networkAllow:n.networkAllow,root:n.root,resourceLimit:n.resourceLimit,approvalStore:n.approvalStore},commandPolicy:cp(s),approvalQueue:{enabled:a.enabled,timeoutSeconds:a.timeoutSeconds??300,blockOnApproval:a.blockOnApproval??!0}};await Pe(e,{security:o}),await Z(e)}finally{e.configSaving=!1}}}function ro(e){const t=ka(e);return t==null?null:X(t)}function pp(e,t){if(!e.client||!e.connected)return;const n=rp[t],s=X(e.configForm??e.configSnapshot?.config??{});(!s.security||typeof s.security!="object")&&(s.security={});const a=s.security;Object.assign(a,n);const o=a.commandPolicy;o&&typeof o=="object"&&(o.rules=null),e.securityForm=X(n),e.configSaving=!0,e.lastError=null,Pe(e,{security:a}).then(()=>Z(e)).finally(()=>{e.configSaving=!1})}function gp(e,t,n,s){hs(t,n,s),e.securityForm=X(t)}async function mp(e,t){const s=X(t??{}),a=s.sandbox?.resourceLimit??{};let o=null;if(typeof a.maxMemoryBytes=="string"){const l=Ei(a.maxMemoryBytes);l==null&&a.maxMemoryBytes.trim()!==""?o="Invalid max memory format, use e.g. 1G, 512M, 1024":a.maxMemoryBytes=l??void 0}if(!o&&typeof a.maxDiskBytes=="string"){const l=Ei(a.maxDiskBytes);l==null&&a.maxDiskBytes.trim()!==""?o="Invalid max disk format, use e.g. 10G, 100G, 10240":a.maxDiskBytes=l??void 0}if(o){e.lastError=o;return}(!a.maxCpuPercent||a.maxCpuPercent<=0)&&(a.maxCpuPercent=60),(typeof a.maxMemoryBytes!="number"||a.maxMemoryBytes<=0)&&(a.maxMemoryBytes=1024**3),(typeof a.maxDiskBytes!="number"||a.maxDiskBytes<=0)&&(a.maxDiskBytes=1024**3),s.sandbox||(s.sandbox={}),s.sandbox.resourceLimit=a,await up(e,s),e.securityForm=ro(e)}function Ei(e){const t=e.trim();if(!t)return null;const n=t.match(/^(\d+(?:\.\d+)?)(\s*)([kKmMgGtT]?[bB]?)?$/);if(!n)return null;const s=Number.parseFloat(n[1]);if(!Number.isFinite(s))return null;const a=(n[3]??"").toUpperCase();let o=1;switch(a){case"K":case"KB":o=1024;break;case"M":case"MB":o=1024**2;break;case"G":case"GB":o=1024**3;break;case"T":case"TB":o=1024**4;break;default:o=1;break}return Math.round(s*o)}async function _n(e){if(!(!e.client||!e.connected)){e.approvalsLoading=!0,e.approvalsError=null;try{const n=await e.client.request("approvals.list",{})??{storePath:"",entries:[]},s=n.entries??[];e.approvalsResult={storePath:n.storePath,entries:s,approved:n.approved??s.filter(a=>a.status==="approved"),pending:n.pending??s.filter(a=>a.status==="pending"||a.status==="expired"),denied:n.denied??s.filter(a=>a.status==="denied"),whitelisted:n.whitelisted??[]}}catch(t){e.approvalsError=String(t),e.approvalsResult=null}finally{e.approvalsLoading=!1}}}async function fp(e,t,n){!e.client||!e.connected||(await e.client.request("approvals.approve",{requestId:t,approverId:n}),await _n(e))}async function hp(e,t,n,s){!e.client||!e.connected||(await e.client.request("approvals.deny",{requestId:t,approverId:n,reason:s??""}),await _n(e))}async function vp(e,t,n){!e.client||!e.connected||(await e.client.request("approvals.whitelistSession",{requestId:t,approverId:n}),await _n(e))}function Ti(e,t,n){if(!t.trim())return;const s={...e.skillMessages};n?s[t]=n:delete s[t],e.skillMessages=s}function co(e){return e instanceof Error?e.message:String(e)}async function An(e,t){if(t?.clearMessages&&Object.keys(e.skillMessages).length>0&&(e.skillMessages={}),!(!e.client||!e.connected)&&!e.skillsLoading){e.skillsLoading=!0,e.skillsError=null;try{const n=await e.client.request("skills.status",{});n&&(e.skillsReport=n)}catch(n){e.skillsError=co(n)}finally{e.skillsLoading=!1}}}async function yp(e,t,n){if(!(!e.client||!e.connected)){e.skillsBusyKey=t,e.skillsError=null;try{await e.client.request("skills.update",{skillKey:t,enabled:n}),await An(e),Ti(e,t,{kind:"success",message:n?"Skill enabled":"Skill disabled"})}catch(s){const a=co(s);e.skillsError=a,Ti(e,t,{kind:"error",message:a})}finally{e.skillsBusyKey=null}}}async function bp(e,t,n){const s=e.gatewayUrl?Jt(e.gatewayUrl):"";if(!s)return{ok:!1,error:"Gateway URL not configured"};const a=new FormData;a.append("name",t.trim()),a.append("file",n);const o={};e.token?.trim()&&(o.Authorization=`Bearer ${e.token.trim()}`);try{const l=await fetch(`${s.replace(/\/$/,"")}/api/skills/upload`,{method:"POST",headers:o,body:a}),d=await l.json();return l.ok?{ok:!0}:{ok:!1,error:l.status===401?"认证失败：网关令牌无效或未提供，请在 Overview 中配置正确的 Gateway Token":d.error??`Upload failed (${l.status})`,template:d.template}}catch(l){const d=l instanceof Error?l.message:String(l);return{ok:!1,error:d==="Failed to fetch"?"网络请求失败，请检查网络连接":d}}}async function xp(e,t){if(!(!e.client||!e.connected)){e.skillsBusyKey=t,e.skillsError=null;try{await e.client.request("skills.delete",{skillKey:t}),await An(e,{clearMessages:!0})}catch(n){e.skillsError=co(n)}finally{e.skillsBusyKey=null}}}const Mr={message:"/message",scheduledTasks:"/scheduled-tasks",cronHistory:"/cron-history",employeeMarket:"/employee-market",skillLibrary:"/skill-library",toolLibrary:"/tool-library",tutorials:"/tutorials",aboutUs:"/about-us",community:"/community",agents:"/agents",overview:"/overview",channels:"/channels",instances:"/instances",sessions:"/sessions",usage:"/usage",cron:"/cron",skills:"/skills",mcp:"/mcp",nodes:"/nodes",chat:"/chat",digitalEmployee:"/digital-employee",config:"/config",envVars:"/env-vars",models:"/models",debug:"/debug",logs:"/logs",llmTrace:"/llm-trace",sandbox:"/sandbox"},Er=new Map(Object.entries(Mr).map(([e,t])=>[t,e]));function Pn(e){if(!e)return"";let t=e.trim();return t.startsWith("/")||(t=`/${t}`),t==="/"?"":(t.endsWith("/")&&(t=t.slice(0,-1)),t)}function Cn(e){if(!e)return"/";let t=e.trim();return t.startsWith("/")||(t=`/${t}`),t.length>1&&t.endsWith("/")&&(t=t.slice(0,-1)),t}function Ln(e,t=""){const n=Pn(t),s=Mr[e];return n?`${n}${s}`:s}function Tr(e,t=""){const n=Pn(t);let s=e||"/";n&&(s===n?s="/":s.startsWith(`${n}/`)&&(s=s.slice(n.length)));let a=Cn(s).toLowerCase();return a.endsWith("/index.html")&&(a="/"),a==="/"?"message":Er.get(a)??null}function wp(e){let t=Cn(e);if(t.endsWith("/index.html")&&(t=Cn(t.slice(0,-11))),t==="/")return"";const n=t.split("/").filter(Boolean);if(n.length===0)return"";for(let s=0;s<n.length;s++){const a=`/${n.slice(s).join("/")}`.toLowerCase();if(Er.has(a)){const o=n.slice(0,s);return o.length?`/${o.join("/")}`:""}}return`/${n.join("/")}`}function _r(e){switch(e){case"message":return"messageSquare";case"scheduledTasks":return"alarmClock";case"cronHistory":return"scrollText";case"employeeMarket":return"users";case"skillLibrary":return"zap";case"toolLibrary":return"wrench";case"tutorials":return"book";case"aboutUs":return"info";case"community":return"globe";case"agents":return"folder";case"chat":return"messageSquare";case"digitalEmployee":return"users";case"overview":return"barChart";case"channels":return"link";case"instances":return"radio";case"sessions":return"fileText";case"usage":return"barChart";case"cron":return"loader";case"skills":return"zap";case"mcp":return"folder";case"llmTrace":return"scrollText";case"sandbox":return"sandbox";case"nodes":return"monitor";case"config":return"settings";case"envVars":return"settings";case"models":return"folder";case"debug":return"bug";case"logs":return"scrollText";default:return"folder"}}function Sa(e){switch(e){case"message":return"消息";case"scheduledTasks":return"定时任务";case"cronHistory":return"运行历史";case"employeeMarket":return"员工市场";case"skillLibrary":return"技能库";case"toolLibrary":return"工具库";case"tutorials":return"教程";case"aboutUs":return"关于我们";case"community":return"社区";case"agents":return i("navTitleAgents");case"overview":return i("navTitleOverview");case"channels":return i("navTitleChannels");case"instances":return i("navTitleInstances");case"sessions":return i("navTitleSessions");case"usage":return i("navTitleUsage");case"cron":return i("navTitleCron");case"skills":return i("navTitleSkills");case"mcp":return i("navTitleMcp");case"llmTrace":return i("navTitleLlmTrace");case"sandbox":return i("navTitleSandbox");case"nodes":return i("navTitleNodes");case"chat":return i("navTitleChat");case"digitalEmployee":return i("navTitleDigitalEmployee");case"config":return i("navTitleConfig");case"envVars":return i("navTitleEnvVars");case"models":return i("navTitleModels");case"debug":return i("navTitleDebug");case"logs":return i("navTitleLogs");default:return i("navTitleControl")}}const Pr="openclaw.control.settings.v1",$p="edc146993b5ae0b1544c3137cc888f94436cf11e1952cff6";function kp(){const t={gatewayUrl:typeof location<"u"&&location.port==="5173"?"127.0.0.1:18900":typeof location<"u"?location.host:"127.0.0.1:18900",token:$p,sessionKey:"main",lastActiveSessionKey:"main",theme:"light",chatFocusMode:!1,chatShowThinking:!0,splitRatio:.6,navCollapsed:!1,navGroupsCollapsed:{}};try{const n=localStorage.getItem(Pr);if(!n)return t;const s=JSON.parse(n);return{gatewayUrl:typeof s.gatewayUrl=="string"&&s.gatewayUrl.trim()?vs(s.gatewayUrl.trim()):t.gatewayUrl,token:typeof s.token=="string"&&s.token.trim()?s.token.trim():t.token,sessionKey:typeof s.sessionKey=="string"&&s.sessionKey.trim()?s.sessionKey.trim():t.sessionKey,lastActiveSessionKey:typeof s.lastActiveSessionKey=="string"&&s.lastActiveSessionKey.trim()?s.lastActiveSessionKey.trim():typeof s.sessionKey=="string"&&s.sessionKey.trim()||t.lastActiveSessionKey,theme:s.theme==="light"||s.theme==="dark"||s.theme==="system"?s.theme:t.theme,chatFocusMode:typeof s.chatFocusMode=="boolean"?s.chatFocusMode:t.chatFocusMode,chatShowThinking:typeof s.chatShowThinking=="boolean"?s.chatShowThinking:t.chatShowThinking,splitRatio:typeof s.splitRatio=="number"&&s.splitRatio>=.4&&s.splitRatio<=.7?s.splitRatio:t.splitRatio,navCollapsed:typeof s.navCollapsed=="boolean"?s.navCollapsed:t.navCollapsed,navGroupsCollapsed:typeof s.navGroupsCollapsed=="object"&&s.navGroupsCollapsed!==null?s.navGroupsCollapsed:t.navGroupsCollapsed}}catch{return t}}function Sp(e){localStorage.setItem(Pr,JSON.stringify(e))}const Kn=e=>Number.isNaN(e)?.5:e<=0?0:e>=1?1:e,Ap=()=>typeof window>"u"||typeof window.matchMedia!="function"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches??!1,qn=e=>{e.classList.remove("theme-transition"),e.style.removeProperty("--theme-switch-x"),e.style.removeProperty("--theme-switch-y")},Cp=({nextTheme:e,applyTheme:t,context:n,currentTheme:s})=>{if(s===e)return;const a=globalThis.document??null;if(!a){t();return}const o=a.documentElement,l=a,d=Ap();if(!!l.startViewTransition&&!d){let f=.5,g=.5;if(n?.pointerClientX!==void 0&&n?.pointerClientY!==void 0&&typeof window<"u")f=Kn(n.pointerClientX/window.innerWidth),g=Kn(n.pointerClientY/window.innerHeight);else if(n?.element){const m=n.element.getBoundingClientRect();m.width>0&&m.height>0&&typeof window<"u"&&(f=Kn((m.left+m.width/2)/window.innerWidth),g=Kn((m.top+m.height/2)/window.innerHeight))}o.style.setProperty("--theme-switch-x",`${f*100}%`),o.style.setProperty("--theme-switch-y",`${g*100}%`),o.classList.add("theme-transition");try{const m=l.startViewTransition?.(()=>{t()});m?.finished?m.finished.finally(()=>qn(o)):qn(o)}catch{qn(o),t()}return}t(),qn(o)};function Mp(){return typeof window>"u"||typeof window.matchMedia!="function"||window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function uo(e){return e==="system"?Mp():e}function Et(e,t){const n={...t,lastActiveSessionKey:t.lastActiveSessionKey?.trim()||t.sessionKey.trim()||"main"};e.settings=n,Sp(n),t.theme!==e.theme&&(e.theme=t.theme,$s(e,uo(t.theme))),e.applySessionKey=e.settings.lastActiveSessionKey}function Lr(e,t){const n=t.trim();n&&e.settings.lastActiveSessionKey!==n&&Et(e,{...e.settings,lastActiveSessionKey:n})}function Ep(e){if(!window.location.search)return;const t=new URLSearchParams(window.location.search),n=t.get("token"),s=t.get("password"),a=t.get("session"),o=t.get("gatewayUrl");let l=!1;if(n!=null&&(t.delete("token"),l=!0),s!=null){const u=s.trim();u&&(e.password=u),t.delete("password"),l=!0}if(a!=null){const u=a.trim();u&&(e.sessionKey=u,Et(e,{...e.settings,sessionKey:u,lastActiveSessionKey:u}))}if(o!=null){const u=o.trim(),f=u?vs(u):"";f&&f!==e.settings.gatewayUrl&&(e.pendingGatewayUrl=f),t.delete("gatewayUrl"),l=!0}if(!l)return;const d=new URL(window.location.href);d.search=t.toString(),window.history.replaceState({},"",d.toString())}function Tp(e,t){e.tab!==t&&(e.tab=t),t==="chat"&&(e.chatHasAutoScrolled=!1),t==="logs"?Ja(e):Ya(e),t==="debug"?Za(e):Xa(e),po(e),Dr(e,t,!1)}function _p(e,t,n){Cp({nextTheme:t,applyTheme:()=>{e.theme=t,Et(e,{...e.settings,theme:t}),$s(e,uo(t))},context:n,currentTheme:e.theme})}async function po(e){if(e.tab==="overview"&&await Rr(e),e.tab==="channels"&&await Up(e),e.tab==="instances"&&await kr(e),e.tab==="sessions"&&await Ne(e),e.tab==="cron"&&await Kt(e),e.tab==="scheduledTasks"&&await Kt(e),e.tab==="cronHistory"&&await Kt(e),e.tab==="skills"&&await An(e),e.tab==="mcp"&&(await Z(e),vt(e)),e.tab==="llmTrace"&&(await Z(e),vt(e),await lo(e)),e.tab==="sandbox"&&(await Z(e),e.securityForm=ro(e),await _n(e)),e.tab==="digitalEmployee"&&await Qe(e),e.tab==="agents"){await nr(e),await Z(e),vt(e);const t=e.agentsList?.agents?.map(s=>s.id)??[];t.length>0&&su(e,t);const n=e.agentsSelectedId??e.agentsList?.defaultId??e.agentsList?.agents?.[0]?.id;n&&(nu(e,n),e.agentsPanel==="skills"&&au(e,n),e.agentsPanel==="channels"&&_e(e,!1),e.agentsPanel==="cron"&&Kt(e))}e.tab==="nodes"&&(await bs(e),await it(e),await Z(e),vt(e),await io(e)),(e.tab==="chat"||e.tab==="message")&&(await Z(e),await zr(e),Qe(e),En(e,!e.chatHasAutoScrolled)),e.tab==="config"&&(await Wa(e),await Z(e),vt(e)),(e.tab==="envVars"||e.tab==="models")&&(await Z(e),vt(e)),e.tab==="debug"&&(await ys(e),e.eventLog=e.eventLogBuffer),e.tab==="logs"&&(e.logsAtBottom=!0,await Qa(e,{reset:!0}),tr(e,!0))}function Pp(){if(typeof window>"u")return"";const e=window.__OPENCLAW_CONTROL_UI_BASE_PATH__;return typeof e=="string"&&e.trim()?Pn(e):wp(window.location.pathname)}function Lp(e){e.theme=e.settings.theme??"light",$s(e,uo(e.theme))}function $s(e,t){if(e.themeResolved=t,typeof document>"u")return;const n=document.documentElement;n.dataset.theme=t,n.style.colorScheme=t}function Ip(e){if(typeof window>"u"||typeof window.matchMedia!="function")return;if(e.themeMedia=window.matchMedia("(prefers-color-scheme: dark)"),e.themeMediaHandler=n=>{e.theme==="system"&&$s(e,n.matches?"dark":"light")},typeof e.themeMedia.addEventListener=="function"){e.themeMedia.addEventListener("change",e.themeMediaHandler);return}e.themeMedia.addListener(e.themeMediaHandler)}function Dp(e){if(!e.themeMedia||!e.themeMediaHandler)return;if(typeof e.themeMedia.removeEventListener=="function"){e.themeMedia.removeEventListener("change",e.themeMediaHandler);return}e.themeMedia.removeListener(e.themeMediaHandler),e.themeMedia=null,e.themeMediaHandler=null}function Rp(e,t){if(typeof window>"u")return;let n=Tr(window.location.pathname,e.basePath)??"chat";n==="config"&&(n="overview"),Ir(e,n),Dr(e,n,t)}function Np(e){if(typeof window>"u")return;let t=Tr(window.location.pathname,e.basePath);if(!t)return;t==="config"&&(t="overview");const s=new URL(window.location.href).searchParams.get("session")?.trim();s&&(e.sessionKey=s,Et(e,{...e.settings,sessionKey:s,lastActiveSessionKey:s})),Ir(e,t)}function Ir(e,t){e.tab!==t&&(e.tab=t),t==="chat"&&(e.chatHasAutoScrolled=!1),t==="logs"?Ja(e):Ya(e),t==="debug"?Za(e):Xa(e),e.connected&&po(e)}function Dr(e,t,n){if(typeof window>"u")return;const s=Cn(Ln(t,e.basePath)),a=Cn(window.location.pathname),o=new URL(window.location.href);t==="chat"&&e.sessionKey?o.searchParams.set("session",e.sessionKey):o.searchParams.delete("session"),a!==s&&(o.pathname=s),n?window.history.replaceState({},"",o.toString()):window.history.pushState({},"",o.toString())}async function Rr(e){await Promise.all([_e(e,!1),kr(e),Ne(e),Tn(e),ys(e)])}async function Up(e){await Promise.all([_e(e,!0),Wa(e),Z(e)])}async function Kt(e){await Promise.all([_e(e,!1),Tn(e),xs(e)])}const _i=50,Op=80,Fp=12e4;function Bp(e){if(!e||typeof e!="object")return null;const t=e;if(typeof t.text=="string")return t.text;const n=t.content;if(!Array.isArray(n))return null;const s=n.map(a=>{if(!a||typeof a!="object")return null;const o=a;return o.type==="text"&&typeof o.text=="string"?o.text:null}).filter(a=>!!a);return s.length===0?null:s.join(`
`)}function Pi(e){if(e==null)return null;if(typeof e=="number"||typeof e=="boolean")return String(e);const t=Bp(e);let n;if(typeof e=="string")n=e;else if(t)n=t;else try{n=JSON.stringify(e,null,2)}catch{n=String(e)}const s=ar(n,Fp);return s.truncated?`${s.text}

… truncated (${s.total} chars, showing first ${s.text.length}).`:s.text}function Hp(e){const t=[];return t.push({type:"toolcall",name:e.name,arguments:e.args??{}}),e.output&&t.push({type:"toolresult",name:e.name,text:e.output}),{role:"assistant",toolCallId:e.toolCallId,runId:e.runId,content:t,timestamp:e.startedAt}}function zp(e){if(e.toolStreamOrder.length<=_i)return;const t=e.toolStreamOrder.length-_i,n=e.toolStreamOrder.splice(0,t);for(const s of n)e.toolStreamById.delete(s)}function Kp(e){e.chatToolMessages=e.toolStreamOrder.map(t=>e.toolStreamById.get(t)?.message).filter(t=>!!t)}function Aa(e){e.toolStreamSyncTimer!=null&&(clearTimeout(e.toolStreamSyncTimer),e.toolStreamSyncTimer=null),Kp(e)}function qp(e,t=!1){if(t){Aa(e);return}e.toolStreamSyncTimer==null&&(e.toolStreamSyncTimer=window.setTimeout(()=>Aa(e),Op))}function ks(e){e.toolStreamById.clear(),e.toolStreamOrder=[],e.chatToolMessages=[],Aa(e)}const jp=5e3;function Wp(e,t){const n=t.data??{},s=typeof n.phase=="string"?n.phase:"";e.compactionClearTimer!=null&&(window.clearTimeout(e.compactionClearTimer),e.compactionClearTimer=null),s==="start"?e.compactionStatus={active:!0,startedAt:Date.now(),completedAt:null}:s==="end"&&(e.compactionStatus={active:!1,startedAt:e.compactionStatus?.startedAt??null,completedAt:Date.now()},e.compactionClearTimer=window.setTimeout(()=>{e.compactionStatus=null,e.compactionClearTimer=null},jp))}function Vp(e,t){if(!t)return;if(t.stream==="compaction"){Wp(e,t);return}if(t.stream!=="tool")return;const n=typeof t.sessionKey=="string"?t.sessionKey:void 0;if(n&&n!==e.sessionKey||!n&&e.chatRunId&&t.runId!==e.chatRunId||e.chatRunId&&t.runId!==e.chatRunId||!e.chatRunId)return;const s=t.data??{},a=typeof s.toolCallId=="string"?s.toolCallId:"";if(!a)return;const o=typeof s.name=="string"?s.name:"tool",l=typeof s.phase=="string"?s.phase:"",d=l==="start"?s.args:void 0,u=l==="update"?Pi(s.partialResult):l==="result"?Pi(s.result):void 0,f=Date.now();let g=e.toolStreamById.get(a);g?(g.name=o,d!==void 0&&(g.args=d),u!==void 0&&(g.output=u||void 0),g.updatedAt=f):(g={toolCallId:a,runId:t.runId,sessionKey:n,name:o,args:d,output:u||void 0,startedAt:typeof t.ts=="number"?t.ts:f,updatedAt:f,message:{}},e.toolStreamById.set(a,g),e.toolStreamOrder.push(a)),g.message=Hp(g),zp(e),qp(e,l==="result")}const Gp=/^\[([^\]]+)\]\s*/,Qp=["WebChat","WhatsApp","Telegram","Signal","Slack","Discord","iMessage","Teams","Matrix","Zalo","Zalo Personal","BlueBubbles"],js=new WeakMap,Ws=new WeakMap;function Jp(e){return/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}Z\b/.test(e)||/\d{4}-\d{2}-\d{2} \d{2}:\d{2}\b/.test(e)?!0:Qp.some(t=>e.startsWith(`${t} `))}function Vs(e){const t=e.match(Gp);if(!t)return e;const n=t[1]??"";return Jp(n)?e.slice(t[0].length):e}function Ca(e){const t=e,n=typeof t.role=="string"?t.role:"",s=t.content;if(typeof s=="string")return n==="assistant"?Os(s):Vs(s);if(Array.isArray(s)){const a=s.map(o=>{const l=o;return l.type==="text"&&typeof l.text=="string"?l.text:null}).filter(o=>typeof o=="string");if(a.length>0){const o=a.join(`
`);return n==="assistant"?Os(o):Vs(o)}}return typeof t.text=="string"?n==="assistant"?Os(t.text):Vs(t.text):null}function Nr(e){if(!e||typeof e!="object")return Ca(e);const t=e;if(js.has(t))return js.get(t)??null;const n=Ca(e);return js.set(t,n),n}function Li(e){const n=e.content,s=[];if(Array.isArray(n))for(const d of n){const u=d;if(u.type==="thinking"&&typeof u.thinking=="string"){const f=u.thinking.trim();f&&s.push(f)}}if(s.length>0)return s.join(`
`);const a=Zp(e);if(!a)return null;const l=[...a.matchAll(/<\s*think(?:ing)?\s*>([\s\S]*?)<\s*\/\s*think(?:ing)?\s*>/gi)].map(d=>(d[1]??"").trim()).filter(Boolean);return l.length>0?l.join(`
`):null}function Yp(e){if(!e||typeof e!="object")return Li(e);const t=e;if(Ws.has(t))return Ws.get(t)??null;const n=Li(e);return Ws.set(t,n),n}function Zp(e){const t=e,n=t.content;if(typeof n=="string")return n;if(Array.isArray(n)){const s=n.map(a=>{const o=a;return o.type==="text"&&typeof o.text=="string"?o.text:null}).filter(a=>typeof a=="string");if(s.length>0)return s.join(`
`)}return typeof t.text=="string"?t.text:null}function Xp(e){const t=e.trim();if(!t)return"";const n=t.split(/\r?\n/).map(s=>s.trim()).filter(Boolean).map(s=>`_${s}_`);return n.length?["_Reasoning:_",...n].join(`
`):""}let Ii=!1;function Di(e){e[6]=e[6]&15|64,e[8]=e[8]&63|128;let t="";for(let n=0;n<e.length;n++)t+=e[n].toString(16).padStart(2,"0");return`${t.slice(0,8)}-${t.slice(8,12)}-${t.slice(12,16)}-${t.slice(16,20)}-${t.slice(20)}`}function eg(){const e=new Uint8Array(16),t=Date.now();for(let n=0;n<e.length;n++)e[n]=Math.floor(Math.random()*256);return e[0]^=t&255,e[1]^=t>>>8&255,e[2]^=t>>>16&255,e[3]^=t>>>24&255,e}function tg(){Ii||(Ii=!0,console.warn("[uuid] crypto API missing; falling back to weak randomness"))}function Ie(e=globalThis.crypto){if(e&&typeof e.randomUUID=="function")return e.randomUUID();if(e&&typeof e.getRandomValues=="function"){const t=new Uint8Array(16);return e.getRandomValues(t),Di(t)}return tg(),Di(eg())}async function et(e){if(!(!e.client||!e.connected)){e.chatLoading=!0,e.lastError=null;try{const t=await e.client.request("chat.history",{sessionKey:e.sessionKey,limit:200});e.chatMessages=Array.isArray(t.messages)?t.messages:[],e.chatThinkingLevel=t.thinkingLevel??null}catch(t){e.lastError=String(t)}finally{e.chatLoading=!1}}}function ng(e){const t=/^data:([^;]+);base64,(.+)$/.exec(e);return t?{mimeType:t[1],content:t[2]}:null}async function sg(e,t,n,s){if(!e.client||!e.connected)return null;const a=t.trim(),o=n&&n.length>0;if(!a&&!o)return null;const l=Date.now(),d=[];if(a&&d.push({type:"text",text:a}),o)for(const g of n)(g.kind??(g.mimeType?.startsWith("image/")?"image":"file"))==="image"?d.push({type:"image",source:{type:"base64",media_type:g.mimeType,data:g.dataUrl}}):d.push({type:"text",text:`[附件] ${g.filename||"file"} (${g.mimeType||"application/octet-stream"})`});e.chatMessages=[...e.chatMessages,{role:"user",content:d,timestamp:l}],e.chatSending=!0,e.lastError=null;const u=Ie();e.chatRunId=u,e.chatStream="",e.chatStreamStartedAt=l;const f=o?n.map(g=>{const m=ng(g.dataUrl);return m?{type:g.kind??(g.mimeType?.startsWith("image/")?"image":"file"),mimeType:m.mimeType,content:m.content,filename:g.filename,sizeBytes:g.sizeBytes}:null}).filter(g=>g!==null):void 0;try{return await e.client.request("chat.send",{sessionKey:e.sessionKey,message:a,deliver:!1,idempotencyKey:u,attachments:f,modelRef:s??void 0}),u}catch(g){const m=String(g);return e.chatRunId=null,e.chatStream=null,e.chatStreamStartedAt=null,e.lastError=m,e.chatMessages=[...e.chatMessages,{role:"assistant",content:[{type:"text",text:"Error: "+m}],timestamp:Date.now()}],null}finally{e.chatSending=!1}}async function ag(e){if(!e.client||!e.connected)return!1;const t=e.chatRunId;try{return await e.client.request("chat.abort",t?{sessionKey:e.sessionKey,runId:t}:{sessionKey:e.sessionKey}),!0}catch(n){return e.lastError=String(n),!1}}function og(e,t){if(!t||t.sessionKey!==e.sessionKey)return null;if(t.runId&&e.chatRunId&&t.runId!==e.chatRunId)return t.state==="final"?"final":null;if(t.state==="delta"){const n=Ca(t.message);if(typeof n=="string"){const s=e.chatStream??"";(!s||n.length>=s.length)&&(e.chatStream=n)}}else t.state==="final"||t.state==="aborted"?(e.chatStream=null,e.chatRunId=null,e.chatStreamStartedAt=null):t.state==="error"&&(e.chatStream=null,e.chatRunId=null,e.chatStreamStartedAt=null,e.lastError=t.errorMessage??"chat error");return t.state}const Ur=0;function Or(e){return e.chatSending||!!e.chatRunId}function ig(e){const t=e.trim();if(!t)return!1;const n=t.toLowerCase();return n==="/stop"?!0:n==="stop"||n==="esc"||n==="abort"||n==="wait"||n==="exit"}function lg(e){const t=e.trim();if(!t)return!1;const n=t.toLowerCase();return n==="/new"||n==="/reset"?!0:n.startsWith("/new ")||n.startsWith("/reset ")}async function Fr(e){e.connected&&(e.chatMessage="",await ag(e))}function rg(e,t,n,s){const a=t.trim(),o=!!(n&&n.length>0);!a&&!o||(e.chatQueue=[...e.chatQueue,{id:Ie(),text:a,createdAt:Date.now(),attachments:o?n?.map(l=>({...l})):void 0,refreshSessions:s}])}async function Br(e,t,n){ks(e);const s=await sg(e,t,n?.attachments,e.chatModelRef??null),a=!!s;return!a&&n?.previousDraft!=null&&(e.chatMessage=n.previousDraft),!a&&n?.previousAttachments&&(e.chatAttachments=n.previousAttachments),a&&Lr(e,e.sessionKey),a&&n?.restoreDraft&&n.previousDraft?.trim()&&(e.chatMessage=n.previousDraft),a&&n?.restoreAttachments&&n.previousAttachments?.length&&(e.chatAttachments=n.previousAttachments),En(e),a&&!e.chatRunId&&Hr(e),a&&n?.refreshSessions&&s&&e.refreshSessionsAfterChat.add(s),a}async function Hr(e){if(!e.connected||Or(e))return;const[t,...n]=e.chatQueue;if(!t)return;e.chatQueue=n,await Br(e,t.text,{attachments:t.attachments,refreshSessions:t.refreshSessions})||(e.chatQueue=[t,...e.chatQueue])}function cg(e,t){e.chatQueue=e.chatQueue.filter(n=>n.id!==t)}async function dg(e,t,n){if(!e.connected)return;const s=e.chatMessage,a=(t??e.chatMessage).trim(),o=e.chatAttachments??[],l=t==null?o:[],d=l.length>0;if(!a&&!d)return;if(ig(a)){await Fr(e);return}const u=n?.refreshSessions??lg(a);if(t==null&&(e.chatMessage="",e.chatAttachments=[]),Or(e)){rg(e,a,l,u);return}await Br(e,a,{previousDraft:t==null?s:void 0,restoreDraft:!!(t&&n?.restoreDraft),attachments:d?l:void 0,previousAttachments:t==null?o:void 0,restoreAttachments:!!(t&&n?.restoreDraft),refreshSessions:u})}async function zr(e){await Promise.all([et(e),Ne(e,{activeMinutes:Ur,includeLastMessage:!0}),yt(e)]),En(e)}const ug=Hr;function pg(e){const t=er(e.sessionKey);return t?.agentId?t.agentId:e.hello?.snapshot?.sessionDefaults?.defaultAgentId?.trim()||"main"}function gg(e,t){const n=Pn(e),s=encodeURIComponent(t);return n?`${n}/avatar/${s}?meta=1`:`/avatar/${s}?meta=1`}async function yt(e){if(!e.connected){e.chatAvatarUrl=null;return}const t=pg(e);if(!t){e.chatAvatarUrl=null;return}e.chatAvatarUrl=null;const n=gg(e.basePath,t);try{const s=await fetch(n,{method:"GET"});if(!s.ok){e.chatAvatarUrl=null;return}const a=await s.json(),o=typeof a.avatarUrl=="string"?a.avatarUrl.trim():"";e.chatAvatarUrl=o||null}catch{e.chatAvatarUrl=null}}const mg={trace:!0,debug:!0,info:!0,warn:!0,error:!0,fatal:!0},fg={name:"",description:"",agentId:"",enabled:!0,scheduleKind:"every",scheduleAt:"",everyAmount:"30",everyUnit:"minutes",cronExpr:"0 7 * * *",cronTz:"",sessionTarget:"isolated",wakeMode:"now",payloadKind:"agentTurn",payloadText:"",deliveryMode:"announce",deliveryChannel:"last",deliveryTo:"",timeoutSeconds:""},hg=50,vg=200,yg="Assistant";function Ri(e,t){if(typeof e!="string")return;const n=e.trim();if(n)return n.length<=t?n:n.slice(0,t)}function Ma(e){const t=Ri(e?.name,hg)??yg,n=Ri(e?.avatar??void 0,vg)??null;return{agentId:typeof e?.agentId=="string"&&e.agentId.trim()?e.agentId.trim():null,name:t,avatar:n}}function bg(){return Ma(typeof window>"u"?{}:{name:window.__OPENCLAW_ASSISTANT_NAME__,avatar:window.__OPENCLAW_ASSISTANT_AVATAR__})}async function Kr(e,t){if(!e.client||!e.connected)return;const n=e.sessionKey.trim(),s=n?{sessionKey:n}:{};try{const a=await e.client.request("agent.identity.get",s);if(!a)return;const o=Ma(a);e.assistantName=o.name,e.assistantAvatar=o.avatar,e.assistantAgentId=o.agentId??null}catch{}}function Ea(e){return typeof e=="object"&&e!==null}function xg(e){if(!Ea(e))return null;const t=typeof e.id=="string"?e.id.trim():"",n=e.request;if(!t||!Ea(n))return null;const s=typeof n.command=="string"?n.command.trim():"";if(!s)return null;const a=typeof e.createdAtMs=="number"?e.createdAtMs:0,o=typeof e.expiresAtMs=="number"?e.expiresAtMs:0;return!a||!o?null:{id:t,request:{command:s,cwd:typeof n.cwd=="string"?n.cwd:null,host:typeof n.host=="string"?n.host:null,security:typeof n.security=="string"?n.security:null,ask:typeof n.ask=="string"?n.ask:null,agentId:typeof n.agentId=="string"?n.agentId:null,resolvedPath:typeof n.resolvedPath=="string"?n.resolvedPath:null,sessionKey:typeof n.sessionKey=="string"?n.sessionKey:null},createdAtMs:a,expiresAtMs:o}}function wg(e){if(!Ea(e))return null;const t=typeof e.id=="string"?e.id.trim():"";return t?{id:t,decision:typeof e.decision=="string"?e.decision:null,resolvedBy:typeof e.resolvedBy=="string"?e.resolvedBy:null,ts:typeof e.ts=="number"?e.ts:null}:null}function qr(e){const t=Date.now();return e.filter(n=>n.expiresAtMs>t)}function $g(e,t){const n=qr(e).filter(s=>s.id!==t.id);return n.push(t),n}function Ni(e,t){return qr(e).filter(n=>n.id!==t)}function kg(e){const t=e.version??(e.nonce?"v2":"v1"),n=e.scopes.join(","),s=e.token??"",a=[t,e.deviceId,e.clientId,e.clientMode,e.role,n,String(e.signedAtMs),s];return t==="v2"&&a.push(e.nonce??""),a.join("|")}const jr={WEBCHAT_UI:"webchat-ui",CONTROL_UI:"openclaw-control-ui",WEBCHAT:"webchat",CLI:"cli",GATEWAY_CLIENT:"gateway-client",MACOS_APP:"openclaw-macos",IOS_APP:"openclaw-ios",ANDROID_APP:"openclaw-android",NODE_HOST:"node-host",TEST:"test",FINGERPRINT:"fingerprint",PROBE:"openclaw-probe"},Ui=jr,Ta={WEBCHAT:"webchat",CLI:"cli",UI:"ui",BACKEND:"backend",NODE:"node",PROBE:"probe",TEST:"test"};new Set(Object.values(jr));new Set(Object.values(Ta));const Sg=4008;class Ag{constructor(t){this.opts=t,this.ws=null,this.pending=new Map,this.closed=!1,this.lastSeq=null,this.connectNonce=null,this.connectSent=!1,this.connectTimer=null,this.backoffMs=800}start(){this.closed=!1,this.connect()}stop(){this.closed=!0,this.ws?.close(),this.ws=null,this.flushPending(new Error("gateway client stopped"))}get connected(){return this.ws?.readyState===WebSocket.OPEN}connect(){this.closed||(this.ws=new WebSocket(this.opts.url),this.ws.addEventListener("open",()=>this.queueConnect()),this.ws.addEventListener("message",t=>{this.handleWsMessage(t.data)}),this.ws.addEventListener("close",t=>{const n=String(t.reason??"");this.ws=null,this.flushPending(new Error(`gateway closed (${t.code}): ${n}`)),this.opts.onClose?.({code:t.code,reason:n}),this.scheduleReconnect()}),this.ws.addEventListener("error",()=>{}))}async handleWsMessage(t){try{if(typeof t=="string"){this.handleMessage(t);return}if(typeof Blob<"u"&&t instanceof Blob){this.handleMessage(await t.text());return}if(t instanceof ArrayBuffer){this.handleMessage(new TextDecoder().decode(t));return}if(ArrayBuffer.isView(t)){const n=t;this.handleMessage(new TextDecoder().decode(n.buffer.slice(0)));return}this.handleMessage(String(t??""))}catch{}}scheduleReconnect(){if(this.closed)return;const t=this.backoffMs;this.backoffMs=Math.min(this.backoffMs*1.7,15e3),window.setTimeout(()=>this.connect(),t)}flushPending(t){for(const[,n]of this.pending)n.reject(t);this.pending.clear()}async sendConnect(){if(this.connectSent)return;this.connectSent=!0,this.connectTimer!==null&&(window.clearTimeout(this.connectTimer),this.connectTimer=null);const t=typeof crypto<"u"&&!!crypto.subtle,n=["operator.admin","operator.approvals","operator.pairing"],s="operator";let a=null,o=!1,l=this.opts.token;if(t){a=await oo();const g=uu({deviceId:a.deviceId,role:s})?.token;l=g??this.opts.token,o=!!(g&&this.opts.token)}const d=l||this.opts.password?{token:l,password:this.opts.password}:void 0;let u;if(t&&a){const g=Date.now(),m=this.connectNonce??void 0,v=kg({deviceId:a.deviceId,clientId:this.opts.clientName??Ui.CONTROL_UI,clientMode:this.opts.mode??Ta.WEBCHAT,role:s,scopes:n,signedAtMs:g,token:l??null,nonce:m}),k=await Nu(a.privateKey,v);u={id:a.deviceId,publicKey:a.publicKey,signature:k,signedAt:g,nonce:m}}const f={minProtocol:3,maxProtocol:3,client:{id:this.opts.clientName??Ui.CONTROL_UI,version:this.opts.clientVersion??"dev",platform:this.opts.platform??navigator.platform??"web",mode:this.opts.mode??Ta.WEBCHAT,instanceId:this.opts.instanceId},role:s,scopes:n,device:u,caps:[],auth:d,userAgent:navigator.userAgent,locale:navigator.language};this.request("connect",f).then(g=>{g?.auth?.deviceToken&&a&&lr({deviceId:a.deviceId,role:g.auth.role??s,token:g.auth.deviceToken,scopes:g.auth.scopes??[]}),this.backoffMs=800,this.opts.onHello?.(g)}).catch(g=>{o&&a&&rr({deviceId:a.deviceId,role:s});const m=g instanceof Error?g.message:String(g);this.ws?.close(Sg,m||"connect failed")})}handleMessage(t){let n;try{n=JSON.parse(t)}catch{return}const s=n;if(s.type==="event"){const a=n;if(a.event==="connect.challenge"){const l=a.payload,d=l&&typeof l.nonce=="string"?l.nonce:null;d&&(this.connectNonce=d,this.sendConnect());return}const o=typeof a.seq=="number"?a.seq:null;o!==null&&(this.lastSeq!==null&&o>this.lastSeq+1&&this.opts.onGap?.({expected:this.lastSeq+1,received:o}),this.lastSeq=o);try{this.opts.onEvent?.(a)}catch(l){console.error("[gateway] event handler error:",l)}return}if(s.type==="res"){const a=n,o=this.pending.get(a.id);if(!o)return;this.pending.delete(a.id),a.ok?o.resolve(a.payload):o.reject(new Error(a.error?.message??"request failed"));return}}request(t,n){if(!this.ws||this.ws.readyState!==WebSocket.OPEN)return Promise.reject(new Error("gateway not connected"));const s=Ie(),a={type:"req",id:s,method:t,params:n},o=new Promise((l,d)=>{this.pending.set(s,{resolve:u=>l(u),reject:d})});return this.ws.send(JSON.stringify(a)),o}queueConnect(){this.connectNonce=null,this.connectSent=!1,this.connectTimer!==null&&window.clearTimeout(this.connectTimer),this.connectTimer=window.setTimeout(()=>{this.sendConnect()},750)}}function Gs(e,t){const n=(e??"").trim(),s=t.mainSessionKey?.trim();if(!s)return n;if(!n)return s;const a=t.mainKey?.trim()||"main",o=t.defaultAgentId?.trim();return n==="main"||n===a||o&&(n===`agent:${o}:main`||n===`agent:${o}:${a}`)?s:n}function Cg(e,t){if(!t?.mainSessionKey)return;const n=Gs(e.sessionKey,t),s=Gs(e.settings.sessionKey,t),a=Gs(e.settings.lastActiveSessionKey,t),o=n||s||e.sessionKey,l={...e.settings,sessionKey:s||o,lastActiveSessionKey:a||o},d=l.sessionKey!==e.settings.sessionKey||l.lastActiveSessionKey!==e.settings.lastActiveSessionKey;o!==e.sessionKey&&(e.sessionKey=o),d&&Et(e,l)}function Wr(e){e.lastError=null,e.hello=null,e.connected=!1,e.execApprovalQueue=[],e.execApprovalError=null,e.client?.stop(),e.client=new Ag({url:Vd(e.settings.gatewayUrl),token:e.settings.token.trim()?e.settings.token:void 0,password:e.password.trim()?e.password:void 0,clientName:"openclaw-control-ui",mode:"webchat",onHello:t=>{e.connected=!0,e.lastError=null,e.hello=t,Tg(e,t),e.chatRunId=null,e.chatStream=null,e.chatStreamStartedAt=null,ks(e),Wa(e),Kr(e),nr(e),bs(e,{quiet:!0}),it(e,{quiet:!0}),po(e)},onClose:({code:t,reason:n})=>{if(e.connected=!1,t!==1012){const s=(n??"").trim();s?e.lastError=s:t===1006?e.lastError="连接失败，请检查后端地址和网络连接":e.lastError=`连接断开 (${t})`}},onEvent:t=>Mg(e,t),onGap:({expected:t,received:n})=>{e.lastError=`event gap detected (expected seq ${t}, got ${n}); refresh recommended`}}),e.client.start()}function Mg(e,t){try{Eg(e,t)}catch(n){console.error("[gateway] handleGatewayEvent error:",t.event,n)}}function Eg(e,t){if(e.eventLogBuffer=[{ts:Date.now(),event:t.event,payload:t.payload},...e.eventLogBuffer].slice(0,250),e.tab==="debug"&&(e.eventLog=e.eventLogBuffer),t.event==="agent"){if(e.onboarding)return;Vp(e,t.payload);return}if(t.event==="chat"){const n=t.payload;n?.sessionKey&&Lr(e,n.sessionKey);const s=og(e,n);if(s==="final"||s==="error"||s==="aborted"){ks(e),ug(e);const a=n?.runId;a&&e.refreshSessionsAfterChat.has(a)&&(e.refreshSessionsAfterChat.delete(a),s==="final"&&Ne(e,{activeMinutes:Ur,includeLastMessage:!0}))}s==="final"&&et(e);return}if(t.event==="presence"){const n=t.payload;n?.presence&&Array.isArray(n.presence)&&(e.presenceEntries=n.presence,e.presenceError=null,e.presenceStatus=null);return}if(t.event==="cron"&&e.tab==="cron"&&Kt(e),(t.event==="device.pair.requested"||t.event==="device.pair.resolved")&&it(e,{quiet:!0}),t.event==="exec.approval.requested"){const n=xg(t.payload);if(n){e.execApprovalQueue=$g(e.execApprovalQueue,n),e.execApprovalError=null;const s=Math.max(0,n.expiresAtMs-Date.now()+500);window.setTimeout(()=>{e.execApprovalQueue=Ni(e.execApprovalQueue,n.id)},s)}return}if(t.event==="exec.approval.resolved"){const n=wg(t.payload);n&&(e.execApprovalQueue=Ni(e.execApprovalQueue,n.id))}}function Tg(e,t){const n=t.snapshot;n?.presence&&Array.isArray(n.presence)&&(e.presenceEntries=n.presence),n?.health&&(e.debugHealth=n.health),n?.sessionDefaults&&Cg(e,n.sessionDefaults)}function _g(e){e.basePath=Pp(),Ep(e),Rp(e,!0),Lp(e),Ip(e),window.addEventListener("popstate",e.popStateHandler),Wr(e),eu(e),e.tab==="logs"&&Ja(e),e.tab==="debug"&&Za(e)}function Pg(e){Wd(e)}function Lg(e){window.removeEventListener("popstate",e.popStateHandler),tu(e),Ya(e),Xa(e),Dp(e),e.topbarObserver?.disconnect(),e.topbarObserver=null}function Ig(e,t){if(e.tab==="chat"&&(t.has("chatMessages")||t.has("chatToolMessages")||t.has("chatStream")||t.has("chatLoading")||t.has("tab"))){const n=t.has("tab"),s=t.has("chatLoading")&&t.get("chatLoading")===!0&&!e.chatLoading;En(e,n||s||!e.chatHasAutoScrolled)}e.tab==="logs"&&(t.has("logsEntries")||t.has("logsAutoFollow")||t.has("tab"))&&e.logsAutoFollow&&e.logsAtBottom&&tr(e,t.has("tab")||t.has("logsAutoFollow"))}const ee={messageSquare:r`
    <svg viewBox="0 0 24 24">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  `,barChart:r`
    <svg viewBox="0 0 24 24">
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  `,link:r`
    <svg viewBox="0 0 24 24">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  `,radio:r`
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="2" />
      <path
        d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"
      />
    </svg>
  `,fileText:r`
    <svg viewBox="0 0 24 24">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <line x1="10" x2="8" y1="9" y2="9" />
    </svg>
  `,zap:r`
    <svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
  `,monitor:r`
    <svg viewBox="0 0 24 24">
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <line x1="8" x2="16" y1="21" y2="21" />
      <line x1="12" x2="12" y1="17" y2="21" />
    </svg>
  `,settings:r`
    <svg viewBox="0 0 24 24">
      <path
        d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
      />
      <circle cx="12" cy="12" r="3" />
    </svg>
  `,bug:r`
    <svg viewBox="0 0 24 24">
      <path d="m8 2 1.88 1.88" />
      <path d="M14.12 3.88 16 2" />
      <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
      <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" />
      <path d="M12 20v-9" />
      <path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
      <path d="M6 13H2" />
      <path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
      <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
      <path d="M22 13h-4" />
      <path d="M17.2 17c2.1.1 3.8 1.9 3.8 4" />
    </svg>
  `,scrollText:r`
    <svg viewBox="0 0 24 24">
      <path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4" />
      <path d="M19 17V5a2 2 0 0 0-2-2H4" />
      <path d="M15 8h-5" />
      <path d="M15 12h-5" />
    </svg>
  `,folder:r`
    <svg viewBox="0 0 24 24">
      <path
        d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
      />
    </svg>
  `,sandbox:r`
    <svg viewBox="0 0 24 24">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  `,approvals:r`
    <svg viewBox="0 0 24 24">
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  `,users:r`
    <svg viewBox="0 0 24 24">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="3" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  `,menu:r`
    <svg viewBox="0 0 24 24">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  `,x:r`
    <svg viewBox="0 0 24 24">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  `,check:r`
    <svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5" /></svg>
  `,arrowDown:r`
    <svg viewBox="0 0 24 24">
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  `,copy:r`
    <svg viewBox="0 0 24 24">
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  `,search:r`
    <svg viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  `,brain:r`
    <svg viewBox="0 0 24 24">
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
      <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
      <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
      <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
      <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
      <path d="M6 18a4 4 0 0 1-1.967-.516" />
      <path d="M19.967 17.484A4 4 0 0 1 18 18" />
    </svg>
  `,book:r`
    <svg viewBox="0 0 24 24">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  `,loader:r`
    <svg viewBox="0 0 24 24">
      <path d="M12 2v4" />
      <path d="m16.2 7.8 2.9-2.9" />
      <path d="M18 12h4" />
      <path d="m16.2 16.2 2.9 2.9" />
      <path d="M12 18v4" />
      <path d="m4.9 19.1 2.9-2.9" />
      <path d="M2 12h4" />
      <path d="m4.9 4.9 2.9 2.9" />
    </svg>
  `,alarmClock:r`
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="13" r="8" />
      <path d="M12 9v4l2 2" />
      <path d="M5 3 2 6" />
      <path d="M22 6l-3-3" />
      <path d="M6 19l-3 3" />
      <path d="M18 19l3 3" />
    </svg>
  `,wrench:r`
    <svg viewBox="0 0 24 24">
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      />
    </svg>
  `,fileCode:r`
    <svg viewBox="0 0 24 24">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="m10 13-2 2 2 2" />
      <path d="m14 17 2-2-2-2" />
    </svg>
  `,edit:r`
    <svg viewBox="0 0 24 24">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  `,penLine:r`
    <svg viewBox="0 0 24 24">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  `,paperclip:r`
    <svg viewBox="0 0 24 24">
      <path
        d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
      />
    </svg>
  `,globe:r`
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  `,github:r`
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  `,image:r`
    <svg viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  `,smartphone:r`
    <svg viewBox="0 0 24 24">
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  `,plug:r`
    <svg viewBox="0 0 24 24">
      <path d="M12 22v-5" />
      <path d="M9 8V2" />
      <path d="M15 8V2" />
      <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
    </svg>
  `,circle:r`
    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
  `,plus:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <line x1="12" y1="5" x2="12" y2="19"/>
      <line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  `,puzzle:r`
    <svg viewBox="0 0 24 24">
      <path
        d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.076.874.54 1.02 1.02a2.5 2.5 0 1 0 3.237-3.237c-.48-.146-.944-.505-1.02-1.02a.98.98 0 0 1 .303-.917l1.526-1.526A2.402 2.402 0 0 1 11.998 2c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.236 3.236c-.464.18-.894.527-.967 1.02Z"
      />
    </svg>
  `,download:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  `,trash:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="3 6 5 6 21 6"/>
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
      <line x1="10" y1="11" x2="10" y2="17"/>
      <line x1="14" y1="11" x2="14" y2="17"/>
    </svg>
  `,power:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M18.36 6.64a9 9 0 1 1-12.73 0"/>
      <line x1="12" y1="2" x2="12" y2="12"/>
    </svg>
  `,powerOff:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M18.36 6.64A9 9 0 0 1 20.77 15"/>
      <path d="M14.12 14.12A3 3 0 0 1 9 12a3 3 0 0 1 1.12-2.12"/>
      <path d="M6.64 6.64a9 9 0 0 0 12.73 12.73"/>
      <line x1="2" y1="2" x2="22" y2="22"/>
    </svg>
  `,loader2:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin">
      <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
    </svg>
  `,send:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="m22 2-7 20-4-9-9-4L22 2z" />
      <path d="M22 2 11 13" />
    </svg>
  `,info:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  `};function j(e){return ee[e]}function Ce(e,t){const n=Ln(t,e.basePath),s=t==="sandbox";return r`
    <a
      href=${n}
      class="nav-item ${e.tab===t?"active":""}"
      @click=${a=>{a.defaultPrevented||a.button!==0||a.metaKey||a.ctrlKey||a.shiftKey||a.altKey||(a.preventDefault(),e.setTab(t))}}
      title=${Sa(t)}
    >
      <span class="nav-item__icon" aria-hidden="true">${ee[_r(t)]}</span>
      <span class="nav-item__text">
        ${Sa(t)}
        ${s?r`<span class="nav-badge nav-badge--beta" title="Beta">BETA</span>`:""}
      </span>
    </a>
  `}function Dg(e){e.onboarding;const t=e.onboarding;e.onboarding||e.settings.chatShowThinking;const n=e.onboarding?!0:e.settings.chatFocusMode,s=r`
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path>
      <path d="M21 3v5h-5"></path>
    </svg>
  `,a=r`
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M4 7V4h3"></path>
      <path d="M20 7V4h-3"></path>
      <path d="M4 17v3h3"></path>
      <path d="M20 17v3h-3"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  `;return r`
    <div class="chat-controls">
      <button
        class="btn btn--sm btn--icon"
        ?disabled=${e.chatLoading||!e.connected}
        @click=${()=>{e.resetToolStream(),zr(e)}}
        title="Refresh chat data"
      >
        ${s}
      </button>
      <span class="chat-controls__separator">|</span>
      <button
        class="btn btn--sm btn--icon ${n?"active":""}"
        ?disabled=${t}
        @click=${()=>{t||e.applySettings({...e.settings,chatFocusMode:!e.settings.chatFocusMode})}}
        aria-pressed=${n}
        title=${t?"Disabled during onboarding":"Toggle focus mode (hide sidebar + page header)"}
      >
        ${a}
      </button>
    </div>
  `}async function Vr(e,t){if(!(!e.client||!e.connected)&&!e.usageLoading){e.usageLoading=!0,e.usageError=null;try{const n=t?.startDate??e.usageStartDate,s=t?.endDate??e.usageEndDate,[a,o]=await Promise.all([e.client.request("sessions.usage",{startDate:n,endDate:s,limit:1e3,includeContextWeight:!0}),e.client.request("usage.cost",{startDate:n,endDate:s})]);a&&(e.usageResult=a),o&&(e.usageCostSummary=o)}catch(n){e.usageError=String(n)}finally{e.usageLoading=!1}}}async function Rg(e,t){if(!(!e.client||!e.connected)&&!e.usageTimeSeriesLoading){e.usageTimeSeriesLoading=!0,e.usageTimeSeries=null;try{const n=await e.client.request("sessions.usage.timeseries",{key:t});n&&(e.usageTimeSeries=n)}catch{e.usageTimeSeries=null}finally{e.usageTimeSeriesLoading=!1}}}async function Ng(e,t){if(!(!e.client||!e.connected)&&!e.usageSessionLogsLoading){e.usageSessionLogsLoading=!0,e.usageSessionLogs=null;try{const n=await e.client.request("sessions.usage.logs",{key:t,limit:500});n&&Array.isArray(n.logs)&&(e.usageSessionLogs=n.logs)}catch{e.usageSessionLogs=null}finally{e.usageSessionLogsLoading=!1}}}function Ug(e){return e.editModalOpen?r`
    <div class="modal-overlay" @click=${e.onEditClose}>
      <div class="modal card" @click=${t=>t.stopPropagation()}>
        <div class="card-title">修改数字员工</div>
        <div class="field" style="margin-top: 12px;">
          <span>名称</span>
          <input type="text" .value=${e.editName} disabled />
          <div class="list-sub muted" style="font-size: 11px; margin-top: 4px;">名称不可修改</div>
        </div>
        <div class="field" style="margin-top: 12px;">
          <span>描述</span>
          <textarea
            rows="2"
            .value=${e.editDescription}
            @input=${t=>e.onEditDescriptionChange(t.target.value)}
          ></textarea>
        </div>
        <div class="field" style="margin-top: 12px;">
          <span>Prompt（可选）</span>
          <textarea
            rows="4"
            .value=${e.editPrompt}
            @input=${t=>e.onEditPromptChange(t.target.value)}
            placeholder="为该数字员工编写系统提示/人设说明。"
          ></textarea>
        </div>
        <div class="field" style="margin-top: 12px;">
          <span>MCP 配置（可选）</span>
          <div class="row" style="margin-top: 6px; gap: 8px; flex-wrap: wrap;">
            <button
              class="btn ${e.editMcpMode==="builder"?"primary":""}"
              type="button"
              @click=${()=>e.onEditMcpModeChange("builder")}
            >
              点选配置
            </button>
            <button
              class="btn ${e.editMcpMode==="raw"?"primary":""}"
              type="button"
              @click=${()=>e.onEditMcpModeChange("raw")}
            >
              原生 JSON
            </button>
          </div>
          ${e.editMcpMode==="raw"?r`
                  <textarea
                    rows="4"
                    style="margin-top: 8px;"
                    .value=${e.editMcpJson}
                    @input=${t=>e.onEditMcpJsonChange(t.target.value)}
                    placeholder='{"prometheus":{"service":"prometheus","serviceUrl":"http://localhost:9090"}}'
                  ></textarea>
                  <div class="list-sub muted" style="font-size: 11px; margin-top: 4px;">
                    与主配置 mcp.servers 结构一致，会话时合并（同 key 时员工覆盖）
                  </div>
                `:r`
                  <div class="row" style="margin-top: 8px; justify-content: space-between; align-items: center;">
                    <div class="muted" style="font-size: 12px;">
                      可添加多个 MCP；配置完成后可折叠，避免页面过长。
                    </div>
                    <button class="btn btn--sm" type="button" @click=${e.onEditMcpAddItem}>
                      + 添加 MCP
                    </button>
                  </div>
                  <div style="margin-top: 8px; display: grid; gap: 10px;">
                    ${e.editMcpItems.map(t=>go(t,{onRemoveItem:e.onEditMcpRemoveItem,onCollapsedChange:e.onEditMcpCollapsedChange,onKeyChange:e.onEditMcpKeyChange,onEditModeChange:e.onEditMcpEditModeChange,onConnectionTypeChange:e.onEditMcpConnectionTypeChange,onFormPatch:e.onEditMcpFormPatch,onRawChange:e.onEditMcpRawChange}))}
                  </div>
                `}
        </div>
        <div class="field" style="margin-top: 12px;">
          <span>已有技能</span>
          ${e.editSkillNames.length===0?r`<div class="muted" style="font-size: 12px;">暂无技能</div>`:r`
                  <div class="row" style="flex-wrap: wrap; gap: 8px; margin-top: 8px;">
                    ${e.editSkillNames.map(t=>r`
                          <span
                            class="chip"
                            style="display: inline-flex; align-items: center; gap: 4px;"
                          >
                            ${t}
                            ${e.editSkillsToDelete.includes(t)?r`
                                  <span class="muted" style="font-size: 11px;"
                                    >已标记删除</span
                                  >
                                  <button
                                    type="button"
                                    class="btn btn--sm"
                                    style="padding: 2px 6px; font-size: 11px;"
                                    @click=${()=>e.onEditSkillUndoDelete(t)}
                                  >
                                    撤销
                                  </button>
                                `:r`
                                  <button
                                    type="button"
                                    class="btn btn--sm"
                                    style="padding: 2px 6px; font-size: 11px;"
                                    @click=${()=>e.onEditSkillDelete(t)}
                                  >
                                    删除
                                  </button>
                                `}
                          </span>
                        `)}
                  </div>
                `}
        </div>
        <div class="field" style="margin-top: 12px;">
          <span>新上传技能文件（可多选）</span>
          <input
            type="file"
            accept=".md,.MD,.zip"
            multiple
            @change=${t=>{const n=t.target,s=n.files?Array.from(n.files):[];e.onEditSkillFilesChange(s)}}
          />
          ${e.editSkillFilesToUpload.length>0?r`
                  <div class="row" style="flex-wrap: wrap; gap: 4px; margin-top: 8px;">
                    ${e.editSkillFilesToUpload.map(t=>r`<span class="chip" style="font-size: 12px;"
                          >${t.name}</span
                        >`)}
                  </div>
                `:y}
        </div>
        ${e.editError?r`
                <div class="callout danger" style="margin-top: 12px;">
                  ${e.editError}
                </div>
              `:y}
        <div class="row" style="margin-top: 16px; justify-content: flex-end; gap: 8px;">
          <button class="btn" ?disabled=${e.editBusy} @click=${e.onEditClose}>
            ${i("commonCancel")}
          </button>
          <button
            class="btn primary"
            ?disabled=${e.editBusy}
            @click=${e.onEditSubmit}
          >
            ${e.editBusy?i("commonLoading"):"保存"}
          </button>
        </div>
      </div>
    </div>
  `:y}function Og(e){if(!e.createModalOpen)return y;const t=Qr(e.createName?.trim()??"");return r`
    <div class="modal-overlay" @click=${e.onCreateClose}>
      <div class="modal card" @click=${n=>n.stopPropagation()}>
        <div class="card-title">新增数字员工</div>
        <div class="field" style="margin-top: 12px;">
          <span>名称</span>
          <input
            type="text"
            .value=${e.createName}
            @input=${n=>e.onCreateNameChange(n.target.value)}
            placeholder="如 SRE 运维专家"
          />
          <div class="list-sub muted" style="font-size: 11px; margin-top: 4px;">名称唯一</div>
        </div>
        <div class="field" style="margin-top: 12px;">
          <span>描述</span>
          <textarea
            rows="2"
            .value=${e.createDescription}
            @input=${n=>e.onCreateDescriptionChange(n.target.value)}
          ></textarea>
        </div>
        <div class="field" style="margin-top: 12px;">
          <span>Prompt（可选）</span>
          <textarea
            rows="4"
            .value=${e.createPrompt}
            @input=${n=>e.onCreatePromptChange(n.target.value)}
            placeholder="为该数字员工编写系统提示/人设说明。"
          ></textarea>
        </div>
        <div class="field" style="margin-top: 12px;">
          <button class="btn secondary" type="button" @click=${e.onToggleAdvanced}>
            ${e.advancedOpen?"收起高级配置":"展开高级配置"}
          </button>
        </div>
        ${e.advancedOpen?r`
              <div class="card" style="margin-top: 12px;">
                <div class="card-title" style="font-size: 13px; margin-bottom: 8px;">高级配置</div>
                <div class="list-sub muted" style="font-size: 12px; margin-bottom: 8px;">
                  预估 ID：<code>${t}</code>（基于名称生成，用于专属技能目录
                  ~/.openocta/employee_skills/${t}/...）
                </div>
                <div class="field" style="margin-top: 8px;">
                  <span>MCP 配置（可选）</span>
                  <div class="row" style="margin-top: 6px; gap: 8px; flex-wrap: wrap;">
                    <button
                      class="btn ${e.createMcpMode==="builder"?"primary":""}"
                      type="button"
                      @click=${()=>e.onMcpModeChange("builder")}
                    >
                      点选配置
                    </button>
                    <button
                      class="btn ${e.createMcpMode==="raw"?"primary":""}"
                      type="button"
                      @click=${()=>e.onMcpModeChange("raw")}
                    >
                      原生 JSON
                    </button>
                  </div>
                  ${e.createMcpMode==="raw"?r`
                        <textarea
                          rows="4"
                          style="margin-top: 8px;"
                          .value=${e.mcpJson}
                          @input=${n=>e.onMcpJsonChange(n.target.value)}
                          placeholder='{"prometheus":{"service":"prometheus","serviceUrl":"http://localhost:9090"}}'
                        ></textarea>
                        <div class="list-sub muted" style="font-size: 11px; margin-top: 4px;">
                          与主配置 mcp.servers 结构一致，会话时合并（同 key 时员工覆盖）
                        </div>
                      `:r`
                        <div class="row" style="margin-top: 8px; justify-content: space-between; align-items: center;">
                          <div class="muted" style="font-size: 12px;">
                            可添加多个 MCP；配置完成后可折叠，避免页面过长。
                          </div>
                          <button class="btn btn--sm" type="button" @click=${e.onMcpAddItem}>
                            + 添加 MCP
                          </button>
                        </div>
                        <div style="margin-top: 8px; display: grid; gap: 10px;">
                          ${e.mcpItems.map(n=>go(n,{onRemoveItem:e.onMcpRemoveItem,onCollapsedChange:e.onMcpCollapsedChange,onKeyChange:e.onMcpKeyChange,onEditModeChange:e.onMcpEditModeChange,onConnectionTypeChange:e.onMcpConnectionTypeChange,onFormPatch:e.onMcpFormPatch,onRawChange:e.onMcpRawChange}))}
                        </div>
                      `}
                </div>
                <div class="field" style="margin-top: 8px;">
                  <span>技能名称（可选）</span>
                  <input
                    type="text"
                    .value=${e.skillUploadName}
                    @input=${n=>e.onSkillUploadNameChange(n.target.value)}
                    placeholder="不填则从文件名推导，如 prometheus-1.0.0.zip → prometheus-1.0.0"
                  />
                </div>
                <div class="field" style="margin-top: 8px;">
                  <span>技能文件（SKILL.md 或 zip，可多选，提交时一并上传）</span>
                  <input
                    type="file"
                    accept=".md,.MD,.zip"
                    multiple
                    @change=${n=>{const s=n.target,a=s.files?Array.from(s.files):[];e.onSkillUploadFilesChange(a)}}
                  />
                </div>
                ${e.skillUploadError?r`
                      <div class="callout danger" style="margin-top: 8px;">
                        ${e.skillUploadError}
                      </div>
                    `:y}
              </div>
            `:y}
        ${e.createError?r`
              <div class="callout danger" style="margin-top: 12px;">
                ${e.createError}
              </div>
            `:y}
        <div class="row" style="margin-top: 16px; justify-content: flex-end; gap: 8px;">
          <button class="btn" ?disabled=${e.createBusy} @click=${e.onCreateClose}>
            ${i("commonCancel")}
          </button>
          <button
            class="btn primary"
            ?disabled=${e.createBusy||!e.createName.trim()}
            @click=${e.onCreateSubmit}
          >
            ${e.createBusy?i("commonLoading"):i("skillsUploadSubmit")}
          </button>
        </div>
      </div>
    </div>
  `}function Fg(e){const t=e.employees??[],n=e.filter.trim().toLowerCase(),s=n?t.filter(l=>[l.name,l.id,l.description].join(" ").toLowerCase().includes(n)):t,a=e.createName?.trim()??"",o=Qr(a);return r`
    <section class="card">
      <div class="row" style="justify-content: space-between; align-items: center;">
        <div>
          <div class="card-title">${i("navTitleDigitalEmployee")}</div>
          <div class="card-sub">
            提供不同垂直场景的对话模版，点击任一数字员工即可开启新的会话。
          </div>
        </div>
        <div class="row" style="gap: 8px; align-items: center;">
          <div class="row" style="gap: 4px;" title=${i("mcpViewList")}>
            <button
              type="button"
              class="btn ${e.viewMode==="list"?"primary":""}"
              style="padding: 6px 10px;"
              @click=${()=>e.onViewModeChange("list")}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="8" y1="6" x2="21" y2="6"/>
                <line x1="8" y1="12" x2="21" y2="12"/>
                <line x1="8" y1="18" x2="21" y2="18"/>
                <line x1="3" y1="6" x2="3.01" y2="6"/>
                <line x1="3" y1="12" x2="3.01" y2="12"/>
                <line x1="3" y1="18" x2="3.01" y2="18"/>
              </svg>
            </button>
            <button
              type="button"
              class="btn ${e.viewMode==="card"?"primary":""}"
              style="padding: 6px 10px;"
              @click=${()=>e.onViewModeChange("card")}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="7" height="7"/>
                <rect x="14" y="3" width="7" height="7"/>
                <rect x="3" y="14" width="7" height="7"/>
                <rect x="14" y="14" width="7" height="7"/>
              </svg>
            </button>
          </div>
          <button class="btn primary" ?disabled=${e.loading} @click=${e.onCreateOpen}>
            ${i("skillsAdd")}
          </button>
          <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?i("commonLoading"):i("commonRefresh")}
          </button>
        </div>
      </div>

      ${e.error?r`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:y}

      <div class="filters" style="margin-top: 14px;">
        <label class="field" style="flex: 1;">
          <span>${i("commonFilter")}</span>
          <input
            .value=${e.filter}
            @input=${l=>e.onFilterChange(l.target.value)}
            placeholder="搜索名称/ID/描述"
          />
        </label>
        <div class="muted">${s.length} 个</div>
      </div>

      ${!e.loading&&s.length===0?r`<div class="muted" style="margin-top: 16px;">暂无匹配的数字员工。</div>`:r`
              ${e.viewMode==="list"?r`
                      <div class="list" style="margin-top: 16px;">
                        ${s.map(l=>Bg(l,e))}
                      </div>
                    `:r`
                      <div
                        class="employees-card-grid"
                        style="
                          display: grid;
                          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                          gap: 12px;
                          margin-top: 16px;
                        "
                      >
                        ${s.map(l=>Hg(l,e))}
                      </div>
                    `}
            `}

      ${e.createModalOpen?r`
              <div class="modal-overlay" @click=${e.onCreateClose}>
                <div class="modal card" @click=${l=>l.stopPropagation()}>
                  <div class="card-title">新增数字员工</div>
                  <div class="field" style="margin-top: 12px;">
                    <span>名称</span>
                    <input
                      type="text"
                      .value=${e.createName}
                      @input=${l=>e.onCreateNameChange(l.target.value)}
                      placeholder="如 SRE 运维专家"
                    />
                    <div class="list-sub muted" style="font-size: 11px; margin-top: 4px;">名称唯一</div>
                  </div>
                  <div class="field" style="margin-top: 12px;">
                    <span>描述</span>
                    <textarea
                      rows="2"
                      .value=${e.createDescription}
                      @input=${l=>e.onCreateDescriptionChange(l.target.value)}
                    ></textarea>
                  </div>
                  <div class="field" style="margin-top: 12px;">
                    <span>Prompt（可选）</span>
                    <textarea
                      rows="4"
                      .value=${e.createPrompt}
                      @input=${l=>e.onCreatePromptChange(l.target.value)}
                      placeholder="为该数字员工编写系统提示/人设说明。"
                    ></textarea>
                  </div>
                  <div class="field" style="margin-top: 12px;">
                    <button class="btn secondary" type="button" @click=${e.onToggleAdvanced}>
                      ${e.advancedOpen?"收起高级配置":"展开高级配置"}
                    </button>
                  </div>
                  ${e.advancedOpen?r`
                          <div class="card" style="margin-top: 12px;">
                            <div class="card-title" style="font-size: 13px; margin-bottom: 8px;">
                              高级配置
                            </div>
                            <div class="list-sub muted" style="font-size: 12px; margin-bottom: 8px;">
                              预估 ID：<code>${o}</code>（基于名称生成，用于专属技能目录
                              ~/.openocta/employee_skills/${o}/...）
                            </div>
                            <div class="field" style="margin-top: 8px;">
                              <span>MCP 配置（可选）</span>
                              <div class="row" style="margin-top: 6px; gap: 8px; flex-wrap: wrap;">
                                <button
                                  class="btn ${e.createMcpMode==="builder"?"primary":""}"
                                  type="button"
                                  @click=${()=>e.onMcpModeChange("builder")}
                                >
                                  点选配置
                                </button>
                                <button
                                  class="btn ${e.createMcpMode==="raw"?"primary":""}"
                                  type="button"
                                  @click=${()=>e.onMcpModeChange("raw")}
                                >
                                  原生 JSON
                                </button>
                              </div>
                              ${e.createMcpMode==="raw"?r`
                                      <textarea
                                        rows="4"
                                        style="margin-top: 8px;"
                                        .value=${e.mcpJson}
                                        @input=${l=>e.onMcpJsonChange(l.target.value)}
                                        placeholder='{"prometheus":{"service":"prometheus","serviceUrl":"http://localhost:9090"}}'
                                      ></textarea>
                                      <div class="list-sub muted" style="font-size: 11px; margin-top: 4px;">
                                        与主配置 mcp.servers 结构一致，会话时合并（同 key 时员工覆盖）
                                      </div>
                                    `:r`
                                      <div class="row" style="margin-top: 8px; justify-content: space-between; align-items: center;">
                                        <div class="muted" style="font-size: 12px;">
                                          可添加多个 MCP；配置完成后可折叠，避免页面过长。
                                        </div>
                                        <button class="btn btn--sm" type="button" @click=${e.onMcpAddItem}>
                                          + 添加 MCP
                                        </button>
                                      </div>
                                      <div style="margin-top: 8px; display: grid; gap: 10px;">
                                        ${e.mcpItems.map(l=>go(l,{onRemoveItem:e.onMcpRemoveItem,onCollapsedChange:e.onMcpCollapsedChange,onKeyChange:e.onMcpKeyChange,onEditModeChange:e.onMcpEditModeChange,onConnectionTypeChange:e.onMcpConnectionTypeChange,onFormPatch:e.onMcpFormPatch,onRawChange:e.onMcpRawChange}))}
                                      </div>
                                    `}
                            </div>
                            <div class="field" style="margin-top: 8px;">
                              <span>技能名称（可选）</span>
                              <input
                                type="text"
                                .value=${e.skillUploadName}
                                @input=${l=>e.onSkillUploadNameChange(l.target.value)}
                                placeholder="不填则从文件名推导，如 prometheus-1.0.0.zip → prometheus-1.0.0"
                              />
                            </div>
                            <div class="field" style="margin-top: 8px;">
                              <span>技能文件（SKILL.md 或 zip，可多选，提交时一并上传）</span>
                              <input
                                type="file"
                                accept=".md,.MD,.zip"
                                multiple
                                @change=${l=>{const d=l.target,u=d.files?Array.from(d.files):[];e.onSkillUploadFilesChange(u)}}
                              />
                            </div>
                            ${e.skillUploadError?r`
                                    <div class="callout danger" style="margin-top: 8px;">
                                      ${e.skillUploadError}
                                    </div>
                                  `:y}
                          </div>
                        `:y}
                  ${e.createError?r`
                          <div class="callout danger" style="margin-top: 12px;">
                            ${e.createError}
                          </div>
                        `:y}
                  <div class="row" style="margin-top: 16px; justify-content: flex-end; gap: 8px;">
                    <button class="btn" ?disabled=${e.createBusy} @click=${e.onCreateClose}>
                      ${i("commonCancel")}
                    </button>
                    <button
                      class="btn primary"
                      ?disabled=${e.createBusy||!e.createName.trim()}
                      @click=${e.onCreateSubmit}
                    >
                      ${e.createBusy?i("commonLoading"):i("skillsUploadSubmit")}
                    </button>
                  </div>
                </div>
              </div>
            `:y}

      ${y}
    </section>
  `}function Bg(e,t){const n=e.name||e.id,s=e.description||(e.builtin?"内置数字员工":"自定义数字员工"),a=typeof e.createdAt=="number"&&e.createdAt>0?new Date(e.createdAt).toLocaleString():e.builtin?"内置":"",o=e.enabled!==!1;return r`
    <div class="list-item list-item--row" style="width: 100%; text-align: left;">
      <div class="list-main">
        <div class="list-title">
          ${n}
          ${e.builtin?r`<span class="chip" style="margin-left: 8px;">内置</span>`:y}
        </div>
        <div class="list-sub">${s}</div>
        <div class="list-sub muted" style="margin-top: 4px;">
          ${a?r`<span>创建时间：${a}</span>`:y}
          <span style="margin-left: 12px;">状态：${o?"启用":"禁用"}</span>
          ${Gr(e)}
        </div>
      </div>
      <div class="row" style="gap: 8px; align-items: center; justify-content: flex-end;">
        <button class="btn btn--sm primary" @click=${()=>t.onOpenEmployee(e.id)}>会话</button>
        <button class="btn btn--sm" @click=${()=>t.onCopy(e.id)}>复制</button>
        <button class="btn btn--sm" @click=${()=>t.onEdit(e.id)}>
          修改
        </button>
        <button class="btn btn--sm danger" @click=${()=>t.onDelete(e.id)}>
          ${i("skillsDelete")}
        </button>
      </div>
    </div>
  `}function Hg(e,t){const n=e.name||e.id,s=e.description||(e.builtin?"内置数字员工":"自定义数字员工"),a=typeof e.createdAt=="number"&&e.createdAt>0?new Date(e.createdAt).toLocaleString():e.builtin?"内置":"",o=e.enabled!==!1;return r`
    <div class="skills-server-card" style="cursor: pointer;" @click=${()=>t.onOpenEmployee(e.id)}>
      <div class="skills-server-card__header">
        <div class="skills-server-card__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
        </div>
        <div class="skills-server-card__title-row" style="min-width: 0;">
          <span class="skills-server-card__name">${n}</span>
          ${e.builtin?r`<span class="chip" style="font-size: 11px;">内置</span>`:y}
          <span class="chip ${o?"chip-ok":"chip-warn"}" style="font-size: 11px;">
            ${o?"启用":"禁用"}
          </span>
        </div>
      </div>
      <div class="skills-server-card__sub muted" style="font-size: 12px;">
        <div>${s}</div>
        ${a?r`<div style="margin-top: 6px;">创建时间：${a}</div>`:y}
        ${Gr(e)}
      </div>
      <div class="skills-server-card__footer" @click=${l=>l.stopPropagation()}>
        <button class="btn btn--sm primary" @click=${()=>t.onOpenEmployee(e.id)}>会话</button>
        <button class="btn btn--sm" @click=${()=>t.onCopy(e.id)}>复制</button>
        <button class="btn btn--sm" @click=${()=>t.onEdit(e.id)}>
          修改
        </button>
        <button class="btn btn--sm danger" @click=${()=>t.onDelete(e.id)}>
          ${i("skillsDelete")}
        </button>
      </div>
    </div>
  `}function Gr(e){const t=e.skillNames??e.skillIds??[],n=e.mcpServerKeys??[];if(t.length===0&&n.length===0)return r``;const s=3,a=t.length<=s?t.join(", "):`${t.slice(0,s).join(", ")}....`,o=n.length<=s?n.join(", "):`${n.slice(0,s).join(", ")}....`,l=t.join(", "),d=n.join(", "),u=l&&d?`技能：${l}
MCP：${d}`:l?`技能：${l}`:`MCP：${d}`,f=[];return a&&f.push(`技能：${a}`),o&&f.push(`MCP：${o}`),r`<span
    style="margin-left: 12px; cursor: help; text-decoration: underline dotted;"
    title=${u}
  >
    ${f.join(" | ")}
  </span>`}function Qr(e){const t=e.trim().toLowerCase();if(!t)return"employee";let n="";for(const s of t){if(s>="a"&&s<="z"||s>="0"&&s<="9"){n+=s;continue}(s==="-"||s==="_"||s===" ")&&(n+="-")}return n=n.replace(/-+/g,"-").replace(/^-+/,"").replace(/-+$/,""),n||(n="employee"),n.length>64&&(n=n.slice(0,64)),n}function go(e,t){const n=e.key?.trim()?e.key.trim():"未命名 MCP",s=e.editMode==="raw"?"JSON":e.connectionType,a=!!e.rawError,o=!!e.collapsed;return r`
    <details
      class="card"
      style="padding: 10px;"
      ?open=${!o}
      @toggle=${l=>{const d=l.target;t.onCollapsedChange(e.id,!d.open)}}
    >
      <summary class="row" style="cursor: pointer; list-style: none; align-items: center; gap: 8px;">
        <button
          class="btn btn--sm"
          type="button"
          title=${o?"展开":"折叠"}
          @click=${l=>{l.preventDefault(),l.stopPropagation(),t.onCollapsedChange(e.id,!o)}}
        >
          ${o?"▸ 展开":"▾ 折叠"}
        </button>
        <span style="font-weight: 600; flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
          ${n}
        </span>
        <span class="chip" style="font-size: 11px;">${s}</span>
        ${a?r`<span class="chip chip-warn" style="font-size: 11px;">有错误</span>`:y}
        <button
          class="btn btn--sm"
          type="button"
          style="margin-left: 6px;"
          @click=${l=>{l.preventDefault(),l.stopPropagation(),t.onRemoveItem(e.id)}}
        >
          删除
        </button>
      </summary>

      <div style="margin-top: 10px;">
        <div class="field">
          <span>Key（唯一）*</span>
          <input
            type="text"
            .value=${e.key}
            placeholder="如 prometheus, filesystem"
            @input=${l=>t.onKeyChange(e.id,l.target.value)}
          />
        </div>

        <div class="row" style="margin-top: 10px; gap: 8px;">
          <button
            class="btn ${e.editMode==="form"?"primary":""}"
            type="button"
            @click=${()=>t.onEditModeChange(e.id,"form")}
          >
            点选配置
          </button>
          <button
            class="btn ${e.editMode==="raw"?"primary":""}"
            type="button"
            @click=${()=>t.onEditModeChange(e.id,"raw")}
          >
            原生 JSON
          </button>
        </div>

        ${e.editMode==="raw"?r`
                <div class="field" style="margin-top: 10px;">
                  <span>JSON</span>
                  <textarea
                    rows="6"
                    style="font-family: var(--mono); font-size: 12px;"
                    .value=${e.rawJson}
                    @input=${l=>t.onRawChange(e.id,l.target.value)}
                  ></textarea>
                  ${e.rawError?r`<div class="callout danger" style="margin-top: 8px;">${e.rawError}</div>`:y}
                </div>
              `:r`
                <div
                  class="row"
                  style="
                    display: flex;
                    gap: 4px;
                    margin-top: 12px;
                    border-bottom: 1px solid var(--input, #333);
                    padding-bottom: 4px;
                  "
                >
                  <button
                    class="btn ${e.connectionType==="stdio"?"primary":""}"
                    type="button"
                    style="flex: 1; min-width: 0;"
                    @click=${()=>t.onConnectionTypeChange(e.id,"stdio")}
                  >
                    stdio
                  </button>
                  <button
                    class="btn ${e.connectionType==="url"?"primary":""}"
                    type="button"
                    style="flex: 1; min-width: 0;"
                    @click=${()=>t.onConnectionTypeChange(e.id,"url")}
                  >
                    url
                  </button>
                  <button
                    class="btn ${e.connectionType==="service"?"primary":""}"
                    type="button"
                    style="flex: 1; min-width: 0;"
                    @click=${()=>t.onConnectionTypeChange(e.id,"service")}
                  >
                    service
                  </button>
                </div>
                <div style="margin-top: 10px;">
                  ${qg(e,l=>t.onFormPatch(e.id,l))}
                </div>
              `}
      </div>
    </details>
  `}function zg(e){return!e||typeof e!="object"?"":Object.entries(e).map(([t,n])=>`${t}=${n}`).join(`
`)}function Kg(e){const t={};for(const n of e.split(/\n/)){const s=n.trim();if(!s)continue;const a=s.indexOf("=");if(a>0){const o=s.slice(0,a).trim(),l=s.slice(a+1).trim();o&&(t[o]=l)}}return t}function qg(e,t){const n=["npx","docker","uv"];if(e.connectionType==="stdio"){let s=(e.draft?.command??"").trim();if(!s&&e.editMode==="raw"&&e.rawJson?.trim())try{const l=JSON.parse(e.rawJson);l&&typeof l.command=="string"&&l.command.trim()&&(s=l.command.trim())}catch{}s=s||"npx";const a=n,o=a.includes(s)?a:[s,...a];return r`
      <div class="field">
        <span>command *</span>
        <select
          @change=${l=>t({command:l.target.value})}
        >
          ${o.map(l=>r`
            <option 
              value=${l} 
              ?selected=${l===s} 
            >
              ${l}
            </option>
          `)}
        </select>
      </div>
      <div class="field" style="margin-top: 8px;">
        <span>args</span>
        <input
          type="text"
          .value=${(e.draft?.args??[]).join(" ")}
          placeholder="-y prometheus-mcp-server"
          @input=${l=>{const d=l.target.value;t({args:d.trim()?d.trim().split(/\s+/):[]})}}
        />
      </div>
      <div class="field" style="margin-top: 8px;">
        <span>env</span>
        <textarea
          style="min-height: 80px; font-family: var(--mono); font-size: 12px;"
          placeholder="KEY=value"
          .value=${zg(e.draft?.env)}
          @input=${l=>{const d=l.target.value;t({env:Kg(d)})}}
        ></textarea>
      </div>
    `}return e.connectionType==="url"?r`
      <div class="field">
        <span>url *</span>
        <input
          type="text"
          .value=${e.draft?.url??""}
          placeholder="https://mcp.example.com/sse"
          @input=${s=>t({url:s.target.value})}
        />
      </div>
    `:r`
    <div class="field">
      <span>service *</span>
      <input
        type="text"
        .value=${e.draft?.service??""}
        placeholder="prometheus"
        @input=${s=>t({service:s.target.value})}
      />
    </div>
    <div class="field" style="margin-top: 8px;">
      <span>serviceUrl *</span>
      <input
        type="text"
        .value=${e.draft?.serviceUrl??""}
        placeholder="http://localhost:9090"
        @input=${s=>t({serviceUrl:s.target.value})}
      />
    </div>
  `}const jg={feishu:{fields:[{path:["credentials","appId"],label:"App ID",required:!0,type:"string",placeholder:"cli_xxx"},{path:["credentials","appSecret"],label:"App Secret",required:!0,type:"string",placeholder:"xxx"},{path:["credentials","domain"],label:"Domain",required:!1,type:"string",placeholder:"open.feishu.cn"},{path:["credentials","encryptKey"],label:"Encrypt Key",required:!1,type:"string"},{path:["credentials","verificationToken"],label:"Verification Token",required:!1,type:"string"},{path:["enabled"],label:"Enabled",required:!1,type:"boolean"},{path:["allowedIds"],label:"Allowed IDs",required:!1,type:"string[]",placeholder:"user-id-1, user-id-2"}]},dingtalk:{fields:[{path:["credentials","clientId"],label:"Client ID",required:!0,type:"string",placeholder:"your-client-id"},{path:["credentials","clientSecret"],label:"Client Secret",required:!0,type:"string",placeholder:"your-client-secret"},{path:["enabled"],label:"Enabled",required:!1,type:"boolean"},{path:["allowedIds"],label:"Allowed IDs",required:!1,type:"string[]",placeholder:"user-id-1, user-id-2"}]},wework:{fields:[{path:["credentials","corpId"],label:"Corp ID",required:!0,type:"string",placeholder:"your-corp-id"},{path:["credentials","agentId"],label:"Agent ID",required:!0,type:"string",placeholder:"your-agent-id"},{path:["credentials","secret"],label:"Secret",required:!0,type:"string",placeholder:"your-secret"},{path:["credentials","token"],label:"Token",required:!0,type:"string",placeholder:"your-token"},{path:["credentials","encodingAESKey"],label:"Encoding AES Key",required:!1,type:"string"},{path:["webhookPort"],label:"Webhook Port",required:!1,type:"number",placeholder:"8766"},{path:["enabled"],label:"Enabled",required:!1,type:"boolean"},{path:["allowedIds"],label:"Allowed IDs",required:!1,type:"string[]",placeholder:"user-or-chat-id"}]},telegram:{fields:[{path:["enabled"],label:"Enabled",required:!1,type:"boolean"},{path:["accountId"],label:"Account ID",required:!1,type:"string",placeholder:"default"},{path:["name"],label:"Name",required:!1,type:"string",placeholder:"Telegram"},{path:["allowedIds"],label:"Allowed IDs",required:!1,type:"string[]",placeholder:"user-id-1"}]},slack:{fields:[{path:["enabled"],label:"Enabled",required:!1,type:"boolean"},{path:["accountId"],label:"Account ID",required:!1,type:"string",placeholder:"default"},{path:["name"],label:"Name",required:!1,type:"string",placeholder:"Slack"},{path:["allowedIds"],label:"Allowed IDs",required:!1,type:"string[]",placeholder:"user-id-1"}]},discord:{fields:[{path:["enabled"],label:"Enabled",required:!1,type:"boolean"},{path:["accountId"],label:"Account ID",required:!1,type:"string",placeholder:"default"},{path:["name"],label:"Name",required:!1,type:"string",placeholder:"Discord"},{path:["allowedIds"],label:"Allowed IDs",required:!1,type:"string[]",placeholder:"user-id-1"}]},whatsapp:{fields:[{path:["enabled"],label:"Enabled",required:!1,type:"boolean"},{path:["accountId"],label:"Account ID",required:!1,type:"string",placeholder:"default"},{path:["name"],label:"Name",required:!1,type:"string",placeholder:"WhatsApp"},{path:["allowedIds"],label:"Allowed IDs",required:!1,type:"string[]",placeholder:"user-id-1"}]},qq:{fields:[{path:["credentials","appId"],label:"App ID",required:!0,type:"string",placeholder:"your-app-id"},{path:["credentials","appSecret"],label:"App Secret",required:!0,type:"string",placeholder:"your-app-secret"},{path:["enabled"],label:"Enabled",required:!1,type:"boolean"},{path:["allowedIds"],label:"Allowed IDs",required:!1,type:"string[]",placeholder:"user-openid-1"}]}};function Wg(e){const t=e.toLowerCase();return jg[t]??null}function Vg(e,t){let n=e;for(const s of t){if(n==null||typeof n!="object")return;n=n[s]}return n}function Gg(e,t){const s=(e.channels??{})[t],a=e[t];return(s&&typeof s=="object"?s:null)??(a&&typeof a=="object"?a:null)??{}}function Qg(e,t){return e==null?"":t.type==="boolean"?e?"true":"false":t.type==="string[]"?Array.isArray(e)?e.join(", "):typeof e=="string"?e:"":String(e)}function Jg(e,t){if(t.type==="boolean")return e==="true"||e==="1"||e.toLowerCase()==="yes";if(t.type==="number"){const n=parseInt(e,10);return isNaN(n)?void 0:n}return t.type==="string[]"?e.trim()?e.split(/,\s*/).map(n=>n.trim()).filter(Boolean):[]:e}function Yg(e){const t=Wg(e.channelId),n=e.configValue??{},s=Gg(n,e.channelId);return t?r`
    <div class="config-form">
      ${t.fields.map(a=>{const o=Vg(s,a.path),l=Qg(o,a),d=["channels",e.channelId,...a.path];return r`
          <div class="field">
            <span>
              ${a.label}
              ${a.required?r`<span style="color: var(--danger-color);">*</span>`:""}
            </span>
            ${a.type==="boolean"?r`
                  <div class="row" style="align-items: center; gap: 8px;">
                    <input
                      type="checkbox"
                      ?checked=${o===!0}
                      ?disabled=${e.disabled}
                      @change=${u=>e.onPatch(d,u.target.checked)}
                    />
                  </div>
                `:r`
                  <input
                    type="${a.type==="number"?"number":"text"}"
                    .value=${l}
                    placeholder=${a.placeholder??""}
                    ?disabled=${e.disabled}
                    @input=${u=>{const f=u.target.value;e.onPatch(d,Jg(f,a))}}
                  />
                `}
          </div>
        `})}
    </div>
  `:r`
      <div class="callout danger">${i("channelsConfigSchemaUnavailable")}</div>
    `}function Zg(e){const{channelId:t,props:n}=e,s=n.configSaving;return r`
    <div style="margin-top: 16px;">
      ${Yg({channelId:t,configValue:n.configForm,schema:n.configSchema,uiHints:n.configUiHints,disabled:s,onPatch:n.onConfigPatch})}
      <div class="row" style="margin-top: 12px;">
        <button
          class="btn primary"
          ?disabled=${s||!n.configFormDirty}
          @click=${()=>n.onConfigSave()}
        >
          ${n.configSaving?i("commonSaving"):i("commonSave")}
        </button>
        <button
          class="btn"
          ?disabled=${s}
          @click=${()=>n.onConfigReload()}
        >
          ${i("commonReload")}
        </button>
      </div>
    </div>
  `}const Xg={whatsapp:"WhatsApp",telegram:"Telegram",discord:"Discord",googlechat:"Google Chat",slack:"Slack",signal:"Signal",imessage:"iMessage",nostr:"Nostr",dingtalk:"DingTalk",feishu:"Feishu",wework:"WeWork",qq:"QQ"};function em(e){const t=e.selectedChannelId;if(!t)return y;const n=Xg[t.toLowerCase()]??t.charAt(0).toUpperCase()+t.slice(1);return r`
    <div
      class="channel-panel-overlay"
      @click=${s=>{s.target.classList.contains("channel-panel-overlay")&&e.onChannelSelect(null)}}
    >
      <div class="channel-panel card" @click=${s=>s.stopPropagation()}>
        <div class="channel-panel-header row" style="justify-content: space-between; align-items: center;">
          <div class="card-title">${n} ${i("configSettingsTitle")}</div>
          <button class="btn" @click=${()=>e.onChannelSelect(null)}>×</button>
        </div>
        <div class="channel-panel-content">
          ${Zg({channelId:t,props:e})}
        </div>
      </div>
    </div>
  `}function tm(e){const{props:t,discord:n,accountCountLabel:s}=e;return r`
    <div class="card">
      <div class="card-title">${i("channelDiscord")}</div>
      <div class="card-sub">${i("channelDiscordSub")}</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">${i("channelConfigured")}</span>
          <span>${n?.configured?i("commonYes"):i("commonNo")}</span>
        </div>
        <div>
          <span class="label">${i("channelRunning")}</span>
          <span>${n?.running?i("commonYes"):i("commonNo")}</span>
        </div>
        <div>
          <span class="label">${i("channelLastStart")}</span>
          <span>${n?.lastStartAt?te(n.lastStartAt):i("commonNA")}</span>
        </div>
        <div>
          <span class="label">${i("channelLastProbe")}</span>
          <span>${n?.lastProbeAt?te(n.lastProbeAt):i("commonNA")}</span>
        </div>
      </div>

      ${n?.lastError?r`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:y}

      ${n?.probe?r`<div class="callout" style="margin-top: 12px;">
            ${i("channelProbe")} ${n.probe.ok?i("channelProbeOk"):i("channelProbeFailed")} ·
            ${n.probe.status??""} ${n.probe.error??""}
          </div>`:y}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          ${i("channelProbe")}
        </button>
        <button class="btn primary" @click=${()=>t.onChannelSelect("discord")}>
          ${i("channelsConfigure")}
        </button>
      </div>
    </div>
  `}function nm(e){const{props:t,googleChat:n,accountCountLabel:s}=e;return r`
    <div class="card">
      <div class="card-title">${i("channelGoogleChat")}</div>
      <div class="card-sub">${i("channelGoogleChatSub")}</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">${i("channelConfigured")}</span>
          <span>${n?n.configured?i("commonYes"):i("commonNo"):i("commonNA")}</span>
        </div>
        <div>
          <span class="label">${i("channelRunning")}</span>
          <span>${n?n.running?i("commonYes"):i("commonNo"):i("commonNA")}</span>
        </div>
        <div>
          <span class="label">${i("channelCredential")}</span>
          <span>${n?.credentialSource??i("commonNA")}</span>
        </div>
        <div>
          <span class="label">${i("channelAudience")}</span>
          <span>
            ${n?.audienceType?`${n.audienceType}${n.audience?` · ${n.audience}`:""}`:i("commonNA")}
          </span>
        </div>
        <div>
          <span class="label">${i("channelLastStart")}</span>
          <span>${n?.lastStartAt?te(n.lastStartAt):i("commonNA")}</span>
        </div>
        <div>
          <span class="label">${i("channelLastProbe")}</span>
          <span>${n?.lastProbeAt?te(n.lastProbeAt):i("commonNA")}</span>
        </div>
      </div>

      ${n?.lastError?r`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:y}

      ${n?.probe?r`<div class="callout" style="margin-top: 12px;">
            ${i("channelProbe")} ${n.probe.ok?i("channelProbeOk"):i("channelProbeFailed")} ·
            ${n.probe.status??""} ${n.probe.error??""}
          </div>`:y}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          ${i("channelProbe")}
        </button>
        <button class="btn primary" @click=${()=>t.onChannelSelect("googlechat")}>
          ${i("channelsConfigure")}
        </button>
      </div>
    </div>
  `}function sm(e){const{props:t,imessage:n,accountCountLabel:s}=e;return r`
    <div class="card">
      <div class="card-title">${i("channelIMessage")}</div>
      <div class="card-sub">${i("channelIMessageSub")}</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">${i("channelConfigured")}</span>
          <span>${n?.configured?i("commonYes"):i("commonNo")}</span>
        </div>
        <div>
          <span class="label">${i("channelRunning")}</span>
          <span>${n?.running?i("commonYes"):i("commonNo")}</span>
        </div>
        <div>
          <span class="label">${i("channelLastStart")}</span>
          <span>${n?.lastStartAt?te(n.lastStartAt):i("commonNA")}</span>
        </div>
        <div>
          <span class="label">${i("channelLastProbe")}</span>
          <span>${n?.lastProbeAt?te(n.lastProbeAt):i("commonNA")}</span>
        </div>
      </div>

      ${n?.lastError?r`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:y}

      ${n?.probe?r`<div class="callout" style="margin-top: 12px;">
            ${i("channelProbe")} ${n.probe.ok?i("channelProbeOk"):i("channelProbeFailed")} ·
            ${n.probe.error??""}
          </div>`:y}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          ${i("channelProbe")}
        </button>
        <button class="btn primary" @click=${()=>t.onChannelSelect("imessage")}>
          ${i("channelsConfigure")}
        </button>
      </div>
    </div>
  `}function Oi(e){return e?e.length<=20?e:`${e.slice(0,8)}...${e.slice(-8)}`:i("commonNA")}function am(e){const{props:t,nostr:n,nostrAccounts:s,accountCountLabel:a,profileFormState:o,profileFormCallbacks:l,onEditProfile:d}=e,u=s[0],f=n?.configured??u?.configured??!1,g=n?.running??u?.running??!1,m=n?.publicKey??u?.publicKey,v=n?.lastStartAt??u?.lastStartAt??null,k=n?.lastError??u?.lastError??null,c=s.length>1,p=o!=null,h=S=>{const C=S.publicKey,A=S.profile,E=A?.displayName??A?.name??S.name??S.accountId;return r`
      <div class="account-card">
        <div class="account-card-header">
          <div class="account-card-title">${E}</div>
          <div class="account-card-id">${S.accountId}</div>
        </div>
        <div class="status-list account-card-status">
          <div>
            <span class="label">${i("channelRunning")}</span>
            <span>${S.running?i("commonYes"):i("commonNo")}</span>
          </div>
          <div>
            <span class="label">${i("channelConfigured")}</span>
            <span>${S.configured?i("commonYes"):i("commonNo")}</span>
          </div>
          <div>
            <span class="label">${i("channelPublicKey")}</span>
            <span class="monospace" title="${C??""}">${Oi(C)}</span>
          </div>
          <div>
            <span class="label">${i("channelLastInbound")}</span>
            <span>${S.lastInboundAt?te(S.lastInboundAt):i("commonNA")}</span>
          </div>
          ${S.lastError?r`
                <div class="account-card-error">${S.lastError}</div>
              `:y}
        </div>
      </div>
    `},b=()=>{if(p&&l)return Td({state:o,callbacks:l,accountId:s[0]?.accountId??"default"});const S=u?.profile??n?.profile,{name:C,displayName:A,about:E,picture:T,nip05:_}=S??{},N=C||A||E||T||_;return r`
      <div style="margin-top: 16px; padding: 12px; background: var(--bg-secondary); border-radius: 8px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <div style="font-weight: 500;">${i("nostrProfile")}</div>
          ${f?r`
                <button
                  class="btn btn-sm"
                  @click=${d}
                  style="font-size: 12px; padding: 4px 8px;"
                >
                  ${i("nostrEditProfile")}
                </button>
              `:y}
        </div>
        ${N?r`
              <div class="status-list">
                ${T?r`
                      <div style="margin-bottom: 8px;">
                        <img
                          src=${T}
                          alt=${i("nostrProfilePreview")}
                          style="width: 48px; height: 48px; border-radius: 50%; object-fit: cover; border: 2px solid var(--border-color);"
                          @error=${O=>{O.target.style.display="none"}}
                        />
                      </div>
                    `:y}
                ${C?r`<div><span class="label">${i("nostrName")}</span><span>${C}</span></div>`:y}
                ${A?r`<div><span class="label">${i("nostrDisplayName")}</span><span>${A}</span></div>`:y}
                ${E?r`<div><span class="label">${i("nostrAbout")}</span><span style="max-width: 300px; overflow: hidden; text-overflow: ellipsis;">${E}</span></div>`:y}
                ${_?r`<div><span class="label">${i("nostrNip05")}</span><span>${_}</span></div>`:y}
              </div>
            `:r`
                <div style="color: var(--text-muted); font-size: 13px">
                  ${i("nostrNoProfileSet")}
                </div>
              `}
      </div>
    `};return r`
    <div class="card">
      <div class="card-title">${i("channelNostr")}</div>
      <div class="card-sub">${i("channelNostrSub")}</div>
      ${a}

      ${c?r`
            <div class="account-card-list">
              ${s.map(S=>h(S))}
            </div>
          `:r`
            <div class="status-list" style="margin-top: 16px;">
              <div>
                <span class="label">${i("channelConfigured")}</span>
                <span>${i(f?"commonYes":"commonNo")}</span>
              </div>
              <div>
                <span class="label">${i("channelRunning")}</span>
                <span>${i(g?"commonYes":"commonNo")}</span>
              </div>
              <div>
                <span class="label">${i("channelPublicKey")}</span>
                <span class="monospace" title="${m??""}"
                  >${Oi(m)}</span
                >
              </div>
              <div>
                <span class="label">${i("channelLastStart")}</span>
                <span>${v?te(v):i("commonNA")}</span>
              </div>
            </div>
          `}

      ${k?r`<div class="callout danger" style="margin-top: 12px;">${k}</div>`:y}

      ${b()}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!1)}>${i("commonRefresh")}</button>
        <button class="btn primary" @click=${()=>t.onChannelSelect("nostr")}>
          ${i("channelsConfigure")}
        </button>
      </div>
    </div>
  `}function om(e){if(!e&&e!==0)return i("commonNA");const t=Math.round(e/1e3);if(t<60)return`${t}s`;const n=Math.round(t/60);return n<60?`${n}m`:`${Math.round(n/60)}h`}function im(e,t){const n=t.snapshot,s=n?.channels;if(!n||!s)return!1;const a=s[e],o=typeof a?.configured=="boolean"&&a.configured,l=typeof a?.running=="boolean"&&a.running,d=typeof a?.connected=="boolean"&&a.connected,f=(n.channelAccounts?.[e]??[]).some(g=>g.configured||g.running||g.connected);return o||l||d||f}function lm(e,t){return t?.[e]?.length??0}function Jr(e,t){const n=lm(e,t);return n<2?y:r`<div class="account-count">${i("channelAccounts")} (${n})</div>`}function rm(e){const{props:t,signal:n,accountCountLabel:s}=e;return r`
    <div class="card">
      <div class="card-title">${i("channelSignal")}</div>
      <div class="card-sub">${i("channelSignalSub")}</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">${i("channelConfigured")}</span>
          <span>${n?.configured?i("commonYes"):i("commonNo")}</span>
        </div>
        <div>
          <span class="label">${i("channelRunning")}</span>
          <span>${n?.running?i("commonYes"):i("commonNo")}</span>
        </div>
        <div>
          <span class="label">${i("channelBaseUrl")}</span>
          <span>${n?.baseUrl??i("commonNA")}</span>
        </div>
        <div>
          <span class="label">${i("channelLastStart")}</span>
          <span>${n?.lastStartAt?te(n.lastStartAt):i("commonNA")}</span>
        </div>
        <div>
          <span class="label">${i("channelLastProbe")}</span>
          <span>${n?.lastProbeAt?te(n.lastProbeAt):i("commonNA")}</span>
        </div>
      </div>

      ${n?.lastError?r`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:y}

      ${n?.probe?r`<div class="callout" style="margin-top: 12px;">
            ${i("channelProbe")} ${n.probe.ok?i("channelProbeOk"):i("channelProbeFailed")} ·
            ${n.probe.status??""} ${n.probe.error??""}
          </div>`:y}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          ${i("channelProbe")}
        </button>
        <button class="btn primary" @click=${()=>t.onChannelSelect("signal")}>
          ${i("channelsConfigure")}
        </button>
      </div>
    </div>
  `}function cm(e){const{props:t,slack:n,accountCountLabel:s}=e;return r`
    <div class="card">
      <div class="card-title">${i("channelSlack")}</div>
      <div class="card-sub">${i("channelSlackSub")}</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">${i("channelConfigured")}</span>
          <span>${n?.configured?i("commonYes"):i("commonNo")}</span>
        </div>
        <div>
          <span class="label">${i("channelRunning")}</span>
          <span>${n?.running?i("commonYes"):i("commonNo")}</span>
        </div>
        <div>
          <span class="label">${i("channelLastStart")}</span>
          <span>${n?.lastStartAt?te(n.lastStartAt):i("commonNA")}</span>
        </div>
        <div>
          <span class="label">${i("channelLastProbe")}</span>
          <span>${n?.lastProbeAt?te(n.lastProbeAt):i("commonNA")}</span>
        </div>
      </div>

      ${n?.lastError?r`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:y}

      ${n?.probe?r`<div class="callout" style="margin-top: 12px;">
            ${i("channelProbe")} ${n.probe.ok?i("channelProbeOk"):i("channelProbeFailed")} ·
            ${n.probe.status??""} ${n.probe.error??""}
          </div>`:y}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          ${i("channelProbe")}
        </button>
        <button class="btn primary" @click=${()=>t.onChannelSelect("slack")}>
          ${i("channelsConfigure")}
        </button>
      </div>
    </div>
  `}function dm(e){const{props:t,telegram:n,telegramAccounts:s,accountCountLabel:a}=e,o=s.length>1,l=d=>{const f=d.probe?.bot?.username,g=d.name||d.accountId;return r`
      <div class="account-card">
        <div class="account-card-header">
          <div class="account-card-title">
            ${f?`@${f}`:g}
          </div>
          <div class="account-card-id">${d.accountId}</div>
        </div>
        <div class="status-list account-card-status">
          <div>
            <span class="label">${i("channelRunning")}</span>
            <span>${d.running?i("commonYes"):i("commonNo")}</span>
          </div>
          <div>
            <span class="label">${i("channelConfigured")}</span>
            <span>${d.configured?i("commonYes"):i("commonNo")}</span>
          </div>
          <div>
            <span class="label">${i("channelLastInbound")}</span>
            <span>${d.lastInboundAt?te(d.lastInboundAt):i("commonNA")}</span>
          </div>
          ${d.lastError?r`
                <div class="account-card-error">
                  ${d.lastError}
                </div>
              `:y}
        </div>
      </div>
    `};return r`
    <div class="card">
      <div class="card-title">${i("channelTelegram")}</div>
      <div class="card-sub">${i("channelTelegramSub")}</div>
      ${a}

      ${o?r`
            <div class="account-card-list">
              ${s.map(d=>l(d))}
            </div>
          `:r`
            <div class="status-list" style="margin-top: 16px;">
              <div>
                <span class="label">${i("channelConfigured")}</span>
                <span>${n?.configured?i("commonYes"):i("commonNo")}</span>
              </div>
              <div>
                <span class="label">${i("channelRunning")}</span>
                <span>${n?.running?i("commonYes"):i("commonNo")}</span>
              </div>
              <div>
                <span class="label">${i("channelMode")}</span>
                <span>${n?.mode??i("commonNA")}</span>
              </div>
              <div>
                <span class="label">${i("channelLastStart")}</span>
                <span>${n?.lastStartAt?te(n.lastStartAt):i("commonNA")}</span>
              </div>
              <div>
                <span class="label">${i("channelLastProbe")}</span>
                <span>${n?.lastProbeAt?te(n.lastProbeAt):i("commonNA")}</span>
              </div>
            </div>
          `}

      ${n?.lastError?r`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:y}

      ${n?.probe?r`<div class="callout" style="margin-top: 12px;">
            ${i("channelProbe")} ${n.probe.ok?i("channelProbeOk"):i("channelProbeFailed")} ·
            ${n.probe.status??""} ${n.probe.error??""}
          </div>`:y}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          ${i("channelProbe")}
        </button>
        <button class="btn primary" @click=${()=>t.onChannelSelect("telegram")}>
          ${i("channelsConfigure")}
        </button>
      </div>
    </div>
  `}function um(e){const{props:t,whatsapp:n,accountCountLabel:s}=e;return r`
    <div class="card">
      <div class="card-title">${i("channelWhatsApp")}</div>
      <div class="card-sub">${i("channelWhatsAppSub")}</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">${i("channelConfigured")}</span>
          <span>${n?.configured?i("commonYes"):i("commonNo")}</span>
        </div>
        <div>
          <span class="label">${i("channelLinked")}</span>
          <span>${n?.linked?i("commonYes"):i("commonNo")}</span>
        </div>
        <div>
          <span class="label">${i("channelRunning")}</span>
          <span>${n?.running?i("commonYes"):i("commonNo")}</span>
        </div>
        <div>
          <span class="label">${i("channelConnected")}</span>
          <span>${n?.connected?i("commonYes"):i("commonNo")}</span>
        </div>
        <div>
          <span class="label">${i("channelLastConnect")}</span>
          <span>
            ${n?.lastConnectedAt?te(n.lastConnectedAt):i("commonNA")}
          </span>
        </div>
        <div>
          <span class="label">${i("channelLastMessage")}</span>
          <span>
            ${n?.lastMessageAt?te(n.lastMessageAt):i("commonNA")}
          </span>
        </div>
        <div>
          <span class="label">${i("channelAuthAge")}</span>
          <span>
            ${n?.authAgeMs!=null?om(n.authAgeMs):i("commonNA")}
          </span>
        </div>
      </div>

      ${n?.lastError?r`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:y}

      ${t.whatsappMessage?r`<div class="callout" style="margin-top: 12px;">
            ${t.whatsappMessage}
          </div>`:y}

      ${t.whatsappQrDataUrl?r`<div class="qr-wrap">
            <img src=${t.whatsappQrDataUrl} alt="WhatsApp QR" />
          </div>`:y}

      <div class="row" style="margin-top: 14px; flex-wrap: wrap;">
        <button
          class="btn primary"
          ?disabled=${t.whatsappBusy}
          @click=${()=>t.onWhatsAppStart(!1)}
        >
          ${t.whatsappBusy?i("channelWhatsAppWorking"):i("channelShowQr")}
        </button>
        <button
          class="btn"
          ?disabled=${t.whatsappBusy}
          @click=${()=>t.onWhatsAppStart(!0)}
        >
          ${i("channelRelink")}
        </button>
        <button
          class="btn"
          ?disabled=${t.whatsappBusy}
          @click=${()=>t.onWhatsAppWait()}
        >
          ${i("channelWaitForScan")}
        </button>
        <button
          class="btn danger"
          ?disabled=${t.whatsappBusy}
          @click=${()=>t.onWhatsAppLogout()}
        >
          ${i("channelLogout")}
        </button>
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          ${i("commonRefresh")}
        </button>
        <button class="btn primary" @click=${()=>t.onChannelSelect("whatsapp")}>
          ${i("channelsConfigure")}
        </button>
      </div>
    </div>
  `}function pm(e){const t=e.snapshot?.channels,n=t?.whatsapp??void 0,s=t?.telegram??void 0,a=t?.discord??null,o=t?.googlechat??null,l=t?.slack??null,d=t?.signal??null,u=t?.imessage??null,f=t?.nostr??null,m=gm(e.snapshot).map((v,k)=>({key:v,enabled:im(v,e),order:k})).toSorted((v,k)=>v.enabled!==k.enabled?v.enabled?-1:1:v.order-k.order);return r`
    <section class="grid grid-cols-2">
      ${m.map(v=>mm(v.key,e,{whatsapp:n,telegram:s,discord:a,googlechat:o,slack:l,signal:d,imessage:u,nostr:f,channelAccounts:e.snapshot?.channelAccounts??null}))}
    </section>

    ${em(e)}

    <section class="card" style="margin-top: 18px;">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">${i("channelsHealth")}</div>
          <div class="card-sub">${i("channelsHealthSub")}</div>
        </div>
        <div class="muted">${e.lastSuccessAt?te(e.lastSuccessAt):i("commonNA")}</div>
      </div>
      ${e.lastError?r`<div class="callout danger" style="margin-top: 12px;">
            ${e.lastError}
          </div>`:y}
      <pre class="code-block" style="margin-top: 12px;">
${e.snapshot?JSON.stringify(e.snapshot,null,2):i("channelsNoSnapshot")}
      </pre>
    </section>
  `}function gm(e){return e?.channelMeta?.length?e.channelMeta.map(t=>t.id):e?.channelOrder?.length?e.channelOrder:["whatsapp","telegram","discord","googlechat","slack","signal","imessage","nostr"]}function mm(e,t,n){const s=Jr(e,n.channelAccounts);switch(e){case"whatsapp":return um({props:t,whatsapp:n.whatsapp,accountCountLabel:s});case"telegram":return dm({props:t,telegram:n.telegram,telegramAccounts:n.channelAccounts?.telegram??[],accountCountLabel:s});case"discord":return tm({props:t,discord:n.discord,accountCountLabel:s});case"googlechat":return nm({props:t,googleChat:n.googlechat,accountCountLabel:s});case"slack":return cm({props:t,slack:n.slack,accountCountLabel:s});case"signal":return rm({props:t,signal:n.signal,accountCountLabel:s});case"imessage":return sm({props:t,imessage:n.imessage,accountCountLabel:s});case"nostr":{const a=n.channelAccounts?.nostr??[],o=a[0],l=o?.accountId??"default",d=o?.profile??null,u=t.nostrProfileAccountId===l?t.nostrProfileFormState:null,f=u?{onFieldChange:t.onNostrProfileFieldChange,onSave:t.onNostrProfileSave,onImport:t.onNostrProfileImport,onCancel:t.onNostrProfileCancel,onToggleAdvanced:t.onNostrProfileToggleAdvanced}:null;return am({props:t,nostr:n.nostr,nostrAccounts:a,accountCountLabel:s,profileFormState:u,profileFormCallbacks:f,onEditProfile:()=>t.onNostrProfileEdit(l,d)})}default:return fm(e,t,n.channelAccounts??{})}}function fm(e,t,n){const s=vm(t.snapshot,e),a=t.snapshot?.channels?.[e],o=typeof a?.configured=="boolean"?a.configured:void 0,l=typeof a?.running=="boolean"?a.running:void 0,d=typeof a?.connected=="boolean"?a.connected:void 0,u=typeof a?.lastError=="string"?a.lastError:void 0,f=n[e]??[],g=Jr(e,n);return r`
    <div class="card">
      <div class="card-title">${s}</div>
      <div class="card-sub">${i("channelGenericSub")}</div>
      ${g}

      ${f.length>0?r`
            <div class="account-card-list">
              ${f.map(m=>wm(m))}
            </div>
          `:r`
            <div class="status-list" style="margin-top: 16px;">
              <div>
                <span class="label">${i("channelConfigured")}</span>
                <span>${o==null?i("commonNA"):i(o?"commonYes":"commonNo")}</span>
              </div>
              <div>
                <span class="label">${i("channelRunning")}</span>
                <span>${l==null?i("commonNA"):i(l?"commonYes":"commonNo")}</span>
              </div>
              <div>
                <span class="label">${i("channelConnected")}</span>
                <span>${d==null?i("commonNA"):i(d?"commonYes":"commonNo")}</span>
              </div>
            </div>
          `}

      ${u?r`<div class="callout danger" style="margin-top: 12px;">
            ${u}
          </div>`:y}

      <div class="row" style="margin-top: 12px;">
        <button class="btn primary" @click=${()=>t.onChannelSelect(e)}>
          ${i("channelsConfigure")}
        </button>
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          ${i("commonRefresh")}
        </button>
      </div>
    </div>
  `}function hm(e){return e?.channelMeta?.length?Object.fromEntries(e.channelMeta.map(t=>[t.id,t])):{}}function vm(e,t){return hm(e)[t]?.label??e?.channelLabels?.[t]??t}const ym=600*1e3;function Yr(e){return e.lastInboundAt?Date.now()-e.lastInboundAt<ym:!1}function bm(e){return e.running?"commonYes":Yr(e)?"channelActive":"commonNo"}function xm(e){return e.connected===!0?"commonYes":e.connected===!1?"commonNo":Yr(e)?"channelActive":"commonNA"}function wm(e){const t=bm(e),n=xm(e);return r`
    <div class="account-card">
      <div class="account-card-header">
        <div class="account-card-title">${e.name||e.accountId}</div>
        <div class="account-card-id">${e.accountId}</div>
      </div>
      <div class="status-list account-card-status">
        <div>
          <span class="label">${i("channelRunning")}</span>
          <span>${i(t)}</span>
        </div>
        <div>
          <span class="label">${i("channelConfigured")}</span>
          <span>${e.configured?i("commonYes"):i("commonNo")}</span>
        </div>
        <div>
          <span class="label">${i("channelConnected")}</span>
          <span>${i(n)}</span>
        </div>
        <div>
          <span class="label">${i("channelLastInbound")}</span>
          <span>${e.lastInboundAt?te(e.lastInboundAt):i("commonNA")}</span>
        </div>
        ${e.lastError?r`
              <div class="account-card-error">
                ${e.lastError}
              </div>
            `:y}
      </div>
    </div>
  `}const{I:$m}=ud,Fi=e=>e,km=e=>e.strings===void 0,Bi=()=>document.createComment(""),tn=(e,t,n)=>{const s=e._$AA.parentNode,a=t===void 0?e._$AB:t._$AA;if(n===void 0){const o=s.insertBefore(Bi(),a),l=s.insertBefore(Bi(),a);n=new $m(o,l,e,e.options)}else{const o=n._$AB.nextSibling,l=n._$AM,d=l!==e;if(d){let u;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(u=e._$AU)!==l._$AU&&n._$AP(u)}if(o!==a||d){let u=n._$AA;for(;u!==o;){const f=Fi(u).nextSibling;Fi(s).insertBefore(u,a),u=f}}}return n},ut=(e,t,n=e)=>(e._$AI(t,n),e),Sm={},Am=(e,t=Sm)=>e._$AH=t,Cm=e=>e._$AH,Qs=e=>{e._$AR(),e._$AA.remove()};const mo={CHILD:2},fo=e=>(...t)=>({_$litDirective$:e,values:t});class ho{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,s){this._$Ct=t,this._$AM=n,this._$Ci=s}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}}const hn=(e,t)=>{const n=e._$AN;if(n===void 0)return!1;for(const s of n)s._$AO?.(t,!1),hn(s,t);return!0},is=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},Zr=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Tm(t)}};function Mm(e){this._$AN!==void 0?(is(this),this._$AM=e,Zr(this)):this._$AM=e}function Em(e,t=!1,n=0){const s=this._$AH,a=this._$AN;if(a!==void 0&&a.size!==0)if(t)if(Array.isArray(s))for(let o=n;o<s.length;o++)hn(s[o],!1),is(s[o]);else s!=null&&(hn(s,!1),is(s));else hn(this,e)}const Tm=e=>{e.type==mo.CHILD&&(e._$AP??=Em,e._$AQ??=Mm)};class _m extends ho{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,n,s){super._$AT(t,n,s),Zr(this),this.isConnected=t._$AU}_$AO(t,n=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),n&&(hn(this,t),is(this))}setValue(t){if(km(this._$Ct))this._$Ct._$AI(t,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=t,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}}const Js=new WeakMap,Pm=fo(class extends _m{render(e){return y}update(e,[t]){const n=t!==this.G;return n&&this.G!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),y}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let n=Js.get(t);n===void 0&&(n=new WeakMap,Js.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?Js.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});const Hi=(e,t,n)=>{const s=new Map;for(let a=t;a<=n;a++)s.set(e[a],a);return s},Lm=fo(class extends ho{constructor(e){if(super(e),e.type!==mo.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let s;n===void 0?n=t:t!==void 0&&(s=t);const a=[],o=[];let l=0;for(const d of e)a[l]=s?s(d,l):l,o[l]=n(d,l),l++;return{values:o,keys:a}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,s]){const a=Cm(e),{values:o,keys:l}=this.dt(t,n,s);if(!Array.isArray(a))return this.ut=l,o;const d=this.ut??=[],u=[];let f,g,m=0,v=a.length-1,k=0,c=o.length-1;for(;m<=v&&k<=c;)if(a[m]===null)m++;else if(a[v]===null)v--;else if(d[m]===l[k])u[k]=ut(a[m],o[k]),m++,k++;else if(d[v]===l[c])u[c]=ut(a[v],o[c]),v--,c--;else if(d[m]===l[c])u[c]=ut(a[m],o[c]),tn(e,u[c+1],a[m]),m++,c--;else if(d[v]===l[k])u[k]=ut(a[v],o[k]),tn(e,a[m],a[v]),v--,k++;else if(f===void 0&&(f=Hi(l,k,c),g=Hi(d,m,v)),f.has(d[m]))if(f.has(d[v])){const p=g.get(l[k]),h=p!==void 0?a[p]:null;if(h===null){const b=tn(e,a[m]);ut(b,o[k]),u[k]=b}else u[k]=ut(h,o[k]),tn(e,a[m],h),a[p]=null;k++}else Qs(a[v]),v--;else Qs(a[m]),m++;for(;k<=c;){const p=tn(e,u[c+1]);ut(p,o[k]),u[k++]=p}for(;m<=v;){const p=a[m++];p!==null&&Qs(p)}return this.ut=l,Am(e,u),st}});class _a extends ho{constructor(t){if(super(t),this.it=y,t.type!==mo.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===y||t==null)return this._t=void 0,this.it=t;if(t===st)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const n=[t];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}}_a.directiveName="unsafeHTML",_a.resultType=1;const Vt=fo(_a);const{entries:Xr,setPrototypeOf:zi,isFrozen:Im,getPrototypeOf:Dm,getOwnPropertyDescriptor:Rm}=Object;let{freeze:xe,seal:Te,create:Pa}=Object,{apply:La,construct:Ia}=typeof Reflect<"u"&&Reflect;xe||(xe=function(t){return t});Te||(Te=function(t){return t});La||(La=function(t,n){for(var s=arguments.length,a=new Array(s>2?s-2:0),o=2;o<s;o++)a[o-2]=arguments[o];return t.apply(n,a)});Ia||(Ia=function(t){for(var n=arguments.length,s=new Array(n>1?n-1:0),a=1;a<n;a++)s[a-1]=arguments[a];return new t(...s)});const jn=we(Array.prototype.forEach),Nm=we(Array.prototype.lastIndexOf),Ki=we(Array.prototype.pop),nn=we(Array.prototype.push),Um=we(Array.prototype.splice),Xn=we(String.prototype.toLowerCase),Ys=we(String.prototype.toString),Zs=we(String.prototype.match),sn=we(String.prototype.replace),Om=we(String.prototype.indexOf),Fm=we(String.prototype.trim),Le=we(Object.prototype.hasOwnProperty),ye=we(RegExp.prototype.test),an=Bm(TypeError);function we(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var n=arguments.length,s=new Array(n>1?n-1:0),a=1;a<n;a++)s[a-1]=arguments[a];return La(e,t,s)}}function Bm(e){return function(){for(var t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];return Ia(e,n)}}function V(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Xn;zi&&zi(e,null);let s=t.length;for(;s--;){let a=t[s];if(typeof a=="string"){const o=n(a);o!==a&&(Im(t)||(t[s]=o),a=o)}e[a]=!0}return e}function Hm(e){for(let t=0;t<e.length;t++)Le(e,t)||(e[t]=null);return e}function Be(e){const t=Pa(null);for(const[n,s]of Xr(e))Le(e,n)&&(Array.isArray(s)?t[n]=Hm(s):s&&typeof s=="object"&&s.constructor===Object?t[n]=Be(s):t[n]=s);return t}function on(e,t){for(;e!==null;){const s=Rm(e,t);if(s){if(s.get)return we(s.get);if(typeof s.value=="function")return we(s.value)}e=Dm(e)}function n(){return null}return n}const qi=xe(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Xs=xe(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),ea=xe(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),zm=xe(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),ta=xe(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Km=xe(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),ji=xe(["#text"]),Wi=xe(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),na=xe(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Vi=xe(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Wn=xe(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),qm=Te(/\{\{[\w\W]*|[\w\W]*\}\}/gm),jm=Te(/<%[\w\W]*|[\w\W]*%>/gm),Wm=Te(/\$\{[\w\W]*/gm),Vm=Te(/^data-[\-\w.\u00B7-\uFFFF]+$/),Gm=Te(/^aria-[\-\w]+$/),ec=Te(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Qm=Te(/^(?:\w+script|data):/i),Jm=Te(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),tc=Te(/^html$/i),Ym=Te(/^[a-z][.\w]*(-[.\w]+)+$/i);var Gi=Object.freeze({__proto__:null,ARIA_ATTR:Gm,ATTR_WHITESPACE:Jm,CUSTOM_ELEMENT:Ym,DATA_ATTR:Vm,DOCTYPE_NAME:tc,ERB_EXPR:jm,IS_ALLOWED_URI:ec,IS_SCRIPT_OR_DATA:Qm,MUSTACHE_EXPR:qm,TMPLIT_EXPR:Wm});const ln={element:1,text:3,progressingInstruction:7,comment:8,document:9},Zm=function(){return typeof window>"u"?null:window},Xm=function(t,n){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let s=null;const a="data-tt-policy-suffix";n&&n.hasAttribute(a)&&(s=n.getAttribute(a));const o="dompurify"+(s?"#"+s:"");try{return t.createPolicy(o,{createHTML(l){return l},createScriptURL(l){return l}})}catch{return console.warn("TrustedTypes policy "+o+" could not be created."),null}},Qi=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function nc(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Zm();const t=K=>nc(K);if(t.version="3.3.1",t.removed=[],!e||!e.document||e.document.nodeType!==ln.document||!e.Element)return t.isSupported=!1,t;let{document:n}=e;const s=n,a=s.currentScript,{DocumentFragment:o,HTMLTemplateElement:l,Node:d,Element:u,NodeFilter:f,NamedNodeMap:g=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:m,DOMParser:v,trustedTypes:k}=e,c=u.prototype,p=on(c,"cloneNode"),h=on(c,"remove"),b=on(c,"nextSibling"),S=on(c,"childNodes"),C=on(c,"parentNode");if(typeof l=="function"){const K=n.createElement("template");K.content&&K.content.ownerDocument&&(n=K.content.ownerDocument)}let A,E="";const{implementation:T,createNodeIterator:_,createDocumentFragment:N,getElementsByTagName:O}=n,{importNode:Q}=s;let R=Qi();t.isSupported=typeof Xr=="function"&&typeof C=="function"&&T&&T.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:L,ERB_EXPR:he,TMPLIT_EXPR:I,DATA_ATTR:q,ARIA_ATTR:ce,IS_SCRIPT_OR_DATA:de,ATTR_WHITESPACE:ae,CUSTOM_ELEMENT:le}=Gi;let{IS_ALLOWED_URI:D}=Gi,U=null;const F=V({},[...qi,...Xs,...ea,...ta,...ji]);let W=null;const ke=V({},[...Wi,...na,...Vi,...Wn]);let ne=Object.seal(Pa(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Ae=null,oe=null;const ve=Object.seal(Pa(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let ze=!0,Ke=!0,lt=!1,Io=!0,Lt=!1,Dn=!0,rt=!1,Ms=!1,Es=!1,It=!1,Rn=!1,Nn=!1,Do=!0,Ro=!1;const Oc="user-content-";let Ts=!0,Zt=!1,Dt={},Ue=null;const _s=V({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let No=null;const Uo=V({},["audio","video","img","source","image","track"]);let Ps=null;const Oo=V({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Un="http://www.w3.org/1998/Math/MathML",On="http://www.w3.org/2000/svg",qe="http://www.w3.org/1999/xhtml";let Rt=qe,Ls=!1,Is=null;const Fc=V({},[Un,On,qe],Ys);let Fn=V({},["mi","mo","mn","ms","mtext"]),Bn=V({},["annotation-xml"]);const Bc=V({},["title","style","font","a","script"]);let Xt=null;const Hc=["application/xhtml+xml","text/html"],zc="text/html";let re=null,Nt=null;const Kc=n.createElement("form"),Fo=function(M){return M instanceof RegExp||M instanceof Function},Ds=function(){let M=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(Nt&&Nt===M)){if((!M||typeof M!="object")&&(M={}),M=Be(M),Xt=Hc.indexOf(M.PARSER_MEDIA_TYPE)===-1?zc:M.PARSER_MEDIA_TYPE,re=Xt==="application/xhtml+xml"?Ys:Xn,U=Le(M,"ALLOWED_TAGS")?V({},M.ALLOWED_TAGS,re):F,W=Le(M,"ALLOWED_ATTR")?V({},M.ALLOWED_ATTR,re):ke,Is=Le(M,"ALLOWED_NAMESPACES")?V({},M.ALLOWED_NAMESPACES,Ys):Fc,Ps=Le(M,"ADD_URI_SAFE_ATTR")?V(Be(Oo),M.ADD_URI_SAFE_ATTR,re):Oo,No=Le(M,"ADD_DATA_URI_TAGS")?V(Be(Uo),M.ADD_DATA_URI_TAGS,re):Uo,Ue=Le(M,"FORBID_CONTENTS")?V({},M.FORBID_CONTENTS,re):_s,Ae=Le(M,"FORBID_TAGS")?V({},M.FORBID_TAGS,re):Be({}),oe=Le(M,"FORBID_ATTR")?V({},M.FORBID_ATTR,re):Be({}),Dt=Le(M,"USE_PROFILES")?M.USE_PROFILES:!1,ze=M.ALLOW_ARIA_ATTR!==!1,Ke=M.ALLOW_DATA_ATTR!==!1,lt=M.ALLOW_UNKNOWN_PROTOCOLS||!1,Io=M.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Lt=M.SAFE_FOR_TEMPLATES||!1,Dn=M.SAFE_FOR_XML!==!1,rt=M.WHOLE_DOCUMENT||!1,It=M.RETURN_DOM||!1,Rn=M.RETURN_DOM_FRAGMENT||!1,Nn=M.RETURN_TRUSTED_TYPE||!1,Es=M.FORCE_BODY||!1,Do=M.SANITIZE_DOM!==!1,Ro=M.SANITIZE_NAMED_PROPS||!1,Ts=M.KEEP_CONTENT!==!1,Zt=M.IN_PLACE||!1,D=M.ALLOWED_URI_REGEXP||ec,Rt=M.NAMESPACE||qe,Fn=M.MATHML_TEXT_INTEGRATION_POINTS||Fn,Bn=M.HTML_INTEGRATION_POINTS||Bn,ne=M.CUSTOM_ELEMENT_HANDLING||{},M.CUSTOM_ELEMENT_HANDLING&&Fo(M.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(ne.tagNameCheck=M.CUSTOM_ELEMENT_HANDLING.tagNameCheck),M.CUSTOM_ELEMENT_HANDLING&&Fo(M.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(ne.attributeNameCheck=M.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),M.CUSTOM_ELEMENT_HANDLING&&typeof M.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(ne.allowCustomizedBuiltInElements=M.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Lt&&(Ke=!1),Rn&&(It=!0),Dt&&(U=V({},ji),W=[],Dt.html===!0&&(V(U,qi),V(W,Wi)),Dt.svg===!0&&(V(U,Xs),V(W,na),V(W,Wn)),Dt.svgFilters===!0&&(V(U,ea),V(W,na),V(W,Wn)),Dt.mathMl===!0&&(V(U,ta),V(W,Vi),V(W,Wn))),M.ADD_TAGS&&(typeof M.ADD_TAGS=="function"?ve.tagCheck=M.ADD_TAGS:(U===F&&(U=Be(U)),V(U,M.ADD_TAGS,re))),M.ADD_ATTR&&(typeof M.ADD_ATTR=="function"?ve.attributeCheck=M.ADD_ATTR:(W===ke&&(W=Be(W)),V(W,M.ADD_ATTR,re))),M.ADD_URI_SAFE_ATTR&&V(Ps,M.ADD_URI_SAFE_ATTR,re),M.FORBID_CONTENTS&&(Ue===_s&&(Ue=Be(Ue)),V(Ue,M.FORBID_CONTENTS,re)),M.ADD_FORBID_CONTENTS&&(Ue===_s&&(Ue=Be(Ue)),V(Ue,M.ADD_FORBID_CONTENTS,re)),Ts&&(U["#text"]=!0),rt&&V(U,["html","head","body"]),U.table&&(V(U,["tbody"]),delete Ae.tbody),M.TRUSTED_TYPES_POLICY){if(typeof M.TRUSTED_TYPES_POLICY.createHTML!="function")throw an('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof M.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw an('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');A=M.TRUSTED_TYPES_POLICY,E=A.createHTML("")}else A===void 0&&(A=Xm(k,a)),A!==null&&typeof E=="string"&&(E=A.createHTML(""));xe&&xe(M),Nt=M}},Bo=V({},[...Xs,...ea,...zm]),Ho=V({},[...ta,...Km]),qc=function(M){let P=C(M);(!P||!P.tagName)&&(P={namespaceURI:Rt,tagName:"template"});const H=Xn(M.tagName),se=Xn(P.tagName);return Is[M.namespaceURI]?M.namespaceURI===On?P.namespaceURI===qe?H==="svg":P.namespaceURI===Un?H==="svg"&&(se==="annotation-xml"||Fn[se]):!!Bo[H]:M.namespaceURI===Un?P.namespaceURI===qe?H==="math":P.namespaceURI===On?H==="math"&&Bn[se]:!!Ho[H]:M.namespaceURI===qe?P.namespaceURI===On&&!Bn[se]||P.namespaceURI===Un&&!Fn[se]?!1:!Ho[H]&&(Bc[H]||!Bo[H]):!!(Xt==="application/xhtml+xml"&&Is[M.namespaceURI]):!1},Oe=function(M){nn(t.removed,{element:M});try{C(M).removeChild(M)}catch{h(M)}},ct=function(M,P){try{nn(t.removed,{attribute:P.getAttributeNode(M),from:P})}catch{nn(t.removed,{attribute:null,from:P})}if(P.removeAttribute(M),M==="is")if(It||Rn)try{Oe(P)}catch{}else try{P.setAttribute(M,"")}catch{}},zo=function(M){let P=null,H=null;if(Es)M="<remove></remove>"+M;else{const ie=Zs(M,/^[\r\n\t ]+/);H=ie&&ie[0]}Xt==="application/xhtml+xml"&&Rt===qe&&(M='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+M+"</body></html>");const se=A?A.createHTML(M):M;if(Rt===qe)try{P=new v().parseFromString(se,Xt)}catch{}if(!P||!P.documentElement){P=T.createDocument(Rt,"template",null);try{P.documentElement.innerHTML=Ls?E:se}catch{}}const ge=P.body||P.documentElement;return M&&H&&ge.insertBefore(n.createTextNode(H),ge.childNodes[0]||null),Rt===qe?O.call(P,rt?"html":"body")[0]:rt?P.documentElement:ge},Ko=function(M){return _.call(M.ownerDocument||M,M,f.SHOW_ELEMENT|f.SHOW_COMMENT|f.SHOW_TEXT|f.SHOW_PROCESSING_INSTRUCTION|f.SHOW_CDATA_SECTION,null)},Rs=function(M){return M instanceof m&&(typeof M.nodeName!="string"||typeof M.textContent!="string"||typeof M.removeChild!="function"||!(M.attributes instanceof g)||typeof M.removeAttribute!="function"||typeof M.setAttribute!="function"||typeof M.namespaceURI!="string"||typeof M.insertBefore!="function"||typeof M.hasChildNodes!="function")},qo=function(M){return typeof d=="function"&&M instanceof d};function je(K,M,P){jn(K,H=>{H.call(t,M,P,Nt)})}const jo=function(M){let P=null;if(je(R.beforeSanitizeElements,M,null),Rs(M))return Oe(M),!0;const H=re(M.nodeName);if(je(R.uponSanitizeElement,M,{tagName:H,allowedTags:U}),Dn&&M.hasChildNodes()&&!qo(M.firstElementChild)&&ye(/<[/\w!]/g,M.innerHTML)&&ye(/<[/\w!]/g,M.textContent)||M.nodeType===ln.progressingInstruction||Dn&&M.nodeType===ln.comment&&ye(/<[/\w]/g,M.data))return Oe(M),!0;if(!(ve.tagCheck instanceof Function&&ve.tagCheck(H))&&(!U[H]||Ae[H])){if(!Ae[H]&&Vo(H)&&(ne.tagNameCheck instanceof RegExp&&ye(ne.tagNameCheck,H)||ne.tagNameCheck instanceof Function&&ne.tagNameCheck(H)))return!1;if(Ts&&!Ue[H]){const se=C(M)||M.parentNode,ge=S(M)||M.childNodes;if(ge&&se){const ie=ge.length;for(let $e=ie-1;$e>=0;--$e){const We=p(ge[$e],!0);We.__removalCount=(M.__removalCount||0)+1,se.insertBefore(We,b(M))}}}return Oe(M),!0}return M instanceof u&&!qc(M)||(H==="noscript"||H==="noembed"||H==="noframes")&&ye(/<\/no(script|embed|frames)/i,M.innerHTML)?(Oe(M),!0):(Lt&&M.nodeType===ln.text&&(P=M.textContent,jn([L,he,I],se=>{P=sn(P,se," ")}),M.textContent!==P&&(nn(t.removed,{element:M.cloneNode()}),M.textContent=P)),je(R.afterSanitizeElements,M,null),!1)},Wo=function(M,P,H){if(Do&&(P==="id"||P==="name")&&(H in n||H in Kc))return!1;if(!(Ke&&!oe[P]&&ye(q,P))){if(!(ze&&ye(ce,P))){if(!(ve.attributeCheck instanceof Function&&ve.attributeCheck(P,M))){if(!W[P]||oe[P]){if(!(Vo(M)&&(ne.tagNameCheck instanceof RegExp&&ye(ne.tagNameCheck,M)||ne.tagNameCheck instanceof Function&&ne.tagNameCheck(M))&&(ne.attributeNameCheck instanceof RegExp&&ye(ne.attributeNameCheck,P)||ne.attributeNameCheck instanceof Function&&ne.attributeNameCheck(P,M))||P==="is"&&ne.allowCustomizedBuiltInElements&&(ne.tagNameCheck instanceof RegExp&&ye(ne.tagNameCheck,H)||ne.tagNameCheck instanceof Function&&ne.tagNameCheck(H))))return!1}else if(!Ps[P]){if(!ye(D,sn(H,ae,""))){if(!((P==="src"||P==="xlink:href"||P==="href")&&M!=="script"&&Om(H,"data:")===0&&No[M])){if(!(lt&&!ye(de,sn(H,ae,"")))){if(H)return!1}}}}}}}return!0},Vo=function(M){return M!=="annotation-xml"&&Zs(M,le)},Go=function(M){je(R.beforeSanitizeAttributes,M,null);const{attributes:P}=M;if(!P||Rs(M))return;const H={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:W,forceKeepAttr:void 0};let se=P.length;for(;se--;){const ge=P[se],{name:ie,namespaceURI:$e,value:We}=ge,Ut=re(ie),Ns=We;let pe=ie==="value"?Ns:Fm(Ns);if(H.attrName=Ut,H.attrValue=pe,H.keepAttr=!0,H.forceKeepAttr=void 0,je(R.uponSanitizeAttribute,M,H),pe=H.attrValue,Ro&&(Ut==="id"||Ut==="name")&&(ct(ie,M),pe=Oc+pe),Dn&&ye(/((--!?|])>)|<\/(style|title|textarea)/i,pe)){ct(ie,M);continue}if(Ut==="attributename"&&Zs(pe,"href")){ct(ie,M);continue}if(H.forceKeepAttr)continue;if(!H.keepAttr){ct(ie,M);continue}if(!Io&&ye(/\/>/i,pe)){ct(ie,M);continue}Lt&&jn([L,he,I],Jo=>{pe=sn(pe,Jo," ")});const Qo=re(M.nodeName);if(!Wo(Qo,Ut,pe)){ct(ie,M);continue}if(A&&typeof k=="object"&&typeof k.getAttributeType=="function"&&!$e)switch(k.getAttributeType(Qo,Ut)){case"TrustedHTML":{pe=A.createHTML(pe);break}case"TrustedScriptURL":{pe=A.createScriptURL(pe);break}}if(pe!==Ns)try{$e?M.setAttributeNS($e,ie,pe):M.setAttribute(ie,pe),Rs(M)?Oe(M):Ki(t.removed)}catch{ct(ie,M)}}je(R.afterSanitizeAttributes,M,null)},jc=function K(M){let P=null;const H=Ko(M);for(je(R.beforeSanitizeShadowDOM,M,null);P=H.nextNode();)je(R.uponSanitizeShadowNode,P,null),jo(P),Go(P),P.content instanceof o&&K(P.content);je(R.afterSanitizeShadowDOM,M,null)};return t.sanitize=function(K){let M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},P=null,H=null,se=null,ge=null;if(Ls=!K,Ls&&(K="<!-->"),typeof K!="string"&&!qo(K))if(typeof K.toString=="function"){if(K=K.toString(),typeof K!="string")throw an("dirty is not a string, aborting")}else throw an("toString is not a function");if(!t.isSupported)return K;if(Ms||Ds(M),t.removed=[],typeof K=="string"&&(Zt=!1),Zt){if(K.nodeName){const We=re(K.nodeName);if(!U[We]||Ae[We])throw an("root node is forbidden and cannot be sanitized in-place")}}else if(K instanceof d)P=zo("<!---->"),H=P.ownerDocument.importNode(K,!0),H.nodeType===ln.element&&H.nodeName==="BODY"||H.nodeName==="HTML"?P=H:P.appendChild(H);else{if(!It&&!Lt&&!rt&&K.indexOf("<")===-1)return A&&Nn?A.createHTML(K):K;if(P=zo(K),!P)return It?null:Nn?E:""}P&&Es&&Oe(P.firstChild);const ie=Ko(Zt?K:P);for(;se=ie.nextNode();)jo(se),Go(se),se.content instanceof o&&jc(se.content);if(Zt)return K;if(It){if(Rn)for(ge=N.call(P.ownerDocument);P.firstChild;)ge.appendChild(P.firstChild);else ge=P;return(W.shadowroot||W.shadowrootmode)&&(ge=Q.call(s,ge,!0)),ge}let $e=rt?P.outerHTML:P.innerHTML;return rt&&U["!doctype"]&&P.ownerDocument&&P.ownerDocument.doctype&&P.ownerDocument.doctype.name&&ye(tc,P.ownerDocument.doctype.name)&&($e="<!DOCTYPE "+P.ownerDocument.doctype.name+`>
`+$e),Lt&&jn([L,he,I],We=>{$e=sn($e,We," ")}),A&&Nn?A.createHTML($e):$e},t.setConfig=function(){let K=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Ds(K),Ms=!0},t.clearConfig=function(){Nt=null,Ms=!1},t.isValidAttribute=function(K,M,P){Nt||Ds({});const H=re(K),se=re(M);return Wo(H,se,P)},t.addHook=function(K,M){typeof M=="function"&&nn(R[K],M)},t.removeHook=function(K,M){if(M!==void 0){const P=Nm(R[K],M);return P===-1?void 0:Um(R[K],P,1)[0]}return Ki(R[K])},t.removeHooks=function(K){R[K]=[]},t.removeAllHooks=function(){R=Qi()},t}var Da=nc();function vo(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var _t=vo();function sc(e){_t=e}var vn={exec:()=>null};function G(e,t=""){let n=typeof e=="string"?e:e.source,s={replace:(a,o)=>{let l=typeof o=="string"?o:o.source;return l=l.replace(be.caret,"$1"),n=n.replace(a,l),s},getRegex:()=>new RegExp(n,t)};return s}var ef=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),be={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i")},tf=/^(?:[ \t]*(?:\n|$))+/,nf=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,sf=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,In=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,af=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,yo=/(?:[*+-]|\d{1,9}[.)])/,ac=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,oc=G(ac).replace(/bull/g,yo).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),of=G(ac).replace(/bull/g,yo).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),bo=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,lf=/^[^\n]+/,xo=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,rf=G(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",xo).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),cf=G(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,yo).getRegex(),Ss="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",wo=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,df=G("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",wo).replace("tag",Ss).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),ic=G(bo).replace("hr",In).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ss).getRegex(),uf=G(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",ic).getRegex(),$o={blockquote:uf,code:nf,def:rf,fences:sf,heading:af,hr:In,html:df,lheading:oc,list:cf,newline:tf,paragraph:ic,table:vn,text:lf},Ji=G("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",In).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ss).getRegex(),pf={...$o,lheading:of,table:Ji,paragraph:G(bo).replace("hr",In).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Ji).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ss).getRegex()},gf={...$o,html:G(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",wo).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:vn,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:G(bo).replace("hr",In).replace("heading",` *#{1,6} *[^
]`).replace("lheading",oc).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},mf=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,ff=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,lc=/^( {2,}|\\)\n(?!\s*$)/,hf=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,As=/[\p{P}\p{S}]/u,ko=/[\s\p{P}\p{S}]/u,rc=/[^\s\p{P}\p{S}]/u,vf=G(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,ko).getRegex(),cc=/(?!~)[\p{P}\p{S}]/u,yf=/(?!~)[\s\p{P}\p{S}]/u,bf=/(?:[^\s\p{P}\p{S}]|~)/u,xf=G(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",ef?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),dc=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,wf=G(dc,"u").replace(/punct/g,As).getRegex(),$f=G(dc,"u").replace(/punct/g,cc).getRegex(),uc="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",kf=G(uc,"gu").replace(/notPunctSpace/g,rc).replace(/punctSpace/g,ko).replace(/punct/g,As).getRegex(),Sf=G(uc,"gu").replace(/notPunctSpace/g,bf).replace(/punctSpace/g,yf).replace(/punct/g,cc).getRegex(),Af=G("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,rc).replace(/punctSpace/g,ko).replace(/punct/g,As).getRegex(),Cf=G(/\\(punct)/,"gu").replace(/punct/g,As).getRegex(),Mf=G(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Ef=G(wo).replace("(?:-->|$)","-->").getRegex(),Tf=G("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Ef).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),ls=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,_f=G(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",ls).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),pc=G(/^!?\[(label)\]\[(ref)\]/).replace("label",ls).replace("ref",xo).getRegex(),gc=G(/^!?\[(ref)\](?:\[\])?/).replace("ref",xo).getRegex(),Pf=G("reflink|nolink(?!\\()","g").replace("reflink",pc).replace("nolink",gc).getRegex(),Yi=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,So={_backpedal:vn,anyPunctuation:Cf,autolink:Mf,blockSkip:xf,br:lc,code:ff,del:vn,emStrongLDelim:wf,emStrongRDelimAst:kf,emStrongRDelimUnd:Af,escape:mf,link:_f,nolink:gc,punctuation:vf,reflink:pc,reflinkSearch:Pf,tag:Tf,text:hf,url:vn},Lf={...So,link:G(/^!?\[(label)\]\((.*?)\)/).replace("label",ls).getRegex(),reflink:G(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",ls).getRegex()},Ra={...So,emStrongRDelimAst:Sf,emStrongLDelim:$f,url:G(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",Yi).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:G(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",Yi).getRegex()},If={...Ra,br:G(lc).replace("{2,}","*").getRegex(),text:G(Ra.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Vn={normal:$o,gfm:pf,pedantic:gf},rn={normal:So,gfm:Ra,breaks:If,pedantic:Lf},Df={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Zi=e=>Df[e];function Ge(e,t){if(t){if(be.escapeTest.test(e))return e.replace(be.escapeReplace,Zi)}else if(be.escapeTestNoEncode.test(e))return e.replace(be.escapeReplaceNoEncode,Zi);return e}function Xi(e){try{e=encodeURI(e).replace(be.percentDecode,"%")}catch{return null}return e}function el(e,t){let n=e.replace(be.findPipe,(o,l,d)=>{let u=!1,f=l;for(;--f>=0&&d[f]==="\\";)u=!u;return u?"|":" |"}),s=n.split(be.splitPipe),a=0;if(s[0].trim()||s.shift(),s.length>0&&!s.at(-1)?.trim()&&s.pop(),t)if(s.length>t)s.splice(t);else for(;s.length<t;)s.push("");for(;a<s.length;a++)s[a]=s[a].trim().replace(be.slashPipe,"|");return s}function cn(e,t,n){let s=e.length;if(s===0)return"";let a=0;for(;a<s&&e.charAt(s-a-1)===t;)a++;return e.slice(0,s-a)}function Rf(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let s=0;s<e.length;s++)if(e[s]==="\\")s++;else if(e[s]===t[0])n++;else if(e[s]===t[1]&&(n--,n<0))return s;return n>0?-2:-1}function tl(e,t,n,s,a){let o=t.href,l=t.title||null,d=e[1].replace(a.other.outputLinkReplace,"$1");s.state.inLink=!0;let u={type:e[0].charAt(0)==="!"?"image":"link",raw:n,href:o,title:l,text:d,tokens:s.inlineTokens(d)};return s.state.inLink=!1,u}function Nf(e,t,n){let s=e.match(n.other.indentCodeCompensation);if(s===null)return t;let a=s[1];return t.split(`
`).map(o=>{let l=o.match(n.other.beginningSpace);if(l===null)return o;let[d]=l;return d.length>=a.length?o.slice(a.length):o}).join(`
`)}var rs=class{options;rules;lexer;constructor(e){this.options=e||_t}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let n=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:cn(n,`
`)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let n=t[0],s=Nf(n,t[3]||"",this.rules);return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:s}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(this.rules.other.endingHash.test(n)){let s=cn(n,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceChar.test(s))&&(n=s.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:cn(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let n=cn(t[0],`
`).split(`
`),s="",a="",o=[];for(;n.length>0;){let l=!1,d=[],u;for(u=0;u<n.length;u++)if(this.rules.other.blockquoteStart.test(n[u]))d.push(n[u]),l=!0;else if(!l)d.push(n[u]);else break;n=n.slice(u);let f=d.join(`
`),g=f.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${f}`:f,a=a?`${a}
${g}`:g;let m=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(g,o,!0),this.lexer.state.top=m,n.length===0)break;let v=o.at(-1);if(v?.type==="code")break;if(v?.type==="blockquote"){let k=v,c=k.raw+`
`+n.join(`
`),p=this.blockquote(c);o[o.length-1]=p,s=s.substring(0,s.length-k.raw.length)+p.raw,a=a.substring(0,a.length-k.text.length)+p.text;break}else if(v?.type==="list"){let k=v,c=k.raw+`
`+n.join(`
`),p=this.list(c);o[o.length-1]=p,s=s.substring(0,s.length-v.raw.length)+p.raw,a=a.substring(0,a.length-k.raw.length)+p.raw,n=c.substring(o.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:o,text:a}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),s=n.length>1,a={type:"list",raw:"",ordered:s,start:s?+n.slice(0,-1):"",loose:!1,items:[]};n=s?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=s?n:"[*+-]");let o=this.rules.other.listItemRegex(n),l=!1;for(;e;){let u=!1,f="",g="";if(!(t=o.exec(e))||this.rules.block.hr.test(e))break;f=t[0],e=e.substring(f.length);let m=t[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,p=>" ".repeat(3*p.length)),v=e.split(`
`,1)[0],k=!m.trim(),c=0;if(this.options.pedantic?(c=2,g=m.trimStart()):k?c=t[1].length+1:(c=t[2].search(this.rules.other.nonSpaceChar),c=c>4?1:c,g=m.slice(c),c+=t[1].length),k&&this.rules.other.blankLine.test(v)&&(f+=v+`
`,e=e.substring(v.length+1),u=!0),!u){let p=this.rules.other.nextBulletRegex(c),h=this.rules.other.hrRegex(c),b=this.rules.other.fencesBeginRegex(c),S=this.rules.other.headingBeginRegex(c),C=this.rules.other.htmlBeginRegex(c);for(;e;){let A=e.split(`
`,1)[0],E;if(v=A,this.options.pedantic?(v=v.replace(this.rules.other.listReplaceNesting,"  "),E=v):E=v.replace(this.rules.other.tabCharGlobal,"    "),b.test(v)||S.test(v)||C.test(v)||p.test(v)||h.test(v))break;if(E.search(this.rules.other.nonSpaceChar)>=c||!v.trim())g+=`
`+E.slice(c);else{if(k||m.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||b.test(m)||S.test(m)||h.test(m))break;g+=`
`+v}!k&&!v.trim()&&(k=!0),f+=A+`
`,e=e.substring(A.length+1),m=E.slice(c)}}a.loose||(l?a.loose=!0:this.rules.other.doubleBlankLine.test(f)&&(l=!0)),a.items.push({type:"list_item",raw:f,task:!!this.options.gfm&&this.rules.other.listIsTask.test(g),loose:!1,text:g,tokens:[]}),a.raw+=f}let d=a.items.at(-1);if(d)d.raw=d.raw.trimEnd(),d.text=d.text.trimEnd();else return;a.raw=a.raw.trimEnd();for(let u of a.items){if(this.lexer.state.top=!1,u.tokens=this.lexer.blockTokens(u.text,[]),u.task){if(u.text=u.text.replace(this.rules.other.listReplaceTask,""),u.tokens[0]?.type==="text"||u.tokens[0]?.type==="paragraph"){u.tokens[0].raw=u.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),u.tokens[0].text=u.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let g=this.lexer.inlineQueue.length-1;g>=0;g--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[g].src)){this.lexer.inlineQueue[g].src=this.lexer.inlineQueue[g].src.replace(this.rules.other.listReplaceTask,"");break}}let f=this.rules.other.listTaskCheckbox.exec(u.raw);if(f){let g={type:"checkbox",raw:f[0]+" ",checked:f[0]!=="[ ]"};u.checked=g.checked,a.loose?u.tokens[0]&&["paragraph","text"].includes(u.tokens[0].type)&&"tokens"in u.tokens[0]&&u.tokens[0].tokens?(u.tokens[0].raw=g.raw+u.tokens[0].raw,u.tokens[0].text=g.raw+u.tokens[0].text,u.tokens[0].tokens.unshift(g)):u.tokens.unshift({type:"paragraph",raw:g.raw,text:g.raw,tokens:[g]}):u.tokens.unshift(g)}}if(!a.loose){let f=u.tokens.filter(m=>m.type==="space"),g=f.length>0&&f.some(m=>this.rules.other.anyLine.test(m.raw));a.loose=g}}if(a.loose)for(let u of a.items){u.loose=!0;for(let f of u.tokens)f.type==="text"&&(f.type="paragraph")}return a}}html(e){let t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){let t=this.rules.block.def.exec(e);if(t){let n=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),s=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",a=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:s,title:a}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=el(t[1]),s=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),a=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],o={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===s.length){for(let l of s)this.rules.other.tableAlignRight.test(l)?o.align.push("right"):this.rules.other.tableAlignCenter.test(l)?o.align.push("center"):this.rules.other.tableAlignLeft.test(l)?o.align.push("left"):o.align.push(null);for(let l=0;l<n.length;l++)o.header.push({text:n[l],tokens:this.lexer.inline(n[l]),header:!0,align:o.align[l]});for(let l of a)o.rows.push(el(l,o.header.length).map((d,u)=>({text:d,tokens:this.lexer.inline(d),header:!1,align:o.align[u]})));return o}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let n=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;let o=cn(n.slice(0,-1),"\\");if((n.length-o.length)%2===0)return}else{let o=Rf(t[2],"()");if(o===-2)return;if(o>-1){let l=(t[0].indexOf("!")===0?5:4)+t[1].length+o;t[2]=t[2].substring(0,o),t[0]=t[0].substring(0,l).trim(),t[3]=""}}let s=t[2],a="";if(this.options.pedantic){let o=this.rules.other.pedanticHrefTitle.exec(s);o&&(s=o[1],a=o[3])}else a=t[3]?t[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?s=s.slice(1):s=s.slice(1,-1)),tl(t,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:a&&a.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let s=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),a=t[s.toLowerCase()];if(!a){let o=n[0].charAt(0);return{type:"text",raw:o,text:o}}return tl(n,a,n[0],this.lexer,this.rules)}}emStrong(e,t,n=""){let s=this.rules.inline.emStrongLDelim.exec(e);if(!(!s||s[3]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(s[1]||s[2])||!n||this.rules.inline.punctuation.exec(n))){let a=[...s[0]].length-1,o,l,d=a,u=0,f=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(f.lastIndex=0,t=t.slice(-1*e.length+a);(s=f.exec(t))!=null;){if(o=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!o)continue;if(l=[...o].length,s[3]||s[4]){d+=l;continue}else if((s[5]||s[6])&&a%3&&!((a+l)%3)){u+=l;continue}if(d-=l,d>0)continue;l=Math.min(l,l+d+u);let g=[...s[0]][0].length,m=e.slice(0,a+s.index+g+l);if(Math.min(a,l)%2){let k=m.slice(1,-1);return{type:"em",raw:m,text:k,tokens:this.lexer.inlineTokens(k)}}let v=m.slice(2,-2);return{type:"strong",raw:m,text:v,tokens:this.lexer.inlineTokens(v)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(this.rules.other.newLineCharGlobal," "),s=this.rules.other.nonSpaceChar.test(n),a=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return s&&a&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:t[0],text:n}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){let t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let n,s;return t[2]==="@"?(n=t[1],s="mailto:"+n):(n=t[1],s=n),{type:"link",raw:t[0],text:n,href:s,tokens:[{type:"text",raw:n,text:n}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let n,s;if(t[2]==="@")n=t[0],s="mailto:"+n;else{let a;do a=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??"";while(a!==t[0]);n=t[0],t[1]==="www."?s="http://"+t[0]:s=t[0]}return{type:"link",raw:t[0],text:n,href:s,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let n=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:n}}}},De=class Na{tokens;options;state;inlineQueue;tokenizer;constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||_t,this.options.tokenizer=this.options.tokenizer||new rs,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let n={other:be,block:Vn.normal,inline:rn.normal};this.options.pedantic?(n.block=Vn.pedantic,n.inline=rn.pedantic):this.options.gfm&&(n.block=Vn.gfm,this.options.breaks?n.inline=rn.breaks:n.inline=rn.gfm),this.tokenizer.rules=n}static get rules(){return{block:Vn,inline:rn}}static lex(t,n){return new Na(n).lex(t)}static lexInline(t,n){return new Na(n).inlineTokens(t)}lex(t){t=t.replace(be.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){let s=this.inlineQueue[n];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,n=[],s=!1){for(this.options.pedantic&&(t=t.replace(be.tabCharGlobal,"    ").replace(be.spaceLine,""));t;){let a;if(this.options.extensions?.block?.some(l=>(a=l.call({lexer:this},t,n))?(t=t.substring(a.raw.length),n.push(a),!0):!1))continue;if(a=this.tokenizer.space(t)){t=t.substring(a.raw.length);let l=n.at(-1);a.raw.length===1&&l!==void 0?l.raw+=`
`:n.push(a);continue}if(a=this.tokenizer.code(t)){t=t.substring(a.raw.length);let l=n.at(-1);l?.type==="paragraph"||l?.type==="text"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+a.raw,l.text+=`
`+a.text,this.inlineQueue.at(-1).src=l.text):n.push(a);continue}if(a=this.tokenizer.fences(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.heading(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.hr(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.blockquote(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.list(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.html(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.def(t)){t=t.substring(a.raw.length);let l=n.at(-1);l?.type==="paragraph"||l?.type==="text"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+a.raw,l.text+=`
`+a.raw,this.inlineQueue.at(-1).src=l.text):this.tokens.links[a.tag]||(this.tokens.links[a.tag]={href:a.href,title:a.title},n.push(a));continue}if(a=this.tokenizer.table(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.lheading(t)){t=t.substring(a.raw.length),n.push(a);continue}let o=t;if(this.options.extensions?.startBlock){let l=1/0,d=t.slice(1),u;this.options.extensions.startBlock.forEach(f=>{u=f.call({lexer:this},d),typeof u=="number"&&u>=0&&(l=Math.min(l,u))}),l<1/0&&l>=0&&(o=t.substring(0,l+1))}if(this.state.top&&(a=this.tokenizer.paragraph(o))){let l=n.at(-1);s&&l?.type==="paragraph"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+a.raw,l.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=l.text):n.push(a),s=o.length!==t.length,t=t.substring(a.raw.length);continue}if(a=this.tokenizer.text(t)){t=t.substring(a.raw.length);let l=n.at(-1);l?.type==="text"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+a.raw,l.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=l.text):n.push(a);continue}if(t){let l="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return this.state.top=!0,n}inline(t,n=[]){return this.inlineQueue.push({src:t,tokens:n}),n}inlineTokens(t,n=[]){let s=t,a=null;if(this.tokens.links){let u=Object.keys(this.tokens.links);if(u.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)u.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,a.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let o;for(;(a=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)o=a[2]?a[2].length:0,s=s.slice(0,a.index+o)+"["+"a".repeat(a[0].length-o-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);s=this.options.hooks?.emStrongMask?.call({lexer:this},s)??s;let l=!1,d="";for(;t;){l||(d=""),l=!1;let u;if(this.options.extensions?.inline?.some(g=>(u=g.call({lexer:this},t,n))?(t=t.substring(u.raw.length),n.push(u),!0):!1))continue;if(u=this.tokenizer.escape(t)){t=t.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.tag(t)){t=t.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.link(t)){t=t.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(u.raw.length);let g=n.at(-1);u.type==="text"&&g?.type==="text"?(g.raw+=u.raw,g.text+=u.text):n.push(u);continue}if(u=this.tokenizer.emStrong(t,s,d)){t=t.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.codespan(t)){t=t.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.br(t)){t=t.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.del(t)){t=t.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.autolink(t)){t=t.substring(u.raw.length),n.push(u);continue}if(!this.state.inLink&&(u=this.tokenizer.url(t))){t=t.substring(u.raw.length),n.push(u);continue}let f=t;if(this.options.extensions?.startInline){let g=1/0,m=t.slice(1),v;this.options.extensions.startInline.forEach(k=>{v=k.call({lexer:this},m),typeof v=="number"&&v>=0&&(g=Math.min(g,v))}),g<1/0&&g>=0&&(f=t.substring(0,g+1))}if(u=this.tokenizer.inlineText(f)){t=t.substring(u.raw.length),u.raw.slice(-1)!=="_"&&(d=u.raw.slice(-1)),l=!0;let g=n.at(-1);g?.type==="text"?(g.raw+=u.raw,g.text+=u.text):n.push(u);continue}if(t){let g="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(g);break}else throw new Error(g)}}return n}},cs=class{options;parser;constructor(e){this.options=e||_t}space(e){return""}code({text:e,lang:t,escaped:n}){let s=(t||"").match(be.notSpaceStart)?.[0],a=e.replace(be.endingNewline,"")+`
`;return s?'<pre><code class="language-'+Ge(s)+'">'+(n?a:Ge(a,!0))+`</code></pre>
`:"<pre><code>"+(n?a:Ge(a,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return""}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,s="";for(let l=0;l<e.items.length;l++){let d=e.items[l];s+=this.listitem(d)}let a=t?"ol":"ul",o=t&&n!==1?' start="'+n+'"':"";return"<"+a+o+`>
`+s+"</"+a+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",n="";for(let a=0;a<e.header.length;a++)n+=this.tablecell(e.header[a]);t+=this.tablerow({text:n});let s="";for(let a=0;a<e.rows.length;a++){let o=e.rows[a];n="";for(let l=0;l<o.length;l++)n+=this.tablecell(o[l]);s+=this.tablerow({text:n})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+s+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${Ge(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){let s=this.parser.parseInline(n),a=Xi(e);if(a===null)return s;e=a;let o='<a href="'+e+'"';return t&&(o+=' title="'+Ge(t)+'"'),o+=">"+s+"</a>",o}image({href:e,title:t,text:n,tokens:s}){s&&(n=this.parser.parseInline(s,this.parser.textRenderer));let a=Xi(e);if(a===null)return Ge(n);e=a;let o=`<img src="${e}" alt="${n}"`;return t&&(o+=` title="${Ge(t)}"`),o+=">",o}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:Ge(e.text)}},Ao=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}checkbox({raw:e}){return e}},Re=class Ua{options;renderer;textRenderer;constructor(t){this.options=t||_t,this.options.renderer=this.options.renderer||new cs,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Ao}static parse(t,n){return new Ua(n).parse(t)}static parseInline(t,n){return new Ua(n).parseInline(t)}parse(t){let n="";for(let s=0;s<t.length;s++){let a=t[s];if(this.options.extensions?.renderers?.[a.type]){let l=a,d=this.options.extensions.renderers[l.type].call({parser:this},l);if(d!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(l.type)){n+=d||"";continue}}let o=a;switch(o.type){case"space":{n+=this.renderer.space(o);break}case"hr":{n+=this.renderer.hr(o);break}case"heading":{n+=this.renderer.heading(o);break}case"code":{n+=this.renderer.code(o);break}case"table":{n+=this.renderer.table(o);break}case"blockquote":{n+=this.renderer.blockquote(o);break}case"list":{n+=this.renderer.list(o);break}case"checkbox":{n+=this.renderer.checkbox(o);break}case"html":{n+=this.renderer.html(o);break}case"def":{n+=this.renderer.def(o);break}case"paragraph":{n+=this.renderer.paragraph(o);break}case"text":{n+=this.renderer.text(o);break}default:{let l='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return n}parseInline(t,n=this.renderer){let s="";for(let a=0;a<t.length;a++){let o=t[a];if(this.options.extensions?.renderers?.[o.type]){let d=this.options.extensions.renderers[o.type].call({parser:this},o);if(d!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){s+=d||"";continue}}let l=o;switch(l.type){case"escape":{s+=n.text(l);break}case"html":{s+=n.html(l);break}case"link":{s+=n.link(l);break}case"image":{s+=n.image(l);break}case"checkbox":{s+=n.checkbox(l);break}case"strong":{s+=n.strong(l);break}case"em":{s+=n.em(l);break}case"codespan":{s+=n.codespan(l);break}case"br":{s+=n.br(l);break}case"del":{s+=n.del(l);break}case"text":{s+=n.text(l);break}default:{let d='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(d),"";throw new Error(d)}}}return s}},gn=class{options;block;constructor(e){this.options=e||_t}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(){return this.block?De.lex:De.lexInline}provideParser(){return this.block?Re.parse:Re.parseInline}},Uf=class{defaults=vo();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Re;Renderer=cs;TextRenderer=Ao;Lexer=De;Tokenizer=rs;Hooks=gn;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let s of e)switch(n=n.concat(t.call(this,s)),s.type){case"table":{let a=s;for(let o of a.header)n=n.concat(this.walkTokens(o.tokens,t));for(let o of a.rows)for(let l of o)n=n.concat(this.walkTokens(l.tokens,t));break}case"list":{let a=s;n=n.concat(this.walkTokens(a.items,t));break}default:{let a=s;this.defaults.extensions?.childTokens?.[a.type]?this.defaults.extensions.childTokens[a.type].forEach(o=>{let l=a[o].flat(1/0);n=n.concat(this.walkTokens(l,t))}):a.tokens&&(n=n.concat(this.walkTokens(a.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{let s={...n};if(s.async=this.defaults.async||s.async||!1,n.extensions&&(n.extensions.forEach(a=>{if(!a.name)throw new Error("extension name required");if("renderer"in a){let o=t.renderers[a.name];o?t.renderers[a.name]=function(...l){let d=a.renderer.apply(this,l);return d===!1&&(d=o.apply(this,l)),d}:t.renderers[a.name]=a.renderer}if("tokenizer"in a){if(!a.level||a.level!=="block"&&a.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let o=t[a.level];o?o.unshift(a.tokenizer):t[a.level]=[a.tokenizer],a.start&&(a.level==="block"?t.startBlock?t.startBlock.push(a.start):t.startBlock=[a.start]:a.level==="inline"&&(t.startInline?t.startInline.push(a.start):t.startInline=[a.start]))}"childTokens"in a&&a.childTokens&&(t.childTokens[a.name]=a.childTokens)}),s.extensions=t),n.renderer){let a=this.defaults.renderer||new cs(this.defaults);for(let o in n.renderer){if(!(o in a))throw new Error(`renderer '${o}' does not exist`);if(["options","parser"].includes(o))continue;let l=o,d=n.renderer[l],u=a[l];a[l]=(...f)=>{let g=d.apply(a,f);return g===!1&&(g=u.apply(a,f)),g||""}}s.renderer=a}if(n.tokenizer){let a=this.defaults.tokenizer||new rs(this.defaults);for(let o in n.tokenizer){if(!(o in a))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;let l=o,d=n.tokenizer[l],u=a[l];a[l]=(...f)=>{let g=d.apply(a,f);return g===!1&&(g=u.apply(a,f)),g}}s.tokenizer=a}if(n.hooks){let a=this.defaults.hooks||new gn;for(let o in n.hooks){if(!(o in a))throw new Error(`hook '${o}' does not exist`);if(["options","block"].includes(o))continue;let l=o,d=n.hooks[l],u=a[l];gn.passThroughHooks.has(o)?a[l]=f=>{if(this.defaults.async&&gn.passThroughHooksRespectAsync.has(o))return(async()=>{let m=await d.call(a,f);return u.call(a,m)})();let g=d.call(a,f);return u.call(a,g)}:a[l]=(...f)=>{if(this.defaults.async)return(async()=>{let m=await d.apply(a,f);return m===!1&&(m=await u.apply(a,f)),m})();let g=d.apply(a,f);return g===!1&&(g=u.apply(a,f)),g}}s.hooks=a}if(n.walkTokens){let a=this.defaults.walkTokens,o=n.walkTokens;s.walkTokens=function(l){let d=[];return d.push(o.call(this,l)),a&&(d=d.concat(a.call(this,l))),d}}this.defaults={...this.defaults,...s}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return De.lex(e,t??this.defaults)}parser(e,t){return Re.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let s={...n},a={...this.defaults,...s},o=this.onError(!!a.silent,!!a.async);if(this.defaults.async===!0&&s.async===!1)return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof t>"u"||t===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(a.hooks&&(a.hooks.options=a,a.hooks.block=e),a.async)return(async()=>{let l=a.hooks?await a.hooks.preprocess(t):t,d=await(a.hooks?await a.hooks.provideLexer():e?De.lex:De.lexInline)(l,a),u=a.hooks?await a.hooks.processAllTokens(d):d;a.walkTokens&&await Promise.all(this.walkTokens(u,a.walkTokens));let f=await(a.hooks?await a.hooks.provideParser():e?Re.parse:Re.parseInline)(u,a);return a.hooks?await a.hooks.postprocess(f):f})().catch(o);try{a.hooks&&(t=a.hooks.preprocess(t));let l=(a.hooks?a.hooks.provideLexer():e?De.lex:De.lexInline)(t,a);a.hooks&&(l=a.hooks.processAllTokens(l)),a.walkTokens&&this.walkTokens(l,a.walkTokens);let d=(a.hooks?a.hooks.provideParser():e?Re.parse:Re.parseInline)(l,a);return a.hooks&&(d=a.hooks.postprocess(d)),d}catch(l){return o(l)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let s="<p>An error occurred:</p><pre>"+Ge(n.message+"",!0)+"</pre>";return t?Promise.resolve(s):s}if(t)return Promise.reject(n);throw n}}},Tt=new Uf;function Y(e,t){return Tt.parse(e,t)}Y.options=Y.setOptions=function(e){return Tt.setOptions(e),Y.defaults=Tt.defaults,sc(Y.defaults),Y};Y.getDefaults=vo;Y.defaults=_t;Y.use=function(...e){return Tt.use(...e),Y.defaults=Tt.defaults,sc(Y.defaults),Y};Y.walkTokens=function(e,t){return Tt.walkTokens(e,t)};Y.parseInline=Tt.parseInline;Y.Parser=Re;Y.parser=Re.parse;Y.Renderer=cs;Y.TextRenderer=Ao;Y.Lexer=De;Y.lexer=De.lex;Y.Tokenizer=rs;Y.Hooks=gn;Y.parse=Y;Y.options;Y.setOptions;Y.use;Y.walkTokens;Y.parseInline;Re.parse;De.lex;Y.setOptions({gfm:!0,breaks:!0});const nl=["a","b","blockquote","br","code","del","em","h1","h2","h3","h4","hr","i","li","ol","p","pre","strong","table","tbody","td","th","thead","tr","ul"],sl=["class","href","rel","target","title","start"];let al=!1;const Of=14e4,Ff=4e4,Bf=200,sa=5e4,St=new Map;function Hf(e){const t=St.get(e);return t===void 0?null:(St.delete(e),St.set(e,t),t)}function ol(e,t){if(St.set(e,t),St.size<=Bf)return;const n=St.keys().next().value;n&&St.delete(n)}function zf(){al||(al=!0,Da.addHook("afterSanitizeAttributes",e=>{!(e instanceof HTMLAnchorElement)||!e.getAttribute("href")||(e.setAttribute("rel","noreferrer noopener"),e.setAttribute("target","_blank"))}))}function Gt(e){const t=e.trim();if(!t)return"";if(zf(),t.length<=sa){const l=Hf(t);if(l!==null)return l}const n=ar(t,Of),s=n.truncated?`

… truncated (${n.total} chars, showing first ${n.text.length}).`:"";if(n.text.length>Ff){const d=`<pre class="code-block">${Kf(`${n.text}${s}`)}</pre>`,u=Da.sanitize(d,{ALLOWED_TAGS:nl,ALLOWED_ATTR:sl});return t.length<=sa&&ol(t,u),u}const a=Y.parse(`${n.text}${s}`),o=Da.sanitize(a,{ALLOWED_TAGS:nl,ALLOWED_ATTR:sl});return t.length<=sa&&ol(t,o),o}function Kf(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}const qf=1500,jf=2e3,mc="Copy as markdown",Wf="Copied",Vf="Copy failed";async function Gf(e){if(!e)return!1;try{if(navigator.clipboard&&window.isSecureContext)return await navigator.clipboard.writeText(e),!0}catch{}const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.left="-9999px",t.style.top="0",t.setAttribute("readonly",""),document.body.appendChild(t);try{return t.select(),t.setSelectionRange(0,e.length),document.execCommand("copy")}finally{document.body.removeChild(t)}}function Gn(e,t){e.title=t,e.setAttribute("aria-label",t)}function Qf(e){const t=e.label??mc;return r`
    <button
      class="chat-copy-btn"
      type="button"
      title=${t}
      aria-label=${t}
      @click=${async n=>{const s=n.currentTarget;if(!s||s.dataset.copying==="1")return;s.dataset.copying="1",s.setAttribute("aria-busy","true"),s.disabled=!0;const a=await Gf(e.text());if(s.isConnected){if(delete s.dataset.copying,s.removeAttribute("aria-busy"),s.disabled=!1,!a){s.dataset.error="1",Gn(s,Vf),window.setTimeout(()=>{s.isConnected&&(delete s.dataset.error,Gn(s,t))},jf);return}s.dataset.copied="1",Gn(s,Wf),window.setTimeout(()=>{s.isConnected&&(delete s.dataset.copied,Gn(s,t))},qf)}}}
    >
      <span class="chat-copy-btn__icon" aria-hidden="true">
        <span class="chat-copy-btn__icon-copy">${ee.copy}</span>
        <span class="chat-copy-btn__icon-check">${ee.check}</span>
      </span>
    </button>
  `}function Jf(e){return Qf({text:()=>e,label:mc})}function fc(e){const t=e;let n=typeof t.role=="string"?t.role:"unknown";const s=typeof t.toolCallId=="string"||typeof t.tool_call_id=="string",a=t.content,o=Array.isArray(a)?a:null,l=Array.isArray(o)&&o.some(m=>{const v=m,k=(typeof v.type=="string"?v.type:"").toLowerCase();return k==="toolresult"||k==="tool_result"}),d=typeof t.toolName=="string"||typeof t.tool_name=="string";(s||l||d)&&(n="toolResult");let u=[];typeof t.content=="string"?u=[{type:"text",text:t.content}]:Array.isArray(t.content)?u=t.content.map(m=>({type:m.type||"text",text:m.text,name:m.name,args:m.args||m.arguments})):typeof t.text=="string"&&(u=[{type:"text",text:t.text}]);const f=typeof t.timestamp=="number"?t.timestamp:Date.now(),g=typeof t.id=="string"?t.id:void 0;return{role:n,content:u,timestamp:f,id:g}}function Co(e){const t=e.toLowerCase();return e==="user"||e==="User"?e:e==="assistant"?"assistant":e==="system"?"system":t==="toolresult"||t==="tool_result"||t==="tool"||t==="function"?"tool":e}function hc(e){const t=e,n=typeof t.role=="string"?t.role.toLowerCase():"";return n==="toolresult"||n==="tool_result"}const Yf={icon:"puzzle",detailKeys:["command","path","url","targetUrl","targetId","ref","element","node","nodeId","id","requestId","to","channelId","guildId","userId","name","query","pattern","messageId"]},Zf={bash:{icon:"wrench",title:"Bash",detailKeys:["command"]},process:{icon:"wrench",title:"Process",detailKeys:["sessionId"]},read:{icon:"fileText",title:"Read",detailKeys:["path"]},write:{icon:"edit",title:"Write",detailKeys:["path"]},edit:{icon:"penLine",title:"Edit",detailKeys:["path"]},attach:{icon:"paperclip",title:"Attach",detailKeys:["path","url","fileName"]},browser:{icon:"globe",title:"Browser",actions:{status:{label:"status"},start:{label:"start"},stop:{label:"stop"},tabs:{label:"tabs"},open:{label:"open",detailKeys:["targetUrl"]},focus:{label:"focus",detailKeys:["targetId"]},close:{label:"close",detailKeys:["targetId"]},snapshot:{label:"snapshot",detailKeys:["targetUrl","targetId","ref","element","format"]},screenshot:{label:"screenshot",detailKeys:["targetUrl","targetId","ref","element"]},navigate:{label:"navigate",detailKeys:["targetUrl","targetId"]},console:{label:"console",detailKeys:["level","targetId"]},pdf:{label:"pdf",detailKeys:["targetId"]},upload:{label:"upload",detailKeys:["paths","ref","inputRef","element","targetId"]},dialog:{label:"dialog",detailKeys:["accept","promptText","targetId"]},act:{label:"act",detailKeys:["request.kind","request.ref","request.selector","request.text","request.value"]}}},canvas:{icon:"image",title:"Canvas",actions:{present:{label:"present",detailKeys:["target","node","nodeId"]},hide:{label:"hide",detailKeys:["node","nodeId"]},navigate:{label:"navigate",detailKeys:["url","node","nodeId"]},eval:{label:"eval",detailKeys:["javaScript","node","nodeId"]},snapshot:{label:"snapshot",detailKeys:["format","node","nodeId"]},a2ui_push:{label:"A2UI push",detailKeys:["jsonlPath","node","nodeId"]},a2ui_reset:{label:"A2UI reset",detailKeys:["node","nodeId"]}}},nodes:{icon:"smartphone",title:"Nodes",actions:{status:{label:"status"},describe:{label:"describe",detailKeys:["node","nodeId"]},pending:{label:"pending"},approve:{label:"approve",detailKeys:["requestId"]},reject:{label:"reject",detailKeys:["requestId"]},notify:{label:"notify",detailKeys:["node","nodeId","title","body"]},camera_snap:{label:"camera snap",detailKeys:["node","nodeId","facing","deviceId"]},camera_list:{label:"camera list",detailKeys:["node","nodeId"]},camera_clip:{label:"camera clip",detailKeys:["node","nodeId","facing","duration","durationMs"]},screen_record:{label:"screen record",detailKeys:["node","nodeId","duration","durationMs","fps","screenIndex"]}}},cron:{icon:"loader",title:"Cron",actions:{status:{label:"status"},list:{label:"list"},add:{label:"add",detailKeys:["job.name","job.id","job.schedule","job.cron"]},update:{label:"update",detailKeys:["id"]},remove:{label:"remove",detailKeys:["id"]},run:{label:"run",detailKeys:["id"]},runs:{label:"runs",detailKeys:["id"]},wake:{label:"wake",detailKeys:["text","mode"]}}},gateway:{icon:"plug",title:"Gateway",actions:{restart:{label:"restart",detailKeys:["reason","delayMs"]},"config.get":{label:"config get"},"config.schema":{label:"config schema"},"config.apply":{label:"config apply",detailKeys:["restartDelayMs"]},"update.run":{label:"update run",detailKeys:["restartDelayMs"]}}},whatsapp_login:{icon:"circle",title:"WhatsApp Login",actions:{start:{label:"start"},wait:{label:"wait"}}},discord:{icon:"messageSquare",title:"Discord",actions:{react:{label:"react",detailKeys:["channelId","messageId","emoji"]},reactions:{label:"reactions",detailKeys:["channelId","messageId"]},sticker:{label:"sticker",detailKeys:["to","stickerIds"]},poll:{label:"poll",detailKeys:["question","to"]},permissions:{label:"permissions",detailKeys:["channelId"]},readMessages:{label:"read messages",detailKeys:["channelId","limit"]},sendMessage:{label:"send",detailKeys:["to","content"]},editMessage:{label:"edit",detailKeys:["channelId","messageId"]},deleteMessage:{label:"delete",detailKeys:["channelId","messageId"]},threadCreate:{label:"thread create",detailKeys:["channelId","name"]},threadList:{label:"thread list",detailKeys:["guildId","channelId"]},threadReply:{label:"thread reply",detailKeys:["channelId","content"]},pinMessage:{label:"pin",detailKeys:["channelId","messageId"]},unpinMessage:{label:"unpin",detailKeys:["channelId","messageId"]},listPins:{label:"list pins",detailKeys:["channelId"]},searchMessages:{label:"search",detailKeys:["guildId","content"]},memberInfo:{label:"member",detailKeys:["guildId","userId"]},roleInfo:{label:"roles",detailKeys:["guildId"]},emojiList:{label:"emoji list",detailKeys:["guildId"]},roleAdd:{label:"role add",detailKeys:["guildId","userId","roleId"]},roleRemove:{label:"role remove",detailKeys:["guildId","userId","roleId"]},channelInfo:{label:"channel",detailKeys:["channelId"]},channelList:{label:"channels",detailKeys:["guildId"]},voiceStatus:{label:"voice",detailKeys:["guildId","userId"]},eventList:{label:"events",detailKeys:["guildId"]},eventCreate:{label:"event create",detailKeys:["guildId","name"]},timeout:{label:"timeout",detailKeys:["guildId","userId"]},kick:{label:"kick",detailKeys:["guildId","userId"]},ban:{label:"ban",detailKeys:["guildId","userId"]}}},slack:{icon:"messageSquare",title:"Slack",actions:{react:{label:"react",detailKeys:["channelId","messageId","emoji"]},reactions:{label:"reactions",detailKeys:["channelId","messageId"]},sendMessage:{label:"send",detailKeys:["to","content"]},editMessage:{label:"edit",detailKeys:["channelId","messageId"]},deleteMessage:{label:"delete",detailKeys:["channelId","messageId"]},readMessages:{label:"read messages",detailKeys:["channelId","limit"]},pinMessage:{label:"pin",detailKeys:["channelId","messageId"]},unpinMessage:{label:"unpin",detailKeys:["channelId","messageId"]},listPins:{label:"list pins",detailKeys:["channelId"]},memberInfo:{label:"member",detailKeys:["userId"]},emojiList:{label:"emoji list"}}}},Xf={fallback:Yf,tools:Zf},vc=Xf,il=vc.fallback??{icon:"puzzle"},eh=vc.tools??{};function th(e){return(e??"tool").trim()}function nh(e){const t=e.replace(/_/g," ").trim();return t?t.split(/\s+/).map(n=>n.length<=2&&n.toUpperCase()===n?n:`${n.at(0)?.toUpperCase()??""}${n.slice(1)}`).join(" "):"Tool"}function sh(e){const t=e?.trim();if(t)return t.replace(/_/g," ")}function yc(e){if(e!=null){if(typeof e=="string"){const t=e.trim();if(!t)return;const n=t.split(/\r?\n/)[0]?.trim()??"";return n?n.length>160?`${n.slice(0,157)}…`:n:void 0}if(typeof e=="number"||typeof e=="boolean")return String(e);if(Array.isArray(e)){const t=e.map(s=>yc(s)).filter(s=>!!s);if(t.length===0)return;const n=t.slice(0,3).join(", ");return t.length>3?`${n}…`:n}}}function ah(e,t){if(!e||typeof e!="object")return;let n=e;for(const s of t.split(".")){if(!s||!n||typeof n!="object")return;n=n[s]}return n}function oh(e,t){for(const n of t){const s=ah(e,n),a=yc(s);if(a)return a}}function ih(e){if(!e||typeof e!="object")return;const t=e,n=typeof t.path=="string"?t.path:void 0;if(!n)return;const s=typeof t.offset=="number"?t.offset:void 0,a=typeof t.limit=="number"?t.limit:void 0;return s!==void 0&&a!==void 0?`${n}:${s}-${s+a}`:n}function lh(e){if(!e||typeof e!="object")return;const t=e;return typeof t.path=="string"?t.path:void 0}function rh(e,t){if(!(!e||!t))return e.actions?.[t]??void 0}function ch(e){const t=th(e.name),n=t.toLowerCase(),s=eh[n],a=s?.icon??il.icon??"puzzle",o=s?.title??nh(t),l=s?.label??t,d=e.args&&typeof e.args=="object"?e.args.action:void 0,u=typeof d=="string"?d.trim():void 0,f=rh(s,u),g=sh(f?.label??u);let m;n==="read"&&(m=ih(e.args)),!m&&(n==="write"||n==="edit"||n==="attach")&&(m=lh(e.args));const v=f?.detailKeys??s?.detailKeys??il.detailKeys??[];return!m&&v.length>0&&(m=oh(e.args,v)),!m&&e.meta&&(m=e.meta),m&&(m=uh(m)),{name:t,icon:a,title:o,label:l,verb:g,detail:m}}function dh(e){const t=[];if(e.verb&&t.push(e.verb),e.detail&&t.push(e.detail),t.length!==0)return t.join(" · ")}function uh(e){return e&&e.replace(/\/Users\/[^/]+/g,"~").replace(/\/home\/[^/]+/g,"~")}const ph=80,gh=2,ll=100;function mh(e){const t=e.trim();if(t.startsWith("{")||t.startsWith("["))try{const n=JSON.parse(t);return"```json\n"+JSON.stringify(n,null,2)+"\n```"}catch{}return e}function fh(e){const t=e.split(`
`),n=t.slice(0,gh),s=n.join(`
`);return s.length>ll?s.slice(0,ll)+"…":n.length<t.length?s+"…":s}function hh(e){const t=e,n=vh(t.content),s=[];for(const a of n){const o=(typeof a.type=="string"?a.type:"").toLowerCase();(["toolcall","tool_call","tooluse","tool_use"].includes(o)||typeof a.name=="string"&&a.arguments!=null)&&s.push({kind:"call",name:a.name??"tool",args:yh(a.arguments??a.args)})}for(const a of n){const o=(typeof a.type=="string"?a.type:"").toLowerCase();if(o!=="toolresult"&&o!=="tool_result")continue;const l=bh(a),d=typeof a.name=="string"?a.name:"tool";s.push({kind:"result",name:d,text:l})}if(hc(e)&&!s.some(a=>a.kind==="result")){const a=typeof t.toolName=="string"&&t.toolName||typeof t.tool_name=="string"&&t.tool_name||"tool",o=Nr(e)??void 0;s.push({kind:"result",name:a,text:o})}return s}function rl(e,t){const n=ch({name:e.name,args:e.args}),s=dh(n),a=!!e.text?.trim(),o=!!t,l=o?()=>{if(a){t(mh(e.text));return}const m=`## ${n.label}

${s?`**Command:** \`${s}\`

`:""}*No output — tool completed successfully.*`;t(m)}:void 0,d=a&&(e.text?.length??0)<=ph,u=a&&!d,f=a&&d,g=!a;return r`
    <div
      class="chat-tool-card ${o?"chat-tool-card--clickable":""}"
      @click=${l}
      role=${o?"button":y}
      tabindex=${o?"0":y}
      @keydown=${o?m=>{m.key!=="Enter"&&m.key!==" "||(m.preventDefault(),l?.())}:y}
    >
      <div class="chat-tool-card__header">
        <div class="chat-tool-card__title">
          <span class="chat-tool-card__icon">${ee[n.icon]}</span>
          <span>${n.label}</span>
        </div>
        ${o?r`<span class="chat-tool-card__action">${a?"View":""} ${ee.check}</span>`:y}
        ${g&&!o?r`<span class="chat-tool-card__status">${ee.check}</span>`:y}
      </div>
      ${s?r`<div class="chat-tool-card__detail">${s}</div>`:y}
      ${g?r`
              <div class="chat-tool-card__status-text muted">Completed</div>
            `:y}
      ${u?r`<div class="chat-tool-card__preview mono">${fh(e.text)}</div>`:y}
      ${f?r`<div class="chat-tool-card__inline mono">${e.text}</div>`:y}
    </div>
  `}function vh(e){return Array.isArray(e)?e.filter(Boolean):[]}function yh(e){if(typeof e!="string")return e;const t=e.trim();if(!t||!t.startsWith("{")&&!t.startsWith("["))return e;try{return JSON.parse(t)}catch{return e}}function bh(e){if(typeof e.text=="string")return e.text;if(typeof e.content=="string")return e.content}function bc(e){const t=e,n=[t.durationMs,t.elapsedMs,t.latencyMs,t.thinkingMs,t.metrics?.durationMs];for(const s of n){if(typeof s=="number"&&Number.isFinite(s)&&s>0)return s;if(typeof s=="string"){const a=Number(s);if(Number.isFinite(a)&&a>0)return a}}return null}function xc(e){if(!Number.isFinite(e)||e<=0)return"";if(e<1e3)return`${Math.round(e)}ms`;if(e<6e4)return`${(e/1e3).toFixed(e<1e4?1:0)}s`;const t=Math.floor(e/6e4),n=Math.round(e%6e4/1e3);return`${t}m${n.toString().padStart(2,"0")}s`}function xh(e){const n=e.content,s=[];if(Array.isArray(n))for(const a of n){if(typeof a!="object"||a===null)continue;const o=a;if(o.type==="image"){const l=o.source;if(l?.type==="base64"&&typeof l.data=="string"){const d=l.data,u=l.media_type||"image/png",f=d.startsWith("data:")?d:`data:${u};base64,${d}`;s.push({url:f})}else typeof o.url=="string"&&s.push({url:o.url})}else if(o.type==="image_url"){const l=o.image_url;typeof l?.url=="string"&&s.push({url:l.url})}}return s}function wh(e){return r`
    <div class="chat-group assistant">
      ${Mo("assistant",e)}
      <div class="chat-group-messages">
        <div class="chat-bubble chat-reading-indicator" aria-hidden="true">
          <span class="chat-reading-indicator__dots">
            <span></span><span></span><span></span>
          </span>
        </div>
      </div>
    </div>
  `}function $h(e,t,n,s){const a=new Date(t).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}),o=s?.name??"Assistant";return r`
    <div class="chat-group assistant">
      ${Mo("assistant",s)}
      <div class="chat-group-messages">
        ${wc({role:"assistant",content:[{type:"text",text:e}],timestamp:t},{isStreaming:!0,showReasoning:!1},n)}
        <div class="chat-group-footer">
          <span class="chat-sender-name">${o}</span>
          <span class="chat-group-timestamp">${a}</span>
        </div>
      </div>
    </div>
  `}function kh(e,t){const n=Co(e.role),s=t.assistantName??"Assistant",a=n==="user"?"You":n==="assistant"?s:n,o=n==="user"?"user":n==="assistant"?"assistant":"other",l=new Date(e.timestamp).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}),d=n==="assistant"?bc(e.messages[e.messages.length-1]?.message):null,u=d?xc(d):"";return r`
    <div class="chat-group ${o}">
      ${Mo(e.role,{name:s,avatar:t.assistantAvatar??null})}
      <div class="chat-group-messages">
        ${e.messages.map((f,g)=>wc(f.message,{isStreaming:e.isStreaming&&g===e.messages.length-1,showReasoning:t.showReasoning},t.onOpenSidebar))}
        <div class="chat-group-footer">
          <span class="chat-sender-name">${a}</span>
          <span class="chat-group-timestamp">${l}</span>
          ${u?r`<span class="chat-group-duration muted">思考 ${u}</span>`:y}
        </div>
      </div>
    </div>
  `}function Mo(e,t){const n=Co(e),s=t?.name?.trim()||"Assistant",a=t?.avatar?.trim()||"",o=n==="user"?"U":n==="assistant"?s.charAt(0).toUpperCase()||"A":n==="tool"?"⚙":"?",l=n==="user"?"user":n==="assistant"?"assistant":n==="tool"?"tool":"other";return a&&n==="assistant"?Sh(a)?r`<img
        class="chat-avatar ${l}"
        src="${a}"
        alt="${s}"
      />`:r`<div class="chat-avatar ${l}">${a}</div>`:r`<div class="chat-avatar ${l}">${o}</div>`}function Sh(e){return/^https?:\/\//i.test(e)||/^data:image\//i.test(e)||e.startsWith("/")}function Ah(e){return e.length===0?y:r`
    <div class="chat-message-images">
      ${e.map(t=>r`
          <img
            src=${t.url}
            alt=${t.alt??"Attached image"}
            class="chat-message-image"
            @click=${()=>window.open(t.url,"_blank")}
          />
        `)}
    </div>
  `}function wc(e,t,n){const s=e,a=typeof s.role=="string"?s.role:"unknown",o=hc(e)||a.toLowerCase()==="toolresult"||a.toLowerCase()==="tool_result"||typeof s.toolCallId=="string"||typeof s.tool_call_id=="string",l=hh(e),d=l.length>0,u=xh(e),f=u.length>0,g=Nr(e),m=t.showReasoning&&a==="assistant"?Yp(e):null,v=g?.trim()?g:null,k=m?Xp(m):null,c=a==="assistant"?bc(e):null,p=c?xc(c):"",h=v,b=a==="assistant"&&!!h?.trim(),S=["chat-bubble",b?"has-copy":"",t.isStreaming?"streaming":"","fade-in"].filter(Boolean).join(" ");return!h&&d&&o?r`${l.map(C=>rl(C,n))}`:!h&&!d&&!f?y:r`
    <div class="${S}">
      ${b?Jf(h):y}
      ${Ah(u)}
      ${k?r`
              <details class="chat-thinking">
                <summary class="chat-thinking__summary">
                  思考过程${p?r`<span class="muted"> · ${p}</span>`:y}
                </summary>
                <div class="chat-thinking__content">
                  ${Vt(Gt(k))}
                </div>
              </details>
            `:y}
      ${h?r`<div class="chat-text">${Vt(Gt(h))}</div>`:y}
      ${l.map(C=>rl(C,n))}
    </div>
  `}function Ch(e){return r`
    <div class="sidebar-panel">
      <div class="sidebar-header">
        <div class="sidebar-title">Tool Output</div>
        <button @click=${e.onClose} class="btn" title="Close sidebar">
          ${ee.x}
        </button>
      </div>
      <div class="sidebar-content">
        ${e.error?r`
              <div class="callout danger">${e.error}</div>
              <button @click=${e.onViewRawText} class="btn" style="margin-top: 12px;">
                View Raw Text
              </button>
            `:e.content?r`<div class="sidebar-markdown">${Vt(Gt(e.content))}</div>`:r`
                  <div class="muted">No content available</div>
                `}
      </div>
    </div>
  `}var Mh=Object.defineProperty,Eh=Object.getOwnPropertyDescriptor,Cs=(e,t,n,s)=>{for(var a=s>1?void 0:s?Eh(t,n):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(a=(s?l(t,n,a):l(a))||a);return s&&a&&Mh(t,n,a),a};let Qt=class extends qt{constructor(){super(...arguments),this.splitRatio=.6,this.minRatio=.4,this.maxRatio=.7,this.isDragging=!1,this.startX=0,this.startRatio=0,this.handleMouseDown=e=>{this.isDragging=!0,this.startX=e.clientX,this.startRatio=this.splitRatio,this.classList.add("dragging"),document.addEventListener("mousemove",this.handleMouseMove),document.addEventListener("mouseup",this.handleMouseUp),e.preventDefault()},this.handleMouseMove=e=>{if(!this.isDragging)return;const t=this.parentElement;if(!t)return;const n=t.getBoundingClientRect().width,a=(e.clientX-this.startX)/n;let o=this.startRatio+a;o=Math.max(this.minRatio,Math.min(this.maxRatio,o)),this.dispatchEvent(new CustomEvent("resize",{detail:{splitRatio:o},bubbles:!0,composed:!0}))},this.handleMouseUp=()=>{this.isDragging=!1,this.classList.remove("dragging"),document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp)}}render(){return y}connectedCallback(){super.connectedCallback(),this.addEventListener("mousedown",this.handleMouseDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mousedown",this.handleMouseDown),document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp)}};Qt.styles=Vc`
    :host {
      width: 4px;
      cursor: col-resize;
      background: var(--border, #333);
      transition: background 150ms ease-out;
      flex-shrink: 0;
      position: relative;
    }
    :host::before {
      content: "";
      position: absolute;
      top: 0;
      left: -4px;
      right: -4px;
      bottom: 0;
    }
    :host(:hover) {
      background: var(--accent, #007bff);
    }
    :host(.dragging) {
      background: var(--accent, #007bff);
    }
  `;Cs([fs({type:Number})],Qt.prototype,"splitRatio",2);Cs([fs({type:Number})],Qt.prototype,"minRatio",2);Cs([fs({type:Number})],Qt.prototype,"maxRatio",2);Qt=Cs([Jl("resizable-divider")],Qt);const Th=5e3;function _h(e){if(e==null||!Number.isFinite(e))return"-";if(e<1024)return`${e} B`;const t=["KB","MB","GB","TB"];let n=e/1024,s=0;for(;n>=1024&&s<t.length-1;)n/=1024,s+=1;return`${n.toFixed(n<10?1:0)} ${t[s]}`}function cl(e){e.style.height="auto",e.style.height=`${e.scrollHeight}px`}function Ph(e){return e?e.active?r`
      <div class="callout info compaction-indicator compaction-indicator--active">
        ${ee.loader} Compacting context...
      </div>
    `:e.completedAt&&Date.now()-e.completedAt<Th?r`
        <div class="callout success compaction-indicator compaction-indicator--complete">
          ${ee.check} Context compacted
        </div>
      `:y:y}function $c(){return`att-${Date.now()}-${Math.random().toString(36).slice(2,9)}`}function kc(e){return e.startsWith("image/")?"image":"file"}function Lh(e,t){const n=e.target,s=n?.files?Array.from(n.files):[];if(!s.length||!t.onAttachmentsChange)return;const a=t.attachments??[],o=l=>new Promise(d=>{const u=new FileReader;u.addEventListener("load",()=>{const f=u.result;d({id:$c(),dataUrl:f,mimeType:l.type||"application/octet-stream",filename:l.name,sizeBytes:l.size,kind:kc(l.type||"")})}),u.readAsDataURL(l)});Promise.all(s.map(o)).then(l=>{t.onAttachmentsChange?.([...a,...l])}),n&&(n.value="")}function Ih(e,t){const n=e.clipboardData?.items;if(!n||!t.onAttachmentsChange)return;const s=[];for(let a=0;a<n.length;a++){const o=n[a];o.type.startsWith("image/")&&s.push(o)}if(s.length!==0){e.preventDefault();for(const a of s){const o=a.getAsFile();if(!o)continue;const l=new FileReader;l.addEventListener("load",()=>{const d=l.result,u={id:$c(),dataUrl:d,mimeType:o.type,filename:o.name,sizeBytes:o.size,kind:"image"},f=t.attachments??[];t.onAttachmentsChange?.([...f,u])}),l.readAsDataURL(o)}}}function Dh(e){const t=e.attachments??[];return t.length===0?y:r`
    <div class="chat-attachments">
      ${t.map(n=>r`
          <div class="chat-attachment">
            ${(n.kind??kc(n.mimeType))==="image"?r`
                    <img
                      src=${n.dataUrl}
                      alt=${n.filename||"Attachment preview"}
                      class="chat-attachment__img"
                    />
                  `:r`
                    <div class="chat-attachment__file">
                      <div class="mono">${n.filename||"file"}</div>
                      <div class="muted" style="font-size: 12px;">
                        ${n.mimeType}${n.sizeBytes?` · ${_h(n.sizeBytes)}`:""}
                      </div>
                    </div>
                  `}
            <button
              class="chat-attachment__remove"
              type="button"
              aria-label="Remove attachment"
              @click=${()=>{const s=(e.attachments??[]).filter(a=>a.id!==n.id);e.onAttachmentsChange?.(s)}}
            >
              ${ee.x}
            </button>
          </div>
        `)}
    </div>
  `}function Rh(e){const t=e.connected,n=e.sending||e.stream!==null,s=!!(e.canAbort&&e.onAbort),o=e.sessions?.sessions?.find(p=>p.key===e.sessionKey)?.reasoningLevel??"off",l=e.showThinking&&o!=="off",d={name:e.assistantName,avatar:e.assistantAvatar??e.assistantAvatarUrl??null},u=(e.attachments?.length??0)>0,f=e.connected?u?"添加消息（也可继续粘贴图片）…":"输入消息（回车发送，Shift+回车换行，可粘贴图片）":"Connect to the gateway to start chatting…",g=e.splitRatio??.6,m=!!(e.sidebarOpen&&e.onCloseSidebar),v=!e.loading&&(Array.isArray(e.messages)?e.messages.length===0:!0)&&!e.stream,k=["你能告诉我你有哪些技能吗？","帮我生成一份最近 15 分钟 MySQL 告警分析报告","帮我梳理一个排查思路，并给出优先级"],c=r`
    <div
      class="chat-thread"
      role="log"
      aria-live="polite"
      @scroll=${e.onChatScroll}
    >
      ${e.loading?r`
              <div class="muted">Loading chat…</div>
            `:y}
      ${Lm(Uh(e),p=>p.key,p=>p.kind==="reading-indicator"?wh(d):p.kind==="stream"?$h(p.text,p.startedAt,e.onOpenSidebar,d):p.kind==="group"?kh(p,{onOpenSidebar:e.onOpenSidebar,showReasoning:l,assistantName:e.assistantName,assistantAvatar:d.avatar}):y)}
      ${v?r`
              <div class="chat-empty">
                <div class="chat-empty__title">您好，有什么可以帮助您？</div>
                <div class="chat-empty__sub muted">从下面选一个快速开始，或直接输入你的问题。</div>
                <div class="chat-empty__prompts">
                  ${k.map(p=>r`
                      <button
                        class="btn chat-empty__prompt"
                        type="button"
                        ?disabled=${!e.connected}
                        @click=${()=>{e.onDraftChange(p),e.onSend()}}
                      >
                        ${ee.zap} ${p}
                      </button>
                    `)}
                </div>
              </div>
            `:y}
    </div>
  `;return r`
    <section class="card chat">
      ${e.disabledReason?r`<div class="callout">${e.disabledReason}</div>`:y}

      ${e.error?r`<div class="callout danger">${e.error}</div>`:y}

      ${Ph(e.compactionStatus)}

      ${e.focusMode?r`
            <button
              class="chat-focus-exit"
              type="button"
              @click=${e.onToggleFocusMode}
              aria-label="Exit focus mode"
              title="Exit focus mode"
            >
              ${ee.x}
            </button>
          `:y}

      <div
        class="chat-split-container ${m?"chat-split-container--open":""}"
      >
        <div
          class="chat-main"
          style="flex: ${m?`0 0 ${g*100}%`:"1 1 100%"}"
        >
          ${c}
        </div>

        ${m?r`
              <resizable-divider
                .splitRatio=${g}
                @resize=${p=>e.onSplitRatioChange?.(p.detail.splitRatio)}
              ></resizable-divider>
              <div class="chat-sidebar">
                ${Ch({content:e.sidebarContent??null,error:e.sidebarError??null,onClose:e.onCloseSidebar,onViewRawText:()=>{!e.sidebarContent||!e.onOpenSidebar||e.onOpenSidebar(`\`\`\`
${e.sidebarContent}
\`\`\``)}})}
              </div>
            `:y}
      </div>

      ${e.queue.length?r`
            <div class="chat-queue" role="status" aria-live="polite">
              <div class="chat-queue__title">Queued (${e.queue.length})</div>
              <div class="chat-queue__list">
                ${e.queue.map(p=>r`
                    <div class="chat-queue__item">
                      <div class="chat-queue__text">
                        ${p.text||(p.attachments?.length?`Image (${p.attachments.length})`:"")}
                      </div>
                      <button
                        class="btn chat-queue__remove"
                        type="button"
                        aria-label="Remove queued message"
                        @click=${()=>e.onQueueRemove(p.id)}
                      >
                        ${ee.x}
                      </button>
                    </div>
                  `)}
              </div>
            </div>
          `:y}

      ${e.showNewMessages?r`
            <button
              class="btn chat-new-messages"
              type="button"
              @click=${e.onScrollToBottom}
            >
              New messages ${ee.arrowDown}
            </button>
          `:y}

      <div class="chat-compose">
        ${Dh(e)}
        <div class="chat-compose__inner">
          <label class="field chat-compose__field">
            <span>Message</span>
            <textarea
            ${Pm(p=>p&&cl(p))}
            .value=${e.draft}
            ?disabled=${!e.connected}
            @keydown=${p=>{p.key==="Enter"&&(p.isComposing||p.keyCode===229||p.shiftKey||e.connected&&(p.preventDefault(),t&&e.onSend()))}}
            @input=${p=>{const h=p.target;cl(h),e.onDraftChange(h.value)}}
            @paste=${p=>Ih(p,e)}
            placeholder=${f}
          ></textarea>
        </label>
          <div class="chat-compose__row">
          <div class="chat-compose__meta">
            <button
              class="btn btn--icon chat-compose__add-file"
              type="button"
              aria-label="添加文件"
              title="添加文件"
              ?disabled=${!e.connected||!e.onAttachmentsChange}
              @click=${()=>{document.getElementById("chat-file-input")?.click()}}
            >
              ${ee.plus}
            </button>
            <input
              id="chat-file-input"
              type="file"
              multiple
              accept="image/*,*/*"
              style="display:none"
              @change=${p=>Lh(p,e)}
            />
            ${e.onModelRefChange?r`
                    <label class="field chat-compose__model-select">
                      <select
                        aria-label="大模型"
                        .value=${e.modelRef??e.defaultModelRef??""}
                        ?disabled=${!e.connected}
                        @change=${p=>{const h=p.target.value.trim(),b=e.defaultModelRef??"";e.onModelRefChange?.(h===""||h===b?null:h)}}
                      >
                        ${(e.modelOptions??[{value:"",label:"默认"}]).map(p=>r`<option value=${p.value}>${p.label}</option>`)}
                      </select>
                    </label>
                  `:y}
          </div>
          <div class="chat-compose__actions">
            <button
              class="btn chat-compose__secondary"
              ?disabled=${!e.connected||!s&&e.sending}
              @click=${s?e.onAbort:e.onNewSession}
            >
              ${s?"停止":"新会话"}
            </button>
            <button
              class="btn chat-compose__send"
              type="button"
              aria-label="发送"
              title="发送 (Enter)"
              ?disabled=${!e.connected}
              @click=${e.onSend}
            >
              ${n?ee.loader2:ee.send}
            </button>
          </div>
          </div>
        </div>
      </div>
    </section>
  `}const dl=200;function Nh(e){const t=[];let n=null;for(const s of e){if(s.kind!=="message"){n&&(t.push(n),n=null),t.push(s);continue}const a=fc(s.message),o=Co(a.role),l=a.timestamp||Date.now();!n||n.role!==o?(n&&t.push(n),n={kind:"group",key:`group:${o}:${s.key}`,role:o,messages:[{message:s.message,key:s.key}],timestamp:l,isStreaming:!1}):n.messages.push({message:s.message,key:s.key})}return n&&t.push(n),t}function Uh(e){const t=[],n=Array.isArray(e.messages)?e.messages:[],s=Array.isArray(e.toolMessages)?e.toolMessages:[],a=Math.max(0,n.length-dl);a>0&&t.push({kind:"message",key:"chat:history:notice",message:{role:"system",content:`Showing last ${dl} messages (${a} hidden).`,timestamp:Date.now()}});for(let o=a;o<n.length;o++){const l=n[o],d=fc(l);!e.showThinking&&d.role.toLowerCase()==="toolresult"||t.push({kind:"message",key:ul(l,o),message:l})}if(e.showThinking)for(let o=0;o<s.length;o++)t.push({kind:"message",key:ul(s[o],o+n.length),message:s[o]});if(e.stream!==null){const o=`stream:${e.sessionKey}:${e.streamStartedAt??"live"}`;e.stream.trim().length>0?t.push({kind:"stream",key:o,text:e.stream,startedAt:e.streamStartedAt??Date.now()}):t.push({kind:"reading-indicator",key:o})}return Nh(t)}function ul(e,t){const n=e,s=typeof n.toolCallId=="string"?n.toolCallId:"";if(s)return`tool:${s}`;const a=typeof n.id=="string"?n.id:"";if(a)return`msg:${a}`;const o=typeof n.messageId=="string"?n.messageId:"";if(o)return`msg:${o}`;const l=typeof n.timestamp=="number"?n.timestamp:null,d=typeof n.role=="string"?n.role:"unknown";return l!=null?`msg:${d}:${l}:${t}`:`msg:${d}:${t}`}function Je(e){if(e)return Array.isArray(e.type)?e.type.filter(n=>n!=="null")[0]??e.type[0]:e.type}function Sc(e){if(!e)return"";if(e.default!==void 0)return e.default;switch(Je(e)){case"object":return{};case"array":return[];case"boolean":return!1;case"number":case"integer":return 0;case"string":return"";default:return""}}function Yt(e){return e.filter(t=>typeof t=="string").join(".")}function Se(e,t){const n=Yt(e),s=t[n];if(s)return s;const a=n.split(".");for(const[o,l]of Object.entries(t)){if(!o.includes("*"))continue;const d=o.split(".");if(d.length!==a.length)continue;let u=!0;for(let f=0;f<a.length;f+=1)if(d[f]!=="*"&&d[f]!==a[f]){u=!1;break}if(u)return l}}function He(e){return e.replace(/_/g," ").replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/\s+/g," ").replace(/^./,t=>t.toUpperCase())}function Oh(e){const t=Yt(e).toLowerCase();return t.includes("token")||t.includes("password")||t.includes("secret")||t.includes("apikey")||t.endsWith("key")}function Fh(e){const t=Yt(e),n=e.map(a=>typeof a=="number"?"*":a).join("."),s=n.replace(/\.\*/g,"[]");return[t,n,s]}const Bh={en:{"meta.lastTouchedVersion":"Auto-set when OpenClaw writes the config.","meta.lastTouchedAt":"ISO timestamp of the last config write (auto-set).","update.channel":'Update channel for git + npm installs ("stable", "beta", or "dev").',"update.checkOnStart":"Check for npm updates when the gateway starts (default: true).","gateway.remote.url":"Remote Gateway WebSocket URL (ws:// or wss://).","gateway.remote.tlsFingerprint":"Expected sha256 TLS fingerprint for the remote gateway (pin to avoid MITM).","gateway.remote.sshTarget":"Remote gateway over SSH (tunnels the gateway port to localhost). Format: user@host or user@host:port.","gateway.remote.sshIdentity":"Optional SSH identity file path (passed to ssh -i).","agents.list.*.skills":"Optional allowlist of skills for this agent (omit = all skills; empty = no skills).","agents.list[].skills":"Optional allowlist of skills for this agent (omit = all skills; empty = no skills).","agents.list[].identity.avatar":"Avatar image path (relative to the agent workspace only) or a remote URL/data URL.","discovery.mdns.mode":'mDNS broadcast mode ("minimal" default, "full" includes cliPath/sshPort, "off" disables mDNS).',"gateway.auth.token":"Required by default for gateway access (unless using Tailscale Serve identity); required for non-loopback binds.","gateway.auth.password":"Required for Tailscale funnel.","gateway.controlUi.basePath":"Optional URL prefix where the Control UI is served (e.g. /openclaw).","gateway.controlUi.root":"Optional filesystem root for Control UI assets (defaults to dist/control-ui).","gateway.controlUi.allowedOrigins":"Allowed browser origins for Control UI/WebChat websocket connections (full origins only, e.g. https://control.example.com).","gateway.controlUi.allowInsecureAuth":"Allow Control UI auth over insecure HTTP (token-only; not recommended).","gateway.controlUi.dangerouslyDisableDeviceAuth":"DANGEROUS. Disable Control UI device identity checks (token/password only).","gateway.http.endpoints.chatCompletions.enabled":"Enable the OpenAI-compatible `POST /v1/chat/completions` endpoint (default: false).","gateway.reload.mode":'Hot reload strategy for config changes ("hybrid" recommended).',"gateway.reload.debounceMs":"Debounce window (ms) before applying config changes.","gateway.nodes.browser.mode":'Node browser routing ("auto" = pick single connected browser node, "manual" = require node param, "off" = disable).',"gateway.nodes.browser.node":"Pin browser routing to a specific node id or name (optional).","gateway.nodes.allowCommands":"Extra node.invoke commands to allow beyond the gateway defaults (array of command strings).","gateway.nodes.denyCommands":"Commands to block even if present in node claims or default allowlist.","nodeHost.browserProxy.enabled":"Expose the local browser control server via node proxy.","nodeHost.browserProxy.allowProfiles":"Optional allowlist of browser profile names exposed via the node proxy.","diagnostics.flags":'Enable targeted diagnostics logs by flag (e.g. ["telegram.http"]). Supports wildcards like "telegram.*" or "*".',"diagnostics.cacheTrace.enabled":"Log cache trace snapshots for embedded agent runs (default: false).","diagnostics.cacheTrace.filePath":"JSONL output path for cache trace logs (default: $OPENCLAW_STATE_DIR/logs/cache-trace.jsonl).","diagnostics.cacheTrace.includeMessages":"Include full message payloads in trace output (default: true).","diagnostics.cacheTrace.includePrompt":"Include prompt text in trace output (default: true).","diagnostics.cacheTrace.includeSystem":"Include system prompt in trace output (default: true).","tools.exec.applyPatch.enabled":"Experimental. Enables apply_patch for OpenAI models when allowed by tool policy.","tools.exec.applyPatch.allowModels":'Optional allowlist of model ids (e.g. "gpt-5.2" or "openai/gpt-5.2").',"tools.exec.notifyOnExit":"When true (default), backgrounded exec sessions enqueue a system event and request a heartbeat on exit.","tools.exec.pathPrepend":"Directories to prepend to PATH for exec runs (gateway/sandbox).","tools.exec.safeBins":"Allow stdin-only safe binaries to run without explicit allowlist entries.","tools.message.allowCrossContextSend":"Legacy override: allow cross-context sends across all providers.","tools.message.crossContext.allowWithinProvider":"Allow sends to other channels within the same provider (default: true).","tools.message.crossContext.allowAcrossProviders":"Allow sends across different providers (default: false).","tools.message.crossContext.marker.enabled":"Add a visible origin marker when sending cross-context (default: true).","tools.message.crossContext.marker.prefix":'Text prefix for cross-context markers (supports "{channel}").',"tools.message.crossContext.marker.suffix":'Text suffix for cross-context markers (supports "{channel}").',"tools.message.broadcast.enabled":"Enable broadcast action (default: true).","tools.web.search.enabled":"Enable the web_search tool (requires a provider API key).","tools.web.search.provider":'Search provider ("brave" or "perplexity").',"tools.web.search.apiKey":"Brave Search API key (fallback: BRAVE_API_KEY env var).","tools.web.search.maxResults":"Default number of results to return (1-10).","tools.web.search.timeoutSeconds":"Timeout in seconds for web_search requests.","tools.web.search.cacheTtlMinutes":"Cache TTL in minutes for web_search results.","tools.web.search.perplexity.apiKey":"Perplexity or OpenRouter API key (fallback: PERPLEXITY_API_KEY or OPENROUTER_API_KEY env var).","tools.web.search.perplexity.baseUrl":"Perplexity base URL override (default: https://openrouter.ai/api/v1 or https://api.perplexity.ai).","tools.web.search.perplexity.model":'Perplexity model override (default: "perplexity/sonar-pro").',"tools.web.fetch.enabled":"Enable the web_fetch tool (lightweight HTTP fetch).","tools.web.fetch.maxChars":"Max characters returned by web_fetch (truncated).","tools.web.fetch.maxCharsCap":"Hard cap for web_fetch maxChars (applies to config and tool calls).","tools.web.fetch.timeoutSeconds":"Timeout in seconds for web_fetch requests.","tools.web.fetch.cacheTtlMinutes":"Cache TTL in minutes for web_fetch results.","tools.web.fetch.maxRedirects":"Maximum redirects allowed for web_fetch (default: 3).","tools.web.fetch.userAgent":"Override User-Agent header for web_fetch requests.","tools.web.fetch.readability":"Use Readability to extract main content from HTML (fallbacks to basic HTML cleanup).","tools.web.fetch.firecrawl.enabled":"Enable Firecrawl fallback for web_fetch (if configured).","tools.web.fetch.firecrawl.apiKey":"Firecrawl API key (fallback: FIRECRAWL_API_KEY env var).","tools.web.fetch.firecrawl.baseUrl":"Firecrawl base URL (e.g. https://api.firecrawl.dev or custom endpoint).","tools.web.fetch.firecrawl.onlyMainContent":"When true, Firecrawl returns only the main content (default: true).","tools.web.fetch.firecrawl.maxAgeMs":"Firecrawl maxAge (ms) for cached results when supported by the API.","tools.web.fetch.firecrawl.timeoutSeconds":"Timeout in seconds for Firecrawl requests.","channels.slack.allowBots":"Allow bot-authored messages to trigger Slack replies (default: false).","channels.slack.thread.historyScope":'Scope for Slack thread history context ("thread" isolates per thread; "channel" reuses channel history).',"channels.slack.thread.inheritParent":"If true, Slack thread sessions inherit the parent channel transcript (default: false).","channels.mattermost.botToken":"Bot token from Mattermost System Console -> Integrations -> Bot Accounts.","channels.mattermost.baseUrl":"Base URL for your Mattermost server (e.g., https://chat.example.com).","channels.mattermost.chatmode":'Reply to channel messages on mention ("oncall"), on trigger chars (">" or "!") ("onchar"), or on every message ("onmessage").',"channels.mattermost.oncharPrefixes":'Trigger prefixes for onchar mode (default: [">", "!"]).',"channels.mattermost.requireMention":"Require @mention in channels before responding (default: true).","auth.profiles":"Named auth profiles (provider + mode + optional email).","auth.order":"Ordered auth profile IDs per provider (used for automatic failover).","auth.cooldowns.billingBackoffHours":"Base backoff (hours) when a profile fails due to billing/insufficient credits (default: 5).","auth.cooldowns.billingBackoffHoursByProvider":"Optional per-provider overrides for billing backoff (hours).","auth.cooldowns.billingMaxHours":"Cap (hours) for billing backoff (default: 24).","auth.cooldowns.failureWindowHours":"Failure window (hours) for backoff counters (default: 24).","agents.defaults.bootstrapMaxChars":"Max characters of each workspace bootstrap file injected into the system prompt before truncation (default: 20000).","agents.defaults.repoRoot":"Optional repository root shown in the system prompt runtime line (overrides auto-detect).","agents.defaults.envelopeTimezone":'Timezone for message envelopes ("utc", "local", "user", or an IANA timezone string).',"agents.defaults.envelopeTimestamp":'Include absolute timestamps in message envelopes ("on" or "off").',"agents.defaults.envelopeElapsed":'Include elapsed time in message envelopes ("on" or "off").',"agents.defaults.models":"Configured model catalog (keys are full provider/model IDs).","agents.defaults.memorySearch":"Vector search over MEMORY.md and memory/*.md (per-agent overrides supported).","agents.defaults.memorySearch.sources":'Sources to index for memory search (default: ["memory"]; add "sessions" to include session transcripts).',"agents.defaults.memorySearch.extraPaths":"Extra paths to include in memory search (directories or .md files; relative paths resolved from workspace).","agents.defaults.memorySearch.experimental.sessionMemory":"Enable experimental session transcript indexing for memory search (default: false).","agents.defaults.memorySearch.provider":'Embedding provider ("openai", "gemini", "voyage", or "local").',"agents.defaults.memorySearch.remote.baseUrl":"Custom base URL for remote embeddings (OpenAI-compatible proxies or Gemini overrides).","agents.defaults.memorySearch.remote.apiKey":"Custom API key for the remote embedding provider.","agents.defaults.memorySearch.remote.headers":"Extra headers for remote embeddings (merged; remote overrides OpenAI headers).","agents.defaults.memorySearch.remote.batch.enabled":"Enable batch API for memory embeddings (OpenAI/Gemini; default: true).","agents.defaults.memorySearch.remote.batch.wait":"Wait for batch completion when indexing (default: true).","agents.defaults.memorySearch.remote.batch.concurrency":"Max concurrent embedding batch jobs for memory indexing (default: 2).","agents.defaults.memorySearch.remote.batch.pollIntervalMs":"Polling interval in ms for batch status (default: 2000).","agents.defaults.memorySearch.remote.batch.timeoutMinutes":"Timeout in minutes for batch indexing (default: 60).","agents.defaults.memorySearch.local.modelPath":"Local GGUF model path or hf: URI (node-llama-cpp).","agents.defaults.memorySearch.fallback":'Fallback provider when embeddings fail ("openai", "gemini", "local", or "none").',"agents.defaults.memorySearch.store.path":"SQLite index path (default: ~/.openclaw/memory/{agentId}.sqlite).","agents.defaults.memorySearch.store.vector.enabled":"Enable sqlite-vec extension for vector search (default: true).","agents.defaults.memorySearch.store.vector.extensionPath":"Optional override path to sqlite-vec extension library (.dylib/.so/.dll).","agents.defaults.memorySearch.query.hybrid.enabled":"Enable hybrid BM25 + vector search for memory (default: true).","agents.defaults.memorySearch.query.hybrid.vectorWeight":"Weight for vector similarity when merging results (0-1).","agents.defaults.memorySearch.query.hybrid.textWeight":"Weight for BM25 text relevance when merging results (0-1).","agents.defaults.memorySearch.query.hybrid.candidateMultiplier":"Multiplier for candidate pool size (default: 4).","agents.defaults.memorySearch.cache.enabled":"Cache chunk embeddings in SQLite to speed up reindexing and frequent updates (default: true).",memory:"Memory backend configuration (global).","memory.backend":'Memory backend ("builtin" for OpenClaw embeddings, "qmd" for QMD sidecar).',"memory.citations":'Default citation behavior ("auto", "on", or "off").',"memory.qmd.command":"Path to the qmd binary (default: resolves from PATH).","memory.qmd.includeDefaultMemory":"Whether to automatically index MEMORY.md + memory/**/*.md (default: true).","memory.qmd.paths":"Additional directories/files to index with QMD (path + optional glob pattern).","memory.qmd.paths.path":"Absolute or ~-relative path to index via QMD.","memory.qmd.paths.pattern":"Glob pattern relative to the path root (default: **/*.md).","memory.qmd.paths.name":"Optional stable name for the QMD collection (default derived from path).","memory.qmd.sessions.enabled":"Enable QMD session transcript indexing (experimental, default: false).","memory.qmd.sessions.exportDir":"Override directory for sanitized session exports before indexing.","memory.qmd.sessions.retentionDays":"Retention window for exported sessions before pruning (default: unlimited).","memory.qmd.update.interval":"How often the QMD sidecar refreshes indexes (duration string, default: 5m).","memory.qmd.update.debounceMs":"Minimum delay between successive QMD refresh runs (default: 15000).","memory.qmd.update.onBoot":"Run QMD update once on gateway startup (default: true).","memory.qmd.update.embedInterval":"How often QMD embeddings are refreshed (duration string, default: 60m). Set to 0 to disable periodic embed.","memory.qmd.limits.maxResults":"Max QMD results returned to the agent loop (default: 6).","memory.qmd.limits.maxSnippetChars":"Max characters per snippet pulled from QMD (default: 700).","memory.qmd.limits.maxInjectedChars":"Max total characters injected from QMD hits per turn.","memory.qmd.limits.timeoutMs":"Per-query timeout for QMD searches (default: 4000).","memory.qmd.scope":"Session/channel scope for QMD recall (same syntax as session.sendPolicy; default: direct-only).","agents.defaults.memorySearch.cache.maxEntries":"Optional cap on cached embeddings (best-effort).","agents.defaults.memorySearch.sync.onSearch":"Lazy sync: schedule a reindex on search after changes.","agents.defaults.memorySearch.sync.watch":"Watch memory files for changes (chokidar).","agents.defaults.memorySearch.sync.sessions.deltaBytes":"Minimum appended bytes before session transcripts trigger reindex (default: 100000).","agents.defaults.memorySearch.sync.sessions.deltaMessages":"Minimum appended JSONL lines before session transcripts trigger reindex (default: 50).","plugins.enabled":"Enable plugin/extension loading (default: true).","plugins.allow":"Optional allowlist of plugin ids; when set, only listed plugins load.","plugins.deny":"Optional denylist of plugin ids; deny wins over allowlist.","plugins.load.paths":"Additional plugin files or directories to load.","plugins.slots":"Select which plugins own exclusive slots (memory, etc.).","plugins.slots.memory":'Select the active memory plugin by id, or "none" to disable memory plugins.',"plugins.entries":"Per-plugin settings keyed by plugin id (enable/disable + config payloads).","plugins.entries.*.enabled":"Overrides plugin enable/disable for this entry (restart required).","plugins.entries.*.config":"Plugin-defined config payload (schema is provided by the plugin).","plugins.installs":"CLI-managed install metadata (used by `openclaw plugins update` to locate install sources).","plugins.installs.*.source":'Install source ("npm", "archive", or "path").',"plugins.installs.*.spec":"Original npm spec used for install (if source is npm).","plugins.installs.*.sourcePath":"Original archive/path used for install (if any).","plugins.installs.*.installPath":"Resolved install directory (usually ~/.openclaw/extensions/<id>).","plugins.installs.*.version":"Version recorded at install time (if available).","plugins.installs.*.installedAt":"ISO timestamp of last install/update.","agents.list.*.identity.avatar":"Agent avatar (workspace-relative path, http(s) URL, or data URI).","agents.defaults.model.primary":"Primary model (provider/model).","agents.defaults.model.fallbacks":"Ordered fallback models (provider/model). Used when the primary model fails.","agents.defaults.imageModel.primary":"Optional image model (provider/model) used when the primary model lacks image input.","agents.defaults.imageModel.fallbacks":"Ordered fallback image models (provider/model).","agents.defaults.cliBackends":"Optional CLI backends for text-only fallback (claude-cli, etc.).","agents.defaults.humanDelay.mode":'Delay style for block replies ("off", "natural", "custom").',"agents.defaults.humanDelay.minMs":"Minimum delay in ms for custom humanDelay (default: 800).","agents.defaults.humanDelay.maxMs":"Maximum delay in ms for custom humanDelay (default: 2500).","commands.native":"Register native commands with channels that support it (Discord/Slack/Telegram).","commands.nativeSkills":"Register native skill commands (user-invocable skills) with channels that support it.","commands.text":"Allow text command parsing (slash commands only).","commands.bash":"Allow bash chat command (`!`; `/bash` alias) to run host shell commands (default: false; requires tools.elevated).","commands.bashForegroundMs":"How long bash waits before backgrounding (default: 2000; 0 backgrounds immediately).","commands.config":"Allow /config chat command to read/write config on disk (default: false).","commands.debug":"Allow /debug chat command for runtime-only overrides (default: false).","commands.restart":"Allow /restart and gateway restart tool actions (default: false).","commands.useAccessGroups":"Enforce access-group allowlists/policies for commands.","commands.ownerAllowFrom":`Explicit owner allowlist for owner-only tools/commands. Use channel-native IDs (optionally prefixed like "whatsapp:+15551234567"). '*' is ignored.`,"session.dmScope":'DM session scoping: "main" keeps continuity; "per-peer", "per-channel-peer", or "per-account-channel-peer" isolates DM history (recommended for shared inboxes/multi-account).',"session.identityLinks":"Map canonical identities to provider-prefixed peer IDs for DM session linking (example: telegram:123456).","channels.telegram.configWrites":"Allow Telegram to write config in response to channel events/commands (default: true).","channels.slack.configWrites":"Allow Slack to write config in response to channel events/commands (default: true).","channels.mattermost.configWrites":"Allow Mattermost to write config in response to channel events/commands (default: true).","channels.discord.configWrites":"Allow Discord to write config in response to channel events/commands (default: true).","channels.whatsapp.configWrites":"Allow WhatsApp to write config in response to channel events/commands (default: true).","channels.signal.configWrites":"Allow Signal to write config in response to channel events/commands (default: true).","channels.imessage.configWrites":"Allow iMessage to write config in response to channel events/commands (default: true).","channels.msteams.configWrites":"Allow Microsoft Teams to write config in response to channel events/commands (default: true).","channels.discord.commands.native":'Override native commands for Discord (bool or "auto").',"channels.discord.commands.nativeSkills":'Override native skill commands for Discord (bool or "auto").',"channels.telegram.commands.native":'Override native commands for Telegram (bool or "auto").',"channels.telegram.commands.nativeSkills":'Override native skill commands for Telegram (bool or "auto").',"channels.slack.commands.native":'Override native commands for Slack (bool or "auto").',"channels.slack.commands.nativeSkills":'Override native skill commands for Slack (bool or "auto").',"session.agentToAgent.maxPingPongTurns":"Max reply-back turns between requester and target (0–5).","channels.telegram.customCommands":"Additional Telegram bot menu commands (merged with native; conflicts ignored).","messages.ackReaction":"Emoji reaction used to acknowledge inbound messages (empty disables).","messages.ackReactionScope":'When to send ack reactions ("group-mentions", "group-all", "direct", "all").',"messages.inbound.debounceMs":"Debounce window (ms) for batching rapid inbound messages from the same sender (0 to disable).","channels.telegram.dmPolicy":'Direct message access control ("pairing" recommended). "open" requires channels.telegram.allowFrom=["*"].',"channels.telegram.streamMode":"Draft streaming mode for Telegram replies (off | partial | block). Separate from block streaming; requires private topics + sendMessageDraft.","channels.telegram.draftChunk.minChars":'Minimum chars before emitting a Telegram draft update when channels.telegram.streamMode="block" (default: 200).',"channels.telegram.draftChunk.maxChars":'Target max size for a Telegram draft update chunk when channels.telegram.streamMode="block" (default: 800; clamped to channels.telegram.textChunkLimit).',"channels.telegram.draftChunk.breakPreference":"Preferred breakpoints for Telegram draft chunks (paragraph | newline | sentence). Default: paragraph.","channels.telegram.retry.attempts":"Max retry attempts for outbound Telegram API calls (default: 3).","channels.telegram.retry.minDelayMs":"Minimum retry delay in ms for Telegram outbound calls.","channels.telegram.retry.maxDelayMs":"Maximum retry delay cap in ms for Telegram outbound calls.","channels.telegram.retry.jitter":"Jitter factor (0-1) applied to Telegram retry delays.","channels.telegram.network.autoSelectFamily":"Override Node autoSelectFamily for Telegram (true=enable, false=disable).","channels.telegram.timeoutSeconds":"Max seconds before Telegram API requests are aborted (default: 500 per grammY).","channels.whatsapp.dmPolicy":'Direct message access control ("pairing" recommended). "open" requires channels.whatsapp.allowFrom=["*"].',"channels.whatsapp.selfChatMode":"Same-phone setup (bot uses your personal WhatsApp number).","channels.whatsapp.debounceMs":"Debounce window (ms) for batching rapid consecutive messages from the same sender (0 to disable).","channels.signal.dmPolicy":'Direct message access control ("pairing" recommended). "open" requires channels.signal.allowFrom=["*"].',"channels.imessage.dmPolicy":'Direct message access control ("pairing" recommended). "open" requires channels.imessage.allowFrom=["*"].',"channels.bluebubbles.dmPolicy":'Direct message access control ("pairing" recommended). "open" requires channels.bluebubbles.allowFrom=["*"].',"channels.discord.dm.policy":'Direct message access control ("pairing" recommended). "open" requires channels.discord.dm.allowFrom=["*"].',"channels.discord.retry.attempts":"Max retry attempts for outbound Discord API calls (default: 3).","channels.discord.retry.minDelayMs":"Minimum retry delay in ms for Discord outbound calls.","channels.discord.retry.maxDelayMs":"Maximum retry delay cap in ms for Discord outbound calls.","channels.discord.retry.jitter":"Jitter factor (0-1) applied to Discord retry delays.","channels.discord.maxLinesPerMessage":"Soft max line count per Discord message (default: 17).","channels.discord.intents.presence":"Enable the Guild Presences privileged intent. Must also be enabled in the Discord Developer Portal. Allows tracking user activities (e.g. Spotify). Default: false.","channels.discord.intents.guildMembers":"Enable the Guild Members privileged intent. Must also be enabled in the Discord Developer Portal. Default: false.","channels.discord.pluralkit.enabled":"Resolve PluralKit proxied messages and treat system members as distinct senders.","channels.discord.pluralkit.token":"Optional PluralKit token for resolving private systems or members.","channels.slack.dm.policy":'Direct message access control ("pairing" recommended). "open" requires channels.slack.dm.allowFrom=["*"].'},zh:{"meta.lastTouchedVersion":"OpenClaw 写入配置时自动设置。","meta.lastTouchedAt":"最后一次配置写入的 ISO 时间戳（自动设置）。","update.channel":'git + npm 安装的更新渠道（"stable"、"beta" 或 "dev"）。',"update.checkOnStart":"网关启动时检查 npm 更新（默认：true）。","gateway.remote.url":"远程网关 WebSocket URL（ws:// 或 wss://）。","gateway.remote.tlsFingerprint":"远程网关的预期 sha256 TLS 指纹（固定以避免中间人攻击）。","gateway.remote.sshTarget":"通过 SSH 的远程网关（将网关端口隧道到 localhost）。格式：user@host 或 user@host:port。","gateway.remote.sshIdentity":"可选的 SSH 身份文件路径（传递给 ssh -i）。","agents.list.*.skills":"此代理的可选技能允许列表（省略 = 所有技能；空 = 无技能）。","agents.list[].skills":"此代理的可选技能允许列表（省略 = 所有技能；空 = 无技能）。","agents.list[].identity.avatar":"头像图片路径（仅相对于代理工作区）或远程 URL/data URL。","discovery.mdns.mode":'mDNS 广播模式（"minimal" 默认，"full" 包含 cliPath/sshPort，"off" 禁用 mDNS）。',"gateway.auth.token":"默认情况下网关访问所需（除非使用 Tailscale Serve 身份）；非回环绑定需要。","gateway.auth.password":"Tailscale funnel 需要。","gateway.controlUi.basePath":"控制台 UI 服务的可选 URL 前缀（例如 /openclaw）。","gateway.controlUi.root":"控制台 UI 资源的可选文件系统根目录（默认为 dist/control-ui）。","gateway.controlUi.allowedOrigins":"控制台 UI/WebChat websocket 连接允许的浏览器来源（仅完整来源，例如 https://control.example.com）。","gateway.controlUi.allowInsecureAuth":"允许通过不安全 HTTP 进行控制台 UI 认证（仅令牌；不推荐）。","gateway.controlUi.dangerouslyDisableDeviceAuth":"危险。禁用控制台 UI 设备身份检查（仅令牌/密码）。","gateway.http.endpoints.chatCompletions.enabled":"启用 OpenAI 兼容的 `POST /v1/chat/completions` 端点（默认：false）。","gateway.reload.mode":'配置更改的热重载策略（推荐 "hybrid"）。',"gateway.reload.debounceMs":"应用配置更改前的防抖窗口（毫秒）。","gateway.nodes.browser.mode":'节点浏览器路由（"auto" = 选择单个连接的浏览器节点，"manual" = 需要节点参数，"off" = 禁用）。',"gateway.nodes.browser.node":"将浏览器路由固定到特定节点 id 或名称（可选）。","gateway.nodes.allowCommands":"允许的额外 node.invoke 命令，超出网关默认值（命令字符串数组）。","gateway.nodes.denyCommands":"即使存在于节点声明或默认允许列表中也要阻止的命令。","nodeHost.browserProxy.enabled":"通过节点代理暴露本地浏览器控制服务器。","nodeHost.browserProxy.allowProfiles":"通过节点代理暴露的浏览器配置集名称的可选允许列表。","diagnostics.flags":'按标志启用目标诊断日志（例如 ["telegram.http"]）。支持通配符，如 "telegram.*" 或 "*"。',"diagnostics.cacheTrace.enabled":"记录嵌入代理运行的缓存跟踪快照（默认：false）。","diagnostics.cacheTrace.filePath":"缓存跟踪日志的 JSONL 输出路径（默认：$OPENCLAW_STATE_DIR/logs/cache-trace.jsonl）。","diagnostics.cacheTrace.includeMessages":"在跟踪输出中包含完整消息负载（默认：true）。","diagnostics.cacheTrace.includePrompt":"在跟踪输出中包含提示文本（默认：true）。","diagnostics.cacheTrace.includeSystem":"在跟踪输出中包含系统提示（默认：true）。","tools.exec.applyPatch.enabled":"实验性。在工具策略允许时，为 OpenAI 模型启用 apply_patch。","tools.exec.applyPatch.allowModels":'模型 id 的可选允许列表（例如 "gpt-5.2" 或 "openai/gpt-5.2"）。',"tools.exec.notifyOnExit":"当为 true（默认）时，后台 exec 会话在退出时排队系统事件并请求心跳。","tools.exec.pathPrepend":"为 exec 运行前置到 PATH 的目录（网关/沙箱）。","tools.exec.safeBins":"允许仅 stdin 的安全二进制文件在没有显式允许列表条目的情况下运行。","tools.message.allowCrossContextSend":"遗留覆盖：允许跨所有提供方的跨上下文发送。","tools.message.crossContext.allowWithinProvider":"允许发送到同一提供方内的其他通道（默认：true）。","tools.message.crossContext.allowAcrossProviders":"允许跨不同提供方发送（默认：false）。","tools.message.crossContext.marker.enabled":"发送跨上下文时添加可见的来源标记（默认：true）。","tools.message.crossContext.marker.prefix":'跨上下文标记的文本前缀（支持 "{channel}"）。',"tools.message.crossContext.marker.suffix":'跨上下文标记的文本后缀（支持 "{channel}"）。',"tools.message.broadcast.enabled":"启用广播操作（默认：true）。","tools.web.search.enabled":"启用 web_search 工具（需要提供方 API 密钥）。","tools.web.search.provider":'搜索提供方（"brave" 或 "perplexity"）。',"tools.web.search.apiKey":"Brave Search API 密钥（回退：BRAVE_API_KEY 环境变量）。","tools.web.search.maxResults":"默认返回的结果数（1-10）。","tools.web.search.timeoutSeconds":"web_search 请求的超时（秒）。","tools.web.search.cacheTtlMinutes":"web_search 结果的缓存 TTL（分钟）。","tools.web.search.perplexity.apiKey":"Perplexity 或 OpenRouter API 密钥（回退：PERPLEXITY_API_KEY 或 OPENROUTER_API_KEY 环境变量）。","tools.web.search.perplexity.baseUrl":"Perplexity base URL 覆盖（默认：https://openrouter.ai/api/v1 或 https://api.perplexity.ai）。","tools.web.search.perplexity.model":'Perplexity 模型覆盖（默认："perplexity/sonar-pro"）。',"tools.web.fetch.enabled":"启用 web_fetch 工具（轻量级 HTTP 获取）。","tools.web.fetch.maxChars":"web_fetch 返回的最大字符数（截断）。","tools.web.fetch.maxCharsCap":"web_fetch maxChars 的硬上限（适用于配置和工具调用）。","tools.web.fetch.timeoutSeconds":"web_fetch 请求的超时（秒）。","tools.web.fetch.cacheTtlMinutes":"web_fetch 结果的缓存 TTL（分钟）。","tools.web.fetch.maxRedirects":"web_fetch 允许的最大重定向数（默认：3）。","tools.web.fetch.userAgent":"覆盖 web_fetch 请求的 User-Agent 头。","tools.web.fetch.readability":"使用 Readability 从 HTML 中提取主要内容（回退到基本 HTML 清理）。","tools.web.fetch.firecrawl.enabled":"启用 Firecrawl 回退用于 web_fetch（如果已配置）。","tools.web.fetch.firecrawl.apiKey":"Firecrawl API 密钥（回退：FIRECRAWL_API_KEY 环境变量）。","tools.web.fetch.firecrawl.baseUrl":"Firecrawl base URL（例如 https://api.firecrawl.dev 或自定义端点）。","tools.web.fetch.firecrawl.onlyMainContent":"当为 true 时，Firecrawl 仅返回主要内容（默认：true）。","tools.web.fetch.firecrawl.maxAgeMs":"Firecrawl maxAge（毫秒），用于 API 支持时的缓存结果。","tools.web.fetch.firecrawl.timeoutSeconds":"Firecrawl 请求的超时（秒）。","channels.slack.allowBots":"允许机器人撰写的消息触发 Slack 回复（默认：false）。","channels.slack.thread.historyScope":'Slack 线程历史上下文的范围（"thread" 隔离每个线程；"channel" 重用通道历史）。',"channels.slack.thread.inheritParent":"如果为 true，Slack 线程会话继承父通道转录（默认：false）。","channels.mattermost.botToken":"来自 Mattermost 系统控制台 -> 集成 -> 机器人账户的机器人令牌。","channels.mattermost.baseUrl":"您的 Mattermost 服务器的 Base URL（例如，https://chat.example.com）。","channels.mattermost.chatmode":'在提及（"oncall"）、触发字符（">" 或 "!"）（"onchar"）或每条消息（"onmessage"）时回复通道消息。',"channels.mattermost.oncharPrefixes":'onchar 模式的触发前缀（默认：[">", "!"]）。',"channels.mattermost.requireMention":"在回复前要求在通道中 @提及（默认：true）。","auth.profiles":"命名的认证配置集（提供方 + 模式 + 可选电子邮件）。","auth.order":"每个提供方的有序认证配置集 ID（用于自动故障转移）。","auth.cooldowns.billingBackoffHours":"当配置集因计费/积分不足而失败时的基本退避（小时）（默认：5）。","auth.cooldowns.billingBackoffHoursByProvider":"每个提供方的计费退避可选覆盖（小时）。","auth.cooldowns.billingMaxHours":"计费退避的上限（小时）（默认：24）。","auth.cooldowns.failureWindowHours":"退避计数器的故障窗口（小时）（默认：24）。","agents.defaults.bootstrapMaxChars":"在截断前注入系统提示的每个工作区引导文件的最大字符数（默认：20000）。","agents.defaults.repoRoot":"在系统提示运行时行中显示的可选仓库根目录（覆盖自动检测）。","agents.defaults.envelopeTimezone":'消息信封的时区（"utc"、"local"、"user" 或 IANA 时区字符串）。',"agents.defaults.envelopeTimestamp":'在消息信封中包含绝对时间戳（"on" 或 "off"）。',"agents.defaults.envelopeElapsed":'在消息信封中包含经过时间（"on" 或 "off"）。',"agents.defaults.models":"配置的模型目录（键是完整的提供方/模型 ID）。","agents.defaults.memorySearch":"对 MEMORY.md 和 memory/*.md 的向量搜索（支持每个代理的覆盖）。","agents.defaults.memorySearch.sources":'记忆搜索的索引来源（默认：["memory"]；添加 "sessions" 以包含会话转录）。',"agents.defaults.memorySearch.extraPaths":"记忆搜索中包含的额外路径（目录或 .md 文件；相对路径从工作区解析）。","agents.defaults.memorySearch.experimental.sessionMemory":"启用实验性会话转录索引用于记忆搜索（默认：false）。","agents.defaults.memorySearch.provider":'嵌入提供方（"openai"、"gemini"、"voyage" 或 "local"）。',"agents.defaults.memorySearch.remote.baseUrl":"远程嵌入的自定义 base URL（OpenAI 兼容代理或 Gemini 覆盖）。","agents.defaults.memorySearch.remote.apiKey":"远程嵌入提供方的自定义 API 密钥。","agents.defaults.memorySearch.remote.headers":"远程嵌入的额外请求头（合并；远程覆盖 OpenAI 请求头）。","agents.defaults.memorySearch.remote.batch.enabled":"启用记忆嵌入的批处理 API（OpenAI/Gemini；默认：true）。","agents.defaults.memorySearch.remote.batch.wait":"索引时等待批处理完成（默认：true）。","agents.defaults.memorySearch.remote.batch.concurrency":"记忆索引的最大并发嵌入批处理作业数（默认：2）。","agents.defaults.memorySearch.remote.batch.pollIntervalMs":"批处理状态轮询间隔（毫秒）（默认：2000）。","agents.defaults.memorySearch.remote.batch.timeoutMinutes":"批处理索引的超时（分钟）（默认：60）。","agents.defaults.memorySearch.local.modelPath":"本地 GGUF 模型路径或 hf: URI（node-llama-cpp）。","agents.defaults.memorySearch.fallback":'嵌入失败时的回退提供方（"openai"、"gemini"、"local" 或 "none"）。',"agents.defaults.memorySearch.store.path":"SQLite 索引路径（默认：~/.openclaw/memory/{agentId}.sqlite）。","agents.defaults.memorySearch.store.vector.enabled":"启用 sqlite-vec 扩展用于向量搜索（默认：true）。","agents.defaults.memorySearch.store.vector.extensionPath":"sqlite-vec 扩展库的可选覆盖路径（.dylib/.so/.dll）。","agents.defaults.memorySearch.query.hybrid.enabled":"启用混合 BM25 + 向量搜索用于记忆（默认：true）。","agents.defaults.memorySearch.query.hybrid.vectorWeight":"合并结果时向量相似度的权重（0-1）。","agents.defaults.memorySearch.query.hybrid.textWeight":"合并结果时 BM25 文本相关性的权重（0-1）。","agents.defaults.memorySearch.query.hybrid.candidateMultiplier":"候选池大小的倍数（默认：4）。","agents.defaults.memorySearch.cache.enabled":"在 SQLite 中缓存块嵌入以加速重新索引和频繁更新（默认：true）。",memory:"记忆后端配置（全局）。","memory.backend":'记忆后端（"builtin" 用于 OpenClaw 嵌入，"qmd" 用于 QMD 侧车）。',"memory.citations":'默认引用行为（"auto"、"on" 或 "off"）。',"memory.qmd.command":"qmd 可执行文件的路径（默认：从 PATH 解析）。","memory.qmd.includeDefaultMemory":"是否自动索引 MEMORY.md + memory/**/*.md（默认：true）。","memory.qmd.paths":"使用 QMD 索引的额外目录/文件（路径 + 可选 glob 模式）。","memory.qmd.paths.path":"通过 QMD 索引的绝对或 ~ 相对路径。","memory.qmd.paths.pattern":"相对于路径根的 Glob 模式（默认：**/*.md）。","memory.qmd.paths.name":"QMD 集合的可选稳定名称（默认从路径派生）。","memory.qmd.sessions.enabled":"启用 QMD 会话转录索引（实验性，默认：false）。","memory.qmd.sessions.exportDir":"索引前清理会话导出的覆盖目录。","memory.qmd.sessions.retentionDays":"修剪前导出会话的保留窗口（默认：无限制）。","memory.qmd.update.interval":"QMD 侧车刷新索引的频率（持续时间字符串，默认：5m）。","memory.qmd.update.debounceMs":"连续 QMD 刷新运行之间的最小延迟（默认：15000）。","memory.qmd.update.onBoot":"在网关启动时运行一次 QMD 更新（默认：true）。","memory.qmd.update.embedInterval":"QMD 嵌入刷新的频率（持续时间字符串，默认：60m）。设置为 0 以禁用定期嵌入。","memory.qmd.limits.maxResults":"返回到代理循环的最大 QMD 结果数（默认：6）。","memory.qmd.limits.maxSnippetChars":"从 QMD 拉取的每个片段的最大字符数（默认：700）。","memory.qmd.limits.maxInjectedChars":"每轮从 QMD 命中注入的最大总字符数。","memory.qmd.limits.timeoutMs":"QMD 搜索的每次查询超时（默认：4000）。","memory.qmd.scope":"QMD 召回会话/通道范围（与 session.sendPolicy 相同的语法；默认：仅直接）。","agents.defaults.memorySearch.cache.maxEntries":"缓存嵌入的可选上限（尽力而为）。","agents.defaults.memorySearch.sync.onSearch":"懒同步：在更改后搜索时安排重新索引。","agents.defaults.memorySearch.sync.watch":"监听记忆文件的更改（chokidar）。","agents.defaults.memorySearch.sync.sessions.deltaBytes":"会话转录触发重新索引前的最小追加字节数（默认：100000）。","agents.defaults.memorySearch.sync.sessions.deltaMessages":"会话转录触发重新索引前的最小追加 JSONL 行数（默认：50）。","plugins.enabled":"启用插件/扩展加载（默认：true）。","plugins.allow":"插件 id 的可选允许列表；设置时，仅加载列出的插件。","plugins.deny":"插件 id 的可选拒绝列表；拒绝优先于允许列表。","plugins.load.paths":"要加载的额外插件文件或目录。","plugins.slots":"选择哪些插件拥有独占槽位（记忆等）。","plugins.slots.memory":'按 id 选择活动记忆插件，或 "none" 以禁用记忆插件。',"plugins.entries":"按插件 id 键控的每个插件设置（启用/禁用 + 配置负载）。","plugins.entries.*.enabled":"覆盖此条目的插件启用/禁用（需要重启）。","plugins.entries.*.config":"插件定义的配置负载（模式由插件提供）。","plugins.installs":"CLI 管理的安装元数据（由 `openclaw plugins update` 用于定位安装来源）。","plugins.installs.*.source":'安装来源（"npm"、"archive" 或 "path"）。',"plugins.installs.*.spec":"用于安装的原始 npm 规格（如果来源是 npm）。","plugins.installs.*.sourcePath":"用于安装的原始存档/路径（如果有）。","plugins.installs.*.installPath":"解析的安装目录（通常是 ~/.openclaw/extensions/<id>）。","plugins.installs.*.version":"安装时记录的版本（如果可用）。","plugins.installs.*.installedAt":"最后一次安装/更新的 ISO 时间戳。","agents.list.*.identity.avatar":"代理头像（工作区相对路径、http(s) URL 或 data URI）。","agents.defaults.model.primary":"主模型（提供方/模型）。","agents.defaults.model.fallbacks":"有序回退模型（提供方/模型）。当主模型失败时使用。","agents.defaults.imageModel.primary":"当主模型缺少图像输入时使用的可选图像模型（提供方/模型）。","agents.defaults.imageModel.fallbacks":"有序回退图像模型（提供方/模型）。","agents.defaults.cliBackends":"用于仅文本回退的可选 CLI 后端（claude-cli 等）。","agents.defaults.humanDelay.mode":'块回复的延迟样式（"off"、"natural"、"custom"）。',"agents.defaults.humanDelay.minMs":"自定义 humanDelay 的最小延迟（毫秒）（默认：800）。","agents.defaults.humanDelay.maxMs":"自定义 humanDelay 的最大延迟（毫秒）（默认：2500）。","commands.native":"向支持它的通道注册原生命令（Discord/Slack/Telegram）。","commands.nativeSkills":"向支持它的通道注册原生技能命令（用户可调用的技能）。","commands.text":"允许文本命令解析（仅斜杠命令）。","commands.bash":"允许 bash 聊天命令（`!`；`/bash` 别名）运行主机 shell 命令（默认：false；需要 tools.elevated）。","commands.bashForegroundMs":"bash 在后台化之前等待的时间（默认：2000；0 立即后台化）。","commands.config":"允许 /config 聊天命令在磁盘上读取/写入配置（默认：false）。","commands.debug":"允许 /debug 聊天命令进行仅运行时覆盖（默认：false）。","commands.restart":"允许 /restart 和网关重启工具操作（默认：false）。","commands.useAccessGroups":"强制执行访问组允许列表/策略用于命令。","commands.ownerAllowFrom":`仅所有者工具/命令的显式所有者允许列表。使用通道原生 ID（可选前缀，如 "whatsapp:+15551234567"）。'*' 被忽略。`,"session.dmScope":'私信会话范围："main" 保持连续性；"per-peer"、"per-channel-peer" 或 "per-account-channel-peer" 隔离私信历史（推荐用于共享收件箱/多账户）。',"session.identityLinks":"将规范身份映射到提供方前缀的对等 ID 用于私信会话链接（示例：telegram:123456）。","channels.telegram.configWrites":"允许 Telegram 响应通道事件/命令写入配置（默认：true）。","channels.slack.configWrites":"允许 Slack 响应通道事件/命令写入配置（默认：true）。","channels.mattermost.configWrites":"允许 Mattermost 响应通道事件/命令写入配置（默认：true）。","channels.discord.configWrites":"允许 Discord 响应通道事件/命令写入配置（默认：true）。","channels.whatsapp.configWrites":"允许 WhatsApp 响应通道事件/命令写入配置（默认：true）。","channels.signal.configWrites":"允许 Signal 响应通道事件/命令写入配置（默认：true）。","channels.imessage.configWrites":"允许 iMessage 响应通道事件/命令写入配置（默认：true）。","channels.msteams.configWrites":"允许 Microsoft Teams 响应通道事件/命令写入配置（默认：true）。","channels.discord.commands.native":'覆盖 Discord 的原生命令（bool 或 "auto"）。',"channels.discord.commands.nativeSkills":'覆盖 Discord 的原生技能命令（bool 或 "auto"）。',"channels.telegram.commands.native":'覆盖 Telegram 的原生命令（bool 或 "auto"）。',"channels.telegram.commands.nativeSkills":'覆盖 Telegram 的原生技能命令（bool 或 "auto"）。',"channels.slack.commands.native":'覆盖 Slack 的原生命令（bool 或 "auto"）。',"channels.slack.commands.nativeSkills":'覆盖 Slack 的原生技能命令（bool 或 "auto"）。',"session.agentToAgent.maxPingPongTurns":"请求者和目标之间的最大回复轮数（0–5）。","channels.telegram.customCommands":"额外的 Telegram 机器人菜单命令（与原生命令合并；冲突被忽略）。","messages.ackReaction":"用于确认入站消息的表情符号反应（空则禁用）。","messages.ackReactionScope":'何时发送确认反应（"group-mentions"、"group-all"、"direct"、"all"）。',"messages.inbound.debounceMs":"批处理来自同一发送者的快速入站消息的防抖窗口（毫秒）（0 以禁用）。","channels.telegram.dmPolicy":'直接消息访问控制（推荐 "pairing"）。"open" 需要 channels.telegram.allowFrom=["*"]。',"channels.telegram.streamMode":"Telegram 回复的草稿流模式（off | partial | block）。与块流分离；需要私有主题 + sendMessageDraft。","channels.telegram.draftChunk.minChars":'当 channels.telegram.streamMode="block" 时，发出 Telegram 草稿更新前的最小字符数（默认：200）。',"channels.telegram.draftChunk.maxChars":'当 channels.telegram.streamMode="block" 时，Telegram 草稿更新块的目标最大大小（默认：800；限制为 channels.telegram.textChunkLimit）。',"channels.telegram.draftChunk.breakPreference":"Telegram 草稿块的首选断点（paragraph | newline | sentence）。默认：paragraph。","channels.telegram.retry.attempts":"出站 Telegram API 调用的最大重试次数（默认：3）。","channels.telegram.retry.minDelayMs":"Telegram 出站调用的最小重试延迟（毫秒）。","channels.telegram.retry.maxDelayMs":"Telegram 出站调用的最大重试延迟上限（毫秒）。","channels.telegram.retry.jitter":"应用于 Telegram 重试延迟的抖动因子（0-1）。","channels.telegram.network.autoSelectFamily":"覆盖 Telegram 的 Node autoSelectFamily（true=启用，false=禁用）。","channels.telegram.timeoutSeconds":"Telegram API 请求中止前的最大秒数（默认：500 per grammY）。","channels.whatsapp.dmPolicy":'直接消息访问控制（推荐 "pairing"）。"open" 需要 channels.whatsapp.allowFrom=["*"]。',"channels.whatsapp.selfChatMode":"同手机设置（机器人使用您的个人 WhatsApp 号码）。","channels.whatsapp.debounceMs":"批处理来自同一发送者的快速连续消息的防抖窗口（毫秒）（0 以禁用）。","channels.signal.dmPolicy":'直接消息访问控制（推荐 "pairing"）。"open" 需要 channels.signal.allowFrom=["*"]。',"channels.imessage.dmPolicy":'直接消息访问控制（推荐 "pairing"）。"open" 需要 channels.imessage.allowFrom=["*"]。',"channels.bluebubbles.dmPolicy":'直接消息访问控制（推荐 "pairing"）。"open" 需要 channels.bluebubbles.allowFrom=["*"]。',"channels.discord.dm.policy":'直接消息访问控制（推荐 "pairing"）。"open" 需要 channels.discord.dm.allowFrom=["*"]。',"channels.discord.retry.attempts":"出站 Discord API 调用的最大重试次数（默认：3）。","channels.discord.retry.minDelayMs":"Discord 出站调用的最小重试延迟（毫秒）。","channels.discord.retry.maxDelayMs":"Discord 出站调用的最大重试延迟上限（毫秒）。","channels.discord.retry.jitter":"应用于 Discord 重试延迟的抖动因子（0-1）。","channels.discord.maxLinesPerMessage":"每个 Discord 消息的软最大行数（默认：17）。","channels.discord.intents.presence":"启用 Guild Presences 特权意图。还必须在 Discord 开发者门户中启用。允许跟踪用户活动（例如 Spotify）。默认：false。","channels.discord.intents.guildMembers":"启用 Guild Members 特权意图。还必须在 Discord 开发者门户中启用。默认：false。","channels.discord.pluralkit.enabled":"解析 PluralKit 代理消息并将系统成员视为不同的发送者。","channels.discord.pluralkit.token":"用于解析私有系统或成员的可选 PluralKit 令牌。","channels.slack.dm.policy":'直接消息访问控制（推荐 "pairing"）。"open" 需要 channels.slack.dm.allowFrom=["*"]。'}};function Ye(e,t){const n=Va(),s=Bh[n];for(const a of Fh(e)){const o=s[a];if(o)return o}return t}function Hh(e){const t=Yt(e),n=e.map(a=>typeof a=="number"?"*":a).join("."),s=n.replace(/\.\*/g,"[]");return[t,n,s]}const zh={en:{"meta.lastTouchedVersion":"Config Last Touched Version","meta.lastTouchedAt":"Config Last Touched At","update.channel":"Update Channel","update.checkOnStart":"Update Check on Start","diagnostics.enabled":"Diagnostics Enabled","diagnostics.flags":"Diagnostics Flags","diagnostics.otel.enabled":"OpenTelemetry Enabled","diagnostics.otel.endpoint":"OpenTelemetry Endpoint","diagnostics.otel.protocol":"OpenTelemetry Protocol","diagnostics.otel.headers":"OpenTelemetry Headers","diagnostics.otel.serviceName":"OpenTelemetry Service Name","diagnostics.otel.traces":"OpenTelemetry Traces Enabled","diagnostics.otel.metrics":"OpenTelemetry Metrics Enabled","diagnostics.otel.logs":"OpenTelemetry Logs Enabled","diagnostics.otel.sampleRate":"OpenTelemetry Trace Sample Rate","diagnostics.otel.flushIntervalMs":"OpenTelemetry Flush Interval (ms)","diagnostics.cacheTrace.enabled":"Cache Trace Enabled","diagnostics.cacheTrace.filePath":"Cache Trace File Path","diagnostics.cacheTrace.includeMessages":"Cache Trace Include Messages","diagnostics.cacheTrace.includePrompt":"Cache Trace Include Prompt","diagnostics.cacheTrace.includeSystem":"Cache Trace Include System","agents.list.*.identity.avatar":"Identity Avatar","agents.list.*.skills":"Agent Skill Filter","gateway.remote.url":"Remote Gateway URL","gateway.remote.sshTarget":"Remote Gateway SSH Target","gateway.remote.sshIdentity":"Remote Gateway SSH Identity","gateway.remote.token":"Remote Gateway Token","gateway.remote.password":"Remote Gateway Password","gateway.remote.tlsFingerprint":"Remote Gateway TLS Fingerprint","gateway.auth.token":"Gateway Token","gateway.auth.password":"Gateway Password","tools.media.image.enabled":"Enable Image Understanding","tools.media.image.maxBytes":"Image Understanding Max Bytes","tools.media.image.maxChars":"Image Understanding Max Chars","tools.media.image.prompt":"Image Understanding Prompt","tools.media.image.timeoutSeconds":"Image Understanding Timeout (sec)","tools.media.image.attachments":"Image Understanding Attachment Policy","tools.media.image.models":"Image Understanding Models","tools.media.image.scope":"Image Understanding Scope","tools.media.models":"Media Understanding Shared Models","tools.media.concurrency":"Media Understanding Concurrency","tools.media.audio.enabled":"Enable Audio Understanding","tools.media.audio.maxBytes":"Audio Understanding Max Bytes","tools.media.audio.maxChars":"Audio Understanding Max Chars","tools.media.audio.prompt":"Audio Understanding Prompt","tools.media.audio.timeoutSeconds":"Audio Understanding Timeout (sec)","tools.media.audio.language":"Audio Understanding Language","tools.media.audio.attachments":"Audio Understanding Attachment Policy","tools.media.audio.models":"Audio Understanding Models","tools.media.audio.scope":"Audio Understanding Scope","tools.media.video.enabled":"Enable Video Understanding","tools.media.video.maxBytes":"Video Understanding Max Bytes","tools.media.video.maxChars":"Video Understanding Max Chars","tools.media.video.prompt":"Video Understanding Prompt","tools.media.video.timeoutSeconds":"Video Understanding Timeout (sec)","tools.media.video.attachments":"Video Understanding Attachment Policy","tools.media.video.models":"Video Understanding Models","tools.media.video.scope":"Video Understanding Scope","tools.links.enabled":"Enable Link Understanding","tools.links.maxLinks":"Link Understanding Max Links","tools.links.timeoutSeconds":"Link Understanding Timeout (sec)","tools.links.models":"Link Understanding Models","tools.links.scope":"Link Understanding Scope","tools.profile":"Tool Profile","tools.alsoAllow":"Tool Allowlist Additions","agents.list[].tools.profile":"Agent Tool Profile","agents.list[].tools.alsoAllow":"Agent Tool Allowlist Additions","tools.byProvider":"Tool Policy by Provider","agents.list[].tools.byProvider":"Agent Tool Policy by Provider","tools.exec.applyPatch.enabled":"Enable apply_patch","tools.exec.applyPatch.allowModels":"apply_patch Model Allowlist","tools.exec.notifyOnExit":"Exec Notify On Exit","tools.exec.approvalRunningNoticeMs":"Exec Approval Running Notice (ms)","tools.exec.host":"Exec Host","tools.exec.security":"Exec Security","tools.exec.ask":"Exec Ask","tools.exec.node":"Exec Node Binding","tools.exec.pathPrepend":"Exec PATH Prepend","tools.exec.safeBins":"Exec Safe Bins","tools.message.allowCrossContextSend":"Allow Cross-Context Messaging","tools.message.crossContext.allowWithinProvider":"Allow Cross-Context (Same Provider)","tools.message.crossContext.allowAcrossProviders":"Allow Cross-Context (Across Providers)","tools.message.crossContext.marker.enabled":"Cross-Context Marker","tools.message.crossContext.marker.prefix":"Cross-Context Marker Prefix","tools.message.crossContext.marker.suffix":"Cross-Context Marker Suffix","tools.message.broadcast.enabled":"Enable Message Broadcast","tools.web.search.enabled":"Enable Web Search Tool","tools.web.search.provider":"Web Search Provider","tools.web.search.apiKey":"Brave Search API Key","tools.web.search.maxResults":"Web Search Max Results","tools.web.search.timeoutSeconds":"Web Search Timeout (sec)","tools.web.search.cacheTtlMinutes":"Web Search Cache TTL (min)","tools.web.fetch.enabled":"Enable Web Fetch Tool","tools.web.fetch.maxChars":"Web Fetch Max Chars","tools.web.fetch.timeoutSeconds":"Web Fetch Timeout (sec)","tools.web.fetch.cacheTtlMinutes":"Web Fetch Cache TTL (min)","tools.web.fetch.maxRedirects":"Web Fetch Max Redirects","tools.web.fetch.userAgent":"Web Fetch User-Agent","gateway.controlUi.basePath":"Control UI Base Path","gateway.controlUi.root":"Control UI Assets Root","gateway.controlUi.allowedOrigins":"Control UI Allowed Origins","gateway.controlUi.allowInsecureAuth":"Allow Insecure Control UI Auth","gateway.controlUi.dangerouslyDisableDeviceAuth":"Dangerously Disable Control UI Device Auth","gateway.http.endpoints.chatCompletions.enabled":"OpenAI Chat Completions Endpoint","gateway.reload.mode":"Config Reload Mode","gateway.reload.debounceMs":"Config Reload Debounce (ms)","gateway.nodes.browser.mode":"Gateway Node Browser Mode","gateway.nodes.browser.node":"Gateway Node Browser Pin","gateway.nodes.allowCommands":"Gateway Node Allowlist (Extra Commands)","gateway.nodes.denyCommands":"Gateway Node Denylist","nodeHost.browserProxy.enabled":"Node Browser Proxy Enabled","nodeHost.browserProxy.allowProfiles":"Node Browser Proxy Allowed Profiles","skills.load.watch":"Watch Skills","skills.load.watchDebounceMs":"Skills Watch Debounce (ms)","agents.defaults.workspace":"Workspace","agents.defaults.repoRoot":"Repo Root","agents.defaults.bootstrapMaxChars":"Bootstrap Max Chars","agents.defaults.envelopeTimezone":"Envelope Timezone","agents.defaults.envelopeTimestamp":"Envelope Timestamp","agents.defaults.envelopeElapsed":"Envelope Elapsed","agents.defaults.memorySearch":"Memory Search","agents.defaults.memorySearch.enabled":"Enable Memory Search","agents.defaults.memorySearch.sources":"Memory Search Sources","agents.defaults.memorySearch.extraPaths":"Extra Memory Paths","agents.defaults.memorySearch.experimental.sessionMemory":"Memory Search Session Index (Experimental)","agents.defaults.memorySearch.provider":"Memory Search Provider","agents.defaults.memorySearch.remote.baseUrl":"Remote Embedding Base URL","agents.defaults.memorySearch.remote.apiKey":"Remote Embedding API Key","agents.defaults.memorySearch.remote.headers":"Remote Embedding Headers","agents.defaults.memorySearch.remote.batch.concurrency":"Remote Batch Concurrency","agents.defaults.memorySearch.model":"Memory Search Model","agents.defaults.memorySearch.fallback":"Memory Search Fallback","agents.defaults.memorySearch.local.modelPath":"Local Embedding Model Path","agents.defaults.memorySearch.store.path":"Memory Search Index Path","agents.defaults.memorySearch.store.vector.enabled":"Memory Search Vector Index","agents.defaults.memorySearch.store.vector.extensionPath":"Memory Search Vector Extension Path","agents.defaults.memorySearch.chunking.tokens":"Memory Chunk Tokens","agents.defaults.memorySearch.chunking.overlap":"Memory Chunk Overlap Tokens","agents.defaults.memorySearch.sync.onSessionStart":"Index on Session Start","agents.defaults.memorySearch.sync.onSearch":"Index on Search (Lazy)","agents.defaults.memorySearch.sync.watch":"Watch Memory Files","agents.defaults.memorySearch.sync.watchDebounceMs":"Memory Watch Debounce (ms)","agents.defaults.memorySearch.sync.sessions.deltaBytes":"Session Delta Bytes","agents.defaults.memorySearch.sync.sessions.deltaMessages":"Session Delta Messages","agents.defaults.memorySearch.query.maxResults":"Memory Search Max Results","agents.defaults.memorySearch.query.minScore":"Memory Search Min Score","agents.defaults.memorySearch.query.hybrid.enabled":"Memory Search Hybrid","agents.defaults.memorySearch.query.hybrid.vectorWeight":"Memory Search Vector Weight","agents.defaults.memorySearch.query.hybrid.textWeight":"Memory Search Text Weight","agents.defaults.memorySearch.query.hybrid.candidateMultiplier":"Memory Search Hybrid Candidate Multiplier","agents.defaults.memorySearch.cache.enabled":"Memory Search Embedding Cache","agents.defaults.memorySearch.cache.maxEntries":"Memory Search Embedding Cache Max Entries",memory:"Memory","memory.backend":"Memory Backend","memory.citations":"Memory Citations Mode","memory.qmd.command":"QMD Binary","memory.qmd.includeDefaultMemory":"QMD Include Default Memory","memory.qmd.paths":"QMD Extra Paths","memory.qmd.paths.path":"QMD Path","memory.qmd.paths.pattern":"QMD Path Pattern","memory.qmd.paths.name":"QMD Path Name","memory.qmd.sessions.enabled":"QMD Session Indexing","memory.qmd.sessions.exportDir":"QMD Session Export Directory","memory.qmd.sessions.retentionDays":"QMD Session Retention (days)","memory.qmd.update.interval":"QMD Update Interval","memory.qmd.update.debounceMs":"QMD Update Debounce (ms)","memory.qmd.update.onBoot":"QMD Update on Startup","memory.qmd.update.embedInterval":"QMD Embed Interval","memory.qmd.limits.maxResults":"QMD Max Results","memory.qmd.limits.maxSnippetChars":"QMD Max Snippet Chars","memory.qmd.limits.maxInjectedChars":"QMD Max Injected Chars","memory.qmd.limits.timeoutMs":"QMD Search Timeout (ms)","memory.qmd.scope":"QMD Surface Scope","auth.profiles":"Auth Profiles","auth.order":"Auth Profile Order","auth.cooldowns.billingBackoffHours":"Billing Backoff (hours)","auth.cooldowns.billingBackoffHoursByProvider":"Billing Backoff Overrides","auth.cooldowns.billingMaxHours":"Billing Backoff Cap (hours)","auth.cooldowns.failureWindowHours":"Failover Window (hours)","agents.defaults.models":"Models","agents.defaults.model.primary":"Primary Model","agents.defaults.model.fallbacks":"Model Fallbacks","agents.defaults.imageModel.primary":"Image Model","agents.defaults.imageModel.fallbacks":"Image Model Fallbacks","agents.defaults.humanDelay.mode":"Human Delay Mode","agents.defaults.humanDelay.minMs":"Human Delay Min (ms)","agents.defaults.humanDelay.maxMs":"Human Delay Max (ms)","agents.defaults.cliBackends":"CLI Backends","commands.native":"Native Commands","commands.nativeSkills":"Native Skill Commands","commands.text":"Text Commands","commands.bash":"Allow Bash Chat Command","commands.bashForegroundMs":"Bash Foreground Window (ms)","commands.config":"Allow /config","commands.debug":"Allow /debug","commands.restart":"Allow Restart","commands.useAccessGroups":"Use Access Groups","commands.ownerAllowFrom":"Command Owners","ui.seamColor":"Accent Color","ui.assistant.name":"Assistant Name","ui.assistant.avatar":"Assistant Avatar","browser.evaluateEnabled":"Browser Evaluate Enabled","browser.snapshotDefaults":"Browser Snapshot Defaults","browser.snapshotDefaults.mode":"Browser Snapshot Mode","browser.remoteCdpTimeoutMs":"Remote CDP Timeout (ms)","browser.remoteCdpHandshakeTimeoutMs":"Remote CDP Handshake Timeout (ms)","session.dmScope":"DM Session Scope","session.agentToAgent.maxPingPongTurns":"Agent-to-Agent Ping-Pong Turns","messages.ackReaction":"Ack Reaction Emoji","messages.ackReactionScope":"Ack Reaction Scope","messages.inbound.debounceMs":"Inbound Message Debounce (ms)","talk.apiKey":"Talk API Key","channels.whatsapp":"WhatsApp","channels.telegram":"Telegram","channels.telegram.customCommands":"Telegram Custom Commands","channels.discord":"Discord","channels.slack":"Slack","channels.mattermost":"Mattermost","channels.signal":"Signal","channels.imessage":"iMessage","channels.bluebubbles":"BlueBubbles","channels.msteams":"MS Teams","channels.telegram.botToken":"Telegram Bot Token","channels.telegram.dmPolicy":"Telegram DM Policy","channels.telegram.streamMode":"Telegram Draft Stream Mode","channels.telegram.draftChunk.minChars":"Telegram Draft Chunk Min Chars","channels.telegram.draftChunk.maxChars":"Telegram Draft Chunk Max Chars","channels.telegram.draftChunk.breakPreference":"Telegram Draft Chunk Break Preference","channels.telegram.retry.attempts":"Telegram Retry Attempts","channels.telegram.retry.minDelayMs":"Telegram Retry Min Delay (ms)","channels.telegram.retry.maxDelayMs":"Telegram Retry Max Delay (ms)","channels.telegram.retry.jitter":"Telegram Retry Jitter","channels.telegram.network.autoSelectFamily":"Telegram autoSelectFamily","channels.telegram.timeoutSeconds":"Telegram API Timeout (seconds)","channels.telegram.capabilities.inlineButtons":"Telegram Inline Buttons","channels.whatsapp.dmPolicy":"WhatsApp DM Policy","channels.whatsapp.selfChatMode":"WhatsApp Self-Phone Mode","channels.whatsapp.debounceMs":"WhatsApp Message Debounce (ms)","channels.signal.dmPolicy":"Signal DM Policy","channels.imessage.dmPolicy":"iMessage DM Policy","channels.bluebubbles.dmPolicy":"BlueBubbles DM Policy","channels.discord.dm.policy":"Discord DM Policy","channels.discord.retry.attempts":"Discord Retry Attempts","channels.discord.retry.minDelayMs":"Discord Retry Min Delay (ms)","channels.discord.retry.maxDelayMs":"Discord Retry Max Delay (ms)","channels.discord.retry.jitter":"Discord Retry Jitter","channels.discord.maxLinesPerMessage":"Discord Max Lines Per Message","channels.discord.intents.presence":"Discord Presence Intent","channels.discord.intents.guildMembers":"Discord Guild Members Intent","channels.discord.pluralkit.enabled":"Discord PluralKit Enabled","channels.discord.pluralkit.token":"Discord PluralKit Token","channels.slack.dm.policy":"Slack DM Policy","channels.slack.allowBots":"Slack Allow Bot Messages","channels.discord.token":"Discord Bot Token","channels.slack.botToken":"Slack Bot Token","channels.slack.appToken":"Slack App Token","channels.slack.userToken":"Slack User Token","channels.slack.userTokenReadOnly":"Slack User Token Read Only","channels.slack.thread.historyScope":"Slack Thread History Scope","channels.slack.thread.inheritParent":"Slack Thread Parent Inheritance","channels.mattermost.botToken":"Mattermost Bot Token","channels.mattermost.baseUrl":"Mattermost Base URL","channels.mattermost.chatmode":"Mattermost Chat Mode","channels.mattermost.oncharPrefixes":"Mattermost Onchar Prefixes","channels.mattermost.requireMention":"Mattermost Require Mention","channels.signal.account":"Signal Account","channels.imessage.cliPath":"iMessage CLI Path","agents.list[].skills":"Agent Skill Filter","agents.list[].identity.avatar":"Agent Avatar","discovery.mdns.mode":"mDNS Discovery Mode","plugins.enabled":"Enable Plugins","plugins.allow":"Plugin Allowlist","plugins.deny":"Plugin Denylist","plugins.load.paths":"Plugin Load Paths","plugins.slots":"Plugin Slots","plugins.slots.memory":"Memory Plugin","plugins.entries":"Plugin Entries","plugins.entries.*.enabled":"Plugin Enabled","plugins.entries.*.config":"Plugin Config","plugins.installs":"Plugin Install Records","plugins.installs.*.source":"Plugin Install Source","plugins.installs.*.spec":"Plugin Install Spec","plugins.installs.*.sourcePath":"Plugin Install Source Path","plugins.installs.*.installPath":"Plugin Install Path","plugins.installs.*.version":"Plugin Install Version","plugins.installs.*.installedAt":"Plugin Install Time"},zh:{"meta.lastTouchedVersion":"配置最后触及版本","meta.lastTouchedAt":"配置最后触及时间","update.channel":"更新渠道","update.checkOnStart":"启动时检查更新","diagnostics.enabled":"诊断已启用","diagnostics.flags":"诊断标志","diagnostics.otel.enabled":"OpenTelemetry 已启用","diagnostics.otel.endpoint":"OpenTelemetry 端点","diagnostics.otel.protocol":"OpenTelemetry 协议","diagnostics.otel.headers":"OpenTelemetry 请求头","diagnostics.otel.serviceName":"OpenTelemetry 服务名","diagnostics.otel.traces":"OpenTelemetry 链路已启用","diagnostics.otel.metrics":"OpenTelemetry 指标已启用","diagnostics.otel.logs":"OpenTelemetry 日志已启用","diagnostics.otel.sampleRate":"OpenTelemetry 采样率","diagnostics.otel.flushIntervalMs":"OpenTelemetry 刷新间隔（毫秒）","diagnostics.cacheTrace.enabled":"缓存追踪已启用","diagnostics.cacheTrace.filePath":"缓存追踪文件路径","diagnostics.cacheTrace.includeMessages":"缓存追踪包含消息","diagnostics.cacheTrace.includePrompt":"缓存追踪包含提示","diagnostics.cacheTrace.includeSystem":"缓存追踪包含系统","agents.list.*.identity.avatar":"身份头像","agents.list.*.skills":"代理技能筛选","gateway.remote.url":"远程网关 URL","gateway.remote.sshTarget":"远程网关 SSH 目标","gateway.remote.sshIdentity":"远程网关 SSH 身份","gateway.remote.token":"远程网关令牌","gateway.remote.password":"远程网关密码","gateway.remote.tlsFingerprint":"远程网关 TLS 指纹","gateway.auth.token":"网关令牌","gateway.auth.password":"网关密码","tools.media.image.enabled":"启用图像理解","tools.media.image.maxBytes":"图像理解最大字节","tools.media.image.maxChars":"图像理解最大字符","tools.media.image.prompt":"图像理解提示","tools.media.image.timeoutSeconds":"图像理解超时（秒）","tools.media.image.attachments":"图像理解附件策略","tools.media.image.models":"图像理解模型","tools.media.image.scope":"图像理解范围","tools.media.models":"媒体理解共享模型","tools.media.concurrency":"媒体理解并发数","tools.media.audio.enabled":"启用音频理解","tools.media.audio.maxBytes":"音频理解最大字节","tools.media.audio.maxChars":"音频理解最大字符","tools.media.audio.prompt":"音频理解提示","tools.media.audio.timeoutSeconds":"音频理解超时（秒）","tools.media.audio.language":"音频理解语言","tools.media.audio.attachments":"音频理解附件策略","tools.media.audio.models":"音频理解模型","tools.media.audio.scope":"音频理解范围","tools.media.video.enabled":"启用视频理解","tools.media.video.maxBytes":"视频理解最大字节","tools.media.video.maxChars":"视频理解最大字符","tools.media.video.prompt":"视频理解提示","tools.media.video.timeoutSeconds":"视频理解超时（秒）","tools.media.video.attachments":"视频理解附件策略","tools.media.video.models":"视频理解模型","tools.media.video.scope":"视频理解范围","tools.links.enabled":"启用链接理解","tools.links.maxLinks":"链接理解最大数量","tools.links.timeoutSeconds":"链接理解超时（秒）","tools.links.models":"链接理解模型","tools.links.scope":"链接理解范围","tools.profile":"工具配置集","tools.alsoAllow":"工具允许列表附加","agents.list[].tools.profile":"代理工具配置集","agents.list[].tools.alsoAllow":"代理工具允许列表附加","tools.byProvider":"按提供方的工具策略","agents.list[].tools.byProvider":"代理按提供方的工具策略","tools.exec.applyPatch.enabled":"启用 apply_patch","tools.exec.applyPatch.allowModels":"apply_patch 模型允许列表","tools.exec.notifyOnExit":"Exec 退出时通知","tools.exec.approvalRunningNoticeMs":"Exec 审批运行提示（毫秒）","tools.exec.host":"Exec 主机","tools.exec.security":"Exec 安全","tools.exec.ask":"Exec 询问","tools.exec.node":"Exec 节点绑定","tools.exec.pathPrepend":"Exec PATH 前置","tools.exec.safeBins":"Exec 安全二进制","tools.message.allowCrossContextSend":"允许跨上下文发送","tools.message.crossContext.allowWithinProvider":"允许跨上下文（同提供方）","tools.message.crossContext.allowAcrossProviders":"允许跨上下文（跨提供方）","tools.message.crossContext.marker.enabled":"跨上下文标记","tools.message.crossContext.marker.prefix":"跨上下文标记前缀","tools.message.crossContext.marker.suffix":"跨上下文标记后缀","tools.message.broadcast.enabled":"启用消息广播","tools.web.search.enabled":"启用网页搜索工具","tools.web.search.provider":"网页搜索提供方","tools.web.search.apiKey":"Brave 搜索 API 密钥","tools.web.search.maxResults":"网页搜索最大结果数","tools.web.search.timeoutSeconds":"网页搜索超时（秒）","tools.web.search.cacheTtlMinutes":"网页搜索缓存 TTL（分钟）","tools.web.fetch.enabled":"启用网页抓取工具","tools.web.fetch.maxChars":"网页抓取最大字符","tools.web.fetch.timeoutSeconds":"网页抓取超时（秒）","tools.web.fetch.cacheTtlMinutes":"网页抓取缓存 TTL（分钟）","tools.web.fetch.maxRedirects":"网页抓取最大重定向","tools.web.fetch.userAgent":"网页抓取 User-Agent","gateway.controlUi.basePath":"控制台 UI 基础路径","gateway.controlUi.root":"控制台 UI 资源根目录","gateway.controlUi.allowedOrigins":"控制台 UI 允许来源","gateway.controlUi.allowInsecureAuth":"允许控制台 UI 非安全认证","gateway.controlUi.dangerouslyDisableDeviceAuth":"危险：禁用控制台 UI 设备认证","gateway.http.endpoints.chatCompletions.enabled":"OpenAI 对话补全端点","gateway.reload.mode":"配置重载模式","gateway.reload.debounceMs":"配置重载防抖（毫秒）","gateway.nodes.browser.mode":"网关节点浏览器模式","gateway.nodes.browser.node":"网关节点浏览器固定","gateway.nodes.allowCommands":"网关节点允许列表（额外命令）","gateway.nodes.denyCommands":"网关节点拒绝列表","nodeHost.browserProxy.enabled":"节点浏览器代理已启用","nodeHost.browserProxy.allowProfiles":"节点浏览器代理允许配置集","skills.load.watch":"监听技能","skills.load.watchDebounceMs":"技能监听防抖（毫秒）","agents.defaults.workspace":"工作区","agents.defaults.repoRoot":"仓库根目录","agents.defaults.bootstrapMaxChars":"引导最大字符","agents.defaults.envelopeTimezone":"信封时区","agents.defaults.envelopeTimestamp":"信封时间戳","agents.defaults.envelopeElapsed":"信封耗时","agents.defaults.memorySearch":"记忆搜索","agents.defaults.memorySearch.enabled":"启用记忆搜索","agents.defaults.memorySearch.sources":"记忆搜索来源","agents.defaults.memorySearch.extraPaths":"记忆搜索额外路径","agents.defaults.memorySearch.experimental.sessionMemory":"记忆搜索会话索引（实验）","agents.defaults.memorySearch.provider":"记忆搜索提供方","agents.defaults.memorySearch.remote.baseUrl":"远程嵌入 Base URL","agents.defaults.memorySearch.remote.apiKey":"远程嵌入 API 密钥","agents.defaults.memorySearch.remote.headers":"远程嵌入请求头","agents.defaults.memorySearch.remote.batch.concurrency":"远程批处理并发数","agents.defaults.memorySearch.model":"记忆搜索模型","agents.defaults.memorySearch.fallback":"记忆搜索回退","agents.defaults.memorySearch.local.modelPath":"本地嵌入模型路径","agents.defaults.memorySearch.store.path":"记忆搜索索引路径","agents.defaults.memorySearch.store.vector.enabled":"记忆搜索向量索引","agents.defaults.memorySearch.store.vector.extensionPath":"记忆搜索向量扩展路径","agents.defaults.memorySearch.chunking.tokens":"记忆分块词数","agents.defaults.memorySearch.chunking.overlap":"记忆分块重叠词数","agents.defaults.memorySearch.sync.onSessionStart":"会话开始时建索引","agents.defaults.memorySearch.sync.onSearch":"搜索时建索引（懒加载）","agents.defaults.memorySearch.sync.watch":"监听记忆文件","agents.defaults.memorySearch.sync.watchDebounceMs":"记忆监听防抖（毫秒）","agents.defaults.memorySearch.sync.sessions.deltaBytes":"会话增量字节","agents.defaults.memorySearch.sync.sessions.deltaMessages":"会话增量消息","agents.defaults.memorySearch.query.maxResults":"记忆搜索最大结果数","agents.defaults.memorySearch.query.minScore":"记忆搜索最低分","agents.defaults.memorySearch.query.hybrid.enabled":"记忆搜索混合模式","agents.defaults.memorySearch.query.hybrid.vectorWeight":"记忆搜索向量权重","agents.defaults.memorySearch.query.hybrid.textWeight":"记忆搜索文本权重","agents.defaults.memorySearch.query.hybrid.candidateMultiplier":"记忆搜索混合候选倍数","agents.defaults.memorySearch.cache.enabled":"记忆搜索嵌入缓存","agents.defaults.memorySearch.cache.maxEntries":"记忆搜索嵌入缓存最大条数",memory:"记忆","memory.backend":"记忆后端","memory.citations":"记忆引用模式","memory.qmd.command":"QMD 可执行文件","memory.qmd.includeDefaultMemory":"QMD 包含默认记忆","memory.qmd.paths":"QMD 额外路径","memory.qmd.paths.path":"QMD 路径","memory.qmd.paths.pattern":"QMD 路径模式","memory.qmd.paths.name":"QMD 路径名称","memory.qmd.sessions.enabled":"QMD 会话索引","memory.qmd.sessions.exportDir":"QMD 会话导出目录","memory.qmd.sessions.retentionDays":"QMD 会话保留（天）","memory.qmd.update.interval":"QMD 更新间隔","memory.qmd.update.debounceMs":"QMD 更新防抖（毫秒）","memory.qmd.update.onBoot":"QMD 启动时更新","memory.qmd.update.embedInterval":"QMD 嵌入间隔","memory.qmd.limits.maxResults":"QMD 最大结果数","memory.qmd.limits.maxSnippetChars":"QMD 最大片段字符","memory.qmd.limits.maxInjectedChars":"QMD 最大注入字符","memory.qmd.limits.timeoutMs":"QMD 搜索超时（毫秒）","memory.qmd.scope":"QMD 作用范围","auth.profiles":"认证配置集","auth.order":"认证配置顺序","auth.cooldowns.billingBackoffHours":"计费退避（小时）","auth.cooldowns.billingBackoffHoursByProvider":"计费退避覆盖","auth.cooldowns.billingMaxHours":"计费退避上限（小时）","auth.cooldowns.failureWindowHours":"故障窗口（小时）","agents.defaults.models":"模型","agents.defaults.model.primary":"主模型","agents.defaults.model.fallbacks":"模型回退","agents.defaults.imageModel.primary":"图像模型","agents.defaults.imageModel.fallbacks":"图像模型回退","agents.defaults.humanDelay.mode":"人工延迟模式","agents.defaults.humanDelay.minMs":"人工延迟最小（毫秒）","agents.defaults.humanDelay.maxMs":"人工延迟最大（毫秒）","agents.defaults.cliBackends":"CLI 后端","commands.native":"原生命令","commands.nativeSkills":"原生技能命令","commands.text":"文本命令","commands.bash":"允许 Bash 聊天命令","commands.bashForegroundMs":"Bash 前台窗口（毫秒）","commands.config":"允许 /config","commands.debug":"允许 /debug","commands.restart":"允许重启","commands.useAccessGroups":"使用访问组","commands.ownerAllowFrom":"命令所有者","ui.seamColor":"强调色","ui.assistant.name":"助手名称","ui.assistant.avatar":"助手头像","browser.evaluateEnabled":"浏览器执行已启用","browser.snapshotDefaults":"浏览器快照默认","browser.snapshotDefaults.mode":"浏览器快照模式","browser.remoteCdpTimeoutMs":"远程 CDP 超时（毫秒）","browser.remoteCdpHandshakeTimeoutMs":"远程 CDP 握手超时（毫秒）","session.dmScope":"私信会话范围","session.agentToAgent.maxPingPongTurns":"代理间乒乓轮数","messages.ackReaction":"确认反应表情","messages.ackReactionScope":"确认反应范围","messages.inbound.debounceMs":"入站消息防抖（毫秒）","talk.apiKey":"语音 API 密钥","channels.whatsapp":"WhatsApp","channels.telegram":"Telegram","channels.telegram.customCommands":"Telegram 自定义命令","channels.discord":"Discord","channels.slack":"Slack","channels.mattermost":"Mattermost","channels.signal":"Signal","channels.imessage":"iMessage","channels.bluebubbles":"BlueBubbles","channels.msteams":"MS Teams","channels.telegram.botToken":"Telegram 机器人令牌","channels.telegram.dmPolicy":"Telegram 私信策略","channels.telegram.streamMode":"Telegram 草稿流模式","channels.telegram.draftChunk.minChars":"Telegram 草稿块最小字符","channels.telegram.draftChunk.maxChars":"Telegram 草稿块最大字符","channels.telegram.draftChunk.breakPreference":"Telegram 草稿块断行偏好","channels.telegram.retry.attempts":"Telegram 重试次数","channels.telegram.retry.minDelayMs":"Telegram 重试最小延迟（毫秒）","channels.telegram.retry.maxDelayMs":"Telegram 重试最大延迟（毫秒）","channels.telegram.retry.jitter":"Telegram 重试抖动","channels.telegram.network.autoSelectFamily":"Telegram autoSelectFamily","channels.telegram.timeoutSeconds":"Telegram API 超时（秒）","channels.telegram.capabilities.inlineButtons":"Telegram 内联按钮","channels.whatsapp.dmPolicy":"WhatsApp 私信策略","channels.whatsapp.selfChatMode":"WhatsApp 自聊模式","channels.whatsapp.debounceMs":"WhatsApp 消息防抖（毫秒）","channels.signal.dmPolicy":"Signal 私信策略","channels.imessage.dmPolicy":"iMessage 私信策略","channels.bluebubbles.dmPolicy":"BlueBubbles 私信策略","channels.discord.dm.policy":"Discord 私信策略","channels.discord.retry.attempts":"Discord 重试次数","channels.discord.retry.minDelayMs":"Discord 重试最小延迟（毫秒）","channels.discord.retry.maxDelayMs":"Discord 重试最大延迟（毫秒）","channels.discord.retry.jitter":"Discord 重试抖动","channels.discord.maxLinesPerMessage":"Discord 每消息最大行数","channels.discord.intents.presence":"Discord 在线状态意图","channels.discord.intents.guildMembers":"Discord 频道成员意图","channels.discord.pluralkit.enabled":"Discord PluralKit 已启用","channels.discord.pluralkit.token":"Discord PluralKit 令牌","channels.slack.dm.policy":"Slack 私信策略","channels.slack.allowBots":"Slack 允许机器人消息","channels.discord.token":"Discord 机器人令牌","channels.slack.botToken":"Slack 机器人令牌","channels.slack.appToken":"Slack 应用令牌","channels.slack.userToken":"Slack 用户令牌","channels.slack.userTokenReadOnly":"Slack 用户令牌只读","channels.slack.thread.historyScope":"Slack 线程历史范围","channels.slack.thread.inheritParent":"Slack 线程继承父级","channels.mattermost.botToken":"Mattermost 机器人令牌","channels.mattermost.baseUrl":"Mattermost Base URL","channels.mattermost.chatmode":"Mattermost 聊天模式","channels.mattermost.oncharPrefixes":"Mattermost 触发前缀","channels.mattermost.requireMention":"Mattermost 需要 @ 提及","channels.signal.account":"Signal 账号","channels.imessage.cliPath":"iMessage CLI 路径","agents.list[].skills":"代理技能筛选","agents.list[].identity.avatar":"代理头像","discovery.mdns.mode":"mDNS 发现模式","plugins.enabled":"启用插件","plugins.allow":"插件允许列表","plugins.deny":"插件拒绝列表","plugins.load.paths":"插件加载路径","plugins.slots":"插件槽位","plugins.slots.memory":"记忆插件","plugins.entries":"插件条目","plugins.entries.*.enabled":"插件已启用","plugins.entries.*.config":"插件配置","plugins.installs":"插件安装记录","plugins.installs.*.source":"插件安装来源","plugins.installs.*.spec":"插件安装规格","plugins.installs.*.sourcePath":"插件安装源路径","plugins.installs.*.installPath":"插件安装路径","plugins.installs.*.version":"插件安装版本","plugins.installs.*.installedAt":"插件安装时间"}};function Ze(e,t){const n=Va(),s=zh[n];for(const a of Hh(e)){const o=s[a];if(o)return o}return t}const Kh=new Set(["title","description","default","nullable"]);function qh(e){return Object.keys(e??{}).filter(n=>!Kh.has(n)).length===0}function Oa(e){if(e===void 0)return"";try{return JSON.stringify(e,null,2)??""}catch{return""}}const Mn={chevronDown:r`
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,plus:r`
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  `,minus:r`
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  `,trash:r`
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polyline points="3 6 5 6 21 6"></polyline>
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    </svg>
  `,edit:r`
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
    </svg>
  `};function at(e){const{schema:t,value:n,path:s,hints:a,unsupported:o,disabled:l,onPatch:d}=e,u=e.showLabel??!0,f=Je(t),g=Se(s,a),m=Ze(s,g?.label??t.title??He(String(s.at(-1)))),v=Ye(s,g?.help??t.description??""),k=Yt(s);if(o.has(k))return r`<div class="cfg-field cfg-field--error">
      <div class="cfg-field__label">${m}</div>
      <div class="cfg-field__error">${i("configUnsupportedSchemaNode")}</div>
    </div>`;if(t.anyOf||t.oneOf){const p=(t.anyOf??t.oneOf??[]).filter(E=>!(E.type==="null"||Array.isArray(E.type)&&E.type.includes("null")));if(p.length===1)return at({...e,schema:p[0]});const h=E=>{if(E.const!==void 0)return E.const;if(E.enum&&E.enum.length===1)return E.enum[0]},b=p.map(h),S=b.every(E=>E!==void 0);if(S&&b.length>0&&b.length<=5){const E=n??t.default;return r`
        <div class="cfg-field">
          ${u?r`<label class="cfg-field__label">${m}</label>`:y}
          ${v?r`<div class="cfg-field__help">${v}</div>`:y}
          <div class="cfg-segmented">
            ${b.map(T=>r`
              <button
                type="button"
                class="cfg-segmented__btn ${T===E||String(T)===String(E)?"active":""}"
                ?disabled=${l}
                @click=${()=>d(s,T)}
              >
                ${String(T)}
              </button>
            `)}
          </div>
        </div>
      `}if(S&&b.length>5)return gl({...e,options:b,value:n??t.default});const C=new Set(p.map(E=>Je(E)).filter(Boolean)),A=new Set([...C].map(E=>E==="integer"?"number":E));if([...A].every(E=>["string","number","boolean"].includes(E))){const E=A.has("string"),T=A.has("number");if(A.has("boolean")&&A.size===1)return at({...e,schema:{...t,type:"boolean",anyOf:void 0,oneOf:void 0}});if(E||T)return pl({...e,inputType:T&&!E?"number":"text"})}}if(t.enum){const c=t.enum;if(c.length<=5){const p=n??t.default;return r`
        <div class="cfg-field">
          ${u?r`<label class="cfg-field__label">${m}</label>`:y}
          ${v?r`<div class="cfg-field__help">${v}</div>`:y}
          <div class="cfg-segmented">
            ${c.map(h=>r`
              <button
                type="button"
                class="cfg-segmented__btn ${h===p||String(h)===String(p)?"active":""}"
                ?disabled=${l}
                @click=${()=>d(s,h)}
              >
                ${String(h)}
              </button>
            `)}
          </div>
        </div>
      `}return gl({...e,options:c,value:n??t.default})}if(f==="object")return Vh(e);if(f==="array")return Gh(e);if(f==="boolean"){const c=typeof n=="boolean"?n:typeof t.default=="boolean"?t.default:!1;return r`
      <label class="cfg-toggle-row ${l?"disabled":""}">
        <div class="cfg-toggle-row__content">
          <span class="cfg-toggle-row__label">${m}</span>
          ${v?r`<span class="cfg-toggle-row__help">${v}</span>`:y}
        </div>
        <div class="cfg-toggle">
          <input
            type="checkbox"
            .checked=${c}
            ?disabled=${l}
            @change=${p=>d(s,p.target.checked)}
          />
          <span class="cfg-toggle__track"></span>
        </div>
      </label>
    `}return f==="number"||f==="integer"?Wh(e):f==="string"?pl({...e,inputType:"text"}):r`
    <div class="cfg-field cfg-field--error">
      <div class="cfg-field__label">${m}</div>
      <div class="cfg-field__error">Unsupported type: ${f}. Use Raw mode.</div>
    </div>
  `}function pl(e){const{schema:t,value:n,path:s,hints:a,disabled:o,onPatch:l,inputType:d}=e,u=e.showLabel??!0,f=Se(s,a),g=Ze(s,f?.label??t.title??He(String(s.at(-1)))),m=Ye(s,f?.help??t.description??""),v=f?.sensitive??Oh(s),k=f?.placeholder??(v?"••••":t.default!==void 0?`Default: ${String(t.default)}`:""),c=n??"";return r`
    <div class="cfg-field">
      ${u?r`<label class="cfg-field__label">${g}</label>`:y}
      ${m?r`<div class="cfg-field__help">${m}</div>`:y}
      <div class="cfg-input-wrap">
        <input
          type=${v?"password":d}
          class="cfg-input"
          placeholder=${k}
          .value=${c==null?"":String(c)}
          ?disabled=${o}
          @input=${p=>{const h=p.target.value;if(d==="number"){if(h.trim()===""){l(s,void 0);return}const b=Number(h);l(s,Number.isNaN(b)?h:b);return}l(s,h)}}
          @change=${p=>{if(d==="number")return;const h=p.target.value;l(s,h.trim())}}
        />
        ${t.default!==void 0?r`
          <button
            type="button"
            class="cfg-input__reset"
            title="Reset to default"
            ?disabled=${o}
            @click=${()=>l(s,t.default)}
          >↺</button>
        `:y}
      </div>
    </div>
  `}function jh(e){const{schema:t,value:n,path:s,hints:a,disabled:o,onPatch:l}=e,d=e.showLabel??!0,u=Se(s,a),f=Ze(s,u?.label??t.title??He(String(s.at(-1)))),g=Ye(s,u?.help??t.description??""),m=n??t.default;let v;if(typeof m=="string")try{v=JSON.stringify(JSON.parse(m),null,2)}catch{v=m}else v=Oa(m);return r`
    <div class="cfg-field">
      ${d?r`<label class="cfg-field__label">${f}</label>`:y}
      ${g?r`<div class="cfg-field__help">${g}</div>`:y}
      <div class="cfg-input-wrap cfg-input-wrap--textarea">
        <textarea
          class="cfg-textarea cfg-textarea--json"
          rows="6"
          placeholder="{}"
          .value=${v}
          ?disabled=${o}
          @input=${k=>{const c=k.target.value;if(c.trim()===""){l(s,void 0);return}try{l(s,JSON.parse(c))}catch{}}}
          @change=${k=>{const c=k.target.value.trim();if(!c){l(s,void 0);return}try{l(s,JSON.parse(c))}catch{const p=k.target;p.value=Oa(n??t.default)}}}
        ></textarea>
        ${t.default!==void 0?r`
          <button
            type="button"
            class="cfg-input__reset"
            title="Reset to default"
            ?disabled=${o}
            @click=${()=>l(s,t.default)}
          >↺</button>
        `:y}
      </div>
    </div>
  `}function Wh(e){const{schema:t,value:n,path:s,hints:a,disabled:o,onPatch:l}=e,d=e.showLabel??!0,u=Se(s,a),f=Ze(s,u?.label??t.title??He(String(s.at(-1)))),g=Ye(s,u?.help??t.description??""),m=n??t.default??"",v=typeof m=="number"?m:0;return r`
    <div class="cfg-field">
      ${d?r`<label class="cfg-field__label">${f}</label>`:y}
      ${g?r`<div class="cfg-field__help">${g}</div>`:y}
      <div class="cfg-number">
        <button
          type="button"
          class="cfg-number__btn"
          ?disabled=${o}
          @click=${()=>l(s,v-1)}
        >−</button>
        <input
          type="number"
          class="cfg-number__input"
          .value=${m==null?"":String(m)}
          ?disabled=${o}
          @input=${k=>{const c=k.target.value,p=c===""?void 0:Number(c);l(s,p)}}
        />
        <button
          type="button"
          class="cfg-number__btn"
          ?disabled=${o}
          @click=${()=>l(s,v+1)}
        >+</button>
      </div>
    </div>
  `}function gl(e){const{schema:t,value:n,path:s,hints:a,disabled:o,options:l,onPatch:d}=e,u=e.showLabel??!0,f=Se(s,a),g=Ze(s,f?.label??t.title??He(String(s.at(-1)))),m=Ye(s,f?.help??t.description??""),v=n??t.default,k=l.findIndex(p=>p===v||String(p)===String(v)),c="__unset__";return r`
    <div class="cfg-field">
      ${u?r`<label class="cfg-field__label">${g}</label>`:y}
      ${m?r`<div class="cfg-field__help">${m}</div>`:y}
      <select
        class="cfg-select"
        ?disabled=${o}
        .value=${k>=0?String(k):c}
        @change=${p=>{const h=p.target.value;d(s,h===c?void 0:l[Number(h)])}}
      >
        <option value=${c}>Select...</option>
        ${l.map((p,h)=>r`
          <option value=${String(h)}>${String(p)}</option>
        `)}
      </select>
    </div>
  `}function Vh(e){const{schema:t,value:n,path:s,hints:a,unsupported:o,disabled:l,onPatch:d}=e,u=t.properties??{};if(Object.keys(u).length===0&&t.additionalProperties===!0)return jh({schema:{...t,format:"json"},value:n,path:s,hints:a,disabled:l,showLabel:e.showLabel,onPatch:d});const g=Se(s,a),m=Ze(s,g?.label??t.title??He(String(s.at(-1)))),v=Ye(s,g?.help??t.description??""),k=n??t.default,c=k&&typeof k=="object"&&!Array.isArray(k)?k:{},h=Object.entries(u).toSorted((A,E)=>{const T=Se([...s,A[0]],a)?.order??0,_=Se([...s,E[0]],a)?.order??0;return T!==_?T-_:A[0].localeCompare(E[0])}),b=new Set(Object.keys(u)),S=t.additionalProperties,C=!!S&&typeof S=="object";return s.length===1?r`
      <div class="cfg-fields">
        ${h.map(([A,E])=>at({schema:E,value:c[A],path:[...s,A],hints:a,unsupported:o,disabled:l,onPatch:d}))}
        ${C?ml({schema:S,value:c,path:s,hints:a,unsupported:o,disabled:l,reservedKeys:b,onPatch:d}):y}
      </div>
    `:r`
    <details class="cfg-object" open>
      <summary class="cfg-object__header">
        <span class="cfg-object__title">${m}</span>
        <span class="cfg-object__chevron">${Mn.chevronDown}</span>
      </summary>
      ${v?r`<div class="cfg-object__help">${v}</div>`:y}
      <div class="cfg-object__content">
        ${h.map(([A,E])=>at({schema:E,value:c[A],path:[...s,A],hints:a,unsupported:o,disabled:l,onPatch:d}))}
        ${C?ml({schema:S,value:c,path:s,hints:a,unsupported:o,disabled:l,reservedKeys:b,onPatch:d}):y}
      </div>
    </details>
  `}function Gh(e){const{schema:t,value:n,path:s,hints:a,unsupported:o,disabled:l,onPatch:d}=e,u=e.showLabel??!0,f=Se(s,a),g=Ze(s,f?.label??t.title??He(String(s.at(-1)))),m=Ye(s,f?.help??t.description??""),v=Array.isArray(t.items)?t.items[0]:t.items;if(!v)return r`
      <div class="cfg-field cfg-field--error">
        <div class="cfg-field__label">${g}</div>
        <div class="cfg-field__error">Unsupported array schema. Use Raw mode.</div>
      </div>
    `;const k=Array.isArray(n)?n:Array.isArray(t.default)?t.default:[];return r`
    <div class="cfg-array">
      <div class="cfg-array__header">
        ${u?r`<span class="cfg-array__label">${g}</span>`:y}
        <span class="cfg-array__count">${k.length} item${k.length!==1?"s":""}</span>
        <button
          type="button"
          class="cfg-array__add"
          ?disabled=${l}
          @click=${()=>{const c=[...k,Sc(v)];d(s,c)}}
        >
          <span class="cfg-array__add-icon">${Mn.plus}</span>
          Add
        </button>
      </div>
      ${m?r`<div class="cfg-array__help">${m}</div>`:y}

      ${k.length===0?r`
              <div class="cfg-array__empty">No items yet. Click "Add" to create one.</div>
            `:r`
        <div class="cfg-array__items">
          ${k.map((c,p)=>r`
            <div class="cfg-array__item">
              <div class="cfg-array__item-header">
                <span class="cfg-array__item-index">#${p+1}</span>
                <button
                  type="button"
                  class="cfg-array__item-remove"
                  title="Remove item"
                  ?disabled=${l}
                  @click=${()=>{const h=[...k];h.splice(p,1),d(s,h)}}
                >
                  ${Mn.trash}
                </button>
              </div>
              <div class="cfg-array__item-content">
                ${at({schema:v,value:c,path:[...s,p],hints:a,unsupported:o,disabled:l,showLabel:!1,onPatch:d})}
              </div>
            </div>
          `)}
        </div>
      `}
    </div>
  `}function ml(e){const{schema:t,value:n,path:s,hints:a,unsupported:o,disabled:l,reservedKeys:d,onPatch:u}=e,f=qh(t),g=Object.entries(n??{}).filter(([m])=>!d.has(m));return r`
    <div class="cfg-map">
      <div class="cfg-map__header">
        <span class="cfg-map__label">Custom entries</span>
        <button
          type="button"
          class="cfg-map__add"
          ?disabled=${l}
          @click=${()=>{const m={...n};let v=1,k=`custom-${v}`;for(;k in m;)v+=1,k=`custom-${v}`;m[k]=f?{}:Sc(t),u(s,m)}}
        >
          <span class="cfg-map__add-icon">${Mn.plus}</span>
          Add Entry
        </button>
      </div>

      ${g.length===0?r`
              <div class="cfg-map__empty">No custom entries.</div>
            `:r`
        <div class="cfg-map__items">
          ${g.map(([m,v])=>{const k=[...s,m],c=Oa(v);return r`
              <div class="cfg-map__item">
                <div class="cfg-map__item-key">
                  <input
                    type="text"
                    class="cfg-input cfg-input--sm"
                    placeholder="Key"
                    .value=${m}
                    ?disabled=${l}
                    @change=${p=>{const h=p.target.value.trim();if(!h||h===m)return;const b={...n};h in b||(b[h]=b[m],delete b[m],u(s,b))}}
                  />
                </div>
                <div class="cfg-map__item-value">
                  ${f?r`
                        <textarea
                          class="cfg-textarea cfg-textarea--sm"
                          placeholder="JSON value"
                          rows="2"
                          .value=${c}
                          ?disabled=${l}
                          @change=${p=>{const h=p.target,b=h.value.trim();if(!b){u(k,void 0);return}try{u(k,JSON.parse(b))}catch{h.value=c}}}
                        ></textarea>
                      `:at({schema:t,value:v,path:k,hints:a,unsupported:o,disabled:l,showLabel:!1,onPatch:u})}
                </div>
                <button
                  type="button"
                  class="cfg-map__item-remove"
                  title="Remove entry"
                  ?disabled=${l}
                  @click=${()=>{const p={...n};delete p[m],u(s,p)}}
                >
                  ${Mn.trash}
                </button>
              </div>
            `})}
        </div>
      `}
    </div>
  `}const fl={env:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="3"></circle>
      <path
        d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
      ></path>
    </svg>
  `,update:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
  `,agents:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path
        d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"
      ></path>
      <circle cx="8" cy="14" r="1"></circle>
      <circle cx="16" cy="14" r="1"></circle>
    </svg>
  `,auth:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  `,channels:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  `,messages:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  `,commands:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <polyline points="4 17 10 11 4 5"></polyline>
      <line x1="12" y1="19" x2="20" y2="19"></line>
    </svg>
  `,hooks:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    </svg>
  `,skills:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      ></polygon>
    </svg>
  `,tools:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      ></path>
    </svg>
  `,gateway:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path
        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      ></path>
    </svg>
  `,wizard:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M15 4V2"></path>
      <path d="M15 16v-2"></path>
      <path d="M8 9h2"></path>
      <path d="M20 9h2"></path>
      <path d="M17.8 11.8 19 13"></path>
      <path d="M15 9h0"></path>
      <path d="M17.8 6.2 19 5"></path>
      <path d="m3 21 9-9"></path>
      <path d="M12.2 6.2 11 5"></path>
    </svg>
  `,meta:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M12 20h9"></path>
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
    </svg>
  `,logging:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  `,browser:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="4"></circle>
      <line x1="21.17" y1="8" x2="12" y2="8"></line>
      <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
      <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
    </svg>
  `,ui:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="3" y1="9" x2="21" y2="9"></line>
      <line x1="9" y1="21" x2="9" y2="9"></line>
    </svg>
  `,models:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path
        d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
      ></path>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
      <line x1="12" y1="22.08" x2="12" y2="12"></line>
    </svg>
  `,bindings:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
      <line x1="6" y1="6" x2="6.01" y2="6"></line>
      <line x1="6" y1="18" x2="6.01" y2="18"></line>
    </svg>
  `,broadcast:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"></path>
      <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"></path>
      <circle cx="12" cy="12" r="2"></circle>
      <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"></path>
      <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"></path>
    </svg>
  `,audio:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M9 18V5l12-2v13"></path>
      <circle cx="6" cy="18" r="3"></circle>
      <circle cx="18" cy="16" r="3"></circle>
    </svg>
  `,session:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  `,cron:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  `,web:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path
        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      ></path>
    </svg>
  `,discovery:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  `,canvasHost:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <circle cx="8.5" cy="8.5" r="1.5"></circle>
      <polyline points="21 15 16 10 5 21"></polyline>
    </svg>
  `,talk:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
      <line x1="12" y1="19" x2="12" y2="23"></line>
      <line x1="8" y1="23" x2="16" y2="23"></line>
    </svg>
  `,plugins:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M12 2v6"></path>
      <path d="m4.93 10.93 4.24 4.24"></path>
      <path d="M2 12h6"></path>
      <path d="m4.93 13.07 4.24-4.24"></path>
      <path d="M12 22v-6"></path>
      <path d="m19.07 13.07-4.24-4.24"></path>
      <path d="M22 12h-6"></path>
      <path d="m19.07 10.93-4.24 4.24"></path>
    </svg>
  `,default:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
    </svg>
  `};function hl(e){return fl[e]??fl.default}function Qh(e,t,n){if(!n)return!0;const s=n.toLowerCase(),a=Ga(e);return e.toLowerCase().includes(s)||a&&(a.label.toLowerCase().includes(s)||a.description.toLowerCase().includes(s))?!0:mn(t,s)}function mn(e,t){if(e.title?.toLowerCase().includes(t)||e.description?.toLowerCase().includes(t)||e.enum?.some(s=>String(s).toLowerCase().includes(t)))return!0;if(e.properties){for(const[s,a]of Object.entries(e.properties))if(s.toLowerCase().includes(t)||mn(a,t))return!0}if(e.items){const s=Array.isArray(e.items)?e.items:[e.items];for(const a of s)if(a&&mn(a,t))return!0}if(e.additionalProperties&&typeof e.additionalProperties=="object"&&mn(e.additionalProperties,t))return!0;const n=e.anyOf??e.oneOf??e.allOf;if(n){for(const s of n)if(s&&mn(s,t))return!0}return!1}function Jh(e){if(!e.schema)return r`
      <div class="muted">${i("configSchemaUnavailable")}</div>
    `;const t=e.schema,n=e.value??{};if(Je(t)!=="object"||!t.properties)return r`
      <div class="callout danger">${i("configUnsupportedSchema")}</div>
    `;const s=new Set(e.unsupportedPaths??[]),a=t.properties,o=e.searchQuery??"",l=e.activeSection,d=e.activeSubsection??null,f=Object.entries(a).toSorted((m,v)=>{const k=Se([m[0]],e.uiHints)?.order??50,c=Se([v[0]],e.uiHints)?.order??50;return k!==c?k-c:m[0].localeCompare(v[0])}).filter(([m,v])=>!(l&&m!==l||o&&!Qh(m,v,o)));let g=null;if(l&&d&&f.length===1){const m=f[0]?.[1];m&&Je(m)==="object"&&m.properties&&m.properties[d]&&(g={sectionKey:l,subsectionKey:d,schema:m.properties[d]})}return f.length===0?r`
      <div class="config-empty">
        <div class="config-empty__icon">${ee.search}</div>
        <div class="config-empty__text">
          ${o?`${i("configNoSettingsMatchPrefix")}${o}${i("configNoSettingsMatchSuffix")}`:i("configNoSettingsInSection")}
        </div>
      </div>
    `:r`
    <div class="config-form config-form--modern">
      ${g?(()=>{const{sectionKey:m,subsectionKey:v,schema:k}=g,c=Se([m,v],e.uiHints),p=Ze([m,v],c?.label??k.title??He(v)),h=Ye([m,v],c?.help??k.description??""),b=n[m],S=b&&typeof b=="object"?b[v]:void 0,C=`config-section-${m}-${v}`;return r`
              <section class="config-section-card" id=${C}>
                <div class="config-section-card__header">
                  <span class="config-section-card__icon">${hl(m)}</span>
                  <div class="config-section-card__titles">
                    <h3 class="config-section-card__title">${p}</h3>
                    ${h?r`<p class="config-section-card__desc">${h}</p>`:y}
                  </div>
                </div>
                <div class="config-section-card__content">
                  ${at({schema:k,value:S,path:[m,v],hints:e.uiHints,unsupported:s,disabled:e.disabled??!1,showLabel:!1,onPatch:e.onPatch})}
                </div>
              </section>
            `})():f.map(([m,v])=>{const k=Ga(m),c=k.label||k.description?k:{label:m.charAt(0).toUpperCase()+m.slice(1),description:v.description??""};return r`
              <section class="config-section-card" id="config-section-${m}">
                <div class="config-section-card__header">
                  <span class="config-section-card__icon">${hl(m)}</span>
                  <div class="config-section-card__titles">
                    <h3 class="config-section-card__title">${c.label}</h3>
                    ${c.description?r`<p class="config-section-card__desc">${c.description}</p>`:y}
                  </div>
                </div>
                <div class="config-section-card__content">
                  ${at({schema:v,value:n[m],path:[m],hints:e.uiHints,unsupported:s,disabled:e.disabled??!1,showLabel:!1,onPatch:e.onPatch})}
                </div>
              </section>
            `})}
    </div>
  `}const Yh=new Set(["title","description","default","nullable"]);function Zh(e){return Object.keys(e??{}).filter(n=>!Yh.has(n)).length===0}function Ac(e){const t=e.filter(a=>a!=null),n=t.length!==e.length,s=[];for(const a of t)s.some(o=>Object.is(o,a))||s.push(a);return{enumValues:s,nullable:n}}function Xh(e){return!e||typeof e!="object"?{schema:null,unsupportedPaths:["<root>"]}:yn(e,[])}function yn(e,t){const n=new Set,s={...e},a=Yt(t)||"<root>";if(e.anyOf||e.oneOf||e.allOf){const d=ev(e,t);return d||{schema:e,unsupportedPaths:[a]}}const o=Array.isArray(e.type)&&e.type.includes("null"),l=Je(e)??(e.properties||e.additionalProperties?"object":void 0);if(s.type=l??e.type,s.nullable=o||e.nullable,s.enum){const{enumValues:d,nullable:u}=Ac(s.enum);s.enum=d,u&&(s.nullable=!0),d.length===0&&n.add(a)}if(l==="object"){const d=e.properties??{},u={};for(const[g,m]of Object.entries(d)){const v=yn(m,[...t,g]);v.schema&&(u[g]=v.schema);for(const k of v.unsupportedPaths)n.add(k)}s.properties=u;const f=Object.keys(d).length===0;if(e.additionalProperties===!0)f||n.add(a);else if(e.additionalProperties===!1)s.additionalProperties=!1;else if(e.additionalProperties&&typeof e.additionalProperties=="object"&&!Zh(e.additionalProperties)){const g=yn(e.additionalProperties,[...t,"*"]);s.additionalProperties=g.schema??e.additionalProperties,g.unsupportedPaths.length>0&&n.add(a)}}else if(l==="array"){const d=Array.isArray(e.items)?e.items[0]:e.items;if(!d)n.add(a);else{const u=yn(d,[...t,"*"]);s.items=u.schema??d,u.unsupportedPaths.length>0&&n.add(a)}}else l!=="string"&&l!=="number"&&l!=="integer"&&l!=="boolean"&&!s.enum&&n.add(a);return{schema:s,unsupportedPaths:Array.from(n)}}function ev(e,t){if(e.allOf)return null;const n=e.anyOf??e.oneOf;if(!n)return null;const s=[],a=[];let o=!1;for(const d of n){if(!d||typeof d!="object")return null;if(Array.isArray(d.enum)){const{enumValues:u,nullable:f}=Ac(d.enum);s.push(...u),f&&(o=!0);continue}if("const"in d){if(d.const==null){o=!0;continue}s.push(d.const);continue}if(Je(d)==="null"){o=!0;continue}a.push(d)}if(s.length>0&&a.length===0){const d=[];for(const u of s)d.some(f=>Object.is(f,u))||d.push(u);return{schema:{...e,enum:d,nullable:o,anyOf:void 0,oneOf:void 0,allOf:void 0},unsupportedPaths:[]}}if(a.length===1){const d=yn(a[0],t);return d.schema&&(d.schema.nullable=o||d.schema.nullable),d}const l=new Set(["string","number","integer","boolean"]);return a.length>0&&s.length===0&&a.every(d=>d.type&&l.has(String(d.type)))?{schema:{...e,nullable:o},unsupportedPaths:[]}:null}const Fa={all:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="3" width="7" height="7"></rect>
      <rect x="14" y="3" width="7" height="7"></rect>
      <rect x="14" y="14" width="7" height="7"></rect>
      <rect x="3" y="14" width="7" height="7"></rect>
    </svg>
  `,env:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="3"></circle>
      <path
        d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
      ></path>
    </svg>
  `,update:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
  `,agents:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path
        d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"
      ></path>
      <circle cx="8" cy="14" r="1"></circle>
      <circle cx="16" cy="14" r="1"></circle>
    </svg>
  `,auth:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  `,channels:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  `,messages:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  `,commands:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="4 17 10 11 4 5"></polyline>
      <line x1="12" y1="19" x2="20" y2="19"></line>
    </svg>
  `,hooks:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    </svg>
  `,skills:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      ></polygon>
    </svg>
  `,tools:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      ></path>
    </svg>
  `,gateway:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path
        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      ></path>
    </svg>
  `,wizard:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M15 4V2"></path>
      <path d="M15 16v-2"></path>
      <path d="M8 9h2"></path>
      <path d="M20 9h2"></path>
      <path d="M17.8 11.8 19 13"></path>
      <path d="M15 9h0"></path>
      <path d="M17.8 6.2 19 5"></path>
      <path d="m3 21 9-9"></path>
      <path d="M12.2 6.2 11 5"></path>
    </svg>
  `,meta:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 20h9"></path>
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
    </svg>
  `,logging:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  `,browser:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="4"></circle>
      <line x1="21.17" y1="8" x2="12" y2="8"></line>
      <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
      <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
    </svg>
  `,ui:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="3" y1="9" x2="21" y2="9"></line>
      <line x1="9" y1="21" x2="9" y2="9"></line>
    </svg>
  `,models:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path
        d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
      ></path>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
      <line x1="12" y1="22.08" x2="12" y2="12"></line>
    </svg>
  `,bindings:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
      <line x1="6" y1="6" x2="6.01" y2="6"></line>
      <line x1="6" y1="18" x2="6.01" y2="18"></line>
    </svg>
  `,broadcast:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"></path>
      <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"></path>
      <circle cx="12" cy="12" r="2"></circle>
      <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"></path>
      <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"></path>
    </svg>
  `,audio:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M9 18V5l12-2v13"></path>
      <circle cx="6" cy="18" r="3"></circle>
      <circle cx="18" cy="16" r="3"></circle>
    </svg>
  `,session:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  `,cron:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  `,web:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path
        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      ></path>
    </svg>
  `,discovery:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  `,canvasHost:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <circle cx="8.5" cy="8.5" r="1.5"></circle>
      <polyline points="21 15 16 10 5 21"></polyline>
    </svg>
  `,talk:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
      <line x1="12" y1="19" x2="12" y2="23"></line>
      <line x1="8" y1="23" x2="16" y2="23"></line>
    </svg>
  `,plugins:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 2v6"></path>
      <path d="m4.93 10.93 4.24 4.24"></path>
      <path d="M2 12h6"></path>
      <path d="m4.93 13.07 4.24-4.24"></path>
      <path d="M12 22v-6"></path>
      <path d="m19.07 13.07-4.24-4.24"></path>
      <path d="M22 12h-6"></path>
      <path d="m19.07 10.93-4.24 4.24"></path>
    </svg>
  `,default:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
    </svg>
  `};function vl(){return[{key:"env",label:i("configEnv")},{key:"update",label:i("configUpdate")},{key:"agents",label:i("configAgents")},{key:"auth",label:i("configAuth")},{key:"channels",label:i("configChannels")},{key:"messages",label:i("configMessages")},{key:"commands",label:i("configCommands")},{key:"hooks",label:i("configHooks")},{key:"skills",label:i("configSkills")},{key:"tools",label:i("configTools")},{key:"gateway",label:i("configGateway")},{key:"wizard",label:i("configWizard")},{key:"meta",label:i("configMeta")},{key:"logging",label:i("configLogging")},{key:"browser",label:i("configBrowser")},{key:"ui",label:i("configUi")},{key:"models",label:i("configModels")},{key:"bindings",label:i("configBindings")},{key:"broadcast",label:i("configBroadcast")},{key:"audio",label:i("configAudio")},{key:"session",label:i("configSession")},{key:"cron",label:i("configCron")},{key:"web",label:i("configWeb")},{key:"discovery",label:i("configDiscovery")},{key:"canvasHost",label:i("configCanvasHost")},{key:"talk",label:i("configTalk")},{key:"plugins",label:i("configPlugins")}]}const yl="__all__";function bl(e){return Fa[e]??Fa.default}function tv(e,t){const n=Ga(e);return n||{label:t?.title??He(e),description:t?.description??""}}function nv(e){const{key:t,schema:n,uiHints:s}=e;if(!n||Je(n)!=="object"||!n.properties)return[];const a=Object.entries(n.properties).map(([o,l])=>{const d=Se([t,o],s),u=Ze([t,o],d?.label??l.title??He(o)),f=Ye([t,o],d?.help??l.description??""),g=d?.order??50;return{key:o,label:u,description:f,order:g}});return a.sort((o,l)=>o.order!==l.order?o.order-l.order:o.key.localeCompare(l.key)),a}function sv(e,t){if(!e||!t)return[];const n=[];function s(a,o,l){if(a===o)return;if(typeof a!=typeof o){n.push({path:l,from:a,to:o});return}if(typeof a!="object"||a===null||o===null){a!==o&&n.push({path:l,from:a,to:o});return}if(Array.isArray(a)&&Array.isArray(o)){JSON.stringify(a)!==JSON.stringify(o)&&n.push({path:l,from:a,to:o});return}const d=a,u=o,f=new Set([...Object.keys(d),...Object.keys(u)]);for(const g of f)s(d[g],u[g],l?`${l}.${g}`:g)}return s(e,t,""),n}function xl(e,t=40){let n;try{n=JSON.stringify(e)??String(e)}catch{n=String(e)}return n.length<=t?n:n.slice(0,t-3)+"..."}function av(e){const t=e.valid==null?"unknown":e.valid?"valid":"invalid",n=Xh(e.schema),s=n.schema?n.unsupportedPaths.length>0:!1,a=n.schema?.properties??{},o=vl().filter(T=>T.key in a),l=new Set(vl().map(T=>T.key)),d=Object.keys(a).filter(T=>!l.has(T)).map(T=>({key:T,label:T.charAt(0).toUpperCase()+T.slice(1)})),u=[...o,...d],f=e.activeSection&&n.schema&&Je(n.schema)==="object"?n.schema.properties?.[e.activeSection]:void 0,g=e.activeSection?tv(e.activeSection,f):null,m=e.activeSection?nv({key:e.activeSection,schema:f,uiHints:e.uiHints}):[],v=e.formMode==="form"&&!!e.activeSection&&m.length>0,k=e.activeSubsection===yl,c=e.searchQuery||k?null:e.activeSubsection??m[0]?.key??null,p=e.formMode==="form"?sv(e.originalValue,e.formValue):[],h=e.formMode==="raw"&&e.raw!==e.originalRaw,b=e.formMode==="form"?p.length>0:h,S=!!e.formValue&&!e.loading&&!!n.schema,C=e.connected&&!e.saving&&b&&(e.formMode==="raw"?!0:S),A=e.connected&&!e.applying&&!e.updating&&b&&(e.formMode==="raw"?!0:S),E=e.connected&&!e.applying&&!e.updating;return r`
    <div class="config-layout">
      <!-- Sidebar -->
      <aside class="config-sidebar">
        <div class="config-sidebar__header">
          <div class="config-sidebar__title">${i("configSettingsTitle")}</div>
          <span
            class="pill pill--sm ${t==="valid"?"pill--ok":t==="invalid"?"pill--danger":""}"
            >${i(t==="valid"?"configValidityValid":t==="invalid"?"configValidityInvalid":"configValidityUnknown")}</span
          >
        </div>

        <!-- Search -->
        <div class="config-search">
          <svg
            class="config-search__icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="M21 21l-4.35-4.35"></path>
          </svg>
          <input
            type="text"
            class="config-search__input"
            placeholder=${i("configSearchPlaceholder")}
            .value=${e.searchQuery}
            @input=${T=>e.onSearchChange(T.target.value)}
          />
          ${e.searchQuery?r`
                <button
                  class="config-search__clear"
                  @click=${()=>e.onSearchChange("")}
                >
                  ×
                </button>
              `:y}
        </div>

        <!-- Section nav -->
        <nav class="config-nav">
          <button
            class="config-nav__item ${e.activeSection===null?"active":""}"
            @click=${()=>e.onSectionChange(null)}
          >
            <span class="config-nav__icon">${Fa.all}</span>
            <span class="config-nav__label">${i("configAllSettings")}</span>
          </button>
          ${u.map(T=>r`
              <button
                class="config-nav__item ${e.activeSection===T.key?"active":""}"
                @click=${()=>e.onSectionChange(T.key)}
              >
                <span class="config-nav__icon"
                  >${bl(T.key)}</span
                >
                <span class="config-nav__label">${T.label}</span>
              </button>
            `)}
        </nav>
      </aside>

      <!-- Main content -->
      <main class="config-main">
        <!-- Action bar -->
        <div class="config-actions">
          <div class="config-actions__left">
            ${b?r`
                  <span class="config-changes-badge"
                    >${e.formMode==="raw"?i("configUnsavedChanges"):p.length===1?i("configOneUnsavedChange"):`${p.length} ${i("configUnsavedChangesLabel")}`}</span
                  >
                `:r`
                    <span class="config-status muted">${i("configNoChanges")}</span>
                  `}
          </div>
          <div class="config-actions__right">
            <button
              class="btn btn--sm"
              ?disabled=${e.loading}
              @click=${e.onReload}
            >
              ${e.loading?i("commonLoading"):i("commonReload")}
            </button>
            <button
              class="btn btn--sm primary"
              ?disabled=${!C}
              @click=${e.onSave}
            >
              ${e.saving?i("commonSaving"):i("commonSave")}
            </button>
            <button
              class="btn btn--sm"
              ?disabled=${!A}
              @click=${e.onApply}
            >
              ${e.applying?i("configApplying"):i("configApply")}
            </button>
            <button
              class="btn btn--sm"
              ?disabled=${!E}
              @click=${e.onUpdate}
            >
              ${e.updating?i("configUpdating"):i("configUpdateButton")}
            </button>
          </div>
        </div>

        <!-- Diff panel (form mode only - raw mode doesn't have granular diff) -->
        ${b&&e.formMode==="form"?r`
              <details class="config-diff">
                <summary class="config-diff__summary">
                  <span
                    >${i("configViewPrefix")}${p.length}
                    ${p.length===1?i("configPendingChange"):i("configPendingChanges")}</span
                  >
                  <svg
                    class="config-diff__chevron"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </summary>
                <div class="config-diff__content">
                  ${p.map(T=>r`
                      <div class="config-diff__item">
                        <div class="config-diff__path">${T.path}</div>
                        <div class="config-diff__values">
                          <span class="config-diff__from"
                            >${xl(T.from)}</span
                          >
                          <span class="config-diff__arrow">→</span>
                          <span class="config-diff__to"
                            >${xl(T.to)}</span
                          >
                        </div>
                      </div>
                    `)}
                </div>
              </details>
            `:y}
        ${g&&e.formMode==="form"?r`
              <div class="config-section-hero">
                <div class="config-section-hero__icon">
                  ${bl(e.activeSection??"")}
                </div>
                <div class="config-section-hero__text">
                  <div class="config-section-hero__title">
                    ${g.label}
                  </div>
                  ${g.description?r`<div class="config-section-hero__desc">
                        ${g.description}
                      </div>`:y}
                </div>
              </div>
            `:y}
        ${v?r`
              <div class="config-subnav">
                <button
                  class="config-subnav__item ${c===null?"active":""}"
                  @click=${()=>e.onSubsectionChange(yl)}
                >
                  ${i("configSubnavAll")}
                </button>
                ${m.map(T=>r`
                    <button
                      class="config-subnav__item ${c===T.key?"active":""}"
                      title=${T.description||T.label}
                      @click=${()=>e.onSubsectionChange(T.key)}
                    >
                      ${T.label}
                    </button>
                  `)}
              </div>
            `:y}

        <!-- Form content -->
        <div class="config-content">
          ${e.formMode==="form"?r`
                ${e.schemaLoading?r`
                        <div class="config-loading">
                          <div class="config-loading__spinner"></div>
                          <span>${i("configLoadingSchema")}</span>
                        </div>
                      `:Jh({schema:n.schema,uiHints:e.uiHints,value:e.formValue,disabled:e.loading||!e.formValue,unsupportedPaths:n.unsupportedPaths,onPatch:e.onFormPatch,searchQuery:e.searchQuery,activeSection:e.activeSection,activeSubsection:c})}
                ${s?r`
                        <div class="callout danger" style="margin-top: 12px">
                          ${i("configFormUnsafeWarning")}
                        </div>
                      `:y}
              `:r`
                <label class="field config-raw-field">
                  <span>${i("configRawJson5")}</span>
                  <textarea
                    .value=${e.raw}
                    @input=${T=>e.onRawChange(T.target.value)}
                  ></textarea>
                </label>
              `}
        </div>

        ${e.issues.length>0?r`<div class="callout danger" style="margin-top: 12px;">
              <pre class="code-block">
${JSON.stringify(e.issues,null,2)}</pre
              >
            </div>`:y}
      </main>
    </div>
  `}function ov(e,t,n,s){const a=Object.entries(e),o=(u,f)=>{const g=Object.keys(e),m=Object.values(e);g[u]=f;const v={};g.forEach((k,c)=>{v[k]=m[c]??""}),n(v)},l=(u,f)=>{const g=Object.keys(e),m=[...Object.values(e)];m[u]=f;const v={};g.forEach((k,c)=>{v[k]=m[c]??""}),n(v)},d=u=>{const f=Object.keys(e).filter((v,k)=>k!==u),g=Object.values(e).filter((v,k)=>k!==u),m={};f.forEach((v,k)=>{m[v]=g[k]??""}),n(m)};return r`
    ${a.length===0?r`
          <p class="env-vars__empty">${i("envVarsEmpty")}</p>
          <button class="btn btn--secondary" ?disabled=${!t} @click=${s}>
            ${i("envVarsAdd")}
          </button>
        `:r`
          <table class="env-vars__table">
            <thead>
              <tr>
                <th>${i("envVarsKey")}</th>
                <th>${i("envVarsValue")}</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              ${a.map(([u,f],g)=>r`
                  <tr>
                    <td>
                      <input
                        class="env-vars__input"
                        type="text"
                        .value=${u}
                        placeholder=${i("envVarsKeyPlaceholder")}
                        ?disabled=${!t}
                        @input=${m=>{const v=m.target;o(g,v.value)}}
                      />
                    </td>
                    <td>
                      <input
                        class="env-vars__input"
                        type="text"
                        .value=${f}
                        placeholder=${i("envVarsValuePlaceholder")}
                        ?disabled=${!t}
                        @input=${m=>{const v=m.target;l(g,v.value)}}
                      />
                    </td>
                    <td>
                      <button
                        class="btn btn--ghost env-vars__delete"
                        ?disabled=${!t}
                        @click=${()=>d(g)}
                        title=${i("envVarsDelete")}
                      >
                        ${i("envVarsDelete")}
                      </button>
                    </td>
                  </tr>
                `)}
            </tbody>
          </table>
          <button class="btn btn--secondary env-vars__add" ?disabled=${!t} @click=${s}>
            ${i("envVarsAdd")}
          </button>
        `}
  `}function iv(e){const{vars:t,dirty:n,loading:s,saving:a,connected:o,onVarsChange:l,onSave:d,onReload:u}=e,f=o&&n&&!a&&!s,g=()=>{l({...t,"":""})};return r`
    <div class="env-vars">
      <div class="env-vars__toolbar">
        <button
          class="btn btn--secondary"
          ?disabled=${s||!o}
          @click=${u}
          title=${i("overviewRefresh")}
        >
          ${s?"…":i("overviewRefresh")}
        </button>
        <button
          class="btn btn--primary"
          ?disabled=${!f}
          @click=${d}
          title=${i("envVarsSave")}
        >
          ${a?"…":i("envVarsSave")}
        </button>
      </div>
      ${n?r`<p class="env-vars__dirty">${i("configUnsavedChanges")}</p>`:y}

      <div class="env-vars__sections">
        <section class="env-vars__section card" style="margin-bottom: 16px;">
          <h3 class="card-title" style="margin-bottom: 8px;">${i("envVarsSection")}</h3>
          <p class="muted" style="font-size: 12px; margin-bottom: 12px;">${i("configEnvVarsDesc")}</p>
          <div class="env-vars__list">
            ${ov(t,o,l,g)}
          </div>
        </section>
      </div>
    </div>
  `}function Cc(e){return e?`${kn(e)} (${te(e)})`:"n/a"}function lv(e){if(e.totalTokens==null)return"n/a";const t=e.totalTokens??0,n=e.contextTokens??0;return n?`${t} / ${n}`:String(t)}function rv(e){if(e==null)return"";try{return JSON.stringify(e,null,2)}catch{return String(e)}}function cv(e){const t=e.schedule;if(t.kind==="at"){const n=Date.parse(t.at);return Number.isFinite(n)?`At ${kn(n)}`:`At ${t.at}`}return t.kind==="every"?`Every ${sr(t.everyMs)}`:`Cron ${t.expr}${t.tz?` (${t.tz})`:""}`}function dv(e){const t=["last",...e.channels.filter(Boolean)],n=e.form.deliveryChannel?.trim();n&&!t.includes(n)&&t.push(n);const s=new Set;return t.filter(a=>s.has(a)?!1:(s.add(a),!0))}function uv(e,t){if(t==="last")return i("cronLast");const n=e.channelMeta?.find(s=>s.id===t);return n?.label?n.label:e.channelLabels?.[t]??t}function pv(e){const t=dv(e);return r`
    <section class="grid grid-cols-2">
      <div class="card">
        <div class="card-title">${i("cronScheduler")}</div>
        <div class="card-sub">${i("cronSchedulerSub")}</div>
        <div class="stat-grid" style="margin-top: 16px;">
          <div class="stat">
            <div class="stat-label">${i("cronEnabled")}</div>
            <div class="stat-value">
              ${e.status?e.status.enabled?i("commonYes"):i("commonNo"):i("commonNA")}
            </div>
          </div>
          <div class="stat">
            <div class="stat-label">${i("cronJobs")}</div>
            <div class="stat-value">${e.status?.jobs??i("commonNA")}</div>
          </div>
          <div class="stat">
            <div class="stat-label">${i("overviewCronNext")}</div>
            <div class="stat-value">${Cc(e.status?.nextWakeAtMs??null)}</div>
          </div>
        </div>
        <div class="row" style="margin-top: 12px;">
          <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?i("commonRefreshing"):i("commonRefresh")}
          </button>
          ${e.error?r`<span class="muted">${e.error}</span>`:y}
        </div>
      </div>

      <div class="card">
        <div class="card-title">${i("cronNewJob")}</div>
        <div class="card-sub">${i("cronNewJobSub")}</div>
        <div class="form-grid" style="margin-top: 16px;">
          <label class="field">
            <span>${i("cronName")}</span>
            <input
              .value=${e.form.name}
              @input=${n=>e.onFormChange({name:n.target.value})}
            />
          </label>
          <label class="field">
            <span>${i("cronDescription")}</span>
            <input
              .value=${e.form.description}
              @input=${n=>e.onFormChange({description:n.target.value})}
            />
          </label>
          <label class="field">
            <span>${i("cronAgentId")}</span>
            <input
              .value=${e.form.agentId}
              @input=${n=>e.onFormChange({agentId:n.target.value})}
              placeholder="default"
            />
          </label>
          <label class="field checkbox">
            <span>${i("cronEnabled")}</span>
            <input
              type="checkbox"
              .checked=${e.form.enabled}
              @change=${n=>e.onFormChange({enabled:n.target.checked})}
            />
          </label>
          <label class="field">
            <span>${i("cronSchedule")}</span>
            <select
              .value=${e.form.scheduleKind}
              @change=${n=>e.onFormChange({scheduleKind:n.target.value})}
            >
              <option value="every">${i("cronEvery")}</option>
              <option value="at">${i("cronAt")}</option>
              <option value="cron">${i("cronCron")}</option>
            </select>
          </label>
        </div>
        ${mv(e)}
        <div class="form-grid" style="margin-top: 12px;">
          <label class="field">
            <span>${i("cronSession")}</span>
            <select
              .value=${e.form.sessionTarget}
              @change=${n=>e.onFormChange({sessionTarget:n.target.value})}
            >
              <option value="main">${i("cronMain")}</option>
              <option value="isolated">${i("cronIsolated")}</option>
            </select>
          </label>
          <label class="field">
            <span>${i("cronWakeMode")}</span>
            <select
              .value=${e.form.wakeMode}
              @change=${n=>e.onFormChange({wakeMode:n.target.value})}
            >
              <option value="next-heartbeat">${i("cronNextHeartbeat")}</option>
              <option value="now">${i("cronNow")}</option>
            </select>
          </label>
          <label class="field">
            <span>${i("cronPayload")}</span>
            <select
              .value=${e.form.payloadKind}
              @change=${n=>e.onFormChange({payloadKind:n.target.value})}
            >
              <option value="systemEvent">${i("cronSystemEvent")}</option>
              <option value="agentTurn">${i("cronAgentTurn")}</option>
            </select>
          </label>
        </div>
        <label class="field" style="margin-top: 12px;">
          <span>${e.form.payloadKind==="systemEvent"?i("cronSystemText"):i("cronAgentMessage")}${e.form.payloadKind==="agentTurn"?r`<span style="color: var(--danger-color);"> *</span>`:y}</span>
          <textarea
            .value=${e.form.payloadText}
            @input=${n=>e.onFormChange({payloadText:n.target.value})}
            rows="4"
            ?required=${e.form.payloadKind==="agentTurn"}
          ></textarea>
        </label>
        ${e.form.payloadKind==="agentTurn"?r`
                <div class="form-grid" style="margin-top: 12px;">
                  <label class="field">
                    <span>${i("cronDelivery")}</span>
                    <select
                      .value=${e.form.deliveryMode}
                      @change=${n=>e.onFormChange({deliveryMode:n.target.value})}
                    >
                      <option value="announce">${i("cronAnnounceSummary")}</option>
                      <option value="none">${i("cronNoneInternal")}</option>
                    </select>
                  </label>
                  <label class="field">
                    <span>${i("cronTimeoutSeconds")}</span>
                    <input
                      .value=${e.form.timeoutSeconds}
                      @input=${n=>e.onFormChange({timeoutSeconds:n.target.value})}
                    />
                  </label>
                  ${e.form.deliveryMode==="announce"?r`
                          <label class="field">
                            <span>${i("cronChannel")}</span>
                            <select
                              .value=${e.form.deliveryChannel||"last"}
                              @change=${n=>e.onFormChange({deliveryChannel:n.target.value})}
                            >
                              ${t.map(n=>r`<option value=${n}>
                                    ${uv(e,n)}
                                  </option>`)}
                            </select>
                          </label>
                          <label class="field">
                            <span>${i("cronTo")}</span>
                            <input
                              .value=${e.form.deliveryTo}
                              @input=${n=>e.onFormChange({deliveryTo:n.target.value})}
                              placeholder="+1555… or chat id"
                            />
                          </label>
                        `:y}
                </div>
              `:y}
        <div class="row" style="margin-top: 14px;">
          <button
            class="btn primary"
            ?disabled=${e.busy||e.form.payloadKind==="agentTurn"&&!e.form.payloadText.trim()}
            @click=${e.onAdd}
          >
            ${e.busy?i("commonSaving"):i("cronAddJob")}
          </button>
        </div>
      </div>
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="card-title">${i("cronJobsTitle")}</div>
      <div class="card-sub">${i("cronJobsSub")}</div>
      ${e.jobs.length===0?r`
              <div class="muted" style="margin-top: 12px">${i("cronNoJobsYet")}</div>
            `:r`
            <div class="list" style="margin-top: 12px;">
              ${e.jobs.map(n=>Mc(n,e,{mode:"config"}))}
            </div>
          `}
    </section>
  `}function gv(e){const t=e.runsJobId==null?void 0:e.jobs.find(s=>s.id===e.runsJobId),n=e.runs.toSorted((s,a)=>a.ts-s.ts);return r`
    <section class="grid grid-cols-2">
      <div class="card">
        <div class="card-title">${i("cronJobsTitle")}</div>
        <div class="card-sub">${i("cronJobsSub")}</div>
        ${e.jobs.length===0?r`<div class="muted" style="margin-top: 12px">${i("cronNoJobsYet")}</div>`:r`
                <div class="list" style="margin-top: 12px;">
                  ${e.jobs.map(s=>Mc(s,e,{mode:"history"}))}
                </div>
              `}
      </div>

      <div class="card">
        <div class="card-title">${i("cronRunHistory")}</div>
        <div class="card-sub">
          ${i("cronRunHistorySub")} ${t?.name??e.runsJobId??i("cronSelectJob")}.
        </div>
        ${e.runsJobId==null?r`<div class="muted" style="margin-top: 12px">${i("cronSelectJobToInspect")}</div>`:n.length===0?r`<div class="muted" style="margin-top: 12px">${i("cronNoRunsYet")}</div>`:r`
                  <div class="list" style="margin-top: 12px;">
                    ${n.map(s=>vv(s,e.basePath))}
                  </div>
                `}
      </div>
    </section>
  `}function mv(e){const t=e.form;return t.scheduleKind==="at"?r`
      <label class="field" style="margin-top: 12px;">
        <span>${i("cronRunAt")}</span>
        <input
          type="datetime-local"
          .value=${t.scheduleAt}
          @input=${n=>e.onFormChange({scheduleAt:n.target.value})}
        />
      </label>
    `:t.scheduleKind==="every"?r`
      <div class="form-grid" style="margin-top: 12px;">
        <label class="field">
          <span>${i("cronEvery")}</span>
          <input
            .value=${t.everyAmount}
            @input=${n=>e.onFormChange({everyAmount:n.target.value})}
          />
        </label>
        <label class="field">
          <span>${i("cronUnit")}</span>
          <select
            .value=${t.everyUnit}
            @change=${n=>e.onFormChange({everyUnit:n.target.value})}
          >
            <option value="minutes">${i("cronMinutes")}</option>
            <option value="hours">${i("cronHours")}</option>
            <option value="days">${i("cronDays")}</option>
          </select>
        </label>
      </div>
    `:r`
    <div class="form-grid" style="margin-top: 12px;">
      <label class="field">
        <span>${i("cronExpression")}</span>
        <input
          .value=${t.cronExpr}
          @input=${n=>e.onFormChange({cronExpr:n.target.value})}
        />
      </label>
      <label class="field">
        <span>Timezone (optional)</span>
        <input
          .value=${t.cronTz}
          @input=${n=>e.onFormChange({cronTz:n.target.value})}
        />
      </label>
    </div>
  `}function Mc(e,t,n){const a=`list-item list-item-clickable cron-job${t.runsJobId===e.id?" list-item-selected":""}`;return r`
    <div
      class=${a}
      @click=${()=>{if(n.mode==="config"){t.onShowHistory?.(e.id);return}t.onLoadRuns(e.id)}}
    >
      <div class="list-main">
        <div class="list-title">${e.name}</div>
        <div class="list-sub">${cv(e)}</div>
        ${fv(e)}
        ${e.agentId?r`<div class="muted cron-job-agent">Agent: ${e.agentId}</div>`:y}
      </div>
      <div class="list-meta">
        ${hv(e)}
      </div>
      <div class="cron-job-footer">
        <div class="chip-row cron-job-chips">
          <span class=${`chip ${e.enabled?"chip-ok":"chip-danger"}`}>
            ${e.enabled?"enabled":"disabled"}
          </span>
          <span class="chip">${e.sessionTarget}</span>
          <span class="chip">${e.wakeMode}</span>
        </div>
        <div class="row cron-job-actions">
          <button
            class="btn"
            ?disabled=${t.busy}
            @click=${o=>{o.stopPropagation(),t.onToggle(e,!e.enabled)}}
          >
            ${e.enabled?"Disable":"Enable"}
          </button>
          <button
            class="btn"
            ?disabled=${t.busy}
            @click=${o=>{o.stopPropagation(),t.onRun(e)}}
          >
            Run
          </button>
          <button
            class="btn"
            ?disabled=${t.busy}
            @click=${o=>{if(o.stopPropagation(),n.mode==="config"){t.onShowHistory?.(e.id);return}t.onLoadRuns(e.id)}}
          >
            History
          </button>
          <button
            class="btn danger"
            ?disabled=${t.busy}
            @click=${o=>{o.stopPropagation(),t.onRemove(e)}}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  `}function fv(e){if(e.payload.kind==="systemEvent")return r`<div class="cron-job-detail">
      <span class="cron-job-detail-label">System</span>
      <span class="muted cron-job-detail-value">${e.payload.text}</span>
    </div>`;const t=e.delivery,n=t?.channel||t?.to?` (${t.channel??"last"}${t.to?` -> ${t.to}`:""})`:"";return r`
    <div class="cron-job-detail">
      <span class="cron-job-detail-label">Prompt</span>
      <span class="muted cron-job-detail-value">${e.payload.message}</span>
    </div>
    ${t?r`<div class="cron-job-detail">
            <span class="cron-job-detail-label">Delivery</span>
            <span class="muted cron-job-detail-value">${t.mode}${n}</span>
          </div>`:y}
  `}function wl(e){return typeof e!="number"||!Number.isFinite(e)?"n/a":te(e)}function hv(e){const t=e.state?.lastStatus??"n/a",n=t==="ok"?"cron-job-status-ok":t==="error"?"cron-job-status-error":t==="skipped"?"cron-job-status-skipped":"cron-job-status-na",s=e.state?.nextRunAtMs,a=e.state?.lastRunAtMs;return r`
    <div class="cron-job-state">
      <div class="cron-job-state-row">
        <span class="cron-job-state-key">Status</span>
        <span class=${`cron-job-status-pill ${n}`}>${t}</span>
      </div>
      <div class="cron-job-state-row">
        <span class="cron-job-state-key">Next</span>
        <span class="cron-job-state-value" title=${kn(s)}>
          ${wl(s)}
        </span>
      </div>
      <div class="cron-job-state-row">
        <span class="cron-job-state-key">Last</span>
        <span class="cron-job-state-value" title=${kn(a)}>
          ${wl(a)}
        </span>
      </div>
    </div>
  `}function vv(e,t){const n=typeof e.sessionKey=="string"&&e.sessionKey.trim().length>0?`${Ln("chat",t)}?session=${encodeURIComponent(e.sessionKey)}`:null;return r`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${e.status}</div>
        <div class="list-sub">${e.summary??""}</div>
      </div>
      <div class="list-meta">
        <div>${kn(e.ts)}</div>
        <div class="muted">${e.durationMs??0}ms</div>
        ${n?r`<div><a class="session-link" href=${n}>Open run chat</a></div>`:y}
        ${e.error?r`<div class="muted">${e.error}</div>`:y}
      </div>
    </div>
  `}function yv(e){const n=(e.status&&typeof e.status=="object"?e.status.securityAudit:null)?.summary??null,s=n?.critical??0,a=n?.warn??0,o=n?.info??0,l=s>0?"danger":a>0?"warn":"success",d=s>0?`${s} ${i("debugCritical")}`:a>0?`${a} ${i("debugWarnings")}`:i("debugNoCritical");return r`
    <section class="grid grid-cols-2">
      <div class="card">
        <div class="row" style="justify-content: space-between;">
          <div>
            <div class="card-title">${i("debugSnapshots")}</div>
            <div class="card-sub">${i("debugSnapshotsSub")}</div>
          </div>
          <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?i("commonRefreshing"):i("commonRefresh")}
          </button>
        </div>
        <div class="stack" style="margin-top: 12px;">
          <div>
            <div class="muted">${i("debugStatus")}</div>
            ${n?r`<div class="callout ${l}" style="margin-top: 8px;">
                  ${i("debugSecurityAudit")}: ${d}${o>0?` · ${o} ${i("debugInfo")}`:""}. ${i("debugSecurityAuditDetails")}
                </div>`:y}
            <pre class="code-block">${JSON.stringify(e.status??{},null,2)}</pre>
          </div>
          <div>
            <div class="muted">${i("debugHealth")}</div>
            <pre class="code-block">${JSON.stringify(e.health??{},null,2)}</pre>
          </div>
          <div>
            <div class="muted">${i("debugLastHeartbeat")}</div>
            <pre class="code-block">${JSON.stringify(e.heartbeat??{},null,2)}</pre>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title">${i("debugManualRpc")}</div>
        <div class="card-sub">${i("debugManualRpcSub")}</div>
        <div class="form-grid" style="margin-top: 16px;">
          <label class="field">
            <span>${i("debugMethod")}</span>
            <input
              .value=${e.callMethod}
              @input=${u=>e.onCallMethodChange(u.target.value)}
              placeholder="system-presence"
            />
          </label>
          <label class="field">
            <span>${i("debugParams")} (JSON)</span>
            <textarea
              .value=${e.callParams}
              @input=${u=>e.onCallParamsChange(u.target.value)}
              rows="6"
            ></textarea>
          </label>
        </div>
        <div class="row" style="margin-top: 12px;">
          <button class="btn primary" @click=${e.onCall}>${i("debugCall")}</button>
        </div>
        ${e.callError?r`<div class="callout danger" style="margin-top: 12px;">
              ${e.callError}
            </div>`:y}
        ${e.callResult?r`<pre class="code-block" style="margin-top: 12px;">${e.callResult}</pre>`:y}
      </div>
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="card-title">${i("debugModels")}</div>
      <div class="card-sub">${i("debugModelsSub")}</div>
      <pre class="code-block" style="margin-top: 12px;">${JSON.stringify(e.models??[],null,2)}</pre>
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="card-title">${i("debugEventLog")}</div>
      <div class="card-sub">${i("debugEventLogSub")}</div>
      ${e.eventLog.length===0?r`
              <div class="muted" style="margin-top: 12px">${i("debugNoEvents")}</div>
            `:r`
            <div class="list" style="margin-top: 12px;">
              ${e.eventLog.map(u=>r`
                  <div class="list-item">
                    <div class="list-main">
                      <div class="list-title">${u.event}</div>
                      <div class="list-sub">${new Date(u.ts).toLocaleTimeString()}</div>
                    </div>
                    <div class="list-meta">
                      <pre class="code-block">${rv(u.payload)}</pre>
                    </div>
                  </div>
                `)}
            </div>
          `}
    </section>
  `}function Eo(e){return typeof window>"u"?"":e?.trim()?Jt(e):window.location?.port==="5173"?"http://127.0.0.1:18900":""}async function Pt(e,t,n){const s=Eo(t),a=s?`${s}${e.startsWith("/")?"":"/"}${e}`:e,o={Accept:"application/json"};n?.trim()&&(o.Authorization=`Bearer ${n.trim()}`);try{const l=await fetch(a,{headers:o});if(!l.ok){if(l.status===401)throw new Error("认证失败：网关令牌无效或未提供，请在 Overview 中配置正确的 Gateway Token");if((l.headers.get("Content-Type")??"").toLowerCase().includes("application/json")){const f=await l.json(),g=(f?.error??"").trim(),m=(f?.detail??"").trim();throw new Error(g?m?`${g}（${m}）`:g:`Gateway API ${l.status} for ${e}`)}const u=await l.text();throw new Error(`Gateway API ${l.status} for ${e}: ${u}`)}return await l.json()}catch(l){if(l instanceof Error){const d=l.message==="Failed to fetch"?"网络请求失败，请检查网络连接":l.message;throw new Error(d)}throw l}}function bn(e,t){const n=(e??"").trim();if(!n)return;if(n.startsWith("http://")||n.startsWith("https://"))return n;const s=n.startsWith("/uploads/")||n.startsWith("/")?`/api/v1/site${n}`:n,a=Eo(t);return a?`${a}${s.startsWith("/")?"":"/"}${s}`:s}function To(e){const t=new URLSearchParams;for(const[s,a]of Object.entries(e)){if(!a)continue;const o=a.trim();o&&t.set(s,o)}const n=t.toString();return n?`?${n}`:""}async function aa(e,t){return await Pt(`/api/v1/employees${To(e)}`,t?.gatewayHost,t?.token)}async function bv(e,t){return await Pt(`/api/v1/employees/${encodeURIComponent(String(e))}`,t?.gatewayHost,t?.token)}async function xv(e,t){return await Pt(`/api/v1/mcps${To(e)}`,t?.gatewayHost,t?.token)}async function wv(e,t){return await Pt(`/api/v1/mcps/${e}`,t?.gatewayHost,t?.token)}async function $v(e,t){return await Pt(`/api/v1/skills${To(e)}`,t?.gatewayHost,t?.token)}async function kv(e,t){return await Pt(`/api/v1/skills/${encodeURIComponent(e)}`,t?.gatewayHost,t?.token)}async function Sv(e){return await Pt("/api/v1/edu/categories",e?.gatewayHost,e?.token)}async function oa(e,t){const n=Eo(t?.gatewayHost),s=n?`${n}/api/v1/install`:"/api/v1/install",a={"Content-Type":"application/json",Accept:"application/json"};t?.token?.trim()&&(a.Authorization=`Bearer ${t.token.trim()}`);try{const o=await fetch(s,{method:"POST",headers:a,body:JSON.stringify(e)}),l=await o.json();if(!o.ok)throw o.status===401?new Error("认证失败：网关令牌无效或未提供，请在 Overview 中配置正确的 Gateway Token"):new Error(l?.error??`安装失败: ${o.status}`);return l}catch(o){const l=o instanceof Error?o.message:String(o),d=l==="Failed to fetch"?"网络请求失败，请检查网络连接":l;throw new Error(d)}}function es(e){const t=(e??"").trim();return t||"其它"}function Ec(e){return(e??"").trim().toLowerCase()}function Av(e,t){const n=Ec(t),s=(e??[]).filter(l=>n?`${l.name??""} ${l.description??""}`.toLowerCase().includes(n):!0),a=new Map;a.set("__all__",s.length);for(const l of s){const d=es(l.category);a.set(d,(a.get(d)??0)+1)}return{orderedCategories:["__all__",...Array.from(a.keys()).filter(l=>l!=="__all__").sort((l,d)=>l.localeCompare(d,"zh-Hans-CN"))],counts:a}}function Tc(e){return e?e.split(",").map(t=>t.trim()).filter(Boolean):[]}const $l=3;function kl(e){const t=Tc(e);if(t.length===0)return null;const n=t.slice(0,$l),s=t.length>$l;return r`
    <div class="emp-card__tags">
      ${n.map(a=>r`<span class="badge ghost emp-card__tag">${a}</span>`)}
      ${s?r`<span class="emp-card__tags-more">...</span>`:y}
    </div>
  `}function Cv(e){const t=e.trimStart();if(!t.startsWith("---"))return e;const n=t.slice(3),s=n.search(/\r?\n/);if(s===-1)return e;const a=n.slice(s+(n[s]==="\r"?2:1)),o=a.match(/\r?\n\s*---\s*\r?\n?/);return o?a.slice(o.index+o[0].length).trimStart():e}function Mv(e){const t=(e??"").trim().toLowerCase();return t?t==="open"?"开放":t==="paid"?"收费":t==="private"?"私有":e??"":""}function Ev(e){const t=(e.category??"").trim()||"__all__",n=Ec(e.query),s=(e.items??[]).filter(d=>n?`${d.name??""} ${d.description??""}`.toLowerCase().includes(n):!0),a=t==="__all__"?s:s.filter(d=>es(d.category)===t),o=new Map;for(const d of a){const u=es(d.category),f=o.get(u)??[];f.push(d),o.set(u,f)}const l=t==="__all__"?Array.from(o.entries()).sort((d,u)=>d[0].localeCompare(u[0],"zh-Hans-CN")).map(([d,u])=>({title:d==="其它"?"其它":d,items:u})):[{title:t,items:a}];return r`
    <main class="emp-page">
      <section class="emp-list-wrap">
        <div class="emp-content">
          <div class="emp-main">
            <div class="emp-toolbar">
              <h2 class="emp-toolbar__title">${t==="__all__"?"推荐员工":t}</h2>
              <div class="emp-toolbar__actions">
                <div class="emp-search">
                  <input
                    class="emp-search__input"
                    type="text"
                    placeholder="搜索"
                    .value=${e.query}
                    ?disabled=${e.loading}
                    @input=${d=>e.onQueryChange(d.target.value)}
                  />
                  <span class="emp-search__icon" aria-hidden="true">🔍</span>
                </div>
                <button class="btn" @click=${e.onRefresh} ?disabled=${e.loading}>刷新</button>
                ${e.onAdd?r`<button class="btn primary" @click=${e.onAdd}>新增</button>`:y}
              </div>
            </div>

            ${e.error?r`<div class="callout danger" style="margin-bottom: 16px;">${e.error}</div>`:y}

            ${(()=>{const d=(e.items??[]).filter(u=>{const f=String(u.id);return typeof u.id=="string"&&f.startsWith("local:")||(e.installedIds?.has(f)??!1)||(e.installedRemoteIds?.has(f)??!1)});return d.length===0?y:r`
                <div class="emp-installed-section">
                  <h3 class="emp-section__title">已安装 (${d.length})</h3>
                  <div class="emp-grid emp-installed-grid">
                    ${d.map(u=>{const f=e.selectedId===u.id,g=typeof u.id=="string"&&String(u.id).startsWith("local:"),m=String(u.id),v=g?m.replace(/^local:/,""):e.remoteToLocalMap?.[m]??"";e.installingId;const k=bn(u.logo_url),c=v&&e.onOpenEmployee,p=v&&e.onEdit;return r`
                        <div class="emp-card-wrap ${f?"active":""}">
                          <div class="emp-card emp-card-btn" @click=${()=>e.onSelect(u.id)}>
                            <div class="emp-card__icon ${k?"":"emp-card__icon--default"}">
                              ${k?r`<img src=${k} alt="" />`:r`
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                  <circle cx="12" cy="7" r="4"/>
                                </svg>
                              `}
                            </div>
                            <div class="emp-card__actions">
                              ${c?r`<button class="market-card-icon-btn" title="会话" @click=${h=>{h.stopPropagation(),e.onOpenEmployee(v)}}>${j("messageSquare")}</button>`:y}
                              ${p?r`<button class="market-card-icon-btn" title="修改" @click=${h=>{h.stopPropagation(),e.onEdit(v)}}>${j("edit")}</button>`:y}
                              ${e.onDelete&&v?r`<button class="market-card-icon-btn danger" title="删除" @click=${h=>{h.stopPropagation(),e.onDelete(v)}}>${j("trash")}</button>`:y}
                              ${y}
                            </div>
                            <h3 class="emp-card__title">${u.name}</h3>
                            <p class="emp-card__desc">${u.description??"暂无描述"}</p>
                            ${kl(u.tags)}
                          </div>
                        </div>
                      `})}
                  </div>
                </div>
              `})()}

            ${e.loading?r`<div class="emp-loading">加载中...</div>`:a.length===0?r`<div class="emp-empty">暂无匹配的数字员工</div>`:r`
                    <div class="emp-sections">
                      ${l.map(d=>d.items.length>0?r`
                                <div class="emp-section">
                                  <h3 class="emp-section__title">${d.title}</h3>
                                  <div class="emp-grid">
                                    ${d.items.map(u=>{const f=e.selectedId===u.id,g=typeof u.id=="string"&&String(u.id).startsWith("local:"),m=String(u.id),v=g?m.replace(/^local:/,""):e.remoteToLocalMap?.[m]??"",k=g||(e.installedIds?.has(m)??!1)||(e.installedRemoteIds?.has(m)??!1),c=e.installingId===m,p=bn(u.logo_url),h=k&&v&&e.onOpenEmployee,b=k&&v&&e.onEdit;return r`
                                        <div class="emp-card-wrap ${f?"active":""}">
                                          <div class="emp-card emp-card-btn" @click=${()=>e.onSelect(u.id)}>
                                            <div class="emp-card__icon ${p?"":"emp-card__icon--default"}">
                                              ${p?r`<img src=${p} alt="" />`:r`
                                                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="12" cy="7" r="4"/>
                                                  </svg>
                                                `}
                                            </div>
                                            <div class="emp-card__actions">
                                              ${k?r`
                                                    ${h?r`<button
                                                          class="market-card-icon-btn"
                                                          title="会话"
                                                          @click=${S=>{S.stopPropagation(),e.onOpenEmployee(v)}}
                                                        >${j("messageSquare")}</button>`:y}
                                                    ${b?r`<button
                                                          class="market-card-icon-btn"
                                                          title="修改"
                                                          @click=${S=>{S.stopPropagation(),e.onEdit(v)}}
                                                        >${j("edit")}</button>`:y}
                                                    ${e.onDelete&&v?r`<button
                                                          class="market-card-icon-btn danger"
                                                          title="删除"
                                                          @click=${S=>{S.stopPropagation(),e.onDelete(v)}}
                                                        >${j("trash")}</button>`:y}
                                                  `:e.onInstall?r`<button
                                                      class="market-card-icon-btn primary"
                                                      title="安装"
                                                      ?disabled=${c}
                                                      @click=${S=>{S.stopPropagation(),e.onInstall(u.id,u.category)}}
                                                    >${j(c?"loader2":"download")}</button>`:r`<a
                                                      class="market-card-icon-btn primary"
                                                      href=${`/api/v1/employees/${u.id}/download`}
                                                      target="_blank"
                                                      rel="noopener"
                                                      title="下载"
                                                      @click=${S=>S.stopPropagation()}
                                                    >${j("download")}</a>`}
                                            </div>
                                            <h3 class="emp-card__title">${u.name}</h3>
                                            <p class="emp-card__desc">${u.description??"暂无描述"}</p>
                                            ${kl(u.tags)}
                                          </div>
                                        </div>
                                      `})}
                                  </div>
                                </div>
                              `:y)}
                    </div>
                  `}
          </div>
        </div>

        ${e.selectedDetail?r`
              <div class="modal-overlay" @click=${e.onDetailClose} role="dialog" aria-modal="true" aria-labelledby="emp-detail-title">
                <div class="modal card emp-detail-modal emp-detail-modal--large" @click=${d=>d.stopPropagation()}>
                  <div class="emp-detail-modal__header">
                    <div class="emp-detail-header" style="flex: 1; min-width: 0;">
                      <div class="emp-detail-title-wrap">
                        ${(()=>{const d=bn(e.selectedDetail.logo_url);return d?r`<div class="emp-detail-logo"><img src=${d} alt="" /></div>`:r`
                              <div class="emp-detail-logo emp-detail-logo--default">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                  <circle cx="12" cy="7" r="4"/>
                                </svg>
                              </div>
                            `})()}
                        <h1 id="emp-detail-title" class="emp-detail-title">${e.selectedDetail.name}</h1>
                        <span class="emp-detail-status" data-status=${e.selectedDetail.status??""}>${Mv(e.selectedDetail.status)}</span>
                      </div>
                      <article class="emp-detail-summary">${e.selectedDetail.description??""}</article>
                      <div class="emp-detail-meta-row" style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-top: 8px;">
                        ${(()=>{const d=e.selectedDetail.id,u=String(d),f=typeof d=="string"&&u.startsWith("local:"),g=f?u.replace(/^local:/,""):e.remoteToLocalMap?.[u]??"",m=f||(e.installedRemoteIds?.has(u)??!1),v=m&&g&&e.onOpenEmployee,k=m&&g&&e.onEdit;return m?r`
                              ${v?r`<button class="market-card-icon-btn" title="会话"
                                    @click=${()=>{e.onOpenEmployee(g)}}
                                  >${j("messageSquare")}</button>`:y}
                              ${k?r`<button class="market-card-icon-btn" title="修改"
                                    @click=${()=>{e.onEdit(g)}}
                                  >${j("edit")}</button>`:y}
                              ${e.onDelete&&g?r`<button class="market-card-icon-btn danger" title="删除"
                                    @click=${()=>{e.onDelete(g)}}
                                  >${j("trash")}</button>`:y}
                            `:e.onInstall?r`<button class="market-card-icon-btn primary" title="安装"
                              ?disabled=${e.installingId===u}
                              @click=${()=>{e.onInstall(d,e.selectedDetail?.category)}}
                            >${e.installingId===u?j("loader2"):j("download")}</button>`:r`<a class="market-card-icon-btn primary" href=${`/api/v1/employees/${d}/download`} target="_blank" rel="noopener" title="下载">${j("download")}</a>`})()}
                      </div>
                    </div>
                    <div class="emp-detail-meta-right" style="display: flex; align-items: flex-start; gap: 8px; flex-wrap: wrap; flex-shrink: 0;">
                      ${(e.selectedDetail.category??"").trim()?r`<span class="badge ghost">${es(e.selectedDetail.category)}</span>`:y}
                      ${(e.selectedDetail.tags??"").trim()?Tc(e.selectedDetail.tags).map(d=>r`<span class="badge ghost">${d}</span>`):y}
                      <button class="btn emp-detail-modal__close" aria-label="关闭" @click=${e.onDetailClose}>×</button>
                    </div>
                  </div>

                  ${e.selectedDetail.readme?r`
                        <section class="emp-detail-readme emp-detail-modal__body">
                          <h2 class="emp-detail-readme-title">说明文档</h2>
                          <div class="emp-detail-markdown emp-detail-content">${Vt(Gt(Cv(e.selectedDetail.readme)))}</div>
                        </section>
                      `:r`<div class="callout info emp-detail-modal__body">无 README</div>`}
                </div>
              </div>
            `:y}
      </section>
    </main>
  `}function Tv(e){const t=Math.max(0,e),n=Math.floor(t/1e3);if(n<60)return`${n}s`;const s=Math.floor(n/60);return s<60?`${s}m`:`${Math.floor(s/60)}h`}function pt(e,t){return t?r`<div class="exec-approval-meta-row"><span>${e}</span><span>${t}</span></div>`:y}function _v(e){const t=e.execApprovalQueue[0];if(!t)return y;const n=t.request,s=t.expiresAtMs-Date.now(),a=s>0?`expires in ${Tv(s)}`:"expired",o=e.execApprovalQueue.length;return r`
    <div class="exec-approval-overlay" role="dialog" aria-live="polite">
      <div class="exec-approval-card">
        <div class="exec-approval-header">
          <div>
            <div class="exec-approval-title">Exec approval needed</div>
            <div class="exec-approval-sub">${a}</div>
          </div>
          ${o>1?r`<div class="exec-approval-queue">${o} pending</div>`:y}
        </div>
        <div class="exec-approval-command mono">${n.command}</div>
        <div class="exec-approval-meta">
          ${pt("Host",n.host)}
          ${pt("Agent",n.agentId)}
          ${pt("Session",n.sessionKey)}
          ${pt("CWD",n.cwd)}
          ${pt("Resolved",n.resolvedPath)}
          ${pt("Security",n.security)}
          ${pt("Ask",n.ask)}
        </div>
        ${e.execApprovalError?r`<div class="exec-approval-error">${e.execApprovalError}</div>`:y}
        <div class="exec-approval-actions">
          <button
            class="btn primary"
            ?disabled=${e.execApprovalBusy}
            @click=${()=>e.handleExecApprovalDecision("allow-once")}
          >
            Allow once
          </button>
          <button
            class="btn"
            ?disabled=${e.execApprovalBusy}
            @click=${()=>e.handleExecApprovalDecision("allow-always")}
          >
            Always allow
          </button>
          <button
            class="btn danger"
            ?disabled=${e.execApprovalBusy}
            @click=${()=>e.handleExecApprovalDecision("deny")}
          >
            Deny
          </button>
        </div>
      </div>
    </div>
  `}function Pv(e){const{pendingGatewayUrl:t}=e;return t?r`
    <div class="exec-approval-overlay" role="dialog" aria-modal="true" aria-live="polite">
      <div class="exec-approval-card">
        <div class="exec-approval-header">
          <div>
            <div class="exec-approval-title">Change Gateway URL</div>
            <div class="exec-approval-sub">This will reconnect to a different gateway server</div>
          </div>
        </div>
        <div class="exec-approval-command mono">${t}</div>
        <div class="callout danger" style="margin-top: 12px;">
          Only confirm if you trust this URL. Malicious URLs can compromise your system.
        </div>
        <div class="exec-approval-actions">
          <button
            class="btn primary"
            @click=${()=>e.handleGatewayUrlConfirm()}
          >
            Confirm
          </button>
          <button
            class="btn"
            @click=${()=>e.handleGatewayUrlCancel()}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  `:y}const Sl=["trace","debug","info","warn","error","fatal"];function Lv(e){if(!e)return"";const t=new Date(e);return Number.isNaN(t.getTime())?e:t.toLocaleTimeString()}function Iv(e,t){return t?[e.message,e.subsystem,e.raw].filter(Boolean).join(" ").toLowerCase().includes(t):!0}function Dv(e){const t=e.filterText.trim().toLowerCase(),n=Sl.some(o=>!e.levelFilters[o]),s=e.entries.filter(o=>o.level&&!e.levelFilters[o.level]?!1:Iv(o,t)),a=t||n?"filtered":"visible";return r`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">${i("logsTitle")}</div>
          <div class="card-sub">${i("logsSub")}</div>
        </div>
        <div class="row" style="gap: 8px;">
          <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?i("commonLoading"):i("commonRefresh")}
          </button>
          <button
            class="btn"
            ?disabled=${s.length===0}
            @click=${()=>e.onExport(s.map(o=>o.raw),a)}
          >
            ${i(a==="filtered"?"logsExportFiltered":"logsExportVisible")}
          </button>
        </div>
      </div>

      <div class="filters" style="margin-top: 14px;">
        <label class="field" style="min-width: 220px;">
          <span>Filter</span>
          <input
            .value=${e.filterText}
            @input=${o=>e.onFilterTextChange(o.target.value)}
            placeholder="Search logs"
          />
        </label>
        <label class="field checkbox">
          <span>Auto-follow</span>
          <input
            type="checkbox"
            .checked=${e.autoFollow}
            @change=${o=>e.onToggleAutoFollow(o.target.checked)}
          />
        </label>
      </div>

      <div class="chip-row" style="margin-top: 12px;">
        ${Sl.map(o=>r`
            <label class="chip log-chip ${o}">
              <input
                type="checkbox"
                .checked=${e.levelFilters[o]}
                @change=${l=>e.onLevelToggle(o,l.target.checked)}
              />
              <span>${o}</span>
            </label>
          `)}
      </div>

      ${e.file?r`<div class="muted" style="margin-top: 10px;">File: ${e.file}</div>`:y}
      ${e.truncated?r`
              <div class="callout" style="margin-top: 10px">Log output truncated; showing latest chunk.</div>
            `:y}
      ${e.error?r`<div class="callout danger" style="margin-top: 10px;">${e.error}</div>`:y}

      <div class="log-stream" style="margin-top: 12px;" @scroll=${e.onScroll}>
        ${s.length===0?r`
                <div class="muted" style="padding: 12px">No log entries.</div>
              `:s.map(o=>r`
                <div class="log-row">
                  <div class="log-time mono">${Lv(o.time)}</div>
                  <div class="log-level ${o.level??""}">${o.level??""}</div>
                  <div class="log-subsystem mono">${o.subsystem??""}</div>
                  <div class="log-message mono">${o.message??o.raw}</div>
                </div>
              `)}
      </div>
    </section>
  `}function Rv(e){const t=Hv(e),n=Vv(e);return r`
    ${Qv(n)}
    ${Gv(t)}
    ${Nv(e)}
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">${i("nodesTitle")}</div>
          <div class="card-sub">${i("nodesSub")}</div>
        </div>
        <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
          ${e.loading?i("commonLoading"):i("commonRefresh")}
        </button>
      </div>
      <div class="list" style="margin-top: 16px;">
        ${e.nodes.length===0?r`
                <div class="muted">${i("nodesNoFound")}</div>
              `:e.nodes.map(s=>oy(s))}
      </div>
    </section>
  `}function Nv(e){const t=e.devicesList??{pending:[],paired:[]},n=Array.isArray(t.pending)?t.pending:[],s=Array.isArray(t.paired)?t.paired:[];return r`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">${i("nodesDevices")}</div>
          <div class="card-sub">${i("nodesDevicesSub")}</div>
        </div>
        <button class="btn" ?disabled=${e.devicesLoading} @click=${e.onDevicesRefresh}>
          ${e.devicesLoading?i("commonLoading"):i("commonRefresh")}
        </button>
      </div>
      ${e.devicesError?r`<div class="callout danger" style="margin-top: 12px;">${e.devicesError}</div>`:y}
      <div class="list" style="margin-top: 16px;">
        ${n.length>0?r`
              <div class="muted" style="margin-bottom: 8px;">${i("nodesPending")}</div>
              ${n.map(a=>Uv(a,e))}
            `:y}
        ${s.length>0?r`
              <div class="muted" style="margin-top: 12px; margin-bottom: 8px;">${i("nodesPaired")}</div>
              ${s.map(a=>Ov(a,e))}
            `:y}
        ${n.length===0&&s.length===0?r`
                <div class="muted">${i("nodesNoPairedDevices")}</div>
              `:y}
      </div>
    </section>
  `}function Uv(e,t){const n=e.displayName?.trim()||e.deviceId,s=typeof e.ts=="number"?te(e.ts):i("commonNA"),a=e.role?.trim()?`${i("nodesRoleLabel")}${e.role}`:i("nodesRoleNone"),o=e.isRepair?i("nodesRepairSuffix"):"",l=e.remoteIp?` · ${e.remoteIp}`:"";return r`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${n}</div>
        <div class="list-sub">${e.deviceId}${l}</div>
        <div class="muted" style="margin-top: 6px;">
          ${a} · ${i("nodesRequested")}${s}${o}
        </div>
      </div>
      <div class="list-meta">
        <div class="row" style="justify-content: flex-end; gap: 8px; flex-wrap: wrap;">
          <button class="btn btn--sm primary" @click=${()=>t.onDeviceApprove(e.requestId)}>
            ${i("nodesApprove")}
          </button>
          <button class="btn btn--sm" @click=${()=>t.onDeviceReject(e.requestId)}>
            ${i("nodesReject")}
          </button>
        </div>
      </div>
    </div>
  `}function Ov(e,t){const n=e.displayName?.trim()||e.deviceId,s=e.remoteIp?` · ${e.remoteIp}`:"",a=`${i("nodesRolesLabel")}${va(e.roles)}`,o=`${i("nodesScopesLabel")}${va(e.scopes)}`,l=Array.isArray(e.tokens)?e.tokens:[];return r`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${n}</div>
        <div class="list-sub">${e.deviceId}${s}</div>
        <div class="muted" style="margin-top: 6px;">${a} · ${o}</div>
        ${l.length===0?r`
                <div class="muted" style="margin-top: 6px">${i("nodesTokensNone")}</div>
              `:r`
              <div class="muted" style="margin-top: 10px;">${i("nodesTokens")}</div>
              <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 6px;">
                ${l.map(d=>Fv(e.deviceId,d,t))}
              </div>
            `}
      </div>
    </div>
  `}function Fv(e,t,n){const s=t.revokedAtMs?i("nodesTokenRevoked"):i("nodesTokenActive"),a=`${i("nodesScopesLabel")}${va(t.scopes)}`,o=te(t.rotatedAtMs??t.createdAtMs??t.lastUsedAtMs??null);return r`
    <div class="row" style="justify-content: space-between; gap: 8px;">
      <div class="list-sub">${t.role} · ${s} · ${a} · ${o}</div>
      <div class="row" style="justify-content: flex-end; gap: 6px; flex-wrap: wrap;">
        <button
          class="btn btn--sm"
          @click=${()=>n.onDeviceRotate(e,t.role,t.scopes)}
        >
          ${i("nodesRotate")}
        </button>
        ${t.revokedAtMs?y:r`
              <button
                class="btn btn--sm danger"
                @click=${()=>n.onDeviceRevoke(e,t.role)}
              >
                ${i("nodesRevoke")}
              </button>
            `}
      </div>
    </div>
  `}const nt="__defaults__",Al=[{value:"deny",labelKey:"nodesSecurityDeny"},{value:"allowlist",labelKey:"nodesSecurityAllowlist"},{value:"full",labelKey:"nodesSecurityFull"}],Bv=[{value:"off",labelKey:"nodesAskOff"},{value:"on-miss",labelKey:"nodesAskOnMiss"},{value:"always",labelKey:"nodesAskAlways"}];function Hv(e){const t=e.configForm,n=ny(e.nodes),{defaultBinding:s,agents:a}=ay(t),o=!!t,l=e.configSaving||e.configFormMode==="raw";return{ready:o,disabled:l,configDirty:e.configDirty,configLoading:e.configLoading,configSaving:e.configSaving,defaultBinding:s,agents:a,nodes:n,onBindDefault:e.onBindDefault,onBindAgent:e.onBindAgent,onSave:e.onSaveBindings,onLoadConfig:e.onLoadConfig,formMode:e.configFormMode}}function Cl(e){return e==="allowlist"||e==="full"||e==="deny"?e:"deny"}function zv(e){return e==="always"||e==="off"||e==="on-miss"?e:"on-miss"}function Kv(e){const t=e?.defaults??{};return{security:Cl(t.security),ask:zv(t.ask),askFallback:Cl(t.askFallback??"deny"),autoAllowSkills:!!(t.autoAllowSkills??!1)}}function qv(e){const t=e?.agents??{},n=Array.isArray(t.list)?t.list:[],s=[];return n.forEach(a=>{if(!a||typeof a!="object")return;const o=a,l=typeof o.id=="string"?o.id.trim():"";if(!l)return;const d=typeof o.name=="string"?o.name.trim():void 0,u=o.default===!0;s.push({id:l,name:d||void 0,isDefault:u})}),s}function jv(e,t){const n=qv(e),s=Object.keys(t?.agents??{}),a=new Map;n.forEach(l=>a.set(l.id,l)),s.forEach(l=>{a.has(l)||a.set(l,{id:l})});const o=Array.from(a.values());return o.length===0&&o.push({id:"main",isDefault:!0}),o.sort((l,d)=>{if(l.isDefault&&!d.isDefault)return-1;if(!l.isDefault&&d.isDefault)return 1;const u=l.name?.trim()?l.name:l.id,f=d.name?.trim()?d.name:d.id;return u.localeCompare(f)}),o}function Wv(e,t){return e===nt?nt:e&&t.some(n=>n.id===e)?e:nt}function Vv(e){const t=e.execApprovalsForm??e.execApprovalsSnapshot?.file??null,n=!!t,s=Kv(t),a=jv(e.configForm,t),o=sy(e.nodes),l=e.execApprovalsTarget;let d=l==="node"&&e.execApprovalsTargetNodeId?e.execApprovalsTargetNodeId:null;l==="node"&&d&&!o.some(m=>m.id===d)&&(d=null);const u=Wv(e.execApprovalsSelectedAgent,a),f=u!==nt?(t?.agents??{})[u]??null:null,g=Array.isArray(f?.allowlist)?f.allowlist??[]:[];return{ready:n,disabled:e.execApprovalsSaving||e.execApprovalsLoading,dirty:e.execApprovalsDirty,loading:e.execApprovalsLoading,saving:e.execApprovalsSaving,form:t,defaults:s,selectedScope:u,selectedAgent:f,agents:a,allowlist:g,target:l,targetNodeId:d,targetNodes:o,onSelectScope:e.onExecApprovalsSelectAgent,onSelectTarget:e.onExecApprovalsTargetChange,onPatch:e.onExecApprovalsPatch,onRemove:e.onExecApprovalsRemove,onLoad:e.onLoadExecApprovals,onSave:e.onSaveExecApprovals}}function Gv(e){const t=e.nodes.length>0,n=e.defaultBinding??"";return r`
    <section class="card">
      <div class="row" style="justify-content: space-between; align-items: center;">
        <div>
          <div class="card-title">${i("nodesBindingTitle")}</div>
          <div class="card-sub">
            ${i("nodesBindingSub")}<span class="mono">exec host=node</span>.
          </div>
        </div>
        <button
          class="btn"
          ?disabled=${e.disabled||!e.configDirty}
          @click=${e.onSave}
        >
          ${e.configSaving?i("commonSaving"):i("commonSave")}
        </button>
      </div>

      ${e.formMode==="raw"?r`
              <div class="callout warn" style="margin-top: 12px">
                ${i("nodesBindingFormModeHint")}
              </div>
            `:y}

      ${e.ready?r`
            <div class="list" style="margin-top: 16px;">
              <div class="list-item">
                <div class="list-main">
                  <div class="list-title">${i("nodesDefaultBinding")}</div>
                  <div class="list-sub">${i("nodesDefaultBindingSub")}</div>
                </div>
                <div class="list-meta">
                  <label class="field">
                    <span>${i("nodesNodeLabel")}</span>
                    <select
                      ?disabled=${e.disabled||!t}
                      @change=${s=>{const o=s.target.value.trim();e.onBindDefault(o||null)}}
                    >
                      <option value="" ?selected=${n===""}>${i("nodesAnyNode")}</option>
                      ${e.nodes.map(s=>r`<option
                            value=${s.id}
                            ?selected=${n===s.id}
                          >
                            ${s.label}
                          </option>`)}
                    </select>
                  </label>
                  ${t?y:r`
                          <div class="muted">${i("nodesNoNodesSystemRun")}</div>
                        `}
                </div>
              </div>

              ${e.agents.length===0?r`
                      <div class="muted">${i("nodesNoAgentsFound")}</div>
                    `:e.agents.map(s=>ty(s,e))}
            </div>
          `:r`<div class="row" style="margin-top: 12px; gap: 12px;">
            <div class="muted">${i("nodesLoadConfigHint")}</div>
            <button class="btn" ?disabled=${e.configLoading} @click=${e.onLoadConfig}>
              ${e.configLoading?i("commonLoading"):i("nodesLoadConfig")}
            </button>
          </div>`}
    </section>
  `}function Qv(e){const t=e.ready,n=e.target!=="node"||!!e.targetNodeId;return r`
    <section class="card">
      <div class="row" style="justify-content: space-between; align-items: center;">
        <div>
          <div class="card-title">${i("nodesExecApprovalsTitle")}</div>
          <div class="card-sub">
            ${i("nodesExecApprovalsSub")}
          </div>
        </div>
        <button
          class="btn"
          ?disabled=${e.disabled||!e.dirty||!n}
          @click=${e.onSave}
        >
          ${e.saving?i("commonSaving"):i("commonSave")}
        </button>
      </div>

      ${Jv(e)}

      ${t?r`
            ${Yv(e)}
            ${Zv(e)}
            ${e.selectedScope===nt?y:Xv(e)}
          `:r`<div class="row" style="margin-top: 12px; gap: 12px;">
            <div class="muted">${i("nodesLoadExecApprovalsHint")}</div>
            <button class="btn" ?disabled=${e.loading||!n} @click=${e.onLoad}>
              ${e.loading?i("commonLoading"):i("nodesLoadApprovals")}
            </button>
          </div>`}
    </section>
  `}function Jv(e){const t=e.targetNodes.length>0,n=e.targetNodeId??"";return r`
    <div class="list" style="margin-top: 12px;">
      <div class="list-item">
        <div class="list-main">
          <div class="list-title">${i("nodesTarget")}</div>
          <div class="list-sub">
            ${i("nodesTargetSub")}
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>${i("nodesHost")}</span>
            <select
              ?disabled=${e.disabled}
              @change=${s=>{if(s.target.value==="node"){const l=e.targetNodes[0]?.id??null;e.onSelectTarget("node",n||l)}else e.onSelectTarget("gateway",null)}}
            >
              <option value="gateway" ?selected=${e.target==="gateway"}>${i("nodesHostGateway")}</option>
              <option value="node" ?selected=${e.target==="node"}>${i("nodesHostNode")}</option>
            </select>
          </label>
          ${e.target==="node"?r`
                <label class="field">
                  <span>${i("nodesNodeLabel")}</span>
                  <select
                    ?disabled=${e.disabled||!t}
                    @change=${s=>{const o=s.target.value.trim();e.onSelectTarget("node",o||null)}}
                  >
                    <option value="" ?selected=${n===""}>${i("nodesSelectNode")}</option>
                    ${e.targetNodes.map(s=>r`<option
                          value=${s.id}
                          ?selected=${n===s.id}
                        >
                          ${s.label}
                        </option>`)}
                  </select>
                </label>
              `:y}
        </div>
      </div>
      ${e.target==="node"&&!t?r`
              <div class="muted">${i("nodesNoNodesExecApprovals")}</div>
            `:y}
    </div>
  `}function Yv(e){return r`
    <div class="row" style="margin-top: 12px; gap: 8px; flex-wrap: wrap;">
      <span class="label">${i("nodesScope")}</span>
      <div class="row" style="gap: 8px; flex-wrap: wrap;">
        <button
          class="btn btn--sm ${e.selectedScope===nt?"active":""}"
          @click=${()=>e.onSelectScope(nt)}
        >
          ${i("nodesDefaults")}
        </button>
        ${e.agents.map(t=>{const n=t.name?.trim()?`${t.name} (${t.id})`:t.id;return r`
            <button
              class="btn btn--sm ${e.selectedScope===t.id?"active":""}"
              @click=${()=>e.onSelectScope(t.id)}
            >
              ${n}
            </button>
          `})}
      </div>
    </div>
  `}function Zv(e){const t=e.selectedScope===nt,n=e.defaults,s=e.selectedAgent??{},a=t?["defaults"]:["agents",e.selectedScope],o=typeof s.security=="string"?s.security:void 0,l=typeof s.ask=="string"?s.ask:void 0,d=typeof s.askFallback=="string"?s.askFallback:void 0,u=t?n.security:o??"__default__",f=t?n.ask:l??"__default__",g=t?n.askFallback:d??"__default__",m=typeof s.autoAllowSkills=="boolean"?s.autoAllowSkills:void 0,v=m??n.autoAllowSkills,k=m==null;return r`
    <div class="list" style="margin-top: 16px;">
      <div class="list-item">
        <div class="list-main">
          <div class="list-title">${i("nodesSecurity")}</div>
          <div class="list-sub">
            ${t?i("nodesSecurityDefaultSub"):`${i("nodesSecurityAgentSubPrefix")}${n.security}.`}
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>${i("nodesMode")}</span>
            <select
              ?disabled=${e.disabled}
              @change=${c=>{const h=c.target.value;!t&&h==="__default__"?e.onRemove([...a,"security"]):e.onPatch([...a,"security"],h)}}
            >
              ${t?y:r`<option value="__default__" ?selected=${u==="__default__"}>
                    ${i("nodesUseDefaultPrefix")}${n.security})
                  </option>`}
              ${Al.map(c=>r`<option
                    value=${c.value}
                    ?selected=${u===c.value}
                  >
                    ${i(c.labelKey)}
                  </option>`)}
            </select>
          </label>
        </div>
      </div>

      <div class="list-item">
        <div class="list-main">
          <div class="list-title">${i("nodesAsk")}</div>
          <div class="list-sub">
            ${t?i("nodesAskDefaultSub"):`${i("nodesAskAgentSubPrefix")}${n.ask}.`}
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>${i("nodesMode")}</span>
            <select
              ?disabled=${e.disabled}
              @change=${c=>{const h=c.target.value;!t&&h==="__default__"?e.onRemove([...a,"ask"]):e.onPatch([...a,"ask"],h)}}
            >
              ${t?y:r`<option value="__default__" ?selected=${f==="__default__"}>
                    ${i("nodesUseDefaultPrefix")}${n.ask})
                  </option>`}
              ${Bv.map(c=>r`<option
                    value=${c.value}
                    ?selected=${f===c.value}
                  >
                    ${i(c.labelKey)}
                  </option>`)}
            </select>
          </label>
        </div>
      </div>

      <div class="list-item">
        <div class="list-main">
          <div class="list-title">${i("nodesAskFallback")}</div>
          <div class="list-sub">
            ${t?i("nodesAskFallbackDefaultSub"):`${i("nodesAskFallbackAgentSubPrefix")}${n.askFallback}.`}
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>${i("nodesFallback")}</span>
            <select
              ?disabled=${e.disabled}
              @change=${c=>{const h=c.target.value;!t&&h==="__default__"?e.onRemove([...a,"askFallback"]):e.onPatch([...a,"askFallback"],h)}}
            >
              ${t?y:r`<option value="__default__" ?selected=${g==="__default__"}>
                    ${i("nodesUseDefaultPrefix")}${n.askFallback})
                  </option>`}
              ${Al.map(c=>r`<option
                    value=${c.value}
                    ?selected=${g===c.value}
                  >
                    ${i(c.labelKey)}
                  </option>`)}
            </select>
          </label>
        </div>
      </div>

      <div class="list-item">
        <div class="list-main">
          <div class="list-title">${i("nodesAutoAllowSkills")}</div>
          <div class="list-sub">
            ${t?i("nodesAutoAllowSkillsDefaultSub"):k?`${i("nodesAutoAllowSkillsUsingDefault")}${n.autoAllowSkills?"on":"off"}).`:`${i("nodesAutoAllowSkillsOverride")}${v?"on":"off"}).`}
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>${i("nodesEnabled")}</span>
            <input
              type="checkbox"
              ?disabled=${e.disabled}
              .checked=${v}
              @change=${c=>{const p=c.target;e.onPatch([...a,"autoAllowSkills"],p.checked)}}
            />
          </label>
          ${!t&&!k?r`<button
                class="btn btn--sm"
                ?disabled=${e.disabled}
                @click=${()=>e.onRemove([...a,"autoAllowSkills"])}
              >
                ${i("nodesUseDefaultButton")}
              </button>`:y}
        </div>
      </div>
    </div>
  `}function Xv(e){const t=["agents",e.selectedScope,"allowlist"],n=e.allowlist;return r`
    <div class="row" style="margin-top: 18px; justify-content: space-between;">
      <div>
        <div class="card-title">${i("nodesAllowlist")}</div>
        <div class="card-sub">${i("nodesAllowlistSub")}</div>
      </div>
      <button
        class="btn btn--sm"
        ?disabled=${e.disabled}
        @click=${()=>{const s=[...n,{pattern:""}];e.onPatch(t,s)}}
      >
        ${i("nodesAddPattern")}
      </button>
    </div>
    <div class="list" style="margin-top: 12px;">
      ${n.length===0?r`
              <div class="muted">${i("nodesNoAllowlistEntries")}</div>
            `:n.map((s,a)=>ey(e,s,a))}
    </div>
  `}function ey(e,t,n){const s=t.lastUsedAt?te(t.lastUsedAt):i("nodesNever"),a=t.lastUsedCommand?gi(t.lastUsedCommand,120):null,o=t.lastResolvedPath?gi(t.lastResolvedPath,120):null;return r`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${t.pattern?.trim()?t.pattern:i("nodesNewPattern")}</div>
        <div class="list-sub">${i("nodesLastUsedPrefix")}${s}</div>
        ${a?r`<div class="list-sub mono">${a}</div>`:y}
        ${o?r`<div class="list-sub mono">${o}</div>`:y}
      </div>
      <div class="list-meta">
        <label class="field">
          <span>${i("nodesPattern")}</span>
          <input
            type="text"
            .value=${t.pattern??""}
            ?disabled=${e.disabled}
            @input=${l=>{const d=l.target;e.onPatch(["agents",e.selectedScope,"allowlist",n,"pattern"],d.value)}}
          />
        </label>
        <button
          class="btn btn--sm danger"
          ?disabled=${e.disabled}
          @click=${()=>{if(e.allowlist.length<=1){e.onRemove(["agents",e.selectedScope,"allowlist"]);return}e.onRemove(["agents",e.selectedScope,"allowlist",n])}}
        >
          ${i("nodesRemove")}
        </button>
      </div>
    </div>
  `}function ty(e,t){const n=e.binding??"__default__",s=e.name?.trim()?`${e.name} (${e.id})`:e.id,a=t.nodes.length>0;return r`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${s}</div>
        <div class="list-sub">
          ${e.isDefault?i("nodesDefaultAgent"):i("nodesAgent")} ·
          ${n==="__default__"?`${i("nodesUsesDefault")}${t.defaultBinding??"any"})`:`${i("nodesOverride")}${e.binding}`}
        </div>
      </div>
      <div class="list-meta">
        <label class="field">
          <span>${i("nodesBinding")}</span>
          <select
            ?disabled=${t.disabled||!a}
            @change=${o=>{const d=o.target.value.trim();t.onBindAgent(e.index,d==="__default__"?null:d)}}
          >
            <option value="__default__" ?selected=${n==="__default__"}>
              ${i("nodesUseDefaultButton")}
            </option>
            ${t.nodes.map(o=>r`<option
                  value=${o.id}
                  ?selected=${n===o.id}
                >
                  ${o.label}
                </option>`)}
          </select>
        </label>
      </div>
    </div>
  `}function ny(e){const t=[];for(const n of e){if(!(Array.isArray(n.commands)?n.commands:[]).some(d=>String(d)==="system.run"))continue;const o=typeof n.nodeId=="string"?n.nodeId.trim():"";if(!o)continue;const l=typeof n.displayName=="string"&&n.displayName.trim()?n.displayName.trim():o;t.push({id:o,label:l===o?o:`${l} · ${o}`})}return t.sort((n,s)=>n.label.localeCompare(s.label)),t}function sy(e){const t=[];for(const n of e){if(!(Array.isArray(n.commands)?n.commands:[]).some(d=>String(d)==="system.execApprovals.get"||String(d)==="system.execApprovals.set"))continue;const o=typeof n.nodeId=="string"?n.nodeId.trim():"";if(!o)continue;const l=typeof n.displayName=="string"&&n.displayName.trim()?n.displayName.trim():o;t.push({id:o,label:l===o?o:`${l} · ${o}`})}return t.sort((n,s)=>n.label.localeCompare(s.label)),t}function ay(e){const t={id:"main",name:void 0,index:0,isDefault:!0,binding:null};if(!e||typeof e!="object")return{defaultBinding:null,agents:[t]};const s=(e.tools??{}).exec??{},a=typeof s.node=="string"&&s.node.trim()?s.node.trim():null,o=e.agents??{},l=Array.isArray(o.list)?o.list:[];if(l.length===0)return{defaultBinding:a,agents:[t]};const d=[];return l.forEach((u,f)=>{if(!u||typeof u!="object")return;const g=u,m=typeof g.id=="string"?g.id.trim():"";if(!m)return;const v=typeof g.name=="string"?g.name.trim():void 0,k=g.default===!0,p=(g.tools??{}).exec??{},h=typeof p.node=="string"&&p.node.trim()?p.node.trim():null;d.push({id:m,name:v||void 0,index:f,isDefault:k,binding:h})}),d.length===0&&d.push(t),{defaultBinding:a,agents:d}}function oy(e){const t=!!e.connected,n=!!e.paired,s=typeof e.displayName=="string"&&e.displayName.trim()||(typeof e.nodeId=="string"?e.nodeId:"unknown"),a=Array.isArray(e.caps)?e.caps:[],o=Array.isArray(e.commands)?e.commands:[];return r`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${s}</div>
        <div class="list-sub">
          ${typeof e.nodeId=="string"?e.nodeId:""}
          ${typeof e.remoteIp=="string"?` · ${e.remoteIp}`:""}
          ${typeof e.version=="string"?` · ${e.version}`:""}
        </div>
        <div class="chip-row" style="margin-top: 6px;">
          <span class="chip">${i(n?"nodesChipPaired":"nodesChipUnpaired")}</span>
          <span class="chip ${t?"chip-ok":"chip-warn"}">
            ${i(t?"nodesConnected":"nodesOffline")}
          </span>
          ${a.slice(0,12).map(l=>r`<span class="chip">${String(l)}</span>`)}
          ${o.slice(0,8).map(l=>r`<span class="chip">${String(l)}</span>`)}
        </div>
      </div>
    </div>
  `}function iy(e){const t=e.hello?.snapshot,n=t?.uptimeMs?sr(t.uptimeMs):"n/a",s=t?.policy?.tickIntervalMs?`${t.policy.tickIntervalMs}ms`:"n/a",a=(()=>{if(e.connected||!e.lastError)return null;const l=e.lastError.toLowerCase();if(!(l.includes("unauthorized")||l.includes("connect failed")))return null;const u=!!e.settings.token.trim(),f=!!e.password.trim();return!u&&!f?r`
        <div class="muted" style="margin-top: 8px">
          This gateway requires auth. Add a token or password, then click Connect.
          <div style="margin-top: 6px">
            <span class="mono">openclaw dashboard --no-open</span> → open the Control UI<br />
            <span class="mono">openclaw doctor --generate-gateway-token</span> → set token
          </div>
          <div style="margin-top: 6px">
            <a
              class="session-link"
              href="https://docs.openclaw.ai/web/dashboard"
              target="_blank"
              rel="noreferrer"
              title="Control UI auth docs (opens in new tab)"
              >Docs: Control UI auth</a
            >
          </div>
        </div>
      `:r`
      <div class="muted" style="margin-top: 8px">
        Auth failed. Update the token or password in Control UI settings, then click Connect.
        <div style="margin-top: 6px">
          <a
            class="session-link"
            href="https://docs.openclaw.ai/web/dashboard"
            target="_blank"
            rel="noreferrer"
            title="Control UI auth docs (opens in new tab)"
            >Docs: Control UI auth</a
          >
        </div>
      </div>
    `})(),o=(()=>{if(e.connected||!e.lastError||(typeof window<"u"?window.isSecureContext:!0))return null;const d=e.lastError.toLowerCase();return!d.includes("secure context")&&!d.includes("device identity required")?null:r`
      <div class="muted" style="margin-top: 8px">
        This page is HTTP, so the browser blocks device identity. Use HTTPS (Tailscale Serve) or open
        <span class="mono">http://127.0.0.1:18900</span> on the gateway host.
        <div style="margin-top: 6px">
          If you must stay on HTTP, set
          <span class="mono">gateway.controlUi.allowInsecureAuth: true</span> (token-only).
        </div>
        <div style="margin-top: 6px">
          <a
            class="session-link"
            href="https://docs.openclaw.ai/gateway/tailscale"
            target="_blank"
            rel="noreferrer"
            title="Tailscale Serve docs (opens in new tab)"
            >Docs: Tailscale Serve</a
          >
          <span class="muted"> · </span>
          <a
            class="session-link"
            href="https://docs.openclaw.ai/web/control-ui#insecure-http"
            target="_blank"
            rel="noreferrer"
            title="Insecure HTTP docs (opens in new tab)"
            >Docs: Insecure HTTP</a
          >
        </div>
      </div>
    `})();return r`
    <section class="grid grid-cols-2">
      <div class="card">
        <div class="card-title">${i("overviewGatewayAccess")}</div>
        <div class="card-sub">${i("overviewGatewayAccessSub")}</div>
        <div class="form-grid" style="margin-top: 16px;">
          <label class="field">
            <span>${i("overviewGatewayHost")}</span>
            <input
              .value=${e.settings.gatewayUrl}
              @input=${l=>{const d=l.target.value;e.onSettingsChange({...e.settings,gatewayUrl:d})}}
              placeholder="127.0.0.1:18900"
            />
          </label>
          <label class="field">
            <span>${i("overviewGatewayToken")}</span>
            <input
              .value=${e.settings.token}
              @input=${l=>{const d=l.target.value;e.onSettingsChange({...e.settings,token:d})}}
              placeholder="OPENCLAW_GATEWAY_TOKEN"
            />
          </label>
          <label class="field">
            <span>${i("overviewPassword")}</span>
            <input
              type="password"
              .value=${e.password}
              @input=${l=>{const d=l.target.value;e.onPasswordChange(d)}}
              placeholder="system or shared password"
            />
          </label>
          <label class="field">
            <span>${i("overviewDefaultSessionKey")}</span>
            <input
              .value=${e.settings.sessionKey}
              @input=${l=>{const d=l.target.value;e.onSessionKeyChange(d)}}
            />
          </label>
        </div>
        <div class="row" style="margin-top: 14px;">
          <button class="btn" @click=${()=>e.onConnect()}>${i("overviewConnect")}</button>
          <button class="btn" @click=${()=>e.onRefresh()}>${i("overviewRefresh")}</button>
          <span class="muted">${i("overviewConnectHint")}</span>
        </div>
      </div>

      <div class="card">
        <div class="card-title">${i("overviewSnapshot")}</div>
        <div class="card-sub">${i("overviewSnapshotSub")}</div>
        <div class="stat-grid" style="margin-top: 16px;">
          <div class="stat">
            <div class="stat-label">${i("overviewStatus")}</div>
            <div class="stat-value ${e.connected?"ok":"warn"}">
              ${e.connected?i("overviewConnected"):i("overviewDisconnected")}
            </div>
          </div>
          <div class="stat">
            <div class="stat-label">${i("overviewUptime")}</div>
            <div class="stat-value">${n}</div>
          </div>
          <div class="stat">
            <div class="stat-label">${i("overviewTickInterval")}</div>
            <div class="stat-value">${s}</div>
          </div>
          <div class="stat">
            <div class="stat-label">${i("overviewLastChannelsRefresh")}</div>
            <div class="stat-value">
              ${e.lastChannelsRefresh?te(e.lastChannelsRefresh):"n/a"}
            </div>
          </div>
        </div>
        ${e.lastError?r`<div class="callout danger" style="margin-top: 14px;">
              <div>${e.lastError}</div>
              ${a??""}
              ${o??""}
            </div>`:r`
                <div class="callout" style="margin-top: 14px">
                  ${i("overviewChannelsHint")}
                </div>
              `}
      </div>
    </section>

    <section class="grid grid-cols-3" style="margin-top: 18px;">
      <div class="card stat-card">
        <div class="stat-label">${i("overviewInstances")}</div>
        <div class="stat-value">${e.presenceCount}</div>
        <div class="muted">${i("overviewInstancesSub")}</div>
      </div>
      <div class="card stat-card">
        <div class="stat-label">${i("overviewSessions")}</div>
        <div class="stat-value">${e.sessionsCount??"n/a"}</div>
        <div class="muted">${i("overviewSessionsSub")}</div>
      </div>
      <div class="card stat-card">
        <div class="stat-label">${i("overviewCron")}</div>
        <div class="stat-value">
          ${e.cronEnabled==null?"n/a":e.cronEnabled?i("overviewCronEnabled"):i("overviewCronDisabled")}
        </div>
        <div class="muted">${i("overviewCronNext")} ${Cc(e.cronNext)}</div>
      </div>
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="card-title">${i("overviewNotes")}</div>
      <div class="card-sub">${i("overviewNotesSub")}</div>
      <div class="note-grid" style="margin-top: 14px;">
        <div>
          <div class="note-title">${i("overviewNoteTailscale")}</div>
          <div class="muted">${i("overviewNoteTailscaleSub")}</div>
        </div>
        <div>
          <div class="note-title">${i("overviewNoteSessionHygiene")}</div>
          <div class="muted">${i("overviewNoteSessionHygieneSub")}</div>
        </div>
        <div>
          <div class="note-title">${i("overviewNoteCron")}</div>
          <div class="muted">${i("overviewNoteCronSub")}</div>
        </div>
      </div>
    </section>
  `}const ly=["","off","minimal","low","medium","high","xhigh"],ry=["","off","on"];function cy(){return[{value:"",label:i("commonInherit")},{value:"off",label:i("commonOffExplicit")},{value:"on",label:"on"}]}const Ml=["","off","on","stream"];function dy(e){if(!e)return"";const t=e.trim().toLowerCase();return t==="z.ai"||t==="z-ai"?"zai":t}function _c(e){return dy(e)==="zai"}function uy(e){return _c(e)?ry:ly}function El(e,t){return t?e.includes(t)?[...e]:[...e,t]:[...e]}function py(e,t){return!t||!e||e==="off"?e:"on"}function gy(e,t){return e?t&&e==="on"?"low":e:null}function my(e){const t=e.result?.sessions??[];return r`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">${i("sessionsTitle")}</div>
          <div class="card-sub">${i("sessionsSub")}</div>
        </div>
        <div class="row" style="gap: 8px;">
          <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?i("commonLoading"):i("commonRefresh")}
          </button>
          <button
            class="btn secondary"
            ?disabled=${e.loading||t.length===0}
            @click=${e.onBulkModeToggle}
          >
            ${e.bulkMode?"完成":"批量删除"}
          </button>
        </div>
      </div>

      <div class="filters" style="margin-top: 14px;">
        <label class="field">
          <span>${i("sessionsActiveWithin")}</span>
          <input
            .value=${e.activeMinutes}
            @input=${n=>e.onFiltersChange({activeMinutes:n.target.value,limit:e.limit,includeGlobal:e.includeGlobal,includeUnknown:e.includeUnknown})}
          />
        </label>
        <label class="field">
          <span>${i("sessionsLimit")}</span>
          <input
            .value=${e.limit}
            @input=${n=>e.onFiltersChange({activeMinutes:e.activeMinutes,limit:n.target.value,includeGlobal:e.includeGlobal,includeUnknown:e.includeUnknown})}
          />
        </label>
        <label class="field checkbox">
          <span>${i("sessionsIncludeGlobal")}</span>
          <input
            type="checkbox"
            .checked=${e.includeGlobal}
            @change=${n=>e.onFiltersChange({activeMinutes:e.activeMinutes,limit:e.limit,includeGlobal:n.target.checked,includeUnknown:e.includeUnknown})}
          />
        </label>
        <label class="field checkbox">
          <span>${i("sessionsIncludeUnknown")}</span>
          <input
            type="checkbox"
            .checked=${e.includeUnknown}
            @change=${n=>e.onFiltersChange({activeMinutes:e.activeMinutes,limit:e.limit,includeGlobal:e.includeGlobal,includeUnknown:n.target.checked})}
          />
        </label>
      </div>

      ${e.bulkMode&&t.length>0?r`
              <div class="row" style="margin-top: 12px; justify-content: space-between;">
                <div class="muted">已选 ${e.selectedKeys.length} 个会话</div>
                <div class="row" style="gap: 8px;">
                  <button
                    class="btn"
                    ?disabled=${e.loading}
                    @click=${()=>e.onSelectAll(t.map(n=>n.key).filter(n=>n&&n!=="agent.main.main"))}
                  >
                    全部选择
                  </button>
                  <button
                    class="btn"
                    ?disabled=${e.loading||e.selectedKeys.length===0}
                    @click=${e.onClearSelection}
                  >
                    全部不选
                  </button>
                  <button
                    class="btn danger"
                    ?disabled=${e.loading||e.selectedKeys.length===0}
                    @click=${()=>e.onBulkDelete(e.selectedKeys)}
                  >
                    删除已选
                  </button>
                </div>
              </div>
            `:y}

      ${e.error?r`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:y}

      <div class="muted" style="margin-top: 12px;">
        ${e.result?`${i("sessionsStore")}: ${e.result.path}`:""}
      </div>

      <div class="table" style="margin-top: 16px;">
        <div class="table-head">
          ${e.bulkMode?r`<div></div>`:y}
          <div>${i("sessionsKey")}</div>
          <div>${i("sessionsLabel")}</div>
          <div>${i("sessionsKind")}</div>
          <div>${i("sessionsUpdated")}</div>
          <div>${i("sessionsTokens")}</div>
          <div>${i("sessionsThinking")}</div>
          <div>${i("sessionsVerbose")}</div>
          <div>${i("sessionsReasoning")}</div>
          <div>${i("sessionsActions")}</div>
        </div>
        ${t.length===0?r`
                <div class="muted">${i("sessionsNoFound")}</div>
              `:t.map(n=>fy(n,e.basePath,e.onPatch,e.onDelete,e.loading,e.bulkMode,e.selectedKeys,e.onSelectionChange))}
      </div>
    </section>
  `}function fy(e,t,n,s,a,o,l,d){const u=e.updatedAt?te(e.updatedAt):"n/a",f=e.thinkingLevel??"",g=_c(e.modelProvider),m=py(f,g),v=El(uy(e.modelProvider),m);e.verboseLevel;const k=e.reasoningLevel??"";El(Ml,k);const c=typeof e.displayName=="string"&&e.displayName.trim().length>0?e.displayName.trim():null,p=typeof e.label=="string"?e.label.trim():"",h=!!(c&&c!==e.key&&c!==p),b=e.kind!=="global",S=b?`${Ln("chat",t)}?session=${encodeURIComponent(e.key)}`:null,C=e.key==="agent.main.main",A=l.includes(e.key);return r`
    <div class="table-row">
      ${o?r`
              <div>
                <input
                  type="checkbox"
                  .checked=${A}
                  ?disabled=${a||C}
                  @change=${E=>d(e.key,E.target.checked)}
                />
              </div>
            `:y}
      <div class="mono session-key-cell">
        ${b?r`<a href=${S} class="session-link">${e.key}</a>`:e.key}
        ${h?r`<span class="muted session-key-display-name">${c}</span>`:y}
      </div>
      <div>
        <input
          .value=${e.label??""}
          ?disabled=${a}
          placeholder=${i("commonOptional")}
          @change=${E=>{const T=E.target.value.trim();n(e.key,{label:T||null})}}
        />
      </div>
      <div>${e.kind}</div>
      <div>${u}</div>
      <div>${lv(e)}</div>
      <div>
        <select
          ?disabled=${a}
          @change=${E=>{const T=E.target.value;n(e.key,{thinkingLevel:gy(T,g)})}}
        >
          ${v.map(E=>r`<option value=${E}>${E||i("commonInherit")}</option>`)}
        </select>
      </div>
      <div>
        <select
          ?disabled=${a}
          @change=${E=>{const T=E.target.value;n(e.key,{verboseLevel:T||null})}}
        >
          ${cy().map(E=>r`<option value=${E.value}>${E.label}</option>`)}
        </select>
      </div>
      <div>
        <select
          ?disabled=${a}
          @change=${E=>{const T=E.target.value;n(e.key,{reasoningLevel:T||null})}}
        >
          ${Ml.map(E=>r`<option value=${E}>${E||i("commonInherit")}</option>`)}
        </select>
      </div>
      <div>
        <button class="btn danger" ?disabled=${a} @click=${()=>s(e.key)}>
          ${i("commonDelete")}
        </button>
      </div>
    </div>
  `}const Tl=r`
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
    <path d="M2 17l10 5 10-5"/>
  </svg>
`;function xn(e){const t=(e??"").trim();return t||"其它"}function hy(e){const t=new Map;for(const n of e){const s=xn(n.categoryCn);t.set(s,(t.get(s)??0)+1)}return[...t.entries()].sort((n,s)=>s[1]-n[1]).map(([n,s])=>({name:n,count:s}))}function vy(e,t,n){const s=(t??"").trim().toLowerCase(),a=(n??"").trim()||"__all__",o=(e??[]).filter(u=>!(s&&!`${u.name??""} ${u.description??""} ${u.folder??""}`.toLowerCase().includes(s)||a!=="__all__"&&(u.status??"").trim().toLowerCase()!==a)),l=new Map;l.set("__all__",o.length);for(const u of o){const f=xn(u.categoryCn);l.set(f,(l.get(f)??0)+1)}return{orderedCategories:["__all__",...Array.from(l.keys()).filter(u=>u!=="__all__").sort((u,f)=>u.localeCompare(f,"zh-Hans-CN"))],counts:l}}function dn(e){return e?e.split(",").map(t=>t.trim()).filter(Boolean):[]}function yy(e){const t=e.trimStart();if(!t.startsWith("---"))return e;const n=t.slice(3),s=n.search(/\r?\n/);if(s===-1)return e;const a=n.slice(s+(n[s]==="\r"?2:1)),o=a.match(/\r?\n\s*---\s*\r?\n?/);return o?a.slice(o.index+o[0].length).trimStart():e}function _l(e){const t=(e??"").trim().toLowerCase();return t?t==="open"?"开放":t==="paid"?"付费":t==="private"?"私有":e??"":""}function by(e){const t=hy(e.items),n=e.selectedCategory||"__all__",s=e.selectedStatus||"__all__",a=(e.query??"").trim().toLowerCase(),o=e.items.filter(g=>{if(a&&!`${g.name??""} ${g.description??""} ${g.folder??""}`.toLowerCase().includes(a))return!1;const m=n==="__all__"?!0:xn(g.categoryCn)===n,v=s==="__all__"?!0:(g.status??"").trim().toLowerCase()===s;return m&&v}),l=new Map;for(const g of o){const m=xn(g.categoryCn),v=l.get(m)??[];v.push(g),l.set(m,v)}const d=n==="__all__"?t.map(g=>g.name).filter(g=>l.has(g)).map(g=>({name:g,items:l.get(g)??[]})):[{name:n,items:l.get(n)??[]}],u=!!e.selectedFolder,f=()=>e.onDetailClose?.()??e.onSelect("");return r`
    <main class="emp-page">
      <section class="emp-list-wrap">
        <div class="emp-content">
          <div class="emp-main">
            <div class="emp-toolbar">
              <h2 class="emp-toolbar__title">${n==="__all__"?"技能库":n}</h2>
              <div class="emp-toolbar__actions">
                <div class="row" style="gap: 8px; flex-wrap: wrap; align-items: center;">
                  <div class="emp-search">
                    <input
                      class="emp-search__input"
                      type="text"
                      placeholder="搜索技能"
                      .value=${e.query}
                      ?disabled=${e.loading}
                      @input=${g=>e.onQueryChange(g.target.value)}
                    />
                    <span class="emp-search__icon" aria-hidden="true">🔍</span>
                  </div>
                  <button class="btn" @click=${e.onRefresh} ?disabled=${e.loading}>刷新</button>
                  <button class="btn primary" ?disabled=${e.loading} @click=${e.onAddClick}>${i("skillsAdd")}</button>
                </div>
              </div>
            </div>

            ${e.error?r`<div class="callout danger" style="margin-bottom: 16px;">${e.error}</div>`:y}
            ${e.installSuccess?r`<div class="callout success" style="margin-bottom: 16px;">${e.installSuccess}</div>`:y}

            ${(()=>{const g=(e.items??[]).filter(m=>e.installedKeys?.has(m.folder));return g.length===0?y:r`
                <div class="emp-installed-section">
                  <h3 class="emp-section__title">已安装 (${g.length})</h3>
                  <div class="emp-grid emp-installed-grid">
                    ${g.map(m=>{const v=e.selectedFolder===m.folder,c=!(e.disabledKeys?.has(m.folder)??!1);e.installingFolder,m.folder;const p=dn(m.tags),h=dn(m.os),b=_l(m.status);return r`
                        <div class="emp-card-wrap ${v?"active":""}">
                          <div class="emp-card emp-card-btn" @click=${()=>e.onSelect(m.folder)}>
                            <div class="emp-card__icon ${m.emoji?"":"emp-card__icon--default"}">
                              ${m.emoji?m.emoji:Tl}
                            </div>
                            <div class="emp-card__actions">
                              <span class="market-card-status">${c?"启用":"禁用"}</span>
                              ${e.onToggleEnabled?r`<button class="market-card-icon-btn" title=${c?"禁用":"启用"} @click=${S=>{S.stopPropagation(),e.onToggleEnabled(m.folder,!c)}}>${j(c?"powerOff":"power")}</button>`:y}
                              ${e.onDelete?r`<button class="market-card-icon-btn danger" title="删除" @click=${S=>{S.stopPropagation(),e.onDelete(m.folder)}}>${j("trash")}</button>`:y}
                            </div>
                            <h3 class="emp-card__title">${m.name}</h3>
                            <p class="emp-card__desc">${m.description??m.folder}</p>
                            <div style="margin-top: 8px; display: flex; flex-wrap: wrap; gap: 6px;">
                              ${b?r`<span class="badge">${b}</span>`:r`<span class="badge ghost">未标注</span>`}
                              ${p.slice(0,3).map(S=>r`<span class="badge ghost">${S}</span>`)}
                              ${h.length>0?r`<span class="badge ghost">OS: ${h.join("/")}</span>`:y}
                            </div>
                          </div>
                        </div>
                      `})}
                  </div>
                </div>
              `})()}

            ${e.addModalOpen?r`
                  <div class="modal-overlay" @click=${e.onAddClose}>
                    <div class="modal card" @click=${g=>g.stopPropagation()}>
                      <div class="card-title">${i("skillsAddSkill")}</div>
                      <div class="field" style="margin-top: 12px;">
                        <span>${i("skillsUploadName")}</span>
                        <input
                          type="text"
                          .value=${e.uploadName}
                          @input=${g=>e.onUploadNameChange(g.target.value)}
                          placeholder=${i("skillsUploadNamePlaceholder")}
                          pattern="[a-zA-Z0-9][a-zA-Z0-9_-]{0,63}"
                          ?disabled=${e.uploadFiles.length>1}
                        />
                        ${e.uploadFiles.length>1?r`
                              <div class="muted" style="margin-top: 4px; font-size: 0.9em;">
                                已选择多个压缩包：将自动从每个文件名提取技能名称（此处无需填写）。
                              </div>
                            `:y}
                      </div>
                      <div class="field" style="margin-top: 12px;">
                        <span>${i("skillsUploadFile")}</span>
                        <input
                          type="file"
                          accept=".md,.zip"
                          multiple
                          @change=${g=>{const m=g.target,v=m.files?Array.from(m.files):[];e.onUploadFilesChange(v)}}
                        />
                        <div class="muted" style="margin-top: 4px; font-size: 0.9em;">
                          ${i("skillsUploadFileHint")}
                        </div>
                        ${e.uploadFiles.length>0?r`
                              <div class="row" style="flex-wrap: wrap; gap: 4px; margin-top: 8px;">
                                ${e.uploadFiles.map(g=>r`<span class="chip" style="font-size: 12px;">${g.name}</span>`)}
                              </div>
                            `:y}
                      </div>
                      ${e.uploadError?r`
                            <div class="callout danger" style="margin-top: 12px;">
                              ${e.uploadError}
                            </div>
                          `:y}
                      ${e.uploadTemplate?r`
                            <details class="muted" style="margin-top: 12px;">
                              <summary>Template</summary>
                              <pre
                                style="
                                  margin-top: 8px;
                                  padding: 12px;
                                  background: var(--bg-muted, #f5f5f5);
                                  border-radius: 6px;
                                  overflow: auto;
                                  max-height: 200px;
                                  font-size: 0.85em;
                                  white-space: pre-wrap;
                                "
                              >${e.uploadTemplate}</pre>
                            </details>
                          `:y}
                      <div class="row" style="margin-top: 16px; justify-content: flex-end; gap: 8px;">
                        <button class="btn" ?disabled=${e.uploadBusy} @click=${e.onAddClose}>
                          ${i("commonCancel")}
                        </button>
                        <button
                          class="btn primary"
                          ?disabled=${e.uploadBusy||e.uploadFiles.length===0||e.uploadFiles.length===1&&!e.uploadName.trim()}
                          @click=${e.onUploadSubmit}
                        >
                          ${e.uploadBusy?i("commonLoading"):i("skillsUploadSubmit")}
                        </button>
                      </div>
                    </div>
                  </div>
                `:y}

            ${e.loading?r`<div class="emp-loading">加载中...</div>`:d.length===0?r`<div class="emp-empty">暂无匹配的技能</div>`:r`
                    <div class="emp-sections">
                      ${d.map(g=>r`
                          <div class="emp-section">
                            <h3 class="emp-section__title">${g.name}</h3>
                            <div class="emp-grid">
                              ${g.items.map(m=>{const v=e.selectedFolder===m.folder,k=e.installedKeys&&e.installedKeys.size>0?e.installedKeys.has(m.folder):!1,p=!(e.disabledKeys?.has(m.folder)??!1),h=e.installingFolder===m.folder,b=dn(m.tags),S=dn(m.os),C=_l(m.status);return r`
                                  <div class="emp-card-wrap ${v?"active":""}">
                                    <div class="emp-card emp-card-btn" @click=${()=>e.onSelect(m.folder)}>
                                      <div class="emp-card__icon ${m.emoji?"":"emp-card__icon--default"}">
                                        ${m.emoji?m.emoji:Tl}
                                      </div>
                                      <div class="emp-card__actions">
                                        ${k?r`
                                              <span class="market-card-status">${p?"启用":"禁用"}</span>
                                              ${e.onToggleEnabled?r`<button class="market-card-icon-btn" title=${p?"禁用":"启用"}
                                                    @click=${A=>{A.stopPropagation(),e.onToggleEnabled(m.folder,!p)}}
                                                  >${j(p?"powerOff":"power")}</button>`:y}
                                              ${e.onDelete?r`<button class="market-card-icon-btn danger" title="删除"
                                                    @click=${A=>{A.stopPropagation(),e.onDelete(m.folder)}}
                                                  >${j("trash")}</button>`:y}
                                            `:e.onInstall?r`<button class="market-card-icon-btn primary" title="安装"
                                                ?disabled=${h}
                                                @click=${A=>{A.stopPropagation(),e.onInstall(m.folder,m.categoryCn)}}
                                              >${j(h?"loader2":"download")}</button>`:r`<a class="market-card-icon-btn primary" href=${`/api/v1/skills/${encodeURIComponent(m.folder)}/download`} target="_blank" rel="noopener" title="下载" @click=${A=>A.stopPropagation()}>${j("download")}</a>`}
                                      </div>
                                      <h3 class="emp-card__title">${m.name}</h3>
                                      <p class="emp-card__desc">${m.description??m.folder}</p>
                                      <div style="margin-top: 8px; display: flex; flex-wrap: wrap; gap: 6px;">
                                        ${C?r`<span class="badge">${C}</span>`:r`<span class="badge ghost">未标注</span>`}
                                        ${b.slice(0,3).map(A=>r`<span class="badge ghost">${A}</span>`)}
                                        ${S.length>0?r`<span class="badge ghost">OS: ${S.join("/")}</span>`:y}
                                      </div>
                                    </div>
                                  </div>
                                `})}
                            </div>
                          </div>
                        `)}
                    </div>
                  `}
          </div>
        </div>

        ${u?r`
              <div class="modal-overlay" @click=${f} role="dialog" aria-modal="true">
                <div class="modal card emp-detail-modal emp-detail-modal--large" @click=${g=>g.stopPropagation()}>
                  <div class="emp-detail-modal__header">
                    <div class="emp-detail-header" style="flex: 1; min-width: 0;">
                      <h1 id="emp-detail-title" class="emp-detail-title" style="margin: 0;">${e.selectedFolder}</h1>
                      <div class="emp-detail-meta-row" style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-top: 8px;">
                        ${(()=>{const g=e.selectedFolder??"",m=e.installedKeys?.has(g)??!1,k=!(e.disabledKeys?.has(g)??!1);return m?r`
                              <span class="market-card-status">${k?"启用":"禁用"}</span>
                              ${e.onToggleEnabled?r`<button class="market-card-icon-btn" title=${k?"禁用":"启用"} @click=${()=>{e.onToggleEnabled(g,!k)}}>${j(k?"powerOff":"power")}</button>`:y}
                              ${e.onDelete?r`<button class="market-card-icon-btn danger" title="删除" @click=${()=>{e.onDelete(g)}}>${j("trash")}</button>`:y}
                            `:e.onInstall?r`<button class="market-card-icon-btn primary" title="安装" ?disabled=${e.installingFolder===g} @click=${()=>{e.onInstall(g)}}>${e.installingFolder===g?j("loader2"):j("download")}</button>`:r`<a class="market-card-icon-btn primary" href=${`/api/v1/skills/${encodeURIComponent(g)}/download`} target="_blank" rel="noopener" title="下载">${j("download")}</a>`})()}
                      </div>
                    </div>
                    <div class="emp-detail-meta-right" style="display: flex; align-items: flex-start; gap: 8px; flex-wrap: wrap; flex-shrink: 0;">
                      ${(()=>{const g=e.items.find(k=>k.folder===e.selectedFolder);if(!g)return y;const m=xn(g.categoryCn),v=dn(g.tags);return r`
                          ${m?r`<span class="badge ghost">${m}</span>`:y}
                          ${v.map(k=>r`<span class="badge ghost">${k}</span>`)}
                        `})()}
                      <button class="btn emp-detail-modal__close" aria-label="关闭" @click=${f}>×</button>
                    </div>
                  </div>
                  <div class="emp-detail-modal__body">
                    ${e.selectedDetail?.content?r`<div class="emp-detail-markdown emp-detail-content">${Vt(Gt(yy(e.selectedDetail.content)))}</div>`:r`<div class="callout info">加载中或无内容</div>`}
                  </div>
                </div>
              </div>
            `:y}
      </section>
    </main>
  `}function xy(e){return{prometheus:"Prometheus",elasticsearch:"Elasticsearch",filesystem:"Filesystem"}[e.toLowerCase()]??e.charAt(0).toUpperCase()+e.slice(1)}function Pc(e){return!e||typeof e!="object"?"":Object.entries(e).map(([t,n])=>`${t}=${n}`).join(`
`)}function wy(e,t,n,s){if(n==="raw")return!s;const a=e,o=t??"stdio";return o==="stdio"?!!a?.command?.trim():o==="url"?!!a?.url?.trim():o==="service"?!!a?.service?.trim()&&!!a?.serviceUrl?.trim():!1}function Lc(e){const t={};for(const n of e.split(/\n/)){const s=n.trim();if(!s)continue;const a=s.indexOf("=");if(a>0){const o=s.slice(0,a).trim(),l=s.slice(a+1).trim();o&&(t[o]=l)}}return t}function $y(e,t,n){const s=["npx","docker","uv"];if(e==="stdio"){const a=t?.command??"npx",o=s.includes(a)?a:"npx";return r`
      <div class="field">
        <span>${i("mcpCommand")} *</span>
        <select
          .value=${o}
          @change=${l=>n({command:l.target.value})}
        >
          ${s.map(l=>r`<option value=${l}>${l}</option>`)}
        </select>
      <div class="field">
        <span>${i("mcpArgs")}</span>
        <input
          type="text"
          .value={(draft?.args ?? []).join(" ")}
          placeholder="-y prometheus-mcp-server"
          @input=${l=>{const d=l.target.value;n({args:d.trim()?d.trim().split(/\s+/):[]})}}
        />
      </div>
      <div class="field">
        <span>${i("mcpEnv")}</span>
        <textarea
          style="min-height: 80px; font-family: var(--mono); font-size: 12px;"
          placeholder=${i("mcpEnvPlaceholder")}
          .value=${Pc(t?.env)}
          @input=${l=>{const d=l.target.value;n({env:Lc(d)})}}
        ></textarea>
      </div>
    `}return e==="url"?r`
      <div class="field">
        <span>${i("mcpUrl")} *</span>
        <input
          type="text"
          .value=${t?.url??""}
          placeholder="https://mcp.example.com/sse"
          @input=${a=>n({url:a.target.value})}
        />
      </div>
    `:r`
    <div class="field">
      <span>${i("mcpService")} *</span>
      <input
        type="text"
        .value=${t?.service??""}
        placeholder="prometheus"
        @input=${a=>n({service:a.target.value})}
      />
    </div>
    <div class="field">
      <span>${i("mcpServiceUrl")} *</span>
      <input
        type="text"
        .value=${t?.serviceUrl??""}
        placeholder="http://localhost:9090"
        @input=${a=>n({serviceUrl:a.target.value})}
      />
    </div>
  `}function ky(e,t,n,s){const a=["npx","docker","uv"];if(e==="stdio"){const o=t.command??"npx",l=a.includes(o)?o:"npx";return r`
      <div class="field">
        <span>${i("mcpCommand")} *</span>
        <select
          .value=${l}
          @change=${d=>s(n,{command:d.target.value})}
        >
          ${a.map(d=>r`<option value=${d}>${d}</option>`)}
        </select>
      <div class="field">
        <span>${i("mcpArgs")}</span>
        <input
          type="text"
          .value=${(t.args??[]).join(" ")}
          placeholder="-y prometheus-mcp-server"
          @input=${d=>{const u=d.target.value;s(n,{args:u.trim()?u.trim().split(/\s+/):[]})}}
        />
      </div>
      <div class="field">
        <span>${i("mcpEnv")}</span>
        <textarea
          style="min-height: 80px; font-family: var(--mono); font-size: 12px;"
          placeholder=${i("mcpEnvPlaceholder")}
          .value=${Pc(t.env)}
          @input=${d=>{const u=d.target.value;s(n,{env:Lc(u)})}}
        ></textarea>
      </div>
    `}return e==="url"?r`
      <div class="field">
        <span>${i("mcpUrl")} *</span>
        <input
          type="text"
          .value=${t.url??""}
          placeholder="https://mcp.example.com/sse"
          @input=${o=>s(n,{url:o.target.value})}
        />
      </div>
    `:r`
    <div class="field">
      <span>${i("mcpService")} *</span>
      <input
        type="text"
        .value=${t.service??""}
        placeholder="prometheus"
        @input=${o=>s(n,{service:o.target.value})}
      />
    </div>
    <div class="field">
      <span>${i("mcpServiceUrl")} *</span>
      <input
        type="text"
        .value=${t.serviceUrl??""}
        placeholder="http://localhost:9090"
        @input=${o=>s(n,{serviceUrl:o.target.value})}
      />
    </div>
  `}function Sy(e){return xy(e)}function Ay(e){if(!e.open)return y;const{serverKey:t,entry:n}=e;return r`
    <div class="modal-overlay" @click=${e.onCancel}>
      <div class="modal card" style="max-width: 560px;" @click=${s=>s.stopPropagation()}>
        <div class="card-title">${Sy(t)} ${i("configSettingsTitle")}</div>
        <div class="row" style="margin-bottom: 12px; gap: 8px;">
          <button
            class="btn ${e.editMode==="form"?"primary":""}"
            @click=${()=>e.onEditModeChange("form")}
          >
            ${i("mcpFormMode")}
          </button>
          <button
            class="btn ${e.editMode==="raw"?"primary":""}"
            @click=${()=>{e.onEditModeChange("raw"),e.onRawChange(t,JSON.stringify(n,null,2))}}
          >
            ${i("mcpRawMode")}
          </button>
        </div>
        ${e.editMode==="form"?r`
                <div class="config-form">
                  <div class="field">
                    <span>${i("mcpEnabled")}</span>
                    <div class="row" style="align-items: center; gap: 8px;">
                      <input
                        type="checkbox"
                        ?checked=${n.enabled!==!1}
                        @change=${s=>e.onFormPatch(t,{enabled:s.target.checked})}
                      />
                    </div>
                  </div>
                  <div class="mcp-connection-tabs" style="display: flex; gap: 4px; margin-bottom: 16px; border-bottom: 1px solid var(--input, #333); padding-bottom: 4px;">
                    <button
                      type="button"
                      class="btn ${(e.editConnectionType??"stdio")==="stdio"?"primary":""}"
                      style="flex: 1; min-width: 0;"
                      @click=${()=>e.onEditConnectionTypeChange("stdio")}
                    >
                      ${i("mcpConnectionTypeStdio")}
                    </button>
                    <button
                      type="button"
                      class="btn ${(e.editConnectionType??"stdio")==="url"?"primary":""}"
                      style="flex: 1; min-width: 0;"
                      @click=${()=>e.onEditConnectionTypeChange("url")}
                    >
                      ${i("mcpConnectionTypeUrl")}
                    </button>
                    <button
                      type="button"
                      class="btn ${(e.editConnectionType??"stdio")==="service"?"primary":""}"
                      style="flex: 1; min-width: 0;"
                      @click=${()=>e.onEditConnectionTypeChange("service")}
                    >
                      ${i("mcpConnectionTypeService")}
                    </button>
                  </div>
                  <div class="mcp-connection-fields" style="margin-bottom: 12px;">
                    ${ky(e.editConnectionType==="stdio"||e.editConnectionType==="url"||e.editConnectionType==="service"?e.editConnectionType:"stdio",n,t,e.onFormPatch)}
                  </div>
                  <div class="field">
                    <span>${i("mcpToolPrefix")}</span>
                    <input
                      type="text"
                      .value=${n.toolPrefix??""}
                      placeholder="Optional"
                      @input=${s=>e.onFormPatch(t,{toolPrefix:s.target.value})}
                    />
                  </div>
                </div>
              `:r`
                <div class="field">
                  <span>${i("mcpRawJson")}</span>
                  <textarea
                    style="min-height: 200px; font-family: var(--mono);"
                    .value=${e.rawJson}
                    @input=${s=>e.onRawChange(t,s.target.value)}
                  ></textarea>
                  ${e.rawError?r`<div class="callout danger" style="margin-top: 8px;">${e.rawError}</div>`:y}
                </div>
              `}
        <div class="row" style="margin-top: 16px; gap: 8px;">
          <button
            class="btn primary"
            ?disabled=${e.saving||!e.formDirty&&e.editMode==="form"}
            @click=${e.onSave}
          >
            ${e.saving?i("commonSaving"):i("commonSave")}
          </button>
          <button class="btn" ?disabled=${e.saving} @click=${e.onCancel}>
            ${i("commonCancel")}
          </button>
        </div>
      </div>
    </div>
  `}const Pl=r`
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <rect x="4" y="4" width="8" height="8" rx="1"/>
    <rect x="12" y="12" width="8" height="8" rx="1"/>
  </svg>
`;function bt(e){const t=(e??"").trim();return t||"其它"}function Ic(e){return(e??"").trim().toLowerCase()}function ia(e){const t=(e??"").trim().toLowerCase();return t?t==="open"?"开放":t==="paid"?"收费":t==="private"?"私有":e??"":""}function la(e){return e?e.split(",").map(t=>t.trim()).filter(Boolean):[]}function Cy(e,t){const n=Ic(t),s=(e??[]).filter(l=>n?`${l.name??""} ${l.description??""}`.toLowerCase().includes(n):!0),a=new Map;a.set("__all__",s.length);for(const l of s){const d=bt(l.category);a.set(d,(a.get(d)??0)+1)}return{orderedCategories:["__all__",...Array.from(a.keys()).filter(l=>l!=="__all__").sort((l,d)=>l.localeCompare(d,"zh-Hans-CN"))],counts:a}}function My(e){const t=e.trimStart();if(!t.startsWith("---"))return e;const n=t.slice(3),s=n.search(/\r?\n/);if(s===-1)return e;const a=n.slice(s+(n[s]==="\r"?2:1)),o=a.match(/\r?\n\s*---\s*\r?\n?/);return o?a.slice(o.index+o[0].length).trimStart():e}function Ey(e){const t=(e.category??"").trim()||"__all__",n=Ic(e.query),s=(e.items??[]).filter(g=>n?`${g.name??""} ${g.description??""}`.toLowerCase().includes(n):!0),a=new Map;a.set("__all__",s.length);for(const g of s){const m=bt(g.category);a.set(m,(a.get(m)??0)+1)}[...Array.from(a.keys()).filter(g=>g!=="__all__").sort((g,m)=>g.localeCompare(m,"zh-Hans-CN"))];const o=t==="__all__"?s:s.filter(g=>bt(g.category)===t),l=new Map;for(const g of o){const m=bt(g.category),v=l.get(m)??[];v.push(g),l.set(m,v)}const d=t==="__all__"?Array.from(l.entries()).sort((g,m)=>g[0].localeCompare(m[0],"zh-Hans-CN")).map(([g,m])=>({title:g==="其它"?"其它":g,items:m})):[{title:t,items:o}],u=e.selectedDetail!==null,f=()=>e.onDetailClose?.()??e.onSelect(-1);return r`
    <main class="emp-page">
      <section class="emp-list-wrap">
        <div class="emp-content">
          <div class="emp-main">
            <div class="emp-toolbar">
              <h2 class="emp-toolbar__title">${t==="__all__"?"工具库（MCP）":t}</h2>
              <div class="emp-toolbar__actions">
                <div class="row" style="gap: 8px; flex-wrap: wrap; align-items: center;">
                  <div class="emp-search">
                    <input
                      class="emp-search__input"
                      type="text"
                      placeholder="搜索 MCP 名称或描述..."
                      .value=${e.query}
                      ?disabled=${e.loading}
                      @input=${g=>e.onQueryChange(g.target.value)}
                    />
                    <span class="emp-search__icon" aria-hidden="true">🔍</span>
                  </div>
                  ${e.onAddServer?r`
                        <button class="btn primary" ?disabled=${e.loading} @click=${e.onAddServer}>
                          ${i("mcpAddServer")}
                        </button>
                      `:y}
                  <button class="btn" @click=${e.onRefresh} ?disabled=${e.loading}>刷新</button>
                </div>
              </div>
            </div>

            ${e.addModalOpen&&e.onAddClose?r`
                    <div class="modal-overlay" @click=${e.onAddClose}>
                      <div class="modal card" style="max-width: 520px;" @click=${g=>g.stopPropagation()}>
                        <div class="card-title">${i("mcpAddServer")}</div>
                        <div class="field" style="margin-top: 12px;">
                          <span>${i("mcpServerName")} *</span>
                          <input
                            type="text"
                            .value=${e.addName??""}
                            @input=${g=>e.onAddNameChange?.(g.target.value)}
                            placeholder="prometheus, my-mcp"
                          />
                        </div>
                        <div class="row" style="margin: 12px 0; gap: 8px;">
                          <button
                            class="btn ${(e.addEditMode??"form")==="form"?"primary":""}"
                            @click=${()=>e.onAddEditModeChange?.("form")}
                          >
                            ${i("mcpFormMode")}
                          </button>
                          <button
                            class="btn ${(e.addEditMode??"form")==="raw"?"primary":""}"
                            @click=${()=>e.onAddEditModeChange?.("raw")}
                          >
                            ${i("mcpRawMode")}
                          </button>
                        </div>
                        ${(e.addEditMode??"form")==="form"?r`
                                <div class="config-form" id="tool-library-mcp-add-form">
                                  <div class="mcp-connection-tabs" style="display: flex; gap: 4px; margin-bottom: 16px; border-bottom: 1px solid var(--input, #333); padding-bottom: 4px;">
                                    <button
                                      type="button"
                                      class="btn ${(e.addConnectionType??"stdio")==="stdio"?"primary":""}"
                                      style="flex: 1; min-width: 0;"
                                      @click=${()=>e.onAddConnectionTypeChange?.("stdio")}
                                    >
                                      ${i("mcpConnectionTypeStdio")}
                                    </button>
                                    <button
                                      type="button"
                                      class="btn ${(e.addConnectionType??"stdio")==="url"?"primary":""}"
                                      style="flex: 1; min-width: 0;"
                                      @click=${()=>e.onAddConnectionTypeChange?.("url")}
                                    >
                                      ${i("mcpConnectionTypeUrl")}
                                    </button>
                                    <button
                                      type="button"
                                      class="btn ${(e.addConnectionType??"stdio")==="service"?"primary":""}"
                                      style="flex: 1; min-width: 0;"
                                      @click=${()=>e.onAddConnectionTypeChange?.("service")}
                                    >
                                      ${i("mcpConnectionTypeService")}
                                    </button>
                                  </div>
                                  <div class="mcp-connection-fields" style="margin-bottom: 12px;">
                                    ${$y(e.addConnectionType==="stdio"||e.addConnectionType==="url"||e.addConnectionType==="service"?e.addConnectionType:"stdio",e.addDraft,g=>e.onAddFormPatch?.(g))}
                                  </div>
                                  <div class="field">
                                    <span>${i("mcpToolPrefix")}</span>
                                    <input
                                      type="text"
                                      .value=${e.addDraft?.toolPrefix??""}
                                      placeholder="Optional"
                                      @input=${g=>e.onAddFormPatch?.({toolPrefix:g.target.value})}
                                    />
                                  </div>
                                </div>
                              `:r`
                                <div class="field">
                                  <span>${i("mcpRawJson")}</span>
                                  <textarea
                                    style="min-height: 180px; font-family: var(--mono);"
                                    .value=${e.addRawJson??"{}"}
                                    @input=${g=>e.onAddRawChange?.(g.target.value)}
                                  ></textarea>
                                  ${e.addRawError?r`<div class="callout danger" style="margin-top: 8px;">${e.addRawError}</div>`:y}
                                </div>
                              `}
                        <div class="row" style="margin-top: 16px; gap: 8px; justify-content: flex-end;">
                          <button class="btn" @click=${e.onAddClose}>${i("commonCancel")}</button>
                          <button
                            class="btn primary"
                            ?disabled=${e.saving||!(e.addName??"").trim()||!wy(e.addDraft,e.addConnectionType??"stdio",e.addEditMode??"form",e.addRawError??null)}
                            @click=${e.onAddSubmit}
                          >
                            ${e.saving?i("commonSaving"):i("mcpAddServer")}
                          </button>
                        </div>
                      </div>
                    </div>
                  `:y}

            ${e.error?r`<div class="callout danger" style="margin-bottom: 16px;">${e.error}</div>`:y}

            ${(()=>{const g=(e.items??[]).filter(m=>e.installedRemoteIds?.has(String(m.id)));return g.length===0?y:r`
                <div class="emp-installed-section">
                  <h3 class="emp-section__title">已安装 (${g.length})</h3>
                  <div class="emp-grid emp-installed-grid">
                    ${g.map(m=>{const v=e.selectedId===m.id,k=bn(m.logo_url),c=ia(m.status),p=la(m.tags),h=e.installedMcpMap?.get(m.id),S=!(h?e.disabledMcpKeys?.has(h)??!1:!1),C=e.installingId===m.id;return r`
                        <div class="emp-card-wrap ${v?"active":""}">
                          <div class="emp-card emp-card-btn" @click=${()=>e.onSelect(m.id)}>
                            <div class="emp-card__icon ${k?"":"emp-card__icon--default"}">
                              ${k?r`<img src=${k} alt="" />`:Pl}
                            </div>
                            <div class="emp-card__actions">
                              ${h?r`
                                    <span class="market-card-status">${S?"启用":"禁用"}</span>
                                    ${e.onEdit?r`<button class="market-card-icon-btn" title="修改" @click=${A=>{A.stopPropagation(),e.onEdit(h)}}>${j("edit")}</button>`:y}
                                    ${e.onToggleEnabled?r`<button class="market-card-icon-btn" title=${S?"禁用":"启用"} @click=${A=>{A.stopPropagation(),e.onToggleEnabled(h,!S)}}>${j(S?"powerOff":"power")}</button>`:y}
                                    ${e.onDelete?r`<button class="market-card-icon-btn danger" title="删除" @click=${A=>{A.stopPropagation(),e.onDelete(h)}}>${j("trash")}</button>`:y}
                                  `:e.onInstall?r`<button class="market-card-icon-btn primary" title="安装" ?disabled=${C} @click=${A=>{A.stopPropagation(),e.onInstall(m.id,m.category)}}>${j(C?"loader2":"download")}</button>`:r`<a class="market-card-icon-btn primary" href=${`/api/v1/mcps/${m.id}/download`} target="_blank" rel="noopener" title="下载" @click=${A=>A.stopPropagation()}>${j("download")}</a>`}
                            </div>
                            <h3 class="emp-card__title">${m.name}</h3>
                            <p class="emp-card__desc">${m.description??"暂无描述"}</p>
                            <div style="margin-top: 8px; display: flex; flex-wrap: wrap; gap: 6px;">
                              ${(m.category??"").trim()?r`<span class="badge ghost">${bt(m.category)}</span>`:y}
                              ${c?r`<span class="badge">${c}</span>`:y}
                              ${p.slice(0,3).map(A=>r`<span class="badge ghost">${A}</span>`)}
                            </div>
                          </div>
                        </div>
                      `})}
                  </div>
                </div>
              `})()}

            ${e.loading?r`<div class="emp-loading">加载中...</div>`:o.length===0?r`<div class="emp-empty">暂无匹配的 MCP</div>`:r`
                      <div class="emp-sections">
                        ${d.map(g=>g.items.length>0?r`
                                  <div class="emp-section">
                                    <h3 class="emp-section__title">${g.title}</h3>
                                    <div class="emp-grid">
                                      ${g.items.map(m=>{const v=e.selectedId===m.id,k=bn(m.logo_url),c=ia(m.status),p=la(m.tags);return r`
                                          <div class="emp-card-wrap ${v?"active":""}">
                                            <div class="emp-card emp-card-btn" @click=${()=>e.onSelect(m.id)}>
                                              <div class="emp-card__icon ${k?"":"emp-card__icon--default"}">
                                                ${k?r`<img src=${k} alt="" />`:Pl}
                                              </div>
                                              <div class="emp-card__actions">
                                                ${(()=>{const h=e.installedRemoteIds?.has(String(m.id))??!1,b=e.installedMcpMap?.get(m.id),C=!(b?e.disabledMcpKeys?.has(b)??!1:!1),A=e.installingId===m.id;return h&&b?r`
                                                      <span class="market-card-status">${C?"启用":"禁用"}</span>
                                                      ${e.onEdit?r`<button class="market-card-icon-btn" title="修改" @click=${E=>{E.stopPropagation(),e.onEdit(b)}}>${j("edit")}</button>`:y}
                                                      ${e.onToggleEnabled?r`<button class="market-card-icon-btn" title=${C?"禁用":"启用"} @click=${E=>{E.stopPropagation(),e.onToggleEnabled(b,!C)}}>${j(C?"powerOff":"power")}</button>`:y}
                                                      ${e.onDelete?r`<button class="market-card-icon-btn danger" title="删除" @click=${E=>{E.stopPropagation(),e.onDelete(b)}}>${j("trash")}</button>`:y}
                                                    `:e.onInstall?r`<button class="market-card-icon-btn primary" title="安装" ?disabled=${A} @click=${E=>{E.stopPropagation(),e.onInstall(m.id,m.category)}}>${j(A?"loader2":"download")}</button>`:r`<a class="market-card-icon-btn primary" href=${`/api/v1/mcps/${m.id}/download`} target="_blank" rel="noopener" title="下载" @click=${E=>E.stopPropagation()}>${j("download")}</a>`})()}
                                              </div>
                                              <h3 class="emp-card__title">${m.name}</h3>
                                              <p class="emp-card__desc">${m.description??"暂无描述"}</p>
                                              <div style="margin-top: 8px; display: flex; flex-wrap: wrap; gap: 6px;">
                                                ${(m.category??"").trim()?r`<span class="badge ghost">${bt(m.category)}</span>`:y}
                                                ${c?r`<span class="badge">${c}</span>`:y}
                                                ${p.slice(0,3).map(h=>r`<span class="badge ghost">${h}</span>`)}
                                              </div>
                                            </div>
                                          </div>
                                        `})}
                                    </div>
                                  </div>
                                `:y)}
                      </div>
                    `}
          </div>
        </div>

        ${u&&e.selectedDetail?r`
              <div class="modal-overlay" @click=${f} role="dialog" aria-modal="true">
                <div class="modal card emp-detail-modal emp-detail-modal--large" @click=${g=>g.stopPropagation()}>
                  <div class="emp-detail-modal__header">
                    <div class="emp-detail-header" style="flex: 1; min-width: 0;">
                      <h1 id="emp-detail-title" class="emp-detail-title" style="margin: 0;">${e.selectedDetail.name??`#${e.selectedDetail.id}`}</h1>
                      <div class="card-sub" style="margin-top: 6px;">${e.selectedDetail.description??""}</div>
                      <div class="emp-detail-meta-row" style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-top: 8px;">
                        ${(()=>{const g=e.selectedDetail?.id??0,m=e.installedRemoteIds?.has(String(g))??!1,v=e.installedMcpMap?.get(g),c=!(v?e.disabledMcpKeys?.has(v)??!1:!1),p=e.installingId===g;return m&&v?r`
                              <span class="market-card-status">${c?"启用":"禁用"}</span>
                              ${e.onEdit?r`<button class="market-card-icon-btn" title="修改" @click=${()=>{e.onEdit(v)}}>${j("edit")}</button>`:y}
                              ${e.onToggleEnabled?r`<button class="market-card-icon-btn" title=${c?"禁用":"启用"} @click=${()=>{e.onToggleEnabled(v,!c)}}>${j(c?"powerOff":"power")}</button>`:y}
                              ${e.onDelete?r`<button class="market-card-icon-btn danger" title="删除" @click=${()=>{e.onDelete(v)}}>${j("trash")}</button>`:y}
                            `:e.onInstall?r`<button class="market-card-icon-btn primary" title="安装" ?disabled=${p} @click=${()=>{e.onInstall(g,e.selectedDetail?.category)}}>${j(p?"loader2":"download")}</button>`:r`<a class="market-card-icon-btn primary" href=${`/api/v1/mcps/${g}/download`} target="_blank" rel="noopener" title="下载">${j("download")}</a>`})()}
                      </div>
                    </div>
                    <div class="emp-detail-meta-right" style="display: flex; align-items: flex-start; gap: 8px; flex-wrap: wrap; flex-shrink: 0;">
                      ${(e.selectedDetail.category??"").trim()?r`<span class="badge ghost">${bt(e.selectedDetail.category)}</span>`:y}
                      ${(e.selectedDetail.status??"").trim()?r`<span class="badge">${ia(e.selectedDetail.status)}</span>`:y}
                      ${(e.selectedDetail.tags??"").trim()?la(e.selectedDetail.tags).map(g=>r`<span class="badge ghost">${g}</span>`):y}
                      <button class="btn emp-detail-modal__close" aria-label="关闭" @click=${f}>×</button>
                    </div>
                  </div>
                  <div class="emp-detail-modal__body">
                    ${e.selectedDetail.readme?r`<div class="emp-detail-markdown emp-detail-content">${Vt(Gt(My(e.selectedDetail.readme)))}</div>`:r`<div class="callout info">无 README</div>`}
                  </div>
                </div>
              </div>
            `:y}
      </section>
    </main>
  `}const Ty={"octa-icon-plane":r`
    <svg t="1773901020130" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7094" width="200" height="200"><path d="M704 864c-6.4 0-12.8 0-19.2-6.4l-153.6-102.4L454.4 832c-6.4 6.4-25.6 12.8-32 6.4-12.8-6.4-19.2-19.2-19.2-32l0-140.8c0-6.4 0-12.8 6.4-19.2L652.8 384c12.8-12.8 32-12.8 44.8 0 12.8 12.8 12.8 32 0 44.8l-236.8 256 0 51.2 44.8-38.4c12.8-12.8 25.6-12.8 38.4-6.4l140.8 89.6 108.8-531.2L256 512l121.6 76.8C390.4 595.2 396.8 620.8 384 633.6c-6.4 12.8-32 19.2-44.8 12.8L172.8 537.6C166.4 531.2 160 524.8 160 512c0-12.8 6.4-19.2 19.2-25.6l640-320c12.8-6.4 25.6-6.4 32 0 12.8 6.4 12.8 19.2 12.8 32l-128 640c0 12.8-6.4 19.2-19.2 25.6C710.4 864 710.4 864 704 864z" p-id="7095"></path></svg>
  `,"octa-icon-grass":r`
    <svg t="1773900984139" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6109" width="200" height="200"><path d="M938.642286 298.642286v106.715428A277.357714 277.357714 0 0 1 661.211429 682.642286H554.642286v213.357714H469.284571V597.357714l0.804572-42.642285a277.357714 277.357714 0 0 1 276.48-256h192.073143zM255.926857 128a298.788571 298.788571 0 0 1 283.428572 204.214857 319.195429 319.195429 0 0 0-112.054858 222.500572H384A298.642286 298.642286 0 0 1 85.284571 256V128h170.642286z" p-id="6110"></path></svg>
  `,"octa-icon-cap":r`
    <svg t="1773901148418" class="icon" viewBox="0 0 1501 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11216" width="200" height="200"><path d="M1403.062529 303.010087L775.870856 23.143025a89.682024 89.682024 0 0 0-73.125688 0L75.553496 303.010087A89.682024 89.682024 0 0 0 22.389508 384.918026c0 32.059699 17.161237 61.251725 44.359332 77.247969 8.244563 9.476766 17.586907 16.802777 25.271377 22.694951 16.982007 12.926937 21.552363 17.766137 21.552363 27.063674 0 9.275133-4.570355 14.114333-21.552363 27.041269-17.900559 13.688663-45.031444 34.389685-45.031443 74.604332 0 40.192244 27.130885 60.893265 45.031443 74.604332 12.299633 9.364748 18.034981 14.495196 20.320159 20.140929a59.638658 59.638658 0 0 0-54.485806 51.797362l-15.794611 123.825268a59.77308 59.77308 0 0 0 59.325006 67.39034h86.007817a59.77308 59.77308 0 0 0 59.325006-67.39034l-15.772207-123.825268a59.728273 59.728273 0 0 0-58.160013-52.133417c-3.114115-35.353044-27.668574-54.553017-44.448948-67.367936-16.9372-12.904533-21.529959-17.743733-21.529958-27.04127 0-9.297537 4.592759-14.114333 21.507555-27.04127 17.96777-13.711066 45.076251-34.412088 45.076251-74.604331 0-0.492881-0.112019-0.896148-0.112019-1.366626l106.238361 47.473447a83.565813 83.565813 0 0 0-0.985763 11.13464v235.14927c0 170.133723 326.332342 188.504759 466.669139 188.504759 140.29199 0 466.646735-18.371037 466.646735-188.504759v-239.719625c0-4.099878-0.403267-8.132544-0.940955-12.120403l192.089352-85.582147a89.682024 89.682024 0 0 0 0.067211-163.883089zM101.384965 891.510564l15.794611-123.825268H171.598171l15.794611 123.825268H101.384965z m1020.735125-186.846885c-15.861822 20.096122-54.754651 43.62001-120.621538 62.461525-11.851559 3.382959-24.576862 6.586689-37.795048 9.566381a29.931348 29.931348 0 0 0 13.106167 58.361647c14.33837-3.20373 28.161455-6.721111 41.110795-10.417722 42.096558-12.030789 77.023932-26.638003 104.199624-43.306359v22.9862c0 54.553017-168.767097 98.777928-376.919904 98.777928-208.197614 0-376.964711-44.22491-376.964711-98.777928v-24.644074c82.131976 51.998995 230.982181 78.838632 378.734604 78.838632 34.479299 0 68.667351-1.433837 101.668005-4.279107a29.908944 29.908944 0 1 0-5.130448-59.593851c-31.27557 2.688444-63.738536 4.05507-96.537557 4.05507-209.833085 0-351.536508-54.060136-378.734604-98.643505v-102.36252l333.479123 149.029434a89.83885 89.83885 0 0 0 73.125688 0.044807l347.279804-154.719974v112.623416z m-383.797841-39.878592L112.116339 384.94043 739.308012 105.073368l627.191673 279.867062-628.177436 279.844657z" p-id="11217"></path></svg>
  `,"octa-icon-combat":r`
    <svg t="1773901241681" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14447" width="200" height="200"><path d="M300.690286 571.977143l150.820571 150.893714-60.269714 60.342857 60.342857 60.342857-60.342857 60.342858-105.545143-105.618286-120.685714 120.685714-60.342857-60.342857 120.685714-120.685714-105.618286-105.545143 60.342857-60.342857 60.342857 60.269714 60.269715-60.342857zM128 128l151.332571 0.146286 504.173715 504.173714 60.342857-60.269714 60.342857 60.342857-105.545143 105.545143 120.685714 120.685714-60.342857 60.342857-120.685714-120.685714-105.618286 105.618286-60.342857-60.342858 60.342857-60.342857L128 278.674286l-0.146286-150.674286z m616.886857 0l151.113143 0.146286 0.073143 150.308571-172.909714 172.909714-150.893715-150.893714 172.617143-172.470857z" p-id="14448"></path></svg>
  `};function _y(e){const t=(e??"").trim();return t?Ty[t]??null:null}const Ll=[{color:"#f97316",subtle:"rgba(249,115,22,0.2)"},{color:"#3b82f6",subtle:"rgba(59,130,246,0.2)"},{color:"#22c55e",subtle:"rgba(34,197,94,0.2)"},{color:"#8b5cf6",subtle:"rgba(139,92,246,0.2)"},{color:"#ef4444",subtle:"rgba(239,68,68,0.2)"}];function Py(e,t){const n=(e??"").trim().toLowerCase();if(n==="green"||n==="violet"||n==="orange")return`--accent:${n==="green"?"#22c55e":n==="violet"?"#8b5cf6":"#f97316"};--accent-subtle:${n==="green"?"rgba(34,197,94,0.14)":n==="violet"?"rgba(139,92,246,0.14)":"rgba(249,115,22,0.14)"};`;const s=Ll[(t??0)%Ll.length];return`--accent:${s.color};--accent-subtle:${s.subtle};`}function Ly(e){return(e??"").trim().toLowerCase()}function Qn(e,t){return t?(e??"").toLowerCase().includes(t):!0}function Dc(e){const t=(e??"").trim();if(!t)return null;try{const n=new URL(t),s=n.hostname.toLowerCase();if(!s.includes("bilibili.com")&&!s.includes("b23.tv"))return null;const a=n.pathname,o=a.match(/\/video\/(BV[0-9A-Za-z]+)/i);if(o)return`https://player.bilibili.com/player.html?bvid=${o[1]}&high_quality=1`;const l=a.match(/\/video\/av(\d+)/i);return l?`https://player.bilibili.com/player.html?aid=${l[1]}&high_quality=1`:null}catch{return null}}function Iy(e){const t=[...e.categories??[]].sort((d,u)=>(d.sort_order??0)-(u.sort_order??0)||d.name.localeCompare(u.name,"zh-Hans-CN")),n=e.selectedCategoryId&&t.some(d=>d.id===e.selectedCategoryId)?e.selectedCategoryId:t[0]?.id??null,s=n?t.find(d=>d.id===n)??null:null,a=Ly(e.query),o=(s?.courses??[]).slice().sort((d,u)=>(d.sort_order??0)-(u.sort_order??0)||d.title.localeCompare(u.title,"zh-Hans-CN")).filter(d=>Qn(d.title??"",a)?!0:(d.lessons??[]).some(u=>Qn(u.title??"",a))),l=e.playingLink?Dc(e.playingLink):null;return l?r`
    <main class="emp-page tutorials-page">
      <section class="emp-list-wrap">
        <div class="emp-content">
          <div class="emp-main tutorials-video-context">
            <div class="tutorials-video-header">
              <button class="btn btn--sm" type="button" @click=${e.onPlayingClose}>← 返回教程</button>
            </div>
            <div class="tutorials-video-wrap">
              <iframe
                src=${l}
                scrolling="no"
                border="0"
                frameborder="no"
                framespacing="0"
                allowfullscreen="true"
                title="B站视频播放"
              ></iframe>
              <a
                class="tutorials-bilibili-link"
                href=${e.playingLink}
                target="_blank"
                rel="noopener noreferrer"
              >在哔哩哔哩打开</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  `:r`
    <main class="emp-page tutorials-page">
      <section class="emp-list-wrap">
        <div class="emp-content">
          <div class="emp-main">
            <div class="emp-toolbar">
              <h2 class="emp-toolbar__title">${s?s.name:"OpenOcta 教程"}</h2>
              <div class="emp-toolbar__actions">
                <div class="emp-search">
                  <input
                    class="emp-search__input"
                    type="text"
                    placeholder="搜索课程/课时"
                    .value=${e.query}
                    ?disabled=${e.loading}
                    @input=${d=>e.onQueryChange(d.target.value)}
                  />
                  <span class="emp-search__icon" aria-hidden="true">🔍</span>
                </div>
                <button class="btn" @click=${e.onRefresh} ?disabled=${e.loading}>刷新</button>
              </div>
            </div>

            ${e.error?r`<div class="callout danger" style="margin-bottom: 16px;">${e.error}</div>`:y}

            <div class="tutorials-list" style="margin-top: 14px;">
          ${s?o.length?r`
                  <div class="card tutorials-card">
                    ${o.map((d,u)=>{const f=(d.course_type??"").trim().toLowerCase()==="standalone",g=(d.lessons??[]).slice().sort((c,p)=>(c.sort_order??0)-(p.sort_order??0)||c.title.localeCompare(p.title,"zh-Hans-CN")).filter(c=>Qn(c.title??"",a)||Qn(d.title??"",a)),m=f&&g.length===0?[{id:d.id,title:d.title,duration:d.duration,link:d.link}]:g,v=String(u+1);return r`
                        <details ?open=${!0} class="tutorials-course">
                          <summary class="tutorials-course__summary">
                            <span class="tutorials-course__title-row">
                              <span class="tutorials-course__num">${v}</span>
                              <span class="tutorials-course__title">${d.title}</span>
                              <span class="tutorials-course__meta">${m.length} 课时</span>
                            </span>
                          </summary>

                          <div class="tutorials-lessons">
                            ${m.map((c,p)=>{const h=String(p+1).padStart(2,"0"),b=!!(c.link??"").trim();return r`
                                <div
                                  class="tutorials-lesson ${b?"tutorials-lesson--clickable":"tutorials-lesson--disabled"}"
                                  @click=${()=>{b&&e.onLessonClick(c.link)}}
                                  role=${b?"button":"none"}
                                  tabindex=${b?0:y}
                                  @keydown=${C=>{b&&(C.key==="Enter"||C.key===" ")&&(C.preventDefault(),e.onLessonClick(c.link))}}
                                >
                                  <span class="tutorials-lesson__index">${h}</span>
                                  <span class="tutorials-lesson__title">${c.title}</span>
                                  ${(c.duration??"").trim()?r`<span class="tutorials-lesson__duration">${c.duration}</span>`:y}
                                </div>
                              `})}
                          </div>
                        </details>
                      `})}
                  </div>
                `:r`<div class="emp-empty">没有匹配的课程/课时</div>`:r`<div class="emp-empty">暂无分类数据，请点击"刷新"。</div>`}
            </div>
          </div>
        </div>
      </section>
    </main>
  `}async function Dy(e){const t=Jt(e.gatewayHost.trim());if(!t)return{ok:!1,detail:"未配置网关地址（Gateway URL）"};const n=`${t.replace(/\/$/,"")}/api/desktop/uninstall`,s={"Content-Type":"application/json",Accept:"application/json"},a=(e.token??"").trim();a&&(s.Authorization=`Bearer ${a}`,s["X-Gateway-Token"]=a);let o;try{o=await fetch(n,{method:"POST",headers:s,body:JSON.stringify({mode:e.mode})})}catch(d){return{ok:!1,detail:d instanceof Error?d.message:String(d)}}let l={};try{l=await o.json()}catch{}return o.ok?l.ok===!1?{ok:!1,message:l.message,detail:l.detail,httpStatus:o.status}:{ok:!0,message:l.message,detail:l.detail}:{ok:!1,message:l.message??l.error??(o.status===401?"网关令牌无效或未提供":`请求失败（HTTP ${o.status}）`),detail:l.detail,httpStatus:o.status}}function Ry(e){const t=(e??"").trim();if(!t)return null;try{const n=new URL(t);return n.protocol!=="http:"&&n.protocol!=="https:"?null:n.href}catch{return null}}async function Jn(e,t){const n=Ry(e);if(!n)return;const s=globalThis.runtime;if(typeof s?.BrowserOpenURL=="function"){s.BrowserOpenURL(n);return}const a=window.open(n,"_blank","noopener,noreferrer");if(a){try{a.opener=null}catch{}return}const o=Jt((t?.gatewayHost??"").trim()),l=(t?.gatewayToken??"").trim();if(!o||!l){window.location.assign(n);return}try{const d=await fetch(`${o.replace(/\/$/,"")}/api/desktop/open-url`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:`Bearer ${l}`,"X-Gateway-Token":l},body:JSON.stringify({url:n})});if(d.ok&&(await d.json()).ok===!0)return}catch{}window.location.assign(n)}function Ny(e){const t=e.basePath?`${e.basePath}/wechat.png`:"/wechat.png";return r`
    <div class="about-page emp-page">
      <div class="about-page__inner">
        <section class="about-hero card">
          <h2 class="about-hero__title">OpenOcta 八爪鱼</h2>
          <p class="about-hero__lead">
            <strong>OpenOcta 八爪鱼</strong> —— 开源企业级智能体，专为运维而生
          </p>
        </section>

        <section class="about-section card">
          <h3 class="about-section__title">加入社群</h3>
          <p class="muted">扫描下方二维码加入微信群，获取更新与交流支持。</p>
          <div class="about-qr-wrap">
            <img class="about-qr" src=${t} width="200" height="200" alt="OpenOcta 微信群二维码" loading="lazy" />
          </div>
        </section>

        <section class="about-section card">
          <h3 class="about-section__title">商务合作</h3>
          <p>
            商业授权、合作咨询请联系邮箱：
            <a href="mailto:zhanghp@databuff.com"><strong>zhanghp@databuff.com</strong></a>
          </p>
          <p class="muted small">如需电话沟通，请在邮件中说明需求与联系方式，我们会尽快回复。</p>
        </section>

        <section class="about-section card about-section--legal">
          <h3 class="about-section__title">版权声明</h3>
          <p>本仓库遵循 <strong>GPLv3</strong> 开源限制。</p>
          <p>你可以基于 OpenOcta 的源代码进行二次开发，但是需要遵守以下规定：</p>
          <ul class="about-list">
            <li>不能替换和修改 OpenOcta 的 Logo 和版权信息；</li>
            <li>二次开发后的衍生作品必须遵守 GPLv3 的开源义务。</li>
          </ul>
          <p>如需商业授权，请联系：<strong>zhanghp@databuff.com</strong>。</p>
        </section>

        <section class="about-section card about-section--danger">
          <h3 class="about-section__title">卸载 OpenOcta</h3>
          <p class="muted">
            在桌面应用或本机已连接网关时，可选择仅删除程序或一并清除本地数据目录。操作将安排在数秒后执行；桌面版在确认成功后会自动退出应用，请先保存工作。
          </p>
          <button type="button" class="btn btn--danger-outline" @click=${e.onOpenUninstallModal}>
            <span class="btn__icon" aria-hidden="true">${ee.trash}</span>
            卸载 OpenOcta…
          </button>
        </section>
      </div>

      ${e.uninstallModalOpen?r`
            <div
              class="modal-overlay"
              role="dialog"
              aria-modal="true"
              aria-labelledby="about-uninstall-title"
              @click=${e.onCloseUninstallModal}
            >
              <div class="modal card about-uninstall-modal" @click=${n=>n.stopPropagation()}>
                <h3 id="about-uninstall-title" class="modal__title">卸载 OpenOcta</h3>
                <p class="muted small">
                  请确认已配置正确的 <strong>Gateway URL</strong> 与 <strong>Token</strong>（与 Overview 一致）。卸载任务在进程退出后由系统脚本删除文件。
                </p>

                <fieldset class="about-uninstall-fieldset">
                  <legend class="visually-hidden">卸载方式</legend>

                  <div class="about-uninstall-options">
                    <div
                      class="about-uninstall-card ${e.uninstallMode==="program"?"about-uninstall-card--selected":""}"
                    >
                      <label class="about-uninstall-mode-label">
                        <input
                          type="radio"
                          name="oo-uninstall-mode"
                          value="program"
                          ?checked=${e.uninstallMode==="program"}
                          ?disabled=${e.uninstallLoading}
                          @change=${()=>e.onUninstallModeChange("program")}
                        />
                        <span class="about-uninstall-mode-title">仅卸载程序</span>
                      </label>
                      <p>
                        删除已安装的应用（例如 macOS 下的 <code>OpenOcta.app</code>，Windows 下安装目录中的程序文件）。
                      </p>
                      <p class="about-uninstall-note">
                        <strong>不会删除</strong>本地配置与数据目录（默认 <code>~/.openocta</code>，Windows 为
                        <code>%APPDATA%\\openocta</code> 等）。
                      </p>
                    </div>

                    <div
                      class="about-uninstall-card about-uninstall-card--warn ${e.uninstallMode==="full"?"about-uninstall-card--selected":""}"
                    >
                      <label class="about-uninstall-mode-label">
                        <input
                          type="radio"
                          name="oo-uninstall-mode"
                          value="full"
                          ?checked=${e.uninstallMode==="full"}
                          ?disabled=${e.uninstallLoading}
                          @change=${()=>e.onUninstallModeChange("full")}
                        />
                        <span class="about-uninstall-mode-title">全部卸载</span>
                      </label>
                      <p>删除应用程序<strong>以及</strong>本地状态目录（配置、会话、日志、缓存等）。</p>
                      <p class="about-uninstall-note danger">
                        此操作<strong>不可恢复</strong>，请确认已备份重要数据。
                      </p>
                    </div>
                  </div>
                </fieldset>

                ${e.uninstallError?r`<p class="about-uninstall-api-error" role="alert">${e.uninstallError}</p>`:y}

                <div class="modal__actions">
                  <button
                    type="button"
                    class="btn"
                    ?disabled=${e.uninstallLoading}
                    @click=${e.onCloseUninstallModal}
                  >
                    取消
                  </button>
                  <button
                    type="button"
                    class="btn btn--danger"
                    ?disabled=${e.uninstallLoading}
                    @click=${e.onConfirmUninstall}
                  >
                    ${e.uninstallLoading?r`<span>正在请求…</span>`:r`<span>确认卸载</span>`}
                  </button>
                </div>
              </div>
            </div>
          `:y}
    </div>
  `}function Uy(e){return e==null?"—":new Date(e).toLocaleString()}function Oy(e){if(e==null||e<0)return"—";if(e===0)return"0 B";const t=["B","KB","MB","GB"];let n=0,s=e;for(;s>=1024&&n<t.length-1;)s/=1024,n++;return`${s.toFixed(n>0?2:0)} ${t[n]}`}function Fy(e,t){if(!t.trim())return e;const n=t.trim().toLowerCase();return e.filter(s=>s.sessionKey.toLowerCase().includes(n)||s.sessionId.toLowerCase().includes(n))}function By(e){const t="<style>html,body{overflow-y:auto!important;overflow-x:auto!important;min-height:100%;}</style>";return e.includes("</head>")?e.replace("</head>",`${t}</head>`):e.includes("<body")?e.replace("<body",`<head>${t}</head><body`):t+e}function Hy(e){if(e.viewingSessionId!=null)return r`
      <section class="card llm-trace-detail">
        <div class="row" style="align-items: center; gap: 12px; margin-bottom: 16px;">
          <button type="button" class="btn btn--sm" @click=${e.onBack}>
            ← ${i("llmTraceBack")}
          </button>
          <span class="muted" style="font-size: 14px;">${e.viewingSessionId}</span>
        </div>
        ${e.viewLoading?r`<div class="muted" style="padding: 24px; text-align: center;">${i("commonLoading")}</div>`:e.viewContent?r`
                <div class="llm-trace-iframe-wrap">
                  <iframe
                    class="llm-trace-iframe"
                    srcdoc=${By(e.viewContent)}
                    sandbox="allow-same-origin allow-scripts"
                    title=${e.viewingSessionId??"Trace"}
                  ></iframe>
                </div>
              `:r`<div class="callout danger">${e.error??i("commonNA")}</div>`}
      </section>
    `;const n=e.result?.entries??[],s=Fy(n,e.search);return r`
    <section class="card">
      <div class="row" style="justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
        <div>
          <div class="card-title">${i("navTitleLlmTrace")}</div>
          <div class="card-sub">${i("subtitleLlmTrace")}</div>
        </div>
        <div class="row" style="gap: 8px; align-items: center;">
          <div class="row" style="gap: 4px;">
            <button
              type="button"
              class="btn ${e.mode==="active"?"primary":""}"
              style="padding: 6px 12px;"
              @click=${()=>e.onModeChange("active")}
            >
              ${i("llmTraceModeActive")}
            </button>
            <button
              type="button"
              class="btn ${e.mode==="all"?"primary":""}"
              style="padding: 6px 12px;"
              @click=${()=>e.onModeChange("all")}
            >
              ${i("llmTraceModeAll")}
            </button>
          </div>
          <button
            type="button"
            class="btn ${e.enabled?"btn-ok":""}"
            ?disabled=${e.saving}
            @click=${e.onToggleEnabled}
            title=${i("llmTraceToggleTooltip")}
          >
            ${e.enabled?i("llmTraceActionDisable"):i("llmTraceActionEnable")}
          </button>
          <button class="btn primary" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?i("commonLoading"):i("commonRefresh")}
          </button>
        </div>
      </div>

      <div class="row" style="margin-top: 16px; gap: 12px; align-items: center;">
        <div class="field" style="flex: 1; min-width: 200px;">
          <span>${i("llmTraceSearch")}</span>
          <input
            type="text"
            .value=${e.search}
            placeholder=${i("llmTraceSearchPlaceholder")}
            @input=${a=>e.onSearchChange(a.target.value)}
          />
        </div>
      </div>

      ${e.error?r`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:y}

      <div class="llm-trace-table mcp-table table" style="margin-top: 16px;">
        <div class="mcp-table-head table-head">
          <div>${i("llmTraceSessionKey")}</div>
          <div>${i("llmTraceSessionId")}</div>
          <div>${i("llmTraceUpdatedAt")}</div>
          <div>${i("llmTraceFile")}</div>
          <div>${i("llmTraceFileSize")}</div>
          <div class="llm-trace-actions-col">${i("mcpTableActions")}</div>
        </div>
        ${s.length===0?r`
                <div class="muted" style="padding: 24px; text-align: center;">
                  ${e.loading?i("commonLoading"):i("llmTraceNoEntries")}
                </div>
              `:s.map(a=>r`
                  <div class="mcp-table-row table-row">
                    <div class="mcp-table-cell mono" style="font-size: 12px; max-width: 200px; overflow: hidden; text-overflow: ellipsis;" title=${a.sessionKey}>
                      ${a.sessionKey}
                    </div>
                    <div class="mcp-table-cell mono muted" style="font-size: 12px; max-width: 180px; overflow: hidden; text-overflow: ellipsis;" title=${a.sessionId}>
                      ${a.sessionId}
                    </div>
                    <div class="mcp-table-cell muted" style="font-size: 12px;">
                      ${Uy(a.updatedAt)}
                    </div>
                    <div class="mcp-table-cell mono muted" style="font-size: 12px;">
                      ${a.file}
                    </div>
                    <div class="mcp-table-cell muted" style="font-size: 12px;">
                      ${Oy(a.fileSize)}
                    </div>
                    <div class="mcp-table-cell llm-trace-actions-col row" style="gap: 6px; justify-content: flex-end;">
                      ${a.file!=="-"?r`
                              <button
                                class="btn btn--sm"
                                @click=${()=>e.onView(a.sessionId)}
                              >
                                ${i("llmTraceView")}
                              </button>
                              <button
                                class="btn btn--sm"
                                @click=${()=>e.onDownload(a.sessionId)}
                              >
                                ${i("llmTraceDownload")}
                              </button>
                            `:y}
                    </div>
                  </div>
                `)}
      </div>
    </section>
  `}function Il(e){return e==null||e===0?"—":new Date(e).toLocaleString()}function Dl(e){return e==null?"—":e<0?i("approvalsTtlPermanent"):e<60?`${e}s`:e<3600?`${Math.floor(e/60)}m`:`${Math.floor(e/3600)}h`}function Rl(e){return{pending:i("approvalsPending"),approved:i("approvalsSectionApproved"),denied:i("approvalsSectionDenied"),expired:i("approvalsExpired"),whitelisted:i("approvalsSectionWhitelisted"),whitelist_expired:i("approvalsExpired")}[e]??e}function zy(e){return[...e].sort((t,n)=>{const s=a=>{const o=a.status==="pending",l=a.status==="expired"||a.expired===!0,d=a.status==="denied";return o&&!l?0:a.status==="approved"&&!l?1:l?2:d?3:1};return s(t)-s(n)})}function Ky(e){const t=e.approvalsResult,n=t?.pending??t?.entries?.filter(d=>d.status==="pending"||d.status==="expired")??[],s=t?.approved??t?.entries?.filter(d=>d.status==="approved")??[],a=t?.denied??t?.entries?.filter(d=>d.status==="denied")??[],o=t?.whitelisted??[],l=zy([...n,...s,...a]);return r`
    <section class="card">
      <div class="row" style="justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
        <div>
          <div class="card-title">${i("navTitleApprovals")}</div>
          <div class="card-sub">${i("subtitleApprovals")}</div>
        </div>
        <button class="btn primary" ?disabled=${e.approvalsLoading} @click=${e.onApprovalsRefresh}>
          ${e.approvalsLoading?i("commonLoading"):i("commonRefresh")}
        </button>
      </div>

      ${e.approvalsError?r`<div class="callout danger" style="margin-top: 16px;">${e.approvalsError}</div>`:y}

      <!-- 审批队列：已审批 + 待审批 合并，有效期的放最上面 -->
      <div style="margin-top: 20px;">
        <div class="card-sub" style="margin-bottom: 12px; font-size: 14px;">${i("approvalsList")} (${l.length})</div>
        ${l.length===0&&!e.approvalsLoading?r`<div class="muted" style="padding: 24px; text-align: center;">${i("approvalsNoEntries")}</div>`:r`
              <div class="mcp-table table approvals-queue-table">
                <div class="mcp-table-head table-head">
                  <div>${i("approvalsCommand")}</div>
                  <div>${i("approvalsStatus")}</div>
                  <div>${i("approvalsExpiresAt")}</div>
                  <div>${i("approvalsTTL")}</div>
                  <div style="text-align: right;">${i("mcpTableActions")}</div>
                </div>
                ${l.map(d=>{const u=d.sessionKey??d.sessionId,f=u?`${e.pathForTab("sessions")}?key=${encodeURIComponent(u)}`:"",g=d.status==="pending"&&!d.expired,m=d.expiresAt??d.timeoutAt;return r`
                    <div class="mcp-table-row table-row">
                      <div class="mcp-table-cell mono" style="max-width: 240px; overflow: hidden; text-overflow: ellipsis;" title=${d.command}>${d.command}</div>
                      <div class="mcp-table-cell">${Rl(d.status)}${d.approver?` · ${d.approver}`:""}</div>
                      <div class="mcp-table-cell muted" style="font-size: 12px;">${Il(m)}</div>
                      <div class="mcp-table-cell muted" style="font-size: 12px;">${d.ttlSeconds!=null?Dl(d.ttlSeconds):"—"}</div>
                      <div class="mcp-table-cell approvals-actions-cell">
                        <button class="btn btn--sm btn-ok" ?disabled=${!g} @click=${()=>g&&e.onApprove(d.id)}>${i("approvalsApproveOnce")}</button>
                        <button class="btn btn--sm" ?disabled=${!g} @click=${()=>g&&e.onWhitelistSession(d.id)}>${i("approvalsWhitelistSession")}</button>
                        <button class="btn btn--sm" style="color: var(--danger);" ?disabled=${!g} @click=${()=>g&&e.onDeny(d.id)}>${i("approvalsDeny")}</button>
                        ${f?r`<a class="btn btn--sm" href="${f}">${i("approvalsViewSession")}</a>`:y}
                      </div>
                    </div>
                  `})}
              </div>
            `}
      </div>

      <!-- 会话免审：独立模块 -->
      ${o.length>0?r`
        <div style="margin-top: 24px;">
          <div class="card-sub" style="margin-bottom: 12px; font-size: 14px;">${i("approvalsSectionWhitelisted")} (${o.length})</div>
          <div class="mcp-table table">
            <div class="mcp-table-head table-head">
              <div>${i("approvalsSessionId")}</div>
              <div>${i("approvalsStatus")}</div>
              <div>${i("approvalsExpiresAt")}</div>
              <div>${i("approvalsTTL")}</div>
            </div>
            ${o.map(d=>r`
              <div class="mcp-table-row table-row">
                <div class="mcp-table-cell mono" style="max-width: 200px; overflow: hidden; text-overflow: ellipsis;">${d.sessionId}</div>
                <div class="mcp-table-cell">${Rl(d.status)}</div>
                <div class="mcp-table-cell muted" style="font-size: 12px;">${d.expiresAt?Il(d.expiresAt):i("approvalsTtlPermanent")}</div>
                <div class="mcp-table-cell muted" style="font-size: 12px;">${d.ttlSeconds!=null?d.ttlSeconds<0?i("approvalsTtlPermanent"):Dl(d.ttlSeconds):"—"}</div>
              </div>
            `)}
          </div>
        </div>
      `:y}
    </section>
  `}function Xe(e){return Array.isArray(e)?e:[]}function gt(e){return Xe(e).filter(Boolean).join(`
`)}function mt(e){return(e||"").split(`
`).map(t=>t.trim()).filter(Boolean)}const qy=[{label:"512M",bytes:512*1024*1024},{label:"1G",bytes:1024*1024*1024},{label:"2G",bytes:2*1024*1024*1024},{label:"4G",bytes:4*1024*1024*1024}];function jy(e){const t=e.security??{},n=t.sandbox??{},s=t.commandPolicy??{},a=t.approvalQueue??{},o=n.enabled!==!1,l=s.enabled!==!1,d=a.enabled===!0,u=gt(Xe(n.allowedPaths)),f=gt(Xe(n.networkAllow)),g=n.resourceLimit??{},m=g.maxCpuPercent??"",v=g.maxMemoryBytes??"",k=g.maxDiskBytes??"",c=s.defaultPolicy??"ask",p=Xe(s.deny),h=Xe(s.ask),b=Xe(s.allow),S=gt(p),C=gt(h),A=gt(b);function E(L,he,I){e.onPatch(["commandPolicy","deny"],mt(L)),e.onPatch(["commandPolicy","ask"],mt(he)),e.onPatch(["commandPolicy","allow"],mt(I))}const T=gt(Xe(s.banArguments)),_=s.maxLength??"",N=gt(Xe(s.secretPatterns)),O=a.timeoutSeconds??"",Q=a.blockOnApproval!==!1,R=L=>{switch(L){case"off":return i("securityPresetOff");case"loose":return i("securityPresetLoose");case"standard":return i("securityPresetStandard");case"strict":return i("securityPresetStrict");default:return L}};return r`
    <section class="card">
      <div class="row" style="justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
        <div>
          <div class="card-title">${i("navTitleSandbox")}</div>
          <div class="card-sub">${i("subtitleSandbox")}</div>
        </div>
      </div>

      <!-- Overview card -->
      <div class="security-overview-card" style="margin-top: 20px; padding: 20px; background: var(--bg-muted, #f8fafc); border-radius: 12px; border: 1px solid var(--border, #e2e8f0);">
        <div class="card-sub" style="margin-bottom: 12px; font-size: 14px;">${i("securityOverviewTitle")}</div>
        <div class="row" style="flex-wrap: wrap; gap: 24px;">
          <div>
            <div class="muted" style="font-size: 12px;">${i("securityOverviewPreset")}</div>
            <div style="font-size: 16px; font-weight: 600;">${R(t.preset??"standard")}</div>
          </div>
          <div>
            <div class="muted" style="font-size: 12px;">${i("securityOverviewSandbox")}</div>
            <div style="font-size: 16px; font-weight: 600; color: ${o?"var(--ok, #16a34a)":"var(--muted)"};">${i(o?"sandboxEnabled":"sandboxDisabled")}</div>
          </div>
          <div>
            <div class="muted" style="font-size: 12px;">${i("securityOverviewCommandPolicy")}</div>
            <div style="font-size: 16px; font-weight: 600; color: ${l?"var(--ok, #16a34a)":"var(--muted)"};">${i(l?"sandboxEnabled":"sandboxDisabled")}</div>
          </div>
          <div>
            <div class="muted" style="font-size: 12px;">${i("securityOverviewPendingApprovals")}</div>
            <div style="font-size: 16px; font-weight: 600; color: ${e.pendingApprovalsCount>0?"var(--danger, #dc2626)":"var(--muted)"};">${e.pendingApprovalsCount}</div>
          </div>
        </div>
      </div>

      <!-- Quick presets -->
      <div style="margin-top: 20px;">
        <div class="card-sub" style="margin-bottom: 8px; font-size: 14px;">${i("securityPresetsTitle")}</div>
        <div class="muted" style="font-size: 13px; margin-bottom: 12px;">${i("securityPresetsHint")}</div>
        <div class="row" style="flex-wrap: wrap; gap: 12px; margin-bottom: 8px;">
          ${["off","loose","standard","strict"].map(L=>r`
              <button
                type="button"
                class="btn ${t.preset===L?"primary":""}"
                ?disabled=${e.saving}
                @click=${()=>e.onPresetApply(L)}
              >
                ${R(L)}
              </button>
            `)}
        </div>
        <div class="muted" style="font-size: 12px; line-height: 1.5;">
          <div style="margin-bottom: 4px;"><strong>${R("off")}</strong>：${i("securityPresetOffDesc")}</div>
          <div style="margin-bottom: 4px;"><strong>${R("loose")}</strong>：${i("securityPresetLooseDesc")}</div>
          <div style="margin-bottom: 4px;"><strong>${R("standard")}</strong>：${i("securityPresetStandardDesc")}</div>
          <div><strong>${R("strict")}</strong>：${i("securityPresetStrictDesc")}</div>
        </div>
      </div>

      <div class="sandbox-sections" style="margin-top: 24px;">
        <!-- Environment boundary (collapsed by default) -->
        <details class="sandbox-details">
          <summary class="sandbox-summary">
            <span>${i("securitySectionSandbox")}</span>
            <span class="security-help" title=${i("securitySectionSandboxDesc")}>❕</span>
          </summary>
          <div class="sandbox-section-body" style="margin-top: 16px;">
            <div class="muted" style="font-size: 13px; margin-bottom: 12px;">${i("securitySectionSandboxDesc")}</div>
            <div class="row" style="align-items: center; gap: 12px; margin-bottom: 16px;">
              <button type="button" class="btn ${o?"btn-ok":""}" ?disabled=${e.saving} @click=${()=>e.onPatch(["sandbox","enabled"],!o)}>
                ${i(o?"sandboxActionDisable":"sandboxActionEnable")}
              </button>
              <span class="muted" style="font-size: 13px;">${i(o?"sandboxEnabled":"sandboxDisabled")}</span>
            </div>
            <div class="sandbox-form-center">
              <div class="field" style="width: 100%; margin-bottom: 16px;">
                <span>${i("sandboxAllowedPaths")}</span>
                <textarea rows="3" .value=${u} placeholder="/tmp&#10;./workspace" @input=${L=>e.onPatch(["sandbox","allowedPaths"],mt(L.target.value))}></textarea>
              </div>
              <div class="field" style="width: 100%; margin-bottom: 16px;">
                <span>${i("sandboxNetworkAllow")}</span>
                <textarea rows="2" .value=${f} placeholder="localhost&#10;127.0.0.1" @input=${L=>e.onPatch(["sandbox","networkAllow"],mt(L.target.value))}></textarea>
              </div>
              <div style="margin: 24px 0;">
                <div class="card-sub" style="margin-bottom: 12px; font-size: 14px;">${i("sandboxResourceLimit")}</div>
                <div class="row" style="flex-wrap: wrap; gap: 8px; margin-bottom: 12px;">
                  ${qy.map(L=>r`
                      <button
                        type="button"
                        class="btn btn--sm"
                        @click=${()=>{e.onPatch(["sandbox","resourceLimit","maxMemoryBytes"],L.bytes),e.onPatch(["sandbox","resourceLimit","maxDiskBytes"],L.bytes)}}
                      >
                        ${L.label}
                      </button>
                    `)}
                  <span class="muted" style="font-size: 13px; align-self: center;">${i("securityResourceCustom")}</span>
                </div>
                <div class="row" style="flex-wrap: wrap; gap: 12px;">
                  <div class="field" style="flex: 1 1 120px; min-width: 0;">
                    <span style="font-size: 14px;">${i("sandboxMaxCPUPercent")}</span>
                    <input type="text" .value=${String(m)} placeholder="60" @input=${L=>e.onPatch(["sandbox","resourceLimit","maxCpuPercent"],ra(L.target.value))} />
                  </div>
                  <div class="field" style="flex: 1 1 160px; min-width: 0;">
                    <span style="font-size: 14px;">${i("sandboxMaxMemoryBytes")}</span>
                    <input type="text" .value=${String(v)} placeholder="1G" @input=${L=>e.onPatch(["sandbox","resourceLimit","maxMemoryBytes"],L.target.value.trim()||void 0)} />
                  </div>
                  <div class="field" style="flex: 1 1 160px; min-width: 0;">
                    <span style="font-size: 14px;">${i("sandboxMaxDiskBytes")}</span>
                    <input type="text" .value=${String(k)} placeholder="1G" @input=${L=>e.onPatch(["sandbox","resourceLimit","maxDiskBytes"],L.target.value.trim()||void 0)} />
                  </div>
                </div>
              </div>
            </div>
            <div class="row" style="gap: 8px; margin-top: 16px;">
              <button type="button" class="btn primary" ?disabled=${e.saving} @click=${e.onSave}>${e.saving?i("commonLoading"):i("commonSave")}</button>
            </div>
          </div>
        </details>

        <!-- Command policy -->
        <details class="sandbox-details" style="margin-top: 16px;">
          <summary class="sandbox-summary">
            <span>${i("securitySectionCommandPolicy")}</span>
            <span class="security-help" title=${i("securitySectionCommandPolicyDesc")}>❕</span>
          </summary>
          <div class="sandbox-section-body" style="margin-top: 16px;">
            <div class="muted" style="font-size: 13px; margin-bottom: 12px;">${i("securitySectionCommandPolicyDesc")}</div>
            <div class="row" style="align-items: center; gap: 12px; margin-bottom: 16px;">
              <button type="button" class="btn ${l?"btn-ok":""}" ?disabled=${e.saving} @click=${()=>e.onPatch(["commandPolicy","enabled"],!l)}>
                ${i(l?"sandboxActionDisable":"sandboxActionEnable")}
              </button>
              <span class="muted" style="font-size: 13px;">${i(l?"sandboxEnabled":"sandboxDisabled")}</span>
            </div>
            <div class="field" style="margin-bottom: 16px;">
              <span style="font-size: 14px;">${i("securityDefaultPolicy")}</span>
              <div class="row" style="gap: 16px; margin-top: 8px;">
                ${["deny","ask","allow"].map(L=>r`
                    <label class="row" style="align-items: center; gap: 6px; cursor: pointer;">
                      <input type="radio" name="defaultPolicy" .checked=${c===L} @change=${()=>e.onPatch(["commandPolicy","defaultPolicy"],L)} />
                      <span>${i(L==="deny"?"securityDefaultDeny":L==="ask"?"securityDefaultAsk":"securityDefaultAllow")}</span>
                    </label>
                  `)}
              </div>
            </div>
            <div class="card-sub" style="margin-bottom: 8px; font-size: 14px;">${i("securityRulesList")}</div>
            <div class="muted" style="font-size: 12px; margin-bottom: 12px;">${i("securityRulesHint")}</div>
            <div class="field" style="margin-bottom: 16px;">
              <span style="font-size: 14px;">${i("securityActionDeny")}</span>
              <textarea rows="3" .value=${S} placeholder="sudo&#10;dd&#10;mkfs&#10;rm -rf" @input=${L=>E(L.target.value,C,A)}></textarea>
              <div class="muted" style="font-size: 12px; margin-top: 4px;">${i("securityRulesDenyHint")}</div>
            </div>
            <div class="field" style="margin-bottom: 16px;">
              <span style="font-size: 14px;">${i("securityActionAsk")}</span>
              <textarea rows="3" .value=${C} placeholder="rm&#10;mv&#10;cp" @input=${L=>E(S,L.target.value,A)}></textarea>
              <div class="muted" style="font-size: 12px; margin-top: 4px;">${i("securityRulesAskHint")}</div>
            </div>
            <div class="field" style="margin-bottom: 16px;">
              <span style="font-size: 14px;">${i("securityActionAllow")}</span>
              <textarea rows="3" .value=${A} placeholder="ls&#10;pwd&#10;echo" @input=${L=>E(S,C,L.target.value)}></textarea>
              <div class="muted" style="font-size: 12px; margin-top: 4px;">${i("securityRulesAllowHint")}</div>
            </div>
            <details style="margin-top: 16px;">
              <summary class="muted" style="font-size: 13px; cursor: pointer;">${i("securityAdvancedOptions")}</summary>
              <div style="margin-top: 12px;">
                <div class="field" style="margin-bottom: 12px;">
                  <span style="font-size: 14px;">${i("sandboxBanArguments")}</span>
                  <textarea rows="2" .value=${T} placeholder="--no-preserve-root&#10;/dev/" @input=${L=>e.onPatch(["commandPolicy","banArguments"],mt(L.target.value))}></textarea>
                </div>
                <div class="field" style="margin-bottom: 12px;">
                  <span style="font-size: 14px;">${i("securityMaxLength")}</span>
                  <input type="text" .value=${String(_)} placeholder="4096" @input=${L=>e.onPatch(["commandPolicy","maxLength"],ra(L.target.value))} />
                </div>
                <div class="field">
                  <span style="font-size: 14px;">${i("sandboxSecretPatterns")}</span>
                  <textarea rows="2" style="font-family: var(--mono);" .value=${N} placeholder="sk-[a-zA-Z0-9]{48}" @input=${L=>e.onPatch(["commandPolicy","secretPatterns"],mt(L.target.value))}></textarea>
                </div>
              </div>
            </details>
            <div class="row" style="gap: 8px; margin-top: 16px;">
              <button type="button" class="btn primary" ?disabled=${e.saving} @click=${e.onSave}>${e.saving?i("commonLoading"):i("commonSave")}</button>
            </div>
          </div>
        </details>

        <!-- Approval settings -->
        <details class="sandbox-details" style="margin-top: 16px;">
          <summary class="sandbox-summary">
            <span>${i("securitySectionApprovalQueue")}</span>
            <span class="security-help" title=${i("securitySectionApprovalQueueDesc")}>❕</span>
          </summary>
          <div class="sandbox-section-body" style="margin-top: 16px;">
            <div class="muted" style="font-size: 13px; margin-bottom: 12px;">${i("securitySectionApprovalQueueDesc")}</div>
            <div class="row" style="align-items: center; gap: 12px; margin-bottom: 16px;">
              <button type="button" class="btn ${d?"btn-ok":""}" ?disabled=${e.saving} @click=${()=>e.onPatch(["approvalQueue","enabled"],!d)}>
                ${i(d?"sandboxActionDisable":"sandboxActionEnable")}
              </button>
              <span class="muted" style="font-size: 13px;">${i(d?"sandboxEnabled":"sandboxDisabled")}</span>
            </div>
            ${d?r`
                  <div class="row" style="align-items: flex-start; gap: 8px; margin-bottom: 16px;">
                    <input type="checkbox" id="blockOnApproval" .checked=${Q} ?disabled=${e.saving} @input=${L=>e.onPatch(["approvalQueue","blockOnApproval"],L.target.checked)} />
                    <label for="blockOnApproval" style="font-size: 14px; cursor: pointer;">${i("securityApprovalBlockOnApproval")} <span class="muted" style="font-size: 12px;">${i("securityApprovalBlockOnApprovalHint")}</span></label>
                  </div>
                  <div class="field" style="margin-bottom: 16px;">
                    <span style="font-size: 14px;">${i("securityApprovalTimeoutSeconds")}</span>
                    <input type="text" .value=${String(O)} placeholder="300" @input=${L=>e.onPatch(["approvalQueue","timeoutSeconds"],ra(L.target.value))} />
                    <div class="muted" style="font-size: 12px; margin-top: 4px;">${i("securityApprovalTimeoutSecondsHint")}</div>
                  </div>
                `:y}
            <div class="row" style="gap: 8px; margin-bottom: 20px;">
              <button type="button" class="btn primary" ?disabled=${e.saving} @click=${e.onSave}>${e.saving?i("commonLoading"):i("commonSave")}</button>
            </div>

            <!-- Approval queue list (full: pending, approved, denied, whitelisted) -->
            ${Ky({approvalsLoading:e.approvalsLoading,approvalsResult:e.approvalsResult,approvalsError:e.approvalsError,onApprovalsRefresh:e.onApprovalsRefresh,onApprove:e.onApprove,onDeny:e.onDeny,onWhitelistSession:e.onWhitelistSession,pathForTab:e.pathForTab})}
          </div>
        </details>
      </div>
    </section>
  `}function ra(e){const t=parseInt(e.trim(),10);return Number.isNaN(t)?void 0:t}const Me=[{id:"anthropic",label:"Anthropic",envKey:"ANTHROPIC_API_KEY",defaultModel:"claude-sonnet-4-5-20250929",baseUrl:"(官方)",defaultApi:"anthropic-messages"},{id:"openai",label:"OpenAI",envKey:"OPENAI_API_KEY",defaultModel:"gpt-4",baseUrl:"(官方)",defaultApi:"openai-completions"},{id:"openrouter",label:"OpenRouter",envKey:"OPENROUTER_API_KEY",defaultModel:"auto",baseUrl:"https://openrouter.ai/api/v1",defaultApi:"openai-completions"},{id:"litellm",label:"LiteLLM",envKey:"LITELLM_API_KEY",defaultModel:"",baseUrl:"http://localhost:4000",defaultApi:"openai-completions"},{id:"moonshot",label:"Moonshot",envKey:"MOONSHOT_API_KEY",defaultModel:"kimi-k2.5",baseUrl:"https://api.moonshot.ai/v1",defaultApi:"openai-completions"},{id:"moonshot-cn",label:"Moonshot-CN",envKey:"MOONSHOT_API_KEY",defaultModel:"kimi-k2.5",baseUrl:"https://api.moonshot.cn/v1",defaultApi:"openai-completions"},{id:"kimi-coding",label:"Kimi Coding",envKey:"KIMI_API_KEY",defaultModel:"k2p5",baseUrl:"https://api.moonshot.ai/anthropic",defaultApi:"anthropic-messages"},{id:"opencode",label:"OpenCode",envKey:"OPENCODE_API_KEY",defaultModel:"claude-opus-4-6",baseUrl:"https://opencode.ai/zen/v1",defaultApi:"openai-completions"},{id:"zai",label:"Z.ai (智谱)",envKey:"ZAI_API_KEY",defaultModel:"glm-5",baseUrl:"https://api.z.ai/api/paas/v4",defaultApi:"openai-completions"},{id:"xai",label:"xAI (Grok)",envKey:"XAI_API_KEY",defaultModel:"grok-3-mini",baseUrl:"https://api.x.ai/v1",defaultApi:"openai-completions"},{id:"together",label:"Together AI",envKey:"TOGETHER_API_KEY",defaultModel:"meta-llama/Llama-3.3-70B-Instruct-Turbo",baseUrl:"https://api.together.xyz/v1",defaultApi:"openai-completions"},{id:"venice",label:"Venice AI",envKey:"VENICE_API_KEY",defaultModel:"falcon-3.1-70b",baseUrl:"https://api.venice.ai/api/v1",defaultApi:"openai-completions"},{id:"synthetic",label:"Synthetic",envKey:"SYNTHETIC_API_KEY",defaultModel:"hf:MiniMaxAI/MiniMax-M2.1",baseUrl:"https://api.synthetic.new/anthropic",defaultApi:"anthropic-messages"},{id:"qianfan",label:"千帆 (百度)",envKey:"QIANFAN_API_KEY",defaultModel:"deepseek-v3-2-251201",baseUrl:"https://qianfan.baidubce.com/v2",defaultApi:"openai-completions"},{id:"huggingface",label:"Hugging Face",envKey:"HUGGINGFACE_HUB_TOKEN",defaultModel:"",baseUrl:"https://router.huggingface.co/v1",defaultApi:"openai-completions"},{id:"xiaomi",label:"小米 Mimo",envKey:"XIAOMI_API_KEY",defaultModel:"mimo-v2-flash",baseUrl:"https://api.xiaomimimo.com/anthropic",defaultApi:"anthropic-messages"},{id:"minimax",label:"MiniMax",envKey:"MINIMAX_API_KEY",defaultModel:"MiniMax-M2.1",baseUrl:"https://api.minimax.io/anthropic",defaultApi:"anthropic-messages"},{id:"mistral",label:"Mistral",envKey:"MISTRAL_API_KEY",defaultModel:"mistral-large-latest",baseUrl:"https://api.mistral.ai/v1",defaultApi:"openai-completions"},{id:"groq",label:"Groq",envKey:"GROQ_API_KEY",defaultModel:"llama-3.3-70b-versatile",baseUrl:"https://api.groq.com/openai/v1",defaultApi:"openai-completions"},{id:"cerebras",label:"Cerebras",envKey:"CEREBRAS_API_KEY",defaultModel:"llama-4-scout-17b-16e-instruct",baseUrl:"https://api.cerebras.ai/v1",defaultApi:"openai-completions"},{id:"ollama",label:"Ollama",envKey:"OLLAMA_API_KEY",defaultModel:"llama3.3",baseUrl:"http://127.0.0.1:11434/v1",defaultApi:"openai-completions"},{id:"vllm",label:"vLLM",envKey:"VLLM_API_KEY",defaultModel:"",baseUrl:"http://127.0.0.1:8000/v1",defaultApi:"openai-completions"},{id:"vercel-ai-gateway",label:"Vercel AI Gateway",envKey:"AI_GATEWAY_API_KEY",defaultModel:"",baseUrl:"https://api.vercel.ai/v1",defaultApi:"openai-completions"},{id:"bailian",label:"百炼 (阿里云)",envKey:"DASHSCOPE_API_KEY",defaultModel:"qwen3.5-flash",baseUrl:"https://dashscope.aliyuncs.com/compatible-mode/v1",defaultApi:"openai-completions"}];function Wy(e){if(!e||typeof e!="string")return null;const t=e.trim().split("/",2);return t.length===2?{provider:t[0].trim(),modelId:t[1].trim()}:{provider:"anthropic",modelId:e.trim()}}function un(e,t){const n=Me.find(s=>s.id===e);return n?n.label:t?.displayName??e}function Vy(e,t){const n=Me.find(a=>a.id===e),s=t?.models??[];return s.length>0?s:n?.defaultModel?[{id:n.defaultModel,name:n.defaultModel}]:[]}function Gy(e){const t=Wy(e.defaultModelRef);return r`
    <section class="card">
      <div class="row" style="justify-content: space-between; align-items: center;">
        <div>
          <div class="card-title">${i("navTitleModels")}</div>
          <div class="card-sub">${i("subtitleModels")}</div>
        </div>
        <div class="row" style="gap: 8px; align-items: center;">
          <div class="row" style="gap: 4px;" title=${i("modelsViewList")}>
            <button
              type="button"
              class="btn ${e.viewMode==="list"?"primary":""}"
              style="padding: 6px 10px;"
              @click=${()=>e.onViewModeChange("list")}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="8" y1="6" x2="21" y2="6"/>
                <line x1="8" y1="12" x2="21" y2="12"/>
                <line x1="8" y1="18" x2="21" y2="18"/>
                <line x1="3" y1="6" x2="3.01" y2="6"/>
                <line x1="3" y1="12" x2="3.01" y2="12"/>
                <line x1="3" y1="18" x2="3.01" y2="18"/>
              </svg>
            </button>
            <button
              type="button"
              class="btn ${e.viewMode==="card"?"primary":""}"
              style="padding: 6px 10px;"
              @click=${()=>e.onViewModeChange("card")}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="7" height="7"/>
                <rect x="14" y="3" width="7" height="7"/>
                <rect x="3" y="14" width="7" height="7"/>
                <rect x="14" y="14" width="7" height="7"/>
              </svg>
            </button>
          </div>
          <button class="btn primary" ?disabled=${e.loading} @click=${e.onAddProvider}>
            ${i("modelsAddProvider")}
          </button>
          <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?i("commonLoading"):i("commonRefresh")}
          </button>
        </div>
      </div>

      ${e.defaultModelRef?r`
            <div class="callout" style="margin-top: 12px;">
              <strong>${i("modelsCurrentDefault")}:</strong> ${e.defaultModelRef}
            </div>
          `:y}

      <div class="models-provider-list" style="margin-top: 16px;">
        ${e.viewMode==="list"?r`
              <div class="models-table table" style="margin-top: 0;">
                <div class="models-table-head table-head">
                  <div>${i("modelsTableName")}</div>
                  <div>${i("modelsTableModel")}</div>
                  <div>${i("modelsTableBaseUrl")}</div>
                  <div>${i("modelsTableActions")}</div>
                </div>
                ${Me.map(n=>{const s=e.providers?.[n.id],a=!!s,o=a?s?.models?.[0]?.id??n.defaultModel??"(需指定)":null,l=a&&o&&o!=="(需指定)",d=l&&t?.provider===n.id;return r`
                    <div
                      class="models-table-row table-row ${e.selectedProvider===n.id?"list-item-selected":""}"
                      style="cursor: pointer;"
                      @click=${()=>e.onSelect(e.selectedProvider===n.id?null:n.id)}
                    >
                      <div class="models-table-cell" style="font-weight: 500;">
                        ${n.label}
                        ${d?r`<span class="muted" style="font-size: 12px;"> (${i("modelsCurrentDefault")})</span>`:y}
                      </div>
                      <div class="models-table-cell muted" style="font-size: 13px;">${a?o:"-"}</div>
                      <div class="models-table-cell muted" style="font-size: 12px;">${s?.baseUrl??n.baseUrl}</div>
                      <div class="models-table-cell row" style="gap: 6px; justify-content: flex-start;" @click=${u=>u.stopPropagation()}>
                        ${l?r`
                              <button
                                class="btn btn--sm ${d?"btn-ok":"primary"}"
                                ?disabled=${e.saving}
                                @click=${u=>{u.stopPropagation(),e.onUseModelClick(n.id)}}
                              >
                                ${i("modelsUseAsDefault")}
                              </button>
                            `:r`<button class="btn btn--sm" disabled>${i("modelsUseAsDefault")}</button>`}
                        <button
                          class="btn btn--sm"
                          ?disabled=${e.saving}
                          @click=${u=>{u.stopPropagation(),e.onSelect(e.selectedProvider===n.id?null:n.id)}}
                        >
                          ${i("channelsConfigure")}
                        </button>
                        ${a?r`
                              <button
                                class="btn btn--sm ${d?"btn-ok":""}"
                                ?disabled=${e.saving||!d}
                                @click=${u=>{u.stopPropagation(),e.onCancelUse(n.id)}}
                              >
                                ${i("modelsCancelUse")}
                              </button>
                            `:y}
                      </div>
                    </div>
                  `})}
                ${Object.entries(e.providers??{}).filter(([n])=>!Me.some(s=>s.id===n)).map(([n,s])=>{const a=s.models?.[0]?.id,o=!!a,l=o&&t?.provider===n;return r`
                      <div
                        class="models-table-row table-row ${e.selectedProvider===n?"list-item-selected":""}"
                        style="cursor: pointer;"
                        @click=${()=>e.onSelect(e.selectedProvider===n?null:n)}
                      >
                        <div class="models-table-cell" style="font-weight: 500;">${un(n,s)}</div>
                        <div class="models-table-cell muted" style="font-size: 13px;">
                          ${o?a:(s.models?.length??0)+" "+i("modelsModels")}
                        </div>
                        <div class="models-table-cell muted" style="font-size: 12px;">${s.baseUrl??i("commonNA")}</div>
                        <div class="models-table-cell row" style="gap: 6px; justify-content: flex-start;" @click=${d=>d.stopPropagation()}>
                          ${o?r`
                                <button
                                  class="btn btn--sm ${l?"btn-ok":"primary"}"
                                  ?disabled=${e.saving}
                                  @click=${d=>{d.stopPropagation(),e.onUseModelClick(n)}}
                                >
                                  ${i("modelsUseAsDefault")}
                                </button>
                              `:r`<button class="btn btn--sm" disabled>${i("modelsUseAsDefault")}</button>`}
                          <button
                            class="btn btn--sm"
                            ?disabled=${e.saving}
                            @click=${d=>{d.stopPropagation(),e.onSelect(e.selectedProvider===n?null:n)}}
                          >
                            ${i("channelsConfigure")}
                          </button>
                          <button
                            class="btn btn--sm ${l?"btn-ok":""}"
                            ?disabled=${e.saving||!l}
                            @click=${d=>{d.stopPropagation(),e.onCancelUse(n)}}
                          >
                            ${i("modelsCancelUse")}
                          </button>
                        </div>
                      </div>
                    `})}
              </div>
            `:r`
              <div class="models-card-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 12px;">
                ${Me.map(n=>{const s=e.providers?.[n.id],a=!!s,o=a?s?.models?.[0]?.id??n.defaultModel??"(需指定)":null,l=a&&o&&o!=="(需指定)",d=l&&t?.provider===n.id;return r`
                    <div
                      class="models-provider-card ${e.selectedProvider===n.id?"list-item-selected":""}"
                      style="cursor: pointer;"
                      @click=${()=>e.onSelect(e.selectedProvider===n.id?null:n.id)}
                    >
                      <div class="models-provider-card__header">
                        <div class="models-provider-card__icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                            <path d="M2 17l10 5 10-5"/>
                          </svg>
                        </div>
                        <div class="models-provider-card__title-row" style="min-width: 0;">
                          <span class="models-provider-card__name">${n.label}</span>
                          ${a?r`<span class="chip" style="font-size: 11px;">${o}</span>`:y}
                        </div>
                      </div>
                      <div class="models-provider-card__meta muted" style="font-size: 12px;">${s?.baseUrl??n.baseUrl}</div>
                      <div class="models-provider-card__footer" @click=${u=>u.stopPropagation()}>
                        ${l?r`
                              <button
                                class="btn btn--sm ${d?"btn-ok":"primary"}"
                                ?disabled=${e.saving}
                                @click=${u=>{u.stopPropagation(),e.onUseModelClick(n.id)}}
                              >
                                ${i("modelsUseAsDefault")}
                              </button>
                            `:r`<button class="btn btn--sm" disabled>${i("modelsUseAsDefault")}</button>`}
                        <button
                          class="btn btn--sm"
                          ?disabled=${e.saving}
                          @click=${u=>{u.stopPropagation(),e.onSelect(e.selectedProvider===n.id?null:n.id)}}
                        >
                          ${i("channelsConfigure")}
                        </button>
                        ${a?r`
                              <button
                                class="btn btn--sm ${d?"btn-ok":""}"
                                ?disabled=${e.saving||!d}
                                @click=${u=>{u.stopPropagation(),e.onCancelUse(n.id)}}
                              >
                                ${i("modelsCancelUse")}
                              </button>
                            `:y}
                      </div>
                    </div>
                  `})}
                ${Object.entries(e.providers??{}).filter(([n])=>!Me.some(s=>s.id===n)).map(([n,s])=>{const a=s.models?.[0]?.id,o=!!a,l=o&&t?.provider===n;return r`
                      <div
                        class="models-provider-card ${e.selectedProvider===n?"list-item-selected":""}"
                        style="cursor: pointer;"
                        @click=${()=>e.onSelect(e.selectedProvider===n?null:n)}
                      >
                        <div class="models-provider-card__header">
                          <div class="models-provider-card__icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                              <path d="M2 17l10 5 10-5"/>
                            </svg>
                          </div>
                          <div class="models-provider-card__title-row" style="min-width: 0;">
                            <span class="models-provider-card__name">${un(n,s)}</span>
                            ${o?r`<span class="chip" style="font-size: 11px;">${a}</span>`:r`<span class="chip" style="font-size: 11px;">${s.models?.length??0} ${i("modelsModels")}</span>`}
                          </div>
                        </div>
                        <div class="models-provider-card__meta muted" style="font-size: 12px;">${s.baseUrl??i("commonNA")}</div>
                        <div class="models-provider-card__footer" @click=${d=>d.stopPropagation()}>
                          ${o?r`
                                <button
                                  class="btn btn--sm ${l?"btn-ok":"primary"}"
                                  ?disabled=${e.saving}
                                  @click=${d=>{d.stopPropagation(),e.onUseModelClick(n)}}
                                >
                                  ${i("modelsUseAsDefault")}
                                </button>
                              `:r`<button class="btn btn--sm" disabled>${i("modelsUseAsDefault")}</button>`}
                          <button
                            class="btn btn--sm"
                            ?disabled=${e.saving}
                            @click=${d=>{d.stopPropagation(),e.onSelect(e.selectedProvider===n?null:n)}}
                          >
                            ${i("channelsConfigure")}
                          </button>
                          <button
                            class="btn btn--sm ${l?"btn-ok":""}"
                            ?disabled=${e.saving||!l}
                            @click=${d=>{d.stopPropagation(),e.onCancelUse(n)}}
                          >
                            ${i("modelsCancelUse")}
                          </button>
                        </div>
                      </div>
                    `})}
              </div>
            `}
    </section>

    ${e.addProviderModalOpen?r`
          <div class="channel-panel-overlay" @click=${e.onAddProviderModalClose}>
            <div class="channel-panel card" style="max-width: 480px;" @click=${n=>n.stopPropagation()}>
              <div class="channel-panel-header row" style="justify-content: space-between; align-items: center;">
                <div class="card-title">${i("modelsAddCustomProvider")}</div>
                <button class="btn" @click=${e.onAddProviderModalClose}>×</button>
              </div>
              <div class="channel-panel-content">
                <div class="config-form">
                  <div class="field">
                    <span>${i("modelsProviderId")} *</span>
                    <input
                      type="text"
                      .value=${e.addProviderForm.providerId}
                      placeholder=${i("modelsProviderIdPlaceholder")}
                      @input=${n=>e.onAddProviderFormChange({providerId:n.target.value.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9_-]/g,"")})}
                    />
                    <small class="muted" style="font-size: 11px;">${i("modelsProviderIdHint")}</small>
                  </div>
                  <div class="field">
                    <span>${i("modelsDisplayName")} *</span>
                    <input
                      type="text"
                      .value=${e.addProviderForm.displayName}
                      placeholder=${i("modelsDisplayNamePlaceholder")}
                      @input=${n=>e.onAddProviderFormChange({displayName:n.target.value})}
                    />
                  </div>
                  <div class="field">
                    <span>${i("modelsDefaultBaseUrl")}</span>
                    <input
                      type="text"
                      .value=${e.addProviderForm.baseUrl}
                      placeholder=${i("modelsDefaultBaseUrlPlaceholder")}
                      @input=${n=>e.onAddProviderFormChange({baseUrl:n.target.value})}
                    />
                  </div>
                  <div class="field">
                    <span>${i("modelsApiKey")}</span>
                    <input
                      type="password"
                      .value=${e.addProviderForm.apiKey}
                      placeholder="sk-... or $ENV_VAR"
                      @input=${n=>e.onAddProviderFormChange({apiKey:n.target.value})}
                    />
                  </div>
                  <div class="field">
                    <span>${i("modelsApiKeyPrefix")}</span>
                    <input
                      type="text"
                      .value=${e.addProviderForm.apiKeyPrefix}
                      placeholder=${i("modelsApiKeyPrefixPlaceholder")}
                      @input=${n=>e.onAddProviderFormChange({apiKeyPrefix:n.target.value})}
                    />
                  </div>
                </div>
                <div class="row" style="margin-top: 16px; gap: 8px;">
                  <button class="btn" @click=${e.onAddProviderModalClose}>${i("commonCancel")}</button>
                  <button
                    class="btn primary"
                    ?disabled=${!e.addProviderForm.providerId.trim()||!e.addProviderForm.displayName.trim()}
                    @click=${e.onAddProviderSubmit}
                  >
                    ${i("commonCreate")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        `:y}

    ${e.useModelModalOpen&&e.useModelModalProvider?r`
          <div class="channel-panel-overlay" style="z-index: 165;" @click=${e.onUseModelModalClose}>
            <div class="channel-panel card" style="max-width: 400px;" @click=${n=>n.stopPropagation()}>
              <div class="channel-panel-header row" style="justify-content: space-between; align-items: center;">
                <div class="card-title">${un(e.useModelModalProvider,e.providers?.[e.useModelModalProvider])} - ${i("modelsSelectModelToUse")}</div>
                <button class="btn" @click=${e.onUseModelModalClose}>×</button>
              </div>
              <div class="channel-panel-content">
                <ul style="list-style: none; padding: 0; margin: 0;">
                  ${Vy(e.useModelModalProvider,e.providers?.[e.useModelModalProvider]).map(n=>{const s=t?.provider===e.useModelModalProvider&&t?.modelId===n.id;return r`
                        <li style="padding: 10px 0; border-bottom: 1px solid var(--border-color, #eee);">
                          <button
                            class="btn ${s?"btn-ok":""}"
                            style="width: 100%; justify-content: flex-start; text-align: left;"
                            ?disabled=${e.saving}
                            @click=${()=>e.onUseModel(e.useModelModalProvider,n.id)}
                          >
                            <code>${n.id}</code> ${n.name?`- ${n.name}`:""}
                          </button>
                        </li>
                      `})}
                </ul>
              </div>
            </div>
          </div>
        `:y}

    ${e.addModelModalOpen&&e.selectedProvider?r`
          <div class="channel-panel-overlay" style="z-index: 160;" @click=${e.onAddModelModalClose}>
            <div class="channel-panel card" style="max-width: 400px;" @click=${n=>n.stopPropagation()}>
              <div class="channel-panel-header row" style="justify-content: space-between; align-items: center;">
                <div class="card-title">${un(e.selectedProvider,e.providers?.[e.selectedProvider])} - ${i("modelsAddModel")}</div>
                <button class="btn" @click=${e.onAddModelModalClose}>×</button>
              </div>
              <div class="channel-panel-content">
                <div class="config-form">
                  <div class="field">
                    <span>${i("modelsModelId")} *</span>
                    <input
                      type="text"
                      .value=${e.addModelForm.modelId}
                      placeholder="e.g. qwen3-max"
                      @input=${n=>e.onAddModelFormChange({modelId:n.target.value})}
                    />
                  </div>
                  <div class="field">
                    <span>${i("modelsModelName")} *</span>
                    <input
                      type="text"
                      .value=${e.addModelForm.modelName}
                      placeholder="e.g. Qwen3 Max"
                      @input=${n=>e.onAddModelFormChange({modelName:n.target.value})}
                    />
                  </div>
                </div>
                <div class="row" style="margin-top: 16px; gap: 8px;">
                  <button class="btn" @click=${e.onAddModelModalClose}>${i("commonCancel")}</button>
                  <button
                    class="btn primary"
                    ?disabled=${!e.addModelForm.modelId.trim()||!e.addModelForm.modelName.trim()}
                    @click=${()=>e.onAddModelSubmit(e.selectedProvider)}
                  >
                    ${i("modelsAddModel")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        `:y}

    ${e.selectedProvider&&(e.providers?.[e.selectedProvider]??Me.find(n=>n.id===e.selectedProvider))?r`
            <div class="channel-panel-overlay" @click=${n=>{n.target.classList.contains("channel-panel-overlay")&&e.onCancel()}}>
              <div class="channel-panel card" @click=${n=>n.stopPropagation()}>
                <div class="channel-panel-header row" style="justify-content: space-between; align-items: center;">
                  <div class="card-title">
                    ${un(e.selectedProvider,e.providers?.[e.selectedProvider])} ${i("configSettingsTitle")}
                  </div>
                  <button class="btn" @click=${e.onCancel}>×</button>
                </div>
                <div class="channel-panel-content">
                  ${e.saveError?r`<div class="callout" style="margin-bottom: 12px; color: var(--color-error, #c00);">${i("modelsEnvVarConflict")}: ${e.saveError}</div>`:y}
                  <div class="config-form">
                    <div class="field">
                      <span>${i("modelsBaseUrl")}</span>
                      <input
                        type="text"
                        .value=${e.providers?.[e.selectedProvider]?.baseUrl??Me.find(n=>n.id===e.selectedProvider)?.baseUrl??""}
                        placeholder=${Me.find(n=>n.id===e.selectedProvider)?.baseUrl??""}
                        @input=${n=>e.onPatch(e.selectedProvider,{baseUrl:n.target.value})}
                      />
                    </div>
                    <div class="field">
                      <span>${i("modelsApiKey")}</span>
                      <input
                        type="password"
                        .value=${e.providers?.[e.selectedProvider]?.apiKey??""}
                        placeholder="sk-... or $ENV_VAR"
                        @input=${n=>e.onPatch(e.selectedProvider,{apiKey:n.target.value})}
                      />
                    </div>
                    ${Me.some(n=>n.id===e.selectedProvider)?y:r`
                          <div class="field">
                            <span>${i("modelsDisplayName")}</span>
                            <input
                              type="text"
                              .value=${e.providers?.[e.selectedProvider]?.displayName??""}
                              placeholder=${e.selectedProvider}
                              @input=${n=>e.onPatch(e.selectedProvider,{displayName:n.target.value})}
                            />
                          </div>
                        `}
                    <div class="field">
                      <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span>${i("modelsApiType")}</span>
                        <span
                          class="muted"
                          style="cursor: help; font-size: 12px;"
                          title=${i("modelsApiTypeTooltip")}
                        >?</span>
                      </div>
                      <select
                        .value=${e.providers?.[e.selectedProvider]?.api??Me.find(n=>n.id===e.selectedProvider)?.defaultApi??"openai-completions"}
                        @change=${n=>e.onPatch(e.selectedProvider,{api:n.target.value})}
                      >
                        <option value="openai-completions">${i("modelsApiTypeOpenAI")}</option>
                        <option value="anthropic-messages">${i("modelsApiTypeAnthropic")}</option>
                      </select>
                      <p class="muted" style="font-size: 12px; margin-bottom: 0; margin-top: 6px; line-height: 1.5;">
                        ${i("modelsApiTypeTooltip")}
                      </p>
                    </div>
                  </div>

                  <div style="margin-top: 16px;">
                    <div class="row" style="justify-content: space-between; align-items: center; margin-bottom: 8px;">
                      <strong>${i("modelsModelManagement")}</strong>
                      <button
                        class="btn btn--sm primary"
                        ?disabled=${e.saving}
                        @click=${()=>e.onAddModel(e.selectedProvider)}
                      >
                        + ${i("modelsAddModel")}
                      </button>
                    </div>
                    ${(e.providers?.[e.selectedProvider]?.models??[]).length===0?r`<p class="muted" style="font-size: 13px;">${i("modelsNoModels")}</p>`:r`
                          <ul style="list-style: none; padding: 0; margin: 0;">
                            ${(e.providers?.[e.selectedProvider]?.models??[]).map(n=>{const s=`${e.selectedProvider}/${n.id}`,a=e.modelEnv?.[s]??{},o=Object.entries(a);return r`
                                <li style="padding: 8px 0; border-bottom: 1px solid var(--border-color, #eee);">
                                  <div class="row" style="justify-content: space-between; align-items: center;">
                                    <span><code>${n.id}</code> ${n.name?`- ${n.name}`:""}</span>
                                    <button
                                      class="btn btn--sm"
                                      ?disabled=${e.saving}
                                      @click=${()=>e.onRemoveModel(e.selectedProvider,n.id)}
                                    >
                                      ${i("commonDelete")}
                                    </button>
                                  </div>
                                  <div style="margin-top: 6px; font-size: 12px;">
                                    <strong class="muted">${i("modelsEnvVars")}</strong>
                                    ${o.length===0?r`
                                          <button
                                            class="btn btn--sm"
                                            style="font-size: 11px; margin-top: 4px;"
                                            @click=${()=>e.onPatchModelEnv(e.selectedProvider,n.id,{__new__:""})}
                                          >
                                            + ${i("envVarsAdd")}
                                          </button>
                                        `:r`
                                          <div style="margin-top: 4px;">
                                            ${o.map(([l,d])=>r`
                                              <div class="row" style="gap: 6px; align-items: center; margin-top: 4px;">
                                                <input
                                                  type="text"
                                                  style="flex: 1; font-size: 11px; padding: 4px;"
                                                  placeholder=${i("envVarsKeyPlaceholder")}
                                                  .value=${l==="__new__"?"":l}
                                                  @input=${u=>{const f=u.target.value,g={...a};delete g[l],f&&(g[f]=d),e.onPatchModelEnv(e.selectedProvider,n.id,g)}}
                                                />
                                                <input
                                                  type="text"
                                                  style="flex: 1; font-size: 11px; padding: 4px;"
                                                  placeholder=${i("envVarsValuePlaceholder")}
                                                  .value=${d}
                                                  @input=${u=>{const f={...a};f[l]=u.target.value,e.onPatchModelEnv(e.selectedProvider,n.id,f)}}
                                                />
                                                <button class="btn btn--sm" style="font-size: 11px;" @click=${()=>{const u={...a};delete u[l],e.onPatchModelEnv(e.selectedProvider,n.id,u)}}>×</button>
                                              </div>
                                            `)}
                                            <button
                                              class="btn btn--sm"
                                              style="margin-top: 4px; font-size: 11px;"
                                              @click=${()=>{const l={...a,__new__:""};e.onPatchModelEnv(e.selectedProvider,n.id,l)}}
                                            >
                                              + ${i("envVarsAdd")}
                                            </button>
                                          </div>
                                        `}
                                  </div>
                                </li>
                              `})}
                          </ul>
                        `}
                  </div>

                  <div class="row" style="margin-top: 16px; gap: 8px;">
                    <button
                      class="btn primary"
                      ?disabled=${e.saving||!e.formDirty}
                      @click=${e.onSave}
                    >
                      ${e.saving?i("commonSaving"):i("commonSave")}
                    </button>
                    <button class="btn" ?disabled=${e.saving} @click=${e.onCancel}>
                      ×
                    </button>
                  </div>
                </div>
              </div>
            </div>
          `:y}
  `}const Qy=new Set(["agent","channel","chat","provider","model","tool","label","key","session","id","has","mintokens","maxtokens","mincost","maxcost","minmessages","maxmessages"]),ds=e=>e.trim().toLowerCase(),Jy=e=>{const t=e.replace(/[.+^${}()|[\]\\]/g,"\\$&").replace(/\*/g,".*").replace(/\?/g,".");return new RegExp(`^${t}$`,"i")},xt=e=>{let t=e.trim().toLowerCase();if(!t)return null;t.startsWith("$")&&(t=t.slice(1));let n=1;t.endsWith("k")?(n=1e3,t=t.slice(0,-1)):t.endsWith("m")&&(n=1e6,t=t.slice(0,-1));const s=Number(t);return Number.isFinite(s)?s*n:null},_o=e=>(e.match(/"[^"]+"|\S+/g)??[]).map(n=>{const s=n.replace(/^"|"$/g,""),a=s.indexOf(":");if(a>0){const o=s.slice(0,a),l=s.slice(a+1);return{key:o,value:l,raw:s}}return{value:s,raw:s}}),Yy=e=>[e.label,e.key,e.sessionId].filter(n=>!!n).map(n=>n.toLowerCase()),Nl=e=>{const t=new Set;e.modelProvider&&t.add(e.modelProvider.toLowerCase()),e.providerOverride&&t.add(e.providerOverride.toLowerCase()),e.origin?.provider&&t.add(e.origin.provider.toLowerCase());for(const n of e.usage?.modelUsage??[])n.provider&&t.add(n.provider.toLowerCase());return Array.from(t)},Ul=e=>{const t=new Set;e.model&&t.add(e.model.toLowerCase());for(const n of e.usage?.modelUsage??[])n.model&&t.add(n.model.toLowerCase());return Array.from(t)},Zy=e=>(e.usage?.toolUsage?.tools??[]).map(t=>t.name.toLowerCase()),Xy=(e,t)=>{const n=ds(t.value??"");if(!n)return!0;if(!t.key)return Yy(e).some(a=>a.includes(n));switch(ds(t.key)){case"agent":return e.agentId?.toLowerCase().includes(n)??!1;case"channel":return e.channel?.toLowerCase().includes(n)??!1;case"chat":return e.chatType?.toLowerCase().includes(n)??!1;case"provider":return Nl(e).some(a=>a.includes(n));case"model":return Ul(e).some(a=>a.includes(n));case"tool":return Zy(e).some(a=>a.includes(n));case"label":return e.label?.toLowerCase().includes(n)??!1;case"key":case"session":case"id":if(n.includes("*")||n.includes("?")){const a=Jy(n);return a.test(e.key)||(e.sessionId?a.test(e.sessionId):!1)}return e.key.toLowerCase().includes(n)||(e.sessionId?.toLowerCase().includes(n)??!1);case"has":switch(n){case"tools":return(e.usage?.toolUsage?.totalCalls??0)>0;case"errors":return(e.usage?.messageCounts?.errors??0)>0;case"context":return!!e.contextWeight;case"usage":return!!e.usage;case"model":return Ul(e).length>0;case"provider":return Nl(e).length>0;default:return!0}case"mintokens":{const a=xt(n);return a===null?!0:(e.usage?.totalTokens??0)>=a}case"maxtokens":{const a=xt(n);return a===null?!0:(e.usage?.totalTokens??0)<=a}case"mincost":{const a=xt(n);return a===null?!0:(e.usage?.totalCost??0)>=a}case"maxcost":{const a=xt(n);return a===null?!0:(e.usage?.totalCost??0)<=a}case"minmessages":{const a=xt(n);return a===null?!0:(e.usage?.messageCounts?.total??0)>=a}case"maxmessages":{const a=xt(n);return a===null?!0:(e.usage?.messageCounts?.total??0)<=a}default:return!0}},eb=(e,t)=>{const n=_o(t);if(n.length===0)return{sessions:e,warnings:[]};const s=[];for(const o of n){if(!o.key)continue;const l=ds(o.key);if(!Qy.has(l)){s.push(`Unknown filter: ${o.key}`);continue}if(o.value===""&&s.push(`Missing value for ${o.key}`),l==="has"){const d=new Set(["tools","errors","context","usage","model","provider"]);o.value&&!d.has(ds(o.value))&&s.push(`Unknown has:${o.value}`)}["mintokens","maxtokens","mincost","maxcost","minmessages","maxmessages"].includes(l)&&o.value&&xt(o.value)===null&&s.push(`Invalid number for ${o.key}`)}return{sessions:e.filter(o=>n.every(l=>Xy(o,l))),warnings:s}};function tb(e){const t=e.split(`
`),n=new Map,s=[];for(const d of t){const u=/^\[Tool:\s*([^\]]+)\]/.exec(d.trim());if(u){const f=u[1];n.set(f,(n.get(f)??0)+1);continue}d.trim().startsWith("[Tool Result]")||s.push(d)}const a=Array.from(n.entries()).toSorted((d,u)=>u[1]-d[1]),o=a.reduce((d,[,u])=>d+u,0),l=a.length>0?`Tools: ${a.map(([d,u])=>`${d}×${u}`).join(", ")} (${o} calls)`:"";return{tools:a,summary:l,cleanContent:s.join(`
`).trim()}}const nb=`
  .usage-page-header {
    margin: 4px 0 12px;
  }
  .usage-page-title {
    font-size: 28px;
    font-weight: 700;
    letter-spacing: -0.02em;
    margin-bottom: 4px;
  }
  .usage-page-subtitle {
    font-size: 13px;
    color: var(--text-muted);
    margin: 0 0 12px;
  }
  /* ===== FILTERS & HEADER ===== */
  .usage-filters-inline {
    display: flex;
    gap: 8px;
    align-items: center;
    flex-wrap: wrap;
  }
  .usage-filters-inline select {
    padding: 6px 10px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--bg);
    color: var(--text);
    font-size: 13px;
  }
  .usage-filters-inline input[type="date"] {
    padding: 6px 10px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--bg);
    color: var(--text);
    font-size: 13px;
  }
  .usage-filters-inline input[type="text"] {
    padding: 6px 10px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--bg);
    color: var(--text);
    font-size: 13px;
    min-width: 180px;
  }
  .usage-filters-inline .btn-sm {
    padding: 6px 12px;
    font-size: 14px;
  }
  .usage-refresh-indicator {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    background: rgba(255, 77, 77, 0.1);
    border-radius: 4px;
    font-size: 12px;
    color: #ff4d4d;
  }
  .usage-refresh-indicator::before {
    content: "";
    width: 10px;
    height: 10px;
    border: 2px solid #ff4d4d;
    border-top-color: transparent;
    border-radius: 50%;
    animation: usage-spin 0.6s linear infinite;
  }
  @keyframes usage-spin {
    to { transform: rotate(360deg); }
  }
  .active-filters {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }
  .filter-chip {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 4px 8px 4px 12px;
    background: var(--accent-subtle);
    border: 1px solid var(--accent);
    border-radius: 16px;
    font-size: 12px;
  }
  .filter-chip-label {
    color: var(--accent);
    font-weight: 500;
  }
  .filter-chip-remove {
    background: none;
    border: none;
    color: var(--accent);
    cursor: pointer;
    padding: 2px 4px;
    font-size: 14px;
    line-height: 1;
    opacity: 0.7;
    transition: opacity 0.15s;
  }
  .filter-chip-remove:hover {
    opacity: 1;
  }
  .filter-clear-btn {
    padding: 4px 10px !important;
    font-size: 12px !important;
    line-height: 1 !important;
    margin-left: 8px;
  }
  .usage-query-bar {
    display: grid;
    grid-template-columns: minmax(220px, 1fr) auto;
    gap: 10px;
    align-items: center;
    /* Keep the dropdown filter row from visually touching the query row. */
    margin-bottom: 10px;
  }
  .usage-query-actions {
    display: flex;
    align-items: center;
    gap: 6px;
    flex-wrap: nowrap;
    justify-self: end;
  }
  .usage-query-actions .btn {
    height: 34px;
    padding: 0 14px;
    border-radius: 999px;
    font-weight: 600;
    font-size: 13px;
    line-height: 1;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    color: var(--text);
    box-shadow: none;
    transition: background 0.15s, border-color 0.15s, color 0.15s;
  }
  .usage-query-actions .btn:hover {
    background: var(--bg);
    border-color: var(--border-strong);
  }
  .usage-action-btn {
    height: 34px;
    padding: 0 14px;
    border-radius: 999px;
    font-weight: 600;
    font-size: 13px;
    line-height: 1;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    color: var(--text);
    box-shadow: none;
    transition: background 0.15s, border-color 0.15s, color 0.15s;
  }
  .usage-action-btn:hover {
    background: var(--bg);
    border-color: var(--border-strong);
  }
  .usage-primary-btn {
    background: #ff4d4d;
    color: #fff;
    border-color: #ff4d4d;
    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.12);
  }
  .btn.usage-primary-btn {
    background: #ff4d4d !important;
    border-color: #ff4d4d !important;
    color: #fff !important;
  }
  .usage-primary-btn:hover {
    background: #e64545;
    border-color: #e64545;
  }
  .btn.usage-primary-btn:hover {
    background: #e64545 !important;
    border-color: #e64545 !important;
  }
  .usage-primary-btn:disabled {
    background: rgba(255, 77, 77, 0.18);
    border-color: rgba(255, 77, 77, 0.3);
    color: #ff4d4d;
    box-shadow: none;
    cursor: default;
    opacity: 1;
  }
  .usage-primary-btn[disabled] {
    background: rgba(255, 77, 77, 0.18) !important;
    border-color: rgba(255, 77, 77, 0.3) !important;
    color: #ff4d4d !important;
    opacity: 1 !important;
  }
  .usage-secondary-btn {
    background: var(--bg-secondary);
    color: var(--text);
    border-color: var(--border);
  }
  .usage-query-input {
    width: 100%;
    min-width: 220px;
    padding: 6px 10px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--bg);
    color: var(--text);
    font-size: 13px;
  }
  .usage-query-suggestions {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 6px;
  }
  .usage-query-suggestion {
    padding: 4px 8px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    font-size: 11px;
    color: var(--text);
    cursor: pointer;
    transition: background 0.15s;
  }
  .usage-query-suggestion:hover {
    background: var(--bg-hover);
  }
  .usage-filter-row {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
    margin-top: 14px;
  }
  details.usage-filter-select {
    position: relative;
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 6px 10px;
    background: var(--bg);
    font-size: 12px;
    min-width: 140px;
  }
  details.usage-filter-select summary {
    cursor: pointer;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6px;
    font-weight: 500;
  }
  details.usage-filter-select summary::-webkit-details-marker {
    display: none;
  }
  .usage-filter-badge {
    font-size: 11px;
    color: var(--text-muted);
  }
  .usage-filter-popover {
    position: absolute;
    left: 0;
    top: calc(100% + 6px);
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    min-width: 220px;
    z-index: 20;
  }
  .usage-filter-actions {
    display: flex;
    gap: 6px;
    margin-bottom: 8px;
  }
  .usage-filter-actions button {
    border-radius: 999px;
    padding: 4px 10px;
    font-size: 11px;
  }
  .usage-filter-options {
    display: flex;
    flex-direction: column;
    gap: 6px;
    max-height: 200px;
    overflow: auto;
  }
  .usage-filter-option {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
  }
  .usage-query-hint {
    font-size: 11px;
    color: var(--text-muted);
  }
  .usage-query-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 6px;
  }
  .usage-query-chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 8px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    font-size: 11px;
  }
  .usage-query-chip button {
    background: none;
    border: none;
    color: var(--text-muted);
    cursor: pointer;
    padding: 0;
    line-height: 1;
  }
  .usage-header {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: var(--bg);
  }
  .usage-header.pinned {
    position: sticky;
    top: 12px;
    z-index: 6;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  }
  .usage-pin-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 8px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    font-size: 11px;
    color: var(--text);
    cursor: pointer;
  }
  .usage-pin-btn.active {
    background: var(--accent-subtle);
    border-color: var(--accent);
    color: var(--accent);
  }
  .usage-header-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;
  }
  .usage-header-title {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .usage-header-metrics {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
  }
  .usage-metric-badge {
    display: inline-flex;
    align-items: baseline;
    gap: 6px;
    padding: 2px 8px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: transparent;
    font-size: 11px;
    color: var(--text-muted);
  }
  .usage-metric-badge strong {
    font-size: 12px;
    color: var(--text);
  }
  .usage-controls {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }
  .usage-controls .active-filters {
    flex: 1 1 100%;
  }
  .usage-controls input[type="date"] {
    min-width: 140px;
  }
  .usage-presets {
    display: inline-flex;
    gap: 6px;
    flex-wrap: wrap;
  }
  .usage-presets .btn {
    padding: 4px 8px;
    font-size: 11px;
  }
  .usage-quick-filters {
    display: flex;
    gap: 8px;
    align-items: center;
    flex-wrap: wrap;
  }
  .usage-select {
    min-width: 120px;
    padding: 6px 10px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--bg);
    color: var(--text);
    font-size: 12px;
  }
  .usage-export-menu summary {
    cursor: pointer;
    font-weight: 500;
    color: var(--text);
    list-style: none;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  .usage-export-menu summary::-webkit-details-marker {
    display: none;
  }
  .usage-export-menu {
    position: relative;
  }
  .usage-export-button {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 10px;
    border-radius: 8px;
    border: 1px solid var(--border);
    background: var(--bg);
    font-size: 12px;
  }
  .usage-export-popover {
    position: absolute;
    right: 0;
    top: calc(100% + 6px);
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 8px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    min-width: 160px;
    z-index: 10;
  }
  .usage-export-list {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .usage-export-item {
    text-align: left;
    padding: 6px 10px;
    border-radius: 8px;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    font-size: 12px;
  }
  .usage-summary-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 12px;
    margin-top: 12px;
  }
  .usage-summary-card {
    padding: 12px;
    border-radius: 8px;
    background: var(--bg-secondary);
    border: 1px solid var(--border);
  }
  .usage-mosaic {
    margin-top: 16px;
    padding: 16px;
  }
  .usage-mosaic-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 12px;
  }
  .usage-mosaic-title {
    font-weight: 600;
  }
  .usage-mosaic-sub {
    font-size: 12px;
    color: var(--text-muted);
  }
  .usage-mosaic-grid {
    display: grid;
    grid-template-columns: minmax(200px, 1fr) minmax(260px, 2fr);
    gap: 16px;
    align-items: start;
  }
  .usage-mosaic-section {
    background: var(--bg-subtle);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 12px;
  }
  .usage-mosaic-section-title {
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .usage-mosaic-total {
    font-size: 20px;
    font-weight: 700;
  }
  .usage-daypart-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
    gap: 8px;
  }
  .usage-daypart-cell {
    border-radius: 8px;
    padding: 10px;
    color: var(--text);
    background: rgba(255, 77, 77, 0.08);
    border: 1px solid rgba(255, 77, 77, 0.2);
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .usage-daypart-label {
    font-size: 12px;
    font-weight: 600;
  }
  .usage-daypart-value {
    font-size: 14px;
  }
  .usage-hour-grid {
    display: grid;
    grid-template-columns: repeat(24, minmax(6px, 1fr));
    gap: 4px;
  }
  .usage-hour-cell {
    height: 28px;
    border-radius: 6px;
    background: rgba(255, 77, 77, 0.1);
    border: 1px solid rgba(255, 77, 77, 0.2);
    cursor: pointer;
    transition: border-color 0.15s, box-shadow 0.15s;
  }
  .usage-hour-cell.selected {
    border-color: rgba(255, 77, 77, 0.8);
    box-shadow: 0 0 0 2px rgba(255, 77, 77, 0.2);
  }
  .usage-hour-labels {
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: 6px;
    margin-top: 8px;
    font-size: 11px;
    color: var(--text-muted);
  }
  .usage-hour-legend {
    display: flex;
    gap: 8px;
    align-items: center;
    margin-top: 10px;
    font-size: 11px;
    color: var(--text-muted);
  }
  .usage-hour-legend span {
    display: inline-block;
    width: 14px;
    height: 10px;
    border-radius: 4px;
    background: rgba(255, 77, 77, 0.15);
    border: 1px solid rgba(255, 77, 77, 0.2);
  }
  .usage-calendar-labels {
    display: grid;
    grid-template-columns: repeat(7, minmax(10px, 1fr));
    gap: 6px;
    font-size: 10px;
    color: var(--text-muted);
    margin-bottom: 6px;
  }
  .usage-calendar {
    display: grid;
    grid-template-columns: repeat(7, minmax(10px, 1fr));
    gap: 6px;
  }
  .usage-calendar-cell {
    height: 18px;
    border-radius: 4px;
    border: 1px solid rgba(255, 77, 77, 0.2);
    background: rgba(255, 77, 77, 0.08);
  }
  .usage-calendar-cell.empty {
    background: transparent;
    border-color: transparent;
  }
  .usage-summary-title {
    font-size: 11px;
    color: var(--text-muted);
    margin-bottom: 6px;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  .usage-info {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    margin-left: 6px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--bg);
    font-size: 10px;
    color: var(--text-muted);
    cursor: help;
  }
  .usage-summary-value {
    font-size: 16px;
    font-weight: 600;
    color: var(--text-strong);
  }
  .usage-summary-value.good {
    color: #1f8f4e;
  }
  .usage-summary-value.warn {
    color: #c57a00;
  }
  .usage-summary-value.bad {
    color: #c9372c;
  }
  .usage-summary-hint {
    font-size: 10px;
    color: var(--text-muted);
    cursor: help;
    border: 1px solid var(--border);
    border-radius: 999px;
    padding: 0 6px;
    line-height: 16px;
    height: 16px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .usage-summary-sub {
    font-size: 11px;
    color: var(--text-muted);
    margin-top: 4px;
  }
  .usage-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .usage-list-item {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    font-size: 12px;
    color: var(--text);
    align-items: flex-start;
  }
  .usage-list-value {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 2px;
    text-align: right;
  }
  .usage-list-sub {
    font-size: 11px;
    color: var(--text-muted);
  }
  .usage-list-item.button {
    border: none;
    background: transparent;
    padding: 0;
    text-align: left;
    cursor: pointer;
  }
  .usage-list-item.button:hover {
    color: var(--text-strong);
  }
  .usage-list-item .muted {
    font-size: 11px;
  }
  .usage-error-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .usage-error-row {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 8px;
    align-items: center;
    font-size: 12px;
  }
  .usage-error-date {
    font-weight: 600;
  }
  .usage-error-rate {
    font-variant-numeric: tabular-nums;
  }
  .usage-error-sub {
    grid-column: 1 / -1;
    font-size: 11px;
    color: var(--text-muted);
  }
  .usage-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 8px;
  }
  .usage-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 2px 8px;
    border: 1px solid var(--border);
    border-radius: 999px;
    font-size: 11px;
    background: var(--bg);
    color: var(--text);
  }
  .usage-meta-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 12px;
  }
  .usage-meta-item {
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: 12px;
  }
  .usage-meta-item span {
    color: var(--text-muted);
    font-size: 11px;
  }
  .usage-insights-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 16px;
    margin-top: 12px;
  }
  .usage-insight-card {
    padding: 14px;
    border-radius: 10px;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
  }
  .usage-insight-title {
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  .usage-insight-subtitle {
    font-size: 11px;
    color: var(--text-muted);
    margin-top: 6px;
  }
  /* ===== CHART TOGGLE ===== */
  .chart-toggle {
    display: flex;
    background: var(--bg);
    border-radius: 6px;
    overflow: hidden;
    border: 1px solid var(--border);
  }
  .chart-toggle .toggle-btn {
    padding: 6px 14px;
    font-size: 13px;
    background: transparent;
    border: none;
    color: var(--text-muted);
    cursor: pointer;
    transition: all 0.15s;
  }
  .chart-toggle .toggle-btn:hover {
    color: var(--text);
  }
  .chart-toggle .toggle-btn.active {
    background: #ff4d4d;
    color: white;
  }
  .chart-toggle.small .toggle-btn {
    padding: 4px 8px;
    font-size: 11px;
  }
  .sessions-toggle {
    border-radius: 4px;
  }
  .sessions-toggle .toggle-btn {
    border-radius: 4px;
  }
  .daily-chart-header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
    margin-bottom: 6px;
  }

  /* ===== DAILY BAR CHART ===== */
  .daily-chart {
    margin-top: 12px;
  }
  .daily-chart-bars {
    display: flex;
    align-items: flex-end;
    height: 200px;
    gap: 4px;
    padding: 8px 4px 36px;
  }
  .daily-bar-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: flex-end;
    cursor: pointer;
    position: relative;
    border-radius: 4px 4px 0 0;
    transition: background 0.15s;
    min-width: 0;
  }
  .daily-bar-wrapper:hover {
    background: var(--bg-hover);
  }
  .daily-bar-wrapper.selected {
    background: var(--accent-subtle);
  }
  .daily-bar-wrapper.selected .daily-bar {
    background: var(--accent);
  }
  .daily-bar {
    width: 100%;
    max-width: var(--bar-max-width, 32px);
    background: #ff4d4d;
    border-radius: 3px 3px 0 0;
    min-height: 2px;
    transition: all 0.15s;
    overflow: hidden;
  }
  .daily-bar-wrapper:hover .daily-bar {
    background: #cc3d3d;
  }
  .daily-bar-label {
    position: absolute;
    bottom: -28px;
    font-size: 10px;
    color: var(--text-muted);
    white-space: nowrap;
    text-align: center;
    transform: rotate(-35deg);
    transform-origin: top center;
  }
  .daily-bar-total {
    position: absolute;
    top: -16px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 10px;
    color: var(--text-muted);
    white-space: nowrap;
  }
  .daily-bar-tooltip {
    position: absolute;
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 8px 12px;
    font-size: 12px;
    white-space: nowrap;
    z-index: 100;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.15s;
  }
  .daily-bar-wrapper:hover .daily-bar-tooltip {
    opacity: 1;
  }

  /* ===== COST/TOKEN BREAKDOWN BAR ===== */
  .cost-breakdown {
    margin-top: 18px;
    padding: 16px;
    background: var(--bg-secondary);
    border-radius: 8px;
  }
  .cost-breakdown-header {
    font-weight: 600;
    font-size: 15px;
    letter-spacing: -0.02em;
    margin-bottom: 12px;
    color: var(--text-strong);
  }
  .cost-breakdown-bar {
    height: 28px;
    background: var(--bg);
    border-radius: 6px;
    overflow: hidden;
    display: flex;
  }
  .cost-segment {
    height: 100%;
    transition: width 0.3s ease;
    position: relative;
  }
  .cost-segment.output {
    background: #ef4444;
  }
  .cost-segment.input {
    background: #f59e0b;
  }
  .cost-segment.cache-write {
    background: #10b981;
  }
  .cost-segment.cache-read {
    background: #06b6d4;
  }
  .cost-breakdown-legend {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 12px;
  }
  .cost-breakdown-total {
    margin-top: 10px;
    font-size: 12px;
    color: var(--text-muted);
  }
  .legend-item {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    color: var(--text);
    cursor: help;
  }
  .legend-dot {
    width: 10px;
    height: 10px;
    border-radius: 2px;
    flex-shrink: 0;
  }
  .legend-dot.output {
    background: #ef4444;
  }
  .legend-dot.input {
    background: #f59e0b;
  }
  .legend-dot.cache-write {
    background: #10b981;
  }
  .legend-dot.cache-read {
    background: #06b6d4;
  }
  .legend-dot.system {
    background: #ff4d4d;
  }
  .legend-dot.skills {
    background: #8b5cf6;
  }
  .legend-dot.tools {
    background: #ec4899;
  }
  .legend-dot.files {
    background: #f59e0b;
  }
  .cost-breakdown-note {
    margin-top: 10px;
    font-size: 11px;
    color: var(--text-muted);
    line-height: 1.4;
  }

  /* ===== SESSION BARS (scrollable list) ===== */
  .session-bars {
    margin-top: 16px;
    max-height: 400px;
    overflow-y: auto;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: var(--bg);
  }
  .session-bar-row {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 14px;
    border-bottom: 1px solid var(--border);
    cursor: pointer;
    transition: background 0.15s;
  }
  .session-bar-row:last-child {
    border-bottom: none;
  }
  .session-bar-row:hover {
    background: var(--bg-hover);
  }
  .session-bar-row.selected {
    background: var(--accent-subtle);
  }
  .session-bar-label {
    flex: 1 1 auto;
    min-width: 0;
    font-size: 13px;
    color: var(--text);
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .session-bar-title {
    /* Prefer showing the full name; wrap instead of truncating. */
    white-space: normal;
    overflow-wrap: anywhere;
    word-break: break-word;
  }
  .session-bar-meta {
    font-size: 10px;
    color: var(--text-muted);
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .session-bar-track {
    flex: 0 0 90px;
    height: 6px;
    background: var(--bg-secondary);
    border-radius: 4px;
    overflow: hidden;
    opacity: 0.6;
  }
  .session-bar-fill {
    height: 100%;
    background: rgba(255, 77, 77, 0.7);
    border-radius: 4px;
    transition: width 0.3s ease;
  }
  .session-bar-value {
    flex: 0 0 70px;
    text-align: right;
    font-size: 12px;
    font-family: var(--font-mono);
    color: var(--text-muted);
  }
  .session-bar-actions {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    flex: 0 0 auto;
  }
  .session-copy-btn {
    height: 26px;
    padding: 0 10px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    font-size: 11px;
    font-weight: 600;
    color: var(--text-muted);
    cursor: pointer;
    transition: background 0.15s, border-color 0.15s, color 0.15s;
  }
  .session-copy-btn:hover {
    background: var(--bg);
    border-color: var(--border-strong);
    color: var(--text);
  }

  /* ===== TIME SERIES CHART ===== */
  .session-timeseries {
    margin-top: 24px;
    padding: 16px;
    background: var(--bg-secondary);
    border-radius: 8px;
  }
  .timeseries-header-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }
  .timeseries-controls {
    display: flex;
    gap: 6px;
    align-items: center;
  }
  .timeseries-header {
    font-weight: 600;
    color: var(--text);
  }
  .timeseries-chart {
    width: 100%;
    overflow: hidden;
  }
  .timeseries-svg {
    width: 100%;
    height: auto;
    display: block;
  }
  .timeseries-svg .axis-label {
    font-size: 10px;
    fill: var(--text-muted);
  }
  .timeseries-svg .ts-area {
    fill: #ff4d4d;
    fill-opacity: 0.1;
  }
  .timeseries-svg .ts-line {
    fill: none;
    stroke: #ff4d4d;
    stroke-width: 2;
  }
  .timeseries-svg .ts-dot {
    fill: #ff4d4d;
    transition: r 0.15s, fill 0.15s;
  }
  .timeseries-svg .ts-dot:hover {
    r: 5;
  }
  .timeseries-svg .ts-bar {
    fill: #ff4d4d;
    transition: fill 0.15s;
  }
  .timeseries-svg .ts-bar:hover {
    fill: #cc3d3d;
  }
  .timeseries-svg .ts-bar.output { fill: #ef4444; }
  .timeseries-svg .ts-bar.input { fill: #f59e0b; }
  .timeseries-svg .ts-bar.cache-write { fill: #10b981; }
  .timeseries-svg .ts-bar.cache-read { fill: #06b6d4; }
  .timeseries-summary {
    margin-top: 12px;
    font-size: 13px;
    color: var(--text-muted);
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .timeseries-loading {
    padding: 24px;
    text-align: center;
    color: var(--text-muted);
  }

  /* ===== SESSION LOGS ===== */
  .session-logs {
    margin-top: 24px;
    background: var(--bg-secondary);
    border-radius: 8px;
    overflow: hidden;
  }
  .session-logs-header {
    padding: 10px 14px;
    font-weight: 600;
    border-bottom: 1px solid var(--border);
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    background: var(--bg-secondary);
  }
  .session-logs-loading {
    padding: 24px;
    text-align: center;
    color: var(--text-muted);
  }
  .session-logs-list {
    max-height: 400px;
    overflow-y: auto;
  }
  .session-log-entry {
    padding: 10px 14px;
    border-bottom: 1px solid var(--border);
    display: flex;
    flex-direction: column;
    gap: 6px;
    background: var(--bg);
  }
  .session-log-entry:last-child {
    border-bottom: none;
  }
  .session-log-entry.user {
    border-left: 3px solid var(--accent);
  }
  .session-log-entry.assistant {
    border-left: 3px solid var(--border-strong);
  }
  .session-log-meta {
    display: flex;
    gap: 8px;
    align-items: center;
    font-size: 11px;
    color: var(--text-muted);
    flex-wrap: wrap;
  }
  .session-log-role {
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    font-size: 10px;
    padding: 2px 6px;
    border-radius: 999px;
    background: var(--bg-secondary);
    border: 1px solid var(--border);
  }
  .session-log-entry.user .session-log-role {
    color: var(--accent);
  }
  .session-log-entry.assistant .session-log-role {
    color: var(--text-muted);
  }
  .session-log-content {
    font-size: 13px;
    line-height: 1.5;
    color: var(--text);
    white-space: pre-wrap;
    word-break: break-word;
    background: var(--bg-secondary);
    border-radius: 8px;
    padding: 8px 10px;
    border: 1px solid var(--border);
    max-height: 220px;
    overflow-y: auto;
  }

  /* ===== CONTEXT WEIGHT BREAKDOWN ===== */
  .context-weight-breakdown {
    margin-top: 24px;
    padding: 16px;
    background: var(--bg-secondary);
    border-radius: 8px;
  }
  .context-weight-breakdown .context-weight-header {
    font-weight: 600;
    font-size: 13px;
    margin-bottom: 4px;
    color: var(--text);
  }
  .context-weight-desc {
    font-size: 12px;
    color: var(--text-muted);
    margin: 0 0 12px 0;
  }
  .context-stacked-bar {
    height: 24px;
    background: var(--bg);
    border-radius: 6px;
    overflow: hidden;
    display: flex;
  }
  .context-segment {
    height: 100%;
    transition: width 0.3s ease;
  }
  .context-segment.system {
    background: #ff4d4d;
  }
  .context-segment.skills {
    background: #8b5cf6;
  }
  .context-segment.tools {
    background: #ec4899;
  }
  .context-segment.files {
    background: #f59e0b;
  }
  .context-legend {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 12px;
  }
  .context-total {
    margin-top: 10px;
    font-size: 12px;
    font-weight: 600;
    color: var(--text-muted);
  }
  .context-details {
    margin-top: 12px;
    border: 1px solid var(--border);
    border-radius: 6px;
    overflow: hidden;
  }
  .context-details summary {
    padding: 10px 14px;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    background: var(--bg);
    border-bottom: 1px solid var(--border);
  }
  .context-details[open] summary {
    border-bottom: 1px solid var(--border);
  }
  .context-list {
    max-height: 200px;
    overflow-y: auto;
  }
  .context-list-header {
    display: flex;
    justify-content: space-between;
    padding: 8px 14px;
    font-size: 11px;
    text-transform: uppercase;
    color: var(--text-muted);
    background: var(--bg-secondary);
    border-bottom: 1px solid var(--border);
  }
  .context-list-item {
    display: flex;
    justify-content: space-between;
    padding: 8px 14px;
    font-size: 12px;
    border-bottom: 1px solid var(--border);
  }
  .context-list-item:last-child {
    border-bottom: none;
  }
  .context-list-item .mono {
    font-family: var(--font-mono);
    color: var(--text);
  }
  .context-list-item .muted {
    color: var(--text-muted);
    font-family: var(--font-mono);
  }

  /* ===== NO CONTEXT NOTE ===== */
  .no-context-note {
    margin-top: 24px;
    padding: 16px;
    background: var(--bg-secondary);
    border-radius: 8px;
    font-size: 13px;
    color: var(--text-muted);
    line-height: 1.5;
  }

  /* ===== TWO COLUMN LAYOUT ===== */
  .usage-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;
    margin-top: 18px;
    align-items: stretch;
  }
  .usage-grid-left {
    display: flex;
    flex-direction: column;
  }
  .usage-grid-right {
    display: flex;
    flex-direction: column;
  }
  
  /* ===== LEFT CARD (Daily + Breakdown) ===== */
  .usage-left-card {
    /* inherits background, border, shadow from .card */
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .usage-left-card .daily-chart-bars {
    flex: 1;
    min-height: 200px;
  }
  .usage-left-card .sessions-panel-title {
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 12px;
  }
  
  /* ===== COMPACT DAILY CHART ===== */
  .daily-chart-compact {
    margin-bottom: 16px;
  }
  .daily-chart-compact .sessions-panel-title {
    margin-bottom: 8px;
  }
  .daily-chart-compact .daily-chart-bars {
    height: 100px;
    padding-bottom: 20px;
  }
  
  /* ===== COMPACT COST BREAKDOWN ===== */
  .cost-breakdown-compact {
    padding: 0;
    margin: 0;
    background: transparent;
    border-top: 1px solid var(--border);
    padding-top: 12px;
  }
  .cost-breakdown-compact .cost-breakdown-header {
    margin-bottom: 8px;
  }
  .cost-breakdown-compact .cost-breakdown-legend {
    gap: 12px;
  }
  .cost-breakdown-compact .cost-breakdown-note {
    display: none;
  }
  
  /* ===== SESSIONS CARD ===== */
  .sessions-card {
    /* inherits background, border, shadow from .card */
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .sessions-card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }
  .sessions-card-title {
    font-weight: 600;
    font-size: 14px;
  }
  .sessions-card-count {
    font-size: 12px;
    color: var(--text-muted);
  }
  .sessions-card-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin: 8px 0 10px;
    font-size: 12px;
    color: var(--text-muted);
  }
  .sessions-card-stats {
    display: inline-flex;
    gap: 12px;
  }
  .sessions-sort {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    color: var(--text-muted);
  }
  .sessions-sort select {
    padding: 4px 8px;
    border-radius: 6px;
    border: 1px solid var(--border);
    background: var(--bg);
    color: var(--text);
    font-size: 12px;
  }
  .sessions-action-btn {
    height: 28px;
    padding: 0 10px;
    border-radius: 8px;
    font-size: 12px;
    line-height: 1;
  }
  .sessions-action-btn.icon {
    width: 32px;
    padding: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .sessions-card-hint {
    font-size: 11px;
    color: var(--text-muted);
    margin-bottom: 8px;
  }
  .sessions-card .session-bars {
    max-height: 280px;
    background: var(--bg);
    border-radius: 6px;
    border: 1px solid var(--border);
    margin: 0;
    overflow-y: auto;
    padding: 8px;
  }
  .sessions-card .session-bar-row {
    padding: 6px 8px;
    border-radius: 6px;
    margin-bottom: 3px;
    border: 1px solid transparent;
    transition: all 0.15s;
  }
  .sessions-card .session-bar-row:hover {
    border-color: var(--border);
    background: var(--bg-hover);
  }
  .sessions-card .session-bar-row.selected {
    border-color: var(--accent);
    background: var(--accent-subtle);
    box-shadow: inset 0 0 0 1px rgba(255, 77, 77, 0.15);
  }
  .sessions-card .session-bar-label {
    flex: 1 1 auto;
    min-width: 140px;
    font-size: 12px;
  }
  .sessions-card .session-bar-value {
    flex: 0 0 60px;
    font-size: 11px;
    font-weight: 600;
  }
  .sessions-card .session-bar-track {
    flex: 0 0 70px;
    height: 5px;
    opacity: 0.5;
  }
  .sessions-card .session-bar-fill {
    background: rgba(255, 77, 77, 0.55);
  }
  .sessions-clear-btn {
    margin-left: auto;
  }
  
  /* ===== EMPTY DETAIL STATE ===== */
  .session-detail-empty {
    margin-top: 18px;
    background: var(--bg-secondary);
    border-radius: 8px;
    border: 2px dashed var(--border);
    padding: 32px;
    text-align: center;
  }
  .session-detail-empty-title {
    font-size: 15px;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 8px;
  }
  .session-detail-empty-desc {
    font-size: 13px;
    color: var(--text-muted);
    margin-bottom: 16px;
    line-height: 1.5;
  }
  .session-detail-empty-features {
    display: flex;
    justify-content: center;
    gap: 24px;
    flex-wrap: wrap;
  }
  .session-detail-empty-feature {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    color: var(--text-muted);
  }
  .session-detail-empty-feature .icon {
    font-size: 16px;
  }
  
  /* ===== SESSION DETAIL PANEL ===== */
  .session-detail-panel {
    margin-top: 12px;
    /* inherits background, border-radius, shadow from .card */
    border: 2px solid var(--accent) !important;
  }
  .session-detail-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    border-bottom: 1px solid var(--border);
    cursor: pointer;
  }
  .session-detail-header:hover {
    background: var(--bg-hover);
  }
  .session-detail-title {
    font-weight: 600;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .session-detail-header-left {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .session-close-btn {
    background: var(--bg);
    border: 1px solid var(--border);
    color: var(--text);
    cursor: pointer;
    padding: 2px 8px;
    font-size: 16px;
    line-height: 1;
    border-radius: 4px;
    transition: background 0.15s, color 0.15s;
  }
  .session-close-btn:hover {
    background: var(--bg-hover);
    color: var(--text);
    border-color: var(--accent);
  }
  .session-detail-stats {
    display: flex;
    gap: 10px;
    font-size: 12px;
    color: var(--text-muted);
  }
  .session-detail-stats strong {
    color: var(--text);
    font-family: var(--font-mono);
  }
  .session-detail-content {
    padding: 12px;
  }
  .session-summary-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 8px;
    margin-bottom: 12px;
  }
  .session-summary-card {
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 8px;
    background: var(--bg-secondary);
  }
  .session-summary-title {
    font-size: 11px;
    color: var(--text-muted);
    margin-bottom: 4px;
  }
  .session-summary-value {
    font-size: 14px;
    font-weight: 600;
  }
  .session-summary-meta {
    font-size: 11px;
    color: var(--text-muted);
    margin-top: 4px;
  }
  .session-detail-row {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    /* Separate "Usage Over Time" from the summary + Top Tools/Model Mix cards above. */
    margin-top: 12px;
    margin-bottom: 10px;
  }
  .session-detail-bottom {
    display: grid;
    grid-template-columns: minmax(0, 1.8fr) minmax(0, 1fr);
    gap: 10px;
    align-items: stretch;
  }
  .session-detail-bottom .session-logs-compact {
    margin: 0;
    display: flex;
    flex-direction: column;
  }
  .session-detail-bottom .session-logs-compact .session-logs-list {
    flex: 1 1 auto;
    max-height: none;
  }
  .context-details-panel {
    display: flex;
    flex-direction: column;
    gap: 8px;
    background: var(--bg);
    border-radius: 6px;
    border: 1px solid var(--border);
    padding: 12px;
  }
  .context-breakdown-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 10px;
    margin-top: 8px;
  }
  .context-breakdown-card {
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 8px;
    background: var(--bg-secondary);
  }
  .context-breakdown-title {
    font-size: 11px;
    font-weight: 600;
    margin-bottom: 6px;
  }
  .context-breakdown-list {
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-size: 11px;
  }
  .context-breakdown-item {
    display: flex;
    justify-content: space-between;
    gap: 8px;
  }
  .context-breakdown-more {
    font-size: 10px;
    color: var(--text-muted);
    margin-top: 4px;
  }
  .context-breakdown-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }
  .context-expand-btn {
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    color: var(--text-muted);
    font-size: 11px;
    padding: 4px 8px;
    border-radius: 999px;
    cursor: pointer;
    transition: all 0.15s;
  }
  .context-expand-btn:hover {
    color: var(--text);
    border-color: var(--border-strong);
    background: var(--bg);
  }
  
  /* ===== COMPACT TIMESERIES ===== */
  .session-timeseries-compact {
    background: var(--bg);
    border-radius: 6px;
    border: 1px solid var(--border);
    padding: 12px;
    margin: 0;
  }
  .session-timeseries-compact .timeseries-header-row {
    margin-bottom: 8px;
  }
  .session-timeseries-compact .timeseries-header {
    font-size: 12px;
  }
  .session-timeseries-compact .timeseries-summary {
    font-size: 11px;
    margin-top: 8px;
  }
  
  /* ===== COMPACT CONTEXT ===== */
  .context-weight-compact {
    background: var(--bg);
    border-radius: 6px;
    border: 1px solid var(--border);
    padding: 12px;
    margin: 0;
  }
  .context-weight-compact .context-weight-header {
    font-size: 12px;
    margin-bottom: 4px;
  }
  .context-weight-compact .context-weight-desc {
    font-size: 11px;
    margin-bottom: 8px;
  }
  .context-weight-compact .context-stacked-bar {
    height: 16px;
  }
  .context-weight-compact .context-legend {
    font-size: 11px;
    gap: 10px;
    margin-top: 8px;
  }
  .context-weight-compact .context-total {
    font-size: 11px;
    margin-top: 6px;
  }
  .context-weight-compact .context-details {
    margin-top: 8px;
  }
  .context-weight-compact .context-details summary {
    font-size: 12px;
    padding: 6px 10px;
  }
  
  /* ===== COMPACT LOGS ===== */
  .session-logs-compact {
    background: var(--bg);
    border-radius: 10px;
    border: 1px solid var(--border);
    overflow: hidden;
    margin: 0;
    display: flex;
    flex-direction: column;
  }
  .session-logs-compact .session-logs-header {
    padding: 10px 12px;
    font-size: 12px;
  }
  .session-logs-compact .session-logs-list {
    max-height: none;
    flex: 1 1 auto;
    overflow: auto;
  }
  .session-logs-compact .session-log-entry {
    padding: 8px 12px;
  }
  .session-logs-compact .session-log-content {
    font-size: 12px;
    max-height: 160px;
  }
  .session-log-tools {
    margin-top: 6px;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: var(--bg-secondary);
    padding: 6px 8px;
    font-size: 11px;
    color: var(--text);
  }
  .session-log-tools summary {
    cursor: pointer;
    list-style: none;
    display: flex;
    align-items: center;
    gap: 6px;
    font-weight: 600;
  }
  .session-log-tools summary::-webkit-details-marker {
    display: none;
  }
  .session-log-tools-list {
    margin-top: 6px;
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .session-log-tools-pill {
    border: 1px solid var(--border);
    border-radius: 999px;
    padding: 2px 8px;
    font-size: 10px;
    background: var(--bg);
    color: var(--text);
  }

  /* ===== RESPONSIVE ===== */
  @media (max-width: 900px) {
    .usage-grid {
      grid-template-columns: 1fr;
    }
    .session-detail-row {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: 600px) {
    .session-bar-label {
      flex: 0 0 100px;
    }
    .cost-breakdown-legend {
      gap: 10px;
    }
    .legend-item {
      font-size: 11px;
    }
    .daily-chart-bars {
      height: 170px;
      gap: 6px;
      padding-bottom: 40px;
    }
    .daily-bar-label {
      font-size: 8px;
      bottom: -30px;
      transform: rotate(-45deg);
    }
    .usage-mosaic-grid {
      grid-template-columns: 1fr;
    }
    .usage-hour-grid {
      grid-template-columns: repeat(12, minmax(10px, 1fr));
    }
    .usage-hour-cell {
      height: 22px;
    }
  }
`,sb=4;function ft(e){return Math.round(e/sb)}function z(e){return e>=1e6?`${(e/1e6).toFixed(1)}M`:e>=1e3?`${(e/1e3).toFixed(1)}K`:String(e)}function ab(e){const t=new Date;return t.setHours(e,0,0,0),t.toLocaleTimeString(void 0,{hour:"numeric"})}function ob(e,t){const n=Array.from({length:24},()=>0),s=Array.from({length:24},()=>0);for(const a of e){const o=a.usage;if(!o?.messageCounts||o.messageCounts.total===0)continue;const l=o.firstActivity??a.updatedAt,d=o.lastActivity??a.updatedAt;if(!l||!d)continue;const u=Math.min(l,d),f=Math.max(l,d),m=Math.max(f-u,1)/6e4;let v=u;for(;v<f;){const k=new Date(v),c=Po(k,t),p=Lo(k,t),h=Math.min(p.getTime(),f),S=Math.max((h-v)/6e4,0)/m;n[c]+=o.messageCounts.errors*S,s[c]+=o.messageCounts.total*S,v=h+1}}return s.map((a,o)=>{const l=n[o],d=a>0?l/a:0;return{hour:o,rate:d,errors:l,msgs:a}}).filter(a=>a.msgs>0&&a.errors>0).toSorted((a,o)=>o.rate-a.rate).slice(0,5).map(a=>({label:ab(a.hour),value:`${(a.rate*100).toFixed(2)}%`,sub:`${Math.round(a.errors)} ${i("usageErrors").toLowerCase()} · ${Math.round(a.msgs)} ${i("usageMessagesCount")}`}))}const ib=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];function Po(e,t){return t==="utc"?e.getUTCHours():e.getHours()}function lb(e,t){return t==="utc"?e.getUTCDay():e.getDay()}function Lo(e,t){const n=new Date(e);return t==="utc"?n.setUTCMinutes(59,59,999):n.setMinutes(59,59,999),n}function rb(e,t){const n=Array.from({length:24},()=>0),s=Array.from({length:7},()=>0);let a=0,o=!1;for(const d of e){const u=d.usage;if(!u||!u.totalTokens||u.totalTokens<=0)continue;a+=u.totalTokens;const f=u.firstActivity??d.updatedAt,g=u.lastActivity??d.updatedAt;if(!f||!g)continue;o=!0;const m=Math.min(f,g),v=Math.max(f,g),c=Math.max(v-m,1)/6e4;let p=m;for(;p<v;){const h=new Date(p),b=Po(h,t),S=lb(h,t),C=Lo(h,t),A=Math.min(C.getTime(),v),T=Math.max((A-p)/6e4,0)/c;n[b]+=u.totalTokens*T,s[S]+=u.totalTokens*T,p=A+1}}const l=ib.map((d,u)=>({label:d,tokens:s[u]}));return{hasData:o,totalTokens:a,hourTotals:n,weekdayTotals:l}}function cb(e,t,n,s){const a=rb(e,t);if(!a.hasData)return r`
      <div class="card usage-mosaic">
        <div class="usage-mosaic-header">
          <div>
            <div class="usage-mosaic-title">${i("usageActivityByTime")}</div>
            <div class="usage-mosaic-sub">${i("usageMosaicSubNoData")}</div>
          </div>
          <div class="usage-mosaic-total">${z(0)} ${i("usageTokensUnit")}</div>
        </div>
        <div class="muted" style="padding: 12px; text-align: center;">${i("usageNoTimeline")}</div>
      </div>
    `;const o=Math.max(...a.hourTotals,1),l=Math.max(...a.weekdayTotals.map(d=>d.tokens),1);return r`
    <div class="card usage-mosaic">
      <div class="usage-mosaic-header">
        <div>
          <div class="usage-mosaic-title">${i("usageActivityByTime")}</div>
          <div class="usage-mosaic-sub">
            Estimated from session spans (first/last activity). Time zone: ${i(t==="utc"?"usageTimeZoneUtc":"usageTimeZoneLocal")}.
          </div>
        </div>
        <div class="usage-mosaic-total">${z(a.totalTokens)} ${i("usageTokensUnit")}</div>
      </div>
      <div class="usage-mosaic-grid">
        <div class="usage-mosaic-section">
          <div class="usage-mosaic-section-title">${i("usageDayOfWeek")}</div>
          <div class="usage-daypart-grid">
            ${a.weekdayTotals.map(d=>{const u=Math.min(d.tokens/l,1),f=d.tokens>0?`rgba(255, 77, 77, ${.12+u*.6})`:"transparent";return r`
                <div class="usage-daypart-cell" style="background: ${f};">
                  <div class="usage-daypart-label">${d.label}</div>
                  <div class="usage-daypart-value">${z(d.tokens)}</div>
                </div>
              `})}
          </div>
        </div>
        <div class="usage-mosaic-section">
          <div class="usage-mosaic-section-title">
            <span>${i("usageHours")}</span>
            <span class="usage-mosaic-sub">0 → 23</span>
          </div>
          <div class="usage-hour-grid">
            ${a.hourTotals.map((d,u)=>{const f=Math.min(d/o,1),g=d>0?`rgba(255, 77, 77, ${.08+f*.7})`:"transparent",m=`${u}:00 · ${z(d)} ${i("usageTokensUnit")}`,v=f>.7?"rgba(255, 77, 77, 0.6)":"rgba(255, 77, 77, 0.2)",k=n.includes(u);return r`
                <div
                  class="usage-hour-cell ${k?"selected":""}"
                  style="background: ${g}; border-color: ${v};"
                  title="${m}"
                  @click=${c=>s(u,c.shiftKey)}
                ></div>
              `})}
          </div>
          <div class="usage-hour-labels">
            <span>${i("usageMidnight")}</span>
            <span>${i("usage4am")}</span>
            <span>${i("usage8am")}</span>
            <span>${i("usageNoon")}</span>
            <span>${i("usage4pm")}</span>
            <span>${i("usage8pm")}</span>
          </div>
          <div class="usage-hour-legend">
            <span></span>
            Low → High token density
          </div>
        </div>
      </div>
    </div>
  `}function J(e,t=2){return`$${e.toFixed(t)}`}function ca(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function db(e){return!e||e<=0?"0s":e>=6e4?`${Math.round(e/6e4)}m`:e>=1e3?`${Math.round(e/1e3)}s`:`${Math.round(e)}ms`}function Rc(e){const t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e);if(!t)return null;const[,n,s,a]=t,o=new Date(Date.UTC(Number(n),Number(s)-1,Number(a)));return Number.isNaN(o.valueOf())?null:o}function Nc(e){const t=Rc(e);return t?t.toLocaleDateString(void 0,{month:"short",day:"numeric"}):e}function ub(e){const t=Rc(e);return t?t.toLocaleDateString(void 0,{month:"long",day:"numeric",year:"numeric"}):e}function Uc(e){if(!e||e<=0)return"—";const t=Math.round(e/1e3),n=t%60,s=Math.floor(t/60)%60,a=Math.floor(t/3600);return a>0?`${a}h ${s}m`:s>0?`${s}m ${n}s`:`${n}s`}function da(e,t,n="text/plain"){const s=new Blob([t],{type:n}),a=URL.createObjectURL(s),o=document.createElement("a");o.href=a,o.download=e,o.click(),URL.revokeObjectURL(a)}function pb(e){return e.includes('"')||e.includes(",")||e.includes(`
`)?`"${e.replace(/"/g,'""')}"`:e}function us(e){return e.map(t=>t==null?"":pb(String(t))).join(",")}const Ft=()=>({input:0,output:0,cacheRead:0,cacheWrite:0,totalTokens:0,totalCost:0,inputCost:0,outputCost:0,cacheReadCost:0,cacheWriteCost:0,missingCostEntries:0}),Bt=(e,t)=>{e.input+=t.input??0,e.output+=t.output??0,e.cacheRead+=t.cacheRead??0,e.cacheWrite+=t.cacheWrite??0,e.totalTokens+=t.totalTokens??0,e.totalCost+=t.totalCost??0,e.inputCost+=t.inputCost??0,e.outputCost+=t.outputCost??0,e.cacheReadCost+=t.cacheReadCost??0,e.cacheWriteCost+=t.cacheWriteCost??0,e.missingCostEntries+=t.missingCostEntries??0},gb=(e,t)=>{if(e.length===0)return t??{messages:{total:0,user:0,assistant:0,toolCalls:0,toolResults:0,errors:0},tools:{totalCalls:0,uniqueTools:0,tools:[]},byModel:[],byProvider:[],byAgent:[],byChannel:[],daily:[]};const n={total:0,user:0,assistant:0,toolCalls:0,toolResults:0,errors:0},s=new Map,a=new Map,o=new Map,l=new Map,d=new Map,u=new Map,f=new Map,g=new Map,m={count:0,sum:0,min:Number.POSITIVE_INFINITY,max:0,p95Max:0};for(const v of e){const k=v.usage;if(k){if(k.messageCounts&&(n.total+=k.messageCounts.total,n.user+=k.messageCounts.user,n.assistant+=k.messageCounts.assistant,n.toolCalls+=k.messageCounts.toolCalls,n.toolResults+=k.messageCounts.toolResults,n.errors+=k.messageCounts.errors),k.toolUsage)for(const c of k.toolUsage.tools)s.set(c.name,(s.get(c.name)??0)+c.count);if(k.modelUsage&&k.modelUsage.length>0){let c=!1;for(const p of k.modelUsage){const h=p.provider&&p.provider!=="unknown"?p.provider:v.modelProvider??v.providerOverride??"unknown",b=p.model&&p.model!=="unknown"?p.model:v.model??v.modelOverride??"unknown",S=p.totals.totalTokens===0&&k.totalTokens>0&&!c?{input:k.input,output:k.output,cacheRead:k.cacheRead,cacheWrite:k.cacheWrite,totalTokens:k.totalTokens,totalCost:k.totalCost,inputCost:k.inputCost??0,outputCost:k.outputCost??0,cacheReadCost:k.cacheReadCost??0,cacheWriteCost:k.cacheWriteCost??0,missingCostEntries:k.missingCostEntries??0}:p.totals;p.totals.totalTokens===0&&k.totalTokens>0&&(c=!0);const C=`${h}::${b}`,A=a.get(C)??{provider:h,model:b,count:0,totals:Ft()};A.count+=p.count,Bt(A.totals,S),a.set(C,A);const E=o.get(h)??{provider:h,model:void 0,count:0,totals:Ft()};E.count+=p.count,Bt(E.totals,S),o.set(h,E)}}else if(k.totalTokens>0){const c=v.modelProvider??v.providerOverride??"unknown",p=v.model??v.modelOverride??"unknown",h=`${c}::${p}`,b=a.get(h)??{provider:c,model:p,count:0,totals:Ft()};b.count+=1,Bt(b.totals,k),a.set(h,b);const S=o.get(c)??{provider:c,model:void 0,count:0,totals:Ft()};S.count+=1,Bt(S.totals,k),o.set(c,S)}if(k.latency){const{count:c,avgMs:p,minMs:h,maxMs:b,p95Ms:S}=k.latency;c>0&&(m.count+=c,m.sum+=p*c,m.min=Math.min(m.min,h),m.max=Math.max(m.max,b),m.p95Max=Math.max(m.p95Max,S))}if(v.agentId){const c=l.get(v.agentId)??Ft();Bt(c,k),l.set(v.agentId,c)}if(v.channel){const c=d.get(v.channel)??Ft();Bt(c,k),d.set(v.channel,c)}for(const c of k.dailyBreakdown??[]){const p=u.get(c.date)??{date:c.date,tokens:0,cost:0,messages:0,toolCalls:0,errors:0};p.tokens+=c.tokens,p.cost+=c.cost,u.set(c.date,p)}for(const c of k.dailyMessageCounts??[]){const p=u.get(c.date)??{date:c.date,tokens:0,cost:0,messages:0,toolCalls:0,errors:0};p.messages+=c.total,p.toolCalls+=c.toolCalls,p.errors+=c.errors,u.set(c.date,p)}for(const c of k.dailyLatency??[]){const p=f.get(c.date)??{date:c.date,count:0,sum:0,min:Number.POSITIVE_INFINITY,max:0,p95Max:0};p.count+=c.count,p.sum+=c.avgMs*c.count,p.min=Math.min(p.min,c.minMs),p.max=Math.max(p.max,c.maxMs),p.p95Max=Math.max(p.p95Max,c.p95Ms),f.set(c.date,p)}for(const c of k.dailyModelUsage??[]){const p=c.provider&&c.provider!=="unknown"?c.provider:v.modelProvider??v.providerOverride??"unknown",h=c.model&&c.model!=="unknown"?c.model:v.model??v.modelOverride??"unknown",b=`${c.date}::${p}::${h}`,S=g.get(b)??{date:c.date,provider:p,model:h,tokens:0,cost:0,count:0};S.tokens+=c.tokens,S.cost+=c.cost,S.count+=c.count,g.set(b,S)}}}return{messages:n,tools:{totalCalls:Array.from(s.values()).reduce((v,k)=>v+k,0),uniqueTools:s.size,tools:Array.from(s.entries()).map(([v,k])=>({name:v,count:k})).toSorted((v,k)=>k.count-v.count)},byModel:Array.from(a.values()).toSorted((v,k)=>k.totals.totalCost-v.totals.totalCost),byProvider:Array.from(o.values()).toSorted((v,k)=>k.totals.totalCost-v.totals.totalCost),byAgent:Array.from(l.entries()).map(([v,k])=>({agentId:v,totals:k})).toSorted((v,k)=>k.totals.totalCost-v.totals.totalCost),byChannel:Array.from(d.entries()).map(([v,k])=>({channel:v,totals:k})).toSorted((v,k)=>k.totals.totalCost-v.totals.totalCost),latency:m.count>0?{count:m.count,avgMs:m.sum/m.count,minMs:m.min===Number.POSITIVE_INFINITY?0:m.min,maxMs:m.max,p95Ms:m.p95Max}:void 0,dailyLatency:Array.from(f.values()).map(v=>({date:v.date,count:v.count,avgMs:v.count?v.sum/v.count:0,minMs:v.min===Number.POSITIVE_INFINITY?0:v.min,maxMs:v.max,p95Ms:v.p95Max})).toSorted((v,k)=>v.date.localeCompare(k.date)),modelDaily:Array.from(g.values()).toSorted((v,k)=>v.date.localeCompare(k.date)||k.cost-v.cost),daily:Array.from(u.values()).toSorted((v,k)=>v.date.localeCompare(k.date))}},mb=(e,t,n)=>{let s=0,a=0;for(const g of e){const m=g.usage?.durationMs??0;m>0&&(s+=m,a+=1)}const o=a?s/a:0,l=t&&s>0?t.totalTokens/(s/6e4):void 0,d=t&&s>0?t.totalCost/(s/6e4):void 0,u=n.messages.total?n.messages.errors/n.messages.total:0,f=n.daily.filter(g=>g.messages>0&&g.errors>0).map(g=>({date:g.date,errors:g.errors,messages:g.messages,rate:g.errors/g.messages})).toSorted((g,m)=>m.rate-g.rate||m.errors-g.errors)[0];return{durationSumMs:s,durationCount:a,avgDurationMs:o,throughputTokensPerMin:l,throughputCostPerMin:d,errorRate:u,peakErrorDay:f}},fb=e=>{const t=[us(["key","label","agentId","channel","provider","model","updatedAt","durationMs","messages","errors","toolCalls","inputTokens","outputTokens","cacheReadTokens","cacheWriteTokens","totalTokens","totalCost"])];for(const n of e){const s=n.usage;t.push(us([n.key,n.label??"",n.agentId??"",n.channel??"",n.modelProvider??n.providerOverride??"",n.model??n.modelOverride??"",n.updatedAt?new Date(n.updatedAt).toISOString():"",s?.durationMs??"",s?.messageCounts?.total??"",s?.messageCounts?.errors??"",s?.messageCounts?.toolCalls??"",s?.input??"",s?.output??"",s?.cacheRead??"",s?.cacheWrite??"",s?.totalTokens??"",s?.totalCost??""]))}return t.join(`
`)},hb=e=>{const t=[us(["date","inputTokens","outputTokens","cacheReadTokens","cacheWriteTokens","totalTokens","inputCost","outputCost","cacheReadCost","cacheWriteCost","totalCost"])];for(const n of e)t.push(us([n.date,n.input,n.output,n.cacheRead,n.cacheWrite,n.totalTokens,n.inputCost??"",n.outputCost??"",n.cacheReadCost??"",n.cacheWriteCost??"",n.totalCost]));return t.join(`
`)},vb=(e,t,n)=>{const s=e.trim();if(!s)return[];const a=s.length?s.split(/\s+/):[],o=a.length?a[a.length-1]:"",[l,d]=o.includes(":")?[o.slice(0,o.indexOf(":")),o.slice(o.indexOf(":")+1)]:["",""],u=l.toLowerCase(),f=d.toLowerCase(),g=S=>{const C=new Set;for(const A of S)A&&C.add(A);return Array.from(C)},m=g(t.map(S=>S.agentId)).slice(0,6),v=g(t.map(S=>S.channel)).slice(0,6),k=g([...t.map(S=>S.modelProvider),...t.map(S=>S.providerOverride),...n?.byProvider.map(S=>S.provider)??[]]).slice(0,6),c=g([...t.map(S=>S.model),...n?.byModel.map(S=>S.model)??[]]).slice(0,6),p=g(n?.tools.tools.map(S=>S.name)??[]).slice(0,6);if(!u)return[{label:"agent:",value:"agent:"},{label:"channel:",value:"channel:"},{label:"provider:",value:"provider:"},{label:"model:",value:"model:"},{label:"tool:",value:"tool:"},{label:"has:errors",value:"has:errors"},{label:"has:tools",value:"has:tools"},{label:"minTokens:",value:"minTokens:"},{label:"maxCost:",value:"maxCost:"}];const h=[],b=(S,C)=>{for(const A of C)(!f||A.toLowerCase().includes(f))&&h.push({label:`${S}:${A}`,value:`${S}:${A}`})};switch(u){case"agent":b("agent",m);break;case"channel":b("channel",v);break;case"provider":b("provider",k);break;case"model":b("model",c);break;case"tool":b("tool",p);break;case"has":["errors","tools","context","usage","model","provider"].forEach(S=>{(!f||S.includes(f))&&h.push({label:`has:${S}`,value:`has:${S}`})});break}return h},yb=(e,t)=>{const n=e.trim();if(!n)return`${t} `;const s=n.split(/\s+/);return s[s.length-1]=t,`${s.join(" ")} `},wt=e=>e.trim().toLowerCase(),bb=(e,t)=>{const n=e.trim();if(!n)return`${t} `;const s=n.split(/\s+/),a=s[s.length-1]??"",o=t.includes(":")?t.split(":")[0]:null,l=a.includes(":")?a.split(":")[0]:null;return a.endsWith(":")&&o&&l===o?(s[s.length-1]=t,`${s.join(" ")} `):s.includes(t)?`${s.join(" ")} `:`${s.join(" ")} ${t} `},Ol=(e,t)=>{const s=e.trim().split(/\s+/).filter(Boolean).filter(a=>a!==t);return s.length?`${s.join(" ")} `:""},Fl=(e,t,n)=>{const s=wt(t),o=[..._o(e).filter(l=>wt(l.key??"")!==s).map(l=>l.raw),...n.map(l=>`${t}:${l}`)];return o.length?`${o.join(" ")} `:""};function fe(e,t){return t===0?0:e/t*100}function xb(e){const t=e.totalCost||0;return{input:{tokens:e.input,cost:e.inputCost||0,pct:fe(e.inputCost||0,t)},output:{tokens:e.output,cost:e.outputCost||0,pct:fe(e.outputCost||0,t)},cacheRead:{tokens:e.cacheRead,cost:e.cacheReadCost||0,pct:fe(e.cacheReadCost||0,t)},cacheWrite:{tokens:e.cacheWrite,cost:e.cacheWriteCost||0,pct:fe(e.cacheWriteCost||0,t)},totalCost:t}}function wb(e,t,n,s,a,o,l,d){if(!(e.length>0||t.length>0||n.length>0))return y;const f=n.length===1?s.find(c=>c.key===n[0]):null,g=f?(f.label||f.key).slice(0,20)+((f.label||f.key).length>20?"…":""):n.length===1?n[0].slice(0,8)+"…":`${n.length} ${i("usageSessionsCount")}`,m=f?f.label||f.key:n.length===1?n[0]:n.join(", "),v=e.length===1?e[0]:`${e.length} days`,k=t.length===1?`${t[0]}:00`:`${t.length} hours`;return r`
    <div class="active-filters">
      ${e.length>0?r`
            <div class="filter-chip">
              <span class="filter-chip-label">${i("usageDays")}: ${v}</span>
              <button class="filter-chip-remove" @click=${a} title=${i("usageRemoveFilter")}>×</button>
            </div>
          `:y}
      ${t.length>0?r`
            <div class="filter-chip">
              <span class="filter-chip-label">${i("usageHoursLabel")}: ${k}</span>
              <button class="filter-chip-remove" @click=${o} title=${i("usageRemoveFilter")}>×</button>
            </div>
          `:y}
      ${n.length>0?r`
            <div class="filter-chip" title="${m}">
              <span class="filter-chip-label">${i("usageSession")}: ${g}</span>
              <button class="filter-chip-remove" @click=${l} title=${i("usageRemoveFilter")}>×</button>
            </div>
          `:y}
      ${(e.length>0||t.length>0)&&n.length>0?r`
            <button class="btn btn-sm filter-clear-btn" @click=${d}>
              ${i("usageClearFilters")}
            </button>
          `:y}
    </div>
  `}function $b(e,t,n,s,a,o){if(!e.length)return r`
      <div class="daily-chart-compact">
        <div class="sessions-panel-title">${i("usageDailyUsage")}</div>
        <div class="muted" style="padding: 20px; text-align: center">${i("usageNoData")}</div>
      </div>
    `;const l=n==="tokens",d=e.map(m=>l?m.totalTokens:m.totalCost),u=Math.max(...d,l?1:1e-4),f=e.length>30?12:e.length>20?18:e.length>14?24:32,g=e.length<=14;return r`
    <div class="daily-chart-compact">
      <div class="daily-chart-header">
        <div class="chart-toggle small sessions-toggle">
          <button
            class="toggle-btn ${s==="total"?"active":""}"
            @click=${()=>a("total")}
          >
            ${i("usageTotal")}
          </button>
          <button
            class="toggle-btn ${s==="by-type"?"active":""}"
            @click=${()=>a("by-type")}
          >
            ${i("usageByType")}
          </button>
        </div>
        <div class="card-title">${i(l?"usageDailyToken":"usageDailyCost")}</div>
      </div>
      <div class="daily-chart">
        <div class="daily-chart-bars" style="--bar-max-width: ${f}px">
          ${e.map((m,v)=>{const c=d[v]/u*100,p=t.includes(m.date),h=Nc(m.date),b=e.length>20?String(parseInt(m.date.slice(8),10)):h,S=e.length>20?"font-size: 8px":"",C=s==="by-type"?l?[{value:m.output,class:"output"},{value:m.input,class:"input"},{value:m.cacheWrite,class:"cache-write"},{value:m.cacheRead,class:"cache-read"}]:[{value:m.outputCost??0,class:"output"},{value:m.inputCost??0,class:"input"},{value:m.cacheWriteCost??0,class:"cache-write"},{value:m.cacheReadCost??0,class:"cache-read"}]:[],A=s==="by-type"?l?[`Output ${z(m.output)}`,`Input ${z(m.input)}`,`Cache write ${z(m.cacheWrite)}`,`Cache read ${z(m.cacheRead)}`]:[`Output ${J(m.outputCost??0)}`,`Input ${J(m.inputCost??0)}`,`Cache write ${J(m.cacheWriteCost??0)}`,`Cache read ${J(m.cacheReadCost??0)}`]:[],E=l?z(m.totalTokens):J(m.totalCost);return r`
              <div
                class="daily-bar-wrapper ${p?"selected":""}"
                @click=${T=>o(m.date,T.shiftKey)}
              >
                ${s==="by-type"?r`
                        <div
                          class="daily-bar"
                          style="height: ${c.toFixed(1)}%; display: flex; flex-direction: column;"
                        >
                          ${(()=>{const T=C.reduce((_,N)=>_+N.value,0)||1;return C.map(_=>r`
                                <div
                                  class="cost-segment ${_.class}"
                                  style="height: ${_.value/T*100}%"
                                ></div>
                              `)})()}
                        </div>
                      `:r`
                        <div class="daily-bar" style="height: ${c.toFixed(1)}%"></div>
                      `}
                ${g?r`<div class="daily-bar-total">${E}</div>`:y}
                <div class="daily-bar-label" style="${S}">${b}</div>
                <div class="daily-bar-tooltip">
                  <strong>${ub(m.date)}</strong><br />
                  ${z(m.totalTokens)} ${i("usageTokensUnit")}<br />
                  ${J(m.totalCost)}
                  ${A.length?r`${A.map(T=>r`<div>${T}</div>`)}`:y}
                </div>
              </div>
            `})}
        </div>
      </div>
    </div>
  `}function kb(e,t){const n=xb(e),s=t==="tokens",a=e.totalTokens||1,o={output:fe(e.output,a),input:fe(e.input,a),cacheWrite:fe(e.cacheWrite,a),cacheRead:fe(e.cacheRead,a)};return r`
    <div class="cost-breakdown cost-breakdown-compact">
      <div class="cost-breakdown-header">${i(s?"usageTokensByType":"usageCostByType")}</div>
      <div class="cost-breakdown-bar">
        <div class="cost-segment output" style="width: ${(s?o.output:n.output.pct).toFixed(1)}%"
          title="Output: ${s?z(e.output):J(n.output.cost)}"></div>
        <div class="cost-segment input" style="width: ${(s?o.input:n.input.pct).toFixed(1)}%"
          title="Input: ${s?z(e.input):J(n.input.cost)}"></div>
        <div class="cost-segment cache-write" style="width: ${(s?o.cacheWrite:n.cacheWrite.pct).toFixed(1)}%"
          title="Cache Write: ${s?z(e.cacheWrite):J(n.cacheWrite.cost)}"></div>
        <div class="cost-segment cache-read" style="width: ${(s?o.cacheRead:n.cacheRead.pct).toFixed(1)}%"
          title="Cache Read: ${s?z(e.cacheRead):J(n.cacheRead.cost)}"></div>
      </div>
      <div class="cost-breakdown-legend">
        <span class="legend-item"><span class="legend-dot output"></span>${i("usageOutput")} ${s?z(e.output):J(n.output.cost)}</span>
        <span class="legend-item"><span class="legend-dot input"></span>${i("usageInput")} ${s?z(e.input):J(n.input.cost)}</span>
        <span class="legend-item"><span class="legend-dot cache-write"></span>${i("usageCacheWrite")} ${s?z(e.cacheWrite):J(n.cacheWrite.cost)}</span>
        <span class="legend-item"><span class="legend-dot cache-read"></span>${i("usageCacheRead")} ${s?z(e.cacheRead):J(n.cacheRead.cost)}</span>
      </div>
      <div class="cost-breakdown-total">
        ${i("usageTotalLabel")}: ${s?z(e.totalTokens):J(e.totalCost)}
      </div>
    </div>
  `}function $t(e,t,n){return r`
    <div class="usage-insight-card">
      <div class="usage-insight-title">${e}</div>
      ${t.length===0?r`<div class="muted">${n}</div>`:r`
              <div class="usage-list">
                ${t.map(s=>r`
                    <div class="usage-list-item">
                      <span>${s.label}</span>
                      <span class="usage-list-value">
                        <span>${s.value}</span>
                        ${s.sub?r`<span class="usage-list-sub">${s.sub}</span>`:y}
                      </span>
                    </div>
                  `)}
              </div>
            `}
    </div>
  `}function Bl(e,t,n){return r`
    <div class="usage-insight-card">
      <div class="usage-insight-title">${e}</div>
      ${t.length===0?r`<div class="muted">${n}</div>`:r`
              <div class="usage-error-list">
                ${t.map(s=>r`
                    <div class="usage-error-row">
                      <div class="usage-error-date">${s.label}</div>
                      <div class="usage-error-rate">${s.value}</div>
                      ${s.sub?r`<div class="usage-error-sub">${s.sub}</div>`:y}
                    </div>
                  `)}
              </div>
            `}
    </div>
  `}function Sb(e,t,n,s,a,o,l){if(!e)return y;const d=t.messages.total?Math.round(e.totalTokens/t.messages.total):0,u=t.messages.total?e.totalCost/t.messages.total:0,f=e.input+e.cacheRead,g=f>0?e.cacheRead/f:0,m=f>0?`${(g*100).toFixed(1)}%`:"—",v=n.errorRate*100,k=n.throughputTokensPerMin!==void 0?`${z(Math.round(n.throughputTokensPerMin))} tok/min`:"—",c=n.throughputCostPerMin!==void 0?`${J(n.throughputCostPerMin,4)} / min`:"—",p=n.durationCount>0?db(n.avgDurationMs):"—",h=i("usageCacheHitRateHint"),b=i("usageErrorRateHint"),S=i("usageThroughputHint"),C=i("usageTokensHint"),A=i(s?"usageCostHintMissing":"usageCostHint"),E=t.daily.filter(R=>R.messages>0&&R.errors>0).map(R=>{const L=R.errors/R.messages;return{label:Nc(R.date),value:`${(L*100).toFixed(2)}%`,sub:`${R.errors} ${i("usageErrors").toLowerCase()} · ${R.messages} ${i("usageMessagesCount")} · ${z(R.tokens)}`,rate:L}}).toSorted((R,L)=>L.rate-R.rate).slice(0,5).map(({rate:R,...L})=>L),T=t.byModel.filter(R=>(R.count??0)>0||(R.totals?.totalTokens??0)>0).slice(0,5).map(R=>({label:R.model??"unknown",value:J(R.totals.totalCost),sub:`${z(R.totals.totalTokens)} · ${R.count} ${i("usageMessagesCount")}`})),_=t.byProvider.filter(R=>(R.count??0)>0||(R.totals?.totalTokens??0)>0).slice(0,5).map(R=>({label:R.provider??"unknown",value:J(R.totals.totalCost),sub:`${z(R.totals.totalTokens)} · ${R.count} ${i("usageMessagesCount")}`})),N=t.tools.tools.slice(0,6).map(R=>({label:R.name,value:`${R.count}`,sub:i("usageCalls")})),O=t.byAgent.slice(0,5).map(R=>({label:R.agentId,value:J(R.totals.totalCost),sub:z(R.totals.totalTokens)})),Q=t.byChannel.slice(0,5).map(R=>({label:R.channel,value:J(R.totals.totalCost),sub:z(R.totals.totalTokens)}));return r`
    <section class="card" style="margin-top: 16px;">
      <div class="card-title">${i("usageOverview")}</div>
      <div class="usage-summary-grid">
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            ${i("usageMessages")}
            <span class="usage-summary-hint" title=${i("usageMessagesHint")}>?</span>
          </div>
          <div class="usage-summary-value">${t.messages.total}</div>
          <div class="usage-summary-sub">
            ${t.messages.user} ${i("usageUser").toLowerCase()} · ${t.messages.assistant} ${i("usageAssistant").toLowerCase()}
          </div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            ${i("usageToolCalls")}
            <span class="usage-summary-hint" title=${i("usageToolCallsHint")}>?</span>
          </div>
          <div class="usage-summary-value">${t.tools.totalCalls}</div>
          <div class="usage-summary-sub">${t.tools.uniqueTools} ${i("usageToolsUsed")}</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            ${i("usageErrors")}
            <span class="usage-summary-hint" title=${i("usageErrorsHint")}>?</span>
          </div>
          <div class="usage-summary-value">${t.messages.errors}</div>
          <div class="usage-summary-sub">${t.messages.toolResults} ${i("usageToolResults")}</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            ${i("usageAvgTokensMsg")}
            <span class="usage-summary-hint" title=${C}>?</span>
          </div>
          <div class="usage-summary-value">${z(d)}</div>
          <div class="usage-summary-sub">${i("usageAcrossMessages")} ${t.messages.total||0} ${i("usageMessagesCount")}</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            ${i("usageAvgCostMsg")}
            <span class="usage-summary-hint" title=${A}>?</span>
          </div>
          <div class="usage-summary-value">${J(u,4)}</div>
          <div class="usage-summary-sub">${J(e.totalCost)} ${i("usageTotalLabel").toLowerCase()}</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            ${i("usageSessionsCard")}
            <span class="usage-summary-hint" title=${i("usageSessionsHint")}>?</span>
          </div>
          <div class="usage-summary-value">${o}</div>
          <div class="usage-summary-sub">${i("usageInRange")} ${l}</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            ${i("usageThroughput")}
            <span class="usage-summary-hint" title=${S}>?</span>
          </div>
          <div class="usage-summary-value">${k}</div>
          <div class="usage-summary-sub">${c}</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            ${i("usageErrorRate")}
            <span class="usage-summary-hint" title=${b}>?</span>
          </div>
          <div class="usage-summary-value ${v>5?"bad":v>1?"warn":"good"}">${v.toFixed(2)}%</div>
          <div class="usage-summary-sub">
            ${t.messages.errors} ${i("usageErrors").toLowerCase()} · ${p} ${i("usageAvg")} ${i("usageSession").toLowerCase()}
          </div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            ${i("usageCacheHitRate")}
            <span class="usage-summary-hint" title=${h}>?</span>
          </div>
          <div class="usage-summary-value ${g>.6?"good":g>.3?"warn":"bad"}">${m}</div>
          <div class="usage-summary-sub">
            ${z(e.cacheRead)} ${i("usageCached")} · ${z(f)} ${i("usagePrompt")}
          </div>
        </div>
      </div>
      <div class="usage-insights-grid">
        ${$t(i("usageTopModels"),T,i("usageNoModelData"))}
        ${$t(i("usageTopProviders"),_,i("usageNoProviderData"))}
        ${$t(i("usageTopTools"),N,i("usageNoToolCalls"))}
        ${$t(i("usageTopAgents"),O,i("usageNoAgentData"))}
        ${$t(i("usageTopChannels"),Q,i("usageNoChannelData"))}
        ${Bl(i("usagePeakErrorDays"),E,i("usageNoErrorData"))}
        ${Bl(i("usagePeakErrorHours"),a,i("usageNoErrorData"))}
      </div>
    </section>
  `}function Ab(e,t,n,s,a,o,l,d,u,f,g,m,v,k,c){const p=I=>v.includes(I),h=I=>{const q=I.label||I.key;return q.startsWith("agent:")&&q.includes("?token=")?q.slice(0,q.indexOf("?token=")):q},b=async I=>{const q=h(I);try{await navigator.clipboard.writeText(q)}catch{}},S=I=>{const q=[];return p("channel")&&I.channel&&q.push(`channel:${I.channel}`),p("agent")&&I.agentId&&q.push(`agent:${I.agentId}`),p("provider")&&(I.modelProvider||I.providerOverride)&&q.push(`provider:${I.modelProvider??I.providerOverride}`),p("model")&&I.model&&q.push(`model:${I.model}`),p("messages")&&I.usage?.messageCounts&&q.push(`msgs:${I.usage.messageCounts.total}`),p("tools")&&I.usage?.toolUsage&&q.push(`tools:${I.usage.toolUsage.totalCalls}`),p("errors")&&I.usage?.messageCounts&&q.push(`errors:${I.usage.messageCounts.errors}`),p("duration")&&I.usage?.durationMs&&q.push(`dur:${Uc(I.usage.durationMs)}`),q},C=I=>{const q=I.usage;if(!q)return 0;if(n.length>0&&q.dailyBreakdown&&q.dailyBreakdown.length>0){const ce=q.dailyBreakdown.filter(de=>n.includes(de.date));return s?ce.reduce((de,ae)=>de+ae.tokens,0):ce.reduce((de,ae)=>de+ae.cost,0)}return s?q.totalTokens??0:q.totalCost??0},A=[...e].toSorted((I,q)=>{switch(a){case"recent":return(q.updatedAt??0)-(I.updatedAt??0);case"messages":return(q.usage?.messageCounts?.total??0)-(I.usage?.messageCounts?.total??0);case"errors":return(q.usage?.messageCounts?.errors??0)-(I.usage?.messageCounts?.errors??0);case"cost":return C(q)-C(I);default:return C(q)-C(I)}}),E=o==="asc"?A.toReversed():A,T=E.reduce((I,q)=>I+C(q),0),_=E.length?T/E.length:0,N=E.reduce((I,q)=>I+(q.usage?.messageCounts?.errors??0),0),O=new Set(t),Q=E.filter(I=>O.has(I.key)),R=Q.length,L=new Map(E.map(I=>[I.key,I])),he=l.map(I=>L.get(I)).filter(I=>!!I);return r`
    <div class="card sessions-card">
      <div class="sessions-card-header">
        <div class="card-title">${i("usageSessionsCard")}</div>
        <div class="sessions-card-count">
          ${e.length} ${i("usageShown")}${k!==e.length?` · ${k} ${i("usageTotalSessions")}`:""}
        </div>
      </div>
      <div class="sessions-card-meta">
        <div class="sessions-card-stats">
          <span>${s?z(_):J(_)} ${i("usageAvg")}</span>
          <span>${N} ${i("usageErrors").toLowerCase()}</span>
        </div>
        <div class="chart-toggle small">
          <button
            class="toggle-btn ${d==="all"?"active":""}"
            @click=${()=>m("all")}
          >
            ${i("usageAll")}
          </button>
          <button
            class="toggle-btn ${d==="recent"?"active":""}"
            @click=${()=>m("recent")}
          >
            ${i("usageRecentlyViewed")}
          </button>
        </div>
        <label class="sessions-sort">
          <span>${i("usageSort")}</span>
          <select
            @change=${I=>f(I.target.value)}
          >
            <option value="cost" ?selected=${a==="cost"}>${i("usageCost")}</option>
            <option value="errors" ?selected=${a==="errors"}>${i("usageErrorsCol")}</option>
            <option value="messages" ?selected=${a==="messages"}>${i("usageMessagesCol")}</option>
            <option value="recent" ?selected=${a==="recent"}>${i("usageRecent")}</option>
            <option value="tokens" ?selected=${a==="tokens"}>${i("usageTokensCol")}</option>
          </select>
        </label>
        <button
          class="btn btn-sm sessions-action-btn icon"
          @click=${()=>g(o==="desc"?"asc":"desc")}
          title=${i(o==="desc"?"usageDescending":"usageAscending")}
        >
          ${o==="desc"?"↓":"↑"}
        </button>
        ${R>0?r`
                <button class="btn btn-sm sessions-action-btn sessions-clear-btn" @click=${c}>
                  ${i("usageClearSelection")}
                </button>
              `:y}
      </div>
      ${d==="recent"?he.length===0?r`
                <div class="muted" style="padding: 20px; text-align: center">${i("usageNoRecentSessions")}</div>
              `:r`
                <div class="session-bars" style="max-height: 220px; margin-top: 6px;">
                  ${he.map(I=>{const q=C(I),ce=O.has(I.key),de=h(I),ae=S(I);return r`
                      <div
                        class="session-bar-row ${ce?"selected":""}"
                        @click=${le=>u(I.key,le.shiftKey)}
                        title="${I.key}"
                      >
                        <div class="session-bar-label">
                          <div class="session-bar-title">${de}</div>
                          ${ae.length>0?r`<div class="session-bar-meta">${ae.join(" · ")}</div>`:y}
                        </div>
                        <div class="session-bar-track" style="display: none;"></div>
                        <div class="session-bar-actions">
                          <button
                            class="session-copy-btn"
                            title=${i("usageCopySessionName")}
                            @click=${le=>{le.stopPropagation(),b(I)}}
                          >
                            ${i("usageCopy")}
                          </button>
                          <div class="session-bar-value">${s?z(q):J(q)}</div>
                        </div>
                      </div>
                    `})}
                </div>
              `:e.length===0?r`
                <div class="muted" style="padding: 20px; text-align: center">${i("usageNoSessionsInRange")}</div>
              `:r`
                <div class="session-bars">
                  ${E.slice(0,50).map(I=>{const q=C(I),ce=t.includes(I.key),de=h(I),ae=S(I);return r`
                      <div
                        class="session-bar-row ${ce?"selected":""}"
                        @click=${le=>u(I.key,le.shiftKey)}
                        title="${I.key}"
                      >
                        <div class="session-bar-label">
                          <div class="session-bar-title">${de}</div>
                          ${ae.length>0?r`<div class="session-bar-meta">${ae.join(" · ")}</div>`:y}
                        </div>
                        <div class="session-bar-track" style="display: none;"></div>
                        <div class="session-bar-actions">
                          <button
                            class="session-copy-btn"
                            title=${i("usageCopySessionName")}
                            @click=${le=>{le.stopPropagation(),b(I)}}
                          >
                            ${i("usageCopy")}
                          </button>
                          <div class="session-bar-value">${s?z(q):J(q)}</div>
                        </div>
                      </div>
                    `})}
                  ${e.length>50?r`<div class="muted" style="padding: 8px; text-align: center; font-size: 11px;">+${e.length-50} ${i("usageMoreSessions")}</div>`:y}
                </div>
              `}
      ${R>1?r`
              <div style="margin-top: 10px;">
                <div class="sessions-card-count">${i("usageSelectedCount")} (${R})</div>
                <div class="session-bars" style="max-height: 160px; margin-top: 6px;">
                  ${Q.map(I=>{const q=C(I),ce=h(I),de=S(I);return r`
                      <div
                        class="session-bar-row selected"
                        @click=${ae=>u(I.key,ae.shiftKey)}
                        title="${I.key}"
                      >
                        <div class="session-bar-label">
                          <div class="session-bar-title">${ce}</div>
                          ${de.length>0?r`<div class="session-bar-meta">${de.join(" · ")}</div>`:y}
                        </div>
                  <div class="session-bar-track" style="display: none;"></div>
                        <div class="session-bar-actions">
                          <button
                            class="session-copy-btn"
                            title=${i("usageCopySessionName")}
                            @click=${ae=>{ae.stopPropagation(),b(I)}}
                          >
                            ${i("usageCopy")}
                          </button>
                          <div class="session-bar-value">${s?z(q):J(q)}</div>
                        </div>
                      </div>
                    `})}
                </div>
              </div>
            `:y}
    </div>
  `}function Cb(){return y}function Mb(e){const t=e.usage;if(!t)return r`
      <div class="muted">No usage data for this session.</div>
    `;const n=l=>l?new Date(l).toLocaleString():"—",s=[];e.channel&&s.push(`channel:${e.channel}`),e.agentId&&s.push(`agent:${e.agentId}`),(e.modelProvider||e.providerOverride)&&s.push(`provider:${e.modelProvider??e.providerOverride}`),e.model&&s.push(`model:${e.model}`);const a=t.toolUsage?.tools.slice(0,6).map(l=>({label:l.name,value:`${l.count}`,sub:i("usageCalls")}))??[],o=t.modelUsage?.slice(0,6).map(l=>({label:l.model??"unknown",value:J(l.totals.totalCost),sub:z(l.totals.totalTokens)}))??[];return r`
    ${s.length>0?r`<div class="usage-badges">${s.map(l=>r`<span class="usage-badge">${l}</span>`)}</div>`:y}
    <div class="session-summary-grid">
      <div class="session-summary-card">
        <div class="session-summary-title">${i("usageMessages")}</div>
        <div class="session-summary-value">${t.messageCounts?.total??0}</div>
        <div class="session-summary-meta">${t.messageCounts?.user??0} ${i("usageUser").toLowerCase()} · ${t.messageCounts?.assistant??0} ${i("usageAssistant").toLowerCase()}</div>
      </div>
      <div class="session-summary-card">
        <div class="session-summary-title">${i("usageToolCalls")}</div>
        <div class="session-summary-value">${t.toolUsage?.totalCalls??0}</div>
        <div class="session-summary-meta">${t.toolUsage?.uniqueTools??0} ${i("usageToolsLabel").toLowerCase()}</div>
      </div>
      <div class="session-summary-card">
        <div class="session-summary-title">${i("usageErrors")}</div>
        <div class="session-summary-value">${t.messageCounts?.errors??0}</div>
        <div class="session-summary-meta">${t.messageCounts?.toolResults??0} ${i("usageToolResults")}</div>
      </div>
      <div class="session-summary-card">
        <div class="session-summary-title">${i("usageDuration")}</div>
        <div class="session-summary-value">${Uc(t.durationMs)}</div>
        <div class="session-summary-meta">${n(t.firstActivity)} → ${n(t.lastActivity)}</div>
      </div>
    </div>
    <div class="usage-insights-grid" style="margin-top: 12px;">
      ${$t(i("usageTopTools"),a,i("usageNoToolCalls"))}
      ${$t(i("usageModelMix"),o,i("usageNoModelData"))}
    </div>
  `}function Eb(e,t,n,s,a,o,l,d,u,f,g,m,v,k,c,p,h,b,S,C,A,E,T){const _=e.label||e.key,N=_.length>50?_.slice(0,50)+"…":_,O=e.usage;return r`
    <div class="card session-detail-panel">
      <div class="session-detail-header">
        <div class="session-detail-header-left">
          <div class="session-detail-title">${N}</div>
        </div>
        <div class="session-detail-stats">
          ${O?r`
            <span><strong>${z(O.totalTokens)}</strong> ${i("usageTokensUnit")}</span>
            <span><strong>${J(O.totalCost)}</strong></span>
          `:y}
        </div>
        <button class="session-close-btn" @click=${T} title=${i("usageCloseSessionDetails")}>×</button>
      </div>
      <div class="session-detail-content">
        ${Mb(e)}
        <div class="session-detail-row">
          ${Tb(t,n,s,a,o,l,d,u,f)}
        </div>
        <div class="session-detail-bottom">
          ${Pb(g,m,v,k,c,p,h,b,S,C)}
          ${_b(e.contextWeight,O,A,E)}
        </div>
      </div>
    </div>
  `}function Tb(e,t,n,s,a,o,l,d,u){if(t)return r`
      <div class="session-timeseries-compact">
        <div class="muted" style="padding: 20px; text-align: center">${i("usageLoading")}</div>
      </div>
    `;if(!e||e.points.length<2)return r`
      <div class="session-timeseries-compact">
        <div class="muted" style="padding: 20px; text-align: center">${i("usageNoTimelineData")}</div>
      </div>
    `;let f=e.points;if(l||d||u&&u.length>0){const L=l?new Date(l+"T00:00:00").getTime():0,he=d?new Date(d+"T23:59:59").getTime():1/0;f=e.points.filter(I=>{if(I.timestamp<L||I.timestamp>he)return!1;if(u&&u.length>0){const q=new Date(I.timestamp),ce=`${q.getFullYear()}-${String(q.getMonth()+1).padStart(2,"0")}-${String(q.getDate()).padStart(2,"0")}`;return u.includes(ce)}return!0})}if(f.length<2)return r`
      <div class="session-timeseries-compact">
        <div class="muted" style="padding: 20px; text-align: center">${i("usageNoDataInRange")}</div>
      </div>
    `;let g=0,m=0,v=0,k=0,c=0,p=0;f=f.map(L=>(g+=L.totalTokens,m+=L.cost,v+=L.output,k+=L.input,c+=L.cacheRead,p+=L.cacheWrite,{...L,cumulativeTokens:g,cumulativeCost:m}));const h=400,b=80,S={top:16,right:10,bottom:20,left:40},C=h-S.left-S.right,A=b-S.top-S.bottom,E=n==="cumulative",T=n==="per-turn"&&a==="by-type",_=v+k+c+p,N=f.map(L=>E?L.cumulativeTokens:T?L.input+L.output+L.cacheRead+L.cacheWrite:L.totalTokens),O=Math.max(...N,1),Q=Math.max(2,Math.min(8,C/f.length*.7)),R=Math.max(1,(C-Q*f.length)/(f.length-1||1));return r`
    <div class="session-timeseries-compact">
      <div class="timeseries-header-row">
        <div class="card-title" style="font-size: 13px;">${i("usageUsageOverTime")}</div>
        <div class="timeseries-controls">
          <div class="chart-toggle small">
            <button
              class="toggle-btn ${E?"":"active"}"
              @click=${()=>s("per-turn")}
            >
              ${i("usagePerTurn")}
            </button>
            <button
              class="toggle-btn ${E?"active":""}"
              @click=${()=>s("cumulative")}
            >
              ${i("usageCumulative")}
            </button>
          </div>
          ${E?y:r`
                  <div class="chart-toggle small">
                    <button
                      class="toggle-btn ${a==="total"?"active":""}"
                      @click=${()=>o("total")}
                    >
                      ${i("usageTotal")}
                    </button>
                    <button
                      class="toggle-btn ${a==="by-type"?"active":""}"
                      @click=${()=>o("by-type")}
                    >
                      ${i("usageByType")}
                    </button>
                  </div>
                `}
        </div>
      </div>
      <svg viewBox="0 0 ${h} ${b+15}" class="timeseries-svg" style="width: 100%; height: auto;">
        <!-- Y axis -->
        <line x1="${S.left}" y1="${S.top}" x2="${S.left}" y2="${S.top+A}" stroke="var(--border)" />
        <!-- X axis -->
        <line x1="${S.left}" y1="${S.top+A}" x2="${h-S.right}" y2="${S.top+A}" stroke="var(--border)" />
        <!-- Y axis labels -->
        <text x="${S.left-4}" y="${S.top+4}" text-anchor="end" class="axis-label" style="font-size: 9px; fill: var(--text-muted)">${z(O)}</text>
        <text x="${S.left-4}" y="${S.top+A}" text-anchor="end" class="axis-label" style="font-size: 9px; fill: var(--text-muted)">0</text>
        <!-- X axis labels (first and last) -->
        ${f.length>0?Hn`
          <text x="${S.left}" y="${S.top+A+12}" text-anchor="start" style="font-size: 8px; fill: var(--text-muted)">${new Date(f[0].timestamp).toLocaleDateString(void 0,{month:"short",day:"numeric"})}</text>
          <text x="${h-S.right}" y="${S.top+A+12}" text-anchor="end" style="font-size: 8px; fill: var(--text-muted)">${new Date(f[f.length-1].timestamp).toLocaleDateString(void 0,{month:"short",day:"numeric"})}</text>
        `:y}
        <!-- Bars -->
        ${f.map((L,he)=>{const I=N[he],q=S.left+he*(Q+R),ce=I/O*A,de=S.top+A-ce,le=[new Date(L.timestamp).toLocaleDateString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),`${z(I)} ${i("usageTokensUnit")}`];T&&(le.push(`Output ${z(L.output)}`),le.push(`Input ${z(L.input)}`),le.push(`Cache write ${z(L.cacheWrite)}`),le.push(`Cache read ${z(L.cacheRead)}`));const D=le.join(" · ");if(!T)return Hn`<rect x="${q}" y="${de}" width="${Q}" height="${ce}" class="ts-bar" rx="1" style="cursor: pointer;"><title>${D}</title></rect>`;const U=[{value:L.output,class:"output"},{value:L.input,class:"input"},{value:L.cacheWrite,class:"cache-write"},{value:L.cacheRead,class:"cache-read"}];let F=S.top+A;return Hn`
            ${U.map(W=>{if(W.value<=0||I<=0)return y;const ke=ce*(W.value/I);return F-=ke,Hn`<rect x="${q}" y="${F}" width="${Q}" height="${ke}" class="ts-bar ${W.class}" rx="1"><title>${D}</title></rect>`})}
          `})}
      </svg>
      <div class="timeseries-summary">${f.length} ${i("usageMessagesCount")} · ${z(g)} ${i("usageTokensUnit")} · ${J(m)}</div>
      ${T?r`
              <div style="margin-top: 8px;">
                <div class="card-title" style="font-size: 12px; margin-bottom: 6px;">${i("usageTokensByType")}</div>
                <div class="cost-breakdown-bar" style="height: 18px;">
                  <div class="cost-segment output" style="width: ${fe(v,_).toFixed(1)}%"></div>
                  <div class="cost-segment input" style="width: ${fe(k,_).toFixed(1)}%"></div>
                  <div class="cost-segment cache-write" style="width: ${fe(p,_).toFixed(1)}%"></div>
                  <div class="cost-segment cache-read" style="width: ${fe(c,_).toFixed(1)}%"></div>
                </div>
                <div class="cost-breakdown-legend">
                  <div class="legend-item" title="Assistant output tokens">
                    <span class="legend-dot output"></span>Output ${z(v)}
                  </div>
                  <div class="legend-item" title="User + tool input tokens">
                    <span class="legend-dot input"></span>Input ${z(k)}
                  </div>
                  <div class="legend-item" title="Tokens written to cache">
                    <span class="legend-dot cache-write"></span>Cache Write ${z(p)}
                  </div>
                  <div class="legend-item" title="Tokens read from cache">
                    <span class="legend-dot cache-read"></span>Cache Read ${z(c)}
                  </div>
                </div>
                <div class="cost-breakdown-total">${i("usageTotalLabel")}: ${z(_)}</div>
              </div>
            `:y}
    </div>
  `}function _b(e,t,n,s){if(!e)return r`
      <div class="context-details-panel">
        <div class="muted" style="padding: 20px; text-align: center">${i("usageNoContextData")}</div>
      </div>
    `;const a=ft(e.systemPrompt.chars),o=ft(e.skills.promptChars),l=ft(e.tools.listChars+e.tools.schemaChars),d=ft(e.injectedWorkspaceFiles.reduce((C,A)=>C+A.injectedChars,0)),u=a+o+l+d;let f="";if(t&&t.totalTokens>0){const C=t.input+t.cacheRead;C>0&&(f=`~${Math.min(u/C*100,100).toFixed(0)}% of input`)}const g=e.skills.entries.toSorted((C,A)=>A.blockChars-C.blockChars),m=e.tools.entries.toSorted((C,A)=>A.summaryChars+A.schemaChars-(C.summaryChars+C.schemaChars)),v=e.injectedWorkspaceFiles.toSorted((C,A)=>A.injectedChars-C.injectedChars),k=4,c=n,p=c?g:g.slice(0,k),h=c?m:m.slice(0,k),b=c?v:v.slice(0,k),S=g.length>k||m.length>k||v.length>k;return r`
    <div class="context-details-panel">
      <div class="context-breakdown-header">
        <div class="card-title" style="font-size: 13px;">${i("usageSystemPromptBreakdown")}</div>
        ${S?r`<button class="context-expand-btn" @click=${s}>
                ${i(c?"usageCollapseAll":"usageExpandAll")}
              </button>`:y}
      </div>
      <p class="context-weight-desc">${f||i("usageBaseContextPerMessage")}</p>
      <div class="context-stacked-bar">
        <div class="context-segment system" style="width: ${fe(a,u).toFixed(1)}%" title="System: ~${z(a)}"></div>
        <div class="context-segment skills" style="width: ${fe(o,u).toFixed(1)}%" title="Skills: ~${z(o)}"></div>
        <div class="context-segment tools" style="width: ${fe(l,u).toFixed(1)}%" title="Tools: ~${z(l)}"></div>
        <div class="context-segment files" style="width: ${fe(d,u).toFixed(1)}%" title="Files: ~${z(d)}"></div>
      </div>
      <div class="context-legend">
        <span class="legend-item"><span class="legend-dot system"></span>Sys ~${z(a)}</span>
        <span class="legend-item"><span class="legend-dot skills"></span>Skills ~${z(o)}</span>
        <span class="legend-item"><span class="legend-dot tools"></span>Tools ~${z(l)}</span>
        <span class="legend-item"><span class="legend-dot files"></span>Files ~${z(d)}</span>
      </div>
      <div class="context-total">${i("usageTotalLabel")}: ~${z(u)}</div>
      <div class="context-breakdown-grid">
        ${g.length>0?(()=>{const C=g.length-p.length;return r`
                  <div class="context-breakdown-card">
                    <div class="context-breakdown-title">${i("usageSkills")} (${g.length})</div>
                    <div class="context-breakdown-list">
                      ${p.map(A=>r`
                          <div class="context-breakdown-item">
                            <span class="mono">${A.name}</span>
                            <span class="muted">~${z(ft(A.blockChars))}</span>
                          </div>
                        `)}
                    </div>
                    ${C>0?r`<div class="context-breakdown-more">+${C} ${i("usageMoreSessions")}</div>`:y}
                  </div>
                `})():y}
        ${m.length>0?(()=>{const C=m.length-h.length;return r`
                  <div class="context-breakdown-card">
                    <div class="context-breakdown-title">${i("usageToolsLabel")} (${m.length})</div>
                    <div class="context-breakdown-list">
                      ${h.map(A=>r`
                          <div class="context-breakdown-item">
                            <span class="mono">${A.name}</span>
                            <span class="muted">~${z(ft(A.summaryChars+A.schemaChars))}</span>
                          </div>
                        `)}
                    </div>
                    ${C>0?r`<div class="context-breakdown-more">+${C} ${i("usageMoreSessions")}</div>`:y}
                  </div>
                `})():y}
        ${v.length>0?(()=>{const C=v.length-b.length;return r`
                  <div class="context-breakdown-card">
                    <div class="context-breakdown-title">${i("usageFiles")} (${v.length})</div>
                    <div class="context-breakdown-list">
                      ${b.map(A=>r`
                          <div class="context-breakdown-item">
                            <span class="mono">${A.name}</span>
                            <span class="muted">~${z(ft(A.injectedChars))}</span>
                          </div>
                        `)}
                    </div>
                    ${C>0?r`<div class="context-breakdown-more">+${C} ${i("usageMoreSessions")}</div>`:y}
                  </div>
                `})():y}
      </div>
    </div>
  `}function Pb(e,t,n,s,a,o,l,d,u,f){if(t)return r`
      <div class="session-logs-compact">
        <div class="session-logs-header">${i("usageConversation")}</div>
        <div class="muted" style="padding: 20px; text-align: center">${i("usageLoading")}</div>
      </div>
    `;if(!e||e.length===0)return r`
      <div class="session-logs-compact">
        <div class="session-logs-header">${i("usageConversation")}</div>
        <div class="muted" style="padding: 20px; text-align: center">${i("usageNoMessages")}</div>
      </div>
    `;const g=a.query.trim().toLowerCase(),m=e.map(b=>{const S=tb(b.content),C=S.cleanContent||b.content;return{log:b,toolInfo:S,cleanContent:C}}),v=Array.from(new Set(m.flatMap(b=>b.toolInfo.tools.map(([S])=>S)))).toSorted((b,S)=>b.localeCompare(S)),k=m.filter(b=>!(a.roles.length>0&&!a.roles.includes(b.log.role)||a.hasTools&&b.toolInfo.tools.length===0||a.tools.length>0&&!b.toolInfo.tools.some(([C])=>a.tools.includes(C))||g&&!b.cleanContent.toLowerCase().includes(g))),c=a.roles.length>0||a.tools.length>0||a.hasTools||g?`${k.length} of ${e.length}`:`${e.length}`,p=new Set(a.roles),h=new Set(a.tools);return r`
    <div class="session-logs-compact">
      <div class="session-logs-header">
        <span>${i("usageConversation")} <span style="font-weight: normal; color: var(--text-muted);">(${c} ${i("usageMessagesCount")})</span></span>
        <button class="btn btn-sm usage-action-btn usage-secondary-btn" @click=${s}>
          ${i(n?"usageCollapseAll":"usageExpandAll")}
        </button>
      </div>
      <div class="usage-filters-inline" style="margin: 10px 12px;">
        <select
          multiple
          size="4"
          @change=${b=>o(Array.from(b.target.selectedOptions).map(S=>S.value))}
        >
          <option value="user" ?selected=${p.has("user")}>${i("usageUser")}</option>
          <option value="assistant" ?selected=${p.has("assistant")}>${i("usageAssistant")}</option>
          <option value="tool" ?selected=${p.has("tool")}>${i("usageTool")}</option>
          <option value="toolResult" ?selected=${p.has("toolResult")}>${i("usageToolResult")}</option>
        </select>
        <select
          multiple
          size="4"
          @change=${b=>l(Array.from(b.target.selectedOptions).map(S=>S.value))}
        >
          ${v.map(b=>r`<option value=${b} ?selected=${h.has(b)}>${b}</option>`)}
        </select>
        <label class="usage-filters-inline" style="gap: 6px;">
          <input
            type="checkbox"
            .checked=${a.hasTools}
            @change=${b=>d(b.target.checked)}
          />
          ${i("usageHasTools")}
        </label>
        <input
          type="text"
          placeholder=${i("usageSearchConversation")}
          .value=${a.query}
          @input=${b=>u(b.target.value)}
        />
        <button class="btn btn-sm usage-action-btn usage-secondary-btn" @click=${f}>
          ${i("usageClear")}
        </button>
      </div>
      <div class="session-logs-list">
        ${k.map(b=>{const{log:S,toolInfo:C,cleanContent:A}=b,E=S.role==="user"?"user":"assistant",T=S.role==="user"?i("usageUser"):S.role==="assistant"?i("usageAssistant"):i("usageTool");return r`
          <div class="session-log-entry ${E}">
            <div class="session-log-meta">
              <span class="session-log-role">${T}</span>
              <span>${new Date(S.timestamp).toLocaleString()}</span>
              ${S.tokens?r`<span>${z(S.tokens)}</span>`:y}
            </div>
            <div class="session-log-content">${A}</div>
            ${C.tools.length>0?r`
                    <details class="session-log-tools" ?open=${n}>
                      <summary>${C.summary}</summary>
                      <div class="session-log-tools-list">
                        ${C.tools.map(([_,N])=>r`
                            <span class="session-log-tools-pill">${_} × ${N}</span>
                          `)}
                      </div>
                    </details>
                  `:y}
          </div>
        `})}
        ${k.length===0?r`
                <div class="muted" style="padding: 12px">${i("usageNoMessagesMatchFilters")}</div>
              `:y}
      </div>
    </div>
  `}function Lb(e){if(e.loading&&!e.totals)return r`
      <style>
        @keyframes initial-spin {
          to { transform: rotate(360deg); }
        }
        @keyframes initial-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      </style>
      <section class="card">
        <div class="row" style="justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 12px;">
          <div style="flex: 1; min-width: 250px;">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 2px;">
              <div class="card-title" style="margin: 0;">${i("usageTokenUsage")}</div>
              <span style="
                display: inline-flex;
                align-items: center;
                gap: 6px;
                padding: 4px 10px;
                background: rgba(255, 77, 77, 0.1);
                border-radius: 4px;
                font-size: 12px;
                color: #ff4d4d;
              ">
                <span style="
                  width: 10px;
                  height: 10px;
                  border: 2px solid #ff4d4d;
                  border-top-color: transparent;
                  border-radius: 50%;
                  animation: initial-spin 0.6s linear infinite;
                "></span>
                ${i("usageLoading")}
              </span>
            </div>
          </div>
          <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 8px;">
            <div style="display: flex; gap: 8px; align-items: center;">
              <input type="date" .value=${e.startDate} disabled style="padding: 6px 10px; border: 1px solid var(--border); border-radius: 6px; background: var(--bg); color: var(--text); font-size: 13px; opacity: 0.6;" />
              <span style="color: var(--text-muted);">to</span>
              <input type="date" .value=${e.endDate} disabled style="padding: 6px 10px; border: 1px solid var(--border); border-radius: 6px; background: var(--bg); color: var(--text); font-size: 13px; opacity: 0.6;" />
            </div>
          </div>
        </div>
      </section>
    `;const t=e.chartMode==="tokens",n=e.query.trim().length>0,s=e.queryDraft.trim().length>0,a=[...e.sessions].toSorted((D,U)=>{const F=t?D.usage?.totalTokens??0:D.usage?.totalCost??0;return(t?U.usage?.totalTokens??0:U.usage?.totalCost??0)-F}),o=e.selectedDays.length>0?a.filter(D=>{if(D.usage?.activityDates?.length)return D.usage.activityDates.some(W=>e.selectedDays.includes(W));if(!D.updatedAt)return!1;const U=new Date(D.updatedAt),F=`${U.getFullYear()}-${String(U.getMonth()+1).padStart(2,"0")}-${String(U.getDate()).padStart(2,"0")}`;return e.selectedDays.includes(F)}):a,l=(D,U)=>{if(U.length===0)return!0;const F=D.usage,W=F?.firstActivity??D.updatedAt,ke=F?.lastActivity??D.updatedAt;if(!W||!ke)return!1;const ne=Math.min(W,ke),Ae=Math.max(W,ke);let oe=ne;for(;oe<=Ae;){const ve=new Date(oe),ze=Po(ve,e.timeZone);if(U.includes(ze))return!0;const Ke=Lo(ve,e.timeZone);oe=Math.min(Ke.getTime(),Ae)+1}return!1},d=e.selectedHours.length>0?o.filter(D=>l(D,e.selectedHours)):o,u=eb(d,e.query),f=u.sessions,g=u.warnings,m=vb(e.queryDraft,a,e.aggregates),v=_o(e.query),k=D=>{const U=wt(D);return v.filter(F=>wt(F.key??"")===U).map(F=>F.value).filter(Boolean)},c=D=>{const U=new Set;for(const F of D)F&&U.add(F);return Array.from(U)},p=c(a.map(D=>D.agentId)).slice(0,12),h=c(a.map(D=>D.channel)).slice(0,12),b=c([...a.map(D=>D.modelProvider),...a.map(D=>D.providerOverride),...e.aggregates?.byProvider.map(D=>D.provider)??[]]).slice(0,12),S=c([...a.map(D=>D.model),...e.aggregates?.byModel.map(D=>D.model)??[]]).slice(0,12),C=c(e.aggregates?.tools.tools.map(D=>D.name)??[]).slice(0,12),A=e.selectedSessions.length===1?e.sessions.find(D=>D.key===e.selectedSessions[0])??f.find(D=>D.key===e.selectedSessions[0]):null,E=D=>D.reduce((U,F)=>(F.usage&&(U.input+=F.usage.input,U.output+=F.usage.output,U.cacheRead+=F.usage.cacheRead,U.cacheWrite+=F.usage.cacheWrite,U.totalTokens+=F.usage.totalTokens,U.totalCost+=F.usage.totalCost,U.inputCost+=F.usage.inputCost??0,U.outputCost+=F.usage.outputCost??0,U.cacheReadCost+=F.usage.cacheReadCost??0,U.cacheWriteCost+=F.usage.cacheWriteCost??0,U.missingCostEntries+=F.usage.missingCostEntries??0),U),{input:0,output:0,cacheRead:0,cacheWrite:0,totalTokens:0,totalCost:0,inputCost:0,outputCost:0,cacheReadCost:0,cacheWriteCost:0,missingCostEntries:0}),T=D=>e.costDaily.filter(F=>D.includes(F.date)).reduce((F,W)=>(F.input+=W.input,F.output+=W.output,F.cacheRead+=W.cacheRead,F.cacheWrite+=W.cacheWrite,F.totalTokens+=W.totalTokens,F.totalCost+=W.totalCost,F.inputCost+=W.inputCost??0,F.outputCost+=W.outputCost??0,F.cacheReadCost+=W.cacheReadCost??0,F.cacheWriteCost+=W.cacheWriteCost??0,F),{input:0,output:0,cacheRead:0,cacheWrite:0,totalTokens:0,totalCost:0,inputCost:0,outputCost:0,cacheReadCost:0,cacheWriteCost:0,missingCostEntries:0});let _,N;const O=a.length;if(e.selectedSessions.length>0){const D=f.filter(U=>e.selectedSessions.includes(U.key));_=E(D),N=D.length}else e.selectedDays.length>0&&e.selectedHours.length===0?(_=T(e.selectedDays),N=f.length):e.selectedHours.length>0||n?(_=E(f),N=f.length):(_=e.totals,N=O);const Q=e.selectedSessions.length>0?f.filter(D=>e.selectedSessions.includes(D.key)):n||e.selectedHours.length>0?f:e.selectedDays.length>0?o:a,R=gb(Q,e.aggregates),L=e.selectedSessions.length>0?(()=>{const D=f.filter(F=>e.selectedSessions.includes(F.key)),U=new Set;for(const F of D)for(const W of F.usage?.activityDates??[])U.add(W);return U.size>0?e.costDaily.filter(F=>U.has(F.date)):e.costDaily})():e.costDaily,he=mb(Q,_,R),I=!e.loading&&!e.totals&&e.sessions.length===0,q=(_?.missingCostEntries??0)>0||(_?_.totalTokens>0&&_.totalCost===0&&_.input+_.output+_.cacheRead+_.cacheWrite>0:!1),ce=[{label:i("usageToday"),days:1},{label:i("usage7d"),days:7},{label:i("usage30d"),days:30}],de=D=>{const U=new Date,F=new Date;F.setDate(F.getDate()-(D-1)),e.onStartDateChange(ca(F)),e.onEndDateChange(ca(U))},ae=(D,U,F)=>{if(F.length===0)return y;const W=k(D),ke=new Set(W.map(oe=>wt(oe))),ne=F.length>0&&F.every(oe=>ke.has(wt(oe))),Ae=W.length;return r`
      <details
        class="usage-filter-select"
        @toggle=${oe=>{const ve=oe.currentTarget;if(!ve.open)return;const ze=Ke=>{Ke.composedPath().includes(ve)||(ve.open=!1,window.removeEventListener("click",ze,!0))};window.addEventListener("click",ze,!0)}}
      >
        <summary>
          <span>${U}</span>
          ${Ae>0?r`<span class="usage-filter-badge">${Ae}</span>`:r`
                  <span class="usage-filter-badge">All</span>
                `}
        </summary>
        <div class="usage-filter-popover">
          <div class="usage-filter-actions">
            <button
              class="btn btn-sm"
              @click=${oe=>{oe.preventDefault(),oe.stopPropagation(),e.onQueryDraftChange(Fl(e.queryDraft,D,F))}}
              ?disabled=${ne}
            >
              Select All
            </button>
            <button
              class="btn btn-sm"
              @click=${oe=>{oe.preventDefault(),oe.stopPropagation(),e.onQueryDraftChange(Fl(e.queryDraft,D,[]))}}
              ?disabled=${Ae===0}
            >
              Clear
            </button>
          </div>
          <div class="usage-filter-options">
            ${F.map(oe=>{const ve=ke.has(wt(oe));return r`
                <label class="usage-filter-option">
                  <input
                    type="checkbox"
                    .checked=${ve}
                    @change=${ze=>{const Ke=ze.target,lt=`${D}:${oe}`;e.onQueryDraftChange(Ke.checked?bb(e.queryDraft,lt):Ol(e.queryDraft,lt))}}
                  />
                  <span>${oe}</span>
                </label>
              `})}
          </div>
        </div>
      </details>
    `},le=ca(new Date);return r`
    <style>${nb}</style>

    <section class="usage-page-header">
      <div class="usage-page-title">Usage</div>
      <div class="usage-page-subtitle">${i("usagePageSubtitle")}</div>
    </section>

    <section class="card usage-header ${e.headerPinned?"pinned":""}">
      <div class="usage-header-row">
        <div class="usage-header-title">
          <div class="card-title" style="margin: 0;">Filters</div>
          ${e.loading?r`
                  <span class="usage-refresh-indicator">Loading</span>
                `:y}
          ${I?r`
                  <span class="usage-query-hint">Select a date range and click Refresh to load usage.</span>
                `:y}
        </div>
        <div class="usage-header-metrics">
          ${_?r`
                <span class="usage-metric-badge">
                  <strong>${z(_.totalTokens)}</strong> ${i("usageTokensUnit")}
                </span>
                <span class="usage-metric-badge">
                  <strong>${J(_.totalCost)}</strong> cost
                </span>
                <span class="usage-metric-badge">
                  <strong>${N}</strong>
                  session${N!==1?"s":""}
                </span>
              `:y}
          <button
            class="usage-pin-btn ${e.headerPinned?"active":""}"
            title=${e.headerPinned?"Unpin filters":"Pin filters"}
            @click=${e.onToggleHeaderPinned}
          >
            ${e.headerPinned?"Pinned":"Pin"}
          </button>
          <details
            class="usage-export-menu"
            @toggle=${D=>{const U=D.currentTarget;if(!U.open)return;const F=W=>{W.composedPath().includes(U)||(U.open=!1,window.removeEventListener("click",F,!0))};window.addEventListener("click",F,!0)}}
          >
            <summary class="usage-export-button">${i("usageExport")} ▾</summary>
            <div class="usage-export-popover">
              <div class="usage-export-list">
                <button
                  class="usage-export-item"
                  @click=${()=>da(`openclaw-usage-sessions-${le}.csv`,fb(f),"text/csv")}
                  ?disabled=${f.length===0}
                >
                  ${i("usageExportSessionsCsv")}
                </button>
                <button
                  class="usage-export-item"
                  @click=${()=>da(`openclaw-usage-daily-${le}.csv`,hb(L),"text/csv")}
                  ?disabled=${L.length===0}
                >
                  ${i("usageExportDailyCsv")}
                </button>
                <button
                  class="usage-export-item"
                  @click=${()=>da(`openclaw-usage-${le}.json`,JSON.stringify({totals:_,sessions:f,daily:L,aggregates:R},null,2),"application/json")}
                  ?disabled=${f.length===0&&L.length===0}
                >
                  JSON
                </button>
              </div>
            </div>
          </details>
        </div>
      </div>
      <div class="usage-header-row">
        <div class="usage-controls">
          ${wb(e.selectedDays,e.selectedHours,e.selectedSessions,e.sessions,e.onClearDays,e.onClearHours,e.onClearSessions,e.onClearFilters)}
          <div class="usage-presets">
            ${ce.map(D=>r`
                <button class="btn btn-sm" @click=${()=>de(D.days)}>
                  ${D.label}
                </button>
              `)}
          </div>
          <input
            type="date"
            .value=${e.startDate}
            title="Start Date"
            @change=${D=>e.onStartDateChange(D.target.value)}
          />
          <span style="color: var(--text-muted);">to</span>
          <input
            type="date"
            .value=${e.endDate}
            title="End Date"
            @change=${D=>e.onEndDateChange(D.target.value)}
          />
          <select
            title="Time zone"
            .value=${e.timeZone}
            @change=${D=>e.onTimeZoneChange(D.target.value)}
          >
            <option value="local">Local</option>
            <option value="utc">UTC</option>
          </select>
          <div class="chart-toggle">
            <button
              class="toggle-btn ${t?"active":""}"
              @click=${()=>e.onChartModeChange("tokens")}
            >
              Tokens
            </button>
            <button
              class="toggle-btn ${t?"":"active"}"
              @click=${()=>e.onChartModeChange("cost")}
            >
              Cost
            </button>
          </div>
          <button
            class="btn btn-sm usage-action-btn usage-primary-btn"
            @click=${e.onRefresh}
            ?disabled=${e.loading}
          >
            Refresh
          </button>
        </div>
        
      </div>

      <div style="margin-top: 12px;">
          <div class="usage-query-bar">
          <input
            class="usage-query-input"
            type="text"
            .value=${e.queryDraft}
            placeholder="Filter sessions (e.g. key:agent:main:cron* model:gpt-4o has:errors minTokens:2000)"
            @input=${D=>e.onQueryDraftChange(D.target.value)}
            @keydown=${D=>{D.key==="Enter"&&(D.preventDefault(),e.onApplyQuery())}}
          />
          <div class="usage-query-actions">
            <button
              class="btn btn-sm usage-action-btn usage-secondary-btn"
              @click=${e.onApplyQuery}
              ?disabled=${e.loading||!s&&!n}
            >
              Filter (client-side)
            </button>
            ${s||n?r`<button class="btn btn-sm usage-action-btn usage-secondary-btn" @click=${e.onClearQuery}>${i("usageClear")}</button>`:y}
            <span class="usage-query-hint">
              ${n?i("usageQueryHintMatch").replace("{count}",String(f.length)).replace("{total}",String(O)):i("usageQueryHintInRange").replace("{total}",String(O))}
            </span>
          </div>
        </div>
        <div class="usage-filter-row">
          ${ae("agent","Agent",p)}
          ${ae("channel","Channel",h)}
          ${ae("provider","Provider",b)}
          ${ae("model","Model",S)}
          ${ae("tool","Tool",C)}
          <span class="usage-query-hint">
            Tip: use filters or click bars to filter days.
          </span>
        </div>
        ${v.length>0?r`
                <div class="usage-query-chips">
                  ${v.map(D=>{const U=D.raw;return r`
                      <span class="usage-query-chip">
                        ${U}
                        <button
                          title="Remove filter"
                          @click=${()=>e.onQueryDraftChange(Ol(e.queryDraft,U))}
                        >
                          ×
                        </button>
                      </span>
                    `})}
                </div>
              `:y}
        ${m.length>0?r`
                <div class="usage-query-suggestions">
                  ${m.map(D=>r`
                      <button
                        class="usage-query-suggestion"
                        @click=${()=>e.onQueryDraftChange(yb(e.queryDraft,D.value))}
                      >
                        ${D.label}
                      </button>
                    `)}
                </div>
              `:y}
        ${g.length>0?r`
                <div class="callout warning" style="margin-top: 8px;">
                  ${g.join(" · ")}
                </div>
              `:y}
      </div>

      ${e.error?r`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:y}

      ${e.sessionsLimitReached?r`
              <div class="callout warning" style="margin-top: 12px">
                Showing first 1,000 sessions. Narrow date range for complete results.
              </div>
            `:y}
    </section>

    ${Sb(_,R,he,q,ob(Q,e.timeZone),N,O)}

    ${cb(Q,e.timeZone,e.selectedHours,e.onSelectHour)}

    <!-- Two-column layout: Daily+Breakdown on left, Sessions on right -->
    <div class="usage-grid">
      <div class="usage-grid-left">
        <div class="card usage-left-card">
          ${$b(L,e.selectedDays,e.chartMode,e.dailyChartMode,e.onDailyChartModeChange,e.onSelectDay)}
          ${_?kb(_,e.chartMode):y}
        </div>
      </div>
      <div class="usage-grid-right">
        ${Ab(f,e.selectedSessions,e.selectedDays,t,e.sessionSort,e.sessionSortDir,e.recentSessions,e.sessionsTab,e.onSelectSession,e.onSessionSortChange,e.onSessionSortDirChange,e.onSessionsTabChange,e.visibleColumns,O,e.onClearSessions)}
      </div>
    </div>

    <!-- Session Detail Panel (when selected) or Empty State -->
    ${A?Eb(A,e.timeSeries,e.timeSeriesLoading,e.timeSeriesMode,e.onTimeSeriesModeChange,e.timeSeriesBreakdownMode,e.onTimeSeriesBreakdownChange,e.startDate,e.endDate,e.selectedDays,e.sessionLogs,e.sessionLogsLoading,e.sessionLogsExpanded,e.onToggleSessionLogsExpanded,{roles:e.logFilterRoles,tools:e.logFilterTools,hasTools:e.logFilterHasTools,query:e.logFilterQuery},e.onLogFilterRolesChange,e.onLogFilterToolsChange,e.onLogFilterHasToolsChange,e.onLogFilterQueryChange,e.onLogFilterClear,e.contextExpanded,e.onToggleContextExpanded,e.onClearSessions):Cb()}
  `}function Ib(e){e.mcpAddModalOpen=!0,e.mcpAddName="",e.mcpAddDraft={enabled:!0,command:"npx"},e.mcpAddConnectionType="stdio",e.mcpAddEditMode="form",e.mcpAddRawJson=JSON.stringify({enabled:!0},null,2),e.mcpAddRawError=null}function Db(e){e.mcpAddModalOpen=!1,e.mcpAddName="",e.mcpAddRawError=null}function Rb(e,t){e.mcpAddName=t}function Nb(e,t){e.mcpAddDraft={...e.mcpAddDraft,...t}}function Ub(e,t){e.mcpAddConnectionType=t}function Ob(e,t){e.mcpAddRawJson=t;try{const n=JSON.parse(t);e.mcpAddDraft=n,e.mcpAddRawError=null}catch{e.mcpAddRawError="Invalid JSON"}}function Fb(e,t){e.mcpAddEditMode=t,t==="raw"&&(e.mcpAddRawJson=JSON.stringify(e.mcpAddDraft,null,2))}async function Bb(e){const t=e.mcpAddName?.trim();if(!t)return;const n=t.toLowerCase().replace(/\s+/g,"-");if(e.mcpAddEditMode==="raw")try{e.mcpAddDraft=JSON.parse(e.mcpAddRawJson)}catch{e.mcpAddRawError="Invalid JSON";return}else{const d=e.mcpAddConnectionType,u=e.mcpAddDraft;if(d==="stdio"&&!u.command?.trim()||d==="url"&&!u.url?.trim()||d==="service"&&(!u.service?.trim()||!u.serviceUrl?.trim()))return}!e.configForm&&e.configSnapshot?.config&&(e.configForm=X(e.configSnapshot.config));const s=X(e.configForm??e.configSnapshot?.config??{});s.mcp||(s.mcp={servers:{}});const a=s.mcp;a.servers||(a.servers={});const o=e.mcpAddDraft.enabled,l=typeof o=="boolean"?o:!0;a.servers[n]={...e.mcpAddDraft,enabled:l},e.configForm=s,e.configFormDirty=!0,await Pe(e,{mcp:s.mcp}),e.mcpAddModalOpen=!1,e.mcpAddName=""}function Hb(e){return!e||e.command?"stdio":e.url?"url":e.service&&e.serviceUrl?"service":"stdio"}function zb(e,t){if(e.mcpSelectedKey=t,e.mcpRawError=null,t){const s=(e.configForm?.mcp?.servers??{})[t];e.mcpRawJson=s?JSON.stringify(s,null,2):"{}",e.mcpEditConnectionType=Hb(s)}}function Kb(e,t){e.mcpEditConnectionType=t}function qb(e,t,n){const s=X(e.configForm??e.configSnapshot?.config??{});s.mcp||(s.mcp={servers:{}});const a=s.mcp;a.servers||(a.servers={}),a.servers[t]||(a.servers[t]={}),a.servers[t]={...a.servers[t],enabled:n},e.configForm=s,e.configFormDirty=!0,Pe(e,{mcp:s.mcp})}function jb(e,t,n){const s=X(e.configForm??e.configSnapshot?.config??{});s.mcp||(s.mcp={servers:{}});const a=s.mcp;a.servers||(a.servers={});const o=a.servers[t]??{};a.servers[t]={...o,...n},e.configForm=s,e.configFormDirty=!0,e.mcpFormDirty=!0}function Wb(e,t,n){e.mcpRawJson=n;try{const s=JSON.parse(n),a=X(e.configForm??e.configSnapshot?.config??{});a.mcp||(a.mcp={servers:{}});const o=a.mcp;o.servers||(o.servers={}),o.servers[t]=s,e.configForm=a,e.configFormDirty=!0,e.mcpRawError=null}catch{e.mcpRawError="Invalid JSON"}}function Vb(e){if(!e.mcpSelectedKey)return;if(e.mcpEditMode==="raw")try{JSON.parse(e.mcpRawJson)}catch{e.mcpRawError="Invalid JSON";return}const t={mcp:{servers:e.configForm?.mcp?e.configForm.mcp.servers:{}}};Pe(e,t),e.mcpFormDirty=!1,e.mcpSelectedKey=null}function Gb(e){e.mcpSelectedKey=null,e.mcpRawError=null,e.mcpFormDirty&&Z(e)}function Qb(e,t){const s=(e.configForm??e.configSnapshot?.config)?.mcp;if(s?.servers&&t in s.servers&&(Pe(e,{mcp:{servers:{[t]:null}}}),e.configForm&&e.configForm.mcp&&typeof e.configForm.mcp=="object")){const a=e.configForm.mcp.servers;if(a&&t in a){const o={...a};delete o[t],e.configForm.mcp.servers=o}}e.mcpSelectedKey===t&&(e.mcpSelectedKey=null)}function Jb(e){Z(e)}function Yb(e){e.modelsAddProviderModalOpen=!0,e.modelsAddProviderForm={providerId:"",displayName:"",baseUrl:"",apiKey:"",apiKeyPrefix:""}}function Zb(e){e.modelsAddProviderModalOpen=!1}function Xb(e,t){e.modelsAddProviderForm={...e.modelsAddProviderForm,...t}}function ex(e){const{providerId:t,displayName:n,baseUrl:s,apiKey:a,apiKeyPrefix:o}=e.modelsAddProviderForm;if(!t.trim()||!n.trim())return;const l=t.trim().toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9_-]/g,"");if(!l)return;!e.configForm&&e.configSnapshot?.config&&(e.configForm=X(e.configSnapshot.config));const d=X(e.configForm??e.configSnapshot?.config??{});d.models||(d.models={mode:"merge",providers:{}});const u=d.models;if(u.providers||(u.providers={}),u.providers[l]){e.modelsAddProviderModalOpen=!1,e.modelsSelectedProvider=l;return}u.providers[l]={displayName:n.trim(),baseUrl:s.trim()||void 0,apiKey:a.trim()||void 0,apiKeyPrefix:o.trim()||void 0,api:"openai-completions"},e.configForm=d,e.configFormDirty=!0,e.modelsFormDirty=!0,e.modelsAddProviderModalOpen=!1,e.modelsSelectedProvider=l}function tx(e,t){e.modelsSelectedProvider=t}function nx(e,t,n){const s=X(e.configForm??e.configSnapshot?.config??{});s.models||(s.models={mode:"merge",providers:{}});const a=s.models;a.providers||(a.providers={});const o=a.providers[t]??{};a.providers[t]={...o,...n},e.configForm=s,e.configFormDirty=!0,e.modelsFormDirty=!0}function sx(e,t){e.modelsAddModelModalOpen=!0,e.modelsAddModelForm={modelId:"",modelName:""}}function ax(e){e.modelsAddModelModalOpen=!1}function ox(e,t){e.modelsAddModelForm={...e.modelsAddModelForm,...t}}function ix(e,t){const{modelId:n,modelName:s}=e.modelsAddModelForm;if(!n.trim()||!s.trim())return;const a=X(e.configForm??e.configSnapshot?.config??{});a.models||(a.models={mode:"merge",providers:{}});const o=a.models;o.providers||(o.providers={});const l=o.providers[t]??{},d=l.models??[];if(d.some(u=>u.id===n.trim())){e.modelsAddModelModalOpen=!1;return}o.providers[t]={...l,models:[...d,{id:n.trim(),name:s.trim()}]},e.configForm=a,e.configFormDirty=!0,e.modelsFormDirty=!0,e.modelsAddModelModalOpen=!1}function lx(e,t,n,s){const a=X(e.configForm??e.configSnapshot?.config??{});a.env||(a.env={vars:{},modelEnv:{}});const o=a.env;o.modelEnv||(o.modelEnv={});const l=`${t}/${n}`;o.modelEnv[l]={...s},e.configForm=a,e.configFormDirty=!0,e.modelsFormDirty=!0}function rx(e,t,n){const s=X(e.configForm??e.configSnapshot?.config??{}),a=s.models?.providers;if(!a)return;const o=a[t];o?.models&&(a[t]={...o,models:o.models.filter(l=>l.id!==n)},e.configForm=s,e.configFormDirty=!0,e.modelsFormDirty=!0)}function cx(e){const t={};for(const n of Object.values(e)){const s=n.envVars??{};for(const[a,o]of Object.entries(s))if(!(!a||a==="__new__")){if(t[a]!==void 0&&t[a]!==o)return{__conflict:a};t[a]=o}}return t}function dx(e){const t=e.envVars??{},n={};for(const[s,a]of Object.entries(t))s&&s!=="__new__"&&(n[s]=a);return{...e,envVars:Object.keys(n).length?n:void 0}}function ux(e){e.modelsSaveError=null;const t=e.configForm?.models?.providers??{},n=cx(t);if(n.__conflict){e.modelsSaveError=n.__conflict;return}const a={...e.configForm?.env?.vars??{},...n},o={};for(const[m,v]of Object.entries(t)){let k=dx(v);const c=Me.find(p=>p.id===m);if(c&&((!k.baseUrl||k.baseUrl.trim()==="")&&(k={...k,baseUrl:c.baseUrl}),!k.api||k.api.trim()==="")){const p=c.defaultApi??"openai-completions";k={...k,api:p}}o[m]=k}const d={models:{...e.configForm?.models&&typeof e.configForm.models=="object"&&!Array.isArray(e.configForm.models)?e.configForm.models:{},providers:o}},f=e.configForm?.env?.modelEnv??{},g={};for(const[m,v]of Object.entries(f)){if(!v||typeof v!="object")continue;const k={};for(const[c,p]of Object.entries(v))c&&c!=="__new__"&&(k[c]=p);Object.keys(k).length>0?g[m]=k:g[m]=null}d.env={vars:a,modelEnv:g},Pe(e,d),e.modelsFormDirty=!1,e.modelsSelectedProvider=null}function px(e){e.modelsSelectedProvider=null,e.modelsSaveError=null,e.modelsFormDirty&&Z(e)}function gx(e,t){e.modelsUseModelModalOpen=!0,e.modelsUseModelModalProvider=t}function mx(e){e.modelsUseModelModalOpen=!1,e.modelsUseModelModalProvider=null}function fx(e,t,n){const s=`${t}/${n}`,a=X(e.configForm??e.configSnapshot?.config??{});hs(a,["agents","defaults","model","primary"],s),e.configForm=a,e.configFormDirty=!0,Pe(e,{agents:a.agents}),e.modelsUseModelModalOpen=!1,e.modelsUseModelModalProvider=null}function hx(e,t){const s=e.configForm?.agents?.defaults?.model,a=s&&typeof s=="object"&&!Array.isArray(s)?s.primary:void 0,o=typeof a=="string"?a:null;if(!o||!o.startsWith(t+"/"))return;const l={agents:{defaults:{model:{primary:null}}}},d=X(e.configForm??e.configSnapshot?.config??{}),g=d.agents?.defaults?.model;g&&typeof g=="object"&&!Array.isArray(g)&&delete g.primary,e.configForm=d,e.configFormDirty=!0,Pe(e,l)}function vx(e){const t=(e??"").toLowerCase(),n="agent:main:employee:",s="agent:main:employee-";if(t.startsWith(n)){const a=e.slice(n.length),o=a.indexOf(":");return o>=0?a.slice(0,o):a}return t.startsWith(s)&&e.slice(s.length).split(/[:/-]/)[0]||null}let ua=null;const Hl=e=>{ua&&clearTimeout(ua),ua=window.setTimeout(()=>{Vr(e)},400)},yx=/^data:/i,bx=/^https?:\/\//i;function pa(e){if(!e?.agents)return null;const n=e.agents.defaults;if(!n?.model)return null;const s=n.model;if(typeof s=="string"&&s)return s;if(s&&typeof s=="object"&&!Array.isArray(s)){const a=s.primary;return typeof a=="string"&&a?a:null}return null}function xx(e){const t=e.agentsList?.agents??[],s=er(e.sessionKey)?.agentId??e.agentsList?.defaultId??"main",o=t.find(d=>d.id===s)?.identity,l=o?.avatarUrl??o?.avatar;if(l)return yx.test(l)||bx.test(l)?l:o?.avatarUrl}function wx(e){const t=e.presenceEntries.length,n=e.sessionsResult?.count??null,s=e.cronStatus?.nextWakeAtMs??null,a=e.connected?null:"Disconnected from gateway.",o=e.tab==="chat"||e.tab==="message",l=o&&(e.settings.chatFocusMode||e.onboarding),d=e.onboarding?!1:e.settings.chatShowThinking,u=xx(e),f=e.chatAvatarUrl??u??null,g=e.configForm??e.configSnapshot?.config,m=Pn(e.basePath??""),v=e.tab==="scheduledTasks"||e.tab==="cronHistory"||e.tab==="cron",k=e.tab==="config"||e.tab==="envVars"||e.tab==="models"||e.tab==="overview"||e.tab==="channels"||e.tab==="sessions"||e.tab==="usage"||e.tab==="sandbox"||e.tab==="llmTrace"||e.tab==="aboutUs";return r`
    <div class="shell ${o?"shell--chat":""} ${l?"shell--chat-focus":""} ${e.settings.navCollapsed?"shell--nav-collapsed":""} ${e.onboarding?"shell--onboarding":""}">
      <header class="topbar">
        <div class="topbar-left">
          <button
            class="nav-collapse-toggle"
            @click=${()=>e.applySettings({...e.settings,navCollapsed:!e.settings.navCollapsed})}
            title="${e.settings.navCollapsed?"Expand sidebar":"Collapse sidebar"}"
            aria-label="${e.settings.navCollapsed?"Expand sidebar":"Collapse sidebar"}"
          >
            <span class="nav-collapse-toggle__icon">${ee.menu}</span>
          </button>
          <div class="brand">
            <div class="brand-logo">
              <img
                src=${m?`${m}/favicon.svg`:"/favicon.svg"}
                alt="OpenOcta"
                style="width: 128px; height: 32px;"
              />
            </div>
          </div>
        </div>
        <nav class="top-tabs" aria-label="Primary navigation">
          ${[{tab:"message",label:"消息"},{tab:"scheduledTasks",label:"定时任务"},{tab:"employeeMarket",label:"员工市场"},{tab:"skillLibrary",label:"技能库"},{tab:"toolLibrary",label:"工具库"},{tab:"tutorials",label:"教程"},{tab:"community",label:"社区",href:"https://community.databuff.com/"},{tab:"config",label:"配置"}].map(c=>{const p=c.tab,h=p?_r(p):"globe",b=r`<span class="nav-item__icon" aria-hidden="true">${ee[h]}</span>`;if(c.href){const C=String(c.href);return r`
                <a
                  class="top-tab top-tab--link"
                  href=${C}
                  rel="noreferrer"
                  @click=${A=>{A.preventDefault(),Jn(C,{gatewayHost:e.settings.gatewayUrl,gatewayToken:e.settings.token})}}
                >
                  ${b}
                  ${c.label}
                </a>
              `}const S=p==="scheduledTasks"?v:p==="config"?k:e.tab===p;return r`
              <button
                class="top-tab ${S?"top-tab--active":""}"
                @click=${()=>e.setTab(p==="config"?"overview":p)}
                type="button"
              >
                ${b}
                ${c.label}
              </button>
            `})}
        </nav>
        <div class="topbar-status">
          <div class="pill">
            <span>Version</span>
            <span class="mono">${e.configSchemaVersion??"---"}</span>
          </div>
          <div class="pill">
            <a
              href="https://github.com/openocta/openocta.git"
              rel="noreferrer"
              title="GitHub 仓库（新窗口打开）"
              class="topbar-link"
              @click=${c=>{c.preventDefault(),Jn("https://github.com/openocta/openocta.git",{gatewayHost:e.settings.gatewayUrl,gatewayToken:e.settings.token})}}
            >
              <span class="topbar-link__icon" aria-hidden="true">${ee.github}</span>
              <span>GitHub</span>
            </a>
          </div>
          <div class="pill">
            <a
              href="https://www.openocta.com/"
              rel="noreferrer"
              title="OpenOcta 官网（新窗口打开）"
              class="topbar-link"
              @click=${c=>{c.preventDefault(),Jn("https://www.openocta.com/",{gatewayHost:e.settings.gatewayUrl,gatewayToken:e.settings.token})}}
            >
              <img
                src=${m?`${m}/favicon.ico`:"/favicon.ico"}
                alt=""
                class="topbar-link__img"
                width="16"
                height="16"
              />
              <span>官网</span>
            </a>
          </div>
          <div class="pill">
            <span class="statusDot ${e.connected?"ok":""}"></span>
            <span>Health</span>
            <span class="mono">${e.connected?"OK":"Offline"}</span>
          </div>
        </div>
      </header>
      <aside class="nav ${e.settings.navCollapsed?"nav--collapsed":""}">
        ${e.tab==="message"?r`
                <div class="session-sidebar">
                  <button
                    class="session-new"
                    type="button"
                    @click=${async()=>{const c=await Vu(e);c?.key&&(e.sessionKey=c.key,e.chatMessage="",e.chatAttachments=[],e.resetToolStream(),e.applySettings({...e.settings,sessionKey:c.key,lastActiveSessionKey:c.key}),e.loadAssistantIdentity(),await Promise.all([et(e),yt(e)]))}}
                  >
                    <span class="session-new__icon" aria-hidden="true">${ee.plus}</span>
                    <span>新消息</span>
                  </button>

                  <div class="session-list">
                    ${(e.sessionsResult?.sessions??[]).map(c=>{const p=c.key??c.sessionId??"",h=p.toLowerCase().startsWith("custom:"),b=h?null:vx(p),S=b?e.digitalEmployees?.find(O=>O.id===b):null,C=S?.name||c.origin&&(c.origin.label||c.origin.from||c.origin.to)||c.label||c.displayName||c.sessionId||p||"会话",A=c.lastMessagePreview?.trim()||"",E=p&&e.sessionKey===p,T=h,_=T&&e.sessionEditingKey===p,N=async O=>{if(!p||!O.trim()){e.sessionEditingKey=null;return}await Si(e,p,{label:O.trim()}),e.sessionEditingKey=null};return r`
                          <div
                            class="session-item ${E?"session-item--active":""} ${T?"session-item--editable":""}"
                            role="button"
                            tabindex="0"
                            @click=${async O=>{const Q=O.target;Q.closest(".session-item__edit")||Q.closest("input")||p&&(e.sessionKey=p,e.chatMessage="",e.resetToolStream(),e.applySettings({...e.settings,sessionKey:p,lastActiveSessionKey:p}),await Promise.all([et(e),yt(e)]))}}
                            @dblclick=${O=>{T&&(O.stopPropagation(),e.sessionEditingKey=p)}}
                            @keydown=${O=>{O.key==="Enter"&&!_&&(O.preventDefault(),O.currentTarget.click())}}
                          >
                            <span class="session-item__icon" aria-hidden="true">
                              ${S?r`<span class="session-item__icon-emp">${S.name?.slice(0,1)||"?"}</span>`:r`<span class="session-item__icon-default">${ee.messageSquare}</span>`}
                            </span>
                            <div class="session-item__body">
                              ${_?r`
                                    <input
                                      class="session-item__input"
                                      type="text"
                                      .value=${C}
                                      @blur=${O=>N(O.target.value)}
                                      @keydown=${O=>{O.key==="Enter"&&(O.preventDefault(),N(O.target.value)),O.key==="Escape"&&(e.sessionEditingKey=null)}}
                                      @click=${O=>O.stopPropagation()}
                                    />
                                  `:r`<span class="session-item__text">${C}</span>`}
                              ${!_&&A?r`<span class="session-item__sub muted">${A}</span>`:y}
                            </div>
                          </div>
                        `})}
                  </div>
                </div>
              `:v?r`
                  <div class="nav-group">
                    <button class="nav-label nav-label--static" type="button">
                      <span class="nav-label__text">定时任务</span>
                    </button>
                    <div class="nav-group__items">
                      ${Ce(e,"scheduledTasks")}
                      ${Ce(e,"cronHistory")}
                    </div>
                  </div>
                `:k?r`
                    <div class="nav-group">
                      <button class="nav-label nav-label--static" type="button">
                        <span class="nav-label__text">控制</span>
                      </button>
                      <div class="nav-group__items">
                        ${Ce(e,"overview")}
                        ${Ce(e,"channels")}
                        ${Ce(e,"sessions")}
                        ${Ce(e,"usage")}
                      </div>
                    </div>
                    <div class="nav-group">
                      <button class="nav-label nav-label--static" type="button">
                        <span class="nav-label__text">Agent</span>
                      </button>
                      <div class="nav-group__items">
                        ${Ce(e,"models")}
                        ${Ce(e,"sandbox")}
                        ${Ce(e,"llmTrace")}
                      </div>
                    </div>
                    <div class="nav-group">
                      <button class="nav-label nav-label--static" type="button">
                        <span class="nav-label__text">配置</span>
                      </button>
                      <div class="nav-group__items">
                        ${Ce(e,"config")}
                        ${Ce(e,"envVars")}
                      </div>
                    </div>
                    <div class="nav-group">
                      <button class="nav-label nav-label--static" type="button">
                        <span class="nav-label__text">资源</span>
                      </button>
                      <div class="nav-group__items">
                        <a
                          class="nav-item"
                          href="https://www.openocta.com/docs"
                          rel="noreferrer"
                          title="在线文档（新窗口打开）"
                          @click=${c=>{c.preventDefault(),Jn("https://www.openocta.com/docs",{gatewayHost:e.settings.gatewayUrl,gatewayToken:e.settings.token})}}
                        >
                          <span class="nav-item__icon" aria-hidden="true">${ee.book}</span>
                          <span class="nav-item__text">在线文档</span>
                        </a>
                        ${Ce(e,"aboutUs")}
                      </div>
                    </div>
                  `:e.tab==="employeeMarket"?(()=>{const{orderedCategories:c,counts:p}=Av(e.employeeMarketItems,e.employeeMarketQuery),h=(e.employeeMarketCategory??"").trim()||"__all__";return r`
                      <div class="nav-group">
                        <button class="nav-label nav-label--static" type="button">
                          <span class="nav-label__text">分类</span>
                        </button>
                        <div class="nav-group__items">
                          <div class="emp-categories">
                          ${c.map(b=>{const S=b==="__all__"?"全部":b,C=h===b,A=p.get(b)??0;return r`
                              <button
                                class="emp-cat ${C?"active":""}"
                                type="button"
                                ?disabled=${e.employeeMarketLoading}
                                @click=${()=>e.employeeMarketCategory=b}
                              >
                                <span class="emp-cat__name">${S}</span>
                                <span class="emp-cat__count">${A}</span>
                              </button>
                            `})}
                          </div>
                        </div>
                      </div>
                    `})():e.tab==="skillLibrary"?(()=>{const{orderedCategories:c,counts:p}=vy(e.skillLibraryItems,e.skillLibraryQuery,e.skillLibraryStatus??""),h=(e.skillLibraryCategory??"").trim()||"__all__";return r`
                        <div class="nav-group">
                          <button class="nav-label nav-label--static" type="button">
                            <span class="nav-label__text">分类</span>
                          </button>
                          <div class="nav-group__items">
                            <div class="emp-categories">
                            ${c.map(b=>{const S=b==="__all__"?"全部":b,C=h===b,A=p.get(b)??0;return r`
                                <button
                                  class="emp-cat ${C?"active":""}"
                                  type="button"
                                  ?disabled=${e.skillLibraryLoading}
                                  @click=${()=>e.skillLibraryCategory=b}
                                >
                                  <span class="emp-cat__name">${S}</span>
                                  <span class="emp-cat__count">${A}</span>
                                </button>
                              `})}
                            </div>
                          </div>
                        </div>
                      `})():e.tab==="toolLibrary"?(()=>{const{orderedCategories:c,counts:p}=Cy(e.toolLibraryItems,e.toolLibraryQuery),h=(e.toolLibraryCategory??"").trim()||"__all__";return r`
                          <div class="nav-group">
                            <button class="nav-label nav-label--static" type="button">
                              <span class="nav-label__text">分类</span>
                            </button>
                            <div class="nav-group__items">
                              <div class="emp-categories">
                              ${c.map(b=>{const S=b==="__all__"?"全部":b,C=h===b,A=p.get(b)??0;return r`
                                  <button
                                    class="emp-cat ${C?"active":""}"
                                    type="button"
                                    ?disabled=${e.toolLibraryLoading}
                                    @click=${()=>e.toolLibraryCategory=b}
                                  >
                                    <span class="emp-cat__name">${S}</span>
                                    <span class="emp-cat__count">${A}</span>
                                  </button>
                                `})}
                              </div>
                            </div>
                          </div>
                        `})():e.tab==="tutorials"?(()=>{const c=[...e.tutorialCategories??[]].sort((h,b)=>(h.sort_order??0)-(b.sort_order??0)||h.name.localeCompare(b.name,"zh-Hans-CN")),p=e.tutorialsSelectedCategoryId;return r`
                            <div class="nav-group">
                              <button class="nav-label nav-label--static" type="button">
                                <span class="nav-label__text">分类</span>
                              </button>
                              <div class="nav-group__items">
                                <div class="emp-categories">
                                ${c.length===0?r`<button class="emp-cat" disabled>
                                      <span class="emp-cat__name">暂无分类</span>
                                      <span class="emp-cat__count">0</span>
                                    </button>`:c.map((h,b)=>{const S=p===h.id,C=h.courses?.length??0,A=_y(h.icon_class),E=(h.name??"").trim().slice(0,1)||"教";return r`
                                        <button
                                          class="emp-cat emp-cat--tutorial ${S?"active":""}"
                                          type="button"
                                          style=${Py(h.accent,b)}
                                          ?disabled=${e.tutorialsLoading}
                                          @click=${()=>e.tutorialsSelectedCategoryId=h.id}
                                        >
                                          <span class="emp-cat__name" style="display:flex; align-items:center; gap: 10px; min-width: 0;">
                                            <span
                                              class="emp-cat__icon-wrap"
                                              aria-hidden="true"
                                            >
                                              ${A?r`<span class="emp-cat__icon-svg">${A}</span>`:E}
                                            </span>
                                            <span style="min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${h.name}</span>
                                          </span>
                                          <span class="emp-cat__count">${C}</span>
                                        </button>
                                      `})}
                                </div>
                              </div>
                            </div>
                          `})():r`<div class="nav-empty"></div>`}
      </aside>
      <main class="content ${o?"content--chat":""} ${e.tab==="llmTrace"&&e.llmTraceViewingSessionId!=null?"content--llm-trace-detail":""}">
        <section class="content-header">
          <div>
            ${e.tab==="usage"?y:r`<div class="page-title">${Sa(e.tab)}</div>`}
          </div>
          <div class="page-meta">
            ${e.lastError?r`<div class="pill danger">${e.lastError}</div>`:y}
            ${o?Dg(e):y}
          </div>
        </section>

        ${e.tab==="overview"?iy({connected:e.connected,hello:e.hello,settings:e.settings,password:e.password,lastError:e.lastError,presenceCount:t,sessionsCount:n,cronEnabled:e.cronStatus?.enabled??null,cronNext:s,lastChannelsRefresh:e.channelsLastSuccess,onSettingsChange:c=>e.applySettings(c),onPasswordChange:c=>e.password=c,onSessionKeyChange:c=>{e.sessionKey=c,e.chatMessage="",e.resetToolStream(),e.applySettings({...e.settings,sessionKey:c,lastActiveSessionKey:c}),e.loadAssistantIdentity()},onConnect:()=>e.connect(),onRefresh:()=>e.loadOverview()}):y}

        ${e.tab==="channels"?pm({connected:e.connected,loading:e.channelsLoading,snapshot:e.channelsSnapshot,lastError:e.channelsError,lastSuccessAt:e.channelsLastSuccess,whatsappMessage:e.whatsappLoginMessage,whatsappQrDataUrl:e.whatsappLoginQrDataUrl,whatsappConnected:e.whatsappLoginConnected,whatsappBusy:e.whatsappBusy,configSchema:e.configSchema,configSchemaLoading:e.configSchemaLoading,configForm:e.configForm,configUiHints:e.configUiHints,configSaving:e.configSaving,configFormDirty:e.configFormDirty,selectedChannelId:e.channelsSelectedChannelId,nostrProfileFormState:e.nostrProfileFormState,nostrProfileAccountId:e.nostrProfileAccountId,onRefresh:c=>_e(e,c),onChannelSelect:c=>{e.channelsSelectedChannelId=c},onWhatsAppStart:c=>e.handleWhatsAppStart(c),onWhatsAppWait:()=>e.handleWhatsAppWait(),onWhatsAppLogout:()=>e.handleWhatsAppLogout(),onConfigPatch:(c,p)=>Ot(e,c,p),onConfigSave:()=>e.handleChannelConfigSave(),onConfigReload:()=>e.handleChannelConfigReload(),onNostrProfileEdit:(c,p)=>e.handleNostrProfileEdit(c,p),onNostrProfileCancel:()=>e.handleNostrProfileCancel(),onNostrProfileFieldChange:(c,p)=>e.handleNostrProfileFieldChange(c,p),onNostrProfileSave:()=>e.handleNostrProfileSave(),onNostrProfileImport:()=>e.handleNostrProfileImport(),onNostrProfileToggleAdvanced:()=>e.handleNostrProfileToggleAdvanced()}):y}

        ${e.tab==="sessions"?my({loading:e.sessionsLoading,result:e.sessionsResult,error:e.sessionsError,activeMinutes:e.sessionsFilterActive,limit:e.sessionsFilterLimit,includeGlobal:e.sessionsIncludeGlobal,includeUnknown:e.sessionsIncludeUnknown,basePath:e.basePath,bulkMode:e.sessionsBulkMode,selectedKeys:e.sessionsSelectedKeys,onFiltersChange:c=>{e.sessionsFilterActive=c.activeMinutes,e.sessionsFilterLimit=c.limit,e.sessionsIncludeGlobal=c.includeGlobal,e.sessionsIncludeUnknown=c.includeUnknown},onRefresh:()=>Ne(e),onPatch:(c,p)=>Si(e,c,p),onDelete:c=>Gu(e,c),onBulkModeToggle:()=>{const c=!e.sessionsBulkMode;e.sessionsBulkMode=c,c||(e.sessionsSelectedKeys=[])},onSelectionChange:(c,p)=>{!c||c==="agent.main.main"||(p?e.sessionsSelectedKeys.includes(c)||(e.sessionsSelectedKeys=[...e.sessionsSelectedKeys,c]):e.sessionsSelectedKeys=e.sessionsSelectedKeys.filter(h=>h!==c))},onSelectAll:c=>{const p=c.filter(h=>h&&h!=="agent.main.main");e.sessionsSelectedKeys=Array.from(new Set(p))},onClearSelection:()=>{e.sessionsSelectedKeys=[]},onBulkDelete:async c=>{const p=c.filter(h=>h&&h!=="agent.main.main");p.length!==0&&(await Qu(e,p),e.sessionsSelectedKeys=[],e.sessionsBulkMode=!1)}}):y}

        ${e.tab==="usage"?Lb({loading:e.usageLoading,error:e.usageError,startDate:e.usageStartDate,endDate:e.usageEndDate,sessions:e.usageResult?.sessions??[],sessionsLimitReached:(e.usageResult?.sessions?.length??0)>=1e3,totals:e.usageResult?.totals??null,aggregates:e.usageResult?.aggregates??null,costDaily:e.usageCostSummary?.daily??[],selectedSessions:e.usageSelectedSessions,selectedDays:e.usageSelectedDays,selectedHours:e.usageSelectedHours,chartMode:e.usageChartMode,dailyChartMode:e.usageDailyChartMode,timeSeriesMode:e.usageTimeSeriesMode,timeSeriesBreakdownMode:e.usageTimeSeriesBreakdownMode,timeSeries:e.usageTimeSeries,timeSeriesLoading:e.usageTimeSeriesLoading,sessionLogs:e.usageSessionLogs,sessionLogsLoading:e.usageSessionLogsLoading,sessionLogsExpanded:e.usageSessionLogsExpanded,logFilterRoles:e.usageLogFilterRoles,logFilterTools:e.usageLogFilterTools,logFilterHasTools:e.usageLogFilterHasTools,logFilterQuery:e.usageLogFilterQuery,query:e.usageQuery,queryDraft:e.usageQueryDraft,sessionSort:e.usageSessionSort,sessionSortDir:e.usageSessionSortDir,recentSessions:e.usageRecentSessions,sessionsTab:e.usageSessionsTab,visibleColumns:e.usageVisibleColumns,timeZone:e.usageTimeZone,contextExpanded:e.usageContextExpanded,headerPinned:e.usageHeaderPinned,onStartDateChange:c=>{e.usageStartDate=c,e.usageSelectedDays=[],e.usageSelectedHours=[],e.usageSelectedSessions=[],Hl(e)},onEndDateChange:c=>{e.usageEndDate=c,e.usageSelectedDays=[],e.usageSelectedHours=[],e.usageSelectedSessions=[],Hl(e)},onRefresh:()=>Vr(e),onTimeZoneChange:c=>{e.usageTimeZone=c},onToggleContextExpanded:()=>{e.usageContextExpanded=!e.usageContextExpanded},onToggleSessionLogsExpanded:()=>{e.usageSessionLogsExpanded=!e.usageSessionLogsExpanded},onLogFilterRolesChange:c=>{e.usageLogFilterRoles=c},onLogFilterToolsChange:c=>{e.usageLogFilterTools=c},onLogFilterHasToolsChange:c=>{e.usageLogFilterHasTools=c},onLogFilterQueryChange:c=>{e.usageLogFilterQuery=c},onLogFilterClear:()=>{e.usageLogFilterRoles=[],e.usageLogFilterTools=[],e.usageLogFilterHasTools=!1,e.usageLogFilterQuery=""},onToggleHeaderPinned:()=>{e.usageHeaderPinned=!e.usageHeaderPinned},onSelectHour:(c,p)=>{if(p&&e.usageSelectedHours.length>0){const h=Array.from({length:24},(A,E)=>E),b=e.usageSelectedHours[e.usageSelectedHours.length-1],S=h.indexOf(b),C=h.indexOf(c);if(S!==-1&&C!==-1){const[A,E]=S<C?[S,C]:[C,S],T=h.slice(A,E+1);e.usageSelectedHours=[...new Set([...e.usageSelectedHours,...T])]}}else e.usageSelectedHours.includes(c)?e.usageSelectedHours=e.usageSelectedHours.filter(h=>h!==c):e.usageSelectedHours=[...e.usageSelectedHours,c]},onQueryDraftChange:c=>{e.usageQueryDraft=c,e.usageQueryDebounceTimer&&window.clearTimeout(e.usageQueryDebounceTimer),e.usageQueryDebounceTimer=window.setTimeout(()=>{e.usageQuery=e.usageQueryDraft,e.usageQueryDebounceTimer=null},250)},onApplyQuery:()=>{e.usageQueryDebounceTimer&&(window.clearTimeout(e.usageQueryDebounceTimer),e.usageQueryDebounceTimer=null),e.usageQuery=e.usageQueryDraft},onClearQuery:()=>{e.usageQueryDebounceTimer&&(window.clearTimeout(e.usageQueryDebounceTimer),e.usageQueryDebounceTimer=null),e.usageQueryDraft="",e.usageQuery=""},onSessionSortChange:c=>{e.usageSessionSort=c},onSessionSortDirChange:c=>{e.usageSessionSortDir=c},onSessionsTabChange:c=>{e.usageSessionsTab=c},onToggleColumn:c=>{e.usageVisibleColumns.includes(c)?e.usageVisibleColumns=e.usageVisibleColumns.filter(p=>p!==c):e.usageVisibleColumns=[...e.usageVisibleColumns,c]},onSelectSession:(c,p)=>{if(e.usageTimeSeries=null,e.usageSessionLogs=null,e.usageRecentSessions=[c,...e.usageRecentSessions.filter(h=>h!==c)].slice(0,8),p&&e.usageSelectedSessions.length>0){const h=e.usageChartMode==="tokens",S=[...e.usageResult?.sessions??[]].toSorted((T,_)=>{const N=h?T.usage?.totalTokens??0:T.usage?.totalCost??0;return(h?_.usage?.totalTokens??0:_.usage?.totalCost??0)-N}).map(T=>T.key),C=e.usageSelectedSessions[e.usageSelectedSessions.length-1],A=S.indexOf(C),E=S.indexOf(c);if(A!==-1&&E!==-1){const[T,_]=A<E?[A,E]:[E,A],N=S.slice(T,_+1),O=[...new Set([...e.usageSelectedSessions,...N])];e.usageSelectedSessions=O}}else e.usageSelectedSessions.length===1&&e.usageSelectedSessions[0]===c?e.usageSelectedSessions=[]:e.usageSelectedSessions=[c];e.usageSelectedSessions.length===1&&(Rg(e,e.usageSelectedSessions[0]),Ng(e,e.usageSelectedSessions[0]))},onSelectDay:(c,p)=>{if(p&&e.usageSelectedDays.length>0){const h=(e.usageCostSummary?.daily??[]).map(A=>A.date),b=e.usageSelectedDays[e.usageSelectedDays.length-1],S=h.indexOf(b),C=h.indexOf(c);if(S!==-1&&C!==-1){const[A,E]=S<C?[S,C]:[C,S],T=h.slice(A,E+1),_=[...new Set([...e.usageSelectedDays,...T])];e.usageSelectedDays=_}}else e.usageSelectedDays.includes(c)?e.usageSelectedDays=e.usageSelectedDays.filter(h=>h!==c):e.usageSelectedDays=[c]},onChartModeChange:c=>{e.usageChartMode=c},onDailyChartModeChange:c=>{e.usageDailyChartMode=c},onTimeSeriesModeChange:c=>{e.usageTimeSeriesMode=c},onTimeSeriesBreakdownChange:c=>{e.usageTimeSeriesBreakdownMode=c},onClearDays:()=>{e.usageSelectedDays=[]},onClearHours:()=>{e.usageSelectedHours=[]},onClearSessions:()=>{e.usageSelectedSessions=[],e.usageTimeSeries=null,e.usageSessionLogs=null},onClearFilters:()=>{e.usageSelectedDays=[],e.usageSelectedHours=[],e.usageSelectedSessions=[],e.usageTimeSeries=null,e.usageSessionLogs=null}}):y}

        ${e.tab==="cron"||e.tab==="scheduledTasks"?pv({basePath:e.basePath,loading:e.cronLoading,status:e.cronStatus,jobs:e.cronJobs,error:e.cronError,busy:e.cronBusy,form:e.cronForm,channels:e.channelsSnapshot?.channelMeta?.length?e.channelsSnapshot.channelMeta.map(c=>c.id):e.channelsSnapshot?.channelOrder??[],channelLabels:e.channelsSnapshot?.channelLabels??{},channelMeta:e.channelsSnapshot?.channelMeta??[],runsJobId:e.cronRunsJobId,runs:e.cronRuns,onFormChange:c=>e.cronForm={...e.cronForm,...c},onRefresh:()=>e.loadCron(),onAdd:()=>mi(e),onToggle:(c,p)=>fi(e,c,p),onRun:c=>hi(e,c),onRemove:c=>vi(e,c),onLoadRuns:c=>pn(e,c),onShowHistory:c=>{e.setTab("cronHistory"),pn(e,c)}}):y}

        ${e.tab==="cronHistory"?gv({basePath:e.basePath,loading:e.cronLoading,status:e.cronStatus,jobs:e.cronJobs,error:e.cronError,busy:e.cronBusy,form:e.cronForm,channels:e.channelsSnapshot?.channelMeta?.length?e.channelsSnapshot.channelMeta.map(c=>c.id):e.channelsSnapshot?.channelOrder??[],channelLabels:e.channelsSnapshot?.channelLabels??{},channelMeta:e.channelsSnapshot?.channelMeta??[],runsJobId:e.cronRunsJobId,runs:e.cronRuns,onFormChange:c=>e.cronForm={...e.cronForm,...c},onRefresh:()=>e.loadCron(),onAdd:()=>mi(e),onToggle:(c,p)=>fi(e,c,p),onRun:c=>hi(e,c),onRemove:c=>vi(e,c),onLoadRuns:c=>pn(e,c),onShowHistory:c=>{e.setTab("cronHistory"),pn(e,c)}}):y}

        ${e.tab==="employeeMarket"?(()=>{const c=async()=>{e.employeeMarketLoading=!0,e.employeeMarketError=null;try{const p=e.employeeMarketCategory&&e.employeeMarketCategory!=="__all__"?e.employeeMarketCategory:void 0;e.employeeMarketItems=await aa({q:e.employeeMarketQuery,category:p},{gatewayHost:e.settings?.gatewayUrl?.trim(),token:e.settings?.token?.trim()});const h=e.employeeMarketItems,b=new Set,S={};for(const C of h)if(C.installed&&C.localId){const A=String(C.id);(typeof C.id!="string"||!A.startsWith("local:"))&&(b.add(A),S[A]=C.localId)}e.employeeMarketInstalledRemoteIds=b,e.employeeMarketRemoteToLocal=S}catch(p){e.employeeMarketError=p?.message?String(p.message):String(p)}finally{e.employeeMarketLoading=!1}};return!e.employeeMarketLoadedOnce&&!e.employeeMarketLoading&&(e.employeeMarketLoadedOnce=!0,queueMicrotask(()=>{c()})),Ev({loading:e.employeeMarketLoading,error:e.employeeMarketError,query:e.employeeMarketQuery,category:e.employeeMarketCategory,items:e.employeeMarketItems,selectedId:e.employeeMarketSelectedId,selectedDetail:e.employeeMarketSelectedDetail,onQueryChange:p=>e.employeeMarketQuery=p,onCategoryChange:p=>e.employeeMarketCategory=p,onRefresh:async()=>{await c()},onSelect:async p=>{e.employeeMarketSelectedId=p,e.employeeMarketSelectedDetail=null,e.employeeMarketError=null;try{e.employeeMarketSelectedDetail=await bv(p,{gatewayHost:e.settings?.gatewayUrl?.trim(),token:e.settings?.token?.trim()})}catch(h){e.employeeMarketError=h?.message?String(h.message):String(h)}},onDetailClose:()=>{e.employeeMarketSelectedId=null,e.employeeMarketSelectedDetail=null},onAdd:()=>{e.digitalEmployeeCreateModalOpen=!0,e.digitalEmployeeAdvancedOpen=!1,e.digitalEmployeeCreateMcpMode="builder",e.digitalEmployeeCreateMcpJson="",e.digitalEmployeeCreateMcpItems=[],e.digitalEmployeeSkillUploadName="",e.digitalEmployeeSkillUploadFiles=[],e.digitalEmployeeSkillUploadError=null},onInstall:async(p,h)=>{const b=String(p);e.employeeMarketInstallingId=b,e.employeeMarketError=null;try{const S=await oa({kind:"employee",id:b,type:h??void 0,category:h??void 0},{gatewayHost:e.settings?.gatewayUrl?.trim(),token:e.settings?.token?.trim()});e.employeeMarketInstalledRemoteIds=new Set([...e.employeeMarketInstalledRemoteIds,b]),S?.id&&(e.employeeMarketRemoteToLocal={...e.employeeMarketRemoteToLocal,[b]:S.id}),await c()}catch(S){e.employeeMarketError=S?.message??String(S)}finally{e.employeeMarketInstallingId=null}},onDelete:async p=>{if(e.employeeMarketError=null,e.digitalEmployeesError=null,await Ci(e,p),e.digitalEmployeesError)e.employeeMarketError=e.digitalEmployeesError;else{const h=Object.entries(e.employeeMarketRemoteToLocal).filter(([,S])=>S===p).map(([S])=>S),b={...e.employeeMarketRemoteToLocal};for(const S of h)delete b[S];e.employeeMarketRemoteToLocal=b,e.employeeMarketInstalledRemoteIds=new Set([...e.employeeMarketInstalledRemoteIds].filter(S=>!h.includes(S))),await c(),e.employeeMarketSelectedId=null,e.employeeMarketSelectedDetail=null}},onOpenEmployee:async p=>{const h=p.trim()||"default";await Ne(e,{activeMinutes:10080,limit:200,includeLastMessage:!0});const b=e.sessionsResult?.sessions??[],S=[`agent:main:employee:${h}:`,`agent:main:employee-${h}`,`employee:${h}:`,`employee-${h}`],C=b.find(E=>S.some(T=>E.key.includes(T)||E.key===T)),A=C?C.key:`agent:main:employee:${h}:run:${Ie()}`;e.sessionKey=A,e.chatMessage="",e.chatAttachments=[],e.chatStream=null,e.chatStreamStartedAt=null,e.chatRunId=null,e.chatQueue=[],e.resetToolStream(),e.resetChatScroll(),e.applySettings({...e.settings,sessionKey:A,lastActiveSessionKey:A}),e.loadAssistantIdentity(),et(e),yt(e),e.setTab("message"),C||e.handleSendChat("当前已开启数字员工会话。请以你配置的人设（如有）向用户打招呼，保持你的语气、风格和情绪。用 1～3 句话问候并询问用户想做什么。",{refreshSessions:!0})},onEdit:async p=>{const h=e.digitalEmployees.find(C=>C.id===p),b=await $a(e,p);if(!b){e.employeeMarketError="无法加载员工详情";return}const S=C=>{const A=[];if(!C||typeof C!="object")return A;for(const[E,T]of Object.entries(C)){const _=String(E??"").trim();if(!_)continue;const N=T,O=N&&typeof N=="object"&&!Array.isArray(N),Q=O&&typeof N.url=="string"&&N.url.trim()?"url":O&&typeof N.service=="string"&&N.service.trim()?"service":"stdio",R=O&&(Q==="stdio"&&typeof N.command=="string"&&N.command.trim()||Q==="url"&&typeof N.url=="string"&&N.url.trim()||Q==="service"&&typeof N.service=="string"&&N.service.trim()&&typeof N.serviceUrl=="string"&&N.serviceUrl.trim());A.push({id:Ie(),key:_,editMode:R?"form":"raw",connectionType:Q,draft:R?N:{command:"npx",args:[],env:{}},rawJson:O?JSON.stringify(N,null,2):"{}",rawError:null,collapsed:!0})}return A};e.digitalEmployeeEditModalOpen=!0,e.digitalEmployeeEditId=b.id,e.digitalEmployeeEditName=b.name||b.id,e.digitalEmployeeEditDescription=b.description??"",e.digitalEmployeeEditPrompt=b.prompt??"",e.digitalEmployeeEditMcpJson=b.mcpServers&&Object.keys(b.mcpServers).length>0?JSON.stringify(b.mcpServers,null,2):"",e.digitalEmployeeEditMcpMode="builder",e.digitalEmployeeEditMcpItems=S(b.mcpServers),e.digitalEmployeeEditSkillNames=h?.skillNames??h?.skillIds??b.skillIds??[],e.digitalEmployeeEditSkillFilesToUpload=[],e.digitalEmployeeEditSkillsToDelete=[],e.digitalEmployeeEditEnabled=b.enabled!==!1,e.digitalEmployeeEditError=null},installedIds:new Set(e.employeeMarketItems.filter(p=>typeof p.id=="string"&&String(p.id).startsWith("local:")).map(p=>String(p.id))),installedRemoteIds:e.employeeMarketInstalledRemoteIds,remoteToLocalMap:e.employeeMarketRemoteToLocal,installingId:e.employeeMarketInstallingId})})():y}

        ${e.tab==="employeeMarket"&&e.digitalEmployeeCreateModalOpen?(()=>{const c=async()=>{e.employeeMarketLoading=!0,e.employeeMarketError=null;try{const p=e.employeeMarketCategory&&e.employeeMarketCategory!=="__all__"?e.employeeMarketCategory:void 0;e.employeeMarketItems=await aa({q:e.employeeMarketQuery,category:p},{gatewayHost:e.settings?.gatewayUrl?.trim(),token:e.settings?.token?.trim()})}catch(p){e.employeeMarketError=p?.message?String(p.message):String(p)}finally{e.employeeMarketLoading=!1}};return Og({createModalOpen:e.digitalEmployeeCreateModalOpen,createName:e.digitalEmployeeCreateName,createDescription:e.digitalEmployeeCreateDescription,createPrompt:e.digitalEmployeeCreatePrompt,createError:e.digitalEmployeeCreateError,createBusy:e.digitalEmployeeCreateBusy,advancedOpen:e.digitalEmployeeAdvancedOpen,createMcpMode:e.digitalEmployeeCreateMcpMode,mcpJson:e.digitalEmployeeCreateMcpJson,mcpItems:e.digitalEmployeeCreateMcpItems??[],skillUploadName:e.digitalEmployeeSkillUploadName,skillUploadFiles:e.digitalEmployeeSkillUploadFiles??[],skillUploadError:e.digitalEmployeeSkillUploadError,onMcpJsonChange:p=>e.digitalEmployeeCreateMcpJson=p,onMcpModeChange:p=>e.digitalEmployeeCreateMcpMode=p,onMcpAddItem:()=>{const p=e.digitalEmployeeCreateMcpItems??[];e.digitalEmployeeCreateMcpItems=[...p,{id:Ie(),key:"",editMode:"form",connectionType:"stdio",draft:{command:"npx",args:[],env:{}},rawJson:"{}",rawError:null,collapsed:!1}]},onMcpRemoveItem:p=>{e.digitalEmployeeCreateMcpItems=(e.digitalEmployeeCreateMcpItems??[]).filter(h=>h.id!==p)},onMcpCollapsedChange:(p,h)=>{e.digitalEmployeeCreateMcpItems=(e.digitalEmployeeCreateMcpItems??[]).map(b=>b.id===p?{...b,collapsed:h}:b)},onMcpKeyChange:(p,h)=>{e.digitalEmployeeCreateMcpItems=(e.digitalEmployeeCreateMcpItems??[]).map(b=>b.id===p?{...b,key:h}:b)},onMcpEditModeChange:(p,h)=>{e.digitalEmployeeCreateMcpItems=(e.digitalEmployeeCreateMcpItems??[]).map(b=>b.id===p?{...b,editMode:h}:b)},onMcpConnectionTypeChange:(p,h)=>{e.digitalEmployeeCreateMcpItems=(e.digitalEmployeeCreateMcpItems??[]).map(b=>b.id===p?{...b,connectionType:h}:b)},onMcpFormPatch:(p,h)=>{e.digitalEmployeeCreateMcpItems=(e.digitalEmployeeCreateMcpItems??[]).map(b=>b.id===p?{...b,draft:{...b.draft??{},...h??{}}}:b)},onMcpRawChange:(p,h)=>{e.digitalEmployeeCreateMcpItems=(e.digitalEmployeeCreateMcpItems??[]).map(b=>b.id===p?{...b,rawJson:h,rawError:null}:b)},onCreateClose:()=>{e.digitalEmployeeCreateBusy||(e.digitalEmployeeCreateModalOpen=!1,e.digitalEmployeeCreateError=null,e.digitalEmployeeAdvancedOpen=!1,e.digitalEmployeeCreateMcpMode="builder",e.digitalEmployeeCreateMcpJson="",e.digitalEmployeeCreateMcpItems=[],e.digitalEmployeeSkillUploadName="",e.digitalEmployeeSkillUploadFiles=[],e.digitalEmployeeSkillUploadError=null)},onCreateNameChange:p=>e.digitalEmployeeCreateName=p,onCreateDescriptionChange:p=>e.digitalEmployeeCreateDescription=p,onCreatePromptChange:p=>e.digitalEmployeeCreatePrompt=p,onToggleAdvanced:()=>e.digitalEmployeeAdvancedOpen=!e.digitalEmployeeAdvancedOpen,onSkillUploadNameChange:p=>e.digitalEmployeeSkillUploadName=p,onSkillUploadFilesChange:p=>e.digitalEmployeeSkillUploadFiles=p??[],onCreateSubmit:async()=>{if(e.digitalEmployeeCreateMcpMode==="builder"){const p=e.digitalEmployeeCreateMcpItems??[],h={},b=new Set;let S=null;const C=p.map(A=>({...A,rawError:null}));for(let A=0;A<C.length;A++){const E=C[A],T=E.key?.trim()??"";if(T){if(b.has(T)){S??=`MCP key 重复：${T}`;continue}if(b.add(T),E.editMode==="raw"){const _=E.rawJson?.trim()??"";if(!_)continue;try{const N=JSON.parse(_);if(!N||typeof N!="object"||Array.isArray(N)){E.rawError="JSON 必须是对象",S??=`MCP ${T} 的 JSON 无效`;continue}h[T]=N}catch{E.rawError="JSON 格式无效",S??=`MCP ${T} 的 JSON 无效`;continue}}else{const _=E.draft??{};if(E.connectionType==="stdio"&&!_.command?.trim()){S??=`MCP ${T} 缺少 command`;continue}if(E.connectionType==="url"&&!_.url?.trim()){S??=`MCP ${T} 缺少 url`;continue}if(E.connectionType==="service"&&(!_.service?.trim()||!_.serviceUrl?.trim())){S??=`MCP ${T} 缺少 service/serviceUrl`;continue}h[T]=_}}}if(e.digitalEmployeeCreateMcpItems=C,e.digitalEmployeeCreateMcpJson=Object.keys(h).length>0?JSON.stringify(h,null,2):"",S){e.digitalEmployeeCreateError=S;return}}await Ai(e),e.digitalEmployeeCreateError||(e.digitalEmployeeCreateModalOpen=!1,e.digitalEmployeeAdvancedOpen=!1,c())}})})():y}

        ${e.tab==="skillLibrary"?(()=>{const c=async()=>{e.skillLibraryLoading=!0,e.skillLibraryError=null;try{const p=e.skillLibraryCategory&&e.skillLibraryCategory!=="__all__"?e.skillLibraryCategory:void 0,h=e.skillLibraryStatus&&e.skillLibraryStatus!=="__all__"?e.skillLibraryStatus:void 0;e.skillLibraryItems=await $v({q:e.skillLibraryQuery,category:p,status:h},{gatewayHost:e.settings?.gatewayUrl?.trim(),token:e.settings?.token?.trim()})}catch(p){e.skillLibraryError=p?.message?String(p.message):String(p)}finally{e.skillLibraryLoading=!1}};return!e.skillLibraryLoadedOnce&&!e.skillLibraryLoading&&(e.skillLibraryLoadedOnce=!0,queueMicrotask(()=>{c()})),by({loading:e.skillLibraryLoading,error:e.skillLibraryError,installSuccess:e.skillLibraryInstallSuccess,query:e.skillLibraryQuery,selectedCategory:e.skillLibraryCategory,selectedStatus:e.skillLibraryStatus,items:e.skillLibraryItems,selectedFolder:e.skillLibrarySelectedFolder,selectedDetail:e.skillLibrarySelectedDetail,installedKeys:new Set([...(e.skillsReport?.skills??[]).map(p=>p.skillKey),...(e.skillLibraryItems??[]).filter(p=>p.installed).map(p=>p.folder)]),disabledKeys:new Set((e.skillsReport?.skills??[]).filter(p=>p.disabled).map(p=>p.skillKey)),installingFolder:e.skillLibraryInstallingFolder,onInstall:async(p,h)=>{e.skillLibraryInstallingFolder=p,e.skillLibraryError=null,e.skillLibraryInstallSuccess=null;try{const b=await oa({kind:"skill",id:p,type:h,category:h},{gatewayHost:e.settings?.gatewayUrl?.trim(),token:e.settings?.token?.trim()});await An(e),await c();const S=b?.id??p,C=(b?.type??b?.category??h??"").trim();e.skillLibraryInstallSuccess=C?`安装成功：${S}（${C}）`:`安装成功：${S}`,setTimeout(()=>{e.skillLibraryInstallSuccess=null},5e3)}catch(b){e.skillLibraryError=b?.message??String(b)}finally{e.skillLibraryInstallingFolder=null}},onDelete:async p=>{e.skillLibraryError=null,await xp(e,p),e.skillsError?e.skillLibraryError=e.skillsError:(await c(),e.skillLibrarySelectedFolder=null,e.skillLibrarySelectedDetail=null)},onToggleEnabled:async(p,h)=>{e.skillLibraryError=null,await yp(e,p,h),e.skillsError?e.skillLibraryError=e.skillsError:await c()},onQueryChange:p=>e.skillLibraryQuery=p,onCategoryChange:p=>e.skillLibraryCategory=p,onStatusChange:p=>e.skillLibraryStatus=p,onRefresh:async()=>{await c()},onSelect:async p=>{if(e.skillLibrarySelectedFolder=p||null,e.skillLibrarySelectedDetail=null,e.skillLibraryError=null,!!p)try{e.skillLibrarySelectedDetail=await kv(p,{gatewayHost:e.settings?.gatewayUrl?.trim(),token:e.settings?.token?.trim()})}catch(h){e.skillLibraryError=h?.message?String(h.message):String(h)}},onDetailClose:()=>{e.skillLibrarySelectedFolder=null,e.skillLibrarySelectedDetail=null},addModalOpen:e.skillsAddModalOpen,uploadName:e.skillsUploadName,uploadFiles:e.skillsUploadFiles,uploadError:e.skillsUploadError,uploadTemplate:e.skillsUploadTemplate,uploadBusy:e.skillsUploadBusy,onAddClick:()=>{e.skillsAddModalOpen=!0,e.skillsUploadName="",e.skillsUploadFiles=[],e.skillsUploadError=null,e.skillsUploadTemplate=null},onAddClose:()=>{e.skillsAddModalOpen=!1,e.skillsUploadName="",e.skillsUploadFiles=[],e.skillsUploadError=null,e.skillsUploadTemplate=null},onUploadNameChange:p=>e.skillsUploadName=p,onUploadFilesChange:p=>e.skillsUploadFiles=p??[],onUploadSubmit:async()=>{const p=e.skillsUploadFiles??[],h=e.skillsUploadName?.trim()??"";if(p.length===0)return;e.skillsUploadBusy=!0,e.skillsUploadError=null,e.skillLibraryError=null;const b=e.settings?.gatewayUrl?.trim();if(!b){e.skillsUploadError="Gateway URL 未配置",e.skillsUploadBusy=!1;return}const S={gatewayUrl:b,token:e.settings?.token?.trim()};try{for(let C=0;C<p.length;C++){const A=p[C],E=p.length>1?A.name.replace(/\.(zip|md)$/i,"").replace(/[^a-zA-Z0-9_-]/g,"-"):h||A.name.replace(/\.(zip|md)$/i,"").replace(/[^a-zA-Z0-9_-]/g,"-");if(!E){e.skillsUploadError="技能名称不能为空";break}const T=await bp(S,E,A);if(!T.ok){e.skillsUploadError=T.error??"上传失败",e.skillsUploadTemplate=T.template??null;break}}e.skillsUploadError||(e.skillsAddModalOpen=!1,e.skillsUploadName="",e.skillsUploadFiles=[],e.skillsUploadTemplate=null,await An(e))}finally{e.skillsUploadBusy=!1}}})})():y}

        ${e.tab==="toolLibrary"?(()=>{const c=async()=>{e.toolLibraryLoading=!0,e.toolLibraryError=null;try{e.toolLibraryItems=await xv({q:e.toolLibraryQuery},{gatewayHost:e.settings?.gatewayUrl?.trim(),token:e.settings?.token?.trim()});const b=e.toolLibraryItems,S=new Set,C=new Map;for(const A of b)A.installed&&A.serverKey&&(S.add(String(A.id)),C.set(A.id,A.serverKey));e.toolLibraryInstalledRemoteIds=S,e.toolLibraryInstalledMcpMap=C}catch(b){e.toolLibraryError=b?.message?String(b.message):String(b)}finally{e.toolLibraryLoading=!1}};!e.toolLibraryLoadedOnce&&!e.toolLibraryLoading&&(e.toolLibraryLoadedOnce=!0,queueMicrotask(()=>{c()}));const p=e.configSnapshot?.config?.mcp?.servers??{},h=new Set;for(const[b,S]of Object.entries(p))S?.enabled===!1&&h.add(b);return Ey({loading:e.toolLibraryLoading,error:e.toolLibraryError,query:e.toolLibraryQuery,category:e.toolLibraryCategory,onCategoryChange:b=>e.toolLibraryCategory=b,items:e.toolLibraryItems,addModalOpen:e.mcpAddModalOpen,addName:e.mcpAddName,addDraft:e.mcpAddDraft??{},addConnectionType:e.mcpAddConnectionType,addEditMode:e.mcpAddEditMode,addRawJson:e.mcpAddRawJson,addRawError:e.mcpAddRawError,saving:e.configSaving,onAddServer:()=>Ib(e),onAddClose:()=>Db(e),onAddNameChange:b=>Rb(e,b),onAddFormPatch:b=>Nb(e,b),onAddRawChange:b=>Ob(e,b),onAddConnectionTypeChange:b=>Ub(e,b),onAddEditModeChange:b=>Fb(e,b),onAddSubmit:async()=>{await Bb(e),await Z(e)},selectedId:e.toolLibrarySelectedId,selectedDetail:e.toolLibrarySelectedDetail,installedRemoteIds:e.toolLibraryInstalledRemoteIds,disabledMcpKeys:h,installingId:e.toolLibraryInstallingId,installedMcpMap:e.toolLibraryInstalledMcpMap,onInstall:async(b,S)=>{e.toolLibraryInstallingId=b,e.toolLibraryError=null;try{const C=await oa({kind:"mcp",id:String(b),type:S,category:S},{gatewayHost:e.settings?.gatewayUrl?.trim(),token:e.settings?.token?.trim()});C?.id&&(e.toolLibraryInstalledRemoteIds=new Set([...e.toolLibraryInstalledRemoteIds,String(b)]),e.toolLibraryInstalledMcpMap=new Map(e.toolLibraryInstalledMcpMap).set(b,C.id)),await Z(e),await c()}catch(C){e.toolLibraryError=C?.message??String(C)}finally{e.toolLibraryInstallingId=null}},onDelete:async b=>{e.toolLibraryError=null,Qb(e,b);let S=null;for(const[C,A]of e.toolLibraryInstalledMcpMap)if(A===b){S=C;break}if(S!=null){e.toolLibraryInstalledRemoteIds=new Set([...e.toolLibraryInstalledRemoteIds].filter(A=>A!==String(S)));const C=new Map(e.toolLibraryInstalledMcpMap);C.delete(S),e.toolLibraryInstalledMcpMap=C}await c(),e.toolLibrarySelectedId=null,e.toolLibrarySelectedDetail=null},onToggleEnabled:async(b,S)=>{e.toolLibraryError=null,qb(e,b,S),await c()},onEdit:b=>{!e.configForm&&e.configSnapshot?.config&&(e.configForm=X(e.configSnapshot.config)),zb(e,b),e.toolLibraryMcpEditModalOpen=!0,e.toolLibraryMcpEditServerKey=b},onQueryChange:b=>e.toolLibraryQuery=b,onRefresh:async()=>{await c()},onSelect:async b=>{e.toolLibrarySelectedId=b,e.toolLibrarySelectedDetail=null,e.toolLibraryError=null;try{e.toolLibrarySelectedDetail=await wv(b,{gatewayHost:e.settings?.gatewayUrl?.trim(),token:e.settings?.token?.trim()})}catch(S){e.toolLibraryError=S?.message?String(S.message):String(S)}},onDetailClose:()=>{e.toolLibrarySelectedId=null,e.toolLibrarySelectedDetail=null}})})():y}

        ${e.tab==="tutorials"?(()=>{const c=async()=>{e.tutorialsLoading=!0,e.tutorialsError=null;try{e.tutorialCategories=await Sv({gatewayHost:e.settings?.gatewayUrl?.trim(),token:e.settings?.token?.trim()}),!e.tutorialsSelectedCategoryId&&e.tutorialCategories.length?e.tutorialsSelectedCategoryId=e.tutorialCategories[0]?.id??null:e.tutorialsSelectedCategoryId&&(e.tutorialCategories.some(h=>h.id===e.tutorialsSelectedCategoryId)||(e.tutorialsSelectedCategoryId=e.tutorialCategories[0]?.id??null))}catch(p){e.tutorialsError=p?.message?String(p.message):String(p)}finally{e.tutorialsLoading=!1}};return!e.tutorialsLoadedOnce&&!e.tutorialsLoading&&(e.tutorialsLoadedOnce=!0,queueMicrotask(()=>{c()})),Iy({loading:e.tutorialsLoading,error:e.tutorialsError,categories:e.tutorialCategories,query:e.tutorialsQuery,selectedCategoryId:e.tutorialsSelectedCategoryId,playingLink:e.tutorialsPlayingLink,onQueryChange:p=>e.tutorialsQuery=p,onSelectCategory:p=>e.tutorialsSelectedCategoryId=p,onLessonClick:p=>{Dc(p)?e.tutorialsPlayingLink=p:window.open(p,"_blank","noopener,noreferrer")},onPlayingClose:()=>e.tutorialsPlayingLink=null,onRefresh:async()=>{await c()}})})():y}

        ${e.tab==="aboutUs"?Ny({basePath:m,uninstallModalOpen:e.aboutUninstallModalOpen,uninstallMode:e.aboutUninstallMode,uninstallLoading:e.aboutUninstallLoading,uninstallError:e.aboutUninstallError,onOpenUninstallModal:()=>{e.aboutUninstallModalOpen=!0,e.aboutUninstallError=null,e.aboutUninstallMode="program"},onCloseUninstallModal:()=>{e.aboutUninstallModalOpen=!1,e.aboutUninstallError=null},onUninstallModeChange:c=>{e.aboutUninstallMode=c},onConfirmUninstall:async()=>{const c=e.settings?.gatewayUrl?.trim();if(!c){e.aboutUninstallError="请先在 Overview 中配置 Gateway URL。";return}e.aboutUninstallLoading=!0,e.aboutUninstallError=null;try{const p=e.settings?.token?.trim()??"",h=await Dy({gatewayHost:c,token:p,mode:e.aboutUninstallMode});if(!h.ok){e.aboutUninstallError=[h.message,h.detail].filter(Boolean).join(" — ");return}e.aboutUninstallModalOpen=!1,window.alert(h.message??"已安排卸载，桌面应用将自动退出。");try{window.close()}catch{}}catch(p){e.aboutUninstallError=p instanceof Error?p.message:String(p)}finally{e.aboutUninstallLoading=!1}}}):y}

        ${e.tab==="llmTrace"?Hy({loading:e.llmTraceLoading,result:e.llmTraceResult,error:e.llmTraceError,mode:e.llmTraceMode,search:e.llmTraceSearch,enabled:e.llmTraceEnabled,saving:e.llmTraceSaving,viewContent:e.llmTraceViewContent,viewingSessionId:e.llmTraceViewingSessionId,viewLoading:e.llmTraceViewLoading,onRefresh:()=>tp(e),onModeChange:c=>np(e,c),onSearchChange:c=>sp(e,c),onToggleEnabled:()=>ap(e),onView:c=>op(e,c),onBack:()=>ip(e),onDownload:c=>lp(e,c)}):y}

        ${e.tab==="sandbox"?jy({security:e.securityForm??ka(e)??{},saving:e.configSaving,pendingApprovalsCount:(e.approvalsResult?.pending??e.approvalsResult?.entries??[]).filter(c=>c.status==="pending"&&!c.expired).length,onPresetApply:c=>pp(e,c),onPatch:(c,p)=>{e.securityForm||(e.securityForm=ro(e)??{}),gp(e,e.securityForm,c,p)},onSave:()=>mp(e,e.securityForm??ka(e)??{}),pathForTab:c=>Ln(c,e.basePath),approvalsLoading:e.approvalsLoading,approvalsResult:e.approvalsResult,approvalsError:e.approvalsError,onApprovalsRefresh:()=>_n(e),onApprove:c=>fp(e,c,"ui"),onDeny:(c,p)=>hp(e,c,"ui",p),onWhitelistSession:c=>vp(e,c,"ui")}):y}

        ${e.tab==="nodes"?Rv({loading:e.nodesLoading,nodes:e.nodes,devicesLoading:e.devicesLoading,devicesError:e.devicesError,devicesList:e.devicesList,configForm:e.configForm??e.configSnapshot?.config,configLoading:e.configLoading,configSaving:e.configSaving,configDirty:e.configFormDirty,configFormMode:e.configFormMode,execApprovalsLoading:e.execApprovalsLoading,execApprovalsSaving:e.execApprovalsSaving,execApprovalsDirty:e.execApprovalsDirty,execApprovalsSnapshot:e.execApprovalsSnapshot,execApprovalsForm:e.execApprovalsForm,execApprovalsSelectedAgent:e.execApprovalsSelectedAgent,execApprovalsTarget:e.execApprovalsTarget,execApprovalsTargetNodeId:e.execApprovalsTargetNodeId,onRefresh:()=>bs(e),onDevicesRefresh:()=>it(e),onDeviceApprove:c=>Uu(e,c),onDeviceReject:c=>Ou(e,c),onDeviceRotate:(c,p,h)=>Fu(e,{deviceId:c,role:p,scopes:h}),onDeviceRevoke:(c,p)=>Bu(e,{deviceId:c,role:p}),onLoadConfig:()=>Z(e),onLoadExecApprovals:()=>{const c=e.execApprovalsTarget==="node"&&e.execApprovalsTargetNodeId?{kind:"node",nodeId:e.execApprovalsTargetNodeId}:{kind:"gateway"};return io(e,c)},onBindDefault:c=>{c?Ot(e,["tools","exec","node"],c):ri(e,["tools","exec","node"])},onBindAgent:(c,p)=>{const h=["agents","list",c,"tools","exec","node"];p?Ot(e,h,p):ri(e,h)},onSaveBindings:()=>fa(e),onExecApprovalsTargetChange:(c,p)=>{e.execApprovalsTarget=c,e.execApprovalsTargetNodeId=p,e.execApprovalsSnapshot=null,e.execApprovalsForm=null,e.execApprovalsDirty=!1,e.execApprovalsSelectedAgent=null},onExecApprovalsSelectAgent:c=>{e.execApprovalsSelectedAgent=c},onExecApprovalsPatch:(c,p)=>ju(e,c,p),onExecApprovalsRemove:c=>Wu(e,c),onSaveExecApprovals:()=>{const c=e.execApprovalsTarget==="node"&&e.execApprovalsTargetNodeId?{kind:"node",nodeId:e.execApprovalsTargetNodeId}:{kind:"gateway"};return qu(e,c)}}):y}

        ${o?Rh({sessionKey:e.sessionKey,onSessionKeyChange:c=>{e.sessionKey=c,e.chatMessage="",e.chatAttachments=[],e.chatModelRef=null,e.chatStream=null,e.chatStreamStartedAt=null,e.chatRunId=null,e.chatQueue=[],e.resetToolStream(),e.resetChatScroll(),e.applySettings({...e.settings,sessionKey:c,lastActiveSessionKey:c}),e.loadAssistantIdentity(),et(e),yt(e)},thinkingLevel:e.chatThinkingLevel,showThinking:d,modelRef:e.chatModelRef,defaultModelRef:pa(g),modelOptions:(()=>{const c=g,p=pa(g),h=new Set,b=[],S=c?.agents?.defaults?.models;if(S&&typeof S=="object")for(const[A,E]of Object.entries(S)){const T=A.trim();if(!T||h.has(T))continue;h.add(T);const _=E&&typeof E=="object"&&"alias"in E&&typeof E.alias=="string"?E.alias.trim():"",N=_&&_!==T?`${_} (${T})`:T;b.push({value:T,label:N})}const C=c?.models?.providers;if(C&&typeof C=="object")for(const[A,E]of Object.entries(C)){const T=E&&typeof E=="object"?E.models:void 0;if(Array.isArray(T))for(const _ of T){const N=_?.id?.trim();if(!N)continue;const O=`${A}/${N}`;if(h.has(O))continue;h.add(O);const Q=_.name&&_.name!==N?`${_.name} (${O})`:O;b.push({value:O,label:Q})}}return p&&!h.has(p)&&b.unshift({value:p,label:p}),b.length===0&&b.push({value:p??"",label:p?`默认 (${p})`:"默认"}),b})(),onModelRefChange:c=>e.chatModelRef=c,loading:e.chatLoading,sending:e.chatSending,compactionStatus:e.compactionStatus,assistantAvatarUrl:f,messages:e.chatMessages,toolMessages:e.chatToolMessages,stream:e.chatStream,streamStartedAt:e.chatStreamStartedAt,draft:e.chatMessage,queue:e.chatQueue,connected:e.connected,canSend:e.connected,disabledReason:a,error:e.lastError,sessions:e.sessionsResult,focusMode:l,onRefresh:()=>(e.resetToolStream(),Promise.all([et(e),yt(e)])),onToggleFocusMode:()=>{e.onboarding||e.applySettings({...e.settings,chatFocusMode:!e.settings.chatFocusMode})},onChatScroll:c=>e.handleChatScroll(c),onDraftChange:c=>e.chatMessage=c,attachments:e.chatAttachments,onAttachmentsChange:c=>e.chatAttachments=c,onSend:()=>e.handleSendChat(),canAbort:!!e.chatRunId,onAbort:()=>{e.handleAbortChat()},onQueueRemove:c=>e.removeQueuedMessage(c),onNewSession:()=>e.handleSendChat("/new",{restoreDraft:!0}),showNewMessages:e.chatNewMessagesBelow,onScrollToBottom:()=>e.scrollToBottom(),sidebarOpen:e.sidebarOpen,sidebarContent:e.sidebarContent,sidebarError:e.sidebarError,splitRatio:e.splitRatio,onOpenSidebar:c=>e.handleOpenSidebar(c),onCloseSidebar:()=>e.handleCloseSidebar(),onSplitRatioChange:c=>e.handleSplitRatioChange(c),assistantName:e.assistantName,assistantAvatar:e.assistantAvatar}):y}

        ${e.tab==="digitalEmployee"?Fg({loading:e.digitalEmployeesLoading,employees:e.digitalEmployees,error:e.digitalEmployeesError,filter:e.digitalEmployeesFilter,viewMode:e.digitalEmployeesViewMode,onRefresh:()=>Qe(e),createModalOpen:e.digitalEmployeeCreateModalOpen,createName:e.digitalEmployeeCreateName,createDescription:e.digitalEmployeeCreateDescription,createPrompt:e.digitalEmployeeCreatePrompt,createError:e.digitalEmployeeCreateError,createBusy:e.digitalEmployeeCreateBusy,advancedOpen:e.digitalEmployeeAdvancedOpen,createMcpMode:e.digitalEmployeeCreateMcpMode,mcpJson:e.digitalEmployeeCreateMcpJson,mcpItems:e.digitalEmployeeCreateMcpItems??[],onFilterChange:c=>{e.digitalEmployeesFilter=c},onViewModeChange:c=>{e.digitalEmployeesViewMode=c},onCopy:async c=>{await Xu(e,c)},onMcpJsonChange:c=>{e.digitalEmployeeCreateMcpJson=c},onMcpModeChange:c=>{e.digitalEmployeeCreateMcpMode=c},onMcpAddItem:()=>{const c=e.digitalEmployeeCreateMcpItems??[];e.digitalEmployeeCreateMcpItems=[...c,{id:Ie(),key:"",editMode:"form",connectionType:"stdio",draft:{command:"npx",args:[],env:{}},rawJson:"{}",rawError:null,collapsed:!1}]},onMcpRemoveItem:c=>{e.digitalEmployeeCreateMcpItems=(e.digitalEmployeeCreateMcpItems??[]).filter(p=>p.id!==c)},onMcpCollapsedChange:(c,p)=>{e.digitalEmployeeCreateMcpItems=(e.digitalEmployeeCreateMcpItems??[]).map(h=>h.id===c?{...h,collapsed:p}:h)},onMcpKeyChange:(c,p)=>{e.digitalEmployeeCreateMcpItems=(e.digitalEmployeeCreateMcpItems??[]).map(h=>h.id===c?{...h,key:p}:h)},onMcpEditModeChange:(c,p)=>{e.digitalEmployeeCreateMcpItems=(e.digitalEmployeeCreateMcpItems??[]).map(h=>h.id===c?{...h,editMode:p}:h)},onMcpConnectionTypeChange:(c,p)=>{e.digitalEmployeeCreateMcpItems=(e.digitalEmployeeCreateMcpItems??[]).map(h=>h.id===c?{...h,connectionType:p}:h)},onMcpFormPatch:(c,p)=>{e.digitalEmployeeCreateMcpItems=(e.digitalEmployeeCreateMcpItems??[]).map(h=>h.id===c?{...h,draft:{...h.draft??{},...p??{}}}:h)},onMcpRawChange:(c,p)=>{e.digitalEmployeeCreateMcpItems=(e.digitalEmployeeCreateMcpItems??[]).map(h=>h.id===c?{...h,rawJson:p,rawError:null}:h)},skillUploadName:e.digitalEmployeeSkillUploadName,skillUploadFiles:e.digitalEmployeeSkillUploadFiles??[],skillUploadError:e.digitalEmployeeSkillUploadError,onCreateOpen:()=>{e.digitalEmployeeCreateModalOpen=!0,e.digitalEmployeeAdvancedOpen=!1,e.digitalEmployeeCreateMcpMode="builder",e.digitalEmployeeCreateMcpJson="",e.digitalEmployeeCreateMcpItems=[],e.digitalEmployeeSkillUploadName="",e.digitalEmployeeSkillUploadFiles=[],e.digitalEmployeeSkillUploadError=null},onCreateClose:()=>{e.digitalEmployeeCreateBusy||(e.digitalEmployeeCreateModalOpen=!1,e.digitalEmployeeCreateError=null,e.digitalEmployeeAdvancedOpen=!1,e.digitalEmployeeCreateMcpMode="builder",e.digitalEmployeeCreateMcpJson="",e.digitalEmployeeCreateMcpItems=[],e.digitalEmployeeSkillUploadName="",e.digitalEmployeeSkillUploadFiles=[],e.digitalEmployeeSkillUploadError=null)},onCreateNameChange:c=>{e.digitalEmployeeCreateName=c},onCreateDescriptionChange:c=>{e.digitalEmployeeCreateDescription=c},onCreatePromptChange:c=>{e.digitalEmployeeCreatePrompt=c},onCreateSubmit:async()=>{if(e.digitalEmployeeCreateMcpMode==="builder"){const c=e.digitalEmployeeCreateMcpItems??[],p={},h=new Set;let b=null;const S=c.map(C=>({...C,rawError:null}));for(let C=0;C<S.length;C++){const A=S[C],E=A.key?.trim()??"";if(E){if(h.has(E)){b??=`MCP key 重复：${E}`;continue}if(h.add(E),A.editMode==="raw"){const T=A.rawJson?.trim()??"";if(!T)continue;try{const _=JSON.parse(T);if(!_||typeof _!="object"||Array.isArray(_)){A.rawError="JSON 必须是对象",b??=`MCP ${E} 的 JSON 无效`;continue}p[E]=_}catch{A.rawError="JSON 格式无效",b??=`MCP ${E} 的 JSON 无效`;continue}}else{const T=A.draft??{};if(A.connectionType==="stdio"&&!T.command?.trim()){b??=`MCP ${E} 缺少 command`;continue}if(A.connectionType==="url"&&!T.url?.trim()){b??=`MCP ${E} 缺少 url`;continue}if(A.connectionType==="service"&&(!T.service?.trim()||!T.serviceUrl?.trim())){b??=`MCP ${E} 缺少 service/serviceUrl`;continue}p[E]=T}}}if(e.digitalEmployeeCreateMcpItems=S,e.digitalEmployeeCreateMcpJson=Object.keys(p).length>0?JSON.stringify(p,null,2):"",b){e.digitalEmployeeCreateError=b;return}}await Ai(e),e.digitalEmployeeCreateError||(e.digitalEmployeeCreateModalOpen=!1,e.digitalEmployeeAdvancedOpen=!1)},onToggleAdvanced:()=>{e.digitalEmployeeAdvancedOpen=!e.digitalEmployeeAdvancedOpen},onSkillUploadNameChange:c=>{e.digitalEmployeeSkillUploadName=c},onSkillUploadFilesChange:c=>{e.digitalEmployeeSkillUploadFiles=c??[]},onOpenEmployee:async c=>{const p=c.trim()||"default";await Ne(e,{activeMinutes:10080,limit:200,includeLastMessage:!0});const h=e.sessionsResult?.sessions??[],b=[`agent:main:employee:${p}:`,`agent:main:employee-${p}`,`employee:${p}:`,`employee-${p}`],S=h.find(A=>b.some(E=>A.key.includes(E)||A.key===E)),C=S?S.key:`agent:main:employee:${p}:run:${Ie()}`;e.sessionKey=C,e.chatMessage="",e.chatAttachments=[],e.chatStream=null,e.chatStreamStartedAt=null,e.chatRunId=null,e.chatQueue=[],e.resetToolStream(),e.resetChatScroll(),e.applySettings({...e.settings,sessionKey:C,lastActiveSessionKey:C}),e.loadAssistantIdentity(),et(e),yt(e),e.setTab("message"),S||e.handleSendChat("当前已开启数字员工会话。请以你配置的人设（如有）向用户打招呼，保持你的语气、风格和情绪。用 1～3 句话问候并询问用户想做什么。",{refreshSessions:!0})},onToggleEnabled:(c,p)=>Yu(e,c,p),onDelete:c=>Ci(e,c),onEdit:async c=>{const p=e.digitalEmployees.find(S=>S.id===c),h=await $a(e,c);if(!h){e.digitalEmployeesError="无法加载员工详情";return}const b=S=>{const C=[];if(!S||typeof S!="object")return C;for(const[A,E]of Object.entries(S)){const T=String(A??"").trim();if(!T)continue;const _=E,N=_&&typeof _=="object"&&!Array.isArray(_),O=N&&typeof _.url=="string"&&_.url.trim()?"url":N&&typeof _.service=="string"&&_.service.trim()?"service":"stdio",Q=N&&(O==="stdio"&&typeof _.command=="string"&&_.command.trim()||O==="url"&&typeof _.url=="string"&&_.url.trim()||O==="service"&&typeof _.service=="string"&&_.service.trim()&&typeof _.serviceUrl=="string"&&_.serviceUrl.trim());C.push({id:Ie(),key:T,editMode:Q?"form":"raw",connectionType:O,draft:Q?_:{command:"npx",args:[],env:{}},rawJson:N?JSON.stringify(_,null,2):"{}",rawError:null,collapsed:!0})}return C};e.digitalEmployeeEditModalOpen=!0,e.digitalEmployeeEditId=h.id,e.digitalEmployeeEditName=h.name||h.id,e.digitalEmployeeEditDescription=h.description??"",e.digitalEmployeeEditPrompt=h.prompt??"",e.digitalEmployeeEditMcpJson=h.mcpServers&&Object.keys(h.mcpServers).length>0?JSON.stringify(h.mcpServers,null,2):"",e.digitalEmployeeEditMcpMode="builder",e.digitalEmployeeEditMcpItems=b(h.mcpServers),e.digitalEmployeeEditSkillNames=p?.skillNames??p?.skillIds??h.skillIds??[],e.digitalEmployeeEditSkillFilesToUpload=[],e.digitalEmployeeEditSkillsToDelete=[],e.digitalEmployeeEditEnabled=h.enabled!==!1,e.digitalEmployeeEditError=null},editModalOpen:e.digitalEmployeeEditModalOpen,editId:e.digitalEmployeeEditId,editName:e.digitalEmployeeEditName,editDescription:e.digitalEmployeeEditDescription,editPrompt:e.digitalEmployeeEditPrompt,editMcpJson:e.digitalEmployeeEditMcpJson,editMcpMode:e.digitalEmployeeEditMcpMode,editMcpItems:e.digitalEmployeeEditMcpItems??[],onEditMcpModeChange:c=>{e.digitalEmployeeEditMcpMode=c},onEditMcpAddItem:()=>{const c=e.digitalEmployeeEditMcpItems??[];e.digitalEmployeeEditMcpItems=[...c,{id:Ie(),key:"",editMode:"form",connectionType:"stdio",draft:{command:"npx",args:[],env:{}},rawJson:"{}",rawError:null,collapsed:!1}]},onEditMcpRemoveItem:c=>{e.digitalEmployeeEditMcpItems=(e.digitalEmployeeEditMcpItems??[]).filter(p=>p.id!==c)},onEditMcpCollapsedChange:(c,p)=>{e.digitalEmployeeEditMcpItems=(e.digitalEmployeeEditMcpItems??[]).map(h=>h.id===c?{...h,collapsed:p}:h)},onEditMcpKeyChange:(c,p)=>{e.digitalEmployeeEditMcpItems=(e.digitalEmployeeEditMcpItems??[]).map(h=>h.id===c?{...h,key:p}:h)},onEditMcpEditModeChange:(c,p)=>{e.digitalEmployeeEditMcpItems=(e.digitalEmployeeEditMcpItems??[]).map(h=>h.id===c?{...h,editMode:p}:h)},onEditMcpConnectionTypeChange:(c,p)=>{e.digitalEmployeeEditMcpItems=(e.digitalEmployeeEditMcpItems??[]).map(h=>h.id===c?{...h,connectionType:p}:h)},onEditMcpFormPatch:(c,p)=>{e.digitalEmployeeEditMcpItems=(e.digitalEmployeeEditMcpItems??[]).map(h=>h.id===c?{...h,draft:{...h.draft??{},...p??{}}}:h)},onEditMcpRawChange:(c,p)=>{e.digitalEmployeeEditMcpItems=(e.digitalEmployeeEditMcpItems??[]).map(h=>h.id===c?{...h,rawJson:p,rawError:null}:h)},editSkillNames:e.digitalEmployeeEditSkillNames??[],editSkillFilesToUpload:e.digitalEmployeeEditSkillFilesToUpload??[],editSkillsToDelete:e.digitalEmployeeEditSkillsToDelete??[],editError:e.digitalEmployeeEditError,editBusy:e.digitalEmployeeEditBusy,onEditClose:()=>{e.digitalEmployeeEditBusy||(e.digitalEmployeeEditModalOpen=!1,e.digitalEmployeeEditError=null,e.digitalEmployeeEditMcpMode="raw",e.digitalEmployeeEditMcpItems=[])},onEditDescriptionChange:c=>{e.digitalEmployeeEditDescription=c},onEditPromptChange:c=>{e.digitalEmployeeEditPrompt=c},onEditMcpJsonChange:c=>{e.digitalEmployeeEditMcpJson=c},onEditSkillFilesChange:c=>{e.digitalEmployeeEditSkillFilesToUpload=c??[]},onEditSkillDelete:c=>{const p=e.digitalEmployeeEditSkillsToDelete??[];p.includes(c)||(e.digitalEmployeeEditSkillsToDelete=[...p,c])},onEditSkillUndoDelete:c=>{e.digitalEmployeeEditSkillsToDelete=(e.digitalEmployeeEditSkillsToDelete??[]).filter(p=>p!==c)},onEditSubmit:async()=>{if(e.digitalEmployeeEditMcpMode==="builder"){const c=e.digitalEmployeeEditMcpItems??[],p={},h=new Set;let b=null;const S=c.map(C=>({...C,rawError:null}));for(let C=0;C<S.length;C++){const A=S[C],E=A.key?.trim()??"";if(E){if(h.has(E)){b??=`MCP key 重复：${E}`;continue}if(h.add(E),A.editMode==="raw"){const T=A.rawJson?.trim()??"";if(!T)continue;try{const _=JSON.parse(T);if(!_||typeof _!="object"||Array.isArray(_)){A.rawError="JSON 必须是对象",b??=`MCP ${E} 的 JSON 无效`;continue}p[E]=_}catch{A.rawError="JSON 格式无效",b??=`MCP ${E} 的 JSON 无效`;continue}}else{const T=A.draft??{};if(A.connectionType==="stdio"&&!T.command?.trim()){b??=`MCP ${E} 缺少 command`;continue}if(A.connectionType==="url"&&!T.url?.trim()){b??=`MCP ${E} 缺少 url`;continue}if(A.connectionType==="service"&&(!T.service?.trim()||!T.serviceUrl?.trim())){b??=`MCP ${E} 缺少 service/serviceUrl`;continue}p[E]=T}}}if(e.digitalEmployeeEditMcpItems=S,e.digitalEmployeeEditMcpJson=Object.keys(p).length>0?JSON.stringify(p,null,2):"",b){e.digitalEmployeeEditError=b;return}}await Mi(e),e.digitalEmployeeEditError||(e.digitalEmployeeEditModalOpen=!1)}}):y}

        ${e.tab==="envVars"?iv({vars:e.configForm?.env?.vars??e.configSnapshot?.config?.env?.vars??{},dirty:e.configFormDirty,loading:e.configLoading,saving:e.configSaving,connected:e.connected,onVarsChange:c=>{Ot(e,["env","vars"],c)},onSave:async()=>{const p=e.configForm?.env?.vars??{},h={};for(const[C,A]of Object.entries(p))C.trim()&&(h[C.trim()]=A);Ot(e,["env","vars"],h);const S={...e.configForm?.env??e.configSnapshot?.config?.env??{},vars:h};await Pe(e,{env:S})},onReload:()=>Z(e)}):y}

        ${e.tab==="config"?av({raw:e.configRaw,originalRaw:e.configRawOriginal,valid:e.configValid,issues:e.configIssues,loading:e.configLoading,saving:e.configSaving,applying:e.configApplying,updating:e.updateRunning,connected:e.connected,schema:e.configSchema,schemaLoading:e.configSchemaLoading,uiHints:e.configUiHints,formMode:e.configFormMode,formValue:e.configForm,originalValue:e.configFormOriginal,searchQuery:e.configSearchQuery,activeSection:e.configActiveSection,activeSubsection:e.configActiveSubsection,onRawChange:c=>{e.configRaw=c},onFormModeChange:c=>e.configFormMode=c,onFormPatch:(c,p)=>Ot(e,c,p),onSearchChange:c=>e.configSearchQuery=c,onSectionChange:c=>{e.configActiveSection=c,e.configActiveSubsection=null},onSubsectionChange:c=>e.configActiveSubsection=c,onReload:()=>Z(e),onSave:()=>fa(e),onApply:()=>$d(e),onUpdate:()=>kd(e)}):y}

        ${e.tab==="models"?Gy({providers:e.configForm?.models?.providers??{},modelEnv:e.configForm?.env?.modelEnv??{},defaultModelRef:pa(e.configForm),loading:e.configLoading,saving:e.configSaving,selectedProvider:e.modelsSelectedProvider,viewMode:e.modelsViewMode,formDirty:e.modelsFormDirty,addProviderModalOpen:e.modelsAddProviderModalOpen,addProviderForm:e.modelsAddProviderForm,addModelModalOpen:e.modelsAddModelModalOpen,addModelForm:e.modelsAddModelForm,useModelModalOpen:e.modelsUseModelModalOpen,useModelModalProvider:e.modelsUseModelModalProvider,saveError:e.modelsSaveError,onRefresh:()=>Jb(e),onAddProvider:()=>Yb(e),onAddProviderModalClose:()=>Zb(e),onAddProviderFormChange:c=>Xb(e,c),onAddProviderSubmit:()=>ex(e),onSelect:c=>tx(e,c),onViewModeChange:c=>e.modelsViewMode=c,onPatch:(c,p)=>nx(e,c,p),onAddModel:c=>sx(e),onAddModelModalClose:()=>ax(e),onAddModelFormChange:c=>ox(e,c),onAddModelSubmit:c=>ix(e,c),onRemoveModel:(c,p)=>rx(e,c,p),onPatchModelEnv:(c,p,h)=>lx(e,c,p,h),onSave:()=>ux(e),onCancel:()=>px(e),onUseModelClick:c=>gx(e,c),onUseModelModalClose:()=>mx(e),onUseModel:(c,p)=>fx(e,c,p),onCancelUse:c=>hx(e,c)}):y}

        ${e.tab==="debug"?yv({loading:e.debugLoading,status:e.debugStatus,health:e.debugHealth,models:e.debugModels,heartbeat:e.debugHeartbeat,eventLog:e.eventLog,callMethod:e.debugCallMethod,callParams:e.debugCallParams,callResult:e.debugCallResult,callError:e.debugCallError,onCallMethodChange:c=>e.debugCallMethod=c,onCallParamsChange:c=>e.debugCallParams=c,onRefresh:()=>ys(e),onCall:()=>Gd(e)}):y}

        ${e.tab==="logs"?Dv({loading:e.logsLoading,error:e.logsError,file:e.logsFile,entries:e.logsEntries,filterText:e.logsFilterText,levelFilters:e.logsLevelFilters,autoFollow:e.logsAutoFollow,truncated:e.logsTruncated,onFilterTextChange:c=>e.logsFilterText=c,onLevelToggle:(c,p)=>{e.logsLevelFilters={...e.logsLevelFilters,[c]:p}},onToggleAutoFollow:c=>e.logsAutoFollow=c,onRefresh:()=>Qa(e,{reset:!0}),onExport:(c,p)=>e.exportLogs(c,p),onScroll:c=>e.handleLogsScroll(c)}):y}
      </main>
      ${_v(e)}
      ${Pv(e)}
      ${e.toolLibraryMcpEditModalOpen&&e.toolLibraryMcpEditServerKey?(()=>{const c=e.toolLibraryMcpEditServerKey,b=(e.configForm??e.configSnapshot?.config)?.mcp?.servers?.[c]??{};return Ay({open:!0,serverKey:c,entry:b,editMode:e.mcpEditMode,editConnectionType:e.mcpEditConnectionType,formDirty:e.mcpFormDirty,rawJson:e.mcpRawJson,rawError:e.mcpRawError,saving:e.configSaving,onFormPatch:(S,C)=>jb(e,S,C),onRawChange:(S,C)=>Wb(e,S,C),onEditModeChange:S=>e.mcpEditMode=S,onEditConnectionTypeChange:S=>Kb(e,S),onSave:()=>{Vb(e),e.toolLibraryMcpEditModalOpen=!1,e.toolLibraryMcpEditServerKey="",Z(e)},onCancel:()=>{Gb(e),e.toolLibraryMcpEditModalOpen=!1,e.toolLibraryMcpEditServerKey=""}})})():y}
      ${e.digitalEmployeeEditModalOpen?Ug({editModalOpen:!0,editId:e.digitalEmployeeEditId,editName:e.digitalEmployeeEditName,editDescription:e.digitalEmployeeEditDescription,editPrompt:e.digitalEmployeeEditPrompt,editMcpJson:e.digitalEmployeeEditMcpJson,editMcpMode:e.digitalEmployeeEditMcpMode,editMcpItems:e.digitalEmployeeEditMcpItems??[],onEditMcpModeChange:c=>{e.digitalEmployeeEditMcpMode=c},onEditMcpAddItem:()=>{const c=e.digitalEmployeeEditMcpItems??[];e.digitalEmployeeEditMcpItems=[...c,{id:Ie(),key:"",editMode:"form",connectionType:"stdio",draft:{command:"npx",args:[],env:{}},rawJson:"{}",rawError:null,collapsed:!1}]},onEditMcpRemoveItem:c=>{e.digitalEmployeeEditMcpItems=(e.digitalEmployeeEditMcpItems??[]).filter(p=>p.id!==c)},onEditMcpCollapsedChange:(c,p)=>{e.digitalEmployeeEditMcpItems=(e.digitalEmployeeEditMcpItems??[]).map(h=>h.id===c?{...h,collapsed:p}:h)},onEditMcpKeyChange:(c,p)=>{e.digitalEmployeeEditMcpItems=(e.digitalEmployeeEditMcpItems??[]).map(h=>h.id===c?{...h,key:p}:h)},onEditMcpEditModeChange:(c,p)=>{e.digitalEmployeeEditMcpItems=(e.digitalEmployeeEditMcpItems??[]).map(h=>h.id===c?{...h,editMode:p}:h)},onEditMcpConnectionTypeChange:(c,p)=>{e.digitalEmployeeEditMcpItems=(e.digitalEmployeeEditMcpItems??[]).map(h=>h.id===c?{...h,connectionType:p}:h)},onEditMcpFormPatch:(c,p)=>{e.digitalEmployeeEditMcpItems=(e.digitalEmployeeEditMcpItems??[]).map(h=>h.id===c?{...h,draft:{...h.draft??{},...p??{}}}:h)},onEditMcpRawChange:(c,p)=>{e.digitalEmployeeEditMcpItems=(e.digitalEmployeeEditMcpItems??[]).map(h=>h.id===c?{...h,rawJson:p,rawError:null}:h)},editSkillNames:e.digitalEmployeeEditSkillNames??[],editSkillFilesToUpload:e.digitalEmployeeEditSkillFilesToUpload??[],editSkillsToDelete:e.digitalEmployeeEditSkillsToDelete??[],editError:e.digitalEmployeeEditError,editBusy:e.digitalEmployeeEditBusy,onEditClose:()=>{e.digitalEmployeeEditBusy||(e.digitalEmployeeEditModalOpen=!1,e.digitalEmployeeEditError=null,e.digitalEmployeeEditMcpMode="raw",e.digitalEmployeeEditMcpItems=[])},onEditDescriptionChange:c=>{e.digitalEmployeeEditDescription=c},onEditPromptChange:c=>{e.digitalEmployeeEditPrompt=c},onEditMcpJsonChange:c=>{e.digitalEmployeeEditMcpJson=c},onEditSkillFilesChange:c=>{e.digitalEmployeeEditSkillFilesToUpload=c??[]},onEditSkillDelete:c=>{const p=e.digitalEmployeeEditSkillsToDelete??[];p.includes(c)||(e.digitalEmployeeEditSkillsToDelete=[...p,c])},onEditSkillUndoDelete:c=>{e.digitalEmployeeEditSkillsToDelete=(e.digitalEmployeeEditSkillsToDelete??[]).filter(p=>p!==c)},onEditSubmit:async()=>{if(e.digitalEmployeeEditMcpMode==="builder"){const c=e.digitalEmployeeEditMcpItems??[],p={},h=new Set;let b=null;const S=c.map(C=>({...C,rawError:null}));for(let C=0;C<S.length;C++){const A=S[C],E=A.key?.trim()??"";if(E){if(h.has(E)){b??=`MCP key 重复：${E}`;continue}if(h.add(E),A.editMode==="raw"){const T=A.rawJson?.trim()??"";if(!T)continue;try{const _=JSON.parse(T);if(!_||typeof _!="object"||Array.isArray(_)){A.rawError="JSON 必须是对象",b??=`MCP ${E} 的 JSON 无效`;continue}p[E]=_}catch{A.rawError="JSON 格式无效",b??=`MCP ${E} 的 JSON 无效`;continue}}else{const T=A.draft??{};if(A.connectionType==="stdio"&&!T.command?.trim()){b??=`MCP ${E} 缺少 command`;continue}if(A.connectionType==="url"&&!T.url?.trim()){b??=`MCP ${E} 缺少 url`;continue}if(A.connectionType==="service"&&(!T.service?.trim()||!T.serviceUrl?.trim())){b??=`MCP ${E} 缺少 service/serviceUrl`;continue}p[E]=T}}}if(e.digitalEmployeeEditMcpItems=S,e.digitalEmployeeEditMcpJson=Object.keys(p).length>0?JSON.stringify(p,null,2):"",b){e.digitalEmployeeEditError=b;return}}if(await Mi(e),!e.digitalEmployeeEditError&&(e.digitalEmployeeEditModalOpen=!1,Qe(e),e.tab==="employeeMarket")){e.employeeMarketError=null;const c=e.employeeMarketCategory&&e.employeeMarketCategory!=="__all__"?e.employeeMarketCategory:void 0;aa({q:e.employeeMarketQuery,category:c},{gatewayHost:e.settings?.gatewayUrl?.trim(),token:e.settings?.token?.trim()}).then(p=>e.employeeMarketItems=p)}}}):y}
    </div>
  `}var $x=Object.defineProperty,kx=Object.getOwnPropertyDescriptor,w=(e,t,n,s)=>{for(var a=s>1?void 0:s?kx(t,n):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(a=(s?l(t,n,a):l(a))||a);return s&&a&&$x(t,n,a),a};const ga=bg();function Sx(){if(!window.location.search)return!1;const t=new URLSearchParams(window.location.search).get("onboarding");if(!t)return!1;const n=t.trim().toLowerCase();return n==="1"||n==="true"||n==="yes"||n==="on"}let x=class extends qt{constructor(){super(...arguments),this.settings=kp(),this.password="",this.tab="message",this.onboarding=Sx(),this.connected=!1,this.theme=this.settings.theme??"light",this.themeResolved="dark",this.hello=null,this.lastError=null,this.eventLog=[],this.eventLogBuffer=[],this.toolStreamSyncTimer=null,this.sidebarCloseTimer=null,this.assistantName=ga.name,this.assistantAvatar=ga.avatar,this.assistantAgentId=ga.agentId??null,this.sessionKey=this.settings.sessionKey,this.chatLoading=!1,this.chatSending=!1,this.chatMessage="",this.chatMessages=[],this.chatToolMessages=[],this.chatStream=null,this.chatStreamStartedAt=null,this.chatRunId=null,this.compactionStatus=null,this.chatAvatarUrl=null,this.chatThinkingLevel=null,this.chatModelRef=null,this.chatQueue=[],this.chatAttachments=[],this.sidebarOpen=!1,this.sidebarContent=null,this.sidebarError=null,this.splitRatio=this.settings.splitRatio,this.nodesLoading=!1,this.nodes=[],this.devicesLoading=!1,this.devicesError=null,this.devicesList=null,this.execApprovalsLoading=!1,this.execApprovalsSaving=!1,this.execApprovalsDirty=!1,this.execApprovalsSnapshot=null,this.execApprovalsForm=null,this.execApprovalsSelectedAgent=null,this.execApprovalsTarget="gateway",this.execApprovalsTargetNodeId=null,this.execApprovalQueue=[],this.execApprovalBusy=!1,this.execApprovalError=null,this.pendingGatewayUrl=null,this.configLoading=!1,this.configRaw=`{
}
`,this.configRawOriginal="",this.configValid=null,this.configIssues=[],this.configSaving=!1,this.configApplying=!1,this.updateRunning=!1,this.applySessionKey=this.settings.lastActiveSessionKey,this.configSnapshot=null,this.configSchema=null,this.configSchemaVersion=null,this.configSchemaLoading=!1,this.configUiHints={},this.configForm=null,this.configFormOriginal=null,this.configFormDirty=!1,this.configFormMode="raw",this.configSearchQuery="",this.configActiveSection=null,this.configActiveSubsection=null,this.channelsLoading=!1,this.channelsSnapshot=null,this.channelsError=null,this.channelsLastSuccess=null,this.whatsappLoginMessage=null,this.whatsappLoginQrDataUrl=null,this.whatsappLoginConnected=null,this.whatsappBusy=!1,this.nostrProfileFormState=null,this.nostrProfileAccountId=null,this.channelsSelectedChannelId=null,this.mcpSelectedKey=null,this.mcpViewMode="card",this.mcpEditMode="form",this.mcpEditConnectionType="stdio",this.mcpFormDirty=!1,this.mcpRawJson="",this.mcpRawError=null,this.mcpAddModalOpen=!1,this.mcpAddName="",this.mcpAddDraft={},this.mcpAddConnectionType="stdio",this.mcpAddEditMode="form",this.mcpAddRawJson="{}",this.mcpAddRawError=null,this.llmTraceLoading=!1,this.llmTraceResult=null,this.llmTraceError=null,this.llmTraceMode="active",this.llmTraceSearch="",this.llmTraceEnabled=!1,this.llmTraceSaving=!1,this.llmTraceViewContent=null,this.llmTraceViewingSessionId=null,this.llmTraceViewLoading=!1,this.securityForm=null,this.approvalsLoading=!1,this.approvalsResult=null,this.approvalsError=null,this.modelsSelectedProvider=null,this.modelsViewMode="card",this.modelsFormDirty=!1,this.modelsAddProviderModalOpen=!1,this.modelsAddProviderForm={providerId:"",displayName:"",baseUrl:"",apiKey:"",apiKeyPrefix:""},this.modelsAddModelModalOpen=!1,this.modelsAddModelForm={modelId:"",modelName:""},this.modelsUseModelModalOpen=!1,this.modelsUseModelModalProvider=null,this.modelsSaveError=null,this.skillsSelectedSkillKey=null,this.skillsSkillDocContent=null,this.skillsSkillDocLoading=!1,this.skillsSkillDocError=null,this.skillsViewMode="card",this.presenceLoading=!1,this.presenceEntries=[],this.presenceError=null,this.presenceStatus=null,this.agentsLoading=!1,this.agentsList=null,this.agentsError=null,this.agentsSelectedId=null,this.agentsPanel="overview",this.agentFilesLoading=!1,this.agentFilesError=null,this.agentFilesList=null,this.agentFileContents={},this.agentFileDrafts={},this.agentFileActive=null,this.agentFileSaving=!1,this.agentIdentityLoading=!1,this.agentIdentityError=null,this.agentIdentityById={},this.agentSkillsLoading=!1,this.agentSkillsError=null,this.agentSkillsReport=null,this.agentSkillsAgentId=null,this.sessionsLoading=!1,this.sessionsResult=null,this.sessionEditingKey=null,this.sessionsError=null,this.sessionsFilterActive="",this.sessionsFilterLimit="120",this.sessionsIncludeGlobal=!0,this.sessionsIncludeUnknown=!1,this.sessionsBulkMode=!1,this.sessionsSelectedKeys=[],this.usageLoading=!1,this.usageResult=null,this.usageCostSummary=null,this.usageError=null,this.usageStartDate=(()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`})(),this.usageEndDate=(()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`})(),this.usageSelectedSessions=[],this.usageSelectedDays=[],this.usageSelectedHours=[],this.usageChartMode="tokens",this.usageDailyChartMode="by-type",this.usageTimeSeriesMode="per-turn",this.usageTimeSeriesBreakdownMode="by-type",this.usageTimeSeries=null,this.usageTimeSeriesLoading=!1,this.usageSessionLogs=null,this.usageSessionLogsLoading=!1,this.usageSessionLogsExpanded=!1,this.usageQuery="",this.usageQueryDraft="",this.usageSessionSort="recent",this.usageSessionSortDir="desc",this.usageRecentSessions=[],this.usageTimeZone="local",this.usageContextExpanded=!1,this.usageHeaderPinned=!1,this.usageSessionsTab="all",this.usageVisibleColumns=["channel","agent","provider","model","messages","tools","errors","duration"],this.usageLogFilterRoles=[],this.usageLogFilterTools=[],this.usageLogFilterHasTools=!1,this.usageLogFilterQuery="",this.usageQueryDebounceTimer=null,this.cronLoading=!1,this.cronJobs=[],this.cronStatus=null,this.cronError=null,this.cronForm={...fg},this.cronRunsJobId=null,this.cronRuns=[],this.cronBusy=!1,this.skillsLoading=!1,this.skillsReport=null,this.skillsError=null,this.skillsFilter="",this.skillEdits={},this.skillsBusyKey=null,this.skillMessages={},this.skillsAddModalOpen=!1,this.skillsUploadName="",this.skillsUploadFiles=[],this.skillsUploadError=null,this.skillsUploadTemplate=null,this.skillsUploadBusy=!1,this.digitalEmployeesLoading=!1,this.digitalEmployeesError=null,this.digitalEmployeesFilter="",this.digitalEmployeesViewMode="list",this.digitalEmployees=[],this.digitalEmployeeCreateModalOpen=!1,this.digitalEmployeeCreateName="",this.digitalEmployeeCreateDescription="",this.digitalEmployeeCreatePrompt="",this.digitalEmployeeCreateError=null,this.digitalEmployeeCreateBusy=!1,this.digitalEmployeeAdvancedOpen=!1,this.digitalEmployeeCreateMcpMode="builder",this.digitalEmployeeCreateMcpJson="",this.digitalEmployeeCreateMcpItems=[],this.digitalEmployeeSkillUploadName="",this.digitalEmployeeSkillUploadFiles=[],this.digitalEmployeeSkillUploadError=null,this.digitalEmployeeSkillUploadBusy=!1,this.digitalEmployeeEditModalOpen=!1,this.digitalEmployeeEditId="",this.digitalEmployeeEditName="",this.digitalEmployeeEditDescription="",this.digitalEmployeeEditPrompt="",this.digitalEmployeeEditMcpJson="",this.digitalEmployeeEditMcpMode="raw",this.digitalEmployeeEditMcpItems=[],this.digitalEmployeeEditSkillNames=[],this.digitalEmployeeEditSkillFilesToUpload=[],this.digitalEmployeeEditSkillsToDelete=[],this.digitalEmployeeEditEnabled=!0,this.digitalEmployeeEditError=null,this.digitalEmployeeEditBusy=!1,this.employeeMarketLoadedOnce=!1,this.employeeMarketLoading=!1,this.employeeMarketError=null,this.employeeMarketQuery="",this.employeeMarketCategory="__all__",this.employeeMarketViewMode="card",this.employeeMarketItems=[],this.employeeMarketSelectedId=null,this.employeeMarketSelectedDetail=null,this.employeeMarketInstalledRemoteIds=new Set,this.employeeMarketRemoteToLocal={},this.employeeMarketInstallingId=null,this.skillLibraryLoadedOnce=!1,this.skillLibraryLoading=!1,this.skillLibraryError=null,this.skillLibraryQuery="",this.skillLibraryCategory="__all__",this.skillLibraryStatus="__all__",this.skillLibraryItems=[],this.skillLibrarySelectedFolder=null,this.skillLibrarySelectedDetail=null,this.skillLibraryInstallingFolder=null,this.skillLibraryInstallSuccess=null,this.toolLibraryLoadedOnce=!1,this.toolLibraryLoading=!1,this.toolLibraryError=null,this.toolLibraryQuery="",this.toolLibraryCategory="__all__",this.toolLibraryItems=[],this.toolLibrarySelectedId=null,this.toolLibrarySelectedDetail=null,this.toolLibraryInstalledRemoteIds=new Set,this.toolLibraryInstalledMcpMap=new Map,this.toolLibraryInstallingId=null,this.toolLibraryMcpEditModalOpen=!1,this.toolLibraryMcpEditServerKey="",this.tutorialsLoadedOnce=!1,this.tutorialsLoading=!1,this.tutorialsError=null,this.tutorialCategories=[],this.tutorialsQuery="",this.tutorialsSelectedCategoryId=null,this.tutorialsPlayingLink=null,this.aboutUninstallModalOpen=!1,this.aboutUninstallMode="program",this.aboutUninstallLoading=!1,this.aboutUninstallError=null,this.debugLoading=!1,this.debugStatus=null,this.debugHealth=null,this.debugModels=[],this.debugHeartbeat=null,this.debugCallMethod="",this.debugCallParams="{}",this.debugCallResult=null,this.debugCallError=null,this.logsLoading=!1,this.logsError=null,this.logsFile=null,this.logsEntries=[],this.logsFilterText="",this.logsLevelFilters={...mg},this.logsAutoFollow=!0,this.logsTruncated=!1,this.logsCursor=null,this.logsLastFetchAt=null,this.logsLimit=500,this.logsMaxBytes=25e4,this.logsAtBottom=!0,this.client=null,this.chatScrollFrame=null,this.chatScrollTimeout=null,this.chatHasAutoScrolled=!1,this.chatUserNearBottom=!0,this.chatNewMessagesBelow=!1,this.nodesPollInterval=null,this.logsPollInterval=null,this.debugPollInterval=null,this.logsScrollFrame=null,this.toolStreamById=new Map,this.toolStreamOrder=[],this.refreshSessionsAfterChat=new Set,this.basePath="",this.popStateHandler=()=>Np(this),this.themeMedia=null,this.themeMediaHandler=null,this.topbarObserver=null}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),_g(this)}firstUpdated(){Pg(this)}disconnectedCallback(){Lg(this),super.disconnectedCallback()}updated(e){Ig(this,e)}connect(){Wr(this)}handleChatScroll(e){Kd(this,e)}handleLogsScroll(e){qd(this,e)}exportLogs(e,t){jd(e,t)}resetToolStream(){ks(this)}resetChatScroll(){ci(this)}scrollToBottom(){ci(this),En(this,!0)}async loadAssistantIdentity(){await Kr(this)}applySettings(e){Et(this,e)}setTab(e){Tp(this,e)}setTheme(e,t){_p(this,e,t)}async loadOverview(){await Rr(this)}async loadCron(){await Kt(this)}async handleAbortChat(){await Fr(this)}removeQueuedMessage(e){cg(this,e)}async handleSendChat(e,t){await dg(this,e,t)}async handleWhatsAppStart(e){await Pd(this,e)}async handleWhatsAppWait(){await Ld(this)}async handleWhatsAppLogout(){await Id(this)}async handleChannelConfigSave(){await Dd(this)}async handleChannelConfigReload(){await Rd(this)}handleNostrProfileEdit(e,t){Ud(this,e,t)}handleNostrProfileCancel(){Od(this)}handleNostrProfileFieldChange(e,t){Fd(this,e,t)}async handleNostrProfileSave(){await Hd(this)}async handleNostrProfileImport(){await zd(this)}handleNostrProfileToggleAdvanced(){Bd(this)}async handleExecApprovalDecision(e){const t=this.execApprovalQueue[0];if(!(!t||!this.client||this.execApprovalBusy)){this.execApprovalBusy=!0,this.execApprovalError=null;try{await this.client.request("exec.approval.resolve",{id:t.id,decision:e}),this.execApprovalQueue=this.execApprovalQueue.filter(n=>n.id!==t.id)}catch(n){this.execApprovalError=`Exec approval failed: ${String(n)}`}finally{this.execApprovalBusy=!1}}}handleGatewayUrlConfirm(){const e=this.pendingGatewayUrl;e&&(this.pendingGatewayUrl=null,Et(this,{...this.settings,gatewayUrl:e}),this.connect())}handleGatewayUrlCancel(){this.pendingGatewayUrl=null}handleOpenSidebar(e){this.sidebarCloseTimer!=null&&(window.clearTimeout(this.sidebarCloseTimer),this.sidebarCloseTimer=null),this.sidebarContent=e,this.sidebarError=null,this.sidebarOpen=!0}handleCloseSidebar(){this.sidebarOpen=!1,this.sidebarCloseTimer!=null&&window.clearTimeout(this.sidebarCloseTimer),this.sidebarCloseTimer=window.setTimeout(()=>{this.sidebarOpen||(this.sidebarContent=null,this.sidebarError=null,this.sidebarCloseTimer=null)},200)}handleSplitRatioChange(e){const t=Math.max(.4,Math.min(.7,e));this.splitRatio=t,this.applySettings({...this.settings,splitRatio:t})}render(){return wx(this)}};w([$()],x.prototype,"settings",2);w([$()],x.prototype,"password",2);w([$()],x.prototype,"tab",2);w([$()],x.prototype,"onboarding",2);w([$()],x.prototype,"connected",2);w([$()],x.prototype,"theme",2);w([$()],x.prototype,"themeResolved",2);w([$()],x.prototype,"hello",2);w([$()],x.prototype,"lastError",2);w([$()],x.prototype,"eventLog",2);w([$()],x.prototype,"assistantName",2);w([$()],x.prototype,"assistantAvatar",2);w([$()],x.prototype,"assistantAgentId",2);w([$()],x.prototype,"sessionKey",2);w([$()],x.prototype,"chatLoading",2);w([$()],x.prototype,"chatSending",2);w([$()],x.prototype,"chatMessage",2);w([$()],x.prototype,"chatMessages",2);w([$()],x.prototype,"chatToolMessages",2);w([$()],x.prototype,"chatStream",2);w([$()],x.prototype,"chatStreamStartedAt",2);w([$()],x.prototype,"chatRunId",2);w([$()],x.prototype,"compactionStatus",2);w([$()],x.prototype,"chatAvatarUrl",2);w([$()],x.prototype,"chatThinkingLevel",2);w([$()],x.prototype,"chatModelRef",2);w([$()],x.prototype,"chatQueue",2);w([$()],x.prototype,"chatAttachments",2);w([$()],x.prototype,"sidebarOpen",2);w([$()],x.prototype,"sidebarContent",2);w([$()],x.prototype,"sidebarError",2);w([$()],x.prototype,"splitRatio",2);w([$()],x.prototype,"nodesLoading",2);w([$()],x.prototype,"nodes",2);w([$()],x.prototype,"devicesLoading",2);w([$()],x.prototype,"devicesError",2);w([$()],x.prototype,"devicesList",2);w([$()],x.prototype,"execApprovalsLoading",2);w([$()],x.prototype,"execApprovalsSaving",2);w([$()],x.prototype,"execApprovalsDirty",2);w([$()],x.prototype,"execApprovalsSnapshot",2);w([$()],x.prototype,"execApprovalsForm",2);w([$()],x.prototype,"execApprovalsSelectedAgent",2);w([$()],x.prototype,"execApprovalsTarget",2);w([$()],x.prototype,"execApprovalsTargetNodeId",2);w([$()],x.prototype,"execApprovalQueue",2);w([$()],x.prototype,"execApprovalBusy",2);w([$()],x.prototype,"execApprovalError",2);w([$()],x.prototype,"pendingGatewayUrl",2);w([$()],x.prototype,"configLoading",2);w([$()],x.prototype,"configRaw",2);w([$()],x.prototype,"configRawOriginal",2);w([$()],x.prototype,"configValid",2);w([$()],x.prototype,"configIssues",2);w([$()],x.prototype,"configSaving",2);w([$()],x.prototype,"configApplying",2);w([$()],x.prototype,"updateRunning",2);w([$()],x.prototype,"applySessionKey",2);w([$()],x.prototype,"configSnapshot",2);w([$()],x.prototype,"configSchema",2);w([$()],x.prototype,"configSchemaVersion",2);w([$()],x.prototype,"configSchemaLoading",2);w([$()],x.prototype,"configUiHints",2);w([$()],x.prototype,"configForm",2);w([$()],x.prototype,"configFormOriginal",2);w([$()],x.prototype,"configFormDirty",2);w([$()],x.prototype,"configFormMode",2);w([$()],x.prototype,"configSearchQuery",2);w([$()],x.prototype,"configActiveSection",2);w([$()],x.prototype,"configActiveSubsection",2);w([$()],x.prototype,"channelsLoading",2);w([$()],x.prototype,"channelsSnapshot",2);w([$()],x.prototype,"channelsError",2);w([$()],x.prototype,"channelsLastSuccess",2);w([$()],x.prototype,"whatsappLoginMessage",2);w([$()],x.prototype,"whatsappLoginQrDataUrl",2);w([$()],x.prototype,"whatsappLoginConnected",2);w([$()],x.prototype,"whatsappBusy",2);w([$()],x.prototype,"nostrProfileFormState",2);w([$()],x.prototype,"nostrProfileAccountId",2);w([$()],x.prototype,"channelsSelectedChannelId",2);w([$()],x.prototype,"mcpSelectedKey",2);w([$()],x.prototype,"mcpViewMode",2);w([$()],x.prototype,"mcpEditMode",2);w([$()],x.prototype,"mcpEditConnectionType",2);w([$()],x.prototype,"mcpFormDirty",2);w([$()],x.prototype,"mcpRawJson",2);w([$()],x.prototype,"mcpRawError",2);w([$()],x.prototype,"mcpAddModalOpen",2);w([$()],x.prototype,"mcpAddName",2);w([$()],x.prototype,"mcpAddDraft",2);w([$()],x.prototype,"mcpAddConnectionType",2);w([$()],x.prototype,"mcpAddEditMode",2);w([$()],x.prototype,"mcpAddRawJson",2);w([$()],x.prototype,"mcpAddRawError",2);w([$()],x.prototype,"llmTraceLoading",2);w([$()],x.prototype,"llmTraceResult",2);w([$()],x.prototype,"llmTraceError",2);w([$()],x.prototype,"llmTraceMode",2);w([$()],x.prototype,"llmTraceSearch",2);w([$()],x.prototype,"llmTraceEnabled",2);w([$()],x.prototype,"llmTraceSaving",2);w([$()],x.prototype,"llmTraceViewContent",2);w([$()],x.prototype,"llmTraceViewingSessionId",2);w([$()],x.prototype,"llmTraceViewLoading",2);w([$()],x.prototype,"securityForm",2);w([$()],x.prototype,"approvalsLoading",2);w([$()],x.prototype,"approvalsResult",2);w([$()],x.prototype,"approvalsError",2);w([$()],x.prototype,"modelsSelectedProvider",2);w([$()],x.prototype,"modelsViewMode",2);w([$()],x.prototype,"modelsFormDirty",2);w([$()],x.prototype,"modelsAddProviderModalOpen",2);w([$()],x.prototype,"modelsAddProviderForm",2);w([$()],x.prototype,"modelsAddModelModalOpen",2);w([$()],x.prototype,"modelsAddModelForm",2);w([$()],x.prototype,"modelsUseModelModalOpen",2);w([$()],x.prototype,"modelsUseModelModalProvider",2);w([$()],x.prototype,"modelsSaveError",2);w([$()],x.prototype,"skillsSelectedSkillKey",2);w([$()],x.prototype,"skillsSkillDocContent",2);w([$()],x.prototype,"skillsSkillDocLoading",2);w([$()],x.prototype,"skillsSkillDocError",2);w([$()],x.prototype,"skillsViewMode",2);w([$()],x.prototype,"presenceLoading",2);w([$()],x.prototype,"presenceEntries",2);w([$()],x.prototype,"presenceError",2);w([$()],x.prototype,"presenceStatus",2);w([$()],x.prototype,"agentsLoading",2);w([$()],x.prototype,"agentsList",2);w([$()],x.prototype,"agentsError",2);w([$()],x.prototype,"agentsSelectedId",2);w([$()],x.prototype,"agentsPanel",2);w([$()],x.prototype,"agentFilesLoading",2);w([$()],x.prototype,"agentFilesError",2);w([$()],x.prototype,"agentFilesList",2);w([$()],x.prototype,"agentFileContents",2);w([$()],x.prototype,"agentFileDrafts",2);w([$()],x.prototype,"agentFileActive",2);w([$()],x.prototype,"agentFileSaving",2);w([$()],x.prototype,"agentIdentityLoading",2);w([$()],x.prototype,"agentIdentityError",2);w([$()],x.prototype,"agentIdentityById",2);w([$()],x.prototype,"agentSkillsLoading",2);w([$()],x.prototype,"agentSkillsError",2);w([$()],x.prototype,"agentSkillsReport",2);w([$()],x.prototype,"agentSkillsAgentId",2);w([$()],x.prototype,"sessionsLoading",2);w([$()],x.prototype,"sessionsResult",2);w([$()],x.prototype,"sessionEditingKey",2);w([$()],x.prototype,"sessionsError",2);w([$()],x.prototype,"sessionsFilterActive",2);w([$()],x.prototype,"sessionsFilterLimit",2);w([$()],x.prototype,"sessionsIncludeGlobal",2);w([$()],x.prototype,"sessionsIncludeUnknown",2);w([$()],x.prototype,"sessionsBulkMode",2);w([$()],x.prototype,"sessionsSelectedKeys",2);w([$()],x.prototype,"usageLoading",2);w([$()],x.prototype,"usageResult",2);w([$()],x.prototype,"usageCostSummary",2);w([$()],x.prototype,"usageError",2);w([$()],x.prototype,"usageStartDate",2);w([$()],x.prototype,"usageEndDate",2);w([$()],x.prototype,"usageSelectedSessions",2);w([$()],x.prototype,"usageSelectedDays",2);w([$()],x.prototype,"usageSelectedHours",2);w([$()],x.prototype,"usageChartMode",2);w([$()],x.prototype,"usageDailyChartMode",2);w([$()],x.prototype,"usageTimeSeriesMode",2);w([$()],x.prototype,"usageTimeSeriesBreakdownMode",2);w([$()],x.prototype,"usageTimeSeries",2);w([$()],x.prototype,"usageTimeSeriesLoading",2);w([$()],x.prototype,"usageSessionLogs",2);w([$()],x.prototype,"usageSessionLogsLoading",2);w([$()],x.prototype,"usageSessionLogsExpanded",2);w([$()],x.prototype,"usageQuery",2);w([$()],x.prototype,"usageQueryDraft",2);w([$()],x.prototype,"usageSessionSort",2);w([$()],x.prototype,"usageSessionSortDir",2);w([$()],x.prototype,"usageRecentSessions",2);w([$()],x.prototype,"usageTimeZone",2);w([$()],x.prototype,"usageContextExpanded",2);w([$()],x.prototype,"usageHeaderPinned",2);w([$()],x.prototype,"usageSessionsTab",2);w([$()],x.prototype,"usageVisibleColumns",2);w([$()],x.prototype,"usageLogFilterRoles",2);w([$()],x.prototype,"usageLogFilterTools",2);w([$()],x.prototype,"usageLogFilterHasTools",2);w([$()],x.prototype,"usageLogFilterQuery",2);w([$()],x.prototype,"cronLoading",2);w([$()],x.prototype,"cronJobs",2);w([$()],x.prototype,"cronStatus",2);w([$()],x.prototype,"cronError",2);w([$()],x.prototype,"cronForm",2);w([$()],x.prototype,"cronRunsJobId",2);w([$()],x.prototype,"cronRuns",2);w([$()],x.prototype,"cronBusy",2);w([$()],x.prototype,"skillsLoading",2);w([$()],x.prototype,"skillsReport",2);w([$()],x.prototype,"skillsError",2);w([$()],x.prototype,"skillsFilter",2);w([$()],x.prototype,"skillEdits",2);w([$()],x.prototype,"skillsBusyKey",2);w([$()],x.prototype,"skillMessages",2);w([$()],x.prototype,"skillsAddModalOpen",2);w([$()],x.prototype,"skillsUploadName",2);w([$()],x.prototype,"skillsUploadFiles",2);w([$()],x.prototype,"skillsUploadError",2);w([$()],x.prototype,"skillsUploadTemplate",2);w([$()],x.prototype,"skillsUploadBusy",2);w([$()],x.prototype,"digitalEmployeesLoading",2);w([$()],x.prototype,"digitalEmployeesError",2);w([$()],x.prototype,"digitalEmployeesFilter",2);w([$()],x.prototype,"digitalEmployeesViewMode",2);w([$()],x.prototype,"digitalEmployees",2);w([$()],x.prototype,"digitalEmployeeCreateModalOpen",2);w([$()],x.prototype,"digitalEmployeeCreateName",2);w([$()],x.prototype,"digitalEmployeeCreateDescription",2);w([$()],x.prototype,"digitalEmployeeCreatePrompt",2);w([$()],x.prototype,"digitalEmployeeCreateError",2);w([$()],x.prototype,"digitalEmployeeCreateBusy",2);w([$()],x.prototype,"digitalEmployeeAdvancedOpen",2);w([$()],x.prototype,"digitalEmployeeCreateMcpMode",2);w([$()],x.prototype,"digitalEmployeeCreateMcpJson",2);w([$()],x.prototype,"digitalEmployeeCreateMcpItems",2);w([$()],x.prototype,"digitalEmployeeSkillUploadName",2);w([$()],x.prototype,"digitalEmployeeSkillUploadFiles",2);w([$()],x.prototype,"digitalEmployeeSkillUploadError",2);w([$()],x.prototype,"digitalEmployeeSkillUploadBusy",2);w([$()],x.prototype,"digitalEmployeeEditModalOpen",2);w([$()],x.prototype,"digitalEmployeeEditId",2);w([$()],x.prototype,"digitalEmployeeEditName",2);w([$()],x.prototype,"digitalEmployeeEditDescription",2);w([$()],x.prototype,"digitalEmployeeEditPrompt",2);w([$()],x.prototype,"digitalEmployeeEditMcpJson",2);w([$()],x.prototype,"digitalEmployeeEditMcpMode",2);w([$()],x.prototype,"digitalEmployeeEditMcpItems",2);w([$()],x.prototype,"digitalEmployeeEditSkillNames",2);w([$()],x.prototype,"digitalEmployeeEditSkillFilesToUpload",2);w([$()],x.prototype,"digitalEmployeeEditSkillsToDelete",2);w([$()],x.prototype,"digitalEmployeeEditEnabled",2);w([$()],x.prototype,"digitalEmployeeEditError",2);w([$()],x.prototype,"digitalEmployeeEditBusy",2);w([$()],x.prototype,"employeeMarketLoadedOnce",2);w([$()],x.prototype,"employeeMarketLoading",2);w([$()],x.prototype,"employeeMarketError",2);w([$()],x.prototype,"employeeMarketQuery",2);w([$()],x.prototype,"employeeMarketCategory",2);w([$()],x.prototype,"employeeMarketViewMode",2);w([$()],x.prototype,"employeeMarketItems",2);w([$()],x.prototype,"employeeMarketSelectedId",2);w([$()],x.prototype,"employeeMarketSelectedDetail",2);w([$()],x.prototype,"employeeMarketInstalledRemoteIds",2);w([$()],x.prototype,"employeeMarketRemoteToLocal",2);w([$()],x.prototype,"employeeMarketInstallingId",2);w([$()],x.prototype,"skillLibraryLoadedOnce",2);w([$()],x.prototype,"skillLibraryLoading",2);w([$()],x.prototype,"skillLibraryError",2);w([$()],x.prototype,"skillLibraryQuery",2);w([$()],x.prototype,"skillLibraryCategory",2);w([$()],x.prototype,"skillLibraryStatus",2);w([$()],x.prototype,"skillLibraryItems",2);w([$()],x.prototype,"skillLibrarySelectedFolder",2);w([$()],x.prototype,"skillLibrarySelectedDetail",2);w([$()],x.prototype,"skillLibraryInstallingFolder",2);w([$()],x.prototype,"skillLibraryInstallSuccess",2);w([$()],x.prototype,"toolLibraryLoadedOnce",2);w([$()],x.prototype,"toolLibraryLoading",2);w([$()],x.prototype,"toolLibraryError",2);w([$()],x.prototype,"toolLibraryQuery",2);w([$()],x.prototype,"toolLibraryCategory",2);w([$()],x.prototype,"toolLibraryItems",2);w([$()],x.prototype,"toolLibrarySelectedId",2);w([$()],x.prototype,"toolLibrarySelectedDetail",2);w([$()],x.prototype,"toolLibraryInstalledRemoteIds",2);w([$()],x.prototype,"toolLibraryInstalledMcpMap",2);w([$()],x.prototype,"toolLibraryInstallingId",2);w([$()],x.prototype,"toolLibraryMcpEditModalOpen",2);w([$()],x.prototype,"toolLibraryMcpEditServerKey",2);w([$()],x.prototype,"tutorialsLoadedOnce",2);w([$()],x.prototype,"tutorialsLoading",2);w([$()],x.prototype,"tutorialsError",2);w([$()],x.prototype,"tutorialCategories",2);w([$()],x.prototype,"tutorialsQuery",2);w([$()],x.prototype,"tutorialsSelectedCategoryId",2);w([$()],x.prototype,"tutorialsPlayingLink",2);w([$()],x.prototype,"aboutUninstallModalOpen",2);w([$()],x.prototype,"aboutUninstallMode",2);w([$()],x.prototype,"aboutUninstallLoading",2);w([$()],x.prototype,"aboutUninstallError",2);w([$()],x.prototype,"debugLoading",2);w([$()],x.prototype,"debugStatus",2);w([$()],x.prototype,"debugHealth",2);w([$()],x.prototype,"debugModels",2);w([$()],x.prototype,"debugHeartbeat",2);w([$()],x.prototype,"debugCallMethod",2);w([$()],x.prototype,"debugCallParams",2);w([$()],x.prototype,"debugCallResult",2);w([$()],x.prototype,"debugCallError",2);w([$()],x.prototype,"logsLoading",2);w([$()],x.prototype,"logsError",2);w([$()],x.prototype,"logsFile",2);w([$()],x.prototype,"logsEntries",2);w([$()],x.prototype,"logsFilterText",2);w([$()],x.prototype,"logsLevelFilters",2);w([$()],x.prototype,"logsAutoFollow",2);w([$()],x.prototype,"logsTruncated",2);w([$()],x.prototype,"logsCursor",2);w([$()],x.prototype,"logsLastFetchAt",2);w([$()],x.prototype,"logsLimit",2);w([$()],x.prototype,"logsMaxBytes",2);w([$()],x.prototype,"logsAtBottom",2);w([$()],x.prototype,"chatNewMessagesBelow",2);x=w([Jl("openclaw-app")],x);
//# sourceMappingURL=index-Fc58YOqZ.js.map
