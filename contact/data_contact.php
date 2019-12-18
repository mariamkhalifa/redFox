<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="initial-scale=1.0, width=device-width">
	<title>Red Fox</title>
	<link rel="icon" type="image/png" href="images/favicon.png">
	<link href="../css/reset.css" rel="stylesheet" type="text/css">
	<link href="../css/main.css" rel="stylesheet" type="text/css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<link href="https://fonts.googleapis.com/css?family=Roboto:3009c9display=swap" rel="stylesheet">
	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/plugins/ScrollToPlugin.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/noframework.waypoints.js"></script>
</head>

<body>
	<h1 class="hidden">Red Fox</h1>
	<div id="mainContainer">
		<header id="mainHeader">
			<div id="topBar"></div>
			<div id="logoNav">
				<nav id="mainNav">
					<h2 class="hidden">Main Navigation</h2>
					<i class="fa fa-bars hamburger"></i>
					<ul id="burgerMenu">
						<li><a href="../index.php#products" id="productsLink">Products</a></li>
						<li><a href="../index.php#about" id="aboutLink">About</a></li>
						<li><a href="../index.php#contact" id="contactLink">Contact</a></li>
					</ul>
				</nav>
				<div id="logo">
					<a href="../index.php"><img src="../images/logo.png" alt="Logo" id="redFoxLogo"></a>
				</div>
			</div>
			</div>
		</header>

	    <section id="submission">
	        <?php

            if(empty($_POST)){
            echo 'Oops...';
            exit;
            }
            
            $name = '';
            $email = '';
            $subject = '';
            $message = '';
            $recipient = 'info@redfoxmedical.ca';
            
            if (isset($_POST['name'])) {
            $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
            }
            
            if (isset($_POST['email'])) {
            // if there's a line break in an email (it's very long), strip it out
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
            'From'=>'noreply@domainname.ca',
            'Reply-To'=>$name.'<'.$email.'>'
            );
            
            if(mail($recipient, $subject, $message, $headers)){
            //if(mail($recipient, $subject, $message)){
            echo '<p class="submission">Thank you for contacting us, '.$name.'.</p>';
            }else{
            echo '<p class="submission">We are sorry but your email did not go through.</p>';
            }
            
            
            ?>
	    </section>

		<footer id="mainFooter">
			<p>Copyright © Red Fox Medical 2019. All Rights Reserved.</p>
		</footer>
		
	</div>
	
	<!-- JavaScript -->
	<script src="js/main.js"></script>
</body>
</html>






