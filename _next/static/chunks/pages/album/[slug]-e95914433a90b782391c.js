(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[466],{7814:function(e,t,r){"use strict";r.d(t,{G:function(){return g}});var n=r(8947),o=r(5697),i=r.n(o),a=r(7294);function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function p(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function d(e){return t=e,(t-=0)===t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function m(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,n=t.indexOf(":"),o=d(t.slice(0,n)),i=t.slice(n+1).trim();return o.startsWith("webkit")?e[(r=o,r.charAt(0).toUpperCase()+r.slice(1))]=i:e[o]=i,e}),{})}var y=!1;try{y=!0}catch(v){}function b(e){return e&&"object"===s(e)&&e.prefix&&e.iconName&&e.icon?e:n.Qc.icon?n.Qc.icon(e):null===e?null:e&&"object"===s(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}function x(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?l({},e,t):{}}function g(e){var t=e.forwardedRef,r=f(e,["forwardedRef"]),o=r.icon,i=r.mask,a=r.symbol,s=r.className,c=r.title,d=r.titleId,m=b(o),v=x("classes",[].concat(p(function(e){var t,r=e.spin,n=e.pulse,o=e.fixedWidth,i=e.inverse,a=e.border,s=e.listItem,c=e.flip,u=e.size,f=e.rotation,p=e.pull,d=(l(t={"fa-spin":r,"fa-pulse":n,"fa-fw":o,"fa-inverse":i,"fa-border":a,"fa-li":s,"fa-flip-horizontal":"horizontal"===c||"both"===c,"fa-flip-vertical":"vertical"===c||"both"===c},"fa-".concat(u),"undefined"!==typeof u&&null!==u),l(t,"fa-rotate-".concat(f),"undefined"!==typeof f&&null!==f&&0!==f),l(t,"fa-pull-".concat(p),"undefined"!==typeof p&&null!==p),l(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(d).map((function(e){return d[e]?e:null})).filter((function(e){return e}))}(r)),p(s.split(" ")))),j=x("transform","string"===typeof r.transform?n.Qc.transform(r.transform):r.transform),w=x("mask",b(i)),O=(0,n.qv)(m,u({},v,{},j,{},w,{symbol:a,title:c,titleId:d}));if(!O)return function(){var e;!y&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",m),null;var N=O.abstract,k={ref:t};return Object.keys(r).forEach((function(e){g.defaultProps.hasOwnProperty(e)||(k[e]=r[e])})),h(N[0],k)}g.displayName="FontAwesomeIcon",g.propTypes={border:i().bool,className:i().string,mask:i().oneOfType([i().object,i().array,i().string]),fixedWidth:i().bool,inverse:i().bool,flip:i().oneOf(["horizontal","vertical","both"]),icon:i().oneOfType([i().object,i().array,i().string]),listItem:i().bool,pull:i().oneOf(["right","left"]),pulse:i().bool,rotation:i().oneOf([0,90,180,270]),size:i().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:i().bool,symbol:i().oneOfType([i().bool,i().string]),title:i().string,transform:i().oneOfType([i().string,i().object]),swapOpacity:i().bool},g.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var h=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof r)return r;var o=(r.children||[]).map((function(r){return e(t,r)})),i=Object.keys(r.attributes||{}).reduce((function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=m(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[d(t)]=n}return e}),{attrs:{}}),a=n.style,s=void 0===a?{}:a,l=f(n,["style"]);return i.attrs.style=u({},i.attrs.style,{},s),t.apply(void 0,[r.tag,u({},i.attrs,{},l)].concat(p(o)))}.bind(null,a.createElement)},2686:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return g}});var n=r(7294),o=r(2918),i=r(1664),a=r(1163),s=r(7814),l=r(9398),c=r(3949),u=r(7948),f=r(8315),p=r(6883),d=r(5077),m=r(6612),y=r(5548),b=r(5893),x=function(e){var t=e.category,r=e.nextCategory,o=e.prevCategory,a=(0,n.useState)(!1),m=a[0],y=a[1],x=(0,n.useState)({imgUrl:"",description:"",portrait:!1}),g=x[0],h=x[1];return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(d.Z,{className:"pb-20",children:[(0,b.jsxs)("div",{className:"flex justify-center items-center",children:[(0,b.jsx)(i.default,{href:"/album/".concat(o.slug),passHref:!0,children:(0,b.jsx)("a",{title:o.name,children:(0,b.jsx)(s.G,{icon:l.EyR,className:"w-2.5 mr-8 text-gray-300 hover:text-white cursor-pointer",fixedWidth:!0})})}),(0,b.jsx)(f.H3,{className:"cursor-default select-none",children:t.name}),(0,b.jsx)(i.default,{href:"/album/".concat(r.slug),passHref:!0,children:(0,b.jsx)("a",{title:r.name,children:(0,b.jsx)(s.G,{icon:l.yOZ,className:"w-2.5 ml-7 text-gray-300 hover:text-white cursor-pointer",fixedWidth:!0})})})]}),(0,b.jsx)("div",{className:"mt-12",children:(0,b.jsx)(p.Z,{children:t.description})}),(0,b.jsx)("div",{className:"mt-8 grid gap-x-4 gap-y-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",children:t.images.map((function(e,t){return(0,b.jsxs)("div",{children:[(0,b.jsx)("div",{className:"".concat(e.portrait?"w-full sm:w-2/3 sm:mx-auto":"w-full"," rounded-xl overflow-hidden cursor-default sm:cursor-pointer"),style:{backgroundImage:"url('".concat(e.imgUrl,"')")},onClick:function(){return t=e,void(window.innerWidth>=640&&(h(t),y(!0)));var t},children:(0,b.jsx)("img",{src:e.imgUrl,className:"w-full",alt:e.description})}),(0,b.jsx)("p",{className:"mt-2",children:e.description})]},"image-".concat(t))}))})]}),(0,b.jsx)(c.u,{show:m,as:n.Fragment,children:(0,b.jsx)(u.V,{open:m,onClose:function(){return y(!1)},className:"fixed z-50 inset-0 overflow-y-auto",children:(0,b.jsxs)("div",{className:"flex items-center justify-center min-h-screen",children:[(0,b.jsx)(c.u.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,b.jsx)(u.V.Overlay,{className:"fixed inset-0 bg-black opacity-50"})}),(0,b.jsx)(c.u.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-90",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-90",children:(0,b.jsxs)("div",{className:"relative bg-gray-700 text-white rounded-2xl w-5/6 mx-auto my-20 px-4 pt-4 ".concat(g.description?"pb-12":""," tracking-wider"),children:[(0,b.jsxs)("button",{className:"hamburger-btn open float-right outline-none focus:outline-none",onClick:function(){return y(!1)},children:[(0,b.jsx)("span",{}),(0,b.jsx)("span",{}),(0,b.jsx)("span",{})]}),g.description&&(0,b.jsx)("p",{className:"text-lg font-light text-center mb-4 px-12",children:g.description}),(0,b.jsx)("div",{className:"w-full ".concat(g.portrait?"sm:w-2/3 md:w-7/12 lg:w-2/5":"sm:w-5/6 md:w-4/5 lg:w-2/3"," mx-auto"),children:(0,b.jsx)("img",{src:g.imgUrl,alt:g.description,className:"mb-4 mx-auto rounded-2xl"})})]})})]})})})]})},g=!0;t.default=function(){var e=(0,a.useRouter)().query.slug,t=y.b.findIndex((function(t){return t.slug==e}));if(-1==t)return(0,b.jsx)(o.default,{statusCode:404});var r=y.b[t],n={imageUrl:r.coverImgUrl,description:r.description},i=y.b.length,s=0,l=0;return 0==t?(s=i-1,l=1):t==i-1?(s=t-1,l=0):(s=t-1,l=t+1),(0,b.jsx)(m.Z,{title:r.name,metadata:n,children:(0,b.jsx)(x,{category:r,nextCategory:y.b[l],prevCategory:y.b[s]})})}},6490:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/album/[slug]",function(){return r(2686)}])},2918:function(e,t,r){e.exports=r(3359)}},function(e){e.O(0,[774,523,60,896,612,814,888,179],(function(){return t=6490,e(e.s=t);var t}));var t=e.O();_N_E=t}]);