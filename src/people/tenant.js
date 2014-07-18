var Person = require("./person.js");
var inherits = require("../inherits.js")

function Tenant(name, contact) {
  // set this.name, and contact
  this.name = name;
  this.contact = contact;

  this.references = [];
};

inherits(Tenant, Person);

Tenant.prototype.addReference = function(reference){
  // add reference to references
  if(reference.constructor === Person){
    this.references.push(reference)
  } 
};

module.exports = Tenant;
