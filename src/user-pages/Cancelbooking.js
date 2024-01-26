import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { editbookingstatusAPI } from '../services/allAPI';

function Cancelbooking({bookingdetails,setbookstatusresponse}) {

    const [bookstatus,setbookstatus] = useState({
        bstatus:"cancelled"
    })

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handlestatus = async(e)=>{
        e.preventDefault()
        const bookingid = bookingdetails._id 
        console.log(bookingid);
        
        // setbookstatus({...bookstatus,bstatus:"cancelled"})
        console.log(bookstatus);
      
        const result = await editbookingstatusAPI(bookingid,bookstatus)
        console.log(result);
        if(result.status===200)
        {
            alert('booking is cancelled')
            handleClose()
            setbookstatusresponse(true)
        }
        else{
            console.log(result.response.data);
        }
    }

  return (
    <div>
        <a href="#" className="btn btn-primary" onClick={handleShow}>Cancel Bookings</a>


        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cancel Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure want to CANCEL the booking</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            NO
          </Button>
          <Button variant="primary" onClick={handlestatus}>
            YES
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Cancelbooking