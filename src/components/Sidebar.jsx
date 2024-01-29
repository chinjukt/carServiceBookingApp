import React, { useContext, useEffect } from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { isadminAuthTokenContext } from '../contextapi/ShareContext';

const Sidebar = () => {

  const {isadminAuthToken,setisadminAuthtoken} = useContext(isadminAuthTokenContext)

  const navigate = useNavigate();
  
  const handlelogout = ()=>{
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("usertype")
    sessionStorage.removeItem("existing_data")
    setisadminAuthtoken(false)
    // navigate('/')
  }

  useEffect(()=>{
    !isadminAuthToken &&
      navigate('/login')
  },[isadminAuthToken])
  return (
    <div
      style={{ display: 'flex', height: 'auto', overflow: 'scroll initial' }}
    >
      <CDBSidebar className='bg-primary' textColor="#fff">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/dashboard"
            className="text-decoration-none"
            style={{ color: 'inherit' }}
          >
            Admin
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/dashboard" activeClassName="activeClicked">
              <CDBSidebarMenuItem><i className="fa-solid fa-table-columns"></i> Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/vehicles" activeClassName="activeClicked">
              <CDBSidebarMenuItem><i className="fa-solid fa-car-side"></i> Cars</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/services" activeClassName="activeClicked">
              <CDBSidebarMenuItem><i class="fa-brands fa-servicestack"></i> Services</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/allbookings" activeClassName="activeClicked">
              <CDBSidebarMenuItem><i class="fa-solid fa-table"></i> Bookings
              </CDBSidebarMenuItem>
            </NavLink>
            <Link onClick={handlelogout} style={{textDecoration:'none',color:'white',marginLeft:'30px'}}> <i class="fa-solid fa-power-off"></i> Logout</Link>
            {/* <NavLink exact activeClassName="activeClicked" onClick={handlelogout}>
              <CDBSidebarMenuItem><i class="fa-solid fa-power-off"></i> Logout</CDBSidebarMenuItem>
            </NavLink> */}

{/* <NavLink exact to="/all" activeClassName="activeClicked">
              <CDBSidebarMenuItem><i class="fa-brands fa-servicestack"></i> all</CDBSidebarMenuItem>
            </NavLink> */}
            
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          {/* <div
            style={{
              padding: '20px 5px',
            }}
          >
            Sidebar Footer
          </div> */}
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;