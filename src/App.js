import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CertificatePage from './pages/CertificatePage.js';
import useGoogleSheetData from './hooks/useGoogleSheetData.js';
import ProgrammePage from './pages/ProgrammePage.js';

function App() {
  const csvUrl =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vRPW8QM9xJiQaFjoFlS0CCkJlDNiku6hJulKM7AwTpExi0NSkf3RIPTUlsuSXGUhRXJdEO6aTHeJIKo/pub?gid=0&single=true&output=csv'; // Replace with your actual CSV file URL
  const { sheetData, loading } = useGoogleSheetData(csvUrl);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/certificate/:id"
          element={<CertificatePage certificates={sheetData} />}
        />
        <Route path="/programme/:id" element={<ProgrammePage />} />
      </Routes>
    </Router>
  );
}

export default App;
