(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7814:function(e,t,r){"use strict";r.d(t,{G:function(){return g}});var n=r(8947),a=r(5697),i=r.n(a),o=r(7294);function s(e){return s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function p(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function d(e){return t=e,(t-=0)===t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function m(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,n=t.indexOf(":"),a=d(t.slice(0,n)),i=t.slice(n+1).trim();return a.startsWith("webkit")?e[(r=a,r.charAt(0).toUpperCase()+r.slice(1))]=i:e[a]=i,e}),{})}var b=!1;try{b=!0}catch(j){}function y(e){return e&&"object"===s(e)&&e.prefix&&e.iconName&&e.icon?e:n.Qc.icon?n.Qc.icon(e):null===e?null:e&&"object"===s(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}function x(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?l({},e,t):{}}function g(e){var t=e.forwardedRef,r=f(e,["forwardedRef"]),a=r.icon,i=r.mask,o=r.symbol,s=r.className,c=r.title,d=r.titleId,m=y(a),j=x("classes",[].concat(p(function(e){var t,r=e.spin,n=e.pulse,a=e.fixedWidth,i=e.inverse,o=e.border,s=e.listItem,c=e.flip,u=e.size,f=e.rotation,p=e.pull,d=(l(t={"fa-spin":r,"fa-pulse":n,"fa-fw":a,"fa-inverse":i,"fa-border":o,"fa-li":s,"fa-flip-horizontal":"horizontal"===c||"both"===c,"fa-flip-vertical":"vertical"===c||"both"===c},"fa-".concat(u),"undefined"!==typeof u&&null!==u),l(t,"fa-rotate-".concat(f),"undefined"!==typeof f&&null!==f&&0!==f),l(t,"fa-pull-".concat(p),"undefined"!==typeof p&&null!==p),l(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(d).map((function(e){return d[e]?e:null})).filter((function(e){return e}))}(r)),p(s.split(" ")))),v=x("transform","string"===typeof r.transform?n.Qc.transform(r.transform):r.transform),w=x("mask",y(i)),N=(0,n.qv)(m,u({},j,{},v,{},w,{symbol:o,title:c,titleId:d}));if(!N)return function(){var e;!b&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",m),null;var O=N.abstract,k={ref:t};return Object.keys(r).forEach((function(e){g.defaultProps.hasOwnProperty(e)||(k[e]=r[e])})),h(O[0],k)}g.displayName="FontAwesomeIcon",g.propTypes={border:i().bool,className:i().string,mask:i().oneOfType([i().object,i().array,i().string]),fixedWidth:i().bool,inverse:i().bool,flip:i().oneOf(["horizontal","vertical","both"]),icon:i().oneOfType([i().object,i().array,i().string]),listItem:i().bool,pull:i().oneOf(["right","left"]),pulse:i().bool,rotation:i().oneOf([0,90,180,270]),size:i().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:i().bool,symbol:i().oneOfType([i().bool,i().string]),title:i().string,transform:i().oneOfType([i().string,i().object]),swapOpacity:i().bool},g.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var h=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof r)return r;var a=(r.children||[]).map((function(r){return e(t,r)})),i=Object.keys(r.attributes||{}).reduce((function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=m(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[d(t)]=n}return e}),{attrs:{}}),o=n.style,s=void 0===o?{}:o,l=f(n,["style"]);return i.attrs.style=u({},i.attrs.style,{},s),t.apply(void 0,[r.tag,u({},i.attrs,{},l)].concat(p(a)))}.bind(null,o.createElement)},5301:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(4186)}])},7471:function(e,t,r){"use strict";var n=r(5893),a=(r(1548),r(3873),r(6066)),i=r(1163),o=r(9383),s=r(5894);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){l(e,t,r[t])}))}return e}t.Z=function(e){var t=e.slides,r=e.link,l=e.initialSlide,u=void 0===l?0:l,f=(0,i.useRouter)(),p={autoplay:!0,autoplaySpeed:6e3,className:"center",dots:!0,centerMode:!0,infinite:!0,centerPadding:"16%",slidesToShow:1,speed:500,initialSlide:u,responsive:[{breakpoint:768,settings:{centerMode:!1}}]};return(0,n.jsx)(o.Z,{className:"pt-6 pb-4",children:(0,n.jsx)(a.Z,c({},p,{children:t&&t.map((function(e,t){return(0,n.jsx)("div",{className:"w-2/3 outline-none",onClick:function(){return f.push("/".concat(r,"/").concat(e.slug))},children:(0,n.jsx)("div",{className:"relative bg-center bg-cover h-80 lg:h-96 mx-1.5 text-black",style:{backgroundImage:"url('".concat(e.imageUrl,"')")},children:(0,n.jsxs)("div",{className:"absolute bottom-0 w-full px-6 pb-10 py-4 bg-gray-900 bg-opacity-40 text-white",children:[(0,n.jsx)("p",{className:"mb-1 font-medium text-xl truncate tracking-wider",children:e.title}),(0,n.jsx)(s.Z,{className:"truncate",children:e.description})]})})},"slide-".concat(t))}))}))})}},9334:function(e,t,r){"use strict";var n=r(5893),a=r(4184),i=r.n(a);t.Z=function(e){var t=e.children,r=e.className,a=void 0===r?"":r;return(0,n.jsx)("div",{className:i()("grid grid-cols-1 xl:grid-cols-12 gap-4",a),children:(0,n.jsx)("div",{className:"xl:col-start-2 xl:col-span-10 2xl:col-start-3 2xl:col-span-8",children:t})})}},5894:function(e,t,r){"use strict";var n=r(5893),a=r(4184),i=r.n(a);t.Z=function(e){var t=e.children,r=e.className,a=void 0===r?"":r;return(0,n.jsx)("p",{className:i()(a,"font-light tracking-wider"),children:t})}},4186:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var n=r(5893),a=r(1664),i=r.n(a),o=r(7294),s=r(7814),l=r(9398),c=r(5131),u=r(7981),f=r(7471),p=r(9334),d=r(7348),m=r(9383),b=r(1287),y=r(5894),x=r(9361);function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var h=function(){return(0,n.jsxs)(m.Z,{className:"cursor-default select-none",children:[(0,n.jsx)("h1",{className:"font-semibold tracking-widest text-3xl mb-3",style:{fontFamily:"GenYoMin"},children:"\u6e05\u5927\u5929\u6587\u793e"}),(0,n.jsx)("h1",{className:"font-semibold tracking-widest text-5xl",style:{fontFamily:"GenYoMin"},children:"50\u9031\u5e74"}),(0,n.jsx)("div",{className:"flex justify-center",children:(0,n.jsx)("div",{className:"mt-4 w-48 h-2.5",style:{backgroundColor:"#2d2d30",borderRadius:"50%"}})})]})},j=function(){var e=(0,o.useState)(!1),t=e[0],r=e[1],a=(0,o.useState)(!1),f=a[0],b=a[1],x=!0,h=(0,o.useState)(!1),j=h[0],v=h[1],w=(0,o.useState)({name:"",department:"",identity:"",email:"",phone:"",attendence:"\u53c3\u52a0\uff08\u81fa\u7063\uff09",familyMember:"",suggestion:""}),N=w[0],O=w[1],k=function(e,t){O((function(r){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){g(e,t,r[t])}))}return e}({},r,g({},e,t))}))};return(0,o.useEffect)((function(){N.name&&N.department&&N.identity&&N.email&&/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(N.email)&&N.attendence&&void 0!=N.familyMember&&""!=N.familyMember?v(!0):v(!1)}),[N]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(m.Z,{color:"purple-50",children:[(0,n.jsxs)(p.Z,{children:[(0,n.jsx)(d.H2,{children:"\u95dc\u65bc\u6211\u5011"}),(0,n.jsxs)(y.Z,{className:"mb-4",children:["\u52d5\u624b\u505a\u3000\u8981\u6709\u4e2d\u570b\u7684\u79d1\u5b78\u81ea\u4fe1\uff01",(0,n.jsx)("br",{}),"\u7528\u8166\u60f3\u3000\u57f9\u80b2\u84bc\u7a79\u7684\u6d69\u701a\u5fc3\u80f8\uff01"]}),(0,n.jsx)(y.Z,{className:"mb-8",children:"\u6b72\u6708\u5982\u767d\u99d2\u904e\u9699\uff0c\u500f\u7136\u5373\u901d\uff0c\u4eca\u5e74\u7d42\u65bc\u4f86\u5230\u4e86\u6211\u5011\u6e05\u5927\u5929\u6587\u793e\u5275\u7acb\u7684 50 \u9031\u5e74\uff0c\u6211\u5011\u5c07\u65bc\u81fa\u7063\u6642\u9593 11/27\uff08\u516d\uff09\u64f4\u5927\u8209\u8fa6 50 \u9031\u5e74\u793e\u6176\uff0c\u4e26\u8207\u7f8e\u570b\u9023\u7dda\u540c\u6b65\u8996\u8a0a\uff0c\u5728\u6b64\u656c\u9080\u5404\u4f4d\u6d77\u5167\u5916\u7684\u793e\u53cb\u5011\u56de\u4f86\u5171\u8944\u76db\u8209\uff0c\u4e00\u540c\u6b61\u6176\u9019\u503c\u5f97\u7d00\u5ff5\u7684\u4e00\u523b\u3002"})]}),(0,n.jsx)("div",{className:"flex justify-center",children:(0,n.jsxs)("div",{className:"flex items-center h-12 pl-2 pr-4 py-2 border-2 border-purple-600 rounded-lg cursor-pointer select-none pulse-button",onClick:function(){return b(!f)},children:[(0,n.jsx)("p",{className:"w-24 tracking-wider max-h-full",children:"\u793e\u6176\u5831\u540d"}),(0,n.jsx)(s.G,{className:"max-h-full w-3 transform transition-transform duration-500 ".concat(f?"rotate-90":""),icon:l._tD,fixedWidth:!0})]})}),(0,n.jsx)("div",{className:"transition-max-height duration-500 overflow-hidden ".concat(f?"max-h-2x-screen":"max-h-0 delay-400"),children:(0,n.jsxs)("div",{className:"transition duration-500 ease-in-out mt-16 ".concat(f?"opacity-100":"opacity-0 delay-500"),children:[(0,n.jsxs)(d.H3,{className:"mb-2",children:["\u570b\u7acb\u6e05\u83ef\u5927\u5b78 \u7269\u7406\u99281\u6a13\u4e2d\u5ead",(0,n.jsx)(s.G,{className:"w-4 inline mb-1.5 ml-2 text-purple-600",icon:l.FGq})]}),(0,n.jsx)(d.H3,{className:"mb-8",children:"2021\u5e7411\u670827\u65e5 (\u516d) 13:30~17:00"}),(0,n.jsxs)(y.Z,{className:"mb-4",children:["\u5b89\u6392\u793e\u53cb\u77ed\u8b1b\u3001\u6587\u7269\u5c55\u89bd\u3001\u651d\u5f71\u4f5c\u54c1\u3001\u7d00\u5ff5\u54c1\u8ca9\u552e\u3001\u793e\u7aa9\u53c3\u89c0\u3001\u8336\u9ede\u3002",(0,n.jsx)("br",{}),"\uff08\u4ee5\u4e0a\u898f\u5283\u5c07\u8996\u75ab\u60c5\u6efe\u52d5\u8abf\u6574\uff09"]}),(0,n.jsx)("div",{className:"flex justify-center mt-12",children:(0,n.jsx)("div",{className:"w-72",children:(0,n.jsxs)("form",{autoComplete:"off",children:[(0,n.jsx)("input",{type:"text",name:"name",value:N.name,className:"w-full my-2 px-4 py-2 font-light tracking-wide ring-offset-2 border-2 border-purple-600 rounded text-black focus:outline-none focus:ring-2 ring-offset-2 ring-purple-600 ring-opacity-60",placeholder:"\u59d3\u540d",autoComplete:"off",onChange:function(e){return k("name",e.target.value)},disabled:x}),(0,n.jsx)("input",{type:"text",name:"department",value:N.department,className:"w-full my-2 px-4 py-2 font-light tracking-wide ring-offset-2 border-2 border-purple-600 rounded text-black focus:outline-none focus:ring-2 ring-offset-2 ring-purple-600 ring-opacity-60",placeholder:"\u7cfb\u7d1a\uff08xx\u7cfbxx\u7d1a\uff09",autoComplete:"off",onChange:function(e){return k("department",e.target.value)},disabled:x}),(0,n.jsx)("input",{type:"text",name:"identity",value:N.identity,className:"w-full my-2 px-4 py-2 font-light tracking-wide ring-offset-2 border-2 border-purple-600 rounded text-black focus:outline-none focus:ring-2 ring-offset-2 ring-purple-600 ring-opacity-60",placeholder:"\u793e\u5167\u8eab\u4efd",autoComplete:"off",onChange:function(e){return k("identity",e.target.value)},disabled:x}),(0,n.jsx)("input",{type:"email",name:"email",value:N.email,className:"w-full my-2 px-4 py-2 font-light tracking-wide ring-offset-2 border-2 border-purple-600 rounded text-black focus:outline-none focus:ring-2 ring-offset-2 ring-purple-600 ring-opacity-60",placeholder:"\u96fb\u5b50\u4fe1\u7bb1",autoComplete:"off",onChange:function(e){return k("email",e.target.value)},disabled:x}),(0,n.jsx)("input",{type:"text",name:"phone",value:N.phone,className:"w-full my-2 px-4 py-2 font-light tracking-wide ring-offset-2 border-2 border-purple-600 rounded text-black focus:outline-none focus:ring-2 ring-offset-2 ring-purple-600 ring-opacity-60",placeholder:"\u806f\u7d61\u96fb\u8a71",autoComplete:"off",onChange:function(e){return k("phone",e.target.value)},disabled:x}),(0,n.jsx)(y.Z,{className:"mt-4 my-2",children:"\u793e\u6176\u7576\u5929\u662f\u5426\u5230\u5834\uff1f"}),(0,n.jsxs)("div",{className:"mt-2 mb-4",children:[(0,n.jsxs)("div",{className:"flex items-center my-2",children:[(0,n.jsx)("input",{type:"radio",name:"attendence",value:"\u53c3\u52a0\uff08\u81fa\u7063\uff09",className:"form-radio p-2 bg-white border-2 border-purple-600 focus:ring-0 focus:ring-transparent",checked:!1,onChange:function(e){return k("attendence",e.target.value)},disabled:x}),(0,n.jsx)(y.Z,{className:"mx-2",children:"\u53c3\u52a0\uff08\u81fa\u7063\uff09"})]}),(0,n.jsxs)("div",{className:"flex items-center my-2",children:[(0,n.jsx)("input",{type:"radio",name:"attendence",value:"\u53c3\u52a0\uff08\u7dda\u4e0a\uff09",className:"form-radio p-2 bg-transparent border-2 border-purple-600 focus:ring-0 focus:ring-transparent",checked:!1,onChange:function(e){return k("attendence",e.target.value)},disabled:x}),(0,n.jsx)(y.Z,{className:"mx-2",children:"\u53c3\u52a0\uff08\u7dda\u4e0a\uff09"})]}),(0,n.jsxs)("div",{className:"flex items-center my-2",children:[(0,n.jsx)("input",{type:"radio",name:"attendence",value:"\u4e0d\u514b\u524d\u4f86",className:"form-radio p-2 bg-white border-2 border-purple-600 focus:ring-0 focus:ring-transparent",checked:!1,onChange:function(e){return k("attendence",e.target.value)},disabled:x}),(0,n.jsx)(y.Z,{className:"mx-2",children:"\u4e0d\u514b\u524d\u4f86"})]})]}),(0,n.jsx)("input",{type:"number",name:"familyMember",value:N.familyMember,className:"w-full my-2 px-4 py-2 font-light tracking-wide ring-offset-2 border-2 border-purple-600 rounded text-black focus:outline-none focus:ring-2 ring-offset-2 ring-purple-600 ring-opacity-60",min:0,max:15,placeholder:"\u540c\u884c\u5bb6\u5c6c\u4eba\u6578",autoComplete:"off",onChange:function(e){return k("familyMember",e.target.value)},disabled:x}),(0,n.jsx)("textarea",{name:"suggestion",value:N.suggestion,className:"w-full my-2 px-4 py-2 font-light tracking-wide ring-offset-2 border-2 border-purple-600 rounded text-black focus:outline-none focus:ring-2 ring-offset-2 ring-purple-600 ring-opacity-60",placeholder:"\u4efb\u4f55\u60f3\u5c0d\u73fe\u5728\u7684\u5929\u6587\u793e\u8aaa\u7684\u8a71",autoComplete:"off",rows:5,onChange:function(e){return k("suggestion",e.target.value)},disabled:x}),(0,n.jsx)("div",{className:"flex justify-center mt-12",children:(0,n.jsx)("div",{className:"px-3 py-2 ".concat("w-44"," border-2 ").concat(j?"border-purple-600 bg-purple-600 cursor-pointer":"border-gray-400 bg-gray-400 cursor-not-allowed"," text-white rounded-lg select-none tracking-wider"),children:"\u78ba\u8a8d\u9001\u51fa (\u5df2\u622a\u6b62)"})})]})})}),(0,n.jsxs)(y.Z,{className:"mt-6 text-gray-600",children:["\u8a73\u7d30\u8fa6\u7406\u898f\u5283\u5c07\u65bc11\u6708\u4e2d\u524d\u4ee5\u96fb\u5b50\u90f5\u4ef6\u5bc4\u9001\u3002",(0,n.jsx)("br",{}),"\u4efb\u4f55\u554f\u984c\u8acb\u806f\u7d61\u5929\u6587\u793e\u4fe1\u7bb1\uff1anthu.astro@gmail.com"]})]})})]}),(0,n.jsx)(c.u,{show:t,as:o.Fragment,children:(0,n.jsx)(u.V,{open:t,onClose:function(){return r(!1)},className:"fixed z-50 inset-0 overflow-y-auto",children:(0,n.jsxs)("div",{className:"flex items-center justify-center min-h-screen",children:[(0,n.jsx)(c.u.Child,{as:o.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,n.jsx)(u.V.Overlay,{className:"fixed inset-0 bg-black opacity-50"})}),(0,n.jsx)(c.u.Child,{as:o.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-90",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-90",children:(0,n.jsxs)("div",{className:"relative bg-gray-700 text-white rounded-2xl w-11/12 sm:w-5/6 md:w-7/12 lg:w-5/12 mx-auto my-20 px-4 pt-4 tracking-wider",children:[(0,n.jsxs)("button",{className:"hamburger-btn open float-right outline-none focus:outline-none",onClick:function(){return r(!1)},children:[(0,n.jsx)("span",{}),(0,n.jsx)("span",{}),(0,n.jsx)("span",{})]}),(0,n.jsx)("p",{className:"text-lg text-center my-8 px-6 sm:px-12 tracking-wider",children:"\u5831\u540d\u6210\u529f\uff01\u6211\u5011\u5df2\u7d93\u6536\u5230\u60a8\u7684\u56de\u8986\u56c9\uff0c\u8a73\u7d30\u8fa6\u7406\u898f\u5283\u5c07\u65bc 11 \u6708\u4e2d\u524d\u4ee5\u96fb\u5b50\u90f5\u4ef6\u5bc4\u9001\uff0c\u9858\u661f\u7a7a\u71e6\u721b\uff01"}),(0,n.jsx)("p",{className:"text-lg text-center my-6 px-6 sm:px-12 tracking-wider",children:"\u53e6\u5916\uff0c\u9019\u6b21 50 \u5e74\u793e\u6176\u540c\u6a23\u6709\u8a2d\u8a08\u5e7e\u9805\u5c08\u5c6c\u7d00\u5ff5\u54c1\uff0c\u540c\u6642\u4e5f\u6b61\u8fce\u5404\u4f4d\u5b78\u9577\u59ca\u96a8\u610f\u6a02\u6350\uff0c\u7e7c\u7e8c\u652f\u6301\u5929\u6587\u793e\u7684\u6210\u9577\uff5e"}),(0,n.jsxs)("div",{className:"flex justify-center gap-2 sm:gap-4 mt-8 mb-6",children:[(0,n.jsx)("div",{className:"flex items-center h-10 sm:h-12 px-2 sm:px-4 sm:py-2 bg-purple-50 border border-purple-600 text-purple-600 rounded-lg cursor-pointer select-none",onClick:function(){return r(!1)},children:(0,n.jsx)("p",{className:"tracking-wider max-h-full",children:"\u518d\u8003\u616e\u4e00\u4e0b"})}),(0,n.jsx)(i(),{href:"/donation",passHref:!0,children:(0,n.jsxs)("div",{className:"flex items-center h-10 sm:h-12 px-2 sm:px-4 sm:py-2 bg-purple-600 border-2 border-purple-600 rounded-lg cursor-pointer select-none",children:[(0,n.jsx)("p",{className:"tracking-wider max-h-full mr-2",children:"\u524d\u53bb\u770b\u770b"}),(0,n.jsx)(s.G,{className:"max-h-full w-4",icon:l.Xjp,fixedWidth:!0})]})})]})]})})]})})})]})};function v(){var e=(0,x.el)().map((function(e){return{imageUrl:e.coverUrl,title:e.title,description:(0,x.fN)(e),slug:e.slug}}));return(0,n.jsxs)(b.Z,{metadata:{description:"\u52d5\u624b\u505a \u8981\u6709\u4e2d\u570b\u7684\u79d1\u5b78\u81ea\u4fe1\uff01\u7528\u8166\u60f3 \u57f9\u80b2\u84bc\u7a79\u7684\u6d69\u701a\u5fc3\u80f8\uff01\u6b72\u6708\u5982\u767d\u99d2\u904e\u9699\uff0c\u500f\u7136\u5373\u901d\uff0c\u4eca\u5e74\u7d42\u65bc\u4f86\u5230\u4e86\u6211\u5011\u6e05\u5927\u5929\u6587\u793e\u5275\u7acb\u7684 50 \u9031\u5e74\uff0c\u6211\u5011\u5c07\u65bc\u81fa\u7063\u6642\u9593 11/27\uff08\u516d\uff09\u64f4\u5927\u8209\u8fa6 50 \u9031\u5e74\u793e\u6176\uff0c\u4e26\u8207\u7f8e\u570b\u9023\u7dda\u540c\u6b65\u8996\u8a0a\uff0c\u5728\u6b64\u656c\u9080\u5404\u4f4d\u6d77\u5167\u5916\u7684\u793e\u53cb\u5011\u56de\u4f86\u5171\u8944\u76db\u8209\uff0c\u4e00\u540c\u6b61\u6176\u9019\u503c\u5f97\u7d00\u5ff5\u7684\u4e00\u523b\u3002"},children:[(0,n.jsx)(h,{}),(0,n.jsx)(f.Z,{slides:e,link:"posts"}),(0,n.jsx)(j,{})]})}},2703:function(e,t,r){"use strict";var n=r(414);function a(){}function i(){}i.resetWarningCache=a,e.exports=function(){function e(e,t,r,a,i,o){if(o!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:a};return r.PropTypes=r,r}},5697:function(e,t,r){e.exports=r(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[523,515,586,938,287,771,361,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);