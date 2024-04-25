import React from 'react';
import './App.css';

import BasicForm from './components/BasicForm.js';

const App = () => {
  return <div className='shell--main'>
    <div className='shell--banner'>
      <div className='functional-area'></div>
    </div>
    <div className='shell--content'>
      <div className='mainContent'>
        <h2>Some React Advice!</h2>
        <p>This is some paragraph text</p>
        <BasicForm />
      </div>
    </div>
    <div className='shell--footer'></div>

  </div>;
};

export default App;
