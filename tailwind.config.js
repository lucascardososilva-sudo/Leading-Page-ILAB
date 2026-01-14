/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                fox: {
                    50: '#fff5eb',
                    100: '#ffe8cc',
                    400: '#fdaf58',
                    500: '#f58025', // Primary Brand Color
                    600: '#d96418',
                    900: '#7c2d12',
                },
                navy: {
                    800: '#1a2b4b', // Secondary Brand Color (Eyes/Text)
                    900: '#0f172a',
                },
                cream: '#F9F9F5',
            },
            fontFamily: {
                sans: ['DM Sans', 'sans-serif'],
                display: ['Space Grotesk', 'sans-serif'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'scan': 'scan 3s linear infinite',
                'glitch': 'glitch 0.3s cubic-bezier(.25,.46,.45,.94) both infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                scan: {
                    '0%': { top: '-100%' },
                    '100%': { top: '100%' },
                },
                glitch: {
                    '0%': { transform: 'translate(0)' },
                    '20%': { transform: 'translate(-2px, 2px)' },
                    '40%': { transform: 'translate(-2px, -2px)' },
                    '60%': { transform: 'translate(2px, 2px)' },
                    '80%': { transform: 'translate(2px, -2px)' },
                    '100%': { transform: 'translate(0)' },
                }
            }
        }
    },
    plugins: [],
}
