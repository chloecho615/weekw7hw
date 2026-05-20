import React from 'react'
import img8 from '../../assets/img/3-1.png'
import img9 from '../../assets/img/3-2.png'
import img10 from '../../assets/img/3-3.png'
import img11 from '../../assets/img/3-4.png'

const section05 = () => {
  return (
    <div>
      <div className="Section05_Header">
        <p>LIKELION MEDIA</p>
        <h2>언론 속의 LIKELION</h2>
      </div>

      <div className="Section05_Wrap">
        
        <div className="set">
          <img src={img8} alt="" className='img_08'/>
          <div className="text_wrap">
            <h3>“비즈니스 문제 해커톤으로 해결”...멋쟁이사자처럼, 기업 해커톤 출시</h3>
            <p>정보기술(IT) 교육 기업 멋쟁이사자처럼(멋사)은 31일부터 해커톤 참가자들을 통해 기업이 가진 비즈니스 문제를...</p>
            <span>머니S | 2023.10.31</span>
          </div>
        </div>

        <div className="set">
          <img src={img9} alt="" className='img_09'/>
          <div className="text_wrap">
            <h3>P2E ‘실타래’, 편의성 강화해 진입 장벽 낮춘다</h3>
            <p>멋쟁이사자처럼은 메타콩즈뿐 아니라 여러 갈래의 대체불가토큰(NFT) 사업을 펼쳤다. 멋쟁이사자처럼 산하 블록...</p>
            <span>더벨 | 2023.01.27</span>
          </div>
        </div>

        <div className="set">
          <img src={img10} alt="" className='img_10'/>
          <div className="text_wrap">
            <h3>콘크릿, 글로벌 아티스트 톰 삭스와 이태원 전역에서 보물찾기 진행</h3>
            <p>현대카드와 멋쟁이사자처럼의 합작법인 모던라이언이 운영하는 NFT 마켓플레이스 ‘KONKRIT(이하 콘크릿)’이...</p>
            <span>경향게임스 | 2023.09.13</span>
          </div>
        </div>

        <div className="set">
          <img src={img11} alt="" className='img_11'/>
          <div className="text_wrap">
            <h3>멋쟁이사자처럼, 아트 NFT·실물 연계 ‘쿼드해시’ 프로젝트 띄운다</h3>
            <p>멋쟁이사자처럼이 아트NFT와 실물을 연계한 대체불가토큰(NFT) 프로젝트 쿼드해시를 추진한다.</p>
            <span>디지털투데이 | 2023.09.27</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default section05