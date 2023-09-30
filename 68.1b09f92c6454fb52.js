"use strict";(self.webpackChunkhspk_23_binary_bots=self.webpackChunkhspk_23_binary_bots||[]).push([[68],{2068:(M,u,o)=>{o.r(u),o.d(u,{SignInComponent:()=>T});var v=o(5861),e=o(4946),t=o(95),_=o(3714),I=o(8057),c=o(707),g=o(5219),h=o(6814),d=o(8489),E=o(4567),y=o(3182),p=o(7018);function C(a,i){1&a&&(e.TgZ(0,"small",15),e._uU(1,"Enter valid email in the required field"),e.qZA())}function P(a,i){1&a&&(e.TgZ(0,"small",15),e._uU(1,"Enter valid password in the required field"),e.qZA())}let T=(()=>{var a;class i{constructor(){this.signInForm=new t.cw({email:new t.NI("",[t.kI.required,t.kI.email]),password:new t.NI("",[t.kI.required,t.kI.minLength(6)])}),this.isAPIBeingCalled=!1,this.authService=(0,e.f3M)(E.e),this.toastService=(0,e.f3M)(g.ez),this.router=(0,e.f3M)(d.F0)}onKeyDown(n){if("Enter"===n)return this.loginUser()}loginUser(){var n=this;return(0,v.Z)(function*(){try{n.isAPIBeingCalled=!0;const{email:r,password:m}=n.signInForm.value,s=yield n.authService.loginUser(r,m);if(s){n.toastService.add({severity:"success",summary:"Success",detail:"Logged in successfully!"});const l=s.user,x=yield l.getIdToken();localStorage.setItem("userInfo",JSON.stringify({uid:l.uid,displayName:l.displayName,email:l.email})),localStorage.setItem("accessToken",x),n.router.navigate(["/"])}}catch(r){if(r instanceof y.ZR)switch(r.code){case"auth/email-already-in-use":n.toastService.add({severity:"error",summary:"Error",detail:"An account already exists with same email!"});break;case"auth/invalid-email":n.toastService.add({severity:"error",summary:"Error",detail:"Invalid email entered!"});break;case"auth/weak-password":n.toastService.add({severity:"error",summary:"Error",detail:"Password entered wasn't strong enough!"});break;case"auth/invalid-login-credentials":n.toastService.add({severity:"error",summary:"Error",detail:"Invalid credentails were provided!"})}n.authService.isAPIBeingCalled=!1,n.router.navigate(["/not-found"])}finally{n.router.navigate(["/"])}})()}}return(a=i).\u0275fac=function(n){return new(n||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-sign-in"]],standalone:!0,features:[e._Bn([g.ez]),e.jDz],decls:21,vars:7,consts:[[1,"container","flex","justify-content-center","align-items-center"],[1,"flex","surface-card","flex-column","gap-3","xl:w-6","md:w-6","sm:w-5","row","p-5","border-round-lg","h-32rem",3,"formGroup","keydown"],[1,"flex","flex-column","gap-4"],[1,"text-center"],[1,"no-underline","text-red-500","hover:text-red-700","text-4xl","cursor-pointer","mt-2","mb-3","fadein","animation-duration-1000",3,"routerLink"],[1,"text-2xl","my-1","sign"],[1,"flex","flex-column","gap-1","h-4rem"],["type","text","pInputText","","formControlName","email","placeholder","Email",1,"w-100","p-inputtext-sm","text-base"],["class","p-error font-medium",4,"ngIf"],["type","password","pInputText","","formControlName","password","placeholder","Password",1,"w-100","p-inputtext-sm","text-base"],[1,"flex","justify-content-center","mt-2"],["styleClass","p-button-rounded  p-button-lg","label","Submit",1,"text-base",3,"loading","onClick"],[1,"text-center","mt-4","mb-1"],[1,"no-underline","text-xl","font-medium",3,"routerLink"],[3,"life"],[1,"p-error","font-medium"]],template:function(n,r){1&n&&(e.TgZ(0,"div",0)(1,"form",1),e.NdJ("keydown",function(s){return r.onKeyDown(s.key)}),e.TgZ(2,"div",2)(3,"h2",3)(4,"a",4),e._uU(5," Meetup Pak"),e.qZA()()(),e.TgZ(6,"div")(7,"h3",5),e._uU(8,"Sign In"),e.qZA()(),e.TgZ(9,"div",6),e._UZ(10,"input",7),e.YNc(11,C,2,0,"small",8),e.qZA(),e.TgZ(12,"div",6),e._UZ(13,"input",9),e.YNc(14,P,2,0,"small",8),e.qZA(),e.TgZ(15,"div",10)(16,"p-button",11),e.NdJ("onClick",function(){return r.loginUser()}),e.qZA()(),e.TgZ(17,"div",12)(18,"a",13),e._uU(19,"Create an account"),e.qZA()()()(),e._UZ(20,"p-toast",14)),2&n&&(e.xp6(1),e.Q6J("formGroup",r.signInForm),e.xp6(3),e.Q6J("routerLink","/"),e.xp6(7),e.Q6J("ngIf",r.signInForm.controls.email.invalid&&(r.signInForm.controls.email.dirty||r.signInForm.controls.email.touched)),e.xp6(3),e.Q6J("ngIf",r.signInForm.controls.password.invalid&&(r.signInForm.controls.password.dirty||r.signInForm.controls.password.touched)),e.xp6(2),e.Q6J("loading",r.isAPIBeingCalled),e.xp6(2),e.Q6J("routerLink","/auth/sign-up"),e.xp6(2),e.Q6J("life",1e4))},dependencies:[t.UX,t._Y,t.Fj,t.JJ,t.JL,t.sg,t.u,t.u5,_.j,_.o,I.nD,c.hJ,c.zx,p.EV,p.FN,d.Bz,d.rH,h.O5],styles:[".container[_ngcontent-%COMP%]{width:100%;height:100vh}"]}),i})()}}]);