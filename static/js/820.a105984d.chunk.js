"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[820],{755:function(t,n,e){e.d(n,{Aj:function(){return i},TP:function(){return o},on:function(){return s},tx:function(){return p},zv:function(){return f}});var r=e(861),u=e(757),a=e.n(u),c=e(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={api_key:"8733d6e7e2025f98914d10d872f02ce9"};var i=function(){var t=(0,r.Z)(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/trending/all/day");case 2:return t.abrupt("return",t.sent.data);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(a().mark((function t(n){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/search/movie?query=".concat(n));case 2:return t.abrupt("return",t.sent.data);case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(a().mark((function t(n){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n));case 2:return t.abrupt("return",t.sent.data);case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(a().mark((function t(n){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n,"/credits"));case 2:return t.abrupt("return",t.sent.data);case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(a().mark((function t(n){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n,"/reviews"));case 2:return t.abrupt("return",t.sent.data);case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},49:function(t,n,e){e.d(n,{e:function(){return o}});var r,u=e(87),a=e(689),c=e(168),i=e(444).ZP.ul(r||(r=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n"]))),s=e(184),o=function(t){var n=t.moviesData,e=(0,a.TH)();return(0,s.jsx)(i,{children:n.map((function(t){return(0,s.jsx)("li",{children:(0,s.jsx)(u.rU,{to:"/movies/".concat(t.id),state:{from:e},children:t.title||t.name})},t.id)}))})}},820:function(t,n,e){e.r(n);var r=e(861),u=e(439),a=e(757),c=e.n(a),i=e(755),s=e(791),o=e(87),f=e(49),p=e(184);n.default=function(){var t=(0,s.useState)(""),n=(0,u.Z)(t,2),e=n[0],a=n[1],l=(0,s.useState)(null),v=(0,u.Z)(l,2),d=v[0],h=v[1],x=(0,s.useState)(!1),m=(0,u.Z)(x,2),Z=m[0],w=m[1],g=(0,o.lr)(),y=(0,u.Z)(g,2),b=y[0],k=y[1],j=b.get("query");(0,s.useEffect)((function(){if(""!==j&&null!==j){var t=function(){var t=(0,r.Z)(c().mark((function t(){var n,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,w(!0),t.next=4,(0,i.on)(j);case 4:n=t.sent,e=n.results,h(e),t.next=13;break;case 9:return t.prev=9,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return",alert("Sorry, please try again"));case 13:return t.prev=13,w(!1),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[0,9,13,16]])})));return function(){return t.apply(this,arguments)}}();t()}}),[j]);return(0,p.jsxs)("div",{children:[(0,p.jsxs)("form",{onSubmit:function(t){t.preventDefault(),k({query:e}),a("")},children:[(0,p.jsx)("input",{type:"text",value:e,onChange:function(t){a(t.target.value)}}),(0,p.jsx)("button",{type:"submit",children:"Search movie"})]}),Z&&(0,p.jsx)("div",{children:"...Loading"}),d&&(0,p.jsx)(f.e,{moviesData:d})]})}}}]);
//# sourceMappingURL=820.a105984d.chunk.js.map