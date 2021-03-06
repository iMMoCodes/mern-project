import express from 'express'

import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js'

import auth from '../middleware/auth.js'

// Set up router
const router = express.Router()

// Routes
router.get('/', getPosts)
router.post('/', auth, createPost)
router.patch('/:id', auth, updatePost)
router.delete('/:id', auth, deletePost)
router.patch('/:id/likePost', auth, likePost)

// Export route
export default router
