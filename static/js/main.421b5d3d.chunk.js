(this.webpackJsonpchocolate_birthday=this.webpackJsonpchocolate_birthday||[]).push([[0],{10:function(e,r,t){},12:function(e,r,t){"use strict";t.r(r);var a=t(1),n=t.n(a),i=t(3),c=t.n(i),s=(t(9),t(4)),l={1825:["Milka"],1866:["Fry's Chocolate Cream"],1879:["Bournville"],1905:["Dairy Milk"],1908:["Toblerone"],1910:["Walnut Whip"],1914:["Fry's Turkish Delight"],1920:["Flake"],1924:["Milky Way"],1926:["Cadbury Fruit and Nut"],1928:["Reeses Cups"],1929:["Crunchie"],1930:["Snickers","Cadbury Whole Nut"],1932:["Mars Bar","Terry's Chocolate Orange Bar"],1934:["Fry's Peppermint Cream"],1935:["Kit Kat","Aero"],1936:["Milky Bar"],1937:["Smarties","Maltesers","Poppets","Rolo"],1941:["M&Ms"],1948:["Fudge"],1957:["Munchies","Revels"],1953:["Daim"],1958:["Picnic"],1959:["Aero Mint","Caramac"],1960:["Galaxy","Cadbury Buttons"],1962:["Topic"],1963:["Toffee Crisp","Animal Bar"],1966:["Crunch"],1967:["Twix","Minstrels","Aztec"],1968:["Galaxy Ripple"],1970:["Curly Wurly"],1971:["Creme egg"],1973:["Freddo"],1974:["Kinder Surprise"],1975:["Kinder Bueno"],1976:["Double Decker","Starbar","Yorkie","Yorkie Raisin","Lion","Cadbury Caramel"],1980:["Drifter","Bitz Mint"],1981:["Wispa"],1984:["Twirl","Bounty","Spira"],1986:["Boost","Secret"],1989:["Chomp"],1991:["Vice Versas"],1992:["Time Out"],1994:["Reese's Nutrageous","Hershey's Cookies 'N' Creme","Taz"],1995:["Wispa Gold"],1996:["Fuse"],1997:["Dairy Milk Tasters"],1999:["Kit Kat Chunky","Nuts About Caramel"],2002:["Cadbury Dream"],2004:["Mars Delight"],2006:["Kit Kat Chunky Peanut Butter"],2007:["Mars Planets"],2018:["Darkmilk"]},o=(t(10),t(0)),u=function(e){return e.replace(/\W+/g," ").split(/ |\B(?=[A-Z])/).map((function(e){return e.toLowerCase()})).join("_")},h=(new Date).getUTCFullYear(),j=Array(h-(h-((new Date).getUTCFullYear()-1899))).fill("").map((function(e,r){return h-r}));var d=function(){var e=n.a.useState(null),r=Object(s.a)(e,2),t=r[0],a=r[1];if(null===t)return Object(o.jsxs)("div",{id:"search-screen",children:[Object(o.jsx)("h1",{children:"What is your birth year chocolate?"}),Object(o.jsxs)("div",{id:"search",children:[Object(o.jsx)("label",{htmlFor:"year",children:"Year: "}),Object(o.jsx)("select",{id:"year",onChange:function(e){return function(e){a(+e)}(e.target.value)},children:j.map((function(e){return Object(o.jsx)("option",{children:e},e)}))})]})]});var i=function(e){if(e in l)return{year:e,bars:l[e],exact:!0};for(var r=e-1,t=e+1;!(r in l)&&!(t in l);)r-=1,t+=1;var a=r in l?r:t;return{year:a,bars:l[a],exact:!1}}(t),c=Object.keys(l).map((function(e){return+e})).reverse();return Object(o.jsxs)("main",{children:[i.exact&&Object(o.jsx)("h1",{children:"In ".concat(t," these chocolate bars were launched")}),!i.exact&&Object(o.jsx)("h1",{children:"Close to that year, in ".concat(i.year," these chocolate bars were launched")}),Object(o.jsx)("div",{id:"results",children:i.bars.map((function(e){return Object(o.jsxs)("div",{className:"result",children:[Object(o.jsx)("img",{src:"bars/".concat(u(e),".jpeg"),alt:e}),Object(o.jsx)("span",{children:e})]})}))}),Object(o.jsx)("h2",{children:"The great chocolate bar timeline"}),Object(o.jsx)("div",{className:"timeline",children:c.map((function(e,r){return Object(o.jsx)("div",{className:"container ".concat(r%2===0?"left":"right"),children:Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)("h3",{children:e}),Object(o.jsx)("p",{children:l[e].map((function(e){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("img",{src:"bars/".concat(u(e),".jpeg"),alt:e}),Object(o.jsx)("p",{children:e})]})}))})]})})}))}),Object(o.jsxs)("div",{id:"feedback",children:["Something wrong or missing? Send me an email to joe@joejag.com, or tell me on"," ",Object(o.jsx)("a",{href:"https://twitter.com/joe_jag",children:"Twitter"})]})]})},b=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,13)).then((function(r){var t=r.getCLS,a=r.getFID,n=r.getFCP,i=r.getLCP,c=r.getTTFB;t(e),a(e),n(e),i(e),c(e)}))};c.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(d,{})}),document.getElementById("root")),b()},9:function(e,r,t){}},[[12,1,2]]]);
//# sourceMappingURL=main.421b5d3d.chunk.js.map