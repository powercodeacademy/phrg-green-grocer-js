const cartArray = [
  {"AVOCADO": {price: 3.0, clearance: true}},
  {"AVOCADO": {price: 3.0, clearance: true}},
  {"KALE": {price: 3.0, clearance: false}},
 ]

let coupons = [
  {item: "AVOCADO", num: 2, cost: 5.00}]

const consolidateCart = (cart) => {
  
  let newCart = {}
  
  
  cart.forEach(item => {
    
    const itemName = Object.keys(item)[0]
    if (itemName in newCart){
      newCart[itemName].count += 1
    } else {
      
      let itemValues = Object.values(item)[0] 
      
      itemValues["count"] = 1
            
      newCart[Object.keys(item)[0]] = itemValues
    }
  })
  return newCart
 
}

//cart = [{Avocado}, {Avocado}]
//coupon = [{item: "AVOCADO", num: 2, cost: 5.00}]


const applyCoupons = (consilidatedCart, coupons) => {
  // newCart is a copy of cart where we are goin to add coupon too and return 
  let newCart = {}
  let couponFoodName = coupons[0].item
  let itemAmount = consilidatedCart[0][couponFoodName].count 
  let neededQuantitiy = coupons[0].num
  //check if cart has enough count for coupon.
  if (itemAmount >= neededQuantitiy){
    //add coupon to cart and add the count of coupon
    // it has to evaluate (cartAmount - num) and then make that the new count of the food in the cart
    debugger
    Object.assign(newCart, {[`${couponFoodName} W/Coupon`]: consilidatedCart[0][couponFoodName]})
    debugger


  } 
  

  //remove distcounted items from orginal item count
  //check it item is on clearance
  debugger
  
  
  // Return [{food}]
  // example return:
  // {
  //   "AVOCADO": {price: 3.0, clearance: true, count: 1},
  //   "KALE": {price: 3.0, clearance: false, count: 1},
  //   "AVOCADO W/COUPON": {price: 5.0, clearance: true, count: 1}
  // }

}






const applyClearance = (cart) =>{
  // code here
}

const checkout = (cart, coupons) => {
  // code here
}

consolidateCart(cartArray)
applyCoupons(cartArray, coupons)
