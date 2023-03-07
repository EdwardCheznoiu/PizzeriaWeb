function makeAnOrder()
{
		var pizza = document.getElementsByClassName('pizza-order');
		var pasta = document.getElementsByClassName('pasta-order');
		var sandvis = document.getElementsByClassName('sandvis-order');
		var desert = document.getElementsByClassName('desert-order');
		var drink = document.getElementsByClassName('drinks-order');
	    var btn = document.getElementById('order-btn');
		var anotherBtn = document.getElementById('order-btn2');
		var newOrderPage = "";
		var oldOrderPage = document.getElementById('order-main');
		var products = [];
		var price = 0;
		for(var i = 0; i < pizza.length; i++){
			if(pizza[i].checked){
				price += parseFloat(pizza[i].value);
				products.push(pizza[i].name);
			}
		}
		for(i = 0; i < pasta.length; i++){
			if(pasta[i].checked){
				price += parseFloat(pasta[i].value);
				products.push(pasta[i].name);
			}
		}
		for(i = 0; i < sandvis.length; i++){
			if(sandvis[i].checked){
				price += parseFloat(sandvis[i].value);
				products.push(sandvis[i].name);
			}
		}
		for(i = 0; i < desert.length; i++){
			if(desert[i].checked){
				price += parseFloat(desert[i].value);
				products.push(desert[i].name);
			}
		}
		for(i = 0; i < drink.length; i++){
			if(drink[i].checked){
				price += parseFloat(drink[i].value);
				products.push(drink[i].name);
			}
		}
		
		if(price > 0){
			newOrderPage = "<div id ='new-order'><h1>Ai comandat</h1>";
			for(i = 0; i < products.length; i++){
				newOrderPage += products[i] + "<br>";
			}
			newOrderPage += ""
			newOrderPage += "<div id='order-price'><h1>Pret total: </h1>" + "<h2>" + price + " LEI" +"</h2>" +"</div></div>";
			oldOrderPage.innerHTML = newOrderPage;
			btn.style.display = "none";
			anotherBtn.style.display = "inline-block";
		}
		else{
			
		}
		
}