import React from "react";

import Task from "../app-task";
import './app-list-tasks.css';


const TaskList = ({ todos, onCompleted, onEdited, onEdit, onDeleted }) => {
  const newTask = todos.map(item => {
    const { id, description, time, done, edit} = item;
    return (
        <Task
          onCompleted={ ()=>onCompleted(id) }
          onDeleted={ ()=>onDeleted(id) }
          onEdited={ ()=>onEdited(id) }
          onEdit={onEdit}
          id={id}
          key={ id }
          description = { description }
          time = { time }
          done={ done }
          edit={edit}/>
    )
  })

  return (
    <ul className="todo-list">
      {newTask}
    </ul>
  )
}

export default TaskList;