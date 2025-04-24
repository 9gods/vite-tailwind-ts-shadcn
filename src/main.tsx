import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css' // ⬅️ Importa o Tailwind aqui
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)