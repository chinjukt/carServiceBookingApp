import React, { useContext, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { addServiceAPI, allservicesAPI, removeservicesAPI } from '../services/allAPI';
import { BASE_URL } from '../services/base_url';
import Editservices from './Editservices';
import { height } from '@mui/system';
import { isadminAuthTokenContext } from '../contextapi/ShareContext';
import { useNavigate } from 'react-router-dom';

function Services() {

  const {isadminAuthToken,setisadminAuthtoken} = useContext(isadminAuthTokenContext)

  const navigate = useNavigate()

  const [servicedetails,setServicedetails] = useState({
    servicename:"",
    description:"",
    price:"",
    timerequires:"",
    subservice:"",
    image:""
  })

  const [allservices,setallservices] = useState([])

  const [token,settoken] = useState("")
  console.log(token);

  const [editstatus,seteditstatus] = useState(false)

  const [show, setShow] = useState(false);
  
  console.log(servicedetails);

    const handleClose = () => {
      setShow(false)
      handleClose1()
    };
    const handleShow = () => setShow(true);

    const handleClose1 = () => {
      setServicedetails({
        servicename:"",
        description:"",
        price:"",
        timerequires:"",
        subservice:"",
        image:""
      })
    };


    const showallservices = async()=>{
      const result = await allservicesAPI()
      console.log(result.data);
      setallservices(result.data)
    }


    useEffect(()=>{
      if(sessionStorage.getItem("token"))
      {
        settoken(sessionStorage.getItem("token"))
      }
    },[])

    useEffect(()=>{
      showallservices()
      seteditstatus(false)
    },[editstatus])


    const handleaddservice = async(e)=>{
      e.preventDefault()
      const {servicename,description,price,timerequires,subservice,image} = servicedetails
      if(!servicename || !description || !price || !timerequires || !subservice || !image)
      {
        alert('please fill the form completely');
      }
      else
      {  
        const reqBody = new FormData()
        reqBody.append("servicename",servicename)
        reqBody.append("description",description)
        reqBody.append("price",price)
        reqBody.append("timerequires",timerequires)
        reqBody.append("subservice",subservice)
        reqBody.append("image",image)

        // console.log(token);

        if(token){
          const reqHeader = {
            "Content-type":"multipart/form-data",
            "Authorization":`Bearer ${token}`
            }

          const result = await addServiceAPI(reqBody,reqHeader)
          console.log(result);
          if(result.status===200)
          {
            alert('service added successfully')
            handleClose()
            showallservices()
          }
          else{
            alert(result.response.data);
            handleClose1()
          }
        }
      }
    }


    const deleteservice = async(id)=>{
      const token = sessionStorage.getItem("token")
      const reqHeader= {
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      }
      const result = await removeservicesAPI(id,reqHeader)
      console.log(result);
      if(result.status===200)
      {
        showallservices()
      }
      else
      {
        console.log(result.response.data);
      }
    }

    useEffect(()=>{
      !isadminAuthToken &&
        navigate('/login')
    },[])

  return (
    <>
    <div className='d-flex justify-content-evently w-100'>
      <div style={{height:'auto'}}><Sidebar/></div>
      
      <div className='m-5 w-100'>
        <div className='d-flex justify-content-around'>
          <div className='w-100'><h3 className='fw-bold text-primary'>SERVICES</h3></div>
          <div className='w-100'><button className='btn btn-primary' style={{float:'right'}} onClick={handleShow}>Add Services</button></div>
        </div>
        
        <div className='ms-5 mt-5'>
          <Row >

            { allservices?.length>0?
            allservices?.map((item)=>(<Col sm={12} md={12} lg={6} xl={4} className='m-2'>

              <Card style={{ width: '20rem',height:'500px'}} className='shadow' >
                <Card.Img variant="top" src={`${BASE_URL}/uploads/${item.image}`} />
                <Card.Body>
                  <Card.Title>{item.servicename}</Card.Title>
                  <Card.Text>
                    {item.description}
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Price : {item.price}</ListGroup.Item>
                  <ListGroup.Item>Time Required : {item.timerequires}</ListGroup.Item>
                  <ListGroup.Item>Available Services : {item.subservice}</ListGroup.Item>
                </ListGroup>
                <Card.Body className='d-flex justify-content-evently'>
                  <div>
                    <Editservices service={item} seteditstatus={seteditstatus}/>
                  </div>
                  <div>
                    <button className='btn btn-danger'><i className="fa-solid fa-trash " onClick={()=>deleteservice(item._id)}></i></button>
                  </div>
                </Card.Body>
              </Card>

            </Col>)):<p className='text-danger fs-3'><b>No project uploaded yet !!</b></p>}
              
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
                        <input type="text" value={servicedetails.servicename} className='form-control' placeholder='Enter Service Name' onChange={(e)=>setServicedetails({...servicedetails,servicename:e.target.value})}/>
                    </div>
                </div>

                <div className='col-lg-12'>
                    <div className="mb-3 mt-4 w-100">
                    <textarea value={servicedetails.description} name="" id="" cols="3" rows="3" className='form-control' placeholder='Enter Service Description' onChange={(e)=>setServicedetails({...servicedetails,description:e.target.value})}></textarea>
                    </div>
                </div>

                <div className='col-lg-12'>
                    <div className="mb-3 mt-4 w-100">
                    <input type="text" value={servicedetails.price} className='form-control' placeholder='Enter Price' onChange={(e)=>setServicedetails({...servicedetails,price:e.target.value})}/> 
                    </div>
                </div>

                <div className='col-lg-12'>
                    <div className="mb-3 mt-4 w-100">
                    <input type="text" value={servicedetails.timerequires} className='form-control' placeholder='Enter Required Time' onChange={(e)=>setServicedetails({...servicedetails,timerequires:e.target.value})}/> 
                    </div>
                </div>

                <div className='col-lg-12'>
                    <div className="mb-3 mt-4 w-100">
                    <textarea name="" id="" cols="3" rows="3" value={servicedetails.subservice} className='form-control' placeholder='Enter Available subservices' onChange={(e)=>setServicedetails({...servicedetails,subservice:e.target.value})}></textarea>
                    </div>
                </div>

                <div className='col-lg-12'>
                    <div className="mb-3 mt-4 w-100">
                      <label class="form-label" for="customFile">Service Image</label>
                      <input type="file" class="form-control"   id="customFile" onChange={(e)=>setServicedetails({...servicedetails,image:e.target.files[0]})}/>
                    </div>
                </div>
                
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Clear
          </Button>
          <Button variant="primary" onClick={handleaddservice}>
            ADD SERVICE
          </Button>
        </Modal.Footer>
    </Modal>
    </>
  )
}

export default Services