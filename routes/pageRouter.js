const express = require('express');

//=================================================================//  import controllers  //==============//
const {
  getallusers,
  postusers,
} = require('../controllers/pagecontrollers');

//=================================================================//  create router       //==============//
const router = express.Router();
//=================================================================//   use router         //==============//
router.get('/', getallusers);
router.post('/', postusers);
//=================================================================//   export router      //==============//
module.exports = router;
