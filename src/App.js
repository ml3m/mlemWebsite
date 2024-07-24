// src/App.js
import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <h1>a</h1>
      </div>
    </div>
  );
};

export default App;
