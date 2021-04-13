import mongoose from 'mongoose'

// Create Schema
const postSchema = mongoose.Schema({
	title: String,
	message: String,
	creator: String,
	tags: [String],
	selectedFiled: String,
	likeCount: {
		type: Number,
		default: 0,
	},
	createdAt: {
		type: Date,
		default: new Date(),
	},
})

// Turn Schema into a model
const PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage
