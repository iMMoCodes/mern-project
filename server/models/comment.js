import mongoose from 'mongoose'

const commentSchema = mongoose.Schema({
	message: String,
	name: String,
	creator: String,
	createdAt: {
		type: Date,
		default: new Date(),
	},
})

const Comment = mongoose.model('Comment', commentSchema)

export default Comment
