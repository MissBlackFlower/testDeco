
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
