/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        vault: {
          bg:       '#0b0d14',
          surface:  '#12141f',
          card:     '#181b28',
          border:   '#232740',
          accent:   '#6366f1',
          accent2:  '#818cf8',
          muted:    '#64748b',
          dim:      '#2d3352',
        }
      },
      boxShadow: {
        'glow':    '0 0 20px rgba(99,102,241,0.25)',
        'card':    '0 4px 24px rgba(0,0,0,0.4)',
      },
      animation: {
        'slide-in': 'slideIn 0.22s ease',
        'fade-in':  'fadeIn 0.2s ease',
        'pop':      'pop 0.18s ease',
      },
      keyframes: {
        slideIn: { from: { transform: 'translateX(40px)', opacity: 0 }, to: { transform: 'translateX(0)', opacity: 1 } },
        fadeIn:  { from: { opacity: 0, transform: 'scale(0.97)' }, to: { opacity: 1, transform: 'scale(1)' } },
        pop:     { '0%': { transform: 'scale(0.9)' }, '60%': { transform: 'scale(1.05)' }, '100%': { transform: 'scale(1)' } },
      }
    },
  },
  plugins: [],
};
