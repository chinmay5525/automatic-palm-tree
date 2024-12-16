import "./FAQ.css";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: "What is Shrihari?",
      answer: "Shrihari is a tech-led food startup that empowers rural women to produce high-quality food products and earn a sustainable livelihood. We work with rural women across India, helping them become financially independent."
    },
    {
      question: "How does Shrihari support rural women?",
      answer: "Shrihari provides training, resources, and market access to rural women, enabling them to produce and sell traditional food products. We also offer technical support and quality control measures to ensure high standards."
    },
    {
      question: "How can I purchase Shrihari products?",
      answer: "Shrihari products are available through our website and select retail partners. Each purchase directly supports our network of rural women entrepreneurs."
    },
    {
      question: "How can I become a Shrihari?",
      answer: "Rural women interested in joining Shrihari can contact us through our website or local coordinators. We provide complete training and support to help you start your journey."
    },
    {
      question: "What types of products does Shrihari offer?",
      answer: "Shrihari offers a range of traditional, high-quality food products including spices, pickles, preserves, and other locally-sourced items made by our network of rural women."
    },
    {
      question: "How does Shrihari ensure product quality?",
      answer: "We maintain strict quality control measures and provide regular training to our Didis. All products undergo quality checks before reaching the market."
    },
    {
      question: "Where does Shrihari currently operate?",
      answer: "Shrihari currently operates in 43 villages across India, with plans for expansion to reach more rural communities."
    },
    {
      question: "How can I support Shrihari's mission?",
      answer: "You can support us by purchasing Shrihari products, spreading awareness about our initiative, or partnering with us for distribution and expansion."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div 
              className={`faq-question ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="faq-icon">{activeIndex === index ? '-' : '+'}</span>
            </div>
            <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ; 