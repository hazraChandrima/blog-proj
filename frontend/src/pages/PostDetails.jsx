import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useParams, useNavigate } from 'react-router-dom'
import axios from "axios"
import { useEffect, useState, useContext } from 'react'
import { URL } from '../url';
import { UserContext } from "../context/UserContext"


export default function PostDetails() {

    const postId = useParams().id
    const [post, setPost] = useState({});
    console.log(postId)
    const { user } = useContext(UserContext)
    const navigate = useNavigate()


    const fetchPost = async () => {
        try {
            const res = await axios.get(URL + "/api/posts/" + postId)
            // console.log(res.data)
            setPost(res.data)
        }
        catch (err) {
            console.log(err)
        }
    }

    const handleDeletePost = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.delete(URL + "/api/posts/" + postId, { withCredentials: true })
            console.log(res.data)
            navigate("/profile/"+user._id)

        }
        catch (err) {
            console.log(err)
        }

    }


    useEffect(() => { fetchPost(); }, [postId])

    return (
        <>
            <Navbar brand=" BlogSpace" />
            <div className='container py-5'>
                <div className="container mt-4">
                    {/* <!-- Blog Post Header --> */}
                    <header className="text-center">
                        <h1 className="display-4">{post.title}</h1>
                        <p className="lead">Published by {post.username} on August 15, 2024</p>
                    </header>
                    {/* <!-- Blog Post Content --> */}
                    <div className="mt-4">
                        <p>{post.desc}</p>
                        <div className="d-flex justify-content-between align-items-center">
                        </div>
                        {user?._id === post?.userId && <div className="btn-group">
                            <button onClick={() => navigate("/edit/" + postId)} className="btn btn-outline-secondary ml-2">Edit</button>
                            <button onClick={handleDeletePost} className="btn btn-outline-danger ml-2">Delete</button>
                        </div>}
                        {/* <!-- Add more content here --> */}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
