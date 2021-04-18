import React from 'react'
import { Card, Typography, TextField, CardContent, Button } from '@material-ui/core'

import useStyles from './styles'

const Comments = () => {
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
				<TextField className={classes.commentField} name='comment' variant='outlined' label='Comment' />
				<Button className={classes.sendButton} variant='contained' size='small' color='primary'>
					Send
				</Button>
			</div>
		</Card>
	)
}

export default Comments
