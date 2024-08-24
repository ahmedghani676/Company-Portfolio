import React, { useState} from 'react'
import Image from 'next/image';
import ProjectItem from './ProjectItem';
import { frontendProjects } from '@/data/ProjectList';
import {  CMSProjects } from '@/data/ProjectList';


const Project = () => {
    const [selectedCategory, setSelectedCategory] = useState('frontendProjects');
    const projectsToDisplay = selectedCategory === 'frontendProjects' ? frontendProjects : CMSProjects;

  return (
      <div id='projects' className='w-full py-20' style={{ backgroundImage: '', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '60vh' }}>
          <div className='max-w-[1240px] mx-auto px-2 py-20'>
            <h1 className='text-xl tracking-widest uppercase text-[#5651e5]'>
                  Projects
            </h1>
              <h2 className='py-4'>What We Have Built</h2>
               <div className="flex gap-4 mb-8">
          <button
            onClick={() => setSelectedCategory('frontendProjects')}
            className={`px-4 py-2 ${selectedCategory === 'frontendProjects' ? 'bg-blue-500 text-white shadow-none' : 'bg-gray-200 shadow-none'}`}
          >
            Software Development
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