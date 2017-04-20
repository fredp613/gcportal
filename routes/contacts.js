'use strict'

let express = require('express');
let router = express.Router();

import Contact from '../models/contact';
import User from '../models/user';
import mongoose from 'mongoose';
/* GET ALL CONTACTS - 20 per page. */
router.get('/', (req, res) => {
 	Contact.find({}, (err, docs)=> {
		res.json({contacts:docs});
	});
});


router.get('/applicant/:gckey', function(req, res, next) {
  User.findOne({gckey:req.params.gckey}, (err, doc)=>{
	  if (err) return res.json({error:err});
	  Contact.findOne({_id:doc.contactId}, (err1, doc1)=>{
		  if (err1) return res.json({error:err1});
		  res.json(doc1)
	  })

  })
});

router.post('/update', (req, res)=>{
	let contact = req.body;
	if (!contact._id) {
		contact._id = mongoose.Types.ObjectId();
	}
	let query = {_id: contact._id};
	Contact.findOneAndUpdate(query, contact, {upsert:true, new:true}, (err, doc)=>{
		if (err) return res.json({error: err});
		User.findOneAndUpdate({gckey:req.body.gckey}, {$set:{contactId:doc._id}},  (err1, doc1)=>{
			if (err1) return res.json({error:err1});
			let updatedContact = doc;
			updatedContact.gckey = req.body.gckey;
			res.json(updatedContact);			
		});
	})
})

module.exports = router;
