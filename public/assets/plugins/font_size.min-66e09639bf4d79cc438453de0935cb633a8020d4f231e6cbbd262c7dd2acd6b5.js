/*!
 * froala_editor v2.3.4 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2016 Froala Labs
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(t,n){return void 0===n&&(n="undefined"!=typeof window?require("jquery"):require("jquery")(t)),e(n),n}:e(jQuery)}(function(e){"use strict";e.extend(e.FE.DEFAULTS,{fontSize:["8","9","10","11","12","14","18","24","30","36","48","60","72","96"],fontSizeSelection:!1,fontSizeDefaultSelection:"12"}),e.FE.PLUGINS.fontSize=function(t){function n(e){t.format.applyStyle("font-size",e)}function o(n,o){var i=e(t.selection.element()).css("font-size");o.find(".fr-command.fr-active").removeClass("fr-active"),o.find('.fr-command[data-param1="'+i+'"]').addClass("fr-active");var f=o.find(".fr-dropdown-list"),r=o.find(".fr-active").parent();r.length?f.parent().scrollTop(r.offset().top-f.offset().top-(f.parent().outerHeight()/2-r.outerHeight()/2)):f.parent().scrollTop(0)}function i(n){if(t.opts.fontSizeSelection){var o=t.helpers.getPX(e(t.selection.element()).css("font-size"));n.find("> span").text(o)}}return{apply:n,refreshOnShow:o,refresh:i}},e.FE.RegisterCommand("fontSize",{type:"dropdown",title:"Font Size",displaySelection:function(e){return e.opts.fontSizeSelection},displaySelectionWidth:30,defaultSelection:function(e){return e.opts.fontSizeDefaultSelection},html:function(){for(var e='<ul class="fr-dropdown-list">',t=this.opts.fontSize,n=0;n<t.length;n++){var o=t[n];e+='<li><a class="fr-command" data-cmd="fontSize" data-param1="'+o+'px" title="'+o+'">'+o+"</a></li>"}return e+="</ul>"},callback:function(e,t){this.fontSize.apply(t)},refresh:function(e){this.fontSize.refresh(e)},refreshOnShow:function(e,t){this.fontSize.refreshOnShow(e,t)},plugin:"fontSize"}),e.FE.DefineIcon("fontSize",{NAME:"text-height"})});