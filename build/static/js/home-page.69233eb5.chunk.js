(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[0],{51:function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return o}))},52:function(t,e,n){"use strict";function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}n.d(e,"a",(function(){return r}))},53:function(t,e,n){"use strict";function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function i(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=o(t);if(e){var i=o(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return c(this,n)}}n.d(e,"a",(function(){return i}))},54:function(t,e,n){"use strict";function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}n.d(e,"a",(function(){return r}))},55:function(t,e,n){"use strict";var o="https://api.themoviedb.org",r="1cb71a91c76c2b28054ba391acc5b661";e.a={fetchShowMoviesDetails:function(t){return fetch("".concat(o,"/3/movie/").concat(t,"?api_key=").concat(r,"&language=en-US")).then((function(t){return t.json()}))},fetchMovieWithQuery:function(t){return fetch("".concat(o,"/3/search/movie?api_key=").concat(r,"&query=").concat(t,"&language=en-US&page=1&include_adult=false")).then((function(t){return t.json()}))},fetchtTrendingMovie:function(){return fetch("".concat(o,"/3/trending/movie/day?api_key=").concat(r)).then((function(t){return t.json()}))},fetchtCastMovie:function(t){return fetch("".concat(o,"/3/movie/").concat(t,"/credits?api_key=").concat(r,"&language=en-US")).then((function(t){return t.json()}))},fetchtReviewsMovie:function(t){return fetch("".concat(o,"/3/movie/").concat(t,"/reviews?api_key=").concat(r,"&language=en-US&page=1")).then((function(t){return t.json()}))}}},77:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(51),c=n(52),i=n(54),u=n(53),a=n(55),f=n(8),s=n(9),l=n(15),p=n.n(l),h=n(1),y=function(t){Object(i.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(r.a)(this,n);for(var o=arguments.length,c=new Array(o),i=0;i<o;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={movies:[],status:"resolved"},t}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.setState({status:"pending"}),a.a.fetchtTrendingMovie().then((function(e){return t.setState({movies:e.results,status:"resolved"})}))}},{key:"render",value:function(){var t=this,e=this.state,n=e.status,o=e.movies;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("ul",{children:o.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(f.b,{to:{pathname:"".concat(s.a.movies,"/").concat(e.id),state:{from:t.props.location}},children:e.title})},e.id)}))}),"pending"===n&&Object(h.jsx)(p.a,{type:"Circles",color:"#00BFFF",height:100,width:100})]})}}]),n}(o.Component);e.default=function(){return Object(h.jsx)("div",{children:Object(h.jsx)(y,{})})}}}]);
//# sourceMappingURL=home-page.69233eb5.chunk.js.map