import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Card, Typography, TextField, CardContent, Button } from '@material-ui/core'

import { createComment } from '../../../../actions/comments'

import useStyles from './styles'

const Comments = () => {
	const [comment, setComment] = useState('')
	const dispatch = useDispatch()

	const sendComment = () => {
		dispatch(createComment(comment))
	}

	const handleChange = (e) => {
		setComment(e.target.value)
	}

	const classes = useStyles()
	return (
		<Card className={classes.card}>
			<Typography className={classes.title} variant='h5' gutterBottom>
				Comments
			</Typography>
			<CardContent>
				<Typography variant='body2' color='textSecondary' component='p'>
					test comments
				</Typography>
			</CardContent>
			<div className={classes.sendComments}>
				<TextField className={classes.commentField} name='comment' variant='outlined' label='Comment' onChange={handleChange} />
				<Button className={classes.sendButton} variant='contained' size='small' color='primary' onClick={sendComment}>
					Send
				</Button>
			</div>
		</Card>
	)
}

export default Comments
