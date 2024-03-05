import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import { useState,useContext } from "react"
import axios from "axios"
import { URL } from "../url"
import { UserContext } from "../context/UserContext"


export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const navigate = useNavigate()
    const {setUser}=useContext(UserContext)



    const handleLogin=async(event)=>{
        event.preventDefault();
        try{
          const res=await axios.post(URL+"/api/auth/login",{email,password},{withCredentials:true})
        //   console.log(res.data)
          setUser(res.data)
          navigate("/profile/:id")

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
                                <div className="card-header px-auto">
                                    <h2 className='text-center p-2'>Log In</h2>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleLogin}>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">Email</label>
                                            <input onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" id="email" name="email" placeholder='email' required />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="password" className="form-label">Password</label>
                                            <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="password" name="password" placeholder='password' required />
                                        </div>
                                        <button onClick={handleLogin} className="btn btn-primary">Login</button>
                                    </form>
                                    {error && <h3 className="text-red-500 text-sm ">Something went wrong</h3>}
                                </div>
                                <p className='text-center'>New User? <Link className="nav-link fw-semibold text-decoration-underline" to="/register">Register</Link></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}
