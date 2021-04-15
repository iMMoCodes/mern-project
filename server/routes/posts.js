import express from 'express'

import { getPosts, createPost, updatePost, deletePost } from '../controllers/posts.js'

// Set up router
const router = express.Router()

// Routes
router.get('/', getPosts)
router.post('/', createPost)
router.patch('/:id', updatePost)
router.delete('/:id', deletePost)

// Export route
export default router
