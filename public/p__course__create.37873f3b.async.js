(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{XI8P:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var r=n(a("bx4M"));a("J+/v");var l=n(a("MoRW"));a("bP8k");var u=n(a("gFTJ"));a("fOrg");var i=n(a("+KLJ"));a("14J3");var s=n(a("BMrR")),o=n(a("jehZ"));a("y8nQ");var c=n(a("Vl3Y"));a("5Dmo");var f=n(a("3S7+"));a("Pwec");var d=n(a("CtXQ"));a("+L6B");var p=n(a("2/Rp")),m=n(a("eHn4")),h=n(a("d6i3"));a("/xke");var v=n(a("TeRw")),g=n(a("1l/V")),y=n(a("2Taf")),C=n(a("vZ4D")),E=n(a("rlhR")),k=n(a("MhPg")),b=n(a("l4Ni")),w=n(a("ujKo"));a("5NDa");var x=n(a("5rEg"));a("FJo9");var I=n(a("L41K")),S=n(a("q1tI")),P=a("Hx5s"),T=F(a("dCQc")),L=n(a("mopw"));function R(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(R=function(e){return e?a:t})(e)}function F(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=R(t);if(a&&a.has(e))return a.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var u=r?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(n,l,u):n[l]=e[l]}return n.default=e,a&&a.set(e,n),n}function N(e){var t=O();return function(){var a,n=(0,w.default)(e);if(t){var r=(0,w.default)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return(0,b.default)(this,a)}}function O(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var j=I.default.Step,D=x.default.TextArea;function M(e){var t=e.match(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi),a=t.map(function(e){return e});return a}var q=[{title:"Course Details",content:S.default.createElement("div",null)},{title:"Confirm",content:"2"},{title:"Sucess",content:"3"}],J=function(e){(0,k.default)(a,e);var t=N(a);function a(e){var n;return(0,y.default)(this,a),n=t.call(this,e),n.handleSubmit=function(e){e.preventDefault(),n.props.form.validateFieldsAndScroll(function(e,t){e||console.log("Values:",t)})},n.confirmTransaction=(0,g.default)(h.default.mark(function e(){var t,a,r,l;return h.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:window.scrollTo(0,0),n.setState({issaving:!0}),t=n.state,a=t.name,r=t.url,l=t.link,T.default.post("/api/course",{name:a,link:l,url:r,urls:M(r),createdBy:1}).then(function(e){var t=n.state.current+1;n.setState({current:t,issaving:!1})}).catch(function(e){v.default.error({description:e.message,message:"Error processing the request"})});case 4:case"end":return e.stop()}},e)})),n.state={current:0,loading:!1,name:"",url:"",link:""},n.handleChangeInput=n.handleChangeInput.bind((0,E.default)(n)),n}return(0,C.default)(a,[{key:"validateName",value:function(e,t){return new Promise(function(){var e=(0,g.default)(h.default.mark(function e(a,n){var r,l;return h.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.split(" ").join("").toLowerCase(),e.next=3,T.default.get("/api/course/"+r);case 3:if(l=e.sent,0==l.data.length){e.next=9;break}return e.next=7,n("The name must be unique");case 7:e.next=11;break;case 9:return e.next=11,a();case 11:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}())}},{key:"handleChangeInput",value:function(e){this.setState((0,m.default)({},e.target.name,e.target.value)),"name"==e.target.name&&this.setState({link:T.baseURL+"/"+e.target.value})}},{key:"next1",value:function(){if(this.props.form.validateFieldsAndScroll(function(e,t){}),this.state.name&&this.state.url&&this.state.link){var e=this.state.current+1;this.setState({current:e})}}},{key:"prev",value:function(){var e=this.state.current-1;this.setState({current:e})}},{key:"restart",value:function(){var e=this.props,t=e.form;e.dispatch;t.resetFields(),this.setState({current:0,loading:!1,name:"",url:"",link:""}),this.props.history.push("/Welcome")}},{key:"render",value:function(){var e=this,t=this.state.current,a=this.props.form.getFieldDecorator,n={labelCol:{span:6},wrapperCol:{span:14}},m=S.default.createElement(S.default.Fragment,null,S.default.createElement(p.default,{type:"primary",onClick:this.restart.bind(this)},"Create New Course"),S.default.createElement(p.default,{onClick:function(){return e.props.history.push("/Welcome")}},"List all Courses"));return S.default.createElement(P.PageHeaderWrapper,null,S.default.createElement(r.default,null,S.default.createElement(I.default,{current:t,size:"default"},q.map(function(a){return S.default.createElement(j,{key:a.title,title:a.title,icon:"Confirm"===a.title&&4==t&&e.state.issaving?S.default.createElement(d.default,{type:"loading"}):null})})),S.default.createElement("div",{className:"steps-content"},0==t?S.default.createElement(s.default,{style:null!=localStorage.getItem("LAST_STUDENT")?{padding:"0px 0px"}:{padding:"50px 20px"}},S.default.createElement(c.default,(0,o.default)({},n,{onSubmit:this.handleSubmit}),S.default.createElement(c.default.Item,{label:S.default.createElement("span",null,"Course name\xa0",S.default.createElement(f.default,{title:"Course Name"},S.default.createElement(d.default,{type:"question-circle-o"})))},a("name",{initialValue:"".concat(this.state.name),rules:[{required:!0,message:"Please provide the course name!",whitespace:!0},{validator:this.validateName}]})(S.default.createElement(x.default,{name:"name",autoComplete:"off",onChange:this.handleChangeInput}))),S.default.createElement(c.default.Item,{label:"Course Link "},a("link",{initialValue:"".concat(this.state.link),rules:[{required:!0,message:""}]})(S.default.createElement(x.default,{style:{width:"100%"},autoComplete:"off",placeholder:"",name:"link",onChange:this.handleChangeInput}))),S.default.createElement(c.default.Item,{label:S.default.createElement("span",null,"Content URL")},a("url",{initialValue:"".concat(this.state.url),rules:[{required:!0,message:"Please provide the Content URL!",whitespace:!0}]})(S.default.createElement(D,{rows:4,name:"url",onChange:this.handleChangeInput}))),S.default.createElement(c.default.Item,null,S.default.createElement(p.default,{type:"danger",style:{marginLeft:180},onClick:function(){return e.restart()}},"Cancel"),S.default.createElement(p.default,{style:{marginLeft:8},type:"primary",htmlType:"submit",onClick:function(){return e.next1()}},"Next")))):null,1==t?S.default.createElement(c.default,(0,o.default)({},n,{style:{padding:"50px 0"}}),S.default.createElement(i.default,{message:"Please confirm the fields below and then click on Confirm",type:"info",showIcon:!0}),S.default.createElement(u.default,{title:"Course details",style:{marginBottom:10,marginTop:32},column:1,className:L.default.information},S.default.createElement(u.default.Item,{label:"Course Name"},this.state.name),S.default.createElement(u.default.Item,{label:"Course Link"},this.state.link),S.default.createElement(u.default.Item,{label:"Content URL"},this.state.url)),S.default.createElement(c.default.Item,null,S.default.createElement(p.default,{style:{marginLeft:180},onClick:function(){return e.prev()}},"Previous"),S.default.createElement(p.default,{style:{marginLeft:8},loading:this.state.issaving,type:"primary",htmlType:"submit",onClick:function(){return e.confirmTransaction()}},"Confirm"))):null,2==t?S.default.createElement(c.default,(0,o.default)({},n,{style:{padding:"50px 0"}}),S.default.createElement(l.default,{status:"success",title:"Course created Sucessfully!",subTitle:"Course created Sucessfully!",extra:m}),S.default.createElement(c.default.Item,null)):null)))}}]),a}(S.default.Component),W=c.default.create({})(J);t.default=W},mopw:function(e,t,a){e.exports={stepForm:"antd-pro-pages-course-create-index-stepForm",stepFormText:"antd-pro-pages-course-create-index-stepFormText",result:"antd-pro-pages-course-create-index-result",desc:"antd-pro-pages-course-create-index-desc",information:"antd-pro-pages-course-create-index-information",label:"antd-pro-pages-course-create-index-label",uppercase:"antd-pro-pages-course-create-index-uppercase"}}}]);