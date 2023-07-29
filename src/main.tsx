import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './App.css'

import { ThemeProvider } from "@material-tailwind/react";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);