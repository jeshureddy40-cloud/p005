import { StrictMode, HashRouter } from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import{  Route,Routes } from 'react-router-dom';
import APP1 from './APP1.jsx';

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/fc' element={<APP1 />} />
    </Routes>
  </HashRouter>  
)
