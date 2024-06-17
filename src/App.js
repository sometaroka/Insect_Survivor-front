// src/App.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import ServicesPage from './pages/ServicesPage';
import './styles/common.css'; // 共通のCSS

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" exact component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/services" component={ServicesPage} />
            <Route path="/profile" component={ProfilePage} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
