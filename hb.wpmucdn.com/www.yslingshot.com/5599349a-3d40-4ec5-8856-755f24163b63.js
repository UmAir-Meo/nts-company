/**handles:gform_placeholder,smush-lazy-load,wp-embed,wpb_composer_front_js,vivus**/
/* Placeholders.js v3.0.2 */
(function(t){"use strict";function e(t,e,r){return t.addEventListener?t.addEventListener(e,r,!1):t.attachEvent?t.attachEvent("on"+e,r):void 0}function r(t,e){var r,n;for(r=0,n=t.length;n>r;r++)if(t[r]===e)return!0;return!1}function n(t,e){var r;t.createTextRange?(r=t.createTextRange(),r.move("character",e),r.select()):t.selectionStart&&(t.focus(),t.setSelectionRange(e,e))}function a(t,e){try{return t.type=e,!0}catch(r){return!1}}t.Placeholders={Utils:{addEventListener:e,inArray:r,moveCaret:n,changeType:a}}})(this),function(t){"use strict";function e(){}function r(){try{return document.activeElement}catch(t){}}function n(t,e){var r,n,a=!!e&&t.value!==e,u=t.value===t.getAttribute(V);return(a||u)&&"true"===t.getAttribute(P)?(t.removeAttribute(P),t.value=t.value.replace(t.getAttribute(V),""),t.className=t.className.replace(R,""),n=t.getAttribute(z),parseInt(n,10)>=0&&(t.setAttribute("maxLength",n),t.removeAttribute(z)),r=t.getAttribute(D),r&&(t.type=r),!0):!1}function a(t){var e,r,n=t.getAttribute(V);return""===t.value&&n?(t.setAttribute(P,"true"),t.value=n,t.className+=" "+I,r=t.getAttribute(z),r||(t.setAttribute(z,t.maxLength),t.removeAttribute("maxLength")),e=t.getAttribute(D),e?t.type="text":"password"===t.type&&K.changeType(t,"text")&&t.setAttribute(D,"password"),!0):!1}function u(t,e){var r,n,a,u,i,l,o;if(t&&t.getAttribute(V))e(t);else for(a=t?t.getElementsByTagName("input"):f,u=t?t.getElementsByTagName("textarea"):h,r=a?a.length:0,n=u?u.length:0,o=0,l=r+n;l>o;o++)i=r>o?a[o]:u[o-r],e(i)}function i(t){u(t,n)}function l(t){u(t,a)}function o(t){return function(){b&&t.value===t.getAttribute(V)&&"true"===t.getAttribute(P)?K.moveCaret(t,0):n(t)}}function c(t){return function(){a(t)}}function s(t){return function(e){return A=t.value,"true"===t.getAttribute(P)&&A===t.getAttribute(V)&&K.inArray(C,e.keyCode)?(e.preventDefault&&e.preventDefault(),!1):void 0}}function d(t){return function(){n(t,A),""===t.value&&(t.blur(),K.moveCaret(t,0))}}function v(t){return function(){t===r()&&t.value===t.getAttribute(V)&&"true"===t.getAttribute(P)&&K.moveCaret(t,0)}}function g(t){return function(){i(t)}}function p(t){t.form&&(T=t.form,"string"==typeof T&&(T=document.getElementById(T)),T.getAttribute(U)||(K.addEventListener(T,"submit",g(T)),T.setAttribute(U,"true"))),K.addEventListener(t,"focus",o(t)),K.addEventListener(t,"blur",c(t)),b&&(K.addEventListener(t,"keydown",s(t)),K.addEventListener(t,"keyup",d(t)),K.addEventListener(t,"click",v(t))),t.setAttribute(j,"true"),t.setAttribute(V,x),(b||t!==r())&&a(t)}var f,h,b,m,A,y,E,x,L,T,S,N,w,B=["text","search","url","tel","email","password","number","textarea"],C=[27,33,34,35,36,37,38,39,40,8,46],k="#ccc",I="placeholdersjs",R=RegExp("(?:^|\\s)"+I+"(?!\\S)"),V="data-placeholder-value",P="data-placeholder-active",D="data-placeholder-type",U="data-placeholder-submit",j="data-placeholder-bound",q="data-placeholder-focus",Q="data-placeholder-live",z="data-placeholder-maxlength",F=document.createElement("input"),G=document.getElementsByTagName("head")[0],H=document.documentElement,J=t.Placeholders,K=J.Utils;if(J.nativeSupport=void 0!==F.placeholder,!J.nativeSupport){for(f=document.getElementsByTagName("input"),h=document.getElementsByTagName("textarea"),b="false"===H.getAttribute(q),m="false"!==H.getAttribute(Q),y=document.createElement("style"),y.type="text/css",E=document.createTextNode("."+I+" { color:"+k+"; }"),y.styleSheet?y.styleSheet.cssText=E.nodeValue:y.appendChild(E),G.insertBefore(y,G.firstChild),w=0,N=f.length+h.length;N>w;w++)S=f.length>w?f[w]:h[w-f.length],x=S.attributes.placeholder,x&&(x=x.nodeValue,x&&K.inArray(B,S.type)&&p(S));L=setInterval(function(){for(w=0,N=f.length+h.length;N>w;w++)S=f.length>w?f[w]:h[w-f.length],x=S.attributes.placeholder,x?(x=x.nodeValue,x&&K.inArray(B,S.type)&&(S.getAttribute(j)||p(S),(x!==S.getAttribute(V)||"password"===S.type&&!S.getAttribute(D))&&("password"===S.type&&!S.getAttribute(D)&&K.changeType(S,"text")&&S.setAttribute(D,"password"),S.value===S.getAttribute(V)&&(S.value=x),S.setAttribute(V,x)))):S.getAttribute(P)&&(n(S),S.removeAttribute(V));m||clearInterval(L)},100)}K.addEventListener(t,"beforeunload",function(){J.disable()}),J.disable=J.nativeSupport?e:i,J.enable=J.nativeSupport?e:l}(this),function(t){"use strict";var e=t.fn.val,r=t.fn.prop;Placeholders.nativeSupport||(t.fn.val=function(t){var r=e.apply(this,arguments),n=this.eq(0).data("placeholder-value");return void 0===t&&this.eq(0).data("placeholder-active")&&r===n?"":r},t.fn.prop=function(t,e){return void 0===e&&this.eq(0).data("placeholder-active")&&"value"===t?"":r.apply(this,arguments)})}(jQuery);
!function(){var e={90:function(e){!function(t,n){var a=function(e,t,n){"use strict";var a,i;if(function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(t in i=e.lazySizesConfig||e.lazysizesConfig||{},n)t in i||(i[t]=n[t])}(),!t||!t.getElementsByClassName)return{init:function(){},cfg:i,noSupport:!0};var r=t.documentElement,o=e.HTMLPictureElement,s="addEventListener",l="getAttribute",c=e[s].bind(e),d=e.setTimeout,u=e.requestAnimationFrame||d,f=e.requestIdleCallback,m=/^picture$/i,v=["load","error","lazyincluded","_lazyloaded"],y={},h=Array.prototype.forEach,z=function(e,t){return y[t]||(y[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),y[t].test(e[l]("class")||"")&&y[t]},p=function(e,t){z(e,t)||e.setAttribute("class",(e[l]("class")||"").trim()+" "+t)},g=function(e,t){var n;(n=z(e,t))&&e.setAttribute("class",(e[l]("class")||"").replace(n," "))},C=function(e,t,n){var a=n?s:"removeEventListener";n&&C(e,t),v.forEach((function(n){e[a](n,t)}))},b=function(e,n,i,r,o){var s=t.createEvent("Event");return i||(i={}),i.instance=a,s.initEvent(n,!r,!o),s.detail=i,e.dispatchEvent(s),s},A=function(t,n){var a;!o&&(a=e.picturefill||i.pf)?(n&&n.src&&!t[l]("srcset")&&t.setAttribute("srcset",n.src),a({reevaluate:!0,elements:[t]})):n&&n.src&&(t.src=n.src)},E=function(e,t){return(getComputedStyle(e,null)||{})[t]},_=function(e,t,n){for(n=n||e.offsetWidth;n<i.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},w=(pe=[],ge=[],Ce=pe,be=function(){var e=Ce;for(Ce=pe.length?ge:pe,he=!0,ze=!1;e.length;)e.shift()();he=!1},Ae=function(e,n){he&&!n?e.apply(this,arguments):(Ce.push(e),ze||(ze=!0,(t.hidden?d:u)(be)))},Ae._lsFlush=be,Ae),M=function(e,t){return t?function(){w(e)}:function(){var t=this,n=arguments;w((function(){e.apply(t,n)}))}},N=function(e){var t,a=0,r=i.throttleDelay,o=i.ricTimeout,s=function(){t=!1,a=n.now(),e()},l=f&&o>49?function(){f(s,{timeout:o}),o!==i.ricTimeout&&(o=i.ricTimeout)}:M((function(){d(s)}),!0);return function(e){var i;(e=!0===e)&&(o=33),t||(t=!0,(i=r-(n.now()-a))<0&&(i=0),e||i<9?l():d(l,i))}},x=function(e){var t,a,i=99,r=function(){t=null,e()},o=function(){var e=n.now()-a;e<i?d(o,i-e):(f||r)(r)};return function(){a=n.now(),t||(t=d(o,i))}},L=(K=/^img$/i,Q=/^iframe$/i,V="onscroll"in e&&!/(gle|ing)bot/.test(navigator.userAgent),X=0,Y=0,Z=0,ee=-1,te=function(e){Z--,(!e||Z<0||!e.target)&&(Z=0)},ne=function(e){return null==J&&(J="hidden"==E(t.body,"visibility")),J||!("hidden"==E(e.parentNode,"visibility")&&"hidden"==E(e,"visibility"))},ae=function(e,n){var a,i=e,o=ne(e);for(I-=n,G+=n,j-=n,U+=n;o&&(i=i.offsetParent)&&i!=t.body&&i!=r;)(o=(E(i,"opacity")||1)>0)&&"visible"!=E(i,"overflow")&&(a=i.getBoundingClientRect(),o=U>a.left&&j<a.right&&G>a.top-1&&I<a.bottom+1);return o},ie=function(){var e,n,o,s,c,d,u,f,m,v,y,h,z=a.elements;if((k=i.loadMode)&&Z<8&&(e=z.length)){for(n=0,ee++;n<e;n++)if(z[n]&&!z[n]._lazyRace)if(!V||a.prematureUnveil&&a.prematureUnveil(z[n]))fe(z[n]);else if((f=z[n][l]("data-expand"))&&(d=1*f)||(d=Y),v||(v=!i.expand||i.expand<1?r.clientHeight>500&&r.clientWidth>500?500:370:i.expand,a._defEx=v,y=v*i.expFactor,h=i.hFac,J=null,Y<y&&Z<1&&ee>2&&k>2&&!t.hidden?(Y=y,ee=0):Y=k>1&&ee>1&&Z<6?v:X),m!==d&&($=innerWidth+d*h,q=innerHeight+d,u=-1*d,m=d),o=z[n].getBoundingClientRect(),(G=o.bottom)>=u&&(I=o.top)<=q&&(U=o.right)>=u*h&&(j=o.left)<=$&&(G||U||j||I)&&(i.loadHidden||ne(z[n]))&&(P&&Z<3&&!f&&(k<3||ee<4)||ae(z[n],d))){if(fe(z[n]),c=!0,Z>9)break}else!c&&P&&!s&&Z<4&&ee<4&&k>2&&(R[0]||i.preloadAfterLoad)&&(R[0]||!f&&(G||U||j||I||"auto"!=z[n][l](i.sizesAttr)))&&(s=R[0]||z[n]);s&&!c&&fe(s)}},re=N(ie),oe=function(e){var t=e.target;t._lazyCache?delete t._lazyCache:(te(e),p(t,i.loadedClass),g(t,i.loadingClass),C(t,le),b(t,"lazyloaded"))},se=M(oe),le=function(e){se({target:e.target})},ce=function(e,t){var n=e.getAttribute("data-load-mode")||i.iframeLoadMode;0==n?e.contentWindow.location.replace(t):1==n&&(e.src=t)},de=function(e){var t,n=e[l](i.srcsetAttr);(t=i.customMedia[e[l]("data-media")||e[l]("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},ue=M((function(e,t,n,a,r){var o,s,c,u,f,v;(f=b(e,"lazybeforeunveil",t)).defaultPrevented||(a&&(n?p(e,i.autosizesClass):e.setAttribute("sizes",a)),s=e[l](i.srcsetAttr),o=e[l](i.srcAttr),r&&(u=(c=e.parentNode)&&m.test(c.nodeName||"")),v=t.firesLoad||"src"in e&&(s||o||u),f={target:e},p(e,i.loadingClass),v&&(clearTimeout(D),D=d(te,2500),C(e,le,!0)),u&&h.call(c.getElementsByTagName("source"),de),s?e.setAttribute("srcset",s):o&&!u&&(Q.test(e.nodeName)?ce(e,o):e.src=o),r&&(s||u)&&A(e,{src:o})),e._lazyRace&&delete e._lazyRace,g(e,i.lazyClass),w((function(){var t=e.complete&&e.naturalWidth>1;v&&!t||(t&&p(e,i.fastLoadedClass),oe(f),e._lazyCache=!0,d((function(){"_lazyCache"in e&&delete e._lazyCache}),9)),"lazy"==e.loading&&Z--}),!0)})),fe=function(e){if(!e._lazyRace){var t,n=K.test(e.nodeName),a=n&&(e[l](i.sizesAttr)||e[l]("sizes")),r="auto"==a;(!r&&P||!n||!e[l]("src")&&!e.srcset||e.complete||z(e,i.errorClass)||!z(e,i.lazyClass))&&(t=b(e,"lazyunveilread").detail,r&&W.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,Z++,ue(e,t,r,a,n))}},me=x((function(){i.loadMode=3,re()})),ve=function(){3==i.loadMode&&(i.loadMode=2),me()},ye=function(){P||(n.now()-H<999?d(ye,999):(P=!0,i.loadMode=3,re(),c("scroll",ve,!0)))},{_:function(){H=n.now(),a.elements=t.getElementsByClassName(i.lazyClass),R=t.getElementsByClassName(i.lazyClass+" "+i.preloadClass),c("scroll",re,!0),c("resize",re,!0),c("pageshow",(function(e){if(e.persisted){var n=t.querySelectorAll("."+i.loadingClass);n.length&&n.forEach&&u((function(){n.forEach((function(e){e.complete&&fe(e)}))}))}})),e.MutationObserver?new MutationObserver(re).observe(r,{childList:!0,subtree:!0,attributes:!0}):(r[s]("DOMNodeInserted",re,!0),r[s]("DOMAttrModified",re,!0),setInterval(re,999)),c("hashchange",re,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach((function(e){t[s](e,re,!0)})),/d$|^c/.test(t.readyState)?ye():(c("load",ye),t[s]("DOMContentLoaded",re),d(ye,2e4)),a.elements.length?(ie(),w._lsFlush()):re()},checkElems:re,unveil:fe,_aLSL:ve}),W=(T=M((function(e,t,n,a){var i,r,o;if(e._lazysizesWidth=a,a+="px",e.setAttribute("sizes",a),m.test(t.nodeName||""))for(r=0,o=(i=t.getElementsByTagName("source")).length;r<o;r++)i[r].setAttribute("sizes",a);n.detail.dataAttr||A(e,n.detail)})),F=function(e,t,n){var a,i=e.parentNode;i&&(n=_(e,i,n),(a=b(e,"lazybeforesizes",{width:n,dataAttr:!!t})).defaultPrevented||(n=a.detail.width)&&n!==e._lazysizesWidth&&T(e,i,a,n))},O=x((function(){var e,t=B.length;if(t)for(e=0;e<t;e++)F(B[e])})),{_:function(){B=t.getElementsByClassName(i.autosizesClass),c("resize",O)},checkElems:O,updateElem:F}),S=function(){!S.i&&t.getElementsByClassName&&(S.i=!0,W._(),L._())};var B,T,F,O;var R,P,D,k,H,$,q,I,j,U,G,J,K,Q,V,X,Y,Z,ee,te,ne,ae,ie,re,oe,se,le,ce,de,ue,fe,me,ve,ye;var he,ze,pe,ge,Ce,be,Ae;return d((function(){i.init&&S()})),a={cfg:i,autoSizer:W,loader:L,init:S,uP:A,aC:p,rC:g,hC:z,fire:b,gW:_,rAF:w}}(t,t.document,Date);t.lazySizes=a,e.exports&&(e.exports=a)}("undefined"!=typeof window?window:{})}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,n),r.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";var e=n(90);n.n(e)().init()}()}();
//# sourceMappingURL=smush-lazy-load.min.js.map
/*! This file is auto-generated */
!function(c,d){"use strict";var e=!1,n=!1;if(d.querySelector)if(c.addEventListener)e=!0;if(c.wp=c.wp||{},!c.wp.receiveEmbedMessage)if(c.wp.receiveEmbedMessage=function(e){var t=e.data;if(t)if(t.secret||t.message||t.value)if(!/[^a-zA-Z0-9]/.test(t.secret)){for(var r,a,i,s=d.querySelectorAll('iframe[data-secret="'+t.secret+'"]'),n=d.querySelectorAll('blockquote[data-secret="'+t.secret+'"]'),o=0;o<n.length;o++)n[o].style.display="none";for(o=0;o<s.length;o++)if(r=s[o],e.source===r.contentWindow){if(r.removeAttribute("style"),"height"===t.message){if(1e3<(i=parseInt(t.value,10)))i=1e3;else if(~~i<200)i=200;r.height=i}if("link"===t.message)if(a=d.createElement("a"),i=d.createElement("a"),a.href=r.getAttribute("src"),i.href=t.value,i.host===a.host)if(d.activeElement===r)c.top.location.href=t.value}}},e)c.addEventListener("message",c.wp.receiveEmbedMessage,!1),d.addEventListener("DOMContentLoaded",t,!1),c.addEventListener("load",t,!1);function t(){if(!n){n=!0;for(var e,t,r=-1!==navigator.appVersion.indexOf("MSIE 10"),a=!!navigator.userAgent.match(/Trident.*rv:11\./),i=d.querySelectorAll("iframe.wp-embedded-content"),s=0;s<i.length;s++){if(!(e=i[s]).getAttribute("data-secret"))t=Math.random().toString(36).substr(2,10),e.src+="#?secret="+t,e.setAttribute("data-secret",t);if(r||a)(t=e.cloneNode(!0)).removeAttribute("security"),e.parentNode.replaceChild(t,e)}}}}(window,document);
/*!
 * WPBakery Page Builder v6.0.0 (https://wpbakery.com)
 * Copyright 2011-2020 Michael M, WPBakery
 * License: Commercial. More details: http://go.wpbakery.com/licensing
 */

// jscs:disable
// jshint ignore: start
document.documentElement.className += " js_active ", document.documentElement.className += "ontouchstart" in document.documentElement ? " vc_mobile " : " vc_desktop ",
    function() {
        for (var prefix = ["-webkit-", "-moz-", "-ms-", "-o-", ""], i = 0; i < prefix.length; i++) prefix[i] + "transform" in document.documentElement.style && (document.documentElement.className += " vc_transform ")
    }(),
    function() {
        "function" != typeof window.vc_js && (window.vc_js = function() {

        }), "function" != typeof window.vc_plugin_flexslider && (window.vc_plugin_flexslider = function($parent) {
            ($parent ? $parent.find(".wpb_flexslider") : jQuery(".wpb_flexslider")).each(function() {
                var this_element = jQuery(this),
                    sliderTimeout = 1e3 * parseInt(this_element.attr("data-interval"), 10),
                    sliderFx = this_element.attr("data-flex_fx"),
                    slideshow = !0;
                0 == sliderTimeout && (slideshow = !1), this_element.is(":visible") && this_element.flexslider({
                    animation: sliderFx,
                    slideshow: slideshow,
                    slideshowSpeed: sliderTimeout,
                    sliderSpeed: 800,
                    smoothHeight: !0
                })
            })
        }), "function" != typeof window.vc_googleplus && (window.vc_googleplus = function() {
            0 < jQuery(".wpb_googleplus").length && function() {
                var po = document.createElement("script");
                po.type = "text/javascript", po.async = !0, po.src = "https://apis.google.com/js/plusone.js";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(po, s)
            }()
        }), "function" != typeof window.vc_pinterest && (window.vc_pinterest = function() {
            0 < jQuery(".wpb_pinterest").length && function() {
                var po = document.createElement("script");
                po.type = "text/javascript", po.async = !0, po.src = "https://assets.pinterest.com/js/pinit.js";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(po, s)
            }()
        }), "function" != typeof window.vc_progress_bar && (window.vc_progress_bar = function() {
            void 0 !== jQuery.fn.vcwaypoint && jQuery(".vc_progress_bar").each(function() {
                var $el = jQuery(this);
                $el.vcwaypoint(function() {
                    $el.find(".vc_single_bar").each(function(index) {
                        var bar = jQuery(this).find(".vc_bar"),
                            val = bar.data("percentage-value");
                        setTimeout(function() {
                            bar.css({
                                width: val + "%"
                            })
                        }, 200 * index)
                    })
                }, {
                    offset: "85%"
                })
            })
        }), "function" != typeof window.vc_waypoints && (window.vc_waypoints = function() {
            void 0 !== jQuery.fn.vcwaypoint && jQuery(".wpb_animate_when_almost_visible:not(.wpb_start_animation)").each(function() {
                var $el = jQuery(this);
                $el.vcwaypoint(function() {
                    $el.addClass("wpb_start_animation animated")
                }, {
                    offset: "85%"
                })
            })
        }), "function" != typeof window.vc_toggleBehaviour && (window.vc_toggleBehaviour = function($el) {
            function event(e) {
                e && e.preventDefault && e.preventDefault();
                var element = jQuery(this).closest(".vc_toggle"),
                    content = element.find(".vc_toggle_content");
                element.hasClass("vc_toggle_active") ? content.slideUp({
                    duration: 300,
                    complete: function() {
                        element.removeClass("vc_toggle_active")
                    }
                }) : content.slideDown({
                    duration: 300,
                    complete: function() {
                        element.addClass("vc_toggle_active")
                    }
                })
            }
            $el ? $el.hasClass("vc_toggle_title") ? $el.unbind("click").on("click", event) : $el.find(".vc_toggle_title").off("click").on("click", event) : jQuery(".vc_toggle_title").off("click").on("click", event)
        }), "function" != typeof window.vc_tabsBehaviour && (window.vc_tabsBehaviour = function($tab) {
            if (jQuery.ui) {
                var $call = $tab || jQuery(".wpb_tabs, .wpb_tour"),
                    ver = jQuery.ui && jQuery.ui.version ? jQuery.ui.version.split(".") : "1.10",
                    old_version = 1 === parseInt(ver[0], 10) && parseInt(ver[1], 10) < 9;
                $call.each(function(index) {
                    var $tabs, interval = jQuery(this).attr("data-interval"),
                        tabs_array = [];
                    if ($tabs = jQuery(this).find(".wpb_tour_tabs_wrapper").tabs({
                            show: function(event, ui) {
                                wpb_prepare_tab_content(event, ui)
                            },
                            activate: function(event, ui) {
                                wpb_prepare_tab_content(event, ui)
                            }
                        }), interval && 0 < interval) try {
                        $tabs.tabs("rotate", 1e3 * interval)
                    } catch (err) {
                        window.console && window.console.warn && console.warn("tabs behaviours error", err)
                    }
                    jQuery(this).find(".wpb_tab").each(function() {
                        tabs_array.push(this.id)
                    }), jQuery(this).find(".wpb_tabs_nav li").on("click", function(e) {
                        return e && e.preventDefault && e.preventDefault(), old_version ? $tabs.tabs("select", jQuery("a", this).attr("href")) : $tabs.tabs("option", "active", jQuery(this).index()), !1
                    }), jQuery(this).find(".wpb_prev_slide a, .wpb_next_slide a").on("click", function(e) {
                        var index, length;
                        e && e.preventDefault && e.preventDefault(), old_version ? (index = $tabs.tabs("option", "selected"), jQuery(this).parent().hasClass("wpb_next_slide") ? index++ : index--, index < 0 ? index = $tabs.tabs("length") - 1 : index >= $tabs.tabs("length") && (index = 0), $tabs.tabs("select", index)) : (index = $tabs.tabs("option", "active"), length = $tabs.find(".wpb_tab").length, index = jQuery(this).parent().hasClass("wpb_next_slide") ? length <= index + 1 ? 0 : index + 1 : index - 1 < 0 ? length - 1 : index - 1, $tabs.tabs("option", "active", index))
                    })
                })
            }
        }), "function" != typeof window.vc_accordionBehaviour && (window.vc_accordionBehaviour = function() {
            jQuery(".wpb_accordion").each(function(index) {
                var $tabs, active_tab, collapsible, $this = jQuery(this);
                $this.attr("data-interval"), collapsible = !1 === (active_tab = !isNaN(jQuery(this).data("active-tab")) && 0 < parseInt($this.data("active-tab"), 10) && parseInt($this.data("active-tab"), 10) - 1) || "yes" === $this.data("collapsible"), $tabs = $this.find(".wpb_accordion_wrapper").accordion({
                    header: "> div > h3",
                    autoHeight: !1,
                    heightStyle: "content",
                    active: active_tab,
                    collapsible: collapsible,
                    navigation: !0,
                    activate: vc_accordionActivate,
                    change: function(event, ui) {
                        void 0 !== jQuery.fn.isotope && ui.newContent.find(".isotope").isotope("layout"), vc_carouselBehaviour(ui.newPanel)
                    }
                }), !0 === $this.data("vcDisableKeydown") && ($tabs.data("uiAccordion")._keydown = function() {})
            })
        }), "function" != typeof window.vc_teaserGrid && (window.vc_teaserGrid = function() {
            var layout_modes = {
                fitrows: "fitRows",
                masonry: "masonry"
            };
            jQuery(".wpb_grid .teaser_grid_container:not(.wpb_carousel), .wpb_filtered_grid .teaser_grid_container:not(.wpb_carousel)").each(function() {
                var $container = jQuery(this),
                    $thumbs = $container.find(".wpb_thumbnails"),
                    layout_mode = $thumbs.attr("data-layout-mode");
                $thumbs.isotope({
                    itemSelector: ".isotope-item",
                    layoutMode: void 0 === layout_modes[layout_mode] ? "fitRows" : layout_modes[layout_mode]
                }), $container.find(".categories_filter a").data("isotope", $thumbs).on("click", function(e) {
                    e && e.preventDefault && e.preventDefault();
                    var $thumbs = jQuery(this).data("isotope");
                    jQuery(this).parent().parent().find(".active").removeClass("active"), jQuery(this).parent().addClass("active"), $thumbs.isotope({
                        filter: jQuery(this).attr("data-filter")
                    })
                }), jQuery(window).bind("load resize", function() {
                    $thumbs.isotope("layout")
                })
            })
        }), "function" != typeof window.vc_carouselBehaviour && (window.vc_carouselBehaviour = function($parent) {
            ($parent ? $parent.find(".wpb_carousel") : jQuery(".wpb_carousel")).each(function() {
                var $this = jQuery(this);
                if (!0 !== $this.data("carousel_enabled") && $this.is(":visible")) {
                    $this.data("carousel_enabled", !0);
                    getColumnsCount(jQuery(this));
                    jQuery(this).hasClass("columns_count_1") && 0;
                    var carousel_li = jQuery(this).find(".wpb_thumbnails-fluid li");
                    carousel_li.css({
                        "margin-right": carousel_li.css("margin-left"),
                        "margin-left": 0
                    });
                    var fluid_ul = jQuery(this).find("ul.wpb_thumbnails-fluid");
                    fluid_ul.width(fluid_ul.width() + 300), jQuery(window).on("resize", function() {
                        screen_size != (screen_size = getSizeName()) && window.setTimeout(function() {
                            location.reload()
                        }, 20)
                    })
                }
            })
        }), "function" != typeof window.vc_slidersBehaviour && (window.vc_slidersBehaviour = function() {
            jQuery(".wpb_gallery_slides").each(function(index) {
                var $imagesGrid, this_element = jQuery(this);
                if (this_element.hasClass("wpb_slider_nivo")) {
                    var sliderTimeout = 1e3 * this_element.attr("data-interval");
                    0 === sliderTimeout && (sliderTimeout = 9999999999), this_element.find(".nivoSlider").nivoSlider({
                        effect: "boxRainGrow,boxRain,boxRainReverse,boxRainGrowReverse",
                        slices: 15,
                        boxCols: 8,
                        boxRows: 4,
                        animSpeed: 800,
                        pauseTime: sliderTimeout,
                        startSlide: 0,
                        directionNav: !0,
                        directionNavHide: !0,
                        controlNav: !0,
                        keyboardNav: !1,
                        pauseOnHover: !0,
                        manualAdvance: !1,
                        prevText: "Prev",
                        nextText: "Next"
                    })
                } else this_element.hasClass("wpb_image_grid") && (jQuery.fn.imagesLoaded ? $imagesGrid = this_element.find(".wpb_image_grid_ul").imagesLoaded(function() {
                    $imagesGrid.isotope({
                        itemSelector: ".isotope-item",
                        layoutMode: "fitRows"
                    })
                }) : this_element.find(".wpb_image_grid_ul").isotope({
                    itemSelector: ".isotope-item",
                    layoutMode: "fitRows"
                }))
            })
        }), "function" != typeof window.vc_prettyPhoto && (window.vc_prettyPhoto = function() {
            try {
                jQuery && jQuery.fn && jQuery.fn.prettyPhoto && jQuery('a.prettyphoto, .gallery-icon a[href*=".jpg"]').prettyPhoto({
                    animationSpeed: "normal",
                    hook: "data-rel",
                    padding: 15,
                    opacity: .7,
                    showTitle: !0,
                    allowresize: !0,
                    counter_separator_label: "/",
                    hideflash: !1,
                    deeplinking: !1,
                    modal: !1,
                    callback: function() {
                        -1 < location.href.indexOf("#!prettyPhoto") && (location.hash = "")
                    },
                    social_tools: ""
                })
            } catch (err) {
                window.console && window.console.warn && window.console.warn("vc_prettyPhoto initialize error", err)
            }
        }), "function" != typeof window.vc_google_fonts && (window.vc_google_fonts = function() {
            return window.console && window.console.warn && window.console.warn("function vc_google_fonts is deprecated, no need to use it"), !1
        }), window.vcParallaxSkroll = !1, "function" != typeof window.vc_rowBehaviour && (window.vc_rowBehaviour = function() {
            var vcSkrollrOptions, callSkrollInit, $ = window.jQuery;

            function fullWidthRow() {
                var $elements = $('[data-vc-full-width="true"]');
                $.each($elements, function(key, item) {
                    var $el = $(this);
                    $el.addClass("vc_hidden");
                    var $el_full = $el.next(".vc_row-full-width");
                    if ($el_full.length || ($el_full = $el.parent().next(".vc_row-full-width")), $el_full.length) {
                        var padding, paddingRight, el_margin_left = parseInt($el.css("margin-left"), 10),
                            el_margin_right = parseInt($el.css("margin-right"), 10),
                            offset = 0 - $el_full.offset().left - el_margin_left,
                            width = $(window).width();
                        if ("rtl" === $el.css("direction") && (offset -= $el_full.width(), offset += width, offset += el_margin_left, offset += el_margin_right), $el.css({
                                position: "relative",
                                left: offset,
                                "box-sizing": "border-box",
                                width: width
                            }), !$el.data("vcStretchContent")) "rtl" === $el.css("direction") ? ((padding = offset) < 0 && (padding = 0), (paddingRight = offset) < 0 && (paddingRight = 0)) : ((padding = -1 * offset) < 0 && (padding = 0), (paddingRight = width - padding - $el_full.width() + el_margin_left + el_margin_right) < 0 && (paddingRight = 0)), $el.css({
                            "padding-left": padding + "px",
                            "padding-right": paddingRight + "px"
                        });
                        $el.attr("data-vc-full-width-init", "true"), $el.removeClass("vc_hidden"), $(document).trigger("vc-full-width-row-single", {
                            el: $el,
                            offset: offset,
                            marginLeft: el_margin_left,
                            marginRight: el_margin_right,
                            elFull: $el_full,
                            width: width
                        })
                    }
                }), $(document).trigger("vc-full-width-row", $elements)
            }

            function fullHeightRow() {
                var windowHeight, offsetTop, fullHeight, $element = $(".vc_row-o-full-height:first");
                $element.length && (windowHeight = $(window).height(), (offsetTop = $element.offset().top) < windowHeight && (fullHeight = 100 - offsetTop / (windowHeight / 100), $element.css("min-height", fullHeight + "vh")));
                $(document).trigger("vc-full-height-row", $element)
            }
            $(window).off("resize.vcRowBehaviour").on("resize.vcRowBehaviour", fullWidthRow).on("resize.vcRowBehaviour", fullHeightRow), fullWidthRow(), fullHeightRow(), (0 < window.navigator.userAgent.indexOf("MSIE ") || navigator.userAgent.match(/Trident.*rv\:11\./)) && $(".vc_row-o-full-height").each(function() {
                "flex" === $(this).css("display") && $(this).wrap('<div class="vc_ie-flexbox-fixer"></div>')
            }), vc_initVideoBackgrounds(), callSkrollInit = !1, window.vcParallaxSkroll && window.vcParallaxSkroll.destroy(), $(".vc_parallax-inner").remove(), $("[data-5p-top-bottom]").removeAttr("data-5p-top-bottom data-30p-top-bottom"), $("[data-vc-parallax]").each(function() {
                var skrollrSize, skrollrStart, $parallaxElement, parallaxImage, youtubeId;
                callSkrollInit = !0, "on" === $(this).data("vcParallaxOFade") && $(this).children().attr("data-5p-top-bottom", "opacity:0;").attr("data-30p-top-bottom", "opacity:1;"), skrollrSize = 100 * $(this).data("vcParallax"), ($parallaxElement = $("<div />").addClass("vc_parallax-inner").appendTo($(this))).height(skrollrSize + "%"), parallaxImage = $(this).data("vcParallaxImage"), (youtubeId = vcExtractYoutubeId(parallaxImage)) ? insertYoutubeVideoAsBackground($parallaxElement, youtubeId) : void 0 !== parallaxImage && $parallaxElement.css("background-image", "url(" + parallaxImage + ")"), skrollrStart = -(skrollrSize - 100), $parallaxElement.attr("data-bottom-top", "top: " + skrollrStart + "%;").attr("data-top-bottom", "top: 0%;")
            }), callSkrollInit && window.skrollr && (vcSkrollrOptions = {
                forceHeight: !1,
                smoothScrolling: !1,
                mobileCheck: function() {
                    return !1
                }
            }, window.vcParallaxSkroll = skrollr.init(vcSkrollrOptions), window.vcParallaxSkroll)
        }), "function" != typeof window.vc_gridBehaviour && (window.vc_gridBehaviour = function() {
            jQuery.fn.vcGrid && jQuery("[data-vc-grid]").vcGrid()
        }), "function" != typeof window.getColumnsCount && (window.getColumnsCount = function(el) {
            for (var find = !1, i = 1; !1 === find;) {
                if (el.hasClass("columns_count_" + i)) return find = !0, i;
                i++
            }
        });
        var screen_size = getSizeName();

        function getSizeName() {
            var screen_w = jQuery(window).width();
            return 1170 < screen_w ? "desktop_wide" : 960 < screen_w && screen_w < 1169 ? "desktop" : 768 < screen_w && screen_w < 959 ? "tablet" : 300 < screen_w && screen_w < 767 ? "mobile" : screen_w < 300 ? "mobile_portrait" : ""
        }
        "function" != typeof window.wpb_prepare_tab_content && (window.wpb_prepare_tab_content = function(event, ui) {
            var $ui_panel, $google_maps, panel = ui.panel || ui.newPanel,
                $pie_charts = panel.find(".vc_pie_chart:not(.vc_ready)"),
                $round_charts = panel.find(".vc_round-chart"),
                $line_charts = panel.find(".vc_line-chart"),
                $carousel = panel.find('[data-ride="vc_carousel"]');
            if (vc_carouselBehaviour(), vc_plugin_flexslider(panel), ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function() {
                    var grid = jQuery(this).data("vcGrid");
                    grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
                }), panel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && panel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function() {
                    var grid = jQuery(this).data("vcGrid");
                    grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
                }), $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(), $round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart({
                    reload: !1
                }), $line_charts.length && jQuery.fn.vcLineChart && $line_charts.vcLineChart({
                    reload: !1
                }), $carousel.length && jQuery.fn.carousel && $carousel.carousel("resizeAction"), $ui_panel = panel.find(".isotope, .wpb_image_grid_ul"), $google_maps = panel.find(".wpb_gmaps_widget"), 0 < $ui_panel.length && $ui_panel.isotope("layout"), $google_maps.length && !$google_maps.is(".map_ready")) {
                var $frame = $google_maps.find("iframe");
                $frame.attr("src", $frame.attr("src")), $google_maps.addClass("map_ready")
            }
            panel.parents(".isotope").length && panel.parents(".isotope").each(function() {
                jQuery(this).isotope("layout")
            })
        }), "function" != typeof window.vc_ttaActivation && (window.vc_ttaActivation = function() {
            jQuery("[data-vc-accordion]").on("show.vc.accordion", function(e) {
                var $ = window.jQuery,
                    ui = {};
                ui.newPanel = $(this).data("vc.accordion").getTarget(), window.wpb_prepare_tab_content(e, ui)
            })
        }), "function" != typeof window.vc_accordionActivate && (window.vc_accordionActivate = function(event, ui) {
            if (ui.newPanel.length && ui.newHeader.length) {
                var $pie_charts = ui.newPanel.find(".vc_pie_chart:not(.vc_ready)"),
                    $round_charts = ui.newPanel.find(".vc_round-chart"),
                    $line_charts = ui.newPanel.find(".vc_line-chart"),
                    $carousel = ui.newPanel.find('[data-ride="vc_carousel"]');
                void 0 !== jQuery.fn.isotope && ui.newPanel.find(".isotope, .wpb_image_grid_ul").isotope("layout"), ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function() {
                    var grid = jQuery(this).data("vcGrid");
                    grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
                }), vc_carouselBehaviour(ui.newPanel), vc_plugin_flexslider(ui.newPanel), $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(), $round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart({
                    reload: !1
                }), $line_charts.length && jQuery.fn.vcLineChart && $line_charts.vcLineChart({
                    reload: !1
                }), $carousel.length && jQuery.fn.carousel && $carousel.carousel("resizeAction"), ui.newPanel.parents(".isotope").length && ui.newPanel.parents(".isotope").each(function() {
                    jQuery(this).isotope("layout")
                })
            }
        }), "function" != typeof window.initVideoBackgrounds && (window.initVideoBackgrounds = function() {
            return window.console && window.console.warn && window.console.warn("this function is deprecated use vc_initVideoBackgrounds"), vc_initVideoBackgrounds()
        }), "function" != typeof window.vc_initVideoBackgrounds && (window.vc_initVideoBackgrounds = function() {
            jQuery("[data-vc-video-bg]").each(function() {
                var youtubeUrl, youtubeId, $element = jQuery(this);
                $element.data("vcVideoBg") ? (youtubeUrl = $element.data("vcVideoBg"), (youtubeId = vcExtractYoutubeId(youtubeUrl)) && ($element.find(".vc_video-bg").remove(), insertYoutubeVideoAsBackground($element, youtubeId)), jQuery(window).on("grid:items:added", function(event, $grid) {
                    $element.has($grid).length && vcResizeVideoBackground($element)
                })) : $element.find(".vc_video-bg").remove()
            })
        }), "function" != typeof window.insertYoutubeVideoAsBackground && (window.insertYoutubeVideoAsBackground = function($element, youtubeId, counter) {
            if ("undefined" == typeof YT || void 0 === YT.Player) return 100 < (counter = void 0 === counter ? 0 : counter) ? void console.warn("Too many attempts to load YouTube api") : void setTimeout(function() {
                insertYoutubeVideoAsBackground($element, youtubeId, counter++)
            }, 100);
            var $container = $element.prepend('<div class="vc_video-bg vc_hidden-xs"><div class="inner"></div></div>').find(".inner");
            new YT.Player($container[0], {
                width: "100%",
                height: "100%",
                videoId: youtubeId,
                playerVars: {
                    playlist: youtubeId,
                    iv_load_policy: 3,
                    enablejsapi: 1,
                    disablekb: 1,
                    autoplay: 1,
                    controls: 0,
                    showinfo: 0,
                    rel: 0,
                    loop: 1,
                    wmode: "transparent"
                },
                events: {
                    onReady: function(event) {
                        event.target.mute().setLoop(!0)
                    }
                }
            }), vcResizeVideoBackground($element), jQuery(window).bind("resize", function() {
                vcResizeVideoBackground($element)
            })
        }), "function" != typeof window.vcResizeVideoBackground && (window.vcResizeVideoBackground = function($element) {
            var iframeW, iframeH, marginLeft, marginTop, containerW = $element.innerWidth(),
                containerH = $element.innerHeight();
            containerW / containerH < 16 / 9 ? (iframeW = containerH * (16 / 9), iframeH = containerH, marginLeft = -Math.round((iframeW - containerW) / 2) + "px", marginTop = -Math.round((iframeH - containerH) / 2) + "px") : (iframeH = (iframeW = containerW) * (9 / 16), marginTop = -Math.round((iframeH - containerH) / 2) + "px", marginLeft = -Math.round((iframeW - containerW) / 2) + "px"), iframeW += "px", iframeH += "px", $element.find(".vc_video-bg iframe").css({
                maxWidth: "1000%",
                marginLeft: marginLeft,
                marginTop: marginTop,
                width: iframeW,
                height: iframeH
            })
        }), "function" != typeof window.vcExtractYoutubeId && (window.vcExtractYoutubeId = function(url) {
            if (void 0 === url) return !1;
            var id = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
            return null !== id && id[1]
        }), "function" != typeof window.vc_googleMapsPointer && (window.vc_googleMapsPointer = function() {
            var $ = window.jQuery,
                $wpbGmapsWidget = $(".wpb_gmaps_widget");
            $wpbGmapsWidget.on("click", function() {
                $("iframe", this).css("pointer-events", "auto")
            }), $wpbGmapsWidget.on("mouseleave", function() {
                $("iframe", this).css("pointer-events", "none")
            }), $(".wpb_gmaps_widget iframe").css("pointer-events", "none")
        }), "function" != typeof window.vc_setHoverBoxPerspective && (window.vc_setHoverBoxPerspective = function(hoverBox) {
            hoverBox.each(function() {
                var $this = jQuery(this),
                    perspective = 4 * $this.width() + "px";
                $this.css("perspective", perspective)
            })
        }), "function" != typeof window.vc_setHoverBoxHeight && (window.vc_setHoverBoxHeight = function(hoverBox) {
            hoverBox.each(function() {
                var $this = jQuery(this),
                    hoverBoxInner = $this.find(".vc-hoverbox-inner");
                hoverBoxInner.css("min-height", 0);
                var frontHeight = $this.find(".vc-hoverbox-front-inner").outerHeight(),
                    backHeight = $this.find(".vc-hoverbox-back-inner").outerHeight(),
                    hoverBoxHeight = backHeight < frontHeight ? frontHeight : backHeight;
                hoverBoxHeight < 250 && (hoverBoxHeight = 250), hoverBoxInner.css("min-height", hoverBoxHeight + "px")
            })
        }), "function" != typeof window.vc_prepareHoverBox && (window.vc_prepareHoverBox = function() {
            var hoverBox = jQuery(".vc-hoverbox");
            vc_setHoverBoxHeight(hoverBox), vc_setHoverBoxPerspective(hoverBox)
        }), jQuery(document).ready(window.vc_prepareHoverBox), jQuery(window).resize(window.vc_prepareHoverBox), jQuery(document).ready(function($) {
            window.vc_js()
        })
    }(window.jQuery);
/**
 * vivus - JavaScript library to make drawing animation on SVG
 * @version v0.4.2
 * @link https://github.com/maxwellito/vivus
 * @license MIT
 */
"use strict";!function(){function t(t){if("undefined"==typeof t)throw new Error('Pathformer [constructor]: "element" parameter is required');if(t.constructor===String&&(t=document.getElementById(t),!t))throw new Error('Pathformer [constructor]: "element" parameter is not related to an existing ID');if(!(t instanceof window.SVGElement||t instanceof window.SVGGElement||/^svg$/i.test(t.nodeName)))throw new Error('Pathformer [constructor]: "element" parameter must be a string or a SVGelement');this.el=t,this.scan(t)}function e(t,e,n){r(),this.isReady=!1,this.setElement(t,e),this.setOptions(e),this.setCallback(n),this.isReady&&this.init()}t.prototype.TYPES=["line","ellipse","circle","polygon","polyline","rect"],t.prototype.ATTR_WATCH=["cx","cy","points","r","rx","ry","x","x1","x2","y","y1","y2"],t.prototype.scan=function(t){for(var e,r,n,i,a=t.querySelectorAll(this.TYPES.join(",")),o=0;o<a.length;o++)r=a[o],e=this[r.tagName.toLowerCase()+"ToPath"],n=e(this.parseAttr(r.attributes)),i=this.pathMaker(r,n),r.parentNode.replaceChild(i,r)},t.prototype.lineToPath=function(t){var e={},r=t.x1||0,n=t.y1||0,i=t.x2||0,a=t.y2||0;return e.d="M"+r+","+n+"L"+i+","+a,e},t.prototype.rectToPath=function(t){var e={},r=parseFloat(t.x)||0,n=parseFloat(t.y)||0,i=parseFloat(t.width)||0,a=parseFloat(t.height)||0;if(t.rx||t.ry){var o=parseInt(t.rx,10)||-1,s=parseInt(t.ry,10)||-1;o=Math.min(Math.max(0>o?s:o,0),i/2),s=Math.min(Math.max(0>s?o:s,0),a/2),e.d="M "+(r+o)+","+n+" L "+(r+i-o)+","+n+" A "+o+","+s+",0,0,1,"+(r+i)+","+(n+s)+" L "+(r+i)+","+(n+a-s)+" A "+o+","+s+",0,0,1,"+(r+i-o)+","+(n+a)+" L "+(r+o)+","+(n+a)+" A "+o+","+s+",0,0,1,"+r+","+(n+a-s)+" L "+r+","+(n+s)+" A "+o+","+s+",0,0,1,"+(r+o)+","+n}else e.d="M"+r+" "+n+" L"+(r+i)+" "+n+" L"+(r+i)+" "+(n+a)+" L"+r+" "+(n+a)+" Z";return e},t.prototype.polylineToPath=function(t){var e,r,n={},i=t.points.trim().split(" ");if(-1===t.points.indexOf(",")){var a=[];for(e=0;e<i.length;e+=2)a.push(i[e]+","+i[e+1]);i=a}for(r="M"+i[0],e=1;e<i.length;e++)-1!==i[e].indexOf(",")&&(r+="L"+i[e]);return n.d=r,n},t.prototype.polygonToPath=function(e){var r=t.prototype.polylineToPath(e);return r.d+="Z",r},t.prototype.ellipseToPath=function(t){var e={},r=parseFloat(t.rx)||0,n=parseFloat(t.ry)||0,i=parseFloat(t.cx)||0,a=parseFloat(t.cy)||0,o=i-r,s=a,h=parseFloat(i)+parseFloat(r),l=a;return e.d="M"+o+","+s+"A"+r+","+n+" 0,1,1 "+h+","+l+"A"+r+","+n+" 0,1,1 "+o+","+l,e},t.prototype.circleToPath=function(t){var e={},r=parseFloat(t.r)||0,n=parseFloat(t.cx)||0,i=parseFloat(t.cy)||0,a=n-r,o=i,s=parseFloat(n)+parseFloat(r),h=i;return e.d="M"+a+","+o+"A"+r+","+r+" 0,1,1 "+s+","+h+"A"+r+","+r+" 0,1,1 "+a+","+h,e},t.prototype.pathMaker=function(t,e){var r,n,i=document.createElementNS("http://www.w3.org/2000/svg","path");for(r=0;r<t.attributes.length;r++)n=t.attributes[r],-1===this.ATTR_WATCH.indexOf(n.name)&&i.setAttribute(n.name,n.value);for(r in e)i.setAttribute(r,e[r]);return i},t.prototype.parseAttr=function(t){for(var e,r={},n=0;n<t.length;n++){if(e=t[n],-1!==this.ATTR_WATCH.indexOf(e.name)&&-1!==e.value.indexOf("%"))throw new Error("Pathformer [parseAttr]: a SVG shape got values in percentage. This cannot be transformed into 'path' tags. Please use 'viewBox'.");r[e.name]=e.value}return r};var r,n,i,a;e.LINEAR=function(t){return t},e.EASE=function(t){return-Math.cos(t*Math.PI)/2+.5},e.EASE_OUT=function(t){return 1-Math.pow(1-t,3)},e.EASE_IN=function(t){return Math.pow(t,3)},e.EASE_OUT_BOUNCE=function(t){var e=-Math.cos(.5*t*Math.PI)+1,r=Math.pow(e,1.5),n=Math.pow(1-t,2),i=-Math.abs(Math.cos(2.5*r*Math.PI))+1;return 1-n+i*n},e.prototype.setElement=function(t,e){if("undefined"==typeof t)throw new Error('Vivus [constructor]: "element" parameter is required');if(t.constructor===String&&(t=document.getElementById(t),!t))throw new Error('Vivus [constructor]: "element" parameter is not related to an existing ID');if(this.parentEl=t,e&&e.file){var r=document.createElement("object");r.setAttribute("type","image/svg+xml"),r.setAttribute("data",e.file),r.setAttribute("built-by-vivus","true"),t.appendChild(r),t=r}switch(t.constructor){case window.SVGSVGElement:case window.SVGElement:case window.SVGGElement:this.el=t,this.isReady=!0;break;case window.HTMLObjectElement:var n,i;i=this,n=function(e){if(!i.isReady){if(i.el=t.contentDocument&&t.contentDocument.querySelector("svg"),!i.el&&e)throw new Error("Vivus [constructor]: object loaded does not contain any SVG");return i.el?(t.getAttribute("built-by-vivus")&&(i.parentEl.insertBefore(i.el,t),i.parentEl.removeChild(t),i.el.setAttribute("width","100%"),i.el.setAttribute("height","100%")),i.isReady=!0,i.init(),!0):void 0}},n()||t.addEventListener("load",n);break;default:throw new Error('Vivus [constructor]: "element" parameter is not valid (or miss the "file" attribute)')}},e.prototype.setOptions=function(t){var r=["delayed","sync","async","nsync","oneByOne","scenario","scenario-sync"],n=["inViewport","manual","autostart"];if(void 0!==t&&t.constructor!==Object)throw new Error('Vivus [constructor]: "options" parameter must be an object');if(t=t||{},t.type&&-1===r.indexOf(t.type))throw new Error("Vivus [constructor]: "+t.type+" is not an existing animation `type`");if(this.type=t.type||r[0],t.start&&-1===n.indexOf(t.start))throw new Error("Vivus [constructor]: "+t.start+" is not an existing `start` option");if(this.start=t.start||n[0],this.isIE=-1!==window.navigator.userAgent.indexOf("MSIE")||-1!==window.navigator.userAgent.indexOf("Trident/")||-1!==window.navigator.userAgent.indexOf("Edge/"),this.duration=a(t.duration,120),this.delay=a(t.delay,null),this.dashGap=a(t.dashGap,1),this.forceRender=t.hasOwnProperty("forceRender")?!!t.forceRender:this.isIE,this.reverseStack=!!t.reverseStack,this.selfDestroy=!!t.selfDestroy,this.onReady=t.onReady,this.map=[],this.frameLength=this.currentFrame=this.delayUnit=this.speed=this.handle=null,this.ignoreInvisible=t.hasOwnProperty("ignoreInvisible")?!!t.ignoreInvisible:!1,this.animTimingFunction=t.animTimingFunction||e.LINEAR,this.pathTimingFunction=t.pathTimingFunction||e.LINEAR,this.delay>=this.duration)throw new Error("Vivus [constructor]: delay must be shorter than duration")},e.prototype.setCallback=function(t){if(t&&t.constructor!==Function)throw new Error('Vivus [constructor]: "callback" parameter must be a function');this.callback=t||function(){}},e.prototype.mapping=function(){var t,e,r,n,i,o,s,h;for(h=o=s=0,e=this.el.querySelectorAll("path"),t=0;t<e.length;t++)r=e[t],this.isInvisible(r)||(i={el:r,length:Math.ceil(r.getTotalLength())},isNaN(i.length)?window.console&&console.warn&&console.warn("Vivus [mapping]: cannot retrieve a path element length",r):(this.map.push(i),r.style.strokeDasharray=i.length+" "+(i.length+2*this.dashGap),r.style.strokeDashoffset=i.length+this.dashGap,i.length+=this.dashGap,o+=i.length,this.renderPath(t)));for(o=0===o?1:o,this.delay=null===this.delay?this.duration/3:this.delay,this.delayUnit=this.delay/(e.length>1?e.length-1:1),this.reverseStack&&this.map.reverse(),t=0;t<this.map.length;t++){switch(i=this.map[t],this.type){case"delayed":i.startAt=this.delayUnit*t,i.duration=this.duration-this.delay;break;case"oneByOne":i.startAt=s/o*this.duration,i.duration=i.length/o*this.duration;break;case"sync":case"async":case"nsync":i.startAt=0,i.duration=this.duration;break;case"scenario-sync":r=i.el,n=this.parseAttr(r),i.startAt=h+(a(n["data-delay"],this.delayUnit)||0),i.duration=a(n["data-duration"],this.duration),h=void 0!==n["data-async"]?i.startAt:i.startAt+i.duration,this.frameLength=Math.max(this.frameLength,i.startAt+i.duration);break;case"scenario":r=i.el,n=this.parseAttr(r),i.startAt=a(n["data-start"],this.delayUnit)||0,i.duration=a(n["data-duration"],this.duration),this.frameLength=Math.max(this.frameLength,i.startAt+i.duration)}s+=i.length,this.frameLength=this.frameLength||this.duration}},e.prototype.drawer=function(){var t=this;if(this.currentFrame+=this.speed,this.currentFrame<=0)this.stop(),this.reset();else{if(!(this.currentFrame>=this.frameLength))return this.trace(),this.handle=n(function(){t.drawer()}),void 0;this.stop(),this.currentFrame=this.frameLength,this.trace(),this.selfDestroy&&this.destroy()}this.callback(this),this.instanceCallback&&(this.instanceCallback(this),this.instanceCallback=null)},e.prototype.trace=function(){var t,e,r,n;for(n=this.animTimingFunction(this.currentFrame/this.frameLength)*this.frameLength,t=0;t<this.map.length;t++)r=this.map[t],e=(n-r.startAt)/r.duration,e=this.pathTimingFunction(Math.max(0,Math.min(1,e))),r.progress!==e&&(r.progress=e,r.el.style.strokeDashoffset=Math.floor(r.length*(1-e)),this.renderPath(t))},e.prototype.renderPath=function(t){if(this.forceRender&&this.map&&this.map[t]){var e=this.map[t],r=e.el.cloneNode(!0);e.el.parentNode.replaceChild(r,e.el),e.el=r}},e.prototype.init=function(){this.frameLength=0,this.currentFrame=0,this.map=[],new t(this.el),this.mapping(),this.starter(),this.onReady&&this.onReady(this)},e.prototype.starter=function(){switch(this.start){case"manual":return;case"autostart":this.play();break;case"inViewport":var t=this,e=function(){t.isInViewport(t.parentEl,1)&&(t.play(),window.removeEventListener("scroll",e))};window.addEventListener("scroll",e),e()}},e.prototype.getStatus=function(){return 0===this.currentFrame?"start":this.currentFrame===this.frameLength?"end":"progress"},e.prototype.reset=function(){return this.setFrameProgress(0)},e.prototype.finish=function(){return this.setFrameProgress(1)},e.prototype.setFrameProgress=function(t){return t=Math.min(1,Math.max(0,t)),this.currentFrame=Math.round(this.frameLength*t),this.trace(),this},e.prototype.play=function(t,e){if(this.instanceCallback=null,t&&"function"==typeof t)this.instanceCallback=t,t=null;else if(t&&"number"!=typeof t)throw new Error("Vivus [play]: invalid speed");return e&&"function"==typeof e&&!this.instanceCallback&&(this.instanceCallback=e),this.speed=t||1,this.handle||this.drawer(),this},e.prototype.stop=function(){return this.handle&&(i(this.handle),this.handle=null),this},e.prototype.destroy=function(){this.stop();var t,e;for(t=0;t<this.map.length;t++)e=this.map[t],e.el.style.strokeDashoffset=null,e.el.style.strokeDasharray=null,this.renderPath(t)},e.prototype.isInvisible=function(t){var e,r=t.getAttribute("data-ignore");return null!==r?"false"!==r:this.ignoreInvisible?(e=t.getBoundingClientRect(),!e.width&&!e.height):!1},e.prototype.parseAttr=function(t){var e,r={};if(t&&t.attributes)for(var n=0;n<t.attributes.length;n++)e=t.attributes[n],r[e.name]=e.value;return r},e.prototype.isInViewport=function(t,e){var r=this.scrollY(),n=r+this.getViewportH(),i=t.getBoundingClientRect(),a=i.height,o=r+i.top,s=o+a;return e=e||0,n>=o+a*e&&s>=r},e.prototype.getViewportH=function(){var t=this.docElem.clientHeight,e=window.innerHeight;return e>t?e:t},e.prototype.scrollY=function(){return window.pageYOffset||this.docElem.scrollTop},r=function(){e.prototype.docElem||(e.prototype.docElem=window.document.documentElement,n=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)}}(),i=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(t){return window.clearTimeout(t)}}())},a=function(t,e){var r=parseInt(t,10);return r>=0?r:e},"function"==typeof define&&define.amd?define([],function(){return e}):"object"==typeof exports?module.exports=e:window.Vivus=e}();