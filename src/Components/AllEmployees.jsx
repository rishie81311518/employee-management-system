import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import img1 from "../assets/employee-rishie.jpeg";

const EmployeeCard = ({ id, imageSrc, name, role, onEdit, onDelete }) => (
  <Card style={{ width: "18rem", height: "auto", margin: "10px" }}>
    <Card.Img variant="top" src={imageSrc} />
    <Card.Body>
      <Link
        to={`/dashboard/profile`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Card.Title>{name}</Card.Title>
      </Link>
      <Card.Text>{role}</Card.Text>
      </Card.Body>
  </Card>
);

function AllEmployees() {
  const [selectedDesignation, setSelectedDesignation] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    employee_id: "",
    joining_date: null,
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Check if required fields are filled
    if (
      !formData.username ||
      !formData.email ||
      !formData.employee_id ||
      !formData.joining_date
    ) {
      alert("Please fill in the required fields.");
      return;
    }

    // Reset form data after submission
    setFormData({
      username: "",
      email: "",
      employee_id: "",
      joining_date: null,
    });
  };

  // Sample employee data
  const employees = [
    { id: 1, name: "Sai Babu", role: "UI/UX Designer", imageSrc: img1 },
    { id: 2, name: "Lokesh", role: "Product Manager", imageSrc: img1 },
    {
      id: 3,
      name: " Chandra Sekhar ",
      role: "Full stack developer",
      imageSrc: img1,
    },
    { id: 2, name: "Rahul Pawar", role: "Front End Developer", imageSrc: img1 },
    { id: 2, name: "Mukesh", role: "Back End Developer", imageSrc: img1 },
    { id: 2, name: "Sushma", role: "Flutter Developer", imageSrc: img1 },
    { id: 2, name: "Sahu", role: "Python Developer", imageSrc: img1 },
    { id: 2, name: "Pradeep", role: "Full Stack Developer", imageSrc: img1 },
  ];

  const handleEdit = (id) => {
    const updatedEmployees = [...employees];
    const employeeToEdit = updatedEmployees.find(
      (employee) => employee.id === id
    );
    // Placeholder for edit logic (you can open a modal or navigate to an edit page)
    console.log(`Editing employee: ${employeeToEdit.name}`);
  };

  const handleDelete = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
  };

  const handleAddEmployee = (event) => {
    event.preventDefault();

    // Access form elements using event.target.elements
    const firstName = event.target.elements.firstName.value;
    // Add other form fields as needed

    // Validate required fields
    if (!firstName) {
      alert("First Name is a required field");
      return;
    }

    // Perform logic to add the employee to the list
    // Update the employees state with the new employee
    // Reset the form or close the form after adding the employee
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">Web Synerzies</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/dashboard">Home</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="col-md-12 mt-4">
        <h5>Employee Dashboard</h5>
      </div>
      <div className="card">
        <div className="card-body">
         {/* Existing Employee Search Form */}
          <form>
            <div className="row">
              {/* Invoice ID */}
              <div className="col-md-3 mb-3">
                <label htmlFor="invoiceId">Enter Employee Id</label>
                <input
                  type="text"
                  className="form-control"
                  id="invoiceId"
                  placeholder="Enter id of the employee"
                />
              </div>
              {/* Client */}
              <div className="col-md-3 mb-3">
                <label htmlFor="client">Employee Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="client"
                  placeholder="Enter the employee name"
                />
              </div>

              {/* Select Designation for existing employees */}
              <div className="col-md-3 mb-3">
                <label htmlFor="designation">Select Designation</label>
                <DropdownButton
                  id="designation"
                  title={selectedDesignation || "App Developer"}
                  onSelect={(eventKey) => setSelectedDesignation(eventKey)}
                >
                  <Dropdown.Item eventKey="App Developer">
                    App Developer
                  </Dropdown.Item>
                  <Dropdown.Item eventKey=" Web Developer">
                    Web Developer
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Web Designer">
                    Web Designer
                  </Dropdown.Item>
                </DropdownButton>
              </div>
            </div>

            {/* Submit Button */}
            <div className="row mt-3">
              <div className="col-md-3">
                <button type="submit" className="btn btn-primary">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="col-md-12 mt- 18" style={{ display: "flex" }}>
        <div
          className="ml-250px mt-5"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          {employees.map((employee) => (
            <EmployeeCard
              key={employee.id}
              imageSrc={employee.imageSrc}
              name={employee.name}
              role={employee.role}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllEmployees;
