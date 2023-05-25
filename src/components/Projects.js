import React from "react";
import Card from "./Card";
import "../styles/style.css";
import { games,models } from "../data";
function Projects() {
  return (
    <>
      <div className="projects">
        <h1>More By Pixelak</h1>
        <div className="games">
          <h2>Games</h2>
          <div className="cards">
            {games.map((game,index)=> <Card
            id={index}
            key={index}
              name={game.name}
              img={game.img}
            />)}
           
            
          </div>
          <div className="models">
            <h2>3D MOdels</h2>
            <div className="cards">
              {models.map((model,index)=><Card
              category={"model"}
              key={index}
              id={index}
                name={model.name}
                img={model.img}
                link={model.link}
              />)}
              
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
