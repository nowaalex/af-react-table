/*! For license information please see 046fbe74744e6f23aecf.js.LICENSE.txt */
(self.webpackChunkaf_virtual_scroll=self.webpackChunkaf_virtual_scroll||[]).push([[963],{66980:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>M});var r=s(85893),a=s(19756),o=s(67294),l=s(40074),n=s(68949);const i=(e,t,s,r)=>{const a=t.length-1;const o=t[a],l=new Map;for(let n of e){const e=s(n);if(!e)continue;let i,u,d=l;for(let s=0;s<a;s++){if(u=e[t[s]],i=d.get(u),!i){i=new Map;for(let e of r[s])d.has(e)||d.set(e,null);d.set(u,i)}d=i}if(u=e[o],i=d.get(u),i)i.push(n);else{for(let e of r[a])d.has(e)||d.set(e,null);d.set(u,[n])}}return l},u=(e,t,s)=>(r,a)=>{const o=e(r),l=e(a);if(o&&l){const e=o[t],r=l[t];return e>r?s:e<r?-s:0}return o?s:l?-s:0},d=(e,t,s,r,a,o=0)=>{const l=e.values();if(o<a-1)for(let e of l)e&&d(e,t,s,r,a,o+1);else{const e=u(t,s,r);for(let t of l)t&&t.sort(e)}},c=d,p=(e,t,s=[],r=[],a=[])=>{let o;for(let[l,n]of e)if(n){const e=s.concat(l);o=-r.push(e),a.push(o),t.has(o)||(Array.isArray(n)?a.push.apply(a,n):p(n,t,e,r,a))}return{groupValues:r,rowIndexes:a}},h=p;const g=class{get visibleColumns(){return this.columns.filter((e=>!this.groupKeys.includes(e.dataKey)))}get priorityGroupValuesArray(){return this.groupKeys.map((e=>this.columns.find((t=>t.dataKey===e)).priorityGroupValues||[]))}setFiltering(e,t){t?this.filtersMap.set(e,t.toLowerCase()):this.filtersMap.delete(e)}toggleCompact(){this.compact=!this.compact}setSorting(e){this.sortDataKey===e&&(this.sortDirection*=-1),this.sortDataKey=e}setGrouping(e){this.groupKeys=e}addGrouping(e){this.groupKeys.includes(e)||(this.groupKeys.push(e),this.collapsedGroups.clear())}toggleCollapsedGroup(e){this.collapsedGroups.has(e)?this.collapsedGroups.delete(e):this.collapsedGroups.add(e)}removeGrouping(e){const t=this.groupKeys.indexOf(e);-1!==t&&(this.groupKeys.splice(t,1),this.collapsedGroups.clear())}get orderedIndexes(){return Array.from({length:this.rowsQuantity},((e,t)=>t))}get grouped(){return i(this.filteredIndexes,this.groupKeys,this.getRowData,this.priorityGroupValuesArray)}get groupedSorted(){return this.sortDataKey&&c(this.grouped,this.getRowData,this.sortDataKey,this.sortDirection,this.groupKeys.length),this.grouped}get flattenedGroups(){return h(this.groupedSorted,this.collapsedGroups)}get filteredIndexes(){const{filtersMap:e,orderedIndexes:t}=this;if(this.filtersMap.size){return t.filter((t=>{const s=this.getRowData(t);for(let[t,r]of e)if(!(""+s[t]).toLowerCase().includes(r))return!1;return!0}))}return t}get noGroupsSortedIndexes(){return this.sortDataKey?this.filteredIndexes.sort(u(this.getRowData,this.sortDataKey,this.sortDirection)):this.filteredIndexes}get groupsSortedIndexes(){return this.flattenedGroups.rowIndexes}get hasGrouping(){return!!this.groupKeys.length}get finalIndexes(){return this.hasGrouping?this.groupsSortedIndexes:this.noGroupsSortedIndexes}constructor(){this.rowsQuantity=0,this.getRowData=null,this.columns=[],this.compact=!0,this.filtersMap=new Map,this.groupKeys=[],this.sortDataKey="",this.sortDirection=-1,this.collapsedGroups=new Set,(0,n.ky)(this,{visibleColumns:(0,n.Fl)({equals:n.p6.structural}),priorityGroupValuesArray:(0,n.Fl)({equals:n.p6.structural}),groupedSorted:(0,n.Fl)({equals:()=>!1}),groupsSortedIndexes:(0,n.Fl)({equals:()=>!1}),noGroupsSortedIndexes:(0,n.Fl)({equals:()=>!1}),finalIndexes:(0,n.Fl)({equals:()=>!1}),filteredIndexes:(0,n.Fl)({equals:()=>!1}),orderedIndexes:(0,n.Fl)({equals:()=>!1})})}merge(e){Object.assign(this,e)}};var f=s(41876),m=s(32857);const y="_2B3KY_2EhDdLzl3od9PxI3",x="_3xhCMieeqyydLLrsB_Rjwr _2S2SLB_JTzTB3lBY1T4ZW1",K="_7PdTV3zpJzO5l3JPCJbaz",G="_24CQvBWd2KIxalcwIBcG6S",w="_1Pfh0g4BE_cuNHu46ByRkY _2S2SLB_JTzTB3lBY1T4ZW1",I="_3KQQrpclW23r77-lYRKeHq _2S2SLB_JTzTB3lBY1T4ZW1",D="_2t1GlnfqduCsfI_X7Q0BSx _2S2SLB_JTzTB3lBY1T4ZW1",j="QsUrLMXUKybinaPXO0z0B";var v=s(57865),b=s(84785),S=s(89862);const _=(0,l.P)((({m:e,dataKey:t,label:s,i:a})=>{const[o,l]=(0,b.useDrag)({item:{type:"h",dataKey:t}});return(0,r.jsxs)("div",{ref:l,className:x,onClick:()=>e.setSorting(t),"aria-sort":e.sortDataKey===t?1===e.sortDirection?"ascending":"descending":void 0,children:[0===a?(0,r.jsx)("span",{"data-collapsed":e.compact?"":void 0,onClick:()=>e.toggleCompact(),className:I}):null,s]})})),C=(0,l.P)((({m:e,dataKey:t})=>e.compact?null:(0,r.jsx)("input",{className:K,value:e.filtersMap.get(t)||"",onChange:s=>e.setFiltering(t,s.target.value)}))),B=e=>{let t=0;if(Array.isArray(e))t+=e.length;else for(let s of e.values())s&&(t+=B(s));return t},R=(e,t,s)=>{let r=0;if(Array.isArray(e)){let a;for(let o of e)a=s(o),r+=a[t]}else for(let a of e.values())a&&(r+=R(a,t,s));return r},N=(0,l.P)((({m:e,column:t,rowIndexes:s})=>{if("count"===t.totals)return B(s);if("sum"===t.totals){const r=R(s,t.dataKey,e.getRowData),a=t.formatTotal||t.format;return a?a(r):r}return null})),T=(0,l.P)((({m:e})=>{const[t,s]=(0,b.useDrop)({accept:"h",drop(t){e.addGrouping(t.dataKey)}});return e.compact?null:(0,r.jsx)("div",{className:G,ref:s,children:e.groupKeys.length?e.groupKeys.map((t=>(0,r.jsx)("div",{className:w,onDoubleClick:()=>e.removeGrouping(t),children:e.columns.find((e=>e.dataKey===t)).label},t))):"Drag column headers here to group by column"})})),k=(0,l.P)((({m:e,columns:t,idx:s})=>{const a=e.collapsedGroups.has(s);if(e.hasGrouping){const l=e.flattenedGroups.groupValues[~s];if(l){const n=l.length-1,i=e.groupKeys[n],{getGroupName:u,label:d}=e.columns.find((e=>e.dataKey===i)),c=l[n];return(0,r.jsxs)(o.Fragment,{children:[(0,r.jsx)("span",{className:D,onClick:()=>e.toggleCollapsedGroup(s),"data-collapsed":a?"":void 0,style:{marginLeft:2*n+"em"}})," ",u?u(c):d,": ",""+c,t.length?(0,r.jsx)("span",{className:j,children:t.map((t=>{return t.totals?(0,r.jsxs)("span",{children:[t.label,":  ",(0,r.jsx)(N,{m:e,column:t,rowIndexes:(s=e.grouped,a=l,a.reduce(((e,t)=>e.get(t)),s))})]},t.dataKey):null;var s,a}))}):null]})}}return null})),F=e=>{let{rowsQuantity:t,getRowData:s,className:l,columns:n}=e,i=(0,a.Z)(e,["rowsQuantity","getRowData","className","columns"]);const[u]=(0,o.useState)((()=>new g)),{finalIndexes:d}=u;(0,o.useEffect)((()=>u.merge({rowsQuantity:t,getRowData:s,columns:n}))),(0,o.useEffect)((()=>{const e=u.visibleColumns.slice().sort(((e,t)=>(e.initialGrouingIndex||0)-(t.initialGrouingIndex||0))).filter((e=>e.initialGroupingIndex)).map((e=>e.dataKey));u.setGrouping(e)}),[]);return(0,r.jsx)(S.W,{backend:v.PD,children:(0,r.jsxs)("div",{className:(0,m.Z)(y,l),children:[(0,r.jsx)(T,{m:u}),(0,r.jsx)(f.Z,Object.assign({columns:u.visibleColumns,rowsQuantity:d.length,getRowData:s,renderRow:e=>{const t=d[e.index];return t<0?(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colSpan:e.columns.length,children:(0,r.jsx)(k,{m:u,idx:t,columns:e.columns})})},e.index):(0,o.createElement)(e.Row,Object.assign({},e,{key:e.index,index:t}))},renderHeaderCells:e=>e.map((({dataKey:e,label:t},s)=>(0,r.jsxs)("th",{children:[(0,r.jsx)(_,{m:u,dataKey:e,label:t,i:s}),(0,r.jsx)(C,{m:u,dataKey:e})]},e))),renderFooter:e=>e.some((e=>!!e.totals))?(0,r.jsx)("tfoot",{children:(0,r.jsx)("tr",{children:e.map((e=>(0,r.jsx)("td",{children:(0,r.jsx)(N,{m:u,column:e,rowIndexes:u.filteredIndexes})},e.dataKey)))})}):null},i))]})})},A=(0,l.P)(F);var P=s(85384),Q=s.n(P);const q=Array.from({length:1e4},((e,t)=>({i:t,fixedRange:t%9,firstName:Q().name.firstName(),lastName:Q().name.lastName(),country:Q().address.country()}))),L=e=>20+e%53+e%87,M=()=>(0,r.jsx)(A,{rowsQuantity:q.length,getRowData:e=>q[e],estimatedRowHeight:30,columns:[{dataKey:"i",label:"i",totals:"sum",render:(e,t,s)=>(0,r.jsx)("div",{style:{color:"#000",textAlign:"center",lineHeight:L(s)+"px",background:"hsl("+11*s%360+",60%,60%)"},children:e})},{dataKey:"fixedRange",label:"FR",initialGroupingIndex:1,priorityGroupValues:[4,7,71,5]},{dataKey:"firstName",label:"first name",initialGroupingIndex:2,priorityGroupValues:["Dennis"],totals:"count"},{dataKey:"lastName",label:"last name"},{dataKey:"country",label:"country"}]})}}]);
//# sourceMappingURL=046fbe74744e6f23aecf.js.map