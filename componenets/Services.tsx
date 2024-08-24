import React, { useEffect } from 'react'
import Image from 'next/image';

interface ServicesItem {
  name: string;
  link: string;
}

interface ServicesProps {
  servicesList: ServicesItem[];
}

const Services: React.FC<ServicesProps> = ({ servicesList }) => {
   const experiences = [
    {
    title: 'Software Engineer 1',
    company: 'CipherImpact',
    date: 'Aug 2023 - Present',
    description: (
      <div>
        <p>
          <strong>Key Responsibilities and Achievements:</strong>
        </p>
        <ul className="list-disc list-inside pl-5">
          <li>Onboarded microservices through NATS message queue system.</li>
          <li>
            Explored platform engineering tools like AWS services (S3 bucket, AWS Lambda functions).
          </li>
          <li>
            Implemented an email-based notification service with a delivery rate around 80%.
          </li>
          <li>
            Resolved issues identified by SonarQube.
          </li>
          <li>
            Implemented RBAC (Role-Based Access Control) microservice to manage authorized users.
          </li>
          <li>
            Developed generic logic for grid search based on Command Query Responsibility Segregation (CQRS) principle for APIs, handling deeply nested properties.
          </li>
          <li>
            Designed the backend for a construction management portal using .NET Core to manage multiple products.
          </li>
          <li>
            Improved test coverage for multiple microservices.
          </li>
          <li>
            Achieved a focus on high test coverage (85%) for all services.
          </li>
        </ul>
      </div>
    ),
    
  },
    {
      title: 'Software Engineer Intern - Part Time',
      company: 'MMC',
      date: 'June 2022 - Oct 2022',
       description: (
      <div>
        <p>
          <strong>Key Responsibilities and Achievements:</strong>
        </p>
        <ul className="list-disc list-inside pl-5">
          <li>
            Developed both frontend and backend for a services-based project using React.js and Node.js.
          </li>
          <li>
            Implemented libraries like i18n for multilingual features and Chart.js for graphing on the website.
          </li>
          <li>
            Resolved production-based bugs to ensure smooth application performance.
          </li>
          <li>
            Designed the schema and developed APIs to support the application functionality.
          </li>
        </ul>
      </div>
    ),
      
    }
  ];

  return (
    <section id="experince" className="relative py-16 px-4 bg-black text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#5651e5]">Experience</h2>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bg-gray-600 w-1 h-full top-0" />

          {/* Timeline Items */}
          <div className="relative">
            {experiences.map((item, index) => (
              <div key={index} className="relative mb-6 flex items-start">
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-blue-500 w-3 h-3 rounded-full" />
                
                {/* Experience Card */}
                <div className="bg-gray-800 shadow-lg rounded-lg p-4 w-80 ml-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.company}</p>
                   <p className="text-gray-500 mt-2">{item.date}</p>
                  <p className="text-gray-300 mt-2">{item.description}</p>
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );


}

export default Services