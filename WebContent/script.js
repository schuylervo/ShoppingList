
var items = [];
var prices = [];
var sum = 0;

function addToCart(item, price) {
	
		items.push(item);
		prices.push(price);
	 
	}

function calcSalesTax (sum) {
	var salesTax = 1.06* sum;
	return salesTax;
}

function calcGrandTotal (sum) {
	var grandTotal = 1.06* sum + sum;
	return grandTotal;
}
	

function checkOut() {
	
	var nameEl = document.getElementById("tablehead");
	
	var checkEl = document.getElementById("checkouttablehead");
	var taxEl = document.getElementById("tax");
	var grandEl = document.getElementById("grand");
	
	for (var j = 0; j<prices.length; j++) {
		sum += prices[j];	
	}
	
	checkEl.insertAdjacentHTML("beforeend", "<tr id = 'checkouttablehead'><td> </td><td> $"+ Number(sum).toFixed(2) +" </td></tr>");
	taxEl.insertAdjacentHTML("beforeend", "<tr id = 'tax'><td> </td><td> $"+ Number(sum*1.06 - sum).toFixed(2) +" </td></tr>");	
	grandEl.insertAdjacentHTML("beforeend", "<tr id = 'grand'><td> </td><td> $"+ Number(sum*1.06).toFixed(2) +" </td></tr>");
	
	for (var i=0; i<items.length; i++) {
		
			nameEl.insertAdjacentHTML("afterend", "<tr id = 'tablecell'><td> "+ items[i] + " </td><td> $"+ Number(prices[i]).toFixed(2) +" </td></tr>"); 
			
	}
	
	
	
	
	
}