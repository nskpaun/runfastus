(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{146:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return c});var a=n(7),r=n.n(a),o=n(0),i=n(159),s=n(177),u=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data,e=t.site.siteMetadata.title;return o.createElement(i.a,{location:this.props.location,title:e,banner:t.banner},o.createElement(s.a,{title:"404: Not Found",keywords:["blog","gatsby","javascript","react","runfastus"]}),o.createElement("h1",null,"Not Found"),o.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},e}(o.Component);e.default=u;var c="3452776604"},154:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return h}),n.d(e,"StaticQueryContext",function(){return d}),n.d(e,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),s=n(153),u=n.n(s);n.d(e,"Link",function(){return u.a}),n.d(e,"withPrefix",function(){return s.withPrefix}),n.d(e,"navigate",function(){return s.navigate}),n.d(e,"push",function(){return s.push}),n.d(e,"replace",function(){return s.replace}),n.d(e,"navigateTo",function(){return s.navigateTo});var c=n(156),l=n.n(c);n.d(e,"PageRenderer",function(){return l.a});var p=n(33);n.d(e,"parsePath",function(){return p.a});var d=r.a.createContext({}),m=function(t){return r.a.createElement(d.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},155:function(t,e,n){"use strict";n.d(e,"a",function(){return u}),n.d(e,"b",function(){return c});var a=n(167),r=n.n(a),o=n(168),i=n.n(o);i.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete i.a.googleFonts;var s=new r.a(i.a);var u=s.rhythm,c=s.scale},156:function(t,e,n){var a;t.exports=(a=n(157))&&a.default||a},157:function(t,e,n){"use strict";n.r(e);n(32);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),s=n(51),u=n(2),c=function(t){var e=t.location,n=u.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(s.a,Object.assign({location:e,pageResources:n},n.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=c},159:function(t,e,n){"use strict";n(32),n(161);var a=n(7),r=n.n(a),o=n(0),i=n(154),s=n(160),u=n.n(s),c=(n(169),n(155)),l=[{name:"Blog",path:"/"},{name:"Lore",path:"/lore"},{name:"Swag",path:"/swag"}],p=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){this.props.location.pathname;return o.createElement("div",{style:{display:"flex"}}," ",l.map(function(t){var e=t.name,n=t.path;return o.createElement("h3",{style:Object.assign({},Object(c.b)(.5),{marginBottom:Object(c.a)(1.5),marginTop:0,marginRight:10})},o.createElement(i.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:n},e))}))},e}(o.Component),d=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t,e=this.props,n=e.location,a=e.title,r=e.children;return t=o.createElement("div",{style:{display:"flex",alignItems:"flex-end"}},o.createElement(u.a,{fixed:this.props.banner.childImageSharp.fixed,style:{marginBottom:0}}),o.createElement("h1",{style:Object.assign({},Object(c.b)(1.4),{marginBottom:Object(c.a)(1.5),marginLeft:Object(c.a)(1.5),marginTop:0,position:"absolute"})},o.createElement(i.Link,{style:{boxShadow:"none",textDecoration:"none",color:"white"},to:"/"},a))),o.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(c.a)(35),padding:Object(c.a)(1.5)+" "+Object(c.a)(.75)}},t,this.props.hideTabs?null:o.createElement(p,{location:n}),r,o.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",o.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},e}(o.Component);e.a=d},177:function(t,e,n){"use strict";var a=n(7),r=n.n(a),o=n(178),i=n(0),s=n(203),u=n.n(s),c=n(154),l=function(t){function e(){return t.apply(this,arguments)||this}r()(e,t);var n=e.prototype;return n.render=function(){var t=this,e=this.props,n=e.description,a=e.lang,r=e.keywords,s=e.title;return i.createElement(c.StaticQuery,{query:p,render:function(e){var o=n||e.site.siteMetadata.description;return i.createElement(u.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:s},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:o}].concat(t.props.keywords&&t.props.keywords.length>0?{name:"keywords",content:(r||[]).join(", ")}:[])},i.createElement("html",{lang:"en"}),i.createElement("title",null,e.site.siteMetadata.title),i.createElement("meta",{name:"google-site-verification",content:"r9TUaNJMX2Uj7QpSR809jgCQGjIGK0PNouGD_fo0u7U"}))},data:o})},n.getDefaultProps=function(){return{lang:"en",meta:[],keywords:[]}},e}(i.Component);e.a=l;var p="444467372"},178:function(t){t.exports={data:{site:{siteMetadata:{title:"Runfastus",author:"Runfastus",siteUrl:"http://www.runfastus.com",social:{twitter:"runfastus"}}}}}}}]);
//# sourceMappingURL=component---src-pages-404-tsx-289e7b9d7b0be7284dab.js.map