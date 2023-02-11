import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';   
import './App.css';
import HomePage from './page/HomePage';

function App() {
  return (
    <Router>  
      <Routes>     
        <Route path='/' element={<HomePage />}/>  
      </Routes>
    </Router>
  );
}

export default App;
