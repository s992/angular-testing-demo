describe("AppCtrl", function() {

	var initController,
		scope,
		locationMock,
		appServiceMock;

	beforeEach(function() {
		module("app.controllers", function( $provide ) {});

		inject(function( $injector ) {
			var $controller = $injector.get("$controller"),
				$q = $injector.get("$q");

			scope = $injector.get("$rootScope").$new();
			locationMock = jasmine.createSpyObj("locationMock", ["search"]);
			appServiceMock = jasmine.createSpyObj("appServiceMock", ["getUser"]);

			locationMock.search.and.returnValue({ userId: 123 });
			appServiceMock.getUser.and.returnValue($q.when({ id: 123, name: "Sean" }));

			initController = function() {
				return $controller("AppCtrl", {
					"$scope": scope,
					"$location": locationMock,
					"AppService": appServiceMock
				});
			};

			initController();
		});
	});

	describe("init", function() {

		it("should ask AppService for a user record", function() {
			expect( appServiceMock.getUser ).toHaveBeenCalledWith( 123 );
		});

		it("should populate scope.user with the result of AppService.getUser", function() {
			scope.$apply();
			expect( scope.user ).toEqual({ id: 123, name: "Sean" });
		});

	});

	describe("clearUser", function() {

		beforeEach(function() {
			scope.user = { id: 123, name: "Sean" };
			scope.clearUser();
		});

		it("should clear the currently loaded user", function() {
			expect( scope.user ).not.toBeDefined();
		});

	});

});