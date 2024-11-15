import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

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

    // Sauvegarder les informations dans le localStorage
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
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto mt-12"
        >
            <h2 className="text-3xl font-bold text-primary mb-4">Informations de profil</h2>
            <p className="text-md text-gray-600 mb-6">Saisissez les informations qui apparaîtront sur le document généré.</p>
            {["Nom", "Adresse", "Email", "Téléphone"].map((label, idx) => (
                <label key={idx} className="block mb-4">
                    <span className="text-gray-700">{label} :</span>
                    <input
                        type={label === "Email" ? "email" : label === "Téléphone" ? "tel" : "text"}
                        value={label === "Nom" ? name : label === "Adresse" ? address : label === "Email" ? email : phone}
                        onChange={(e) =>
                            label === "Nom"
                                ? setName(e.target.value)
                                : label === "Adresse"
                                    ? setAddress(e.target.value)
                                    : label === "Email"
                                        ? setEmail(e.target.value)
                                        : setPhone(e.target.value)
                        }
                        className="mt-2 p-3 w-full rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                </label>
            ))}

            <div className="flex justify-between mt-8">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                        to="/"
                        className="bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-600 transition"
                    >
                        Retour
                    </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <button
                        onClick={handleSave}
                        className="bg-primary text-white py-3 px-6 rounded-lg hover:bg-secondary transition"
                    >
                        Sauvegarder
                    </button>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default UserProfile;
