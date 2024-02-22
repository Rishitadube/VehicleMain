import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Maintenance Tracker
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
          <NavLink exact to="/mycars" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="user">My Cars</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/dashboard" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Maintenance Sche</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/main-rec" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="table">Maintenance Records</CDBSidebarMenuItem>
            </NavLink>
      

          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
        
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;