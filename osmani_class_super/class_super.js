class Cookie {
	constructor(flavor) {
		this.flavor = flavor;
	}

	showTitle() {
		console.log(`This is a ${this.flavor} cookie`);
	}
}

// note the super keyword - it calls the parent class constructor and this code outputs both console.log statements

class FavoriteCookie extends Cookie {
	showTitle() {
		super.showTitle();
		console.log(`${this.flavor} is amazing!`);
	}
}

let myCookie = new FavoriteCookie('chocolate chip');
myCookie.showTitle();
