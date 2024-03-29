import axios from "axios";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();
  console.log(id);
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/auth/employee/${id}`
        );
        if (response.data.Status) {
          setEmployee(response.data.Result);
          console.log(response.data.Result);
        } else {
          alert(response.data.Error);
        }
      } catch (error) {
        console.error("Error fetching employee:", error);
        alert("An error occurred while fetching employee data.");
      }
    };

    fetchEmployee();
  }, [id]);

  return (
    <>
      <h2>Employee Profile Details</h2>
      <Card
        style={{
          width: "18rem",
          margin: "10px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Card.Body>
          {Object.keys(employee).length > 0 ? (
            <>
              <Card.Text style={{ fontSize: "16px" }}>
                Name: {employee.employee_name}
              </Card.Text>
              <Card.Text style={{ fontSize: "16px" }}>
                Email: {employee.email}
              </Card.Text>
              <Card.Text style={{ fontSize: "16px" }}>
                Salary: {employee.salary}
              </Card.Text>
              <Card.Text style={{ fontSize: "16px" }}>
                Address: {employee.address}
              </Card.Text>
              <Card.Text style={{ fontSize: "16px" }}>
                Client Name: {employee.client_name}
              </Card.Text>
              <Card.Text style={{ fontSize: "16px" }}>
                Category: {employee.category_name}
              </Card.Text>
              <Card.Text style={{ fontSize: "16px" }}>
                Work Mode: {employee.work_mode}
              </Card.Text>
            </>
          ) : (
            <Card.Text>No employee data available.</Card.Text>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default Profile;
