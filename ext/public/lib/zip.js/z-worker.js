var _0x4108=["crc","scripts","importScripts","message","13TLRSsY","125pvjqDf","append","options","689LNFJZo","apply","crcType","push","codecClass","length","now","type","duplicated sn","performance","get","crcInput","2877386kENJPB","buffer","22573WPEFEr","604571AscfDB","stack","zWorkerInitialized","data","151214nmbqof","prototype","flush","581323tpcvCn","283BcWOIB","7508uAvmoI"],_0x93a0=function(t,r){return _0x4108[t-=285]};(function(t,r){for(var e=_0x93a0;;)try{if(503316===parseInt(e(303))*-parseInt(e(309))-parseInt(e(301))-parseInt(e(294))+-parseInt(e(312))*-parseInt(e(302))-parseInt(e(298))+parseInt(e(293))*-parseInt(e(308))+parseInt(e(291)))break;t.push(t.shift())}catch(r){t.push(t.shift())}})(_0x4108),function(t){"use strict";var r=_0x93a0;if(t[r(296)])throw new Error("z-worker.js should be run only once");t[r(296)]=!0,addEventListener(r(307),(function(t){var s,n,c,a=r,o=t.data,p=o[a(286)],i=o.sn,u=e[p];if(u)try{u(o)}catch(t){s={type:p,sn:i,error:(n=t,c=r,{message:n[c(307)],stack:n[c(295)]})},postMessage(s)}}));var e={importScripts:function(t){var e=r;t[e(305)]&&t[e(305)][e(317)]>0&&importScripts[e(313)](void 0,t.scripts);postMessage({type:e(306)})},newTask:n,append:a,flush:a},s={};function n(e){var n=r,c=t[e[n(316)]],a=e.sn;if(s[a])throw Error(n(287));s[a]={codec:new c(e[n(311)]),crcInput:"input"===e[n(314)],crcOutput:"output"===e[n(314)],crc:new o},postMessage({type:"newTask",sn:a})}var c=t[r(288)]?t.performance[r(285)].bind(t.performance):Date[r(285)];function a(t){var e=r,a=t.sn,o=t[e(286)],p=t[e(297)],i=s[a];!i&&t.codecClass&&(n(t),i=s[a]);var u,f=o===e(310),d=c();if(f)try{u=i.codec[e(310)](p,(function(t){postMessage({type:"progress",sn:a,loaded:t})}))}catch(t){throw delete s[a],t}else delete s[a],u=i.codec[e(300)]();var h=c()-d;d=c(),p&&i[e(290)]&&i[e(304)][e(310)](p),u&&i.crcOutput&&i.crc[e(310)](u);var v=c()-d,l={type:o,sn:a,codecTime:h,crcTime:v},I=[];u&&(l.data=u,I[e(315)](u[e(292)])),f||!i[e(290)]&&!i.crcOutput||(l[e(304)]=i[e(304)][e(289)]());try{postMessage(l,I)}catch(t){postMessage(l)}}function o(){this[r(304)]=-1}function p(){}o[r(299)][r(310)]=function(t){for(var r=0|this.crc,e=this.table,s=0,n=0|t.length;s<n;s++)r=r>>>8^e[255&(r^t[s])];this.crc=r},o[r(299)].get=function(){return~this[r(304)]},o[r(299)].table=function(){var t,r,e,s=[];for(t=0;t<256;t++){for(e=t,r=0;r<8;r++)1&e?e=e>>>1^3988292384:e>>>=1;s[t]=e}return s}(),t.NOOP=p,p[r(299)].append=function(t,r){return t},p[r(299)].flush=function(){}}(this);