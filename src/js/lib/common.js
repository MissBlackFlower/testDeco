$(document).ready(function() {

	// плавный скрол к якорю при клике на ссылке меню
	$("#js_nav").on("click","a", function (event) {
			event.preventDefault();

			var id  = $(this).attr('href'),
					top = $(id).offset().top - 70;

			$('body,html').animate({scrollTop: top}, 1500);
	});

	// плавный скрол к блоку услуг при клике на кнопку "услуги и цены"
	$(".js_to-prise").on("click", function () {
			var top = $("#price").offset().top - 70;

			$('body,html').animate({scrollTop: top}, 1500);
	});

	// плавный скрол к контактой форме при клике на кнопку "заказать"
	$(".js_to-order").on("click", function () {
			var top = $("#contacts").offset().top - 70,
					modal = $(this).closest(".js_modal"),
					item = modal.prev(".js_service"),
					wrap = modal.closest(".js_col");

					// с задержкой по времени скрыть модельное окно
					setTimeout(
						"wrap.removeClass('is-active'); item.removeClass('is-active');	modal.slideUp();",
						1000
					);

					$('body,html').animate({scrollTop: top}, 1500);
	});

	//  показать/скрыть модалку по клику на ссылку в блоке услуг
	$(".js_service").on("click", function (event) {
		var wrap = $(this).closest(".js_col"),
				items = $(".js_service"),
				modal = wrap.find(".js_modal");

			if ($(window).width() <= 960) {
				$(this).toggleClass('is-active');
				modal.slideToggle();

			} else if( $(window).width() > 960 ){
				items.removeClass('is-active');
				wrap.toggleClass('is-active');
				modal.slideToggle();
			};
					event.preventDefault();
	});

	//  показать/скрыть список услуг по клику на кнопку МЕНЯ ИНТЕРЕСУЕТ
	$(".js_btn-subject").on("click", function (event) {
			var list = $(".js_subject-list");

			$(this).toggleClass('is-show');
			list.slideToggle();
	});

	// на ширине экрана более 720px при скроле ниже блока header фисировать его
	$('.js_header').scroolly([
		{
			minWidth: 720,
			from: 'el-bottom = vp-top',
			to: 'doc-bottom',
			addClass: 'is-fixed'
		},
		{
			minWidth: 720,
			from: 'doc-top',
			to: 'doc-top + 75px',
			removeClass: 'is-fixed'
		}
	]);

	$(".js_nav-btn").on("click", function () {
			var header = $('.js_header'),
					mobMenu = header.find(".mobile-menu"),
					menu = $(".js_menu").clone(),
					lang = $(".js_lang");

					header.toggleClass('is-clicked');
			if (mobMenu.length > 0) {
				mobMenu.append(lang);
				mobMenu.slideToggle(300);
			} else {
				var newMenu = $('<div class="mobile-menu"></div>').insertAfter($(this));
						newMenu.append(menu)
									 .append(lang);
			}
	});

	$(window).resize(function() {
		var header = $('.js_header'),
				mobMenu = header.find(".mobile-menu"),
				headerIn = header.find(".header-in"),
				lang = $(".js_lang"),
				cols = $(".js_col"),
				items = $(".js_service"),
				modals = cols.find(".js_modal");

				cols.removeClass('is-active');
				items.removeClass('is-active');
				modals.slideUp();

		if ($(window).width() >= 721 && mobMenu.length > 0) {
				mobMenu.slideUp();
				header.removeClass('is-clicked');
				headerIn.append(lang);
		};
	});

//=include validation.js
});
