import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
    return (
        <div className="text-center">
            <h2 className="text-4xl font-bold mb-8">Bienvenue sur votre générateur de lettres</h2>
            <p className="text-xl font-thin mb-8">Ajoutez vos informations dans votre espace pour créer simplement et rapidement toutes vos lettres.</p>
            <Link to="/create-letter" className="bg-gray-800 text-xl font-bold text-white px-6 py-3 rounded-xl hover:bg-gray-700">
                Créer une lettre
            </Link>
        </div>
    );
};

export default HomePage;
