import React from 'react'
import '../user-pages/Home.css'
import Flipcards from '../components/Flipcards'
import About from '../components/About'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

function Home() {
  return (
    <>
    <Header/>
    <div>
      <div style={{height:'400px',backgroundColor:'black',width:'100%'}}>
        <img className='object-fit-fill' src="https://navnitmaruti.com/web/images/maruti-service-1.jpg" height={'400px'} width={'100%'} alt="" />
        {/* <div class="img-overlayy">
          <button className="btn btn-md btn-danger rounded" style={{padding:'10px 20px',fontSize:'20px',fontWeight:'bold'}}>Book Now</button>
        </div> */}
      </div>
      <div className='mt-5 mb-5'>
        <Flipcards/>
      </div>
      <div className='mt-5 md-5'>
        <About/>
      </div>
      <div className='mt-5 md-5'>
        <Contact/>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Home