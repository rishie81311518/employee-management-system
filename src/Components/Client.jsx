import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Client = () => {
  const [client, setClient] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/client")
      .then((result) => {
        if (result.data.Status) {
          setClient(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/auth/delete_client/${id}`)
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
        <h3>Client List</h3>
      </div>
      <Link to="/dashboard/add_client" className="btn btn-success">
        Add Clients
      </Link>
      <div className="mt-3">
        {client && client.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Company Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {client.map((c) => (
                <tr key={c.id}>
                  <td>{c.client_name}</td>
                  <td>{c.username}</td>
                  <td>{c.email}</td>
                  <td>{c.phone}</td>
                  <td>{c.company_name}</td>
                  <td>
                    <Link
                      to={`/dashboard/edit_client/` + c.id}
                      className="btn btn-info btn-sm me-2"
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-warning btn-sm"
                      onClick={() => handleDelete(c.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No Client data available</p>
        )}
      </div>
    </div>
  );
};

export default Client;
