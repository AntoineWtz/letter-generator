import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="w-full bg-primary text-white shadow-md">
            <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold"><Link to="/">Letter App</Link></div>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex space-x-6 items-center">
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
                        className="bg-secondary py-2 px-4 rounded-lg hover:bg-accent hover:text-black transition duration-300"
                    >
                        Créer une lettre
                    </Link>
                </div>

                {/* Burger Menu Icon for mobile */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden absolute top-15 left-0 w-full bg-primary text-white space-y-4 py-4 px-6 text-center`}>
                <Link
                    to="/"
                    className="block hover:text-accent transition duration-300"
                    onClick={() => setIsMenuOpen(false)} // Close menu when clicking
                >
                    Accueil
                </Link>
                <Link
                    to="/profile"
                    className="block hover:text-accent transition duration-300"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Profil
                </Link>
                <Link
                    to="/create-letter"
                    className="block bg-secondary py-2 px-4 rounded-lg hover:bg-accent hover:text-black transition duration-300"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Créer une lettre
                </Link>
            </div>
        </header>
    );
};

export default Header;
