import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { URL } from '../url'
import axios from 'axios'
import {  useNavigate } from 'react-router-dom'

const CreatePost = () => {
   
    const [title,setTitle]=useState("")
    const [desc,setDesc]=useState("")
    const {user}=useContext(UserContext)
    const navigate=useNavigate()

    const handleCreate=async (e)=>{
      e.preventDefault();
        const post={
          title,
          desc,          
          username:user.username,
          userId:user._id,
        }
              
        //post upload
        // console.log(post)
        try{
          const res=await axios.post(URL+"/api/posts/create",post,{withCredentials:true})
          navigate("/posts/post/"+res.data._id)
          // console.log(res.data)

        }
        catch(err){
          console.log(err)
        }
    }


  return (
    <>
      <Navbar brand=" BlogSpace" />
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h2 className="text-center my-5">Create New Blog Post</h2>
            <form>
              <div className="form-group mb-3">
                <label htmlFor="postTitle">Title:</label>
                <input onChange={(e)=>setTitle(e.target.value)} type="text" className="form-control" id="postTitle" placeholder="Enter the title of your blog post" required />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="postContent">Content:</label>
                <textarea  onChange={(e)=>setDesc(e.target.value)} className="form-control" id="postContent" rows="5" placeholder="Write your blog post content here" required></textarea>
              </div>
              <button onClick={handleCreate}  className="btn btn-primary btn-block">Publish Post</button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default CreatePost;