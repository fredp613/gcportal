'use strict'

let express = require('express');
let router = express.Router();

import Address from '../models/address';
import ContactAddress from '../models/contactaddress';
import AccountAddress from '../models/accountaddress';
import mongoose from 'mongoose';
/* GET ALL CONTACTS - 20 per page. */
router.get('/', (req, res) => {
 	Address.find({}, (err, docs)=> {
		res.json({addresss:docs});
	});
});

router.get('/getContactMain/:contactId', function(req, res, next) {
	ContactAddress.findOne({contactId:req.params.contactId, addressType: "Main"}, (err,doc)=>{
		if (err) return res.json({error: err});
		
		if (doc) {
			Address.findOne({_id:doc.addressId}, (err1, doc1)=>{
				if (err1) return res.json({error: err1});
				res.json(doc1)
			})
		} else {
				res.json({error: "No records"})
		}

	})
});
router.get('/getAddressMain/:accountId', function(req, res, next) {
	AccountAddress.findOne({accountId:req.params.accountId, addressType: "Main"}, (err,doc)=>{
		if (err) return res.json({error: err});
		if (doc) {
			Address.findOne({_id:doc.addressId}, (err1, doc1)=>{
				if (err1) return res.json({error: err1});
				res.json(doc1)
			})
		} else {
				res.json({error: "No records"})
		}
	})
});

router.post('/update', (req, res)=>{
	console.log(req.body);
	let address = req.body;
	if (!address._id) {
		address._id = mongoose.Types.ObjectId();
	}
	let query = {_id: address._id};
	if (address.accountId) {
		Address.findOneAndUpdate({_id:address._id}, address, {upsert:true, new:true}, (err, doc)=>{
			if (err) return res.json({error:err});

			AccountAddress.findOneAndUpdate({accountId:address.accountId, type: "Main"}, {$set:{addressId:address._id,accountId:address.accountId, type: "Main"}},
				(err1, doc1)=>{
				if (err1) return res.json({error:err1});			
				res.json(doc)
			});
			
		})

	} else if (address.contactId) {

		Address.findOneAndUpdate({_id:address._id}, address, {upsert:true, new:true}, (err, doc)=>{
			if (err) return res.json({error:err});

			ContactAddress.findOneAndUpdate({contactId:address.contactId, type: "Main"}, {$set:{addressId:address._id,contactId:address.contactId, type: "Main"}},
				(err1, doc1)=>{
				if (err1) return res.json({error:err1});			
				res.json(doc)
			});
			
		})
	}

})

module.exports = router;
