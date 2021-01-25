<?php


if(isset($_POST['email']) && isset($_POST['nome'])){

	$nome = addslashes($_POST['nome']);
	$email = addslashes($_POST['email']);
	$telefone = addslashes($_POST['telefone']);
	$descricao = addslashes($_POST['descricao']);

	$to = "contato@ghg.com";
	$subject = "Contato - GHG";
	$body = "Nome do cliente: " . $nome . "/n/r" . 
	"E-mail do cliente: " . $email . "/n/r" .
	"Telefone para contato: " . $telefone . "/n/r" .
	"Mensagem: " . $descricao;

	$header = "From: mandadorDeEmailsGHG@ghg.com" . "/n/r" .
	"Reply-to: " . $email . "/n/r" .
	"X=Mailer:PHP/".phpversion();

	if(mail($to ,$subject, $body, $header)){
		?>

		<!DOCTYPE html>
		<html>
		<head>
			<title>Mensagem enviada</title>
			<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700" rel="stylesheet">
			<link rel="stylesheet" href="bulma.min.css"/>
			<link rel="stylesheet" type="text/css" href="estilos.css">
			<meta name="viewport" content="width=device-width, initial-scale=1">
			<meta charset="utf-8">
		</head>
		<body>
			<br><br><br><br>
			<div class="container has-text-centered">
				<div class="notification is-success">
					Mensagem enviada com sucesso! Responderemos você em breve!
				</div>
				<a href="index.html">Volte ao início</a>
			</div>
		</body>
		</html>

		<?php
	} else {
		?>

		<!DOCTYPE html>
		<html>
		<head>
			<title>Mensagem não enviada</title>
			<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700" rel="stylesheet">
			<link rel="stylesheet" href="bulma.min.css"/>
			<link rel="stylesheet" type="text/css" href="estilos.css">
			<meta name="viewport" content="width=device-width, initial-scale=1">
			<meta charset="utf-8">
		</head>
		<body>
			<br><br><br><br>
			<div class="container has-text-centered">
				<div class="notification is-danger">
					Algo deu errado. Tente novamente mais tarde ou entre em contato através das nossas redes sociais.
				</div>
				<a href="index.html">Volte ao início</a>
			</div>
		</body>
		</html>

		<?php
	}
}

?>