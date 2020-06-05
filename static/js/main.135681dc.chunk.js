(this["webpackJsonpstep-sequencer"]=this["webpackJsonpstep-sequencer"]||[]).push([[0],{107:function(e,t,a){e.exports=a(119)},112:function(e,t,a){},113:function(e,t,a){},119:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),o=a.n(c),i=(a(112),a(167)),l=a(166),u=a(96),s=a(165),m=(a(113),a(20)),p=a(61),b=a(158),f=a(163),d=a(169),g=a(149),j=a(173),O=a(164),h=a(95),w=a.n(h),y=a(94),E=a.n(y),v=a(93),x=a.n(v),C=a(152),k=a(175),S=Object(g.a)((function(e){return Object(j.a)({bpmBox:{padding:"3px !important"},slider:{width:"200px","margin-top":"25px","margin-right":"15px"}})}));function H(e){var t=e.bpm$,a=Object(n.useState)(t.value.bpm),c=Object(m.a)(a,2),o=c[0],i=c[1],l=S();return r.a.createElement(d.a,{display:"flex",flexDirection:"row"},r.a.createElement(k.a,{min:10,max:250,className:l.slider,value:o,onChange:function(e,t){"number"===typeof t&&i(t)},onChangeCommitted:function(e,a){"number"===typeof a&&t.next({bpm:a})}}),r.a.createElement(d.a,{display:"flex",flexDirection:"column"},r.a.createElement(C.a,{variant:"caption"},"bpm"),r.a.createElement(d.a,{border:1},r.a.createElement(C.a,{className:l.bpmBox,color:"secondary",variant:"h6"},o))))}var N=a(16),$=a(154),D=a(155),q=a(156),B=a(153),I={height:30,width:20,backgroundColor:"#90a4ae",cursor:"pointer"},M=Object(g.a)((function(){return Object(j.a)({off:I,on:Object(N.a)(Object(N.a)({},I),{},{backgroundColor:"#63d8ce"}),highlight:Object(N.a)(Object(N.a)({},I),{},{backgroundColor:"#8FEEF3"}),highlightOn:Object(N.a)(Object(N.a)({},I),{},{backgroundColor:"#c4fcff"})})}));function R(e){var t=e.step,a=e.isOn,c=e.isCurrentStep,o=e.updateSteps,i=Object(n.useState)(a),l=Object(m.a)(i,2),u=l[0],s=l[1],p=M();return r.a.createElement(B.a,{square:!0,className:c&&u?p.highlightOn:c?p.highlight:u?p.on:p.off,onClick:function(){s(!u),o(t,!u)}})}var A,J,K=a(22),T=a(24),W="/step-sequencer/sounds",F=new T.Howl({src:["".concat(W,"/snare.mp3")]}),P=new T.Howl({src:["".concat(W,"/kick.mp3")]}),z=new T.Howl({src:["".concat(W,"/hihat.mp3")]}),G=new T.Howl({src:["".concat(W,"/maracas.mp3")]}),L=new T.Howl({src:["".concat(W,"/clave.mp3")]}),Q=new T.Howl({src:["".concat(W,"/rimshot.mp3")]}),U=new T.Howl({src:["".concat(W,"/toms.mp3")]}),V=new T.Howl({src:["".concat(W,"/clap.mp3")]}),X=new T.Howl({src:["".concat(W,"/conga.mp3")]}),Y=new T.Howl({src:["".concat(W,"/cowbell.mp3")]});!function(e){e.Kick="Kick",e.Snare="Snare",e.Toms="Toms",e.Rimshot="Rimshot",e.Maracas="Maracas",e.Conga="Conga",e.Clave="Clave",e.HiHat="HiHat",e.Clap="Clap",e.Cowbell="Cowbell"}(J||(J={}));var Z=(A={},Object(K.a)(A,J.HiHat,{trigger:function(){z.play()}}),Object(K.a)(A,J.Kick,{trigger:function(){P.play()}}),Object(K.a)(A,J.Snare,{trigger:function(){F.play()}}),Object(K.a)(A,J.Toms,{trigger:function(){U.play()}}),Object(K.a)(A,J.Maracas,{trigger:function(){G.play()}}),Object(K.a)(A,J.Clave,{trigger:function(){L.play()}}),Object(K.a)(A,J.Clap,{trigger:function(){V.play()}}),Object(K.a)(A,J.Cowbell,{trigger:function(){Y.play()}}),Object(K.a)(A,J.Conga,{trigger:function(){X.play()}}),Object(K.a)(A,J.Rimshot,{trigger:function(){Q.play()}}),A);function _(e,t,a){Object(n.useEffect)((function(){var n=e.subscribe(t);return a&&"function"===typeof a&&a(),function(){return n.unsubscribe()}}),[])}var ee,te,ae=(ee=1,te=16,Array.from({length:te-ee+1},(function(e,t){return t}))).map((function(){return!1})),ne=Object(g.a)((function(){return Object(j.a)({root:{padding:"5px !important"}})}));function re(e){var t=e.clock$,a=e.channel$,c=Object(n.useState)(Object(p.a)(ae)),o=Object(m.a)(c,2),i=o[0],l=o[1],u=Object(n.useState)(null),s=Object(m.a)(u,2),b=s[0],f=s[1],g=ne(),j=function(e,t){var n=i;n[e]=t,a.next(Object(N.a)(Object(N.a)({},a.value),{},{steps:n}))};return _(Object($.a)([t,a]).pipe(Object(D.a)((function(e){return Object(m.a)(e,1)[0].play}))),(function(e){var t,a=Object(m.a)(e,2),n=a[0].step,r=a[1],c=r.steps,o=r.instrument,i=r.volume;(l(c),f(n),o&&i&&c[n])&&(null===(t=Z[o])||void 0===t||t.trigger())})),r.a.createElement(d.a,{className:g.root,border:1,width:"590px"},r.a.createElement(q.a,{container:!0,spacing:2},r.a.createElement(q.a,{item:!0,xs:12},r.a.createElement(q.a,{container:!0,direction:"row",justify:"center",spacing:2},i.map((function(e,t){return r.a.createElement(q.a,{key:t,item:!0},r.a.createElement(R,{step:t,isOn:!!e,isCurrentStep:t===b,updateSteps:j}))}))))))}var ce=a(92),oe=a.n(ce),ie=a(91),le=a.n(ie),ue=a(157),se=a(168),me=a(176),pe=Object(g.a)((function(e){return Object(j.a)({root:{padding:"5px !important"},formControl:{margin:e.spacing(0),minWidth:120}})}));function be(e){var t=e.channel$,a=Object(n.useState)(!1),c=Object(m.a)(a,2),o=c[0],i=c[1],l=Object(n.useState)(""),u=Object(m.a)(l,2),s=u[0],p=u[1],b=pe(),f=function(e,a){i(a),t.next(Object(N.a)(Object(N.a)({},t.value),{},{volume:e}))};return r.a.createElement(d.a,{className:b.root,display:"flex",flexDirection:"row",justifyContent:"space-between",border:1,height:"42px",width:"210px"},r.a.createElement(ue.a,{className:b.formControl},r.a.createElement(se.a,{displayEmpty:!0,id:"instrument-select",value:s,onChange:function(e){var a;p(e.target.value),a=e.target.value,t.next(Object(N.a)(Object(N.a)({},t.value),{},{instrument:a}))}},r.a.createElement(me.a,{value:"",disabled:!0},r.a.createElement("em",null,"Instrument")),Object.entries(J).map((function(e,t){var a=Object(m.a)(e,2),n=a[0],c=a[1];return r.a.createElement(me.a,{key:t,value:n},c)})))),o?r.a.createElement(le.a,{style:{cursor:"pointer",margin:"4px"},onClick:function(){return f(100,!o)}}):r.a.createElement(oe.a,{style:{cursor:"pointer",margin:"4px"},onClick:function(){return f(0,!o)}}))}var fe=Object(g.a)((function(){return Object(j.a)({root:{padding:"10px !important"}})}));function de(e){var t=e.id,a=e.clock$,n=fe(),c=new b.a(function(e){return{id:e,instrument:null,play:!0,volume:100,steps:[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]}}(t));return r.a.createElement(d.a,{className:n.root,display:"flex",flexDirection:"row",border:1,justifyContent:"space-between",width:"840px",marginBottom:"5px"},r.a.createElement(be,{channel$:c}),r.a.createElement(re,{clock$:a,channel$:c}))}var ge=a(170),je=a(162),Oe=a(171),he=a(159),we=a(160),ye=a(161),Ee=a(78),ve=a(172),xe={play:!1,step:0,pauseStep:0,bpm:100},Ce=function(){},ke=Object(g.a)((function(e){return Object(j.a)({wrapper:{padding:"10px !important",margin:"0 auto"},root:{padding:"10px !important"},channel:{padding:"3px 10px !important"},button:{margin:e.spacing(1)},bpmControl:{"margin-left":"auto"}})})),Se=new b.a({play:!1}),He=new b.a({bpm:130}),Ne=Object(f.a)(Se,He),$e=function(e){return e.pipe(Object(Oe.a)(xe),Object(he.a)((function(e,t){return Object(N.a)(Object(N.a)(Object(N.a)({},e),t),{},{pauseStep:e.step})}),{}),Object(we.a)((function(e){return e.play?Object(ge.a)((t=e.bpm,t>0?6e4/t:1/0)).pipe(Object(ye.a)((function(t){e.step=(t+e.pauseStep)%16})),Object(Ee.a)((function(){return e}))):je.a;var t})))}(Ne).pipe(Object(ve.a)()),De=function(e){Se.next({play:e})};function qe(){_($e,Ce,(function(){return $e.connect()}));var e=Object(p.a)(Array(1)).map((function(e,t){return r.a.createElement(de,{key:t,id:t,clock$:$e})})),t=Object(n.useState)(e),a=Object(m.a)(t,2),c=a[0],o=a[1],i=ke();return r.a.createElement(d.a,{className:i.wrapper,display:"flex",flexDirection:"column",border:1,width:"880px"},r.a.createElement(d.a,{className:i.root,display:"flex",flexDirection:"row"},r.a.createElement(C.a,{variant:"h5"},"RxJS Sequencer"),r.a.createElement(d.a,{className:i.bpmControl},r.a.createElement(H,{bpm$:He}))),c.map((function(e,t){return r.a.createElement(d.a,{key:t,className:i.channel,display:"flex",flexDirection:"row"},e)})),r.a.createElement(d.a,{className:i.root,display:"flex",flexDirection:"row",justifyContent:"flex-end"},r.a.createElement(d.a,{marginRight:"auto"},r.a.createElement(O.a,{variant:"contained",color:"primary",disabled:c.length>6,className:i.button,startIcon:r.a.createElement(x.a,null),onClick:function(){return o([].concat(Object(p.a)(c),[r.a.createElement(de,{key:c.length+1,id:c.length+1,clock$:$e})]))}},"Channel")),r.a.createElement(O.a,{variant:"contained",color:"secondary",className:i.button,startIcon:r.a.createElement(E.a,null),onClick:function(){return De(!1)}},"Pause"),r.a.createElement(O.a,{variant:"contained",color:"primary",className:i.button,startIcon:r.a.createElement(w.a,null),onClick:function(){return De(!0)}},"Play")))}var Be=function(){var e=r.a.useMemo((function(){return Object(u.a)({palette:{type:"dark",primary:{main:"#63d8ce"},secondary:{main:"#d8636d"}}})}),[]);return r.a.createElement(s.a,{theme:e},r.a.createElement(l.a,null),r.a.createElement(i.a,{fixed:!0},r.a.createElement("div",{className:"App"},r.a.createElement(qe,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Be,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[107,1,2]]]);
//# sourceMappingURL=main.135681dc.chunk.js.map