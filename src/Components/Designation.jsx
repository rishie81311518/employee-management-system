import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Designation = () => {
  const [designation, setDesignation] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/designation")
      .then((result) => {
        if (result.data.Status) {
          setDesignation(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/auth/delete_designation/${id}`)
      .then(result => {
        if (result.data.Status) {
          // Reload the page or update the state to trigger a re-render
          window.location.reload();
        } else {
          alert(result.data.Error);
        }
      })
      .catch(error => {
        console.log(error);
        // Handle error appropriately
      });
  };

  return (
    <div className="px-5 mt-3">
      <div className="d-flex justify-content-center">
        <h3>Designation List</h3>
      </div>
      <Link to="/dashboard/add_designation" className="btn btn-success">
        Add Designation
      </Link>
      <div className="mt-3">
        {designation && designation.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>Designation</th>
                <th>Department</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {designation.map((d) => (
                <tr key={d.id}>
                  <td>{d.designation_name}</td>
                  <td>{d.department_id}</td>
                  <td>
                    <Link
                      to={`/dashboard/edit_designation/` + d.id}
                      className="btn btn-info btn-sm me-2"
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-warning btn-sm"
                      onClick={() => handleDelete(d.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No Designation data available</p>
        )}
      </div>
    </div>
  );
};

export default Designation;
