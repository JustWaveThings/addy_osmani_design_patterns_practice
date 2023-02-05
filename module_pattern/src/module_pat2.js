// private counter variable

let myPrivateVar = 0;
const myPrivateMethod = (foo) => {
	console.log(foo);
};

const myNamespace = {
	// public variable
	myPublicVar: 'foo',

	// public function utilizing privates
	myPublicFunction(bar) {
		//increment private counter
		myPrivateVar += 1;
		console.log(myPrivateVar); // just to prove to myself that it was incrementing the variable...

		// call our private method using bar
		myPrivateMethod(bar);
	},
};

export default myNamespace;
