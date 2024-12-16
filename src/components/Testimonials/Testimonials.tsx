import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Regular Customer",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      text: "I've been shopping here for years and the quality never disappoints!",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Gold Member",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      text: "The variety of products and amazing deals keep me coming back!",
      rating: 5
    },
    {
      id: 3,
      name: "Emma Wilson",
      role: "Silver Member",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      text: "Fast shipping and excellent customer service. Highly recommended!",
      rating: 5
    },
    {
      id: 4,
      name: "David Brown",
      role: "Bronze Member",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      text: "Best shopping experience I've had in years. Will definitely return!",
      rating: 5
    }
  ];

  return (
    <section className="testimonials-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h4 className="display-6 fw-bold mb-3">Customer Reviews</h4>
          <p className="text-muted">What our valued customers say about us</p>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="col">
              <div className="testimonial-card d-flex flex-column h-100">
                <div className="d-flex align-items-center mb-3">
                  <div className="testimonial-image-wrapper me-3">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="testimonial-image"
                    />
                  </div>
                  <div>
                    <h6 className="mb-1 fw-bold">{testimonial.name}</h6>
                    <small className="text-muted">{testimonial.role}</small>
                  </div>
                </div>
                <div className="quote-wrapper flex-grow-1">
                  <FaQuoteLeft className="quote-icon mb-2" />
                  <p className="testimonial-text">{testimonial.text}</p>
                </div>
                <div className="rating mt-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-warning me-1" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 