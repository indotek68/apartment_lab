var expect = require("chai").expect;
var app = require("../../src/main.js");

describe("Tenant", function(){
  describe("#addReference", function(){
  	var reference = new app.Person("test1" , "test2");
  	var tenant = new app.Tenant();
      it("should add references", function(){
        tenant.addReference(reference);
        expect(tenant.references).to.eql([reference]);
      })
  })
})

// describe("Property", function(){
// 	describe("#setManager", function(){
// 		var manager = new Property(person)
// 		it
// 	})
// })