import { makeStyles } from '@material-ui/core/styles'

export default makeStyles({
	title: {
		margin: '0 auto',
		padding: '0 16px',
	},
	card: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		borderRadius: '15px',
		height: '100%',
		position: 'relative',
	},
	sendComments: {
		display: 'flex',
		padding: '0 2px',
	},
	commentField: {
		flex: '5',
	},
	sendButton: {
		flex: '1',
	},
})
