let instance;
class Singleton {
	constructor(options = {}) {
		this.name = 'SingletonTester';
		this.pointX = options.pointX || 6;
		this.pointY = options.pointY || 20;
	}

	static getInstance(options) {
		if (instance === undefined) {
			instance = new Singleton(options);
		}
		return instance;
	}
}

const test = Singleton.getInstance({ pointX: 5 });
console.log(test.pointX);

class SubSingleton extends Singleton {
	constructor(options = {}) {
		super(options);
		this.color = options.color || 'blue';
	}
}

const subTest = new SubSingleton({
	pointX: 10,
	color: 'navyMarine',
});
console.log({ subTest });
