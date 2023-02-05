const button = document.createElement('button');
button.textContent = 'bake it !!!';
document.body.appendChild(button);

const form = document.querySelector('button');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	import('./cakeFactory.mjs').then((module) => {
		module.oven.makeCupcake('sprinkles');
		module.oven.makeMuffin('large');
	});
});
