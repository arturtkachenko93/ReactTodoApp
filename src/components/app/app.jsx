import React, { useState } from 'react';

import Header from '../header';
import './app.css';
import ListTasks from '../list-tasks';
import Footer from '../footer';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const addItem = (description, allSeconds) => {
    let id = Date.now() * Math.floor(Math.random() * 10000);
    const newItem = {
      description,
      time: Date.now(),
      done: false,
      edit: false,
      id: id++,
      allSeconds,
    };

    setTasks(() => [...tasks, newItem]);
  };

  const onCompleted = (id) => {
    setTasks((arrayTasks) => {
      const idx = arrayTasks.findIndex((task) => task.id === id);
      const newItem = {
        ...arrayTasks[idx],
        done: !arrayTasks[idx].done,
      };

      return [...arrayTasks.slice(0, idx), newItem, ...arrayTasks.slice(idx + 1)];
    });
  };

  const onEdited = (id) => {
    setTasks((arrayTasks) => {
      const idx = arrayTasks.findIndex((task) => task.id === id);
      const newItem = {
        ...arrayTasks[idx],
        edit: !arrayTasks[idx].edit,
      };

      return [...arrayTasks.slice(0, idx), newItem, ...arrayTasks.slice(idx + 1)];
    });
  };

  const onEdit = (id, newText) => {
    setTasks((arrayTasks) => {
      const idx = arrayTasks.findIndex((task) => task.id === id);
      const newItem = {
        ...arrayTasks[idx],
        description: newText,
      };

      return [...arrayTasks.slice(0, idx), newItem, ...arrayTasks.slice(idx + 1)];
    });
  };

  const onDeleted = (id) => {
    setTasks((arrayTasks) => {
      const idx = arrayTasks.findIndex((el) => el.id === id);
      return [...arrayTasks.slice(0, idx), ...arrayTasks.slice(idx + 1)];
    });
  };

  const clearTasks = () => {
    setTasks(() => tasks.filter((item) => !item.done));
  };

  const onFilterChange = (status) => {
    setFilter(() => status);
  };

  const filterItems = (arr, status) => {
    switch (status) {
      case 'all':
        return arr;
      case 'active':
        return arr.filter((el) => !el.done);
      case 'completed':
        return arr.filter((el) => el.done);
      default:
        return arr;
    }
  };

  const activeItems = filterItems(tasks, filter);
  const doneCount = tasks.filter((el) => !el.done).length;

  return (
    <section className="todoapp">
      <Header onAddItem={addItem} />
      <section className="main">
        <ListTasks
          todos={activeItems}
          onCompleted={onCompleted}
          onDeleted={onDeleted}
          onEdit={onEdit}
          onEdited={onEdited}
        />
        <Footer
          doneCount={doneCount}
          clearTasks={clearTasks}
          filter={filter}
          setFilter={setFilter}
          onFilterChange={onFilterChange}
        />
      </section>
    </section>
  );
}

export default App;
