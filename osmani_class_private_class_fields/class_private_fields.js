class CookieWithPrivateField {
	#privateField = 'almonds';

	getPrivateField() {
		return this.#privateField;
	}
}
const cookie = new CookieWithPrivateField();

console.log(cookie.getPrivateField()); // almonds

class CookieWithPrivateMethod {
	#privateMethod() {
		return 'delicous cookies';
	}
	getPrivateMethod() {
		return this.#privateMethod();
	}
}

const anotherCookie = new CookieWithPrivateMethod();
console.log(anotherCookie.getPrivateMethod()); // delicous cookies
