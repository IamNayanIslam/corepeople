
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { SidebarContextProvider } from './Contexts/SidebarContext.tsx'

createRoot(document.getElementById('root')!).render(
  <SidebarContextProvider>
    <App />
  </SidebarContextProvider>,
)
