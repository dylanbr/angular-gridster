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
		return function GridsterDebounce(func, wait, immediate) {
			var timeout;
			return function() {
				var context = this,
					args = arguments;
				var later = function() {
					timeout = null;
					if (!immediate) {
						func.apply(context, args);
					}
				};
				var callNow = immediate && !timeout;
				clearTimeout(timeout);
				timeout = setTimeout(later, wait);
				if (callNow) {
					func.apply(context, args);
				}
			};
		};
	}
}))

