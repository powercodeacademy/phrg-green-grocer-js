const cartArray = [
  {"AVOCADO": {price: 3.0, clearance: true}},
  {"AVOCADO": {price: 3.0, clearance: true}},
  {"KALE": {price: 3.0, clearance: false}},
  {"KALE": {price: 3.0, clearance: false}}

]
//

const consolidateCart = (cart) => {
  // code here
  // create a new object, 
  let newCart = {}
  //check each item is in the cart
  
  cart.forEach(item => {
    //if item is in cart, count++ 
    const itemName = Object.keys(item)[0]
    if (itemName in newCart){
      newCart[itemName].count += 1
    } else {
      //else if not in the cart, add it to the cart
      //get item values
      let itemValues = Object.values(item)[0] 
      //add count 1 to values
      itemValues["count"] = 1
            //assign values to object
      newCart[Object.keys(item)[0]] = itemValues
    }
    
  })
  return newCart
  
  
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

