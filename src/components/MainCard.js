import React from 'react'
import Intro from './Intro'
import SixCards from './SixCards'
import Ending from './Ending'
import { testData } from './data'

const MainCard = () => {
  return (
    <div className='main-div'>
      <Intro />
      <SixCards data={testData} />
      <Ending />
    </div>
  )
}

export default MainCard;




