const express = require('express');

//=================================================================//  import controllers  //==============//
const {
  getallusers,
  postusers,
  edituser,
  deleteuser,
  singleuser,
} = require('../controllers/pagecontrollers');

//=================================================================//  create router       //==============//
const router = express.Router();
//=================================================================//   use router         //==============//
router.get('/', getallusers);
router.post('/', postusers);
router.get('/:id', singleuser);
router.put('/:id', edituser);
router.delete('/:id', deleteuser);
//=================================================================//   export router      //==============//
module.exports = router;
