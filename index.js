const items = [
  {"AVOCADO": {price: 3.0, clearance: true}},
  {"AVOCADO": {price: 3.0, clearance: true}},
  {"KALE": {price: 3.0, clearance: false}}
]


const consolidateCart = (cart) => {
  const newCart = {}
  
  cart.forEach((food) => {
    const name = Object.keys(food); 
    const foodValues = Object.values(food)[0]; 
    foodValues.count = 1; 

    if (newCart[name]) {
      newCart[name].count++;
    } else {
      newCart[name] = foodValues;
    }

  })
  return newCart;
}; 

const applyCoupons = (cart, coupons) => {
  // code here
}

const applyClearance = (cart) =>{
  // code here
}

const checkout = (cart, coupons) => {
  // code here
}

