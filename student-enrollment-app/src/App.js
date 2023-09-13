import React from 'react';
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from './components/Page1';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/enroll" element={<Chatbot />} />
      </Routes>
    </Router>
  );
}

export default App;