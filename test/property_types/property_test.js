var expect = require("chai").expect;
var app = require("../../src/main.js");

console.log("Write some test for Property...");


describe("Property", function(){
		var steph = new app.Person("Steph", "123-543-7790");
		var alli = new app.Person("Alli", "123-543-7791");
		var steve = new app.Tenant("Steve", "754-780-3423");
		var angga = new app.Manager("Angga", "123-234-5452");
		
		var property = new app.Property("123 Main St.");
		var unit1 = new app.Unit("1","Fox Plaza", "450sq.ft.", "$1200")


	describe("#setManager", function(){
		// var property = new app.Property("123 Main St.");
		property.setManager(angga)
		it("should set manager to Angga", function(){
			expect(property.manager).to.eql(angga)
		})
		
		it("should return managerSet to true", function(){
		// var property = new app.Property("123 Main St.");
		property.setManager(angga)
			expect(property.managerSet).to.eql(true);
		})
	})

	describe("#addTenant", function(){
		steve.addReference(steph);
		steve.addReference(alli)
		property.setManager(angga);
		property.addTenant(unit1, steve);
		it("should add Tenant Steve", function(){
			expect(unit1.tenant).to.eql(steve)
		})
	})

	
});