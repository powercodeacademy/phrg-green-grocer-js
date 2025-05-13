let items = [
  { AVOCADO: { price: 3.0, clearance: true } },
  { AVOCADO: { price: 3.0, clearance: true } },
  { AVOCADO: { price: 3.0, clearance: true } },
  { KALE: { price: 3.0, clearance: false } },
  { BLACK_BEANS: { price: 2.5, clearance: false } },
  { CHEESE: { price: 6.5, clearance: false } },
  { ALMONDS: { price: 9.0, clearance: false } },
  { TEMPEH: { price: 3.0, clearance: true } },
  { TEMPEH: { price: 3.0, clearance: true } },
  { TEMPEH: { price: 3.0, clearance: true } },
  { TEMPEH: { price: 3.0, clearance: true } },
  { CHEESE: { price: 6.5, clearance: false } },
  { BEER: { price: 13.0, clearance: false } },
  { PEANUT_BUTTER: { price: 3.0, clearance: true } },
  { BEETS: { price: 2.5, clearance: false } },
  { "SOY MILK": { price: 4.5, clearance: true } },
]

// // Expected output:
// // {
// //   "AVOCADO": {price: 3.0, clearance: true, count: 2},
// //   "KALE": {price: 3.0, clearance: false, count: 1}
// // }

//   //Declare empty object
//   //Loop through cart, push key, value pair into object
//   //If key exists, increment count
// const consolidatedItems = (cart) => {
//   const consolidated = {}

//   for (let item of cart){
//     const[key, value] = Object.entries(item)[0]
//     consolidated[key.toString()] = value
//   }
//   return consolidated
// }

// const consolidateCart = (cart) => {
//   const consolidated = consolidatedItems(cart)

//   for (let key in consolidated) {
//     consolidated[key].count = 1;
//   }

//   return consolidated
// }
const consolidateCart = (cart) => {

  const newCart = {}



  for (const item of cart) {

    const itemName = Object.keys(item)[0]

    if (newCart[itemName]) {

    newCart[itemName].count++

    } else {

    newCart[itemName] = { ...Object.values(item)[0], count: 1 }

    }

  }

  return newCart

}
const coupons = {item: "AVOCADO", num: 2, cost: 5.0}

const applyCoupons = (cart, coupons) => {
  const updatedCart = {...cart};

  coupons.forEach(coupon => {
    const couponKey = `${coupon.item} W/COUPON`;
    debugger
    updatedCart[couponKey] = { ... };
  });
  return updatedCart

  // for (let itemName in cart){
  //   if (itemName === coupon.tem){
  //   const couponItemName = `${itemName} W/COUPON`;
  //   updatedCart[couponItemName] = {};
  // }
  // }
  // return updatedCart;

  // adds a new key, value pair to the cart hash called 'ITEM NAME W/COUPON'"
// const couponCart = {};

// const itemName = "AVOCADO";
// const key = `${itemName} W/COUPON`;
// cart[key] = { num: 2, clearance: true, cost: 5.0 };

// console.log(cart);
}
const applyClearance = (cart) =>{
  // code here
}

const checkout = (cart, coupons) => {
  // code here
}


const cartItems = items.forEach((item) => {
  item.forEach(e => console.log(e))
})

// let coupons = [
//   { item: "AVOCADO", num: 2, cost: 5.0 },
//   { item: "BEER", num: 2, cost: 20.0 },
//   { item: "CHEESE", num: 3, cost: 15.0 },
// ]

// console.log(applyCoupons(consolidateCart(items), coupons))
