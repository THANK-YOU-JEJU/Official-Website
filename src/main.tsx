import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './App.css'

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "@material-tailwind/react";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);