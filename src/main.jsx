import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Circle from './Circle/Circle.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Circle />
  </StrictMode>,
);
