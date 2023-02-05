class Cake {
	constructor(name, toppings, price, cakeSize) {
		this.name = name;
		this.toppings = toppings;
		this.price = price;
		this.cakeSize = cakeSize;
	}

	// notice reduction of the use of 'function' keyword
	addTopping(topping) {
		this.toppings.push(topping);
	}
	// getters
	get allToppings() {
		return this.toppings;
	}

	get qualifiesForDiscount() {
		return this.price > 5;
	}

	// setters
	// notice I changed the name of the function to prevent an infinite loop
	set sizeOfCake(size) {
		if (size !== 'small' && size !== 'medium' && size !== 'large') {
			throw new Error(
				'Cake must be valid size - either small, medium or large'
			);
		}
		this.cakeSize = size;
	}
}

let cake = new Cake('chocolate', ['chocolate chips'], 5, 'large');

console.log({ cake });

// notice extends - inherits from another class
class BirthdayCake extends Cake {
	surprise() {
		console.log(`Happy Birthday!!!`);
	}
}

let birthdayCake = new BirthdayCake(
	'marble-chocolate',
	['vanilla icing', 'orange piping'],
	30,
	'large'
);
console.log({ birthdayCake });
birthdayCake.surprise();
