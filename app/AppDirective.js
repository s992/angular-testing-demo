(function() {
	"use strict";

	angular.module("app.directives")

	.directive("header", function() {
		return {
			restrict: "E",
			scope: {
				text: "@"
			},
			template: "<h1>{{ text }}</h1>"
		};
	}]);
});