(function() {
	"use strict";

	var app = angular.module("app", [
		"app.controllers",
		"app.services",
		"app.directives",
		"app.filters"
	]);

	app.constant("apiUrl", "http://localhost/api");

	angular.module("app.controllers", []);
	angular.module("app.services", []);
	angular.module("app.directives", []);
	angular.module("app.filters", []);
})();