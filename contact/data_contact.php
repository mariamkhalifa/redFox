<?php


$name = '';
$email = '';
$subject = '';
$message = '';
$recipient = 'info@redfoxmedical.ca';

if (isset($_POST['name'])) {
	$name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
}

if (isset($_POST['email'])) {
	$email = str_replace(array("\r", "\n", "%0a", "%0d"),'',$_POST['email']);
	$email = filter_var($email,FILTER_VALIDATE_EMAIL);
}

if (isset($_POST['subject'])) {
	$subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
}

if (isset($_POST['message'])) {
	$message = $_POST['message']; 
}

$headers = array(
	'From'=>'noreply@redfoxmedical.ca',
	'Reply-To'=>$name.'<'.$email.'>'
);

if(mail($recipient, $subject, $message, $headers)){
	$msg = 'Thank you for contacting us!';
} else {
	$msg = 'We are sorry but your email did not go through!';
}

echo json_encode($msg);





