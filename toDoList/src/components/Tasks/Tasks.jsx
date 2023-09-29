import React from 'react'
import './task.css'
const Tasks = ({title, completed}) => {
  return (
    <div>
        <p>
            <span>{title} </span>
            <span className='estado'>{completed ? "completed" : "to Do"}</span>
        </p>
    </div>
  )
}

export default Tasks