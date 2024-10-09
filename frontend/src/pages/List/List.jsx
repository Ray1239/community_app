import React from 'react';
import { Award, Heart, Pizza, Star, ChevronLeft, Coins } from 'lucide-react';
import { useHistory } from 'react-router-dom';
import './List.css';

const donationData = [
  {
    id: 1,
    name: "City Food Bank",
    type: "Organization",
    quantity: 1250,
    donationType: "Fresh Produce",
    lastDonation: "Today"
  },
  {
    id: 2,
    name: "Green Table Restaurant",
    type: "Restaurant",
    quantity: 980,
    donationType: "Prepared Meals",
    lastDonation: "Yesterday"
  },
  {
    id: 3,
    name: "Local Harvest Market",
    type: "Grocery Store",
    quantity: 850,
    donationType: "Mixed Items",
    lastDonation: "2 days ago"
  },
  {
    id: 4,
    name: "Community Kitchen",
    type: "Organization",
    quantity: 720,
    donationType: "Packaged Foods",
    lastDonation: "Today"
  },
  {
    id: 5,
    name: "Fresh Fields Farm",
    type: "Farm",
    quantity: 690,
    donationType: "Fresh Produce",
    lastDonation: "Yesterday"
  }
];

const getRankIcon = (rank) => {
  switch (rank) {
    case 1:
      return <Award size={24} className="text-yellow-400" />;
    case 2:
      return <Award size={24} className="text-gray-400" />;
    case 3:
      return <Award size={24} className="text-orange-400" />;
    default:
      return <Heart size={24} className="text-blue-400" />;
  }
};

const StatCard = ({ value, label, icon }) => (
  <div className="stat-card">
    {icon}
    <div className="stat-value">{value}</div>
    <div className="stat-label">{label}</div>
  </div>
);

const DonorRow = ({ donor, index }) => (
<div className={`leaderboard-row ${index < 3 ? `top-${index + 1}` : ''}`}>
    <div className="rank-cell">
      {getRankIcon(index + 1)}
      <span className="rank-number">#{index + 1}</span>
    </div>
    <div className="donor-cell">
      <div className="donor-info">
        <span className="donor-name">{donor.name}</span>
        <span className="donor-type">{donor.type} • {donor.donationType}</span>
      </div>
    </div>
    <div className="metrics-cell">
      <span className="metric">
        <Coins size={18} />
        {donor.quantity.toLocaleString()} points
      </span>
    </div>
   
  </div>
);

const List = () => {
  const history = useHistory();
  const totalDonations = donationData.reduce((sum, donor) => sum + donor.quantity, 0);
  const averageQuality = (donationData.reduce((sum, donor) => sum + donor.qualityScore, 0) / donationData.length).toFixed(1);

  const handleBack = () => {
    history.goBack();
  };

  return (
    <div className="leaderboard-container">
      <div className="leaderboard-header">
        <h1 className="leaderboard-title">Food Donation Leaderboard</h1>
        <p className="leaderboard-subtitle">Recognizing our top contributors</p>
        <button onClick={handleBack} className="back-button">
          <ChevronLeft size={20} />
          Back
        </button>
      </div>

      <div className="stats-container">
        <StatCard 
          value={totalDonations.toLocaleString()} 
          label="Total Meals Donated"
          icon={<Pizza size={24} className="stat-icon" />}
        />
        <StatCard 
          value={donationData.length} 
          label="Recent Donors"
          icon={<Heart size={24} className="stat-icon" />}
        />
      </div>
    
      <div className="leaderboard-table">
        {donationData.map((donor, index) => (
          <DonorRow key={donor.id} donor={donor} index={index} />
        ))}
      </div>
    </div>
  );
};

export default List;