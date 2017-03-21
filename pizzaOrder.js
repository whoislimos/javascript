var orderCount = 0;

//takes order with string topping and crust type
function takeOrder(topping, crustType){

  orderCount = orderCount + 1;
  
console.log("Order: " + crustType + "pizza topped with " + topping);
}


//Multiplies number of orders by cost of one order ($7.5)
function getSubTotal(itemCount){
  
  return itemCount * 7.5;
}


//Adds a 6% tax to the number of orders
function getTax(){
  
	return  getSubTotal(orderCount) * 0.06;
  
}


//adds tax and subtotal costs to return total cost 
function getTotal(){
  
  return getTax() + getSubTotal(orderCount);
}


//sample 3 orders
takeOrder("bacon","thin crust");
takeOrder("chicken","cheese crust");
takeOrder("bacon","thick crust");


//output final total
console.log(getTotal());
