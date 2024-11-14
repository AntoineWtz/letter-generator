import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserProfile: React.FC = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    // Charger les informations de l'utilisateur depuis le localStorage au montage du composant
    useEffect(() => {
        const savedCoordinates = localStorage.getItem("userCoordinates");
        if (savedCoordinates) {
            const userCoordinates = JSON.parse(savedCoordinates);
            setName(userCoordinates.name || '');
            setAddress(userCoordinates.address || '');
            setEmail(userCoordinates.email || '');
            setPhone(userCoordinates.phone || '');
        }
    }, []);

    // Sauvegarder les informations mises à jour dans le localStorage
    const handleSave = () => {
        const updatedCoordinates = {
            name,
            address,
            email,
            phone,
        };
        localStorage.setItem("userCoordinates", JSON.stringify(updatedCoordinates));
        alert("Informations mises à jour avec succès !");
        navigate('/');
    };

    return (
        <div className="p-8 bg-white rounded shadow-md max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-6">Modifier les informations de profil</h2>
            <label className="block mb-4">
                Nom :
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 p-2 border rounded w-full"
                />
            </label>
            <label className="block mb-4">
                Adresse :
                <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="mt-1 p-2 border rounded w-full"
                />
            </label>
            <label className="block mb-4">
                Email :
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 p-2 border rounded w-full"
                />
            </label>
            <label className="block mb-4">
                Téléphone :
                <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-1 p-2 border rounded w-full"
                />
            </label>
            <button
                onClick={handleSave}
                className="bg-blue-500 text-white p-2 rounded w-full mt-4 hover:bg-blue-600"
            >
                Sauvegarder les modifications
            </button>
        </div>
    );
};

export default UserProfile;
