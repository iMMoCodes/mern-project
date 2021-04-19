import mongoose from 'mongoose'

const commentSchema = mongoose.Schema({
	message: String,
	name: String,
	createdAt: {
		type: Date,
		default: new Date(),
	},
})

const CommentMessage = mongoose.model('Comment', commentSchema)

export default CommentMessage
