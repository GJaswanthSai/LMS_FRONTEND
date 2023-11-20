import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../../Context/AuthContext";

function Profile(){

    const [memberDetails, setMemberDetails] = useState(null);
    const API_URL = "https://lms-backend-gts2.onrender.com/";
  const { user } = useContext(AuthContext);
    useEffect(() => {
        const getMemberDetails = async () => {
          try {
            const response = await axios.get(
              API_URL + "api/users/getuser/" + user._id
            );
            setMemberDetails(response.data);
          } catch (err) {
            console.log("Error in fetching the member details");
          }
        };
        getMemberDetails();
      }, [API_URL, user]);
      





    return(
        <div>
          <br/><br/>
          <p className="member-dashboard-heading"><b>Welcome, {memberDetails?.userFullName}</b></p>
          <p className="member-dashboard-heading">Profile</p>
        <div className="member-profile-content" id="profile@member">
            <div className="user-details-topbar">
              <img
                className="user-profileimage"
                src="./assets/images/Profile.png"
                alt=""
              ></img>
              <div className="user-info">
                <p className="user-name">{memberDetails?.userFullName}</p>
                <p className="user-id">
                  {memberDetails?.userType === "Student"
                    ? memberDetails?.admissionId
                    : memberDetails?.employeeId}
                </p>
                <p className="user-email">{memberDetails?.email}</p>
                <p className="user-phone">{memberDetails?.mobileNumber}</p>
              </div>
            </div>
            <div className="user-details-specific">
              <div className="specific-left">
                <div className="specific-left-top">
                  <p className="specific-left-topic">
                    <span style={{ fontSize: "20px" }}>
                      <b>Age</b>
                    </span>
                    <span style={{ fontSize: "18px" }}>
                      {memberDetails?.age}
                    </span>
                  </p>
                  <p className="specific-left-topic">
                    <span style={{ fontSize: "20px" }}>
                      <b>Gender</b>
                    </span>
                    <span style={{ fontSize: "18px" }}>
                      {memberDetails?.gender}
                    </span>
                  </p>
                </div>
                <br/>
                <div className="specific-left-bottom">
                  <p className="specific-left-topic">
                    <span style={{ fontSize: "20px" }}>
                      <b>DOB</b>
                    </span>
                    <span style={{ fontSize: "18px" }}>
                      {memberDetails?.dob}
                    </span>
                  </p>
                  <p className="specific-left-topic">
                    <span style={{ fontSize: "20px" }}>
                      <b>Address</b>
                    </span>
                    <span style={{ fontSize: "18px" }}>
                      {memberDetails?.address}
                    </span>
                  </p>
                </div>
              </div>
              <div className="specific-right">
                <br/>
                <div className="specific-right-bottom">
                  <p className="specific-right-topic" style={{fontSize:"18px"}}>
                    <b>Points</b>
                  </p>
                  <p
                    style={{
                      fontSize: "20px",
                      fontWeight: "500",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "15px",
                    }}
                  >
                    {memberDetails?.points}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          </div>
    )
}

export default Profile;