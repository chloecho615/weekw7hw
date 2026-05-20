import React from 'react'
import Section01 from '../components/mainsection/section01'
import Section02 from '../components/mainsection/section02'
import Section03 from '../components/mainsection/section03'
import Section04 from '../components/mainsection/section04'
import Section05 from '../components/mainsection/section05'

const Main = () => {
  return (
    <div className="Main_Wrap">
        <Section01/>
        <Section02/>
        <Section03/>
        <Section04/>
        <Section05/>
    </div>
  )
}

export default Main
