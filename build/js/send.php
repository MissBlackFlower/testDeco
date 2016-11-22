<?php

		$email = $_POST['email'];
		$phone = $_POST['phone'];
		$name = $_POST['name'];
		$site= $_POST['site'];
		$service = $('input[name=radio]').val([]);
		$message = $_POST['msg'];

		$to = "babenko_v_v@ukr.net";
		$subject = "От поситителя сайта";
		$text =  "Написал(а): $name\n Контактный email - $email\n $site\n Контактный телефон - $phone\n\n Интересует: $service\n Дополнительная информация: $message \n";

		$header = "Content-type: text/html; charset=utf-8\r\n";
		$header .= "MIME-Version: 1.0\r\n";

		$sending = mail($to, $subject, $text, $headers);

		if($sending) echo "Письмо отправлено. Ответа не ждите :)";

?>
