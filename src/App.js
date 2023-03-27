import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Detail from './components/pages/Detail';
import Payment from './components/pages/Payment';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/detail" exact element={<Detail />} />
          <Route path="/payment" exact element={<Payment />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
