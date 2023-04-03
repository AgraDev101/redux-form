import { useState } from 'react';
import style from "../styles/formStyle.module.scss"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux';

function ContactForm() {
	const formData = useSelector((state) => state.formData)
	const dispatch = useDispatch()

	const [name, setName] = useState("")
	const [last, setLast] = useState("")
	const [mob, setMob] = useState("")

	const handleSubmit = (e) => {
		e.preventDefault()

		const newContact = {
			name: name,
			lastName: last,
			mob: mob,
		}
		dispatch({type: "ADD_CONTACT", payload: newContact})
		console.log(newContact)
	}


  return (
	<div className={style.main}>
    <Form className='container' onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Enter first name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Last Name</Form.Label>
        <Form.Control onChange={(e) => setLast(e.target.value)} value={last} type="text" placeholder="enter last name" />
      </Form.Group>
	  <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Mobile</Form.Label>
        <Form.Control onChange={(e) => setMob(e.target.value)} value={mob} type="text" placeholder="Enter mobile number" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
	<p>{formData.name}</p>
	<p>{formData.lastName}</p>
	<p>{formData.mob}</p>
	</div>
  );
}

export default ContactForm;