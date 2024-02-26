import React, {useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useContext } from 'react';
import { EmployeeContext } from '../contexts/EmployeeContext';


const EditForm = ({theEmployee}) => {
    const id = theEmployee.id;
    const [name,setName] = useState(theEmployee.name);
    const [email,setEmail] = useState(theEmployee.email);
    const [address,setAddress] = useState(theEmployee.address);
    const [phone,setPhone] = useState(theEmployee.phone);
    const { updateEmployee } = useContext(EmployeeContext);
 const updatedemployee = {id,name,email,address,phone}
 const handleSubmit = (e)=>{
    e.preventDefault();
    updateEmployee(id,updatedemployee)
 }
    return (
        <div>
            <Form onSubmit={handleSubmit} >
                <Form.Group>
                    <Form.Control
                        type='text'
                        placeholder='Name'
                        name='name'
                        value={name}
                        onChange={(e)=> setName(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}

                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        as="textarea"
                        placeholder='Address'
                        name='address'
                        value={address}
                        onChange={(e)=> setAddress(e.target.value)}
                        rows={3}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        type='text'
                        placeholder='Phone'
                        name='phone'
                        value={phone}
                        onChange={(e)=> setPhone(e.target.value)}
                    />
                </Form.Group>
                <Button variant='success' type='submit' block>
                    Edit Employee
                </Button>
            </Form>



        </div>
    )
}

export default EditForm;