import React from 'react' 
import img1 from '../../assets/img/1-1.png'
import img2 from '../../assets/img/1-2.png'
import img3 from '../../assets/img/1-3.png'
import img4 from '../../assets/img/1-4.png'
import '../../assets/sass/section.scss'


const section01 = () => {
  return (
    <div>
      <div className="Section01_Wrap">
        <div className="garo">
          <h2>POSSIBILITY</h2>
          <img src={img1} alt="" className='img_01'/>
        </div>
        <div className="garo">
          <img src={img2} alt="" className='img_02'/>
          <h2>TO</h2>
          <img src={img3} alt="" className='img_03'/>
        </div>
        <div className="garo">
          <h2>REALITY</h2>
          <img src={img4} alt="" className='img_04'/>
        </div>
      </div>
    </div>
  )
}
export default section01
