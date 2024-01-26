import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
        <div className='d-flex align-items-center justify-content-center bg-primary' style={{height:'200px'}}>
            <div className='d-flex align-items-center justify-content-between w-100'>
                <div className='ms-5' style={{color:'white',width:'500px'}}>
                    <h4><i class="fa-solid fa-car"></i> ShineMe</h4>
                    <h6>ShineMe is an app that keeps track of the vehicles’ services and releases real-time reminders that would help you take care of your car in an efficient manner.</h6>
                </div>
            

                <div className="links d-flex flex-column me-3">
                    <h4 style={{color:'white'}}>Links</h4>
                    <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home Page</Link>
                    <Link to={'/allcars'} style={{textDecoration:'none',color:'white'}}>Cars</Link>
                    <Link to={'/login'} style={{textDecoration:'none',color:'white'}}>Login</Link>
                </div>

            </div>
            
            
    
        </div>
        <p style={{color:'white'}} className='d-flex flex-column justify-content-center align-items-center bg-primary pb-4'>Copyright @ 2023 ShineMe. Built with React.</p>
    </div>
  )
}

export default Footer