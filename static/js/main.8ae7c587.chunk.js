(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(42)},21:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(14),r=a.n(s),l=a(2),o=a(3),i=a(5),m=a(4),u=a(6),d=(a(21),function(e){var t=e.song,a=t.song_name,n=t.song_link,s=t.album_name;return c.a.createElement("div",{className:"col-sm-6 col-md-4 col-lg-3 mb-4 align-self-stretch"},c.a.createElement("div",{className:"card shadow h-100"},c.a.createElement("a",{href:"https://www.youtube.com/watch?v=".concat(n),target:"_blank"},c.a.createElement("img",{className:"card-img-top",src:"https://img.youtube.com/vi/".concat(n,"/mqdefault.jpg"),alt:a})),c.a.createElement("div",{className:"card-header"},c.a.createElement("h5",{className:"card-title mb-0"},a)),c.a.createElement("div",{className:"card-body"},c.a.createElement("p",{className:"album-title mb-0"},s))))}),h=a(15),p=a.n(h),g=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={songs:[]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.get("http://localhost:3000/songs").then(function(t){e.setState({songs:t.data.slice(0,12)})})}},{key:"render",value:function(){return c.a.createElement("div",{className:"container-fluid py-5"},c.a.createElement("div",{className:"row align-items-center justify-content-center",style:{minHeight:"100vh"}},this.state.songs.length?this.state.songs.map(function(e){return c.a.createElement(d,{key:e.id,song:e})}):c.a.createElement("div",{className:"col-auto"},c.a.createElement("h2",null,"Loading..."))))}}]),t}(n.Component),b=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement(g,null)))}}]),t}(n.Component);r.a.render(c.a.createElement(b,null),document.getElementById("root"))}},[[16,2,1]]]);
//# sourceMappingURL=main.8ae7c587.chunk.js.map