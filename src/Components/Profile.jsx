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
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
const Profile = () => {
  var id_param = useParams().id;

  const [employees, setEmployees] = useState([]);
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("http://localhost:3000/auth/employee");
        if (response.data.Status) {
          setEmployees(response.data.Result);
        } else {
          alert(response.data.Error);
        }
      } catch (error) {
        console.error("Error fetching employees:", error);
        alert("An error occurred while fetching employee data.");
      }
    };

    fetchEmployees();
  }, []);

  useEffect(() => {
    var employee = employees.filter((emp) => emp.id == id_param);
    setEmployee(employee);
    console.log(employee);
  }, [employees]);

  return (
    <>
      Employee Profile Details
      <Card
  style={{
    width: "18rem",
    height: "auto",
    margin: "10px",
    cursor: "pointer",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  }}
>
  <Card.Body>
    {employee.length > 0 ? (
      <>
        <Card.Text style={{ fontSize: "18px", fontWeight: "bold" }}>Name: {employee[0].name}</Card.Text>
        <Card.Text style={{ fontSize: "16px" }}>Email: {employee[0].email}</Card.Text>
        <Card.Text style={{ fontSize: "16px" }}>Salary: {employee[0].salary}</Card.Text>
        <Card.Text style={{ fontSize: "16px" }}>Address: {employee[0].address}</Card.Text>
        <Card.Text style={{ fontSize: "16px" }}>Category: {employee[0].category_id}</Card.Text>
        <Card.Text style={{ fontSize: "16px" }}>Work Mode: {employee[0].work_mode}</Card.Text>


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
