import React from 'react'
import Aboutme from './Aboutme'
import Project from './Projects'
import Recommendation from './Recommendation'
import SkillSection from './SkillSection'
import Title from './Title'



function HomePage(){
    return(
        <div>
           <Title />
           <Recommendation /> 
           <SkillSection />
           <Project />
           <Aboutme />
        </div>

    );
}

export default HomePage;