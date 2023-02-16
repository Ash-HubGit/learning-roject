import React from "react";
import { v4 as uuidv4 } from "uuid";

import Employee from "./component/Employee";
import "./style.css";

export default function App() {
  const [role, setRole] = React.useState("Dev");
  const [employees, setEmplooyes] = React.useState([
    {
      name: "Max",
      role: "Devrel Engineer",
      img: "https://images.pexels.com/photos/1844547/pexels-photo-1844547.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      name: "John",
      role: "Director of Eng.",
      img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      name: "Corey",
      role: "The Devops guy",
      img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      name: "Sal",
      role: "Manager",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      name: "Melanie",
      role: "Software Engineer",
      img: "https://images.pexels.com/photos/4662950/pexels-photo-4662950.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      name: "Jake",
      role: "Senior Intern",
      img: "https://images.pexels.com/photos/4640886/pexels-photo-4640886.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ]);

  return (
    <div className="App">
      <h1>Meet Our Employees</h1>
      <input
        type="text"
        onChange={(e) => {
          setRole(e.target.value);
        }}
      />
      <div className="flex flex-wrap justify-center">
        {employees.map((employee) => {
          return (
            <Employee
              key={uuidv4()}
              name={employee.name}
              role={employee.role}
              img={employee.img}
            />
          );
        })}
      </div>
    </div>
  );
}
