const items = [
  {"AVOCADO": {price: 3.0, clearance: true}},
  {"AVOCADO": {price: 3.0, clearance: true}},
  {"KALE": {price: 3.0, clearance: false}}
]

const consolidateCart = (cart) => {
  newCart = {}
  cart.forEach((food) => {
    if (newCart[food]) {
      food.count++
      debugger
    } else {
       console.log('Else')
    }
  })
}
debugger 
console.log(consolidateCart(items))
  
  //Create a new cart with an empty object X
  //Iterate through the array using for each X
  //if the item is in the cart already X
  //increment the count X
  //else
  //add the item to the new cart
  //return the new cart

const applyCoupons = (cart, coupons) => {
  // code here
}

const applyClearance = (cart) =>{
  // code here
}

const checkout = (cart, coupons) => {
  // code here
}
