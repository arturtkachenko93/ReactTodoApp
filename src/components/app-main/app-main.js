import React from "react";

import TaskList from "../app-list-tasks";
import AppFooter from "../app-footer";
import './app-main.css';

const AppMain = ({ todos, onCompleted, onEdited, onEdit, onDeleted, doneCount, clearTasks, filter, onFilterChange }) => {
  return (
    <section className='main' >
      <TaskList
        todos={ todos }
        onCompleted={ onCompleted }
        onEdited={onEdited}
        onEdit={onEdit}
        onDeleted={ onDeleted }/>
      <AppFooter
        doneCount={doneCount}
        clearTasks={clearTasks}
        filter={filter}
        onFilterChange={onFilterChange}/>
    </section>
  )
};

export default AppMain;

