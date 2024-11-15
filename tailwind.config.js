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
        background: "#f3f4f6", // Fond clair 
        danger: "#dc2626", // Rouge vif 
        success: "#16a34a", // Vert vif 
        info: "#6b7280", // Gris doux 
        warning: "#f97316", // Orange 
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },
  },
  plugins: [],
};
