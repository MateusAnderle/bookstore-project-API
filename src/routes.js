const { Router } = require('express');

const OrderController = require('./controllers/OrderController');
const ProductController = require('./controllers/ProductController');
const RegistrationController = require('./controllers/RegistrationController');

const routes = Router();

routes.post('/products', ProductController.register)
routes.post('/order', OrderController.registerOrder)
routes.post('/registration', RegistrationController.registerNewUser)

routes.get('/products', ProductController.listproducts)
routes.get('/products/:id', ProductController.listproductsbyid)
routes.get('/products/filter/:category', ProductController.listCategoryBooks)
routes.get('/order', OrderController.listOrders)
routes.get('/registration', RegistrationController.listRegistration)

routes.put('/products/:id', ProductController.updateproduct)

routes.delete('/products/:id', ProductController.deleteproduct)


module.exports = routes