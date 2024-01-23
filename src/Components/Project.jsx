import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const TopNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Projects
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

function Project() {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    holidayDate: "",
    day: "",
  });

  const [employeeData, setEmployeeData] = useState({
    employeeName: "",
    projectName: "",
  });

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
    window.location.reload();
  };

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div>
      {/* Top Navbar */}
      <TopNavbar />

      {/* Main Content */}
      <div className="container mt-4 ml-4">
        {/* Cards */}
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Office Management</h5>
                <p className="card-text">12</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Project Management</h5>
                <p className="card-text">3</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Video Calling App</h5>
                <p className="card-text">4</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Hospital Administration</h5>
                <p className="card-text">5</p>
              </div>
            </div>
          </div>
        </div>

        {/* Combined Task and Project Details Card */}
        <div className="row mt-4">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Task and Project Details</h5>
                {/* Task Information Form */}
                <form>
                  <div className="mb-3">
                    <label htmlFor="openTasks" className="form-label">
                      Open Tasks
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="openTasks"
                      name="openTasks"
                      value="10"
                      readOnly
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="completedTasks" className="form-label">
                      Completed Tasks
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="completedTasks"
                      name="completedTasks"
                      value="5"
                      readOnly
                    />
                  </div>
                </form>

                {/* Project Details Form */}
                <form>
                  <div className="mb-3">
                    <label htmlFor="deadline" className="form-label">
                      Deadline
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="deadline"
                      name="deadline"
                      value="January 31, 2024"
                      readOnly
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="projectLeader" className="form-label">
                      Project Leader
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="projectLeader"
                      name="projectLeader"
                      value="John Doe"
                      readOnly
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="teamsContributed" className="form-label">
                      Teams Contributed
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="teamsContributed"
                      name="teamsContributed"
                      value="Team A, Team B"
                      readOnly
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="progress" className="form-label">
                      Progress
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="progress"
                      name="progress"
                      value="70%"
                      readOnly
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Employee Details Card */}
        <div className="mt-4">
          <h5>Employee Projects</h5>
          <form onSubmit={handleEmployeeSearch}>
            <div className="mb-3">
              <label htmlFor="employeeName" className="form-label">
                Project Name
              </label>
              <input
                type="text"
                className="form-control"
                id="employeeName"
                name="employeeName"
                value={employeeData.projectName}
                onChange={handleEmployeeInputChange}
              />
            </div>
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
            </div>

            <button type="submit" className="btn btn-primary mr-2">
              Search
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

export default Project;
