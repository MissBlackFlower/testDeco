$(document).ready(function() {

	$("#js_nav").on("click","a", function (event) {
			 event.preventDefault();

			 var id  = $(this).attr('href'),
					 top = $(id).offset().top;

			 $('body,html').animate({scrollTop: top}, 1500);
	 });

	 $(".js_to-prise").on("click", function () {
				var top = $("#price").offset().top;

				$('body,html').animate({scrollTop: top}, 1500);
		});

	 $(".js_to-order").on("click", function () {
				var top = $("#contacts").offset().top;
						modal = $(this).closest(".js_modal"),
						wrap = modal.closest(".js_col");

				setTimeout(
					"wrap.removeClass('is-active');	modal.slideUp();",
					1000
				);

				$('body,html').animate({scrollTop: top}, 1500);
		});

		//  показать/скрыть модалку по клику на ссылку
	 $(".js_service").on("click", function (event) {
				var wrap = $(this).closest(".js_col"),
						modal = wrap.find(".js_modal");

				wrap.toggleClass('is-active');
				modal.slideToggle();
				event.preventDefault();
		});

			//  показать/скрыть список услуг по клику на кнопку
		 $(".js_btn-subject").on("click", function (event) {
					var list = $(".js_subject-list");

					$(this).toggleClass('is-show');
					list.slideToggle();
			});
});
