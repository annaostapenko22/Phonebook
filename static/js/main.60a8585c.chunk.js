(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{115:function(t,e,a){t.exports={contactItem:"ContactItem_contactItem__2-dhT"}},117:function(t,e,a){t.exports={container:"Notification_container__Ek8_f"}},124:function(t,e,a){t.exports=a(220)},136:function(t,e){},138:function(t,e){},172:function(t,e){},173:function(t,e){},220:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),r=a(9),o=a.n(r),c=a(251),s=a(19),l=a(14),u=a(21),m=a(15),p=a(28),h=a(29),f=a(30),d=a(254),b=a(38),_=a.n(b),v=a(114),E=a.n(v),O=a(247),y=a(115),g=a.n(y),N=function(t){function e(){var t,a;Object(u.a)(this,e);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(p.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(i)))).handleClick=function(t){var e=t.currentTarget.closest("li").dataset.value;a.props.handleDelete(e)},a}return Object(f.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){var t=this.props,e=t.name,a=t.number;return i.a.createElement("div",{className:g.a.contactItem},i.a.createElement("p",null,e,":"),i.a.createElement("p",null,a),i.a.createElement(O.a,{style:{color:"red",backgroundColor:"white",borderRadius:"50%",fontSize:24,cursor:"pointer"},onClick:this.handleClick},"highlight_off"))}}]),e}(n.Component),j=a(252),S=a(55),C=a.n(S),k=function(t){function e(){var t,a;Object(u.a)(this,e);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(p.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(i)))).state={value:""},a.onChangePanel=function(t){var e=t.target.value;a.props.onHandleFilter(e)},a}return Object(f.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:C.a.wrapper},i.a.createElement("h3",{className:C.a.title},"Find contacts by name"),i.a.createElement(j.a,{id:"filled-search",label:"Search contact",type:"search",variant:"outlined",onChange:this.onChangePanel,className:C.a.searchField}))}}]),e}(n.Component),x=a(46),w=a.n(x),F=a(255),P=function(t){function e(){var t,a;Object(u.a)(this,e);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(p.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(i)))).state={isOpen:!1},a}return Object(f.a)(e,t),Object(m.a)(e,[{key:"componentDidMount",value:function(){this.setState({isOpen:!0})}},{key:"render",value:function(){var t=this,e=this.state.isOpen;return i.a.createElement("div",{className:w.a.contactsContainer},i.a.createElement(d.a,{in:e,timeout:400,classNames:_.a},i.a.createElement("h2",{className:w.a.title},"Contacts")),i.a.createElement("div",{className:w.a.wrapper},this.props.contacts.length>1&&i.a.createElement(k,{onHandleFilter:this.props.onHandleFilter}),i.a.createElement(F.a,{component:"ul",className:w.a.list},this.props.value&&this.props.value.map((function(e){return i.a.createElement(d.a,{key:e.id,timeout:400,classNames:_.a},i.a.createElement("li",{"data-value":e.id},i.a.createElement(N,Object.assign({},e,{handleDelete:t.props.handleDelete}))))})))))}}]),e}(n.Component),A=a(39),I=a.n(A),H=a(253),T=(a(219),a(117)),D=a.n(T),V=function(t){var e=t.title;return i.a.createElement("div",{className:D.a.container},i.a.createElement("p",null,e))},J=function(t){function e(){var t,a;Object(u.a)(this,e);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(p.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(i)))).state={contacts:[],filter:"",name:"",number:"",isOpen:!1,error:!1,alreadyExist:!1,notitficationTitle:""},a.deleteItems=function(t){a.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},a.onHandleGetValue=function(t){var e=t.target.value,n=t.target.name;a.setState(Object(l.a)({},n,e))},a.onHandleSubmit=function(t){t.preventDefault();var e=a.state,n=e.name,i=e.number;n&&i?a.state.contacts.find((function(t){return t.name.includes(n)}))?a.showNotification("This contact: ".concat(n," already exists")):(a.getPost({id:E.a.generate(),name:n,number:i}),a.setState({name:""}),a.setState({number:""})):alert("PLease fill all the fields")},a.getPost=function(t){a.setState((function(e){return{contacts:[].concat(Object(s.a)(e.contacts),[t])}}))},a.setFilterState=function(t){a.setState({filter:t})},a.filterItems=function(t,e){if(a.state.contacts){var n=Object(s.a)(e);return t&&(n=n.filter((function(e){return e.name.toLowerCase().includes(t)}))),n}},a.showNotification=function(t){a.setState({notificationTitle:t,alreadyExist:!0}),setTimeout((function(){return a.setState({notificationTitle:"",alreadyExist:!1,name:"",number:""})}),3e3)},a}return Object(f.a)(e,t),Object(m.a)(e,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("users"))||[];this.setState({contacts:t,isOpen:!0,alreadyExist:!1})}},{key:"componentDidUpdate",value:function(t,e){JSON.stringify(e.contacts)!==JSON.stringify(this.state.contacts)&&localStorage.setItem("users",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state,e=t.contacts,a=t.name,n=t.number,r=t.filter,o=this.filterItems(r,e),c=this.state,s=c.isOpen,l=c.alreadyExist;return i.a.createElement("div",null,i.a.createElement(d.a,{in:l,timeout:400,classNames:_.a,unmountOnExit:!0},i.a.createElement(V,{title:this.state.notificationTitle})),i.a.createElement("form",{onSubmit:this.onHandleSubmit,className:I.a.phonebook,noValidate:!0,autoComplete:"off"},i.a.createElement(d.a,{in:s,timeout:400,classNames:_.a,unmountOnExit:!0},i.a.createElement("h2",{className:I.a.title},"Phonebook")),i.a.createElement("div",{className:I.a.wrapper},i.a.createElement(j.a,{id:"outlined-basic1",label:"Name",variant:"outlined",type:"text",onChange:this.onHandleGetValue,value:a,name:"name",className:I.a.input,autoComplete:"string"}),i.a.createElement(j.a,{error:this.state.error,id:"outlined-basic2",label:"Number",variant:"outlined",type:"tel",value:n,onChange:this.onHandleGetValue,name:"number",className:I.a.input}),i.a.createElement(H.a,{variant:"contained",color:"primary",type:"submit"},"Add contact"))),this.state.contacts.length>0&&i.a.createElement(P,{value:o,onHandleFilter:this.setFilterState,handleDelete:this.deleteItems,contacts:this.state.contacts}))}}]),e}(n.Component),L=function(){return i.a.createElement(c.a,{maxWidth:"sm"},i.a.createElement(J,null))};o.a.render(i.a.createElement(L,null),document.getElementById("root"))},38:function(t,e,a){t.exports={enter:"slide-transition_enter__1tiCh",enterActive:"slide-transition_enterActive__kYugx",exit:"slide-transition_exit__3ZmO-",exitActive:"slide-transition_exitActive__gIPEa"}},39:function(t,e,a){t.exports={phonebook:"PhonebookForm_phonebook__oAARH",wrapper:"PhonebookForm_wrapper__1U0wU",input:"PhonebookForm_input__1iAeS",title:"PhonebookForm_title__2TVDH"}},46:function(t,e,a){t.exports={contactsContainer:"ContactList_contactsContainer__2Fspj",wrapper:"ContactList_wrapper__oRNiA",list:"ContactList_list__2Mcon",title:"ContactList_title__3NOVo"}},55:function(t,e,a){t.exports={wrapper:"SearchPanel_wrapper__15YVB",searchField:"SearchPanel_searchField__2E7ae",title:"SearchPanel_title__2b5mT"}}},[[124,1,2]]]);
//# sourceMappingURL=main.60a8585c.chunk.js.map