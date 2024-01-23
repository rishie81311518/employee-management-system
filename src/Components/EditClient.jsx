import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditClient = () => {
    const {id} = useParams()
    const [client, setClient] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        company_name: "",
        department_id: "",
    });
    const [department, setDepartment] = useState([])
    const navigate = useNavigate()

    useEffect(()=> {
        axios.get('http://localhost:3000/auth/department')
        .then(result => {
            if(result.data.Status) {
                setDepartment(result.data.Result);
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))

        axios.get('http://localhost:3000/auth/client/'+id)
        .then(result => {
            setClient({
                ...client,
                name: result.data.Result[0].name,
                username: result.data.Result[0].username,
                email: result.data.Result[0].email,
                phone: result.data.Result[0].phone,
                company_name: result.data.Result[0].company_name,
                department_id: result.data.Result[0].department_id,
            })
        }).catch(err => console.log(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put('http://localhost:3000/auth/edit_client/'+id, client)
        .then(result => {
            if(result.data.Status) {
                navigate('/dashboard/client')
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }
    
  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Edit client</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label for="inputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputName"
              placeholder="Enter Name"
              value={client.name}
              onChange={(e) =>
                setClient({ ...client, name: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control rounded-0"
              id="inputEmail4"
              placeholder="Enter Email"
              autoComplete="off"
              value={client.email}
              onChange={(e) =>
                setClient({ ...client, email: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="inputEmail4" className="form-label">
              Username
            </label>
            <input
              type="username"
              className="form-control rounded-0"
              id="inputUsername"
              placeholder="Enter username"
              autoComplete="off"
              value={client.username}
              onChange={(e) =>
                setClient({ ...client, username: e.target.value })
              }
            />
          </div>

          <div className='col-12'>
            <label for="inputSalary" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputPhonenumber"
              placeholder="Enter Phone Number"
              autoComplete="off"
              value={client.phone}
              onChange={(e) =>
                setClient({ ...client, phone: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="inputAddress" className="form-label">
              Company Name
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputCompanyName"
              placeholder="Enter your company name"
              autoComplete="off"
              value={client.company_name}
              onChange={(e) =>
                setClient({ ...client, company_name: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="department" className="form-label">
              Department
            </label>
            <select name="department" id="department" className="form-select"
                onChange={(e) => setClient({...client, department_id: e.target.value})}>
              {department.map((d) => {
                return <option value={d.id}>{d.name}</option>;
              })}
            </select>
          </div>
          
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Edit Client
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditClient