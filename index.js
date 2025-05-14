const cart = [
  { AVOCADO: { price: 3.0, clearance: true } },
  { AVOCADO: { price: 3.0, clearance: true } },
  { KALE: { price: 3.0, clearance: false } },
]
const couponsArr = [{ item: "AVOCADO", num: 2, cost: 5.0 }]

const consolidateCart = (cart) => {
  const newCart = {}

  cart.forEach(item =>{
    const itemName = Object.keys(item)[0]
    const itemInfo = item[itemName]
    if (newCart[itemName]) {
      newCart[itemName].count += 1
    } else {
      newCart[itemName] = { ...itemInfo, count: 1 }
    }
  })
  return newCart
}

const applyCoupons = (cart, coupons) => {
  const updatedCart = {...cart};

  coupons.forEach(coupon => {
    const couponCost = coupon.cost
    const itemName = coupon.item
    const discountedItems = coupon.num
    const itemLabel = `${itemName} W/COUPON`
    const item = updatedCart[itemName]


    if (item && item.count >= discountedItems) {
      const clearanceStatus = item.clearance;

      if (updatedCart[itemLabel]) {
        updatedCart[itemLabel].count += 1;
      } else {
        updatedCart[itemLabel] = {
          price: couponCost,
          count: 1,
          clearance: clearanceStatus
        };
      }

      item.count -= discountedItems;
    }
  })
  return updatedCart
}

const applyClearance = (cart) =>{
  for (let item in cart) {
    const itemData = cart[item];
    const onClearance = itemData.clearance
    if (onClearance) {
      itemData.price *= .8
      itemData.price = Math.round(itemData.price * 10) / 10
    }
  }
  return cart
}

const checkout = (cart, coupons) => {
  const consolidatedCart = consolidateCart(cart)
  const couponsApplied = applyCoupons(consolidatedCart, coupons)
  const clearanceApplied = applyClearance(couponsApplied)

}

// console.log(consolidateCart(consoCart))
// const freshCart = consolidateCart(items)
// console.log(applyCoupons(freshCart, couponz))
// console.log(applyClearance(consoCart))
