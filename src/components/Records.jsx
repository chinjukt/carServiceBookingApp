
import React, { useEffect, useState } from 'react'
import { editbookingstatusAPI } from '../services/allAPI'

const Records = ({data , setactionstatus}) => {

    const [bookaccept,setbookaccept] = useState({
        bstatus:"accepted"
    })
    
    const [bookreject,setbookreject] = useState({
      bstatus:"rejected"
    })
    
    const [bookrcomplete,setbookrcomplete] = useState({
      bstatus:"completed"
    })

    // const [actionstatus,setactionstatus] = useState(false)

    
  const handleaccept = async(id)=>{
    
    const result = await editbookingstatusAPI(id,bookaccept)
    console.log(result);
    if(result.status===200)
    {
        alert('booking is accepted')
        // allbookingdata()
        setactionstatus(true)
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
        setactionstatus(true)
        // allbookingdata()
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
        // allbookingdata()
        setactionstatus(true)
    }
    else{
        console.log(result.response.data);
    }
  }
  
    
  return (  
    <table className="table">
        <thead>
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
            {data?.map(item => (
                <tr>
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
              </tr>
            ))}
        </tbody>
    </table>
  ) 
}

export default Records  