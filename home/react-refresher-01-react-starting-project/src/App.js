import React from 'react';
import './App.css';

import BasicForm from './components/BasicForm';

const App = () => {
  return <div className='shellFunctionalArea'>
    <div className='mainContent'>
      <h2>Some React Advice!</h2>
      <p>This is some paragraph text</p>
      <BasicForm />
    </div>
  </div>;
};

export default App;
