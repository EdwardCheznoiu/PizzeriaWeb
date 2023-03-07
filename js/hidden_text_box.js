	const prod = () =>{

	const x = document.getElementsByClassName("product");
	const y = document.getElementsByClassName("info-box");
	for(let i = 0; i<y.length; i++){	 
	x[i].addEventListener('click', () =>{

		y[i].classList.toggle('info-box-active'); 
        
	});} 
 
}
prod();
