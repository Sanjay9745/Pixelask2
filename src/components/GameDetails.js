import React, { useEffect, useState } from "react";
import "../styles/style.css"
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useParams , useNavigate} from 'react-router-dom';
import Game from "./Game";
import { games } from "../data";

function GameDetails() {
 let {id}=useParams(); //gets the id from the url, params are dynamic and change with each new game being added to the database.cons
const navigate = useNavigate()

const [state, setState] = useState(false);
useEffect(()=>{
  if(parseInt(id)<games.length){
    setState(true);
    }else{
     navigate("/")
    }
},[id, navigate])

 return (
    <>
    <Navbar/>
    {state&&
    <Game
    id={id}
    key={id}
      name={games[id].name}
      image={games[id].img}
      description={games[id].description}
      howToPlay={games[id].howToPlay}
      youtubeLink={games[id].youtubeLink}
      playStore={games[id].playStore}
      img={games[id].img}
    />}
    
      <Footer/>
    </>
  );
}

export default GameDetails;
