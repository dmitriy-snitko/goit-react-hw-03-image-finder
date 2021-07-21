(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{33:function(o,i,K){},77:function(o,i,K){"use strict";K.r(i);var e,n,A,t,a,r=K(0),c=K.n(r),g=K(6),s=K.n(g),l=(K(33),K(11)),d=K.n(l),p=K(16),C=K(12),u=K(7),h=K(8),b=K(10),m=K(9),x=K(2),f=K.n(x),j=K(3),w=K(4),O=w.a.header(e||(e=Object(j.a)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),v=w.a.form(n||(n=Object(j.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),y=w.a.input(A||(A=Object(j.a)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),M=w.a.button(t||(t=Object(j.a)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n\n  &:hover {\n    opacity: 1;\n  }\n"]))),k=w.a.span(a||(a=Object(j.a)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),D=K(1),I=function(o){var i=o.onSubmit;return Object(D.jsx)(O,{children:Object(D.jsxs)(v,{onSubmit:function(o){o.preventDefault();var K=o.target.elements.imageName.value.trim();K||(o.target.elements.imageName.value=null),i(K)},children:[Object(D.jsx)(M,{type:"submit",children:Object(D.jsx)(k,{children:"Search"})}),Object(D.jsx)(y,{name:"imageName",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})};I.prototype={onSubmit:f.a.func.isRequired};var S,E,B,Q=w.a.img(S||(S=Object(j.a)(["\n  width: 100%;\n  height: 270px;\n\n  object-fit: cover;\n"]))),L=function(o){Object(b.a)(K,o);var i=Object(m.a)(K);function K(){var o;Object(u.a)(this,K);for(var e=arguments.length,n=new Array(e),A=0;A<e;A++)n[A]=arguments[A];return(o=i.call.apply(i,[this].concat(n))).state={loaded:!1},o.onLoad=function(){o.setState({loaded:!0})},o}return Object(h.a)(K,[{key:"render",value:function(){var o=this.props,i=o.webformatURL,K=o.tags,e=o.onImageSelect;return Object(D.jsx)("li",{children:Object(D.jsx)(Q,{src:this.state.loaded?i:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAEcAWYDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9fKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//Z",alt:K,className:"ImageGalleryItem-image",onLoad:this.onLoad,onClick:e})})}}]),K}(r.Component),R=w.a.ul(E||(E=Object(j.a)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),U=function(o){var i=o.images,K=o.onImageSelect;return Object(D.jsx)(R,{children:i.map((function(o){return Object(D.jsx)(L,{webformatURL:o.webformatURL,tags:o.tags,onImageSelect:function(){return K(o.largeImageURL,o.tags)}},o.webformatURL)}))})};U.prototype={images:f.a.array.isRequired,onImageSelect:f.a.func.isRequired};var F=w.a.button(B||(B=Object(j.a)(["\n  width: 150px;\n  margin: 0 auto;\n  padding: 8px 16px;\n  border-radius: 2px;\n  background-color: #3f51b5;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n\n  &:hover,\n  &:focus {\n    background-color: #303f9f;\n  }\n"]))),q=function(o){var i=o.onLoadMore;return Object(D.jsx)(F,{onClick:i,type:"button",className:"Button",children:"Load More"})};q.prototype={onLoadMore:f.a.func.isRequired};var J,N,z,Y,W=K(26),Z=K.n(W),H=w.a.div(J||(J=Object(j.a)(["\n  position: fixed;\n  display: flex;\n  top: 0;\n  right: 0;\n\n  width: 100vw;\n  height: 100vh;\n\n  align-items: center;\n  justify-content: center;\n"]))),G=function(){return Object(D.jsx)(H,{children:Object(D.jsx)(Z.a,{type:"Oval",color:"#3f51b5",height:150,width:150,timeout:3e3})})},P=w.a.div(N||(N=Object(j.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  overflow-y: scroll;\n"]))),V=w.a.div(z||(z=Object(j.a)(["\n  position: relative;\n\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n\n  background-color: #fff;\n"]))),T=w.a.button(Y||(Y=Object(j.a)(["\n  position: absolute;\n  top: -15px;\n  right: -15px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 40px;\n  height: 40px;\n\n  border: none;\n  border-radius: 50%;\n"]))),X=K(27),_=document.querySelector("#modal-root"),$=function(o){Object(b.a)(K,o);var i=Object(m.a)(K);function K(){var o;Object(u.a)(this,K);for(var e=arguments.length,n=new Array(e),A=0;A<e;A++)n[A]=arguments[A];return(o=i.call.apply(i,[this].concat(n))).state={isImageLoaded:!1},o.handleOverlayClick=function(i){var K=o.props.onModalClose;i.target===i.currentTarget&&K()},o.handleKeyDown=function(i){var K=o.props.onModalClose;"Escape"===i.code&&K()},o.onImageLoadet=function(){o.setState({isImageLoaded:!0})},o}return Object(h.a)(K,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var o=this.props,i=o.onModalClose,K=o.selectedImage,e=this.state.isImageLoaded;return Object(g.createPortal)(Object(D.jsxs)(P,{onClick:this.handleOverlayClick,children:[!e&&Object(D.jsx)(G,{}),Object(D.jsxs)(V,{children:[Object(D.jsx)("img",{src:K.src,alt:K.alt,onLoad:this.onImageLoadet}),e&&Object(D.jsx)(T,{onClick:i,children:Object(D.jsx)(X.a,{size:"30"})})]})]}),_)}}]),K}(r.Component),oo=K(15),io=K.n(oo);io.a.defaults.baseURL="https://pixabay.com/api/";var Ko,eo=function(){var o=Object(C.a)(d.a.mark((function o(i,K){var e,n;return d.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,io.a.get("?q=".concat(i,"&page=").concat(K,"&key=").concat("21149088-9f5924478b20a01769fc809e0","&image_type=photo&orientation=horizontal&per_page=12"));case 2:return e=o.sent,n=e.data,o.abrupt("return",n.hits);case 5:case"end":return o.stop()}}),o)})));return function(i,K){return o.apply(this,arguments)}}(),no=K(13),Ao=function(o){no.b.info("No results were found for ".concat(o))},to=w.a.div(Ko||(Ko=Object(j.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 16px;\n  padding-bottom: 24px;\n"]))),ao=function(o){Object(b.a)(K,o);var i=Object(m.a)(K);function K(){var o;Object(u.a)(this,K);for(var e=arguments.length,n=new Array(e),A=0;A<e;A++)n[A]=arguments[A];return(o=i.call.apply(i,[this].concat(n))).state={searchQuery:null,images:[],page:1,showModal:!1,selectedImage:null,status:"idel"},o.handleFormSubmit=function(i){o.state.searchQuery!==i&&(o.setState({images:[],page:1}),o.setState({searchQuery:i}))},o.onLoadMore=function(){o.setState((function(o){return{page:o.page+1}}))},o.onImageSelect=function(i,K){o.setState({selectedImage:{src:i,alt:K},showModal:!0})},o.onModalClose=function(){o.setState({showModal:!1})},o}return Object(h.a)(K,[{key:"componentDidUpdate",value:function(){var o=Object(C.a)(d.a.mark((function o(i,K){var e,n,A,t;return d.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(e=this.state,n=e.searchQuery,A=e.page,K.searchQuery===n&&K.page===A){o.next=21;break}return this.setState({status:"pending"}),o.prev=3,o.next=6,eo(n,A);case 6:if((t=o.sent).length){o.next=11;break}throw this.setState({status:"idel"}),Ao(n),new Error;case 11:if(""!==n){o.next=14;break}throw this.setState({status:"idel"}),new Error;case 14:this.setState((function(o){return{images:[].concat(Object(p.a)(o.images),Object(p.a)(t)),status:"resolve"}})),A>1&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),o.next=21;break;case 18:o.prev=18,o.t0=o.catch(3),console.error();case 21:case"end":return o.stop()}}),o,this,[[3,18]])})));return function(i,K){return o.apply(this,arguments)}}()},{key:"render",value:function(){var o=this.state,i=o.images,K=o.status,e=o.showModal;return"idel"===K?Object(D.jsxs)(to,{children:[Object(D.jsx)(I,{onSubmit:this.handleFormSubmit}),Object(D.jsx)(no.a,{})]}):"pending"===K?Object(D.jsxs)(to,{children:[Object(D.jsx)(I,{onSubmit:this.handleFormSubmit}),Object(D.jsx)(U,{images:i}),i.length>0&&Object(D.jsx)(q,{onLoadMore:this.onLoadMore}),Object(D.jsx)(G,{})]}):"resolve"===K?Object(D.jsxs)(to,{children:[Object(D.jsx)(I,{onSubmit:this.handleFormSubmit}),Object(D.jsx)(U,{images:i,onImageSelect:this.onImageSelect}),Object(D.jsx)(q,{onLoadMore:this.onLoadMore}),e&&Object(D.jsx)($,{onModalClose:this.onModalClose,selectedImage:this.state.selectedImage})]}):void 0}}]),K}(r.Component);s.a.render(Object(D.jsx)(c.a.StrictMode,{children:Object(D.jsx)(ao,{})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.0747d456.chunk.js.map