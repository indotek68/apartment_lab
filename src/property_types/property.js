function Property(address) {
  this.address = address;
  this.units = [];
  this.manager = {};
  this.managerSet = false;
  this.maxUnit = 0;
}

Property.prototype.setManager = function(person) {
  // set this.manager to person
  //if(person.constructor === Manager){
    this.manager = person;
    this.managerSet = true;
  //}
};

Property.prototype.getManager = function(){
  // return this.manager 
  return this.manager
};

Property.prototype.addTenant = function(unit, tenant) {
  // add tenant but check to make sure there
  // is a manager first and a tenant has 2 references
  if(this.manager === true && tenant.references.length >= 2){
    unit.tenant = tenant;
  }
};

Property.prototype.removeTenant = function(unit, tenant) {
  // remove tenant
  unit.tenant = {};
};

Property.prototype.availableUnits = function(){
  // return num of units available
  num = this.maxUnits - this.units.length
  return num;
}

Property.prototype.rentedUnits = function(){
  // return rented units
  rentedUnit = this.units.length
  return rentedUnit
}


module.exports = Property;
