import React from "react";
import { Link } from "react-router-dom";

const CardPoquemone = ({ name, img,id }) => {
  return (
    <div>
      <a className="texto-encima">{name}</a>
      <Link to={`/informacion/${id}`}>
      <img
        style={{ Height: 200, width: 200, marginTop: 25 }}
        alt="casa"
        width={"60px"}
        height={"160px"}
        src={img}
      />
      </Link>
    </div>
  );
};

export default CardPoquemone;
