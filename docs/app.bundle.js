!function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(n){return e[n]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=29)}([function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var i=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[t].concat(o).concat([i]).join("\n")}var a;return[t].join("\n")}(n,e);return n[2]?"@media "+n[2]+"{"+t+"}":t}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(i=0;i<e.length;i++){var a=e[i];null!=a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),n.push(a))}},n}},function(e,n,t){var r,i,o={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),s=function(e){var n={};return function(e,t){if("function"==typeof e)return e();if(void 0===n[e]){var r=function(e,n){return n?n.querySelector(e):document.querySelector(e)}.call(this,e,t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}}(),l=null,c=0,d=[],p=t(12);function u(e,n){for(var t=0;t<e.length;t++){var r=e[t],i=o[r.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(w(r.parts[a],n))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(w(r.parts[a],n));o[r.id]={id:r.id,refs:1,parts:s}}}}function m(e,n){for(var t=[],r={},i=0;i<e.length;i++){var o=e[i],a=n.base?o[0]+n.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(s):t.push(r[a]={id:a,parts:[s]})}return t}function h(e,n){var t=s(e.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=d[d.length-1];if("top"===e.insertAt)r?r.nextSibling?t.insertBefore(n,r.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),d.push(n);else if("bottom"===e.insertAt)t.appendChild(n);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=s(e.insertAt.before,t);t.insertBefore(n,i)}}function v(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var n=d.indexOf(e);n>=0&&d.splice(n,1)}function f(e){var n=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return t.nc}();r&&(e.attrs.nonce=r)}return g(n,e.attrs),h(e,n),n}function g(e,n){Object.keys(n).forEach(function(t){e.setAttribute(t,n[t])})}function w(e,n){var t,r,i,o;if(n.transform&&e.css){if(!(o="function"==typeof n.transform?n.transform(e.css):n.transform.default(e.css)))return function(){};e.css=o}if(n.singleton){var a=c++;t=l||(l=f(n)),r=x.bind(null,t,a,!1),i=x.bind(null,t,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(e){var n=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",g(n,e.attrs),h(e,n),n}(n),r=function(e,n,t){var r=t.css,i=t.sourceMap,o=void 0===n.convertToAbsoluteUrls&&i;(n.convertToAbsoluteUrls||o)&&(r=p(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,t,n),i=function(){v(t),t.href&&URL.revokeObjectURL(t.href)}):(t=f(n),r=function(e,n){var t=n.css,r=n.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}.bind(null,t),i=function(){v(t)});return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else i()}}e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=a()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var t=m(e,n);return u(t,n),function(e){for(var r=[],i=0;i<t.length;i++){var a=t[i];(s=o[a.id]).refs--,r.push(s)}e&&u(m(e,n),n);for(i=0;i<r.length;i++){var s;if(0===(s=r[i]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete o[s.id]}}}};var b,y=(b=[],function(e,n){return b[e]=n,b.filter(Boolean).join("\n")});function x(e,n,t,r){var i=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(n,i);else{var o=document.createTextNode(i),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(o,a[n]):e.appendChild(o)}}},function(e,n,t){"use strict";e.exports=function(e,n){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)||n?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},function(e,n){e.exports='<li class="preview-tile selected" data-tile-number="0">\n  <div class="canvas-container">\n    <div class="canvas-background"></div>\n    <canvas width="96" height="96" class="tile-view"></canvas>\n    <button rel="tooltip" data-placement="right" data-tile-action="clone"\n            class="tile-overlay duplicate-frame-action icon-frame-duplicate-white"\n            data-original-title="Duplicate this frame"></button>\n    <button rel="tooltip" data-placement="right" data-tile-action="delete"\n            class="tile-overlay delete-frame-action icon-frame-recyclebin-white"\n            style="display: block;" data-original-title="Delete this frame"></button>\n  </div>\n</li>\n'},function(e,n){e.exports='<header class="header">\r\n  <div class="navigation">\r\n    <h1 class="player-name">Animation player</h1>\r\n  </div>\r\n</header>\r\n\r\n<main class="main">\r\n  <div class="sticky-section left-sticky-section" id="tool-section">\r\n    <div class="sticky-section-wrap">\r\n      <div class="vertical-center"></div>\r\n    </div>\r\n  </div>\r\n  <div class="columns">\r\n    <div class="column left-column"></div>\r\n    <div class="column main-column"></div>\r\n    <div class="column right-column"></div>\r\n  </div>\r\n  <div class="sticky-section right-sticky-section" id="tooltip"></div>\r\n</main>\r\n'},function(e,n){e.exports='<ul class="tools-wrapper">\n\x3c!--  <li id="tool-paint-bucket" class="tool-icon icon-tool-paint-bucket"></li>--\x3e\n  <li id="tool-pen" class="tool-icon icon-tool-pen selected"></li>\n</ul>\n'},function(e,n){e.exports='<div class="preview-list-wrapper">\n  <div class="preview-list-scroller">\n    <ul class="preview-list">\n      <div class="add-frame-action">\n        <div class="add-frame-action-icon icon-frame-plus-white"></div>\n        <div class="label">Add new frame</div>\n      </div>\n    </ul>\n  </div>\n</div>\n'},function(e,n){e.exports='<div class="drawing-canvas-container">\n  <div class="canvas-background"></div>\n</div>\n'},function(e,n){e.exports='<div class="preview-container">\n  <div class="canvas-container-wrapper">\n    <div class="canvas-container">\n      <div class="preview-actions">\n        <div class="preview-fullscreen-icon"></div>\n      </div>\n      <div class="preview-canvas-container">\n        <div class="canvas-background"></div>\n        <div class="background-image-frame-container"></div>\n      </div>\n    </div>\n  </div>\n  <div>\n    <span id="display-fps" class="display-fps">12 FPS</span>\n    <input id="preview-fps" class="range-fps" type="range" min="0" max="24">\n  </div>\n</div>\n'},function(e,n,t){var r=t(10);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(1)(r,i);r.locals&&(e.exports=r.locals)},function(e,n,t){(n=e.exports=t(0)(!1)).i(t(11),""),n.push([e.i,'html {\n  font-size: 10px; }\n\nbody {\n  background: #1d1d1d;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  cursor: default;\n  font-family: "Arial", sans-serif;\n  font-size: 1.1rem;\n  line-height: 1.1;\n  user-select: none; }\n\n.header {\n  z-index: 10000;\n  position: relative;\n  font-size: 1.6rem; }\n  .header .navigation {\n    height: 3rem; }\n    .header .navigation .player-name {\n      position: absolute;\n      left: 0;\n      width: 100%;\n      text-align: center;\n      font-size: 16pt;\n      color: #888888;\n      text-shadow: 0 -1px 0 #000000; }\n\n.main {\n  position: fixed;\n  top: 0.5rem;\n  right: 0;\n  bottom: 0.5rem;\n  left: 0;\n  margin-top: 4rem; }\n  .main .sticky-section {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    z-index: 1000; }\n  .main .left-sticky-section {\n    left: 0;\n    max-width: 10rem; }\n    .main .left-sticky-section .sticky-section-wrap {\n      display: table;\n      height: 100%; }\n      .main .left-sticky-section .sticky-section-wrap .vertical-center {\n        display: table-cell;\n        vertical-align: middle; }\n  .main .right-sticky-section {\n    right: 0;\n    width: 4.7rem; }\n  .main .columns {\n    text-align: center;\n    font-size: 0;\n    display: flex;\n    position: absolute;\n    left: 100px;\n    top: 0;\n    right: 50px;\n    bottom: 0; }\n    .main .columns .left-column {\n      vertical-align: top;\n      height: 100%;\n      padding-right: 7px;\n      flex-shrink: 0; }\n    .main .columns .main-column {\n      height: 100%;\n      width: 100%;\n      position: relative; }\n    .main .columns .right-column {\n      box-sizing: border-box;\n      vertical-align: top;\n      height: 100%;\n      flex-shrink: 0;\n      display: flex;\n      flex-direction: column;\n      position: relative;\n      padding-left: 10px;\n      padding-bottom: 20px; }\n\n.selected {\n  cursor: default;\n  background-color: #444444; }\n',""])},function(e,n,t){(e.exports=t(0)(!1)).push([e.i,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\r\n\r\n/* Document\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Correct the line height in all browsers.\r\n * 2. Prevent adjustments of font size after orientation changes in iOS.\r\n */\r\n\r\nhtml {\r\n  line-height: 1.15; /* 1 */\r\n  -webkit-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/* Sections\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the margin in all browsers.\r\n */\r\n\r\nbody {\r\n  margin: 0;\r\n}\r\n\r\n/**\r\n * Render the `main` element consistently in IE.\r\n */\r\n\r\nmain {\r\n  display: block;\r\n}\r\n\r\n/**\r\n * Correct the font size and margin on `h1` elements within `section` and\r\n * `article` contexts in Chrome, Firefox, and Safari.\r\n */\r\n\r\nh1 {\r\n  font-size: 2em;\r\n  margin: 0.67em 0;\r\n}\r\n\r\n/* Grouping content\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Add the correct box sizing in Firefox.\r\n * 2. Show the overflow in Edge and IE.\r\n */\r\n\r\nhr {\r\n  box-sizing: content-box; /* 1 */\r\n  height: 0; /* 1 */\r\n  overflow: visible; /* 2 */\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\npre {\r\n  font-family: monospace, monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/* Text-level semantics\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the gray background on active links in IE 10.\r\n */\r\n\r\na {\r\n  background-color: transparent;\r\n}\r\n\r\n/**\r\n * 1. Remove the bottom border in Chrome 57-\r\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n */\r\n\r\nabbr[title] {\r\n  border-bottom: none; /* 1 */\r\n  text-decoration: underline; /* 2 */\r\n  text-decoration: underline dotted; /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font weight in Chrome, Edge, and Safari.\r\n */\r\n\r\nb,\r\nstrong {\r\n  font-weight: bolder;\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\ncode,\r\nkbd,\r\nsamp {\r\n  font-family: monospace, monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font size in all browsers.\r\n */\r\n\r\nsmall {\r\n  font-size: 80%;\r\n}\r\n\r\n/**\r\n * Prevent `sub` and `sup` elements from affecting the line height in\r\n * all browsers.\r\n */\r\n\r\nsub,\r\nsup {\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  position: relative;\r\n  vertical-align: baseline;\r\n}\r\n\r\nsub {\r\n  bottom: -0.25em;\r\n}\r\n\r\nsup {\r\n  top: -0.5em;\r\n}\r\n\r\n/* Embedded content\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the border on images inside links in IE 10.\r\n */\r\n\r\nimg {\r\n  border-style: none;\r\n}\r\n\r\n/* Forms\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Change the font styles in all browsers.\r\n * 2. Remove the margin in Firefox and Safari.\r\n */\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n  font-family: inherit; /* 1 */\r\n  font-size: 100%; /* 1 */\r\n  line-height: 1.15; /* 1 */\r\n  margin: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Show the overflow in IE.\r\n * 1. Show the overflow in Edge.\r\n */\r\n\r\nbutton,\r\ninput { /* 1 */\r\n  overflow: visible;\r\n}\r\n\r\n/**\r\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n * 1. Remove the inheritance of text transform in Firefox.\r\n */\r\n\r\nbutton,\r\nselect { /* 1 */\r\n  text-transform: none;\r\n}\r\n\r\n/**\r\n * Correct the inability to style clickable types in iOS and Safari.\r\n */\r\n\r\nbutton,\r\n[type="button"],\r\n[type="reset"],\r\n[type="submit"] {\r\n  -webkit-appearance: button;\r\n}\r\n\r\n/**\r\n * Remove the inner border and padding in Firefox.\r\n */\r\n\r\nbutton::-moz-focus-inner,\r\n[type="button"]::-moz-focus-inner,\r\n[type="reset"]::-moz-focus-inner,\r\n[type="submit"]::-moz-focus-inner {\r\n  border-style: none;\r\n  padding: 0;\r\n}\r\n\r\n/**\r\n * Restore the focus styles unset by the previous rule.\r\n */\r\n\r\nbutton:-moz-focusring,\r\n[type="button"]:-moz-focusring,\r\n[type="reset"]:-moz-focusring,\r\n[type="submit"]:-moz-focusring {\r\n  outline: 1px dotted ButtonText;\r\n}\r\n\r\n/**\r\n * Correct the padding in Firefox.\r\n */\r\n\r\nfieldset {\r\n  padding: 0.35em 0.75em 0.625em;\r\n}\r\n\r\n/**\r\n * 1. Correct the text wrapping in Edge and IE.\r\n * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n * 3. Remove the padding so developers are not caught out when they zero out\r\n *    `fieldset` elements in all browsers.\r\n */\r\n\r\nlegend {\r\n  box-sizing: border-box; /* 1 */\r\n  color: inherit; /* 2 */\r\n  display: table; /* 1 */\r\n  max-width: 100%; /* 1 */\r\n  padding: 0; /* 3 */\r\n  white-space: normal; /* 1 */\r\n}\r\n\r\n/**\r\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n */\r\n\r\nprogress {\r\n  vertical-align: baseline;\r\n}\r\n\r\n/**\r\n * Remove the default vertical scrollbar in IE 10+.\r\n */\r\n\r\ntextarea {\r\n  overflow: auto;\r\n}\r\n\r\n/**\r\n * 1. Add the correct box sizing in IE 10.\r\n * 2. Remove the padding in IE 10.\r\n */\r\n\r\n[type="checkbox"],\r\n[type="radio"] {\r\n  box-sizing: border-box; /* 1 */\r\n  padding: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Correct the cursor style of increment and decrement buttons in Chrome.\r\n */\r\n\r\n[type="number"]::-webkit-inner-spin-button,\r\n[type="number"]::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\n/**\r\n * 1. Correct the odd appearance in Chrome and Safari.\r\n * 2. Correct the outline style in Safari.\r\n */\r\n\r\n[type="search"] {\r\n  -webkit-appearance: textfield; /* 1 */\r\n  outline-offset: -2px; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove the inner padding in Chrome and Safari on macOS.\r\n */\r\n\r\n[type="search"]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * 1. Correct the inability to style clickable types in iOS and Safari.\r\n * 2. Change font properties to `inherit` in Safari.\r\n */\r\n\r\n::-webkit-file-upload-button {\r\n  -webkit-appearance: button; /* 1 */\r\n  font: inherit; /* 2 */\r\n}\r\n\r\n/* Interactive\r\n   ========================================================================== */\r\n\r\n/*\r\n * Add the correct display in Edge, IE 10+, and Firefox.\r\n */\r\n\r\ndetails {\r\n  display: block;\r\n}\r\n\r\n/*\r\n * Add the correct display in all browsers.\r\n */\r\n\r\nsummary {\r\n  display: list-item;\r\n}\r\n\r\n/* Misc\r\n   ========================================================================== */\r\n\r\n/**\r\n * Add the correct display in IE 10+.\r\n */\r\n\r\ntemplate {\r\n  display: none;\r\n}\r\n\r\n/**\r\n * Add the correct display in IE 10.\r\n */\r\n\r\n[hidden] {\r\n  display: none;\r\n}\r\n',""])},function(e,n){e.exports=function(e){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var t=n.protocol+"//"+n.host,r=t+n.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,n){var i,o=n.trim().replace(/^"(.*)"$/,function(e,n){return n}).replace(/^'(.*)'$/,function(e,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?e:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?t+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(e,n,t){var r=t(14);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(1)(r,i);r.locals&&(e.exports=r.locals)},function(e,n,t){n=e.exports=t(0)(!1);var r=t(2),i=r(t(15)),o=r(t(16));n.push([e.i,'.tools-wrapper {\n  list-style: none; }\n  .tools-wrapper .tool-icon {\n    float: left;\n    position: relative;\n    background-color: #3a3a3a; }\n  .tools-wrapper .tool-icon.selected::before {\n    content: "";\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    border: 3px solid gold;\n    box-sizing: border-box; }\n  .tools-wrapper .tool-icon:hover {\n    background-color: #444444;\n    cursor: pointer; }\n  .tools-wrapper .icon-tool-paint-bucket {\n    background-image: url('+i+");\n    background-position: -228px -92px;\n    width: 46px;\n    height: 46px; }\n  .tools-wrapper .icon-tool-pen {\n    background-image: url("+i+");\n    background-position: -182px -92px;\n    width: 46px;\n    height: 46px; }\n\n.pen-cursor {\n  cursor: url("+o+"), auto; }\n",""])},function(e,n,t){e.exports=t.p+"./images/icons.png"},function(e,n,t){e.exports=t.p+"./images/pen-cursor.png"},function(e,n,t){var r=t(18);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(1)(r,i);r.locals&&(e.exports=r.locals)},function(e,n,t){n=e.exports=t(0)(!1);var r=t(2),i=r(t(19)),o=r(t(20));n.push([e.i,".preview-list-wrapper {\n  position: relative;\n  height: 100%;\n  overflow: hidden; }\n  .preview-list-wrapper .preview-list-scroller {\n    overflow-y: scroll;\n    overflow-x: hidden;\n    height: 100%; }\n    .preview-list-wrapper .preview-list-scroller .preview-list {\n      list-style-type: none;\n      padding-right: 9px; }\n      .preview-list-wrapper .preview-list-scroller .preview-list .preview-tile {\n        position: relative;\n        border: #444444 3px solid;\n        border-radius: 3px;\n        margin: 5px 0;\n        width: 96px;\n        height: 96px; }\n        .preview-list-wrapper .preview-list-scroller .preview-list .preview-tile .selected {\n          border-color: gold; }\n        .preview-list-wrapper .preview-list-scroller .preview-list .preview-tile .canvas-container {\n          position: static;\n          display: block; }\n          .preview-list-wrapper .preview-list-scroller .preview-list .preview-tile .canvas-container .canvas-background {\n            position: absolute;\n            top: 0;\n            right: 0;\n            bottom: 0;\n            left: 0;\n            background: url("+i+"); }\n          .preview-list-wrapper .preview-list-scroller .preview-list .preview-tile .canvas-container .tile-view {\n            position: absolute;\n            z-index: 1;\n            margin-left: auto;\n            margin-right: auto;\n            left: 0;\n            right: 0;\n            top: 0; }\n          .preview-list-wrapper .preview-list-scroller .preview-list .preview-tile .canvas-container .icon-frame-duplicate-white {\n            background-image: url("+o+");\n            background-position: -274px -76px;\n            width: 30px;\n            height: 30px; }\n          .preview-list-wrapper .preview-list-scroller .preview-list .preview-tile .canvas-container .icon-frame-recyclebin-white {\n            background-image: url("+o+");\n            background-position: -274px -106px;\n            width: 30px;\n            height: 30px; }\n          .preview-list-wrapper .preview-list-scroller .preview-list .preview-tile .canvas-container .duplicate-frame-action {\n            bottom: 0;\n            right: 0;\n            border-bottom-left-radius: 3px;\n            cursor: pointer; }\n          .preview-list-wrapper .preview-list-scroller .preview-list .preview-tile .canvas-container .delete-frame-action {\n            top: 0;\n            right: 0;\n            border-bottom-left-radius: 3px;\n            cursor: pointer; }\n          .preview-list-wrapper .preview-list-scroller .preview-list .preview-tile .canvas-container .tile-overlay {\n            z-index: 10;\n            position: absolute;\n            background-color: rgba(100, 100, 100, 0.6);\n            opacity: 1;\n            height: 30px;\n            width: 30px;\n            border: none; }\n      .preview-list-wrapper .preview-list-scroller .preview-list .preview-tile:first-child {\n        margin-top: 0; }\n      .preview-list-wrapper .preview-list-scroller .preview-list .preview-tile.selected {\n        border-color: gold; }\n      .preview-list-wrapper .preview-list-scroller .preview-list .add-frame-action {\n        display: flex;\n        align-items: center;\n        margin-top: 8px;\n        padding: 6px 0;\n        overflow: hidden;\n        width: 96px;\n        border: #888888 solid 3px;\n        border-radius: 4px;\n        color: #888888;\n        background-color: #222222;\n        font-size: 13px;\n        cursor: pointer; }\n        .preview-list-wrapper .preview-list-scroller .preview-list .add-frame-action .add-frame-action-icon {\n          margin: 3px;\n          float: left;\n          flex-shrink: 0; }\n        .preview-list-wrapper .preview-list-scroller .preview-list .add-frame-action .icon-frame-plus-white {\n          background-image: url("+o+");\n          background-position: -274px -157px;\n          width: 26px;\n          height: 26px; }\n        .preview-list-wrapper .preview-list-scroller .preview-list .add-frame-action .label {\n          overflow: hidden;\n          text-align: left; }\n      .preview-list-wrapper .preview-list-scroller .preview-list .add-frame-action:hover {\n        border-color: gold; }\n",""])},function(e,n,t){e.exports=t.p+"./images/canvas-background.png"},function(e,n,t){e.exports=t.p+"./images/icons.png"},function(e,n,t){var r=t(22);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(1)(r,i);r.locals&&(e.exports=r.locals)},function(e,n,t){n=e.exports=t(0)(!1);var r=t(2),i=r(t(23)),o=r(t(24));n.push([e.i,".drawing-canvas-container {\n  position: relative;\n  display: block;\n  font-size: 0; }\n  .drawing-canvas-container .canvas-background {\n    background: url("+i+");\n    position: absolute;\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n    top: 0; }\n  .drawing-canvas-container .drawing-canvas {\n    position: absolute;\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n    top: 0;\n    z-index: 9;\n    cursor: url("+o+"), auto; }\n",""])},function(e,n,t){e.exports=t.p+"./images/canvas-background.png"},function(e,n,t){e.exports=t.p+"./images/pen-cursor.png"},function(e,n,t){var r=t(26);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(1)(r,i);r.locals&&(e.exports=r.locals)},function(e,n,t){n=e.exports=t(0)(!1);var r=t(2),i=r(t(27)),o=r(t(28));n.push([e.i,".preview-container {\n  background: #333333;\n  border-radius: 0 0 2px 2px;\n  overflow: hidden;\n  flex-shrink: 0;\n  border: 0 solid black;\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);\n  font-size: 0; }\n  .preview-container .canvas-container-wrapper {\n    height: 200px;\n    width: 200px;\n    overflow: hidden; }\n    .preview-container .canvas-container-wrapper .canvas-container {\n      height: 200px;\n      width: 200px;\n      margin: 0;\n      overflow: hidden;\n      position: relative;\n      display: block; }\n      .preview-container .canvas-container-wrapper .canvas-container .preview-actions {\n        position: absolute;\n        z-index: 500;\n        right: 10px;\n        top: 10px;\n        cursor: pointer;\n        border: 2px solid rgba(100, 100, 100, 0.6); }\n        .preview-container .canvas-container-wrapper .canvas-container .preview-actions .preview-fullscreen-icon {\n          width: 18px;\n          height: 18px;\n          background-image: url("+i+");\n          background-position: 0 0;\n          background-size: 18px 18px; }\n      .preview-container .canvas-container-wrapper .canvas-container .preview-actions:hover {\n        border-color: gold; }\n      .preview-container .canvas-container-wrapper .canvas-container .preview-canvas-container {\n        height: 200px;\n        width: 200px;\n        margin: 0; }\n        .preview-container .canvas-container-wrapper .canvas-container .preview-canvas-container .canvas-background {\n          background: url("+o+");\n          position: absolute;\n          top: 0;\n          right: 0;\n          bottom: 0;\n          left: 0; }\n        .preview-container .canvas-container-wrapper .canvas-container .preview-canvas-container .background-image-frame-container {\n          height: 100%;\n          width: 100%;\n          position: relative;\n          background-position: center; }\n  .preview-container .display-fps {\n    float: left;\n    color: #aaaaaa;\n    font-size: 12px;\n    min-width: 55px;\n    vertical-align: bottom;\n    line-height: 26px; }\n  .preview-container .range-fps {\n    overflow: hidden;\n    width: 100px;\n    height: 26px;\n    margin: 0;\n    box-sizing: border-box; }\n",""])},function(e,n,t){e.exports=t.p+"./images/resize.png"},function(e,n,t){e.exports=t.p+"./images/canvas-background.png"},function(e,n,t){"use strict";t.r(n);var r=t(4),i=(t(9),t(5));t(13);class o{static htmlToDocFragment(e){const n=document.createElement("template");return n.innerHTML=e,n.content}static calculateZoom(e,n){let t=1;const r=document.querySelector(".main-column");if(r){const i=r.clientHeight,o=r.clientWidth;t=Math.min(i,o)/Math.min(e,n)}return t}static resizeCanvasBackground(e,n,t){const r=e;r.querySelector(".canvas-background").style.width=`${n}px`,r.querySelector(".canvas-background").style.height=`${t}px`}static renumberTiles(e,n){document.querySelectorAll(".preview-tile").forEach(t=>{const r=t,i=Number(t.dataset.tileNumber);"more"===n&&i>e&&(r.dataset.tileNumber=`${i+1}`),"less"===n&&i>e&&(r.dataset.tileNumber=`${i-1}`)})}static clearTileSelection(){document.querySelectorAll(".preview-tile").forEach(e=>{e.classList.remove("selected")})}static redrawMainCanvas(e,n){const t=document.querySelector(".drawing-canvas"),r=document.querySelectorAll(`[data-tile-number='${n}']`)[0].querySelector(".tile-view"),i=t.getContext("2d");0!==e.frames[n]?(i.clearRect(0,0,t.width,t.height),i.drawImage(r,0,0,t.width,t.height)):i.clearRect(0,0,t.width,t.height)}static copyCanvasToPreview(e){const n=document.querySelector(".drawing-canvas"),t=document.querySelectorAll(`[data-tile-number='${e.getCurrentFrame()}']`)[0].querySelector(".tile-view").getContext("2d");t.imageSmoothingEnabled=!1,t.drawImage(n,0,0,96,96)}static changePreviewBackground(e){document.querySelector(".background-image-frame-container").style=`background-repeat: no-repeat; background-size: contain; background-image: url(${e})`}}class a{constructor(e){this.model=e,this.html=i}render(){const e=document.createElement("template");return e.innerHTML=this.html,e.content}canvasDownEventHandler(e){this.model.setCanvasDrawStatus(!0);const n=document.querySelector(".drawing-canvas"),t=n.getContext("2d");t.imageSmoothingEnabled=!1;const r=n.getBoundingClientRect(),i=this.model.getZoom(),o=Math.floor((e.clientX-r.left)/i)*i,a=Math.floor((e.clientY-r.top)/i)*i;t.fillStyle=this.model.getColor(),t.fillRect(o,a,i,i)}canvasUpEventHandler(){if(this.model.getCanvasDrawStatus()){this.model.setCanvasDrawStatus(!1);const e=document.querySelector(".drawing-canvas");this.model.frames[this.model.getCurrentFrame()]=e.toDataURL();const n=document.querySelectorAll(`[data-tile-number='${this.model.getCurrentFrame()}']`)[0].querySelector(".tile-view").getContext("2d");n.imageSmoothingEnabled=!1,n.drawImage(e,0,0,96,96),0===this.model.fps&&o.changePreviewBackground(this.model.frames[this.model.currentFrame])}}canvasMoveEventHandler(e){if(this.model.getCanvasDrawStatus()){const n=document.querySelector(".drawing-canvas"),t=n.getContext("2d"),r=n.getBoundingClientRect(),i=this.model.getZoom(),o=Math.floor((e.clientX-r.left)/i)*i,a=Math.floor((e.clientY-r.top)/i)*i;t.fillStyle=this.model.getColor(),t.fillRect(o,a,i,i)}}}var s=t(6),l=(t(17),t(3));class c{constructor(e){this.html=s,this.tile=l,this.model=e}init(){const e=o.htmlToDocFragment(this.html);return e.querySelector(".preview-list").prepend(this.renderTile()),e}renderTile(){return o.htmlToDocFragment(this.tile)}addTileToPreviewList(){const e=document.querySelector(".preview-list");let n=o.htmlToDocFragment(l);e.insertBefore(n,e.lastElementChild),o.clearTileSelection(),(n=e.lastElementChild.previousElementSibling).classList.add("selected"),this.model.frames.push(this.model.emptyImage),n.setAttribute("data-tile-number",this.model.frames.length-1),this.model.setCurrentFrame(this.model.frames.length-1),o.redrawMainCanvas(this.model,this.model.getCurrentFrame())}deleteTileFromPreviewList(e){if(e.target.closest(".delete-frame-action")&&document.querySelector(".preview-list").childElementCount>2){const n=e.target.closest(".preview-tile"),t=Number(n.dataset.tileNumber);if(this.model.frames.splice(t,1),n.classList.contains("selected")){const e=n.previousElementSibling;e?(e.classList.add("selected"),this.model.setCurrentFrame(this.model.getCurrentFrame()-1),o.redrawMainCanvas(this.model,t-1),0===this.model.fps&&o.changePreviewBackground(this.model.frames[this.model.currentFrame])):(o.clearTileSelection(),n.nextElementSibling.classList.add("selected"),o.redrawMainCanvas(this.model,t+1),0===this.model.fps&&o.changePreviewBackground(this.model.frames[this.model.currentFrame]))}else t<this.model.getCurrentFrame()&&(0===this.model.fps&&o.changePreviewBackground(this.model.frames[this.model.currentFrame]),this.model.setCurrentFrame(this.model.getCurrentFrame()-1));o.renumberTiles(t,"less"),n.remove()}else e.target.closest(".delete-frame-action")&&document.querySelector(".preview-list").childElementCount<=2&&e.target.closest(".delete-frame-action").blur()}duplicateTileFromPreviewList(e){if(e.target.closest(".duplicate-frame-action")){const n=document.querySelector(".preview-list"),t=e.target.closest(".preview-tile"),r=Number(t.dataset.tileNumber),i=t.cloneNode(!0);this.model.frames.splice(r+1,0,this.model.frames[r]),o.renumberTiles(r,"more"),i.setAttribute("data-tile-number",r+1),o.clearTileSelection(),i.classList.add("selected"),this.model.setCurrentFrame(r+1),n.insertBefore(i,e.target.closest(".preview-tile").nextSibling),o.redrawMainCanvas(this.model,this.model.getCurrentFrame()-1),o.copyCanvasToPreview(this.model),e.target.closest(".duplicate-frame-action").blur(),0===this.model.fps&&o.changePreviewBackground(this.model.frames[this.model.currentFrame])}}selectTileOnClick(e){if(e.target.closest(".tile-view")){const n=e.target.closest(".preview-tile");this.model.getCurrentFrame()!==Number(n.dataset.tileNumber)&&(o.clearTileSelection(),n.classList.add("selected"),this.model.setCurrentFrame(Number(n.dataset.tileNumber)),o.redrawMainCanvas(this.model,this.model.getCurrentFrame()),0===this.model.fps&&o.changePreviewBackground(this.model.frames[this.model.currentFrame]))}}}var d=t(7);t(21);class p{static createCanvas(e,n,t){const r=document.createElement("canvas");return r.classList.add(...t),r.width=e,r.height=n,r}}class u{constructor(){this.html=d}render(e){const n=e.getWidth()*e.getZoom(),t=e.getHeight()*e.getZoom(),r=o.htmlToDocFragment(this.html),i=p.createCanvas(n,t,["canvas","drawing-canvas"]);return r.querySelector(".drawing-canvas-container").prepend(i),o.resizeCanvasBackground(r,n,t),r}}var m=t(8);t(25);class h{constructor(e){this.html=m,this.model=e}render(){return o.htmlToDocFragment(this.html)}animatePreview(){const e=this.model;let n=this.model.currentFrame;this.model.animationIntervalId&&clearInterval(this.model.animationIntervalId),0===this.model.fps?o.changePreviewBackground(this.model.frames[this.model.currentFrame]):this.model.animationIntervalId=setInterval(function(){o.changePreviewBackground(((n+=1)===e.frames.length&&(n=0),e.frames[n]))},1e3/this.model.fps)}updateFpsOnPreviewWindow(e){document.querySelector("#display-fps").innerText=`${e.target.value} FPS`,this.model.fps=Number(e.target.value)}static openPreviewFullScreen(){document.querySelector(".preview-canvas-container").requestFullscreen()}}class v{constructor(e){this.model=e,this.html=r,this.previewList=new c(this.model),this.tools=new a(this.model),this.canvas=new u,this.preview=new h(this.model)}init(){const e=o.htmlToDocFragment(this.html);document.body.style.visibility="hidden",document.body.append(e),this.model.setZoom(),document.querySelector(".left-sticky-section .vertical-center").append(this.tools.render()),document.querySelector(".main .left-column").append(this.previewList.init()),document.querySelector(".main .main-column").append(this.canvas.render(this.model)),document.querySelector(".main .right-column").append(this.preview.render()),this.preview.animatePreview(),document.body.style.visibility=""}addEventListeners(){document.querySelector(".add-frame-action").addEventListener("pointerup",this.previewList.addTileToPreviewList.bind(this)),document.querySelector(".preview-list").addEventListener("pointerup",this.previewList.deleteTileFromPreviewList.bind(this)),document.querySelector(".preview-list").addEventListener("pointerup",this.previewList.duplicateTileFromPreviewList.bind(this)),document.querySelector(".drawing-canvas").addEventListener("pointerdown",this.tools.canvasDownEventHandler.bind(this)),document.addEventListener("pointerup",this.tools.canvasUpEventHandler.bind(this)),document.querySelector(".drawing-canvas").addEventListener("pointermove",this.tools.canvasMoveEventHandler.bind(this)),document.querySelector(".preview-list").addEventListener("pointerup",this.previewList.selectTileOnClick.bind(this)),document.querySelector("#preview-fps").addEventListener("input",this.preview.updateFpsOnPreviewWindow.bind(this)),document.querySelector("#preview-fps").addEventListener("input",this.preview.animatePreview.bind(this))}static addEventListeners2(){document.querySelector(".preview-fullscreen-icon").addEventListener("pointerup",h.openPreviewFullScreen)}}var f={DEFAULT:{WIDTH:32,HEIGHT:32,FPS:12},DEFAULT_PEN_COLOR:"#000000",TRANSPARENT_COLOR:"rgba(0, 0, 0, 0)",TOOL_HIGHLIGHT_COLOR_LIGHT:"rgba(255, 255, 255, 0.2)",MOUSEMOVE_THROTTLING:10};const g=new v(new class{constructor(){this.width=f.DEFAULT.WIDTH,this.height=f.DEFAULT.HEIGHT,this.zoom=1,this.penColor=f.DEFAULT_PEN_COLOR,this.canvasDraw=!1,this.currentFrame=0,this.emptyImage="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=",this.frames=[this.emptyImage],this.fps=f.DEFAULT.FPS,this.animationIntervalId=void 0}getWidth(){return this.width}setWidth(e){this.width=e}getHeight(){return this.height}setHeight(e){this.height=e}getZoom(){return this.zoom}setZoom(){this.zoom=o.calculateZoom(this.width,this.height)}getColor(){return this.penColor}getCanvasDrawStatus(){return this.canvasDraw}setCanvasDrawStatus(e){this.canvasDraw=e}setCurrentFrame(e){this.currentFrame=e}getCurrentFrame(){return this.currentFrame}});g.init(),g.addEventListeners(),v.addEventListeners2()}]);
//# sourceMappingURL=app.bundle.js.map