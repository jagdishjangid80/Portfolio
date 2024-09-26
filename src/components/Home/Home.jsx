import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
      <section className="hero-container">
        <div className="hero-content">
          <h2>Building Digital Experiences That Inspire</h2>
          <p>
            Passionate Frontend Developer | Transforming Ideas into Visually Stunning
            Web Solutions
          </p>
        </div>
        <div className="hero-img">
          <div>
          <div className="tech-icon">
              <img src="./assets/images/react_js.png" alt="React JS" />
            </div>
            <img src="./assets/images/profile.png" alt="Profile" />
          </div>
          <div>
            <div className="tech-icon">
              <img src="./assets/images/html.png" alt="HTML" />
            </div>
            <div className="tech-icon">
              <img src="./assets/images/css.png" alt="CSS" />
            </div>
            <div className="tech-icon">
              <img src="./assets/images/js.png" alt="JavaScript" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
