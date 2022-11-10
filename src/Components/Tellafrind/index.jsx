import React from 'react'
import facebook from '../Tellafrind/images/facebook.png'
import instagram from '../Tellafrind/images/instagram.png'
import twitter from '../Tellafrind/images/twitter.png'
import whatsapp from '../Tellafrind/images/whatsapp.png'
import messenger from '../Tellafrind/images/messenger.png'
import telegram from '../Tellafrind/images/telegram.png'
import './styles.css'

const Tellafrind = () => {
  return (
    <div className='tell-container'>
      <h3 className='tell-title'>
        ¡Compartí con un amigo!
      </h3>
      <div className='tell-socialNetworks-container'>
       <a href="#"><img src= {facebook} alt="Facebook" className='tell-socialNetworks' /></a>
       <a href="#"><img src= {instagram} alt="Instagram" className='tell-socialNetworks' /></a>
       <a href="#"><img src= {twitter} alt="Twitter" className='tell-socialNetworks' /></a>
       <a href="#"><img src= {whatsapp} alt="Whatsapp" className='tell-socialNetworks' /></a>
       <a href="#"><img src= {messenger} alt="Messenger" className='tell-socialNetworks' /></a>
       <a href="#"><img src= {telegram} alt="Telegram" className='tell-socialNetworks' /></a>
      </div>
    </div>
  )
}

export default Tellafrind