// instance stores refercen to the singelton
let instance;

// private methods and variables

const privateMethod = () => {
	console.log('I am private');
};
const privateVariable = 'Im also private';
const randomNumber = Math.random();

//Singleton

class MySingleton {
	// get the singleton instance if one exists, or create one if it doesn't

	// the constructor is where the magic happens -- checking for the instance and making it if it doesn't exist but only once.
	constructor() {
		if (!instance) {
			//public property
			this.publicProperty = 'I am also public';
			instance = this;
		}
		return instance;
	}

	// public methods
	publicMethod() {
		console.log('The public can see me!');
		console.log(this.publicProperty);
	}

	getRandomNumber() {
		return randomNumber;
	}
}

export default MySingleton;
