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


const applyCoupons = (cart, coupons) => {
  // extract coupon from array
  let enteredCoupon = {}

  let food = coupons[0].item
  enteredCoupon[food] = {}
  //check if cart has enougt count for coupon.


  //add coupon to cart
  

  //remove distcounted items from orginal item count
  //check it item is on clearance
  debugger
  
  
  // Return [{food}]

}






const applyClearance = (cart) =>{
  // code here
}

const checkout = (cart, coupons) => {
  // code here
}

consolidateCart(cartArray)
applyCoupons(cartArray, coupons)
