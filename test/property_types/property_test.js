var expect = require("chai").expect;
var app = require("../../src/main.js");

console.log("Write some test for Property...");


describe("Property", function(){
	describe("#setManager", function(){
		var property = new app.Property("address")
		property.setManager("Angga")
		it("should set manager to Angga", function(){
			expect(property.manager).to.eql("Angga")
		})
		
		it("should return managerSet to true", function(){
		property.setManager("Angga")
			expect(property.managerSet).to.eql(true);
		})
	})
});