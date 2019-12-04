(this["webpackJsonpreact-simulated-server-spa"]=this["webpackJsonpreact-simulated-server-spa"]||[]).push([[4],{30:function(e,t,n){"use strict";var a=n(8),r=n(7),c=n(10),l=n(9),s=n(11),o=function(e,t){return e.push(t),e},i=function(e){return"x"!==e&&"y"!==e?"-":Math.floor(16*Math.random()).toString(16).toUpperCase()},u=n(12),m=function e(t,n){var a=this;Object(r.a)(this,e),this._commit=function(e){return sessionStorage.setItem(a.sessionStorageKey,JSON.stringify(e)),Promise.resolve(e)},this.all=function(e){return new Promise(function(e,t){setTimeout(function(){return e(a._data)},u.a.restDelay)}).then(e)},this.search=function(e){return a.all(function(t){return t.filter(function(e,t){return Object.keys(e).reduce(function(n,a){return n&&(r=e[a],-1!==(""+t[a]).indexOf(""+r));var r},!0)}.bind(null,e))})},this.get=function(e){return a.all(function(t){return t.find(function(t){return t[a._idProp]===e})})},this.save=function(e){return e[a._idProp]?a.put(e):a.post(e)},this.post=function(e){return e[a._idProp]="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".split("").map(i).join(""),a.all(function(t){return o(t,e)}).then(a._commit.bind(a))},this.put=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a._eqFn;return a.all(function(n){var r=n.findIndex(t.bind(null,e));if(-1===r)throw Error("".concat(e," not found in ").concat(a));return n[r]=e,a._commit(n).then(function(){return e})})},this.remove=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a._eqFn;return a.all(function(n){var r=n.findIndex(t.bind(null,e));if(-1===r)throw Error("".concat(e," not found in ").concat(a));return n.splice(r,1),a._commit(n).then(function(){return e})})};var c,l=sessionStorage.getItem(t);if(this._data=void 0,this._idProp="_id",this._eqFn=function(e,t){return e[a._idProp]===t[a._idProp]},this.sessionStorageKey=t,l)try{c=JSON.parse(l)}catch(m){console.log("Unable to parse session messages, retrieving intial data.")}var s=function(e){return function(e,t,n){return e[t]=n,e}(e,"$$hashKey",void 0)};this._data=(c?Promise.resolve(c):fetch(n).then(function(e){return e.json()})).then(this._commit).then(function(){return JSON.parse(sessionStorage.getItem(t))}).then(function(e){return e.map(s)})};n.d(t,"a",function(){return d}),n.d(t,"b",function(){return b}),n.d(t,"c",function(){return v});var f=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(l.a)(t).call(this,"contacts","static/data/contacts.json"))}return Object(s.a)(t,e),t}(m),p=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(l.a)(t).call(this,"folders","static/data/folders.json"))}return Object(s.a)(t,e),t}(m),h=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(l.a)(t).call(this,"messages","static/data/messages.json"))}return Object(s.a)(t,e),Object(a.a)(t,[{key:"byFolder",value:function(e){var t={folder:e._id};return t[-1!==["drafts","sent"].indexOf(e._id)?"from":"to"]=u.a.emailAddress,this.search(t)}}]),t}(m),d=new f,b=new p,v=new h},35:function(e,t,n){"use strict";n.r(t);var a=n(30),r=n(7),c=n(8),l=n(10),s=n(9),o=n(11),i=n(1),u=n.n(i),m=n(6),f=function(e){function t(e){return Object(r.a)(this,t),Object(l.a)(this,Object(s.a)(t).call(this,e))}return Object(o.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=u.a.createElement(m.d,{to:".new"},u.a.createElement("a",null,u.a.createElement("button",{className:"btn btn-primary"},u.a.createElement("i",{className:"fa fa-pencil"}),u.a.createElement("span",null,"New Contact")))),t=this.props.contacts.map(function(e,t){return u.a.createElement("li",{key:t},u.a.createElement(m.e,{class:"selected"},u.a.createElement(m.d,{to:".contact",params:{contactId:e._id}},u.a.createElement("a",{href:"asd"},e.name.first+" "+e.name.last))))});return u.a.createElement("div",{className:this.props.className},u.a.createElement("ul",{className:"selectlist list-unstyled flex nogrow"},u.a.createElement("li",null,e),u.a.createElement("li",null,"\xa0"),t))}}]),t}(i.Component),p=function(e){function t(e){return Object(r.a)(this,t),Object(l.a)(this,Object(s.a)(t).call(this,e))}return Object(o.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.contacts;return u.a.createElement("div",{className:"my-contacts flex-h"},u.a.createElement(f,{contacts:e,className:"flex nogrow"}),u.a.createElement(m.f,null,u.a.createElement("h4",{style:{margin:"1em 2em"}},"Select a contact")))}}]),t}(i.Component),h=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.contact;return u.a.createElement("div",{className:"flex-h"},u.a.createElement("div",{className:"details"},u.a.createElement("h3",null,e.name.first+" "+e.name.last),u.a.createElement("div",null,u.a.createElement("label",null,"Company"),u.a.createElement("div",null,e.company)),u.a.createElement("div",null,u.a.createElement("label",null,"Age"),u.a.createElement("div",null,e.age)),u.a.createElement("div",null,u.a.createElement("label",null,"Phone"),u.a.createElement("div",null,e.phone)),u.a.createElement("div",null,u.a.createElement("label",null,"Email"),u.a.createElement("div",null,e.email)),u.a.createElement("div",{className:"flex-h"},u.a.createElement("label",null,"Address"),u.a.createElement("div",null,e.address.street,u.a.createElement("br",null),e.address.city+", "+e.address.state+" "+e.address.zip))),u.a.createElement("div",{className:"flex nogrow"},u.a.createElement("img",{src:e.picture})))}}]),t}(i.Component),d=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.contact,t=u.a.createElement(m.d,{to:"mymessages.compose",params:{message:{to:e.email}}},u.a.createElement("button",{className:"btn btn-primary"},u.a.createElement("i",{className:"fa fa-envelope"}),u.a.createElement("span",null,"Message"))),n=u.a.createElement(m.d,{to:".edit"},u.a.createElement("button",{className:"btn btn-primary"},u.a.createElement("i",{className:"fa fa-pencil"}),u.a.createElement("span",null,"Edit Contact")));return u.a.createElement("div",{className:"contact"},u.a.createElement(h,{contact:e}),t," ",n)}}]),t}(i.Component),b=n(31),v=n(13);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}var O=[{label:"First",path:"name.first"},{label:"Last",path:"name.last"},{label:"Company",path:"company"},{label:"Age",path:"age"},{label:"Phone",path:"phone"},{label:"Email",path:"email"},{label:"Street",path:"address.street"},{label:"City",path:"address.city"},{label:"State",path:"address.state"},{label:"Zip",path:"address.zip"},{label:"Image",path:"picture"}],j=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).handleChangeFor=function(e){var t=n.props,a=t.contact,r=t.onContactChange;return function(t){r(Object(b.set)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach(function(t){Object(v.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},a),e,t.target.value))}},n}return Object(o.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.contact,n=O.map(function(n){return u.a.createElement("div",{key:n.path},u.a.createElement("label",null,n.label),u.a.createElement("input",{type:"text",value:Object(b.get)(t,n.path),onChange:e.handleChangeFor(n.path)}))});return u.a.createElement("div",{className:"details"},n)}}]),t}(i.Component),g=n(16),y=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(s.a)(t).call(this,e))).uiCanExit=function(e){if(n.canExit||Object(b.isEqual)(n.state.contact,n.props.contact))return!0;return g.a.confirm("You have unsaved changes to this contact.","Navigate away and lose changes?")},n.handleChangeContact=function(e){n.setState({contact:e})},n.save=function(){var e=n.props.transition.router.stateService;a.a.save(n.state.contact).then(function(){return n.canExit=!0}).then(function(){return e.go("^",null,{reload:!0})})},n.remove=function(){var e=n.state.contact,t=n.props.transition.router.stateService;g.a.confirm("Delete contact: ".concat(e.name.first," ").concat(e.name.last)).then(function(){return a.a.remove(e)}).then(function(){return n.canExit=!0}).then(function(){return t.go("^.^",null,{reload:!0})})},n.canExit=!1,n.state={contact:Object(b.cloneDeep)(n.props.contact)},n}return Object(o.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.contact;return u.a.createElement("div",{className:"contact"},u.a.createElement(j,{contact:e,onContactChange:this.handleChangeContact}),u.a.createElement("hr",null),u.a.createElement("div",null,u.a.createElement(m.d,{to:"^"},u.a.createElement("button",{className:"btn btn-primary"},u.a.createElement("i",{className:"fa fa-close"}),u.a.createElement("span",null,"Cancel"))),u.a.createElement("button",{className:"btn btn-primary",onClick:this.save},u.a.createElement("i",{className:"fa fa-save"}),u.a.createElement("span",null,"Save")),u.a.createElement("button",{className:"btn btn-primary",onClick:this.remove},u.a.createElement("i",{className:"fa fa-close"}),u.a.createElement("span",null,"Delete"))))}}]),t}(i.Component);n.d(t,"states",function(){return x});var x=[{parent:"app",name:"contacts",url:"/contacts",resolve:[{token:"contacts",resolveFn:function(){return a.a.all()}}],data:{requiresAuth:!0},component:p},{name:"contacts.contact",url:"/:contactId",resolve:[{token:"contact",deps:["$transition$"],resolveFn:function(e){return a.a.get(e.params().contactId)}}],component:d},{name:"contacts.contact.edit",url:"/edit",views:{"^.^.$default":{component:y}}},{name:"contacts.new",url:"/new",component:y}]}}]);
//# sourceMappingURL=4.6d3e0039.chunk.js.map