(function(){"use strict";var n={1843:function(n,t,o){var e=o(9242),r=o(3396);function a(n,t){const o=(0,r.up)("router-link"),e=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("nav",null,[(0,r.Wm)(o,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Home")])),_:1}),(0,r.Uk)(" | "),(0,r.Wm)(o,{to:"/about"},{default:(0,r.w5)((()=>[(0,r.Uk)("About Me!")])),_:1}),(0,r.Uk)(" | "),(0,r.Wm)(o,{to:"/piano"},{default:(0,r.w5)((()=>[(0,r.Uk)("Rainbow Music Notes!")])),_:1}),(0,r.Uk)(" | "),(0,r.Wm)(o,{to:"/trivia"},{default:(0,r.w5)((()=>[(0,r.Uk)("Trivia Game!")])),_:1}),(0,r.Uk)(" | "),(0,r.Wm)(o,{to:"/realpiano"},{default:(0,r.w5)((()=>[(0,r.Uk)("Piano!")])),_:1}),(0,r.Uk)(" | "),(0,r.Wm)(o,{to:"/racecar"},{default:(0,r.w5)((()=>[(0,r.Uk)("Race Car!")])),_:1})]),(0,r.Wm)(e)],64)}var i=o(89);const l={},c=(0,i.Z)(l,[["render",a]]);var u=c,s=o(2483),d=o.p+"img/cropedphoto.3a86e775.jpg";const p=n=>((0,r.dD)("data-v-0fef047a"),n=n(),(0,r.Cn)(),n),h={class:"home"},f=p((()=>(0,r._)("img",{alt:"Lindsay",src:d},null,-1)));function m(n,t,o,e,a,i){const l=(0,r.up)("HelloWorld");return(0,r.wg)(),(0,r.iD)("div",h,[f,(0,r.Wm)(l,{msg:"Lindsay Patterson Abdou"})])}var b=o(7139);const v=n=>((0,r.dD)("data-v-3d707a5c"),n=n(),(0,r.Cn)(),n),g={class:"hello"},k=v((()=>(0,r._)("p",null,[(0,r.Uk)(" To visit my singer site click "),(0,r._)("a",{href:"https://lindsayvoice.com",target:"_blank",rel:"noopener"},"HERE!!"),(0,r.Uk)(". ")],-1))),_=v((()=>(0,r._)("div",{class:"extras"},[(0,r._)("h3",null,"Extras"),(0,r._)("ul",null,[(0,r._)("li",null,[(0,r._)("a",{href:"https://www.linkedin.com/in/lindsay-abdou/",target:"_blank",rel:"noopener"},"Linkedin")]),(0,r._)("li",null,[(0,r._)("a",{href:"https://github.com/MezzoAbdou",target:"_blank",rel:"noopener"},"Github")])])],-1)));function w(n,t,o,e,a,i){return(0,r.wg)(),(0,r.iD)("div",g,[(0,r._)("h1",null,(0,b.zw)(o.msg),1),k,_])}var y={name:"HelloWorld",props:{msg:String}};const C=(0,i.Z)(y,[["render",w],["__scopeId","data-v-3d707a5c"]]);var D=C,j={name:"HomeView",components:{HelloWorld:D}};const F=(0,i.Z)(j,[["render",m],["__scopeId","data-v-0fef047a"]]);var W=F;const A={class:"piano"},E=(0,r._)("h1",null," Click a note! ",-1);function O(n,t,o,e,a,i){const l=(0,r.up)("piano-function");return(0,r.wg)(),(0,r.iD)("div",A,[E,(0,r.Wm)(l)])}const P={class:"piano"},U=["to","onClick"];function T(n,t,o,e,a,i){return(0,r.wg)(),(0,r.iD)("div",P,[(0,r._)("ul",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.colors,((n,t)=>((0,r.wg)(),(0,r.iD)("li",{key:t,style:(0,b.j5)({"background-color":n}),to:a.notes[t],onClick:n=>i.playSound(t)},[(0,r._)("h1",null,(0,b.zw)(a.notes[t]),1)],12,U)))),128))])])}var B={data(){return{colors:["#A93226","#E67E22","#F1C40F","#28B463","#3498DB"],notes:["C","D","E","F","G"]}},methods:{playSound(n){const t=new Audio;t.src="/note"+n+".mp3",t.load(),t.play()}}};const H=(0,i.Z)(B,[["render",T],["__scopeId","data-v-5178ab10"]]);var Z=H,S={components:{PianoFunction:Z}};const G=(0,i.Z)(S,[["render",O]]);var M=G;const L={class:"game"},x=(0,r._)("h1",null,"Can you answer the questions!?",-1),q={class:"trivia"},R=["onClick"];function z(n,t,o,e,a,i){const l=(0,r.up)("vue-flashcard");return(0,r.wg)(),(0,r.iD)("div",L,[x,(0,r._)("div",q,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.questions,((n,t)=>((0,r.wg)(),(0,r.iD)("div",{class:"flashcard",key:t,onClick:n=>i.playSound(t)},[(0,r.Wm)(l,{class:"card",headerFront:a.questions[t],headerBack:a.answers[t],imgFront:a.pictures[t],imgBack:a.pictures[t],footerFront:"Click to show Answer",footerBack:"Click to see Question",colorBack:"orchid",colorFront:"#D4E6F1"},null,8,["headerFront","headerBack","imgFront","imgBack"])],8,R)))),128))])])}var I=o(4837),N=o.p+"img/pic1.a48a7a56.webp",Y=o.p+"img/lionel.72d7bc45.webp",$=o.p+"img/dogs.b203d8e6.webp",K=o.p+"img/pikachu.2e791422.webp",Q={data(){return{questions:["Who is this and what does she do?","Who is this and where does he live?","How many dogs are in this picture?","Who is this and what type of animal?"],answers:["Whitney Houston, singer","Lionel Messi, Argentina","8","Pikachu, a Pokemon"],pic1:N,lionel:Y,dogs:$,pikachu:K,pictures:[N,Y,$,K]}},components:{vueFlashcard:I.Z},methods:{playSound(n){const t=new Audio;t.src="/sound"+n+".mp3",t.load(),t.play()}}};const V=(0,i.Z)(Q,[["render",z]]);var J=V;const X={class:"piano"},nn=(0,r._)("h1",null," ♪ ",-1);function tn(n,t,o,e,a,i){const l=(0,r.up)("real-piano-function");return(0,r.wg)(),(0,r.iD)("div",X,[nn,(0,r.Wm)(l)])}const on=n=>((0,r.dD)("data-v-363e0735"),n=n(),(0,r.Cn)(),n),en={class:"piano"},rn={class:"naturals-container"},an=on((()=>(0,r._)("p",null,"C",-1))),ln=[an],cn=on((()=>(0,r._)("p",null,"D",-1))),un=[cn],sn=on((()=>(0,r._)("p",null,"E",-1))),dn=[sn],pn=on((()=>(0,r._)("p",null,"F",-1))),hn=[pn],fn=on((()=>(0,r._)("p",null,"G",-1))),mn=[fn],bn=on((()=>(0,r._)("p",null,"A",-1))),vn=[bn],gn=on((()=>(0,r._)("p",null,"B",-1))),kn=[gn],_n={class:"accidentals-container"},wn=on((()=>(0,r._)("h3",null,"C#/Db",-1))),yn=[wn],Cn=on((()=>(0,r._)("h3",null,"D#/Eb",-1))),Dn=[Cn],jn=on((()=>(0,r._)("h3",null,"F#/Gb",-1))),Fn=[jn],Wn=on((()=>(0,r._)("h3",null,"G#/Ab",-1))),An=[Wn],En=on((()=>(0,r._)("h3",null,"A#/Bb",-1))),On=[En];function Pn(n,t,o,e,a,i){return(0,r.wg)(),(0,r.iD)("div",en,[(0,r._)("div",rn,[(0,r._)("button",{style:(0,b.j5)({backgroundColor:a.btn0}),onClick:t[0]||(t[0]=n=>(i.changeColor(0),i.playnotes(1)))},ln,4),(0,r._)("button",{style:(0,b.j5)({backgroundColor:a.btn1}),onClick:t[1]||(t[1]=n=>(i.changeColor(1),i.playnotes(3)))},un,4),(0,r._)("button",{style:(0,b.j5)({backgroundColor:a.btn2}),onClick:t[2]||(t[2]=n=>(i.changeColor(2),i.playnotes(5)))},dn,4),(0,r._)("button",{style:(0,b.j5)({backgroundColor:a.btn3}),onClick:t[3]||(t[3]=n=>(i.changeColor(3),i.playnotes(6)))},hn,4),(0,r._)("button",{style:(0,b.j5)({backgroundColor:a.btn4}),onClick:t[4]||(t[4]=n=>(i.changeColor(4),i.playnotes(8)))},mn,4),(0,r._)("button",{style:(0,b.j5)({backgroundColor:a.btn5}),onClick:t[5]||(t[5]=n=>(i.changeColor(5),i.playnotes(10)))},vn,4),(0,r._)("button",{style:(0,b.j5)({backgroundColor:a.btn6}),onClick:t[6]||(t[6]=n=>(i.changeColor(6),i.playnotes(12)))},kn,4)]),(0,r._)("div",_n,[(0,r._)("button",{class:"C",onClick:t[7]||(t[7]=n=>i.playnotes(2))},yn),(0,r._)("button",{class:"D",onClick:t[8]||(t[8]=n=>i.playnotes(4))},Dn),(0,r._)("button",{class:"F",onClick:t[9]||(t[9]=n=>i.playnotes(7))},Fn),(0,r._)("button",{class:"G",onClick:t[10]||(t[10]=n=>i.playnotes(9))},An),(0,r._)("button",{class:"A",onClick:t[11]||(t[11]=n=>i.playnotes(11))},On)])])}var Un={data(){return{btn0:"white",btn1:"white",btn2:"white",btn3:"white",btn4:"white",btn5:"white",btn6:"white",colors:["salmon","pink","purple"],timeout:{}}},methods:{playnotes(n){const t=new Audio;t.src=[`piano${n}.mp3`],t.load(),t.play()},changeColor(n){clearTimeout(this.timeout[n]),this[`btn${n}`]=this.colors[n%this.colors.length],this.timeout[n]=setTimeout((()=>{this[`btn${n}`]="white"}),500)}}};const Tn=(0,i.Z)(Un,[["render",Pn],["__scopeId","data-v-363e0735"]]);var Bn=Tn,Hn={components:{RealPianoFunction:Bn}};const Zn=(0,i.Z)(Hn,[["render",tn]]);var Sn=Zn;const Gn={class:"racecar"},Mn=(0,r._)("h1",null," Let's Play! ",-1),Ln=(0,r._)("h1",null," 🚗 ",-1);function xn(n,t,o,e,a,i){const l=(0,r.up)("race-car-function");return(0,r.wg)(),(0,r.iD)("div",Gn,[Mn,Ln,(0,r.Wm)(l)])}const qn=(0,r._)("h2",null," 🏎️ ",-1),Rn=(0,r._)("button",null,"Go",-1),zn=[qn,Rn];function In(n,t){return(0,r.wg)(),(0,r.iD)("div",null,zn)}const Nn={},Yn=(0,i.Z)(Nn,[["render",In]]);var $n=Yn,Kn={components:{RaceCarFunction:$n}};const Qn=(0,i.Z)(Kn,[["render",xn]]);var Vn=Qn;const Jn=[{path:"/",name:"home",component:W},{path:"/about",name:"about",component:()=>o.e(443).then(o.bind(o,3706))},{path:"/piano",name:"piano",component:M},{path:"/trivia",name:"trivia",component:J},{path:"/realpiano",name:"realpiano",component:Sn},{path:"/racecar",name:"racecar",component:Vn}],Xn=(0,s.p7)({history:(0,s.PO)("/"),routes:Jn});var nt=Xn,tt=o(65),ot=(0,tt.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,e.ri)(u).use(ot).use(nt).mount("#app")}},t={};function o(e){var r=t[e];if(void 0!==r)return r.exports;var a=t[e]={exports:{}};return n[e](a,a.exports,o),a.exports}o.m=n,function(){var n=[];o.O=function(t,e,r,a){if(!e){var i=1/0;for(s=0;s<n.length;s++){e=n[s][0],r=n[s][1],a=n[s][2];for(var l=!0,c=0;c<e.length;c++)(!1&a||i>=a)&&Object.keys(o.O).every((function(n){return o.O[n](e[c])}))?e.splice(c--,1):(l=!1,a<i&&(i=a));if(l){n.splice(s--,1);var u=r();void 0!==u&&(t=u)}}return t}a=a||0;for(var s=n.length;s>0&&n[s-1][2]>a;s--)n[s]=n[s-1];n[s]=[e,r,a]}}(),function(){o.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return o.d(t,{a:t}),t}}(),function(){o.d=function(n,t){for(var e in t)o.o(t,e)&&!o.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})}}(),function(){o.f={},o.e=function(n){return Promise.all(Object.keys(o.f).reduce((function(t,e){return o.f[e](n,t),t}),[]))}}(),function(){o.u=function(n){return"js/about.83ec68b5.js"}}(),function(){o.miniCssF=function(n){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){o.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={},t="lindsay-site:";o.l=function(e,r,a,i){if(n[e])n[e].push(r);else{var l,c;if(void 0!==a)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var d=u[s];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==t+a){l=d;break}}l||(c=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.setAttribute("data-webpack",t+a),l.src=e),n[e]=[r];var p=function(t,o){l.onerror=l.onload=null,clearTimeout(h);var r=n[e];if(delete n[e],l.parentNode&&l.parentNode.removeChild(l),r&&r.forEach((function(n){return n(o)})),t)return t(o)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),c&&document.head.appendChild(l)}}}(),function(){o.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){o.p="/"}(),function(){var n={143:0};o.f.j=function(t,e){var r=o.o(n,t)?n[t]:void 0;if(0!==r)if(r)e.push(r[2]);else{var a=new Promise((function(o,e){r=n[t]=[o,e]}));e.push(r[2]=a);var i=o.p+o.u(t),l=new Error,c=function(e){if(o.o(n,t)&&(r=n[t],0!==r&&(n[t]=void 0),r)){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,r[1](l)}};o.l(i,c,"chunk-"+t,t)}},o.O.j=function(t){return 0===n[t]};var t=function(t,e){var r,a,i=e[0],l=e[1],c=e[2],u=0;if(i.some((function(t){return 0!==n[t]}))){for(r in l)o.o(l,r)&&(o.m[r]=l[r]);if(c)var s=c(o)}for(t&&t(e);u<i.length;u++)a=i[u],o.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return o.O(s)},e=self["webpackChunklindsay_site"]=self["webpackChunklindsay_site"]||[];e.forEach(t.bind(null,0)),e.push=t.bind(null,e.push.bind(e))}();var e=o.O(void 0,[998],(function(){return o(1843)}));e=o.O(e)})();
//# sourceMappingURL=app.1310f6d7.js.map