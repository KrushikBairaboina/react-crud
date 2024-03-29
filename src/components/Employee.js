import React from 'react';
import { EmployeeContext } from '../contexts/EmployeeContext';
import { useContext,useState,useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import EditForm from './EditForm';
const Employee = ({employee}) => {
    const {deleteEmployee} = useContext(EmployeeContext) ;
    const [show, setShow] =useState(false);
    const handeShow = () =>setShow(true);
    const handeClose = () =>setShow(false);
    useEffect (()=>{
        handeClose()
    },[employee])
    return (
        <>
        <td>{employee.name}</td>
        <td>{employee.email}</td>
        <td>{employee.address}</td>
        <td>{employee.phone}</td>
            <td>
                <button onClick={handeShow} className="btn text-warning btn-act" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></button>
                <button onClick={() => deleteEmployee(employee.id)} className="btn text-danger btn-act" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></button>
            </td>
            <Modal show={show} onHide={handeClose}>
                <Modal.Header>
                    <Modal.Title>Edit Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                      <EditForm theEmployee={employee}/>
                </Modal.Body>
                <Modal.Footer>
                        <Button variant="secondary" onClick={handeClose}>
                            Close Button
                        </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Employee