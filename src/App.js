import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './Layout/Header';
import Route from './Routers/Router';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route />     
      </Router>
    </div>
  );
}

export default App;
