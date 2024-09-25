import React, { useRef } from 'react';  
import './WorkExperience.css';
import ExperienceCard from './Experience-Card/ExperienceCard';
import { WORK_EXPERIENCE } from '../../utils/data';
import Slider from 'react-slick';

const WorkExperience = () => {
  const sliderRef = useRef(null);  

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false, 
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const goNext = () => {
    sliderRef.current.slickNext();
  };

  const goPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <>
      <section className="experience-container">
        <h5>Work Experience</h5>
        <div className="experience-content">
          <div className='arrow-left' onClick={goPrev}>
            <span className='material-symbols-outlined'>
            {'<'}
            </span>
          </div>
          <div className='arrow-right' onClick={goNext}>
            <span className='material-symbols-outlined'>
              {'>'}
            </span>
          </div>
          <Slider ref={sliderRef} {...settings}> 
            {WORK_EXPERIENCE.map((item) => (
              <ExperienceCard key={item.title} details={item} />
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default WorkExperience;
