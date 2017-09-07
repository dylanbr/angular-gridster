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

	return function() {
		return {
			restrict: 'A',
			link: function(scope, $element) {
				$element.addClass('gridster-no-drag');
			}
		};
	}
}))

