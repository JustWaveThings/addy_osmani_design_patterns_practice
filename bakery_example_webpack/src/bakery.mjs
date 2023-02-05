import * as cakeFactory from './cakeFactory.mjs';

const button = document.createElement('button');
button.textContent = 'bake it !!!';
document.body.appendChild(button);

button.addEventListener('click', (e) => {
	e.preventDefault();
	cakeFactory.oven.makeCupcake('sprinkles');
	cakeFactory.oven.makeMuffin('large');
});
