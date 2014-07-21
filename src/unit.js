function Unit (number, building, sqft, rent) {
  // set params above using this
  this.tenant = null;
  this.number = number;
  this.building = building;
  this.sqft = sqft;
  this.rent = rent;
}

// Unit.prototype.available = function(){
//   // check for tenant
//   if(this.tenant != null){
//   	return "Unit is occupied"
//   }
// }


module.exports = Unit;