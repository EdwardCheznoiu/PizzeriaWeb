<!doctype html>
<?php 
	require 'header.php'
?>
<html>
 
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css" href="css/index.css">
 
 
</head>
<body>
 
 
<section class="maincontent-1">
<div class="slideshow-container">
<div class="mySlides fade">
  <img src="images/pizza.jpg">
  <div class="caption">
	 <div class="caption-title"><h1 class="ss">Pizza</h1><p class="ss">Folosim cele mai proaspete ingrediente in pizza</p></div>
</div>
</div>
 
<div class="mySlides fade">
  <img src="images/pasta.jpg">
   <div class="caption">
	 <div class="caption-title"><h1>Paste</h1></div>
</div>
</div>

<div class="mySlides fade">
  <img src="images/sandvis.jpg">
  <div class="caption">
	 <div class="caption-title"><h1>Sandvisuri</h1></div>
</div>
</div>
	
<div class="mySlides fade">
  <img src="images/desert.jpeg">
  <div class="caption">
	 <div class="caption-title"><h1>Deserturi</h1></div>
</div>
</div>
	
<div class="mySlides fade">
  <img src="images/drinks.jpg">
  <div class="caption">
	 <div class="caption-title"><h1>Bauturi</h1></div>
</div>
</div>


<a class="prev" onclick="plusSlides(-1)">&#10094;</a>
<a class="next" onclick="plusSlides(1)">&#10095;</a>
</div>
</section> 
	

<section class="maincontent-2">
<div class="box-content-index">
	
<div class="flex-box-index">
<img src="images/Banners/banner_1.png">
<div class="flex-box-title"></div>
</div>
	
<div class="flex-box-index">
<img src="images/Banners/banner_2.jpg">
</div>
	
<div class="flex-box-index">
<img src="images/Banners/banner_3.jpg">
</div>
	
</div>
</section>
	
<div class="mapouter"><div class="gmap_canvas"><iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=romania%2C%20craiova%2C%20%20Eroul%20Necunoscut%2027&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe> </div><style>.mapouter{position:relative;text-align:right;height:500px;width:100%;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:100%;}</style></div>
	
 
<div class="fix-contact" >
<img src="images/contact/contact.png" onmouseover="this.src='images/contact/contact.hover.png'" onmouseout="this.src='images/contact/contact.png'" title="Comanda acum">
<div class="hidden-contact">
<h2>Telekom: </h2> 
<p><a href="tel:0766676963">0766676963</a></p>
<h2>Vodafone: </h2> 
	<p><a href="tel:0729987444">0729987444</a></p>
</div>
</div>
 
 
 <script src="js/jquery-2.2.4.min.js"></script>
 <script src="js/apps.js"></script>
 
 
<div class="call-now"><img src="images/contact/phone.png">
	<a href="tel:0766676963">Comanda acum</a></div>
 
 <?php
		require 'footer.php'
?>
 
 
</html>
