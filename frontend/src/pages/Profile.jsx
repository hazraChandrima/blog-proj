import { useContext, useEffect, useState } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import ProfilePosts from "../components/ProfilePosts"
import axios from "axios"
import { URL } from "../url"
import { UserContext } from "../context/UserContext"
import { useNavigate, useParams , Link} from "react-router-dom"


const Profile = () => {
    const param = useParams().id
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { user, setUser } = useContext(UserContext)
    const navigate = useNavigate()
    const [posts, setPosts] = useState([])
    const [updated, setUpdated] = useState(false)
    // console.log(user)


    const fetchPosts=async()=>{
        try{
          const res=await axios.get(URL+"/api/posts/user/"+user._id)
          // console.log(res.data)
          setPosts(res.data)
          
        }
        catch(err){
          console.log(err)
        }
      }
      useEffect(()=>{
        fetchPosts()
      },[])

    const fetchProfile = async () => {
        try {
            const res = await axios.get(URL + "/api/users/" + user._id)
            setUsername(res.data.username)
            setEmail(res.data.email)
            setPassword(res.data.password)
        }
        catch (err) {
            console.log(err)
        }
    }

    const handleUserUpdate = async (event) => {
        event.preventDefault();
        setUpdated(false)
        try {
            const res = await axios.put(URL + "/api/users/" + user._id, { username, email, password }, { withCredentials: true })
            console.log(res.data)
            setUpdated(true)

        }
        catch (err) {
            console.log(err)
            setUpdated(false)
        }

    }

    const handleUserDelete = async (event) => {
        event.preventDefault();
        try {
            const res = await axios.delete(URL + "/api/users/" + user._id, { withCredentials: true })
            setUser(null)
            navigate("/")
            console.log(res.data)

        }
        catch (err) {
            console.log(err)
        }
    }
    // console.log(user)
    const fetchUserPosts = async () => {
        try {
            const res = await axios.get(URL + "/api/posts/user/" + user._id)
            // console.log(res.data)
            setPosts(res.data)


        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchProfile()

    }, [param])

    useEffect(() => {
        fetchUserPosts()

    }, [param])

    return (
        <>
            <Navbar brand="BlogSpace" />
            <div className='conatiner mt-5'>
                <div className="container pt-5">
                    <div className="row">
                        <h1>Welcome to your BlogSpace!</h1>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <Link className="nav-link" to="/write"><button className="btn btn-success btn-lg">Create a new Blog</button></Link>
                        </div >
                        <div className="col-lg-8 pt-4">
                            {/* <!-- Blog Post Loop --> */}
                            {/* {posts?.map((p) => (
                            <ProfilePosts key={p._id} p={p} /> */}
                           { posts.map((post) => (
                                <>
                                <Link to={user?`/posts/post/${post._id}`:"/login"}>
                                <ProfilePosts key={post._id} post={post}/>
                                </Link>
                                </>
                                
                              )
                        )}
                        </div>
                        {/* <!-- Sidebar --> */}
                        <div className="col-md-4 pt-4 pb-2">
                            <div className="card ms-5">
                                <div className="card-body">
                                    <h5 className="card-title">About the Author</h5>
                                    <p className="card-text">A short bio about yourself or the blog author.</p>
                                </div>
                            </div>
                            <div className="card my-5 ms-5">
                                <div className="card-header fw-semibold fs-4">
                                    Profile
                                </div>
                                <ul className="list-group list-group-flush">
                                <li className="list-group-item"><input onChange={(e) => setUsername(e.target.value)} value={username} className="form-control" placeholder="Your username" type="text" /></li>
                                <li className="list-group-item"><input onChange={(e) => setEmail(e.target.value)} value={email}className="form-control" placeholder="Your email" type="text" /></li>
                                        <button onClick={handleUserUpdate} className="btn btn-secondary mx-3">Update</button>
                                        <button onClick={handleUserDelete} className="btn btn-danger mx-3 my-3">Delete</button>
                                </ul>
                                {updated && <h3 className=" mx-4">user updated successfully!</h3>}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Profile