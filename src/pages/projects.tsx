import React from 'react';
import portfolioInfo from '../utils/projectInfo';
import ProjectTemplate from '../components/projectTemplate';



function Projects() {
  return (
    <>
    <div>
    {portfolioInfo.map((data) => {
      return <ProjectTemplate data={data} />
    }) }
    </div>

    
    </>
  );
}

export default Projects;