(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[933],{560:function(t,e,s){"use strict";var n=s(4184),r=s.n(n),i=s(5893);e.Z=function(t){var e=t.children,s=t.className,n=void 0===s?"":s;return(0,i.jsx)("div",{className:r()("grid grid-cols-1 xl:grid-cols-12 gap-4",n),children:(0,i.jsx)("div",{className:"xl:col-start-2 xl:col-span-10 2xl:col-start-3 2xl:col-span-8",children:e})})}},8813:function(t,e,s){"use strict";var n=s(5893);e.Z=function(t){var e=t.text.split("\n");return(0,n.jsx)(n.Fragment,{children:e.map((function(t,s){return s==e.length+1?(0,n.jsx)("span",{children:t},"text-".concat(s)):(0,n.jsxs)("span",{children:[t,(0,n.jsx)("br",{})]},"text-".concat(s))}))})}},9867:function(t,e,s){"use strict";var n=s(560),r=s(8813),i=s(5893);e.Z=function(t){var e=t.contents;return(0,i.jsx)(n.Z,{className:"article-container mt-14 text-left",children:e.map((function(t,e){return"paragraph"==t.type?(0,i.jsx)("p",{children:(0,i.jsx)(r.Z,{text:t.text})},"content-".concat(e)):"subtitle"==t.type?(0,i.jsx)("p",{className:"subtitle",children:(0,i.jsx)(r.Z,{text:t.text})},"content-".concat(e)):"image"==t.type?(0,i.jsxs)("div",{className:"my-10",children:[(0,i.jsx)("img",{src:t.url,className:"rounded-xl mx-auto sm:max-h-96 w-full sm:w-auto md:max-w-screen-md",alt:t.description}),t.description?(0,i.jsx)("p",{className:"img-description",children:t.description}):null]},"content-".concat(e)):"unorderList"==t.type?(0,i.jsxs)("ul",{style:{listStyleType:t.styleType},children:[t.title,t.list.map((function(t,e){return(0,i.jsx)("li",{children:t},"orderList-".concat(e))}))]}):"orderList"==t.type?(0,i.jsxs)("ol",{children:[t.title,t.list.map((function(t,e){return(0,i.jsx)("li",{children:t},"orderList-".concat(e))}))]}):void 0}))})}},7497:function(t,e,s){"use strict";var n=s(1664),r=s(7814),i=s(9398),c=s(5893),l=function(t){var e=t.title,s=void 0===e?"":e,n=t.disabled,l=void 0!==n&&n,a=t.type,o={first:i.UXu,previous:i.EyR,next:i.yOZ,last:i.cLY};return(0,c.jsx)(r.G,{icon:o[a],className:"h-6 ".concat({first:"",previous:"",next:"",last:""}[a],"  ").concat(l?"text-gray-600 cursor-not-allowed":"text-gray-300 hover:text-white cursor-pointer"),title:s,fixedWidth:!0})};e.Z=function(t){var e=t.posts,s=t.index,r=t.prefix,i=e.length,a=e[s-1<0?0:s-1],o=e[s+1>=i?s:s+1];return(0,c.jsxs)("div",{className:"mt-12 flex gap-x-6 justify-center items-center",children:[0==s?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l,{type:"first",disabled:!0}),(0,c.jsx)(l,{type:"previous",disabled:!0})]}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.default,{href:"/".concat(r,"/").concat(e[0].slug),passHref:!0,children:(0,c.jsx)("a",{children:(0,c.jsx)(l,{type:"first",title:e[0].title})})}),(0,c.jsx)(n.default,{href:"/".concat(r,"/").concat(a.slug),passHref:!0,children:(0,c.jsx)("a",{children:(0,c.jsx)(l,{type:"previous",title:a.title})})})]}),(0,c.jsxs)("span",{className:"w-12 ml-3 mr-2 bg-gray-600 rounded-full tracking-wider cursor-default select-none",children:[s+1<10?"0":"",s+1]}),s==i-1?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l,{type:"next",disabled:!0}),(0,c.jsx)(l,{type:"last",disabled:!0})]}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.default,{href:"/".concat(r,"/").concat(o.slug),passHref:!0,children:(0,c.jsx)("a",{children:(0,c.jsx)(l,{type:"next",title:o.title})})}),(0,c.jsx)(n.default,{href:"/".concat(r,"/").concat(e[i-1].slug),passHref:!0,children:(0,c.jsx)("a",{children:(0,c.jsx)(l,{type:"last",title:e[i-1].title})})})]})]})}},2480:function(t,e,s){"use strict";s.r(e),s.d(e,{__N_SSG:function(){return p}});var n=s(2918),r=s(1163),i=s(560),c=s(5077),l=s(6612),a=s(9867),o=s(7497),d=s(4640),u=s(3196),x=s(5893),h=function(t){var e=t.post,s=t.index;return(0,x.jsxs)(c.Z,{className:"pb-20",children:[(0,x.jsx)("div",{className:"w-full h-72 sm:h-96 xl:h-120 bg-center bg-cover mb-8",style:{backgroundImage:"url('".concat(e.coverUrl,"')")}}),(0,x.jsxs)(i.Z,{className:"article-header",children:[(0,x.jsx)("h2",{className:"title",children:e.title}),(0,x.jsx)("div",{className:"authors",children:(0,x.jsxs)("p",{children:["\u4f5c\u8005 / ",e.author]})})]}),(0,x.jsx)(a.Z,{contents:e.contents}),(0,x.jsx)(o.Z,{prefix:"history",posts:d.Z,index:s})]})},p=!0;e.default=function(){var t=(0,r.useRouter)().query.slug,e=d.Z.findIndex((function(e){return e.slug==t}));if(-1==e)return(0,x.jsx)(n.default,{statusCode:404});var s=d.Z[e],i=(0,u.fN)(s),c={imageUrl:s.coverUrl,description:i};return(0,x.jsx)(l.Z,{title:s.title,metadata:c,children:(0,x.jsx)(h,{post:s,index:e})})}},3034:function(t,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/history/[slug]",function(){return s(2480)}])},2918:function(t,e,s){t.exports=s(3359)}},function(t){t.O(0,[774,523,342,612,640,196,888,179],(function(){return e=3034,t(t.s=e);var e}));var e=t.O();_N_E=e}]);