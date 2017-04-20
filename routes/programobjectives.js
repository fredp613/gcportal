'use strict'

let express = require('express');
let router = express.Router();

import ProgramObjective from '../models/programobjective';
import mongoose from 'mongoose';

router.get('/', (req, res) => {
 
 	ProgramObjective.find({}, (err, docs)=> {
		res.json({programobjectives:docs});
	});

  
});

router.get('/:id', (req, res) => {
  
  ProgramObjective.findOne({"_id":req.params.id}, (err, doc)=>{
		res.json({programobjective:doc})
  })
  
});

router.post('/update', (req, res)=>{
	let po = req.body.programobjective;
	if (!po._id) {
		po._id = mongoose.Types.ObjectId();
	}
	let query = {_id: po._id};
	ProgramObjective.findOneAndUpdate(query, po, {upsert:true, new:true}, (err, doc)=>{
		if (err) return res.json({error: err});
	    res.json({programobjective:po});			
	})
})

module.exports = router;
