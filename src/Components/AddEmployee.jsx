import axios from "axios";
import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    password: "",
    salary: "",
    address: "",
    category_id: "",
    image: "",
    work_mode: "",
    image_data: "",
  });
  const [category, setCategory] = useState([]);

  const [selectedStatus, setSelectedStatus] = useState(null);
  const navigate = useNavigate();

  const WorkTypes = {
    Hybrid: 1,
    WorkFromHome: 2,
    Remote: 3,
  };

  const [errors, setErrors] = useState({});

  const handleDropdownSelect = (selectedItem) => {
    // Update the selected status
    setSelectedStatus(selectedItem);
    setEmployee({ ...employee, work_mode: WorkTypes[selectedItem] });
  };
  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/category")
      .then((result) => {
        if (result.data.Status) {
          // Add default category at the beginning of the array
          result.data.Result.unshift({ id: 0, name: "None" });
          setCategory(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const validateForm = () => {
    let valid = true;
    const errors = {};

    if (!employee.name) {
      errors.name = "Name is required";
      valid = false;
    } else if (!/^[A-Z][a-zA-Z\s]*$/.test(employee.name)) {
      errors.name =
        "Name should start with a capital letter and contain only letters and spaces";
      valid = false;
    }

    if (!employee.email) {
      errors.email = "Email is required";
      valid = false;
    } else if (
      !/^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i.test(employee.email)
    ) {
      errors.email = "Invalid email format";
      valid = false;
    }

    if (!employee.password) {
      errors.image = "Password is required";
      valid = false;
    }

    if (!employee.salary) {
      errors.salary = "Salary is required";
      valid = false;
    } else if (!/^\d+$/.test(employee.salary)) {
      errors.salary = "Salary must be a valid integer";
      valid = false;
    }

    if (!employee.address) {
      errors.address = "Address is required";
      valid = false;
    }

    if (!employee.image) {
      errors.image = "Image is required";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the form
    const isValid = validateForm();

    // If the form is not valid, stop submission
    if (!isValid) {
      return;
    }

    const formData = new FormData();
    formData.append("name", employee.name);
    formData.append("email", employee.email);
    formData.append("password", employee.password);
    formData.append("address", employee.address);
    formData.append("salary", employee.salary);
    formData.append("image", employee.image);
    formData.append("category_id", employee.category_id);
    formData.append("work_mode", employee.work_mode);
    formData.append("image_data", employee.image_data);
    console.log(employee);
    axios
      .post("http://localhost:3000/auth/add_employee", formData)
      .then((result) => {
        if (result.data.Status) {
          navigate("/dashboard/employee");
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Add Employee</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="inputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className={`form-control rounded-0 ${
                errors.name ? "is-invalid" : ""
              }`}
              id="inputName"
              placeholder="Enter Name"
              onChange={(e) =>
                setEmployee({ ...employee, name: e.target.value })
              }
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name}</div>
            )}
          </div>
          <div className="col-12">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="text"
              className={`form-control rounded-0 ${
                errors.email ? "is-invalid" : ""
              }`}
              id="inputEmail4"
              placeholder="Enter Email"
              autoComplete="off"
              onChange={(e) =>
                setEmployee({ ...employee, email: e.target.value })
              }
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
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
                setEmployee({ ...employee, password: e.target.value })
              }
            />
            <label htmlFor="inputSalary" className="form-label">
              Salary
            </label>
            <input
              type="text"
              className={`form-control rounded-0 ${
                errors.salary ? "is-invalid" : ""
              }`}
              id="inputSalary"
              placeholder="Enter Salary"
              autoComplete="off"
              onChange={(e) =>
                setEmployee({ ...employee, salary: e.target.value })
              }
            />
            {errors.salary && (
              <div className="invalid-feedback">{errors.salary}</div>
            )}
          </div>
          <div className="col-12">
            <label type="text" className="form-label">
              Address
            </label>
            <input
              type="text"
              className={`form-control rounded-0 ${
                errors.address ? "is-invalid" : ""
              }`}
              id="inputAddress"
              placeholder="Enter Address"
              autoComplete="off"
              onChange={(e) =>
                setEmployee({ ...employee, address: e.target.value })
              }
            />
            {errors.address && (
              <div className="invalid-feedback">{errors.address}</div>
            )}
          </div>
          <div className="col-12">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <select
              name="category"
              id="category"
              className="form-select"
              onChange={(e) =>
                setEmployee({ ...employee, category_id: e.target.value })
              }
            >
              {category.map((c) => {
                return <option value={c.id}>{c.name}</option>;
              })}
            </select>
          </div>

          <div className="col-12 mb-3">
            <label className="form-label" htmlFor="inputGroupFile01">
              Select Image
            </label>
            <input
              type="file"
              className="form-control rounded-0"
              id="inputGroupFile01"
              name="image"
              onChange={(e) => {
                if (e.target.files.length > 0) {
                  // If an image is selected, update the employee state
                  setEmployee({ ...employee, image: e.target.files[0] });
                } else {
                  // If no image is selected, set an error message
                  setErrors({ ...errors, image: "Image is required" });
                }
              }}
            />
            {/* Display error message if image is required */}
            {errors.image && (
              <div className="invalid-feedback">{errors.image}</div>
            )}
          </div>

          <div className="col-md-4 mb-3">
            <label htmlFor="work mode" className="form-label">
              Work Mode
            </label>
            <Dropdown onSelect={handleDropdownSelect}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {selectedStatus || "Select Status"}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey="Hybrid">Hybrid</Dropdown.Item>
                <Dropdown.Item eventKey="WorkFromHome">
                  Work from home
                </Dropdown.Item>
                <Dropdown.Item eventKey="Remote">Remote location</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="col-12 mb-3">
            <label className="form-label" htmlFor="inputGroupFile01">
              Upload Image
            </label>
            <input
              type="file"
              className="form-control rounded-0"
              id="inputGroupFile01"
              name="image"
              onChange={(e) =>
                setEmployee({ ...employee, image_data: e.target.files[0] })
              }
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Add Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
