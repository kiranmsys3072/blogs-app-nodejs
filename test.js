const mongoose=require('mongoose');

const BlogPost=require('./models/blogModel')
mongoose.connect('mongodb://127.0.0.1:27017/blogapp-db',{ useNewUrlParser: true ,'useUnifiedTopology': true}).then((res=>{
    console.log('db connected')
})).catch(err=>{
    console.log(err)
})

// BlogPost.create({
//     title: 'The Mythbuster’s Guide to Saving Money on Energy Bills',
//     body: 'If you have been here a long time, you might remember when I went on ITV Tonight to dispense a masterclass  saving money on energy bills. Energy-saving is one of my favourite money'
//     }).then((res)=>{
//         console.log("Datacreated")

//     })

// BlogPost.create({
//     title:"Cinema blog post",
//     body:"A blog is an informational website published on the World Wide Web consisting of discrete, often informal diary-style text entries (posts). Posts are typically displayed in reverse chronological order so that the most recent post appears first, at the top of the web page. Until 2009, blogs were usually the work of a single individual,[citation needed] occasionally of a small group, and often covered a single subject or topic. In the 2010s, (MABs) emerged, featuring the writing of multiple authors and sometimes professionally edited. MABs from newspapers, other media outlets, universities, think tanks, advocacy groups, and similar institutions account for an increasing quantity of blog traffic"
   
// },(err,blogData)=>{
//     console.log(err,blogData)
// })   //not working

//reading data from mongodb
// BlogPost.find({}, (error, blogspot) =>{
//     console.log(error,blogspot)
//     })  //not working

// BlogPost.find({}).then(result=>{
//     console.log(result)

// }) .catch((e) => {
//     console.error(e.message);
//   })

//single data

// BlogPost.find({_id: new mongoose.Types.ObjectId("649e8656b112170d212072ea")}).then(result=>{
//     console.log(result)

// }) .catch((e) => {
//     console.error(e.message);
//   })

//Find by id method

// var id = "649e8656b112170d212072ea";
// BlogPost.findById(id).then(obj=>{
//     console.log(obj)
// }).catch(err=>{
//     console.log(err)
// })

//Update data

// var id = "649e8656b112170d212072ea"

// BlogPost.findByIdAndUpdate(id,{
//     title:"New Title...."
// }).then(obj=>{
//         console.log("Updated",obj)
//     }).catch(err=>{
//         console.log(err)
//     })


// var id = "649e8391777fd7fc8ec2f09b";
// BlogPost.findByIdAndDelete(id)
// .then(obj=>{
//             console.log("Delted",obj)
//         }).catch(err=>{
//             console.log(err)
//         })