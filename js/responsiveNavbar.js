const navSlide = () =>{
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-menu-ul');
	burger.addEventListener('click', () =>{
		nav.classList.toggle('nav-menu-ul-active');
		 
	});
}

navSlide();