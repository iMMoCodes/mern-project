import express from 'express'

import { getPosts } from '../controllers/posts.js'

// Set up router
const router = express.Router()

// Routes
router.get('/', getPosts)

// Export route
export default router
