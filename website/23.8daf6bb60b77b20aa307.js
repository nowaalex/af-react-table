/*! For license information please see 23.8daf6bb60b77b20aa307.js.LICENSE.txt */
(window.Z=window.Z||[]).push([[23],{1238:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t(36),c=t(1239),u=t(53),l=t(30),o=t(61),s=t.n(o),d=t(2);var b={name:"vmlbzc-hueBlockCss",styles:"padding:0.5em;border-radius:5px;;label:hueBlockCss;"},i=function(e){return Object(d.c)("div",{css:b,style:{background:"hsl("+e+",90%,70%)"}},"hue: ",e)},f=[{dataKey:"n1",label:"N1",width:100,render:i},{dataKey:"n2",label:"N2",width:100,render:i},{dataKey:"n3",label:"N3",width:100,render:i}],v=Object(a.memo)(Object(c.a)(l.a));n.default=function(e){var n=e.className,t=Object(a.useState)((function(){for(var e=Object(r.observable)([]),n=0;n<200;n++)e.push({n1:0,n2:0,n3:0});return e}))[0],c=Object(a.useCallback)((function(e){return t[e]}),[t]);return Object(a.useEffect)((function(){var e=setInterval((function(){for(var e=0;e<50;e++)t[s()(0,199)]["n"+s()(1,3)]=s()(0,360)}),1e3);return function(){clearInterval(e)}}),[t]),Object(d.c)(u.a,{className:n,fixedLayout:!0,CellComponent:v,getRowData:c,rowCount:200,columns:f})}}}]);
//# sourceMappingURL=sm.23.70b78df9657850c5a7fc0ccb7a85ca81.map