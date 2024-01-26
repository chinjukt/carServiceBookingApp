
import React, { useState } from "react";
import { Form } from 'react-bootstrap';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { registerAPI } from "../services/allAPI";
import { useNavigate } from "react-router-dom";

function Register() {

  const [userdata,setUserdata] = useState({
    name:"",
    phoneNumber:"",
    email:"",
    password:""
  })

  const navigate = useNavigate()

  console.log(userdata);

  const handleRegister = async(e)=>{
    e.preventDefault()
    const {name,phoneNumber,email,password} = userdata

    if(!name || !phoneNumber || !email || !password)
    {
      alert('Please fill the form completely')
    }
    else{
      const result = await registerAPI(userdata)
      console.log(result);
      if(result.status ===200)
      {
        alert(`${result.data.name} registered successfully`)
        setUserdata({
          name:"",
          phoneNumber:"",
          email:"",
          password:""
        })
        navigate('/login')
      }
      else{
        alert(`${result.response.data}`)
      }
    }
  }

  
  return (
   <>
   <Header/>
    <div className='d-flex justify-content-center'>
      <div className='card shadow p-3 ms-3 me-3 w-50 mt-5 mb-5 '>
    
          <h1 className='text-primary text-center'>Sign Up Here</h1>
          <Form action="">

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="enter your fullname" onChange={(e)=>setUserdata({...userdata,name:e.target.value})} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="mobile" placeholder="enter your Mobile Number" onChange={(e)=>setUserdata({...userdata,phoneNumber:e.target.value})} />
          </Form.Group>
                        
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" onChange={(e)=>setUserdata({...userdata,email:e.target.value})} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
          <Form.Label>Password</Form.Label>
          <Form.Control type="Password" placeholder="enter your password" onChange={(e)=>setUserdata({...userdata,password:e.target.value})} />
          </Form.Group>

         <div className='d-flex justify-content-between align-items-center'> 
          <button onClick={handleRegister} className='mt-4 btn btn-primary'>Register</button>
         
          </div>
          

       </Form>   
      </div>
      </div>
      <Footer/>
   </>
  )
}

export default Register