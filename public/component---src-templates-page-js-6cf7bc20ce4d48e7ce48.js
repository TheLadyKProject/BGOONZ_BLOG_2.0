(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"4M6O":function(t,e,n){"use strict";var o=n("TqRt");e.__esModule=!0,e.insertScript=function(t,e,n){var o=window.document.createElement("script");return o.async=!0,o.src=t,o.id=e,n.appendChild(o),o},e.removeScript=function(t,e){var n=window.document.getElementById(t);n&&e.removeChild(n)},e.debounce=function(t,e,n){var o;return function(){for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var s=this,u=function(){o=null,n||t.apply(s,i)},d=n&&!o;window.clearTimeout(o),o=setTimeout(u,e),d&&t.apply(s,i)}},e.isReactElement=a,e.shallowComparison=function t(e,n){var o,i=new Set(Object.keys(e).concat(Object.keys(n)));return 0!==(o=[]).concat.apply(o,(0,r.default)(i)).filter((function(o){if("object"==typeof e[o]){if(t(e[o],n[o]))return!0}else if(e[o]!==n[o]&&!a(e[o]))return!0;return!1})).length};var r=o(n("RIqP")),i=o(n("q1tI"));function a(t){return!!i.default.isValidElement(t)||!!Array.isArray(t)&&t.some((function(t){return i.default.isValidElement(t)}))}},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},EbDI:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},t.exports.__esModule=!0,t.exports.default=t.exports},Ijbi:function(t,e,n){var o=n("WkPL");t.exports=function(t){if(Array.isArray(t))return o(t)},t.exports.__esModule=!0,t.exports.default=t.exports},ORnI:function(t,e,n){"use strict";var o=n("TqRt");e.__esModule=!0,e.default=void 0;var r=o(n("VUT9"));e.Disqus=r.default;var i=o(n("qASQ"));e.CommentCount=i.default;var a=o(n("vAJ3"));e.CommentEmbed=a.default;var s=r.default;e.default=s},RIqP:function(t,e,n){var o=n("Ijbi"),r=n("EbDI"),i=n("ZhPi"),a=n("Bnag");t.exports=function(t){return o(t)||r(t)||i(t)||a()},t.exports.__esModule=!0,t.exports.default=t.exports},VUT9:function(t,e,n){"use strict";var o=n("TqRt");e.__esModule=!0,e.default=void 0;var r=o(n("pVnL")),i=o(n("8OQS")),a=o(n("VbXa")),s=o(n("q1tI")),u=o(n("17x9")),d=n("4M6O"),l=function(t){function e(e){var n;return(n=t.call(this,e)||this).shortname="webdevhub-1",n.embedUrl="https://"+n.shortname+".disqus.com/embed.js",n}(0,a.default)(e,t);var n=e.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(t){return this.props!==t&&(0,d.shallowComparison)(this.props,t)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.getDisqusConfig=function(t){return function(){this.page.identifier=t.identifier,this.page.url=t.url,this.page.title=t.title,this.page.remote_auth_s3=t.remoteAuthS3,this.page.api_key=t.apiKey,this.language=t.language}},n.loadInstance=function(){"undefined"!=typeof window&&window.document&&(window.disqus_config=this.getDisqusConfig(this.props.config),window.document.getElementById("dsq-embed-scr")?this.reloadInstance():(0,d.insertScript)(this.embedUrl,"dsq-embed-scr",window.document.body))},n.reloadInstance=function(){window&&window.DISQUS&&window.DISQUS.reset({reload:!0})},n.cleanInstance=function(){(0,d.removeScript)("dsq-embed-scr",window.document.body);try{delete window.DISQUS}catch(o){window.DISQUS=void 0}var t=window.document.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild);var e=window.document.querySelector('[id^="dsq-app"]');if(e){var n=window.document.getElementById(e.id);n.parentNode.removeChild(n)}},n.render=function(){var t=this.props,e=(t.config,(0,i.default)(t,["config"]));return s.default.createElement("div",(0,r.default)({id:"disqus_thread"},e))},e}(s.default.Component);e.default=l,l.propTypes={config:u.default.shape({identifier:u.default.string,title:u.default.string,url:u.default.string,language:u.default.string,remoteAuthS3:u.default.string,apiKey:u.default.string})}},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o},t.exports.__esModule=!0,t.exports.default=t.exports},ZhPi:function(t,e,n){var o=n("WkPL");t.exports=function(t,e){if(t){if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}},t.exports.__esModule=!0,t.exports.default=t.exports},qASQ:function(t,e,n){"use strict";var o=n("TqRt");e.__esModule=!0,e.default=void 0;var r=o(n("pVnL")),i=o(n("8OQS")),a=o(n("VbXa")),s=o(n("q1tI")),u=o(n("17x9")),d=n("4M6O"),l=(0,d.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),c=function(t){function e(e){var n;return(n=t.call(this,e)||this).shortname="webdevhub-1",n}(0,a.default)(e,t);var n=e.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(t){return this.props!==t&&(0,d.shallowComparison)(this.props,t)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.loadInstance=function(){window.document.getElementById("dsq-count-scr")?l():(0,d.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},n.cleanInstance=function(){(0,d.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},n.render=function(){var t=this.props,e=t.config,n=t.className,o=t.placeholder,a=(0,i.default)(t,["config","className","placeholder"]),u="disqus-comment-count"+(n?" "+n:"");return s.default.createElement("span",(0,r.default)({className:u,"data-disqus-identifier":e.identifier,"data-disqus-url":e.url},a),o)},e}(s.default.Component);e.default=c,c.defaultProps={placeholder:"..."},c.propTypes={config:u.default.shape({identifier:u.default.string,title:u.default.string,url:u.default.string}),placeholder:u.default.string,className:u.default.string}},sweJ:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return c}));var o=n("dI71"),r=n("mwIZ"),i=n.n(r),a=n("ORnI"),s=n("q1tI"),u=n.n(s),d=n("Kvkj"),l=n("7Qib"),c=function(t){function e(){return t.apply(this,arguments)||this}return Object(o.a)(e,t),e.prototype.render=function(){return u.a.createElement(d.a,this.props,u.a.createElement("article",{className:"post post-full"},u.a.createElement("header",{className:"post-header has-gradient outer"},i()(this.props,"pageContext.frontmatter.image",null)&&u.a.createElement("div",{className:"bg-img",style:Object(l.i)("background-image: url('"+Object(l.j)(i()(this.props,"pageContext.frontmatter.image",null))+"')")}),u.a.createElement("div",{className:"inner-sm"},u.a.createElement("h1",{className:"post-title"},i()(this.props,"pageContext.frontmatter.title",null)),i()(this.props,"pageContext.frontmatter.subtitle",null)&&u.a.createElement("div",{className:"post-subtitle"},Object(l.f)(i()(this.props,"pageContext.frontmatter.subtitle",null))))),u.a.createElement("div",{className:"inner-md outer"},u.a.createElement("div",{className:"post-content"},Object(l.f)(i()(this.props,"pageContext.html",null)))),u.a.createElement(a.Disqus,null)))},e}(u.a.Component)},vAJ3:function(t,e,n){"use strict";var o=n("TqRt");e.__esModule=!0,e.default=void 0;var r=o(n("pVnL")),i=o(n("8OQS")),a=o(n("VbXa")),s=o(n("q1tI")),u=o(n("17x9")),d=function(t){function e(){return t.apply(this,arguments)||this}(0,a.default)(e,t);var n=e.prototype;return n.getSrc=function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")},n.render=function(){var t=this.props,e=(t.commentId,t.showMedia,t.showParentComment,(0,i.default)(t,["commentId","showMedia","showParentComment"]));return s.default.createElement("iframe",(0,r.default)({src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0",title:"embedded-comment"},e))},e}(s.default.Component);e.default=d,d.defaultProps={width:420,height:320,showMedia:!0,showParentComment:!0},d.propTypes={commentId:u.default.oneOfType([u.default.number,u.default.string]).isRequired,width:u.default.number,height:u.default.number,showMedia:u.default.bool,showParentComment:u.default.bool}}}]);
//# sourceMappingURL=component---src-templates-page-js-6cf7bc20ce4d48e7ce48.js.map