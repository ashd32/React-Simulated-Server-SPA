(this["webpackJsonp@uirouter/sample-app-react"]=this["webpackJsonp@uirouter/sample-app-react"]||[]).push([[5],{30:function(e,t,a){"use strict";var n=a(8),r=a(7),s=a(10),c=a(9),o=a(11),i=function(e,t){return e.push(t),e},l=function(e){return"x"!==e&&"y"!==e?"-":Math.floor(16*Math.random()).toString(16).toUpperCase()},u=a(12),m=function e(t,a){var n=this;Object(r.a)(this,e),this._commit=function(e){return sessionStorage.setItem(n.sessionStorageKey,JSON.stringify(e)),Promise.resolve(e)},this.all=function(e){return new Promise((function(e,t){setTimeout((function(){return e(n._data)}),u.a.restDelay)})).then(e)},this.search=function(e){var t=function(e,t){return Object.keys(e).reduce((function(a,n){return a&&(r=e[n],-1!==(""+t[n]).indexOf(""+r));var r}),!0)};return n.all((function(a){return a.filter(t.bind(null,e))}))},this.get=function(e){return n.all((function(t){return t.find((function(t){return t[n._idProp]===e}))}))},this.save=function(e){return e[n._idProp]?n.put(e):n.post(e)},this.post=function(e){return e[n._idProp]="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".split("").map(l).join(""),n.all((function(t){return i(t,e)})).then(n._commit.bind(n))},this.put=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n._eqFn;return n.all((function(a){var r=a.findIndex(t.bind(null,e));if(-1===r)throw Error("".concat(e," not found in ").concat(n));return a[r]=e,n._commit(a).then((function(){return e}))}))},this.remove=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n._eqFn;return n.all((function(a){var r=a.findIndex(t.bind(null,e));if(-1===r)throw Error("".concat(e," not found in ").concat(n));return a.splice(r,1),n._commit(a).then((function(){return e}))}))};var s,c=sessionStorage.getItem(t);if(this._data=void 0,this._idProp="_id",this._eqFn=function(e,t){return e[n._idProp]===t[n._idProp]},this.sessionStorageKey=t,c)try{s=JSON.parse(c)}catch(m){console.log("Unable to parse session messages, retrieving intial data.")}var o=function(e){return function(e,t,a){return e[t]=a,e}(e,"$$hashKey",void 0)};this._data=(s?Promise.resolve(s):fetch(a).then((function(e){return e.json()}))).then(this._commit).then((function(){return JSON.parse(sessionStorage.getItem(t))})).then((function(e){return e.map(o)}))};a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return b})),a.d(t,"c",(function(){return g}));var f=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(c.a)(t).call(this,"contacts","static/data/contacts.json"))}return Object(o.a)(t,e),t}(m),d=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(c.a)(t).call(this,"folders","static/data/folders.json"))}return Object(o.a)(t,e),t}(m),p=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(c.a)(t).call(this,"messages","static/data/messages.json"))}return Object(o.a)(t,e),Object(n.a)(t,[{key:"byFolder",value:function(e){var t={folder:e._id};return t[-1!==["drafts","sent"].indexOf(e._id)?"from":"to"]=u.a.emailAddress,this.search(t)}}]),t}(m),h=new f,b=new d,g=new p},34:function(e,t,a){"use strict";a.r(t);var n=a(30),r=a(7),s=a(8),c=a(12);function o(e){var t=1;return"+"!==e.charAt(0)&&"-"!==e.charAt(0)||(t="-"===e.charAt(0)?-1:1,e=e.substring(1)),function(a,n){var r=0,s=a[e],c=n[e];return s<c&&(r=-1),s>c&&(r=1),r*t}}var i=new(function(){function e(){Object(r.a)(this,e)}return Object(s.a)(e,[{key:"proximalMessageId",value:function(e,t){var a=e.sort(o(c.a.sort)),n=a.findIndex((function(e){return e._id===t})),r=a.length>n+1?n+1:n-1;return r>=0?a[r]._id:void 0}}]),e}()),l=a(13),u=a(10),m=a(9),f=a(11),d=a(1),p=a.n(d),h=a(31),b=a(16);function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function v(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(a,!0).forEach((function(t){Object(l.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var y=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).uiCanExit=function(){if(a.canExit||Object(h.isEqual)(a.pristineMessage,a.state.message))return!0;return b.a.confirm("You have not saved this message.","Navigate away and lose changes?","Yes","No")},a.gotoPreviousState=function(){var e=a.props.transition,t=!!e.from().name,n=t?e.from():"mymessages.messagelist",r=t?e.params("from"):{};e.router.stateService.go(n,r)},a.send=function(){var e=a.state.message;n.c.save(v({},e,{date:new Date,read:!0,folder:"sent"})).then((function(){return a.canExit=!0})).then((function(){return a.gotoPreviousState()}))},a.save=function(){var e=a.state.message;n.c.save(v({},e,{date:new Date,read:!0,folder:"drafts"})).then((function(){return a.canExit=!0})).then((function(){return a.gotoPreviousState()}))},a.handleChangeMessage=function(e){return function(t){return a.setState({message:v({},a.state.message,Object(l.a)({},e,t.target.value))})}},a.pristineMessage=v({body:"",to:"",subject:"",from:c.a.emailAddress},a.props.$stateParams.message),a.state={message:v({},a.pristineMessage)},a}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.message;return p.a.createElement("div",{className:"compose"},p.a.createElement("div",{className:"header"},p.a.createElement("div",{className:"flex-h"}," ",p.a.createElement("label",null,"Recipient")," ",p.a.createElement("input",{type:"text",id:"to",name:"to",value:e.to,onChange:this.handleChangeMessage("to")})," "),p.a.createElement("div",{className:"flex-h"}," ",p.a.createElement("label",null,"Subject")," ",p.a.createElement("input",{type:"text",id:"subject",name:"subject",value:e.subject,onChange:this.handleChangeMessage("subject")})," ")),p.a.createElement("div",{className:"body"},p.a.createElement("textarea",{name:"body",id:"body",value:e.body,cols:"30",rows:"20",onChange:this.handleChangeMessage("body")}),p.a.createElement("div",{className:"buttons"},p.a.createElement("button",{className:"btn btn-primary",onClick:this.gotoPreviousState},p.a.createElement("i",{className:"fa fa-times-circle-o"}),p.a.createElement("span",null,"Cancel")),p.a.createElement("button",{className:"btn btn-primary",onClick:this.save},p.a.createElement("i",{className:"fa fa-save"}),p.a.createElement("span",null,"Save as Draft")),p.a.createElement("button",{className:"btn btn-primary",onClick:this.send},p.a.createElement("i",{className:"fa fa-paper-plane-o"}),p.a.createElement("span",null,"Send")))))}}]),t}(d.Component),j=a(6),E=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.folders.map((function(e){return p.a.createElement(j.e,{key:e._id,class:"selected"},p.a.createElement("li",{className:"folder"},p.a.createElement(j.d,{to:".messagelist",params:{folderId:e._id}},p.a.createElement("a",null,p.a.createElement("i",{className:"fa"}),e._id))))}));return p.a.createElement("div",null,p.a.createElement("div",{className:"my-messages"},p.a.createElement("div",{className:"folderlist"},p.a.createElement("ul",{className:"selectlist list-unstyled"},e)),p.a.createElement(j.f,{name:"messagelist",className:"messagelist"})),p.a.createElement(j.f,{name:"messagecontent"}))}}]),t}(d.Component),O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{__html:e.split(/\n/).map((function(e){return"<p>".concat(e,"</p>")})).join("\n")}},x=function(e,t){return e+t.subject},N=function(e,t){return{from:t.to,to:t.from,subject:x(e,t),body:S(t)}},S=function(e){return"\n\n\n\n---------------------------------------\nOriginal message:\nFrom: ".concat(e.from,"\nDate: ").concat(e.date,"\nSubject: ").concat(e.subject,"\n\n").concat(e.body)},k=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).reply=function(){var e=a.props.message,t=N("Re: ",e);a.stateService.go("mymessages.compose",{message:t})},a.forward=function(){var e=a.props.message,t=N("Fwd: ",e);delete t.to,a.stateService.go("mymessages.compose",{message:t})},a.editDraft=function(){var e=a.props.message;a.stateService.go("mymessages.compose",{message:e})},a.remove=function(){var e=a.props.message,t=a.props.nextMessageGetter(e._id),r=t?"mymessages.messagelist.message":"mymessages.messagelist",s={messageId:t};b.a.confirm("Delete?",void 0).then((function(){return n.c.remove(e)})).then((function(){return a.stateService.go(r,s,{reload:"mymessages.messagelist"})}))},a.actions=e.folder.actions.reduce((function(e,t){return e[t]=!0,e}),{}),a.stateService=a.props.transition.router.stateService,a}return Object(f.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.message;t.read=!0,n.c.put(t)}},{key:"render",value:function(){var e=this.props,t=(e.folder,e.message);e.nextMessageGetter;return p.a.createElement("div",{className:"message"},p.a.createElement("div",{className:"header"},p.a.createElement("div",null,p.a.createElement("h4",null,t.subject),p.a.createElement("h5",null,t.from," ",p.a.createElement("i",{className:"fa fa-long-arrow-right"})," ",t.to)),p.a.createElement("div",{className:"line2"},p.a.createElement("div",null,this.actions.edit?p.a.createElement("button",{className:"btn btn-primary",onClick:this.editDraft},p.a.createElement("i",{className:"fa fa-pencil"})," ",p.a.createElement("span",null,"Edit Draft")):null,this.actions.reply?p.a.createElement("button",{className:"btn btn-primary",onClick:this.reply},p.a.createElement("i",{className:"fa fa-reply"})," ",p.a.createElement("span",null,"Reply")):null,this.actions.forward?p.a.createElement("button",{className:"btn btn-primary",onClick:this.forward},p.a.createElement("i",{className:"fa fa-forward"})," ",p.a.createElement("span",null,"Forward")):null,this.actions.delete?p.a.createElement("button",{className:"btn btn-primary",onClick:this.remove},p.a.createElement("i",{className:"fa fa-close"})," ",p.a.createElement("span",null,"Delete")):null))),p.a.createElement("div",{className:"body",dangerouslySetInnerHTML:O(t.body)}))}}]),t}(d.Component),w=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).handleClick=function(e){var t=a.props,n=t.col,r=t.sort;(0,t.onChangeSort)(r==="+".concat(n)?"-".concat(n):"+".concat(n))},a}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.col,a=e.label,n=e.sort,r="";n=="+".concat(t)?r="fa-sort-asc":n=="-".concat(t)&&(r="fa-sort-desc");var s=p.a.createElement("i",{style:{paddingLeft:"0.25em"},className:"fa "+r});return p.a.createElement("span",{onClick:this.handleClick},a," ",s)}}]),t}(d.Component),C=[{label:"",name:"read"},{label:"Sender",name:"from"},{label:"Recipient",name:"to"},{label:"Subject",name:"subject"},{label:"Date",name:"date"}],_=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).colVisible=function(e){return-1!==a.props.columns.indexOf(e)},a.changeSort=function(e){return a.setState({sort:e})},a.formattedContent=function(e,t){return"date"===t?new Date(e[t]).toISOString().slice(0,10):"read"===t?e[t]?"":p.a.createElement("i",{className:"fa fa-circle",style:{fontSize:"50%"}}):e[t]},a.state={sort:c.a.sort},a}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.sort,a=this.props.messages,n=C.filter((function(t){return e.colVisible(t.name)})),r=n.map((function(a){return p.a.createElement("td",{key:a.name},p.a.createElement(w,{label:a.label,col:a.name,sort:t,onChangeSort:e.changeSort}))})),s=a.sort(o(t)).map((function(t){return p.a.createElement(j.e,{key:t._id,class:"active"},p.a.createElement(j.d,{to:".message",params:{messageId:t._id}},p.a.createElement("tr",null,n.map((function(a){return p.a.createElement("td",{key:a.name},e.formattedContent(t,a.name))})))))}));return p.a.createElement("table",null,p.a.createElement("thead",null,p.a.createElement("tr",null,r)),p.a.createElement("tbody",null,s))}}]),t}(d.Component),P=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.folder,a=e.messages;return p.a.createElement("div",{className:"messagelist"},p.a.createElement("div",{className:"messages"},p.a.createElement(_,{columns:t.columns,messages:a})))}}]),t}(d.Component);a.d(t,"states",(function(){return I}));var I=[{name:"mymessages.compose",url:"/compose",params:{message:{}},views:{"!$default.$default":y}},{name:"mymessages.messagelist.message",url:"/:messageId",resolve:[{token:"message",deps:["$transition$"],resolveFn:function(e){return n.c.get(e.params().messageId)}},{token:"nextMessageGetter",deps:["messages"],resolveFn:function(e){return i.proximalMessageId.bind(i,e)}}],views:{"^.^.messagecontent":k}},{name:"mymessages.messagelist",url:"/:folderId",params:{folderId:"inbox"},resolve:[{token:"folder",deps:["$transition$"],resolveFn:function(e){return n.b.get(e.params().folderId)}},{token:"messages",deps:["folder"],resolveFn:function(e){return n.c.byFolder(e)}}],views:{messagelist:P}},{parent:"app",name:"mymessages",url:"/mymessages",resolve:[{token:"folders",resolveFn:function(){return n.b.all()}}],redirectTo:"mymessages.messagelist",component:E,data:{requiresAuth:!0}}]}}]);
//# sourceMappingURL=5.2d220dcc.chunk.js.map