import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import postRoutes from './routes/posts.js'

// Initialize app
const app = express()
dotenv.config()

// Express middleware to connect to application

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

// Posts routes are at 5000/posts
app.use('/posts', postRoutes)

app.get('/', (req, res) => {
	res.send('Hello to my API')
})

// Connect to MongoDB
const PORT = process.env.PORT || 5000

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
	.catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false)
