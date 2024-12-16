import React from 'react';
import './MediaShowcase.css';
import logo1 from '../../assets/logo1.png';
import logo2 from '../../assets/logo2.png';
import logo3 from '../../assets/logo3.png';
import logo4 from '../../assets/logo4.jpg';
import logo5 from '../../assets/logo5.jpg';



const MediaShowcase: React.FC = () => {
  return (
    <section className="media-showcase">
      <h2 className="media-showcase__title">Featured In</h2>
      <div style={{ textAlign: 'center' }}>
        <img src={logo1} alt="Logo 1" className="media-showcase__image" style={{ margin: '0 20px' }} />
        <img src={logo2} alt="Logo 2" className="media-showcase__image" style={{ margin: '0 20px' }} />
        <img src={logo3} alt="Logo 3" className="media-showcase__image" style={{ margin: '0 20px' }} />
        <img src={logo4} alt="Logo 4" className="media-showcase__image" style={{ margin: '0 20px' }} />
        <img src={logo5} alt="Logo 5" className="media-showcase__image" style={{ margin: '0 20px' }} />
      </div>
    </section>
  );
};

export default MediaShowcase; 