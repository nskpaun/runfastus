(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{149:function(e,t,n){"use strict";n.r(t);n(34);var a=n(7),r=n.n(a),o=n(0),i=n(151),l=n(188),s=n(157),c=n(155),u=n(178),d=n(219);d.b("UA-132813912-1");var m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.posts;return o.createElement("div",{style:{display:"flex",flexDirection:"column",marginBottom:24}},o.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",backgroundColor:"#F5F5F5",borderRadius:5,padding:12}},"Welcome to The Order of Runfastus. We are an ancient order of amateur runners who hold speed as the highest virtue. Within the links of this blog you will find the truth and transcend the modern prison of running culture."),o.createElement("div",{style:{display:"flex",backgroundColor:"#CD5C5C",justifyContent:"center",color:"#FFFFFF",borderRadius:10,padding:14,marginTop:12},onClick:function(){var t=e[Math.floor(Math.random()*e.length)];d.a({category:"Navigation",action:"ExploreButton",label:"Explore the Order"}),Object(i.navigate)(t.node.fields.slug)}},"Explore the Order"))},t}(o.Component),p=n(282),f=n.n(p);d.b("UA-132813912-1");var h={email:"",hasSucceeded:null},g=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state=h,t}return r()(t,e),t.prototype.render=function(){var e,t=this;return e=this.state.hasSucceeded?o.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",backgroundColor:"#A2ED90",color:"#FFFFFF",borderRadius:5,padding:12}},"You are now subscribed!"):null===this.state.hasSucceeded?null:o.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",backgroundColor:"#000000",color:"#FFFFFF",borderRadius:5,padding:12}},"Oops something went wrong :("),o.createElement("div",{style:{display:"flex",flexDirection:"column",marginBottom:24}},o.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",backgroundColor:"#F5F5F5",borderRadius:5,padding:12}},"Sign up to stay up to date with the latest Runfastus content"),o.createElement("div",{style:{display:"flex",flexDirection:"row"}},o.createElement("textarea",{style:{display:"flex",backgroundColor:"#FFFFFF",justifyContent:"center",color:"#000000",borderWidth:2,borderColor:"#d6d7da",flexGrow:1,borderRadius:10,padding:12,marginTop:12,marginRight:12,height:60},placeholder:"Your email address",value:this.state.email,onChange:function(e){t.setState({email:e.target.value})}},"Email"),o.createElement("div",{style:{display:"flex",backgroundColor:"#CD5C5C",justifyContent:"center",color:"#FFFFFF",borderRadius:10,padding:14,marginTop:12,height:60},onClick:function(){d.a({category:"Subscription",action:"SubscribeButtonPressed"}),f()(t.state.email).then(function(e){"success"===e.result?(d.a({category:"Subscription",action:"SubscribeSucceeded"}),t.setState({hasSucceeded:!0})):t.setState({hasSucceeded:!1}),console.log(e)}).catch(function(){})}},"Subscribe")),e)},t}(o.Component),b=n(152),y=n(158),v=n.n(y);n.d(t,"pageQuery",function(){return E});var w=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,n=e.allMarkdownRemark.edges,a=e.allFile.edges,r=n.map(function(e){var t=e.node,n=t.fields.slug.replace("/","");return{node:t,thumbnail:a.filter(function(e){return e.node.absolutePath.indexOf(n)>-1})[0]}});return o.createElement(s.a,{location:this.props.location,title:t,hideTabs:!0},o.createElement(u.a,{title:"Runfastus",keywords:["blog","gatsby","javascript","react","runfastus"]}),o.createElement(m,{posts:n}),o.createElement(g,null),o.createElement(c.a,{location:this.props.location}),o.createElement(l.a,null),r.map(function(e){var t=e.node,n=e.thumbnail,a=t.frontmatter.title||t.fields.slug,r=n?o.createElement("div",{className:"BlogListItemImage"},o.createElement(v.a,{fixed:n.node.childImageSharp.fluid,style:{width:150,height:150,marginRight:12}})):null;return o.createElement("div",{key:t.fields.slug,style:{display:"flex",flexDirection:"row",alignItems:"center"}},r,o.createElement("div",{style:{flexDirection:"column"}},o.createElement("h3",{style:{marginBottom:Object(b.a)(.25)}},o.createElement(i.Link,{style:{boxShadow:"none"},to:t.fields.slug},a)),o.createElement("small",null,t.frontmatter.date),o.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}})))}))},t}(o.Component),E=(t.default=w,"2562398329")},151:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(150),s=n.n(l);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var c=n(153),u=n.n(c);n.d(t,"PageRenderer",function(){return u.a});var d=n(33);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},152:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return c});var a=n(173),r=n.n(a),o=n(174),i=n.n(o);i.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete i.a.googleFonts;var l=new r.a(i.a);var s=l.rhythm,c=l.scale},153:function(e,t,n){var a;e.exports=(a=n(156))&&a.default||a},155:function(e,t,n){"use strict";n(32),n(175);var a=n(7),r=n.n(a),o=n(0),i=n(151),l=n(152),s=[{name:"Blog",path:"/"},{name:"Lore",path:"/lore"},{name:"Swag",path:"/swag"}],c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){this.props.location.pathname;return o.createElement("div",{style:{display:"flex"}}," ",s.map(function(e){var t=e.name,n=e.path;return o.createElement("h3",{style:Object.assign({},Object(l.b)(.5),{marginBottom:Object(l.a)(1.5),marginTop:0,marginRight:10})},o.createElement(i.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:n},t))}))},t}(o.Component);t.a=c},156:function(e,t,n){"use strict";n.r(t);n(32);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(52),s=n(2),c=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},157:function(e,t,n){"use strict";n(32);var a=n(7),r=n.n(a),o=n(0),i=n(151),l=n(155),s=n(152),c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,n=t.location,a=t.title,r=t.children;return e="/"===n.pathname?o.createElement("h1",{style:Object.assign({},Object(s.b)(1.4),{marginBottom:Object(s.a)(1.5),marginTop:0})},o.createElement(i.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)):o.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},o.createElement(i.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)),o.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(s.a)(24),padding:Object(s.a)(1.5)+" "+Object(s.a)(.75)}},e,this.props.hideTabs?null:o.createElement(l.a,{location:n}),r,o.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",o.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},t}(o.Component);t.a=c},178:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(179),i=n(0),l=n(204),s=n.n(l),c=n(151),u=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.render=function(){var e=this,t=this.props,n=t.description,a=t.lang,r=t.meta,l=t.keywords,u=t.title;return i.createElement(c.StaticQuery,{query:d,render:function(t){var o=n||t.site.siteMetadata.description;return i.createElement(s.a,{htmlAttributes:{lang:a},title:u,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:u},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:u},{name:"twitter:description",content:o}].concat(e.props.keywords&&e.props.keywords.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)},i.createElement("html",{lang:"en"}),i.createElement("title",null,t.site.siteMetadata.title),i.createElement("meta",{name:"google-site-verification",content:"r9TUaNJMX2Uj7QpSR809jgCQGjIGK0PNouGD_fo0u7U"}))},data:o})},n.getDefaultProps=function(){return{lang:"en",meta:[],keywords:[]}},t}(i.Component);t.a=u;var d="444467372"},179:function(e){e.exports={data:{site:{siteMetadata:{title:"Runfastus",author:"Runfastus",siteUrl:"http://www.runfastus.com",social:{twitter:"runfastus"}}}}}},188:function(e,t,n){"use strict";n(160);var a=n(189),r=n(0),o=n.n(r),i=n(151),l=n(158),s=n.n(l),c=n(152);var u="2949667701";t.a=function(){return o.a.createElement(i.StaticQuery,{query:u,render:function(e){var t=e.site.siteMetadata,n=t.author,a=t.social;return o.a.createElement("div",{style:{display:"flex"}},o.a.createElement(s.a,{fixed:e.avatar.childImageSharp.fixed,alt:n,style:{marginRight:Object(c.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),o.a.createElement("p",null,"Blog by ",o.a.createElement("strong",null,n)," who lives."," ",o.a.createElement("br",null),o.a.createElement("a",{href:"https://twitter.com/"+a.twitter},"You should follow him on Twitter")))},data:a})}},189:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAABYlAAAWJQFJUiTwAAAC3UlEQVQ4y3VUyyu0URg/w8zIZUSEYorFZIGaIhbMxi3J3biUWTByCSVWyk6zUJYSC5eVPlkpC8XKWPkTJBs2iqnZKLn9vn5Hz/nOy3xvPe857/s8z+/8nst51OfnJ0Te3t4gz+PjI47+HGFlZQXRaBTT09OIxWK4uLjA6+urtqHP+/s7bAwlAFTweX5+xtLSEgoKCqCUSimVlZXY2dkxh398fJi9ssGurq5QWlpqHN1uN7xeLzwej95zdblcRt/e3o5EIuEAVQIWj8e10/9Y2ZKWlmZsg8EgksmkSYGSfJWUlGiD9PR0tLS0YGhoCL29vRgYGEBHR4dOAdkXFhYaYDLmGg6HnYAzMzPm5MzMTIyNjaG4uFiDUPx+P5aXlzE/P4/6+npjKwS4npycfId8f3+PnJwcc2pWVha6urp+hbmxsYHV1VWMj4+jpqbG/BfA5ubmb8Dd3V2HgoCdnZ3GIRAIYGRkBJubm7r6bW1t2nl4eFjrpUgkdXt7CzU3N2cqKnlZXFzE6Oiozs329rZ2JgjZNTY2GkayF9/T01Oo/v5+B0PmkADZ2dmoq6uD6JlTNndTU5P+Zm67u7sdxdnb24MaHBz8FXJPT4/el5eXo7W1Ve8rKiowNTWFUCikv4uKioydAB4cHEAxPJs2Adku8o9h0sHn82mGDQ0NWtfX16d70CZzdnYGdXh4mJKhfJeVlSESiWiAyclJMCL2Jm+J3T75+fl4eHiAenp6cjSrMLSvGIWVn52d1eDM58+2oY+5y+wvu7HZh3KyrHl5eZiYmEBtba0B4qFy8OXl5T/Al5cXVFVVaUVGRgZyc3N/NTaHBMNi9aX/pBgLCwtmQCiZEjc3NyYUGguzVEJ2omc0vMN8vr6+nOPr7u7OVNF2Fvk5jZhTISSgiqg2KBVbW1uorq5OyY5F4/U7Pz83Q9XBkC8BtScvja6vr7G/v4+1tTWsr6/j+PhYp8ae1DYY5S+4zyaOgrasbQAAAABJRU5ErkJggg==",width:50,height:50,src:"/static/db7bbb3f4a8bb89a22b2a5dd4b5ce0b6/66382/logo.png",srcSet:"/static/db7bbb3f4a8bb89a22b2a5dd4b5ce0b6/66382/logo.png 1x,\n/static/db7bbb3f4a8bb89a22b2a5dd4b5ce0b6/18a61/logo.png 1.5x,\n/static/db7bbb3f4a8bb89a22b2a5dd4b5ce0b6/f52d2/logo.png 2x,\n/static/db7bbb3f4a8bb89a22b2a5dd4b5ce0b6/4ffea/logo.png 3x"}}},site:{siteMetadata:{author:"Runfastus",social:{twitter:"runfastus"}}}}}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-f19b4f5b8f6ea246d33d.js.map