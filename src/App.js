// src/App.js
import React, { useState } from "react";
import "./App.css";
import {
  FaPaperPlane,
  FaPrescriptionBottleAlt,
  FaUserMd,
  FaTruck,
} from "react-icons/fa";
import orderIllustration from "./assets/order-illustration.png";
import { motion } from "framer-motion";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="App">
      <header>
        <nav>
          <div className="logo">PharmaLogix</div>
          <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
            <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#how-it-works" onClick={() => setIsMenuOpen(false)}>How It Works</a>
            <a href="#order-now" onClick={() => setIsMenuOpen(false)}>Order Now</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#contact" className="btn" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
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

        {/* How It Works */}
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
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const formData = {
                name: e.target.name.value,
                medicine: e.target.medicine.value,
                quantity: e.target.quantity.value,
                address: e.target.address.value,
                phone: e.target.phone.value,
                email: e.target.email.value,
                notes: e.target.notes.value,
              };

              try {
                const response = await fetch('https://pharmalogix-backend-3.onrender.com/api/order', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(formData),
                });

                const result = await response.json();
                alert(result.message);
              } catch (error) {
                alert('Error submitting order.');
              }
            }}
            style={{ maxWidth: "600px", margin: "0 auto", textAlign: "left" }}
          >
            <label>Full Name</label>
            <input type="text" name="name" required style={{ width: "100%", marginBottom: "10px" }} />
            <label>Medicine Name</label>
            <input type="text" name="medicine" required style={{ width: "100%", marginBottom: "10px" }} />
            <label>Quantity</label>
            <input type="number" name="quantity" min="1" required style={{ width: "100%", marginBottom: "10px" }} />
            <label>Delivery Address</label>
            <input type="text" name="address" required style={{ width: "100%", marginBottom: "10px" }} />
            <label>Phone Number</label>
            <input type="text" name="phone" required style={{ width: "100%", marginBottom: "10px" }} />
            <label>Email (optional)</label>
            <input type="email" name="email" style={{ width: "100%", marginBottom: "10px" }} />
            <label>Additional Notes (optional)</label>
            <textarea name="notes" rows="4" style={{ width: "100%", marginBottom: "10px" }}></textarea>

            <button type="submit" className="btn primary">
              <FaPaperPlane style={{ marginRight: "8px" }} />
              Submit Order
            </button>
          </form>
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