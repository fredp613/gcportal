
'use strict'

import mongoose from "mongoose"

let Schema = mongoose.Schema;
let	ObjectId = Schema.ObjectId;

const ProgramObjective = new mongoose.Schema({
	fundingprogram_id: String,
	objective_id: String,
	createdAt: Date,
	updatedAt: Date
});
export default mongoose.model('ProgramObjective',ProgramObjective);
