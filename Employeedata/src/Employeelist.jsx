// src/EmployeeList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./App.css"
import { Link } from 'react-router-dom';

const EmployeeList = () => {
 
  const [employees, setEmployees] = useState([]);


  
  function fetchEmployees(){
     axios.get("https://reqres.in/api/users").then(response => {
      setEmployees(response.data.data);
     })
  }
  useEffect(()=>{
     fetchEmployees()
  },[])

  return (
    <div className='container'> 
    <div className='wrapper'>
      <div></div>
        <h1>Employee data</h1>
        <Link to="/empform">
        <button>Create Employee</button>
        </Link>
    </div>
        <ul className='list'> 
          {employees.map((emp) => (
            <li key={emp.id}><h3>{emp.first_name} {emp.last_name}</h3>
             <img src={emp.avatar} className='image'/> 
             <p>{emp.email}</p>

            </li>
          ))}
        </ul>
      
    </div>
  );
};

export default EmployeeList;
