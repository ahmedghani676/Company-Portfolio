import Image from 'next/image'
import Link from 'next/link'
import React,{useState} from 'react'
import ProjectPopUp from './ProjectPopUp';

interface ProjectList{
    title: string,
    backgroundImg: string,
    tech: string,
    description: string;
    demoUrl: string;
    githubUrl: string;
}



const ProjectItem : React.FC<ProjectList> = ({title, backgroundImg, tech,description,demoUrl,githubUrl}) => {
   const [isPopupOpen, setIsPopupOpen] = useState(false);
   const handleOpenPopup = () => setIsPopupOpen(true);
   const handleClosePopup = () => setIsPopupOpen(false);
   
    const project = {
    title,
    backgroundImg,
    tech,
    description,
    demoUrl,
    githubUrl
  };
    return (
<div className='relative flex items-center justify-center h-80 w-100 shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
    <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/' width={400} height={150} /> 
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-lg text-white tracking-wider text-center'>{title}</h3>
        <p className='pb-2 pt-1 text-white text-center text-sm'>{tech}</p>
        <p className='relative text-center py-2 rounded-lg bg-white text-gray-700 font-bold text-sm cursor-pointer' onClick={handleOpenPopup}>More Info</p>
    </div>
 <ProjectPopUp isOpen={isPopupOpen} onClose={handleClosePopup} project={project}
 />
 </div>
  )
}

export default ProjectItem