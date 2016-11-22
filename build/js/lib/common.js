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
				modal = wrap.find(".js_modal");

			if ($(window).width() <= 960) {

				$(this).toggleClass('is-active');
				modal.slideToggle();

			} else {

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
				info = $(".js_info"),
				videoBtn = info.find(".js_video-popup");

		if ($(window).width() >= 721 && mobMenu.length > 0) {
				mobMenu.slideUp();
				header.removeClass('is-clicked');
				headerIn.append(lang);
		};
	});


	// Устанавливаем обработчик потери фокуса для обязательных полей ввода текста
	$('input#name, input#phone , input#email').unbind().blur( function(){

			var id = $(this).attr('id');
			var val = $(this).val();

		// после того, как поле потеряло фокус, перебираем значения id, совпадающее с id данного поля
		switch(id)
		{

					// Проверка поля "Имя"
					case 'name':
						var rv_name = /^[a-zA-Zа-яА-Я]+$/; // используем регулярное выражение
						// Eсли длина имени больше 2ух символов, оно не пустое и удовлетворяет рег. выражению
						 if(val.length > 2 && val != '' && rv_name.test(val))
						 {
								$(this).addClass('not_error');
								$(this).next('.error-box').remove();
								$(this).after('<div class="error-box" style="color: green;">&#10004;</div>')
								$(this).next('.error-box').animate({'paddingLeft':'10px'},400)
																					.animate({'paddingLeft':'5px'},400);
						 }

						 else
						 {
								$(this).removeClass('not_error').addClass('error');
								$(this).next('.error-box').remove();
								$(this).after('<div class="error-box" style="color: red;">&#10008; поле "Имя" обязательно для заполнения<br> &#10149; длина имени должна составлять не менее двух символов<br> &#10149; поле должно содержать только русские или латинские буквы</div>')
								$(this).next('.error-box').animate({'paddingLeft':'10px'},400)
																					.animate({'paddingLeft':'5px'},400);
						 }
				 break;

				 // Проверка phone number
				 case 'phone':
						 var rv_phone = /^(\+?\d+)?\s*(\(\d+\))?[\s-]*([\d-]*)$/;
						 if(val != '' && rv_phone.test(val))
						 {
								$(this).addClass('not_error');
								$(this).next('.error-box').remove();
								$(this).after('<div class="error-box" style="color: green;">&#10004;</div>')
								$(this).next('.error-box').animate({'paddingLeft':'10px'},400)
																					.animate({'paddingLeft':'5px'},400);
						 }
						 else
						 {
								$(this).removeClass('not_error').addClass('error');
								$(this).next('.error-box').remove();
								$(this).after('<div class="error-box" style="color: red;">&#10008; поле "Телефон" обязательно для заполнения<br> &#10149; поле должно содержать правильный номер<br> (например: «+38(044)555-55-55»)</div>')
								$(this).next('.error-box').animate({'paddingLeft':'10px'},400)
																					.animate({'paddingLeft':'5px'},400);
						 }
				 break;


				// Проверка email
				case 'email':
						var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
						if(val != '' && rv_email.test(val))
						{
							 $(this).addClass('not_error');
							 $(this).next('.error-box').remove();
							 $(this).after('<div class="error-box" style="color: green;">&#10004;</div>')
							 $(this).next('.error-box').animate({'paddingLeft':'10px'},400)
																				 .animate({'paddingLeft':'5px'},400);
						}
						else
						{
							 $(this).removeClass('not_error').addClass('error');
							 $(this).next('.error-box').remove();
							 $(this).after('<div class="error-box" style="color: red;">&#10008; поле "Email" обязательно для заполнения<br> &#10149; поле должно содержать правильный email-адрес (например: example123@mail.ru)</div>')
							 $(this).next('.error-box').animate({'paddingLeft':'10px'},400)
																				 .animate({'paddingLeft':'5px'},400);
						}
				break;


		} // end switch(...)

	}); // end blur()

	// отправка письма с помощью AJAX
	$('form#order').submit(function(e){

			// Запрещаем стандартное поведение для кнопки submit
			e.preventDefault();
			// выполняем Ajax сценарий и отправляем письмо адресату если обязательные поля запонены верно
			// и выбрана инетерсующая услуга
			if($('.not_error').length == 3 && $('input[name=service]:checked').length > 0)
			{

					$.ajax({
								 url: 'js/send.php',
								 type: 'post',
								 data: $(this).serialize(),

								 beforeSend: function(xhr, textStatus){
											$('form#order :input').attr('disabled','disabled');
								 },

								success: function(response){
										 $('form#order :input').removeAttr('disabled');
										 alert(response);
								}
				 }); // end ajax({...})
		 }
		 else
		 {
			 return false;
		 }

	}); // end submit()

});
