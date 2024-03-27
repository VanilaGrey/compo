const sliderItemElements = document.querySelectorAll('.slider__item');
const prevButtonElement = document.querySelector('.slider__control--prev');
const nextButtonElement = document.querySelector('.slider__control--next');
const activeClass = 'slider__item--active';
let currentIndex = 0;

// Назначаем обработчики событий для кнопок вперед и назад
prevButtonElement.addEventListener('click', () => {
	sliderItemElements[currentIndex].classList.remove(activeClass);
	currentIndex = currentIndex === 0 ? sliderItemElements.length - 1 : currentIndex - 1;
	sliderItemElements[currentIndex].classList.add(activeClass);
});
nextButtonElement.addEventListener('click', () => {
	sliderItemElements[currentIndex].classList.remove(activeClass);
	currentIndex = currentIndex === sliderItemElements.length - 1 ? 0 : currentIndex + 1;
	sliderItemElements[currentIndex].classList.add(activeClass);
});

// Назначаем обработчик события клика для каждого элемента .slider__item
sliderItemElements.forEach((item, index) => {
	item.addEventListener('click', () => {
		// Удаляем класс .slider__item--active у текущего активного слайда
		document.querySelector('.slider__item--active').classList.remove(activeClass);

		// Добавляем класс .slider__item--active к выбранному слайду
		item.classList.add(activeClass);

		// Обновляем currentIndex, чтобы он соответствовал выбранному слайду
		currentIndex = index;
	});
});
