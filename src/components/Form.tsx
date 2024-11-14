import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PDFPreview from './PDFPreview';

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
        <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Créer une Lettre</h2>
            <p className="text-md font-thin mb-6">Saisissez les informations qui apparaitront sur le document généré.</p>
            <div className="mb-4">
                <label className="block font-bold mb-2">Destinataire</label>
                <input
                    type="text"
                    className="w-full border border-gray-300 p-2 rounded"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block font-bold mb-2">Objet</label>
                <input
                    type="text"
                    className="w-full border border-gray-300 p-2 rounded"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />
            </div>
            <div className="mb-6">
                <label className="block font-bold mb-2">Contenu de la Lettre</label>
                <textarea
                    className="w-full border border-gray-300 p-2 rounded"
                    rows={6}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
            </div>

            <div className="flex justify-between mt-6">
                <Link
                    to="/"
                    className="bg-red-500 text-white p-2 rounded w-48 hover:bg-red-600 text-center m-2"
                >
                    Retour
                </Link>

                <button onClick={handleGeneratePDF} className="bg-blue-500 text-white p-2 rounded w-48 hover:bg-blue-600 text-center m-2">
                    Générer le PDF
                </button>
            </div>
        </div>
    );
};

export default Form;
