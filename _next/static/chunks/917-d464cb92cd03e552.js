(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[917],{7814:function(e,t,r){"use strict";r.d(t,{G:function(){return h}});var n=r(8947),s=r(5697),o=r.n(s),i=r(7294);function a(e){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}function f(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function d(e){return t=e,(t-=0)===t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function y(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,n=t.indexOf(":"),s=d(t.slice(0,n)),o=t.slice(n+1).trim();return s.startsWith("webkit")?e[(r=s,r.charAt(0).toUpperCase()+r.slice(1))]=o:e[s]=o,e}),{})}var m=!1;try{m=!0}catch(g){}function x(e){return e&&"object"===a(e)&&e.prefix&&e.iconName&&e.icon?e:n.Qc.icon?n.Qc.icon(e):null===e?null:e&&"object"===a(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}function b(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?c({},e,t):{}}function h(e){var t=e.forwardedRef,r=p(e,["forwardedRef"]),s=r.icon,o=r.mask,i=r.symbol,a=r.className,l=r.title,d=r.titleId,y=x(s),g=b("classes",[].concat(f(function(e){var t,r=e.spin,n=e.pulse,s=e.fixedWidth,o=e.inverse,i=e.border,a=e.listItem,l=e.flip,u=e.size,p=e.rotation,f=e.pull,d=(c(t={"fa-spin":r,"fa-pulse":n,"fa-fw":s,"fa-inverse":o,"fa-border":i,"fa-li":a,"fa-flip-horizontal":"horizontal"===l||"both"===l,"fa-flip-vertical":"vertical"===l||"both"===l},"fa-".concat(u),"undefined"!==typeof u&&null!==u),c(t,"fa-rotate-".concat(p),"undefined"!==typeof p&&null!==p&&0!==p),c(t,"fa-pull-".concat(f),"undefined"!==typeof f&&null!==f),c(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(d).map((function(e){return d[e]?e:null})).filter((function(e){return e}))}(r)),f(a.split(" ")))),v=b("transform","string"===typeof r.transform?n.Qc.transform(r.transform):r.transform),O=b("mask",x(o)),w=(0,n.qv)(y,u({},g,{},v,{},O,{symbol:i,title:l,titleId:d}));if(!w)return function(){var e;!m&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",y),null;var N=w.abstract,k={ref:t};return Object.keys(r).forEach((function(e){h.defaultProps.hasOwnProperty(e)||(k[e]=r[e])})),j(N[0],k)}h.displayName="FontAwesomeIcon",h.propTypes={border:o().bool,className:o().string,mask:o().oneOfType([o().object,o().array,o().string]),fixedWidth:o().bool,inverse:o().bool,flip:o().oneOf(["horizontal","vertical","both"]),icon:o().oneOfType([o().object,o().array,o().string]),listItem:o().bool,pull:o().oneOf(["right","left"]),pulse:o().bool,rotation:o().oneOf([0,90,180,270]),size:o().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:o().bool,symbol:o().oneOfType([o().bool,o().string]),title:o().string,transform:o().oneOfType([o().string,o().object]),swapOpacity:o().bool},h.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var j=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof r)return r;var s=(r.children||[]).map((function(r){return e(t,r)})),o=Object.keys(r.attributes||{}).reduce((function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=y(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[d(t)]=n}return e}),{attrs:{}}),i=n.style,a=void 0===i?{}:i,c=p(n,["style"]);return o.attrs.style=u({},o.attrs.style,{},a),t.apply(void 0,[r.tag,u({},o.attrs,{},c)].concat(f(s)))}.bind(null,i.createElement)},9334:function(e,t,r){"use strict";var n=r(5893),s=r(4184),o=r.n(s);t.Z=function(e){var t=e.children,r=e.className,s=void 0===r?"":r;return(0,n.jsx)("div",{className:o()("grid grid-cols-1 xl:grid-cols-12 gap-4",s),children:(0,n.jsx)("div",{className:"xl:col-start-2 xl:col-span-10 2xl:col-start-3 2xl:col-span-8",children:t})})}},3470:function(e,t,r){"use strict";var n=r(5893),s=r(7294),o=r(9334),i=r(7978),a=r(5131),c=r(7981);t.Z=function(e){var t=e.contents,r=(0,s.useState)(!1),l=r[0],u=r[1],p=(0,s.useState)({type:"image",url:"",description:""}),f=p[0],d=p[1];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.Z,{className:"article-container mt-14 text-left",children:t.map((function(e,t){return"paragraph"==e.type?(0,n.jsx)("p",{children:(0,n.jsx)(i.Z,{text:e.text})},"content-".concat(t)):"subtitle"==e.type?(0,n.jsx)("h3",{className:"subtitle",children:(0,n.jsx)(i.Z,{text:e.text})},"content-".concat(t)):"image"==e.type?(0,n.jsxs)("div",{className:"my-10",children:[(0,n.jsx)("img",{src:e.url,className:"rounded-xl mx-auto w-full sm:w-auto sm:max-w-screen-xs md:max-w-screen-sm sm:max-h-112 cursor-default sm:cursor-pointer",alt:e.description,onClick:function(){return t=e,void(window.innerWidth>=640&&(d(t),u(!0)));var t}}),e.description?(0,n.jsx)("p",{className:"img-description",children:(0,n.jsx)(i.Z,{text:e.description})}):null]},"content-".concat(t)):"unorderList"==e.type?(0,n.jsxs)("ul",{style:{listStyleType:e.styleType},children:[e.title,e.list.map((function(e,t){return(0,n.jsx)("li",{children:(0,n.jsx)(i.Z,{text:e})},"unorderList-".concat(t))}))]},"content-".concat(t)):"orderList"==e.type?(0,n.jsxs)("ol",{children:[e.title,e.list.map((function(e,t){return(0,n.jsx)("li",{children:(0,n.jsx)(i.Z,{text:e})},"orderList-".concat(t))}))]},"content-".concat(t)):void 0}))}),(0,n.jsx)(a.u,{show:l,as:s.Fragment,children:(0,n.jsx)(c.V,{open:l,onClose:function(){return u(!1)},className:"fixed z-50 inset-0 overflow-y-auto",children:(0,n.jsxs)("div",{className:"flex items-center justify-center min-h-screen",children:[(0,n.jsx)(a.u.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,n.jsx)(c.V.Overlay,{className:"fixed inset-0 bg-black opacity-50"})}),(0,n.jsx)(a.u.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-90",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-90",children:(0,n.jsxs)("div",{className:"relative bg-gray-700 text-white rounded-2xl w-5/6 mx-auto my-20 px-4 pt-4 ".concat(f.description?"pb-12":""," tracking-wider"),children:[(0,n.jsxs)("button",{className:"hamburger-btn open float-right outline-none focus:outline-none",onClick:function(){return u(!1)},children:[(0,n.jsx)("span",{}),(0,n.jsx)("span",{}),(0,n.jsx)("span",{})]}),(0,n.jsxs)("div",{className:"w-full sm:w-5/6 md:w-4/5 lg:w-2/3 mx-auto",children:[f.description&&(0,n.jsx)("p",{className:"text-lg font-light text-center mb-4 px-12",children:f.description}),(0,n.jsx)("img",{src:f.url,alt:f.description,className:"mb-4 mx-auto rounded-2xl"})]})]})})]})})})]})}},2460:function(e,t,r){"use strict";var n=r(5893),s=r(1664),o=r.n(s),i=r(7814),a=r(9398),c=function(e){var t=e.title,r=void 0===t?"":t,s=e.disabled,o=void 0!==s&&s,c=e.type,l={first:a.UXu,previous:a.EyR,next:a.yOZ,last:a.cLY};return(0,n.jsx)(i.G,{icon:l[c],className:"h-6 ".concat({first:"",previous:"",next:"",last:""}[c],"  ").concat(o?"text-gray-600 cursor-not-allowed":"text-gray-300 hover:text-white cursor-pointer"),title:r,fixedWidth:!0})};t.Z=function(e){var t=e.posts,r=e.index,s=e.prefix,i=t.length,a=t[r-1<0?0:r-1],l=t[r+1>=i?r:r+1];return(0,n.jsxs)("div",{className:"mt-12 flex gap-x-6 justify-center items-center",children:[0==r?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c,{type:"first",disabled:!0}),(0,n.jsx)(c,{type:"previous",disabled:!0})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o(),{href:"/".concat(s,"/").concat(t[0].slug),passHref:!0,children:(0,n.jsx)("a",{children:(0,n.jsx)(c,{type:"first",title:t[0].title})})}),(0,n.jsx)(o(),{href:"/".concat(s,"/").concat(a.slug),passHref:!0,children:(0,n.jsx)("a",{children:(0,n.jsx)(c,{type:"previous",title:a.title})})})]}),(0,n.jsxs)("span",{className:"w-12 ml-3 mr-2 bg-gray-600 rounded-full tracking-wider cursor-default select-none",children:[r+1<10?"0":"",r+1]}),r==i-1?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c,{type:"next",disabled:!0}),(0,n.jsx)(c,{type:"last",disabled:!0})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o(),{href:"/".concat(s,"/").concat(l.slug),passHref:!0,children:(0,n.jsx)("a",{children:(0,n.jsx)(c,{type:"next",title:l.title})})}),(0,n.jsx)(o(),{href:"/".concat(s,"/").concat(t[i-1].slug),passHref:!0,children:(0,n.jsx)("a",{children:(0,n.jsx)(c,{type:"last",title:t[i-1].title})})})]})]})}},2918:function(e,t,r){e.exports=r(67)},2703:function(e,t,r){"use strict";var n=r(414);function s(){}function o(){}o.resetWarningCache=s,e.exports=function(){function e(e,t,r,s,o,i){if(i!==n){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:s};return r.PropTypes=r,r}},5697:function(e,t,r){e.exports=r(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);