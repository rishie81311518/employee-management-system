import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link, NavLink } from "react-router-dom";
import img1 from "../assets/employee-rishie.jpeg";

const Sidebar = () => {
  return (
    <div style={{ display: "flex", padding: "20px" }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        {/* Sidebar Header */}
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            Sidebar
          </a>
        </CDBSidebarHeader>

        {/* Sidebar Content */}
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            {/* Sidebar Menu Items */}
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/tables" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Tables</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/dashboard/profile"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">
                Analytics
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/hero404"
              target="_blank"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="exclamation-circle">
                Project Leads
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        {/* Sidebar Footer */}
        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div style={{ padding: "20px 5px" }}>Sidebar Footer</div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

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
      <Link to={`/dashboard/edit_employee/:id`}>
        <Button variant="primary" onClick={() => onEdit(id)}>
          Edit
        </Button>
      </Link>

      <Button variant="danger" className="ms-2" onClick={() => onDelete(id)}>
        Delete
      </Button>
    </Card.Body>
  </Card>
);

function AllEmployees() {
  const [selectedDesignation, setSelectedDesignation] = useState(null);
  const [
    selectedDesignationForNewEmployees,
    setSelectedDesignationForNewEmployees,
  ] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [showAddEmployeeForm, setShowAddEmployeeForm] = useState(false);
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
          {/* Add Employee Button */}
          <Button
            variant="success"
            onClick={() => setShowAddEmployeeForm(true)}
          >
            Add Employee
          </Button>

          {/* Add Employee Form */}
          {showAddEmployeeForm && (
            <form onSubmit={handleAddEmployee}>
              {/* Employee Details Form */}
              <div className="row">
                <div className="col-md-3 mb-3">
                  <label htmlFor="firstName">First Name</label>
                  <span style={{ color: "red" }}>*</span>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="Enter first name"
                  />
                </div>

                <div className="col-md-3 mb-3">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Enter last name"
                  />
                </div>

                <div className="col-md-3 mb-3">
                  <label htmlFor="lastName">
                    Username<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Enter username"
                    required
                    value={formData.username}
                    onChange={(e) =>
                      setFormData({ ...formData, username: e.target.value })
                    }
                  />
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="email">
                    Email<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="lastName">Password</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Enter password"
                  />
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="lastName">Confirm Password</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Enter password"
                  />
                </div>

                <div className="col-md-3 mb-3">
                  <label htmlFor="lastName">
                    Employee ID<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Enter employee id"
                    value={formData.employee_id}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        employee_id: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="joiningDate">
                    Joining Date<span style={{ color: "red" }}>*</span>
                  </label>
                  <br />
                  <DatePicker
                    id="joiningDate"
                    className="form-control"
                    placeholderText="Select date of joining"
                    selected={formData.joining_date}
                    onChange={(date) =>
                      setFormData({ ...formData, joining_date: date })
                    }
                    dateFormat="dd/MM/yyyy"
                    required
                  />
                </div>

                <div className="col-md-3 mb-3">
                  <label htmlFor="lastName">Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="col-md-3 mb-3">
                  <label htmlFor="company">Select Company</label>
                  <DropdownButton
                    id="company"
                    title={selectedCompany || "Web Synerzies"}
                    onSelect={(eventKey) => setSelectedCompany(eventKey)}
                  >
                    <Dropdown.Item eventKey="Web Synerzies">
                      Select Company
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="Global Technologies">
                      Global Technologies
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="M3BI">M3BI</Dropdown.Item>
                    <Dropdown.Item eventKey="Microsoft">
                      Microsoft
                    </Dropdown.Item>
                  </DropdownButton>
                </div>

                {/* Select Designation for adding new employees */}
                <div className="col-md-3 mb-3">
                  <label htmlFor="designationfornewemployees">
                    Select Designation
                  </label>
                  <DropdownButton
                    id="designationfornewemployees"
                    title={
                      selectedDesignationForNewEmployees || "App Developer"
                    }
                    onSelect={(eventKey) =>
                      setSelectedDesignationForNewEmployees(eventKey)
                    }
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

              {/* Submit Button for Adding Employee */}
              <div className="row mt-3">
                <div className="col-md-3">
                  <Link to="/dashboard">
                    <button type="submit" className="btn btn-primary">
                      Add Employee
                    </button>
                  </Link>
                </div>
              </div>
            </form>
          )}

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
