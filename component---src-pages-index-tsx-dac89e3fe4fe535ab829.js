(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{150:function(e,t,n){"use strict";n.r(t);n(34);var r=n(7),a=n.n(r),i=n(0),o=n(154),l=n(187),c=n(159),s=n(177),u=n(204);u.b("UA-132813912-1");var d=function(e){function t(){return e.apply(this,arguments)||this}a()(t,e);var n=t.prototype;return n.render=function(){this.props.posts;return i.createElement("div",{style:{display:"flex",flexDirection:"column",marginBottom:24}},i.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",backgroundColor:"#F5F5F5",borderRadius:5,padding:12}},"Welcome to The Order of Runfastus. We are an ancient order of amateur runners who hold speed as the highest virtue. Within the links of this blog you will find the truth and transcend the modern prison of running culture."))},n.getExploreButton=function(e){return i.createElement("div",{style:{display:"flex",backgroundColor:"#CD5C5C",justifyContent:"center",color:"#FFFFFF",borderRadius:10,padding:14,marginTop:12},onClick:function(){var t=e[Math.floor(Math.random()*e.length)];u.a({category:"Navigation",action:"ExploreButton",label:"Explore the Order"}),Object(o.navigate)(t.node.fields.slug)}},"Explore the Order")},t}(i.Component),f=n(160),p=n.n(f),m=n(155),g=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e,t,n=this.props.post.thumbnail,r=i.createElement("div",null,i.createElement(p.a,{fixed:n.node.childImageSharp.fluid,style:{width:150,height:150}})),a=this.props.post.node;return i.createElement("div",{key:a.fields.slug,style:{display:"flex",flexDirection:"column",alignItems:"center",padding:12,backgroundColor:"#F5F5F5",margin:12,height:Object(m.a)(15),overflow:"hidden",textOverflow:"ellipsis"},onClick:function(){u.a({category:"Navigation",action:"FEATURED_CARD"}),Object(o.navigate)(a.fields.slug)}},r,i.createElement("div",{style:{backgroundColor:"#CD5C5C",justifyContent:"center",color:"#FFFFFF",borderRadius:10,paddingLeft:6,paddingRight:6,margin:6}},i.createElement("small",null,(e=a,t=e.frontmatter.tags,t?t.indexOf("newest")>-1?"New Knowlege":t.indexOf("lore")>-1?"Ancient Text":e.frontmatter.guest_author?"Guest Content":"From the archive":"From the archive").toUpperCase())),i.createElement("div",{style:{flexDirection:"column"}},i.createElement("h4",{style:{margin:Object(m.a)(.25)}},i.createElement(o.Link,{style:{boxShadow:"none"},to:a.fields.slug},a.frontmatter.title)),i.createElement("p",null," ",a.excerpt," ")))},t}(i.Component),h=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.posts.filter(this.props.postSelector).slice(0,3),t=e.map(function(t){return t===e[2]?i.createElement("div",{className:"MobileHiddenElement"},i.createElement(g,{post:t})):i.createElement("div",null,i.createElement(g,{post:t}))});return i.createElement("div",{style:{display:"flex",flexDirection:"column",borderRadius:10,borderWidth:1,borderColor:"#FFFFFF"}},i.createElement("h3",{style:{margin:Object(m.a)(1/6)}},"Featured Knowledge"),i.createElement("div",{style:{display:"flex",flexDirection:"row",flexGrow:1}},t))},t}(i.Component),b=n(297),y=n.n(b),v=(n(223),n(299)),w=n.n(v),E=n(300),x=n.n(E),F=(n(306),!1),C=!1,k=function(){return F||console.warn("Pixel not initialized before using call ReactPixel.init with required params"),F},S=function(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];(e=console).info.apply(e,["[react-facebook-pixel]"].concat(n))},A={autoConfig:!0,debug:!1},j={init:function(e,t,n){var r,a,i,o,l,c,s;void 0===t&&(t={}),void 0===n&&(n=A),r=window,a=document,i="script",o="https://connect.facebook.net/en_US/fbevents.js",r.fbq||(l=r.fbq=function(){l.callMethod?l.callMethod.apply(l,arguments):l.queue.push(arguments)},r._fbq||(r._fbq=l),l.push=l,l.loaded=!0,l.version="2.0",l.queue=[],(c=a.createElement(i)).async=!0,c.src=o,(s=a.getElementsByTagName(i)[0]).parentNode.insertBefore(c,s)),e?(!1===n.autoConfig&&fbq("set","autoConfig",!1,e),fbq("init",e,t),F=!0,C=n.debug):console.warn("Please insert pixel id for initializing")},pageView:function(){k()&&(fbq("track","PageView"),C&&S("called fbq('track', 'PageView');"))},track:function(e,t){k()&&(fbq("track",e,t),C&&(S("called fbq('track', '"+e+"');"),t&&S("with data",t)))},trackCustom:function(e,t){k()&&(fbq("trackCustom",e,t),C&&(S("called fbq('trackCustom', '"+e+"');"),t&&S("with data",t)))},fbq:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){if(k()){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];fbq.apply(void 0,t),C&&(S("called fbq('"+t.slice(0,2).join("', '")+"')"),t[2]&&S("with data",t[2]))}})};u.b("UA-132813912-1");var R={},O={autoConfig:!0,debug:!1},q="Sign up to stay up to date with the latest Runfastus content",T="Subscribe";var B=function(){var e,t=i.useState(""),n=t[0],r=t[1],a=i.useState(!1),o=a[0],l=a[1];return e=o?i.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",backgroundColor:"#A2ED90",color:"#FFFFFF",borderRadius:5,padding:12}},"You are now subscribed!"):null===o?null:i.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",backgroundColor:"#000000",color:"#FFFFFF",borderRadius:5,padding:12}},"Oops something went wrong :("),i.createElement("div",{style:{display:"flex",flexDirection:"column",marginBottom:24}},i.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",backgroundColor:"#F5F5F5",borderRadius:5,padding:12}},q),i.createElement("div",{style:{display:"flex",flexDirection:"row"}},i.createElement("textarea",{style:{display:"flex",backgroundColor:"#FFFFFF",justifyContent:"center",color:"#000000",borderWidth:2,borderColor:"#d6d7da",flexGrow:1,borderRadius:10,padding:12,marginTop:12,marginRight:12,height:60},placeholder:"Your email address",value:n,onChange:function(e){r(e.target.value)}},"Email"),i.createElement("div",{style:{display:"flex",backgroundColor:"#CD5C5C",justifyContent:"center",color:"#FFFFFF",borderRadius:10,padding:14,marginTop:12,height:60},onClick:w()(y.a.mark(function e(){var t;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return u.a({category:"Subscription",action:"SubscribeButtonPressed"}),j.init("1233950566667280",R,O),e.prev=2,e.next=5,x()(n);case 5:"success"===(t=e.sent).result?(u.a({category:"Subscription",action:"SubscribeSucceeded"}),j.track("Subscribe"),l(!0)):l(!1),console.log(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),l(!1);case 13:case"end":return e.stop()}},e,this,[[2,10]])}))},T)),e)};n.d(t,"pageQuery",function(){return U});var D=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,n=e.allMarkdownRemark.edges,r=e.allFile.edges,a=n.map(function(e){var t=e.node,n=t.fields.slug.replace("/","");return{node:t,thumbnail:r.filter(function(e){return e.node.absolutePath.indexOf(n)>-1})[0]}});return i.createElement(c.a,{location:this.props.location,title:t.toUpperCase(),banner:e.banner,hideTabs:!0},i.createElement(s.a,{title:"Runfastus",keywords:["blog","gatsby","javascript","react","runfastus"]}),i.createElement(d,{posts:n}),i.createElement(h,{posts:a,postSelector:function(e){var t=e.node.frontmatter.tags;return!!t&&t.indexOf("featured")>-1}}),i.createElement(B,null),i.createElement("h3",{style:{margin:Object(m.a)(1/6)}},"All Knowledge"),a.map(function(e){var t=e.node,n=e.thumbnail,r=t.frontmatter.title||t.fields.slug,a=n?i.createElement("div",{className:"MobileHiddenElement"},i.createElement(p.a,{fixed:n.node.childImageSharp.fluid,style:{width:150,height:150,marginRight:12}})):null,l=n?i.createElement("div",{className:"MobileShownElement"},i.createElement(p.a,{fixed:n.node.childImageSharp.fluid,style:{flexGrow:1,minHeight:300,minWidth:100,marginBottom:Object(m.a)(-1)}})):null;return i.createElement("div",{key:t.fields.slug,style:{display:"flex",flexDirection:"row",alignItems:"center",marginBottom:Object(m.a)(2)}},a,i.createElement("div",{style:{flexDirection:"column"}},l,i.createElement("h3",{style:{marginBottom:Object(m.a)(.25)}},i.createElement(o.Link,{style:{boxShadow:"none"},to:t.fields.slug},r)),i.createElement("small",null,t.frontmatter.date),i.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}})))}),i.createElement(l.a,null))},t}(i.Component),U=(t.default=D,"422124162")},154:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return p});var r=n(0),a=n.n(r),i=n(4),o=n.n(i),l=n(153),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(156),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var d=n(33);n.d(t,"parsePath",function(){return d.a});var f=a.a.createContext({}),p=function(e){return a.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},155:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return s});var r=n(167),a=n.n(r),i=n(168),o=n.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var l=new a.a(o.a);var c=l.rhythm,s=l.scale},156:function(e,t,n){var r;e.exports=(r=n(157))&&r.default||r},157:function(e,t,n){"use strict";n.r(t);n(32);var r=n(0),a=n.n(r),i=n(4),o=n.n(i),l=n(51),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},159:function(e,t,n){"use strict";n(32),n(161);var r=n(7),a=n.n(r),i=n(0),o=n(154),l=n(160),c=n.n(l),s=(n(169),n(155)),u=[{name:"Blog",path:"/"},{name:"Lore",path:"/lore"},{name:"Swag",path:"/swag"}],d=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){this.props.location.pathname;return i.createElement("div",{style:{display:"flex"}}," ",u.map(function(e){var t=e.name,n=e.path;return i.createElement("h3",{style:Object.assign({},Object(s.b)(.5),{marginBottom:Object(s.a)(1.5),marginTop:0,marginRight:10})},i.createElement(o.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:n},t))}))},t}(i.Component),f=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e,t=this.props,n=t.location,r=t.title,a=t.children;return e=i.createElement("div",{style:{display:"flex",alignItems:"flex-end"}},i.createElement(c.a,{fixed:this.props.banner.childImageSharp.fixed,style:{marginBottom:0}}),i.createElement("h1",{style:Object.assign({},Object(s.b)(1.4),{marginBottom:Object(s.a)(1.5),marginLeft:Object(s.a)(1.5),marginTop:0,position:"absolute"})},i.createElement(o.Link,{style:{boxShadow:"none",textDecoration:"none",color:"white"},to:"/"},r))),i.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(s.a)(35),padding:Object(s.a)(1.5)+" "+Object(s.a)(.75)}},e,this.props.hideTabs?null:i.createElement(d,{location:n}),a,i.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},t}(i.Component);t.a=f},177:function(e,t,n){"use strict";var r=n(7),a=n.n(r),i=n(178),o=n(0),l=n(203),c=n.n(l),s=n(154),u=function(e){function t(){return e.apply(this,arguments)||this}a()(t,e);var n=t.prototype;return n.render=function(){var e=this,t=this.props,n=t.description,r=t.lang,a=t.keywords,l=t.title;return o.createElement(s.StaticQuery,{query:d,render:function(t){var i=n||t.site.siteMetadata.description;return o.createElement(c.a,{htmlAttributes:{lang:r},title:l,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:i},{property:"og:title",content:l},{property:"og:description",content:i},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:i}].concat(e.props.keywords&&e.props.keywords.length>0?{name:"keywords",content:(a||[]).join(", ")}:[])},o.createElement("html",{lang:"en"}),o.createElement("title",null,t.site.siteMetadata.title),o.createElement("meta",{name:"google-site-verification",content:"r9TUaNJMX2Uj7QpSR809jgCQGjIGK0PNouGD_fo0u7U"}))},data:i})},n.getDefaultProps=function(){return{lang:"en",meta:[],keywords:[]}},t}(o.Component);t.a=u;var d="444467372"},178:function(e){e.exports={data:{site:{siteMetadata:{title:"Runfastus",author:"Runfastus",siteUrl:"http://www.runfastus.com",social:{twitter:"runfastus"}}}}}},187:function(e,t,n){"use strict";n(161);var r=n(188),a=n(0),i=n(154),o=n(160),l=n.n(o),c=n(155);var s="2949667701";t.a=function(){return a.createElement(i.StaticQuery,{query:s,render:function(e){var t=e.site.siteMetadata,n=t.author,r=t.social;return a.createElement("div",{style:{display:"flex"}},a.createElement(l.a,{fixed:e.avatar.childImageSharp.fixed,alt:n,style:{marginRight:Object(c.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),a.createElement("p",null,"Blog by ",a.createElement("strong",null,n)," who lives."," ",a.createElement("br",null),a.createElement("a",{href:"https://twitter.com/"+r.twitter},"You should follow him on Twitter")))},data:r})}},188:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAABYlAAAWJQFJUiTwAAAC3UlEQVQ4y3VUyyu0URg/w8zIZUSEYorFZIGaIhbMxi3J3biUWTByCSVWyk6zUJYSC5eVPlkpC8XKWPkTJBs2iqnZKLn9vn5Hz/nOy3xvPe857/s8z+/8nst51OfnJ0Te3t4gz+PjI47+HGFlZQXRaBTT09OIxWK4uLjA6+urtqHP+/s7bAwlAFTweX5+xtLSEgoKCqCUSimVlZXY2dkxh398fJi9ssGurq5QWlpqHN1uN7xeLzwej95zdblcRt/e3o5EIuEAVQIWj8e10/9Y2ZKWlmZsg8EgksmkSYGSfJWUlGiD9PR0tLS0YGhoCL29vRgYGEBHR4dOAdkXFhYaYDLmGg6HnYAzMzPm5MzMTIyNjaG4uFiDUPx+P5aXlzE/P4/6+npjKwS4npycfId8f3+PnJwcc2pWVha6urp+hbmxsYHV1VWMj4+jpqbG/BfA5ubmb8Dd3V2HgoCdnZ3GIRAIYGRkBJubm7r6bW1t2nl4eFjrpUgkdXt7CzU3N2cqKnlZXFzE6Oiozs329rZ2JgjZNTY2GkayF9/T01Oo/v5+B0PmkADZ2dmoq6uD6JlTNndTU5P+Zm67u7sdxdnb24MaHBz8FXJPT4/el5eXo7W1Ve8rKiowNTWFUCikv4uKioydAB4cHEAxPJs2Adku8o9h0sHn82mGDQ0NWtfX16d70CZzdnYGdXh4mJKhfJeVlSESiWiAyclJMCL2Jm+J3T75+fl4eHiAenp6cjSrMLSvGIWVn52d1eDM58+2oY+5y+wvu7HZh3KyrHl5eZiYmEBtba0B4qFy8OXl5T/Al5cXVFVVaUVGRgZyc3N/NTaHBMNi9aX/pBgLCwtmQCiZEjc3NyYUGguzVEJ2omc0vMN8vr6+nOPr7u7OVNF2Fvk5jZhTISSgiqg2KBVbW1uorq5OyY5F4/U7Pz83Q9XBkC8BtScvja6vr7G/v4+1tTWsr6/j+PhYp8ae1DYY5S+4zyaOgrasbQAAAABJRU5ErkJggg==",width:50,height:50,src:"/static/db7bbb3f4a8bb89a22b2a5dd4b5ce0b6/66382/logo.png",srcSet:"/static/db7bbb3f4a8bb89a22b2a5dd4b5ce0b6/66382/logo.png 1x,\n/static/db7bbb3f4a8bb89a22b2a5dd4b5ce0b6/18a61/logo.png 1.5x,\n/static/db7bbb3f4a8bb89a22b2a5dd4b5ce0b6/f52d2/logo.png 2x,\n/static/db7bbb3f4a8bb89a22b2a5dd4b5ce0b6/4ffea/logo.png 3x"}}},site:{siteMetadata:{author:"Runfastus",social:{twitter:"runfastus"}}}}}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-dac89e3fe4fe535ab829.js.map