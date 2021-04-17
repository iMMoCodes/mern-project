import mongoose from 'mongoose'

// Create Schema
const postSchema = mongoose.Schema({
	title: String,
	message: String,
	name: String,
	creator: String,
	tags: [String],
	selectedFile: String,
	likes: {
		type: [String],
		default: [],
	},
	createdAt: {
		type: Date,
		default: new Date(),
	},
})

// Turn Schema into a model
const PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage
