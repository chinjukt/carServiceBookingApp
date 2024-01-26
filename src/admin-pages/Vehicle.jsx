import React, { useContext, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { addcarAPI, allcarAPI, removecarAPI } from '../services/allAPI';
import { isadminAuthTokenContext } from '../contextapi/ShareContext';
import { useNavigate } from 'react-router-dom';

function Vehicle() {

  const {isadminAuthToken,setisadminAuthtoken} = useContext(isadminAuthTokenContext)

  const navigate = useNavigate()

  const [show, setShow] = useState(false);

  const [car,setcar] = useState({
    carname:""
  })

  const [allcars,setallcars] = useState([])

  console.log(car);

  const handleadd = async(e)=>{
    e.preventDefault()
    const {carname} = car
    if(!carname)
    {
      alert('please fill the carname')
    }
    else{
      const result = await addcarAPI(car)
      console.log(result);
      if(result.status ===200)
      {
        alert(`${result.data.carname} added successfully`)
        setcar({carname:""})
        handleClose()
      }
      else{
        alert(`${result.response.data}`)
      }
    }
  }


  const showallcars = async()=>{
    const result = await allcarAPI()
    console.log(result);
    setallcars(result.data)
  }

  const handledelete = async(id)=>{
    const token = sessionStorage.getItem("token")
    const reqHeader= {
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    }
    const result = await removecarAPI(id,reqHeader)
    console.log(result);
    if(result.status===200)
    {
      showallcars()
    }
    else
    {
      console.log(result.response.data);
    }
  }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(()=>{
      showallcars()
    },[car])

    useEffect(()=>{
      !isadminAuthToken &&
        navigate('/login')
    },[])

  return (
    <>
      <div className='d-flex justify-content-evently'>
        <div className='bg-primary' style={{height:'100vh'}}><Sidebar/></div>
        
        <div className='m-5 w-100'>
          
          <div className='d-flex justify-content-around'>
            <div className='w-100'><h3 className='fw-bold text-primary'>Available Cars</h3></div>
            <div className='w-100'><button onClick={handleShow} className='btn btn-primary' style={{float:'right'}} >Add Car</button></div>
            
          </div>
          <hr />
          <div className='ms-5 mt-5'>
            <Row>
              {allcars?.length>0?
              allcars.map((item)=>(<Col sm={12} md={6} lg={4} xl={3}>
                <div className=' m-3 p-3 shadow rounded d-flex justify-content-center align-items-center flex-column' style={{width:'200px',maxWidth:'200px',height:'200px',display: 'inline-block'}}>
                  <h3 className='p-4 fw-bold'>{item.carname}</h3>
                  <button onClick={()=>handledelete(item._id)} className='btn btn-danger'><i className="fa-solid fa-trash "></i></button>
                </div>
              </Col>)) : null}
            </Row>
            
          </div>
          
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Bookings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="row">   
                <div className='col-lg-12'>
                    <div className="mb-3 mt-4 w-100">
                        <input type="text" className='form-control' placeholder='Enter Car Name' onChange={(e)=>setcar({carname:e.target.value})}/>
                    </div>
                </div>
  
            </div>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Clear
          </Button> */}
          <Button onClick={handleadd} variant="primary">
            ADD
          </Button>
        </Modal.Footer>
    </Modal>
    </>
  )
}

export default Vehicle