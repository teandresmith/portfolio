import React from 'react'
import {
  proficientSkills,
  familiarSkills,
  currentlyLearningSkills,
} from '../../assets/Data'
import './Skills.css'

const Skills = () => {
  return (
    <>
      <div className='skills-component'>
        <h3 id='skills' className='skills-header'>
          Skills
        </h3>
        <div className='proficient-skills'>
          <h4 className='skill-category-text'>Proficient</h4>
          <section className='skills-container-wrapper'>
            <div className='skills-container'>
              {proficientSkills.map((skill) => (
                <div className='skill-container' key={skill.name}>
                  <img
                    className='skill-image'
                    src={skill.logo}
                    alt={skill.name}
                  />
                  <div className='skill-name'>{skill.name}</div>
                </div>
              ))}
            </div>
          </section>
        </div>
        <div className='familiar-skills'>
          <h4 className='skill-category-text'>Familiar</h4>
          <section className='skills-container-wrapper'>
            <div className='skills-container'>
              {familiarSkills.map((skill) => (
                <div className='skill-container' key={skill.name}>
                  <img
                    className='skill-image'
                    src={skill.logo}
                    alt={skill.name}
                  />
                  <div className='skill-name'>{skill.name}</div>
                </div>
              ))}
            </div>
          </section>
        </div>
        <div className='currently-learning-skills'>
          <h4 className='skill-category-text'>Currently Learning</h4>
          <section className='skills-container-wrapper'>
            <div className='skills-container'>
              {currentlyLearningSkills.map((skill) => (
                <div className='skill-container' key={skill.name}>
                  <img
                    className='skill-image'
                    src={skill.logo}
                    alt={skill.name}
                  />
                  <div className='skill-name'>{skill.name}</div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Skills
