(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[39],{7814:function(e,t,r){"use strict";r.d(t,{G:function(){return h}});var n=r(8947),i=r(5697),o=r.n(i),s=r(7294);function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function d(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function p(e){return t=e,(t-=0)===t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function m(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,n=t.indexOf(":"),i=p(t.slice(0,n)),o=t.slice(n+1).trim();return i.startsWith("webkit")?e[(r=i,r.charAt(0).toUpperCase()+r.slice(1))]=o:e[i]=o,e}),{})}var x=!1;try{x=!0}catch(j){}function g(e){return e&&"object"===l(e)&&e.prefix&&e.iconName&&e.icon?e:n.Qc.icon?n.Qc.icon(e):null===e?null:e&&"object"===l(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}function b(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?a({},e,t):{}}function h(e){var t=e.forwardedRef,r=f(e,["forwardedRef"]),i=r.icon,o=r.mask,s=r.symbol,l=r.className,c=r.title,p=r.titleId,m=g(i),j=b("classes",[].concat(d(function(e){var t,r=e.spin,n=e.pulse,i=e.fixedWidth,o=e.inverse,s=e.border,l=e.listItem,c=e.flip,u=e.size,f=e.rotation,d=e.pull,p=(a(t={"fa-spin":r,"fa-pulse":n,"fa-fw":i,"fa-inverse":o,"fa-border":s,"fa-li":l,"fa-flip-horizontal":"horizontal"===c||"both"===c,"fa-flip-vertical":"vertical"===c||"both"===c},"fa-".concat(u),"undefined"!==typeof u&&null!==u),a(t,"fa-rotate-".concat(f),"undefined"!==typeof f&&null!==f&&0!==f),a(t,"fa-pull-".concat(d),"undefined"!==typeof d&&null!==d),a(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(p).map((function(e){return p[e]?e:null})).filter((function(e){return e}))}(r)),d(l.split(" ")))),v=b("transform","string"===typeof r.transform?n.Qc.transform(r.transform):r.transform),w=b("mask",g(o)),N=(0,n.qv)(m,u({},j,{},v,{},w,{symbol:s,title:c,titleId:p}));if(!N)return function(){var e;!x&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",m),null;var O=N.abstract,k={ref:t};return Object.keys(r).forEach((function(e){h.defaultProps.hasOwnProperty(e)||(k[e]=r[e])})),y(O[0],k)}h.displayName="FontAwesomeIcon",h.propTypes={border:o().bool,className:o().string,mask:o().oneOfType([o().object,o().array,o().string]),fixedWidth:o().bool,inverse:o().bool,flip:o().oneOf(["horizontal","vertical","both"]),icon:o().oneOfType([o().object,o().array,o().string]),listItem:o().bool,pull:o().oneOf(["right","left"]),pulse:o().bool,rotation:o().oneOf([0,90,180,270]),size:o().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:o().bool,symbol:o().oneOfType([o().bool,o().string]),title:o().string,transform:o().oneOfType([o().string,o().object]),swapOpacity:o().bool},h.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var y=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof r)return r;var i=(r.children||[]).map((function(r){return e(t,r)})),o=Object.keys(r.attributes||{}).reduce((function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=m(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[p(t)]=n}return e}),{attrs:{}}),s=n.style,l=void 0===s?{}:s,a=f(n,["style"]);return o.attrs.style=u({},o.attrs.style,{},l),t.apply(void 0,[r.tag,u({},o.attrs,{},a)].concat(d(i)))}.bind(null,s.createElement)},560:function(e,t,r){"use strict";var n=r(4184),i=r.n(n),o=r(5893);t.Z=function(e){var t=e.children,r=e.className,n=void 0===r?"":r;return(0,o.jsx)("div",{className:i()("grid grid-cols-1 xl:grid-cols-12 gap-4",n),children:(0,o.jsx)("div",{className:"xl:col-start-2 xl:col-span-10 2xl:col-start-3 2xl:col-span-8",children:t})})}},6883:function(e,t,r){"use strict";var n=r(4184),i=r.n(n),o=r(5893);t.Z=function(e){var t=e.children,r=e.className,n=void 0===r?"":r;return(0,o.jsx)("p",{className:i()(n,"font-light tracking-wider"),children:t})}},8813:function(e,t,r){"use strict";var n=r(5893);t.Z=function(e){var t=e.text,r=e.className,i=t.split("\n");return(0,n.jsx)("span",{className:r,children:i.map((function(e,t){return t==i.length+1?(0,n.jsx)("span",{children:e},"text-".concat(t)):(0,n.jsxs)("span",{children:[e,(0,n.jsx)("br",{})]},"text-".concat(t))}))})}},2511:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return y}});var n=r(7294),i=r(7814),o=r(9398),s=r(3949),l=r(7948),a=r(560),c=r(8315),u=r(5077),f=r(8813),d=r(6612),p=r(6883),m=r(5893),x=[{imageUrl:"/img/goods-1.jpg",imageDetailUrl:"/img/goods-2.jpg",title:"\u7d00\u5ff5\u5916\u5957",name:"\u7d00\u5ff5\u5916\u5957\uff08750 \u5143\uff0f\u4ef6\uff09",description:"\u6b63\u9762\u70ba Astro \u5b57\u6a23\uff08\u523a\u7e61\uff09\uff0c\u80cc\u9762\u5247\u70ba NTHU 50 AC \u53ca\u661f\u7403\u5716\u6848\uff08\u5370\u5237\uff09\uff0c\u5e95\u8272\u70ba\u85cf\u9752\u8272\uff0c\u6750\u8cea\u70ba 50% \u7684\u68c9\u8207 50% \u7684\u805a\u916f\u7e96\u7dad(\u5fae\u92ea\u68c9)\u3002\u5982\u6b32\u8a02\u8cfc\u6578\u91cf\u8d85\u904e 5 \u4ef6\u8acb\u65bc\u4e0b\u65b9\u8aaa\u660e\u5c3a\u5bf8\u53ca\u6578\u91cf\u3002"},{imageUrl:"/img/goods-5.jpg",imageDetailUrl:"/img/goods-6.jpg",title:"50 \u9031\u5e74\u7d00\u5ff5\u793e\u520a",name:"50 \u9031\u5e74\u7d00\u5ff5\u793e\u520a\uff08250 \u5143\uff0f\u672c\uff09",description:"\u5167\u5bb9\u6536\u9304\u4e86\u6b77\u5c46\u8a31\u591a\u793e\u53cb\u5011\u7684\u6295\u7a3f\u53ca\u793e\u5718\u73fe\u6cc1\uff0c\u5e36\u6211\u5011\u4e00\u63a2\u5929\u6587\u793e\u534a\u4e16\u7d00\u4ee5\u4f86\u7684\u8ecc\u8de1\uff01"},{imageUrl:"/img/goods-3.jpg",imageDetailUrl:"/img/goods-3.jpg",title:"\u7d00\u5ff5\u9152\u676f\u7d44",name:"\u7d00\u5ff5\u9152\u676f\u7d44\uff08350 \u5143\uff0f\u7d44\uff09",description:"shot \u676f\uff0c\u6709\u5929\u6587\u7684\u6ce8\u97f3\u53ca\u5929\u6587\u793e\u4e09\u5b57\u3002\u4e09\u5165\u4e00\u7d44\uff0c\u9650\u91cf150\u7d44\n\u203b\u7d00\u5ff5\u9152\u676f\u7d44\u56e0\u5716\u6848\u70ba\u8cbc\u7d19\uff0c\u4e0d\u5efa\u8b70\u4ee5\u71b1\u6c34\u5927\u529b\u6413\u6d17"},{imageUrl:"/img/goods-4.jpg",imageDetailUrl:"/img/goods-4.jpg",title:"\u540a\u98fe\u9470\u5319\u5708",name:"\u540a\u98fe\u9470\u5319\u5708\uff08100\u5143\uff0f\u500b\uff09",description:"\u7acb\u9ad4\u540a\u98fe\uff0c\u70ba\u91d1\u5c6c\u6750\u8cea\uff0c\u5927\u5c0f\u7d04\u9810\u8a08\u70ba40*40*5mm"}],g=function(){return(0,m.jsxs)(u.Z,{children:[(0,m.jsx)(c.H2,{children:"\u8d0a\u52a9\u8fa6\u6cd5"}),(0,m.jsxs)(a.Z,{children:[(0,m.jsx)(p.Z,{className:"mb-4",children:"\u70ba\u4e86\u80fd\u5920\u5728\u661f\u7a7a\u4e2d\u770b\u5f97\u66f4\u6df1\u66f4\u9060\uff0c\u6211\u5011\u7e3d\u4e0d\u754f\u98a8\u5bd2\u7684\u767b\u4e0a\u9ad8\u5c71\uff0c\u501f\u52a9\u8457\u671b\u9060\u93e1\u548c\u76f8\u6a5f\uff0c\u4e00\u6b21\u53c8\u4e00\u6b21\u7a7f\u8d8a\u4ee4\u4eba\u5c4f\u606f\u7684\u9ed1\u6697\u3002\u56e0\u6b64\u6211\u5011\u5e0c\u671b\u80fd\u6709\u66f4\u597d\u7684\u5100\u5668\u8207\u57fa\u672c\u8a2d\u5099\u4ee5\u8b93\u6211\u5011\u66f4\u63a5\u8fd1\u7e41\u661f\u3002"}),(0,m.jsx)(p.Z,{className:"mb-4",children:"\u4e0b\u65b9\u5217\u51fa\u7684\u662f\u6211\u5011\u9810\u671f\u5373\u5c07\u63a1\u8cfc\u7684\u9805\u76ee\uff0c\u5018\u82e5\u5404\u4f4d\u5b78\u9577\u59d0\u5011\u6709\u610f\u9858\u5354\u52a9\u6211\u5011\uff0c\u5247\u6b61\u8fce\u5b78\u9577\u59d0\u5011\u8a8d\u8cfc\u9019\u4e9b\u8a2d\u5099\uff0c\u8a8d\u8cfc\u4e0d\u4ee3\u8868\u5168\u984d\u8ca0\u64d4\uff0c\u6bcf\u4f4d\u50c5\u9700\u5354\u52a9\u4e00\u5c0f\u90e8\u5206\u7684\u9322\uff0c\u8b93\u6211\u5011\u5f97\u4ee5\u7a4d\u5c11\u6210\u591a\u9054\u6210\u76ee\u6a19\uff0c\u5982\u6709\u610f\u8a8d\u8cfc\u5247\u8acb\u52fe\u9078\u4e0b\u65b9\u8a2d\u5099\u3002"}),(0,m.jsx)(p.Z,{className:"mb-8",children:"\u6240\u6709\u8a8d\u8cfc\u8005\u7686\u6703\u520a\u767b\u65bc\u672c\u6b21\u793e\u6176\u7db2\u9801\uff0c\u8a8d\u8cfc\u5f8c\u7121\u8ad6\u4e0d\u8db3\u6216\u6709\u5269\u9918\u5c07\u6301\u7e8c\u7528\u65bc\u5929\u6587\u793e\u5100\u5668\u4e4b\u7dad\u4fee\u4fdd\u990a\uff0c\u6b61\u8fce\u5404\u4f4d\u5b78\u9577\u59d0\u70ba\u672a\u4f86\u5929\u6587\u793e\u7684\u9032\u6b65\u7d66\u4e88\u652f\u6301\u3002\u82e5\u662f\u8a8d\u8cfc\u984d\u53ca\u6350\u6b3e\u984d\u9054 3000 \u5143\u6574\u5c07\u8d08\u9001\u4e00\u5e45\u6211\u5011\u81ea\u88fd\uff0c\u5f9e\u62cd\u651d\u5230\u8a2d\u8a08\u7686\u70ba\u793e\u54e1\u64cd\u5200\u7684\u6885\u897f\u723e\u5929\u9ad4\u6d77\u5831\uff08\u50c5\u9650\u8a8d\u8cfc\u8207\u6350\u6b3e\u8005\u53ef\u7372\u5f97\uff09\u3002"})]}),(0,m.jsx)("div",{className:"flex justify-center",children:(0,m.jsx)("a",{href:"https://forms.gle/cXPhuc5uu6nt77n98",target:"_blank",rel:"noreferrer",children:(0,m.jsxs)("div",{className:"flex items-center h-12 pl-2 pr-4 py-2 bg-purple-600 border-2 border-purple-600 rounded-lg cursor-pointer select-none",children:[(0,m.jsx)("p",{className:"w-24 tracking-wider max-h-full",children:"\u8a8d\u8cfc\u8868\u55ae"}),(0,m.jsx)(i.G,{className:"max-h-full w-4",icon:o.Xjp,fixedWidth:!0})]})})})]})},b=function(e){var t=e.good,r=e.onClickGood;return(0,m.jsxs)("div",{className:"flex flex-col bg-white text-purple-600 border-2 border-purple-600 rounded-2xl h-96 w-full overflow-hidden cursor-pointer",onClick:function(){return r(t)},children:[(0,m.jsx)("div",{className:"w-full bg-center bg-cover h-60",style:{backgroundImage:"url('".concat(t.imageUrl,"')")}}),(0,m.jsxs)("div",{className:"w-full px-4 lg:px-8 py-4 text-left select-none",children:[(0,m.jsx)(c.H3,{className:"mb-1 text-center truncate",children:t.title}),(0,m.jsx)("p",{className:"text-center font-light tracking-wider overflow-hidden w-full h-20 leading-7",style:{textOverflow:"ellipsis"},children:t.description})]})]})},h=function(e){var t=e.goods,r=(0,n.useState)(!1),d=r[0],x=r[1],g=(0,n.useState)({imageUrl:"",imageDetailUrl:"",name:"",title:"",description:""}),h=g[0],y=g[1],j=function(e){y(e),x(!0),console.log("onClickGood",e.description)};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(u.Z,{className:"pt-8",children:[(0,m.jsx)(c.H2,{children:"\u7d00\u5ff5\u54c1"}),(0,m.jsxs)(a.Z,{children:[(0,m.jsx)(p.Z,{className:"mb-4",children:"\u70ba\u4e86\u7d00\u5ff5\u9019\u96e3\u5f97\u7684 50 \u9031\u5e74\uff0c\u6211\u5011\u7279\u5225\u8a2d\u8a08\u4e86\u4ee5\u4e0b\u6578\u500b\u7d00\u5ff5\u54c1\uff0c\u5c07\u65bc\u793e\u6176\u7576\u5929\u5728\u6d3b\u52d5\u73fe\u5834\u9032\u884c\u8ca9\u552e\uff0c\u4e5f\u6b61\u8fce\u5404\u4f4d\u793e\u53cb\u5011\u4e8b\u5148\u8a02\u8cfc\uff5e"}),(0,m.jsxs)(p.Z,{className:"mb-4",children:["\u6211\u5011\u4e5f\u63d0\u4f9b\u90f5\u5bc4\u5230\u5e9c\u7684\u65b9\u6848\uff0c\u7121\u8ad6\u793e\u6176\u7576\u5929\u662f\u5426\u6709\u7a7a\u5230\u5834\u7686\u53ef\u8a02\u8cfc\uff0c\u570b\u5167\u570b\u5916\u7686\u53ef\uff5e",(0,m.jsx)("br",{}),"\u6211\u5011\u5c07\u65bc\u793e\u6176\u7d50\u675f\u5f8c\u9678\u7e8c\u5bc4\u51fa"]}),(0,m.jsx)(p.Z,{className:"mb-8",children:"\u203b\u7531\u65bc\u6210\u54c1\u88fd\u4f5c\u4e2d\uff0c\u4ee5\u4e0b\u5716\u7247\u7686\u70ba\u793a\u610f\u5716\uff0c\u53ef\u80fd\u8207\u6210\u54c1\u6709\u7d30\u5fae\u5dee\u7570\uff0c\u9084\u8acb\u898b\u8ad2"})]}),(0,m.jsx)("div",{className:"grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:px-16 outline-none",children:t.map((function(e,t){return(0,m.jsx)(b,{good:e,onClickGood:j},"good-".concat(t))}))}),(0,m.jsx)("div",{className:"flex justify-center mt-8",children:(0,m.jsx)("a",{href:"https://forms.gle/5YM8UP3HQ8YdbN916",target:"_blank",rel:"noreferrer",children:(0,m.jsxs)("div",{className:"flex items-center h-12 pl-2 pr-4 py-2 bg-purple-600 border-2 border-purple-600 rounded-lg cursor-pointer select-none",children:[(0,m.jsx)("p",{className:"w-24 tracking-wider max-h-full",children:"\u9810\u8cfc\u8868\u55ae"}),(0,m.jsx)(i.G,{className:"max-h-full w-4",icon:o.Xjp,fixedWidth:!0})]})})})]}),(0,m.jsx)(s.u,{show:d,as:n.Fragment,children:(0,m.jsx)(l.V,{open:d,onClose:function(){return x(!1)},className:"fixed z-50 inset-0 overflow-y-auto",children:(0,m.jsxs)("div",{className:"flex items-center justify-center min-h-screen",children:[(0,m.jsx)(s.u.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,m.jsx)(l.V.Overlay,{className:"fixed inset-0 bg-black opacity-50"})}),(0,m.jsx)(s.u.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-90",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-90",children:(0,m.jsxs)("div",{className:"relative bg-gray-700 text-white rounded-2xl w-5/6 mx-auto my-20 px-4 pt-4 ".concat(h.name?"pb-12":""," tracking-wider"),children:[(0,m.jsxs)("button",{className:"hamburger-btn open float-right outline-none focus:outline-none",onClick:function(){return x(!1)},children:[(0,m.jsx)("span",{}),(0,m.jsx)("span",{}),(0,m.jsx)("span",{})]}),(0,m.jsx)("p",{className:"text-xl text-center mb-6 px-12 tracking-wider cursor-default select-none",children:h.name}),(0,m.jsxs)("div",{className:"w-full sm:w-5/6 md:w-4/5 lg:w-2/3 mx-auto",children:[(0,m.jsx)("img",{src:h.imageDetailUrl,alt:h.name,className:"mb-4 mx-auto rounded-2xl"}),(0,m.jsx)("p",{className:"text-lg font-light text-center mb-4 px-12",children:(0,m.jsx)(f.Z,{text:h.description})})]})]})})]})})})]})};function y(){return(0,m.jsxs)(d.Z,{title:"\u8d0a\u52a9\u6211\u5011",children:[(0,m.jsx)(g,{}),(0,m.jsx)(h,{goods:x})]})}},105:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/donation",function(){return r(2511)}])}},function(e){e.O(0,[774,523,60,896,612,888,179],(function(){return t=105,e(e.s=t);var t}));var t=e.O();_N_E=t}]);