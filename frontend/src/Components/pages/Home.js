// import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import { useNavigate, createSearchParams } from "react-router-dom";
import NavBar from "./NavBar";
import GenerateDuties from "./GenerateDuties";
import Login from "./Login";
import "../css/home.css";
import svgimg from "../images/sidepanel.png";
import Pagination from "./Pagination";
import axios from "axios";
// export const Banner = () => {
//   return <div>Some banner stuff</div>;
// };
// import ChartComponent from './ChartComponent';
import React, { useEffect, useState } from "react";
const UserData = () => {
  const [data, setData] = useState([]);
  const [myData, setmyData] = useState([]);
  const accessToken = localStorage.getItem("access_token");
  const navigate = useNavigate();
  const [duties, setDuties] = useState([]);
  const [values, setSearchValue] = useState("");
   const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3); // Set the number of items to display per page
  // Logic to calculate the current items to display based on current page and itemsPerPage
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = duties.slice(indexOfFirstItem, indexOfLastItem);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  // const accessToken = localStorage.getItem("access_token");

  //not default export to expot it use {Banner}

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch("http://localhost:3000/userdata");
  //     const json = await response.json();
  //     setData(json);
  //   }
  //   fetchData();
  // }, []);
  useEffect(() => {
    const retrieve = async () => {
      const response = await axios.get(
        "http://127.0.0.1:5000/getNotAssignedDuties"
      );
      setDuties(response.data);
    };
    retrieve();
  }, []);

  useEffect(() => {
    fetch("/userdata")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        console.log("data = ", json);
      });
  }, []);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "John",
        password: "ABC123",
      }),
    });
  }, []);

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
          <div className="grid-container" style={{ flex: "1", margin: "14px" }}>
            <div className="card l-bg-cherry" style={{ height: "142px" }}>
              <div className="card-statistic-3 p-3">
                <div className="card-icon card-icon-large">
                  <i className="fas fa-users"></i>
                </div>
                <div className="mb-4" style={{ float: "left" }}>
                  <h5 className="card-title mb-0">All Examiner</h5>
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
                  <h5 className="card-title mb-0">All Examiner</h5>
                  <h1>1236</h1>
                </div>
              </div>
            </div>
            <div className="card  l-bg-blue-dark" style={{ height: "142px" }}>
              <div className="card-statistic-3 p-3">
                <div className="card-icon card-icon-large">
                  <i className="fas fa-users"></i>
                </div>
                <div className="mb-4" style={{ float: "left" }}>
                  <h5 className="card-title mb-0">All Examiner</h5>
                  <h1>1236</h1>
                </div>
              </div>
            </div>
           
          </div>
     
          <div className="grid-container grid-containers" style={{  flex: "1", margin: "14px"}}>
             <div className="card  l-bg-blue-dark" style={{ height: "280px", margin: "14px"   }}>
              <div className="card-statistic-3 p-3">
              <table className="table">
              {/* Table header */}
              <thead>
                <tr style={{ color:"white" }}>
                  <td>College</td>
                  <td>Department</td>
                  <td>Batch</td>
                </tr>
              </thead>
              <tbody>
              {currentItems
                ? currentItems
                    .map((item) => (
                      <tr
                        style={{ border: "1px" }}
                        key={item[0]}
                        id={item[0]}
                          
                      >
                        <td className="tableText">{item[3]}</td>
                        <td className="tableText">{item[4]}</td>
                        <td className="tableText">{item[5]}</td>
                        
                        
                      </tr>
                    ))
                : "Loading..."}
            </tbody>

              </table>
              <Pagination
            pageCount={Math.ceil(duties.length / itemsPerPage)} // Calculate total number of pages
            handlePageChange={handlePageChange} // Pass the handlePageChange function as a prop
          />
              </div>
            </div>
            <div className="card  l-bg-blue-dark" style={{ height: "280px", margin: "14px "  }}>
              <div className="card-statistic-3 p-3">
              <table className="table">
              {/* Table header */}
              <thead>
                <tr style={{ color:"white" }}>
                  <td>Top 5 Ranked Examiner</td>
                </tr>
              </thead>
              <tbody>
              {currentItems
                ? currentItems
                    .map((item) => (
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

// const Home = () => {
//   return (
//     <div>
//       <h1>Home</h1>
//       <div>Have some content</div>
//     </div>
//   );
// };

// export default Home;