
var items = [];
var prices = [];

function addToCart(item, price) {
	
		items.push(item);
		prices.push(price);
	 
	}
	

function checkOut() {
	
	var sum =0;
	
	var nameEl = document.getElementById("tablehead");
	
	var checkEl = document.getElementById("checkouttablehead");
	
	for (var j = 0; j<prices.length; j++) {
		sum += prices[j];	
	}
	
	checkEl.insertAdjacentHTML("beforeend", "<tr id = 'checkouttablehead'><td> Total </td><td> $"+ sum +" </td></tr>");	
	
	for (var i=0; i<items.length; i++) {
		
			nameEl.insertAdjacentHTML("afterend", "<tr id = 'tablecell'><td> "+ items[i] + " </td><td> $"+ prices[i] +" </td></tr>"); 
			
	}
	
	
	
	
	
}