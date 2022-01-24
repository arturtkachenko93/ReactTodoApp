import React, { Component } from 'react';

import AppMain from '../app-main';
import AppHeader from '../app-header';
import './app.css';

export default class App extends Component {
  maxId = 100;

  state = {
    tasks: [],
    filter: 'all',
  };

  addItem = (description) => {
    const newItem = {
      description,
      time: Date.now(),
      done: false,
      edit: false,
      id: this.maxId++,
    };

    this.setState(({ tasks }) => {
      const newTasks = [...tasks];
      newTasks.push(newItem);

      return {
        tasks: newTasks,
      };
    });
  };

  onDataChange = (id, array, typeChange, props) => {
    const idx = array.findIndex((el) => el.id === id);
    const newTasks = [...array];
    if (typeChange === 'change') {
      newTasks[idx][props] = !newTasks[idx][props];
    }

    if (typeChange === 'deleted') {
      newTasks.splice(idx, 1);
    }

    return newTasks;
  };

  onCompleted = (id) => {
    this.setState(({ tasks }) => ({
      tasks: this.onDataChange(id, tasks, 'change', 'done'),
    }));
  };

  onEdited = (id) => {
    this.setState(({ tasks }) => ({
      tasks: this.onDataChange(id, tasks, 'change', 'edit'),
    }));
  };

  onEdit = (id, newText) => {
    this.setState(({ tasks }) => {
      const idx = tasks.findIndex((el) => el.id === id);
      const newTasks = [...tasks];
      newTasks[idx].description = newText;
      return {
        tasks: newTasks,
      };
    });
  };

  onDeleted = (id) => {
    this.setState(({ tasks }) => ({
      tasks: this.onDataChange(id, tasks, 'deleted'),
    }));
  };

  clearTasks = () => {
    this.setState(({ tasks }) => {
      let newTasks = [...tasks];
      newTasks = newTasks.filter((el) => !el.done);
      return {
        tasks: newTasks,
      };
    });
  };

  onFilterChange = (filter) => {
    this.setState({ filter });
  };
sds
  filterItems(arr, filter) {
    switch (filter) {
      case 'all':
        return arr;
      case 'active':
        return arr.filter((el) => !el.done);
      case 'completed':
        return arr.filter((el) => el.done);
      default:
        return arr;
    }
  }

  render() {
    const { tasks, filter } = this.state;

    const activeItems = this.filterItems(tasks, filter);
    const doneCount = tasks.filter((el) => !el.done).length;

    return (
      <section className="todoapp">
        <AppHeader onAddItem={this.addItem} />
        <AppMain
          todos={activeItems}
          onCompleted={this.onCompleted}
          onDeleted={this.onDeleted}
          doneCount={doneCount}
          onEdited={this.onEdited}
          onEdit={this.onEdit}
          clearTasks={this.clearTasks}
          filter={filter}
          onFilterChange={this.onFilterChange}
        />
        ds
      </section>
    );
  }
}
