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
			property.setManager(angga);
		expect(property.manager).to.eql(angga);
		})
		
		it("should return managerSet to true", function(){
		// var property = new app.Property("123 Main St.");
			property.setManager(angga);
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

	describe("#addUnit", function(){
		it("should add two units to ApartmentBuilding", function(){
			property.addUnit(unit1);
			property.addUnit(unit2);
		expect(property.units).to.eql([unit1, unit2])
		});
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
			//property.addUnit(unit1);
			//property.addUnit(unit2);
			property.availableUnits();
		//expect(property.availableUnits()).to.eql(2)
		expect(property.available).to.eql(2)
		});
	});

	describe("#rentedUnits", function(){
		it("should provide how many units are rented", function(){
			property.addUnit(unit1);
			property.addUnit(unit2);
			property.addTenant(unit1, steve);
			property.rentedUnits();
		expect(property.rented).to.eql(1);
		})
	});
});

describe("Unit", function(){
	var unit1 = new app.Unit("1","Fox Plaza", "450sq.ft.", "$1200");
	var property = new app.Property("123 Main St.");

	it("should return unit objects: 1, Fox Plaza, 450sq.ft., $1200", function (){

	expect(unit1.tenant).to.eql(null);
	expect(unit1.number).to.eql("1");
	expect(unit1.building).to.eql("Fox Plaza");
	expect(unit1.sqft).to.eql("450sq.ft.");
	expect(unit1.rent).to.eql("$1200");
	});

	
});