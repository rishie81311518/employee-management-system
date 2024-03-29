import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddCategory from "./Components/AddCategory";
import AddClient from "./Components/AddClient";
import AddDepartment from "./Components/AddDepartment";
import AddDesignation from "./Components/AddDesignation";
import AddEmployee from "./Components/AddEmployee";
import AllClients from "./Components/AllClients";
import AllEmployees from "./Components/AllEmployees";
import Category from "./Components/Category";
import Client from "./Components/Client";
import ClientProfile from "./Components/ClientProfile";
import CreateEstimate from "./Components/CreateEstimate";
import Dashboard from "./Components/Dashboard";
import DataTable from "./Components/DataTable";
import Department from "./Components/Department";
import Designation from "./Components/Designation";
import EditClient from "./Components/EditClient";
import EditEmployee from "./Components/EditEmployee";
import Employee from "./Components/Employee";
import EmployeeCard from "./Components/EmployeeCard";
import EmployeeLeaves from "./Components/EmployeeLeaves";
import Holidays from "./Components/Holidays";
import Home from "./Components/Home";
import Hr from "./Components/Hr";
import Leaves from "./Components/Leaves";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import Project from "./Components/Project";
import Header from "./Header/Header";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <BrowserRouter>
    <div className="app-container">
      {/* <Sidebar/> */}
      <Routes>
        <Route path="/adminlogin" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="" element={<Home />}></Route>
        <Route path="/dashboard/employee" element={<Employee />}></Route>
        <Route path="/dashboard/category" element={<Category />}></Route>
        <Route path="/dashboard/profile" element={<Profile />}></Route>
        <Route path="/dashboard/add_category" element={<AddCategory />}></Route>
        <Route path="/dashboard/add_employee" element={<AddEmployee />}></Route>
        <Route
          path="/dashboard/edit_employee/:id"
          element={<EditEmployee />}
        ></Route>
        <Route path="dashboard/allemployees" element={<AllEmployees />}></Route>
        <Route path="/dashboard/holidays" element={<Holidays />}></Route>
        <Route path="/dashboard/adminleaves" element={<Leaves />}></Route>
        <Route
          path="dashboard/employeeleaves"
          element={<EmployeeLeaves />}
        ></Route>
        <Route path="/dashboard/department" element={<Department />}></Route>
        <Route
          path="/dashboard/add_department"
          element={<AddDepartment />}
        ></Route>
        <Route
          path="/dashboard/add_department"
          element={<AddDepartment />}
        ></Route>
        <Route path="/dashboard/client" element={<Client />}></Route>
        <Route path="/dashboard/add_client" element={<AddClient />}></Route>
        <Route
          path="/dashboard/edit_client/:id"
          element={<EditClient />}
        ></Route>
        <Route path="/dashboard/designation" element={<Designation />}></Route>
        <Route
          path="/dashboard/add_designation"
          element={<AddDesignation />}
        ></Route>
        <Route path="/dashboard/project" element={<Project />}></Route>
        <Route path="/dashboard/hr" element={<Hr />}></Route>
        <Route path="/dashboard/estimate" element={<CreateEstimate />}></Route>
        <Route path="/dashboard/profile/:id" element={<Profile />}></Route>
        <Route path="/datatable" element={<DataTable />}></Route>
        <Route path="/employeecard" element={<EmployeeCard />}></Route>
        <Route path="/dashboard/allclients" element={<AllClients />}></Route>
        <Route
          path="/dashboard/clientprofile/:id"
          element={<ClientProfile />}
        ></Route>
        <Route path="/dashboard/header" element={<Header />}></Route>
      </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
