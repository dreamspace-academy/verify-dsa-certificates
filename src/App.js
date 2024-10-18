import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Loading from './components/Loading.js';

const HomePage = lazy(() => import('./pages/HomePage'));
const CertificatePage = lazy(() => import('./pages/CertificatePage.js'));
const ProgrammePage = lazy(() => import('./pages/ProgrammePage.js'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/certificate/:programId/:certificateId"
            element={<CertificatePage />}
          />
          <Route path="/programme/:id" element={<ProgrammePage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
