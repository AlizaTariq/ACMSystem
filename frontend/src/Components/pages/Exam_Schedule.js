import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../css/scheduler.css";
import Login from "./Login";
import NavBar from "./NavBar";
// import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import SendExamDuty from "./SendExamDuty";
import axios from "axios";
import Footer from "./Footer";
const Exam_Schedule = () => {
  const navigate = useNavigate();
  const [textValue, setTextValue] = useState("");
  const [SelectedRoadMapYear, setSelectedRoadMapYear] = useState("");
  const [Selecteddepartment, setSelecteddepartment] = useState("");
  const [courseValue, setCourseValue] = useState("");
  const [selectedExaminerName, setExaminerName] = useState("");

  const [RoadMapYear, setRoadMapYear] = useState([]);
  const [department, setDepartment] = useState([]);
  const [SelectedExamId, setSelectedExamId] = useState([]);
  const [AllCourses, setAllCourses] = useState([]);

  const [dutyData, setDutyData] = useState([]);
  const [submitValue, setSubmitValue] = useState(false);
  const [disableBtn, setDisableBtn] = useState(false);
  const accessToken = localStorage.getItem("access_token");

  useEffect(() => {
    console.log("True false");
    const retrieve = async () => {
      const response = await axios.get("http://127.0.0.1:5000/getAllData");
      setDepartment(response.data[1]);
      setRoadMapYear(response.data[0]);
      const firstyr = response.data[0][0][0];
      const firstdept = response.data[1][0][0];
      setSelectedRoadMapYear(firstyr);
      setSelecteddepartment(firstdept);
    };
    retrieve();
  }, []);

  function handleSelectChange(selectedValue) {
    setCourseValue(selectedValue);
    const retrieve = async () => {
      const response = await axios.post(
        "http://127.0.0.1:5000/getAllExaminerName",
        { courseName: { selectedValue } }
      );
      setSelectedExamId(response.data);
      setExaminerName(SelectedExamId[0]);
    };
    retrieve();
  }

  useEffect(() => {
    const retrieve = async () => {
      const postData = {
        courseName: courseValue,
      };

      try {
        const response = await axios.post(
          "http://127.0.0.1:5000/getAllExaminerName",
          postData
        );
        const data = response.data;

        setSelectedExamId(data);
        setExaminerName(data[0]);

        if (data == null || data.length === 0) {
          setDisableBtn(true);
          setTextValue("No Examiner is Available!!");
        } else {
          setDisableBtn(false);
          setTextValue("");
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    retrieve();
  }, [courseValue]);

  useEffect(() => {
    const retrieve = async () => {
      const postData = {
        department: Selecteddepartment,
        roadMapYear: SelectedRoadMapYear,
      };

      try {
        const response = await axios.post(
          "http://127.0.0.1:5000/getAllCourses",
          postData
        );
        const data = response.data;

        setAllCourses(data);
        setCourseValue(data[0]);

        if (data == null || data.length === 0) {
          setDisableBtn(true);
          setTextValue("No Duties to Assign!!");
        } else {
          setDisableBtn(false);
          setTextValue("");
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    retrieve();
  }, [SelectedRoadMapYear, Selecteddepartment]);

  const handleSubmitInfo = (event) => {
    event.preventDefault();
    const url = "http://127.0.0.1:5000/createDuty";
    var List = [];
    console.log(selectedExaminerName);
    List.push(
      selectedExaminerName,
      Selecteddepartment,
      SelectedRoadMapYear,
      courseValue
    );
    console.log(List);
    axios
      .post(url, List)
      .then((res) => {
        const responseData = res.data;
        setDutyData(responseData);
        setSubmitValue(true);
        navigate("/CourseCard", { state: { data: { responseData } } });
      })
      .catch((err) => alert(err + " OOPS! BAD REQUEST"));
    // fetch("http://localhost:3000/getCrsInfo", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     RoadMapYear: RoadMapYear,
    //     department: department,
    //     courseValue: courseValue,
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((data1) => {
    //     if (data1.success) {
    //       setSubmitValue(true);
    //       // setClgCrsData(data1.data);
    //     }
    //   })
    //   .then((data1) => console.log(data1));s
  };

  //   if (submitValue == true) {
  //     return  navigate('/SendExamDuty', { state: {data:{dutyData}}});
  //   }

  if (!accessToken) {
    return <Login />; // Render the Login component if access token doesn't exist
  }

  return (
    <>
      <NavBar />
      <div className="SchedulePage">
        <br />
        <br />
        <Container fluid>
          <Row className="courseInfo">
            <Col lg="1"></Col>
            <Col lg="10">
              <div className="schHeading">SEND REQUEST</div>
            </Col>
            <Col lg="1"></Col>
          </Row>{" "}
          <br />
          <br />
          <Row className="courseInfo">
            <Col lg="1"></Col>

            <Col lg="10">
              <h3>{textValue}</h3>
              <div className="schHeading">ADD INFORMATION</div>
              <br />
              <br />

              <Form onSubmit={handleSubmitInfo}>
                {/* ROW 1 */}
                <Container>
                  <Row>
                    <Col lg="6">
                      <Form.Group className="mb-3" controlId="formBasicCkgName">
                        <Form.Label>Roadmap Year</Form.Label>
                        <Form.Select
                          value={SelectedRoadMapYear}
                          name="RoadMapYear"
                          onChange={(event) =>
                            setSelectedRoadMapYear(event.target.value)
                          }
                        >
                          {RoadMapYear.map((num, index) => {
                            return (
                              <option key={index} value={num}>
                                {num}
                              </option>
                            );
                          })}
                        </Form.Select>
                      </Form.Group>
                    </Col>

                    <Col lg="6">
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                        inline
                      >
                        <Form.Label>Department</Form.Label>

                        <Form.Select
                          aria-label="Default select example"
                          value={Selecteddepartment}
                          name="department"
                          onChange={(event) =>
                            setSelecteddepartment(event.target.value)
                          }
                        >
                          {department.map((num, index) => {
                            return (
                              <option key={index} value={num}>
                                {num}
                              </option>
                            );
                          })}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  {AllCourses.length > 0 ? (
                    <Row>
                      <Col lg="6">
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCourseCode"
                          inline
                        >
                          <Form.Label>Course Code</Form.Label>
                          <Form.Select
                            aria-label="Default select example"
                            value={courseValue}
                            name="courseValue"
                            onChange={(event) =>
                              setCourseValue(event.target.value)
                            }
                          >
                            {AllCourses.map((course, index) => {
                              return (
                                <option key={index} value={course}>
                                  {course}
                                </option>
                              );
                            })}
                          </Form.Select>
                        </Form.Group>
                      </Col>

                      {SelectedExamId.length > 0 ? (
                        <Col lg="6">
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicCkgName"
                          >
                            <Form.Label>Examiner</Form.Label>
                            <Form.Select
                              value={selectedExaminerName}
                              name="Examiner"
                              onChange={(event) =>
                                setExaminerName(event.target.value)
                              }
                            >
                              {SelectedExamId.map((num, index) => {
                                return (
                                  <option key={index} value={num}>
                                    {num}
                                  </option>
                                );
                              })}
                            </Form.Select>
                          </Form.Group>
                        </Col>
                      ) : null}
                    </Row>
                  ) : null}
                  <Row>
                    <Col lg="10"></Col>
                    <Col lg="2">
                      <Button
                        className="schButton"
                        type="Submit"
                        value="Submit"
                        disabled={disableBtn}
                      >
                        NEXT
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </Form>

              <br />
              <br />
            </Col>
            <Col lg="1"></Col>
          </Row>
          <br />
          <br />
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Exam_Schedule;
