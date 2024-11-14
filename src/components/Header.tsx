import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const Header: React.FC = () => {
    const userCoordinates = JSON.parse(localStorage.getItem("userCoordinates") || "{}");

    return (
        <header className="w-full p-4 bg-blue-600 text-white flex items-center justify-around">
            {/* Logo ou Titre */}
            <Link to="/" className="text-2xl font-bold text-white hover:text-gray-200">
                Letter App
            </Link>

            {/* Barre de navigation */}
            <nav className="flex space-x-4">
                <Link to="/" className="hover:text-gray-200">Accueil</Link>
                {/* <Link to="/about" className="hover:text-gray-200">À propos</Link>
                <Link to="/features" className="hover:text-gray-200">Fonctionnalités</Link> */}
            </nav>

            {/* Icône de profil */}
            <div className="relative">
                <Link to="/profile" className="hover:text-gray-200">
                    <FaUserCircle size={28} />
                </Link>
                {/* {userCoordinates.name && (
                    <div className="absolute right-0 mt-2 w-48 bg-white text-blue-600 rounded shadow-lg p-4">
                        <p className="font-bold">{userCoordinates.name}</p>
                        <p className="text-sm">{userCoordinates.email}</p>
                        <Link
                            to="/profile"
                            className="mt-2 block text-center text-blue-600 underline hover:text-blue-800"
                        >
                            Modifier les informations
                        </Link>
                    </div>
                )} */}
            </div>
        </header>
    );
};

export default Header;
