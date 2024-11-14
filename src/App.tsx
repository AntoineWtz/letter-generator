import React from 'react';
import Form from './components/Form';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Générateur de Lettre de Motivation</h1>
      <Form />
    </div>
  );
};

export default App;
