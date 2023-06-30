const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const BlogPostSchema=new Schema({
    title:String,
    body:String,
    username:{
        type:String,
        default:"raj"
    },
    datePosted:{ 
    type: Date,
    default: new Date()
},
image:String

})
const blogPost=mongoose.model('BlogPost',BlogPostSchema)
module.exports=blogPost;

