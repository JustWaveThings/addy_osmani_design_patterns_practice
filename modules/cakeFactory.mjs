// specify dependencies
import baker from '/modules/staff.mjs';

export const oven = {
	makeCupcake(toppings) {
		baker.bake('cupcake', toppings);
	},
	makeMuffin(mSize) {
		baker.bake('muffin', mSize);
	},
};
