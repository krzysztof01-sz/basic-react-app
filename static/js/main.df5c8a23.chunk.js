(this["webpackJsonpfiltered-list-v2"]=this["webpackJsonpfiltered-list-v2"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(2),s=n.n(i),l=(n(13),n(3)),o=n(4),c=n(6),u=n(5),h=n(7),m=["Anna","Krzysiek","Tomek","Kasia","Kamil","Rysiek"],f=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={allUsers:m},n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Wyszukiwarka w create-react-app"),r.a.createElement("input",{onChange:this.filterNames.bind(this),type:"text"}),r.a.createElement(v,{usersList:this.state.allUsers}))}},{key:"filterNames",value:function(e){var t=e.currentTarget.value,n=m.filter((function(e){return e.startsWith(t)}));this.setState({allUsers:n})}}]),t}(r.a.Component),v=function(e){var t=e.usersList;return t.length>0?r.a.createElement("ul",null,t.map((function(e){return r.a.createElement("li",{key:e},e)}))):r.a.createElement("p",null,"No results!")},p=f;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.df5c8a23.chunk.js.map