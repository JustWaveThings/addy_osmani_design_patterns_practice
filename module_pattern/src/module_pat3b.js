// privates

const basket = [];

const doSomethingPrivate = () => {
	console.log('the light is green.');
};

const doSomethingElsePrivate = () => {
	console.log(
		'but is the light really green, or is that just your perception of it, man?'
	);
};

// create public object

const basketModule = {
	// add items to basket
	addItem(values) {
		basket.push(values);
	},
	//get count of items in basket
	getItemCount() {
		return basket.length;
	},
	//public alias to a private function
	doSomethingPublic() {
		doSomethingPrivate();
		doSomethingElsePrivate();
	},
	//get total value of items in basket
	getTotal() {
		return basket.reduce(
			(currentSum, item) => item.price + currentSum,
			0
		);
	},
};

export default basketModule;
