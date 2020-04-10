const express = require('express');
const passport = require('passport');
const asyncHandler = require('express-async-handler');
const orderCtrl = require('../controllers/order.controller');

const router = express.Router();
module.exports = router;

router.use(passport.authenticate('jwt', { session: false }))

router.post('/createData',asyncHandler(createData))
router.route('/')
  .post(asyncHandler(insert));


async function insert(req, res) {
  // let user = await orderCtrl.insert(req.body);
  // res.json(user);
await orderCtrl.insertOne()
}

async function createData(req, res){
  let data = await orderCtrl.createData(req.body);
  res.json(data);
}