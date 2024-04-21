import { Link, useNavigate } from 'react-router-dom'
import { useContext } from "react"
import { UserContext } from '../context/UserContext';
import axios from "axios"
import { URL } from "../url"

export default function Navbar() {
    const {user}=useContext(UserContext)
    const {setUser}=useContext(UserContext)
    const navigate=useNavigate()


    const handleLogout=async()=>{
        try{
          const res=await axios.get(URL+"/api/auth/logout",{withCredentials:true})
          console.log(res)
          setUser(null)
          navigate("/")
      
        }
        catch(err){
          console.log(err)
        }
      }
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg bg-dark border-bottom border-body bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">BlogSpace</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                {user? <Link className="nav-link" to={"/profile/"+user._id}>Profile</Link>:""}
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                        </ul>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            {user? <Link className="nav-link" to="/write"><button className="btn btn-info me-md-2" type='button'>Write a Blog</button></Link> :<Link className="nav-link" to="/login"><button className="btn btn-info me-md-2" type="button">Log In</button></Link>}
                            {user? <Link className="nav-link" to="/"><button onClick=
                            {handleLogout} className="btn btn-outline-light me-md-2" type='button'>Log Out</button></Link> :<Link className="nav-link" to="/register">  <button className="btn btn-outline-light" type="button">Sign Up</button></Link>}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
