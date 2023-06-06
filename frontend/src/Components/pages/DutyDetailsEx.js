import React, { useState, useEffect } from "react";

import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import ShowDutiesEx from "./ShowDutiesEx";
import Footer from "./Footer";
import userpic from "../images/avatar.svg";
import Login from "./Login";
import NavBar from "./NavBar";
export default function DutyDetailsEx() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [duty, setDuty] = useState([]);
  const [backBtnValue, setBackBtnValue] = useState(false);
  const accessToken = localStorage.getItem("access_token");

  useEffect(() => {
    const url = "http://127.0.0.1:5000/getDutyDetail";
    // List.push(selectedExaminerName,Selecteddepartment,SelectedRoadMapYear,selectedOption)
    // setId(state.data.responseData)
    console.log(state.data.responseData);
    // console.log(Id)
    axios
      .post(url, { Id: state.data.responseData })
      .then((res) => {
        const resData = res.data;
        setDuty(resData);
      })
      .catch((err) => alert(err + "  OOPS! BAD REQUEST CC"));
  }, []);
  const handleBackBtn = (event) => {
    console.log("back btn clicked");
    setBackBtnValue(true);
  };

  if (backBtnValue === true) {
    console.log("going back show duties");
    return <ShowDutiesEx />;
  }

  if (!accessToken) {
    return <Login />; // Render the Login component if access token doesn't exist
  }

  return (
    <>
      <NavBar />
      {console.log("duties ==> ", duty)}
      <div className="ntfPage">{duty.map((item) => console.log(item))}</div>
      <div className="showDutyDetailPrac">
        <div className="mainHeading">
          <h1>Duty Information</h1>
        </div>
        <div className="mainDiv">
          <div className="childOne">
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      <b>Duty Detail</b>
                    </h5>
                    <br />
                    <h5>
                      <b>Duty Id: </b>
                      {state.data.responseData}
                    </h5>
                    <h5>
                      <b>Name: </b>
                      {duty[0]}
                    </h5>
                    <h5>
                      <b>Email </b>
                      {duty[3]}
                    </h5>
                    <h5>
                      <b>Institute: </b>
                      {duty[4]}
                    </h5>
                    <h5>
                      <b>Semester: </b>
                      {duty[5]}
                    </h5>
                    <h5>
                      <b>Course: </b>
                      {duty[6]}
                    </h5>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="childTwo">
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={userpic}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                {/* <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">
                    <b>Teacher Detail</b>
                  </h5>
                  <h5>
                    <b>Name:</b>{" "}
                    {teacherStatus && teacherDetail.examiner !== null
                      ? teacherDetail.examiner[1]
                      : "Not Assigned"}
                  </h5>
                  <h5>
                    <b>ID</b>:{" "}
                    {teacherStatus && teacherDetail.examiner !== null
                      ? teacherDetail.examiner[0]
                      : "Not Assigned"}
                  </h5>
                  <h5>
                    <b>Email:</b>{" "}
                    {teacherStatus && teacherDetail.examiner !== null
                      ? teacherDetail.examiner[2]
                      : "Not Assigned"}
                  </h5>
                  <h5>
                    <b>Institution:</b>{" "}
                    {teacherStatus && teacherDetail.examiner !== null
                      ? teacherDetail.examiner[3]
                      : "Not Assigned"}
                  </h5>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="backButton">
          <button id="backBtn" onClick={handleBackBtn}>
            Back
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
// onClick= {uploadDuty}
