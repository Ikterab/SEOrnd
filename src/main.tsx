import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { router } from './routes/router.tsx'

createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <StrictMode>
      {/* <App /> */}
      <RouterProvider router={router} />
    </StrictMode>,
  </HelmetProvider>

)
