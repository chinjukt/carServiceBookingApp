import { BASE_URL } from "./base_url"
import { commonAPI } from "./commonAPI"

//register api
export const registerAPI = async(users)=>{
    return await commonAPI('POST',`${BASE_URL}/user/register`,users,"")
}

//login api
export const loginAPI = async(users)=>{
    return await commonAPI('POST',`${BASE_URL}/user/login`,users,"")
}

//add car api
export const addcarAPI = async(cars)=>{
    return await commonAPI('POST',`${BASE_URL}/admin/addcar`,cars,"")
}

//show all cars
export const allcarAPI = async()=>{
    return await commonAPI('GET',`${BASE_URL}/admin/allcars`,"","")
}

//delete  car
export const removecarAPI = async(id,reqHeader)=>{
    return await commonAPI('DELETE',`${BASE_URL}/admin/remove/${id}`,{},reqHeader)
}

//add services
export const addServiceAPI = async(reqBody,reqHeader)=>{
    return await commonAPI('POST',`${BASE_URL}/admin/services`,reqBody,reqHeader)
}


//show all services
export const allservicesAPI = async()=>{
    return await commonAPI('GET',`${BASE_URL}/admin/allservices`,"","")
}


//edit service
export const editserviceAPI = async(serviceid,reqBody,reqHeader)=>{
    return await commonAPI('PUT',`${BASE_URL}/admin/editservice/${serviceid}`,reqBody,reqHeader)
}

//delete  services
export const removeservicesAPI = async(id,reqHeader)=>{
    return await commonAPI('DELETE',`${BASE_URL}/admin/removeservice/${id}`,{},reqHeader)
}

//show all services
export const selecctedserviceAPI = async(id)=>{
    return await commonAPI('GET',`${BASE_URL}/admin/selectedservice/${id}`,"","")
}

//add booking details api
export const addbookingAPI = async(bookitem,reqHeader)=>{
    return await commonAPI('POST',`${BASE_URL}/admin/addbooking`,bookitem,reqHeader)
}

//show user booking api
export const userbookingAPI = async(reqHeader)=>{
    return await commonAPI('GET',`${BASE_URL}/admin/userbooking`,"",reqHeader)
}

//edit booking status
export const editbookingstatusAPI = async(bookingid,bookstatus)=>{
    return await commonAPI('PUT',`${BASE_URL}/admin/editbookingstatus/${bookingid}`,bookstatus,"")
}

//show all booking api
export const allbookingsAPI = async(searchkey)=>{
    return await commonAPI('GET',`${BASE_URL}/admin/allbookings?search=${searchkey}`,"","")
} 