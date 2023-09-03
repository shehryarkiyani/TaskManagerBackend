const express=require('express')
const app=express()
require('dotenv').config()
const ConnectDB=require('./db/connect')
const ErrorHandler=require('./middlewares/error-handler')


const TaskRoutes=require('./routes/taskRoutes')

app.use(express.json())
app.use('/api/v1/tasks',TaskRoutes)
app.use(ErrorHandler)
const port=process.env.PORT || 3001

const start=async()=>{
    try{
await ConnectDB()
app.listen(port,()=>{
    console.log(`server listen on port ${port}`)
})
    }catch(err){
        console.log(err)
    }
}
start()
