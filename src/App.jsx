import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Components/Login'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Home from './Components/Home'
import Employee from './Components/Employee'
import Category from './Components/Category'
import Profile from './Components/Profile'
import AddCategory from './Components/AddCategory'
import AddEmployee from './Components/AddEmployee'
import EditEmployee from './Components/EditEmployee'
import AllEmployees from './Components/AllEmployees'
import Holidays from './Components/Holidays'
import Leaves from './Components/Leaves'
import EmployeeLeaves from './Components/EmployeeLeaves'
import Department from './Components/Department'
import AddDepartment from './Components/AddDepartment'
import Client from './Components/Client'
import AddClient from './Components/AddClient'
import EditClient from './Components/EditClient'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/adminlogin' element ={<Login/>} ></Route>
      <Route path='/dashboard' element ={<Dashboard/>} ></Route>
      <Route path='' element={<Home />}></Route>
        <Route path='/dashboard/employee' element={<Employee />}></Route>
        <Route path='/dashboard/category' element={<Category />}></Route>
        <Route path='/dashboard/profile' element={<Profile />}></Route>
        <Route path='/dashboard/add_category' element={<AddCategory />}></Route>
        <Route path='/dashboard/add_employee' element={<AddEmployee />}></Route>
        <Route path='/dashboard/edit_employee/:id' element={<EditEmployee />}></Route>
        <Route path='/allemployees' element={<AllEmployees />}></Route>
        <Route path='/holidays' element={<Holidays />}></Route>
        <Route path='/adminleaves' element={<Leaves />}></Route>
        <Route path='/employeeleaves' element={<EmployeeLeaves />}></Route>
        <Route path='/dashboard/department' element={<Department />}></Route>
        <Route path='/dashboard/add_department' element={<AddDepartment />}></Route>
        <Route path='/dashboard/add_department' element={<AddDepartment />}></Route>
        <Route path='/dashboard/client' element={<Client />}></Route>
        <Route path='/dashboard/add_client' element={<AddClient />}></Route>
        <Route path='/dashboard/edit_client/:id' element={<EditClient />}></Route>

    </Routes>
    
    </BrowserRouter>
  )
}

export default App