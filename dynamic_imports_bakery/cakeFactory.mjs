import { baker } from './staff.mjs';

export const oven = {
	makeCupcake(attribute) {
		baker.bake(attribute, 'cupcake');
	},
	makeMuffin(attribute) {
		baker.bake(attribute, 'muffin');
	},
};
