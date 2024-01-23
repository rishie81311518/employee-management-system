import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddClient = () => {
  const [client, setClient] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    phone: "",
    company_name: "",
    department_id: "",
  });
  const [department, setDepartment] = useState([]);
  const navigate = useNavigate();

//   useEffect(()=>{
//  console.log(client);
//   },[client]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/department")
      .then((result) => {
        if (result.data.Status) {
          setDepartment(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(client);
    const formData = new FormData();
    formData.append("name", client.name);
    formData.append("username",client.username);
    formData.append("email", client.email);
    formData.append("password", client.password);
    formData.append("phone", client.phone);
    formData.append("company_name", client.company_name);
    formData.append("department_id", client.department_id);
   console.log(formData);
    axios
      .post("http://localhost:3000/auth/add_client", formData)
      .then((result) => {
        if (result.data.Status) {
          navigate("/dashboard/client");
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Add Client</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
        <div className="col-12">
            <label htmlFor="inputName" className="form-label">
            Name
            </label>
            <input
            type="text"
            className="form-control rounded-0"
            id="inputName"
            placeholder="Enter Name"
            onChange={(e) =>
                setClient({ ...client, name: e.target.value })
            }
            />
        </div>
        <div className="col-12">
            <label htmlFor="inputEmail4" className="form-label">
            Username
            </label>
            <input
            type="username"
            className="form-control rounded-0"
            id="inputUsername"
            placeholder="Enter Username"
            autoComplete="off"
            onChange={(e) =>
                setClient({ ...client, username: e.target.value })
            }
            />
        </div>
        <div className="col-12">
            <label htmlFor="inputEmail4" className="form-label">
            Email
            </label>
            <input
            type="email"
            className="form-control rounded-0"
            id="inputEmail4"
            placeholder="Enter Email"
            autoComplete="off"
            onChange={(e) =>
                setClient({ ...client, email: e.target.value })
            }
            />
        </div>
<div className="col-12">
            <label htmlFor="inputPassword4" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control rounded-0"
              id="inputPassword4"
              placeholder="Enter Password"
              onChange={(e) =>
                setClient({ ...client, password: e.target.value })
              }
            />
            </div>
            <div className="col-12">
  <label htmlFor="inputPhoneNumber" className="form-label">
    Phone Number
  </label>
  <input
    type="tel"
    className="form-control rounded-0"
    id="inputPhoneNumber"
    placeholder="Enter Phone Number"
    autoComplete="off"
    onChange={(e) => setClient({ ...client, phone: e.target.value })}
  />
</div>

        <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
            Company Name
            </label>
            <input
            type="text"
            className="form-control rounded-0"
            id="inputCompanyName"
              placeholder="Enter Company Name"
              autoComplete="off"
              onChange={(e) =>
                setClient({ ...client, company_name: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="department" className="form-label">
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
              Add Client
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClient;
