// import axios from "axios";
// import React, { useState,useEffect } from "react";
// import Dropdown from "react-bootstrap/Dropdown";
// import { Link, useNavigate } from "react-router-dom";

// const Employee = () => {
//   const [employee, setEmployee] = useState([]);
//   const navigate = useNavigate();
//   const [selectedStatus, setSelectedStatus] = useState(null);

//   const handleDropdownSelect = (selectedItem) => {
//     // Update the selected status
//     setSelectedStatus(selectedItem);
//   };

// useEffect(() => {
//   axios
//     .get("http://localhost:3000/auth/employee")
//     .then((result) => {
//       if (result.data.Status) {
//         setEmployee(result.data.Result);
//       } else {
//         alert(result.data.Error);
//       }
//     })
//     .catch((err) => console.log(err));
// }, []);

//   const handleDelete = (id) => {
//     axios
//       .delete(`http://localhost:3000/auth/delete_employee/${id}`)
//       .then((result) => {
//         if (result.data.Status) {
//           // Reload the page or update the state to trigger a re-render
//           window.location.reload();
//         } else {
//           alert(result.data.Error);
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//         // Handle error appropriately
//       });
//   };

//   return (
//     <div className="px-5 mt-3">
//       <div className="d-flex justify-content-center">
//         <h3>Employee List</h3>
//       </div>
//       <Link to="/dashboard/add_employee" className="btn btn-success">
//         Add Employee
//       </Link>
//       <div className="col-md-4 mb-3">
//               <label htmlFor="status" className="form-label">
//                 Work Mode
//               </label>
//               <Dropdown onSelect={handleDropdownSelect}>
//                 <Dropdown.Toggle variant="success" id="dropdown-basic">
//                   {selectedStatus || "Select Status"}
//                 </Dropdown.Toggle>

//                 <Dropdown.Menu>
//                   <Dropdown.Item eventKey="Hybrid">Hybrid</Dropdown.Item>
//                   <Dropdown.Item eventKey="Work From Home">Work From Home</Dropdown.Item>
//                   <Dropdown.Item eventKey="Remote Location">Remote Location</Dropdown.Item>
//                 </Dropdown.Menu>
//               </Dropdown>
//             </div>

//       <div className="mt-3">
//         {employee && employee.length > 0 ? (
//         <table className="table">
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Image</th>
//                 <th>Email</th>
//                 <th>Address</th>
//                 <th>Salary</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {employee.map((e) => (
//                 <tr key={e.id}>
//                   <td>{e.name}</td>
//                   <td>
//                     <img
//                       src={`http://localhost:3000/Images/` + e.image}
//                       className="employee_image"
//                       alt={e.name}
//                     />
//                   </td>
//                   <td>{e.email}</td>
//                   <td>{e.address}</td>
//                   <td>{e.salary}</td>
//                   <td>
//                     <Link
//                       to={`/dashboard/edit_employee/` + e.id}
//                       className="btn btn-info btn-sm me-2"
//                     >
//                       Edit
//                     </Link>
//                     <button
//                       className="btn btn-warning btn-sm"
//                       onClick={() => handleDelete(e.id)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <p>No employee data available</p>
//         )}
//       </div>

//     </div>
//   );
// };

// export default Employee;

import axios from "axios";
import { MDBDataTable } from "mdbreact";
import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Link, useNavigate } from "react-router-dom";

const Employee = () => {
  const [employee, setEmployee] = useState([]);
  const navigate = useNavigate();
  const [selectedStatus, setSelectedStatus] = useState(null);

  const handleEdit = (id) => {
    // Navigate to the "edit_employee/:id" route
    navigate(`/dashboard/edit_employee/${id}`);
  };

  const handleDropdownSelect = (selectedItem) => {
    // Update the selected status
    setSelectedStatus(selectedItem);
  };

  const WorkTypes = {
    Hybrid: 1,
    WorkFromHome: 2,
    Remote: 3,
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

  console.log(employee);

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
            }))
          );
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

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
      },
    ],
    rows: employee,
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/auth/delete_employee/${id}`)
      .then((result) => {
        if (result.data.Status) {
          // Reload the page or update the state to trigger a re-render
          window.location.reload();
        } else {
          alert(result.data.Error);
        }
      })
      .catch((error) => {
        console.log(error);
        // Handle error appropriately
      });
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

      <MDBDataTable striped bordered small data={data} sorting={false} />
    </div>
  );
};

export default Employee;
