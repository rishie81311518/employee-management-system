import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
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

  const [taskDetails, setTaskDetails] = useState({
    openTasks: "",
    completedTasks: "",
  });

  const [projectDetails, setProjectDetails] = useState({
    deadline: "",
    projectLeader: "",
    teamsContributed: "",
    progress: "",
  });

  const [selectedStatus, setSelectedStatus] = useState(null);

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

  const handleDropdownSelect = (selectedItem) => {
    // Update the selected status
    setSelectedStatus(selectedItem);
  };

  const handleEmployeeInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  // Function to handle dynamic form data for tasks and project details
  const handleTaskProjectDetailsChange = (e) => {
    const { name, value } = e.target;
    setTaskDetails({ ...taskDetails, [name]: value });
    setProjectDetails({ ...projectDetails, [name]: value });
  };

  return (
    <div>
      {/* Top Navbar */}
      <TopNavbar />

      {/* Main Content */}
      <div className="container mt-4 ml-4">
        {/* Cards */}
        <div className="row">
          {/* ... */}
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
                      value={taskDetails.openTasks}
                      onChange={handleTaskProjectDetailsChange}
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
                      value={taskDetails.completedTasks}
                      onChange={handleTaskProjectDetailsChange}
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
                      value={projectDetails.deadline}
                      onChange={handleTaskProjectDetailsChange}
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
                      value={projectDetails.projectLeader}
                      onChange={handleTaskProjectDetailsChange}
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
                      value={projectDetails.teamsContributed}
                      onChange={handleTaskProjectDetailsChange}
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
                      value={projectDetails.progress}
                      onChange={handleTaskProjectDetailsChange}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Employee Details Card */}
        < div className="mt-4">
          <h5>Employee Projects</h5>
          <form onSubmit={handleEmployeeSearch} className="row g-3">
            <div className="col-md-4 mb-3">
              <label htmlFor="employeeName" className="form-label">
                Project Name
              </label>
              <input
                type="text"
                className="form-control"
                id="employeeName"
                name="projectName"
                value={employeeData.projectName}
                onChange={handleEmployeeInputChange}
              />
            </div>
            
            <div className="col-md-4 mb-3">
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
            
        
            <div className="col-md-4 mb-3">
            <label htmlFor="status" className="form-label">
                Status
              </label>
                  <Dropdown onSelect={handleDropdownSelect}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      {selectedStatus || "Select Status"}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item eventKey="Accepted">
                        Accepted
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="Declined">
                        Declined
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="Expired">Expired</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                

            <div className="col-mb-3">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={() => window.location.reload()}
              >
                Search
              </button>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Project;
