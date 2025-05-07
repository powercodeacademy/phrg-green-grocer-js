const consolidateCart = (cart) => {
  let newCart = {}

  cart.forEach((item) => {
    const itemName = Object.keys(item)[0]
    let itemValues = Object.values(item)[0]

    if (newCart[itemName]) {
      itemValues["count"] = newCart[itemName]["count"] + 1
    } else {
      itemValues["count"] = 1
    }

    newCart[itemName] = itemValues
  })

  return newCart
}

const applyCoupons = (cart, coupons) => {
  coupons.forEach((coupon) => {
    const couponItemName = coupon["item"]
    const matchingCartItem = cart[couponItemName]

    if (matchingCartItem && matchingCartItem["count"] >= coupon["num"]) {
      let count = 0
      if (cart[`${couponItemName} W/COUPON`]) {
        count = cart[`${couponItemName} W/COUPON`]["count"]
      }

      const couponAttributes = {
        price: coupon["cost"],
        count: count + 1,
        clearance: matchingCartItem["clearance"],
      }
      cart[`${couponItemName} W/COUPON`] = couponAttributes

      const originalItemCount = cart[couponItemName]["count"]
      const newItemCount = originalItemCount - coupon["num"]
      cart[couponItemName] = { ...cart[couponItemName], count: newItemCount }
    }
  })

  return cart
}

const applyClearance = (cart) => {
  Object.keys(cart).forEach((itemName) => {
    if (cart[itemName]["clearance"]) {
      let discountedPrice = cart[itemName]["price"] * 0.8
      discountedPrice = Number(discountedPrice.toFixed(2))
      cart[itemName] = { ...cart[itemName], price: discountedPrice }
    }
  })

  return cart
}

const checkout = (cart, coupons) => {
  const consolidatedCart = consolidateCart(cart)
  const appliedCoupons = applyCoupons(consolidatedCart, coupons)
  const appliedClearance = applyClearance(appliedCoupons)

  let total = Object.values(appliedClearance).reduce(
    (acc, values) => acc + values["price"] * values["count"],
    0.0
  )

  return total > 100 ? Number(total * (0.9).toFixed(2)) : total
}
