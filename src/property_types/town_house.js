var Property = require("./property");

function TownHouse(address){
  // only has one unit per address
  this.address = [1];

  //this.address = address
};

TownHouse.prototype.available = function(){
  // a tenant it should not be available
  if (tenant === 1)

};

module.exports = TownHouse;
