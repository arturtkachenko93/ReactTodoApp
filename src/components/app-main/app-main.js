import React from "react";

import TaskList from "../todo-list";
import AppFooter from "../app-footer";
import './app-main.css';

const AppMain = ({ todos, onCompleted }) => {
  return (
    <section className='main' >
      <TaskList todos={ todos } onCompleted={onCompleted}/>
      <AppFooter />
    </section>
  )
};

export default AppMain;

