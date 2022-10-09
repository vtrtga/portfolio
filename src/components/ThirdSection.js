import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

export default function ThirdSection() {
  const context = useContext(MyContext);

  return (
    <section className='three'>
        <div ref={context.refTecnologies}>Tecnologies</div>
    </section>
  )
}
