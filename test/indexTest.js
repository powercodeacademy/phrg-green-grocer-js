require ( './helpers.js' )

const { expect } = require('chai')

describe("Grocer", function() {
  let items = [
    {"AVOCADO": {price: 3.00, clearance: true}},
    {"KALE": {price: 3.00, clearance: false}},
    {"BLACK_BEANS": {price: 2.50, clearance: false}},
    {"ALMONDS": {price: 9.00, clearance: false}},
    {"TEMPEH": {price: 3.00, clearance: true}},
    {"CHEESE": {price: 6.50, clearance: false}},
    {"BEER": {price: 13.00, clearance: false}},
    {"PEANUTBUTTER": {price: 3.00, clearance: true}},
    {"BEETS": {price: 2.50, clearance: false}},
    {"SOY MILK": {price: 4.50, clearance: true}}
  ]

  let coupons = [
    {item: "AVOCADO", num: 2, cost: 5.00},
    {item: "BEER", num: 2, cost: 20.00},
    {item: "CHEESE", num: 3, cost: 15.00}
  ]

  function findItem(name) {
    return items.find(item => Object.keys(item).includes(name))
  }

  function findCoupon(name) {
    return coupons.find(coupon => coupon.item === name)
  }

  describe("#consolidateCart", function() {
    it("adds a count of one to each item when there are no duplicates", function() {
      let cart = [findItem('TEMPEH'), findItem('PEANUTBUTTER'), findItem('ALMONDS')]
      let result = consolidateCart(cart)
      Object.values(result).forEach(attributes => {
        expect(Object.keys(attributes)).to.include('count')
        expect(attributes.count).to.equal(1)
      })
    })

    it("increments count when there are multiple items", function() {
      let avocado = findItem('AVOCADO')
      let cart = [avocado, avocado, findItem('KALE')]

      let result = consolidateCart(cart)
      expect(result["AVOCADO"].price).to.equal(3.00)
      expect(result["AVOCADO"].clearance).to.be.true
      expect(result["AVOCADO"].count).to.equal(2)

      expect(result["KALE"].price).to.equal(3.00)
      expect(result["KALE"].clearance).to.be.false
      expect(result["KALE"].count).to.equal(1)
    })
  })
})
