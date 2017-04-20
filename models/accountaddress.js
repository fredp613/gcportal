'use strict'

import mongoose from "mongoose"

let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;

const AccountAddress = new mongoose.Schema({
	accountId: ObjectId,
	addressId: ObjectId,
	type: String
});
export default mongoose.model('AccountAddress',AccountAddress);
