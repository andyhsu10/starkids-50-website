(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var c=o.apply(null,n);c&&e.push(c)}}else if("object"===a)if(n.toString===Object.prototype.toString)for(var s in n)r.call(n,s)&&n[s]&&e.push(s);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},2167:function(e,t,n){"use strict";var r=n(3848);t.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},c=n(1063),s=n(4651),i=n(7426);var u={};function l(e,t,n,r){if(e&&c.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,o=s.useRouter(),f=a.default.useMemo((function(){var t=c.resolveHref(o,e.href,!0),n=r(t,2),a=n[0],s=n[1];return{href:a,as:e.as?c.resolveHref(o,e.as):s||a}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,m=e.shallow,g=e.scroll,x=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var y=(t=a.default.Children.only(v))&&"object"===typeof t&&t.ref,b=i.useIntersection({rootMargin:"200px"}),w=r(b,2),_=w[0],j=w[1],N=a.default.useCallback((function(e){_(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,_]);a.default.useEffect((function(){var e=j&&n&&c.isLocalURL(d),t="undefined"!==typeof x?x:o&&o.locale,r=u[d+"%"+p+(t?"%"+t:"")];e&&!r&&l(o,d,p,{locale:t})}),[p,d,j,x,n,o]);var k={ref:N,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,s,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(n))&&(e.preventDefault(),null==s&&r.indexOf("#")>=0&&(s=!1),t[o?"replace":"push"](n,r,{shallow:a,locale:i,scroll:s}))}(e,o,d,p,h,m,g,x)},onMouseEnter:function(e){c.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l(o,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof x?x:o&&o.locale,L=o&&o.isLocaleDomain&&c.getDomainLocale(p,E,o&&o.locales,o&&o.domainLocales);k.href=L||c.addBasePath(c.addLocale(p,E,o&&o.defaultLocale))}return a.default.cloneElement(t,k)};t.default=f},7426:function(e,t,n){"use strict";var r=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,i=o.useRef(),u=o.useState(!1),l=r(u,2),f=l[0],d=l[1],p=o.useCallback((function(e){i.current&&(i.current(),i.current=void 0),n||f||e&&e.tagName&&(i.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,c=r.elements;return c.set(e,t),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),s.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return o.useEffect((function(){if(!c&&!f){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),[p,f]};var o=n(7294),a=n(3447),c="undefined"!==typeof IntersectionObserver;var s=new Map},8785:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return d}});var r=n(2918),o=n(1163),a=n(8315),c=n(5077),s=n(6612),i=n(9933),u=n(3196),l=n(5893),f=function(e){var t=e.post;return(0,l.jsxs)(c.Z,{className:"pb-20",children:[(0,l.jsx)("div",{className:"w-full h-64 bg-center bg-cover mb-8",style:{backgroundImage:"url('".concat(t.coverUrl,"')")}}),(0,l.jsx)("h2",{className:"text-2xl tracking-widest mb-2",children:t.title}),(0,l.jsxs)(a.H3,{children:["\u4f5c\u8005/",t.author]}),(0,l.jsx)("div",{className:"mt-12 text-left",children:t.contents.map((function(e,t){return"paragraph"==e.type?(0,l.jsx)("p",{className:"mb-6 font-light tracking-widest",children:e.text},"content-".concat(t)):"image"==e.type?(0,l.jsxs)("div",{className:"my-10",children:[(0,l.jsx)("img",{src:e.url,className:"rounded-xl mx-auto max-h-72 w-full md:w-auto md:max-w-screen-md"}),e.description?(0,l.jsx)("p",{className:"mt-2 font-light text-sm text-center tracking-widest",children:e.description}):null]},"content-".concat(t)):void 0}))})]})},d=!0;t.default=function(){var e=(0,o.useRouter)().query.slug,t=i.Z.find((function(t){return t.slug==e}));if(!t)return(0,l.jsx)(r.default,{statusCode:404});var n=(0,u.fN)(t),a={imageUrl:t.coverUrl,description:n};return(0,l.jsx)(s.Z,{title:t.title,metadata:a,children:(0,l.jsx)(f,{post:t})})}},9035:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return n(8785)}])},2918:function(e,t,n){e.exports=n(3359)},9008:function(e,t,n){e.exports=n(639)},1664:function(e,t,n){e.exports=n(2167)},1163:function(e,t,n){e.exports=n(4651)}},function(e){e.O(0,[612,640,196,774,888,179],(function(){return t=9035,e(e.s=t);var t}));var t=e.O();_N_E=t}]);