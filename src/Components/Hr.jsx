import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
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

function Hr() {
  const [formData, setFormData] = useState({
    estimate_number: "",
    client: "",
    estimate_date: "",
    expiry_date: "",
    amount: "",
  });

  const [employeeData, setEmployeeData] = useState({
    employeeName: "",
    fromDate: "",
    toDate: "",
  });

  const [selectedStatus, setSelectedStatus] = useState(null);
  const [selectedEstimatedStatus, setEstimatedStatus] = useState(null);

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

  const handleDropdownTwoSelect = (selectedItemTwo) => {
    // Update the selected status
    setEstimatedStatus(selectedItemTwo);
  };

  const handleEmployeeInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Add your logic for handling search, e.g., sending data to the server
    console.log("Search clicked:", formData);
    window.location.reload();
  };

  const handleEdit = () => {
    // Add your logic for handling Edit
    console.log("Edit clicked:", formData);
  };

  const handleDelete = () => {
    // Add your logic for handling Delete
    console.log("Delete clicked:", formData);
  };

  const handleCreateEstimate = () => {
    // Add your logic for creating an estimate
    console.log("Create Estimate clicked");
  };

  return (
    <div>
      {/* Top Navbar */}
      <TopNavbar />

      {/* Sidebar */}

      {/* Main Content */}
      <div className="mt-4 ">
        {/* Cards */}

        {/* Estimates Card */}
        <div className="mb-3">
          <div className="card-body">
            <h5 className="card-title">Estimates</h5>
            <form onSubmit={handleSearch} className="row g-3">
              <div className="mb-3">
                <label htmlFor="fromDate" className="form-label">
                  From Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="fromDate"
                  name="fromDate"
                  value={formData.fromDate}
                  onChange={handleInputChange}
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
                  value={formData.toDate}
                  onChange={handleInputChange}
                />
              </div>
              <div className="row g-3">
                <div className="col-md-2 mb-2">
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

                <div className="col-md-4 mb-3">
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={handleCreateEstimate}
                  >
                    Create Estimate
                  </button>
                </div>
              </div>

              <div className="col-md-12">
                <button type="submit" className="btn btn-primary">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Estimated HR Form */}
      <div className="mt-4">
        <h5>Estimates of Employees in 2024</h5>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label htmlFor="estimate_id" className="form-label">
              Estimate Number
            </label>
            <input
              type="text"
              className="form-control"
              id="id"
              name="estimate_number"
              value={formData.estimate_number}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="client" className="form-label">
              Client
            </label>
            <input
              type="text"
              className="form-control"
              id="client"
              name="client"
              value={formData.client}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="estimateDate" className="form-label">
              Estimate Date
            </label>
            <input
              type="date"
              className="form-control"
              id="estimateDate"
              name="estimateDate"
              value={formData.estimate_date}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="expiryDate" className="form-label">
              Expiry Date
            </label>
            <input
              type="date"
              className="form-control"
              id="expiryDate"
              name="expiryDate"
              value={formData.expiry_date}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="amount" className="form-label">
              Amount
            </label>
            <input
              type="amount"
              className="form-control"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-4 mb-3">
            <Dropdown onSelect={handleDropdownTwoSelect}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {selectedEstimatedStatus || "Select Status"}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey="Accepted">Accepted</Dropdown.Item>
                <Dropdown.Item eventKey="Declined">Declined</Dropdown.Item>
                <Dropdown.Item eventKey="Expired">Expired</Dropdown.Item>
                <Dropdown.Item eventKey="Sent">Sent</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          {/* Action button with Edit and Delete options */}
          <div className="col-md-4 mb-3">
            <button
              type="button"
              className="btn btn-secondary mr-2"
              onClick={handleEdit}
            >
              Edit
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => window.location.reload()}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Hr;
