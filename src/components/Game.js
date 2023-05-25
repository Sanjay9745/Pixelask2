import React from 'react'
import { Link } from 'react-router-dom'

function Game({name,description,howToPlay,youtubeLink,playStore}) {
  return (
    <div>
        <div className="game-details">
        <h1>{name}</h1>
        <iframe
          width="560"
          height="315"
          src={youtubeLink}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <h3 >{name}</h3>
        <p>
          {description}
        </p>
       <Link href={playStore}>
       <img src={process.env.PUBLIC_URL + "/google-play.png"} alt="" />
       </Link> 
        <h3>How to play</h3>
        <p>
          {howToPlay}
        </p>
      </div>
    </div>
  )
}

export default Game
