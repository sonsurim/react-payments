function wr(r){if(r.sheet)return r.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===r)return document.styleSheets[e]}function xr(r){var e=document.createElement("style");return e.setAttribute("data-emotion",r.key),r.nonce!==void 0&&e.setAttribute("nonce",r.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var Sr=function(){function r(t){var n=this;this._insertTag=function(a){var s;n.tags.length===0?n.insertionPoint?s=n.insertionPoint.nextSibling:n.prepend?s=n.container.firstChild:s=n.before:s=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(a,s),n.tags.push(a)},this.isSpeedy=t.speedy===void 0?!0:t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var e=r.prototype;return e.hydrate=function(n){n.forEach(this._insertTag)},e.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(xr(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var s=wr(a);try{s.insertRule(n,s.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(n));this.ctr++},e.flush=function(){this.tags.forEach(function(n){return n.parentNode&&n.parentNode.removeChild(n)}),this.tags=[],this.ctr=0},r}(),w="-ms-",H="-moz-",u="-webkit-",hr="comm",rr="rule",er="decl",Cr="@import",dr="@keyframes",$r="@layer",kr=Math.abs,Y=String.fromCharCode,Ar=Object.assign;function Er(r,e){return y(r,0)^45?(((e<<2^y(r,0))<<2^y(r,1))<<2^y(r,2))<<2^y(r,3):0}function lr(r){return r.trim()}function Rr(r,e){return(r=e.exec(r))?r[0]:r}function h(r,e,t){return r.replace(e,t)}function X(r,e){return r.indexOf(e)}function y(r,e){return r.charCodeAt(e)|0}function L(r,e,t){return r.slice(e,t)}function R(r){return r.length}function tr(r){return r.length}function B(r,e){return e.push(r),r}function Or(r,e){return r.map(e).join("")}var Z=1,I=1,mr=0,S=0,g=0,G="";function U(r,e,t,n,a,s,i){return{value:r,root:e,parent:t,type:n,props:a,children:s,line:Z,column:I,length:i,return:""}}function W(r,e){return Ar(U("",null,null,"",null,null,0),r,{length:-r.length},e)}function Tr(){return g}function Mr(){return g=S>0?y(G,--S):0,I--,g===10&&(I=1,Z--),g}function $(){return g=S<mr?y(G,S++):0,I++,g===10&&(I=1,Z++),g}function T(){return y(G,S)}function D(){return S}function F(r,e){return L(G,r,e)}function j(r){switch(r){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function pr(r){return Z=I=1,mr=R(G=r),S=0,[]}function br(r){return G="",r}function K(r){return lr(F(S-1,_(r===91?r+2:r===40?r+1:r)))}function Pr(r){for(;(g=T())&&g<33;)$();return j(r)>2||j(g)>3?"":" "}function Nr(r,e){for(;--e&&$()&&!(g<48||g>102||g>57&&g<65||g>70&&g<97););return F(r,D()+(e<6&&T()==32&&$()==32))}function _(r){for(;$();)switch(g){case r:return S;case 34:case 39:r!==34&&r!==39&&_(g);break;case 40:r===41&&_(r);break;case 92:$();break}return S}function Ir(r,e){for(;$()&&r+g!==57;)if(r+g===84&&T()===47)break;return"/*"+F(e,S-1)+"*"+Y(r===47?r:$())}function Gr(r){for(;!j(T());)$();return F(r,S)}function Wr(r){return br(q("",null,null,null,[""],r=pr(r),0,[0],r))}function q(r,e,t,n,a,s,i,c,f){for(var d=0,o=0,l=i,k=0,M=0,C=0,p=1,x=1,b=1,v=0,A="",V=a,P=s,E=n,m=A;x;)switch(C=v,v=$()){case 40:if(C!=108&&y(m,l-1)==58){X(m+=h(K(v),"&","&\f"),"&\f")!=-1&&(b=-1);break}case 34:case 39:case 91:m+=K(v);break;case 9:case 10:case 13:case 32:m+=Pr(C);break;case 92:m+=Nr(D()-1,7);continue;case 47:switch(T()){case 42:case 47:B(Lr(Ir($(),D()),e,t),f);break;default:m+="/"}break;case 123*p:c[d++]=R(m)*b;case 125*p:case 59:case 0:switch(v){case 0:case 125:x=0;case 59+o:b==-1&&(m=h(m,/\f/g,"")),M>0&&R(m)-l&&B(M>32?ar(m+";",n,t,l-1):ar(h(m," ","")+";",n,t,l-2),f);break;case 59:m+=";";default:if(B(E=nr(m,e,t,d,o,a,c,A,V=[],P=[],l),s),v===123)if(o===0)q(m,e,E,E,V,s,l,c,P);else switch(k===99&&y(m,3)===110?100:k){case 100:case 108:case 109:case 115:q(r,E,E,n&&B(nr(r,E,E,0,0,a,c,A,a,V=[],l),P),a,P,l,c,n?V:P);break;default:q(m,E,E,E,[""],P,0,c,P)}}d=o=M=0,p=b=1,A=m="",l=i;break;case 58:l=1+R(m),M=C;default:if(p<1){if(v==123)--p;else if(v==125&&p++==0&&Mr()==125)continue}switch(m+=Y(v),v*p){case 38:b=o>0?1:(m+="\f",-1);break;case 44:c[d++]=(R(m)-1)*b,b=1;break;case 64:T()===45&&(m+=K($())),k=T(),o=l=R(A=m+=Gr(D())),v++;break;case 45:C===45&&R(m)==2&&(p=0)}}return s}function nr(r,e,t,n,a,s,i,c,f,d,o){for(var l=a-1,k=a===0?s:[""],M=tr(k),C=0,p=0,x=0;C<n;++C)for(var b=0,v=L(r,l+1,l=kr(p=i[C])),A=r;b<M;++b)(A=lr(p>0?k[b]+" "+v:h(v,/&\f/g,k[b])))&&(f[x++]=A);return U(r,e,t,a===0?rr:c,f,d,o)}function Lr(r,e,t){return U(r,e,t,hr,Y(Tr()),L(r,2,-2),0)}function ar(r,e,t,n){return U(r,e,t,er,L(r,0,n),L(r,n+1,-1),n)}function N(r,e){for(var t="",n=tr(r),a=0;a<n;a++)t+=e(r[a],a,r,e)||"";return t}function jr(r,e,t,n){switch(r.type){case $r:if(r.children.length)break;case Cr:case er:return r.return=r.return||r.value;case hr:return"";case dr:return r.return=r.value+"{"+N(r.children,n)+"}";case rr:r.value=r.props.join(",")}return R(t=N(r.children,n))?r.return=r.value+"{"+t+"}":""}function zr(r){var e=tr(r);return function(t,n,a,s){for(var i="",c=0;c<e;c++)i+=r[c](t,n,a,s)||"";return i}}function Fr(r){return function(e){e.root||(e=e.return)&&r(e)}}function Vr(r){var e=Object.create(null);return function(t){return e[t]===void 0&&(e[t]=r(t)),e[t]}}var Br=function(e,t,n){for(var a=0,s=0;a=s,s=T(),a===38&&s===12&&(t[n]=1),!j(s);)$();return F(e,S)},Dr=function(e,t){var n=-1,a=44;do switch(j(a)){case 0:a===38&&T()===12&&(t[n]=1),e[n]+=Br(S-1,t,n);break;case 2:e[n]+=K(a);break;case 4:if(a===44){e[++n]=T()===58?"&\f":"",t[n]=e[n].length;break}default:e[n]+=Y(a)}while(a=$());return e},Kr=function(e,t){return br(Dr(pr(e),t))},sr=new WeakMap,qr=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var t=e.value,n=e.parent,a=e.column===n.column&&e.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(e.props.length===1&&t.charCodeAt(0)!==58&&!sr.get(n))&&!a){sr.set(e,!0);for(var s=[],i=Kr(t,s),c=n.props,f=0,d=0;f<i.length;f++)for(var o=0;o<c.length;o++,d++)e.props[d]=s[f]?i[f].replace(/&\f/g,c[o]):c[o]+" "+i[f]}}},Hr=function(e){if(e.type==="decl"){var t=e.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(e.return="",e.value="")}};function gr(r,e){switch(Er(r,e)){case 5103:return u+"print-"+r+r;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return u+r+r;case 5349:case 4246:case 4810:case 6968:case 2756:return u+r+H+r+w+r+r;case 6828:case 4268:return u+r+w+r+r;case 6165:return u+r+w+"flex-"+r+r;case 5187:return u+r+h(r,/(\w+).+(:[^]+)/,u+"box-$1$2"+w+"flex-$1$2")+r;case 5443:return u+r+w+"flex-item-"+h(r,/flex-|-self/,"")+r;case 4675:return u+r+w+"flex-line-pack"+h(r,/align-content|flex-|-self/,"")+r;case 5548:return u+r+w+h(r,"shrink","negative")+r;case 5292:return u+r+w+h(r,"basis","preferred-size")+r;case 6060:return u+"box-"+h(r,"-grow","")+u+r+w+h(r,"grow","positive")+r;case 4554:return u+h(r,/([^-])(transform)/g,"$1"+u+"$2")+r;case 6187:return h(h(h(r,/(zoom-|grab)/,u+"$1"),/(image-set)/,u+"$1"),r,"")+r;case 5495:case 3959:return h(r,/(image-set\([^]*)/,u+"$1$`$1");case 4968:return h(h(r,/(.+:)(flex-)?(.*)/,u+"box-pack:$3"+w+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+u+r+r;case 4095:case 3583:case 4068:case 2532:return h(r,/(.+)-inline(.+)/,u+"$1$2")+r;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(R(r)-1-e>6)switch(y(r,e+1)){case 109:if(y(r,e+4)!==45)break;case 102:return h(r,/(.+:)(.+)-([^]+)/,"$1"+u+"$2-$3$1"+H+(y(r,e+3)==108?"$3":"$2-$3"))+r;case 115:return~X(r,"stretch")?gr(h(r,"stretch","fill-available"),e)+r:r}break;case 4949:if(y(r,e+1)!==115)break;case 6444:switch(y(r,R(r)-3-(~X(r,"!important")&&10))){case 107:return h(r,":",":"+u)+r;case 101:return h(r,/(.+:)([^;!]+)(;|!.+)?/,"$1"+u+(y(r,14)===45?"inline-":"")+"box$3$1"+u+"$2$3$1"+w+"$2box$3")+r}break;case 5936:switch(y(r,e+11)){case 114:return u+r+w+h(r,/[svh]\w+-[tblr]{2}/,"tb")+r;case 108:return u+r+w+h(r,/[svh]\w+-[tblr]{2}/,"tb-rl")+r;case 45:return u+r+w+h(r,/[svh]\w+-[tblr]{2}/,"lr")+r}return u+r+w+r+r}return r}var Yr=function(e,t,n,a){if(e.length>-1&&!e.return)switch(e.type){case er:e.return=gr(e.value,e.length);break;case dr:return N([W(e,{value:h(e.value,"@","@"+u)})],a);case rr:if(e.length)return Or(e.props,function(s){switch(Rr(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return N([W(e,{props:[h(s,/:(read-\w+)/,":"+H+"$1")]})],a);case"::placeholder":return N([W(e,{props:[h(s,/:(plac\w+)/,":"+u+"input-$1")]}),W(e,{props:[h(s,/:(plac\w+)/,":"+H+"$1")]}),W(e,{props:[h(s,/:(plac\w+)/,w+"input-$1")]})],a)}return""})}},Zr=[Yr],Ur=function(e){var t=e.key;if(t==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(p){var x=p.getAttribute("data-emotion");x.indexOf(" ")!==-1&&(document.head.appendChild(p),p.setAttribute("data-s",""))})}var a=e.stylisPlugins||Zr,s={},i,c=[];i=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(p){for(var x=p.getAttribute("data-emotion").split(" "),b=1;b<x.length;b++)s[x[b]]=!0;c.push(p)});var f,d=[qr,Hr];{var o,l=[jr,Fr(function(p){o.insert(p)})],k=zr(d.concat(a,l)),M=function(x){return N(Wr(x),k)};f=function(x,b,v,A){o=v,M(x?x+"{"+b.styles+"}":b.styles),A&&(C.inserted[b.name]=!0)}}var C={key:t,sheet:new Sr({key:t,container:i,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:f};return C.sheet.hydrate(c),C};function Jr(r){for(var e=0,t,n=0,a=r.length;a>=4;++n,a-=4)t=r.charCodeAt(n)&255|(r.charCodeAt(++n)&255)<<8|(r.charCodeAt(++n)&255)<<16|(r.charCodeAt(++n)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,e=(t&65535)*1540483477+((t>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(a){case 3:e^=(r.charCodeAt(n+2)&255)<<16;case 2:e^=(r.charCodeAt(n+1)&255)<<8;case 1:e^=r.charCodeAt(n)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var Qr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Xr=/[A-Z]|^ms/g,_r=/_EMO_([^_]+?)_([^]*?)_EMO_/g,yr=function(e){return e.charCodeAt(1)===45},ir=function(e){return e!=null&&typeof e!="boolean"},J=Vr(function(r){return yr(r)?r:r.replace(Xr,"-$&").toLowerCase()}),cr=function(e,t){switch(e){case"animation":case"animationName":if(typeof t=="string")return t.replace(_r,function(n,a,s){return O={name:a,styles:s,next:O},a})}return Qr[e]!==1&&!yr(e)&&typeof t=="number"&&t!==0?t+"px":t};function z(r,e,t){if(t==null)return"";if(t.__emotion_styles!==void 0)return t;switch(typeof t){case"boolean":return"";case"object":{if(t.anim===1)return O={name:t.name,styles:t.styles,next:O},t.name;if(t.styles!==void 0){var n=t.next;if(n!==void 0)for(;n!==void 0;)O={name:n.name,styles:n.styles,next:O},n=n.next;var a=t.styles+";";return a}return re(r,e,t)}case"function":{if(r!==void 0){var s=O,i=t(r);return O=s,z(r,e,i)}break}}if(e==null)return t;var c=e[t];return c!==void 0?c:t}function re(r,e,t){var n="";if(Array.isArray(t))for(var a=0;a<t.length;a++)n+=z(r,e,t[a])+";";else for(var s in t){var i=t[s];if(typeof i!="object")e!=null&&e[i]!==void 0?n+=s+"{"+e[i]+"}":ir(i)&&(n+=J(s)+":"+cr(s,i)+";");else if(Array.isArray(i)&&typeof i[0]=="string"&&(e==null||e[i[0]]===void 0))for(var c=0;c<i.length;c++)ir(i[c])&&(n+=J(s)+":"+cr(s,i[c])+";");else{var f=z(r,e,i);switch(s){case"animation":case"animationName":{n+=J(s)+":"+f+";";break}default:n+=s+"{"+f+"}"}}}return n}var or=/label:\s*([^\s;\n{]+)\s*(;|$)/g,O,Q=function(e,t,n){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var a=!0,s="";O=void 0;var i=e[0];i==null||i.raw===void 0?(a=!1,s+=z(n,t,i)):s+=i[0];for(var c=1;c<e.length;c++)s+=z(n,t,e[c]),a&&(s+=i[c]);or.lastIndex=0;for(var f="",d;(d=or.exec(s))!==null;)f+="-"+d[1];var o=Jr(s)+f;return{name:o,styles:s,next:O}},ee=!0;function vr(r,e,t){var n="";return t.split(" ").forEach(function(a){r[a]!==void 0?e.push(r[a]+";"):n+=a+" "}),n}var te=function(e,t,n){var a=e.key+"-"+t.name;(n===!1||ee===!1)&&e.registered[a]===void 0&&(e.registered[a]=t.styles)},ne=function(e,t,n){te(e,t,n);var a=e.key+"-"+t.name;if(e.inserted[t.name]===void 0){var s=t;do e.insert(t===s?"."+a:"",s,e.sheet,!0),s=s.next;while(s!==void 0)}};function fr(r,e){if(r.inserted[e.name]===void 0)return r.insert("",e,r.sheet,!0)}function ur(r,e,t){var n=[],a=vr(r,n,t);return n.length<2?t:a+e(n)}var ae=function(e){var t=Ur(e);t.sheet.speedy=function(c){this.isSpeedy=c},t.compat=!0;var n=function(){for(var f=arguments.length,d=new Array(f),o=0;o<f;o++)d[o]=arguments[o];var l=Q(d,t.registered,void 0);return ne(t,l,!1),t.key+"-"+l.name},a=function(){for(var f=arguments.length,d=new Array(f),o=0;o<f;o++)d[o]=arguments[o];var l=Q(d,t.registered),k="animation-"+l.name;return fr(t,{name:l.name,styles:"@keyframes "+k+"{"+l.styles+"}"}),k},s=function(){for(var f=arguments.length,d=new Array(f),o=0;o<f;o++)d[o]=arguments[o];var l=Q(d,t.registered);fr(t,l)},i=function(){for(var f=arguments.length,d=new Array(f),o=0;o<f;o++)d[o]=arguments[o];return ur(t.registered,n,se(d))};return{css:n,cx:i,injectGlobal:s,keyframes:a,hydrate:function(f){f.forEach(function(d){t.inserted[d]=!0})},flush:function(){t.registered={},t.inserted={},t.sheet.flush()},sheet:t.sheet,cache:t,getRegisteredStyles:vr.bind(null,t.registered),merge:ur.bind(null,t.registered,n)}},se=function r(e){for(var t="",n=0;n<e.length;n++){var a=e[n];if(a!=null){var s=void 0;switch(typeof a){case"boolean":break;case"object":{if(Array.isArray(a))s=r(a);else{s="";for(var i in a)a[i]&&i&&(s&&(s+=" "),s+=i)}break}default:s=a}s&&(t&&(t+=" "),t+=s)}}return t},ie=ae({key:"css"}),ce=ie.css;export{ce as c};