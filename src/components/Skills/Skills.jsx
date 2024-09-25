import React, { useState } from 'react';
import './Skills.css';
import { SKILLS } from '../../utils/data';
import SkillsCard from './SkillsCard/SkillsCard';
import Skillsinfo from './SkillsCard/Skillsinfo/Skillsinfo';

function Skills() {
  const [ActiveSkill, setActiveSkill] = useState(SKILLS[0]);

  const handleactiveSkill = (data) => {
    setActiveSkill(data);
  };

  return (
    <section className="skills-container">
      <h5>Technical Proficiency</h5>

      <div className="skills-content">
        <div className="skills">
          {SKILLS.map((item) => (
            <SkillsCard
              key={item.title}
              iconUrl={item.iconUrl}
              title={item.title}
              isActive={ActiveSkill.title === item.title}
              onClick={() => handleactiveSkill(item)}
            />
          ))}
        </div>

        <div className="skills-info">
          <Skillsinfo heading={ActiveSkill.title} skills={ActiveSkill.skills} />
        </div>
      </div>
    </section>
  );
}

export default Skills;
