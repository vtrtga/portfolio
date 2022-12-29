import React from 'react';

export default function ThirdSection({ refProjects }) {
  return (
    <section className='three'>
        <div ref={ refProjects }>Meus projetos</div>
    </section>
  )
}
