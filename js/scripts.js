//Changes Tabs to Active with Active Slide

const carousel = document.querySelector('#headerCarousel');
carousel.addEventListener('slide.bs.carousel', (event) => {
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

// Testimonial Slide

const swiperEl = document.querySelector('swiper-container');

const params = {
	injectStyles: [
		`
		.swiper-pagination-bullet {
			width: 20px;
			height: 20px;
			text-align: center;
			line-height: 20px;
			font-size: 12px;
			color: #000;
			opacity: 1;
			background: rgba(0, 0, 0, 0.2);
		}

		.swiper-pagination-bullet-active {
			color: #fff;
			background: #007aff;
		}
	`,
	],
	pagination: {
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + '</span>';
		},
	},
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
