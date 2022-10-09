import React from 'react'
import Header from '../components/Header'
import FirstSection from '../components/FirstSection'
import SecondSection from '../components/SecondSection'
import ThirdSection from '../components/ThirdSection'
import '../css/Main.css'
import FourthSection from '../components/FourthSection'

export default function Main() {
  return (
    <div className='Main'>
        <div>
        <Header />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        </div>
    </div>
  )
}
