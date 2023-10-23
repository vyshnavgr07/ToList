import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

const Addtask = ({addTask}) => {
    const [value,setvalue]=useState("");
    const addItem=()=>{
       addTask(value);
       setvalue("");
    }
  return (
    <>
    <div className='input-container'>
        <input type='text' className='input' placeholder='Add Your Task' 
        value={value}
       onChange={(e)=>{setvalue(e.target.value)}}
       />
        
        <Button onClick={addItem} variant="primary"  className='add-btn'>ADD</Button>
        </div>
    </>
  )
}

export default Addtask