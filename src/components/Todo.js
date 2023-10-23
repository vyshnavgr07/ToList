import React, { useState } from 'react'
import './Todo.css'
import Addtask from './Addtask'
import Listtask from './Listtask'
import Bar from "./Bar"


const Todo = () => {
  const [tasks,settasks]=useState([
     ]);
  const addTask =(title)=>{
const newTask=[...tasks,{title}]
  settasks(newTask);
  }

  const removeTask=(index)=>{
  const newTask=[...tasks,]
   newTask.splice(index,1);
   settasks(newTask)
  }


  return (
    <>
    <Bar />
   <div  className='todo-container'>
        <Bar />
      <div className='add-task'>
       <Addtask  addTask={addTask} 
      
       />
       </div>


       <div className='tasks'>
        
        {tasks.map((x ,index)=>(
           <Listtask task={x} removeTask={removeTask}  index={index} key={index}/>
        ))}
       
       </div>
    </div>
    </>
  )
}

export default Todo