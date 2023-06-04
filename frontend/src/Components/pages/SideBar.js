import React from "react";
import { title, setTitle } from "react";

import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

//import "./SendingRequest.css";

import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { FaStar } from "react-icons/fa";
import Login from "./Login";
import NavBar from "./NavBar";
const colors = {
  orange: "FF8C00",
  grey: "#a9a9a9",
};

const styles = {
  container: {
    display: "block8",
    fexDirection: "column",
    alignItems: "center",
  },
};
const SideBar = () => {
  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = useState(0);

  const [hoverValue, setHoverValue] = useState(undefined);

  const handleClick = (value) => {
    setCurrentValue(value);
  };
  const handleMouseOver = (value) => {
    setHoverValue(value);
  };
  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  const [isOpen, setIsOpen] = React.useState(false);
  const [timer, setTimer] = React.useState(0);
  const [startTime, setStartTime] = React.useState(0);
  const [endTime, setEndTime] = React.useState(0);

  const showModal = () => {
    setIsOpen(true);
    setTitle("Modal Ready");
    document.body.style.backgroundColor = "white";
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  const startTimer = () => {
    setStartTime(Date.now());
  };

  const modalLoaded = () => {
    setEndTime(Date.now());
  };

  const onExit = () => {
    setTitle("Goodbye 😀");
  };

  const onExited = () => {
    document.body.style.backgroundColor = "green";
  };

  return (
    <div
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            Admin Portal
          </a>
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <a href="/" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </a>
            <a href="/TableOfCariculum" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="table">Carriculum</CDBSidebarMenuItem>
            </a>
            {/* <a href="/profile" activeclassname="activeClicked">
                      <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
                    </a> */}
            <a href="/ShowDuties" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="paste">Duties</CDBSidebarMenuItem>
            </a>

            <a href="/PracCollegeReview" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="paste">
                College Reviews
              </CDBSidebarMenuItem>
            </a>
            <a href="/PracTeacherFeedback" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="paste">
                Teacher Reviews
              </CDBSidebarMenuItem>
            </a>

            <a activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="paste">
                <button onClick={showModal}>Teacher Review Form</button>
                <Modal
                  show={isOpen}
                  onHide={hideModal}
                  onEnter={startTimer}
                  onEntered={modalLoaded}
                >
                  <Modal.Header>
                    <Modal.Title>Teacher Review</Modal.Title>
                  </Modal.Header>
                  {/* <Modal.Body>{endTime - startTime} ms</Modal.Body> */}
                  <Modal.Body>
                    <Container fluid>
                      <Row className="courseInfo">
                        <Col lg="1"></Col>
                        <Col lg="10">
                          <Form>
                            <Container>
                              <div style={styles.container}>
                                <div>
                                  <label>
                                    <b>Rate your Overall Experience </b>
                                  </label>
                                  <br></br>
                                </div>
                                <div style={styles.stars}>
                                  {stars.map((_, index) => {
                                    return (
                                      <FaStar
                                        key={index}
                                        size={24}
                                        stylw={{
                                          marginRight: 10,
                                          cursor: "pointer",
                                        }}
                                        color={
                                          (hoverValue || currentValue) > index
                                            ? colors.orange
                                            : colors.grey
                                        }
                                        onClick={() => handleClick(index + 1)}
                                        onMouseOver={() =>
                                          handleMouseOver(index + 1)
                                        }
                                        onMouseLeave={handleMouseLeave}
                                      />
                                    );
                                  })}
                                </div>
                              </div>

                              <Row>
                                <Col lg="6"></Col>
                                <br></br>
                              </Row>
                              <Row>
                                <br></br>
                                <label>
                                  <b>Teacher's Attitude </b>
                                </label>
                                <br></br>
                                <Col lg="3">
                                  <div class="form-check form-check-inline">
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      name="inlineRadioOptions"
                                      id="inlineRadio1"
                                      value="option1"
                                    />
                                    <Form.Label
                                      class="form-check-label"
                                      for="inlineRadio1"
                                    >
                                      Satisfied
                                    </Form.Label>
                                  </div>
                                </Col>
                                <Col lg="3">
                                  <div class="form-check form-check-inline">
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      name="inlineRadioOptions"
                                      id="inlineRadio2"
                                      value="option2"
                                    />
                                    <Form.Label
                                      class="form-check-label"
                                      for="inlineRadio2"
                                    >
                                      Good
                                    </Form.Label>
                                  </div>
                                </Col>
                                <Col lg="3">
                                  <div class="form-check form-check-inline">
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      name="inlineRadioOptions"
                                      id="inlineRadio3"
                                      value="option3"
                                    />
                                    <Form.Label
                                      class="form-check-label"
                                      for="inlineRadio3"
                                    >
                                      Very Good
                                    </Form.Label>
                                  </div>
                                </Col>
                                <Col lg="3">
                                  {" "}
                                  <div class="form-check form-check-inline">
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      name="inlineRadioOptions"
                                      id="inlineRadio2"
                                      value="option2"
                                    />
                                    <Form.Label
                                      class="form-check-label"
                                      for="inlineRadio2"
                                    >
                                      Excellent
                                    </Form.Label>
                                  </div>
                                </Col>
                              </Row>

                              <Row>
                                <Col lg="6"></Col>
                                <br></br>
                              </Row>
                              <Row>
                                <br></br>
                                <label>
                                  <b>Provided Apparatus Review </b>
                                </label>
                                <br></br>
                                <Col lg="3">
                                  <div class="form-check form-check-inline">
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      name="inlineRadioOptions"
                                      id="inlineRadio1"
                                      value="option1"
                                    />
                                    <Form.Label
                                      class="form-check-label"
                                      for="inlineRadio1"
                                    >
                                      Satisfied
                                    </Form.Label>
                                  </div>
                                </Col>
                                <Col lg="3">
                                  <div class="form-check form-check-inline">
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      name="inlineRadioOptions"
                                      id="inlineRadio2"
                                      value="option2"
                                    />
                                    <Form.Label
                                      class="form-check-label"
                                      for="inlineRadio2"
                                    >
                                      Good
                                    </Form.Label>
                                  </div>
                                </Col>
                                <Col lg="3">
                                  <div class="form-check form-check-inline">
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      name="inlineRadioOptions"
                                      id="inlineRadio3"
                                      value="option3"
                                    />
                                    <Form.Label
                                      class="form-check-label"
                                      for="inlineRadio3"
                                    >
                                      Very Good
                                    </Form.Label>
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="12">
                                  <br></br>
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlTextarea1"
                                  >
                                    <Form.Label>
                                      <b>What's your Feedback</b>
                                    </Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                  </Form.Group>
                                </Col>
                              </Row>
                              <Row>
                                <Col>
                                  <Form.Group
                                    className="mb-3"
                                    controlId="formBasicCheckbox"
                                  >
                                    <Form.Check
                                      type="checkbox"
                                      label="Also Notify Through Email"
                                    />
                                  </Form.Group>
                                </Col>
                              </Row>
                            </Container>
                          </Form>
                          <br />
                        </Col>
                        <Col lg="1"></Col>
                      </Row>
                      <br />
                      <br />
                    </Container>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      className="schButton"
                      onClick={hideModal}
                      type="submit"
                    >
                      Cancel
                    </Button>
                    <Button
                      className="schButton"
                      onClick={hideModal}
                      type="submit"
                    >
                      Teacher Review Form
                    </Button>
                    {/* <button>Submit Review</button> */}
                    <Button className="schButton" type="submit">
                      Submit Review
                    </Button>
                  </Modal.Footer>
                </Modal>
              </CDBSidebarMenuItem>
            </a>

            {/* <a activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="paste">
                <button onClick={showModal}>College Review Form</button>
                <Modal
                  show={isOpen}
                  onHide={hideModal}
                  onEnter={startTimer}
                  onEntered={modalLoaded}
                >
                  <Modal.Header>
                    <Modal.Title>College Review</Modal.Title>
                  </Modal.Header>
                 
                  <Modal.Body>
                    <Container fluid>
                      <Row className="courseInfo">
                        <Col lg="1"></Col>
                        <Col lg="10">
                          <Form>
                            <Container>
                              <div style={styles.container}>
                                <div>
                                  <label>
                                    <b>Rate your Overall Experience </b>
                                  </label>
                                  <br></br>
                                </div>
                                <div style={styles.stars}>
                                  {stars.map((_, index) => {
                                    return (
                                      <FaStar
                                        key={index}
                                        size={24}
                                        stylw={{
                                          marginRight: 10,
                                          cursor: "pointer",
                                        }}
                                        color={
                                          (hoverValue || currentValue) > index
                                            ? colors.orange
                                            : colors.grey
                                        }
                                        onClick={() => handleClick(index + 1)}
                                        onMouseOver={() =>
                                          handleMouseOver(index + 1)
                                        }
                                        onMouseLeave={handleMouseLeave}
                                      />
                                    );
                                  })}
                                </div>
                              </div>

                              <Row>
                                <Col lg="6"></Col>
                              </Row>
                              <Row>
                                <Col lg="12">
                                  <br></br>
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlTextarea1"
                                  >
                                    <Form.Label>
                                      <b>What's your Feedback</b>
                                    </Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                  </Form.Group>
                                </Col>
                              </Row>
                              <Row>
                                <Col>
                                  <Form.Group
                                    className="mb-3"
                                    controlId="formBasicCheckbox"
                                  >
                                    <Form.Check
                                      type="checkbox"
                                      label="Also Notify Through Email"
                                    />
                                  </Form.Group>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="10"></Col>
                                <Col lg="2">
                                  <br></br>
                                  <Button className="schButton" type="submit">
                                    Submit Review
                                  </Button>
                                </Col>
                              </Row>
                            </Container>
                          </Form>
                          <br />
                        </Col>
                        <Col lg="1"></Col>
                      </Row>
                    </Container>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      className="schButton"
                      onClick={hideModal}
                      type="submit"
                    >
                      Cancel
                    </Button>
                    <Button className="schButton" type="submit">
                      Submit Review
                    </Button>
                  </Modal.Footer>
                </Modal>
              </CDBSidebarMenuItem>
            </a> */}

            <NavLink
              href="/hero404"
              target="_blank"
              activeclassname="activeClicked"
            >
              <CDBSidebarMenuItem icon="exclamation-circle">
                404 page
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "20px 5px",
            }}
          >
            {" "}
            <b>Affiliated College Management System</b>
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default SideBar;
