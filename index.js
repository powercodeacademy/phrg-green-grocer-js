const items = [
  {"AVOCADO": {price: 3.0, clearance: true}},
  {"AVOCADO": {price: 3.0, clearance: true}},
  {"KALE": {price: 3.0, clearance: false}}
]

// let coupons = [
//   {item: "AVOCADO", num: 2, cost: 5.00},
//   {item: "BEER", num: 2, cost: 20.00},
//   {item: "CHEESE", num: 3, cost: 15.00}
// ]

// const consolidateCart = (cart) = cart.reduce((newObject, food) => {

  
//     if (cart[food]) {
//       cart[food].count++
//     } else {
//       {price:cart[item].price, clearance:cart[item][clearance], count: 1}
//     }

// })

const consolidateCart = (cart) => {
  cart.reduce((newObject, food) => {

    // if (cart[food]) {
    //   cart[food].count++
    // }
    //     // } else {
    // //   {price:cart[item].price, clearance:cart[item][clearance], count: 1}
    // // }

    console.log(cart);
    console.log(food);
  })
}

console.log(consolidateCart());



const applyCoupons = (cart, coupons) => {
  // code here
}

const applyClearance = (cart) =>{
  // code here
}

const checkout = (cart, coupons) => {
  // code here
}
