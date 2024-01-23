import axios from "axios";
import "bootstrap-icons/font/bootstrap-icons.css";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Bar } from "react-chartjs-2";
import { Link, Outlet, useNavigate } from "react-router-dom";
import img2 from "../assets/client-2.png";
import img4 from "../assets/employee.png";
import img1 from "../assets/employees.jpeg";
import img3 from "../assets/task.png";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const handleLogout = () => {
    axios.get("http://localhost:3000/auth/logout").then((result) => {
      if (result.data.Status) {
        localStorage.removeItem("valid");
        navigate("/");
      }
    });
  };

  const cardsData = [
    { title: "Projects", imageSrc: img1, content: " 112 " },
    { title: "Clients", imageSrc: img2, content: " abedfegd ",  },
    { title: "Tasks", imageSrc: img3, content: "Tasks content here" },
    { title: "Employees", imageSrc: img4, content: "Employees content here" },
  ];

  const barChartData = {
    labels: ["2006", "2007", "2008", "2009", "2010", "2011"],
    datasets: [
      {
        label: "Employees added by year ",
        data: [20, 30, 40, 50, 60, 70],
        backgroundColor: "orange",
      },
      {
        label: "Managers added by year",
        data: [15, 20, 25, 40, 45, 60],
        backgroundColor: "pink",
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "chartArea" },
      title: {
        display: true,
        text: "Modular Bar Chart",
      },
    },
  };

  const [clientsData, setClientsData] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      status: "Active",
      action: "Edit/Delete",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      status: "Inactive",
      action: "Edit/Delete",
    },
    // Add more client data as needed
  ]);

  // Project Data
  const [recentProjectsData, setRecentProjectsData] = useState([
    {
      id: 1,
      projectName: "Project Alpha",
      openTasks: 5,
      projectsCompleted: 3,
      progress: 60,
      action: "Edit/Delete",
    },
    {
      id: 2,
      projectName: "Project Beta",
      openTasks: 2,
      projectsCompleted: 7,
      progress: 80,
      action: "Edit/Delete",
    },
    // Add more recent project data as needed
  ]);

  // Handle Maintain Status for Clients
  const handleMaintain = (client) => {
    const updatedClientsData = clientsData.map((c) =>
      c.id === client.id
        ? { ...c, status: c.status === "Active" ? "Inactive" : "Active" }
        : c
    );
    setClientsData(updatedClientsData);
  };

  const handleClientAction = (client, action) => {
    // Find the index of the client in the array
    const clientIndex = clientsData.findIndex((c) => c.id === client.id);

    if (action === "edit") {
      // Implement logic for editing a client
      console.log(`Editing client: ${client.name}`);
      // You can open a modal or navigate to an edit page, etc.
    } else if (action === "delete") {
      // Implement logic for deleting a client
      const updatedClientsData = [...clientsData];
      updatedClientsData.splice(clientIndex, 1); // Remove the client at the found index
      setClientsData(updatedClientsData);
      console.log(`Deleting client: ${client.name}`);
    } else {
      console.warn(`Unsupported action: ${action}`);
    }
  };

  // Handle Maintain Status for Projects
  const handleMaintainProject = (project) => {
    const updatedProjectsData = recentProjectsData.map((p) =>
      p.id === project.id
        ? { ...p, status: p.status === "Active" ? "Inactive" : "Active" }
        : p
    );
    setRecentProjectsData(updatedProjectsData);
  };

  // Handle Project Action (Details)
  const handleProjectAction = (project, action) => {
    // Implement your logic for project details here
    console.log(`Viewing details for project ${project.action}`);
  };

  const [invoiceData, setInvoiceData] = useState({
    invoiceId: "",
    client: "",
    dueDate: "",
    total: "",
    status: "",
  });

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <Link
              to="/dashboard"
              className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none"
            ></Link>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="w-100">
                <Link
                  to="/dashboard"
                  className="nav-link text-white px-0 align-middle"
                >
                  <i className="fs-4 bi-speedometer2 ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Dashboard</span>
                </Link>
              </li>

              <li className="w-100">
                <Link
                  to="/dashboard/employee"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-people ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">
                    Manage Employees
                  </span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/category"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-columns ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Category</span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/allemployees"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-columns ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">All Employees</span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/employeeleaves"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-columns ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">
                    Employee Leaves
                  </span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/adminleaves"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-columns ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Admin Leaves</span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/department"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-columns ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Departments</span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/client"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-columns ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Clients</span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/designation"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-columns ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Designations</span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/holidays"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-columns ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Holidays</span>
                </Link>
              </li>

              <li className="w-100">
                <Link
                  to="/dashboard/project"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-columns ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Projects</span>
                </Link>
              </li>
            

              <li className="w-100">
                <Link
                  to="/dashboard/profile"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-person ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Profile</span>
                </Link>
              </li>
              <li className="w-100" onClick={handleLogout}>
                <Link className="nav-link px-0 align-middle text-white">
                  <i className="fs-4 bi-power ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="col p-0 m-0">
          <div className="p-2 d-flex justify-content-center shadow">
            <h4>Admin Dashboard </h4>
          </div>
          <Outlet />

          {/* Cards Section */}
          <div className="row mt-4">
            {cardsData.map((card, index) => (
              <div key={index} className="col-md-3">
                <div className="card">
                  <img
                    src={card.imageSrc}
                    className="card-img-top"
                    height={300}
                    alt={`${card.title} Image`}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.content}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Statictics Card Section */}
            <div className="col-md-12 mt-4">
              <h5>Task Statistics</h5>
              <div className="card">
                <div className="card-body">
                  <form>
                    <div className="row">
                      {/* Invoice ID */}
                      <div className="col-md-3 mb-3">
                        <label htmlFor="invoiceId">Total Tasks</label>
                        <input
                          type="text"
                          className="form-control"
                          id="invoiceId"
                          placeholder="Enter total tasks"
                        />
                      </div>

                      {/* Client */}
                      <div className="col-md-3 mb-3">
                        <label htmlFor="client">Overdue Tasks</label>
                        <input
                          type="text"
                          className="form-control"
                          id="client"
                          placeholder="tasks due"
                        />
                      </div>

                      {/* Due Date */}
                      <div className="col-md-3 mb-3">
                        <label htmlFor="dueDate">Completed Tasks</label>
                        <input
                          type="text"
                          className="form-control"
                          id="dueDate"
                          placeholder="Enter number of completed tasks"
                        />
                      </div>

                      {/* Total */}
                      <div className="col-md-3 mb-3">
                        <label htmlFor="total">In Progress Tasks</label>
                        <input
                          type="text"
                          className="form-control"
                          id="total"
                          placeholder="Enter in progress tasks"
                        />
                      </div>

                      {/* Status */}
                      <div className="col-md-3 mb-3">
                        <label htmlFor="status">On Hold Tasks</label>
                        <input
                          type="text"
                          className="form-control"
                          id="status"
                          placeholder="Enter On hold tasks"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="row mt-3">
                      <div className="col-md-3">
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Bar Chart Section */}
            <div
              className="mt-1"
              style={{
                width: "1200px",
                height: "1200px",
                marginBottom: "10px",
              }}
            >
              <Bar data={barChartData} options={barChartOptions} />
            </div>

            {/*  Cards Section */}
            <div className="row mt-2">
              <div className="col-md-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">New Employees</h5>
                    <p className="card-text">Overall Employees 445</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Earnings</h5>
                    <p className="card-text">$142,3000</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Expenses</h5>
                    <p className="card-text">$99999</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Profit</h5>
                    <p className="card-text">$88888</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Invoices Card Section */}
            <div className="col-md-12 mt-4">
              <h5>Invoices</h5>
              <div className="card">
                <div className="card-body">
                  <form>
                    <div className="row">
                      {/* Invoice ID */}
                      <div className="col-md-3 mb-3">
                        <label htmlFor="invoiceId">Invoice ID</label>
                        <input
                          type="text"
                          className="form-control"
                          id="invoiceId"
                          placeholder="Enter Invoice ID"
                        />
                      </div>

                      {/* Client */}
                      <div className="col-md-3 mb-3">
                        <label htmlFor="client">Client</label>
                        <input
                          type="text"
                          className="form-control"
                          id="client"
                          placeholder="Enter Client"
                        />
                      </div>

                      {/* Due Date */}
                      <div className="col-md-3 mb-3">
                        <label htmlFor="dueDate">Due Date</label>
                        <input
                          type="text"
                          className="form-control"
                          id="dueDate"
                          placeholder="Enter Due Date"
                        />
                      </div>

                      {/* Total */}
                      <div className="col-md-3 mb-3">
                        <label htmlFor="total">Total</label>
                        <input
                          type="text"
                          className="form-control"
                          id="total"
                          placeholder="Enter Total"
                        />
                      </div>

                      {/* Status */}
                      <div className="col-md-3 mb-3">
                        <label htmlFor="status">Status</label>
                        <input
                          type="text"
                          className="form-control"
                          id="status"
                          placeholder="Enter Status"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="row mt-3">
                      <div className="col-md-3">
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Payments Card Section */}
            <div className="col-md-12 mt-4">
              <h5>Payments</h5>
              <div className="card">
                <div className="card-body">
                  <form>
                    <div className="row">
                      {/* Invoice ID */}
                      <div className="col-md-3 mb-3">
                        <label htmlFor="invoiceId">Invoice ID</label>
                        <input
                          type="text"
                          className="form-control"
                          id="invoiceId"
                          placeholder="Enter Invoice ID"
                        />
                      </div>

                      {/* Client */}
                      <div className="col-md-3 mb-3">
                        <label htmlFor="client">Client</label>
                        <input
                          type="text"
                          className="form-control"
                          id="client"
                          placeholder="Enter Client"
                        />
                      </div>

                      {/* Due Date */}
                      <div className="col-md-3 mb-3">
                        <label htmlFor="dueDate">Payment Type</label>
                        <input
                          type="text"
                          className="form-control"
                          id="dueDate"
                          placeholder="Enter the payment type "
                        />
                      </div>

                      {/* Total */}
                      <div className="col-md-3 mb-3">
                        <label htmlFor="total">Paid Date</label>
                        <input
                          type="text"
                          className="form-control"
                          id="total"
                          placeholder="Enter paid date"
                        />
                      </div>

                      {/* Status */}
                      <div className="col-md-3 mb-3">
                        <label htmlFor="status">Paid Amount</label>
                        <input
                          type="text"
                          className="form-control"
                          id="status"
                          placeholder="Enter amount paid"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="row mt-3">
                      <div className="col-md-3">
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Statistics Card Section */}
            <div className="col-md-12 mt-4">
              <h5>Statistics</h5>
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    {/* Today's Leave */}
                    <div className="col-md-3">
                      <h6>Today's Leave</h6>
                      <p>Data: {/* Add your data for today's leave here */}</p>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "50%" }} // Add your percentage here
                          aria-valuenow={50} // Add your percentage here
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>

                    {/* Pending Invoice */}
                    <div className="col-md-3 mb-3">
                      <h6>Pending Invoice</h6>
                      <p>
                        Data: {/* Add your data for pending invoice here */}
                      </p>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "75%" }} // Add your percentage here
                          aria-valuenow={75} // Add your percentage here
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>

                    {/* Completed Projects */}
                    <div className="col-md-3 mb-3">
                      <h6>Completed Projects</h6>
                      <p>
                        Data: {/* Add your data for completed projects here */}
                      </p>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "90%" }} // Add your percentage here
                          aria-valuenow={90} // Add your percentage here
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>

                    {/* Open Tickets */}
                    <div className="col-md-3 mb-3">
                      <h6>Open Tickets</h6>
                      <p>Data: {/* Add your data for open tickets here */}</p>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "60%" }} // Add your percentage here
                          aria-valuenow={60} // Add your percentage here
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Clients and Recent Projects Sections */}
            <div className="row mt-4">
              {/* Clients Section */}
              <div className="col-md-6">
                <h5>Clients</h5>
                {clientsData.map((client) => (
                  <div key={client.id} className="client-card">
                    <p>Name: {client.name}</p>
                    <p>Email: {client.email}</p>
                    <p>Status: {client.status}</p>

                    {/* Maintain Status Button */}
                    <button
                      className="btn btn-info mx-2"
                      onClick={() => handleMaintain(client)}
                    >
                      Maintain Status
                    </button>
                    {/* Action Button */}
                    <ButtonGroup vertical> </ButtonGroup>
                    <DropdownButton
                      as={ButtonGroup}
                      title="Action"
                      id="bg-vertical-dropdown-1"
                    >
                      <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Delete</Dropdown.Item>
                    </DropdownButton>
                  </div>
                ))}
              </div>

              {/* Recent Projects Section */}
              <div className="col-md-6">
                <h5>Recent Projects</h5>
                {recentProjectsData.map((project) => (
                  <div key={project.id} className="project-card">
                    <p>Project Name: {project.projectName}</p>
                    <p>Open Tasks: {project.openTasks}</p>
                    <p>Status: {project.status}</p>
                    <p>Projects Completed: {project.projectsCompleted}</p>

                    {/* Maintain Status Button */}
                    <button
                      className="btn btn-info mx-2"
                      onClick={() => handleMaintainProject(project)}
                    >
                      Maintain Status
                    </button>
                    {/* Action Button */}
                    <ButtonGroup vertical> </ButtonGroup>
                    <DropdownButton
                      as={ButtonGroup}
                      title="Action"
                      id="bg-vertical-dropdown-1"
                    >
                      <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Delete</Dropdown.Item>
                    </DropdownButton>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
