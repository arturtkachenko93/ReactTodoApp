import React from "react";

import NewTaskForm  from "../new-task-panel";
import './app-header.css';

const AppHeader = ({ onAddItem }) => {
  return (
    <header className='header'>
      <h1>todos</h1>
      <NewTaskForm
        onAddItem={onAddItem}/>
    </header>
  )
}

export default AppHeader;