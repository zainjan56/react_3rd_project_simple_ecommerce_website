import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Practice from './Practice';
import CardDetailsPage from './CardDetailsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Practice />} />
        <Route path="/details/:id" element={<CardDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
