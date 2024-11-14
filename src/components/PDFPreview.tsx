import { jsPDF } from 'jspdf';

// Coordonnées de l’utilisateur (pré-enregistrées dans l’application)
const userCoordinates = {
    name: "Fanny Nahi",
    address: "Fontainebleau",
    phone: "06 12 34 56 78",
    email: "johndoe@example.com",
};

interface PDFPreviewProps {
    company: string;
    subject: string;
    content: string;
}

const PDFPreview = ({ company, subject, content }: PDFPreviewProps) => {
    const doc = new jsPDF();

    // Entête avec les coordonnées de l’utilisateur
    doc.setFontSize(12);
    doc.text(userCoordinates.name, 10, 10);
    doc.text(userCoordinates.address, 10, 20);
    doc.text(userCoordinates.phone, 10, 30);
    doc.text(userCoordinates.email, 10, 40);

    // Infos de la société et objet
    doc.text(`Société : ${company}`, 10, 60);
    doc.text(`Objet : ${subject}`, 10, 70);

    // Contenu de la lettre
    doc.setFontSize(11);
    doc.text("Contenu de la lettre :", 10, 90);
    doc.text(content, 10, 100, { maxWidth: 180 });

    // Sauvegarde le PDF
    doc.save("lettre_motivation.pdf");
};

export default PDFPreview;
