export const baker = {
	bake(attribute, invoker) {
		if (invoker === 'cupcake') {
			console.log(
				`woo, I just baked this ${invoker} with ${attribute} to the console`
			);
		}
		if (invoker === 'muffin') {
			console.log(
				`woo, I just baked this ${attribute} ${invoker} to the console`
			);
		}
	},
};
