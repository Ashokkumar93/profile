(function(t){function e(e){for(var s,i,a=e[0],l=e[1],c=e[2],p=0,d=[];p<a.length;p++)i=a[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],s=!0,a=1;a<n.length;a++){var l=n[a];0!==r[l]&&(s=!1)}s&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var s={},r={app:0},o=[];function i(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=s,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/profile/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"085c":function(t,e,n){t.exports=n.p+"img/profile-img.9f6b4424.png"},5003:function(t){t.exports=JSON.parse('[{"title":"My Fourth Blog Post","link":null,"description":"Dolor inventore quasi necessitatibus odio eaque doloribus"},{"title":"My Fourth Blog Post","link":null,"description":"Dolor inventore quasi necessitatibus odio eaque doloribus"},{"title":"My Fourth Blog Post","link":null,"description":"Dolor inventore quasi necessitatibus odio eaque doloribus"}]')},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._m(0),t._m(1),n("Projects"),n("Posts"),n("Experience"),n("Skills")],1)},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"profile section"},[s("section",{staticClass:"head"},[s("img",{attrs:{src:n("085c"),alt:"Test User"}})]),s("section",{staticClass:"content"},[s("section",[s("h1",[t._v("Test User")]),s("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit, ipsum.")]),s("ul",{staticClass:"links"},[s("li",[s("a",{attrs:{href:"https://twitter.com",target:"_blank"}},[t._v("TWITTER")])]),s("li",[s("a",{attrs:{href:"https://twitter.com",target:"_blank"}},[t._v("GITHUB")])]),s("li",[s("a",{attrs:{href:"https://twitter.com",target:"_blank"}},[t._v("LINKEDIN")])]),s("li",[s("a",{attrs:{href:"https://twitter.com",target:"_blank"}},[t._v("BLOG")])])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"about-me section"},[n("section",{staticClass:"head gary-color head-text"},[t._v(" ABOUT ME ")]),n("section",{staticClass:"content gary-color text-lg"},[t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus perferendis porro cumque ea error ab voluptatem. Temporibus adipisci exercitationem similique itaque quibusdam laudantium, qui molestiae quas, aut amet animi id. ")])])}],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"projects section"},[n("section",{staticClass:"head gary-color head-text"},[t._v(" PROJECTS ")]),n("section",{staticClass:"content gary-color text-lg"},[n("ul",t._l(t.projects,(function(e,s){return n("li",{key:s},[n("h4",[n("a",{staticClass:"main-color",attrs:{href:e.link?e.link:"javascript:void(0)",target:"_blank"}},[t._v(t._s(e.title))])]),n("p",[t._v(" "+t._s(e.description)+" ")])])})),0)])])},a=[],l=n("aad6"),c={name:"Projects",data:function(){return{projects:l}}},u=c,p=n("2877"),d=Object(p["a"])(u,i,a,!1,null,null,null),f=d.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"posts section"},[n("section",{staticClass:"head gary-color head-text"},[t._v(" LATEST POSTS ")]),n("section",{staticClass:"content gary-color text-lg"},[n("ul",t._l(t.posts,(function(e,s){return n("li",{key:s},[n("h4",[n("a",{staticClass:"main-color",attrs:{href:e.link?e.link:"javascript:void(0)",target:"_blank"}},[t._v(t._s(e.title))])]),n("p",[t._v(" "+t._s(e.description)+" ")])])})),0)])])},_=[],b=n("5003"),h={name:"Posts",data:function(){return{posts:b}}},v=h,g=Object(p["a"])(v,m,_,!1,null,null,null),y=g.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"experience section"},[n("section",{staticClass:"head gary-color head-text"},[t._v(" EXPERIENCE ")]),n("section",{staticClass:"content gary-color text-lg"},[n("ul",t._l(t.experiences,(function(e,s){return n("li",{key:s},[n("h4",[n("a",{staticClass:"main-color",attrs:{href:e.projectLink?e.projectLink:"javascript:void(0)",target:"_blank"}},[t._v(t._s(e.company))])]),n("p",[t._v(" "+t._s(e.jobTitle)+", "+t._s(e.startTime)+" - "+t._s(e.endTime)+" ")])])})),0)])])},x=[],j=n("f916"),T={name:"Experience",data:function(){return{experiences:j}}},C=T,O=Object(p["a"])(C,k,x,!1,null,null,null),P=O.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"skills section"},[n("section",{staticClass:"head gary-color head-text"},[t._v(" SKILLS ")]),n("section",{staticClass:"content gary-color text-lg"},[n("ul",t._l(t.skills,(function(e,s){return n("li",{key:s},[n("h4",{staticClass:"main-color"},[t._v(" "+t._s(e.title)+" ")]),n("p",[t._l(e.languagesAndFrameworks,(function(n,s){return[t._v(" "+t._s(n)+t._s(e.languagesAndFrameworks.length!=s+1?", ":"")+" ")]}))],2)])})),0)])])},E=[],q=n("df6d"),w={name:"Skills",data:function(){return{skills:q}}},L=w,D=Object(p["a"])(L,S,E,!1,null,null,null),M=D.exports,F={name:"App",components:{Projects:f,Posts:y,Experience:P,Skills:M}},B=F,A=Object(p["a"])(B,r,o,!1,null,null,null),$=A.exports;n("7e79");s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t($)}}).$mount("#app")},"7e79":function(t,e,n){},aad6:function(t){t.exports=JSON.parse('[{"title":"My Fourth Blog Post","link":null,"description":"Dolor inventore quasi necessitatibus odio eaque doloribus"},{"title":"My Fourth Blog Post","link":null,"description":"Dolor inventore quasi necessitatibus odio eaque doloribus"},{"title":"My Fourth Blog Post","link":null,"description":"Dolor inventore quasi necessitatibus odio eaque doloribus"}]')},df6d:function(t){t.exports=JSON.parse('[{"title":"Databases","languagesAndFrameworks":["MongoDB","PostreSQL","MySQL"]}]')},f916:function(t){t.exports=JSON.parse('[{"company":"Acme Corp","projectLink":null,"jobTitle":"Test","startTime":"December 2017","endTime":"Febrauray 2020"},{"company":"Acme Corp","projectLink":"https://test.com","jobTitle":"Test","startTime":"December 2017","endTime":"Febrauray 2020"},{"company":"Acme Corp","projectLink":"https://test.com","jobTitle":"Test","startTime":"December 2017","endTime":"Febrauray 2020"}]')}});
//# sourceMappingURL=app.e85785c0.js.map