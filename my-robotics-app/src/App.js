import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Services from './Components/Services';
import Product from './Components/Product';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


function App() {
  return (
    <div className='Body'>   
    <Router>
    <Navbar />
      <Routes>
        <Route path="/gear" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
        <ConditionalFooter />
      </Router>
    </div>
  );
};



const ConditionalFooter = () => {
  const location = useLocation();
  return location.pathname !== '/' ? <Footer /> : null;
};

export default App;
