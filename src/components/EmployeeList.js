import React, { useEffect, useState } from 'react'
import Employee from './Employee';
import { EmployeeContext } from '../contexts/EmployeeContext';
import { useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import AddForm from './AddForm';

const EmployeeList = () => {
    const {employees} = useContext(EmployeeContext);
    const [show, setShow] =useState(false);
    const handeShow = () =>setShow(true);
    const handeClose = () =>setShow(false);
    useEffect (()=>{
        handeClose()
    },[employees])
    // useEffect(()=>{
    //     console.log("COMPONENT RENDERED")
    // },[])
  
    return (
        <div>
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-6">
                        <h2>Manage <b>Employees</b></h2>
                    </div>
                    <div className="col-sm-6">
                        <Button onClick={handeShow} className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></Button>
                    </div>
                </div>
            </div>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        employees.map(employee => (
                            <tr key={employee.id}>
                                <Employee employee={employee}/>

                            </tr>
                        ))
                    }

                </tbody>
            </table>
            <Modal show={show} onHide={handeClose}>
                <Modal.Header>
                    <Modal.Title>Add Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                      <AddForm/>
                </Modal.Body>
                <Modal.Footer>
                        <Button variant="secondary" onClick={handeClose}>
                            Close Button
                        </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default EmployeeList