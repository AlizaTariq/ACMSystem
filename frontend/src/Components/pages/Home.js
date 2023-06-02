import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";

import NavBar from "./NavBar";
import GenerateDuties from "./GenerateDuties";
import Login from "./Login";
import "../css/home.css";
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
    <div>
      {/* <SideBar /> */}
      <NavBar />
      <div>
        <div className="grid-container">
          <div className="card">
            <div class="card l-bg-cherry">
              <div class="card-statistic-3 p-4">
                <div class="mb-4">
                  <h5 class="card-title mb-0">All Examiner</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div class="card l-bg-blue-dark">
              <div class="card-statistic-3 p-4">
                <div class="mb-4">
                  <h5 class="card-title mb-0">Carriculum</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div class="card l-bg-green-dark">
              <div class="card-statistic-3 p-4">
                <div class="mb-4">
                  <h5 class="card-title mb-0">Duties</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div class="card l-bg-orange-dark">
              <div class="card-statistic-3 p-4">
                <div class="mb-4">
                  <h5 class="card-title mb-0">College Review</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div class="card l-bg-orange-dark">
              <div class="card-statistic-3 p-4">
                <div class="mb-4">
                  <h5 class="card-title mb-0">Teacher Review</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div class="card l-bg-orange-dark">
              <div class="card-statistic-3 p-4">
                <div class="mb-4">
                  <h5 class="card-title mb-0">College Review</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
