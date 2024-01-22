import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';

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
              <NavLink
                className="nav-link"
                to="/hero404"
                target="_blank"
              >
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
    <div style={{ display: 'flex', padding: '20px' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        {/* Sidebar Header */}
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: 'inherit' }}
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
        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div style={{ padding: '20px 5px' }}>Sidebar Footer</div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

function EmployeeLeaves() {
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    holidayDate: '',
    day: '',
  });

  const [employeeData, setEmployeeData] = useState({
    employeeName: '',
    fromDate: '',
    toDate: '',
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add your logic for handling form submission, e.g., sending data to the server
    console.log('Form submitted:', formData);
  };

  const handleEmployeeSearch = (e) => {
    e.preventDefault();
    // Add your logic for handling employee search, e.g., sending data to the server
    console.log('Employee search:', employeeData);
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
                <h5 className="card-title">Annual Leave</h5>
                <p className="card-text">12</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Medical Leave</h5>
                <p className="card-text">3</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Other Leave</h5>
                <p className="card-text">4</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Remaining Leaves</h5>
                <p className="card-text">5</p>
              </div>
            </div>
          </div>
        </div>


         {/* Employee Details Card */}
         <div className="mt-4">
          <h5>Employee Leaves</h5>
          <form onSubmit={handleEmployeeSearch}>
            <div className="mb-3">
              <label htmlFor="employeeName" className="form-label">
                Leave Type
              </label>
              <input
                type="text"
                className="form-control"
                id="employeeName"
                name="employeeName"
                value={employeeData.employeeName}
                onChange={handleEmployeeInputChange}
              />
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
          <h5>Leaves of Employees in 2024</h5>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-3">
              <label htmlFor="id" className="form-label">
                Number of days
              </label>
              <input
                type="text"
                className="form-control"
                id="id"
                name="id"
                value={formData.id}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Reason
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
              <label htmlFor="holidayDate" className="form-label">
                Status
              </label>
              <input
                type="text"
                className="form-control"
                id="holidayDate"
                name="holidayDate"
                value={formData.holidayDate}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="day" className="form-label">
                Approved by
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

export default EmployeeLeaves;
