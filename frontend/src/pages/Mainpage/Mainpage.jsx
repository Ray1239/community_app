import React, { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';
import './Mainpage.css';
import BottomNavbar from "../../components/BottomNavbar";
import { ChevronRight } from 'lucide-react';
import axios from "axios";import { useHistory } from 'react-router-dom';
import List from '../List/List';


const Mainpage = () => {
    const [donation, setDonation] = useState({ isFetched: false, donations: [], totalPoints: 0 });

    useEffect(() => {
        const getDonations = async () => {
            try {
                const { data } = await axios.get(
                    `${process.env.REACT_APP_BACKEND_URL}/foodDonation`,
                    {
                        withCredentials: true,
                    }
                );

                const points = await axios.get(
                    `${process.env.REACT_APP_BACKEND_URL}/user/points`,
                    {
                        withCredentials: true,
                    }
                )
                setDonation({ isFetched: true, donations: data, totalPoints: points.data.totalPoints });
            } catch (err) {
                console.error(err);
                setDonation({ isFetched: false, donations: [], totalPoints: 0 });
            }
        };

        getDonations();
    }, []);

    const mealImages = {
        Breakfast: '/images/breakfast.jpg',
        Lunch: '/images/lunch.jpg',
        Dinner: '/images/dinner.jpg',
    };

    const recentDonations = donation.donations.slice(-2).reverse();
    console.log(donation)

    const history = useHistory();
    const handleListClick = () => {
        history.push('/List');
    };
    const cardsData = [
        {
            title: 'Passionate about helping the need?',
            buttonText: 'Donate Now',
            imageUrl: '/images/donate1.png',
            onButtonClick: () => alert('Donate Now Clicked!'),
        },
        {
            title: 'Want to become a volunteer?',
            buttonText: 'Welcome',
            imageUrl: '/images/community.png',
            onButtonClick: () => alert('Join our Community Clicked!'),
        },
        {
            title: 'Handmade with heart and hope',
            buttonText: 'Shop now',
            imageUrl: '/images/hand.png',
            onButtonClick: () => alert('Shop Now Clicked!'),
        },
    ];

    const previousDonations = [
        {
            title: "Veg Rice",
            details: "I made this about of",
            quantity: "1.5 kg",
            timeAgo: "2 days ago",
            image: "/images/veg.png"
        },
        {
            title: "Lemon Rice",
            details: "I got an excess amount of",
            quantity: "2 kg",
            timeAgo: "4 days ago",
            image: "/images/lemon.png"
        }
    ];
    const donors = [
        { name: "John", image: "/images/man1.png" },
        { name: "Mr. Sandeep", image: "/images/man2.png" },
        { name: "Melissa", image: "/images/women3.png" },
        { name: "Hermoine", image: "/images/women4.png" }
    ];

    return (
        <>
            <BottomNavbar />
            <div className="page-container">
                <div className="main-heading">
                    <h2 className="main-head">Every bites count</h2>
                    <p className="p-opensans">Share your surplus food</p>
                    <p className="p-opensans">Discover sustainable living</p>
                </div>

                <div className="card-container">
                    {cardsData.map((card, index) => (
                        <Card
                            key={index}
                            title={card.title}
                            buttonText={card.buttonText}
                            imageUrl={card.imageUrl}
                            onButtonClick={card.onButtonClick}
                        />
                    ))}
                </div>

                {/* Previous Donations Section */}
                {/* <div className="section">
                    <div className="section-head">
                        <h2 className="section-title">Previous Donation</h2>
                        <button className="section-btn">
                        <ChevronRight size={20} />
                        </button>
                    </div>
                    <div className="donation-list">
                        {previousDonations.map((item, index) => (
                            <div key={index} className="donation-item">
                                <img src={item.image} alt={item.title} />
                                <div className="donation-details">
                                    <div className="donation-header">
                                        <h4>{item.title}</h4>
                                        <button className="view-details">View Details</button>
                                    </div>
                                    <p>{item.details} {item.quantity} ...read more</p>
                                    <p className="time-ago">{item.timeAgo}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> */}
                <div className="section">
                    <div className="section-head">
                        <h2 className="section-title">Previous Donations</h2>
                        <button className="section-btn">
                            <ChevronRight size={20} />
                        </button>
                    </div>
                    <div className="donation-list">
                        {recentDonations.map((item, index) => (
                            <div key={index} className="donation-item">
                                <img src={mealImages[item.foodDetails.meal] || '/images/dinner.jpg'} alt={item.foodDetails.meal} />
                                <div className="donation-details">
                                    <div className="donation-header">
                                        <h4>{item.foodDetails.type} {item.foodDetails.meal}</h4>
                                    </div>
                                    <p>{`Prepared for ${item.foodDetails.quantity} people`}</p>
                                    <p className="time-ago">{new Date(item.createdAt).toLocaleDateString()}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Top Food Donors Section */}
                <div className="section">
                    <div className="section-head">
                        <h2 className="section-title">Top Food Donors</h2>
                        <button className="section-btn" onClick={handleListClick}>
                            <ChevronRight size={20} />
                        </button>
                    </div>
                    <p className="section-subtitle">Meet The Heroes Behind Our Mission</p>
                    <div className="donors-grid">
                        {donors.map((donor, index) => (
                            <div key={index} className="donor-item">
                                <img src={donor.image} alt={donor.name} />
                                <p>{donor.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
                {/* see the difference section */}
                <div className="dashboard-container">
                    <h2>See the Difference You’re Making!</h2>

                    <div className="stats-cards">
                        <div className="stats-card">
                            <p>Total Donation</p>
                            <h3>{donation.donations.length}</h3>
                            <p>Donation</p>
                        </div>
                        <div className="stats-card">
                            <p>Woohoo! You have earned</p>
                            <h3>{donation.totalPoints}</h3>
                            <p>points earned</p>
                        </div>
                    </div>
                    <button className="points-button">View my points</button>
                    <div className="mission-statement">
                        <h4>Our Mission</h4>
                        <p>
                            We rescue excess food, employ trained craftspeople, and sell their handmade goods to fund our work.
                            We are creating a world that is more sustainable and humane by reducing food waste and boosting economic prosperity.
                        </p>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Mainpage;
