// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//       <div className="container-fluid">
//         <NavLink className="navbar-brand" to="/">
//           Web Synerzies
//         </NavLink>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ml-auto">
//             <li className="nav-item">
//               <NavLink className="nav-link" exact to="/">
//                 Home
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/tables">
//                 Tables
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/dashboard/profile">
//                 Profile
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/analytics">
//                 Analytics
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 className="nav-link"
//                 to="/hero404"
//                 target="_blank"
//               >
//                 Project Leads
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// function Holidays() {
//   const [formData, setFormData] = useState({
//     id: '',
//     title: '',
//     holidayDate: '',
//     day: '',
//   });

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     // Add your logic for handling form submission, e.g., sending data to the server
//     console.log('Form submitted:', formData);
//       window.location.reload();
//   };

//   const handleInputChange = (e) => {
//     e.preventDefault();
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });

//     axios
//       .post("http://localhost:3000/auth/holidays", formData)
//       .then((result) => {
//         if (result.data.Status) {
//           navigate("/dashboard/employee");
//         } else {
//           alert(result.data.Error);
//         }
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="container mt-4">
//         <h5>Holidays 2024</h5>
//         <form onSubmit={handleFormSubmit}>
//           <div className="mb-3">
//             <label htmlFor="id" className="form-label">
//               ID
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="id"
//               name="id"
//               value={formData.id}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="title" className="form-label">
//               Title
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="title"
//               name="title"
//               value={formData.title}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="holidayDate" className="form-label">
//               Holiday Date
//             </label>
//             <input
//               type="date"
//               className="form-control"
//               id="holidayDate"
//               name="holidayDate"
//               value={formData.holidayDate}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="day" className="form-label">
//               Day
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="day"
//               name="day"
//               value={formData.day}
//               onChange={handleInputChange}
//             />
//           </div>
//           <button type="submit" className="btn btn-primary">
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Holidays;

import axios from "axios"; // Import axios for making HTTP requests
import React, { useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Web Synerzies
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/tables">
                Tables
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/dashboard/profile">
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/analytics">
                Analytics
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/hero404" target="_blank">
                Project Leads
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

function Holidays() {
  const [formData, setFormData] = useState({
    title: "",
    holiday_date: "",
    day: "",
  });

  const navigate= useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      // Send form data to the backend
      const response = await axios.post(
        "http://localhost:3000/auth/holidays",
        formData
      );

      // Handle the response from the backend
      if (response.data.Status) {
        // console.log("Data submitted successfully:", formData);
        navigate("/dashboard/employee");
      } else {
        console.error("Failed to submit data:", response.data.Error);
        alert(response.data.Error);
      }
    } catch (error) {
      console.error("An error occurred while submitting data:", error);
      
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h5>Holidays 2024</h5>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="holiday_date" className="form-label">
              Holiday Date
            </label>
            <input
              type="date"
              className="form-control"
              id="holiday_date"
              name="holiday_date"
              value={formData.holiday_date}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="day" className="form-label">
              Day
            </label>
            <input
              type="text"
              className="form-control"
              id="day"
              name="day"
              value={formData.day}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Holidays;
