/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Controlled by toggling the 'dark' class on <html> or <body>
  theme: {
    extend: {
      fontFamily: {
        heading: ['Orbitron', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
      },
      colors: {
        // Dynamic mappings matching your custom properties
        bgColor: 'var(--bg-color)',
        surfaceColor: 'var(--surface-color)',
        textMain: 'var(--text-main)',
        textMuted: 'var(--text-muted)',
        neonPrimary: 'var(--neon-primary)',
        neonSecondary: 'var(--neon-secondary)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-reverse': 'float 10s ease-in-out infinite reverse',
        'rotate-border': 'rotateBorder 15s linear infinite',
      },
    },
  },
  plugins: [],
}