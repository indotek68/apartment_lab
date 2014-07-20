function Person(name, contact){
  this.name = name;
  this.contact = contact;
  //this.salutation = "Person";
};

Person.prototype.sal = function() {
	// add property from properties
	return this.salutation;
};
	
Person.prototype.greeting = function() {
	// add property from properties
	this.salutation = "Hello " + this.name;
	//console.log("Hello" + this.name);
	//return this.salutation;
};

module.exports = Person;