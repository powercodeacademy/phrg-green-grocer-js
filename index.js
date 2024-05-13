let items = [
  {"AVOCADO": {price: 3.00, clearance: true}},
  {"AVOCADO": {price: 3.00, clearance: true}},
  {"KALE": {price: 3.00, clearance: false}}
]

let coupons = [
  {item: "AVOCADO", num: 2, cost: 5.00},
 
]

const consolidateCart = (cart) => {
  const newCart = {}
  
  cart.forEach((food) => {
    const name = Object.keys(food)
    const foodValues = Object.values(food)[0]
    foodValues.count = 1
    if (newCart[name]) {
      newCart[name].count++
    } else {
      newCart[name] = foodValues
    }
  })
  return newCart
}; 

console.log(consolidateCart(items));




//cart = AVOCADO: Object { price: 3, clearance: true, count: 3 }
//KALE: Object { price: 3, clearance: false, count: 1 }
//coupon = Key : {}
const applyCoupons = (cart, coupons) => {
  const couponCart = {...cart}

  coupons.forEach((coupon) => { 
    const foodName = coupon.item
    const couponName = foodName + ' W/COUPON'
    const couponValue = {
      price: coupons[0].cost, 
      count: 1, 
      clearance: couponCart[foodName].clearance
    }
    const updatedItemCount = couponCart[foodName].count - coupon.num

    couponCart[couponName] = couponValue
    couponCart[foodName].count = updatedItemCount
  })


// for each coupon Add key:value pair with key of "ITEM NAME W/COUPON" and Copy item values to ITEM NAME W/COUPON
//Update ITEM NAME W/COUPON values accordingly
//Update item values accordingly
// return {
  // "AVOCADO": {price: 3.0, clearance: true, count: 1},
  // "KALE": {price: 3.0, clearance: false, count: 1},
  // "AVOCADO W/COUPON": {price: 5.0, clearance: true, count: 1}




  return couponCart
}

applyCoupons(consolidateCart(items), coupons)

const applyClearance = (cart) =>{
  // code here
}

const checkout = (cart, coupons) => {
  // code here
}

