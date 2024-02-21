const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
        "./node_modules/tw-elements-react/dist/js/**/*.js"
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                serif:['Kurale','serif']
            },
            colors:{
                'navbar':'#a1daf7',
                'linK':'#407590'
            }
        },
    },

    plugins: [
        require('@tailwindcss/forms'),
        require("tw-elements-react/dist/plugin.cjs")
    ],
};
