import React from "react";
import "./Employee.css";

export const EmployeeCard = ({ employee }) => (
  <section className="employee">
    <h3 className="employee__name">{employee.name}</h3>
    <div className="employee__breed">{employee.breed}</div>
    <address className="location__address">{employee.location.name}</address>
  </section>
);