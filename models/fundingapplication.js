
'use strict'

import mongoose from "mongoose"

let Schema = mongoose.Schema;
let	ObjectId = Schema.ObjectId;

const FundingApplication = new mongoose.Schema({
	applicationId: String,
	title: String,
	description: String,
	startDate: Date,
	endDate: Date,
	amountRequested: Number,
	accountId: ObjectId,
	contactId: ObjectId,
	gcimsId: String,
	applicationStatus: String,
	createdOn: Date,
	updatedOn: Date,
	submittedOn: Date,
	fundingProgramId: ObjectId
});
export default mongoose.model('FundingApplication',FundingApplication);
