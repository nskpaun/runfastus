(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{150:function(t,e,n){"use strict";n.r(e);n(32);var a=n(7),r=n.n(a),i=n(0),o=n(152),l=n(185),s=n(158),c=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t="Written by The Most Honorable "+this.props.guestAuthorName+", friend of Runfastus who lives.";return i.createElement("div",{style:{display:"flex",marginBottom:24}},i.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",backgroundColor:"#F5F5F5",fontStyle:"italic",borderRadius:5,padding:12}},i.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"#0073e6",fontStyle:"italic",borderRadius:24,height:48,width:48,color:"#ffffff",fontSize:24,marginRight:12,padding:12}},this.props.guestAuthorName.substring(0,1)),t))},e}(i.Component),u=(n(74),n(289)),d=n(291),m=n(292),p=n(293),f=n(294),g=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props,e=t.socialConfig,n=t.tags;return i.createElement("div",{style:{display:"flex",flexGrow:1,justifyContent:"space-between",color:"#0073e6",marginBottom:12}},i.createElement(d.a,{url:e.config.url,className:"button is-outlined is-rounded facebook"},i.createElement("span",{className:"icon"},i.createElement(u.a,null)),i.createElement("span",{className:"text"},"Facebook")),i.createElement(m.a,{url:e.config.url,className:"button is-outlined is-rounded twitter",title:e.config.title,via:e.twitterHandle.split("@").join(""),hashtags:n},i.createElement("span",{className:"icon"},i.createElement(u.d,null)),i.createElement("span",{className:"text"},"Twitter")),i.createElement(p.a,{url:e.config.url,className:"button is-outlined is-rounded linkedin",title:e.config.title},i.createElement("span",{className:"icon"},i.createElement(u.b,null)),i.createElement("span",{className:"text"},"LinkedIn")),i.createElement(f.a,{url:e.config.url,className:"button is-outlined is-rounded reddit",title:e.config.title},i.createElement("span",{className:"icon"},i.createElement(u.c,null)),i.createElement("span",{className:"text"},"Reddit")))},e}(i.Component),b=n(175),h=n(153);n.d(e,"pageQuery",function(){return E});var y=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data.markdownRemark,e=this.props.data.site.siteMetadata,n=e.title,a=this.props.pageContext,r=a.previous,u=a.next,d=null;return t.frontmatter.guest_author&&(d=i.createElement(c,{guestAuthorName:t.frontmatter.guest_author})),i.createElement(s.a,{location:this.props.location,title:n,banner:this.props.data.banner},i.createElement(b.a,{title:t.frontmatter.title,description:t.excerpt,keywords:t.frontmatter.tags}),i.createElement("h1",null,t.frontmatter.title),d,i.createElement("p",{style:Object.assign({},Object(h.b)(-.2),{display:"block",marginBottom:Object(h.a)(1),marginTop:Object(h.a)(-1)})},t.frontmatter.date),i.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),i.createElement("hr",{style:{marginBottom:Object(h.a)(1)}}),i.createElement(l.a,null),i.createElement(g,{socialConfig:{twitterHandle:e.social.twitter,config:{url:"runfastus.com/"+this.props.location.pathname,title:t.frontmatter.title}},tags:[]}),i.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},i.createElement("li",null,r&&i.createElement(o.Link,{to:r.fields.slug,rel:"prev"},"← ",r.frontmatter.title)),i.createElement("li",null,u&&i.createElement(o.Link,{to:u.fields.slug,rel:"next"},u.frontmatter.title," →"))))},e}(i.Component),E=(e.default=y,"2869731657")},152:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return f}),n.d(e,"StaticQueryContext",function(){return m}),n.d(e,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(151),s=n.n(l);n.d(e,"Link",function(){return s.a}),n.d(e,"withPrefix",function(){return l.withPrefix}),n.d(e,"navigate",function(){return l.navigate}),n.d(e,"push",function(){return l.push}),n.d(e,"replace",function(){return l.replace}),n.d(e,"navigateTo",function(){return l.navigateTo});var c=n(154),u=n.n(c);n.d(e,"PageRenderer",function(){return u.a});var d=n(33);n.d(e,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(t){return r.a.createElement(m.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},153:function(t,e,n){"use strict";n.d(e,"a",function(){return s}),n.d(e,"b",function(){return c});var a=n(170),r=n.n(a),i=n(171),o=n.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var l=new r.a(o.a);var s=l.rhythm,c=l.scale},154:function(t,e,n){var a;t.exports=(a=n(156))&&a.default||a},156:function(t,e,n){"use strict";n.r(e);n(32);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(51),s=n(2),c=function(t){var e=t.location,n=s.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(l.a,Object.assign({location:e,pageResources:n},n.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=c},158:function(t,e,n){"use strict";n(32),n(160);var a=n(7),r=n.n(a),i=n(0),o=n(152),l=n(157),s=n.n(l),c=(n(172),n(153)),u=[{name:"Blog",path:"/"},{name:"Lore",path:"/lore"},{name:"Swag",path:"/swag"}],d=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){this.props.location.pathname;return i.createElement("div",{style:{display:"flex"}}," ",u.map(function(t){var e=t.name,n=t.path;return i.createElement("h3",{style:Object.assign({},Object(c.b)(.5),{marginBottom:Object(c.a)(1.5),marginTop:0,marginRight:10})},i.createElement(o.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:n},e))}))},e}(i.Component),m=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t,e=this.props,n=e.location,a=e.title,r=e.children;return t=i.createElement("div",{style:{display:"flex",alignItems:"flex-end"}},i.createElement(s.a,{fixed:this.props.banner.childImageSharp.fixed,style:{marginBottom:0}}),i.createElement("h1",{style:Object.assign({},Object(c.b)(1.4),{marginBottom:Object(c.a)(1.5),marginLeft:Object(c.a)(1.5),marginTop:0,position:"absolute"})},i.createElement(o.Link,{style:{boxShadow:"none",textDecoration:"none",color:"white"},to:"/"},a))),i.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(c.a)(35),padding:Object(c.a)(1.5)+" "+Object(c.a)(.75)}},t,this.props.hideTabs?null:i.createElement(d,{location:n}),r,i.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},e}(i.Component);e.a=m},175:function(t,e,n){"use strict";var a=n(7),r=n.n(a),i=n(176),o=n(0),l=n(201),s=n.n(l),c=n(152),u=function(t){function e(){return t.apply(this,arguments)||this}r()(e,t);var n=e.prototype;return n.render=function(){var t=this,e=this.props,n=e.description,a=e.lang,r=e.meta,l=e.keywords,u=e.title;return o.createElement(c.StaticQuery,{query:d,render:function(e){var i=n||e.site.siteMetadata.description;return o.createElement(s.a,{htmlAttributes:{lang:a},title:u,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:i},{property:"og:title",content:u},{property:"og:description",content:i},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:u},{name:"twitter:description",content:i}].concat(t.props.keywords&&t.props.keywords.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)},o.createElement("html",{lang:"en"}),o.createElement("title",null,e.site.siteMetadata.title),o.createElement("meta",{name:"google-site-verification",content:"r9TUaNJMX2Uj7QpSR809jgCQGjIGK0PNouGD_fo0u7U"}))},data:i})},n.getDefaultProps=function(){return{lang:"en",meta:[],keywords:[]}},e}(o.Component);e.a=u;var d="444467372"},176:function(t){t.exports={data:{site:{siteMetadata:{title:"Runfastus",author:"Runfastus",siteUrl:"http://www.runfastus.com",social:{twitter:"runfastus"}}}}}},185:function(t,e,n){"use strict";n(160);var a=n(186),r=n(0),i=n.n(r),o=n(152),l=n(157),s=n.n(l),c=n(153);var u="2949667701";e.a=function(){return i.a.createElement(o.StaticQuery,{query:u,render:function(t){var e=t.site.siteMetadata,n=e.author,a=e.social;return i.a.createElement("div",{style:{display:"flex"}},i.a.createElement(s.a,{fixed:t.avatar.childImageSharp.fixed,alt:n,style:{marginRight:Object(c.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),i.a.createElement("p",null,"Blog by ",i.a.createElement("strong",null,n)," who lives."," ",i.a.createElement("br",null),i.a.createElement("a",{href:"https://twitter.com/"+a.twitter},"You should follow him on Twitter")))},data:a})}},186:function(t){t.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAABYlAAAWJQFJUiTwAAAC3UlEQVQ4y3VUyyu0URg/w8zIZUSEYorFZIGaIhbMxi3J3biUWTByCSVWyk6zUJYSC5eVPlkpC8XKWPkTJBs2iqnZKLn9vn5Hz/nOy3xvPe857/s8z+/8nst51OfnJ0Te3t4gz+PjI47+HGFlZQXRaBTT09OIxWK4uLjA6+urtqHP+/s7bAwlAFTweX5+xtLSEgoKCqCUSimVlZXY2dkxh398fJi9ssGurq5QWlpqHN1uN7xeLzwej95zdblcRt/e3o5EIuEAVQIWj8e10/9Y2ZKWlmZsg8EgksmkSYGSfJWUlGiD9PR0tLS0YGhoCL29vRgYGEBHR4dOAdkXFhYaYDLmGg6HnYAzMzPm5MzMTIyNjaG4uFiDUPx+P5aXlzE/P4/6+npjKwS4npycfId8f3+PnJwcc2pWVha6urp+hbmxsYHV1VWMj4+jpqbG/BfA5ubmb8Dd3V2HgoCdnZ3GIRAIYGRkBJubm7r6bW1t2nl4eFjrpUgkdXt7CzU3N2cqKnlZXFzE6Oiozs329rZ2JgjZNTY2GkayF9/T01Oo/v5+B0PmkADZ2dmoq6uD6JlTNndTU5P+Zm67u7sdxdnb24MaHBz8FXJPT4/el5eXo7W1Ve8rKiowNTWFUCikv4uKioydAB4cHEAxPJs2Adku8o9h0sHn82mGDQ0NWtfX16d70CZzdnYGdXh4mJKhfJeVlSESiWiAyclJMCL2Jm+J3T75+fl4eHiAenp6cjSrMLSvGIWVn52d1eDM58+2oY+5y+wvu7HZh3KyrHl5eZiYmEBtba0B4qFy8OXl5T/Al5cXVFVVaUVGRgZyc3N/NTaHBMNi9aX/pBgLCwtmQCiZEjc3NyYUGguzVEJ2omc0vMN8vr6+nOPr7u7OVNF2Fvk5jZhTISSgiqg2KBVbW1uorq5OyY5F4/U7Pz83Q9XBkC8BtScvja6vr7G/v4+1tTWsr6/j+PhYp8ae1DYY5S+4zyaOgrasbQAAAABJRU5ErkJggg==",width:50,height:50,src:"/static/db7bbb3f4a8bb89a22b2a5dd4b5ce0b6/66382/logo.png",srcSet:"/static/db7bbb3f4a8bb89a22b2a5dd4b5ce0b6/66382/logo.png 1x,\n/static/db7bbb3f4a8bb89a22b2a5dd4b5ce0b6/18a61/logo.png 1.5x,\n/static/db7bbb3f4a8bb89a22b2a5dd4b5ce0b6/f52d2/logo.png 2x,\n/static/db7bbb3f4a8bb89a22b2a5dd4b5ce0b6/4ffea/logo.png 3x"}}},site:{siteMetadata:{author:"Runfastus",social:{twitter:"runfastus"}}}}}}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-3c1c9e5a1b026bcabe92.js.map