import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import User from '../models/user'

export const signin = async (req, res) => {
	const { email, password } = req.body

	try {
		// Look for existing user by email
		const existingUser = await User.findOne({ email })
		// If it doesn't exist
		if (!existingUser) return res.status(404).json({ message: "User doesn't exist." })
		// Compare passwords
		const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)
		// If password doesn't match
		if (!isPasswordCorrect) return res.status(400).json({ message: 'Invalid credentials.' })
		// User exists and password is correct -> Get token
		const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: '1h' })
		// Return user
		res.status(200).json({ result: existingUser, token })
	} catch (error) {
		res.status(500).json({ message: 'Something went wrong.' })
	}
}

export const signup = async (req, res) => {
	const { email, password, confirmPassword, firstName, lastName } = req.body

	try {
		const existingUser = await User.findOne({ email })
		// Check if user already exists
		if (existingUser) return res.status(400).json({ message: 'User already exist.' })
		// Check if passwords match
		if (password !== confirmPassword) return res.status(400).json({ message: "Passwords don't match" })
		// Hash the password
		const hashedPassword = await bcrypt.hash(password, 12)
		// Create user
		const result = await User.create({ email, password: hashedPassword, name: `${firstName}, ${lastName}` })
		// Create token
		const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn: '1h' })
		// Return user
		res.status(200).json({ result, token })
	} catch (error) {
		res.status(500).json({ message: 'Something went wrong.' })
	}
}
