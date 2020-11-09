import React from 'react';
import portfolioInfo from '../utils/projectInfo';
import ProjectTemplate from '../components/projectTemplate';



function Projects() {
  return (
    <>
    <h1 className="projectHeading">Click on the projects below to learn more.</h1>
    <div>
    {portfolioInfo.map((data) => {
      return <ProjectTemplate data={data} />
    }) }
    </div>

    
    </>
  );
}

export default Projects;