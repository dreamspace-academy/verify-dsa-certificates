"use strict";(self.webpackChunkverify_dss_certification=self.webpackChunkverify_dss_certification||[]).push([[786],{7392:(e,t,n)=>{n.d(t,{A:()=>b});var r=n(5043),o=n(8387),i=n(8610),a=n(1546),s=n(4535),c=n(6262),f=n(2445),p=n(8206),l=n(3424),u=n(6803),d=n(2532),m=n(2372);function h(e){return(0,m.Ay)("MuiIconButton",e)}const v=(0,d.A)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]);var g=n(579);const y=(0,s.Ay)(l.A,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,"default"!==n.color&&t[`color${(0,u.A)(n.color)}`],n.edge&&t[`edge${(0,u.A)(n.edge)}`],t[`size${(0,u.A)(n.size)}`]]}})((0,c.A)((e=>{let{theme:t}=e;return{textAlign:"center",flex:"0 0 auto",fontSize:t.typography.pxToRem(24),padding:8,borderRadius:"50%",color:(t.vars||t).palette.action.active,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),variants:[{props:{disableRipple:!1},style:{"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:(0,a.X4)(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}},{props:{edge:"start"},style:{marginLeft:-12}},{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:{edge:"end"},style:{marginRight:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}}]}})),(0,c.A)((e=>{let{theme:t}=e;return{variants:[{props:{color:"inherit"},style:{color:"inherit"}},...Object.entries(t.palette).filter((0,f.A)()).map((e=>{let[n]=e;return{props:{color:n},style:{color:(t.vars||t).palette[n].main}}})),...Object.entries(t.palette).filter((0,f.A)()).map((e=>{let[n]=e;return{props:{color:n,disableRipple:!1},style:{"&:hover":{backgroundColor:t.vars?`rgba(${(t.vars||t).palette[n].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:(0,a.X4)((t.vars||t).palette[n].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}}})),{props:{size:"small"},style:{padding:5,fontSize:t.typography.pxToRem(18)}},{props:{size:"large"},style:{padding:12,fontSize:t.typography.pxToRem(28)}}],[`&.${v.disabled}`]:{backgroundColor:"transparent",color:(t.vars||t).palette.action.disabled}}}))),b=r.forwardRef((function(e,t){const n=(0,p.b)({props:e,name:"MuiIconButton"}),{edge:r=!1,children:a,className:s,color:c="default",disabled:f=!1,disableFocusRipple:l=!1,disableRipple:d=!1,size:m="medium",...v}=n,b={...n,edge:r,color:c,disabled:f,disableFocusRipple:l,disableRipple:d,size:m},x=(e=>{const{classes:t,disabled:n,color:r,edge:o,size:a}=e,s={root:["root",n&&"disabled","default"!==r&&`color${(0,u.A)(r)}`,o&&`edge${(0,u.A)(o)}`,`size${(0,u.A)(a)}`]};return(0,i.A)(s,h,t)})(b);return(0,g.jsx)(y,{className:(0,o.A)(x.root,s),centerRipple:!0,focusRipple:!l,disabled:f,disableRipple:d,ref:t,...v,ownerState:b,children:a})}))},5953:(e,t,n)=>{n.d(t,{A:()=>ze});var r=n(875),o=n(5043),i=n(3462),a=n(4440),s=n(1668);function c(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function f(e){return e instanceof c(e).Element||e instanceof Element}function p(e){return e instanceof c(e).HTMLElement||e instanceof HTMLElement}function l(e){return"undefined"!==typeof ShadowRoot&&(e instanceof c(e).ShadowRoot||e instanceof ShadowRoot)}var u=Math.max,d=Math.min,m=Math.round;function h(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function v(){return!/^((?!chrome|android).)*safari/i.test(h())}function g(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var r=e.getBoundingClientRect(),o=1,i=1;t&&p(e)&&(o=e.offsetWidth>0&&m(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&m(r.height)/e.offsetHeight||1);var a=(f(e)?c(e):window).visualViewport,s=!v()&&n,l=(r.left+(s&&a?a.offsetLeft:0))/o,u=(r.top+(s&&a?a.offsetTop:0))/i,d=r.width/o,h=r.height/i;return{width:d,height:h,top:u,right:l+d,bottom:u+h,left:l,x:l,y:u}}function y(e){var t=c(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function b(e){return e?(e.nodeName||"").toLowerCase():null}function x(e){return((f(e)?e.ownerDocument:e.document)||window.document).documentElement}function w(e){return g(x(e)).left+y(e).scrollLeft}function O(e){return c(e).getComputedStyle(e)}function A(e){var t=O(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function R(e,t,n){void 0===n&&(n=!1);var r=p(t),o=p(t)&&function(e){var t=e.getBoundingClientRect(),n=m(t.width)/e.offsetWidth||1,r=m(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),i=x(t),a=g(e,o,n),s={scrollLeft:0,scrollTop:0},f={x:0,y:0};return(r||!r&&!n)&&(("body"!==b(t)||A(i))&&(s=function(e){return e!==c(e)&&p(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:y(e);var t}(t)),p(t)?((f=g(t,!0)).x+=t.clientLeft,f.y+=t.clientTop):i&&(f.x=w(i))),{x:a.left+s.scrollLeft-f.x,y:a.top+s.scrollTop-f.y,width:a.width,height:a.height}}function j(e){var t=g(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function E(e){return"html"===b(e)?e:e.assignedSlot||e.parentNode||(l(e)?e.host:null)||x(e)}function P(e){return["html","body","#document"].indexOf(b(e))>=0?e.ownerDocument.body:p(e)&&A(e)?e:P(E(e))}function k(e,t){var n;void 0===t&&(t=[]);var r=P(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=c(r),a=o?[i].concat(i.visualViewport||[],A(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(k(E(a)))}function M(e){return["table","td","th"].indexOf(b(e))>=0}function D(e){return p(e)&&"fixed"!==O(e).position?e.offsetParent:null}function S(e){for(var t=c(e),n=D(e);n&&M(n)&&"static"===O(n).position;)n=D(n);return n&&("html"===b(n)||"body"===b(n)&&"static"===O(n).position)?t:n||function(e){var t=/firefox/i.test(h());if(/Trident/i.test(h())&&p(e)&&"fixed"===O(e).position)return null;var n=E(e);for(l(n)&&(n=n.host);p(n)&&["html","body"].indexOf(b(n))<0;){var r=O(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}var L="top",B="bottom",T="right",W="left",z="auto",C=[L,B,T,W],H="start",I="end",V="viewport",$="popper",q=C.reduce((function(e,t){return e.concat([t+"-"+H,t+"-"+I])}),[]),N=[].concat(C,[z]).reduce((function(e,t){return e.concat([t,t+"-"+H,t+"-"+I])}),[]),F=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function _(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function U(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var X={placement:"bottom",modifiers:[],strategy:"absolute"};function Y(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function G(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?X:o;return function(e,t,n){void 0===n&&(n=i);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},X,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],s=!1,c={state:o,setOptions:function(n){var s="function"===typeof n?n(o.options):n;p(),o.options=Object.assign({},i,o.options,s),o.scrollParents={reference:f(e)?k(e):e.contextElement?k(e.contextElement):[],popper:k(t)};var l=function(e){var t=_(e);return F.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,o.options.modifiers)));return o.orderedModifiers=l.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect;if("function"===typeof i){var s=i({state:o,name:t,instance:c,options:r}),f=function(){};a.push(s||f)}})),c.update()},forceUpdate:function(){if(!s){var e=o.elements,t=e.reference,n=e.popper;if(Y(t,n)){o.rects={reference:R(t,S(n),"fixed"===o.options.strategy),popper:j(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var i=o.orderedModifiers[r],a=i.fn,f=i.options,p=void 0===f?{}:f,l=i.name;"function"===typeof a&&(o=a({state:o,options:p,name:l,instance:c})||o)}else o.reset=!1,r=-1}}},update:U((function(){return new Promise((function(e){c.forceUpdate(),e(o)}))})),destroy:function(){p(),s=!0}};if(!Y(e,t))return c;function p(){a.forEach((function(e){return e()})),a=[]}return c.setOptions(n).then((function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)})),c}}var J={passive:!0};function K(e){return e.split("-")[0]}function Q(e){return e.split("-")[1]}function Z(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function ee(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?K(o):null,a=o?Q(o):null,s=n.x+n.width/2-r.width/2,c=n.y+n.height/2-r.height/2;switch(i){case L:t={x:s,y:n.y-r.height};break;case B:t={x:s,y:n.y+n.height};break;case T:t={x:n.x+n.width,y:c};break;case W:t={x:n.x-r.width,y:c};break;default:t={x:n.x,y:n.y}}var f=i?Z(i):null;if(null!=f){var p="y"===f?"height":"width";switch(a){case H:t[f]=t[f]-(n[p]/2-r[p]/2);break;case I:t[f]=t[f]+(n[p]/2-r[p]/2)}}return t}var te={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ne(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,s=e.position,f=e.gpuAcceleration,p=e.adaptive,l=e.roundOffsets,u=e.isFixed,d=a.x,h=void 0===d?0:d,v=a.y,g=void 0===v?0:v,y="function"===typeof l?l({x:h,y:g}):{x:h,y:g};h=y.x,g=y.y;var b=a.hasOwnProperty("x"),w=a.hasOwnProperty("y"),A=W,R=L,j=window;if(p){var E=S(n),P="clientHeight",k="clientWidth";if(E===c(n)&&"static"!==O(E=x(n)).position&&"absolute"===s&&(P="scrollHeight",k="scrollWidth"),o===L||(o===W||o===T)&&i===I)R=B,g-=(u&&E===j&&j.visualViewport?j.visualViewport.height:E[P])-r.height,g*=f?1:-1;if(o===W||(o===L||o===B)&&i===I)A=T,h-=(u&&E===j&&j.visualViewport?j.visualViewport.width:E[k])-r.width,h*=f?1:-1}var M,D=Object.assign({position:s},p&&te),z=!0===l?function(e,t){var n=e.x,r=e.y,o=t.devicePixelRatio||1;return{x:m(n*o)/o||0,y:m(r*o)/o||0}}({x:h,y:g},c(n)):{x:h,y:g};return h=z.x,g=z.y,f?Object.assign({},D,((M={})[R]=w?"0":"",M[A]=b?"0":"",M.transform=(j.devicePixelRatio||1)<=1?"translate("+h+"px, "+g+"px)":"translate3d("+h+"px, "+g+"px, 0)",M)):Object.assign({},D,((t={})[R]=w?g+"px":"",t[A]=b?h+"px":"",t.transform="",t))}const re={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=N.reduce((function(e,n){return e[n]=function(e,t,n){var r=K(e),o=[W,L].indexOf(r)>=0?-1:1,i="function"===typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[W,T].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],c=s.x,f=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=f),t.modifiersData[r]=a}};var oe={left:"right",right:"left",bottom:"top",top:"bottom"};function ie(e){return e.replace(/left|right|bottom|top/g,(function(e){return oe[e]}))}var ae={start:"end",end:"start"};function se(e){return e.replace(/start|end/g,(function(e){return ae[e]}))}function ce(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&l(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function fe(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function pe(e,t,n){return t===V?fe(function(e,t){var n=c(e),r=x(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,f=0;if(o){i=o.width,a=o.height;var p=v();(p||!p&&"fixed"===t)&&(s=o.offsetLeft,f=o.offsetTop)}return{width:i,height:a,x:s+w(e),y:f}}(e,n)):f(t)?function(e,t){var n=g(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):fe(function(e){var t,n=x(e),r=y(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=u(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=u(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+w(e),c=-r.scrollTop;return"rtl"===O(o||n).direction&&(s+=u(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:c}}(x(e)))}function le(e,t,n,r){var o="clippingParents"===t?function(e){var t=k(E(e)),n=["absolute","fixed"].indexOf(O(e).position)>=0&&p(e)?S(e):e;return f(n)?t.filter((function(e){return f(e)&&ce(e,n)&&"body"!==b(e)})):[]}(e):[].concat(t),i=[].concat(o,[n]),a=i[0],s=i.reduce((function(t,n){var o=pe(e,n,r);return t.top=u(o.top,t.top),t.right=d(o.right,t.right),t.bottom=d(o.bottom,t.bottom),t.left=u(o.left,t.left),t}),pe(e,a,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function ue(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function de(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function me(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,i=n.strategy,a=void 0===i?e.strategy:i,s=n.boundary,c=void 0===s?"clippingParents":s,p=n.rootBoundary,l=void 0===p?V:p,u=n.elementContext,d=void 0===u?$:u,m=n.altBoundary,h=void 0!==m&&m,v=n.padding,y=void 0===v?0:v,b=ue("number"!==typeof y?y:de(y,C)),w=d===$?"reference":$,O=e.rects.popper,A=e.elements[h?w:d],R=le(f(A)?A:A.contextElement||x(e.elements.popper),c,l,a),j=g(e.elements.reference),E=ee({reference:j,element:O,strategy:"absolute",placement:o}),P=fe(Object.assign({},O,E)),k=d===$?P:j,M={top:R.top-k.top+b.top,bottom:k.bottom-R.bottom+b.bottom,left:R.left-k.left+b.left,right:k.right-R.right+b.right},D=e.modifiersData.offset;if(d===$&&D){var S=D[o];Object.keys(M).forEach((function(e){var t=[T,B].indexOf(e)>=0?1:-1,n=[L,B].indexOf(e)>=0?"y":"x";M[e]+=S[n]*t}))}return M}function he(e,t,n){return u(e,d(t,n))}const ve={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,c=n.boundary,f=n.rootBoundary,p=n.altBoundary,l=n.padding,m=n.tether,h=void 0===m||m,v=n.tetherOffset,g=void 0===v?0:v,y=me(t,{boundary:c,rootBoundary:f,padding:l,altBoundary:p}),b=K(t.placement),x=Q(t.placement),w=!x,O=Z(b),A="x"===O?"y":"x",R=t.modifiersData.popperOffsets,E=t.rects.reference,P=t.rects.popper,k="function"===typeof g?g(Object.assign({},t.rects,{placement:t.placement})):g,M="number"===typeof k?{mainAxis:k,altAxis:k}:Object.assign({mainAxis:0,altAxis:0},k),D=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,z={x:0,y:0};if(R){if(i){var C,I="y"===O?L:W,V="y"===O?B:T,$="y"===O?"height":"width",q=R[O],N=q+y[I],F=q-y[V],_=h?-P[$]/2:0,U=x===H?E[$]:P[$],X=x===H?-P[$]:-E[$],Y=t.elements.arrow,G=h&&Y?j(Y):{width:0,height:0},J=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},ee=J[I],te=J[V],ne=he(0,E[$],G[$]),re=w?E[$]/2-_-ne-ee-M.mainAxis:U-ne-ee-M.mainAxis,oe=w?-E[$]/2+_+ne+te+M.mainAxis:X+ne+te+M.mainAxis,ie=t.elements.arrow&&S(t.elements.arrow),ae=ie?"y"===O?ie.clientTop||0:ie.clientLeft||0:0,se=null!=(C=null==D?void 0:D[O])?C:0,ce=q+oe-se,fe=he(h?d(N,q+re-se-ae):N,q,h?u(F,ce):F);R[O]=fe,z[O]=fe-q}if(s){var pe,le="x"===O?L:W,ue="x"===O?B:T,de=R[A],ve="y"===A?"height":"width",ge=de+y[le],ye=de-y[ue],be=-1!==[L,W].indexOf(b),xe=null!=(pe=null==D?void 0:D[A])?pe:0,we=be?ge:de-E[ve]-P[ve]-xe+M.altAxis,Oe=be?de+E[ve]+P[ve]-xe-M.altAxis:ye,Ae=h&&be?function(e,t,n){var r=he(e,t,n);return r>n?n:r}(we,de,Oe):he(h?we:ge,de,h?Oe:ye);R[A]=Ae,z[A]=Ae-de}t.modifiersData[r]=z}},requiresIfExists:["offset"]};const ge={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=K(n.placement),c=Z(s),f=[W,T].indexOf(s)>=0?"height":"width";if(i&&a){var p=function(e,t){return ue("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:de(e,C))}(o.padding,n),l=j(i),u="y"===c?L:W,d="y"===c?B:T,m=n.rects.reference[f]+n.rects.reference[c]-a[c]-n.rects.popper[f],h=a[c]-n.rects.reference[c],v=S(i),g=v?"y"===c?v.clientHeight||0:v.clientWidth||0:0,y=m/2-h/2,b=p[u],x=g-l[f]-p[d],w=g/2-l[f]/2+y,O=he(b,w,x),A=c;n.modifiersData[r]=((t={})[A]=O,t.centerOffset=O-w,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!==typeof r||(r=t.elements.popper.querySelector(r)))&&ce(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ye(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function be(e){return[L,T,B,W].some((function(t){return e[t]>=0}))}var xe=G({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,f=c(t.elements.popper),p=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&p.forEach((function(e){e.addEventListener("scroll",n.update,J)})),s&&f.addEventListener("resize",n.update,J),function(){i&&p.forEach((function(e){e.removeEventListener("scroll",n.update,J)})),s&&f.removeEventListener("resize",n.update,J)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=ee({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,c=void 0===s||s,f={placement:K(t.placement),variation:Q(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,ne(Object.assign({},f,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,ne(Object.assign({},f,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];p(o)&&b(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});p(r)&&b(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},re,{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,c=n.fallbackPlacements,f=n.padding,p=n.boundary,l=n.rootBoundary,u=n.altBoundary,d=n.flipVariations,m=void 0===d||d,h=n.allowedAutoPlacements,v=t.options.placement,g=K(v),y=c||(g===v||!m?[ie(v)]:function(e){if(K(e)===z)return[];var t=ie(e);return[se(e),t,se(t)]}(v)),b=[v].concat(y).reduce((function(e,n){return e.concat(K(n)===z?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,f=void 0===c?N:c,p=Q(r),l=p?s?q:q.filter((function(e){return Q(e)===p})):C,u=l.filter((function(e){return f.indexOf(e)>=0}));0===u.length&&(u=l);var d=u.reduce((function(t,n){return t[n]=me(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[K(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:p,rootBoundary:l,padding:f,flipVariations:m,allowedAutoPlacements:h}):n)}),[]),x=t.rects.reference,w=t.rects.popper,O=new Map,A=!0,R=b[0],j=0;j<b.length;j++){var E=b[j],P=K(E),k=Q(E)===H,M=[L,B].indexOf(P)>=0,D=M?"width":"height",S=me(t,{placement:E,boundary:p,rootBoundary:l,altBoundary:u,padding:f}),I=M?k?T:W:k?B:L;x[D]>w[D]&&(I=ie(I));var V=ie(I),$=[];if(i&&$.push(S[P]<=0),s&&$.push(S[I]<=0,S[V]<=0),$.every((function(e){return e}))){R=E,A=!1;break}O.set(E,$)}if(A)for(var F=function(e){var t=b.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return R=t,"break"},_=m?3:1;_>0;_--){if("break"===F(_))break}t.placement!==R&&(t.modifiersData[r]._skip=!0,t.placement=R,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},ve,ge,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=me(t,{elementContext:"reference"}),s=me(t,{altBoundary:!0}),c=ye(a,r),f=ye(s,o,i),p=be(c),l=be(f);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:f,isReferenceHidden:p,hasPopperEscaped:l},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":l})}}]}),we=n(8610),Oe=n(8092),Ae=n(7022),Re=n(2532),je=n(2372);function Ee(e){return(0,je.Ay)("MuiPopper",e)}(0,Re.A)("MuiPopper",["root"]);var Pe=n(579);function ke(e){return"function"===typeof e?e():e}function Me(e){return void 0!==e.nodeType}const De={},Se=o.forwardRef((function(e,t){const{anchorEl:n,children:r,direction:s,disablePortal:c,modifiers:f,open:p,placement:l,popperOptions:u,popperRef:d,slotProps:m={},slots:h={},TransitionProps:v,ownerState:g,...y}=e,b=o.useRef(null),x=(0,i.A)(b,t),w=o.useRef(null),O=(0,i.A)(w,d),A=o.useRef(O);(0,a.A)((()=>{A.current=O}),[O]),o.useImperativeHandle(d,(()=>w.current),[]);const R=function(e,t){if("ltr"===t)return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}(l,s),[j,E]=o.useState(R),[P,k]=o.useState(ke(n));o.useEffect((()=>{w.current&&w.current.forceUpdate()})),o.useEffect((()=>{n&&k(ke(n))}),[n]),(0,a.A)((()=>{if(!P||!p)return;let e=[{name:"preventOverflow",options:{altBoundary:c}},{name:"flip",options:{altBoundary:c}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:e=>{let{state:t}=e;E(t.placement)}}];null!=f&&(e=e.concat(f)),u&&null!=u.modifiers&&(e=e.concat(u.modifiers));const t=xe(P,b.current,{placement:R,...u,modifiers:e});return A.current(t),()=>{t.destroy(),A.current(null)}}),[P,c,f,p,u,R]);const M={placement:j};null!==v&&(M.TransitionProps=v);const D=(e=>{const{classes:t}=e;return(0,we.A)({root:["root"]},Ee,t)})(e),S=h.root??"div",L=(0,Oe.A)({elementType:S,externalSlotProps:m.root,externalForwardedProps:y,additionalProps:{role:"tooltip",ref:x},ownerState:e,className:D.root});return(0,Pe.jsx)(S,{...L,children:"function"===typeof r?r(M):r})})),Le=o.forwardRef((function(e,t){const{anchorEl:n,children:r,container:i,direction:a="ltr",disablePortal:c=!1,keepMounted:f=!1,modifiers:p,open:l,placement:u="bottom",popperOptions:d=De,popperRef:m,style:h,transition:v=!1,slotProps:g={},slots:y={},...b}=e,[x,w]=o.useState(!0);if(!f&&!l&&(!v||x))return null;let O;if(i)O=i;else if(n){const e=ke(n);O=e&&Me(e)?(0,s.A)(e).body:(0,s.A)(null).body}const A=l||!f||v&&!x?void 0:"none",R=v?{in:l,onEnter:()=>{w(!1)},onExited:()=>{w(!0)}}:void 0;return(0,Pe.jsx)(Ae.A,{disablePortal:c,container:O,children:(0,Pe.jsx)(Se,{anchorEl:n,direction:a,disablePortal:c,modifiers:p,ref:t,open:v?!x:l,placement:u,popperOptions:d,popperRef:m,slotProps:g,slots:y,...b,style:{position:"fixed",top:0,left:0,display:A,...h},TransitionProps:R,children:r})})}));var Be=n(4535),Te=n(8206);const We=(0,Be.Ay)(Le,{name:"MuiPopper",slot:"Root",overridesResolver:(e,t)=>t.root})({}),ze=o.forwardRef((function(e,t){const n=(0,r.I)(),o=(0,Te.b)({props:e,name:"MuiPopper"}),{anchorEl:i,component:a,components:s,componentsProps:c,container:f,disablePortal:p,keepMounted:l,modifiers:u,open:d,placement:m,popperOptions:h,popperRef:v,transition:g,slots:y,slotProps:b,...x}=o,w=y?.root??s?.Root,O={anchorEl:i,container:f,disablePortal:p,keepMounted:l,modifiers:u,open:d,placement:m,popperOptions:h,popperRef:v,transition:g,...x};return(0,Pe.jsx)(We,{as:a,direction:n?"rtl":"ltr",slots:{root:w},slotProps:b??c,...O,ref:t})}))}}]);
//# sourceMappingURL=786.2691a3d4.chunk.js.map