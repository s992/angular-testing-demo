(function() {
	"use strict";

	angular.module("app.filters")

	.filter("truncate", function() {
		return function( value, maxLength ) {
			if( value.length <= maxLength ) {
				return value;
			}

			return value.substr( 0, maxLength ) + "...";
		};
	});
})();