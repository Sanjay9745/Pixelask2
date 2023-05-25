import React from 'react'

function Hero() {
  return (
    <>
      <div className='hero'>
     <img src={process.env.PUBLIC_URL+"/logo.png"} alt="logo" />
     <p>Welcome To Pixelaks This Is Pixelaks Official Website.
From Here You Can Know Everything About Our Upcoming Projects And New Releases.
We Will Keep Posting More Important Post On This Website For All Of You.</p>
      </div>
    </>
  )
}

export default Hero
