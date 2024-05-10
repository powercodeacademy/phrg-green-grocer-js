const cartArray = [
  {"AVOCADO": {price: 3.0, clearance: true}},
  {"AVOCADO": {price: 3.0, clearance: true}},
  {"KALE": {price: 3.0, clearance: false}}
]
//

const consolidateCart = (cart) => {
  // code here
  // create a new object, 
  let newCart = {}
  //check each item is in the cart
  let countValue = 1
  cart.forEach(item => {
    //if item is in cart, count++ 
    if (item in newCart){
      countValue++
    } else {
      //else if not in the cart, add it to the cart
      newCart[Object.keys(item)[0]] = Object.values(item)[0] 
    }
    debugger
  })
  console.log(newCart)
   debugger
  //else if not in the cart, add it to the cart
  //cartObj = Object.assign({}, cart)
  
  //receives array and returns and obj - converstion
  // count of individual food in cart and add to obj

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////
const applyCoupons = (cart, coupons) => {
  // code here
}

const applyClearance = (cart) =>{
  // code here
}

const checkout = (cart, coupons) => {
  // code here
}

consolidateCart(cartArray)

