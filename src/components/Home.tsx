import "./Home.css";
import Stats from "./Stats/Stats";

const Home = () => {
  return (
    <div>
      <div className="about-section">
        <div className="about-left">
          <img src="/path-to-your-image.jpg" alt="Rural Women Empowerment" />
        </div>
        <div className="about-right">
          <h1>A Visionary Team Empowering Rural Women accross India</h1>
          <p>
            "Rural women reinvest 90% of their income in their family in terms
            of better education and health outcomes of family as compared to 35%
            in case of men." When Manjari learnt that she decided to create a
            business that could empower 1 million rural women. In 2021, she
            started Shrihari with her husband Anukrit and her sister-like friend
            Asmita.
          </p>
          <p>
            Shrihari is a tech-led food startup aimed at helping rural women
            produce high-quality food products and earn a livelihood. Today, it
            comprises 550 Didis from rural India and has positively impacted 43
            villages.
          </p>
          <button className="read-more-btn">Read More</button>
        </div>
      </div>
      <Stats />
    </div>
  );
};

export default Home;
