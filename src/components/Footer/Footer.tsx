import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaApple, FaGooglePlay } from 'react-icons/fa';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section company-info">
          <h3>ABC PRIVATE LIMITED</h3>
          <div className="contact-info">
            <p><strong>Address:</strong> 123 Main Street, Mumbai City MH 410210</p>
            <p><strong>Phone:</strong> +91 1234567890</p>
            <p><strong>Email:</strong> contact@missiondidis.com</p>
          </div>
          <div className="social-links">
            <a href="https://facebook.com" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
          <div className="app-store-links">
            <a href="https://apps.apple.com/your-app" className="store-button" aria-label="Download on App Store">
              <FaApple />
              <div className="store-button-content">
                <span className="store-text">Download on the</span>
                <span className="store-name">App Store</span>
              </div>
            </a>
            <a href="https://play.google.com/store/your-app" className="store-button" aria-label="Get it on Google Play">
              <FaGooglePlay />
              <div className="store-button-content">
                <span className="store-text">Get it on</span>
                <span className="store-name">Google Play</span>
              </div>
            </a>
          </div>
          
          <div className="payment-section">
            <h4 className="powered-by">Powered By</h4>
            <div className="payment-methods">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/200px-Mastercard-logo.svg.png" 
                alt="Mastercard"
              />
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/200px-Visa_Inc._logo.svg.png" 
                alt="Visa"
              />
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/d/d1/RuPay.svg" 
                alt="RuPay"
              />
            </div>
          </div>

        </div>

        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="/our-story">Our Story</a></li>
            <li><a href="/blogs">Blogs and Recipes</a></li>
            <li><a href="/share">Share & Earn</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Policies</h3>
          <ul>
            <li><a href="/terms">Terms and conditions</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/refund">Cancellation and Refund</a></li>
            <li><a href="/shipping">Shipping and Exchange</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Shop</h3>
          <ul>
            <li><a href="/shop/homemade">Homemade Pickles</a></li>
            <li><a href="/shop/chutneys">Chutneys</a></li>
            <li><a href="/shop/spicy">Spicy Pickles</a></li>
            <li><a href="/shop/tangy">Tangy Pickles</a></li>
            <li><a href="/shop/sweet">Sweet Pickles</a></li>
            <li><a href="/shop/mango">Mango pickles</a></li>
            <li><a href="/shop/trial">Trial packs/combos</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ABC Private Limited. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 