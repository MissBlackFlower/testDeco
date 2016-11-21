$(document).ready(function() {

	$("#js_nav").on("click","a", function (event) {
			 event.preventDefault();

			 var id  = $(this).attr('href'),
					 top = $(id).offset().top;

			 $('body,html').animate({scrollTop: top}, 1500);
	 });

		//  показать моделку по клику на ссылку
	 $(".js_service").on("click", function (event) {
				var wrap = $(this).closest(".js-col"),
						modal = wrap.find(".js_modal");

						wrap.addClass('is-active');
						modal.slideDown();
				event.preventDefault();
		});
		// скрыть модалку по клику на любой её части
		$(".js_modal").on("click", function (event) {
				 var wrap = $(this).closest(".js-col");

						 wrap.removeClass('is-active');
						 $(this).slideUp();
				 event.preventDefault();
		 });

		 $(".js_btn-subject").on("click", function (event) {
					var list = $(".js_subject-list");

							$(this).toggleClass('is-show');
							list.slideToggle();
			});
});
