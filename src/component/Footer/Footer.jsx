import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer 'id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
           <img src={assets.logo} alt="" />
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptates, non quasi debitis ab assumenda!</p>
           <div className="footer-social-icon">
             <img src={assets.facebook_icon} alt="" />
             <img src={assets.twitter_icon} alt="" />
             <img src={assets.linkedin_icon} alt="" />
           </div>
        </div>
        <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
           <h2>GET IN TOUCH</h2>
           <ul>
            <li>23-21-453-4353</li>
            <li>contact@food.com</li>
           </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>
        Copyright 2025 @ food.com -all Right Reseved.
      </p>
    </div>
  )
}

export default Footer
