const { Router } = require("express");
const express = require("express");

const router = express.Router();

// Middleware
const {authCheck} = require('../middlewares/auth');
// Controller
const {
  userCart,
  getUserCart,
  emptyCart,
  saveAddress,
  applyCouponToUserCart,
  createOrder,
  orders,
  addToWishlist,
  wishlist,
  removeFromWishlist,
  createCashOrder
} = require('../controllers/user');

router.post('/user/cart', authCheck, userCart) // save cart
router.get('/user/cart', authCheck, getUserCart) // get cart
router.delete('/user/cart', authCheck, emptyCart) // empty cart
router.post('/user/address', authCheck, saveAddress)

router.post('/user/order', authCheck, createOrder) // stripe
router.post('/user/cash-order', authCheck, createCashOrder) // cod
router.get("/user/orders", authCheck, orders);

// coupon
router.post('/user/cart/coupon', authCheck, applyCouponToUserCart)

// withlist
router.post('/user/wishlist', authCheck, addToWishlist)
router.get('/user/wishlist', authCheck, wishlist)
router.put('/user/wishlist/:productId', authCheck, removeFromWishlist)
module.exports = router;
