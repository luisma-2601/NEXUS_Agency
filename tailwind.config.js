/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '421px',
      sm: '681px',
      md: '901px',
      lg: '1025px',
    },
    extend: {
      colors: {
        bg: '#000000',
        'bg-alt': '#030406',
        surface: '#090c11',
        'surface-2': '#181b1f',
        border: '#2b2e32',
        text: {
          DEFAULT: '#f3f6fb',
          dim: '#9ea0a3',
          faint: '#616264',
        },
        accent: {
          DEFAULT: '#2f6fed',
          2: '#1c607d',
        },
        danger: '#ff5c7c',
      },
      backgroundImage: {
        'accent-grad': 'linear-gradient(135deg, #2f6fed 0%, #2668b5 50%, #1c607d 100%)',
      },
      boxShadow: {
        glow: '0 20px 60px -20px rgba(47,111,237,0.35)',
        'nav-cta': '0 8px 24px -8px rgba(47,111,237,0.6)',
        'btn-primary': '0 10px 30px -8px rgba(47,111,237,0.55)',
        panel: '0 12px 30px -10px rgba(0,0,0,0.5)',
        'chat-toggle': '0 14px 34px -10px rgba(47,111,237,0.7)',
        'chat-window': '0 30px 70px -20px rgba(0,0,0,0.6)',
        'theme-panel': '0 30px 70px -20px rgba(0,0,0,0.6)',
      },
      fontFamily: {
        display: ['Kanit', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '16px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        blink: {
          '0%, 80%, 100%': { opacity: '0.3' },
          '40%': { opacity: '1' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        blink: 'blink 1.2s infinite',
      },
    },
  },
  plugins: [],
}
