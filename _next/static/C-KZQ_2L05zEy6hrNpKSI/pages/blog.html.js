(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{IA3N:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog.html",function(){var e=a("pef5");return{page:e.default||e}}])},pef5:function(e,t,a){"use strict";a.r(t);var n=a("dfwq"),r=a("zrwo"),l=a("0iUn"),c=a("sLSF"),m=a("MI3g"),o=a("a7VT"),i=a("Tit0"),u=a("pLtp"),s=a.n(u),d=a("TSYQ"),p=a.n(d),E=a("YFqc"),f=a.n(E),b=a("q1tI"),h=a.n(b),g=a("+RXl"),v=a("JCaB"),y=a("OJmZ"),w=(a("14y3"),a("rZyW")),_=a("7FCT"),A=a("sh1D"),j=a("rNLx"),N=a("F9JD"),x=a("QDj/"),O=a("IR1q"),P=a("qSlH"),T=a("CM4z"),C=a("+lnw"),I=a("hd1Y"),L=a("/Vld"),R=a("o5iK"),q=a("8C3G"),D=a("scTK"),F=a("yVHZ");var k=[w.metadata,_.metadata,A.metadata,j.metadata,P.metadata,O.metadata,x.metadata,N.metadata,T.metadata,C.metadata,I.metadata,L.metadata,R.metadata,q.metadata,D.metadata,F.metadata].sort(function(e,t){return t.publishedDay-e.publishedDay}),J=k.reduce(function(e,t){var a=t.publishedDay.getFullYear();return e[a]||(e[a]=[]),e[a].push(t),e},{}),M=s()(J).map(Number).sort(function(e,t){return t-e}),S=function(e){function t(e){var a;return Object(l.default)(this,t),(a=Object(m.default)(this,Object(o.default)(t).call(this,e))).articlesMetadata=Object(r.a)({},J),a.years=Object(n.default)(M),a}return Object(i.default)(t,e),Object(c.default)(t,[{key:"render",value:function(){var e=this;return h.a.createElement(g.a,null,h.a.createElement("h1",{className:"font-bold text-center text-4xl"},"Blog"),this.years.map(function(t){return h.a.createElement(h.a.Fragment,{key:t},h.a.createElement("h3",{className:"font-bold mt-8 text-quaternary text-2xl"},t),e.articlesMetadata[t].map(function(e){return h.a.createElement("div",{className:"mt-8",key:e.title},h.a.createElement(f.a,{href:e.relativeUrl,passHref:!0},h.a.createElement("a",{href:"#!",className:"bg-animate block hover:bg-secondary-light overflow-hidden rounded"},e.coverUrl&&h.a.createElement("img",{src:"https://raw.githubusercontent.com/meetupjs-ar/meetupjs-ar.github.io/dev/".concat(e.coverUrl),alt:e.coverAlt}),h.a.createElement("div",{className:p()([e.coverUrl?"border-b-2 border-l-2 border-r-2":"border-2","border-gray-300 border-solid p-4"])},h.a.createElement("h2",{className:"font-bold mb-4 text-xl lg:text-2xl"},e.title),h.a.createElement("p",{className:"mb-4 text-quaternary text-sm"},h.a.createElement("span",null,"Por "),h.a.createElement("strong",null,Object(v.a)(e.authors)),h.a.createElement("span",null,". Publicado el "),h.a.createElement(y.a,{date:e.publishedDay}),h.a.createElement("span",null,".")),h.a.createElement("p",{className:"mv3"},e.description)))))}))}))}}]),t}(b.Component),U=a("HohS"),Y=a.n(U),H=a("m/Pd"),X=a.n(H),z=Y()().publicRuntimeConfig,B={description:"En este blog compartimos informaci\xf3n relevante para la comunidad.",title:"Blog - ".concat(z.REACT_APP_TITLE),url:"".concat(z.REACT_APP_URL,"blog.html")};t.default=function(){return h.a.createElement(h.a.Fragment,null,h.a.createElement(X.a,null,h.a.createElement("title",null,B.title),h.a.createElement("meta",{name:"description",content:B.description}),h.a.createElement("meta",{property:"og:url",content:B.url}),h.a.createElement("meta",{property:"og:type",content:"website"}),h.a.createElement("meta",{property:"og:title",content:B.title}),h.a.createElement("meta",{property:"og:description",content:B.description}),h.a.createElement("meta",{property:"og:image",content:z.REACT_APP_SOCIAL_IMAGE}),h.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),h.a.createElement("meta",{name:"twitter:site",content:"@meetupjs_ar"}),h.a.createElement("meta",{name:"twitter:creator",content:"@meetupjs_ar"}),h.a.createElement("meta",{name:"twitter:title",content:B.title}),h.a.createElement("meta",{name:"twitter:description",content:B.description}),h.a.createElement("meta",{name:"twitter:image",content:z.REACT_APP_SOCIAL_IMAGE})),h.a.createElement(S,null))}},zrwo:function(e,t,a){"use strict";a.d(t,"a",function(){return u});var n=a("Jo+v"),r=a.n(n),l=a("4mXO"),c=a.n(l),m=a("pLtp"),o=a.n(m),i=a("vYYK");function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=o()(a);"function"===typeof c.a&&(n=n.concat(c()(a).filter(function(e){return r()(a,e).enumerable}))),n.forEach(function(t){Object(i.a)(e,t,a[t])})}return e}}},[["IA3N",1,0,2]]]);