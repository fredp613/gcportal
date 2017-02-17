'use strict'

let express = require('express');
let router = express.Router();

import Contact from '../models/contact';

/* GET ALL CONTACTS - 20 per page. */
router.get('/', (req, res) => {
 
 	Contact.find({}, (err, docs)=> {
		res.json({contacts:docs});
	});

  
});

//Contact Detail
router.get('/:id', (req, res) => {
  
  Contact.findOne({"_id":req.params.id}, (err, doc)=>{
		res.json({contact:doc})
  })
  
});

module.exports = router;
