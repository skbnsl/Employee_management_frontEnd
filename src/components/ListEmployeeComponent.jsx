import React, {useEffect, useState} from 'react'
import { listEmployees } from '../services/EmployeeService';
import {useNavigate} from 'react-router-dom';

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([]);
    const navigator = useNavigate();

    useEffect(()=>{
        listEmployees().then( (response) => {
            setEmployees(response.data);
        }).catch(err=>{
            console.error(err);
        })
    },[])

    const dummyData = [
        {"id":1,"firstName":"sagar","lastName":"bansal","email":"sagarbansal@gmail.com"},
        {"id":2,"firstName":"sagar","lastName":"bansal","email":"sagarbansal@gmail.com"},
        {"id":3,"firstName":"sagar","lastName":"bansal","email":"sagarbansal@gmail.com"}
    ];

    function addNewEmployee(){
        navigator('/add-employee');
    }

  return (
    <div className='container'>
        <h2 className='text-center'>List Of Employee</h2>
        <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email Id</th>
                </tr>
            </thead>
            <tbody>
                {
                    //employees state variable
                    employees.map(employee => 
                        <tr key={employee.id}> 
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                        </tr>)
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent;