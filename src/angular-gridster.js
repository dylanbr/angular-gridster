/*global define:true*/
(function(root, factory) {

	'use strict';

	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['angular'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		module.exports = factory(require('angular'));
	} else {
		// Browser, nothing "exported". Only registered as a module with angular.
		factory(root.angular);
	}
}(this, function(angular) {

	'use strict';

	// This returned angular module 'gridster' is what is exported.
	return angular.module('gridster', [])

	.constant('gridsterConfig', require("./config.js"))

	.controller('GridsterCtrl', require("./controller.js"))
	.controller('GridsterItemCtrl', require("./controller.item.js"))

	.directive('gridster', require("./directive.js"))
	.directive('gridsterItem', require("./directive.item.js"))
	.directive('gridsterPreview', require("./directive.preview.js"))
	.directive('gridsterNoDrag', require("./directive.no-drag.js"))

	.factory('GridsterTouch', require("./factory.touch.js"))
	.factory('GridsterDraggable', require("./factory.draggable.js"))
	.factory('GridsterResizable', require("./factory.resizable.js"))
	.factory('gridsterDebounce', require("./factory.debounce.js"))

	;

}));
