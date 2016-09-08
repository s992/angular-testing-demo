require("../../app/app");
require("../../app/AppDirective");

describe("Header", function() {

	var element,
		scope,
		$compile;

	beforeEach(function() {
		angular.mock.module("app.directives", function( $provide ) {});

		inject(function( $injector ) {
			scope = $injector.get("$rootScope").$new();
			$compile = $injector.get("$compile");

			element = angular.element("<header text='headerText'></header>");
			scope.headerText = "Hello!";
			$compile( element )( scope );
			scope.$apply();
		});
	});

	it("should match the snapshot", function() {
		expect( element.html() ).toMatchSnapshot();
	});

	it("should create an h1 element", function() {
		expect( element.children("h1") ).toBeDefined();
	});

	it("should insert the text into the h1 tag", function() {
		expect( element.children("h1").text() ).toBe("Hello!");
	});

});