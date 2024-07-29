import React, { useState} from 'react'
import Image from 'next/image';
import ProjectItem from './ProjectItem';
import { frontendProjects } from '@/data/ProjectList';
import { BackendProjects } from '@/data/ProjectList';


const Project = () => {
    const [selectedCategory, setSelectedCategory] = useState('frontend');
    
      const projectsToDisplay = selectedCategory === 'frontend' ? frontendProjects : BackendProjects;

  return (
      <div id='projects' className='w-full py-20'>
          <div className='max-w-[1240px] mx-auto px-2 py-20'>
            <h1 className='text-xl tracking-widest uppercase text-[#5651e5]'>
                  Projects
            </h1>
              <h2 className='py-4'>What We Have Built</h2>
               <div className="flex gap-4 mb-8">
          <button
            onClick={() => setSelectedCategory('frontend')}
            className={`px-4 py-2 ${selectedCategory === 'frontend' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Frontend
          </button>
          <button
            onClick={() => setSelectedCategory('backend')}
            className={`px-4 py-2 ${selectedCategory === 'backend' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Backend
          </button>
              </div>
              
              <div className = "grid md:grid-cols-2 gap-8">
                {projectsToDisplay.map((project, index) => (
                    <ProjectItem
                        key={index}
                        description={project.description}
                        demoUrl={project.demoUrl}
                        githubUrl= {project.githubUrl}
                        title={project.title}
                        backgroundImg={project.backgroundImg}
                        tech={project.tech}
                    />
          ))}
              
              </div>
          </div>
      </div>
      
  )
}

export default Project