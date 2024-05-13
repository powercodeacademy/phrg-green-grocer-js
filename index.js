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

const applyCoupons = (cart, coupons) => {
 
  coupons.forEach((itemCoupon) => {
    let couponFoodName = itemCoupon.item
    let itemAmount = cart[couponFoodName].count 
    let neededQuantitiy = itemCoupon.num
    let couponValues = {
      price: itemCoupon.cost, 
      count: 1, 
      clearance: cart[couponFoodName].clearance
    }
    if (itemAmount >= neededQuantitiy){
      Object.assign(cart, {[`${couponFoodName} W/COUPON`]: couponValues})
      cart[couponFoodName].count = (itemAmount-neededQuantitiy)
    } 
  })
  return cart
}

const applyClearance = (cart) =>{
  for (let item in cart){
    let itemPrice = cart[item].price 
    if (cart[item].clearance){
      itemPrice = itemPrice - (itemPrice * .20)
      cart[item].price = itemPrice
    }
  }
  return cart
}

const checkout = (cart, coupons) => {
  let consolidatedCart  = consolidateCart(cart)
  applyCoupons(consolidatedCart, coupons)
  applyClearance(consolidatedCart)
  let totalPrices = 0
  for (let item in consolidatedCart){
    if (consolidatedCart[item].count !== 0){
    totalPrices += consolidatedCart[item].price
    }
  }
  if (totalPrices > 100){
    return totalPrices - (totalPrices * .10)
  } else {
    return totalPrices
  }
}
