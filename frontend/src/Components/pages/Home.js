import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";

import NavBar from "./NavBar";
import GenerateDuties from "./GenerateDuties";
import Login from "./Login";
import "../css/home.css";
import svgimg from "../images/sidepanel.png";
// export const Banner = () => {
//   return <div>Some banner stuff</div>;
// };

const UserData = () => {
  const [data, setData] = useState([]);
  const [myData, setmyData] = useState([]);
  const accessToken = localStorage.getItem("access_token");

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
      <NavBar />
      <div style={{ display: "flex" }}>
        {/* <div ></div> */}
        <div>
          <SideBar></SideBar>
        </div>
        <div style={{ flex: "1", margin: "14px" }} className="grid-container">
          {/* <div className="card"> */}
          <div class="card l-bg-cherry" style={{ height: "142px" }}>
            <div class="card-statistic-3 p-3">
              <div class="card-icon card-icon-large">
                <i class="fas fa-users"></i>
              </div>
              <div class="mb-4" style={{ float: "left" }}>
                <h5 class="card-title mb-0">All Examiner</h5>
                <h1>1236</h1>
              </div>
            </div>
          </div>
          {/* </div> */}
          {/* <div className="card"> */}
          <div class="card l-bg-orange-dark" style={{ height: "142px" }}>
            <div class="card-statistic-3 p-3">
              <div class="card-icon card-icon-large">
                <i class="fas fa-users"></i>
              </div>
              <div class="mb-4" style={{ float: "left" }}>
                <h5 class="card-title mb-0">All Examiner</h5>
                <h1>1236</h1>
              </div>
            </div>
          </div>
          {/* </div> */}
          {/* <div className="card"> */}
          <div class="card  l-bg-blue-dark" style={{ height: "142px" }}>
            <div class="card-statistic-3 p-3">
              <div class="card-icon card-icon-large">
                <i class="fas fa-users"></i>
              </div>
              <div class="mb-4" style={{ float: "left" }}>
                <h5 class="card-title mb-0">All Examiner</h5>
                <h1>1236</h1>
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

// export default Home
