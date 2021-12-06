import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { EmployeeContext } from "./EmployeeProvider";

export const EmployeeDetail = () => {
  const { getEmployeeById, fireEmployee } = useContext(EmployeeContext);
  const [ employee, setEmployee ] = useState({});
  const { employeeId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("useEffect", employeeId);
    getEmployeeById(employeeId).then(setEmployee);
  }, []);

  const handleFire = () => {
    fireEmployee(employeeId)
    .then(navigate('/employees'));
  }

  return (
    <section className="employee">
      <h3 className="employee__name">{employee.name}</h3>
      <button onClick={handleFire}>Fire Employee</button>
    </section>
  );
}