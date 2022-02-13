import React, { useState, useEffect } from 'react';
import PropTypes, { number } from 'prop-types';
import { formatDistanceToNow } from 'date-fns';

import './task.css';

function Task({
  description, time, id, done, edit, onCompleted, onEdited, onEdit, onDeleted, allSeconds,
}) {
  const [value, setValue] = useState(description);
  const [start, setStart] = useState(false);
  const [count, setCount] = useState(allSeconds);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (!start || allSeconds <= 0) return;
    const timer = setInterval(() => {
      const newCount = count - 1;
      setCount(newCount >= 0 ? newCount : 0);
    }, 1000);
    // eslint-disable-next-line consistent-return
    return () => clearInterval(timer);
  });

  const handleStart = () => {
    setStart(true);
  };

  const handleStop = () => {
    setStart(false);
  };

  const format = (times) => {
    let seconds = times % 60;
    let minutes = Math.floor(times / 60);
    minutes = minutes.toString().length === 1 ? `0${minutes}` : minutes;
    seconds = seconds.toString().length === 1 ? `0${seconds}` : seconds;
    return `${minutes}:${seconds}`;
  };

  const onSubmit = (event) => {
    event.preventDefault();
    onEdit(id, value);
    onEdited(id);
  };

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const inputString = (
    <form onSubmit={onSubmit}>
      <input type="text" className="edit" onChange={onChange} {...value} />
    </form>
  );

  const date = `created ${formatDistanceToNow(time, { includeSeconds: true })} ago`;

  let classNames = '';
  let isChecked = false;

  if (done) {
    classNames += 'completed';
    isChecked = true;
  }

  if (edit) {
    classNames += ' editing';
  }

  return (
    <li className={classNames}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={isChecked} onChange={onCompleted} />
        <label>
          <span className="title">{description}</span>
          <span className="description">
            <button className="icon icon-play" type="button" aria-label="Editing tasks" onClick={handleStart} />
            <button className="icon icon-pause" type="button" aria-label="Editing tasks" onClick={handleStop} />
            {format(count)}
          </span>
          <span className="description">{date}</span>
        </label>
        <button aria-label="Editing tasks" type="button" className="icon icon-edit" onClick={onEdited} />
        <button aria-label="Deleting task" type="button" className="icon icon-destroy" onClick={onDeleted} />
      </div>
      {edit ? inputString : null}
    </li>
  );
}

Task.defaultProps = {
  description: '',
  time: number,
  id: 0,
  allSeconds: 0,
  done: false,
  edit: false,
  onCompleted: () => {},
  onEdited: () => {},
  onEdit: () => {},
  onDeleted: () => {},
};

Task.propTypes = {
  description: PropTypes.string,
  time: PropTypes.number,
  id: PropTypes.number,
  allSeconds: PropTypes.number,
  done: PropTypes.bool,
  edit: PropTypes.bool,
  onCompleted: PropTypes.func,
  onEdited: PropTypes.func,
  onEdit: PropTypes.func,
  onDeleted: PropTypes.func,
};

export default Task;
