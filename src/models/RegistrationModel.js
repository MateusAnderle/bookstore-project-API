const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const RegistrationSchema = new Schema({
  id: ObjectId,
  name: String,
  zipCode: Number,
  phone: Number,
  address: String,
  district: String,
  city: String,
  cpf: Number,
  email: String,
  password: String,
  repeatPassword: String,
});

const RegistrationModel = mongoose.model('registration', RegistrationSchema)

module.exports = RegistrationModel;