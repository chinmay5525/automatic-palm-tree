import React, { useState } from 'react';
import './MediaShowcase.css';

interface MediaCard {
  logo: string;
  quote: string;
  link: string;
}

const mediaData: MediaCard[] = [
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Forbes_logo.svg/1280px-Forbes_logo.svg.png",
    quote: "Leading innovation in sustainable business practices across India...",
    link: "/media/forbes"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/The_Economic_Times_logo.png/1280px-The_Economic_Times_logo.png",
    quote: "Revolutionizing rural entrepreneurship with technology-driven solutions...",
    link: "/media/economic-times"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Business_Today_Logo.svg/1280px-Business_Today_Logo.svg.png",
    quote: "Creating lasting impact in local communities through digital transformation...",
    link: "/media/business-today"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/The_Hindu_logo.svg/1280px-The_Hindu_logo.svg.png",
    quote: "Bridging the digital divide with innovative approaches to rural development...",
    link: "/media/the-hindu"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Times_of_India_logo.svg/1280px-Times_of_India_logo.svg.png",
    quote: "Transforming lives through innovative technological solutions and sustainable practices...",
    link: "/media/times-of-india"
  }
];

const MediaShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (mediaData.length - 4));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + mediaData.length - 4) % (mediaData.length - 4));
  };

  return (
    <section className="media-showcase">
      <h2 className="media-showcase__title">Featured In</h2>
      <div className="media-showcase__slider">
        <button className="media-showcase__button" onClick={prevSlide}>‹</button>
        <div className="media-showcase__slides">
          {mediaData.map((item, index) => (
            <div
              key={index}
              className={`media-card ${index >= currentIndex && index < currentIndex + 5 ? 'active' : ''}`}
              style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
            >
              <div className="media-card__logo-container">
                <img src={item.logo} alt="Media logo" className="media-card__logo" />
              </div>
              <p className="media-card__quote">{item.quote}</p>
              <button className="media-card__button">
                Read more
              </button>
            </div>
          ))}
        </div>
        <button className="media-showcase__button" onClick={nextSlide}>›</button>
      </div>
    </section>
  );
};

export default MediaShowcase; 