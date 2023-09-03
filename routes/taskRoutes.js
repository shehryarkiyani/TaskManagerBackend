const express=require('express')
const router=express.Router();
const {GetAllTask,GetTaskById,AddTask,UpdateTask,DeleteTask}=require('../controllers/taskControllers')

router.get('/',GetAllTask)
router.get('/:id',GetTaskById)
router.post('/',AddTask)
router.patch('/:id',UpdateTask)
router.delete('/:id',DeleteTask)



module.exports=router