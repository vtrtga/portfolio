import React, { useContext } from 'react'
import MyContext from '../context/MyContext';

export default function SecondSection() {
  const context = useContext(MyContext)
  return (
    <section ref={ context.refAbout } className='two'>
        <div>Sobre mim</div>
    </section>
  )
}
