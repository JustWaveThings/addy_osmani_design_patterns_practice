// shopping basket integration

const basket = new WeakMap();
const doSomethingPrivate = new WeakMap();
const doSomethingElsePrivate = new WeakMap();

class BasketModule {
	constructor() {
		// privates  - all held within constructor function
		basket.set(this, []);
		doSomethingPrivate.set(this, () => {
			console.log('cherry is the finest of the flavors');
		});
		doSomethingElsePrivate.set(this, () => {
			console.log('I like vanilla, though.');
		});
	}
	// these are the public aliaes to private function
	doSomething() {
		doSomethingPrivate.get(this)();
	}
	doSomethingElse() {
		doSomethingElsePrivate.get(this)();
	}

	// add items to basket

	addItem(values) {
		const basketData = basket.get(this);
		basketData.push(values);
		basket.set(this, basketData);
	}
	// get count of items in basket
	getItemCount() {
		return basket.get(this).length;
	}
	// get tota value of items in basket
	getTotal() {
		return basket
			.get(this)
			.reduce((currSum, item) => item.price + currSum, 0);
	}
}

const myStore = new BasketModule();

myStore.addItem({ item: 'diamond', price: 105 });
myStore.addItem({ item: 'ruby', price: 115 });
myStore.addItem({ test: 'coal', price: 105 });
console.log(myStore.basket); // undefined - was checking to confirm it was private
console.log(myStore.getItemCount()); // 3
console.log(myStore.basket); // still undefined

myStore.doSomething();
console.log(myStore.getTotal());
