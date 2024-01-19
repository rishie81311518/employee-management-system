import React from 'react';
import { Link } from 'react-router-dom';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import img1 from '../assets/employee-rishie.jpeg';
import img2 from '../assets/slice 581.png'

const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        {/* Sidebar Header */}
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
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
            <NavLink exact to="/dashboard/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">Project Leads</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        {/* Sidebar Footer */}
        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div style={{ padding: '20px 5px' }}>Sidebar Footer</div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

// const EmployeeCard = ({ imageSrc, name, role }) => (
//   <Card style={{ width: '18rem', margin: '10px',height:'10px' }}>
//     <Card.Img variant="top" src={imageSrc} />
//     <Card.Body>
//       <Card.Title>{name}</Card.Title>
//       <Card.Text>{role}</Card.Text>
//     </Card.Body>
//   </Card>
// );

const EmployeeCard = ({ id, imageSrc, name, role, onEdit, onDelete }) => (
    <Card style={{ width: '18rem', height:'10px', margin: '10px' }}>
      <Card.Img variant="top" src={imageSrc} />
      <Card.Body>
      <Link to={`/dashboard/profile`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <Card.Title>{name}</Card.Title>
      </Link>
        <Card.Text>{role}</Card.Text>
        <Link to={`/dashboard/edit_employee/:id`} >
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
  // Sample employee data
  const employees = [
    { id: 1, name: 'Sai Babu', role: 'UI/UX Designer', imageSrc: img1 },
    { id: 2, name: 'Lokesh', role: 'Product Manager', imageSrc: img1 },
    { id: 3, name: ' Chandra Sekhar ', role: 'Full stack developer', imageSrc: img1 },
    { id: 2, name: 'Rahul Pawar', role: 'Front End Developer', imageSrc: img1 },
    { id: 2, name: 'Mukesh', role: 'Back End Developer', imageSrc: img1 },
    { id: 2, name: 'Sushma', role: 'Flutter Developer', imageSrc: img1 },
    { id: 2, name: 'Sahu', role: 'Python Developer', imageSrc: img1 },
    { id: 2, name: 'Pradeep', role: 'Full Stack Developer', imageSrc: img1 },
];

const handleEdit = (id) => {
    const updatedEmployees = [...employees];
    const employeeToEdit = updatedEmployees.find((employee) => employee.id === id);
    // Placeholder for edit logic (you can open a modal or navigate to an edit page)
    console.log(`Editing employee: ${employeeToEdit.name}`);
  };

  const handleDelete = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
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
              style={{ maxHeight: '100px' }}
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

      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div className="ml-250px mt-5" style={{ display: 'flex', flexWrap: 'wrap' }}>
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



