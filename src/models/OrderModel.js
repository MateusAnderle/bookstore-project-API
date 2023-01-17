const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const OrderSchema = new Schema({
  id: ObjectId,
  produtos: Array,
  resumoPedido: Object,
  entrega: Object,
});

const OrderModel = mongoose.model('order', OrderSchema)

module.exports = OrderModel;