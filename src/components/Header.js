import React from 'react'

export default function Header({ scrollAbout, scrollProjects, scrollTecnologies, scrollObjectives }) {
    return (
        <header>
        <span onClick={ scrollAbout }>
            Sobre mim
            </span>
        <span onClick={ scrollObjectives }>Objetivos</span>
        <span onClick={ scrollProjects }>Meus projetos</span>
        <span onClick={ scrollTecnologies }>Tecnologias</span>
    </header>
  )
}
