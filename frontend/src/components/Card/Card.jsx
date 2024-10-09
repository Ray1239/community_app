import React from 'react'
import './Card.css'

const Card = ({ title, buttonText, onButtonClick, imageUrl }) => {
    return (
        <div className="card">
            <div className="card-overlay">
                <img src={imageUrl} alt={title} className="card-img" />
                <div className="card-content">
                    <h3 className="card-title">{title}</h3>
                    <button className="card-button" onClick={onButtonClick}>
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;