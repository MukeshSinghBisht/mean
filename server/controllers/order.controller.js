// const bcrypt = require('bcrypt');
// const Joi = require('joi');
// const Order = require('../models/user.model');

// const orderSchema = Joi.object({
//   userId: Joi.number().required(),
//   type: Joi.string().required(),
//   price: Joi.number().required(),
//   quantity: Joi.number().required(),
//   total: Joi.number().required(),
//   orderLeft: Joi.number().required(),
//   createdAt: Joi.date().required()
// })


// module.exports = {
//     insert
// }

// async function insert(order) {
//     order = await Joi.validate(order, orderSchema, { abortEarly: false });
//   return await new Order(order).save();
// }

// async function update(query, data){


// }

// async function read(query){

// }

// async function remove(query){
    
// }

// //==========\
// let wallet = {
//     curId, total_amout, 
//   }
//   let pair_master = {
//     id, curId, from, to 
//   }
//   let currency_master = {
//     curCode,curType,curIcon
//   }
  
//   function getTradeWallet(params) {
    
//   }
  
 const db = require('../config/mongodb');
 async function insertOne(){
   db.collection('order').insertOne({userId: 1, 
    pairId: 2,
     trade: 'Buy',
      tradeType: 'Market',
    price: 20,
    amount: 2,
    totalAmount: 20*2
    },(e, r)=>{
      if(e){
        console.log(e)
      }
      console.log('r',r)
    })
 }
 async function insertMany(){
  db.collection('order').insertMany([{userId: 2, 
    pairId: 2,
     trade: 'Buy',
      tradeType: 'Limit',
    price: 30,
    amount: 3,
    totalAmount: 30*3
    },{userId: 3, 
      pairId: 3,
       trade: 'Buy',
        tradeType: 'Limit',
      price: 40,
      amount: 2,
      totalAmount: 40*2
      }],(e, r)=>{
        if(e){
          console.log(e)
        }
        console.log('r',r)
      })
}
insertOne();
insertMany();