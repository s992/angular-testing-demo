require("../../app/app");
require("../../app/AppFilter");

describe("AppFilter", function() {

	var filter;

	beforeEach(function() {
		angular.mock.module("app.filters", function( $provide ) {});

		inject(function( $filter ) {
			filter = $filter;
		});
	});

	it("should return the value untouched if length is less than max length", function() {
		var result = filter("truncate")( "short string", 30 );
		expect( result ).toBe( "short string" );
	});

	it("should return the value untouched if length is equal to max length", function() {
		var result = filter("truncate")( "exactly thirty characters long", 30 );
		expect( result ).toBe( "exactly thirty characters long" );
	});

	it("should truncate the value to max length and append an ellipsis", function() {
		var result = filter("truncate")( "i am a string that exceeds thirty characters", 30 );
		expect( result ).toBe( "i am a string that exceeds thi..." );
	});

});