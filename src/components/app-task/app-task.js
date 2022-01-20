import React, {Component} from "react";
import './app-task.css';

export default class Task extends Component {
  state = {
    inputValue: this.props.description,
  };
  
  
  render() {
    const { inputValue } = this.state;
    const { description, time, id, done, edit, onCompleted, onEdited, onEdit, onDeleted  } = this.props;
    this.onSubmit = (e) => {
      e.preventDefault();
      onEdit(id, inputValue);
      onEdited(id);
    };
    
    this.onChange = (e) => {
      this.setState({ inputValue: e.target.value });
    };
    
    const inputString = (
      <form onSubmit={this.onSubmit}>
        <input type="text" className="edit" onChange={this.onChange} value={inputValue} />
      </form>
    );
  
    let classNames = '';
    let isChecked = false;
    
    if (done) {
      classNames += 'completed';
      isChecked = true;
    }

    if (edit) {
      classNames += 'editing';
    }
    
    return (
      <li className={classNames} key={id}>
        <div className='view'>
          <input className="toggle" type="checkbox" checked={isChecked} onChange={onCompleted}/>
          <label>
          <span
            className="description">
            {description}
          </span>
            <span className="created">{time}</span>
          </label>
          <button className="icon icon-edit" onClick={onEdited}/>
          <button className="icon icon-destroy" onClick={onDeleted}/>
        </div>
        {edit ? inputString : null}
      </li>
    )
  }
}