// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card";
// import username from "../images/profilepic-2.jpg";

// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import "../css/scheduler.css";
// import { useState, useEffect } from "react";
// import axios from "axios";

// const SendDuty = () => {
//   return (
//     <>
//       <div className="SchedulePage">
//         <br />
//         <br />
//         <Container fluid>
//           <Row className="courseInfo">
//             <Col lg="1"></Col>
//             <Col lg="10">
//               <div className="schHeading">SEND DUTY</div>
//             </Col>
//             <Col lg="1"></Col>
//           </Row>{" "}
//           <br />
//           <br />
//           <Row className="courseInfo">
//             <Col lg="1"></Col>

//             <Col lg="10">
//               <div className="schHeading">ADD COURSE INFORMATION</div>
//               <br />
//               <br />

//               <Form>
//                 {/* ROW 1 */}
//                 <Container>
//                   <Row>
//                     <Col lg="6">
//                       <Form.Group className="mb-3" controlId="formBasicCkgName">
//                         <Form.Label>College Name</Form.Label>
//                         <Form.Select
//                           value={ClgDropdownValue}
//                           onChange={(e) => setClgDropdownValue(e.target.value)}
//                         >
//                           {listd1.map((num, index) => {
//                             return (
//                               <option key={index} value={num}>
//                                 {num}
//                               </option>
//                             );
//                           })}
//                         </Form.Select>
//                       </Form.Group>
//                     </Col>

//                     <Col lg="6">
//                       <Form.Group
//                         className="mb-3"
//                         controlId="formBasicPassword"
//                         inline
//                       >
//                         <Form.Label>Department</Form.Label>

//                         <Form.Select
//                           aria-label="Default select example"
//                           value={deptValue}
//                           onChange={(e) => setDeptValue(e.target.value)}
//                         >
//                           <option value="cs">CS</option>
//                           <option value="it">IT</option>
//                         </Form.Select>
//                       </Form.Group>
//                     </Col>
//                   </Row>

//                   <Row>
//                     <Col lg="6">
//                       <Form.Group
//                         className="mb-3"
//                         controlId="formBasicCourseName"
//                       >
//                         <Form.Label>Course Name</Form.Label>
//                         <Form.Select aria-label="Default select example">
//                           <option>Open this select menu</option>
//                           <option value="1">Programming Fundamentals</option>
//                           <option value="2">Object Oriented Programming</option>
//                           <option value="3">
//                             Data Structure and Algorithms
//                           </option>
//                         </Form.Select>
//                       </Form.Group>
//                     </Col>

//                     <Col lg="6">
//                       <Form.Group
//                         className="mb-3"
//                         controlId="formBasicCourseCode"
//                         inline
//                       >
//                         <Form.Label>Course Code</Form.Label>
//                         <Form.Select
//                           aria-label="Default select example"
//                           value={CrsDropdownValue}
//                         >
//                           {CrsDropdownValue.map((course, index) => {
//                             return (
//                               <option key={index} value={course}>
//                                 {course}
//                               </option>
//                             );
//                           })}
//                         </Form.Select>
//                       </Form.Group>
//                     </Col>
//                   </Row>

//                   <Row>
//                     <Col lg="6">
//                       <Form.Group
//                         className="mb-3"
//                         controlId="exampleForm.ControlInput1"
//                       >
//                         <Form.Label>Date</Form.Label>
//                         <Form.Control
//                           type="date"
//                           placeholder="name@example.com"
//                         />
//                       </Form.Group>
//                     </Col>
//                     <Col lg="6">
//                       <Form.Group
//                         className="mb-3"
//                         controlId="exampleForm.ControlInput1"
//                       >
//                         <Form.Label>Time</Form.Label>
//                         <Form.Control
//                           type="time"
//                           placeholder="name@example.com"
//                         />
//                       </Form.Group>
//                     </Col>
//                   </Row>

//                   <br />
//                   <br />
//                   <div className="schHeading">ADD TEACHER INFORMATION</div>
//                   <br />
//                   <br />

//                   <Row>
//                     <Col lg="8">
//                       <Form.Group className="mb-3" controlId="formBasicEmail">
//                         <Form.Label>Teacher Name</Form.Label>
//                         <Form.Select aria-label="Default select example">
//                           <option>Open this select menu</option>
//                           <option value="1">Teacher-1</option>
//                           <option value="2">Teacher-2</option>
//                           <option value="3">Teacher-3</option>
//                         </Form.Select>
//                       </Form.Group>
//                     </Col>

//                     <Col lg="4">
//                       <br />
//                       <Button className="schButton">View Profile</Button>{" "}
//                       <Button className="schButton">View Duties</Button>{" "}
//                     </Col>
//                   </Row>

//                   <Row>
//                     <Col lg="6">
//                       <Form.Group className="mb-3" controlId="formBasicEmail">
//                         <Form.Label>Teacher Email address</Form.Label>
//                         <Form.Control type="email" placeholder="Enter email" />
//                         <Form.Text className="text-muted">
//                           We'll never share your email with anyone else.
//                         </Form.Text>
//                       </Form.Group>
//                     </Col>
//                     <Col lg="6">
//                       <br />
//                       <Button className="schButton">
//                         View Contact Details
//                       </Button>{" "}
//                     </Col>
//                   </Row>

//                   <Row>
//                     <Col lg="12">
//                       <Form.Group
//                         className="mb-3"
//                         controlId="exampleForm.ControlTextarea1"
//                       >
//                         <Form.Label>More Info</Form.Label>
//                         <Form.Control as="textarea" rows={3} />
//                       </Form.Group>
//                     </Col>
//                   </Row>

//                   <Row>
//                     <Col>
//                       <Form.Group
//                         className="mb-3"
//                         controlId="formBasicCheckbox"
//                       >
//                         <Form.Check
//                           type="checkbox"
//                           label="Also Notify Through Email"
//                         />
//                       </Form.Group>
//                     </Col>
//                   </Row>

//                   <Row>
//                     <Col lg="10"></Col>
//                     <Col lg="2">
//                       <Button className="schButton" type="submit">
//                         Send Request
//                       </Button>
//                     </Col>
//                   </Row>
//                 </Container>
//               </Form>

//               <br />
//               <br />
//             </Col>
//             <Col lg="1"></Col>
//           </Row>
//           <br />
//           <br />
//         </Container>
//       </div>
//     </>
//   );
// };

// export default SendDuty;
