"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[729],{955:function(t,e,r){r.d(e,{M1:function(){return l},Pg:function(){return p},Pt:function(){return h},jC:function(){return i},tx:function(){return f}});var n=r(861),a=r(757),c=r.n(a),o=r(243),u="1890ff410384e7ebddcc1eb4567ef988",s="https://api.themoviedb.org/",i=function(){var t=(0,n.Z)(c().mark((function t(){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(s,"3/trending/movie/day?api_key=").concat(u));case 3:return e=t.sent,r=e.data.results.map((function(t){var e=t.id,r=t.title,n=t.poster_path;return{id:e,title:r,poster:n?"https://image.tmdb.org/t/p/w300".concat(n):null}})),t.abrupt("return",r);case 8:t.prev=8,t.t0=t.catch(0),alert(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(s,"3/movie/").concat(e,"?api_key=").concat(u));case 3:return r=t.sent,n={title:r.data.title,image:r.data.poster_path?"https://image.tmdb.org/t/p/w500".concat(r.data.poster_path):null,score:r.data.vote_average,overview:r.data.overview,genres:r.data.genres.map((function(t){return t.name})).join(", ")},t.abrupt("return",n);case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(s,"3/movie/").concat(e,"/credits?api_key=").concat(u));case 3:return r=t.sent,n=r.data.cast.map((function(t){var e=t.name,r=t.character,n=t.profile_path;return{name:e,character:r,profilePhoto:n?"https://image.tmdb.org/t/p/w500".concat(n):null}})),t.abrupt("return",n);case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(s,"3/movie/").concat(e,"/reviews?api_key=").concat(u));case 3:return r=t.sent,n=r.data.results.map((function(t){return{id:t.id,author:t.author,content:t.content}})),t.abrupt("return",n);case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(s,"3/search/movie?api_key=").concat(u,"&query=").concat(e));case 3:return r=t.sent,n=r.data.results.map((function(t){var e=t.id,r=t.title,n=t.poster_path;return{id:e,title:r,poster:n?"https://image.tmdb.org/t/p/w300".concat(n):null}})),t.abrupt("return",n);case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},839:function(t,e,r){r.r(e),r.d(e,{default:function(){return g}});var n=r(861),a=r(439),c=r(757),o=r.n(c),u=r(791),s=r(955),i=r(689),p="Cast_list__GlWio",l="Cast_item__a0CDL",f="Cast_image__mOsuM",h="Cast_description__uN0VA",v="Cast_text__P2vgu",d="Cast_notFound__SweOj",m=r.p+"static/media/defaultPhoto.e467b8e53be39e2ac2e7.png",_=r(184),g=function(){var t=(0,i.UO)().movieId,e=(0,u.useState)([]),r=(0,a.Z)(e,2),c=r[0],g=r[1];return(0,u.useEffect)((function(){var e=function(){var e=(0,n.Z)(o().mark((function e(){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.M1)(t);case 2:r=e.sent,g(r);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t]),(0,_.jsx)(_.Fragment,{children:c.length>0?(0,_.jsx)("ul",{className:p,children:c.map((function(t){var e=t.name,r=t.character,n=t.profilePhoto;return(0,_.jsxs)("li",{className:l,children:[(0,_.jsx)("img",{className:f,src:n||m,alt:e}),(0,_.jsxs)("div",{className:h,children:[(0,_.jsxs)("p",{className:v,children:["Actor: ",e]}),(0,_.jsxs)("p",{className:v,children:["Character: ",r]})]})]},e)}))}):(0,_.jsx)("h2",{className:d,children:"No actors found"})})}}}]);
//# sourceMappingURL=729.605d4533.chunk.js.map