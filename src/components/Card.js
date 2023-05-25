import React from "react";
import "../styles/style.css"
import { useNavigate } from "react-router-dom";

function Card({name,img,id,link,category}) {
  const navigate = useNavigate();
  function handleClick(){

    navigate("/game-details/"+id)
  }
  return (
    <>
      <div className="card">
        <div className="card-head">
          <div className="card-img">
            <img src={img} alt="" />
          </div>
          <div className="card-title">
            <h3>{name}</h3>
          </div>
        </div>
      {category==="model"?<a href={link} target="_blank" rel="noreferrer">View</a>:<button onClick={(handleClick)}>View</button>}
    
      </div>
    </>
  );
}

export default Card;
