import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './Pages/Login.jsx'
import About from './Pages/About.jsx'
import Support from './Pages/Support.jsx'
import Form from './Pages/Form.jsx'
import Under99 from './Pages/Under99.jsx'
import Under199 from './Pages/Under199.jsx'
import Under299 from './Pages/Under299.jsx'
import Under399 from './Pages/Under399.jsx'
import Under499 from './Pages/Under499.jsx'      
import {BrowserRouter, Routes, Route } from "react-router";
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>}/>
    <Route path="/app" element={<App/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/support" element={<Support/>}/>
    <Route path="/form" element={<Form/>}/>
    <Route path="/under99" element={<Under99/>}/>
    <Route path="/under199" element={<Under199/>}/>
    <Route path="/under299" element={<Under299/>}/>
    <Route path="/under399" element={<Under399/>}/>
    <Route path="/under499" element={<Under499/>}/>
  </Routes>
  
  </BrowserRouter>
)
