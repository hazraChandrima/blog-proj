// import { createContext, useState} from "react";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { URL } from "../url";

export const UserContext=createContext({})

export function UserContextProvider({children}){
    const [user,setUser]=useState(null)

    useEffect(()=>{
        getUser()
  
      },[])

    const getUser=async()=>{
        try{
          const res=await axios.get(URL+"/api/auth/refetch",{withCredentials:true})
          // console.log(res.data)
          setUser(res.data)
  
        }
        catch(err){
          console.log(err)
        }
      }
    return <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>
}

UserContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};