import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import { useState } from 'react';
import axios from 'axios';
import {URL} from '../url'

export default function Register() {
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [error,setError]=useState(false)
    const navigate=useNavigate()

    const handleRegister=async (event)=>{
        event.preventDefault();
        
        try{
          const res=await axios.post(URL+"/api/auth/register",{username,email,password})
          setUsername(res.data.username)
          setEmail(res.data.email)
          setPassword(res.data.password)
          setError(false)
          navigate("/login")
          console.log(res.data)
          
        }
        catch(err){
          setError(true)
          console.log(err)
        }
    
      }


    return (
        <>
            <div className='container py-5'>
                <div className="container mt-5">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="text-center p-2">Create an account</h3>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleRegister}>
                                        <div className="form-group mb-3">
                                            <label htmlFor="username">Username:</label>
                                            <input onChange={(e)=>setUsername(e.target.value)} type="text" className="form-control" id="username" placeholder="Enter your username" required />
                                        </div>
                                        <div className="form-group mb-3">
                                            <label htmlFor="email">Email address:</label>
                                            <input onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" id="email" placeholder="Enter your email" required />
                                        </div>
                                        <div className="form-group mb-3">
                                            <label htmlFor="password">Password:</label>
                                            <input onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control" id="password" placeholder="Enter your password" required />
                                        </div>
                                        <button onClick={handleRegister} className="btn btn-primary btn-block">Sign Up</button>
                                    </form>
                                </div>
                                {error && <h3 className="text-red-500 text-sm ">Something went wrong</h3>}
                                <p className='text-center'>Already have an account?<Link className="nav-link fw-semibold text-decoration-underline" to="/login">Log In</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
