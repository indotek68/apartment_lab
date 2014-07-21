var expect = require("chai").expect;
var app = require("../../src/main.js");

// describe("Unit", function(){
// 	var unit1 = new app.Unit("1","Fox Plaza", "450sq.ft.", "$1200");

// 	it("should return unit objects: 1, Fox Plaza, 450sq.ft., $1200", function (){

// 	expect(unit1.tenant).to.eql(null);
// 	expect(unit1.number).to.eql("1");
// 	expect(unit1.building).to.eql("Fox Plaza");
// 	expect(unit1.sqft).to.eql("450sq.ft.");
// 	expect(unit1.rent).to.eql("$1200");
// 	});

// 	describe("#available", function(){
// 		it("should return Unit is occupied", function(){
// 			unit1.addTenant();
			
// 		expect(unit1.available).to.eql("Unit is occupied")
// 		})
// 	});
// });