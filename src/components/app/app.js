import React, {Component} from "react";

import AppMain from "../app-main";
import AppHeader from "../app-header";
import './app.css';

class App extends Component {
  
  state = {
    done: true
  };
  
  onCompleted = () => {
    this.setState({
      done: false,
      classNames: 'completed'
    })
  }
  
  render() {
    const tasks = [
      { description: 'Suka', time: 'created 17 seconds ago', id: 3, done: false },
      { description: 'Editing task', time: 'created 5 minutes ago', id: 2, done: true },
      { description: 'Active task', time: 'created 5 minutes ago', id: 1, done: true },
    ]
    
    return (
      <section className='todoapp'>
        <AppHeader />
        <AppMain todos={ tasks }
                 onCompleted={(done) => this.onCompleted(done)}/>
      </section>
    )
  }
}

export default App;