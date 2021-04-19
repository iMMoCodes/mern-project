import CommentMessage from '../models/commentMessage.js'

export const getComments = async (req, res) => {
	try {
		const commentMessages = await CommentMessage.find()
		res.status(200).json(commentMessages)
	} catch (error) {
		res.status(404).json({ message: error.message })
	}
}

export const createComment = async (req, res) => {
	const comment = req.body

	const newComment = new CommentMessage(comment)
	try {
		await newComment.save()
		res.status(201).json(newComment)
	} catch (error) {
		res.status(409).json({ message: error.message })
	}
}
