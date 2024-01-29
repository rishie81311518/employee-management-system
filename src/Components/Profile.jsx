// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const Profile = () => {
//   const { employee } = useParams();
//   const [profileData, setProfileData] = useState(null);

  

//   useEffect(() => {
//   // Replace with the actual employee ID you want to fetch
//     var id = 123;
//     console.log(id);  
//     axios
//       .get(`/employee/${id}`)
//       .then((result) => {
//         if (result.data.Status) {
//           setEmployee(result.data.Result);
//         } else {
//           alert(result.data.Error);
//         }
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   if (!profileData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>{profileData.name}'s Profile</h2>

//       {/* Display other profile information */}
//     </div>
//   );
// };

// export default Profile;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom"; // Import useParams from react-router-dom

// const Profile = () => { // Remove 'match' from function parameters

//   const { id } = useParams(); // Access the 'id' parameter from the URL
  
//   const [employee, setEmployee] = useState(null);

//   useEffect(() => {
//     const fetchEmployee = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3000/auth/employee/${id}`);
//         if (response.data.Status) {
//           setEmployee(response.data.Result);
//         } else {
//           alert(response.data.Error);
//         }
//       } catch (error) {
//         console.error("Error fetching employee:", error);
//         alert("An error occurred while fetching employee data.");
//       }
//     };

//     fetchEmployee();
//   }, [id]); // Update the dependency array to include 'id'


//   if (!employee) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>Employee Profile</h2>
//       <p>Employee ID: {employee.id}</p>
//       <p>Name: {employee.name}</p>
//       <p>Email: {employee.email}</p>
//       {/* Add more details here */}
//     </div>
//   );
// };

// export default Profile;


import React from "react";
import { Card } from "react-bootstrap";

const Profile = ({ id, imageSrc, name, role, onClick }) => (
  <Card
    style={{ width: "18rem", height: "auto", margin: "10px" }}
    onClick={() => onClick(id)} // Call onClick function with employee id when clicked
  >
    <Card.Img variant="top" src={imageSrc} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>{role}</Card.Text>
    </Card.Body>
  </Card>
);

export default Profile;
