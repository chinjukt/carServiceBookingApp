import React from 'react'

function About() {
  return (
    <>
    <div className='container-fluid mt-5 mb-5'>
        <h2 className='text-center text-primary mt-5 mb-5'>About Us</h2>
        <div className='row shadow'>
            <div className='col-md-6 mt-5 mb-5'>
                <div className='mt-3 mb-5 p-4 ml-5'>
                    <p className='fs-5' style={{textAlign:'justify'}}>Our trained technicians at ShineMe, can service any car. We drive on the know-how and technology of the ShineMe network to offer you excellent performance at a fair price.</p>
                    <p className='fs-5' style={{textAlign:'justify'}}>With our wide range of expert services, we can offer everything you could possibly need for your car and car service - from inspection, periodic maintenance, accidental repairs, replacement of genuine auto parts, value added services that puts and extra smile on your face.</p>
                </div>
            </div>
            <div className='col-md-6'>
                <div className='mt-5 mb-5 w-100'>
                    <img className='object-fit-cover border rounded' src="https://png.pngtree.com/thumb_back/fh260/background/20230411/pngtree-car-repair-service-image_2364299.jpg" alt="no image" />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About