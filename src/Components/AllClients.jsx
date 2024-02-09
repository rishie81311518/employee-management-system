import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import img1 from "../assets/employee-rishie.jpeg";

const EmployeeCard = ({ id, imageSrc, name, role, onClick }) => (
  <Card
    style={{
      width: "18rem",
      height: "auto",
      margin: "10px",
      cursor: "pointer",
    }}
    onClick={() => onClick(id)}
  >
    <Card.Img variant="top" src={imageSrc} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>{role}</Card.Text>
    </Card.Body>
  </Card>
);

const AllClients = () => {
  const navigateToProfile = (id) => {
    console.log("Navigating to profile page for employee with ID:", id);
    // navigate('/dashboard/profile/:id')
  };
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get("http://localhost:3000/auth/client");
        if (response.data.Status) {
          setClients(response.data.Result);
        } else {
          alert(response.data.Error);
        }
      } catch (error) {
        console.error("Error fetching employees:", error);
        alert("An error occurred while fetching employee data.");
      }
    };

    fetchClients();
  }, []);

  return (
    <Container>
      <h2>All Clients</h2>
      <div style={{ marginBottom: "20px" }}></div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {clients.map((client) => (
          <Link key={client.id} to={`/dashboard/clientprofile/${client.id}`}>
            <EmployeeCard
              id={client.id}
              imageSrc={img1}
              name={client.client_name}
              onClick={navigateToProfile}
            />
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default AllClients;
