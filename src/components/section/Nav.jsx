import React from 'react'
import Logo from '../../assets/img/likelion_logo.svg'
import '../../assets/sass/nav.scss'

const Nav = () => {
  return ( 
    <div className="Nav_Wrap">
        <img src={Logo}  alt="" className='logo'/>
        <div className="list">
            <div className="brand">브랜드 스토리</div>
            <div className="info">서비스 소개</div>
            <div className="media">미디어</div>
            <div className="job">채용</div>
        </div>
    </div>
  )
}

export default Nav
