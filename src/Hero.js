import React from 'react'
import phoneImg from './images/phone.svg'
import {useGlobalContext} from './context'

const Hero = () => {
  const {closeSubMenuBar} = useGlobalContext();
  return <section className='hero'  onMouseOver={closeSubMenuBar}>
          <div className='hero-center'>
            <artical className="hero-info">
              <h3>Hàng triệu thuê bao di động sai thông tin sẽ</h3>
              <p>Cả Viettel, VinaPhone, MobiFone đều có hơn 1 triệu thuê 
                bao di động có thông tin chưa khớp với cơ sở dữ liệu dân cư quốc gia. 
                Những thuê bao này sẽ bị khóa liên lạc từ 31/3. </p>
            </artical>
            <article className='hero-images'>
              <img src={phoneImg} className="phone-img"/>
            </article>
          </div>
        </section>
}

export default Hero
