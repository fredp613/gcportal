'use strict'

let express = require('express');
let router = express.Router();

import Address from '../models/address';

router.get('/', (req, res) => {
 
 	Address.find({}, (err, docs)=> {
		res.json({addresses:docs});
	});

  
});

router.get('/:id', (req, res) => {
  
  Address.findOne({"_id":req.params.id}, (err, doc)=>{
		res.json({address:doc})
  })
  
});

module.exports = router;
