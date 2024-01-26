




import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { allbookingsAPI, editbookingstatusAPI } from '../services/allAPI'
import { isadminAuthTokenContext } from '../contextapi/ShareContext'
import { useNavigate } from 'react-router-dom'
import { Pagination } from 'react-bootstrap'


function Bookings() {

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
  
    const itemsPerPage = 5; 
    // alert(itemsPerPage)

  const {isadminAuthToken,setisadminAuthtoken} = useContext(isadminAuthTokenContext)

  const navigate = useNavigate()

  const [allbooking,setallbookings] = useState([])

  const [bookaccept,setbookaccept] = useState({
    bstatus:"accepted"
})

const [bookreject,setbookreject] = useState({
  bstatus:"rejected"
})

const [bookrcomplete,setbookrcomplete] = useState({
  bstatus:"completed"
})

const [searchkey,setsearchkey] = useState("")
console.log(searchkey);

  const allbookingdata = async()=>
  {
    const result = await allbookingsAPI(searchkey)
    console.log(result.data);
    setallbookings(result.data)
    setPageCount(Math.ceil(allbooking.length / 5));
    alert(pageCount)
  }

  const handleaccept = async(id)=>{
    
    const result = await editbookingstatusAPI(id,bookaccept)
    console.log(result);
    if(result.status===200)
    {
        alert('booking is accepted')
        allbookingdata()
    }
    else{
        console.log(result.response.data);
    }
  }

  const handlereject = async(id)=>{
    
    const result = await editbookingstatusAPI(id,bookreject)
    console.log(result);
    if(result.status===200)
    {
        alert('booking is rejcted')
        allbookingdata()
    }
    else{
        console.log(result.response.data);
    }
  }

  const handlecomplete = async(id)=>{
    
    const result = await editbookingstatusAPI(id,bookrcomplete)
    console.log(result);
    if(result.status===200)
    {
        alert('booking is completed')
        allbookingdata()
    }
    else{
        console.log(result.response.data);
    }
  }

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  useEffect(()=>{
    allbookingdata()
  },[searchkey])

  useEffect(()=>{
    !isadminAuthToken &&
      navigate('/login')
  },[])

  return (
    <>
      <div className='d-flex justify-content-evently'>
        <div className='bg-primary' style={{height:'auto'}}><Sidebar/></div>
        
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
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Booking Id</th>
                  <th scope="col">Customer Name</th>
                  <th scope="col">Address</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">Date</th>
                  <th scope="col">Car & CAR number</th>
                  <th scope="col">Service</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                  <th scope="col">Actions</th>
                  
                </tr>
              </thead>
              <tbody>
              { allbooking?.length>0?
              allbooking.map((item)=>(<tr>
                <th scope="row">{item._id}</th>
                <td>{item.customername}</td>
                <td>{item.address}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.bookeddate}</td>
                <td>{item.carname} - {item.carnumber}</td>
                <td>{item.servicename}</td>
                <td>{item.price}</td>
                <td>{item.bookingstatus}</td>
                <td>
                {item.bookingstatus=="cancelled" || item.bookingstatus=="completed" &&
                  <button className='btn btn-primary me-3' disabled onClick={()=>handleaccept(item._id)}>Accept</button>
                }

                {item.bookingstatus=="cancelled" || item.bookingstatus=="completed" &&
                  <button className='btn btn-danger' disabled onClick={()=>handlereject(item._id)}>Reject</button>
                }

                {item.bookingstatus=="accepted" &&
                  <button className='btn btn-success me-3' onClick={()=>handlecomplete(item._id)}>completed</button>
                }

                {item.bookingstatus=="accepted" &&
                  <button className='btn btn-danger' onClick={()=>handlereject(item._id)}>Reject</button>
                }

                {item.bookingstatus=="rejected" &&
                  <button className='btn btn-danger me-3' disabled onClick={()=>handlereject(item._id)}>Reject</button>
                }

                {item.bookingstatus=="rejected" &&
                  <button className='btn btn-primary me-3' onClick={()=>handleaccept(item._id)}>Accept</button>
                }

                {item.bookingstatus=="pending" &&
                  <button className='btn btn-primary me-3' onClick={()=>handleaccept(item._id)}>Accept</button>
                }

                {item.bookingstatus=="pending" &&
                  <button className='btn btn-danger me-3' onClick={()=>handlereject(item._id)}>Reject</button>
                }


                  
                </td>
              </tr>))
                :
              <tr>No Booking Added Yet</tr>}
                
              </tbody>
            </table>
            <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Bookings












// import { useEffect, useState } from 'react'
// import Post from '../components/Post';
// import Pagination from '../components/Pagination';
// import React, { useContext } from 'react'
// import Sidebar from '../components/Sidebar'
// import { allbookingsAPI } from '../services/allAPI'
// import { useNavigate } from 'react-router-dom'

// function Allbookings() {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [postsPerPge, SetPostsPerPage] = useState(10);

// //   useEffect(() => {
// //     const fetchPosts = async () => {
// //       setLoading(true);
// //       try {
// //         const response = await fetch("https://jsonplaceholder.typicode.com/posts");
// //         const data = await response.json();
// //         setPosts(data);
// //         setLoading(false)
// //       } catch (error) {
// //         console.log(error);
// //       }
// //     }
// //     fetchPosts();
// //   }, [])

  




//   const navigate = useNavigate()

//   const [allbooking,setallbookings] = useState([])



// const [searchkey,setsearchkey] = useState("")
// console.log(searchkey);

//   const allbookingdata = async()=>
//   {
//     const result = await allbookingsAPI(searchkey)
//     console.log(result.data);
//     setallbookings(result.data)
    
//   }


//   const indexOfLastPost = currentPage * postsPerPge;
//   const indexOfFirstPost = indexOfLastPost - postsPerPge;
//   const currentPosts = allbooking.slice(indexOfFirstPost, indexOfLastPost);

//   const handlePagination = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   }



//   useEffect(()=>{
//     allbookingdata()
//   },[searchkey])

  

//   return (
//     <div className='d-flex justify-content-evently'>
//         <div className='bg-primary' style={{height:'auto'}}><Sidebar/></div>
        
//         <div className='m-5 w-100'>
          
//           <div className='d-flex justify-content-around'>
//             <div className='w-100'><h3 className='fw-bold text-primary'>Bookings</h3></div>

//             <div className='w-100'> 
              
//               <input type="text" className='form-control' placeholder='search here' value={searchkey} onChange={(e)=>setsearchkey(e.target.value)}/>
//             </div>

//           </div>

//           <div className='ms-5 mt-5'>


//             <Post posts={currentPosts} loading={loading} />
//             <Pagination length={posts.length} postsPerPage={postsPerPge} handlePagination={handlePagination} currentPage={currentPage} />
//     </div>
          
//         </div>
//       </div>
//   )
// }

// export default Allbookings