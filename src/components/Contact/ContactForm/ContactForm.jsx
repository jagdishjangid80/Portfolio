import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
    return (
        <div className='contact-form-content'> 
            <form>
                <div className='name-container'>
                    <input type='text' name='Firstname' placeholder='Firstname' />
                    <input type='text' name='Lastname' placeholder='Lastname' />
                </div>
                <input type='email' name='Email' placeholder='Email' />
                <textarea name='message' placeholder='Message' rows={3} />
                <button type='submit'>SEND</button> 
            </form>
        </div>
    );
};

export default ContactForm;
