// Инициализируем Swiper
let myImageSlider = new Swiper('.image-slider', {
	// Стрелки
	pagination: {
		el: '.swiper-pagination',
		
	},
	
	simulateTouch: true,
	
	touchRatio: 5,

	touchAngle: 90,
	
	grabCursor: true,

	// Переключение при клике на слайд
	slideToClickedSlide: true,

	// Навигация по хешу
	hashNavigation: {
		// Отслеживать состояние
		watchState: true,
	},

	// Управление клавиатурой
	keyboard: {
		// Включить\выключить
		enabled: true,
		// Включить\выключить
		// только когда слайдер
		// в пределах вьюпорта
		onlyInViewport: true,
		// Включить\выключить
		// управление клавишами
		// pageUp, pageDown
		pageUpDown: false,
	},
	
	// Управление колесом мыши
	mousewheel: {
		// Чувствительность колеса мыши
		sensitivity: 1,
		// Класс объекта на котором
		// будет срабатывать прокрутка мышью.
		//eventsTarget: ".image-slider"
	},

	// Автовысота
	autoHeight: true,

	// Количество слайдов для показа
	slidesPerView: 2,

	watchOverflow: true,
	spaceBetween: 10,
	slidesPerGroup: 3,
	centeredSlides: false,
	initialSlide: 0,

	// Мультирядность
	slidesPerColumn: 1,

	// Бесконечный слайдер


	// Кол-во дублирующих слайдов
	//loopedSlides: 4,

	// Свободный режим
	freeMode: true,


	scrollbar: {
		el: '.swiper-scrollbar',
		// Возможность перетаскивать скролл
		draggable: true
	},
	// Скорость
	speed: 300,

	// Вертикальный слайдер
	direction: 'horizontal',


	// Эффекты переключения слайдов.
	// Листание
	effect: 'slide',

	
	preloadImages: false,
	// Lazy Loading
	// (подгрузка картинок)
	lazy: {
		// Подгружать на старте
		// переключения слайда
		loadOnTransitionStart: false,
		// Подгрузить предыдущую
		// и следующую картинки
		loadPrevNext: false,
	},
	
	watchSlidesProgress: true,
	// Добавление класса видимым слайдам
	watchSlidesVisibility: true,

	// Зум картинки
	zoom: {
		// Макимальное увеличение
		maxRatio: 5,
		// Минимальное увеличение
		minRatio: 1,
	},

	
	observer: true,


	observeParents: true,


	observeSlideChildren: true,

	breakpoints: {

		320: {
			slidesPerView: 1,
		},
		375: {
			slidesPerView: 1,
		},
		420: {
			slidesPerView: 1,
		},
		
		500: {
			slidesPerView: 1,
		},
		700: {
			slidesPerView: 1,
		},
		1200: {
			slidesPerView: 2,
		},
		
		
	}

	

});


