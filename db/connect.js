const mongoose=require('mongoose')
const mongoUrl=process.env.MONGODB_URL

const ConnectDB=()=>{
 return  mongoose.connect(mongoUrl,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log("Db Connected")
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports=ConnectDB