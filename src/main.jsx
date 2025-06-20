import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '/src/components/template-components/TemplateStyles.scss'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
