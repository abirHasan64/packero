import React from "react";

const HowItWorksCard = ({ image, title, text }) => {
  return (
    <div className="card bg-accent w-3/4 lg:w-72 rounded-xl shadow-xl p-2 mx-auto">
      <figure>
        <img className="w-24 h-24" src={image} alt="icon" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white">{title}</h2>
        <p className="text-white">{text}</p>
      </div>
    </div>
  );
};

export default HowItWorksCard;
