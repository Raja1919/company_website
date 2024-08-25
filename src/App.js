import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/index.js';
import Footer from './components/footer/index.js';
import Services from './Pages/services/index.js';
import Contact from './Pages/contact/index.js';
import Home from './Pages/home/index.js';
import About from './Pages/about/about.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
