import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import $ from 'jquery'
import Navbar from './Navbar/Navbar';
import HomePage from './pages/Home/HomePage'
import EducationPage from './pages/Education/EducationPage';
import ContactPage from './pages/contact/ContactPage';
import WorkPage from './pages/Work/WorkPage';
import MathematicsPage from './pages/Mathematics/MathematicsPage';


$('#myVideo').on('ended', function () {
  this.load();
  this.play();
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/education" element={<EducationPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="/work" element={<WorkPage/>} />
        <Route exact path="/maths" element={<MathematicsPage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

