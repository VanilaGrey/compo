import { getWordAfterNum } from './utils.js';

const buttonElement = document.querySelector('[data-button]');
const counterElement = document.querySelector('.counter');
const inputElement = document.querySelector('.counter__input');

let value = 1;

const updateCounter = () => {
	const num = parseInt(value, 10);
	inputElement.value = `${value} ${getWordAfterNum(num, ['штука', 'штуки', 'штук'])}`;
};

buttonElement.addEventListener('click', () => {
	buttonElement.style.display = 'none';
	counterElement.style.display = 'flex';
	updateCounter();
});

document.querySelector('.counter__button--plus').addEventListener('click', () => {
	value++;
	updateCounter();
});

document.querySelector('.counter__button--minus').addEventListener('click', () => {
	if (value > 1) {
		value--;
		updateCounter();
	} else {
		counterElement.style.display = 'none';
		buttonElement.style.display = 'flex';
	}
});
