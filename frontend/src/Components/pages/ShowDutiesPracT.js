import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Pagination from "./Pagination";
import Home from "./Home";
import ShowDutyDetail from "./ShowDutyDetail";
import "../css/ShowDutiesPracT.css";
import Login from "./Login";
import NavBar from "./NavBar";
export default function ShowDutiesPracT() {
  const navigate = useNavigate();
  const [duties, setDuties] = useState([]);
  const [values, setSearchValue] = useState("");
  const [list1, setList1] = useState([]);
  const [filteredList, setFilteredList] = useState(list1);
  const [currentItem, setCurrentItem] = useState(null);
  const [submitDetailValue, setSubmitDetailValue] = useState(false);
  const [query, setQuery] = useState("");
  const accessToken = localStorage.getItem("access_token");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/getAllPraticalList")
      .then((response) => response.json())
      .then((data) => {
        setList1(data);
        setFilteredList(data);
      })
      .then(() => console.log("data dtt--", list1));
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredList.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredList.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleChange = (event) => {
    const searchQuery = event.target.value;
    setQuery(searchQuery);
    const filteredResults = list1.filter((objList) =>
      Object.keys(objList).some((key) =>
        objList[key]
          .toString()
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      )
    );
    setFilteredList(filteredResults);
    setCurrentPage(1); // Reset page to 1 when filtering
  };

  const handleOnClickTableDetail = (event, item) => {
    console.log("clllll");
    console.log("Item is : ", item);
    setSubmitDetailValue(true);
    setCurrentItem(item);
  };

  if (submitDetailValue === true) {
    return <ShowDutyDetail data={currentItem} />;
  }

  if (!accessToken) {
    return <Login />; // Render the Login component if access token doesn't exist
  }

  return (
    <>
      <NavBar />
      {currentItem ? (
        <ShowDutyDetail data={currentItem} />
      ) : (
        <div className="container">
          <div className="d-flex flex-row-reverse bd-highlight">
            <p>
              <div className="searchBar">
                <input
                  id="searchBarInput"
                  type="text"
                  placeholder="Enter keywords..."
                  value={query}
                  onChange={handleChange}
                  size="50"
                />
              </div>
            </p>
          </div>
          <div className="d-flex flex-row bd-highlight">
            <p className="form-inline"></p>
          </div>
          <div>
            <table className="table">
              {/* Table header */}
              <thead>
                <tr className="headingTable">
                  <td>Course Code</td>
                  <td>Course Name</td>
                  <td>College</td>
                  <td>Department</td>
                  <td>Batch</td>
                  <td>View Detail</td>
                </tr>
              </thead>
              {/* Table body */}
              <tbody>
                {currentItems.length > 0 ? (
                  currentItems.map((item) => (
                    <tr style={{ border: "1px" }} key={item[0]} id={item[0]}>
                      <td className="tableText">{item[3]}</td>
                      <td className="tableText">{item[4]}</td>
                      <td className="tableText">{item[1]}</td>
                      <td className="tableText">{item[2]}</td>
                      <td className="tableText">{item[5]}</td>
                      <td>
                        <button
                          className="showDutyTableBtn"
                          id="submitTableBtn"
                          onClick={(e) => handleOnClickTableDetail(e, item)}
                        >
                          Details
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6">Loading...</td>
                  </tr>
                )}
              </tbody>
            </table>
            <Pagination
              pageCount={Math.ceil(list1.length / itemsPerPage)} // Calculate total number of pages
              handlePageChange={handlePageChange} // Pass the handlePageChange function as a prop
            />
          </div>
        </div>
      )}
      <div
        className="modal fade"
        id="dutyModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Duty Detail
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body"></div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-dark"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
