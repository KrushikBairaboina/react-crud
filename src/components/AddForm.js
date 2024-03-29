import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useContext } from 'react';
import { EmployeeContext } from '../contexts/EmployeeContext';


const AddForm = () => {
    const { addEmployee } = useContext(EmployeeContext);
    const [newEmployee, setNewEmployee] = useState('');
    const onInputChange = (e) =>{
         setNewEmployee({...newEmployee,[e.target.name]:e.target.value})
    }
    const {name,email,phone,address} = newEmployee;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        addEmployee(name,email,address,phone);
        console.log(newEmployee);

    }
    useEffect (()=>{
        console.log("COMPONENT MOUNTED");
        return () =>{
            console.log("COMPONENT UNMOUNTED");
        }
    },[])
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Control
                        type='text'
                        placeholder='Name'
                        name='name'
                        value={name}
                        onChange={(e) => onInputChange(e)}
                        required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={(e) => onInputChange(e)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        as="textarea"
                        placeholder='Address'
                        name='address'
                        value={address}
                        onChange={(e) => onInputChange(e)}
                        rows={3}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        type='text'
                        placeholder='Phone'
                        name='phone'
                        value={phone}
                        onChange={(e) => onInputChange(e)}
                    />
                </Form.Group>
                <Button variant='success' type='submit' block>
                    Add new Employee
                </Button>
            </Form>



        </div>
    )
}

export default AddForm