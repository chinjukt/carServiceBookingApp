import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { userbookingAPI } from '../services/allAPI'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Cancelbooking from './Cancelbooking';

function Mybookings() {

  const [userbooking,setuserbooking] = useState([])

  const [bookstatusresponse,setbookstatusresponse] = useState(false)
 

  const getuserbooking =async()=>{

    const token = sessionStorage.getItem("token")
    const reqHeader= {
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    }

    const result = await userbookingAPI(reqHeader)
    console.log(result.data);
    setuserbooking(result.data)
  }

  useEffect(()=>{
    getuserbooking()
    setbookstatusresponse(false)
  },[bookstatusresponse])

  return (
    <>
    <Header/>
    <div className='mt-5 mb-5 container'>  
      <div className='d-flex align-items-center' style={{height:'100px',width:'100%',backgroundColor:'#D1CDCC'}}>
              <i className="fa-solid fa-toolbox fs-3" style={{marginLeft:'40px',color:'#158CE4 '}}></i>
              <h2 className='fw-bold text-primary' style={{marginLeft:'20px'}}>My Bookings</h2>
      </div>
    </div>

    {userbooking?.length>0?
        userbooking?.map((item)=>(<div className='container-fluid mt-5 mb-5 d-flex align-items-center justify-content-center'>

      <div className="card" style={{width:"60rem"}}>
        <div className="card-header">
          <h2 className='text-warning'>{item.bookingstatus}</h2>
        </div>
        <div className="card-body">
          <h5 className="card-title">{item.servicename}</h5>
          <p className="card-text">Price : ₹ {' '}{item.price}</p>
          <p>Vehicle Number : {item.carnumber}</p>
          <p>Address : {item.address}</p>
          <p>Booking Date : {item.bookeddate}</p>
          {item.bookingstatus=='pending' &&
          <Cancelbooking bookingdetails={item} setbookstatusresponse={setbookstatusresponse}/>}
        </div>
      </div>
    </div>)):<p className='text-danger fs-3'><b>No bookings uploaded yet !!</b></p>}

      

    <Footer/>
    </>
  )
}

export default Mybookings