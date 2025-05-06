<?php

$recepient = ""; //ввести почту
$subject = "Заявка на Профориентационный семинар";
$headers= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n"; 
$headers .= "От: test.com <test.com>\r\n"; //ввести адрес домена

$name = trim($_POST["name"]);
$phone = trim($_POST["tel"]);
$email = trim($_POST["email"]);

$message = "Имя: $name <br/> Телефон: $phone <br/> Почта: $email";

mail($recepient, $subject, $email, $headers);