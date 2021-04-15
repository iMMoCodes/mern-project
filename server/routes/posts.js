import express from 'express'

import { getPosts, createPosts, updatePosts } from '../controllers/posts.js'

// Set up router
const router = express.Router()

// Routes
router.get('/', getPosts)
router.post('/', createPosts)
router.patch('/:id', updatePosts)

// Export route
export default router
