import React, {Component} from "react";

import './app-task.css';

export default class Task extends Component {
  
  render() {
    const { description, time  } = this.props;

    return (
      <div className='view'>
        <input className="toggle" type="checkbox" />
        <label>
          <span
            className="description">
            {description}
          </span>
          <span className="created">{time}</span>
        </label>
          <button className="icon icon-edit"/>
          <button className="icon icon-destroy" />
      </div>
    )
  }
}