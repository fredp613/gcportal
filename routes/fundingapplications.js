'use strict'

let express = require('express');
let router = express.Router();

import FundingApplication from '../models/fundingapplication';

/* GET ALL FUNDING APPLICATIONS - 20 per page. */
router.get('/', (req, res) => {
 
 	FundingApplication.find({}, (err, docs)=> {
		res.json({fundingapplications:docs});
	});

  
});

//Funding Application Detail
router.get('/:id', (req, res) => {
  
  FundingApplication.findOne({"_id":req.params.id}, (err, doc)=>{
		res.json({fundingapplication:doc})
  })
  
});

module.exports = router;
