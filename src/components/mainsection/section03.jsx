import React from 'react'
import img5 from '../../assets/img/2-1.png'
import img6 from '../../assets/img/2-2.png'
import img7 from '../../assets/img/2-3.png'

const section03 = () => {
  return (
    <div>
      <div className="Section03_Wrap">
        <div className="set">
          <img src={img5} alt="" className='img_05'/>
          <div className="text_wrap">
            <p className="vision">VISION</p>
            <h2>IT 교육 기회를 제공하여<br/>꿈꾸던 가능성을 열어준다.</h2>
            <p className="text">Open up the possibility of dreaming by providing IT education opportunities.</p>
          </div>
        </div>
        <div className="set">
          <img src={img6} alt="" className='img_06'/>
          <div className="text_wrap">
            <p className="vision">VISION</p>
            <h2>IT 기술로 IT 교육의 문제를<br/>해결한다.</h2>
            <p className="text">Solve IT education problems using IT technology.</p>
          </div>
        </div>
        <div className="set">
          <img src={img7} alt="" className='img_07'/>
          <div className="text_wrap">
            <p className="vision">VISION</p>
            <h2>지속 성장이 가능한 IT<br/>커뮤니티를 구축한다.</h2>
            <p className="text">Establish an IT community that can sustain growth.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default section03
