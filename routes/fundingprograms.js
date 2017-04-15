'use strict'

let express = require('express');
let router = express.Router();

import FundingProgram from '../models/fundingprogram';

router.get('/', (req, res) => {
 
 	FundingProgram.find({}, (err, docs)=> {
		res.json({fundingprograms:docs});
	});

  
});

router.get('/:id', (req, res) => {
  
  FundingProgram.findOne({"_id":req.params.id}, (err, doc)=>{
		res.json({fundingprogram:doc})
  })
  
});

module.exports = router;
