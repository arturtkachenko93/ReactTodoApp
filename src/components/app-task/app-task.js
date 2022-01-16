import React from "react";

import './app-task.css';

const Task = ({ id, description, time }) => {
  return (
      <div className='view'>
        <input className="toggle" type="checkbox" />
        <label id = {id}>
          <span className="description">{description}</span>
          <span className="created">{time}</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
  )
}

export default Task;