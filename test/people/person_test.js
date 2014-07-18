var expect = require("chai").expect,
  Person = require("../../src/people/person.js"),
  Manager = require("../../src/people/manager.js"),
  Tenant = require("../../src/people/tenant.js");

console.log("running some person test")

describe("Person", function(){
  var name = new Person("Angga", "123-456-7890");

  it("should do something", function(){
  	expect(true).to.equal(false);
  });
});

// describe("Tenant", function(){
//   var tenant = new Tenant();
//   var reference = new Person("test1" , "test2")

//   describe("#addReference", function(){
//       it("should add Bill to references", function(){
//         tenant.addReference(reference);
//         expect(tenant.references).to.eql([reference]);
//       })
//   })
// })

// describe("Manager", function(){
//   var apt = new Manager("Angga", "123-456-7890");

// 	describe("#addProperty", function(){
//     it("push a property to properties array", function(){
//       apt.addProperty("fox plaza");
//       expect(apt.properties).to.eql(["fox plaza"]);
//     })
// 	})
// })