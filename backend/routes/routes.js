import express from 'express';
import { userSignup, userLogIn } from '../controller/user-controller.js';
import { getProductById, getProducts } from '../controller/product-controller.js';
//import { addItemInCart } from '../controller/cart-controller.js';
import { addPaymentGateway, paymentResponse } from '../controller/payment-controller.js';

const router = express.Router();

router.post('/signup', userSignup);
router.post('/login', userLogIn);

router.get('/products', getProducts);
//http://localhost:3000/product/product4
router.get('/product/:id', getProductById);

//router.post('/cart/add', addItemInCart);

router.post('/payment', addPaymentGateway);
router.post('/callback', paymentResponse);


export default router;