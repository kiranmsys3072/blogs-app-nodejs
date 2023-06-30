const express = require('express');
const path=require('path');
const ejs=require('ejs');
const app = express();
const mongoose=require('mongoose');
const BlogPost=require('./models/blogModel')
const fileUpload=require('express-fileupload')

const bodyParser =
require('body-parser')

//file upload middleware
app.use(fileUpload())

//bodyparser middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//static
app.use('/',express.static('public'))

//setting view engine to ejs
app.set("view engine", "ejs");

//mongodb connection

mongoose.connect('mongodb://127.0.0.1:27017/blogapp-db',{ useNewUrlParser: true ,'useUnifiedTopology': true}).then((res=>{
    console.log('db connected')
})).catch(err=>{
    console.log(err)
})



app.get('/', async function (req, res) {
  //res.sendFile(path.resolve(__dirname,"index.html"))
  const blogPosts=await BlogPost.find()
  res.render('index',{blogPosts})
  //console.log(blogPosts)
  
})
//single post
app.get('/post/:id', async  (req, res) =>{
  const blogPost=await BlogPost.findById(req.params.id)

  //res.sendFile(path.resolve(__dirname,"post.html"))
  res.render('post',{blogPost})
})
app.get('/contact', function (req, res) {
 // res.sendFile(path.resolve(__dirname,"contact.html"))
 res.render('contact')
})
app.get('/about', function (req, res) {
  //res.sendFile(path.resolve(__dirname,"about.html"))
  res.render('about')
})

app.get('/new/post', function (req, res) {
  //res.sendFile(path.resolve(__dirname,"about.html"))
  res.render('newpost')
})

//.then approach
// app.post('/post/store',function(req,res){
//   //console.log(req.body)
//   BlogPost.create(req.body)
//   .then(result=>{
//     res.redirect('/')
//    }).catch(err=>{
//     res.send(err)
//   })

  

// })

//async await approach

app.post('/post/store',async(req,res)=>{

  let image=req.files.image
  image.mv(path.resolve(__dirname,"public/img",image.name))

  await BlogPost.create({...req.body,image: '/img/' + image.name})
  res.redirect('/')

})

//get all posts




app.listen(3000)