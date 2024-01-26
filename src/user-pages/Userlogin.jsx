import React, { useContext, useEffect, useState } from 'react'
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { loginAPI } from '../services/allAPI';
import { isAuthTokenContext, isadminAuthTokenContext } from '../contextapi/ShareContext';

function Userlogin() {

  const {isAuthToken,setisAuthtoken} = useContext(isAuthTokenContext)

  const {isadminAuthToken,setisadminAuthtoken} = useContext(isadminAuthTokenContext)

  const [userdata,setUserdata] = useState({
    email:"",
    password:"",
    usertype:""

  })

  const navigate = useNavigate()

  const handleLogin = async(e)=>{
    e.preventDefault()

    const {email,password} = userdata 
    if(!email || !password)
    {
      alert("please fill rhe form completely")
    }
    else{
      if(email === 'admin@gmail.com')
      {
        userdata.usertype = 'admin'
      }
      else{
        userdata.usertype = 'customer'
      }

      const result = await loginAPI(userdata)
      console.log(result);
      // alert(isadminAuthToken)
      if(result.status===200)
      {
        sessionStorage.setItem("existing_data",JSON.stringify(result.data.existing_user))
        sessionStorage.setItem("token",result.data.token)
        sessionStorage.setItem("usertype",result.data.usertype)
        alert("login successfull")

        setUserdata({
            email:"",password:"",usertype:""
        })
        // alert(result.data.usertype)
        if(result.data.usertype == 'admin')
        {
          setisadminAuthtoken(true)
          // alert(isadminAuthToken)
          setTimeout(()=>{
            navigate('/dashboard')  
          },1000)
        }
        else{
          setisAuthtoken(true)
          setTimeout(()=>{
            navigate('/')  
          },1000)
        }
        

      }
      else{
          alert(result.response.data)
      }
    }
  }

  // useEffect(()=>{
  //   if(isadminAuthToken == true){
  //   navigate('/dashboard')
  //   }
  // },[])

  return (
    <>
    <Header/>
    <div className='d-flex justify-content-center'>
      <div className='card shadow p-3 ms-3 me-3 w-50 mt-5 mb-5 '>
    
          <h1 className='text-primary text-center'>Login Here</h1>
          <Form action="">
                        
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" onChange={(e)=>setUserdata({...userdata,email:e.target.value})}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Password</Form.Label>
          <Form.Control type="Password" placeholder="enter your password" onChange={(e)=>setUserdata({...userdata,password:e.target.value})}/>
          </Form.Group>

         <div className='d-flex justify-content-between align-items-center'> 
          <button onClick={handleLogin} className='mt-4 btn btn-primary'>Login</button>
          
          <p className=' text-secondary mt-3'>New user? Click here to <Link to={'/register'}>Register</Link></p>
        </div>
          

       </Form>   
      </div>
      </div>
      <Footer/>
    </>
  )
}

export default Userlogin