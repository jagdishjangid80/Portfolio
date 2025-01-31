import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import EMAILJS_CONFIG from '../../config/emailConfig';
import './ContactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        from_name: '',
        to_name: 'Jagdish Jangid',
        message: '',
        email: '',
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        console.log("Form Data: ", formData);

        try {
            const response = await emailjs.send(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID,
                {
                    to_name: formData.to_name,
                    from_name: formData.from_name,
                    message: formData.message,
                    email: formData.email,
                },
                EMAILJS_CONFIG.PUBLIC_KEY
            );
            console.log("Email Sent: ", response);
            setSuccess('Message sent successfully!');
            setFormData({ from_name: '', to_name: 'Jagdish Jangid', message: '', email: '' });
        } catch (error) {
            console.error("Error sending email:", error);
            if (error?.text) {
                console.error("EmailJS Error Text:", error.text);
            }
            setSuccess('Failed to send message. Try again.');
        }
        setLoading(false);
    };


    return (
        <div className='contact-form-content'>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='from_name'
                    placeholder='Your Name'
                    value={formData.from_name}
                    onChange={handleChange}
                    required
                />
                <input
                    type='email'
                    name='email'
                    placeholder='Your Email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name='message'
                    placeholder='Message'
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <button type='submit' disabled={loading}>
                    {loading ? 'Sending...' : 'SEND'}
                </button>
                {success && <p className="message-status">{success}</p>}
            </form>
        </div>
    );
};

export default ContactForm;
