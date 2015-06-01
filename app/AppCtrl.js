(function() {
	"use strict";

	angular.module("app.controllers")

	.controller("AppCtrl", ["$scope", "$location", "AppService", function( $scope, $location, AppService ) {

		AppService.getUser( $location.search().userId ).then(function( user ) {
			$scope.user = user;
		});

		$scope.clearUser = function() {
			$scope.user = undefined;
		};

	}]);
})();