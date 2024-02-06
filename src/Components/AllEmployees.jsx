import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import img1 from "../assets/employee-rishie.jpeg";

const EmployeeCard = ({ id, imageSrc, name, role, onClick }) => (
  <Card
    style={{
      width: "18rem",
      height: "auto",
      margin: "10px",
      cursor: "pointer",
    }}
    onClick={() => onClick(id)}
  >
    <Card.Img variant="top" src={imageSrc} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>{role}</Card.Text>
    </Card.Body>
  </Card>
);

const AllEmployees = () => {
  const navigateToProfile = (id) => {
    console.log("Navigating to profile page for employee with ID:", id);
    // navigate('/dashboard/profile/:id')
  };
  const [employees, setEmployees] = useState([]);

  const [selectedDesignation, setSelectedDesignation] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("http://localhost:3000/auth/employee");
        if (response.data.Status) {
          setEmployees(response.data.Result);
        } else {
          alert(response.data.Error);
        }
      } catch (error) {
        console.error("Error fetching employees:", error);
        alert("An error occurred while fetching employee data.");
      }
    };

    fetchEmployees();
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted!");
  };

  return (
    <Container>
      <h2>All Employees</h2>
      <div style={{ marginBottom: "20px" }}>
        {/* Employee Search Form */}
        <Form
          onSubmit={handleFormSubmit}
          style={{ display: "flex", gap: "10px" }}
        >
          <Form.Control type="text" placeholder="Enter Employee ID" />
          <Form.Control type="text" placeholder="Enter Employee Name" />
          <DropdownButton
            id="designation"
            title={selectedDesignation || "Select Designation"}
            onSelect={(eventKey) => setSelectedDesignation(eventKey)}
          >
            <Dropdown.Item eventKey="App Developer">
              App Developer
            </Dropdown.Item>
            <Dropdown.Item eventKey="Web Developer">
              Web Developer
            </Dropdown.Item>
            <Dropdown.Item eventKey="Web Designer">Web Designer</Dropdown.Item>
          </DropdownButton>
          <Button type="submit">Search</Button>
        </Form>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {employees.map((employee) => (
          <Link key={employee.id} to={`/dashboard/profile/${employee.id}`}>
            <EmployeeCard
              id={employee.id}
              imageSrc={img1}
              name={employee.name}
              role={employee.role}
              onClick={navigateToProfile}
            />
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default AllEmployees;
