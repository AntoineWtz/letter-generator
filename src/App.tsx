import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HomePage from './pages/HomePage';
import UserProfile from './pages/UserProfile';
import Form from './components/Form';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center min-h-screen p-6 bg-gray-100">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/create-letter" element={<Form />} />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
};

export default App;
