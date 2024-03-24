export default ({ error, pageName, status }) => ({
	appData: {
		page: {
			error,
			pageName,
			status
		}
	},
	description: 'compo',
	faq: [
		{
			svg: 'icon-doc',
			title: 'PDF  презентация',
			url: '#!'
		},
		{
			svg: 'icon-video',
			title: 'Видео инструкция',
			url: '#!'
		},
		{
			svg: 'icon-info',
			title: 'FAQ',
			url: '#!'
		},
		{
			svg: 'icon-youtube',
			title: 'Мы на YouTube',
			url: '#!'
		},
		{
			title: 'Политика конфиденциальности ',
			url: '#!'
		},
		{
			title: 'Лицензионное соглашение',
			url: '#!'
		}
	],
	footerLinks: [
		{
			title: 'Вакансии',
			url: '#!'
		},
		{
			title: 'Блог',
			url: '#!'
		},
		{
			title: 'Акции',
			url: '#!'
		}
	],
	navLinks: [
		{
			title: 'Мои заказы',
			url: '#!'
		},
		{
			title: 'Сотрудники',
			url: '#!'
		},
		{
			title: 'Шаблоны заказов',
			url: '#!'
		},
		{
			title: 'Обращения',
			url: '#!'
		}
	],
	pixelperfect: JSON.stringify({ breakpoints: [1600], ext: 'webp' }),
	projectName: 'compo',
	sections: [
		{
			goods: [
				{
					title: 'Одежда',
					url: '#!'
				},
				{
					title: 'Обувь',
					url: '#!'
				},
				{
					title: 'Аксессуары',
					url: '#!'
				},
				{
					title: 'Белье',
					url: '#!'
				},
				{
					title: 'Bra fitting',
					url: '#!'
				}
			],
			heading: 'Женщинам'
		},
		{
			goods: [
				{
					title: 'Одежда',
					url: '#!'
				},
				{
					title: 'Обувь',
					url: '#!'
				},
				{
					title: 'Аксессуары',
					url: '#!'
				},
				{
					title: 'Белье',
					url: '#!'
				}
			],
			heading: 'Мужчинам'
		},
		{
			goods: [
				{
					title: 'Одежда',
					url: '#!'
				},
				{
					title: 'Обувь',
					url: '#!'
				},
				{
					title: 'Аксессуары',
					url: '#!'
				},
				{
					title: 'Белье',
					url: '#!'
				},
				{
					title: 'Игрушки',
					url: '#!'
				},
				{
					title: 'Малыши',
					url: '#!'
				}
			],
			heading: 'Детям'
		},
		{
			goods: [
				{
					title: 'Велоспорт',
					url: '#!'
				},
				{
					title: 'Туризм',
					url: '#!'
				},
				{
					title: 'Тренажеры и фитнес',
					url: '#!'
				},
				{
					title: 'Командные виды спорта',
					url: '#!'
				},
				{
					title: 'Самокаты',
					url: '#!'
				}
			],
			heading: 'Виды спорта'
		}
	],

	supportLinks: [
		{
			ad: 'Служба поддержки',
			title: '8 800 841-95-95',
			url: 'tel:+78008419595'
		},
		{
			ad: 'Служба поддержки',
			title: 'support@sport.ru',
			url: 'mailto:support@sport.ru'
		}
	]
});
