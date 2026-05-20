import React from 'react'
import logo2 from '../../assets/img/logo2.png'
import icon1 from '../../assets/img/icon_instagram 1.svg'
import icon2 from '../../assets/img/Vector.png'
import icon3 from '../../assets/img/icon_brunch 1.svg'
import bgcircle from '../../assets/img/blackcircle.png'
import '../../assets/sass/footer.scss'

const Footer = () => {
  return (
    <div>
      <div className="Footer_Wrap">
        <div className="group_letter">


          <div className="group01">
            <img src={logo2} alt="" className='logo_02'/>
            <p>(주)멋쟁이사자처럼 | 대표이사 나성영</p>
            <p>서울특별시 종로구 종로3길 17 D타워, 16-17층</p>
            <p>사업자 번호 : 264-88-01106</p>
            <p>통신판매업 신고번호 : 2022-서울종로-1534</p>
            <p>✉ 문의처 contact@likelion.net</p>
          </div>


          <div className="group02">
            <h4>FAMILY BRAND</h4>
            <p>TECHIT</p>
            <p>SYLTARE</p>
            <p>MODERN LION</p>
            <p>QUADHASH</p>

          </div>


          <div className="group03">
            <h4>POLICY</h4>
            <p>이용약관</p>
            <p>개인정보처리방침</p>
            <p>Nonprofit Report</p>
            <p>국민권익위원회</p> 
          </div>


          <div className="group04">
            <h4>RESOURCE</h4>
            <p>로고 가이드라인</p>
            
          </div>
          
        </div>


        <div className="group_icon">
          <img src={icon1} alt="" className='icon_01'/>
          <img src={icon2} alt="" className='icon_02'/>
          <img src={icon3} alt="" className='icon_03'/>
        
          <img src={bgcircle} alt="" className='blackcircle_01'/>
          <img src={bgcircle} alt="" className='blackcircle_02'/>
          <img src={bgcircle} alt="" className='blackcircle_03'/>

        </div>
        
      </div>
      
    </div>
  )
}

export default Footer
