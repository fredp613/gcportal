'use strict'

import mongoose from "mongoose"

let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;

const ContactAccount = new mongoose.Schema({
	contactId: ObjectId,
	accoundId: ObjectId,
	accountName: String
});
export default mongoose.model('ContactAccount',ContactAccount);
