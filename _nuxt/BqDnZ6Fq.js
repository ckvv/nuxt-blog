import{G as L,H as P,D as O,I as T,J as j,K as V,L as $,m as q,M as R,N as I,g as H,i as A,O as J,k as W,P as v,l as G,Q}from"./1X2IO5ZL.js";const U=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function X(r,a){a?a={...U,...a}:a=U;const s=N(a);return s.dispatch(r),s.toString()}const Y=Object.freeze(["prototype","__proto__","constructor"]);function N(r){let a="",s=new Map;const e=t=>{a+=t};return{toString(){return a},getContext(){return s},dispatch(t){return r.replacer&&(t=r.replacer(t)),this[t===null?"null":typeof t](t)},object(t){if(t&&typeof t.toJSON=="function")return this.object(t.toJSON());const n=Object.prototype.toString.call(t);let i="";const d=n.length;d<10?i="unknown:["+n+"]":i=n.slice(8,d-1),i=i.toLowerCase();let l=null;if((l=s.get(t))===void 0)s.set(t,s.size);else return this.dispatch("[CIRCULAR:"+l+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return e("buffer:"),e(t.toString("utf8"));if(i!=="object"&&i!=="function"&&i!=="asyncfunction")this[i]?this[i](t):r.ignoreUnknown||this.unkown(t,i);else{let f=Object.keys(t);r.unorderedObjects&&(f=f.sort());let y=[];r.respectType!==!1&&!k(t)&&(y=Y),r.excludeKeys&&(f=f.filter(c=>!r.excludeKeys(c)),y=y.filter(c=>!r.excludeKeys(c))),e("object:"+(f.length+y.length)+":");const o=c=>{this.dispatch(c),e(":"),r.excludeValues||this.dispatch(t[c]),e(",")};for(const c of f)o(c);for(const c of y)o(c)}},array(t,n){if(n=n===void 0?r.unorderedArrays!==!1:n,e("array:"+t.length+":"),!n||t.length<=1){for(const l of t)this.dispatch(l);return}const i=new Map,d=t.map(l=>{const f=N(r);f.dispatch(l);for(const[y,o]of f.getContext())i.set(y,o);return f.toString()});return s=i,d.sort(),this.array(d,!1)},date(t){return e("date:"+t.toJSON())},symbol(t){return e("symbol:"+t.toString())},unkown(t,n){if(e(n),!!t&&(e(":"),t&&typeof t.entries=="function"))return this.array(Array.from(t.entries()),!0)},error(t){return e("error:"+t.toString())},boolean(t){return e("bool:"+t)},string(t){e("string:"+t.length+":"),e(t)},function(t){e("fn:"),k(t)?this.dispatch("[native]"):this.dispatch(t.toString()),r.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),r.respectFunctionProperties&&this.object(t)},number(t){return e("number:"+t)},xml(t){return e("xml:"+t.toString())},null(){return e("Null")},undefined(){return e("Undefined")},regexp(t){return e("regex:"+t.toString())},uint8array(t){return e("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},uint8clampedarray(t){return e("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},int8array(t){return e("int8array:"),this.dispatch(Array.prototype.slice.call(t))},uint16array(t){return e("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},int16array(t){return e("int16array:"),this.dispatch(Array.prototype.slice.call(t))},uint32array(t){return e("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},int32array(t){return e("int32array:"),this.dispatch(Array.prototype.slice.call(t))},float32array(t){return e("float32array:"),this.dispatch(Array.prototype.slice.call(t))},float64array(t){return e("float64array:"),this.dispatch(Array.prototype.slice.call(t))},arraybuffer(t){return e("arraybuffer:"),this.dispatch(new Uint8Array(t))},url(t){return e("url:"+t.toString())},map(t){e("map:");const n=[...t];return this.array(n,r.unorderedSets!==!1)},set(t){e("set:");const n=[...t];return this.array(n,r.unorderedSets!==!1)},file(t){return e("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},blob(){if(r.ignoreUnknown)return e("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return e("domwindow")},bigint(t){return e("bigint:"+t.toString())},process(){return e("process")},timer(){return e("timer")},pipe(){return e("pipe")},tcp(){return e("tcp")},udp(){return e("udp")},tty(){return e("tty")},statwatcher(){return e("statwatcher")},securecontext(){return e("securecontext")},connection(){return e("connection")},zlib(){return e("zlib")},context(){return e("context")},nodescript(){return e("nodescript")},httpparser(){return e("httpparser")},dataview(){return e("dataview")},signal(){return e("signal")},fsevent(){return e("fsevent")},tlswrap(){return e("tlswrap")}}}const K="[native code] }",Z=K.length;function k(r){return typeof r!="function"?!1:Function.prototype.toString.call(r).slice(-Z)===K}var tt=Object.defineProperty,et=(r,a,s)=>a in r?tt(r,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[a]=s,x=(r,a,s)=>(et(r,typeof a!="symbol"?a+"":a,s),s);class _{constructor(a,s){x(this,"words"),x(this,"sigBytes"),a=this.words=a||[],this.sigBytes=s===void 0?a.length*4:s}toString(a){return(a||rt).stringify(this)}concat(a){if(this.clamp(),this.sigBytes%4)for(let s=0;s<a.sigBytes;s++){const e=a.words[s>>>2]>>>24-s%4*8&255;this.words[this.sigBytes+s>>>2]|=e<<24-(this.sigBytes+s)%4*8}else for(let s=0;s<a.sigBytes;s+=4)this.words[this.sigBytes+s>>>2]=a.words[s>>>2];return this.sigBytes+=a.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new _([...this.words])}}const rt={stringify(r){const a=[];for(let s=0;s<r.sigBytes;s++){const e=r.words[s>>>2]>>>24-s%4*8&255;a.push((e>>>4).toString(16),(e&15).toString(16))}return a.join("")}},st={stringify(r){const a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=[];for(let e=0;e<r.sigBytes;e+=3){const t=r.words[e>>>2]>>>24-e%4*8&255,n=r.words[e+1>>>2]>>>24-(e+1)%4*8&255,i=r.words[e+2>>>2]>>>24-(e+2)%4*8&255,d=t<<16|n<<8|i;for(let l=0;l<4&&e*8+l*6<r.sigBytes*8;l++)s.push(a.charAt(d>>>6*(3-l)&63))}return s.join("")}},at={parse(r){const a=r.length,s=[];for(let e=0;e<a;e++)s[e>>>2]|=(r.charCodeAt(e)&255)<<24-e%4*8;return new _(s,a)}},nt={parse(r){return at.parse(unescape(encodeURIComponent(r)))}};class it{constructor(){x(this,"_data",new _),x(this,"_nDataBytes",0),x(this,"_minBufferSize",0),x(this,"blockSize",512/32)}reset(){this._data=new _,this._nDataBytes=0}_append(a){typeof a=="string"&&(a=nt.parse(a)),this._data.concat(a),this._nDataBytes+=a.sigBytes}_doProcessBlock(a,s){}_process(a){let s,e=this._data.sigBytes/(this.blockSize*4);a?e=Math.ceil(e):e=Math.max((e|0)-this._minBufferSize,0);const t=e*this.blockSize,n=Math.min(t*4,this._data.sigBytes);if(t){for(let i=0;i<t;i+=this.blockSize)this._doProcessBlock(this._data.words,i);s=this._data.words.splice(0,t),this._data.sigBytes-=n}return new _(s,n)}}class ot extends it{update(a){return this._append(a),this._process(),this}finalize(a){a&&this._append(a)}}var ct=Object.defineProperty,lt=(r,a,s)=>a in r?ct(r,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[a]=s,ut=(r,a,s)=>(lt(r,a+"",s),s);const E=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],ft=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],D=[];class ht extends ot{constructor(){super(...arguments),ut(this,"_hash",new _([...E]))}reset(){super.reset(),this._hash=new _([...E])}_doProcessBlock(a,s){const e=this._hash.words;let t=e[0],n=e[1],i=e[2],d=e[3],l=e[4],f=e[5],y=e[6],o=e[7];for(let c=0;c<64;c++){if(c<16)D[c]=a[s+c]|0;else{const u=D[c-15],b=(u<<25|u>>>7)^(u<<14|u>>>18)^u>>>3,g=D[c-2],z=(g<<15|g>>>17)^(g<<13|g>>>19)^g>>>10;D[c]=b+D[c-7]+z+D[c-16]}const w=l&f^~l&y,B=t&n^t&i^n&i,S=(t<<30|t>>>2)^(t<<19|t>>>13)^(t<<10|t>>>22),h=(l<<26|l>>>6)^(l<<21|l>>>11)^(l<<7|l>>>25),m=o+h+w+ft[c]+D[c],p=S+B;o=y,y=f,f=l,l=d+m|0,d=i,i=n,n=t,t=m+p|0}e[0]=e[0]+t|0,e[1]=e[1]+n|0,e[2]=e[2]+i|0,e[3]=e[3]+d|0,e[4]=e[4]+l|0,e[5]=e[5]+f|0,e[6]=e[6]+y|0,e[7]=e[7]+o|0}finalize(a){super.finalize(a);const s=this._nDataBytes*8,e=this._data.sigBytes*8;return this._data.words[e>>>5]|=128<<24-e%32,this._data.words[(e+64>>>9<<4)+14]=Math.floor(s/4294967296),this._data.words[(e+64>>>9<<4)+15]=s,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function dt(r){return new ht().finalize(r).toString(st)}function yt(r,a={}){const s=typeof r=="string"?r:X(r,a);return dt(s).slice(0,10)}const pt=r=>r==="defer"||r===!1;function gt(...r){var S;const a=typeof r[r.length-1]=="string"?r.pop():void 0;typeof r[0]!="string"&&r.unshift(a);let[s,e,t={}]=r;if(typeof s!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof e!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const n=L(),i=e,d=()=>P.value,l=()=>n.isHydrating?n.payload.data[s]:n.static.data[s];t.server=t.server??!0,t.default=t.default??d,t.getCachedData=t.getCachedData??l,t.lazy=t.lazy??!1,t.immediate=t.immediate??!0,t.deep=t.deep??P.deep,t.dedupe=t.dedupe??"cancel";const f=t.getCachedData(s,n),y=f!=null;if(!n._asyncData[s]||!t.immediate){(S=n.payload._errors)[s]??(S[s]=P.errorValue);const h=t.deep?O:T;n._asyncData[s]={data:h(y?f:t.default()),pending:O(!y),error:j(n.payload._errors,s),status:O("idle"),_default:t.default}}const o={...n._asyncData[s]};delete o._default,o.refresh=o.execute=(h={})=>{if(n._asyncDataPromises[s]){if(pt(h.dedupe??t.dedupe))return n._asyncDataPromises[s];n._asyncDataPromises[s].cancelled=!0}if(h._initial||n.isHydrating&&h._initial!==!1){const p=h._initial?f:t.getCachedData(s,n);if(p!=null)return Promise.resolve(p)}o.pending.value=!0,o.status.value="pending";const m=new Promise((p,u)=>{try{p(i(n))}catch(b){u(b)}}).then(async p=>{if(m.cancelled)return n._asyncDataPromises[s];let u=p;t.transform&&(u=await t.transform(p)),t.pick&&(u=_t(u,t.pick)),n.payload.data[s]=u,o.data.value=u,o.error.value=P.errorValue,o.status.value="success"}).catch(p=>{if(m.cancelled)return n._asyncDataPromises[s];o.error.value=I(p),o.data.value=H(t.default()),o.status.value="error"}).finally(()=>{m.cancelled||(o.pending.value=!1,delete n._asyncDataPromises[s])});return n._asyncDataPromises[s]=m,n._asyncDataPromises[s]},o.clear=()=>mt(n,s);const c=()=>o.refresh({_initial:!0}),w=t.server!==!1&&n.payload.serverRendered;{const h=A();if(h&&w&&t.immediate&&!h.sp&&(h.sp=[]),h&&!h._nuxtOnBeforeMountCbs){h._nuxtOnBeforeMountCbs=[];const u=h._nuxtOnBeforeMountCbs;V(()=>{u.forEach(b=>{b()}),u.splice(0,u.length)}),$(()=>u.splice(0,u.length))}w&&n.isHydrating&&(o.error.value||f!=null)?(o.pending.value=!1,o.status.value=o.error.value?"error":"success"):h&&(n.payload.serverRendered&&n.isHydrating||t.lazy)&&t.immediate?h._nuxtOnBeforeMountCbs.push(c):t.immediate&&c();const m=J();if(t.watch){const u=q(t.watch,()=>o.refresh());m&&R(u)}const p=n.hook("app:data:refresh",async u=>{(!u||u.includes(s))&&await o.refresh()});m&&R(p)}const B=Promise.resolve(n._asyncDataPromises[s]).then(()=>o);return Object.assign(B,o),B}function mt(r,a){a in r.payload.data&&(r.payload.data[a]=void 0),a in r.payload._errors&&(r.payload._errors[a]=P.errorValue),r._asyncData[a]&&(r._asyncData[a].data.value=H(r._asyncData[a]._default()),r._asyncData[a].error.value=P.errorValue,r._asyncData[a].pending.value=!1,r._asyncData[a].status.value="idle"),a in r._asyncDataPromises&&(r._asyncDataPromises[a]&&(r._asyncDataPromises[a].cancelled=!0),r._asyncDataPromises[a]=void 0)}function _t(r,a){const s={};for(const e of a)s[e]=r[e];return s}function vt(r,a,s){const[e={},t]=typeof a=="string"?[{},a]:[a,s],n=W(()=>v(r)),i=e.key||yt([t,typeof n.value=="string"?n.value:"",...wt(e)]);if(!i||typeof i!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+i);if(!r)throw new Error("[nuxt] [useFetch] request is missing.");const d=i===t?"$f"+i:i;if(!e.baseURL&&typeof n.value=="string"&&n.value[0]==="/"&&n.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:l,lazy:f,default:y,transform:o,pick:c,watch:w,immediate:B,getCachedData:S,deep:h,dedupe:m,...p}=e,u=G({...Q,...p,cache:typeof e.cache=="boolean"?void 0:e.cache}),b={server:l,lazy:f,default:y,transform:o,pick:c,immediate:B,getCachedData:S,deep:h,dedupe:m,watch:w===!1?[]:[u,n,...w||[]]};let g;return gt(d,()=>{var M;(M=g==null?void 0:g.abort)==null||M.call(g,new DOMException("Request aborted as another request to the same endpoint was initiated.","AbortError")),g=typeof AbortController<"u"?new AbortController:{};const F=v(e.timeout);let C;return F&&(C=setTimeout(()=>g.abort(new DOMException("Request aborted due to timeout.","AbortError")),F),g.signal.onabort=()=>clearTimeout(C)),(e.$fetch||globalThis.$fetch)(n.value,{signal:g.signal,...u}).finally(()=>{clearTimeout(C)})},b)}function wt(r){var s;const a=[((s=v(r.method))==null?void 0:s.toUpperCase())||"GET",v(r.baseURL)];for(const e of[r.params||r.query]){const t=v(e);if(!t)continue;const n={};for(const[i,d]of Object.entries(t))n[v(i)]=v(d);a.push(n)}return a}export{gt as a,yt as h,vt as u};
