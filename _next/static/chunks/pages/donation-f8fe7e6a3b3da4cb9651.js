(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[39],{4184:function(e,n){var r;!function(){"use strict";var t={}.hasOwnProperty;function o(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var a=o.apply(null,r);a&&e.push(a)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var l in r)t.call(r,l)&&r[l]&&e.push(l);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(n,[]))||(e.exports=r)}()},6883:function(e,n,r){"use strict";var t=r(4184),o=r.n(t),i=r(5893);n.Z=function(e){var n=e.children,r=e.className,t=void 0===r?"":r;return(0,i.jsx)("p",{className:o()(t,"font-light tracking-wider"),children:n})}},2167:function(e,n,r){"use strict";var t=r(3848);n.default=void 0;var o,i=(o=r(7294))&&o.__esModule?o:{default:o},a=r(1063),l=r(4651),c=r(7426);var s={};function u(e,n,r,t){if(e&&a.isLocalURL(n)){e.prefetch(n,r,t).catch((function(e){0}));var o=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;s[n+"%"+r+(o?"%"+o:"")]=!0}}var f=function(e){var n,r=!1!==e.prefetch,o=l.useRouter(),f=i.default.useMemo((function(){var n=a.resolveHref(o,e.href,!0),r=t(n,2),i=r[0],l=r[1];return{href:i,as:e.as?a.resolveHref(o,e.as):l||i}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,g=e.replace,h=e.shallow,m=e.scroll,x=e.locale;"string"===typeof v&&(v=i.default.createElement("a",null,v));var b=(n=i.default.Children.only(v))&&"object"===typeof n&&n.ref,y=c.useIntersection({rootMargin:"200px"}),j=t(y,2),w=j[0],N=j[1],_=i.default.useCallback((function(e){w(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,w]);i.default.useEffect((function(){var e=N&&r&&a.isLocalURL(d),n="undefined"!==typeof x?x:o&&o.locale,t=s[d+"%"+p+(n?"%"+n:"")];e&&!t&&u(o,d,p,{locale:n})}),[p,d,N,x,r,o]);var E={ref:_,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,o,i,l,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(r))&&(e.preventDefault(),null==l&&t.indexOf("#")>=0&&(l=!1),n[o?"replace":"push"](r,t,{shallow:i,locale:c,scroll:l}))}(e,o,d,p,g,h,m,x)},onMouseEnter:function(e){a.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),u(o,d,p,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var k="undefined"!==typeof x?x:o&&o.locale,L=o&&o.isLocaleDomain&&a.getDomainLocale(p,k,o&&o.locales,o&&o.domainLocales);E.href=L||a.addBasePath(a.addLocale(p,k,o&&o.defaultLocale))}return i.default.cloneElement(n,E)};n.default=f},7426:function(e,n,r){"use strict";var t=r(3848);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!a,c=o.useRef(),s=o.useState(!1),u=t(s,2),f=u[0],d=u[1],p=o.useCallback((function(e){c.current&&(c.current(),c.current=void 0),r||f||e&&e.tagName&&(c.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=l.get(n);if(r)return r;var t=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return l.set(n,r={id:n,observer:o,elements:t}),r}(r),o=t.id,i=t.observer,a=t.elements;return a.set(e,n),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),l.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[r,n,f]);return o.useEffect((function(){if(!a&&!f){var e=i.requestIdleCallback((function(){return d(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[f]),[p,f]};var o=r(7294),i=r(3447),a="undefined"!==typeof IntersectionObserver;var l=new Map},2511:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return d}});var t=r(8315),o=r(5077),i=r(6612),a=r(6883),l=r(5893),c=[{imageUrl:"/img/sample-good-1@4x.png",name:"\u5546\u54c1\u540d\u7a31\u5546\u54c1\u540d\u7a31",description:"\u5546\u54c1\u8aaa\u660e\u5546\u54c1\u8aaa\u660e\u5546\u54c1\u8aaa\u660e\u5546\u54c1\u8aaa\u660e\u5546\u54c1\u8aaa\u660e\u5546\u54c1\u8aaa\u660e\u5546\u54c1\u8aaa\u660e"},{imageUrl:"/img/sample-good-2@4x.png",name:"\u5546\u54c1\u540d\u7a31\u5546\u54c1\u540d\u7a31",description:"\u5546\u54c1\u8aaa\u660e\u5546\u54c1\u8aaa\u660e\u5546\u54c1\u8aaa\u660e\u5546\u54c1\u8aaa\u660e\u5546\u54c1\u8aaa\u660e\u5546\u54c1\u8aaa\u660e\u5546\u54c1\u8aaa\u660e"},{imageUrl:"/img/sample-good-3@4x.png",name:"\u5546\u54c1\u540d\u7a31\u5546\u54c1\u540d\u7a31",description:"\u5546\u54c1\u8aaa\u660e\u5546\u54c1\u8aaa\u660e\u5546\u54c1\u8aaa\u660e\u5546\u54c1\u8aaa\u660e\u5546\u54c1\u8aaa\u660e\u5546\u54c1\u8aaa\u660e\u5546\u54c1\u8aaa\u660e"}],s=function(){return(0,l.jsxs)(o.Z,{children:[(0,l.jsx)(t.H2,{children:"\u8d0a\u52a9\u8fa6\u6cd5"}),(0,l.jsx)(a.Z,{className:"mb-4",children:"\u6f02\u4eae\u4e0d\u662f\u9019\u88e1\u4e5f\u4e0d\u77e5\uff1a\u6240\u4ee5\u4e5f\u662f\u4e0d\uff0c\u4e00\u4e0b\u4f5c\u8005\u52aa\u57fa\u771f\u7684\u8d85\uff0c\u592a\u6b21\u7684\u5c31\u89ba\u5f97\u4e0d\u5230\uff0c\u5e0c\u671b\u771f\u7684\u597d\u8c93\u6a23\u7684\uff0c\u6211\u5403\u8a8d\u4e0d\u5c0f\u5fc3\u4e5f\u3002\u500b\u958b\u73a9\u7b11\u22ef\u5f88\u597d\u7b11\u662f\u4ec0\u9ebc\u63db\u4e86\u4e5f\u597d\u7531\u3002"}),(0,l.jsx)(a.Z,{className:"mb-8",children:"\u624b\u53ea\u6703\u4e8c\u6b21\u5143\uff1a\u6211\u770b\u5230\u60f3\u8aaa\u597d\u8981\u662f\u6211\u5011\u22ef\u7684\u95dc\u591a\u5c31\u5f88\u4fc2\u6703\u4e0d\u6703\uff0c\u7684\u4e16\u591a\u597d\u671b\u7684\u8c9d\u8fa6\u6cd5\u6e05\u695a\u7684\u5927\u5927\u22ef\u79ae\u4e0d\u904e\u6703\u5f88\u4ee5\u65bc\u81ea\u5df1\u22ef\u53cd\u800c\u770b\u8d77\u8272\u7684\u8a2d\u8a08\u3002\u51fa\u4f86\u9ebc\u6771\u897f\u6709\u9019\uff0c\u63a8\u7279\u5f88\u5927\u9020\u6210\u5bb6\u88e1\u60b2\u50b7\u22ef\u7d05\u8272\uff0c\u7684\u4eba\u751f\u4e0d\u662f\u5728\uff0c\u4f60\u77e5\u9053\u611b\u7684\u7814\u53ef\u4ee5\u22ef\u8d85\u7d1a\u4e0d\u4e00\u6a23\u4e0d\u5c0f\u5f8c\u660e\u986f\u884c\u7559\u8a00\u3002"})]})},u=function(e){var n=e.good;return(0,l.jsxs)("div",{className:"flex flex-col bg-white text-purple-600 border-2 border-purple-600 rounded-2xl h-96 w-full overflow-hidden transition-colors duration-200",children:[(0,l.jsx)("div",{className:"w-full bg-center bg-cover h-60",style:{backgroundImage:"url('".concat(n.imageUrl,"')")}}),(0,l.jsxs)("div",{className:"w-full px-4 lg:px-8 py-4 text-left",children:[(0,l.jsx)(t.H3,{className:"mb-1 text-center truncate",children:n.name}),(0,l.jsx)("p",{className:"text-center font-light tracking-wider overflow-hidden w-full h-20 leading-7",style:{textOverflow:"ellipsis"},children:n.description})]})]})},f=function(e){var n=e.goods;return(0,l.jsxs)(o.Z,{className:"pt-0",children:[(0,l.jsx)(t.H2,{children:"\u56de\u994b\u5546\u54c1"}),(0,l.jsx)("div",{className:"grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:px-16 outline-none",children:n.map((function(e,n){return(0,l.jsx)(u,{good:e},"good-".concat(n))}))})]})};function d(){return(0,l.jsxs)(i.Z,{title:"\u8d0a\u52a9\u6211\u5011",children:[(0,l.jsx)(s,{}),(0,l.jsx)(f,{goods:c})]})}},105:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/donation",function(){return r(2511)}])},9008:function(e,n,r){e.exports=r(639)},1664:function(e,n,r){e.exports=r(2167)},1163:function(e,n,r){e.exports=r(4651)}},function(e){e.O(0,[612,774,888,179],(function(){return n=105,e(e.s=n);var n}));var n=e.O();_N_E=n}]);