/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#12372A',
          deep: '#0B221A',
          dark: '#0E2C22',
          light: '#1B4B3A',
          surface: '#163E30',
        },
        emerald: {
          DEFAULT: '#1E8A63',
          hover: '#187453',
          light: '#28A77B',
          glow: 'rgba(30, 138, 99, 0.25)',
        },
        mint: {
          DEFAULT: '#B7E4C7',
          soft: '#D8F3DC',
          pale: '#EAF7EE',
          muted: '#85C7A2',
        },
        offwhite: {
          DEFAULT: '#F7F8F2',
          card: '#FFFFFF',
          subtle: '#EEF0E6',
          border: '#E3E6D9',
        },
        charcoal: {
          DEFAULT: '#202B27',
          dark: '#151D1A',
          muted: '#4A5B53',
          light: '#6E8278',
        },
        gold: {
          DEFAULT: '#D6B56D',
          light: '#E5CD95',
          pale: '#F6EEDB',
          border: 'rgba(214, 181, 109, 0.3)',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Cabinet Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'soft-glow': '0 0 40px -10px rgba(30, 138, 99, 0.35)',
        'gold-glow': '0 0 35px -10px rgba(214, 181, 109, 0.3)',
        'premium': '0 20px 40px -15px rgba(18, 55, 42, 0.08), 0 0 1px 1px rgba(18, 55, 42, 0.04)',
        'card-hover': '0 25px 50px -12px rgba(18, 55, 42, 0.14), 0 0 0 1px rgba(30, 138, 99, 0.15)',
        'dark-card': '0 20px 45px -15px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(183, 228, 199, 0.12)',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        scan: {
          '0%': { top: '0%' },
          '100%': { top: '100%' },
        }
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'float': 'float 5s ease-in-out infinite',
        'scan': 'scan 2.8s ease-in-out infinite alternate',
      }
    },
  },
  plugins: [],
}
