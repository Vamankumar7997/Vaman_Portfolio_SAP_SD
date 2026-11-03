// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port:5173,
//     open: true,
  
//     // proxy: {
//     //   '/sendmail': 'http://localhost:8000',
//     //  },
//    }, // Change 5000 to whatever port your app.js prints
//     },
//   },
  
// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  oxc: { include: /src\/.*\.[jt]sx?$/, lang: 'jsx' },
})
