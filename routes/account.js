
'use strict'

let express = require('express');
let router = express.Router();

import Account from '../models/account';

/* GET ALL ACCOUNT- 20 per page. */
router.get('/', (req, res) => {
 
 	Account.find({}, (err, docs)=> {
		res.json({accounts:docs});
	});

  
});

//Account Detail
router.get('/:id', (req, res) => {
  
  Account.findOne({"_id":req.params.id}, (err, doc)=>{
		res.json({account:doc})
  })
  
});

module.exports = router;
