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
        primary: "#4f46e5", // Bleu moderne
        secondary: "#6d28d9", // Violet foncé
        accent: "#facc15", // Jaune doré
        neutral: "#64748b", // Gris bleuté
        background: "#f9fafb", // Fond clair
        danger: "#ef4444", // Rouge vif
      },
    },
  },
  plugins: [],
};
