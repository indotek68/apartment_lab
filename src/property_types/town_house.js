var Property = require("./property");

function TownHouse(address){
  // only has one unit per address
 	this.address = address
 	this.unit.tenant = null;
};

TownHouse.prototype.available = function(){
//   // a tenant it should not be available
  	if(this.unit.tenant > 1){
  		return "this unit is available";
  	}
  	else{
  		return "this unit is not available";
  	}
};

// var townHouse1 = new TownHouse("1333 Main. St")
// townhouse1.addUnit()

module.exports = TownHouse;
