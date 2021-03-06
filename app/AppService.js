(function() {
	"use strict";

	angular.module("app.services")

	.factory("AppService", ["$http", "apiUrl", function( $http, apiUrl ) {
		var service = {};

		service.getUser = function( userId ) {
			return $http.get( apiUrl + "/user/" + userId ).then(function( result ) {
				return result.data;
			});
		};

		return service;
	}]);
})();