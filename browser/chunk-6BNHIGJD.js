import{a as se}from"./chunk-T45QMDP2.js";import{a as pe}from"./chunk-P3K7HXJE.js";import{a as D}from"./chunk-2CQVPOMW.js";import{B as b,C as O,D as ne,E as T,I as S,K as j,L as R,M as J,N as L,O as g,P as k,Q as w,R as V,S as A,T as B,U as re,V as ae,W as me,X as q,Y as G,Z as le,_ as ce,a as X,b as Y,c as Z,d as y,e as N,f as F,g as ee,h as te,i as a,j as m,k as d,l as I,m as f,n as l,o,p as i,q as u,r as ie,s as c,t as oe,u as r,v as _,w as v,y as x,z as E}from"./chunk-5QNJG5PM.js";var M=class s{constructor(t){this.http=t}apiUrl=`${D}/messages`;sendMessage(t,e){return this.http.post(`${this.apiUrl}/send`,{to:t,body:e})}sendTemplateMessage(t,e){return this.http.post(`${this.apiUrl}/send-template`,{to:t,clientName:e})}getChatHistory(t){return this.http.get(`${this.apiUrl}/history/${t}`).pipe(Z(e=>e.map(n=>Y(X({},n),{timestamp:new Date(n.timestamp.seconds*1e3)}))))}static \u0275fac=function(e){return new(e||s)(F(T))};static \u0275prov=y({token:s,factory:s.\u0275fac,providedIn:"root"})};function ve(s,t){if(s&1&&(o(0,"li",4)(1,"strong"),r(2),x(3,"date"),i(),r(4),i()),s&2){let e=t.$implicit;a(2),v("",E(3,2,e.timestamp,"short"),":"),a(2),v(" ",e.body," ")}}var $=class s{constructor(t,e){this.messageService=t;this.route=e}messages=[];phoneNumber=null;ngOnInit(){this.phoneNumber=this.route.snapshot.paramMap.get("phoneNumber"),this.phoneNumber&&this.loadChatHistory(this.phoneNumber)}loadChatHistory(t){this.messageService.getChatHistory(t).subscribe(e=>{this.messages=e})}static \u0275fac=function(e){return new(e||s)(m(M),m(S))};static \u0275cmp=d({type:s,selectors:[["app-message-log"]],standalone:!1,decls:7,vars:2,consts:[[1,"container","mt-4"],["routerLink","/client",1,"btn","btn-primary","mb-3"],[1,"list-group"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"]],template:function(e,n){e&1&&(o(0,"div",0)(1,"button",1),r(2,"Back"),i(),o(3,"h2"),r(4),i(),o(5,"ul",2),f(6,ve,5,5,"li",3),i()()),e&2&&(a(4),v("Message Log for ",n.phoneNumber,""),a(2),l("ngForOf",n.messages))},dependencies:[b,R,O],encapsulation:2})};function Se(s,t){if(s&1&&(o(0,"option",13),r(1),i()),s&2){let e=t.$implicit;l("value",e.id),a(),v(" ",e.name," ")}}var H=class s{constructor(t,e,n,p,W,ye){this.fb=t;this.messageService=e;this.templateService=n;this.clientService=p;this.router=W;this.route=ye;this.messageForm=this.fb.group({to:["",g.required],body:["",g.required],template:[""]})}messageForm;templates=[];phoneNumber=null;client=null;ngOnInit(){this.phoneNumber=this.route.snapshot.paramMap.get("phoneNumber"),this.phoneNumber&&(this.messageForm.patchValue({to:this.phoneNumber}),this.clientService.getClients().subscribe(t=>{let e=t.find(n=>n.phoneNumber===this.phoneNumber);e&&(this.client=e)})),this.templateService.getTemplates().subscribe(t=>{this.templates=t})}sendMessage(){if(this.messageForm.valid){let{to:t,body:e}=this.messageForm.value;this.messageService.sendMessage(t,e).subscribe(()=>{alert("Message sent successfully!"),this.router.navigate(["/messages",t])})}}onTemplateSelect(){let t=this.messageForm.get("template")?.value,e=this.templates.find(n=>n.id===t);if(e&&this.client){let n=e.content.replace("[Client's Name]",this.client.name);this.messageForm.patchValue({body:n})}}cancel(){this.router.navigate(["/clients"])}static \u0275fac=function(e){return new(e||s)(m(G),m(M),m(pe),m(se),m(j),m(S))};static \u0275cmp=d({type:s,selectors:[["app-send-message"]],standalone:!1,decls:23,vars:3,consts:[[1,"container","mt-4"],[3,"ngSubmit","formGroup"],[1,"form-group"],["for","to"],["type","text","id","to","formControlName","to","required","",1,"form-control"],["for","template"],["id","template","formControlName","template",1,"form-control",3,"change"],["value",""],[3,"value",4,"ngFor","ngForOf"],["for","body"],["id","body","formControlName","body","required","",1,"form-control"],["type","submit",1,"btn","btn-primary","mt-3",3,"disabled"],["type","button",1,"btn","btn-warning","mt-3","ms-2",3,"click"],[3,"value"]],template:function(e,n){e&1&&(o(0,"div",0)(1,"h2"),r(2,"Send Message"),i(),o(3,"form",1),c("ngSubmit",function(){return n.sendMessage()}),o(4,"div",2)(5,"label",3),r(6,"Phone Number"),i(),u(7,"input",4),i(),o(8,"div",2)(9,"label",5),r(10,"Select Template"),i(),o(11,"select",6),c("change",function(){return n.onTemplateSelect()}),o(12,"option",7),r(13,"-- Select a Template --"),i(),f(14,Se,2,2,"option",8),i()(),o(15,"div",2)(16,"label",9),r(17,"Message"),i(),u(18,"textarea",10),i(),o(19,"button",11),r(20,"Send Message"),i(),o(21,"button",12),c("click",function(){return n.cancel()}),r(22,"Cancel"),i()()()),e&2&&(a(3),l("formGroup",n.messageForm),a(11),l("ngForOf",n.templates),a(5),l("disabled",n.messageForm.invalid))},dependencies:[b,V,ae,me,L,re,k,w,q,A,B],encapsulation:2})};var C=class s{constructor(t){this.http=t}apiUrl=`${D}/schedule`;scheduleMessage(t){return this.http.post(this.apiUrl,t)}getScheduledMessages(){return this.http.get(this.apiUrl)}cancelScheduledMessage(t){return this.http.delete(`${this.apiUrl}/${t}`)}static \u0275fac=function(e){return new(e||s)(F(T))};static \u0275prov=y({token:s,factory:s.\u0275fac,providedIn:"root"})};var U=class s{constructor(t,e,n,p){this.fb=t;this.scheduleService=e;this.router=n;this.route=p;this.scheduleForm=this.fb.group({to:["",g.required],body:["",g.required],date:["",g.required]})}scheduleForm;phoneNumber=null;ngOnInit(){this.phoneNumber=this.route.snapshot.paramMap.get("phoneNumber"),this.phoneNumber&&this.scheduleForm.patchValue({to:this.phoneNumber})}onSubmit(){if(this.scheduleForm.valid){let t=this.scheduleForm.value,e=new Date(t.date);console.log("schedule date",e),t.date=e,this.scheduleService.scheduleMessage(t).subscribe(n=>{console.log("schedule message response",n),n&&n.jobId?(alert("Message scheduled successfully!"),this.router.navigate(["/messages/scheduled-messages"])):alert("Failed to schedule message. Please try again.")},n=>{console.error("Error scheduling message:",n),alert("An error occurred while scheduling the message.")})}}static \u0275fac=function(e){return new(e||s)(m(G),m(C),m(j),m(S))};static \u0275cmp=d({type:s,selectors:[["app-schedule-message"]],standalone:!1,decls:20,vars:2,consts:[[1,"container","mt-4"],[3,"ngSubmit","formGroup"],[1,"form-group"],["for","to"],["type","text","id","to","formControlName","to","required","",1,"form-control"],["for","body"],["id","body","formControlName","body","required","",1,"form-control"],["for","date"],["type","datetime-local","id","date","formControlName","date","required","",1,"form-control"],["type","submit",1,"btn","btn-primary","mt-3",3,"disabled"],["type","button",1,"btn","btn-secondary","mt-3","ms-2",3,"click"]],template:function(e,n){e&1&&(o(0,"div",0)(1,"h2"),r(2,"Schedule Message"),i(),o(3,"form",1),c("ngSubmit",function(){return n.onSubmit()}),o(4,"div",2)(5,"label",3),r(6,"Phone Number"),i(),u(7,"input",4),i(),o(8,"div",2)(9,"label",5),r(10,"Message"),i(),u(11,"textarea",6),i(),o(12,"div",2)(13,"label",7),r(14,"Schedule Date and Time"),i(),u(15,"input",8),i(),o(16,"button",9),r(17,"Schedule Message"),i(),o(18,"button",10),c("click",function(){return n.router.navigate(["/client",n.phoneNumber])}),r(19,"Cancel"),i()()()),e&2&&(a(3),l("formGroup",n.scheduleForm),a(13),l("disabled",n.scheduleForm.invalid))},dependencies:[V,L,k,w,q,A,B],encapsulation:2})};function Me(s,t){if(s&1){let e=ie();o(0,"tr")(1,"td"),r(2),i(),o(3,"td"),r(4),i(),o(5,"td"),r(6),x(7,"date"),i(),o(8,"td")(9,"button",4),c("click",function(){let p=ee(e).$implicit,W=oe();return te(W.cancelScheduledMessage(p.jobId))}),r(10,"Cancel"),i()()()}if(s&2){let e=t.$implicit;a(2),_(e.to),a(2),_(e.body),a(2),_(E(7,3,e.date,"medium"))}}var P=class s{constructor(t){this.scheduleService=t}scheduledMessages=[];ngOnInit(){this.loadFutureScheduledMessages(),console.log("Schedule messages")}loadFutureScheduledMessages(){this.scheduleService.getScheduledMessages().subscribe(t=>{this.scheduledMessages=t})}cancelScheduledMessage(t){this.scheduleService.cancelScheduledMessage(t).subscribe(()=>{this.loadFutureScheduledMessages()})}static \u0275fac=function(e){return new(e||s)(m(C))};static \u0275cmp=d({type:s,selectors:[["app-scheduled-messages-list"]],standalone:!1,decls:18,vars:1,consts:[[1,"container","mt-4"],["routerLink","/client",1,"btn","btn-primary","mb-3"],[1,"table","table-striped"],[4,"ngFor","ngForOf"],[1,"btn","btn-danger","btn-sm",3,"click"]],template:function(e,n){e&1&&(o(0,"div",0)(1,"button",1),r(2,"Back"),i(),o(3,"h2"),r(4,"Future Scheduled Messages"),i(),o(5,"table",2)(6,"thead")(7,"tr")(8,"th"),r(9,"To"),i(),o(10,"th"),r(11,"Message"),i(),o(12,"th"),r(13,"Scheduled Date"),i(),o(14,"th"),r(15,"Actions"),i()()(),o(16,"tbody"),f(17,Me,11,6,"tr",3),i()()()),e&2&&(a(17),l("ngForOf",n.scheduledMessages))},dependencies:[b,R,O],encapsulation:2})};var Ce=[{path:"scheduled-messages",component:P},{path:":phoneNumber",component:$},{path:"send/:phoneNumber",component:H},{path:"schedule/:phoneNumber",component:U}],z=class s{static \u0275fac=function(e){return new(e||s)};static \u0275mod=I({type:s});static \u0275inj=N({imports:[J.forChild(Ce),J]})};var he=class s{static \u0275fac=function(e){return new(e||s)};static \u0275mod=I({type:s});static \u0275inj=N({imports:[ne,z,le,ce]})};export{he as MessagesModule};
