import React from "react";
import { v4 as uuidv4 } from "uuid";
import AddEmployee from "./component/AddEmployee";

import Employee from "./component/Employee";
import "./style.css";

export default function App() {
  const [employees, setEmplooyes] = React.useState([
    {
      id: 1,
      name: "Max",
      role: "Devrel Engineer",
      img: "https://images.pexels.com/photos/1844547/pexels-photo-1844547.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 2,
      name: "John",
      role: "Director of Eng.",
      img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 3,
      name: "Corey",
      role: "The Devops guy",
      img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 4,
      name: "Sal",
      role: "Manager",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 5,
      name: "Melanie",
      role: "Software Engineer",
      img: "https://images.pexels.com/photos/4662950/pexels-photo-4662950.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 6,
      name: "Jake",
      role: "Senior Intern",
      img: "https://images.pexels.com/photos/4640886/pexels-photo-4640886.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ]);

  const updateEmployee = (id, newName, newRole) => {
    const updatedEmployees = employees.map((employee) => {
      if (id === employee.id) {
        return { ...employee, name: newName, role: newRole };
      }

      return employee;
    });
    setEmplooyes(updatedEmployees);
  };

  const newEmployee = (name, role, img) => {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    };
    setEmplooyes([...employees, newEmployee]);
  };

  return (
    <div className="App">
      <h1>Meet Our Team</h1>
      <div className="flex flex-wrap justify-center">
        {employees.map((employee) => {
          return (
            <Employee
              key={employee.id}
              id={employee.id}
              name={employee.name}
              role={employee.role}
              img={employee.img}
              updateEmployee={updateEmployee}
            />
          );
        })}
      </div>
      <AddEmployee newEmployee={newEmployee} />
    </div>
  );
}
