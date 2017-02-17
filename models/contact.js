'use strict'

import mongoose from "mongoose"

let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;

const Contact = new mongoose.Schema({
	firstName: String,
	lastName: String,
	email: {type: String, unique: true},
	website: String,
    primaryAddress: ObjectId
});
export default mongoose.model('Contact', Contact);
