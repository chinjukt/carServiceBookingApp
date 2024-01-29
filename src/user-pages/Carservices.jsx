import React, { useContext, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import ServiceCard from '../components/ServiceCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { allservicesAPI } from '../services/allAPI';
import { isAuthTokenContext } from '../contextapi/ShareContext';
import { useNavigate } from 'react-router-dom';


function Carservices() {
  const navigate = useNavigate()

  const {isAuthToken,setisAuthtoken} = useContext(isAuthTokenContext)

  const [allservices,setallservices] = useState([])

  const showallservices = async()=>{
    const result = await allservicesAPI()
    console.log(result.data);
    setallservices(result.data)
  }

  useEffect(()=>{
    showallservices()
  },[])

  useEffect(()=>{
    !isAuthToken &&
      navigate('/login')
  },[isAuthToken])

  return (
    <>
    <Header/>
      <div>
        <div className='mb-5'>
          <h1 className='mt-5 text-center text-primary fw-bold'>Car Services</h1>
          <p className='container mt-3' style={{textAlign:'center'}}>We are offer an extensive range of services such as Regular Service, Battery Replacement, AC Service, Denting & Painting, Tyre Replacement, Wheel Alignment & Balancing, Insurance Renewal, Cashless Claims, Car Wash and many more for all cars of all makes and models all under one roof.</p>

          <div className='container mb-5 mt-5'>
            <Row>
            { allservices?.length>0?
            allservices?.map((item)=>(
              <Col sm={12} md={6} lg={4} xl={3} className='mb-4'>
                <ServiceCard services={item}/>
              </Col>)):<p className='text-danger fs-3'><b>No project uploaded yet !!</b></p>}
              
            </Row> 
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Carservices
