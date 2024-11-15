import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6 }}
            className="text-center px-4 py-10 min-h-screen flex flex-col items-center justify-center"
        >
            <h1 className="text-3xl sm:text-5xl font-heading font-bold mb-8 text-primary">
                Bienvenue sur votre générateur de lettres
            </h1>
            <p className="text-base sm:text-xl font-sans font-thin mb-8 text-gray-600">
                Ajoutez vos informations dans votre espace pour créer simplement et rapidement toutes vos lettres.
            </p>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Link
                    to="/create-letter"
                    className="bg-primary text-md sm:text-xl font-bold text-white px-6 py-3 rounded-xl hover:bg-secondary transition duration-300"
                >
                    Créer une lettre
                </Link>
            </motion.div>
        </motion.div>

    );
};

export default HomePage;
