//Changes Tabs to Active with Active Slide

const headerCarousel = document.querySelector('#headerCarousel');
headerCarousel.addEventListener('slide.bs.carousel', (event) => {
	let nextSlide = event.to;
	let customIndicators = document.querySelectorAll('.custom-indicators li');
	for (let i = 0; i < customIndicators.length; i++) {
		customIndicators[i].classList.remove('active');
	}
	document
		.querySelector(
			'.custom-indicators li[data-bs-slide-to="' + nextSlide + '"]'
		)
		.classList.add('active');
});

// Gallery Slide

const swiperEl = document.querySelector('swiper-container');

const params = {
	slidesPerView: 1,
	breakpoints: {
		640: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
	},
	on: {
		init() {},
	},
};

Object.assign(swiperEl, params);

swiperEl.initialize();

// Testimonial Carousel
