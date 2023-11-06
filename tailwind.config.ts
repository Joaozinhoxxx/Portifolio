import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        slideLeftToRight: {
          '0%': {
            transform: 'translateX(-30%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        slideRightToLeft: {
          '0%': {
            transform: 'translateX(30%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        slideUp: {
          '0%': {
            transform: 'translateY(30%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        slideDown: {
          '0%': {
            transform: 'translateY(-30%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },
      animation: {
        'slide-left-to-right': 'slideLeftToRight 0.9s linear',
        'slide-right-to-left': 'slideRightToLeft 0.9s linear',
        'slide-up': 'slideUp 0.9s linear',
        'slide-down': 'slideDown 0.9s linear',
      },
    },
  },
  plugins: [],
};

export default config;
