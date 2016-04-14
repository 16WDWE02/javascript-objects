// var michael = {
// 	name: "Michael Jones",
// 	age: 33,
// 	greet: function(){
// 		console.log("Hello, my name is "+this.name);
// 	}
// };

// var jessica = {
// 	name: "Jessica Jones",
// 	age: 41,
// 	greet: function(){
// 		console.log("Hi, I am "+this.name);
// 	}
// };

// michael.greet();
// jessica.greet();

function Person(newName) {
	this.age = 0;
	this.name = newName;
	this.maxStomachCapacity = 5;
	this.currentStomachCapacity = 0;


	this.sleep = function() {
		console.log(this.name+" is now sleeping");
	}

	this.eat = function() {
		console.log(this.name+" is now eating");

		this.currentStomachCapacity += 1;

		// Make sure this person hasn't over eaten
		if(this.currentStomachCapacity == this.maxStomachCapacity) {
			console.log(this.name + " is now full");
		} else if(this.currentStomachCapacity > this.maxStomachCapacity) {
			this.currentStomachCapacity -= 3;
			console.log(this.name + " has thrown up. Blegh");
		}
	}
}

var joe = new Person("Joe Dirt");
var mike = new Person("Mike Tyson");

// joe.sleep();

console.log(joe.currentStomachCapacity);

joe.eat();
joe.eat();
joe.eat();
joe.eat();
joe.eat();
joe.eat();
joe.eat();
joe.eat();
joe.eat();

console.log(joe.currentStomachCapacity);











