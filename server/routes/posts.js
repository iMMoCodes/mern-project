import express from 'express'

// Set up router
const router = express.Router()

// Routes
router.get('/', (req, res) => {
	res.send('THIS WORKS')
})

// Export route
export default router
