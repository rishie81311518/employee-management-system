import axios from "axios";
import { MDBDataTable } from "mdbreact";
import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Link, useNavigate } from "react-router-dom";

const Employee = () => {
  const [employee, setEmployee] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const navigate = useNavigate();
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [deleteStatus, setDeleteStatus] = useState(false);

  const handleEdit = (id) => {
    // Navigate to the "edit_employee/:id" route
    navigate(`/dashboard/edit_employee/${id}`);
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/auth/delete_employee/${id}`)
      .then((result) => {
        if (result.data.Status) {
          //setDeleteStatus(true);
          // Remove the deleted employee from the state
          setEmployee(employee.filter((emp) => emp.id !== id));
        } else {
          alert(result.data.Error);
        }
      })
      .catch((error) => {
        console.error("Error deleting employee:", error);
        // Handle error appropriately
      });
  };

  const handleDropdownSelect = (selectedItem) => {
    // Update the selected status
    setSelectedStatus(selectedItem);
    //console.log(selectedItem);
    // Filter employee data based on selected status
    const filteredEmployee = employee.filter(
      (emp) => emp.work_mode === selectedItem
    );
    //console.log(filteredEmployee);
    // Update the state with filtered employee data
    setFilteredEmployees(filteredEmployee);
  };

  useEffect(() => {
    setFilteredEmployees(employee);
    //console.log(filteredEmployees,"filtered")
  }, [employee]);

  useEffect(() => {
    console.log(filteredEmployees, "filtered");
  }, [filteredEmployees]);

  const WorkTypes = {
    Hybrid: 1,
    "Work From Home": 2,
    "Remote Location": 3,
  };

  const ReverseWorkTypes = {};
  Object.keys(WorkTypes).forEach((key) => {
    ReverseWorkTypes[WorkTypes[key]] = key;
  });

  // Example usage in a function
  function getWorkTypeName(numericValue) {
    // Use the reverse mapping to get the name
    return ReverseWorkTypes[numericValue];
  }

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/employee")
      .then((result) => {
        if (result.data.Status) {
          setEmployee(
            result.data.Result.map((row) => ({
              ...row,
              work_mode: getWorkTypeName(row.work_mode),
              image: (
                <img
                  src={`http://localhost:5173/${row.image}`}
                  alt={row.name}
                  style={{ width: "50px", height: "50px" }}
                />
              ),
              editButton: (
                <button
                  className="btn btn-danger"
                  id={row.id}
                  onClick={() => handleEdit(row.id)}
                >
                  Edit
                </button>
              ),
              deleteButton: (
                <button
                  className="btn btn-danger"
                  id={row.id}
                  onClick={() => handleDelete(row.id)}
                >
                  Delete
                </button>
              ),
            }))
          );
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, [employee]);

  const data = {
    columns: [
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "Email",
        field: "email",
        sort: "asc",
        width: 200,
      },
      {
        label: "Image",
        field: "image",
        sort: "asc",
        width: 200,
      },
      {
        label: "Address",
        field: "address",
        sort: "asc",
        width: 100,
      },
      {
        label: "Salary",
        field: "salary",
        sort: "asc",
        width: 100,
      },
      {
        label: "Work Mode",
        field: "work_mode",
        sort: "asc",
        width: 100,
      },
      {
        label: "Edit",
        field: "editButton",
      },
      {
        label: "Delete",
        field: "deleteButton",
      },
    ],
    rows: filteredEmployees,
  };

  return (
    <div className="px-5 mt-3">
      <div className="d-flex justify-content-center">
        <h3>Employee List</h3>
      </div>
      <Link to="/dashboard/add_employee" className="btn btn-success">
        Add Employee
      </Link>
      <div className="col-md-4 mb-3">
        <label htmlFor="status" className="form-label">
          Work Mode
        </label>
        <Dropdown onSelect={handleDropdownSelect}>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {selectedStatus || "Select Status"}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item eventKey="Hybrid">Hybrid</Dropdown.Item>
            <Dropdown.Item eventKey="Work From Home">
              Work From Home
            </Dropdown.Item>
            <Dropdown.Item eventKey="Remote Location">
              Remote Location
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <MDBDataTable striped bordered small data={data} sorting="false" />
    </div>
  );
};

export default Employee;
