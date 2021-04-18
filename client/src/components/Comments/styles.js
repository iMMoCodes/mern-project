import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
		},
	},
	paper: {
		padding: theme.spacing(2),
		width: '90%',
		height: '439px',
		borderRadius: '15px',
	},
	form: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
	},
	buttonSubmit: {
		marginBottom: 10,
	},
}))
