// Router.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Resume from '../pages/Resume/Resume'
import Home from '../pages/Home/Home';
import Contact from '../pages/contact/Contact';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
  );
}

export default Router;
