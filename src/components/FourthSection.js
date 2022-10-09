import React, {useContext} from 'react'
import MyContext from '../context/MyContext'

export default function FourthSection() {
    const context = useContext(MyContext);

  return (
    <section className='four'>
    <div ref={context.refProjects}>Meus projetos</div>
    </section>
  )
}
