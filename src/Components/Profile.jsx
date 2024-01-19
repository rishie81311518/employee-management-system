import React, { useState } from 'react';
import Calendar from 'react-calendar'; // Make sure to install this library

const EducationCard = ({ education, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedEducation, setEditedEducation] = useState({ ...education });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleSaveEdit = () => {
    // Add logic to save editedEducation data
    // For example, you can make an API call to update the data on the server
    setIsEditing(false);
    onEdit(editedEducation);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedEducation((prevEducation) => ({
      ...prevEducation,
      [name]: value,
    }));
  };

  return (
    <div className="card mt-3">
      <div className="card-header">
        <h5 className="card-title">Educational Information</h5>
      </div>
      <div className="card-body">
        {isEditing ? (
          // Edit Form
          <form>
            <div className="mb-3">
              <label htmlFor="institution" className="form-label">
                Institution
              </label>
              <input
                type="text"
                className="form-control"
                id="institution"
                name="institution"
                value={editedEducation.institution}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                type="text"
                className="form-control"
                id="subject"
                name="subject"
                value={editedEducation.subject}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="startDate" className="form-label">
                Starting Date
              </label>
              <Calendar
                name="startDate"
                onChange={(date) =>
                  handleInputChange({
                    target: { name: 'startDate', value: date },
                  })
                }
                value={editedEducation.startDate}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="completeDate" className="form-label">
                Completion Date
              </label>
              <Calendar
                name="completeDate"
                onChange={(date) =>
                  handleInputChange({
                    target: { name: 'completeDate', value: date },
                  })
                }
                value={editedEducation.completeDate}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="degree" className="form-label">
                Degree
              </label>
              <input
                type="text"
                className="form-control"
                id="degree"
                name="degree"
                value={editedEducation.degree}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="grade" className="form-label">
                Grade
              </label>
              <input
                type="text"
                className="form-control"
                id="grade"
                name="grade"
                value={editedEducation.grade}
                onChange={handleInputChange}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary me-2"
              onClick={handleSaveEdit}
            >
              Save
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleCancelEdit}
            >
              Cancel
            </button>
          </form>
        ) : (
          // Display Mode
          <>
            <h6 className="card-subtitle mb-2 text-muted">
              Institution: {education.institution}
            </h6>
            <p className="card-text">Subject: {education.subject}</p>
            <p className="card-text">Starting Date: {education.startDate.toString()}</p>
            <p className="card-text">Completion Date: {education.completeDate.toString()}</p>
            <p className="card-text">Degree: {education.degree}</p>
            <p className="card-text">Grade: {education.grade}</p>
            <button
              type="button"
              className="btn btn-warning"
              onClick={handleEditClick}
            >
              Edit
            </button>
          </>
        )}
      </div>
    </div>
  );
};

const ExperienceCard = ({ experience, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedExperience, setEditedExperience] = useState({ ...experience });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleSaveEdit = () => {
    // Add logic to save editedExperience data
    // For example, you can make an API call to update the data on the server
    setIsEditing(false);
    onEdit(editedExperience);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedExperience((prevExperience) => ({
      ...prevExperience,
      [name]: value,
    }));
  };

  return (
    <div className="card mt-3" >
      <div className="card-header">
        <h5 className="card-title">Experience Information</h5>
      </div>
      <div className="card-body">
        {isEditing ? (
          // Edit Form
          <form>
            <div className="mb-3">
              <label htmlFor="company" className="form-label">
                Company Name
              </label>
              <input
                type="text"
                className="form-control"
                id="company"
                name="company"
                value={editedExperience.company}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="location" className="form-label">
                Location
              </label>
              <input
                type="text"
                className="form-control"
                id="location"
                name="location"
                value={editedExperience.location}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="position" className="form-label">
                Job Position
              </label>
              <input
                type="text"
                className="form-control"
                id="position"
                name="position"
                value={editedExperience.position}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="periodFrom" className="form-label">
                Period From
              </label>
              <Calendar
                name="periodFrom"
                onChange={(date) =>
                  handleInputChange({
                    target: { name: 'periodFrom', value: date },
                  })
                }
                value={editedExperience.periodFrom}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="periodTo" className="form-label">
                Period To
              </label>
              <Calendar
                name="periodTo"
                onChange={(date) =>
                  handleInputChange({
                    target: { name: 'periodTo', value: date },
                  })
                }
                value={editedExperience.periodTo}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary me-2"
              onClick={handleSaveEdit}
            >
              Save
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleCancelEdit}
            >
              Cancel
            </button>
          </form>
        ) : (
          // Display Mode
          <>
            <h6 className="card-subtitle mb-2 text-muted">
              Company: {experience.company}
            </h6>
            <p className="card-text">Location: {experience.location}</p>
            <p className="card-text">Job Position: {experience.position}</p>
            <p className="card-text">Period From: {experience.periodFrom.toString()}</p>
            <p className="card-text">Period To: {experience.periodTo.toString()}</p>
            <button
            type="button"
            className="btn btn-warning"
            onClick={handleEditClick}
            >
            Edit
            </button>
          </>
        )}
      </div>
    </div>
  );
};

const BankInformationCard = ({ bankInfo, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedBankInfo, setEditedBankInfo] = useState({ ...bankInfo });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleSaveEdit = () => {
    // Add logic to save editedBankInfo data
    // For example, you can make an API call to update the data on the server
    setIsEditing(false);
    onEdit(editedBankInfo);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedBankInfo((prevBankInfo) => ({
      ...prevBankInfo,
      [name]: value,
    }));
  };

  return (
    <div className="card mt-3" >
      <div className="card-header">
        <h5 className="card-title">Bank Information</h5>
      </div>
      <div className="card-body">
        {isEditing ? (
          // Edit Form
          <form>
            <div className="mb-3">
              <label htmlFor="bankName" className="form-label">
                Bank Name
              </label>
              <input
                type="text"
                className="form-control"
                id="bankName"
                name="bankName"
                value={editedBankInfo.bankName}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="accountNumber" className="form-label">
                Account Number
              </label>
              <input
                type="text"
                className="form-control"
                id="accountNumber"
                name="accountNumber"
                value={editedBankInfo.accountNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="ifscCode" className="form-label">
                IFSC Code
              </label>
              <input
                type="text"
                className="form-control"
                id="ifscCode"
                name="ifscCode"
                value={editedBankInfo.ifscCode}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="panNumber" className="form-label">
                PAN Number
              </label>
              <input
                type="text"
                className="form-control"
                id="panNumber"
                name="panNumber"
                value={editedBankInfo.panNumber}
                onChange={handleInputChange}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary me-2"
              onClick={handleSaveEdit}
            >
              Save
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleCancelEdit}
            >
              Cancel
            </button>
          </form>
        ) : (
          // Display Mode
          <>
            <h6 className="card-subtitle mb-2 text-muted">
              Bank Name: {bankInfo.bankName}
            </h6>
            <p className="card-text">Account Number: {bankInfo.accountNumber}</p>
            <p className="card-text">IFSC Code: {bankInfo.ifscCode}</p>
            <p className="card-text">PAN Number: {bankInfo.panNumber}</p>
            <button
              type="button"
              className="btn btn-warning"
              onClick={handleEditClick}
            >
              Edit
            </button>
          </>
        )}
      </div>
    </div>
  );
};

const FamilyInformationCard = ({ familyInfo, onEdit, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedFamilyInfo, setEditedFamilyInfo] = useState({ ...familyInfo });
  
    const handleEditClick = () => {
      setIsEditing(true);
    };
  
    const handleCancelEdit = () => {
      setIsEditing(false);
    };
  
    const handleSaveEdit = () => {
      // Add logic to save editedFamilyInfo data
      // For example, you can make an API call to update the data on the server
      setIsEditing(false);
      onEdit(editedFamilyInfo);
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setEditedFamilyInfo((prevFamilyInfo) => ({
        ...prevFamilyInfo,
        [name]: value,
      }));
    };

    return (
        <div className="card mt-2">
          <div className="card-header">
            <h5 className="card-title">Family Information</h5>
          </div>
          <div className="card-body">
            {isEditing ? (
              // Edit Form
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={editedFamilyInfo.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="relationship" className="form-label">
                    Relationship
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="relationship"
                    name="relationship"
                    value={editedFamilyInfo.relationship}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="dob" className="form-label">
                    Date of Birth
                  </label>
                  <Calendar
                    name="dob"
                    onChange={(date) =>
                      handleInputChange({
                        target: { name: 'dob', value: date },
                      })
                    }
                    value={editedFamilyInfo.dob}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={editedFamilyInfo.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary me-2"
                  onClick={handleSaveEdit}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCancelEdit}
                >
                  Cancel
                </button>
              </form>
            ) : (
              // Display Mode
              <>
                <h6 className="card-subtitle mb-2 text-muted">
                  Name: {familyInfo.name}
                </h6>
                <p className="card-text">Relationship: {familyInfo.relationship}</p>
                <p className="card-text">Date of Birth: {familyInfo.dob.toString()}</p>
                <p className="card-text">Phone: {familyInfo.phone}</p>
                <button
                  type="button"
                  className="btn btn-warning me-2"
                  onClick={handleEditClick}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => onDelete(familyInfo)}
                >
                  Delete
                </button>
              </>
            )}
          </div>
        </div>
      );
    };

    const PersonalInformationCard = ({ personalInfo, onEdit }) => {
        const [isEditing, setIsEditing] = useState(false);
        const [editedPersonalInfo, setEditedPersonalInfo] = useState({ ...personalInfo });
      
        const handleEditClick = () => {
          setIsEditing(true);
        };
      
        const handleCancelEdit = () => {
          setIsEditing(false);
        };
      
        const handleSaveEdit = () => {
          // Add logic to save editedPersonalInfo data
          // For example, you can make an API call to update the data on the server
          setIsEditing(false);
          onEdit(editedPersonalInfo);
        };
      
        const handleInputChange = (e) => {
          const { name, value } = e.target;
          setEditedPersonalInfo((prevPersonalInfo) => ({
            ...prevPersonalInfo,
            [name]: value,
          }));
        };

        return (
            <div className="card mt-2" >
              <div className="card-header">
                <h5 className="card-title">Personal Information</h5>
              </div>
              <div className="card-body">
                {isEditing ? (
                  // Edit Form
                  <form>
                    <div className="mb-3">
                      <label htmlFor="passportNo" className="form-label">
                        Passport Number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="passportNo"
                        name="passportNo"
                        value={editedPersonalInfo.passportNo}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="passportExpNo" className="form-label">
                        Passport Expiry Number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="passportExpNo"
                        name="passportExpNo"
                        value={editedPersonalInfo.passportExpNo}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="telephone" className="form-label">
                        Telephone
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="telephone"
                        name="telephone"
                        value={editedPersonalInfo.telephone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="nationality" className="form-label">
                        Nationality
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="nationality"
                        name="nationality"
                        value={editedPersonalInfo.nationality}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="religion" className="form-label">
                        Religion
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="religion"
                        name="religion"
                        value={editedPersonalInfo.religion}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="maritalStatus" className="form-label">
                        Marital Status
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="maritalStatus"
                        name="maritalStatus"
                        value={editedPersonalInfo.maritalStatus}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="employmentOfSpouse" className="form-label">
                        Employment of Spouse
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="employmentOfSpouse"
                        name="employmentOfSpouse"
                        value={editedPersonalInfo.employmentOfSpouse}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="numberOfChildren" className="form-label">
                        Number of Children
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="numberOfChildren"
                        name="numberOfChildren"
                        value={editedPersonalInfo.numberOfChildren}
                        onChange={handleInputChange}
                      />
                    </div>
                    <button
                      type="button"
                      className="btn btn-primary me-2"
                      onClick={handleSaveEdit}
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={handleCancelEdit}
                    >
                      Cancel
                    </button>
                  </form>
                ) : (
                  // Display Mode
                  <>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Passport Number: {personalInfo.passportNo}
                    </h6>
                    <p className="card-text">Passport Expiry Number: {personalInfo.passportExpNo}</p>
                    <p className="card-text">Telephone: {personalInfo.telephone}</p>
                    <p className="card-text">Nationality: {personalInfo.nationality}</p>
                    <p className="card-text">Religion: {personalInfo.religion}</p>
                    <p className="card-text">Marital Status: {personalInfo.maritalStatus}</p>
                    <p className="card-text">Employment of Spouse: {personalInfo.employmentOfSpouse}</p>
                    <p className="card-text">Number of Children: {personalInfo.numberOfChildren}</p>
                    <button
                    type="button"
                    className="btn btn-warning me-2"
                    onClick={handleEditClick}
                    >
                    Edit
                    </button>
                </>
                )}
            </div>
            </div>
        );
        };

        const EmergencyCard = ({ emergencyInfo, onEdit }) => {
            const [isEditing, setIsEditing] = useState(false);
            const [editedEmergencyInfo, setEditedEmergencyInfo] = useState({ ...emergencyInfo });
          
            const handleEditClick = () => {
              setIsEditing(true);
            };
          
            const handleCancelEdit = () => {
              setIsEditing(false);
            };
          
            const handleSaveEdit = () => {
              setIsEditing(false);
              onEdit(editedEmergencyInfo);
            };
          
            const handleInputChange = (e) => {
              const { name, value } = e.target;
              setEditedEmergencyInfo((prevEmergencyInfo) => ({
                ...prevEmergencyInfo,
                [name]: value,
              }));
            };
          
            return (
              <div className="card mt-2" >
                <div className="card-header">
                  <h5 className="card-title">Emergency Contact</h5>
                </div>
                <div className="card-body">
                  {isEditing ? (
                    // Edit Form
                    <form>
                      <div className="mb-3">
                        <label htmlFor="emergencyName" className="form-label">
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="emergencyName"
                          name="emergencyName"
                          value={editedEmergencyInfo.emergencyName}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="relationship" className="form-label">
                          Relationship
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="relationship"
                          name="relationship"
                          value={editedEmergencyInfo.relationship}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="emergencyPhone" className="form-label">
                          Phone
                        </label>
                        <input
                          type="tel"
                          className="form-control"
                          id="emergencyPhone"
                          name="emergencyPhone"
                          value={editedEmergencyInfo.emergencyPhone}
                          onChange={handleInputChange}
                        />
                      </div>
                      <button
                        type="button"
                        className="btn btn-primary me-2"
                        onClick={handleSaveEdit}
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={handleCancelEdit}
                      >
                        Cancel
                      </button>
                    </form>
                  ) : (
                    // Display Mode
                    <>
                      <p className="card-text">Name: {emergencyInfo.emergencyName}</p>
                      <p className="card-text">Relationship: {emergencyInfo.relationship}</p>
                      <p className="card-text">Phone: {emergencyInfo.emergencyPhone}</p>
                      <button
                        type="button"
                        className="btn btn-warning me-2"
                        onClick={handleEditClick}
                      >
                        Edit
                      </button>
                    </>
                  )}
                </div>
              </div>
            );
          };

          const EmployeeCard = ({ employeeInfo, onEdit }) => {
            const [isEditing, setIsEditing] = useState(false);
            const [editedEmployeeInfo, setEditedEmployeeInfo] = useState({ ...employeeInfo });
          
            const handleEditClick = () => {
              setIsEditing(true);
            };
          
            const handleCancelEdit = () => {
              setIsEditing(false);
            };
          
            const handleSaveEdit = () => {
              setIsEditing(false);
              onEdit(editedEmployeeInfo);
            };
          
            const handleInputChange = (e) => {
              const { name, value } = e.target;
              setEditedEmployeeInfo((prevEmployeeInfo) => ({
                ...prevEmployeeInfo,
                [name]: value,
              }));
            };
          
            return (
              <div className="card mt-2" >
                <div className="card-header">
                  <h5 className="card-title">{employeeInfo.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{employeeInfo.team}</h6>
                </div>
                <div className="card-body">
                  {isEditing ? (
                    // Edit Form
                    <form>
                      <div className="mb-3">
                        <label htmlFor="designation" className="form-label">
                          Designation
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="designation"
                          name="designation"
                          value={editedEmployeeInfo.designation}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="employeeId" className="form-label">
                          Employee ID
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="employeeId"
                          name="employeeId"
                          value={editedEmployeeInfo.employeeId}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="dateOfJoin" className="form-label">
                          Date of Join
                        </label>
                        <Calendar
                          name="dateOfJoin"
                          onChange={(date) =>
                            handleInputChange({
                              target: { name: 'dateOfJoin', value: date },
                            })
                          }
                          value={editedEmployeeInfo.dateOfJoin}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="phone" className="form-label">
                          Phone
                        </label>
                        <input
                          type="tel"
                          className="form-control"
                          id="phone"
                          name="phone"
                          value={editedEmployeeInfo.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={editedEmployeeInfo.email}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="birthday" className="form-label">
                          Birthday
                        </label>
                        <Calendar
                          name="birthday"
                          onChange={(date) =>
                            handleInputChange({
                              target: { name: 'birthday', value: date },
                            })
                          }
                          value={editedEmployeeInfo.birthday}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="address" className="form-label">
                          Address
                        </label>
                        <textarea
                          className="form-control"
                          id="address"
                          name="address"
                          value={editedEmployeeInfo.address}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="gender" className="form-label">
                          Gender
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="gender"
                          name="gender"
                          value={editedEmployeeInfo.gender}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="reportsTo" className="form-label">
                          Reports To
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="reportsTo"
                          name="reportsTo"
                          value={editedEmployeeInfo.reportsTo}
                          onChange={handleInputChange}
                        />
                      </div>
                      <button
                        type="button"
                        className="btn btn-primary me-2"
                        onClick={handleSaveEdit}
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={handleCancelEdit}
                      >
                        Cancel
                      </button>
                    </form>
                  ) : (
                    // Display Mode
                    <>
                    <p className="card-text">Designation: {employeeInfo.designation}</p>
                    <p className="card-text">Employee ID: {employeeInfo.employeeId}</p>
                    <p className="card-text">Date of Join: {employeeInfo.dateOfJoin.toString()}</p>
                    <p className="card-text">Phone: {employeeInfo.phone}</p>
                    <p className="card-text">Email: {employeeInfo.email}</p>
                    <p className="card-text">Birthday: {employeeInfo.birthday.toString()}</p>
                    <p className="card-text">Address: {employeeInfo.address}</p>
                    <p className="card-text">Gender: {employeeInfo.gender}</p>
                    <p className="card-text">Reports To: {employeeInfo.reportsTo}</p>
                    <button
                        type="button"
                        className="btn btn-warning me-2"
                        onClick={handleEditClick}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-info me-2"
                        onClick={() => alert('Chat button clicked')}
                      >
                        Chat
                      </button>
                    </>
                  )}
                </div>
              </div>
            );
          };
          

const Profile = () => {
  // Sample educational information data
  const initialEducationData = {
    institution: 'Indian Institute of Bombay',
    subject: 'Computer Science',
    startDate: new Date(),
    completeDate: new Date(),
    degree: 'Bachelor of Science',
    grade: 'A',
  };

  // Sample experience information data
  const initialExperienceData = {
    company: 'Web Synerzies',
    location: 'Banjara Hills',
    position: 'Full Stack Developer',
    periodFrom: new Date(),
    periodTo: new Date(),
  };

  // Sample bank information data
  const initialBankInfo = {
    bankName: 'State Bank Of India',
    accountNumber: '1234567890',
    ifscCode: 'ABC1234567',
    panNumber: 'ABCDE1234F',
  };

   // Sample family information data
   const initialFamilyInfoData = {
    name: 'John Doe',
    relationship: 'Spouse',
    dob: new Date(),
    phone: '123-456-7890',
  };

   // Sample data for personal information
   const initialPersonalInfoData = {
    passportNo: 'AB123456',
    passportExpNo: 'C123456',
    telephone: '123-456-7890',
    nationality: 'Country',
    religion: 'Religion',
    maritalStatus: 'Single',
    employmentOfSpouse: 'Employed',
    numberOfChildren: 2,
  };

   // Sample data for emergency information
   const initialEmergencyInfoData = {
    emergencyName: 'John Doe',
    relationship: 'Spouse',
    emergencyPhone: '987-654-3210',
  };

  //sample data for employee details
  const initialEmployeeData = {
    name: 'John Doe',
    team: 'Development',
    designation: 'Software Engineer',
    employeeId: 'E12345',
    dateOfJoin: new Date('2022-01-01'),
    phone: '123-456-7890',
    email: 'john.doe@example.com',
    birthday: new Date('1990-05-15'),
    address: '123 Main St, Cityville, State',
    gender: 'Male',
    reportsTo: 'Jane Manager',
  };

  const [education, setEducation] = useState(initialEducationData);
  const [experience, setExperience] = useState(initialExperienceData);
  const [bankInfo, setBankInfo] = useState(initialBankInfo);
  const [familyInfo, setFamilyInfo] = useState(initialFamilyInfoData);
  const [personalInfo, setPersonalInfo] = useState(initialPersonalInfoData);
  const [emergencyInfo, setEmergencyInfo] = useState(initialEmergencyInfoData);
  const [employeeInfo, setEmployeeInfo] = useState(initialEmployeeData);


  const handleEducationEdit = (editedEducation) => {
    // Handle logic to save edited education data
    // For example, you can make an API call to update the data on the server
    setEducation(editedEducation);
  };

  const handleExperienceEdit = (editedExperience) => {
    // Handle logic to save edited experience data
    // For example, you can make an API call to update the data on the server
    setExperience(editedExperience);
  };

  const handleBankInfoEdit = (editedBankInfo) => {
    // Handle logic to save edited bank information data
    // For example, you can make an API call to update the data on the server
    setBankInfo(editedBankInfo);
  };

  const handleFamilyInfoEdit = (editedFamilyInfo) => {
    // Handle logic to save edited familyInfo data
    // For example, you can make an API call to update the data on the server
    setFamilyInfo(editedFamilyInfo);
  };
  const handlePersonalInfoEdit = (editedPersonalInfo) => {
    // Handle logic to save edited personalInfo data
    // For example, you can make an API call to update the data on the server
    setPersonalInfo(editedPersonalInfo);
  };

  const handleEmergencyInfoEdit = (editedEmergencyInfo) => {
  setEmergencyInfo(editedEmergencyInfo)
  }

  const handleEmployeeEdit = (editedEmployeeInfo) => {
    // Handle logic to save edited employeeInfo data
    // For example, you can make an API call to update the data on the server
    setEmployeeInfo(editedEmployeeInfo);
  };
  

  return (
    <div className="container mt-5">
      <h2>Profile</h2>
      <EmployeeCard employeeInfo={employeeInfo} onEdit={handleEmployeeEdit} />
      <EducationCard education={education} onEdit={handleEducationEdit} />
      <ExperienceCard experience={experience} onEdit={handleExperienceEdit} />
      <BankInformationCard bankInfo={bankInfo} onEdit={handleBankInfoEdit} />
      <FamilyInformationCard
        familyInfo={familyInfo}
        onEdit={handleFamilyInfoEdit}
        onDelete={() => setFamilyInfo({})}
    />
     <PersonalInformationCard personalInfo={personalInfo} onEdit={handlePersonalInfoEdit} />
     <EmergencyCard emergencyInfo={emergencyInfo} onEdit={handleEmergencyInfoEdit} />
     
      {/* Add other profile information or components here */}
    </div>
  );
};

export default Profile;










