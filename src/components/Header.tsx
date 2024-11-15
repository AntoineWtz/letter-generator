import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header className="w-full bg-primary text-white shadow-md">
            <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold"><Link to="/">Letter App</Link></div>
                <div className="space-x-6">
                    <Link
                        to="/"
                        className="hover:text-accent transition duration-300"
                    >
                        Accueil
                    </Link>
                    <Link
                        to="/profile"
                        className="hover:text-accent transition duration-300"
                    >
                        Profil
                    </Link>
                    <Link
                        to="/create-letter"
                        className="bg-secondary py-2 px-4 rounded-lg hover:bg-accent transition duration-300"
                    >
                        Créer une lettre
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
