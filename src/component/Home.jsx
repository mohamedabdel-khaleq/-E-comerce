import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaInfoCircle, FaBars, FaTimes, FaEnvelope, FaThList, FaMoon, FaSun } from 'react-icons/fa';
import { FaClock, FaUserMd, FaUserFriends, FaSmileBeam } from 'react-icons/fa';
import './style/Home.css';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { section } from 'framer-motion/client';
import CountUp from 'react-countup';




  const stats = [
    { icon: <FaClock />, end: 15, label: 'Sales Increase (Monthly)' },
    { icon: <FaUserMd />, end: 30, label: 'New Products' },
    { icon: <FaUserFriends />, end: 9000, label: 'Happy Customers' },
    { icon: <FaSmileBeam />, end: 100, label: 'Customer Satisfaction', suffix: '%' }
  ];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("darkMode");
    return stored === "true";
  });

  const location = useLocation();

  const menuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const menuClose = () => {
    setMenuOpen(false);
  };

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
  };


  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <div className="navbar">
        <div className="nav">
          <p><strong>E-commerce</strong></p>
        </div>

        <div className="nav-link">
          <Link to="/"><FaHome /> Home</Link>
          <Link to="/about"><FaInfoCircle /> About</Link>
          <Link to="/products"><FaThList /> Products</Link>
          <Link to="/contact"><FaEnvelope /> Contact</Link>
        </div>

        <div className="actions">
          <button className="button" onClick={toggleDarkMode}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button className="button" onClick={menuToggle}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

     
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            className="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={menuClose}
          />
        )}
      </AnimatePresence>

    
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            className="side-menu"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3 }}
          >
  

            <ul>
              <li><Link to="/" onClick={menuClose}><FaHome /> Home</Link></li>
              <li><Link to="/about" onClick={menuClose}><FaInfoCircle /> About</Link></li>
              <li><Link to="/products" onClick={menuClose}><FaThList /> Products</Link></li>
              <li><Link to="/contact" onClick={menuClose}><FaEnvelope /> Contact</Link></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>


      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4 }}
        >
        </motion.div>
      </AnimatePresence>

<section className="header">
  <div className="head">
    <div className="image-section" data-aos="fade-right">
      <img 
        src="https://ar.litoscreen.com/uploadfile/201810/10/520858807f8f5752edfd540f4bade484_thumb.jpg" 
        alt="Wireless Headphones"
      />
    </div>
    <div className="text-section" data-aos="fade-left">
      <h2>Wireless Headphones</h2>
      <p>
        Experience crystal-clear sound with our premium wireless headphones.<br />
        Perfect for music lovers, gamers, and professionals.<br />
        Enjoy unmatched comfort, sleek design, and top-tier audio quality.
      </p>
      <button className="cta-btn">Shop Now</button>
    </div>
  </div>
</section>


    <section className='about' id='about' about>
      <h2 className="section-title">About Us</h2>
      <div className="aboutus">
        <p>
          We’ve achieved exceptional performance in sales and customer satisfaction. 
          Our numbers speak for themselves — join the growing list of happy customers!
        </p>
        <div className="counters">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              className="counter"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <div className="icon">{item.icon}</div>
              <h2>
                <CountUp end={item.end} duration={2.5} suffix={item.suffix || '+'} />
              </h2>
              <p>{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

<section class="products-section">
  <h2>Our Products</h2>
  <div class="products-grid">

    <div class="product-card">
      <img src="data:image/jpeg;base64,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" 
      alt="Headphones" />
      <h3>Wireless Headphones</h3>
      <p class="price">$59.99</p>
      <button>Add to Cart</button>
    </div>

    <div class="product-card">
      <img src="data:image/jpeg;base64,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"
       alt="Smart Watch" />
      <h3>Smart Watch</h3>
      <p class="price">$89.99</p>
      <button>Add to Cart</button>
    </div>

    <div class="product-card">
      <img src="data:image/jpeg;base64,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"
       alt="Laptop" />
      <h3>Ultra Thin Laptop</h3>
      <p class="price">$1,199.99</p>
      <button>Add to Cart</button>
    </div>

    <div class="product-card">
      <img src="data:image/jpeg;base64,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"
       alt="Iphone" />
      <h3>Iphone</h3>
      <p class="price">$850.99</p>
      <button>Add to Cart</button>
    </div>

  </div>
</section>
  
          <footer className="footer">
        <div className="footer-container">
          <div className="footer-col logo-col">
            <p className="logo-text">E-comerce</p>
            <p className="footer-description">
              Trusted care anytime, anywhere. We're here to support your health.
            </p>
            <div className="social-icons">
              <FaFacebookF />
              <FaInstagram />
              <FaWhatsapp />
            </div>
          </div>

          <div className="footer-col">
            <h2>Quick Links</h2>
            <p>Home</p>
            <p>About Us</p>
            <p>Products</p>
            <p>Contact</p>
          </div>

          <div className="footer-col">
            <h2>Contact Us</h2>
            <p>Phone: (+20) 109 337 8515</p>
            <p>Email: mohamedabdelkhaleeq2004@gmail.com</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} E-comerce. All rights reserved.</p>
        </div>
      </footer>

    </div>
    );
}
