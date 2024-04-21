const { default: mongoose }=require('mongoose')

const PostSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    desc:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type:String,
        required:true,  
    },
    userId:{
        type:String,
        required:true,  
    }
})

module.exports=mongoose.model("Post",PostSchema)