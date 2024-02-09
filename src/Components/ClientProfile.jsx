import axios from "axios";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";

const ClientProfile = () => {
  const { id } = useParams();
  console.log(id);
  const [client, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/auth/client/${id}`
        );
        if (response.data.Status) {
          setClients(response.data.Result);
          console.log(response.data.Result);
          console.log(client);
        } else {
          alert(response.data.Error);
        }
      } catch (error) {
        console.error("Error fetching client:", error);
        alert("An error occurred while fetching client data.");
      }
    };

    fetchClients();
  }, [id]);

  return (
    <>
      <h2>Client Profile Details</h2>
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
          {Object.keys(client).length > 0 ? (
            <>
              <Card.Text style={{ fontSize: "16px" }}>
                Name: {client.client_name}
              </Card.Text>
              <Card.Text style={{ fontSize: "16px" }}>
                Username: {client.username}
              </Card.Text>
              <Card.Text style={{ fontSize: "16px" }}>
                Email: {client.email}
              </Card.Text>
              <Card.Text style={{ fontSize: "16px" }}>
                Phone: {client.phone}
              </Card.Text>
              <Card.Text style={{ fontSize: "16px" }}>
                Company Name: {client.company_name}
              </Card.Text>
              <Card.Text style={{ fontSize: "16px" }}>
                Department Name: {client.department_name}
              </Card.Text>
            </>
          ) : (
            <Card.Text>No client data available.</Card.Text>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default ClientProfile;
