(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{143:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return p});a(32);var n=a(7),r=a.n(n),i=a(0),o=a.n(i),s=a(150),l=a(166),d=a(155),c=a(164),u=a(151),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,n=a.previous,r=a.next;return o.a.createElement(d.a,{location:this.props.location,title:t},o.a.createElement(c.a,{title:e.frontmatter.title,description:e.excerpt}),o.a.createElement("h1",null,e.frontmatter.title),o.a.createElement("p",{style:Object.assign({},Object(u.b)(-.2),{display:"block",marginBottom:Object(u.a)(1),marginTop:Object(u.a)(-1)})},e.frontmatter.date),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),o.a.createElement("hr",{style:{marginBottom:Object(u.a)(1)}}),o.a.createElement(l.a,null),o.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},o.a.createElement("li",null,n&&o.a.createElement(s.Link,{to:n.fields.slug,rel:"prev"},"← ",n.frontmatter.title)),o.a.createElement("li",null,r&&o.a.createElement(s.Link,{to:r.fields.slug,rel:"next"},r.frontmatter.title," →"))))},t}(o.a.Component);t.default=f;var p="2761936148"},150:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(149),l=a.n(s);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var d=a(152),c=a.n(d);a.d(t,"PageRenderer",function(){return c.a});var u=a(33);a.d(t,"parsePath",function(){return u.a});var f=r.a.createContext({}),p=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},151:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return d});var n=a(161),r=a.n(n),i=a(162),o=a.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var s=new r.a(o.a);var l=s.rhythm,d=s.scale},152:function(e,t,a){var n;e.exports=(n=a(154))&&n.default||n},153:function(e,t,a){"use strict";a(32),a(163);var n=a(7),r=a.n(n),i=a(0),o=a(150),s=a(151),l=[{name:"Blog",path:"/"},{name:"Lore",path:"/lore"},{name:"Swag",path:"/swag"}],d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){this.props.location.pathname;return i.createElement("div",{style:{display:"flex"}}," ",l.map(function(e){var t=e.name,a=e.path;return i.createElement("h3",{style:Object.assign({},Object(s.b)(.5),{marginBottom:Object(s.a)(1.5),marginTop:0,marginRight:10})},i.createElement(o.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:a},t))}))},t}(i.Component);t.a=d},154:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(52),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=d},155:function(e,t,a){"use strict";a(32);var n=a(7),r=a.n(n),i=a(0),o=a(150),s=a(153),l=a(151),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.location,n=t.title,r=t.children;return e="/"===a.pathname?i.createElement("h1",{style:Object.assign({},Object(l.b)(1.5),{marginBottom:Object(l.a)(1.5),marginTop:0})},i.createElement(o.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)):i.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},i.createElement(o.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)),i.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(24),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},e,this.props.hideTabs?null:i.createElement(s.a,{location:a}),r,i.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},t}(i.Component);t.a=d},156:function(e,t,a){"use strict";a(157)("fixed",function(e){return function(){return e(this,"tt","","")}})},157:function(e,t,a){var n=a(11),r=a(24),i=a(16),o=/"/g,s=function(e,t,a,n){var r=String(i(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(n).replace(o,"&quot;")+'"'),s+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},158:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.default=void 0;var r,i=n(a(7)),o=n(a(51)),s=n(a(159)),l=n(a(160)),d=n(a(0)),c=n(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},h=[];var m=function(e,t){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){h.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),r).observe(e),h.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",i=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+n+r+"<img "+s+l+t+o+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=d.default.forwardRef(function(e,t){var a=e.style,n=e.onLoad,r=e.onError,i=(0,s.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({},i,{onLoad:n,onError:r,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});b.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var n=!0,r=!1,i=t.fadeIn,s=p(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,r=!0),"undefined"==typeof window&&(n=!1),t.critical&&(n=!0,r=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:n,imgLoaded:!1,IOSupported:r,fadeIn:i,hasNoScript:l,seenBefore:s},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&m(e,function(){t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:p(t.props)}),t.setState({isVisible:!0,imgLoaded:!1})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,n=e.className,r=e.style,i=void 0===r?{}:r,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,h=e.fluid,m=e.fixed,y=e.backgroundColor,v=e.Tag,w="boolean"==typeof y?"lightgray":y,S=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,f),E=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),L={title:t,alt:this.state.isVisible?"":a,style:S,className:p};if(h){var x=h;return d.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(x.srcSet)},d.default.createElement(v,{style:{width:"100%",paddingBottom:100/x.aspectRatio+"%"}}),x.base64&&d.default.createElement(b,(0,l.default)({src:x.base64},L)),x.tracedSVG&&d.default.createElement(b,(0,l.default)({src:x.tracedSVG},L)),w&&d.default.createElement(v,{title:t,style:{backgroundColor:w,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,x.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:x.srcSetWebp,sizes:x.sizes}),d.default.createElement("source",{srcSet:x.srcSet,sizes:x.sizes}),d.default.createElement(b,{alt:a,title:t,src:x.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},x))}}))}if(m){var R=m,j=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:R.width,height:R.height},i);return"inherit"===i.display&&delete j.display,d.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:j,ref:this.handleRef,key:"fixed-"+JSON.stringify(R.srcSet)},R.base64&&d.default.createElement(b,(0,l.default)({src:R.base64},L)),R.tracedSVG&&d.default.createElement(b,(0,l.default)({src:R.tracedSVG},L)),w&&d.default.createElement(v,{title:t,style:{backgroundColor:w,width:R.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:R.height}}),this.state.isVisible&&d.default.createElement("picture",null,R.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),d.default.createElement("source",{srcSet:R.srcSet,sizes:R.sizes}),d.default.createElement(b,{alt:a,title:t,width:R.width,height:R.height,src:R.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t,width:R.width,height:R.height},R))}}))}return null},t}(d.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var v=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),w=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});y.propTypes={resolutions:v,sizes:w,fixed:v,fluid:w,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string};var S=y;t.default=S},164:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(165),o=a(0),s=a(168),l=a.n(s),d=a(150),c=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.render=function(){var e=this,t=this.props,a=t.description,n=t.lang,r=t.meta,s=t.keywords,c=t.title;return o.createElement(d.StaticQuery,{query:u,render:function(t){var i=a||t.site.siteMetadata.description;return o.createElement(l.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:i},{property:"og:title",content:c},{property:"og:description",content:i},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:i}].concat(e.props.keywords&&e.props.keywords.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)},o.createElement("html",{lang:"en"}),o.createElement("title",null,t.site.siteMetadata.title),o.createElement("meta",{name:"google-site-verification",content:"r9TUaNJMX2Uj7QpSR809jgCQGjIGK0PNouGD_fo0u7U"}))},data:i})},a.getDefaultProps=function(){return{lang:"en",meta:[],keywords:[]}},t}(o.Component);t.a=c;var u="1025518380"},165:function(e){e.exports={data:{site:{siteMetadata:{title:"Runfastus",description:"An ancient order of runners dedicated to running fast.",author:"Runfastus"}}}}},166:function(e,t,a){"use strict";a(156);var n=a(167),r=a(0),i=a.n(r),o=a(150),s=a(158),l=a.n(s),d=a(151);var c="2949667701";t.a=function(){return i.a.createElement(o.StaticQuery,{query:c,render:function(e){var t=e.site.siteMetadata,a=t.author,n=t.social;return i.a.createElement("div",{style:{display:"flex"}},i.a.createElement(l.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(d.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),i.a.createElement("p",null,"Written by ",i.a.createElement("strong",null,a)," who lives."," ",i.a.createElement("br",null),i.a.createElement("a",{href:"https://twitter.com/"+n.twitter},"You should follow him on Twitter")))},data:n})}},167:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAABYlAAAWJQFJUiTwAAAC3UlEQVQ4y3VUyyu0URg/w8zIZUSEYorFZIGaIhbMxi3J3biUWTByCSVWyk6zUJYSC5eVPlkpC8XKWPkTJBs2iqnZKLn9vn5Hz/nOy3xvPe857/s8z+/8nst51OfnJ0Te3t4gz+PjI47+HGFlZQXRaBTT09OIxWK4uLjA6+urtqHP+/s7bAwlAFTweX5+xtLSEgoKCqCUSimVlZXY2dkxh398fJi9ssGurq5QWlpqHN1uN7xeLzwej95zdblcRt/e3o5EIuEAVQIWj8e10/9Y2ZKWlmZsg8EgksmkSYGSfJWUlGiD9PR0tLS0YGhoCL29vRgYGEBHR4dOAdkXFhYaYDLmGg6HnYAzMzPm5MzMTIyNjaG4uFiDUPx+P5aXlzE/P4/6+npjKwS4npycfId8f3+PnJwcc2pWVha6urp+hbmxsYHV1VWMj4+jpqbG/BfA5ubmb8Dd3V2HgoCdnZ3GIRAIYGRkBJubm7r6bW1t2nl4eFjrpUgkdXt7CzU3N2cqKnlZXFzE6Oiozs329rZ2JgjZNTY2GkayF9/T01Oo/v5+B0PmkADZ2dmoq6uD6JlTNndTU5P+Zm67u7sdxdnb24MaHBz8FXJPT4/el5eXo7W1Ve8rKiowNTWFUCikv4uKioydAB4cHEAxPJs2Adku8o9h0sHn82mGDQ0NWtfX16d70CZzdnYGdXh4mJKhfJeVlSESiWiAyclJMCL2Jm+J3T75+fl4eHiAenp6cjSrMLSvGIWVn52d1eDM58+2oY+5y+wvu7HZh3KyrHl5eZiYmEBtba0B4qFy8OXl5T/Al5cXVFVVaUVGRgZyc3N/NTaHBMNi9aX/pBgLCwtmQCiZEjc3NyYUGguzVEJ2omc0vMN8vr6+nOPr7u7OVNF2Fvk5jZhTISSgiqg2KBVbW1uorq5OyY5F4/U7Pz83Q9XBkC8BtScvja6vr7G/v4+1tTWsr6/j+PhYp8ae1DYY5S+4zyaOgrasbQAAAABJRU5ErkJggg==",width:50,height:50,src:"/static/db7bbb3f4a8bb89a22b2a5dd4b5ce0b6/66382/logo.png",srcSet:"/static/db7bbb3f4a8bb89a22b2a5dd4b5ce0b6/66382/logo.png 1x,\n/static/db7bbb3f4a8bb89a22b2a5dd4b5ce0b6/18a61/logo.png 1.5x,\n/static/db7bbb3f4a8bb89a22b2a5dd4b5ce0b6/f52d2/logo.png 2x,\n/static/db7bbb3f4a8bb89a22b2a5dd4b5ce0b6/4ffea/logo.png 3x"}}},site:{siteMetadata:{author:"Runfastus",social:{twitter:"runfastus"}}}}}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-687d349a252759eec4d0.js.map