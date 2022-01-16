import React from "react";

import AppMain from "../app-main";
import AppHeader from "../app-header";
import './app.css';

const App = () => {
  
  const tasks = [
    // { status: 'editing', description: 'Suka', time: 'created 17 seconds ago', id: '1' },
    { status: 'completed', description: 'Editing task', time: 'created 5 minutes ago', id: '2' },
    { status: 'view', description: 'Active task', time: 'created 5 minutes ago', id: '3' },
  ]
  
  return (
    <section className='todoapp'>
      <AppHeader />
      <AppMain todos={ tasks }/>
    </section>
  )
}

export default App;