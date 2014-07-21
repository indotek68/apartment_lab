function Property(address) {
  this.address = address;
  this.units = [];
  this.manager = {};
  this.managerSet = false;
  this.available = 0;
  this.rented = 0;

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
  if(this.managerSet === true && tenant.references.length >= 2){
    return unit.tenant = tenant;
  }
};

Property.prototype.addUnit = function(unit) {
  // add units
  this.units.push(unit);
};

Property.prototype.removeTenant = function(unit, tenant) {
  // remove tenant
  if(unit.tenant === tenant){
    unit.tenant = null;
  }
};

Property.prototype.availableUnits = function(){
  // return num of units available
  if(this.units.length === undefined){
    alert("You have not added any units")
  }
  else{
    for (var i = 0; i < this.units.length; i++) {
      if(this.units[i].tenant === null){
        this.available += 1;
      }
      console.log(this.units[i])
    };
    return this.available;
  }
}

Property.prototype.rentedUnits = function(){
  // return rented units
  for (var i = 0; i < this.units.length; i++) {
      if(this.units[i].tenant !== null){
        this.rented += 1;
      }
    return this.rented;
  };
}

module.exports = Property;
