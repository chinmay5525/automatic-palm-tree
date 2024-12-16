import "./Stats.css";

const Stats = () => {
  const statsData = [
    {
      icon: "🤝",  // You can replace these with actual icon components or images
      number: "550",
      label: "Partner Didis"
    },
    {
      icon: "✓",
      number: "308",
      label: "Didis Certified on Quality & Hygiene"
    },
    {
      icon: "📜",
      number: "372",
      label: "FSSAI Licensed"
    },
    {
      icon: "🏘️",
      number: "43",
      label: "Villages Impacted"
    }
  ];

  return (
    <div className="stats-container">
      {statsData.map((stat, index) => (
        <div key={index} className="stat-card">
          <div className="stat-icon">{stat.icon}</div>
          <div className="stat-number">{stat.number}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Stats; 