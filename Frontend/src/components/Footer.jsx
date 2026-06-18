import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Smart<span>Farmer</span> 🌱</h3>
          <p>Delivering farm-fresh produce straight to your doorstep. Experience the finest modern agriculture combined with traditional values.</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact Info</h4>
          <ul>
            <li>📍 123 Farming Lane, Green Valley</li>
            <li>📞 +1 (234) 567-8900</li>
            <li>✉️ info@smartfarmer.com</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Newsletter</h4>
          <p>Subscribe to get updates on our latest fresh arrivals and offers.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button className="btn">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} SmartFarmer. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
