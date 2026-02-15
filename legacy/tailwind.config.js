/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}',
    './../ngx-core-app/dist/ngx-core/**/*.{html,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')
    ,require('@tailwindcss/typography')
],
};
