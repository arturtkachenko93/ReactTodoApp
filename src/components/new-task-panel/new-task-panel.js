import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './new-task-panel.css';

export default class NewTaskForm extends Component {
  static defaultProps = {
    onAddItem: () => {},
  };

  state = {
    description: '',
    placeholder: 'What needs to be done?',
  };

  onDescriptionChange = (e) => {
    this.setState({
      description: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.description.length <= 3) {
      this.setState({
        description: '',
        placeholder: 'Нужно больше текста, бро ... :(',
      });
      return;
    }

    this.props.onAddItem(this.state.description);
    this.setState({
      description: '',
      placeholder: 'What needs to be done?',
    });
  };

  render() {
    const { placeholder } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <input
          className="new-todo"
          placeholder={placeholder}
          autoFocus
          onChange={this.onDescriptionChange}
          value={this.state.description}
        />
      </form>
    );
  }
}

NewTaskForm.propTypes = {
  onAddItem: PropTypes.func,
};
