
'use strict'

import mongoose from "mongoose"

let Schema = mongoose.Schema;
let	ObjectId = Schema.ObjectId;

const FundingApplication = new mongoose.Schema({
	title: String,
	description: String,
	applicantId: ObjectId,
	gcimsId: String
});
export default mongoose.model('FundingApplication',FundingApplication);
