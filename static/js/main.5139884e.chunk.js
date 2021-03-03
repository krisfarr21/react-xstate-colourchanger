(this["webpackJsonpxstate-react-typescript-template"]=this["webpackJsonpxstate-react-typescript-template"]||[]).push([[0],{20:function(t,e,n){},35:function(t,e,n){"use strict";n.r(e);var o=n(24),a=n(10),r=(n(20),n(7),n(21)),s=n(41),i=n(4),c=n(40),p=n(39);function l(t){return Object(i.k)((e=>({type:"SPEAK",value:t})))}function m(){return Object(i.k)("LISTEN")}const d={John:{person:"John Appleseed"},Chris:{person:"Chris Swan"},Mark:{person:"Mark Curtis"},Sophie:{person:"Sophie Howard"},"on Monday":{day:"Monday"},"on Tuesday":{day:"Tuesday"},"on Wednesday":{day:"Wednesday"},"on Thursday":{day:"Thursday"},"on Friday":{day:"Friday"},"at two":{time:"2:00"},"at three":{time:"3:00"},"at four":{time:"4:00"},"at five":{time:"5:00"},"at six":{time:"6:00"},"at seven":{time:"7:00"},"at eight":{time:"8:00"},"at nine":{time:"9:00"},"at ten":{time:"10:00"}},y={yes:!0,sure:!0,certainly:!0,"of course":!0,"yes of course":!0},u={no:!1,"no way!":!1,"absolutely not":!1},E={initial:"init",states:{init:{on:{CLICK:"welcome"}},welcome:Object(a.a)({on:{RECOGNISED:{target:"query",actions:Object(i.b)((t=>({option:t.recResult})))}}},(g="Hello, welcome! Your options are to make an appointment, to do item or timer",{initial:"prompt",states:{prompt:{entry:l(g),on:{ENDSPEECH:"ask"}},ask:{entry:Object(i.k)("LISTEN")}}})),query:{invoke:{id:"rasa",src:(t,e)=>b(t.option),onDone:{target:"menu",actions:[Object(i.b)(((t,e)=>({option:e.data.intent.name}))),(t,e)=>console.log(e.data)]},onError:{target:"welcome",actions:(t,e)=>console.log(e.data)}}},menu:{initial:"prompt",on:{ENDSPEECH:[{target:"todo",cond:t=>"todo"===t.option},{target:"timer",cond:t=>"timer"===t.option},{target:"appointment",cond:t=>"appointment"===t.option}]},states:{prompt:{entry:Object(i.k)((t=>({type:"SPEAK",value:"OK. I understand."})))}}},todo:{initial:"prompt",on:{ENDSPEECH:"init"},states:{prompt:{entry:Object(i.k)((t=>({type:"SPEAK",value:"Let's create a to do item"})))}}},timer:{initial:"prompt",on:{ENDSPEECH:"init"},states:{prompt:{entry:Object(i.k)((t=>({type:"SPEAK",value:"Let's create a timer"})))}}},appointment:{initial:"prompt",on:{ENDSPEECH:"who"},states:{prompt:{entry:Object(i.k)((t=>({type:"SPEAK",value:"Let's create an appointment"})))}}},who:{initial:"prompt",on:{RECOGNISED:[{cond:t=>"person"in(d[t.recResult]||{}),actions:Object(i.b)((t=>({person:d[t.recResult].person}))),target:"day"},{target:".nomatch"}]},states:{prompt:{entry:l("Who are you meeting with?"),on:{ENDSPEECH:"ask"}},ask:{entry:m()},nomatch:{entry:l("Sorry I don't know them"),on:{ENDSPEECH:"prompt"}}}},day:{initial:"prompt",on:{RECOGNISED:[{cond:t=>"day"in(d[t.recResult]||{}),actions:Object(i.b)((t=>({day:d[t.recResult].day}))),target:"time"},{target:".nomatch"}]},states:{prompt:{entry:Object(i.k)((t=>({type:"SPEAK",value:"OK. ".concat(t.person,". On which day is your meeting?")}))),on:{ENDSPEECH:"ask"}},ask:{entry:m()},nomatch:{entry:l("Sorry I didn't understand"),on:{ENDSPEECH:"prompt"}}}},time:{initial:"prompt",on:{RECOGNISED:[{cond:t=>"time"in(d[t.recResult]||{}),actions:Object(i.b)((t=>({time:d[t.recResult].time}))),target:"confirm_meeting"},{target:".nomatch"}]},states:{prompt:{entry:Object(i.k)((t=>({type:"SPEAK",value:"OK. ".concat(t.day,". What time is your meeting?")}))),on:{ENDSPEECH:"ask"}},ask:{entry:m()},nomatch:{entry:l("Sorry I don't know that"),on:{ENDSPEECH:"prompt"}}}},confirm_meeting:{initial:"prompt",on:{RECOGNISED:[{cond:t=>t.recResult in u,target:"day"},{cond:t=>t.recResult in y,target:"confirmed"},{target:".nomatch"}]},states:{prompt:{entry:Object(i.k)((t=>({type:"SPEAK",value:"Do you want to create an appointment with ".concat(t.person," on ").concat(t.day," at ").concat(t.time,"?")}))),on:{ENDSPEECH:"ask"}},ask:{entry:m()},nomatch:{entry:l("Sorry, I don't understand"),on:{ENDSPEECH:"prompt"}}}},confirmed:{initial:"prompt",on:{ENDSPEECH:"init"},states:{prompt:{entry:Object(i.k)((t=>({type:"SPEAK",value:"Your appointment has been created!"})))}}}}};var g;const b=t=>fetch(new Request("https://cors-anywhere.herokuapp.com/https://appointment-model.herokuapp.com/model/parse",{method:"POST",headers:{Origin:"http://localhost:3000/react-xstate-colourchanger"},body:'{"text": "'.concat(t,'"}')})).then((t=>t.json()));var h=n(19),S=n(12);Object(p.a)({url:"https://statecharts.io/inspect",iframe:!1});const O=Object(s.a)({id:"root",type:"parallel",states:{dm:Object(a.a)({},E),asrtts:{initial:"idle",states:{idle:{on:{LISTEN:"recognising",SPEAK:{target:"speaking",actions:Object(i.b)(((t,e)=>({ttsAgenda:e.value})))}}},recognising:{initial:"progress",entry:"recStart",exit:"recStop",on:{ASRRESULT:{actions:["recLogResult",Object(i.b)(((t,e)=>({recResult:e.value})))],target:".match"},RECOGNISED:"idle"},states:{progress:{},match:{entry:Object(i.k)("RECOGNISED")}}},speaking:{entry:"ttsStart",on:{ENDSPEECH:"idle"}}}}}},{actions:{recLogResult:t=>{console.log("<< ASR: "+t.recResult)},test:()=>{console.log("test")},logIntent:t=>{console.log("<< NLU intent: "+t.nluData.intent.name)}}}),j=t=>{switch(!0){case t.state.matches({asrtts:"recognising"}):return Object(S.jsx)("button",Object(a.a)(Object(a.a)({type:"button",className:"glow-on-hover",style:{animation:"glowing 20s linear"}},t),{},{children:"Listening..."}));case t.state.matches({asrtts:"speaking"}):return Object(S.jsx)("button",Object(a.a)(Object(a.a)({type:"button",className:"glow-on-hover",style:{animation:"bordering 1s infinite"}},t),{},{children:"Speaking..."}));default:return Object(S.jsx)("button",Object(a.a)(Object(a.a)({type:"button",className:"glow-on-hover"},t),{},{children:"Click to start"}))}};function k(){const t=Object(h.useSpeechSynthesis)({onEnd:()=>{m("ENDSPEECH")}}),e=t.speak,n=t.cancel,a=(t.speaking,Object(h.useSpeechRecognition)({onResult:t=>{m({type:"ASRRESULT",value:t})}})),r=a.listen,s=(a.listening,a.stop),i=Object(c.b)(O,{devTools:!0,actions:{recStart:Object(c.a)((()=>{console.log("Ready to receive a color command."),r({interimResults:!1,continuous:!0})})),recStop:Object(c.a)((()=>{console.log("Recognition stopped."),s()})),changeColour:Object(c.a)((t=>{console.log("Repainting..."),document.body.style.background=t.recResult})),ttsStart:Object(c.a)(((t,n)=>{console.log("Speaking..."),e({text:t.ttsAgenda})})),ttsCancel:Object(c.a)(((t,e)=>{console.log("TTS STOP..."),n()}))}}),p=Object(o.a)(i,3),l=p[0],m=p[1];p[2];return Object(S.jsx)("div",{className:"App",children:Object(S.jsx)(j,{state:l,onClick:()=>m("CLICK")})})}const C=document.getElementById("root");r.render(Object(S.jsx)(k,{}),C)}},[[35,1,2]]]);
//# sourceMappingURL=main.5139884e.chunk.js.map