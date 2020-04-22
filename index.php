<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="initial-scale=1.0, width=device-width">
	<title>Red Fox</title>
	<link rel="icon" type="image/png" href="images/favicon.png">
	<link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&family=Roboto+Slab:wght@300&display=swap" rel="stylesheet">
	<link href="css/main.css" rel="stylesheet" type="text/css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/plugins/ScrollToPlugin.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/noframework.waypoints.js"></script>
</head>

<body>
	<h1 class="hidden">Red Fox</h1>
	<div id="mainContainer">
		<header id="mainHeader">
			<nav id="mainNav">
				<h2 class="hidden">Main Naviagation</h2>
				<i class="fa fa-bars hamburger fa-2x"></i>
				<ul id="burgerMenu">
					<li><a href="#products" id="productsLink">Products</a></li>
					<li><a href="#about" id="aboutLink">About</a></li>
					<li><a href="#contact" id="contactLink">Contact</a></li>
				</ul>
			</nav>

			<div id="logo">
				<img id="redFoxLogo" src="images/logo.svg" alt="Logo">
			</div>
		</header>

		<section id="hero">
			<p class="introMsg">Your Satisfaction is Our Success</p>
			<i class="fa fa-angle-down fa-2x downArrow"></i>
		</section>

		<section id="about">
			<h2 class="mainHeading">Who We Are</h2>
			<p>Red Fox Medical is dedicated to providing the best medical equipment for hospitals, clinics, and senior care homes. We guarantee our clients’ satisfaction by importing only the highest quality equipment and offering the lowest cost. Our passionate team strives to provide the best service for our clients through timely delivery and professional assistance. We are located in London, Ontario.</p>
			<img src="images/logo-symbol.svg" alt="logo">
		</section>

		<section id="products">
			<h2 class="mainHeading">Our Products</h2>
			<p class="productsIntro">We offer our clients a variety of medical equipment at affordable prices.</p>
			<div id="productsCon">
				<section class="product">
					<img src="images/sticky-mat.jpg" alt="Clean Room Sticky Mat" class="productImg">
					<div class="productText">
						<h3 class="productTitle">Clean Room Sticky Mat</h3>
						<p class="productDesc">A multilayered adhesive mat that captures dust and undesired particles off shoes and wheeled equipment before entering the controlled environment. Offered in a standard 30 layered mat, each layer is easily peeled off revealing a new clean polyethylene film ready for traffic.  Manufactured at one of the best factories in China, offering great quality satisfying Canadian standards at a substantially lower cost.</p>
					</div>
				</section>

				<section class="product">
					<img src="images/surgical-cap.jpg" alt="Surgeon's Cap" class="productImg protectiveImg">
					<div class="productText">
						<h3 class="productTitle">Human Protective Equipment</h3>
						<p class="productDesc">We offer a large collection of human protective equipment. Click the arrow to view them.</p>
						<i class="fa fa-angle-down fa-2x productReveal"></i>
					</div>
				</section>

				<div class="protect-show">
					<div class="protect-wrapper">
						<img src="images/3ply-surgical-mask2.jpg" alt="surgical mask 3-ply">
						<h4>Surgical Mask 3-Ply</h4>
						<ul class="specs">
							<li>Level 2 - Price: $35/box <span>(50 pcs)</span></li>
							<li>Level 3 - Price: $40/box <span>(50 pcs)</span></li>
						</ul>
					</div>

					<div class="protect-wrapper">
						<img src="images/surgical-cap-easy-tie2.jpg" alt="surgical cap easy tie">
						<h4>Surgical Cap with Easy Tie</h4>
						<ul class="specs">
							<li>Price: $0.10</li>
							<li></li>
							<li></li>
							<li></li>
						</ul>
					</div>

					<div class="protect-wrapper">
						<img src="images/surgical-cap-elastic2.jpg" alt="surgical cap ealstic band">
						<h4>Surgical Cap with Elastic Band</h4>
						<ul class="specs">
							<li>Price: $0.10</li>
							<li></li>
							<li></li>
							<li></li>
						</ul>
					</div>

					<div class="protect-wrapper">
						<img src="images/mesh-hairnet2.jpg" alt="mesh hairnt">
						<h4>Mesh Hairnet</h4>
						<ul class="specs">
							<li>Price: $0.11</li>
							<li></li>
							<li></li>
							<li></li>
						</ul>
					</div>

					<div class="protect-wrapper">
						<img src="images/double-elastic-mop-cap2.jpg" alt="mop cap">
						<h4>Mop Cap (Double Elastic)</h4>
						<ul class="specs">
							<li>Price: $0.045</li>
							<li></li>
							<li></li>
							<li></li>
						</ul>
					</div>

					<div class="protect-wrapper">
						<img src="images/non-woven-beard-cover2.jpg" alt="non woven beard cover">
						<h4>Non-Woven Beard Cover</h4>
						<ul class="specs">
							<li>Price: $0.051</li>
							<li></li>
							<li></li>
							<li></li>
						</ul>
					</div>

					<div class="protect-wrapper">
						<img src="images/bouffant-round-cap2.jpg" alt="bouffant round cap">
						<h4>Bouffant Round Cap</h4>
						<ul class="specs">
							<li>Price: $0.051</li>
							<li></li>
							<li></li>
							<li></li>
						</ul>
					</div>

					<div class="protect-wrapper">
						<img src="images/skid-proof-shoes-cover2.jpg" alt="skid proof shoes cover">
						<h4>Skid-Proof Shoe Cover</h4>
						<ul class="specs">
							<li>Price: $0.10</li>
							<li></li>
							<li></li>
							<li></li>
						</ul>
					</div>

					<div class="protect-wrapper">
						<img src="images/non-woven-shoes-cover2.jpg" alt="non-woven shoes cover">
						<h4>Non-woven Shoe Cover</h4>
						<ul class="specs">
							<li>Price: $0.063</li>
							<li></li>
							<li></li>
							<li></li>
						</ul>
					</div>

					<div class="protect-wrapper">
						<img src="images/esd-shoes-cover2.jpg" alt="ESD shoes cover">
						<h4>ESD Shoe Cover</h4>
						<ul class="specs">
							<li>Price: $0.18</li>
							<li></li>
							<li></li>
							<li></li>
						</ul>
					</div>
					
				</div>
			</div>
		</section>

		<section id="contact">
			<h2 class="mainHeading">Contact Us</h2>
			<p id="contactText">We are always available to answer all your inquiries. Feel free to use this form or email us.</p>
			<form id="contactForm" action="contact/data_contact.php" method="POST">
				<label for="u-name">Name</label>
				<input id="u-name" type="text" name="name" placeholder="name.." required>
				<label for="u-email">Email</label>
				<input id="u-email" type="email" name="email" placeholder="email.." required>
				<label for="u-subject">Subject</label>
				<input id="u-subject" type="text" name="subject" placeholder="subject.." required>
				<label for="u-message">Message</label>
				<textarea id="u-message" name="message" placeholder="message.." required></textarea>
				<input type="submit" value="Submit">
			</form>
			<ul>
				<li>
					<img src="images/mail-icon-black.png" alt="Mail Icon" class="contactIcon">
					<p>info@redfoxmedical.ca</p>
				</li>
				<li>
					<img src="images/phone-icon-black.png" alt="Phone Icon" class="contactIcon">
					<p>226-376-7375</p>
				</li>
			</ul>
		</section>

		<div id="scrollTop">
			<i class="fa fa-angle-up fa-3x upArrow"></i>
		</div>

		<footer id="mainFooter">
			<p>© Red Fox Medical 2020. All Rights Reserved.</p>
		</footer>
		
	</div>
	
	<!-- JavaScript -->
	<script src="js/main.js"></script>
</body>
</html>