/*$(document).ready(function () {
	$('#headerCarousel').carousel({
		interval: 4000,
	});
	let clickEvent = false;
	$('#headerCarousel')
		.on('click', '.nav a', function () {
			clickEvent = true;
			$('.nav li').removeClass('active');
			$(this).parent().addClass('active');
		})
		.on('slide.bs.carousel', function (e) {
			if (!clickEvent) {
				let count = m$('.nav').children().length - 1;
				let current = $('.nav li.active');
				current.removeClass('active').next().addClass('active');
				let id = parseInt(current.data('slide-to'));
				if (count == id) {
					$('.nav li').first().addClass('active');
				}
			}
			clickEvent = false;
		});
}); */

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
