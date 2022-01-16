import React from "react";

import TaskList from "../todo-list";
import AppFooter from "../app-footer";
import './app-main.css';

const AppMain = ({ todos }) => {
  return (
    <section className='main' >
      <TaskList todos={ todos } />
      <AppFooter />
    </section>
  )
};

export default AppMain;

