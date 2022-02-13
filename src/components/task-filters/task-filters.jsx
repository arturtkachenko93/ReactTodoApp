import React from 'react';
import PropTypes from 'prop-types';

import './task-filters.css';

function TaskFilters({ filter, onFilterChange }) {
  const filterButtons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'completed', label: 'Completed' },
  ];

  const buttons = filterButtons.map(({ name, label }) => {
    const isActive = filter === name;
    const clazz = isActive ? 'selected' : null;

    return (
      <li key={name}>
        <button type="button" className={clazz} onClick={() => onFilterChange(name)}>
          {label}
        </button>
      </li>
    );
  });

  return <ul className="filters">{buttons}</ul>;
}

TaskFilters.defaultProps = {
  filter: 'all',
  onFilterChange: () => {},
};

TaskFilters.propTypes = {
  filter: PropTypes.string,
  onFilterChange: PropTypes.func,
};

export default TaskFilters;
