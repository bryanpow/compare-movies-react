import React from "react";
import { sanitizeInput } from "../../helpers";

function MovieCard(title, critic, audience, box, genre) {
  return (
    <div>
      <div id={Math.floor(Math.random() * 1393939300303033)} className="cardInfo">
        <p className="divtitle" style="font-weight:bold; padding-top: 5px">
          {sanitizeInput(title)}
        </p>
        <p>Critic-score: {sanitizeInput(critic)}%</p>
        <p>Viewer-score: {sanitizeInput(audience)}%</p>
        <p>Box-Office: {sanitizeInput(box)}</p>
        <p>Genre: {sanitizeInput(genre)}</p>
      </div>

      <img src={img} width="100%" height="100%" className="cardPicture"></img>
    </div>
  );
}

export default MovieCard;
