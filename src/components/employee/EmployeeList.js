import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { EmployeeContext } from "./EmployeeProvider";
import { EmployeeCard } from "./EmployeeCard";
import "./Employee.css";

export const EmployeeList = () => {
  const navigate = useNavigate();
  // This state changes when `getEmployees()` is invoked below
  const { employees, getEmployees } = useContext(EmployeeContext);

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("EmployeeList: useEffect - getEmployees")
    getEmployees()

  }, []);


  return (
    <>
      <h2>Employees</h2>
      <button onClick={() => {navigate('/employees/create')}}>
        Add Employee
      </button>
      <div className="employees">
        {
          employees.map(employee => {
            return <EmployeeCard key={employee.id} employee={employee} />
          })
        }
      </div>
    </>
  );
}