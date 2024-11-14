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

    // Coordonnées utilisateur
    doc.text(userCoordinates.name || '', 20, 15);
    doc.text(userCoordinates.address || '', 20, 20);
    doc.text(userCoordinates.phone || '', 20, 25);
    doc.text(userCoordinates.email || '', 20, 30);

    // Infos Destinataire
    const pageWidth = doc.internal.pageSize.width;
    const companyName = company;
    doc.text(company, pageWidth - 20 - doc.getTextWidth(companyName), 50);

    // Date
    const currentDate = new Date().toLocaleDateString();
    doc.text(currentDate, pageWidth - 20 - doc.getTextWidth(currentDate), 60);

    // Objet
    doc.text(`Objet : ${subject}`, 30, 70);

    // Contenu de la lettre
    const contentStartY = 80;
    const contentLines = doc.splitTextToSize(content, 180); // Découpe le contenu en lignes
    doc.text(contentLines, 20, contentStartY);

    // Calculer la hauteur totale du contenu
    const contentHeight = contentLines.length * 5; // Estimation de la hauteur du contenu

    // Signature
    const signatureY = contentStartY + contentHeight + 10;
    const senderName = userCoordinates.name;
    doc.text(senderName, pageWidth - 40 - doc.getTextWidth(senderName), signatureY);

    // Save document
    doc.save('Lettre.pdf');
};

export default PDFPreview;
