(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[2],{51:function(t,e,n){"use strict";function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return c}))},52:function(t,e,n){"use strict";function c(t,e){for(var n=0;n<e.length;n++){var c=e[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(t,c.key,c)}}function r(t,e,n){return e&&c(t.prototype,e),n&&c(t,n),t}n.d(e,"a",(function(){return r}))},53:function(t,e,n){"use strict";function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return o(this,n)}}n.d(e,"a",(function(){return a}))},54:function(t,e,n){"use strict";function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}n.d(e,"a",(function(){return r}))},55:function(t,e,n){"use strict";var c="https://api.themoviedb.org",r="1cb71a91c76c2b28054ba391acc5b661";e.a={fetchShowMoviesDetails:function(t){return fetch("".concat(c,"/3/movie/").concat(t,"?api_key=").concat(r,"&language=en-US")).then((function(t){return t.json()}))},fetchMovieWithQuery:function(t){return fetch("".concat(c,"/3/search/movie?api_key=").concat(r,"&query=").concat(t,"&language=en-US&page=1&include_adult=false")).then((function(t){return t.json()}))},fetchtTrendingMovie:function(){return fetch("".concat(c,"/3/trending/movie/day?api_key=").concat(r)).then((function(t){return t.json()}))},fetchtCastMovie:function(t){return fetch("".concat(c,"/3/movie/").concat(t,"/credits?api_key=").concat(r,"&language=en-US")).then((function(t){return t.json()}))},fetchtReviewsMovie:function(t){return fetch("".concat(c,"/3/movie/").concat(t,"/reviews?api_key=").concat(r,"&language=en-US&page=1")).then((function(t){return t.json()}))}}},76:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return d}));var c=n(51),r=n(52),o=n(54),a=n(53),i=n(0),s=n(55),u=n(15),h=n.n(u),f=n(1),l=function(t){Object(o.a)(n,t);var e=Object(a.a)(n);function n(){var t;Object(c.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={cast:[],status:"resolved"},t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.setState({status:"pending"}),s.a.fetchtCastMovie(this.props.match.params.movieId).then((function(e){return t.setState({cast:e.cast,status:"resolved"})}))}},{key:"render",value:function(){var t=this.state,e=t.status,n=t.cast;return Object(f.jsxs)(f.Fragment,{children:[n.length>0&&Object(f.jsx)("ul",{children:n.map((function(t){return Object(f.jsxs)("li",{children:[Object(f.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w200").concat(t.profile_path)}),Object(f.jsx)("p",{children:t.name}),Object(f.jsxs)("p",{children:["Character:",t.character]})]},t.id)}))}),"pending"===e&&Object(f.jsx)(h.a,{type:"Circles",color:"#00BFFF",height:100,width:100})]})}}]),n}(i.Component),p=n(9),j=n(8),b=n(3),v=function(t){Object(o.a)(n,t);var e=Object(a.a)(n);function n(){var t;Object(c.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={reviews:[],status:"resolved"},t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.setState({status:"pending"}),s.a.fetchtReviewsMovie(this.props.match.params.movieId).then((function(e){return t.setState({reviews:e.results,status:"resolved"})}))}},{key:"render",value:function(){var t=this.state,e=t.status,n=t.reviews;return Object(f.jsxs)(f.Fragment,{children:[n.length>0&&Object(f.jsx)("ul",{children:n.map((function(t){return Object(f.jsx)("li",{children:t.content},t.id)}))}),"pending"===e&&Object(f.jsx)(h.a,{type:"Circles",color:"#00BFFF",height:100,width:100})]})}}]),n}(i.Component),d=function(t){Object(o.a)(n,t);var e=Object(a.a)(n);function n(){var t;Object(c.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={movie:null,status:"resolved"},t.handleGoBack=function(){var e=t.props.location.state;e&&e.from&&t.props.history.push(e.from),t.props.history.push(p.a.movies)},t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.setState({status:"pending"}),s.a.fetchShowMoviesDetails(this.props.match.params.movieId).then((function(e){return t.setState({movie:e,status:"resolved"})}))}},{key:"render",value:function(){var t=this.state,e=t.status,n=t.movie,c=this.props.match;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("button",{type:"button",onClick:this.handleGoBack,children:"Go back"}),n&&Object(f.jsxs)("div",{children:[Object(f.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(n.poster_path),alt:n.title}),Object(f.jsx)("h1",{children:n.title}),Object(f.jsxs)("p",{children:["User Score: ",10*n.vote_average,"%"]}),Object(f.jsx)("h2",{children:"Overview"}),Object(f.jsx)("p",{children:n.overview}),Object(f.jsx)("h3",{children:"Genres"}),Object(f.jsx)("p",{children:n.genres.map((function(t){return Object(f.jsx)("li",{children:t.name},t.id)}))})]}),Object(f.jsx)("br",{}),Object(f.jsx)(j.b,{to:"".concat(c.url).concat(p.a.cast),children:"Cast"}),Object(f.jsx)("br",{}),Object(f.jsx)(j.b,{to:"".concat(c.url).concat(p.a.reviews),children:"Reviews"}),Object(f.jsx)(b.a,{exact:!0,path:"".concat(p.a.movieDetails).concat(p.a.cast),component:l}),Object(f.jsx)(b.a,{exact:!0,path:"".concat(p.a.movieDetails).concat(p.a.reviews),component:v}),"pending"===e&&Object(f.jsx)(h.a,{type:"Circles",color:"#00BFFF",height:100,width:100})]})}}]),n}(i.Component)}}]);
//# sourceMappingURL=movie-details-page.6dad3d81.chunk.js.map