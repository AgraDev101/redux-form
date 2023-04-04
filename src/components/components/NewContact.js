import { useState } from 'react';
// import style from "..../styles/formStyle.module.scss"
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import RefreshIcon from '@mui/icons-material/Refresh';
import SaveIcon from '@mui/icons-material/Save';
import Button from '@mui/material/Button';
import style from "../styles/formStyle.module.scss"
import { addContact } from "../../app/ContactSlice";
import DisplayContacts from './DisplayContacts';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const ContactForm = () => {
	// const formData = useSelector((state) => state.formData)
	const dispatch = useDispatch()

	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [mob, setMob] = useState("")

	const addNewContact = () => {

		const newContact = {
			name: name,
			email: email,
			mob: mob,
		}
		dispatch(addContact(newContact))
		console.log(newContact)
	}


  return (
	<Container className={style.container} maxWidth="sm">
		<h3>Contact Form</h3>
		<Box sx={{ flexGrow: 1 }}>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={6}>
					<TextField id="outlined-basic" label="Name" variant="outlined" size='small' fullWidth/>
        		</Grid>
				<Grid item xs={12} sm={6}>
					<TextField type='text' id="outlined-basic" label="Last Name" variant="outlined" size='small' fullWidth/>
        		</Grid>
				<Grid item xs={12} sm={6}>
					<TextField type='email' id="outlined-basic" label="Email" variant="outlined" size='small' fullWidth/>
        		</Grid>
				<Grid item xs={12} sm={6}>
					<TextField type='number' id="outlined-basic" label="Mobile" variant="outlined" size='small' fullWidth/>
        		</Grid>
				<Grid item xs={12}>
					<TextField type='text' id="outlined-basic" multiline rows={4} label="Message" variant="outlined" size='small' fullWidth/>
        		</Grid>
			</Grid>
			<Button className={style.button} size="small" variant="contained" SaveIcon={<SaveIcon />}>Save</Button>
			<Button className={style.button} size="small" variant="contained" DeleteIcon={<DeleteIcon />}>Delete</Button>
			<Button className={style.button} size="small" variant="contained" refrsh={<RefreshIcon />}>Update</Button>
		</Box>

	</Container>
  );
}

export default ContactForm;