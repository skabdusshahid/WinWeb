import{r as e}from"./react-D74B1hbq.js";import{S as p}from"./simplebar-core-CnKPAMtR.js";var l=function(){return l=Object.assign||function(o){for(var c,r=1,s=arguments.length;r<s;r++){c=arguments[r];for(var i in c)Object.prototype.hasOwnProperty.call(c,i)&&(o[i]=c[i])}return o},l.apply(this,arguments)};function N(n,o){var c={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&o.indexOf(r)<0&&(c[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)o.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(c[r[s]]=n[r[s]]);return c}var E=e.forwardRef(function(n,o){var c=n.children,r=n.scrollableNodeProps,s=r===void 0?{}:r,i=N(n,["children","scrollableNodeProps"]),v=e.useRef(),f=e.useRef(),u=e.useRef(),m={},b={};Object.keys(i).forEach(function(a){Object.prototype.hasOwnProperty.call(p.defaultOptions,a)?m[a]=i[a]:b[a]=i[a]});var t=l(l({},p.defaultOptions.classNames),m.classNames),d=l(l({},s),{className:"".concat(t.contentWrapper).concat(s.className?" ".concat(s.className):""),tabIndex:m.tabIndex||p.defaultOptions.tabIndex,role:"region","aria-label":m.ariaLabel||p.defaultOptions.ariaLabel});return e.useEffect(function(){var a;return f.current=d.ref?d.ref.current:f.current,v.current&&(a=new p(v.current,l(l(l({},m),f.current&&{scrollableNode:f.current}),u.current&&{contentNode:u.current})),typeof o=="function"?o(a):o&&(o.current=a)),function(){a==null||a.unMount(),a=null,typeof o=="function"&&o(null)}},[]),e.createElement("div",l({"data-simplebar":"init",ref:v},b),e.createElement("div",{className:t.wrapper},e.createElement("div",{className:t.heightAutoObserverWrapperEl},e.createElement("div",{className:t.heightAutoObserverEl})),e.createElement("div",{className:t.mask},e.createElement("div",{className:t.offset},typeof c=="function"?c({scrollableNodeRef:f,scrollableNodeProps:l(l({},d),{ref:f}),contentNodeRef:u,contentNodeProps:{className:t.contentEl,ref:u}}):e.createElement("div",l({},d),e.createElement("div",{className:t.contentEl},c)))),e.createElement("div",{className:t.placeholder})),e.createElement("div",{className:"".concat(t.track," simplebar-horizontal")},e.createElement("div",{className:t.scrollbar})),e.createElement("div",{className:"".concat(t.track," simplebar-vertical")},e.createElement("div",{className:t.scrollbar})))});E.displayName="SimpleBar";export{E as S};
