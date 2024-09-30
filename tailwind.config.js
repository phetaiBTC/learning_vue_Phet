/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'color1': '#821131',
                'color2': '#C7253E',
                'color3': '#E85C0D',
                'color4': '#FABC3F',
                'color5': '#243c5a',
                'color6': 'rgb(153,0,41)',
                'color7': '#FFF5E1',
                'text1': '#212121',
                'text2': '#5a5a5a',
            },
        },
    },
    plugins: [],
}