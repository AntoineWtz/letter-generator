import { jsPDF } from 'jspdf';

interface PDFPreviewProps {
    company: string;
    subject: string;
    content: string;
}

const PDFPreview = ({ company, subject, content }: PDFPreviewProps) => {
    const userCoordinates = JSON.parse(localStorage.getItem("userCoordinates") || "{}");

    const doc = new jsPDF();
    doc.setFontSize(12);

    // Coordonnées de l’utilisateur
    doc.text(userCoordinates.name || '', 10, 10);
    doc.text(userCoordinates.address || '', 10, 20);
    doc.text(userCoordinates.phone || '', 10, 30);
    doc.text(userCoordinates.email || '', 10, 40);

    // Infos de la société et objet
    doc.text(`Société : ${company}`, 10, 60);
    doc.text(`Objet : ${subject}`, 10, 70);

    // Contenu de la lettre
    doc.text(content, 10, 90, { maxWidth: 180 });

    doc.save('Lettre_de_motivation.pdf');
};

export default PDFPreview;
