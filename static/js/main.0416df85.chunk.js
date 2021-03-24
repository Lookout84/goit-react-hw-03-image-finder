(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{13:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__FCKkB",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__1PZXc"}},14:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2mLrE",Modal:"Modal_Modal__2Afsb"}},27:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__R02je"}},28:function(e,t,a){e.exports={Button:"Button_Button__3tsp-"}},30:function(e,t,a){e.exports={Loader:"Loader_Loader__Fk-Ip"}},37:function(e,t,a){},79:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),c=a.n(o),l=a(32),s=(a(37),a(17)),i=a(5),u=a(6),h=a(8),d=a(7),m=a(26),g=a.n(m),p=function(e,t,a){var n="https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=".concat(e,"&page=").concat(t,"&per_page=").concat(a,"&key=").concat("20004677-e0c621e42f0d912e7de39a0de");return g.a.get(n).then((function(e){return e.data}))},b=a(9),j=a.n(b),y=a(1),f=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(u.a)(a,[{key:"render",value:function(){return Object(y.jsx)("header",{className:j.a.Searchbar,children:Object(y.jsxs)("form",{className:j.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(y.jsx)("button",{type:"submit",className:j.a.SearchFormButton,children:Object(y.jsx)("span",{className:j.a.SearchFormButtonLabel,children:"Search"})}),Object(y.jsx)("input",{className:j.a.SearchFormInput,type:"text",placeholder:"Search images and photos",value:this.state.query,onChange:this.handleChange})]})})}}]),a}(n.Component),O=a(13),v=a.n(O),S=function(e){var t=e.id,a=e.webformatURL,n=e.tags,r=e.onClick;return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("li",{className:v.a.ImageGalleryItem,children:Object(y.jsx)("img",{className:v.a.ImageGalleryItemImage,src:a,alt:n,onClick:r})},t)})},_=a(27),k=a.n(_),x=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleClick=function(t){e.props.onClose(t)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props.gallery;return Object(y.jsx)("ul",{className:k.a.ImageGallery,children:t.map((function(t){var a=t.id,n=t.webformatURL,r=t.tags,o=t.largeImageURL;return Object(y.jsx)(S,{webformatURL:n,tags:r,onClick:function(){return e.handleClick(o)}},a)}))})}}]),a}(n.Component),I=a(28),w=a.n(I),C=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(y.jsx)("button",{className:w.a.Button,type:"button",onClick:this.props.onClick,children:"Load more"})}}]),a}(n.Component),L=a(14),F=a.n(L),B=document.querySelector("#modal-root"),M=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e.handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("click",this.handleBackdropClick)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown),window.addEventListener("click",this.handleBackdropClick)}},{key:"render",value:function(){var e=this.props.largeImageURL;return Object(o.createPortal)(Object(y.jsx)("div",{className:F.a.Overlay,onClick:this.handleBackdropClick,children:Object(y.jsx)("div",{className:F.a.Modal,children:Object(y.jsx)("img",{src:e,alt:"No alt images"})})}),B)}}]),a}(n.Component),N=a(29),G=a.n(N),R=a(30),U=a.n(R),E=(a(77),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(y.jsx)(G.a,{className:U.a.Loader,type:"Puff",color:"#00BFFF",height:100,width:100,style:{margin:"auto"},timeout:3e3})}}]),a}(n.Component)),q=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={sQuery:"",page:1,perPage:12,gallery:[],isLoading:!1,error:!1,scroll:!1,showModal:!1,largeImageURL:"",tags:""},e.onChangeQuery=function(t){e.setState({sQuery:t,page:1,gallery:[]})},e.fetchHits=function(){var t=e.state,a=t.page,n=t.sQuery,r=t.perPage;e.setState({isLoading:!0}),p(n,a,r).then((function(e){return e.hits})).then((function(t){e.setState((function(e){return{gallery:[].concat(Object(s.a)(e.gallery),Object(s.a)(t)),page:e.page+1,hits:t.length}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})}))},e.loadMoreButton=function(){e.fetchHits(),e.state.page>1&&e.setState({scroll:!0})},e.toggleModal=function(t,a){e.setState({tags:a}),e.setState({largeImageURL:t}),e.setState({scroll:!1}),e.setState({showModal:!e.state.showModal})},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e,t){t.sQuery!==this.state.sQuery&&this.fetchHits(),!0===this.state.scroll&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.gallery,a=e.isLoading,n=e.error,r=e.showModal,o=e.largeImageURL,c=e.tags,l=t.length>0&&!a;return Object(y.jsxs)(y.Fragment,{children:[n&&Object(y.jsx)("p",{children:"Sorry, error"}),Object(y.jsx)(f,{onSubmit:this.onChangeQuery}),t.length>0&&Object(y.jsx)(x,{gallery:t,onClose:this.toggleModal}),l&&Object(y.jsx)(C,{onClick:this.loadMoreButton}),a&&Object(y.jsx)(E,{}),r&&Object(y.jsx)(M,{onClose:this.toggleModal,largeImageURL:o,tags:c})]})}}]),a}(n.Component);a(78),a(79);c.a.render(Object(y.jsx)(l.a,{children:Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(q,{})})}),document.getElementById("root"))},9:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__v6Nzd",SearchForm:"Searchbar_SearchForm__1YVFE",SearchFormButton:"Searchbar_SearchFormButton__3z4cR",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__2ZT_g",SearchFormInput:"Searchbar_SearchFormInput__2AXxF"}}},[[86,1,2]]]);
//# sourceMappingURL=main.0416df85.chunk.js.map