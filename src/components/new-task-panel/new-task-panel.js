import React, {Component} from "react";

import './new-task-panel.css';

export default class NewTaskForm extends Component {
  
  state = {
    description: ''
  }
  
  onDescriptionChange = (e) => {
    this.setState({
      description: e.target.value
    })
  }
  
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAddItem(this.state.description);
    this.setState({
      description: ''
    })
  }
  
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className='new-todo'
          placeholder='What needs to be done?'
          autoFocus
          onChange={this.onDescriptionChange}
          value={this.state.description}/>
      </form>
    );
  }
}
