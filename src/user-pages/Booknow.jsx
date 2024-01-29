import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Bookingsubmit from './Bookingsubmit';
import { selecctedserviceAPI } from '../services/allAPI';

function Booknow() {

    const [selectedservices,setselectedservices] = useState([])


    const { id } = useParams();

    const showselectedservices = async()=>{
        const result = await selecctedserviceAPI(id)
        console.log(result.data);
        setselectedservices(result.data)
    }

    

    useEffect(()=>{
        showselectedservices()

    },[])
    console.log(selectedservices);

  return (
    <>
    <Header/>
    { selectedservices?.map((item)=>(
    <div className='mt-5 mb-5 container'>
        <div className='d-flex align-items-center' style={{height:'100px',width:'100%',backgroundColor:'#D1CDCC'}}>
            <i className="fa-solid fa-toolbox fs-3" style={{marginLeft:'40px',color:'#158CE4 '}}></i>
            <h2 className='fw-bold' style={{marginLeft:'20px'}}> {item.servicename}</h2>
            <Link to={'/carservices'} style={{textDecoration:'none',color:'#158CE4',marginLeft:'20px',fontSize:'20px',fontWeight:'bolder'}}>Change Service <i className="fa-solid fa-arrow-right fa-2xl" style={{color:'#158CE4',marginLeft:'10px'}}></i></Link>
        </div>

        <div className='mt-4 shadow p-5'>
            <div >
                <h4>{item.description}</h4>
                <hr className='fw-bold fs-4'/>
            </div>
            <div className='d-flex justify-content-between align-items-center'>
                <div>
                    <h2>Price : ₹ {' '}{item.price}</h2> 
                        
                    <h4>Services Available : {item.subservice}</h4>
                    
                </div>
                <div>
                    <h4>Time required :  {item.timerequires}</h4>
                </div>
            </div>
            <Bookingsubmit selectedservices={item}/>
        </div>
    </div>))}

    
    <Footer/>
    </>
  )
}

export default Booknow