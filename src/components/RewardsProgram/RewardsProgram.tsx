import { FaMedal, FaGift, FaTrophy } from 'react-icons/fa';
import './RewardsProgram.css';

const RewardsProgram = () => {
  const rewardsTiers = [
    {
      icon: <FaMedal className="fs-1 text-bronze" />,
      tier: "Bronze",
      points: "0-500 points",
      tierClass: "tier-bronze",
      benefits: ["5% off on all products", "Free shipping on orders above $50", "Birthday bonus points"]
    },
    {
      icon: <FaMedal className="fs-1 text-silver" />,
      tier: "Silver",
      points: "501-1000 points",
      tierClass: "tier-silver",
      benefits: ["10% off on all products", "Free shipping on all orders", "Early access to sales"]
    },
    {
      icon: <FaTrophy className="fs-1 text-gold" />,
      tier: "Gold",
      points: "1001+ points",
      tierClass: "tier-gold",
      benefits: ["15% off on all products", "Priority customer service", "Exclusive member events"]
    }
  ];

  return (
    <section className="py-5 rewards-section">
      <div className="container">
        <div className="text-center mb-5">
          <h4 className="fw-bold mb-3">Rewards Program</h4>
          <p className="text-muted">Join our rewards program and earn points with every purchase!</p>
        </div>

        <div className="row g-4">
          {rewardsTiers.map((tier, index) => (
            <div key={index} className="col-md-4">
              <div className={`card h-100 shadow-sm hover-shadow ${tier.tierClass}`}>
                <div className="card-body text-center">
                  <div className="icon-container mb-4">
                    {tier.icon}
                  </div>
                  <h3 className="h4 mt-3 fw-bold">{tier.tier}</h3>
                  <p className="text-muted">{tier.points}</p>
                  <ul className="list-unstyled">
                    {tier.benefits.map((benefit, idx) => (
                      <li key={idx} className="d-flex align-items-center mb-2">
                        <FaGift className="text-primary me-2" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <button className="btn btn-rewards btn-lg rounded-pill px-5">
            Join Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default RewardsProgram; 