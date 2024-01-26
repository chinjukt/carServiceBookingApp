import React, { useEffect, useState, useContext} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { isAuthTokenContext } from '../contextapi/ShareContext';

function Header() {

  const {isAuthToken,setisAuthtoken} = useContext(isAuthTokenContext)

  const[islogin,setislogin] = useState(false)
  console.log(islogin);

  const navigate = useNavigate()

  const handlelogout = ()=>{
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("usertype")
    sessionStorage.removeItem("existing_data")
    setislogin(false)
    setisAuthtoken(false)
    navigate('/')
  }

  useEffect(()=>{
    if(sessionStorage.getItem("token"))
    {
      if(sessionStorage.getItem("usertype")=='customer')
      {
        setislogin(true)
      }    
    }
  },[])
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          {/* <Navbar.Brand href="#home"> */}
            <Link to={'/'} style={{textDecoration:'none'}} className='navbar-brand'><h3><i className="fa-solid fa-car fa-beat"></i> ShineMe</h3></Link>
          <Nav className="ms-auto fs-5">
            
          {islogin?
            <Link style={{textDecoration:'none',color:'white',marginLeft:'15px'}} to={'/mybookings'}>My Booking</Link>:
            <Link style={{textDecoration:'none',color:'white',marginLeft:'15px'}} to={'/login'}>My Bookings</Link>}

            {islogin?
            <Link style={{textDecoration:'none',color:'white',marginLeft:'15px'}} to={'/carservices'}>Services</Link>:
            <Link style={{textDecoration:'none',color:'white',marginLeft:'15px'}} to={'/login'}>Services</Link>}
            
            {islogin?
            <Link onClick={handlelogout} style={{textDecoration:'none',color:'white',marginLeft:'15px'}}> Logout</Link>:
            <Link style={{textDecoration:'none',color:'white',marginLeft:'15px'}} to={'/login'}> Login</Link>
            }
            
            {islogin?
            <button className="btn btn-md btn-danger rounded " style={{padding:'5px 10px',fontSize:'20px',fontWeight:'bold',marginLeft:'15px'}}><Link style={{textDecoration:'none',color:'white'}} to={'/carservices'}>Book Now</Link></button>:
            <button className="btn btn-md btn-danger rounded " style={{padding:'5px 10px',fontSize:'20px',fontWeight:'bold',marginLeft:'15px'}}><Link style={{textDecoration:'none',color:'white'}} to={'/login'}>Book Now</Link></button>}
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header