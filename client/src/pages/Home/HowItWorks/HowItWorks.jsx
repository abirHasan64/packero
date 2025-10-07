const HowItWorks = ({ title, text, image }) => {
  return (
    <div className="card bg-accent w-64 shadow-xl p-2 mx-auto my-20">
      <figure>
        <img className="w-24 h-24" src={image} alt="icon" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default HowItWorks;
