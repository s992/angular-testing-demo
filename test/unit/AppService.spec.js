describe("AppService", function() {

	var service,
		$httpBackend;

	beforeEach(function() {
		module("app.services", function( $provide ) {
			$provide.value( "apiUrl", "api" );
		});

		inject(function( $injector ) {
			$httpBackend = $injector.get("$httpBackend");
			service = $injector.get("AppService");
		});
	});

	afterEach(function() {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});

	describe("getUser", function() {

		beforeEach(function() {
			$httpBackend.expectGET("api/user/123").respond(200, { id: 123, name: "Sean" });
		});

		it("should make a request to apiUrl/user/userId", function() {
			service.getUser( 123 );
			$httpBackend.flush();
		});

		it("should return return a promise that resolves to a user profile", function() {
			service.getUser( 123 ).then(function( data ) {
				expect( data.id ).toBe( 123 );
				expect( data.name ).toBe( "Sean" );
			});

			$httpBackend.flush();
		});

	});

});