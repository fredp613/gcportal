
'use strict'

import mongoose from "mongoose"

let Schema = mongoose.Schema;


const User = new mongoose.Schema({
	email: {type: String, unique: true},
	password: String,
	contactId: ObjectId
});
export default mongoose.model('User', User);
