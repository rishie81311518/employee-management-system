import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const { employee } = useParams();
  const [profileData, setProfileData] = useState(null);

  

  useEffect(() => {
  // Replace with the actual employee ID you want to fetch
    var id = 123;
    console.log(id);  
    axios
      .get(`/employee/${id}`)
      .then((result) => {
        if (result.data.Status) {
          setEmployee(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  if (!profileData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{profileData.name}'s Profile</h2>

      {/* Display other profile information */}
    </div>
  );
};

export default Profile;
