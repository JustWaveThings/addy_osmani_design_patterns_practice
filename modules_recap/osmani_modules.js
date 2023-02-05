const myModule = {
	myProperty: 'someValue',
	// obj literals can contain properties AND methods... this below alows for module configuration
	myConfig: {
		useCaching: true,
		language: 'en',
	},
	// basic method
	saySomething() {
		console.log('Where oh where is Paul Irish Today?');
	},
	// ouput value based on current config
	reportMyConfig() {
		console.log(
			`Caching is: ${
				this.myConfig.useCaching ? 'enabled' : 'disabled'
			}`
		);
	},
	//override current config
	updateMyConfig(newConfig) {
		if (typeof newConfig === 'object') {
			this.myConfig = newConfig;
			console.log(this.myConfig.language);
		}
	},
};

myModule.saySomething(); //Where oh where is Paul Irish Today?

myModule.reportMyConfig(); // Caching is: enabled

myModule.updateMyConfig({
	language: 'fr',
	useCaching: false,
});

myModule.reportMyConfig(); // Caching is: disabled

//////// module pattern ////////////

let counter = 0;

const testModule = {
	incrementCounter() {
		return (counter += 1);
	},
	resetCounter() {
		console.log(`counter value prior to reset: ${counter}`);
		counter = 0;
	},
};

export default testModule;
