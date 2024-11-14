import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
    return (
        <div className="text-center">
            <h1 className="text-3xl font-bold mb-8">Bienvenue sur votre générateur de lettres de motivation</h1>
            <Link to="/create-letter" className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700">
                Créer une lettre de motivation
            </Link>
        </div>
    );
};

export default HomePage;
