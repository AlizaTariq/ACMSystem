// import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import LineGraph from "./LineGraph";

import { useNavigate, createSearchParams } from "react-router-dom";
import NavBar from "./NavBar";
import GenerateDuties from "./GenerateDuties";
import Login from "./Login";
import "../css/home.css";
import svgimg from "../images/sidepanel.png";
import Pagination from "./Pagination";
import axios from "axios";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import React, { useEffect, useState, useRef } from "react";

const UserData = () => {
  const accessToken = localStorage.getItem("access_token");
  const navigate = useNavigate();
  const [values, setSearchValue] = useState("");

  const [rankedExmList, setRankedExmList] = useState([]);
  const [collegesList, setCollegesList] = useState([]);
  const [countDetail, setCountDetail] = useState([]);

  const [open, setOpen] = useState(false);
  const [dutyStatus, setDutyStatus] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3); // Set the number of items to display per page
  // Logic to calculate the current items to display based on current page and itemsPerPage
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = rankedExmList.slice(indexOfFirstItem, indexOfLastItem);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    fetch("http://127.0.0.1:5000/getRankedExmList")
      .then((response) => response.json())
      .then((data) => {
        setRankedExmList(data);
      })
      .then((data1) => console.log("Ranked Exm List ", rankedExmList));
  }, []);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/getAffiliatedColleges")
      .then((response) => response.json())
      .then((data) => {
        setCollegesList(data);
      })
      .then((data1) => console.log("Affiliated College List ", collegesList));
  }, []);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/getCountDetail")
      .then((response) => response.json())
      .then((data) => {
        setCountDetail(data);
      })
      .then((data1) => console.log("getCountDetail List ", rankedExmList));
  }, []);

  const handleButtonClick = () => {
    fetch("/generatePracDuties")
      .then((response) => response.json())
      .then((data) => {
        const { success } = data;
        setDutyStatus(
          success ? "Duties generated successfully." : "Duties not generated."
        );
        setOpen(true);
      })
      .catch((error) => console.error("Error:", error));
  };

  const handleClose = () => {
    setOpen(false);
    setDutyStatus("");
  };

  if (!accessToken) {
    console.log("Logouttt");
    return <Login />; // Render the Login component if access token doesn't exist
  }

  return (
    <>
      {/* <ChartComponent /> */}
      <div style={{ display: "flex" }}>
        <div>
          <SideBar></SideBar>
        </div>

        <div style={{ flex: "1" }}>
          <NavBar />

          {/* <div>
            <h1>Line Graph Example</h1>
            <LineGraph />
          </div> */}

          <div className="grid-container" style={{ flex: "1", margin: "14px" }}>
            <div className="card l-bg-cherry" style={{ height: "142px" }}>
              <div className="card-statistic-3 p-3">
                <div className="card-icon card-icon-large">
                  <i className="fas fa-users"></i>
                </div>
                <div className="mb-4" style={{ float: "left" }}>
                  <h5 className="card-title mb-0">
                    Total practical duty : {countDetail[0]}
                    <br />
                    Prac Not assigned : {countDetail[1]}
                    <br />
                    Prac Pending : {countDetail[2]}
                    <br />
                    Prac Accepted :{countDetail[3]}
                    <br />
                    Prac Rejected : {countDetail[4]}
                    <br />
                  </h5>
                  <h1>1236</h1>
                </div>
              </div>
            </div>

            <div className="card l-bg-orange-dark" style={{ height: "142px" }}>
              <div className="card-statistic-3 p-3">
                <div className="card-icon card-icon-large">
                  <i className="fas fa-book-reader"></i>
                </div>
                <div className="mb-4" style={{ float: "left" }}>
                  <h5 className="card-title mb-0">
                    Total Exam Duty : {countDetail[5]}
                    <br />
                    Total Examiners : {countDetail[6]}
                    <br />
                    College Count : {countDetail[7]}
                    <br />
                    Departments Count : {countDetail[8]}
                    <br />
                  </h5>
                  <h1>1236</h1>
                </div>
              </div>
            </div>

            <div className="card  dutybtndiv l-bg-blue-dark">
              <Button
                variant="contained"
                id="genDutyBtn"
                onClick={handleButtonClick}
              >
                Generate Duties
              </Button>
              <div className="card-statistic-3 p-3">
                <div className="card-icon card-icon-large">
                  <i className="fas fa-users"></i>
                </div>

                <div className="mb-0">
                  <center>
                    <h1>Generate Practical Duties</h1>
                  </center>
                  <h5 className="card-title mb-0">
                    <div>
                      <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Duty Status</DialogTitle>
                        <DialogContent>{dutyStatus}</DialogContent>
                        <DialogActions>
                          <Button onClick={handleClose}>Close</Button>
                        </DialogActions>
                      </Dialog>
                    </div>
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <div
            className="grid-container grid-containers"
            style={{ flex: "1", margin: "14px" }}
          >
            <div
              className="card  l-bg-blue-dark"
              style={{ height: "280px", margin: "14px" }}
            >
              <div className="card-statistic-3 p-3">
                <table className="table">
                  {/* Table header */}
                  <thead>
                    <tr style={{ color: "white" }}>
                      <td>College</td>
                      <td>Department</td>
                      <td>Batch</td>
                    </tr>
                  </thead>
                  <tbody>
                    {currentItems
                      ? currentItems.map((item) => (
                          <tr
                            style={{ border: "1px" }}
                            key={item[0]}
                            id={item[0]}
                          >
                            <td className="tableText">{item[2]}</td>
                            <td className="tableText">{item[3]}</td>
                            <td className="tableText">{item[4]}</td>
                          </tr>
                        ))
                      : "Loading..."}
                  </tbody>
                </table>
                <Pagination
                  pageCount={Math.ceil(rankedExmList.length / itemsPerPage)} // Calculate total number of pages
                  handlePageChange={handlePageChange} // Pass the handlePageChange function as a prop
                />
              </div>
            </div>
            <div
              className="card  l-bg-blue-dark"
              style={{ height: "280px", margin: "14px " }}
            >
              <div className="card-statistic-3 p-3">
                <table className="table">
                  {/* Table header */}
                  <thead>
                    <tr style={{ color: "white" }}>
                      <td>Top 5 Ranked Examiner</td>
                    </tr>
                  </thead>
                  <tbody>
                    {currentItems
                      ? currentItems.map((item) => (
                          <tr
                            style={{ border: "1px" }}
                            key={item[0]}
                            id={item[0]}
                          >
                            <td className="tableText">{item[3]}</td>
                          </tr>
                        ))
                      : "Loading..."}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserData;
