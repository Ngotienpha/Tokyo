import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import Contact from './Contact/Contact.jsx'
import './index.css'
import Courses from './Courses/Courses.jsx'
import Teacher from './Teacher/Teacher.jsx'
import Courses2 from './Courses/Courses2.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Courses" element={<Courses />}/>
        <Route path="Courses2" element={<Courses2 />}/>
        <Route path="Teacher" element={<Teacher />}/>
      </Routes>
    </Router>
  </React.StrictMode>
);
