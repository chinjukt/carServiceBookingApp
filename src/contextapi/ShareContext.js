import React, { createContext, useState } from 'react'


export const isAuthTokenContext = createContext()
export const isadminAuthTokenContext = createContext()

function ShareContext({children}) {
    //children is predefind props used to share data between all components

   const [isAuthToken,setisAuthtoken] = useState(false)
   const [isadminAuthToken,setisadminAuthtoken] = useState(false)

  return (
    <>
    
        <isAuthTokenContext.Provider value={{isAuthToken,setisAuthtoken}}>
          <isadminAuthTokenContext.Provider value={{isadminAuthToken,setisadminAuthtoken}}>
            {children}
          </isadminAuthTokenContext.Provider>
        </isAuthTokenContext.Provider>
        
    </>
  )
}

export default ShareContext