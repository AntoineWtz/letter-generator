import React, { useState } from 'react';
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
            <div className="mb-4">
                <label className="block font-bold mb-2">Société</label>
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
            <button onClick={handleGeneratePDF} className="w-full bg-blue-600 text-white p-2 rounded">
                Générer le PDF
            </button>
        </div>
    );
};

export default Form;
