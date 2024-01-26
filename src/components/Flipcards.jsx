import React from 'react'
import '../components/Flipcards.css'

function Flipcards() {
  return (
    <>
    <div className="container-fluid d-flex align-items-center justify-content-center flex-wrap">
        <div className="box">
            <div className="body">
                <div className="imgContainer">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToYIVfDwMjMYTAebYUb9zP1pRxEXHu7LyyjABtauS8X6x7DXeqqnECAJsOxXALNmDW2W8&usqp=CAU" alt="no-image"/>
                    <div className="img-overlay">
                        <h3 style={{color:'white',fontWeight:'bold',fontSize:'35px'}}>GENERAL <p>SERVICE</p></h3>
                    </div>
                </div>
                <div className="content d-flex flex-column align-items-center justify-content-center">
                    <div>
                        <h3 className="text-white fs-5">General Service</h3>
                        <p className="fs-6 text-white">We carry out repairs from minor light globe replacement to major engine overhaul. No matter how complex the repair is, we have it all covered.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="box">
            <div className="body">
                <div className="imgContainer">
                    <img src="https://img.freepik.com/free-photo/hands-only-mechanic-holding-tire-repair-garage-replacement-winter-summer-tires_146671-16784.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703030400&semt=ais" alt="no-image"/>
                    <div className="img-overlay">
                        <h3 style={{color:'white',fontWeight:'bold',fontSize:'35px'}}>TYRES <p>SERVICE</p></h3>
                    </div>
                </div>
                <div className="content d-flex flex-column align-items-center justify-content-center">
                    <div>
                        <h3 className="text-white fs-5">Tyres Service</h3>
                        <p className="fs-6 text-white">You'll find an extensive range of tyres, including car, SUV, 4X4 & Van tyres. We do complete tyre services including tyres fitting, wheel balancing & puncture repair.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="box">
            <div className="body">
                <div className="imgContainer">
                    <img src="https://media.istockphoto.com/id/856956280/photo/car-insurance-concept.jpg?s=612x612&w=0&k=20&c=DQcgaTo9i9pOQraSlkZU9To4oabaEGyZip5Aks-w568=" alt="no image"/>
                    <div className="img-overlay">
                        <h3 style={{color:'white',fontWeight:'bold',fontSize:'35px'}}>WARRANT OF <p>FITNESS</p></h3>
                    </div>
                </div>
                <div className="content d-flex flex-column align-items-center justify-content-center">
                    <div>
                        <h3 className="text-white fs-5">Warrant Of Fitness</h3>
                        <p className="fs-6 text-white">In NZ it is mandatory for every vehicle to have current WoF to ensure safety of all road users. For past four decades we have served the community as one of the most reliable and trusted Warrant of Fitness providers.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="box">
            <div className="body">
                <div className="imgContainer">
                    <img src="https://5.imimg.com/data5/EE/EE/GLADMIN-/vehicle-fault-diagnosis.jpg" alt="no-image"/>
                    <div className="img-overlay">
                        <h3 style={{color:'white',fontWeight:'bold',fontSize:'35px'}}>FAULT <p>DIAGNOSTICS</p></h3>
                    </div>
                </div>
                <div className="content d-flex flex-column align-items-center justify-content-center">
                    <div>
                        <h3 className="text-white fs-5">Fault Diagnostics</h3>
                        <p className="fs-6 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sed cum neque, rem provident ex. Laboriosam perspiciatis modi eveniet in?</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Flipcards