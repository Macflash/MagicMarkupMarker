const {Cu} = require("chrome");
const {TextEncoder, TextDecoder, OS} = Cu.import("resource://gre/modules/osfile.jsm", {});
var { ToggleButton } = require('sdk/ui/button/toggle');
var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var pageMod = require("sdk/page-mod");
var data = require("sdk/self").data;

var start_h = 400;

// Initialize our ui panel object
var panel = require("sdk/panel").Panel({
  width: 400,
  height: start_h,
  contentURL: data.url("panel.html"),
  contentScriptFile: data.url("panel.js"),
  onHide: function() { button.state('window', {checked: false}); }
});

// Create the browser add on button
var button = ToggleButton({
  id: "password-manager",
  label: "Mmm! Magic Markup Marker",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png" },
	onChange: function(state) {
		if (state.checked) {
    		  panel.show({
      		    position: button
   		  });
  		}
	}
});

var pageworker;
pageMod.PageMod({
  include: "*",
  contentScriptFile: data.url("page.js"),
  contentScriptWhen: "end"
});