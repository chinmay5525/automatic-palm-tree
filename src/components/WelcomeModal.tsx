import React, { useState } from 'react';
import './WelcomeModal.css';

const WelcomeModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('hasVisitedBefore', 'true');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="welcome-modal">
        <button 
          className="close-button" 
          onClick={() => setIsOpen(false)}
        >
          ×
        </button>

        <div className="modal-grid">
          {/* Left side - Image */}
          <div className="modal-image">
            <img 
              src="/shark-tank-image.jpg" 
              alt="Image" 
              className="shark-tank-img"
            />
          </div>

          {/* Right side - Content */}
          <div className="modal-content">
            <div className="modal-header">
              <h2>We are Celebrating</h2>
             
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="input-wrapper">
                <label>Whatsapp number</label>
                <div className="phone-input">
                  <div className="country-code">
                    <img 
                      src="/india-flag.png" 
                      alt="India" 
                      className="flag"
                    />
                    <span>+91 ▼</span>
                  </div>
                  <input
                    type="tel"
                    placeholder="eg: 9876543210"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    pattern="[0-9]{10}"
                    required
                  />
                </div>
              </div>
              <button type="submit" className="claim-btn">
                Claim Discount
              </button>
            </form>
            <div className="powered-by">
              Powered by BIK
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal; 