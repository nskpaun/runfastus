(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{144:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return l});var a=n(7),r=n.n(a),o=n(0),i=n.n(o),c=n(154),u=n(163),s=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data.site.siteMetadata.title;return i.a.createElement(c.a,{location:this.props.location,title:t},i.a.createElement(u.a,{title:"404: Not Found"}),i.a.createElement("h1",null,"Not Found"),i.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},e}(i.a.Component);e.default=s;var l="1097489062"},150:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return f}),n.d(e,"StaticQueryContext",function(){return p}),n.d(e,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(149),u=n.n(c);n.d(e,"Link",function(){return u.a}),n.d(e,"withPrefix",function(){return c.withPrefix}),n.d(e,"navigate",function(){return c.navigate}),n.d(e,"push",function(){return c.push}),n.d(e,"replace",function(){return c.replace}),n.d(e,"navigateTo",function(){return c.navigateTo});var s=n(152),l=n.n(s);n.d(e,"PageRenderer",function(){return l.a});var d=n(33);n.d(e,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(t){return r.a.createElement(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},151:function(t,e,n){"use strict";n.d(e,"a",function(){return u}),n.d(e,"b",function(){return s});var a=n(160),r=n.n(a),o=n(161),i=n.n(o);i.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete i.a.googleFonts;var c=new r.a(i.a);var u=c.rhythm,s=c.scale},152:function(t,e,n){var a;t.exports=(a=n(153))&&a.default||a},153:function(t,e,n){"use strict";n.r(e);n(32);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(52),u=n(2),s=function(t){var e=t.location,n=u.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=s},154:function(t,e,n){"use strict";n(32);var a=n(7),r=n.n(a),o=n(0),i=n(150),c=(n(162),n(151)),u=[{name:"Blog",path:"/"},{name:"Lore",path:"/lore"},{name:"Swag",path:"/swag"}];var s=function(){return o.createElement("div",{style:{display:"flex",marginBottom:Object(c.a)(2.5)}}," ",u.map(function(t){var e=t.name,n=t.path;return o.createElement("h3",{style:Object.assign({},Object(c.b)(.5),{marginBottom:Object(c.a)(1.5),marginTop:0,marginRight:10})},o.createElement(i.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:n},e))}))},l=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t,e=this.props,n=e.location,a=e.title,r=e.children;return t="/"===n.pathname?o.createElement("h1",{style:Object.assign({},Object(c.b)(1.5),{marginBottom:Object(c.a)(1.5),marginTop:0})},o.createElement(i.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)):o.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},o.createElement(i.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)),o.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(c.a)(24),padding:Object(c.a)(1.5)+" "+Object(c.a)(.75)}},t,o.createElement(s,null),r,o.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",o.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},e}(o.Component);e.a=l},163:function(t,e,n){"use strict";var a=n(7),r=n.n(a),o=n(164),i=n(0),c=n(167),u=n.n(c),s=n(150),l=function(t){function e(){return t.apply(this,arguments)||this}r()(e,t);var n=e.prototype;return n.render=function(){var t=this.props,e=t.description,n=t.lang,a=t.meta,r=t.keywords,c=t.title;return i.createElement(s.StaticQuery,{query:d,render:function(t){var o=e||t.site.siteMetadata.description;return i.createElement(u.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:c},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:o}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(a)},i.createElement("html",{lang:"en"}),i.createElement("title",null,t.site.siteMetadata.title),i.createElement("meta",{name:"google-site-verification",content:"r9TUaNJMX2Uj7QpSR809jgCQGjIGK0PNouGD_fo0u7U"}))},data:o})},n.getDefaultProps=function(){return{lang:"en",meta:[],keywords:[]}},e}(i.Component);e.a=l;var d="1025518380"},164:function(t){t.exports={data:{site:{siteMetadata:{title:"Runfastus",description:"An ancient order of runners dedicated to running fast.",author:"Runfastus"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-410c63e8360d9e1073cd.js.map