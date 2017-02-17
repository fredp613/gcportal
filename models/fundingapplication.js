
'use strict'

import mongoose from "mongoose"

let Schema = mongoose.Schema;

const FundingApplication = new mongoose.Schema({
	title: String,
	description: String,
	applicantId: ObjectId
	gcimsId: String
});
export default mongoose.model('FundingApplication',FundingApplication);
