(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[679],{3951:function(e,t,n){"use strict";var r=n(6156),a=n(5893),o=(n(6591),n(6694),n(6066)),i=n(1163),s=n(8315),u=n(5077),c=n(6883);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.Z=function(e){var t=e.slides,n=e.link,r=(0,i.useRouter)();return(0,a.jsx)(u.Z,{className:"pt-6 pb-4",children:(0,a.jsx)(o.Z,d(d({},{autoplay:!0,autoplaySpeed:6e3,className:"center",dots:!0,centerMode:!0,infinite:!0,centerPadding:"16%",slidesToShow:1,speed:500,responsive:[{breakpoint:768,settings:{centerMode:!1}}]}),{},{children:t&&t.map((function(e,t){return(0,a.jsx)("div",{className:"w-2/3 outline-none",onClick:function(){return r.replace("/".concat(n,"/").concat(e.slug))},children:(0,a.jsx)("div",{className:"relative bg-center bg-cover h-80 lg:h-96 mx-1.5 text-black",style:{backgroundImage:"url('".concat(e.imageUrl,"')")},children:(0,a.jsxs)("div",{className:"absolute bottom-0 w-full px-6 pb-10 py-4 bg-gray-900 bg-opacity-40 text-white",children:[(0,a.jsx)(s.H3,{className:"mb-1 truncate",children:e.title}),(0,a.jsx)(c.Z,{className:"truncate",children:e.description})]})})},"slide-".concat(t))}))}))})}},6883:function(e,t,n){"use strict";var r=n(5893),a=n(4184),o=n.n(a);t.Z=function(e){var t=e.children,n=e.className,a=void 0===n?"":n;return(0,r.jsx)("p",{className:o()(a,"font-light tracking-wider"),children:t})}},6049:function(e,t,n){"use strict";var r=n(5893),a=n(1664),o=n(1163),i=function(e){var t=e.post,n=(0,o.useRouter)(),i=t.contents.find((function(e){return"paragraph"==e.type})).text;return(0,r.jsx)(a.default,{href:"".concat(n.pathname,"/").concat(t.slug),passHref:!0,children:(0,r.jsxs)("div",{className:"flex flex-col lg:flex-row bg-gray-600 hover:bg-gray-650 rounded-2xl h-96 lg:h-48 w-full overflow-hidden transition-colors duration-200 cursor-pointer",children:[(0,r.jsx)("div",{className:"w-full lg:w-2/5 xl:w-1/3 2xl:w-1/4 bg-center bg-cover h-40 lg:h-auto",style:{backgroundImage:"url('".concat(t.coverUrl,"')")}}),(0,r.jsxs)("div",{className:"w-full lg:w-3/5 xl:w-full px-4 lg:px-8 py-4 text-left",children:[(0,r.jsxs)("div",{className:"flex justify-between tracking-widest",children:[(0,r.jsx)("span",{className:"text-xl mb-1 lg:mb-4 text-center lg:text-left w-full lg:w-2/3 truncate",children:t.title}),(0,r.jsxs)("span",{className:"hidden lg:inline lg:ml-4 lg:mr-2 text-base text-right w-max",children:["\u4f5c\u8005/",t.author]})]}),(0,r.jsxs)("p",{className:"lg:hidden mb-4 text-base text-center tracking-widest",children:["\u4f5c\u8005/",t.author]}),(0,r.jsx)("p",{className:"text-center lg:text-left font-light tracking-wider overflow-hidden w-full h-28 leading-7",style:{textOverflow:"ellipsis"},children:i})]})]})})};t.Z=function(e){var t=e.posts;return(0,r.jsx)("div",{className:"grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:px-16 outline-none",children:t.map((function(e,t){return(0,r.jsx)(i,{post:e},"post-".concat(t))}))})}},2723:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return q}});var r,a,o,i=n(5893),s=n(7294);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"===typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function f(e,t){if(e in t){for(var n=t[e],r=arguments.length,a=new Array(r>2?r-2:0),o=2;o<r;o++)a[o-2]=arguments[o];return"function"===typeof n?n.apply(void 0,a):n}var i=new Error('Tried to handle "'+e+'" but there is no handler defined. Only defined handlers are: '+Object.keys(t).map((function(e){return'"'+e+'"'})).join(", ")+".");throw Error.captureStackTrace&&Error.captureStackTrace(i,f),i}function p(e){var t=e.props,n=e.slot,o=e.defaultTag,i=e.features,s=e.visible,l=void 0===s||s,d=e.name;if(l)return v(t,n,o,d);var p=null!=i?i:r.None;if(p&r.Static){var g=t.static,m=void 0!==g&&g,b=c(t,["static"]);if(m)return v(b,n,o,d)}if(p&r.RenderStrategy){var x,h=t.unmount,y=void 0===h||h,w=c(t,["unmount"]);return f(y?a.Unmount:a.Hidden,((x={})[a.Unmount]=function(){return null},x[a.Hidden]=function(){return v(u({},w,{hidden:!0,style:{display:"none"}}),n,o,d)},x))}return v(t,n,o,d)}function v(e,t,n,r){var a;void 0===t&&(t={});var o=g(e,["unmount","static"]),i=o.as,u=void 0===i?n:i,l=o.children,f=o.refName,p=void 0===f?"ref":f,v=c(o,["as","children","refName"]),m=void 0!==e.ref?((a={})[p]=e.ref,a):{},b="function"===typeof l?l(t):l;if(v.className&&"function"===typeof v.className&&(v.className=v.className(t)),u===s.Fragment&&Object.keys(v).length>0){if(!(0,s.isValidElement)(b)||Array.isArray(b)&&b.length>1)throw new Error(['Passing props on "Fragment"!',"","The current component <"+r+' /> is rendering a "Fragment".',"However we need to passthrough the following props:",Object.keys(v).map((function(e){return"  - "+e})).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((function(e){return"  - "+e})).join("\n")].join("\n"));return(0,s.cloneElement)(b,Object.assign({},function(e,t,n){for(var r,a=Object.assign({},e),o=function(){var n,o=r.value;void 0!==e[o]&&void 0!==t[o]&&Object.assign(a,((n={})[o]=function(n){n.defaultPrevented||e[o](n),n.defaultPrevented||t[o](n)},n))},i=d(n);!(r=i()).done;)o();return a}(function(e){var t=Object.assign({},e);for(var n in t)void 0===t[n]&&delete t[n];return t}(g(v,["ref"])),b.props,["onClick"]),m))}return(0,s.createElement)(u,Object.assign({},g(v,["ref"]),u!==s.Fragment&&m),b)}function g(e,t){void 0===t&&(t=[]);for(var n,r=Object.assign({},e),a=d(t);!(n=a()).done;){var o=n.value;o in r&&delete r[o]}return r}function m(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=(0,s.useRef)(t);return(0,s.useEffect)((function(){r.current=t}),[t]),(0,s.useCallback)((function(e){for(var t,n=d(r.current);!(t=n()).done;){var a=t.value;null!=a&&("function"===typeof a?a(e):a.current=e)}}),[r])}!function(e){e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static"}(r||(r={})),function(e){e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden"}(a||(a={})),function(e){e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab"}(o||(o={}));var b="undefined"!==typeof window?s.useLayoutEffect:s.useEffect,x={serverHandoffComplete:!1};var h=0;function y(){return++h}function w(){var e=function(){var e=(0,s.useState)(x.serverHandoffComplete),t=e[0],n=e[1];return(0,s.useEffect)((function(){!0!==t&&n(!0)}),[t]),(0,s.useEffect)((function(){!1===x.serverHandoffComplete&&(x.serverHandoffComplete=!0)}),[]),t}(),t=(0,s.useState)(e?y:null),n=t[0],r=t[1];return b((function(){null===n&&r(y())}),[n]),null!=n?""+n:void 0}var j,S,N,O,P,E,A=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((function(e){return e+":not([tabindex='-1'])"})).join(",");function k(e,t){var n=Array.isArray(e)?e:function(e){return void 0===e&&(e=document.body),null==e?[]:Array.from(e.querySelectorAll(A))}(e),r=document.activeElement,a=function(){if(t&(j.First|j.Next))return N.Next;if(t&(j.Previous|j.Last))return N.Previous;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")}(),o=function(){if(t&j.First)return 0;if(t&j.Previous)return Math.max(0,n.indexOf(r))-1;if(t&j.Next)return Math.max(0,n.indexOf(r))+1;if(t&j.Last)return n.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")}(),i=t&j.NoScroll?{preventScroll:!0}:{},s=0,u=n.length,c=void 0;do{var l;if(s>=u||s+u<=0)return S.Error;var d=o+s;if(t&j.WrapAround)d=(d+u)%u;else{if(d<0)return S.Underflow;if(d>=u)return S.Overflow}null==(l=c=n[d])||l.focus(i),s+=a}while(c!==document.activeElement);return c.hasAttribute("tabindex")||c.setAttribute("tabindex","0"),S.Success}function T(e){var t;if(e.type)return e.type;var n=null!=(t=e.as)?t:"button";return"string"===typeof n&&"button"===n.toLowerCase()?"button":void 0}function I(e,t){var n=(0,s.useState)((function(){return T(e)})),r=n[0],a=n[1];return b((function(){a(T(e))}),[e.type,e.as]),b((function(){r||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&a("button")}),[r,t]),r}!function(e){e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll"}(j||(j={})),function(e){e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow"}(S||(S={})),function(e){e[e.Previous=-1]="Previous",e[e.Next=1]="Next"}(N||(N={})),function(e){e[e.Strict=0]="Strict",e[e.Loose=1]="Loose"}(O||(O={})),function(e){e[e.SetSelectedIndex=0]="SetSelectedIndex",e[e.SetOrientation=1]="SetOrientation",e[e.SetActivation=2]="SetActivation",e[e.RegisterTab=3]="RegisterTab",e[e.UnregisterTab=4]="UnregisterTab",e[e.RegisterPanel=5]="RegisterPanel",e[e.UnregisterPanel=6]="UnregisterPanel",e[e.ForceRerender=7]="ForceRerender"}(E||(E={}));var R=((P={})[E.SetSelectedIndex]=function(e,t){return e.selectedIndex===t.index?e:u({},e,{selectedIndex:t.index})},P[E.SetOrientation]=function(e,t){return e.orientation===t.orientation?e:u({},e,{orientation:t.orientation})},P[E.SetActivation]=function(e,t){return e.activation===t.activation?e:u({},e,{activation:t.activation})},P[E.RegisterTab]=function(e,t){return e.tabs.includes(t.tab)?e:u({},e,{tabs:[].concat(e.tabs,[t.tab])})},P[E.UnregisterTab]=function(e,t){return u({},e,{tabs:e.tabs.filter((function(e){return e!==t.tab}))})},P[E.RegisterPanel]=function(e,t){return e.panels.includes(t.panel)?e:u({},e,{panels:[].concat(e.panels,[t.panel])})},P[E.UnregisterPanel]=function(e,t){return u({},e,{panels:e.panels.filter((function(e){return e!==t.panel}))})},P[E.ForceRerender]=function(e){return u({},e)},P),F=(0,s.createContext)(null);function U(e){var t=(0,s.useContext)(F);if(null===t){var n=new Error("<"+e+" /> is missing a parent <Tab.Group /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(n,U),n}return t}function C(e,t){return f(t.type,R,e,t)}F.displayName="TabsContext";var L=s.Fragment;function H(e){var t,n,r="headlessui-tabs-tab-"+w(),a=U(H.name),i=a[0],c=i.selectedIndex,l=i.tabs,d=i.panels,v=i.orientation,g=i.activation,x=a[1],h=x.dispatch,y=x.change,S=(0,s.useRef)(null),N=m(S,(function(e){e&&h({type:E.ForceRerender})}));b((function(){return h({type:E.RegisterTab,tab:S}),function(){return h({type:E.UnregisterTab,tab:S})}}),[h,S]);var O=l.indexOf(S),P=O===c,A=(0,s.useCallback)((function(e){var t=l.map((function(e){return e.current})).filter(Boolean);if(e.key===o.Space||e.key===o.Enter)return e.preventDefault(),e.stopPropagation(),void y(O);switch(e.key){case o.Home:case o.PageUp:return e.preventDefault(),e.stopPropagation(),k(t,j.First);case o.End:case o.PageDown:return e.preventDefault(),e.stopPropagation(),k(t,j.Last)}return f(v,{vertical:function(){return e.key===o.ArrowUp?k(t,j.Previous|j.WrapAround):e.key===o.ArrowDown?k(t,j.Next|j.WrapAround):void 0},horizontal:function(){return e.key===o.ArrowLeft?k(t,j.Previous|j.WrapAround):e.key===o.ArrowRight?k(t,j.Next|j.WrapAround):void 0}})}),[l,v,O,y]),T=(0,s.useCallback)((function(){var e;null==(e=S.current)||e.focus()}),[S]),R=(0,s.useCallback)((function(){var e;null==(e=S.current)||e.focus(),y(O)}),[y,O,S]),F=(0,s.useMemo)((function(){return{selected:P}}),[P]);return p({props:u({},e,{ref:N,onKeyDown:A,onFocus:"manual"===g?T:R,onClick:R,id:r,role:"tab",type:I(e,S),"aria-controls":null==(t=d[O])||null==(n=t.current)?void 0:n.id,"aria-selected":P,tabIndex:P?0:-1}),slot:F,defaultTag:"button",name:"Tabs.Tab"})}var D=r.RenderStrategy|r.Static;H.Group=function(e){var t=e.defaultIndex,n=void 0===t?0:t,r=e.vertical,a=void 0!==r&&r,o=e.manual,i=void 0!==o&&o,l=e.onChange,d=c(e,["defaultIndex","vertical","manual","onChange"]),f=a?"vertical":"horizontal",v=i?"manual":"auto",g=(0,s.useReducer)(C,{selectedIndex:null,tabs:[],panels:[],orientation:f,activation:v}),m=g[0],b=g[1],x=(0,s.useMemo)((function(){return{selectedIndex:m.selectedIndex}}),[m.selectedIndex]),h=(0,s.useRef)((function(){}));(0,s.useEffect)((function(){b({type:E.SetOrientation,orientation:f})}),[f]),(0,s.useEffect)((function(){b({type:E.SetActivation,activation:v})}),[v]),(0,s.useEffect)((function(){"function"===typeof l&&(h.current=l)}),[l]),(0,s.useEffect)((function(){if(!(m.tabs.length<=0)&&null===m.selectedIndex){var e=m.tabs.map((function(e){return e.current})).filter(Boolean),t=e.filter((function(e){return!e.hasAttribute("disabled")}));if(n<0)b({type:E.SetSelectedIndex,index:e.indexOf(t[0])});else if(n>m.tabs.length)b({type:E.SetSelectedIndex,index:e.indexOf(t[t.length-1])});else{var r=e.slice(0,n),a=e.slice(n),o=[].concat(a,r).find((function(e){return t.includes(e)}));if(!o)return;b({type:E.SetSelectedIndex,index:e.indexOf(o)})}}}),[n,m.tabs,m.selectedIndex]);var y=(0,s.useRef)(m.selectedIndex),w=(0,s.useMemo)((function(){return[m,{dispatch:b,change:function(e){y.current!==e&&h.current(e),y.current=e,b({type:E.SetSelectedIndex,index:e})}}]}),[m,b]);return s.createElement(F.Provider,{value:w},p({props:u({},d),slot:x,defaultTag:L,name:"Tabs"}))},H.List=function e(t){var n=U([H.name,e.name].join("."))[0],r={selectedIndex:n.selectedIndex};return p({props:u({},t,{role:"tablist","aria-orientation":n.orientation}),slot:r,defaultTag:"div",name:"Tabs.List"})},H.Panels=function e(t){var n=U([H.name,e.name].join("."))[0].selectedIndex;return p({props:t,slot:(0,s.useMemo)((function(){return{selectedIndex:n}}),[n]),defaultTag:"div",name:"Tabs.Panels"})},H.Panel=function e(t){var n,r,a=U([H.name,e.name].join(".")),o=a[0],i=o.selectedIndex,c=o.tabs,l=o.panels,d=a[1].dispatch,f="headlessui-tabs-panel-"+w(),v=(0,s.useRef)(null),g=m(v,(function(e){e&&d({type:E.ForceRerender})}));b((function(){return d({type:E.RegisterPanel,panel:v}),function(){return d({type:E.UnregisterPanel,panel:v})}}),[d,v]);var x=l.indexOf(v),h=x===i,y=(0,s.useMemo)((function(){return{selected:h}}),[h]);return p({props:u({},t,{ref:g,id:f,role:"tabpanel","aria-labelledby":null==(n=c[x])||null==(r=n.current)?void 0:r.id,tabIndex:h?0:-1}),slot:y,defaultTag:"div",features:D,visible:h,name:"Tabs.Panel"})};var M=n(3951),Z=n(8315),_=n(5077),W=n(6612),B=n(6049),G=n(9933),z=n(3196),X=function(){var e=(0,s.useState)(-1),t=e[0],n=e[1],r=[1970,1980,1990,2e3,2010];return(0,s.useEffect)((function(){n(parseInt(window.sessionStorage.getItem("defaultTag")||"0"))}),[]),(0,i.jsxs)(_.Z,{children:[(0,i.jsx)(Z.H2,{className:"mt-4 mb-12",children:"\u793e\u53cb\u4f86\u7a3f"}),(0,i.jsxs)(H.Group,{defaultIndex:t,onChange:function(e){window.sessionStorage.setItem("defaultTag",String(e))},children:[(0,i.jsx)(H.List,{className:"border-b-4 border-purple-500 mb-10 flex justify-between overflow-x-scroll",children:r.map((function(e,t){var n=0==t?"mr-1":t==r.length-1?"ml-1":"mx-1";return(0,i.jsx)(H,{as:s.Fragment,children:function(t){var r=t.selected;return(0,i.jsxs)("button",{className:"".concat(n," rounded-t-2xl rounded-b-none px-2 sm:px-4 md:px-5 pt-3 pb-2 tracking-wider md:tracking-widest outline-none transition-colors duration-200 ").concat(r?"bg-purple-500 text-white":"text-gray-200"),children:[(0,i.jsx)("span",{className:"ml-1",children:e}),(0,i.jsx)("span",{className:"lg:inline hidden",children:"\u5e74\u4ee3"}),(0,i.jsx)("span",{className:"lg:hidden inline",children:"'s"})]})}},"tab-".concat(e))}))}),(0,i.jsx)(H.Panels,{children:r.map((function(e){var t=G.Z.filter((function(t){return t.decade==e}));return(0,i.jsx)(H.Panel,{className:"outline-none",children:(0,i.jsx)(B.Z,{posts:t})},"panel-".concat(e))}))})]})]})};function q(){var e=(0,z.el)().map((function(e){return{imageUrl:e.coverUrl,title:e.title,description:(0,z.fN)(e),slug:e.slug}}));return(0,i.jsxs)(W.Z,{title:"\u793e\u53cb\u4f86\u7a3f",children:[(0,i.jsx)(M.Z,{slides:e,link:"posts"}),(0,i.jsx)(X,{})]})}},1834:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts",function(){return n(2723)}])}},function(e){e.O(0,[515,971,612,640,196,774,888,179],(function(){return t=1834,e(e.s=t);var t}));var t=e.O();_N_E=t}]);