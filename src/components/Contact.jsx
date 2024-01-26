import React from 'react'
import { Form } from 'react-bootstrap';

function Contact() {
  return (
    <>
    <div className='container-fluid mt-5 mb-5'>
        <h2 className='text-center text-primary mt-5 mb-5'>Contact Us</h2>
        <div className='row shadow'>
            <div className='col-md-6'>
                <div className=''>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251063.04692621942!2d76.05843000377244!3d10.511682690467104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ee15ed42d1bb%3A0x82e45aa016ca7db!2sThrissur%2C%20Kerala!5e0!3m2!1sen!2sin!4v1706113007362!5m2!1sen!2sin" width="600" height="450" style={{border:"0",width:'100%'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>  
            </div>
            <div className='col-md-6'>
                <div className='mt-5 mb-5 w-100'>
                    <h3 className='text-center mb-5 text-primay'><i className="fa-solid fa-route fa-2xl"></i></h3>
                    <h1 className='text-center fw-bolder'>Address</h1>
                    <p style={{textAlign:'center',fontSize:'20px'}}>Unit no.4, Reality Warehousing Pvt. Ltd., <p></p>Behind Reliance Smart, Wagholi, Pune, Maharastra – 412207</p>
                    <h4 className='text-center'>Phone : 8907565435</h4>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact