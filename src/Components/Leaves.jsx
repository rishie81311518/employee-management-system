import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { NavLink } from "react-router-dom";

const TopNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Web Synerzies
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/tables">
                Tables
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/dashboard/profile">
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/analytics">
                Analytics
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/hero404" target="_blank">
                Project Leads
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

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

function Leaves() {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    holidayDate: "",
    day: "",
  });

  const [employeeData, setEmployeeData] = useState({
    employeeName: "",
    fromDate: "",
    toDate: "",
  });

  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedDesignationForNewEmployees,setSelectedDesignationForNewEmployees,] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add your logic for handling form submission, e.g., sending data to the server
    console.log("Form submitted:", formData);
  };

  const handleEmployeeSearch = (e) => {
    e.preventDefault();
    // Add your logic for handling employee search, e.g., sending data to the server
    console.log("Employee search:", employeeData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEmployeeInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div>
      {/* Top Navbar */}
      <TopNavbar />

      {/* Sidebar */}

      {/* Main Content */}
      <div className="container mt-4 ml-4">
        {/* Cards */}
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Today Presents</h5>
                <p className="card-text">Card content for Today Presents.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Planned Leaves</h5>
                <p className="card-text">Card content for Planned Leaves.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Unplanned Leaves</h5>
                <p className="card-text">Card content for Unplanned Leaves.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Pending Requests</h5>
                <p className="card-text">Card content for Pending Requests.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Employee Details Card */}
        <div className="mt-4">
          <h5>Employee Details</h5>
          <form onSubmit={handleEmployeeSearch}>
            <div className="mb-3">
              <label htmlFor="employeeName" className="form-label">
                Employee Name
              </label>
              <input
                type="text"
                className="form-control"
                id="employeeName"
                name="employeeName"
                value={employeeData.employeeName}
                onChange={handleEmployeeInputChange}
              />

             <div className="col-md-3 mb-3">
                <label htmlFor="company">Select type of leave</label>
                <DropdownButton
                  id="company"
                  title={selectedCompany || "Emergency leave"}
                  onSelect={(eventKey) => setSelectedCompany(eventKey)}
                >
                  <Dropdown.Item eventKey="Emergency leave">
                    Select leave
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="casual leave">
                    casual leave
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Medical leave">Medical leave</Dropdown.Item>
                  <Dropdown.Item eventKey="loss of pay">Loss of pay</Dropdown.Item>
                </DropdownButton>
              </div>

            </div>
            

            <div className="mb-3">
              <label htmlFor="fromDate" className="form-label">
                From Date
              </label>
              <input
                type="date"
                className="form-control"
                id="fromDate"
                name="fromDate"
                value={employeeData.fromDate}
                onChange={handleEmployeeInputChange}
              />

              
            </div>
            <div className="mb-3">
              <label htmlFor="toDate" className="form-label">
                To Date
              </label>
              <input
                type="date"
                className="form-control"
                id="toDate"
                name="toDate"
                value={employeeData.toDate}
                onChange={handleEmployeeInputChange}
              />
            </div>
            <button type="submit" className="btn btn-primary mr-2">
              Search
            </button>
          </form>
        </div>

        {/* Holiday Form */}
        <div className="mt-4">
          
          <form onSubmit={handleFormSubmit}>
            <div className="mb-3">
              <label htmlFor="id" className="form-label">
               Employee Status
              </label>
               {/* Select Designation for adding new employees */}
               <div className="col-md-3 mb-3">
                    <label htmlFor="designationfornewemployees">
                      Select Status
                    </label>
                    <DropdownButton
                      id="designationfornewemployees"
                      title={
                        selectedDesignationForNewEmployees || "Approved"
                      }
                      onSelect={(eventKey) =>
                        setSelectedDesignationForNewEmployees(eventKey)
                      }
                    >
                      <Dropdown.Item eventKey="New">
                        New
                      </Dropdown.Item>
                      <Dropdown.Item eventKey=" Pending">
                        Pending
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="Approved">
                        Approved
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="Declined">
                        Declined
                      </Dropdown.Item>

                    </DropdownButton>
                  </div>
              
            </div>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Number of days
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="reason" className="form-label">
                Reason
              </label>
              <input
                type="text"
                className="form-control"
                id="reason"
                name="holidayDate"
                value={formData.holidayDate}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="day" className="form-label">
                Actions
              </label>
              <input
                type="text"
                className="form-control"
                id="day"
                name="day"
                value={formData.day}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className="btn btn-primary mr-2">
              Submit
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={refreshPage}
            >
              Refresh Page
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Leaves;
