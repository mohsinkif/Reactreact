import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import { QueryClient, QueryClientProvider } from 'react-query';
// import Root from './components/Root';
import Contact from './components/Contact';
import Harvester from './components/Harvester';
import Footer from './components/Footer';
import Transporter from './components/Transporter';
// import Login from './components/Auth/Login';
// import Admin from './components/Auth/admin/Admin';

const App = () => {
  const slides=["bg.avif","bgav.avif"];

  const queryClient = new QueryClient();

  return (
    <>
     <QueryClientProvider client={queryClient}>
     <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About slides={slides} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/harvester" element={<Harvester />} />
          <Route path='/transporter' element={<Transporter/>} />
          
        </Routes>

      </div>
    </Router>

     </QueryClientProvider>
    </>
    
  );
}

export default App;