const { Router } = require('express');

const OrderController = require('./controllers/OrderController');
const ProductController = require('./controllers/ProductController');

const routes = Router();

routes.post('/products', ProductController.register)
routes.post('/order', OrderController.registerOrder)

routes.get('/products', ProductController.listproducts)
routes.get('/products/:id', ProductController.listproductsbyid)

routes.put('/products/:id', ProductController.updateproduct)
routes.delete('/products/:id', ProductController.deleteproduct)


module.exports = routes