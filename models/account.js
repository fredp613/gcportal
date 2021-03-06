
'use strict'

import mongoose from "mongoose"

let Schema = mongoose.Schema;
let	ObjectId = Schema.ObjectId;

const Account = new mongoose.Schema({
	legalName: String,
	fullName: String,
	email: {type: String, unique: true},
	accountType: Number,
	website: String,
    primaryAddress: ObjectId,
	mailingAddress: ObjectId
});
export default mongoose.model('Account', Account);
