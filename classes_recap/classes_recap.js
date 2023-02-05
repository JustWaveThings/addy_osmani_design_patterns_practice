// car 'class' - really just a constructor function

function Car(model) {
	this.model = model;
	this.color = 'silver';
	this.year = '2022';
}

//prototype is great because there is only one method shared across all instances, instead of having a new copy every time we create a new object
Car.prototype.getInfo = function () {
	return `${this.model} ${this.year}`;
};

const nova = new Car('Nova');
nova.year = '2024';

console.log(nova.getInfo());

// same thing with class syntax es2015

class AnotherCar {
	constructor(model) {
		this.model = model;
		this.color = 'blue';
		this.year = '1989';
	}

	getInfo() {
		return `${this.model} ${this.year}`;
	}
}

const pinto = new AnotherCar('Pinto');
console.log(pinto.getInfo());

// this is all review but, good nonetheless

// 3 ways to create objects

const newObject = {}; // object literal
const newerObject = Object.create(Object.prototype); // using Object.create and assigning it to the main Object (window in browser, if not mistaken)
const newNewerObject = new Object(); // new keyword - creates a wrapper for specific value or an empty object if nothing passed to it.

// four ways keys and values can be assigned to an object

// dot syntax  - set and get properties  - well.

newObject.someKey = 'HelloWorld';

const value = newObject.someKey;
console.log(value);

/* // 2. Square bracket syntax

// Set properties
newObject['Some Key'] = 'Hello World';

// Get properties
const value = newObject['Some Key']; */

//Object.defineProperty -- not one I've used much

// set properties

Object.defineProperty(newObject, 'anotherKey', {
	value: "for more control of property's behavior",
	writable: true,
	enumerable: true,
	configurable: true,
});

console.log(newObject.anotherKey); // for more control of the property's behavior

// OR shorthand

const defineProp = (obj, key, value) => {
	const config = {
		value: value,
		writable: true,
		enumerable: true,
		configurable: true,
	};
	Object.defineProperty(obj, key, config);
};

// to use, create a new empty object

const person = Object.create(Object.prototype);

// then populate the object with properties

defineProp(person, 'car', 'Delorean');
defineProp(person, 'DOB', 1989);
defineProp(person, 'hasBeard', true);

console.log({ person }); // output - { person: { car: 'Delorean', DOB: 1989, hasBeard: true } }

// 4th method  - Object.defineProperties

// set properties

Object.defineProperties(newObject, {
	thirdKey: {
		value: 'another hello to the world',
		writable: true,
		enumerable: true,
	},

	forthKey: {
		value: 'Foo the bar',
		writable: false,
		enumerable: true,
	},
});

console.log({ newObject });

// now, a short review on inheritance

// create a race car driver that inherits from person object

const driver = Object.create(person);

// set properties for the driver

defineProp(driver, 'topSpeed', '100mph'); // love this helper!!!!

// get an inherited property (dob)

console.log(driver.DOB); // 1989 - inherited from person objecct
console.log(driver.topSpeed); // because it exists in the object, it doesn't need to go up the prototype chain - 100mph

// basic constructors  --- allow for class to define templates for js object -- implementing encapsulation and inheritance

class FastCar {
	constructor(model, year, miles) {
		this.model = model;
		this.year = year;
		this.miles = miles;
	}

	toString() {
		return `${this.model} has done ${this.miles} miles.`;
	}
}

//usage

let civic = new FastCar('Honda Civic', 1998, 200000);
let mondeo = new FastCar('Ford Mondeo', 2010, 2000);

console.log(civic.toString(), mondeo.toString()); //Honda Civic has done 200000 miles. Ford Mondeo has done 2000 miles.

// constructors with prototypes

class VeryFastCar {
	constructor(model, year, miles) {
		this.model = model;
		this.year = year;
		this.miles = miles;
	}
}

// again the benefit to 'Object.prototype.method' is the one instance is shared acroos all VeryFastCar objects

VeryFastCar.prototype.toString = function () {
	return `${this.model} has done ${this.miles} miles.`;
};

VeryFastCar.prototype.stringToUppercase = function () {
	return `${this.model} has done ${this.miles} miles.`.toUpperCase();
};

let civic2 = new VeryFastCar('Honda Civic', 1998, 200000);
let mondeo2 = new VeryFastCar('Ford Mondeo', 2010, 2000);

console.log(civic2.stringToUppercase(), mondeo2.stringToUppercase()); // same output as above, just in all caps
