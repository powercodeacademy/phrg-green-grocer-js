let items = {
  "AVOCADO": {price: 3.00, clearance: true},
  "PEANUTBUTTER": {price: 3.00, clearance: true},
  "BEETS": {price: 2.50, clearance: false}
}

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

// console.log(consolidateCart(items));

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
  
  return couponCart
}

// applyCoupons(consolidateCart(items), coupons)

const applyClearance = (cart) => {
  // code here
  let clearanceCart = {...cart}
  items.forEach((foodItem) => {
    const cartItemValues = Object.values(foodItem)[0];
    console.log(clearanceCart); 


    if (cartItemValues.clearance) {
      // clearanceCart[cartItemKey].price = cartItemValues.price * 0.8
      cartItemValues.price * 0.8
      debugger
    } 

    
  })
  return clearanceCart
}

applyClearance(items);

const checkout = (cart, coupons) => {
  // code here
}

