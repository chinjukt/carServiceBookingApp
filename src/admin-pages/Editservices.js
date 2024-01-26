import React, { useEffect } from 'react'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { editserviceAPI } from '../services/allAPI';

function Editservices({service,seteditstatus}) {

    const [servicedetails,setServicedetails] = useState({
        id:service._id,
        servicename:service.servicename,
        description:service.description,
        price:service.price,
        timerequires:service.timerequires,
        subservice:service.subservice,
        image:""
      })

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
        handleClose1()
      };

    const handleClose1 = () => {
        setServicedetails({
            id:service._id,
            servicename:service.servicename,
            description:service.description,
            price:service.price,
            timerequires:service.timerequires,
            subservice:service.subservice,
            image:""
        })
      };
      const handleShow = () => setShow(true);
    
    const handleeditservice = async(e)=>
    {
        e.preventDefault()
        const {id,servicename,description,price,timerequires,subservice,image} = servicedetails
        if(!servicename || !description || !price || !timerequires || !subservice)
        {
            alert('please fill the form completely');
        }
        else
        {
            const token = sessionStorage.getItem("token")
            const reqBody = new FormData()
            reqBody.append("servicename",servicename)
            reqBody.append("description",description)
            reqBody.append("price",price)
            reqBody.append("timerequires",timerequires)
            reqBody.append("subservice",subservice)
            if(!image)
            {

                const reqHeader = {
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${token}`
                }
                const result = await editserviceAPI(id,reqBody,reqHeader)
                console.log(result);
                if(result.status===200)
                {
                    alert('service updated successfully')
                    handleClose()
                    seteditstatus(true)
                }
                else{
                    console.log(result.response.data);
                }
            }
            else
            {
                reqBody.append("image",image)
                const reqHeader = {
                    "Content-Type":"multipart/form-data",
                    "Authorization":`Bearer ${token}`

                }
                const result = await editserviceAPI(id,reqBody,reqHeader)
                console.log(result);
                if(result.status===200)
                {
                    alert('service updated successfully')
                    handleClose()
                    seteditstatus(true)
                }
                else{
                    console.log(result.response.data);
                }
            }    

        }
    }
    
  return (
    <div>
        <button onClick={handleShow} className='btn btn-primary me-3'><i className="fa-solid fa-pen-nib "></i></button>

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
                      <input type="file"  class="form-control"   id="customFile" onChange={(e)=>setServicedetails({...servicedetails,image:e.target.files[0]})}/>
                    </div>
                </div>
                
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Clear
          </Button>
          <Button variant="primary" onClick={handleeditservice}>
            EDIT SERVICE
          </Button>
        </Modal.Footer>
    </Modal>
    </div>
  )
}

export default Editservices