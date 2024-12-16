
import './FaqCarousel.css';

const FaqCarousel = () => {
  const faqSlides = [
    {
      url: 'https://www.instagram.com/reel/CQ1Z1g1F1g1/',
      title: 'Evening Snack Ko Banao Interesting',
      subtitle: 'with FarmDidi Punjabi Mango Pickle'
    },
    {
      url: 'https://www.instagram.com/reel/CQ1Z1g1F1g2/',
      title: 'Zest Up Your',
      subtitle: 'Snacking Game!'
    },
    {
      url: 'https://www.instagram.com/reel/CQ1Z1g1F1g3/',
      title: 'Khaane Ka Swaad Badhao',
      subtitle: 'with FarmDidi Punjabi Mango Pickle!'
    },
    {
      url: 'https://www.instagram.com/reel/CQ1Z1g1F1g4/',
      title: 'Badhaao Tiffin Ka Swaad',
      subtitle: 'FarmDidi Ke Saath'
    },
    {
      url: 'https://www.instagram.com/reel/CQ1Z1g1F1g5/',
      title: 'Try Our New Flavors',
      subtitle: 'Discover the Taste!'
    },
  ];

  return (
    <div className="faq-carousel-container">
      <div className="row">
        {faqSlides.map((slide, index) => (
          <div key={index} className="col-6 col-md-4 col-lg-3">
            <div className="carousel-slide">
              <iframe
                src={`https://www.instagram.com/p/${slide.url.split('/').slice(-2, -1)}/embed`}
                className="carousel-image"
                title={slide.title}
                allowFullScreen
                scrolling="no"
                frameBorder="0"
              ></iframe>
              <div className="carousel-caption">
                <h3>{slide.title}</h3>
                <p>{slide.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqCarousel; 
 