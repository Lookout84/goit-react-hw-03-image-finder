(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{23:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),c=a(17),o=a.n(c),s=(a(23),a(8)),i=a(3),l=a(4),u=a(6),h=a(5),g=a(18),b=a.n(g),m=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:12,n="20004677-e0c621e42f0d912e7de39a0de";return b.a.get("https://pixabay.com/api/?key=".concat(n,"&q=").concat(e,"&image_type=photo&per_page=").concat(a,"&page=").concat(t)).then((function(e){return e.data.hits}))},p=a(0),j=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(p.jsx)("header",{className:"Searchbar",children:Object(p.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(p.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(p.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(p.jsx)("input",{className:"SearchForm-input",type:"text",placeholder:"Search images and photos",value:this.state.query,onChange:this.handleChange})]})})}}]),a}(n.Component),d=function(e){var t=e.id,a=e.webformatURL,n=e.tags;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("li",{className:"ImageGalleryItem",children:Object(p.jsx)("img",{src:a,alt:n,className:"ImageGalleryItem-image"})},t)})},f=function(e){var t=e.gallery;return Object(p.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){var t=e.id,a=e.webformatURL,n=e.tags;return Object(p.jsx)(d,{webformatURL:a,tags:n},t)}))})},y=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(p.jsx)("button",{className:"Button",type:"button",onClick:this.props.onClick,children:"Load more"})}}]),a}(n.Component),O=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={sQuery:"",page:1,perPage:12,gallery:[],isLoading:!1,error:null,scroll:!1},e.onChangeQuery=function(t){e.setState({sQuery:t,page:1,gallery:[],error:null})},e.fetchHits=function(){var t=e.state,a=t.page,n={sQuery:t.sQuery,page:a,perPage:t.perPage};e.setState({isLoading:!0}),m(n).then((function(t){console.log(t),e.setState((function(e){return{gallery:[].concat(Object(s.a)(e.gallery),Object(s.a)(t)),page:e.page+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})}))},e.loadMoreButton=function(){e.fetchHits(),e.state.page>1&&e.setState({scroll:!0})},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.sQuery!==this.state.sQuery&&this.fetchHits(),!0===this.state.scroll&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.gallery,a=e.isLoading,n=t.length>0&&!a;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(j,{onSubmit:this.onChangeQuery}),Object(p.jsx)(f,{gallery:t}),n&&Object(p.jsx)(y,{onClick:this.loadMoreButton})]})}}]),a}(n.Component);a(43),a(44);o.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(O,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.cf9b9ae5.chunk.js.map