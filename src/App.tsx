import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserProfile from './pages/UserProfile';
import Form from './components/Form';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center min-h-screen p-6 bg-gray-100">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/create-letter" element={<Form />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
