import Task from "../app-task";
import EditingPanel from "../editing-panel";
import './todo-list.css';

const TaskList = ({ todos }) => {

  const newTask = todos.map(item => {
    return (
      <li className={item.status}>
        <Task
         label={item.id}
         description = {item.description}
         time = {item.time} />
        <EditingPanel/>
      </li>
    )
  })
  
  return (
    <ul className="todo-list">
      {newTask}
    </ul>
  )
}

export default TaskList;