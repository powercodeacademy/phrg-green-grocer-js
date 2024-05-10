# Pairing Project

## The Plan

In this pairing lab, there is no designated point to switch roles. Instead, every 30 minutes, the pair should switch responsibilities; the driver should become the navigator, and the navigator becomes the driver.

To minimize extra cloning and forking, this project should be completed in only one person's GitHub account.

## Objectives

Create a checkout function to calculate the total cost of a cart of items, applying any discounts and coupons as necessary.

Dr. Steve Bruhle, your green grocer, may not be ready, but you are!

## Instructions

Implement a checkout function to calculate the total cost of a cart of items, applying discounts and coupons as needed. This function will rely on `consolidateCart`, applyCoupons, and `applyClearance` functions.

### The consolidateCart Function

The cart begins as an array of individual item objects. Convert this array into an object that includes the counts for each item using the `consolidateCart` function.

For example, if the function receives the array below:

```js
[
  {"AVOCADO": {price: 3.0, clearance: true}},
  {"AVOCADO": {price: 3.0, clearance: true}},
  {"KALE": {price: 3.0, clearance: false}}
]
```

The function should return the object below:

```js
{
  "AVOCADO": {price: 3.0, clearance: true, count: 2},
  "KALE": {price: 3.0, clearance: false, count: 1}
}
```

### The applyCoupons function

If given a cart like this:

```js
{
  "AVOCADO": {price: 3.0, clearance: true, count: 3},
  "KALE": {price: 3.0, clearance: false, count: 1}
}
```

and a coupon for avocados like this:

```js
{item: "AVOCADO", num: 2, cost: 5.0}
```

`applyCoupons` should modify the cart to look like this:

```js
{
  "AVOCADO": {price: 3.0, clearance: true, count: 1},
  "KALE": {price: 3.0, clearance: false, count: 1},
  "AVOCADO W/COUPON": {price: 5.0, clearance: true, count: 1}
}
```

### The `applyClearance` Function

This function applies a 20% discount to every item on clearance.

For instance, if given this cart:

```js
{
  "PEANUTBUTTER": {price: 3.00, clearance: true, count: 2},
  "KALE": {price: 3.00, clearance: false, count: 3},
  "SOY MILK": {price: 4.50, clearance: true, count: 1}
}
```

The function should return a cart with the clearance applied to peanut butter and soy milk:

```js
{
  "PEANUTBUTTER": {price: 2.40, clearance: true, count: 2},
  "KALE": {price: 3.00, clearance: false, count: 3},
  "SOY MILK": {price: 3.60, clearance: true, count: 1}
}
```

### The `checkout` Function

Create a `checkout` function that calculates the total cost of the consolidated cart. When checking out, follow these steps in order:

Apply coupon discounts if the proper number of items are present.
* Apply a 20% discount if items are on clearance.
* If, after applying the coupon and clearance discounts, the cart's total is over $100, then apply a 10% discount.
* Named Parameters

In JavaScript, named parameters can be mimicked by destructuring objects passed as function arguments. This makes the code more expressive since you can see directly what each parameter is for. The order of parameters doesn't matter as long as the names match.

For example, `checkout({cart: [], coupons: []})` achieves the same as `checkout({coupons: [], cart: []})`.

Resources
* [MDN Web Docs on Destructuring Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)


