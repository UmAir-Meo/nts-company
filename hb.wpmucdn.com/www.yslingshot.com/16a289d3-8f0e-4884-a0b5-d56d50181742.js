/**handles:page-scroll-to-id-plugin-script,salient-social,wphb-lazy-load,jquery-easing,jquery-mousewheel,nectar_priority,nectar-transit,nectar-waypoints,imagesLoaded,hoverintent,fancyBox,touchswipe,caroufredsel,intersection-observer,flickity,superfish,nectar-frontend,select2,wpb_composer_front_js**/
/* Page scroll to id - version 1.7.3 */
!function(v,M,c,e){var n,x,s,i,l,a,o,r,u,h,t,d,p="mPageScroll2id",b="mPS2id",g={scrollSpeed:1e3,autoScrollSpeed:!0,scrollEasing:"easeInOutQuint",scrollingEasing:"easeOutQuint",pageEndSmoothScroll:!0,layout:"vertical",offset:0,highlightSelector:!1,clickedClass:b+"-clicked",targetClass:b+"-target",highlightClass:b+"-highlight",forceSingleHighlight:!1,keepHighlightUntilNext:!1,highlightByNextTarget:!1,disablePluginBelow:!1,clickEvents:!0,appendHash:!1,onStart:function(){},onComplete:function(){},defaultSelector:!1,live:!0,liveSelector:!1,excludeSelectors:!1,encodeLinks:!1,inIframe:!1},f=0,_=/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/,w={init:function(e){e=v.extend(!0,{},g,e);if(v(c).data(b,e),x=v(c).data(b),!this.selector){var t="__"+b;this.each(function(){var e=v(this);e.hasClass(t)||e.addClass(t)}),this.selector="."+t}x.liveSelector&&(this.selector+=","+x.liveSelector),n=n?n+","+this.selector:this.selector,x.defaultSelector&&("object"==typeof v(n)&&0!==v(n).length||(n=".m_PageScroll2id,a[rel~='m_PageScroll2id'],.page-scroll-to-id,a[rel~='page-scroll-to-id'],._ps2id")),x.clickEvents&&v(c).off("."+b).on("click."+b,n,function(e){if(m._isDisabled.call(null))m._removeClasses.call(null);else{var t=v(this),n=t.attr("href"),s=t.prop("href").baseVal||t.prop("href");x.excludeSelectors&&t.is(x.excludeSelectors)||n&&-1!==n.indexOf("#/")||(m._reset.call(null),h=t.data("ps2id-offset")||0,m._isValid.call(null,n,s)&&m._findTarget.call(null,n)&&(e.preventDefault(),i="selector",l=t,m._setClasses.call(null,!0),m._scrollTo.call(null)))}}),v(M).off("."+b).on("scroll."+b+" resize."+b,function(){if(m._isDisabled.call(null))m._removeClasses.call(null);else{var i=v("._"+b+"-t");i.each(function(e){var t=v(this),n=t.attr("id"),s=m._findHighlight.call(null,n);m._setClasses.call(null,!1,t,s),e==i.length-1&&m._extendClasses.call(null)})}}),s=!0,m._setup.call(null),m._live.call(null)},scrollTo:function(e,t){if(m._isDisabled.call(null))m._removeClasses.call(null);else if(e&&void 0!==e){m._isInit.call(null);var n={layout:x.layout,offset:x.offset,clicked:!1};t=v.extend(!0,{},n,t);m._reset.call(null),r=t.layout,u=t.offset,e=-1!==e.indexOf("#")?e:"#"+e,m._isValid.call(null,e)&&m._findTarget.call(null,e)&&(i="scrollTo",(l=t.clicked)&&m._setClasses.call(null,!0),m._scrollTo.call(null))}},destroy:function(){v(M).off("."+b),v(c).off("."+b).removeData(b),v("._"+b+"-t").removeData(b),m._removeClasses.call(null,!0)}},m={_isDisabled:function(){var e=M,t="inner",n=x.disablePluginBelow instanceof Array?[x.disablePluginBelow[0]||0,x.disablePluginBelow[1]||0]:[x.disablePluginBelow||0,0];return"innerWidth"in M||(t="client",e=c.documentElement||c.body),e[t+"Width"]<=n[0]||e[t+"Height"]<=n[1]},_isValid:function(e,t){if(e){var n=-1!==(t=t||e).indexOf("#/")?t.split("#/")[0]:t.split("#")[0],s=(x.inIframe||M.location===M.parent.location?M.location:M.parent.location).toString().split("#")[0];return"#"!==e&&-1!==e.indexOf("#")&&(""===n||decodeURIComponent(n)===decodeURIComponent(s))}},_setup:function(){var l=m._highlightSelector(),o=1,r=0;return v(l).each(function(){var e=v(this),t=e.attr("href"),n=e.prop("href").baseVal||e.prop("href");if(m._isValid.call(null,t,n)){if(x.excludeSelectors&&e.is(x.excludeSelectors))return;var s=-1!==t.indexOf("#/")?t.split("#/")[1]:t.substring(t.indexOf("#")+1),i=_.test(s)?v(c.getElementById(s)):v("#"+s);if(0<i.length){x.highlightByNextTarget&&i!==r&&(r?r.data(b,{tn:i}):i.data(b,{tn:"0"}),r=i),i.hasClass("_"+b+"-t")||i.addClass("_"+b+"-t"),i.data(b,{i:o}),e.hasClass("_"+b+"-h")||e.addClass("_"+b+"-h");var a=m._findHighlight.call(null,s);m._setClasses.call(null,!1,i,a),f=o,++o==v(l).length&&m._extendClasses.call(null)}}})},_highlightSelector:function(){return x.highlightSelector&&""!==x.highlightSelector?x.highlightSelector:n},_findTarget:function(e){var t=-1!==e.indexOf("#/")?e.split("#/")[1]:e.substring(e.indexOf("#")+1),n=_.test(t)?v(c.getElementById(t)):v("#"+t);if(n.length<1||"fixed"===n.css("position")){if("top"!==t)return;n=v("body")}return a=n,r||(r=x.layout),u=m._setOffset.call(null),(o=[(n.offset().top-u[0]).toString(),(n.offset().left-u[1]).toString()])[0]=o[0]<0?0:o[0],o[1]=o[1]<0?0:o[1],o},_setOffset:function(){var e,t,n,s;switch(u||(u=x.offset?x.offset:0),h&&(u=h),typeof u){case"object":case"string":0<(t=[(e=[u.y?u.y:u,u.x?u.x:u])[0]instanceof jQuery?e[0]:v(e[0]),e[1]instanceof jQuery?e[1]:v(e[1])])[0].length?(n=t[0].height(),"fixed"===t[0].css("position")&&(n+=t[0][0].offsetTop)):n=!isNaN(parseFloat(e[0]))&&isFinite(e[0])?parseInt(e[0]):0,0<t[1].length?(s=t[1].width(),"fixed"===t[1].css("position")&&(s+=t[1][0].offsetLeft)):s=!isNaN(parseFloat(e[1]))&&isFinite(e[1])?parseInt(e[1]):0;break;case"function":(e=u.call(null))instanceof Array?(n=e[0],s=e[1]):n=s=e;break;default:n=s=parseInt(u)}return[n,s]},_findHighlight:function(e){var t=x.inIframe||M.location===M.parent.location?M.location:M.parent.location,n=t.toString().split("#")[0],s=t.pathname;if(-1!==n.indexOf("'")&&(n=n.replace("'","\\'")),-1!==s.indexOf("'")&&(s=s.replace("'","\\'")),n=decodeURIComponent(n),s=decodeURIComponent(s),x.encodeLinks){var i=encodeURI(n).toLowerCase(),a=encodeURI(s).toLowerCase();return v("._"+b+"-h[href='#"+e+"'],._"+b+"-h[href='"+n+"#"+e+"'],._"+b+"-h[href='"+s+"#"+e+"'],._"+b+"-h[href='#/"+e+"'],._"+b+"-h[href='"+n+"#/"+e+"'],._"+b+"-h[href='"+s+"#/"+e+"'],._"+b+"-h[href='"+i+"#/"+e+"'],._"+b+"-h[href='"+i+"#"+e+"'],._"+b+"-h[href='"+a+"#/"+e+"'],._"+b+"-h[href='"+a+"#"+e+"']")}return v("._"+b+"-h[href='#"+e+"'],._"+b+"-h[href='"+n+"#"+e+"'],._"+b+"-h[href='"+s+"#"+e+"'],._"+b+"-h[href='#/"+e+"'],._"+b+"-h[href='"+n+"#/"+e+"'],._"+b+"-h[href='"+s+"#/"+e+"']")},_setClasses:function(e,t,n){var s=x.clickedClass,i=x.targetClass,a=x.highlightClass;e&&s&&""!==s?(v("."+s).removeClass(s),l.addClass(s)):t&&i&&""!==i&&n&&a&&""!==a&&(m._currentTarget.call(null,t)?(t.addClass(i),n.addClass(a)):(!x.keepHighlightUntilNext||1<v("."+a).length)&&(t.removeClass(i),n.removeClass(a)))},_extendClasses:function(){var e=x.targetClass,t=x.highlightClass,n=v("."+e),s=v("."+t),i=e+"-first",a=e+"-last",l=t+"-first",o=t+"-last";v("._"+b+"-t").removeClass(i+" "+a),v("._"+b+"-h").removeClass(l+" "+o),x.forceSingleHighlight?x.keepHighlightUntilNext&&1<n.length?(n.slice(0,1).removeClass(e),s.slice(0,1).removeClass(t)):(n.slice(1).removeClass(e),s.slice(1).removeClass(t)):(n.slice(0,1).addClass(i).end().slice(-1).addClass(a),s.slice(0,1).addClass(l).end().slice(-1).addClass(o))},_removeClasses:function(e){v("."+x.clickedClass).removeClass(x.clickedClass),v("."+x.targetClass).removeClass(x.targetClass+" "+x.targetClass+"-first "+x.targetClass+"-last"),v("."+x.highlightClass).removeClass(x.highlightClass+" "+x.highlightClass+"-first "+x.highlightClass+"-last"),e&&(v("._"+b+"-t").removeClass("_"+b+"-t"),v("._"+b+"-h").removeClass("_"+b+"-h"))},_currentTarget:function(e){if(e.data(b)){var t=x["target_"+e.data(b).i],n=e.data("ps2id-target"),s=n&&v(n)[0]?v(n)[0].getBoundingClientRect():e[0].getBoundingClientRect();if(void 0!==t){var i=e.offset().top,a=e.offset().left,l=t.from?t.from+i:i,o=t.to?t.to+i:i,r=t.fromX?t.fromX+a:a,c=t.toX?t.toX+a:a;return s.top>=o&&s.top<=l&&s.left>=c&&s.left<=r}var u=v(M).height(),h=v(M).width(),d=n?v(n).height():e.height(),p=n?v(n).width():e.width(),g=1+d/u,f=g,_=d<u?g*(u/d):g,w=1+p/h,m=w,S=p<h?w*(h/p):w,I=[s.top<=u/f,s.bottom>=u/_,s.left<=h/m,s.right>=h/S];if(x.highlightByNextTarget){var C=e.data(b).tn;if(C){var O=C[0].getBoundingClientRect();"vertical"===x.layout?I=[s.top<=u/2,O.top>u/2,1,1]:"horizontal"===x.layout&&(I=[1,1,s.left<=h/2,O.left>h/2])}}return I[0]&&I[1]&&I[2]&&I[3]}},_scrollTo:function(){d=m._scrollSpeed.call(null),o=x.pageEndSmoothScroll?m._pageEndSmoothScroll.call(null):o;var e=v("html,body"),t=x.autoScrollSpeed?m._autoScrollSpeed.call(null):d,n=e.is(":animated")?x.scrollingEasing:x.scrollEasing,s=v(M).scrollTop(),i=v(M).scrollLeft();switch(r){case"horizontal":i!=o[1]&&(m._callbacks.call(null,"onStart"),e.stop().animate({scrollLeft:o[1]},t,n).promise().then(function(){m._callbacks.call(null,"onComplete")}));break;case"auto":var a;if(s!=o[0]||i!=o[1])if(m._callbacks.call(null,"onStart"),navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/))e.stop().animate({pageYOffset:o[0],pageXOffset:o[1]},{duration:t,easing:n,step:function(e,t){"pageXOffset"==t.prop?a=e:"pageYOffset"==t.prop&&M.scrollTo(a,e)}}).promise().then(function(){m._callbacks.call(null,"onComplete")});else e.stop().animate({scrollTop:o[0],scrollLeft:o[1]},t,n).promise().then(function(){m._callbacks.call(null,"onComplete")});break;default:s!=o[0]&&(m._callbacks.call(null,"onStart"),e.stop().animate({scrollTop:o[0]},t,n).promise().then(function(){m._callbacks.call(null,"onComplete")}))}},_pageEndSmoothScroll:function(){var e=v(c).height(),t=v(c).width(),n=v(M).height(),s=v(M).width();return[e-o[0]<n?e-n:o[0],t-o[1]<s?t-s:o[1]]},_scrollSpeed:function(){var s=x.scrollSpeed;return l&&l.length&&l.add(l.parent()).each(function(){var e=v(this);if(e.attr("class")){var t=e.attr("class").split(" ");for(var n in t)if(String(t[n]).match(/^ps2id-speed-\d+$/)){s=t[n].split("ps2id-speed-")[1];break}}}),parseInt(s)},_autoScrollSpeed:function(){var e=v(M).scrollTop(),t=v(M).scrollLeft(),n=v(c).height(),s=v(c).width(),i=[d+d*Math.floor(Math.abs(o[0]-e)/n*100)/100,d+d*Math.floor(Math.abs(o[1]-t)/s*100)/100];return Math.max.apply(Math,i)},_callbacks:function(e){if(x)switch(this[b]={trigger:i,clicked:l,target:a,scrollTo:{y:o[0],x:o[1]}},e){case"onStart":if(x.appendHash&&M.history&&M.history.pushState&&l&&l.length){var t=l.attr("href"),n="#"+t.substring(t.indexOf("#")+1);n!==M.location.hash&&history.pushState("","",n)}x.onStart.call(null,this[b]);break;case"onComplete":x.onComplete.call(null,this[b])}},_reset:function(){r=u=h=!1},_isInit:function(){s||w.init.apply(this)},_live:function(){t=setTimeout(function(){x.live?v(m._highlightSelector()).length!==f&&m._setup.call(null):t&&clearTimeout(t),m._live.call(null)},1e3)},_easing:function(){function t(e){var t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375}v.easing.easeInQuad=v.easing.easeInQuad||function(e){return e*e},v.easing.easeOutQuad=v.easing.easeOutQuad||function(e){return 1-(1-e)*(1-e)},v.easing.easeInOutQuad=v.easing.easeInOutQuad||function(e){return e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2},v.easing.easeInCubic=v.easing.easeInCubic||function(e){return e*e*e},v.easing.easeOutCubic=v.easing.easeOutCubic||function(e){return 1-Math.pow(1-e,3)},v.easing.easeInOutCubic=v.easing.easeInOutCubic||function(e){return e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2},v.easing.easeInQuart=v.easing.easeInQuart||function(e){return e*e*e*e},v.easing.easeOutQuart=v.easing.easeOutQuart||function(e){return 1-Math.pow(1-e,4)},v.easing.easeInOutQuart=v.easing.easeInOutQuart||function(e){return e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2},v.easing.easeInQuint=v.easing.easeInQuint||function(e){return e*e*e*e*e},v.easing.easeOutQuint=v.easing.easeOutQuint||function(e){return 1-Math.pow(1-e,5)},v.easing.easeInOutQuint=v.easing.easeInOutQuint||function(e){return e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2},v.easing.easeInExpo=v.easing.easeInExpo||function(e){return 0===e?0:Math.pow(2,10*e-10)},v.easing.easeOutExpo=v.easing.easeOutExpo||function(e){return 1===e?1:1-Math.pow(2,-10*e)},v.easing.easeInOutExpo=v.easing.easeInOutExpo||function(e){return 0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2},v.easing.easeInSine=v.easing.easeInSine||function(e){return 1-Math.cos(e*Math.PI/2)},v.easing.easeOutSine=v.easing.easeOutSine||function(e){return Math.sin(e*Math.PI/2)},v.easing.easeInOutSine=v.easing.easeInOutSine||function(e){return-(Math.cos(Math.PI*e)-1)/2},v.easing.easeInCirc=v.easing.easeInCirc||function(e){return 1-Math.sqrt(1-Math.pow(e,2))},v.easing.easeOutCirc=v.easing.easeOutCirc||function(e){return Math.sqrt(1-Math.pow(e-1,2))},v.easing.easeInOutCirc=v.easing.easeInOutCirc||function(e){return e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2},v.easing.easeInElastic=v.easing.easeInElastic||function(e){return 0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*(2*Math.PI/3))},v.easing.easeOutElastic=v.easing.easeOutElastic||function(e){return 0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*(2*Math.PI/3))+1},v.easing.easeInOutElastic=v.easing.easeInOutElastic||function(e){return 0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*(2*Math.PI/4.5))/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*(2*Math.PI/4.5))/2+1},v.easing.easeInBack=v.easing.easeInBack||function(e){return 2.70158*e*e*e-1.70158*e*e},v.easing.easeOutBack=v.easing.easeOutBack||function(e){return 1+2.70158*Math.pow(e-1,3)+1.70158*Math.pow(e-1,2)},v.easing.easeInOutBack=v.easing.easeInOutBack||function(e){return e<.5?Math.pow(2*e,2)*(7.189819*e-2.5949095)/2:(Math.pow(2*e-2,2)*(3.5949095*(2*e-2)+2.5949095)+2)/2},v.easing.easeInBounce=v.easing.easeInBounce||function(e){return 1-t(1-e)},v.easing.easeOutBounce=v.easing.easeOutBounce||t,v.easing.easeInOutBounce=v.easing.easeInOutBounce||function(e){return e<.5?(1-t(1-2*e))/2:(1+t(2*e-1))/2}}};m._easing.call(),v.fn[p]=function(e){return w[e]?w[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void v.error("Method "+e+" does not exist"):w.init.apply(this,arguments)},v[p]=function(e){return w[e]?w[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void v.error("Method "+e+" does not exist"):w.init.apply(this,arguments)},v[p].defaults=g}(jQuery,window,document),function(o){var r,c="mPS2id",u=mPS2id_params,h=u.shortcode_class,d=location.hash||null,s=/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/,p=function(e,t){var n=e.substring(e.indexOf("#")+1);try{s.test(n)?o(document.getElementById(n)):o("#"+n)}catch(e){return!1}return(s.test(n)?o(document.getElementById(n)):o("#"+n)).length&&(t||o("a[href*='#"+n+"']").filter(function(){return 1==o(this).data(c+"Element")}).length)},g=function(e){if(-1===e.indexOf(","))return e;var t=e.split(",");return{y:t[0]||"0",x:t[1]||"0"}},f=function(e){if(-1===e.indexOf(","))return e;var t=e.split(",");return[t[0]||"0",t[1]||"0"]},_=function(e){"horizontal"!==e&&o(window).scrollTop(0),"vertical"!==e&&o(window).scrollLeft(0)},w=function(e,t){for(var n=e.click.length-1;0<=n;n--){var s=e.click[n];s&&"mPS2id"!=s.namespace&&("a[href*=#]"===s.selector?s.selector="a[href*=#]:not(._mPS2id-h)":'a[href*="#"]'===s.selector?s.selector='a[href*="#"]:not(._mPS2id-h)':"a[href*=#]:not([href=#])"===s.selector?s.selector="a[href*=#]:not([href=#]):not(._mPS2id-h)":'a[href*="#"]:not([href="#"])'===s.selector?s.selector='a[href*="#"]:not([href="#"]):not(._mPS2id-h)':s.selector&&-1!==s.selector.indexOf("mobmenu")?t.off("click"):t.off("click",s.handler))}},m="a[data-ps2id-api='true'][href*='#'],.ps2id > a[href*='#'],a.ps2id[href*='#']";function t(e){var t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375}o(function(){for(var e=0;e<u.total_instances;e++){var t=o("[class*='ps2id-id-']");if(t.length&&t.each(function(){var e,t=o(this),n=t.attr("class").split(" ");if(!t.attr("id"))for(var s in n)if(String(n[s]).match(/^ps2id-id-\S+$/)){e=n[s].split("ps2id-id-")[1],o("#"+e).length||t.attr("id",e);break}}),"true"===u.instances[c+"_instance_"+e].scrollToHash&&d&&(o(u.instances[c+"_instance_"+e].selector+",."+h+","+m).not(u.instances[c+"_instance_"+e].excludeSelector).each(function(){o(this).data(c+"Element",!0)}),p(d,"true"===u.instances[c+"_instance_"+e].scrollToHashForAll))){var n="true"===u.instances[c+"_instance_"+e].scrollToHashRemoveUrlHash?window.location.href.replace(/#.*$/,""):window.location.href.replace(/#.*$/,"#");_(u.instances[c+"_instance_"+e].layout),window.history&&window.history.replaceState?window.history.replaceState("","",n):window.location.href=n}}o("html").css("scroll-behavior","auto"),window.twentytwenty&&window.twentytwenty.smoothScroll&&(window.twentytwenty.smoothScroll=null)}),o(window).on("load",function(){for(var e=0;e<u.total_instances;e++){0<=u.instances[c+"_instance_"+e].selector.indexOf("a[href*=#]:not([href=#])")&&console.log("ps2id selector issue: a[href*=#]:not([href=#]) selector needs quotes"),0<=u.instances[c+"_instance_"+e].excludeSelector.indexOf("a[href*=#]:not([href=#])")&&console.log("ps2id excluded selector issue: a[href*=#]:not([href=#]) selector needs quotes");var n=o(u.instances[c+"_instance_"+e].selector+",."+h+","+m),t=u.instances[c+"_instance_"+e].autoCorrectScroll,s=0,i=u.instances[c+"_instance_"+e].autoCorrectScrollExtend;if(window.ps2id_special_params&&(window.ps2id_special_params.highlightSelector&&(u.instances[c+"_instance_"+e].highlightSelector=window.ps2id_special_params.highlightSelector),window.ps2id_special_params.scrollSpeed&&(u.instances[c+"_instance_"+e].scrollSpeed=window.ps2id_special_params.scrollSpeed),window.ps2id_special_params.scrollEasing&&(u.instances[c+"_instance_"+e].scrollEasing=window.ps2id_special_params.scrollEasing),void 0!==window.ps2id_special_params.forceSingleHighlight&&(u.instances[c+"_instance_"+e].forceSingleHighlight=window.ps2id_special_params.forceSingleHighlight),void 0!==window.ps2id_special_params.keepHighlightUntilNext&&(u.instances[c+"_instance_"+e].keepHighlightUntilNext=window.ps2id_special_params.keepHighlightUntilNext),void 0!==window.ps2id_special_params.appendHash&&(u.instances[c+"_instance_"+e].appendHash=window.ps2id_special_params.appendHash),window.ps2id_special_params.layout&&(u.instances[c+"_instance_"+e].layout=window.ps2id_special_params.layout),window.ps2id_special_params.offset&&(u.instances[c+"_instance_"+e].offset=window.ps2id_special_params.offset)),n.mPageScroll2id({scrollSpeed:u.instances[c+"_instance_"+e].scrollSpeed,autoScrollSpeed:"true"===u.instances[c+"_instance_"+e].autoScrollSpeed,scrollEasing:"true"===u.instances[c+"_instance_"+e].forceScrollEasing?"ps2id_"+u.instances[c+"_instance_"+e].scrollEasing:u.instances[c+"_instance_"+e].scrollEasing,scrollingEasing:"true"===u.instances[c+"_instance_"+e].forceScrollEasing?"ps2id_"+u.instances[c+"_instance_"+e].scrollingEasing:u.instances[c+"_instance_"+e].scrollingEasing,pageEndSmoothScroll:"true"===u.instances[c+"_instance_"+e].pageEndSmoothScroll,layout:u.instances[c+"_instance_"+e].layout,offset:g(u.instances[c+"_instance_"+e].offset.toString()),highlightSelector:u.instances[c+"_instance_"+e].highlightSelector,clickedClass:u.instances[c+"_instance_"+e].clickedClass,targetClass:u.instances[c+"_instance_"+e].targetClass,highlightClass:u.instances[c+"_instance_"+e].highlightClass,forceSingleHighlight:"true"===u.instances[c+"_instance_"+e].forceSingleHighlight,keepHighlightUntilNext:"true"===u.instances[c+"_instance_"+e].keepHighlightUntilNext,highlightByNextTarget:"true"===u.instances[c+"_instance_"+e].highlightByNextTarget,disablePluginBelow:f(u.instances[c+"_instance_"+e].disablePluginBelow.toString()),appendHash:"true"===u.instances[c+"_instance_"+e].appendHash,onStart:function(){"true"===t&&"selector"===mPS2id.trigger&&s++,"true"===i&&(r=[mPS2id.target.offset().top,mPS2id.target.offset().left])},onComplete:function(){"true"===i?r[0]===mPS2id.target.offset().top&&r[1]===mPS2id.target.offset().left||("selector"===mPS2id.trigger&&mPS2id.clicked.length?mPS2id.clicked.trigger("click.mPS2id"):o.mPageScroll2id("scrollTo",mPS2id.target.attr("id"))):1==s&&(mPS2id.clicked.length&&mPS2id.clicked.trigger("click.mPS2id"),s=0)},excludeSelectors:u.instances[c+"_instance_"+e].excludeSelector,encodeLinks:"true"===u.instances[c+"_instance_"+e].encodeLinks,liveSelector:u.instances[c+"_instance_"+e].selector+",."+h+","+m}),"true"===u.instances[c+"_instance_"+e].scrollToHash&&d&&p(d,"true"===u.instances[c+"_instance_"+e].scrollToHashForAll)){_(u.instances[c+"_instance_"+e].layout);var a=u.instances[c+"_instance_"+e].scrollToHashUseElementData,l=o("a._mPS2id-h[href$='"+d+"'][data-ps2id-offset]:not([data-ps2id-offset=''])").last();setTimeout(function(){"true"===a&&l.length?l.trigger("click.mPS2id"):o.mPageScroll2id("scrollTo",d),-1!==window.location.href.indexOf("#")&&(window.history&&window.history.replaceState?window.history.replaceState("","",d):window.location.hash=d)},u.instances[c+"_instance_"+e].scrollToHashDelay)}"true"!==u.instances[c+"_instance_"+e].unbindUnrelatedClickEvents||u.instances[c+"_instance_"+e].unbindUnrelatedClickEventsSelector||setTimeout(function(){var e=n.length?o._data(n[0],"events"):null,t=n.length?o._data(o(document)[0],"events"):null;e&&w(e,n),t&&w(t,n)},300),"true"===u.instances[c+"_instance_"+e].normalizeAnchorPointTargets&&o("a._mPS2id-t[id]:empty").css({display:"inline-block","line-height":0,width:0,height:0,border:"none"}),"true"===u.instances[c+"_instance_"+e].stopScrollOnUserAction&&o(document).on("mousewheel DOMMouseScroll touchmove",function(){var e=o("html,body");e.is(":animated")&&e.stop()})}}),o.extend(o.expr.pseudos,{absolute:o.expr.pseudos.absolute||function(e){return"absolute"===o(e).css("position")},relative:o.expr.pseudos.relative||function(e){return"relative"===o(e).css("position")},static:o.expr.pseudos.static||function(e){return"static"===o(e).css("position")},fixed:o.expr.pseudos.fixed||function(e){return"fixed"===o(e).css("position")},width:o.expr.pseudos.width||function(e,t,n){var s=n[3].replace("&lt;","<").replace("&gt;",">");return!!s&&(">"===s.substr(0,1)?o(e).width()>s.substr(1):"<"===s.substr(0,1)?o(e).width()<s.substr(1):o(e).width()===parseInt(s))},height:o.expr.pseudos.height||function(e,t,n){var s=n[3].replace("&lt;","<").replace("&gt;",">");return!!s&&(">"===s.substr(0,1)?o(e).height()>s.substr(1):"<"===s.substr(0,1)?o(e).height()<s.substr(1):o(e).height()===parseInt(s))}}),o.easing.ps2id_easeInQuad=o.easing.ps2id_easeInQuad||function(e){return e*e},o.easing.ps2id_easeOutQuad=o.easing.ps2id_easeOutQuad||function(e){return 1-(1-e)*(1-e)},o.easing.ps2id_easeInOutQuad=o.easing.ps2id_easeInOutQuad||function(e){return e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2},o.easing.ps2id_easeInCubic=o.easing.ps2id_easeInCubic||function(e){return e*e*e},o.easing.ps2id_easeOutCubic=o.easing.ps2id_easeOutCubic||function(e){return 1-Math.pow(1-e,3)},o.easing.ps2id_easeInOutCubic=o.easing.ps2id_easeInOutCubic||function(e){return e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2},o.easing.ps2id_easeInQuart=o.easing.ps2id_easeInQuart||function(e){return e*e*e*e},o.easing.ps2id_easeOutQuart=o.easing.ps2id_easeOutQuart||function(e){return 1-Math.pow(1-e,4)},o.easing.ps2id_easeInOutQuart=o.easing.ps2id_easeInOutQuart||function(e){return e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2},o.easing.ps2id_easeInQuint=o.easing.ps2id_easeInQuint||function(e){return e*e*e*e*e},o.easing.ps2id_easeOutQuint=o.easing.ps2id_easeOutQuint||function(e){return 1-Math.pow(1-e,5)},o.easing.ps2id_easeInOutQuint=o.easing.ps2id_easeInOutQuint||function(e){return e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2},o.easing.ps2id_easeInExpo=o.easing.ps2id_easeInExpo||function(e){return 0===e?0:Math.pow(2,10*e-10)},o.easing.ps2id_easeOutExpo=o.easing.ps2id_easeOutExpo||function(e){return 1===e?1:1-Math.pow(2,-10*e)},o.easing.ps2id_easeInOutExpo=o.easing.ps2id_easeInOutExpo||function(e){return 0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2},o.easing.ps2id_easeInSine=o.easing.ps2id_easeInSine||function(e){return 1-Math.cos(e*Math.PI/2)},o.easing.ps2id_easeOutSine=o.easing.ps2id_easeOutSine||function(e){return Math.sin(e*Math.PI/2)},o.easing.ps2id_easeInOutSine=o.easing.ps2id_easeInOutSine||function(e){return-(Math.cos(Math.PI*e)-1)/2},o.easing.ps2id_easeInCirc=o.easing.ps2id_easeInCirc||function(e){return 1-Math.sqrt(1-Math.pow(e,2))},o.easing.ps2id_easeOutCirc=o.easing.ps2id_easeOutCirc||function(e){return Math.sqrt(1-Math.pow(e-1,2))},o.easing.ps2id_easeInOutCirc=o.easing.ps2id_easeInOutCirc||function(e){return e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2},o.easing.ps2id_easeInElastic=o.easing.ps2id_easeInElastic||function(e){return 0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*(2*Math.PI/3))},o.easing.ps2id_easeOutElastic=o.easing.ps2id_easeOutElastic||function(e){return 0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*(2*Math.PI/3))+1},o.easing.ps2id_easeInOutElastic=o.easing.ps2id_easeInOutElastic||function(e){return 0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*(2*Math.PI/4.5))/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*(2*Math.PI/4.5))/2+1},o.easing.ps2id_easeInBack=o.easing.ps2id_easeInBack||function(e){return 2.70158*e*e*e-1.70158*e*e},o.easing.ps2id_easeOutBack=o.easing.ps2id_easeOutBack||function(e){return 1+2.70158*Math.pow(e-1,3)+1.70158*Math.pow(e-1,2)},o.easing.ps2id_easeInOutBack=o.easing.ps2id_easeInOutBack||function(e){return e<.5?Math.pow(2*e,2)*(7.189819*e-2.5949095)/2:(Math.pow(2*e-2,2)*(3.5949095*(2*e-2)+2.5949095)+2)/2},o.easing.ps2id_easeInBounce=o.easing.ps2id_easeInBounce||function(e){return 1-t(1-e)},o.easing.ps2id_easeOutBounce=o.easing.ps2id_easeOutBounce||t,o.easing.ps2id_easeInOutBounce=o.easing.ps2id_easeInOutBounce||function(e){return e<.5?(1-t(1-2*e))/2:(1+t(2*e-1))/2}}(jQuery);
jQuery(document).ready(function(i){"use strict";function t(){this.$body=i("body"),this.$window=i(window),this.$wpAdminBar=i("#wpadminbar"),this.usingMobileBrowser=!!navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/),this.mouseEvents(),this.nectarLove(),i("body").find(".nectar-social.fixed")&&this.fixedStyle()}t.prototype.mouseEvents=function(){var e;this.$body.on("click","#single-below-header .nectar-social a",function(){return!1}),i("body.single-product .nectar-social").addClass("woo"),this.$body.on("click",".facebook-share:not(.inactive)",this.facebookShare),this.$body.on("click",'.nectar-social:not(".woo") .twitter-share:not(.inactive)',this.twitterShare),this.$body.on("click",".nectar-social.woo .twitter-share",this.wooTwitterShare),this.$body.on("click",'.nectar-social:not(".woo") .linkedin-share:not(.inactive)',this.linkedInShare),this.$body.on("click",".nectar-social.woo .linkedin-share",this.woolinkedInShare),this.$body.on("click",'.nectar-social:not(".woo") .pinterest-share:not(.inactive)',this.pinterestShare),this.$body.on("click",".nectar-social.woo .pinterest-share",this.wooPinterestShare),this.$body.on("click",".nectar-social.fixed > a",function(){return!1}),this.usingMobileBrowser?this.$body.on("click",".nectar-social.hover .share-btn",function(){return 0<i(this).parents('[id*="-meta"]').length&&i(this).parents('[id*="-meta"]').addClass("social-hovered"),0<i(this).parents("#single-below-header").length&&i(this).parents("#single-below-header").addClass("social-hovered"),i(this).parent().addClass("visible"),!1}):(this.$body.on("mouseenter",".nectar-social.hover .share-btn",function(){clearTimeout(e),0<i(this).parents('[id*="-meta"]').length&&i(this).parents('[id*="-meta"]').addClass("social-hovered"),0<i(this).parents("#single-below-header").length&&i(this).parents("#single-below-header").addClass("social-hovered"),i(this).parent().addClass("visible")}),this.$body.on("mouseleave",".nectar-social.hover",function(){var t=i(this);e=setTimeout(function(){t.removeClass("visible"),0<t.parents('[id*="-meta"]').length&&t.parents('[id*="-meta"]').removeClass("social-hovered"),0<t.parents("#single-below-header").length&&t.parents("#single-below-header").removeClass("social-hovered")},200)}))},t.prototype.facebookShare=function(){var t=window.location.href.replace(window.location.hash,"");return window.open("https://www.facebook.com/sharer/sharer.php?u="+t,"facebookWindow","height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0"),!1},t.prototype.facebookShare=function(){var t=window.location.href.replace(window.location.hash,"");return window.open("https://www.facebook.com/sharer/sharer.php?u="+t,"facebookWindow","height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0"),!1},t.prototype.twitterShare=function(){var t=window.location.href.replace(window.location.hash,""),e,e=0<i(".section-title h1").length?encodeURIComponent(i(".section-title h1").text()):encodeURIComponent(i(document).find("title").text());return window.open("http://twitter.com/intent/tweet?text="+e+" "+t,"twitterWindow","height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0"),!1},t.prototype.wooTwitterShare=function(){var t=window.location.href.replace(window.location.hash,"");return window.open("http://twitter.com/intent/tweet?text="+i("h1.product_title").text()+" "+t,"twitterWindow","height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0"),!1},t.prototype.linkedInShare=function(){var t=window.location.href.replace(window.location.hash,""),e,e=0<i(".section-title h1").length?encodeURIComponent(i(".section-title h1").text()):encodeURIComponent(i(document).find("title").text());return window.open("http://www.linkedin.com/shareArticle?mini=true&url="+t+"&title="+e,"linkedInWindow","height=480,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0"),!1},t.prototype.woolinkedInShare=function(){var t=window.location.href.replace(window.location.hash,"");return window.open("http://www.linkedin.com/shareArticle?mini=true&url="+t+"&title="+i("h1.product_title").text(),"twitterWindow","height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0"),!1},t.prototype.pinterestShare=function(){var t=window.location.href.replace(window.location.hash,""),e=0<i(".single-portfolio").length&&"empty"!=i("div[data-featured-img]").attr("data-featured-img")?i("div[data-featured-img]").attr("data-featured-img"):i("#ajax-content-wrap img").first().attr("src"),o,o=0<i(".section-title h1").length?encodeURIComponent(i(".section-title h1").text()):encodeURIComponent(i(document).find("title").text());return window.open("http://pinterest.com/pin/create/button/?url="+t+"&media="+e+"&description="+o,"pinterestWindow","height=640,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0"),!1},t.prototype.wooPinterestShare=function(){var t=(0<i("img.attachment-shop_single").length?i("img.attachment-shop_single"):i(".single-product-main-image img")).first().attr("src"),e=window.location.href.replace(window.location.hash,"");return window.open("http://pinterest.com/pin/create/button/?url="+e+"&media="+t+"&description="+i("h1.product_title").text(),"pinterestWindow","height=640,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0"),!1},t.prototype.nectarLove=function(){this.$body.on("click",".nectar-love",function(){var e=i(this),t=i(this).attr("id"),o=i(this);if(e.hasClass("loved")||i(this).hasClass("inactive"))return!1;var t={action:"nectar-love",loves_id:t,love_nonce:window.nectarLove.loveNonce};return i.post(window.nectarLove.ajaxurl,t,function(t){e.find(".nectar-love-count").html(t),e.addClass("loved").attr("title","You already love this!"),o.find(".icon-salient-heart-2").addClass("loved")}),i(this).addClass("inactive"),!1})},t.prototype.fixedStyle=function(){function t(){150<i(window).scrollTop()&&(i(".nectar-social.fixed").addClass("visible"),i(window).off("scroll",t),i(window).on("scroll",e))}function e(){i(window).scrollTop()<150&&(i(".nectar-social.fixed").removeClass("visible"),i(window).off("scroll",e),i(window).on("scroll",t))}i(".wpb_wrapper .nectar-social.fixed").each(function(t){var t;0!==t||(t=i(this).clone(),i("body").append(t)),i(this).remove()}),i(window).width()<1e3&&0<i(".nectar-social.fixed").length&&(150<i(window).scrollTop()?i(window).on("scroll",e):i(window).on("scroll",t)),i(window).on("smartresize",function(){1e3<i(window).width()?i(".nectar-social.fixed").addClass("visible"):i(window).scrollTop()<150?(i(window).off("scroll",e),i(window).on("scroll",t),i(".nectar-social.fixed").removeClass("visible")):(i(window).off("scroll",t),i(window).on("scroll",e))})};var e=new t;window.NectarSocial=t});
!function(){"use strict";var t={commentsFormLoading:!1,commentsLoading:!1,commentsLoadComplete:!1,commentsLoaded:0,loadOnScroll:!1,loadCommentFormOnScroll:!1,commentLoadingMethod:"click",pageCommentsOption:0,totalCommentsPages:1,commentsPageOrder:"newest",cpageNum:1,postId:0,commentNonce:"",commentsContainer:null,commentList:null,loadCommentsButton:null,loadCommentsButtonWrap:null,commentsEndIndicator:null,commentsLoadSpinnerWrap:null,ajaxurl:null,init:function(){wphbGlobal?this.ajaxurl=wphbGlobal.ajaxurl:this.ajaxurl=ajaxurl,document.getElementById("wphb-comments-wrap")&&this.initCommentLazyLoader()},initCommentLazyLoader:function(){this.commentLoadingMethod=document.getElementById("wphb-load-comments-method").value,this.pageCommentsOption=parseInt(document.getElementById("wphb-page-comments-option").value),this.totalCommentsPages=parseInt(document.getElementById("wphb-total-comments-pages").value),this.commentsPageOrder=document.getElementById("wphb-comments-page-order").value,this.cpageNum=parseInt(document.getElementById("wphb-cpage-num").value),this.postId=parseInt(document.getElementById("wphb-post-id").value),this.commentNonce=document.getElementById("comment-template-nonce").value,this.commentsContainer=document.getElementById("wphb-comments-container"),this.commentsEndIndicator=document.getElementById("wphb-comments-end-indicator"),this.commentsLoadSpinnerWrap=document.getElementById("wphb-load-comments-spinner-wrap"),"click"===this.commentLoadingMethod&&(this.loadCommentsButton=document.getElementById("wphb-load-comments"),this.loadCommentsButtonWrap=document.getElementById("wphb-load-comments-button-wrap")),"click"===this.commentLoadingMethod&&(this.loadCommentsButton.addEventListener("click",(function(){return t.loadComments()})),this.loadCommentFormOnScroll=!0,window.addEventListener("scroll",t.handleScrollingForLoadForm),t.handleScrollingForLoadForm()),"scroll"===this.commentLoadingMethod&&(this.loadOnScroll=!0,window.addEventListener("scroll",(function(){return t.handleScrolling()})),t.handleScrolling())},enableCommentLoad:function(){this.loadCommentsButton&&this.loadCommentsButton.removeAttribute("disabled"),this.loadOnScroll=!0},disableCommentLoad:function(){this.loadCommentsButton&&this.loadCommentsButton.setAttribute("disabled","disabled"),this.loadOnScroll=!1,this.loadCommentFormOnScroll=!1},moveLoadButton:function(){this.loadCommentsButton&&this.insertAfter(this.loadCommentsButtonWrap,this.commentList)},moveCommentsEndIndicator:function(){this.insertAfter(this.commentsEndIndicator,this.commentList)},moveCommentForm:function(){var t=document.getElementById("respond");t&&this.insertBefore(t,this.commentList)},hideLoadButton:function(){this.loadCommentsButton&&(this.loadCommentsButton.style.display="none")},showCommentLoadSpinner:function(){this.commentsLoadSpinnerWrap.style.display="block"},hideCommentLoadSpinner:function(){this.commentsLoadSpinnerWrap.style.display="none"},moveCommentLoadSpinner:function(){this.insertAfter(this.commentsLoadSpinnerWrap,this.commentList)},finishCommentLoad:function(){this.commentsLoading=!1,this.disableCommentLoad(),this.hideLoadButton()},handleScrolling:function(){if(!this.loadOnScroll||!this.isInViewport(this.commentsEndIndicator))return null;this.loadComments()},handleScrollingForLoadForm:function(){if(!t.loadCommentFormOnScroll||!t.isInViewport(t.commentsEndIndicator))return null;window.removeEventListener("scroll",t.handleScrollingForLoadForm),t.loadCommentsForm()},loadCommentsForm:function(){this.commentsFormLoading=!0,this.loadComments()},loadComments:function(){if(this.commentsLoadComplete||this.commentsLoading)return!1;this.getCommentsTemplate()},getCommentsTemplate:function(){this.disableCommentLoad(),this.showCommentLoadSpinner();var n=new XMLHttpRequest;this.commentsLoading=!0,n.open("GET",t.ajaxurl+"?action=get_comments_template&id="+t.postId+"&cpage_num="+t.cpageNum+"&_nonce="+t.commentNonce),n.onload=function(){if(200===n.status){var e=JSON.parse(n.responseText);void 0!==e.data?(!0===t.commentsFormLoading?t.enableCommentLoad():(t.commentsLoaded++,t.cpageNum="newest"===t.commentsPageOrder?t.cpageNum-1:t.cpageNum+1,t.cpageNum<1||t.cpageNum>t.totalCommentsPages?t.finishCommentLoad():t.enableCommentLoad()),t.putCommentContent(e.data.content),!0===t.commentsFormLoading&&(t.commentsFormLoading=!1)):t.enableCommentLoad()}else t.enableCommentLoad();t.commentsLoading=!1,t.hideCommentLoadSpinner()},n.send()},putCommentContent:function(n){var e=this.stringToHTML(n),o=e.querySelector(".comment");if(o){var m=o.parentNode;!0===t.commentsFormLoading&&(m.innerHTML=""),this.commentsLoaded>1||"click"===this.commentLoadingMethod&&!1===t.commentsFormLoading?this.commentList.innerHTML+=m.innerHTML:(this.commentsContainer.appendChild(e),this.commentList=m,this.moveCommentsEndIndicator(),this.moveCommentLoadSpinner(),this.moveLoadButton(),"scroll"===this.commentLoadingMethod&&this.moveCommentForm())}},stringToHTML:function(t){if(t="<div>"+t+"</div>",function(){if(!window.DOMParser)return!1;var t=new DOMParser;try{t.parseFromString("x","text/html")}catch(t){return!1}return!0}())return(new DOMParser).parseFromString(t,"text/html").body.firstChild;var n=document.createElement("div");return n.innerHTML=t,n.firstChild},insertAfter:function(t,n){n.parentNode.insertBefore(t,n.nextSibling)},insertBefore:function(t,n){n.parentNode.insertBefore(t,n)},isInViewport:function(t){var n=t.getBoundingClientRect();return n.top>=0&&n.left>=0&&n.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&n.right<=(window.innerWidth||document.documentElement.clientWidth)}};document.addEventListener("DOMContentLoaded",(function(){t.init()}))}();
//# sourceMappingURL=wphb-lazy-load.min.js.map
jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(n,t,e,u,a){return u*(t/=a)*t+e},easeInQuad:function(n,t,e,u,a){return u*(t/=a)*t+e},easeOutQuad:function(n,t,e,u,a){return-u*(t/=a)*(t-2)+e},easeInOutQuad:function(n,t,e,u,a){return(t/=a/2)<1?u/2*t*t+e:-u/2*(--t*(t-2)-1)+e},easeInCubic:function(n,t,e,u,a){return u*(t/=a)*t*t+e},easeOutCubic:function(n,t,e,u,a){return u*((t=t/a-1)*t*t+1)+e},easeInOutCubic:function(n,t,e,u,a){return(t/=a/2)<1?u/2*t*t*t+e:u/2*((t-=2)*t*t+2)+e},easeInQuart:function(n,t,e,u,a){return u*(t/=a)*t*t*t+e},easeOutQuart:function(n,t,e,u,a){return-u*((t=t/a-1)*t*t*t-1)+e},easeInOutQuart:function(n,t,e,u,a){return(t/=a/2)<1?u/2*t*t*t*t+e:-u/2*((t-=2)*t*t*t-2)+e},easeInQuint:function(n,t,e,u,a){return u*(t/=a)*t*t*t*t+e},easeOutQuint:function(n,t,e,u,a){return u*((t=t/a-1)*t*t*t*t+1)+e},easeInOutQuint:function(n,t,e,u,a){return(t/=a/2)<1?u/2*t*t*t*t*t+e:u/2*((t-=2)*t*t*t*t+2)+e},easeInSine:function(n,t,e,u,a){return-u*Math.cos(t/a*(Math.PI/2))+u+e},easeOutSine:function(n,t,e,u,a){return u*Math.sin(t/a*(Math.PI/2))+e},easeInOutSine:function(n,t,e,u,a){return-u/2*(Math.cos(Math.PI*t/a)-1)+e},easeInExpo:function(n,t,e,u,a){return 0==t?e:u*Math.pow(2,10*(t/a-1))+e},easeOutExpo:function(n,t,e,u,a){return t==a?e+u:u*(1-Math.pow(2,-10*t/a))+e},easeInOutExpo:function(n,t,e,u,a){return 0==t?e:t==a?e+u:(t/=a/2)<1?u/2*Math.pow(2,10*(t-1))+e:u/2*(2-Math.pow(2,-10*--t))+e},easeInCirc:function(n,t,e,u,a){return-u*(Math.sqrt(1-(t/=a)*t)-1)+e},easeOutCirc:function(n,t,e,u,a){return u*Math.sqrt(1-(t=t/a-1)*t)+e},easeInOutCirc:function(n,t,e,u,a){return(t/=a/2)<1?-u/2*(Math.sqrt(1-t*t)-1)+e:u/2*(Math.sqrt(1-(t-=2)*t)+1)+e},easeInElastic:function(n,t,e,u,a){var r=1.70158,i=0,s=u,s,r,r;return 0==t?e:1==(t/=a)?e+u:(i=i||.3*a,r=s<Math.abs(u)?(s=u,i/4):i/(2*Math.PI)*Math.asin(u/s),-(s*Math.pow(2,10*--t)*Math.sin((t*a-r)*(2*Math.PI)/i))+e)},easeOutElastic:function(n,t,e,u,a){var r=1.70158,i=0,s=u,s,r,r;return 0==t?e:1==(t/=a)?e+u:(i=i||.3*a,r=s<Math.abs(u)?(s=u,i/4):i/(2*Math.PI)*Math.asin(u/s),s*Math.pow(2,-10*t)*Math.sin((t*a-r)*(2*Math.PI)/i)+u+e)},easeInOutElastic:function(n,t,e,u,a){var r=1.70158,i=0,s=u,s,r,r;return 0==t?e:2==(t/=a/2)?e+u:(i=i||a*(.3*1.5),r=s<Math.abs(u)?(s=u,i/4):i/(2*Math.PI)*Math.asin(u/s),t<1?s*Math.pow(2,10*--t)*Math.sin((t*a-r)*(2*Math.PI)/i)*-.5+e:s*Math.pow(2,-10*--t)*Math.sin((t*a-r)*(2*Math.PI)/i)*.5+u+e)},easeInBack:function(n,t,e,u,a,r){return u*(t/=a)*t*(((r=null==r?1.70158:r)+1)*t-r)+e},easeOutBack:function(n,t,e,u,a,r){return u*((t=t/a-1)*t*(((r=null==r?1.70158:r)+1)*t+r)+1)+e},easeInOutBack:function(n,t,e,u,a,r){return null==r&&(r=1.70158),(t/=a/2)<1?u/2*(t*t*((1+(r*=1.525))*t-r))+e:u/2*((t-=2)*t*((1+(r*=1.525))*t+r)+2)+e},easeInBounce:function(n,t,e,u,a){return u-jQuery.easing.easeOutBounce(n,a-t,0,u,a)+e},easeOutBounce:function(n,t,e,u,a){return(t/=a)<1/2.75?u*(7.5625*t*t)+e:t<2/2.75?u*(7.5625*(t-=1.5/2.75)*t+.75)+e:t<2.5/2.75?u*(7.5625*(t-=2.25/2.75)*t+.9375)+e:u*(7.5625*(t-=2.625/2.75)*t+.984375)+e},easeInOutBounce:function(n,t,e,u,a){return t<a/2?.5*jQuery.easing.easeInBounce(n,2*t,0,u,a)+e:.5*jQuery.easing.easeOutBounce(n,2*t-a,0,u,a)+.5*u+e}});
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e:e(jQuery)}(function(r){function t(e){var t=e||window.event,n=g.call(arguments,1),i=0,o=0,l=0,s=0,h=0,a=0,u,u;if((e=r.event.fix(t)).type="mousewheel","detail"in t&&(l=-1*t.detail),"wheelDelta"in t&&(l=t.wheelDelta),"wheelDeltaY"in t&&(l=t.wheelDeltaY),"wheelDeltaX"in t&&(o=-1*t.wheelDeltaX),"axis"in t&&t.axis===t.HORIZONTAL_AXIS&&(o=-1*l,l=0),i=0===l?o:l,"deltaY"in t&&(i=l=-1*t.deltaY),"deltaX"in t&&(o=t.deltaX,0===l&&(i=-1*o)),0!==l||0!==o){1===t.deltaMode?(i*=u=r.data(this,"mousewheel-line-height"),l*=u,o*=u):2===t.deltaMode&&(i*=u=r.data(this,"mousewheel-page-height"),l*=u,o*=u);var s,h,a,s=Math.max(Math.abs(l),Math.abs(o));return m&&!(s<m)||d(t,m=s)&&(m/=40),d(t,s)&&(i/=40,o/=40,l/=40),i=Math[1<=i?"floor":"ceil"](i/m),o=Math[1<=o?"floor":"ceil"](o/m),l=Math[1<=l?"floor":"ceil"](l/m),w.settings.normalizeOffset&&this.getBoundingClientRect&&(s=this.getBoundingClientRect(),h=e.clientX-s.left,a=e.clientY-s.top),e.deltaX=o,e.deltaY=l,e.deltaFactor=m,e.offsetX=h,e.offsetY=a,e.deltaMode=0,n.unshift(e,i,o,l),c&&clearTimeout(c),c=setTimeout(f,200),(r.event.dispatch||r.event.handle).apply(this,n)}}function f(){m=null}function d(e,t){return w.settings.adjustOldDeltas&&"mousewheel"===e.type&&t%120==0}var c,m,e=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],n="onwheel"in document||9<=document.documentMode?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],g=Array.prototype.slice;if(r.event.fixHooks)for(var i=e.length;i;)r.event.fixHooks[e[--i]]=r.event.mouseHooks;var w=r.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var e=n.length;e;)this.addEventListener(n[--e],t,!1);else this.onmousewheel=t;r.data(this,"mousewheel-line-height",w.getLineHeight(this)),r.data(this,"mousewheel-page-height",w.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var e=n.length;e;)this.removeEventListener(n[--e],t,!1);else this.onmousewheel=null;r.removeData(this,"mousewheel-line-height"),r.removeData(this,"mousewheel-page-height")},getLineHeight:function(e){var t=r(e),e=t["offsetParent"in r.fn?"offsetParent":"parent"]();return e.length||(e=r("body")),parseInt(e.css("fontSize"),10)||parseInt(t.css("fontSize"),10)||16},getPageHeight:function(e){return r(e).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};r.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})});
var headerEl=document.getElementById("header-outer"),headerSpaceEl=document.getElementById("header-space");void 0!==headerEl&&null!=headerEl&&void 0!==headerSpaceEl&&null!=headerSpaceEl&&headerSpaceEl.hasAttribute("data-secondary-header-display")&&(headerSpaceEl.style.height=headerEl.clientHeight+"px"),jQuery(function(d){"use strict";var t=!1,e,i,a;function r(){var t=e.offset().top;e.css("height",parseInt(window.innerHeight)-parseInt(t)+"px")}function n(){var t=0<d(".body-border-top").length&&1e3<d(window).width()?d(".body-border-top").height():0;d(".nectar_fullscreen_zoom_recent_projects").each(function(){0<d(this).parents(".first-section").length?d(this).css("height",d(window).height()-d(this).offset().top-t):d(this).css("height",d(window).height())})}function o(){var t=d('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_9'),e=d('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_3'),i=d("#header-secondary-outer"),e=e.find("#logo").clone();e.is('[data-supplied-ml="true"]')&&e.find("img:not(.mobile-only-logo)").remove(),e.find("img.starting-logo").remove(),0<i.length&&i.addClass("centered-menu-bottom-bar"),0<d('#header-outer[data-condense="true"]').length&&t.prepend(e)}function s(){var r="",t,e;d(".nectar-slider-wrap").each(function(){var t,e,i,a;0<d(this).find(".swiper-container[data-tho]").length&&(t=d(this).find(".swiper-container").attr("data-tho"),e=d(this).find(".swiper-container").attr("data-tco"),i=d(this).find(".swiper-container").attr("data-pho"),a=d(this).find(".swiper-container").attr("data-pco"),"auto"==t&&"auto"==e||(r+="@media only screen and (max-width: 1000px) and (min-width: 690px) {","auto"!=t&&(r+="#"+d(this).attr("id")+'.nectar-slider-wrap[data-full-width="false"] .swiper-slide .content h2, #boxed .nectar-slider-wrap#'+d(this).attr("id")+" .swiper-slide .content h2, body .nectar-slider-wrap#"+d(this).attr("id")+'[data-full-width="true"] .swiper-slide .content h2, body .nectar-slider-wrap#'+d(this).attr("id")+'[data-full-width="boxed-full-width"] .swiper-slide .content h2, body .full-width-content .vc_span12 .nectar-slider-wrap#'+d(this).attr("id")+" .swiper-slide .content h2 { font-size:"+t+"px!important; line-height:"+(parseInt(t)+10)+"px!important;  }"),"auto"!=i&&(r+="#"+d(this).attr("id")+'.nectar-slider-wrap[data-full-width="false"] .swiper-slide .content p, #boxed .nectar-slider-wrap#'+d(this).attr("id")+" .swiper-slide .content p, body .nectar-slider-wrap#"+d(this).attr("id")+'[data-full-width="true"] .swiper-slide .content p, body .nectar-slider-wrap#'+d(this).attr("id")+'[data-full-width="boxed-full-width"] .swiper-slide .content p, body .full-width-content .vc_span12 .nectar-slider-wrap#'+d(this).attr("id")+" .swiper-slide .content p { font-size:"+e+"px!important; line-height:"+(parseInt(e)+10)+"px!important;  }"),r+="}"),"auto"==i&&"auto"==a||(r+="@media only screen and (max-width: 690px) {","auto"!=i&&(r+="#"+d(this).attr("id")+'.nectar-slider-wrap[data-full-width="false"] .swiper-slide .content h2, #boxed .nectar-slider-wrap#'+d(this).attr("id")+" .swiper-slide .content h2, body .nectar-slider-wrap#"+d(this).attr("id")+'[data-full-width="true"] .swiper-slide .content h2, body .nectar-slider-wrap#'+d(this).attr("id")+'[data-full-width="boxed-full-width"] .swiper-slide .content h2, body .full-width-content .vc_span12 .nectar-slider-wrap#'+d(this).attr("id")+" .swiper-slide .content h2 { font-size:"+i+"px!important; line-height:"+(parseInt(i)+10)+"px!important;  }"),"auto"!=i&&(r+="#"+d(this).attr("id")+'.nectar-slider-wrap[data-full-width="false"] .swiper-slide .content p, #boxed .nectar-slider-wrap#'+d(this).attr("id")+" .swiper-slide .content p,  body .nectar-slider-wrap#"+d(this).attr("id")+'[data-full-width="true"] .swiper-slide .content p, body .nectar-slider-wrap#'+d(this).attr("id")+'[data-full-width="boxed-full-width"] .swiper-slide .content p, body .full-width-content .vc_span12 .nectar-slider-wrap#'+d(this).attr("id")+" .swiper-slide .content p { font-size:"+a+"px!important; line-height:"+(parseInt(a)+10)+"px!important;  }"),r+="}"))}),1<r.length&&(t=document.head||document.getElementsByTagName("head")[0],(e=document.createElement("style")).type="text/css",e.styleSheet?e.styleSheet.cssText=r:e.appendChild(document.createTextNode(r)),t.appendChild(e),d(".nectar-slider-wrap .content").css("visibility","visible"))}(t=navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/)?!0:t)&&0<d("#page-header-bg.fullscreen-header").length&&(e=d("#page-header-bg"),r(),i=window.innerWidth,a=window.innerHeight,d(window).resize(function(){d(window).width()!=i&&d(window).height!=a&&(r(),i=window.innerWidth,a=window.innerHeight)})),t&&0<d(".nectar_fullscreen_zoom_recent_projects").length&&n(),0<d('#header-outer[data-format="centered-menu-bottom-bar"]').length&&o(),d('#page-header-bg[data-animate-in-effect="zoom-out"]').addClass("loaded"),s()});
!function(d){d.transit={version:"0.9.9",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:!0,useTransitionEnd:!1};var s=document.createElement("div"),h={};function t(t){if(t in s.style)return t;var e=["Moz","Webkit","O","ms"],n=t.charAt(0).toUpperCase()+t.substr(1);if(t in s.style)return t;for(var i=0;i<e.length;++i){var r=e[i]+n;if(r in s.style)return r}}function e(){return s.style[h.transform]="",s.style[h.transform]="rotateY(90deg)",""!==s.style[h.transform]}var n=-1<navigator.userAgent.toLowerCase().indexOf("chrome");h.transition=t("transition"),h.transitionDelay=t("transitionDelay"),h.transform=t("transform"),h.transformOrigin=t("transformOrigin"),h.transform3d=e();var i,b=h.transitionEnd={transition:"transitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"}[h.transition]||null,r;for(r in h)h.hasOwnProperty(r)&&void 0===d.support[r]&&(d.support[r]=h[r]);function a(t){return"string"==typeof t&&this.parse(t),this}function g(t,e,n){!0===e?t.queue(n):e?t.queue(e,n):n()}function o(t){var e=[];return d.each(t,function(t){t=d.camelCase(t),t=c(t=d.transit.propertyMap[t]||d.cssProps[t]||t),-1===d.inArray(t,e)&&e.push(t)}),e}function m(t,e,n,i){var t=o(t);d.cssEase[n]&&(n=d.cssEase[n]);var r=y(e)+" "+n;0<parseInt(i,10)&&(r+=" "+y(i));var s=[];return d.each(t,function(t,e){s.push(e+" "+r)}),s.join(", ")}function u(i,t){t||(d.cssNumber[i]=!0),d.transit.propertyMap[i]=h.transform,d.cssHooks[i]={get:function(t){var e;return d(t).css("transit:transform").get(i)},set:function(t,e){var n=d(t).css("transit:transform");n.setFromString(i,e),d(t).css({"transit:transform":n})}}}function c(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}function f(t,e){return"string"!=typeof t||t.match(/^[\-0-9\.]+$/)?""+t+e:t}function y(t){var e=t;return f(e=d.fx.speeds[t]?d.fx.speeds[t]:t,"ms")}s=null,d.cssEase={_default:"ease",in:"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"},d.cssHooks["transit:transform"]={get:function(t){return d(t).data("transform")||new a},set:function(t,e){var e=e;e instanceof a||(e=new a(e)),"WebkitTransform"!==h.transform||n?t.style[h.transform]=e.toString():t.style[h.transform]=e.toString(!0),d(t).data("transform",e)}},d.cssHooks.transform={set:d.cssHooks["transit:transform"].set},d.fn.jquery<"1.8"&&(d.cssHooks.transformOrigin={get:function(t){return t.style[h.transformOrigin]},set:function(t,e){t.style[h.transformOrigin]=e}},d.cssHooks.transition={get:function(t){return t.style[h.transition]},set:function(t,e){t.style[h.transition]=e}}),u("scale"),u("translate"),u("rotate"),u("rotateX"),u("rotateY"),u("rotate3d"),u("perspective"),u("skewX"),u("skewY"),u("x",!0),u("y",!0),a.prototype={setFromString:function(t,e){var e="string"==typeof e?e.split(","):e.constructor===Array?e:[e];e.unshift(t),a.prototype.set.apply(this,e)},set:function(t){var e=Array.prototype.slice.apply(arguments,[1]);this.setter[t]?this.setter[t].apply(this,e):this[t]=e.join(",")},get:function(t){return this.getter[t]?this.getter[t].apply(this):this[t]||0},setter:{rotate:function(t){this.rotate=f(t,"deg")},rotateX:function(t){this.rotateX=f(t,"deg")},rotateY:function(t){this.rotateY=f(t,"deg")},scale:function(t,e){this.scale=t+","+(e=void 0===e?t:e)},skewX:function(t){this.skewX=f(t,"deg")},skewY:function(t){this.skewY=f(t,"deg")},perspective:function(t){this.perspective=f(t,"px")},x:function(t){this.set("translate",t,null)},y:function(t){this.set("translate",null,t)},translate:function(t,e){void 0===this._translateX&&(this._translateX=0),void 0===this._translateY&&(this._translateY=0),null!=t&&(this._translateX=f(t,"px")),null!=e&&(this._translateY=f(e,"px")),this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||0},scale:function(){var t=(this.scale||"1,1").split(",");return t[0]&&(t[0]=parseFloat(t[0])),t[1]&&(t[1]=parseFloat(t[1])),t[0]===t[1]?t[0]:t},rotate3d:function(){for(var t=(this.rotate3d||"0,0,0,0deg").split(","),e=0;e<=3;++e)t[e]&&(t[e]=parseFloat(t[e]));return t[3]&&(t[3]=f(t[3],"deg")),t}},parse:function(t){var i=this;t.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(t,e,n){i.setFromString(e,n)})},toString:function(t){var e=[],n;for(n in this)this.hasOwnProperty(n)&&(h.transform3d||"rotateX"!==n&&"rotateY"!==n&&"perspective"!==n&&"transformOrigin"!==n)&&"_"!==n[0]&&(t&&"scale"===n?e.push(n+"3d("+this[n]+",1)"):t&&"translate"===n?e.push(n+"3d("+this[n]+",0)"):e.push(n+"("+this[n]+")"));return e.join(" ")}},d.fn.transition=d.fn.transit=function(i,t,e,r){var s=this,n=0,a=!0;"function"==typeof t&&(r=t,t=void 0),"function"==typeof e&&(r=e,e=void 0),void 0!==i.easing&&(e=i.easing,delete i.easing),void 0!==i.duration&&(t=i.duration,delete i.duration),void 0!==i.complete&&(r=i.complete,delete i.complete),void 0!==i.queue&&(a=i.queue,delete i.queue),void 0!==i.delay&&(n=i.delay,delete i.delay),void 0===t&&(t=d.fx.speeds._default),void 0===e&&(e=d.cssEase._default),t=y(t);var o=m(i,t,e,n),u,c=d.transit.enabled&&h.transition?parseInt(t,10)+parseInt(n,10):0;if(0===c){var n=function(t){s.css(i),r&&r.apply(s),t&&t()};return g(s,a,n),s}var f={},p=function(t){var e=!1,n=function(){e&&s.unbind(b,n),0<c&&s.each(function(){this.style[h.transition]=f[this]||null}),"function"==typeof r&&r.apply(s),"function"==typeof t&&t()};0<c&&b&&d.transit.useTransitionEnd?(e=!0,s.bind(b,n)):window.setTimeout(n,c),s.each(function(){0<c&&(this.style[h.transition]=o),d(this).css(i)})},l;return g(s,a,function(t){this.offsetWidth,p(t)}),this},d.transit.getTransitionValue=m}(jQuery);
!function(){"use strict";var e=0,r={};function i(t){if(!t)throw new Error("No options passed to Waypoint constructor");if(!t.element)throw new Error("No element option passed to Waypoint constructor");if(!t.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=i.Adapter.extend({},i.defaults,t),this.element=this.options.element,this.adapter=new i.Adapter(this.element),this.callback=t.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=i.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=i.Context.findOrCreateByElement(this.options.context),i.offsetAliases[this.options.offset]&&(this.options.offset=i.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),r[this.key]=this,e+=1}i.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},i.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},i.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete r[this.key]},i.prototype.disable=function(){return this.enabled=!1,this},i.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},i.prototype.next=function(){return this.group.next(this)},i.prototype.previous=function(){return this.group.previous(this)},i.invokeAll=function(t){var e=[],i;for(i in r)e.push(r[i]);for(var o=0,n=e.length;o<n;o++)e[o][t]()},i.destroyAll=function(){i.invokeAll("destroy")},i.disableAll=function(){i.invokeAll("disable")},i.enableAll=function(){for(var t in i.Context.refreshAll(),r)r[t].enabled=!0;return this},i.refreshAll=function(){i.Context.refreshAll()},i.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},i.viewportWidth=function(){return document.documentElement.clientWidth},i.adapters=[],i.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},i.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=i}(),function(){"use strict";function i(t){window.setTimeout(t,1e3/60)}var e=0,o={},f=window.Waypoint,t=window.onload;function n(t){this.element=t,this.Adapter=f.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+e,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,e+=1,f.windowContext||(f.windowContext=!0,f.windowContext=new n(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}n.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},n.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical),i=this.element==this.element.window;t&&e&&!i&&(this.adapter.off(".waypoints"),delete o[this.key])},n.prototype.createThrottledResizeHandler=function(){var t=this;function e(){t.handleResize(),t.didResize=!1}this.adapter.on("resize.waypoints",function(){t.didResize||(t.didResize=!0,f.requestAnimationFrame(e))})},n.prototype.createThrottledScrollHandler=function(){var t=this;function e(){t.handleScroll(),t.didScroll=!1}this.adapter.on("scroll.waypoints",function(){t.didScroll&&!f.isTouch||(t.didScroll=!0,f.requestAnimationFrame(e))})},n.prototype.handleResize=function(){f.Context.refreshAll()},n.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:0,oldScroll:0,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}},i,o;for(i in e){var n=e[i],r,s=n.newScroll>n.oldScroll?n.forward:n.backward,a;for(a in this.waypoints[i]){var l=this.waypoints[i][a],h,p,c,u;null!==l.triggerPoint&&(h=n.oldScroll<l.triggerPoint,p=n.newScroll>=l.triggerPoint,(h&&p||!h&&!p)&&(l.queueTrigger(s),t[l.group.id]=l.group))}}for(o in t)t[o].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},n.prototype.innerHeight=function(){return this.element==this.element.window?f.viewportHeight():this.adapter.innerHeight()},n.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},n.prototype.innerWidth=function(){return this.element==this.element.window?f.viewportWidth():this.adapter.innerWidth()},n.prototype.destroy=function(){var t=[],e;for(e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;o<n;o++)t[o].destroy()},n.prototype.refresh=function(){var t=this.element==this.element.window,e=t?void 0:this.adapter.offset(),i={},o,n;for(n in this.handleScroll(),o={horizontal:{contextOffset:t?0:e.left,contextScroll:t?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:t?0:e.top,contextScroll:t?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}}){var r=o[n],s;for(s in this.waypoints[n]){var a=this.waypoints[n][s],l=a.options.offset,h=a.triggerPoint,p=0,c=null==h,u,u,l,d,h;a.element!==a.element.window&&(p=a.adapter.offset()[r.offsetProp]),"function"==typeof l?l=l.apply(a):"string"==typeof l&&(l=parseFloat(l),-1<a.options.offset.indexOf("%")&&(l=Math.ceil(r.contextDimension*l/100))),u=r.contextScroll-r.contextOffset,a.triggerPoint=Math.floor(p+u-l),u=h<r.oldScroll,l=a.triggerPoint>=r.oldScroll,h=!u&&!l,!c&&(d=u&&l)?(a.queueTrigger(r.backward),i[a.group.id]=a.group):(!c&&h||c&&r.oldScroll>=a.triggerPoint)&&(a.queueTrigger(r.forward),i[a.group.id]=a.group)}}return f.requestAnimationFrame(function(){for(var t in i)i[t].flushTriggers()}),this},n.findOrCreateByElement=function(t){return n.findByElement(t)||new n(t)},n.refreshAll=function(){for(var t in o)o[t].refresh()},n.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){t&&t(),n.refreshAll()},f.requestAnimationFrame=function(t){var e;(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||i).call(window,t)},f.Context=n}(),function(){"use strict";function s(t,e){return t.triggerPoint-e.triggerPoint}function a(t,e){return e.triggerPoint-t.triggerPoint}var e={vertical:{},horizontal:{}},i=window.Waypoint;function o(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),e[this.axis][this.name]=this}o.prototype.add=function(t){this.waypoints.push(t)},o.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},o.prototype.flushTriggers=function(){for(var t in this.triggerQueues){var e=this.triggerQueues[t],i;e.sort("up"===t||"left"===t?a:s);for(var o=0,n=e.length;o<n;o+=1){var r=e[o];!r.options.continuous&&o!==e.length-1||r.trigger([t])}}this.clearTriggerQueues()},o.prototype.next=function(t){this.waypoints.sort(s);var t=i.Adapter.inArray(t,this.waypoints),e;return t===this.waypoints.length-1?null:this.waypoints[t+1]},o.prototype.previous=function(t){this.waypoints.sort(s);var t=i.Adapter.inArray(t,this.waypoints);return t?this.waypoints[t-1]:null},o.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},o.prototype.remove=function(t){var t=i.Adapter.inArray(t,this.waypoints);-1<t&&this.waypoints.splice(t,1)},o.prototype.first=function(){return this.waypoints[0]},o.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},o.findOrCreate=function(t){return e[t.axis][t.name]||new o(t)},i.Group=o}(),function(){"use strict";var i=window.jQuery,t=window.Waypoint;function o(t){this.$element=i(t)}i.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(t,e){o.prototype[e]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[e].apply(this.$element,t)}}),i.each(["extend","inArray","isEmptyObject"],function(t,e){o[e]=i[e]}),t.adapters.push({name:"jquery",Adapter:o}),t.Adapter=o}(),function(){"use strict";var n=window.Waypoint;function t(o){return function(){var e=[],i=arguments[0];return o.isFunction(arguments[0])&&((i=o.extend({},arguments[1])).handler=arguments[0]),this.each(function(){var t=o.extend({},i,{element:this});"string"==typeof t.context&&(t.context=o(this).closest(t.context)[0]),e.push(new n(t))}),e}}window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();
/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!function(e,t){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",t):"object"==typeof module&&module.exports?module.exports=t():e.EvEmitter=t()}("undefined"!=typeof window?window:this,function(){function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var i=this._events=this._events||{},n=i[e]=i[e]||[];return n.indexOf(t)==-1&&n.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var i=this._onceEvents=this._onceEvents||{},n=i[e]=i[e]||{};return n[t]=!0,this}},t.off=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){var n=i.indexOf(t);return n!=-1&&i.splice(n,1),this}},t.emitEvent=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){i=i.slice(0),t=t||[];for(var n=this._onceEvents&&this._onceEvents[e],o=0;o<i.length;o++){var r=i[o],s=n&&n[r];s&&(this.off(e,r),delete n[r]),r.apply(this,t)}return this}},t.allOff=function(){delete this._events,delete this._onceEvents},e}),function(e,t){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return t(e,i)}):"object"==typeof module&&module.exports?module.exports=t(e,require("ev-emitter")):e.imagesLoaded=t(e,e.EvEmitter)}("undefined"!=typeof window?window:this,function(e,t){function i(e,t){for(var i in t)e[i]=t[i];return e}function n(e){if(Array.isArray(e))return e;var t="object"==typeof e&&"number"==typeof e.length;return t?d.call(e):[e]}function o(e,t,r){if(!(this instanceof o))return new o(e,t,r);var s=e;return"string"==typeof e&&(s=document.querySelectorAll(e)),s?(this.elements=n(s),this.options=i({},this.options),"function"==typeof t?r=t:i(this.options,t),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(this.check.bind(this))):void a.error("Bad element for imagesLoaded "+(s||e))}function r(e){this.img=e}function s(e,t){this.url=e,this.element=t,this.img=new Image}var h=e.jQuery,a=e.console,d=Array.prototype.slice;o.prototype=Object.create(t.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),this.options.background===!0&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&u[t]){for(var i=e.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=e.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var u={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(t.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,e),n=i.exec(t.backgroundImage)}},o.prototype.addImage=function(e){var t=new r(e);this.images.push(t)},o.prototype.addBackground=function(e,t){var i=new s(e,t);this.images.push(i)},o.prototype.check=function(){function e(e,i,n){setTimeout(function(){t.progress(e,i,n)})}var t=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(t){t.once("progress",e),t.check()}):void this.complete()},o.prototype.progress=function(e,t,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,e,t)},o.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},r.prototype=Object.create(t.prototype),r.prototype.check=function(){var e=this.getIsImageComplete();return e?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},r.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},r.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var e=this.getIsImageComplete();e&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},o.makeJQueryPlugin=function(t){t=t||e.jQuery,t&&(h=t,h.fn.imagesLoaded=function(e,t){var i=new o(this,e,t);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):jQuery&&!jQuery.fn.hoverIntent&&e(jQuery)}(function(v){"use strict";var i,u,o={interval:100,sensitivity:6,timeout:0},a=0,s=function(e){i=e.pageX,u=e.pageY},d=function(e,t,n,o){if(Math.sqrt((n.pX-i)*(n.pX-i)+(n.pY-u)*(n.pY-u))<o.sensitivity)return t.off(n.event,s),delete n.timeoutId,n.isActive=!0,e.pageX=i,e.pageY=u,delete n.pX,delete n.pY,o.over.apply(t[0],[e]);n.pX=i,n.pY=u,n.timeoutId=setTimeout(function(){d(e,t,n,o)},o.interval)},f=function(e,t,n,o){return delete t.data("hoverIntent")[n.id],o.apply(t[0],[e])};v.fn.hoverIntent=function(e,t,n){var u=a++,r=v.extend({},o);v.isPlainObject(e)?(r=v.extend(r,e),v.isFunction(r.out)||(r.out=r.over)):r=v.isFunction(t)?v.extend(r,{over:e,out:t,selector:n}):v.extend(r,{over:e,out:e,selector:t});var t=function(e){var t=v.extend({},e),n=v(this),o=n.data("hoverIntent");o||n.data("hoverIntent",o={});var i=o[u];i||(o[u]=i={id:u}),i.timeoutId&&(i.timeoutId=clearTimeout(i.timeoutId));var o=i.event="mousemove.hoverIntent.hoverIntent"+u;"mouseenter"===e.type?i.isActive||(i.pX=t.pageX,i.pY=t.pageY,n.off(o,s).on(o,s),i.timeoutId=setTimeout(function(){d(t,n,i,r)},r.interval)):i.isActive&&(n.off(o,s),i.timeoutId=setTimeout(function(){f(t,n,i,r.out)},r.timeout))};return this.on({"mouseenter.hoverIntent":t,"mouseleave.hoverIntent":t},r.selector)}});
// ==================================================
// fancyBox v3.5.7
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2019 fancyApps
//
// ==================================================
!function(t,e,n,o){"use strict";function i(t,e){var o,i,a,s=[],r=0;t&&t.isDefaultPrevented()||(t.preventDefault(),e=e||{},t&&t.data&&(e=h(t.data.options,e)),o=e.$target||n(t.currentTarget).trigger("blur"),(a=n.fancybox.getInstance())&&a.$trigger&&a.$trigger.is(o)||(e.selector?s=n(e.selector):(i=o.attr("data-fancybox")||"",i?(s=t.data?t.data.items:[],s=s.length?s.filter('[data-fancybox="'+i+'"]'):n('[data-fancybox="'+i+'"]')):s=[o]),r=n(s).index(o),r<0&&(r=0),a=n.fancybox.open(s,e,r),a.$trigger=o))}if(t.console=t.console||{info:function(t){}},n){if(n.fn.fancybox)return void console.info("fancyBox already initialized");var a={closeExisting:!1,loop:!1,gutter:50,keyboard:!0,preventCaptionOverlap:!0,arrows:!0,infobar:!0,smallBtn:"auto",toolbar:"auto",buttons:["zoom","slideShow","thumbs","close"],idleTime:3,protect:!1,modal:!1,image:{preload:!1},ajax:{settings:{data:{fancybox:!0}}},iframe:{tpl:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',preload:!0,css:{},attr:{scrolling:"auto"}},video:{tpl:'<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',format:"",autoStart:!0},defaultType:"image",animationEffect:"zoom",animationDuration:366,zoomOpacity:"auto",transitionEffect:"fade",transitionDuration:366,slideClass:"",baseClass:"",baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',spinnerTpl:'<div class="fancybox-loading"></div>',errorTpl:'<div class="fancybox-error"><p>{{ERROR}}</p></div>',btnTpl:{download:'<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',zoom:'<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',close:'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',arrowLeft:'<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',arrowRight:'<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',smallBtn:'<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'},parentEl:"body",hideScrollbar:!0,autoFocus:!0,backFocus:!0,trapFocus:!0,fullScreen:{autoStart:!1},touch:{vertical:!0,momentum:!0},hash:null,media:{},slideShow:{autoStart:!1,speed:3e3},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"},wheel:"auto",onInit:n.noop,beforeLoad:n.noop,afterLoad:n.noop,beforeShow:n.noop,afterShow:n.noop,beforeClose:n.noop,afterClose:n.noop,onActivate:n.noop,onDeactivate:n.noop,clickContent:function(t,e){return"image"===t.type&&"zoom"},clickSlide:"close",clickOutside:"close",dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1,mobile:{preventCaptionOverlap:!1,idleTime:!1,clickContent:function(t,e){return"image"===t.type&&"toggleControls"},clickSlide:function(t,e){return"image"===t.type?"toggleControls":"close"},dblclickContent:function(t,e){return"image"===t.type&&"zoom"},dblclickSlide:function(t,e){return"image"===t.type&&"zoom"}},lang:"en",i18n:{en:{CLOSE:"Close",NEXT:"Next",PREV:"Previous",ERROR:"The requested content cannot be loaded. <br/> Please try again later.",PLAY_START:"Start slideshow",PLAY_STOP:"Pause slideshow",FULL_SCREEN:"Full screen",THUMBS:"Thumbnails",DOWNLOAD:"Download",SHARE:"Share",ZOOM:"Zoom"},de:{CLOSE:"Schlie&szlig;en",NEXT:"Weiter",PREV:"Zur&uuml;ck",ERROR:"Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",PLAY_START:"Diaschau starten",PLAY_STOP:"Diaschau beenden",FULL_SCREEN:"Vollbild",THUMBS:"Vorschaubilder",DOWNLOAD:"Herunterladen",SHARE:"Teilen",ZOOM:"Vergr&ouml;&szlig;ern"}}},s=n(t),r=n(e),c=0,l=function(t){return t&&t.hasOwnProperty&&t instanceof n},d=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),u=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),f=function(){var t,n=e.createElement("fakeelement"),o={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in o)if(void 0!==n.style[t])return o[t];return"transitionend"}(),p=function(t){return t&&t.length&&t[0].offsetHeight},h=function(t,e){var o=n.extend(!0,{},t,e);return n.each(e,function(t,e){n.isArray(e)&&(o[t]=e)}),o},g=function(t){var o,i;return!(!t||t.ownerDocument!==e)&&(n(".fancybox-container").css("pointer-events","none"),o={x:t.getBoundingClientRect().left+t.offsetWidth/2,y:t.getBoundingClientRect().top+t.offsetHeight/2},i=e.elementFromPoint(o.x,o.y)===t,n(".fancybox-container").css("pointer-events",""),i)},b=function(t,e,o){var i=this;i.opts=h({index:o},n.fancybox.defaults),n.isPlainObject(e)&&(i.opts=h(i.opts,e)),n.fancybox.isMobile&&(i.opts=h(i.opts,i.opts.mobile)),i.id=i.opts.id||++c,i.currIndex=parseInt(i.opts.index,10)||0,i.prevIndex=null,i.prevPos=null,i.currPos=0,i.firstRun=!0,i.group=[],i.slides={},i.addContent(t),i.group.length&&i.init()};n.extend(b.prototype,{init:function(){var o,i,a=this,s=a.group[a.currIndex],r=s.opts;r.closeExisting&&n.fancybox.close(!0),n("body").addClass("fancybox-active"),!n.fancybox.getInstance()&&!1!==r.hideScrollbar&&!n.fancybox.isMobile&&e.body.scrollHeight>t.innerHeight&&(n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:'+(t.innerWidth-e.documentElement.clientWidth)+"px;}</style>"),n("body").addClass("compensate-for-scrollbar")),i="",n.each(r.buttons,function(t,e){i+=r.btnTpl[e]||""}),o=n(a.translate(a,r.baseTpl.replace("{{buttons}}",i).replace("{{arrows}}",r.btnTpl.arrowLeft+r.btnTpl.arrowRight))).attr("id","fancybox-container-"+a.id).addClass(r.baseClass).data("FancyBox",a).appendTo(r.parentEl),a.$refs={container:o},["bg","inner","infobar","toolbar","stage","caption","navigation"].forEach(function(t){a.$refs[t]=o.find(".fancybox-"+t)}),a.trigger("onInit"),a.activate(),a.jumpTo(a.currIndex)},translate:function(t,e){var n=t.opts.i18n[t.opts.lang]||t.opts.i18n.en;return e.replace(/\{\{(\w+)\}\}/g,function(t,e){return void 0===n[e]?t:n[e]})},addContent:function(t){var e,o=this,i=n.makeArray(t);n.each(i,function(t,e){var i,a,s,r,c,l={},d={};n.isPlainObject(e)?(l=e,d=e.opts||e):"object"===n.type(e)&&n(e).length?(i=n(e),d=i.data()||{},d=n.extend(!0,{},d,d.options),d.$orig=i,l.src=o.opts.src||d.src||i.attr("href"),l.type||l.src||(l.type="inline",l.src=e)):l={type:"html",src:e+""},l.opts=n.extend(!0,{},o.opts,d),n.isArray(d.buttons)&&(l.opts.buttons=d.buttons),n.fancybox.isMobile&&l.opts.mobile&&(l.opts=h(l.opts,l.opts.mobile)),a=l.type||l.opts.type,r=l.src||"",!a&&r&&((s=r.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))?(a="video",l.opts.video.format||(l.opts.video.format="video/"+("ogv"===s[1]?"ogg":s[1]))):r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?a="image":r.match(/\.(pdf)((\?|#).*)?$/i)?(a="iframe",l=n.extend(!0,l,{contentType:"pdf",opts:{iframe:{preload:!1}}})):"#"===r.charAt(0)&&(a="inline")),a?l.type=a:o.trigger("objectNeedsType",l),l.contentType||(l.contentType=n.inArray(l.type,["html","inline","ajax"])>-1?"html":l.type),l.index=o.group.length,"auto"==l.opts.smallBtn&&(l.opts.smallBtn=n.inArray(l.type,["html","inline","ajax"])>-1),"auto"===l.opts.toolbar&&(l.opts.toolbar=!l.opts.smallBtn),l.$thumb=l.opts.$thumb||null,l.opts.$trigger&&l.index===o.opts.index&&(l.$thumb=l.opts.$trigger.find("img:first"),l.$thumb.length&&(l.opts.$orig=l.opts.$trigger)),l.$thumb&&l.$thumb.length||!l.opts.$orig||(l.$thumb=l.opts.$orig.find("img:first")),l.$thumb&&!l.$thumb.length&&(l.$thumb=null),l.thumb=l.opts.thumb||(l.$thumb?l.$thumb[0].src:null),"function"===n.type(l.opts.caption)&&(l.opts.caption=l.opts.caption.apply(e,[o,l])),"function"===n.type(o.opts.caption)&&(l.opts.caption=o.opts.caption.apply(e,[o,l])),l.opts.caption instanceof n||(l.opts.caption=void 0===l.opts.caption?"":l.opts.caption+""),"ajax"===l.type&&(c=r.split(/\s+/,2),c.length>1&&(l.src=c.shift(),l.opts.filter=c.shift())),l.opts.modal&&(l.opts=n.extend(!0,l.opts,{trapFocus:!0,infobar:0,toolbar:0,smallBtn:0,keyboard:0,slideShow:0,fullScreen:0,thumbs:0,touch:0,clickContent:!1,clickSlide:!1,clickOutside:!1,dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1})),o.group.push(l)}),Object.keys(o.slides).length&&(o.updateControls(),(e=o.Thumbs)&&e.isActive&&(e.create(),e.focus()))},addEvents:function(){var e=this;e.removeEvents(),e.$refs.container.on("click.fb-close","[data-fancybox-close]",function(t){t.stopPropagation(),t.preventDefault(),e.close(t)}).on("touchstart.fb-prev click.fb-prev","[data-fancybox-prev]",function(t){t.stopPropagation(),t.preventDefault(),e.previous()}).on("touchstart.fb-next click.fb-next","[data-fancybox-next]",function(t){t.stopPropagation(),t.preventDefault(),e.next()}).on("click.fb","[data-fancybox-zoom]",function(t){e[e.isScaledDown()?"scaleToActual":"scaleToFit"]()}),s.on("orientationchange.fb resize.fb",function(t){t&&t.originalEvent&&"resize"===t.originalEvent.type?(e.requestId&&u(e.requestId),e.requestId=d(function(){e.update(t)})):(e.current&&"iframe"===e.current.type&&e.$refs.stage.hide(),setTimeout(function(){e.$refs.stage.show(),e.update(t)},n.fancybox.isMobile?600:250))}),r.on("keydown.fb",function(t){var o=n.fancybox?n.fancybox.getInstance():null,i=o.current,a=t.keyCode||t.which;if(9==a)return void(i.opts.trapFocus&&e.focus(t));if(!(!i.opts.keyboard||t.ctrlKey||t.altKey||t.shiftKey||n(t.target).is("input,textarea,video,audio,select")))return 8===a||27===a?(t.preventDefault(),void e.close(t)):37===a||38===a?(t.preventDefault(),void e.previous()):39===a||40===a?(t.preventDefault(),void e.next()):void e.trigger("afterKeydown",t,a)}),e.group[e.currIndex].opts.idleTime&&(e.idleSecondsCounter=0,r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",function(t){e.idleSecondsCounter=0,e.isIdle&&e.showControls(),e.isIdle=!1}),e.idleInterval=t.setInterval(function(){++e.idleSecondsCounter>=e.group[e.currIndex].opts.idleTime&&!e.isDragging&&(e.isIdle=!0,e.idleSecondsCounter=0,e.hideControls())},1e3))},removeEvents:function(){var e=this;s.off("orientationchange.fb resize.fb"),r.off("keydown.fb .fb-idle"),this.$refs.container.off(".fb-close .fb-prev .fb-next"),e.idleInterval&&(t.clearInterval(e.idleInterval),e.idleInterval=null)},previous:function(t){return this.jumpTo(this.currPos-1,t)},next:function(t){return this.jumpTo(this.currPos+1,t)},jumpTo:function(t,e){var o,i,a,s,r,c,l,d,u,f=this,h=f.group.length;if(!(f.isDragging||f.isClosing||f.isAnimating&&f.firstRun)){if(t=parseInt(t,10),!(a=f.current?f.current.opts.loop:f.opts.loop)&&(t<0||t>=h))return!1;if(o=f.firstRun=!Object.keys(f.slides).length,r=f.current,f.prevIndex=f.currIndex,f.prevPos=f.currPos,s=f.createSlide(t),h>1&&((a||s.index<h-1)&&f.createSlide(t+1),(a||s.index>0)&&f.createSlide(t-1)),f.current=s,f.currIndex=s.index,f.currPos=s.pos,f.trigger("beforeShow",o),f.updateControls(),s.forcedDuration=void 0,n.isNumeric(e)?s.forcedDuration=e:e=s.opts[o?"animationDuration":"transitionDuration"],e=parseInt(e,10),i=f.isMoved(s),s.$slide.addClass("fancybox-slide--current"),o)return s.opts.animationEffect&&e&&f.$refs.container.css("transition-duration",e+"ms"),f.$refs.container.addClass("fancybox-is-open").trigger("focus"),f.loadSlide(s),void f.preload("image");c=n.fancybox.getTranslate(r.$slide),l=n.fancybox.getTranslate(f.$refs.stage),n.each(f.slides,function(t,e){n.fancybox.stop(e.$slide,!0)}),r.pos!==s.pos&&(r.isComplete=!1),r.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"),i?(u=c.left-(r.pos*c.width+r.pos*r.opts.gutter),n.each(f.slides,function(t,o){o.$slide.removeClass("fancybox-animated").removeClass(function(t,e){return(e.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")});var i=o.pos*c.width+o.pos*o.opts.gutter;n.fancybox.setTranslate(o.$slide,{top:0,left:i-l.left+u}),o.pos!==s.pos&&o.$slide.addClass("fancybox-slide--"+(o.pos>s.pos?"next":"previous")),p(o.$slide),n.fancybox.animate(o.$slide,{top:0,left:(o.pos-s.pos)*c.width+(o.pos-s.pos)*o.opts.gutter},e,function(){o.$slide.css({transform:"",opacity:""}).removeClass("fancybox-slide--next fancybox-slide--previous"),o.pos===f.currPos&&f.complete()})})):e&&s.opts.transitionEffect&&(d="fancybox-animated fancybox-fx-"+s.opts.transitionEffect,r.$slide.addClass("fancybox-slide--"+(r.pos>s.pos?"next":"previous")),n.fancybox.animate(r.$slide,d,e,function(){r.$slide.removeClass(d).removeClass("fancybox-slide--next fancybox-slide--previous")},!1)),s.isLoaded?f.revealContent(s):f.loadSlide(s),f.preload("image")}},createSlide:function(t){var e,o,i=this;return o=t%i.group.length,o=o<0?i.group.length+o:o,!i.slides[t]&&i.group[o]&&(e=n('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage),i.slides[t]=n.extend(!0,{},i.group[o],{pos:t,$slide:e,isLoaded:!1}),i.updateSlide(i.slides[t])),i.slides[t]},scaleToActual:function(t,e,o){var i,a,s,r,c,l=this,d=l.current,u=d.$content,f=n.fancybox.getTranslate(d.$slide).width,p=n.fancybox.getTranslate(d.$slide).height,h=d.width,g=d.height;l.isAnimating||l.isMoved()||!u||"image"!=d.type||!d.isLoaded||d.hasError||(l.isAnimating=!0,n.fancybox.stop(u),t=void 0===t?.5*f:t,e=void 0===e?.5*p:e,i=n.fancybox.getTranslate(u),i.top-=n.fancybox.getTranslate(d.$slide).top,i.left-=n.fancybox.getTranslate(d.$slide).left,r=h/i.width,c=g/i.height,a=.5*f-.5*h,s=.5*p-.5*g,h>f&&(a=i.left*r-(t*r-t),a>0&&(a=0),a<f-h&&(a=f-h)),g>p&&(s=i.top*c-(e*c-e),s>0&&(s=0),s<p-g&&(s=p-g)),l.updateCursor(h,g),n.fancybox.animate(u,{top:s,left:a,scaleX:r,scaleY:c},o||366,function(){l.isAnimating=!1}),l.SlideShow&&l.SlideShow.isActive&&l.SlideShow.stop())},scaleToFit:function(t){var e,o=this,i=o.current,a=i.$content;o.isAnimating||o.isMoved()||!a||"image"!=i.type||!i.isLoaded||i.hasError||(o.isAnimating=!0,n.fancybox.stop(a),e=o.getFitPos(i),o.updateCursor(e.width,e.height),n.fancybox.animate(a,{top:e.top,left:e.left,scaleX:e.width/a.width(),scaleY:e.height/a.height()},t||366,function(){o.isAnimating=!1}))},getFitPos:function(t){var e,o,i,a,s=this,r=t.$content,c=t.$slide,l=t.width||t.opts.width,d=t.height||t.opts.height,u={};return!!(t.isLoaded&&r&&r.length)&&(e=n.fancybox.getTranslate(s.$refs.stage).width,o=n.fancybox.getTranslate(s.$refs.stage).height,e-=parseFloat(c.css("paddingLeft"))+parseFloat(c.css("paddingRight"))+parseFloat(r.css("marginLeft"))+parseFloat(r.css("marginRight")),o-=parseFloat(c.css("paddingTop"))+parseFloat(c.css("paddingBottom"))+parseFloat(r.css("marginTop"))+parseFloat(r.css("marginBottom")),l&&d||(l=e,d=o),i=Math.min(1,e/l,o/d),l*=i,d*=i,l>e-.5&&(l=e),d>o-.5&&(d=o),"image"===t.type?(u.top=Math.floor(.5*(o-d))+parseFloat(c.css("paddingTop")),u.left=Math.floor(.5*(e-l))+parseFloat(c.css("paddingLeft"))):"video"===t.contentType&&(a=t.opts.width&&t.opts.height?l/d:t.opts.ratio||16/9,d>l/a?d=l/a:l>d*a&&(l=d*a)),u.width=l,u.height=d,u)},update:function(t){var e=this;n.each(e.slides,function(n,o){e.updateSlide(o,t)})},updateSlide:function(t,e){var o=this,i=t&&t.$content,a=t.width||t.opts.width,s=t.height||t.opts.height,r=t.$slide;o.adjustCaption(t),i&&(a||s||"video"===t.contentType)&&!t.hasError&&(n.fancybox.stop(i),n.fancybox.setTranslate(i,o.getFitPos(t)),t.pos===o.currPos&&(o.isAnimating=!1,o.updateCursor())),o.adjustLayout(t),r.length&&(r.trigger("refresh"),t.pos===o.currPos&&o.$refs.toolbar.add(o.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar",r.get(0).scrollHeight>r.get(0).clientHeight)),o.trigger("onUpdate",t,e)},centerSlide:function(t){var e=this,o=e.current,i=o.$slide;!e.isClosing&&o&&(i.siblings().css({transform:"",opacity:""}),i.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"),n.fancybox.animate(i,{top:0,left:0,opacity:1},void 0===t?0:t,function(){i.css({transform:"",opacity:""}),o.isComplete||e.complete()},!1))},isMoved:function(t){var e,o,i=t||this.current;return!!i&&(o=n.fancybox.getTranslate(this.$refs.stage),e=n.fancybox.getTranslate(i.$slide),!i.$slide.hasClass("fancybox-animated")&&(Math.abs(e.top-o.top)>.5||Math.abs(e.left-o.left)>.5))},updateCursor:function(t,e){var o,i,a=this,s=a.current,r=a.$refs.container;s&&!a.isClosing&&a.Guestures&&(r.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"),o=a.canPan(t,e),i=!!o||a.isZoomable(),r.toggleClass("fancybox-is-zoomable",i),n("[data-fancybox-zoom]").prop("disabled",!i),o?r.addClass("fancybox-can-pan"):i&&("zoom"===s.opts.clickContent||n.isFunction(s.opts.clickContent)&&"zoom"==s.opts.clickContent(s))?r.addClass("fancybox-can-zoomIn"):s.opts.touch&&(s.opts.touch.vertical||a.group.length>1)&&"video"!==s.contentType&&r.addClass("fancybox-can-swipe"))},isZoomable:function(){var t,e=this,n=e.current;if(n&&!e.isClosing&&"image"===n.type&&!n.hasError){if(!n.isLoaded)return!0;if((t=e.getFitPos(n))&&(n.width>t.width||n.height>t.height))return!0}return!1},isScaledDown:function(t,e){var o=this,i=!1,a=o.current,s=a.$content;return void 0!==t&&void 0!==e?i=t<a.width&&e<a.height:s&&(i=n.fancybox.getTranslate(s),i=i.width<a.width&&i.height<a.height),i},canPan:function(t,e){var o=this,i=o.current,a=null,s=!1;return"image"===i.type&&(i.isComplete||t&&e)&&!i.hasError&&(s=o.getFitPos(i),void 0!==t&&void 0!==e?a={width:t,height:e}:i.isComplete&&(a=n.fancybox.getTranslate(i.$content)),a&&s&&(s=Math.abs(a.width-s.width)>1.5||Math.abs(a.height-s.height)>1.5)),s},loadSlide:function(t){var e,o,i,a=this;if(!t.isLoading&&!t.isLoaded){if(t.isLoading=!0,!1===a.trigger("beforeLoad",t))return t.isLoading=!1,!1;switch(e=t.type,o=t.$slide,o.off("refresh").trigger("onReset").addClass(t.opts.slideClass),e){case"image":a.setImage(t);break;case"iframe":a.setIframe(t);break;case"html":a.setContent(t,t.src||t.content);break;case"video":a.setContent(t,t.opts.video.tpl.replace(/\{\{src\}\}/gi,t.src).replace("{{format}}",t.opts.videoFormat||t.opts.video.format||"").replace("{{poster}}",t.thumb||""));break;case"inline":n(t.src).length?a.setContent(t,n(t.src)):a.setError(t);break;case"ajax":a.showLoading(t),i=n.ajax(n.extend({},t.opts.ajax.settings,{url:t.src,success:function(e,n){"success"===n&&a.setContent(t,e)},error:function(e,n){e&&"abort"!==n&&a.setError(t)}})),o.one("onReset",function(){i.abort()});break;default:a.setError(t)}return!0}},setImage:function(t){var o,i=this;setTimeout(function(){var e=t.$image;i.isClosing||!t.isLoading||e&&e.length&&e[0].complete||t.hasError||i.showLoading(t)},50),i.checkSrcset(t),t.$content=n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")),!1!==t.opts.preload&&t.opts.width&&t.opts.height&&t.thumb&&(t.width=t.opts.width,t.height=t.opts.height,o=e.createElement("img"),o.onerror=function(){n(this).remove(),t.$ghost=null},o.onload=function(){i.afterLoad(t)},t.$ghost=n(o).addClass("fancybox-image").appendTo(t.$content).attr("src",t.thumb)),i.setBigImage(t)},checkSrcset:function(e){var n,o,i,a,s=e.opts.srcset||e.opts.image.srcset;if(s){i=t.devicePixelRatio||1,a=t.innerWidth*i,o=s.split(",").map(function(t){var e={};return t.trim().split(/\s+/).forEach(function(t,n){var o=parseInt(t.substring(0,t.length-1),10);if(0===n)return e.url=t;o&&(e.value=o,e.postfix=t[t.length-1])}),e}),o.sort(function(t,e){return t.value-e.value});for(var r=0;r<o.length;r++){var c=o[r];if("w"===c.postfix&&c.value>=a||"x"===c.postfix&&c.value>=i){n=c;break}}!n&&o.length&&(n=o[o.length-1]),n&&(e.src=n.url,e.width&&e.height&&"w"==n.postfix&&(e.height=e.width/e.height*n.value,e.width=n.value),e.opts.srcset=s)}},setBigImage:function(t){var o=this,i=e.createElement("img"),a=n(i);t.$image=a.one("error",function(){o.setError(t)}).one("load",function(){var e;t.$ghost||(o.resolveImageSlideSize(t,this.naturalWidth,this.naturalHeight),o.afterLoad(t)),o.isClosing||(t.opts.srcset&&(e=t.opts.sizes,e&&"auto"!==e||(e=(t.width/t.height>1&&s.width()/s.height()>1?"100":Math.round(t.width/t.height*100))+"vw"),a.attr("sizes",e).attr("srcset",t.opts.srcset)),t.$ghost&&setTimeout(function(){t.$ghost&&!o.isClosing&&t.$ghost.hide()},Math.min(300,Math.max(1e3,t.height/1600))),o.hideLoading(t))}).addClass("fancybox-image").attr("src",t.src).appendTo(t.$content),(i.complete||"complete"==i.readyState)&&a.naturalWidth&&a.naturalHeight?a.trigger("load"):i.error&&a.trigger("error")},resolveImageSlideSize:function(t,e,n){var o=parseInt(t.opts.width,10),i=parseInt(t.opts.height,10);t.width=e,t.height=n,o>0&&(t.width=o,t.height=Math.floor(o*n/e)),i>0&&(t.width=Math.floor(i*e/n),t.height=i)},setIframe:function(t){var e,o=this,i=t.opts.iframe,a=t.$slide;t.$content=n('<div class="fancybox-content'+(i.preload?" fancybox-is-hidden":"")+'"></div>').css(i.css).appendTo(a),a.addClass("fancybox-slide--"+t.contentType),t.$iframe=e=n(i.tpl.replace(/\{rnd\}/g,(new Date).getTime())).attr(i.attr).appendTo(t.$content),i.preload?(o.showLoading(t),e.on("load.fb error.fb",function(e){this.isReady=1,t.$slide.trigger("refresh"),o.afterLoad(t)}),a.on("refresh.fb",function(){var n,o,s=t.$content,r=i.css.width,c=i.css.height;if(1===e[0].isReady){try{n=e.contents(),o=n.find("body")}catch(t){}o&&o.length&&o.children().length&&(a.css("overflow","visible"),s.css({width:"100%","max-width":"100%",height:"9999px"}),void 0===r&&(r=Math.ceil(Math.max(o[0].clientWidth,o.outerWidth(!0)))),s.css("width",r||"").css("max-width",""),void 0===c&&(c=Math.ceil(Math.max(o[0].clientHeight,o.outerHeight(!0)))),s.css("height",c||""),a.css("overflow","auto")),s.removeClass("fancybox-is-hidden")}})):o.afterLoad(t),e.attr("src",t.src),a.one("onReset",function(){try{n(this).find("iframe").hide().unbind().attr("src","//about:blank")}catch(t){}n(this).off("refresh.fb").empty(),t.isLoaded=!1,t.isRevealed=!1})},setContent:function(t,e){var o=this;o.isClosing||(o.hideLoading(t),t.$content&&n.fancybox.stop(t.$content),t.$slide.empty(),l(e)&&e.parent().length?((e.hasClass("fancybox-content")||e.parent().hasClass("fancybox-content"))&&e.parents(".fancybox-slide").trigger("onReset"),t.$placeholder=n("<div>").hide().insertAfter(e),e.css("display","inline-block")):t.hasError||("string"===n.type(e)&&(e=n("<div>").append(n.trim(e)).contents()),t.opts.filter&&(e=n("<div>").html(e).find(t.opts.filter))),t.$slide.one("onReset",function(){n(this).find("video,audio").trigger("pause"),t.$placeholder&&(t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(),t.$placeholder=null),t.$smallBtn&&(t.$smallBtn.remove(),t.$smallBtn=null),t.hasError||(n(this).empty(),t.isLoaded=!1,t.isRevealed=!1)}),n(e).appendTo(t.$slide),n(e).is("video,audio")&&(n(e).addClass("fancybox-video"),n(e).wrap("<div></div>"),t.contentType="video",t.opts.width=t.opts.width||n(e).attr("width"),t.opts.height=t.opts.height||n(e).attr("height")),t.$content=t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(),t.$content.siblings().hide(),t.$content.length||(t.$content=t.$slide.wrapInner("<div></div>").children().first()),t.$content.addClass("fancybox-content"),t.$slide.addClass("fancybox-slide--"+t.contentType),o.afterLoad(t))},setError:function(t){t.hasError=!0,t.$slide.trigger("onReset").removeClass("fancybox-slide--"+t.contentType).addClass("fancybox-slide--error"),t.contentType="html",this.setContent(t,this.translate(t,t.opts.errorTpl)),t.pos===this.currPos&&(this.isAnimating=!1)},showLoading:function(t){var e=this;(t=t||e.current)&&!t.$spinner&&(t.$spinner=n(e.translate(e,e.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"))},hideLoading:function(t){var e=this;(t=t||e.current)&&t.$spinner&&(t.$spinner.stop().remove(),delete t.$spinner)},afterLoad:function(t){var e=this;e.isClosing||(t.isLoading=!1,t.isLoaded=!0,e.trigger("afterLoad",t),e.hideLoading(t),!t.opts.smallBtn||t.$smallBtn&&t.$smallBtn.length||(t.$smallBtn=n(e.translate(t,t.opts.btnTpl.smallBtn)).appendTo(t.$content)),t.opts.protect&&t.$content&&!t.hasError&&(t.$content.on("contextmenu.fb",function(t){return 2==t.button&&t.preventDefault(),!0}),"image"===t.type&&n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),e.adjustCaption(t),e.adjustLayout(t),t.pos===e.currPos&&e.updateCursor(),e.revealContent(t))},adjustCaption:function(t){var e,n=this,o=t||n.current,i=o.opts.caption,a=o.opts.preventCaptionOverlap,s=n.$refs.caption,r=!1;s.toggleClass("fancybox-caption--separate",a),a&&i&&i.length&&(o.pos!==n.currPos?(e=s.clone().appendTo(s.parent()),e.children().eq(0).empty().html(i),r=e.outerHeight(!0),e.empty().remove()):n.$caption&&(r=n.$caption.outerHeight(!0)),o.$slide.css("padding-bottom",r||""))},adjustLayout:function(t){var e,n,o,i,a=this,s=t||a.current;s.isLoaded&&!0!==s.opts.disableLayoutFix&&(s.$content.css("margin-bottom",""),s.$content.outerHeight()>s.$slide.height()+.5&&(o=s.$slide[0].style["padding-bottom"],i=s.$slide.css("padding-bottom"),parseFloat(i)>0&&(e=s.$slide[0].scrollHeight,s.$slide.css("padding-bottom",0),Math.abs(e-s.$slide[0].scrollHeight)<1&&(n=i),s.$slide.css("padding-bottom",o))),s.$content.css("margin-bottom",n))},revealContent:function(t){var e,o,i,a,s=this,r=t.$slide,c=!1,l=!1,d=s.isMoved(t),u=t.isRevealed;return t.isRevealed=!0,e=t.opts[s.firstRun?"animationEffect":"transitionEffect"],i=t.opts[s.firstRun?"animationDuration":"transitionDuration"],i=parseInt(void 0===t.forcedDuration?i:t.forcedDuration,10),!d&&t.pos===s.currPos&&i||(e=!1),"zoom"===e&&(t.pos===s.currPos&&i&&"image"===t.type&&!t.hasError&&(l=s.getThumbPos(t))?c=s.getFitPos(t):e="fade"),"zoom"===e?(s.isAnimating=!0,c.scaleX=c.width/l.width,c.scaleY=c.height/l.height,a=t.opts.zoomOpacity,"auto"==a&&(a=Math.abs(t.width/t.height-l.width/l.height)>.1),a&&(l.opacity=.1,c.opacity=1),n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"),l),p(t.$content),void n.fancybox.animate(t.$content,c,i,function(){s.isAnimating=!1,s.complete()})):(s.updateSlide(t),e?(n.fancybox.stop(r),o="fancybox-slide--"+(t.pos>=s.prevPos?"next":"previous")+" fancybox-animated fancybox-fx-"+e,r.addClass(o).removeClass("fancybox-slide--current"),t.$content.removeClass("fancybox-is-hidden"),p(r),"image"!==t.type&&t.$content.hide().show(0),void n.fancybox.animate(r,"fancybox-slide--current",i,function(){r.removeClass(o).css({transform:"",opacity:""}),t.pos===s.currPos&&s.complete()},!0)):(t.$content.removeClass("fancybox-is-hidden"),u||!d||"image"!==t.type||t.hasError||t.$content.hide().fadeIn("fast"),void(t.pos===s.currPos&&s.complete())))},getThumbPos:function(t){var e,o,i,a,s,r=!1,c=t.$thumb;return!(!c||!g(c[0]))&&(e=n.fancybox.getTranslate(c),o=parseFloat(c.css("border-top-width")||0),i=parseFloat(c.css("border-right-width")||0),a=parseFloat(c.css("border-bottom-width")||0),s=parseFloat(c.css("border-left-width")||0),r={top:e.top+o,left:e.left+s,width:e.width-i-s,height:e.height-o-a,scaleX:1,scaleY:1},e.width>0&&e.height>0&&r)},complete:function(){var t,e=this,o=e.current,i={};!e.isMoved()&&o.isLoaded&&(o.isComplete||(o.isComplete=!0,o.$slide.siblings().trigger("onReset"),e.preload("inline"),p(o.$slide),o.$slide.addClass("fancybox-slide--complete"),n.each(e.slides,function(t,o){o.pos>=e.currPos-1&&o.pos<=e.currPos+1?i[o.pos]=o:o&&(n.fancybox.stop(o.$slide),o.$slide.off().remove())}),e.slides=i),e.isAnimating=!1,e.updateCursor(),e.trigger("afterShow"),o.opts.video.autoStart&&o.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended",function(){Document.exitFullscreen?Document.exitFullscreen():this.webkitExitFullscreen&&this.webkitExitFullscreen(),e.next()}),o.opts.autoFocus&&"html"===o.contentType&&(t=o.$content.find("input[autofocus]:enabled:visible:first"),t.length?t.trigger("focus"):e.focus(null,!0)),o.$slide.scrollTop(0).scrollLeft(0))},preload:function(t){var e,n,o=this;o.group.length<2||(n=o.slides[o.currPos+1],e=o.slides[o.currPos-1],e&&e.type===t&&o.loadSlide(e),n&&n.type===t&&o.loadSlide(n))},focus:function(t,o){var i,a,s=this,r=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","video","audio","[contenteditable]",'[tabindex]:not([tabindex^="-"])'].join(",");s.isClosing||(i=!t&&s.current&&s.current.isComplete?s.current.$slide.find("*:visible"+(o?":not(.fancybox-close-small)":"")):s.$refs.container.find("*:visible"),i=i.filter(r).filter(function(){return"hidden"!==n(this).css("visibility")&&!n(this).hasClass("disabled")}),i.length?(a=i.index(e.activeElement),t&&t.shiftKey?(a<0||0==a)&&(t.preventDefault(),i.eq(i.length-1).trigger("focus")):(a<0||a==i.length-1)&&(t&&t.preventDefault(),i.eq(0).trigger("focus"))):s.$refs.container.trigger("focus"))},activate:function(){var t=this;n(".fancybox-container").each(function(){var e=n(this).data("FancyBox");e&&e.id!==t.id&&!e.isClosing&&(e.trigger("onDeactivate"),e.removeEvents(),e.isVisible=!1)}),t.isVisible=!0,(t.current||t.isIdle)&&(t.update(),t.updateControls()),t.trigger("onActivate"),t.addEvents()},close:function(t,e){var o,i,a,s,r,c,l,u=this,f=u.current,h=function(){u.cleanUp(t)};return!u.isClosing&&(u.isClosing=!0,!1===u.trigger("beforeClose",t)?(u.isClosing=!1,d(function(){u.update()}),!1):(u.removeEvents(),a=f.$content,o=f.opts.animationEffect,i=n.isNumeric(e)?e:o?f.opts.animationDuration:0,f.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),!0!==t?n.fancybox.stop(f.$slide):o=!1,f.$slide.siblings().trigger("onReset").remove(),i&&u.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration",i+"ms"),u.hideLoading(f),u.hideControls(!0),u.updateCursor(),"zoom"!==o||a&&i&&"image"===f.type&&!u.isMoved()&&!f.hasError&&(l=u.getThumbPos(f))||(o="fade"),"zoom"===o?(n.fancybox.stop(a),s=n.fancybox.getTranslate(a),c={top:s.top,left:s.left,scaleX:s.width/l.width,scaleY:s.height/l.height,width:l.width,height:l.height},r=f.opts.zoomOpacity,
"auto"==r&&(r=Math.abs(f.width/f.height-l.width/l.height)>.1),r&&(l.opacity=0),n.fancybox.setTranslate(a,c),p(a),n.fancybox.animate(a,l,i,h),!0):(o&&i?n.fancybox.animate(f.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"),"fancybox-animated fancybox-fx-"+o,i,h):!0===t?setTimeout(h,i):h(),!0)))},cleanUp:function(e){var o,i,a,s=this,r=s.current.opts.$orig;s.current.$slide.trigger("onReset"),s.$refs.container.empty().remove(),s.trigger("afterClose",e),s.current.opts.backFocus&&(r&&r.length&&r.is(":visible")||(r=s.$trigger),r&&r.length&&(i=t.scrollX,a=t.scrollY,r.trigger("focus"),n("html, body").scrollTop(a).scrollLeft(i))),s.current=null,o=n.fancybox.getInstance(),o?o.activate():(n("body").removeClass("fancybox-active compensate-for-scrollbar"),n("#fancybox-style-noscroll").remove())},trigger:function(t,e){var o,i=Array.prototype.slice.call(arguments,1),a=this,s=e&&e.opts?e:a.current;if(s?i.unshift(s):s=a,i.unshift(a),n.isFunction(s.opts[t])&&(o=s.opts[t].apply(s,i)),!1===o)return o;"afterClose"!==t&&a.$refs?a.$refs.container.trigger(t+".fb",i):r.trigger(t+".fb",i)},updateControls:function(){var t=this,o=t.current,i=o.index,a=t.$refs.container,s=t.$refs.caption,r=o.opts.caption;o.$slide.trigger("refresh"),r&&r.length?(t.$caption=s,s.children().eq(0).html(r)):t.$caption=null,t.hasHiddenControls||t.isIdle||t.showControls(),a.find("[data-fancybox-count]").html(t.group.length),a.find("[data-fancybox-index]").html(i+1),a.find("[data-fancybox-prev]").prop("disabled",!o.opts.loop&&i<=0),a.find("[data-fancybox-next]").prop("disabled",!o.opts.loop&&i>=t.group.length-1),"image"===o.type?a.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href",o.opts.image.src||o.src).show():o.opts.toolbar&&a.find("[data-fancybox-download],[data-fancybox-zoom]").hide(),n(e.activeElement).is(":hidden,[disabled]")&&t.$refs.container.trigger("focus")},hideControls:function(t){var e=this,n=["infobar","toolbar","nav"];!t&&e.current.opts.preventCaptionOverlap||n.push("caption"),this.$refs.container.removeClass(n.map(function(t){return"fancybox-show-"+t}).join(" ")),this.hasHiddenControls=!0},showControls:function(){var t=this,e=t.current?t.current.opts:t.opts,n=t.$refs.container;t.hasHiddenControls=!1,t.idleSecondsCounter=0,n.toggleClass("fancybox-show-toolbar",!(!e.toolbar||!e.buttons)).toggleClass("fancybox-show-infobar",!!(e.infobar&&t.group.length>1)).toggleClass("fancybox-show-caption",!!t.$caption).toggleClass("fancybox-show-nav",!!(e.arrows&&t.group.length>1)).toggleClass("fancybox-is-modal",!!e.modal)},toggleControls:function(){this.hasHiddenControls?this.showControls():this.hideControls()}}),n.fancybox={version:"3.5.7",defaults:a,getInstance:function(t){var e=n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),o=Array.prototype.slice.call(arguments,1);return e instanceof b&&("string"===n.type(t)?e[t].apply(e,o):"function"===n.type(t)&&t.apply(e,o),e)},open:function(t,e,n){return new b(t,e,n)},close:function(t){var e=this.getInstance();e&&(e.close(),!0===t&&this.close(t))},destroy:function(){this.close(!0),r.add("body").off("click.fb-start","**")},isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),use3d:function(){var n=e.createElement("div");return t.getComputedStyle&&t.getComputedStyle(n)&&t.getComputedStyle(n).getPropertyValue("transform")&&!(e.documentMode&&e.documentMode<11)}(),getTranslate:function(t){var e;return!(!t||!t.length)&&(e=t[0].getBoundingClientRect(),{top:e.top||0,left:e.left||0,width:e.width,height:e.height,opacity:parseFloat(t.css("opacity"))})},setTranslate:function(t,e){var n="",o={};if(t&&e)return void 0===e.left&&void 0===e.top||(n=(void 0===e.left?t.position().left:e.left)+"px, "+(void 0===e.top?t.position().top:e.top)+"px",n=this.use3d?"translate3d("+n+", 0px)":"translate("+n+")"),void 0!==e.scaleX&&void 0!==e.scaleY?n+=" scale("+e.scaleX+", "+e.scaleY+")":void 0!==e.scaleX&&(n+=" scaleX("+e.scaleX+")"),n.length&&(o.transform=n),void 0!==e.opacity&&(o.opacity=e.opacity),void 0!==e.width&&(o.width=e.width),void 0!==e.height&&(o.height=e.height),t.css(o)},animate:function(t,e,o,i,a){var s,r=this;n.isFunction(o)&&(i=o,o=null),r.stop(t),s=r.getTranslate(t),t.on(f,function(c){(!c||!c.originalEvent||t.is(c.originalEvent.target)&&"z-index"!=c.originalEvent.propertyName)&&(r.stop(t),n.isNumeric(o)&&t.css("transition-duration",""),n.isPlainObject(e)?void 0!==e.scaleX&&void 0!==e.scaleY&&r.setTranslate(t,{top:e.top,left:e.left,width:s.width*e.scaleX,height:s.height*e.scaleY,scaleX:1,scaleY:1}):!0!==a&&t.removeClass(e),n.isFunction(i)&&i(c))}),n.isNumeric(o)&&t.css("transition-duration",o+"ms"),n.isPlainObject(e)?(void 0!==e.scaleX&&void 0!==e.scaleY&&(delete e.width,delete e.height,t.parent().hasClass("fancybox-slide--image")&&t.parent().addClass("fancybox-is-scaling")),n.fancybox.setTranslate(t,e)):t.addClass(e),t.data("timer",setTimeout(function(){t.trigger(f)},o+33))},stop:function(t,e){t&&t.length&&(clearTimeout(t.data("timer")),e&&t.trigger(f),t.off(f).css("transition-duration",""),t.parent().removeClass("fancybox-is-scaling"))}},n.fn.fancybox=function(t){var e;return t=t||{},e=t.selector||!1,e?n("body").off("click.fb-start",e).on("click.fb-start",e,{options:t},i):this.off("click.fb-start").on("click.fb-start",{items:this,options:t},i),this},r.on("click.fb-start","[data-fancybox]",i),r.on("click.fb-start","[data-fancybox-trigger]",function(t){n('[data-fancybox="'+n(this).attr("data-fancybox-trigger")+'"]').eq(n(this).attr("data-fancybox-index")||0).trigger("click.fb-start",{$trigger:n(this)})}),function(){var t=null;r.on("mousedown mouseup focus blur",".fancybox-button",function(e){switch(e.type){case"mousedown":t=n(this);break;case"mouseup":t=null;break;case"focusin":n(".fancybox-button").removeClass("fancybox-focus"),n(this).is(t)||n(this).is("[disabled]")||n(this).addClass("fancybox-focus");break;case"focusout":n(".fancybox-button").removeClass("fancybox-focus")}})}()}}(window,document,jQuery),function(t){"use strict";var e={youtube:{matcher:/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},paramPlace:8,type:"iframe",url:"https://www.youtube-nocookie.com/embed/$4",thumb:"https://img.youtube.com/vi/$4/hqdefault.jpg"},vimeo:{matcher:/^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1},paramPlace:3,type:"iframe",url:"//player.vimeo.com/video/$2"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},gmap_place:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/?ll="+(t[9]?t[9]+"&z="+Math.floor(t[10])+(t[12]?t[12].replace(/^\//,"&"):""):t[12]+"").replace(/\?/,"&")+"&output="+(t[12]&&t[12].indexOf("layer=c")>0?"svembed":"embed")}},gmap_search:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/maps?q="+t[5].replace("query=","q=").replace("api=1","")+"&output=embed"}}},n=function(e,n,o){if(e)return o=o||"","object"===t.type(o)&&(o=t.param(o,!0)),t.each(n,function(t,n){e=e.replace("$"+t,n||"")}),o.length&&(e+=(e.indexOf("?")>0?"&":"?")+o),e};t(document).on("objectNeedsType.fb",function(o,i,a){var s,r,c,l,d,u,f,p=a.src||"",h=!1;s=t.extend(!0,{},e,a.opts.media),t.each(s,function(e,o){if(c=p.match(o.matcher)){if(h=o.type,f=e,u={},o.paramPlace&&c[o.paramPlace]){d=c[o.paramPlace],"?"==d[0]&&(d=d.substring(1)),d=d.split("&");for(var i=0;i<d.length;++i){var s=d[i].split("=",2);2==s.length&&(u[s[0]]=decodeURIComponent(s[1].replace(/\+/g," ")))}}return l=t.extend(!0,{},o.params,a.opts[e],u),p="function"===t.type(o.url)?o.url.call(this,c,l,a):n(o.url,c,l),r="function"===t.type(o.thumb)?o.thumb.call(this,c,l,a):n(o.thumb,c),"youtube"===e?p=p.replace(/&t=((\d+)m)?(\d+)s/,function(t,e,n,o){return"&start="+((n?60*parseInt(n,10):0)+parseInt(o,10))}):"vimeo"===e&&(p=p.replace("&%23","#")),!1}}),h?(a.opts.thumb||a.opts.$thumb&&a.opts.$thumb.length||(a.opts.thumb=r),"iframe"===h&&(a.opts=t.extend(!0,a.opts,{iframe:{preload:!1,attr:{scrolling:"no"}}})),t.extend(a,{type:h,src:p,origSrc:a.src,contentSource:f,contentType:"image"===h?"image":"gmap_place"==f||"gmap_search"==f?"map":"video"})):p&&(a.type=a.opts.defaultType)});var o={youtube:{src:"https://www.youtube.com/iframe_api",class:"YT",loading:!1,loaded:!1},vimeo:{src:"https://player.vimeo.com/api/player.js",class:"Vimeo",loading:!1,loaded:!1},load:function(t){var e,n=this;if(this[t].loaded)return void setTimeout(function(){n.done(t)});this[t].loading||(this[t].loading=!0,e=document.createElement("script"),e.type="text/javascript",e.src=this[t].src,"youtube"===t?window.onYouTubeIframeAPIReady=function(){n[t].loaded=!0,n.done(t)}:e.onload=function(){n[t].loaded=!0,n.done(t)},document.body.appendChild(e))},done:function(e){var n,o,i;"youtube"===e&&delete window.onYouTubeIframeAPIReady,(n=t.fancybox.getInstance())&&(o=n.current.$content.find("iframe"),"youtube"===e&&void 0!==YT&&YT?i=new YT.Player(o.attr("id"),{events:{onStateChange:function(t){0==t.data&&n.next()}}}):"vimeo"===e&&void 0!==Vimeo&&Vimeo&&(i=new Vimeo.Player(o),i.on("ended",function(){n.next()})))}};t(document).on({"afterShow.fb":function(t,e,n){e.group.length>1&&("youtube"===n.contentSource||"vimeo"===n.contentSource)&&o.load(n.contentSource)}})}(jQuery),function(t,e,n){"use strict";var o=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),i=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),a=function(e){var n=[];e=e.originalEvent||e||t.e,e=e.touches&&e.touches.length?e.touches:e.changedTouches&&e.changedTouches.length?e.changedTouches:[e];for(var o in e)e[o].pageX?n.push({x:e[o].pageX,y:e[o].pageY}):e[o].clientX&&n.push({x:e[o].clientX,y:e[o].clientY});return n},s=function(t,e,n){return e&&t?"x"===n?t.x-e.x:"y"===n?t.y-e.y:Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)):0},r=function(t){if(t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe')||n.isFunction(t.get(0).onclick)||t.data("selectable"))return!0;for(var e=0,o=t[0].attributes,i=o.length;e<i;e++)if("data-fancybox-"===o[e].nodeName.substr(0,14))return!0;return!1},c=function(e){var n=t.getComputedStyle(e)["overflow-y"],o=t.getComputedStyle(e)["overflow-x"],i=("scroll"===n||"auto"===n)&&e.scrollHeight>e.clientHeight,a=("scroll"===o||"auto"===o)&&e.scrollWidth>e.clientWidth;return i||a},l=function(t){for(var e=!1;;){if(e=c(t.get(0)))break;if(t=t.parent(),!t.length||t.hasClass("fancybox-stage")||t.is("body"))break}return e},d=function(t){var e=this;e.instance=t,e.$bg=t.$refs.bg,e.$stage=t.$refs.stage,e.$container=t.$refs.container,e.destroy(),e.$container.on("touchstart.fb.touch mousedown.fb.touch",n.proxy(e,"ontouchstart"))};d.prototype.destroy=function(){var t=this;t.$container.off(".fb.touch"),n(e).off(".fb.touch"),t.requestId&&(i(t.requestId),t.requestId=null),t.tapped&&(clearTimeout(t.tapped),t.tapped=null)},d.prototype.ontouchstart=function(o){var i=this,c=n(o.target),d=i.instance,u=d.current,f=u.$slide,p=u.$content,h="touchstart"==o.type;if(h&&i.$container.off("mousedown.fb.touch"),(!o.originalEvent||2!=o.originalEvent.button)&&f.length&&c.length&&!r(c)&&!r(c.parent())&&(c.is("img")||!(o.originalEvent.clientX>c[0].clientWidth+c.offset().left))){if(!u||d.isAnimating||u.$slide.hasClass("fancybox-animated"))return o.stopPropagation(),void o.preventDefault();i.realPoints=i.startPoints=a(o),i.startPoints.length&&(u.touch&&o.stopPropagation(),i.startEvent=o,i.canTap=!0,i.$target=c,i.$content=p,i.opts=u.opts.touch,i.isPanning=!1,i.isSwiping=!1,i.isZooming=!1,i.isScrolling=!1,i.canPan=d.canPan(),i.startTime=(new Date).getTime(),i.distanceX=i.distanceY=i.distance=0,i.canvasWidth=Math.round(f[0].clientWidth),i.canvasHeight=Math.round(f[0].clientHeight),i.contentLastPos=null,i.contentStartPos=n.fancybox.getTranslate(i.$content)||{top:0,left:0},i.sliderStartPos=n.fancybox.getTranslate(f),i.stagePos=n.fancybox.getTranslate(d.$refs.stage),i.sliderStartPos.top-=i.stagePos.top,i.sliderStartPos.left-=i.stagePos.left,i.contentStartPos.top-=i.stagePos.top,i.contentStartPos.left-=i.stagePos.left,n(e).off(".fb.touch").on(h?"touchend.fb.touch touchcancel.fb.touch":"mouseup.fb.touch mouseleave.fb.touch",n.proxy(i,"ontouchend")).on(h?"touchmove.fb.touch":"mousemove.fb.touch",n.proxy(i,"ontouchmove")),n.fancybox.isMobile&&e.addEventListener("scroll",i.onscroll,!0),((i.opts||i.canPan)&&(c.is(i.$stage)||i.$stage.find(c).length)||(c.is(".fancybox-image")&&o.preventDefault(),n.fancybox.isMobile&&c.parents(".fancybox-caption").length))&&(i.isScrollable=l(c)||l(c.parent()),n.fancybox.isMobile&&i.isScrollable||o.preventDefault(),(1===i.startPoints.length||u.hasError)&&(i.canPan?(n.fancybox.stop(i.$content),i.isPanning=!0):i.isSwiping=!0,i.$container.addClass("fancybox-is-grabbing")),2===i.startPoints.length&&"image"===u.type&&(u.isLoaded||u.$ghost)&&(i.canTap=!1,i.isSwiping=!1,i.isPanning=!1,i.isZooming=!0,n.fancybox.stop(i.$content),i.centerPointStartX=.5*(i.startPoints[0].x+i.startPoints[1].x)-n(t).scrollLeft(),i.centerPointStartY=.5*(i.startPoints[0].y+i.startPoints[1].y)-n(t).scrollTop(),i.percentageOfImageAtPinchPointX=(i.centerPointStartX-i.contentStartPos.left)/i.contentStartPos.width,i.percentageOfImageAtPinchPointY=(i.centerPointStartY-i.contentStartPos.top)/i.contentStartPos.height,i.startDistanceBetweenFingers=s(i.startPoints[0],i.startPoints[1]))))}},d.prototype.onscroll=function(t){var n=this;n.isScrolling=!0,e.removeEventListener("scroll",n.onscroll,!0)},d.prototype.ontouchmove=function(t){var e=this;return void 0!==t.originalEvent.buttons&&0===t.originalEvent.buttons?void e.ontouchend(t):e.isScrolling?void(e.canTap=!1):(e.newPoints=a(t),void((e.opts||e.canPan)&&e.newPoints.length&&e.newPoints.length&&(e.isSwiping&&!0===e.isSwiping||t.preventDefault(),e.distanceX=s(e.newPoints[0],e.startPoints[0],"x"),e.distanceY=s(e.newPoints[0],e.startPoints[0],"y"),e.distance=s(e.newPoints[0],e.startPoints[0]),e.distance>0&&(e.isSwiping?e.onSwipe(t):e.isPanning?e.onPan():e.isZooming&&e.onZoom()))))},d.prototype.onSwipe=function(e){var a,s=this,r=s.instance,c=s.isSwiping,l=s.sliderStartPos.left||0;if(!0!==c)"x"==c&&(s.distanceX>0&&(s.instance.group.length<2||0===s.instance.current.index&&!s.instance.current.opts.loop)?l+=Math.pow(s.distanceX,.8):s.distanceX<0&&(s.instance.group.length<2||s.instance.current.index===s.instance.group.length-1&&!s.instance.current.opts.loop)?l-=Math.pow(-s.distanceX,.8):l+=s.distanceX),s.sliderLastPos={top:"x"==c?0:s.sliderStartPos.top+s.distanceY,left:l},s.requestId&&(i(s.requestId),s.requestId=null),s.requestId=o(function(){s.sliderLastPos&&(n.each(s.instance.slides,function(t,e){var o=e.pos-s.instance.currPos;n.fancybox.setTranslate(e.$slide,{top:s.sliderLastPos.top,left:s.sliderLastPos.left+o*s.canvasWidth+o*e.opts.gutter})}),s.$container.addClass("fancybox-is-sliding"))});else if(Math.abs(s.distance)>10){if(s.canTap=!1,r.group.length<2&&s.opts.vertical?s.isSwiping="y":r.isDragging||!1===s.opts.vertical||"auto"===s.opts.vertical&&n(t).width()>800?s.isSwiping="x":(a=Math.abs(180*Math.atan2(s.distanceY,s.distanceX)/Math.PI),s.isSwiping=a>45&&a<135?"y":"x"),"y"===s.isSwiping&&n.fancybox.isMobile&&s.isScrollable)return void(s.isScrolling=!0);r.isDragging=s.isSwiping,s.startPoints=s.newPoints,n.each(r.slides,function(t,e){var o,i;n.fancybox.stop(e.$slide),o=n.fancybox.getTranslate(e.$slide),i=n.fancybox.getTranslate(r.$refs.stage),e.$slide.css({transform:"",opacity:"","transition-duration":""}).removeClass("fancybox-animated").removeClass(function(t,e){return(e.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")}),e.pos===r.current.pos&&(s.sliderStartPos.top=o.top-i.top,s.sliderStartPos.left=o.left-i.left),n.fancybox.setTranslate(e.$slide,{top:o.top-i.top,left:o.left-i.left})}),r.SlideShow&&r.SlideShow.isActive&&r.SlideShow.stop()}},d.prototype.onPan=function(){var t=this;if(s(t.newPoints[0],t.realPoints[0])<(n.fancybox.isMobile?10:5))return void(t.startPoints=t.newPoints);t.canTap=!1,t.contentLastPos=t.limitMovement(),t.requestId&&i(t.requestId),t.requestId=o(function(){n.fancybox.setTranslate(t.$content,t.contentLastPos)})},d.prototype.limitMovement=function(){var t,e,n,o,i,a,s=this,r=s.canvasWidth,c=s.canvasHeight,l=s.distanceX,d=s.distanceY,u=s.contentStartPos,f=u.left,p=u.top,h=u.width,g=u.height;return i=h>r?f+l:f,a=p+d,t=Math.max(0,.5*r-.5*h),e=Math.max(0,.5*c-.5*g),n=Math.min(r-h,.5*r-.5*h),o=Math.min(c-g,.5*c-.5*g),l>0&&i>t&&(i=t-1+Math.pow(-t+f+l,.8)||0),l<0&&i<n&&(i=n+1-Math.pow(n-f-l,.8)||0),d>0&&a>e&&(a=e-1+Math.pow(-e+p+d,.8)||0),d<0&&a<o&&(a=o+1-Math.pow(o-p-d,.8)||0),{top:a,left:i}},d.prototype.limitPosition=function(t,e,n,o){var i=this,a=i.canvasWidth,s=i.canvasHeight;return n>a?(t=t>0?0:t,t=t<a-n?a-n:t):t=Math.max(0,a/2-n/2),o>s?(e=e>0?0:e,e=e<s-o?s-o:e):e=Math.max(0,s/2-o/2),{top:e,left:t}},d.prototype.onZoom=function(){var e=this,a=e.contentStartPos,r=a.width,c=a.height,l=a.left,d=a.top,u=s(e.newPoints[0],e.newPoints[1]),f=u/e.startDistanceBetweenFingers,p=Math.floor(r*f),h=Math.floor(c*f),g=(r-p)*e.percentageOfImageAtPinchPointX,b=(c-h)*e.percentageOfImageAtPinchPointY,m=(e.newPoints[0].x+e.newPoints[1].x)/2-n(t).scrollLeft(),v=(e.newPoints[0].y+e.newPoints[1].y)/2-n(t).scrollTop(),y=m-e.centerPointStartX,x=v-e.centerPointStartY,w=l+(g+y),$=d+(b+x),S={top:$,left:w,scaleX:f,scaleY:f};e.canTap=!1,e.newWidth=p,e.newHeight=h,e.contentLastPos=S,e.requestId&&i(e.requestId),e.requestId=o(function(){n.fancybox.setTranslate(e.$content,e.contentLastPos)})},d.prototype.ontouchend=function(t){var o=this,s=o.isSwiping,r=o.isPanning,c=o.isZooming,l=o.isScrolling;if(o.endPoints=a(t),o.dMs=Math.max((new Date).getTime()-o.startTime,1),o.$container.removeClass("fancybox-is-grabbing"),n(e).off(".fb.touch"),e.removeEventListener("scroll",o.onscroll,!0),o.requestId&&(i(o.requestId),o.requestId=null),o.isSwiping=!1,o.isPanning=!1,o.isZooming=!1,o.isScrolling=!1,o.instance.isDragging=!1,o.canTap)return o.onTap(t);o.speed=100,o.velocityX=o.distanceX/o.dMs*.5,o.velocityY=o.distanceY/o.dMs*.5,r?o.endPanning():c?o.endZooming():o.endSwiping(s,l)},d.prototype.endSwiping=function(t,e){var o=this,i=!1,a=o.instance.group.length,s=Math.abs(o.distanceX),r="x"==t&&a>1&&(o.dMs>130&&s>10||s>50);o.sliderLastPos=null,"y"==t&&!e&&Math.abs(o.distanceY)>50?(n.fancybox.animate(o.instance.current.$slide,{top:o.sliderStartPos.top+o.distanceY+150*o.velocityY,opacity:0},200),i=o.instance.close(!0,250)):r&&o.distanceX>0?i=o.instance.previous(300):r&&o.distanceX<0&&(i=o.instance.next(300)),!1!==i||"x"!=t&&"y"!=t||o.instance.centerSlide(200),o.$container.removeClass("fancybox-is-sliding")},d.prototype.endPanning=function(){var t,e,o,i=this;i.contentLastPos&&(!1===i.opts.momentum||i.dMs>350?(t=i.contentLastPos.left,e=i.contentLastPos.top):(t=i.contentLastPos.left+500*i.velocityX,e=i.contentLastPos.top+500*i.velocityY),o=i.limitPosition(t,e,i.contentStartPos.width,i.contentStartPos.height),o.width=i.contentStartPos.width,o.height=i.contentStartPos.height,n.fancybox.animate(i.$content,o,366))},d.prototype.endZooming=function(){var t,e,o,i,a=this,s=a.instance.current,r=a.newWidth,c=a.newHeight;a.contentLastPos&&(t=a.contentLastPos.left,e=a.contentLastPos.top,i={top:e,left:t,width:r,height:c,scaleX:1,scaleY:1},n.fancybox.setTranslate(a.$content,i),r<a.canvasWidth&&c<a.canvasHeight?a.instance.scaleToFit(150):r>s.width||c>s.height?a.instance.scaleToActual(a.centerPointStartX,a.centerPointStartY,150):(o=a.limitPosition(t,e,r,c),n.fancybox.animate(a.$content,o,150)))},d.prototype.onTap=function(e){var o,i=this,s=n(e.target),r=i.instance,c=r.current,l=e&&a(e)||i.startPoints,d=l[0]?l[0].x-n(t).scrollLeft()-i.stagePos.left:0,u=l[0]?l[0].y-n(t).scrollTop()-i.stagePos.top:0,f=function(t){var o=c.opts[t];if(n.isFunction(o)&&(o=o.apply(r,[c,e])),o)switch(o){case"close":r.close(i.startEvent);break;case"toggleControls":r.toggleControls();break;case"next":r.next();break;case"nextOrClose":r.group.length>1?r.next():r.close(i.startEvent);break;case"zoom":"image"==c.type&&(c.isLoaded||c.$ghost)&&(r.canPan()?r.scaleToFit():r.isScaledDown()?r.scaleToActual(d,u):r.group.length<2&&r.close(i.startEvent))}};if((!e.originalEvent||2!=e.originalEvent.button)&&(s.is("img")||!(d>s[0].clientWidth+s.offset().left))){if(s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))o="Outside";else if(s.is(".fancybox-slide"))o="Slide";else{if(!r.current.$content||!r.current.$content.find(s).addBack().filter(s).length)return;o="Content"}if(i.tapped){if(clearTimeout(i.tapped),i.tapped=null,Math.abs(d-i.tapX)>50||Math.abs(u-i.tapY)>50)return this;f("dblclick"+o)}else i.tapX=d,i.tapY=u,c.opts["dblclick"+o]&&c.opts["dblclick"+o]!==c.opts["click"+o]?i.tapped=setTimeout(function(){i.tapped=null,r.isAnimating||f("click"+o)},500):f("click"+o);return this}},n(e).on("onActivate.fb",function(t,e){e&&!e.Guestures&&(e.Guestures=new d(e))}).on("beforeClose.fb",function(t,e){e&&e.Guestures&&e.Guestures.destroy()})}(window,document,jQuery),function(t,e){"use strict";e.extend(!0,e.fancybox.defaults,{btnTpl:{slideShow:'<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'},slideShow:{autoStart:!1,speed:3e3,progress:!0}});var n=function(t){this.instance=t,this.init()};e.extend(n.prototype,{timer:null,isActive:!1,$button:null,init:function(){var t=this,n=t.instance,o=n.group[n.currIndex].opts.slideShow;t.$button=n.$refs.toolbar.find("[data-fancybox-play]").on("click",function(){t.toggle()}),n.group.length<2||!o?t.$button.hide():o.progress&&(t.$progress=e('<div class="fancybox-progress"></div>').appendTo(n.$refs.inner))},set:function(t){var n=this,o=n.instance,i=o.current;i&&(!0===t||i.opts.loop||o.currIndex<o.group.length-1)?n.isActive&&"video"!==i.contentType&&(n.$progress&&e.fancybox.animate(n.$progress.show(),{scaleX:1},i.opts.slideShow.speed),n.timer=setTimeout(function(){o.current.opts.loop||o.current.index!=o.group.length-1?o.next():o.jumpTo(0)},i.opts.slideShow.speed)):(n.stop(),o.idleSecondsCounter=0,o.showControls())},clear:function(){var t=this;clearTimeout(t.timer),t.timer=null,t.$progress&&t.$progress.removeAttr("style").hide()},start:function(){var t=this,e=t.instance.current;e&&(t.$button.attr("title",(e.opts.i18n[e.opts.lang]||e.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"),t.isActive=!0,e.isComplete&&t.set(!0),t.instance.trigger("onSlideShowChange",!0))},stop:function(){var t=this,e=t.instance.current;t.clear(),t.$button.attr("title",(e.opts.i18n[e.opts.lang]||e.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"),t.isActive=!1,t.instance.trigger("onSlideShowChange",!1),t.$progress&&t.$progress.removeAttr("style").hide()},toggle:function(){var t=this;t.isActive?t.stop():t.start()}}),e(t).on({"onInit.fb":function(t,e){e&&!e.SlideShow&&(e.SlideShow=new n(e))},"beforeShow.fb":function(t,e,n,o){var i=e&&e.SlideShow;o?i&&n.opts.slideShow.autoStart&&i.start():i&&i.isActive&&i.clear()},"afterShow.fb":function(t,e,n){var o=e&&e.SlideShow;o&&o.isActive&&o.set()},"afterKeydown.fb":function(n,o,i,a,s){var r=o&&o.SlideShow;!r||!i.opts.slideShow||80!==s&&32!==s||e(t.activeElement).is("button,a,input")||(a.preventDefault(),r.toggle())},"beforeClose.fb onDeactivate.fb":function(t,e){var n=e&&e.SlideShow;n&&n.stop()}}),e(t).on("visibilitychange",function(){var n=e.fancybox.getInstance(),o=n&&n.SlideShow;o&&o.isActive&&(t.hidden?o.clear():o.set())})}(document,jQuery),function(t,e){"use strict";var n=function(){for(var e=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n={},o=0;o<e.length;o++){var i=e[o];if(i&&i[1]in t){for(var a=0;a<i.length;a++)n[e[0][a]]=i[a];return n}}return!1}();if(n){var o={request:function(e){e=e||t.documentElement,e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)},exit:function(){t[n.exitFullscreen]()},toggle:function(e){e=e||t.documentElement,this.isFullscreen()?this.exit():this.request(e)},isFullscreen:function(){return Boolean(t[n.fullscreenElement])},enabled:function(){return Boolean(t[n.fullscreenEnabled])}};e.extend(!0,e.fancybox.defaults,{btnTpl:{fullScreen:'<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'},fullScreen:{autoStart:!1}}),e(t).on(n.fullscreenchange,function(){var t=o.isFullscreen(),n=e.fancybox.getInstance();n&&(n.current&&"image"===n.current.type&&n.isAnimating&&(n.isAnimating=!1,n.update(!0,!0,0),n.isComplete||n.complete()),n.trigger("onFullscreenChange",t),n.$refs.container.toggleClass("fancybox-is-fullscreen",t),n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter",!t).toggleClass("fancybox-button--fsexit",t))})}e(t).on({"onInit.fb":function(t,e){var i;if(!n)return void e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();e&&e.group[e.currIndex].opts.fullScreen?(i=e.$refs.container,i.on("click.fb-fullscreen","[data-fancybox-fullscreen]",function(t){t.stopPropagation(),t.preventDefault(),o.toggle()}),e.opts.fullScreen&&!0===e.opts.fullScreen.autoStart&&o.request(),e.FullScreen=o):e&&e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()},"afterKeydown.fb":function(t,e,n,o,i){e&&e.FullScreen&&70===i&&(o.preventDefault(),e.FullScreen.toggle())},"beforeClose.fb":function(t,e){e&&e.FullScreen&&e.$refs.container.hasClass("fancybox-is-fullscreen")&&o.exit()}})}(document,jQuery),function(t,e){"use strict";var n="fancybox-thumbs";e.fancybox.defaults=e.extend(!0,{btnTpl:{thumbs:'<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"}},e.fancybox.defaults);var o=function(t){this.init(t)};e.extend(o.prototype,{$button:null,$grid:null,$list:null,isVisible:!1,isActive:!1,init:function(t){var e=this,n=t.group,o=0;e.instance=t,e.opts=n[t.currIndex].opts.thumbs,t.Thumbs=e,e.$button=t.$refs.toolbar.find("[data-fancybox-thumbs]");for(var i=0,a=n.length;i<a&&(n[i].thumb&&o++,!(o>1));i++);o>1&&e.opts?(e.$button.removeAttr("style").on("click",function(){e.toggle()}),e.isActive=!0):e.$button.hide()},create:function(){var t,o=this,i=o.instance,a=o.opts.parentEl,s=[];o.$grid||(o.$grid=e('<div class="'+n+" "+n+"-"+o.opts.axis+'"></div>').appendTo(i.$refs.container.find(a).addBack().filter(a)),o.$grid.on("click","a",function(){i.jumpTo(e(this).attr("data-index"))})),o.$list||(o.$list=e('<div class="'+n+'__list">').appendTo(o.$grid)),e.each(i.group,function(e,n){t=n.thumb,t||"image"!==n.type||(t=n.src),s.push('<a href="javascript:;" tabindex="0" data-index="'+e+'"'+(t&&t.length?' style="background-image:url('+t+')"':'class="fancybox-thumbs-missing"')+"></a>")}),o.$list[0].innerHTML=s.join(""),"x"===o.opts.axis&&o.$list.width(parseInt(o.$grid.css("padding-right"),10)+i.group.length*o.$list.children().eq(0).outerWidth(!0))},focus:function(t){var e,n,o=this,i=o.$list,a=o.$grid;o.instance.current&&(e=i.children().removeClass("fancybox-thumbs-active").filter('[data-index="'+o.instance.current.index+'"]').addClass("fancybox-thumbs-active"),n=e.position(),"y"===o.opts.axis&&(n.top<0||n.top>i.height()-e.outerHeight())?i.stop().animate({scrollTop:i.scrollTop()+n.top},t):"x"===o.opts.axis&&(n.left<a.scrollLeft()||n.left>a.scrollLeft()+(a.width()-e.outerWidth()))&&i.parent().stop().animate({scrollLeft:n.left},t))},update:function(){var t=this;t.instance.$refs.container.toggleClass("fancybox-show-thumbs",this.isVisible),t.isVisible?(t.$grid||t.create(),t.instance.trigger("onThumbsShow"),t.focus(0)):t.$grid&&t.instance.trigger("onThumbsHide"),t.instance.update()},hide:function(){this.isVisible=!1,this.update()},show:function(){this.isVisible=!0,this.update()},toggle:function(){this.isVisible=!this.isVisible,this.update()}}),e(t).on({"onInit.fb":function(t,e){var n;e&&!e.Thumbs&&(n=new o(e),n.isActive&&!0===n.opts.autoStart&&n.show())},"beforeShow.fb":function(t,e,n,o){var i=e&&e.Thumbs;i&&i.isVisible&&i.focus(o?0:250)},"afterKeydown.fb":function(t,e,n,o,i){var a=e&&e.Thumbs;a&&a.isActive&&71===i&&(o.preventDefault(),a.toggle())},"beforeClose.fb":function(t,e){var n=e&&e.Thumbs;n&&n.isVisible&&!1!==n.opts.hideOnClose&&n.$grid.hide()}})}(document,jQuery),function(t,e){"use strict";function n(t){var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};return String(t).replace(/[&<>"'`=\/]/g,function(t){return e[t]})}e.extend(!0,e.fancybox.defaults,{btnTpl:{share:'<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'},share:{url:function(t,e){return!t.currentHash&&"inline"!==e.type&&"html"!==e.type&&(e.origSrc||e.src)||window.location},
tpl:'<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'}}),e(t).on("click","[data-fancybox-share]",function(){var t,o,i=e.fancybox.getInstance(),a=i.current||null;a&&("function"===e.type(a.opts.share.url)&&(t=a.opts.share.url.apply(a,[i,a])),o=a.opts.share.tpl.replace(/\{\{media\}\}/g,"image"===a.type?encodeURIComponent(a.src):"").replace(/\{\{url\}\}/g,encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g,n(t)).replace(/\{\{descr\}\}/g,i.$caption?encodeURIComponent(i.$caption.text()):""),e.fancybox.open({src:i.translate(i,o),type:"html",opts:{touch:!1,animationEffect:!1,afterLoad:function(t,e){i.$refs.container.one("beforeClose.fb",function(){t.close(null,0)}),e.$content.find(".fancybox-share__button").click(function(){return window.open(this.href,"Share","width=550, height=450"),!1})},mobile:{autoFocus:!1}}}))})}(document,jQuery),function(t,e,n){"use strict";function o(){var e=t.location.hash.substr(1),n=e.split("-"),o=n.length>1&&/^\+?\d+$/.test(n[n.length-1])?parseInt(n.pop(-1),10)||1:1,i=n.join("-");return{hash:e,index:o<1?1:o,gallery:i}}function i(t){""!==t.gallery&&n("[data-fancybox='"+n.escapeSelector(t.gallery)+"']").eq(t.index-1).focus().trigger("click.fb-start")}function a(t){var e,n;return!!t&&(e=t.current?t.current.opts:t.opts,""!==(n=e.hash||(e.$orig?e.$orig.data("fancybox")||e.$orig.data("fancybox-trigger"):""))&&n)}n.escapeSelector||(n.escapeSelector=function(t){return(t+"").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,function(t,e){return e?"\0"===t?"???":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t})}),n(function(){!1!==n.fancybox.defaults.hash&&(n(e).on({"onInit.fb":function(t,e){var n,i;!1!==e.group[e.currIndex].opts.hash&&(n=o(),(i=a(e))&&n.gallery&&i==n.gallery&&(e.currIndex=n.index-1))},"beforeShow.fb":function(n,o,i,s){var r;i&&!1!==i.opts.hash&&(r=a(o))&&(o.currentHash=r+(o.group.length>1?"-"+(i.index+1):""),t.location.hash!=="#"+o.currentHash&&(s&&!o.origHash&&(o.origHash=t.location.hash),o.hashTimer&&clearTimeout(o.hashTimer),o.hashTimer=setTimeout(function(){"replaceState"in t.history?(t.history[s?"pushState":"replaceState"]({},e.title,t.location.pathname+t.location.search+"#"+o.currentHash),s&&(o.hasCreatedHistory=!0)):t.location.hash=o.currentHash,o.hashTimer=null},300)))},"beforeClose.fb":function(n,o,i){i&&!1!==i.opts.hash&&(clearTimeout(o.hashTimer),o.currentHash&&o.hasCreatedHistory?t.history.back():o.currentHash&&("replaceState"in t.history?t.history.replaceState({},e.title,t.location.pathname+t.location.search+(o.origHash||"")):t.location.hash=o.origHash),o.currentHash=null)}}),n(t).on("hashchange.fb",function(){var t=o(),e=null;n.each(n(".fancybox-container").get().reverse(),function(t,o){var i=n(o).data("FancyBox");if(i&&i.currentHash)return e=i,!1}),e?e.currentHash===t.gallery+"-"+t.index||1===t.index&&e.currentHash==t.gallery||(e.currentHash=null,e.close()):""!==t.gallery&&i(t)}),setTimeout(function(){n.fancybox.getInstance()||i(o())},50))})}(window,document,jQuery),function(t,e){"use strict";var n=(new Date).getTime();e(t).on({"onInit.fb":function(t,e,o){e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll",function(t){var o=e.current,i=(new Date).getTime();e.group.length<2||!1===o.opts.wheel||"auto"===o.opts.wheel&&"image"!==o.type||(t.preventDefault(),t.stopPropagation(),o.$slide.hasClass("fancybox-animated")||(t=t.originalEvent||t,i-n<250||(n=i,e[(-t.deltaY||-t.deltaX||t.wheelDelta||-t.detail)<0?"next":"previous"]())))})}})}(document,jQuery);
/* Touch swipe */
(function(d){var m="left",l="right",c="up",s="down",b="in",t="out",j="none",o="auto",i="swipe",p="pinch",u="tap",x="horizontal",q="vertical",g="all",e="start",h="move",f="end",n="cancel",a="ontouchstart" in window,v="TouchSwipe";var k={fingers:1,threshold:75,cancelThreshold:25,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"button, input, select, textarea, a, .noSwipe"};d.fn.swipe=function(A){var z=d(this),y=z.data(v);if(y&&typeof A==="string"){if(y[A]){return y[A].apply(this,Array.prototype.slice.call(arguments,1))}else{d.error("Method "+A+" does not exist on jQuery.swipe")}}else{if(!y&&(typeof A==="object"||!A)){return r.apply(this,arguments)}}return z};d.fn.swipe.defaults=k;d.fn.swipe.phases={PHASE_START:e,PHASE_MOVE:h,PHASE_END:f,PHASE_CANCEL:n};d.fn.swipe.directions={LEFT:m,RIGHT:l,UP:c,DOWN:s,IN:b,OUT:t};d.fn.swipe.pageScroll={NONE:j,HORIZONTAL:x,VERTICAL:q,AUTO:o};d.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:g};function r(y){if(y&&(y.allowPageScroll===undefined&&(y.swipe!==undefined||y.swipeStatus!==undefined))){y.allowPageScroll=j}if(y.click!==undefined&&y.tap===undefined){y.tap=y.click}if(!y){y={}}y=d.extend({},d.fn.swipe.defaults,y);return this.each(function(){var A=d(this);var z=A.data(v);if(!z){z=new w(this,y);A.data(v,z)}})}function w(S,ag){var aJ=(a||!ag.fallbackToMouseEvents),az=aJ?"touchstart":"mousedown",U=aJ?"touchmove":"mousemove",av=aJ?"touchend":"mouseup",D=aJ?null:"mouseleave",R="touchcancel";var ad=0,N=null,ah=0,aF=0,A=0,aj=1,aA=0,aN=0,Z=null;var H=d(S);var O="start";var aI=0;var ai=null;var I=0,Y=0,aD=0,aP=0;try{H.bind(az,at);H.bind(R,L)}catch(aG){d.error("events not supported "+az+","+R+" on jQuery.swipe")}this.enable=function(){H.bind(az,at);H.bind(R,L);return H};this.disable=function(){Q();return H};this.destroy=function(){Q();H.data(v,null);return H};this.option=function(aR,aQ){if(ag[aR]!==undefined){if(aQ===undefined){return ag[aR]}else{ag[aR]=aQ}}else{d.error("Option "+aR+" does not exist on jQuery.swipe.options")}};function at(aS){if(X()){return}if(d(aS.target).closest(ag.excludedElements,H).length>0){return}var aT=aS.originalEvent?aS.originalEvent:aS;var aR,aQ=a?aT.touches[0]:aT;O=e;if(a){aI=aT.touches.length}else{aS.preventDefault()}ad=0;N=null;aN=null;ah=0;aF=0;A=0;aj=1;aA=0;ai=T();Z=aE();z();if(!a||(aI===ag.fingers||ag.fingers===g)||ap()){aO(0,aQ);I=B();if(aI==2){aO(1,aT.touches[1]);aF=A=aa(ai[0].start,ai[1].start)}if(ag.swipeStatus||ag.pinchStatus){aR=aH(aT,O)}}else{aR=false}if(aR===false){O=n;aH(aT,O);return aR}else{ak(true)}}function P(aT){var aW=aT.originalEvent?aT.originalEvent:aT;if(O===f||O===n||af()){return}var aS,aR=a?aW.touches[0]:aW;var aU=V(aR);Y=B();if(a){aI=aW.touches.length}O=h;if(aI==2){if(aF==0){aO(1,aW.touches[1]);aF=A=aa(ai[0].start,ai[1].start)}else{V(aW.touches[1]);A=aa(ai[0].end,ai[1].end);aN=ao(ai[0].end,ai[1].end)}aj=y(aF,A);aA=Math.abs(aF-A)}if((aI===ag.fingers||ag.fingers===g)||!a||ap()){N=ar(aU.start,aU.end);C(aT,N);ad=G(aU.start,aU.end);ah=K();aK(N,ad);if(ag.swipeStatus||ag.pinchStatus){aS=aH(aW,O)}if(!ag.triggerOnTouchEnd||ag.triggerOnTouchLeave){var aQ=true;if(ag.triggerOnTouchLeave){var aV=au(this);aQ=aC(aU.end,aV)}if(!ag.triggerOnTouchEnd&&aQ){O=aM(h)}else{if(ag.triggerOnTouchLeave&&!aQ){O=aM(f)}}if(O==n||O==f){aH(aW,O)}}}else{O=n;aH(aW,O)}if(aS===false){O=n;aH(aW,O)}}function ab(aS){var aU=aS.originalEvent;if(a){if(aU.touches.length>0){aw();return true}}if(af()){aI=aP}aS.preventDefault();Y=B();if(ag.triggerOnTouchEnd||(ag.triggerOnTouchEnd==false&&O===h)){O=f;var aR=((aI===ag.fingers||ag.fingers===g)||!a);var aQ=ai[0].end.x!==0;var aT=aR&&aQ&&(an()||aB());if(aT){aH(aU,O)}else{O=n;aH(aU,O)}}else{if(!ag.triggerOnTouchEnd&&ay()){O=f;am(aU,O,u)}else{if(O===h){O=n;aH(aU,O)}}}ak(false)}function L(){aI=0;Y=0;I=0;aF=0;A=0;aj=1;z();ak(false)}function W(aQ){var aR=aQ.originalEvent;if(ag.triggerOnTouchLeave){O=aM(f);aH(aR,O)}}function Q(){H.unbind(az,at);H.unbind(R,L);H.unbind(U,P);H.unbind(av,ab);if(D){H.unbind(D,W)}ak(false)}function aM(aT){var aS=aT;var aR=aq();var aQ=ae();if(!aR){aS=n}else{if(aQ&&aT==h&&(!ag.triggerOnTouchEnd||ag.triggerOnTouchLeave)){aS=f}else{if(!aQ&&aT==f&&ag.triggerOnTouchLeave){aS=n}}}return aS}function aH(aS,aQ){var aR=undefined;if(ac()){aR=am(aS,aQ,i)}if(ap()&&aR!==false){aR=am(aS,aQ,p)}if(ay()&&aR!==false){aR=am(aS,aQ,u)}if(aQ===n){L(aS)}if(aQ===f){if(a){if(aS.touches.length==0){L(aS)}}else{L(aS)}}return aR}function am(aT,aQ,aS){var aR=undefined;if(aS==i){H.trigger("swipeStatus",[aQ,N||null,ad||0,ah||0,aI]);if(ag.swipeStatus){aR=ag.swipeStatus.call(H,aT,aQ,N||null,ad||0,ah||0,aI);if(aR===false){return false}}if(aQ==f&&aB()){H.trigger("swipe",[N,ad,ah,aI]);if(ag.swipe){aR=ag.swipe.call(H,aT,N,ad,ah,aI);if(aR===false){return false}}switch(N){case m:H.trigger("swipeLeft",[N,ad,ah,aI]);if(ag.swipeLeft){aR=ag.swipeLeft.call(H,aT,N,ad,ah,aI)}break;case l:H.trigger("swipeRight",[N,ad,ah,aI]);if(ag.swipeRight){aR=ag.swipeRight.call(H,aT,N,ad,ah,aI)}break;case c:H.trigger("swipeUp",[N,ad,ah,aI]);if(ag.swipeUp){aR=ag.swipeUp.call(H,aT,N,ad,ah,aI)}break;case s:H.trigger("swipeDown",[N,ad,ah,aI]);if(ag.swipeDown){aR=ag.swipeDown.call(H,aT,N,ad,ah,aI)}break}}}if(aS==p){H.trigger("pinchStatus",[aQ,aN||null,aA||0,ah||0,aI,aj]);if(ag.pinchStatus){aR=ag.pinchStatus.call(H,aT,aQ,aN||null,aA||0,ah||0,aI,aj);if(aR===false){return false}}if(aQ==f&&an()){switch(aN){case b:H.trigger("pinchIn",[aN||null,aA||0,ah||0,aI,aj]);if(ag.pinchIn){aR=ag.pinchIn.call(H,aT,aN||null,aA||0,ah||0,aI,aj)}break;case t:H.trigger("pinchOut",[aN||null,aA||0,ah||0,aI,aj]);if(ag.pinchOut){aR=ag.pinchOut.call(H,aT,aN||null,aA||0,ah||0,aI,aj)}break}}}if(aS==u){if(aQ===n||aQ===f){if((aI===1||!a)&&(isNaN(ad)||ad===0)){H.trigger("tap",[aT.target]);if(ag.tap){aR=ag.tap.call(H,aT,aT.target)}}}}return aR}function ae(){var aQ=true;if(ag.threshold!==null){aQ=ad>=ag.threshold}if(aQ&&ag.cancelThreshold!==null){aQ=(M(N)-ad)<ag.cancelThreshold}return aQ}function al(){if(ag.pinchThreshold!==null){return aA>=ag.pinchThreshold}return true}function aq(){var aQ;if(ag.maxTimeThreshold){if(ah>=ag.maxTimeThreshold){aQ=false}else{aQ=true}}else{aQ=true}return aQ}function C(aQ,aR){if(ag.allowPageScroll===j||ap()){aQ.preventDefault()}else{var aS=ag.allowPageScroll===o;switch(aR){case m:if((ag.swipeLeft&&aS)||(!aS&&ag.allowPageScroll!=x)){aQ.preventDefault()}break;case l:if((ag.swipeRight&&aS)||(!aS&&ag.allowPageScroll!=x)){aQ.preventDefault()}break;case c:if((ag.swipeUp&&aS)||(!aS&&ag.allowPageScroll!=q)){aQ.preventDefault()}break;case s:if((ag.swipeDown&&aS)||(!aS&&ag.allowPageScroll!=q)){aQ.preventDefault()}break}}}function an(){return al()}function ap(){return !!(ag.pinchStatus||ag.pinchIn||ag.pinchOut)}function ax(){return !!(an()&&ap())}function aB(){var aQ=aq();var aS=ae();var aR=aS&&aQ;return aR}function ac(){return !!(ag.swipe||ag.swipeStatus||ag.swipeLeft||ag.swipeRight||ag.swipeUp||ag.swipeDown)}function E(){return !!(aB()&&ac())}function ay(){return !!(ag.tap)}function aw(){aD=B();aP=event.touches.length+1}function z(){aD=0;aP=0}function af(){var aQ=false;if(aD){var aR=B()-aD;if(aR<=ag.fingerReleaseThreshold){aQ=true}}return aQ}function X(){return !!(H.data(v+"_intouch")===true)}function ak(aQ){if(aQ===true){H.bind(U,P);H.bind(av,ab);if(D){H.bind(D,W)}}else{H.unbind(U,P,false);H.unbind(av,ab,false);if(D){H.unbind(D,W,false)}}H.data(v+"_intouch",aQ===true)}function aO(aR,aQ){var aS=aQ.identifier!==undefined?aQ.identifier:0;ai[aR].identifier=aS;ai[aR].start.x=ai[aR].end.x=aQ.pageX||aQ.clientX;ai[aR].start.y=ai[aR].end.y=aQ.pageY||aQ.clientY;return ai[aR]}function V(aQ){var aS=aQ.identifier!==undefined?aQ.identifier:0;var aR=J(aS);aR.end.x=aQ.pageX||aQ.clientX;aR.end.y=aQ.pageY||aQ.clientY;return aR}function J(aR){for(var aQ=0;aQ<ai.length;aQ++){if(ai[aQ].identifier==aR){return ai[aQ]}}}function T(){var aQ=[];for(var aR=0;aR<=5;aR++){aQ.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})}return aQ}function aK(aQ,aR){aR=Math.max(aR,M(aQ));Z[aQ].distance=aR}function M(aQ){return Z[aQ].distance}function aE(){var aQ={};aQ[m]=aL(m);aQ[l]=aL(l);aQ[c]=aL(c);aQ[s]=aL(s);return aQ}function aL(aQ){return{direction:aQ,distance:0}}function K(){return Y-I}function aa(aT,aS){var aR=Math.abs(aT.x-aS.x);var aQ=Math.abs(aT.y-aS.y);return Math.round(Math.sqrt(aR*aR+aQ*aQ))}function y(aQ,aR){var aS=(aR/aQ)*1;return aS.toFixed(2)}function ao(){if(aj<1){return t}else{return b}}function G(aR,aQ){return Math.round(Math.sqrt(Math.pow(aQ.x-aR.x,2)+Math.pow(aQ.y-aR.y,2)))}function F(aT,aR){var aQ=aT.x-aR.x;var aV=aR.y-aT.y;var aS=Math.atan2(aV,aQ);var aU=Math.round(aS*180/Math.PI);if(aU<0){aU=360-Math.abs(aU)}return aU}function ar(aR,aQ){var aS=F(aR,aQ);if((aS<=45)&&(aS>=0)){return m}else{if((aS<=360)&&(aS>=315)){return m}else{if((aS>=135)&&(aS<=225)){return l}else{if((aS>45)&&(aS<135)){return s}else{return c}}}}}function B(){var aQ=new Date();return aQ.getTime()}function au(aQ){aQ=d(aQ);var aS=aQ.offset();var aR={left:aS.left,right:aS.left+aQ.outerWidth(),top:aS.top,bottom:aS.top+aQ.outerHeight()};return aR}function aC(aQ,aR){return(aQ.x>aR.left&&aQ.x<aR.right&&aQ.y>aR.top&&aQ.y<aR.bottom)}}})(jQuery);
/*
 *	jQuery carouFredSel 6.2.1
 *	Demo's and documentation:
 *	caroufredsel.dev7studios.com
 *
 *	Copyright (c) 2013 Fred Heusschen
 *	www.frebsite.nl
 *
 *	Dual licensed under the MIT and GPL licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
 */


(function($){function sc_setScroll(a,b,c){return"transition"==c.transition&&"swing"==b&&(b="ease"),{anims:[],duration:a,orgDuration:a,easing:b,startTime:getTime()}}function sc_startScroll(a,b){for(var c=0,d=a.anims.length;d>c;c++){var e=a.anims[c];e&&e[0][b.transition](e[1],a.duration,a.easing,e[2])}}function sc_stopScroll(a,b){is_boolean(b)||(b=!0),is_object(a.pre)&&sc_stopScroll(a.pre,b);for(var c=0,d=a.anims.length;d>c;c++){var e=a.anims[c];e[0].stop(!0),b&&(e[0].css(e[1]),is_function(e[2])&&e[2]())}is_object(a.post)&&sc_stopScroll(a.post,b)}function sc_afterScroll(a,b,c){switch(b&&b.remove(),c.fx){case"fade":case"crossfade":case"cover-fade":case"uncover-fade":a.css("opacity",1),a.css("filter","")}}function sc_fireCallbacks(a,b,c,d,e){if(b[c]&&b[c].call(a,d),e[c].length)for(var f=0,g=e[c].length;g>f;f++)e[c][f].call(a,d);return[]}function sc_fireQueue(a,b,c){return b.length&&(a.trigger(cf_e(b[0][0],c),b[0][1]),b.shift()),b}function sc_hideHiddenItems(a){a.each(function(){var a=$(this);a.data("_cfs_isHidden",a.is(":hidden")).hide()})}function sc_showHiddenItems(a){a&&a.each(function(){var a=$(this);a.data("_cfs_isHidden")||a.show()})}function sc_clearTimers(a){return a.auto&&clearTimeout(a.auto),a.progress&&clearInterval(a.progress),a}function sc_mapCallbackArguments(a,b,c,d,e,f,g){return{width:g.width,height:g.height,items:{old:a,skipped:b,visible:c},scroll:{items:d,direction:e,duration:f}}}function sc_getDuration(a,b,c,d){var e=a.duration;return"none"==a.fx?0:("auto"==e?e=b.scroll.duration/b.scroll.items*c:10>e&&(e=d/e),1>e?0:("fade"==a.fx&&(e/=2),Math.round(e)))}function nv_showNavi(a,b,c){var d=is_number(a.items.minimum)?a.items.minimum:a.items.visible+1;if("show"==b||"hide"==b)var e=b;else if(d>b){debug(c,"Not enough items ("+b+" total, "+d+" needed): Hiding navigation.");var e="hide"}else var e="show";var f="show"==e?"removeClass":"addClass",g=cf_c("hidden",c);a.auto.button&&a.auto.button[e]()[f](g),a.prev.button&&a.prev.button[e]()[f](g),a.next.button&&a.next.button[e]()[f](g),a.pagination.container&&a.pagination.container[e]()[f](g)}function nv_enableNavi(a,b,c){if(!a.circular&&!a.infinite){var d="removeClass"==b||"addClass"==b?b:!1,e=cf_c("disabled",c);if(a.auto.button&&d&&a.auto.button[d](e),a.prev.button){var f=d||0==b?"addClass":"removeClass";a.prev.button[f](e)}if(a.next.button){var f=d||b==a.items.visible?"addClass":"removeClass";a.next.button[f](e)}}}function go_getObject(a,b){return is_function(b)?b=b.call(a):is_undefined(b)&&(b={}),b}function go_getItemsObject(a,b){return b=go_getObject(a,b),is_number(b)?b={visible:b}:"variable"==b?b={visible:b,width:b,height:b}:is_object(b)||(b={}),b}function go_getScrollObject(a,b){return b=go_getObject(a,b),is_number(b)?b=50>=b?{items:b}:{duration:b}:is_string(b)?b={easing:b}:is_object(b)||(b={}),b}function go_getNaviObject(a,b){if(b=go_getObject(a,b),is_string(b)){var c=cf_getKeyCode(b);b=-1==c?$(b):c}return b}function go_getAutoObject(a,b){return b=go_getNaviObject(a,b),is_jquery(b)?b={button:b}:is_boolean(b)?b={play:b}:is_number(b)&&(b={timeoutDuration:b}),b.progress&&(is_string(b.progress)||is_jquery(b.progress))&&(b.progress={bar:b.progress}),b}function go_complementAutoObject(a,b){return is_function(b.button)&&(b.button=b.button.call(a)),is_string(b.button)&&(b.button=$(b.button)),is_boolean(b.play)||(b.play=!0),is_number(b.delay)||(b.delay=0),is_undefined(b.pauseOnEvent)&&(b.pauseOnEvent=!0),is_boolean(b.pauseOnResize)||(b.pauseOnResize=!0),is_number(b.timeoutDuration)||(b.timeoutDuration=10>b.duration?2500:5*b.duration),b.progress&&(is_function(b.progress.bar)&&(b.progress.bar=b.progress.bar.call(a)),is_string(b.progress.bar)&&(b.progress.bar=$(b.progress.bar)),b.progress.bar?(is_function(b.progress.updater)||(b.progress.updater=$.fn.carouFredSel.progressbarUpdater),is_number(b.progress.interval)||(b.progress.interval=50)):b.progress=!1),b}function go_getPrevNextObject(a,b){return b=go_getNaviObject(a,b),is_jquery(b)?b={button:b}:is_number(b)&&(b={key:b}),b}function go_complementPrevNextObject(a,b){return is_function(b.button)&&(b.button=b.button.call(a)),is_string(b.button)&&(b.button=$(b.button)),is_string(b.key)&&(b.key=cf_getKeyCode(b.key)),b}function go_getPaginationObject(a,b){return b=go_getNaviObject(a,b),is_jquery(b)?b={container:b}:is_boolean(b)&&(b={keys:b}),b}function go_complementPaginationObject(a,b){return is_function(b.container)&&(b.container=b.container.call(a)),is_string(b.container)&&(b.container=$(b.container)),is_number(b.items)||(b.items=!1),is_boolean(b.keys)||(b.keys=!1),is_function(b.anchorBuilder)||is_false(b.anchorBuilder)||(b.anchorBuilder=$.fn.carouFredSel.pageAnchorBuilder),is_number(b.deviation)||(b.deviation=0),b}function go_getSwipeObject(a,b){return is_function(b)&&(b=b.call(a)),is_undefined(b)&&(b={onTouch:!1}),is_true(b)?b={onTouch:b}:is_number(b)&&(b={items:b}),b}function go_complementSwipeObject(a,b){return is_boolean(b.onTouch)||(b.onTouch=!0),is_boolean(b.onMouse)||(b.onMouse=!1),is_object(b.options)||(b.options={}),is_boolean(b.options.triggerOnTouchEnd)||(b.options.triggerOnTouchEnd=!1),b}function go_getMousewheelObject(a,b){return is_function(b)&&(b=b.call(a)),is_true(b)?b={}:is_number(b)?b={items:b}:is_undefined(b)&&(b=!1),b}function go_complementMousewheelObject(a,b){return b}function gn_getItemIndex(a,b,c,d,e){if(is_string(a)&&(a=$(a,e)),is_object(a)&&(a=$(a,e)),is_jquery(a)?(a=e.children().index(a),is_boolean(c)||(c=!1)):is_boolean(c)||(c=!0),is_number(a)||(a=0),is_number(b)||(b=0),c&&(a+=d.first),a+=b,d.total>0){for(;a>=d.total;)a-=d.total;for(;0>a;)a+=d.total}return a}function gn_getVisibleItemsPrev(a,b,c){for(var d=0,e=0,f=c;f>=0;f--){var g=a.eq(f);if(d+=g.is(":visible")?g[b.d.outerWidth](!0):0,d>b.maxDimension)return e;0==f&&(f=a.length),e++}}function gn_getVisibleItemsPrevFilter(a,b,c){return gn_getItemsPrevFilter(a,b.items.filter,b.items.visibleConf.org,c)}function gn_getScrollItemsPrevFilter(a,b,c,d){return gn_getItemsPrevFilter(a,b.items.filter,d,c)}function gn_getItemsPrevFilter(a,b,c,d){for(var e=0,f=0,g=d,h=a.length;g>=0;g--){if(f++,f==h)return f;var i=a.eq(g);if(i.is(b)&&(e++,e==c))return f;0==g&&(g=h)}}function gn_getVisibleOrg(a,b){return b.items.visibleConf.org||a.children().slice(0,b.items.visible).filter(b.items.filter).length}function gn_getVisibleItemsNext(a,b,c){for(var d=0,e=0,f=c,g=a.length-1;g>=f;f++){var h=a.eq(f);if(d+=h.is(":visible")?h[b.d.outerWidth](!0):0,d>b.maxDimension)return e;if(e++,e==g+1)return e;f==g&&(f=-1)}}function gn_getVisibleItemsNextTestCircular(a,b,c,d){var e=gn_getVisibleItemsNext(a,b,c);return b.circular||c+e>d&&(e=d-c),e}function gn_getVisibleItemsNextFilter(a,b,c){return gn_getItemsNextFilter(a,b.items.filter,b.items.visibleConf.org,c,b.circular)}function gn_getScrollItemsNextFilter(a,b,c,d){return gn_getItemsNextFilter(a,b.items.filter,d+1,c,b.circular)-1}function gn_getItemsNextFilter(a,b,c,d){for(var f=0,g=0,h=d,i=a.length-1;i>=h;h++){if(g++,g>=i)return g;var j=a.eq(h);if(j.is(b)&&(f++,f==c))return g;h==i&&(h=-1)}}function gi_getCurrentItems(a,b){return a.slice(0,b.items.visible)}function gi_getOldItemsPrev(a,b,c){return a.slice(c,b.items.visibleConf.old+c)}function gi_getNewItemsPrev(a,b){return a.slice(0,b.items.visible)}function gi_getOldItemsNext(a,b){return a.slice(0,b.items.visibleConf.old)}function gi_getNewItemsNext(a,b,c){return a.slice(c,b.items.visible+c)}function sz_storeMargin(a,b,c){b.usePadding&&(is_string(c)||(c="_cfs_origCssMargin"),a.each(function(){var a=$(this),d=parseInt(a.css(b.d.marginRight),10);is_number(d)||(d=0),a.data(c,d)}))}function sz_resetMargin(a,b,c){if(b.usePadding){var d=is_boolean(c)?c:!1;is_number(c)||(c=0),sz_storeMargin(a,b,"_cfs_tempCssMargin"),a.each(function(){var a=$(this);a.css(b.d.marginRight,d?a.data("_cfs_tempCssMargin"):c+a.data("_cfs_origCssMargin"))})}}function sz_storeOrigCss(a){a.each(function(){var a=$(this);a.data("_cfs_origCss",a.attr("style")||"")})}function sz_restoreOrigCss(a){a.each(function(){var a=$(this);a.attr("style",a.data("_cfs_origCss")||"")})}function sz_setResponsiveSizes(a,b){var d=(a.items.visible,a.items[a.d.width]),e=a[a.d.height],f=is_percentage(e);b.each(function(){var b=$(this),c=d-ms_getPaddingBorderMargin(b,a,"Width");b[a.d.width](c),f&&b[a.d.height](ms_getPercentage(c,e))})}function sz_setSizes(a,b){var c=a.parent(),d=a.children(),e=gi_getCurrentItems(d,b),f=cf_mapWrapperSizes(ms_getSizes(e,b,!0),b,!1);if(c.css(f),b.usePadding){var g=b.padding,h=g[b.d[1]];b.align&&0>h&&(h=0);var i=e.last();i.css(b.d.marginRight,i.data("_cfs_origCssMargin")+h),a.css(b.d.top,g[b.d[0]]),a.css(b.d.left,g[b.d[3]])}return a.css(b.d.width,f[b.d.width]+2*ms_getTotalSize(d,b,"width")),a.css(b.d.height,ms_getLargestSize(d,b,"height")),f}function ms_getSizes(a,b,c){return[ms_getTotalSize(a,b,"width",c),ms_getLargestSize(a,b,"height",c)]}function ms_getLargestSize(a,b,c,d){return is_boolean(d)||(d=!1),is_number(b[b.d[c]])&&d?b[b.d[c]]:is_number(b.items[b.d[c]])?b.items[b.d[c]]:(c=c.toLowerCase().indexOf("width")>-1?"outerWidth":"outerHeight",ms_getTrueLargestSize(a,b,c))}function ms_getTrueLargestSize(a,b,c){for(var d=0,e=0,f=a.length;f>e;e++){var g=a.eq(e),h=g.is(":visible")?g[b.d[c]](!0):0;h>d&&(d=h)}return d}function ms_getTotalSize(a,b,c,d){if(is_boolean(d)||(d=!1),is_number(b[b.d[c]])&&d)return b[b.d[c]];if(is_number(b.items[b.d[c]]))return b.items[b.d[c]]*a.length;for(var e=c.toLowerCase().indexOf("width")>-1?"outerWidth":"outerHeight",f=0,g=0,h=a.length;h>g;g++){var i=a.eq(g);f+=i.is(":visible")?i[b.d[e]](!0):0}return f}function ms_getParentSize(a,b,c){var d=a.is(":visible");d&&a.hide();var e=a.parent()[b.d[c]]();return d&&a.show(),e}function ms_getMaxDimension(a,b){return is_number(a[a.d.width])?a[a.d.width]:b}function ms_hasVariableSizes(a,b,c){for(var d=!1,e=!1,f=0,g=a.length;g>f;f++){var h=a.eq(f),i=h.is(":visible")?h[b.d[c]](!0):0;d===!1?d=i:d!=i&&(e=!0),0==d&&(e=!0)}return e}function ms_getPaddingBorderMargin(a,b,c){return a[b.d["outer"+c]](!0)-a[b.d[c.toLowerCase()]]()}function ms_getPercentage(a,b){if(is_percentage(b)){if(b=parseInt(b.slice(0,-1),10),!is_number(b))return a;a*=b/100}return a}function cf_e(a,b,c,d,e){return is_boolean(c)||(c=!0),is_boolean(d)||(d=!0),is_boolean(e)||(e=!1),c&&(a=b.events.prefix+a),d&&(a=a+"."+b.events.namespace),d&&e&&(a+=b.serialNumber),a}function cf_c(a,b){return is_string(b.classnames[a])?b.classnames[a]:a}function cf_mapWrapperSizes(a,b,c){is_boolean(c)||(c=!0);var d=b.usePadding&&c?b.padding:[0,0,0,0],e={};return e[b.d.width]=a[0]+d[1]+d[3],e[b.d.height]=a[1]+d[0]+d[2],e}function cf_sortParams(a,b){for(var c=[],d=0,e=a.length;e>d;d++)for(var f=0,g=b.length;g>f;f++)if(b[f].indexOf(typeof a[d])>-1&&is_undefined(c[f])){c[f]=a[d];break}return c}function cf_getPadding(a){if(is_undefined(a))return[0,0,0,0];if(is_number(a))return[a,a,a,a];if(is_string(a)&&(a=a.split("px").join("").split("em").join("").split(" ")),!is_array(a))return[0,0,0,0];for(var b=0;4>b;b++)a[b]=parseInt(a[b],10);switch(a.length){case 0:return[0,0,0,0];case 1:return[a[0],a[0],a[0],a[0]];case 2:return[a[0],a[1],a[0],a[1]];case 3:return[a[0],a[1],a[2],a[1]];default:return[a[0],a[1],a[2],a[3]]}}function cf_getAlignPadding(a,b){var c=is_number(b[b.d.width])?Math.ceil(b[b.d.width]-ms_getTotalSize(a,b,"width")):0;switch(b.align){case"left":return[0,c];case"right":return[c,0];case"center":default:return[Math.ceil(c/2),Math.floor(c/2)]}}function cf_getDimensions(a){for(var b=[["width","innerWidth","outerWidth","height","innerHeight","outerHeight","left","top","marginRight",0,1,2,3],["height","innerHeight","outerHeight","width","innerWidth","outerWidth","top","left","marginBottom",3,2,1,0]],c=b[0].length,d="right"==a.direction||"left"==a.direction?0:1,e={},f=0;c>f;f++)e[b[0][f]]=b[d][f];return e}function cf_getAdjust(a,b,c,d){var e=a;if(is_function(c))e=c.call(d,e);else if(is_string(c)){var f=c.split("+"),g=c.split("-");if(g.length>f.length)var h=!0,i=g[0],j=g[1];else var h=!1,i=f[0],j=f[1];switch(i){case"even":e=1==a%2?a-1:a;break;case"odd":e=0==a%2?a-1:a;break;default:e=a}j=parseInt(j,10),is_number(j)&&(h&&(j=-j),e+=j)}return(!is_number(e)||1>e)&&(e=1),e}function cf_getItemsAdjust(a,b,c,d){return cf_getItemAdjustMinMax(cf_getAdjust(a,b,c,d),b.items.visibleConf)}function cf_getItemAdjustMinMax(a,b){return is_number(b.min)&&b.min>a&&(a=b.min),is_number(b.max)&&a>b.max&&(a=b.max),1>a&&(a=1),a}function cf_getSynchArr(a){is_array(a)||(a=[[a]]),is_array(a[0])||(a=[a]);for(var b=0,c=a.length;c>b;b++)is_string(a[b][0])&&(a[b][0]=$(a[b][0])),is_boolean(a[b][1])||(a[b][1]=!0),is_boolean(a[b][2])||(a[b][2]=!0),is_number(a[b][3])||(a[b][3]=0);return a}function cf_getKeyCode(a){return"right"==a?39:"left"==a?37:"up"==a?38:"down"==a?40:-1}function cf_setCookie(a,b,c){if(a){var d=b.triggerHandler(cf_e("currentPosition",c));$.fn.carouFredSel.cookie.set(a,d)}}function cf_getCookie(a){var b=$.fn.carouFredSel.cookie.get(a);return""==b?0:b}function in_mapCss(a,b){for(var c={},d=0,e=b.length;e>d;d++)c[b[d]]=a.css(b[d]);return c}function in_complementItems(a,b,c,d){return is_object(a.visibleConf)||(a.visibleConf={}),is_object(a.sizesConf)||(a.sizesConf={}),0==a.start&&is_number(d)&&(a.start=d),is_object(a.visible)?(a.visibleConf.min=a.visible.min,a.visibleConf.max=a.visible.max,a.visible=!1):is_string(a.visible)?("variable"==a.visible?a.visibleConf.variable=!0:a.visibleConf.adjust=a.visible,a.visible=!1):is_function(a.visible)&&(a.visibleConf.adjust=a.visible,a.visible=!1),is_string(a.filter)||(a.filter=c.filter(":hidden").length>0?":visible":"*"),a[b.d.width]||(b.responsive?(debug(!0,"Set a "+b.d.width+" for the items!"),a[b.d.width]=ms_getTrueLargestSize(c,b,"outerWidth")):a[b.d.width]=ms_hasVariableSizes(c,b,"outerWidth")?"variable":c[b.d.outerWidth](!0)),a[b.d.height]||(a[b.d.height]=ms_hasVariableSizes(c,b,"outerHeight")?"variable":c[b.d.outerHeight](!0)),a.sizesConf.width=a.width,a.sizesConf.height=a.height,a}function in_complementVisibleItems(a,b){return"variable"==a.items[a.d.width]&&(a.items.visibleConf.variable=!0),a.items.visibleConf.variable||(is_number(a[a.d.width])?a.items.visible=Math.floor(a[a.d.width]/a.items[a.d.width]):(a.items.visible=Math.floor(b/a.items[a.d.width]),a[a.d.width]=a.items.visible*a.items[a.d.width],a.items.visibleConf.adjust||(a.align=!1)),("Infinity"==a.items.visible||1>a.items.visible)&&(debug(!0,'Not a valid number of visible items: Set to "variable".'),a.items.visibleConf.variable=!0)),a}function in_complementPrimarySize(a,b,c){return"auto"==a&&(a=ms_getTrueLargestSize(c,b,"outerWidth")),a}function in_complementSecondarySize(a,b,c){return"auto"==a&&(a=ms_getTrueLargestSize(c,b,"outerHeight")),a||(a=b.items[b.d.height]),a}function in_getAlignPadding(a,b){var c=cf_getAlignPadding(gi_getCurrentItems(b,a),a);return a.padding[a.d[1]]=c[1],a.padding[a.d[3]]=c[0],a}function in_getResponsiveValues(a,b){var d=cf_getItemAdjustMinMax(Math.ceil(a[a.d.width]/a.items[a.d.width]),a.items.visibleConf);d>b.length&&(d=b.length);var e=Math.floor(a[a.d.width]/d);return a.items.visible=d,a.items[a.d.width]=e,a[a.d.width]=d*e,a}function bt_pauseOnHoverConfig(a){if(is_string(a))var b=a.indexOf("immediate")>-1?!0:!1,c=a.indexOf("resume")>-1?!0:!1;else var b=c=!1;return[b,c]}function bt_mousesheelNumber(a){return is_number(a)?a:null}function is_null(a){return null===a}function is_undefined(a){return is_null(a)||a===void 0||""===a||"undefined"===a}function is_array(a){return a instanceof Array}function is_jquery(a){return a instanceof jQuery}function is_object(a){return(a instanceof Object||"object"==typeof a)&&!is_null(a)&&!is_jquery(a)&&!is_array(a)&&!is_function(a)}function is_number(a){return(a instanceof Number||"number"==typeof a)&&!isNaN(a)}function is_string(a){return(a instanceof String||"string"==typeof a)&&!is_undefined(a)&&!is_true(a)&&!is_false(a)}function is_function(a){return a instanceof Function||"function"==typeof a}function is_boolean(a){return a instanceof Boolean||"boolean"==typeof a||is_true(a)||is_false(a)}function is_true(a){return a===!0||"true"===a}function is_false(a){return a===!1||"false"===a}function is_percentage(a){return is_string(a)&&"%"==a.slice(-1)}function getTime(){return(new Date).getTime()}function deprecated(a,b){debug(!0,a+" is DEPRECATED, support for it will be removed. Use "+b+" instead.")}function debug(a,b){if(!is_undefined(window.console)&&!is_undefined(window.console.log)){if(is_object(a)){var c=" ("+a.selector+")";a=a.debug}else var c="";if(!a)return!1;b=is_string(b)?"carouFredSel"+c+": "+b:["carouFredSel"+c+":",b],window.console.log(b)}return!1}$.fn.carouFredSel||($.fn.caroufredsel=$.fn.carouFredSel=function(options,configs){if(0==this.length)return debug(!0,'No element found for "'+this.selector+'".'),this;if(this.length>1)return this.each(function(){$(this).carouFredSel(options,configs)});var $cfs=this,$tt0=this[0],starting_position=!1;$cfs.data("_cfs_isCarousel")&&(starting_position=$cfs.triggerHandler("_cfs_triggerEvent","currentPosition"),$cfs.trigger("_cfs_triggerEvent",["destroy",!0]));var FN={};FN._init=function(a,b,c){a=go_getObject($tt0,a),a.items=go_getItemsObject($tt0,a.items),a.scroll=go_getScrollObject($tt0,a.scroll),a.auto=go_getAutoObject($tt0,a.auto),a.prev=go_getPrevNextObject($tt0,a.prev),a.next=go_getPrevNextObject($tt0,a.next),a.pagination=go_getPaginationObject($tt0,a.pagination),a.swipe=go_getSwipeObject($tt0,a.swipe),a.mousewheel=go_getMousewheelObject($tt0,a.mousewheel),b&&(opts_orig=$.extend(!0,{},$.fn.carouFredSel.defaults,a)),opts=$.extend(!0,{},$.fn.carouFredSel.defaults,a),opts.d=cf_getDimensions(opts),crsl.direction="up"==opts.direction||"left"==opts.direction?"next":"prev";var d=$cfs.children(),e=ms_getParentSize($wrp,opts,"width");if(is_true(opts.cookie)&&(opts.cookie="caroufredsel_cookie_"+conf.serialNumber),opts.maxDimension=ms_getMaxDimension(opts,e),opts.items=in_complementItems(opts.items,opts,d,c),opts[opts.d.width]=in_complementPrimarySize(opts[opts.d.width],opts,d),opts[opts.d.height]=in_complementSecondarySize(opts[opts.d.height],opts,d),opts.responsive&&(is_percentage(opts[opts.d.width])||(opts[opts.d.width]="100%")),is_percentage(opts[opts.d.width])&&(crsl.upDateOnWindowResize=!0,crsl.primarySizePercentage=opts[opts.d.width],opts[opts.d.width]=ms_getPercentage(e,crsl.primarySizePercentage),opts.items.visible||(opts.items.visibleConf.variable=!0)),opts.responsive?(opts.usePadding=!1,opts.padding=[0,0,0,0],opts.align=!1,opts.items.visibleConf.variable=!1):(opts.items.visible||(opts=in_complementVisibleItems(opts,e)),opts[opts.d.width]||(!opts.items.visibleConf.variable&&is_number(opts.items[opts.d.width])&&"*"==opts.items.filter?(opts[opts.d.width]=opts.items.visible*opts.items[opts.d.width],opts.align=!1):opts[opts.d.width]="variable"),is_undefined(opts.align)&&(opts.align=is_number(opts[opts.d.width])?"center":!1),opts.items.visibleConf.variable&&(opts.items.visible=gn_getVisibleItemsNext(d,opts,0))),"*"==opts.items.filter||opts.items.visibleConf.variable||(opts.items.visibleConf.org=opts.items.visible,opts.items.visible=gn_getVisibleItemsNextFilter(d,opts,0)),opts.items.visible=cf_getItemsAdjust(opts.items.visible,opts,opts.items.visibleConf.adjust,$tt0),opts.items.visibleConf.old=opts.items.visible,opts.responsive)opts.items.visibleConf.min||(opts.items.visibleConf.min=opts.items.visible),opts.items.visibleConf.max||(opts.items.visibleConf.max=opts.items.visible),opts=in_getResponsiveValues(opts,d,e);else switch(opts.padding=cf_getPadding(opts.padding),"top"==opts.align?opts.align="left":"bottom"==opts.align&&(opts.align="right"),opts.align){case"center":case"left":case"right":"variable"!=opts[opts.d.width]&&(opts=in_getAlignPadding(opts,d),opts.usePadding=!0);break;default:opts.align=!1,opts.usePadding=0==opts.padding[0]&&0==opts.padding[1]&&0==opts.padding[2]&&0==opts.padding[3]?!1:!0}is_number(opts.scroll.duration)||(opts.scroll.duration=500),is_undefined(opts.scroll.items)&&(opts.scroll.items=opts.responsive||opts.items.visibleConf.variable||"*"!=opts.items.filter?"visible":opts.items.visible),opts.auto=$.extend(!0,{},opts.scroll,opts.auto),opts.prev=$.extend(!0,{},opts.scroll,opts.prev),opts.next=$.extend(!0,{},opts.scroll,opts.next),opts.pagination=$.extend(!0,{},opts.scroll,opts.pagination),opts.auto=go_complementAutoObject($tt0,opts.auto),opts.prev=go_complementPrevNextObject($tt0,opts.prev),opts.next=go_complementPrevNextObject($tt0,opts.next),opts.pagination=go_complementPaginationObject($tt0,opts.pagination),opts.swipe=go_complementSwipeObject($tt0,opts.swipe),opts.mousewheel=go_complementMousewheelObject($tt0,opts.mousewheel),opts.synchronise&&(opts.synchronise=cf_getSynchArr(opts.synchronise)),opts.auto.onPauseStart&&(opts.auto.onTimeoutStart=opts.auto.onPauseStart,deprecated("auto.onPauseStart","auto.onTimeoutStart")),opts.auto.onPausePause&&(opts.auto.onTimeoutPause=opts.auto.onPausePause,deprecated("auto.onPausePause","auto.onTimeoutPause")),opts.auto.onPauseEnd&&(opts.auto.onTimeoutEnd=opts.auto.onPauseEnd,deprecated("auto.onPauseEnd","auto.onTimeoutEnd")),opts.auto.pauseDuration&&(opts.auto.timeoutDuration=opts.auto.pauseDuration,deprecated("auto.pauseDuration","auto.timeoutDuration"))},FN._build=function(){$cfs.data("_cfs_isCarousel",!0);var a=$cfs.children(),b=in_mapCss($cfs,["textAlign","float","position","top","right","bottom","left","zIndex","width","height","marginTop","marginRight","marginBottom","marginLeft"]),c="relative";switch(b.position){case"absolute":case"fixed":c=b.position}"parent"==conf.wrapper?sz_storeOrigCss($wrp):$wrp.css(b),$wrp.css({overflow:"hidden",position:c}),sz_storeOrigCss($cfs),$cfs.data("_cfs_origCssZindex",b.zIndex),$cfs.css({textAlign:"left","float":"none",position:"absolute",top:0,right:"auto",bottom:"auto",left:0,marginTop:0,marginRight:0,marginBottom:0,marginLeft:0}),sz_storeMargin(a,opts),sz_storeOrigCss(a),opts.responsive&&sz_setResponsiveSizes(opts,a)},FN._bind_events=function(){FN._unbind_events(),$cfs.bind(cf_e("stop",conf),function(a,b){return a.stopPropagation(),crsl.isStopped||opts.auto.button&&opts.auto.button.addClass(cf_c("stopped",conf)),crsl.isStopped=!0,opts.auto.play&&(opts.auto.play=!1,$cfs.trigger(cf_e("pause",conf),b)),!0}),$cfs.bind(cf_e("finish",conf),function(a){return a.stopPropagation(),crsl.isScrolling&&sc_stopScroll(scrl),!0}),$cfs.bind(cf_e("pause",conf),function(a,b,c){if(a.stopPropagation(),tmrs=sc_clearTimers(tmrs),b&&crsl.isScrolling){scrl.isStopped=!0;var d=getTime()-scrl.startTime;scrl.duration-=d,scrl.pre&&(scrl.pre.duration-=d),scrl.post&&(scrl.post.duration-=d),sc_stopScroll(scrl,!1)}if(crsl.isPaused||crsl.isScrolling||c&&(tmrs.timePassed+=getTime()-tmrs.startTime),crsl.isPaused||opts.auto.button&&opts.auto.button.addClass(cf_c("paused",conf)),crsl.isPaused=!0,opts.auto.onTimeoutPause){var e=opts.auto.timeoutDuration-tmrs.timePassed,f=100-Math.ceil(100*e/opts.auto.timeoutDuration);opts.auto.onTimeoutPause.call($tt0,f,e)}return!0}),$cfs.bind(cf_e("play",conf),function(a,b,c,d){a.stopPropagation(),tmrs=sc_clearTimers(tmrs);var e=[b,c,d],f=["string","number","boolean"],g=cf_sortParams(e,f);if(b=g[0],c=g[1],d=g[2],"prev"!=b&&"next"!=b&&(b=crsl.direction),is_number(c)||(c=0),is_boolean(d)||(d=!1),d&&(crsl.isStopped=!1,opts.auto.play=!0),!opts.auto.play)return a.stopImmediatePropagation(),debug(conf,"Carousel stopped: Not scrolling.");crsl.isPaused&&opts.auto.button&&(opts.auto.button.removeClass(cf_c("stopped",conf)),opts.auto.button.removeClass(cf_c("paused",conf))),crsl.isPaused=!1,tmrs.startTime=getTime();var h=opts.auto.timeoutDuration+c;return dur2=h-tmrs.timePassed,perc=100-Math.ceil(100*dur2/h),opts.auto.progress&&(tmrs.progress=setInterval(function(){var a=getTime()-tmrs.startTime+tmrs.timePassed,b=Math.ceil(100*a/h);opts.auto.progress.updater.call(opts.auto.progress.bar[0],b)},opts.auto.progress.interval)),tmrs.auto=setTimeout(function(){opts.auto.progress&&opts.auto.progress.updater.call(opts.auto.progress.bar[0],100),opts.auto.onTimeoutEnd&&opts.auto.onTimeoutEnd.call($tt0,perc,dur2),crsl.isScrolling?$cfs.trigger(cf_e("play",conf),b):$cfs.trigger(cf_e(b,conf),opts.auto)},dur2),opts.auto.onTimeoutStart&&opts.auto.onTimeoutStart.call($tt0,perc,dur2),!0}),$cfs.bind(cf_e("resume",conf),function(a){return a.stopPropagation(),scrl.isStopped?(scrl.isStopped=!1,crsl.isPaused=!1,crsl.isScrolling=!0,scrl.startTime=getTime(),sc_startScroll(scrl,conf)):$cfs.trigger(cf_e("play",conf)),!0}),$cfs.bind(cf_e("prev",conf)+" "+cf_e("next",conf),function(a,b,c,d,e){if(a.stopPropagation(),crsl.isStopped||$cfs.is(":hidden"))return a.stopImmediatePropagation(),debug(conf,"Carousel stopped or hidden: Not scrolling.");var f=is_number(opts.items.minimum)?opts.items.minimum:opts.items.visible+1;if(f>itms.total)return a.stopImmediatePropagation(),debug(conf,"Not enough items ("+itms.total+" total, "+f+" needed): Not scrolling.");var g=[b,c,d,e],h=["object","number/string","function","boolean"],i=cf_sortParams(g,h);b=i[0],c=i[1],d=i[2],e=i[3];var j=a.type.slice(conf.events.prefix.length);if(is_object(b)||(b={}),is_function(d)&&(b.onAfter=d),is_boolean(e)&&(b.queue=e),b=$.extend(!0,{},opts[j],b),b.conditions&&!b.conditions.call($tt0,j))return a.stopImmediatePropagation(),debug(conf,'Callback "conditions" returned false.');if(!is_number(c)){if("*"!=opts.items.filter)c="visible";else for(var k=[c,b.items,opts[j].items],i=0,l=k.length;l>i;i++)if(is_number(k[i])||"page"==k[i]||"visible"==k[i]){c=k[i];break}switch(c){case"page":return a.stopImmediatePropagation(),$cfs.triggerHandler(cf_e(j+"Page",conf),[b,d]);case"visible":opts.items.visibleConf.variable||"*"!=opts.items.filter||(c=opts.items.visible)}}if(scrl.isStopped)return $cfs.trigger(cf_e("resume",conf)),$cfs.trigger(cf_e("queue",conf),[j,[b,c,d]]),a.stopImmediatePropagation(),debug(conf,"Carousel resumed scrolling.");if(b.duration>0&&crsl.isScrolling)return b.queue&&("last"==b.queue&&(queu=[]),("first"!=b.queue||0==queu.length)&&$cfs.trigger(cf_e("queue",conf),[j,[b,c,d]])),a.stopImmediatePropagation(),debug(conf,"Carousel currently scrolling.");if(tmrs.timePassed=0,$cfs.trigger(cf_e("slide_"+j,conf),[b,c]),opts.synchronise)for(var m=opts.synchronise,n=[b,c],o=0,l=m.length;l>o;o++){var p=j;m[o][2]||(p="prev"==p?"next":"prev"),m[o][1]||(n[0]=m[o][0].triggerHandler("_cfs_triggerEvent",["configuration",p])),n[1]=c+m[o][3],m[o][0].trigger("_cfs_triggerEvent",["slide_"+p,n])}return!0}),$cfs.bind(cf_e("slide_prev",conf),function(a,b,c){a.stopPropagation();var d=$cfs.children();if(!opts.circular&&0==itms.first)return opts.infinite&&$cfs.trigger(cf_e("next",conf),itms.total-1),a.stopImmediatePropagation();if(sz_resetMargin(d,opts),!is_number(c)){if(opts.items.visibleConf.variable)c=gn_getVisibleItemsPrev(d,opts,itms.total-1);else if("*"!=opts.items.filter){var e=is_number(b.items)?b.items:gn_getVisibleOrg($cfs,opts);c=gn_getScrollItemsPrevFilter(d,opts,itms.total-1,e)}else c=opts.items.visible;c=cf_getAdjust(c,opts,b.items,$tt0)}if(opts.circular||itms.total-c<itms.first&&(c=itms.total-itms.first),opts.items.visibleConf.old=opts.items.visible,opts.items.visibleConf.variable){var f=cf_getItemsAdjust(gn_getVisibleItemsNext(d,opts,itms.total-c),opts,opts.items.visibleConf.adjust,$tt0);f>=opts.items.visible+c&&itms.total>c&&(c++,f=cf_getItemsAdjust(gn_getVisibleItemsNext(d,opts,itms.total-c),opts,opts.items.visibleConf.adjust,$tt0)),opts.items.visible=f}else if("*"!=opts.items.filter){var f=gn_getVisibleItemsNextFilter(d,opts,itms.total-c);opts.items.visible=cf_getItemsAdjust(f,opts,opts.items.visibleConf.adjust,$tt0)}if(sz_resetMargin(d,opts,!0),0==c)return a.stopImmediatePropagation(),debug(conf,"0 items to scroll: Not scrolling.");for(debug(conf,"Scrolling "+c+" items backward."),itms.first+=c;itms.first>=itms.total;)itms.first-=itms.total;opts.circular||(0==itms.first&&b.onEnd&&b.onEnd.call($tt0,"prev"),opts.infinite||nv_enableNavi(opts,itms.first,conf)),$cfs.children().slice(itms.total-c,itms.total).prependTo($cfs),itms.total<opts.items.visible+c&&$cfs.children().slice(0,opts.items.visible+c-itms.total).clone(!0).appendTo($cfs);var d=$cfs.children(),g=gi_getOldItemsPrev(d,opts,c),h=gi_getNewItemsPrev(d,opts),i=d.eq(c-1),j=g.last(),k=h.last();sz_resetMargin(d,opts);var l=0,m=0;if(opts.align){var n=cf_getAlignPadding(h,opts);l=n[0],m=n[1]}var o=0>l?opts.padding[opts.d[3]]:0,p=!1,q=$();if(c>opts.items.visible&&(q=d.slice(opts.items.visibleConf.old,c),"directscroll"==b.fx)){var r=opts.items[opts.d.width];p=q,i=k,sc_hideHiddenItems(p),opts.items[opts.d.width]="variable"}var s=!1,t=ms_getTotalSize(d.slice(0,c),opts,"width"),u=cf_mapWrapperSizes(ms_getSizes(h,opts,!0),opts,!opts.usePadding),v=0,w={},x={},y={},z={},A={},B={},C={},D=sc_getDuration(b,opts,c,t);switch(b.fx){case"cover":case"cover-fade":v=ms_getTotalSize(d.slice(0,opts.items.visible),opts,"width")}p&&(opts.items[opts.d.width]=r),sz_resetMargin(d,opts,!0),m>=0&&sz_resetMargin(j,opts,opts.padding[opts.d[1]]),l>=0&&sz_resetMargin(i,opts,opts.padding[opts.d[3]]),opts.align&&(opts.padding[opts.d[1]]=m,opts.padding[opts.d[3]]=l),B[opts.d.left]=-(t-o),C[opts.d.left]=-(v-o),x[opts.d.left]=u[opts.d.width];var E=function(){},F=function(){},G=function(){},H=function(){},I=function(){},J=function(){},K=function(){},L=function(){},M=function(){},N=function(){},O=function(){};switch(b.fx){case"crossfade":case"cover":case"cover-fade":case"uncover":case"uncover-fade":s=$cfs.clone(!0).appendTo($wrp)}switch(b.fx){case"crossfade":case"uncover":case"uncover-fade":s.children().slice(0,c).remove(),s.children().slice(opts.items.visibleConf.old).remove();break;case"cover":case"cover-fade":s.children().slice(opts.items.visible).remove(),s.css(C)}if($cfs.css(B),scrl=sc_setScroll(D,b.easing,conf),w[opts.d.left]=opts.usePadding?opts.padding[opts.d[3]]:0,("variable"==opts[opts.d.width]||"variable"==opts[opts.d.height])&&(E=function(){$wrp.css(u)},F=function(){scrl.anims.push([$wrp,u])}),opts.usePadding){switch(k.not(i).length&&(y[opts.d.marginRight]=i.data("_cfs_origCssMargin"),0>l?i.css(y):(K=function(){i.css(y)},L=function(){scrl.anims.push([i,y])})),b.fx){case"cover":case"cover-fade":s.children().eq(c-1).css(y)}k.not(j).length&&(z[opts.d.marginRight]=j.data("_cfs_origCssMargin"),G=function(){j.css(z)},H=function(){scrl.anims.push([j,z])}),m>=0&&(A[opts.d.marginRight]=k.data("_cfs_origCssMargin")+opts.padding[opts.d[1]],I=function(){k.css(A)},J=function(){scrl.anims.push([k,A])})}O=function(){$cfs.css(w)};var P=opts.items.visible+c-itms.total;N=function(){if(P>0&&($cfs.children().slice(itms.total).remove(),g=$($cfs.children().slice(itms.total-(opts.items.visible-P)).get().concat($cfs.children().slice(0,P).get()))),sc_showHiddenItems(p),opts.usePadding){var a=$cfs.children().eq(opts.items.visible+c-1);a.css(opts.d.marginRight,a.data("_cfs_origCssMargin"))}};var Q=sc_mapCallbackArguments(g,q,h,c,"prev",D,u);switch(M=function(){sc_afterScroll($cfs,s,b),crsl.isScrolling=!1,clbk.onAfter=sc_fireCallbacks($tt0,b,"onAfter",Q,clbk),queu=sc_fireQueue($cfs,queu,conf),crsl.isPaused||$cfs.trigger(cf_e("play",conf))},crsl.isScrolling=!0,tmrs=sc_clearTimers(tmrs),clbk.onBefore=sc_fireCallbacks($tt0,b,"onBefore",Q,clbk),b.fx){case"none":$cfs.css(w),E(),G(),I(),K(),O(),N(),M();break;case"fade":scrl.anims.push([$cfs,{opacity:0},function(){E(),G(),I(),K(),O(),N(),scrl=sc_setScroll(D,b.easing,conf),scrl.anims.push([$cfs,{opacity:1},M]),sc_startScroll(scrl,conf)}]);break;case"crossfade":$cfs.css({opacity:0}),scrl.anims.push([s,{opacity:0}]),scrl.anims.push([$cfs,{opacity:1},M]),F(),G(),I(),K(),O(),N();break;case"cover":scrl.anims.push([s,w,function(){G(),I(),K(),O(),N(),M()}]),F();break;case"cover-fade":scrl.anims.push([$cfs,{opacity:0}]),scrl.anims.push([s,w,function(){G(),I(),K(),O(),N(),M()}]),F();break;case"uncover":scrl.anims.push([s,x,M]),F(),G(),I(),K(),O(),N();break;case"uncover-fade":$cfs.css({opacity:0}),scrl.anims.push([$cfs,{opacity:1}]),scrl.anims.push([s,x,M]),F(),G(),I(),K(),O(),N();break;default:scrl.anims.push([$cfs,w,function(){N(),M()}]),F(),H(),J(),L()}return sc_startScroll(scrl,conf),cf_setCookie(opts.cookie,$cfs,conf),$cfs.trigger(cf_e("updatePageStatus",conf),[!1,u]),!0
}),$cfs.bind(cf_e("slide_next",conf),function(a,b,c){a.stopPropagation();var d=$cfs.children();if(!opts.circular&&itms.first==opts.items.visible)return opts.infinite&&$cfs.trigger(cf_e("prev",conf),itms.total-1),a.stopImmediatePropagation();if(sz_resetMargin(d,opts),!is_number(c)){if("*"!=opts.items.filter){var e=is_number(b.items)?b.items:gn_getVisibleOrg($cfs,opts);c=gn_getScrollItemsNextFilter(d,opts,0,e)}else c=opts.items.visible;c=cf_getAdjust(c,opts,b.items,$tt0)}var f=0==itms.first?itms.total:itms.first;if(!opts.circular){if(opts.items.visibleConf.variable)var g=gn_getVisibleItemsNext(d,opts,c),e=gn_getVisibleItemsPrev(d,opts,f-1);else var g=opts.items.visible,e=opts.items.visible;c+g>f&&(c=f-e)}if(opts.items.visibleConf.old=opts.items.visible,opts.items.visibleConf.variable){for(var g=cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(d,opts,c,f),opts,opts.items.visibleConf.adjust,$tt0);opts.items.visible-c>=g&&itms.total>c;)c++,g=cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(d,opts,c,f),opts,opts.items.visibleConf.adjust,$tt0);opts.items.visible=g}else if("*"!=opts.items.filter){var g=gn_getVisibleItemsNextFilter(d,opts,c);opts.items.visible=cf_getItemsAdjust(g,opts,opts.items.visibleConf.adjust,$tt0)}if(sz_resetMargin(d,opts,!0),0==c)return a.stopImmediatePropagation(),debug(conf,"0 items to scroll: Not scrolling.");for(debug(conf,"Scrolling "+c+" items forward."),itms.first-=c;0>itms.first;)itms.first+=itms.total;opts.circular||(itms.first==opts.items.visible&&b.onEnd&&b.onEnd.call($tt0,"next"),opts.infinite||nv_enableNavi(opts,itms.first,conf)),itms.total<opts.items.visible+c&&$cfs.children().slice(0,opts.items.visible+c-itms.total).clone(!0).appendTo($cfs);var d=$cfs.children(),h=gi_getOldItemsNext(d,opts),i=gi_getNewItemsNext(d,opts,c),j=d.eq(c-1),k=h.last(),l=i.last();sz_resetMargin(d,opts);var m=0,n=0;if(opts.align){var o=cf_getAlignPadding(i,opts);m=o[0],n=o[1]}var p=!1,q=$();if(c>opts.items.visibleConf.old&&(q=d.slice(opts.items.visibleConf.old,c),"directscroll"==b.fx)){var r=opts.items[opts.d.width];p=q,j=k,sc_hideHiddenItems(p),opts.items[opts.d.width]="variable"}var s=!1,t=ms_getTotalSize(d.slice(0,c),opts,"width"),u=cf_mapWrapperSizes(ms_getSizes(i,opts,!0),opts,!opts.usePadding),v=0,w={},x={},y={},z={},A={},B=sc_getDuration(b,opts,c,t);switch(b.fx){case"uncover":case"uncover-fade":v=ms_getTotalSize(d.slice(0,opts.items.visibleConf.old),opts,"width")}p&&(opts.items[opts.d.width]=r),opts.align&&0>opts.padding[opts.d[1]]&&(opts.padding[opts.d[1]]=0),sz_resetMargin(d,opts,!0),sz_resetMargin(k,opts,opts.padding[opts.d[1]]),opts.align&&(opts.padding[opts.d[1]]=n,opts.padding[opts.d[3]]=m),A[opts.d.left]=opts.usePadding?opts.padding[opts.d[3]]:0;var C=function(){},D=function(){},E=function(){},F=function(){},G=function(){},H=function(){},I=function(){},J=function(){},K=function(){};switch(b.fx){case"crossfade":case"cover":case"cover-fade":case"uncover":case"uncover-fade":s=$cfs.clone(!0).appendTo($wrp),s.children().slice(opts.items.visibleConf.old).remove()}switch(b.fx){case"crossfade":case"cover":case"cover-fade":$cfs.css("zIndex",1),s.css("zIndex",0)}if(scrl=sc_setScroll(B,b.easing,conf),w[opts.d.left]=-t,x[opts.d.left]=-v,0>m&&(w[opts.d.left]+=m),("variable"==opts[opts.d.width]||"variable"==opts[opts.d.height])&&(C=function(){$wrp.css(u)},D=function(){scrl.anims.push([$wrp,u])}),opts.usePadding){var L=l.data("_cfs_origCssMargin");n>=0&&(L+=opts.padding[opts.d[1]]),l.css(opts.d.marginRight,L),j.not(k).length&&(z[opts.d.marginRight]=k.data("_cfs_origCssMargin")),E=function(){k.css(z)},F=function(){scrl.anims.push([k,z])};var M=j.data("_cfs_origCssMargin");m>0&&(M+=opts.padding[opts.d[3]]),y[opts.d.marginRight]=M,G=function(){j.css(y)},H=function(){scrl.anims.push([j,y])}}K=function(){$cfs.css(A)};var N=opts.items.visible+c-itms.total;J=function(){N>0&&$cfs.children().slice(itms.total).remove();var a=$cfs.children().slice(0,c).appendTo($cfs).last();if(N>0&&(i=gi_getCurrentItems(d,opts)),sc_showHiddenItems(p),opts.usePadding){if(itms.total<opts.items.visible+c){var b=$cfs.children().eq(opts.items.visible-1);b.css(opts.d.marginRight,b.data("_cfs_origCssMargin")+opts.padding[opts.d[1]])}a.css(opts.d.marginRight,a.data("_cfs_origCssMargin"))}};var O=sc_mapCallbackArguments(h,q,i,c,"next",B,u);switch(I=function(){$cfs.css("zIndex",$cfs.data("_cfs_origCssZindex")),sc_afterScroll($cfs,s,b),crsl.isScrolling=!1,clbk.onAfter=sc_fireCallbacks($tt0,b,"onAfter",O,clbk),queu=sc_fireQueue($cfs,queu,conf),crsl.isPaused||$cfs.trigger(cf_e("play",conf))},crsl.isScrolling=!0,tmrs=sc_clearTimers(tmrs),clbk.onBefore=sc_fireCallbacks($tt0,b,"onBefore",O,clbk),b.fx){case"none":$cfs.css(w),C(),E(),G(),K(),J(),I();break;case"fade":scrl.anims.push([$cfs,{opacity:0},function(){C(),E(),G(),K(),J(),scrl=sc_setScroll(B,b.easing,conf),scrl.anims.push([$cfs,{opacity:1},I]),sc_startScroll(scrl,conf)}]);break;case"crossfade":$cfs.css({opacity:0}),scrl.anims.push([s,{opacity:0}]),scrl.anims.push([$cfs,{opacity:1},I]),D(),E(),G(),K(),J();break;case"cover":$cfs.css(opts.d.left,$wrp[opts.d.width]()),scrl.anims.push([$cfs,A,I]),D(),E(),G(),J();break;case"cover-fade":$cfs.css(opts.d.left,$wrp[opts.d.width]()),scrl.anims.push([s,{opacity:0}]),scrl.anims.push([$cfs,A,I]),D(),E(),G(),J();break;case"uncover":scrl.anims.push([s,x,I]),D(),E(),G(),K(),J();break;case"uncover-fade":$cfs.css({opacity:0}),scrl.anims.push([$cfs,{opacity:1}]),scrl.anims.push([s,x,I]),D(),E(),G(),K(),J();break;default:scrl.anims.push([$cfs,w,function(){K(),J(),I()}]),D(),F(),H()}return sc_startScroll(scrl,conf),cf_setCookie(opts.cookie,$cfs,conf),$cfs.trigger(cf_e("updatePageStatus",conf),[!1,u]),!0}),$cfs.bind(cf_e("slideTo",conf),function(a,b,c,d,e,f,g){a.stopPropagation();var h=[b,c,d,e,f,g],i=["string/number/object","number","boolean","object","string","function"],j=cf_sortParams(h,i);return e=j[3],f=j[4],g=j[5],b=gn_getItemIndex(j[0],j[1],j[2],itms,$cfs),0==b?!1:(is_object(e)||(e=!1),"prev"!=f&&"next"!=f&&(f=opts.circular?itms.total/2>=b?"next":"prev":0==itms.first||itms.first>b?"next":"prev"),"prev"==f&&(b=itms.total-b),$cfs.trigger(cf_e(f,conf),[e,b,g]),!0)}),$cfs.bind(cf_e("prevPage",conf),function(a,b,c){a.stopPropagation();var d=$cfs.triggerHandler(cf_e("currentPage",conf));return $cfs.triggerHandler(cf_e("slideToPage",conf),[d-1,b,"prev",c])}),$cfs.bind(cf_e("nextPage",conf),function(a,b,c){a.stopPropagation();var d=$cfs.triggerHandler(cf_e("currentPage",conf));return $cfs.triggerHandler(cf_e("slideToPage",conf),[d+1,b,"next",c])}),$cfs.bind(cf_e("slideToPage",conf),function(a,b,c,d,e){a.stopPropagation(),is_number(b)||(b=$cfs.triggerHandler(cf_e("currentPage",conf)));var f=opts.pagination.items||opts.items.visible,g=Math.ceil(itms.total/f)-1;return 0>b&&(b=g),b>g&&(b=0),$cfs.triggerHandler(cf_e("slideTo",conf),[b*f,0,!0,c,d,e])}),$cfs.bind(cf_e("jumpToStart",conf),function(a,b){if(a.stopPropagation(),b=b?gn_getItemIndex(b,0,!0,itms,$cfs):0,b+=itms.first,0!=b){if(itms.total>0)for(;b>itms.total;)b-=itms.total;$cfs.prepend($cfs.children().slice(b,itms.total))}return!0}),$cfs.bind(cf_e("synchronise",conf),function(a,b){if(a.stopPropagation(),b)b=cf_getSynchArr(b);else{if(!opts.synchronise)return debug(conf,"No carousel to synchronise.");b=opts.synchronise}for(var c=$cfs.triggerHandler(cf_e("currentPosition",conf)),d=!0,e=0,f=b.length;f>e;e++)b[e][0].triggerHandler(cf_e("slideTo",conf),[c,b[e][3],!0])||(d=!1);return d}),$cfs.bind(cf_e("queue",conf),function(a,b,c){return a.stopPropagation(),is_function(b)?b.call($tt0,queu):is_array(b)?queu=b:is_undefined(b)||queu.push([b,c]),queu}),$cfs.bind(cf_e("insertItem",conf),function(a,b,c,d,e){a.stopPropagation();var f=[b,c,d,e],g=["string/object","string/number/object","boolean","number"],h=cf_sortParams(f,g);if(b=h[0],c=h[1],d=h[2],e=h[3],is_object(b)&&!is_jquery(b)?b=$(b):is_string(b)&&(b=$(b)),!is_jquery(b)||0==b.length)return debug(conf,"Not a valid object.");is_undefined(c)&&(c="end"),sz_storeMargin(b,opts),sz_storeOrigCss(b);var i=c,j="before";"end"==c?d?(0==itms.first?(c=itms.total-1,j="after"):(c=itms.first,itms.first+=b.length),0>c&&(c=0)):(c=itms.total-1,j="after"):c=gn_getItemIndex(c,e,d,itms,$cfs);var k=$cfs.children().eq(c);return k.length?k[j](b):(debug(conf,"Correct insert-position not found! Appending item to the end."),$cfs.append(b)),"end"==i||d||itms.first>c&&(itms.first+=b.length),itms.total=$cfs.children().length,itms.first>=itms.total&&(itms.first-=itms.total),$cfs.trigger(cf_e("updateSizes",conf)),$cfs.trigger(cf_e("linkAnchors",conf)),!0}),$cfs.bind(cf_e("removeItem",conf),function(a,b,c,d){a.stopPropagation();var e=[b,c,d],f=["string/number/object","boolean","number"],g=cf_sortParams(e,f);if(b=g[0],c=g[1],d=g[2],b instanceof $&&b.length>1)return i=$(),b.each(function(){var e=$cfs.trigger(cf_e("removeItem",conf),[$(this),c,d]);e&&(i=i.add(e))}),i;if(is_undefined(b)||"end"==b)i=$cfs.children().last();else{b=gn_getItemIndex(b,d,c,itms,$cfs);var i=$cfs.children().eq(b);i.length&&itms.first>b&&(itms.first-=i.length)}return i&&i.length&&(i.detach(),itms.total=$cfs.children().length,$cfs.trigger(cf_e("updateSizes",conf))),i}),$cfs.bind(cf_e("onBefore",conf)+" "+cf_e("onAfter",conf),function(a,b){a.stopPropagation();var c=a.type.slice(conf.events.prefix.length);return is_array(b)&&(clbk[c]=b),is_function(b)&&clbk[c].push(b),clbk[c]}),$cfs.bind(cf_e("currentPosition",conf),function(a,b){if(a.stopPropagation(),0==itms.first)var c=0;else var c=itms.total-itms.first;return is_function(b)&&b.call($tt0,c),c}),$cfs.bind(cf_e("currentPage",conf),function(a,b){a.stopPropagation();var e,c=opts.pagination.items||opts.items.visible,d=Math.ceil(itms.total/c-1);return e=0==itms.first?0:itms.first<itms.total%c?0:itms.first!=c||opts.circular?Math.round((itms.total-itms.first)/c):d,0>e&&(e=0),e>d&&(e=d),is_function(b)&&b.call($tt0,e),e}),$cfs.bind(cf_e("currentVisible",conf),function(a,b){a.stopPropagation();var c=gi_getCurrentItems($cfs.children(),opts);return is_function(b)&&b.call($tt0,c),c}),$cfs.bind(cf_e("slice",conf),function(a,b,c,d){if(a.stopPropagation(),0==itms.total)return!1;var e=[b,c,d],f=["number","number","function"],g=cf_sortParams(e,f);if(b=is_number(g[0])?g[0]:0,c=is_number(g[1])?g[1]:itms.total,d=g[2],b+=itms.first,c+=itms.first,items.total>0){for(;b>itms.total;)b-=itms.total;for(;c>itms.total;)c-=itms.total;for(;0>b;)b+=itms.total;for(;0>c;)c+=itms.total}var i,h=$cfs.children();return i=c>b?h.slice(b,c):$(h.slice(b,itms.total).get().concat(h.slice(0,c).get())),is_function(d)&&d.call($tt0,i),i}),$cfs.bind(cf_e("isPaused",conf)+" "+cf_e("isStopped",conf)+" "+cf_e("isScrolling",conf),function(a,b){a.stopPropagation();var c=a.type.slice(conf.events.prefix.length),d=crsl[c];return is_function(b)&&b.call($tt0,d),d}),$cfs.bind(cf_e("configuration",conf),function(e,a,b,c){e.stopPropagation();var reInit=!1;if(is_function(a))a.call($tt0,opts);else if(is_object(a))opts_orig=$.extend(!0,{},opts_orig,a),b!==!1?reInit=!0:opts=$.extend(!0,{},opts,a);else if(!is_undefined(a))if(is_function(b)){var val=eval("opts."+a);is_undefined(val)&&(val=""),b.call($tt0,val)}else{if(is_undefined(b))return eval("opts."+a);"boolean"!=typeof c&&(c=!0),eval("opts_orig."+a+" = b"),c!==!1?reInit=!0:eval("opts."+a+" = b")}if(reInit){sz_resetMargin($cfs.children(),opts),FN._init(opts_orig),FN._bind_buttons();var sz=sz_setSizes($cfs,opts);$cfs.trigger(cf_e("updatePageStatus",conf),[!0,sz])}return opts}),$cfs.bind(cf_e("linkAnchors",conf),function(a,b,c){return a.stopPropagation(),is_undefined(b)?b=$("body"):is_string(b)&&(b=$(b)),is_jquery(b)&&0!=b.length?(is_string(c)||(c="a.caroufredsel"),b.find(c).each(function(){var a=this.hash||"";a.length>0&&-1!=$cfs.children().index($(a))&&$(this).unbind("click").click(function(b){b.preventDefault(),$cfs.trigger(cf_e("slideTo",conf),a)})}),!0):debug(conf,"Not a valid object.")}),$cfs.bind(cf_e("updatePageStatus",conf),function(a,b){if(a.stopPropagation(),opts.pagination.container){var d=opts.pagination.items||opts.items.visible,e=Math.ceil(itms.total/d);b&&(opts.pagination.anchorBuilder&&(opts.pagination.container.children().remove(),opts.pagination.container.each(function(){for(var a=0;e>a;a++){var b=$cfs.children().eq(gn_getItemIndex(a*d,0,!0,itms,$cfs));$(this).append(opts.pagination.anchorBuilder.call(b[0],a+1))}})),opts.pagination.container.each(function(){$(this).children().unbind(opts.pagination.event).each(function(a){$(this).bind(opts.pagination.event,function(b){b.preventDefault(),$cfs.trigger(cf_e("slideTo",conf),[a*d,-opts.pagination.deviation,!0,opts.pagination])})})}));var f=$cfs.triggerHandler(cf_e("currentPage",conf))+opts.pagination.deviation;return f>=e&&(f=0),0>f&&(f=e-1),opts.pagination.container.each(function(){$(this).children().removeClass(cf_c("selected",conf)).eq(f).addClass(cf_c("selected",conf))}),!0}}),$cfs.bind(cf_e("updateSizes",conf),function(){var b=opts.items.visible,c=$cfs.children(),d=ms_getParentSize($wrp,opts,"width");if(itms.total=c.length,crsl.primarySizePercentage?(opts.maxDimension=d,opts[opts.d.width]=ms_getPercentage(d,crsl.primarySizePercentage)):opts.maxDimension=ms_getMaxDimension(opts,d),opts.responsive?(opts.items.width=opts.items.sizesConf.width,opts.items.height=opts.items.sizesConf.height,opts=in_getResponsiveValues(opts,c,d),b=opts.items.visible,sz_setResponsiveSizes(opts,c)):opts.items.visibleConf.variable?b=gn_getVisibleItemsNext(c,opts,0):"*"!=opts.items.filter&&(b=gn_getVisibleItemsNextFilter(c,opts,0)),!opts.circular&&0!=itms.first&&b>itms.first){if(opts.items.visibleConf.variable)var e=gn_getVisibleItemsPrev(c,opts,itms.first)-itms.first;else if("*"!=opts.items.filter)var e=gn_getVisibleItemsPrevFilter(c,opts,itms.first)-itms.first;else var e=opts.items.visible-itms.first;debug(conf,"Preventing non-circular: sliding "+e+" items backward."),$cfs.trigger(cf_e("prev",conf),e)}opts.items.visible=cf_getItemsAdjust(b,opts,opts.items.visibleConf.adjust,$tt0),opts.items.visibleConf.old=opts.items.visible,opts=in_getAlignPadding(opts,c);var f=sz_setSizes($cfs,opts);return $cfs.trigger(cf_e("updatePageStatus",conf),[!0,f]),nv_showNavi(opts,itms.total,conf),nv_enableNavi(opts,itms.first,conf),f}),$cfs.bind(cf_e("destroy",conf),function(a,b){return a.stopPropagation(),tmrs=sc_clearTimers(tmrs),$cfs.data("_cfs_isCarousel",!1),$cfs.trigger(cf_e("finish",conf)),b&&$cfs.trigger(cf_e("jumpToStart",conf)),sz_restoreOrigCss($cfs.children()),sz_restoreOrigCss($cfs),FN._unbind_events(),FN._unbind_buttons(),"parent"==conf.wrapper?sz_restoreOrigCss($wrp):$wrp.replaceWith($cfs),!0}),$cfs.bind(cf_e("debug",conf),function(){return debug(conf,"Carousel width: "+opts.width),debug(conf,"Carousel height: "+opts.height),debug(conf,"Item widths: "+opts.items.width),debug(conf,"Item heights: "+opts.items.height),debug(conf,"Number of items visible: "+opts.items.visible),opts.auto.play&&debug(conf,"Number of items scrolled automatically: "+opts.auto.items),opts.prev.button&&debug(conf,"Number of items scrolled backward: "+opts.prev.items),opts.next.button&&debug(conf,"Number of items scrolled forward: "+opts.next.items),conf.debug}),$cfs.bind("_cfs_triggerEvent",function(a,b,c){return a.stopPropagation(),$cfs.triggerHandler(cf_e(b,conf),c)})},FN._unbind_events=function(){$cfs.unbind(cf_e("",conf)),$cfs.unbind(cf_e("",conf,!1)),$cfs.unbind("_cfs_triggerEvent")},FN._bind_buttons=function(){if(FN._unbind_buttons(),nv_showNavi(opts,itms.total,conf),nv_enableNavi(opts,itms.first,conf),opts.auto.pauseOnHover){var a=bt_pauseOnHoverConfig(opts.auto.pauseOnHover);$wrp.bind(cf_e("mouseenter",conf,!1),function(){$cfs.trigger(cf_e("pause",conf),a)}).bind(cf_e("mouseleave",conf,!1),function(){$cfs.trigger(cf_e("resume",conf))})}if(opts.auto.button&&opts.auto.button.bind(cf_e(opts.auto.event,conf,!1),function(a){a.preventDefault();var b=!1,c=null;crsl.isPaused?b="play":opts.auto.pauseOnEvent&&(b="pause",c=bt_pauseOnHoverConfig(opts.auto.pauseOnEvent)),b&&$cfs.trigger(cf_e(b,conf),c)}),opts.prev.button&&(opts.prev.button.bind(cf_e(opts.prev.event,conf,!1),function(a){a.preventDefault(),$cfs.trigger(cf_e("prev",conf))}),opts.prev.pauseOnHover)){var a=bt_pauseOnHoverConfig(opts.prev.pauseOnHover);opts.prev.button.bind(cf_e("mouseenter",conf,!1),function(){$cfs.trigger(cf_e("pause",conf),a)}).bind(cf_e("mouseleave",conf,!1),function(){$cfs.trigger(cf_e("resume",conf))})}if(opts.next.button&&(opts.next.button.bind(cf_e(opts.next.event,conf,!1),function(a){a.preventDefault(),$cfs.trigger(cf_e("next",conf))}),opts.next.pauseOnHover)){var a=bt_pauseOnHoverConfig(opts.next.pauseOnHover);opts.next.button.bind(cf_e("mouseenter",conf,!1),function(){$cfs.trigger(cf_e("pause",conf),a)}).bind(cf_e("mouseleave",conf,!1),function(){$cfs.trigger(cf_e("resume",conf))})}if(opts.pagination.container&&opts.pagination.pauseOnHover){var a=bt_pauseOnHoverConfig(opts.pagination.pauseOnHover);opts.pagination.container.bind(cf_e("mouseenter",conf,!1),function(){$cfs.trigger(cf_e("pause",conf),a)}).bind(cf_e("mouseleave",conf,!1),function(){$cfs.trigger(cf_e("resume",conf))})}if((opts.prev.key||opts.next.key)&&$(document).bind(cf_e("keyup",conf,!1,!0,!0),function(a){var b=a.keyCode;b==opts.next.key&&(a.preventDefault(),$cfs.trigger(cf_e("next",conf))),b==opts.prev.key&&(a.preventDefault(),$cfs.trigger(cf_e("prev",conf)))}),opts.pagination.keys&&$(document).bind(cf_e("keyup",conf,!1,!0,!0),function(a){var b=a.keyCode;b>=49&&58>b&&(b=(b-49)*opts.items.visible,itms.total>=b&&(a.preventDefault(),$cfs.trigger(cf_e("slideTo",conf),[b,0,!0,opts.pagination])))}),$.fn.swipe){var b="ontouchstart"in window;if(b&&opts.swipe.onTouch||!b&&opts.swipe.onMouse){var c=$.extend(!0,{},opts.prev,opts.swipe),d=$.extend(!0,{},opts.next,opts.swipe),e=function(){$cfs.trigger(cf_e("prev",conf),[c])},f=function(){$cfs.trigger(cf_e("next",conf),[d])};switch(opts.direction){case"up":case"down":opts.swipe.options.swipeUp=f,opts.swipe.options.swipeDown=e;break;default:opts.swipe.options.swipeLeft=f,opts.swipe.options.swipeRight=e}crsl.swipe&&$cfs.swipe("destroy"),$wrp.swipe(opts.swipe.options),$wrp.css("cursor","move"),crsl.swipe=!0}}if($.fn.mousewheel&&opts.mousewheel){var g=$.extend(!0,{},opts.prev,opts.mousewheel),h=$.extend(!0,{},opts.next,opts.mousewheel);crsl.mousewheel&&$wrp.unbind(cf_e("mousewheel",conf,!1)),$wrp.bind(cf_e("mousewheel",conf,!1),function(a,b){a.preventDefault(),b>0?$cfs.trigger(cf_e("prev",conf),[g]):$cfs.trigger(cf_e("next",conf),[h])}),crsl.mousewheel=!0}if(opts.auto.play&&$cfs.trigger(cf_e("play",conf),opts.auto.delay),crsl.upDateOnWindowResize){var i=function(){$cfs.trigger(cf_e("finish",conf)),opts.auto.pauseOnResize&&!crsl.isPaused&&$cfs.trigger(cf_e("play",conf)),sz_resetMargin($cfs.children(),opts),$cfs.trigger(cf_e("updateSizes",conf))},j=$(window),k=null;if($.debounce&&"debounce"==conf.onWindowResize)k=$.debounce(200,i);else if($.throttle&&"throttle"==conf.onWindowResize)k=$.throttle(300,i);else{var l=0,m=0;k=function(){var a=j.width(),b=j.height();(a!=l||b!=m)&&(i(),l=a,m=b)}}j.bind(cf_e("resize",conf,!1,!0,!0),k)}},FN._unbind_buttons=function(){var b=(cf_e("",conf),cf_e("",conf,!1));ns3=cf_e("",conf,!1,!0,!0),$(document).unbind(ns3),$(window).unbind(ns3),$wrp.unbind(b),opts.auto.button&&opts.auto.button.unbind(b),opts.prev.button&&opts.prev.button.unbind(b),opts.next.button&&opts.next.button.unbind(b),opts.pagination.container&&(opts.pagination.container.unbind(b),opts.pagination.anchorBuilder&&opts.pagination.container.children().remove()),crsl.swipe&&($cfs.swipe("destroy"),$wrp.css("cursor","default"),crsl.swipe=!1),crsl.mousewheel&&(crsl.mousewheel=!1),nv_showNavi(opts,"hide",conf),nv_enableNavi(opts,"removeClass",conf)},is_boolean(configs)&&(configs={debug:configs});var crsl={direction:"next",isPaused:!0,isScrolling:!1,isStopped:!1,mousewheel:!1,swipe:!1},itms={total:$cfs.children().length,first:0},tmrs={auto:null,progress:null,startTime:getTime(),timePassed:0},scrl={isStopped:!1,duration:0,startTime:0,easing:"",anims:[]},clbk={onBefore:[],onAfter:[]},queu=[],conf=$.extend(!0,{},$.fn.carouFredSel.configs,configs),opts={},opts_orig=$.extend(!0,{},options),$wrp="parent"==conf.wrapper?$cfs.parent():$cfs.wrap("<"+conf.wrapper.element+' class="'+conf.wrapper.classname+'" />').parent();if(conf.selector=$cfs.selector,conf.serialNumber=$.fn.carouFredSel.serialNumber++,conf.transition=conf.transition&&$.fn.transition?"transition":"animate",FN._init(opts_orig,!0,starting_position),FN._build(),FN._bind_events(),FN._bind_buttons(),is_array(opts.items.start))var start_arr=opts.items.start;else{var start_arr=[];0!=opts.items.start&&start_arr.push(opts.items.start)}if(opts.cookie&&start_arr.unshift(parseInt(cf_getCookie(opts.cookie),10)),start_arr.length>0)for(var a=0,l=start_arr.length;l>a;a++){var s=start_arr[a];if(0!=s){if(s===!0){if(s=window.location.hash,1>s.length)continue}else"random"===s&&(s=Math.floor(Math.random()*itms.total));if($cfs.triggerHandler(cf_e("slideTo",conf),[s,0,!0,{fx:"none"}]))break}}var siz=sz_setSizes($cfs,opts),itm=gi_getCurrentItems($cfs.children(),opts);return opts.onCreate&&opts.onCreate.call($tt0,{width:siz.width,height:siz.height,items:itm}),$cfs.trigger(cf_e("updatePageStatus",conf),[!0,siz]),$cfs.trigger(cf_e("linkAnchors",conf)),conf.debug&&$cfs.trigger(cf_e("debug",conf)),$cfs},$.fn.carouFredSel.serialNumber=1,$.fn.carouFredSel.defaults={synchronise:!1,infinite:!0,circular:!0,responsive:!1,direction:"left",items:{start:0},scroll:{easing:"swing",duration:500,pauseOnHover:!1,event:"click",queue:!1}},$.fn.carouFredSel.configs={debug:!1,transition:!1,onWindowResize:"throttle",events:{prefix:"",namespace:"cfs"},wrapper:{element:"div",classname:"caroufredsel_wrapper"},classnames:{}},$.fn.carouFredSel.pageAnchorBuilder=function(a){return'<a href="#"><span>'+a+"</span></a>"},$.fn.carouFredSel.progressbarUpdater=function(a){$(this).css("width",a+"%")},$.fn.carouFredSel.cookie={get:function(a){a+="=";for(var b=document.cookie.split(";"),c=0,d=b.length;d>c;c++){for(var e=b[c];" "==e.charAt(0);)e=e.slice(1);if(0==e.indexOf(a))return e.slice(a.length)}return 0},set:function(a,b,c){var d="";if(c){var e=new Date;e.setTime(e.getTime()+1e3*60*60*24*c),d="; expires="+e.toGMTString()}document.cookie=a+"="+b+d+"; path=/"},remove:function(a){$.fn.carouFredSel.cookie.set(a,"",-1)}},$.extend($.easing,{quadratic:function(a){var b=a*a;return a*(-b*a+4*b-6*a+4)},cubic:function(a){return a*(4*a*a-9*a+6)},elastic:function(a){var b=a*a;return a*(33*b*b-106*b*a+126*b-67*a+15)}}))})(jQuery);
!function(){"use strict";var p,e;function c(t){this.time=t.time,this.target=t.target,this.rootBounds=t.rootBounds,this.boundingClientRect=t.boundingClientRect,this.intersectionRect=t.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0},this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,t=e.width*e.height,e=this.intersectionRect,e=e.width*e.height;this.intersectionRatio=t?Number((e/t).toFixed(4)):this.isIntersecting?1:0}function t(t,e){var n,o,i,e=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(e.root&&1!=e.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=(n=this._checkForIntersections.bind(this),o=this.THROTTLE_TIMEOUT,i=null,function(){i=i||setTimeout(function(){n(),i=null},o)}),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(e.rootMargin),this.thresholds=this._initThresholds(e.threshold),this.root=e.root||null,this.rootMargin=this._rootMarginValues.map(function(t){return t.value+t.unit}).join(" ")}function n(t,e,n,o){"function"==typeof t.addEventListener?t.addEventListener(e,n,o||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,n)}function o(t,e,n,o){"function"==typeof t.removeEventListener?t.removeEventListener(e,n,o||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,n)}function g(t){var e;try{e=t.getBoundingClientRect()}catch(t){}return e?e=!e.width||!e.height?{top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}:e:{top:0,bottom:0,left:0,right:0,width:0,height:0}}function i(t,e){for(var n=e;n;){if(n==t)return!0;n=f(n)}return!1}function f(t){var t=t.parentNode;return t&&11==t.nodeType&&t.host?t.host:t&&t.assignedSlot?t.assignedSlot.parentNode:t}"object"==typeof window&&("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype?"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return 0<this.intersectionRatio}}):(p=window.document,e=[],t.prototype.THROTTLE_TIMEOUT=100,t.prototype.POLL_INTERVAL=null,t.prototype.USE_MUTATION_OBSERVER=!0,t.prototype.observe=function(e){if(!this._observationTargets.some(function(t){return t.element==e})){if(!e||1!=e.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:e,entry:null}),this._monitorIntersections(),this._checkForIntersections()}},t.prototype.unobserve=function(e){this._observationTargets=this._observationTargets.filter(function(t){return t.element!=e}),this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())},t.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorIntersections(),this._unregisterInstance()},t.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},t.prototype._initThresholds=function(t){var t=t||[0];return(t=!Array.isArray(t)?[t]:t).sort().filter(function(t,e,n){if("number"!=typeof t||isNaN(t)||t<0||1<t)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==n[e-1]})},t.prototype._parseRootMargin=function(t){var t=(t||"0px").split(/\s+/).map(function(t){var t=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!t)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(t[1]),unit:t[2]}});return t[1]=t[1]||t[0],t[2]=t[2]||t[0],t[3]=t[3]||t[1],t},t.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(n(window,"resize",this._checkForIntersections,!0),n(p,"scroll",this._checkForIntersections,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in window&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(p,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))},t.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,o(window,"resize",this._checkForIntersections,!0),o(p,"scroll",this._checkForIntersections,!0),this._domObserver&&(this._domObserver.disconnect(),this._domObserver=null))},t.prototype._checkForIntersections=function(){var s=this._rootIsInDom(),h=s?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach(function(t){var e=t.element,n=g(e),o=this._rootContainsTarget(e),i=t.entry,r=s&&o&&this._computeTargetAndRootIntersection(e,h),r=t.entry=new c({time:window.performance&&performance.now&&performance.now(),target:e,boundingClientRect:n,rootBounds:h,intersectionRect:r});i?s&&o?this._hasCrossedThreshold(i,r)&&this._queuedEntries.push(r):i&&i.isIntersecting&&this._queuedEntries.push(r):this._queuedEntries.push(r)},this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)},t.prototype._computeTargetAndRootIntersection=function(t,e){if("none"!=window.getComputedStyle(t).display){for(var n,o,i,r,s,h,c,a,u=g(t),d=f(t),l=!1;!l;){var a=null,c=1==d.nodeType?window.getComputedStyle(d):{};if("none"==c.display)return;if(d==this.root||d==p?(l=!0,a=e):d!=p.body&&d!=p.documentElement&&"visible"!=c.overflow&&(a=g(d)),a&&(n=a,o=u,a=c=h=s=r=i=void 0,i=Math.max(n.top,o.top),r=Math.min(n.bottom,o.bottom),s=Math.max(n.left,o.left),a=r-i,!(u=0<=(c=(h=Math.min(n.right,o.right))-s)&&0<=a&&{top:i,bottom:r,left:s,right:h,width:c,height:a})))break;d=f(d)}return u}},t.prototype._getRootRect=function(){var t,e,t,t;return t=this.root?g(this.root):(e=p.documentElement,t=p.body,{top:0,left:0,right:e.clientWidth||t.clientWidth,width:e.clientWidth||t.clientWidth,bottom:e.clientHeight||t.clientHeight,height:e.clientHeight||t.clientHeight}),this._expandRectByRootMargin(t)},t.prototype._expandRectByRootMargin=function(n){var t=this._rootMarginValues.map(function(t,e){return"px"==t.unit?t.value:t.value*(e%2?n.width:n.height)/100}),t={top:n.top-t[0],right:n.right+t[1],bottom:n.bottom+t[2],left:n.left-t[3]};return t.width=t.right-t.left,t.height=t.bottom-t.top,t},t.prototype._hasCrossedThreshold=function(t,e){var n=t&&t.isIntersecting?t.intersectionRatio||0:-1,o=e.isIntersecting?e.intersectionRatio||0:-1;if(n!==o)for(var i=0;i<this.thresholds.length;i++){var r=this.thresholds[i];if(r==n||r==o||r<n!=r<o)return!0}},t.prototype._rootIsInDom=function(){return!this.root||i(p,this.root)},t.prototype._rootContainsTarget=function(t){return i(this.root||p,t)},t.prototype._registerInstance=function(){e.indexOf(this)<0&&e.push(this)},t.prototype._unregisterInstance=function(){var t=e.indexOf(this);-1!=t&&e.splice(t,1)},window.IntersectionObserver=t,window.IntersectionObserverEntry=c))}();
/*!
 * Flickity PACKAGED v2.1.2
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2018 Metafizzy
 */

/**
 * Bridget makes jQuery widgets
 * v2.0.1
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /* globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'jquery-bridget/jquery-bridget',[ 'jquery' ], function( jQuery ) {
      return factory( window, jQuery );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('jquery')
    );
  } else {
    // browser global
    window.jQueryBridget = factory(
      window,
      window.jQuery
    );
  }

}( window, function factory( window, jQuery ) {
'use strict';

// ----- utils ----- //

var arraySlice = Array.prototype.slice;

// helper function for logging errors
// $.error breaks jQuery chaining
var console = window.console;
var logError = typeof console == 'undefined' ? function() {} :
  function( message ) {
    console.error( message );
  };

// ----- jQueryBridget ----- //

function jQueryBridget( namespace, PluginClass, $ ) {
  $ = $ || jQuery || window.jQuery;
  if ( !$ ) {
    return;
  }

  // add option method -> $().plugin('option', {...})
  if ( !PluginClass.prototype.option ) {
    // option setter
    PluginClass.prototype.option = function( opts ) {
      // bail out if not an object
      if ( !$.isPlainObject( opts ) ){
        return;
      }
      this.options = $.extend( true, this.options, opts );
    };
  }

  // make jQuery plugin
  $.fn[ namespace ] = function( arg0 /*, arg1 */ ) {
    if ( typeof arg0 == 'string' ) {
      // method call $().plugin( 'methodName', { options } )
      // shift arguments by 1
      var args = arraySlice.call( arguments, 1 );
      return methodCall( this, arg0, args );
    }
    // just $().plugin({ options })
    plainCall( this, arg0 );
    return this;
  };

  // $().plugin('methodName')
  function methodCall( $elems, methodName, args ) {
    var returnValue;
    var pluginMethodStr = '$().' + namespace + '("' + methodName + '")';

    $elems.each( function( i, elem ) {
      // get instance
      var instance = $.data( elem, namespace );
      if ( !instance ) {
        logError( namespace + ' not initialized. Cannot call methods, i.e. ' +
          pluginMethodStr );
        return;
      }

      var method = instance[ methodName ];
      if ( !method || methodName.charAt(0) == '_' ) {
        logError( pluginMethodStr + ' is not a valid method' );
        return;
      }

      // apply method, get return value
      var value = method.apply( instance, args );
      // set return value if value is returned, use only first value
      returnValue = returnValue === undefined ? value : returnValue;
    });

    return returnValue !== undefined ? returnValue : $elems;
  }

  function plainCall( $elems, options ) {
    $elems.each( function( i, elem ) {
      var instance = $.data( elem, namespace );
      if ( instance ) {
        // set options & init
        instance.option( options );
        instance._init();
      } else {
        // initialize new instance
        instance = new PluginClass( elem, options );
        $.data( elem, namespace, instance );
      }
    });
  }

  updateJQuery( $ );

}

// ----- updateJQuery ----- //

// set $.bridget for v1 backwards compatibility
function updateJQuery( $ ) {
  if ( !$ || ( $ && $.bridget ) ) {
    return;
  }
  $.bridget = jQueryBridget;
}

updateJQuery( jQuery || window.jQuery );

// -----  ----- //

return jQueryBridget;

}));

/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

( function( global, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, window */
  if ( typeof define == 'function' && define.amd ) {
    // AMD - RequireJS
    define( 'ev-emitter/ev-emitter',factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory();
  } else {
    // Browser globals
    global.EvEmitter = factory();
  }

}( typeof window != 'undefined' ? window : this, function() {



function EvEmitter() {}

var proto = EvEmitter.prototype;

proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // set events hash
  var events = this._events = this._events || {};
  // set listeners array
  var listeners = events[ eventName ] = events[ eventName ] || [];
  // only add once
  if ( listeners.indexOf( listener ) == -1 ) {
    listeners.push( listener );
  }

  return this;
};

proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // add event
  this.on( eventName, listener );
  // set once flag
  // set onceEvents hash
  var onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners object
  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  // set flag
  onceListeners[ listener ] = true;

  return this;
};

proto.off = function( eventName, listener ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }

  return this;
};

proto.emitEvent = function( eventName, args ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  // copy over to avoid interference if .off() in listener
  listeners = listeners.slice(0);
  args = args || [];
  // once stuff
  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  for ( var i=0; i < listeners.length; i++ ) {
    var listener = listeners[i]
    var isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      // remove listener
      // remove before trigger to prevent recursion
      this.off( eventName, listener );
      // unset once flag
      delete onceListeners[ listener ];
    }
    // trigger listener
    listener.apply( this, args );
  }

  return this;
};

proto.allOff = function() {
  delete this._events;
  delete this._onceEvents;
};

return EvEmitter;

}));

/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */
/* globals console: false */

( function( window, factory ) {
  /* jshint strict: false */ /* globals define, module */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'get-size/get-size',factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.getSize = factory();
  }

})( window, function factory() {
'use strict';

// -------------------------- helpers -------------------------- //

// get a number from a string, not a percentage
function getStyleSize( value ) {
  var num = parseFloat( value );
  // not a percent like '100%', and a number
  var isValid = value.indexOf('%') == -1 && !isNaN( num );
  return isValid && num;
}

function noop() {}

var logError = typeof console == 'undefined' ? noop :
  function( message ) {
    console.error( message );
  };

// -------------------------- measurements -------------------------- //

var measurements = [
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
  'borderLeftWidth',
  'borderRightWidth',
  'borderTopWidth',
  'borderBottomWidth'
];

var measurementsLength = measurements.length;

function getZeroSize() {
  var size = {
    width: 0,
    height: 0,
    innerWidth: 0,
    innerHeight: 0,
    outerWidth: 0,
    outerHeight: 0
  };
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    size[ measurement ] = 0;
  }
  return size;
}

// -------------------------- getStyle -------------------------- //

/**
 * getStyle, get style of element, check for Firefox bug
 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */
function getStyle( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    logError( 'Style returned ' + style +
      '. Are you running this code in a hidden iframe on Firefox? ' +
      'See https://bit.ly/getsizebug1' );
  }
  return style;
}

// -------------------------- setup -------------------------- //

var isSetup = false;

var isBoxSizeOuter;

/**
 * setup
 * check isBoxSizerOuter
 * do on first getSize() rather than on page load for Firefox bug
 */
function setup() {
  // setup once
  if ( isSetup ) {
    return;
  }
  isSetup = true;

  // -------------------------- box sizing -------------------------- //

  /**
   * Chrome & Safari measure the outer-width on style.width on border-box elems
   * IE11 & Firefox<29 measures the inner-width
   */
  var div = document.createElement('div');
  div.style.width = '200px';
  div.style.padding = '1px 2px 3px 4px';
  div.style.borderStyle = 'solid';
  div.style.borderWidth = '1px 2px 3px 4px';
  div.style.boxSizing = 'border-box';

  var body = document.body || document.documentElement;
  body.appendChild( div );
  var style = getStyle( div );
  // round value for browser zoom. desandro/masonry#928
  isBoxSizeOuter = Math.round( getStyleSize( style.width ) ) == 200;
  getSize.isBoxSizeOuter = isBoxSizeOuter;

  body.removeChild( div );
}

// -------------------------- getSize -------------------------- //

function getSize( elem ) {
  setup();

  // use querySeletor if elem is string
  if ( typeof elem == 'string' ) {
    elem = document.querySelector( elem );
  }

  // do not proceed on non-objects
  if ( !elem || typeof elem != 'object' || !elem.nodeType ) {
    return;
  }

  var style = getStyle( elem );

  // if hidden, everything is 0
  if ( style.display == 'none' ) {
    return getZeroSize();
  }

  var size = {};
  size.width = elem.offsetWidth;
  size.height = elem.offsetHeight;

  var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';

  // get all measurements
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    var value = style[ measurement ];
    var num = parseFloat( value );
    // any 'auto', 'medium' value will be 0
    size[ measurement ] = !isNaN( num ) ? num : 0;
  }

  var paddingWidth = size.paddingLeft + size.paddingRight;
  var paddingHeight = size.paddingTop + size.paddingBottom;
  var marginWidth = size.marginLeft + size.marginRight;
  var marginHeight = size.marginTop + size.marginBottom;
  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
  var borderHeight = size.borderTopWidth + size.borderBottomWidth;

  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

  // overwrite width and height if we can get it from style
  var styleWidth = getStyleSize( style.width );
  if ( styleWidth !== false ) {
    size.width = styleWidth +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
  }

  var styleHeight = getStyleSize( style.height );
  if ( styleHeight !== false ) {
    size.height = styleHeight +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
  }

  size.innerWidth = size.width - ( paddingWidth + borderWidth );
  size.innerHeight = size.height - ( paddingHeight + borderHeight );

  size.outerWidth = size.width + marginWidth;
  size.outerHeight = size.height + marginHeight;

  return size;
}

return getSize;

});

/**
 * matchesSelector v2.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  /*global define: false, module: false */
  'use strict';
  // universal module definition
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'desandro-matches-selector/matches-selector',factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.matchesSelector = factory();
  }

}( window, function factory() {
  'use strict';

  var matchesMethod = ( function() {
    var ElemProto = window.Element.prototype;
    // check for the standard method name first
    if ( ElemProto.matches ) {
      return 'matches';
    }
    // check un-prefixed
    if ( ElemProto.matchesSelector ) {
      return 'matchesSelector';
    }
    // check vendor prefixes
    var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];

    for ( var i=0; i < prefixes.length; i++ ) {
      var prefix = prefixes[i];
      var method = prefix + 'MatchesSelector';
      if ( ElemProto[ method ] ) {
        return method;
      }
    }
  })();

  return function matchesSelector( elem, selector ) {
    return elem[ matchesMethod ]( selector );
  };

}));

/**
 * Fizzy UI utils v2.0.7
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'fizzy-ui-utils/utils',[
      'desandro-matches-selector/matches-selector'
    ], function( matchesSelector ) {
      return factory( window, matchesSelector );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('desandro-matches-selector')
    );
  } else {
    // browser global
    window.fizzyUIUtils = factory(
      window,
      window.matchesSelector
    );
  }

}( window, function factory( window, matchesSelector ) {



var utils = {};

// ----- extend ----- //

// extends objects
utils.extend = function( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
};

// ----- modulo ----- //

utils.modulo = function( num, div ) {
  return ( ( num % div ) + div ) % div;
};

// ----- makeArray ----- //

var arraySlice = Array.prototype.slice;

// turn element or nodeList into an array
utils.makeArray = function( obj ) {
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    return obj;
  }
  // return empty array if undefined or null. #6
  if ( obj === null || obj === undefined ) {
    return [];
  }

  var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
  if ( isArrayLike ) {
    // convert nodeList to array
    return arraySlice.call( obj );
  }

  // array of single index
  return [ obj ];
};

// ----- removeFrom ----- //

utils.removeFrom = function( ary, obj ) {
  var index = ary.indexOf( obj );
  if ( index != -1 ) {
    ary.splice( index, 1 );
  }
};

// ----- getParent ----- //

utils.getParent = function( elem, selector ) {
  while ( elem.parentNode && elem != document.body ) {
    elem = elem.parentNode;
    if ( matchesSelector( elem, selector ) ) {
      return elem;
    }
  }
};

// ----- getQueryElement ----- //

// use element as selector string
utils.getQueryElement = function( elem ) {
  if ( typeof elem == 'string' ) {
    return document.querySelector( elem );
  }
  return elem;
};

// ----- handleEvent ----- //

// enable .ontype to trigger from .addEventListener( elem, 'type' )
utils.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

// ----- filterFindElements ----- //

utils.filterFindElements = function( elems, selector ) {
  // make array of elems
  elems = utils.makeArray( elems );
  var ffElems = [];

  elems.forEach( function( elem ) {
    // check that elem is an actual element
    if ( !( elem instanceof HTMLElement ) ) {
      /*nectar addition*/
      if(jQuery('body.compose-mode').length == 0) {
        return;
      }
      /*nectar addition end*/
    }
    // add elem if no selector
    if ( !selector ) {
      ffElems.push( elem );
      return;
    }
    // filter & find items if we have a selector
    // filter
    if ( matchesSelector( elem, selector ) ) {
      ffElems.push( elem );
    }
    // find children
    var childElems = elem.querySelectorAll( selector );
    // concat childElems to filterFound array
    for ( var i=0; i < childElems.length; i++ ) {
      ffElems.push( childElems[i] );
    }
  });

  return ffElems;
};

// ----- debounceMethod ----- //

utils.debounceMethod = function( _class, methodName, threshold ) {
  threshold = threshold || 100;
  // original method
  var method = _class.prototype[ methodName ];
  var timeoutName = methodName + 'Timeout';

  _class.prototype[ methodName ] = function() {
    var timeout = this[ timeoutName ];
    clearTimeout( timeout );

    var args = arguments;
    var _this = this;
    this[ timeoutName ] = setTimeout( function() {
      method.apply( _this, args );
      delete _this[ timeoutName ];
    }, threshold );
  };
};

// ----- docReady ----- //

utils.docReady = function( callback ) {
  var readyState = document.readyState;
  if ( readyState == 'complete' || readyState == 'interactive' ) {
    // do async to allow for other scripts to run. metafizzy/flickity#441
    setTimeout( callback );
  } else {
    document.addEventListener( 'DOMContentLoaded', callback );
  }
};

// ----- htmlInit ----- //

// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
utils.toDashed = function( str ) {
  return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
    return $1 + '-' + $2;
  }).toLowerCase();
};

var console = window.console;
/**
 * allow user to initialize classes via [data-namespace] or .js-namespace class
 * htmlInit( Widget, 'widgetName' )
 * options are parsed from data-namespace-options
 */
utils.htmlInit = function( WidgetClass, namespace ) {
  utils.docReady( function() {
    var dashedNamespace = utils.toDashed( namespace );
    var dataAttr = 'data-' + dashedNamespace;
    var dataAttrElems = document.querySelectorAll( '[' + dataAttr + ']' );
    var jsDashElems = document.querySelectorAll( '.js-' + dashedNamespace );
    var elems = utils.makeArray( dataAttrElems )
      .concat( utils.makeArray( jsDashElems ) );
    var dataOptionsAttr = dataAttr + '-options';
    var jQuery = window.jQuery;

    elems.forEach( function( elem ) {
      var attr = elem.getAttribute( dataAttr ) ||
        elem.getAttribute( dataOptionsAttr );
      var options;
      try {
        options = attr && JSON.parse( attr );
      } catch ( error ) {
        // log error, do not initialize
        if ( console ) {
          console.error( 'Error parsing ' + dataAttr + ' on ' + elem.className +
          ': ' + error );
        }
        return;
      }
      // initialize
      var instance = new WidgetClass( elem, options );
      // make available via $().data('namespace')
      if ( jQuery ) {
        jQuery.data( elem, namespace, instance );
      }
    });

  });
};

// -----  ----- //

return utils;

}));

// Flickity.Cell
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity/js/cell',[
      'get-size/get-size'
    ], function( getSize ) {
      return factory( window, getSize );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('get-size')
    );
  } else {
    // browser global
    window.Flickity = window.Flickity || {};
    window.Flickity.Cell = factory(
      window,
      window.getSize
    );
  }

}( window, function factory( window, getSize ) {



function Cell( elem, parent ) {
  this.element = elem;
  this.parent = parent;

  this.create();
}

var proto = Cell.prototype;

proto.create = function() {
  this.element.style.position = 'absolute';
  this.element.setAttribute( 'aria-selected', 'false' );
  this.x = 0;
  this.shift = 0;
};

proto.destroy = function() {
  // reset style
  this.element.style.position = '';
  var side = this.parent.originSide;
  this.element.removeAttribute('aria-selected');
  this.element.style[ side ] = '';
};

proto.getSize = function() {
  this.size = getSize( this.element );
};

proto.setPosition = function( x ) {
  this.x = x;
  this.updateTarget();
  this.renderPosition( x );
};

// setDefaultTarget v1 method, backwards compatibility, remove in v3
proto.updateTarget = proto.setDefaultTarget = function() {
  var marginProperty = this.parent.originSide == 'left' ? 'marginLeft' : 'marginRight';
  this.target = this.x + this.size[ marginProperty ] +
    this.size.width * this.parent.cellAlign;
};

proto.renderPosition = function( x ) {
  // render position of cell with in slider
  var side = this.parent.originSide;
  this.element.style[ side ] = this.parent.getPositionValue( x );
};

/**
 * @param {Integer} factor - 0, 1, or -1
**/
proto.wrapShift = function( shift ) {
  this.shift = shift;
  this.renderPosition( this.x + this.parent.slideableWidth * shift );
};

proto.remove = function() {
  this.element.parentNode.removeChild( this.element );
};

return Cell;

}));

// slide
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity/js/slide',factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.Flickity = window.Flickity || {};
    window.Flickity.Slide = factory();
  }

}( window, function factory() {
'use strict';

function Slide( parent ) {
  this.parent = parent;
  this.isOriginLeft = parent.originSide == 'left';
  this.cells = [];
  this.outerWidth = 0;
  this.height = 0;
}

var proto = Slide.prototype;

proto.addCell = function( cell ) {
  this.cells.push( cell );
  this.outerWidth += cell.size.outerWidth;
  this.height = Math.max( cell.size.outerHeight, this.height );
  // first cell stuff
  if ( this.cells.length == 1 ) {
    this.x = cell.x; // x comes from first cell
    var beginMargin = this.isOriginLeft ? 'marginLeft' : 'marginRight';
    this.firstMargin = cell.size[ beginMargin ];
  }
};

proto.updateTarget = function() {
  var endMargin = this.isOriginLeft ? 'marginRight' : 'marginLeft';
  var lastCell = this.getLastCell();
  var lastMargin = lastCell ? lastCell.size[ endMargin ] : 0;
  var slideWidth = this.outerWidth - ( this.firstMargin + lastMargin );
  this.target = this.x + this.firstMargin + slideWidth * this.parent.cellAlign;
};

proto.getLastCell = function() {
  return this.cells[ this.cells.length - 1 ];
};

proto.select = function() {
  this.changeSelected( true );
};

proto.unselect = function() {
  this.changeSelected( false );
};

proto.changeSelected = function( isSelected ) {
  var classMethod = isSelected ? 'add' : 'remove';
  this.cells.forEach( function( cell ) {
    cell.element.classList[ classMethod ]('is-selected');
    cell.element.setAttribute( 'aria-selected', isSelected.toString() );
  });
};

proto.getCellElements = function() {
  return this.cells.map( function( cell ) {
    return cell.element;
  });
};

return Slide;

}));

// animate
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity/js/animate',[
      'fizzy-ui-utils/utils'
    ], function( utils ) {
      return factory( window, utils );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('fizzy-ui-utils')
    );
  } else {
    // browser global
    window.Flickity = window.Flickity || {};
    window.Flickity.animatePrototype = factory(
      window,
      window.fizzyUIUtils
    );
  }

}( window, function factory( window, utils ) {



// -------------------------- animate -------------------------- //

var proto = {};

proto.startAnimation = function() {
  if ( this.isAnimating ) {
    return;
  }

  this.isAnimating = true;
  this.restingFrames = 0;
  this.animate();
};

proto.animate = function() {
  this.applyDragForce();
  this.applySelectedAttraction();

  var previousX = this.x;

  this.integratePhysics();
  this.positionSlider();
  this.settle( previousX );
  // animate next frame
  if ( this.isAnimating ) {
    var _this = this;
    requestAnimationFrame( function animateFrame() {
      _this.animate();
    });
  }
};

proto.positionSlider = function() {
  var x = this.x;
  // wrap position around
  if ( this.options.wrapAround && this.cells.length > 1 ) {
    x = utils.modulo( x, this.slideableWidth );
    x = x - this.slideableWidth;
    this.shiftWrapCells( x );
  }

  x = x + this.cursorPosition;
  // reverse if right-to-left and using transform
  x = this.options.rightToLeft ? -x : x;
  var value = this.getPositionValue( x );
  // use 3D tranforms for hardware acceleration on iOS
  // but use 2D when settled, for better font-rendering
  this.slider.style.transform = this.isAnimating ?
    'translate3d(' + value + ',0,0)' : 'translateX(' + value + ')';

  // scroll event
  var firstSlide = this.slides[0];
  if ( firstSlide ) {
    var positionX = -this.x - firstSlide.target;
    var progress = positionX / this.slidesWidth;
    this.dispatchEvent( 'scroll', null, [ progress, positionX ] );
  }
};

proto.positionSliderAtSelected = function() {
  if ( !this.cells.length ) {
    return;
  }
  this.x = -this.selectedSlide.target;
  this.velocity = 0; // stop wobble
  this.positionSlider();
};

proto.getPositionValue = function( position ) {
  if ( this.options.percentPosition ) {
    // percent position, round to 2 digits, like 12.34%
    return ( Math.round( ( position / this.size.innerWidth ) * 10000 ) * 0.01 )+ '%';
  } else {
    // pixel positioning
    return Math.round( position ) + 'px';
  }
};

proto.settle = function( previousX ) {
  // keep track of frames where x hasn't moved
  if ( !this.isPointerDown && Math.round( this.x * 100 ) == Math.round( previousX * 100 ) ) {
    this.restingFrames++;
  }
  // stop animating if resting for 3 or more frames
  if ( this.restingFrames > 2 ) {
    this.isAnimating = false;
    delete this.isFreeScrolling;
    // render position with translateX when settled
    this.positionSlider();
    this.dispatchEvent( 'settle', null, [ this.selectedIndex ] );
  }
};

proto.shiftWrapCells = function( x ) {
  // shift before cells
  var beforeGap = this.cursorPosition + x;
  this._shiftCells( this.beforeShiftCells, beforeGap, -1 );
  // shift after cells
  var afterGap = this.size.innerWidth - ( x + this.slideableWidth + this.cursorPosition );
  this._shiftCells( this.afterShiftCells, afterGap, 1 );
};

proto._shiftCells = function( cells, gap, shift ) {
  for ( var i=0; i < cells.length; i++ ) {
    var cell = cells[i];
    var cellShift = gap > 0 ? shift : 0;
    cell.wrapShift( cellShift );
    gap -= cell.size.outerWidth;
  }
};

proto._unshiftCells = function( cells ) {
  if ( !cells || !cells.length ) {
    return;
  }
  for ( var i=0; i < cells.length; i++ ) {
    cells[i].wrapShift( 0 );
  }
};

// -------------------------- physics -------------------------- //

proto.integratePhysics = function() {
  this.x += this.velocity;
  this.velocity *= this.getFrictionFactor();
};

proto.applyForce = function( force ) {
  this.velocity += force;
};

proto.getFrictionFactor = function() {
  return 1 - this.options[ this.isFreeScrolling ? 'freeScrollFriction' : 'friction' ];
};

proto.getRestingPosition = function() {
  // my thanks to Steven Wittens, who simplified this math greatly
  return this.x + this.velocity / ( 1 - this.getFrictionFactor() );
};

proto.applyDragForce = function() {
  if ( !this.isDraggable || !this.isPointerDown ) {
    return;
  }
  // change the position to drag position by applying force
  var dragVelocity = this.dragX - this.x;
  var dragForce = dragVelocity - this.velocity;
  this.applyForce( dragForce );
};

proto.applySelectedAttraction = function() {
  // do not attract if pointer down or no slides
  var dragDown = this.isDraggable && this.isPointerDown;
  if ( dragDown || this.isFreeScrolling || !this.slides.length ) {
    return;
  }
  var distance = this.selectedSlide.target * -1 - this.x;
  var force = distance * this.options.selectedAttraction;
  this.applyForce( force );
};

return proto;

}));

// Flickity main
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity/js/flickity',[
      'ev-emitter/ev-emitter',
      'get-size/get-size',
      'fizzy-ui-utils/utils',
      './cell',
      './slide',
      './animate'
    ], function( EvEmitter, getSize, utils, Cell, Slide, animatePrototype ) {
      return factory( window, EvEmitter, getSize, utils, Cell, Slide, animatePrototype );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('ev-emitter'),
      require('get-size'),
      require('fizzy-ui-utils'),
      require('./cell'),
      require('./slide'),
      require('./animate')
    );
  } else {
    // browser global
    var _Flickity = window.Flickity;

    window.Flickity = factory(
      window,
      window.EvEmitter,
      window.getSize,
      window.fizzyUIUtils,
      _Flickity.Cell,
      _Flickity.Slide,
      _Flickity.animatePrototype
    );
  }

}( window, function factory( window, EvEmitter, getSize,
  utils, Cell, Slide, animatePrototype ) {



// vars
var jQuery = window.jQuery;
var getComputedStyle = window.getComputedStyle;
var console = window.console;

function moveElements( elems, toElem ) {
  elems = utils.makeArray( elems );
  while ( elems.length ) {
    toElem.appendChild( elems.shift() );
  }
}

// -------------------------- Flickity -------------------------- //

// globally unique identifiers
var GUID = 0;
// internal store of all Flickity intances
var instances = {};

function Flickity( element, options ) {
  var queryElement = utils.getQueryElement( element );
  if ( !queryElement ) {
    if ( console ) {
      console.error( 'Bad element for Flickity: ' + ( queryElement || element ) );
    }
    return;
  }
  this.element = queryElement;
  // do not initialize twice on same element
  if ( this.element.flickityGUID ) {
    var instance = instances[ this.element.flickityGUID ];
    instance.option( options );
    return instance;
  }

  // add jQuery
  if ( jQuery ) {
    this.$element = jQuery( this.element );
  }
  // options
  this.options = utils.extend( {}, this.constructor.defaults );
  this.option( options );

  // kick things off
  this._create();
}

Flickity.defaults = {
  accessibility: true,
  // adaptiveHeight: false,
  cellAlign: 'center',
  // cellSelector: undefined,
  // contain: false,
  freeScrollFriction: 0.075, // friction when free-scrolling
  friction: 0.28, // friction when selecting
  namespaceJQueryEvents: true,
  // initialIndex: 0,
  percentPosition: true,
  resize: true,
  selectedAttraction: 0.025,
  setGallerySize: true
  // watchCSS: false,
  // wrapAround: false
};

// hash of methods triggered on _create()
Flickity.createMethods = [];

var proto = Flickity.prototype;
// inherit EventEmitter
utils.extend( proto, EvEmitter.prototype );

proto._create = function() {
  // add id for Flickity.data
  var id = this.guid = ++GUID;
  this.element.flickityGUID = id; // expando
  instances[ id ] = this; // associate via id
  // initial properties
  this.selectedIndex = 0;
  // how many frames slider has been in same position
  this.restingFrames = 0;
  // initial physics properties
  this.x = 0;
  this.velocity = 0;
  this.originSide = this.options.rightToLeft ? 'right' : 'left';
  // create viewport & slider
  /*nectar addition*/
  
  if(this.$element.hasClass('generate-markup')) {
    this.viewport = document.createElement('div'); 
    this.viewport.className = 'flickity-viewport'; 
  } else {
    this.viewport = this.$element.find('.flickity-viewport')[0];
    this.slider = this.$element.find('.flickity-slider')[0];
    this.viewport.className = 'flickity-viewport';
  }

  this._createSlider();

  
  /*nectar addition end*/

  if ( this.options.resize || this.options.watchCSS ) {
    window.addEventListener( 'resize', this );
  }

  // add listeners from on option
  for ( var eventName in this.options.on ) {
    var listener = this.options.on[ eventName ];
    this.on( eventName, listener );
  }

  Flickity.createMethods.forEach( function( method ) {
    this[ method ]();
  }, this );

  if ( this.options.watchCSS ) {
    this.watchCSS();
  } else {
    this.activate();
  }

};

/**
 * set options
 * @param {Object} opts
 */
proto.option = function( opts ) {
  utils.extend( this.options, opts );
};

proto.activate = function() {
  if ( this.isActive ) {
    return;
  }
  this.isActive = true;
  this.element.classList.add('flickity-enabled');
  if ( this.options.rightToLeft ) {
    this.element.classList.add('flickity-rtl');
  }

  this.getSize();
  // move initial cell elements so they can be loaded as cells
  var cellElems = this._filterFindCellElements( this.element.children );
  
  /* nectar addition */
  if(this.$element.hasClass('generate-markup')) {
    moveElements( cellElems, this.slider );
    this.viewport.appendChild( this.slider );
    this.element.appendChild( this.viewport );
  } else {
    //do nothing
  }
  /* nectar addition  end */
  
  // get cells from children
  this.reloadCells();

  if ( this.options.accessibility ) {
    // allow element to focusable
    this.element.tabIndex = 0;
    // listen for key presses
    this.element.addEventListener( 'keydown', this );
  }

  this.emitEvent('activate');

  var index;
  var initialIndex = this.options.initialIndex;
  if ( this.isInitActivated ) {
    index = this.selectedIndex;
  } else if ( initialIndex !== undefined ) {
    index = this.cells[ initialIndex ] ? initialIndex : 0;
  } else {
    index = 0;
  }
  // select instantly
  this.select( index, false, true );
  // flag for initial activation, for using initialIndex
  this.isInitActivated = true;
  // ready event. #493
  this.dispatchEvent('ready');
};

// slider positions the cells
/* nectar addition */
proto._createSlider = function() {
  if(this.$element.hasClass('generate-markup')) {
    var slider = document.createElement('div');
    slider.className = 'flickity-slider';
    slider.style[ this.originSide ] = 0;
    this.slider = slider;
  } else {
    // slider element does all the positioning
    //var slider = document.createElement('div');
    //slider.className = 'flickity-slider';
    this.slider.style[ this.originSide ] = 0;
  //  this.slider = slider;
  }
  
};
/* nectar addition end */

proto._filterFindCellElements = function( elems ) {
  return utils.filterFindElements( elems, this.options.cellSelector );
};

// goes through all children
proto.reloadCells = function() {
  /* nectar addition */
  
  if(jQuery(this.slider).parent().parent().find('.flickity-page-dots').length > 0) {
    var $that = this;
    setTimeout(function(){
      $that.pageDots.setDots();
    },100);
  }
  var slidesArr = [];
  jQuery(this.slider).find('> *').each(function(i){
    slidesArr[i] = jQuery(this)[0];
  });
    
    
  // collection of item elements
    this.cells = this._makeCells(slidesArr);
    /* nectar addition end */
  this.positionCells();
  this._getWrapShiftCells();
  this.setGallerySize();
};

/**
 * turn elements into Flickity.Cells
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - collection of new Flickity Cells
 */
proto._makeCells = function( elems ) {
  var cellElems = this._filterFindCellElements( elems );

  // create new Flickity for collection
  var cells = cellElems.map( function( cellElem ) {
    return new Cell( cellElem, this );
  }, this );

  return cells;
};

proto.getLastCell = function() {
  return this.cells[ this.cells.length - 1 ];
};

proto.getLastSlide = function() {
  return this.slides[ this.slides.length - 1 ];
};

// positions all cells
proto.positionCells = function() {
  // size all cells
  this._sizeCells( this.cells );
  // position all cells
  this._positionCells( 0 );
};

/**
 * position certain cells
 * @param {Integer} index - which cell to start with
 */
proto._positionCells = function( index ) {
  index = index || 0;
  // also measure maxCellHeight
  // start 0 if positioning all cells
  this.maxCellHeight = index ? this.maxCellHeight || 0 : 0;
  var cellX = 0;
  // get cellX
  if ( index > 0 ) {
    var startCell = this.cells[ index - 1 ];
    cellX = startCell.x + startCell.size.outerWidth;
  }
  var len = this.cells.length;
  for ( var i=index; i < len; i++ ) {
    var cell = this.cells[i];
    cell.setPosition( cellX );
    cellX += cell.size.outerWidth;
    this.maxCellHeight = Math.max( cell.size.outerHeight, this.maxCellHeight );
  }
  // keep track of cellX for wrap-around
  this.slideableWidth = cellX;
  // slides
  this.updateSlides();
  // contain slides target
  this._containSlides();
  // update slidesWidth
  this.slidesWidth = len ? this.getLastSlide().target - this.slides[0].target : 0;
};

/**
 * cell.getSize() on multiple cells
 * @param {Array} cells
 */
proto._sizeCells = function( cells ) {
  cells.forEach( function( cell ) {
    cell.getSize();
  });
};

// --------------------------  -------------------------- //

proto.updateSlides = function() {
  this.slides = [];
  if ( !this.cells.length ) {
    return;
  }

  var slide = new Slide( this );
  this.slides.push( slide );
  var isOriginLeft = this.originSide == 'left';
  var nextMargin = isOriginLeft ? 'marginRight' : 'marginLeft';

  var canCellFit = this._getCanCellFit();

  this.cells.forEach( function( cell, i ) {
    // just add cell if first cell in slide
    if ( !slide.cells.length ) {
      slide.addCell( cell );
      return;
    }

    var slideWidth = ( slide.outerWidth - slide.firstMargin ) +
      ( cell.size.outerWidth - cell.size[ nextMargin ] );

    if ( canCellFit.call( this, i, slideWidth ) ) {
      slide.addCell( cell );
    } else {
      // doesn't fit, new slide
      slide.updateTarget();

      slide = new Slide( this );
      this.slides.push( slide );
      slide.addCell( cell );
    }
  }, this );
  // last slide
  slide.updateTarget();
  // update .selectedSlide
  this.updateSelectedSlide();
};

proto._getCanCellFit = function() {
  var groupCells = this.options.groupCells;
  if ( !groupCells ) {
    return function() {
      return false;
    };
  } else if ( typeof groupCells == 'number' ) {
    // group by number. 3 -> [0,1,2], [3,4,5], ...
    var number = parseInt( groupCells, 10 );
    return function( i ) {
      return ( i % number ) !== 0;
    };
  }
  // default, group by width of slide
  // parse '75%
  var percentMatch = typeof groupCells == 'string' &&
    groupCells.match(/^(\d+)%$/);
  var percent = percentMatch ? parseInt( percentMatch[1], 10 ) / 100 : 1;
  return function( i, slideWidth ) {
    return slideWidth <= ( this.size.innerWidth + 1 ) * percent;
  };
};

// alias _init for jQuery plugin .flickity()
proto._init =
proto.reposition = function() {
  this.positionCells();
  this.positionSliderAtSelected();
};

proto.getSize = function() {
  this.size = getSize( this.element );
  this.setCellAlign();
  this.cursorPosition = this.size.innerWidth * this.cellAlign;
};

var cellAlignShorthands = {
  // cell align, then based on origin side
  center: {
    left: 0.5,
    right: 0.5
  },
  left: {
    left: 0,
    right: 1
  },
  right: {
    right: 0,
    left: 1
  }
};

proto.setCellAlign = function() {
  var shorthand = cellAlignShorthands[ this.options.cellAlign ];
  this.cellAlign = shorthand ? shorthand[ this.originSide ] : this.options.cellAlign;
};

proto.setGallerySize = function() {
  if ( this.options.setGallerySize ) {
    var height = this.options.adaptiveHeight && this.selectedSlide ?
      this.selectedSlide.height : this.maxCellHeight;
    this.viewport.style.height = height + 'px';
  }
};

proto._getWrapShiftCells = function() {
  // only for wrap-around
  if ( !this.options.wrapAround ) {
    return;
  }
  // unshift previous cells
  this._unshiftCells( this.beforeShiftCells );
  this._unshiftCells( this.afterShiftCells );
  // get before cells
  // initial gap
  var gapX = this.cursorPosition;
  var cellIndex = this.cells.length - 1;
  this.beforeShiftCells = this._getGapCells( gapX, cellIndex, -1 );
  // get after cells
  // ending gap between last cell and end of gallery viewport
  gapX = this.size.innerWidth - this.cursorPosition;
  // start cloning at first cell, working forwards
  this.afterShiftCells = this._getGapCells( gapX, 0, 1 );
};

proto._getGapCells = function( gapX, cellIndex, increment ) {
  // keep adding cells until the cover the initial gap
  var cells = [];
  while ( gapX > 0 ) {
    var cell = this.cells[ cellIndex ];
    if ( !cell ) {
      break;
    }
    cells.push( cell );
    cellIndex += increment;
    gapX -= cell.size.outerWidth;
  }
  return cells;
};

// ----- contain ----- //

// contain cell targets so no excess sliding
proto._containSlides = function() {
  if ( !this.options.contain || this.options.wrapAround || !this.cells.length ) {
    return;
  }
  var isRightToLeft = this.options.rightToLeft;
  var beginMargin = isRightToLeft ? 'marginRight' : 'marginLeft';
  var endMargin = isRightToLeft ? 'marginLeft' : 'marginRight';
  var contentWidth = this.slideableWidth - this.getLastCell().size[ endMargin ];
  // content is less than gallery size
  var isContentSmaller = contentWidth < this.size.innerWidth;
  // bounds
  var beginBound = this.cursorPosition + this.cells[0].size[ beginMargin ];
  var endBound = contentWidth - this.size.innerWidth * ( 1 - this.cellAlign );
  // contain each cell target
  this.slides.forEach( function( slide ) {
    if ( isContentSmaller ) {
      // all cells fit inside gallery
      slide.target = contentWidth * this.cellAlign;
    } else {
      // contain to bounds
      slide.target = Math.max( slide.target, beginBound );
      slide.target = Math.min( slide.target, endBound );
    }
  }, this );
};

// -----  ----- //

/**
 * emits events via eventEmitter and jQuery events
 * @param {String} type - name of event
 * @param {Event} event - original event
 * @param {Array} args - extra arguments
 */
proto.dispatchEvent = function( type, event, args ) {
  var emitArgs = event ? [ event ].concat( args ) : args;
  this.emitEvent( type, emitArgs );

  if ( jQuery && this.$element ) {
    // default trigger with type if no event
    type += this.options.namespaceJQueryEvents ? '.flickity' : '';
    var $event = type;
    if ( event ) {
      // create jQuery event
      var jQEvent = jQuery.Event( event );
      jQEvent.type = type;
      $event = jQEvent;
    }
    this.$element.trigger( $event, args );
  }
};

// -------------------------- select -------------------------- //

/**
 * @param {Integer} index - index of the slide
 * @param {Boolean} isWrap - will wrap-around to last/first if at the end
 * @param {Boolean} isInstant - will immediately set position at selected cell
 */
proto.select = function( index, isWrap, isInstant ) {
  if ( !this.isActive ) {
    return;
  }
  index = parseInt( index, 10 );
  this._wrapSelect( index );

  if ( this.options.wrapAround || isWrap ) {
    index = utils.modulo( index, this.slides.length );
  }
  // bail if invalid index
  if ( !this.slides[ index ] ) {
    return;
  }
  var prevIndex = this.selectedIndex;
  this.selectedIndex = index;
  this.updateSelectedSlide();
  if ( isInstant ) {
    this.positionSliderAtSelected();
  } else {
    this.startAnimation();
  }
  if ( this.options.adaptiveHeight ) {
    this.setGallerySize();
  }
  // events
  this.dispatchEvent( 'select', null, [ index ] );
  // change event if new index
  if ( index != prevIndex ) {
    this.dispatchEvent( 'change', null, [ index ] );
  }
  // old v1 event name, remove in v3
  this.dispatchEvent('cellSelect');
};

// wraps position for wrapAround, to move to closest slide. #113
proto._wrapSelect = function( index ) {
  var len = this.slides.length;
  var isWrapping = this.options.wrapAround && len > 1;
  if ( !isWrapping ) {
    return index;
  }
  var wrapIndex = utils.modulo( index, len );
  // go to shortest
  var delta = Math.abs( wrapIndex - this.selectedIndex );
  var backWrapDelta = Math.abs( ( wrapIndex + len ) - this.selectedIndex );
  var forewardWrapDelta = Math.abs( ( wrapIndex - len ) - this.selectedIndex );
  if ( !this.isDragSelect && backWrapDelta < delta ) {
    index += len;
  } else if ( !this.isDragSelect && forewardWrapDelta < delta ) {
    index -= len;
  }
  // wrap position so slider is within normal area
  if ( index < 0 ) {
    this.x -= this.slideableWidth;
  } else if ( index >= len ) {
    this.x += this.slideableWidth;
  }
};

proto.previous = function( isWrap, isInstant ) {
  this.select( this.selectedIndex - 1, isWrap, isInstant );
};

proto.next = function( isWrap, isInstant ) {
  this.select( this.selectedIndex + 1, isWrap, isInstant );
};

proto.updateSelectedSlide = function() {
  var slide = this.slides[ this.selectedIndex ];
  // selectedIndex could be outside of slides, if triggered before resize()
  if ( !slide ) {
    return;
  }
  // unselect previous selected slide
  this.unselectSelectedSlide();
  // update new selected slide
  this.selectedSlide = slide;
  slide.select();
  this.selectedCells = slide.cells;
  this.selectedElements = slide.getCellElements();
  // HACK: selectedCell & selectedElement is first cell in slide, backwards compatibility
  // Remove in v3?
  this.selectedCell = slide.cells[0];
  this.selectedElement = this.selectedElements[0];
};

proto.unselectSelectedSlide = function() {
  if ( this.selectedSlide ) {
    this.selectedSlide.unselect();
  }
};

/**
 * select slide from number or cell element
 * @param {Element or Number} elem
 */
proto.selectCell = function( value, isWrap, isInstant ) {
  // get cell
  var cell = this.queryCell( value );
  if ( !cell ) {
    return;
  }

  var index = this.getCellSlideIndex( cell );
  this.select( index, isWrap, isInstant );
};

proto.getCellSlideIndex = function( cell ) {
  // get index of slides that has cell
  for ( var i=0; i < this.slides.length; i++ ) {
    var slide = this.slides[i];
    var index = slide.cells.indexOf( cell );
    if ( index != -1 ) {
      return i;
    }
  }
};

// -------------------------- get cells -------------------------- //

/**
 * get Flickity.Cell, given an Element
 * @param {Element} elem
 * @returns {Flickity.Cell} item
 */
proto.getCell = function( elem ) {
  // loop through cells to get the one that matches
  for ( var i=0; i < this.cells.length; i++ ) {
    var cell = this.cells[i];
    if ( cell.element == elem ) {
      return cell;
    }
  }
};

/**
 * get collection of Flickity.Cells, given Elements
 * @param {Element, Array, NodeList} elems
 * @returns {Array} cells - Flickity.Cells
 */
proto.getCells = function( elems ) {
  elems = utils.makeArray( elems );
  var cells = [];
  elems.forEach( function( elem ) {
    var cell = this.getCell( elem );
    if ( cell ) {
      cells.push( cell );
    }
  }, this );
  return cells;
};

/**
 * get cell elements
 * @returns {Array} cellElems
 */
proto.getCellElements = function() {
  return this.cells.map( function( cell ) {
    return cell.element;
  });
};

/**
 * get parent cell from an element
 * @param {Element} elem
 * @returns {Flickit.Cell} cell
 */
proto.getParentCell = function( elem ) {
  // first check if elem is cell
  var cell = this.getCell( elem );
  if ( cell ) {
    return cell;
  }
  // try to get parent cell elem
  elem = utils.getParent( elem, '.flickity-slider > *' );
  return this.getCell( elem );
};

/**
 * get cells adjacent to a slide
 * @param {Integer} adjCount - number of adjacent slides
 * @param {Integer} index - index of slide to start
 * @returns {Array} cells - array of Flickity.Cells
 */
proto.getAdjacentCellElements = function( adjCount, index ) {
  if ( !adjCount ) {
    return this.selectedSlide.getCellElements();
  }
  index = index === undefined ? this.selectedIndex : index;

  var len = this.slides.length;
  if ( 1 + ( adjCount * 2 ) >= len ) {
    return this.getCellElements();
  }

  var cellElems = [];
  for ( var i = index - adjCount; i <= index + adjCount ; i++ ) {
    var slideIndex = this.options.wrapAround ? utils.modulo( i, len ) : i;
    var slide = this.slides[ slideIndex ];
    if ( slide ) {
      cellElems = cellElems.concat( slide.getCellElements() );
    }
  }
  return cellElems;
};

/**
 * select slide from number or cell element
 * @param {Element, Selector String, or Number} selector
 */
proto.queryCell = function( selector ) {
  if ( typeof selector == 'number' ) {
    // use number as index
    return this.cells[ selector ];
  }
  if ( typeof selector == 'string' ) {
    // use string as selector, get element
    selector = this.element.querySelector( selector );
  }
  // get cell from element
  return this.getCell( selector );
};

// -------------------------- events -------------------------- //

proto.uiChange = function() {
  this.emitEvent('uiChange');
};

proto.childUIPointerDown = function( event ) {
  this.emitEvent( 'childUIPointerDown', [ event ] );
};

// ----- resize ----- //

proto.onresize = function() {
  this.watchCSS();
  this.resize();
};

utils.debounceMethod( Flickity, 'onresize', 150 );

proto.resize = function() {
  if ( !this.isActive ) {
    return;
  }
  this.getSize();
  // wrap values
  if ( this.options.wrapAround ) {
    this.x = utils.modulo( this.x, this.slideableWidth );
  }
  this.positionCells();
  this._getWrapShiftCells();
  this.setGallerySize();
  this.emitEvent('resize');
  // update selected index for group slides, instant
  // TODO: position can be lost between groups of various numbers
  var selectedElement = this.selectedElements && this.selectedElements[0];
  this.selectCell( selectedElement, false, true );
};

// watches the :after property, activates/deactivates
proto.watchCSS = function() {
  var watchOption = this.options.watchCSS;
  if ( !watchOption ) {
    return;
  }

  var afterContent = getComputedStyle( this.element, ':after' ).content;
  // activate if :after { content: 'flickity' }
  if ( afterContent.indexOf('flickity') != -1 ) {
    this.activate();
  } else {
    this.deactivate();
  }
};

// ----- keydown ----- //

// go previous/next if left/right keys pressed
proto.onkeydown = function( event ) {
  // only work if element is in focus
  var isNotFocused = document.activeElement && document.activeElement != this.element;
  if ( !this.options.accessibility ||isNotFocused ) {
    return;
  }

  var handler = Flickity.keyboardHandlers[ event.keyCode ];
  if ( handler ) {
    handler.call( this );
  }
};

Flickity.keyboardHandlers = {
  // left arrow
  37: function() {
    var leftMethod = this.options.rightToLeft ? 'next' : 'previous';
    this.uiChange();
    this[ leftMethod ]();
  },
  // right arrow
  39: function() {
    var rightMethod = this.options.rightToLeft ? 'previous' : 'next';
    this.uiChange();
    this[ rightMethod ]();
  },
};

// ----- focus ----- //

proto.focus = function() {
  // TODO remove scrollTo once focus options gets more support
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus#Browser_compatibility
  var prevScrollY = window.pageYOffset;
  this.element.focus({ preventScroll: true });
  // hack to fix scroll jump after focus, #76
  if ( window.pageYOffset != prevScrollY ) {
    window.scrollTo( window.pageXOffset, prevScrollY );
  }
};

// -------------------------- destroy -------------------------- //

// deactivate all Flickity functionality, but keep stuff available
proto.deactivate = function() {
  if ( !this.isActive ) {
    return;
  }
  this.element.classList.remove('flickity-enabled');
  this.element.classList.remove('flickity-rtl');
  this.unselectSelectedSlide();
  // destroy cells
  this.cells.forEach( function( cell ) {
    cell.destroy();
  });
  this.element.removeChild( this.viewport );
  // move child elements back into element
  moveElements( this.slider.children, this.element );
  if ( this.options.accessibility ) {
    this.element.removeAttribute('tabIndex');
    this.element.removeEventListener( 'keydown', this );
  }
  // set flags
  this.isActive = false;
  this.emitEvent('deactivate');
};

proto.destroy = function() {
  this.deactivate();
  window.removeEventListener( 'resize', this );
  this.emitEvent('destroy');
  if ( jQuery && this.$element ) {
    jQuery.removeData( this.element, 'flickity' );
  }
  delete this.element.flickityGUID;
  delete instances[ this.guid ];
};

// -------------------------- prototype -------------------------- //

utils.extend( proto, animatePrototype );

// -------------------------- extras -------------------------- //

/**
 * get Flickity instance from element
 * @param {Element} elem
 * @returns {Flickity}
 */
Flickity.data = function( elem ) {
  elem = utils.getQueryElement( elem );
  var id = elem && elem.flickityGUID;
  return id && instances[ id ];
};

utils.htmlInit( Flickity, 'flickity' );

if ( jQuery && jQuery.bridget ) {
  jQuery.bridget( 'flickity', Flickity );
}

// set internal jQuery, for Webpack + jQuery v3, #478
Flickity.setJQuery = function( jq ) {
  jQuery = jq;
};

Flickity.Cell = Cell;

return Flickity;

}));

/*!
 * Unipointer v2.3.0
 * base class for doing one thing with pointer event
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*global define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'unipointer/unipointer',[
      'ev-emitter/ev-emitter'
    ], function( EvEmitter ) {
      return factory( window, EvEmitter );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('ev-emitter')
    );
  } else {
    // browser global
    window.Unipointer = factory(
      window,
      window.EvEmitter
    );
  }

}( window, function factory( window, EvEmitter ) {



function noop() {}

function Unipointer() {}

// inherit EvEmitter
var proto = Unipointer.prototype = Object.create( EvEmitter.prototype );

proto.bindStartEvent = function( elem ) {
  this._bindStartEvent( elem, true );
};

proto.unbindStartEvent = function( elem ) {
  this._bindStartEvent( elem, false );
};

/**
 * Add or remove start event
 * @param {Boolean} isAdd - remove if falsey
 */
proto._bindStartEvent = function( elem, isAdd ) {
  // munge isAdd, default to true
  isAdd = isAdd === undefined ? true : isAdd;
  var bindMethod = isAdd ? 'addEventListener' : 'removeEventListener';

  // default to mouse events
  var startEvent = 'mousedown';
  if ( window.PointerEvent ) {
    // Pointer Events
    startEvent = 'pointerdown';
  } else if ( 'ontouchstart' in window ) {
    // Touch Events. iOS Safari
    startEvent = 'touchstart';
  }
  elem[ bindMethod ]( startEvent, this );
};

// trigger handler methods for events
proto.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

// returns the touch that we're keeping track of
proto.getTouch = function( touches ) {
  for ( var i=0; i < touches.length; i++ ) {
    var touch = touches[i];
    if ( touch.identifier == this.pointerIdentifier ) {
      return touch;
    }
  }
};

// ----- start event ----- //

proto.onmousedown = function( event ) {
  // dismiss clicks from right or middle buttons
  var button = event.button;
  if ( button && ( button !== 0 && button !== 1 ) ) {
    return;
  }
  this._pointerDown( event, event );
};

proto.ontouchstart = function( event ) {
  this._pointerDown( event, event.changedTouches[0] );
};

proto.onpointerdown = function( event ) {
  this._pointerDown( event, event );
};

/**
 * pointer start
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
proto._pointerDown = function( event, pointer ) {
  // dismiss right click and other pointers
  // button = 0 is okay, 1-4 not
  if ( event.button || this.isPointerDown ) {
    return;
  }

  this.isPointerDown = true;
  // save pointer identifier to match up touch events
  this.pointerIdentifier = pointer.pointerId !== undefined ?
    // pointerId for pointer events, touch.indentifier for touch events
    pointer.pointerId : pointer.identifier;

  this.pointerDown( event, pointer );
};

proto.pointerDown = function( event, pointer ) {
  this._bindPostStartEvents( event );
  this.emitEvent( 'pointerDown', [ event, pointer ] );
};

// hash of events to be bound after start event
var postStartEvents = {
  mousedown: [ 'mousemove', 'mouseup' ],
  touchstart: [ 'touchmove', 'touchend', 'touchcancel' ],
  pointerdown: [ 'pointermove', 'pointerup', 'pointercancel' ],
};

proto._bindPostStartEvents = function( event ) {
  if ( !event ) {
    return;
  }
  // get proper events to match start event
  var events = postStartEvents[ event.type ];
  // bind events to node
  events.forEach( function( eventName ) {
    window.addEventListener( eventName, this );
  }, this );
  // save these arguments
  this._boundPointerEvents = events;
};

proto._unbindPostStartEvents = function() {
  // check for _boundEvents, in case dragEnd triggered twice (old IE8 bug)
  if ( !this._boundPointerEvents ) {
    return;
  }
  this._boundPointerEvents.forEach( function( eventName ) {
    window.removeEventListener( eventName, this );
  }, this );

  delete this._boundPointerEvents;
};

// ----- move event ----- //

proto.onmousemove = function( event ) {
  this._pointerMove( event, event );
};

proto.onpointermove = function( event ) {
  if ( event.pointerId == this.pointerIdentifier ) {
    this._pointerMove( event, event );
  }
};

proto.ontouchmove = function( event ) {
  var touch = this.getTouch( event.changedTouches );
  if ( touch ) {
    this._pointerMove( event, touch );
  }
};

/**
 * pointer move
 * @param {Event} event
 * @param {Event or Touch} pointer
 * @private
 */
proto._pointerMove = function( event, pointer ) {
  this.pointerMove( event, pointer );
};

// public
proto.pointerMove = function( event, pointer ) {
  this.emitEvent( 'pointerMove', [ event, pointer ] );
};

// ----- end event ----- //


proto.onmouseup = function( event ) {
  this._pointerUp( event, event );
};

proto.onpointerup = function( event ) {
  if ( event.pointerId == this.pointerIdentifier ) {
    this._pointerUp( event, event );
  }
};

proto.ontouchend = function( event ) {
  var touch = this.getTouch( event.changedTouches );
  if ( touch ) {
    this._pointerUp( event, touch );
  }
};

/**
 * pointer up
 * @param {Event} event
 * @param {Event or Touch} pointer
 * @private
 */
proto._pointerUp = function( event, pointer ) {
  this._pointerDone();
  this.pointerUp( event, pointer );
};

// public
proto.pointerUp = function( event, pointer ) {
  this.emitEvent( 'pointerUp', [ event, pointer ] );
};

// ----- pointer done ----- //

// triggered on pointer up & pointer cancel
proto._pointerDone = function() {
  this._pointerReset();
  this._unbindPostStartEvents();
  this.pointerDone();
};

proto._pointerReset = function() {
  // reset properties
  this.isPointerDown = false;
  delete this.pointerIdentifier;
};

proto.pointerDone = noop;

// ----- pointer cancel ----- //

proto.onpointercancel = function( event ) {
  if ( event.pointerId == this.pointerIdentifier ) {
    this._pointerCancel( event, event );
  }
};

proto.ontouchcancel = function( event ) {
  var touch = this.getTouch( event.changedTouches );
  if ( touch ) {
    this._pointerCancel( event, touch );
  }
};

/**
 * pointer cancel
 * @param {Event} event
 * @param {Event or Touch} pointer
 * @private
 */
proto._pointerCancel = function( event, pointer ) {
  this._pointerDone();
  this.pointerCancel( event, pointer );
};

// public
proto.pointerCancel = function( event, pointer ) {
  this.emitEvent( 'pointerCancel', [ event, pointer ] );
};

// -----  ----- //

// utility function for getting x/y coords from event
Unipointer.getPointerPoint = function( pointer ) {
  return {
    x: pointer.pageX,
    y: pointer.pageY
  };
};

// -----  ----- //

return Unipointer;

}));

/*!
 * Unidragger v2.3.0
 * Draggable base class
 * MIT license
 */

/*jshint browser: true, unused: true, undef: true, strict: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'unidragger/unidragger',[
      'unipointer/unipointer'
    ], function( Unipointer ) {
      return factory( window, Unipointer );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('unipointer')
    );
  } else {
    // browser global
    window.Unidragger = factory(
      window,
      window.Unipointer
    );
  }

}( window, function factory( window, Unipointer ) {



// -------------------------- Unidragger -------------------------- //

function Unidragger() {}

// inherit Unipointer & EvEmitter
var proto = Unidragger.prototype = Object.create( Unipointer.prototype );

// ----- bind start ----- //

proto.bindHandles = function() {
  this._bindHandles( true );
};

proto.unbindHandles = function() {
  this._bindHandles( false );
};

/**
 * Add or remove start event
 * @param {Boolean} isAdd
 */
proto._bindHandles = function( isAdd ) {
  // munge isAdd, default to true
  isAdd = isAdd === undefined ? true : isAdd;
  // bind each handle
  var bindMethod = isAdd ? 'addEventListener' : 'removeEventListener';
  var touchAction = isAdd ? this._touchActionValue : '';
  for ( var i=0; i < this.handles.length; i++ ) {
    var handle = this.handles[i];
    this._bindStartEvent( handle, isAdd );
    handle[ bindMethod ]( 'click', this );
    // touch-action: none to override browser touch gestures. metafizzy/flickity#540
    if ( window.PointerEvent ) {
      handle.style.touchAction = touchAction;
    }
  }
};

// prototype so it can be overwriteable by Flickity
proto._touchActionValue = 'none';

// ----- start event ----- //

/**
 * pointer start
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
proto.pointerDown = function( event, pointer ) {
  var isOkay = this.okayPointerDown( event );
  if ( !isOkay ) {
    return;
  }
  // track start event position
  this.pointerDownPointer = pointer;

  event.preventDefault();
  this.pointerDownBlur();
  // bind move and end events
  this._bindPostStartEvents( event );
  this.emitEvent( 'pointerDown', [ event, pointer ] );
};

// nodes that have text fields
var cursorNodes = {
  TEXTAREA: true,
  INPUT: true,
  SELECT: true,
  OPTION: true,
};

// input types that do not have text fields
var clickTypes = {
  radio: true,
  checkbox: true,
  button: true,
  submit: true,
  image: true,
  file: true,
};

// dismiss inputs with text fields. flickity#403, flickity#404
proto.okayPointerDown = function( event ) {
  var isCursorNode = cursorNodes[ event.target.nodeName ];
  var isClickType = clickTypes[ event.target.type ];
  var isOkay = !isCursorNode || isClickType;
  if ( !isOkay ) {
    this._pointerReset();
  }
  return isOkay;
};

// kludge to blur previously focused input
proto.pointerDownBlur = function() {
  var focused = document.activeElement;
  // do not blur body for IE10, metafizzy/flickity#117
  var canBlur = focused && focused.blur && focused != document.body;
  if ( canBlur ) {
    focused.blur();
  }
};

// ----- move event ----- //

/**
 * drag move
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
proto.pointerMove = function( event, pointer ) {
  var moveVector = this._dragPointerMove( event, pointer );
  this.emitEvent( 'pointerMove', [ event, pointer, moveVector ] );
  this._dragMove( event, pointer, moveVector );
};

// base pointer move logic
proto._dragPointerMove = function( event, pointer ) {
  var moveVector = {
    x: pointer.pageX - this.pointerDownPointer.pageX,
    y: pointer.pageY - this.pointerDownPointer.pageY
  };
  // start drag if pointer has moved far enough to start drag
  if ( !this.isDragging && this.hasDragStarted( moveVector ) ) {
    this._dragStart( event, pointer );
  }
  return moveVector;
};

// condition if pointer has moved far enough to start drag
proto.hasDragStarted = function( moveVector ) {
  return Math.abs( moveVector.x ) > 3 || Math.abs( moveVector.y ) > 3;
};

// ----- end event ----- //

/**
 * pointer up
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
proto.pointerUp = function( event, pointer ) {
  this.emitEvent( 'pointerUp', [ event, pointer ] );
  this._dragPointerUp( event, pointer );
};

proto._dragPointerUp = function( event, pointer ) {
  if ( this.isDragging ) {
    this._dragEnd( event, pointer );
  } else {
    // pointer didn't move enough for drag to start
    this._staticClick( event, pointer );
  }
};

// -------------------------- drag -------------------------- //

// dragStart
proto._dragStart = function( event, pointer ) {
  this.isDragging = true;
  // prevent clicks
  this.isPreventingClicks = true;
  this.dragStart( event, pointer );
};

proto.dragStart = function( event, pointer ) {
  this.emitEvent( 'dragStart', [ event, pointer ] );
};

// dragMove
proto._dragMove = function( event, pointer, moveVector ) {
  // do not drag if not dragging yet
  if ( !this.isDragging ) {
    return;
  }

  this.dragMove( event, pointer, moveVector );
};

proto.dragMove = function( event, pointer, moveVector ) {
  event.preventDefault();
  this.emitEvent( 'dragMove', [ event, pointer, moveVector ] );
};

// dragEnd
proto._dragEnd = function( event, pointer ) {
  // set flags
  this.isDragging = false;
  // re-enable clicking async
  setTimeout( function() {
    delete this.isPreventingClicks;
  }.bind( this ) );

  this.dragEnd( event, pointer );
};

proto.dragEnd = function( event, pointer ) {
  this.emitEvent( 'dragEnd', [ event, pointer ] );
};

// ----- onclick ----- //

// handle all clicks and prevent clicks when dragging
proto.onclick = function( event ) {
  if ( this.isPreventingClicks ) {
    event.preventDefault();
  }
};

// ----- staticClick ----- //

// triggered after pointer down & up with no/tiny movement
proto._staticClick = function( event, pointer ) {
  // ignore emulated mouse up clicks
  if ( this.isIgnoringMouseUp && event.type == 'mouseup' ) {
    return;
  }

  this.staticClick( event, pointer );

  // set flag for emulated clicks 300ms after touchend
  if ( event.type != 'mouseup' ) {
    this.isIgnoringMouseUp = true;
    // reset flag after 300ms
    setTimeout( function() {
      delete this.isIgnoringMouseUp;
    }.bind( this ), 400 );
  }
};

proto.staticClick = function( event, pointer ) {
  this.emitEvent( 'staticClick', [ event, pointer ] );
};

// ----- utils ----- //

Unidragger.getPointerPoint = Unipointer.getPointerPoint;

// -----  ----- //

return Unidragger;

}));

// drag
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity/js/drag',[
      './flickity',
      'unidragger/unidragger',
      'fizzy-ui-utils/utils'
    ], function( Flickity, Unidragger, utils ) {
      return factory( window, Flickity, Unidragger, utils );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('./flickity'),
      require('unidragger'),
      require('fizzy-ui-utils')
    );
  } else {
    // browser global
    window.Flickity = factory(
      window,
      window.Flickity,
      window.Unidragger,
      window.fizzyUIUtils
    );
  }

}( window, function factory( window, Flickity, Unidragger, utils ) {



// ----- defaults ----- //

utils.extend( Flickity.defaults, {
  draggable: '>1',
  dragThreshold: 3,
});

// ----- create ----- //

Flickity.createMethods.push('_createDrag');

// -------------------------- drag prototype -------------------------- //

var proto = Flickity.prototype;
utils.extend( proto, Unidragger.prototype );
proto._touchActionValue = 'pan-y';

// --------------------------  -------------------------- //

var isTouch = 'createTouch' in document;
var isTouchmoveScrollCanceled = false;

proto._createDrag = function() {
  this.on( 'activate', this.onActivateDrag );
  this.on( 'uiChange', this._uiChangeDrag );
  this.on( 'childUIPointerDown', this._childUIPointerDownDrag );
  this.on( 'deactivate', this.onDeactivateDrag );
  this.on( 'cellChange', this.updateDraggable );
  // TODO updateDraggable on resize? if groupCells & slides change
  // HACK - add seemingly innocuous handler to fix iOS 10 scroll behavior
  // #457, RubaXa/Sortable#973
  if ( isTouch && !isTouchmoveScrollCanceled ) {
    window.addEventListener( 'touchmove', function() {});
    isTouchmoveScrollCanceled = true;
  }
};

proto.onActivateDrag = function() {
  this.handles = [ this.viewport ];
  this.bindHandles();
  this.updateDraggable();
};

proto.onDeactivateDrag = function() {
  this.unbindHandles();
  this.element.classList.remove('is-draggable');
};

proto.updateDraggable = function() {
  // disable dragging if less than 2 slides. #278
  if ( this.options.draggable == '>1' ) {
    this.isDraggable = this.slides.length > 1;
  } else {
    this.isDraggable = this.options.draggable;
  }
  if ( this.isDraggable ) {
    this.element.classList.add('is-draggable');
  } else {
    this.element.classList.remove('is-draggable');
  }
};

// backwards compatibility
proto.bindDrag = function() {
  this.options.draggable = true;
  this.updateDraggable();
};

proto.unbindDrag = function() {
  this.options.draggable = false;
  this.updateDraggable();
};

proto._uiChangeDrag = function() {
  delete this.isFreeScrolling;
};

proto._childUIPointerDownDrag = function( event ) {
  // allow focus & preventDefault even when not draggable
  // so child UI elements keep focus on carousel. #721
  event.preventDefault();
  this.pointerDownFocus( event );
};

// -------------------------- pointer events -------------------------- //

proto.pointerDown = function( event, pointer ) {
  if ( !this.isDraggable ) {
    this._pointerDownDefault( event, pointer );
    return;
  }
  var isOkay = this.okayPointerDown( event );
  if ( !isOkay ) {
    return;
  }

  this._pointerDownPreventDefault( event );
  this.pointerDownFocus( event );
  // blur
  if ( document.activeElement != this.element ) {
    // do not blur if already focused
    this.pointerDownBlur();
  }

  // stop if it was moving
  this.dragX = this.x;
  this.viewport.classList.add('is-pointer-down');
  // track scrolling
  this.pointerDownScroll = getScrollPosition();
  window.addEventListener( 'scroll', this );

  this._pointerDownDefault( event, pointer );
};

// default pointerDown logic, used for staticClick
proto._pointerDownDefault = function( event, pointer ) {
  // track start event position
  this.pointerDownPointer = pointer;
  // bind move and end events
  this._bindPostStartEvents( event );
  this.dispatchEvent( 'pointerDown', event, [ pointer ] );
};

var focusNodes = {
  INPUT: true,
  TEXTAREA: true,
  SELECT: true,
};

proto.pointerDownFocus = function( event ) {
  var isFocusNode = focusNodes[ event.target.nodeName ];
  if ( !isFocusNode ) {
    this.focus();
  }
};

proto._pointerDownPreventDefault = function( event ) {
  var isTouchStart = event.type == 'touchstart';
  var isTouchPointer = event.pointerType == 'touch';
  var isFocusNode = focusNodes[ event.target.nodeName ];
  if ( !isTouchStart && !isTouchPointer && !isFocusNode ) {
    event.preventDefault();
  }
};

// ----- move ----- //

proto.hasDragStarted = function( moveVector ) {
  return Math.abs( moveVector.x ) > this.options.dragThreshold;
};

// ----- up ----- //

proto.pointerUp = function( event, pointer ) {
  delete this.isTouchScrolling;
  this.viewport.classList.remove('is-pointer-down');
  this.dispatchEvent( 'pointerUp', event, [ pointer ] );
  this._dragPointerUp( event, pointer );
};

proto.pointerDone = function() {
  window.removeEventListener( 'scroll', this );
  delete this.pointerDownScroll;
};

// -------------------------- dragging -------------------------- //

proto.dragStart = function( event, pointer ) {
  if ( !this.isDraggable ) {
    return;
  }
  this.dragStartPosition = this.x;
  this.startAnimation();
  window.removeEventListener( 'scroll', this );
  this.dispatchEvent( 'dragStart', event, [ pointer ] );
};

proto.pointerMove = function( event, pointer ) {
  var moveVector = this._dragPointerMove( event, pointer );
  this.dispatchEvent( 'pointerMove', event, [ pointer, moveVector ] );
  this._dragMove( event, pointer, moveVector );
};

proto.dragMove = function( event, pointer, moveVector ) {
  if ( !this.isDraggable ) {
    return;
  }
  event.preventDefault();

  // reverse if right-to-left
  var direction = this.options.rightToLeft ? -1 : 1;
  if ( this.options.wrapAround ) {
    // wrap around move. #589
    moveVector.x = moveVector.x % this.slideableWidth;
  }
  var dragX = this.dragStartPosition + moveVector.x * direction;

  if ( !this.options.wrapAround && this.slides.length ) {
    // slow drag
    var originBound = Math.max( -this.slides[0].target, this.dragStartPosition );
    dragX = dragX > originBound ? ( dragX + originBound ) * 0.5 : dragX;
    var endBound = Math.min( -this.getLastSlide().target, this.dragStartPosition );
    dragX = dragX < endBound ? ( dragX + endBound ) * 0.5 : dragX;
  }
  
  // nectar addition ios13 bugfix
  if ( this.dragX !== dragX ) {
    this.previousDragX = this.dragX;
  }
  
  this.dragX = dragX;

  this.dragMoveTime = new Date();
  this.dispatchEvent( 'dragMove', event, [ pointer, moveVector ] );
};

proto.dragEnd = function( event, pointer ) {
  if ( !this.isDraggable ) {
    return;
  }
  if ( this.options.freeScroll ) {
    this.isFreeScrolling = true;
  }
  // set selectedIndex based on where flick will end up
  var index = this.dragEndRestingSelect();

  if ( this.options.freeScroll && !this.options.wrapAround ) {
    // if free-scroll & not wrap around
    // do not free-scroll if going outside of bounding slides
    // so bounding slides can attract slider, and keep it in bounds
    var restingX = this.getRestingPosition();
    this.isFreeScrolling = -restingX > this.slides[0].target &&
      -restingX < this.getLastSlide().target;
  } else if ( !this.options.freeScroll && index == this.selectedIndex ) {
    // boost selection if selected index has not changed
    index += this.dragEndBoostSelect();
  }
  delete this.previousDragX;
  // apply selection
  // TODO refactor this, selecting here feels weird
  // HACK, set flag so dragging stays in correct direction
  this.isDragSelect = this.options.wrapAround;
  this.select( index );
  delete this.isDragSelect;
  this.dispatchEvent( 'dragEnd', event, [ pointer ] );
};

proto.dragEndRestingSelect = function() {
  var restingX = this.getRestingPosition();
  // how far away from selected slide
  var distance = Math.abs( this.getSlideDistance( -restingX, this.selectedIndex ) );
  // get closet resting going up and going down
  var positiveResting = this._getClosestResting( restingX, distance, 1 );
  var negativeResting = this._getClosestResting( restingX, distance, -1 );
  // use closer resting for wrap-around
  var index = positiveResting.distance < negativeResting.distance ?
    positiveResting.index : negativeResting.index;
  return index;
};

/**
 * given resting X and distance to selected cell
 * get the distance and index of the closest cell
 * @param {Number} restingX - estimated post-flick resting position
 * @param {Number} distance - distance to selected cell
 * @param {Integer} increment - +1 or -1, going up or down
 * @returns {Object} - { distance: {Number}, index: {Integer} }
 */
proto._getClosestResting = function( restingX, distance, increment ) {
  var index = this.selectedIndex;
  var minDistance = Infinity;
  var condition = this.options.contain && !this.options.wrapAround ?
    // if contain, keep going if distance is equal to minDistance
    function( d, md ) { return d <= md; } : function( d, md ) { return d < md; };
  while ( condition( distance, minDistance ) ) {
    // measure distance to next cell
    index += increment;
    minDistance = distance;
    distance = this.getSlideDistance( -restingX, index );
    if ( distance === null ) {
      break;
    }
    distance = Math.abs( distance );
  }
  return {
    distance: minDistance,
    // selected was previous index
    index: index - increment
  };
};

/**
 * measure distance between x and a slide target
 * @param {Number} x
 * @param {Integer} index - slide index
 */
proto.getSlideDistance = function( x, index ) {
  var len = this.slides.length;
  // wrap around if at least 2 slides
  var isWrapAround = this.options.wrapAround && len > 1;
  var slideIndex = isWrapAround ? utils.modulo( index, len ) : index;
  var slide = this.slides[ slideIndex ];
  if ( !slide ) {
    return null;
  }
  // add distance for wrap-around slides
  var wrap = isWrapAround ? this.slideableWidth * Math.floor( index / len ) : 0;
  return x - ( slide.target + wrap );
};

proto.dragEndBoostSelect = function() {
  // do not boost if no previousDragX or dragMoveTime
  if ( this.previousDragX === undefined || !this.dragMoveTime ||
    // or if drag was held for 100 ms
    new Date() - this.dragMoveTime > 100 ) {
    return 0;
  }

  var distance = this.getSlideDistance( -this.dragX, this.selectedIndex );
  var delta = this.previousDragX - this.dragX;
  if ( distance > 0 && delta > 0 ) {
    // boost to next if moving towards the right, and positive velocity
    return 1;
  } else if ( distance < 0 && delta < 0 ) {
    // boost to previous if moving towards the left, and negative velocity
    return -1;
  }
  return 0;
};

// ----- staticClick ----- //

proto.staticClick = function( event, pointer ) {
  // get clickedCell, if cell was clicked
  var clickedCell = this.getParentCell( event.target );
  var cellElem = clickedCell && clickedCell.element;
  var cellIndex = clickedCell && this.cells.indexOf( clickedCell );
  this.dispatchEvent( 'staticClick', event, [ pointer, cellElem, cellIndex ] );
};

// ----- scroll ----- //

proto.onscroll = function() {
  var scroll = getScrollPosition();
  var scrollMoveX = this.pointerDownScroll.x - scroll.x;
  var scrollMoveY = this.pointerDownScroll.y - scroll.y;
  // cancel click/tap if scroll is too much
  if ( Math.abs( scrollMoveX ) > 3 || Math.abs( scrollMoveY ) > 3 ) {
    this._pointerDone();
  }
};

// ----- utils ----- //

function getScrollPosition() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}

// -----  ----- //

return Flickity;

}));

/*!
 * Tap listener v2.0.0
 * listens to taps
 * MIT license
 */

/*jshint browser: true, unused: true, undef: true, strict: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false*/ /*globals define, module, require */

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'tap-listener/tap-listener',[
      'unipointer/unipointer'
    ], function( Unipointer ) {
      return factory( window, Unipointer );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('unipointer')
    );
  } else {
    // browser global
    window.TapListener = factory(
      window,
      window.Unipointer
    );
  }

}( window, function factory( window, Unipointer ) {



// --------------------------  TapListener -------------------------- //

function TapListener( elem ) {
  this.bindTap( elem );
}

// inherit Unipointer & EventEmitter
var proto = TapListener.prototype = Object.create( Unipointer.prototype );

/**
 * bind tap event to element
 * @param {Element} elem
 */
proto.bindTap = function( elem ) {
  if ( !elem ) {
    return;
  }
  this.unbindTap();
  this.tapElement = elem;
  this._bindStartEvent( elem, true );
};

proto.unbindTap = function() {
  if ( !this.tapElement ) {
    return;
  }
  this._bindStartEvent( this.tapElement, true );
  delete this.tapElement;
};

/**
 * pointer up
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
proto.pointerUp = function( event, pointer ) {
  // ignore emulated mouse up clicks
  if ( this.isIgnoringMouseUp && event.type == 'mouseup' ) {
    return;
  }

  var pointerPoint = Unipointer.getPointerPoint( pointer );
  var boundingRect = this.tapElement.getBoundingClientRect();
  var scrollX = window.pageXOffset;
  var scrollY = window.pageYOffset;
  // calculate if pointer is inside tapElement
  var isInside = pointerPoint.x >= boundingRect.left + scrollX &&
    pointerPoint.x <= boundingRect.right + scrollX &&
    pointerPoint.y >= boundingRect.top + scrollY &&
    pointerPoint.y <= boundingRect.bottom + scrollY;
  // trigger callback if pointer is inside element
  if ( isInside ) {
    this.emitEvent( 'tap', [ event, pointer ] );
  }

  // set flag for emulated clicks 300ms after touchend
  if ( event.type != 'mouseup' ) {
    this.isIgnoringMouseUp = true;
    // reset flag after 300ms
    var _this = this;
    setTimeout( function() {
      delete _this.isIgnoringMouseUp;
    }, 400 );
  }
};

proto.destroy = function() {
  this.pointerDone();
  this.unbindTap();
};

// -----  ----- //

return TapListener;

}));

// prev/next buttons
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity/js/prev-next-button',[
      './flickity',
      'tap-listener/tap-listener',
      'fizzy-ui-utils/utils'
    ], function( Flickity, TapListener, utils ) {
      return factory( window, Flickity, TapListener, utils );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('./flickity'),
      require('tap-listener'),
      require('fizzy-ui-utils')
    );
  } else {
    // browser global
    factory(
      window,
      window.Flickity,
      window.TapListener,
      window.fizzyUIUtils
    );
  }

}( window, function factory( window, Flickity, TapListener, utils ) {
'use strict';

var svgURI = 'http://www.w3.org/2000/svg';

// -------------------------- PrevNextButton -------------------------- //

function PrevNextButton( direction, parent ) {
  this.direction = direction;
  this.parent = parent;
  this._create();
}

PrevNextButton.prototype = Object.create( TapListener.prototype );

PrevNextButton.prototype._create = function() {
  // properties
  this.isEnabled = true;
  this.isPrevious = this.direction == -1;
  var leftDirection = this.parent.options.rightToLeft ? 1 : -1;
  this.isLeft = this.direction == leftDirection;

  var element = this.element = document.createElement('button');
  element.className = 'flickity-button flickity-prev-next-button';
  element.className += this.isPrevious ? ' previous' : ' next';
  // prevent button from submitting form http://stackoverflow.com/a/10836076/182183
  element.setAttribute( 'type', 'button' );
  // init as disabled
  this.disable();

  element.setAttribute( 'aria-label', this.isPrevious ? 'Previous' : 'Next' );

  // create arrow
  var svg = this.createSVG();
  element.appendChild( svg );
  // events
  this.on( 'tap', this.onTap );
  this.parent.on( 'select', this.update.bind( this ) );
  this.on( 'pointerDown', this.parent.childUIPointerDown.bind( this.parent ) );
};

PrevNextButton.prototype.activate = function() {
  this.bindTap( this.element );
  // click events from keyboard
  this.element.addEventListener( 'click', this );
  // add to DOM
  this.parent.element.appendChild( this.element );
};

PrevNextButton.prototype.deactivate = function() {
  // remove from DOM
  this.parent.element.removeChild( this.element );
  // do regular TapListener destroy
  TapListener.prototype.destroy.call( this );
  // click events from keyboard
  this.element.removeEventListener( 'click', this );
};

PrevNextButton.prototype.createSVG = function() {
  var svg = document.createElementNS( svgURI, 'svg');
  svg.setAttribute( 'class', 'flickity-button-icon' );
  svg.setAttribute( 'viewBox', '0 0 100 100' );
  var path = document.createElementNS( svgURI, 'path');
  var pathMovements = getArrowMovements( this.parent.options.arrowShape );
  path.setAttribute( 'd', pathMovements );
  path.setAttribute( 'class', 'arrow' );
  // rotate arrow
  if ( !this.isLeft ) {
    path.setAttribute( 'transform', 'translate(100, 100) rotate(180) ' );
  }
  svg.appendChild( path );
  return svg;
};

// get SVG path movmement
function getArrowMovements( shape ) {
  // use shape as movement if string
  if ( typeof shape == 'string' ) {
    return shape;
  }
  // create movement string
  return 'M ' + shape.x0 + ',50' +
    ' L ' + shape.x1 + ',' + ( shape.y1 + 50 ) +
    ' L ' + shape.x2 + ',' + ( shape.y2 + 50 ) +
    ' L ' + shape.x3 + ',50 ' +
    ' L ' + shape.x2 + ',' + ( 50 - shape.y2 ) +
    ' L ' + shape.x1 + ',' + ( 50 - shape.y1 ) +
    ' Z';
}

PrevNextButton.prototype.onTap = function() {
  if ( !this.isEnabled ) {
    return;
  }
  this.parent.uiChange();
  var method = this.isPrevious ? 'previous' : 'next';
  this.parent[ method ]();
};

PrevNextButton.prototype.handleEvent = utils.handleEvent;

PrevNextButton.prototype.onclick = function( event ) {
  // only allow clicks from keyboard
  var focused = document.activeElement;
  if ( focused && focused == this.element ) {
    this.onTap( event, event );
  }
};

// -----  ----- //

PrevNextButton.prototype.enable = function() {
  if ( this.isEnabled ) {
    return;
  }
  this.element.disabled = false;
  this.isEnabled = true;
};

PrevNextButton.prototype.disable = function() {
  if ( !this.isEnabled ) {
    return;
  }
  this.element.disabled = true;
  this.isEnabled = false;
};

PrevNextButton.prototype.update = function() {
  // index of first or last slide, if previous or next
  var slides = this.parent.slides;
  // enable is wrapAround and at least 2 slides
  if ( this.parent.options.wrapAround && slides.length > 1 ) {
    this.enable();
    return;
  }
  var lastIndex = slides.length ? slides.length - 1 : 0;
  var boundIndex = this.isPrevious ? 0 : lastIndex;
  var method = this.parent.selectedIndex == boundIndex ? 'disable' : 'enable';
  this[ method ]();
};

PrevNextButton.prototype.destroy = function() {
  this.deactivate();
};

// -------------------------- Flickity prototype -------------------------- //

utils.extend( Flickity.defaults, {
  prevNextButtons: true,
  arrowShape: {
    x0: 10,
    x1: 60, y1: 50,
    x2: 70, y2: 40,
    x3: 30
  }
});

Flickity.createMethods.push('_createPrevNextButtons');
var proto = Flickity.prototype;

proto._createPrevNextButtons = function() {
  if ( !this.options.prevNextButtons ) {
    return;
  }

  this.prevButton = new PrevNextButton( -1, this );
  this.nextButton = new PrevNextButton( 1, this );

  this.on( 'activate', this.activatePrevNextButtons );
};

proto.activatePrevNextButtons = function() {
  this.prevButton.activate();
  this.nextButton.activate();
  this.on( 'deactivate', this.deactivatePrevNextButtons );
};

proto.deactivatePrevNextButtons = function() {
  this.prevButton.deactivate();
  this.nextButton.deactivate();
  this.off( 'deactivate', this.deactivatePrevNextButtons );
};

// --------------------------  -------------------------- //

Flickity.PrevNextButton = PrevNextButton;

return Flickity;

}));

// page dots
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity/js/page-dots',[
      './flickity',
      'tap-listener/tap-listener',
      'fizzy-ui-utils/utils'
    ], function( Flickity, TapListener, utils ) {
      return factory( window, Flickity, TapListener, utils );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('./flickity'),
      require('tap-listener'),
      require('fizzy-ui-utils')
    );
  } else {
    // browser global
    factory(
      window,
      window.Flickity,
      window.TapListener,
      window.fizzyUIUtils
    );
  }

}( window, function factory( window, Flickity, TapListener, utils ) {

// -------------------------- PageDots -------------------------- //



function PageDots( parent ) {
  this.parent = parent;
  this._create();
}

PageDots.prototype = new TapListener();

PageDots.prototype._create = function() {
  // create holder element
  this.holder = document.createElement('ol');
  this.holder.className = 'flickity-page-dots';
  // create dots, array of elements
  this.dots = [];
  // events
  this.on( 'tap', this.onTap );
  this.on( 'pointerDown', this.parent.childUIPointerDown.bind( this.parent ) );
};

PageDots.prototype.activate = function() {
  this.setDots();
  this.bindTap( this.holder );
  // add to DOM
  this.parent.element.appendChild( this.holder );
};

PageDots.prototype.deactivate = function() {
  // remove from DOM
  this.parent.element.removeChild( this.holder );
  TapListener.prototype.destroy.call( this );
};

PageDots.prototype.setDots = function() {
  // get difference between number of slides and number of dots
  var delta = this.parent.slides.length - this.dots.length;
  if ( delta > 0 ) {
    this.addDots( delta );
  } else if ( delta < 0 ) {
    this.removeDots( -delta );
  }
};

PageDots.prototype.addDots = function( count ) {
  var fragment = document.createDocumentFragment();
  var newDots = [];
  var length = this.dots.length;
  var max = length + count;

  for ( var i = length; i < max; i++ ) {
    var dot = document.createElement('li');
    dot.className = 'dot';
    dot.setAttribute( 'aria-label', 'Page dot ' + ( i + 1 ) );
    fragment.appendChild( dot );
    newDots.push( dot );
  }

  this.holder.appendChild( fragment );
  this.dots = this.dots.concat( newDots );
};

PageDots.prototype.removeDots = function( count ) {
  // remove from this.dots collection
  var removeDots = this.dots.splice( this.dots.length - count, count );
  // remove from DOM
  removeDots.forEach( function( dot ) {
    this.holder.removeChild( dot );
  }, this );
};

PageDots.prototype.updateSelected = function() {
  // remove selected class on previous
  if ( this.selectedDot ) {
    this.selectedDot.className = 'dot';
    this.selectedDot.removeAttribute('aria-current');
  }
  // don't proceed if no dots
  if ( !this.dots.length ) {
    return;
  }
  this.selectedDot = this.dots[ this.parent.selectedIndex ];
  this.selectedDot.className = 'dot is-selected';
  this.selectedDot.setAttribute( 'aria-current', 'step' );
};

PageDots.prototype.onTap = function( event ) {
  var target = event.target;
  // only care about dot clicks
  if ( target.nodeName != 'LI' ) {
    return;
  }

  this.parent.uiChange();
  var index = this.dots.indexOf( target );
  this.parent.select( index );
};

PageDots.prototype.destroy = function() {
  this.deactivate();
};

Flickity.PageDots = PageDots;

// -------------------------- Flickity -------------------------- //

utils.extend( Flickity.defaults, {
  pageDots: true
});

Flickity.createMethods.push('_createPageDots');

var proto = Flickity.prototype;

proto._createPageDots = function() {
  if ( !this.options.pageDots ) {
    return;
  }
  this.pageDots = new PageDots( this );
  // events
  this.on( 'activate', this.activatePageDots );
  this.on( 'select', this.updateSelectedPageDots );
  this.on( 'cellChange', this.updatePageDots );
  this.on( 'resize', this.updatePageDots );
  this.on( 'deactivate', this.deactivatePageDots );
};

proto.activatePageDots = function() {
  this.pageDots.activate();
};

proto.updateSelectedPageDots = function() {
  this.pageDots.updateSelected();
};

proto.updatePageDots = function() {
  this.pageDots.setDots();
};

proto.deactivatePageDots = function() {
  this.pageDots.deactivate();
};

// -----  ----- //

Flickity.PageDots = PageDots;

return Flickity;

}));

// player & autoPlay
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity/js/player',[
      'ev-emitter/ev-emitter',
      'fizzy-ui-utils/utils',
      './flickity'
    ], function( EvEmitter, utils, Flickity ) {
      return factory( EvEmitter, utils, Flickity );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('ev-emitter'),
      require('fizzy-ui-utils'),
      require('./flickity')
    );
  } else {
    // browser global
    factory(
      window.EvEmitter,
      window.fizzyUIUtils,
      window.Flickity
    );
  }

}( window, function factory( EvEmitter, utils, Flickity ) {



// -------------------------- Player -------------------------- //

function Player( parent ) {
  this.parent = parent;
  this.state = 'stopped';
  // visibility change event handler
  this.onVisibilityChange = this.visibilityChange.bind( this );
  this.onVisibilityPlay = this.visibilityPlay.bind( this );
}

Player.prototype = Object.create( EvEmitter.prototype );

// start play
Player.prototype.play = function() {
  if ( this.state == 'playing' ) {
    return;
  }
  // do not play if page is hidden, start playing when page is visible
  var isPageHidden = document.hidden;
  if ( isPageHidden ) {
    document.addEventListener( 'visibilitychange', this.onVisibilityPlay );
    return;
  }

  this.state = 'playing';
  // listen to visibility change
  document.addEventListener( 'visibilitychange', this.onVisibilityChange );
  // start ticking
  this.tick();
};

Player.prototype.tick = function() {
  // do not tick if not playing
  if ( this.state != 'playing' ) {
    return;
  }

  var time = this.parent.options.autoPlay;
  // default to 3 seconds
  time = typeof time == 'number' ? time : 3000;
  var _this = this;
  // HACK: reset ticks if stopped and started within interval
  this.clear();
  this.timeout = setTimeout( function() {
    _this.parent.next( true );
    _this.tick();
  }, time );
};

Player.prototype.stop = function() {
  this.state = 'stopped';
  this.clear();
  // remove visibility change event
  document.removeEventListener( 'visibilitychange', this.onVisibilityChange );
};

Player.prototype.clear = function() {
  clearTimeout( this.timeout );
};

Player.prototype.pause = function() {
  if ( this.state == 'playing' ) {
    this.state = 'paused';
    this.clear();
  }
};

Player.prototype.unpause = function() {
  // re-start play if paused
  if ( this.state == 'paused' ) {
    this.play();
  }
};

// pause if page visibility is hidden, unpause if visible
Player.prototype.visibilityChange = function() {
  var isPageHidden = document.hidden;
  this[ isPageHidden ? 'pause' : 'unpause' ]();
};

Player.prototype.visibilityPlay = function() {
  this.play();
  document.removeEventListener( 'visibilitychange', this.onVisibilityPlay );
};

// -------------------------- Flickity -------------------------- //

utils.extend( Flickity.defaults, {
  pauseAutoPlayOnHover: true
});

Flickity.createMethods.push('_createPlayer');
var proto = Flickity.prototype;

proto._createPlayer = function() {
  this.player = new Player( this );

  this.on( 'activate', this.activatePlayer );
  this.on( 'uiChange', this.stopPlayer );
  this.on( 'pointerDown', this.stopPlayer );
  this.on( 'deactivate', this.deactivatePlayer );
};

proto.activatePlayer = function() {
  if ( !this.options.autoPlay ) {
    return;
  }
  this.player.play();
  this.element.addEventListener( 'mouseenter', this );
};

// Player API, don't hate the ... thanks I know where the door is

proto.playPlayer = function() {
  this.player.play();
};

proto.stopPlayer = function() {
  this.player.stop();
};

proto.pausePlayer = function() {
  this.player.pause();
};

proto.unpausePlayer = function() {
  this.player.unpause();
};

proto.deactivatePlayer = function() {
  this.player.stop();
  this.element.removeEventListener( 'mouseenter', this );
};

// ----- mouseenter/leave ----- //

// pause auto-play on hover
proto.onmouseenter = function() {
  if ( !this.options.pauseAutoPlayOnHover ) {
    return;
  }
  this.player.pause();
  this.element.addEventListener( 'mouseleave', this );
};

// resume auto-play on hover off
proto.onmouseleave = function() {
  this.player.unpause();
  this.element.removeEventListener( 'mouseleave', this );
};

// -----  ----- //

Flickity.Player = Player;

return Flickity;

}));

// add, remove cell
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity/js/add-remove-cell',[
      './flickity',
      'fizzy-ui-utils/utils'
    ], function( Flickity, utils ) {
      return factory( window, Flickity, utils );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('./flickity'),
      require('fizzy-ui-utils')
    );
  } else {
    // browser global
    factory(
      window,
      window.Flickity,
      window.fizzyUIUtils
    );
  }

}( window, function factory( window, Flickity, utils ) {



// append cells to a document fragment
function getCellsFragment( cells ) {
  var fragment = document.createDocumentFragment();
  cells.forEach( function( cell ) {
    fragment.appendChild( cell.element );
  });
  return fragment;
}

// -------------------------- add/remove cell prototype -------------------------- //

var proto = Flickity.prototype;

/**
 * Insert, prepend, or append cells
 * @param {Element, Array, NodeList} elems
 * @param {Integer} index
 */
proto.insert = function( elems, index ) {
  var cells = this._makeCells( elems );
  if ( !cells || !cells.length ) {
    return;
  }
  var len = this.cells.length;
  // default to append
  index = index === undefined ? len : index;
  // add cells with document fragment
  var fragment = getCellsFragment( cells );
  // append to slider
  var isAppend = index == len;
  if ( isAppend ) {
    this.slider.appendChild( fragment );
  } else {
    var insertCellElement = this.cells[ index ].element;
    this.slider.insertBefore( fragment, insertCellElement );
  }
  // add to this.cells
  if ( index === 0 ) {
    // prepend, add to start
    this.cells = cells.concat( this.cells );
  } else if ( isAppend ) {
    // append, add to end
    this.cells = this.cells.concat( cells );
  } else {
    // insert in this.cells
    var endCells = this.cells.splice( index, len - index );
    this.cells = this.cells.concat( cells ).concat( endCells );
  }

  this._sizeCells( cells );
  this.cellChange( index, true );
};

proto.append = function( elems ) {
  this.insert( elems, this.cells.length );
};

proto.prepend = function( elems ) {
  this.insert( elems, 0 );
};

/**
 * Remove cells
 * @param {Element, Array, NodeList} elems
 */
proto.remove = function( elems ) {
  var cells = this.getCells( elems );
  if ( !cells || !cells.length ) {
    return;
  }

  var minCellIndex = this.cells.length - 1;
  // remove cells from collection & DOM
  cells.forEach( function( cell ) {
    cell.remove();
    var index = this.cells.indexOf( cell );
    minCellIndex = Math.min( index, minCellIndex );
    utils.removeFrom( this.cells, cell );
  }, this );

  this.cellChange( minCellIndex, true );
};

/**
 * logic to be run after a cell's size changes
 * @param {Element} elem - cell's element
 */
proto.cellSizeChange = function( elem ) {
  var cell = this.getCell( elem );
  if ( !cell ) {
    return;
  }
  cell.getSize();

  var index = this.cells.indexOf( cell );
  this.cellChange( index );
};

/**
 * logic any time a cell is changed: added, removed, or size changed
 * @param {Integer} changedCellIndex - index of the changed cell, optional
 */
proto.cellChange = function( changedCellIndex, isPositioningSlider ) {
  var prevSelectedElem = this.selectedElement;
  this._positionCells( changedCellIndex );
  this._getWrapShiftCells();
  this.setGallerySize();
  // update selectedIndex
  // try to maintain position & select previous selected element
  var cell = this.getCell( prevSelectedElem );
  if ( cell ) {
    this.selectedIndex = this.getCellSlideIndex( cell );
  }
  this.selectedIndex = Math.min( this.slides.length - 1, this.selectedIndex );

  this.emitEvent( 'cellChange', [ changedCellIndex ] );
  // position slider
  this.select( this.selectedIndex );
  // do not position slider after lazy load
  if ( isPositioningSlider ) {
    this.positionSliderAtSelected();
  }
};

// -----  ----- //

return Flickity;

}));

// lazyload
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity/js/lazyload',[
      './flickity',
      'fizzy-ui-utils/utils'
    ], function( Flickity, utils ) {
      return factory( window, Flickity, utils );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('./flickity'),
      require('fizzy-ui-utils')
    );
  } else {
    // browser global
    factory(
      window,
      window.Flickity,
      window.fizzyUIUtils
    );
  }

}( window, function factory( window, Flickity, utils ) {
'use strict';

Flickity.createMethods.push('_createLazyload');
var proto = Flickity.prototype;

proto._createLazyload = function() {
  this.on( 'select', this.lazyLoad );
};

proto.lazyLoad = function() {
  var lazyLoad = this.options.lazyLoad;
  if ( !lazyLoad ) {
    return;
  }
  // get adjacent cells, use lazyLoad option for adjacent count
  var adjCount = typeof lazyLoad == 'number' ? lazyLoad : 0;
  var cellElems = this.getAdjacentCellElements( adjCount );
  // get lazy images in those cells
  var lazyImages = [];
  cellElems.forEach( function( cellElem ) {
    var lazyCellImages = getCellLazyImages( cellElem );
    lazyImages = lazyImages.concat( lazyCellImages );
  });
  // load lazy images
  lazyImages.forEach( function( img ) {
    new LazyLoader( img, this );
  }, this );
};

function getCellLazyImages( cellElem ) {
  // check if cell element is lazy image
  if ( cellElem.nodeName == 'IMG' ) {
    var lazyloadAttr = cellElem.getAttribute('data-flickity-lazyload');
    var srcAttr = cellElem.getAttribute('data-flickity-lazyload-src');
    var srcsetAttr = cellElem.getAttribute('data-flickity-lazyload-srcset');
    if ( lazyloadAttr || srcAttr || srcsetAttr ) {
      return [ cellElem ];
    }
  }
  // select lazy images in cell
  var lazySelector = 'img[data-flickity-lazyload], ' +
    'img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]';
  var imgs = cellElem.querySelectorAll( lazySelector );
  return utils.makeArray( imgs );
}

// -------------------------- LazyLoader -------------------------- //

/**
 * class to handle loading images
 */
function LazyLoader( img, flickity ) {
  this.img = img;
  this.flickity = flickity;
  this.load();
}

LazyLoader.prototype.handleEvent = utils.handleEvent;

LazyLoader.prototype.load = function() {
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  // get src & srcset
  var src = this.img.getAttribute('data-flickity-lazyload') ||
    this.img.getAttribute('data-flickity-lazyload-src');
  var srcset = this.img.getAttribute('data-flickity-lazyload-srcset');
  // set src & serset
  this.img.src = src;
  if ( srcset ) {
    this.img.setAttribute( 'srcset', srcset );
  }
  // remove attr
  this.img.removeAttribute('data-flickity-lazyload');
  this.img.removeAttribute('data-flickity-lazyload-src');
  this.img.removeAttribute('data-flickity-lazyload-srcset');
};

LazyLoader.prototype.onload = function( event ) {
  this.complete( event, 'flickity-lazyloaded' );
};

LazyLoader.prototype.onerror = function( event ) {
  this.complete( event, 'flickity-lazyerror' );
};

LazyLoader.prototype.complete = function( event, className ) {
  // unbind events
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );

  var cell = this.flickity.getParentCell( this.img );
  var cellElem = cell && cell.element;
  this.flickity.cellSizeChange( cellElem );

  this.img.classList.add( className );
  this.flickity.dispatchEvent( 'lazyLoad', event, cellElem );
};

// -----  ----- //

Flickity.LazyLoader = LazyLoader;

return Flickity;

}));

/*!
 * Flickity v2.1.2
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2018 Metafizzy
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity/js/index',[
      './flickity',
      './drag',
      './prev-next-button',
      './page-dots',
      './player',
      './add-remove-cell',
      './lazyload'
    ], factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('./flickity'),
      require('./drag'),
      require('./prev-next-button'),
      require('./page-dots'),
      require('./player'),
      require('./add-remove-cell'),
      require('./lazyload')
    );
  }

})( window, function factory( Flickity ) {
  /*jshint strict: false*/
  return Flickity;
});

/*!
 * Flickity asNavFor v2.0.1
 * enable asNavFor for Flickity
 */

/*jshint browser: true, undef: true, unused: true, strict: true*/

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity-as-nav-for/as-nav-for',[
      'flickity/js/index',
      'fizzy-ui-utils/utils'
    ], factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('flickity'),
      require('fizzy-ui-utils')
    );
  } else {
    // browser global
    window.Flickity = factory(
      window.Flickity,
      window.fizzyUIUtils
    );
  }

}( window, function factory( Flickity, utils ) {



// -------------------------- asNavFor prototype -------------------------- //

// Flickity.defaults.asNavFor = null;

Flickity.createMethods.push('_createAsNavFor');

var proto = Flickity.prototype;

proto._createAsNavFor = function() {
  this.on( 'activate', this.activateAsNavFor );
  this.on( 'deactivate', this.deactivateAsNavFor );
  this.on( 'destroy', this.destroyAsNavFor );

  var asNavForOption = this.options.asNavFor;
  if ( !asNavForOption ) {
    return;
  }
  // HACK do async, give time for other flickity to be initalized
  var _this = this;
  setTimeout( function initNavCompanion() {
    _this.setNavCompanion( asNavForOption );
  });
};

proto.setNavCompanion = function( elem ) {
  elem = utils.getQueryElement( elem );
  var companion = Flickity.data( elem );
  // stop if no companion or companion is self
  if ( !companion || companion == this ) {
    return;
  }

  this.navCompanion = companion;
  // companion select
  var _this = this;
  this.onNavCompanionSelect = function() {
    _this.navCompanionSelect();
  };
  companion.on( 'select', this.onNavCompanionSelect );
  // click
  this.on( 'staticClick', this.onNavStaticClick );

  this.navCompanionSelect( true );
};

proto.navCompanionSelect = function( isInstant ) {
  if ( !this.navCompanion ) {
    return;
  }
  // select slide that matches first cell of slide
  var selectedCell = this.navCompanion.selectedCells[0];
  var firstIndex = this.navCompanion.cells.indexOf( selectedCell );
  var lastIndex = firstIndex + this.navCompanion.selectedCells.length - 1;
  var selectIndex = Math.floor( lerp( firstIndex, lastIndex,
    this.navCompanion.cellAlign ) );
  this.selectCell( selectIndex, false, isInstant );
  // set nav selected class
  this.removeNavSelectedElements();
  // stop if companion has more cells than this one
  if ( selectIndex >= this.cells.length ) {
    return;
  }

  var selectedCells = this.cells.slice( firstIndex, lastIndex + 1 );
  this.navSelectedElements = selectedCells.map( function( cell ) {
    return cell.element;
  });
  this.changeNavSelectedClass('add');
};

function lerp( a, b, t ) {
  return ( b - a ) * t + a;
}

proto.changeNavSelectedClass = function( method ) {
  this.navSelectedElements.forEach( function( navElem ) {
    navElem.classList[ method ]('is-nav-selected');
  });
};

proto.activateAsNavFor = function() {
  this.navCompanionSelect( true );
};

proto.removeNavSelectedElements = function() {
  if ( !this.navSelectedElements ) {
    return;
  }
  this.changeNavSelectedClass('remove');
  delete this.navSelectedElements;
};

proto.onNavStaticClick = function( event, pointer, cellElement, cellIndex ) {
  if ( typeof cellIndex == 'number' ) {
    this.navCompanion.selectCell( cellIndex );
  }
};

proto.deactivateAsNavFor = function() {
  this.removeNavSelectedElements();
};

proto.destroyAsNavFor = function() {
  if ( !this.navCompanion ) {
    return;
  }
  this.navCompanion.off( 'select', this.onNavCompanionSelect );
  this.off( 'staticClick', this.onNavStaticClick );
  delete this.navCompanion;
};

// -----  ----- //

return Flickity;

}));

/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

( function( window, factory ) { 'use strict';
  // universal module definition

  /*global define: false, module: false, require: false */

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'imagesloaded/imagesloaded',[
      'ev-emitter/ev-emitter'
    ], function( EvEmitter ) {
      return factory( window, EvEmitter );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('ev-emitter')
    );
  } else {
    // browser global
    window.imagesLoaded = factory(
      window,
      window.EvEmitter
    );
  }

})( typeof window !== 'undefined' ? window : this,

// --------------------------  factory -------------------------- //

function factory( window, EvEmitter ) {



var $ = window.jQuery;
var console = window.console;

// -------------------------- helpers -------------------------- //

// extend objects
function extend( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
}

var arraySlice = Array.prototype.slice;

// turn element or nodeList into an array
function makeArray( obj ) {
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    return obj;
  }

  var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
  if ( isArrayLike ) {
    // convert nodeList to array
    return arraySlice.call( obj );
  }

  // array of single index
  return [ obj ];
}

// -------------------------- imagesLoaded -------------------------- //

/**
 * @param {Array, Element, NodeList, String} elem
 * @param {Object or Function} options - if function, use as callback
 * @param {Function} onAlways - callback function
 */
function ImagesLoaded( elem, options, onAlways ) {
  // coerce ImagesLoaded() without new, to be new ImagesLoaded()
  if ( !( this instanceof ImagesLoaded ) ) {
    return new ImagesLoaded( elem, options, onAlways );
  }
  // use elem as selector string
  var queryElem = elem;
  if ( typeof elem == 'string' ) {
    queryElem = document.querySelectorAll( elem );
  }
  // bail if bad element
  if ( !queryElem ) {
    console.error( 'Bad element for imagesLoaded ' + ( queryElem || elem ) );
    return;
  }

  this.elements = makeArray( queryElem );
  this.options = extend( {}, this.options );
  // shift arguments if no options set
  if ( typeof options == 'function' ) {
    onAlways = options;
  } else {
    extend( this.options, options );
  }

  if ( onAlways ) {
    this.on( 'always', onAlways );
  }

  this.getImages();

  if ( $ ) {
    // add jQuery Deferred object
    this.jqDeferred = new $.Deferred();
  }

  // HACK check async to allow time to bind listeners
  setTimeout( this.check.bind( this ) );
}

ImagesLoaded.prototype = Object.create( EvEmitter.prototype );

ImagesLoaded.prototype.options = {};

ImagesLoaded.prototype.getImages = function() {
  this.images = [];

  // filter & find items if we have an item selector
  this.elements.forEach( this.addElementImages, this );
};

/**
 * @param {Node} element
 */
ImagesLoaded.prototype.addElementImages = function( elem ) {
  // filter siblings
  if ( elem.nodeName == 'IMG' ) {
    this.addImage( elem );
  }
  // get background image on element
  if ( this.options.background === true ) {
    this.addElementBackgroundImages( elem );
  }

  // find children
  // no non-element nodes, #143
  var nodeType = elem.nodeType;
  if ( !nodeType || !elementNodeTypes[ nodeType ] ) {
    return;
  }
  var childImgs = elem.querySelectorAll('img');
  // concat childElems to filterFound array
  for ( var i=0; i < childImgs.length; i++ ) {
    var img = childImgs[i];
    this.addImage( img );
  }

  // get child background images
  if ( typeof this.options.background == 'string' ) {
    var children = elem.querySelectorAll( this.options.background );
    for ( i=0; i < children.length; i++ ) {
      var child = children[i];
      this.addElementBackgroundImages( child );
    }
  }
};

var elementNodeTypes = {
  1: true,
  9: true,
  11: true
};

ImagesLoaded.prototype.addElementBackgroundImages = function( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    // Firefox returns null if in a hidden iframe https://bugzil.la/548397
    return;
  }
  // get url inside url("...")
  var reURL = /url\((['"])?(.*?)\1\)/gi;
  var matches = reURL.exec( style.backgroundImage );
  while ( matches !== null ) {
    var url = matches && matches[2];
    if ( url ) {
      this.addBackground( url, elem );
    }
    matches = reURL.exec( style.backgroundImage );
  }
};

/**
 * @param {Image} img
 */
ImagesLoaded.prototype.addImage = function( img ) {
  var loadingImage = new LoadingImage( img );
  this.images.push( loadingImage );
};

ImagesLoaded.prototype.addBackground = function( url, elem ) {
  var background = new Background( url, elem );
  this.images.push( background );
};

ImagesLoaded.prototype.check = function() {
  var _this = this;
  this.progressedCount = 0;
  this.hasAnyBroken = false;
  // complete if no images
  if ( !this.images.length ) {
    this.complete();
    return;
  }

  function onProgress( image, elem, message ) {
    // HACK - Chrome triggers event before object properties have changed. #83
    setTimeout( function() {
      _this.progress( image, elem, message );
    });
  }

  this.images.forEach( function( loadingImage ) {
    loadingImage.once( 'progress', onProgress );
    loadingImage.check();
  });
};

ImagesLoaded.prototype.progress = function( image, elem, message ) {
  this.progressedCount++;
  this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
  // progress event
  this.emitEvent( 'progress', [ this, image, elem ] );
  if ( this.jqDeferred && this.jqDeferred.notify ) {
    this.jqDeferred.notify( this, image );
  }
  // check if completed
  if ( this.progressedCount == this.images.length ) {
    this.complete();
  }

  if ( this.options.debug && console ) {
    console.log( 'progress: ' + message, image, elem );
  }
};

ImagesLoaded.prototype.complete = function() {
  var eventName = this.hasAnyBroken ? 'fail' : 'done';
  this.isComplete = true;
  this.emitEvent( eventName, [ this ] );
  this.emitEvent( 'always', [ this ] );
  if ( this.jqDeferred ) {
    var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
    this.jqDeferred[ jqMethod ]( this );
  }
};

// --------------------------  -------------------------- //

function LoadingImage( img ) {
  this.img = img;
}

LoadingImage.prototype = Object.create( EvEmitter.prototype );

LoadingImage.prototype.check = function() {
  // If complete is true and browser supports natural sizes,
  // try to check for image status manually.
  var isComplete = this.getIsImageComplete();
  if ( isComplete ) {
    // report based on naturalWidth
    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
    return;
  }

  // If none of the checks above matched, simulate loading on detached element.
  this.proxyImage = new Image();
  this.proxyImage.addEventListener( 'load', this );
  this.proxyImage.addEventListener( 'error', this );
  // bind to image as well for Firefox. #191
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  this.proxyImage.src = this.img.src;
};

LoadingImage.prototype.getIsImageComplete = function() {
  // check for non-zero, non-undefined naturalWidth
  // fixes Safari+InfiniteScroll+Masonry bug infinite-scroll#671
  return this.img.complete && this.img.naturalWidth;
};

LoadingImage.prototype.confirm = function( isLoaded, message ) {
  this.isLoaded = isLoaded;
  this.emitEvent( 'progress', [ this, this.img, message ] );
};

// ----- events ----- //

// trigger specified handler for event type
LoadingImage.prototype.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

LoadingImage.prototype.onload = function() {
  this.confirm( true, 'onload' );
  this.unbindEvents();
};

LoadingImage.prototype.onerror = function() {
  this.confirm( false, 'onerror' );
  this.unbindEvents();
};

LoadingImage.prototype.unbindEvents = function() {
  this.proxyImage.removeEventListener( 'load', this );
  this.proxyImage.removeEventListener( 'error', this );
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );
};

// -------------------------- Background -------------------------- //

function Background( url, element ) {
  this.url = url;
  this.element = element;
  this.img = new Image();
}

// inherit LoadingImage prototype
Background.prototype = Object.create( LoadingImage.prototype );

Background.prototype.check = function() {
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  this.img.src = this.url;
  // check if image is already complete
  var isComplete = this.getIsImageComplete();
  if ( isComplete ) {
    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
    this.unbindEvents();
  }
};

Background.prototype.unbindEvents = function() {
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );
};

Background.prototype.confirm = function( isLoaded, message ) {
  this.isLoaded = isLoaded;
  this.emitEvent( 'progress', [ this, this.element, message ] );
};

// -------------------------- jQuery -------------------------- //

ImagesLoaded.makeJQueryPlugin = function( jQuery ) {
  jQuery = jQuery || window.jQuery;
  if ( !jQuery ) {
    return;
  }
  // set local variable
  $ = jQuery;
  // $().imagesLoaded()
  $.fn.imagesLoaded = function( options, callback ) {
    var instance = new ImagesLoaded( this, options, callback );
    return instance.jqDeferred.promise( $(this) );
  };
};
// try making plugin
ImagesLoaded.makeJQueryPlugin();

// --------------------------  -------------------------- //

return ImagesLoaded;

});

/*!
 * Flickity imagesLoaded v2.0.0
 * enables imagesLoaded option for Flickity
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( [
      'flickity/js/index',
      'imagesloaded/imagesloaded'
    ], function( Flickity, imagesLoaded ) {
      return factory( window, Flickity, imagesLoaded );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('flickity'),
      require('imagesloaded')
    );
  } else {
    // browser global
    window.Flickity = factory(
      window,
      window.Flickity,
      window.imagesLoaded
    );
  }

}( window, function factory( window, Flickity, imagesLoaded ) {
'use strict';

Flickity.createMethods.push('_createImagesLoaded');

var proto = Flickity.prototype;

proto._createImagesLoaded = function() {
  this.on( 'activate', this.imagesLoaded );
};

proto.imagesLoaded = function() {
  if ( !this.options.imagesLoaded ) {
    return;
  }
  var _this = this;
  function onImagesLoadedProgress( instance, image ) {
    var cell = _this.getParentCell( image.img );
    _this.cellSizeChange( cell && cell.element );
    if ( !_this.options.freeScroll ) {
      _this.positionSliderAtSelected();
    }
  }
  imagesLoaded( this.slider ).on( 'progress', onImagesLoadedProgress );
};

return Flickity;

}));

!function(C){"use strict";var s=function(){var a="sf-breadcrumb",n="sf-js-enabled",t="sf-with-ul",r="sf-arrows",o=((e=/iPhone|iPad|iPod/i.test(navigator.userAgent))&&C("html").css("cursor","pointer").on("click",C.noop),e),i="behavior"in(e=document.documentElement.style)&&"fill"in e&&/iemobile/i.test(navigator.userAgent),h=function(e,t){var s=n;t.cssArrows&&(s+=" "+r),e.toggleClass(s)},l=function(e,t){return e.find("li."+t.pathClass).slice(0,t.pathLevels).addClass(t.hoverClass+" "+a).filter(function(){return C(this).children(t.popUpSelector).hide().show().length}).removeClass(t.pathClass)},d=function(e){e.children("a").toggleClass(t)},p=function(e){var t=e.css("ms-touch-action"),t;e.css("ms-touch-action",t="pan-y"===t?"auto":"pan-y")},u=function(e,t){var s="li:has("+t.popUpSelector+")";C.fn.hoverIntent&&!t.disableHI?e.hoverIntent(c,m,s):e.on("mouseenter.superfish",s,c).on("mouseleave.superfish",s,m);var s="MSPointerDown.superfish";o||(s+=" touchend.superfish"),i&&(s+=" mousedown.superfish"),e.on("focusin.superfish","li",c).on("focusout.superfish","li",m).on(s,"a",t,f)},f=function(e){var t=C(this),s=t.siblings(e.data.popUpSelector);0<s.length&&s.is(":hidden")&&(t.one("click.superfish",!1),"MSPointerDown"===e.type?t.trigger("focus"):C.proxy(c,t.parent("li"))())},c=function(){var e=C(this),t=g(e);0<C(this).parents(".megamenu").length||(clearTimeout(t.sfTimer),e.siblings().superfish("hide").end().superfish("show"))},m=function(){var e=C(this),t=g(e);o?C.proxy(s,e,t)():(clearTimeout(t.sfTimer),t.sfTimer=setTimeout(C.proxy(s,e,t),t.delay))},s=function(e){e.retainPath=-1<C.inArray(this[0],e.$path),this.superfish("hide"),this.parents("."+e.hoverClass).length||(e.onIdle.call(v(this)),e.$path.length&&C.proxy(c,e.$path)())},v=function(e){return e.closest("."+n)},g=function(e){return v(e).data("sf-options")},e,e;return{hide:function(e){if(this.length){var t=this,s=g(this);if(!s)return this;if(C(this).hasClass("menu-item-over")&&C(this).hasClass("megamenu"))return!0;var n=!0===s.retainPath?s.$path:"",a=this.find("li."+s.hoverClass).add(this).not(n).removeClass(s.hoverClass).children(s.popUpSelector),n=s.speedOut,t;if(e&&(a.show(),n=0),s.retainPath=!1,s.onBeforeHide.call(a),"minimal"==s.dropdownStyle?(t=C(this),s.onHide.call(t)):a.stop(!0,!0).animate(s.animationOut,n,function(){var e=C(this);s.onHide.call(e)}),0<C(this).parents(".megamenu").length)return;0<C('#header-outer[data-megamenu-rt="1"]').length&&0<C('#header-outer[data-transparent-header="true"]').length&&(0==C("#header-outer.scrolled-down").length&&0==C("#header-outer.small-nav").length&&0==C("#header-outer.detached").length&&0==C("#header-outer.fixed-menu").length&&C("#header-outer").addClass("transparent"),0<C('#header-outer[data-permanent-transparent="1"][data-transparent-header="true"]').length&&C("#header-outer").addClass("transparent"))}return this},show:function(){if(!(0<C(this).parents(".megamenu").length)){var e=g(this);if(!e)return this;var t,s=this.addClass(e.hoverClass).children(e.popUpSelector),n,a,r,o,i,h;return 0<C('#header-outer[data-megamenu-rt="1"]').length&&C(this).hasClass("megamenu")&&"true"==C("#header-outer").attr("data-transparent-header")&&(C("#header-outer").addClass("no-transition"),C("#header-outer").removeClass("transparent")),e.onBeforeShow.call(s),C(s).parents("li").hasClass("megamenu")||C(s).parents("ul").hasClass("sub-menu")||!s.offset()||(s.addClass("temp-hidden-display"),n=C("#top .container").width(),(a=s).offset().left-(C(window).width()-n)/2+a.width()<=C(window).width()-100?s.parents("li").removeClass("edge"):s.parents("li").addClass("edge"),s.removeClass("temp-hidden-display")),"minimal"==e.dropdownStyle?e.onShow.call(s):s.stop(!0,!0).animate(e.animation,e.speed,function(){e.onShow.call(s)}),0<s.length&&0<s.parents(".sub-menu").length&&0<s.parents(".sf-menu").length&&s.offset().left+s.outerWidth()>C(window).width()&&(s.addClass("on-left-side"),s.find("ul").addClass("on-left-side")),this}},destroy:function(){return this.each(function(){var e=C(this),t=e.data("sf-options"),s;if(!t)return!1;s=e.find(t.popUpSelector).parent("li"),clearTimeout(t.sfTimer),h(e,t),d(s),p(e),e.off(".superfish").off(".hoverIntent"),s.children(t.popUpSelector).attr("style",function(e,t){return t.replace(/display[^;]+;?/g,"")}),t.$path.removeClass(t.hoverClass+" "+a).addClass(t.pathClass),e.find("."+t.hoverClass).removeClass(t.hoverClass),t.onDestroy.call(e),e.removeData("sf-options")})},init:function(n){return this.each(function(){var e=C(this);if(e.data("sf-options"))return!1;var t=C.extend({},C.fn.superfish.defaults,n),s=e.find(t.popUpSelector).parent("li");t.$path=l(e,t),e.data("sf-options",t),h(e,t),d(s),p(e),u(e,t),s.not("."+a).superfish("hide",!0),t.onInit.call(this)})}}}();C.fn.superfish=function(e,t){return s[e]?s[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?C.error("Method "+e+" does not exist on jQuery.fn.superfish"):s.init.apply(this,arguments)},C.fn.superfish.defaults={popUpSelector:"ul,.sf-mega",hoverClass:"sfHover",pathClass:"overrideThisToUse",pathLevels:1,delay:800,animation:{opacity:"show"},animationOut:{opacity:"hide"},speed:"normal",speedOut:"fast",cssArrows:!0,disableHI:!1,onInit:C.noop,onBeforeShow:C.noop,onShow:C.noop,onBeforeHide:C.noop,onHide:C.noop,onIdle:C.noop,onDestroy:C.noop,dropdownStyle:0<C('body[data-dropdown-style="minimal"]').length?"minimal":"classic"},C.fn.extend({hideSuperfishUl:s.hide,showSuperfishUl:s.show})}(jQuery);
!function(T,I,z){"use strict";var k=T(I),E=T("body"),i=T("#slide-out-widget-area"),a=T("#slide-out-widget-area-bg"),c=T("#header-outer"),h=T("#header-secondary-outer"),n=T("#header-outer #search-btn a"),o=T("#wpadminbar"),r=T("#ajax-loading-screen"),d=T(".body-border-top"),s=T("#page-header-bg"),l=T("#footer-outer"),p=0<T(".body-border-right").length?T(".body-border-right").width():0,u=c.is("[data-logo-height]")?parseInt(c.attr("data-logo-height")):30,g=c.is("[data-padding]")?parseInt(c.attr("data-padding")):28,f=c.is("[data-shrink-num]")?c.attr("data-shrink-num"):6,m=!!c.is('[data-condense="true"]'),t=!!c.is('[data-using-logo="1"]'),b=!!c.is('[data-header-resize="1"]'),v=!!c.is('[data-transparent-header="true"]'),w=E.is("[data-header-format]")?E.attr("data-header-format"):"default",y=E.is("[data-hhun]")?E.attr("data-hhun"):"",_=E.is("[data-cae]")&&"swing"!==E.attr("data-cae")?E.attr("data-cae"):"easeOutCubic",C=E.is("[data-cad]")?E.attr("data-cad"):"650",x=!(E.is('[data-m-animate="1"]')||!navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/)),H=[],A=[],M=[],O=[],S=[],F=[],$=[],W=[],j=[],Y=[],B=[],q=[],P=[],L=[],R=[],N=[],V=[],X=[],D=[],Q=0,Z="",U=!1,G=!1,J={animating:"false",perspect:"not-rolled"},K={$usingFullScreenRows:!1},e,ee;0<d.length&&("#ffffff"==d.css("background-color")&&"light"==E.attr("data-header-color")||"rgb(255, 255, 255)"==d.css("background-color")&&"light"==E.attr("data-header-color")||d.css("background-color")==c.attr("data-user-set-bg"))&&(G=!0);var te={usingMobileBrowser:!!navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/),usingFrontEndEditor:void 0!==I.vc_iframe,getWindowSize:function(){te.winH=I.innerHeight,te.winW=I.innerWidth,te.adminBarHeight=0<o.length?o.height():0,te.secondaryHeaderHeight=0<h.length&&"none"!=h.css("display")?h.outerHeight():0,te.footerOuterHeight=0<l.length?l.outerHeight():0},scrollTop:0,clientX:0,clientY:0,scrollPosMouse:function(){return k.scrollTop()},scrollPosRAF:function(){te.scrollTop=k.scrollTop(),requestAnimationFrame(te.scrollPosRAF)},bindEvents:function(){te.usingMobileBrowser?requestAnimationFrame(te.scrollPosRAF):k.on("scroll",function(){te.scrollTop=te.scrollPosMouse()}),z.addEventListener("mousemove",function(e){te.clientX=e.clientX,te.clientY=e.clientY}),k.on("resize",te.getWindowSize)},init:function(){o=T("#wpadminbar"),this.getWindowSize(),this.scrollTop=this.scrollPosMouse(),this.bindEvents(),this.usingFrontEndEditor=void 0!==I.vc_iframe}};function ae(){Wt(),Mt(),An(),Fa(),fe()}function ne(){zt(),Wt(),ge(),ya(),te.usingMobileBrowser||Mt()}function ie(){T(".flex-gallery").each(function(){var e;T().flexslider&&(e=T(this),imagesLoaded(T(this),function(){e.flexslider({animation:"fade",smoothHeight:!1,animationSpeed:500,useCSS:!1,touch:!0}),T(".flex-gallery .flex-direction-nav li a.flex-next").html('<i class="fa fa-angle-right"></i>'),T(".flex-gallery .flex-direction-nav li a.flex-prev").html('<i class="fa fa-angle-left"></i>')}))})}function se(e,t){this.lastX=te.clientX,this.lastY=te.clientY,this.$el=e,this.iconType=t,this.timeout=!1,this.overEl=!1,this.$dragEl="",this.$viewEl="",this.$closeEl="",this.lerpDamp=.18,this.createMarkup(),this.mouseBind()}function re(){T('.wpb_gallery_slidesflickity_static_height_style .cell[data-lazy="true"]').each(function(){T(this).css({height:"",width:""});var e=parseInt(T(this).find("img").attr("height")),t,e=We(parseInt(T(this).find("img").attr("width")),e,2e3,parseInt(T(this).find("img").height()));T(this).css({height:e.height+"px",width:e.width+"px"})})}function oe(){0<T('.wpb_gallery_slidesflickity_static_height_style .cell[data-lazy="true"]').length&&(re(),k.on("smartresize",re))}function le(){if(0==T(".nectar-flickity:not(.masonry)").length)return!1;var e;O=[],S=[],T(".nectar-flickity:not(.masonry)").each(function(d){T(this).removeClass(function(e,t){return(t.match(/(^|\s)instance-\S+/g)||[]).join(" ")}),T(this).addClass("instance-"+d);var e=!(!T(this).is("[data-free-scroll]")||"true"!=T(this).attr("data-free-scroll")),t=!0,a=!0,n=.025,i=!1,s=!0,r="center";T(this).is('[data-format="fixed_text_content_fullwidth"]')&&(a=t=!(r="left"),n=.02,T(this).parent().is('[data-alignment="right"]')&&(r="right")),1==e&&(t=!1),s=0<T(this).attr("data-controls").length&&"next_prev_arrows"==T(this).attr("data-controls")||0<T(this).attr("data-controls").length&&"next_prev_arrows_overlaid"==T(this).attr("data-controls")?!(i=!1):!(i=!0),0<T(this).attr("data-controls").length&&"none"==T(this).attr("data-controls")&&(s=i=!1);var o=!1;T(this).is("[data-autoplay]")&&"true"==T(this).attr("data-autoplay")&&(o=!0,T(this).is("[data-autoplay-dur]")&&0<T(this).attr("data-autoplay-dur").length&&100<parseInt(T(this).attr("data-autoplay-dur"))&&parseInt(T(this).attr("data-autoplay-dur"))<3e4&&(o=parseInt(T(this).attr("data-autoplay-dur"))));var c=T(this),l=!(0<T("body.vc_editor").length),h=0<T("body.vc_editor").length,u="",p=!T(this).is("[data-wrap]")||"no-wrap"!=T(this).attr("data-wrap"),g=!1;T(this).is('[data-adaptive-height="true"]')&&(g=!0);var f=!!T(this).find("img[data-flickity-lazyload]")&&1;T(this).find("img[data-flickity-lazyload]")&&T(this).is('[data-overflow="visible"]')&&T(this).is('[data-wrap="no-wrap"]')&&(f=2);var m=!!E.hasClass("rtl"),b,v,w,y,_,C,x,u=0<T(this).attr("data-controls").length&&"next_prev_arrows_overlaid"==T(this).attr("data-controls")||0<T(this).attr("data-controls").length&&"touch_total"==T(this).attr("data-controls")?{x0:10,x1:60,y1:50,x2:70,y2:40,x3:30}:{x0:20,x1:70,y1:30,x2:70,y2:25,x3:70};O[d]=new Flickity(".nectar-flickity.instance-"+d,{contain:a,draggable:l,lazyLoad:f,imagesLoaded:!0,percentPosition:!0,adaptiveHeight:g,cellAlign:r,groupCells:t,prevNextButtons:s,freeScroll:e,pageDots:i,resize:!0,selectedAttraction:n,autoPlay:o,rightToLeft:m,pauseAutoPlayOnHover:h,setGallerySize:!0,wrapAround:p,accessibility:!1,arrowShape:u}),T(this).is('[data-controls="touch_total"]')&&(0==T(this).find(".visualized-total").length&&(0<T(this).parents(".full-width-content").length&&0<T(this).parents(".vc_col-sm-12").length?T(this).append('<div class="container normal-container"><div class="visualized-total"><span></span></div></div>'):T(this).append('<div class="visualized-total"><span></span></div>')),te.usingMobileBrowser||(S[d]=new se(T(this),"horizontal-movement"),O[d].on("dragMove",function(e,t){te.clientY=t.clientY,te.clientX=t.clientX}),O[d].on("pointerDown",function(e,t){T(".nectar-drag-indicator").addClass("pointer-down")}),O[d].on("pointerUp",function(e,t){T(".nectar-drag-indicator").removeClass("pointer-down")})),b=T(this).find(".flickity-page-dots li").length,v=T(this).find(".visualized-total span"),w=1,y=T(this).find(".visualized-total").width(),k.on("smartresize",function(){setTimeout(function(){b=c.find(".flickity-page-dots li").length,y=c.find(".visualized-total").width(),w=y/b*c.find(".flickity-page-dots .is-selected").index(),v.css("width",100/b+"%"),v.css({x:w+"px"})},200)}),setTimeout(function(){b=c.find(".flickity-page-dots li").length,y=c.find(".visualized-total").width(),v.css("width",100/b+"%")},200),O[d].on("change",function(e,t){w=y/b*c.find(".flickity-page-dots .is-selected").index(),v.css({x:w+"px"})})),T(this).is('[data-format="fixed_text_content_fullwidth"]')&&!te.usingFrontEndEditor&&(_=te.usingMobileBrowser,O[d].on("scroll",function(){var o,e,l;_||(o=c.find(".cell").outerWidth()+25,e=0<T('body[data-header-format="left-header"]').length&&1e3<k.width()?275:0,l=(k.width()+e-c.parents(".main-content").width())/2,l+=parseInt(c.css("margin-left"))+2,O[d].slides.forEach(function(e,t){var a=1,n=0,i=0,s=10,r=1,e=T(e.cells[0].element).offset().left,t=T(".nectar-flickity.instance-"+d+" .cell:nth-child("+(t+1)+")"),i=e-l<0&&-1*o<e-l?(a=1+(e-l)/1500,r=1+(e-l+70)/550,n=-1*(e-l),(e-l)/25*-1):(r=a=1,n=0),s;t.css({"z-index":s=e+5-l<0&&-1*o<e-l?5:10}),t.find(".inner-wrap-outer").css({transform:"perspective(800px) translateX("+n+"px) rotateY("+i+"deg) translateZ(0)",opacity:r}),t.find(".inner-wrap").css({transform:"scale("+a+") translateZ(0)"})}))})),O[d].on("dragStart",function(){clearTimeout(C),clearTimeout(x),c.addClass("is-dragging"),c.addClass("is-moving"),c.find(".flickity-prev-next-button").addClass("hidden")}),O[d].on("dragEnd",function(){c.removeClass("is-dragging"),C=setTimeout(function(){c.removeClass("is-moving"),c.find(".flickity-prev-next-button").removeClass("hidden")},600),x=setTimeout(function(){c.removeClass("is-moving")},300)}),T(".flickity-prev-next-button").on("click",function(){clearTimeout(C),T(this).parents(".nectar-flickity").find(".flickity-prev-next-button").addClass("hidden"),C=setTimeout(function(){c.find(".flickity-prev-next-button").removeClass("hidden")},600)}),c.hasClass("nectar-carousel")&&imagesLoaded(c,function(){ce(c)})}),0<T(".nectar-carousel.nectar-flickity:not(.masonry)").length&&k.on("resize",de)}function de(){T(".nectar-carousel.nectar-flickity:not(.masonry)").each(function(){ce(T(this))})}function ce(e){var t=0;e.find(".flickity-slider > .cell").css("height","auto"),e.find(".flickity-slider > .cell").each(function(){T(this).height()>t&&(t=T(this).height())}),t<10&&(t="auto"),e.find(".flickity-slider > .cell").css("height",t+"px")}function he(){T(".twentytwenty-container").each(function(){var e=T(this);0==e.find(".twentytwenty-handle").length&&T(this).imagesLoaded(function(){e.twentytwenty()})})}function ue(){var e,e;ge(),0==T('body[data-header-format="left-header"]').length&&(e=!(0<T('#header-outer[data-megamenu-rt="1"]').length&&0<T('#header-outer[data-transparent-header="true"]').length),T(".sf-menu:not(.buttons)").superfish({delay:650,speed:"fast",disableHI:e,speedOut:"fast",animation:{opacity:"show"}}),T("#header-outer .sf-menu.buttons li.menu-item").on("mouseover",function(){T(this).addClass("sfHover")}),T("#header-outer .sf-menu.buttons li.menu-item").on("mouseleave",function(){var e=T(this);e.is(".menu-item-has-children")?setTimeout(function(){e.is(":hover")||e.removeClass("sfHover")},200):e.removeClass("sfHover")}),T("#header-secondary-outer li.megamenu, .sf-menu.buttons li.megamenu").removeClass("megamenu"),T("#header-outer .sf-menu > li:not(.megamenu) > ul > li > ul").each(function(){T(this).offset().left+T(this).outerWidth()>k.width()&&(T(this).addClass("on-left-side"),T(this).find("ul").addClass("on-left-side"))}),T('body:not([data-header-format="left-header"]) header#top nav > ul > li.megamenu > ul > li > ul > li:has("> ul")').addClass("has-ul"),0<T('body[data-megamenu-width="full-width"]').length&&0<T("ul.sub-menu").length&&(pe(),k.on("smartresize",pe),T("header#top nav > ul > li.megamenu > .sub-menu").css("box-sizing","content-box")),T("header#top nav > ul.sf-menu > li.menu-item").on("mouseenter",function(){T(this).addClass("menu-item-over")}),T("header#top nav > ul.sf-menu > li.menu-item").on("mouseleave",function(){T(this).removeClass("menu-item-over")}),T("header#top nav .megamenu .sub-menu a.sf-with-ul .sf-sub-indicator, header#top .megamenu .sub-menu a .sf-sub-indicator").remove(),T("header#top nav > ul > li.megamenu > ul.sub-menu > li > a").each(function(){"-"!=T(this).text()&&"???"!=T(this).text()&&!T(this).parent().hasClass("hide-title")||T(this).remove()})),te.usingMobileBrowser&&0==T('#header-outer[data-remove-fixed="1"]').length&&E.attr("data-hhun","0")}function pe(){var e=k.width(),t=T("header#top > .container").width();T("header#top nav > ul > li.megamenu > .sub-menu").css({"padding-left":(e-t)/2+"px","padding-right":(e+2-t)/2+"px",width:t,left:"-"+(e-t)/2+"px"})}function ge(){te.winW<1e3&&"1"==E.attr("data-responsive")?(E.addClass("mobile"),T("header#top nav").css("display","none")):(E.removeClass("mobile"),T("header#top nav").css("display",""),T(".slide-out-widget-area-toggle #toggle-nav .lines-button").removeClass("close"))}function fe(){T("#header-outer .sf-menu > li:not(.megamenu) > ul > li > ul").each(function(){T(this).removeClass("on-left-side"),T(this).offset().left+T(this).outerWidth()>k.width()?(T(this).addClass("on-left-side"),T(this).find("ul").addClass("on-left-side")):(T(this).removeClass("on-left-side"),T(this).find("ul").removeClass("on-left-side"))})}function me(){0!=T(".carousel").length&&("undefined"!=typeof SalientRecentProjectsCarousel&&T("ul.carousel.portfolio-items").each(function(e){V[e]=new SalientRecentProjectsCarousel(T(this))}),T('ul.carousel:not(".clients"):not(.portfolio-items)').each(function(){var e=T(this),t="true"==T(this).parents(".carousel-wrap").attr("data-full-width")?"auto":3,a="true"==T(this).parents(".carousel-wrap").attr("data-full-width")?"auto":"",n="true"==T(this).parents(".carousel-wrap").attr("data-full-width")?500:453,i="true"==T(this).attr("data-autorotate"),s=!0,r=!0,o,l,r=!(0<T("body.ascend").length&&"true"!=T(this).parents(".carousel-wrap").attr("data-full-width")||0<T("body.material").length&&"true"!=T(this).parents(".carousel-wrap").attr("data-full-width"))||T(this).find("li").length%3==0?s=!0:!(s=!1),o=parseInt(T(this).attr("data-scroll-speed"))?parseInt(T(this).attr("data-scroll-speed")):700,l=T(this).is("[data-easing]")?T(this).attr("data-easing"):"linear",d=e;0==e.find("img").length&&(d=E),imagesLoaded(d,function(){e.carouFredSel({circular:s,infinite:r,height:"auto",responsive:!0,items:{width:n,visible:{min:1,max:t}},swipe:{onTouch:!0,onMouse:!0,options:{excludedElements:"button, input, select, textarea, .noSwipe",tap:function(e,t){!T(t).attr("href")||T(t).is('[target="_blank"]')||T(t).is('[rel^="prettyPhoto"]')||T(t).is(".magnific-popup")||T(t).is(".magnific")||I.open(T(t).attr("href"),"_self")}},onBefore:function(){e.find(".work-item").trigger("mouseleave"),e.find(".work-item .work-info a").trigger("mouseup")}},scroll:{items:a,easing:l,duration:o,onBefore:function(){(0<T("body.ascend").length&&"true"!=e.parents(".carousel-wrap").attr("data-full-width")||0<T("body.material").length&&"true"!=e.parents(".carousel-wrap").attr("data-full-width"))&&e.parents(".carousel-wrap").find(".item-count .total").html(Math.ceil(e.find("> li").length/e.triggerHandler("currentVisible").length))},onAfter:function(){(0<T("body.ascend").length&&"true"!=e.parents(".carousel-wrap").attr("data-full-width")||0<T("body.material").length&&"true"!=e.parents(".carousel-wrap").attr("data-full-width"))&&(e.parents(".carousel-wrap").find(".item-count .current").html(e.triggerHandler("currentPage")+1),e.parents(".carousel-wrap").find(".item-count .total").html(Math.ceil(e.find("> li").length/e.triggerHandler("currentVisible").length)))}},prev:{button:function(){return e.parents(".carousel-wrap").find(".carousel-prev")}},next:{button:function(){return e.parents(".carousel-wrap").find(".carousel-next")}},auto:{play:i}},{transition:!0}).animate({opacity:1},1300),e.parents(".carousel-wrap").wrap('<div class="carousel-outer">'),"true"==e.parents(".carousel-wrap").attr("data-full-width")&&e.parents(".carousel-outer").css("overflow","visible"),(0<T("body.ascend").length&&"true"!=e.parents(".carousel-wrap").attr("data-full-width")||0<T("body.material").length&&"true"!=e.parents(".carousel-wrap").attr("data-full-width"))&&T('<div class="item-count"><span class="current">1</span>/<span class="total">'+e.find("> li").length/e.triggerHandler("currentVisible").length+"</span></div>").insertAfter(e.parents(".carousel-wrap").find(".carousel-prev")),e.addClass("finished-loading"),Ce()})}),k.off("smartresize.carouselHeightCalcs"),k.on("smartresize.carouselHeightCalcs",Ce))}function be(){var t=0,a=0,e=".carousel-wrap .portfolio-items .col .work-info a, .woocommerce .products-carousel ul.products li.product a";T(e).on("mousedown",function(e){t=e.clientX}),T(e).on("mouseup",function(e){a=e.clientX}),T(e).on("click",function(){if(10<Math.abs(t-a))return!1})}function ve(){0!==T(".owl-carousel").length&&T(".owl-carousel").each(function(){T(this).addClass("owl-theme");var e=T(this),t=e.attr("data-autorotate"),a=e.attr("data-autorotation-speed"),n=!!e.is('[data-loop="true"]'),i=!!E.hasClass("rtl");T(this).owlCarousel({responsive:{0:{items:T(this).attr("data-mobile-cols")},690:{items:T(this).attr("data-tablet-cols")},1e3:{items:T(this).attr("data-desktop-small-cols")},1300:{items:T(this).attr("data-desktop-cols")}},autoplay:t,autoplayTimeout:a,loop:n,rtl:i,smartSpeed:350,onTranslate:function(){e.addClass("moving")},onTranslated:function(){e.removeClass("moving")}}),T(this).on("changed.owl.carousel",function(e){e.item.count-e.page.size==e.item.index&&T(e.target).find(".owl-dots div:last").addClass("active").siblings().removeClass("active")})})}function we(){T(Z+'.owl-carousel[data-enable-animation="true"]').each(function(){var e=1==U?"200%":"bottom-in-view",t=0;T(this).is("[data-animation-delay]")&&0<T(this).attr("data-animation-delay").length&&"false"!=T(this).attr("data-animation")&&(t=T(this).attr("data-animation-delay"));var a=T(this),n=new Waypoint({element:a,handler:function(){0<a.parents(".wpb_tab").length&&"hidden"==a.parents(".wpb_tab").css("visibility")||a.hasClass("animated-in")||setTimeout(function(){a.find(".owl-stage > .owl-item").each(function(e){var t;T(this).delay(200*e).transition({opacity:"1",y:"0"},600,"easeOutQuart")}),a.addClass("animated-in")},t),n.destroy()},offset:e})})}function ye(e){var t=e.data.wooFlickity.selectedIndex+1;e.data.wooFlickityCount.text(t+"/"+e.data.wooFlickity.slides.length)}function _e(){0===T(".products-carousel").length&&0===T(".nectar-woo-flickity").length||(T(".products-carousel").each(function(){var e=T(this).find("ul"),t="auto",a="auto",n=0<T(this).parents(".full-width-content ").length?400:353,i=800,s="easeInOutQuart",r=e;0==e.find("img").length&&(r=E),T(this).append('<a class="carousel-prev" href="#"><i class="icon-salient-left-arrow"></i></a> <a class="carousel-next" href="#"><i class="icon-salient-right-arrow"></i></a>'),imagesLoaded(r,function(){e.carouFredSel({circular:!0,responsive:!0,items:{width:n,visible:{min:1,max:t}},swipe:{onTouch:!0,onMouse:!0,options:{excludedElements:"button, input, select, textarea, .noSwipe",tap:function(e,t){!T(t).attr("href")||T(t).is('[target="_blank"]')||T(t).hasClass("add_to_wishlist")||T(t).hasClass("add_to_cart_button")||T(t).is('[rel^="prettyPhoto"]')||I.open(T(t).attr("href"),"_self"),!T(t).parent().attr("href")||T(t).parent().is('[target="_blank"]')||T(t).parent().hasClass("add_to_wishlist")||T(t).parent().hasClass("add_to_cart_button")||T(t).parent().is('[rel^="prettyPhoto"]')||I.open(T(t).parent().attr("href"),"_self")}},onBefore:function(){e.find(".product-wrap").trigger("mouseleave"),e.find(".product a").trigger("mouseup")}},scroll:{items:a,easing:s,duration:i},prev:{button:function(){return e.parents(".carousel-wrap").find(".carousel-prev")}},next:{button:function(){return e.parents(".carousel-wrap").find(".carousel-next")}},auto:{play:!1}}).animate({opacity:1},1300),e.parents(".carousel-wrap").wrap('<div class="carousel-outer">'),e.addClass("finished-loading"),Wt(),k.trigger("resize")})}),Y=[],T(".nectar-woo-flickity").each(function(e){var a=T(this);T(this).find(".products > li").each(function(){T(this).wrap('<div class="flickity-cell"></div>')}),zt();var t=!!a.is('[data-controls="bottom-pagination"]'),n=!a.is('[data-controls="bottom-pagination"]'),i=a.is("[data-autorotate-speed]")&&800<parseInt(a.attr("data-autorotate-speed"))?parseInt(a.attr("data-autorotate-speed")):5e3;a.is('[data-autorotate="true"]')||(i=!1),T(this).find("ul").addClass("generate-markup"),Y[e]=T(this).find("ul"),1==n&&Y[e].on("ready.flickity",function(){var e=a.find(".flickity-prev-next-button.previous").detach(),t=a.find(".flickity-prev-next-button.next").detach();a.find(".nectar-woo-carousel-top").append(e).append(t)});var s=!1,r="left",i,n,o;E.hasClass("rtl")&&(s=!0,r="right"),Y[e].flickity({draggable:!0,lazyLoad:!1,imagesLoaded:!0,cellAlign:r,groupCells:t,prevNextButtons:n,pageDots:t,resize:!0,percentPosition:!0,setGallerySize:!0,rightToLeft:s,wrapAround:!0,autoPlay:i,accessibility:!1}),1==n&&(a.find(".flickity-prev-next-button").append('<svg width="65px" height="65px" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg"><circle stroke-width="3" fill="none" stroke-linecap="round" cx="33" cy="33" r="28"></circle> <circle class="time" stroke-width="3" fill="none" stroke-linecap="round" cx="33" cy="33" r="28"></circle></svg>'),i=T('<div class="woo-flickity-count" />'),a.append(i),ye({data:{wooFlickity:n=Y[e].data("flickity"),wooFlickityCount:i}}),Y[e].on("select.flickity",{wooFlickity:n,wooFlickityCount:i},ye))}))}function Ce(){T('.carousel.finished-loading:not(".portfolio-items, .clients"), .caroufredsel_wrapper .products.finished-loading').each(function(){var e=0;T(this).find("> li").each(function(){T(this).height()>e&&(e=T(this).height())}),T(this).css("height",e+5),T(this).parents(".caroufredsel_wrapper").css("height",e+5),(0<T("body.ascend").length&&"true"!=T(this).parents(".carousel-wrap").attr("data-full-width")||0<T("body.material").length&&"true"!=T(this).parents(".carousel-wrap").attr("data-full-width"))&&(T(this).parents(".carousel-wrap").find(".item-count .current").html(Math.ceil((T(this).triggerHandler("currentPosition")+1)/T(this).triggerHandler("currentVisible").length)),T(this).parents(".carousel-wrap").find(".item-count .total").html(Math.ceil(T(this).find("> li").length/T(this).triggerHandler("currentVisible").length)))})}function xe(){0!==T(".carousel.clients").length&&(T(".carousel.clients").each(function(){var e=T(this),t=!T(this).hasClass("disable-autorotate"),a,a=parseInt(T(this).attr("data-max"))?parseInt(T(this).attr("data-max")):5;k.width()<690&&"1"==E.attr("data-responsive")&&(a=2,T(this).addClass("phone"));var n=e;0==e.find("img").length&&(n=E),imagesLoaded(n,function(){e.carouFredSel({circular:!0,responsive:!0,items:{height:e.find("> div:first").height(),width:e.find("> div:first").width(),visible:{min:1,max:a}},swipe:{onTouch:!0,onMouse:!0},scroll:{items:1,easing:"easeInOutCubic",duration:"800",pauseOnHover:!0},auto:{play:t,timeoutDuration:2700}}).animate({opacity:1},1300),e.addClass("finished-loading"),e.parents(".carousel-wrap").wrap('<div class="carousel-outer">'),k.trigger("resize")})}),k.off("smartresize.clientsCarouselHeight",ke),k.on("smartresize.clientsCarouselHeight",ke))}function ke(){var e=0;T(".carousel.clients.finished-loading").each(function(){T(this).find("> div").each(function(){T(this).height()>e&&(e=T(this).height())}),T(this).css("height",e),T(this).parent().css("height",e)})}function Te(){E.on("mousedown",'.caroufredsel_wrapper, .carousel-wrap[data-full-width="true"] .portfolio-items .col .work-info a, .woocommerce .products-carousel ul.products li.product a',function(){T(this).addClass("active")}),E.on("mouseup",'.caroufredsel_wrapper, .carousel-wrap[data-full-width="true"] .portfolio-items .col .work-info a, .woocommerce .products-carousel ul.products li.product a',function(){T(this).removeClass("active")}),T("body.ascend, body.material").on("mouseover",".carousel-next",function(){T(this).parent().find(".carousel-prev, .item-count").addClass("next-hovered")}),T("body.ascend, body.material").on("mouseleave",".carousel-next",function(){T(this).parent().find(".carousel-prev, .item-count").removeClass("next-hovered")})}function Ie(){var a=1==U?"200%":"95%";T(Z+".clients.fade-in-animation").each(function(){var e=T(this),t=new Waypoint({element:e,handler:function(){0<e.parents(".wpb_tab").length&&"hidden"==e.parents(".wpb_tab").css("visibility")||e.hasClass("animated-in")||(e.find("> div").each(function(e){T(this).delay(80*e).transition({opacity:"1"},450)}),setTimeout(function(){e.addClass("completed")},80*e.find("> div").length+450),e.addClass("animated-in")),t.destroy()},offset:a})})}se.prototype.createMarkup=function(){var e,e,e;"horizontal-movement"===this.iconType&&(0==T(".nectar-drag-indicator").length?(e=0<T("body > #boxed").length?" in-boxed":"",T("body").append('<div class="nectar-drag-indicator'+e+'"><span><i class="fa fa-angle-left"></i><i class="fa fa-angle-right"></i></span></div>'),this.$dragEl=T(".nectar-drag-indicator"),this.dragRAF()):this.$dragEl=T(".nectar-drag-indicator")),"view-indicator"===this.iconType&&(0==T(".nectar-view-indicator").length?(e=0<T("body > #boxed").length?" in-boxed":"",T("body").append('<div class="nectar-view-indicator'+e+'"><div class="color-circle"></div><span></span></div>'),T(".nectar-view-indicator span").text(T(".nectar-post-grid").attr("data-indicator-text")),this.$viewEl=T(".nectar-view-indicator"),this.viewRAF()):this.$viewEl=T(".nectar-view-indicator")),"close-indicator"===this.iconType&&(0==T(".nectar-view-indicator").length?(e=0<T("body > #boxed").length?" in-boxed":"",T("body").append('<div class="nectar-close-indicator'+e+'"><div class="inner"></div></div>'),this.$closeEl=T(".nectar-close-indicator"),this.closeRAF()):this.$closeEl=T(".nectar-close-indicator")),"post-grid-images"===this.iconType&&(this.$el.hasClass("mouse-move-bound")?this.$viewEl=this.$el.find(".nectar-post-grid-item-bg-wrap"):(this.$viewEl=this.$el.find(".nectar-post-grid-item-bg-wrap"),this.$el.addClass("mouse-move-bound")),this.viewRAF())},se.prototype.mouseBind=function(){var e=this,t,a;"horizontal-movement"===this.iconType?(e.$el.find(".flickity-viewport").on("mouseenter",function(){e.$dragEl.addClass("visible")}),e.$el.find(".flickity-viewport").on("mouseleave",function(){e.$dragEl.removeClass("visible")})):"close-indicator"===this.iconType?(T("body").on("click",'.team-member[data-style*="bio_fullscreen"]',function(){0<T(".nectar_team_member_overlay:not(.open)").length||(e.$closeEl.addClass("visible"),e.$closeEl.find(".inner").addClass("visible"))}),T("body").on("click",".nectar_team_member_overlay:not(.animating)",function(){e.$closeEl.removeClass("visible"),e.$closeEl.find(".inner").removeClass("visible")}),T("body").on("mouseenter",".nectar_team_member_overlay .bottom_meta a",function(){e.$closeEl.removeClass("visible")}),T("body").on("mouseleave",".nectar_team_member_overlay .bottom_meta a",function(){e.$closeEl.addClass("visible")})):"view-indicator"===this.iconType?(t=e.$el.attr("data-indicator-color"),a=e.$el.attr("data-indicator-style"),e.$el.find(".nectar-post-grid-item").off(),e.$el.find(".nectar-post-grid-item").on("mouseenter",function(){e.$viewEl.addClass("visible"),e.$viewEl.attr("class",function(e,t){return t.replace(/(^|\s)style-\S+/g,"")}),e.$viewEl.addClass("style-"+a),"see-through"!==a&&e.$viewEl.find(".color-circle").css("background-color",t),clearTimeout(e.timeout)}),e.$el.find(".nectar-post-grid-item").on("mouseleave",function(){e.timeout=setTimeout(function(){e.$viewEl.removeClass("visible")},100)}),e.$el.find(".nectar-post-grid-item .meta-category a").on("mouseenter",function(){e.$viewEl.removeClass("visible")}),e.$el.find(".nectar-post-grid-item .meta-category a").on("mouseleave",function(){e.$viewEl.addClass("visible")})):"post-grid-images"===this.iconType&&(e.$el.on("mouseenter",function(){T(this).addClass("mouse-over")}),e.$el.on("mouseleave",function(){T(this).removeClass("mouse-over")}))},se.prototype.dragRAF=function(){this.lastY=$e(this.lastY,te.clientY,this.lerpDamp),this.lastX=$e(this.lastX,te.clientX,this.lerpDamp),this.$dragEl.css({transform:"translateX("+this.lastX+"px) translateY("+this.lastY+"px)"}),requestAnimationFrame(this.dragRAF.bind(this))},se.prototype.viewRAF=function(){this.lastY=$e(this.lastY,te.clientY,this.lerpDamp),this.lastX=$e(this.lastX,te.clientX,this.lerpDamp),this.$viewEl.css({transform:"translateX("+this.lastX+"px) translateY("+this.lastY+"px)"}),requestAnimationFrame(this.viewRAF.bind(this))},se.prototype.closeRAF=function(){this.lastY=$e(this.lastY,te.clientY,this.lerpDamp),this.lastX=$e(this.lastX,te.clientX,this.lerpDamp),this.$closeEl.css({transform:"translateX("+this.lastX+"px) translateY("+this.lastY+"px)"}),requestAnimationFrame(this.closeRAF.bind(this))},k.on("orientationchange",function(){setTimeout(ke,200)}),I.requestAnimationFrame=I.requestAnimationFrame||I.mozRequestAnimationFrame||I.webkitRequestAnimationFrame||I.msRequestAnimationFrame||function(e){setTimeout(e,1e3/60)};var ze=T.event,Ee=T.event.handle?"handle":"dispatch",He,Ae,Me,Oe,Se,Fe;function $e(e,t,a){return(1-a)*e+a*t}function We(e,t,a,n){var n=Math.min(a/e,n/t);return{width:e*n,height:t*n}}function je(){var e,e,t,t,e;return e=E.is('[data-header-format="left-header"]')&&1e3<=te.winW||E.is('[data-hhun="1"]')&&1e3<=te.winW||0<T(".page-template-template-no-header-footer").length||0<T(".page-template-template-no-header").length?0:(e=g-g/1.8,t=c.outerHeight(),(0<h.length&&E.is(".material")||0<h.length&&!E.is(".material")&&te.winW<1e3)&&(t-=te.secondaryHeaderHeight),c.is('[data-header-resize="1"]')&&!c.is(".small-nav")&&1e3<=te.winW?t-(parseInt(f)+2*e):t),1e3<=te.winW&&0<T('#header-outer[data-condense="true"]').length&&(t=T('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_9'),e=c.height()-(parseInt(t.position().top)-parseInt(c.find("#logo").css("margin-top")))-parseInt(te.secondaryHeaderHeight)),e}function Ye(e){return("0"+parseInt(e).toString(16)).slice(-2)}function Be(){return Math.floor(1e4*Math.random())}function qe(a,e,n){var i=I.scrollY||z.documentElement.scrollTop,a=a||0,e=e||2e3,n=n||"easeOutSine",s=0,r=Math.max(.1,Math.min(Math.abs(i-a)/e,.8)),o={easeInOutQuint:function(e){return(e/=.5)<1?.5*Math.pow(e,5):.5*(Math.pow(e-2,5)+2)}};function l(){var e=(s+=1/60)/r,t=o[n](e);e<1?(requestAnimationFrame(l),I.scrollTo(0,i+(a-i)*t)):I.scrollTo(0,a)}l()}function Pe(){var e=0<T("body[data-header-breakpoint]").length&&"1000"!=E.attr("data-header-breakpoint")?parseInt(E.attr("data-header-breakpoint")):1e3,t=!1;return t=1e3!=e&&0==T('body[data-user-set-ocm="1"][data-slide-out-widget-area-style="slide-out-from-right-hover"]').length&&1e3<te.winW&&te.winW<=e?!0:t}function Le(e){return e.replace(/"/g,"").replace(/url\(|\)$/gi,"")}function Re(e){e=e.split("+").join(" ");for(var t={},a,n=/[?&]?([^=]+)=([^&]*)/g;a=n.exec(e);)t[decodeURIComponent(a[1])]=decodeURIComponent(a[2]);return t}ze.special.smartresize={setup:function(){T(this).on("resize",ze.special.smartresize.handler)},teardown:function(){T(this).off("resize",ze.special.smartresize.handler)},handler:function(e,t){var a=this,n=arguments;e.type="smartresize",He&&clearTimeout(He),He=setTimeout(function(){ze[Ee].apply(a,n)},"execAsap"===t?0:100)}},T.fn.smartresize=function(e){return e?this.on("smartresize",e):this.trigger("smartresize",["execAsap"])},Me=(Ae=z).createElement("STYLE"),Oe="addEventListener"in Ae,Se=function(e,t){Oe?Ae.addEventListener(e,t):Ae.attachEvent("on"+e,t)},Fe=function(e){Me.styleSheet?Me.styleSheet.cssText=e:Me.innerHTML=e},Ae.getElementsByTagName("HEAD")[0].appendChild(Me),Se("mousedown",function(){Fe(":focus{outline:0}::-moz-focus-inner{border:0;}")}),Se("keydown",function(){Fe("")}),jQuery.fn.setCursorPosition=function(e){return 0==this.length?this:T(this).setSelection(e,e)},jQuery.fn.setSelection=function(e,t){if(0==this.length)return this;var a=this[0],n;return a.createTextRange?((n=a.createTextRange()).collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select()):a.setSelectionRange&&(a.focus(),a.setSelectionRange(e,t)),this},T.extend(T.expr[":"],{transparent:function(e,t,a){return"0"===T(e).css("opacity")}}),T.cssHooks.color={get:function(e){var t;return e.currentStyle?t=e.currentStyle.color:I.getComputedStyle&&(t=z.defaultView.getComputedStyle(e,null).getPropertyValue("color")),-1==t.search("rgb")?t:(t=t.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/))?"#"+Ye(t[1])+Ye(t[2])+Ye(t[3]):void 0}},T.cssHooks.backgroundColor={get:function(e){var t;return e.currentStyle?t=e.currentStyle.backgroundColor:I.getComputedStyle&&(t=z.defaultView.getComputedStyle(e,null).getPropertyValue("background-color")),-1==t.search("rgb")?t:(t=t.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/))?"#"+Ye(t[1])+Ye(t[2])+Ye(t[3]):void 0}},function(o){function i(e,t){var a=o.proxy(this.process,this);this.$body=o("body"),this.$scrollElement=o(o(e).is("body")?I:e),this.options=o.extend({},i.DEFAULTS,t),this.selector=(this.options.target||"")+" ul li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a),this.refresh(),this.process()}function e(n){return this.each(function(){var e=o(this),t=e.data("bs.scrollspy"),a;t||e.data("bs.scrollspy",t=new i(this,"object"==typeof n&&n)),"string"==typeof n&&t[n]()})}i.VERSION="3.2.0",i.DEFAULTS={offset:10},i.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,z.documentElement.scrollHeight)},i.prototype.refresh=function(){var a="offset",n=0;o.isWindow(this.$scrollElement[0])||(a="position",n=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var e=this;this.$body.find(this.selector).map(function(){var e=o(this),t=e.data("target")||e.attr("href"),e=/^#./.test(t)&&o(t);return e&&e.length&&e.is(":visible")?[[e[a]().top+n,t]]:null}).sort(function(e,t){return e[0]-t[0]}).each(function(){e.offsets.push(this[0]),e.targets.push(this[1])})},i.prototype.process=function(){var e=0;(0<o('.page-submenu[data-sticky="true"]').length&&0==o('body[data-hhun="1"]').length||0<o('.page-submenu[data-sticky="true"]').length&&0<o('#header-outer[data-remove-fixed="1"]').length)&&(e=o(".page-submenu").height());var t,a=this.$scrollElement.scrollTop()+this.options.offset+e,n=this.getScrollHeight(),e=this.options.offset+n-this.$scrollElement.height()-e,i=this.offsets,s=this.targets,r=this.activeTarget;if(this.activeTarget&&a<this.offsets[0]&&0<this.offsets[0])return this.activeTarget=null,void o(this.selector).parentsUntil(this.options.target,".current-menu-item").removeClass("current-menu-item").removeClass("sfHover");if(this.scrollHeight!=n&&this.refresh(),e<=a)return r!=(t=s[s.length-1])&&this.activate(t);if(r&&a<=i[0])return r!=(t=s[0])&&this.activate(t);for(t=i.length;t--;)r!=s[t]&&a>=i[t]&&(!i[t+1]||a<=i[t+1])&&this.activate(s[t])},i.prototype.activate=function(e){this.activeTarget=e,o(this.selector).parentsUntil(this.options.target,".current-menu-item").removeClass("current-menu-item").removeClass("sfHover");var e=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',e=o(e).parents("li").addClass("current-menu-item");(e=e.parent(".dropdown-menu").length?e.closest("li.dropdown").addClass("current-menu-item"):e).trigger("activate.bs.scrollspy")};var t=o.fn.scrollspy;o.fn.scrollspy=e,o.fn.scrollspy.Constructor=i,o.fn.scrollspy.noConflict=function(){return o.fn.scrollspy=t,this}}(jQuery);var Ne=Re(z.location.search),Se,Ve;Se=jQuery,Ve=Se(I),Se.fn.visible=function(e,t,a){if(!(this.length<1)){var n=1<this.length?this.eq(0):this,i=n.get(0),s=Ve.width(),r=Ve.height(),a=a||"both",t=!0!==t||i.offsetWidth*i.offsetHeight;if("function"==typeof i.getBoundingClientRect){var o=i.getBoundingClientRect(),l=0<=o.top&&o.top<r,d=0<o.bottom&&o.bottom<=r,c=0<=o.left&&o.left<s,h=0<o.right&&o.right<=s,u=e?l||d:l&&d,o=e?c||h:c&&h;return"both"===a?t&&u&&o:"vertical"===a?t&&u:"horizontal"===a?t&&o:void 0}var l=Ve.scrollTop(),d=l+r,c=Ve.scrollLeft(),h=c+s,u=n.offset(),o=u.top,r=o+n.height(),s=u.left,u=s+n.width(),n=!0===e?r:o,o=!0===e?o:r,r=!0===e?u:s,u=!0===e?s:u;return"both"===a?!!t&&o<=d&&l<=n&&u<=h&&c<=r:"vertical"===a?!!t&&o<=d&&l<=n:"horizontal"===a?!!t&&u<=h&&c<=r:void 0}};var Xe=function(e,t,a,n,i,s){for(var r=0,o=["webkit","moz","ms","o"],l=0;l<o.length&&!I.requestAnimationFrame;++l)I.requestAnimationFrame=I[o[l]+"RequestAnimationFrame"],I.cancelAnimationFrame=I[o[l]+"CancelAnimationFrame"]||I[o[l]+"CancelRequestAnimationFrame"];I.requestAnimationFrame||(I.requestAnimationFrame=function(e){var t=(new Date).getTime(),a=Math.max(0,16-(t-r)),n=I.setTimeout(function(){e(t+a)},a);return r=t+a,n}),I.cancelAnimationFrame||(I.cancelAnimationFrame=function(e){clearTimeout(e)});var d=this,c;for(c in d.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:null,formattingFn:null},s)s.hasOwnProperty(c)&&(d.options[c]=s[c]);""===d.options.separator&&(d.options.useGrouping=!1),d.options.prefix||(d.options.prefix=""),d.options.suffix||(d.options.suffix=""),d.d="string"==typeof e?z.getElementById(e):e,d.startVal=Number(t),d.endVal=Number(a),d.countDown=d.startVal>d.endVal,d.frameVal=d.startVal,d.decimals=Math.max(0,n||0),d.dec=Math.pow(10,d.decimals),d.duration=1e3*Number(i)||2e3,d.formatNumber=function(e){var e,t,e,a;if(e=e.toFixed(d.decimals),t=(e=(e+="").split("."))[0],e=1<e.length?d.options.decimal+e[1]:"",a=/(\d+)(\d{3})/,d.options.useGrouping)for(;a.test(t);)t=t.replace(a,"$1"+d.options.separator+"$2");return d.options.prefix+t+e+d.options.suffix},d.easeOutExpo=function(e,t,a,n){return a*(1-Math.pow(2,-10*e/n))*1024/1023+t},d.easingFn=d.options.easingFn||d.easeOutExpo,d.formattingFn=d.options.formattingFn||d.formatNumber,d.version=function(){return"1.7.1"},d.printValue=function(e){var e=d.formattingFn(e);"INPUT"===d.d.tagName?this.d.value=e:"text"===d.d.tagName||"tspan"===d.d.tagName?this.d.textContent=e:this.d.innerHTML=e},d.count=function(e){d.startTime||(d.startTime=e);var e=(d.timestamp=e)-d.startTime;d.remaining=d.duration-e,d.options.useEasing?d.countDown?d.frameVal=d.startVal-d.easingFn(e,0,d.startVal-d.endVal,d.duration):d.frameVal=d.easingFn(e,d.startVal,d.endVal-d.startVal,d.duration):d.countDown?d.frameVal=d.startVal-(d.startVal-d.endVal)*(e/d.duration):d.frameVal=d.startVal+(d.endVal-d.startVal)*(e/d.duration),d.countDown?d.frameVal=d.frameVal<d.endVal?d.endVal:d.frameVal:d.frameVal=d.frameVal>d.endVal?d.endVal:d.frameVal,d.frameVal=Math.round(d.frameVal*d.dec)/d.dec,d.printValue(d.frameVal),e<d.duration?d.rAF=requestAnimationFrame(d.count):d.callback&&d.callback()},d.start=function(e){return d.callback=e,d.rAF=requestAnimationFrame(d.count),!1},d.pauseResume=function(){d.paused?(d.paused=!1,delete d.startTime,d.duration=d.remaining,d.startVal=d.frameVal,requestAnimationFrame(d.count)):(d.paused=!0,cancelAnimationFrame(d.rAF))},d.reset=function(){d.paused=!1,delete d.startTime,d.startVal=t,cancelAnimationFrame(d.rAF),d.printValue(d.startVal)},d.update=function(e){cancelAnimationFrame(d.rAF),d.paused=!1,delete d.startTime,d.startVal=d.frameVal,d.endVal=Number(e),d.countDown=d.startVal>d.endVal,d.rAF=requestAnimationFrame(d.count)},d.printValue(d.startVal)},De=function(e,t,a,n){return a*((e=e/n-1)*e*e+1)+t};function Qe(e,t){var a,n;0<e.length&&(a=z.head||z.getElementsByTagName("head")[0],(n=z.createElement("style")).type="text/css",n.styleSheet?n.styleSheet.cssText=e:n.appendChild(z.createTextNode(e)),T(n).attr("id",t),T("head").find("#"+t).remove(),a.appendChild(n))}function Ze(){T("a.pp").removeClass("pp").attr("data-fancybox",""),T("a[rel^='prettyPhoto']:not([rel*='_gal']):not([rel*='product-gallery']):not([rel*='prettyPhoto['])").removeAttr("rel").attr("data-fancybox","");var e=Be();T(".wpb_gallery .wpb_gallery_slidesnectarslider_style").each(function(){e=Be(),T(this).find(".swiper-slide a:not(.ext-url-link)").attr("data-fancybox","group_"+e)}),T('.wpb_gallery_slides.wpb_flexslider:not([data-onclick="custom_link"])').each(function(){e=Be(),T(this).find(".slides > li > a").attr("data-fancybox","group_"+e)}),T(".wpb_gallery_slidesflickity_style, .wpb_gallery_slidesflickity_static_height_style").each(function(){e=Be(),T(this).find(".cell > a:not(.ext-url-link)").attr("data-fancybox","group_"+e)}),T(".portfolio-items, .wpb_gallery_slidesparallax_image_grid").each(function(){e=Be(),0<T(this).find(".pretty_photo").length?T(this).find(".pretty_photo").removeClass("pretty_photo").attr("data-fancybox","group_"+e):0<T(this).find('a[rel*="prettyPhoto["]').length&&T(this).find('a[rel*="prettyPhoto["]').removeAttr("rel").attr("data-fancybox","group_"+e)}),E.hasClass("nectar-auto-lightbox")&&(T(".gallery").each(function(){var e;0==T(this).find('.gallery-icon a[rel^="prettyPhoto"]').length&&(e=Be(),T(this).find('.gallery-item .gallery-icon a[href*=".jpg"], .gallery-item .gallery-icon a[href*=".png"], .gallery-item .gallery-icon a[href*=".gif"], .gallery-item .gallery-icon a[href*=".jpeg"]').attr("data-fancybox","group_"+e).removeClass("pretty_photo"))}),T(".main-content img").each(function(){var e;T(this).parent().is("[href]")&&!T(this).parent().is(".magnific-popup")&&0==T(this).parents(".tiled-gallery").length&&0==T(this).parents(".product-image").length&&0==T(this).parents(".iosSlider.product-slider").length&&T(this).parent().attr("href").match(/\.(jpg|png|gif)\b/)&&T(this).parent().attr("data-fancybox","")}));var t=(T("body.admin-bar").length,[60,100]);te.winW<1e3&&(t=[0,0]),T("[data-fancybox]").fancybox({animationEffect:"zoom-in-out",animationDuration:350,buttons:["fullScreen","zoom","close"],margin:t,loop:!0,caption:function(){return T(this).attr("title")},hash:!1,beforeLoad:function(e){"string"!=typeof e.current.src&&T.fancybox.close(!0)},mobile:{margin:0}})}function Ue(){T("a.pp").removeClass("pp").addClass("magnific-popup"),T("a[rel^='prettyPhoto']:not([rel*='_gal']):not([rel*='product-gallery']):not([rel*='prettyPhoto['])").removeAttr("rel").addClass("magnific-popup"),T(".wpb_gallery .wpb_gallery_slidesnectarslider_style").each(function(){T(this).find(".swiper-slide a:not(.ext-url-link)").addClass("pretty_photo")}),T('.wpb_gallery_slides.wpb_flexslider:not([data-onclick="custom_link"])').each(function(){T(this).find(".slides > li > a").addClass("pretty_photo")}),T(".wpb_gallery_slidesflickity_style, .wpb_gallery_slidesflickity_static_height_style").each(function(){T(this).find(".cell > a:not(.ext-url-link)").addClass("pretty_photo")}),T(".portfolio-items, .wpb_gallery .swiper-slide, .wpb_gallery_slidesflickity_style .cell, .wpb_gallery_slidesflickity_static_height_style .cell, .wpb_gallery_slides.wpb_flexslider ul > li, .wpb_gallery .parallax-grid-item").each(function(){0<T(this).find(".pretty_photo").length?T(this).find(".pretty_photo").removeClass("pretty_photo").addClass("gallery").addClass("magnific"):0<T(this).find('a[rel*="prettyPhoto["]').length&&T(this).find('a[rel*="prettyPhoto["]').removeAttr("rel").addClass("gallery").addClass("magnific")}),T("a[data-rel='prettyPhoto[product-gallery]']").each(function(){T(this).removeAttr("data-rel").addClass("magnific").addClass("gallery")}),E.hasClass("nectar-auto-lightbox")&&(T(".gallery").each(function(){0==T(this).find('.gallery-icon a[rel^="prettyPhoto"]').length&&T(this).find('.gallery-item .gallery-icon a[href*=".jpg"], .gallery-item .gallery-icon a[href*=".png"], .gallery-item .gallery-icon a[href*=".gif"], .gallery-item .gallery-icon a[href*=".jpeg"]').addClass("magnific").addClass("gallery").removeClass("pretty_photo")}),T(".main-content img").each(function(){var e;T(this).parent().is("[href]")&&!T(this).parent().is(".magnific-popup")&&0==T(this).parents(".tiled-gallery").length&&0==T(this).parents(".product-image").length&&0==T(this).parents(".iosSlider.product-slider").length&&T(this).parent().attr("href").match(/\.(jpg|png|gif)\b/)&&T(this).parent().addClass("magnific-popup").addClass("image-link")})),T("a.magnific-popup:not(.gallery):not(.nectar_video_lightbox)").magnificPopup({type:"image",callbacks:{imageLoadComplete:function(){var e=this;setTimeout(function(){e.wrap.addClass("mfp-image-loaded")},10)},beforeOpen:function(){this.st.image.markup=this.st.image.markup.replace("mfp-figure","mfp-figure mfp-with-anim")},open:function(){T.magnificPopup.instance.next=function(){var e=this;this.wrap.removeClass("mfp-image-loaded"),setTimeout(function(){T.magnificPopup.proto.next.call(e)},100)},T.magnificPopup.instance.prev=function(){var e=this;this.wrap.removeClass("mfp-image-loaded"),setTimeout(function(){T.magnificPopup.proto.prev.call(e)},100)}}},fixedContentPos:!1,mainClass:"mfp-zoom-in",removalDelay:400}),T("a.magnific-popup.nectar_video_lightbox, .magnific_nectar_video_lightbox a.link_text, .swiper-slide a[href*=youtube], .swiper-slide a[href*=vimeo], .nectar-video-box a.full-link.magnific-popup").magnificPopup({type:"iframe",fixedContentPos:!1,mainClass:"mfp-zoom-in",removalDelay:400}),T("a.magnific.gallery").each(function(){var e=0<T(this).closest(".wpb_column").length?T(this).closest(".wpb_column"):T(this).parents(".row");0<e.length&&!e.hasClass("lightbox-col")&&(e.magnificPopup({type:"image",delegate:"a.magnific",mainClass:"mfp-zoom-in",fixedContentPos:!1,callbacks:{elementParse:function(e){T(e.el.context).is("[href]")&&-1!=T(e.el.context).attr("href").indexOf("iframe=true")||T(e.el.context).is("[href]")&&-1!=T(e.el.context).attr("href").indexOf("https://www.youtube.com/watch")?e.type="iframe":T(e.el.context).is("[href]")&&-1!=T(e.el.context).attr("href").indexOf("video-popup-")?e.type="inline":e.type="image"},imageLoadComplete:function(){var e=this;setTimeout(function(){e.wrap.addClass("mfp-image-loaded")},10)},beforeOpen:function(){this.st.image.markup=this.st.image.markup.replace("mfp-figure","mfp-figure mfp-with-anim")},open:function(){var e;0<T(this.content).find(".mejs-video video").length&&T().mediaelementplayer&&(T(this.content).find(".mejs-video video")[0].player.remove(),e=this,setTimeout(function(){T(e.content).find("video").mediaelementplayer(),T(e.content).find(".mejs-video video")[0].player.play()},50)),T.magnificPopup.instance.next=function(){var e=this;this.wrap.removeClass("mfp-image-loaded"),setTimeout(function(){T.magnificPopup.proto.next.call(e),0<T(e.content).find(".mejs-video video").length&&T(e.content).find(".mejs-video video")[0].play()},100)},T.magnificPopup.instance.prev=function(){var e=this;this.wrap.removeClass("mfp-image-loaded"),setTimeout(function(){T.magnificPopup.proto.prev.call(e),0<T(e.content).find(".mejs-video video").length&&T(e.content).find(".mejs-video video")[0].play()},100)}},close:function(){0<T(this.content).find(".mejs-video video").length&&T(this.content).find(".mejs-video video")[0].load()}},removalDelay:400,gallery:{enabled:!0}}),e.addClass("lightbox-col"))})}function Ge(){setTimeout(function(){0<T('body[data-ls="magnific"]').length||0<T('body[data-ls="pretty_photo"]').length?Ue():0<T('body[data-ls="fancybox"]').length&&Ze()},100)}function Je(){T(Z+" .wpb_animate_when_almost_visible").each(function(){var e=T(this),t,a=new Waypoint({element:e,handler:function(){0<e.parents(".wpb_tab").length&&"hidden"==e.parents(".wpb_tab").css("visibility")||e.hasClass("animated")?a.destroy():(e.addClass("animated"),e.addClass("wpb_start_animation"),a.destroy(),e.is(".nectar-button")&&0<T('body[data-button-style*="rounded_shadow"]').length&&setTimeout(function(){e.removeClass("wpb_start_animation")},1100))},offset:1==U?"200%":"90%"})})}function Ke(){var r;T(".nectar-milestone").each(function(){var e;T(this).is("[data-symbol]")&&(0==T(this).find(".symbol-wrap").length&&("before"==T(this).attr("data-symbol-pos")?T(this).find(".number").prepend('<div class="symbol-wrap"><span class="symbol">'+T(this).attr("data-symbol")+"</span></div>"):T(this).find(".number").append('<div class="symbol-wrap"><span class="symbol">'+T(this).attr("data-symbol")+"</span></div>")),e=T(this).attr("data-symbol-size")==T(this).find(".number").attr("data-number-size")&&"superscript"==T(this).attr("data-symbol-alignment")?32:parseInt(T(this).attr("data-symbol-size")),T(this).find(".symbol-wrap").css({"font-size":e+"px","line-height":e+"px"})),T(this).find(".number").css({"font-size":T(this).find(".number").attr("data-number-size")+"px","line-height":T(this).find(".number").attr("data-number-size")+"px"})}),(!x&&0<T(".nectar-milestone").length||E.hasClass("rtl")&&0<T(".nectar-milestone").length)&&(r="",T(Z+".nectar-milestone.motion_blur").each(function(e){T(this).removeClass(function(e,t){return(t.match(/(^|\s)instance-\S+/g)||[]).join(" ")}),T(this).addClass("instance-"+e);var t=T(this).find(".number").css("color"),a=parseInt(t.substring(1),16),n=(16711680&a)>>16,i=(65280&a)>>8,t=(255&a)>>0,a="rgba("+n+","+i+","+t+",0.2)",i="rgba("+n+","+i+","+t+",1)",t=parseInt(T(this).find(".number").attr("data-number-size")),i,e,s;r+="@keyframes motion-blur-number-"+e+" {  0% { opacity: 0;color: "+a+"; text-shadow: 0 "+t/20+"px 0 "+a+", 0 "+t/10+"px 0 "+a+", 0 "+t/6+"px 0 "+a+", 0 "+t/5+"px 0 "+a+", 0 "+t/4+"px 0 "+a+", 0 -"+t/20+"px 0 "+a+", 0 -"+t/10+"px 0 "+a+", 0 -"+t/6+"px 0 "+a+", 0 -"+t/5+"px 0 "+a+", 0 -"+t/4+"px 0 "+a+"; transform: translateZ(0px) translateY(-100%); -webkit-transform: translateZ(0px) translateY(-100%); } 33% { opacity: 1 }100% { color: "+i+"; text-shadow: none; transform: translateZ(0px) translateY(0px); -webkit-transform: translateZ(0px) translateY(0px); } } @-webkit-keyframes motion-blur-number-"+e+" {  0% { opacity: 0;color: "+a+"; text-shadow: 0 "+t/20+"px 0 "+a+", 0 "+t/10+"px 0 "+a+", 0 "+t/6+"px 0 "+a+", 0 "+t/5+"px 0 "+a+", 0 "+t/4+"px 0 "+a+", 0 -"+t/20+"px 0 "+a+", 0 -"+t/10+"px 0 "+a+", 0 -"+t/6+"px 0 "+a+", 0 -"+t/5+"px 0 "+a+", 0 -"+t/4+"px 0 "+a+"; transform: translateZ(0px) translateY(-100%); -webkit-transform: translateZ(0px) translateY(-100%); } 33% { opacity: 1 }100% { color: "+i+"; text-shadow: none; transform: translateZ(0px) translateY(0px); -webkit-transform: translateZ(0px) translateY(0px); } } .nectar-milestone.motion_blur.instance-"+e+" .number span.in-sight { animation: 0.65s cubic-bezier(0, 0, 0.17, 1) 0s normal backwards 1 motion-blur-number-"+e+"; -webkit-animation: 0.65s cubic-bezier(0, 0, 0.17, 1) 0s normal backwards 1 motion-blur-number-"+e+"; } ",0==K.$usingFullScreenRows&&0!=T(this).find(".number > span").length||(i=T(this).find(".symbol-wrap").clone(),T(this).find(".symbol-wrap").remove(),e=T(this).find(".number").text().split(""),(s=T(this).find(".number")).empty(),T.each(e,function(e,t){s.append("<span>"+t+"</span")}),T(this).has("[data-symbol]")&&("after"==T(this).attr("data-symbol-pos")?s.append(i):s.prepend(i)))}),Qe(r,"milestone-blur"),et())}function et(){T(Z+".nectar-milestone").each(function(){var e=1==U?"250%":"98%";te.usingMobileBrowser&&"98%"==e&&(e="110%");var i=T(this),s=new Waypoint({element:i,handler:function(){var e,t,a,n;0<i.parents(".wpb_tab").length&&"hidden"==i.parents(".wpb_tab").css("visibility")||i.hasClass("animated-in")||(e=parseInt(i.find(".number span:not(.symbol)").text().replace(/,/g,"")),i.hasClass("motion_blur")?i.find("span").each(function(e){var t=T(this);setTimeout(function(){t.addClass("in-sight")},200*e)}):(t={easingFn:De},a=i.find(".number span:not(.symbol)")[0],new Xe(a,0,e,0,2.2,t).start()),i.addClass("animated-in")),s.destroy()},offset:e})})}function tt(e){var t=e.parents("li").index()+1,a=0<T("body.vc_editor").length?"> .wpb_tab ":"",n;if(e.hasClass("active-tab")||e.hasClass("loading")||(e.parents("ul").find("a").removeClass("active-tab"),e.addClass("active-tab"),e.parents(".tabbed").find("> div:not(.clear)"+a).css({visibility:"hidden",position:"absolute",opacity:"0",left:"-9999px",display:"none"}).removeClass("visible-tab"),0<T("body.vc_editor").length?(n=e.parent().is("[data-m-id]")?e.parent().attr("data-m-id"):"",e.parents(".tabbed").find('> div[data-model-id="'+n+'"]'+a).css({visibility:"visible",position:"relative",left:"0",display:"block"}).stop().transition({opacity:1},400).addClass("visible-tab"),E.is('[data-flex-cols="true"]')||Fi()):e.parents(".tabbed").find("> div:nth-of-type("+t+")"+a).css({visibility:"visible",position:"relative",left:"0",display:"block"}).stop().transition({opacity:1},400).addClass("visible-tab"),(0<e.parents(".tabbed").find("> div:nth-of-type("+t+") .iframe-embed").length||0<e.parents(".tabbed").find("> div:nth-of-type("+t+") .portfolio-items").length)&&setTimeout(function(){k.trigger("resize")},10)),0!=Q){var a=e.parents(".tabbed").find("> div:nth-of-type("+t+")"+a),i,s;if(0<a.find(".nectar-progress-bar").length&&Qt(),(0<a.find('.divider-small-border [data-animate="yes"]').length||0<a.find('.divider-border [data-animate="yes"]').length)&&Gt(),(0<a.find("img.img-with-animation").length||0<a.find(".col.has-animation").length||0<a.find(".nectar_cascading_images").length||0<a.find(".wpb_column.has-animation").length)&&(Rt(),Nt()),0<a.find('.column-image-bg-wrap[data-bg-animation="displace-filter-fade"]').length)for(var r=0;r<B.length;r++)0<T(B[r].canvasContainer).parents(".wpb_tab").length&&"hidden"!=T(B[r].canvasContainer).parents(".wpb_tab").css("visibility")&&(0==T(B[r].canvasContainer).find(".image-added-to-stage").length&&B[r].imgContainer.addChild(B[r].bg),T(B[r].canvasContainer).find(".nectar-liquid-bg").addClass("image-added-to-stage"),B[r].resize(),0==T(B[r].canvasContainer).find(".nectar-liquid-bg.animated-in").length&&B[r].animateProps(B[r]));0<a.find(".nectar-milestone").length&&et(),0<a.find('.nectar_image_with_hotspots[data-animation="true"]').length&&(ta(),setTimeout(function(){k.trigger("resize")},100)),0<a.find(".nectar-fancy-ul").length&&Ct(),0<a.find(".nectar-split-heading").length&&Dt(),0<a.find('.wpb_column[data-border-animation="true"]').length&&Zt(),0<a.find(".wpb_animate_when_almost_visible").length&&Je(),0<a.find(".nectar-animated-title").length&&la(),0<a.find(".nectar-highlighted-text").length&&da(),0<a.find(".nectar_food_menu_item").length&&Ut(),0<a.find('.nectar-post-grid:not([data-animation="none"])').length&&oa(),0<e.parents(".wpb_row").length&&((0<a.find(".vc_pie_chart").length||0<a.find(".wp-video-shortcode").length||0<a.find(".post-area.masonry .posts-container").length||0<a.find(".twentytwenty-container").length||0<e.parents('#nectar_fullscreen_rows[data-content-overflow="scrollbar"]').length||0<e.parents(".tabbed").find("> div:nth-of-type("+t+")").find(".wpb_gallery").length||e.parents(".wpb_row").next().hasClass("parallax_section"))&&k.trigger("resize"),0<a.find(".nectar-flickity").length&&"undefined"!=typeof Flickity&&Flickity.data(e.parents(".tabbed").find("> div:nth-of-type("+t+")").find(".nectar-flickity")[0]).resize(),0<a.find(".nectar-woo-flickity").length&&"undefined"!=typeof Flickity&&Flickity.data(e.parents(".tabbed").find("> div:nth-of-type("+t+")").find(".nectar-woo-flickity > ul")[0]).resize()),a.find(".svg-icon-holder").each(function(t){var a=T(this);setTimeout(function(){var e=0;a.is("[data-animation-delay]")&&0<a.attr("data-animation-delay").length&&"false"!=a.attr("data-animation")&&(e=a.attr("data-animation-delay")),clearTimeout(N[t]),"false"==a.attr("data-animation")?(a.css("opacity","1"),A[a.find("svg").attr("id").slice(-1)].finish()):(A[a.find("svg").attr("id").slice(-1)].reset(),N[t]=setTimeout(function(){A[a.find("svg").attr("id").slice(-1)].play()},e))},150)})}e.parents(".tabbed").find(".wpb_row").each(function(){var e;void 0!==T(this).find('[class*="vc_col-"]').first().offset()&&(e=T(this).find('[class*="vc_col-"]').first().offset().left,T(this).find('[class*="vc_col-"]').each(function(){T(this).removeClass("no-left-margin"),T(this).offset().left<e+15?T(this).addClass("no-left-margin"):T(this).removeClass("no-left-margin")}))}),Q++,0<e.parent().parent().find(".magic-line").length&&at(e)}function at(e){var t,a,n,t=e.parent();t.length?(a=t.position().left,n=t.width()):a=n=0,e.parent().parent().find(".magic-line").css("transform","translateX("+a+"px) scaleX("+n+")")}function nt(){void 0!==Ne.tab&&T(".wpb_tabs_nav").each(function(){T(this).find("li").each(function(){var e=T(this).find("a").clone(),t=Ne.tab,a=T(this);e.find("svg").remove(),(e=0<(e=(e=e.text()).replace(/\s+/g,"-").toLowerCase()).length&&"-"===e.substring(0,1)?e.substring(1):e)==(t=t.replace(/\s+/g,"-").replace(/</g,"&lt;").replace(/"/g,"&quot;").toLowerCase())&&(T(this).find("a").trigger("click"),setTimeout(function(){a.find("a").trigger("click")},501))})})}function it(){E.on("click",".tabbed > ul li:not(.cta-button) a",function(){return tt(T(this)),!1}),T(".tabbed").each(function(){var e;T(this).find(".wpb_tab").each(function(e){var t;T(this).is("[data-tab-icon]")&&0<T(this).attr("data-tab-icon").length&&(T(this).parents(".tabbed").addClass("using-icons"),T(this).parents(".tabbed").find(".wpb_tabs_nav li:nth-child("+(e+1)+") > a").prepend('<i class="'+T(this).attr("data-tab-icon")+'"></i>')),0<T(this).find(".im-icon-wrap.tab-icon").length&&(t=T(this).find(".im-icon-wrap.tab-icon").detach(),T(this).parents(".tabbed").find(".wpb_tabs_nav li:nth-child("+(e+1)+") > a").prepend(t))}),0==T(this).find(".swiper-container").length&&0==T(this).find(".testimonial_slider").length&&0==T(this).find('.portfolio-items:not(".carousel")').length&&0==T(this).find(".wpb_gallery .portfolio-items").length&&0==T(this).find("iframe").length&&T(this).find("> ul li:first-child a").trigger("click"),(0<T(this).find(".testimonial_slider").length||0<T(this).find('.portfolio-items:not(".carousel")').length||0<T(this).find(".wpb_gallery .portfolio-items").length||0<T(this).find("iframe").length)&&(e=T(this),T(this).find(".wpb_tab").show().css({opacity:0,height:"1px"}),T(this).find("> ul li a").addClass("loading"),setTimeout(function(){e.find(".wpb_tab").hide().css({opacity:1,height:"auto"}),e.find("> ul li a").removeClass("loading"),e.find("> ul li:first-child a").trigger("click"),nt()},900)),e=T(this),setTimeout(function(){e.is('[data-style="minimal_alt"]')&&(e.find("> ul").append('<li class="magic-line" />'),at(e.find("> ul > li:first-child > a")))},100)}),0<T('.tabbed[data-style="minimal_alt"]').length&&k.on("smartresize",function(){T('.tabbed[data-style="minimal_alt"]').each(function(){0<T(this).find("a.active-tab").length&&at(T(this).find("a.active-tab"))})}),nt(),T(".nectar-scrolling-tabs").each(function(e){te.usingFrontEndEditor||(D[e]=new st(T(this)))})}function st(e){this.$el=e,this.$tabContent=e.find(".scrolling-tab-content"),this.$lineEl=e.find(".scrolling-tab-nav .line"),this.observer=null,this.domSetup(),this.highlightObserve()}function rt(){void 0!==Ne.toggle&&T(".toggles").each(function(){T(this).find(".toggle").each(function(){var e=T(this).find("h3 a").clone(),t=Ne.toggle;T(e).find("i").remove(),(e=(e=e.text()).replace(/\s+/g,"-").toLowerCase())==(t=t.replace(/\s+/g,"-").replace(/</g,"&lt;").replace(/"/g,"&quot;").toLowerCase())&&T(this).find("h3 a").trigger("click")})})}function ot(){T(".toggles").each(function(){var e=T(this).find(".toggle.open"),e;0<e.length&&((e=e.find("> div")[0]).style.maxHeight=e.scrollHeight+"px")})}function lt(){setTimeout(function(){T(".accordion").each(function(){var e;0==T(this).find('.toggle[data-inner-wrap="true"]').length?T(this).find("> .toggle").first().addClass("open").find("> div").show():te.usingFrontEndEditor||((e=T(this).find("> .toggle").first()).addClass("open"),e.find("> div")[0].style.maxHeight=e.find("> div")[0].scrollHeight+"px"),T(this).find("> .toggle").first().find("a:not(.nectar-button) i").attr("class","icon-minus-sign")}),rt()},60),0<T('.toggle[data-inner-wrap="true"]').length&&k.on("smartresize",ot)}function dt(){E.on("click",".toggle h3 a",function(){var e;if(!T(this).parents(".toggles").hasClass("accordion"))return 0==T(this).parents('.toggle[data-inner-wrap="true"]').length?T(this).parents(".toggle").find("> div").slideToggle(300):(e=T(this).parents(".toggle").find("> div")[0]).style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px",T(this).parents(".toggle").toggleClass("open"),T(this).parents(".toggle").hasClass("open")?T(this).find("i").attr("class","icon-minus-sign"):T(this).find("i").attr("class","icon-plus-sign"),0<T(this).parents(".toggle").find("> div .iframe-embed").length&&"0"==T(this).parents(".toggle").find("> div iframe.iframe-embed").height()&&ya(),0<T(this).parents(".full-width-content").length&&setTimeout(function(){Wt()},300),0<T("#nectar_fullscreen_rows").length&&setTimeout(function(){k.trigger("smartresize")},300),!1}),E.on("click",".accordion .toggle h3 a",function(){if(T(this).parents(".toggle").hasClass("open"))return!1;var e,t=T(this).parents(".toggles"),a=T(this).parents(".toggle"),n;return 0==T(this).parents('.toggle[data-inner-wrap="true"]').length?(t.find(".toggle > div").slideUp(300),t.find(".toggle h3 a i").attr("class","icon-plus-sign"),t.find(".toggle").removeClass("open"),a.find("> div").slideDown(300)):(n=a.find("> div")[0],t.find(".toggle > div").each(function(){T(this)[0].style.maxHeight=null}),t.find(".toggle h3 a i").attr("class","icon-plus-sign"),t.find(".toggle").removeClass("open"),n.style.maxHeight=n.scrollHeight+"px"),a.addClass("open"),a.hasClass("open")?T(this).find("i").attr("class","icon-minus-sign"):T(this).find("i").attr("class","icon-plus-sign"),0<T(this).parents(".full-width-content").length&&(clearTimeout(e),e=setTimeout(function(){Wt()},400)),0<T("#nectar_fullscreen_rows").length&&(clearTimeout(e),e=setTimeout(function(){k.trigger("smartresize")},400)),!1})}function ct(e,t){(e=String(e).replace(/[^0-9a-f]/gi,"")).length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),t=t||0;for(var a="#",n,i,i=0;i<3;i++)n=parseInt(e.substr(2*i,2),16),a+=("00"+(n=Math.round(Math.min(Math.max(0,n+n*t),255)).toString(16))).substr(n.length);return a}function ht(){T(".nectar-3d-transparent-button").each(function(){var e,t,a,n,i,n,s,r,i;"visible"==T(this).css("visibility")&&(a=0,n=1.7,"extra_jumbo"==(e=T(this)).attr("data-size")&&(n=te.winW<1e3&&690<te.winW?(a=64,i=34,e.find(".back-3d rect").attr("stroke-width","12"),1.7):te.winW<=690?(a=46,i=16,e.find(".back-3d rect").attr("stroke-width","10"),1.7):(a=100,i=64,e.find(".back-3d rect").attr("stroke-width","20"),1.6),e.find("svg text").attr("font-size",i),r=T(this).find(".back-3d .button-text")[0].getBoundingClientRect().width,e.css({width:r+1.5*a+"px",height:(i=1.5*i)+a+"px"}),e.find("> a").css({height:i+a+"px"}),e.find(".back-3d svg, .front-3d svg").css({width:r+1.5*a+"px",height:i+a+"px"}).attr("viewBox","0 0 "+(r+a)+" "+(i+a)),e.find("svg text").attr("transform","matrix(1 0 0 1 "+(r+1.6*a)/2+" "+(i+a)/n+")"),e.find(".front-3d ").css("transform-origin","50% 50% -"+(i+a)/2+"px"),e.find(".back-3d").css("transform-origin","50% 50% -"+(i+a)/2+"px")))})}function ut(){var n,i,l;T(".nectar-button.see-through[data-color-override], .nectar-button.see-through-2[data-color-override], .nectar-button.see-through-3[data-color-override]").each(function(){var e=0<T('body.material[data-button-style^="rounded"]').length,t,a;if(T(this).css("visibility","visible"),T(this).hasClass("see-through-3")&&"false"==T(this).attr("data-color-override"))return!0;t="false"!=T(this).attr("data-color-override")?T(this).attr("data-color-override"):0<T(this).parents(".dark").length?"#000000":"#ffffff",T(this).hasClass("see-through-3")||T(this).css("color",t),T(this).find("i").css("color",t);var n=parseInt(t.substring(1),16),i=T(this).has("[data-hover-color-override]")?T(this).attr("data-hover-color-override"):"no-override",s=T(this).has("[data-hover-text-color-override]")?T(this).attr("data-hover-text-color-override"):"#fff",r=(16711680&n)>>16,o=(65280&n)>>8,l=(255&n)>>0,d=T(this).hasClass("see-through-3")?"1":"0.75";T(this).css("border-color","rgba("+r+","+o+","+l+","+d+")"),e&&T(this).find("i").css({"background-color":"rgba("+r+","+o+","+l+",1)","box-shadow":"0px 8px 15px rgba("+r+","+o+","+l+",0.24)"}),T(this).hasClass("see-through")?(a=T(this),T(this).on("mouseenter touchstart",function(){a.css("border-color","rgba("+r+","+o+","+l+",1)")}),T(this).on("mouseleave touchtouchend",function(){a.css("border-color","rgba("+r+","+o+","+l+",1)"),d=T(this).hasClass("see-through-3")?"1":"0.75",a.css("border-color","rgba("+r+","+o+","+l+","+d+")")})):(T(this).find("i").css("color",s),"no-override"!=i?(a=T(this),T(this).on("mouseenter touchstart",function(){a.css({"border-color":i,"background-color":i,color:s}),e&&a.find("i").css({"background-color":"","box-shadow":""})}),T(this).on("mouseleave touchtouchend",function(){d=T(this).hasClass("see-through-3")?"1":"0.75",e&&a.find("i").css({"background-color":"rgba("+r+","+o+","+l+",1)","box-shadow":"0px 8px 15px rgba("+r+","+o+","+l+",0.24)"}),a.hasClass("see-through-3")?a.css({"border-color":"rgba("+r+","+o+","+l+","+d+")","background-color":"transparent"}):a.css({"border-color":"rgba("+r+","+o+","+l+","+d+")","background-color":"transparent",color:t})})):(a=T(this),T(this).on("mouseenter touchstart",function(){a.css({"border-color":i,color:s})}),T(this).on("mouseleave touchtouchend",function(){d=a.hasClass("see-through-3")?"1":"0.75",a.css({"border-color":"rgba("+r+","+o+","+l+","+d+")",color:s})})))}),T(".nectar-button:not(.see-through):not(.see-through-2):not(.see-through-3)[data-color-override]").each(function(){var e;T(this).css("visibility","visible"),"false"!=T(this).attr("data-color-override")&&(e=T(this).attr("data-color-override"),T(this).removeClass("accent-color").removeClass("extra-color-1").removeClass("extra-color-2").removeClass("extra-color-3").css("background-color",e))}),(0<T(".swiper-slide .solid_color_2").length||0<T(".tilt-button-inner").length)&&(n="",T(".swiper-slide .solid_color_2 a").each(function(e){T(this).addClass("instance-"+e),i="false"!=T(this).attr("data-color-override")?T(this).attr("data-color-override"):0<T(this).parents(".dark").length?"#000000":"#ffffff",T(this).css("color",i),T(this).find("i").css("color",i);var t=T(this).css("background-color"),a=ct(t,.13),t=ct(t,-.15);n+=".swiper-slide .solid_color_2 a.instance-"+e+":after { background-color: "+a+";  } .swiper-slide .solid_color_2 a.instance-"+e+":before { background-color: "+t+"; } "}),T(".tilt-button-wrap a").each(function(e){T(this).addClass("instance-"+e);var t=T(this).css("background-color"),a;"false"!=T(this).attr("data-color-override")&&(a=T(this).attr("data-color-override"),T(this).css("background-color",a),t=a);var a=ct(t,.13),t=ct(t,-.15);n+=".tilt-button-wrap a.instance-"+e+":after { background-color: "+a+";  } .tilt-button-wrap a.instance-"+e+":before { background-color: "+t+"; } "}),Qe(n,"tilt-button")),0<T(".nectar-3d-transparent-button").length&&(l="",T(".nectar-3d-transparent-button").each(function(e){var t=T(this),a=t.attr("data-size"),n=0,i=1.5,s=1.65,r;"large"==a?(n=46,r=16,i=1.5,s=1.7):"medium"==a?(n=30,r=16):"small"==a?(n=20,r=12):"jumbo"==a?(n=54,r=24,i=1.5,s=1.68):"extra_jumbo"==a&&(n=100,r=64,s=i=1.6),t.find("svg text").attr("font-size",r);var o,a=T(this).find(".back-3d .button-text")[0].getBoundingClientRect().width,r=1.5*r;t.css({width:a+1.5*n+"px",height:r+n+"px"}),t.find("> a").css({height:r+n+"px"}),t.find(".back-3d svg, .front-3d svg").css({width:a+1.5*n+"px",height:r+n+"px"}).attr("viewBox","0 0 "+(a+n)+" "+(r+n)),t.find("svg text").attr("transform","matrix(1 0 0 1 "+(a+n*i)/2+" "+(r+n)/s+")"),t.find(".front-3d, .back-3d").css("transform-origin","50% 50% -"+(r+n)/2+"px"),T(this).find(".front-3d svg > rect").attr("id","masked-rect-id-"+e),T(this).find(".front-3d defs mask").attr("id","button-text-mask-"+e),t.css("visibility","visible"),l+="#masked-rect-id-"+e+" { mask: url(#button-text-mask-"+e+"); -webkit-mask: url(#button-text-mask-"+e+")} "}),ht(),k.on("smartresize",ht),Qe(l,"nectar-td-button")),setTimeout(function(){T('.nectar-button[class*="color-gradient"] .start').removeClass("loading")},150),(-1<navigator.userAgent.toLowerCase().indexOf("firefox")||-1<navigator.userAgent.indexOf("MSIE ")||navigator.userAgent.match(/Trident\/7\./))&&T('.nectar-button[class*="color-gradient"] .start').addClass("no-text-grad")}function pt(){T(".icon-3x").each(function(){T(this).closest(".col").on("mouseenter",function(){T(this).find(".icon-3x").addClass("hovered")}),T(this).closest(".col").on("mouseleave",function(){T(this).find(".icon-3x").removeClass("hovered")})}),(-1<navigator.userAgent.indexOf("MSIE ")||navigator.userAgent.match(/Trident\/7\./))&&T('[class^="icon-"][class*="color-gradient"], .nectar_icon_wrap[data-color*="extra-color-gradient"] .nectar_icon, .nectar-gradient-text').addClass("no-grad")}function gt(){var e;0!==T(".team-member").length&&(E.on("click",'.team-member[data-style="bio_fullscreen"], .team-member[data-style="bio_fullscreen_alt"]',function(){var e,t,a,n,i,s,t,s,n;0<T(".nectar_team_member_overlay").length||(e=0<T("body > #boxed").length?"in-boxed":"",t=T(this).find(".nectar_team_bio").html(),a=(T(this).is('[data-style="bio_fullscreen_alt"]')?T(this).find(".team-meta h5"):T(this).find(".team-meta p")).html(),n=0<T(this).find(".nectar_team_bio_img[data-img-src]").length?T(this).find(".nectar_team_bio_img").attr("data-img-src"):"",i=T(this).is('[data-style="bio_fullscreen_alt"]')?"bio-fullscreen-alt":"bio-fullscreen",s="",s=T(this).is('[data-style="bio_fullscreen_alt"]')?'<div class="title">'+a+"</div><h2>"+T(this).find(".team-meta h3").html()+"</h2>":"<h2>"+T(this).find(".team-meta h3").html()+'</h2><div class="title">'+a+"</div>",E.append('<div class="nectar_team_member_overlay '+e+'" data-style="'+i+'"><div class="inner-wrap"><div class="team_member_details"><div class="bio-inner"><span class="mobile-close"></span>'+s+'<div class="team-desc">'+t+'</div></div></div><div class="team_member_picture"><div class="team_member_image_bg_cover"></div><div class="team_member_picture_wrap"><div class="team_member_image"></div></div></div></div></div>'),0<n.length&&((t=new Image).src=n,t.onload=function(){T(".nectar_team_member_overlay .team_member_image").css("opacity","1")},T(".nectar_team_member_overlay .team_member_image").css({"background-image":'url("'+n+'")'})),n=0<T('body[data-header-format="left-header"]').length&&1e3<k.width()?0:c.height(),T(".nectar_team_member_overlay .inner-wrap").css({"padding-top":n}),0<T(".using-mobile-browser").length&&T("body,html").addClass("nectar-no-scrolling"),ft(),T(".nectar_team_member_overlay").addClass("open").addClass("animating"),setTimeout(function(){T(".nectar_team_member_close").addClass("visible"),T(".nectar_team_member_overlay").removeClass("animating")},500),0==T(".using-mobile-browser").length&&mt(),0<T('.team-member[data-style="bio_fullscreen"]').length&&te.usingMobileBrowser&&T(".nectar_team_member_overlay").addClass("on-mobile"))}),E.on("click",".nectar_team_member_overlay",function(){T(this).hasClass("animating")||(T(".nectar_team_member_overlay").removeClass("open"),T(".nectar_team_member_close").removeClass("visible"),0<T(".using-mobile-browser").length&&T("body,html").removeClass("nectar-no-scrolling"),setTimeout(function(){T(".nectar_team_member_overlay, .nectar_team_member_close").remove()},820))}),(0<T('.team-member[data-style="bio_fullscreen"]').length||0<T('.team-member[data-style="bio_fullscreen_alt"]').length)&&(k.on("resize",ft),te.usingMobileBrowser||(e=new se("","close-indicator"))))}function ft(){var e=0<T('body[data-header-format="left-header"]').length&&1e3<k.width()?275:0;T(".nectar_team_member_overlay").css({width:k.width()-e,left:e})}function mt(){T(".nectar_team_member_overlay .inner-wrap").mousewheel(function(e,t){this.scrollTop-=30*t,e.preventDefault()})}function bt(){var n="";T(".wpb_column").each(function(e){T(this).removeClass(function(e,t){return(t.match(/(^|\s)instance-\S+/g)||[]).join(" ")}),T(this).addClass("instance-"+e);var t=0<T(this).find("> .vc_column-inner > .column-bg-overlay-wrap").length||0<T(this).find("> .vc_column-inner > .column-bg-overlay").length?" > .vc_column-inner ":"",a=0<T(this).find(t+" > .column-bg-overlay-wrap").length?"> .column-bg-overlay-wrap ":"";"true"==T(this).attr("data-has-bg-color")&&(n+=".wpb_column.instance-"+e+t+a+" > .column-bg-overlay { background-color:"+T(this).attr("data-bg-color")+";  opacity: "+T(this).attr("data-bg-opacity")+"; }"),T(this).is('[data-hover-bg^="#"]')&&(n+=".wpb_column.instance-"+e+":hover "+t+a+" > .column-bg-overlay { background-color: "+T(this).attr("data-hover-bg")+"!important; opacity: "+T(this).attr("data-hover-bg-opacity")+"!important; }")}),Qe(n,"column-bg-colors")}function vt(){B=[],"undefined"==typeof NectarLiquid||te.usingFrontEndEditor||T('.row-bg-wrap[data-bg-animation*="displace-filter"] .row-bg.using-image, .column-image-bg-wrap[data-bg-animation*="displace-filter"] .column-image-bg').each(function(e){var t=T(this),a,n;T(this).is(".row-bg")?(a=T(this).parents(".row-bg-wrap").attr("data-bg-animation"),n="row"):T(this).is(".column-image-bg")&&(a=T(this).parents(".column-image-bg-wrap").attr("data-bg-animation"),n="col"),B[e]=new NectarLiquid(t,a,n)})}function wt(){var r,o;0<T(".morphing-outline").length&&(r="",o=0<T("body.vc_editor").length?"":">",T(".morphing-outline").each(function(e){T(this).removeClass(function(e,t){return(t.match(/(^|\s)instance-\S+/g)||[]).join(" ")}),T(this).addClass("instance-"+e).css({visibility:"visible"});var t=T(this).find(".inner").width(),a=T(this).find(".inner").height(),n=parseInt(T(this).attr("data-border-thickness")),i=0<T('body[data-button-style*="rounded"]').length?":hover":"",s=0<T('body[data-button-style*="rounded"]').length?"":":hover";r+="body .morphing-outline.instance-"+e+" .inner > * { color: "+T(this).attr("data-starting-color")+"; } ",r+="body .morphing-outline.instance-"+e+" .inner:after  { border-width:"+T(this).attr("data-border-thickness")+"px ; border-color: "+T(this).attr("data-starting-color")+"; } ",r+="body .wpb_column:hover > .wpb_wrapper "+o+" .morphing-outline.instance-"+e+" .inner > *, body .wpb_column:hover > .vc_column-inner > .wpb_wrapper "+o+" .morphing-outline.instance-"+e+" .inner > * { color: "+T(this).attr("data-hover-color")+"; } ",r+="body .wpb_column:hover > .wpb_wrapper "+o+" .morphing-outline.instance-"+e+" .inner:after, body .wpb_column:hover > .vc_column-inner > .wpb_wrapper "+o+" .morphing-outline.instance-"+e+" .inner:after  { border-color: "+T(this).attr("data-hover-color")+"; } ",r+="body .wpb_column"+s+" > .wpb_wrapper "+o+" .morphing-outline.instance-"+e+" .inner:after, body .wpb_column"+s+" > .vc_column-inner > .wpb_wrapper "+o+" .morphing-outline.instance-"+e+" .inner:after { padding: "+((t+100+2*n-a)/2-n)+"px 50px}",r+=".morphing-outline.instance-"+e+" { padding: "+(30+(t+80+2*n-a)/2-n)+"px 50px}",r+="body .wpb_column"+s+" > .wpb_wrapper "+o+" .morphing-outline.instance-"+e+" .inner:after, body .wpb_column"+s+" > .vc_column-inner > .wpb_wrapper "+o+" .morphing-outline.instance-"+e+" .inner:after { top: -"+parseInt((t+100+2*n-a)/2-n+n)+"px }",r+="body .wpb_column > .wpb_wrapper "+o+" .morphing-outline.instance-"+e+" .inner:after, body .wpb_column > .vc_column-inner > .wpb_wrapper "+o+" .morphing-outline.instance-"+e+" .inner:after { left: -"+parseInt(50+n)+"px }",r+="body .wpb_column"+i+" > .wpb_wrapper "+o+" .morphing-outline.instance-"+e+" .inner:after, body .wpb_column"+i+" > .vc_column-inner > .wpb_wrapper "+o+" .morphing-outline.instance-"+e+" .inner:after { padding: 50px 50px}",r+="body .wpb_column"+i+" > .wpb_wrapper "+o+" .morphing-outline.instance-"+e+" .inner:after, body .wpb_column"+i+" > .vc_column-inner > .wpb_wrapper "+o+" .morphing-outline.instance-"+e+" .inner:after { top: -"+parseInt(50+n)+"px }"}),Qe(r,"morphing-outlines"))}function yt(){0<T(".morphing-outline").length&&(setTimeout(wt,100),setTimeout(Wt,125),k.on("smartresize",wt))}function _t(){var r=1==U?"200%":"bottom-in-view";0==A.length?(T(".svg-icon-holder:not(.animated-in)").has("svg").each(function(e){var a=T(this);x&&a.attr("data-animation","false"),a.find("svg").css({height:parseInt(a.attr("data-size"))+"px",width:parseInt(a.attr("data-size"))+"px"}),T(this).find("svg").attr("id","nectar-svg-animation-instance-"+e);var t=a.is("[data-animation-speed]")&&0<a.attr("data-animation-speed").length?a.attr("data-animation-speed"):200,n;function i(){var e=0;a.is("[data-animation-delay]")&&0<a.attr("data-animation-delay").length&&"false"!=a.attr("data-animation")&&(e=a.attr("data-animation-delay"));var t=a.find("svg").attr("id").replace(/[^0-9]/g,"");1==A[t].isReady?setTimeout(function(){a.css("opacity","1"),A[t].reset().play()},e):setTimeout(i,50)}function s(){a.css({height:parseInt(a.attr("data-size"))+"px",width:parseInt(a.attr("data-size"))+"px"})}"false"==a.attr("data-animation")&&(t=1,a.css("opacity","1")),a.hasClass("bound")||(A[e]=new Vivus(a.find("svg").attr("id"),{type:"delayed",pathTimingFunction:Vivus.EASE_OUT,animTimingFunction:Vivus.LINEAR,duration:t,onReady:s})),1!==t?n=new Waypoint({element:a,handler:function(){a.hasClass("animated-in")||(i(),a.addClass("animated-in")),n.destroy()},offset:r}):i(),a.addClass("bound")}),0<T('.vc_row-o-equal-height .svg-icon-holder[data-animation="true"]').length&&0==T("#nectar_fullscreen_rows").length&&k.on("smartresize",function(){clearTimeout(e),e=setTimeout(function(){0<A.length&&T(".svg-icon-holder.animated-in").each(function(){var e;T(this).css("opacity","1"),T(this).is("[id]")&&(e=T(this).attr("id").replace(/[^0-9]/g,""),A[e].finish())})},300)})):T(".svg-icon-holder").addClass("animated-in").css("opacity","1"),T("#nectar_fullscreen_rows .svg-icon-holder.animated-in").has("svg").each(function(e){var t=0;T(this).is("[data-animation-delay]")&&0<T(this).attr("data-animation-delay").length&&"false"!=T(this).attr("data-animation")&&(t=T(this).attr("data-animation-delay"));var a=T(this),n=a.find("svg").attr("id").replace(/[^0-9]/g,"");clearTimeout(N[e]),"false"==a.attr("data-animation")?(a.css("opacity","1"),A[n].finish()):0<T(this).parents(".active").length||0<T(this).parents("#footer-outer").length||0<T("body.mobile").length?(A[n].reset(),N[e]=setTimeout(function(){A[n].play()},t)):A[n].reset().stop()})}function Ct(){T(Z+".nectar-fancy-ul").each(function(){var e=T(this).attr("data-animation"),t=0,a,n;T(this).is("[data-animation-delay]")&&0<T(this).attr("data-animation-delay").length&&"false"!=T(this).attr("data-animation")&&(t=T(this).attr("data-animation-delay")),"true"==e&&(a=T(this),n=new Waypoint({element:a,handler:function(){0<a.parents(".wpb_tab").length&&"hidden"==a.parents(".wpb_tab").css("visibility")||a.hasClass("animated-in")||(setTimeout(function(){a.find("li").each(function(e){var t;T(this).delay(220*e).transition({opacity:"1",left:"0"},220,"easeOutCubic")})},t),a.addClass("animated-in")),n.destroy()},offset:"bottom-in-view"}))})}function xt(){T('.nectar-fancy-ul:not([data-list-icon="dot"])').each(function(){var e=T(this).attr("data-list-icon"),t=T(this).attr("data-color");T(this).find("li").each(function(){T(this).find("> i").remove(),T(this).prepend('<i class="icon-default-style '+e+" "+t+'"></i> ')})})}function kt(){T(".nectar-flip-box").each(function(){var e=parseInt(T(this).attr("data-min-height")),t=T(this).find(".flip-box-front .inner").height();e-80<=(t=T(this).find(".flip-box-back .inner").height()>T(this).find(".flip-box-front .inner").height()?T(this).find(".flip-box-back .inner").height():t)?T(this).find("> div").css("height",t+80):T(this).find("> div").css("height","auto"),T(this).parent().hasClass("wpb_wrapper")&&T(this).parent().css("transform","translateZ(0)")})}function Tt(){0<T(".nectar-flip-box").length&&(te.usingMobileBrowser&&E.on("click",".nectar-flip-box",function(){T(this).toggleClass("flipped")}),kt(),k.on("smartresize",kt))}function It(){T('.wpb_row .vc_col-sm-12 .nectar-slider-wrap[data-full-width="true"]').each(function(){0==T(this).parents(".wpb_row.full-width-section").length&&0==T(this).parents(".wpb_row.full-width-content").length&&T(this).parents(".wpb_row").addClass("full-width-section")}),!te.usingMobileBrowser&&0<T('body[data-boxed-style="1"]').length&&0<T("#boxed").length&&Ft()}function zt(){var i=te.winW,e=0<T(".body-border-right").length&&1e3<i?2*parseInt(T(".body-border-right").width()):0,s=0<T(".container-wrap").length?parseInt(T(".container-wrap").outerWidth()):k.width(),r,o,l,d,r,c,o=1==T("#boxed").length?(parseInt(T(".container-wrap").width())-parseInt(T(".main-content").width()))/2+4:(d=0<T('body[data-ext-responsive="true"]').length&&1e3<=i?180:0,r=s-e<=parseInt(T(".main-content").css("max-width"))?parseInt(T(".main-content").css("max-width")):s-e,c=parseInt(T(".main-content").css("max-width")),0<T('body.single-post[data-ext-responsive="true"]').length&&0<T(".container-wrap.no-sidebar").length&&(c=T(".post-area").width(),d=0),Math.ceil((r+d-c)/2));T(".carousel-outer").has('.carousel-wrap[data-full-width="true"]').css("overflow","visible"),T('.carousel-wrap[data-full-width="true"], .portfolio-items[data-col-num="elastic"]:not(.fullwidth-constrained), .full-width-content').each(function(){var e=0<T('#header-outer[data-format="left-header"]').length&&1e3<=i?parseInt(T('#header-outer[data-format="left-header"]').width()):0,t=0<T(".body-border-right").length&&1e3<i?2*parseInt(T(".body-border-right").width())-2:0,a;o=1==T("#boxed").length?(l=0==T("#nectar_fullscreen_rows").length?parseInt(T(".main-content").width()):parseInt(T(this).parents(".container").width()),0<T('body.single-post[data-ext-responsive="true"]').length&&0<T(".container-wrap.no-sidebar").length&&0<T(this).parents(".post-area").length?(c=T(".post-area").width(),d=0,r=s-t,Math.ceil((r+d-c)/2)):0<T(this).parents(".page-submenu").length?(parseInt(T(".container-wrap").width())-l)/2:(parseInt(T(".container-wrap").width())-l)/2+4):(0<T('body.single-post[data-ext-responsive="true"]').length&&0<T(".container-wrap.no-sidebar").length&&0<T(this).parents(".post-area").length?(c=T(".post-area").width(),d=0,r=s-t):(a=0==T("#nectar_fullscreen_rows").length?parseInt(T(".main-content").css("max-width")):parseInt(T(this).parents(".container").css("max-width")),s-t<=a&&(r=a),c=a,d=0<T('body[data-ext-responsive="true"]').length&&1e3<=te.winW?180:0,0<e&&(d=0<T('body[data-ext-responsive="true"]').length&&1e3<=te.winW?120:0)),Math.ceil((r+d-c)/2));var a=0;T(this).hasClass("carousel-wrap")&&(a=1),T(this).hasClass("portfolio-items")&&(a=5);var e=1==T("#boxed").length?l+parseInt(2*o):s-t+a,e,n;0==T("#boxed").length&&T(this).hasClass("portfolio-items")&&T(this).is('[data-gutter*="px"]')&&0<T(this).attr("data-gutter").length&&"none"!=T(this).attr("data-gutter")&&(e=1e3<s?s-t+3:s-t),T(this).parent().hasClass("default-style")?(l=0==T("#nectar_fullscreen_rows").length?parseInt(T(".main-content").width()):parseInt(T(this).parents(".container").width()),0!=T("#boxed").length?e=1==T("#boxed").length?l+parseInt(2*o):s+a:(e=1==T("#boxed").length?l+parseInt(2*o):s-t-.025*(s-t)+a,r=s-t<=l?l:s-t-.025*(s-t),o=Math.ceil((r-l)/2))):T(this).parent().hasClass("spaced")&&(l=0==T("#nectar_fullscreen_rows").length?parseInt(T(".main-content").width()):parseInt(T(this).parents(".container").width()),0!=T("#boxed").length?e=1==T("#boxed").length?l+parseInt(2*o)-.02*s:s+a:(e=1==T("#boxed").length?l+parseInt(2*o):s-t-Math.ceil(.02*(s-t))+a,o=Math.ceil(((s-t<=l?l:s-t-.02*(s-t))-l)/2+2))),0<!T(this).parents(".span_9").length&&!T(this).parent().hasClass("span_3")&&"sidebar-inner"!=T(this).parent().attr("id")&&"portfolio-extra"!=T(this).parent().attr("id")&&0<!T(this).find('.carousel-wrap[data-full-width="true"]').length&&0<!T(this).find(".nectar-carousel-flickity-fixed-content").length&&0<!T(this).find('.portfolio-items:not(".carousel")[data-col-num="elastic"]').length?0<T(".single-product").length&&0<T(this).parents("#tab-description").length&&0==T(this).parents(".full-width-tabs").length?T(this).css({visibility:"visible"}):T(this).hasClass("portfolio-items")?T(this).css({"margin-left":-o,left:0,width:e,visibility:"visible"}):0<T("#nectar_fullscreen_rows").length&&T(this).hasClass("wpb_row")?T(this).css({"margin-left":-o,width:e,visibility:"visible"}):T(this).css({left:0,"margin-left":-o,width:e,visibility:"visible"}):"portfolio-extra"==T(this).parent().attr("id")&&0!=T("#full_width_portfolio").length?T(this).css({left:0,"margin-left":-o,width:e,visibility:"visible"}):T(this).css({"margin-left":0,width:"auto",left:"0",visibility:"visible"})})}function Et(e){var t;switch(e){case"slow":t=.6;break;case"medium":t=.4;break;case"fast":t=.25}return t}function Ht(){te.usingMobileBrowser&&0<T('body[data-remove-m-parallax="1"]').length||(Mt(),T('.nectar-recent-posts-single_featured, .wpb_row.parallax_section, #page-header-bg[data-parallax="1"] .page-header-bg-image-wrap, .parallax_slider_outer .nectar-slider-wrap').each(function(){var e=T(this).attr("id");0==T(this).find('[data-parallax-speed="fixed"]').length&&(0==T(this).find(".row-bg").length?T("#"+e).parallaxScroll("50%",.25):T("#"+e+".parallax_section").parallaxScroll("50%",Et(T(this).find(".row-bg").attr("data-parallax-speed")))),T(this).addClass("nectar-parallax-enabled")}))}function At(){T(".full-width-section.wpb_row, .full-width-content.wpb_row").each(function(){if(!T(this).parent().hasClass("span_9")&&!T(this).parent().hasClass("span_3")&&"sidebar-inner"!=T(this).parent().attr("id")){if(0<T(this).parents("#portfolio-extra").length&&0==T("#full_width_portfolio").length)return!1;var e;"0"==T(this).index()&&0==s.length&&0==T(".page-header-no-bg").length&&0==T(".project-title").length&&0==T("body.single").length&&0==T(".project-title").length&&(T(this).addClass("first-section"),e=T(this),setTimeout(function(){e.addClass("loaded")},50))}})}function Mt(){te.usingMobileBrowser&&0<T('body[data-remove-m-parallax="1"]').length||T('.nectar-recent-posts-single_featured, .wpb_row.parallax_section, #page-header-bg[data-parallax="1"] .page-header-bg-image-wrap, .parallax_slider_outer .nectar-slider-wrap .slide-bg-wrap').each(function(){var e,t,a,n,i,s,r,e,e,n;0==T(this).find(".row-bg").length&&0<T(this).find(".page-header-bg-image").length||(0==T(this).find(".row-bg").length&&0<T(this).find(".image-bg").length?(e=!1,0==T(".wpb_row").length&&0<T(this).parents('.nectar-slider-wrap[data-full-width="true"]').length&&0<T(this).parents(".parallax_slider_outer").length&&"1"==T(this).parents(".parallax_slider_outer").index()&&(e=!0),0<T("#portfolio-extra").length&&0<T(this).parents(".wpb_row").length&&0<T(this).parents(".parallax_slider_outer").length&&"0"==T(this).parents(".wpb_row").index()&&(e=!0),0<T(this).parents(".top-level").length&&!te.usingFrontEndEditor||e&&!te.usingFrontEndEditor?T(this).find(".image-bg").css({height:Math.ceil(.25*T(this).parent().offset().top)+T(this).outerHeight(!0)}):T(this).find(".image-bg").css({height:Math.ceil(.25*k.height())+T(this).outerHeight(!0)})):0==T(this).find(".row-bg").length&&0<T(this).find(".video-wrap").length?(e=!1,0==T(".wpb_row").length&&0<T(this).parents('.nectar-slider-wrap[data-full-width="true"]').length&&0<T(this).parents(".parallax_slider_outer").length&&"1"==T(this).parents(".parallax_slider_outer").index()&&(e=!0),0<T("#portfolio-extra").length&&0<T(this).parents(".wpb_row").length&&0<T(this).parents(".parallax_slider_outer").length&&"0"==T(this).parents(".wpb_row").index()&&(e=!0),0<T(this).parents(".top-level").length&&!te.usingFrontEndEditor||e&&!te.usingFrontEndEditor?T(this).find(".video-wrap").css({height:Math.ceil(.25*T(this).parent().offset().top)+T(this).outerHeight(!0)}):T(this).find(".video-wrap").css({height:Math.ceil(.25*k.height())+T(this).outerHeight(!0)}),a=1280,n=720,r=(t=T(this).find(".video-wrap video")).parent().width()/a,e=t.parent().height()/n,t.width((e=e<r?r:e)*a),t.height(e*n)):T(this).is(".nectar-recent-posts-single_featured")&&0<T(this).parents(".top-level").length&&!te.usingFrontEndEditor||T(this).hasClass("top-level")&&!te.usingFrontEndEditor||(n=0<T(this).find('.row-bg[data-parallax-speed="fast"]').length?60:0,T(this).find(".row-bg").css({height:Math.ceil(k.height()*Et(T(this).find(".row-bg").attr("data-parallax-speed")))+T(this).outerHeight(!0)+n})))})}function Ot(){T('.wpb_wrapper > .nectar-slider-wrap[data-full-width="true"]').each(function(){T(this).parent().hasClass("span_9")||T(this).parent().hasClass("span_3")||"sidebar-inner"==T(this).parent().attr("id")||"0"==T(this).parents(".wpb_row").index()&&T(this).addClass("first-nectar-slider")});var e=(0==T("#portfolio-extra").length?T(".main-content > .row > *"):T(".main-content > .row #portfolio-extra > *")).length,e=(0==T("#portfolio-extra").length?0<T(".main-content > .row > .wpb_row").length?T(".main-content > .row > .wpb_row"):T(".main-content > .row > *"):T(".main-content > .row #portfolio-extra > *")).length;T('.full-width-section, .full-width-content:not(.page-submenu .full-width-content):not(.blog-fullwidth-wrap), .row > .nectar-slider-wrap[data-full-width="true"], .wpb_wrapper > .nectar-slider-wrap[data-full-width="true"], .portfolio-items[data-col-num="elastic"]').each(function(){if(!T(this).parent().hasClass("span_9")&&!T(this).parent().hasClass("span_3")&&"sidebar-inner"!=T(this).parent().attr("id"))if(0<T(this).parents(".wpb_row").length){if(0<T(this).parents("#portfolio-extra").length&&0==T("#full_width_portfolio").length)return!1;"0"==T(this).parents(".wpb_row").index()&&0!=s.length||"0"==T(this).parents(".wpb_row").index()&&0==s.length&&0==T(".page-header-no-bg").length&&0==T(".project-title").length&&"0"==T(this).parents(".wpb_row").index()&&0==T(".project-title").length&&0==T('body[data-bg-header="true"]').length&&(0==T(".single").length?T(".container-wrap").css("padding-top","0px"):T(this).addClass("first-section")),T(this).parents(".wpb_row").index()==e-1&&0==T("#respond").length&&"portfolio-filters-inline"!=T(this).attr("id")&&(T(".container-wrap").css("padding-bottom","0px"),T("#call-to-action .triangle").remove())}else{if(0<T(this).parents("#portfolio-extra").length&&0==T("#full_width_portfolio").length)return!1;0==T(this).find(".portfolio-filters-inline").length&&"post-area"!=T(this).attr("id")&&("0"==T(this).index()&&0!=s.length||"0"!=T(this).index()||0!=s.length||"0"!=T(this).index()||0!=T(".page-header-no-bg").length||"0"!=T(this).index()||T(this).hasClass("blog_next_prev_buttons")||T(this).hasClass("nectar-shop-outer")||0!=T(this).parents(".pum-container").length||(1==T('body[data-header-resize="0"]').length&&0==T(".single").length||0<T("body.material").length&&0==T(".single").length?0<!T("body.blog .blog-fullwidth-wrap > .masonry:not(.meta-overlaid)").length&&T(".container-wrap").css("padding-top","0px"):T(this).addClass("first-section")),T(this).index()==e-1&&0==T("#respond").length&&0==T("body.woocommerce-checkout").length&&(T(".container-wrap").css("padding-bottom","0px"),T(".bottom_controls").css("margin-top","0px"),T("#call-to-action .triangle").remove()))}}),T('#portfolio-extra > .nectar-slider-wrap[data-full-width="true"], .portfolio-wrap').each(function(){T(this).index()==e-1&&0==T("#commentform").length&&0==T("#pagination").length&&(0<parseInt(T(".container-wrap").css("padding-bottom"))&&T(this).css("margin-bottom","-40px"),T("#call-to-action .triangle").remove())}),T(".portfolio-filters").each(function(){"0"==T(this).index()&&0!=s.length||"0"==T(this).index()?T(this).addClass("first-section nder-page-header"):("0"==T(this).index()&&0==s.length||"0"==T(this).index())&&T(this).css({"margin-top":"0px"}).addClass("first-section")}),T(".portfolio-filters-inline").each(function(){0<T(this).parents(".wpb_row").length||("0"==T(this).index()&&0!=s.length||"0"==T(this).index()?T(this).addClass("first-section nder-page-header"):("0"==T(this).index()&&0==s.length||"0"==T(this).index())&&T(this).css({"margin-top":"-30px","padding-top":"50px"}).addClass("first-section"))})}function St(){0==T("#boxed").length&&T(".full-width-section[data-top-percent], .full-width-section[data-bottom-percent], .full-width-content[data-top-percent], .full-width-content[data-bottom-percent]").each(function(){var e=k.width(),t=T(this).attr("data-top-percent")?T(this).attr("data-top-percent"):"skip",a=T(this).attr("data-bottom-percent")?T(this).attr("data-bottom-percent"):"skip";"skip"!=t&&T(this).css("padding-top",e*(parseInt(t)/100)),"skip"!=a&&T(this).css("padding-bottom",e*(parseInt(a)/100))})}function Ft(){0<T("#boxed").length&&T(".full-width-section[data-top-percent], .full-width-section[data-bottom-percent], .full-width-content[data-top-percent], .full-width-content[data-bottom-percent]").each(function(){var e=T(this).attr("data-top-percent")?T(this).attr("data-top-percent"):"skip",t=T(this).attr("data-bottom-percent")?T(this).attr("data-bottom-percent"):"skip";"skip"!=e&&T(this).css("padding-top",e),"skip"!=t&&T(this).css("padding-bottom",t)})}function $t(){te.usingMobileBrowser&&St(),k.on("resize",St)}function Wt(){var i=0<T("body.vc_editor").length?".vc_element > ":"";T(".main-content > .row > "+i+" .full-width-content, #portfolio-extra > "+i+" .full-width-content, .woocommerce-tabs #tab-description > .full-width-content, .post-area.span_12 article .content-inner > .full-width-content").each(function(){var a,t,n;1<T(this).find("> .span_12 > "+i+" .col").length&&(t=a=0,T(this).find("> .span_12 > "+i+"  .col").each(function(){n=0<T(this).find("> .vc_column-inner > .wpb_wrapper").length?".vc_column-inner":".column-inner-wrap > .column-inner";var e=E.is('[data-flex-cols="true"]')?parseInt(T(this).find("> .vc_column-inner").css("padding-top")):parseInt(T(this).css("padding-top")),t=2<i.length&&0<T(this).find("> .vc_column-inner").length?parseInt(T(this).find("> .vc_column-inner").css("padding-top")):0;T(this).find("> "+n+" > .wpb_wrapper").height()+2*e+t>a&&(a=T(this).find("> "+n+" > .wpb_wrapper").height()+2*e+t)}),T(this).find("> .span_12 > "+i+" .col").each(function(){n=0<T(this).find("> .vc_column-inner > .wpb_wrapper").length?".vc_column-inner":".column-inner-wrap > .column-inner",0<T(this).find("> "+n+" > .wpb_wrapper > *").length?(i.length<2&&!T(this).parent().parent().hasClass("vc_row-o-equal-height")||2<i.length&&!T(this).parent().parent().parent().hasClass("vc_row-o-equal-height"))&&(T(this).css("height",a),E.is('[data-flex-cols="true"]')&&T(this).find("> .vc_column-inner").css("height",a)):T(this).is('[data-using-bg="true"]')&&(T(this).css("min-height",a),E.is('[data-flex-cols="true"]')&&T(this).find("> .vc_column-inner").css("min-height",a),T(this).is('[data-animation*="reveal"]')&&T(this).find(".column-inner").css("min-height",a))}),te.winW<1e3&&T(this).find("> .span_12 > "+i+" .col .wpb_row .col").css("min-height","0px"),T(this).hasClass("vertically-align-columns")&&1e3<te.winW&&!T(this).hasClass("vc_row-o-equal-height")&&T(this).find("> .span_12 > "+i+" .col").each(function(){n=0<T(this).find("> .vc_column-inner > .wpb_wrapper").length?".vc_column-inner":".column-inner-wrap > .column-inner",t=T(this).find("> "+n+" > .wpb_wrapper").height();var e=T(this).height()/2-t/2;e<=0&&(e=0),T(this).find("> "+n+" > .wpb_wrapper").css("margin-top",e).css("margin-bottom",e)}))}),0==T('body[data-flex-cols="true"]').length&&(T(".main-content > .row > .wpb_row:not(.full-width-content).vc_row-o-equal-height").each(function(){var t;0<T(this).find(">.span_12 > "+i+' .wpb_column[data-animation*="reveal"]').length&&(t=0,T(this).find("> .span_12 > "+i+" .col").each(function(){var e=parseInt(T(this).find("> .column-inner-wrap > .column-inner").css("padding-top"));T(this).find("> .column-inner-wrap > .column-inner").height()+2*e>t&&(t=T(this).find("> .column-inner-wrap > .column-inner").height()+2*e)}),T(this).find("> .span_12 > "+i+" .col").each(function(){0<T(this).find("> .column-inner-wrap > .column-inner .wpb_wrapper > *").length?T(this).find("> .column-inner-wrap").css("height",t):(T(this).css("min-height",t),T(this).is('[data-animation*="reveal"]')&&T(this).find(".column-inner").css("min-height",t))}))}),T(".wpb_row.vc_row-o-equal-height>.span_12> "+i+'.wpb_column[class*="padding-"][data-padding-pos="all"]').each(function(){0==T(this).parents(".tabbed").length&&T(this).css({"padding-top":T(this).css("padding-left"),"padding-bottom":T(this).css("padding-left")})}))}function jt(){T(".wpb_row:has(.nectar-parallax-scene)").each(function(e){var t=parseInt(T(this).find(".nectar-parallax-scene").attr("data-scene-strength"));P[e]=T(this).find(".nectar-parallax-scene").parallax({scalarX:t,scalarY:t});var a=T(this).find(".nectar-parallax-scene li");T.each(a,function(){var e,t;0<T(this).find("div").length&&((t=T(this).find("div").css("background-image").replace(/"/g,"").replace(/url\(|\)$/gi,""))&&""!==t&&"none"!==t&&(a=a.add(T("<img>").attr("src",t))))})})}function Yt(){T("ul.checks li").each(function(){0==T(this).find("i.fa-check-circle").length&&T(this).prepend('<i class="fa fa-check-circle"></i>')})}function Bt(){E.on("click",'.nectar-cta[data-using-bg="true"]:not([data-style="material"]) .link_wrap',function(){T(this).find("a.link_text")[0].click()})}function qt(){T('.nectar-cta[data-style="arrow-animation"]').addClass("loaded")}function Pt(){var n=1==U?"200%":"93%",i=1==U?"200%":"75%",s;T(Z+'.row-bg-wrap[data-bg-animation]:not([data-bg-animation="none"]):not([data-bg-animation*="displace-filter"]) .row-bg').each(function(){var e=T(this).parents(".row-bg-wrap").attr("data-bg-animation"),t,a;s="zoom-out-reveal"!=e&&-1==e.indexOf("reveal-from-")?n:i,!T(this).hasClass("using-image")&&0==T(this).parents(".nectar-scrolling-text").length&&"zoom-out-reveal"!=e&&-1==e.indexOf("reveal-from-")||(t=T(this),a=new Waypoint({element:t.parents(".row-bg-wrap"),handler:function(){0<t.parents(".wpb_tab").length&&"hidden"==t.parents(".wpb_tab").css("visibility")||t.hasClass("animated-in")||(t.parents(".inner-wrap").addClass("animated-in"),("zoom-out-reveal"==e||-1<e.indexOf("reveal-from-")||0<t.parents(".nectar-scrolling-text").length)&&t.parents(".row-bg-wrap").addClass("animated-in")),a.destroy()},offset:s}))})}function Lt(){var n=1==U?"200%":"93%",i=1==U?"200%":"80%",s;T(Z+'.column-image-bg-wrap[data-bg-animation]:not([data-bg-animation="none"]):not([data-bg-animation*="displace-filter"]) .column-image-bg').each(function(){var e=T(this).parents(".column-image-bg-wrap").attr("data-bg-animation");s="zoom-out-reveal"!=e&&-1==e.indexOf("reveal-from-")?n:"ro-reveal-from-bottom"==e&&0==U?"95%":"ro-reveal-from-top"==e&&0==U?"65%":i;var t=T(this),a=new Waypoint({element:t.parents(".column-image-bg-wrap"),handler:function(){0<t.parents(".wpb_tab").length&&"hidden"==t.parents(".wpb_tab").css("visibility")||t.hasClass("animated-in")||(t.parents(".inner-wrap").addClass("animated-in"),("zoom-out-reveal"==e||-1<e.indexOf("reveal-from-"))&&(t.parents(".column-image-bg-wrap").addClass("animated-in"),t.parents(".column-image-bg-wrap").siblings(".column-bg-overlay-wrap").addClass("animated-in"),t.parents(".vc_column-inner").addClass("revealed-bg"))),a.destroy()},offset:s})}),T(Z+".column-bg-overlay-wrap[data-bg-animation]").each(function(){s=i;var e=T(this),t=T(this).attr("data-bg-animation"),a;("zoom-out-reveal"==t||0<t.indexOf("reveal-from-"))&&0==e.parent().find(".column-image-bg-wrap").length&&(a=new Waypoint({element:e,handler:function(){e.hasClass("animated-in")||(e.addClass("animated-in"),e.parents(".vc_column-inner").addClass("revealed-bg")),a.destroy()},offset:s}))})}function Rt(){var e=1==U?"200%":"88%",n=1==U?"200%":"70%",t=1==U?"200%":"70%";T(Z+".img-with-animation").each(function(){var a=T(this),n=a.is("[data-animation]")?a.attr("data-animation"):"fade-in";("ro-reveal-from-right"==n&&"88%"==e||"ro-reveal-from-left"==n&&"88%"==e)&&(e="75%");var i=new Waypoint({element:a,handler:function(){var e,t;0<a.parents(".wpb_tab").length&&"hidden"==a.parents(".wpb_tab").css("visibility")||a.hasClass("animated-in")||(!x||0<T('body[data-responsive="0"]').length)&&(e=a.is("[data-delay]")?a.attr("data-delay"):0,t=0<a.parents(".hover-wrap").length?a.parents(".hover-wrap"):a,"fade-in-from-left"==n||"fade-in-from-right"==n?t.delay(e).transition({opacity:1,x:"0px"},C,_):"fade-in-from-bottom"==n?t.delay(e).transition({opacity:1,y:"0px"},C,_):"fade-in"==n?t.delay(e).transition({opacity:1},C,_):"grow-in"==n?setTimeout(function(){t.transition({scale:1,opacity:1},C,_)},e):"flip-in"==n?setTimeout(function(){t.transition({rotateY:0,opacity:1},C,_)},e):"flip-in-vertical"==n?setTimeout(function(){t.transition({rotateX:0,opacity:1},C,_)},e):"ro-reveal-from-left"!=n&&"ro-reveal-from-right"!=n&&"ro-reveal-from-bottom"!=n&&"ro-reveal-from-top"!=n||a.parents(".img-with-aniamtion-wrap").addClass("animated-in"),a.addClass("animated-in")),i.destroy()},offset:e})}),T(Z+".nectar_cascading_images").each(function(){var e=T(this),a=T(this).is("[data-animation-timing]")?T(this).attr("data-animation-timing"):175,a=parseInt(a),t=new Waypoint({element:e,handler:function(){0<e.parents(".wpb_tab").length&&"hidden"==e.parents(".wpb_tab").css("visibility")||e.hasClass("animated-in")||(!x||0<T('body[data-responsive="0"]').length)&&(e.find(".cascading-image").each(function(e){var t=T(this);"flip-in"==t.attr("data-animation")||"flip-in-vertical"==t.attr("data-animation")?setTimeout(function(){t.find(".inner-wrap").css({opacity:1,transform:"rotate(0deg) translateZ(0px)"})},e*a):"grow-in-reveal"==t.attr("data-animation")?setTimeout(function(){t.find(".inner-wrap").css({opacity:1,transform:"translateX(0px) translateY(0px) scale(1,1) translateZ(0px)"}),t.find(".inner-wrap img").css({transform:"translateX(0px) translateY(0px) scale(1,1) translateZ(0px)"})},e*a):setTimeout(function(){t.find(".inner-wrap").css({opacity:1,transform:"translateX(0px) translateY(0px) scale(1,1) translateZ(0px)"})},e*a)}),e.addClass("animated-in")),t.destroy()},offset:n})}),T(Z+'.col.has-animation:not([data-animation*="reveal"]), '+Z+'.wpb_column.has-animation:not([data-animation*="reveal"]), '+Z+".nectar-fancy-box.has-animation").each(function(t){var a=T(this);(a.is('[data-animation="flip-in-vertical"]')||a.is('[data-animation="slight-twist"]'))&&0==T('.page-submenu[data-sticky="true"]').length&&0==a.parents(".nectar-scrolling-tabs").length&&a.parents(".col.span_12").addClass("flip-in-vertical-wrap");var n=new Waypoint({element:a,handler:function(){var e;0<a.parents(".wpb_tab").length&&"hidden"==a.parents(".wpb_tab").css("visibility")||a.hasClass("animated-in")||(!x||0<T('body[data-responsive="0"]').length)&&(e=a.attr("data-delay"),"fade-in-from-left"==a.attr("data-animation")||"fade-in-from-right"==a.attr("data-animation")?R[t]=setTimeout(function(){a.transition({opacity:1,x:"0px"},C,_)},e):"fade-in-from-bottom"==a.attr("data-animation")?R[t]=setTimeout(function(){a.transition({opacity:1,y:"0px"},C,_)},e):"fade-in"==a.attr("data-animation")?R[t]=setTimeout(function(){a.transition({opacity:1},C,_)},e):"grow-in"==a.attr("data-animation")||"zoom-out"==a.attr("data-animation")?R[t]=setTimeout(function(){a.transition({scale:1,opacity:1},C,_)},e):"flip-in"==a.attr("data-animation")?R[t]=setTimeout(function(){a.transition({rotateY:0,opacity:1},C,_)},e):"flip-in-vertical"==a.attr("data-animation")?R[t]=setTimeout(function(){a.transition({rotateX:0,y:0,opacity:1},C,_)},e):"slight-twist"==a.attr("data-animation")&&(R[t]=setTimeout(function(){anime({targets:a[0],rotateY:[20,0],rotateZ:[-4,0],opacity:1,easing:_,duration:C})},e)),a.hasClass("boxed")&&(a.addClass("no-pointer-events"),setTimeout(function(){a.removeClass("no-pointer-events")},parseInt(C)+parseInt(e)+30)),a.find('.nectar-post-grid-wrap[data-style="mouse_follow_image"]')&&setTimeout(function(){a[0].style.transform="none"},parseInt(C)+parseInt(e)+30),a.addClass("animated-in")),n.destroy()},offset:e})}),T(Z+'.wpb_column.has-animation[data-animation*="reveal"]').each(function(){var a=T(this),n=new Waypoint({element:a,handler:function(){var e,t;0<a.parents(".wpb_tab").length&&"hidden"==a.parents(".wpb_tab").css("visibility")||a.hasClass("animated-in")||(e=a.attr("data-delay"),(!x||0<T('body[data-responsive="0"]').length)&&(t=0<a.find("> .vc_column-inner").length,"reveal-from-bottom"==a.attr("data-animation")||"reveal-from-top"==a.attr("data-animation")?setTimeout(function(){a.hasClass("animated-in")&&(1==t?a.find("> .vc_column-inner").transition({y:0},C,_):a.find(".column-inner-wrap, .column-inner").transition({y:0},C,_,function(){a.find(".column-inner-wrap, .column-inner").addClass("no-transform")}))},e):"reveal-from-right"!=a.attr("data-animation")&&"reveal-from-left"!=a.attr("data-animation")||setTimeout(function(){a.hasClass("animated-in")&&(1==t?a.find("> .vc_column-inner").transition({x:0},C,_):a.find(".column-inner-wrap, .column-inner").transition({x:0},C,_,function(){a.find(".column-inner-wrap, .column-inner").addClass("no-transform")}))},e),a.addClass("animated-in"))),n.destroy()},offset:t})})}function Nt(){T(".nectar_cascading_images").each(function(){0<T(this).parents(".vc_row-o-equal-height").length&&0<T(this).parents(".wpb_column").length&&T(this).css("max-width",T(this).parents(".wpb_column").width()),T(this).find(".bg-color").each(function(){var e=0,t=0,a;0==T(this).parent().find(".img-wrap").length?((a=T(this).parents(".cascading-image").siblings('.cascading-image[data-has-img="true"]').first()).css({position:"relative",visiblity:"hidden"}),e=a.find(".img-wrap").height(),t=a.find(".img-wrap").width(),0==a.index()?a.css({visiblity:"visible"}):a.css({position:"absolute",visiblity:"visible"})):(e=T(this).parent().find(".img-wrap").height(),t=T(this).parent().find(".img-wrap").width()),T(this).css({height:e,width:t})})})}function Vt(){var a;0<T(".nectar_cascading_images").length&&(a=[],T(".nectar_cascading_images").each(function(t){imagesLoaded(T(this),function(e){Nt(),T(e.elements[0]).is('[data-parallax="yes"]')&&!te.usingMobileBrowser&&0==T("#nectar_fullscreen_rows").length&&(a[t]=new Xt(T(e.elements[0]),T(e.elements[0]).attr("data-parallax-intensity")))})}),k.on("resize",Nt))}function Xt(e,t){switch(this.$element=e,this.inView=!1,this.topLevel=!1,this.lastY=0,this.layer1Parallax=!!this.$element.is('[data-layer-1-parallax="yes"]'),t){case"subtle":this.intensity=.09;break;case"medium":this.intensity=.15;break;case"high":this.intensity=.25}this.calculatePos(),this.trackView(),this.animate(),(0<T(".portfolio-filters").length||0<T(".portfolio-filters-inline").length)&&setInterval(this.calculatePos.bind(this),700),k.on("resize",this.calculatePos.bind(this))}function Dt(){var t=1==U?"200%":"bottom-in-view";T(Z+".nectar-split-heading").each(function(){var e=T(this),a=e.is("[data-animation-delay]")?parseInt(e.attr("data-animation-delay")):0,n=new Waypoint({element:e,handler:function(){var t;0<e.parents(".wpb_tab").length&&"hidden"==e.parents(".wpb_tab").css("visibility")||e.hasClass("animated-in")||(!x||0<T('body[data-responsive="0"]').length)&&setTimeout(function(){e.is('[data-animation-type="line-reveal-by-space"]')?(t=parseInt(C)<900?C:"900",e.find("> * > span").each(function(e){T(this).find("> .inner").transition({y:"0px"},C,_)})):e.is('[data-animation-type="letter-fade-reveal"]')?(t=parseInt(C)<1e3?C:"1000",e.find("> * > span span").each(function(e){T(this).delay(8*e).transition({y:"0px",opacity:"1"},t,_)})):e.find(".heading-line").each(function(e){T(this).find("> div").delay(70*e).transition({y:"0px"},C,_)}),e.addClass("animated-in")},a),n.destroy()},offset:t})})}function Qt(){var a=1==U?"200%":"bottom-in-view",e=0<T('#nectar_fullscreen_rows[data-mobile-disable="on"]').length&&te.usingMobileBrowser?".nectar-progress-bar":Z+".nectar-progress-bar";te.usingMobileBrowser&&"bottom-in-view"==a&&(a="70%"),T(e).parent().each(function(){var e=T(this),t=new Waypoint({element:e,handler:function(){0<e.parents(".wpb_tab").length&&"hidden"==e.parents(".wpb_tab").css("visibility")||e.hasClass("completed")||("100%"==a&&e.find(".nectar-progress-bar .bar-wrap").css("opacity","1"),e.find(".nectar-progress-bar").each(function(e){var t=T(this).find("span").attr("data-width"),n=parseInt(T(this).find("span strong i").text()),i=T(this);i.find("span").delay(90*e).transition({width:t+"%"},1050,"easeInOutQuint",function(){}),setTimeout(function(){var e={useEasing:!1},t=i.find("span strong i")[0],a;new Xe(t,0,n,0,1,e).start(),i.find("span strong").transition({opacity:1},550,"easeInCirc")},90*e),"100"==t&&i.find("span strong").addClass("full")}),e.addClass("completed")),t.destroy()},offset:a})})}function Zt(){var e=1==U?"200%":"75%";T(Z+'.wpb_column[data-border-animation="true"]').each(function(){var t=T(this),a=new Waypoint({element:t,handler:function(){var e;0<t.parents(".wpb_tab").length&&"hidden"==t.parents(".wpb_tab").css("visibility")||t.hasClass("completed")||(e=0<t.attr("data-border-animation-delay").length?parseInt(t.attr("data-border-animation-delay")):0,setTimeout(function(){t.find(".border-wrap").addClass("animation"),t.find(".border-wrap").addClass("completed")},e)),a.destroy()},offset:e})})}function Ut(){var a=1==U?"200%":"80%";T(Z+".nectar_food_menu_item").parent().each(function(){var e=T(this),t=new Waypoint({element:e,handler:function(){0<e.parents(".wpb_tab").length&&"hidden"==e.parents(".wpb_tab").css("visibility")||e.hasClass("completed")||e.find(".nectar_food_menu_item").each(function(e){var t=T(this);setTimeout(function(){t.addClass("animated-in")},150*e)}),t.destroy()},offset:a})})}function Gt(){var n=1==U?"200%":"bottom-in-view";T(Z+'.divider-small-border[data-animate="yes"], '+Z+'.divider-border[data-animate="yes"]').each(function(){var t=T(this).hasClass("divider-small-border")?1300:1500,e=T(this),a=new Waypoint({element:e,handler:function(){0<e.parents(".wpb_tab").length&&"hidden"==e.parents(".wpb_tab").css("visibility")||e.hasClass("completed")||(e.each(function(){T(this).css({transform:"scale(0,1)",visibility:"visible"});var e=T(this);e.delay(e.attr("data-animation-delay")).transition({transform:"scale(1, 1)"},t,"cubic-bezier(.18,1,.22,1)")}),e.addClass("completed")),a.destroy()},offset:n})})}function Jt(){T('.nectar_image_with_hotspots[data-hotspot-icon="numerical"]').each(function(){T(this).find(".nectar_hotspot_wrap").each(function(e){var t=T(this);setTimeout(function(){t.find(".nectar_hotspot").addClass("pulse")},300*e)})});var a=[];T('.nectar_image_with_hotspots:not([data-tooltip-func="click"]) .nectar_hotspot').each(function(t){a[t]="",T(this).on("mouseover",function(){clearTimeout(a[t]),T(this).parent().css({"z-index":"400",height:"auto",width:"auto"})}),T(this).on("mouseleave",function(){var e=T(this);e.parent().css({"z-index":"auto"}),a[t]=setTimeout(function(){e.parent().css({height:"30px",width:"30px"})},300)})})}function Kt(){T(".nectar_image_with_hotspots").each(function(){T(this).find(".nectar_hotspot_wrap").each(function(){var e;690<te.winW?(0<T(this).parents('.nectar_image_with_hotspots[data-tooltip-func="hover"]').length&&(T(this).find(".nectar_hotspot").removeClass("click"),T(this).find(".nttip").removeClass("open")),T(this).find(".nttip .inner a.tipclose").remove(),T(".nttip").css("height","auto"),T(this).css({width:"auto",height:"auto"}),T(this).find(".nttip").removeClass("force-right").removeClass("force-left").removeClass("force-top").css("width","auto"),(e=T(this).find(".nttip").offset()).left>T(this).parents(".nectar_image_with_hotspots").width()-200?T(this).find(".nttip").css("width","250px"):T(this).find(".nttip").css("width","auto"),e.left<0?T(this).find(".nttip").addClass("force-right"):e.left+T(this).find(".nttip").outerWidth(!0)>te.winW?T(this).find(".nttip").addClass("force-left").css("width","250px"):e.top+T(this).find(".nttip").height()+35>k.height()&&0<T("#nectar_fullscreen_rows").length&&T(this).find(".nttip").addClass("force-top"),0==T(this).find("> .open").length&&T(this).css({width:"30px",height:"30px"})):(T(this).find(".nttip").removeClass("force-left").removeClass("force-right").removeClass("force-top"),T(this).find(".nectar_hotspot").addClass("click"),0==T(this).find(".nttip a.tipclose").length&&T(this).find(".nttip .inner").append('<a href="#" class="tipclose"><span></span></a>'),T(".nttip").css("height",k.height()))})})}function ea(){0!=T(".nectar_image_with_hotspots").length&&(Jt(),E.on("click",".nectar_hotspot.click",function(){var e;return T(this).parents(".nectar_image_with_hotspots").find(".nttip").removeClass("open"),T(this).parent().find(".nttip").addClass("open"),T(this).parents(".nectar_image_with_hotspots").find(".nectar_hotspot").removeClass("open"),T(this).parent().find(".nectar_hotspot").addClass("open"),690<te.winW&&(T(this).parent().css({"z-index":"120",height:"auto",width:"auto"}),e=T(this),setTimeout(function(){e.parents(".nectar_image_with_hotspots").find(".nectar_hotspot_wrap").each(function(){0==T(this).find("> .open").length&&T(this).css({height:"30px",width:"30px","z-index":"auto"})})},300)),te.winW<=690&&T(this).parents('.wpb_row, [class*="vc_col-"]').css("z-index","200"),!1}),E.on("click",".nectar_hotspot.open",function(){return T(this).parent().find(".nttip").removeClass("open"),T(this).parent().find(".nectar_hotspot").removeClass("open"),T(this).parents(".wpb_row").css("z-index","auto"),!1}),E.on("click",".nttip.open",function(){if(te.winW<690)return T(this).parents(".nectar_image_with_hotspots").find(".nttip").removeClass("open"),T(this).parents(".nectar_image_with_hotspots").find(".nectar_hotspot").removeClass("open"),T(this).parents(".wpb_row").css("z-index","auto"),!1}),Kt(),k.on("resize",Kt))}function ta(){var a=1==U?"200%":"50%";T(Z+'.nectar_image_with_hotspots[data-animation="true"]').each(function(){var e=T(this),t=new Waypoint({element:e,handler:function(){0<e.parents(".wpb_tab").length&&"hidden"==e.parents(".wpb_tab").css("visibility")||e.hasClass("completed")||(e.addClass("completed"),e.find(".nectar_hotspot_wrap").each(function(e){var t=T(this),a=0<t.parents(".col.has-animation").length?1:0;setTimeout(function(){t.addClass("animated-in")},175*(e+a))})),t.destroy()},offset:a})})}function aa(){var e=[].slice.call(z.querySelectorAll("[data-nectar-img-src]")),t,n;"IntersectionObserver"in I?(t={rootMargin:"500px"},na(),k.off("resize.nectarLazySizing",na),k.on("resize.nectarLazySizing",na),n=new IntersectionObserver(function(e){e.forEach(function(e){var t,a,e;e.isIntersecting&&(a=(t=e.target).getAttribute("data-nectar-img-src"),t.classList.contains("nectar-lazy")?(t.addEventListener("load",function(){t.style.height="",t.style.width="",t.classList.add("loaded"),t.removeAttribute("data-nectar-img-src"),n.unobserve(t)}),t.src=a,(e=t.getAttribute("data-nectar-img-srcset"))&&(t.setAttribute("srcset",e),t.removeAttribute("data-nectar-img-srcset"))):(t.style.backgroundImage="url('"+a+"')",t.classList.add("loaded"),t.removeAttribute("data-nectar-img-src"),n.unobserve(t)))})},t),e.forEach(function(e){n.observe(e)})):e.forEach(function(e){var t;e.classList.contains("nectar-lazy")?(e.style.height="",e.style.width="",e.src=e.getAttribute("data-nectar-img-src"),(t=e.getAttribute("data-nectar-img-srcset"))&&(e.setAttribute("srcset",t),e.removeAttribute("data-nectar-img-srcset"))):e.style.backgroundImage="url('"+e.getAttribute("data-nectar-img-src")+"')",e.classList.add("loaded"),e.removeAttribute("data-nectar-img-src")})}function na(){T("img.nectar-lazy:not(.loaded)").each(function(){T(this).css({height:"",width:""});var e=parseInt(T(this).attr("height")),t=parseInt(T(this).attr("width")),a=(0<T(this).parents(".nectar_cascading_images").length?T(this).parents(".bg-layer"):T(this)).width();0<T(this).parents('.img-with-aniamtion-wrap[data-shadow*="depth"]').length&&(a=T(this).parents(".img-with-aniamtion-wrap").width());var a=We(t,e,a=0<T(this).parents(".nectar-post-grid-item-bg-wrap-inner").length?T(this).parents(".nectar-post-grid-item-bg-wrap-inner").width():a,2e3);T(this).css({height:a.height+"px",width:a.width+"px"})})}function ia(){F=[],W=[],te.usingMobileBrowser||(T('.nectar-post-grid[data-indicator="yes"]').each(function(e){F[e]=new se(T(this),"view-indicator")}),T('.nectar-post-grid-wrap[data-style="mouse_follow_image"] .nectar-post-grid').each(function(e){W[e]=new se(T(this),"post-grid-images")}))}function sa(){X=[],ia(),T(".nectar-post-grid-wrap").each(function(e){X[e]=new ra(T(this))})}function ra(e){this.el=e,this.currentPage=0,this.activeFilter=1,this.activeCatTotal=0,this.settingsData=JSON.parse(this.el.attr("data-el-settings")),this.queryData=JSON.parse(this.el.attr("data-query")),this.sortable=this.el.find(".nectar-post-grid-filters").attr("data-sortable"),this.initialMarkup(),this.clickEvents()}function oa(){var a=1==U?"200%":"75%";T(Z+".nectar-post-grid-wrap").each(function(){var e=T(this),t=new Waypoint({element:e,handler:function(){0<e.parents(".wpb_tab").length&&"hidden"==e.parents(".wpb_tab").css("visibility")||e.hasClass("completed")||(e.find(".nectar-post-grid-filters").addClass("animated-in"),e.find(".nectar-post-grid-item").each(function(e){var t=T(this);setTimeout(function(){t.addClass("animated-in")},90*e)}),setTimeout(function(){e.addClass("finished-animating")},950)),t.destroy()},offset:a})})}function la(){var a=1==U?"200%":"bottom-in-view";T(Z+".nectar-animated-title").each(function(){var e=T(this),t=new Waypoint({element:e,handler:function(){0<e.parents(".wpb_tab").length&&"hidden"==e.parents(".wpb_tab").css("visibility")||e.hasClass("completed")||e.addClass("completed"),t.destroy()},offset:a})})}function da(){var r=1==U?"200%":"bottom-in-view",o="";te.usingMobileBrowser&&"bottom-in-view"==r&&(r="85%"),T(Z+".nectar-highlighted-text").each(function(e){var t=0,a,n;T(this).is("[data-animation-delay]")&&0<T(this).attr("data-animation-delay").length&&"false"!=T(this).attr("data-animation")&&(t=T(this).attr("data-animation-delay")),T(this).is('[data-using-custom-color="true"]')&&(a=T(this).attr("data-color"),n=!!(T(this).is("[data-color-gradient]")&&0<T(this).attr("data-color-gradient").length)&&T(this).attr("data-color-gradient"),T(this).addClass("instance-"+e),!1!==n&&0<n.length?(o+=".nectar-highlighted-text.instance-"+e+" em:before { background: linear-gradient(90deg, "+a+", "+n+"); }",T(this).is('[data-style="regular_underline"]')&&(o+='.nectar-highlighted-text[data-style="regular_underline"].instance-'+e+" a em:after { background: linear-gradient(90deg, "+a+", "+n+"); }",o+='.nectar-highlighted-text[data-style="regular_underline"].instance-'+e+" em a:after { background: linear-gradient(90deg, "+a+", "+n+"); }")):(o+=".nectar-highlighted-text.instance-"+e+" em:before { background-color: "+a+"; }",T(this).is('[data-style="regular_underline"]')&&(o+='.nectar-highlighted-text[data-style="regular_underline"].instance-'+e+" a em:after { background-color: "+a+"; }",o+='.nectar-highlighted-text[data-style="regular_underline"].instance-'+e+" em a:after { background-color: "+a+"; }"))),x&&T(this).find("em").addClass("animated");var i=T(this),s=new Waypoint({element:i,handler:function(){0<i.parents(".wpb_tab").length&&"hidden"==i.parents(".wpb_tab").css("visibility")||i.hasClass("animated")||setTimeout(function(){i.find("em").each(function(e){var t=T(this);setTimeout(function(){t.addClass("animated")},300*e)})},t),s.destroy()},offset:r})}),Qe(o,"highlighted-text")}function ca(){var e;T('.pricing-table[data-style="default"]').each(function(){e=0,T(this).find("> div ul").each(function(){T(this).height()>e&&(e=T(this).height())}),0==e&&(e="auto"),T(this).find("> div ul").css("height",e)})}function ha(){q=[],"undefined"!=typeof NectarTestimonialSlider&&T(".testimonial_slider").each(function(e){var t=T(this),a=T(this).is("[data-style]")?T(this).attr("data-style"):"none";q[e]=new NectarTestimonialSlider(t,a,Ca,Wt),T(this).is('.disable-height-animation:not([data-style*="multiple_visible"])')&&(q[e].testimonialSliderHeight(),setTimeout(q[e].testimonialSliderHeight.bind(q[e]),500)),T(this).is('.testimonial_slider[data-style="multiple_visible_minimal"]')&&(q[e].testimonialSliderHeightMinimalMult(),setTimeout(q[e].testimonialSliderHeightMinimalMult.bind(q[e]),500))})}function ua(){k.off("smartresize.nectarTestimonials"),k.off("resize.nectarTestimonialsMin"),0<q.length&&k.on("smartresize.nectarTestimonials",pa),0<T('.testimonial_slider[data-style="multiple_visible_minimal"]').length&&k.on("resize.nectarTestimonialsMin",ga)}function pa(){for(var e=0;e<q.length;e++)q[e].testimonialSliderHeight(),q[e].testimonialHeightResize()}function ga(){for(var e=0;e<q.length;e++)q[e].testimonialSliderHeightMinimalMult()}function fa(){var a=1==U?"250%":"75%";T(Z+'.nectar-icon-list[data-animate="true"]').each(function(){var e=T(this),t=new Waypoint({element:e,handler:function(){0<e.parents(".wpb_tab").length&&"hidden"==e.parents(".wpb_tab").css("visibility")||e.hasClass("completed")||(e.each(function(){var a=e.is('[data-direction="horizontal"]')?100:300;T(this).find(".nectar-icon-list-item").each(function(e){var t=T(this);setTimeout(function(){t.addClass("animated")},e*a)})}),e.addClass("completed")),t.destroy()},offset:a})})}function ma(e){var e,e=0<e.parents('.wpb_column[data-bg-color*="#"]').length&&0<e.parents('.wpb_column[data-bg-opacity="1"]').length?e.parents(".wpb_column").attr("data-bg-color"):(0<e.parents(".wpb_row").length&&0<e.parents(".wpb_row").find(".row-bg.using-bg-color").length||0<e.parents(".wpb_row").length&&0<e.parents(".wpb_row").find(".row-bg.using-bg-color-excluded").length?e.parents(".wpb_row").find(".row-bg"):0<T("#nectar_fullscreen_rows").length?T("#nectar_fullscreen_rows > .wpb_row .full-page-inner-wrap"):T(".container-wrap")).css("background-color");return e}function ba(){var a="";T('.nectar-icon-list[data-icon-style="border"], .nectar_icon_wrap[data-style="border-animation"][data-color*="extra-color-gradient-"]').each(function(e){var t=ma(T(this));T(this).hasClass("nectar-icon-list")?T(this).find(".list-icon-holder").css("background-color",t):(T(this).removeClass(function(e,t){return(t.match(/(^|\s)instance-\S+/g)||[]).join(" ")}),T(this).addClass("instance-"+e),a+=".nectar_icon_wrap.instance-"+e+" .nectar_icon:before { background-color: "+t+"!important; }")}),T('body.material .nectar-button.see-through[class*="m-extra-color-gradient"]').each(function(e){var t=ma(T(this));T(this).removeClass(function(e,t){return(t.match(/(^|\s)instance-\S+/g)||[]).join(" ")}),T(this).addClass("instance-"+e),a+=".nectar-button.see-through.instance-"+e+":after { background-color: "+t+"!important; }"}),Qe(a,"nectaricon-color-match")}function va(){T(".col.span_3, .vc_span3, .vc_col-sm-3").each(function(){var e,t;T(this).is('[data-t-w-inherits="small_desktop"]')||(e=T(this),((t=T(this).next("div")).hasClass("span_3")&&!e.hasClass("one-fourths")||t.hasClass("vc_span3")&&!e.hasClass("one-fourths")||t.hasClass("vc_col-sm-3")&&!e.hasClass("one-fourths"))&&(e.addClass("one-fourths clear-both"),t.addClass("one-fourths right-edge")))}),T(".span_12 .col.span_6").each(function(){T(this).next("div").hasClass("span_6")&&0==T.trim(T(this).next("div").html()).length&&T(this).addClass("empty-second")})}function wa(){T("iframe").each(function(){var e;void 0===T(this).attr("src")||T(this).hasClass("skip-nectar-video-size")||T(this).hasClass("iframe-embed")||0!=T(this).parents(".ult_modal").length||0!=T(this).parents(".ls-slide").length||0!=T(this).parents(".esg-entry-media").length||0!=T(this).parents(".wpb_video_widget.wpb_content_element").length||(0<=(e=T(this).attr("src").toLowerCase()).indexOf("youtube")||0<=e.indexOf("vimeo")||0<=e.indexOf("twitch.tv")||0<=e.indexOf("kickstarter")||0<=e.indexOf("embed-ssl.ted")||0<=e.indexOf("dailymotion"))&&(T(this).addClass("iframe-embed"),(T(this).width()<T(this).parent().width()?T(this).attr("data-aspectRatio",T(this).height()/T(this).width()):T(this).attr("data-aspectRatio","0.56")).removeAttr("height").removeAttr("width"),0<T(this).parents(".post-area.masonry.classic").length&&T(this).attr("data-aspectRatio","0.56").removeAttr("height").removeAttr("width"))})}function ya(){T("iframe[data-aspectRatio]").each(function(){var e=T(this),t=e.parent().width();0<T(this).parents(".swiper-slide").length&&!T(this).is(":visible")||e.width(t).height(t*e.attr("data-aspectRatio"))})}function _a(){T(".video-wrap iframe").unwrap(),T("#sidebar iframe[src]").unwrap(),T("audio").attr("width","100%").attr("height","100%").css("visibility","visible"),E.hasClass("mobile")?T("video").css("visibility","hidden"):T("video").css("visibility","visible"),T(".wp-video").each(function(){var e;T(this).find("video").get(0).addEventListener("loadeddata",function(){k.trigger("resize")},!1)}),T(".main-content iframe[src]").each(function(){T(this).css({opacity:"1",visibility:"visible"})})}function Ca(){var i=1280,s=720,r=1200;T(".nectar-video-wrap").each(function(){var e,t;if(0!=T(this).find("video").length){if(0<T(this).parents("#page-header-bg").length){if(0<T(".container-wrap.auto-height").length)return!1;e=T(this).parents("#page-header-bg").outerHeight(),t=T(this).parents("#page-header-bg").outerWidth()}else t=T(this).hasClass("column-video")?E.is('[data-flex-cols="true"]')?(e=T(this).parents(".vc_column-inner").outerHeight(),T(this).parents(".vc_column-inner").outerWidth()):(e=T(this).parents(".wpb_column").outerHeight(),T(this).parents(".wpb_column").outerWidth()):(e=T(this).parents(".wpb_row").outerHeight(),0<T(this).parents(".full-width-section").length?te.winW:T(this).parents(".wpb_row").outerWidth());T(this).width(t),0<T(this).parents("#page-header-bg").length&&T(this).height(e);var a=t/i,n=(e-e)/s,n=n<a?a:n;n*i<(r=1280/720*(e+40))&&(n=r/i),T(this).find("video, .mejs-overlay, .mejs-poster").width(Math.ceil(n*i+0)),T(this).find("video, .mejs-overlay, .mejs-poster").height(Math.ceil(n*s+0)),T(this).scrollLeft((T(this).find("video").width()-t)/2),T(this).scrollTop((T(this).find("video").height()-e)/2),T(this).find(".mejs-overlay, .mejs-poster").scrollTop((T(this).find("video").height()-e)/2),"center bottom"==T(this).attr("data-bg-alignment")||"bottom"==T(this).attr("data-bg-alignment")?T(this).scrollTop(T(this).find("video").height()-(e+6)):"center top"!=T(this).attr("data-bg-alignment")&&"top"!=T(this).attr("data-bg-alignment")||T(this).scrollTop(0),T(this).addClass("position-loaded")}})}function xa(){function i(t,e,a){if("undefined"==typeof YT||void 0===YT.Player)return 100<(a=void 0===a?0:a)?void console.warn("Too many attempts to load YouTube api"):void setTimeout(function(){i(t,e,a++)},100);var n=t.prepend('<div class="vc_video-bg"><div class="inner"></div></div>').find(".inner");new YT.Player(n[0],{width:"100%",height:"100%",videoId:e,playerVars:{playlist:e,iv_load_policy:3,enablejsapi:1,disablekb:1,autoplay:1,controls:0,showinfo:0,rel:0,loop:1},events:{onReady:function(e){e.target.mute().setLoop(!0),s(t)}}}),s(t),jQuery(I).on("resize",function(){s(t)}),setTimeout(function(){s(t)},100)}function s(e){var t,a,n,i,s=e.innerWidth(),r=e.innerHeight(),o=16,l=9;s/r<16/9?(t=r*(16/9),a=r,n=-Math.round((t-s)/2)+"px",i=-Math.round((a-r)/2)+"px"):(a=(t=s)*(9/16),i=-Math.round((a-r)/2)+"px",n=-Math.round((t-s)/2)+"px"),t+="px",a+="px",e.find(".vc_video-bg iframe").css({maxWidth:"1000%",marginLeft:n,marginTop:i,width:t,height:a})}function n(e){if(void 0===e)return!1;var e=e.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);return null!==e&&e[1]}0==T(".nectar-video-wrap").length&&0==T(".nectar-youtube-bg").length||(setTimeout(function(){Ca(),k.on("resize",Ca),T(".video-color-overlay").each(function(){T(this).css("background-color",T(this).attr("data-color"))}),T(".nectar-video-wrap").each(function(){var e,t,a;0!=T(this).find("video").length&&(e=0<T(this).parents("#page-header-bg").length,t=T(this),a=setInterval(function(){3<t.find("video").get(0).readyState&&(te.usingMobileBrowser||(t.transition({opacity:"1"},400),t.find("video").transition({opacity:"1"},400),t.parent().find(".video-color-overlay").transition({opacity:"0.7"},400),1==e&&on()),r.addClass("loaded"),setTimeout(function(){r.addClass("hidden")},1e3),clearInterval(a))},60),te.usingMobileBrowser&&(0<t.parents(".full-width-section").length&&0==t.parents("#nectar_fullscreen_rows").length?t.css("left","50%"):t.css("left","0px"),1==e&&on(),t.find("video")[0].onplay=function(){t.transition({opacity:"1"},400),t.find("video").transition({opacity:"1"},400),t.parent().find(".video-color-overlay").transition({opacity:"0.7"},400)}))})},300),te.usingMobileBrowser&&T(".nectar-video-wrap").each(function(){T(this).find("video").is("[muted]")||(T(this).parent().find(".mobile-video-image").show(),T(this).remove())}),T('.wpb_row:has(".nectar-video-wrap"):not(.fp-section)').each(function(e){T(this).css("z-index",100+e)}),T(".vc_row").each(function(){var e,t,a=jQuery(this);0<a.find(".nectar-youtube-bg").length?(t=n(e=a.find(".nectar-youtube-bg span").text()))&&(a.find(".vc_video-bg").remove(),i(a.find(".nectar-youtube-bg"),t)):a.find(".nectar-youtube-bg").remove(),a.find(".nectar-youtube-bg span").remove(),te.usingMobileBrowser||a.find(".nectar-video-wrap, .nectar-youtube-bg").css({opacity:"1",width:"100%",height:"100%"}),a.find(".video-color-overlay").transition({opacity:"0.7"},400)}))}function ka(){E.hasClass("single-post")&&0<T(".content-inner[data-has-gallery]").length&&(0<T(".wp-block-gallery").length?T(".content-inner").find(".wp-block-gallery").each(function(e){0!==e&&T(this).css("display","flex")}):T(".content-inner").find(".gallery").each(function(e){0!==e&&T(this).css("display","block")}))}function Ta(){var e=0<T("#top #mobile-menu").length?"#top #mobile-menu ":".off-canvas-menu-container.mobile-only ";T(e+".megamenu > ul > li > a").each(function(){var e;"-"!=T(this).text()&&"???"!=T(this).text()&&!T(this).parent().hasClass("hide-title")||(e=T(this).parent().find("> ul > li").clone(),T(this).parent().find("ul").remove(),T(this).parent().parent().append(e),T(this).parent().remove())})}function Ia(){var e;0<T('body.material[data-slide-out-widget-area-style="slide-out-from-right"]').length&&(Ha(),0<o.length&&(e=o.detach(),T(".ocm-effect-wrap-inner").append(e))),Aa(),za(),k.on("resize",Ma)}function za(){var e,t,a,n,i;(0<T('body.material[data-header-search="true"]').length||0<T("body.material .ocm-effect-wrap").length)&&(t=!1,a=0,n=te.winW,i=te.winH,I.addEventListener("orientationchange",function(){a=1}),k.on("resize",function(){te.usingMobileBrowser?(k.width()!=n&&k.height!=i||1===a)&&(n=te.winW,i=te.winH,t=!(a=0)):t=!0,t&&(clearTimeout(e),T('body[data-slide-out-widget-area-style="slide-out-from-right"] > a.slide_out_area_close, .material #header-outer, .ocm-effect-wrap, .ocm-effect-wrap-shadow').addClass("no-material-transition"),e=setTimeout(function(){T('body[data-slide-out-widget-area-style="slide-out-from-right"] > a.slide_out_area_close, .material #header-outer, .ocm-effect-wrap, .ocm-effect-wrap-shadow').removeClass("no-material-transition")},250),Ha(),t=!1)}))}function Ea(){var e=0,t;T("#slide-out-widget-area > .widget").each(function(){e+=T(this).height()}),t=i.height()-25-T(".bottom-meta-wrap").outerHeight(!0)-e>T("#slide-out-widget-area .off-canvas-menu-container:last-child").height()?i.height()-25-T(".bottom-meta-wrap").outerHeight(!0)-e:T("#slide-out-widget-area .off-canvas-menu-container:last-child").height(),T("#slide-out-widget-area .inner").css({height:"auto","min-height":t}),T("#slide-out-widget-area > .inner .off-canvas-menu-container").transition({y:"-"+T("#slide-out-widget-area > .inner .off-canvas-menu-container:last-child").height()/2+"px"},0)}function Ha(){T("#slide-out-widget-area.slide-out-from-right").css({"padding-top":.1*k.height(),"padding-bottom":.1*k.height()}),Fa()}function Aa(){var e,e;0<T("body.material").length&&0==T('body[data-slide-out-widget-area-style="slide-out-from-right-hover"]').length&&(0==T('body[data-slide-out-widget-area-style*="fullscreen"]').length&&0==T("#mobile-menu").length&&((e=T("header#top nav ul .slide-out-widget-area-toggle a > span > i").clone()).addClass("hover-effect"),T("header#top nav ul .slide-out-widget-area-toggle a > span").append(e),(e=T("header#top .slide-out-widget-area-toggle.mobile-icon a > span > i").clone()).addClass("hover-effect"),T("header#top .slide-out-widget-area-toggle.mobile-icon a > span").append(e)),T('body:not([data-slide-out-widget-area-style="slide-out-from-right"]) header#top .slide-out-widget-area-toggle a > span').append(T('<span class="close-wrap"> <span class="close-line close-line1"></span> <span class="close-line close-line2"></span> </span>')),setTimeout(function(){T("header#top .slide-out-widget-area-toggle a > span .close-wrap").addClass("loaded")},200)),0<T("body.material #boxed").length&&0<T('body[data-slide-out-widget-area-style="slide-out-from-right-hover"]').length&&T("#ajax-content-wrap > .slide-out-widget-area-toggle.slide-out-hover-icon-effect").insertAfter(".ocm-effect-wrap"),0<T("body.material").length&&0==T('body[data-slide-out-widget-area-style*="fullscreen"]').length&&(T("body.material #slide-out-widget-area.slide-out-from-right .slide_out_area_close").insertAfter(".ocm-effect-wrap"),T("#slide-out-widget-area-bg").insertAfter(".ocm-effect-wrap"),i.insertAfter(".ocm-effect-wrap"))}function Ma(){0<T(".ocm-effect-wrap.material-ocm-open").length&&(T(".ocm-effect-wrap").css({height:k.height()}),T(".ocm-effect-wrap-inner").css({"padding-top":te.adminBarHeight}))}function Oa(){var e;"separate-dropdown-parent-link"==(0<T("#slide-out-widget-area[data-dropdown-func]").length?i.attr("data-dropdown-func"):"default")&&T("#slide-out-widget-area .off-canvas-menu-container li.menu-item-has-children").append('<span class="ocm-dropdown-arrow"><i class="fa fa-angle-down"></i></span>')}function Sa(){T('#slide-out-widget-area[class*="slide-out-from-right"] .off-canvas-menu-container li.menu-item-has-children').each(function(){T(this).find(".ocm-dropdown-arrow").css({top:T(this).find("a").height()/2})}),T("#slide-out-widget-area.fullscreen-split .off-canvas-menu-container li.menu-item-has-children").each(function(){T(this).find(".ocm-dropdown-arrow").css({top:T(this).find("a").height()/2})})}function Fa(){te.winW<1e3||0<T("body > #boxed").length||0<T(".ocm-effect-wrap-inner > #boxed").length?(T("#slide-out-widget-area.fullscreen .off-canvas-social-links, #slide-out-widget-area.fullscreen-alt .off-canvas-social-links").appendTo("#slide-out-widget-area .inner"),T("#slide-out-widget-area.fullscreen .bottom-text, #slide-out-widget-area.fullscreen-alt .bottom-text").appendTo("#slide-out-widget-area .inner")):(T("#slide-out-widget-area.fullscreen .off-canvas-social-links,#slide-out-widget-area.fullscreen-alt .off-canvas-social-links").appendTo("#slide-out-widget-area .inner-wrap"),T("#slide-out-widget-area.fullscreen .bottom-text, #slide-out-widget-area.fullscreen-alt .bottom-text").appendTo("#slide-out-widget-area .inner-wrap")),i.hasClass("fullscreen-split")||(T('#slide-out-widget-area[class*="fullscreen"] .inner').height()>=k.height()-100?T('#slide-out-widget-area[class*="fullscreen"] .inner, #slide-out-widget-area[class*="fullscreen"]').addClass("overflow-state"):T('#slide-out-widget-area[class*="fullscreen"] .inner, #slide-out-widget-area[class*="fullscreen"]').removeClass("overflow-state"),T('#slide-out-widget-area[class*="fullscreen"] .inner').transition({y:"-"+T('#slide-out-widget-area[class*="fullscreen"] .inner').height()/2+"px"},0)),0<T(".slide-out-from-right.open .off-canvas-menu-container.mobile-only").length&&0==T("body.mobile").length&&T("#slide-out-widget-area .slide_out_area_close").trigger("click"),Sa()}function $a(){return Ea(),te.usingMobileBrowser&&0<T("#slide-out-widget-area.open").length?(ja(),!1):(te.usingMobileBrowser&&T(".slide-out-widget-area-toggle a").attr("aria-expanded","true"),i.css({transform:"translate3d(0,0,0)"}).addClass("open"),0<T("header#top .container .span_9 > .slide-out-widget-area-toggle").length&&(e=T(".slide-out-hover-icon-effect"),t=te.secondaryHeaderHeight,0<T("body.mobile").length?e.css({top:T("header#top .span_9 > .slide-out-widget-area-toggle a").offset().top-te.scrollTop,right:parseInt(T("#header-outer header > .container").css("padding-right"))+1}):G?(n=0<T('#header-outer[data-has-menu="false"]').length?2:1,e.css({top:te.adminBarHeight+t+parseInt(T("header#top nav >ul .slide-out-widget-area-toggle a").css("padding-top")),right:29+n})):0<T('#header-outer[data-format="centered-menu-bottom-bar"]').length?(a="block"==T("header#top .span_9 > .slide-out-widget-area-toggle").css("display")?T("header#top .span_9 > .slide-out-widget-area-toggle.mobile-icon").position():T("header#top .span_3 .right-side .slide-out-widget-area-toggle > div").offset(),e.css({top:parseInt(a.top)-te.scrollTop,right:parseInt(T("#header-outer header >.container").css("padding-right"))+2})):(a=(E.hasClass("ascend")?"block"==T("header#top .span_9 > .slide-out-widget-area-toggle").css("display")?T("header#top .span_9 > .slide-out-widget-area-toggle.mobile-icon"):T("header#top nav .buttons .slide-out-widget-area-toggle > div a > span"):"block"==T("header#top .span_9 > .slide-out-widget-area-toggle").css("display")?T("header#top .span_9 > .slide-out-widget-area-toggle.mobile-icon"):T("header#top nav .buttons .slide-out-widget-area-toggle > div")).position(),0<T("#header-secondary-outer.hide-up").length&&(t=0),e.css({top:te.adminBarHeight+t+parseInt(a.top),right:parseInt(T("#header-outer header >.container").css("padding-right"))+2}))),T(".slide-out-hover-icon-effect .lines-button").removeClass("no-delay").addClass("unhidden-line"),0==T('#header-outer[data-permanent-transparent="1"]').length&&0==T("#nectar_fullscreen_rows").length&&!te.usingFrontEndEditor&&1e3<te.winW&&(0==te.scrollTop&&0<T("#header-outer.transparent").length||0==T("body.mobile").length&&G&&(c.attr("data-transparent","true").addClass("no-bg-color").addClass("slide-out-hover"),T("#header-outer header, #header-outer > .cart-outer").addClass("all-hidden")),0==T('#header-outer[data-remove-fixed="1"]').length&&0==T("body.mobile").length&&G&&(1==b?(k.off("scroll",xn),k.off("scroll",Cn)):(k.off("scroll",kn),k.off("scroll",Tn)))),!te.usingMobileBrowser&&void k.on("mousemove.rightOffsetCheck",Wa));var e,t,a,n}function Wa(e){var t=k.width(),a=i.outerWidth();e.clientX<t-parseInt(a)-p&&i.hasClass("mouse-accessed")&&(i.removeClass("mouse-accessed"),k.off("mousemove.rightOffsetCheck",Wa),i.css({transform:"translate3d(101%,0,0)"}).removeClass("open"),c.removeClass("style-slide-out-from-right"),T(".slide-out-hover-icon-effect .lines-button").removeClass("unhidden-line").addClass("no-delay"),0==T('#header-outer[data-permanent-transparent="1"]').length&&(0==T('#header-outer[data-remove-fixed="1"]').length&&0==T("body.mobile").length&&G&&0==T("body.mobile").length&&(c.removeClass("no-bg-color"),T("#header-outer header, #header-outer > .cart-outer").removeClass("all-hidden")),0==T('#header-outer[data-remove-fixed="1"]').length&&0==T("body.mobile").length&&G&&(1==b?(k.off("scroll.headerResizeEffect"),0==te.scrollTop?(k.on("scroll.headerResizeEffect",Cn),0<T('#header-outer[data-full-width="true"][data-transparent-header="true"]').length&&0<d.length&&1==G&&0<T("#header-outer.pseudo-data-transparent").length&&T('#header-outer[data-full-width="true"] header > .container').stop(!0,!0).animate({padding:"0"},{queue:!1,duration:250,easing:"easeOutCubic"})):k.on("scroll.headerResizeEffect",xn)):(k.off("scroll.headerResizeEffectOpaque"),k.on("scroll.headerResizeEffectOpaque",kn)))))}function ja(){te.usingMobileBrowser&&T(".slide-out-widget-area-toggle a").attr("aria-expanded","false"),i.css({transform:"translate3d(101%,0,0)"}).removeClass("open"),c.removeClass("style-slide-out-from-right"),T(".slide-out-hover-icon-effect .lines-button").removeClass("unhidden-line").addClass("no-delay"),0==T('#header-outer[data-permanent-transparent="1"]').length&&(c.removeClass("no-bg-color"),T("#header-outer header").removeClass("all-hidden")),0==T('#header-outer[data-remove-fixed="1"]').length&&0==T("body.mobile").length&&G&&(1==b?(k.off("scroll.headerResizeEffect"),0==te.scrollTop?(k.on("scroll.headerResizeEffect",Cn),0<T('#header-outer[data-full-width="true"][data-transparent-header="true"]').length&&0<d.length&&1==G&&0<T("#header-outer.pseudo-data-transparent").length&&T('#header-outer[data-full-width="true"] header > .container').stop(!0,!0).animate({padding:"0"},{queue:!1,duration:250,easing:"easeOutCubic"})):k.on("scroll.headerResizeEffect",xn)):(k.off("scroll.headerResizeEffectOpaque"),k.on("scroll.headerResizeEffectOpaque",kn)))}function Ya(){var e;0==T("#ajax-content-wrap > .slide-out-widget-area-toggle").length&&(e=0<T('.slide-out-widget-area-toggle[data-custom-color="true"]').length?"#slide-out-widget-area > div":"#slide-out-widget-area",T('<div class="slide-out-widget-area-toggle slide-out-hover-icon-effect" data-icon-animation="simple-transform"><div> <a href="#sidewidgetarea" class="closed"> <span> <i class="lines-button x2"> <i class="lines"></i> </i> </span> </a> </div> </div>').insertAfter(e),(0<T('#header-outer[data-has-menu="true"]').length||0<T('body[data-header-search="true"]').length||0<T(".slide-out-widget-area-toggle a.using-label").length||0<T('.slide-out-widget-area-toggle[data-custom-color="true"]').length)&&T(".slide-out-widget-area-toggle").addClass("small")),te.usingMobileBrowser?E.on("click",".slide-out-widget-area-toggle:not(.std-menu) a",$a):(E.on("mouseenter","#header-outer .slide-out-widget-area-toggle:not(.std-menu) a",$a),i.on("mouseenter",function(){T(this).addClass("mouse-accessed")})),k.on("smartresize",Ea)}function Ba(){var e=0<d.length&&0==T("body.mobile").length?d.height():0,t,e;0==T("body.material").length?(T("#slide-out-widget-area .inner").css({height:"auto","min-height":i.height()-25-T(".bottom-meta-wrap").height()}),0<T('#slide-out-widget-area[data-dropdown-func="separate-dropdown-parent-link"] .inner > div:first-of-type > .menu > li:first-child').length&&T("#slide-out-widget-area .inner > div:first-of-type > .menu > li:first-child").hasClass("menu-item-has-children")&&T("#slide-out-widget-area .inner > div:first-of-type").css({"margin-top":"50px"}),0==T("#boxed").length&&(T(".container-wrap, .home-wrap, #footer-outer:not(#nectar_fullscreen_rows #footer-outer), .nectar-box-roll, #page-header-wrap .page-header-bg-image, #page-header-wrap .nectar-video-wrap, #page-header-wrap .mobile-video-image, #page-header-wrap #page-header-bg > .container, .page-header-no-bg, div:not(.container) > .project-title").stop(!0).transition({x:"-300px"},700,"easeInOutCubic"),t=Pe(),0==T('#header-outer[data-format="centered-logo-between-menu"]').length||t?0==T('#header-outer[data-transparency-option="1"]').length||0<T('#header-outer[data-transparency-option="1"]').length&&0==T('#header-outer[data-full-width="true"]').length||0<T("body.mobile").length?c.stop(!0).css("transform","translateY(0)").transition({x:"-"+(300+e)+"px"},700,"easeInOutCubic"):c.stop(!0).css("transform","translateY(0)").transition({x:"-"+(300+e)+"px","background-color":"transparent","border-bottom":"1px solid rgba(255,255,255,0.22)"},700,"easeInOutCubic"):T('#header-outer header#top nav > ul.buttons, body:not(.material) #header-outer:not([data-format="centered-logo-between-menu"]) .cart-outer .cart-menu-wrap').transition({x:"-300px"},700,"easeInOutCubic")),i.stop(!0).transition({x:"-"+e+"px"},700,"easeInOutCubic").addClass("open"),0==T("#boxed").length&&0<T('#header-outer[data-full-width="true"]').length&&!E.hasClass("mobile")&&(c.addClass("highzI"),T("#ascrail2000").addClass("z-index-adj"),0==T('#header-outer[data-format="centered-logo-between-menu"]').length&&0==p&&T("header#top #logo").stop(!0).transition({x:300+e+"px"},700,"easeInOutCubic"),T("header#top .slide-out-widget-area-toggle .lines-button").addClass("close"),T("body #header-outer nav > ul > li > a").css({"margin-bottom":"0"})),c.addClass("style-slide-out-from-right"),a.css({height:"100%",width:"100%"}).stop(!0).transition({opacity:1},700,"easeInOutCubic",function(){T(".slide-out-widget-area-toggle:not(.std-menu) > div > a").removeClass("animating")}),0==T('#header-outer[data-format="centered-logo-between-menu"]').length?(e=(0<T("#logo img:visible").length?T("#logo img:visible"):T("#logo")).width(),T("header#top nav > .sf-menu").offset().left-e-300<20&&c.addClass("hidden-menu")):c.addClass("hidden-menu-items"),0==T('#header-outer[data-remove-fixed="1"]').length&&1e3<te.winW&&(1==G&&1==b?(c.stop(!0).transition({y:"0"},0).addClass("transparent").css("transition","transform"),"true"!=c.attr("data-transparent-header")&&c.attr("data-transparent-header","true").addClass("pseudo-data-transparent"),k.off("scroll",xn),k.off("scroll",Cn)):1==G&&(c.addClass("transparent"),k.off("scroll",kn),k.off("scroll",Tn),"true"!=c.attr("data-transparent-header")&&c.attr("data-transparent-header","true").addClass("pseudo-data-transparent")))):0<T("body.material").length&&(0<r.length&&0<T(".ocm-effect-wrap #ajax-loading-screen").length&&r.insertBefore(".ocm-effect-wrap"),40<te.scrollTop&&T('body[data-hhun="1"] #header-secondary-outer').addClass("hidden"),setTimeout(function(){T(".slide-out-widget-area-toggle:not(.std-menu) > div > a").removeClass("animating")},300),T("#slide-out-widget-area, #slide-out-widget-area-bg, #header-outer .slide-out-widget-area-toggle").addClass("material-open"),0<T('body:not(.mobile) #header-outer[data-format="centered-menu-bottom-bar"][data-condense="true"]').length&&"none"!=T('#header-outer[data-format="centered-menu-bottom-bar"] .span_9').css("display")&&(T("#header-outer:not(.fixed-menu)").css("top",te.adminBarHeight-te.scrollTop+"px"),0<h.length&&0<T("#header-outer.fixed-menu").length&&h.css("visibility","hidden")),T("#ajax-content-wrap").css({position:"relative",top:"-"+te.scrollTop+"px"}),T(".ocm-effect-wrap-inner").css({"padding-top":te.adminBarHeight}),T("#fp-nav").addClass("material-ocm-open"),E.addClass("material-ocm-open"),E.addClass("nectar-no-flex-height"),T(".ocm-effect-wrap").css({height:te.winH}),setTimeout(function(){T(".ocm-effect-wrap").addClass("material-ocm-open")},40),T("body > .slide_out_area_close").addClass("follow-body"),T('#header-outer:not([data-format="left-header"]) header#top .slide-out-widget-area-toggle a').addClass("effect-shown"),T('body[data-hhun="1"]:not(.no-scroll):not(.mobile) #header-outer[data-permanent-transparent="false"]:not(.detached):not(.parallax-contained):not(.at-top-before-box)').css({transition:"none",transform:"translateY("+te.adminBarHeight+"px)"}),setTimeout(function(){T("body > .slide_out_area_close").addClass("material-ocm-open")},350))}function qa(){var e;0==T("body.material").length?(T(".container-wrap, .home-wrap, #footer-outer:not(#nectar_fullscreen_rows #footer-outer), .nectar-box-roll, #page-header-wrap .page-header-bg-image,  #page-header-wrap .nectar-video-wrap, #page-header-wrap .mobile-video-image, #page-header-wrap #page-header-bg > .container, .page-header-no-bg, div:not(.container) > .project-title").stop(!0).transition({x:"0px"},700,"easeInOutCubic"),0<T('#header-outer[data-transparency-option="1"]').length&&0==T("#boxed").length?(e=0<T("#header-outer[data-current-row-bg-color]").length?c.attr("data-current-row-bg-color"):c.attr("data-user-set-bg"),c.stop(!0).transition({x:"0px","background-color":e},700,"easeInOutCubic")):c.stop(!0).transition({x:"0px"},700,"easeInOutCubic"),i.stop(!0).transition({x:"301px"},700,"easeInOutCubic").removeClass("open"),0==T("#boxed").length&&0<T('#header-outer[data-full-width="true"]').length&&(c.removeClass("highzI"),T("header#top #logo").stop(!0).transition({x:"0px"},700,"easeInOutCubic"),T(".lines-button").removeClass("close")),0<T('#header-outer[data-format="centered-logo-between-menu"]').length&&T("#header-outer header#top nav > ul.buttons, #header-outer .cart-outer .cart-menu-wrap").stop(!0).transition({x:"0px"},700,"easeInOutCubic"),a.stop(!0).transition({opacity:0},700,"easeInOutCubic",function(){T(".slide-out-widget-area-toggle a").removeClass("animating"),T(this).css({height:"1px",width:"1px"}),0==T('#header-outer[data-remove-fixed="1"]').length&&(c.hasClass("parallax-contained")&&0<te.scrollTop&&0==T('#header-outer[data-permanent-transparent="1"]').length?c.removeClass("parallax-contained").addClass("detached").removeClass("transparent"):(0==te.scrollTop&&0<T('body[data-hhun="1"]').length&&0<T('#page-header-bg[data-parallax="1"]').length||0==te.scrollTop&&0<T('body[data-hhun="1"]').length&&0<T(".parallax_slider_outer").length)&&(0<T('#header-outer[data-transparency-option="1"]').length&&c.addClass("transparent"),c.addClass("parallax-contained").removeClass("detached"))),T(".container-wrap").css("transform","none")}),c.removeClass("style-slide-out-from-right"),0==T('#header-outer[data-remove-fixed="1"]').length&&(1==G&&1==b&&1e3<te.winW?(k.off("scroll.headerResizeEffect"),0==te.scrollTop?(k.on("scroll.headerResizeEffect",Cn),0<T('#header-outer[data-full-width="true"][data-transparent-header="true"]').length&&0<d.length&&1==G&&0<T("#header-outer.pseudo-data-transparent").length&&T('#header-outer[data-full-width="true"] header > .container').stop(!0,!0).animate({padding:"0"},{queue:!1,duration:250,easing:"easeOutCubic"})):k.on("scroll.headerResizeEffect",xn),c.hasClass("pseudo-data-transparent")&&c.attr("data-transparent-header","false").removeClass("pseudo-data-transparent").removeClass("transparent"),c.css("transition","transform")):1==G&&1e3<te.winW&&(k.off("scroll.headerResizeEffectOpaque"),k.on("scroll.headerResizeEffectOpaque",kn),c.css("transition","transform"),c.hasClass("pseudo-data-transparent")&&c.attr("data-transparent-header","false").removeClass("pseudo-data-transparent").removeClass("transparent")))):0<T("body.material").length&&(i.removeClass("open"),T("#slide-out-widget-area, #slide-out-widget-area-bg, #header-outer .slide-out-widget-area-toggle").removeClass("material-open"),T(".ocm-effect-wrap, .ocm-effect-wrap-shadow, body > .slide_out_area_close, #fp-nav").removeClass("material-ocm-open"),T("body > .slide_out_area_close").removeClass("follow-body"),setTimeout(function(){T(".slide-out-widget-area-toggle a").removeClass("animating"),E.removeClass("material-ocm-open"),E.removeClass("nectar-no-flex-height"),T(".ocm-effect-wrap").css({height:"100%"}),T(".ocm-effect-wrap-inner").css({"padding-top":"0"}),k.scrollTop(Math.abs(parseInt(T("#ajax-content-wrap").css("top")))),T("#ajax-content-wrap").css({position:"",top:""}),0<T('#header-outer[data-format="centered-menu-bottom-bar"]').length&&"none"!=T('#header-outer[data-format="centered-menu-bottom-bar"] .span_9').css("display")&&0==T("body.mobile").length&&(T("#header-outer:not(.fixed-menu)").css("top",""),h.css("visibility","")),T('body[data-hhun="1"]:not(.no-scroll) #header-outer[data-permanent-transparent="false"]:not(.detached):not(.parallax-contained):not(.at-top-before-box)').css({transform:""}),setTimeout(function(){T('body[data-hhun="1"]:not(.no-scroll) #header-outer[data-permanent-transparent="false"]:not(.detached):not(.parallax-contained):not(.at-top-before-box)').css({transition:""})},30),T('body[data-hhun="1"] #header-secondary-outer.hidden').removeClass("hidden")},900),setTimeout(function(){T('#header-outer:not([data-format="left-header"]) header#top .slide-out-widget-area-toggle a').addClass("no-trans").removeClass("effect-shown")},200),setTimeout(function(){T('#header-outer:not([data-format="left-header"]) header#top .slide-out-widget-area-toggle a').removeClass("no-trans")},500))}function Pa(){0<T("body.material").length&&T("header#top .slide-out-widget-area-toggle a").addClass("menu-push-out");var e=0,t=0;te.scrollTop+k.height()>T(".blurred-wrap").height()&&0==T("#nectar_fullscreen_rows").length&&(T("body,html").stop().animate({scrollTop:T(".blurred-wrap").height()-k.height()},600,"easeInOutCubic"),e=550,t=200),T("header#top .slide-out-widget-area-toggle:not(.std-menu) .lines-button").addClass("close"),setTimeout(function(){T(".blurred-wrap").addClass("blurred")},e),T("#slide-out-widget-area.fullscreen").show().addClass("open"),0==T(".nectar-social.fixed").length&&li(),T(".container-wrap").addClass("no-shadow"),c.stop(!0).css("transform","translateY(0)"),setTimeout(function(){T(".off-canvas-menu-container .menu > li").each(function(e){T(this).delay(50*e).transition({y:0,opacity:1},800,"easeOutExpo")}),T("#slide-out-widget-area.fullscreen .widget").each(function(e){T(this).delay(100*e).transition({y:0,opacity:1},800,"easeOutExpo")})},370+t),setTimeout(function(){T("#slide-out-widget-area .off-canvas-social-links").addClass("line-shown"),T("#slide-out-widget-area .off-canvas-social-links li").each(function(e){T(this).delay(50*e).transition({scale:1},400,"easeOutCubic")}),T("#slide-out-widget-area .bottom-text").transition({opacity:.7},400,"easeOutCubic")},750+t),setTimeout(function(){var e=0<T("body.mobile").length?"easeOutCubic":"easeInOutQuint";a.css({height:"100%",width:"100%"}).show().stop(!0).transition({y:"0%"},920,e,function(){T(".slide-out-widget-area-toggle > div > a").removeClass("animating")})},50+t),Fa(),0<T('.mobile #header-outer[data-permanent-transparent="false"]').length&&T(".container-wrap").hasClass("no-scroll")&&T("#ajax-content-wrap").addClass("at-content"),(0<T('.mobile #header-outer[data-permanent-transparent="false"]').length||0==T(".mobile").length&&0==T("#header-outer.transparent").length)&&T("#slide-out-widget-area.fullscreen .inner-wrap").css("padding-top",c.height())}function La(){0<T("body.material").length&&setTimeout(function(){T("header#top .slide-out-widget-area-toggle a").removeClass("menu-push-out")},350),T(".slide-out-widget-area-toggle:not(.std-menu) .lines-button").removeClass("close"),T(".blurred-wrap").removeClass("blurred"),T("#slide-out-widget-area.fullscreen").transition({opacity:0},700,"easeOutQuad",function(){T("#slide-out-widget-area.fullscreen").hide().css("opacity","1")}).removeClass("open"),T("#slide-out-widget-area.fullscreen .widget").transition({opacity:0},700,"easeOutQuad",function(){T(this).transition({y:"110px"},0)}),setTimeout(function(){T(".off-canvas-menu-container .menu > li").transition({y:"80px",opacity:0},0),T("#slide-out-widget-area .off-canvas-social-links li").transition({scale:0},0),T("#slide-out-widget-area .off-canvas-social-links").removeClass("line-shown"),T("#slide-out-widget-area .bottom-text").transition({opacity:0},0),T("#slide-out-widget-area .menuwrapper .menu").removeClass("subview"),T("#slide-out-widget-area .menuwrapper .menu li").removeClass("subview subviewopen"),T("#slide-out-widget-area.fullscreen .inner .off-canvas-menu-container").css("height","auto")},800),setTimeout(function(){0==T(".nectar-social.fixed").length&&oi(),T(".container-wrap").removeClass("no-shadow")},500),a.stop(!0).transition({opacity:0},900,"easeOutQuad",function(){0<T('.mobile #header-outer[data-permanent-transparent="false"]').length&&T(".container-wrap").hasClass("no-scroll")&&T("#ajax-content-wrap").removeClass("at-content"),0==T('.mobile #header-outer[data-permanent-transparent="false"]').length&&T("#slide-out-widget-area.fullscreen .inner-wrap").css("padding-top","0"),T(".slide-out-widget-area-toggle a").removeClass("animating");var e=.4;a.hasClass("solid")&&(e=1),a.hasClass("dark")&&(e=.93),a.hasClass("medium")&&(e=.6),a.hasClass("light")&&(e=.4),T(this).css({height:"1px",width:"1px",opacity:e}).transition({y:"-100%"},0)})}function Ra(){var e=i.hasClass("fullscreen-alt")?".fullscreen-alt":".fullscreen-split";0<T("body.material").length&&T("header#top .slide-out-widget-area-toggle a").addClass("menu-push-out"),T("header#top .slide-out-widget-area-toggle:not(.std-menu) .lines-button").addClass("close"),".fullscreen-alt"==e?T("#slide-out-widget-area"+e).show().addClass("open"):T("#slide-out-widget-area"+e).addClass("open").removeClass("hidden"),a.addClass("open").removeClass("hidden"),T('body > div[class*="body-border"]').css("z-index","9995"),".fullscreen-alt"==e&&T(".off-canvas-menu-container .menu").transition({y:"0px",opacity:1},0),0==T(".nectar-social.fixed").length&&li(),0<T("#header-outer.transparent").length&&0<d.length&&(T(".admin-bar #slide-out-widget-area-bg"+e).css({"padding-top":d.outerHeight(!0)+32+"px"}),T("body:not(.admin-bar) #slide-out-widget-area-bg"+e).css({"padding-top":d.outerHeight(!0)+"px"})),c.stop(!0).css("transform","translateY(0)"),0<T("#logo .starting-logo").length&&1e3<k.width()&&0==T('#header-outer[data-format="centered-menu-bottom-bar"].fixed-menu').length&&0==T('body.material #header-outer[data-condense="true"]').length&&!te.usingFrontEndEditor&&(c.stop(!0).css("transform","translateY(0)").addClass("transparent"),"true"!=c.attr("data-transparent-header")&&c.attr("data-transparent-header","true").addClass("pseudo-data-transparent")),T(".off-canvas-menu-container .clip-wrap").css("transition-duration","0s"),".fullscreen-alt"==e&&(setTimeout(function(){T(".off-canvas-menu-container .menu > li").each(function(e){T(this).delay(50*e).transition({y:0,opacity:1},750,"easeOutCubic").addClass("no-pointer-events")}),setTimeout(function(){T(".off-canvas-menu-container .menu > li").removeClass("no-pointer-events"),T(".off-canvas-menu-container .clip-wrap").css("transition-duration",".45s")},500),T("#slide-out-widget-area.fullscreen-alt .widget").each(function(e){T(this).delay(100*e).transition({y:0,opacity:1},650,"easeOutCubic")})},200),setTimeout(function(){T("#slide-out-widget-area .off-canvas-social-links").addClass("line-shown"),T("#slide-out-widget-area .off-canvas-social-links li").css("opacity","1").each(function(e){T(this).delay(50*e).transition({scale:1},400,"easeOutCubic")}),T("#slide-out-widget-area .bottom-text").transition({opacity:1},600,"easeOutCubic")},200));var t=.4;a.hasClass("solid")&&(t=1),a.hasClass("dark")&&(t=.97),a.hasClass("medium")&&(t=.6),a.hasClass("light")&&(t=.4),a.removeClass("no-transition"),".fullscreen-alt"==e&&(a.addClass("padding-removed").css({height:"100%",width:"100%",left:"0",opacity:t}),Fa()),setTimeout(function(){T(".slide-out-widget-area-toggle > div > a").removeClass("animating")},600),0<T('.mobile #header-outer[data-permanent-transparent="false"]').length&&T(".container-wrap").hasClass("no-scroll")&&T("#ajax-content-wrap").addClass("at-content"),".fullscreen-alt"==e?(0<T('.mobile #header-outer[data-permanent-transparent="false"]').length||0==T(".mobile").length&&0==T("#header-outer.transparent").length)&&T("#slide-out-widget-area"+e+" .inner-wrap").css("padding-top",c.height()):T("#slide-out-widget-area"+e+" .inner-wrap").css("padding-top",c.outerHeight())}function Na(){var e=i.hasClass("fullscreen-alt")?".fullscreen-alt":".fullscreen-split",t;0<T("body.material").length&&setTimeout(function(){T("header#top .slide-out-widget-area-toggle a").removeClass("menu-push-out")},350),T(".slide-out-widget-area-toggle:not(.std-menu) .lines-button").removeClass("close"),a.removeClass("open"),".fullscreen-split"==e&&setTimeout(function(){a.addClass("hidden"),T("#slide-out-widget-area"+e).addClass("hidden")},600),".fullscreen-alt"==e&&(T(".blurred-wrap").removeClass("blurred"),T("#slide-out-widget-area.fullscreen-alt .widget").transition({opacity:0},500,"easeOutQuad",function(){T(this).transition({y:"40px"},0)}),T("#slide-out-widget-area .bottom-text, #slide-out-widget-area .off-canvas-social-links li").transition({opacity:0},250,"easeOutQuad"),T("#slide-out-widget-area .off-canvas-social-links").removeClass("line-shown"),T(".off-canvas-menu-container .menu").transition({y:"-13px",opacity:0},400)),setTimeout(function(){".fullscreen-alt"==e&&(T(".off-canvas-menu-container .menu > li").stop(!0,!0).transition({y:"40px",opacity:0},0),T("#slide-out-widget-area .off-canvas-social-links li").transition({scale:0},0),T("#slide-out-widget-area .off-canvas-social-links").removeClass("line-shown"),T("#slide-out-widget-area .menuwrapper .menu").removeClass("subview"),T("#slide-out-widget-area .menuwrapper .menu li").removeClass("subview subviewopen"),T("#slide-out-widget-area.fullscreen-alt .inner .off-canvas-menu-container").css("height","auto"),a.css({height:"1px",width:"1px",left:"-100%"})),0<T('.mobile #header-outer[data-permanent-transparent="false"]').length&&T(".container-wrap").hasClass("no-scroll")&&T("#ajax-content-wrap").removeClass("at-content"),0==T('.mobile #header-outer[data-permanent-transparent="false"]').length&&T("#slide-out-widget-area"+e+" .inner-wrap").css("padding-top","0"),T(".slide-out-widget-area-toggle a").removeClass("animating"),".fullscreen-alt"==e&&T("#slide-out-widget-area"+e).hide().removeClass("open")},550),".fullscreen-split"==e&&T("#slide-out-widget-area"+e).removeClass("open"),setTimeout(function(){0==T(".nectar-social.fixed").length&&oi()},600),setTimeout(function(){a.removeClass("padding-removed")},50),setTimeout(function(){".fullscreen-alt"==e&&a.stop(!0).css({opacity:0}),0<T('#header-outer[data-transparent-header="true"]').length&&T('body > div[class*="body-border"]').css("z-index","10000")},1==G?150:50),setTimeout(function(){T('#header-outer.transparent.small-nav, #header-outer.transparent.detached, #header-outer:not([data-permanent-transparent="1"]).transparent.scrolled-down').removeClass("transparent"),c.hasClass("pseudo-data-transparent")&&c.attr("data-transparent-header","false").removeClass("pseudo-data-transparent").removeClass("transparent")},100)}function Va(){T("#mobile-menu").show(),T("header#top .slide-out-widget-area-toggle:not(.std-menu) .lines-button").addClass("close"),0<T("body.material").length&&T("header#top .slide-out-widget-area-toggle a").addClass("menu-push-out"),setTimeout(function(){T(".slide-out-widget-area-toggle > div > a").removeClass("animating")},100)}function Xa(){T("#mobile-menu").hide(),T(".slide-out-widget-area-toggle:not(.std-menu) .lines-button").removeClass("close"),setTimeout(function(){0<T("body.material").length&&T("header#top .slide-out-widget-area-toggle a").removeClass("menu-push-out"),T(".slide-out-widget-area-toggle a").removeClass("animating")},350)}function Da(){0!=T("#header-outer #mobile-menu").length&&(T("#header-outer #mobile-menu li.megamenu").removeClass("megamenu"),T("#header-outer #mobile-menu ul li").each(function(){T(this).find("a").wrapInner("<span></span>"),0<T(this).find("> ul").length&&T(this).find("> a").append('<span class="sf-sub-indicator"><i class="fa fa-angle-down"></i></span>')}),T("#header-outer #mobile-menu .sf-sub-indicator").on("click",function(){var e=T(this).parent().parent();return e.toggleClass("current-open-item"),e.hasClass("current-open-item")?(e.find("> ul").show(),setTimeout(function(){e.addClass("visible")},30)):(e.find("ul").hide(),e.find("li").removeClass("visible").removeClass("current-open-item"),e.removeClass("visible")),!1}),k.on("smartresize",function(){1e3<te.winW&&0<T(".slide-out-widget-area-toggle.mobile-icon a.open").length&&(T(".slide-out-widget-area-toggle.mobile-icon a").addClass("non-human-allowed").trigger("click"),setTimeout(function(){T(".slide-out-widget-area-toggle.mobile-icon a").removeClass("non-human-allowed")},100))}))}function Qa(){E.on("click",".slide-out-widget-area-toggle:not(.std-menu) a.closed:not(.animating), .nectar-ocm-trigger-open",function(){return"true"==J.animating||0<T(".slide-out-from-right-hover").length||(c.removeClass("no-transition"),i.hasClass("slide-out-from-right")?Ba():i.hasClass("fullscreen")?Pa():i.hasClass("fullscreen-alt")||i.hasClass("fullscreen-split")?Ra():0<T("#header-outer #mobile-menu").length&&Va(),0==T("#header-outer #mobile-menu").length&&(c.removeClass("side-widget-closed").addClass("side-widget-open"),0<T('#header-outer[data-transparency-option="1"]').length&&0==T("#boxed").length&&0<T('#header-outer[data-full-width="true"]').length&&!te.usingFrontEndEditor&&0==T('body.material[data-slide-out-widget-area-style="slide-out-from-right"]').length&&0==T('body.material #header-outer[data-condense="true"]').length&&c.addClass("transparent"),0<T("#header-outer.dark-slide.transparent").length&&0==T("#boxed").length&&0==T("body.material-ocm-open").length&&c.removeClass("dark-slide").addClass("temp-removed-dark-slide")),T(".slide-out-widget-area-toggle > div > a").removeClass("closed").addClass("open").attr("aria-expanded","true"),T(".slide-out-widget-area-toggle > div > a").addClass("animating")),!1}),E.on("click",".slide-out-widget-area-toggle:not(.std-menu) a.open:not(.animating), #slide-out-widget-area .slide_out_area_close, > .slide_out_area_close, #slide-out-widget-area-bg.slide-out-from-right, .material-ocm-open #ajax-content-wrap",function(e){if(!(null==e.originalEvent&&0==T(".slide_out_area_close.non-human-allowed").length&&0==T(".slide-out-widget-area-toggle.mobile-icon a.non-human-allowed").length||0<T(".slide-out-widget-area-toggle:not(.std-menu) a.animating").length))return c.removeClass("no-transition"),T(".slide-out-widget-area-toggle:not(.std-menu) a").removeClass("open").addClass("closed").attr("aria-expanded","false"),T(".slide-out-widget-area-toggle:not(.std-menu) a").addClass("animating"),i.hasClass("slide-out-from-right")?qa():i.hasClass("fullscreen")?La():i.hasClass("fullscreen-alt")||i.hasClass("fullscreen-split")?Na():0<T("#header-outer #mobile-menu").length&&Xa(),0==T("#header-outer #mobile-menu").length&&(0<T("#header-outer.temp-removed-dark-slide.transparent").length&&0==T("#boxed").length&&c.removeClass("temp-removed-dark-slide").addClass("dark-slide"),0==T('#header-outer[data-permanent-transparent="1"]').length&&0==T("#slide-out-widget-area.fullscreen-alt").length&&(0==T(".nectar-box-roll").length?(0<T("#header-outer.small-nav").length||0<T("#header-outer.scrolled-down").length)&&c.removeClass("transparent"):(0<T("#header-outer.small-nav").length||0<T("#header-outer.scrolled-down").length||0<T(".container-wrap.auto-height").length)&&c.removeClass("transparent")),c.removeClass("hidden-menu"),c.removeClass("side-widget-open").addClass("side-widget-closed")),!1})}function Za(){0<T("#slide-out-widget-area.slide-out-from-right-hover").length?Ya():(Qa(),Da()),0==T("#slide-out-widget-area.fullscreen-split").length&&0==T('body.material[data-slide-out-widget-area-style*="slide-out-from-right"]').length&&0==T('#slide-out-widget-area[data-dropdown-func="separate-dropdown-parent-link"]').length?en():0<T('body.using-mobile-browser[data-slide-out-widget-area-style="slide-out-from-right-hover"]').length&&T("body #slide-out-widget-area .inner .off-canvas-menu-container li a[href]").on("click",function(){"#"!=T(this).attr("href")&&Ga(T(this).parent())}),0<T("#nectar_fullscreen_rows").length&&0<T('body[data-slide-out-widget-area-style*="fullscreen"]').length&&T("body #slide-out-widget-area .inner .off-canvas-menu-container li a[href]").on("click",function(){var e=T(this).is('[href*="#"]')?T(this).attr("href"):"";"#"!=e&&0<T('div[data-fullscreen-anchor-id="'+e.substr(e.indexOf("#")+1)+'"]').length&&(setTimeout(function(){T("#slide-out-widget-area .slide_out_area_close").addClass("non-human-allowed").trigger("click")},100),setTimeout(function(){T("#slide-out-widget-area .slide_out_area_close").removeClass("non-human-allowed")},150))}),E.on("mouseover","#slide-out-widget-area .off-canvas-menu-container .menuwrapper > .sub-menu li > a",function(){var e=T(this).text();T(".off-canvas-menu-container .menuwrapper .menu li > a").removeClass("hovered"),T(".off-canvas-menu-container .menuwrapper .menu li > a:contains("+e+")").addClass("hovered")}),E.on("mouseover",".off-canvas-menu-container .menuwrapper .menu li > a",function(){T(".off-canvas-menu-container .menuwrapper .menu li > a").removeClass("hovered")}),setTimeout(Ua,500),te.usingMobileBrowser&&i.addClass("mobile")}function Ua(){i.mousewheel(function(e,t){this.scrollTop-=30*t,e.preventDefault()})}function Ga(e){var t,a;0<T("#slide-out-widget-area.open").length&&(I.location.href.split("#")[0]==e.find("> a").attr("href").split("#")[0]||0<e.find('a[href^="#"]').length)&&(0<e.parents(".slide-out-from-right-hover").length?T(".slide-out-widget-area-toggle.slide-out-hover-icon-effect a"):T(".slide-out-widget-area-toggle a")).trigger("click")}function Ja(){var e;0<!T('#header-outer[data-format="left-header"]').length&&0<!T('body.material[data-slide-out-widget-area-style*="slide-out-from-right"]').length&&0<!T("#slide-out-widget-area.fullscreen-split").length&&0<!T('#slide-out-widget-area[data-dropdown-func="separate-dropdown-parent-link"]').length||(T('#header-outer[data-format="left-header"] nav li.megamenu').removeClass("megamenu"),e=0<T('#slide-out-widget-area[data-dropdown-func="separate-dropdown-parent-link"]').length?"#slide-out-widget-area .off-canvas-menu-container li.menu-item-has-children > .ocm-dropdown-arrow":'body.material #slide-out-widget-area[class*="slide-out-from-right"] .off-canvas-menu-container li.menu-item-has-children > a, #slide-out-widget-area.fullscreen-split .off-canvas-menu-container li.menu-item-has-children > a',T('#header-outer[data-format="left-header"] nav li.menu-item-has-children > a, '+e).on("click",function(){var e,t;return T(this).parent().hasClass("open-submenu")?(T(this).parent().find(".sub-menu").css({"max-height":"0"}),T(this).parent().removeClass("open-submenu")):((e=T(this)).parent().find("> .sub-menu").addClass("no-trans"),setTimeout(function(){e.parent().find("> .sub-menu").css({"max-height":"none",position:"absolute",visibility:"hidden"}),t=e.parent().find("> .sub-menu").height(),e.parent().find("> .sub-menu").removeClass("no-trans"),e.parent().find("> .sub-menu").css({"max-height":"0",position:"relative",visibility:"visible"})},25),setTimeout(function(){e.closest("ul").find("li.menu-item-has-children").removeClass("open-submenu"),e.closest("ul").find("li.menu-item-has-children > .sub-menu").css({"max-height":"0"}),e.parent().addClass("open-submenu"),e.parent().find("> .sub-menu").css("max-height",t),0<e.parents("ul").length&&e.parents("ul:not(.sf-menu)").each(function(){T(this).css("max-height"),T(this).css("max-height",parseInt(T(this).height()+2*parseInt(T(this).css("padding-top"))+t)+"px")})},50)),!1}),0<T('#header-outer[data-format="left-header"] nav .sf-menu > .current-menu-ancestor.menu-item-has-children > ul > li.current-menu-item').length&&T('#header-outer[data-format="left-header"] nav .sf-menu > .current-menu-ancestor.menu-item-has-children > a').trigger("click"))}st.prototype.domSetup=function(){var a=this,n="";this.$el.find(".wpb_tab").each(function(e){var t;T(this).is("[data-tab-icon]")&&0<T(this).attr("data-tab-icon").length&&(a.$el.addClass("using-icons"),n=a.$el.find(".wpb_tabs_nav li:nth-child("+(e+1)+") a").attr("href"),a.$el.find(".wpb_tabs_nav li:nth-child("+(e+1)+")").addClass("has-icon").prepend('<a class="skip-hash" href="'+n+'"><i class="'+T(this).attr("data-tab-icon")+'"></i></a>')),0<T(this).find(".im-icon-wrap.tab-icon").length&&(n=a.$el.find(".wpb_tabs_nav li:nth-child("+(e+1)+") a").attr("href"),t=T(this).find(".im-icon-wrap.tab-icon").detach(),a.$el.find(".wpb_tabs_nav li:nth-child("+(e+1)+")").addClass("has-icon").prepend('<a class="skip-hash svg-icon-link" href="'+n+'"></a>'),a.$el.find(".wpb_tabs_nav li:nth-child("+(e+1)+") .svg-icon-link").append(t))}),this.$el.find(".scrolling-tab-nav .menu-item:first").addClass("active"),this.lineAnimation(),1==this.$el.find(".scrolling-tab-nav .menu-item").length&&this.$el.find(".scrolling-tab-nav").addClass("single-tab");var i=this.$el.find(".scrolling-tab-content");this.$el.find(".scrolling-tab-nav .menu-item").each(function(e){var t=i.find("> div:nth-child("+(e+=1)+")"),e=T(this).html(),e,e;t.prepend('<div class="scrolling-tab-mobile-title"><div class="inner">'+e+"</div></div>"),t.find(".scrolling-tab-mobile-title a").contents().unwrap(),t&&(e=(e=T(this).find("a").attr("href")).substr(1),t.find("> .scrolling-tab-mobile-title").attr("id",e),t.removeAttr("id"))})},st.prototype.highlightObserve=function(){var a=this,e;te.usingMobileBrowser&&te.winW<1e3||"IntersectionObserver"in I&&(this.observer=new IntersectionObserver(function(e){e.forEach(function(e){var t="#"+T(e.target).attr("id"),t=a.$el.find('.scrolling-tab-nav a[href="'+t+'"]');e.isIntersecting&&1<=e.intersectionRatio?t.parents(".menu-item").addClass("visible"):t.parents(".menu-item").removeClass("visible");var t=a.$el.find(".scrolling-tab-nav .menu-item.visible:first");0<t.length&&(a.$el.find(".scrolling-tab-nav .menu-item").removeClass("active"),t.addClass("active"),a.lineAnimation())})},{rootMargin:"0px",threshold:1}),this.$tabContent.find("> div > .scrolling-tab-mobile-title[id]").each(function(){a.observer.observe(T(this)[0])}))},st.prototype.lineAnimation=function(){var e=this.$el.find(".scrolling-tab-nav .active"),t,e;0!=e.length&&(t=parseInt(e.position().top),e=parseInt(e.height()),this.$lineEl.css({"max-height":e+"px",transform:"translate3d(0px, "+t+"px, 0px)"}))},T.fn.parallaxScroll=function(e,t,a){var n=te.winW,i=te.winH,s=0,r=T(this),o=r.offset().top;r.each(function(){o=r.offset().top});var l=function(e){return e.outerHeight(!0)};(arguments.length<1||null===e)&&(e="50%"),(arguments.length<2||null===t)&&(t=.25),(arguments.length<3||null===a)&&(a=!0);var d=te.usingMobileBrowser,c=!1,h=!1,u=r,p=l(u);r.find(".row-bg.using-image, .page-header-bg-image, .image-bg, .video-wrap").addClass("translate"),setInterval(function(){p=l(u),c=0<T("body.classic_mobile_menu_open.mobile").length},600),(0<u.parents(".top-level").length&&0<u.parents(".parallax_slider_outer").length||0<u.parents(".top-level").length&&u.is(".nectar-recent-posts-single_featured")||u.is(".wpb_row.top-level")||0==T(".wpb_row").length)&&(h=!0),(0==T(".wpb_row").length&&0<u.parents(".parallax_slider_outer").length&&u.is('[data-full-width="true"]')||0<T("#portfolio-extra").length&&0<u.parents(".parallax_slider_outer").length&&0<u.parents(".wpb_row").length&&"0"==u.parents(".wpb_row").index())&&(h=!0),te.usingFrontEndEditor&&(h=!1);var g=r.is(".nectar-slider-wrap"),f=0<r.find(".page-header-bg-image").length,m=!1;function b(){o=u.offset().top,0==m||o+p<te.scrollTop||o>te.scrollTop+te.winH||0<T("body.material-ocm-open").length||(g?h?c||r.find(".video-wrap, .image-bg").css({transform:"translate3d(0, "+parseFloat(te.scrollTop*t)+"px, 0)"}):r.find(".video-wrap, .image-bg").css({transform:"translate3d(0, "+parseFloat((i+te.scrollTop-o)*t)+"px, 0)"}):(h?c||m.css({transform:"translate3d(0, "+parseFloat(te.scrollTop*t)+"px, 0)"}):m.css({transform:"translate3d(0, "+parseFloat((i+te.scrollTop-o)*t)+"px, 0), scale(1.005)"}),f&&!c&&m.css({transform:"translate3d(0, "+parseFloat(te.scrollTop*t)+"px, 0)"}))),d&&requestAnimationFrame(b)}g?(0<r.find(".video-wrap").length||0<r.find(".image-bg").length)&&(m=r.find(".video-wrap, .image-bg")):0<r.find(".row-bg.using-image").length?m=r.find(".row-bg.using-image"):0<r.find(".page-header-bg-image").length&&(m=r.find(".page-header-bg-image")),I.addEventListener&&(!te.usingFrontEndEditor&&te.usingMobileBrowser||k.on("resize",function(){n=te.winW,i=te.winH}),te.usingFrontEndEditor?k.on("scroll.parallaxSections",b):te.usingMobileBrowser?(requestAnimationFrame(b),I.addEventListener("orientationchange",function(){s=1}),k.on("resize",function(){(k.width()!=n&&k.height!=i||1==s)&&(n=te.winW,i=te.winH,s=0)})):I.addEventListener("scroll",function(){requestAnimationFrame(b)},!1)),k.on("resize.parallaxSections",b),b()},Xt.prototype.calculatePos=function(){this.offsetTop=this.$element.offset().top,this.height=this.$element.outerHeight(),this.vertCenter=te.winH/2-this.height/2},Xt.prototype.trackView=function(){var t=this,e,a;0<this.$element.parents(".top-level").length&&(this.topLevel=!0),"IntersectionObserver"in I&&new IntersectionObserver(function(e){e.forEach(function(e){var e=e.isIntersecting;t.inView=!!e})},{rootMargin:"250px"}).observe(this.$element[0])},Xt.prototype.animate=function(){var a;this.inView&&((a=this).lastY=$e(this.lastY,te.scrollTop,.18),this.$element.find(".bg-layer").each(function(e){var t=T(this).attr("data-scale");a.layer1Parallax&&(e=e/1.5+1),!0===a.topLevel&&1e3<te.winW?T(this).css("transform","translateY("+-(a.lastY*a.intensity)*e+"px) translateZ(0) scale("+t+")"):T(this).css("transform","translateY("+-((a.lastY-a.offsetTop+a.vertCenter)*a.intensity)*e+"px) translateZ(0) scale("+t+")")})),I.requestAnimationFrame(this.animate.bind(this))},ra.prototype.initialMarkup=function(){0==this.el.find(".nectar-post-grid-filters a.active").length&&this.el.find(".nectar-post-grid-filters a:first-child").addClass("active"),"load-more"===this.settingsData.pagination&&0==this.el.find(".load-more-wrap").length&&(this.activeCatTotal=parseInt(this.el.find(".nectar-post-grid-filters a:nth-child("+this.activeFilter+")").attr("data-total-count")),this.el.find(".nectar-post-grid-item").length>=this.activeCatTotal?this.el.append('<div class="load-more-wrap inactive"><a href="#" class="load-more">'+this.el.attr("data-load-more-text")+"</a></div>"):this.el.append('<div class="load-more-wrap"><a href="#" class="load-more">'+this.el.attr("data-load-more-text")+"</a></div>"))},ra.prototype.clickEvents=function(){this.el.find(".nectar-post-grid-filters h4").on("click",function(){T(this).parent().find("div").toggleClass("visible"),T(this).toggleClass("visible")});var r=this.settingsData,o=this.queryData,l=this;this.el.find(".nectar-post-grid-filters a, .load-more-wrap:not(.inactive) .load-more").on("click",function(){var t=T(this);if(0<t.parents(".nectar-post-grid-wrap.loading").length||T(this).hasClass("active"))return!1;0<T(this).parents(".nectar-post-grid-filters").length?(t.parent().find("a").removeClass("active"),t.addClass("active"),l.currentPage=0,l.activeFilter=t.index()+1):l.currentPage++;var a=t.parents(".nectar-post-grid-wrap").find(".nectar-post-grid"),n=r.pagination,i=t.hasClass("load-more")&&"load-more"===n?"load-more":"filter",e="",s,e="yes"===l.sortable?t.parents(".nectar-post-grid-wrap").find(".nectar-post-grid-filters a.active").attr("data-filter"):(s=1<t.parents(".nectar-post-grid-wrap").find(".nectar-post-grid-filters a").length?":not(.all-filter)":"",t.parents(".nectar-post-grid-wrap").find(".nectar-post-grid-filters a"+s).each(function(){e+=T(this).attr("data-filter")+", "}),e.substring(0,e.length-2)),s={action:"nectar_get_post_grid_segment",post_type:o.post_type,category:e,posts_per_page:o.posts_per_page,current_page:l.currentPage,offset:o.offset,order:o.order,orderby:o.orderby,load_action:i,settings:{pagination:n,post_type:r.post_type,image_size:r.image_size,aspect_ratio_image_size:r.aspect_ratio_image_size,card_bg_color:r.card_bg_color,display_categories:r.display_categories,display_excerpt:r.display_excerpt,display_date:r.display_date,color_overlay:r.color_overlay,color_overlay_opacity:r.color_overlay_opacity,color_overlay_hover_opacity:r.color_overlay_hover_opacity,grid_style:r.grid_style,heading_tag:r.heading_tag,post_title_overlay:r.post_title_overlay}};return t.parents(".nectar-post-grid-wrap").addClass("loading"),T.post(I.nectarLove.ajaxurl,s,function(e){"load-more"==i?a.append(e):a.html(e),a.is('[data-animation="fade-in-from-bottom"]')&&(t.parents(".nectar-post-grid-wrap").removeClass("finished-animating"),a.find(".nectar-post-grid-item:not(.animated-in)").each(function(e){var t=T(this);setTimeout(function(){t.addClass("animated-in")},90*e)}),setTimeout(function(){t.parents(".nectar-post-grid-wrap").addClass("finished-animating")},950)),"load-more"===n&&(l.activeCatTotal=parseInt(l.el.find(".nectar-post-grid-filters a:nth-child("+l.activeFilter+")").attr("data-total-count")),a.find(".nectar-post-grid-item").length>=l.activeCatTotal?l.el.find(".load-more-wrap").addClass("inactive"):l.el.find(".load-more-wrap").removeClass("inactive")),t.parents(".nectar-post-grid-wrap").removeClass("loading"),k.trigger("resize"),ia()}),!1}),this.el.hasClass("target-blank-external-urls")&&this.el.find(".nectar-post-grid-item a[href*='http://']:not([href*='"+I.location.hostname+"'])").attr("target","_blank")},T.DLMenu=function(e,t){this.$el=T(t),this._init(e)},T.DLMenu.defaults={animationClasses:{classin:"dl-animate-in-1",classout:"dl-animate-out-1"},onLevelClick:function(){return!1},onLinkClick:function(){return!1}},T.DLMenu.prototype={_init:function(e){this.options=T.extend(!0,{},T.DLMenu.defaults,e),this._config();var t="webkitAnimationEnd",a="oAnimationEnd",n="MSAnimationEnd",i,s="webkitTransitionEnd",r="transitionend",o="oTransitionEnd",l="MSTransitionEnd",e="transitionend";this.animEndEventName="animationend"+".menu",this.transEndEventName=e+".menu",this.supportAnimations=!0,this.supportTransitions=!0,this._initEvents()},_config:function(){this.open=!1,this.$trigger=this.$el.children(".trigger"),this.$menu=this.$el.children("ul.menu"),this.$menuitems=this.$menu.find("li:not(.back) > a"),this.$el.find("ul.sub-menu").prepend('<li class="back"><a href="#"> '+i.attr("data-back-txt")+" </a></li>"),this.$back=this.$menu.find("li.back")},_initEvents:function(){var s=this;this.$trigger.on("click.menu",function(){return s.open?s._closeMenu():s._openMenu(),!1}),this.$menuitems.on("click.menu",function(e){var t=T(this).parent("li"),a=t.children("ul.sub-menu");if(T(".fullscreen-alt .off-canvas-menu-container .clip-wrap, .fullscreen-alt .off-canvas-menu-container .clip-wrap span").css("transition-duration","0s"),0<a.length){var n=a.clone().css("opacity",0).insertAfter(s.$menu),i=function(){s.$menu.off(s.animEndEventName).removeClass(s.options.animationClasses.classout).addClass("subview"),t.addClass("subviewopen").parents(".subviewopen:first").removeClass("subviewopen").addClass("subview"),n.remove(),setTimeout(function(){T(".off-canvas-menu-container .menu > li").removeClass("no-pointer-events"),T(".off-canvas-menu-container .clip-wrap, .off-canvas-menu-container .clip-wrap span").css("transition-duration",".45s")},300)};return setTimeout(function(){n.addClass(s.options.animationClasses.classin),s.$menu.addClass(s.options.animationClasses.classout),s.supportAnimations?s.$menu.on(s.animEndEventName,i):i.call(),s.options.onLevelClick(t,t.children("a:first").text())}),t.parents(".off-canvas-menu-container").css("height",t.parents(".off-canvas-menu-container").find(".menuwrapper .menu").height()).transition({height:n.height()},500,"easeInOutQuad"),!1}s.options.onLinkClick(t.find("> a"),e),Ga(t)}),this.$back.on("click.menu",function(){var t=T(this),e=t.parents("ul.sub-menu:first"),a=e.parent(),n=e.clone().insertAfter(s.$menu),i=function(){s.$menu.off(s.animEndEventName).removeClass(s.options.animationClasses.classin),n.remove()};return setTimeout(function(){n.addClass(s.options.animationClasses.classout),s.$menu.addClass(s.options.animationClasses.classin),s.supportAnimations?s.$menu.on(s.animEndEventName,i):i.call(),a.removeClass("subviewopen");var e=t.parents(".subview:first");e.is("li")&&e.addClass("subviewopen"),e.removeClass("subview")}),a.parents(".off-canvas-menu-container").css("height",a.parents(".off-canvas-menu-container").find(".menuwrapper .menu").height()),setTimeout(function(){a.parents(".off-canvas-menu-container").transition({height:a.parent().height()},500,"easeInOutQuad")},50),!1})},closeMenu:function(){this.open&&this._closeMenu()},_closeMenu:function(){var e=this,t=function(){e.$menu.off(e.transEndEventName),e._resetMenu()};this.$menu.removeClass("menuopen"),this.$menu.addClass("menu-toggle"),this.$trigger.removeClass("active"),this.supportTransitions?this.$menu.on(this.transEndEventName,t):t.call(),this.open=!1},openMenu:function(){this.open||this._openMenu()},_openMenu:function(){var e=this;E.off("click").on("click.menu",function(){e._closeMenu()}),this.$menu.addClass("menuopen menu-toggle").on(this.transEndEventName,function(){T(this).removeClass("menu-toggle")}),this.$trigger.addClass("active"),this.open=!0},_resetMenu:function(){this.$menu.removeClass("subview"),this.$menuitems.removeClass("subview subviewopen")}};var Ka=function(e){I.console&&I.console.error(e)};function en(){T("#slide-out-widget-area .off-canvas-menu-container .menu").wrap('<div class="menu-wrap menuwrapper" />'),T("#slide-out-widget-area .off-canvas-menu-container .menu").addClass("menuopen");var e=0<T("#slide-out-widget-area.fullscreen-alt").length?"4":"5";T("#slide-out-widget-area .off-canvas-menu-container .menu-wrap").dlmenu({animationClasses:{classin:"dl-animate-in-"+e,classout:"dl-animate-out-"+e}})}function tn(){var e=parseInt(s.height());T('body[data-aie="slide-down"] #page-header-wrap:not(.fullscreen-header):not([data-responsive="true"])').css("height",e+"px")}function an(){0<T('#header-outer[data-transparent-header="true"]').length?T('#page-header-bg[data-parallax="1"]').css({top:te.adminBarHeight}):0==T('body[data-header-resize="0"]').length&&0==T("body.material").length&&T('#page-header-bg[data-parallax="1"]').css({top:T("#page-header-wrap").offset().top+"px"}),0!=T("#ajax-content-wrap").length&&E.hasClass("ajax-loaded")?1==T("#ajax-content-wrap").length&&T('#page-header-bg[data-parallax="1"]').css({opacity:1}):T('#page-header-bg[data-parallax="1"]').animate({opacity:1},350,"easeInCubic"),T('#page-header-bg[data-parallax="1"] .nectar-particles').append('<div class="fade-out" />')}function nn(){(-1!=navigator.userAgent.indexOf("Safari")&&-1==navigator.userAgent.indexOf("Chrome")||navigator.userAgent.match(/(iPod|iPhone|iPad)/))&&(I.onunload=function(){sn(),T('#page-header-bg[data-parallax="1"] .span_6').css({opacity:1})})}function sn(){var n=0<T('body[data-hhun="1"]').length&&0<T('#header-outer[data-remove-fixed="1"]').length?1:0,e,i,t;0<T('#page-header-bg[data-parallax="1"]').length&&(e=new Image,i=parseInt(s.height()),(t=Le(T('#page-header-bg[data-parallax="1"]').css("background-image")))&&-1!==t.indexOf(".")?(e.onload=function(){an()},e.src=Le(T('#page-header-bg[data-parallax="1"]').css("background-image"))):an(),0<T('body[data-hhun="1"]').length&&0<!T('#header-outer[data-remove-fixed="1"]').length&&c.addClass("parallax-contained"),I.addEventListener("scroll",function(){1e3<te.winW&&I.requestAnimationFrame(a)},!1));var e=0<T('body[data-ajax-transitions="true"]').length&&0<T('#page-header-bg[data-animate-in-effect="slide-down"]').length?350:0,e;function a(){var e=te.scrollTop,t=.4,a=.09;E.hasClass("mobile")||null!=navigator.userAgent.match(/iPad/i)||0!=T("body.material-ocm-open").length||("left-header"!=w&&(1e3<te.winW?T("#page-header-bg").css("top",T("#ajax-content-wrap").offset().top):T("#page-header-bg").css("top","0")),0==T("#page-header-bg.out-of-sight").length&&(n?(s.css({transform:"translateY("+-.55*e+"px)"}),T('#page-header-bg .span_6 .inner-wrap, body[data-button-style="rounded"] #page-header-bg .scroll-down-wrap, #page-header-bg[data-post-hs="default_minimal"] .author-section').css({transform:"translateY("+-.45*e+"px)"})):(s.css({transform:"translateY("+-.4*e+"px)"}),T('#page-header-bg .span_6 .inner-wrap, body[data-button-style="rounded"] #page-header-bg .section-down-arrow, #page-header-bg[data-post-hs="default_minimal"] .author-section').css({transform:"translateY("+e*-a+"px)"}),T('#page-header-bg .span_6 .inner-wrap,  #page-header-bg[data-post-hs="default_minimal"] .author-section').css({opacity:1-e/(i-60)})),0==T("#page-header-bg .span_6 .inner-wrap").css("opacity")?T("#page-header-bg .span_6 .inner-wrap, #page-header-bg .portfolio-filters").hide():T("#page-header-bg .span_6 .inner-wrap, #page-header-bg .portfolio-filters").show()),1<e/(i+T("#header-space").height()+te.adminBarHeight)?T("#page-header-bg, .nectar-particles, #page-header-bg .fade-out").css("visibility","hidden").hide().addClass("out-of-sight"):(T("#page-header-bg, .nectar-particles, #page-header-bg .fade-out").css("visibility","visible").show().removeClass("out-of-sight"),i=parseInt(s.height()),T("#page-header-bg .container > .row").css("top",0)))}0<s.length&&(setTimeout(function(){tn()},e),T('#page-header-bg[data-animate-in-effect="fade-in"]').addClass("loaded"),(e=Le(s.css("background-image")))&&-1!==e.indexOf(".")&&s.addClass("has-bg"),k.on("smartresize",tn)),0<s.length&&(nn(),0==T(".nectar-box-roll").length&&ln())}function rn(){s.each(function(){var e,t;"rotate_in"!=T(this).attr("data-text-effect")||(e="none")!=(e=0<T(this).find(".span_6 h1").length?"h1":e)&&(t=0<T(this).find(".nectar-particles").length?".inner-wrap.shape-1":".span_6",T(this).find(t).find(e).addClass("top-heading").contents().filter(function(){return 3===this.nodeType&&void 0!==this.data&&this.data.replace(/\s+/,"")}).wrap('<span class="wraped"></span>'),T(this).find(t).find(".wraped").each(function(){var e=T(this),t=e.text().split(" "),a="";T.each(t,function(e,t){t.replace(/\s+/,"")&&(a+='<span class="wraped"><span>'+t+"</span></span> ")}),e.replaceWith(T(a))}))})}function on(){var e;(0==T("#page-header-bg .nectar-particles").length&&0==T('#page-header-bg[data-text-effect="none"]').length||0<T(".nectar-box-roll").length&&0==T("#page-header-bg .nectar-particles").length)&&(e=0==T(".nectar-box-roll").length?"#page-header-bg .span_6":".nectar-box-roll .overlaid-content .span_6",T(e).find(".wraped").each(function(e){T(this).find("span").delay(370*e).transition({rotateX:"0",opacity:1,y:0},400,"easeOutQuad")}),setTimeout(function(){T(e).find(".inner-wrap > *:not(.top-heading)").each(function(e){T(this).delay(370*e).transition({rotateX:"0",opacity:1,y:0},650,"easeOutQuad")}),T(".scroll-down-wrap, .scroll-down-wrap .section-down-arrow").removeClass("hidden")},370*T(e).find(".wraped").length))}function ln(){rn();var e=0<r.length?800:0;0==T("#page-header-bg .nectar-video-wrap video").length&&setTimeout(on,e)}function dn(){var i;0<T('#header-outer[data-permanent-transparent="1"]').length&&0<T('body[data-bg-header="true"]').length&&(0==T(".container-wrap div[data-midnight]").length&&T(".container-wrap").attr("data-midnight","dark"),i=[],T("div[data-midnight]").each(function(){("light"==T(this).attr("data-midnight")&&0==T(this).parents(".pum-content").length||"dark"==T(this).attr("data-midnight")&&0==T(this).parents(".pum-content").length)&&(T(this).is("#page-header-bg")&&0<T(this).parents("#page-header-wrap[data-midnight]").length||i.push(T(this)))}),0<i.length&&T.each(i,function(a,e){var n,t;"light"!=e.attr("data-midnight")&&"dark"!=e.attr("data-midnight")||(n=e,t=new Waypoint({element:n,handler:function(e){var e,t,t,e;0<T("body.material-ocm-open").length||"none"==n.css("display")||(e="down"==e?"light"==n.attr("data-midnight")?"":"dark-slide":"light"==i[t=0<=a-1?a-1:a].attr("data-midnight")?"":"dark-slide",c.removeClass("dark-slide").addClass(e))},offset:c.height()}))}))}function cn(){0<T(".nectar-box-roll").length&&"undefined"!=typeof NectarBoxRoll&&(ln(),J=new NectarBoxRoll(te,hn,dn,hi,Ca))}function hn(){Pt(),Lt(),Rt(),Qt(),Gt(),fa(),la(),da(),ta(),Ie(),Dt(),_t(),Ke(),Ct(),we(),Fn(),wt(),Zt(),Ut(),Je(),oa()}function un(){ie(),oe(),setTimeout(le,100),he(),me(),_e(),xe(),Te(),setTimeout(it,60),lt(),dt(),pt(),ba(),ut(),Bt(),gt(),Tt(),ve(),jt(),Yt(),xt(),Jn(),ei(),qt(),yt(),sa(),Vt(),ea(),ca(),Wn(),vt(),ha(),ua(),Pn(),Un(),Gn(),ni(),bi(),vi(),Ci(),mi(),fi(),xi(),ii(),Xn()}function pn(){jQuery(z.body).on("updated_cart_totals",function(){0==T(".plus").length&&T("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)").addClass("buttons_added").append('<input type="button" value="+" class="plus" />').prepend('<input type="button" value="-" class="minus" />')}),0==T(".plus").length&&(T("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)").addClass("buttons_added").append('<input type="button" value="+" class="plus" />').prepend('<input type="button" value="-" class="minus" />'),T(z).on("click",".plus, .minus",function(){var e=T(this).closest(".quantity").find(".qty"),t=parseFloat(e.val()),a=parseFloat(e.attr("max")),n=parseFloat(e.attr("min")),i=e.attr("step");t&&""!==t&&"NaN"!==t||(t=0),""!==a&&"NaN"!==a||(a=""),""!==n&&"NaN"!==n||(n=0),"any"!==i&&""!==i&&void 0!==i&&"NaN"!==parseFloat(i)||(i=1),T(this).is(".plus")?a&&(a==t||a<t)?e.val(a):e.val(t+parseFloat(i)):n&&(n==t||t<n)?e.val(n):0<t&&e.val(t-parseFloat(i)),e.trigger("change")}))}function gn(){var t;E.on("click",".product .add_to_cart_button",function(){var e=0<T(this).parents("li").find("h2").length?"h2":"h3",e=T(this).parents("li").find(e).text();T("#header-outer .cart-notification span.item-name").html(e)}),E.on("mouseenter","#header-outer .cart-notification",function(){T(this).hide(),T("#header-outer .widget_shopping_cart").addClass("open").stop(!0,!0).show(),T("#header-outer .cart_list").stop(!0,!0).show(),clearTimeout(t)});var e="#header-outer .nectar-woo-cart",a;function n(){!T(".widget_shopping_cart .widget_shopping_cart_content .cart_list .empty").length&&0<T(".widget_shopping_cart .widget_shopping_cart_content .cart_list").length&&(T(".cart-menu-wrap").addClass("has_products"),T("header#top nav > ul, #search-outer #search #close a, header#top .span_9 >.slide-out-widget-area-toggle").addClass("product_added"),T(".cart-menu-wrap").hasClass("static")||T(".cart-menu-wrap, #mobile-cart-link").addClass("first-load"),o())}function i(e){clearTimeout(t),!T(".widget_shopping_cart .widget_shopping_cart_content .cart_list .empty").length&&0<T(".widget_shopping_cart .widget_shopping_cart_content .cart_list").length&&void 0!==e.type&&(0<T("#header-outer .cart-notification .item-name").length&&0==T("#header-outer .cart-notification .item-name").text().length||(T("#header-outer .cart-menu-wrap").hasClass("has_products")?T("#header-outer .cart-notification").is(":visible")?T("#header-outer .cart-notification").show():T("#header-outer .cart-notification").fadeIn(400):setTimeout(function(){T("#header-outer .cart-notification").fadeIn(400)},400),t=setTimeout(s,2700)))}function s(){T("#header-outer .cart-notification").stop(!0,!0).fadeOut()}function r(){var e=setInterval(n,250);setTimeout(function(){clearInterval(e)},4500)}function o(){T("#header-outer .widget_shopping_cart .cart_list li, #slide-out-widget-area .widget_shopping_cart .cart_list li").each(function(){var e,t;0==T(this).find("> img").length&&0==T(this).find(".product-meta").length&&(e=0<T(this).find("> a[href]:not(.remove)").length?T(this).find("> a[href]:not(.remove)").attr("href"):"",t=T(this).find("> a > img").clone(),T(this).wrapInner('<div class="product-meta" />'),T(this).prepend(t),0<e.length&&t.wrap('<a href="'+e+'"></a>'))})}function l(){0!=T("body.woocommerce-account #customer_login").length&&(T(".woocommerce-account .woocommerce > #customer_login").prepend('<div class="nectar-form-controls" />'),T(".woocommerce-account .woocommerce > #customer_login > div:not(.nectar-form-controls)").each(function(){var e=T(this).find("> h2").text();T("#customer_login .nectar-form-controls").append('<div class="control">'+e+"</div>")}),T(".woocommerce-account .woocommerce > #customer_login .nectar-form-controls .control").on("click",function(){T(".woocommerce-account .woocommerce > #customer_login .nectar-form-controls .control").removeClass("active"),T(this).addClass("active");var e=T(this).index()+1;T('#customer_login div[class*="u-column"]').hide(),T('#customer_login div[class*="u-column"].col-'+e).show(),setTimeout(function(){T('#customer_login div[class*="u-column"]').removeClass("visible"),T('#customer_login div[class*="u-column"].col-'+e).addClass("visible")},30)}),T(".woocommerce-account .woocommerce > #customer_login .nectar-form-controls .control:nth-child(1)").trigger("click"))}function d(){T(".products .classic .product-wrap .add_to_cart_button").wrapInner("<span />"),T(".products .classic .product-wrap .add_to_cart_button").prepend('<i class="normal icon-salient-cart"></i>'),E.on("mouseover",".products .minimal.product",function(){c(T(this))}),E.on("mouseleave",".products .minimal.product",function(){T(this).find(".background-color-expand").css({transform:"scale(1)"})}),T(".products .minimal.product").each(function(){T(this).is(":hover")&&T(this).trigger("mouseover")})}function c(e){var t=e,a=t.width(),e=t.height(),a=(parseInt(a)+40)/parseInt(a),e=(parseInt(e)+40)/parseInt(e);t.addClass("hover-bound"),t.find(".background-color-expand").css({transform:"scale("+a+","+e+") translateY(0px)"})}function h(){0<T(".nectar-slide-in-cart ul.cart_list li:not(.empty)").length&&(T(".nectar-slide-in-cart").addClass("open"),k.on("mousemove.rightCartOffsetCheck",u))}function u(e){var t=k.width();e.clientX<t-370-p&&(k.off("mousemove.rightCartOffsetCheck",u),T(".nectar-slide-in-cart").removeClass("open"))}0<T(e).length&&T(e).hoverIntent(function(){T("#header-outer .widget_shopping_cart").addClass("open").stop(!0,!0).show(),T("#header-outer .cart_list").stop(!0,!0).show(),clearTimeout(t),T("#header-outer .cart-notification").hide()}),E.on("mouseleave",e,function(){var e=T(this);setTimeout(function(){e.is(":hover")||(T("#header-outer .widget_shopping_cart").removeClass("open").stop(!0,!0).fadeOut(300),T("#header-outer .cart_list").stop(!0,!0).fadeOut(300))},200)}),0==T('#header-outer[data-cart="false"]').length&&(E.on("added_to_cart",i),E.on("added_to_cart",n),E.on("removed_from_cart",o)),0==T('#header-outer[data-cart="false"]').length&&r(),l(),E.on("mouseover",".text_on_hover .product-wrap, .text_on_hover > a:first-child",function(){T(this).parent().addClass("hovered")}),E.on("mouseout",".text_on_hover .product-wrap, .text_on_hover > a:first-child",function(){T(this).parent().removeClass("hovered")}),(0<T(".material.product").length||0<T(".minimal.product").length||0<T('.nectar-fancy-box[data-style="parallax_hover"]').length||0<T('.nectar-category-grid[data-shadow-hover="yes"]').length||0<T('.nectar-post-grid[data-shadow-hover="yes"]').length)&&(a=101,E.on("mouseenter",'.material.product, .minimal.product, .nectar-fancy-box[data-style="parallax_hover"], .nectar-post-grid[data-shadow-hover="yes"] .nectar-post-grid-item, .nectar-category-grid[data-shadow-hover="yes"] .nectar-category-grid-item',function(){a++,T(this).css("z-index",a+1)}),E.on("mouseleave",'.material.product, .minimal.product, .nectar-fancy-box[data-style="parallax_hover"], .nectar-post-grid[data-shadow-hover="yes"] .nectar-post-grid-item, .nectar-category-grid[data-shadow-hover="yes"] .nectar-category-grid-item',function(){var e=T(this);setTimeout(function(){e.is(":hover")||e.css("z-index",100)},350)}),setInterval(function(){0<T('.nectar-fancy-box[data-style="parallax_hover"]:hover').length||0<T(".minimal.product:hover").length||(T('.material.product:not(:hover), .minimal.product:not(:hover), .nectar-fancy-box[data-style="parallax_hover"]:not(:hover), .nectar-post-grid[data-shadow-hover="yes"] .nectar-post-grid-item:not(:hover), .nectar-category-grid[data-shadow-hover="yes"] .nectar-category-grid-item:not(:hover)').css("z-index",100),a=101)},1e4)),d(),T(".woocommerce #sidebar .widget.woocommerce").each(function(){0==T(this).find("> h4").length&&T(this).addClass("no-widget-title")}),E.on("click","#sidebar .widget.woocommerce:not(.widget_price_filter) h4",function(){k.width()<1e3&&(T(this).parent().is(".widget_product_tag_cloud")&&T(this).parent().find("> div").slideToggle(),T(this).parent().is(".woocommerce-widget-layered-nav")&&0<T(this).parent().find("> .woocommerce-widget-layered-nav-dropdown").length&&T(this).parent().find("> .woocommerce-widget-layered-nav-dropdown").slideToggle(),T(this).parent().find("> ul").slideToggle(),T(this).parent().toggleClass("open-filter"))}),E.on("mouseenter",'#header-outer [data-cart-style="slide_in"] .cart-menu-wrap',h),pn()}function fn(){var e=0<T("#search-outer #search input[type=text][data-placeholder]").length?T("#search-outer #search input[type=text]").attr("data-placeholder"):"";function t(){E.hasClass("ascend")||0<T('body[data-header-format="left-header"]').length&&0==T("body.material").length?(T("#search-outer").stop().transition({opacity:0},300,"cubic-bezier(0.2, 1, 0.3, 1)"),n.addClass("inactive"),setTimeout(function(){T("#search-outer").hide(),n.removeClass("inactive")},300)):0==T("body.material").length&&T("#search-outer").stop(!0).fadeOut(450,"easeOutExpo"),E.hasClass("material")&&(T("#ajax-content-wrap").removeClass("material-open"),c.removeClass("material-search-open"),T("#search-outer").removeClass("material-open"),T("#fp-nav").removeClass("material-ocm-open"))}E.hasClass("material")&&0==T("#header-outer .bg-color-stripe").length&&c.append('<div class="bg-color-stripe" />'),E.on("click","#search-btn a",function(){return!1}),E.on("click","#search-btn a:not(.inactive), #header-outer .mobile-search",function(){return T(this).hasClass("open-search")||(E.hasClass("original")&&0<T(".slide-out-widget-area-toggle.mobile-icon a.open").length&&(T(".slide-out-widget-area-toggle.mobile-icon a").addClass("non-human-allowed").trigger("click"),setTimeout(function(){T(".slide-out-widget-area-toggle.mobile-icon a").removeClass("non-human-allowed")},100)),E.hasClass("ascend")||0<T('body[data-header-format="left-header"]').length&&0==T("body.material").length?(T("#search-outer > #search form, #search-outer #search .span_12 span, #search-outer #search #close").css("opacity",0),T("#search-outer > #search form").css("transform","translateY(-30px)"),T("#search-outer #search .span_12 span").css("transform","translateY(20px)"),T("#search-outer").show(),T("#search-outer").stop().transition({scale:"1,0",opacity:1},0).transition({scale:"1,1"},700,"cubic-bezier(0.2, 1, 0.3, 1)"),T("#search-outer > #search form").delay(350).transition({opacity:1,transform:"translateY(0)"},700,"cubic-bezier(0.2, 1, 0.3, 1)"),T("#search-outer #search #close").delay(500).transition({opacity:1},700,"cubic-bezier(0.2, 1, 0.3, 1)"),T("#search-outer #search .span_12 span").delay(450).transition({opacity:1,transform:"translateY(0)"},700,"cubic-bezier(0.2, 1, 0.3, 1)")):E.hasClass("material")?(T('#header-outer[data-transparent-header="true"] .bg-color-stripe').css("transition",""),T("#search-outer, #ajax-content-wrap").addClass("material-open"),c.addClass("material-search-open"),T("#fp-nav").addClass("material-ocm-open")):T("#search-outer").stop(!0).fadeIn(600,"easeOutExpo"),setTimeout(function(){T("#search input[type=text]").trigger("focus"),T("#search input[type=text]").val()==e&&T("#search input[type=text]").setCursorPosition(0)},300),T(this).toggleClass("open-search"),T(".slide-out-widget-area-toggle a:not(#toggle-nav).open:not(.animating)").trigger("click")),!1}),T("body:not(.material)").on("keydown","#search input[type=text]",function(){T(this).val()==e&&T(this).val("")}),T("body:not(.material)").on("keyup","#search input[type=text]",function(){0==T(this).val().length&&(T(this).val(e),T(this).setCursorPosition(0))}),E.on("click","#close",function(){return t(),n.removeClass("open-search"),T("#header-outer .mobile-search").removeClass("open-search"),!1}),T("body:not(.material)").on("blur","#search-box input[type=text]",function(){t(),n.removeClass("open-search"),T("#header-outer .mobile-search").removeClass("open-search")}),T("body.material").on("click","#ajax-content-wrap",function(e){void 0!==e.originalEvent&&(t(),n.removeClass("open-search"),T("#header-outer .mobile-search").removeClass("open-search"))}),0<T("body.material").length&&T(z).on("keyup",function(e){27==e.keyCode&&(t(),n.removeClass("open-search"),0<T(".ocm-effect-wrap.material-ocm-open").length&&T(".slide-out-widget-area-toggle.material-open a").trigger("click"))})}function mn(){var n=c,i=T('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_9'),e=T('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_3'),t=h,s=e.find("nav >ul.buttons"),r=parseInt(T("body.material #header-outer").attr("data-padding")),e=parseInt(T("body.material #header-outer").attr("data-logo-height")),o=2*r+e-parseInt(te.adminBarHeight)+parseInt(te.secondaryHeaderHeight);function a(){var e;Pe()?c.addClass("within-custom-breakpoint"):c.removeClass("within-custom-breakpoint")}function l(){var e,t,a,e;te.winW<1e3||0<T("body.material-ocm-open").length||"none"==T('#header-outer[data-has-menu="true"][data-format="centered-menu-bottom-bar"] .span_9').css("display")||(d=0<d.length&&0<te.secondaryHeaderHeight?d.height():0,n.hasClass("force-condense")||!n.hasClass("fixed-menu")&&te.scrollTop>=o?(e=parseInt(i.position().top)-r-parseInt(te.adminBarHeight)+parseInt(te.secondaryHeaderHeight)-d,0<T('#header-outer[data-megamenu-rt="1"]').length&&0<T("#header-outer .megamenu").length&&0<T('#header-outer[data-transparent-header="true"]').length&&c.removeClass("no-transition"),n.addClass("fixed-menu").removeClass("transparent").css({top:"-"+e+"px",position:"fixed"}),t=T("header#top .span_9 nav >ul").offset().top,a=s.offset().top,e=0<i.find(".sf-menu > li > a").length?(20-parseInt(i.find(".sf-menu > li > a").height()))/2:2,s.css("transform","translateY("+(parseInt(t)-parseInt(a)-e-1)+"px)"),s.find(".nectar-woo-cart").css("height",n.height()+parseInt(n.css("top"))-parseInt(te.adminBarHeight))):(n.hasClass("force-condense-remove")||n.hasClass("fixed-menu")&&te.scrollTop<o)&&(n.removeClass("fixed-menu").css({top:"0",position:"absolute"}),s.css("transform","translateY(0px)"),s.find(".nectar-woo-cart").css("height",""),0==T("#header-outer.transparent").length&&(0<T('#header-outer[data-megamenu-rt="1"]').length&&0<T("#header-outer .megamenu").length&&c.removeClass("no-transition"),0<T('#header-outer[data-megamenu-rt="1"]').length&&0<T('#header-outer[data-transparent-header="true"]').length&&0<T("#header-outer .megamenu").length?"true"==c.attr("data-transparent-header")&&0==T(".nectar-box-roll").length&&0==T(".megamenu.sfHover").length?(c.addClass("transparent"),c.removeClass("no-transition")):"true"==c.attr("data-transparent-header")&&0==T(".nectar-box-roll").length&&0<T(".megamenu.sfHover").length&&c.addClass("no-transition"):"true"==c.attr("data-transparent-header")&&0==T(".nectar-box-roll").length&&c.addClass("transparent"))))}0<t.length&&0==T('#header-outer[data-remove-fixed="1"]').length&&0<T('#header-outer[data-condense="true"]').length&&setTimeout(function(){"none"!=h.css("display")&&(te.secondaryHeaderHeight=h.outerHeight())},50),0<T('#header-outer[data-condense="true"]').length&&(k.on("scroll.centeredNavCondense",l),k.trigger("scroll"),k.on("resize",function(){te.winW<1e3&&(n.addClass("force-condense-remove"),k.off("scroll.centeredNavCondense"))}),k.smartresize(function(){a(),1e3<=te.winW&&n.hasClass("force-condense-remove")&&(l(),n.removeClass("force-condense-remove"),setTimeout(function(){te.scrollTop>=o&&(n.addClass("force-condense"),l(),n.removeClass("force-condense")),k.on("scroll.centeredNavCondense",l)},200))}),a())}function bn(){0<T('#header-outer[data-format="centered-menu-bottom-bar"]').length&&mn()}function vn(){var t,e,a,n,i,a;1e3<te.winW?(t=T('#header-outer[data-format="centered-logo-between-menu"] #top nav > .sf-menu:not(.buttons) > li').length,0<T("#header-outer #social-in-menu").length&&t--,e=0==T("#header-outer #top .row .col.span_3 #logo img:visible").length?parseInt(T("#header-outer #top .row .col.span_3").width()):parseInt(T("#header-outer #top .row .col.span_3 img:visible").width()),a=0<T('#header-outer[data-lhe="animated_underline"]').length?parseInt(T("header#top nav > ul > li:first-child > a").css("margin-right")):parseInt(T("header#top nav > ul > li:first-child > a").css("padding-right")),a+=30<a?45:20<a?40:30,(E.hasClass("rtl")?T('#header-outer[data-format="centered-logo-between-menu"] #top nav > .sf-menu:not(.buttons) > li:nth-child('+Math.floor(t/2)+")").css({"margin-left":e+a+"px"}):T('#header-outer[data-format="centered-logo-between-menu"] #top nav > .sf-menu:not(.buttons) > li:nth-child('+Math.floor(t/2)+")").css({"margin-right":e+a+"px"})).addClass("menu-item-with-margin"),i=n=0,T('#header-outer[data-format="centered-logo-between-menu"] #top nav > .sf-menu:not(.buttons) > li:not(#social-in-menu)').each(function(e){e+1<=Math.floor(t/2)?n+=T(this).width():i+=T(this).width()}),a=Math.abs(i-n),i<n||E.hasClass("rtl")&&n<i?T("#header-outer #top .row > .col.span_9").css("padding-right",a):T("#header-outer #top .row > .col.span_9").css("padding-left",a),T('#header-outer[data-format="centered-logo-between-menu"] nav').css("visibility","visible")):0<T('#header-outer[data-format="centered-logo-between-menu"]').length&&te.winW<1e3&&T("#header-outer .row > .col.span_9").css({"padding-right":"0","padding-left":"0"})}function wn(){var e;0<T('#header-outer[data-format="centered-logo-between-menu"]').length&&(t?t&&0<T('#header-outer[data-format="centered-logo-between-menu"]').length&&0<T("header#top #logo img:first[src]").length&&((e=new Image).src=T("header#top #logo img:first").attr("src"),e.onload=function(){vn()}):vn(),k.on("smartresize",vn))}function yn(){te.usingMobileBrowser&&0==T('#header-outer[data-remove-fixed="1"]').length&&E.attr("data-hhun","0"),0<T("#nectar_fullscreen_rows").length&&c.attr("data-permanent-transparent","false"),te.usingMobileBrowser&&0<T('#header-outer[data-mobile-fixed="1"]').length&&0==T('#header-outer[data-transparent-header="true"]').length&&T("#header-space").css("height",c.outerHeight())}function _n(){var n=0,i=250,s=6;function r(){c.addClass("detached");var e=te.scrollTop,t=Math.abs(e-n),a,t;if((0<T("body.animated-scrolling").length&&0<T("#header-outer.detached").length||0<T("body.no-scroll").length)&&999<te.winW)return i<e&&(n=te.scrollTop,e=te.scrollTop),void requestAnimationFrame(r);(0<T("body.material-ocm-open").length||0<T("#search-outer.material-open").length)&&999<te.winW?requestAnimationFrame(r):0<T('#header-outer[data-mobile-fixed="false"]').length&&0<T("body.mobile").length?c.removeClass("detached"):(c.hasClass("side-widget-open")||T("#header-outer .slide-out-widget-area-toggle a").hasClass("animating")||(1<e&&(0==T('#header-outer[data-permanent-transparent="1"]').length&&(c.removeClass("transparent"),c.addClass("scrolling")),0<h.length&&(i<e?(h.addClass("hide-up"),c.css("transform","translateY(-"+te.secondaryHeaderHeight+"px)")):(h.removeClass("hide-up"),c.css("transform","0px)")))),i<e?(c.hasClass("detached")||c.addClass("detached").removeClass("parallax-contained"),c.removeClass("no-transition"),s<=t&&(n<e?(c.hasClass("invisible")||(c.addClass("invisible").removeClass("at-top"),0<T(".sf-menu").length&&T().superfish&&(T(".sf-menu").superfish("hide"),T("header#top nav > ul.sf-menu > li.menu-item-over").removeClass("menu-item-over"))),T(".page-submenu.stuck").css("transform","translateY(0px)").addClass("header-not-visible")):(c.hasClass("invisible")&&c.removeClass("invisible"),a=c.outerHeight(),0<h.length&&(a-=te.secondaryHeaderHeight),0<d.length&&0==T("body.mobile").length?(ee=G?d.height():0,T(".page-submenu.stuck").css("transform","translateY("+(a-ee)+"px)").removeClass("header-not-visible")):T(".page-submenu.stuck").css("transform","translateY("+a+"px)").removeClass("header-not-visible")))):(t=0<T('#header-outer[data-using-secondary="1"]').length?32:0,e<=(t=0<d.length?0<T('#header-outer[data-using-secondary="1"]').length?32+d.height():d.height():t)&&(c.addClass("at-top").removeClass("invisible").removeClass("scrolling"),0<T('#header-outer[data-megamenu-rt="1"]').length&&0<T('#header-outer[data-transparent-header="true"]').length&&0<T("#header-outer .megamenu").length?0<T('#header-outer[data-transparent-header="true"]').length&&0==T(".nectar-box-roll").length&&0==T(".megamenu.sfHover").length?c.addClass("transparent").css("transform","translateY(0)").removeClass("no-transition"):0<T(".nectar-box-roll").length&&c.css("transform","translateY(0)").addClass("at-top-before-box"):0<T('#header-outer[data-transparent-header="true"]').length&&0==T(".nectar-box-roll").length?c.addClass("transparent").css("transform","translateY(0)"):0<T(".nectar-box-roll").length&&c.css("transform","translateY(0)").addClass("at-top-before-box"),0<T('#page-header-bg[data-parallax="1"]').length&&c.addClass("parallax-contained").css("transform","translateY(0)"))),te.winH+I.scrollY>=z.body.offsetHeight&&(c.removeClass("invisible"),a=c.outerHeight(),0<h.length&&(a-=te.secondaryHeaderHeight),0<d.length&&0==T("body.mobile").length?(ee=G?d.height():0,T(".page-submenu.stuck").css("transform","translateY("+(a-ee)+"px)").removeClass("header-not-visible")):T(".page-submenu.stuck").css("transform","translateY("+a+"px)").removeClass("header-not-visible"))),n=e,999<te.winW&&requestAnimationFrame(r))}r()}function Cn(){var e=te.scrollTop,t=te.winW,a=E.hasClass("material")?150:30;(a=1==v?0:a)<e&&1e3<=t&&0==T("body.material-ocm-open").length&&(E.is(".material")&&(0==T("#search-outer.material-open").length&&T('#header-outer[data-transparent-header="true"] .bg-color-stripe').css("transition","none"),0<h.length&&(h.addClass("hide-up"),c.css("transform","translateY(-"+te.secondaryHeaderHeight+"px)"))),0<T('#header-outer[data-megamenu-rt="1"]').length&&0<T('#header-outer[data-transparent-header="true"]').length&&0<T("#header-outer .megamenu").length?"true"==c.attr("data-transparent-header")&&0==T("#header-outer.side-widget-open").length&&0==T('#header-outer[data-permanent-transparent="1"]').length&&0==T(".megamenu.sfHover").length&&(c.removeClass("transparent"),c.removeClass("no-transition")):"true"==c.attr("data-transparent-header")&&0==T("#header-outer.side-widget-open").length&&0==T('#header-outer[data-permanent-transparent="1"]').length&&c.removeClass("transparent"),T("#header-outer, #search-outer").addClass("small-nav"),0<T('#header-outer[data-full-width="true"][data-transparent-header="true"]').length&&0<d.length&&1==G&&T('#header-outer[data-full-width="true"] header > .container').stop(!0,!0).animate({padding:"0"},{queue:!1,duration:250,easing:"easeOutCubic"}),0<T("body.material").length&&T("header#top nav > ul > li.menu-item-with-margin").stop(!0,!0).animate({"margin-right":parseInt(T("header#top nav > ul > li.menu-item-with-margin").css("margin-right"))-3*parseInt(f)+"px"},{queue:!1,duration:310,easing:"easeOutQuad"}),0<T(".nectar-box-roll").length&&0==T('#header-outer[data-permanent-transparent="1"]').length&&T("#ajax-content-wrap").animate({"margin-top":Math.floor(u-f+2*g/1.8+te.adminBarHeight+te.secondaryHeaderHeight)},{queue:!1,duration:250,easing:"easeOutCubic"}),k.off("scroll.headerResizeEffect",Cn),k.on("scroll.headerResizeEffect",xn),T('#header-outer[data-transparent-header="true"]').css("transition","transform 0.3s ease, background-color 0.30s ease, opacity 0.3s ease, box-shadow 0.30s ease, margin 0.25s ease-out"),T('#header-outer[data-transparent-header="true"] .cart-menu').css("transition","none"),setTimeout(function(){T('#header-outer[data-transparent-header="true"]').css("transition","transform 0.3s ease, background-color 0.30s ease, opacity 0.3s ease, box-shadow 0.30s ease, border-color 0.30s ease, margin 0.25s ease-out"),T('#header-outer[data-transparent-header="true"] .cart-menu').css("transition","border-color 0.30s ease")},300))}function xn(){var e=te.scrollTop,t=te.winW,a=E.hasClass("material")?150:30;if(E.is(".material-ocm-open"))return!1;(e<=(a=1==v?0:a)&&1e3<=t||0<T(".small-nav").length&&0<T("#ajax-content-wrap.no-scroll").length)&&(T("#header-outer, #search-outer").removeClass("small-nav"),0<T('#header-outer[data-megamenu-rt="1"]').length&&0<T('#header-outer[data-transparent-header="true"]').length&&0<T("#header-outer .megamenu").length?"true"==c.attr("data-transparent-header")&&0==T(".nectar-box-roll").length&&0==T(".megamenu.sfHover").length&&(c.addClass("transparent"),c.removeClass("no-transition")):"true"==c.attr("data-transparent-header")&&0==T(".nectar-box-roll").length&&c.addClass("transparent"),0<T('#header-outer[data-full-width="true"][data-transparent-header="true"]').length&&0<d.length&&1==G&&T('#header-outer[data-full-width="true"] header > .container').stop(!0,!0).animate({padding:"0 28px"},{queue:!1,duration:250,easing:"easeOutCubic"}),0<T("body.material").length&&T("header#top nav > ul > li.menu-item-with-margin").stop(!0,!0).animate({"margin-right":parseInt(T("header#top nav > ul > li.menu-item-with-margin").css("margin-right"))+3*parseInt(f)+"px"},{queue:!1,duration:140,easing:"easeOutQuad"}),0<h.length&&(h.removeClass("hide-up"),c.removeClass("hide-up").css("transform","translateY(0%)")),0<T(".nectar-box-roll").length&&0==T('#header-outer[data-permanent-transparent="1"]').length&&T("#ajax-content-wrap").animate({"margin-top":Math.floor(u+2*g+te.adminBarHeight+te.secondaryHeaderHeight)},{queue:!1,duration:250,easing:"easeOutCubic"}),k.off("scroll.headerResizeEffect",xn),k.on("scroll.headerResizeEffect",Cn),T('#header-outer[data-transparent-header="true"]').css("transition","transform 0.3s ease, background-color 0.30s ease, opacity 0.3s ease, box-shadow 0.30s ease, margin 0.25s ease-out"),T('#header-outer[data-transparent-header="true"] .cart-menu').css("transition","none"),setTimeout(function(){T('#header-outer[data-transparent-header="true"]').css("transition","transform 0.3s ease, background-color 0.30s ease, opacity 0.3s ease, box-shadow 0.30s ease, border-color 0.30s ease, margin 0.25s ease-out"),T('#header-outer[data-transparent-header="true"] .cart-menu').css("transition","border-color 0.30s ease")},300))}function kn(){0<T('#header-outer[data-format="centered-menu-bottom-bar"][data-condense="true"]').length&&!c.hasClass("within-custom-breakpoint")||0<te.scrollTop&&(0<T("body.material").length&&(c.addClass("scrolled-down"),0<h.length&&1e3<te.winW&&(h.addClass("hide-up"),c.css("transform","translateY(-"+te.secondaryHeaderHeight+"px)"))),"true"==c.attr("data-transparent-header")&&0==T('#header-outer[data-permanent-transparent="1"]').length&&c.removeClass("transparent").addClass("scrolled-down"),k.off("scroll.headerResizeEffectOpaque",kn),k.on("scroll.headerResizeEffectOpaque",Tn))}function Tn(){0<T('#header-outer[data-format="centered-menu-bottom-bar"][data-condense="true"]').length&&!c.hasClass("within-custom-breakpoint")||0==te.scrollTop&&0==T("body.material-ocm-open").length&&(0<T('#header-outer[data-megamenu-rt="1"]').length&&0<T('#header-outer[data-transparent-header="true"]').length&&0<T("#header-outer .megamenu").length?"true"==c.attr("data-transparent-header")&&0==T(".megamenu.sfHover").length?(c.addClass("transparent").removeClass("scrolled-down"),c.removeClass("no-transition")):"true"==c.attr("data-transparent-header")&&c.removeClass("scrolled-down"):"true"==c.attr("data-transparent-header")&&c.addClass("transparent").removeClass("scrolled-down"),0<T("body.material").length&&(c.removeClass("scrolled-down"),0<h.length&&1e3<te.winW&&(h.removeClass("hide-up"),c.removeClass("hide-up").css("transform","translateY(0%)"))),k.off("scroll.headerResizeEffectOpaque",Tn),k.on("scroll.headerResizeEffectOpaque",kn))}function In(){0<T("body.material-ocm-open").length?requestAnimationFrame(In):(5<te.scrollTop?(c.is('[data-permanent-transparent="1"]')||c.removeClass("transparent"),0<te.secondaryHeaderHeight?(h.addClass("hide-up"),c.css("transform","translateY(-"+te.secondaryHeaderHeight+"px)").addClass("hidden-secondary")):c.removeClass("hidden-secondary")):(c.is('[data-transparent-header="true"]')&&c.addClass("transparent"),0<te.secondaryHeaderHeight&&(h.removeClass("hide-up"),c.css("transform","translateY(0px)")),c.removeClass("hidden-secondary")),te.winW<1e3&&requestAnimationFrame(In))}function zn(){999<te.winW||(k.off("scroll.headerResizeEffect"),k.off("scroll.headerResizeEffectOpaque"),c.removeClass("scrolled-down").removeClass("detached").removeClass("invisible").removeClass("at-top").css("transform","none"),0<T('#header-outer[data-mobile-fixed="1"]').length?requestAnimationFrame(In):"true"==c.attr("data-transparent-header")&&c.addClass("transparent"),k.off("smartresize.nectarNavScrollEffects"),k.on("smartresize.nectarNavScrollEffects",En))}function En(){te.winW<1e3||(1==b&&"1"!=y?(k.off("scroll.headerResizeEffect"),(0==T("#nectar_fullscreen_rows").length||0<T('#nectar_fullscreen_rows[data-mobile-disable="on"]').length&&te.usingMobileBrowser)&&k.on("scroll.headerResizeEffect",Cn)):"1"!=y?(k.off("scroll.headerResizeEffectOpaque"),k.on("scroll.headerResizeEffectOpaque",kn)):"1"==y&&(0<T(".nectar-box-roll").length&&c.addClass("at-top-before-box"),0==T('#header-outer[data-remove-fixed="1"]').length&&_n()),0<T('#header-outer[data-format="centered-menu-bottom-bar"][data-condense="true"]').length&&(0<h.length&&c.css("transform",""),200<te.scrollTop&&!c.hasClass("fixed-menu")&&c.addClass("fixed-menu")),k.off("smartresize.nectarNavScrollEffects"),k.on("smartresize.nectarNavScrollEffects",zn))}function Hn(){0==T('#header-outer[data-remove-fixed="1"]').length&&1e3<te.winW&&0!=T(I).scrollTop()&&1==T('#header-outer.transparent[data-permanent-transparent="false"]').length&&c.removeClass("transparent"),0==T("#nectar_fullscreen_rows").length&&0==T(".nectar-box-roll").length&&dn(),te.winW<1e3&&0==T(".nectar-box-roll").length?(zn(),k.on("smartresize.nectarNavScrollEffects",zn)):(En(),k.on("smartresize.nectarNavScrollEffects",En))}function An(){var e,e;0<T(".mobile").length?te.winH<te.winW&&1e3<te.winW&&0!=T("#header-outer.small-nav").length||T("#header-space").css("height",c.outerHeight()):0==T(".nectar-parallax-scene.first-section").length&&(e=g-g/1.8,e=0<T('#header-outer[data-header-resize="1"]').length&&0<T(".small-nav").length?c.outerHeight()+(parseInt(f)+2*e):c.outerHeight(),T("#header-space").css("height",e))}function Mn(){var e=-1,a=te.scrollTop;function t(){if(!E.hasClass("compose-mode")){if(a=te.scrollTop,e==a)return requestAnimationFrame(t),!1;e=a,n(),requestAnimationFrame(t)}}function n(){var e=0,e,t;0<T("body.mobile").length||1==m&&"none"==T("#header-outer .span_9").css("display")?(e=0,(t="fixed"==o.css("position")?o.height():0)<(e+=te.adminBarHeight)-a?c.css("top",e-a+"px"):c.css("top",t)):0==m&&(e=0,c.is('[data-remove-fixed="1"]')||(e+=te.adminBarHeight),c.css("top",e+"px"))}0<T('#header-outer[data-mobile-fixed="1"]').length&&0<o.length&&((0==T("#nectar_fullscreen_rows").length||0<T("#nectar_fullscreen_rows").length&&te.usingMobileBrowser)&&requestAnimationFrame(t),k.smartresize(n))}function On(){var e="",t,e=c.is("[data-logo-height]")&&c.is("[data-padding]")?0<c.find("#logo.no-image").length?"left-header"==w&&1e3<te.winW?0:parseInt(c.find("#logo.no-image").height())+parseInt(2*c.attr("data-padding")):"left-header"==w&&1e3<te.winW?0:parseInt(c.attr("data-logo-height"))+parseInt(2*c.attr("data-padding")):"left-header"==w&&1e3<te.winW?0:c.outerHeight();0<te.winH-te.adminBarHeight-e-te.footerOuterHeight-1-s.height()-T(".page-header-no-bg").height()?(t=0<T('body:not(.material) #header-outer[data-header-resize="1"]').length?55:0,T('body[data-footer-reveal="1"] .container-wrap').css({"margin-bottom":te.footerOuterHeight}),T(".container-wrap").css({"min-height":te.winH-te.adminBarHeight-e-te.footerOuterHeight-T(".page-header-no-bg").height()-s.height()+t})):T('body[data-footer-reveal="1"] .container-wrap').css({"margin-bottom":te.footerOuterHeight}),te.winW<1e3?l.attr("data-midnight","light"):l.removeAttr("data-midnight")}function Sn(){(0<T('body[data-footer-reveal="1"]').length||0<T('body.material[data-slide-out-widget-area-style="slide-out-from-right"]').length)&&(E.hasClass("mobile")||E.addClass("nectar-no-flex-height"),setTimeout(On,60),On(),k.on("resize",On),0<T('body[data-footer-reveal="1"][data-footer-reveal-shadow="large_2"]').length&&T(".container-wrap").css({boxShadow:"0 70px 110px -30px "+l.css("backgroundColor")}))}function Fn(){var n;0<T('body[data-header-inherit-rc="true"]').length&&0==T(".mobile").length&&0<T('#header-outer[data-transparent-header="true"]').length&&(n=u/2+g+te.adminBarHeight,0==T('#header-outer[data-permanent-transparent="1"]').length&&(n=u-f+Math.ceil(2*g/1.8)+te.adminBarHeight),T(".main-content > .row > .wpb_row").each(function(){var t=T(this),a,e=new Waypoint({element:t,handler:function(e){"down"==e?0<t.find(".row-bg.using-bg-color").length?(a=0<t.find("> .col.span_12.light").length?"light-text":"dark-text",c.css("background-color",t.find(".row-bg").css("background-color")).removeClass("light-text").removeClass("dark-text").addClass(a),c.attr("data-current-row-bg-color",t.find(".row-bg").css("background-color")),T("body.material #header-outer .bg-color-stripe").css("background-color",t.find(".row-bg").css("background-color"))):(c.css("background-color",c.attr("data-user-set-bg")).removeClass("light-text").removeClass("dark-text"),c.attr("data-current-row-bg-color",c.attr("data-user-set-bg")),T("body.material #header-outer .bg-color-stripe").css("background-color","")):0<t.prev("div.wpb_row").find(".row-bg.using-bg-color").length?(a=0<t.prev("div.wpb_row").find("> .col.span_12.light").length?"light-text":"dark-text",c.css("background-color",t.prev("div.wpb_row").find(".row-bg").css("background-color")).removeClass("light-text").removeClass("dark-text").addClass(a),c.attr("data-current-row-bg-color",t.prev("div.wpb_row").find(".row-bg").css("background-color")),T("body.material #header-outer .bg-color-stripe").css("background-color",t.prev("div.wpb_row").find(".row-bg").css("background-color"))):(c.css("background-color",c.attr("data-user-set-bg")).removeClass("light-text").removeClass("dark-text"),c.attr("data-current-row-bg-color",c.attr("data-user-set-bg")),T("body.material #header-outer .bg-color-stripe").css("background-color",""))},offset:n})}))}function $n(){var s=I.jQuery,a=I.Waypoint,r=je(),e=je();function t(e){this.options=s.extend({},a.defaults,t.defaults,e),this.element=this.options.element,this.$element=s(this.element),this.createWrapper(),this.createWaypoint()}k.on("smartresize",function(){var e;r=je(),0<o.length&&"fixed"==o.css("position")&&(r+=o.height()),0<d.length&&1e3<k.width()&&0<s('body[data-hhun="1"]').length&&(r+=d.height()),0<s(".page-submenu.stuck").length?(s(".page-submenu.stuck").addClass("no-trans").css("top",r).css("transform","translateY(0)").addClass("stuck"),setTimeout(function(){s(".page-submenu.stuck").removeClass("no-trans")},50),s(".page-submenu.stuck").parents(".wpb_row").css("z-index",1e4),0<s("#boxed").length&&(e=1e3<k.width()?.04*s(".container-wrap").width():39,s(".page-submenu.stuck").css({"margin-left":"-"+e+"px",width:s(".container-wrap").width()}))):(s(".page-submenu.stuck").css("top","0").removeClass("stuck"),s(".page-submenu.stuck").parents(".wpb_row").css("z-index","auto"),0<s("#boxed").length&&s(".page-submenu.stuck").css({"margin-left":"0px",width:"100%"}))}),t.prototype.createWaypoint=function(){var i=this.options.handler;r=je(),0<o.length&&"fixed"==o.css("position")&&(r+=o.height()),0<d.length&&1e3<k.width()&&0<s('body[data-hhun="1"]').length&&(r+=d.height()),this.waypoint=new a(s.extend({},this.options,{element:this.wrapper,handler:s.proxy(function(e){var t=-1<this.options.direction.indexOf(e),a=t?this.$element.outerHeight(!0):"",n,t;this.$wrapper.height(a),t?(this.$element.addClass("no-trans").css("top",r).css("transform","translateY(0)").addClass("stuck"),n=this,setTimeout(function(){n.$element.removeClass("no-trans")},50),this.$element.parents(".wpb_row").css("z-index",1e4),0<s("#boxed").length&&(t=1e3<k.width()?.04*s(".container-wrap").width():39,this.$element.css({"margin-left":"-"+t+"px",width:s(".container-wrap").width()}))):(this.$element.css("top","0").removeClass("stuck"),0<s("#boxed").length&&this.$element.css({"margin-left":"0px",width:"100%"})),i&&i.call(this,e)},this),offset:r}));var t=this;setInterval(function(){var e;0<s('body[data-hhun="1"] #header-outer.detached:not(.invisible)').length?(e=c.outerHeight(),0<h.length&&(e-=te.secondaryHeaderHeight),t.waypoint.options.offset=r+e):t.waypoint.options.offset=r,a.refreshAll()},100)},t.prototype.createWrapper=function(){this.options.wrapper&&this.$element.wrap(this.options.wrapper),this.$wrapper=this.$element.parent(),this.wrapper=this.$wrapper[0]},t.prototype.destroy=function(){this.$element.parent()[0]===this.wrapper&&(this.waypoint.destroy(),this.$element.removeClass(this.options.stuckClass),this.options.wrapper&&this.$element.unwrap())},t.defaults={wrapper:'<div class="sticky-wrapper" />',stuckClass:"stuck",direction:"down right"},a.Sticky=t}function Wn(){var e,t,a;0<T('.page-submenu[data-sticky="true"]').length&&0==T("#nectar_fullscreen_rows").length&&($n(),1<T(".page-submenu").parents(".span_12").find("> .wpb_column").length&&(e=T(".page-submenu").clone(),t=T(".page-submenu").parents(".wpb_row"),T(".page-submenu").remove(),t.before(e)),a=new Waypoint.Sticky({element:T('.page-submenu[data-sticky="true"]')[0]})),0==T("#nectar_fullscreen_rows").length&&T(".page-submenu").parents(".wpb_row").css("z-index",1e4),T(".page-submenu .mobile-menu-link").on("click",function(){return T(this).parents(".page-submenu").find("ul").stop(!0).slideToggle(350),!1}),T(".page-submenu ul li a").on("click",function(){0<T("body.mobile").length&&T(this).parents(".page-submenu").find("ul").stop(!0).slideToggle(350)})}function jn(){var e,t,a,a,t;T(".vc_row-o-full-height:first").length&&(t=k.height(),T(".vc_row-o-full-height").each(function(){(a=T(this).offset().top)<t&&T(this).hasClass("top-level")&&!te.usingFrontEndEditor?(a=100-a/(t/100),T(this).css("min-height",a+"vh"),T(this).find("> .col.span_12").css("min-height",a+"vh")):(T(this).css("min-height",t),T(this).find("> .col.span_12").css("min-height",t))}))}function Yn(){0<T(".vc_row-o-full-height").length&&(jn(),k.on("smartresize",jn))}function Bn(){var e,t=I.navigator.userAgent.indexOf("MSIE ");(0<t||navigator.userAgent.match(/Trident.*rv\:11\./))&&T(".vc_row-o-full-height").each(function(){"flex"===T(this).find("> .span_12").css("display")&&T(this).wrap('<div class="vc_ie-flexbox-fixer"></div>')}),(0<t||navigator.userAgent.match(/Trident.*rv\:11\./))&&(qn(),T(I).on("resize",qn))}function qn(){T(".img-with-aniamtion-wrap img.img-with-animation").each(function(){var e,t;0==T(this).parents(".tabbed").length&&0==T(this).parents(".toggle").length&&((e=T(this).parents(".img-with-aniamtion-wrap")).css({height:""}),t=T(this).height(),e.css({height:t}))})}function Pn(){function e(){T('.blog-recent[data-style="title_only"]').each(function(){if(1<T(this).find("> .col").length)return!1;var e=T(this).parent().parent().parent(),t;(e.hasClass("vc_col-sm-3")||e.hasClass("vc_col-sm-4")||e.hasClass("vc_col-sm-6")||e.hasClass("vc_col-sm-8")||e.hasClass("vc_col-sm-9"))&&(0==T("body.mobile").length&&0==T(this).next("div").length?(t=0,T(this).find("> .col").css("padding","50px 20px"),T(this).parents(".span_12").find(" > .wpb_column").each(function(){Math.floor(T(this).height())>t&&(t=Math.floor(T(this).height()))}),Math.floor(T(this).find("> .col").outerHeight(!0))<Math.floor(T(this).parents(".wpb_row").height())-1&&(T(this).find("> .col").css("padding-top",(t-T(this).find("> .col").height())/2+"px"),T(this).find("> .col").css("padding-bottom",(t-T(this).find("> .col").height())/2+"px"))):T(this).find("> .col").css("padding","50px 20px"))})}0<T('.blog-recent[data-style="title_only"]').length&&(e(),k.on("smartresize",e))}function Ln(){T(".nectar-recent-posts-slider").each(function(){var e=250,t=parseInt(T(this).attr("data-height")),a=0<T('body[data-ext-responsive="true"]').length?k.width()/1400:k.width()/1100,n=T(this).find(".nectar-recent-post-slide, .flickity-viewport"),i,s,t;1e3<te.winW&&0==T("#boxed").length?0==T(this).parents(".full-width-content").length&&(0<T('body[data-ext-responsive="true"]').length&&1400<=te.winW||0==T('body[data-ext-responsive="true"]').length&&1100<=te.winW)?n.css("height",Math.ceil(t)):n.css("height",Math.ceil(t*a)):(i=0==(i=0<T(this).parents(".wpb_column").length?T(this).parents(".wpb_column"):T(this).parents(".col")).length?T(".main-content"):i).hasClass("vc_span12")||i.hasClass("main-content")||i.hasClass("span_12")||i.hasClass("vc_col-sm-12")?t*a<=e?n.css("height",e):n.css("height",Math.ceil(t*a)):(t=t/Rn(i))*i.width()<=e?n.css("height",e):n.css("height",t*i.width())})}function Rn(e){var t=1100,e=T(e).attr("class").match(/\d+/);return"2"==e?t=170:"3"==e?t=260:"4"==e?t=340:"6"==e?t=530:"8"==e?t=700:"9"==e?t=805:"10"==e?t=916.3:"12"==e&&(t=1100),t}function Nn(){T(".nectar-recent-posts-single_featured.multiple_featured").each(function(){var e=0<T(this).find(".project-slides").length?".project-slide":".nectar-recent-post-slide",t=0<T(this).find(".project-slides").length?".project-info h1":".inner-wrap h2 a";T(this).find(e).each(function(){T(this).find(t).each(function(){var e=T(this).text(),e;e=(e=e.trim()).split(" "),T(this)[0].innerHTML="";for(var t=0;t<e.length;t++)T(this)[0].innerHTML+="<span>"+e[t]+"</span> "}),T(this).find(t+" > span").wrapInner('<span class="inner" />')})})}function Vn(){T('.nectar-split-heading[data-animation-type="line-reveal-by-space"]').each(function(){T(this).find("> *").each(function(){var e=T(this).text(),e;e=(e=e.trim()).split(" "),T(this)[0].innerHTML="";for(var t=0;t<e.length;t++)T(this)[0].innerHTML+="<span>"+e[t]+"</span> "}),T(this).hasClass("animated-in")?T(this).find("> * > span").wrapInner('<span class="inner animated" />'):T(this).find("> * > span").wrapInner('<span class="inner" />'),T(this).addClass("markup-generated")}),T('.nectar-split-heading[data-animation-type="letter-fade-reveal"]').each(function(){T(this).find("> *").each(function(){var e=T(this).text(),e;e=(e=e.trim()).split(" "),T(this)[0].innerHTML="";for(var t=0;t<e.length;t++)T(this)[0].innerHTML+="<span>"+e[t]+"</span> "}),T(this).find("span").each(function(){var a=T(this),e=T(this).text().split("");a.empty(),T.each(e,function(e,t){a.append("<span>"+t+"</span")})}),T(this).addClass("markup-generated")})}function Xn(){(0<T('.nectar-split-heading[data-animation-type="line-reveal-by-space"]').length||0<T('.nectar-split-heading[data-animation-type="letter-fade-reveal"]').length)&&Vn()}function Dn(){var e,e,t,a;function n(){T(".nectar-recent-posts-single_featured.multiple_featured").each(function(n){0<T(this).find("> .normal-container").length&&T(this).find("> .normal-container").remove(),T(this).append('<div class="normal-container container"> <ul class="controls" data-color="'+T(this).attr("data-button-color")+'" data-num="'+T(this).find(".nectar-recent-post-slide").length+'"></ul> </div>');var t=T(this),a=0,i;M[n]={autorotate:""},T(this).find(".nectar-recent-post-slide").each(function(e){T(this).find(".recent-post-container").height()>a&&(T(this).siblings().removeClass("tallest"),T(this).addClass("tallest"),a=T(this).find(".recent-post-container").height());var e=0==e&&0<T(this).parents('.nectar-recent-posts-single_featured.multiple_featured[data-autorotate="none"]').length?'class="active"':"";t.find(".controls").append("<li "+e+'><span class="title">'+T(this).find("h2").text()+"</span></li>")}),T(this).addClass("js-loaded"),T(this).find(".controls li").on("click",function(e){var t,e,a;T(this).hasClass("active")||(void 0!==e.originalEvent&&T(this).parent().find(".active").addClass("trans-out"),t=T(this).index(),e=T(this).parent().find(".active").index(),a=T(this),clearTimeout(i),T(this).siblings().removeClass("active"),T(this).addClass("active"),i=setTimeout(function(){a.parents(".multiple_featured").find(".nectar-recent-post-slide:not(:eq("+t+"))").css("opacity","0").removeClass("active"),a.parent().find(".trans-out").removeClass("trans-out")},300),a.parents(".multiple_featured").find(".nectar-recent-post-slide:not(:eq("+t+"))").css("z-index","10"),a.parents(".multiple_featured").find(".nectar-recent-post-slide:eq("+e+")").css("z-index","15"),T(this).parents(".multiple_featured").find(".nectar-recent-post-slide").eq(t).css({opacity:"1","z-index":"20"}).addClass("active"),"none"!=T(this).parents(".multiple_featured").attr("data-autorotate")&&ai(a.parents(".nectar-recent-posts-single_featured.multiple_featured"),n))}),t=T(this),0<T(this).attr("data-autorotate").length&&"none"!=T(this).attr("data-autorotate")&&0==T("body.vc_editor").length&&setTimeout(function(){var e=parseInt(t.attr("data-autorotate"))<100?4e3:parseInt(t.attr("data-autorotate"));M[n].autorotate=setInterval(function(){ti(t)},e),t.find(".controls > li:first-child").addClass("active")},30)}),Nn(),k.on("resize",Nn)}0<T(".nectar-recent-posts-slider-inner").length&&(e=0<T(".nectar-recent-posts-slider_multiple_visible").length&&"90%",e=T(".nectar-recent-posts-slider-inner").flickity({contain:!0,groupCells:e,draggable:!0,lazyLoad:!1,imagesLoaded:!0,percentPosition:!0,prevNextButtons:!1,pageDots:!0,resize:!0,setGallerySize:!0,wrapAround:!0,accessibility:!1}),setTimeout(function(){T(".nectar-recent-posts-slider-inner").addClass("loaded")},1150),t=e.data("flickity"),e.on("dragStart.flickity",function(){T(".flickity-viewport").addClass("is-moving")}),e.on("dragEnd.flickity",function(){T(".flickity-viewport").removeClass("is-moving")}),e.on("select.flickity",function(){T(".flickity-viewport").addClass("no-hover"),clearTimeout(a),a=setTimeout(function(){T(".flickity-viewport").removeClass("no-hover")},400)}),Ln(),k.on("resize",Ln),te.usingMobileBrowser||te.usingFrontEndEditor||k.on("resize",Zn)),n()}function Qn(){T(".nectar-recent-posts-slider").each(function(){var e=parseInt(T(this).find(".flickity-slider").position().left),t=T(this).find(".nectar-recent-post-slide"),a=t.length,n=t.width(),i=T(this).find(".nectar-recent-post-slide:last-child").index(),s=T(this).find(".nectar-recent-post-slide:first-child .nectar-recent-post-bg"),t=T(this).find(".nectar-recent-post-slide:last-child .nectar-recent-post-bg");-3<=e?t.css("margin-left",parseInt(Math.ceil(n/3.5))+"px"):t.css("margin-left","-"+parseInt(Math.ceil(n/3.5*i))+"px"),Math.abs(e)>=(a-1)*n?s.css("margin-left","-"+parseInt(Math.ceil(n/3.5*a))+"px"):s.css("margin-left","0px"),T(this).find(".nectar-recent-post-bg").css("transform","translateX("+Math.ceil(T(this).find(".flickity-slider").position().left/-3.5)+"px)")}),requestAnimationFrame(Qn)}function Zn(){T(".nectar-recent-posts-slider").each(function(){var t=T(this).find(".nectar-recent-post-slide").width();T(this).find(".nectar-recent-post-slide").each(function(e){T(this).find(".nectar-recent-post-bg").css("margin-left","-"+parseInt(Math.ceil(t/3.5)*e)+"px")})})}function Un(){Dn(),T('.blog-recent[data-style="classic_enhanced_alt"] .inner-wrap').each(function(){T(this).find(".post-featured-img").each(function(){var e=T(this).find("img").attr("src");T(this).css("background-image","url("+e+")")})}),T('.blog-recent[data-style="classic_enhanced"]').each(function(){0==T(this).find(".inner-wrap.has-post-thumbnail").length&&T(this).addClass("no-thumbs")}),te.usingMobileBrowser||0<T(".nectar-recent-posts-slider").length&&!te.usingFrontEndEditor&&I.requestAnimationFrame(Qn),te.usingMobileBrowser||te.usingFrontEndEditor||Zn()}function Gn(){T(".style-5").each(function(){T(this).find(".sizer").insertBefore(T(this).find(".parallaxImg"))}),T(".style-5").parents(".wpb_row").css("z-index","100");var e=z,t=e.getElementsByTagName("body")[0],a=I,n=e.querySelectorAll(".parallaxImg"),i=n.length,s="ontouchstart"in a||navigator.msMaxTouchPoints;if(!(i<=0))for(var r=0;r<i;r++){var c=n[r],o=c.querySelectorAll(".parallaxImg-layer"),l=o.length;if(!(l<=0)){for(;c.firstChild;)c.removeChild(c.firstChild);var h=0,u=80;-1<navigator.userAgent.indexOf("Chrome")&&navigator.userAgent.indexOf("Edge/")<1?(u=1,T("html").addClass("cssreflections")):E.addClass("cssreflections");var d=e.createElement("div"),p=e.createElement("div"),g=e.createElement("div"),f=e.createElement("div"),m=[];c.id="parallaxImg__"+r,d.className="parallaxImg-container",g.className="parallaxImg-shadow",f.className="parallaxImg-layers";for(var b=0;b<l;b++){var v=e.createElement("div"),w=e.createElement("div"),y=o[b].getAttribute("data-img");T(v).html(T(o[b]).html()),v.className="parallaxImg-rendered-layer",v.setAttribute("data-layer",b),0==b&&0==T(c).parents(".wpb_gallery").length&&(w.className="bg-img",w.style.backgroundImage="url("+y+")",v.appendChild(w)),f.appendChild(v),m.push(v)}d.appendChild(f),c.appendChild(d),T(c).wrap('<div class="parallaxImg-wrap" />'),-1!=navigator.userAgent.indexOf("Safari")&&-1==navigator.userAgent.indexOf("Chrome")||T(c).parent().append(g),s&&0<T("body.using-mobile-browser").length||function(r,o,l,d){T(c).parents(".style-5").on("mousemove",function(e){var t=T(this),a=t.find(".parallaxImg-container"),n=t.find(".parallaxImg-shadow"),i=Date.now(),s=0<T(r).parents(".wpb_gallery").length;h+u<i&&(h=i,I.requestAnimationFrame(function(){_(e,!1,r,o,l,d,t,a,n,s)}))}),T(c).parents(".style-5").on("mouseenter",function(e){C(e,r,o,l,d)}),T(c).parents(".style-5").on("mouseleave",function(e){x(e,r,o,l,d)})}(c,m,l,p),function(e,t,a,n){k(!1,e,t,a,n),I.addEventListener("resize",function(){k(!1,e,t,a,n)})}(c,m,l,p)}}function _(e,t,a,n,i,s,r,o,l,d){var c,h,u,p,g,f,m,b,v,w,y,_,c,r,t,_,C,w,_,r,r;T(a.firstChild).hasClass("over")?(c=.03,h=.063,u="1.03",g=!(p="-10"),0<T(a).parents(".col.wide").length?(c=.03,h=.063,g=!0):0<T(a).parents(".col.regular").length||0<T(a).parents(".wpb_gallery").length?h=c=.045:0<T(a).parents(".col.tall").length?(c=.05,h=.015,g=!0):0<T(a).parents(".col.wide_tall").length?(h=c=.04,g=!0):r.hasClass("nectar-fancy-box")?(c=.045,h=.022,u="1.06",p="-2"):(c=.045,h=.075),f=te.scrollTop,m=0,b=(t?e.touches[0]:e).pageX,v=(t?e.touches[0]:e).pageY,w=a.getBoundingClientRect(),y=a.clientWidth||a.offsetWidth||a.scrollWidth,_=a.clientHeight||a.offsetHeight||a.scrollHeight,r=.52-(b-w.left)/y,t=.52-(v-w.top-f)/_,_=v-w.top-f-_/2,w=c*(c=320/y)*(r-(b-w.left-y/2)),_=h*c*(_-t),o.css("transform",r=1==d?" perspective("+3*y+"px) rotateX("+1.9*-_+"deg) rotateY("+1.3*-w+"deg)":0==g?" perspective("+3*y+"px) rotateX("+_+"deg) rotateY("+w+"deg)  translateY("+t*p+"px) translateX("+r*p+"px) scale("+u+")":" perspective("+3*y+"px) rotateX("+_+"deg) rotateY("+w+"deg)  translateY("+-10*t+"px) translateX("+-10*r+"px) scale(1.013)"),-1!=navigator.userAgent.indexOf("Safari")&&-1==navigator.userAgent.indexOf("Chrome")||l.css("transform",r)):x(e,a,n,i,s)}function C(e,t){t.firstChild.className+=" over",t.className+=" over",T(t).addClass("transition"),0<T(t).parents(".wpb_gallery").length?setTimeout(function(){T(t).removeClass("transition")},450):setTimeout(function(){T(t).removeClass("transition")},200)}function x(e,t){var a=t.clientWidth||t.offsetWidth||t.scrollWidth,n=t.firstChild;n.className=n.className.replace(" over",""),t.className=t.className.replace(" over",""),T(n).css("transform","perspective("+3*a+"px) rotateX(0deg) rotateY(0deg) translateZ(0)"),T(t).parents(".parallaxImg-wrap").find(".parallaxImg-shadow").css("transform","perspective("+3*a+"px) rotateX(0deg) rotateY(0deg) translateZ(0)"),T(t).addClass("transition"),setTimeout(function(){T(t).removeClass("transition")},200)}function k(e,t,a,n){for(var i=t.clientWidth||t.offsetWidth||t.scrollWidth,t=t.firstChild,s=0;s<n;s++)0==s?T(a[s]).css("transform","translateZ(0px)"):T(a[s]).css("transform","translateZ("+3*i/27*(1.1*s)+"px) ");n+=3,T(t).css("transform","perspective("+3*i+"px)")}}function Jn(){var e;0!=T('.nectar-fancy-box[data-style="hover_desc"]').length&&(e=0,T("body").on("mouseenter touchstart",'.nectar-fancy-box[data-style="hover_desc"]',function(){e=parseInt(T(this).find(".hover-content").outerHeight(!0)),T(this).addClass("hovered"),T(this).find(".heading-wrap").css("transform","translateY(-"+e+"px)")}),T("body").on("mouseleave touchend",'.nectar-fancy-box[data-style="hover_desc"]',function(){T(this).removeClass("hovered"),T(this).find(".heading-wrap").css("transform","translateY(0)")}))}function Kn(e,t){this.$el=e,this.$iconEl=this.$el.find(t),this.elX=0,this.elY=0,this.initialX=this.$el.width()/2,this.initialY=this.$el.height()/2,this.elX=0,this.elY=0,this.lastScroll=0,this.scrollAdjust=0,this.lastX=this.initialX,this.lastY=this.initialY,this.activeFollow=!1,this.percentage=.13,this.percentageTimeout,k.on("resize",this.resizeEvent.bind(this)),this.mouseEvents(),this.rafLoop()}function ei(){$=[],E.on("mouseenter",'.nectar_video_lightbox[data-parent-hover="1"]',function(){var e=T(this).parents(".wpb_row");e.find("> .row-bg-wrap .row-bg, > .nectar-video-wrap .nectar-video-inner").addClass("transition"),e.find("> .row-bg-wrap .row-bg, > .nectar-video-wrap .nectar-video-inner").css({transform:"scale(1.08)"})}),E.on("mouseleave",'.nectar_video_lightbox[data-parent-hover="1"]',function(){var e;T(this).parents(".wpb_row").find("> .row-bg-wrap .row-bg, > .nectar-video-wrap .nectar-video-inner").css({transform:"scale(1)"})}),T(".nectar-video-box").each(function(t){var a;T(this).find(".play_button_mouse_follow")&&(a=T(this),T(this).imagesLoaded(function(){te.usingMobileBrowser||($[t]=new Kn(a,".play_button_mouse_follow"));var e=a.is("[data-mouse-icon-color]")&&0<a.attr("data-mouse-icon-color").length?a.attr("data-mouse-icon-color"):"#000";a.is('[data-mouse-style="solid_color"]')&&a.find(".play_button_mouse_follow").css({"background-color":e}),a.find(".play_button_mouse_follow").addClass("visible")}))})}function ti(e){var t,a,n,i;0<T("body.vc_editor").length||(t=0<e.find(".project-slides").length?".dot-nav > span":".controls > li",a=0<e.find(".project-slides").length?"span":" li",n=e.find(t).length,(e.find(t+".active").index()+1==n?e.find(t+":first-child"):e.find(t+".active").next(a)).trigger("click"))}function ai(e,t){var a;clearInterval(M[t].autorotate),0<e.attr("data-autorotate").length&&(a=parseInt(e.attr("data-autorotate"))<100?4e3:parseInt(e.attr("data-autorotate")),M[t].autorotate=setInterval(function(){ti(e)},a))}function ni(){j=[],"undefined"!=typeof SalientRecentProjectsFullScreen&&T(".nectar_fullscreen_zoom_recent_projects").each(function(e){j[e]=new SalientRecentProjectsFullScreen(T(this))})}function ii(){var e=T(".single-portfolio #sidebar").attr("data-follow-on-scroll"),t,a,a,t,e;0!=T("body.single-portfolio").length&&0!=T("#sidebar[data-follow-on-scroll]").length&&1==T(".single-portfolio #sidebar").attr("data-follow-on-scroll")&&!E.hasClass("mobile")&&parseInt(T("#sidebar").height())+50<=parseInt(T(".post-area").height())&&(t=50,0<T('#header-outer[data-remove-fixed="0"]').length&&0==T('body[data-hhun="1"]').length&&(t+=c.outerHeight(),0<T('#header-outer[data-shrink-num][data-header-resize="1"]').length&&(a=parseInt(c.attr("data-padding"))-parseInt(c.attr("data-padding"))/1.8,t-=f,t-=a),0==T("body.mobile").length&&0<T('#header-outer[data-condense="true"]').length&&(a=T('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_9'),t=50,t+=c.height()-(parseInt(a.position().top)-parseInt(T("#header-outer #logo").css("margin-top")))-parseInt(te.secondaryHeaderHeight))),0<o.length&&(t+=o.outerHeight()),T(".single-portfolio #sidebar").theiaStickySidebar({additionalMarginTop:t,updateSidebarHeight:!1}))}function si(){0<T(".infinite_scroll").length&&(T(".portfolio-items.infinite_scroll").infinitescroll({navSelector:"div#pagination",nextSelector:"div#pagination a:first",itemSelector:".portfolio-items.infinite_scroll .element",finishedMsg:"<em>Congratulations, you've reached the end of the internet.</em>",msgText:" "},function(a){var n=T(".portfolio-items.infinite_scroll:not(.carousel)"),e;T(a).css("opacity",0).imagesLoaded(function(){var e,e;T(a).css("opacity",1),n.isotope("appended",T(a)),T(a).find(".work-item").addClass("ajax-loaded"),T(a).addClass("ajax-loaded"),T(a).find(".work-meta, .nectar-love-wrap").css({opacity:1}),(0<T(".portfolio-filters-inline").length||0<T(".portfolio-filters").length)&&(e=(0<T(".portfolio-filters-inline").length?T(".portfolio-filters-inline a.active"):T(".portfolio-filters a.active")).attr("data-filter"),T(".portfolio-filters-inline a.active").attr("data-filter"),n.isotope({filter:e}));for(var t=0;t<H.length;t++)H[t].reLayout();if(0<T(a).find(".work-item.style-5").length&&Gn(),"none"==T(a).find(".inner-wrap").attr("data-animation"))T(".portfolio-items .col .inner-wrap").removeClass("animated");else{for(var t=0;t<H.length;t++)H[t].masonryZindex(),H[t].portfolioAccentColor();T(a).each(function(){var e=0<T("#nectar_fullscreen_rows").length?"200%":"90%",t=T(this),a=new Waypoint({element:t,handler:function(){var e=t.is('[data-masonry-type="photography"].masonry-items')?85:115;setTimeout(function(){t.addClass("animated-in")},e*t.attr("data-delay-amount")),a.destroy()},offset:e})})}T(".portfolio-items").each(function(){var e=Be();T(this).find('a[rel^="prettyPhoto"], a.pretty_photo').attr("rel","prettyPhoto["+e+"_gal]").removeClass("pretty_photo")}),T(".portfolio-items").each(function(){var e=Be();T(this).find('a[data-fancybox^="group_"]').attr("data-fancybox","group_"+e)}),Ge(),setTimeout(function(){for(var e=0;e<H.length;e++)H[e].masonryZindex(),H[e].reLayout(),H[e].isotopeCatSelection();T(a).removeClass("ajax-loaded")},700),Mt()})}),T(".post-area.infinite_scroll .posts-container").infinitescroll({navSelector:"div#pagination",nextSelector:"div#pagination a:first",itemSelector:".post-area.infinite_scroll .posts-container .post",finishedMsg:"<em>Congratulations, you've reached the end of the internet.</em>",msgText:" "},function(t){0<T(t).find("[data-nectar-img-src]").length&&aa(),(0<T(".masonry.classic").length||0<T(".post-area:not(.masonry):not(.featured_img_left)").length||0<T(".post-area.standard-minimal").length)&&(ie(),T().mediaelementplayer&&T(t).find(".wp-audio-shortcode, .wp-video-shortcode").mediaelementplayer(),Ge(),0<T(".carousel").length&&(me(),xe()),hn(),T(".testimonial_slider").animate({opacity:"1"},800),ha(),ua(),setTimeout(function(){wa(),ya(),k.trigger("resize")},500)),Mt(),k.trigger("resize");var a=T(".infinite_scroll .posts-container");a.parent().hasClass("masonry")&&T(t).addClass("masonry-blog-item");var e=T(t);(e=0==e.find("img").length?T("body"):e).imagesLoaded(function(){a.parent().hasClass("masonry")&&!a.parent().hasClass("auto_meta_overlaid_spaced")&&a.isotope("appended",T(t));for(var e=0;e<L.length;e++)L[e].flickityBlogInit();if(T(t).addClass("ajax-loaded"),a.parent().hasClass("classic_enhanced")&&(a.find(".large_featured.has-post-thumbnail.ajax-loaded .post-featured-img, .wide_tall.has-post-thumbnail.ajax-loaded .post-featured-img").each(function(){var e=T(this).find("img").attr("src");T(this).css("background-image","url("+e+")")}),a.find(".large_featured.ajax-loaded .nectar-flickity, .wide_tall.ajax-loaded .nectar-flickity").each(function(){T(this).find(".cell").each(function(){var e=T(this).find("img").attr("src");T(this).css("background-image","url("+e+")")})})),"none"==T(t).parents(".posts-container").attr("data-animation"))T(t).find(".inner-wrap").removeClass("animated");else{for(var e=0;e<L.length;e++)L[e].blogMasonryZindex();T(t).each(function(){var e=T(this),t=new Waypoint({element:e,handler:function(){setTimeout(function(){e.addClass("animated-in")},80*e.attr("data-delay-amount")),t.destroy()},offset:"90%"})})}setTimeout(function(){T(t).removeClass("ajax-loaded")},700)})}))}function ri(){(0<T("#to-top").length&&1020<k.width()||0<T("#to-top").length&&0<T("#to-top.mobile-enabled").length)&&(350<te.scrollTop?k.on("scroll",li):k.on("scroll",oi))}function oi(){350<te.scrollTop&&!i.is(".fullscreen.open")&&(T("#to-top").stop().transition({bottom:"17px"},350,"easeInOutCubic"),k.off("scroll",oi),k.on("scroll",li))}function li(){var e;(te.scrollTop<350||i.is(".fullscreen.open"))&&(e=0<T("#slide-out-widget-area.fullscreen.open").length?1150:350,T("#to-top").stop().transition({bottom:"-30px"},e,"easeInOutQuint"),k.off("scroll",li),k.on("scroll",oi))}function di(){var e;0==T(".nectar-social.fixed").length&&ri(),0<T('body[data-button-style*="rounded"]').length&&((e=T("#to-top .fa-angle-up").clone()).addClass("top-icon"),T("#to-top").prepend(e)),E.on("click",'#to-top, a[href="#top"]',function(){return T("body,html").stop().animate({scrollTop:0},800,"easeOutQuad",function(){0<T(".nectar-box-roll").length&&E.trigger("mousewheel",[1,0,0])}),!1})}function ci(){var e=0<T('body[data-header-format="left-header"]').length&&1e3<k.width()?0:c.outerHeight();(0<T(".page-template-template-no-header-footer").length||0<T(".page-template-template-no-header").length)&&(e=0),T('header#top .sf-menu li a[href="#"]').on("click",function(e){e.preventDefault()}),0==T("#nectar_fullscreen_rows").length||0==K.$usingFullScreenRows?T("a.nectar-next-section").each(function(){var e,t,t;0<T(this).parents(".wpb_row:not(.inner_row)").length&&(e=T(this).parents(".wpb_row:not(.inner_row)"),t=T(this).parents(".wpb_row:not(.inner_row)").index(),0<e.parent().find("> .wpb_row[id]:eq("+(t+1)+")").length&&(t=e.parent().find("> .wpb_row:eq("+(t+1)+")").attr("id"),T(this).attr("href","#"+t)))}):T().fullpage&&T("a.nectar-next-section").on("click",function(){return T.fn.fullpage.moveSectionDown(),!1}),0<T("#slide-out-widget-area .off-canvas-menu-container").length&&T("#slide-out-widget-area .off-canvas-menu-container").find("a[href*='"+location.pathname+"']").each(function(){var e=T(this).attr("href");"#"!=e&&-1!=e.indexOf("#")&&"#"!==e.substr(e.indexOf("#"))&&0<T("div"+e.substr(e.indexOf("#"))).length&&(T(this).attr("href",e.substr(e.indexOf("#"))),T(this).parent().removeClass("current_page_item").removeClass("current-menu-item")),0<T('div[data-fullscreen-anchor-id="'+e.substr(e.indexOf("#")+1)+'"]').length&&T(this).parent().removeClass("current_page_item").removeClass("current-menu-item")}),T("#header-outer").find("a[href*='"+location.pathname+"']").each(function(){var e=T(this).attr("href");-1!=e.indexOf("#")&&"#"!==e.substr(e.indexOf("#"))&&0<T("div"+e.substr(e.indexOf("#"))).length&&(T(this).attr("href",e.substr(e.indexOf("#"))),T(this).parent().removeClass("current_page_item").removeClass("current-menu-item")),0<T('div[data-fullscreen-anchor-id="'+e.substr(e.indexOf("#")+1)+'"]').length&&T(this).parent().removeClass("current_page_item").removeClass("current-menu-item")});var t=0==T('.page-submenu[data-sticky="true"]').length?"#header-outer nav":".page-submenu";E.scrollspy({target:t,offset:e+te.adminBarHeight+40})}function hi(){var e=I.location.hash,t=(e=e&&0<e.length?e.replace(/<|>/g,""):e)&&0<e.length?e.substring(1,e.length):0,s=2*parseInt(c.attr("data-padding")),a=0,r,o,t;t&&(a=(a=t.split("/")).length),t&&1<a&&(t=t.replace(/\//g,""),e=e.replace(/\//g,"")),(e&&0<T(".main-content").find(e).length||e&&0<T(".main-content").find('[data-fullscreen-anchor-id="'+t+'"]').length)&&(r=0<T(".main-content").find(e).length?T(".main-content").find(e):T(".main-content").find('[data-fullscreen-anchor-id="'+t+'"]'),o=0<T('body[data-header-format="left-header"]').length&&1e3<k.width()?0:T("#header-space").outerHeight(),(0<T(".page-template-template-no-header-footer").length||0<T(".page-template-template-no-header").length)&&(o=0),(t=0)<T(".nectar-box-roll").length&&0<T(".container-wrap.bottomBoxOut").length&&(J.boxRoll(null,-1),t=2050),setTimeout(function(){var e,t,a,n,i,e;0==T('body[data-permanent-transparent="1"]').length?E.hasClass("mobile")?e=0<T('#header-outer[data-mobile-fixed="1"]').length?r.offset().top+2-o+te.adminBarHeight:r.offset().top-te.adminBarHeight+1:(t=0<T('#header-outer[data-header-resize="0"]').length?0:parseInt(f)+2*s,0<T('#header-outer[data-remove-fixed="1"]').length&&(o=0),e=r.offset().top-parseInt(o)+t+3-te.adminBarHeight,0==T("body.mobile").length&&0<T('#header-outer[data-condense="true"]').length&&(a=T('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_9'),i=c.height()-(parseInt(a.height())+parseInt(T("#header-outer #logo").css("margin-top"))),e=r.offset().top-parseInt(o)+i-te.adminBarHeight)):e=r.offset().top-te.adminBarHeight+1,0<T('body[data-hhun="1"]').length&&0==T('#header-outer[data-remove-fixed="1"]').length&&0==T("#header-outer.detached").length&&(e+=o);var a=0<T('.page-submenu[data-sticky="true"]').length?T(".page-submenu").height():0,i,i=0<T("body.material").length&&0<h.length&&0==T('body[data-hhun="1"]').length&&0==T('#header-outer[data-remove-fixed="1"]').length&&!E.hasClass("mobile")?h.height():0;qe(e-a+i,700,"easeInOutQuint")},t))}function ui(){0<T('body[data-animated-anchors="true"]').length&&(0==T(".nectar-box-roll").length&&0==T("#nectar_fullscreen_rows").length&&(void 0!==Ne.tab?setTimeout(function(){hi()},800):hi()),0<T('#nectar_fullscreen_rows[data-mobile-disable="on"]').length&&0==T(".nectar-box-roll").length&&te.usingMobileBrowser&&hi())}function pi(){var d,n;(0<T('body[data-animated-anchors="true"]').length||0<T('.single-product [data-gallery-style="left_thumb_sticky"]').length)&&(d=g-g/1.8,setTimeout(ci,200),E.on("click","#header-outer nav .sf-menu a, #footer-outer .nectar-button, #footer-outer .widget_nav_menu a, #mobile-menu li a, .nectar-scrolling-tabs .scrolling-tab-nav a, .container-wrap a:not(.wpb_tabs_nav a):not(.um-woo-view-order):not(.magnific):not([data-fancybox]):not(.woocommerce-tabs .tabs a):not(.slider-prev):not(.slider-next):not(.testimonial-next-prev a), .swiper-slide .button a, #slide-out-widget-area a, #slide-out-widget-area .inner div a",function(e){var s=T(this).prop("hash");T(this).hasClass("nectar-next-section")||"1"!=y||E.addClass("animated-scrolling"),clearTimeout(n),n=setTimeout(function(){E.removeClass("animated-scrolling")},850);var r=0<T('body[data-header-format="left-header"]').length&&1e3<k.width()?0:T("#header-space").outerHeight(),t,o,a,l;(0<T(".page-template-template-no-header-footer").length||0<T(".page-template-template-no-header").length)&&(r=0),(s&&0<E.find(s).length&&"#top"!=s&&""!=s&&-1!==T(this).attr("href").indexOf(I.location.href.split("#")[0])||T(this).is('[href^="#"]')&&""!=s&&0<E.find(s).length&&"#top"!=s)&&(T(this).hasClass("skip-hash")||(history.pushState?history.pushState(null,null,s):location.hash=s),0<T(this).parents("ul").length&&T(this).parents("ul").find("li").removeClass("current-menu-item"),0<T(this).parents("#slide-out-widget-area").length&&(0<T('body.material[data-slide-out-widget-area-style="slide-out-from-right"].material-ocm-open').length?(T("body > .slide_out_area_close").addClass("non-human-allowed").trigger("click"),t=T(this),setTimeout(function(){t.trigger("click")},1e3)):T("#slide-out-widget-area .slide_out_area_close").addClass("non-human-allowed").trigger("click"),setTimeout(function(){(0<T('body.material[data-slide-out-widget-area-style="slide-out-from-right"]').length?T("body > .slide_out_area_close"):T("#slide-out-widget-area .slide_out_area_close")).removeClass("non-human-allowed")},100)),0<T(this).parents("#mobile-menu").length&&(T(".slide-out-widget-area-toggle.mobile-icon a").addClass("non-human-allowed").trigger("click"),setTimeout(function(){T(".slide-out-widget-area-toggle.mobile-icon a").removeClass("non-human-allowed")},100)),o=0<T(this).parents("#mobile-menu").length?T(this).parents("#mobile-menu").height():null,a=1,l=T(this),0<T(".nectar-box-roll").length&&0<T(".container-wrap.bottomBoxOut").length&&(J.boxRoll(null,-1),a=2050),setTimeout(function(){var e,t,a,n,i,e;0==T('body[data-permanent-transparent="1"]').length?E.hasClass("mobile")?e=0<T('#header-outer[data-mobile-fixed="1"]').length?T(s).offset().top+2-r+te.adminBarHeight:T(s).offset().top-o-te.adminBarHeight+1:(t=0<T('#header-outer[data-header-resize="0"]').length?0:parseInt(f)+2*d,0<T('#header-outer[data-remove-fixed="1"]').length&&(r=0),e=T(s).offset().top-o-parseInt(r)+t+3-te.adminBarHeight,0==T("body.mobile").length&&0<T('#header-outer[data-condense="true"]').length&&(a=T('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_9'),i=c.height()-(parseInt(a.height())+parseInt(T("#header-outer #logo").css("margin-top"))),e=T(s).offset().top-parseInt(r)+i-te.adminBarHeight)):e=T(s).offset().top-te.adminBarHeight+1,0<T('body[data-hhun="1"]').length&&0==T('#header-outer[data-remove-fixed="1"]').length&&((0==T("#header-outer.detached").length||0<l.parents('.page-submenu[data-sticky="true"]').length)&&(e+=r),0<l.parents('.page-submenu[data-sticky="true"]').length&&(T("#header-outer.detached").addClass("invisible"),T(".page-submenu").addClass("header-not-visible").css("transform","translateY(0px)")));var a=0<l.parents('.page-submenu[data-sticky="true"]').length?l.parents(".page-submenu").height():0,i,i=0<T("body.material").length&&0<h.length&&0==T('body[data-hhun="1"]').length&&0==T('#header-outer[data-remove-fixed="1"]').length&&!E.hasClass("mobile")||0<T('body[data-hhun="1"]').length&&0<h.length&&!E.hasClass("mobile")&&0==T('#header-outer[data-remove-fixed="1"]').length?h.height():0;qe(e-a+i,700,"easeInOutQuint")},a),e.preventDefault()),"#top"==s&&0<T(this).parents("#slide-out-widget-area").length&&T("#slide-out-widget-area .slide_out_area_close").trigger("click")}))}function gi(){var e=T("#search-results"),t=e.is('[data-layout="masonry-no-sidebar"]')?4:3;e.imagesLoaded(function(){e.isotope({itemSelector:".result",layoutMode:"packery",packery:{columnWidth:T("#search-results").width()/t}}),e.find("article").css("opacity","1")}),k.on("resize",function(){e.isotope({layoutMode:"packery",packery:{columnWidth:T("#search-results").width()/t}})})}function fi(){0<T("body.search-results").length&&0<T("#search-results article").length&&0==T('#search-results[data-layout="list-no-sidebar"]').length&&gi()}function mi(){var a;(0<T(".portfolio-items .col .style-3-alt").length||0<T(".portfolio-items .col .style-3").length||0<T(".portfolio-items .col .style-2").length||0<T(".portfolio-items .col .style-5").length)&&(a="",T(".portfolio-items .col").each(function(){var e=T(this).attr("data-title-color"),t=T(this).attr("data-subtitle-color");0<e.length&&(a+='.col[data-title-color="'+e+'"] .vert-center h3, .portfolio-items[data-ps="6"] .col[data-title-color="'+e+'"] .work-meta h4 { color: '+e+"!important; } ",a+=' .portfolio-items[data-ps="8"] .col[data-title-color="'+e+'"] .line { background-color: '+e+"; }",a+='.portfolio-items[data-ps="8"] .col[data-title-color="'+e+'"] .next-arrow line { stroke: '+e+"; } "),0<t.length&&(a+='.col[data-subtitle-color="'+t+'"] .vert-center p, .portfolio-items[data-ps="6"] .col[data-title-color="'+e+'"] .work-meta p { color: '+t+"!important; } ")}),Qe(a,"nectar-portfolio-colors"))}function bi(){E.on("mouseover",'.post-area.featured_img_left .grav-wrap .text a, .masonry.material .masonry-blog-item .grav-wrap .text a, .blog-recent[data-style="material"] .grav-wrap .text a',function(){T(this).parents(".grav-wrap").find("img").addClass("hovered")}),E.on("mouseleave",'.post-area.featured_img_left .grav-wrap .text a, .masonry.material .masonry-blog-item .grav-wrap .text a, .blog-recent[data-style="material"] .grav-wrap .text a',function(){T(this).parents(".grav-wrap").find("img").removeClass("hovered")}),E.on("mouseleave",'.container-wrap[data-nav-pos="after_project_2"] #portfolio-nav ul li, .blog_next_prev_buttons[data-style="fullwidth_next_prev"] ul li',function(){T(this).addClass("mouse-leaving")})}function vi(){H=[],T(".portfolio-items:not(.carousel)").each(function(e){T(this).attr("instance",e),T(this).parent().parent().find("div[class^=portfolio-filters]").attr("instance",e),"undefined"!=typeof SalientPortfolio&&(H[e]=new SalientPortfolio(T(this),Wt))})}function wi(){690<te.winW&&T('.posts-container[data-load-animation="perspective"]').css("perspective-origin","50% "+(te.scrollTop+te.winH)+"px"),requestAnimationFrame(wi)}function yi(){0<T('.posts-container[data-load-animation="perspective"]').length&&requestAnimationFrame(wi)}function _i(e){"none"==e.attr("data-load-animation")?e.find(".inner-wrap").removeClass("animated"):e.find("article").each(function(e){var t,a;T(this).visible(!0)?T(this).delay(110*e).queue(function(e){T(this).addClass("animated-in"),e()}):(t=T(this),a=new Waypoint({element:t,handler:function(){setTimeout(function(){t.addClass("animated-in")},80*t.attr("data-delay-amount")),a.destroy()},offset:"90%"}))})}function Ci(){L=[],T(".posts-container").each(function(e){T(this).parent().hasClass("masonry")&&!T(this).parent().hasClass("auto_meta_overlaid_spaced")?"undefined"!=typeof NectarMasonryBlog&&(L[e]=new NectarMasonryBlog(T(this),zt,_i)):_i(T(this))})}function xi(){!T().theiaStickySidebar||te.usingMobileBrowser&&te.winW<1e3||T('#sidebar[data-nectar-ss="true"], #sidebar[data-nectar-ss="1"], .nectar-scrolling-tabs .scrolling-tab-nav').each(function(){var e=50,t,t,e;0<T('#header-outer[data-remove-fixed="0"]').length&&0==T('body[data-hhun="1"]').length&&0==T('#header-outer[data-format="left-header"]').length&&(e+=c.outerHeight(),0<T('#header-outer[data-shrink-num][data-header-resize="1"]').length&&(t=parseInt(c.attr("data-padding"))-parseInt(c.attr("data-padding"))/1.8,e-=f,e-=t),0==T("body.mobile").length&&0<T('#header-outer[data-condense="true"]').length&&(t=T('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_9'),e=50,e+=c.height()-(parseInt(t.position().top)-parseInt(T("#header-outer #logo").css("margin-top")))-parseInt(te.secondaryHeaderHeight))),0<o.length&&(e+=o.outerHeight()),0<T(this).parents(".wpb_widgetised_column").length?0<T("body.vc_editor").length||T(this).parents(".wpb_column").theiaStickySidebar({additionalMarginTop:e,updateSidebarHeight:!1}):T(this).theiaStickySidebar({additionalMarginTop:e,updateSidebarHeight:!1})})}function ki(){var l=g-g/1.8;E.on("click",".section-down-arrow, .scroll-down-wrap > .minimal-arrow",function(){if(0<T(this).parents(".nectar-box-roll").length)return!1;var e=T(this).parents("#page-header-bg"),t=e.height(),a=0==e.parents(".first-section").length||0<T('body[data-transparent-header="false"]').length?e.offset().top:0,n=0<d.length&&1e3<k.width()?d.height():0,i=0<T('body[data-header-format="left-header"]').length?0:T("#header-space").height(),s=0,r,r,o,r,i;return 0<T("body.material").length&&0<h.length&&(s=h.height()),0==T('body[data-permanent-transparent="1"]').length?E.hasClass("mobile")?(r=0<T('#header-outer[data-mobile-fixed="1"]').length?parseInt(t)-i+parseInt(e.offset().top)+2:parseInt(t)+parseInt(e.offset().top)+2,T("body,html").stop().animate({scrollTop:r-2*n},1e3,"easeInOutCubic")):0<T('body[data-hhun="1"]').length&&0==T('#header-outer[data-remove-fixed="1"]').length?T("body,html").stop().animate({scrollTop:parseInt(t)+a+2-2*n},1e3,"easeInOutCubic"):(o=0<T('#header-outer[data-header-resize="0"]').length?0:parseInt(f)+2*l,0<T('#header-outer[data-remove-fixed="1"]').length&&(a=i=0),0==T("body.mobile").length&&0<T('#header-outer[data-condense="true"]').length&&(r=T('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_9'),i=c.height()-(parseInt(r.position().top)-parseInt(T("#header-outer #logo").css("margin-top")))-parseInt(te.secondaryHeaderHeight)),T("body,html").stop().animate({scrollTop:parseInt(t-i)+o+3+a+s},1e3,"easeInOutCubic")):T("body,html").stop().animate({scrollTop:parseInt(t)+parseInt(e.offset().top)+2-2*n},1e3,"easeInOutCubic"),!1})}function Ti(){T(".nectar-liquid-bg").removeClass("animated-in");for(var e=0;e<B.length;e++)"displace-filter-fade"==B[e].animationType&&0<T(B[e].canvasContainer).parents(".fp-section.active").length&&(0==T(B[e].canvasContainer).find(".image-added-to-stage").length&&B[e].imgContainer.addChild(B[e].bg),T(B[e].canvasContainer).find(".nectar-liquid-bg").addClass("image-added-to-stage"),B[e].animateProps(B[e]))}function Ii(){var e;0<T("#nectar_fullscreen_rows").length&&T().fullpage&&(Z=I.vc_iframe?".vc_element.vc_vc_row.active ":".wpb_row.active ",e=0<T("#nectar_fullscreen_rows[data-mobile-disable]").length?T("#nectar_fullscreen_rows").attr("data-mobile-disable"):"off","on"!=(e=!te.usingMobileBrowser?"off":e)?U=!0:Z="",K=new NectarFullScreenRows(hn,P,Ti,te,Kt,R,A))}function zi(){var e,t;te.usingMobileBrowser&&E.addClass("using-mobile-browser"),0<I.navigator.userAgent.indexOf("Edge/")&&E.addClass("msie"),0==T("html.js").length&&T("html").removeClass("no-js").addClass("js"),T("code").find("br").remove(),T(".wpcf7-form p:has(input[type=submit])").css("padding-bottom","0px"),T(".full-width-content .wpcf7-submit").on("click",function(){setTimeout(function(){Wt()},1e3),setTimeout(function(){Wt()},2e3)}),T(".gform_body").on("click",function(){setTimeout(function(){Wt()},200)}),T(".pum.pum-theme-salient-page-builder-optimized button.pum-close").wrapInner("<span />"),0<T("#nectar_fullscreen_rows").length&&0<T(".pum-container .pum-content > .wpb_row .full-page-inner > .container > .span_12").length&&T(".pum-container .pum-content > .wpb_row .full-page-inner > .container > .span_12").unwrap(),0<T(".single .blog_next_prev_buttons").length&&T(".container-wrap").css("padding-bottom",0),T(".full-width-section").each(function(){T(this).find("> .span_12 > div.col_last").last().css("margin-bottom","0")}),T(".full-width-content .col.boxed").removeClass("boxed"),T(".wpb_column.neg-marg").parents(".wpb_row").css("z-index","110")}function Ei(){T(".wpb_row").each(function(){void 0!==T(this).find(".span_12").offset()&&T(this).find('[class*="vc_col-"]').each(function(){var e=T(this).parents(".span_12").offset().left;T(this).removeClass("no-left-margin"),T(this).offset().left<e+27?T(this).addClass("no-left-margin"):T(this).removeClass("no-left-margin")})})}function Hi(){var e=te.winW,t=te.winH,a=0;E.is('[data-flex-cols="true"]')||0<T('[class*="vc_col-xs-"], [class*="vc_col-md-"], [class*="vc_col-lg-"]').length&&(Ei(),te.usingMobileBrowser?(I.addEventListener("orientationchange",function(){a=1}),k.on("resize",function(){(k.width()!=e&&k.height!=t||1===a)&&(Ei(),e=te.winW,t=te.winH,a=0)})):k.on("resize",Ei))}function Ai(){T("select:not(.state_select):not(.country_select):not(.comment-form-rating #rating):not(#tribe-bar-form select):not(.woocommerce-currency-switcher)").each(function(){var e=690<te.winW?7:200;(T(this).hasClass("skip-select2-search")||0<T(this).parents(".skip-select2-search").length)&&(e=1e3),0==T(this).parents("#buddypress").length&&(0==T(this).parents(".woocommerce-ordering").length?T(this).select2({minimumResultsForSearch:e,width:"100%"}):T(this).select2({minimumResultsForSearch:e,dropdownAutoWidth:!0}))})}function Mi(){0<T('body[data-fancy-form-rcs="1"]').length&&(T("select:not(.comment-form-rating #rating)").each(function(){var e;0<T(this).parents(".wpcf7-form-control-wrap").length?1==(e=0<T(this).parents(".wpcf7-form-control-wrap").find(".select2-container").length?T(T(this).prev(".select2-container")):T(this)).parents(".wpcf7-form-control-wrap").parent().find("label").length?e.parents(".wpcf7-form-control-wrap").parent().wrapInner('<div class="fancy-select-wrap" />'):e.wrap('<div class="fancy-select-wrap" />'):(e=0<T(this).prev(".select2-container").length?T(this).prev(".select2-container"):T(this),0==T(this).parents("#buddypress").length&&0==T(this).parents(".widget_categories").length&&(1==e.prev("label").length?e.prev("label").andSelf().wrapAll('<div class="fancy-select-wrap" />'):1==e.next("label").length?e.next("label").andSelf().wrapAll('<div class="fancy-select-wrap" />'):e.wrap('<div class="fancy-select-wrap" />')))}),Ai())}function Oi(){(-1!=navigator.userAgent.indexOf("Safari")&&-1==navigator.userAgent.indexOf("Chrome")||navigator.userAgent.match(/(iPod|iPhone|iPad)/))&&(I.onpageshow=function(e){e.persisted&&(T(".nectar-video-wrap, .nectar-slider-wrap .swiper-slide .video-wrap").each(function(){0<T(this).find("video").length&&T(this).find("video")[0].play()}),0<T("body.material-ocm-open").length?(T("body > .slide_out_area_close").addClass("non-human-allowed").trigger("click"),setTimeout(function(){T("body > .slide_out_area_close").removeClass("non-human-allowed")},100)):0<T("#slide-out-widget-area.slide-out-from-right-hover.open").length&&navigator.userAgent.match(/(iPod|iPhone|iPad)/)?ja():(0<T("#slide-out-widget-area.fullscreen.open").length||0<T("#slide-out-widget-area.fullscreen-alt.open").length||0<T("#slide-out-widget-area.slide-out-from-right.open").length)&&(T("#slide-out-widget-area .slide_out_area_close").addClass("non-human-allowed"),T(".slide-out-widget-area-toggle:not(.std-menu) a.open").addClass("non-human-allowed").trigger("click"),setTimeout(function(){T("#slide-out-widget-area .slide_out_area_close").removeClass("non-human-allowed")},100)))})}function Si(){T(".wpb_row").removeClass("only-ns"),T('.nectar-slider-wrap[data-full-width="true"], .page-submenu, .portfolio-items[data-col-num="elastic"]:not(.fullwidth-constrained), .blog-fullwidth-wrap').parents(".wpb_row").addClass("only-ns"),T("body.vc_editor.compose-mode .wpb_row .vc_vc_column > .wpb_column > .vc_column-inner").each(function(){0<T(this).find("> .vc_element-container > div").length&&(T(this).find("> .vc_element-container > div:first-child").is(".vc_vc_row_inner")?T(this).find("> .vc_element-container > div:first-child").addClass("first-inner-row-el"):T(this).find("> .vc_element-container > div:first-child").removeClass("first-inner-row-el"))})}function Fi(){T('.vc_element > .wpb_column[class*="padding-"][class*="-percent"]').each(function(){var e=4,t=this.className.match(/padding-\d+/),t;(e=t?(e=t[0].match(/\d+/))?e[0]/100:0:e)&&(t=T(this).parents(".span_12").width(),T(this).is('[data-padding-pos="all"]')?T(this).css("padding",t*e):T(this).is('[data-padding-pos="top"]')?T(this).css("padding-top",t*e):T(this).is('[data-padding-pos="bottom"]')?T(this).css("padding-bottom",t*e):T(this).is('[data-padding-pos="left"]')?T(this).css("padding-left",t*e):T(this).is('[data-padding-pos="right"]')?T(this).css("padding-right",t*e):T(this).is('[data-padding-pos="top-bottom"]')?T(this).css({"padding-top":t*e,"padding-bottom":t*e}):T(this).is('[data-padding-pos="top-right"]')?T(this).css({"padding-top":t*e,"padding-right":t*e}):T(this).is('[data-padding-pos="bottom-right"]')?T(this).css({"padding-right":t*e,"padding-bottom":t*e}):T(this).is('[data-padding-pos="bottom-left"]')?T(this).css({"padding-left":t*e,"padding-bottom":t*e}):T(this).is('[data-padding-pos="left-right"]')&&T(this).css({"padding-left":t*e,"padding-right":t*e}))}),T('.wpb_row[class*="vc_custom_"]').each(function(){T(this).parent().addClass("no-bottom-margin")})}function $i(){setTimeout(function(){0<T("body.compose-mode").length&&T(".container-wrap").addClass("visible-editor-controls"),te.usingFrontEndEditor&&(Si(),E.is('[data-flex-cols="true"]')||(Fi(),k.smartresize(Fi)))},200),k.on("vc_reload",function(){if(Si(),bt(),ut(),he(),Mt(),ie(),lt(),Yt(),xt(),Jn(),va(),Te(),sa(),Xn(),ei(),qt(),aa(),0<T(".carousel").length&&(me(),xe(),Ce()),0<T(".owl-carousel").length&&(T(".owl-carousel").each(function(){T(this).trigger("destroy.owl.carousel").removeClass("owl-loaded"),T(this).find(".owl-stage-outer .owl-stage > *").unwrap(),T(this).find(".owl-stage-outer > *").unwrap(),T(this).find(".owl-item > *").unwrap(),T(this).find(".owl-dots").remove(),T(this).find(".owl-nav").remove()}),ve()),0<T(".nectar_cascading_images").length&&imagesLoaded(T(".nectar_cascading_images"),function(){Nt()}),zt(),Ot(),Un(),$t(),0<O.length)for(var e=0;e<O.length;e++)O[e].reloadCells(),O[e].off("scroll.flickity"),O[e].off("dragStart.flickity"),O[e].off("dragEnd.flickity");if(oe(),setTimeout(function(){if(le(),0<O.length)for(var e=0;e<O.length;e++)O[e].reloadCells(),O[e].resize()},100),0<Y.length)for(var e=0;e<Y.length;e++)Y[e].flickity("reloadCells"),Y[e].off("scroll.flickity"),Y[e].off("dragStart.flickity"),Y[e].off("dragEnd.flickity");setTimeout(function(){if(0<T(".nectar-woo-flickity").length&&_e(),0<Y.length)for(var e=0;e<Y.length;e++)Y[e].flickity("reloadCells"),Y[e].flickity("resize")},100),ha();for(var e=0,t;e<q.length;e++)"multiple_visible"!=q[e].type&&"multiple_visible_minimal"!=q[e].type||(q[e].flickityEl.flickity("reloadCells"),q[e].flickityEl.off("select.flickity"),ha(),q[e].flickityEl.resize()),q[e].testimonialSliderHeight();if(ua(),ca(),ba(),Ge(),ea(),pt(),cn(),dn(),wa(),ya(),Wt(),setTimeout(Wt,1e3),xa(),Yn(),k.off("scroll.parallaxSections").off("resize.parallaxSections"),Ht(),Ci(),vi(),0<H.length)for(var e=0;e<H.length;e++)H[e].portfolioAccentColor();Gn(),ni(),setTimeout(function(){if(0<T(".nectar_fullscreen_zoom_recent_projects").length&&0<j.length)for(var e=0;e<j.length;e++)j[e].sliderCalcs()},300),k.unbind(".infscr"),si(),jt(),T(".nectar-video-wrap").each(function(){0<T(this).find("video").length&&T(this).find("video").css("visibility","visible")}),T(".wpb_column[data-t-w-inherits]").each(function(){T(this).is('[data-t-w-inherits="small_desktop"]')?T(this).parent().addClass("inherits-s-desktop-col"):T(this).parent().removeClass("inherits-s-desktop-col")}),0<T("#nectar_fullscreen_rows").length?(0==T("#nectar_fullscreen_rows > .vc_element").length&&T("#nectar_fullscreen_rows").prepend('<div class="vc_element empty_placeholder" />'),0<T("#nectar_fullscreen_rows > .vc_element:not(.empty_placeholder)").length&&T("#nectar_fullscreen_rows >.vc_element.empty_placeholder").remove(),T.fn.fullpage.destroy("all"),Ii(),t=[{el:"",offset:0}],T("#nectar_fullscreen_rows > div.vc_element").each(function(e){t[e]={el:T(this),offset:T(this).offset().top}}),1===T("#nectar_fullscreen_rows > div.vc_element").length&&T("#nectar_fullscreen_rows").css({transform:"translate3d(0,0,0)"}),E.scrollTo(0,0)):0<T('body .main-content > .row > .vc_element:first > .wpb_row[class*="full-width-"]').length||0<T('body .main-content > .row > .vc_element:first .nectar-slider-wrap[data-full-width="true"]').length?T(".container-wrap").css({"padding-top":"0","margin-top":"0"}):T(".container-wrap").css({"padding-top":"40px"}),A=[],T(".svg-icon-holder").removeClass("animated-in").removeClass("bound"),0<T(".vc_nectar_gmap").length&&setTimeout(function(){"object"==typeof google&&"object"==typeof google.maps?I.mapAPI_Loaded():0<I.nectarLove.mapApiKey.length&&T.getScript("https://maps.google.com/maps/api/js?sensor=false&key="+I.nectarLove.mapApiKey+"&callback=mapAPI_Loaded")},100),xi(),void 0!==I.Waypoint&&(Waypoint.destroyAll(),hn())})}function Wi(){var e=!1,t;function a(){0<T('#ajax-loading-screen[data-effect*="horizontal_swipe"]').length?(r.removeClass("loaded"),r.addClass("in-from-right"),setTimeout(function(){r.addClass("loaded")},30)):(0<T('#ajax-loading-screen[data-effect="center_mask_reveal"]').length?r.css("opacity","0").css("display","block"):r.show()).transition({opacity:"1"},450)}0<T('body[data-ajax-transitions="true"]').length&&0<T('#ajax-loading-screen[data-disable-mobile="1"]').length&&te.winW<1e3&&(e=!0),0<T('body[data-ajax-transitions="true"]').length&&0<T('#ajax-loading-screen[data-method="standard"]').length&&0==e?(T("html").addClass("page-trans-loaded"),0<T('#ajax-loading-screen[data-effect="standard"]').length?(0==T(".nectar-particles").length&&(r.transition({opacity:0},500,function(){T(this).css({display:"none"})}),T("#ajax-loading-screen .loading-icon").transition({opacity:0},500)),0==T(".nectar-box-roll").length&&setTimeout(function(){hn()},550)):(0<T('#ajax-loading-screen[data-effect*="horizontal_swipe"]').length&&setTimeout(function(){r.addClass("loaded")},60),0==T('#page-header-wrap #page-header-bg[data-animate-in-effect="zoom-out"] .nectar-video-wrap').length&&setTimeout(function(){T("#ajax-loading-screen:not(.loaded)").addClass("loaded"),setTimeout(function(){r.addClass("hidden")},1e3)},150),0==T(".nectar-box-roll").length&&0<T('#ajax-loading-screen[data-effect*="horizontal_swipe"]').length?setTimeout(function(){hn()},750):0==T(".nectar-box-roll").length&&setTimeout(function(){hn()},350)),-1!=navigator.userAgent.indexOf("Safari")&&-1==navigator.userAgent.indexOf("Chrome")||navigator.userAgent.match(/(iPod|iPhone|iPad)/)?(I.onunload=function(){r.stop().transition({opacity:0},800,function(){T(this).css({display:"none"})}),T("#ajax-loading-screen .loading-icon").transition({opacity:0},600)},I.onpageshow=function(e){e.persisted&&(r.stop().transition({opacity:0},800,function(){T(this).css({display:"none"})}),T("#ajax-loading-screen .loading-icon").transition({opacity:0},600))}):-1!=navigator.userAgent.indexOf("Firefox")&&(I.onunload=function(){}),T(".portfolio-loading, .nectar-slider-loading .loading-icon").remove(),0==T('#ajax-loading-screen[data-disable-fade-on-click="1"]').length&&0==T('body.using-mobile-browser #ajax-loading-screen[data-method="standard"][data-disable-mobile="1"]').length&&(t=!1,T('a[href^="mailto"], a[href^="tel"], .woocommerce-order-downloads a[class*="downloads-file"]').on("click",function(){t=!0}),I.addEventListener("beforeunload",function(){t||(r.addClass("set-to-fade"),a()),t=!1}))):(1==e&&r.css({opacity:"0",display:"none"}).addClass("loaded").addClass("hidden"),0!=T(".nectar-box-roll").length||te.usingFrontEndEditor||setTimeout(function(){hn()},80))}T.fn.dlmenu=function(t){var a;return"string"==typeof t?(a=Array.prototype.slice.call(arguments,1),this.each(function(){var e=T.data(this,"menu");e?T.isFunction(e[t])&&"_"!==t.charAt(0)?e[t].apply(e,a):Ka("no such method '"+t+"' for menu instance"):Ka("cannot call methods on menu prior to initialization; attempted to call method '"+t+"'")})):this.each(function(){var e=T.data(this,"menu");e?e._init():e=T.data(this,"menu",new T.DLMenu(t,this))}),this},Kn.prototype.resizeEvent=function(){this.initialX=this.$el.width()/2,this.initialY=this.$el.height()/2},Kn.prototype.mouseEvents=function(){var t=this;t.$el.on("mouseenter",function(e){t.activeFollow=!0,t.elX=e.offsetX,t.elY=e.offsetY,t.lastScroll=0,clearTimeout(t.percentageTimeout),t.percentageTimeout=setTimeout(function(){t.percentage=.2},700)}),t.$el.on("mouseleave",function(){t.activeFollow=!1,t.lastScroll=0,clearTimeout(t.percentageTimeout),t.percentage=.13}),t.$el.on("mousemove",function(e){t.elX=e.offsetX,t.elY=e.offsetY,t.lastScroll=0}),T(I).on("scroll",function(){1==t.activeFollow&&0==t.lastScroll&&(t.lastScroll=te.scrollTop)})},Kn.prototype.rafLoop=function(){1==this.activeFollow?(this.scrollAdjust=0<this.lastScroll?te.scrollTop-this.lastScroll:0,this.lastY=$e(this.lastY,this.elY+this.scrollAdjust,this.percentage),this.lastX=$e(this.lastX,this.elX,this.percentage)):(this.lastY=$e(this.lastY,this.initialY,.13),this.lastX=$e(this.lastX,this.initialX,.13)),this.$iconEl.css({transform:"translateX("+this.lastX+"px) translateY("+this.lastY+"px)"}),requestAnimationFrame(this.rafLoop.bind(this))},jQuery(z).ready(function(e){te.init(),cn(),Ii(),aa(),ue(),fn(),bn(),wn(),yn(),Hn(),Mn(),un(),bt(),Hi(),zt(),Ot(),be(),It(),At(),Ht(),Mt(),$t(),Wt(),va(),Bn(),Yn(),Ge(),_a(),wa(),ya(),xa(),ka(),Ta(),Ia(),Oa(),Sa(),Ja(),Za(),sn(),Sn(),gn(),Mi(),si(),di(),pi(),yi(),ki(),zi(),Oi(),$i(),Wi(),k.off("smartresize.srInit"),k.on("smartresize.srInit",ae),k.off("resize.srInit"),k.on("resize.srInit",ne),k.on("load",function(){0==e(I).scrollTop()&&An(),e("video").css("visibility","visible"),ui(),Wt(),Mt(),Ca()})})}(window.jQuery,window,document);
!function(a){"undefined"==typeof a.fn.each2&&a.extend(a.fn,{each2:function(b){for(var c=a([0]),d=-1,e=this.length;++d<e&&(c.context=c[0]=this[d])&&b.call(c[0],d,c)!==!1;);return this}})}(jQuery),function(a,b){"use strict";function c(b){var c=a(document.createTextNode(""));b.before(c),c.before(b),c.remove()}function d(a){function b(a){return O[a]||a}return a.replace(/[^\u0000-\u007E]/g,b)}function e(a,b){for(var c=0,d=b.length;c<d;c+=1)if(g(a,b[c]))return c;return-1}function f(){var b=a(N);b.appendTo(document.body);var c={width:b.width()-b[0].clientWidth,height:b.height()-b[0].clientHeight};return b.remove(),c}function g(a,c){return a===c||a!==b&&c!==b&&(null!==a&&null!==c&&(a.constructor===String?a+""==c+"":c.constructor===String&&c+""==a+""))}function h(a,b,c){var d,e,f;if(null===a||a.length<1)return[];for(d=a.split(b),e=0,f=d.length;e<f;e+=1)d[e]=c(d[e]);return d}function i(a){return a.outerWidth(!1)-a.width()}function j(c){var d="keyup-change-value";c.on("keydown",function(){a.data(c,d)===b&&a.data(c,d,c.val())}),c.on("keyup",function(){var e=a.data(c,d);e!==b&&c.val()!==e&&(a.removeData(c,d),c.trigger("keyup-change"))})}function k(c){c.on("mousemove",function(c){var d=L;d!==b&&d.x===c.pageX&&d.y===c.pageY||a(c.target).trigger("mousemove-filtered",c)})}function l(a,c,d){d=d||b;var e;return function(){var b=arguments;window.clearTimeout(e),e=window.setTimeout(function(){c.apply(d,b)},a)}}function m(a,b){var c=l(a,function(a){b.trigger("scroll-debounced",a)});b.on("scroll",function(a){e(a.target,b.get())>=0&&c(a)})}function n(a){a[0]!==document.activeElement&&window.setTimeout(function(){var b,c=a[0],d=a.val().length;a.focus();var e=c.offsetWidth>0||c.offsetHeight>0;e&&c===document.activeElement&&(c.setSelectionRange?c.setSelectionRange(d,d):c.createTextRange&&(b=c.createTextRange(),b.collapse(!1),b.select()))},0)}function o(b){b=a(b)[0];var c=0,d=0;if("selectionStart"in b)c=b.selectionStart,d=b.selectionEnd-c;else if("selection"in document){b.focus();var e=document.selection.createRange();d=document.selection.createRange().text.length,e.moveStart("character",-b.value.length),c=e.text.length-d}return{offset:c,length:d}}function p(a){a.preventDefault(),a.stopPropagation()}function q(a){a.preventDefault(),a.stopImmediatePropagation()}function r(b){if(!I){var c=b[0].currentStyle||window.getComputedStyle(b[0],null);I=a(document.createElement("div")).css({position:"absolute",left:"-10000px",top:"-10000px",display:"none",fontSize:c.fontSize,fontFamily:c.fontFamily,fontStyle:c.fontStyle,fontWeight:c.fontWeight,letterSpacing:c.letterSpacing,textTransform:c.textTransform,whiteSpace:"nowrap"}),I.attr("class","select2-sizer"),a(document.body).append(I)}return I.text(b.val()),I.width()}function s(b,c,d){var e,f,g=[];e=a.trim(b.attr("class")),e&&(e=""+e,a(e.split(/\s+/)).each2(function(){0===this.indexOf("select2-")&&g.push(this)})),e=a.trim(c.attr("class")),e&&(e=""+e,a(e.split(/\s+/)).each2(function(){0!==this.indexOf("select2-")&&(f=d(this),f&&g.push(f))})),b.attr("class",g.join(" "))}function t(a,b,c,e){var f=d(a.toUpperCase()).indexOf(d(b.toUpperCase())),g=b.length;return f<0?void c.push(e(a)):(c.push(e(a.substring(0,f))),c.push("<span class='select2-match'>"),c.push(e(a.substring(f,f+g))),c.push("</span>"),void c.push(e(a.substring(f+g,a.length))))}function u(a){var b={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return String(a).replace(/[&<>"'\/\\]/g,function(a){return b[a]})}function v(c){var d,e=null,f=c.quietMillis||100,g=c.url,h=this;return function(i){window.clearTimeout(d),d=window.setTimeout(function(){var d=c.data,f=g,j=c.transport||a.fn.select2.ajaxDefaults.transport,k={type:c.type||"GET",cache:c.cache||!1,jsonpCallback:c.jsonpCallback||b,dataType:c.dataType||"json"},l=a.extend({},a.fn.select2.ajaxDefaults.params,k);d=d?d.call(h,i.term,i.page,i.context):null,f="function"==typeof f?f.call(h,i.term,i.page,i.context):f,e&&"function"==typeof e.abort&&e.abort(),c.params&&(a.isFunction(c.params)?a.extend(l,c.params.call(h)):a.extend(l,c.params)),a.extend(l,{url:f,dataType:c.dataType,data:d,success:function(a){var b=c.results(a,i.page,i);i.callback(b)},error:function(a,b,c){var d={hasError:!0,jqXHR:a,textStatus:b,errorThrown:c};i.callback(d)}}),e=j.call(h,l)},f)}}function w(b){var c,d,e=b,f=function(a){return""+a.text};a.isArray(e)&&(d=e,e={results:d}),a.isFunction(e)===!1&&(d=e,e=function(){return d});var g=e();return g.text&&(f=g.text,a.isFunction(f)||(c=g.text,f=function(a){return a[c]})),function(b){var c,d=b.term,g={results:[]};return""===d?void b.callback(e()):(c=function(e,g){var h,i;if(e=e[0],e.children){h={};for(i in e)e.hasOwnProperty(i)&&(h[i]=e[i]);h.children=[],a(e.children).each2(function(a,b){c(b,h.children)}),(h.children.length||b.matcher(d,f(h),e))&&g.push(h)}else b.matcher(d,f(e),e)&&g.push(e)},a(e().results).each2(function(a,b){c(b,g.results)}),void b.callback(g))}}function x(c){var d=a.isFunction(c);return function(e){var f=e.term,g={results:[]},h=d?c(e):c;a.isArray(h)&&(a(h).each(function(){var a=this.text!==b,c=a?this.text:this;(""===f||e.matcher(f,c))&&g.results.push(a?this:{id:this,text:this})}),e.callback(g))}}function y(b,c){if(a.isFunction(b))return!0;if(!b)return!1;if("string"==typeof b)return!0;throw new Error(c+" must be a string, function, or falsy value")}function z(b,c){if(a.isFunction(b)){var d=Array.prototype.slice.call(arguments,2);return b.apply(c,d)}return b}function A(b){var c=0;return a.each(b,function(a,b){b.children?c+=A(b.children):c++}),c}function B(a,c,d,e){var f,h,i,j,k,l=a,m=!1;if(!e.createSearchChoice||!e.tokenSeparators||e.tokenSeparators.length<1)return b;for(;;){for(h=-1,i=0,j=e.tokenSeparators.length;i<j&&(k=e.tokenSeparators[i],h=a.indexOf(k),!(h>=0));i++);if(h<0)break;if(f=a.substring(0,h),a=a.substring(h+k.length),f.length>0&&(f=e.createSearchChoice.call(this,f,c),f!==b&&null!==f&&e.id(f)!==b&&null!==e.id(f))){for(m=!1,i=0,j=c.length;i<j;i++)if(g(e.id(f),e.id(c[i]))){m=!0;break}m||d(f)}}return l!==a?a:void 0}function C(){var b=this;a.each(arguments,function(a,c){b[c].remove(),b[c]=null})}function D(b,c){var d=function(){};return d.prototype=new b,d.prototype.constructor=d,d.prototype.parent=b.prototype,d.prototype=a.extend(d.prototype,c),d}if(window.Select2===b){var E,F,G,H,I,J,K,L={x:0,y:0},M={TAB:9,ENTER:13,ESC:27,SPACE:32,LEFT:37,UP:38,RIGHT:39,DOWN:40,SHIFT:16,CTRL:17,ALT:18,PAGE_UP:33,PAGE_DOWN:34,HOME:36,END:35,BACKSPACE:8,DELETE:46,isArrow:function(a){switch(a=a.which?a.which:a){case M.LEFT:case M.RIGHT:case M.UP:case M.DOWN:return!0}return!1},isControl:function(a){var b=a.which;switch(b){case M.SHIFT:case M.CTRL:case M.ALT:return!0}return!!a.metaKey},isFunctionKey:function(a){return a=a.which?a.which:a,a>=112&&a<=123}},N="<div class='select2-measure-scrollbar'></div>",O={"???":"A","???":"A","??":"A","??":"A","??":"A","???":"A","???":"A","???":"A","???":"A","??":"A","??":"A","??":"A","???":"A","???":"A","???":"A","???":"A","??":"A","??":"A","??":"A","??":"A","???":"A","??":"A","??":"A","??":"A","??":"A","??":"A","???":"A","???":"A","???":"A","???":"A","??":"A","??":"A","???":"A","???":"AA","??":"AE","??":"AE","??":"AE","???":"AO","???":"AU","???":"AV","???":"AV","???":"AY","???":"B","???":"B","???":"B","???":"B","???":"B","??":"B","??":"B","??":"B","???":"C","???":"C","??":"C","??":"C","??":"C","??":"C","??":"C","???":"C","??":"C","??":"C","???":"C","???":"D","???":"D","???":"D","??":"D","???":"D","???":"D","???":"D","???":"D","??":"D","??":"D","??":"D","??":"D","???":"D","??":"DZ","??":"DZ","??":"Dz","??":"Dz","???":"E","???":"E","??":"E","??":"E","??":"E","???":"E","???":"E","???":"E","???":"E","???":"E","??":"E","???":"E","???":"E","??":"E","??":"E","??":"E","???":"E","??":"E","??":"E","??":"E","???":"E","???":"E","??":"E","???":"E","??":"E","???":"E","???":"E","??":"E","??":"E","???":"F","???":"F","???":"F","??":"F","???":"F","???":"G","???":"G","??":"G","??":"G","???":"G","??":"G","??":"G","??":"G","??":"G","??":"G","??":"G","???":"G","???":"G","???":"G","???":"H","???":"H","??":"H","???":"H","???":"H","??":"H","???":"H","???":"H","???":"H","??":"H","???":"H","???":"H","???":"H","???":"I","???":"I","??":"I","??":"I","??":"I","??":"I","??":"I","??":"I","??":"I","??":"I","???":"I","???":"I","??":"I","??":"I","??":"I","???":"I","??":"I","???":"I","??":"I","???":"J","???":"J","??":"J","??":"J","???":"K","???":"K","???":"K","??":"K","???":"K","??":"K","???":"K","??":"K","???":"K","???":"K","???":"K","???":"K","???":"K","???":"L","???":"L","??":"L","??":"L","??":"L","???":"L","???":"L","??":"L","???":"L","???":"L","??":"L","??":"L","???":"L","???":"L","???":"L","???":"L","???":"L","??":"LJ","??":"Lj","???":"M","???":"M","???":"M","???":"M","???":"M","???":"M","??":"M","???":"N","???":"N","??":"N","??":"N","??":"N","???":"N","??":"N","???":"N","??":"N","???":"N","???":"N","??":"N","??":"N","???":"N","???":"N","??":"NJ","??":"Nj","???":"O","???":"O","??":"O","??":"O","??":"O","???":"O","???":"O","???":"O","???":"O","??":"O","???":"O","??":"O","???":"O","??":"O","???":"O","???":"O","??":"O","??":"O","??":"O","??":"O","??":"O","???":"O","??":"O","??":"O","??":"O","??":"O","??":"O","???":"O","???":"O","???":"O","???":"O","???":"O","???":"O","???":"O","??":"O","??":"O","??":"O","??":"O","??":"O","??":"O","???":"O","???":"O","??":"OI","???":"OO","??":"OU","???":"P","???":"P","???":"P","???":"P","??":"P","???":"P","???":"P","???":"P","???":"P","???":"Q","???":"Q","???":"Q","???":"Q","??":"Q","???":"R","???":"R","??":"R","???":"R","??":"R","??":"R","??":"R","???":"R","???":"R","??":"R","???":"R","??":"R","???":"R","???":"R","???":"R","???":"R","???":"S","???":"S","???":"S","??":"S","???":"S","??":"S","???":"S","??":"S","???":"S","???":"S","???":"S","??":"S","??":"S","???":"S","???":"S","???":"S","???":"T","???":"T","???":"T","??":"T","???":"T","??":"T","??":"T","???":"T","???":"T","??":"T","??":"T","??":"T","??":"T","???":"T","???":"TZ","???":"U","???":"U","??":"U","??":"U","??":"U","??":"U","???":"U","??":"U","???":"U","??":"U","??":"U","??":"U","??":"U","??":"U","??":"U","???":"U","??":"U","??":"U","??":"U","??":"U","??":"U","??":"U","???":"U","???":"U","???":"U","???":"U","???":"U","???":"U","???":"U","??":"U","???":"U","???":"U","??":"U","???":"V","???":"V","???":"V","???":"V","??":"V","???":"V","??":"V","???":"VY","???":"W","???":"W","???":"W","???":"W","??":"W","???":"W","???":"W","???":"W","???":"W","???":"X","???":"X","???":"X","???":"X","???":"Y","???":"Y","???":"Y","??":"Y","??":"Y","???":"Y","??":"Y","???":"Y","??":"Y","???":"Y","???":"Y","??":"Y","??":"Y","???":"Y","???":"Z","???":"Z","??":"Z","???":"Z","??":"Z","??":"Z","???":"Z","???":"Z","??":"Z","??":"Z","???":"Z","???":"Z","???":"Z","???":"a","???":"a","???":"a","??":"a","??":"a","??":"a","???":"a","???":"a","???":"a","???":"a","??":"a","??":"a","??":"a","???":"a","???":"a","???":"a","???":"a","??":"a","??":"a","??":"a","??":"a","???":"a","??":"a","??":"a","??":"a","??":"a","??":"a","???":"a","???":"a","???":"a","???":"a","??":"a","???":"a","??":"a","???":"aa","??":"ae","??":"ae","??":"ae","???":"ao","???":"au","???":"av","???":"av","???":"ay","???":"b","???":"b","???":"b","???":"b","???":"b","??":"b","??":"b","??":"b","???":"c","???":"c","??":"c","??":"c","??":"c","??":"c","??":"c","???":"c","??":"c","??":"c","???":"c","???":"c","???":"d","???":"d","???":"d","??":"d","???":"d","???":"d","???":"d","???":"d","??":"d","??":"d","??":"d","??":"d","???":"d","??":"dz","??":"dz","???":"e","???":"e","??":"e","??":"e","??":"e","???":"e","???":"e","???":"e","???":"e","???":"e","??":"e","???":"e","???":"e","??":"e","??":"e","??":"e","???":"e","??":"e","??":"e","??":"e","???":"e","???":"e","??":"e","???":"e","??":"e","???":"e","???":"e","??":"e","??":"e","??":"e","???":"f","???":"f","???":"f","??":"f","???":"f","???":"g","???":"g","??":"g","??":"g","???":"g","??":"g","??":"g","??":"g","??":"g","??":"g","??":"g","???":"g","???":"g","???":"g","???":"h","???":"h","??":"h","???":"h","???":"h","??":"h","???":"h","???":"h","???":"h","???":"h","??":"h","???":"h","???":"h","??":"h","??":"hv","???":"i","???":"i","??":"i","??":"i","??":"i","??":"i","??":"i","??":"i","??":"i","???":"i","???":"i","??":"i","??":"i","??":"i","???":"i","??":"i","???":"i","??":"i","??":"i","???":"j","???":"j","??":"j","??":"j","??":"j","???":"k","???":"k","???":"k","??":"k","???":"k","??":"k","???":"k","??":"k","???":"k","???":"k","???":"k","???":"k","???":"k","???":"l","???":"l","??":"l","??":"l","??":"l","???":"l","???":"l","??":"l","???":"l","???":"l","??":"l","??":"l","??":"l","??":"l","???":"l","???":"l","???":"l","???":"l","??":"lj","???":"m","???":"m","???":"m","???":"m","???":"m","??":"m","??":"m","???":"n","???":"n","??":"n","??":"n","??":"n","???":"n","??":"n","???":"n","??":"n","???":"n","???":"n","??":"n","??":"n","??":"n","???":"n","???":"n","??":"nj","???":"o","???":"o","??":"o","??":"o","??":"o","???":"o","???":"o","???":"o","???":"o","??":"o","???":"o","??":"o","???":"o","??":"o","???":"o","???":"o","??":"o","??":"o","??":"o","??":"o","??":"o","???":"o","??":"o","??":"o","??":"o","??":"o","??":"o","???":"o","???":"o","???":"o","???":"o","???":"o","???":"o","???":"o","??":"o","??":"o","??":"o","??":"o","??":"o","???":"o","???":"o","??":"o","??":"oi","??":"ou","???":"oo","???":"p","???":"p","???":"p","???":"p","??":"p","???":"p","???":"p","???":"p","???":"p","???":"q","???":"q","??":"q","???":"q","???":"q","???":"r","???":"r","??":"r","???":"r","??":"r","??":"r","??":"r","???":"r","???":"r","??":"r","???":"r","??":"r","??":"r","???":"r","???":"r","???":"r","???":"s","???":"s","??":"s","??":"s","???":"s","??":"s","???":"s","??":"s","???":"s","???":"s","???":"s","??":"s","??":"s","??":"s","???":"s","???":"s","???":"s","???":"t","???":"t","???":"t","???":"t","??":"t","???":"t","??":"t","??":"t","???":"t","???":"t","??":"t","??":"t","??":"t","???":"t","???":"t","???":"tz","???":"u","???":"u","??":"u","??":"u","??":"u","??":"u","???":"u","??":"u","???":"u","??":"u","??":"u","??":"u","??":"u","??":"u","??":"u","???":"u","??":"u","??":"u","??":"u","??":"u","??":"u","??":"u","???":"u","???":"u","???":"u","???":"u","???":"u","???":"u","???":"u","??":"u","???":"u","???":"u","??":"u","???":"v","???":"v","???":"v","???":"v","??":"v","???":"v","??":"v","???":"vy","???":"w","???":"w","???":"w","???":"w","??":"w","???":"w","???":"w","???":"w","???":"w","???":"w","???":"x","???":"x","???":"x","???":"x","???":"y","???":"y","???":"y","??":"y","??":"y","???":"y","??":"y","???":"y","??":"y","???":"y","???":"y","???":"y","??":"y","??":"y","???":"y","???":"z","???":"z","??":"z","???":"z","??":"z","??":"z","???":"z","???":"z","??":"z","??":"z","??":"z","???":"z","???":"z","??":"??","??":"??","??":"??","??":"??","??":"??","??":"??","??":"??","??":"??","??":"??","??":"??","??":"??","??":"??","??":"??","??":"??","??":"??","??":"??","??":"??","??":"??","??":"??","??":"??","??":"??"};J=a(document),H=function(){var a=1;return function(){return a++}}(),E=D(Object,{bind:function(a){var b=this;return function(){a.apply(b,arguments)}},init:function(c){var d,e,g=".select2-results";this.opts=c=this.prepareOpts(c),this.id=c.id,c.element.data("select2")!==b&&null!==c.element.data("select2")&&c.element.data("select2").destroy(),this.container=this.createContainer(),this.liveRegion=a(".select2-hidden-accessible"),0==this.liveRegion.length&&(this.liveRegion=a("<span>",{role:"status","aria-live":"polite"}).addClass("select2-hidden-accessible").appendTo(document.body)),this.containerId="s2id_"+(c.element.attr("id")||"autogen"+H()),this.containerEventName=this.containerId.replace(/([.])/g,"_").replace(/([;&,\-\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g,"\\$1"),this.container.attr("id",this.containerId),this.container.attr("title",c.element.attr("title")),this.body=a(document.body),s(this.container,this.opts.element,this.opts.adaptContainerCssClass),this.container.attr("style",c.element.attr("style")),this.container.css(z(c.containerCss,this.opts.element)),this.container.addClass(z(c.containerCssClass,this.opts.element)),this.elementTabIndex=this.opts.element.attr("tabindex"),this.opts.element.data("select2",this).attr("tabindex","-1").before(this.container).on("click.select2",p),this.container.data("select2",this),this.dropdown=this.container.find(".select2-drop"),s(this.dropdown,this.opts.element,this.opts.adaptDropdownCssClass),this.dropdown.addClass(z(c.dropdownCssClass,this.opts.element)),this.dropdown.data("select2",this),this.dropdown.on("click",p),this.results=d=this.container.find(g),this.search=e=this.container.find("input.select2-input"),this.queryCount=0,this.resultsPage=0,this.context=null,this.initContainer(),this.container.on("click",p),k(this.results),this.dropdown.on("mousemove-filtered",g,this.bind(this.highlightUnderEvent)),this.dropdown.on("touchstart touchmove touchend",g,this.bind(function(a){this._touchEvent=!0,this.highlightUnderEvent(a)})),this.dropdown.on("touchmove",g,this.bind(this.touchMoved)),this.dropdown.on("touchstart touchend",g,this.bind(this.clearTouchMoved)),this.dropdown.on("click",this.bind(function(a){this._touchEvent&&(this._touchEvent=!1,this.selectHighlighted())})),m(80,this.results),this.dropdown.on("scroll-debounced",g,this.bind(this.loadMoreIfNeeded)),a(this.container).on("change",".select2-input",function(a){a.stopPropagation()}),a(this.dropdown).on("change",".select2-input",function(a){a.stopPropagation()}),a.fn.mousewheel&&d.mousewheel(function(a,b,c,e){var f=d.scrollTop();e>0&&f-e<=0?(d.scrollTop(0),p(a)):e<0&&d.get(0).scrollHeight-d.scrollTop()+e<=d.height()&&(d.scrollTop(d.get(0).scrollHeight-d.height()),p(a))}),j(e),e.on("keyup-change input paste",this.bind(this.updateResults)),e.on("focus",function(){e.addClass("select2-focused")}),e.on("blur",function(){e.removeClass("select2-focused")}),this.dropdown.on("mouseup",g,this.bind(function(b){a(b.target).closest(".select2-result-selectable").length>0&&(this.highlightUnderEvent(b),this.selectHighlighted(b))})),this.dropdown.on("click mouseup mousedown touchstart touchend focusin",function(a){a.stopPropagation()}),this.lastSearchTerm=b,a.isFunction(this.opts.initSelection)&&(this.initSelection(),this.monitorSource()),null!==c.maximumInputLength&&this.search.attr("maxlength",c.maximumInputLength);var h=c.element.prop("disabled");h===b&&(h=!1),this.enable(!h);var i=c.element.prop("readonly");i===b&&(i=!1),this.readonly(i),K=K||f(),this.autofocus=c.element.prop("autofocus"),c.element.prop("autofocus",!1),this.autofocus&&this.focus(),this.search.attr("placeholder",c.searchInputPlaceholder)},destroy:function(){var a=this.opts.element,c=a.data("select2"),d=this;this.close(),a.length&&a[0].detachEvent&&d._sync&&a.each(function(){d._sync&&this.detachEvent("onpropertychange",d._sync)}),this.propertyObserver&&(this.propertyObserver.disconnect(),this.propertyObserver=null),this._sync=null,c!==b&&(c.container.remove(),c.liveRegion.remove(),c.dropdown.remove(),a.removeData("select2").off(".select2"),a.is("input[type='hidden']")?a.css("display",""):(a.show().prop("autofocus",this.autofocus||!1),this.elementTabIndex?a.attr({tabindex:this.elementTabIndex}):a.removeAttr("tabindex"),a.show())),C.call(this,"container","liveRegion","dropdown","results","search")},optionToData:function(a){return a.is("option")?{id:a.prop("value"),text:a.text(),element:a.get(),css:a.attr("class"),disabled:a.prop("disabled"),locked:g(a.attr("locked"),"locked")||g(a.data("locked"),!0)}:a.is("optgroup")?{text:a.attr("label"),children:[],element:a.get(),css:a.attr("class")}:void 0},prepareOpts:function(c){var d,e,f,i,j=this;if(d=c.element,"select"===d.get(0).tagName.toLowerCase()&&(this.select=e=c.element),e&&a.each(["id","multiple","ajax","query","createSearchChoice","initSelection","data","tags"],function(){if(this in c)throw new Error("Option '"+this+"' is not allowed for Select2 when attached to a <select> element.")}),c.debug=c.debug||a.fn.select2.defaults.debug,c.debug&&console&&console.warn&&(null!=c.id&&console.warn("Select2: The `id` option has been removed in Select2 4.0.0, consider renaming your `id` property or mapping the property before your data makes it to Select2. You can read more at https://select2.github.io/announcements-4.0.html#changed-id"),null!=c.text&&console.warn("Select2: The `text` option has been removed in Select2 4.0.0, consider renaming your `text` property or mapping the property before your data makes it to Select2. You can read more at https://select2.github.io/announcements-4.0.html#changed-id"),null!=c.sortResults&&console.warn("Select2: the `sortResults` option has been renamed to `sorter` in Select2 4.0.0. "),null!=c.selectOnBlur&&console.warn("Select2: The `selectOnBlur` option has been renamed to `selectOnClose` in Select2 4.0.0."),null!=c.ajax&&null!=c.ajax.results&&console.warn("Select2: The `ajax.results` option has been renamed to `ajax.processResults` in Select2 4.0.0."),null!=c.formatNoResults&&console.warn("Select2: The `formatNoResults` option has been renamed to `language.noResults` in Select2 4.0.0."),null!=c.formatSearching&&console.warn("Select2: The `formatSearching` option has been renamed to `language.searching` in Select2 4.0.0."),null!=c.formatInputTooShort&&console.warn("Select2: The `formatInputTooShort` option has been renamed to `language.inputTooShort` in Select2 4.0.0."),null!=c.formatInputTooLong&&console.warn("Select2: The `formatInputTooLong` option has been renamed to `language.inputTooLong` in Select2 4.0.0."),null!=c.formatLoading&&console.warn("Select2: The `formatLoading` option has been renamed to `language.loadingMore` in Select2 4.0.0."),null!=c.formatSelectionTooBig&&console.warn("Select2: The `formatSelectionTooBig` option has been renamed to `language.maximumSelected` in Select2 4.0.0."),c.element.data("select2Tags")&&console.warn("Select2: The `data-select2-tags` attribute has been renamed to `data-tags` in Select2 4.0.0.")),null!=c.element.data("tags")){var k=c.element.data("tags");a.isArray(k)||(k=[]),c.element.data("select2Tags",k)}if(null!=c.sorter&&(c.sortResults=c.sorter),null!=c.selectOnClose&&(c.selectOnBlur=c.selectOnClose),null!=c.ajax&&a.isFunction(c.ajax.processResults)&&(c.ajax.results=c.ajax.processResults),null!=c.language){var l=c.language;a.isFunction(l.noMatches)&&(c.formatNoMatches=l.noMatches),a.isFunction(l.searching)&&(c.formatSearching=l.searching),a.isFunction(l.inputTooShort)&&(c.formatInputTooShort=l.inputTooShort),a.isFunction(l.inputTooLong)&&(c.formatInputTooLong=l.inputTooLong),a.isFunction(l.loadingMore)&&(c.formatLoading=l.loadingMore),a.isFunction(l.maximumSelected)&&(c.formatSelectionTooBig=l.maximumSelected)}if(c=a.extend({},{populateResults:function(d,e,f){var g,h=this.opts.id,i=this.liveRegion;(g=function(d,e,k){var l,m,n,o,p,q,r,s,t,u;d=c.sortResults(d,e,f);var v=[];for(l=0,m=d.length;l<m;l+=1)n=d[l],p=n.disabled===!0,o=!p&&h(n)!==b,q=n.children&&n.children.length>0,r=a("<li></li>"),r.addClass("select2-results-dept-"+k),r.addClass("select2-result"),r.addClass(o?"select2-result-selectable":"select2-result-unselectable"),p&&r.addClass("select2-disabled"),q&&r.addClass("select2-result-with-children"),r.addClass(j.opts.formatResultCssClass(n)),r.attr("role","presentation"),s=a(document.createElement("div")),s.addClass("select2-result-label"),s.attr("id","select2-result-label-"+H()),s.attr("role","option"),u=c.formatResult(n,s,f,j.opts.escapeMarkup),u!==b&&(s.html(u),r.append(s)),q&&(t=a("<ul></ul>"),t.addClass("select2-result-sub"),g(n.children,t,k+1),r.append(t)),r.data("select2-data",n),v.push(r[0]);e.append(v),i.text(c.formatMatches(d.length))})(e,d,0)}},a.fn.select2.defaults,c),"function"!=typeof c.id&&(f=c.id,c.id=function(a){return a[f]}),a.isArray(c.element.data("select2Tags"))){if("tags"in c)throw"tags specified as both an attribute 'data-select2-tags' and in options of Select2 "+c.element.attr("id");c.tags=c.element.data("select2Tags")}if(e?(c.query=this.bind(function(a){var c,e,f,g={results:[],more:!1},h=a.term;f=function(b,c){var d;b.is("option")?a.matcher(h,b.text(),b)&&c.push(j.optionToData(b)):b.is("optgroup")&&(d=j.optionToData(b),b.children().each2(function(a,b){f(b,d.children)}),d.children.length>0&&c.push(d))},c=d.children(),this.getPlaceholder()!==b&&c.length>0&&(e=this.getPlaceholderOption(),e&&(c=c.not(e))),c.each2(function(a,b){f(b,g.results)}),a.callback(g)}),c.id=function(a){return a.id}):"query"in c||("ajax"in c?(i=c.element.data("ajax-url"),i&&i.length>0&&(c.ajax.url=i),c.query=v.call(c.element,c.ajax)):"data"in c?c.query=w(c.data):"tags"in c&&(c.query=x(c.tags),c.createSearchChoice===b&&(c.createSearchChoice=function(b){return{id:a.trim(b),text:a.trim(b)}}),c.initSelection===b&&(c.initSelection=function(b,d){var e=[];a(h(b.val(),c.separator,c.transformVal)).each(function(){var b={id:this,text:this},d=c.tags;a.isFunction(d)&&(d=d()),a(d).each(function(){if(g(this.id,b.id))return b=this,!1}),e.push(b)}),d(e)}))),"function"!=typeof c.query)throw"query function not defined for Select2 "+c.element.attr("id");if("top"===c.createSearchChoicePosition)c.createSearchChoicePosition=function(a,b){a.unshift(b)};else if("bottom"===c.createSearchChoicePosition)c.createSearchChoicePosition=function(a,b){a.push(b)};else if("function"!=typeof c.createSearchChoicePosition)throw"invalid createSearchChoicePosition option must be 'top', 'bottom' or a custom function";return c},monitorSource:function(){var c,d=this.opts.element,e=this;d.on("change.select2",this.bind(function(a){this.opts.element.data("select2-change-triggered")!==!0&&this.initSelection()})),this._sync=this.bind(function(){var a=d.prop("disabled");a===b&&(a=!1),this.enable(!a);var c=d.prop("readonly");c===b&&(c=!1),this.readonly(c),this.container&&(s(this.container,this.opts.element,this.opts.adaptContainerCssClass),this.container.addClass(z(this.opts.containerCssClass,this.opts.element))),this.dropdown&&(s(this.dropdown,this.opts.element,this.opts.adaptDropdownCssClass),this.dropdown.addClass(z(this.opts.dropdownCssClass,this.opts.element)))}),d.length&&d[0].attachEvent&&d.each(function(){this.attachEvent("onpropertychange",e._sync)}),c=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,c!==b&&(this.propertyObserver&&(delete this.propertyObserver,this.propertyObserver=null),this.propertyObserver=new c(function(b){a.each(b,e._sync)}),this.propertyObserver.observe(d.get(0),{attributes:!0,subtree:!1}))},triggerSelect:function(b){var c=a.Event("select2-selecting",{val:this.id(b),object:b,choice:b});return this.opts.element.trigger(c),!c.isDefaultPrevented()},triggerChange:function(b){b=b||{},b=a.extend({},b,{type:"change",val:this.val()}),this.opts.element.data("select2-change-triggered",!0),this.opts.element.trigger(b),this.opts.element.data("select2-change-triggered",!1),this.opts.element.click(),this.opts.blurOnChange&&this.opts.element.blur()},isInterfaceEnabled:function(){return this.enabledInterface===!0},enableInterface:function(){var a=this._enabled&&!this._readonly,b=!a;return a!==this.enabledInterface&&(this.container.toggleClass("select2-container-disabled",b),this.close(),this.enabledInterface=a,!0)},enable:function(a){a===b&&(a=!0),this._enabled!==a&&(this._enabled=a,this.opts.element.prop("disabled",!a),this.enableInterface())},disable:function(){this.enable(!1)},readonly:function(a){a===b&&(a=!1),this._readonly!==a&&(this._readonly=a,this.opts.element.prop("readonly",a),this.enableInterface())},opened:function(){return!!this.container&&this.container.hasClass("select2-dropdown-open")},positionDropdown:function(){var b,c,d,e,f,g=this.dropdown,h=this.container,i=h.offset(),j=h.outerHeight(!1),k=h.outerWidth(!1),l=g.outerHeight(!1),m=a(window),n=m.width(),o=m.height(),p=m.scrollLeft()+n,q=m.scrollTop()+o,r=i.top+j,s=i.left,t=r+l<=q,u=i.top-l>=m.scrollTop(),v=g.outerWidth(!1),w=function(){return s+v<=p},x=function(){return i.left+p+h.outerWidth(!1)>v},y=g.hasClass("select2-drop-above");y?(c=!0,!u&&t&&(d=!0,c=!1)):(c=!1,!t&&u&&(d=!0,c=!0)),d&&(g.hide(),i=this.container.offset(),j=this.container.outerHeight(!1),k=this.container.outerWidth(!1),l=g.outerHeight(!1),p=m.scrollLeft()+n,q=m.scrollTop()+o,r=i.top+j,s=i.left,v=g.outerWidth(!1),g.show(),this.focusSearch()),this.opts.dropdownAutoWidth?(f=a(".select2-results",g)[0],g.addClass("select2-drop-auto-width"),g.css("width",""),v=g.outerWidth(!1)+(f.scrollHeight===f.clientHeight?0:K.width),v>k?k=v:v=k,l=g.outerHeight(!1)):this.container.removeClass("select2-drop-auto-width"),"static"!==this.body.css("position")&&(b=this.body.offset(),r-=b.top,s-=b.left),!w()&&x()&&(s=i.left+this.container.outerWidth(!1)-v),e={left:s,width:k},c?(this.container.addClass("select2-drop-above"),g.addClass("select2-drop-above"),l=g.outerHeight(!1),e.top=i.top-l,e.bottom="auto"):(e.top=r,e.bottom="auto",this.container.removeClass("select2-drop-above"),g.removeClass("select2-drop-above")),e=a.extend(e,z(this.opts.dropdownCss,this.opts.element)),g.css(e)},shouldOpen:function(){var b;return!this.opened()&&(this._enabled!==!1&&this._readonly!==!0&&(b=a.Event("select2-opening"),this.opts.element.trigger(b),!b.isDefaultPrevented()))},clearDropdownAlignmentPreference:function(){this.container.removeClass("select2-drop-above"),this.dropdown.removeClass("select2-drop-above")},open:function(){return!!this.shouldOpen()&&(this.opening(),J.on("mousemove.select2Event",function(a){L.x=a.pageX,L.y=a.pageY}),!0)},opening:function(){var b,d=this.containerEventName,e="scroll."+d,f="resize."+d,g="orientationchange."+d;this.container.addClass("select2-dropdown-open").addClass("select2-container-active"),this.clearDropdownAlignmentPreference(),this.dropdown[0]!==this.body.children().last()[0]&&this.dropdown.detach().appendTo(this.body),b=a("#select2-drop-mask"),0===b.length&&(b=a(document.createElement("div")),b.attr("id","select2-drop-mask").attr("class","select2-drop-mask"),b.hide(),b.appendTo(this.body),b.on("mousedown touchstart click",function(d){c(b);var e,f=a("#select2-drop");f.length>0&&(e=f.data("select2"),e.opts.selectOnBlur&&e.selectHighlighted({noFocus:!0}),e.close(),d.preventDefault(),d.stopPropagation())})),this.dropdown.prev()[0]!==b[0]&&this.dropdown.before(b),a("#select2-drop").removeAttr("id"),this.dropdown.attr("id","select2-drop"),b.show(),this.positionDropdown(),this.dropdown.show(),this.positionDropdown(),this.dropdown.addClass("select2-drop-active");var h=this;this.container.parents().add(window).each(function(){a(this).on(f+" "+e+" "+g,function(a){h.opened()&&h.positionDropdown()})})},close:function(){if(this.opened()){var b=this.containerEventName,c="scroll."+b,d="resize."+b,e="orientationchange."+b;this.container.parents().add(window).each(function(){a(this).off(c).off(d).off(e)}),this.clearDropdownAlignmentPreference(),a("#select2-drop-mask").hide(),this.dropdown.removeAttr("id"),this.dropdown.hide(),this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active"),this.results.empty(),J.off("mousemove.select2Event"),this.clearSearch(),this.search.removeClass("select2-active"),this.search.removeAttr("aria-activedescendant"),this.opts.element.trigger(a.Event("select2-close"))}},externalSearch:function(a){this.open(),this.search.val(a),this.updateResults(!1)},clearSearch:function(){},prefillNextSearchTerm:function(){if(""!==this.search.val())return!1;var a=this.opts.nextSearchTerm(this.data(),this.lastSearchTerm);return a!==b&&(this.search.val(a),this.search.select(),!0)},getMaximumSelectionSize:function(){return z(this.opts.maximumSelectionSize,this.opts.element)},ensureHighlightVisible:function(){var b,c,d,e,f,g,h,i,j=this.results;if(c=this.highlight(),!(c<0)){if(0==c)return void j.scrollTop(0);b=this.findHighlightableChoices().find(".select2-result-label"),d=a(b[c]),i=(d.offset()||{}).top||0,e=i+d.outerHeight(!0),c===b.length-1&&(h=j.find("li.select2-more-results"),h.length>0&&(e=h.offset().top+h.outerHeight(!0))),f=j.offset().top+j.outerHeight(!1),e>f&&j.scrollTop(j.scrollTop()+(e-f)),g=i-j.offset().top,g<0&&"none"!=d.css("display")&&j.scrollTop(j.scrollTop()+g)}},findHighlightableChoices:function(){return this.results.find(".select2-result-selectable:not(.select2-disabled):not(.select2-selected)")},moveHighlight:function(b){for(var c=this.findHighlightableChoices(),d=this.highlight();d>-1&&d<c.length;){d+=b;var e=a(c[d]);if(e.hasClass("select2-result-selectable")&&!e.hasClass("select2-disabled")&&!e.hasClass("select2-selected")){this.highlight(d);break}}},highlight:function(b){var c,d,f=this.findHighlightableChoices();return 0===arguments.length?e(f.filter(".select2-highlighted")[0],f.get()):(b>=f.length&&(b=f.length-1),b<0&&(b=0),this.removeHighlight(),c=a(f[b]),c.addClass("select2-highlighted"),this.search.attr("aria-activedescendant",c.find(".select2-result-label").attr("id")),this.ensureHighlightVisible(),this.liveRegion.text(c.text()),d=c.data("select2-data"),void(d&&this.opts.element.trigger({type:"select2-highlight",val:this.id(d),choice:d})))},removeHighlight:function(){this.results.find(".select2-highlighted").removeClass("select2-highlighted")},touchMoved:function(){this._touchMoved=!0},clearTouchMoved:function(){this._touchMoved=!1},countSelectableResults:function(){return this.findHighlightableChoices().length},highlightUnderEvent:function(b){var c=a(b.target).closest(".select2-result-selectable");if(c.length>0&&!c.is(".select2-highlighted")){var d=this.findHighlightableChoices();
this.highlight(d.index(c))}else 0==c.length&&this.removeHighlight()},loadMoreIfNeeded:function(){var a,b=this.results,c=b.find("li.select2-more-results"),d=this.resultsPage+1,e=this,f=this.search.val(),g=this.context;0!==c.length&&(a=c.offset().top-b.offset().top-b.height(),a<=this.opts.loadMorePadding&&(c.addClass("select2-active"),this.opts.query({element:this.opts.element,term:f,page:d,context:g,matcher:this.opts.matcher,callback:this.bind(function(a){e.opened()&&(e.opts.populateResults.call(this,b,a.results,{term:f,page:d,context:g}),e.postprocessResults(a,!1,!1),a.more===!0?(c.detach().appendTo(b).html(e.opts.escapeMarkup(z(e.opts.formatLoadMore,e.opts.element,d+1))),window.setTimeout(function(){e.loadMoreIfNeeded()},10)):c.remove(),e.positionDropdown(),e.resultsPage=d,e.context=a.context,this.opts.element.trigger({type:"select2-loaded",items:a}))})})))},tokenize:function(){},updateResults:function(c){function d(){j.removeClass("select2-active"),m.positionDropdown(),k.find(".select2-no-results,.select2-selection-limit,.select2-searching").length?m.liveRegion.text(k.text()):m.liveRegion.text(m.opts.formatMatches(k.find('.select2-result-selectable:not(".select2-selected")').length))}function e(a){k.html(a),d()}var f,h,i,j=this.search,k=this.results,l=this.opts,m=this,n=j.val(),o=a.data(this.container,"select2-last-term");if((c===!0||!o||!g(n,o))&&(a.data(this.container,"select2-last-term",n),c===!0||this.showSearchInput!==!1&&this.opened())){i=++this.queryCount;var p=this.getMaximumSelectionSize();if(p>=1&&(f=this.data(),a.isArray(f)&&f.length>=p&&y(l.formatSelectionTooBig,"formatSelectionTooBig")))return void e("<li class='select2-selection-limit'>"+z(l.formatSelectionTooBig,l.element,p)+"</li>");if(j.val().length<l.minimumInputLength)return e(y(l.formatInputTooShort,"formatInputTooShort")?"<li class='select2-no-results'>"+z(l.formatInputTooShort,l.element,j.val(),l.minimumInputLength)+"</li>":""),void(c&&this.showSearch&&this.showSearch(!0));if(l.maximumInputLength&&j.val().length>l.maximumInputLength)return void e(y(l.formatInputTooLong,"formatInputTooLong")?"<li class='select2-no-results'>"+z(l.formatInputTooLong,l.element,j.val(),l.maximumInputLength)+"</li>":"");l.formatSearching&&0===this.findHighlightableChoices().length&&e("<li class='select2-searching'>"+z(l.formatSearching,l.element)+"</li>"),j.addClass("select2-active"),this.removeHighlight(),h=this.tokenize(),h!=b&&null!=h&&j.val(h),this.resultsPage=1,l.query({element:l.element,term:j.val(),page:this.resultsPage,context:null,matcher:l.matcher,callback:this.bind(function(f){var h;if(i==this.queryCount){if(!this.opened())return void this.search.removeClass("select2-active");if(f.hasError!==b&&y(l.formatAjaxError,"formatAjaxError"))return void e("<li class='select2-ajax-error'>"+z(l.formatAjaxError,l.element,f.jqXHR,f.textStatus,f.errorThrown)+"</li>");if(this.context=f.context===b?null:f.context,this.opts.createSearchChoice&&""!==j.val()&&(h=this.opts.createSearchChoice.call(m,j.val(),f.results),h!==b&&null!==h&&m.id(h)!==b&&null!==m.id(h)&&0===a(f.results).filter(function(){return g(m.id(this),m.id(h))}).length&&this.opts.createSearchChoicePosition(f.results,h)),0===f.results.length&&y(l.formatNoMatches,"formatNoMatches"))return e("<li class='select2-no-results'>"+z(l.formatNoMatches,l.element,j.val())+"</li>"),void(this.showSearch&&this.showSearch(j.val()));k.empty(),m.opts.populateResults.call(this,k,f.results,{term:j.val(),page:this.resultsPage,context:null}),f.more===!0&&y(l.formatLoadMore,"formatLoadMore")&&(k.append("<li class='select2-more-results'>"+l.escapeMarkup(z(l.formatLoadMore,l.element,this.resultsPage))+"</li>"),window.setTimeout(function(){m.loadMoreIfNeeded()},10)),this.postprocessResults(f,c),d(),this.opts.element.trigger({type:"select2-loaded",items:f})}})})}},cancel:function(){this.close()},blur:function(){this.opts.selectOnBlur&&this.selectHighlighted({noFocus:!0}),this.close(),this.container.removeClass("select2-container-active"),this.search[0]===document.activeElement&&this.search.blur(),this.clearSearch(),this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")},focusSearch:function(){n(this.search)},selectHighlighted:function(a){if(this._touchMoved)return void this.clearTouchMoved();var b=this.highlight(),c=this.results.find(".select2-highlighted"),d=c.closest(".select2-result").data("select2-data");d?(this.highlight(b),this.onSelect(d,a)):a&&a.noFocus&&this.close()},getPlaceholder:function(){var a;return this.opts.element.attr("placeholder")||this.opts.element.attr("data-placeholder")||this.opts.element.data("placeholder")||this.opts.placeholder||((a=this.getPlaceholderOption())!==b?a.text():b)},getPlaceholderOption:function(){if(this.select){var c=this.select.children("option").first();if(this.opts.placeholderOption!==b)return"first"===this.opts.placeholderOption&&c||"function"==typeof this.opts.placeholderOption&&this.opts.placeholderOption(this.select);if(""===a.trim(c.text())&&""===c.val())return c}},initContainerWidth:function(){function b(){var b,c,d,e,f,g;if("off"===this.opts.width)return null;if("element"===this.opts.width)return 0===this.opts.element.outerWidth(!1)?"auto":this.opts.element.outerWidth(!1)+"px";if("copy"===this.opts.width||"resolve"===this.opts.width){if(b=this.opts.element.attr("style"),"string"==typeof b)for(c=b.split(";"),e=0,f=c.length;e<f;e+=1)if(g=c[e].replace(/\s/g,""),d=g.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i),null!==d&&d.length>=1)return d[1];return"resolve"===this.opts.width?(b=this.opts.element.css("width"),b.indexOf("%")>0?b:0===this.opts.element.outerWidth(!1)?"auto":this.opts.element.outerWidth(!1)+"px"):null}return a.isFunction(this.opts.width)?this.opts.width():this.opts.width}var c=b.call(this);null!==c&&this.container.css("width",c)}}),F=D(E,{createContainer:function(){var b=a(document.createElement("div")).attr({"class":"select2-container"}).html(["<a href='javascript:void(0)' class='select2-choice' tabindex='-1'>","   <span class='select2-chosen'>&#160;</span><abbr class='select2-search-choice-close'></abbr>","   <span class='select2-arrow' role='presentation'><b role='presentation'></b></span>","</a>","<label for='' class='select2-offscreen'></label>","<input class='select2-focusser select2-offscreen' type='text' aria-haspopup='true' role='button' />","<div class='select2-drop select2-display-none'>","   <div class='select2-search'>","       <label for='' class='select2-offscreen'></label>","       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input' role='combobox' aria-expanded='true'","       aria-autocomplete='list' />","   </div>","   <ul class='select2-results' role='listbox'>","   </ul>","</div>"].join(""));return b},enableInterface:function(){this.parent.enableInterface.apply(this,arguments)&&this.focusser.prop("disabled",!this.isInterfaceEnabled())},opening:function(){var b,c,d;this.opts.minimumResultsForSearch>=0&&this.showSearch(!0),this.parent.opening.apply(this,arguments),this.showSearchInput!==!1&&this.search.val(this.focusser.val()),this.opts.shouldFocusInput(this)&&(this.search.focus(),b=this.search.get(0),b.createTextRange?(c=b.createTextRange(),c.collapse(!1),c.select()):b.setSelectionRange&&(d=this.search.val().length,b.setSelectionRange(d,d))),this.prefillNextSearchTerm(),this.focusser.prop("disabled",!0).val(""),this.updateResults(!0),this.opts.element.trigger(a.Event("select2-open"))},close:function(){this.opened()&&(this.parent.close.apply(this,arguments),this.focusser.prop("disabled",!1),this.opts.shouldFocusInput(this)&&this.focusser.focus())},focus:function(){this.opened()?this.close():(this.focusser.prop("disabled",!1),this.opts.shouldFocusInput(this)&&this.focusser.focus())},isFocused:function(){return this.container.hasClass("select2-container-active")},cancel:function(){this.parent.cancel.apply(this,arguments),this.focusser.prop("disabled",!1),this.opts.shouldFocusInput(this)&&this.focusser.focus()},destroy:function(){a("label[for='"+this.focusser.attr("id")+"']").attr("for",this.opts.element.attr("id")),this.parent.destroy.apply(this,arguments),C.call(this,"selection","focusser")},initContainer:function(){var b,d,e=this.container,f=this.dropdown,g=H();this.opts.minimumResultsForSearch<0?this.showSearch(!1):this.showSearch(!0),this.selection=b=e.find(".select2-choice"),this.focusser=e.find(".select2-focusser"),b.find(".select2-chosen").attr("id","select2-chosen-"+g),this.focusser.attr("aria-labelledby","select2-chosen-"+g),this.results.attr("id","select2-results-"+g),this.search.attr("aria-owns","select2-results-"+g),this.focusser.attr("id","s2id_autogen"+g),d=a("label[for='"+this.opts.element.attr("id")+"']"),this.opts.element.on("focus.select2",this.bind(function(){this.focus()})),this.focusser.prev().text(d.text()).attr("for",this.focusser.attr("id"));var h=this.opts.element.attr("title");this.opts.element.attr("title",h||d.text()),this.focusser.attr("tabindex",this.elementTabIndex),this.search.attr("id",this.focusser.attr("id")+"_search"),this.search.prev().text(a("label[for='"+this.focusser.attr("id")+"']").text()).attr("for",this.search.attr("id")),this.search.on("keydown",this.bind(function(a){if(this.isInterfaceEnabled()&&229!=a.keyCode){if(a.which===M.PAGE_UP||a.which===M.PAGE_DOWN)return void p(a);switch(a.which){case M.UP:case M.DOWN:return this.moveHighlight(a.which===M.UP?-1:1),void p(a);case M.ENTER:return this.selectHighlighted(),void p(a);case M.TAB:return void this.selectHighlighted({noFocus:!0});case M.ESC:return this.cancel(a),void p(a)}}})),this.search.on("blur",this.bind(function(a){document.activeElement===this.body.get(0)&&window.setTimeout(this.bind(function(){this.opened()&&this.results&&this.results.length>1&&this.search.focus()}),0)})),this.focusser.on("keydown",this.bind(function(a){if(this.isInterfaceEnabled()&&a.which!==M.TAB&&!M.isControl(a)&&!M.isFunctionKey(a)&&a.which!==M.ESC){if(this.opts.openOnEnter===!1&&a.which===M.ENTER)return void p(a);if(a.which==M.DOWN||a.which==M.UP||a.which==M.ENTER&&this.opts.openOnEnter){if(a.altKey||a.ctrlKey||a.shiftKey||a.metaKey)return;return this.open(),void p(a)}return a.which==M.DELETE||a.which==M.BACKSPACE?(this.opts.allowClear&&this.clear(),void p(a)):void 0}})),j(this.focusser),this.focusser.on("keyup-change input",this.bind(function(a){if(this.opts.minimumResultsForSearch>=0){if(a.stopPropagation(),this.opened())return;this.open()}})),b.on("mousedown touchstart","abbr",this.bind(function(a){this.isInterfaceEnabled()&&(this.clear(),q(a),this.close(),this.selection&&this.selection.focus())})),this.supportsTouchEvents?b.on("mousedown touchstart",this.bind(function(d){c(b),this.container.hasClass("select2-container-active")||this.opts.element.trigger(a.Event("select2-focus")),this.opened()?this.close():this.isInterfaceEnabled()&&this.open(),p(d)})):b.on("mousedown",this.bind(function(d){c(b),this.container.hasClass("select2-container-active")||this.opts.element.trigger(a.Event("select2-focus")),this.opened()?this.close():this.isInterfaceEnabled()&&this.open(),p(d)})),f.on("mousedown touchstart",this.bind(function(){this.opts.shouldFocusInput(this)&&this.search.focus()})),b.on("focus",this.bind(function(a){p(a)})),this.focusser.on("focus",this.bind(function(){this.container.hasClass("select2-container-active")||this.opts.element.trigger(a.Event("select2-focus")),this.container.addClass("select2-container-active")})).on("blur",this.bind(function(){this.opened()||(this.container.removeClass("select2-container-active"),this.opts.element.trigger(a.Event("select2-blur")))})),this.search.on("focus",this.bind(function(){this.container.hasClass("select2-container-active")||this.opts.element.trigger(a.Event("select2-focus")),this.container.addClass("select2-container-active")})),this.initContainerWidth(),this.opts.element.hide(),this.setPlaceholder()},clear:function(b){var c=this.selection.data("select2-data");if(c){var d=a.Event("select2-clearing");if(this.opts.element.trigger(d),d.isDefaultPrevented())return;var e=this.getPlaceholderOption();this.opts.element.val(e?e.val():""),this.selection.find(".select2-chosen").empty(),this.selection.removeData("select2-data"),this.setPlaceholder(),b!==!1&&(this.opts.element.trigger({type:"select2-removed",val:this.id(c),choice:c}),this.triggerChange({removed:c}))}},initSelection:function(){if(this.isPlaceholderOptionSelected())this.updateSelection(null),this.close(),this.setPlaceholder();else{var a=this;this.opts.initSelection.call(null,this.opts.element,function(c){c!==b&&null!==c&&(a.updateSelection(c),a.close(),a.setPlaceholder(),a.lastSearchTerm=a.search.val())})}},isPlaceholderOptionSelected:function(){var a;return this.getPlaceholder()!==b&&((a=this.getPlaceholderOption())!==b&&a.prop("selected")||""===this.opts.element.val()||this.opts.element.val()===b||null===this.opts.element.val())},prepareOpts:function(){var b=this.parent.prepareOpts.apply(this,arguments),c=this;return"select"===b.element.get(0).tagName.toLowerCase()?b.initSelection=function(a,b){var d=a.find("option").filter(function(){return this.selected&&!this.disabled});b(c.optionToData(d))}:"data"in b&&(b.initSelection=b.initSelection||function(c,d){var e=c.val(),f=null;b.query({matcher:function(a,c,d){var h=g(e,b.id(d));return h&&(f=d),h},callback:a.isFunction(d)?function(){d(f)}:a.noop})}),b},getPlaceholder:function(){return this.select&&this.getPlaceholderOption()===b?b:this.parent.getPlaceholder.apply(this,arguments)},setPlaceholder:function(){var a=this.getPlaceholder();if(this.isPlaceholderOptionSelected()&&a!==b){if(this.select&&this.getPlaceholderOption()===b)return;this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(a)),this.selection.addClass("select2-default"),this.container.removeClass("select2-allowclear")}},postprocessResults:function(a,b,c){var d=0,e=this;if(this.findHighlightableChoices().each2(function(a,b){if(g(e.id(b.data("select2-data")),e.opts.element.val()))return d=a,!1}),c!==!1&&(b===!0&&d>=0?this.highlight(d):this.highlight(0)),b===!0){var f=this.opts.minimumResultsForSearch;f>=0&&this.showSearch(A(a.results)>=f)}},showSearch:function(b){this.showSearchInput!==b&&(this.showSearchInput=b,this.dropdown.find(".select2-search").toggleClass("select2-search-hidden",!b),this.dropdown.find(".select2-search").toggleClass("select2-offscreen",!b),a(this.dropdown,this.container).toggleClass("select2-with-searchbox",b))},onSelect:function(a,b){if(this.triggerSelect(a)){var c=this.opts.element.val(),d=this.data();this.opts.element.val(this.id(a)),this.updateSelection(a),this.opts.element.trigger({type:"select2-selected",val:this.id(a),choice:a}),this.lastSearchTerm=this.search.val(),this.close(),b&&b.noFocus||!this.opts.shouldFocusInput(this)||this.focusser.focus(),g(c,this.id(a))||this.triggerChange({added:a,removed:d})}},updateSelection:function(a){var c,d,e=this.selection.find(".select2-chosen");this.selection.data("select2-data",a),e.empty(),null!==a&&(c=this.opts.formatSelection(a,e,this.opts.escapeMarkup)),c!==b&&e.append(c),d=this.opts.formatSelectionCssClass(a,e),d!==b&&e.addClass(d),this.selection.removeClass("select2-default"),this.opts.allowClear&&this.getPlaceholder()!==b&&this.container.addClass("select2-allowclear")},val:function(){var a,c=!1,d=null,e=this,f=this.data();if(0===arguments.length)return this.opts.element.val();if(a=arguments[0],arguments.length>1&&(c=arguments[1],this.opts.debug&&console&&console.warn&&console.warn('Select2: The second option to `select2("val")` is not supported in Select2 4.0.0. The `change` event will always be triggered in 4.0.0.')),this.select)this.opts.debug&&console&&console.warn&&console.warn('Select2: Setting the value on a <select> using `select2("val")` is no longer supported in 4.0.0. You can use the `.val(newValue).trigger("change")` method provided by jQuery instead.'),this.select.val(a).find("option").filter(function(){return this.selected}).each2(function(a,b){return d=e.optionToData(b),!1}),this.updateSelection(d),this.setPlaceholder(),c&&this.triggerChange({added:d,removed:f});else{if(!a&&0!==a)return void this.clear(c);if(this.opts.initSelection===b)throw new Error("cannot call val() if initSelection() is not defined");this.opts.element.val(a),this.opts.initSelection(this.opts.element,function(a){e.opts.element.val(a?e.id(a):""),e.updateSelection(a),e.setPlaceholder(),c&&e.triggerChange({added:a,removed:f})})}},clearSearch:function(){this.search.val(""),this.focusser.val("")},data:function(a){var c,d=!1;return 0===arguments.length?(c=this.selection.data("select2-data"),c==b&&(c=null),c):(this.opts.debug&&console&&console.warn&&console.warn('Select2: The `select2("data")` method can no longer set selected values in 4.0.0, consider using the `.val()` method instead.'),arguments.length>1&&(d=arguments[1]),a?(c=this.data(),this.opts.element.val(a?this.id(a):""),this.updateSelection(a),d&&this.triggerChange({added:a,removed:c})):this.clear(d),void 0)}}),G=D(E,{createContainer:function(){var b=a(document.createElement("div")).attr({"class":"select2-container select2-container-multi"}).html(["<ul class='select2-choices'>","  <li class='select2-search-field'>","    <label for='' class='select2-offscreen'></label>","    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>","  </li>","</ul>","<div class='select2-drop select2-drop-multi select2-display-none'>","   <ul class='select2-results'>","   </ul>","</div>"].join(""));return b},prepareOpts:function(){var b=this.parent.prepareOpts.apply(this,arguments),c=this;return"select"===b.element.get(0).tagName.toLowerCase()?b.initSelection=function(a,b){var d=[];a.find("option").filter(function(){return this.selected&&!this.disabled}).each2(function(a,b){d.push(c.optionToData(b))}),b(d)}:"data"in b&&(b.initSelection=b.initSelection||function(c,d){var e=h(c.val(),b.separator,b.transformVal),f=[];b.query({matcher:function(c,d,h){var i=a.grep(e,function(a){return g(a,b.id(h))}).length;return i&&f.push(h),i},callback:a.isFunction(d)?function(){for(var a=[],c=0;c<e.length;c++)for(var h=e[c],i=0;i<f.length;i++){var j=f[i];if(g(h,b.id(j))){a.push(j),f.splice(i,1);break}}d(a)}:a.noop})}),b},selectChoice:function(a){var b=this.container.find(".select2-search-choice-focus");b.length&&a&&a[0]==b[0]||(b.length&&this.opts.element.trigger("choice-deselected",b),b.removeClass("select2-search-choice-focus"),a&&a.length&&(this.close(),a.addClass("select2-search-choice-focus"),this.opts.element.trigger("choice-selected",a)))},destroy:function(){a("label[for='"+this.search.attr("id")+"']").attr("for",this.opts.element.attr("id")),this.parent.destroy.apply(this,arguments),C.call(this,"searchContainer","selection")},initContainer:function(){var b,c=".select2-choices";this.searchContainer=this.container.find(".select2-search-field"),this.selection=b=this.container.find(c);var d=this;this.selection.on("click",".select2-container:not(.select2-container-disabled) .select2-search-choice:not(.select2-locked)",function(b){d.search[0].focus(),d.selectChoice(a(this))}),this.search.attr("id","s2id_autogen"+H()),this.search.prev().text(a("label[for='"+this.opts.element.attr("id")+"']").text()).attr("for",this.search.attr("id")),this.opts.element.on("focus.select2",this.bind(function(){this.focus()})),this.search.on("input paste",this.bind(function(){this.search.attr("placeholder")&&0==this.search.val().length||this.isInterfaceEnabled()&&(this.opened()||this.open())})),this.search.attr("tabindex",this.elementTabIndex),this.keydowns=0,this.search.on("keydown",this.bind(function(a){if(this.isInterfaceEnabled()){++this.keydowns;var c=b.find(".select2-search-choice-focus"),d=c.prev(".select2-search-choice:not(.select2-locked)"),e=c.next(".select2-search-choice:not(.select2-locked)"),f=o(this.search);if(c.length&&(a.which==M.LEFT||a.which==M.RIGHT||a.which==M.BACKSPACE||a.which==M.DELETE||a.which==M.ENTER)){var g=c;return a.which==M.LEFT&&d.length?g=d:a.which==M.RIGHT?g=e.length?e:null:a.which===M.BACKSPACE?this.unselect(c.first())&&(this.search.width(10),g=d.length?d:e):a.which==M.DELETE?this.unselect(c.first())&&(this.search.width(10),g=e.length?e:null):a.which==M.ENTER&&(g=null),this.selectChoice(g),p(a),void(g&&g.length||this.open())}if((a.which===M.BACKSPACE&&1==this.keydowns||a.which==M.LEFT)&&0==f.offset&&!f.length)return this.selectChoice(b.find(".select2-search-choice:not(.select2-locked)").last()),void p(a);if(this.selectChoice(null),this.opened())switch(a.which){case M.UP:case M.DOWN:return this.moveHighlight(a.which===M.UP?-1:1),void p(a);case M.ENTER:return this.selectHighlighted(),void p(a);case M.TAB:return this.selectHighlighted({noFocus:!0}),void this.close();case M.ESC:return this.cancel(a),void p(a)}if(a.which!==M.TAB&&!M.isControl(a)&&!M.isFunctionKey(a)&&a.which!==M.BACKSPACE&&a.which!==M.ESC){if(a.which===M.ENTER){if(this.opts.openOnEnter===!1)return;if(a.altKey||a.ctrlKey||a.shiftKey||a.metaKey)return}this.open(),a.which!==M.PAGE_UP&&a.which!==M.PAGE_DOWN||p(a),a.which===M.ENTER&&p(a)}}})),this.search.on("keyup",this.bind(function(a){this.keydowns=0,this.resizeSearch()})),this.search.on("blur",this.bind(function(b){this.container.removeClass("select2-container-active"),this.search.removeClass("select2-focused"),this.selectChoice(null),this.opened()||this.clearSearch(),b.stopImmediatePropagation(),this.opts.element.trigger(a.Event("select2-blur"))})),this.container.on("click",c,this.bind(function(b){this.isInterfaceEnabled()&&(a(b.target).closest(".select2-search-choice").length>0||(this.selectChoice(null),this.clearPlaceholder(),this.container.hasClass("select2-container-active")||this.opts.element.trigger(a.Event("select2-focus")),this.open(),this.focusSearch(),b.preventDefault()))})),this.container.on("focus",c,this.bind(function(){this.isInterfaceEnabled()&&(this.container.hasClass("select2-container-active")||this.opts.element.trigger(a.Event("select2-focus")),this.container.addClass("select2-container-active"),this.dropdown.addClass("select2-drop-active"),this.clearPlaceholder())})),this.initContainerWidth(),this.opts.element.hide(),this.clearSearch()},enableInterface:function(){this.parent.enableInterface.apply(this,arguments)&&this.search.prop("disabled",!this.isInterfaceEnabled())},initSelection:function(){if(""===this.opts.element.val()&&""===this.opts.element.text()&&(this.updateSelection([]),this.close(),this.clearSearch()),this.select||""!==this.opts.element.val()){var a=this;this.opts.initSelection.call(null,this.opts.element,function(c){c!==b&&null!==c&&(a.updateSelection(c),a.close(),a.clearSearch())})}},clearSearch:function(){var a=this.getPlaceholder(),c=this.getMaxSearchWidth();a!==b&&0===this.getVal().length&&this.search.hasClass("select2-focused")===!1?(this.search.val(a).addClass("select2-default"),this.search.width(c>0?c:this.container.css("width"))):this.search.val("").width(10)},clearPlaceholder:function(){this.search.hasClass("select2-default")&&this.search.val("").removeClass("select2-default")},opening:function(){this.clearPlaceholder(),this.resizeSearch(),this.parent.opening.apply(this,arguments),this.focusSearch(),this.prefillNextSearchTerm(),this.updateResults(!0),this.opts.shouldFocusInput(this)&&this.search.focus(),this.opts.element.trigger(a.Event("select2-open"))},close:function(){this.opened()&&this.parent.close.apply(this,arguments)},focus:function(){this.close(),this.search.focus()},isFocused:function(){return this.search.hasClass("select2-focused")},updateSelection:function(b){var c={},d=[],e=this;a(b).each(function(){e.id(this)in c||(c[e.id(this)]=0,d.push(this))}),this.selection.find(".select2-search-choice").remove(),this.addSelectedChoice(d),e.postprocessResults()},tokenize:function(){var a=this.search.val();a=this.opts.tokenizer.call(this,a,this.data(),this.bind(this.onSelect),this.opts),null!=a&&a!=b&&(this.search.val(a),a.length>0&&this.open())},onSelect:function(a,b){this.triggerSelect(a)&&""!==a.text&&(this.addSelectedChoice(a),this.opts.element.trigger({type:"selected",val:this.id(a),choice:a}),this.lastSearchTerm=this.search.val(),this.clearSearch(),this.updateResults(),!this.select&&this.opts.closeOnSelect||this.postprocessResults(a,!1,this.opts.closeOnSelect===!0),this.opts.closeOnSelect?(this.close(),this.search.width(10)):this.countSelectableResults()>0?(this.search.width(10),this.resizeSearch(),this.getMaximumSelectionSize()>0&&this.val().length>=this.getMaximumSelectionSize()?this.updateResults(!0):this.prefillNextSearchTerm()&&this.updateResults(),this.positionDropdown()):(this.close(),this.search.width(10)),this.triggerChange({added:a}),b&&b.noFocus||this.focusSearch())},cancel:function(){this.close(),this.focusSearch()},addSelectedChoice:function(b){var c=this.getVal(),d=this;a(b).each(function(){c.push(d.createChoice(this))}),this.setVal(c)},createChoice:function(c){var d,e,f=!c.locked,g=a("<li class='select2-search-choice'>    <div></div>    <a href='#' class='select2-search-choice-close' tabindex='-1'></a></li>"),h=a("<li class='select2-search-choice select2-locked'><div></div></li>"),i=f?g:h,j=this.id(c);return d=this.opts.formatSelection(c,i.find("div"),this.opts.escapeMarkup),d!=b&&i.find("div").replaceWith(a("<div></div>").html(d)),e=this.opts.formatSelectionCssClass(c,i.find("div")),e!=b&&i.addClass(e),f&&i.find(".select2-search-choice-close").on("mousedown",p).on("click dblclick",this.bind(function(b){this.isInterfaceEnabled()&&(this.unselect(a(b.target)),this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus"),p(b),this.close(),this.focusSearch())})).on("focus",this.bind(function(){this.isInterfaceEnabled()&&(this.container.addClass("select2-container-active"),this.dropdown.addClass("select2-drop-active"))})),i.data("select2-data",c),i.insertBefore(this.searchContainer),j},unselect:function(b){var c,d,f=this.getVal();if(b=b.closest(".select2-search-choice"),0===b.length)throw"Invalid argument: "+b+". Must be .select2-search-choice";if(c=b.data("select2-data")){var g=a.Event("select2-removing");if(g.val=this.id(c),g.choice=c,this.opts.element.trigger(g),g.isDefaultPrevented())return!1;for(;(d=e(this.id(c),f))>=0;)f.splice(d,1),this.setVal(f),this.select&&this.postprocessResults();return b.remove(),this.opts.element.trigger({type:"select2-removed",val:this.id(c),choice:c}),this.triggerChange({removed:c}),!0}},postprocessResults:function(a,b,c){var d=this.getVal(),f=this.results.find(".select2-result"),g=this.results.find(".select2-result-with-children"),h=this;f.each2(function(a,b){var c=h.id(b.data("select2-data"));e(c,d)>=0&&(b.addClass("select2-selected"),b.find(".select2-result-selectable").addClass("select2-selected"))}),g.each2(function(a,b){b.is(".select2-result-selectable")||0!==b.find(".select2-result-selectable:not(.select2-selected)").length||b.addClass("select2-selected")}),this.highlight()==-1&&c!==!1&&this.opts.closeOnSelect===!0&&h.highlight(0),!this.opts.createSearchChoice&&!f.filter(".select2-result:not(.select2-selected)").length>0&&(!a||a&&!a.more&&0===this.results.find(".select2-no-results").length)&&y(h.opts.formatNoMatches,"formatNoMatches")&&this.results.append("<li class='select2-no-results'>"+z(h.opts.formatNoMatches,h.opts.element,h.search.val())+"</li>")},getMaxSearchWidth:function(){return this.selection.width()-i(this.search)},resizeSearch:function(){var a,b,c,d,e,f=i(this.search);a=r(this.search)+10,b=this.search.offset().left,c=this.selection.width(),d=this.selection.offset().left,e=c-(b-d)-f,e<a&&(e=c-f),e<40&&(e=c-f),e<=0&&(e=a),this.search.width(Math.floor(e))},getVal:function(){var a;return this.select?(a=this.select.val(),null===a?[]:a):(a=this.opts.element.val(),h(a,this.opts.separator,this.opts.transformVal))},setVal:function(b){if(this.select)this.select.val(b);else{var c=[],d={};a(b).each(function(){this in d||(c.push(this),d[this]=0)}),this.opts.element.val(0===c.length?"":c.join(this.opts.separator))}},buildChangeDetails:function(a,b){for(var b=b.slice(0),a=a.slice(0),c=0;c<b.length;c++)for(var d=0;d<a.length;d++)if(g(this.opts.id(b[c]),this.opts.id(a[d]))){b.splice(c,1),c--,a.splice(d,1);break}return{added:b,removed:a}},val:function(c,d){var e,f=this;if(0===arguments.length)return this.getVal();if(e=this.data(),e.length||(e=[]),!c&&0!==c)return this.opts.element.val(""),this.updateSelection([]),this.clearSearch(),void(d&&this.triggerChange({added:this.data(),removed:e}));if(this.setVal(c),this.select)this.opts.initSelection(this.select,this.bind(this.updateSelection)),d&&this.triggerChange(this.buildChangeDetails(e,this.data()));else{if(this.opts.initSelection===b)throw new Error("val() cannot be called if initSelection() is not defined");this.opts.initSelection(this.opts.element,function(b){var c=a.map(b,f.id);f.setVal(c),f.updateSelection(b),f.clearSearch(),d&&f.triggerChange(f.buildChangeDetails(e,f.data()))})}this.clearSearch()},onSortStart:function(){if(this.select)throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");this.search.width(0),this.searchContainer.hide()},onSortEnd:function(){var b=[],c=this;this.searchContainer.show(),this.searchContainer.appendTo(this.searchContainer.parent()),this.resizeSearch(),this.selection.find(".select2-search-choice").each(function(){b.push(c.opts.id(a(this).data("select2-data")))}),this.setVal(b),this.triggerChange()},data:function(b,c){var d,e,f=this;return 0===arguments.length?this.selection.children(".select2-search-choice").map(function(){return a(this).data("select2-data")}).get():(e=this.data(),b||(b=[]),d=a.map(b,function(a){return f.opts.id(a)}),this.setVal(d),this.updateSelection(b),this.clearSearch(),c&&this.triggerChange(this.buildChangeDetails(e,this.data())),void 0)}}),a.fn.select2=function(){var c,d,f,g,h,i=Array.prototype.slice.call(arguments,0),j=["val","destroy","opened","open","close","focus","isFocused","container","dropdown","onSortStart","onSortEnd","enable","disable","readonly","positionDropdown","data","search"],k=["opened","isFocused","container","dropdown"],l=["val","data"],m={search:"externalSearch"};return this.each(function(){if(0===i.length||"object"==typeof i[0])c=0===i.length?{}:a.extend({},i[0]),c.element=a(this),"select"===c.element.get(0).tagName.toLowerCase()?h=c.element.prop("multiple"):(h=c.multiple||!1,"tags"in c&&(c.multiple=h=!0)),d=h?new window.Select2["class"].multi:new window.Select2["class"].single,d.init(c);else{if("string"!=typeof i[0])throw"Invalid arguments to select2 plugin: "+i;if(e(i[0],j)<0)throw"Unknown method: "+i[0];if(g=b,d=a(this).data("select2"),d===b)return;if(f=i[0],"container"===f?g=d.container:"dropdown"===f?g=d.dropdown:(m[f]&&(f=m[f]),g=d[f].apply(d,i.slice(1))),e(i[0],k)>=0||e(i[0],l)>=0&&1==i.length)return!1}}),g===b?this:g},a.fn.select2.defaults={debug:!1,width:"copy",loadMorePadding:0,closeOnSelect:!0,openOnEnter:!0,containerCss:{},dropdownCss:{},containerCssClass:"",dropdownCssClass:"",formatResult:function(a,b,c,d){var e=[];return t(this.text(a),c.term,e,d),e.join("")},transformVal:function(b){return a.trim(b)},formatSelection:function(a,c,d){return a?d(this.text(a)):b},sortResults:function(a,b,c){return a},formatResultCssClass:function(a){return a.css},formatSelectionCssClass:function(a,c){return b},minimumResultsForSearch:0,minimumInputLength:0,maximumInputLength:null,maximumSelectionSize:0,id:function(a){return a==b?null:a.id},text:function(b){return b&&this.data&&this.data.text?a.isFunction(this.data.text)?this.data.text(b):b[this.data.text]:b.text},matcher:function(a,b){return d(""+b).toUpperCase().indexOf(d(""+a).toUpperCase())>=0},separator:",",tokenSeparators:[],tokenizer:B,escapeMarkup:u,blurOnChange:!1,selectOnBlur:!1,adaptContainerCssClass:function(a){return a},adaptDropdownCssClass:function(a){return null},nextSearchTerm:function(a,c){return b},searchInputPlaceholder:"",createSearchChoicePosition:"top",shouldFocusInput:function(a){
var b="ontouchstart"in window||navigator.msMaxTouchPoints>0;return!b||!(a.opts.minimumResultsForSearch<0)}},a.fn.select2.locales=[],a.fn.select2.locales.en={formatMatches:function(a){return 1===a?"One result is available, press enter to select it.":a+" results are available, use up and down arrow keys to navigate."},formatNoMatches:function(){return"No matches found"},formatAjaxError:function(a,b,c){return"Loading failed"},formatInputTooShort:function(a,b){var c=b-a.length;return"Please enter "+c+" or more character"+(1==c?"":"s")},formatInputTooLong:function(a,b){var c=a.length-b;return"Please delete "+c+" character"+(1==c?"":"s")},formatSelectionTooBig:function(a){return"You can only select "+a+" item"+(1==a?"":"s")},formatLoadMore:function(a){return"Loading more results???"},formatSearching:function(){return"Searching???"}},a.extend(a.fn.select2.defaults,a.fn.select2.locales.en),a.fn.select2.ajaxDefaults={transport:a.ajax,params:{type:"GET",cache:!1,dataType:"json"}},window.Select2={query:{ajax:v,local:w,tags:x},util:{debounce:l,markMatch:t,escapeMarkup:u,stripDiacritics:d},"class":{"abstract":E,single:F,multi:G}}}}(jQuery);
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