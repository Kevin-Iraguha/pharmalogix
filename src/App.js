import React from "react";
import "./App.css";
import {
  FaPaperPlane,
  FaPrescriptionBottleAlt,
  FaUserMd,
  FaTruck,
} from "react-icons/fa";
import orderIllustration from "./assets/order-illustration.png";
import { motion } from "framer-motion"; // 👈 Added Framer Motion

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <div className="logo">PharmaLogix</div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#order-now">Order Now</a>
            <a href="#about">About</a>
            <a href="#contact" className="btn">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* ✅ Hero Section with Animation */}
        <motion.section
          id="home"
          className="hero"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-content">
            <h1>Bridging the Medicine Access Gap in Rwanda</h1>
            <p>Fast and reliable doorstep delivery of prescription medicines.</p>
            <a href="#order-now" className="btn primary">
              <FaPaperPlane style={{ marginRight: "8px" }} />
              Order Now
            </a>
          </div>
          <div className="hero-image">
            <img
              src={orderIllustration}
              alt="Order Illustration"
              style={{ width: "100%", maxWidth: "500px" }}
            />
          </div>
        </motion.section>

        {/* How It Works Section */}
        <section id="how-it-works" className="section">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <FaPrescriptionBottleAlt size={32} color="#3b82f6" />
              <h3>Upload Prescription</h3>
              <p>Submit your prescription via our secure platform.</p>
            </div>
            <div className="step">
              <FaUserMd size={32} color="#3b82f6" />
              <h3>Pharmacy Verification</h3>
              <p>Partner pharmacies verify and prepare your order.</p>
            </div>
            <div className="step">
              <FaTruck size={32} color="#3b82f6" />
              <h3>Delivery to Your Doorstep</h3>
              <p>Get your medication delivered quickly to your home.</p>
            </div>
          </div>
        </section>

        {/* Order Section */}
        <section id="order-now" className="section alt-bg">
          <h2>Order Medicines Online</h2>
          <p>
            Receive your prescribed medicines at your doorstep without visiting a
            pharmacy.
          </p>
          <a href="#contact" className="btn primary">
            <FaPaperPlane style={{ marginRight: "8px" }} />
            Order Now
          </a>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section">
          <h2>Contact Us</h2>
          <p>Contact form coming soon...</p>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 PharmaLogix. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;