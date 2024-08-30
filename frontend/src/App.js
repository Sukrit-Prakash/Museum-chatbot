
import Chatbot from './Chatbot';
// import ChatbotButton from './ChatbotButton.js';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './components/Home';
import About from './components/About';
import Collections from './components/Collections.js';
import Exhibitions from './components/Exhibitions';
// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';

// import Visit from './components/Visit';
// import Contact from './components/Contact';

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
          {/* <Route path="/visit" element={<Visit />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
      <Chatbot/>
      {/* <ChatbotButton/> */}
    </Router>
    
  );
}

export default App;