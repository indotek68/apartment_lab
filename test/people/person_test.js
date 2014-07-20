var expect = require("chai").expect;
var app = require("../../src/main.js");

console.log("running some person test")

describe("Person", function(){
	var person1 = new app.Person("Angga", "123-456-7890");
  	
  	it("should have name of Angga & contact 123-456-7890", function(){
  	
  	expect(person1.name).to.equal("Angga");
  	expect(person1.contact).to.equal("123-456-7890");
  });
});

describe("Tenant", function(){
	var tenant = new app.Tenant("Alli", "324-423-4324");
  	var reference = new app.Person("test1" , "test2");

  	it("should have tenant Alli and contact 324-423-4324", function(){

  	expect(tenant.name).to.eql("Alli");
  	expect(tenant.contact).to.equal("324-423-4324")
	})

  	describe("#addReference", function(){
    	it("should add references to array", function(){
        	tenant.addReference(reference);
        	expect(tenant.references).to.eql([reference]);
    	})
    })
});

describe("Manager", function(){
  	var managerBob = new app.Manager("Bob", "123-456-7890");

  	it("should set manager name to Bob and contact 123-456-7890", function(){
 
  	expect(managerBob.name).to.eql("Bob");
  	expect(managerBob.contact).to.eql("123-456-7890")
  	})


	describe("#addProperty", function(){
	    it("push a property to properties array", function(){
	      managerBob.addProperty("fox plaza");
	      managerBob.addProperty("NEMA");
	      expect(managerBob.properties).to.eql(["fox plaza", "NEMA"]);
	    })
	})

	describe("#removeProperty", function(){
	    it("removes a property from properties array", function(){
	      managerBob.removeProperty("fox plaza");
	      expect(managerBob.properties).to.eql(["NEMA"]);
	    })
	})
});








