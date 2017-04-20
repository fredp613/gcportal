
'use strict'

import mongoose from "mongoose"

let Schema = mongoose.Schema;
let	ObjectId = Schema.ObjectId;

const FundingProgram = new mongoose.Schema({
	title: String,
	description: String,
	eligibility: String,
	formUrl: String,
	createdAt: Date,
	updatedAt: Date
});
export default mongoose.model('FundingProgram',FundingProgram);
