import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import PVSpeicher from './pages/PVSpeicher';
import SmartHome from './pages/SmartHome';
import Contact from './pages/Contact';
import Datenschutz from './pages/Datenschutz';
import Impressum from './pages/Impressum';
import ScrollToTop from "./components/ScrollToTop"; 

function App() {
  return (
    <Router>
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/uber-uns" element={<About />} />
          <Route path="/pv-speicher" element={<PVSpeicher />} />
          <Route path="/smart-home" element={<SmartHome />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/impressum" element={<Impressum />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;