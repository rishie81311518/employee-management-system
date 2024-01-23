import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddDesignation = () => {
  const [designation, setDesignation] = useState({
    designation_name: "",
    department_id: "1",
  });
  const [department, setDepartment] = useState([]);
  const navigate = useNavigate();

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

  useEffect(() => {
    console.log(designation);
  }, [designation]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("designation_name", designation.designation_name);
    formData.append("department_id", designation.department_id);

    axios
      .post("http://localhost:3000/auth/add_designation", formData)
      .then((result) => {
        if (result.data.Status) {
          navigate("/dashboard/designation");
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Add Designation</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="inputName" className="form-label">
              Designation
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputDesignationName"
              placeholder="Enter your designation"
              value={designation.designation_name}
              onChange={(e) =>
                setDesignation({
                  ...designation,
                  designation_name: e.target.value,
                })
              }
            />
          </div>

          <div className="col-12">
            <label htmlFor="department" className="form-label">
              Department
            </label>
            <select
              name="department"
              id="department"
              className="form-select"
              value={designation.department_id}
              onChange={(e) =>
                setDesignation({
                  ...designation,
                  department_id: e.target.value,
                })
              }
            >
              {department.map((d) => {
                return <option value={d.id}>{d.name}</option>;
              })}
            </select>
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Add Designation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDesignation;
