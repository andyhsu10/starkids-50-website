(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[466],{5548:function(i,n,l){"use strict";l.d(n,{E:function(){return r},b:function(){return e}});var r=[{imgUrl:"/img/album-1@4x.png",description:"\u7167\u7247\u8aaa\u660e\u7167\u7247\u8aaa\u660e\u7167\u7247\u8aaa\u660e\u7167\u7247\u8aaa\u660e\u7167\u7247\u8aaa\u660e"},{imgUrl:"/img/album-2@4x.png",description:"\u7167\u7247\u8aaa\u660e\u7167\u7247\u8aaa\u660e\u7167\u7247\u8aaa\u660e\u7167\u7247\u8aaa\u660e\u7167\u7247\u8aaa\u660e"},{imgUrl:"/img/album-3@4x.png",description:"\u7167\u7247\u8aaa\u660e\u7167\u7247\u8aaa\u660e\u7167\u7247\u8aaa\u660e\u7167\u7247\u8aaa\u660e\u7167\u7247\u8aaa\u660e"},{imgUrl:"/img/album-4@4x.png",description:"\u7167\u7247\u8aaa\u660e\u7167\u7247\u8aaa\u660e\u7167\u7247\u8aaa\u660e\u7167\u7247\u8aaa\u660e\u7167\u7247\u8aaa\u660e"},{imgUrl:"/img/album-5@4x.png",description:"\u7167\u7247\u8aaa\u660e\u7167\u7247\u8aaa\u660e\u7167\u7247\u8aaa\u660e\u7167\u7247\u8aaa\u660e\u7167\u7247\u8aaa\u660e"}],e=[{name:"\u5206\u985e\u540d\u7a311",slug:"slug-1",coverImgUrl:"/img/album-2@4x.png",description:"",images:[{imgUrl:"/img/album-1@4x.png",description:null},{imgUrl:"/img/album-2@4x.png",description:"Picture 2"},{imgUrl:"/img/album-3@4x.png",description:null},{imgUrl:"/img/album-4@4x.png",description:null},{imgUrl:"/img/album-5@4x.png",description:null}]},{name:"\u5206\u985e\u540d\u7a312",slug:"slug-2",coverImgUrl:"/img/album-3@4x.png",description:"",images:[{imgUrl:"/img/album-2@4x.png",description:"Picture 2"},{imgUrl:"/img/album-3@4x.png",description:null},{imgUrl:"/img/album-4@4x.png",description:null},{imgUrl:"/img/album-5@4x.png",description:null},{imgUrl:"/img/album-1@4x.png",description:null}]},{name:"\u5206\u985e\u540d\u7a313",slug:"slug-3",coverImgUrl:"/img/album-4@4x.png",description:"",images:[{imgUrl:"/img/album-3@4x.png",description:null},{imgUrl:"/img/album-4@4x.png",description:null},{imgUrl:"/img/album-5@4x.png",description:null},{imgUrl:"/img/album-1@4x.png",description:null},{imgUrl:"/img/album-2@4x.png",description:"Picture 2"}]},{name:"\u5206\u985e\u540d\u7a314",slug:"slug-4",coverImgUrl:"/img/album-5@4x.png",description:"",images:[{imgUrl:"/img/album-4@4x.png",description:null},{imgUrl:"/img/album-5@4x.png",description:null},{imgUrl:"/img/album-1@4x.png",description:null},{imgUrl:"/img/album-2@4x.png",description:"Picture 2"},{imgUrl:"/img/album-3@4x.png",description:null}]}]},2686:function(i,n,l){"use strict";l.r(n),l.d(n,{__N_SSG:function(){return d}});var r=l(2918),e=l(1664),g=l(1163),m=l(7814),u=l(9398),t=l(8315),s=l(5077),a=l(6612),c=l(5548),o=l(5893),p=function(i){var n=i.category,l=i.nextCategory,r=i.prevCategory;return(0,o.jsxs)(s.Z,{className:"pb-20",children:[(0,o.jsxs)("div",{className:"flex justify-center content-end",children:[(0,o.jsx)(e.default,{href:"/album/".concat(r.slug),passHref:!0,children:(0,o.jsx)(m.G,{icon:u.A35,className:"w-2.5 mr-8 text-gray-300 cursor-pointer",title:r.name,fixedWidth:!0})}),(0,o.jsx)(t.H3,{className:"cursor-default",children:n.name}),(0,o.jsx)(e.default,{href:"/album/".concat(l.slug),passHref:!0,children:(0,o.jsx)(m.G,{icon:u._tD,className:"w-2.5 ml-7 text-gray-300 cursor-pointer",title:l.name,fixedWidth:!0})})]}),(0,o.jsx)("div",{className:"mt-8 grid gap-x-4 gap-y-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",children:n.images.map((function(i,n){return(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:"w-full h-48 sm:h-60 lg:h-72 bg-center bg-cover rounded-xl overflow-hidden",style:{backgroundImage:"url('".concat(i.imgUrl,"')")}}),(0,o.jsx)("p",{className:"mt-2",children:i.description})]},"image-".concat(n))}))})]})},d=!0;n.default=function(){var i=(0,g.useRouter)().query.slug,n=c.b.findIndex((function(n){return n.slug==i}));if(-1==n)return(0,o.jsx)(r.default,{statusCode:404});var l=c.b[n],e={imageUrl:l.coverImgUrl,description:l.description},m=c.b.length,u=0,t=0;return 0==n?(u=m-1,t=1):n==m-1?(u=n-1,t=0):(u=n-1,t=n+1),(0,o.jsx)(a.Z,{title:l.name,metadata:e,children:(0,o.jsx)(p,{category:l,nextCategory:c.b[t],prevCategory:c.b[u]})})}},6490:function(i,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/album/[slug]",function(){return l(2686)}])},2918:function(i,n,l){i.exports=l(3359)}},function(i){i.O(0,[774,523,342,612,888,179],(function(){return n=6490,i(i.s=n);var n}));var n=i.O();_N_E=n}]);