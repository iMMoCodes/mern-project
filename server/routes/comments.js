import express from 'express'

import { getComments, createComment } from '../controllers/comments.js'

// Set up router
const router = express.Router()

router.get('/comments', getComments)
router.post('/comments', createComment)

export default router
