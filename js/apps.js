
//Floating phone icon movement // 
const toggContact = () =>{
	const x = document.querySelector('.fix-contact');
	x.addEventListener('click', () =>{
		x.classList.toggle('fix-contact-tog'); 
	});
} 

toggContact();
//Floating phone icon movement // 

window.onload = function txtTogg(){
	let txt = document.querySelector('.ss');
    txt.className="ss-active";	
}

//Hidden boxes in index page
window.onscroll = function boxTogg(){

//Color changing on movement of top navbar
let x = document.querySelector('.navbar-menu');
	let y = document.querySelector('.maincontent-1');
	if(x.offsetTop>16){
		x.style.backgroundColor="rgba(15,115,0)";
		x.style.transition=".2s";
		y.style.borderColor="rgba(15,115,0)"; 
		y.style.transition=".2s";
	}
	
	else{
		x.style.backgroundColor="#E52D32";
		y.style.borderColor="#E52D32";
	}
	 
}
//Color changing on movement of top navbar

//Slideshow movement effect 
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
   
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
	 var slideIndex = 0;
showSlides();
//Slideshow movement effect 



 