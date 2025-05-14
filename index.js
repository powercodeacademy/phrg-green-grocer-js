let items = [
  { AVOCADO: { price: 3.0, clearance: true } },
  { KALE: { price: 3.0, clearance: false } },
  { BLACK_BEANS: { price: 2.5, clearance: false } },
  { ALMONDS: { price: 9.0, clearance: false } },
  { TEMPEH: { price: 3.0, clearance: true } },
  { CHEESE: { price: 6.5, clearance: false } },
  { BEER: { price: 13.0, clearance: false } },
  { PEANUT_BUTTER: { price: 3.0, clearance: true } },
  { BEETS: { price: 2.5, clearance: false } },
  { "SOY MILK": { price: 4.5, clearance: true } },
]

const consoCart = [
  {"AVOCADO": {price: 3.0, clearance: true}},
  {"AVOCADO": {price: 3.0, clearance: true}},
  {"KALE": {price: 3.0, clearance: false}}
]

const couponz = [
  { item: "AVOCADO", num: 2, cost: 5.0 },
  { item: "BEER", num: 2, cost: 20.0 },
  { item: "CHEESE", num: 3, cost: 15.0 },
]

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
  // code here
}

const checkout = (cart, coupons) => {
  // code here
}

// console.log(consolidateCart(consoCart))
const freshCart = consolidateCart(items)
console.log(applyCoupons(freshCart, couponz))
