import React, { useState, useEffect, useContext } from 'react'
import Records from '../components/Records';
import Pagination from '../components/Pagination';
import { allbookingsAPI, editbookingstatusAPI } from '../services/allAPI'
import Sidebar from '../components/Sidebar'
import { isadminAuthTokenContext } from '../contextapi/ShareContext'
import { useNavigate } from 'react-router-dom'

function Allbooking() {

  const {isadminAuthToken,setisadminAuthtoken} = useContext(isadminAuthTokenContext)
  const navigate = useNavigate()

  const [searchkey,setsearchkey] = useState("")

  const [actionstatus,setactionstatus] = useState(false)

    // To hold the actual data
    const [allbooking,setallbookings] = useState([])
    const [loading, setLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(8);

    const allbookingdata = async()=>
    {
      const result = await allbookingsAPI(searchkey)
      console.log(result.data);
      setallbookings(result.data)
      setLoading(false);
    }
    


    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = allbooking.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(allbooking.length / recordsPerPage)


    useEffect(()=>{
      allbookingdata()
      setactionstatus(false)
    },[searchkey,actionstatus])

    useEffect(()=>{
      !isadminAuthToken &&
        navigate('/login')
    },[])

    return (

      <div className='d-flex justify-content-evently'>
        <div className='bg-primary' style={{height:'100vh'}}><Sidebar/></div>
        
        <div className='m-5 w-100'>
          
          <div className='d-flex justify-content-around'>
            <div className='w-100'><h3 className='fw-bold text-primary'>Bookings</h3></div>

            <div className='w-100'> 
              {/* <div className='d-flex justify-content-eventy'>
                <div><input type="text" className='form-control' placeholder='search here' /></div>
                <div><button className='btn btn-sucess'><i className="fa-solid fa-magnifying-glass p-2" style={{color:'white',backgroundColor:'blue'}}></i></button></div>
              </div>   */}
              <input type="text" className='form-control' placeholder='search here' value={searchkey} onChange={(e)=>setsearchkey(e.target.value)}/>
            </div>

          </div>

          <div className='ms-5 mt-5'>
            <div className='container mt-5'>
                {/* <h2> Simple Pagination Example in React </h2> */}
                <Records data={currentRecords} setactionstatus={setactionstatus}/>
                <Pagination
                    nPages={nPages}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>
          
        </div>
      </div>
    );
}

export default Allbooking;