"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6140],{6140:(O,c,i)=>{i.r(c),i.d(c,{HomePageModule:()=>y});var l=i(6019),m=i(9010),g=i(2651),s=i(790),d=i(4762),t=i(865);const f=["audioOption"],u=function(n){return{"active-title":n}},p=function(n){return{"active-content":n}},P=function(n){return{"active-circle":n}},C=function(n){return{rotate360del:n}},v=function(n){return{rotate360:n}},M=[{path:"",component:(()=>{class n{constructor(e){this.router=e,this.click=!1,this.active=!1}ngOnInit(){setTimeout(()=>{this.active=!0},500)}clickCircle(){this.click=!this.click,this.click?this.audioPlayerRef.nativeElement.play():this.audioPlayerRef.nativeElement.pause(),setTimeout(()=>(0,d.mG)(this,void 0,void 0,function*(){yield this.router.navigateByUrl("/chistmas")}),2500)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(s.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-home"]],viewQuery:function(e,o){if(1&e&&t.Gf(f,5),2&e){let r;t.iGM(r=t.CRH())&&(o.audioPlayerRef=r.first)}},decls:16,vars:15,consts:[[1,"background",2,"background-image","linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('../../../assets/images/bgg.jpg')","width","100%","height","100%","position","absolute","top","0"],[1,"container"],[1,"title",3,"ngClass"],[1,"content",3,"ngClass"],[1,"circle",3,"ngClass"],[1,"img",3,"click"],["src","../../../assets/images/circle.png","alt","",3,"ngClass"],[1,"strock",3,"ngClass"],["audioOption",""],["src","../../../assets/images/audio.mp3","type","audio/mp3"]],template:function(e,o){1&e&&(t.TgZ(0,"ion-content"),t.TgZ(1,"div",0),t.TgZ(2,"div",1),t.TgZ(3,"div",2),t.TgZ(4,"h1"),t._uU(5,"Hello my honey!"),t.qZA(),t.qZA(),t.TgZ(6,"div",3),t.TgZ(7,"p"),t._uU(8,"Please click in circle"),t.qZA(),t.qZA(),t.TgZ(9,"div",4),t.TgZ(10,"div",5),t.NdJ("click",function(){return o.clickCircle()}),t._UZ(11,"img",6),t._UZ(12,"div",7),t.qZA(),t.TgZ(13,"audio",null,8),t._UZ(15,"source",9),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(3),t.Q6J("ngClass",t.VKq(5,u,o.active)),t.xp6(3),t.Q6J("ngClass",t.VKq(7,p,o.active)),t.xp6(3),t.Q6J("ngClass",t.VKq(9,P,o.active)),t.xp6(2),t.Q6J("ngClass",t.VKq(11,C,o.click)),t.xp6(1),t.Q6J("ngClass",t.VKq(13,v,o.click)))},directives:[g.W2,l.mk],styles:['ion-content[_ngcontent-%COMP%]{--color: white;font-family:"AV";font-size:20px}ion-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-top:90px;transform:translateY(50px);visibility:hidden;opacity:0;transition:.5s}ion-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:40px;font-family:"AV";color:#fff}ion-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{transform:translateY(50px);visibility:hidden;transition:.5s;opacity:0}ion-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:15px}ion-content[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]{transform:translateY(50px);visibility:hidden;transition:.5s;margin-top:120px;opacity:0}ion-content[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{width:250px;height:250px;margin:0 auto;position:relative}ion-content[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}ion-content[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   .strock[_ngcontent-%COMP%]{position:absolute;width:100%;height:2px;background:white;top:50%;transform:rotate(140deg);transition:.5s}ion-content[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   .strock-click[_ngcontent-%COMP%]{width:0%;top:50%;left:50%;animation-delay:.2s;transform:rotate(0);animation-duration:.5s;transition:1s}ion-content[_ngcontent-%COMP%]   .active-title[_ngcontent-%COMP%]{transform:translateY(0);visibility:visible;transition-duration:.8s;opacity:1}ion-content[_ngcontent-%COMP%]   .active-content[_ngcontent-%COMP%]{transform:translateY(0);visibility:visible;transition-delay:.7s;transition-duration:.8s;opacity:1}ion-content[_ngcontent-%COMP%]   .active-circle[_ngcontent-%COMP%]{transform:translateY(0);visibility:visible;transition-delay:1.4s;transition-duration:.8s;opacity:1}.rotate360[_ngcontent-%COMP%]{animation-delay:.5s;animation:rotate360 10s linear 0s infinite;-webkit-animation:rotate360 10s linear 0s infinite;-moz-animation:rotate360 10s linear 0s infinite;-o-animation:rotate360 10s linear 0s infinite}@keyframes rotate360{0%{-webkit-transform:rotate(140deg);-moz-transform:rotate(140deg);-o-transform:rotate(140deg)}to{-webkit-transform:rotate(-360deg);-moz-transform:rotate(-360deg);-o-transform:rotate(-360deg)}}.rotate360del[_ngcontent-%COMP%]{animation-delay:.5s;animation:rotate360del 10s linear 0s infinite;-webkit-animation:rotate360del 10s linear 0s infinite;-moz-animation:rotate360del 10s linear 0s infinite;-o-animation:rotate360del 10s linear 0s infinite}@keyframes rotate360del{0%{-webkit-transform:rotate(-360deg);-moz-transform:rotate(-360deg);-o-transform:rotate(-360deg)}to{-webkit-transform:rotate(140deg);-moz-transform:rotate(140deg);-o-transform:rotate(140deg)}}']}),n})()}];let h=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[s.Bz.forChild(M)],s.Bz]}),n})(),y=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[l.ez,m.u5,g.Pc,h]]}),n})()}}]);