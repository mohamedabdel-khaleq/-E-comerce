
import React, { useState } from 'react';
import './style/Contact.css';
import { FaWhatsapp, FaPhoneAlt, FaFacebookMessenger, FaEnvelope, FaUserMd, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    setTimeout(() => setShowModal(false), 3000);
  };

  return (
    <div className="contact-container" id="contact">
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-subtitle">We’re always happy to hear from you 💙</p>

      <div className="contact-content">
        <div className="contact-map">
          <iframe
              title="E-comerce-location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3421.1234567890123!2d31.0345!3d31.0365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583d927b9dd7ed%3A0xa8b6c546c8e0833!2sMansoura%2C%20Dakahlia%2C%20Egypt!5e0!3m2!1sar!2seg!4v1700000000000"
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              ></iframe>

   

        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send Us a Message</h3>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <select required>
            <option value="">Select Service</option>
            <option value="Medical Checkup">Medical Checkup</option>
            <option value="Consultation">Consultation</option>
            <option value="Lab Tests">Lab Tests</option>
          </select>
          <input type="file" accept=".pdf,.jpg,.png" />
          <textarea rows="5" placeholder="Write your message..." required></textarea>
          <button type="submit">Send</button>

          <div className="social-links">
            <a href="https://wa.me/201093378515" target="_blank" rel="noreferrer">
              <FaWhatsapp />
            </a>
            <a href="tel:01093378515">
              <FaPhoneAlt />
            </a>
            <a href="https://m.me/yourpage" target="_blank" rel="noreferrer">
              <FaFacebookMessenger />
            </a>
            <a href="mailto:mohamedabdelkhaleq2004@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </form>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h4>✅ Your message was sent successfully</h4>
            <p>We will get back to you as soon as possible.</p>
          </div>
        </div>
      )}
    </div>
  );
}
