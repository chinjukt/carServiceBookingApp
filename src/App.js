
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './user-pages/Home'
import Dashboard from './admin-pages/Dashboard'
import Services from './admin-pages/Services'
import Vehicle from './admin-pages/Vehicle'
import Bookings from './admin-pages/Bookings'



import Carservices from './user-pages/Carservices'
import Mybookings from './user-pages/Mybookings'
import Register from './user-pages/Register'
import Userlogin from './user-pages/Userlogin'
import Footer from './components/Footer';
import Header from './components/Header';
import Booknow from './user-pages/Booknow';
import { isAuthTokenContext } from './contextapi/ShareContext';
import { useContext } from 'react';
import Allbooking from './admin-pages/Allbooking';


function App() {

  const {isAuthToken,setisAuthtoken} = useContext(isAuthTokenContext)
  const {isadminAuthToken,setisadminAuthtoken} = useContext(isAuthTokenContext)

  return (
    <div>
      {/* <Header/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
     
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/vehicles' element={<Vehicle/>}/>
        {/* <Route path='/all' element={<Bookings/>}/> */}
        <Route path='/allbookings' element={<Allbooking/>}/>
        
        <Route path='/carservices' element={<Carservices/>}/>
        <Route path='/mybookings' element={<Mybookings/>}/>
        <Route path='/register' element={<Register/>}/>
        
        <Route path='/login' element={<Userlogin/>}/>
        
        <Route path='/booknow/:id' element={isAuthToken?<Booknow/>:<Userlogin/>}/>


      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
