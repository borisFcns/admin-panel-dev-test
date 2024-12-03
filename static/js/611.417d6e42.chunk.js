"use strict";(self.webpackChunkadmin_panel_dev_test=self.webpackChunkadmin_panel_dev_test||[]).push([[611],{5992:(e,t,n)=>{n.r(t),n.d(t,{default:()=>be});var r=n(5043),o=n(8168),l=n(8587),a=n(5173),i=n.n(a),s=n(3097),d=n.n(s),c=n(7355),u=n(916),f=["as","classPrefix","className","level"],v=r.forwardRef((function(e,t){var n=(0,u.l)("Heading",e).propsWithDefaults,a=n.as,i=n.classPrefix,s=void 0===i?"heading":i,d=n.className,v=n.level,p=void 0===v?3:v,m=(0,l.A)(n,f),h=(0,c.U)(s),b=h.withClassPrefix,x=(0,h.merge)(d,b()),y=a||"h"+p;return r.createElement(y,(0,o.A)({},m,{ref:t,className:x}))}));v.displayName="Heading",v.propTypes={className:i().string,classPrefix:i().string,as:i().elementType,level:i().oneOf([1,2,3,4,5,6])};const p=v;var m,h=n(5276),b=n(3105),x=n(7280),y=["classPrefix","expanded","id","className","controlId","children","disabled","caretAs"];const g=function(e){var t=e.classPrefix,n=void 0===t?"panel-btn":t,a=e.expanded,i=e.id,s=e.className,d=e.controlId,u=e.children,f=e.disabled,v=e.caretAs,p=void 0===v?x.A:v,g=(0,l.A)(e,y),E=(0,c.U)(n),S=E.prefix,A=E.withClassPrefix;return r.createElement("button",(0,o.A)({id:i,type:"button","aria-controls":d,"aria-expanded":a,"aria-disabled":f,className:A(s),disabled:f},g),u,r.createElement(b.A,{as:p,"aria-hidden":"true",className:S(m||(m=(0,h.A)(["icon"]))),rotate:a?180:0,"data-testid":"caret icon"}))};var E=["as","classPrefix","className","children","collapsible","caretAs","disabled","expanded","role","bodyId","buttonId","onClickButton"];const S=function(e){var t,n=e.as,a=void 0===n?p:n,i=e.classPrefix,s=void 0===i?"panel":i,u=e.className,f=e.children,v=e.collapsible,m=e.caretAs,h=e.disabled,b=e.expanded,x=e.role,y=e.bodyId,S=e.buttonId,A=e.onClickButton,N=(0,l.A)(e,E),w=(0,c.U)(s),P=w.merge,C=w.prefix;if(!(0,r.isValidElement)(f)||Array.isArray(f))t=r.createElement("span",{className:C("title")},f);else{var I=P(C("title"),d()(f,"props.className"));t=(0,r.cloneElement)(f,{className:I})}return r.createElement(a,(0,o.A)({level:2,className:P(u,C("header"))},N),v?r.createElement(g,{id:S,role:x,caretAs:m,controlId:y,disabled:h,expanded:b,onClick:A},t):t)};var A=n(1480),N=n(6783),w=n(8801),P=n(6562),C=n(4588);function I(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return n<=r?null:0===t?"top":t+r===n?"bottom":"middle"}var T=["as","classPrefix","className","children","scrollShadow","customScrollbar","height","width","style","onScroll","data-testid"],R=r.forwardRef((function(e,t){var n=e.as,a=void 0===n?"div":n,i=e.classPrefix,s=void 0===i?"scroll-view":i,d=e.className,u=e.children,f=e.scrollShadow,v=e.customScrollbar,p=e.height,m=e.width,h=e.style,b=e.onScroll,x=e["data-testid"],y=(0,l.A)(e,T),g=(0,c.U)(s),E=g.merge,S=g.withClassPrefix,A=function(e){var t=(0,r.useRef)(null),n=(0,r.useState)(null),o=n[0],l=n[1];(0,P.J)((function(){var n;if(t.current&&e){var r=t.current;l(I(r));var o=r.scrollHeight;(n=new MutationObserver((function(){var e=null===r||void 0===r?void 0:r.scrollHeight;e&&e!==o&&(l(I(r)),o=e)}))).observe(r,{attributes:!0,childList:!0,subtree:!0})}return function(){var e;null===(e=n)||void 0===e||e.disconnect()}}));var a=(0,C.D)((function(e){var t=e.currentTarget;l(I(t))}));return{scrollState:o,handleScroll:e?a:void 0,bodyRef:t}}(f),R=A.scrollState,O=A.handleScroll,D=A.bodyRef,k=(0,o.A)({height:p,width:m},h),M=E(d,S({shadow:f,"thumb-top":"top"===R,"thumb-middle":"middle"===R,"thumb-bottom":"bottom"===R,"custom-scrollbar":v}));return r.createElement(a,(0,o.A)({},y,{ref:(0,N.P)(t,D),className:M,style:k,onScroll:(0,w.v)(O,b),"data-testid":x||"scroll-view"}),u)}));R.displayName="ScrollView";const O=R;var D=["classPrefix","children","collapsible","expanded","bodyFill","role","id","labelId","scrollShadow","className","onEnter","onEntering","onEntered","onExit","onExiting","onExited","onScroll"],k=["className"];const M=function(e){var t=e.classPrefix,n=void 0===t?"panel-body":t,a=e.children,i=e.collapsible,s=e.expanded,d=e.bodyFill,u=e.role,f=e.id,v=e.labelId,p=e.scrollShadow,m=e.className,h=e.onEnter,b=e.onEntering,x=e.onEntered,y=e.onExit,g=e.onExiting,E=e.onExited,S=e.onScroll,N=(0,l.A)(e,D),w=(0,c.U)(n),P=w.merge,C=w.prefix,I=w.withClassPrefix,T=P(m,I({fill:d})),R=function(e){return r.createElement(O,(0,o.A)({},N,e,{customScrollbar:!0,className:T,onScroll:S,scrollShadow:p}),a)};return i?r.createElement(A.A,{in:s,onEnter:h,onEntering:b,onEntered:x,onExit:y,onExiting:g,onExited:E},(function(e,t){var n=e.className,a=(0,l.A)(e,k);return r.createElement("div",(0,o.A)({},a,{className:P(n,C("collapse")),ref:t}),R({role:u,id:f,"aria-labelledby":v}))})):R()};var L=n(5569),K=["as","accordion","defaultActiveKey","bordered","className","classPrefix","children","activeKey","onSelect"],U=r.createContext({}),H=r.forwardRef((function(e,t){var n=(0,u.l)("PanelGroup",e).propsWithDefaults,a=n.as,i=void 0===a?"div":a,s=n.accordion,d=n.defaultActiveKey,f=n.bordered,v=n.className,p=n.classPrefix,m=void 0===p?"panel-group":p,h=n.children,b=n.activeKey,x=n.onSelect,y=(0,l.A)(n,K),g=(0,c.U)(m),E=g.withClassPrefix,S=g.merge,A=(0,L.q)(b,d),N=A[0],w=A[1],P=S(v,E({accordion:s,bordered:f})),I=(0,C.D)((function(e,t){w(e),null===x||void 0===x||x(e,t)})),T=(0,r.useMemo)((function(){return{accordion:s,activeKey:N,onGroupSelect:I}}),[s,N,I]);return r.createElement(i,(0,o.A)({},y,{ref:t,className:P}),r.createElement(U.Provider,{value:T},h))}));H.displayName="PanelGroup",H.propTypes={accordion:i().bool,activeKey:i().any,bordered:i().bool,defaultActiveKey:i().any,className:i().string,children:i().node,classPrefix:i().string,onSelect:i().func};const z=function(e){var t=e.expanded,n=e.defaultExpanded,o=e.eventKey,l=e.collapsible,a=(0,r.useContext)(U)||{},i=a.accordion,s=a.activeKey,d=(0,L.q)(t,n||"undefined"!==typeof s&&s===o),c=d[0],u=d[1],f=l,v=c;return i&&(f=!0),f&&"undefined"!==typeof s&&s!==o&&(v=!1),(0,r.useEffect)((function(){i&&"undefined"!==typeof s&&u(s===o)}),[i,s,o,u]),[v,u,f]};var B=n(9937),F=["as","bodyFill","bodyProps","bordered","children","className","classPrefix","caretAs","collapsible","defaultExpanded","disabled","eventKey","expanded","header","headerRole","panelRole","shaded","scrollShadow","id","onEnter","onEntered","onEntering","onExit","onExited","onExiting","onSelect"],W=r.forwardRef((function(e,t){var n=(0,u.l)("Panel",e).propsWithDefaults,a=n.as,i=void 0===a?"div":a,s=n.bodyFill,d=n.bodyProps,f=n.bordered,v=n.children,p=n.className,m=n.classPrefix,h=void 0===m?"panel":m,b=n.caretAs,x=n.collapsible,y=n.defaultExpanded,g=n.disabled,E=n.eventKey,A=n.expanded,N=n.header,w=n.headerRole,P=n.panelRole,I=void 0===P?"region":P,T=n.shaded,R=n.scrollShadow,O=n.id,D=n.onEnter,k=n.onEntered,L=n.onEntering,K=n.onExit,H=n.onExited,W=n.onExiting,_=n.onSelect,j=(0,l.A)(n,F),G=(0,B.Y)("rs-",O),X=G+"-panel",Y=G+"-btn",q=(0,c.U)(h),V=q.merge,J=q.withClassPrefix,$=((0,r.useContext)(U)||{}).onGroupSelect,Q=z({expanded:A,defaultExpanded:y,eventKey:E,collapsible:x}),Z=Q[0],ee=Q[1],te=Q[2],ne=(0,C.D)((function(e){null===_||void 0===_||_(E,e),null===$||void 0===$||$(E,e),ee(!Z)})),re=V(p,J({in:Z,collapsible:te,bordered:f,shaded:T}));return r.createElement(i,(0,o.A)({},j,{ref:t,className:re,id:O}),N&&r.createElement(S,{collapsible:te,expanded:Z,caretAs:b,role:w,buttonId:Y,bodyId:X,disabled:g,onClickButton:ne},N),r.createElement(M,(0,o.A)({collapsible:te,expanded:Z,bodyFill:s,role:I,id:X,scrollShadow:R,labelId:Y,onEnter:D,onEntering:L,onEntered:k,onExit:K,onExiting:W,onExited:H},d),v))}));W.displayName="Panel",W.propTypes={collapsible:i().bool,bordered:i().bool,shaded:i().bool,bodyFill:i().bool,header:i().any,defaultExpanded:i().bool,expanded:i().bool,eventKey:i().any,panelRole:i().string,classPrefix:i().string,children:i().node,onSelect:i().func,onEnter:i().func,onEntering:i().func,onEntered:i().func,onExit:i().func,onExiting:i().func,onExited:i().func,className:i().string};const _=W;var j=n(6905);const G=function(){function e(e,t){this.container=void 0,this.onScrollCallback=void 0,this.interval=null,this.isAutoScrolling=!0,this.container=e,this.onScrollCallback=t}var t=e.prototype;return t.clear=function(){null!==this.interval&&(clearInterval(this.interval),this.interval=null)},t.update=function(e){var t=this,n=e.translate,r=e.minTranslate,o=e.maxTranslate,l=e.width,a=e.height,i={x:0,y:0},s={x:0,y:0},d=this.container,c=d.scrollTop,u=d.scrollLeft,f=d.scrollHeight,v=d.scrollWidth,p=0===c,m=c===f-d.clientHeight,h=0===u,b=u===v-d.clientWidth;n.y>=o.y-a/2&&!m?(i.y=1,s.y=5*Math.abs((o.y-a/2-n.y)/a)):n.x>=o.x-l/2&&!b?(i.x=1,s.x=5*Math.abs((o.x-l/2-n.x)/l)):n.y<=r.y+a/2&&!p?(i.y=-1,s.y=5*Math.abs((n.y-a/2-r.y)/a)):n.x<=r.x+l/2&&!h&&(i.x=-1,s.x=5*Math.abs((n.x-l/2-r.x)/l)),this.interval&&(this.clear(),this.isAutoScrolling=!1),0===i.x&&0===i.y||(this.interval=setInterval((function(){t.isAutoScrolling=!0;var e={left:s.x*i.x,top:s.y*i.y};t.container.scrollTop+=e.top,t.container.scrollLeft+=e.left,t.onScrollCallback(e)}),20))},e}();var X=["A","BUTTON","INPUT","OPTION","TEXTAREA","SELECT"];function Y(e){return X.includes(e.tagName)||"true"===e.contentEditable}function q(e,t){if(null!==e&&null!==t)for(var n=0,r=Object.entries(t);n<r.length;n++){var o=r[n],l=o[0],a=o[1];e.style[l]=a}}function V(e,t){q(e,{transform:t?"translate3d("+t.x+"px,"+t.y+"px,0)":""})}function J(e,t){q(e,{transitionDuration:t?t+"ms":""})}function $(e,t){for(var n=e;n;){if(t(n))return n;n=n.parentNode}return null}function Q(e,t,n){if(void 0===n&&(n={left:0,top:0}),!e||!t)return{};var r={left:(n.left||0)+e.offsetLeft,top:(n.top||0)+e.offsetTop};return e.parentNode===t?r:Q(e.parentNode,t,r)}var Z=n(119),ee=n(819),te=n.n(ee);const ne=function(){var e=(0,r.useRef)({});return{listItemRegister:(0,r.useCallback)((function(t){var n=t.info.collection;return Array.isArray(e.current[n])||(e.current[n]=[]),e.current[n].push(t),{unregister:function(){var r=e.current[n].indexOf(t);-1!==r&&e.current[n].splice(r,1)}}}),[]),getManagedItem:(0,r.useCallback)((function(t){return te()(Object.values(e.current)).find((function(e){return e.node===t}))}),[]),getOrderedItems:(0,r.useCallback)((function(t){return null!=t?[].concat(e.current[t]).sort((function(e,t){return Number(e.info.index)-Number(t.info.index)})):[]}),[])}};function re(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return oe(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return oe(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function oe(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var le="rs-list-item-holder";const ae=function(e){var t=e.autoScroll,n=e.pressDelay,o=e.transitionDuration,l=e.onSort,a=e.onSortEnd,i=e.onSortMove,s=e.onSortStart,d=(0,r.useState)(!1),c=d[0],u=d[1],f=(0,r.useRef)(null),v=(0,r.useRef)(),p=ne(),m=p.listItemRegister,h=p.getManagedItem,b=p.getOrderedItems,x=(0,Z.a)(),y=(0,r.useCallback)((function(e,n,r){var d,c,v;if(x()){var p=f.current,m=r.node,h=null!==(d=r.info.index)&&void 0!==d?d:0,y=null!==(c=r.info.index)&&void 0!==c?c:0,g={x:0,y:0},E=[],S=$(p,(function(e){var t=window.getComputedStyle(e),n=/(auto|scroll)/;return["overflow","overflowX","overflowY"].some((function(e){return n.test(t[e])}))}))||p,A=S.scrollLeft,N=S.scrollTop,w=new G(S,(function(e){g.x+=e.left,g.y+=e.top})),P=m.getBoundingClientRect(),C=Q(m,p),I=getComputedStyle(m),T=m.cloneNode(!0);null===(v=T)||void 0===v||v.classList.add("rs-list-item-helper"),q(T,{position:"fixed",width:P.width+"px",height:P.height+"px",left:P.left-parseFloat(I.marginLeft)+"px",top:P.top-parseFloat(I.marginTop)+"px"}),m.classList.add(le),document.body.appendChild(T);var R=function(){return{left:S.scrollLeft-A,top:S.scrollTop-N}},O=function(){return E.reduce((function(e,t){return{x:e.x+t.x,y:e.y+t.y}}),{x:0,y:0})},D=(0,j.A)(window,"mousemove",(function(n){var l=(null===n||void 0===n?void 0:n.pageX)||0,a=(null===n||void 0===n?void 0:n.pageY)||0,s=R(),d=S.getBoundingClientRect();g={x:l-e.pageX,y:a-e.pageY},T&&V(T,g),y=-1;for(var c=b(r.info.collection),u=C.top||0,f=s.top||0,v=u+g.y+f,x=0,A=c.length;x<A;x++){var N,I=c[x].node,D=null!==(N=c[x].info.index)&&void 0!==N?N:0,k=P.height>I.offsetHeight?I.offsetHeight/2:P.height/2,M={x:0,y:0},L=c[x].edgeOffset||Q(I,p);c[x].edgeOffset=L;var K=x>0&&c[x-1],U=x<A-1&&c[x+1];if(K&&!K.edgeOffset&&(K.edgeOffset=Q(K.node,p)),U&&!U.edgeOffset&&(U.edgeOffset=Q(U.node,p)),D!==h){var H=L.top||0;if(K&&D>h&&v+k>=H){var z,B=((null===(z=K.edgeOffset)||void 0===z?void 0:z.top)||0)-H;M.y=B,E[D]={x:0,y:-B},y=D}else if(U&&D<h&&v<=H+k){var F,W=((null===(F=U.edgeOffset)||void 0===F?void 0:F.top)||0)-H;M.y=W,E[D]={x:0,y:-W},-1===y&&(y=D)}else E[D]={x:0,y:0};J(I,o),V(I,M),V(m,O())}}-1===y&&(y=h),t&&w.update({width:P.width,height:P.height,translate:g,maxTranslate:{x:0,y:d.top+d.height-P.top-P.height/2},minTranslate:{x:0,y:d.top-P.top-P.height/2}}),null===i||void 0===i||i({collection:r.info.collection,node:m,oldIndex:h,newIndex:y},n)}),{passive:!1}),k=(0,j.A)(window,"mouseup",(function(e){D.off(),k.off();var t=O(),n=R();T&&(V(T,{x:t.x-(n.left||0),y:t.y-(n.top||0)}),J(T,o)),setTimeout((function(){var t,n;if(x()){null===(t=T)||void 0===t||null===(n=t.parentNode)||void 0===n||n.removeChild(T),T=null,m.classList.remove(le),V(m,null),E=[];for(var o,i=re(b(r.info.collection));!(o=i()).done;){var s=o.value;s.edgeOffset=null;var d=s.node;V(d,null),J(d,null)}w.clear(),u(!1);var c={collection:r.info.collection,node:r.node,newIndex:y,oldIndex:h};null===a||void 0===a||a(c,e),null===l||void 0===l||l(c,e)}}),o)}),{passive:!1});u(!0),null===s||void 0===s||s({collection:r.info.collection,node:m,oldIndex:h,newIndex:y},e.nativeEvent)}}),[t,b,x,l,a,i,s,o]);return{handleStart:(0,r.useCallback)((function(e){var t=e.target,r=$(t,(function(e){return Boolean(h(e))})),o=h(r);2!==e.button&&Boolean(o)&&!o.info.disabled&&!c&&r instanceof HTMLElement&&!r.contains($(t,Y))&&(e.preventDefault(),v.current=setTimeout(y,n,e,r,o))}),[h,y,n,c]),handleEnd:(0,r.useCallback)((function(){return clearTimeout(v.current)}),[]),containerRef:f,sorting:c,register:m}};var ie=n(5713),se=n.n(ie);const de=r.createContext({bordered:!1,size:"md",register:function(){return{unregister:se()}}});var ce=["as","children","className","classPrefix","collection","disabled","index","size"],ue=r.forwardRef((function(e,t){var n=e.as,a=void 0===n?"div":n,i=e.children,s=e.className,d=e.classPrefix,u=void 0===d?"list-item":d,f=e.collection,v=void 0===f?0:f,p=e.disabled,m=e.index,h=e.size,b=(0,l.A)(e,ce),x=(0,r.useContext)(de),y=x.bordered,g=x.register,E=x.size,S=h||E,A=(0,c.U)(u),w=A.withClassPrefix,P=A.merge,C=(0,r.useRef)(null);(0,r.useEffect)((function(){if(C.current)return g({node:C.current,edgeOffset:null,info:{collection:v,disabled:p,index:m}}).unregister}),[v,p,m,g]);var I=P(s,w(S,{disabled:p,bordered:y}));return r.createElement(a,(0,o.A)({role:"listitem","aria-disabled":p},b,{ref:(0,N.P)(C,t),className:I}),i)}));ue.displayName="ListItem",ue.propTypes={index:i().number,collection:i().oneOfType([i().number,i().string]),disabled:i().bool,children:i().node};const fe=ue;var ve=n(5719),pe=["as","classPrefix","className","bordered","hover","size","sortable","autoScroll","pressDelay","transitionDuration","children","onSort","onSortEnd","onSortMove","onSortStart"],me=r.forwardRef((function(e,t){var n=(0,u.l)("List",e).propsWithDefaults,a=n.as,i=void 0===a?"div":a,s=n.classPrefix,d=void 0===s?"list":s,f=n.className,v=n.bordered,p=n.hover,m=n.size,h=void 0===m?"md":m,b=n.sortable,x=n.autoScroll,y=void 0===x||x,g=n.pressDelay,E=void 0===g?0:g,S=n.transitionDuration,A=void 0===S?300:S,w=n.children,P=n.onSort,C=n.onSortEnd,I=n.onSortMove,T=n.onSortStart,R=(0,l.A)(n,pe),O=(0,c.U)(d),D=O.withClassPrefix,k=O.merge,M=ae({autoScroll:y,onSort:P,onSortEnd:C,onSortMove:I,onSortStart:T,pressDelay:E,transitionDuration:A}),L=M.containerRef,K=M.register,U=M.sorting,H=M.handleEnd,z=M.handleStart,B=k(f,D({bordered:v,sortable:b,sorting:U,hover:p})),F=(0,r.useMemo)((function(){return{bordered:v,size:h,register:K}}),[v,K,h]);return r.createElement(i,(0,o.A)({role:"list"},R,{ref:(0,N.P)(L,t),className:B,onMouseDown:b?z:void 0,onMouseUp:b?H:void 0}),r.createElement(de.Provider,{value:F},w))}));me.Item=fe,me.displayName="List",me.propTypes={className:i().string,classPrefix:i().string,bordered:i().bool,hover:i().bool,sortable:i().bool,size:(0,ve.A)(["lg","md","sm"]),autoScroll:i().bool,pressDelay:i().number,transitionDuration:i().number,onSortStart:i().func,onSortMove:i().func,onSortEnd:i().func,onSort:i().func};const he=me;var be=function(e){var t=e.data;return r.createElement("div",null,t?r.createElement(_,{header:"List"},r.createElement(he,{hover:!0},t.map((function(e,t){return r.createElement(he.Item,{key:t},e)})))):r.createElement("div",null,"No data"))}}}]);
//# sourceMappingURL=611.417d6e42.chunk.js.map