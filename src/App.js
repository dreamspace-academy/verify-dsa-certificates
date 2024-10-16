import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CertificatePage from './pages/CertificatePage.js';
import useGoogleSheetData from './hooks/useGoogleSheetData.js';
import ProgrammePage from './pages/ProgrammePage.js';

function App() {
  const csvUrl =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vQMaE2Gf0PqYPyKfZMtBOGbGbpHD4lhT2LWqKDd_A832AQcB6mdTO44EUeMWG4RNVE8FUAi35FOuCB1/pub?gid=419298409&single=true&output=csv';
  const { sheetData, loading } = useGoogleSheetData(csvUrl);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/certificate/:programId/:certificateId"
          element={<CertificatePage certificates={sheetData} />}
        />
        <Route path="/programme/:id" element={<ProgrammePage />} />
      </Routes>
    </Router>
  );
}

export default App;
