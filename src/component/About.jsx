import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import './style/About.css';

const stats = [
  { icon: "📦", end: 500, suffix: "+", label: "Products" },
  { icon: "😊", end: 1200, suffix: "+", label: "Happy Customers" },
  { icon: "🚚", end: 300, suffix: "+", label: "Fast Deliveries" }
];

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        
        {/* Text Section */}
        <div className="left card slide-in-left">
          <h2 className="title">About Us</h2>
          <p className="lead">
            Welcome to <strong>ShopEase</strong>, your all-in-one online store
            offering high-quality products at unbeatable prices, with a smooth
            and secure shopping experience.
          </p>
          <p className="desc">
            Our mission is to make online shopping enjoyable and accessible for
            everyone by providing a wide variety of products, fast delivery, and
            excellent customer service.
          </p>

          {/* Core Values */}
          <div className="values">
            <div className="value">
              <span className="icon">⭐</span>
              <span>Quality First</span>
            </div>
            <div className="value">
              <span className="icon">⚡</span>
              <span>Fast Delivery</span>
            </div>
            <div className="value">
              <span className="icon">💬</span>
              <span>Exceptional Support</span>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="right image-card slide-in-right">
          <img
            src="https://images.unsplash.com/photo-1607082349566-187342175e2f"
            alt="About ShopEase"
            className="hero-img"
          />
        </div>
      </div>

      {/* Counters Section */}
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
            <div className="counter-icon">{item.icon}</div>
            <h2>
              <CountUp end={item.end} duration={2.5} suffix={item.suffix} />
            </h2>
            <p>{item.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Team Section */}
      <div className="team-section">
        <h3 className="team-title">Our Team</h3>
        <div className="team-grid">
          <div className="team-member">
            <img src="https://i.pravatar.cc/150?img=1" alt="Team Member" />
            <h4>Mohamed Ahmed</h4>
            <p>CEO</p>
          </div>
          <div className="team-member">
            <img src="https://i.pravatar.cc/150?img=2" alt="Team Member" />
            <h4>Sarah Ali</h4>
            <p>Marketing Manager</p>
          </div>
          <div className="team-member">
            <img src="https://i.pravatar.cc/150?img=3" alt="Team Member" />
            <h4>Ahmed Mahmoud</h4>
            <p>Head of Sales</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
