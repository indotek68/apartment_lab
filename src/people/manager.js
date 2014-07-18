var Person = require("./person");
var inherits = require("../inherits.js")

function Manager(name, contact) {
	// set name and contact
	this.name = name;
	this.contact = contact;

	this.properties = [];
}

inherits(Manager, Person);

Manager.prototype.addProperty = function(property) {
	// add property from properties
	this.properties.push(property);
};

Manager.prototype.removeProperty = function(property) {
	// remove properties
	for (var i = 0; i < this.properties.length; i++) {
		if (this.properties[i] === property){
			this.properties.splice(i , 1);
		}
	};
};

module.exports = Manager;