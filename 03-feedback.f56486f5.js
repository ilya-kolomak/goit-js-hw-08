function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,f="object"==typeof self&&self&&self.Object===Object&&self,l=u||f||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return l.Date.now()};function g(e,t,n){var r,o,i,a,c,u,f=0,l=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,i=o;return r=o=void 0,f=t,a=e.apply(i,n)}function h(e){return f=e,c=setTimeout(T,t),l?b(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-f>=i}function T(){var e=v();if(j(e))return O(e);c=setTimeout(T,function(e){var n=t-(e-u);return s?m(n,i-(e-f)):n}(e))}function O(e){return c=void 0,g&&r?b(e):(r=o=void 0,a)}function w(){var e=v(),n=j(e);if(r=arguments,o=this,u=e,n){if(void 0===c)return h(u);if(s)return c=setTimeout(T,t),b(u)}return void 0===c&&(c=setTimeout(T,t)),a}return t=p(t)||0,y(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(p(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),w.cancel=function(){void 0!==c&&clearTimeout(c),f=0,r=u=o=c=void 0},w.flush=function(){return void 0===c?a:O(v())},w}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?c(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return y(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:r,maxWait:t,trailing:o})};const b=(e,t)=>{try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},h=e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},j=e=>{try{localStorage.removeItem(e)}catch(e){console.error("Get state error: ",e.message)}},T=document.querySelector(".feedback-form");!function(){const e=h("contact-form-key");if(!e)return;Object.entries(e).forEach((([e,t])=>{T.elements[e].value=t}))}();const O=e(t)((e=>{const{name:t,value:n}=e.target;let r=h("contact-form-key");r=r||{},r[t]=n,b("contact-form-key",r)}),500);T.addEventListener("input",O);T.addEventListener("submit",(e=>{e.preventDefault();const{elements:{email:t,message:n}}=e.currentTarget;console.log({email:t.value,message:n.value}),e.currentTarget.reset(),j("contact-form-key")}));
//# sourceMappingURL=03-feedback.f56486f5.js.map
