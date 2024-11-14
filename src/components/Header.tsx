import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    const userCoordinates = JSON.parse(localStorage.getItem("userCoordinates") || "{}");

    return (
        <header className="w-full p-4 bg-blue-600 text-white flex justify-between items-center">
            {userCoordinates.name ? (
                <div>
                    <p>{userCoordinates.name}</p>
                    <p>{userCoordinates.address}</p>
                    <p>{userCoordinates.phone}</p>
                    <p>{userCoordinates.email}</p>
                </div>
            ) : (
                <p>Bienvenue ! Veuillez ajouter vos informations.</p>
            )}

            <Link
                to="/profile"
                className="ml-4 bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200 transition"
            >
                {userCoordinates.name ? "Modifier les informations" : "Renseigner vos informations"}
            </Link>
        </header>
    );
};

export default Header;
