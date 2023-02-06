import basketModule from './module_pat3b.js';

// basketModule returns an object with a public API we can use

basketModule.addItem({
	item: 'bread',
	price: 0.5,
});

basketModule.addItem({
	item: 'butter',
	price: 0.9,
});

console.log(basketModule.getItemCount()); // 2

console.log(basketModule.getTotal()); // 1.4

// this won't work
console.log(basketModule.basket); // undefined

console.log(basket); //This also won't work as it only exists within the scope of our basketModule closure, but not in the returned public object
