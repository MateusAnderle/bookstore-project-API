const OrderModel = require('../models/OrderModel');

class OrderController {
    async registerOrder(req, res){
        try {
            const createdOrder = await OrderModel.create(req.body);

            return res.status(200).json(createdOrder);
        } catch (error) {
            console.log(error)

            return res.status(404).json({message: "Failed to create order!"})
        }
    }

    async listOrders(req, res){
        try {
            const orders = await OrderModel.find();

            return res.status(200).json( orders );
        } catch (error) {
            return res.status(404).json({message: "Failed to list orders!"})
        }
    }
}

module.exports = new OrderController();