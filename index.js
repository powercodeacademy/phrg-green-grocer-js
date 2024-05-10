const cartArray = [
  {"AVOCADO": {price: 3.0, clearance: true}},
  {"AVOCADO": {price: 3.0, clearance: true}},
  {"KALE": {price: 3.0, clearance: false}}
]
function CB(cartItem) {
  let food = Object.keys(cartItem)
    return food
}

const consolidateCart = (cart) => {
  // code here
  let something = cart.map(CB (0))

  // consolidater function
  cartObj = Object.assign({}, cart)
  
  console.log(cartObj)
  //receives array and returns and obj - converstion
  // count of individual food in cart and add to obj
  // if item is present it logs and 

}

const applyCoupons = (cart, coupons) => {
  // code here
}

const applyClearance = (cart) =>{
  // code here
}

const checkout = (cart, coupons) => {
  // code here
}

// consolidateCart(cartArray)
console.log(CB({"AVOCADO": {price: 3.0, clearance: true}}))
