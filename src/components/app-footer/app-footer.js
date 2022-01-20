import React from "react";

import TaskFilters from "../task-filters";
import './app-footer.css';

const AppFooter = ({ doneCount, clearTasks, filter, onFilterChange }) => {
  
  let todoCount = 'Нет задач!'
  if(doneCount) {
    todoCount = `${doneCount} items left`
  }
  
  return (
    <footer className="footer">
      <span className="todo-count">{todoCount}</span>
      <TaskFilters filter={filter} onFilterChange={onFilterChange}/>
      <button className="clear-completed" onClick={clearTasks}>Clear completed</button>
    </footer>
  )
}

export default AppFooter;