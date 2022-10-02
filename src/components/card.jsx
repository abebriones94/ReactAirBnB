import React from "react";

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  // Using badgeText to determine Truthy and Falsy values below based on conditions above (condition rendering)

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img
        src={`/src/assets/${props.coverImg}`}
        className="card--image"
        alt=""
      />
       <div className="card--stats">
        <img src="/src/assets/star.png" className="card--star" alt="" />
        <span>{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount})</span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.price}</span>/ person
      </p>
    </div>
  );
}
