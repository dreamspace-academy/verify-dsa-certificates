import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CertificatePage from './pages/CertificatePage.js';
import ProgrammePage from './pages/ProgrammePage.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/certificate/:programId/:certificateId"
          element={<CertificatePage />}
        />
        <Route path="/programme/:id" element={<ProgrammePage />} />
      </Routes>
    </Router>
  );
}

export default App;
