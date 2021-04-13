import express from 'express'

import { getPosts, createPosts } from '../controllers/posts.js'

// Set up router
const router = express.Router()

// Routes
router.get('/', getPosts)
router.post('/', createPosts)

// Export route
export default router
