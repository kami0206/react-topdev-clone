// tailwind.config.js
import lineClamp from '@tailwindcss/line-clamp'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        '1376': '1376px',
      },
    },
  },
  plugins: [lineClamp],
}
