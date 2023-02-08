let instance;

class MyBadSingleton {
	constructor() {
		this.randomNumber = Math.random();
		instance = this;

		return instance;
	}

	getRandomNumber() {
		return this.randomNumber;
	}
}

export default MyBadSingleton;
