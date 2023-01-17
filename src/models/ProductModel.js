const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
  id: ObjectId,
  livro: String,
  autor: String,
  ano: String,
  genero: String,
  image: String,
  quantidade: Number,
  precoSugerido: String,
  preco: String,
  sinopse: String,
  Idioma: String,
  isbn: Number,
  fabricante: String,
  dimensoes: String,
});

const ProductModel = mongoose.model('product', ProductSchema)

module.exports = ProductModel;