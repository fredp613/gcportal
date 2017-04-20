
'use strict'

let express = require('express');
let router = express.Router();

import Account from '../models/account';
import ContactAccount from '../models/contactaccount';
import mongoose from 'mongoose';

/* GET ALL ACCOUNT- 20 per page. */
router.get('/:contactId', (req, res) => {
 
 	ContactAccount.find({contactId:req.params.contactId}, (err, docs)=> {
		res.json({contactaccounts:docs});
	});

  
});

router.get('/contactaccount/:contactId', (req, res)=>{
	ContactAccount.findOne({contactId:req.params.contactId}, (err,doc)=>{
		if (err) return res.json({error:err});
		Account.findOne({_id:doc.accountId}, (err1, doc1)=>{
			if (err1) return res.json({error:err1})
			res.json(doc1);
		})
	});		

})

//Account Detail
router.get('/:id', (req, res) => {
  
  Account.findOne({"_id":req.params.id}, (err, doc)=>{
		res.json({account:doc})
  })
  
});

router.post('/update', (req, res)=>{
	let account = req.body;
	if (!account._id) {
		account._id = mongoose.Types.ObjectId();
	}
	console.log(account);
	Account.findOneAndUpdate({_id:account._id}, account, {upsert:true, new:true}, (err, doc)=>{
		if (err) return res.json({error:err});
		ContactAccount.findOneAndUpdate({contactId:account.contactId}, 
			{$set:{contactId:account.contactId, accountId:account._id, accountName:account.legalName}}, {upsert:true, new:true}, 
			(err1, doc1)=>{
			if (err1) return res.json({error:err1});
			console.log("we did here", doc1);
			res.json(account);
		})
	})
})

module.exports = router;
