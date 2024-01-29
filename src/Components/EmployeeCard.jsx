import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const EmployeeCard = ({ id, imageSrc, name, role }) => (
  <Card style={{ width: "18rem", height: "auto", margin: "10px" }}>
    <Card.Img variant="top" src={imageSrc} />
    <Card.Body>
      <Link
        to={`/dashboard/profile/${id}`} // Link to the employee profile page with employee id
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Card.Title>{name}</Card.Title>
      </Link>
      <Card.Text>{role}</Card.Text>
    </Card.Body>
  </Card>
);

export default EmployeeCard;
