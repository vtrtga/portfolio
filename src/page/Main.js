import React, { useRef } from 'react'
import Header from '../components/Header'
import FirstSection from '../components/FirstSection'
import SecondSection from '../components/SecondSection'
import ThirdSection from '../components/ThirdSection'
import '../css/Main.css'
import FourthSection from '../components/FourthSection'
import FifthSection from '../components/FifthSection'

export default function Main() {
  const refAbout = useRef(null);
    const refTecnologies = useRef(null);
    const refProjects = useRef(null);
    const refObjectives = useRef(null);

    const scrollTecnologies = () => {
        refTecnologies.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollAbout = () => {
        refAbout.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollProjects = () => {
        refProjects.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollObjectives = () => {
      refObjectives.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='Main'>
        <div>
        <Header 
        scrollTecnologies={ scrollTecnologies }
        scrollAbout={ scrollAbout }
        scrollProjects={ scrollProjects }
        scrollObjectives={ scrollObjectives }
        />
        <FirstSection />
        <SecondSection refAbout={ refAbout } />
        <ThirdSection refProjects={ refProjects }/>
        <FifthSection refObjectives={ refObjectives }/>
        <FourthSection refTecnologies={ refTecnologies }/>
        </div>
    </div>
  )
}
