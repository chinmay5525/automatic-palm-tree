import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather'; // You'll need to install react-feather
import './Banner.css';

const bannerData = [
  {
    id: 1,
    image: '/banner1.jpg', // Add your banner images to public folder
    title: 'Special Offer',
    description: 'Get 20% off on all products',
    buttonText: 'Shop Now',
    buttonLink: '#',
  },
  {
    id: 2,
    image: '/banner2.jpg',
    title: 'New Collection',
    description: 'Discover our latest arrivals',
    buttonText: 'Explore',
    buttonLink: '#',
  },
  {
    id: 3,
    image: '/banner3.jpg',
    title: 'Limited Time',
    description: 'Free shipping on orders over $50',
    buttonText: 'Learn More',
    buttonLink: '#',
  },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === bannerData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? bannerData.length - 1 : prev - 1));
  };

  return (
    <div className="banner-container">
      <div className="banner-wrapper" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {bannerData.map((banner) => (
          <div key={banner.id} className="banner-slide">
            <img src={banner.image} alt={banner.title} />
            <div className="banner-content">
              <h2>{banner.title}</h2>
              <p>{banner.description}</p>
              <a href={banner.buttonLink} className="banner-button">
                {banner.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>
      
      <button className="banner-nav prev" onClick={prevSlide}>
        <ChevronLeft size={24} />
      </button>
      <button className="banner-nav next" onClick={nextSlide}>
        <ChevronRight size={24} />
      </button>
      
      <div className="banner-dots">
        {bannerData.map((_, index) => (
          <button
            key={index}
            className={`dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner; 