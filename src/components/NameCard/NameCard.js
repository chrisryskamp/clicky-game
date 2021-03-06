import React from "react";
import "./NameCard.css";

const NameCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Team:</strong> {props.name}
        </li>
      </ul>
    </div>
    <span onClick={() => props.removeName(props.id)} className="remove">
      𝘅
    </span>
  </div>
);

export default NameCard;
