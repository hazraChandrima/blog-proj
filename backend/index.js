const express=require('express')
const { default: mongoose } = require('mongoose')
const app=express()
const dotenv=require('dotenv')
const cors=require('cors')
// const path=require("path")
const cookieParser=require('cookie-parser')
const authRoute=require('./routes/auth')
const userRoute=require('./routes/users')
const postRoute=require('./routes/posts')   
 
//database
const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("database is connected successfully")
    } 
    catch(err){ 
        console.log(err) 
    }
}  

app.get('/', (req, res) => {       
    res.send('App.js');   
});
    

//middleware  
dotenv.config()
app.use(express.json())  
app.use(cookieParser()) 
app.use(cors({origin:"http://localhost:3000",credentials:true}))
app.use("/api/auth",authRoute)   
app.use("/api/users",userRoute)
app.use("/api/posts",postRoute)
 

app.listen(process.env.PORT,()=>{
    connectDB()
    console.log("app is running on port "+process.env.PORT)
})                  