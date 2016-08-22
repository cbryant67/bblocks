/*!
 * froala_editor v2.3.4 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2016 Froala Labs
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(a,t){return void 0===t&&(t="undefined"!=typeof window?require("jquery"):require("jquery")(a)),e(t),t}:e(jQuery)}(function(e){"use strict";if(e.extend(e.FE.DEFAULTS,{imageManagerLoadURL:"https://i.froala.com/load-files",imageManagerLoadMethod:"get",imageManagerLoadParams:{},imageManagerPreloader:"",imageManagerDeleteURL:"",imageManagerDeleteMethod:"post",imageManagerDeleteParams:{},imageManagerPageSize:12,imageManagerScrollOffset:20,imageManagerToggleTags:!0}),e.FE.PLUGINS.imageManager=function(a){function t(){x||s(),x.data("instance",a),x.show(),q.show(),Q=a.image.get(),P||D(),g(),a.$doc.find("body").addClass("prevent-scroll"),a.helpers.isMobile()&&a.$doc.find("body").addClass("fr-mobile")}function r(){var e=x.data("instance")||a;e.events.enableBlur(),x.hide(),q.hide(),e.$doc.find("body").removeClass("prevent-scroll fr-mobile")}function i(){var a=e(window).outerWidth();return 768>a?2:1200>a?3:4}function n(){F.empty();for(var e=0;k>e;e++)F.append('<div class="fr-list-column"></div>')}function o(){var t="";a.opts.theme&&(t=" "+a.opts.theme+"-theme");var r='<div class="fr-modal'+t+'"><div class="fr-modal-wrapper">';return r+='<div class="fr-modal-title"><div class="fr-modal-title-line"><i class="fa fa-bars fr-modal-more fr-not-available" id="fr-modal-more-'+a.sid+'" title="'+a.language.translate("Tags")+'"></i><h4 data-text="true">'+a.language.translate("Manage Images")+'</h4><i title="'+a.language.translate("Cancel")+'" class="fa fa-times fr-modal-close" id="fr-modal-close"></i></div>',r+='<div class="fr-modal-tags" id="fr-modal-tags"></div>',r+="</div>",r+='<img class="fr-preloader" id="fr-preloader" alt="'+a.language.translate("Loading")+'.." src="'+a.opts.imageManagerPreloader+'" style="display: none;">',r+='<div class="fr-scroller" id="fr-scroller"><div class="fr-image-list" id="fr-image-list"></div></div>',r+="</div></div>",e(r)}function s(){a.shared.$modal?(x=a.shared.$modal,q=a.shared.$overlay):(a.shared.$modal=o(),x=a.shared.$modal,a.helpers.isMobile()||x.addClass("fr-desktop"),x.appendTo("body"),a.shared.$overlay=e('<div class="fr-overlay">').appendTo("body"),q=a.shared.$overlay,a.opts.theme&&q.addClass(a.opts.theme+"-theme"),r()),a.events.on("shared.destroy",function(){x.removeData().remove(),q.removeData().remove()},!0)}function g(){P.show(),F.find(".fr-list-column").empty(),a.opts.imageManagerLoadURL?e.ajax({url:a.opts.imageManagerLoadURL,method:a.opts.imageManagerLoadMethod,data:a.opts.imageManagerLoadParams,dataType:"json",crossDomain:a.opts.requestWithCORS,xhrFields:{withCredentials:a.opts.requestWithCORS},headers:a.opts.requestHeaders}).done(function(e,t,r){a.events.trigger("imageManager.imagesLoaded",[e]),l(e,r.response),P.hide()}).fail(function(){var e=this.xhr();b(j,e.response||e.responseText)}):b(z)}function l(e,a){try{F.find(".fr-list-column").empty(),$=0,H=0,U=0,R=e,d()}catch(t){b(A,a)}}function d(){if(H<R.length&&(F.outerHeight()<=T.outerHeight()+a.opts.imageManagerScrollOffset||T.scrollTop()+a.opts.imageManagerScrollOffset>F.outerHeight()-T.outerHeight())){$++;for(var e=a.opts.imageManagerPageSize*($-1);e<Math.min(R.length,a.opts.imageManagerPageSize*$);e++)m(R[e])}}function m(t){var r=new Image,i=e('<div class="fr-image-container fr-empty fr-image-'+U++ +'" data-loading="'+a.language.translate("Loading")+'.." data-deleting="'+a.language.translate("Deleting")+'..">');p(!1),r.onload=function(){i.height(Math.floor(i.width()/r.width*r.height));var n=e("<img/>");if(t.thumb)n.attr("src",t.thumb);else{if(b(B,t),!t.url)return b(N,t),!1;n.attr("src",t.url)}if(t.url&&n.attr("data-url",t.url),t.tag)if(S.find(".fr-modal-more.fr-not-available").removeClass("fr-not-available"),S.find(".fr-modal-tags").show(),t.tag.indexOf(",")>=0){for(var o=t.tag.split(","),s=0;s<o.length;s++)o[s]=o[s].trim(),0===E.find('a[title="'+o[s]+'"]').length&&E.append('<a role="button" title="'+o[s]+'">'+o[s]+"</a>");n.attr("data-tag",o.join())}else 0===E.find('a[title="'+t.tag.trim()+'"]').length&&E.append('<a role="button" title="'+t.tag.trim()+'">'+t.tag.trim()+"</a>"),n.attr("data-tag",t.tag.trim());for(var g in t)t.hasOwnProperty(g)&&"thumb"!=g&&"url"!=g&&"tag"!=g&&n.attr("data-"+g,t[g]);i.append(n).append(e(a.icon.create("imageManagerDelete")).addClass("fr-delete-img").attr("title",a.language.translate("Delete"))).append(e(a.icon.create("imageManagerInsert")).addClass("fr-insert-img").attr("title",a.language.translate("Insert"))),E.find(".fr-selected-tag").each(function(e,a){L(n,a.text)||i.hide()}),n.on("load",function(){i.removeClass("fr-empty"),i.height("auto"),H++;var e=c(parseInt(n.parent().attr("class").match(/fr-image-(\d+)/)[1],10)+1);u(e),p(!1),H%a.opts.imageManagerPageSize===0&&d()}),a.events.trigger("imageManager.imageLoaded",[n])},r.onerror=function(){H++,i.remove();var e=c(parseInt(i.attr("class").match(/fr-image-(\d+)/)[1],10)+1);u(e),b(O,t),H%a.opts.imageManagerPageSize===0&&d()},r.src=t.url,f().append(i)}function f(){var a,t;return F.find(".fr-list-column").each(function(r,i){var n=e(i);0===r?(t=n.outerHeight(),a=n):n.outerHeight()<t&&(t=n.outerHeight(),a=n)}),a}function c(a){void 0===a&&(a=0);for(var t=[],r=U-1;r>=a;r--){var i=F.find(".fr-image-"+r);i.length&&(t.push(i),e('<div id="fr-image-hidden-container">').append(i),F.find(".fr-image-"+r).remove())}return t}function u(e){for(var a=e.length-1;a>=0;a--)f().append(e[a])}function p(e){if(void 0===e&&(e=!0),!x.is(":visible"))return!0;var t=i();if(t!=k){k=t;var r=c();n(),u(r)}var o=a.$win.height(),s=x.find(".fr-modal-wrapper"),g=parseFloat(s.css("margin-top"))+parseFloat(s.css("margin-bottom")),l=parseFloat(s.css("padding-top"))+parseFloat(s.css("padding-bottom")),m=parseFloat(s.css("border-top-width")),f=s.find("h4").outerHeight();T.height(Math.min(F.outerHeight(),o-g-l-f-m)),e&&d()}function h(e){var a={},t=e.data();for(var r in t)t.hasOwnProperty(r)&&"url"!=r&&"tag"!=r&&(a[r]=t[r]);return a}function v(t){var i=e(t.currentTarget).siblings("img"),n=x.data("instance")||a;if(r(),n.image.showProgressBar(),Q)Q.trigger("click");else{n.events.focus(!0),n.selection.restore();var o=n.position.getBoundingRect(),s=o.left+o.width/2,g=o.top+o.height;n.popups.setContainer("image.insert",n.$box||e("body")),n.popups.show("image.insert",s,g)}n.image.insert(i.data("url"),!1,h(i),Q)}function M(t){var r=e(t.currentTarget).siblings("img"),i=a.language.translate("Are you sure? Image will be deleted.");confirm(i)&&(a.opts.imageManagerDeleteURL?a.events.trigger("imageManager.beforeDeleteImage",[r])!==!1&&(r.parent().addClass("fr-image-deleting"),e.ajax({method:a.opts.imageManagerDeleteMethod,url:a.opts.imageManagerDeleteURL,data:e.extend(e.extend({src:r.attr("src")},h(r)),a.opts.imageManagerDeleteParams),crossDomain:a.opts.requestWithCORS,xhrFields:{withCredentials:a.opts.requestWithCORS},headers:a.opts.requestHeaders}).done(function(e){a.events.trigger("imageManager.imageDeleted",[e]);var t=c(parseInt(r.parent().attr("class").match(/fr-image-(\d+)/)[1],10)+1);r.parent().remove(),u(t),p(!0)}).fail(function(){var e=this.xhr();b(_,e.response||e.responseText)})):b(W))}function b(t,r){t>=10&&20>t?P.hide():t>=20&&30>t&&e(".fr-image-deleting").removeClass("fr-image-deleting"),a.events.trigger("imageManager.error",[{code:t,message:G[t]},r])}function w(){var e=S.find(".fr-modal-title-line").outerHeight(),a=E.outerHeight();S.toggleClass(".fr-show-tags"),S.hasClass(".fr-show-tags")?(S.css("height",e+a),E.find("a").css("opacity",1)):(S.css("height",e),E.find("a").css("opacity",0))}function C(){var a=E.find(".fr-selected-tag");a.length>0?(F.find("img").parent().show(),a.each(function(a,t){F.find("img").each(function(a,r){var i=e(r);L(i,t.text)||i.parent().hide()})})):F.find("img").parent().show();var t=c();u(t),d()}function y(t){t.preventDefault();var r=e(t.currentTarget);r.toggleClass("fr-selected-tag"),a.opts.imageManagerToggleTags&&r.siblings("a").removeClass("fr-selected-tag"),C()}function L(e,a){for(var t=e.attr("data-tag").split(","),r=0;r<t.length;r++)if(t[r]==a)return!0;return!1}function D(){P=x.find("#fr-preloader"),F=x.find("#fr-image-list"),T=x.find("#fr-scroller"),E=x.find("#fr-modal-tags"),S=E.parent(),k=i(),n();var t=S.find(".fr-modal-title-line").outerHeight();S.css("height",t),T.css("margin-top",t),a.events.bindClick(x,"i#fr-modal-close",r),a.events.$on(e(a.o_win),"resize",function(){p(!!R)}),a.helpers.isMobile()&&(a.events.bindClick(F,"div.fr-image-container",function(a){x.find(".fr-mobile-selected").removeClass("fr-mobile-selected"),e(a.currentTarget).addClass("fr-mobile-selected")}),x.on(a._mousedown,function(){x.find(".fr-mobile-selected").removeClass("fr-mobile-selected")})),a.events.bindClick(F,".fr-insert-img",v),a.events.bindClick(F,".fr-delete-img",M),x.on(a._mousedown+" "+a._mouseup,function(e){e.stopPropagation()}),x.on(a._mousedown,"*",function(){a.events.disableBlur()}),T.on("scroll",d),a.events.bindClick(x,"i#fr-modal-more-"+a.sid,w),a.events.bindClick(E,"a",y)}function I(){return a.$wp||"IMG"==a.$el.get(0).tagName?void 0:!1}var x,P,F,T,E,S,q,R,$,H,U,k,O=10,j=11,z=12,A=13,B=14,N=15,_=21,W=22,G={};G[O]="Image cannot be loaded from the passed link.",G[j]="Error during load images request.",G[z]="Missing imageManagerLoadURL option.",G[A]="Parsing load response failed.",G[B]="Missing image thumb.",G[N]="Missing image URL.",G[_]="Error during delete image request.",G[W]="Missing imageManagerDeleteURL option.";var Q;return{require:["image"],_init:I,show:t,hide:r}},!e.FE.PLUGINS.image)throw new Error("Image manager plugin requires image plugin.");e.FE.DEFAULTS.imageInsertButtons.push("imageManager"),e.FE.RegisterCommand("imageManager",{title:"Browse",undo:!1,focus:!1,callback:function(){this.imageManager.show()},plugin:"imageManager"}),e.FE.DefineIcon("imageManager",{NAME:"folder"}),e.FE.DefineIcon("imageManagerInsert",{NAME:"plus"}),e.FE.DefineIcon("imageManagerDelete",{NAME:"trash"})});