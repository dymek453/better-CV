import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import BuilderPage from './pages/BuilderPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <LandingPage />
          </>
        } />
        <Route path="/builder" element={<BuilderPage />} />
        <Route path="/templates" element={<Navigate to="/builder" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
