var expect = require("chai").expect;
var Person = require("../../src/people/person.js");
var Manager = require("../../src/people/manager.js");
var Tenant = require("../../src/people/tenant.js");

describe("Tenant", function(){
  describe("#addReference", function(){
  	var reference = new Person("test1" , "test2")
  	var tenant = new Tenant();
      it("should add Bill to references", function(){
        tenant.addReference(reference);
        expect(tenant.references).to.eql([reference]);
      })
  })
})