const sliderItemsElements = document.querySelectorAll('.slider__item');
const prevButtonElement = document.querySelector('.slider__control--prev');
const nextButtonElement = document.querySelector('.slider__control--next');

let currentIndex = 0;

// Назначаем обработчики событий для кнопок вперед и назад
prevButtonElement.addEventListener('click', () => {
	sliderItemsElements[currentIndex].classList.remove('slider__item--active');
	currentIndex = currentIndex === 0 ? sliderItemsElements.length - 1 : currentIndex - 1;
	sliderItemsElements[currentIndex].classList.add('slider__item--active');
});

nextButtonElement.addEventListener('click', () => {
	sliderItemsElements[currentIndex].classList.remove('slider__item--active');
	currentIndex = currentIndex === sliderItemsElements.length - 1 ? 0 : currentIndex + 1;
	sliderItemsElements[currentIndex].classList.add('slider__item--active');
});
