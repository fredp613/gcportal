var express = require('express');
var router = express.Router();

import User from '../models/user';
import mongoose from 'mongoose';
/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find({}, (err, docs)=>{
	  if (err) return res.json({error:err});
	  res.json({users:docs});
  })
});

router.get('/:gckey', function(req, res, next) {
  User.findOne({"gckey":req.params.gckey}, (err, doc)=>{
	  if (err) return res.json({error:err});
	  res.json(doc);
  })
});

router.post('/update', (req, res)=>{
	let user = req.body;
	if (!user._id) {
		user._id = mongoose.Types.ObjectId();
	}
	let query = {_id: user._id};
	User.findOneAndUpdate(query, user, {upsert:true, new:true}, (err, doc)=>{
		if (err) return res.json({error: err});
	    res.json(user);			
	})
})

module.exports = router;
