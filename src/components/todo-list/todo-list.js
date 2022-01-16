import React, {Component} from "react";

import Task from "../app-task";
import EditingPanel from "../editing-panel";
import './todo-list.css';


export default class TaskList extends Component {
  
  render() {
    const { todos, onCompleted, done } = this.props;
    
    let classNames = 'view';
    if (done === true) {
      classNames = 'completed';
    }
    const newTask = todos.map(item => {

      return (
        <li className={classNames} key={item.id}
            onClick={() => onCompleted(item.done)}>
          <Task
            id={item.id}
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
}