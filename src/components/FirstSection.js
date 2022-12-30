import React from 'react';
import image from '../images/minha-foto.jpeg';

export default function FirstSection() {
  return (
    <section className='one'>
        <div className='first-title'>
          {"Vitor Valim, desenvolvedor web fullstack </>"}
          </div>
          <img alt="minha-foto" className='my-picture' src={ image }/>
    </section>
  )
}
