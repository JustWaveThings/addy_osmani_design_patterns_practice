const myPrivateVar = new WeakMap();
const myPrivateMethod = new WeakMap();

class MyNamespace {
	constructor() {
		// private counter variable
		myPrivateVar.set(this, 0);
		// private function which logs any arguments
		myPrivateMethod.set(this, (foo) => console.log(foo));
		// public variable
		this.myPublicVar = 'foo';
	}

	// public function utilizing privates
	myPublicFunction(bar) {
		let privateVar = myPrivateVar.get(this);
		const privateMethod = myPrivateMethod.get(this);
		// increment private counter
		privateVar += 1;
		console.log({ privateVar });
		myPrivateVar.set(this, privateVar);
		privateMethod(bar);
	}
}
const testModule2 = new MyNamespace();
const testModule = new MyNamespace();

testModule.myPublicFunction(10000);
testModule.myPublicFunction(10000);
testModule.myPublicFunction(10000);
testModule.myPublicFunction(10000);
testModule2.myPublicFunction(10000);
testModule2.myPublicFunction(10000);
testModule.myPublicFunction(10000);

// this is interesting
