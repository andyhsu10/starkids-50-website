(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[180],{7484:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",s="second",i="minute",a="hour",o="day",u="week",c="month",l="quarter",d="year",f="date",h="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},x=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:x,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+x(r,2,"0")+":"+x(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(r,c),i=n-s<0,a=e.clone().add(r+(i?-1:1),c);return+(-(r+(n-s)/(i?s-a:a-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:d,w:u,d:o,D:f,h:a,m:i,s:s,ms:r,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},w="en",y={};y[w]=g;var b=function(t){return t instanceof N},$=function(t,e,n){var r;if(!t)return w;if("string"==typeof t)y[t]&&(r=t),e&&(y[t]=e,r=t);else{var s=t.name;y[s]=t,r=s}return!n&&r&&(w=r),r||!n&&w},j=function(t,e){if(b(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new N(n)},S=v;S.l=$,S.i=b,S.w=function(t,e){return j(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var N=function(){function g(t){this.$L=$(t.locale,null,!0),this.parse(t)}var x=g.prototype;return x.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(S.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(m);if(r){var s=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},x.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},x.$utils=function(){return S},x.isValid=function(){return!(this.$d.toString()===h)},x.isSame=function(t,e){var n=j(t);return this.startOf(e)<=n&&n<=this.endOf(e)},x.isAfter=function(t,e){return j(t)<this.startOf(e)},x.isBefore=function(t,e){return this.endOf(e)<j(t)},x.$g=function(t,e,n){return S.u(t)?this[e]:this.set(n,t)},x.unix=function(){return Math.floor(this.valueOf()/1e3)},x.valueOf=function(){return this.$d.getTime()},x.startOf=function(t,e){var n=this,r=!!S.u(e)||e,l=S.p(t),h=function(t,e){var s=S.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?s:s.endOf(o)},m=function(t,e){return S.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},p=this.$W,g=this.$M,x=this.$D,v="set"+(this.$u?"UTC":"");switch(l){case d:return r?h(1,0):h(31,11);case c:return r?h(1,g):h(0,g+1);case u:var w=this.$locale().weekStart||0,y=(p<w?p+7:p)-w;return h(r?x-y:x+(6-y),g);case o:case f:return m(v+"Hours",0);case a:return m(v+"Minutes",1);case i:return m(v+"Seconds",2);case s:return m(v+"Milliseconds",3);default:return this.clone()}},x.endOf=function(t){return this.startOf(t,!1)},x.$set=function(t,e){var n,u=S.p(t),l="set"+(this.$u?"UTC":""),h=(n={},n[o]=l+"Date",n[f]=l+"Date",n[c]=l+"Month",n[d]=l+"FullYear",n[a]=l+"Hours",n[i]=l+"Minutes",n[s]=l+"Seconds",n[r]=l+"Milliseconds",n)[u],m=u===o?this.$D+(e-this.$W):e;if(u===c||u===d){var p=this.clone().set(f,1);p.$d[h](m),p.init(),this.$d=p.set(f,Math.min(this.$D,p.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},x.set=function(t,e){return this.clone().$set(t,e)},x.get=function(t){return this[S.p(t)]()},x.add=function(r,l){var f,h=this;r=Number(r);var m=S.p(l),p=function(t){var e=j(h);return S.w(e.date(e.date()+Math.round(t*r)),h)};if(m===c)return this.set(c,this.$M+r);if(m===d)return this.set(d,this.$y+r);if(m===o)return p(1);if(m===u)return p(7);var g=(f={},f[i]=e,f[a]=n,f[s]=t,f)[m]||1,x=this.$d.getTime()+r*g;return S.w(x,this)},x.subtract=function(t,e){return this.add(-1*t,e)},x.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=t||"YYYY-MM-DDTHH:mm:ssZ",s=S.z(this),i=this.$H,a=this.$m,o=this.$M,u=n.weekdays,c=n.months,l=function(t,n,s,i){return t&&(t[n]||t(e,r))||s[n].substr(0,i)},d=function(t){return S.s(i%12||12,t,"0")},f=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:S.s(o+1,2,"0"),MMM:l(n.monthsShort,o,c,3),MMMM:l(c,o),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,u,2),ddd:l(n.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(i),HH:S.s(i,2,"0"),h:d(1),hh:d(2),a:f(i,a,!0),A:f(i,a,!1),m:String(a),mm:S.s(a,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:s};return r.replace(p,(function(t,e){return e||m[t]||s.replace(":","")}))},x.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},x.diff=function(r,f,h){var m,p=S.p(f),g=j(r),x=(g.utcOffset()-this.utcOffset())*e,v=this-g,w=S.m(this,g);return w=(m={},m[d]=w/12,m[c]=w,m[l]=w/3,m[u]=(v-x)/6048e5,m[o]=(v-x)/864e5,m[a]=v/n,m[i]=v/e,m[s]=v/t,m)[p]||v,h?w:S.a(w)},x.daysInMonth=function(){return this.endOf(c).$D},x.$locale=function(){return y[this.$L]},x.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=$(t,e,!0);return r&&(n.$L=r),n},x.clone=function(){return S.w(this.$d,this)},x.toDate=function(){return new Date(this.valueOf())},x.toJSON=function(){return this.isValid()?this.toISOString():null},x.toISOString=function(){return this.$d.toISOString()},x.toString=function(){return this.$d.toUTCString()},g}(),D=N.prototype;return j.prototype=D,[["$ms",r],["$s",s],["$m",i],["$H",a],["$W",o],["$M",c],["$y",d],["$D",f]].forEach((function(t){D[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),j.extend=function(t,e){return t.$i||(t(e,N,j),t.$i=!0),j},j.locale=$,j.isDayjs=b,j.unix=function(t){return j(1e3*t)},j.en=y[w],j.Ls=y,j.p={},j}()},4314:function(t,e,n){"use strict";n.d(e,{zG:function(){return d},P4:function(){return f},IU:function(){return h}});var r=n(266),s=n(809),i=n.n(s),a=n(9669),o=n.n(a),u=n(6264),c=o().create({baseURL:"https://starkids-50-nodejs.herokuapp.com/"}),l=function(){var t=(0,r.Z)(i().mark((function t(e){var n,r,s,a,o,l,d;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.url,r=e.method,s=void 0===r?"POST":r,a=e.body,o=u.decamelizeKeys(a),t.next=4,c({url:n,method:s,data:o});case 4:return l=t.sent,d=u.camelizeKeys(l.data),t.abrupt("return",d);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){return l({url:"/chats",method:"GET"})},f=function(t,e,n){return l({url:"/chats",method:"POST",body:{name:t,text:e,profile:n}})},h=function(t){return l({url:"/signup",method:"POST",body:t})}},8813:function(t,e,n){"use strict";var r=n(5893);e.Z=function(t){var e=t.text,n=t.className,s=e.split("\n");return(0,r.jsx)("span",{className:n,children:s.map((function(t,e){return e==s.length+1?(0,r.jsx)("span",{children:t},"text-".concat(e)):(0,r.jsxs)("span",{children:[t,(0,r.jsx)("br",{})]},"text-".concat(e))}))})}},2729:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return N}});var r=n(2809),s=n(266),i=n(809),a=n.n(i),o=n(7484),u=n.n(o),c=n(7294),l=n(7814),d=n(9398),f=n(4314),h=n(8315),m=n(5077),p=n(8813),g=n(6612),x=n(7687),v=n(8767),w=n(5893);function y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var b="profile-01",$=function(t){var e=JSON.parse(localStorage.getItem("chatIds"))||[];e.push(t);var n=Array.from(new Set(e));localStorage.setItem("chatIds",JSON.stringify(n))},j=function(t){var e=t.name,n=t.profileUrl,r=t.isSelf,s=t.sentAt,i=t.messages;return(0,w.jsxs)("div",{className:"flex w-full sm:w-5/6 md:w-4/5 lg:w-2/3 ".concat(r?"flex-row-reverse ml-auto":""),children:[(0,w.jsx)("div",{className:"w-8 md:w-12",children:(0,w.jsx)("div",{className:"relative w-8 md:w-12 h-8 md:h-12 rounded-full bg-center bg-cover",style:{backgroundImage:"url('".concat(n,"')")}})}),(0,w.jsx)("div",{className:"w-full text-left px-2 md:px-3",children:i.map((function(t,n){return(0,w.jsxs)("div",{className:"font-light",children:[0==n&&(r?(0,w.jsxs)("p",{className:"tracking-wide text-gray-50 leading-4 text-right cursor-default select-none",children:[(0,w.jsx)("span",{className:"mr-2 text-sm text-gray-200",children:u()(s).format("YYYY/MM/DD HH:mm")}),e]}):(0,w.jsxs)("p",{className:"tracking-wide text-gray-50 leading-4 cursor-default select-none",children:[e,(0,w.jsx)("span",{className:"ml-2 text-sm text-gray-200",children:u()(s).format("YYYY/MM/DD HH:mm")})]})),(0,w.jsx)("div",{className:"w-full flex ".concat(r?"justify-end":"justify-start"),children:(0,w.jsx)("div",{className:"mt-1 p-3 rounded-2xl tracking-wide ".concat(r?"bg-purple-600 text-white":"bg-white text-black"," ").concat(0==n?r?"rounded-tr-none":"rounded-tl-none":""),title:u()(s).format("YYYY/MM/DD HH:mm:ss"),children:(0,w.jsx)(p.Z,{text:t.text})})})]},"message-".concat(n))}))})]})},S=function(t){var e=t.disabled,n=t.messageGroups,i=t.refetchChats,o=(0,c.useState)(""),u=o[0],p=o[1],g=(0,c.useState)(""),v=g[0],S=g[1],N=(0,c.useState)(b),D=N[0],M=N[1],O=(0,c.useRef)(),k=(0,c.useRef)(),_=function(){var t=(0,s.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e||!v||!v.split(/\n|\r|\r\n/g).join("")){t.next=5;break}return t.next=3,(0,f.P4)(u||"\u533f\u540d",v,D);case 3:(n=t.sent)&&($(n.id),S(""),k.current.click(),O.current.focus(),i());case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),I=function(t){e||"Enter"!==t.key||t.nativeEvent.isComposing||t.shiftKey||"ontouchstart"in window||navigator.maxTouchPoints>0||(_(),t.preventDefault())};return(0,c.useEffect)((function(){var t=localStorage.getItem("profile")||b,e=x.hm.findIndex((function(e){return e==t}));-1===e?localStorage.setItem("profile",b):M(x.hm[e]);var n=localStorage.getItem("chatNickname");n&&p(n)}),[]),(0,w.jsxs)(m.Z,{children:[(0,w.jsx)(h.H2,{className:"mb-10",children:"\u7559\u8a00\u677f"}),(0,w.jsxs)("div",{className:"relative",children:[(0,w.jsx)("div",{className:"absolute w-full -top-4 flex justify-center z-30",children:(0,w.jsx)("div",{className:"rounded-full bg-purple-500 h-8 px-4 py-2 text-base sm:text-lg leading-4 sm:leading-4 tracking-wider select-none",children:e?(0,w.jsx)(l.G,{className:"animate-spin h-4 mx-2 inline",icon:d.UO1}):"\u6e05\u5927\u5929\u658750\u5e74\u751f\u65e5\u5feb\u6a02 \ud83c\udf89"})}),(0,w.jsxs)("div",{className:"relative bg-gray-600 w-full h-116 sm:h-132 md:h-148 lg:h-164 xl:h-180 2xl:h-200 rounded-xl",children:[(0,w.jsxs)("div",{className:"absolute left-0 bottom-24 w-full h-92 sm:h-108 md:h-124 lg:h-140 xl:h-156 2xl:h-176 overflow-hidden",children:[(0,w.jsx)("div",{className:"absolute top-0 w-full h-full flex place-content-center transition-opacity duration-700 z-10 opacity-100 ".concat(e?"":"opacity-0"),children:(0,w.jsx)("svg",{className:"my-auto animate-spin h-10 w-10 rounded-full bg-transparent border-4 border-purple-500 border-opacity-90",viewBox:"0 0 24 24",style:{borderRightColor:"#F8F7FD"}})}),(0,w.jsx)("div",{className:"absolute w-full h-full z-20 transition-opacity duration-700 ".concat(e?"opacity-0":"opacity-100"),children:(0,w.jsx)("div",{className:"absolute bottom-0 w-full max-h-92 sm:max-h-108 md:max-h-124 lg:max-h-140 xl:max-h-156 2xl:max-h-176 flex flex-col gap-4 px-2 pb-3 pt-6 lg:p-4 overflow-y-scroll",children:n.map((function(t,e){return(0,w.jsx)(j,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?y(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},t),"messageGroup-".concat(e))}))})})]}),(0,w.jsx)("div",{className:"absolute left-0 bottom-0 w-full h-24 border-t-2 border-gray-500 px-2 md:px-4 py-2 select-none",children:(0,w.jsxs)("div",{className:"flex gap-1 h-full",children:[(0,w.jsx)("div",{className:"flex w-12 md:w-16 h-full",children:(0,w.jsx)("div",{className:"relative self-center w-12 md:w-16 h-12 md:h-16 rounded-full bg-center bg-cover ".concat(e?"cursor-not-allowed":"cursor-pointer"),style:{backgroundImage:"url('/img/profile/".concat(D,".png')")},onClick:function(){if(!e){var t=x.hm.findIndex((function(t){return t==D}));-1===t||t===x.hm.length-1?(M(x.hm[0]),localStorage.setItem("profile",x.hm[0])):(M(x.hm[t+1]),localStorage.setItem("profile",x.hm[t+1]))}},children:(0,w.jsx)("div",{className:"absolute right-0 bottom-0 w-6 h-6 rounded-full p-1 ".concat(e?"bg-gray-400":"bg-purple-500"),children:(0,w.jsx)(l.G,{icon:d.V$d})})})}),(0,w.jsxs)("div",{className:"w-full h-full flex flex-col gap-2 pl-1 md:pl-2",children:[(0,w.jsx)("div",{className:"w-3/4 sm:w-1/2 h-9 bg-white rounded-full px-3.5 overflow-hidden",children:(0,w.jsx)("input",{type:"text",className:"form-input w-full h-full px-0 rounded placeholder-gray-400 text-black tracking-wider border-none outline-none focus:ring-0 focus:ring-transparent",name:"nickname",placeholder:"\u540d\u5b57/\u66b1\u7a31",disabled:e,autoComplete:"off",value:u,onChange:function(t){return e=t.target.value,p(e),void localStorage.setItem("chatNickname",e);var e}})}),(0,w.jsxs)("div",{className:"relative flex justify-between gap-1 w-full h-9 bg-white rounded-full pl-3.5 pr-0.5 overflow-hidden",children:[(0,w.jsx)("div",{className:"w-full overflow-y-scroll",style:{marginTop:"0.4rem"},children:(0,w.jsx)("textarea",{className:"form-textarea w-full h-full p-0 rounded placeholder-gray-400 text-black tracking-wider border-none outline-none focus:ring-0 focus:ring-transparent",name:"message",autoFocus:!0,placeholder:"\u8f38\u5165\u8a0a\u606f",disabled:e,autoComplete:"off",value:v,onChange:function(t){return S(t.target.value)},onKeyDown:function(t){return I(t)},ref:O})}),(0,w.jsx)("div",{className:"flex w-8 h-9",children:(0,w.jsx)("div",{className:"w-8 h-8 self-center rounded-full p-1.5 pl-1 ".concat(!e&&v&&v.split(/\n|\r|\r\n/g).join("")?"bg-purple-500 cursor-pointer":"bg-gray-400 cursor-not-allowed"),onClick:_,children:(0,w.jsx)(l.G,{icon:d.XCy})})}),(0,w.jsx)("button",{className:"hidden invisable",ref:k})]})]})]})})]})]})]})};function N(){var t=(0,c.useState)([]),e=t[0],n=t[1],r=(0,v.useQuery)("chats",f.zG,{refetchInterval:3e4}),s=r.data,i=r.isFetched,a=r.refetch;return(0,c.useEffect)((function(){var t=function(){var t=JSON.parse(localStorage.getItem("chatIds"));return t||localStorage.setItem("chatIds",JSON.stringify([])),t||[]}(),e=function(e){return{id:e.id,name:e.name,profileUrl:"/img/profile/".concat(e.profile,".png"),isSelf:t.includes(e.id),sentAt:e.sentAt,messages:[{sentAt:e.sentAt,text:e.text}]}};if(i){var r,a=[];s.chats.forEach((function(n,i){if(0!=i){if(!(u()(n.sentAt).diff(u()(r.sentAt))<3e5&&(t.includes(n.id)&&t.includes(r.id)||!t.includes(n.id)&&!t.includes(r.id)&&n.name==r.name)))return a.push(r),r=e(n),void(i==s.chats.length-1&&a.push(r));var o={sentAt:n.sentAt,text:n.text};r.messages.push(o),i==s.chats.length-1&&a.push(r)}else r=e(n)})),n(a)}}),[i,s]),(0,w.jsx)(g.Z,{title:"\u7559\u8a00\u677f",children:(0,w.jsx)(S,{disabled:!i,messageGroups:e,refetchChats:a})})}},8984:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/chat",function(){return n(2729)}])}},function(t){t.O(0,[774,523,74,612,888,179],(function(){return e=8984,t(t.s=e);var e}));var e=t.O();_N_E=e}]);