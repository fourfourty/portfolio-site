<?php

error_reporting(E_ALL);
ini_set('display_startup_errors', 1);
ini_set('display_errors', '1');

// $json = file_get_contents('php://input');
// $dataE = json_decode($json, true);

var_dump($_POST);

$to = 'tema.dybin@yandex.ru';
$tema = "Обращение"; // тема полученного емайла
$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$subjectBody = $_POST["subjectText"]; 


  $mes = "Имя: .$name \nE-mail: .$email  \nТема обращения: .$subject \nТекст: .$subjectBody";

  $send = mail($to, $tema, $mes , 'Content-type: text/html; charset=utf-8' . "\r\n");

// if ($send == 'true') {
//   echo "<script>document.location.href='/index.html';</script>";
// }

// Если письмо не ушло — выводим сообщение об ошибке

// else {
//   echo "Ой, что-то пошло не так";
// }

?>