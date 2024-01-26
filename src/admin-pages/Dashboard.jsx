import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { isadminAuthTokenContext } from '../contextapi/ShareContext'
import { useNavigate } from 'react-router-dom'
import { allbookingsAPI } from '../services/allAPI'
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap'

function Dashboard() {


  const navigate = useNavigate()
  const {isadminAuthToken,setisadminAuthtoken} = useContext(isadminAuthTokenContext)
  // alert(isadminAuthToken)
  const [totalcomplete,settotalcomplete] = useState(0)
  const [totalaccepted,settotalaccepted] = useState(0)
  const [totalpending,settotalpending] = useState(0)


  const [allbooking,setallbookings] = useState([])
  const [searchkey,setsearchkey] = useState("")

  const [date, changeDate] = useState(new Date());




   function changeValue(val) {
      changeDate(val);
   }

   

  const allbookingdata = async()=>
  {
    const result = await allbookingsAPI(searchkey)
    console.log(result.data);
    setallbookings(result.data)

    const total = result.data.filter(data=>data.bookingstatus==="completed")
    settotalcomplete(total.length)
    const total2 = result.data.filter(data=>data.bookingstatus==="accepted")
    settotalaccepted(total2.length)
    const total3 = result.data.filter(data=>data.bookingstatus==="pending")
    settotalpending(total3.length)
    
  }
  console.log(totalcomplete)
  

  useEffect(()=>{
    if(isadminAuthToken !=true)
    {
      navigate('/login')
    }
  },[])

  useEffect(()=>{
    allbookingdata()
    
  },[totalcomplete,totalaccepted,totalpending])

  return (
    <>
    <div className='d-flex justify-content-evently'>
      <div style={{height:'100vh'}}><Sidebar/></div>
       
      <div className='m-5 w-100'>
        <div className='d-flex justify-centent-center align-items-center w-100 flex-column'>
          <h2 className='mt-5 text-primary fw-bold'>Hello Admin</h2>
          <h2 className='text-primary fw-bold'>Your Total Completed booking is {totalcomplete}</h2>
        </div>

        <hr />

        <Row>
          <Col className='mt-5'>
            <div>
              
              <Calendar onChange = {changeValue} value = {date} />
              
            </div>
          
          </Col>
          <Col className='mt-5 me-4'>
            <Card className='bg-warning' style={{ width: '20rem',height:'18rem' }}>
              <Card.Body>
                <h3 style={{color:'white',fontWeight:'bold'}} className='text-center mt-5'>Total pending Bookings is {totalpending}</h3> 
              </Card.Body>
            </Card>
          </Col>

          <Col className='mt-5 '>
            <Card className='bg-primary' style={{ width: '20rem',height:'18rem' }}>
              <Card.Body>
                <h3 style={{color:'white',fontWeight:'bold'}} className='text-center mt-5'>Total accepted Bookings is {totalaccepted}</h3>
              </Card.Body>
            </Card>
          </Col>
        </Row>
       
      </div>
    </div>
    </>
  )
}

export default Dashboard