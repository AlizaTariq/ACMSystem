import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

const SideBar = () => {
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
