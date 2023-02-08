// options: an object containing configuration optionsfor the singleton
// eg const options = { name: 'Test', pointX: 5 };

class Singleton {
	constructor(options = {}) {
		this.name = 'SingletonTester';
		this.pointX = options.pointX || 6;
		this.pointY = options.pointY || 20;
	}
}

// holds the instance of the singleton
let instance;

// emulation of static variables and methods

const SingletonTester = {
	name: 'SingletonTester',
	// method for getting an instance. it returns a singleton instance of a singleton object
	getInstance(options) {
		if (instance === undefined) {
			instance = new Singleton(options);
		}
		return instance;
	},
};

//const singletonTest = SingletonTester.getInstance({ pointX: 5 });
//const singletonTest2 = SingletonTester.getInstance({ pointX: 10 });

const mySingleton = SingletonTester.getInstance({
	pointX: 50,
	pointY: 200,
});

const alsoSingleton = SingletonTester.getInstance({ pointX: 62 });

console.log(alsoSingleton.pointX);
console.log(mySingleton.pointX); //5
console.log(mySingleton.pointY); //20
