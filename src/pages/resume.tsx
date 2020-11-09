import React from 'react';
import resume1 from '../images/resumePG1.jpg';
import resume2 from '../images/resumePG2.jpg';
import resume3 from '../images/resumePG3.jpg';


function Resume() {
  return (
    <>
    <div className="resumeImages">
    <img src={resume1}/>
    <img src={resume2}/>
    <img src={resume3}/>

    </div>
    
    </>
  );
}

export default Resume;