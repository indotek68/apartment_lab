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
		var unit2 = new app.Unit("2","Fox Plaza", "450sq.ft.", "$1300")
		var apartment = new app.ApartmentBuilding("Fox Plaza", "1390 Market St.")

	describe("#setManager", function(){
		// var property = new app.Property("123 Main St.");
		it("should set manager to Angga", function(){
		property.setManager(angga)
			expect(property.manager).to.eql(angga)
		})
		
		it("should return managerSet to true", function(){
		// var property = new app.Property("123 Main St.");
		property.setManager(angga)
		
		expect(property.managerSet).to.eql(true);
		})
	});

	describe("#addTenant", function(){
		it("should add Tenant Steve", function(){
		steve.addReference(steph);
		steve.addReference(alli)
		property.setManager(angga);
		property.addTenant(unit1, steve);
			
		expect(unit1.tenant).to.eql(steve)
		})
	});

	describe("#removeTenant", function(){
		it("should remove Tenant Steve", function(){
		steve.addReference(steph);
		steve.addReference(alli)
		property.setManager(angga);
		property.addTenant(unit1, steve);
		property.removeTenant(unit1, steve)
		
		expect(unit1.tenant).to.eql(null)
		})
	});

	describe("#availableUnits", function(){
		it("should should show # of available units", function(){
		apartment.addUnit(unit1);
		apartment.addUnit(unit2);
		property.availableUnits();
		
		expect(property.available).to.eql(2)
		})
	})

});