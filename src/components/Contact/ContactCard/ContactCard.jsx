import React from 'react';
import './ContactCard.css';

const ContactCard = ({ iconUrl, text }) => {
    return (
        <div className='contact-details-card'>
            <div className='icon'>
                <img src={iconUrl} alt={text} />
            </div>
            <p>{text}</p>
        </div>
    );
};

export default ContactCard;
