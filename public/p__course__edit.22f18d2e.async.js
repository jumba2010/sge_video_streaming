(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{AGzQ:function(e,t,a){e.exports={stepForm:"antd-pro-pages-course-edit-index-stepForm",stepFormText:"antd-pro-pages-course-edit-index-stepFormText",result:"antd-pro-pages-course-edit-index-result",desc:"antd-pro-pages-course-edit-index-desc",information:"antd-pro-pages-course-edit-index-information",label:"antd-pro-pages-course-edit-index-label",uppercase:"antd-pro-pages-course-edit-index-uppercase"}},K1lP:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var l=n(a("bx4M"));a("J+/v");var r=n(a("MoRW"));a("bP8k");var u=n(a("gFTJ"));a("fOrg");var i=n(a("+KLJ"));a("14J3");var s=n(a("BMrR")),o=n(a("jehZ"));a("y8nQ");var c=n(a("Vl3Y"));a("5Dmo");var d=n(a("3S7+"));a("Pwec");var f=n(a("CtXQ"));a("+L6B");var m=n(a("2/Rp")),p=n(a("eHn4")),h=n(a("d6i3"));a("/xke");var v=n(a("TeRw")),g=n(a("1l/V")),y=n(a("2Taf")),C=n(a("vZ4D")),E=n(a("rlhR")),k=n(a("MhPg")),x=n(a("l4Ni")),b=n(a("ujKo"));a("5NDa");var w=n(a("5rEg"));a("FJo9");var S=n(a("L41K")),I=n(a("q1tI")),T=a("Hx5s"),L=n(a("dCQc")),R=n(a("AGzQ"));function P(e){var t=F();return function(){var a,n=(0,b.default)(e);if(t){var l=(0,b.default)(this).constructor;a=Reflect.construct(n,arguments,l)}else a=n.apply(this,arguments);return(0,x.default)(this,a)}}function F(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var N=S.default.Step,A=w.default.TextArea;function D(e){var t=e.match(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi),a=t.map(function(e){return e});return a}var q=[{title:"Course Details",content:I.default.createElement("div",null)},{title:"Confirm",content:"2"},{title:"Sucess",content:"3"}],J=function(e){(0,k.default)(a,e);var t=P(a);function a(e){var n;return(0,y.default)(this,a),n=t.call(this,e),n.handleSubmit=function(e){e.preventDefault(),n.props.form.validateFieldsAndScroll(function(e,t){e||console.log("Values:",t)})},n.confirmTransaction=(0,g.default)(h.default.mark(function e(){var t,a,l,r,u;return h.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:window.scrollTo(0,0),n.setState({issaving:!0}),t=n.state,a=t.name,l=t.url,r=t.link,u=t.id,L.default.put("/api/course/"+u,{name:a,link:r,url:l,urls:D(l),createdBy:1}).then(function(e){var t=n.state.current+1;n.setState({current:t,issaving:!1})}).catch(function(e){v.default.error({description:e.message,message:"Error processing the request"})});case 4:case"end":return e.stop()}},e)})),n.state={current:0,id:"",loading:!1,name:"",url:"",link:""},n.handleChangeInput=n.handleChangeInput.bind((0,E.default)(n)),n}return(0,C.default)(a,[{key:"validateName",value:function(e,t){var a=this.props.match.params.coursename;return new Promise(function(){var e=(0,g.default)(h.default.mark(function e(n,l){var r,u;return h.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.split(" ").join("").toLowerCase(),e.next=3,L.default.get("/api/course/"+r);case 3:if(u=e.sent,0==u.data.length||r==a){e.next=9;break}return e.next=7,l("The name must be unique");case 7:e.next=11;break;case 9:return e.next=11,n();case 11:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}())}},{key:"handleChangeInput",value:function(e){this.setState((0,p.default)({},e.target.name,e.target.value))}},{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.coursename;L.default.get("/api/course/"+t).then(function(t){var a=t.data[0];e.setState({name:a.name,url:a.url,link:a.link,id:a._id})})}},{key:"next1",value:function(){if(this.props.form.validateFieldsAndScroll(function(e,t){}),this.state.name&&this.state.url&&this.state.link){var e=this.state.current+1;this.setState({current:e})}}},{key:"prev",value:function(){var e=this.state.current-1;this.setState({current:e})}},{key:"restart",value:function(){var e=this.props,t=e.form;e.dispatch;t.resetFields(),this.setState({current:0,loading:!1,name:"",url:"",link:""}),this.props.history.push("/Welcome")}},{key:"render",value:function(){var e=this,t=this.state.current,a=this.props.form.getFieldDecorator,n={labelCol:{span:6},wrapperCol:{span:14}},p=I.default.createElement(I.default.Fragment,null,I.default.createElement(m.default,{type:"primary",onClick:this.restart.bind(this)},"Create New Course"),I.default.createElement(m.default,{onClick:function(){return e.props.history.push("/Welcome")}},"List all Courses"));return I.default.createElement(T.PageHeaderWrapper,null,I.default.createElement(l.default,null,I.default.createElement(S.default,{current:t,size:"default"},q.map(function(a){return I.default.createElement(N,{key:a.title,title:a.title,icon:"Confirm"===a.title&&4==t&&e.state.issaving?I.default.createElement(f.default,{type:"loading"}):null})})),I.default.createElement("div",{className:"steps-content"},0==t?I.default.createElement(s.default,{style:null!=localStorage.getItem("LAST_STUDENT")?{padding:"0px 0px"}:{padding:"50px 20px"}},I.default.createElement(c.default,(0,o.default)({},n,{onSubmit:this.handleSubmit}),I.default.createElement(c.default.Item,{label:I.default.createElement("span",null,"Course name\xa0",I.default.createElement(d.default,{title:"Course Name"},I.default.createElement(f.default,{type:"question-circle-o"})))},a("name",{initialValue:"".concat(this.state.name),rules:[{required:!0,message:"Please provide the course name!",whitespace:!0},{validator:this.validateName}]})(I.default.createElement(w.default,{name:"name",autoComplete:"off",onChange:this.handleChangeInput}))),I.default.createElement(c.default.Item,{label:"Course Link "},a("link",{initialValue:"".concat(this.state.link),rules:[{required:!0,message:""}]})(I.default.createElement(w.default,{style:{width:"100%"},autoComplete:"off",placeholder:"",name:"link",onChange:this.handleChangeInput}))),I.default.createElement(c.default.Item,{label:I.default.createElement("span",null,"Content URL")},a("url",{initialValue:"".concat(this.state.url),rules:[{required:!0,message:"Please provide the Content URL!",whitespace:!0}]})(I.default.createElement(A,{rows:4,name:"url",onChange:this.handleChangeInput}))),I.default.createElement(c.default.Item,null,I.default.createElement(m.default,{type:"danger",style:{marginLeft:180},onClick:function(){return e.restart()}},"Cancel"),I.default.createElement(m.default,{style:{marginLeft:8},type:"primary",htmlType:"submit",onClick:function(){return e.next1()}},"Next")))):null,1==t?I.default.createElement(c.default,(0,o.default)({},n,{style:{padding:"50px 0"}}),I.default.createElement(i.default,{message:"Please confirm the fields below and then click on Confirm",type:"info",showIcon:!0}),I.default.createElement(u.default,{title:"Course details",style:{marginBottom:10,marginTop:32},column:1,className:R.default.information},I.default.createElement(u.default.Item,{label:"Course Name"},this.state.name),I.default.createElement(u.default.Item,{label:"Course Link"},this.state.link),I.default.createElement(u.default.Item,{label:"Content URL"},this.state.url)),I.default.createElement(c.default.Item,null,I.default.createElement(m.default,{style:{marginLeft:180},onClick:function(){return e.prev()}},"Previous"),I.default.createElement(m.default,{style:{marginLeft:8},loading:this.state.issaving,type:"primary",htmlType:"submit",onClick:function(){return e.confirmTransaction()}},"Confirm"))):null,2==t?I.default.createElement(c.default,(0,o.default)({},n,{style:{padding:"50px 0"}}),I.default.createElement(r.default,{status:"success",title:"Course created Sucessfully!",subTitle:"Course created Sucessfully!",extra:p}),I.default.createElement(c.default.Item,null)):null)))}}]),a}(I.default.Component),B=c.default.create({})(J);t.default=B}}]);