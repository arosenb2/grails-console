this["JST"] = this["JST"] || {};

this["JST"]["editor/editor"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"btn-toolbar\">\n    <button class=\"execute btn btn-sm btn-default\" title=\"Execute (Ctrl + Enter)\"><i class=\"fa fa-play fa-lg\"></i></button>\n    <button class=\"btn btn-sm btn-default open\" title=\"Open\"><i class=\"fa fa-folder fa-lg\"></i></button>\n    <button class=\"btn btn-sm btn-default new\" title=\"New\"><i class=\"fa fa-file fa-lg\"></i></button>\n    <div class=\"btn-group\">\n        <button class=\"save btn btn-sm btn-default\" title=\"Save\"><i class=\"fa fa-save fa-lg\"></i></button>\n        <button type=\"button\" class=\"btn btn-sm btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n            <span class=\"caret\"></span>\n            <span class=\"sr-only\">Toggle Dropdown</span>\n        </button>\n        <ul class=\"dropdown-menu\" role=\"menu\">\n            <li><a href=\"#\" class=\"save-as\">Save as...</a></li>\n        </ul>\n    </div>\n</div>\n<div id=\"code-wrapper\" class=\"ui-layout-content\">\n    <textarea name=\"code\" rows=\"25\" cols=\"100\"></textarea>\n</div>";
},"useData":true});

this["JST"]["files/files-section"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"modal-content\">\n    <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Save as</h4>\n    </div>\n\n    <div class=\"modal-body\">\n        <div class=\"files-header\">\n            <div class=\"section\">\n                <form class=\"form-horizontal file-info\">\n                    <input class=\"file-name form-control\" type=\"text\" placeholder=\"File name\"/>\n                </form>\n            </div>\n        </div>\n        <div class=\"files-body\">\n            <div class=\"store\">\n            </div>\n        </div>\n\n    </div>\n\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"cancel btn btn-primary\">Cancel</button>\n        <button type=\"button\" class=\"save btn btn-primary\">Save</button>\n    </div>\n</div>";
},"useData":true});

this["JST"]["files/scripts"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "              <li><a href=\"#\" data-store=\""
    + alias3(((helper = (helper = helpers.storeName || (depth0 != null ? depth0.storeName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"storeName","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.displayName || (depth0 != null ? depth0.displayName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"displayName","hash":{},"data":data}) : helper)))
    + "</a></li>\n";
},"3":function(depth0,helpers,partials,data) {
    return "        <button class=\"btn btn-sm btn-default close-it pull-right\" title=\"Close\"><i class=\"fa fa-caret-left fa-lg\"></i></button>\n";
},"5":function(depth0,helpers,partials,data) {
    return "<a href=\"#\" class=\"up\">../</a>";
},"7":function(depth0,helpers,partials,data) {
    return "      <div class=\"loading\"><i class=\"fa fa-refresh fa-spin\"></i></div>\n";
},"9":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.files : depth0),{"name":"if","hash":{},"fn":this.program(10, data, 0, blockParams, depths),"inverse":this.program(13, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"10":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "        <ul class=\"files\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.files : depth0),{"name":"each","hash":{},"fn":this.program(11, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n";
},"11":function(depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "              <li data-file-id=\""
    + alias2(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n                "
    + alias2((helpers.scriptsFileItem || (depth0 && depth0.scriptsFileItem) || alias1).call(depth0,depth0,{"name":"scriptsFileItem","hash":{"showDelete":(depths[1] != null ? depths[1].showDelete : depths[1])},"data":data}))
    + "\n              </li>\n";
},"13":function(depth0,helpers,partials,data) {
    return "        <div class=\"message\">No files</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"btn-toolbar\">\n    <div class=\"btn-group\">\n        <button type=\"button\" class=\"btn btn-sm dropdown-toggle\" data-toggle=\"dropdown\">\n          "
    + alias3(((helper = (helper = helpers.currentStore || (depth0 != null ? depth0.currentStore : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"currentStore","hash":{},"data":data}) : helper)))
    + "\n            <span class=\"caret\"></span>\n        </button>\n        <ul class=\"dropdown-menu store\" role=\"menu\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.fileStores : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n    </div>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.showCollapse : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n<div class=\"folder \">\n  "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.hasParent : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "<span title=\""
    + alias3(((helper = (helper = helpers.path || (depth0 != null ? depth0.path : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"path","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.currentDir || (depth0 != null ? depth0.currentDir : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"currentDir","hash":{},"data":data}) : helper)))
    + "/</span>\n</div>\n<div class=\"files-wrapper\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.loading : depth0),{"name":"if","hash":{},"fn":this.program(7, data, 0, blockParams, depths),"inverse":this.program(9, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true,"useDepths":true});

this["JST"]["main/content"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"outer-west\"></div>\n<div class=\"outer-center full-height\">\n  <div class=\"center\"><div id=\"editor\"></div></div>\n  <div class=\"east results\"></div>\n  <div class=\"south\"></div>\n</div>";
},"useData":true});

this["JST"]["main/header"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<span class=\"navbar-brand\">Grails Debug Console</span>\n<p class=\"navbar-text title\"><span></span><i class=\"saving fa fa-refresh fa-spin\" style=\"display: none\"></i></p>\n<form class=\"navbar-form pull-right\">\n    <div class=\"btn-group settings-btn-group\">\n        <button class=\"clear btn-sm btn btn-default dropdown-toggle\" title=\"(Esc)\" data-toggle=\"dropdown\">\n            <i class=\"fa fa-cog\"></i>\n            <span class=\"caret\"></span>\n        </button>\n    </div>\n</form>\n";
},"useData":true});

this["JST"]["main/help-modal"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=this.escapeExpression;

  return "                <tr><td><code>"
    + alias1(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + "</code></td><td>"
    + alias1(this.lambda(depth0, depth0))
    + "</td></tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"modal-content help-section\">\n    <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Help</h4>\n    </div>\n\n    <div class=\"modal-body\">\n        <h4>Implicit variables</h4>\n        <table class=\"table\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.implicitVars : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </table>\n        <h4>Shortcuts</h4>\n        <table class=\"table\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.shortcuts : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </table>\n    </div>\n\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\n    </div>\n</div>\n\n\n";
},"useData":true});

this["JST"]["main/settings"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<li role=\"presentation\" class=\"dropdown-header\">Layout</li>\n<li><a href=\"#\" class=\"setting orientation-horizontal\"><i class=\"fa fa-check\"></i> Horizontal</a></li>\n<li><a href=\"#\" class=\"setting orientation-vertical\"><i class=\"fa fa-check\"></i> Vertical</a></li>\n<li role=\"presentation\" class=\"divider\"></li>\n<li role=\"presentation\" class=\"dropdown-header\">Results Pane</li>\n<li><a href=\"#\" class=\"setting results-wrap\"><i class=\"fa fa-check\"></i> Wrap text</a></li>\n<li><a href=\"#\" class=\"setting show-input\"><i class=\"fa fa-check\"></i> Show input</a></li>\n<li role=\"presentation\" class=\"divider\"></li>\n<li role=\"presentation\" class=\"dropdown-header\">Theme</li>\n<li><a href=\"#\" class=\"setting theme\" data-theme=\"default\"><i class=\"fa fa-check\"></i> Light</a></li>\n<li><a href=\"#\" class=\"setting theme\" data-theme=\"lesser-dark\"><i class=\"fa fa-check\"></i> Dark</a></li>\n<li role=\"presentation\" class=\"divider\"></li>\n<li role=\"presentation\" class=\"dropdown-header\">Editor</li>\n<li><a href=\"#\" class=\"setting auto-import-domains\"><i class=\"fa fa-check\"></i> Auto import domain classes</a></li>\n<li><a href=\"#\" class=\"setting warn-before-exit\"><i class=\"fa fa-check\"></i> Show unsaved changes warning</a></li>\n<li role=\"presentation\" class=\"divider\"></li>\n<li><a href=\"#\" class=\"help\"><i class=\"fa fa-check\"></i> Help</a></li>";
},"useData":true});

this["JST"]["result/result"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "    <div class=\"loading\"><i class=\"fa fa-refresh fa-spin\"></i></div>\n";
},"3":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.input : depth0),{"name":"if","hash":{},"fn":this.program(4, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.output : depth0),{"name":"if","hash":{},"fn":this.program(7, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    <div class=\"result\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.resultTree : depth0),{"name":"if","hash":{},"fn":this.program(9, data, 0, blockParams, depths),"inverse":this.program(11, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.totalTime : depth0),{"name":"if","hash":{},"fn":this.program(13, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n";
},"4":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "      <div class=\"input\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.inputLines : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "      </div>\n";
},"5":function(depth0,helpers,partials,data,blockParams,depths) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "              <div>\n                <div class=\"gutter\">"
    + alias2(alias1((depths[1] != null ? depths[1].inputGutter : depths[1]), depth0))
    + "</div><div class=\"text\">"
    + alias2(alias1(depth0, depth0))
    + "</div>\n              </div>\n";
},"7":function(depth0,helpers,partials,data) {
    var helper;

  return "      <div class=\"output\"><div class=\"text\">"
    + this.escapeExpression(((helper = (helper = helpers.output || (depth0 != null ? depth0.output : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"output","hash":{},"data":data}) : helper)))
    + "</div></div>\n";
},"9":function(depth0,helpers,partials,data) {
    var stack1;

  return "            <div><div class=\"gutter\">≫</div><div class=\"result-text\">"
    + ((stack1 = this.invokePartial(partials.tree,(depth0 != null ? depth0.resultTree : depth0),{"name":"tree","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "</div></div>\n";
},"11":function(depth0,helpers,partials,data) {
    var helper;

  return "            <div class=\"single-line-result\"><div class=\"gutter\">≫</div><div class=\"result-text text\">"
    + this.escapeExpression(((helper = (helper = helpers.result || (depth0 != null ? depth0.result : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"result","hash":{},"data":data}) : helper)))
    + "</div></div>\n";
},"13":function(depth0,helpers,partials,data) {
    var helper;

  return "            <span class=\"pull-right\">["
    + this.escapeExpression(((helper = (helper = helpers.totalTime || (depth0 != null ? depth0.totalTime : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"totalTime","hash":{},"data":data}) : helper)))
    + " ms]</span>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.loading : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.program(3, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true,"useDepths":true});

this["JST"]["result/results"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return this.escapeExpression(this.lambda(depth0, depth0))
    + "\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"btn-toolbar\">\n    <button class=\"clear btn btn-sm btn-default\" title=\"Clear (Esc)\"><i class=\"fa fa-eraser fa-lg\"></i></button>\n\n    <!--<div class=\"btn-group pull-right\">-->\n        <!--<button type=\"button\" class=\"btn btn-sm btn-default dropdown-toggle\" data-toggle=\"dropdown\">-->\n            <!--<span>Session Off</span>-->\n            <!--<span class=\"caret\"></span>-->\n            <!--<span class=\"sr-only\">Toggle Dropdown</span>-->\n        <!--</button>-->\n        <!--<ul class=\"dropdown-menu\" role=\"menu\">-->\n            <!--<li><a href=\"#\" class=\"save-as\">Session On</a></li>-->\n            <!--<li><a href=\"#\" class=\"save-as\">Session Off</a></li>-->\n        <!--</ul>-->\n    <!--</div>-->\n</div>\n\n<div class=\"script-result-section\">\n    <div class=\"floatable\">\n        <div class=\"inner\">\n            <div class=\"script-result welcome\">\n                <div class=\"result wrappable\"><div>Welcome to the Grails Debug Console!\n\n- Execute Groovy code from the editor or inline below.\n- Save/load scripts via the editor toolbar and storage pane.\n- More options available in the settings dropdown.\n\nImplicit variables:\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.implicitVars : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\nKeyboard shortcuts:\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.shortcuts : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div></div>\n            </div>\n        </div>\n        <form class=\"prompt-form\">\n            <div class=\"prompt-inner\">\n                <div class=\"gutter\">&gt;</div>\n                <div class=\"text\"><textarea class=\"prompt form-control\" type=\"text\"></textarea></div>\n            </div>\n        </form>\n    </div>\n</div>";
},"useData":true});

this["JST"]["result/tree"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "        <div class=\"toggle\"><div class=\"gutter\"></div><span class=\"wrappable\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + ": "
    + alias3(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + "</span></div>\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "        <div class=\"toggle\"><div class=\"gutter\">"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.children : depth0),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div><span class=\"wrappable\">"
    + this.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span></div>\n";
},"4":function(depth0,helpers,partials,data) {
    return "<span><i class=\"fa fa-caret-right\"></i><i class=\"fa fa-caret-down\"></i></span>";
},"6":function(depth0,helpers,partials,data) {
    var stack1;

  return "        <ul>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.children : depth0),{"name":"each","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n";
},"7":function(depth0,helpers,partials,data) {
    var stack1;

  return "                <li>\n"
    + ((stack1 = this.invokePartial(partials.tree,depth0,{"name":"tree","data":data,"indent":"                    ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "                </li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"tree-item\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.value : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.children : depth0),{"name":"if","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"usePartial":true,"useData":true});