import React from 'react'
import { myHistory, myHistoryThree, myHistoryTwo } from '../text/history';

export default function SecondSection({ refAbout }) {
  return (
    <section ref={ refAbout } className='two'>
        <h1 className='second-title'>Uma parte da minha história</h1>
        <div className='text-container'>
        <h4>
          {
            myHistory
          }
        </h4>
        <h4>
          {
            myHistoryTwo
          }
        </h4>
        <h4>
          {
            myHistoryThree
          }
        </h4>
          </div>
    </section>
  )
}
