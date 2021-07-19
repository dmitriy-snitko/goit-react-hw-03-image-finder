(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{30:function(e,n,t){},38:function(e,n,t){},39:function(e,n,t){},58:function(e,n,t){},59:function(e,n,t){"use strict";t.r(n);var a,i,o,r,c,s=t(1),p=t.n(s),u=t(17),l=t.n(u),d=(t(30),t(6)),b=t.n(d),h=t(8),m=t(18),g=t(19),f=t(20),x=t(24),j=t(23),v=t(21),y=t.n(v),O=t(3),w=t(4),k=w.a.header(a||(a=Object(O.a)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),S=w.a.form(i||(i=Object(O.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),L=w.a.input(o||(o=Object(O.a)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),N=w.a.button(r||(r=Object(O.a)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n\n  &:hover {\n    opacity: 1;\n  }\n"]))),z=w.a.span(c||(c=Object(O.a)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),I=t(0),M=function(e){var n=e.onSubmit;return Object(I.jsx)(k,{children:Object(I.jsxs)(S,{onSubmit:function(e){e.preventDefault(),n(e.target.elements.imageName.value)},children:[Object(I.jsx)(N,{type:"submit",children:Object(I.jsx)(z,{children:"Search"})}),Object(I.jsx)(L,{name:"imageName",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})};M.prototype={onSubmit:y.a.func.isRequired};var Q=function(e){var n=e.webformatURL,t=e.tags;return Object(I.jsx)("li",{className:"ImageGalleryItem",children:Object(I.jsx)("img",{src:n,alt:t,className:"ImageGalleryItem-image"})})},R=(t(38),function(e){var n=e.images;return Object(I.jsx)("ul",{className:"ImageGallery",children:n.map((function(e){return Object(I.jsx)(Q,{webformatURL:e.webformatURL,tags:e.tags},e.id)}))})}),U=(t(39),function(e){var n=e.onLoadMore;return Object(I.jsx)("button",{onClick:n,type:"button",className:"Button",children:"Load More"})}),F=t(7),A=t.n(F);A.a.defaults.baseURL="https://pixabay.com/api/";var C=function(e,n){return A.a.get("?q=".concat(e,"&page=").concat(n,"&key=").concat("21149088-9f5924478b20a01769fc809e0","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},G=(t(58),function(e){Object(x.a)(t,e);var n=Object(j.a)(t);function t(){var e;Object(g.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=n.call.apply(n,[this].concat(i))).state={searchQuery:null,images:[],page:1,status:"idel"},e.onLoadMore=function(){e.setState((function(e){return{page:e.page+1}}))},e.handleFormSubmit=function(n){e.state.searchQuery!==n&&(e.setState({images:[],page:1}),e.setState({searchQuery:n}))},e}return Object(f.a)(t,[{key:"componentDidUpdate",value:function(){var e=Object(m.a)(b.a.mark((function e(n,t){var a,i,o,r,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=this.state,i=a.searchQuery,o=a.page,r=a.status,t.searchQuery===i&&t.page===o){e.next=7;break}return this.setState({status:"pending"}),e.next=5,C(i,o);case 5:c=e.sent,this.setState((function(e){return{images:[].concat(Object(h.a)(e.images),Object(h.a)(c)),status:"resolve"}}));case 7:"resolve"===r&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"});case 9:case"end":return e.stop()}}),e,this)})));return function(n,t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,n=e.images,t=e.status;return"idel"===t?Object(I.jsx)("div",{className:"App",children:Object(I.jsx)(M,{onSubmit:this.handleFormSubmit})}):"pending"===t||"resolve"===t?Object(I.jsxs)("div",{className:"App",children:[Object(I.jsx)(M,{onSubmit:this.handleFormSubmit}),n.length>0&&Object(I.jsx)(R,{images:n}),Object(I.jsx)(U,{onLoadMore:this.onLoadMore})]}):void 0}}]),t}(s.Component));l.a.render(Object(I.jsx)(p.a.StrictMode,{children:Object(I.jsx)(G,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.fccd797a.chunk.js.map