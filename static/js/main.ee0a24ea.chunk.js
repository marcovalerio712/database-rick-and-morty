(this["webpackJsonpdatabase-rick-and-morty"]=this["webpackJsonpdatabase-rick-and-morty"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(8),s=a.n(r),i=(a(15),a(7)),o=a.n(i),u=a(9),h=a(2),d=a(3),j=a(5),l=a(4),b=(a(17),a(18),a.p+"static/media/logo.b62096f7.png"),f=a(0);var m=function(){return Object(f.jsx)("div",{className:"header",children:Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("img",{src:b,alt:"logo"})})})},p=a(10);a(20),a(21);var g=function(e){var t=e.character,a=e.isSelected,n=e.charToFavorite,c=a?"selected":"";return Object(f.jsxs)("div",{className:"card "+c,children:[Object(f.jsx)("img",{src:t.image,alt:t.name}),Object(f.jsxs)("div",{className:"card-info",children:[Object(f.jsxs)("p",{className:"card-info__name",children:[Object(f.jsx)("span",{children:"Name:"}),t.name]}),Object(f.jsxs)("p",{className:"card-info__generics",children:[t.species," ",Object(f.jsx)("span",{children:" from "})," ",t.location.name]})]}),Object(f.jsx)("button",{className:"favorite",onClick:function(){n(t.id,a)},children:a?"Remove":"Add"})]})},v=function(e){Object(j.a)(a,e);var t=Object(l.a)(a);function a(){var e;return Object(h.a)(this,a),(e=t.call(this)).addToFavorite=function(t,a){var n=Object(p.a)(e.state.favorites);a?n=n.filter((function(e){return e!==t})):n.push(t),e.setState({favorites:n})},e.state={favorites:[]},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.characters,n=t.isLoading,c=this.state.favorites;return Object(f.jsxs)("div",{className:"grid container",children:[a.map((function(t){return Object(f.jsx)(g,{character:t,isSelected:c.includes(t.id),charToFavorite:e.addToFavorite},t.id)})),n&&Object(f.jsx)("div",{className:"loading",children:Object(f.jsx)("p",{children:"Loading..."})})]})}}]),a}(c.a.Component),O=(a(22),function(e){var t=e.currentPage,a=e.onChange,n=e.totalPages;return Object(f.jsxs)("div",{className:"container paginator",children:[Object(f.jsx)("button",{onClick:function(){var e=t-1;e>0&&a(e)},children:"Prev"}),Object(f.jsxs)("p",{children:["Page ",Object(f.jsx)("span",{children:t})," of ",n]}),Object(f.jsx)("button",{onClick:function(){var e=t+1;e<=n&&a(e)},children:"Next"})]})}),x=(a(23),function(e){Object(j.a)(a,e);var t=Object(l.a)(a);function a(){var e;return Object(h.a)(this,a),(e=t.call(this)).onInputChange=function(t){e.setState({searchParam:t.target.value})},e.onClickSubmit=function(){e.props.updateFetch(e.state.searchParam)},e.state={searchParam:""},e}return Object(d.a)(a,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"container searchBox",children:[Object(f.jsx)("input",{type:"text",placeholder:"Search",onChange:this.onInputChange}),Object(f.jsx)("button",{onClick:this.onClickSubmit,children:">"})]})}}]),a}(c.a.Component)),P=function(e){Object(j.a)(a,e);var t=Object(l.a)(a);function a(){var e;return Object(h.a)(this,a),(e=t.call(this)).onSubmitSearch=function(t){console.log(t),e.setState({searchParam:t})},e.fetchCharacters=Object(u.a)(o.a.mark((function t(){var a,n,c,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.setState({isLoading:!0}),a=new URL("https://rickandmortyapi.com/api/character/"),n={page:e.state.currentPage,name:e.state.searchParam},Object.keys(n).forEach((function(e){a.searchParams.append(e,n[e])})),t.next=7,fetch(a);case 7:return c=t.sent,t.next=10,c.json();case 10:r=t.sent,e.setState({characters:r.results,totalPages:r.info.pages}),t.next=16;break;case 14:t.prev=14,t.t0=t.catch(0);case 16:return t.prev=16,e.setState({isLoading:!1}),t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[0,14,16,19]])}))),e.onPaginatorChange=function(t){e.setState({currentPage:t})},e.componentDidMount=function(){e.fetchCharacters()},e.componentDidUpdate=function(t,a){a.currentPage===e.state.currentPage&&a.searchParam===e.state.searchParam||e.fetchCharacters()},e.state={totalPages:1,currentPage:1,isLoading:!1,searchParam:"",characters:[]},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state,t=e.characters,a=e.isLoading,n=e.currentPage,c=e.totalPages;return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(m,{}),Object(f.jsx)(x,{updateFetch:this.onSubmitSearch}),Object(f.jsx)(v,{characters:t,isLoading:a}),Object(f.jsx)(O,{currentPage:n,totalPages:c,onChange:this.onPaginatorChange})]})}}]),a}(c.a.Component);s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(P,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.ee0a24ea.chunk.js.map