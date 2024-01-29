// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import Container from "react-bootstrap/Container";
// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";
// import Form from "react-bootstrap/Form";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import "react-datepicker/dist/react-datepicker.css";
// import { Link } from "react-router-dom";
// import img1 from "../assets/employee-rishie.jpeg";

// const EmployeeCard = ({ id, imageSrc, name, role }) => (
  
//   <Card style={{ width: "18rem", height: "auto", margin: "10px" }}>
//     <Card.Img variant="top" src={imageSrc} />
//     <Card.Body>
//       <Link
//         to={`/dashboard/profile/${id}`} // Link to the employee profile page with employee id
//         style={{ textDecoration: "none", color: "inherit" }}
//       >
//         <Card.Title>{name}</Card.Title>
//       </Link>
//       <Card.Text>{role}</Card.Text>
//     </Card.Body>
//   </Card>
// );

// function AllEmployees() {
//   const [selectedDesignation, setSelectedDesignation] = useState(null);
//   const [employee, setEmployee] = useState([]);
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     employee_id: "",
//     joining_date: null,
//   });
//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/auth/employee")
//       .then((result) => {
//         if (result.data.Status) {
//           setEmployee(result.data.Result);
//         } else {
//           alert(result.data.Error);
//         }
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     // Check if required fields are filled
//     if (
//       !formData.username ||
//       !formData.email ||
//       !formData.employee_id ||
//       !formData.joining_date
//     ) {
//       alert("Please fill in the required fields.");
//       return;
//     }

//     // Reset form data after submission
//     setFormData({
//       username: "",
//       email: "",
//       employee_id: "",
//       joining_date: null,
//     });
//   };

//   return (
//     <div>
//       <Navbar expand="lg" className="bg-body-tertiary">
//         <Container fluid>
//           <Navbar.Brand href="#">Web Synerzies</Navbar.Brand>
//           <Navbar.Toggle aria-controls="navbarScroll" />
//           <Navbar.Collapse id="navbarScroll">
//             <Nav
//               className="me-auto my-2 my-lg-0"
//               style={{ maxHeight: "100px" }}
//               navbarScroll
//             >
//               <Nav.Link href="/dashboard">Home</Nav.Link>
//             </Nav>
//             <Form className="d-flex">
//               <Form.Control
//                 type="search"
//                 placeholder="Search"
//                 className="me-2"
//                 aria-label="Search"
//               />
//               <Button variant="outline-success">Search</Button>
//             </Form>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       <div className="col-md-12 mt-4">
//         <h5>Employee Dashboard</h5>
//       </div>
//       <div className="card">
//         <div className="card-body">
//           {/* Existing Employee Search Form */}
//           <form>
//             <div className="row">
//               {/* Invoice ID */}
//               <div className="col-md-3 mb-3">
//                 <label htmlFor="invoiceId">Enter Employee Id</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="invoiceId"
//                   placeholder="Enter id of the employee"
//                 />
//               </div>
//               {/* Client */}
//               <div className="col-md-3 mb-3">
//                 <label htmlFor="client">Employee Name</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="client"
//                   placeholder="Enter the employee name"
//                 />
//               </div>

//               {/* Select Designation for existing employees */}
//               <div className="col-md-3 mb-3">
//                 <label htmlFor="designation">Select Designation</label>
//                 <DropdownButton
//                   id="designation"
//                   title={selectedDesignation || "App Developer"}
//                   onSelect={(eventKey) => setSelectedDesignation(eventKey)}
//                 >
//                   <Dropdown.Item eventKey="App Developer">
//                     App Developer
//                   </Dropdown.Item>
//                   <Dropdown.Item eventKey=" Web Developer">
//                     Web Developer
//                   </Dropdown.Item>
//                   <Dropdown.Item eventKey="Web Designer">
//                     Web Designer
//                   </Dropdown.Item>
//                 </DropdownButton>
//               </div>
//             </div>

//             {/* Submit Button */}
//             <div className="row mt-3">
//               <div className="col-md-3">
//                 <button type="submit" className="btn btn-primary">
//                   Search
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//       <div className="col-md-12 mt- 18" style={{ display: "flex" }}>
//         <div
//           className="ml-250px mt-5"
//           style={{ display: "flex", flexWrap: "wrap" }}
//         >
//           {employee.map((employee) => (
//             <EmployeeCard
//               key={employee.id}
//               imageSrc={img1}
//               name={employee.name}
//               role={employee.role}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AllEmployees;



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import img1 from "../assets/employee-rishie.jpeg";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import Container from "react-bootstrap/Container";
// import { Link } from "react-router-dom";

// const EmployeeCard = ({ id, imageSrc, name, role, onClick }) => (
//   <Card
//     style={{ width: "18rem", height: "auto", margin: "10px", cursor: "pointer" }}
//     onClick={() => onClick(id)}
//   >
//     <Card.Img variant="top" src={imageSrc} />
//     <Card.Body>
//       <Card.Title>{name}</Card.Title>
//       <Card.Text>{role}</Card.Text>
//     </Card.Body>
//   </Card>
// );

// const AllEmployees = () => {
//   const navigateToProfile = (id) => {
//     // Navigate to profile page when employee card is clicked
//     console.log("Navigating to profile page for employee with ID:", id);
//     // navigate('/dashboard/profile/:id')
//   };
//   const [employees, setEmployees] = useState([]);

//   useEffect(() => {
//     const fetchEmployees = async () => {
//       try {
//         const response = await axios.get("http://localhost:3000/auth/employee");
//         if (response.data.Status) {
//           setEmployees(response.data.Result);
//         } else {
//           alert(response.data.Error);
//         }
//       } catch (error) {
//         console.error("Error fetching employees:", error);
//         alert("An error occurred while fetching employee data.");
//       }
//     };

//     fetchEmployees();
//   }, []);

//   return (
//     <Container>
//     <h2>All Employees</h2>
//     <div style={{ display: "flex", flexWrap: "wrap" }}>
//       {employees.map((employee) => (
//         <Link key={employee.id} to={`/dashboard/profile/${employee.id}`}>
//           {/* Wrap EmployeeCard with Link */}
//           <EmployeeCard
//             id={employee.id}
//             imageSrc={img1}
//             name={employee.name}
//             role={employee.role}
//             onClick={navigateToProfile}
//           />
//         </Link>
//       ))}
//     </div>
//   </Container>
//   );
// };

// export default AllEmployees;


import React, { useEffect, useState, } from "react";
import axios from "axios";
import img1 from "../assets/employee-rishie.jpeg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const EmployeeCard = ({ id, imageSrc, name, role, onClick }) => (
  <Card
    style={{ width: "18rem", height: "auto", margin: "10px", cursor: "pointer" }}
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
        <Form onSubmit={handleFormSubmit} style={{ display: "flex", gap: "10px" }}>
          <Form.Control type="text" placeholder="Enter Employee ID" />
          <Form.Control type="text" placeholder="Enter Employee Name" />
          <DropdownButton
            id="designation"
            title={selectedDesignation || "Select Designation"}
            onSelect={(eventKey) => setSelectedDesignation(eventKey)}
          >
            <Dropdown.Item eventKey="App Developer">App Developer</Dropdown.Item>
            <Dropdown.Item eventKey="Web Developer">Web Developer</Dropdown.Item>
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




