import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Home from './components/Home';
import About from './components/About';
import Collections from './components/Collections';
import Exhibitions from './components/Exhibitions';
import Contact from './components/Contact';
import Visit from './components/visit.js'; // Ensure this path is correct
import ChatbotButton from './ChatbotButton.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/exhibitions" element={<Exhibitions />} />
          <Route path="/visit" element={<Visit />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <ChatbotButton />
    </Router>
  );
}

export default App;
