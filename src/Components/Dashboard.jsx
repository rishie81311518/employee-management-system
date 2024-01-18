import axios from "axios";
import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import img2 from '../assets/client-2.png';
import img4 from '../assets/employee.png';
import img1 from '../assets/employees.jpeg';
import img3 from '../assets/task.png';
import { Bar } from "react-chartjs-2";
import { BarElement,  CategoryScale,Chart as ChartJS,Legend, LinearScale,Title, Tooltip } from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement,Title,Tooltip,Legend);



const Dashboard = () => {
  const navigate = useNavigate()
  axios.defaults.withCredentials = true
  const handleLogout = () => {
    axios.get('http://localhost:3000/auth/logout')
    .then(result => {
      if(result.data.Status) {
        localStorage.removeItem("valid")
        navigate('/')
      }
    })
}


const cardsData = [
    { title: "Projects", imageSrc: img1, content: " 112 " },
    { title: "Clients", imageSrc: img2 , content: " abedfegd " },
    { title: "Tasks", imageSrc: img3, content: "Tasks content here" },
    { title: "Employees", imageSrc: img4 , content: "Employees content here" },
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
        label: 'Managers added by year',
        data: [15, 20, 25, 40, 45, 60],
        backgroundColor: 'pink'
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

const [sliderValue, setSliderValue] = useState(50);

  const clientsData = [
    { name: "John Doe", email: "john.doe@example.com", status: "Active", action: "View" },
    { name: "Jane Smith", email: "jane.smith@example.com", status: "Inactive", action: "Edit" },
    // Add more client data as needed
  ];

  const recentProjectsData = [
    { projectName: "Project Alpha", projectStatus: "In Progress", action: "Details" },
    { projectName: "Project Beta", projectStatus: "Completed", action: "Details" },
    // Add more recent project data as needed
  ];

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <Link
              to="/dashboard"
              className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none"
            >
              
            </Link>
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
                  to="/dashboard/profile"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-person ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Profile</span>
                </Link>
              </li>
              <li className="w-100" onClick={handleLogout}>
              <Link
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-power ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="col p-0 m-0">
            <div className="p-2 d-flex justify-content-center shadow">
                <h4>Employee Dashboard System</h4>
            </div>
            <Outlet />

            {/* Cards Section */}
            < div className="row mt-4">
        {cardsData.map((card, index) => (
          <div key={index} className="col-md-3">
            <div className="card">
              <img src={card.imageSrc} className="card-img-top" height={300}  alt={`${card.title} Image`} />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.content}</p>
            </div>
            </div>
        </div>
        ))}

        {/* Bar Chart Section */}
        <div className="mt-3" style={{ width: '700px', height: '700px' }}>
            <Bar data={barChartData} options={barChartOptions} />
        </div>

          {/*  Cards Section */}
          <div className="row mt-3">
            <div className="col-md-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">New Employees</h5>
                  <p className="card-text">Overall Employees 445</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
                <div className="col-md-3"/>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Earnings</h5>
                  <p className="card-text">$142,3000</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
            <div className="col-md-3"/>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Expenses</h5>
                  <p className="card-text">$99999</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
            <div className="col-md-3"/>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Profit</h5>
                  <p className="card-text">$88888</p>
                </div>
            </div>
            </div>
          </div>

 {/* client and his projects Section */}
 <div className="row mt-4">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Clients</h5>
                  <div className="row">
                    {clientsData.map((client, index) => (
                      <div key={index} className="col">
                        <p>Name: {client.name}</p>
                        <p>Email: {client.email}</p>
                        <p>Status: {client.status}</p>
                        <p>Action: {client.action}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Recent Projects</h5>
                  <div className="row">
                    {recentProjectsData.map((project, index) => (
                      <div key={index} className="col">
                        <p>Project Name: {project.projectName}</p>
                        <p>Status: {project.projectStatus}</p>
                        <p>Action: {project.action}</p>
                    </div>
                    ))}
                </div>
                </div>
            </div>
            </div>
        </div>

        </div>
        </div>
    </div>
    </div>
);
};

export default Dashboard;


