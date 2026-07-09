/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0E1230',
        navy2: '#171C3E',
        navy3: '#1B2154',
        cyan: '#4FD8C4',
        amber: '#F2A93B',
        cloud: '#F3F6F8',
        ink: '#12172B',
        muted: '#5B6478',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      keyframes: {
        pulseDot: {
          '0%': { boxShadow: '0 0 0 0 rgba(79,216,196,0.55)' },
          '70%': { boxShadow: '0 0 0 8px rgba(79,216,196,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(79,216,196,0)' },
        },
      },
      animation: {
        pulseDot: 'pulseDot 2.2s infinite',
      },
    },
  },
  plugins: [],
}
