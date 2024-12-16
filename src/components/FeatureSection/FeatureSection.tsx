import React from 'react';
import './FeatureSection.css';

const features = [
  {
    icon: '🚚',
    text: 'FREE Shipping for 15,000+ Pincodes'
  },
  {
    icon: '😊',
    text: '2L+ Happy Customers'
  },
  {
    icon: '🦈',
    text: 'Varioud Rewards and Offers'
  },
  {
    icon: '💰',
    text: 'COD Available'
  }
];

const FeatureSection: React.FC = () => {
  return (
    <div className="feature-section">
      {features.map((feature, index) => (
        <div key={index} className="feature-item">
          <div className="feature-icon">{feature.icon}</div>
          <p className="feature-text">{feature.text}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureSection; 