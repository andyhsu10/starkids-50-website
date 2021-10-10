(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[180],{6991:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return D}});var r=n(2809),s=n(266),a=n(809),l=n.n(a),c=n(7484),o=n.n(c),i=n(7294),u=n(7814),d=n(9398),f=n(9669),h=n.n(f),m=n(6264),p=h().create({baseURL:"https://starkids-50-nodejs.herokuapp.com/"}),x=function(){var e=(0,s.Z)(l().mark((function e(t){var n,r,s,a,c,o,i;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.url,r=t.method,s=void 0===r?"POST":r,a=t.body,c=m.decamelizeKeys(a),e.next=4,p({url:n,method:s,data:c});case 4:return o=e.sent,i=m.camelizeKeys(o.data),e.abrupt("return",i);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){return x({url:"/chats",method:"GET"})},v=function(e,t,n){return x({url:"/chats",method:"POST",body:{name:e,text:t,profile:n}})},w=n(8315),b=n(5077),j=n(6612),y=n(7687),N=n(8767),k=n(5893);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var S=function(e){var t=JSON.parse(localStorage.getItem("chatIds"))||[];t.push(e);var n=Array.from(new Set(t));localStorage.setItem("chatIds",JSON.stringify(n))},P=function(e){var t=e.name,n=e.profileUrl,r=e.isSelf,s=e.sentAt,a=e.messages;return(0,k.jsxs)("div",{className:"flex w-full sm:w-5/6 md:w-4/5 lg:w-2/3 ".concat(r?"flex-row-reverse ml-auto":""),children:[(0,k.jsx)("div",{className:"w-8 md:w-12",children:(0,k.jsx)("div",{className:"relative w-8 md:w-12 h-8 md:h-12 rounded-full bg-center bg-cover",style:{backgroundImage:"url('".concat(n,"')")}})}),(0,k.jsx)("div",{className:"w-full text-left px-2 md:px-3",children:a.map((function(e,n){return(0,k.jsxs)("div",{className:"font-light",children:[0==n&&(r?(0,k.jsxs)("p",{className:"tracking-wide text-gray-50 leading-4 text-right cursor-default select-none",children:[(0,k.jsx)("span",{className:"mr-2 text-sm text-gray-200",children:o()(s).format("YYYY/MM/DD HH:mm")}),t]}):(0,k.jsxs)("p",{className:"tracking-wide text-gray-50 leading-4 cursor-default select-none",children:[t,(0,k.jsx)("span",{className:"ml-2 text-sm text-gray-200",children:o()(s).format("YYYY/MM/DD HH:mm")})]})),(0,k.jsx)("div",{className:"w-full flex ".concat(r?"justify-end":"justify-start"),children:(0,k.jsx)("div",{className:"mt-1 p-3 rounded-2xl tracking-wide ".concat(r?"bg-purple-600 text-white":"bg-white text-black"," ").concat(0==n?r?"rounded-tr-none":"rounded-tl-none":""),title:o()(s).format("YYYY/MM/DD HH:mm:ss"),children:e.text.split("\n").map((function(t,n){return n==e.text.split("\n").length+1?(0,k.jsx)("span",{children:t},"msg-".concat(n)):(0,k.jsxs)("span",{children:[t,(0,k.jsx)("br",{})]},"msg-".concat(n))}))})})]},"message-".concat(n))}))})]})},C=function(e){var t=e.disabled,n=e.messageGroups,a=e.refetchChats,c=(0,i.useState)(""),o=c[0],f=c[1],h=(0,i.useState)(""),m=h[0],p=h[1],x=(0,i.useState)("sample-profile-1"),g=x[0],j=x[1],y=(0,i.useRef)(),N=(0,i.useRef)(),C=function(){var e=(0,s.Z)(l().mark((function e(){var n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t||!m||!m.split(/\n|\r|\r\n/g).join("")){e.next=5;break}return e.next=3,v(o||"\u533f\u540d",m,g);case 3:(n=e.sent)&&(S(n.id),p(""),N.current.click(),y.current.focus(),a());case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(e){t||"Enter"!==e.key||e.nativeEvent.isComposing||e.shiftKey||"ontouchstart"in window||navigator.maxTouchPoints>0||(C(),e.preventDefault())};return(0,k.jsxs)(b.Z,{children:[(0,k.jsx)(w.H2,{className:"mb-10",children:"\u7559\u8a00\u677f"}),(0,k.jsxs)("div",{className:"relative",children:[(0,k.jsx)("div",{className:"absolute w-full -top-4 flex justify-center z-30",children:(0,k.jsx)("div",{className:"rounded-full bg-purple-500 h-8 px-4 py-2 text-base sm:text-lg leading-4 sm:leading-4 tracking-wider select-none",children:t?(0,k.jsx)(u.G,{className:"animate-spin h-4 mx-2 inline",icon:d.UO1}):"\u6e05\u5927\u5929\u658750\u5e74\u751f\u65e5\u5feb\u6a02 \ud83c\udf89"})}),(0,k.jsxs)("div",{className:"relative bg-gray-600 w-full h-116 sm:h-132 md:h-148 lg:h-164 xl:h-180 2xl:h-200 rounded-xl",children:[(0,k.jsxs)("div",{className:"absolute left-0 bottom-24 w-full h-92 sm:h-108 md:h-124 lg:h-140 xl:h-156 2xl:h-176 overflow-hidden",children:[(0,k.jsx)("div",{className:"absolute top-0 w-full h-full flex place-content-center transition-opacity duration-700 z-10 opacity-100 ".concat(t?"":"opacity-0"),children:(0,k.jsx)("svg",{className:"my-auto animate-spin h-10 w-10 rounded-full bg-transparent border-4 border-purple-500 border-opacity-90",viewBox:"0 0 24 24",style:{borderRightColor:"#F8F7FD"}})}),(0,k.jsx)("div",{className:"absolute w-full h-full z-20 transition-opacity duration-700 ".concat(t?"opacity-0":"opacity-100"),children:(0,k.jsx)("div",{className:"absolute bottom-0 w-full max-h-92 sm:max-h-108 md:max-h-124 lg:max-h-140 xl:max-h-156 2xl:max-h-176 flex flex-col gap-4 px-2 pb-3 pt-6 lg:p-4 overflow-y-scroll",children:n.map((function(e,t){return(0,k.jsx)(P,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e),"messageGroup-".concat(t))}))})})]}),(0,k.jsx)("div",{className:"absolute left-0 bottom-0 w-full h-24 border-t-2 border-gray-500 px-2 md:px-4 py-2",children:(0,k.jsxs)("div",{className:"flex gap-1 h-full",children:[(0,k.jsx)("div",{className:"flex w-12 md:w-16 h-full",children:(0,k.jsx)("div",{className:"relative self-center w-12 md:w-16 h-12 md:h-16 rounded-full bg-center bg-cover ".concat(t?"cursor-not-allowed":"cursor-pointer"),style:{backgroundImage:"url('/img/profile/".concat(g,"@4x.png')")},onClick:function(){t||(console.log("changeProfile"),j("sample-profile-1"))},children:(0,k.jsx)("div",{className:"absolute right-0 bottom-0 w-6 h-6 rounded-full p-1 ".concat(t?"bg-gray-400":"bg-purple-500"),children:(0,k.jsx)(u.G,{icon:d.V$d})})})}),(0,k.jsxs)("div",{className:"w-full h-full flex flex-col gap-2 pl-1 md:pl-2",children:[(0,k.jsx)("div",{className:"w-3/4 sm:w-1/2 h-9 bg-white rounded-full px-3.5 overflow-hidden",children:(0,k.jsx)("input",{type:"text",className:"form-input w-full h-full px-0 rounded placeholder-gray-400 text-black tracking-wider border-none outline-none focus:ring-0 focus:ring-transparent",name:"nickname",placeholder:"\u540d\u5b57/\u66b1\u7a31",disabled:t,autoComplete:"off",value:o,onChange:function(e){return f(e.target.value)}})}),(0,k.jsxs)("div",{className:"relative flex justify-between gap-1 w-full h-9 bg-white rounded-full pl-3.5 pr-0.5 overflow-hidden",children:[(0,k.jsx)("div",{className:"w-full overflow-y-scroll",style:{marginTop:"0.4rem"},children:(0,k.jsx)("textarea",{className:"form-textarea w-full h-full p-0 rounded placeholder-gray-400 text-black tracking-wider border-none outline-none focus:ring-0 focus:ring-transparent",name:"message",autoFocus:!0,placeholder:"\u8f38\u5165\u8a0a\u606f",disabled:t,autoComplete:"off",value:m,onChange:function(e){return p(e.target.value)},onKeyDown:function(e){return D(e)},ref:y})}),(0,k.jsx)("div",{className:"flex w-8 h-9",children:(0,k.jsx)("div",{className:"w-8 h-8 self-center rounded-full p-1.5 pl-1 ".concat(!t&&m&&m.split(/\n|\r|\r\n/g).join("")?"bg-purple-500 cursor-pointer":"bg-gray-400 cursor-not-allowed"),onClick:C,children:(0,k.jsx)(u.G,{icon:d.XCy})})}),(0,k.jsx)("button",{className:"hidden invisable",ref:N})]})]})]})})]})]})]})};function D(){var e=(0,i.useState)([]),t=e[0],n=e[1],r=(0,N.useQuery)("chats",g,{refetchInterval:3e4}),s=r.data,a=r.isFetched,l=r.refetch;return(0,i.useEffect)((function(){var e=function(){var e=JSON.parse(localStorage.getItem("chatIds"));return e||localStorage.setItem("chatIds",JSON.stringify([])),e||[]}(),t=function(t){return{id:t.id,name:t.name,profileUrl:y.Al[t.profile],isSelf:e.includes(t.id),sentAt:t.sentAt,messages:[{sentAt:t.sentAt,text:t.text}]}};if(a){var r,l=[];s.chats.forEach((function(n,a){if(0!=a){if(!(o()(n.sentAt).diff(o()(r.sentAt))<3e5&&(e.includes(n.id)&&e.includes(r.id)||!e.includes(n.id)&&!e.includes(r.id)&&n.name==r.name)))return l.push(r),r=t(n),void(a==s.chats.length-1&&l.push(r));var c={sentAt:n.sentAt,text:n.text};r.messages.push(c),a==s.chats.length-1&&l.push(r)}else r=t(n)})),n(l)}}),[a,s]),(0,k.jsx)(j.Z,{title:"\u7559\u8a00\u677f",children:(0,k.jsx)(C,{disabled:!a,messageGroups:t,refetchChats:l})})}},8984:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/chat",function(){return n(6991)}])}},function(e){e.O(0,[774,523,342,643,612,888,179],(function(){return t=8984,e(e.s=t);var t}));var t=e.O();_N_E=t}]);