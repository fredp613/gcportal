'use strict'

import mongoose from "mongoose"

let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;

const Address = new mongoose.Schema({
	addressLine1: String,
	addressLine2: String,
	city: String,
	province: String
	
});
export default mongoose.model('Address',Address);
