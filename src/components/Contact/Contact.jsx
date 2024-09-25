import React from "react";
import "./Contact.css";
import ContactCard from "./ContactCard/ContactCard";
import ContactForm from "./ContactForm/ContactForm";

const Contact = () => {
    return (
        <section className="contact-container">
            <h5>Contact Me</h5>
            <div className="contact-content">
                <div style={{ flex: 1 }}>
                    <ContactCard
                        iconUrl="./assets/images/email.png"
                        text="jagdishjangid8079@gmail.com"
                    />
                    <ContactCard
                        iconUrl="./assets/images/github.png"
                        text="https://github.com/jagdishjangid80"
                    />
                </div>
                <div style={{ flex: 1 }}>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
};

export default Contact;
