/*! For license information please see 2980.4880d1ef.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[2980],{32642:function(e,t,n){n.d(t,{C:function(){return r}});var r=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M345.994,42.019,179.531,208.481A646.3,646.3,0,0,0,25.325,456.521a24.845,24.845,0,0,0,6,25.708l.087.087a24.84,24.84,0,0,0,17.611,7.342,25.172,25.172,0,0,0,8.1-1.344,646.283,646.283,0,0,0,248.04-154.207L471.62,167.646A88.831,88.831,0,0,0,345.994,42.019ZM282.531,311.48A614.445,614.445,0,0,1,60.419,453.221,614.435,614.435,0,0,1,202.158,231.108l99.162-99.161,80.372,80.372ZM448.993,145.019l-44.674,44.673L323.947,109.32l44.674-44.674a56.832,56.832,0,1,1,80.372,80.373Z' class='ci-primary'/>"]},74453:function(e,t,n){n.d(t,{Jt:function(){return Te},cF:function(){return Ze},iH:function(){return Ce},KV:function(){return xe}});var r=n(74165),o=n(15861),i=n(70885),a=n(15671),u=n(43144),s=n(97326),c=n(60136),l=n(27277),h=n(67825),f=n(21492),d=n(23258),p="firebasestorage.googleapis.com",v=function(e){(0,c.Z)(n,e);var t=(0,l.Z)(n);function n(e,r){var o;return(0,a.Z)(this,n),(o=t.call(this,_(e),"Firebase Storage: ".concat(r," (").concat(_(e),")"))).customData={serverResponse:null},o._baseMessage=o.message,Object.setPrototypeOf((0,s.Z)(o),n.prototype),o}return(0,u.Z)(n,[{key:"_codeEquals",value:function(e){return _(e)===this.code}},{key:"serverResponse",get:function(){return this.customData.serverResponse},set:function(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message="".concat(this._baseMessage,"\n").concat(this.customData.serverResponse):this.message=this._baseMessage}}]),n}(f.ZR);function _(e){return"storage/"+e}function g(){return new v("unknown","An unknown error occurred, please check the error payload for server response.")}function m(){return new v("canceled","User canceled the upload/download.")}function k(){return new v("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function y(e){return new v("invalid-argument",e)}function b(){return new v("app-deleted","The Firebase app was deleted.")}function w(e,t){return new v("invalid-format","String does not match format '"+e+"': "+t)}function R(e){throw new v("internal-error","Internal error: "+e)}var x,T=function(){function e(t,n){(0,a.Z)(this,e),this.bucket=t,this.path_=n}return(0,u.Z)(e,[{key:"path",get:function(){return this.path_}},{key:"isRoot",get:function(){return 0===this.path.length}},{key:"fullServerUrl",value:function(){var e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}},{key:"bucketOnlyServerUrl",value:function(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}}],[{key:"makeFromBucketSpec",value:function(t,n){var r;try{r=e.makeFromUrl(t,n)}catch(o){return new e(t,"")}if(""===r.path)return r;throw new v("invalid-default-bucket","Invalid default bucket '"+t+"'.")}},{key:"makeFromUrl",value:function(t,n){var r=null,o="([A-Za-z0-9.\\-_]+)";var i=new RegExp("^gs://"+o+"(/(.*))?$","i");function a(e){e.path_=decodeURIComponent(e.path)}for(var u=n.replace(/[.]/g,"\\."),s=[{regex:i,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp("^https?://".concat(u,"/").concat("v[A-Za-z0-9_]+","/b/").concat(o,"/o").concat("(/([^?#]*).*)?$"),"i"),indices:{bucket:1,path:3},postModify:a},{regex:new RegExp("^https?://".concat(n===p?"(?:storage.googleapis.com|storage.cloud.google.com)":n,"/").concat(o,"/").concat("([^?#]*)"),"i"),indices:{bucket:1,path:2},postModify:a}],c=0;c<s.length;c++){var l=s[c],h=l.regex.exec(t);if(h){var f=h[l.indices.bucket],d=h[l.indices.path];d||(d=""),r=new e(f,d),l.postModify(r);break}}if(null==r)throw function(e){return new v("invalid-url","Invalid URL '"+e+"'.")}(t);return r}}]),e}(),C=function(){function e(t){(0,a.Z)(this,e),this.promise_=Promise.reject(t)}return(0,u.Z)(e,[{key:"getPromise",value:function(){return this.promise_}},{key:"cancel",value:function(){}}]),e}();function Z(e){return"string"===typeof e||e instanceof String}function O(e){return A()&&e instanceof Blob}function A(){return"undefined"!==typeof Blob}function I(e,t,n,r){if(r<t)throw y("Invalid value for '".concat(e,"'. Expected ").concat(t," or greater."));if(r>n)throw y("Invalid value for '".concat(e,"'. Expected ").concat(n," or less."))}function P(e,t,n){var r=t;return null==n&&(r="https://".concat(t)),"".concat(n,"://").concat(r,"/v0").concat(e)}function S(e){var t=encodeURIComponent,n="?";for(var r in e){if(e.hasOwnProperty(r))n=n+(t(r)+"="+t(e[r]))+"&"}return n=n.slice(0,-1)}!function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"}(x||(x={}));var U=function(){function e(t,n,r,o,i,u,s,c,l,h,f){var d=this;(0,a.Z)(this,e),this.url_=t,this.method_=n,this.headers_=r,this.body_=o,this.successCodes_=i,this.additionalRetryCodes_=u,this.callback_=s,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=h,this.connectionFactory_=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((function(e,t){d.resolve_=e,d.reject_=t,d.start_()}))}return(0,u.Z)(e,[{key:"start_",value:function(){var e=this,t=function(t,n){var r=e.resolve_,o=e.reject_,i=n.connection;if(n.wasSuccessCode)try{var a=e.callback_(i,i.getResponse());void 0!==a?r(a):r()}catch(s){o(s)}else if(null!==i){var u=g();u.serverResponse=i.getErrorText(),e.errorCallback_?o(e.errorCallback_(i,u)):o(u)}else{if(n.canceled)o(e.appDelete_?b():m());else o(new v("retry-limit-exceeded","Max retry time for operation exceeded, please try again."))}};this.canceled_?t(0,new E(!1,null,!0)):this.backoffId_=function(e,t,n){var r=1,o=null,i=null,a=!1,u=0;function s(){return 2===u}var c=!1;function l(){if(!c){c=!0;for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];t.apply(null,n)}}function h(t){o=setTimeout((function(){o=null,e(d,s())}),t)}function f(){i&&clearTimeout(i)}function d(e){if(c)f();else{for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];if(e)return f(),void l.call.apply(l,[null,e].concat(n));var i;if(s()||a)return f(),void l.call.apply(l,[null,e].concat(n));r<64&&(r*=2),1===u?(u=2,i=0):i=1e3*(r+Math.random()),h(i)}}var p=!1;function v(e){p||(p=!0,f(),c||(null!==o?(e||(u=2),clearTimeout(o),h(0)):e||(u=1)))}return h(0),i=setTimeout((function(){a=!0,v(!0)}),n),v}((function(t,n){if(n)t(!1,new E(!1,null,!0));else{var r=e.connectionFactory_();e.pendingConnection_=r;var o=function(t){var n=t.loaded,r=t.lengthComputable?t.total:-1;null!==e.progressCallback_&&e.progressCallback_(n,r)};null!==e.progressCallback_&&r.addUploadProgressListener(o),r.send(e.url_,e.method_,e.body_,e.headers_).then((function(){null!==e.progressCallback_&&r.removeUploadProgressListener(o),e.pendingConnection_=null;var n=r.getErrorCode()===x.NO_ERROR,i=r.getStatus();if(n&&!e.isRetryStatusCode_(i)){var a=-1!==e.successCodes_.indexOf(i);t(!0,new E(a,r))}else{var u=r.getErrorCode()===x.ABORT;t(!1,new E(!1,null,u))}}))}}),t,this.timeout_)}},{key:"getPromise",value:function(){return this.promise_}},{key:"cancel",value:function(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}},{key:"isRetryStatusCode_",value:function(e){var t=e>=500&&e<600,n=-1!==[408,429].indexOf(e),r=-1!==this.additionalRetryCodes_.indexOf(e);return t||n||r}}]),e}(),E=(0,u.Z)((function e(t,n,r){(0,a.Z)(this,e),this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}));function B(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function F(){for(var e=B(),t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];if(void 0!==e){for(var o=new e,i=0;i<n.length;i++)o.append(n[i]);return o.getBlob()}if(A())return new Blob(n);throw new v("unsupported-environment","This browser doesn't seem to support creating Blobs")}var M="raw",L="base64",N="base64url",q="data_url",z=(0,u.Z)((function e(t,n){(0,a.Z)(this,e),this.data=t,this.contentType=n||null}));function j(e,t){switch(e){case M:return new z(D(t));case L:case N:return new z(H(e,t));case q:return new z(function(e){var t=new X(e);return t.base64?H(L,t.rest):function(e){var t;try{t=decodeURIComponent(e)}catch(n){throw w(q,"Malformed data URL.")}return D(t)}(t.rest)}(t),new X(t).contentType)}throw g()}function D(e){for(var t=[],n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296===(64512&r))if(n<e.length-1&&56320===(64512&e.charCodeAt(n+1)))r=65536|(1023&r)<<10|1023&e.charCodeAt(++n),t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r);else t.push(239,191,189);else 56320===(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function H(e,t){switch(e){case L:var n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r)throw w(e,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?");break;case N:var o=-1!==t.indexOf("+"),i=-1!==t.indexOf("/");if(o||i)throw w(e,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/")}var a;try{a=atob(t)}catch(c){throw w(e,"Invalid character found")}for(var u=new Uint8Array(a.length),s=0;s<a.length;s++)u[s]=a.charCodeAt(s);return u}var X=(0,u.Z)((function e(t){(0,a.Z)(this,e),this.base64=!1,this.contentType=null;var n=t.match(/^data:([^,]+)?,/);if(null===n)throw w(q,"Must be formatted 'data:[<mediatype>][;base64],<data>");var r=n[1]||null;null!=r&&(this.base64=function(e,t){if(!(e.length>=t.length))return!1;return e.substring(e.length-t.length)===t}(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-";base64".length):r),this.rest=t.substring(t.indexOf(",")+1)}));var K=function(){function e(t,n){(0,a.Z)(this,e);var r=0,o="";O(t)?(this.data_=t,r=t.size,o=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),r=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),r=t.length),this.size_=r,this.type_=o}return(0,u.Z)(e,[{key:"size",value:function(){return this.size_}},{key:"type",value:function(){return this.type_}},{key:"slice",value:function(t,n){if(O(this.data_)){var r=function(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}(this.data_,t,n);return null===r?null:new e(r)}var o=new Uint8Array(this.data_.buffer,t,n-t);return new e(o,!0)}},{key:"uploadData",value:function(){return this.data_}}],[{key:"getBlob",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];if(A()){var o=n.map((function(t){return t instanceof e?t.data_:t}));return new e(F.apply(null,o))}var i=n.map((function(e){return Z(e)?j(M,e).data:e.data_})),a=0;i.forEach((function(e){a+=e.byteLength}));var u=new Uint8Array(a),s=0;return i.forEach((function(e){for(var t=0;t<e.length;t++)u[s++]=e[t]})),new e(u,!0)}}]),e}();function W(e){var t,n;try{t=JSON.parse(e)}catch(r){return null}return"object"!==typeof(n=t)||Array.isArray(n)?null:t}function V(e){var t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}function J(e,t){return t}var G=(0,u.Z)((function e(t,n,r,o){(0,a.Z)(this,e),this.server=t,this.local=n||t,this.writable=!!r,this.xform=o||J})),Y=null;function $(){if(Y)return Y;var e=[];e.push(new G("bucket")),e.push(new G("generation")),e.push(new G("metageneration")),e.push(new G("name","fullPath",!0));var t=new G("name");t.xform=function(e,t){return function(e){return!Z(e)||e.length<2?e:V(e)}(t)},e.push(t);var n=new G("size");return n.xform=function(e,t){return void 0!==t?Number(t):t},e.push(n),e.push(new G("timeCreated")),e.push(new G("updated")),e.push(new G("md5Hash",null,!0)),e.push(new G("cacheControl",null,!0)),e.push(new G("contentDisposition",null,!0)),e.push(new G("contentEncoding",null,!0)),e.push(new G("contentLanguage",null,!0)),e.push(new G("contentType",null,!0)),e.push(new G("metadata","customMetadata",!0)),Y=e}function Q(e,t,n){for(var r={type:"file"},o=n.length,i=0;i<o;i++){var a=n[i];r[a.local]=a.xform(r,t[a.server])}return function(e,t){Object.defineProperty(e,"ref",{get:function(){var n=e.bucket,r=e.fullPath,o=new T(n,r);return t._makeStorageReference(o)}})}(r,e),r}function ee(e,t,n){var r=W(t);return null===r?null:Q(e,r,n)}function te(e,t){for(var n={},r=t.length,o=0;o<r;o++){var i=t[o];i.writable&&(n[i.server]=e[i.local])}return JSON.stringify(n)}var ne=(0,u.Z)((function e(t,n,r,o){(0,a.Z)(this,e),this.url=t,this.method=n,this.handler=r,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}));function re(e){if(!e)throw g()}function oe(e,t){return function(n,r){var o=ee(e,r,t);return re(null!==o),o}}function ie(e,t){return function(n,r){var o=ee(e,r,t);return re(null!==o),function(e,t,n,r){var o=W(t);if(null===o)return null;if(!Z(o.downloadTokens))return null;var i=o.downloadTokens;if(0===i.length)return null;var a=encodeURIComponent;return i.split(",").map((function(t){var o=e.bucket,i=e.fullPath;return P("/b/"+a(o)+"/o/"+a(i),n,r)+S({alt:"media",token:t})}))[0]}(o,r,e.host,e._protocol)}}function ae(e){return function(t,n){var r,o,i;return 401===t.getStatus()?r=t.getErrorText().includes("Firebase App Check token is invalid")?new v("unauthorized-app","This app does not have permission to access Firebase Storage on this project."):new v("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(i=e.bucket,r=new v("quota-exceeded","Quota for bucket '"+i+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(o=e.path,r=new v("unauthorized","User does not have permission to access '"+o+"'.")):r=n,r.serverResponse=n.serverResponse,r}}function ue(e){var t=ae(e);return function(n,r){var o,i=t(n,r);return 404===n.getStatus()&&(o=e.path,i=new v("object-not-found","Object '"+o+"' does not exist.")),i.serverResponse=r.serverResponse,i}}function se(e,t,n){var r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=function(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}(null,t)),r}function ce(e,t,n,r,o){var i=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};var u=function(){for(var e="",t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();a["Content-Type"]="multipart/related; boundary="+u;var s=se(t,r,o),c="--"+u+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+te(s,n)+"\r\n--"+u+"\r\nContent-Type: "+s.contentType+"\r\n\r\n",l="\r\n--"+u+"--",h=K.getBlob(c,r,l);if(null===h)throw k();var f={name:s.fullPath},d=P(i,e.host,e._protocol),p=e.maxUploadRetryTime,v=new ne(d,"POST",oe(e,n),p);return v.urlParams=f,v.headers=a,v.body=h.uploadData(),v.errorHandler=ae(t),v}var le=function(){function e(){var t=this;(0,a.Z)(this,e),this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=x.NO_ERROR,this.sendPromise_=new Promise((function(e){t.xhr_.addEventListener("abort",(function(){t.errorCode_=x.ABORT,e()})),t.xhr_.addEventListener("error",(function(){t.errorCode_=x.NETWORK_ERROR,e()})),t.xhr_.addEventListener("load",(function(){e()}))}))}return(0,u.Z)(e,[{key:"send",value:function(e,t,n,r){if(this.sent_)throw R("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(var o in r)r.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,r[o].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}},{key:"getErrorCode",value:function(){if(!this.sent_)throw R("cannot .getErrorCode() before sending");return this.errorCode_}},{key:"getStatus",value:function(){if(!this.sent_)throw R("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}},{key:"getResponse",value:function(){if(!this.sent_)throw R("cannot .getResponse() before sending");return this.xhr_.response}},{key:"getErrorText",value:function(){if(!this.sent_)throw R("cannot .getErrorText() before sending");return this.xhr_.statusText}},{key:"abort",value:function(){this.xhr_.abort()}},{key:"getResponseHeader",value:function(e){return this.xhr_.getResponseHeader(e)}},{key:"addUploadProgressListener",value:function(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}},{key:"removeUploadProgressListener",value:function(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}]),e}(),he=function(e){(0,c.Z)(n,e);var t=(0,l.Z)(n);function n(){return(0,a.Z)(this,n),t.apply(this,arguments)}return(0,u.Z)(n,[{key:"initXhr",value:function(){this.xhr_.responseType="text"}}]),n}(le);function fe(){return new he}var de=function(){function e(t,n){(0,a.Z)(this,e),this._service=t,this._location=n instanceof T?n:T.makeFromUrl(n,t.host)}return(0,u.Z)(e,[{key:"toString",value:function(){return"gs://"+this._location.bucket+"/"+this._location.path}},{key:"_newRef",value:function(t,n){return new e(t,n)}},{key:"root",get:function(){var e=new T(this._location.bucket,"");return this._newRef(this._service,e)}},{key:"bucket",get:function(){return this._location.bucket}},{key:"fullPath",get:function(){return this._location.path}},{key:"name",get:function(){return V(this._location.path)}},{key:"storage",get:function(){return this._service}},{key:"parent",get:function(){var t=function(e){if(0===e.length)return null;var t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this._location.path);if(null===t)return null;var n=new T(this._location.bucket,t);return new e(this._service,n)}},{key:"_throwIfRoot",value:function(e){if(""===this._location.path)throw function(e){return new v("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(e)}}]),e}();function pe(e,t,n){e._throwIfRoot("uploadBytes");var r=ce(e.storage,e._location,$(),new K(t,!0),n);return e.storage.makeRequestWithTokens(r,fe).then((function(t){return{metadata:t,ref:e}}))}function ve(e){e._throwIfRoot("getDownloadURL");var t=function(e,t,n){var r=P(t.fullServerUrl(),e.host,e._protocol),o=e.maxOperationRetryTime,i=new ne(r,"GET",ie(e,n),o);return i.errorHandler=ue(t),i}(e.storage,e._location,$());return e.storage.makeRequestWithTokens(t,fe).then((function(e){if(null===e)throw new v("no-download-url","The given file does not have any download URLs.");return e}))}function _e(e,t){var n=function(e,t){var n=t.split("/").filter((function(e){return e.length>0})).join("/");return 0===e.length?n:e+"/"+n}(e._location.path,t),r=new T(e._location.bucket,n);return new de(e.storage,r)}function ge(e,t){if(e instanceof ye){var n=e;if(null==n._bucket)throw new v("no-default-bucket","No default bucket found. Did you set the 'storageBucket' property when initializing the app?");var r=new de(n,n._bucket);return null!=t?ge(r,t):r}return void 0!==t?_e(e,t):e}function me(e,t){if(t&&/^[A-Za-z]+:\/\//.test(t)){if(e instanceof ye)return new de(e,t);throw y("To use ref(service, url), the first argument must be a Storage instance.")}return ge(e,t)}function ke(e,t){var n=null===t||void 0===t?void 0:t.storageBucket;return null==n?null:T.makeFromBucketSpec(n,e)}var ye=function(){function e(t,n,r,o,i){(0,a.Z)(this,e),this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=o,this._firebaseVersion=i,this._bucket=null,this._host=p,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=o?T.makeFromBucketSpec(o,this._host):ke(this._host,this.app.options)}return(0,u.Z)(e,[{key:"host",get:function(){return this._host},set:function(e){this._host=e,null!=this._url?this._bucket=T.makeFromBucketSpec(this._url,e):this._bucket=ke(e,this.app.options)}},{key:"maxUploadRetryTime",get:function(){return this._maxUploadRetryTime},set:function(e){I("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}},{key:"maxOperationRetryTime",get:function(){return this._maxOperationRetryTime},set:function(e){I("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}},{key:"_getAuthToken",value:function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._overrideAuthToken){e.next=2;break}return e.abrupt("return",this._overrideAuthToken);case 2:if(!(t=this._authProvider.getImmediate({optional:!0}))){e.next=9;break}return e.next=6,t.getToken();case 6:if(null===(n=e.sent)){e.next=9;break}return e.abrupt("return",n.accessToken);case 9:return e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_getAppCheckToken",value:function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=this._appCheckProvider.getImmediate({optional:!0}))){e.next=6;break}return e.next=4,t.getToken();case 4:return n=e.sent,e.abrupt("return",n.token);case 6:return e.abrupt("return",null);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_delete",value:function(){return this._deleted||(this._deleted=!0,this._requests.forEach((function(e){return e.cancel()})),this._requests.clear()),Promise.resolve()}},{key:"_makeStorageReference",value:function(e){return new de(this,e)}},{key:"_makeRequest",value:function(e,t,n,r){var o=this;if(this._deleted)return new C(b());var i=function(e,t,n,r,o,i){var a=S(e.urlParams),u=e.url+a,s=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(s,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(s,n),function(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!==t&&void 0!==t?t:"AppManager")}(s,i),function(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}(s,r),new U(u,e.method,s,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,o)}(e,this._appId,n,r,t,this._firebaseVersion);return this._requests.add(i),i.getPromise().then((function(){return o._requests.delete(i)}),(function(){return o._requests.delete(i)})),i}},{key:"makeRequestWithTokens",value:function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){var o,a,u,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([this._getAuthToken(),this._getAppCheckToken()]);case 2:return o=e.sent,a=(0,i.Z)(o,2),u=a[0],s=a[1],e.abrupt("return",this._makeRequest(t,n,u,s).getPromise());case 7:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()}]),e}(),be="@firebase/storage",we="0.9.9",Re="storage";function xe(e,t,n){return pe(e=(0,f.m9)(e),t,n)}function Te(e){return ve(e=(0,f.m9)(e))}function Ce(e,t){return me(e=(0,f.m9)(e),t)}function Ze(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,h.Mq)(),t=arguments.length>1?arguments[1]:void 0;e=(0,f.m9)(e);var n=(0,h.qX)(e,Re),r=n.getImmediate({identifier:t});return r}function Oe(e,t){var n=t.instanceIdentifier,r=e.getProvider("app").getImmediate(),o=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new ye(r,o,i,n,h.Jn)}(0,h.Xd)(new d.wA(Re,Oe,"PUBLIC").setMultipleInstances(!0)),(0,h.KN)(be,we,""),(0,h.KN)(be,we,"esm2017")}}]);
//# sourceMappingURL=2980.4880d1ef.chunk.js.map