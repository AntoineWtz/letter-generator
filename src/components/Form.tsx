import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PDFPreview from './PDFPreview';
import { motion } from 'framer-motion';

const Form: React.FC = () => {
    const [company, setCompany] = useState('');
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');

    const handleGeneratePDF = () => {
        if (company && subject && content) {
            PDFPreview({ company, subject, content });
        } else {
            alert("Veuillez remplir tous les champs !");
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto mt-12"
        >
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-800 mb-4 text-center">
                Créer une Lettre
            </h2>
            <p className="text-sm sm:text-md text-gray-600 mb-6 text-center">
                Saisissez les informations qui apparaîtront sur le document généré.
            </p>
            <div className="space-y-6">
                {[
                    { label: "Destinataire", value: company, setValue: setCompany },
                    { label: "Objet", value: subject, setValue: setSubject },
                    { label: "Contenu de la Lettre", value: content, setValue: setContent, isTextArea: true },
                ].map(({ label, value, setValue, isTextArea }, idx) => (
                    <div key={idx}>
                        <label className="block text-sm sm:text-base font-bold text-gray-700 mb-2">{label}</label>
                        {isTextArea ? (
                            <textarea
                                className="w-full p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                rows={6}
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                            ></textarea>
                        ) : (
                            <motion.input
                                whileFocus={{ scale: 1.01 }}
                                type="text"
                                className="w-full p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                            />
                        )}
                    </div>
                ))}
            </div>

            <div className="flex items-center justify-between mt-8">
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
                        onClick={handleGeneratePDF}
                        className="bg-primary text-white py-3 px-6 rounded-lg hover:bg-secondary transition"
                    >
                        Générer PDF
                    </button>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Form;
