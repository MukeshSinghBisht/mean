const bcrypt = require('bcrypt');
const Joi = require('joi');
const Order = require('../models/user.model');

const orderSchema = Joi.object({
  userId: Joi.number().required(),
  type: Joi.string().required(),
  price: Joi.number().required(),
  quantity: Joi.number().required(),
  total: Joi.number().required(),
  orderLeft: Joi.number().required(),
  createdAt: Joi.date().required()
})


module.exports = {
    insert
}

async function insert(order) {
    order = await Joi.validate(order, orderSchema, { abortEarly: false });
  return await new Order(order).save();
}

async function update(query, data){


}

async function read(query){

}

async function remove(query){
    
}

//==========\
let wallet = {
    curId, total_amout, 
  }
  let pair_master = {
    id, curId, from, to 
  }
  let currency_master = {
    curCode,curType,curIcon
  }
  
  function getTradeWallet(params) {
    
  }
  
  