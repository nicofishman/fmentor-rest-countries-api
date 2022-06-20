/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.tsx'],
    theme: {
        extend: {
            colors: {
                'dark-blue': 'hsl(209, 23%, 22%)',
                'dark-blue-back': 'hsl(207, 26%, 17%)',
                'dark-blue-text': 'hsl(200, 15%, 8%)',
                'dark-gray': 'hsl(0, 0%, 52%)',
                'very-light-gray': 'hsl(0, 0%, 98%)'
            },
            fontFamily: {
                sans: ['Nunito Sans']
            },
            fontSize: {
                xxs: '0.6rem'
            },
            dropShadow: {
                custom: '0px 0px 12px 10px --tw-shadow-color'
            }
        }
    },
    plugins: []
};
