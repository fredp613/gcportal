'use strict'

let express = require('express');
let router = express.Router();

import FundingApplication from '../models/fundingapplication';
import mongoose from 'mongoose';
import crypto from 'crypto';


function randomValueHex(len) {
    return crypto.randomBytes(Math.ceil(len/2))
        .toString('hex') // convert to hexadecimal format
        .slice(0,len);   // return required number of characters
}

router.get('/all/:contactid', (req, res) => {
 	FundingApplication.find({contactId: req.params.contactid}, (err, docs)=> {
		if (err) return res.json({error:err});
		console.log(docs);
		res.json({fundingapplications:docs});
	});

  
});

router.get('/:id', (req, res) => {
  
  FundingApplication.findOne({"_id":req.params.id}, (err, doc)=>{
		res.json(doc)
  })
  
});

router.post('/update', (req, res)=>{
	let fa = req.body;
	if (!fa._id) {
		fa._id = mongoose.Types.ObjectId();
		fa.createdOn = Date();
	}
	let appId = "APP-" + (randomValueHex(7)).toUpperCase();	
	if (req.body.applicationStatus !== "submitted") {
		fa.applicationStatus = "draft";
	} else {
		fa.applicationStatus = "submitted";
		fa.submittedOn = Date();
	}
	fa.applicationId = appId;
	fa.updatedOn = Date();
	console.log(fa);
	let query = {_id: fa._id};
	FundingApplication.findOneAndUpdate(query, fa, {upsert:true, new:true}, (err, doc)=>{
		if (err) return res.json({error: err});
	    res.json(fa);			
	});
})

module.exports = router;
