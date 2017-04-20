
'use strict'

import mongoose from "mongoose"

let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;


const User = new mongoose.Schema({
	email: {type: String, unique: true},
	password: String,
	gckey: String,
	contactId: ObjectId,
	createdOn: Date,
	updatedOn: Date
});
export default mongoose.model('User', User);
