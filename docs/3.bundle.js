(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{39:
/*!********************************!*\
  !*** ./src/contacts/states.js ***!
  \********************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.states=void 0;var r=n(/*! ../global/dataSources */42),a=u(n(/*! ./Contacts */47)),o=u(n(/*! ./ContactView */49)),l=u(n(/*! ./EditContact */51));function u(e){return e&&e.__esModule?e:{default:e}}var c={parent:"app",name:"contacts",url:"/contacts",resolve:[{token:"contacts",resolveFn:function(){return r.ContactsStorage.all()}}],data:{requiresAuth:!0},component:a.default},i={name:"contacts.contact",url:"/:contactId",resolve:[{token:"contact",deps:["$transition$"],resolveFn:function(e){return r.ContactsStorage.get(e.params().contactId)}}],component:o.default},s={name:"contacts.contact.edit",url:"/edit",views:{"^.^.$default":{component:l.default}}},f={name:"contacts.new",url:"/new",component:l.default};t.states=[c,i,s,f]},42:
/*!***********************************!*\
  !*** ./src/global/dataSources.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MessagesStorage=t.FoldersStorage=t.ContactsStorage=void 0;var r,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(/*! ../util/sessionStorage */43),l=n(/*! ./appConfig */9),u=(r=l)&&r.__esModule?r:{default:r};function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var f=function(e){function t(){return c(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"contacts","static/data/contacts.json"))}return s(t,e),t}(o.SessionStorage),p=function(e){function t(){return c(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"folders","static/data/folders.json"))}return s(t,e),t}(o.SessionStorage),d=function(e){function t(){return c(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"messages","static/data/messages.json"))}return s(t,e),a(t,[{key:"byFolder",value:function(e){var t={folder:e._id};return t[-1!==["drafts","sent"].indexOf(e._id)?"from":"to"]=u.default.emailAddress,this.search(t)}}]),t}(o.SessionStorage),m=new f,h=new p,b=new d;t.ContactsStorage=m,t.FoldersStorage=h,t.MessagesStorage=b},43:
/*!************************************!*\
  !*** ./src/util/sessionStorage.js ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SessionStorage=void 0;var r,a=n(/*! ./util */44),o=n(/*! ../global/appConfig */9),l=(r=o)&&r.__esModule?r:{default:r};t.SessionStorage=function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),u.call(this);var o=void 0,l=sessionStorage.getItem(t);if(this._data=void 0,this._idProp="_id",this._eqFn=function(e,t){return e[r._idProp]===t[r._idProp]},this.sessionStorageKey=t,l)try{o=JSON.parse(l)}catch(e){console.log("Unable to parse session messages, retrieving intial data.")}var c=function(e){return(0,a.setProp)(e,"$$hashKey",void 0)};this._data=(o?Promise.resolve(o):fetch(n).then((function(e){return e.json()}))).then(this._commit).then((function(){return JSON.parse(sessionStorage.getItem(t))})).then((function(e){return e.map(c)}))};var u=function(){var e=this;this._commit=function(t){return sessionStorage.setItem(e.sessionStorageKey,JSON.stringify(t)),Promise.resolve(t)},this.all=function(t){return new Promise((function(t,n){setTimeout((function(){return t(e._data)}),l.default.restDelay)})).then(t)},this.search=function(t){var n=function(e,t){return Object.keys(e).reduce((function(n,r){return n&&(a=e[r],-1!==(""+t[r]).indexOf(""+a));var a}),!0)};return e.all((function(e){return e.filter(n.bind(null,t))}))},this.get=function(t){return e.all((function(n){return n.find((function(n){return n[e._idProp]===t}))}))},this.save=function(t){return t[e._idProp]?e.put(t):e.post(t)},this.post=function(t){return t[e._idProp]=(0,a.guid)(),e.all((function(e){return(0,a.pushToArr)(e,t)})).then(e._commit.bind(e))},this.put=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e._eqFn;return e.all((function(r){var a=r.findIndex(n.bind(null,t));if(-1===a)throw Error(t+" not found in "+e);return r[a]=t,e._commit(r).then((function(){return t}))}))},this.remove=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e._eqFn;return e.all((function(r){var a=r.findIndex(n.bind(null,t));if(-1===a)throw Error(t+" not found in "+e);return r.splice(a,1),e._commit(r).then((function(){return t}))}))}}},44:
/*!**************************!*\
  !*** ./src/util/util.js ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.setProp=function(e,t,n){return e[t]=n,e};var r=t.pushToArr=function(e,t){return e.push(t),e},a=(t.uniqReduce=function(e,t){return-1!==e.indexOf(t)?e:r(e,t)},t.flattenReduce=function(e,t){return e.concat(t)},function(e){return"x"!==e&&"y"!==e?"-":Math.floor(16*Math.random()).toString(16).toUpperCase()});t.guid=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".split("").map(a).join("")}},47:
/*!**********************************!*\
  !*** ./src/contacts/Contacts.js ***!
  \**********************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(/*! react */3),o=i(a),l=i(n(/*! prop-types */4)),u=n(/*! @uirouter/react */6),c=i(n(/*! ./components/ContactList */48));function i(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){var e=this.props.contacts;return o.default.createElement("div",{className:"my-contacts flex-h"},o.default.createElement(c.default,{contacts:e,className:"flex nogrow"}),o.default.createElement(u.UIView,null,o.default.createElement("h4",{style:{margin:"1em 2em"}},"Select a contact")))}}]),t}(a.Component);s.propTypes={contacts:l.default.arrayOf(l.default.object)},t.default=s},48:
/*!************************************************!*\
  !*** ./src/contacts/components/ContactList.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(/*! react */3),o=c(a),l=c(n(/*! prop-types */4)),u=n(/*! @uirouter/react */6);function c(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){var e=o.default.createElement(u.UISref,{to:".new"},o.default.createElement("a",null,o.default.createElement("button",{className:"btn btn-primary"},o.default.createElement("i",{className:"fa fa-pencil"}),o.default.createElement("span",null,"New Contact")))),t=this.props.contacts.map((function(e,t){return o.default.createElement("li",{key:t},o.default.createElement(u.UISrefActive,{class:"selected"},o.default.createElement(u.UISref,{to:".contact",params:{contactId:e._id}},o.default.createElement("a",{href:"asd"},e.name.first+" "+e.name.last))))}));return o.default.createElement("div",{className:this.props.className},o.default.createElement("ul",{className:"selectlist list-unstyled flex nogrow"},o.default.createElement("li",null,e),o.default.createElement("li",null," "),t))}}]),t}(a.Component);i.propTypes={contacts:l.default.arrayOf(l.default.object)},t.default=i},49:
/*!*************************************!*\
  !*** ./src/contacts/ContactView.js ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(/*! react */3),o=i(a),l=i(n(/*! prop-types */4)),u=n(/*! @uirouter/react */6),c=i(n(/*! ./components/ContactDetail */50));function i(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){var e=this.props.contact,t=o.default.createElement(u.UISref,{to:"mymessages.compose",params:{message:{to:e.email}}},o.default.createElement("button",{className:"btn btn-primary"},o.default.createElement("i",{className:"fa fa-envelope"}),o.default.createElement("span",null,"Message"))),n=o.default.createElement(u.UISref,{to:".edit"},o.default.createElement("button",{className:"btn btn-primary"},o.default.createElement("i",{className:"fa fa-pencil"}),o.default.createElement("span",null,"Edit Contact")));return o.default.createElement("div",{className:"contact"},o.default.createElement(c.default,{contact:e}),t," ",n)}}]),t}(a.Component);s.propTypes={contact:l.default.object},t.default=s},50:
/*!**************************************************!*\
  !*** ./src/contacts/components/ContactDetail.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(/*! react */3),o=u(a),l=u(n(/*! prop-types */4));function u(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){var e=this.props.contact;return o.default.createElement("div",{className:"flex-h"},o.default.createElement("div",{className:"details"},o.default.createElement("h3",null,e.name.first+" "+e.name.last),o.default.createElement("div",null,o.default.createElement("label",null,"Company"),o.default.createElement("div",null,e.company)),o.default.createElement("div",null,o.default.createElement("label",null,"Age"),o.default.createElement("div",null,e.age)),o.default.createElement("div",null,o.default.createElement("label",null,"Phone"),o.default.createElement("div",null,e.phone)),o.default.createElement("div",null,o.default.createElement("label",null,"Email"),o.default.createElement("div",null,e.email)),o.default.createElement("div",{className:"flex-h"},o.default.createElement("label",null,"Address"),o.default.createElement("div",null,e.address.street,o.default.createElement("br",null),e.address.city+", "+e.address.state+" "+e.address.zip))),o.default.createElement("div",{className:"flex nogrow"},o.default.createElement("img",{src:e.picture})))}}]),t}(a.Component);c.propTypes={contact:l.default.object},t.default=c},51:
/*!*************************************!*\
  !*** ./src/contacts/EditContact.js ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(/*! react */3),o=p(a),l=p(n(/*! prop-types */4)),u=n(/*! @uirouter/react */6),c=n(/*! lodash */45),i=p(n(/*! ./components/ContactForm */53)),s=n(/*! ../global/dataSources */42),f=p(n(/*! ../global/dialogService */11));function p(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.uiCanExit=function(e){if(n.canExit||(0,c.isEqual)(n.state.contact,n.props.contact))return!0;return f.default.confirm("You have unsaved changes to this contact.","Navigate away and lose changes?")},n.handleChangeContact=function(e){n.setState({contact:e})},n.save=function(){var e=n.props.transition.router.stateService;s.ContactsStorage.save(n.state.contact).then((function(){return n.canExit=!0})).then((function(){return e.go("^",null,{reload:!0})}))},n.remove=function(){var e=n.state.contact,t=n.props.transition.router.stateService;f.default.confirm("Delete contact: "+e.name.first+" "+e.name.last).then((function(){return s.ContactsStorage.remove(e)})).then((function(){return n.canExit=!0})).then((function(){return t.go("^.^",null,{reload:!0})}))},n.canExit=!1,n.state={contact:(0,c.cloneDeep)(n.props.contact)},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){var e=this.state.contact;return o.default.createElement("div",{className:"contact"},o.default.createElement(i.default,{contact:e,onContactChange:this.handleChangeContact}),o.default.createElement("hr",null),o.default.createElement("div",null,o.default.createElement(u.UISref,{to:"^"},o.default.createElement("button",{className:"btn btn-primary"},o.default.createElement("i",{className:"fa fa-close"}),o.default.createElement("span",null,"Cancel"))),o.default.createElement("button",{className:"btn btn-primary",onClick:this.save},o.default.createElement("i",{className:"fa fa-save"}),o.default.createElement("span",null,"Save")),o.default.createElement("button",{className:"btn btn-primary",onClick:this.remove},o.default.createElement("i",{className:"fa fa-close"}),o.default.createElement("span",null,"Delete"))))}}]),t}(a.Component);d.propTypes={contact:l.default.object},t.default=d},53:
/*!************************************************!*\
  !*** ./src/contacts/components/ContactForm.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(/*! react */3),l=i(o),u=i(n(/*! prop-types */4)),c=n(/*! lodash */45);function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f=[{label:"First",path:"name.first"},{label:"Last",path:"name.last"},{label:"Company",path:"company"},{label:"Age",path:"age"},{label:"Phone",path:"phone"},{label:"Email",path:"email"},{label:"Street",path:"address.street"},{label:"City",path:"address.city"},{label:"State",path:"address.state"},{label:"Zip",path:"address.zip"},{label:"Image",path:"picture"}],p=function(e){function t(){var e,n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,l=Array(o),u=0;u<o;u++)l[u]=arguments[u];return n=a=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),a.handleChangeFor=function(e){var t=a.props,n=t.contact,o=t.onContactChange;return function(t){o((0,c.set)(r({},n),e,t.target.value))}},s(a,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"render",value:function(){var e=this,t=this.props.contact,n=f.map((function(n){return l.default.createElement("div",{key:n.path},l.default.createElement("label",null,n.label),l.default.createElement("input",{type:"text",value:(0,c.get)(t,n.path),onChange:e.handleChangeFor(n.path)}))}));return l.default.createElement("div",{className:"details"},n)}}]),t}(o.Component);p.propTypes={contact:u.default.object,onContactChange:u.default.func},t.default=p}}]);
//# sourceMappingURL=3.bundle.js.map