/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Brand Colors
                'concrete': {
                    50: '#FAF9F7',
                    100: '#F5F0EB',
                    200: '#EBE4DB',
                    300: '#DDD3C6',
                    400: '#C9BAA8',
                    500: '#B5A18A',
                    600: '#9A8268',
                    700: '#7A6550',
                    800: '#5A4A3B',
                    900: '#3A3028',
                },
                'graphite': {
                    50: '#F5F5F5',
                    100: '#E8E8E8',
                    200: '#D1D1D1',
                    300: '#ABABAB',
                    400: '#858585',
                    500: '#5F5F5F',
                    600: '#4A4A4A',
                    700: '#3D3D3D',
                    800: '#2D2D2D',
                    900: '#1A1A1A',
                },
                'safety': {
                    50: '#FFF4F0',
                    100: '#FFE4DB',
                    200: '#FFC9B8',
                    300: '#FFA989',
                    400: '#FF8659',
                    500: '#FF6B35',
                    600: '#E85A2A',
                    700: '#C44A22',
                    800: '#9E3B1B',
                    900: '#792D15',
                }
            },
            fontFamily: {
                'display': ['Inter', 'system-ui', 'sans-serif'],
                'body': ['Inter', 'system-ui', 'sans-serif'],
            },
            fontSize: {
                'display-xl': ['8rem', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
                'display-lg': ['6rem', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
                'display-md': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
                'display-sm': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
            },
            spacing: {
                '18': '4.5rem',
                '22': '5.5rem',
                '30': '7.5rem',
                '128': '32rem',
                '144': '36rem',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s ease-in-out infinite',
                'slide-up': 'slideUp 0.6s ease-out forwards',
                'fade-in': 'fadeIn 0.8s ease-out forwards',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(30px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
            },
            backdropBlur: {
                'xs': '2px',
            },
            boxShadow: {
                'glass': '0 8px 32px rgba(0, 0, 0, 0.1)',
                'glass-lg': '0 16px 48px rgba(0, 0, 0, 0.15)',
                'premium': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            }
        },
    },
    plugins: [],
}
