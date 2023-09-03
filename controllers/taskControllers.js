const Task=require('../models/taskModel')
const AsyncWrapper=require('../middlewares/async')

const GetAllTask =AsyncWrapper( async (req, res) => {
    let tasks=await Task.find()
    return res.status(201).json({ tasks });
    
  });
const GetTaskById =AsyncWrapper( async (req, res) => {
    let tasks=await Task.findById({_id:req.params.id})
    if(!tasks){
        return res.status(404).json({ msg:`No task found with the id ${req.params.id}` });
    }
    return res.status(201).json({ tasks });
});
const UpdateTask = AsyncWrapper(async (req, res) => {
    let response=await Task.findOneAndUpdate({_id:req.params.id},req.body,{
        new:true,
        runValidators:true
    })
    if(!response){
        return res.status(404).json({msg:`No task found with id ${req.params.id}`})
    }
  return  res.status(201).json(response)
});
const AddTask = AsyncWrapper(async (req, res) => {
    let response=await Task.create(req.body)
    res.status(201).json(response)
    });
  const DeleteTask = AsyncWrapper(async (req, res) => {
    let tasks=await Task.findById({_id:req.params.id})
    if(!tasks){
        return res.status(401).json({msg:`No task found with the id ${req.params.id}`})
    }
    let deleteTask=await Task.findByIdAndDelete({_id:req.params.id})
    return res.status(201).json({ deleteTask });
  });
module.exports = {
  GetAllTask,
  GetTaskById,
  AddTask,
  UpdateTask,
  DeleteTask
};
