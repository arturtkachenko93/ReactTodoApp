import React from "react";

import NewTaskForm  from "../new-task-panel";
import './app-header.css';

const AppHeader = () => {
  return (
    <header className='header'>
      <h1>todos</h1>
      <NewTaskForm  />
    </header>
  )
}

export default AppHeader;