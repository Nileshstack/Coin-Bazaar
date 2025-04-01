import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
    <div className='footer'>
      <p>Copying is a bad <span>Karma..</span></p> 
      <h5>DMCA <span>PROTECTED</span></h5>
    </div>
    <div className='patner'>
        <p>Partner Website:- <u><a href="https://www.coingecko.com/">CoinGecko</a></u></p>
    </div>
    </>
  )
}

export default Footer
