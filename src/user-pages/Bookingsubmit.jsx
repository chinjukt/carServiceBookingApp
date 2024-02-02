import React, { useEffect } from 'react'
import { addbookingAPI, allcarAPI } from '../services/allAPI';
import { useState } from 'react';
import DatePicker from "react-datepicker";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { useNavigate } from 'react-router-dom';

function Bookingsubmit({selectedservices}) {

    const [date, setDate] = useState(new Date());

    const [show, setShow] = useState(false);

    const [allcars,setallcars] = useState([])

    const navigate = useNavigate()

    const [bookservice,setbookservice] = useState({
        customername:"",
        address:"",
        phoneNumber:"",
        bookeddate:"",
        carname:"",
        carnumber:"",
        servicename:selectedservices.servicename,
        price:selectedservices.price,
        bookingstatus:"pending"
    })

    
    console.log(bookservice);
    console.log(moment(date).format('DD-MMM-YYYY'));

    const showallcars = async()=>{
        const result = await allcarAPI()
        console.log(result);
        setallcars(result.data)
      }

    const handleClose = () => {
        setShow(false)
        handleClose1()
    };
    const handleShow = () => setShow(true);
    
    const handleClose1 = ()=>{
        setbookservice({
            customername:"",
            address:"",
            phoneNumber:"",
            bookeddate:"",
            carname:"",
            carnumber:"",
            servicename:selectedservices.servicename,
            price:selectedservices.price,
            bookingstatus:"pending"
        })
    }

    const handlebooking = async()=>{
        const user = JSON.parse(sessionStorage.getItem("existing_data"))
        const token = sessionStorage.getItem("token")
        if(user)
        {
            const getbookingdate = moment(date).format('DD-MMM-YYYY')
            // setbookservice({...bookservice,customername:user.name,phoneNumber:user.phoneNumber,bookeddate:getbookingdate})
            setbookservice({...bookservice,bookeddate:getbookingdate})
            const {address,carname,carnumber,bookeddate} = bookservice
            // if(!bookeddate){
            //     setbookservice({...bookservice,bookeddate:getbookingdate})
            // }
            
            console.log(bookservice);
           
            if(!address || !carname || !carnumber || !bookeddate)
            {
                if(!bookeddate){
                    setbookservice({...bookservice,bookeddate:getbookingdate})
                }else{
                    alert('please fill the form completely')
                }
            }
            else{
                const reqHeader = {
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${token}`
                }
                const result = await addbookingAPI(bookservice,reqHeader)
                console.log(result);
                if(result.status ===200)
                {
                    alert(`${result.data.servicename} booked successfully`)
                    handleClose1()
                    navigate('/mybookings')
                }
                else{
                    alert(`${result.response.data}`)
                }
            }
        }
        else{
            alert('authentication failed.... please login')
        }
    }
    
    useEffect(()=>{
        const user = JSON.parse(sessionStorage.getItem("existing_data"))
        setbookservice({...bookservice,customername:user.name,phoneNumber:user.phoneNumber})
            
        showallcars()
    },[])
    console.log(allcars);

  return (
    <div>
        <div className='mt-4 d-flex justify-content-center align-items-center'>
                <button onClick={handleShow} className='btn btn-primary'>Book Now</button>
        </div>


        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Bookings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
    
            <div className="row">
                <div className='col-lg-12'>
                    <div className="mb-3 mt-4 w-100">
                        <input type="text" className='form-control'  value={selectedservices.servicename} disabled/>
                    </div>
                </div>

                <div className='col-lg-12'>
                    <div className="mb-3 mt-4 w-100">
                        <select name="" id="" className='form-control' onChange={(e)=>setbookservice({...bookservice,carname:e.target.value})}>
                            <option value="" >Select Your Car</option>
                            { allcars?.map((item)=>(
                            <option value={item.carname} >{item.carname}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className='col-lg-12'>
                    <div className="mb-3 mt-4 w-100">
                    <textarea name="" id="" cols="3" rows="3" className='form-control' placeholder='Enter your address' onChange={(e)=>setbookservice({...bookservice,address:e.target.value})}></textarea>
                    </div>
                </div>

                
                <div className="col-lg-6">
                    <div className="mb-3 mt-4 w-100">
                    <DatePicker className='form-control' dateFormat="MM/dd/yyyy" selected={date} onChange={date => setDate(date)} />
                    {/* <DatePicker className='form-control' dateFormat="MM/dd/yyyy" selected={date} onChange={getbookingdate} /> */}
                    </div>
                </div>
                <div className='col-lg-6'>    
                    <div className="mb-3 mt-4 w-100">
                    <input type="text" className='form-control' placeholder='Vehicle number' onChange={(e)=>setbookservice({...bookservice,carnumber:e.target.value})}/> 
                    </div>
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
          <Button variant="primary" onClick={handlebooking}>
            BOOK NOW
          </Button>
        </Modal.Footer>
    </Modal>
    </div>
  )
}

export default Bookingsubmit
