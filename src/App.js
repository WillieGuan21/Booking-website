import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Home />
      <Footer />
    </Router>
    </>
  );
}

export default App;
