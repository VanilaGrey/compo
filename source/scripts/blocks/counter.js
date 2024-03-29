import { getWordAfterNum } from './utils.js';

const buttonElement = document.querySelector('[data-button]');
const counterElement = document.querySelector('.counter');
const inputElement = document.querySelector('.counter__input');

const basketElement = document.querySelector('.page-header__basket');
const priceElement = document.querySelector('.price__new');

let totalPrice = 0;

const textPrice = priceElement.textContent.replaceAll(' ', '');
const price = parseInt(textPrice, 10);

const outputPrice = () => {
	const basketPrice = totalPrice.toLocaleString('ru-RU');
	basketElement.textContent = basketPrice;
};

// Функция для увеличения цены
const increasePrice = () => {
	totalPrice += price;
	outputPrice();
};

// Функция для уменьшения цены
const decreasePrice = () => {
	totalPrice -= price;
	outputPrice();
};

let value = 1;

const updateCounter = () => {
	const num = parseInt(value, 10);
	inputElement.value = `${value} ${getWordAfterNum(num, ['штука', 'штуки', 'штук'])}`;
};

buttonElement.addEventListener('click', () => {
	buttonElement.style.display = 'none';
	counterElement.style.display = 'flex';
	updateCounter();
	increasePrice();
});

document.querySelector('.counter__button--plus').addEventListener('click', () => {
	value++;
	updateCounter();
	increasePrice();
});

document.querySelector('.counter__button--minus').addEventListener('click', () => {
	if (value > 1) {
		value--;
		updateCounter();
		decreasePrice();
	} else {
		counterElement.style.display = 'none';
		buttonElement.style.display = 'flex';
		decreasePrice();
	}
});
