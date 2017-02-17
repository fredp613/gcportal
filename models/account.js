
'use strict'

import mongoose from "mongoose"

let Schema = mongoose.Schema;


const Account = new mongoose.Schema({
	legalName: String,
	fullName: String,
	email: {type: String, unique: true},
	website: String,
    primaryAddress: ObjectId,
	mailingAddress: ObjectId
});
export default mongoose.model('Account', account);
