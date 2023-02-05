Object.defineProperty(newObject, 'anotherKey', {
	value: "for more control of property's behavior",
	writable: true,
	enumerable: true,
	configurable: true,
});

console.log(newObject.anotherKey); // for more control of the property's behavior