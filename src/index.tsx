import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router basename="/letter-generator">  {/* Remplacez "mon-portfolio" par le nom de votre dépôt GitHub */}
      <App />
    </Router>
  </React.StrictMode>
);

// Si vous voulez commencer à mesurer la performance de votre application, passez une fonction
// pour enregistrer les résultats (par exemple : reportWebVitals(console.log))
// ou envoyez-les vers un point de terminaison analytique.
reportWebVitals();
