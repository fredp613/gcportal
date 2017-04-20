'use strict'

import mongoose from "mongoose"

let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;

const ContactAddress = new mongoose.Schema({
	contactId: ObjectId,
	addressId: ObjectId,
	type: String
});
export default mongoose.model('ContactAddress',ContactAddress);
