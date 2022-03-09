import React from 'react'
import { projects } from '../../assets/Data'
import { Launch } from '@mui/icons-material'
import GitHubIcon from '@mui/icons-material/GitHub'

import './Projects.css'

const Projects = () => {
  return (
    <>
      <div className='project-component'>
        <h3 id='projects' className='section-header'>
          Projects
        </h3>
        <section className='projects-container'>
          {projects.map((project) => (
            <div key={project.title} className='project-card'>
              <div className='project-card-wrapper'>
                <img
                  className='project-image'
                  src={project.image}
                  alt={project.title}
                />
                <div className='project-title'>{project.title}</div>
                <div className='project-description'>{project.description}</div>
                <div className='tech-stack-container'>
                  {project.techStack.map((index, value) => (
                    <div className='tech-stack-item' key={index}>
                      {project.techStack[value]}
                    </div>
                  ))}
                </div>
                <div className='link-group'>
                  <a
                    className='link-icon'
                    href={project.githubLink}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <GitHubIcon />
                  </a>
                  <a
                    className='link-icon'
                    href={project.websiteLink}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <Launch />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  )
}

export default Projects
