import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './new-task-panel.css';

function NewTaskPanel({ onAddItem }) {
  const [description, setDesc] = useState('');
  const [placeholder, setPlace] = useState('What needs to be done?');
  const [minutes, setMin] = useState(0);
  const [seconds, setSec] = useState(0);

  const onDescriptionChange = (event) => {
    setDesc(event.target.value);
  };

  const onChangeMin = (event) => {
    const toSeconds = event.target.value * 60;
    setMin(toSeconds);
  };

  const onChangeSec = (event) => {
    setSec(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (description.length <= 1) {
      setDesc('');
      setPlace('Press F');
      return;
    }

    onAddItem(description, Number(minutes) + Number(seconds));
    setDesc('');
    setPlace('What needs to be done?');
    event.target.reset();
  };

  return (
    <form className="new-todo-form" onSubmit={onSubmit}>
      <input
        type="text"
        className="new-todo"
        placeholder={placeholder}
        onChange={onDescriptionChange}
        value={description}
      />
      <input className="new-todo-form__timer" type="number" placeholder="Min" min="0" onChange={onChangeMin} />
      <input className="new-todo-form__timer" type="number" placeholder="Sec" min="0" max="59" onChange={onChangeSec} />
      <input type="submit" className="hidden" />
    </form>
  );
}

NewTaskPanel.defaultProps = {
  onAddItem: () => {},
};

NewTaskPanel.propTypes = {
  onAddItem: PropTypes.func,
};

export default NewTaskPanel;
