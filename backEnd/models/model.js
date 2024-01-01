
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

let issueSchema = new Schema({
	id : String,
	Description : String,
	Severity : String,
	Status : String,
	CreatedDate : String,
	ResolvedDate : String
})

let Issue = model('Issue',issueSchema)

export default Issue; 
