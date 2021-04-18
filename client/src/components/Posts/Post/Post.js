import React, { useState } from 'react'
import moment from 'moment'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'

import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import CommentIcon from '@material-ui/icons/Comment'
import SpeakerNotesOffIcon from '@material-ui/icons/SpeakerNotesOff'

import defaultPicture from '../../../assets/pexels-karolina-grabowska-4194857.jpg'
import useStyles from './styles'
import { useDispatch } from 'react-redux'
import { deletePost, likePost } from '../../../actions/posts'
import Likes from './Likes/Likes'
import Comments from './Comments/Comments'

const Post = ({ post, setCurrentId }) => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const user = JSON.parse(localStorage.getItem('profile'))
	const [commentsOpen, setCommentsOpen] = useState(false)

	const handleCommentsOpen = () => setCommentsOpen((prevCommentsOpen) => !prevCommentsOpen)

	return (
		<Card className={classes.card}>
			<CardMedia className={classes.media} image={post.selectedFile || defaultPicture} title={post.title} />
			<div className={classes.overlay}>
				<Typography variant='h6'>{post.name}</Typography>
				<Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
			</div>
			{(user?.result?.googleId === post?.creator || user?.result._id === post?.creator) && (
				<div className={classes.overlay2}>
					<Button style={{ color: 'white' }} size='small' onClick={() => setCurrentId(post._id)}>
						<MoreHorizIcon fontSize='default' />
					</Button>
				</div>
			)}
			{!commentsOpen ? (
				<>
					<Typography className={classes.title} variant='h5' gutterBottom>
						{post.title}
					</Typography>
					<CardContent>
						<Typography variant='body2' color='textSecondary' component='p'>
							{post.message}
						</Typography>
					</CardContent>
					<div className={classes.details}>
						<Typography variant='body2' color='textSecondary'>
							{post.tags.map((tag) => `#${tag} `)}
						</Typography>
					</div>
				</>
			) : (
				<Comments />
			)}
			<CardActions className={classes.cardActions}>
				<Button size='small' color='primary' disabled={!user?.result} onClick={() => dispatch(likePost(post._id))}>
					<Likes post={post} likes={post.likes} />
				</Button>
				{(user?.result?.googleId === post?.creator || user?.result._id === post?.creator) && (
					<Button size='small' color='primary' onClick={() => dispatch(deletePost(post._id))}>
						<DeleteIcon fontSize='small' />
						&nbsp; Delete &nbsp;
					</Button>
				)}
				<Button size='small' color='primary' disabled={!user?.result} onClick={handleCommentsOpen}>
					{commentsOpen ? <SpeakerNotesOffIcon /> : <CommentIcon />}
				</Button>
			</CardActions>
		</Card>
	)
}

export default Post
