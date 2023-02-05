let counter = 0;

const testModule = {
	incrementCounter() {
		return (counter += 1);
	},
	resetCounter() {
		console.log(`Counter value prior to reset was ${counter}.`);
		counter = 0;
	},
};

export default testModule;
