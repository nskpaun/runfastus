(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{143:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return p});a(32);var n=a(7),r=a.n(n),i=a(0),o=a.n(i),s=a(150),l=a(165),c=a(154),d=a(163),u=a(151),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,n=a.previous,r=a.next;return o.a.createElement(c.a,{location:this.props.location,title:t},o.a.createElement(d.a,{title:e.frontmatter.title,description:e.excerpt}),o.a.createElement("h1",null,e.frontmatter.title),o.a.createElement("p",{style:Object.assign({},Object(u.b)(-.2),{display:"block",marginBottom:Object(u.a)(1),marginTop:Object(u.a)(-1)})},e.frontmatter.date),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),o.a.createElement("hr",{style:{marginBottom:Object(u.a)(1)}}),o.a.createElement(l.a,null),o.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},o.a.createElement("li",null,n&&o.a.createElement(s.Link,{to:n.fields.slug,rel:"prev"},"← ",n.frontmatter.title)),o.a.createElement("li",null,r&&o.a.createElement(s.Link,{to:r.fields.slug,rel:"next"},r.frontmatter.title," →"))))},t}(o.a.Component);t.default=f;var p="2761936148"},150:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(149),l=a.n(s);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var c=a(152),d=a.n(c);a.d(t,"PageRenderer",function(){return d.a});var u=a(33);a.d(t,"parsePath",function(){return u.a});var f=r.a.createContext({}),p=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},151:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return c});var n=a(160),r=a.n(n),i=a(161),o=a.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var s=new r.a(o.a);var l=s.rhythm,c=s.scale},152:function(e,t,a){var n;e.exports=(n=a(153))&&n.default||n},153:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(52),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},154:function(e,t,a){"use strict";a(32);var n=a(7),r=a.n(n),i=a(0),o=a(150),s=(a(162),a(151)),l=[{name:"Blog",path:"/"},{name:"Lore",path:"/lore"},{name:"Swag",path:"/swag"}];var c=function(){return i.createElement("div",{style:{display:"flex",marginBottom:Object(s.a)(2.5)}}," ",l.map(function(e){var t=e.name,a=e.path;return i.createElement("h3",{style:Object.assign({},Object(s.b)(.5),{marginBottom:Object(s.a)(1.5),marginTop:0,marginRight:10})},i.createElement(o.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:a},t))}))},d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.location,n=t.title,r=t.children;return e="/"===a.pathname?i.createElement("h1",{style:Object.assign({},Object(s.b)(1.5),{marginBottom:Object(s.a)(1.5),marginTop:0})},i.createElement(o.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)):i.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},i.createElement(o.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)),i.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(s.a)(24),padding:Object(s.a)(1.5)+" "+Object(s.a)(.75)}},e,i.createElement(c,null),r,i.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},t}(i.Component);t.a=d},155:function(e,t,a){"use strict";a(156)("fixed",function(e){return function(){return e(this,"tt","","")}})},156:function(e,t,a){var n=a(11),r=a(24),i=a(16),o=/"/g,s=function(e,t,a,n){var r=String(i(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(n).replace(o,"&quot;")+'"'),s+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},157:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.default=void 0;var r,i=n(a(7)),o=n(a(51)),s=n(a(158)),l=n(a(159)),c=n(a(0)),d=n(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},h=[];var m=function(e,t){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){h.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),r).observe(e),h.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",i=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+n+r+"<img "+s+l+t+o+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=c.default.forwardRef(function(e,t){var a=e.style,n=e.onLoad,r=e.onError,i=(0,s.default)(e,["style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({},i,{onLoad:n,onError:r,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});y.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var n=!0,r=!1,i=t.fadeIn,s=p(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,r=!0),"undefined"==typeof window&&(n=!1),t.critical&&(n=!0,r=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:n,imgLoaded:!1,IOSupported:r,fadeIn:i,hasNoScript:l,seenBefore:s},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&m(e,function(){t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:p(t.props)}),t.setState({isVisible:!0,imgLoaded:!1})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,n=e.className,r=e.style,i=void 0===r?{}:r,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,h=e.fluid,m=e.fixed,b=e.backgroundColor,w=e.Tag,v="boolean"==typeof b?"lightgray":b,S=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,f),E=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),L={title:t,alt:this.state.isVisible?"":a,style:S,className:p};if(h){var R=h;return c.default.createElement(w,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(R.srcSet)},c.default.createElement(w,{style:{width:"100%",paddingBottom:100/R.aspectRatio+"%"}}),R.base64&&c.default.createElement(y,(0,l.default)({src:R.base64},L)),R.tracedSVG&&c.default.createElement(y,(0,l.default)({src:R.tracedSVG},L)),v&&c.default.createElement(w,{title:t,style:{backgroundColor:v,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,R.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),c.default.createElement("source",{srcSet:R.srcSet,sizes:R.sizes}),c.default.createElement(y,{alt:a,title:t,src:R.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},R))}}))}if(m){var j=m,A=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:j.width,height:j.height},i);return"inherit"===i.display&&delete A.display,c.default.createElement(w,{className:(n||"")+" gatsby-image-wrapper",style:A,ref:this.handleRef,key:"fixed-"+JSON.stringify(j.srcSet)},j.base64&&c.default.createElement(y,(0,l.default)({src:j.base64},L)),j.tracedSVG&&c.default.createElement(y,(0,l.default)({src:j.tracedSVG},L)),v&&c.default.createElement(w,{title:t,style:{backgroundColor:v,width:j.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:j.height}}),this.state.isVisible&&c.default.createElement("picture",null,j.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:j.srcSetWebp,sizes:j.sizes}),c.default.createElement("source",{srcSet:j.srcSet,sizes:j.sizes}),c.default.createElement(y,{alt:a,title:t,width:j.width,height:j.height,src:j.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t,width:j.width,height:j.height},j))}}))}return null},t}(c.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var w=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),v=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});b.propTypes={resolutions:w,sizes:v,fixed:w,fluid:v,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string};var S=b;t.default=S},163:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(164),o=a(0),s=a(167),l=a.n(s),c=a(150),d=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.render=function(){var e=this,t=this.props,a=t.description,n=t.lang,r=t.meta,s=t.keywords,d=t.title;return o.createElement(c.StaticQuery,{query:u,render:function(t){var i=a||t.site.siteMetadata.description;return o.createElement(l.a,{htmlAttributes:{lang:n},title:d,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:i},{property:"og:title",content:d},{property:"og:description",content:i},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:d},{name:"twitter:description",content:i}].concat(e.props.keywords&&e.props.keywords.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)},o.createElement("html",{lang:"en"}),o.createElement("title",null,t.site.siteMetadata.title),o.createElement("meta",{name:"google-site-verification",content:"r9TUaNJMX2Uj7QpSR809jgCQGjIGK0PNouGD_fo0u7U"}))},data:i})},a.getDefaultProps=function(){return{lang:"en",meta:[],keywords:[]}},t}(o.Component);t.a=d;var u="1025518380"},164:function(e){e.exports={data:{site:{siteMetadata:{title:"Runfastus",description:"An ancient order of runners dedicated to running fast.",author:"Runfastus"}}}}},165:function(e,t,a){"use strict";a(155);var n=a(166),r=a(0),i=a.n(r),o=a(150),s=a(157),l=a.n(s),c=a(151);var d="2949667701";t.a=function(){return i.a.createElement(o.StaticQuery,{query:d,render:function(e){var t=e.site.siteMetadata,a=t.author,n=t.social;return i.a.createElement("div",{style:{display:"flex",marginBottom:Object(c.a)(2.5)}},i.a.createElement(l.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(c.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),i.a.createElement("p",null,"Written by ",i.a.createElement("strong",null,a)," who lives."," ",i.a.createElement("br",null),i.a.createElement("a",{href:"https://twitter.com/"+n.twitter},"You should follow him on Twitter")))},data:n})}},166:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACVUlEQVQ4y61UXU8TURDtb9PE0kI/KFhaIlBtAI0J0m6/3L273d1+kpYWLBQrYCRqglGjCfogvhh90x91nLnbhtBulwd9mNy5M/eePWdm9vrmFnJws9mYItfQ4lVs5I9ybuabBhaiNRBVcHs2i5mIIo19joWGZ9yAfdPA7oQUJFbz0A0Vlq3BJmM/uZaXuWlMfRNgiw7Y460SDg901GoOmF3RUK9rOOjp2MqU5Bk+Ow7qm2AWVnB/o4D+oY6S+hSmpUnQRkND2VRlrE8fWn9UlGfHQSckB+cVNJsCFgGZlorBkYEP5yY+v7dwPDCkfKOsotUSrrKvAXLB4/fy6D3ToQkVR30D3y5sfP9q4/KLY/wBzrF0rvFM1AOQk4mVPPa6OoSuotMR+P2zip0dISX/+VWVOW5Ol9bl1A2AI4a7bSFrxZc/vjPx47Ii7RPJ3t9zatvZFViijwe8ACVLmjfuJneVm/CcZL9+Vcb5G1P63CSOM2uu99SxGRWXAZdp1rjLLI2lM3i1qkEjX1CMc6vpAvyRqyH3nEM+mFovoLevo03yreEcss8NS2+6j4wrQ+eXysIvL9CAPylA1UqSLQ80xzg3t6Bcu+PBMI9YojS8kEMsKRC+q+JWMEPMc4jEizI3TsIV0B/exoOHNZyeXaDVfYtK8yXM2jHs+gka7TMYlRcQ1oBiJ7Dqp1hJW1TzjPe/HIkXkEwZSG1U6CEwEF0q0ngIrPGe4nHyGYhtnpSMd9q1hoEoy9uWq7PnJ8zZB+ezkhXbCMyzhtMezpseYs8H9l/svwP+BfEFcYj+4FZEAAAAAElFTkSuQmCC",width:50,height:50,src:"/static/0be97033e8fb6d8bcac9cc104bf2a29f/66382/logo.png",srcSet:"/static/0be97033e8fb6d8bcac9cc104bf2a29f/66382/logo.png 1x,\n/static/0be97033e8fb6d8bcac9cc104bf2a29f/18a61/logo.png 1.5x,\n/static/0be97033e8fb6d8bcac9cc104bf2a29f/f52d2/logo.png 2x,\n/static/0be97033e8fb6d8bcac9cc104bf2a29f/4ffea/logo.png 3x"}}},site:{siteMetadata:{author:"Runfastus",social:{twitter:"runfastus"}}}}}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-600c188e216c63bca7f6.js.map