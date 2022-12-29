import React from 'react'

export default function Header({ scrollAbout, scrollProjects, scrollTecnologies }) {
    return (
        <header>
        <span onClick={ scrollAbout }>
            Sobre mim
            </span>
        <span onClick={ scrollProjects }>Meus projetos</span>
        <span onClick={ scrollTecnologies }>Tecnologias</span>
    </header>
  )
}
