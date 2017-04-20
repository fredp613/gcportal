'use strict'

let express = require('express');
let router = express.Router();

import FundingProgram from '../models/fundingprogram';
import mongoose from 'mongoose';

router.get('/', (req, res) => {
 
 	FundingProgram.find({}, (err, docs)=> {
		res.json({fundingprograms:docs});
	});

  
});

router.get('/:id', (req, res) => {
  
  FundingProgram.findOne({"_id":req.params.id}, (err, doc)=>{
		res.json(doc)
  })
  
});

router.post('/update', (req, res)=>{
	let fp = req.body.fundingprogram;
	if (!fp._id) {
		fp._id = mongoose.Types.ObjectId();
	}
	let query = {_id: fp._id};
	FundingProgram.findOneAndUpdate(query, fp, {upsert:true, new:true}, (err, doc)=>{
		if (err) return res.json({error: err});
	    res.json(fp);			
	})
})

module.exports = router;
