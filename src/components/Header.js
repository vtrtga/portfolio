import React, { useContext } from 'react'
import MyContext from '../context/MyContext'

export default function Header() {
    const context = useContext(MyContext)
    return (
        <header>
        <span onClick={context.scrollAbout}>
            Sobre mim
            </span>
        <span onClick={context.scrollProjects}>Meus projetos</span>
        <span onClick={context.scrollTecnologies}>Tecnologias</span>
    </header>
  )
}
