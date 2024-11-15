module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: "#000000", // Noir profond
        secondary: "#00c9c8", // Cyan vibrant
        accent: "#bffcf9", // Bleu pâle clair
        neutral: "#47817f", // Gris-vert foncé
        background: "#f3f4f6", // Fond clair pour le contraste
        danger: "#dc2626", // Rouge vif pour les alertes
        success: "#16a34a", // Vert vif pour les réussites
        info: "#6b7280", // Gris doux pour les informations
        warning: "#f97316", // Orange pour les avertissements
      },
    },
  },
  plugins: [],
};
