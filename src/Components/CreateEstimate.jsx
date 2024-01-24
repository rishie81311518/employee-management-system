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

function CreateEstimate() {
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
    clients: "",
    projects: "",
    email: "",
    tax: "",
    client_address: "",
    billing_address: "",
    expiry_date: "",
    estimate_date: ""
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
  };

  return (
    <div>
      {/* Top Navbar */}
      <TopNavbar />

      {/* Main Content */}
      <div className="container mt-4 ml-4">
        {/* Cards */}
        <div className="row">{/* ... */}</div>

        {/* Combined Task and Project Details Card */}
        <div className="row mt-4">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Create Estimate</h5>
                {/* Task Information Form */}
                <form>
                  <div className="mb-3">
                    <label htmlFor="clients" className="form-label">
                      Clients
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="clients"
                      name="clients"
                      value={taskDetails.clients}
                      onChange={handleTaskProjectDetailsChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="projects" className="form-label">
                      Projects
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="completedTasks"
                      name="projects"
                      value={taskDetails.projects}
                      onChange={handleTaskProjectDetailsChange}
                    />
                  </div>
                </form>

                {/* Project Details Form */}
                <form>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      name="email"
                      value={taskDetails.email}
                      onChange={handleTaskProjectDetailsChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="tax" className="form-label">
                      Tax
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="tax"
                      name="tax"
                      value={taskDetails.tax}
                      onChange={handleTaskProjectDetailsChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="client_address" className="form-label">
                      Client Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="client_address"
                      name="client_address"
                      value={taskDetails.client_address}
                      onChange={handleTaskProjectDetailsChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="billing_address" className="form-label">
                      Billing Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="progress"
                      name="billing_address"
                      value={taskDetails.billing_address}
                      onChange={handleTaskProjectDetailsChange}
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
              value={taskDetails.estimate_date}
              onChange={handleTaskProjectDetailsChange}
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
              value={taskDetails.expiry_date}
              onChange={handleTaskProjectDetailsChange}
            />
          </div>
           {/* New Form Elements */}
           <div className="mb-3">
                    <label htmlFor="id" className="form-label">
                      ID
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="id"
                      name="id"
                      value={taskDetails.id}
                      onChange={handleTaskProjectDetailsChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="item" className="form-label">
                      Item
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="item"
                      name="item"
                      value={taskDetails.item}
                      onChange={handleTaskProjectDetailsChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                      Description
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="description"
                      name="description"
                      value={taskDetails.description}
                      onChange={handleTaskProjectDetailsChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="unitCost" className="form-label">
                      Unit Cost
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="unitCost"
                      name="unitCost"
                      value={taskDetails.unitCost}
                      onChange={handleTaskProjectDetailsChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="quantity" className="form-label">
                      Quantity
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="quantity"
                      name="quantity"
                      value={taskDetails.quantity}
                      onChange={handleTaskProjectDetailsChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="amount" className="form-label">
                      Amount
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="amount"
                      name="amount"
                      value={taskDetails.amount}
                      onChange={handleTaskProjectDetailsChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="total" className="form-label">
                      Total
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="total"
                      name="total"
                      value={taskDetails.total}
                      onChange={handleTaskProjectDetailsChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="tax" className="form-label">
                      Tax
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="tax"
                      name="tax"
                      value={taskDetails.tax}
                      onChange={handleTaskProjectDetailsChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="discountPercent" className="form-label">
                      Discount Percent
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="discountPercent"
                      name="discountPercent"
                      value={taskDetails.discountPercent}
                      onChange={handleTaskProjectDetailsChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="grandTotal" className="form-label">
                      Grand Total
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="grandTotal"
                      name="grandTotal"
                      value={taskDetails.grandTotal}
                      onChange={handleTaskProjectDetailsChange}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
       </div>
       
    </div>

  );
}

export default CreateEstimate;