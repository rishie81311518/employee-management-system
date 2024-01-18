import React from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';

export default function ProfilePage() {
  return (
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
        <div className="d-flex justify-content-center"> {/* Align cards vertically */}
          <MDBRow>
            <MDBCol>
              {/* User Profile Card */}
              <MDBCard className="mb-4">
                <MDBCardBody className="text-center">
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: '150px' }}
                    fluid
                  />
                  <p className="text-muted mb-1">John Doe</p>
                  <p className="text-muted mb-4">Full Stack Developer</p>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            {/* Personal Information Card */}
            <MDBCol lg="8">
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <MDBListGroup>
                    <MDBListGroupItem>Passport No. 9876543210</MDBListGroupItem>
                    <MDBListGroupItem>Passport Exp Date. 9876543210</MDBListGroupItem>
                    <MDBListGroupItem>Tel 9876543210</MDBListGroupItem>
                    <MDBListGroupItem>Nationality Indian</MDBListGroupItem>
                    <MDBListGroupItem>Religion Christian</MDBListGroupItem>
                    <MDBListGroupItem>Marital status Married</MDBListGroupItem>
                    <MDBListGroupItem>Employment of spouse No</MDBListGroupItem>
                    <MDBListGroupItem>No. of children</MDBListGroupItem>
                  </MDBListGroup>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </div>
      </MDBContainer>
    </section>
  );
}






