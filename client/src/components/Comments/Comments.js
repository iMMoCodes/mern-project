import React from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core'

import ImageIcon from '@material-ui/icons/Image'
import useStyles from './styles'

const Comments = ({ setShowComments }) => {
	const classes = useStyles()

	const handleSubmit = (e) => {
		e.preventDefault()
	}

	return (
		<>
			<Paper className={classes.paper}>
				<Typography variant='h5' align='center'>
					Comments
				</Typography>
				<form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={() => {}}>
					<TextField name='comment' variant='outlined' label='Comment' fullWidth onChange={() => {}} />
					<Button
						className={classes.buttonSubmit}
						variant='contained'
						color='primary'
						type='submit'
						fullWidth
						onClick={handleSubmit}
					>
						Send
					</Button>
					<Button
						className={classes.buttonSubmit}
						variant='contained'
						color='secondary'
						size='small'
						type='submit'
						fullWidth
						onClick={() => setShowComments(false)}
					>
						Back To Posts &nbsp;
						<ImageIcon />
					</Button>
				</form>
			</Paper>
		</>
	)
}

export default Comments
